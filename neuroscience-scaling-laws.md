---
group: literature-reviews
order: 3
label: Scaling Laws in Neuroscience
---

# Scaling Laws in Neuroscience

## Summary

In the **comparative neuroanatomy, connectomics, and brain-metabolism literature reviewed here**, the clearest neuroscience “scaling laws” are **biological allometries**: lawful relationships between brain size and neuron counts, cortical thickness, white/gray matter, folding, connectivity, metabolism, and vascular supply across species.[1][2][3][4][5][6][7][8][9][10][11] This is a scoped literature review, not a systematic review of all possible biological-learning or behavioral-performance scaling papers.

A concise synthesis is:

1. **Brain scaling is lawful but clade-specific.** Rodents, primates, and other mammalian groups do not all follow the same neuron-to-mass rules.[2][3][4]
2. **White matter scales superlinearly relative to gray matter, but the mechanism is not universal.** Gross power laws exist across mammals, while rodent and primate neuron-based rules differ substantially.[1][4][5][8]
3. **Larger brains become more spatially constrained.** Connectomes in larger brains appear to rely relatively less on dense long-range connectivity and more on modular, local, and distance-constrained organization.[5][9]
4. **Metabolism also scales systematically.** Total brain metabolism rises sublinearly with brain volume, while energy use per neuron may be closer to conserved across sampled mammals.[10][11]
5. **I did not identify strong primary evidence here for a direct biological analogue of ML scaling laws.** Within this source set, I did not find strong primary evidence that behavioral accuracy, learning performance, or prediction error follows a universal power law with neuron number, lifetime data exposure, or biological training compute.[6][9][10][11]

## Scope and framing

This review treats “scaling laws in neuroscience” as a question about **biological neural systems** rather than artificial neural networks. I focus on comparative and systems neuroscience papers that study regularities of the form

\[
Y = a X^b
\]

where \(X\) is a measure such as brain volume, cortical neuron number, cortical surface area, or species size, and \(Y\) is a neural quantity such as white matter volume, metabolic rate, synapse density, or network topology.

I **do not** claim this is an exhaustive review of within-species learning curves, psychophysics, developmental scaling, memory scaling, or organoid learning studies. The main emphasis is cross-species comparative neuroscience plus a few mechanistically adjacent papers.

## What the literature most strongly supports

### 1. Cellular scaling rules differ across clades

One of the clearest results in the field is that **there is no single mammalian neuron-scaling rule**.

- **Herculano-Houzel, Mota, and Lent (2006)** reported that rodent brains scale by gaining neurons and non-neuronal cells in a way that causes neuronal density to fall as brains enlarge; larger rodent brains therefore become made of larger average neurons and more non-neuronal tissue per neuron.[2]
- **Herculano-Houzel, Collins, Wong, and Kaas (2007)** reported that primate brains follow different cellular scaling rules, with more neurons packed into a given brain mass than rodents.[3]
- **Herculano-Houzel et al. (2010)** and **Ventura-Antunes, Mota, and Herculano-Houzel (2013)** extended this logic to white matter and cortical geometry, arguing that rodent and primate cortices obey different neuron-based scaling relations.[4][5]
- **Herculano-Houzel (2014)** synthesized these comparative datasets and argued that mammalian brain evolution reflects both **concerted** and **mosaic** scaling changes across structures, rather than a single universal growth rule.[6]

### Observation
Across species, neuron count, tissue mass, neuronal density, and brain-structure allocation scale predictably, but the exponents differ by lineage.[2][3][4][5][6]

### Inference
Using “brain size” alone as a proxy for computational capacity is too crude. A large rodent brain and a similarly sized primate brain are not just scaled copies of the same cellular design.[2][3][6]

## 2. White matter, cortical thickness, and folding show robust allometries

A major thread of the literature studies how cortical wiring costs change with brain size.

