/* Opus depth pass for Bonding, structure and properties (chem-bo1–chem-bo10). */
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

  /* ---------- chem-bo1 Ionic bonding ---------- */
  L('chem-bo1', 'Going further: drawing ionic bonding', `<p>When a metal reacts with a non-metal, electrons are <b>transferred</b> from the metal atoms to the non-metal atoms. Both form ions with the electronic structure of a noble gas. A dot and cross diagram shows the electrons of one atom as dots and the other as crosses; the ions are drawn in square brackets with the charge at the top right. Usually only the outer shell is shown.</p><p>The number of electrons transferred depends on the groups: group 1 atoms lose 1, group 2 lose 2, group 6 gain 2 and group 7 gain 1. If the numbers do not match, more than one of an ion is needed: in calcium chloride one calcium atom gives one electron to each of two chlorine atoms. Ionic bonds are the strong electrostatic forces of attraction between oppositely charged ions, acting in all directions.</p>` + ul(['Show the transfer with an arrow from metal to non-metal only if asked for the process.', 'Ions have full outer shells: Na⁺ 2,8 and Cl⁻ 2,8,8.', 'Do not draw a shared pair in an ionic diagram: that would be a covalent bond.', 'The overall charge of an ionic compound is zero.']));
  E('chem-bo1', 'Electron transfer in magnesium chloride', 'Describe what happens to the electrons when magnesium reacts with chlorine.', [
    ['Magnesium', 'Mg (2,8,2) loses 2 outer electrons.', ['Mg → Mg²⁺ + 2e⁻']],
    ['Chlorine', 'Each Cl (2,8,7) can gain only 1 electron, so two Cl atoms are needed.', ['2Cl + 2e⁻ → 2Cl⁻']],
    ['Result', 'Charges balance.', [`${res('One Mg²⁺ and two Cl⁻: MgCl₂')}`]]]);
  E('chem-bo1', 'Electron transfer in sodium oxide', 'Explain why sodium oxide has the formula Na₂O.', [
    ['Ions', 'Na loses 1 electron (Na⁺); O gains 2 electrons (O²⁻).', ['oxygen needs 2 electrons']],
    ['Count', 'Two sodium atoms each give one electron.', [`${res('2 Na⁺ balance one O²⁻, so Na₂O')}`]]]);
  X('chem-bo1', Q('Potassium reacts with sulfur to form potassium sulfide.', [
    P('Describe, in terms of electrons, how potassium sulfide is formed. Potassium is in group 1 and sulfur is in group 6.', 4, ['potassium atoms lose one electron each', 'sulfur atoms gain two electrons', 'two potassium atoms are needed for each sulfur atom', 'forming K⁺ and S²⁻ ions (with full outer shells / noble gas structures)']),
    P('Give the formula of potassium sulfide.', 1, ['K₂S']),
    P('Name the type of force that holds the ions together.', 1, ['electrostatic (attraction between oppositely charged ions)'])
  ]));

  /* ---------- chem-bo2 Ionic compounds ---------- */
  L('chem-bo2', 'Going further: giant ionic lattices and formulae', `<p>An ionic compound is a <b>giant structure</b> of ions: a regular three-dimensional lattice in which each ion is surrounded by ions of opposite charge. Because there are no separate molecules, the formula shows the simplest whole-number ratio of ions. Formulae are worked out by balancing the charges, using compound ions where needed: hydroxide OH⁻, nitrate NO₃⁻, sulfate SO₄²⁻ and carbonate CO₃²⁻. Brackets are needed when more than one compound ion is present, as in Ca(OH)₂ and Al₂(SO₄)₃.</p><p>Models of the lattice each have limitations. Dot and cross diagrams show electron transfer but not the arrangement of ions; ball and stick models show the arrangement but suggest gaps and "sticks" that do not exist; 2D diagrams show only one layer; space-filling models show packing but hide the inside of the lattice.</p>` + ul(['Formula check: total positive charge = total negative charge.', 'Aluminium oxide: Al³⁺ and O²⁻ → Al₂O₃.', 'Ammonium is a positive compound ion, NH₄⁺, so ammonium sulfate is (NH₄)₂SO₄.', 'The lattice extends in all directions; a sample of NaCl has equal numbers of Na⁺ and Cl⁻ ions.']));
  E('chem-bo2', 'Formula with a compound ion', 'Give the formula of aluminium sulfate.', [
    ['Ions', 'Al³⁺ and SO₄²⁻.', ['charges +3 and −2']],
    ['Balance', 'LCM 6: 2 Al³⁺ (+6) and 3 SO₄²⁻ (−6).', [`${res('Al₂(SO₄)₃')}`]]]);
  E('chem-bo2', 'Evaluating a model', 'Give one strength and one limitation of a ball and stick model of sodium chloride.', [
    ['Strength', 'It shows the 3D regular arrangement of ions.', ['each ion surrounded by six of the other']],
    ['Limitation', 'The sticks are not real bonds and the ions are drawn far apart.', [`${res('Ions are actually packed closely; the forces act in all directions.')}`]]]);
  X('chem-bo2', Q('Calcium nitrate is an ionic compound.', [
    P('The nitrate ion is NO₃⁻. Give the formula of calcium nitrate.', 1, ['Ca(NO₃)₂']),
    P('Calculate the number of atoms in one formula unit of calcium nitrate.', 2, ['1 Ca + 2 N + 6 O', '= 9'], C(9, 'atoms', '1+2+6', 0)),
    P('Describe the structure of solid calcium nitrate.', 2, ['giant (ionic) lattice', 'of Ca²⁺ and NO₃⁻ ions held by strong electrostatic forces (in all directions)']),
    P('Give one limitation of using a 2D diagram to represent an ionic lattice.', 1, ['only shows one layer / does not show the 3D arrangement'])
  ]));

  /* ---------- chem-bo3 Covalent bonding ---------- */
  L('chem-bo3', 'Going further: covalent molecules and their diagrams', `<p>A covalent bond is a <b>shared pair of electrons</b> between two non-metal atoms. Each atom usually shares enough electrons to achieve a full outer shell. The number of bonds an atom forms equals the number of electrons it needs: hydrogen and the halogens 1, oxygen 2, nitrogen 3 and carbon 4. A double bond is two shared pairs (as in O₂ and CO₂); nitrogen, N₂, has a triple bond.</p><p>Covalent bonds are strong. Small molecules such as H₂, Cl₂, H₂O, NH₃ and CH₄ contain a fixed number of atoms. Covalent bonding can also form very large molecules (polymers) and giant covalent structures (diamond, silica). Diagrams can be dot and cross, or displayed formulae where each line is a bond; neither shows the true 3D shape of the molecule.</p>` + ul(['In a dot and cross diagram, put the shared pair in the overlap of the circles.', 'Count outer electrons around each atom afterwards: 8 (or 2 for hydrogen).', 'Ammonia: N forms 3 bonds and keeps one lone pair.', 'Covalent bonds hold the atoms together inside a molecule; they are not broken when the substance melts.']));
  E('chem-bo3', 'Bonding in ammonia', 'Explain how the atoms in NH₃ achieve full outer shells.', [
    ['Nitrogen', 'N (2,5) needs 3 more electrons.', ['shares one electron with each of 3 H atoms']],
    ['Hydrogen', 'Each H needs 1 more electron.', ['each H shares 1 pair with N']],
    ['Result', 'Three single covalent bonds.', [`${res('N has 8 outer electrons (3 shared pairs + 1 lone pair); each H has 2.')}`]]]);
  E('chem-bo3', 'Counting shared pairs', 'How many shared pairs of electrons are in a molecule of carbon dioxide, O=C=O?', [
    ['Double bonds', 'Each double bond is 2 shared pairs.', ['2 double bonds']],
    ['Total', 'Add them.', [`2 × 2 = ${res('4 shared pairs')}`]]], { chk: [['2*2', 4]] });
  X('chem-bo3', Q('Hydrogen chloride, HCl, and water, H₂O, are covalent compounds.', [
    P('Describe what is meant by a covalent bond.', 1, ['a shared pair of electrons (between two atoms)']),
    P('Draw or describe the bonding in a molecule of water. Show outer electrons only.', 3, ['two O–H bonds, each one shared pair', 'oxygen has two lone pairs / 8 outer electrons', 'each hydrogen has 2 electrons']),
    P('Nitrogen gas, N₂, has a triple bond. Give the number of electrons shared between the two atoms.', 1, ['6'], C(6, 'electrons', '3*2', 0)),
    P('Explain why a molecule of methane has the formula CH₄.', 2, ['carbon has 4 outer electrons and needs 4 more', 'each hydrogen shares one pair, so 4 hydrogen atoms bond to one carbon'])
  ]));

  /* ---------- chem-bo4 Metallic bonding ---------- */
  L('chem-bo4', 'Going further: metals and alloys', `<p>In a metal, the atoms lose their outer electrons, which become <b>delocalised</b> and free to move through the whole structure. The metallic bond is the strong attraction between the positive metal ions and the sea of delocalised electrons. Because the bonding is strong, most metals have high melting and boiling points. Because the electrons can move, metals are good conductors of electricity and of heat (the electrons transfer energy).</p><p>Pure metals are soft because the regular layers of ions can slide over each other. In an <b>alloy</b>, atoms of different sizes distort the layers, so they cannot slide as easily and the alloy is harder. This is why most metals in everyday use are alloys: steel (iron with carbon and other elements), brass (copper and zinc), bronze (copper and tin) and 18-carat gold (gold with copper or silver).</p>` + ul(['Answers must mention <b>delocalised electrons</b> for conduction.', 'Malleable means it can be hammered into shape; ductile means it can be drawn into wires.', 'Draw alloys with a few larger or smaller circles disrupting the rows.', 'Metals with more outer electrons (e.g. magnesium compared with sodium) have more delocalised electrons and stronger bonding.']));
  E('chem-bo4', 'Why alloys are harder', 'Explain why brass is harder than pure copper.', [
    ['Pure copper', 'Layers of identical atoms slide easily.', ['regular layers']],
    ['Brass', 'Zinc atoms are a different size and distort the layers.', [`${res('The layers cannot slide over each other as easily, so brass is harder.')}`]]]);
  E('chem-bo4', 'Gold purity', '18-carat gold contains 18 parts gold in 24. Calculate the percentage of gold.', [
    ['Fraction', 'Pure gold is 24 carat.', [`${fr('18', '24')} × 100`]],
    ['Answer', 'Calculate.', [`${res('75%')}`]]], { chk: [['18/24*100', 75]] });
  X('chem-bo4', Q('Copper is used for electrical wiring.', [
    P('Explain why copper conducts electricity.', 2, ['delocalised electrons', 'which can move through the structure / carry charge']),
    P('Explain why copper can be drawn into wires.', 2, ['layers of atoms/ions', 'can slide over each other (without the bonds breaking)'])
  ]));

  /* ---------- chem-bo5 States of matter ---------- */
  L('chem-bo5', 'Going further: the particle model and its limits', `<p>The three states of matter can be represented by the simple particle model, in which particles are small solid spheres. In a solid the particles are close together in a regular arrangement and vibrate in fixed positions; in a liquid they are close together but randomly arranged and move around each other; in a gas they are far apart, randomly arranged and move quickly in all directions. Melting and boiling need energy to overcome the forces between particles. The amount of energy needed depends on the strength of those forces, so substances with strong forces have high melting and boiling points.</p><p>The model has <b>limitations</b> (HT): there are no forces shown, all particles are drawn as solid inelastic spheres, and it does not show that particles may be atoms, ions or molecules of different shapes. Use melting and boiling points to predict state: a substance is a solid below its melting point, a liquid between its melting and boiling points, and a gas above its boiling point.</p>` + ul(['Condensing and freezing release energy; melting and boiling take in energy.', 'The temperature stays constant while a pure substance changes state.', 'Evaporation can happen below the boiling point, from the surface of a liquid.', 'State symbols: (s), (l), (g), (aq).']));
  E('chem-bo5', 'Predicting state from data', 'A substance melts at −7 °C and boils at 59 °C. What is its state at 25 °C and at 80 °C?', [
    ['25 °C', 'Between the melting and boiling points.', ['liquid']],
    ['80 °C', 'Above the boiling point.', [`${res('Liquid at 25 °C; gas at 80 °C (this is bromine).')}`]]]);
  E('chem-bo5', 'Explaining a cooling curve', 'A liquid is cooled and its temperature stays at 80 °C for 3 minutes. Explain why.', [
    ['Change of state', 'The substance is freezing at 80 °C.', ['bonds/forces between particles form']],
    ['Energy', 'Energy released by forming forces balances the energy lost to the surroundings.', [`${res('The temperature stays constant until all the liquid has frozen.')}`]]]);
  X('chem-bo5', Q('The table gives the melting and boiling points of three substances: A (−210 °C, −196 °C), B (801 °C, 1413 °C), C (0 °C, 100 °C).', [
    P('Give the state of each substance at 20 °C.', 3, ['A: gas', 'B: solid', 'C: liquid']),
    P('Describe the arrangement and movement of the particles in substance C at 20 °C.', 2, ['close together, random arrangement', 'move around / slide past each other']),
    P('Explain why substance B has a much higher melting point than substance A.', 2, ['B has much stronger forces / bonds between particles (giant structure)', 'more energy is needed to overcome them'])
  ]));

  /* ---------- chem-bo6 Properties of ionic and molecular substances ---------- */
  L('chem-bo6', 'Going further: linking structure to properties', `<p>To explain a property, always say <b>which forces are overcome</b> and <b>how strong</b> they are. Ionic compounds have high melting points because of the many strong electrostatic forces in the giant lattice. They conduct when melted or dissolved because the ions are free to move and carry charge, but not as solids because the ions are held in place.</p><p>Simple molecular substances have low melting and boiling points because only the weak <b>intermolecular forces</b> between molecules are overcome; the strong covalent bonds inside molecules do not break. Intermolecular forces increase with the size of the molecules, so boiling points increase with relative formula mass (e.g. from fluorine to iodine). Molecular substances do not conduct electricity because molecules have no overall charge. Polymers have very large molecules with stronger intermolecular forces, so they are usually solids at room temperature.</p>` + ul(['Never say covalent bonds break when a molecular substance boils.', 'Never say ionic compounds conduct because electrons move.', 'Giant covalent substances (diamond, silica) have very high melting points because covalent bonds must break.', 'Use the word "lattice" for ionic and giant covalent structures.']));
  E('chem-bo6', 'Explaining conductivity of salt', 'Explain why sodium chloride conducts electricity when molten but not when solid.', [
    ['Solid', 'Ions are fixed in the lattice.', ['ions cannot move']],
    ['Molten', 'The lattice breaks down.', [`${res('Ions are free to move and carry charge.')}`]]]);
  E('chem-bo6', 'Explaining a boiling point trend', 'Explain why iodine (I₂) has a higher boiling point than chlorine (Cl₂).', [
    ['Type of substance', 'Both are small molecules.', ['only intermolecular forces are overcome']],
    ['Size', 'I₂ molecules are larger.', [`${res('Stronger intermolecular forces in iodine need more energy to overcome.')}`]]]);
  X('chem-bo6', Q('Magnesium oxide is used to line furnaces. Methane is used as a fuel.', [
    P('Explain why magnesium oxide has a very high melting point.', 3, ['giant ionic lattice', 'strong electrostatic forces between Mg²⁺ and O²⁻ ions / oppositely charged ions', 'lots of energy needed to overcome the forces']),
    P('Explain why methane is a gas at room temperature.', 3, ['small molecules', 'weak intermolecular forces', 'little energy needed to overcome them (covalent bonds do not break)'])
  ]));

  /* ---------- chem-bo7 Giant covalent structures ---------- */
  L('chem-bo7', 'Going further: comparing all four structures', `<p>There are four main structure types. <b>Giant ionic</b>: lattice of ions, high melting points, conducts when molten or dissolved. <b>Simple molecular</b>: small molecules, low melting points, does not conduct. <b>Giant covalent</b>: lattice of atoms joined by covalent bonds, very high melting points, usually does not conduct (graphite and graphene are exceptions). <b>Metallic</b>: lattice of positive ions and delocalised electrons, usually high melting points, conducts as a solid and when molten.</p><p>Silicon dioxide (silica, sand) is a giant covalent structure in which every silicon atom is bonded to four oxygen atoms and every oxygen atom to two silicon atoms. To melt it, many strong covalent bonds must be broken, so its melting point is about 1700 °C. Data questions often give melting point and conductivity of solid, liquid and solution: use them to identify the structure.</p>` + ul(['Conducts as a solid → metal (or graphite).', 'Conducts only when molten or dissolved → ionic.', 'Low melting point, never conducts → simple molecular.', 'Very high melting point, does not conduct → giant covalent.']));
  E('chem-bo7', 'Identifying structures from data', 'Substance W melts at 1610 °C and does not conduct when solid or molten. Substance Y melts at 714 °C and conducts only when molten. Identify the structures.', [
    ['W', 'Very high melting point, never conducts.', ['giant covalent']],
    ['Y', 'Conducts only when molten, so contains ions.', [`${res('W: giant covalent (like silica); Y: giant ionic.')}`]]]);
  E('chem-bo7', 'Why silica is hard', 'Explain why silicon dioxide is hard and has a high melting point.', [
    ['Structure', 'Giant covalent lattice.', ['each Si bonded to 4 O; each O to 2 Si']],
    ['Bonds', 'Many strong covalent bonds must be broken.', [`${res('Lots of energy is needed, and the rigid lattice resists scratching.')}`]]]);
  X('chem-bo7', Q('The table shows data for four substances. P: melting point 1083 °C, conducts as solid and liquid. Q: 2852 °C, conducts only when molten. R: −182 °C, does not conduct. S: 3550 °C, does not conduct.', [
    P('Identify the type of structure of each substance P, Q, R and S.', 4, ['P: metallic', 'Q: giant ionic', 'R: simple molecular', 'S: giant covalent']),
    P('Explain why substance S has the highest melting point.', 2, ['giant covalent structure / many covalent bonds', 'covalent bonds are strong, so lots of energy needed to break them']),
    P('Explain why substance R does not conduct electricity.', 2, ['molecules have no overall charge / no free electrons or ions', 'so nothing to carry charge'])
  ]));

  /* ---------- chem-bo8 Carbon ---------- */
  L('chem-bo8', 'Going further: diamond, graphite, graphene and fullerenes', `<p>Carbon forms several structures because each carbon atom can form four covalent bonds. In <b>diamond</b> each carbon is bonded to four others in a rigid giant lattice, so diamond is very hard, has a very high melting point and does not conduct electricity. In <b>graphite</b> each carbon is bonded to three others in hexagonal layers; there are only weak forces between layers, so the layers slide and graphite is soft and slippery. The fourth electron of each carbon is delocalised, so graphite conducts electricity, similar to metals.</p><p><b>Graphene</b> is a single layer of graphite, one atom thick; it is very strong, light and conducts, so it is useful in electronics and composites. <b>Fullerenes</b> are molecules of carbon atoms with hollow shapes based on hexagonal rings (sometimes with five- or seven-membered rings). Buckminsterfullerene, C₆₀, was the first discovered. <b>Carbon nanotubes</b> are cylindrical fullerenes with very high length-to-diameter ratios, high tensile strength and conductivity, used in nanotechnology, electronics and to reinforce materials. Fullerenes can carry drugs into the body and act as catalysts or lubricants.</p>` + ul(['Diamond: 4 bonds, no free electrons → no conduction.', 'Graphite: 3 bonds, 1 delocalised electron per atom → conducts.', 'C₆₀ is a molecule, so it has a lower melting point than diamond and graphite.']));
  E('chem-bo8', 'Explaining graphite as a lubricant', 'Explain why graphite is used as a lubricant and in pencils.', [
    ['Structure', 'Layers of carbon atoms in hexagonal rings.', ['each carbon bonded to 3 others']],
    ['Between the layers', 'Only weak forces hold the layers together.', [`${res('Layers slide over each other easily, so graphite is soft and slippery.')}`]]]);
  E('chem-bo8', 'Choosing a carbon form', 'Suggest which form of carbon is best for (a) drill tips (b) electrodes (c) delivering a drug inside the body.', [
    ['Match property to use', 'Hardness, conductivity, hollow cage.', ['(a) diamond: hardest', '(b) graphite: conducts, high melting point']],
    ['Drug delivery', 'Hollow fullerene cages can carry molecules.', [`${res('(a) diamond (b) graphite (c) fullerenes')}`]]]);
  X('chem-bo8', Q('Graphene and carbon nanotubes are forms of carbon.', [
    P('Describe the structure of graphene.', 2, ['a single layer of graphite / carbon atoms one atom thick', 'each carbon bonded to three others in hexagonal rings']),
    P('Give two properties of carbon nanotubes that make them useful.', 2, ['high tensile strength / strong', 'conduct electricity / high length-to-diameter ratio'])
  ]));

  /* ---------- chem-bo9 Nanoparticles ---------- */
  L('chem-bo9', 'Going further: nanoparticle maths and uses', `<p>Nanoscience studies structures 1–100 nm in size (1 nm = 1 × 10⁻⁹ m), a few hundred atoms or fewer. Fine particles (PM2.5) are 100–2500 nm and coarse particles (dust, PM10) are 2.5–10 µm. Nanoparticles have a very high <b>surface area to volume ratio</b>. As the side of a cube decreases by a factor of 10, its SA:V increases by a factor of 10, so much less material is needed to give the same effect, for example as a catalyst.</p><p>Nanoparticles are used in medicine (drug delivery), electronics, cosmetics and sun creams (better skin coverage, no white marks), deodorants, and as catalysts. Silver nanoparticles have antibacterial properties and are used in fabrics and wound dressings. Concerns include possible effects on health: nanoparticles may enter cells and the bloodstream, and their long-term effects, including on the environment, are not yet well understood.</p>` + ul(['SA:V of a cube = 6 ÷ side.', 'Compare sizes using powers of ten: 1 µm = 1000 nm.', 'Nanoparticles may behave differently from bulk material of the same substance.']));
  E('chem-bo9', 'Effect of size on SA:V', 'Calculate the SA:V ratio of a cube of side 10 nm and of side 1 nm, and compare.', [
    ['10 nm cube', 'SA:V = 6 ÷ side.', ['6 ÷ 10 = 0.6 nm⁻¹']],
    ['1 nm cube', 'Divide by the smaller side.', ['6 ÷ 1 = 6 nm⁻¹', `${res('Decreasing the side by 10 increases SA:V by 10.')}`]]], { chk: [['6/10', 0.6], ['6/1', 6]] });
  E('chem-bo9', 'Comparing particle sizes', 'A nanoparticle is 50 nm across. A coarse dust particle is 5 µm across. How many times larger is the dust particle?', [
    ['Same units', '5 µm = 5000 nm.', ['5 × 1000 = 5000 nm']],
    ['Divide', 'Ratio of sizes.', [`5000 ÷ 50 = ${res('100 times')}`]]], { chk: [['5000/50', 100]] });
  X('chem-bo9', Q('Silver nanoparticles are added to some socks to kill bacteria.', [
    P('A silver nanoparticle has a diameter of 20 nm. Give this diameter in metres.', 1, ['2 × 10⁻⁸ m'], C(2e-8, 'm', '20e-9', 0.01)),
    P('Explain why less silver is needed when it is used as nanoparticles rather than as a powder of larger particles.', 2, ['nanoparticles have a much higher surface area to volume ratio', 'so more silver is exposed / available to act on bacteria per gram']),
    P('Give one possible risk of using nanoparticles in clothing.', 1, ['may be washed into the environment / harm aquatic life / could enter the body or cells; effects not fully known']),
    P('A cube has sides of 4 cm. Calculate its surface area to volume ratio.', 2, ['surface area 96 cm² and volume 64 cm³', 'ratio 1.5 : 1'], C(1.5, '', '6*4**2/4**3', 0.005))
  ]));

  /* ---------- chem-bo10 Review ---------- */
  L('chem-bo10', 'Linking the ideas: bonding, structure and properties', `<p>Start every structure question by deciding the <b>type of bonding</b>: metal + non-metal → ionic; non-metals only → covalent; metal only → metallic. Then decide whether the structure is <b>giant</b> or <b>molecular</b>, and explain properties by naming the particles, the forces between them and how strong those forces are. Melting point depends on the forces overcome; conductivity depends on whether charged particles (ions or delocalised electrons) are free to move.</p>` + ul(['Ionic: strong electrostatic forces; conduct when molten or dissolved.', 'Simple molecular: weak intermolecular forces; no conduction.', 'Giant covalent: strong covalent bonds broken on melting; graphite conducts.', 'Metallic: delocalised electrons; conduct, malleable; alloys harder.']));
  E('chem-bo10', 'Comparing three substances', 'Explain the differences in melting point between sodium chloride (801 °C), diamond (3550 °C) and water (0 °C).', [
    ['Diamond', 'Giant covalent: strong covalent bonds broken.', ['highest']],
    ['Sodium chloride', 'Giant ionic: strong electrostatic forces overcome.', ['high']],
    ['Water', 'Small molecules: weak intermolecular forces only.', [`${res('Order: diamond > sodium chloride > water, matching the strength of forces overcome.')}`]]]);
  X('chem-bo10', Q('Sodium, chlorine and sodium chloride have very different properties.', [
    P('Name the type of bonding in each substance.', 3, ['sodium: metallic', 'chlorine: covalent', 'sodium chloride: ionic']),
    P('Explain why sodium conducts electricity as a solid but sodium chloride does not.', 2, ['sodium has delocalised electrons that can move', 'in solid sodium chloride the ions are fixed in place / cannot move']),
    P('Explain why chlorine has a low boiling point.', 2, ['small molecules with weak intermolecular forces', 'little energy needed to overcome them'])
  ]));
})();
