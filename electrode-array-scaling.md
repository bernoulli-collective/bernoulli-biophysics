---
group: literature-reviews
order: 4
label: Scaling laws in electrode array fabrication
---

# Scaling laws in electrode array fabrication

## Review method and scope

This is a targeted narrative literature review, not a systematic review or meta-analysis. Because the `alpha` paper tool was blocked in-session by login requirements, the search used accessible web/PDF/PMC sources gathered with the following queries: `electrode array fabrication scaling laws`, `microelectrode array fabrication density yield`, `high-channel-count electrode array fabrication`, `wafer-scale electrode array fabrication`, `electrode scaling impedance noise`, and packaging/interconnect variants. I prioritized review papers, foundational fabrication papers, and quantitative studies on impedance/noise scaling. The source set is therefore best read as a curated cross-section, not exhaustive field coverage.

Primary scope: implantable neural electrode arrays and their fabrication bottlenecks.

Secondary scope: in vitro HD-MEA / CMOS papers only where they illuminate fabrication-adjacent scaling constraints such as connectivity, readout density, and routing. I do not assume that in vitro HD-MEA constraints map one-to-one onto chronic implant manufacturing.

## Summary

Within that scope, I do not see evidence in the consulted literature for a single universal scaling law analogous to Moore's law. What the sources support more clearly is a stack of coupled scaling regimes and recurring trade-offs:

1. Electrode miniaturization improves spatial specificity and channel density, but usually increases impedance and noise. This is the most repeatable quantitative relationship in the literature, although even it is material- and geometry-dependent rather than universal.[1][2][3]
2. High-count recording capability has risen quickly, but packaging, routing, thermal budget, and data-readout constraints scale badly. Several reviews identify interconnects and backend electronics as the main bottlenecks once lithography can already define dense arrays.[4][5][13]
3. Wafer-scale and CMOS fabrication improve tolerances, batchability, and density, but do not by themselves solve connectorization, hermetic sealing, chronic reliability, or tissue-interface constraints.[4][6][11][13]
4. New additive and hybrid methods enlarge the design space — for example arbitrary 3D shank geometry or self-assembling flexible-to-CMOS interfaces — but the evidence base is still stronger for proof-of-concept scalability than for long-term manufacturing yield at clinical scale.[8][9][13][14]

My bottom line: if you ask "what are the scaling laws?", the honest answer is that the field mostly has engineering trade-off laws rather than one closed-form law. The best-supported ones are:

- smaller electrode area \(\Rightarrow\) higher impedance/noise unless surface chemistry or geometry compensates;
- more channels \(\Rightarrow\) more routing, power, heat, and data burden unless multiplexing/on-chip integration compensates;
- softer/smaller structures \(\Rightarrow\) better tissue compatibility but worse insertion/manufacturability unless temporary stiffeners or hybrid processes compensate.

## Scope

This review focuses on implantable and high-density neural electrode arrays plus adjacent HD-MEA fabrication literature. I interpret "scaling laws" broadly: not just formal power laws, but the repeatable quantitative relationships that constrain fabrication as arrays move toward higher density, larger area, and higher channel count.

## Strongest evidence

### 1) The clearest near-law is electrochemical: shrinking contacts usually raises impedance and noise

This relation appears across reviews and experiments.

- The 2023 review "Electrochemical and electrophysiological considerations for clinical high channel count neural interfaces" states that decreasing metal contact size to improve spatial resolution adds 1/f and thermal noise, and that high-density arrays must scale contact dimensions without substantially increasing electrochemical impedance.[4]
- The 2017 study "Scaling Effects on the Electrochemical Performance of PEDOT, Au, and Pt for Electrocorticography Recording" reports that smaller recording sites increase impedance and noise, while PEDOT coatings reduce that penalty, especially for small diameters.[2]
- The 2021 paper "Impedance scaling for gold and platinum microelectrodes" shows that the usual assumption "impedance scales linearly with area" is incomplete: for Pt electrodes below roughly 10 \(\mu\)m radius, 1 kHz impedance transitions from area-like scaling to perimeter-like scaling, while Au does not show the same regime shift.[1]
- A 2019 Frontiers study on small neural electrodes argues that, especially for sub-10-\(\mu\)m features, noise and attenuation depend more on impedance than on geometric size per se, and that surface modification can preserve SNR even at small sizes.[3]

Observation: the literature consistently shows a miniaturization penalty mediated by impedance.

