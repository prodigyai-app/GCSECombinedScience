/* Opus depth pass for stem cells, culturing microorganisms, Infection and response (4.3) and Bioenergetics (4.4). */
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

  /* ---------- b-stem ---------- */
  L('b-stem', 'Going further: sources of stem cells and the issues', `<p>A stem cell is an undifferentiated cell that can give rise to many more cells of the same type and to other cells by differentiation. <b>Embryonic stem cells</b> can differentiate into most types of human cell. <b>Adult stem cells</b>, for example in bone marrow, can form only some types of cell, such as blood cells. <b>Meristems</b> in plants, found at root and shoot tips, can differentiate into any type of plant cell throughout the life of the plant.</p><p>In <b>therapeutic cloning</b> an embryo is produced with the same genes as the patient, so stem cells from it are not rejected. Stem cell treatments may help conditions such as diabetes and paralysis. Issues include the risk of transferring viral infection, the possibility that cells divide uncontrollably and form tumours, ethical and religious objections to using embryos, and the cost.</p>` + ul(['Meristem cloning produces large numbers of identical plants quickly and economically.', 'Clones of crop plants with special features (e.g. disease resistance) can be grown.', 'Rare species can be cloned to protect them from extinction.']));
  E('b-stem', 'Choosing a stem cell source', 'Explain why stem cells from therapeutic cloning are less likely to be rejected than embryonic stem cells from a donor embryo.', [
    ['Genes', 'The cloned embryo is made from the patient’s own body cell nucleus.', ['same genes as the patient']],
    ['Immune response', 'The cells have the same antigens.', [`${res('The immune system does not recognise them as foreign.')}`]]]);
  E('b-stem', 'Meristem cloning', 'A grower takes 20 meristem samples from a rare orchid, and each produces 15 plants. How many identical plants are produced?', [
    ['Multiply', '20 × 15.', ['300']],
    ['Comment', 'All are genetically identical.', [`${res('300 clones')}`]]], { chk: [['20*15', 300]] });

  /* ---------- b-culture ---------- */
  L('b-culture', 'Going further: bacterial growth and inhibition zones', `<p>Bacteria multiply by simple cell division (binary fission) as often as once every 20 minutes if they have enough nutrients and a suitable temperature. They can be grown in a nutrient broth solution or as colonies on an agar gel plate. Uncontaminated cultures are needed to investigate the effect of disinfectants and antibiotics: Petri dishes and culture media are sterilised before use; inoculating loops are sterilised by passing them through a flame; the lid is secured with tape (not sealed all round, so oxygen can enter and harmful anaerobic bacteria do not grow); cultures are incubated at 25 °C in school.</p><p>Number of bacteria after n generations = initial number × 2ⁿ. The effectiveness of an antiseptic or antibiotic is compared by measuring the diameter of the clear zone of inhibition around a disc and calculating its area: <b>πr²</b>.</p>` + ul(['Number of divisions = time ÷ mean division time.', 'Give large numbers in standard form.', 'A control disc soaked in sterile water shows any effect of the disc itself.']));
  E('b-culture', 'Number of bacteria', 'One bacterium divides every 20 minutes. How many bacteria are there after 4 hours?', [
    ['Divisions', '240 ÷ 20 = 12.', ['12 generations']],
    ['Number', '2¹².', [`${res('4096 bacteria (4.1 × 10³)')}`]]], { chk: [['2**(240/20)', 4096]] });
  E('b-culture', 'Area of a clear zone', 'An inhibition zone has a diameter of 18 mm. Calculate its area.', [
    ['Radius', '18 ÷ 2 = 9 mm.', ['r = 9 mm']],
    ['Area', 'πr².', [`π × 9² = ${res('254 mm²')}`]]], { chk: [['pi*9**2', 254.5]] });

  /* ---------- b-pathogens ---------- */
  L('b-pathogens', 'Going further: named diseases', `<p>Pathogens are microorganisms that cause infectious disease. <b>Viruses</b> live and reproduce inside cells, causing cell damage: measles (fever, red skin rash; spread by droplets; prevented by vaccination), HIV (initially flu-like; attacks the immune cells; spread by sexual contact or exchange of body fluids; controlled by antiretroviral drugs) and tobacco mosaic virus (mosaic pattern on leaves, so less photosynthesis). <b>Bacteria</b> may produce toxins that damage tissues: salmonella food poisoning (fever, cramps, vomiting, diarrhoea; poultry are vaccinated) and gonorrhoea (thick yellow or green discharge, pain on urinating; treated with antibiotics, though resistant strains exist; condoms prevent spread).</p><p><b>Fungi</b>: rose black spot (purple or black spots on leaves, which then yellow and drop; spread by water or wind; treated with fungicides). <b>Protists</b>: malaria (recurrent fever; spread by mosquito vectors; controlled by preventing mosquitoes breeding and using nets).</p>` + ul(['Spread: direct contact, water, air, vectors.', 'Bacteria cause damage with toxins; viruses by bursting cells.', 'Reduce spread: hygiene, isolation, destroying vectors, vaccination.']));
  E('b-pathogens', 'Spread of an epidemic', 'In an outbreak, the number of cases doubles every 3 days. Starting with 50 cases, how many are there after 15 days?', [
    ['Doublings', '15 ÷ 3 = 5.', ['5 doublings']],
    ['Cases', '50 × 2⁵.', [`${res('1600 cases')}`]]], { chk: [['50*2**5', 1600]] });
  E('b-pathogens', 'Matching disease to control', 'Suggest one control method for each of malaria, salmonella and rose black spot.', [
    ['Malaria', 'Stop the vector.', ['nets; remove standing water']],
    ['Others', 'Vaccinate poultry; remove infected leaves.', [`${res('Nets/insecticide; poultry vaccination and cooking food; fungicide or removing leaves.')}`]]]);

  /* ---------- b-defence ---------- */
  L('b-defence', 'Going further: the immune response and vaccination', `<p>The body’s first line of defence is non-specific: skin is a barrier and produces antimicrobial secretions; the nose has hairs and mucus; the trachea and bronchi have cilia and mucus that trap and remove particles; the stomach produces acid that kills pathogens. If pathogens enter the body, white blood cells respond by <b>phagocytosis</b> (engulfing pathogens), producing <b>antibodies</b> specific to the antigens on the pathogen, and producing <b>antitoxins</b> that neutralise toxins.</p><p>Vaccination introduces small quantities of dead or inactive pathogens. White blood cells produce antibodies and memory cells. If the same live pathogen later enters the body, the secondary response is faster and larger, so the pathogen is destroyed before it causes symptoms. If a large proportion of the population is immune, the spread of the pathogen is very much reduced (herd immunity).</p>` + ul(['Antibodies are specific to one antigen.', 'Secondary response: faster, more antibodies, longer lasting.', 'Vaccines do not cure diseases.']));
  E('b-defence', 'Comparing responses', 'After vaccination, antibody levels peak at 20 units after 14 days. After infection later, they peak at 300 units after 4 days. Compare.', [
    ['Size', '300 ÷ 20 = 15 times higher.', ['larger response']],
    ['Speed', '4 days vs 14 days.', [`${res('The secondary response is 15 times larger and much faster, due to memory cells.')}`]]], { chk: [['300/20', 15]] });
  E('b-defence', 'Herd immunity', 'Explain why vaccinating 95% of children protects a baby too young to be vaccinated.', [
    ['Spread', 'Most people are immune, so few can pass the pathogen on.', ['chains of infection broken']],
    ['Result', 'The baby is unlikely to meet an infected person.', [`${res('Herd immunity protects the unvaccinated.')}`]]]);
  X('b-defence', Q('A child is given a measles vaccine.', [
    P('Describe what the vaccine contains.', 1, ['dead / inactive / weakened measles virus (or its antigens)']),
    P('Explain why the child does not become ill if later exposed to measles.', 2, ['memory cells produce antibodies quickly', 'virus destroyed before it causes symptoms'])
  ]));

  /* ---------- b-drugs ---------- */
  L('b-drugs', 'Going further: discovering and testing drugs', `<p><b>Antibiotics</b>, such as penicillin, kill infective bacteria inside the body. Specific bacteria should be treated with specific antibiotics. The use of antibiotics has greatly reduced deaths from infectious bacterial diseases, but the emergence of strains resistant to antibiotics is of great concern. Antibiotics cannot kill viral pathogens. <b>Painkillers</b> and other medicines treat symptoms but do not kill pathogens.</p><p>Traditionally drugs were extracted from plants and microorganisms: digitalis from foxgloves, aspirin from willow, and penicillin, discovered by Alexander Fleming from <i>Penicillium</i> mould. New drugs are tested for <b>toxicity, efficacy and dose</b>. Preclinical testing is done in the laboratory using cells, tissues and live animals. Clinical trials use healthy volunteers and patients: very low doses are given at the start, and if the drug is safe further trials find the optimum dose. In double-blind trials, some patients are given a placebo and neither doctors nor patients know who has received it.</p>` + ul(['Placebo: looks like the drug but has no active ingredient.', 'Results are peer reviewed before publication.', 'Antibiotic resistance develops by natural selection.']));
  E('b-drugs', 'Interpreting a trial', 'In a trial, 68 of 200 patients on a drug improved, compared with 24 of 200 on a placebo. Calculate both percentages and comment.', [
    ['Percentages', '68 ÷ 200 = 34%; 24 ÷ 200 = 12%.', ['drug 34%, placebo 12%']],
    ['Comment', 'Placebo effect accounts for some improvement.', [`${res('The drug added about 22 percentage points over the placebo.')}`]]], { chk: [['68/200*100', 34], ['24/200*100', 12]] });
  E('b-drugs', 'Why start with low doses', 'Explain why the first clinical trials use small doses on healthy volunteers.', [
    ['Safety', 'To check for side effects (toxicity).', ['risk minimised']],
    ['Healthy', 'Illness does not affect the results.', [`${res('Low doses test safety before the drug is given to patients.')}`]]]);
  X('b-drugs', Q('A new painkiller is being developed.', [
    P('Name the three things a new drug is tested for.', 2, ['toxicity / safety and efficacy (works)', 'dose']),
    P('Explain why painkillers do not cure a bacterial infection.', 1, ['they treat symptoms only / do not kill bacteria'])
  ]));

  /* ---------- b-monoclonal ---------- */
  L('b-monoclonal', 'Going further: uses of monoclonal antibodies', `<p>Monoclonal antibodies are produced from a single clone of cells. They are specific to one binding site on one protein antigen, so they can target a specific chemical or specific cells in the body. A mouse is stimulated to produce lymphocytes that make a particular antibody. These lymphocytes are combined with a tumour cell to make a <b>hybridoma</b> cell, which can both divide and make the antibody. A single hybridoma is cloned to produce many identical cells, and the antibody is collected and purified.</p><p>Uses: <b>pregnancy tests</b> (antibodies bind to the hormone HCG in urine); <b>laboratory</b> measurement of hormone or chemical levels and detection of pathogens; <b>research</b> to locate or identify specific molecules by binding to them with a fluorescent dye; and <b>treating diseases</b> such as cancer, where the antibody is bound to a radioactive substance, a toxic drug or a chemical that stops cells growing. Monoclonal antibodies create more side effects than expected, so they are not yet as widely used as hoped.</p>` + ul(['Hybridoma = lymphocyte (makes antibody) + tumour cell (divides rapidly).', 'Targeted treatment harms fewer normal cells than chemotherapy.']));
  E('b-monoclonal', 'How a pregnancy test works', 'Explain how a pregnancy test stick shows a positive result.', [
    ['Binding', 'HCG in urine binds to mobile antibodies attached to a coloured bead.', ['HCG–antibody complex']],
    ['Result', 'The complex is trapped by fixed antibodies on the test strip.', [`${res('A coloured line appears in the test window.')}`]]]);
  E('b-monoclonal', 'Targeting cancer', 'Explain why a toxic drug attached to a monoclonal antibody harms fewer healthy cells than chemotherapy.', [
    ['Specificity', 'The antibody binds only to antigens on cancer cells.', ['delivers drug to target']],
    ['Effect', 'Healthy cells lack the antigen.', [`${res('Fewer healthy cells are exposed to the drug.')}`]]]);
  X('b-monoclonal', Q('Monoclonal antibodies can be used to detect pathogens.', [
    P('Explain why monoclonal antibodies can identify one specific pathogen.', 1, ['each binds only to one specific antigen'])
  ]));

  /* ---------- b-plantdefence ---------- */
  L('b-plantdefence', 'Going further: detecting and identifying plant disease', `<p>Plant diseases can be detected by: stunted growth; spots on leaves; areas of decay (rot); growths; malformed stems or leaves; discolouration; and the presence of pests. Identification can be made by reference to a gardening manual or website, by taking infected plants to a laboratory, or by using testing kits that contain monoclonal antibodies. Plants can also be damaged by insect pests such as aphids, which feed on sap, and by ion deficiencies: nitrate deficiency causes stunted growth because nitrates are needed for protein synthesis; magnesium deficiency causes chlorosis because magnesium is needed to make chlorophyll.</p><p>Plants have physical defences (cellulose cell walls, tough waxy cuticles, layers of dead cells on stems such as bark), chemical defences (antibacterial chemicals and poisons to deter herbivores) and mechanical adaptations (thorns and hairs, leaves that droop or curl when touched, mimicry to trick animals).</p>` + ul(['Name the type of defence, then explain how it works.', 'Deficiency symptoms are not caused by pathogens.']));
  E('b-plantdefence', 'Diagnosing a problem', 'A plant has yellow leaves but no spots or pests, and the soil is low in magnesium. Explain the cause.', [
    ['Symptom', 'Yellow leaves = chlorosis.', ['less chlorophyll']],
    ['Cause', 'Magnesium is needed for chlorophyll.', [`${res('Magnesium deficiency; add a fertiliser containing magnesium.')}`]]]);
  E('b-plantdefence', 'Classifying defences', 'Classify: (a) thorns on a rose (b) bark (c) mint producing antibacterial oils.', [
    ['Types', 'Mechanical, physical, chemical.', ['match each']],
    ['Answer', 'Apply.', [`${res('(a) mechanical (b) physical (c) chemical')}`]]]);
  X('b-plantdefence', Q('A gardener notices that a tomato plant is small with yellowing lower leaves.', [
    P('Suggest which mineral ion the plant lacks and explain your answer.', 1, ['nitrate, because it is needed to make proteins for growth (or magnesium for chlorophyll)'])
  ]));

  /* ---------- b-photo ---------- */
  L('b-photo', 'Going further: photosynthesis and its products', `<p>Photosynthesis is an <b>endothermic</b> reaction in which energy is transferred from the environment to the chloroplasts by light. Carbon dioxide + water → glucose + oxygen (6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂). Carbon dioxide diffuses into the leaf through stomata; water is absorbed by roots and travels in the xylem.</p><p>The glucose produced is used for respiration; converted into insoluble starch for storage; used to produce fat or oil for storage (especially in seeds); used to produce cellulose, which strengthens the cell wall; and used with nitrate ions absorbed from the soil to produce amino acids for protein synthesis. Starch is used for storage because it is insoluble, so it does not affect osmosis in the cells.</p>` + ul(['Test a leaf for starch: boil in water, then hot ethanol, rinse, add iodine.', 'Variegated leaves: only green parts make starch.', 'Oxygen is a waste product, released through stomata.']));
  E('b-photo', 'Testing a leaf for starch', 'Describe how to test a leaf for starch and explain each step.', [
    ['Kill and decolourise', 'Boil in water to kill cells; warm in ethanol to remove chlorophyll.', ['makes the colour change visible']],
    ['Test', 'Rinse and add iodine.', [`${res('Blue-black where starch is present.')}`]]]);
  E('b-photo', 'Interpreting a variegated leaf', 'A variegated leaf has green and white areas. After iodine, only the green areas turn blue-black. Explain.', [
    ['Chlorophyll', 'Only green areas contain chloroplasts.', ['only they photosynthesise']],
    ['Conclusion', 'Starch is made from glucose.', [`${res('Chlorophyll is needed for photosynthesis.')}`]]]);
  X('b-photo', Q('Photosynthesis takes place in the leaves of plants.', [
    P('Explain why photosynthesis is described as an endothermic reaction.', 1, ['energy is transferred from the environment (by light) into the products']),
    P('Explain why plants store glucose as starch.', 2, ['starch is insoluble', 'so it does not affect osmosis / water balance of cells'])
  ]));

  /* ---------- b-photo-rate ---------- */
  L('b-photo-rate', 'Going further: the light intensity practical', `<p>Factors that affect the rate of photosynthesis are temperature, light intensity, carbon dioxide concentration and the amount of chlorophyll. In the required practical, pondweed is placed in water at a range of distances from a lamp, and the rate is measured by counting oxygen bubbles or by collecting gas in a measuring cylinder or gas syringe over a fixed time. A beaker of water between the lamp and the plant (or an LED lamp) prevents the temperature changing.</p><p>Light intensity is inversely proportional to the square of the distance from the lamp (HT): <b>light intensity ∝ 1 ÷ d²</b>. Halving the distance increases intensity by a factor of 4. Rates increase with light intensity until another factor becomes limiting; the graph then levels off.</p>` + ul(['Leave the plant to adjust for a few minutes at each distance.', 'Add sodium hydrogencarbonate so that carbon dioxide is not limiting.', 'Repeat and calculate means.']));
  E('b-photo-rate', 'Inverse square law', 'A lamp is moved from 40 cm to 10 cm. By what factor does the light intensity change?', [
    ['Distance ratio', '40 ÷ 10 = 4.', ['distance quartered']],
    ['Intensity', '4² = 16.', [`${res('16 times greater')}`]]], { chk: [['(40/10)**2', 16]], higher: true });
  E('b-photo-rate', 'Rate from gas volume', 'Pondweed produces 3.6 cm³ of oxygen in 12 minutes. Calculate the rate in cm³/hour.', [
    ['Per minute', '3.6 ÷ 12 = 0.3 cm³/min.', ['0.3']],
    ['Per hour', '× 60.', [`${res('18 cm³/hour')}`]]], { chk: [['3.6/12*60', 18]] });
  X('b-photo-rate', Q('A student counts the bubbles produced by pondweed at different distances from a lamp: 10 cm 42, 20 cm 22, 30 cm 11, 40 cm 6 bubbles per minute.', [
    P('Describe the relationship shown by the results.', 1, ['as the distance increases the rate decreases']),
    H(P('Calculate the relative light intensity at 30 cm compared with 10 cm, using intensity ∝ 1/d².', 1, ['1/9 (0.11)'], C(0.111, '', '(10/30)**2', 0.01))),
    P('Give one reason why counting bubbles may not be accurate.', 1, ['bubbles are different sizes / hard to count quickly / some oxygen dissolves'])
  ]));

  /* ---------- b-photo-higher ---------- */
  L('b-photo-higher', 'Going further: limiting factors and greenhouses', `<p>A limiting factor is the factor in shortest supply, which stops the rate increasing. On a graph of rate against light intensity, the rising part is limited by light; where the line levels off, another factor such as carbon dioxide concentration or temperature is limiting. Raising that factor gives a higher plateau. Interactions between factors explain why more than one curve appears on such graphs.</p><p>Greenhouse growers use limiting factors to maximise profit: paraffin heaters raise the temperature and release carbon dioxide; artificial lights increase light intensity, including at night. Each change costs money, so growers raise only the factor that is limiting, and only while the value of the extra crop is greater than the cost.</p>` + ul(['Identify the limiting factor at a point by asking what would raise the line there.', 'Temperature above about 45 °C denatures enzymes.', 'Profit = value of extra yield − cost of the change.']));
  E('b-photo-higher', 'Identifying a limiting factor', 'At low light the rate is the same at 0.04% and 0.1% CO₂; at high light the 0.1% curve is higher. Explain.', [
    ['Low light', 'Light limits; extra CO₂ has no effect.', ['light limiting']],
    ['High light', 'CO₂ becomes limiting at 0.04%.', [`${res('Light limits at low intensity; CO₂ limits at high intensity.')}`]]]);
  E('b-photo-higher', 'Is heating worthwhile?', 'Heating costs £1200 per month and increases yield by 400 kg of tomatoes worth £2.50/kg. Is it worthwhile?', [
    ['Value', '400 × 2.50 = £1000.', ['extra income']],
    ['Compare', '£1000 < £1200.', [`${res('No: it loses £200 per month.')}`]]], { chk: [['400*2.5', 1000], ['1200-1000', 200]] });
  X('b-photo-higher', Q('A grower adds carbon dioxide to a greenhouse, raising the rate of photosynthesis by 30%. The extra crop is worth £900 per month and the carbon dioxide costs £650.', [
    P('Calculate the extra profit per month.', 1, ['£250'], C(250, '£', '900-650', 0))
  ]));

  /* ---------- b-respiration ---------- */
  L('b-respiration', 'Going further: comparing types of respiration', `<p>Cellular respiration is an <b>exothermic</b> reaction that is continuously occurring in living cells. The energy transferred supplies all the energy needed for living processes: chemical reactions to build larger molecules, movement, and keeping warm. <b>Aerobic</b> respiration uses oxygen and takes place mainly in mitochondria: glucose + oxygen → carbon dioxide + water (C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O). <b>Anaerobic</b> respiration happens when oxygen is in short supply. In muscles: glucose → lactic acid. In plant and yeast cells: glucose → ethanol + carbon dioxide (fermentation), used to make bread and alcoholic drinks.</p><p>Aerobic respiration transfers much more energy per glucose molecule because the oxidation of glucose is complete; in anaerobic respiration it is incomplete. A respirometer can measure the rate of respiration in small organisms by the uptake of oxygen.</p>` + ul(['Both aerobic and anaerobic respiration release energy from glucose.', 'Only aerobic produces water; only yeast/plant anaerobic produces CO₂.', 'Limewater shows CO₂ is produced.']));
  E('b-respiration', 'Rate of respiration in germinating seeds', 'In a respirometer, a drop moves 24 mm in 8 minutes. Calculate the rate in mm/min.', [
    ['Divide', 'distance ÷ time.', ['24 ÷ 8']],
    ['Answer', 'Calculate.', [`${res('3 mm/min')}`]]], { chk: [['24/8', 3]] });
  E('b-respiration', 'Bread making', 'Explain why bread dough rises when left in a warm place.', [
    ['Yeast', 'Yeast respires anaerobically.', ['glucose → ethanol + carbon dioxide']],
    ['Rising', 'Carbon dioxide bubbles make the dough expand.', [`${res('Warmth gives a faster rate of yeast respiration and more CO₂.')}`]]]);
  X('b-respiration', Q('Yeast is used to make bread.', [
    P('Write the word equation for anaerobic respiration in yeast.', 1, ['glucose → ethanol + carbon dioxide']),
    P('Explain why aerobic respiration releases more energy per glucose molecule than anaerobic respiration.', 2, ['glucose is completely broken down / oxidised in aerobic respiration', 'in anaerobic respiration it is incompletely broken down (products still contain energy)'])
  ]));

  /* ---------- b-exercise ---------- */
  L('b-exercise', 'Going further: metabolism', `<p>During exercise the human body reacts to the increased demand for energy. Heart rate, breathing rate and breath volume increase to supply the muscles with more oxygenated blood and remove carbon dioxide. If insufficient oxygen is supplied, anaerobic respiration takes place in muscles; the incomplete oxidation of glucose causes a build-up of lactic acid and creates an oxygen debt. During long periods of vigorous activity muscles become fatigued and stop contracting efficiently.</p><p><b>Metabolism</b> is the sum of all the reactions in a cell or the body. The energy transferred by respiration is used for metabolic reactions: conversion of glucose to starch, glycogen and cellulose; formation of lipid molecules from fatty acids and glycerol; use of glucose and nitrate ions to form amino acids, which form proteins; respiration; and breakdown of excess proteins to form urea for excretion.</p>` + ul(['Recovery time: time for heart rate to return to resting rate.', 'Fitter people have lower resting heart rates and shorter recovery times.', 'Mean values reduce the effect of random error.']));
  E('b-exercise', 'Recovery data', 'Student A’s heart rate returns from 160 to 70 bpm in 3 minutes; student B’s from 165 to 72 bpm in 7 minutes. Who is fitter?', [
    ['Recovery time', 'A: 3 min; B: 7 min.', ['A recovers faster']],
    ['Conclusion', 'Faster recovery shows a fitter heart.', [`${res('Student A is fitter.')}`]]]);
  E('b-exercise', 'Breathing volume', 'Breathing rate rises from 12 to 30 breaths/min and breath volume from 0.5 to 2.0 dm³. Calculate the volume of air breathed per minute at rest and during exercise.', [
    ['Rest', '12 × 0.5.', ['6 dm³/min']],
    ['Exercise', '30 × 2.0.', [`${res('60 dm³/min, 10 times more')}`]]], { chk: [['12*0.5', 6], ['30*2.0', 60]] });
  X('b-exercise', Q('An athlete runs a 400 m race.', [
    P('Give one reason why the athlete’s muscles become fatigued.', 1, ['lactic acid builds up / anaerobic respiration / glycogen stores used up'])
  ]));

  /* ---------- b-debt ---------- */
  L('b-debt', 'Going further: oxygen debt and the liver', `<p>After exercise, extra oxygen is needed to react with the accumulated lactic acid and remove it from the cells. This amount of extra oxygen is the <b>oxygen debt</b>. Breathing rate and heart rate stay high after exercise until the debt is repaid. (HT) Blood flowing through the muscles transports the lactic acid to the liver, where it is converted back into glucose. This conversion needs oxygen, which is part of the oxygen debt.</p><p>The liver also converts glucose to glycogen for storage and breaks down excess amino acids. Athletes who train regularly can delay the onset of anaerobic respiration because their hearts and lungs supply oxygen more efficiently, so they build up a smaller oxygen debt for the same exercise.</p>` + ul(['Oxygen debt = extra oxygen used after exercise compared with at rest.', 'A larger oxygen debt means more anaerobic respiration happened.', 'Lactic acid causes muscle fatigue and a burning feeling.']));
  E('b-debt', 'Calculating an oxygen debt', 'At rest a person uses 0.3 dm³ of oxygen per minute. In the 10 minutes after exercise they use 7.5 dm³. Calculate the oxygen debt.', [
    ['Resting use in 10 min', '0.3 × 10 = 3.0 dm³.', ['baseline']],
    ['Extra', '7.5 − 3.0.', [`${res('4.5 dm³')}`]]], { chk: [['7.5-0.3*10', 4.5]] });
  E('b-debt', 'Effect of training', 'Explain why a trained athlete has a smaller oxygen debt after the same race.', [
    ['Oxygen supply', 'Stronger heart and lungs deliver more oxygen to muscles.', ['more aerobic respiration']],
    ['Lactic acid', 'Less anaerobic respiration.', [`${res('Less lactic acid is made, so less oxygen is needed afterwards.')}`]]]);
  X('b-debt', Q('A student measures oxygen uptake before, during and after exercise.', [
    P('Define oxygen debt.', 1, ['the extra oxygen needed after exercise to remove / react with lactic acid']),
    H(P('Describe what happens to lactic acid after exercise.', 2, ['transported in the blood to the liver', 'converted back into glucose']))
  ]));
})();
