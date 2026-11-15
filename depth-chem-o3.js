/* Opus depth pass for Quantitative chemistry (chem-qc1–chem-qc9). A_r: H 1, C 12, N 14, O 16, Na 23, Mg 24, Al 27, S 32, Cl 35.5, K 39, Ca 40, Fe 56, Cu 63.5. Molar gas volume 24 dm³ at RTP. */
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

  /* ---------- chem-qc1 ---------- */
  L('chem-qc1', 'Going further: conservation of mass and M<sub>r</sub>', `<p>The law of <b>conservation of mass</b> states that no atoms are lost or made during a chemical reaction, so the mass of the products equals the mass of the reactants. This is why equations must be balanced. You can use it to find an unknown mass: if 5.6 g of iron reacts completely with 3.2 g of sulfur, 8.8 g of iron sulfide forms.</p><p>The <b>relative formula mass</b> (M<sub>r</sub>) of a compound is the sum of the relative atomic masses of the atoms in the numbers shown in the formula. In a balanced equation, the sum of the M<sub>r</sub> values of the reactants (each multiplied by its balancing number) equals the sum for the products, which is another way to check an equation. M<sub>r</sub> can also be used to calculate the <b>percentage by mass</b> of an element in a compound: % = (A<sub>r</sub> × number of atoms) ÷ M<sub>r</sub> × 100.</p>` + ul(['Use A<sub>r</sub> values given in the question or the periodic table.', 'Multiply everything inside a bracket by the number outside it.', 'M<sub>r</sub> has no units.', 'Check with the equation: 2Mg + O₂ → 2MgO: 48 + 32 = 80 = 2 × 40.']));
  E('chem-qc1', 'Percentage by mass', 'Calculate the percentage by mass of nitrogen in ammonium nitrate, NH₄NO₃ (A<sub>r</sub>: N 14, H 1, O 16).', [
    ['M<sub>r</sub>', 'Add all the atoms.', ['(2 × 14) + (4 × 1) + (3 × 16) = 80']],
    ['Mass of nitrogen', 'There are two N atoms.', ['2 × 14 = 28']],
    ['Percentage', 'Divide and multiply by 100.', [`${fr('28', '80')} × 100 = ${res('35%')}`]]], { chk: [['2*14+4+3*16', 80], ['28/80*100', 35]] });
  E('chem-qc1', 'Checking an equation with M<sub>r</sub>', 'Show that mass is conserved in CaCO₃ → CaO + CO₂ (A<sub>r</sub>: Ca 40, C 12, O 16).', [
    ['Reactant', 'CaCO₃', ['40 + 12 + 48 = 100']],
    ['Products', 'CaO and CO₂', ['56 + 44 = 100', `${res('100 = 100, so mass is conserved.')}`]]], { chk: [['40+12+48', 100], ['56+44', 100]] });
  X('chem-qc1', Q('Iron reacts with sulfur to form iron(II) sulfide: Fe + S → FeS.', [
    P('Calculate the relative formula mass of FeS (A<sub>r</sub>: Fe 56, S 32).', 1, ['88'], C(88, '', '56+32', 0)),
    P('A student heats 2.8 g of iron with excess sulfur. Calculate the mass of iron(II) sulfide formed.', 2, ['2.8 g Fe is 56/88 of the product / ratio 56 : 88', 'mass = 2.8 × 88 ÷ 56 = 4.4 g'], C(4.4, 'g', '2.8*88/56')),
    P('Calculate the percentage by mass of iron in FeS.', 2, ['56 ÷ 88 × 100', '= 63.6%'], C(63.6, '%', '56/88*100', 0.005)),
    P('Explain why the total mass stays the same in a sealed container.', 1, ['no atoms are lost or made / no reactant or product can escape'])
  ]));

  /* ---------- chem-qc2 ---------- */
  L('chem-qc2', 'Going further: mass changes and uncertainty', `<p>Some reactions seem to break the law of conservation of mass because they are carried out in an <b>open system</b>. If a reactant is a gas from the air (such as oxygen when a metal burns), the mass of the solid <b>increases</b>. If a product is a gas that escapes (such as carbon dioxide when a carbonate is heated or reacts with acid), the mass in the container <b>decreases</b>. In a sealed system the mass stays the same.</p><p>Every measurement has some <b>uncertainty</b>. The range of repeat measurements shows the spread; the uncertainty is about half the range, and the result is given as mean ± uncertainty. For example, results of 12.1, 12.4 and 12.3 g give a mean of 12.3 g and a range of 0.3 g, so the result is 12.3 ± 0.15 g. A resolution of 0.01 g on a balance means each reading has an uncertainty of at least ±0.01 g. Anomalous results are identified and left out of the mean.</p>` + ul(['Percentage change in mass = change ÷ original mass × 100.', 'Thermal decomposition of copper carbonate: CuCO₃ → CuO + CO₂ (mass decreases).', 'Use a loose lid on a crucible to let oxygen in but stop magnesium oxide smoke escaping.']));
  E('chem-qc2', 'Mean and uncertainty', 'Masses recorded: 3.42 g, 3.48 g, 3.45 g. Calculate the mean and the uncertainty.', [
    ['Mean', 'Add and divide by 3.', ['(3.42 + 3.48 + 3.45) ÷ 3 = 3.45 g']],
    ['Uncertainty', 'Half the range.', ['range = 3.48 − 3.42 = 0.06 g', `${res('3.45 ± 0.03 g')}`]]], { chk: [['(3.42+3.48+3.45)/3', 3.45], ['(3.48-3.42)/2', 0.03]] });
  E('chem-qc2', 'Explaining a mass decrease', 'When 5.00 g of copper carbonate is heated, the mass of solid falls to 3.22 g. Explain the change and calculate the mass of gas lost.', [
    ['Explain', 'Carbon dioxide is given off and escapes.', ['CuCO₃ → CuO + CO₂']],
    ['Calculate', 'Mass lost = start − end.', [`5.00 − 3.22 = ${res('1.78 g of CO₂')}`]]], { chk: [['5.00-3.22', 1.78]] });
  X('chem-qc2', Q('A student heats 1.20 g of magnesium ribbon in a crucible with a lid. The mass of the product is 2.00 g.', [
    P('Explain why the mass increased.', 2, ['magnesium reacts with oxygen (from the air)', 'the mass of the oxygen is added to the product']),
    P('Calculate the percentage increase in mass.', 2, ['increase = 0.80 g', '0.80 ÷ 1.20 × 100 = 66.7%'], C(66.7, '%', '0.80/1.20*100', 0.005)),
    P('Explain why the student lifts the lid from time to time.', 1, ['to let oxygen / air in']),
    P('The student repeats the experiment three times and gets products of 2.00 g, 1.96 g and 2.02 g. Calculate the mean and the uncertainty.', 2, ['mean = 1.99 g', 'uncertainty = ± 0.03 g (half the range of 0.06 g)'], C(1.99, 'g', '(2.00+1.96+2.02)/3', 0.005))
  ]));

  /* ---------- chem-qc3 Moles (HT) ---------- */
  L('chem-qc3', 'Going further: moles in practice', `<p>A <b>mole</b> of any substance contains 6.02 × 10²³ particles (the Avogadro constant). The mass of one mole, in grams, equals the substance’s A<sub>r</sub> or M<sub>r</sub>. So 1 mol of carbon has a mass of 12 g, and 1 mol of water a mass of 18 g. The key equation is <b>moles = mass ÷ M<sub>r</sub></b>, which rearranges to mass = moles × M<sub>r</sub>.</p><p>Moles let chemists count particles by weighing. Equal numbers of moles of different substances contain equal numbers of particles, even though their masses differ. Be clear which particles are being counted: 1 mol of O₂ contains 6.02 × 10²³ molecules but 1.204 × 10²⁴ oxygen atoms.</p>` + ul(['Number of particles = moles × 6.02 × 10²³.', 'Always use grams; convert kg × 1000.', 'Give answers to a sensible number of significant figures, usually 2 or 3.', 'This content is Higher tier only.']), true);
  E('chem-qc3', 'Number of atoms in a mass', 'How many atoms are in 4.8 g of magnesium (A<sub>r</sub> 24)?', [
    ['Moles', 'moles = mass ÷ A<sub>r</sub>', ['4.8 ÷ 24 = 0.20 mol']],
    ['Particles', 'Multiply by the Avogadro constant.', [`0.20 × 6.02 × 10²³ = ${res('1.2 × 10²³ atoms')}`]]], { chk: [['4.8/24', 0.2], ['0.2*6.02', 1.204]], higher: true });
  X('chem-qc3', Q('Sodium hydroxide, NaOH, is used to make soap. A<sub>r</sub>: Na 23, O 16, H 1.', [
    H(P('Calculate the number of moles in 10.0 g of sodium hydroxide.', 2, ['M<sub>r</sub> = 40', '10.0 ÷ 40 = 0.25 mol'], C(0.25, 'mol', '10.0/40'))),
    H(P('Calculate the mass of 0.15 mol of sodium hydroxide.', 1, ['0.15 × 40 = 6.0 g'], C(6.0, 'g', '0.15*40'))),
    H(P('Calculate the number of hydroxide ions in 0.25 mol of sodium hydroxide. The Avogadro constant is 6.02 × 10²³ per mole.', 2, ['0.25 × 6.02 × 10²³', '= 1.5 × 10²³'], C(1.505e23, '', '0.25*6.02e23'))),
    H(P('Explain why 1 mol of water and 1 mol of carbon dioxide have different masses.', 1, ['they have different M<sub>r</sub> values (18 and 44) but the same number of molecules']))
  ]));

  /* ---------- chem-qc4 Reacting masses (HT) ---------- */
  L('chem-qc4', 'Going further: the four-step method', `<p>Reacting mass calculations use a balanced equation. (1) Work out the moles of the substance whose mass you know. (2) Use the balancing numbers to find the moles of the substance you want. (3) Multiply by its M<sub>r</sub> to get the mass. (4) Check the answer is sensible. Balancing numbers give the <b>mole ratio</b>, not the mass ratio.</p><p>You can also work out a balanced equation from masses: convert each mass to moles, divide by the smallest to get a whole-number ratio, and use those as balancing numbers. The <b>limiting reactant</b> is the one that is completely used up; the other is in <b>excess</b>. The amount of product depends only on the limiting reactant, so doubling the excess reactant has no effect on the yield.</p>` + ul(['Show every step: the method marks are worth more than the answer.', 'For limiting reactant questions, compare the moles available with the moles needed.', 'Higher tier only.']), true);
  E('chem-qc4', 'Balancing from masses', '8.0 g of methane (M<sub>r</sub> 16) reacts with 32 g of oxygen (M<sub>r</sub> 32) to give 22 g of CO₂ (M<sub>r</sub> 44) and 18 g of water (M<sub>r</sub> 18). Find the balanced equation.', [
    ['Moles', 'mass ÷ M<sub>r</sub> for each.', ['CH₄ 0.5; O₂ 1.0; CO₂ 0.5; H₂O 1.0']],
    ['Ratio', 'Divide by the smallest (0.5).', ['1 : 2 : 1 : 2', `${res('CH₄ + 2O₂ → CO₂ + 2H₂O')}`]]], { chk: [['8.0/16', 0.5], ['32/32', 1], ['22/44', 0.5], ['18/18', 1]], higher: true });
  X('chem-qc4', Q('Iron is extracted from iron(III) oxide: Fe₂O₃ + 3CO → 2Fe + 3CO₂. A<sub>r</sub>: Fe 56, O 16.', [
    H(P('Calculate the maximum mass of iron that can be made from 320 kg of iron(III) oxide.', 4, ['M<sub>r</sub> Fe₂O₃ = 160', 'moles Fe₂O₃ = 320 000 ÷ 160 = 2000 mol', 'moles Fe = 2 × 2000 = 4000 mol', 'mass = 4000 × 56 = 224 000 g = 224 kg'], C(224, 'kg', '320/160*2*56')))
  ]));

  /* ---------- chem-qc5 Concentration ---------- */
  L('chem-qc5', 'Going further: concentration in g/dm³', `<p>Concentration measures how much solute is dissolved in a given volume of solution. In g/dm³, <b>concentration = mass of solute ÷ volume of solution</b>, with volume in dm³ (1 dm³ = 1000 cm³). To convert cm³ to dm³, divide by 1000. Increasing the mass of solute in a fixed volume increases the concentration; increasing the volume for a fixed mass of solute (diluting) decreases it.</p><p>When diluting, the mass of solute stays the same, so mass = concentration × volume before and after. For example, 50 cm³ of a 40 g/dm³ solution contains 2.0 g of solute; making it up to 200 cm³ gives a concentration of 2.0 ÷ 0.200 = 10 g/dm³.</p>` + ul(['Write out the unit conversion: 250 cm³ = 0.250 dm³.', 'The volume is the volume of the solution, not of the water added.', 'Concentration can also be in mol/dm³ (Chemistry, HT).']));
  E('chem-qc5', 'Making a solution', 'What mass of sugar is needed to make 500 cm³ of a 120 g/dm³ solution?', [
    ['Volume in dm³', 'Divide by 1000.', ['500 ÷ 1000 = 0.500 dm³']],
    ['Mass', 'mass = concentration × volume.', [`120 × 0.500 = ${res('60 g')}`]]], { chk: [['120*0.5', 60]] });
  E('chem-qc5', 'Dilution', '25 cm³ of a 60 g/dm³ solution is diluted to 150 cm³. Find the new concentration.', [
    ['Mass of solute', 'mass = c × V.', ['60 × 0.025 = 1.5 g']],
    ['New concentration', 'c = mass ÷ new volume.', [`1.5 ÷ 0.150 = ${res('10 g/dm³')}`]]], { chk: [['60*0.025', 1.5], ['1.5/0.150', 10]] });
  X('chem-qc5', Q('A student dissolves 4.0 g of copper sulfate in water and makes the solution up to 250 cm³.', [
    P('Calculate the concentration of the solution in g/dm³.', 2, ['250 cm³ = 0.250 dm³', '4.0 ÷ 0.250 = 16 g/dm³'], C(16, 'g/dm³', '4.0/0.250')),
    P('Calculate the mass of copper sulfate in 50 cm³ of this solution.', 2, ['16 × 0.050', '= 0.80 g'], C(0.8, 'g', '16*0.050')),
    P('The student adds 150 cm³ of water to 50 cm³ of the solution. Calculate the new concentration.', 2, ['new volume 200 cm³ = 0.200 dm³', '0.80 ÷ 0.200 = 4.0 g/dm³'], C(4.0, 'g/dm³', '0.80/0.200'))
  ]));

  /* ---------- chem-qc6 Yield and atom economy ---------- */
  L('chem-qc6', 'Going further: yield and atom economy in industry', `<p><b>Percentage yield</b> compares the mass of product actually obtained with the maximum theoretical mass from the balanced equation. Yields below 100% happen because the reaction may be reversible and not go to completion, some product may be lost when it is separated (filtering, transferring), and some reactants may react in unexpected side reactions.</p><p><b>Atom economy</b> measures the amount of starting materials that end up as useful product: M<sub>r</sub> of desired product ÷ sum of M<sub>r</sub> of all reactants × 100 (using balancing numbers). Reactions with only one product have an atom economy of 100%. A high atom economy is important for sustainable development and for economic reasons, because less waste is made. When choosing a reaction pathway, chemists consider the atom economy, the yield, the rate, the equilibrium position and the usefulness of by-products.</p>` + ul(['Percentage yield uses masses actually measured; atom economy uses the equation only.', 'A by-product that can be sold improves the economics even if the atom economy is low.', 'Theoretical yield is calculated using reacting mass methods.']));
  E('chem-qc6', 'Atom economy with balancing numbers', 'Calculate the atom economy for making hydrogen: CH₄ + H₂O → CO + 3H₂ (M<sub>r</sub>: CH₄ 16, H₂O 18, H₂ 2).', [
    ['Total M<sub>r</sub> of reactants', 'Add the reactants.', ['16 + 18 = 34']],
    ['Useful product', 'Three H₂ molecules.', ['3 × 2 = 6', `${fr('6', '34')} × 100 = ${res('17.6%')}`]]], { chk: [['16+18', 34], ['6/34*100', 17.65]] });
  E('chem-qc6', 'Percentage yield', 'The theoretical yield of a salt is 12.5 g. A student obtains 9.8 g. Calculate the percentage yield.', [
    ['Divide', 'actual ÷ theoretical.', ['9.8 ÷ 12.5 = 0.784']],
    ['Percentage', 'Multiply by 100.', [`${res('78.4%')}`]]], { chk: [['9.8/12.5*100', 78.4]] });
  X('chem-qc6', Q('Iron is made in a blast furnace: Fe₂O₃ + 3CO → 2Fe + 3CO₂. (M<sub>r</sub>: Fe₂O₃ 160, CO 28; A<sub>r</sub>: Fe 56.)', [
    P('Calculate the atom economy for making iron by this reaction.', 2, ['total M<sub>r</sub> of reactants = 160 + 3 × 28 = 244; useful product = 2 × 56 = 112', '112 ÷ 244 × 100 = 45.9%'], C(45.9, '%', '2*56/(160+3*28)*100', 0.005)),
    P('Explain why a high atom economy is important for sustainable development.', 1, ['less waste is produced / fewer raw materials are used']),
    P('Suggest how the company could make the process more economical even though the atom economy is low.', 1, ['find a use for (sell) the carbon dioxide by-product / reuse the energy released'])
  ]));

  /* ---------- chem-qc7 mol/dm³ and titrations (HT) ---------- */
  L('chem-qc7', 'Going further: titration calculations', `<p>In mol/dm³, <b>concentration = moles ÷ volume (dm³)</b>, so moles = concentration × volume. In a titration, you know the volume and concentration of one solution and the volume of the other. The calculation has three steps: (1) moles of the known solution = c × V; (2) use the equation to find the moles of the other substance; (3) concentration of the unknown = moles ÷ volume.</p><p>For acids like sulfuric acid the ratio is not 1 : 1: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O, so moles of acid = moles of alkali ÷ 2. To convert mol/dm³ to g/dm³, multiply by M<sub>r</sub>. Use only <b>concordant</b> titres (within 0.10 cm³) to calculate the mean.</p>` + ul(['Convert all volumes to dm³ first.', 'Give concentrations to 3 significant figures.', 'Higher tier only for mol/dm³ calculations.']), true);
  E('chem-qc7', 'Sulfuric acid titration', '25.0 cm³ of 0.100 mol/dm³ NaOH is neutralised by 12.5 cm³ of H₂SO₄. Find the concentration of the acid.', [
    ['Moles of NaOH', 'c × V.', ['0.100 × 0.0250 = 0.00250 mol']],
    ['Moles of acid', 'Ratio H₂SO₄ : NaOH = 1 : 2.', ['0.00250 ÷ 2 = 0.00125 mol']],
    ['Concentration', 'n ÷ V.', [`0.00125 ÷ 0.0125 = ${res('0.100 mol/dm³')}`]]], { chk: [['0.100*0.0250', 0.0025], ['0.0025/2/0.0125', 0.1]], higher: true });
  E('chem-qc7', 'Choosing concordant titres', 'Titres: 24.10, 23.65, 23.70, 23.60 cm³. Find the mean titre.', [
    ['Concordant results', 'Within 0.10 cm³ of each other; the first (rough) titre is excluded.', ['23.65, 23.70, 23.60']],
    ['Mean', 'Average them.', [`${res('23.65 cm³')}`]]], { chk: [['(23.65+23.70+23.60)/3', 23.65]] });
  X('chem-qc7', Q('A student titrates 25.0 cm³ of potassium hydroxide solution with 0.150 mol/dm³ hydrochloric acid: KOH + HCl → KCl + H₂O. The mean titre is 20.0 cm³.', [
    H(P('Calculate the moles of hydrochloric acid used.', 1, ['0.150 × 0.0200 = 0.00300 mol'], C(0.003, 'mol', '0.150*0.0200'))),
    H(P('Calculate the concentration of the potassium hydroxide in mol/dm³.', 2, ['moles KOH = 0.00300', '0.00300 ÷ 0.0250 = 0.120 mol/dm³'], C(0.12, 'mol/dm³', '0.00300/0.0250'))),
    H(P('Calculate the concentration of the potassium hydroxide in g/dm³ (M<sub>r</sub> KOH = 56).', 1, ['0.120 × 56 = 6.72 g/dm³'], C(6.72, 'g/dm³', '0.120*56'))),
    P('Describe how the student uses the burette to make the end point accurate.', 2, ['add the acid drop by drop near the end point', 'swirl the flask / use a white tile to see the colour change'])
  ]));

  /* ---------- chem-qc8 Gas volumes (HT) ---------- */
  L('chem-qc8', 'Going further: gas volumes in equations', `<p>Equal amounts in moles of gases occupy the <b>same volume</b> under the same conditions of temperature and pressure. At room temperature and pressure (RTP), 1 mol of any gas occupies 24 dm³ (24 000 cm³). So <b>volume = moles × 24</b> (dm³) and moles = volume ÷ 24.</p><p>For reactions involving only gases, the balancing numbers give the volume ratio directly: in N₂ + 3H₂ → 2NH₃, 50 cm³ of nitrogen reacts with 150 cm³ of hydrogen to give 100 cm³ of ammonia. For reactions involving solids, find moles of the solid from its mass, use the equation ratio, and convert moles of gas to volume.</p>` + ul(['24 dm³ per mol at RTP only: the value is given in the question.', 'Convert cm³ to dm³ by dividing by 1000 before using 24.', 'Higher tier, Chemistry only.']), true);
  E('chem-qc8', 'Gas from a solid', 'Calculate the volume of CO₂ at RTP produced when 5.0 g of CaCO₃ (M<sub>r</sub> 100) reacts with excess acid.', [
    ['Moles of CaCO₃', 'mass ÷ M<sub>r</sub>.', ['5.0 ÷ 100 = 0.050 mol']],
    ['Moles and volume of CO₂', '1 : 1 ratio; × 24.', [`0.050 × 24 = ${res('1.2 dm³')}`]]], { chk: [['5.0/100*24', 1.2]], higher: true });
  E('chem-qc8', 'Volumes of reacting gases', 'What volume of oxygen is needed to burn 30 cm³ of propane? C₃H₈ + 5O₂ → 3CO₂ + 4H₂O', [
    ['Ratio', 'Propane : oxygen = 1 : 5.', ['volumes in the same ratio']],
    ['Volume', 'Multiply.', [`30 × 5 = ${res('150 cm³')}`, 'CO₂ formed = 90 cm³']]], { chk: [['30*5', 150], ['30*3', 90]], higher: true });
  X('chem-qc8', Q('Hydrogen peroxide decomposes: 2H₂O₂ → 2H₂O + O₂. The molar volume of a gas at RTP is 24 dm³.', [
    H(P('Calculate the volume of oxygen at RTP produced from 0.20 mol of hydrogen peroxide.', 2, ['moles O₂ = 0.10', '0.10 × 24 = 2.4 dm³'], C(2.4, 'dm³', '0.20/2*24'))),
    H(P('Calculate the number of moles of oxygen in 600 cm³ at RTP.', 2, ['600 cm³ = 0.600 dm³', '0.600 ÷ 24 = 0.025 mol'], C(0.025, 'mol', '0.600/24'))),
    H(P('Calculate the mass of hydrogen peroxide (M<sub>r</sub> 34) needed to make 600 cm³ of oxygen at RTP.', 2, ['moles H₂O₂ = 2 × 0.025 = 0.050 mol', 'mass = 0.050 × 34 = 1.7 g'], C(1.7, 'g', '2*0.025*34'))),
    H(P('State the volume of 1.5 mol of nitrogen at RTP.', 1, ['36 dm³'], C(36, 'dm³', '1.5*24'))),
    H(P('Explain why 1 dm³ of oxygen and 1 dm³ of nitrogen at RTP contain the same number of molecules.', 1, ['equal volumes of gases (at the same T and P) contain equal numbers of moles / molecules']))
  ]));

  /* ---------- chem-qc9 Review ---------- */
  L('chem-qc9', 'Linking the ideas: choosing the right equation', `<p>Quantitative questions can always be solved by identifying what you know and what you need. Write down the quantities given with units, convert units first (cm³ to dm³, kg to g), then pick the equation that links them. Most multi-step questions go through <b>moles</b> (Higher): mass → moles → ratio → moles → mass, volume of gas or concentration.</p>` + ul(['Foundation: M<sub>r</sub>, conservation of mass, g/dm³ and percentage yield.', 'Higher: moles, reacting masses, limiting reactants, mol/dm³, gas volumes.', 'Show working on separate lines; units on the final answer.']));
  E('chem-qc9', 'A two-step calculation', 'A sample of sodium carbonate solution has a concentration of 21.2 g/dm³. What mass is in 25.0 cm³?', [
    ['Convert the volume', '25.0 cm³ = 0.0250 dm³.', ['V = 0.0250 dm³']],
    ['Mass', 'mass = c × V.', [`21.2 × 0.0250 = ${res('0.530 g')}`]]], { chk: [['21.2*0.0250', 0.53]] });
  X('chem-qc9', Q('Magnesium reacts with hydrochloric acid: Mg + 2HCl → MgCl₂ + H₂. A<sub>r</sub>: Mg 24, Cl 35.5.', [
    P('Calculate the relative formula mass of magnesium chloride.', 1, ['24 + 71 = 95'], C(95, '', '24+2*35.5', 0)),
    P('A student reacts magnesium with excess acid and obtains 3.8 g of magnesium chloride. The theoretical yield is 4.75 g. Calculate the percentage yield.', 2, ['3.8 ÷ 4.75', '× 100 = 80%'], C(80, '%', '3.8/4.75*100')),
    H(P('Calculate the mass of magnesium that would produce 4.75 g of magnesium chloride.', 3, ['moles MgCl₂ = 4.75 ÷ 95 = 0.050', 'moles Mg = 0.050', 'mass = 0.050 × 24 = 1.2 g'], C(1.2, 'g', '4.75/95*24'))),
    P('Suggest one reason why the yield was less than 100%.', 1, ['some product lost during filtering / transferring / evaporation, or solid left on apparatus'])
  ]));
})();