- **Zhang and Sejnowski (2000)** reported a cross-mammalian power law relating cortical white matter volume to gray matter volume, with white matter growing faster than gray matter.[1]
- **Herculano-Houzel et al. (2010)** argued that in primates, as cortical neuron number rises, the fraction of neurons connected through white matter declines, suggesting increasing selectivity or sparsity in long-range connectivity.[4]
- **Ventura-Antunes et al. (2013)** reported markedly different neuron-based white-matter scaling in rodents versus primates, along with much faster cortical-thickness scaling in rodents.[5]
- **Mota and Herculano-Houzel (2015)** argued that cortical folding is better predicted by cortical surface area and thickness than by neuron number itself.[7]
- **Mota et al. (2019)** linked white/gray matter ratio to the same geometric variables that predict cortical folding.[8]

### Observation
Larger cortices do not preserve all structural ratios. White matter expands disproportionately, folding increases, and the geometry of the cortex changes with scale.[1][4][5][7][8]

### Inference
These findings are often interpreted as reflecting a wiring-cost problem: larger brains may not be able to preserve equally dense long-range connectivity without increased volume, delay, and maintenance costs. The observed biological scaling laws are therefore consistent with trade-offs among compactness, conduction delay, and connectivity.[1][4][5][7][8]

## 3. Connectome topology changes with brain volume

Recent comparative connectomics extends classic allometry beyond tissue volumes.

- **Ardesch et al. (2022)** analyzed structural and diffusion MRI across 14 primate species and reported that larger brains have relatively sparser long-range connectivity, longer communication paths, more clustering, and greater interhemispheric asymmetry.[9]
- **Puxeddu et al. (2024)** analyzed diffusion-MRI connectomes from 103 mammalian species and reported that larger brains have more spatially compact and denser modules, with communication increasingly constrained by distance and modular structure.[12]

### Observation
As brains get larger, network organization becomes more spatially constrained and more modular.[9][12]

### Inference
A plausible reading is that larger brains face stronger distance-related communication constraints and therefore exhibit more modular and spatially structured organization. This is conceptually related to engineering trade-offs in large systems, but it remains a biological wiring and communication result, not an ML-style accuracy law.[9][12]

## 4. Synapse density and single-neuron biophysics may be partly normalized across species

Some neural quantities appear more conserved than gross anatomy.

- **Sherwood et al. (2020)** reported that synapse density is approximately invariant across sampled primates, while neuron density falls with brain size; this implies more synapses per neuron in larger primate brains.[13]
- **Beaulieu-Laroche et al. (2021)** reported allometric rules for layer-5 cortical neuron biophysics across ten mammalian species, with parameter changes that tend to preserve aspects of input-output function despite size differences.[14]

### Observation
Some micro-level properties are comparatively stable or compensated across species, even as macro-scale anatomy changes.[13][14]

### Inference
Brain scaling is not just “bigger means slower and more expensive.” There is evidence of compensatory design: some cellular or circuit properties may shift specifically to preserve function while the physical substrate grows.[13][14]

## 5. Metabolic and vascular scaling laws are real and important

Several papers study the energy constraints behind neural scaling.

- **Karbowski (2007)** compiled comparative data and argued that total brain metabolism scales with brain volume with an exponent around 0.86, while volume-specific gray-matter metabolism scales negatively with volume.[10]
- **Herculano-Houzel (2011)** argued that glucose use per neuron is approximately conserved across sampled rodents and primates, implying total glucose use scales roughly linearly with neuron number.[11]
- **Karbowski (2011)** linked brain metabolic scaling to blood-flow and capillary scaling, arguing that capillary length and blood flow per neuron are close to conserved.[15]
- **Harris and Attwell (2012)** analyzed white-matter energetics and argued that its lower energy cost is driven largely by lower synapse density rather than a simple “myelin makes signaling cheap” story.[16]

### Observation
Energy, blood flow, and vascular supply scale lawfully with brain size and neuron count.[10][11][15][16]

