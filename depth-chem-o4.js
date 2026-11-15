/* Opus depth pass for Chemical changes (chem-cc1–chem-cc11). */
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

  /* ---------- chem-cc1 Reactivity series ---------- */
  L('chem-cc1', 'Going further: using the reactivity series', `<p>The reactivity of a metal is related to its tendency to form <b>positive ions</b>. Potassium, sodium, lithium and calcium react with cold water; magnesium reacts very slowly with cold water but quickly with steam; zinc and iron react with dilute acids but not noticeably with water; copper, silver and gold do not react with dilute acids. The more reactive the metal, the more vigorous the fizzing and the faster the hydrogen is produced.</p><p>Carbon and hydrogen are non-metals, but they are placed in the series because they can be compared with metals: metals below carbon can be extracted by reduction with carbon. Experimental evidence for an order comes from observing reactions with water or acids, from temperature rises, and from <b>displacement reactions</b>: a more reactive metal displaces a less reactive metal from a solution of its salt.</p>` + ul(['Metal + water → metal hydroxide + hydrogen.', 'Metal + acid → salt + hydrogen.', 'Metal + oxygen → metal oxide (an oxidation reaction).', 'When comparing, keep the acid concentration, volume, temperature and metal surface area the same.']));
  E('chem-cc1', 'Ordering metals from observations', 'Metal X fizzes rapidly in dilute acid. Metal Y fizzes slowly. Metal Z gives no bubbles. Place them in order of reactivity and suggest identities.', [
    ['Use the rate of fizzing', 'Faster hydrogen production means a more reactive metal.', ['X > Y > Z']],
    ['Suggest metals', 'Z is below hydrogen.', [`${res('X magnesium, Y iron (or zinc), Z copper')}`]]]);
  E('chem-cc1', 'Using a temperature change', 'Equal masses of four metal powders were added to copper sulfate solution. Temperature rises: Mg 22 °C, Zn 11 °C, Fe 6 °C, Ag 0 °C. Explain the order.', [
    ['Interpret the rise', 'A bigger temperature rise means a more vigorous displacement reaction.', ['Mg > Zn > Fe > Ag']],
    ['Silver', 'No rise: silver is less reactive than copper so no displacement.', [`${res('Reactivity: Mg > Zn > Fe > (Cu) > Ag')}`]]]);
  X('chem-cc1', Q('A student adds small pieces of calcium, copper and magnesium to cold water.', [
    P('Calcium reacts with water. Name the two products.', 2, ['calcium hydroxide', 'hydrogen']),
    P('Write a balanced equation for calcium reacting with water.', 2, ['Ca(OH)₂ and H₂ shown', 'Ca + 2H₂O → Ca(OH)₂ + H₂']),
    P('Describe how the student could show that magnesium is more reactive than zinc using dilute acid. Include how to make it a fair test.', 3, ['add each metal to the acid and compare the rate of bubbling / temperature rise / volume of gas', 'same mass / surface area of metal', 'same volume and concentration (and temperature) of acid'])
  ]));

  /* ---------- chem-cc2 Extraction and displacement ---------- */
  L('chem-cc2', 'Going further: extraction, oxidation and reduction', `<p>Unreactive metals such as gold are found in the Earth as the metal itself. Most metals are found as compounds in <b>ores</b>, and need chemical reactions to extract them. The method depends on reactivity. Metals less reactive than carbon (zinc, iron, tin, lead, copper) are extracted by heating their oxides with carbon: the carbon removes the oxygen, so the metal oxide is <b>reduced</b> and the carbon is <b>oxidised</b>. Metals more reactive than carbon (aluminium, magnesium, sodium) are extracted by electrolysis, which uses a lot of energy and is expensive.</p><p>Oxidation is the gain of oxygen and reduction is the loss of oxygen. In 2Fe₂O₃ + 3C → 4Fe + 3CO₂, the iron oxide loses oxygen and is reduced; carbon gains oxygen and is oxidised. In a displacement reaction such as Mg + CuSO₄ → MgSO₄ + Cu, the more reactive metal takes the place of the less reactive one.</p>` + ul(['Ore: rock containing enough metal compound to make extraction worthwhile.', 'Iron in a blast furnace is reduced by carbon monoxide made from coke.', 'Displacement only happens if the free metal is more reactive than the metal in the compound.']));
  E('chem-cc2', 'Choosing an extraction method', 'Explain which method is used to extract (a) lead from lead oxide and (b) potassium from potassium chloride.', [
    ['Lead', 'Lead is below carbon.', ['heat with carbon (reduction)']],
    ['Potassium', 'Potassium is above carbon.', [`${res('(a) reduction with carbon (b) electrolysis of the molten compound')}`]]]);
  E('chem-cc2', 'Identifying oxidation and reduction', 'In CuO + H₂ → Cu + H₂O, identify the substance oxidised and the substance reduced.', [
    ['Loss of oxygen', 'Copper oxide becomes copper.', ['CuO is reduced']],
    ['Gain of oxygen', 'Hydrogen becomes water.', [`${res('H₂ is oxidised; CuO is reduced.')}`]]]);
  X('chem-cc2', Q('Zinc is extracted by heating zinc oxide with carbon: 2ZnO + C → 2Zn + CO₂.', [
    P('Explain why this is a reduction of zinc oxide.', 1, ['zinc oxide loses oxygen']),
    P('Explain why aluminium cannot be extracted in the same way.', 2, ['aluminium is more reactive than carbon', 'so carbon cannot remove oxygen from aluminium oxide / reduce it']),
    P('A student adds zinc to separate solutions of copper sulfate and magnesium sulfate. Predict and explain what happens in each.', 4, ['copper sulfate: reaction / zinc coated with copper / blue colour fades', 'zinc is more reactive than copper so displaces it', 'magnesium sulfate: no reaction', 'zinc is less reactive than magnesium'])
  ]));

  /* ---------- chem-cc3 Oxidation and reduction in terms of electrons (HT) ---------- */
  L('chem-cc3', 'Going further: ionic equations and half equations', `<p>In terms of electrons, <b>oxidation is loss</b> and <b>reduction is gain</b> (OIL RIG). Displacement reactions are redox reactions. In Mg + CuSO₄ → MgSO₄ + Cu, the sulfate ions do not change, so they are <b>spectator ions</b> and can be left out. The ionic equation is Mg + Cu²⁺ → Mg²⁺ + Cu.</p><p>This splits into two half equations: Mg → Mg²⁺ + 2e⁻ (oxidation) and Cu²⁺ + 2e⁻ → Cu (reduction). The numbers of electrons lost and gained must be equal. When the charges differ, multiply one half equation: for aluminium displacing copper, 2Al → 2Al³⁺ + 6e⁻ and 3Cu²⁺ + 6e⁻ → 3Cu, giving 2Al + 3Cu²⁺ → 2Al³⁺ + 3Cu.</p>` + ul(['Write the electrons on the right for oxidation and on the left for reduction.', 'Check: charges balance on both sides of every half equation.', 'The metal atom is oxidised; the metal ion is reduced.', 'Higher tier only.']), true);
  E('chem-cc3', 'Ionic equation for iron and copper ions', 'Write the ionic equation and half equations for iron reacting with copper(II) sulfate to form iron(II) sulfate.', [
    ['Remove spectator ions', 'Sulfate is unchanged.', ['Fe + Cu²⁺ → Fe²⁺ + Cu']],
    ['Half equations', 'Split into loss and gain.', ['Fe → Fe²⁺ + 2e⁻ (oxidation)', `${res('Cu²⁺ + 2e⁻ → Cu (reduction)')}`]]], { desc: true, higher: true });
  E('chem-cc3', 'Unequal charges', 'Write the ionic equation for magnesium displacing silver from silver nitrate.', [
    ['Half equations', 'Mg loses 2; Ag⁺ gains 1.', ['Mg → Mg²⁺ + 2e⁻', 'Ag⁺ + e⁻ → Ag']],
    ['Balance electrons', 'Multiply the silver half equation by 2.', [`${res('Mg + 2Ag⁺ → Mg²⁺ + 2Ag')}`]]], { desc: true, higher: true });
  X('chem-cc3', Q('Zinc reacts with copper(II) sulfate solution: Zn + CuSO₄ → ZnSO₄ + Cu.', [
    H(P('Write the ionic equation for this reaction.', 1, ['Zn + Cu²⁺ → Zn²⁺ + Cu'])),
    H(P('Write the half equation for the zinc and state whether zinc is oxidised or reduced. Explain your answer.', 3, ['Zn → Zn²⁺ + 2e⁻', 'oxidised', 'it loses electrons'])),
    H(P('Name the spectator ion in this reaction.', 1, ['sulfate (SO₄²⁻)'])),
    H(P('Write the ionic equation for chlorine displacing iodide ions: Cl₂ + 2KI → 2KCl + I₂.', 2, ['Cl₂ + 2I⁻', '→ 2Cl⁻ + I₂'])),
    H(P('Identify the species that is reduced in the chlorine reaction.', 1, ['chlorine (Cl₂ gains electrons)']))
  ]));

  /* ---------- chem-cc4 Reactions of acids ---------- */
  L('chem-cc4', 'Going further: acids, bases and salts', `<p>Acids react with metals, metal oxides, metal hydroxides and metal carbonates to produce <b>salts</b>. The name of the salt comes from the metal (or ammonium) and the acid: hydrochloric acid gives chlorides, sulfuric acid gives sulfates and nitric acid gives nitrates. A <b>base</b> is a substance that neutralises an acid, such as a metal oxide or hydroxide; an <b>alkali</b> is a soluble base, such as sodium hydroxide.</p><p>General equations: dilute hydrochloric/sulfuric acid + reactive metal → salt + hydrogen; acid + metal oxide → salt + water; acid + metal hydroxide → salt + water; acid + metal carbonate → salt + water + carbon dioxide. To work out the formula of a salt, balance the charges of the ions: magnesium ions are Mg²⁺ and sulfate ions are SO₄²⁻, so magnesium sulfate is MgSO₄; aluminium chloride is AlCl₃.</p>` + ul(['Test for hydrogen: lit splint gives a squeaky pop.', 'Test for carbon dioxide: limewater turns milky.', 'Reactions of metals with acids are redox reactions (HT): the metal is oxidised and H⁺ ions are reduced.', 'Nitric acid reacts differently with metals because it is an oxidising acid.']));
  E('chem-cc4', 'Predicting a salt', 'Name the salt and write the equation for copper oxide reacting with sulfuric acid.', [
    ['Name', 'Copper + sulfuric acid → copper sulfate.', ['copper sulfate + water']],
    ['Equation', 'Balance.', [`${res('CuO + H₂SO₄ → CuSO₄ + H₂O')}`]]]);
  E('chem-cc4', 'Equation with a carbonate', 'Write a balanced equation for sodium carbonate reacting with hydrochloric acid.', [
    ['Products', 'Salt + water + carbon dioxide.', ['sodium chloride, water and carbon dioxide']],
    ['Balance', 'Na₂CO₃ has two Na, so two HCl.', [`${res('Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂')}`]]]);
  X('chem-cc4', Q('A student reacts zinc carbonate with dilute nitric acid.', [
    P('Name the salt formed.', 1, ['zinc nitrate']),
    P('Name the gas produced and describe a test for it.', 2, ['carbon dioxide', 'turns limewater milky / cloudy']),
    P('Zinc ions are Zn²⁺ and nitrate ions are NO₃⁻. Give the formula of the salt.', 1, ['Zn(NO₃)₂']),
    P('Write the word equation for zinc oxide reacting with hydrochloric acid.', 2, ['zinc oxide + hydrochloric acid →', 'zinc chloride + water'])
  ]));

  /* ---------- chem-cc5 Making soluble salts ---------- */
  L('chem-cc5', 'Going further: the soluble salt practical', `<p>To make a soluble salt from an insoluble base or metal, react it with a dilute acid until no more dissolves. This required practical has a standard method: warm the acid gently, add the solid a little at a time with stirring until it is in <b>excess</b> (some stays undissolved), filter to remove the excess solid, then heat the filtrate in an evaporating basin until crystals start to form, and leave it to cool and crystallise. Pat the crystals dry with filter paper.</p><p>Each step has a reason. Warming speeds up the reaction. Adding excess ensures all the acid has reacted, so the salt is not contaminated with acid. Filtering removes the unreacted base. Heating only until crystals begin to form (not to dryness) gives larger, purer crystals and avoids decomposing the salt or losing water of crystallisation.</p>` + ul(['Hazards: hot acid and copper compounds are irritants; wear eye protection.', 'Test for crystallisation point: dip a cold glass rod in the solution and look for crystals.', 'Yield is often below 100% because some salt stays in solution and some is lost on transfer.']));
  E('chem-cc5', 'Choosing reactants', 'Choose reactants to make zinc chloride crystals and outline the method.', [
    ['Reactants', 'An insoluble zinc compound and the matching acid.', ['zinc oxide (or zinc carbonate) + hydrochloric acid']],
    ['Method', 'Excess, filter, crystallise.', [`${res('Add excess ZnO to warm HCl, filter, evaporate until crystals form, cool and dry.')}`]]]);
  E('chem-cc5', 'Percentage yield of the salt', 'The theoretical yield of copper sulfate crystals is 6.24 g. A student obtains 4.68 g. Calculate the percentage yield.', [
    ['Divide', 'actual ÷ theoretical.', ['4.68 ÷ 6.24 = 0.75']],
    ['Percentage', '× 100.', [`${res('75%')}`]]], { chk: [['4.68/6.24*100', 75]] });
  X('chem-cc5', Q('A student makes magnesium sulfate crystals from magnesium oxide and sulfuric acid.', [
    P('Explain why the student adds magnesium oxide until some is left undissolved.', 1, ['to make sure all the acid has reacted / is used up']),
    P('Describe how the student should obtain dry crystals from the mixture.', 3, ['filter to remove excess magnesium oxide', 'heat the solution to evaporate some water until crystals start to form, then leave to cool / crystallise', 'filter / pat the crystals dry with filter paper']),
    P('Give one safety precaution and its reason.', 1, ['wear eye protection because acid / hot liquid could splash'])
  ]));

  /* ---------- chem-cc6 pH, neutralisation and titration ---------- */
  L('chem-cc6', 'Going further: neutralisation and titration', `<p>Acids produce hydrogen ions, H⁺(aq), in aqueous solution; alkalis produce hydroxide ions, OH⁻(aq). The pH scale (0–14) measures acidity or alkalinity: pH 7 is neutral, below 7 acidic and above 7 alkaline. pH can be measured with universal indicator (colour compared with a chart) or more precisely with a <b>pH probe</b>. In neutralisation, H⁺ + OH⁻ → H₂O.</p><p>A titration measures exactly the volumes of acid and alkali that react. Use a pipette and filler to measure 25.0 cm³ of alkali into a conical flask, add a few drops of indicator (phenolphthalein or methyl orange, not universal indicator, because a sharp single colour change is needed), and add acid from a burette until the indicator just changes colour. Record burette readings to the nearest 0.05 cm³. Repeat until titres are concordant, within 0.10 cm³.</p>` + ul(['Rinse the burette with the acid and the pipette with the alkali before use.', 'Read the burette at eye level from the bottom of the meniscus.', 'Titre = final reading − initial reading.']));
  E('chem-cc6', 'Calculating a titre', 'Initial burette reading 0.50 cm³; final reading 23.15 cm³. Calculate the titre.', [
    ['Subtract', 'Final − initial.', [`23.15 − 0.50 = ${res('22.65 cm³')}`]],
    ['Check', 'Recorded to 0.05 cm³.', ['matches the precision of the burette']]], { chk: [['23.15-0.50', 22.65]] });
  E('chem-cc6', 'Explaining indicator choice', 'Explain why universal indicator is not used in a titration.', [
    ['Colour change', 'Universal indicator changes gradually through many colours.', ['no sharp end point']],
    ['Better choice', 'A single sharp change shows the exact end point.', [`${res('Use phenolphthalein or methyl orange.')}`]]]);
  X('chem-cc6', Q('A student uses a titration to find the volume of hydrochloric acid needed to neutralise 25.0 cm³ of sodium hydroxide solution.', [
    P('Name the piece of apparatus used to measure 25.0 cm³ of sodium hydroxide.', 1, ['pipette (with a pipette filler)']),
    P('The student’s titres are 22.40, 21.85, 21.90 and 21.80 cm³. Calculate the mean of the concordant titres.', 2, ['use 21.85, 21.90, 21.80 (exclude 22.40)', 'mean = 21.85 cm³'], C(21.85, 'cm³', '(21.85+21.90+21.80)/3', 0.002)),
    P('Write the ionic equation for neutralisation.', 1, ['H⁺ + OH⁻ → H₂O']),
    P('Describe how the pH changes as acid is added to the alkali until it is in excess.', 2, ['starts high / above 7 and decreases', 'reaches 7 at neutralisation then falls below 7']),
    P('Give one reason why the student swirls the flask.', 1, ['to mix the reactants so the acid reacts fully / to see a permanent colour change'])
  ]));

  /* ---------- chem-cc7 Strong and weak acids ---------- */
  L('chem-cc7', 'Going further: strength versus concentration', `<p><b>Strength</b> and <b>concentration</b> mean different things. Concentration is the amount of acid in a given volume: a dilute acid has little acid per dm³; a concentrated acid has a lot. Strength is how fully the acid ionises in water. Strong acids (hydrochloric, nitric, sulfuric) are completely ionised: HCl → H⁺ + Cl⁻. Weak acids (ethanoic, citric, carbonic) are only partially ionised: CH₃COOH ⇌ CH₃COO⁻ + H⁺.</p><p>So it is possible to have a dilute strong acid and a concentrated weak acid. For a given concentration, a stronger acid has a higher H⁺ concentration and a lower pH. (HT) The pH scale is logarithmic: as the H⁺ concentration increases by a factor of 10, the pH decreases by 1. A solution of pH 2 has 10 times the H⁺ concentration of pH 3 and 100 times that of pH 4.</p>` + ul(['Use "dilute" and "concentrated" for amount; "weak" and "strong" for ionisation.', 'Weak acids react more slowly with metals at the same concentration because there are fewer H⁺ ions.', 'Factor of change in H⁺ = 10^(change in pH).']));
  E('chem-cc7', 'Factors of ten', 'The pH of an acid changes from 1 to 4 when it is diluted. By what factor has the H⁺ concentration changed?', [
    ['Change in pH', '4 − 1 = 3', ['3 units']],
    ['Factor', '10³.', [`${res('The H⁺ concentration has decreased by a factor of 1000.')}`]]], { chk: [['10**(4-1)', 1000]], higher: true });
  E('chem-cc7', 'Comparing reactions', 'Equal volumes of 1 mol/dm³ hydrochloric and ethanoic acid react with magnesium ribbon. Explain the difference.', [
    ['Ionisation', 'HCl fully ionised; ethanoic acid partly.', ['more H⁺ ions in HCl']],
    ['Observation', 'More frequent collisions with H⁺.', [`${res('HCl fizzes faster; both give the same total volume of hydrogen.')}`]]]);
  X('chem-cc7', Q('A student has 0.1 mol/dm³ hydrochloric acid and 0.1 mol/dm³ ethanoic acid.', [
    P('Explain the difference between a strong acid and a weak acid.', 2, ['a strong acid is completely ionised in water', 'a weak acid is only partially ionised']),
    P('Predict which acid has the lower pH and explain why.', 2, ['hydrochloric acid', 'higher concentration of H⁺ ions']),
    H(P('The hydrochloric acid has pH 1. It is diluted until its pH is 3. Calculate the factor by which the H⁺ concentration has decreased.', 1, ['100'], C(100, '', '10**2', 0))),
    P('Explain the difference between a dilute acid and a weak acid.', 2, ['dilute: small amount of acid per unit volume', 'weak: only partially ionised (regardless of concentration)']),
    P('Give the equation for ethanoic acid ionising in water.', 1, ['CH₃COOH ⇌ CH₃COO⁻ + H⁺'])
  ]));

  /* ---------- chem-cc8 Molten electrolysis ---------- */
  L('chem-cc8', 'Going further: how electrolysis works', `<p>When an ionic compound is melted or dissolved, its ions are free to move. Passing a direct current through this <b>electrolyte</b> makes positive ions (cations) move to the negative electrode (cathode) and negative ions (anions) move to the positive electrode (anode). At the cathode, ions gain electrons and are <b>reduced</b>; at the anode, ions lose electrons and are <b>oxidised</b>. The ions are discharged as elements.</p><p>For a molten binary compound the products are simple: the metal forms at the cathode and the non-metal at the anode. Molten zinc chloride gives zinc and chlorine. Inert electrodes, such as graphite or platinum, are used so that they do not react with the electrolyte or products. Solid ionic compounds do not undergo electrolysis because the ions cannot move.</p>` + ul(['PANIC: Positive Anode, Negative Is Cathode.', '(HT) Cathode: Zn²⁺ + 2e⁻ → Zn. Anode: 2Cl⁻ → Cl₂ + 2e⁻.', 'Heating is needed to keep the compound molten, so the process uses a lot of energy.']));
  E('chem-cc8', 'Products of molten potassium iodide', 'Predict the products at each electrode when molten potassium iodide is electrolysed.', [
    ['Ions', 'K⁺ and I⁻.', ['K⁺ → cathode, I⁻ → anode']],
    ['Products', 'Metal at cathode; non-metal at anode.', [`${res('Potassium at the cathode; iodine at the anode.')}`]]]);
  E('chem-cc8', 'Half equations for molten aluminium oxide', 'Write half equations for the electrodes in molten aluminium oxide.', [
    ['Cathode', 'Al³⁺ gains 3 electrons.', ['Al³⁺ + 3e⁻ → Al']],
    ['Anode', 'Oxide ions lose electrons and form O₂.', [`${res('2O²⁻ → O₂ + 4e⁻')}`]]], { desc: true, higher: true });
  X('chem-cc8', Q('Molten lead bromide is electrolysed using graphite electrodes.', [
    P('Explain why the lead bromide must be molten.', 2, ['ions must be free to move', 'in the solid they are held in fixed positions in the lattice']),
    P('Describe what is seen at each electrode.', 2, ['cathode: silvery (grey) liquid lead', 'anode: brown / orange gas or vapour (bromine)']),
    H(P('Write the half equation for the reaction at the cathode.', 1, ['Pb²⁺ + 2e⁻ → Pb'])),
    P('Explain why lead ions are described as being reduced.', 1, ['they gain electrons']),
    P('Give one reason why graphite is used for the electrodes.', 1, ['inert / does not react / conducts electricity / high melting point'])
  ]));

  /* ---------- chem-cc9 Aqueous electrolysis ---------- */
  L('chem-cc9', 'Going further: predicting products in solution', `<p>An aqueous solution contains the ions from the compound <b>and</b> H⁺ and OH⁻ ions from water. At the cathode, hydrogen is produced if the metal is more reactive than hydrogen; otherwise the metal is deposited. At the anode, oxygen is produced unless the solution contains halide ions (Cl⁻, Br⁻, I⁻), in which case the halogen is produced. Sulfate and nitrate ions are never discharged at GCSE.</p><p>Sodium chloride solution gives hydrogen and chlorine, leaving sodium hydroxide solution; copper sulfate solution gives copper and oxygen, leaving sulfuric acid; dilute sulfuric acid gives hydrogen and oxygen in a 2 : 1 volume ratio. In the required practical, the products are identified with gas tests and the mass of metal deposited can be measured.</p>` + ul(['(HT) Cathode: 2H⁺ + 2e⁻ → H₂. Anode: 4OH⁻ → O₂ + 2H₂O + 4e⁻.', 'Test chlorine: bleaches damp litmus paper.', 'Copper electrodes in copper sulfate: copper dissolves from the anode and is deposited on the cathode (used to purify copper).']));
  E('chem-cc9', 'Predicting products for potassium bromide solution', 'Predict the products of electrolysing potassium bromide solution.', [
    ['Cathode', 'K is more reactive than H.', ['hydrogen']],
    ['Anode', 'Bromide is a halide.', [`${res('Hydrogen at the cathode; bromine at the anode; KOH left in solution.')}`]]]);
  E('chem-cc9', 'Volumes of gas', 'Electrolysis of dilute sulfuric acid produces 30 cm³ of hydrogen. What volume of oxygen is produced?', [
    ['Ratio', 'H₂ : O₂ = 2 : 1.', ['2H₂O → 2H₂ + O₂']],
    ['Volume', 'Half of the hydrogen.', [`30 ÷ 2 = ${res('15 cm³')}`]]], { chk: [['30/2', 15]] });
  X('chem-cc9', Q('A student electrolyses copper(II) chloride solution with inert electrodes.', [
    P('Name the product at each electrode.', 2, ['cathode: copper', 'anode: chlorine']),
    P('Explain why copper, not hydrogen, is formed at the cathode.', 1, ['copper is less reactive than hydrogen']),
    P('Describe a test for the gas at the anode.', 1, ['damp (blue) litmus paper is bleached / turns white']),
    H(P('Write the half equation for the formation of chlorine.', 2, ['2Cl⁻ → Cl₂', '+ 2e⁻']))
  ]));

  /* ---------- chem-cc10 Extracting aluminium ---------- */
  L('chem-cc10', 'Going further: the economics of aluminium', `<p>Aluminium is extracted by the electrolysis of aluminium oxide (from the ore bauxite). The oxide has a melting point over 2000 °C, so it is dissolved in molten <b>cryolite</b>, which lowers the operating temperature to about 950 °C and reduces energy costs. The cell has a steel case lined with carbon (the cathode) and carbon anodes dipping into the electrolyte.</p><p>Aluminium ions are reduced at the cathode and molten aluminium collects at the bottom. Oxide ions are oxidised at the anode to oxygen, which reacts with the hot carbon to form carbon dioxide, so the anodes burn away and must be replaced regularly. The process uses a huge amount of electricity, so plants are often built near cheap hydroelectric power. Recycling aluminium uses about 5% of the energy needed to extract it from its ore.</p>` + ul(['Overall: 2Al₂O₃ → 4Al + 3O₂.', 'Costs: electricity, heating, replacing anodes.', 'Environmental issues: CO₂ from the anodes, energy use, mining bauxite.']));
  E('chem-cc10', 'Mass of aluminium from aluminium oxide', 'What is the maximum mass of aluminium that can be made from 51 tonnes of Al₂O₃ (M<sub>r</sub> 102, A<sub>r</sub> Al 27)?', [
    ['Mass ratio', 'Each Al₂O₃ contains 2 × 27 = 54 of Al.', ['54/102 of the mass is aluminium']],
    ['Calculate', 'Scale up.', [`51 × 54 ÷ 102 = ${res('27 tonnes')}`]]], { chk: [['51*54/102', 27]] });
  E('chem-cc10', 'Why recycle aluminium', 'Explain why recycling aluminium is better than extracting new aluminium.', [
    ['Energy', 'Recycling uses much less energy than electrolysis.', ['about 5% of the energy']],
    ['Resources', 'Bauxite is finite; mining damages land.', [`${res('Saves energy and ore, reduces CO₂ emissions and waste.')}`]]]);
  X('chem-cc10', Q('Aluminium is made by electrolysis of aluminium oxide dissolved in molten cryolite.', [
    P('Explain why cryolite is used.', 2, ['lowers the melting point / operating temperature', 'so less energy is needed / reduces cost']),
    P('Explain why the positive electrodes must be replaced regularly.', 2, ['oxygen is formed at the anode', 'which reacts with the carbon anode to form carbon dioxide']),
    P('Explain why aluminium is extracted by electrolysis and not by heating with carbon.', 1, ['aluminium is more reactive than carbon']),
    P('Give two reasons why the process is expensive.', 2, ['large amounts of electricity', 'high temperature / heating / replacing anodes'])
  ]));

  /* ---------- chem-cc11 Review ---------- */
  L('chem-cc11', 'Linking the ideas: reactivity, acids and electrolysis', `<p>The reactivity series links this whole unit. It predicts whether a metal reacts with water or acid, which metal displaces which, how a metal is extracted (carbon below, electrolysis above), and which product forms at the cathode in aqueous electrolysis (hydrogen if the metal is above hydrogen). Redox ideas link displacement, extraction and electrolysis: oxidation is loss of electrons (or gain of oxygen); reduction is gain of electrons (or loss of oxygen).</p>` + ul(['Acid + metal / oxide / hydroxide / carbonate → salt + ...', 'Soluble salt: excess solid, filter, crystallise.', 'Electrolysis: cations to cathode (reduced), anions to anode (oxidised).', 'Strong vs weak, dilute vs concentrated.']));
  E('chem-cc11', 'Linking reactivity and extraction', 'Use the reactivity series to predict how tin is extracted from tin oxide, and whether tin reacts with dilute acid.', [
    ['Extraction', 'Tin is below carbon.', ['heat with carbon']],
    ['Reaction with acid', 'Tin is above hydrogen.', [`${res('Reduced with carbon; reacts slowly with dilute acid to give hydrogen.')}`]]]);
  X('chem-cc11', Q('This question is about copper and its compounds.', [
    P('Copper oxide reacts with sulfuric acid. Name the salt formed.', 1, ['copper sulfate']),
    P('Explain why copper cannot be produced by electrolysis of molten copper sulfate but can be from copper sulfate solution.', 1, ['copper sulfate decomposes before it melts (so use a solution) / copper is less reactive than hydrogen so it is deposited from solution']),
    P('Predict what forms at the negative electrode and at the positive electrode when copper sulfate solution is electrolysed with inert electrodes.', 2, ['negative electrode: copper', 'positive electrode: oxygen']),
    P('Explain why the solution left after electrolysis is acidic.', 1, ['H⁺ ions (and sulfate) remain / sulfuric acid forms']),
    P('Iron reacts with copper sulfate solution. Explain this reaction in terms of oxidation and reduction of electrons.', 3, ['iron atoms lose electrons / are oxidised', 'copper ions gain electrons / are reduced', 'iron is more reactive than copper so displaces it']),
    P('Suggest why copper is used for water pipes.', 1, ['does not react with water / unreactive (and malleable)'])
  ]));
})();
