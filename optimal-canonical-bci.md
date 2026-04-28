---
group: literature-reviews
order: 5
label: What, If Anything, Is the “Optimal Canonical BCI”?
---

# What, If Anything, Is the “Optimal Canonical BCI”?

## Summary
The literature reviewed here does not support a single universal answer to “the optimal canonical BCI.” The phrase is ambiguous, and the evidence base is heterogeneous. “Optimal” can refer to communication throughput, word or character error, safety, surgical burden, training burden, portability, rehabilitation value, or long-term stability. “Canonical” can refer to the historically standard BCI, the most reproducible design pattern, the most clinically practical architecture, or the best-supported current design logic.[1][2][3][8][10]

The most defensible conclusion is narrower: the literature supports a task-dependent evaluation framework rather than a universal BCI optimum.[1][3][7][8] Within the supplied evidence, the strongest headline communication results come from invasive systems decoding naturalistic behaviors such as attempted handwriting or speech, while the strongest case for non-invasive BCIs is not “EEG in general” but task-matched EEG paradigms, especially SSVEP for constrained high-throughput selection and adaptive motor-imagery or hybrid closed-loop EEG for rehabilitation-oriented use cases.[4][5][6][8][11][12]

A second, separate conclusion is methodological: the literature repeatedly points toward a smaller set of recurring design patterns—task-matched signal acquisition, closed-loop adaptation, low calibration burden, and online/longitudinal evaluation—but these should be treated as synthesized design heuristics, not as a proven universal canon.[8][9][10][13]

## Scope and operational definition
This review interprets “optimal canonical BCI” in the weakest usable sense: the best-supported current design logic for a specified task and deployment constraint set. It does not assume that one modality or one decoder family is globally optimal.

Included literature:
- broad BCI reviews and modality reviews,[1][2][3]
- adaptive/co-adaptive EEG and rehabilitation reviews,[8]
- multimodal BCI review evidence,[7]
- reproducibility and benchmarking work for EEG BCIs,[10]
- representative primary studies for intracortical handwriting, intracortical speech, ECoG speech/avatar control, bidirectional sensory feedback, long-term recalibration, and endovascular BCI safety/feasibility.[4][5][6][9][13][14]

## What the literature supports

### Observation 1: the literature supports trade-offs, not one winner
Across the supplied reviews, BCI design is framed as a trade-off among signal fidelity, invasiveness, stability, training burden, user comfort, and deployment context rather than as a race to one universally best architecture.[1][2][3][8]

### Observation 2: invasive systems currently dominate the strongest communication demonstrations in the supplied packet
Among the supplied communication studies, the strongest headline communication results come from invasive systems:
- Intracortical handwriting: 90 characters/min with 94.1% raw online accuracy.[4]
- Intracortical speech: 62 words/min, 9.1% WER on a 50-word vocabulary, and 23.8% WER on a 125,000-word vocabulary.[5]
- High-density ECoG speech/avatar system: text, synthesized speech, and facial-avatar animation with less than 2 weeks of training; the paper also reports task-specific communication performance, but those metrics are not directly matched to the intracortical studies.[6]

This is suggestive evidence for invasive BCIs in communication-first settings, not a matched-modality proof that invasive systems are universally superior.

### Observation 3: the best-supported non-invasive designs are task-specific
The supplied non-invasive EEG literature does not identify one universal EEG paradigm as best. Instead:
- SSVEP is well supported for high-throughput, constrained selection and often requires little or no user training, but visual comfort and fatigue remain important design trade-offs.[11]
- Motor-imagery EEG remains important in rehabilitation and wearable settings, but the literature is heterogeneous in devices, paradigms, and datasets, limiting strong universal claims.[12]
- On open EEG benchmarks, strong Riemannian pipelines remain competitive or best overall, and deep learning benefits most when larger datasets are available.[10]

