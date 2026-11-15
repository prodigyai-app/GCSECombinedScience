/* Opus depth pass for Cell biology (4.1) and Organisation (4.2): Learn cards, two more worked examples per lesson and exam parts taking each lesson to at least 12 marks. */
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

  /* ---------- b-cells ---------- */
  L('b-cells', 'Going further: eukaryotes, prokaryotes and scale', `<p>Plant and animal cells are <b>eukaryotic</b>: their genetic material is enclosed in a nucleus. Bacterial cells are <b>prokaryotic</b>: they are much smaller, with a single loop of DNA in the cytoplasm and often small rings of DNA called plasmids. Some bacteria also have a flagellum for movement and a slime capsule.</p><p>Cells span several orders of magnitude. A typical bacterium is about 1 µm long, an animal cell about 10–30 µm and a plant cell about 10–100 µm. One order of magnitude is a factor of 10, so a cell 100 times larger is two orders of magnitude larger. Use prefixes carefully: 1 mm = 1000 µm and 1 µm = 1000 nm.</p>` + ul(['Mitochondria: aerobic respiration. Ribosomes: protein synthesis.', 'Chloroplasts absorb light for photosynthesis; the cell wall (cellulose) strengthens the cell.', 'Bacterial cell walls are not made of cellulose.', 'Standard form: 0.000 002 m = 2 × 10⁻⁶ m.']));
  E('b-cells', 'Orders of magnitude', 'A plant cell is 80 µm long and a bacterium is 0.8 µm long. How many orders of magnitude larger is the plant cell?', [
    ['Ratio', 'Divide the sizes.', ['80 ÷ 0.8 = 100']],
    ['Orders of magnitude', '100 = 10².', [`${res('2 orders of magnitude')}`]]], { chk: [['80/0.8', 100]] });
  E('b-cells', 'Identifying a cell type', 'A cell has a cell wall, ribosomes and a plasmid but no nucleus. Identify the type of cell.', [
    ['No nucleus', 'Genetic material not enclosed.', ['prokaryotic']],
    ['Plasmid', 'Found in bacteria.', [`${res('A bacterial (prokaryotic) cell.')}`]]]);
  X('b-cells', Q('A bacterial cell is 2 µm long. A human cheek cell is 60 µm across.', [
    P('Give 2 µm in metres in standard form.', 1, ['2 × 10⁻⁶ m'], C(2e-6, 'm', '2e-6', 0.001)),
    P('Calculate how many times longer the cheek cell is than the bacterium.', 1, ['30'], C(30, '', '60/2', 0.001)),
    P('Name the structure in the cheek cell that controls the activities of the cell, and explain why bacteria do not have this structure.', 1, ['nucleus; bacteria are prokaryotes (DNA free in cytoplasm)'])
  ]));

  /* ---------- b-microscopy ---------- */
  L('b-microscopy', 'Going further: magnification and units', `<p><b>magnification = size of image ÷ size of real object</b>. The image and real sizes must be in the same units before dividing. Magnification has no units. Rearranging gives real size = image size ÷ magnification, which is the form most often needed. Light microscopes magnify up to about ×2000 and can resolve objects about 200 nm apart; electron microscopes magnify up to about ×2 000 000 and resolve down to about 0.2 nm.</p><p>Resolution is the ability to distinguish between two points that are close together. Higher resolution reveals more detail, such as ribosomes, the inner membranes of mitochondria and the structure of chloroplasts. In the required practical, a thin layer of tissue is placed on a slide with a stain (such as iodine for onion cells), covered with a coverslip, and viewed starting with the lowest-power objective.</p>` + ul(['Total magnification = eyepiece × objective (e.g. ×10 × ×40 = ×400).', 'Scale drawings: use a sharp pencil, no shading, label with ruled lines.', 'Convert mm to µm by multiplying by 1000.']));
  E('b-microscopy', 'Real size from an image', 'A mitochondrion appears 12 mm long in an electron micrograph at ×6000. Calculate its real length in µm.', [
    ['Real size in mm', 'image ÷ magnification.', ['12 ÷ 6000 = 0.002 mm']],
    ['Convert', '× 1000.', [`${res('2 µm')}`]]], { chk: [['12/6000*1000', 2]] });
  E('b-microscopy', 'Total magnification', 'A microscope has a ×10 eyepiece and a ×40 objective. A cell looks 20 mm wide. How wide is it really?', [
    ['Magnification', '10 × 40.', ['×400']],
    ['Real size', '20 ÷ 400 = 0.05 mm.', [`${res('0.05 mm = 50 µm')}`]]], { chk: [['20/(10*40)*1000', 50]] });
  X('b-microscopy', Q('A student views onion epidermis cells with a light microscope.', [
    P('Give the reason for adding iodine solution to the onion cells.', 1, ['to stain the cells / make the nucleus (structures) visible']),
    P('The eyepiece lens is ×10 and the objective lens is ×10. A cell measures 25 mm in the student’s drawing. Calculate the real length of the cell in µm.', 3, ['magnification = 100', '25 ÷ 100 = 0.25 mm', '= 250 µm'], C(250, 'µm', '25/(10*10)*1000'))
  ]));

  /* ---------- b-specialisation ---------- */
  L('b-specialisation', 'Going further: specialised plant and animal cells', `<p>Cells specialise by differentiating: they gain sub-cellular structures that suit a particular function. Animal examples: sperm cells (tail, many mitochondria, acrosome with enzymes, haploid nucleus); nerve cells (long axon, branched dendrites to connect with other cells); muscle cells (contain protein fibres that contract, many mitochondria). Plant examples: root hair cells (long projection increasing surface area for water and mineral uptake); xylem cells (hollow tubes, lignin-strengthened walls, no end walls); phloem cells (sieve plates between cells, companion cells with many mitochondria to provide energy).</p><p>In mature animals cell differentiation is mostly used for repair and replacement. Many plant cells keep the ability to differentiate throughout life, which is why plants can regrow and be cloned from cuttings.</p>` + ul(['Link each feature to its function with "so that" or "to".', 'Specialised cells form tissues, which form organs.', 'Ciliated cells in the airways sweep mucus away.']));
  E('b-specialisation', 'Explaining a muscle cell', 'Explain why muscle cells contain many mitochondria.', [
    ['Function', 'Muscle cells contract.', ['contraction needs energy']],
    ['Mitochondria', 'Site of aerobic respiration.', [`${res('Many mitochondria release the energy needed for contraction.')}`]]]);
  E('b-specialisation', 'Comparing xylem and phloem cells', 'Give two differences between xylem and phloem cells.', [
    ['Xylem', 'Dead, hollow tubes with lignin; carry water up.', ['one direction']],
    ['Phloem', 'Living cells with sieve plates; carry sugars both ways.', [`${res('Xylem dead/lignified, carries water; phloem living with sieve plates, carries sugars.')}`]]]);
  X('b-specialisation', Q('Root hair cells absorb water and mineral ions from the soil.', [
    P('Explain how the shape of a root hair cell is adapted for absorption.', 2, ['long thin projection / large surface area', 'so more water and ions can be absorbed']),
    P('Suggest why a plant may wilt if many of its root hairs are damaged when it is moved.', 1, ['smaller surface area for absorbing water, so less water is taken up than is lost'])
  ]));

  /* ---------- b-mitosis ---------- */
  L('b-mitosis', 'Going further: the cell cycle', `<p>The cell cycle has three stages. First, the cell grows, increases the number of sub-cellular structures such as ribosomes and mitochondria, and replicates its DNA to form two copies of each chromosome. Second, in <b>mitosis</b>, one set of chromosomes is pulled to each end of the cell and the nucleus divides. Third, the cytoplasm and cell membranes divide to form two identical daughter cells.</p><p>Body cells in humans have 23 pairs of chromosomes (46 in total). Mitosis keeps the chromosome number the same, so both daughter cells are genetically identical to each other and to the parent. Cell division by mitosis is important in growth, repair of tissues and asexual reproduction. In a root tip squash, the percentage of cells in mitosis can be used to estimate how long mitosis lasts as a fraction of the cell cycle.</p>` + ul(['Time in mitosis ≈ (cells in mitosis ÷ total cells) × length of cycle.', 'Mitosis does not produce variation.', 'Uncontrolled cell division can cause cancer.']));
  E('b-mitosis', 'Estimating time in mitosis', 'In a root tip, 15 of 200 cells are in mitosis. The cell cycle lasts 16 hours. Estimate the time spent in mitosis in minutes.', [
    ['Fraction', '15 ÷ 200 = 0.075.', ['7.5% of cells']],
    ['Time', '0.075 × 16 h × 60.', [`${res('72 minutes')}`]]], { chk: [['15/200*16*60', 72]] });
  E('b-mitosis', 'Number of cells after divisions', 'A cell divides by mitosis every 30 minutes. How many cells are produced from one cell after 3 hours?', [
    ['Divisions', '180 ÷ 30 = 6.', ['6 divisions']],
    ['Cells', '2⁶.', [`${res('64 cells')}`]]], { chk: [['2**(180/30)', 64]] });
  X('b-mitosis', Q('Bacteria and body cells both divide, but in different ways.', [
    P('A cell has 46 chromosomes. Give the number of chromosomes in each daughter cell after mitosis.', 1, ['46'], C(46, '', '46', 0)),
    P('A cell divides every 20 minutes. Calculate how many cells there are after 2 hours, starting from one cell.', 2, ['6 divisions', '2⁶ = 64 cells'], C(64, '', '2**6', 0)),
  ]));

  /* ---------- b-diffusion ---------- */
  L('b-diffusion', 'Going further: exchange surfaces', `<p>Single-celled organisms have a relatively large surface area to volume ratio, so diffusion across the cell membrane is enough to meet their needs. Larger multicellular organisms have a small SA:V ratio, so they need specialised <b>exchange surfaces</b> and transport systems. Effective exchange surfaces have a large surface area, a thin membrane or short diffusion path, and (in animals) an efficient blood supply and ventilation to maintain a steep concentration gradient.</p><p>Examples: alveoli in the lungs (oxygen and carbon dioxide), villi in the small intestine (digested food), gills in fish (lamellae and countercurrent flow), and roots and leaves in plants. Fick’s law summarises the idea: rate of diffusion ∝ surface area × concentration difference ÷ thickness of membrane.</p>` + ul(['Oxygen diffuses into blood; carbon dioxide diffuses out; urea diffuses from cells into the blood plasma.', 'SA:V of a cube = 6 ÷ side length.', 'Temperature increases the kinetic energy of particles and so the rate of diffusion.']));
  E('b-diffusion', 'Comparing SA:V', 'Compare the SA:V ratio of a 1 cm cube and a 4 cm cube.', [
    ['1 cm cube', 'SA 6, V 1.', ['6 : 1']],
    ['4 cm cube', 'SA 96, V 64.', [`${res('1.5 : 1, so the larger cube has a much smaller ratio')}`]]], { chk: [['6*4**2/4**3', 1.5]] });
  E('b-diffusion', 'Applying Fick’s law', 'If the surface area doubles and the membrane thickness halves, by what factor does the rate of diffusion change?', [
    ['Surface area', '× 2.', ['rate ∝ area']],
    ['Thickness', '÷ 0.5 = × 2.', [`${res('Rate increases by a factor of 4.')}`]]], { chk: [['2/0.5', 4]] });
  X('b-diffusion', Q('Fish gills are an exchange surface.', [
    P('Give two features of gills that make gas exchange efficient.', 2, ['large surface area (many filaments / lamellae)', 'thin / short diffusion distance / good blood supply / water flow maintains gradient'])
  ]));

  /* ---------- b-osmosis ---------- */
  L('b-osmosis', 'Going further: analysing the osmosis practical', `<p>In the osmosis required practical, cylinders of potato are blotted, weighed and placed in sugar or salt solutions of different concentrations. After a set time they are blotted and reweighed. The <b>percentage change in mass</b> is calculated so that cylinders with different starting masses can be compared: (final − initial) ÷ initial × 100.</p><p>Plotting percentage change in mass against concentration gives a line that crosses the x-axis where there is no net movement of water. This concentration is equal to the concentration of solutes inside the potato cells. Above it, the cells lose water by osmosis (negative change); below it, they gain water. In animal cells placed in pure water, water enters and the cells may burst; plant cells become turgid because the cell wall resists bursting, and in concentrated solutions they become flaccid and plasmolysed.</p>` + ul(['Control variables: size of cylinder, volume of solution, time, temperature.', 'Repeat and calculate a mean for each concentration.', 'Read the crossing point by interpolation.']));
  E('b-osmosis', 'Percentage change in mass', 'A cylinder changes from 2.40 g to 2.13 g. Calculate the percentage change in mass.', [
    ['Change', '2.13 − 2.40 = −0.27 g.', ['loss of mass']],
    ['Percentage', '÷ initial × 100.', [`${res('−11.25% (−11.3%)')}`]]], { chk: [['(2.13-2.40)/2.40*100', -11.25]] });
  E('b-osmosis', 'Finding the crossing point', 'At 0.2 mol/dm³ the change is +4%; at 0.4 mol/dm³ it is −4%. Estimate the concentration inside the cells.', [
    ['Interpolate', 'Zero is halfway between +4 and −4.', ['midpoint of 0.2 and 0.4']],
    ['Answer', 'Calculate.', [`${res('0.3 mol/dm³')}`]]], { chk: [['(0.2+0.4)/2', 0.3]] });
  X('b-osmosis', Q('A potato cylinder has a mass of 3.20 g. After 30 minutes in a sugar solution its mass is 3.52 g.', [
    P('Calculate the percentage change in mass.', 1, ['(3.52 − 3.20) ÷ 3.20 × 100 = 10%'], C(10, '%', '(3.52-3.20)/3.20*100'))
  ]));

  /* ---------- b-active ---------- */
  L('b-active', 'Going further: active transport in plants and animals', `<p>Active transport moves substances from a more dilute solution to a more concentrated solution (against a concentration gradient). It requires <b>energy from respiration</b> and uses carrier proteins in the cell membrane. Root hair cells use active transport to absorb mineral ions, such as nitrate and magnesium, from very dilute solutions in the soil: the ions are needed for healthy growth. In the gut, active transport absorbs sugar molecules from lower concentrations into the blood, so that sugar can be used for respiration.</p><p>Because active transport depends on respiration, anything that reduces respiration reduces it: a lack of oxygen (waterlogged soil), low temperature, or poisons such as cyanide. Cells that carry out a lot of active transport contain many mitochondria.</p>` + ul(['Diffusion and osmosis are passive: no energy needed.', 'Active transport works against the gradient.', 'Compare: what moves, direction, energy, membrane needed.']));
  E('b-active', 'Interpreting ion data', 'Root hair cells contain 20 mmol/dm³ of potassium ions; soil water contains 0.5 mmol/dm³. Explain how the cells absorb potassium.', [
    ['Gradient', 'Concentration inside is 40 times higher.', ['against the gradient']],
    ['Process', 'Needs energy.', [`${res('Active transport, using energy from respiration.')}`]]], { chk: [['20/0.5', 40]] });
  E('b-active', 'Effect of a poison', 'A poison stops respiration. Explain its effect on mineral uptake by roots.', [
    ['Respiration', 'No energy released.', ['no ATP']],
    ['Active transport', 'Cannot occur without energy.', [`${res('Mineral ion uptake stops (diffusion only, from high to low).')}`]]]);
  X('b-active', Q('The table shows ion concentrations in pond water and in the cells of a pond plant: nitrate 0.2 and 8.0 mmol/dm³.', [
    P('Calculate how many times greater the nitrate concentration is in the cells.', 1, ['40'], C(40, '', '8.0/0.2', 0.001)),
    P('Explain why the plant must use active transport to absorb nitrate.', 1, ['the concentration is higher inside the cells, so it moves against the gradient']),
    P('Suggest why the rate of nitrate uptake falls if the pond water is low in oxygen.', 1, ['less aerobic respiration, so less energy for active transport'])
  ]));

  /* ---------- b-digestion ---------- */
  L('b-digestion', 'Going further: organs of the digestive system', `<p>The digestive system is an organ system in which several organs work together to digest and absorb food. The <b>salivary glands</b> produce amylase; the <b>stomach</b> produces hydrochloric acid and protease (pepsin) and churns food; the <b>pancreas</b> produces amylase, protease and lipase and releases them into the small intestine; the <b>liver</b> makes bile, stored in the gall bladder; the <b>small intestine</b> produces enzymes and absorbs the soluble products through villi; the <b>large intestine</b> absorbs water.</p><p>Digestive enzymes convert food into small soluble molecules that can be absorbed into the bloodstream. The products are used to build new carbohydrates, lipids and proteins, and some glucose is used in respiration. Bile is alkaline, neutralising stomach acid to give the optimum pH for enzymes in the small intestine, and emulsifies fats into small droplets, increasing the surface area for lipase.</p>` + ul(['Starch → sugars (amylase, a carbohydrase).', 'Protein → amino acids (protease).', 'Lipids → fatty acids + glycerol (lipase).', 'Bile is not an enzyme.']));
  E('b-digestion', 'Tracing digestion of a meal', 'Describe what happens to starch in a sandwich from the mouth to the blood.', [
    ['Mouth and small intestine', 'Amylase from salivary glands and pancreas breaks starch into sugars.', ['starch → maltose → glucose']],
    ['Absorption', 'Glucose is absorbed through the villi.', [`${res('Sugars diffuse and are actively transported into the blood.')}`]]]);
  E('b-digestion', 'Explaining the effect of bile', 'Explain why a person whose gall bladder has been removed should eat less fat.', [
    ['Role of bile', 'Emulsifies fat; neutralises acid.', ['stored in gall bladder']],
    ['Effect', 'Less bile at once after a meal.', [`${res('Fat is digested less efficiently, so large fatty meals cause problems.')}`]]]);
  X('b-digestion', Q('A student mixes milk with lipase and measures the pH as the fat is digested.', [
    P('Explain why the pH decreases.', 2, ['lipase breaks down fat into fatty acids and glycerol', 'fatty acids are acidic / lower the pH']),
    P('Predict and explain the effect of adding bile to the mixture.', 1, ['faster pH fall because bile emulsifies the fat, increasing surface area for lipase'])
  ]));

  /* ---------- b-enzymes ---------- */
  L('b-enzymes', 'Going further: measuring enzyme activity', `<p>Enzymes catalyse specific reactions in living organisms because of the shape of their <b>active site</b> (lock and key model). The rate of an enzyme-controlled reaction increases with temperature up to an <b>optimum</b>; above it, the active site changes shape and the enzyme is <b>denatured</b>, so the substrate no longer fits. Each enzyme also has an optimum pH; extremes of pH denature it.</p><p>In the required practical, amylase and starch are mixed at a fixed temperature and pH (using a buffer), and samples are tested with iodine on a spotting tile every 30 seconds until it no longer turns blue-black. Rate = 1000 ÷ time (s⁻¹). Repeating at different pH values and plotting rate against pH shows the optimum.</p>` + ul(['Use a water bath to control temperature.', 'Start the timer when the solutions are mixed.', 'The rate of reaction = amount of product formed ÷ time.']));
  E('b-enzymes', 'Calculating a rate', 'At pH 7 the starch disappears in 90 s; at pH 5 in 240 s. Calculate the rates (1000 ÷ time) and compare.', [
    ['Rates', '1000 ÷ time.', ['pH 7: 11.1 s⁻¹', 'pH 5: 4.17 s⁻¹']],
    ['Compare', 'Divide.', [`${res('The rate at pH 7 is about 2.7 times faster.')}`]]], { chk: [['1000/90', 11.11], ['1000/240', 4.167], ['240/90', 2.667]] });
  E('b-enzymes', 'Explaining denaturing', 'Explain why boiling amylase stops it working even after it cools.', [
    ['Heat', 'High temperature changes the shape of the active site.', ['bonds holding the shape break']],
    ['Permanent', 'The change is not reversed on cooling.', [`${res('Starch can no longer fit the active site: the enzyme is denatured.')}`]]]);
  X('b-enzymes', Q('A student finds that starch is digested in 60 s at 40 °C.', [
    P('Calculate the rate of reaction using rate = 1000 ÷ time.', 1, ['16.7 s⁻¹'], C(16.7, 's⁻¹', '1000/60', 0.005))
  ]));

  /* ---------- b-foodtests ---------- */
  L('b-foodtests', 'Going further: carrying out food tests safely', `<p>Food samples are first ground with distilled water using a pestle and mortar, then filtered. <b>Benedict’s test</b> for reducing sugars: add Benedict’s solution and heat in a water bath at about 75 °C for five minutes; the colour changes from blue to green, yellow or brick red depending on the amount of sugar. <b>Iodine test</b> for starch: orange-brown to blue-black. <b>Biuret test</b> for protein: blue to purple (lilac). <b>Lipids</b>: Sudan III stain gives a red-stained layer, or the ethanol emulsion test gives a cloudy white layer.</p><p>Benedict’s test is semi-quantitative: the colour indicates roughly how much sugar is present. A control tube with distilled water instead of food shows what a negative result looks like.</p>` + ul(['Hazards: Biuret contains sodium hydroxide (corrosive); ethanol is flammable; use eye protection.', 'Use a water bath rather than a naked flame for Benedict’s.', 'Sucrose is not a reducing sugar.']));
  E('b-foodtests', 'Interpreting results', 'A food turns Benedict’s orange, iodine stays orange-brown and Biuret turns purple. What does it contain?', [
    ['Positive tests', 'Benedict’s and Biuret.', ['reducing sugar, protein']],
    ['Negative', 'Iodine stays orange-brown.', [`${res('Reducing sugar and protein, but no starch.')}`]]]);
  E('b-foodtests', 'Ranking sugar content', 'Three juices give Benedict’s colours green, brick red and yellow. Rank them by sugar content.', [
    ['Colour scale', 'Blue → green → yellow → orange → brick red.', ['more sugar further along']],
    ['Rank', 'Order them.', [`${res('brick red > yellow > green')}`]]]);
  X('b-foodtests', Q('A student tests egg white and potato.', [
    P('Describe how to test the egg white for protein and give the positive result.', 2, ['add Biuret reagent / sodium hydroxide then copper sulfate', 'turns purple / lilac']),
    P('Describe how to test the potato for starch and give the positive result.', 1, ['add iodine solution: turns blue-black'])
  ]));

  /* ---------- b-heart ---------- */
  L('b-heart', 'Going further: the double circulation and heart rate', `<p>The heart is an organ that pumps blood around the body in a <b>double circulatory system</b>. The right ventricle pumps deoxygenated blood to the lungs, where gas exchange takes place; the left ventricle pumps oxygenated blood around the rest of the body. Blood passes through the heart twice in each complete circuit of the body. Valves prevent backflow. Coronary arteries supply oxygenated blood to the heart muscle.</p><p>The natural resting heart rate is controlled by a group of cells in the right atrium that act as a <b>pacemaker</b>. Artificial pacemakers are electrical devices used to correct irregularities. Cardiac output (cm³/min) = stroke volume (cm³) × heart rate (beats/min). Arteries have thick muscular and elastic walls to withstand high pressure; veins have thinner walls, larger lumens and valves; capillaries have walls one cell thick for exchange.</p>` + ul(['Route: vena cava → right atrium → right ventricle → pulmonary artery → lungs → pulmonary vein → left atrium → left ventricle → aorta.', 'The left ventricle wall is thicker to pump blood all round the body.', 'Heart rate = beats ÷ time in minutes.']));
  E('b-heart', 'Cardiac output', 'A person has a heart rate of 72 beats/min and stroke volume 70 cm³. Calculate cardiac output in dm³/min.', [
    ['Multiply', 'SV × HR.', ['70 × 72 = 5040 cm³/min']],
    ['Convert', '÷ 1000.', [`${res('5.04 dm³/min')}`]]], { chk: [['70*72/1000', 5.04]] });
  E('b-heart', 'Stroke volume from output', 'During exercise cardiac output is 18 000 cm³/min and heart rate is 150 beats/min. Find the stroke volume.', [
    ['Rearrange', 'SV = CO ÷ HR.', ['18 000 ÷ 150']],
    ['Answer', 'Calculate.', [`${res('120 cm³')}`]]], { chk: [['18000/150', 120]] });
  X('b-heart', Q('An athlete’s heart rate rises from 60 to 160 beats per minute during a race. Stroke volume rises from 80 cm³ to 120 cm³.', [
    P('Calculate the cardiac output during the race.', 2, ['120 × 160', '= 19 200 cm³/min'], C(19200, 'cm³/min', '120*160', 0.001)),
    P('Calculate the percentage increase in heart rate.', 1, ['(160 − 60) ÷ 60 × 100 = 167%'], C(166.7, '%', '(160-60)/60*100', 0.005))
  ]));

  /* ---------- b-blood ---------- */
  L('b-blood', 'Going further: blood and heart treatments', `<p>Blood is a tissue consisting of <b>plasma</b>, in which red blood cells, white blood cells and platelets are suspended. Plasma carries dissolved substances: carbon dioxide, urea, glucose, amino acids, hormones and antibodies. Red blood cells are biconcave discs with no nucleus, packed with haemoglobin, which binds oxygen. White blood cells defend against pathogens, and platelets are cell fragments that help blood to clot.</p><p>In coronary heart disease layers of fatty material build up inside the coronary arteries, narrowing them and reducing blood flow, so less oxygen reaches the heart muscle. Treatments: <b>stents</b> keep arteries open; <b>statins</b> reduce blood cholesterol, slowing the build-up of fatty material; faulty valves can be replaced with biological or mechanical valves; in heart failure a donor heart, or heart and lungs, can be transplanted, and artificial hearts can keep patients alive while waiting.</p>` + ul(['Statins: no surgery but must be taken long term; side effects possible.', 'Stents: quick recovery but risk of blood clots.', 'Transplants: risk of rejection; need immunosuppressant drugs; shortage of donors.']));
  E('b-blood', 'Comparing treatments', 'Compare stents and statins as treatments for coronary heart disease.', [
    ['Stents', 'Surgery; immediate effect; risk of clots.', ['opens a narrowed artery']],
    ['Statins', 'No surgery; slow effect; must be taken for life; side effects.', [`${res('Stents act immediately on one artery; statins slowly reduce cholesterol throughout.')}`]]]);
  E('b-blood', 'Identifying blood components', 'A blood sample has 5 000 000 red cells and 7500 white cells per mm³. How many red cells are there for every white cell?', [
    ['Ratio', 'Divide.', ['5 000 000 ÷ 7500']],
    ['Answer', 'Round sensibly.', [`${res('about 667 red cells per white cell')}`]]], { chk: [['5000000/7500', 666.7]] });
  X('b-blood', Q('Blood contains plasma, red blood cells, white blood cells and platelets.', [
    P('Name the component that carries urea to the kidneys.', 1, ['plasma'])
  ]));

  /* ---------- b-health ---------- */
  L('b-health', 'Going further: risk factors and data', `<p>Health is the state of physical and mental wellbeing. Diseases are major causes of ill health; other factors include diet, stress and life situations. Different types of disease may interact: defects in the immune system make an individual more likely to suffer from infectious diseases; viruses can trigger cancers; immune reactions caused by a pathogen can trigger allergies; severe physical ill health can lead to depression.</p><p><b>Risk factors</b> are linked to an increased rate of a disease. They can be aspects of a person’s lifestyle (diet, smoking, exercise, alcohol) or substances in the environment or body. Some risk factors cause a disease directly (smoking and lung cancer; alcohol and liver disease; carcinogens and ionising radiation and cancer); others are only correlated. Non-communicable diseases have human and financial costs to individuals, local communities, nations and globally.</p>` + ul(['Correlation is not causation: a mechanism is needed.', 'Large samples make conclusions more valid.', 'Percentage = number affected ÷ total × 100.']));
  E('b-health', 'Comparing rates', 'Of 2000 smokers, 120 developed lung disease; of 5000 non-smokers, 50 did. Compare the percentages.', [
    ['Smokers', '120 ÷ 2000 × 100 = 6%.', ['6%']],
    ['Non-smokers', '50 ÷ 5000 × 100 = 1%.', [`${res('Smokers were 6 times more likely to develop lung disease.')}`]]], { chk: [['120/2000*100', 6], ['50/5000*100', 1]] });
  E('b-health', 'Linked diseases', 'Explain how HIV can lead to a person developing other diseases.', [
    ['Immune system', 'HIV attacks white blood cells.', ['immune system weakened']],
    ['Effect', 'Other pathogens are not destroyed.', [`${res('The person becomes more likely to suffer infectious diseases and some cancers.')}`]]]);
  X('b-health', Q('A study recorded the number of people with type 2 diabetes in two groups of 4000 adults. Obese group: 360. Non-obese group: 80.', [
    P('Calculate the percentage of the obese group with type 2 diabetes.', 1, ['360 ÷ 4000 × 100 = 9%'], C(9, '%', '360/4000*100')),
    P('Calculate how many times more common diabetes was in the obese group.', 1, ['4.5 times'], C(4.5, '', '360/80', 0.001)),
    P('Suggest why a large sample size was used.', 1, ['to make the results more representative / reliable / reduce the effect of chance'])
  ]));

  /* ---------- b-plants ---------- */
  L('b-plants', 'Going further: measuring transpiration', `<p>The leaf is a plant organ adapted for photosynthesis and gas exchange: a waxy cuticle reduces water loss; the upper epidermis is transparent; palisade mesophyll cells contain many chloroplasts; spongy mesophyll has air spaces for diffusion; stomata, controlled by guard cells, allow gases in and out. Water moves from the roots through xylem to the leaves, where it evaporates and diffuses out of the stomata in <b>transpiration</b>. The transpiration stream also carries mineral ions.</p><p>A <b>potometer</b> measures the rate of water uptake, which is close to the rate of transpiration. As water is taken up, an air bubble moves along a capillary tube. The volume taken up = distance moved × cross-sectional area of the tube (πr²). Rate = volume ÷ time. Transpiration increases with temperature, light intensity and air movement, and decreases with humidity.</p>` + ul(['Cut the shoot under water to prevent air entering the xylem.', 'Seal joints with petroleum jelly.', 'Translocation: movement of sugars in phloem, both up and down.']));
  E('b-plants', 'Potometer calculation', 'A bubble moves 30 mm in 5 minutes in a capillary of radius 0.5 mm. Calculate the rate of water uptake in mm³/min.', [
    ['Volume', 'πr² × distance.', ['π × 0.5² × 30 = 23.6 mm³']],
    ['Rate', '÷ 5 minutes.', [`${res('4.7 mm³/min')}`]]], { chk: [['pi*0.5**2*30', 23.56], ['pi*0.5**2*30/5', 4.712]] });
  E('b-plants', 'Explaining the effect of humidity', 'Explain why transpiration is slower on a humid day.', [
    ['Gradient', 'More water vapour in the air outside the leaf.', ['smaller concentration gradient']],
    ['Effect', 'Diffusion out of the stomata is slower.', [`${res('Less water vapour diffuses out, so transpiration slows.')}`]]]);
  X('b-plants', Q('A student uses a potometer to measure the rate of water uptake by a leafy shoot.', [
    P('The bubble moves 45 mm in 10 minutes. Calculate the rate of movement in mm/min.', 1, ['4.5 mm/min'], C(4.5, 'mm/min', '45/10'))
  ]));
})();
