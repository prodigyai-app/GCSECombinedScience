/* Opus depth pass for Atomic structure (chem-at1–chem-at10): Learn cards, further worked examples and exam-style questions taking each lesson to at least 12 marks. A_r: H 1, C 12, O 16, Na 23, Mg 24, Cl 35.5, Ca 40, Cu 63.5. */
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

  /* ---------- chem-at1 Atoms, elements, compounds and equations ---------- */
  L('chem-at1', 'Going further: reading and writing equations', `<p>A chemical equation is a record of which atoms rearrange. The <b>formulae</b> tell you which substances are involved and can never be changed; only the <b>balancing numbers</b> in front of formulae can be changed. A balancing number multiplies every atom in the formula that follows it, so 3H₂O contains 6 hydrogen atoms and 3 oxygen atoms.</p><p>Word equations name the substances; symbol equations show the formulae and, at GCSE, usually state symbols: (s) solid, (l) liquid, (g) gas and (aq) aqueous, meaning dissolved in water. An element contains only one type of atom (Na, O₂, S₈); a compound contains two or more elements chemically combined in fixed proportions (H₂O always has two H for every O). A mixture has no fixed proportions, and its parts keep their own properties.</p>` + ul(['Balance the element that appears in the fewest formulae last, often an element on its own such as O₂ or Na.', 'Check the finished equation by counting each type of atom on both sides.', 'Brackets: Ca(NO₃)₂ contains 1 Ca, 2 N and 6 O.', 'A compound has different properties from its elements: sodium is a reactive metal and chlorine a toxic gas, but sodium chloride is table salt.', 'Splitting a compound needs a chemical reaction; separating a mixture needs only a physical process.']));
  E('chem-at1', 'Balancing an equation with brackets', 'Balance: Al + H₂SO₄ → Al₂(SO₄)₃ + H₂', [
    ['Start with the bracketed group', 'Treat SO₄ as one unit because it is unchanged.', ['Right: 3 SO₄, so put 3 in front of H₂SO₄: Al + 3H₂SO₄ → Al₂(SO₄)₃ + H₂']],
    ['Balance hydrogen', 'Left now has 6 H, so the right needs 3 H₂.', ['Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂']],
    ['Balance the metal and check', 'Two Al atoms are needed on the left.', [`${res('2Al + 3H₂SO₄ → Al₂(SO₄)₃ + 3H₂')}`, 'Al 2 = 2, S 3 = 3, O 12 = 12, H 6 = 6']]]);
  E('chem-at1', 'Element, compound or mixture?', 'Classify: (a) N₂, (b) NaCl, (c) sea water, (d) CO. Give a reason for each.', [
    ['Look at the types of atom', 'One type of atom means an element; more than one, chemically bonded, means a compound.', ['N₂: one element → element', 'NaCl and CO: two elements bonded → compounds']],
    ['Look for chemical bonding between substances', 'Sea water is salt and other substances dissolved in water, not chemically combined.', [`${res('(a) element (b) compound (c) mixture (d) compound')}`]]]);
  X('chem-at1', Q('Calcium reacts with water to form calcium hydroxide and hydrogen.', [
    P('Write a balanced symbol equation for this reaction.', 2, ['Ca + H₂O → Ca(OH)₂ + H₂ (correct formulae)', 'Ca + 2H₂O → Ca(OH)₂ + H₂ (balanced)']),
    P('State how many atoms are shown in the formula Ca(OH)₂.', 1, ['5'], C(5, 'atoms', '1+2+2', 0)),
    P('Explain why calcium hydroxide is described as a compound.', 2, ['it contains more than one element / three elements', 'chemically combined (in fixed proportions)'])
  ]), Q('Air is a mixture of gases. Water is a compound of hydrogen and oxygen.', [
    P('Give two differences between a mixture and a compound.', 2, ['a compound has fixed proportions of elements, a mixture does not', 'a compound can only be separated by a chemical reaction; a mixture can be separated by physical methods / the parts of a mixture keep their own properties']),
    P('State the meaning of the symbol (aq) in an equation.', 1, ['dissolved in water / aqueous solution'])
  ]));

  /* ---------- chem-at2 Mixtures and separation ---------- */
  L('chem-at2', 'Going further: choosing a separation method', `<p>Every separation method relies on a <b>difference in a physical property</b>. Filtration uses the difference between soluble and insoluble substances; crystallisation uses the fact that the solvent evaporates but the solute does not; distillation uses a difference in boiling point; chromatography uses differences in how strongly substances are attracted to the paper and how soluble they are in the solvent.</p><p>Crystallisation is preferred to evaporating to dryness when the solid decomposes on strong heating or when larger, purer crystals are wanted: heat the solution until crystals start to form on a cold glass rod, then leave it to cool slowly. Simple distillation separates a solvent from a solution; fractional distillation separates liquids whose boiling points are close, because the fractionating column gives many cycles of evaporation and condensation.</p>` + ul(['State the property each step uses: "filter to remove the insoluble sand".', 'Planning questions often need several steps in order: dissolve, filter, evaporate, crystallise, dry.', 'In distillation the thermometer bulb sits at the side arm, to measure the temperature of the vapour leaving.', 'Cold water enters the condenser at the bottom so that the condenser stays full.', 'Never heat a flammable solvent with a naked flame: use a water bath or electric heater.']));
  E('chem-at2', 'Separating three substances', 'A mixture contains sand, salt and water. Describe how to obtain pure dry sand and pure dry salt.', [
    ['Remove the insoluble solid', 'Sand does not dissolve, so it stays on the filter paper.', ['filter → sand on paper; salt solution passes through']],
    ['Dry the sand', 'Rinse with a little distilled water to remove salt, then dry.', ['wash, then dry in a warm oven']],
    ['Recover the salt', 'Evaporate some water, then let the solution crystallise.', [`${res('Heat the filtrate until crystals form, cool, filter off and dry the salt crystals.')}`]]]);
  E('chem-at2', 'Choosing between simple and fractional distillation', 'Explain which method separates (a) water from ink and (b) ethanol (78 °C) from water (100 °C).', [
    ['Ink and water', 'Only the solvent needs to boil off; the dyes stay behind.', ['simple distillation']],
    ['Ethanol and water', 'Both are liquids with boiling points only 22 °C apart; both evaporate.', [`${res('(a) simple distillation (b) fractional distillation')}`]]]);
  X('chem-at2', Q('A student has a mixture of copper(II) sulfate solution and powdered charcoal.', [
    P('Describe how the student could obtain pure, dry crystals of copper(II) sulfate.', 4, ['filter to remove the charcoal (insoluble)', 'heat the filtrate to evaporate some of the water / until crystals start to form', 'leave to cool and crystallise', 'filter off the crystals and dry them between filter paper / in a warm oven']),
    P('Explain why the student should not evaporate all the water by heating strongly.', 1, ['the crystals may decompose / lose water of crystallisation / smaller impure crystals form'])
  ]), Q('A mixture of two liquids is separated by fractional distillation.', [
    P('State the property of the liquids that allows them to be separated.', 1, ['different boiling points']),
    P('Explain the purpose of the condenser.', 1, ['to cool the vapour so it condenses back to a liquid'])
  ]));

  /* ---------- chem-at3 Development of the atomic model ---------- */
  L('chem-at3', 'Going further: why models change', `<p>Scientific models change when <b>new experimental evidence</b> cannot be explained by the old model. Before electrons were discovered, atoms were thought to be tiny spheres that could not be divided. The discovery of the electron (Thomson) meant atoms must contain smaller particles, giving the plum pudding model: a ball of positive charge with negative electrons embedded in it.</p><p>The alpha particle scattering experiment (Geiger and Marsden, interpreted by Rutherford) fired positive alpha particles at thin gold foil. Most went straight through, some were deflected and a very few bounced back. The plum pudding model predicted that almost all would pass through with little deflection, so it was replaced by the nuclear model: a tiny, dense, positively charged nucleus with electrons around it. Bohr then adapted the model so that electrons orbit at specific distances (energy levels), which agreed with experimental observations. Later experiments showed the positive charge of the nucleus is made of protons, and Chadwick's work about 20 years after the nuclear model provided evidence for neutrons.</p>` + ul(['Link each observation to its conclusion: most pass through → mostly empty space; a few deflected → positive nucleus; very few bounce back → mass concentrated in a tiny nucleus.', 'The nuclear model was accepted because it explained all the results; the plum pudding model did not.', 'The radius of a nucleus is less than 1/10 000 of the radius of the atom.']));
  E('chem-at3', 'Comparing two models', 'Compare the plum pudding model with the nuclear model of the atom.', [
    ['Where the positive charge is', 'Plum pudding: spread throughout the atom. Nuclear: concentrated in a tiny nucleus.', ['spread out vs concentrated']],
    ['Where the mass is', 'Plum pudding: spread out. Nuclear: almost all in the nucleus.', ['spread out vs concentrated in the nucleus']],
    ['Empty space', 'The nuclear model has electrons outside the nucleus, so the atom is mostly empty space.', [`${res('The nuclear model has a small, dense, positive nucleus; the plum pudding model has none.')}`]]]);
  E('chem-at3', 'Comparing sizes', 'An atom has a radius of 1 × 10⁻¹⁰ m. Its nucleus has a radius of 1 × 10⁻¹⁴ m. How many times larger is the atom?', [
    ['Divide the radii', 'Ratio = radius of atom ÷ radius of nucleus.', [`${fr('1 × 10⁻¹⁰', '1 × 10⁻¹⁴')} = ${res('10 000 times')}`]],
    ['Interpret', 'This is why most alpha particles passed through.', ['the nucleus is about 1/10 000 of the width of the atom']]], { chk: [['1e-10/1e-14', 10000]] });
  X('chem-at3', Q('Rutherford\u2019s team directed a narrow beam of alpha particles at a very thin sheet of gold.', [
    P('Describe and explain what happened to most of the alpha particles.', 2, ['they passed straight through (undeflected)', 'because the atom is mostly empty space']),
    P('Explain why the results showed that the plum pudding model was wrong.', 2, ['some alpha particles were deflected / bounced back', 'the plum pudding model predicted (almost) all would pass straight through, as the charge and mass were spread out']),
    P('Describe the contribution Bohr made to the model of the atom.', 2, ['electrons orbit the nucleus at specific distances / in shells / energy levels', 'his calculations agreed with experimental observations'])
  ]));

  /* ---------- chem-at4 Protons, neutrons, electrons, isotopes ---------- */
  L('chem-at4', 'Going further: isotopes and relative atomic mass', `<p>Isotopes of an element have the same number of protons but different numbers of neutrons, so they have the same chemical properties but different masses. Most elements exist as a mixture of isotopes. The <b>relative atomic mass</b> (A<sub>r</sub>) shown in the periodic table is the mean mass of an atom, taking into account the abundance of each isotope.</p><p>To calculate it, multiply each mass number by its percentage abundance, add the results and divide by 100. For example, chlorine is 75% chlorine-35 and 25% chlorine-37: A<sub>r</sub> = (35 × 75 + 37 × 25) ÷ 100 = 35.5. The answer always lies between the isotope masses and is nearer the more abundant isotope.</p>` + ul(['Atomic number = number of protons (and electrons in an atom).', 'Mass number = protons + neutrons.', 'Atoms have no overall charge because the numbers of protons and electrons are equal.', 'Electrons have a very small relative mass, so they do not count in the mass number.', 'Isotopes react in the same way because they have the same electronic structure.']));
  E('chem-at4', 'Relative atomic mass from abundances', 'Copper is 69% copper-63 and 31% copper-65. Calculate the relative atomic mass of copper.', [
    ['Multiply mass by abundance', 'Weight each isotope by how common it is.', ['63 × 69 = 4347', '65 × 31 = 2015']],
    ['Add and divide by 100', 'The total abundance is 100%.', [`(4347 + 2015) ÷ 100 = ${res('63.6')}`]]], { chk: [['(63*69+65*31)/100', 63.62]] });
  X('chem-at4', Q('Magnesium has three isotopes: magnesium-24 (79%), magnesium-25 (10%) and magnesium-26 (11%).', [
    P('Give the numbers of protons, neutrons and electrons in an atom of magnesium-25. The atomic number of magnesium is 12.', 2, ['12 protons and 12 electrons', '13 neutrons']),
    P('Calculate the relative atomic mass of magnesium. Give your answer to 1 decimal place.', 3, ['(24 × 79) + (25 × 10) + (26 × 11)', '= 2432 ÷ 100', '= 24.3'], C(24.3, '', '(24*79+25*10+26*11)/100', 0.005)),
    P('Explain why the isotopes of magnesium have the same chemical properties.', 1, ['same number of electrons / same electronic structure (same outer electrons)'])
  ]));

  /* ---------- chem-at5 Electronic structure ---------- */
  L('chem-at5', 'Going further: electron shells and the periodic table', `<p>Electrons occupy the lowest available energy levels (shells) first. At GCSE the first shell holds up to 2 electrons and the second and third shells hold up to 8 each, for the first 20 elements. Potassium (19) is 2,8,8,1 and calcium (20) is 2,8,8,2.</p><p>The electronic structure links directly to the periodic table: the <b>number of shells</b> equals the period and the <b>number of outer electrons</b> equals the group number for groups 1 to 7; group 0 elements have full outer shells. Elements in the same group react in similar ways because they have the same number of outer electrons, which are the electrons involved in reactions.</p>` + ul(['Diagrams show electrons as dots or crosses on circles around the nucleus.', 'Ions: Na⁺ is 2,8 because sodium loses its single outer electron; Cl⁻ is 2,8,8 because chlorine gains one.', 'Helium (2) is in group 0 even though it has only 2 outer electrons, because its shell is full.', 'The atomic number gives the number of electrons in a neutral atom.']));
  E('chem-at5', 'Structure of an ion', 'Give the electronic structure of a magnesium atom (atomic number 12) and of a magnesium ion, Mg²⁺.', [
    ['Atom', 'Fill shells 2, 8, then the rest.', ['Mg: 12 electrons → 2,8,2']],
    ['Ion', 'Mg²⁺ has lost its two outer electrons.', [`${res('Mg²⁺: 10 electrons → 2,8')}`]]]);
  E('chem-at5', 'Identifying an element from its structure', 'An atom has the electronic structure 2,8,8,1. Identify the element and its group and period.', [
    ['Count electrons', 'Total = atomic number.', ['2 + 8 + 8 + 1 = 19 → potassium']],
    ['Group and period', 'Four shells, one outer electron.', [`${res('Potassium: group 1, period 4')}`]]], { chk: [['2+8+8+1', 19]] });
  X('chem-at5', Q('This question is about the elements in period 3.', [
    P('Give the electronic structure of phosphorus (atomic number 15).', 1, ['2,8,5']),
    P('Explain, in terms of electronic structure, why phosphorus is in group 5.', 1, ['it has 5 electrons in its outer shell']),
    P('Give the electronic structure of a sulfide ion, S²⁻ (atomic number of sulfur 16).', 2, ['18 electrons / gained 2 electrons', '2,8,8']),
    P('Explain why sodium and potassium react in a similar way.', 2, ['both have one electron in the outer shell', 'reactions involve the outer electrons / both lose one electron to form 1+ ions']),
    P('State the number of shells occupied in an atom of argon.', 1, ['3'], C(3, 'shells', '3', 0))
  ]));

  /* ---------- chem-at6 The periodic table ---------- */
  L('chem-at6', 'Going further: how the periodic table was developed', `<p>Early chemists arranged elements in order of <b>atomic weight</b>. Newlands' "law of octaves" grouped elements so that every eighth element was similar, but it broke down after calcium because he put dissimilar elements together. Mendeleev (1869) also used atomic weights, but he <b>left gaps</b> for undiscovered elements and <b>changed the order</b> of some pairs, such as tellurium and iodine, so that elements with similar properties lined up in groups. When gallium and germanium were discovered, their properties matched his predictions closely, which convinced other scientists.</p><p>The discovery of protons and isotopes explained why ordering by atomic weight was not always correct: the true order is by <b>atomic number</b>. Isotopes mean an element can have a higher mean atomic weight than the next element even though it has fewer protons.</p>` + ul(['About 3/4 of elements are metals; they are found to the left and towards the bottom.', 'Non-metals are at the top right; the noble gases are in group 0.', 'Metals form positive ions; non-metals that form ions form negative ions.', 'Explain an exam answer about Mendeleev using: gaps, predictions, order swapped, later confirmed.']));
  E('chem-at6', 'Explaining Mendeleev’s success', 'Explain why Mendeleev’s table was accepted by other scientists.', [
    ['Gaps', 'He left gaps for elements not yet discovered.', ['predicted properties of the missing elements']],
    ['Evidence', 'Elements later found, such as germanium, matched the predictions.', [`${res('Successful predictions provided evidence that the table was correct.')}`]]]);
  E('chem-at6', 'Atomic number versus atomic weight', 'Argon (A<sub>r</sub> 39.9) comes before potassium (A<sub>r</sub> 39.1). Explain why this order is correct.', [
    ['Check atomic numbers', 'Argon is 18, potassium 19.', ['ordering by atomic number puts argon first']],
    ['Check properties', 'Argon is a noble gas; potassium is an alkali metal.', [`${res('Argon belongs in group 0 and potassium in group 1, so atomic number gives the correct order.')}`]]]);
  X('chem-at6', Q('Mendeleev published a periodic table in 1869.', [
    P('Give two ways in which Mendeleev’s table differed from earlier tables.', 2, ['he left gaps for undiscovered elements', 'he changed the order of some elements based on their properties (not just atomic weight)']),
    P('Explain why some elements appear in a different order in the modern table from the order of their atomic weights.', 2, ['the modern table is arranged by atomic number', 'isotopes mean the relative atomic mass may be higher for an element with fewer protons']),
    P('Element X forms an ion with a 2− charge. State whether X is a metal or a non-metal and give a reason.', 2, ['non-metal', 'it gains electrons / forms a negative ion']),
    P('State where metals are found in the periodic table.', 1, ['on the left and towards the bottom'])
  ]));

  /* ---------- chem-at7 Noble gases and alkali metals ---------- */
  L('chem-at7', 'Going further: reactions of the alkali metals', `<p>Group 1 metals react with water to produce a metal hydroxide and hydrogen; with chlorine to form white metal chloride salts; and with oxygen to form metal oxides. Each reaction becomes more vigorous down the group. Lithium fizzes steadily on water; sodium melts into a ball and whizzes across the surface; potassium melts and the hydrogen ignites with a lilac flame.</p><p>The trend is explained by the size of the atom: down the group the outer electron is in a shell further from the nucleus and more shielded by inner shells, so it is less strongly attracted and is lost more easily. The noble gases are unreactive because their outer shells are full, so they do not easily lose, gain or share electrons. Their boiling points increase down the group as relative atomic mass increases.</p>` + ul(['2Na + 2H₂O → 2NaOH + H₂', '2K + Cl₂ → 2KCl', '4Li + O₂ → 2Li₂O', 'The solutions formed with water are alkaline (pH above 7) because of hydroxide ions.', 'Group 1 metals are stored under oil to stop them reacting with air and water vapour.']));
  E('chem-at7', 'Writing an alkali metal equation', 'Write a balanced equation for potassium reacting with water.', [
    ['Word equation', 'Metal + water → metal hydroxide + hydrogen.', ['potassium + water → potassium hydroxide + hydrogen']],
    ['Balance', 'Hydrogen appears as H₂, so two K and two H₂O are needed.', [`${res('2K + 2H₂O → 2KOH + H₂')}`]]]);
  E('chem-at7', 'Predicting rubidium', 'Predict how rubidium reacts with water compared with potassium.', [
    ['Position', 'Rubidium is below potassium in group 1.', ['outer electron further from the nucleus']],
    ['Prediction', 'It loses its outer electron more easily.', [`${res('More vigorously: it may explode, producing rubidium hydroxide and hydrogen.')}`]]]);
  X('chem-at7', Q('Sodium is added to a trough of water containing universal indicator.', [
    P('Describe two observations.', 2, ['fizzing / bubbles / moves around on the surface / melts into a ball', 'indicator turns blue/purple']),
    P('Write a balanced symbol equation for the reaction.', 2, ['NaOH and H₂ as products', '2Na + 2H₂O → 2NaOH + H₂']),
    P('Explain why the noble gases are unreactive.', 1, ['they have a full outer shell (stable arrangement), so do not easily gain, lose or share electrons'])
  ]));

  /* ---------- chem-at8 Halogens ---------- */
  L('chem-at8', 'Going further: displacement and ionic equations', `<p>A more reactive halogen displaces a less reactive halogen from a solution of its salt. Chlorine displaces bromine and iodine; bromine displaces iodine; iodine displaces neither. The colour change shows a reaction: a bromide solution turns orange when chlorine is added because bromine forms, and an iodide solution turns brown as iodine forms.</p><p>Reactivity <b>decreases</b> down group 7 because the outer shell is further from the nucleus, so an incoming electron is less strongly attracted. The halogens exist as diatomic molecules (F₂, Cl₂, Br₂, I₂), and their melting and boiling points increase down the group as the molecules get larger. Halogens react with metals to form ionic salts such as sodium chloride, and with non-metals to form covalent compounds such as hydrogen chloride.</p>` + ul(['Cl₂ + 2KBr → 2KCl + Br₂', 'Ionic equation (HT): Cl₂ + 2Br⁻ → 2Cl⁻ + Br₂', 'At room temperature: chlorine is a green gas, bromine a red-brown liquid, iodine a grey solid.', 'Halogens form 1− ions (halide ions) when they react with metals.']));
  E('chem-at8', 'Predicting a displacement reaction', 'Predict whether bromine reacts with potassium iodide solution. Write the equation if it does.', [
    ['Compare reactivity', 'Bromine is above iodine in group 7, so it is more reactive.', ['bromine displaces iodine']],
    ['Equation', 'The salt of the more reactive halogen forms.', [`${res('Br₂ + 2KI → 2KBr + I₂')}`, 'solution turns brown']]]);
  E('chem-at8', 'Predicting astatine', 'Predict the state of astatine at room temperature and its reactivity compared with iodine.', [
    ['State', 'Boiling points increase down the group; iodine is already a solid.', ['astatine: solid']],
    ['Reactivity', 'Reactivity decreases down group 7.', [`${res('A solid, less reactive than iodine.')}`]]]);
  X('chem-at8', Q('Chlorine water is added to separate solutions of potassium bromide and potassium iodide.', [
    P('Describe what is seen in each test tube.', 2, ['potassium bromide: solution turns orange (yellow-orange)', 'potassium iodide: solution turns brown']),
    P('Write a balanced symbol equation for the reaction of chlorine with potassium iodide.', 2, ['KCl and I₂ as products', 'Cl₂ + 2KI → 2KCl + I₂']),
    P('Explain why iodine does not react with potassium chloride solution.', 1, ['iodine is less reactive than chlorine (so cannot displace it)'])
  ]));

  /* ---------- chem-at9 Transition metals ---------- */
  L('chem-at9', 'Going further: transition metals compared with group 1', `<p>The transition metals (such as chromium, manganese, iron, cobalt, nickel and copper) sit in the central block of the periodic table. Compared with the alkali metals they have <b>higher melting points</b> (except mercury), <b>higher densities</b>, and are <b>stronger and harder</b>. They are much <b>less reactive</b>: iron rusts slowly in damp air, whereas sodium reacts vigorously with water.</p><p>Many transition metals form ions with <b>different charges</b>, such as Fe²⁺ and Fe³⁺ or Cu⁺ and Cu²⁺, and their compounds are often <b>coloured</b>: copper(II) sulfate is blue, iron(II) compounds are pale green and iron(III) compounds are orange-brown. Transition metals and their compounds are useful <b>catalysts</b>: iron in the Haber process, nickel for hydrogenating vegetable oils and manganese(IV) oxide for decomposing hydrogen peroxide.</p>` + ul(['The Roman numeral in a name gives the charge on the ion: iron(III) oxide contains Fe³⁺.', 'Coloured compounds are used in pottery glazes and stained glass.', 'Group 1 compounds are white and dissolve to form colourless solutions.']));
  E('chem-at9', 'Working out a formula from a Roman numeral', 'Give the formula of iron(III) oxide.', [
    ['Ions', 'Iron(III) is Fe³⁺; oxide is O²⁻.', ['charges +3 and −2']],
    ['Balance the charges', 'Lowest common multiple is 6: 2 × (+3) and 3 × (−2).', [`${res('Fe₂O₃')}`]]]);
  E('chem-at9', 'Using data to identify a transition metal', 'Metal A melts at 1455 °C and has density 8.9 g/cm³. Metal B melts at 64 °C and has density 0.86 g/cm³. Which is the transition metal?', [
    ['Compare melting points', 'Transition metals have high melting points.', ['A is much higher']],
    ['Compare densities', 'Transition metals are dense; group 1 metals are not.', [`${res('A is the transition metal (nickel); B is potassium.')}`]]]);
  X('chem-at9', Q('Iron is a transition metal. Sodium is in group 1.', [
    P('Give two properties of iron that are different from sodium.', 2, ['higher melting point / higher density / stronger / harder', 'less reactive (with water and oxygen) / forms ions with different charges / forms coloured compounds']),
    P('Iron forms two chlorides, FeCl₂ and FeCl₃. Give the charges on the iron ions in these compounds.', 2, ['FeCl₂: Fe²⁺', 'FeCl₃: Fe³⁺']),
    P('Give one use of a transition metal as a catalyst.', 1, ['iron in the Haber process / nickel in hydrogenation / platinum in catalytic converters / manganese(IV) oxide decomposing hydrogen peroxide']),
    P('Suggest how a student could tell whether a solid salt contains a transition metal ion.', 2, ['dissolve it in water', 'a coloured solution suggests a transition metal ion (group 1 salts give colourless solutions)'])
  ]));

  /* ---------- chem-at10 Review ---------- */
  L('chem-at10', 'Linking the ideas: atomic structure and the periodic table', `<p>Everything in this unit connects to the structure of the atom. The number of <b>protons</b> defines the element and its place in the periodic table. The arrangement of <b>electrons</b> decides how the element reacts: elements with one or two outer electrons lose them to form positive ions; elements with six or seven gain electrons to form negative ions; elements with full shells barely react at all. <b>Group trends</b> come from the distance between the outer electrons and the nucleus: losing an electron gets easier down a group (group 1 more reactive), while gaining one gets harder (group 7 less reactive).</p>` + ul(['Use the periodic table to work out protons, neutrons and electrons for any atom or ion.', 'Explain trends in terms of shells, distance from the nucleus and attraction.', 'Use the history of the atom to explain how evidence changes models.', 'Balance equations by changing only the numbers in front of formulae.']));
  E('chem-at10', 'A multi-step atomic structure problem', 'Element Z has atomic number 17 and exists as two isotopes, mass numbers 35 and 37. Identify Z, give its electronic structure and the charge on its ion.', [
    ['Identify', 'Atomic number 17 is chlorine.', ['Z = chlorine']],
    ['Structure', 'Fill shells.', ['2,8,7']],
    ['Ion', 'It gains one electron to complete its outer shell.', [`${res('Cl⁻: 1− charge (2,8,8)')}`]]]);
  X('chem-at10', Q('This question is about the elements lithium, fluorine and neon.', [
    P('Give the electronic structure of fluorine (atomic number 9).', 1, ['2,7']),
    P('Explain why neon is unreactive.', 1, ['full outer shell']),
    P('Lithium reacts with fluorine to form lithium fluoride, LiF. Describe what happens to the electrons when lithium fluoride forms.', 3, ['lithium loses one electron', 'fluorine gains one electron', 'forming Li⁺ and F⁻ ions (both with full outer shells)']),
    P('Explain why fluorine is more reactive than chlorine.', 3, ['fluorine atoms are smaller / outer shell closer to the nucleus', 'stronger attraction (less shielding) for an incoming electron', 'so it gains an electron more easily'])
  ]));
})();