Inference: the most defensible "scaling law" in this field is not "smaller is worse," but "smaller is only viable if surface engineering, material choice, or 3D geometry breaks the naive area-impedance trade-off."

### 2) Simultaneously recorded-neuron counts have grown rapidly, but not with a stable transistor-like law

The 2021 review "Recording Strategies for High Channel Count, Densely Spaced Microelectrode Arrays" reports that the number of neurons simultaneously recorded in published intracortical systems increased exponentially, doubling about every 4.65 \(\pm\) 0.25 years.[5] That is the closest thing in this literature to a Moore-like empirical scaling curve.

But the same review explicitly warns against naive extrapolation, because microelectrode size and density cannot shrink arbitrarily without hurting SNR or increasing tissue displacement.[5]

Observation: historical capability growth looks exponential over a limited period.

Inference: this is better read as a technology trend than a stable law. It depends on multiplexing, CMOS integration, and system architecture, not just fabrication node progress.

### 3) Routing and packaging often become bottlenecks before lithography does

Multiple reviews converge on the same point: fabricating dense electrodes is no longer the only hard part.

- The 2023 clinical review says that for flexible arrays, routing every contact to external electronics is a major bottleneck; higher density requires multiple metallization layers, which add parasitic capacitance, hurt yield, and raise fabrication cost/time.[4]
- The 2025 Lab on a Chip tutorial review on HD-MEAs frames the core design problem as a connectivity problem: dense electrodes are easier to define than to connect to low-noise readout circuitry, especially when full-frame readout and signal quality are both desired.[7]
- The 2020 perspective "Challenges for Large-Scale Cortical Interfaces" argues that practical scaling is constrained by fragility, packaging, hermetic sealing, ASIC integration, and implant-level engineering, not just array fabrication resolution.[10]

Observation: back-end integration is repeatedly identified as the limiting system bottleneck.

Inference: the field's true scaling frontier has moved from "Can we pattern the electrodes?" to "Can we interconnect, package, power, and read them out without destroying yield, cost, or chronic reliability?"

## What actually scales in fabrication

To avoid scope drift, I separate the evidence into implant-focused fabrication results and secondary HD-MEA/readout lessons.

### A. Wafer-scale batch processing

Older and newer papers both show that wafer-scale processing improves reproducibility and cost per device.

- "Wafer-scale fabrication of penetrating neural microelectrode arrays" (2010) argues wafer-scale processing yields lower cost, faster production, and better geometry control than conventional array-scale Utah-array fabrication.[6]
- "Wafer-Scale Fabrication and Assembly Method of Multichannel Flexible Neural Microelectrode Arrays" (2021) reports 25 flexible MEAs fabricated on a single 6-inch wafer, explicitly positioning wafer-level processing as a route to mass production and tighter fabrication tolerance.[11]
- The 2022 manufacturing review says automation is still underused in assembly and packaging, and identifies a persistent resolution-cost trade-off: advanced CMOS/MEMS methods support high density, but customization becomes expensive; cheaper agile methods are lower resolution.[12]

Takeaway: wafer-scale fabrication is a real scaling mechanism for throughput and dimensional control, but it does not automatically scale the whole implant stack.

### B. CMOS integration and multiplexing

For implantable systems, CMOS integration matters mainly when routing and backend electronics become the constraint. The 2021 recording-strategies review argues that high-channel-count arrays are limited by analog front-end area, power, crosstalk, and noise; time-division multiplexing works by trading area for higher bandwidth/frequency and some noise/crosstalk risk.[5] The 2025 HD-MEA review makes the same point in system form for dense CMOS arrays: channel count, signal quality, heat, chip area, and readout bandwidth are tightly coupled design variables.[7]

Takeaway: CMOS scaling helps, but only through architecture-level trade-offs. For implantables, these results are most useful as evidence about connectivity/readout bottlenecks, not as a direct proxy for chronic manufacturing success.

### C. Additive and hybrid fabrication

Recent work expands geometry faster than traditional MEMS alone.

