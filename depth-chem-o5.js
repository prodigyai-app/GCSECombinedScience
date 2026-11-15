/* Opus depth pass for Energy changes (chem-en1–chem-en5) and Rates and equilibrium (chem-ra1–chem-ra6). */
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

  /* ---------- chem-en1 Exothermic and endothermic ---------- */
  L('chem-en1', 'Going further: measuring temperature changes', `<p>Energy is conserved in chemical reactions: the amount of energy in the universe at the end of a reaction is the same as at the start. If a reaction transfers energy to the surroundings it is <b>exothermic</b> and the temperature of the surroundings rises. Examples include combustion, many oxidation reactions and neutralisation. If a reaction takes in energy from the surroundings it is <b>endothermic</b> and the temperature falls. Examples include thermal decomposition and the reaction of citric acid with sodium hydrogencarbonate.</p><p>In the required practical, a polystyrene cup (often in a beaker, with a lid) is used as a calorimeter because it is a good insulator. Measure the starting temperature, add the second reactant, stir, and record the highest (or lowest) temperature. Repeating with different volumes or concentrations shows how the variable affects the temperature change. Energy losses to the surroundings make the measured change smaller than the true value.</p>` + ul(['Uses of exothermic reactions: self-heating cans, hand warmers.', 'Uses of endothermic reactions: sports injury packs.', 'Temperature change = highest temperature − starting temperature.', 'Plot temperature change against volume added; the peak shows neutralisation.']));
  E('chem-en1', 'Finding the neutralisation point', 'Temperature rises when NaOH is added to 25 cm³ of HCl: 10 cm³ → +5.0 °C, 20 cm³ → +9.5 °C, 25 cm³ → +11.0 °C, 30 cm³ → +10.2 °C. Explain the pattern.', [
    ['Rising part', 'More acid reacts as alkali is added, releasing more energy.', ['rise up to 25 cm³']],
    ['Falling part', 'After neutralisation, excess alkali absorbs energy without reacting.', [`${res('Neutralisation is at about 25 cm³; extra solution cools the mixture.')}`]]]);
  E('chem-en1', 'Improving accuracy', 'Suggest two ways to reduce energy losses in the polystyrene cup experiment.', [
    ['Insulation', 'Stop energy escaping.', ['use a lid; place the cup in a beaker']],
    ['Method', 'Measure the maximum quickly.', [`${res('Lid and insulation; stir and read the highest temperature promptly.')}`]]]);
  X('chem-en1', Q('A student investigates the temperature change when different metals are added to copper sulfate solution in a polystyrene cup.', [
    P('Give one reason why a polystyrene cup is used.', 1, ['good (thermal) insulator / reduces energy loss']),
    P('The temperature rises from 19.5 °C to 31.0 °C. Calculate the temperature change and state the type of reaction.', 2, ['11.5 °C', 'exothermic'], C(11.5, '°C', '31.0-19.5', 0.005)),
    P('Give two control variables.', 2, ['volume / concentration of copper sulfate', 'mass / surface area of metal / starting temperature']),
    P('Explain why the measured temperature rise is lower than expected.', 2, ['energy transferred to the surroundings / to the cup / through the open top', 'so not all the energy heats the solution'])
  ]));

  /* ---------- chem-en2 Reaction profiles ---------- */
  L('chem-en2', 'Going further: reading reaction profiles', `<p>Chemical reactions can occur only when reacting particles collide with sufficient energy. The minimum energy needed is the <b>activation energy</b>. A reaction profile (energy level diagram) plots energy against the progress of the reaction. It shows the energy of the reactants and products, the activation energy as a hump from the reactants to the peak, and the overall energy change as the difference between reactants and products.</p><p>For an exothermic reaction the products are lower than the reactants and the overall change (ΔH) is negative; for an endothermic reaction the products are higher and ΔH is positive. A catalyst provides a different pathway with a lower activation energy, so the peak is lower, but the energy of the reactants and products, and therefore the overall energy change, is unchanged.</p>` + ul(['Label arrows clearly: activation energy starts at the reactants.', 'Overall energy change arrow points from reactants to products (down for exothermic).', 'An endothermic reaction still needs activation energy.']));
  E('chem-en2', 'Sketching an endothermic profile', 'Describe the profile for an endothermic reaction with activation energy 120 kJ/mol and energy change +40 kJ/mol.', [
    ['Levels', 'Products 40 kJ/mol above the reactants.', ['products higher than reactants']],
    ['Peak', 'Hump 120 kJ/mol above the reactants.', [`${res('Peak at reactants + 120; products at reactants + 40; peak is 80 above the products.')}`]]], { chk: [['120-40', 80]] });
  E('chem-en2', 'Effect of a catalyst on a profile', 'A catalyst lowers the activation energy of a reaction from 180 to 110 kJ/mol. The overall energy change is −60 kJ/mol. What changes?', [
    ['Activation energy', 'Lowered by the catalyst.', ['180 − 110 = 70 kJ/mol lower']],
    ['Energy change', 'Unchanged.', [`${res('ΔH stays −60 kJ/mol; only the peak is lower.')}`]]], { chk: [['180-110', 70]] });
  X('chem-en2', Q('The reaction profile for a reaction shows reactants at 200 kJ/mol, a peak at 350 kJ/mol and products at 120 kJ/mol.', [
    P('Calculate the activation energy.', 1, ['150 kJ/mol'], C(150, 'kJ/mol', '350-200', 0)),
    P('Calculate the overall energy change and state whether the reaction is exothermic or endothermic.', 2, ['−80 kJ/mol', 'exothermic'], C(-80, 'kJ/mol', '120-200', 0)),
    P('Describe how the profile changes when a catalyst is added.', 2, ['the peak / activation energy is lower', 'the reactant and product levels (energy change) stay the same']),
    P('Explain why the reaction does not start until it is heated, even though it is exothermic.', 2, ['particles need energy equal to the activation energy', 'to react when they collide / to break bonds first']),
    P('State what is meant by activation energy.', 1, ['the minimum energy particles need to react (when they collide)'])
  ]));

  /* ---------- chem-en3 Bond energies (HT) ---------- */
  L('chem-en3', 'Going further: bond energy calculations', `<p>During a reaction, energy must be supplied to <b>break</b> bonds in the reactants and energy is released when <b>new bonds form</b> in the products. The overall energy change = energy needed to break bonds − energy released making bonds. If more energy is released than is taken in, the reaction is exothermic (negative); if more is taken in, it is endothermic (positive).</p><p>To calculate: draw or write out every bond in every molecule, multiply by the balancing numbers, and add up separately for reactants and products. For example, in CH₄ + 2O₂ → CO₂ + 2H₂O there are 4 C–H and 2 O=O bonds to break, and 2 C=O and 4 O–H bonds to make. Common errors are forgetting balancing numbers, counting a double bond as a single bond, and subtracting the wrong way round.</p>` + ul(['Always subtract: bonds broken − bonds made.', 'Bond energies are mean values, so calculated ΔH may differ from measured values.', 'Higher tier only.']), true);
  E('chem-en3', 'Combustion of methane', 'Calculate ΔH for CH₄ + 2O₂ → CO₂ + 2H₂O. Bond energies (kJ/mol): C–H 412, O=O 498, C=O 805, O–H 464.', [
    ['Bonds broken', '4 C–H + 2 O=O.', ['4 × 412 + 2 × 498 = 2644']],
    ['Bonds made', '2 C=O + 4 O–H.', ['2 × 805 + 4 × 464 = 3466']],
    ['Overall', 'Broken − made.', [`2644 − 3466 = ${res('−822 kJ/mol')}`]]], { chk: [['4*412+2*498', 2644], ['2*805+4*464', 3466], ['2644-3466', -822]], higher: true });
  E('chem-en3', 'Finding an unknown bond energy', 'For H₂ + Br₂ → 2HBr, ΔH = −103 kJ/mol. H–H = 436, Br–Br = 193 kJ/mol. Find the H–Br bond energy.', [
    ['Set up', 'ΔH = broken − made.', ['−103 = (436 + 193) − 2x']],
    ['Solve', 'Rearrange.', ['2x = 629 + 103 = 732', `${res('x = 366 kJ/mol')}`]]], { chk: [['(436+193+103)/2', 366]], higher: true });
  X('chem-en3', Q('Hydrogen peroxide decomposes: 2H–O–O–H → 2H–O–H + O=O. Bond energies (kJ/mol): O–H 464, O–O 146, O=O 498.', [
    H(P('Calculate the energy needed to break all the bonds in the reactants.', 2, ['bonds broken = 4 O–H + 2 O–O', '4 × 464 + 2 × 146 = 2148 kJ/mol'], C(2148, 'kJ/mol', '4*464+2*146', 0.001))),
    H(P('Calculate the energy released when the bonds in the products form.', 2, ['bonds made = 4 O–H + 1 O=O', '4 × 464 + 498 = 2354 kJ/mol'], C(2354, 'kJ/mol', '4*464+498', 0.001))),
    H(P('Calculate the overall energy change and state whether the reaction is exothermic or endothermic.', 3, ['2148 − 2354', '= −206 kJ/mol', 'exothermic (negative value / more energy released than taken in)'], C(-206, 'kJ/mol', '2148-2354', 0.001)))
  ]));

  /* ---------- chem-en4 Cells, batteries and fuel cells ---------- */
  L('chem-en4', 'Going further: cells and fuel cells', `<p>A simple cell is made by connecting two different metals in contact with an electrolyte. The voltage depends on the <b>types of electrode</b> and the electrolyte: the further apart the metals are in the reactivity series, the bigger the voltage. A battery consists of two or more cells connected in series to give a larger voltage. In non-rechargeable cells (such as alkaline batteries) the chemical reactions stop when a reactant is used up. Rechargeable cells can be recharged because the reactions are reversed when an external current is supplied.</p><p>A <b>hydrogen fuel cell</b> is supplied continuously with hydrogen and oxygen, and the hydrogen is oxidised to water, producing a potential difference. Compared with rechargeable batteries, fuel cells do not need to be recharged (just refuelled), produce only water and are not limited by charge capacity; but hydrogen is a flammable gas, hard to store, and is often made using fossil fuels. Batteries are easier to store but contain toxic metals and have limited lifetimes.</p>` + ul(['(HT) Fuel cell half equations: anode 2H₂ → 4H⁺ + 4e⁻; cathode O₂ + 4H⁺ + 4e⁻ → 2H₂O.', 'Overall: 2H₂ + O₂ → 2H₂O.', 'If the same metal is used for both electrodes, the voltage is zero.']));
  E('chem-en4', 'Predicting cell voltage', 'Cells were made with copper and each of zinc, iron and magnesium. Predict the order of voltages.', [
    ['Reactivity differences', 'Mg is furthest above Cu, then Zn, then Fe.', ['Mg > Zn > Fe']],
    ['Prediction', 'Bigger difference → bigger voltage.', [`${res('Mg–Cu > Zn–Cu > Fe–Cu')}`]]]);
  E('chem-en4', 'Fuel cell versus battery', 'Give one advantage and one disadvantage of hydrogen fuel cells for cars compared with rechargeable batteries.', [
    ['Advantage', 'Refuelling is quick; only water is produced.', ['no charging time']],
    ['Disadvantage', 'Hydrogen is difficult to store safely.', [`${res('Quick refuel, water only; but hydrogen storage and production are problems.')}`]]]);
  X('chem-en4', Q('A student makes simple cells using different pairs of metals dipped into salt solution.', [
    P('A cell made with two copper electrodes gives 0 V. Explain why.', 1, ['the electrodes are the same metal / no difference in reactivity']),
    P('Explain why a zinc and copper cell gives a larger voltage than an iron and copper cell.', 2, ['zinc is more reactive than iron', 'bigger difference in reactivity from copper gives bigger voltage']),
    P('Explain why an alkaline battery eventually stops producing a voltage.', 1, ['a reactant is used up']),
    H(P('Write the overall equation for the reaction in a hydrogen fuel cell.', 1, ['2H₂ + O₂ → 2H₂O'])),
    P('Give two disadvantages of hydrogen fuel cells.', 2, ['hydrogen is flammable / explosive / difficult to store', 'hydrogen is usually made from fossil fuels / expensive'])
  ]));

  /* ---------- chem-en5 Review ---------- */
  L('chem-en5', 'Linking the ideas: energy in reactions', `<p>Every reaction involves breaking and making bonds. Breaking bonds takes in energy and making bonds releases energy. If the bonds made are stronger overall, energy is released and the reaction is exothermic; the temperature of the surroundings rises and the products are lower on a reaction profile. The activation energy explains why reactions need starting, and why catalysts speed them up. Chemical cells use reactions to transfer energy electrically.</p>` + ul(['Exothermic: ΔH negative, temperature rises.', 'Endothermic: ΔH positive, temperature falls.', 'Bond energy (HT): broken − made.', 'Cells: bigger reactivity difference, bigger voltage.']));
  E('chem-en5', 'Interpreting data', 'Reaction A: temperature 20 → 32 °C. Reaction B: 20 → 14 °C. Which reaction has products at a lower energy than the reactants?', [
    ['A', 'Temperature rises → exothermic.', ['products lower']],
    ['B', 'Temperature falls → endothermic.', [`${res('Reaction A.')}`]]]);
  X('chem-en5', Q('Hydrogen burns in oxygen: 2H₂ + O₂ → 2H₂O. The reaction is exothermic.', [
    P('Sketch or describe the reaction profile for this reaction. Label the activation energy and the overall energy change.', 3, ['products below reactants', 'activation energy shown from reactants to the peak', 'overall energy change shown from reactants to products (downwards)']),
    P('Explain in terms of bonds why the reaction is exothermic.', 2, ['energy released making new bonds (O–H)', 'is greater than energy needed to break bonds (H–H and O=O)']),
    H(P('Bond energies (kJ/mol): H–H 436, O=O 498, O–H 464. Calculate the energy change for the reaction.', 3, ['broken: 2 × 436 + 498 = 1370', 'made: 4 × 464 = 1856', '1370 − 1856 = −486 kJ/mol'], C(-486, 'kJ/mol', '(2*436+498)-4*464', 0.001))),
    P('Give one use of an exothermic reaction.', 1, ['hand warmers / self-heating cans'])
  ]));

  /* ---------- chem-ra1 Measuring rates ---------- */
  L('chem-ra1', 'Going further: measuring and graphing rates', `<p>The rate of a reaction can be found by measuring the quantity of a reactant used or the quantity of a product formed over time: <b>mean rate = quantity ÷ time</b>. Quantities may be measured as mass in grams or volume in cm³, giving units of g/s or cm³/s; (HT) amounts in moles give mol/s. Methods include measuring the volume of gas with a gas syringe or upturned measuring cylinder, measuring the loss in mass as gas escapes, and timing how long a precipitate takes to hide a cross.</p><p>On a graph of product against time, the steepest gradient is at the start, when the concentration of reactants is greatest. The line becomes less steep and then flat when a reactant is used up. (HT) The rate at a particular time is the gradient of the <b>tangent</b> to the curve at that time: draw a straight line touching the curve, pick two points far apart on it, and divide the change in y by the change in x.</p>` + ul(['Mean rate over a period = change in quantity ÷ time taken.', 'A steeper curve means a faster rate.', 'The final amount of product depends on the amount of limiting reactant, not on the rate.']));
  E('chem-ra1', 'Mean rate over an interval', 'Gas volume: 18 cm³ at 20 s and 42 cm³ at 50 s. Find the mean rate between 20 s and 50 s.', [
    ['Change in volume', '42 − 18.', ['24 cm³']],
    ['Divide by time', '50 − 20 = 30 s.', [`24 ÷ 30 = ${res('0.80 cm³/s')}`]]], { chk: [['(42-18)/(50-20)', 0.8]] });
  E('chem-ra1', 'Rate from a tangent', 'A tangent at 40 s passes through (10 s, 15 cm³) and (70 s, 63 cm³). Find the rate at 40 s.', [
    ['Gradient', 'Δy ÷ Δx.', ['(63 − 15) ÷ (70 − 10)']],
    ['Answer', 'Calculate.', [`48 ÷ 60 = ${res('0.80 cm³/s')}`]]], { chk: [['(63-15)/(70-10)', 0.8]], higher: true });
  X('chem-ra1', Q('Marble chips react with hydrochloric acid in a conical flask on a balance. The mass falls by 2.4 g in 120 s.', [
    P('Explain why the mass falls.', 1, ['carbon dioxide gas is produced and escapes']),
    P('Calculate the mean rate of reaction in g/s.', 2, ['2.4 ÷ 120', '= 0.020 g/s'], C(0.02, 'g/s', '2.4/120')),
    P('Describe how the rate changes during the reaction and explain why.', 2, ['rate decreases / slows down', 'concentration of acid decreases (fewer particles, so fewer collisions)']),
    P('Give one other method of measuring the rate of this reaction.', 1, ['measure the volume of gas with a gas syringe / upturned measuring cylinder']),
    P('Suggest why cotton wool is placed in the neck of the flask.', 1, ['lets gas out but stops acid spray escaping (which would affect the mass)'])
  ]));

  /* ---------- chem-ra2 Factors affecting rate ---------- */
  L('chem-ra2', 'Going further: collision theory in detail', `<p>Collision theory explains how various factors affect rates. Reactions happen only when particles collide with at least the activation energy. The rate depends on the <b>frequency of collisions</b> and the <b>energy of the collisions</b>. Increasing concentration (solutions) or pressure (gases) puts more particles in the same volume, so collisions happen more often. Increasing surface area, by using smaller pieces or powder, exposes more particles to the other reactant, so more frequent collisions. Increasing temperature makes particles move faster, so they collide more often <b>and</b> a greater proportion of collisions have energy greater than the activation energy, which is the more important effect.</p><p>In the required practical, the effect of concentration is investigated by measuring gas volume, or by timing the disappearing cross with sodium thiosulfate and hydrochloric acid. Only one variable is changed; the others are kept constant.</p>` + ul(['Use "more frequent collisions" or "more collisions per second", not just "more collisions".', 'Doubling concentration roughly doubles the rate for many reactions.', 'A small temperature rise causes a large increase in rate.']));
  E('chem-ra2', 'Explaining surface area', 'Explain why magnesium powder reacts faster with acid than a ribbon of the same mass.', [
    ['Surface area', 'Powder has a much larger surface area.', ['more magnesium atoms exposed']],
    ['Collisions', 'More acid particles can collide with magnesium at once.', [`${res('More frequent collisions, so a faster rate.')}`]]]);
  E('chem-ra2', 'Comparing two graphs', 'Experiment A uses 1.0 mol/dm³ acid and B uses 0.5 mol/dm³, both with excess marble. Both use 50 cm³ of acid. Compare the graphs of gas volume against time.', [
    ['Initial gradient', 'A is steeper (higher concentration).', ['A faster']],
    ['Final volume', 'A has twice the moles of acid (the limiting reactant).', [`${res('A is steeper and levels off at twice the volume of B.')}`]]]);
  X('chem-ra2', Q('A student investigates how the concentration of hydrochloric acid affects the rate of reaction with sodium thiosulfate.', [
    P('Describe a method the student could use, naming the measurements taken.', 3, ['mix sodium thiosulfate and acid in a flask over a cross drawn on paper', 'time how long until the cross disappears', 'repeat with different concentrations of acid (same volumes and temperature)']),
    P('Explain, using collision theory, why the reaction is faster with a more concentrated acid.', 2, ['more particles in the same volume', 'more frequent collisions']),
    P('Explain why increasing the temperature increases the rate.', 2, ['particles move faster so collide more often', 'more collisions have energy equal to or greater than the activation energy'])
  ]));

  /* ---------- chem-ra3 Catalysts and the disappearing cross ---------- */
  L('chem-ra3', 'Going further: catalysts', `<p>A <b>catalyst</b> changes the rate of a reaction but is not used up. Different reactions need different catalysts; enzymes are biological catalysts. Catalysts increase the rate by providing a different pathway for the reaction with a <b>lower activation energy</b>, so a greater proportion of collisions are successful. Because catalysts are not used up, only small amounts are needed, and they can be reused, saving money and energy (reactions can run at lower temperatures).</p><p>A catalyst does not appear in the overall equation (it may be written above the arrow). You can show a substance is a catalyst by measuring its mass before and after the reaction (filter, wash, dry and weigh) and by showing the reaction is faster with it. In the disappearing cross practical, the relative rate is 1/time, with units s⁻¹: a shorter time means a faster reaction.</p>` + ul(['Transition metals and their oxides are common catalysts (Fe, Pt, MnO₂).', 'A catalyst does not change the amount of product.', 'Relative rate = 1000 ÷ time is sometimes used to give easier numbers.']));
  E('chem-ra3', 'Relative rates', 'At 20 °C the cross disappears in 80 s; at 40 °C in 20 s. Calculate the relative rates and compare.', [
    ['Relative rate', '1 ÷ time.', ['20 °C: 1 ÷ 80 = 0.0125 s⁻¹', '40 °C: 1 ÷ 20 = 0.050 s⁻¹']],
    ['Compare', 'Divide.', [`0.050 ÷ 0.0125 = ${res('4 times faster')}`]]], { chk: [['1/80', 0.0125], ['1/20', 0.05], ['0.05/0.0125', 4]] });
  E('chem-ra3', 'Proving a catalyst is unchanged', 'Describe how to show that manganese(IV) oxide is a catalyst for hydrogen peroxide decomposition.', [
    ['Rate', 'Compare rate of oxygen production with and without MnO₂.', ['faster with MnO₂']],
    ['Mass', 'Weigh before; filter, dry and weigh after.', [`${res('Faster reaction and unchanged mass show it is a catalyst.')}`]]]);
  X('chem-ra3', Q('Hydrogen peroxide decomposes: 2H₂O₂ → 2H₂O + O₂. Catalysts can speed up this reaction.', [
    P('Explain how a catalyst increases the rate of a reaction.', 2, ['provides an alternative pathway / route', 'with a lower activation energy']),
    P('Two catalysts were tested. Catalyst X gave 50 cm³ of oxygen in 40 s; catalyst Y gave 50 cm³ in 25 s. Calculate the mean rate for catalyst Y.', 1, ['2.0 cm³/s'], C(2.0, 'cm³/s', '50/25')),
    P('State which catalyst is more effective and why.', 1, ['Y: it gives the same volume in less time / higher rate']),
    P('Explain why using a catalyst in industry can reduce costs.', 2, ['reaction can be carried out at lower temperature / less energy needed', 'catalyst is not used up so can be reused'])
  ]));

  /* ---------- chem-ra4 Reversible reactions ---------- */
  L('chem-ra4', 'Going further: reversible reactions and energy', `<p>In some reactions the products can react to produce the original reactants. These are <b>reversible reactions</b>, shown with the symbol ⇌. The direction can be changed by changing the conditions. Heating ammonium chloride decomposes it to ammonia and hydrogen chloride; when the gases cool they recombine. Heating blue hydrated copper sulfate gives white anhydrous copper sulfate and water; adding water turns it blue again, which is used as a test for water.</p><p>If a reversible reaction is exothermic in one direction, it is endothermic in the opposite direction, and the <b>same amount of energy</b> is transferred in each case. Adding water to anhydrous copper sulfate is exothermic (the mixture warms up), so dehydrating hydrated copper sulfate is endothermic and needs continuous heating.</p>` + ul(['Hydrated copper sulfate ⇌ anhydrous copper sulfate + water.', 'Anhydrous cobalt chloride paper turns from blue to pink with water.', 'A reversible reaction in a closed system can reach equilibrium.']));
  E('chem-ra4', 'Energy in a reversible reaction', 'Adding water to 1 mol of anhydrous copper sulfate releases 78 kJ. How much energy is needed to dehydrate 1 mol of hydrated copper sulfate?', [
    ['Rule', 'Same energy, opposite direction.', ['forward exothermic → reverse endothermic']],
    ['Answer', 'Equal amount.', [`${res('78 kJ taken in (endothermic, +78 kJ)')}`]]]);
  E('chem-ra4', 'A test for water', 'Explain how anhydrous copper sulfate can be used to test whether a liquid contains water.', [
    ['Observation', 'White anhydrous copper sulfate turns blue with water.', ['colour change white → blue']],
    ['Limitation', 'It does not show the water is pure.', [`${res('Blue shows water is present; check boiling point (100 °C) for purity.')}`]]]);
  X('chem-ra4', Q('Ammonium chloride is heated in a test tube: NH₄Cl ⇌ NH₃ + HCl.', [
    P('State what the symbol ⇌ means.', 1, ['the reaction is reversible']),
    P('Describe what is seen near the cool top of the test tube and explain why.', 2, ['white solid forms', 'ammonia and hydrogen chloride recombine on cooling']),
    P('The forward reaction is endothermic. State what type of reaction occurs at the top of the tube and how the energy changes compare.', 2, ['exothermic', 'same amount of energy transferred']),
    P('Hydrated copper sulfate is blue. Describe what happens when it is heated, and what happens when water is added afterwards.', 4, ['turns white', 'water / steam given off', 'adding water turns it blue again', 'and the mixture gets hot (exothermic)'])
  ]));

  /* ---------- chem-ra5 Equilibrium ---------- */
  L('chem-ra5', 'Going further: predicting shifts in equilibrium', `<p>Equilibrium is reached in a <b>closed system</b> when the forward and reverse reactions occur at exactly the same rate. The amounts of reactants and products then stay constant, but they are not necessarily equal, and both reactions continue (dynamic equilibrium).</p><div class="htbox"><p><span class="ht">Higher</span> Le Chatelier’s principle predicts the effect of changing conditions. Increasing the concentration of a reactant makes more product form until equilibrium is restored; decreasing the concentration of a product does the same. Increasing temperature shifts equilibrium in the endothermic direction; decreasing it favours the exothermic direction. Increasing pressure shifts equilibrium towards the side with fewer molecules of gas. If there are equal numbers of gas molecules on both sides, pressure has no effect on the position. A catalyst does not change the position; it only makes equilibrium reached faster.</p></div>` + ul(['Count gas molecules using balancing numbers; ignore solids and liquids.', 'State the direction of shift and the effect on yield.', 'Haber process: N₂ + 3H₂ ⇌ 2NH₃, forward exothermic.']));
  E('chem-ra5', 'Effect of temperature on yield', '2SO₂ + O₂ ⇌ 2SO₃ (forward exothermic). Predict the effect of raising the temperature on the yield of SO₃.', [
    ['Direction', 'Higher temperature favours the endothermic (reverse) reaction.', ['shifts left']],
    ['Yield', 'Less product at equilibrium.', [`${res('The yield of SO₃ decreases.')}`]]], { desc: true, higher: true });
  E('chem-ra5', 'Equal gas molecules', 'H₂ + Cl₂ ⇌ 2HCl. Explain the effect of increasing pressure on the position of equilibrium.', [
    ['Count', 'Left 2, right 2.', ['equal numbers of gas molecules']],
    ['Conclusion', 'Neither side reduces pressure.', [`${res('No effect on the position of equilibrium.')}`]]], { desc: true, higher: true });
  X('chem-ra5', Q('Methanol is made by the reaction CO(g) + 2H₂(g) ⇌ CH₃OH(g). The forward reaction is exothermic.', [
    P('State what is meant by equilibrium for this reaction.', 1, ['forward and reverse reactions happen at the same rate (in a closed system)']),
    H(P('Predict the effect of increasing the pressure on the yield of methanol. Explain your answer.', 2, ['yield increases', 'equilibrium shifts to the side with fewer gas molecules (3 → 1)'])),
    H(P('Predict the effect of increasing the temperature on the yield of methanol. Explain your answer.', 2, ['yield decreases', 'equilibrium shifts in the endothermic (reverse) direction'])),
    H(P('Explain why adding a catalyst does not change the yield.', 2, ['catalyst speeds up forward and reverse reactions equally', 'so the position of equilibrium is unchanged (equilibrium is reached faster)']))
  ]));

  /* ---------- chem-ra6 Review ---------- */
  L('chem-ra6', 'Linking the ideas: rate and extent', `<p>Rate is about how <b>fast</b> a reaction happens; extent (yield at equilibrium) is about how <b>far</b> it goes. Collision theory explains rate: frequency and energy of collisions. Le Chatelier’s principle (HT) explains extent in closed systems. Industrial conditions are often a compromise between a fast rate and a high yield, and a catalyst helps the rate without affecting the yield.</p>` + ul(['Concentration, pressure, surface area: more frequent collisions.', 'Temperature: more frequent and more energetic collisions.', 'Catalyst: lower activation energy.', 'Equilibrium: closed system, equal rates.']));
  E('chem-ra6', 'Rate versus yield', 'A reaction is exothermic in the forward direction. Explain why a moderate temperature is chosen.', [
    ['Yield', 'Low temperature favours the exothermic forward reaction.', ['higher yield at low T']],
    ['Rate', 'Low temperature makes the reaction slow.', [`${res('A moderate temperature gives an acceptable yield at a reasonable rate.')}`]]]);
  X('chem-ra6', Q('Calcium carbonate reacts with hydrochloric acid. A student measures the volume of carbon dioxide every 30 s.', [
    P('After 90 s the volume is 54 cm³. Calculate the mean rate.', 1, ['0.60 cm³/s'], C(0.6, 'cm³/s', '54/90')),
    P('The experiment is repeated with powdered calcium carbonate of the same mass. Describe and explain how the graph of volume against time changes.', 3, ['steeper at the start / faster', 'larger surface area so more frequent collisions', 'same final volume (same amount of reactant)']),
    P('Explain why the rate decreases over time.', 2, ['acid concentration decreases / reactants used up', 'fewer collisions per second']),
    P('Explain why the reaction stops.', 1, ['one reactant (the limiting reactant) is used up']),
    P('Give one way of measuring the volume of gas accurately.', 1, ['gas syringe']),
    P('Suggest why the experiment should be repeated.', 1, ['to check repeatability / identify anomalies / calculate a mean'])
  ]));
})();