### Observation 4: adaptation, feedback, and longitudinal stability recur across the literature
Adaptive and co-adaptive closed-loop design appears repeatedly, especially in rehabilitation-oriented EEG reviews and in longitudinal invasive communication work.[8][9] A representative intracortical handwriting system maintained performance over 403 days with continual self-recalibration and 93.84% online accuracy, but this supports long-term stability for that system and task, not a blanket claim that intracortical BCIs are solved for longitudinal use.[9]

### Observation 5: lower-surgical-burden alternatives are promising but not yet the top-performance reference point
The endovascular SWITCH study showed no device-related serious adverse events and successful computer control in all 4 implanted participants included in analysis.[14] That is strong safety/feasibility evidence for a lower-burden architecture, but it is not evidence that endovascular BCIs currently match the highest-bandwidth invasive communication systems.[14]

## What the literature does not support
1. It does not support one universal optimal BCI. The supplied evidence is too task-dependent and too heterogeneous for that conclusion.[1][3][8]
2. It does not support fair modality rankings from the current packet alone. The headline studies differ in task, vocabulary size, participant count, output modality, and endpoint, so cross-modality comparisons remain conditional.[4][5][6][11][12][14]
3. It does not support “more modalities is always better.” Multimodality is promising when complementary information solves a real bottleneck, but the supplied review does not show monotonic benefit with added modality count.[7]
4. It does not support offline performance as sufficient evidence of optimality. The stronger translational papers emphasize online use, calibration burden, and longitudinal testing.[8][9][10]
5. It does not support deep learning as automatically best for EEG BCIs. In the MOABB benchmark across 36 open datasets and 30 pipelines, Riemannian methods were strongest overall, with deep learning benefiting from larger data volumes.[10]

## Evidence matrix
This matrix makes the comparability limits explicit.

| Modality / study | Main task | Key reported endpoint(s) | Study emphasis | What it supports | Main comparability limit |
|---|---|---|---|---|---|
| Intracortical handwriting (Willett 2021)[4] | Communication via attempted handwriting | 90 chars/min; 94.1% raw online accuracy | Peak communication performance | Rich motor decoding can enable high-rate communication | Single participant; task-specific |
| Intracortical speech (Willett 2023)[5] | Speech communication | 62 words/min; 9.1% / 23.8% WER | Peak speech communication | High-rate speech decoding with implanted arrays | Single participant; vocabulary/task-specific |
| High-density ECoG speech/avatar (Metzger 2023)[6] | Multimodal communication | <2 weeks training; paper reports task-specific communication metrics | Richer communication output | ECoG can support text + speech + avatar control | Not matched head-to-head to intracortical studies |
| CORP longitudinal handwriting (Metzger 2024)[9] | Long-term intracortical communication | 403 days; 93.84% online accuracy | Longitudinal stability | Continual self-recalibration can reduce calibration burden | One system, one participant/task |
| Tactile feedback BCI (Flesher 2021)[13] | Prosthetic arm control | Functional control improved with tactile feedback | Embodiment / feedback | Bidirectional control outperforms motor-only control for this task | Not a communication benchmark |
| Endovascular SWITCH (Mitchell 2023)[14] | Safety / computer control feasibility | No device-related serious adverse events; all 4 implanted participants controlled a computer | Safety / feasibility | Lower-burden implanted BCI is clinically plausible | Not a peak-throughput comparison |
| SSVEP review (Adhikari 2024)[11] | Non-invasive constrained selection | High ITR; little/no user training | Practical non-invasive selection | SSVEP is strong for high-throughput constrained EEG use | Review, not matched against all other EEG paradigms |
| MI wearable EEG review (Saibene 2023)[12] | Rehabilitation / wearable control | Heterogeneous outcomes | Portability / rehabilitation | MI EEG remains important but heterogeneous | Comparability across studies is weak |
| MOABB benchmark (Chevallier 2024)[10] | EEG reproducibility benchmark | 36 datasets; 30 pipelines; Riemannian methods strongest overall | Reproducibility / benchmarking | Strong baselines and open benchmarks matter | EEG-only benchmark |

## Design trade-offs by modality

