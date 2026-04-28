---
group: lab-canons
order: 2
label: Andersen Lab
---

# Research Canon: Andersen Lab

PI: Richard A. Andersen — California Institute of Technology
Source: https://www.vis.caltech.edu/
Date: 2026-04-27

## In one sentence
The Andersen Lab treats posterior parietal cortex not as a passive association area but as a high-level sensorimotor interface where intentions, state estimates, context, and even covert cognitive variables are organized in forms useful for both explaining behavior and building neural prostheses.[1][2]

## Topic trajectories

### 1. Posterior parietal cortex became an intention map, not just a spatial map
The lab’s longest-running contribution is to reframe posterior parietal cortex (PPC) as a site where actions are specified before they are executed. The core problem is hard because the brain must transform noisy sensory input into coordinated plans for eyes, arms, and hands while keeping track of body state and task goals. Earlier traditions often treated parietal cortex as a broad association area or a spatial representation. The Andersen trajectory sharpened that view by arguing that PPC carries intended action variables, not merely sensation or attention. Early monkey work on intention coding and later reviews on “intentional maps” helped establish the conceptual shift from static spatial description to action-oriented representation.[3][4][5][6] The next step was to make that idea computational rather than purely descriptive. Work on area 5d and parietal reach region argued that PPC contains reach-vector and forward-estimate information, while perturbation and inactivation studies linked these codes to deficits that resemble optic ataxia for reaching more than saccades.[7][8][9][10] The result is a canon in which PPC is not simply where targets are located, but where pending actions are organized, updated, and monitored online. That framing anchors much of the lab’s later work: once intention is a legitimate parietal variable, decoding, prosthetics, and clinical translation become natural extensions rather than detached engineering add-ons.

### 2. Human PPC was recast as a structured, context-sensitive cognitive code
A second major thread pushes against the false choice between tidy effector maps and uninterpretable distributed coding. Real behavior is compositional: a cortical population may need to represent body part, side, context, timing, observation, semantics, and awareness at once. That makes human single-neuron data difficult to interpret if one expects one area to map cleanly to one function. The Andersen Lab’s human recordings instead argued for structured mixed coding. Small patches of human PPC could encode multiple effectors and task variables—including hand and shoulder movements, imagined versus attempted movement, and left-versus-right distinctions—without collapsing into noise, formalized as “partially mixed selectivity.”[11][12] That mattered because it supplied a computational language for human association cortex: not strict modularity, not formless mixture, but overlapping axes that remain separable enough for interpretation and decoding. The trajectory then broadened to action observation, verbs, felt and imagined touch, and implicit movement-related dynamics that emerge before explicit awareness.[13][14][15] What distinguishes this program from narrower motor coding is that it treats PPC as a flexible cognitive geometry. The lab’s stance is that richness in the code is not an obstacle to explanation; it is the mechanism that lets one cortical population support varied tasks while preserving enough structure for both theory and prosthetic readout.

### 3. Cognitive neuroprosthetics were built by decoding goals and plans rather than only kinematics
The lab’s translational signature is its argument that neural prostheses should decode high-level plans, not only low-level movement commands. This is difficult because assistive systems must be intuitive, high-dimensional, and stable over time, while neural recordings are sparse and drift-prone. Much earlier BMI work centered primary motor cortex and direct degree-of-freedom decoding. Andersen Lab instead built a “cognitive neuroengineering” program around PPC signals that encode goals, trajectories, and action types at a more abstract level.[1][16][17][18] The decisive human proof point was the 2015 Science study showing that imagined goals, trajectories, and effectors could be decoded from PPC in a tetraplegic participant.[19] That paper did not just add another decoder; it tied the older intention-map theory directly to a working human neuroprosthetic paradigm. Later work then broadened the claim from proof-of-concept control to learning and robustness: users could adapt within parietal representations, low-dimensional structure remained stable across long timescales, and finger and motor representations persisted after paralysis strongly enough to support renewed control rather than a wholly artificial remapping.[20][21][22][23] The trajectory therefore runs from conceptual neuroscience to an explicit design philosophy for BCIs: decode structured intention from stable cognitive manifolds, then let the machine handle some of the lower-level implementation burden.

### 4. The canon expanded from outbound movement to sensation, covert cognition, and mesoscopic interfaces
A fourth theme expands what counts as a useful cognitive signal. Practical prostheses need sensation and embodiment, not only motor output, and neuroscience needs ways to read cortical population structure at multiple scales. Earlier work often kept sensory feedback separate from high-level planning, while speech BMI efforts usually targeted frontal speech regions or overt articulation. Andersen Lab widened the field in several directions at once. In human PPC, neurons encoded both actual and imagined touch with structured body-part information, suggesting that cognitive touch processing and sensory representation are more intertwined than a simple motor-planning account would predict.[14] In parallel, intracortical stimulation studies showed that proprioceptive and cutaneous percepts could be elicited and mapped in humans, giving the lab’s bidirectional-BMI program a concrete sensory-feedback component rather than a purely aspirational one.[24][25] The lab also moved beyond microelectrode-scale recording by showing that functional ultrasound can decode movement intentions from PPC in single trials and later support a closed-loop ultrasonic BMI across extended time periods, offering a mesoscopic alternative to spike-only interfaces.[26][27][28] Recent work on internal speech in supramarginal gyrus further extends the lab’s logic: association cortex can reveal covert, clinically useful cognitive states, not only overt limb plans.[29] The unifying move is expansion without abandoning canon: the lab keeps returning to the same question—what abstract variables in association cortex are actionable for both theory and assistive technology?

