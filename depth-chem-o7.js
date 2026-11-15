/* Opus depth pass for Chemistry of the atmosphere (chem-am1–chem-am5) and Using resources (chem-ur1–chem-ur8). */
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

  /* ---------- chem-am1 Evolution of the atmosphere ---------- */
  L('chem-am1', 'Going further: evidence and theories', `<p>For 200 million years, the proportions of different gases in the atmosphere have been much the same as today: about four-fifths (approximately 80%) nitrogen, about one-fifth (approximately 20%) oxygen, and small proportions of other gases including carbon dioxide, water vapour and noble gases. Theories about the early atmosphere are based on limited evidence because the time scale is about 4.6 billion years.</p><p>One theory suggests that intense volcanic activity in the first billion years released gases that formed an atmosphere mainly of carbon dioxide with little or no oxygen, like the atmospheres of Mars and Venus today. Volcanoes also produced nitrogen, which built up gradually, and may have produced small amounts of methane and ammonia. As the Earth cooled, water vapour condensed to form the oceans, and carbon dioxide dissolved in them, forming carbonate precipitates that became sediments. Algae and plants then produced oxygen by photosynthesis, which first appeared about 2.7 billion years ago. Carbon dioxide was locked into sedimentary rocks such as limestone and into fossil fuels such as coal, crude oil and natural gas.</p>` + ul(['Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂.', 'Limestone forms from the shells and skeletons of marine organisms.', 'Explain the decrease in CO₂ with: dissolving in oceans, photosynthesis, sedimentary rocks, fossil fuels.']));
  E('chem-am1', 'Explaining the rise in oxygen', 'Explain how the proportion of oxygen in the atmosphere increased.', [
    ['Source', 'Algae and later plants carried out photosynthesis.', ['carbon dioxide + water → glucose + oxygen']],
    ['Build-up', 'Over billions of years oxygen accumulated.', [`${res('Photosynthesis released oxygen, allowing animals to evolve.')}`]]]);
  E('chem-am1', 'Comparing atmospheres', 'The early atmosphere is thought to have been about 95% CO₂. Today it is about 0.04%. By what factor has the percentage fallen?', [
    ['Divide', '95 ÷ 0.04.', ['ratio']],
    ['Answer', 'Calculate.', [`${res('About 2400 times smaller')}`]]], { chk: [['95/0.04', 2375]] });
  X('chem-am1', Q('Scientists think the Earth’s early atmosphere was mainly carbon dioxide.', [
    P('Give the approximate percentages of nitrogen and oxygen in the atmosphere today.', 2, ['nitrogen about 80% (78%)', 'oxygen about 20% (21%)']),
    P('Describe two ways in which the amount of carbon dioxide in the early atmosphere decreased.', 2, ['dissolved in the oceans / formed carbonate precipitates', 'used by algae and plants in photosynthesis / locked in fossil fuels and sedimentary rocks']),
    P('Explain how limestone, a sedimentary rock, removed carbon dioxide from the early atmosphere.', 2, ['carbon dioxide dissolved in the oceans and was used by marine organisms to make shells and skeletons (calcium carbonate) / formed carbonate precipitates', 'these settled as sediments and were compressed into limestone, locking up the carbon'])
  ]));

  /* ---------- chem-am2 Greenhouse gases ---------- */
  L('chem-am2', 'Going further: the greenhouse effect and climate change', `<p>Greenhouse gases (water vapour, carbon dioxide and methane) maintain temperatures on Earth high enough to support life. Short-wavelength radiation from the Sun passes through the atmosphere and warms the Earth’s surface; the surface emits longer-wavelength infrared radiation, some of which is absorbed by greenhouse gases and re-emitted in all directions, including back towards the Earth.</p><p>Human activities increase greenhouse gases: carbon dioxide from burning fossil fuels and deforestation, methane from livestock farming, rice fields and landfill. Based on peer-reviewed evidence, many scientists believe these activities will cause the Earth’s average temperature to rise and result in global climate change. However, it is difficult to model such complex systems, which leads to simplified models, speculation and opinions in the media. Possible effects include rising sea levels, more extreme weather, changes in the amount and timing of rainfall, effects on food production and on the distribution of wildlife.</p>` + ul(['Peer review checks the methods and conclusions of scientific work.', 'Correlation between CO₂ and temperature does not by itself prove cause.', 'Name a specific effect and explain it in an answer.']));
  E('chem-am2', 'Explaining sea-level rise', 'Explain how increased carbon dioxide could cause sea levels to rise.', [
    ['Temperature', 'More CO₂ absorbs more infrared, so average temperature rises.', ['global warming']],
    ['Sea level', 'Ice melts and water expands as it warms.', [`${res('Melting ice sheets and thermal expansion raise sea levels.')}`]]]);
  E('chem-am2', 'Evaluating a claim', 'A newspaper says "Scientists cannot be sure humans cause climate change." Evaluate this.', [
    ['Evidence', 'Peer-reviewed studies link CO₂ from human activity to warming.', ['strong agreement']],
    ['Uncertainty', 'Models are simplified, so exact predictions vary.', [`${res('Most scientists agree on the cause; uncertainty is mainly in the size and timing of effects.')}`]]]);
  X('chem-am2', Q('The concentration of carbon dioxide in the atmosphere was about 280 parts per million (ppm) in 1800 and about 420 ppm in 2024.', [
    P('Calculate the percentage increase in carbon dioxide concentration.', 2, ['increase = 140 ppm', '140 ÷ 280 × 100 = 50%'], C(50, '%', '(420-280)/280*100')),
    P('Average global temperature has also risen over this period. Explain why this correlation alone does not prove that carbon dioxide caused the rise.', 1, ['another factor could cause both / correlation does not show cause (a mechanism or further evidence is needed)']),
    P('Explain why scientists publish their climate research in peer-reviewed journals.', 2, ['other scientists check the methods, data and conclusions', 'so the findings are more likely to be valid / reliable'])
  ]));

  /* ---------- chem-am3 Carbon footprint ---------- */
  L('chem-am3', 'Going further: reducing carbon footprints', `<p>The <b>carbon footprint</b> is the total amount of carbon dioxide and other greenhouse gases emitted over the full life cycle of a product, service or event. It can be reduced by reducing emissions of carbon dioxide and methane: using alternative energy supplies (renewables and nuclear), increasing energy conservation, carbon capture and storage, carbon taxes and licences, carbon offsetting (including tree planting) and using carbon-neutral fuels and processes.</p><p>Actions may be limited. There is still scientific disagreement about details of the causes and consequences, and a lack of public information and education. People may not want to change their lifestyles, and there may be no international agreement. Developing countries may prioritise economic growth, and some measures, such as carbon capture, are expensive or not yet developed at scale.</p>` + ul(['Carbon neutral: no net release of CO₂ (e.g. biofuels, in theory).', 'Methane is a more powerful greenhouse gas per molecule than CO₂.', 'Give a specific method and explain how it reduces emissions.']));
  E('chem-am3', 'Comparing two journeys', 'A car emits 0.18 kg CO₂ per km and a train 0.04 kg per passenger-km. Calculate the saving per passenger for a 250 km journey by train.', [
    ['Car', '0.18 × 250 = 45 kg.', ['car total']],
    ['Train and saving', '0.04 × 250 = 10 kg.', [`45 − 10 = ${res('35 kg CO₂ saved')}`]]], { chk: [['0.18*250-0.04*250', 35]] });
  E('chem-am3', 'Why reductions are difficult', 'Give two reasons why it is difficult to reduce the carbon footprint of a country.', [
    ['Economic', 'Alternatives can be expensive.', ['cost of renewables and carbon capture']],
    ['Social and political', 'People resist change; international agreement is hard.', [`${res('Cost and the need for lifestyle change and global cooperation.')}`]]]);
  X('chem-am3', Q('A city council wants to reduce its carbon footprint.', [
    P('Define the term carbon footprint.', 2, ['total amount of carbon dioxide and other greenhouse gases emitted', 'over the full life cycle of a product, service or event']),
    P('Suggest two ways the council could reduce its carbon footprint and explain how each works.', 4, ['use renewable energy / solar panels', 'less fossil fuel burned so less CO₂', 'improve insulation / energy efficiency / public transport', 'less energy needed, so less fuel burned (or tree planting absorbs CO₂)']),
    P('Give one reason why people may not support the changes.', 1, ['cost / unwilling to change lifestyle / lack of information'])
  ]));

  /* ---------- chem-am4 Atmospheric pollutants ---------- */
  L('chem-am4', 'Going further: pollutants from fuels', `<p>The combustion of fuels is a major source of atmospheric pollutants. Most fuels, including coal, contain carbon and/or hydrogen and may also contain some sulfur. The gases released into the atmosphere when a fuel is burned may include carbon dioxide, water vapour, carbon monoxide, sulfur dioxide and oxides of nitrogen. Solid particles and unburned hydrocarbons may also be released, forming particulates.</p><p><b>Carbon monoxide</b> is a toxic gas that is colourless and odourless, so it is not easily detected; it reduces the oxygen-carrying capacity of the blood. <b>Sulfur dioxide</b> (from sulfur in the fuel) and <b>oxides of nitrogen</b> (from nitrogen and oxygen in the air reacting at the high temperatures in engines) cause respiratory problems and acid rain, which damages buildings, plants and aquatic life. <b>Particulates</b> cause global dimming and health problems in the lungs.</p>` + ul(['Incomplete combustion: e.g. 2CH₄ + 3O₂ → 2CO + 4H₂O.', 'Catalytic converters change CO and NOₓ into CO₂ and N₂.', 'Removing sulfur from fuels or flue gases reduces acid rain.']));
  E('chem-am4', 'Equation for incomplete combustion', 'Write a balanced equation for methane burning to form carbon monoxide and water.', [
    ['Products', 'CO and H₂O.', ['CH₄ + O₂ → CO + 2H₂O']],
    ['Balance O', 'Right has 3 O; use 1½ O₂ and double.', [`${res('2CH₄ + 3O₂ → 2CO + 4H₂O')}`]]]);
  E('chem-am4', 'Source of nitrogen oxides', 'Explain why car engines produce oxides of nitrogen even though petrol contains no nitrogen.', [
    ['Source of nitrogen', 'Air contains about 80% nitrogen.', ['N₂ from air']],
    ['Conditions', 'High temperature in the engine.', [`${res('Nitrogen and oxygen from the air react at high temperature.')}`]]]);
  X('chem-am4', Q('Coal contains carbon, hydrogen and sulfur. When coal is burned in a power station, several pollutants are produced.', [
    P('Name the pollutant formed from sulfur and describe one environmental effect.', 2, ['sulfur dioxide', 'acid rain (damaging buildings / trees / lakes) or respiratory problems']),
    P('Explain why carbon monoxide is dangerous.', 2, ['toxic / combines with haemoglobin and reduces oxygen carried by the blood', 'colourless and odourless so not easily detected']),
    P('Explain how particulates are formed and give one effect.', 2, ['incomplete combustion produces carbon (soot) particles', 'global dimming / lung damage']),
    P('Suggest one way of reducing sulfur dioxide emissions from the power station.', 1, ['remove sulfur from the coal / scrub the flue gases'])
  ]));

  /* ---------- chem-am5 Review ---------- */
  L('chem-am5', 'Linking the ideas: the atmosphere then and now', `<p>The atmosphere has changed from mainly carbon dioxide to mainly nitrogen and oxygen because of volcanic activity, the formation of oceans, photosynthesis and the locking of carbon into rocks and fossil fuels. Burning those fossil fuels now releases the stored carbon as carbon dioxide, increasing the greenhouse effect, together with pollutants such as carbon monoxide, sulfur dioxide, nitrogen oxides and particulates.</p>` + ul(['Greenhouse gases: CO₂, CH₄, H₂O.', 'Pollutants: CO, SO₂, NOₓ, particulates.', 'Reduce footprints: renewables, efficiency, carbon capture, offsetting.']));
  E('chem-am5', 'Linking past and present', 'Explain how burning fossil fuels reverses one of the processes that changed the early atmosphere.', [
    ['Past', 'Carbon dioxide was locked into fossil fuels.', ['carbon stored underground']],
    ['Present', 'Combustion releases it.', [`${res('Burning fossil fuels returns stored carbon to the atmosphere as CO₂.')}`]]]);
  X('chem-am5', Q('This question is about the atmosphere.', [
    P('Name the process that first produced oxygen in the atmosphere.', 1, ['photosynthesis (by algae)']),
    P('Explain why the amount of carbon dioxide in the atmosphere has increased over the last 200 years.', 2, ['burning fossil fuels', 'deforestation / fewer trees to absorb CO₂']),
    P('Explain the difference between global warming and acid rain in terms of the gases that cause them.', 2, ['global warming: greenhouse gases (CO₂, methane)', 'acid rain: sulfur dioxide and nitrogen oxides']),
    P('Give two ways of reducing emissions from cars.', 2, ['catalytic converters', 'use electric / hybrid vehicles / public transport / sulfur-free fuel']),
    P('Explain why it is hard to predict future climate change accurately.', 2, ['climate is a complex system with many variables', 'models are simplified / depend on future human activity'])
  ]));

  /* ---------- chem-ur1 Potable water ---------- */
  L('chem-ur1', 'Going further: water treatment and desalination', `<p>Humans use the Earth’s resources to provide warmth, shelter, food and transport. <b>Sustainable development</b> meets the needs of current generations without compromising the ability of future generations to meet their own needs. <b>Potable water</b> is water that is safe to drink: it has low levels of dissolved salts and microbes. It is not pure in the chemical sense.</p><p>In the UK, rain provides fresh water that collects as surface water in lakes, rivers and reservoirs, or as groundwater in rocks (aquifers). It is treated by passing it through filter beds to remove solids, then sterilising it with chlorine, ozone or ultraviolet light to kill microbes. In dry countries, sea water may be <b>desalinated</b> by distillation or by reverse osmosis using membranes. Both need large amounts of energy, so desalination is expensive. In the required practical, a water sample is analysed by testing its pH, then evaporating a known volume to find the mass of dissolved solids, and distilling it to obtain pure water.</p>` + ul(['Mass of dissolved solids per dm³ = mass left ÷ volume in dm³.', 'Pure water has pH 7 and boils at 100 °C.', 'Chlorine leaves a residue that keeps the water safe in pipes.']));
  E('chem-ur1', 'Dissolved solids', 'Evaporating 50 cm³ of a water sample leaves 0.035 g of solid. Calculate the dissolved solids in g/dm³.', [
    ['Volume', '50 cm³ = 0.050 dm³.', ['convert']],
    ['Concentration', 'mass ÷ volume.', [`0.035 ÷ 0.050 = ${res('0.70 g/dm³')}`]]], { chk: [['0.035/0.050', 0.7]] });
  E('chem-ur1', 'Choosing a water source', 'Explain why the UK treats fresh water rather than desalinating sea water.', [
    ['Availability', 'The UK has plenty of rainfall.', ['fresh water readily available']],
    ['Cost', 'Desalination needs much more energy.', [`${res('Treating fresh water is cheaper and uses less energy.')}`]]]);
  X('chem-ur1', Q('A student analyses a sample of sea water.', [
    P('Describe how the student could find the mass of dissolved solids in 100 cm³ of the sea water.', 3, ['measure 100 cm³ into a weighed evaporating basin', 'evaporate the water (heat gently)', 'reweigh and subtract the mass of the basin']),
    P('Explain why distillation of sea water is not used to produce drinking water in the UK.', 2, ['requires a lot of energy / expensive', 'fresh (rain) water is available'])
  ]));

  /* ---------- chem-ur2 Waste water ---------- */
  L('chem-ur2', 'Going further: sewage treatment', `<p>Urban lifestyles and industrial processes produce large amounts of waste water that require treatment before being released into the environment. Sewage and agricultural waste water require removal of organic matter and harmful microbes. Industrial waste water may require removal of organic matter and harmful chemicals.</p><p>Sewage treatment includes: <b>screening and grit removal</b>; <b>sedimentation</b> to produce sewage sludge and effluent; <b>anaerobic digestion</b> of the sludge, producing biogas (methane) that can be used as a fuel and digested waste used as fertiliser; and <b>aerobic biological treatment</b> of the effluent, in which air is bubbled through so that bacteria break down organic matter. The treated effluent is released into rivers or the sea. Obtaining potable water from waste water involves more treatment than from fresh water, but may be needed where water is scarce.</p>` + ul(['Anaerobic: without oxygen. Aerobic: with oxygen.', 'Treating sewage reduces disease and protects aquatic life.', 'Ease of treatment: groundwater < waste water < salt water (in energy needed, roughly).']));
  E('chem-ur2', 'Ordering the stages', 'Put these stages of sewage treatment in order: aerobic treatment of effluent, screening, sedimentation, anaerobic digestion of sludge.', [
    ['Physical stages first', 'Remove large objects, then let solids settle.', ['screening → sedimentation']],
    ['Biological stages', 'Sludge and effluent are treated separately.', [`${res('Screening → sedimentation → anaerobic digestion (sludge) and aerobic treatment (effluent)')}`]]]);
  E('chem-ur2', 'Comparing water sources', 'Rank groundwater, waste water and sea water by how much treatment is needed to make potable water.', [
    ['Groundwater', 'Already filtered by rocks.', ['least treatment']],
    ['Waste and sea water', 'Waste water needs organic matter and microbes removed; sea water needs salts removed (energy-intensive).', [`${res('Groundwater < waste water < sea water (in energy needed).')}`]]]);
  X('chem-ur2', Q('Sewage is treated before it is released into rivers.', [
    P('Describe what happens during sedimentation.', 2, ['sewage is left in a settlement tank', 'heavier solids sink to form sludge; liquid effluent is left above']),
    P('Explain why air is bubbled through the effluent.', 2, ['provides oxygen for (aerobic) bacteria', 'which break down the organic matter']),
    P('Give one useful product of the anaerobic digestion of sludge.', 1, ['biogas / methane (or fertiliser)']),
    P('Explain why industrial waste water may need extra treatment.', 1, ['may contain harmful / toxic chemicals'])
  ]));

  /* ---------- chem-ur3 Alternative extraction (HT) ---------- */
  L('chem-ur3', 'Going further: extracting copper from low-grade ores', `<p>The Earth’s resources of metal ores are limited. Copper ores are becoming scarce, and new ways of extracting copper from <b>low-grade ores</b> (containing small amounts of copper) are being researched to limit the environmental impact of traditional mining, which involves digging, moving and disposing of large amounts of rock.</p><p><b>Phytomining</b> uses plants to absorb metal compounds from the soil. The plants are harvested and burned to produce ash that contains metal compounds. <b>Bioleaching</b> uses bacteria to produce leachate solutions that contain metal compounds. The metal compounds can be processed to obtain the metal: copper can be obtained from solutions of copper compounds by displacement using scrap iron or by electrolysis. These methods avoid large-scale mining but are slow.</p>` + ul(['Displacement: Fe + CuSO₄ → FeSO₄ + Cu.', 'Advantages: use land with low-grade ore or waste tips; less energy; less waste rock.', 'Disadvantages: very slow; phytomining needs large areas of land.', 'Higher tier only.']), true);
  E('chem-ur3', 'Recovering copper from leachate', 'Explain how scrap iron can be used to obtain copper from a bioleaching solution.', [
    ['Reactivity', 'Iron is more reactive than copper.', ['iron displaces copper']],
    ['Reaction', 'Copper metal forms.', [`${res('Fe + CuSO₄ → FeSO₄ + Cu; scrap iron is cheap.')}`]]], { desc: true, higher: true });
  E('chem-ur3', 'Evaluating phytomining', 'Give one advantage and one disadvantage of phytomining.', [
    ['Advantage', 'Extracts metal from low-grade ores or contaminated land without digging.', ['less environmental damage']],
    ['Disadvantage', 'Plants grow slowly.', [`${res('Low impact, but slow and needs a lot of land.')}`]]], { desc: true, higher: true });
  X('chem-ur3', Q('Copper can be extracted from low-grade ores by phytomining and bioleaching.', [
    H(P('Describe how phytomining is used to obtain copper compounds.', 3, ['plants are grown on land containing low-grade ore', 'plants absorb copper compounds through their roots', 'plants are harvested and burned; the ash contains copper compounds'])),
    H(P('Explain why these methods are being developed.', 2, ['high-grade copper ores are running out', 'traditional mining causes environmental damage / waste rock'])),
    H(P('Describe one method of obtaining copper metal from a solution of copper compounds.', 1, ['add scrap iron (displacement) / electrolysis']))
  ]));

  /* ---------- chem-ur4 Life cycle assessment and recycling ---------- */
  L('chem-ur4', 'Going further: comparing products with LCAs', `<p>Life cycle assessments (LCAs) assess the environmental impact of a product at each stage: extracting and processing raw materials; manufacturing and packaging; use and operation during its lifetime; and disposal at the end of its useful life, including transport and distribution at each stage. Use of water, resources, energy sources and production of some wastes can be fairly easily quantified. Allocating numerical values to pollutant effects is less straightforward and requires value judgements, so LCA is not a purely objective process. Selective or abbreviated LCAs can be devised to support claims for advertising purposes.</p><p>The reduction in use, reuse and recycling of materials reduces the use of limited resources, energy consumption, waste and environmental impacts. Metals, glass, building materials, clay ceramics and most plastics are produced from limited raw materials, and much of the energy used comes from limited resources. Some products, such as glass bottles, can be reused; glass and metals can be crushed or melted and recycled.</p>` + ul(['Compare like with like: e.g. per 1000 uses.', 'Paper bags: renewable, biodegradable, but more energy and water to make than plastic.', 'Plastic bags: from crude oil, can be reused, slow to decompose.']));
  E('chem-ur4', 'Interpreting LCA data', 'Bag A uses 1.2 MJ and bag B 0.4 MJ to make. Bag A can be reused 5 times; bag B once. Which uses less energy per use?', [
    ['Per use', 'Divide energy by uses.', ['A: 1.2 ÷ 5 = 0.24 MJ', 'B: 0.4 ÷ 1 = 0.4 MJ']],
    ['Conclusion', 'Compare.', [`${res('Bag A uses less energy per use.')}`]]], { chk: [['1.2/5', 0.24]] });
  E('chem-ur4', 'Why LCAs can mislead', 'Explain why two companies can produce LCAs that reach different conclusions about the same product.', [
    ['Values', 'Pollutant effects need value judgements.', ['subjective numbers']],
    ['Selection', 'Stages can be left out.', [`${res('Different judgements and selective stages give different results.')}`]]]);
  X('chem-ur4', Q('A supermarket compares plastic and paper carrier bags using a life cycle assessment.', [
    P('Name the four stages of a life cycle assessment.', 2, ['extracting raw materials and manufacturing', 'use and disposal (all four for 2 marks; two or three for 1)']),
    P('Explain why some parts of an LCA are not objective.', 2, ['values must be given to the effects of pollutants', 'this requires value judgements / can be biased']),
    P('Explain why recycling metals is more sustainable than extracting new metal.', 2, ['saves limited ores / resources', 'uses less energy / less waste'])
  ]));

  /* ---------- chem-ur5 Corrosion ---------- */
  L('chem-ur5', 'Going further: preventing corrosion', `<p>Corrosion is the destruction of materials by chemical reactions with substances in the environment. Rusting is the corrosion of iron and steel and needs <b>both air (oxygen) and water</b>. An investigation with three test tubes shows this: nails in boiled water under a layer of oil (no air), nails with anhydrous calcium chloride (no water), and nails in ordinary water (air and water) – only the last rusts.</p><p>Corrosion can be prevented by applying a coating that acts as a barrier, such as greasing, painting or electroplating. Some coatings are reactive and contain a more reactive metal to provide <b>sacrificial protection</b>, for example zinc is used to galvanise iron. The more reactive metal oxidises in preference to the iron, so the iron is protected even if the coating is scratched. Aluminium does not corrode significantly because it has a thin oxide layer that protects the metal underneath.</p>` + ul(['Iron + oxygen + water → hydrated iron(III) oxide (rust).', 'Magnesium blocks protect ships’ hulls and pipelines.', 'Tin plating protects only while it is unbroken (tin is less reactive than iron).']));
  E('chem-ur5', 'Interpreting a rusting experiment', 'Three nails: A in air and water (rusts), B in boiled water under oil (no rust), C in dry air with calcium chloride (no rust). What do these show?', [
    ['B', 'No air.', ['oxygen needed']],
    ['C', 'No water.', [`${res('Both oxygen and water are needed for rusting.')}`]]]);
  E('chem-ur5', 'Tin versus zinc', 'Explain why a scratched tin-plated can rusts but a scratched galvanised bucket does not.', [
    ['Tin', 'Less reactive than iron: once scratched, iron is exposed and rusts.', ['barrier only']],
    ['Zinc', 'More reactive than iron: corrodes first.', [`${res('Zinc gives sacrificial protection; tin gives only a barrier.')}`]]]);
  X('chem-ur5', Q('Steel ships are protected from rusting by attaching blocks of magnesium to the hull.', [
    P('Name the two substances needed for iron to rust.', 2, ['oxygen / air', 'water']),
    P('Explain how the magnesium blocks protect the hull.', 3, ['magnesium is more reactive than iron', 'magnesium corrodes / is oxidised instead of iron', 'sacrificial protection (blocks must be replaced)']),
    P('Explain why aluminium does not need to be painted to prevent corrosion.', 2, ['a thin layer of aluminium oxide forms on the surface', 'which protects the metal underneath from further corrosion'])
  ]));

  /* ---------- chem-ur6 Materials ---------- */
  L('chem-ur6', 'Going further: choosing materials', `<p>Most metals in everyday use are alloys. Bronze (copper and tin) is used for statues; brass (copper and zinc) for musical instruments and fittings; gold used as jewellery is usually an alloy with silver, copper and zinc, measured in carats (24 carat = 100% gold). Steels are alloys of iron: high carbon steel is strong but brittle; low carbon steel is softer and easily shaped; stainless steel contains chromium and nickel and is hard and resistant to corrosion. Aluminium alloys are low density.</p><p>Soda-lime glass is made by heating sand, sodium carbonate and limestone; borosilicate glass, made from sand and boron trioxide, melts at higher temperatures. Clay ceramics are made by shaping wet clay and heating in a furnace. Polymer properties depend on the monomers and conditions: low density and high density poly(ethene) differ; thermosoftening polymers melt when heated, while thermosetting polymers have cross-links and do not melt. Composites are made of reinforcement (fibres or fragments) bound in a matrix, such as concrete or carbon fibre.</p>` + ul(['Match property to use and explain why.', 'Thermosoftening: no cross-links, weak intermolecular forces between chains.', 'Thermosetting: covalent cross-links between chains.']));
  E('chem-ur6', 'Choosing a steel', 'Suggest which type of steel is best for (a) car bodies (b) cutlery (c) cutting tools.', [
    ['Properties', 'Low carbon: easily shaped. Stainless: corrosion resistant. High carbon: hard.', ['match each']],
    ['Answer', 'Apply.', [`${res('(a) low carbon (b) stainless (c) high carbon steel')}`]]]);
  E('chem-ur6', 'Thermosetting versus thermosoftening', 'Explain why a kettle handle is made of a thermosetting polymer.', [
    ['Structure', 'Cross-links between polymer chains.', ['strong covalent cross-links']],
    ['Property', 'Does not soften when hot.', [`${res('It keeps its shape near the hot kettle.')}`]]]);
  X('chem-ur6', Q('This question is about materials.', [
    P('Explain why stainless steel is used to make cutlery and sinks.', 2, ['it contains chromium and nickel', 'so it is hard and resistant to corrosion (does not rust)']),
    P('Explain the difference between thermosoftening and thermosetting polymers in terms of structure.', 2, ['thermosetting polymers have cross-links between chains', 'thermosoftening polymers have no cross-links (only intermolecular forces), so they melt']),
    P('Name the two components of a composite material and give one example.', 2, ['reinforcement and matrix / binder', 'e.g. concrete / fibreglass / carbon fibre / wood'])
  ]));

  /* ---------- chem-ur7 Haber process and fertilisers ---------- */
  L('chem-ur7', 'Going further: Haber process conditions', `<p>The Haber process is used to manufacture ammonia, which can be used to produce nitrogen-based fertilisers. The raw materials are nitrogen from the air and hydrogen, which may be obtained from natural gas. The purified gases are passed over an iron catalyst at a high temperature (about 450 °C) and a high pressure (about 200 atmospheres). Some of the hydrogen and nitrogen reacts to form ammonia. On cooling, the ammonia liquefies and is removed; the remaining hydrogen and nitrogen are recycled.</p><p>(HT) The conditions are a compromise. The forward reaction is exothermic, so a lower temperature gives a higher yield, but the rate would be too slow. A higher pressure gives both a higher yield (fewer gas molecules) and a faster rate, but very high pressures are expensive and dangerous. NPK fertilisers contain compounds of nitrogen, phosphorus and potassium to improve agricultural productivity; ammonia is used to make ammonium salts and nitric acid, and phosphate rock is treated with acids to make soluble salts.</p>` + ul(['N₂ + 3H₂ ⇌ 2NH₃.', 'Ammonium nitrate: from ammonia and nitric acid.', 'Potassium chloride and potassium sulfate are mined and used directly.']));
  E('chem-ur7', 'Making ammonium sulfate', 'Write a balanced equation for ammonia reacting with sulfuric acid to make ammonium sulfate.', [
    ['Formula', 'Ammonium NH₄⁺, sulfate SO₄²⁻.', ['(NH₄)₂SO₄']],
    ['Balance', 'Two NH₃ needed.', [`${res('2NH₃ + H₂SO₄ → (NH₄)₂SO₄')}`]]]);
  E('chem-ur7', 'Percentage of nitrogen in a fertiliser', 'Calculate the percentage by mass of nitrogen in ammonium sulfate, (NH₄)₂SO₄ (M<sub>r</sub> 132, A<sub>r</sub> N 14).', [
    ['Mass of N', 'Two N atoms.', ['2 × 14 = 28']],
    ['Percentage', 'Divide by M<sub>r</sub>.', [`28 ÷ 132 × 100 = ${res('21.2%')}`]]], { chk: [['28/132*100', 21.21]] });
  X('chem-ur7', Q('Ammonium nitrate, NH₄NO₃, is a fertiliser.', [
    P('Name the two substances that react to make ammonium nitrate.', 2, ['ammonia', 'nitric acid']),
    P('Calculate the percentage by mass of nitrogen in ammonium nitrate (M<sub>r</sub> 80).', 2, ['2 × 14 = 28', '28 ÷ 80 × 100 = 35%'], C(35, '%', '28/80*100'))
  ]));

  /* ---------- chem-ur8 Review ---------- */
  L('chem-ur8', 'Linking the ideas: using resources sustainably', `<p>Sustainable chemistry balances human needs against limited resources and environmental impact. Water treatment, metal extraction, materials and the Haber process all involve choices about energy use, raw materials and waste. Life cycle assessments help compare products; reuse and recycling reduce demand for raw materials; new extraction methods use low-grade ores; and corrosion prevention extends the life of products.</p>` + ul(['Potable water: filter, sterilise; desalinate where needed.', 'Waste water: screening, sedimentation, digestion, aerobic treatment.', 'Haber: 450 °C, 200 atm, iron catalyst, compromise.', 'LCA stages: raw materials, manufacture, use, disposal.']));
  E('chem-ur8', 'A sustainability judgement', 'Explain why recycling aluminium cans is more sustainable than making new cans.', [
    ['Energy', 'Recycling uses about 5% of the energy of extraction.', ['less fuel burned']],
    ['Resources and waste', 'Saves bauxite; less landfill.', [`${res('Saves energy and raw materials and reduces waste.')}`]]]);
  X('chem-ur8', Q('This question is about sustainable use of resources.', [
    P('Explain what is meant by sustainable development.', 2, ['meeting the needs of current generations', 'without compromising the ability of future generations to meet their needs']),
    P('Describe how fresh water is treated to make it potable.', 2, ['filtered (through filter beds) to remove solids', 'sterilised (chlorine / ozone / UV) to kill microbes']),
    P('Give two reasons why an iron catalyst is used in the Haber process.', 2, ['increases the rate', 'allows a lower temperature / saves energy and cost']),
    P('Explain why the unreacted nitrogen and hydrogen are recycled.', 1, ['saves raw materials / increases overall yield / reduces waste']),
    P('Give one way of preventing iron from rusting and explain how it works.', 2, ['painting / oiling / galvanising', 'barrier keeps out oxygen and water (or zinc corrodes instead)'])
  ]));
})();