### Intracortical BCIs
Observation. Reviews describe intracortical recording as the highest-fidelity mainstream recording option in the packet, and the supplied primary studies show the strongest communication endpoints for speech- and handwriting-style tasks.[2][4][5]

Inference. If the task is maximum communication throughput, the supplied evidence points most strongly toward intracortical systems among the studies reviewed here, but only with the caveat that these are not matched head-to-head comparisons against ECoG, endovascular, or non-invasive systems.[4][5]

### ECoG BCIs
Observation. ECoG occupies a middle position in the literature between intracortical recording and EEG on the signal-fidelity/invasiveness trade-off, and the supplied speech/avatar study shows rich communication output with relatively short training time.[2][6]

Inference. ECoG is best treated here as a promising high-performance implanted class, especially when expressivity and somewhat lower invasiveness than microelectrode arrays matter, not as the demonstrated overall optimum.[6]

### Endovascular BCIs
Observation. The endovascular SWITCH study is strongest as a safety and feasibility result, not as a throughput leader.[14]

Inference. Endovascular BCIs look like a promising compromise architecture for the performance–risk trade-off, but the supplied evidence does not support calling them optimal for peak-performance communication.[14]

### EEG: SSVEP
Observation. SSVEP is well supported for constrained, high-throughput selection with low user-training burden, although visual fatigue and stimulus design matter.[11]

Inference. For non-invasive constrained selection, SSVEP is among the strongest candidates in the supplied literature, but only for that interaction format.[11]

### EEG: motor imagery and adaptive closed-loop use
Observation. The supplied rehabilitation and wearable reviews keep motor-imagery and adaptive closed-loop EEG central to rehabilitation-oriented use cases, while also emphasizing study heterogeneity and limited comparability.[8][12]

Inference. Motor-imagery and adaptive EEG remain important for rehabilitation and training-sensitive control, but the supplied evidence is not strong enough to call them the non-invasive optimum in a general sense.[8][12]

### Multimodal and hybrid BCIs
Observation. Multimodal acquisition can improve robustness or accuracy when modalities are complementary.[7]

Inference. The strongest defensible principle is selective multimodality—add modalities when they solve a specific bottleneck—rather than “more modalities are better.”[7]

## Recurring patterns supported across studies
These are the most defensible recurring descriptive patterns in the supplied literature.

1. Task-matched signal acquisition matters. Sensor choice strongly constrains achievable bandwidth, fidelity, and surgical burden.[2][3]
2. Naturalistic control targets can be powerful in communication tasks. The highest-performing invasive communication studies here decode attempted handwriting or speech rather than only coarse discrete selection.[4][5]
3. Closed-loop adaptation recurs across rehabilitation and long-term use. The user, decoder, and feedback channel are repeatedly treated as a coupled system.[8][9][13]
4. Calibration burden is translationally important. Longitudinal and plug-and-play stability are emphasized whenever systems move beyond one-off demonstrations.[8][9]
5. Benchmarking and reproducibility remain limiting factors. Open, standardized evaluation changes conclusions, especially in EEG BCIs.[10]

## Synthesized design heuristics
These are authorial recommendations synthesized from the literature, not direct consensus statements.

1. Choose the least invasive modality that still supports the task’s bandwidth requirement.[2][3][11][14]
2. For communication-first systems, prioritize rich latent behaviors such as speech or handwriting when the modality permits it.[4][5]
3. Treat feedback and adaptation as core system components, not optional extras.[8][9][13]
4. Evaluate systems online, longitudinally, and with explicit calibration-burden reporting.[8][9][10]
5. Use multimodality only when it adds complementary information or expressivity that matters for the task.[6][7]

## Open questions
1. What would a fair, matched cross-modality comparison actually look like for communication BCIs?
2. How should communication throughput, surgical burden, calibration burden, and access be weighted against one another when making “optimality” claims?[4][5][6][14]
3. When do the added complexity and integration burden of multimodal BCIs pay for themselves?[7]
4. How well do EEG benchmark conclusions transfer to real online home or clinic use?[10][12]
5. Can lower-burden implanted systems close the performance gap with intracortical or high-density ECoG systems?[6][14]

