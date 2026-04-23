# Provenance Record — focused-ultrasound-techniques

- **Date:** 2026-04-23
- **Topic:** State of the art focused ultrasound techniques
- **Slug:** `focused-ultrasound-techniques`
- **Canonical review:** `outputs/focused-ultrasound-techniques.md`
- **Plan artifact:** `outputs/.plans/focused-ultrasound-techniques.md`

## Workflow Summary
1. Wrote planning artifact with scope, task ledger, and verification log.
2. Ran parallel `researcher` subagent sweeps for:
   - thermal ablation / MRgFUS,
   - histotripsy / mechanical ablation,
   - brain applications including BBB opening and neuromodulation.
3. Drafted literature review.
4. Ran `verifier` subagent to add inline citations and verify URLs.
5. Ran `reviewer` subagent, fixed flagged issues, then ran a second review pass.
6. Verified final output files on disk.

## Sources Consulted
### Paper and journal URLs consulted
1. https://pubmed.ncbi.nlm.nih.gov/30630292/
2. https://pubmed.ncbi.nlm.nih.gov/34224149/
3. https://pmc.ncbi.nlm.nih.gov/articles/PMC9364780/
4. https://pmc.ncbi.nlm.nih.gov/articles/PMC9663991/
5. https://www.ajnr.org/content/45/1/1
6. https://pubmed.ncbi.nlm.nih.gov/16793983/
7. https://pubmed.ncbi.nlm.nih.gov/27557301/
8. https://pubmed.ncbi.nlm.nih.gov/35714666/
9. https://pubmed.ncbi.nlm.nih.gov/39212524/
10. https://www.annualreviews.org/content/journals/10.1146/annurev-bioeng-073123-022334
11. https://pubmed.ncbi.nlm.nih.gov/30922619/
12. https://pubmed.ncbi.nlm.nih.gov/36002243/
13. https://pubmed.ncbi.nlm.nih.gov/39225612/
14. https://pubmed.ncbi.nlm.nih.gov/39978577/
15. https://pmc.ncbi.nlm.nih.gov/articles/PMC9741864/
16. https://doi.org/10.1038/s41582-020-00418-z
17. https://pubmed.ncbi.nlm.nih.gov/35456667/
18. https://pubmed.ncbi.nlm.nih.gov/35337938/
19. https://doi.org/10.1038/s41467-018-04529-6
20. https://doi.org/10.1038/s41598-018-36340-0
21. https://pubmed.ncbi.nlm.nih.gov/36334289/
22. https://doi.org/10.3389/fnins.2024.1420255
23. https://doi.org/10.1186/s12984-025-01753-2
24. https://pmc.ncbi.nlm.nih.gov/articles/PMC7888561/
25. https://pmc.ncbi.nlm.nih.gov/articles/PMC11321877/

### Current web / field-status URLs consulted
26. https://www.fusfoundation.org/the-technology/state-of-research-and-regulatory-authorizations/
27. https://www.fusfoundation.org/the-technology/sotf-regulatory-authorizations/
28. https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpma/pma.cfm?ID=P150038S043
29. https://cdn.fusfoundation.org/2024/07/18084859/Focused-Ultrasound-Foundation-State-of-the-Field-Report-2024_July-17.pdf
30. https://histosonics.com/news/fda-awards-histosonics-clearance-of-its-first-of-a-kind-edison-histotripsy-system-2/
31. https://www.fusfoundation.org/diseases-and-conditions/essential-tremor/
32. https://www.fusfoundation.org/diseases-and-conditions/uterine-fibroids/

## Sources Accepted in Final Review
Accepted in the final literature review (`outputs/focused-ultrasound-techniques.md`):
- 25 paper/journal URLs (items 1–25 above)
- 0 web URLs cited in the final review text

Reason: the final review relies primarily on papers after verifier/reviewer tightening. Web sources were consulted mainly to check current field and regulatory context, but were not necessary to support final core claims.

## Sources Rejected or Not Carried Forward
1. **2025 Alzheimer’s BBB-opening paper DOI URL** — `https://doi.org/10.3171/2024.8.JNS24989`
   - **Status:** consulted in researcher notes but not carried into final synthesis.
   - **Reason:** verifier could not directly fetch/verify the DOI URL in this environment; repeated-session BBB-opening claims were retained only where supported by accessible 2018 and 2022 sources.
2. **Original milestone chart image claim** — `outputs/focused-ultrasound-techniques-clinical-milestones.png`
   - **Status:** artifact generated, then removed from the canonical review.
   - **Reason:** verifier flagged missing auditable source table / generation provenance inside the research draft chain, so the final review replaced the chart with source-linked textual milestones.
3. **General field-status web pages** (items 26–32 above)
   - **Status:** consulted, not cited in final review.
   - **Reason:** useful for context, but core arguments were supportable from papers alone.

## Verification Status
- **Plan file written:** yes
- **Research subagent files written:** yes
- **Verifier pass completed:** yes
  - Output files:
    - `notes/focused-ultrasound-techniques-verified.md`
    - `notes/focused-ultrasound-techniques-verifier-note.md`
- **Reviewer pass completed:** yes
  - Output file: `notes/focused-ultrasound-techniques-review.md`
- **Second reviewer pass after fixes:** yes
  - Output file: `notes/focused-ultrasound-techniques-review-pass2.md`
- **Final reviewer status:** no FATAL issues remain
- **URL verification:** performed by verifier; problematic DOI links were replaced or dropped
- **Quantitative figures in final review:** no standalone figure retained; only textual milestone counts with source citations

## Intermediate Research Files Used
- `notes/focused-ultrasound-techniques-research-thermal.md`
- `notes/focused-ultrasound-techniques-research-histotripsy.md`
- `notes/focused-ultrasound-techniques-research-brain.md`
- `notes/focused-ultrasound-techniques-verified.md`
- `notes/focused-ultrasound-techniques-verifier-note.md`
- `notes/focused-ultrasound-techniques-review.md`
- `notes/focused-ultrasound-techniques-review-pass2.md`

## Final File Check
The following files were verified on disk at the end of the run:
- `outputs/focused-ultrasound-techniques.md`
- `outputs/focused-ultrasound-techniques.provenance.md`
