/* Fill-the-gaps for Quantitative chemistry (chem-qc1–chem-qc8), Chemical changes (chem-cc1–chem-cc10), Energy changes (chem-en1–chem-en4) and Rates (chem-ra1–chem-ra5). A_r: H 1, C 12, N 14, O 16, Na 23, Mg 24, S 32, Cl 35.5, Ca 40. Avogadro 6.02 × 10²³; 24 dm³ per mol at room temperature and pressure. Every number is recomputed by tools/verify-depth.cjs. */
(() => {
  const add = GcseDepth.add, G = (q, lines, calc, why, higher) => Object.assign({ q, lines, calc: calc || [], why }, higher ? { higher: true } : {});

  add('chem-qc1', { gaps: [
    G('Relative formula mass of calcium carbonate, CaCO₃ (A<sub>r</sub>: Ca 40, C 12, O 16).', ['M<sub>r</sub> = 40 + 12 + (3 × 16) = [[100]]'], ['40+12+3*16'], 'Add the relative atomic masses of every atom in the formula.'),
    G('Relative formula mass of magnesium hydroxide, Mg(OH)₂ (A<sub>r</sub>: Mg 24, O 16, H 1).', ['M<sub>r</sub> = 24 + 2 × (16 + 1) = [[58]]'], ['24+2*(16+1)'], 'The 2 outside the bracket multiplies both O and H.'),
    G('2.4 g of magnesium burns in oxygen and forms 4.0 g of magnesium oxide.', ['Mass of oxygen that combined = 4.0 − 2.4 = [[1.6]] g'], ['4.0-2.4'], 'Mass is conserved: total mass of reactants = total mass of products.'),
    G('Balanced equations.', ['In a balanced equation the number of each type of [[atom|atoms]] is the same on both sides, because atoms are not [[created|made|destroyed|lost]].'], [], 'No atoms are created or destroyed in a chemical reaction.')
  ] });
  add('chem-qc2', { gaps: [
    G('Magnesium heated in an open crucible.', ['The mass of the contents [[increases|rises|goes up]] because magnesium combines with [[oxygen]] from the air.'], [], 'The oxygen is a reactant that was not weighed at the start.'),
    G('Marble chips react with acid in an open flask.', ['The mass on the balance [[decreases|falls|goes down]] because carbon dioxide [[gas|escapes]] leaves the flask.'], [], 'A gas product escapes into the air.'),
    G('Three readings of mass: 21.2 g, 21.4 g and 21.3 g.', ['Mean = [[21.3]] g. Range = 21.4 − 21.2 = [[0.2]] g, so the uncertainty is ± half the range = ± [[0.1]] g.'], ['(21.2+21.4+21.3)/3', '21.4-21.2', '0.2/2'], 'Uncertainty = range ÷ 2.'),
    G('A magnesium ribbon of mass 1.20 g gives 2.00 g of magnesium oxide in a closed system.', ['The oxygen added has a mass of 2.00 − 1.20 = [[0.80]] g.'], ['2.00-1.20'], 'The mass gain is the mass of oxygen that combined.')
  ] });
  add('chem-qc3', { gaps: [
    G('How many moles in 9.0 g of water (M<sub>r</sub> = 18)?', ['moles = mass ÷ M<sub>r</sub> = 9.0 ÷ 18 = [[0.5|0.50]] mol'], ['9.0/18'], 'Divide the mass in grams by the relative formula mass.'),
    G('What is the mass of 0.25 mol of sodium chloride, NaCl (M<sub>r</sub> = 58.5)?', ['mass = moles × M<sub>r</sub> = 0.25 × 58.5 = [[14.6|14.625]] g'], ['0.25*58.5'], 'Rearrange moles = mass ÷ M<sub>r</sub>.'),
    G('How many particles in 0.5 mol of a substance? The Avogadro constant is 6.02 × 10²³ per mole.', ['0.5 × 6.02 × 10²³ = [[3.01]] × 10²³ particles'], ['0.5*6.02'], 'Particles = moles × the Avogadro constant.'),
    G('The mass of 44 g of carbon dioxide, CO₂ (M<sub>r</sub> = 44).', ['It contains [[1]] mol, because the mass in grams equals the [[M<sub>r</sub>|Mr|relative formula mass]].'], ['44/44'], 'One mole of any substance has a mass in grams equal to its M<sub>r</sub>.')
  ] });
  add('chem-qc4', { gaps: [
    G('12 g of magnesium (A<sub>r</sub> = 24) burns: 2Mg + O₂ → 2MgO. M<sub>r</sub> of MgO = 40.', ['Moles of Mg = 12 ÷ 24 = [[0.5|0.50]] mol. The ratio Mg : MgO is 1 : 1, so mass of MgO = 0.5 × 40 = [[20]] g'], ['12/24', '0.5*40'], 'Use the balanced equation ratio to find moles of product.'),
    G('50 g of calcium carbonate is heated: CaCO₃ → CaO + CO₂ (M<sub>r</sub>: CaCO₃ 100, CaO 56).', ['Moles of CaCO₃ = 50 ÷ 100 = [[0.5|0.50]] mol; mass of CaO = 0.5 × 56 = [[28]] g'], ['50/100', '0.5*56'], 'The ratio CaCO₃ : CaO is 1 : 1.'),
    G('0.30 mol of magnesium reacts with 0.20 mol of oxygen: 2Mg + O₂ → 2MgO.', ['0.30 mol Mg needs 0.30 ÷ 2 = [[0.15]] mol O₂. Oxygen is in [[excess]], so the limiting reactant is [[Mg|magnesium]].'], ['0.30/2'], 'The limiting reactant is used up first and limits the amount of product.', true),
    G('Reacting masses.', ['In the equation 2H₂ + O₂ → 2H₂O the ratio of moles H₂ : O₂ is [[2]] : [[1]].'], ['2', '1'], 'The balancing numbers give the mole ratio.')
  ] });
  add('chem-qc5', { gaps: [
    G('20 g of salt is dissolved in 500 cm³ of solution.', ['Volume = 500 ÷ 1000 = [[0.5|0.50]] dm³; concentration = 20 ÷ 0.5 = [[40]] g/dm³'], ['500/1000', '20/0.5'], 'Convert cm³ to dm³ by dividing by 1000.'),
    G('A solution has a concentration of 30 g/dm³. How much solute is in 250 cm³?', ['mass = 30 × 0.25 = [[7.5]] g'], ['30*0.25'], 'mass = concentration × volume (in dm³).'),
    G('Units.', ['1 dm³ = [[1000]] cm³, so 25 cm³ = [[0.025]] dm³.'], ['1000', '25/1000'], 'Divide by 1000 to go from cm³ to dm³.'),
    G('Diluting.', ['Adding water to a solution [[decreases|reduces|lowers]] its concentration but the mass of solute [[stays the same|does not change|is unchanged]].'], [], 'The same amount of solute is spread through a larger volume.')
  ] });
  add('chem-qc6', { gaps: [
    G('A student expects 10.0 g of product but makes 8.0 g.', ['percentage yield = 8.0 ÷ 10.0 × 100 = [[80]]%'], ['8.0/10.0*100'], 'Percentage yield = actual yield ÷ theoretical yield × 100.'),
    G('The theoretical yield is 25 g and the percentage yield is 80%.', ['actual yield = 25 × 80 ÷ 100 = [[20]] g'], ['25*80/100'], 'Rearrange the percentage yield equation.'),
    G('Atom economy of CaCO₃ → CaO + CO₂ for making CaO (M<sub>r</sub>: CaCO₃ 100, CaO 56).', ['atom economy = 56 ÷ 100 × 100 = [[56]]%'], ['56/100*100'], 'Atom economy = M<sub>r</sub> of desired product ÷ total M<sub>r</sub> of reactants × 100.'),
    G('Reasons for a yield below 100%.', ['Some product is [[lost]] during separation, the reaction may be [[reversible]], or there may be side reactions.'], [], 'A real yield is almost always lower than the theoretical yield.')
  ] });
  add('chem-qc7', { gaps: [
    G('0.10 mol of solute is dissolved to make 250 cm³ of solution.', ['concentration = 0.10 ÷ 0.250 = [[0.4|0.40]] mol/dm³'], ['0.10/0.250'], 'Convert the volume to dm³ first.'),
    G('How many moles in 25.0 cm³ of 0.20 mol/dm³ solution?', ['moles = 0.20 × 0.0250 = [[0.005|0.0050]] mol'], ['0.20*0.0250'], 'moles = concentration × volume in dm³.'),
    G('25.0 cm³ of 0.100 mol/dm³ NaOH is neutralised by 20.0 cm³ of HCl (1 : 1 reaction).', ['moles NaOH = 0.100 × 0.0250 = [[0.0025]] mol; concentration of HCl = 0.0025 ÷ 0.0200 = [[0.125]] mol/dm³'], ['0.100*0.0250', '0.0025/0.0200'], 'In a 1 : 1 reaction, moles of acid = moles of alkali.', true),
    G('Changing units of concentration.', ['A 0.50 mol/dm³ solution of NaOH (M<sub>r</sub> = 40) has a concentration of 0.50 × 40 = [[20]] g/dm³.'], ['0.50*40'], 'Multiply mol/dm³ by M<sub>r</sub> to get g/dm³.', true)
  ] });
  add('chem-qc8', { gaps: [
    G('Molar gas volume.', ['One mole of any gas occupies [[24]] dm³ at room temperature and pressure.'], ['24'], 'Avogadro’s law: equal volumes of gases contain equal numbers of molecules.'),
    G('What is the volume of 0.50 mol of gas at room temperature and pressure?', ['volume = 0.50 × 24 = [[12]] dm³'], ['0.50*24'], 'volume = moles × 24.'),
    G('What is the mass of 48 dm³ of carbon dioxide (M<sub>r</sub> = 44)?', ['moles = 48 ÷ 24 = [[2]] mol; mass = 2 × 44 = [[88]] g'], ['48/24', '2*44'], 'Convert the volume to moles first.'),
    G('2H₂ + O₂ → 2H₂O. What volume of oxygen reacts with 40 cm³ of hydrogen?', ['The volume ratio H₂ : O₂ is 2 : 1, so volume of O₂ = 40 ÷ 2 = [[20]] cm³'], ['40/2'], 'For gases the mole ratio is also the volume ratio.')
  ] });

  add('chem-cc1', { gaps: [
    G('Metals and oxygen.', ['Metals react with oxygen to form metal [[oxides|oxide]]. In this reaction the metal is [[oxidised]].'], [], 'Gaining oxygen is oxidation.'),
    G('Balance the equation for aluminium burning.', ['[[4]]Al + [[3]]O₂ → [[2]]Al₂O₃'], ['4', '3', '2'], 'Balance oxygen first: 6 atoms on the right needs 3 O₂ on the left.'),
    G('Reactivity series.', ['The order of reactivity is potassium, sodium, calcium, magnesium, [[aluminium]], [[zinc]], iron, [[copper]]. Carbon and hydrogen are used as reference points.'], [], 'Reactivity is how readily a metal forms positive ions.'),
    G('Reactions with water and acid.', ['Metals above hydrogen in the reactivity series react with [[dilute acid|acids|acid]] to produce [[hydrogen]] gas.'], [], 'Copper does not react because it is below hydrogen.')
  ] });
  add('chem-cc2', { gaps: [
    G('Extraction.', ['A metal [[less]] reactive than carbon is extracted from its oxide by [[reduction|heating with carbon]] using carbon.'], [], 'Iron oxide is reduced when heated with carbon.'),
    G('Extracting iron.', ['Iron(III) oxide + carbon → iron + carbon [[dioxide]]. The iron oxide loses [[oxygen]], so it is reduced.'], [], 'Reduction is the loss of oxygen.'),
    G('Displacement.', ['Zinc + copper sulfate → zinc [[sulfate]] + [[copper]]. Zinc displaces copper because zinc is more [[reactive]].'], [], 'A more reactive metal displaces a less reactive metal from its compound.'),
    G('Metals more reactive than carbon.', ['Aluminium cannot be extracted using carbon, so it is extracted by [[electrolysis]].'], [], 'Carbon is not reactive enough to take oxygen from aluminium oxide.')
  ] });
  add('chem-cc3', { gaps: [
    G('OIL RIG.', ['Oxidation Is [[Loss]] of electrons and Reduction Is [[Gain]] of electrons.'], [], 'The mnemonic stands for the two definitions.'),
    G('Complete the half equation for magnesium.', ['Mg → Mg²⁺ + [[2]]e⁻. In this half equation magnesium [[loses]] electrons, so it is [[oxidised]].'], ['2'], 'The charge on the ion shows how many electrons were lost.'),
    G('Complete the half equation for copper ions.', ['Cu²⁺ + [[2]]e⁻ → Cu. Copper ions [[gain]] electrons, so they are [[reduced]].'], ['2'], 'Positive charge is cancelled by gaining electrons.'),
    G('Displacement of copper by zinc.', ['Zinc atoms [[lose|give]] electrons and copper ions [[gain|accept]] electrons, so this is a redox reaction.'], [], 'Both oxidation and reduction occur at the same time.', true)
  ] });
  add('chem-cc4', { gaps: [
    G('Word equation for an acid with a metal.', ['acid + metal → [[salt]] + [[hydrogen]]'], [], 'Magnesium + hydrochloric acid → magnesium chloride + hydrogen.'),
    G('Balance the equation.', ['Mg + [[2]]HCl → MgCl₂ + H₂'], ['2'], 'There are two chlorine atoms in MgCl₂.'),
    G('Acid with a carbonate.', ['acid + carbonate → salt + [[water]] + [[carbon dioxide]]. The gas turns limewater [[milky|cloudy]].'], [], 'Bubbling carbon dioxide through limewater makes it cloudy.'),
    G('Names of salts.', ['Hydrochloric acid makes [[chlorides|chloride]], sulfuric acid makes [[sulfates|sulfate]] and nitric acid makes [[nitrates|nitrate]].'], [], 'The first part of the salt name is the metal; the second comes from the acid.')
  ] });
  add('chem-cc5', { gaps: [
    G('Making copper sulfate crystals.', ['Add [[excess|an excess of]] copper oxide to warm sulfuric acid, then [[filter]] to remove the unreacted solid.'], [], 'Using excess ensures all the acid reacts.'),
    G('After filtering.', ['Heat the filtrate to [[evaporate|reduce]] some of the water, then leave it to [[crystallise|cool]].'], [], 'The salt crystals form as the solution cools.'),
    G('Why add excess solid?', ['Excess solid makes sure that all the [[acid]] is used up, so the salt is not contaminated.'], [], 'You can tell it is in excess because some solid remains.'),
    G('Salts from alkalis.', ['A soluble salt made from an acid and an [[alkali]] needs a [[titration]] because there is no solid to filter off.'], [], 'You cannot tell by eye when the reaction has finished, so an indicator is used.')
  ] });
  add('chem-cc6', { gaps: [
    G('The pH scale.', ['A neutral solution has pH [[7]]; acids have pH below 7 and alkalis have pH [[above|more than|greater than]] 7.'], ['7'], 'The pH scale runs from 0 to 14.'),
    G('Neutralisation.', ['In neutralisation H⁺ ions from the acid react with [[OH⁻|hydroxide]] ions from the alkali to make [[water]].'], [], 'The ionic equation is H⁺ + OH⁻ → H₂O.'),
    G('Titration apparatus.', ['The acid is measured into a flask with a [[pipette]] and the alkali is added from a [[burette]].'], [], 'A pipette measures a fixed volume accurately; a burette delivers a variable volume.'),
    G('Titration technique.', ['Add the solution drop by drop near the [[end point]] and swirl the flask. Repeat until the results are [[concordant]].'], [], 'Concordant results are within 0.10 cm³ of each other.')
  ] });
  add('chem-cc7', { gaps: [
    G('Strong and weak acids.', ['A strong acid is [[completely|fully]] ionised in water, whereas a weak acid is only [[partly|partially]] ionised.'], [], 'Hydrochloric acid is strong; ethanoic acid is weak.'),
    G('Two acids with the same concentration.', ['The pH of the strong acid is [[lower|less]] than the pH of the weak acid.'], [], 'The strong acid releases more H⁺ ions.'),
    G('Each pH unit.', ['A decrease of 1 in pH means the H⁺ concentration is [[10]] times greater.'], ['10'], 'The pH scale is logarithmic.', true),
    G('pH 3 and pH 5.', ['A solution of pH 3 has [[100]] times the H⁺ concentration of a solution of pH 5.'], ['10**2'], 'Two pH units is a factor of 10 × 10.', true)
  ] });
  add('chem-cc8', { gaps: [
    G('Electrolysis.', ['Electrolysis uses [[electricity|an electric current]] to break down an [[electrolyte|ionic compound]] that is molten or dissolved.'], [], 'The ions must be free to move.'),
    G('Electrodes.', ['Positive ions move to the [[cathode|negative electrode]] and negative ions move to the [[anode|positive electrode]].'], [], 'Opposite charges attract.'),
    G('Molten lead bromide.', ['Lead forms at the [[cathode]] and bromine forms at the [[anode]].'], [], 'Pb²⁺ is reduced at the cathode; Br⁻ is oxidised at the anode.'),
    G('At the cathode.', ['Positive ions [[gain]] electrons, so this is [[reduction]].'], [], 'At the anode, negative ions lose electrons and are oxidised.')
  ] });
  add('chem-cc9', { gaps: [
    G('Aqueous solutions.', ['At the cathode, [[hydrogen]] is made if the metal is more reactive than hydrogen. Otherwise the [[metal]] is formed.'], [], 'Water also contains H⁺ ions.'),
    G('At the anode.', ['[[Oxygen]] is formed unless the solution contains a halide, in which case the [[halogen]] is formed.'], [], 'OH⁻ ions are discharged unless a halide ion is present.'),
    G('Electrolysis of sodium chloride solution (brine).', ['Chlorine forms at the [[anode]], hydrogen at the [[cathode]] and [[sodium hydroxide]] is left in solution.'], [], 'Sodium is more reactive than hydrogen, so hydrogen is produced.'),
    G('Copper sulfate solution with inert electrodes.', ['Copper forms at the [[cathode]] and oxygen at the [[anode]].'], [], 'Copper is less reactive than hydrogen.')
  ] });
  add('chem-cc10', { gaps: [
    G('Raw material.', ['Aluminium is extracted from aluminium [[oxide]] dissolved in molten [[cryolite]].'], [], 'Cryolite lowers the melting point, which saves energy.'),
    G('Cathode half equation.', ['Al³⁺ + [[3]]e⁻ → Al'], ['3'], 'The charge on the ion is the number of electrons gained.'),
    G('Anode half equation.', ['2O²⁻ → O₂ + [[4]]e⁻'], ['4'], 'Two oxide ions each lose two electrons.', true),
    G('Carbon anodes.', ['The oxygen made at the anode reacts with the carbon to produce carbon [[dioxide]], so the anodes must be [[replaced|renewed|changed]] regularly.'], [], 'The graphite anodes burn away.')
  ] });

  add('chem-en1', { gaps: [
    G('Types of reaction.', ['In an exothermic reaction energy is transferred to the [[surroundings]] and the temperature of the surroundings [[increases|rises|goes up]].'], [], 'Combustion and neutralisation are exothermic.'),
    G('Endothermic reactions.', ['An endothermic reaction [[takes in|absorbs|takes]] energy from the surroundings, so the temperature [[decreases|falls|goes down]].'], [], 'Thermal decomposition is endothermic.'),
    G('A solution starts at 21 °C and reaches 27 °C.', ['The temperature change is [[6]] °C, so the reaction is [[exothermic]].'], ['27-21'], 'A temperature rise means energy was released.'),
    G('Everyday examples.', ['A hand warmer and self-heating can use [[exothermic]] reactions; a sports injury pack uses an [[endothermic]] reaction.'], [], 'The pack gets cold because the reaction takes in energy.')
  ] });
  add('chem-en2', { gaps: [
    G('Reaction profile.', ['The minimum energy needed for the particles to react is called the [[activation]] energy.'], [], 'Particles must collide with at least this energy to react.'),
    G('Reactants at 300 kJ/mol, peak at 450 kJ/mol, products at 200 kJ/mol.', ['Activation energy = 450 − 300 = [[150]] kJ/mol; overall energy change = 200 − 300 = [[-100|−100]] kJ/mol'], ['450-300', '200-300'], 'The overall change is products minus reactants. A negative value means exothermic.'),
    G('Exothermic profile.', ['In an exothermic reaction the products are at a [[lower]] energy than the reactants.'], [], 'The difference is released to the surroundings.'),
    G('Adding a catalyst.', ['A catalyst [[lowers|decreases|reduces]] the activation energy but does not change the [[overall energy change|energy change|ΔH]].'], [], 'The reactants and products stay at the same energy.')
  ] });
  add('chem-en3', { gaps: [
    G('Bond energy.', ['Breaking bonds is [[endothermic]] and making bonds is [[exothermic]].'], [], 'Energy is needed to break bonds and released when bonds form.', true),
    G('H₂ + Cl₂ → 2HCl. Bond energies: H–H 436, Cl–Cl 243, H–Cl 432 kJ/mol.', ['Energy to break bonds = 436 + 243 = [[679]]; energy released making bonds = 2 × 432 = [[864]]', 'Overall change = 679 − 864 = [[-185|−185]] kJ/mol'], ['436+243', '2*432', '679-864'], 'Overall change = energy in − energy out.', true),
    G('H₂ + F₂ → 2HF. Bond energies: H–H 436, F–F 158, H–F 568 kJ/mol.', ['Overall change = (436 + 158) − (2 × 568) = [[-542|−542]] kJ/mol'], ['(436+158)-(2*568)'], 'A negative value shows the reaction is exothermic.', true),
    G('If more energy is released making bonds than is needed to break bonds.', ['The reaction is [[exothermic]].'], [], 'The overall energy change is negative.', true)
  ] });
  add('chem-en4', { gaps: [
    G('Chemical cells.', ['A cell produces a voltage when two [[different|dissimilar]] metals are in contact with an [[electrolyte]].'], [], 'The bigger the difference in reactivity, the bigger the voltage.'),
    G('Non-rechargeable batteries.', ['An alkaline battery stops working when one of the [[reactants]] is used up.'], [], 'Rechargeable cells can have their reactions reversed.'),
    G('Hydrogen fuel cell.', ['Balance: [[2]]H₂ + O₂ → [[2]]H₂O. The only product is [[water]].'], ['2', '2'], 'Hydrogen is oxidised and oxygen is reduced.'),
    G('Fuel cell advantage.', ['A fuel cell makes no [[pollutants|pollution|carbon dioxide]], but hydrogen is a [[flammable]] gas that is difficult to store.'], [], 'It is cleaner at the point of use.')
  ] });

  add('chem-ra1', { gaps: [
    G('60 cm³ of gas is collected in 30 s.', ['mean rate = 60 ÷ 30 = [[2]] cm³/s'], ['60/30'], 'Rate = amount of product ÷ time.'),
    G('A flask loses 1.2 g in 4.0 min.', ['mean rate = 1.2 ÷ 4.0 = [[0.3|0.30]] g/min'], ['1.2/4.0'], 'The mass falls as a gas escapes.'),
    G('Rate from a tangent: the line rises from 20 cm³ at 0 s to 80 cm³ at 30 s.', ['rate = (80 − 20) ÷ 30 = [[2]] cm³/s'], ['(80-20)/30'], 'The gradient of the tangent is the rate at that time.', true),
    G('Shape of the graph.', ['The graph of product against time becomes [[flatter|less steep]] as the reaction proceeds, because the reactants are being [[used up|used]].'], [], 'The reaction is fastest at the start.')
  ] });
  add('chem-ra2', { gaps: [
    G('Collision theory.', ['Particles react only when they [[collide]] with at least the [[activation]] energy.'], [], 'Both a collision and enough energy are needed.'),
    G('Higher temperature.', ['Particles move [[faster]], so collisions are more [[frequent]] and more particles have energy above the activation energy.'], [], 'Both factors increase the rate.'),
    G('Powdered solid.', ['A powder has a larger [[surface area]] than a lump, so there are more [[collisions|frequent collisions]] per second.'], [], 'More particles are exposed to the reactant.'),
    G('Concentration and pressure.', ['Increasing concentration or pressure puts more particles in the same [[volume]], so collisions are more [[frequent]].'], [], 'The particles are closer together.')
  ] });
  add('chem-ra3', { gaps: [
    G('Catalysts.', ['A catalyst speeds up a reaction by providing an [[alternative]] pathway with a [[lower]] activation energy. It is [[not used up|unchanged|not changed]].'], [], 'It can be reused.'),
    G('Disappearing cross.', ['Sodium thiosulfate reacts with acid to form a precipitate of [[sulfur]], which makes the solution cloudy so the cross cannot be seen.'], [], 'The time taken for the cross to disappear measures the rate.'),
    G('The cross disappears after 40 s.', ['relative rate = 1 ÷ 40 = [[0.025]] s⁻¹'], ['1/40'], 'Rate is proportional to 1 ÷ time.'),
    G('Doubling the rate.', ['If the time for the cross to disappear halves, the rate [[doubles|is doubled|increases]].'], [], 'Rate is inversely proportional to time.')
  ] });
  add('chem-ra4', { gaps: [
    G('Reversible reactions.', ['In a reversible reaction the products can react to form the [[reactants]] again. The symbol is [[⇌|<=>]].'], [], 'The reaction goes both forwards and backwards.'),
    G('Hydrated copper sulfate.', ['Heating blue hydrated copper sulfate gives [[white]] anhydrous copper sulfate and [[water]].'], [], 'Adding water turns it blue again.'),
    G('Energy changes.', ['If the forward reaction is exothermic, the reverse reaction is [[endothermic]] and takes in the [[same|equal]] amount of energy.'], [], 'The energy changes are equal and opposite.'),
    G('Ammonium chloride.', ['Ammonium chloride [[decomposes]] on heating to ammonia and hydrogen chloride, which recombine on [[cooling|cool surfaces]].'], [], 'The change is reversible.')
  ] });
  add('chem-ra5', { gaps: [
    G('Equilibrium.', ['At equilibrium the rate of the forward reaction [[equals|is equal to|is the same as]] the rate of the reverse reaction in a [[closed]] system.'], [], 'The concentrations stay constant.'),
    G('N₂ + 3H₂ ⇌ 2NH₃.', ['There are 1 + 3 = [[4]] moles of gas on the left and [[2]] moles on the right.'], ['1+3', '2'], 'Count the gas molecules on each side.', true),
    G('Pressure.', ['Increasing the pressure shifts the equilibrium to the side with [[fewer|less]] moles of gas, so more [[ammonia|NH₃]] forms.'], [], 'Le Chatelier’s principle: the system opposes the change.', true),
    G('Temperature.', ['Raising the temperature shifts the equilibrium in the [[endothermic]] direction.'], [], 'The system tries to absorb the extra energy.', true)
  ] });
})();