- CMU Array (2022) reports 3D nanoprinting that enables arbitrary shank heights and densities up to 2600 shanks/cm² with rapid prototyping in hours rather than traditional long-turnaround processes.[8]
- "Direct laser writing of 3D electrodes on flexible substrates" (2023) combines standard wafer-scale thin-film processing with direct-write 3D structures; the reported 16-channel array printing time is about 10 minutes per array in the demonstrated workflow.[9]
- "A CMOS-based highly scalable flexible neural electrode interface" (2023) claims a self-assembling ultra-conformable thin-film connector for multithousand-channel integration at millimeter scale, directly targeting connectorization as the scaling bottleneck.[13]
- The SEA concept paper (2021 preprint) proposes a DRIE-based process for thousands to potentially millions of silicon needles, with a demonstrated 400 electrodes/mm² in a 5184-needle array.[14]

Observation: these papers show faster design-space scaling and higher geometric freedom.

Inference: additive/hybrid fabrication currently looks strongest for prototype scalability and geometry customization. The evidence for mature manufacturing scalability is still thinner, especially for chronic implants.

## A useful synthesis: five recurring design rules

These are author syntheses of the consulted literature, not literature-established universal laws.

| Recurring design rule | Evidence status | What it means for fabrication |
|---|---|---|
| Contact miniaturization increases impedance/noise unless compensated | strong | Small sites need coatings, roughness, porous structures, 3D geometry, or different materials.[1][2][3][4] |
| Channel count increases interconnect complexity faster than simple planar routing tolerates | strong | Dense arrays push toward multilayer routing, multiplexing, ASIC co-integration, or new connector schemes.[4][5][7][13] |
| Wafer-scale processing improves uniformity and cost per unit, but downstream assembly can dominate | medium-strong | Batch lithography helps until packaging/assembly become the yield bottleneck.[6][11][12] |
| Mechanical compliance helps tissue compatibility but hurts insertion and packaging simplicity | strong qualitative, weak universal quantitative | Flexible devices reduce mismatch but need insertion aids, transfer processes, or hybrid integration.[10][12] |
| System-scale performance saturates if data, power, and heat are not co-designed with fabrication | strong | Fabrication-only improvements stop mattering once readout and thermal limits dominate.[5][7][10] |

## Where the literature is thin

### 1) There is no consensus closed-form scaling law for fabrication yield versus channel count

I found many statements that yield becomes harder with multilayer routing, packaging, or thin flexible structures, but much less standardized reporting of yield curves across labs or processes. This is a major gap if one wants real manufacturing laws.

### 2) Chronic reliability data lags density demonstrations

Many papers demonstrate density, geometry freedom, or acute recording. Fewer provide multi-year reliability data that would justify claims of scalable clinical manufacturing.[10][12]

### 3) "Scalability" is used inconsistently

Some papers mean more electrodes per mm². Others mean more total channels, larger coverage area, lower cost, faster prototyping, or easier packaging. Those are different objectives and often trade against each other.

## Disagreements and nuances

- Does impedance matter for extracellular recording quality? The answer is context-dependent. One study on commercial polytrodes argues that within a typical range (~0.1 to 2 MΩ), impedance reduction alone may not strongly improve spike sorting if the amplifier is already appropriate.[15] That does not contradict the broader literature showing that miniaturization tends to raise impedance/noise; it narrows the claim to certain recording regimes.
- Is CMOS the dominant path to scale? For in vitro HD-MEAs, often yes.[7] For implantables, flexible and additive methods remain competitive because tissue mechanics and form factor matter as much as transistor density.[4][10]
- Do new additive methods solve scaling? They solve some geometry and prototyping problems, but evidence remains limited on long-term batch yield, hermetic packaging, and clinical manufacturability.[8][9]

## Best current answer to the user's question

If by "scaling laws in electrode array fabrication" you mean the dominant quantitative regularities and recurring trade-offs in the consulted literature, the evidence suggests:

1. Electrode-electrolyte scaling law: smaller contacts generally raise impedance and noise, though the exact exponent depends on material and geometry; platinum can even cross from area-dominated to perimeter-dominated impedance scaling below ~10 \(\mu\)m radius.[1]
2. System scaling law: channel-count growth is limited less by lithography than by interconnect density, readout area, heat, and data bandwidth.[4][5][7][13]
3. Manufacturing scaling law: wafer-scale processing improves throughput and tolerance, but assembly/connectorization/packaging increasingly dominate cost and yield at high channel counts.[6][11][12]
4. Biomechanical scaling law: shrinking and softening structures helps chronic interface quality but creates insertion and handling problems that often require hybrid fabrication or temporary stiffening.[10][12]

So the field is best described as a multi-bottleneck scaling problem, not a single law.

