import { Fragment, useEffect } from 'react'
import mermaid from 'mermaid'
import { Marked, type Tokens } from 'marked'
import './App.css'

const modules = import.meta.glob('../../../*.md', { query: '?raw', import: 'default', eager: true }) as Record<string, string>

const GROUPS = [
  { id: 'literature-reviews', label: 'Literature Reviews' },
  { id: 'lab-canons', label: 'Lab Canons' },
  { id: 'math-and-physics-of-neuroscience', label: 'Math and Physics of Neuroscience' },
] as const

type GroupId = typeof GROUPS[number]['id']

const KNOWN_GROUP_IDS = new Set<string>(GROUPS.map((g) => g.id))
const ALREADY_NUMBERED = /^(\d+[.)]\s|topic\s+\d+\b)/i

type DocMeta = {
  group: GroupId
  order: number
  label: string
}

type TocNode = {
  id: string
  label: string
  depth: number
  children: TocNode[]
}

type ParsedDocument = {
  html: string
  toc: TocNode[]
}

type Doc = DocMeta & {
  fileId: string
  html: string
  toc: TocNode[]
}

function filenameId(path: string) {
  return path.split('/').pop()!.replace(/\.md$/, '')
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
}

function buildTocTree(nodes: Omit<TocNode, 'children'>[]): TocNode[] {
  const roots: TocNode[] = []
  const stack: TocNode[] = []
  for (const node of nodes) {
    const entry: TocNode = { ...node, children: [] }
    while (stack.length && stack[stack.length - 1].depth >= entry.depth) {
      stack.pop()
    }
    if (stack.length === 0) {
      roots.push(entry)
    } else {
      stack[stack.length - 1].children.push(entry)
    }
    stack.push(entry)
  }
  return roots
}

function parseFrontmatter(raw: string): { meta: Partial<DocMeta>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }
  const meta: Record<string, string | number> = {}
  for (const line of match[1].split(/\r?\n/)) {
    const kv = line.match(/^([A-Za-z0-9_-]+):\s*(.*)$/)
    if (!kv) continue
    const key = kv[1]
    const value = kv[2].trim().replace(/^["']|["']$/g, '')
    meta[key] = key === 'order' ? Number(value) : value
  }
  return { meta: meta as Partial<DocMeta>, body: match[2] }
}

function parse(fileId: string, raw: string): ParsedDocument {
  const counters = [0, 0, 0]
  const tocEntries: Omit<TocNode, 'children'>[] = []
  const seenHeadingIds: Record<string, number> = {}
  const instance = new Marked({
    breaks: true,
    renderer: {
      heading(token: Tokens.Heading) {
        const text = token.tokens.map((entry) => entry.raw).join('')
        const depth = token.depth
        const selfNumbered = ALREADY_NUMBERED.test(text.trim())
        const base = slugify(text) || `section-${tocEntries.length + 1}`
        const count = seenHeadingIds[base] ?? 0
        seenHeadingIds[base] = count + 1
        const headingId = count === 0 ? `${fileId}-${base}` : `${fileId}-${base}-${count + 1}`
        if (depth <= 3) {
          tocEntries.push({ id: headingId, label: text, depth })
        }
        if (depth === 1) {
          counters[0]++; counters[1] = 0; counters[2] = 0
          return `<h1 id="${headingId}">${text}</h1>\n`
        } else if (depth === 2) {
          if (!selfNumbered) counters[1]++; counters[2] = 0
          if (selfNumbered) return `<h2 id="${headingId}">${text}</h2>\n`
          return `<h2 id="${headingId}"><span class="h-num">${counters[1]}</span>${text}</h2>\n`
        } else {
          if (!selfNumbered) counters[2]++
          if (selfNumbered) return `<h3 id="${headingId}">${text}</h3>\n`
          return `<h3 id="${headingId}"><span class="h-num">${counters[1]}.${counters[2]}</span>${text}</h3>\n`
        }
      },
      code(token: Tokens.Code) {
        if (token.lang?.trim().toLowerCase() === 'mermaid') {
          return `<pre class="mermaid">${escapeHtml(token.text)}</pre>\n`
        }
        return false
      },
    },
  })
  return {
    html: instance.parse(raw) as string,
    toc: buildTocTree(tocEntries),
  }
}

function loadDocs(): Doc[] {
  const docs: Doc[] = []
  for (const [path, raw] of Object.entries(modules)) {
    const fileId = filenameId(path)
    const name = path.split('/').pop() ?? ''
    if (name.includes('provenance') || name === 'readme.md') continue
    const { meta, body } = parseFrontmatter(raw)
    if (!meta.group || !meta.label || meta.order == null || Number.isNaN(meta.order)) {
      console.warn(`[docs] ${name} skipped: front-matter must include group, order, label`)
      continue
    }
    if (!KNOWN_GROUP_IDS.has(meta.group)) {
      console.warn(`[docs] ${name} skipped: unknown group "${meta.group}"`)
      continue
    }
    const parsed = parse(fileId, body)
    docs.push({
      fileId,
      group: meta.group as GroupId,
      order: meta.order,
      label: meta.label,
      html: parsed.html,
      toc: parsed.toc,
    })
  }
  return docs
}

const docsByGroup: Record<GroupId, Doc[]> = Object.fromEntries(
  GROUPS.map((g) => [g.id, [] as Doc[]]),
) as Record<GroupId, Doc[]>

for (const doc of loadDocs()) {
  docsByGroup[doc.group].push(doc)
}
for (const group of GROUPS) {
  docsByGroup[group.id].sort((a, b) => a.order - b.order)
}

function HeadingToc({ items }: { items: TocNode[] }) {
  if (items.length === 0) return null
  return (
    <ol className="heading-toc">
      {items.map((item) => (
        <li key={item.id}>
          <a href={`#${item.id}`}>{item.label}</a>
          <HeadingToc items={item.children} />
        </li>
      ))}
    </ol>
  )
}

function Section({ id, label, html }: { id: string; label: string; html: string }) {
  return (
    <section id={id}>
      <p className="section-label">{label}</p>
      <div className="doc-body" dangerouslySetInnerHTML={{ __html: html }} />
    </section>
  )
}

export default function App() {
  useEffect(() => {
    mermaid.initialize({
      startOnLoad: false,
      securityLevel: 'strict',
      theme: 'neutral',
    })
    void mermaid.run({ querySelector: '.doc-body .mermaid' })
  }, [])

  return (
    <div className="app">
      <div className="toc-page">
        <p className="site-title">Notes towards Neurostimulation and Mathematical Neuroscience</p>
        <p><i>With contributions from @adiabaticgarden</i></p>
        <ol>
          {GROUPS.map((group) => (
            <Fragment key={group.id}>
              <li><a href={`#${group.id}`}>{group.label}</a></li>
              <ol>
                {docsByGroup[group.id].map((doc) => (
                  <li key={doc.fileId}>
                    <a href={`#${doc.fileId}`}>{doc.label}</a>
                    <HeadingToc items={doc.toc} />
                  </li>
                ))}
              </ol>
            </Fragment>
          ))}
        </ol>
      </div>

      <div className="content">
        {GROUPS.map((group, gi) => (
          <Fragment key={group.id}>
            <section id={group.id} className="section-group">
              <p className="section-label">{`${gi + 1}  ${group.label}`}</p>
            </section>
            {docsByGroup[group.id].map((doc, di) => (
              <Section
                key={doc.fileId}
                id={doc.fileId}
                label={`${gi + 1}.${di + 1}  ${doc.label}`}
                html={doc.html}
              />
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  )
}
