# Provenance Record — statistical-mechanics-neuroscience

- **Date:** 2026-04-23
- **Topic:** Review statistical mechanics techniques in neuroscience
- **Slug:** `statistical-mechanics-neuroscience`
- **Canonical review:** `outputs/statistical-mechanics-neuroscience.md`
- **Plan artifact:** `outputs/.plans/statistical-mechanics-neuroscience.md`

## Workflow Summary
1. Wrote planning artifact with scope, task ledger, and verification log.
2. Ran parallel `researcher` subagent sweeps for:
   - maximum entropy / inverse Ising / neural population coding,
   - attractors / spin glasses / mean-field theory,
   - criticality / renormalization / nonequilibrium dynamics.
3. Drafted the literature review.
4. Ran `verifier` to add inline citations and verify URLs.
5. Ran `reviewer`, fixed flagged issues, then ran a second review pass.
6. Verified final outputs on disk.

## Sources Consulted
### Research papers, reviews, and preprints consulted
1. https://doi.org/10.1371/journal.pcbi.1004182
2. https://doi.org/10.3389/fncir.2019.00001
3. https://www.frontiersin.org/articles/10.3389/fncom.2020.00020/full
4. https://doi.org/10.1038/nature04701
5. https://doi.org/10.7554/eLife.06134
6. https://doi.org/10.1016/j.neuron.2017.10.027
7. https://doi.org/10.1371/journal.pcbi.1005762
8. https://doi.org/10.1038/s41598-017-05462-2
9. https://doi.org/10.1103/PhysRevE.96.062104
10. https://doi.org/10.1038/ncomms2388
11. https://doi.org/10.1016/j.neuron.2021.09.042
12. https://doi.org/10.1371/journal.pcbi.1012074
13. https://doi.org/10.1038/s41467-025-66669-w
14. https://arxiv.org/abs/2409.00412
15. https://www.nature.com/articles/s41583-022-00642-0
16. https://doi.org/10.1007/s10955-025-03447-4
17. https://doi.org/10.1007/978-3-030-89439-9_6
18. https://doi.org/10.1371/journal.pcbi.1010813
19. https://doi.org/10.1103/PhysRevX.13.011009
20. https://doi.org/10.1073/pnas.1514188112
21. https://doi.org/10.1038/s41586-019-0919-7
22. https://doi.org/10.1038/s41586-021-04268-7
23. https://www.nature.com/articles/s41467-024-44877-0
24. https://doi.org/10.1016/j.pneurobio.2017.07.002
25. https://doi.org/10.1016/j.conb.2019.08.002
26. https://doi.org/10.3389/fphy.2021.639389
27. https://doi.org/10.3389/fncir.2022.911245
28. https://doi.org/10.1016/j.physrep.2025.10.003
29. https://doi.org/10.1016/j.neuron.2018.10.045
30. https://doi.org/10.1103/PhysRevLett.122.208101
31. https://doi.org/10.1103/PhysRevE.102.012408
32. https://doi.org/10.1103/PhysRevLett.126.098101
33. https://doi.org/10.1038/s42003-023-05001-y
34. https://doi.org/10.1038/s43588-023-00410-9
35. https://arxiv.org/abs/2301.09600
36. https://doi.org/10.1523/ENEURO.0551-20.2021

## Sources Accepted in Final Review
Accepted in the final review: all 36 sources above.

Notes on evidence strength:
- Sources 14 and 35 are **arXiv/preprint-stage** and are treated as emerging rather than settled.
- Source 28 is a **2026 review** included intentionally because it is a recent synthesis directly relevant to the nonequilibrium branch.
- Several DOI URLs were bot-protected or JS-rendered, but verifier cross-checked them against authoritative metadata or alternate landing pages.

## Sources Rejected or Not Carried Forward
- No fully consulted sources were rejected from the final bibliography.
- Some stronger draft phrasing was rejected instead of the underlying sources:
  - exact-criticality language was downgraded to critical-like / near-critical / quasicritical language,
  - universal-success phrasing for pairwise MEMs was downgraded to baseline-oriented language,
  - broad universality-class claims were marked as emerging because the strongest direct source is a preprint.

## Verification Status
- **Plan file written:** yes
- **Research subagent files written:** yes
  - `notes/statistical-mechanics-neuroscience-research-maxent.md`
  - `notes/statistical-mechanics-neuroscience-research-attractors.md`
  - `notes/statistical-mechanics-neuroscience-research-criticality.md`
- **Verifier pass completed:** yes
  - `notes/statistical-mechanics-neuroscience-verified.md`
  - `notes/statistical-mechanics-neuroscience-verifier-note.md`
- **Reviewer pass completed:** yes
  - `notes/statistical-mechanics-neuroscience-review.md`
- **Second reviewer pass completed:** yes
  - `notes/statistical-mechanics-neuroscience-review-pass2.md`
- **Final reviewer status:** no FATAL issues remain
- **URL verification:** performed by verifier; blocked DOI pages were checked via alternate authoritative records

## Intermediate Research Files Used
- `notes/statistical-mechanics-neuroscience-research-maxent.md`
- `notes/statistical-mechanics-neuroscience-research-attractors.md`
- `notes/statistical-mechanics-neuroscience-research-criticality.md`
- `notes/statistical-mechanics-neuroscience-verified.md`
- `notes/statistical-mechanics-neuroscience-verifier-note.md`
- `notes/statistical-mechanics-neuroscience-review.md`
- `notes/statistical-mechanics-neuroscience-review-pass2.md`

## Final File Check
The following files were verified on disk at the end of the run:
- `outputs/statistical-mechanics-neuroscience.md`
- `outputs/statistical-mechanics-neuroscience.provenance.md`