## Recommended next steps

1. If you want a formal model, build it around three coupled variables: site size/pitch, channel count, and backend interconnect complexity.
2. If you want a fabrication-focused review paper, split the space into: wafer-scale MEMS, CMOS/HD-MEA, flexible thin-film, and additive/3D methods.
3. If you want actionable design rules, the most useful measurable quantities to normalize across papers are: electrode size, 1 kHz impedance, rms noise in the target band, channel count, array area, routing-layer count, wafer yield, and chronic survival time.
4. If you want, I can turn this into a comparison matrix of fabrication platforms or a reading list ordered by the strongest quantitative evidence.

## Open questions

- What are the best cross-lab metrics for fabrication yield and packaging reliability?
- At what channel count do interconnect/packaging costs dominate front-end microfabrication costs for each platform?
- Which additive methods can match MEMS/CMOS on yield and chronic stability rather than only on customization speed?
- Can chronic implant packaging be scaled without forcing a retreat in density or flexibility?

## Sources

1. Paul, Oja et al. Impedance scaling for gold and platinum microelectrodes (2021). PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC8819721/
2. Ganji et al. Scaling Effects on the Electrochemical Performance of PEDOT, Au, and Pt for Electrocorticography Recording (2017). PDF: https://iebl.ucsd.edu/sites/default/files/iebl/2017-09/GanjiECoGRecording.pdf
3. Fiáth et al. Optimal Electrode Size for Multi-Scale Extracellular-Potential Recording From Neuronal Assemblies (2019). Frontiers PDF: https://www.frontiersin.org/articles/10.3389/fnins.2019.00385/pdf
4. Khodagholy et al. Electrochemical and electrophysiological considerations for clinical high channel count neural interfaces (2023). PDF and article: https://link.springer.com/content/pdf/10.1557/s43577-023-00537-0.pdf ; https://link.springer.com/article/10.1557/s43577-023-00537-0
5. García-Cortadella et al. Recording Strategies for High Channel Count, Densely Spaced Microelectrode Arrays (2021). Full text: https://www.frontiersin.org/journals/neuroscience/articles/10.3389/fnins.2021.681085/full
6. Bhandari, Negi & Solzbacher. Wafer-scale fabrication of penetrating neural microelectrode arrays (2010). Springer: https://link.springer.com/article/10.1007/s10544-010-9434-1
7. Rudorf et al. Advances in large-scale electrophysiology with high-density microelectrode arrays (2025). RSC Lab on a Chip: https://pubs.rsc.org/en/content/articlehtml/2025/lc/d5lc00058k
8. Saleh et al. CMU Array: A 3D nanoprinted, fully customizable high-density microelectrode array platform (2022). Science Advances: https://www.science.org/doi/10.1126/sciadv.abj4853
9. Saleh et al. Direct laser writing of 3D electrodes on flexible substrates (2023). Nature Communications preview: https://preview-www.nature.com/articles/s41467-023-39152-7
10. Seymour et al. Challenges for Large-Scale Cortical Interfaces (2020). Neuron / perspective link: https://www.sciencedirect.com/science/article/pii/S0896627320308114
11. Li et al. Wafer-Scale Fabrication and Assembly Method of Multichannel Flexible Neural Microelectrode Arrays (2021). MDPI Electronics: https://www.mdpi.com/2079-9292/10/3/316
12. Yi et al. Manufacturing Processes of Implantable Microelectrode Array for In Vivo Neural Electrophysiological Recordings and Stimulation: A State-Of-the-Art Review (2022). PMC: https://pmc.ncbi.nlm.nih.gov/articles/PMC10583290/
13. Zhao et al. A CMOS-based highly scalable flexible neural electrode interface (2023). Science Advances and PMC mirror: https://www.science.org/doi/10.1126/sciadv.adf9524 ; https://pmc.ncbi.nlm.nih.gov/articles/PMC10246892/
14. Ahmed et al. Sea of Electrodes Array (SEA): Extremely Dense and High-Count Silicon-Based Electrode Array Technology for High-Resolution High-Bandwidth Interfacing with 3D Neural Structures (2021 preprint). bioRxiv: https://www.biorxiv.org/content/10.1101/2021.01.24.427975.full
15. Neto et al. Does Impedance Matter When Recording Spikes With Polytrodes? (2018). Frontiers: https://www.frontiersin.org/articles/10.3389/fnins.2018.00715