### Inference
Metabolic constraints likely help shape the structural scaling laws above. A brain cannot add neurons, fibers, and synapses arbitrarily without also solving supply, heat, and maintenance problems.[10][11][15][16]

## 6. What is missing: a strong ML-style performance scaling law in biology

The phrase “scaling law” now often evokes deep-learning results such as smooth power-law loss curves versus parameters, data, or compute. I did **not** identify an equally strong biological counterpart in the comparative neuroscience sources reviewed here.

What I found instead:

- **Architecture scaling:** relative brain-part composition can remain fairly stable over large changes in absolute brain size.[17]
- **Cellular scaling:** neuron counts and densities obey clade-specific allometries.[2][3][6]
- **Wiring scaling:** white matter, folding, and connectome topology shift with size.[1][4][5][7][8][9][12]
- **Energetic scaling:** metabolism and vascular variables scale systematically.[10][11][15][16]

What I did **not** find strong primary evidence for:

- a universal law of behavioral accuracy versus neuron number,
- a universal law of learning performance versus lifetime data exposure,
- a universal law of prediction error versus biological training compute,
- or a canonical neuroscience equivalent of the Kaplan/Chinchilla-style scaling frameworks used in AI.

This does **not** mean no such law exists. It means that, within the scope of this review, the most mature empirical literature I found is about **structure, wiring, and energy**, not about **performance curves**.

## Strongest evidence

If I had to identify the strongest evidence base, it would be this cluster:

1. **Zhang and Sejnowski (2000)** for classic white/gray matter allometry.[1]
2. **Herculano-Houzel et al. (2006, 2007, 2010, 2011)** for neuron-count, white-matter, and metabolic-per-neuron scaling.[2][3][4][11]
3. **Ventura-Antunes et al. (2013)** for order-specific rodent-versus-primate neuron-based scaling.[5]
4. **Mota and Herculano-Houzel (2015)** for geometric cortical folding scaling.[7]
5. **Ardesch et al. (2022)** and **Puxeddu et al. (2024)** for modern comparative connectomics.[9][12]

These papers collectively support the claim that biological brains follow robust scaling regularities, but that, within the comparative cross-species literature surveyed here, the most reliable regularities are about **anatomy and constraints**, not end-task performance.

## Disagreements, limitations, and uncertainty

1. **Universality is often overstated.** Some early papers present broad cross-mammalian laws, but later work shows that similar gross power laws can emerge from different clade-specific mechanisms.[1][4][5]
2. **Mechanism is weaker than phenomenology.** It is easier to show a power-law fit than to prove why that exponent should arise evolutionarily or developmentally.[1][7][10][15]
3. **Cross-species datasets are heterogeneous.** Many papers combine values from multiple labs, species panels, MRI protocols, or anatomical methods.[1][9][10][12]
4. **Connectome data are still indirect.** Diffusion MRI is useful, but it is not tracer-level ground truth, especially across 100+ species.[9][12]
5. **Performance scaling remains underdeveloped.** Within the scope of this review, I do not think the literature justifies claiming a mature neuroscience equivalent of ML loss scaling laws.
6. **Some recent activity-scaling proposals are not yet mature evidence.** For example, a 2025 preprint argues that sublinear activity scaling can arise from avalanche criticality, but I treat it cautiously here because it is preprint-only, recent, and not yet enough on its own to establish field consensus.[18]

## Open questions

1. Can behavioral or cognitive performance across species be modeled more directly from neuron counts, synapse counts, or long-range connectivity constraints?
2. Are there developmental rules that derive the observed exponents from growth, metabolism, and axonal transport constraints rather than simply fitting them post hoc?
3. How much of connectome scaling survives when cross-species tracer data, rather than diffusion MRI, become available at larger scale?
4. Are there neural-learning settings within a species where biological performance follows smooth power laws with experience, synapse count, or network size?
5. Can organoids, cultured networks, or whole-brain datasets reveal biological analogues of parameter/data/compute scaling more directly?

## Recommended next steps

