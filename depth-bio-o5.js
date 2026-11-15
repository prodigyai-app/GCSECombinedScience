/* Opus depth pass for Ecology (4.7), including the new 4.7.2.4 lesson. */
(() => {
  const { v, fr, res } = LAB.W, add = GcseDepth.add, D = { desc: true };
  const ul = a => '<ul>' + a.map(x => `<li>${x}</li>`).join('') + '</ul>';
  const L = (id, title, html, higher) => add(id, { learn: [[title, html, higher]] });
  const E = (id, title, q, steps, meta) => add(id, { ex: [[title, q, steps, meta || D]] });
  const P = (q, m, ms, x) => Object.assign({ q, m, lines: Math.max(2, m), ms: ms.map(t => ['1', t]) }, x || {});
  const C = (a, unit, calc, tol = 0.02) => ({ ans: { a, unit, tol }, calc });
  const H = o => Object.assign(o, { ht: true, q: '<span class="ht">Higher</span> ' + o.q });
  const Q = (stem, parts) => ({ stem: stem ? `<p>${stem}</p>` : '', parts });
  const X = (id, ...qs) => add(id, { exam: qs });
  const L6 = (a, b, c) => [['Level 3 (5–6)', a], ['Level 2 (3–4)', b], ['Level 1 (1–2)', c], ['0', 'No relevant content.']];
  const G = (q, lines, calc, why, higher) => Object.assign({ q, lines, calc: calc || [], why }, higher ? { higher: true } : {});

  /* ---------- b-community ---------- */
  L('b-community', 'Going further: biotic and abiotic factors', `<p>An <b>ecosystem</b> is the interaction of a community of living organisms (biotic) with the non-living (abiotic) parts of their environment. Organisms need a supply of materials from their surroundings and from other living organisms to survive and reproduce. Plants often compete with each other for light and space, and for water and mineral ions from the soil. Animals often compete for food, mates and territory. Within a community each species depends on other species for food, shelter, pollination and seed dispersal (<b>interdependence</b>). If one species is removed it can affect the whole community. A <b>stable community</b> is one where all the species and environmental factors are in balance so that population sizes remain fairly constant.</p><p>Abiotic factors: light intensity, temperature, moisture levels, soil pH and mineral content, wind intensity and direction, carbon dioxide levels for plants, and oxygen levels for aquatic animals. Biotic factors: availability of food, new predators arriving, new pathogens, and one species outcompeting another so the numbers are no longer sufficient to breed.</p>` + ul(['Population: all organisms of one species in an area.', 'Community: all populations in an area.', 'Habitat: the place where an organism lives.']));
  E('b-community', 'Predicting the effect of removing a species', 'In a pond, frogs eat insects and herons eat frogs. Frogs are killed by a disease. Predict two effects.', [
    ['Prey', 'Fewer frogs eat insects.', ['insect numbers rise']],
    ['Predators', 'Herons lose food.', [`${res('Insects increase; herons decrease or move away.')}`]]]);
  E('b-community', 'Population density', 'A 4 m² area of rocky shore contains 96 limpets. Calculate the population density.', [
    ['Divide', 'number ÷ area.', ['96 ÷ 4']],
    ['Answer', 'Units per m².', [`${res('24 limpets per m²')}`]]], { chk: [['96/4', 24]] });
  X('b-community', Q('Red squirrels in the UK have declined since grey squirrels were introduced.', [
    P('Suggest two resources the squirrels compete for.', 2, ['food (nuts, seeds)', 'space / territory / nesting sites / mates']),
    P('Give one abiotic factor that could affect squirrel populations.', 1, ['temperature / rainfall / light / wind'])
  ]));

  /* ---------- b-adaptation ---------- */
  L('b-adaptation', 'Going further: types of adaptation', `<p>Organisms have features (adaptations) that enable them to survive in the conditions in which they normally live. <b>Structural</b> adaptations are physical features, such as thick fur, small ears or a large surface area. <b>Behavioural</b> adaptations are things the organism does, such as migration, hibernation or being active at night. <b>Functional</b> adaptations involve processes inside the body, such as producing concentrated urine, reproducing at certain times, or desert plants opening stomata only at night.</p><p>Some organisms live in environments that are very extreme, such as at high temperature, pressure or salt concentration. These organisms are called <b>extremophiles</b>; bacteria living in deep-sea vents are an example. Surface area to volume ratio is an important idea: animals in cold places tend to be larger with small extremities (small SA:V, less heat loss), while desert animals often have large ears (large SA:V, more heat loss).</p>` + ul(['Explain how the feature helps survival, not just what it is.', 'Cacti: spines reduce water loss and deter animals; swollen stems store water; shallow wide roots or deep roots.', 'Camouflage reduces detection by predators or prey.']));
  E('b-adaptation', 'SA:V and heat loss', 'Model an arctic fox as a cube of side 4 cm and a desert fox as a cube of side 2 cm. Compare SA:V.', [
    ['Arctic', '6 ÷ 4 = 1.5.', ['1.5 : 1']],
    ['Desert', '6 ÷ 2 = 3.', [`${res('The smaller desert fox has twice the SA:V, so it loses heat faster.')}`]]], { chk: [['6/4', 1.5], ['6/2', 3]] });
  E('b-adaptation', 'Classifying adaptations', 'Classify: (a) a camel’s fat stored in the hump (b) a desert rat staying underground by day (c) a camel producing very little urine.', [
    ['Match', 'Structural, behavioural, functional.', ['feature, action, process']],
    ['Answer', 'Apply.', [`${res('(a) structural (b) behavioural (c) functional')}`]]]);
  X('b-adaptation', Q('Polar bears live in the Arctic.', [
    P('Explain how a thick layer of fat under the skin helps a polar bear survive.', 2, ['insulates / reduces heat loss', 'energy store when food is scarce']),
    P('Give one behavioural adaptation of an animal that lives in a cold climate.', 1, ['hibernation / migration / huddling'])
  ]));

  /* ---------- b-foodchains ---------- */
  L('b-foodchains', 'Going further: feeding relationships', `<p>Feeding relationships within a community can be represented by food chains. All food chains begin with a <b>producer</b>, which synthesises molecules; this is usually a green plant or alga that makes glucose by photosynthesis. A range of experimental methods using transects and quadrats are used to determine the distribution and abundance of species. Producers are eaten by primary consumers, which may be eaten by secondary consumers, which may be eaten by tertiary consumers. Consumers that kill and eat other animals are predators, and those eaten are prey.</p><p>In a stable community the numbers of predators and prey rise and fall in cycles. When prey numbers increase, there is more food for predators, so predator numbers increase after a delay; then more prey are eaten, so prey numbers fall, followed by predator numbers.</p>` + ul(['Arrows point in the direction of energy transfer (from eaten to eater).', 'Predator peaks lag behind prey peaks.', 'Food webs show interdependence more realistically than chains.']));
  E('b-foodchains', 'Reading a predator–prey graph', 'Prey numbers peak in 2010 and 2014; predator numbers peak in 2011 and 2015. Explain the lag.', [
    ['Prey increase', 'More food for predators.', ['predators breed more']],
    ['Delay', 'Predator young take time to be born and grow.', [`${res('Predator numbers rise about a year after prey numbers.')}`]]]);
  E('b-foodchains', 'Percentage change in a population', 'A hare population falls from 80 000 to 12 000. Calculate the percentage decrease.', [
    ['Change', '80 000 − 12 000 = 68 000.', ['decrease']],
    ['Percentage', '÷ 80 000 × 100.', [`${res('85%')}`]]], { chk: [['68000/80000*100', 85]] });
  X('b-foodchains', Q('A food chain: grass → rabbit → fox.', [
    P('Identify the producer and the secondary consumer.', 2, ['producer: grass', 'secondary consumer: fox']),
    P('Explain why the grass is called a producer.', 1, ['it makes its own food (glucose) by photosynthesis'])
  ]));

  /* ---------- b-sampling ---------- */
  L('b-sampling', 'Going further: quadrats and transects', `<p>To estimate the population of a plant species in a field, place quadrats at <b>random</b> positions, using random number coordinates on a grid, and count the number of the species in each. Calculate the mean number per quadrat and scale up: population = mean number per m² × total area. Random sampling avoids bias. Using more quadrats gives a more representative estimate.</p><p>A <b>transect</b> is a line across a habitat, for example from a hedge into a field or from the sea up a beach. Quadrats are placed at regular intervals along it and the number of the species (or percentage cover) is recorded, together with abiotic factors such as light intensity, soil moisture or pH. This shows how the distribution of a species changes with an environmental factor. Mean, median and mode can be used to summarise data; the range shows the spread.</p>` + ul(['Use percentage cover when individual plants are hard to count.', 'Count a plant if more than half of it is inside the quadrat (be consistent).', 'Transects show a change in distribution, not an estimate of total population.']));
  E('b-sampling', 'Estimating a population', 'Ten 0.25 m² quadrats contain 3, 5, 2, 4, 6, 3, 4, 2, 5, 6 daisies. The field is 1200 m². Estimate the population.', [
    ['Mean per quadrat', '40 ÷ 10 = 4.', ['4 per 0.25 m²']],
    ['Per m² and total', '4 × 4 = 16 per m²; × 1200.', [`${res('19 200 daisies')}`]]], { chk: [['(3+5+2+4+6+3+4+2+5+6)/10', 4], ['4/0.25*1200', 19200]] });
  E('b-sampling', 'Median and mode', 'Find the median and mode of: 2, 7, 3, 3, 9, 4, 3.', [
    ['Order', '2, 3, 3, 3, 4, 7, 9.', ['middle value is the 4th']],
    ['Answer', 'Read off.', [`${res('median 3, mode 3')}`]]]);
  X('b-sampling', Q('A student places twenty 1 m² quadrats randomly in a 500 m² field and counts 140 dandelions in total.', [
    P('Estimate the number of dandelions in the field.', 1, ['3500'], C(3500, '', '140/20*500'))
  ]));

  /* ---------- b-cycles ---------- */
  L('b-cycles', 'Going further: the carbon and water cycles', `<p>All materials in the living world are recycled to provide the building blocks for future organisms. The <b>carbon cycle</b> returns carbon from organisms to the atmosphere as carbon dioxide, to be used by plants in photosynthesis. Carbon dioxide is removed by photosynthesis in plants and algae; carbon passes along food chains as animals eat plants; carbon dioxide is returned by respiration of plants, animals and microorganisms, and by the combustion of wood and fossil fuels. When organisms die, microorganisms (decomposers) break down their bodies, releasing carbon dioxide and mineral ions into the soil.</p><p>The <b>water cycle</b> provides fresh water for plants and animals on land before draining into the seas. Water evaporates from the sea and land and is transpired from plants, condenses to form clouds, and falls as precipitation. Water is taken up by plants and animals and returned by excretion, sweating and transpiration.</p>` + ul(['Decomposers: bacteria and fungi.', 'Fossil fuels are carbon stores formed from dead organisms that did not decay.', 'Mineral ions released by decay are absorbed by plant roots.']));
  E('b-cycles', 'Tracing a carbon atom', 'Describe how a carbon atom in a cow’s muscle could become part of a grass plant.', [
    ['Return to air', 'The cow respires, or dies and decays.', ['carbon dioxide released']],
    ['Into grass', 'Grass takes in carbon dioxide.', [`${res('Photosynthesis builds the carbon into glucose in the grass.')}`]]]);
  E('b-cycles', 'Carbon budget', 'A forest absorbs 25 t of carbon a year by photosynthesis and releases 18 t by respiration and decay. Calculate the net carbon stored.', [
    ['Subtract', '25 − 18.', ['net uptake']],
    ['Answer', 'Interpret.', [`${res('7 t of carbon stored per year')}`]]], { chk: [['25-18', 7]] });
  X('b-cycles', Q('Microorganisms play an important role in the carbon cycle.', [
    P('Explain how microorganisms return carbon to the atmosphere.', 2, ['they decompose dead organisms / waste', 'and release carbon dioxide by respiration']),
    P('Name the process by which plants remove carbon dioxide from the atmosphere.', 1, ['photosynthesis'])
  ]));

  /* ---------- b-biodiversity ---------- */
  L('b-biodiversity', 'Going further: human impact on biodiversity', `<p><b>Biodiversity</b> is the variety of all the different species of organisms on Earth, or within an ecosystem. A great biodiversity ensures the stability of ecosystems by reducing the dependence of one species on another for food, shelter and maintenance of the physical environment. The future of the human species on Earth relies on maintaining a good level of biodiversity. Many human activities are reducing biodiversity, and only recently have measures been taken to try to stop this reduction.</p><p>Rapid growth in the human population and an increase in the standard of living mean that increasingly more resources are used and more waste is produced. Pollution kills plants and animals: in water from sewage, fertiliser or toxic chemicals; in air from smoke and acidic gases; on land from landfill and toxic chemicals. Humans reduce the amount of land available for other animals and plants by building, quarrying, farming and dumping waste. Large-scale deforestation in tropical areas has occurred to provide land for cattle and rice fields and to grow crops for biofuels. Peat bogs are destroyed to produce garden compost, releasing carbon dioxide and reducing habitats.</p>` + ul(['Eutrophication: fertiliser runoff → algal bloom → plants die → decomposers use up oxygen → fish die.', 'Deforestation reduces photosynthesis and releases CO₂ when trees are burned.', 'Peat-free compost conserves peat bogs.']));
  E('b-biodiversity', 'Deforestation rates', 'A rainforest of 4000 km² loses 120 km² a year. What percentage is lost each year?', [
    ['Divide', '120 ÷ 4000.', ['0.03']],
    ['Percentage', '× 100.', [`${res('3% per year')}`]]], { chk: [['120/4000*100', 3]] });
  E('b-biodiversity', 'Explaining fish deaths', 'Explain why fish may die after fertiliser runs into a lake.', [
    ['Algae', 'Nutrients cause rapid algal growth, blocking light.', ['plants below die']],
    ['Oxygen', 'Decomposers break down dead plants, using up oxygen.', [`${res('Low oxygen levels kill the fish.')}`]]]);
  X('b-biodiversity', Q('Peat bogs are being destroyed to make compost.', [
    P('Give one reason why destroying peat bogs reduces biodiversity.', 1, ['habitats destroyed for the species that live there'])
  ]));

  /* ---------- b-conservation ---------- */
  L('b-conservation', 'Going further: maintaining biodiversity', `<p>Levels of carbon dioxide and methane in the atmosphere are increasing, contributing to global warming. The consequences include loss of habitat when low-lying areas are flooded by rising sea levels, changes in the distribution of species in areas where temperature or rainfall changes, and changes to the migration patterns of animals.</p><p>Scientists and concerned citizens have put in place programmes to reduce the negative effects of humans on ecosystems and biodiversity. These include breeding programmes for endangered species; protection and regeneration of rare habitats; reintroduction of field margins and hedgerows in agricultural areas where farmers grow only one type of crop; reduction of deforestation and carbon dioxide emissions by some governments; and recycling resources rather than dumping waste in landfill. These must balance conflicting pressures: the cost of programmes, protecting food security, the needs of local people, and the value of ecotourism.</p>` + ul(['Hedgerows provide habitats and corridors between areas.', 'Seed banks store seeds of rare plants.', 'Evaluate with benefits, costs and who is affected.']));
  E('b-conservation', 'Evaluating a hedgerow scheme', 'A farmer is paid £800 per km to replant hedgerows but loses crops worth £350 per km. Is the scheme financially worthwhile, and what are the benefits?', [
    ['Money', '800 − 350 = £450 per km gain.', ['worthwhile']],
    ['Benefits', 'Habitats and corridors for wildlife; pollinators.', [`${res('Yes: £450 per km plus more biodiversity.')}`]]], { chk: [['800-350', 450]] });
  E('b-conservation', 'Breeding programmes', 'Give one benefit and one problem of captive breeding programmes.', [
    ['Benefit', 'Increases numbers of endangered species for release.', ['prevents extinction']],
    ['Problem', 'Small populations have little genetic variation; habitat may be lost.', [`${res('Saves species but may lack variation and suitable habitat.')}`]]]);
  X('b-conservation', Q('Rising global temperatures may affect the distribution of species.', [
    P('Explain why some species may move to higher altitudes.', 2, ['higher altitudes are cooler', 'so conditions there match the species’ needs as lower areas warm']),
    P('Give one way that governments can help to maintain biodiversity.', 1, ['protect habitats / reduce deforestation / reduce CO₂ emissions / fund breeding programmes'])
  ]));

  /* ---------- b-decay ---------- */
  E('b-decay', 'Rate of decay from mass loss', 'A bag of leaves loses 36 g of mass in 12 weeks. Calculate the mean rate of decay in g per week.', [
    ['Divide', 'mass ÷ time.', ['36 ÷ 12']],
    ['Answer', 'Units.', [`${res('3 g per week')}`]]], { chk: [['36/12', 3]] });
  E('b-decay', 'Explaining cold storage', 'Explain why food lasts longer in a fridge.', [
    ['Temperature', 'Low temperature slows decomposers’ enzymes.', ['slower respiration and growth']],
    ['Effect', 'Microorganisms reproduce slowly.', [`${res('Decay is slower, so food keeps longer.')}`]]]);
  L('b-decay', 'Going further: factors affecting decay', `<p>The rate of decay depends on temperature, water and the availability of oxygen. Decomposers (bacteria and fungi) work fastest in warm, moist conditions with plenty of oxygen, because their enzymes work faster and they can respire aerobically. Cold, dry or oxygen-poor conditions slow decay, which is why food is preserved by refrigeration, freezing, drying or vacuum packing.</p><p>Gardeners and farmers try to provide optimum conditions for rapid decay of waste biological material: the compost produced is used as a natural fertiliser. Anaerobic decay produces methane gas, and biogas generators can be used to produce methane as a fuel.</p>` + ul(['Rate of decay = mass lost ÷ time.', 'Methane from biogas is a renewable fuel.', 'Biology only.']));
  X('b-decay', Q('A student measures the time for milk with lipase to change colour at 30 °C: 120 s.', [
    P('Calculate the rate using rate = 1000 ÷ time.', 1, ['8.3 s⁻¹'], C(8.33, 's⁻¹', '1000/120', 0.005))
  ]));


  /* ---------- b-biomass ---------- */
  L('b-biomass', 'Going further: pyramids and efficiency', `<p>Trophic levels can be represented by numbers, starting at level 1 with producers. Level 2 are primary consumers (herbivores), level 3 secondary consumers and level 4 tertiary consumers. Apex predators are carnivores with no predators. Decomposers break down dead plant and animal matter by secreting enzymes into the environment; small soluble food molecules then diffuse into the microorganism.</p><p><b>Pyramids of biomass</b> show the relative amount of biomass in each trophic level, drawn to scale. Producers are mostly plants and algae that transfer about 1% of the incident energy from light for photosynthesis. Only approximately 10% of the biomass from each trophic level is transferred to the level above it. Losses occur because not all the ingested material is absorbed (some is egested as faeces), some absorbed material is lost as waste such as carbon dioxide, water and urea, and large amounts of glucose are used in respiration.</p>` + ul(['Efficiency = biomass transferred to next level ÷ biomass available × 100.', 'Pyramids of biomass are always pyramid-shaped; pyramids of numbers may not be.', 'Short food chains are more efficient for food production.']));
  E('b-biomass', 'Efficiency of transfer', 'Producers contain 6000 kg of biomass and primary consumers 540 kg. Calculate the efficiency of transfer.', [
    ['Divide', '540 ÷ 6000.', ['0.09']],
    ['Percentage', '× 100.', [`${res('9%')}`]]], { chk: [['540/6000*100', 9]] });
  E('b-biomass', 'Predicting the next level', 'Primary consumers have 800 kg of biomass. Estimate the biomass of secondary consumers if 10% is transferred.', [
    ['10%', '800 × 0.10.', ['transfer']],
    ['Answer', 'Calculate.', [`${res('80 kg')}`]]], { chk: [['800*0.10', 80]] });
  X('b-biomass', Q('A pyramid of biomass shows: producers 2500 g/m², primary consumers 200 g/m², secondary consumers 20 g/m².', [
    P('Calculate the efficiency of biomass transfer from primary to secondary consumers.', 2, ['20 ÷ 200', '× 100 = 10%'], C(10, '%', '20/200*100')),
    P('Give one reason why biomass is lost between trophic levels.', 1, ['used in respiration / lost in faeces / urine / not all parts eaten'])
  ]));

  /* ---------- b-foodproduction ---------- */
  L('b-foodproduction', 'Going further: food security and biotechnology', `<p>Food security means having enough food to feed a population. Biological factors threatening food security include the increasing birth rate in some countries, changing diets in developed countries that mean scarce food resources are transported around the world, new pests and pathogens affecting farming, environmental changes affecting food production such as widespread famine when rains fail, the cost of agricultural inputs, and conflicts in some parts of the world.</p><p>Some animals are produced using high-protein foods in factory farming, limiting their movement and keeping them in temperature-controlled conditions so that more energy is used for growth; this increases efficiency but raises ethical concerns. Fish stocks are maintained by controlling net size and fishing quotas. Modern biotechnology techniques enable large quantities of microorganisms to be cultured for food: the fungus <i>Fusarium</i> is used to produce mycoprotein, a protein-rich food suitable for vegetarians, grown on glucose syrup in aerobic conditions and then harvested and purified. Genetically modified crops can provide more food or food with improved nutritional value, such as golden rice.</p>` + ul(['Larger net mesh lets young fish escape and breed.', 'Quotas limit the number of fish caught.', 'Eating plants rather than meat is more efficient (fewer trophic levels).']));
  E('b-foodproduction', 'Efficiency of factory farming', 'A free-range chicken converts 10% of its food into body mass; a battery chicken converts 18%. How much more body mass does the battery chicken make from 5 kg of food?', [
    ['Masses', '0.18 × 5 = 0.90 kg; 0.10 × 5 = 0.50 kg.', ['body mass']],
    ['Difference', 'Subtract.', [`${res('0.40 kg more')}`]]], { chk: [['0.18*5-0.10*5', 0.4]] });
  E('b-foodproduction', 'Fishing quotas', 'Explain why fishing quotas help to maintain fish stocks.', [
    ['Limit', 'Fewer fish are caught each year.', ['more survive']],
    ['Breeding', 'Enough fish remain to breed.', [`${res('Populations can be maintained at a sustainable level.')}`]]]);
  X('b-foodproduction', Q('Mycoprotein is produced from the fungus Fusarium.', [
    P('Give two conditions needed in the fermenter.', 2, ['glucose (syrup) as food source', 'aerobic / oxygen supplied (and a suitable temperature)']),
    P('Give one advantage of mycoprotein as a food.', 1, ['high in protein / low fat / suitable for vegetarians / produced quickly'])
  ]));

  /* ---------- b-environment-change (new lesson) ---------- */
  add('b-environment-change', { gaps: [
    G('Factors that change.', ['The environmental changes in the specification are temperature, availability of [[water]] and the composition of atmospheric [[gases|gas]].'], [], 'These all affect where species can survive.'),
    G('Types of change.', ['Changes may be [[seasonal]], geographic or caused by [[human]] interaction.'], [], 'Migration is an example of a response to seasonal change.'),
    G('Rate of range shift.', ['A species moves 90 km north in 15 years: the mean rate is [[6]] km per year.'], ['90/15'], 'Rate = distance ÷ time.'),
    G('Lichens.', ['Lichens disappear where [[sulfur dioxide]] levels are high, so they are used as [[indicators|indicator species]] of air quality.'], [], 'They return when air quality improves.')
  ] });
  E('b-environment-change', 'Evaluating distribution data', 'A survey found a lichen species at 12 sites in 1980 and 31 sites in 2020 in a city where sulfur dioxide levels fell by 80%. Calculate the percentage increase in sites and evaluate the conclusion that cleaner air caused the change.', [
    ['Percentage increase', 'Change ÷ original × 100.', ['(31 − 12) ÷ 12 × 100 = 158%']],
    ['Mechanism', 'Lichens are sensitive to sulfur dioxide.', ['falling SO₂ is a plausible cause']],
    ['Evaluate', 'Check other factors and the sample.', [`${res('Other changes (more trees, survey effort) could contribute; repeat surveys would strengthen the conclusion.')}`]]], { chk: [['(31-12)/12*100', 158.3]], higher: true });
  E('b-environment-change', 'Upslope movement', 'A plant’s lower limit on a mountain rose from 650 m to 770 m over 40 years. Calculate the mean rate of change.', [
    ['Change', '770 − 650 = 120 m.', ['upward shift']],
    ['Rate', '÷ 40 years.', [`${res('3 m per year')}`]]], { chk: [['(770-650)/40', 3]], higher: true });
  E('b-environment-change', 'Seasonal distribution', 'Explain why many birds that breed in the UK spend the winter in Africa.', [
    ['Seasonal change', 'UK winters are cold with fewer insects.', ['food scarce']],
    ['Response', 'Africa is warmer with more food.', [`${res('Migration lets them survive winter and return to breed in spring.')}`]]], { desc: true, higher: true });
})();
