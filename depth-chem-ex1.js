/* First worked examples for the lessons that had none: chem-at6 chem-at7 chem-at9 chem-bo4 chem-bo6 chem-bo8 chem-cc1 chem-cc3–chem-cc10 chem-en1 chem-en2 chem-en4 chem-ra2–chem-ra5 chem-or1–chem-or8 chem-an1 chem-an3–chem-an6 chem-am1–chem-am4 chem-ur2–chem-ur7.
   Numbers are recomputed by tools/verify-depth.cjs; method-only examples carry {desc:true}. */
(() => {
  const { v, fr, res } = LAB.W, add = GcseDepth.add, D = { desc: true };
  const E = (id, title, q, steps, meta) => add(id, { ex: [[title, q, steps, meta || D]] });

  E('chem-at6', 'Placing an element in the periodic table', 'An element has the electronic structure 2,8,6. State its group and period and say whether it is a metal.', [
    ['Count the shells', 'The number of occupied shells is the period number.', ['three shells → period 3']],
    ['Count the outer electrons', 'The number of electrons in the outer shell is the group number.', ['6 outer electrons → group 6']],
    ['Decide metal or non-metal', 'Elements on the right of the table with several outer electrons gain electrons.', [`${res('Period 3, group 6: a non-metal (sulfur)')}`]]]);
  E('chem-at7', 'Explaining a trend in group 1', 'Explain why potassium is more reactive than sodium.', [
    ['State what happens in the reaction', 'Group 1 metals react by losing their outer electron.', ['K → K⁺ + e⁻ and Na → Na⁺ + e⁻']],
    ['Compare the atoms', 'Potassium has one more shell, so its outer electron is further from the nucleus.', ['more shells → outer electron further from the nucleus → weaker attraction']],
    ['Link to reactivity', 'The outer electron is lost more easily.', [`${res('Potassium loses its outer electron more easily, so it is more reactive.')}`]]]);
  E('chem-at9', 'Comparing a transition metal with group 1', 'Give three ways in which iron differs from sodium, and one use of an iron catalyst.', [
    ['Physical properties', 'Transition metals are strong and dense with high melting points.', ['iron: hard, dense, melting point 1538 °C; sodium: soft, low density, melting point 98 °C']],
    ['Chemical properties', 'Transition metals are less reactive and form coloured compounds and ions with different charges.', ['iron forms Fe²⁺ (green) and Fe³⁺ (brown); sodium only forms Na⁺']],
    ['Catalyst use', 'Many transition metals are catalysts.', [`${res('Iron is the catalyst in the Haber process.')}`]]]);
  E('chem-bo4', 'Explaining why metals conduct and bend', 'Explain why copper can conduct electricity and be bent into wire.', [
    ['Describe the structure', 'Metals are a lattice of positive ions in a sea of delocalised electrons.', ['regular layers of Cu²⁺ ions with free electrons']],
    ['Explain conduction', 'Free electrons carry the charge.', ['delocalised electrons move through the lattice when a voltage is applied']],
    ['Explain bending', 'The layers can slide over each other without breaking the metallic bond.', [`${res('Layers of ions slide while the electrons keep holding them together.')}`]]]);
  E('chem-bo6', 'Linking structure to melting point', 'Explain why sodium chloride has a high melting point but chlorine, Cl₂, is a gas at room temperature.', [
    ['Sodium chloride', 'It is a giant ionic lattice held together by strong electrostatic forces in all directions.', ['a lot of energy is needed to overcome the attraction between Na⁺ and Cl⁻ ions']],
    ['Chlorine', 'It is a simple molecule with strong covalent bonds inside the molecule but weak forces between molecules.', ['only the weak intermolecular forces are overcome when it boils']],
    ['Conclusion', 'Melting and boiling points depend on the forces that are broken, not the covalent bonds.', [`${res('Strong ionic lattice → high melting point; weak intermolecular forces → low boiling point.')}`]]]);
  E('chem-bo8', 'Explaining the properties of graphite', 'Explain why graphite is soft and conducts electricity although diamond is hard and does not.', [
    ['Graphite structure', 'Each carbon bonds to three others in layers.', ['3 covalent bonds per carbon; weak forces between layers']],
    ['Soft', 'The layers slide because the forces between them are weak.', ['layers slide over each other']],
    ['Conducts', 'The fourth outer electron on each carbon is delocalised.', [`${res('Delocalised electrons carry the current; in diamond all four are used in bonds.')}`]]]);

  E('chem-cc1', 'Using the reactivity series', 'Magnesium reacts with dilute hydrochloric acid but copper does not. Explain this using the reactivity series.', [
    ['Locate the metals', 'Metals above hydrogen displace hydrogen from acids.', ['Mg is above H; Cu is below H']],
    ['Write the reaction', 'Metal + acid → salt + hydrogen.', ['Mg + 2HCl → MgCl₂ + H₂']],
    ['Conclude', 'Copper is less reactive than hydrogen, so it cannot displace it.', [`${res('Magnesium reacts; copper does not.')}`]]]);
  E('chem-cc3', 'Writing half equations', 'Zinc displaces copper from copper sulfate solution. Write the half equations and say which species is oxidised.', [
    ['Zinc', 'Zinc atoms lose electrons.', ['Zn → Zn²⁺ + 2e⁻  (loss of electrons = oxidation)']],
    ['Copper', 'Copper ions gain electrons.', ['Cu²⁺ + 2e⁻ → Cu  (gain of electrons = reduction)']],
    ['Conclude', 'Both processes happen together in a redox reaction.', [`${res('Zinc is oxidised; copper ions are reduced.')}`]]]);
  E('chem-cc4', 'Predicting products of acid reactions', 'Predict the products when calcium carbonate reacts with dilute hydrochloric acid, and give a test for the gas.', [
    ['Choose the type', 'Acid + carbonate → salt + water + carbon dioxide.', ['calcium carbonate + hydrochloric acid → calcium chloride + water + carbon dioxide']],
    ['Write the symbol equation', 'Check each side has the same atoms.', ['CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂']],
    ['Test the gas', 'Carbon dioxide turns limewater cloudy.', [`${res('Bubble the gas through limewater: it turns milky.')}`]]]);
  E('chem-cc5', 'Making pure dry crystals of a salt', 'Describe how to make dry crystals of copper sulfate from copper oxide and sulfuric acid.', [
    ['Make the salt', 'Add excess insoluble base to warm acid so that all the acid reacts.', ['CuO + H₂SO₄ → CuSO₄ + H₂O']],
    ['Remove the excess', 'Filter off the unreacted solid.', ['filter → copper sulfate solution (filtrate)']],
    ['Crystallise', 'Evaporate some water, leave to cool and dry the crystals.', [`${res('Evaporate to the crystallisation point, cool, filter and dry between paper.')}`]]]);
  E('chem-cc6', 'Carrying out a titration', 'Describe how to find the volume of acid that neutralises 25.0 cm³ of alkali.', [
    ['Measure the alkali', 'Use a pipette for accurate volume.', ['25.0 cm³ alkali + a few drops of indicator in a conical flask']],
    ['Add the acid', 'Add from a burette, slowly near the end point, swirling.', ['stop at the first permanent colour change']],
    ['Repeat', 'Repeat until two results are within 0.10 cm³ (concordant), then average them.', [`${res('Use the mean of the concordant titres.')}`]]]);
  E('chem-cc7', 'Comparing two acids of equal concentration', 'Explain why 0.1 mol/dm³ hydrochloric acid has a lower pH than 0.1 mol/dm³ ethanoic acid.', [
    ['Hydrochloric acid', 'It is a strong acid and is completely ionised.', ['HCl → H⁺ + Cl⁻ (all molecules ionise)']],
    ['Ethanoic acid', 'It is a weak acid and is only partly ionised.', ['CH₃COOH ⇌ CH₃COO⁻ + H⁺ (few molecules ionise)']],
    ['Link to pH', 'More H⁺ ions means a lower pH.', [`${res('The strong acid has a higher H⁺ concentration, so a lower pH.')}`]]]);
  E('chem-cc8', 'Predicting products in molten electrolysis', 'Predict the products of the electrolysis of molten lead bromide, PbBr₂.', [
    ['Identify the ions', 'The molten compound contains Pb²⁺ and Br⁻.', ['Pb²⁺ → cathode (negative); Br⁻ → anode (positive)']],
    ['Write the electrode equations', 'Positive ions gain electrons; negative ions lose electrons.', ['cathode: Pb²⁺ + 2e⁻ → Pb', 'anode: 2Br⁻ → Br₂ + 2e⁻']],
    ['State the products', 'Name each product.', [`${res('Lead at the cathode and bromine at the anode.')}`]]]);
  E('chem-cc9', 'Predicting products in aqueous electrolysis', 'Predict the products of the electrolysis of sodium chloride solution.', [
    ['List the ions present', 'The solution contains Na⁺, Cl⁻, H⁺ and OH⁻.', ['four ions: Na⁺, H⁺ (to cathode); Cl⁻, OH⁻ (to anode)']],
    ['Cathode', 'Sodium is more reactive than hydrogen, so hydrogen is formed.', ['2H⁺ + 2e⁻ → H₂']],
    ['Anode', 'A halide ion is discharged in preference to hydroxide.', ['2Cl⁻ → Cl₂ + 2e⁻', `${res('Hydrogen at the cathode, chlorine at the anode, NaOH left in solution.')}`]]]);
  E('chem-cc10', 'Explaining the aluminium extraction process', 'Explain why aluminium oxide is dissolved in molten cryolite and why the anodes need replacing.', [
    ['Cryolite', 'Aluminium oxide has a very high melting point.', ['cryolite lowers the temperature needed, saving energy and cost']],
    ['The anode reaction', 'Oxygen is released at the carbon anodes.', ['2O²⁻ → O₂ + 4e⁻']],
    ['Anode wear', 'The oxygen reacts with hot carbon.', [`${res('C + O₂ → CO₂ so the carbon anodes burn away and must be replaced.')}`]]]);

  E('chem-en1', 'Identifying the type of reaction', 'A student mixes two solutions. The temperature rises from 21 °C to 27 °C. State the temperature change and the type of reaction.', [
    ['Calculate the change', 'Final minus initial temperature.', [`27 − 21 = ${res('6 °C')}`]],
    ['Decide', 'A rise means energy has been given out to the surroundings.', ['temperature rises → exothermic']]], { chk: [['27-21', 6]] });
  E('chem-en2', 'Reading a reaction profile', 'A reaction profile shows reactants at 300 kJ/mol, the peak at 450 kJ/mol and products at 200 kJ/mol. Find the activation energy and the overall energy change.', [
    ['Activation energy', 'Peak minus reactants.', [`450 − 300 = ${res('150 kJ/mol')}`]],
    ['Overall energy change', 'Products minus reactants.', [`200 − 300 = ${res('−100 kJ/mol')}`]],
    ['Type of reaction', 'The products are lower than the reactants.', ['negative change → exothermic']]], { chk: [['450-300', 150], ['200-300', -100]] });
  E('chem-en4', 'Predicting the voltage of a cell', 'A cell uses zinc and copper electrodes. A second cell uses magnesium and copper. Which gives the larger voltage?', [
    ['Compare reactivity', 'The bigger the difference in reactivity, the bigger the voltage.', ['Mg is further from Cu than Zn is']],
    ['Conclude', 'Choose the pair with the larger difference.', [`${res('The magnesium–copper cell gives the larger voltage.')}`]]]);

  E('chem-ra2', 'Explaining a change in rate', 'Explain, using collision theory, why increasing the temperature increases the rate of reaction.', [
    ['Particle speed', 'Higher temperature means particles have more kinetic energy.', ['faster particles → more collisions per second']],
    ['Energy of collisions', 'More particles have at least the activation energy.', ['a greater proportion of collisions are successful']],
    ['Conclude', 'Both effects increase the rate.', [`${res('More frequent and more energetic collisions → faster reaction.')}`]]]);
  E('chem-ra3', 'Using the disappearing cross', 'The cross disappears after 40 s at 20 °C and after 20 s at 30 °C. Compare the relative rates.', [
    ['Relative rate', 'Rate is proportional to 1 ÷ time.', [`${v('rate')} (20 °C) = ${fr('1', '40')} = ${res('0.025 s⁻¹')}`, `${v('rate')} (30 °C) = ${fr('1', '20')} = ${res('0.050 s⁻¹')}`]],
    ['Compare', 'Divide the larger rate by the smaller.', ['0.050 ÷ 0.025 = 2: the rate doubled']]], { chk: [['1/40', 0.025], ['1/20', 0.05]] });
  E('chem-ra4', 'Energy changes in a reversible reaction', 'The forward reaction in a reversible reaction is exothermic and releases 40 kJ/mol. State the energy change for the reverse reaction.', [
    ['Apply the rule', 'The reverse reaction has the opposite energy change of equal size.', ['reverse = −(−40)']],
    ['State the answer', 'A positive value means energy is absorbed.', [`${res('Endothermic: +40 kJ/mol')}`]]]);
  E('chem-ra5', 'Predicting the effect of pressure', 'For N₂ + 3H₂ ⇌ 2NH₃, predict the effect of increasing the pressure on the yield of ammonia.', [
    ['Count gas moles', 'Compare the number of moles of gas on each side.', ['left: 1 + 3 = 4 mol; right: 2 mol']],
    ['Apply Le Chatelier', 'The system opposes the increase by moving to the side with fewer moles of gas.', [`${res('Equilibrium shifts right: more ammonia is made.')}`]]], { desc: true, higher: true });

  E('chem-or1', 'Working out an alkane formula', 'Give the molecular formula of the alkane with 8 carbon atoms, then write the equation for the complete combustion of ethane.', [
    ['Use C<sub>n</sub>H<sub>2n+2</sub>', 'Substitute n = 8.', [`C₈H₁₈ because 2 × 8 + 2 = 18`]],
    ['Combustion of ethane', 'Complete combustion gives carbon dioxide and water.', ['2C₂H₆ + 7O₂ → 4CO₂ + 6H₂O']]], { chk: [['2*8+2', 18]] });
  E('chem-or2', 'Explaining the fractions', 'Explain why bitumen leaves the fractionating column at the bottom, and petrol near the top.', [
    ['Link size to boiling point', 'Longer molecules have stronger intermolecular forces.', ['bitumen: very long chains, very high boiling point']],
    ['Link to the column', 'The column is hot at the bottom and cooler at the top.', [`${res('Bitumen condenses first at the bottom; short-chain petrol stays a vapour until near the top.')}`]]]);
  E('chem-or3', 'Writing a cracking equation', 'Decane, C₁₀H₂₂, is cracked to give octane, C₈H₁₈, and one other product. Write the equation and identify the other product.', [
    ['Balance carbon and hydrogen', 'Subtract octane from decane.', ['C₁₀ − C₈ = C₂; H₂₂ − H₁₈ = H₄']],
    ['Write the equation', 'The remaining molecule is ethene, an alkene.', [`${res('C₁₀H₂₂ → C₈H₁₈ + C₂H₄')}`]]]);
  E('chem-or4', 'Predicting an addition product', 'Predict the product when propene reacts with bromine, and describe the observation.', [
    ['Write the reaction', 'The C=C double bond opens and a bromine atom joins each carbon.', ['C₃H₆ + Br₂ → C₃H₆Br₂']],
    ['Observation', 'The bromine is used up.', [`${res('Orange bromine water becomes colourless.')}`]]]);
  E('chem-or5', 'Writing the equation for fermentation', 'Write the equation for the fermentation of glucose to ethanol.', [
    ['Reactant and products', 'Yeast converts glucose to ethanol and carbon dioxide.', ['glucose → ethanol + carbon dioxide']],
    ['Balance', 'One glucose gives two ethanol and two carbon dioxide.', [`${res('C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂')}`]]]);
  E('chem-or6', 'Naming an ester', 'Name the ester formed from methanol and propanoic acid.', [
    ['Alcohol part', 'The alcohol gives the first word.', ['methanol → methyl']],
    ['Acid part', 'The acid gives the second word, ending in -oate.', [`${res('methyl propanoate')}`]]]);
  E('chem-or7', 'Drawing a polymer', 'Draw the repeat unit of poly(propene) from the monomer propene, CH₃CH=CH₂.', [
    ['Open the double bond', 'The two carbons of C=C become part of the chain.', ['–CH(CH₃)–CH₂–']],
    ['Add brackets and n', 'Show the repeat unit with the bonds extended.', [`${res('[–CH(CH₃)–CH₂–]ₙ')}`]]]);
  E('chem-or8', 'Condensation polymerisation', 'Explain how a polyester forms from a diol and a dicarboxylic acid.', [
    ['Functional groups', 'Each monomer has two reactive groups.', ['HO–R–OH and HOOC–R′–COOH']],
    ['Linking', 'An –OH and a –COOH react to form an ester link, losing water.', [`${res('Repeated ester links form a polymer; a water molecule is lost at each link.')}`]]]);

  E('chem-an1', 'Percentage of an ingredient in a formulation', 'A 60 g tablet contains 12 g of the active ingredient. Calculate the percentage of the active ingredient.', [
    ['Divide and multiply', 'Percentage = part ÷ whole × 100.', [`${fr('12', '60')} × 100 = ${res('20%')}`]],
    ['Interpret', 'One fifth of the tablet is active ingredient.', ['20% active ingredient, 80% other components']]], { chk: [['12/60*100', 20]] });
  E('chem-an3', 'Identifying a gas', 'A gas relights a glowing splint. A second gas turns limewater milky. Identify both.', [
    ['First gas', 'Oxygen supports combustion.', ['relights a glowing splint → oxygen']],
    ['Second gas', 'Carbon dioxide forms a white precipitate of calcium carbonate.', [`${res('Oxygen and carbon dioxide.')}`]]]);
  E('chem-an4', 'Identifying a metal ion', 'A solution gives a lilac flame and no precipitate with sodium hydroxide. Which ion is present?', [
    ['Flame colour', 'Lilac is the colour for potassium.', ['lilac → K⁺']],
    ['Check', 'Potassium hydroxide is soluble, so there is no precipitate.', [`${res('Potassium ions, K⁺.')}`]]]);
  E('chem-an5', 'Testing for halide ions', 'A solution with nitric acid and silver nitrate gives a cream precipitate. Name the ion and explain why nitric acid is added first.', [
    ['Identify', 'Cream means bromide.', ['cream precipitate → Br⁻ (silver bromide)']],
    ['Why acid first', 'It removes carbonates that would also give a precipitate.', [`${res('Nitric acid prevents a false positive from carbonate ions.')}`]]]);
  E('chem-an6', 'Choosing an analysis method', 'Explain one advantage of flame emission spectroscopy over a flame test.', [
    ['Flame test', 'It relies on judging a colour by eye, which is hard for mixtures.', ['subjective, one ion at a time']],
    ['Spectroscopy', 'It uses a spectrum, is quick and sensitive, and gives concentration.', [`${res('It identifies several ions in one sample accurately.')}`]]]);

  E('chem-am1', 'Percentage composition of air', 'In 500 cm³ of dry air there are about 100 cm³ of oxygen. Calculate the percentage of oxygen.', [
    ['Divide and multiply', 'Percentage = part ÷ whole × 100.', [`${fr('100', '500')} × 100 = ${res('20%')}`]],
    ['Compare', 'This matches the value usually quoted for air.', ['about one fifth of air is oxygen']]], { chk: [['100/500*100', 20]] });
  E('chem-am2', 'Linking greenhouse gases to temperature', 'Explain how increasing carbon dioxide leads to global warming.', [
    ['Absorption', 'Greenhouse gases absorb long-wavelength infrared radiation from the Earth.', ['less radiation escapes to space']],
    ['Re-emission', 'They re-emit energy in all directions, including towards the surface.', [`${res('The Earth’s average temperature rises.')}`]]]);
  E('chem-am3', 'Reducing a carbon footprint', 'Suggest two ways of reducing the carbon footprint of a product.', [
    ['Cut energy use', 'Use renewable electricity or improve efficiency.', ['less fossil fuel burned']],
    ['Cut transport', 'Use local materials and make less waste.', [`${res('Lower emissions across the life cycle.')}`]]]);
  E('chem-am4', 'Explaining the dangers of incomplete combustion', 'Explain why a faulty gas boiler can be dangerous.', [
    ['Cause', 'Not enough oxygen means incomplete combustion.', ['produces carbon monoxide']],
    ['Danger', 'Carbon monoxide binds to haemoglobin, so less oxygen is carried.', [`${res('The gas is toxic and has no colour or smell.')}`]]]);

  E('chem-ur2', 'Stages of sewage treatment', 'Describe how sewage is treated before it is released.', [
    ['Screening and sedimentation', 'Large objects are removed, then solids settle as sludge.', ['sludge and effluent separate']],
    ['Biological treatment', 'Sludge is digested anaerobically; effluent is treated aerobically.', [`${res('Safe effluent is released and methane can be used as fuel.')}`]]]);
  E('chem-ur3', 'Comparing methods of extracting copper', 'Explain why phytomining and bioleaching are used for low-grade ores.', [
    ['Why', 'High-grade ores are running out.', ['traditional mining and smelting uses a lot of energy']],
    ['The methods', 'Plants or bacteria concentrate the copper.', [`${res('Both need less energy and cause less damage than mining and smelting.')}`]]]);
  E('chem-ur4', 'Evaluating a life cycle assessment', 'Explain why a company’s life cycle assessment of its own product might be biased.', [
    ['Choice of data', 'Some stages may be left out.', ['selective use of data']],
    ['Value judgements', 'Measuring harm to the environment includes judgements.', [`${res('Results can be used to support an argument.')}`]]]);
  E('chem-ur5', 'Choosing a method to prevent rusting', 'Explain why galvanised steel does not rust even when scratched.', [
    ['Barrier', 'Zinc coating keeps out air and water.', ['coating stops oxygen and water reaching the iron']],
    ['Sacrificial', 'Zinc is more reactive than iron, so it corrodes first.', [`${res('Zinc loses electrons in preference to iron.')}`]]]);
  E('chem-ur6', 'Choosing a material', 'Explain why steel is used for car bodies instead of pure iron.', [
    ['Alloy structure', 'Carbon atoms distort the layers of iron atoms.', ['layers cannot slide easily']],
    ['Property', 'The alloy is harder and stronger.', [`${res('Steel is stronger and less likely to dent.')}`]]]);
  E('chem-ur7', 'Choosing conditions for the Haber process', 'Explain why a temperature of 450 °C is a compromise.', [
    ['Yield', 'The forward reaction is exothermic, so a lower temperature gives a higher yield.', ['low temperature favours ammonia']],
    ['Rate', 'A low temperature is too slow.', [`${res('450 °C gives an acceptable rate and yield with an iron catalyst.')}`]]]);
})();