## Papers ranked by originality

### 1. Coding of intention in the posterior parietal cortex (1997)
Source: https://doi.org/10.1038/386167a0
This is the conceptual hinge of the canon because it sharpened the claim that PPC activity reflects intended action rather than merely sensory or attentional variables. Its contrastive difference is that, unlike the later BMI papers, it is not yet a clinical translation at all; it is the neurophysiology pivot that makes those later translations intelligible.[3]

### 2. Cognitive control signals for neural prosthetics (2004)
Source: https://doi.org/10.1126/science.1097938
This work is significant because it reframed PPC signals as practical control variables for prosthetics before the human implant era had matured. Its contrastive difference is that, unlike the 2015 tetraplegia study, it establishes the cognitive-control principle in nonhuman primates rather than demonstrating direct human neuroprosthetic use.[16]

### 3. Decoding motor imagery from the posterior parietal cortex of a tetraplegic human (2015)
Source: https://doi.org/10.1126/science.aaa5417
This is the lab’s clearest bridge from theory to human BMI: imagined goals, trajectories, and effectors were decoded from PPC in a tetraplegic participant. Its contrastive difference is that, unlike motor-cortex-centered BMI work, it argues that high-level parietal intention signals are themselves sufficient to drive intuitive control rather than merely supplement lower-level motor decoding.[19]

### 4. Partially mixed selectivity in human posterior parietal association cortex (2017)
Source: https://doi.org/10.1016/j.neuron.2017.06.040
This paper matters because it gave the human PPC program a computational description robust enough to organize many later findings. Its contrastive difference is that, unlike classic effector-map accounts, it rejects both strict segregation and total mixing, formalizing a middle regime of overlapping but structured dimensions.[11]

### 5. Single-trial decoding of movement intentions using functional ultrasound neuroimaging (2021)
Source: https://doi.org/10.1016/j.neuron.2021.03.003
This paper is the strongest modality shift in the canon: it preserves the lab’s focus on intention decoding while changing the recording scale from intracortical spikes to functional ultrasound. Its contrastive difference is that, unlike prior PPC BMI studies, it argues for a mesoscopic interface rather than a purely microelectrode-based path.[26]

## Coverage gaps
- The official lab publications page is unusually comprehensive and exposed 299 entries spanning 1977–2026 plus a preprint section, but some older entries provide only lab-hosted PDFs and incomplete DOI metadata.[30]
- A few cited DOI landing pages are valid but bot-gated; the verification pass therefore preferred PMC or lab-hosted alternatives where available.
- The publication log likely includes both preprint and journal versions for some recent papers, so raw counts are not identical to a deduplicated bibliography.[30]
- No required lead-agent synthesis fallback was needed: the researcher subagent produced the trajectory draft, and the verifier subagent completed a successful citation/URL pass with minor fixes recorded in `notes/andersen-verification.md`.

## Sources
[1] https://www.vis.caltech.edu/research
[2] https://neuroscience.caltech.edu/people/richard-a-andersen
[3] https://doi.org/10.1038/386167a0
[4] https://doi.org/10.1146/annurev.neuro.25.112701.142922
[5] https://doi.org/10.1523/JNEUROSCI.3468-05.2006
[6] https://doi.org/10.1016/j.neuron.2009.08.028
[7] https://pmc.ncbi.nlm.nih.gov/articles/PMC3408621/
[8] https://doi.org/10.1073/pnas.0802602105
[9] https://doi.org/10.1073/pnas.1215092109
[10] https://doi.org/10.1016/j.neuron.2012.10.030
[11] https://pmc.ncbi.nlm.nih.gov/articles/PMC5572762/
[12] https://doi.org/10.1523/ENEURO.0222-19.2019
[13] https://doi.org/10.1126/sciadv.abb3984
[14] https://doi.org/10.7554/eLife.61646
[15] https://doi.org/10.1016/j.cub.2022.03.047
[16] https://doi.org/10.1126/science.1097938
[17] https://pmc.ncbi.nlm.nih.gov/articles/PMC4410026/
[18] https://doi.org/10.1073/pnas.1902276116
[19] https://doi.org/10.1126/science.aaa5417
[20] https://doi.org/10.1016/j.neuron.2019.02.012
[21] https://pmc.ncbi.nlm.nih.gov/articles/PMC11350602/
[22] https://elifesciences.org/articles/74478
[23] https://pmc.ncbi.nlm.nih.gov/articles/PMC10209510/
[24] https://doi.org/10.7554/eLife.32904
[25] https://doi.org/10.3389/fnsys.2018.00024
[26] https://doi.org/10.1016/j.neuron.2021.03.003
[27] https://doi.org/10.1038/s41593-023-01500-7
[28] https://doi.org/10.1126/scitranslmed.adj3143
[29] https://www.nature.com/articles/s41562-024-01867-y
[30] https://www.vis.caltech.edu/papers