If your real interest is “Are there neuroscience analogues of AI scaling laws?”, the best next review would narrow the question into one of three directions:

1. **Comparative neuroanatomy:** neuron counts, folding, white matter, cortical composition.
2. **Energetic/biophysical constraints:** metabolism, blood flow, conduction delay, thermodynamics.
3. **Performance scaling:** behavioral accuracy, learning curves, memory capacity, or sample efficiency in biological organisms.

Right now, (1) and (2) are much more mature than (3).

## Sources

[1] Zhang K, Sejnowski TJ. *A universal scaling law between gray matter and white matter of cerebral cortex* (2000). https://pmc.ncbi.nlm.nih.gov/articles/PMC25878/

[2] Herculano-Houzel S, Mota B, Lent R. *Cellular scaling rules for rodent brains* (2006). https://doi.org/10.1073/pnas.0604911103

[3] Herculano-Houzel S, Collins CE, Wong P, Kaas JH. *Cellular scaling rules for primate brains* (2007). https://doi.org/10.1073/pnas.0611396104

[4] Herculano-Houzel S, Mota B, Wong P, Kaas JH. *Connectivity-driven white matter scaling and folding in primate cerebral cortex* (2010). https://doi.org/10.1073/pnas.1012590107

[5] Ventura-Antunes L, Mota B, Herculano-Houzel S. *Different scaling of white matter volume, cortical connectivity, and gyrification across rodent and primate brains* (2013). https://doi.org/10.3389/fnana.2013.00003

[6] Herculano-Houzel S. *Brain scaling in mammalian evolution as a consequence of concerted and mosaic changes in numbers of neurons and average neuronal cell size* (2014). https://pubmed.ncbi.nlm.nih.gov/25157220/

[7] Mota B, Herculano-Houzel S. *Cortical folding scales universally with surface area and thickness, not number of neurons* (2015). https://doi.org/10.1126/science.aaa9101

[8] Mota B, et al. *White matter volume and white/gray matter ratio in mammalian species as a consequence of the universal scaling of cortical folding* (2019). https://www.pnas.org/doi/10.1073/pnas.1716956116

[9] Ardesch DJ, et al. *Scaling Principles of White Matter Connectivity in the Human and Nonhuman Primate Brain* (2022). https://doi.org/10.1093/cercor/bhab384

[10] Karbowski J. *Global and regional brain metabolic scaling and its functional consequences* (2007). https://pmc.ncbi.nlm.nih.gov/articles/PMC1884139/

[11] Herculano-Houzel S. *Scaling of Brain Metabolism with a Fixed Energy Budget per Neuron: Implications for Neuronal Activity, Plasticity and Evolution* (2011). https://doi.org/10.1371/journal.pone.0017514

[12] Puxeddu MG, et al. *Relation of connectome topology to brain volume across 103 mammalian species* (2024). https://doi.org/10.1371/journal.pbio.3002489

[13] Sherwood CC, et al. *Invariant Synapse Density and Neuronal Connectivity Scaling in Primate Neocortical Evolution* (2020). https://pmc.ncbi.nlm.nih.gov/articles/PMC8463089/

[14] Beaulieu-Laroche L, et al. *Allometric rules for mammalian cortical layer 5 neuron biophysics* (2021). https://doi.org/10.1038/s41586-021-04072-3

[15] Karbowski J. *Scaling of brain metabolism and blood flow in relation to capillary and neural scaling* (2011). https://pmc.ncbi.nlm.nih.gov/articles/PMC3203885/

[16] Harris JJ, Attwell D. *The Energetics of CNS White Matter* (2012). https://doi.org/10.1523/JNEUROSCI.3430-11.2012

[17] Clark DA, Mitra PP, Wang S-SH. *Scalable architecture in mammalian brains* (2001). https://doi.org/10.1038/35075564

[18] Fontenele AJ, et al. *Allometric scaling of brain activity explained by avalanche criticality* (2025 preprint). https://arxiv.org/abs/2512.10834
