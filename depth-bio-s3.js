/* Fill-the-gaps for Inheritance, variation and evolution (4.6) and Ecology (4.7). Every number is recomputed by tools/verify-depth.cjs. */
(() => {
  const add = GcseDepth.add, G = (q, lines, calc, why, higher) => Object.assign({ q, lines, calc: calc || [], why }, higher ? { higher: true } : {});

  add('b-repro', { gaps: [
    G('Sexual and asexual reproduction.', ['Sexual reproduction involves the fusion of [[gametes]] and produces offspring that show [[variation]]; asexual reproduction involves only [[one]] parent and produces clones.'], [], 'Asexual reproduction uses mitosis.'),
    G('Meiosis.', ['Meiosis produces [[four]] gametes, each with [[half]] the number of chromosomes of the parent cell.'], [], 'The gametes are genetically different.'),
    G('Human chromosomes.', ['A human body cell has [[46]] chromosomes, so a human gamete has [[23]].'], ['46', '46/2'], 'Fertilisation restores the full number.'),
    G('Fertilisation.', ['At fertilisation the nucleus of a sperm cell fuses with the nucleus of an egg cell to form a [[zygote]], which divides by [[mitosis]] to form an embryo.'], [], 'The zygote has 46 chromosomes.')
  ] });
  add('b-repro-evaluation', { gaps: [
    G('Advantages of sexual reproduction.', ['Sexual reproduction produces [[variation]] in the offspring, so a species can survive [[changes|a change]] in the environment.'], [], 'It increases the chance of survival.'),
    G('Advantages of asexual reproduction.', ['Asexual reproduction needs only [[one]] parent, is [[faster|quicker]] and produces many identical offspring.'], [], 'It does not need a mate.'),
    G('Malaria parasites.', ['The malarial parasite reproduces [[asexually]] in the human host and [[sexually]] in the mosquito.'], [], 'Fungi can also reproduce both ways.'),
    G('Plants.', ['Strawberry plants reproduce asexually by [[runners]] and daffodils by [[bulbs]].'], [], 'These produce clones of the parent.')
  ] });
  add('b-dna', { gaps: [
    G('DNA structure.', ['DNA is a [[polymer]] made of two strands forming a [[double helix]].'], [], 'The strands are made of nucleotides.'),
    G('Genes.', ['A [[gene]] is a short section of DNA that codes for a particular [[protein]].'], [], 'The genome is the entire genetic material.'),
    G('Chromosomes.', ['Chromosomes are long molecules of DNA found in the [[nucleus]] of the cell.'], [], 'Each chromosome carries many genes.'),
    G('The human genome.', ['Understanding the human genome helps in the [[search|searching]] for genes linked to disease, in treatment of inherited disorders and in tracing human [[migration]].'], [], 'The genome project has been completed.')
  ] });
  add('b-nucleotides', { gaps: [
    G('Nucleotides.', ['A nucleotide is made of a [[sugar]], a [[phosphate]] and one [[base]].'], [], 'The sugar–phosphate backbone joins nucleotides.'),
    G('Base pairing.', ['In DNA, A pairs with [[T]] and C pairs with [[G]].'], [], 'The pairs are held together by weak bonds.'),
    G('Triplet code.', ['Each sequence of [[3|three]] bases codes for one [[amino acid]].'], ['3'], 'The sequence determines the order of amino acids.'),
    G('Number of bases.', ['A gene coding for a protein of 100 amino acids needs [[300]] bases.'], ['100*3'], 'Three bases code for each amino acid.')
  ] });
  add('b-protein', { gaps: [
    G('Making a protein.', ['Ribosomes make proteins by joining [[amino acids]] in the order specified by the [[gene|DNA]].'], [], 'mRNA carries a copy of the gene to the ribosome.'),
    G('Mutation.', ['A mutation is a random [[change]] in the DNA base sequence. It may change the [[shape]] of the protein it codes for.'], [], 'Most mutations have no effect on the protein.'),
    G('Non-coding DNA.', ['Parts of DNA that do not code for proteins can still [[control|switch on|switch off]] genes.'], [], 'They affect gene expression.'),
    G('Enzyme mutation.', ['If a mutation changes the active site of an enzyme, the substrate may no longer [[fit]], so the enzyme can no longer [[catalyse|work]].'], [], 'The enzyme is no longer able to function.')
  ] });
  add('b-inheritance', { gaps: [
    G('Alleles.', ['Different versions of the same gene are called [[alleles]]. A [[dominant]] allele is always expressed if present.'], [], 'A recessive allele is expressed only when two copies are present.'),
    G('Genotype and phenotype.', ['The [[genotype]] is the combination of alleles a person has and the [[phenotype]] is the characteristic that is expressed.'], [], 'For example, Tt is a genotype.'),
    G('Sex inheritance.', ['In humans females have the sex chromosomes [[XX]] and males have [[XY]].'], [], 'The sex of the child depends on the sperm.'),
    G('Disorders.', ['Cystic fibrosis is caused by a [[recessive]] allele; polydactyly is caused by a [[dominant]] allele.'], [], 'A carrier of a recessive disorder has one copy.')
  ] });
  add('b-crosses', { gaps: [
    G('A cross of Tt × Tt.', ['The possible offspring are TT, Tt, Tt and tt, so the probability of the recessive phenotype is [[1/4|0.25|25%]].'], ['1/4'], 'Only tt shows the recessive phenotype.'),
    G('Ratio.', ['The phenotype ratio for Tt × Tt is [[3]] dominant : [[1]] recessive.'], ['3', '1'], 'TT, Tt and Tt are all dominant.'),
    G('Test cross.', ['In a cross of Tt × tt, [[50|0.5|1/2]]% of the offspring are expected to show the recessive phenotype.'], ['2/4*100'], 'The offspring are Tt, Tt, tt and tt.'),
    G('Probability.', ['The probability that two children of carrier parents are both affected is 1/4 × 1/4 = [[1/16|0.0625]].'], ['1/4*1/4'], 'Multiply the probabilities for independent events.')
  ] });
  add('b-selection', { gaps: [
    G('Variation.', ['Variation in a population may be caused by [[genes|genetic]] differences, by the [[environment]], or by both.'], [], 'Mutations are a source of new variation.'),
    G('Natural selection.', ['Individuals with [[characteristics|features]] best suited to the environment are more likely to [[survive]] and breed, passing on their alleles.'], [], 'This leads to evolution over many generations.'),
    G('Selective breeding.', ['In selective breeding, humans choose parents with the desired [[characteristics|features]] and breed them over many [[generations]].'], [], 'It is used in crops and in dogs and cattle.'),
    G('Disadvantage.', ['Selective breeding reduces the [[gene pool|variety]], so inbreeding can cause [[disease|health problems|inherited disorders]] in a population.'], [], 'A disease could wipe out the population.')
  ] });
  add('b-engineering', { gaps: [
    G('Genetic engineering.', ['Genetic engineering is the transfer of a gene from one [[organism]] to another to give a desired [[characteristic|trait|feature]].'], [], 'The organism is then genetically modified.'),
    G('Examples.', ['Bacteria are engineered to make [[insulin]], and crops can be modified to be resistant to [[herbicides|pests|insects|disease]].'], [], 'Golden rice contains extra vitamin A.'),
    G('Benefits.', ['GM crops can have a higher [[yield]] and be more nutritious.'], [], 'Crops grow better and may need fewer pesticides.'),
    G('Concerns.', ['Some people worry that GM crops may harm [[wild|wildlife|insects]] or have effects on [[human health|health]].'], [], 'Gene transfer to wild plants is a possible risk.')
  ] });
  add('b-engineering-steps', { gaps: [
    G('Enzymes.', ['[[Restriction]] enzymes cut out the gene and [[ligase]] enzymes join the gene into the vector.'], [], 'Restriction enzymes leave sticky ends.'),
    G('Vectors.', ['The vector, such as a [[plasmid]] or a virus, carries the gene into the [[host|bacterial]] cell.'], [], 'The plasmid is from bacteria.'),
    G('Early stage.', ['The gene is inserted at an early stage of development so that all the [[cells|body cells]] of the organism develop with the new characteristic.'], [], 'It is passed on to the offspring.'),
    G('Sticky ends.', ['The gene and the plasmid are cut with the same enzyme so that the [[sticky]] ends are complementary and can join.'], [], 'The bases on the ends match.')
  ] });
  add('b-cloning', { gaps: [
    G('Plant cloning.', ['Plants can be cloned by taking [[cuttings]] or by [[tissue culture]], using small groups of cells.'], [], 'Clones are genetically identical to the parent.'),
    G('Animal cloning.', ['In adult cell cloning, the [[nucleus]] from an adult body cell is transferred to an egg cell whose nucleus has been [[removed]].'], [], 'The egg is then stimulated to divide.'),
    G('Embryo transplants.', ['An embryo is split into several cells which are [[transplanted|implanted]] into host mothers.'], [], 'This produces many identical offspring.'),
    G('Risks.', ['Cloning reduces the [[gene pool|genetic variation|variation]], so a population of clones may all be killed by one [[disease]].'], [], 'Clones have the same susceptibility.')
  ] });
  add('b-history', { gaps: [
    G('Darwin and Wallace.', ['Darwin and Wallace both proposed the theory of evolution by [[natural selection]]. Darwin published his ideas in [[On the Origin of Species|the Origin of Species]].'], [], 'Wallace independently reached the same conclusion.'),
    G('Why Darwin’s theory was controversial.', ['The theory challenged ideas about the [[creation]] of life and there was not enough [[evidence]] about how characteristics were inherited.'], [], 'The mechanism of inheritance was not known.'),
    G('Mendel.', ['Mendel’s experiments with [[pea]] plants showed that characteristics are inherited as units, later called [[genes]].'], [], 'His work was not recognised until after his death.'),
    G('Speciation.', ['If two populations become so different that they can no longer interbreed to produce [[fertile]] offspring, a new [[species]] has formed.'], [], 'Isolation of the populations is important.')
  ] });
  add('b-evidence', { gaps: [
    G('Fossils.', ['Fossils are the remains of organisms from [[millions|many]] of years ago, found in [[rocks]].'], [], 'They give evidence about how organisms have changed.'),
    G('Extinction.', ['Extinction may be caused by new [[predators|disease]], changes to the environment or [[competitors|competition]].'], [], 'A species is extinct if no individuals remain.'),
    G('Antibiotic resistance.', ['Bacteria with a mutation that gives [[resistance]] survive antibiotics and reproduce, so the resistant [[strain|population]] increases.'], [], 'This is natural selection in action.'),
    G('Incomplete record.', ['The fossil record is incomplete because many early forms of life were [[soft-bodied|soft]] and have not been preserved.'], [], 'Many fossils have not yet been found.')
  ] });
  add('b-classification', { gaps: [
    G('Linnaean system.', ['Organisms are classified into kingdom, phylum, class, order, family, [[genus]] and [[species]].'], [], 'The binomial system uses genus and species.'),
    G('Three domains.', ['Woese proposed three domains: [[archaea]], bacteria and [[eukaryota|eukaryotes]].'], [], 'This was based on chemical analysis.'),
    G('Evolutionary trees.', ['Evolutionary trees show how organisms are [[related]] and the more recent the common [[ancestor]], the more closely related the species.'], [], 'They use evidence from fossils and DNA.'),
    G('Binomial name.', ['Homo sapiens: the genus is [[Homo]] and the species is [[sapiens]].'], [], 'The genus name has a capital letter.')
  ] });

  add('b-community', { gaps: [
    G('Ecosystem terms.', ['A [[community]] is all the populations in an area; a [[habitat]] is where an organism lives; an [[ecosystem]] includes living and non-living things.'], [], 'An ecosystem is the interaction of the community with its environment.'),
    G('Competition.', ['Plants compete for light, [[water]], space and mineral ions; animals compete for food, [[mates]] and territory.'], [], 'Competition affects population size.'),
    G('Interdependence.', ['A [[stable]] community is one where the processes that take materials out are balanced by the processes that return them.'], [], 'Species depend on each other for food and shelter.'),
    G('Abiotic factors.', ['Abiotic factors include light intensity, [[temperature]], moisture level and soil [[pH]].'], [], 'Biotic factors include predators and disease.')
  ] });
  add('b-adaptation', { gaps: [
    G('Adaptations.', ['Adaptations may be structural, [[behavioural]] or [[functional|physiological]].'], [], 'They help an organism survive in its habitat.'),
    G('A polar bear.', ['The polar bear has thick fur and a layer of [[fat|blubber]] for insulation, and white fur for [[camouflage]].'], [], 'These are structural adaptations to the cold.'),
    G('A cactus.', ['A cactus has [[spines]] instead of leaves to reduce water loss, and [[long|deep|extensive]] roots to absorb water.'], [], 'Its stem stores water.'),
    G('Extremophiles.', ['Extremophiles are organisms adapted to live in [[extreme]] conditions such as high temperature, high [[salt|acidity|salinity]] or high pressure.'], [], 'Bacteria in deep-sea vents are an example.')
  ] });
  add('b-foodchains', { gaps: [
    G('Food chains.', ['Food chains start with a [[producer]], which makes glucose by [[photosynthesis]]. A secondary consumer eats a [[primary]] consumer.'], [], 'Arrows show the direction of energy flow.'),
    G('Predator–prey cycles.', ['In a predator–prey cycle the number of prey [[increases]] first and then the number of [[predators|predator]] increases.'], [], 'The predator peak follows the prey peak.'),
    G('Stable community.', ['In a stable community the numbers of each species stay [[constant|steady|the same]] over time, fluctuating around a mean.'], [], 'Predator and prey numbers rise and fall.'),
    G('Food web.', ['If one species is removed from a food web, the numbers of other species [[change|are affected]].'], [], 'The organisms in a food web are interdependent.')
  ] });
  add('b-sampling', { gaps: [
    G('Quadrats.', ['Quadrats are placed [[randomly]] to avoid [[bias]] when estimating the population size.'], [], 'Random numbers are used for coordinates.'),
    G('Population size.', ['In 10 quadrats of 1 m², the total number of daisies counted is 50. mean per quadrat = [[5]]. For a field of 200 m², population = 5 × 200 = [[1000]].'], ['50/10', '5*200'], 'Population = mean per m² × total area.'),
    G('Transects.', ['A [[transect]] is a line across an area; it is used to investigate the effect of a [[gradient|change]] in an environmental factor.'], [], 'For example, from a hedge into a field.'),
    G('Percentage cover.', ['If 12 of the 25 squares in a quadrat are filled with grass, the percentage cover is 12 ÷ 25 × 100 = [[48]]%.'], ['12/25*100'], 'Percentage = part ÷ whole × 100.')
  ] });
  add('b-cycles', { gaps: [
    G('Carbon cycle.', ['Carbon dioxide is removed from the air by [[photosynthesis]] and returned by [[respiration]], combustion and decay.'], [], 'Fossil fuels are a store of carbon.'),
    G('Decay.', ['Microorganisms such as bacteria and [[fungi]] break down dead material and release [[carbon dioxide|nutrients|minerals]].'], [], 'Decay returns nutrients to the soil.'),
    G('Water cycle.', ['Water [[evaporates]] from the oceans, [[condenses]] to form clouds and falls as [[precipitation|rain]].'], [], 'Fresh water is collected and treated for drinking.'),
    G('Fresh water.', ['Potable water is [[safe|fit]] to drink and is made from fresh water by [[filtering|filtration]] and sterilising.'], [], 'Sterilising uses chlorine or ozone.')
  ] });
  add('b-biodiversity', { gaps: [
    G('Biodiversity.', ['Biodiversity is the [[variety]] of all the different species of organisms on Earth or within an ecosystem.'], [], 'High biodiversity makes ecosystems more stable.'),
    G('Human impact.', ['Human activity can reduce biodiversity through [[pollution|deforestation]], land [[use|development]] and waste.'], [], 'Increasing population increases the demand for resources.'),
    G('Deforestation.', ['Deforestation in tropical areas is carried out to provide [[land|space]] for [[farming|crops|cattle|agriculture]] and for biofuels.'], [], 'It destroys habitats.'),
    G('Peat.', ['Destroying peat bogs releases [[carbon dioxide]] into the atmosphere, contributing to [[global warming]].'], [], 'Peat is used as compost.')
  ] });
  add('b-conservation', { gaps: [
    G('Global warming.', ['Increasing levels of carbon dioxide and [[methane]] cause global [[warming]] and climate change.'], [], 'The changes affect species distribution.'),
    G('Effects.', ['Climate change can cause [[migration]] of species, changes in the [[distribution]] of species and loss of habitats.'], [], 'Sea levels rise as ice melts.'),
    G('Conservation.', ['Biodiversity can be maintained by breeding [[programmes|programs]] for endangered species, protection of [[habitats]], and reducing deforestation.'], [], 'Seed banks store seeds for the future.'),
    G('Trade-offs.', ['Conservation schemes may cost [[money]] and may conflict with the needs of local [[people|communities]].'], [], 'Decisions involve economic, social and environmental issues.')
  ] });
  add('b-decay', { gaps: [
    G('Decay.', ['Decay is faster in [[warm]], moist conditions with plenty of [[oxygen]].'], [], 'These conditions suit microorganisms.'),
    G('Compost.', ['Compost is decayed organic matter used as a [[fertiliser]]. [[Aerobic]] decay needs oxygen.'], [], 'The compost heap is turned to supply oxygen.'),
    G('Biogas.', ['Biogas is produced by [[anaerobic]] decay and contains [[methane]], which can be burned as a fuel.'], [], 'It is generated in a biogas digester.'),
    G('Decay rate.', ['In an investigation of milk decay, a [[higher]] temperature increases the rate of decay until enzymes are [[denatured]].'], [], 'The pH changes as lactic acid forms.')
  ] });
  add('b-biomass', { gaps: [
    G('Trophic levels.', ['Producers are at trophic level [[1]]. Biomass decreases at each level because energy is [[lost|transferred]] as heat, in waste and in movement.'], ['1'], 'Not all the biomass is eaten.'),
    G('Efficiency.', ['A food chain: producers have 10 000 kJ and the primary consumers receive 1000 kJ. efficiency = 1000 ÷ 10 000 × 100 = [[10]]%.'], ['1000/10000*100'], 'Efficiency = energy transferred ÷ energy supplied × 100.'),
    G('Where biomass is lost.', ['Biomass is lost through [[respiration]], waste such as faeces and urine and parts that are not [[eaten|consumed]].'], [], 'Respiration releases energy for movement and heat.'),
    G('Food chain length.', ['Food chains rarely have more than [[5|five]] trophic levels because so little [[energy|biomass]] is transferred.'], ['5'], 'There is not enough energy to support more.')
  ] });
  add('b-foodproduction', { gaps: [
    G('Food security.', ['Food security means having enough [[food]] available to feed a population, and factors include population growth, [[climate]] change and new pests.'], [], 'Sustainable methods are needed.'),
    G('Fish stocks.', ['Fish stocks can be maintained by setting [[quotas]] and by controlling the size of the [[mesh|net]] holes in nets.'], [], 'This allows young fish to escape.'),
    G('Farming methods.', ['Reducing the number of [[trophic]] levels in a food chain, or limiting movement of livestock, increases the [[efficiency]] of food production.'], [], 'Less energy is lost.'),
    G('Biotechnology.', ['The fungus [[Fusarium]] is grown in fermenters to produce [[mycoprotein]], a protein-rich food.'], [], 'It is used as a meat substitute.')
  ] });
})();