## Recommended next steps
1. Build matched comparison tables across modalities using aligned tasks and metrics rather than cross-task prose comparisons.
2. Report calibration time, retraining frequency, longitudinal failure modes, and user burden alongside throughput and error.
3. Expand reproducible benchmarking beyond EEG to support better invasive and semi-invasive comparisons.[10]
4. Separate safety/feasibility claims from peak-performance claims in future reviews and papers.[14]

## Bottom line
The supplied literature does not justify naming one universal “optimal canonical BCI.” The better-supported answer is conditional:

- For maximum communication performance, the strongest evidence in the supplied primary studies comes from invasive speech- or handwriting-oriented BCIs, especially intracortical systems.[4][5]
- For non-invasive constrained selection, SSVEP EEG remains one of the strongest candidates in the supplied literature.[11]
- For rehabilitation and adaptive closed-loop use, motor-imagery and adaptive EEG remain important, but the literature is more heterogeneous and less definitive.[8][12]
- For translation, stability, calibration burden, safety, and reproducibility matter enough that no architecture should be called “optimal” from throughput numbers alone.[8][9][10][14]

So the most defensible “canonical BCI” today is not a single modality. It is a task-matched, adaptive, closed-loop, reproducibly evaluated design strategy.

## Sources
[1] He et al., *Brain–computer interfaces in 2023–2024*. https://onlinelibrary.wiley.com/doi/full/10.1002/brx2.70024

[2] Sriraman et al., *Review: Human intracortical recording and neural decoding for brain–computer interfaces*. https://pmc.ncbi.nlm.nih.gov/articles/PMC5815832/

[3] Hutchinson et al., *Invasive Brain–Computer Interface for Communication: A Scoping Review*. https://pmc.ncbi.nlm.nih.gov/articles/PMC12026362/

[4] Willett et al., *High-performance brain-to-text communication via handwriting*. https://pmc.ncbi.nlm.nih.gov/articles/PMC8163299/

[5] Willett et al., *A high-performance speech neuroprosthesis*. https://www.nature.com/articles/s41586-023-06377-x

[6] Metzger et al., *A high-performance neuroprosthesis for speech decoding and avatar control*. https://www.nature.com/articles/s41586-023-06443-4

[7] Saboor et al., *Review of Multimodal Data Acquisition Approaches for Brain–Computer Interfaces*. https://www.mdpi.com/2673-8430/4/4/41

[8] Şafak et al., *Electroencephalogram-based adaptive closed-loop brain-computer interface in neurorehabilitation: a review*. https://pmc.ncbi.nlm.nih.gov/articles/PMC11449715/

[9] Metzger et al., *Plug-and-Play Stability for Intracortical Brain-Computer Interfaces: A One-Year Demonstration of Seamless Brain-to-Text Communication*. https://pmc.ncbi.nlm.nih.gov/articles/PMC11086983/

[10] Chevallier et al., *The largest EEG-based BCI reproducibility study for open science: the MOABB benchmark*. https://arxiv.org/abs/2404.15319

[11] Adhikari et al., *Optimal Stimulus Properties for Steady-State Visually Evoked Potential Brain–Computer Interfaces: A Scoping Review*. https://www.mdpi.com/2414-4088/8/2/6

[12] Saibene et al., *EEG-Based BCIs on Motor Imagery Paradigm Using Wearable Technologies: A Systematic Review*. https://www.mdpi.com/1424-8220/23/5/2798

[13] Flesher et al., *A brain-computer interface that evokes tactile sensations improves robotic arm control*. https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8715714/

[14] Mitchell et al., *Assessment of Safety of a Fully Implanted Endovascular Brain-Computer Interface for Severe Paralysis in 4 Patients: The Stentrode With Thought-Controlled Digital Switch (SWITCH) Study*. https://pmc.ncbi.nlm.nih.gov/articles/PMC9857731/
