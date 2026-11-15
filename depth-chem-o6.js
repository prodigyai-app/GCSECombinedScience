/* Opus depth pass for Organic chemistry (chem-or1–chem-or9) and Chemical analysis (chem-an1–chem-an7). */
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

  /* ---------- chem-or1 Crude oil and alkanes ---------- */
  L('chem-or1', 'Going further: alkanes and combustion', `<p>Crude oil is a finite resource formed over millions of years from the remains of ancient biomass, mainly plankton, buried in mud. It is a mixture of a very large number of compounds, most of which are <b>hydrocarbons</b>. Most of these are <b>alkanes</b>, a homologous series with the general formula C<sub>n</sub>H<sub>2n+2</sub>. Members of a homologous series have the same general formula, similar chemical properties and a gradual trend in physical properties. Alkanes are <b>saturated</b>: they contain only single carbon–carbon bonds.</p><p>The combustion of hydrocarbon fuels releases energy. During complete combustion the carbon and hydrogen are oxidised to carbon dioxide and water. Balancing combustion equations: balance C first, then H, then O last; use a fraction or double everything if O₂ needs a half. For example, C₃H₈ + 5O₂ → 3CO₂ + 4H₂O.</p>` + ul(['Methane CH₄, ethane C₂H₆, propane C₃H₈, butane C₄H₁₀.', 'Displayed formulae show every bond as a line.', 'As chains get longer: higher boiling point, more viscous, less flammable.', 'Incomplete combustion produces carbon monoxide and soot.']));
  E('chem-or1', 'Balancing butane combustion', 'Write a balanced equation for the complete combustion of butane, C₄H₁₀.', [
    ['C and H', '4 CO₂ and 5 H₂O.', ['C₄H₁₀ + O₂ → 4CO₂ + 5H₂O']],
    ['O', 'Right has 13 O, so 6½ O₂; double everything.', [`${res('2C₄H₁₀ + 13O₂ → 8CO₂ + 10H₂O')}`]]]);
  E('chem-or1', 'Identifying an alkane', 'Which of C₅H₁₂, C₅H₁₀ and C₆H₁₄ are alkanes?', [
    ['Apply C<sub>n</sub>H<sub>2n+2</sub>', 'n = 5 needs 12 H; n = 6 needs 14 H.', ['C₅H₁₂ ✓, C₆H₁₄ ✓']],
    ['C₅H₁₀', 'Has 2 fewer H.', [`${res('C₅H₁₂ and C₆H₁₄ are alkanes; C₅H₁₀ is not.')}`]]]);
  X('chem-or1', Q('Propane, C₃H₈, is used as a fuel for camping stoves.', [
    P('Explain why propane is described as a hydrocarbon.', 1, ['contains hydrogen and carbon only']),
    P('Explain why propane is described as saturated.', 1, ['only single (C–C) bonds']),
    P('Write a balanced equation for the complete combustion of propane.', 2, ['CO₂ and H₂O as products', 'C₃H₈ + 5O₂ → 3CO₂ + 4H₂O']),
    P('Give the formula of the alkane with 10 carbon atoms.', 1, ['C₁₀H₂₂']),
    P('Describe how crude oil was formed.', 2, ['remains of ancient biomass / plankton', 'buried in mud and compressed over millions of years']),
    P('Explain why crude oil is described as a finite resource.', 1, ['it is being used up faster than it forms / takes millions of years to form'])
  ]));

  /* ---------- chem-or2 Fractional distillation ---------- */
  L('chem-or2', 'Going further: how fractional distillation works', `<p>Crude oil is heated until most of it evaporates, and the vapour is fed into the bottom of a fractionating column, which is hot at the bottom and cooler at the top. The vapours rise; each hydrocarbon condenses when it reaches a level where the temperature is below its boiling point. Hydrocarbons with similar chain lengths condense together and are drawn off as <b>fractions</b>. Short chains with low boiling points rise to the top and leave as gases; very long chains (bitumen) do not evaporate and are removed at the bottom.</p><p>The fractions are processed to produce fuels and feedstock for the petrochemical industry. Many useful materials, such as solvents, lubricants, polymers and detergents, are made from crude oil. Properties change with chain length: longer molecules have higher boiling points, higher viscosity and lower flammability, because the intermolecular forces are stronger.</p>` + ul(['Main fractions (top to bottom): refinery gas, petrol, kerosene, diesel oil, heavy fuel oil, bitumen.', 'Kerosene is jet fuel; LPG is used for heating and cooking.', 'Fractions are mixtures with a range of boiling points.']));
  E('chem-or2', 'Matching fractions to properties', 'Compare the boiling point, viscosity and flammability of kerosene and fuel oil.', [
    ['Chain length', 'Fuel oil has longer chains.', ['stronger intermolecular forces']],
    ['Properties', 'Apply trends.', [`${res('Fuel oil: higher boiling point, more viscous, less flammable than kerosene.')}`]]]);
  E('chem-or2', 'Where a hydrocarbon condenses', 'A hydrocarbon boils at 180 °C. The column temperature is 350 °C at the bottom and 25 °C at the top. Where is it collected?', [
    ['Rule', 'It condenses where the temperature falls below its boiling point.', ['below 180 °C']],
    ['Position', 'Part way up the column.', [`${res('In a middle fraction, such as kerosene.')}`]]]);
  X('chem-or2', Q('Crude oil is separated into fractions in a fractionating column.', [
    P('Explain why bitumen leaves the column at the bottom.', 2, ['very long chains / high boiling point', 'so it does not evaporate / condenses at the bottom where it is hottest']),
    P('Explain why the fractions with small molecules are more flammable than those with large molecules.', 2, ['small molecules have lower boiling points / evaporate easily', 'weaker intermolecular forces'])
  ]));

  /* ---------- chem-or3 Cracking and alkenes ---------- */
  L('chem-or3', 'Going further: cracking and supply and demand', `<p>Long-chain hydrocarbons from crude oil are in greater supply than demand, while short-chain hydrocarbons such as petrol are in high demand. <b>Cracking</b> breaks long-chain hydrocarbons into shorter, more useful molecules. It is a thermal decomposition reaction. In <b>catalytic cracking</b> the vapour is passed over a hot catalyst; in <b>steam cracking</b> it is mixed with steam at a very high temperature.</p><p>Cracking produces alkanes and <b>alkenes</b>. Alkenes are more reactive than alkanes because of the C=C double bond, and they are used to produce polymers and as starting materials for many other chemicals. When writing cracking equations, the numbers of carbon and hydrogen atoms must balance: C₁₂H₂₆ → C₈H₁₈ + 2C₂H₄. Bromine water is decolourised by alkenes (orange → colourless) but not by alkanes, which is a test for unsaturation.</p>` + ul(['Cracking matches supply to demand.', 'Alkenes are unsaturated: they have two fewer H atoms than the alkane with the same number of C.', 'Products of cracking may include hydrogen as well.']));
  E('chem-or3', 'Balancing a cracking equation', 'Complete: C₁₆H₃₄ → C₈H₁₈ + 2C₃H₆ + ?', [
    ['Carbon', '16 − 8 − 6 = 2.', ['2 C atoms left']],
    ['Hydrogen', '34 − 18 − 12 = 4.', [`${res('C₂H₄ (ethene)')}`]]], { chk: [['16-8-6', 2], ['34-18-12', 4]] });
  E('chem-or3', 'Supply and demand data', 'A refinery produces 20% petrol but demand is 35%; it produces 30% fuel oil but demand is 15%. Explain how cracking helps.', [
    ['Mismatch', 'Too much fuel oil, too little petrol.', ['surplus of long chains']],
    ['Solution', 'Crack fuel oil.', [`${res('Cracking converts surplus fuel oil into petrol (and useful alkenes).')}`]]]);
  X('chem-or3', Q('Decane, C₁₀H₂₂, can be cracked to make octane, C₈H₁₈, and ethene.', [
    P('Write a balanced equation for this reaction.', 1, ['C₁₀H₂₂ → C₈H₁₈ + C₂H₄']),
    P('Give two conditions used for catalytic cracking.', 2, ['high temperature / vaporised', 'catalyst']),
    P('Describe a test to show that ethene is unsaturated, giving the result.', 2, ['add bromine water', 'turns from orange to colourless'])
  ]));

  /* ---------- chem-or4 Reactions of alkenes ---------- */
  L('chem-or4', 'Going further: addition reactions', `<p>Alkenes are hydrocarbons with a C=C double bond; they form a homologous series with general formula C<sub>n</sub>H<sub>2n</sub> (ethene, propene, butene, pentene). They react with oxygen in combustion in the same way as other hydrocarbons, but they tend to burn in air with smoky flames because of incomplete combustion.</p><p>Alkenes undergo <b>addition reactions</b>: atoms add across the double bond so that it becomes a single bond and one product forms. With hydrogen (using a nickel catalyst) they form alkanes; with water as steam (with a catalyst) they form alcohols; with halogens they form dihaloalkanes, for example ethene + bromine → 1,2-dibromoethane. Draw displayed formulae showing the two new atoms on the two carbons that were double bonded.</p>` + ul(['Hydrogenation: C₂H₄ + H₂ → C₂H₆.', 'Hydration: C₂H₄ + H₂O → C₂H₅OH.', 'Halogenation: C₃H₆ + Cl₂ → C₃H₆Cl₂.', 'The functional group of alkenes is C=C.']));
  E('chem-or4', 'Product of propene with steam', 'Name and give the formula of the product when propene reacts with steam.', [
    ['Type', 'Addition of H₂O across C=C.', ['an alcohol forms']],
    ['Product', 'Add H₂O to C₃H₆.', [`${res('Propanol, C₃H₇OH')}`]]]);
  E('chem-or4', 'Formula of an alkene', 'Give the formula of the alkene with 5 carbon atoms and the product of its reaction with hydrogen.', [
    ['C<sub>n</sub>H<sub>2n</sub>', 'n = 5.', ['C₅H₁₀ (pentene)']],
    ['Hydrogenation', 'Add H₂.', [`${res('C₅H₁₂ (pentane)')}`]]]);
  X('chem-or4', Q('Butene, C₄H₈, is an alkene.', [
    P('Describe the bonding that makes butene an alkene.', 1, ['contains a carbon–carbon double bond (C=C)']),
    P('Name the product formed when butene reacts with hydrogen, and give the condition needed.', 2, ['butane', 'nickel catalyst (and heat)']),
    P('Write a balanced equation for butene reacting with bromine.', 1, ['C₄H₈ + Br₂ → C₄H₈Br₂']),
    P('Explain why butene burns with a smokier flame than butane.', 2, ['higher proportion of carbon', 'more incomplete combustion producing soot']),
    P('State what is meant by an addition reaction.', 1, ['two molecules join to form one product (atoms add across the double bond)'])
  ]));

  /* ---------- chem-or5 Alcohols ---------- */
  L('chem-or5', 'Going further: alcohols', `<p>Alcohols contain the functional group –OH. The first four members are methanol (CH₃OH), ethanol (C₂H₅OH), propanol (C₃H₇OH) and butanol (C₄H₉OH). They dissolve in water to form neutral solutions, react with sodium to produce hydrogen, burn in air to produce carbon dioxide and water, and are oxidised by oxidising agents to form carboxylic acids.</p><p>Alcohols are used as fuels and solvents, and ethanol is the main alcohol in alcoholic drinks. Aqueous solutions of ethanol are produced when sugar solutions are fermented using yeast. Fermentation works best at about 30–35 °C in anaerobic conditions; a higher temperature denatures the enzymes in yeast and oxygen would oxidise the ethanol to ethanoic acid.</p>` + ul(['Fermentation: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂.', 'Combustion: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O.', 'Ethanol from ethene (hydration) is fast and continuous but uses crude oil; fermentation is slow and batch but renewable.']));
  E('chem-or5', 'Combustion of ethanol', 'Balance the complete combustion of ethanol.', [
    ['C and H', '2 CO₂ and 3 H₂O.', ['C₂H₅OH + O₂ → 2CO₂ + 3H₂O']],
    ['O', 'Right 7 O; ethanol supplies 1, so 3 O₂.', [`${res('C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O')}`]]]);
  E('chem-or5', 'Comparing methods of making ethanol', 'Compare fermentation and hydration of ethene for making ethanol.', [
    ['Fermentation', 'Renewable sugar, low temperature, slow, impure product.', ['batch process']],
    ['Hydration', 'Ethene from crude oil, high temperature and pressure, fast, pure.', [`${res('Fermentation is renewable but slow; hydration is fast but uses a finite resource.')}`]]]);
  X('chem-or5', Q('Ethanol is made by fermentation.', [
    P('Give two conditions needed for fermentation.', 2, ['yeast / enzymes in yeast and sugar solution', 'about 30–35 °C / warm and anaerobic (no oxygen)']),
    P('Explain why the mixture is not heated above 40 °C.', 1, ['enzymes in yeast are denatured']),
    P('Give two uses of ethanol other than in alcoholic drinks.', 1, ['fuel and solvent (both needed)'])
  ]));

  /* ---------- chem-or6 Carboxylic acids and esters ---------- */
  L('chem-or6', 'Going further: carboxylic acids and esters', `<p>Carboxylic acids have the functional group –COOH. The first four are methanoic, ethanoic, propanoic and butanoic acid. They dissolve in water to form acidic solutions, react with carbonates to produce a salt, water and carbon dioxide, and react with alcohols in the presence of an acid catalyst to produce <b>esters</b>. Carboxylic acids are <b>weak acids</b> because they only partially ionise in water, so their solutions have a higher pH than strong acids of the same concentration.</p><p>Esters have the functional group –COO–. Ethanol + ethanoic acid ⇌ ethyl ethanoate + water. Esters are volatile with fruity smells, used in perfumes and flavourings, and ethyl ethanoate is a common solvent. The name comes from the alcohol (ethyl, methyl…) then the acid (…oate).</p>` + ul(['Ethanoic acid is in vinegar.', 'Salts of ethanoic acid are ethanoates, e.g. sodium ethanoate.', 'A concentrated sulfuric acid catalyst is used to make esters.']));
  E('chem-or6', 'Carboxylic acid with a carbonate', 'Write the word equation for ethanoic acid reacting with sodium carbonate.', [
    ['General pattern', 'Acid + carbonate → salt + water + carbon dioxide.', ['salt is an ethanoate']],
    ['Equation', 'Name the salt.', [`${res('ethanoic acid + sodium carbonate → sodium ethanoate + water + carbon dioxide')}`]]]);
  E('chem-or6', 'Naming an ester from reactants', 'Name the ester formed from propanol and ethanoic acid.', [
    ['Alcohol part', 'Propanol → propyl.', ['propyl']],
    ['Acid part', 'Ethanoic acid → ethanoate.', [`${res('propyl ethanoate')}`]]]);
  X('chem-or6', Q('Ethanoic acid is a carboxylic acid.', [
    P('Give the functional group of carboxylic acids.', 1, ['–COOH']),
    P('Explain why ethanoic acid solution has a higher pH than hydrochloric acid of the same concentration.', 2, ['ethanoic acid is a weak acid / only partially ionised', 'lower concentration of H⁺ ions']),
    P('Name the ester formed when ethanoic acid reacts with methanol, and give the catalyst needed.', 2, ['methyl ethanoate', 'acid catalyst / concentrated sulfuric acid']),
    P('Give one use of esters.', 1, ['perfumes / flavourings / solvents'])
  ]));

  /* ---------- chem-or7 Addition polymers ---------- */
  L('chem-or7', 'Going further: drawing addition polymers', `<p>Alkenes can be used to make polymers such as poly(ethene) and poly(propene) by <b>addition polymerisation</b>. Many small molecules (monomers) join together to form very large molecules (polymers). In addition polymers the repeating unit has the same atoms as the monomer because no other molecule is formed.</p><p>To draw a repeating unit: draw the two carbon atoms from the C=C as a single bond, put the other groups above and below them exactly as in the monomer, add a bond extending out from each side through brackets, and write <i>n</i> after the brackets. To find the monomer from a polymer, take the repeating unit, put a double bond between the two carbons and remove the extension bonds. For example, chloroethene (CH₂=CHCl) forms poly(chloroethene), PVC.</p>` + ul(['Name: poly + (monomer name).', 'Poly(ethene): bags, bottles. Poly(propene): crates, ropes. PVC: pipes, window frames. PTFE: non-stick coatings.', 'The relative mass of a polymer = n × M<sub>r</sub> of monomer.']));
  E('chem-or7', 'Monomer from a polymer', 'The repeating unit of a polymer is –[CH₂–CHCN]–ₙ. Give the formula of the monomer.', [
    ['Restore the double bond', 'The two main-chain carbons become C=C.', ['CH₂=CHCN']],
    ['Name', 'This is acrylonitrile (propenenitrile).', [`${res('CH₂=CHCN')}`]]]);
  E('chem-or7', 'Number of monomers', 'A sample of poly(ethene) has a relative molecular mass of 56 000. How many ethene units (M<sub>r</sub> 28) are in each molecule?', [
    ['Divide', 'n = polymer M<sub>r</sub> ÷ monomer M<sub>r</sub>.', ['56 000 ÷ 28']],
    ['Answer', 'Calculate.', [`${res('2000 units')}`]]], { chk: [['56000/28', 2000]] });
  X('chem-or7', Q('Poly(chloroethene) is made from chloroethene, CH₂=CHCl.', [
    P('Name the type of polymerisation.', 1, ['addition']),
    P('Draw or describe the repeating unit of poly(chloroethene).', 2, ['two carbons joined by a single bond, with 3 H and 1 Cl', 'extension bonds through brackets and n']),
    P('Explain why the monomer can form a polymer but chloroethane cannot.', 1, ['the monomer has a C=C double bond / is unsaturated']),
    P('A polymer has a relative molecular mass of 25 000. The monomer has M<sub>r</sub> 62.5. Calculate the number of monomers in a molecule.', 2, ['25 000 ÷ 62.5', '= 400'], C(400, '', '25000/62.5', 0.001)),
    P('Give one use of poly(chloroethene).', 1, ['pipes / window frames / electrical insulation']),
    P('Give the general name for the small molecules that join together to form a polymer.', 1, ['monomers'])
  ]));

  /* ---------- chem-or8 Condensation polymers and natural polymers ---------- */
  L('chem-or8', 'Going further: condensation and natural polymers', `<p><b>Condensation polymerisation</b> involves monomers with <b>two functional groups</b>. When these monomers react, they join together, usually losing a small molecule such as water at each link. The simplest polymers are made from two different monomers each with two of the same functional group: a diol (two –OH groups) and a dicarboxylic acid (two –COOH groups) form a <b>polyester</b> and water.</p><p>Amino acids have two different functional groups: an amine group (–NH₂) and a carboxylic acid group (–COOH). They react by condensation polymerisation to produce polypeptides; different amino acids combine to form proteins. Other naturally occurring polymers include DNA (made of four different nucleotides, in two strands forming a double helix), starch and cellulose (made from glucose).</p>` + ul(['Addition: one type of monomer with C=C; one product.', 'Condensation: two functional groups per monomer; polymer + small molecule.', 'In a condensation polymer the repeating unit has fewer atoms than the monomers (water lost).']));
  E('chem-or8', 'Counting water molecules', 'How many water molecules are released when 50 amino acids join to form a single polypeptide chain?', [
    ['Links', 'A chain of 50 units has 49 links.', ['each link releases one H₂O']],
    ['Answer', 'One per link.', [`${res('49 water molecules')}`]]], { chk: [['50-1', 49]] });
  E('chem-or8', 'Comparing polymerisation types', 'Compare how poly(ethene) and a polyester are formed.', [
    ['Poly(ethene)', 'Addition of ethene monomers with C=C; only one product.', ['addition']],
    ['Polyester', 'Diol + dicarboxylic acid; water lost at each link.', [`${res('Addition gives only the polymer; condensation gives the polymer and water.')}`]]]);
  X('chem-or8', Q('A polyester is made from a diol, HO–CH₂–CH₂–OH, and a dicarboxylic acid, HOOC–C₆H₄–COOH.', [
    P('Name the small molecule produced as each link forms.', 1, ['water']),
    P('Explain why this is called condensation polymerisation.', 2, ['monomers have two functional groups', 'a small molecule (water) is lost each time a bond forms']),
    P('Name the monomers that make proteins and give the two functional groups they contain.', 2, ['amino acids', 'amine (–NH₂) and carboxylic acid (–COOH)'])
  ]));

  /* ---------- chem-or9 Review ---------- */
  L('chem-or9', 'Linking the ideas: organic families', `<p>Each homologous series is defined by its <b>functional group</b>, which decides its reactions. Alkanes (C–C only) burn but are otherwise unreactive. Alkenes (C=C) undergo addition. Alcohols (–OH) burn, react with sodium and are oxidised to carboxylic acids. Carboxylic acids (–COOH) are weak acids and form esters with alcohols. Polymers form by addition (alkenes) or condensation (two functional groups).</p>` + ul(['Alkanes C<sub>n</sub>H<sub>2n+2</sub>; alkenes C<sub>n</sub>H<sub>2n</sub>.', 'Meth-1, eth-2, prop-3, but-4 carbon atoms.', 'Crude oil → fractional distillation → cracking → alkenes → polymers.']));
  E('chem-or9', 'A reaction sequence', 'Ethene is converted to ethanol, then to ethanoic acid, then to ethyl ethanoate. Name each type of reaction.', [
    ['Ethene → ethanol', 'Steam adds across C=C.', ['hydration (addition)']],
    ['Ethanol → ethanoic acid', 'Oxygen added.', ['oxidation']],
    ['Ethanoic acid → ethyl ethanoate', 'Acid + alcohol with acid catalyst.', [`${res('esterification')}`]]]);
  X('chem-or9', Q('This question is about compounds made from crude oil.', [
    P('Name the process used to separate crude oil into fractions.', 1, ['fractional distillation']),
    P('Explain why cracking is used.', 2, ['to break long chains into shorter, more useful molecules', 'demand for short chains (petrol) is greater than supply / to make alkenes']),
    P('Name the homologous series to which C₃H₆ belongs.', 1, ['alkenes']),
    P('C₃H₆ can be made into a polymer. Name the polymer.', 1, ['poly(propene)']),
    P('Ethanol can be oxidised. Name the product and its homologous series.', 2, ['ethanoic acid', 'carboxylic acids']),
    P('Give two differences between addition and condensation polymerisation.', 2, ['addition needs C=C monomers; condensation needs monomers with two functional groups', 'condensation produces a small molecule (water) as well as the polymer'])
  ]));

  /* ---------- chem-an1 Purity and formulations ---------- */
  L('chem-an1', 'Going further: purity and formulations', `<p>In chemistry, a <b>pure substance</b> is a single element or compound, not mixed with any other substance. In everyday language, "pure" can mean a substance that has had nothing added to it, such as pure milk or orange juice, even though these are mixtures. Pure elements and compounds melt and boil at specific temperatures. Melting point and boiling point data can be used to distinguish pure substances from mixtures: impurities usually lower the melting point and make it melt over a <b>range</b> of temperatures, and raise the boiling point.</p><p>A <b>formulation</b> is a mixture designed as a useful product, made by mixing components in carefully measured quantities so the product has the required properties. Examples include fuels, cleaning agents, paints, medicines, alloys, fertilisers and foods. A medicine contains an active ingredient together with fillers, binders and flavourings.</p>` + ul(['Pure water boils at exactly 100 °C (at standard pressure).', 'Salt water boils above 100 °C over a range.', 'Each component in a formulation has a specific purpose.']));
  E('chem-an1', 'Using melting point data', 'Aspirin melts at 136 °C. Sample A melts at 136 °C; sample B melts between 128 °C and 133 °C. Which is pure?', [
    ['Sharp melting point', 'Pure substances melt at a fixed temperature.', ['A melts sharply at 136 °C']],
    ['B', 'Lower melting point over a range.', [`${res('A is pure; B is impure.')}`]]]);
  E('chem-an1', 'Mass of an ingredient', 'A paint formulation is 18% pigment by mass. What mass of pigment is in a 2.5 kg tin?', [
    ['Convert', '18% = 0.18.', ['0.18 × 2.5']],
    ['Answer', 'Calculate.', [`${res('0.45 kg (450 g)')}`]]], { chk: [['0.18*2.5', 0.45]] });
  X('chem-an1', Q('A company sells "pure orange juice". A chemist says it is not pure.', [
    P('Explain the difference between the everyday and the chemical meaning of "pure".', 2, ['everyday: nothing has been added / natural', 'chemistry: a single element or compound (not mixed with anything else)']),
    P('Describe how a student could use a melting point to test whether a solid is pure.', 2, ['measure the melting point and compare with the data book value', 'pure melts at a sharp fixed temperature; impure melts lower / over a range']),
    P('A medicine tablet has a mass of 500 mg. It contains 325 mg of active ingredient. Calculate the percentage of the active ingredient.', 2, ['325 ÷ 500 × 100', '= 65%'], C(65, '%', '325/500*100')),
    P('Explain why a medicine is described as a formulation.', 2, ['a mixture designed as a useful product', 'components in measured quantities, each with a purpose'])
  ]));

  /* ---------- chem-an2 Chromatography ---------- */
  L('chem-an2', 'Going further: chromatography in detail', `<p>Chromatography separates mixtures and helps identify substances. Paper chromatography has a <b>stationary phase</b> (the paper, or the water in it) and a <b>mobile phase</b> (the solvent). Different compounds have different R<sub>f</sub> values in different solvents, depending on how soluble they are in the solvent and how strongly they are attracted to the paper. A compound more attracted to the solvent travels further.</p><p>A pure compound produces a single spot in all solvents; a mixture may produce several. Unknown substances are identified by comparing their R<sub>f</sub> values or positions with known reference substances run on the same paper in the same solvent. In the required practical: draw the start line in pencil, place small concentrated spots, put the paper in a beaker with solvent below the start line, cover with a lid to stop evaporation, remove when the solvent is near the top and mark the solvent front.</p>` + ul(['R<sub>f</sub> = distance moved by substance ÷ distance moved by solvent; always less than 1.', 'Measure to the centre of each spot.', 'A spot that stays on the start line is insoluble in that solvent.']));
  E('chem-an2', 'Identifying a dye', 'An unknown dye has R<sub>f</sub> 0.45. The solvent front moved 8.0 cm. How far did the dye travel? Known dye X has R<sub>f</sub> 0.45 in the same solvent.', [
    ['Distance', 'distance = R<sub>f</sub> × solvent distance.', ['0.45 × 8.0 = 3.6 cm']],
    ['Identify', 'Same R<sub>f</sub> in the same solvent.', [`${res('3.6 cm; the dye is likely X (check in another solvent).')}`]]], { chk: [['0.45*8.0', 3.6]] });
  E('chem-an2', 'Interpreting a chromatogram', 'Ink P gives three spots; one matches dye A and one matches dye C. What can you conclude?', [
    ['Number of spots', 'Three spots → at least three substances.', ['P is a mixture']],
    ['Matching', 'Two components identified; one unknown.', [`${res('P contains A and C plus a substance not in the references.')}`]]]);
  X('chem-an2', Q('A student uses paper chromatography to analyse a food colouring.', [
    P('Explain why the spots must be placed above the level of the solvent in the beaker.', 1, ['otherwise the dyes would dissolve into the solvent in the beaker instead of moving up the paper']),
    P('One spot moved 4.2 cm. The solvent moved 7.0 cm. Calculate the R<sub>f</sub> value.', 2, ['4.2 ÷ 7.0', '= 0.60'], C(0.6, '', '4.2/7.0')),
    P('Explain why different substances move different distances.', 2, ['different solubility in the solvent (mobile phase)', 'different attraction to the paper (stationary phase)']),
    P('Explain why the beaker should be covered with a lid.', 1, ['stops the solvent evaporating'])
  ]));

  /* ---------- chem-an3 Gas tests ---------- */
  L('chem-an3', 'Going further: carrying out gas tests', `<p>Each common gas has a characteristic test. <b>Hydrogen</b>: a burning splint held at the mouth of the test tube ignites the hydrogen with a squeaky pop. <b>Oxygen</b>: a glowing splint inserted into the test tube relights. <b>Carbon dioxide</b>: bubbling the gas through (or shaking it with) limewater, calcium hydroxide solution, turns it milky (cloudy) because insoluble calcium carbonate forms. <b>Chlorine</b>: damp litmus paper put into the gas is bleached and turns white (blue litmus may go red first).</p><p>Collect gases safely: chlorine is toxic, so use a fume cupboard. Hold the test tube upside down when collecting hydrogen, because it is less dense than air, and keep the splint at the mouth rather than inside the tube. Gas tests can confirm the products of electrolysis, of acid reactions and of decomposition reactions.</p>` + ul(['Squeaky pop = hydrogen burning: 2H₂ + O₂ → 2H₂O.', 'Limewater: Ca(OH)₂ + CO₂ → CaCO₃ + H₂O.', 'The litmus paper must be damp for the chlorine test.']));
  E('chem-an3', 'Identifying gases from reactions', 'Name the gas and its test for (a) zinc + acid (b) hydrogen peroxide with a catalyst (c) marble + acid.', [
    ['Products', 'Metal + acid → H₂; H₂O₂ → O₂; carbonate + acid → CO₂.', ['H₂, O₂, CO₂']],
    ['Tests', 'Match each test.', [`${res('(a) squeaky pop (b) relights glowing splint (c) limewater milky')}`]]]);
  E('chem-an3', 'Why damp litmus?', 'Explain why the litmus paper must be damp when testing for chlorine.', [
    ['Chemistry', 'Chlorine reacts with water to form acidic, bleaching substances.', ['dissolves in the water on the paper']],
    ['Result', 'Dry paper would not change.', [`${res('The chlorine must dissolve to bleach the paper.')}`]]]);
  X('chem-an3', Q('A student carries out tests on four gases: hydrogen, oxygen, carbon dioxide and chlorine.', [
    P('Describe the test for oxygen and the result.', 2, ['insert a glowing splint', 'it relights']),
    P('Describe the test for carbon dioxide and the result.', 2, ['bubble through limewater', 'limewater turns milky / cloudy']),
    P('Explain why the test for chlorine should be done in a fume cupboard.', 1, ['chlorine is toxic']),
    P('A gas gives a squeaky pop. Write a balanced equation for the reaction that causes the pop.', 2, ['H₂ + O₂ → H₂O', '2H₂ + O₂ → 2H₂O']),
    P('Name the solid formed when carbon dioxide reacts with limewater.', 1, ['calcium carbonate'])
  ]));

  /* ---------- chem-an4 Metal ion tests ---------- */
  L('chem-an4', 'Going further: identifying metal ions', `<p><b>Flame tests</b> identify some metal ions: dip a clean nichrome wire loop in the solid or solution and hold it in a blue Bunsen flame. Lithium gives crimson, sodium yellow, potassium lilac, calcium orange-red and copper green. If a sample contains a mixture of ions, some flame colours can be masked, for example sodium’s strong yellow hides others.</p><p><b>Sodium hydroxide solution</b> forms coloured precipitates (insoluble hydroxides) with some metal ions: copper(II) blue, iron(II) green and iron(III) brown. Aluminium, calcium and magnesium ions form white precipitates; only aluminium hydroxide dissolves in excess sodium hydroxide. Calcium and magnesium can then be distinguished by a flame test (calcium orange-red; magnesium none).</p>` + ul(['Clean the wire loop in acid between tests to avoid contamination.', 'Ionic equations (HT): Cu²⁺ + 2OH⁻ → Cu(OH)₂.', 'Add sodium hydroxide dropwise and then in excess.']));
  E('chem-an4', 'Telling white precipitates apart', 'Three solutions give white precipitates with a few drops of NaOH. How can you identify Al³⁺, Ca²⁺ and Mg²⁺?', [
    ['Excess NaOH', 'Only aluminium hydroxide dissolves.', ['identifies Al³⁺']],
    ['Flame test', 'Calcium orange-red; magnesium no colour.', [`${res('Excess NaOH finds Al³⁺; a flame test separates Ca²⁺ from Mg²⁺.')}`]]]);
  E('chem-an4', 'Writing an ionic equation', 'Write the ionic equation for iron(III) ions forming a precipitate with hydroxide ions.', [
    ['Charges', 'Fe³⁺ needs three OH⁻.', ['Fe(OH)₃']],
    ['Equation', 'Include state symbols.', [`${res('Fe³⁺(aq) + 3OH⁻(aq) → Fe(OH)₃(s)')}`]]], { desc: true, higher: true });
  X('chem-an4', Q('A student has solutions of four salts: copper(II) sulfate, iron(II) chloride, sodium chloride and calcium nitrate.', [
    P('Give the result of adding sodium hydroxide solution to copper(II) sulfate and iron(II) chloride.', 2, ['copper(II): blue precipitate', 'iron(II): green precipitate']),
    P('Describe how a flame test is carried out.', 2, ['dip a clean (nichrome) wire loop in the sample', 'hold it in a (blue, roaring) Bunsen flame and observe the colour']),
    P('Give the flame colours for sodium chloride and calcium nitrate.', 2, ['sodium: yellow', 'calcium: orange-red'])
  ]));

  /* ---------- chem-an5 Anion tests ---------- */
  L('chem-an5', 'Going further: identifying negative ions', `<p><b>Carbonates</b> react with dilute acids to form carbon dioxide gas, which turns limewater milky. <b>Halide ions</b> in solution produce precipitates with silver nitrate solution in the presence of dilute nitric acid: silver chloride is white, silver bromide is cream and silver iodide is yellow. <b>Sulfate ions</b> in solution produce a white precipitate with barium chloride solution in the presence of dilute hydrochloric acid.</p><p>The acids are added first to remove carbonate ions, which would also give precipitates. Hydrochloric acid is not used in the halide test because it contains chloride ions, and sulfuric acid is not used in the sulfate test because it contains sulfate ions. A full identification combines a cation test and an anion test, for example a green precipitate with NaOH and a white precipitate with barium chloride shows iron(II) sulfate.</p>` + ul(['Ag⁺ + Cl⁻ → AgCl (white).', 'Ba²⁺ + SO₄²⁻ → BaSO₄ (white).', 'Record observations precisely: "cream precipitate", not "it went cream".']));
  E('chem-an5', 'Choosing the correct acid', 'Explain why hydrochloric acid cannot be used before adding silver nitrate in the halide test.', [
    ['Contamination', 'HCl contains chloride ions.', ['would form AgCl']],
    ['Result', 'False positive.', [`${res('Use nitric acid instead; it has no halide ions.')}`]]]);
  E('chem-an5', 'Identifying a salt', 'A solution gives a blue precipitate with NaOH and a yellow precipitate with acidified silver nitrate. Identify the salt.', [
    ['Cation', 'Blue precipitate.', ['Cu²⁺']],
    ['Anion', 'Yellow precipitate with silver nitrate.', [`${res('Copper(II) iodide')}`]]]);
  X('chem-an5', Q('A white solid is thought to be sodium carbonate, sodium sulfate or sodium bromide.', [
    P('Describe a test to show whether the solid is a carbonate, giving the result.', 2, ['add dilute acid', 'bubbles of gas turn limewater milky']),
    P('Describe a test to show whether the solid is a sulfate, giving the result.', 3, ['dissolve in water and add dilute hydrochloric acid', 'add barium chloride solution', 'white precipitate']),
    P('Give the result for sodium bromide with acidified silver nitrate.', 1, ['cream precipitate'])
  ]));

  /* ---------- chem-an6 Instrumental methods ---------- */
  L('chem-an6', 'Going further: flame emission spectroscopy', `<p>Elements and compounds can be detected and identified using instrumental methods. Instrumental methods are <b>accurate</b>, <b>sensitive</b> and <b>rapid</b>, and can work with very small samples. <b>Flame emission spectroscopy</b> is an example. The sample is put into a flame and the light given out is passed through a spectroscope. The output is a line spectrum that can be analysed to identify the metal ions in the solution, because each ion has a unique pattern of lines.</p><p>The intensity of the light can also be used to measure the <b>concentration</b> of the ions: a calibration curve is plotted using solutions of known concentration, and the concentration of the unknown is read from it. Unlike a flame test, spectroscopy can identify several ions in a mixture. Instrumental methods are used in medicine, forensic science, environmental monitoring and industry, but the equipment is expensive and needs trained operators.</p>` + ul(['Compare the sample spectrum with reference spectra.', 'Read a concentration from a calibration graph by drawing across from the intensity and down to the axis.', 'Advantages over chemical tests: sensitive, accurate, quick, small samples, mixtures.']));
  E('chem-an6', 'Identifying ions from a spectrum', 'A sample’s spectrum contains all the lines of the lithium and potassium reference spectra and no others. What does it contain?', [
    ['Match lines', 'Each set of reference lines is present.', ['lithium ✓, potassium ✓']],
    ['Conclusion', 'No unmatched lines.', [`${res('Lithium and potassium ions only.')}`]]]);
  E('chem-an6', 'Reading a calibration graph', 'Intensity is proportional to concentration: 20 mg/dm³ gives intensity 50. A sample gives intensity 35. Find its concentration.', [
    ['Proportion', 'Concentration = 35 ÷ 50 × 20.', ['ratio of intensities']],
    ['Answer', 'Calculate.', [`${res('14 mg/dm³')}`]]], { chk: [['35/50*20', 14]] });
  X('chem-an6', Q('A water company uses flame emission spectroscopy to test for metal ions in drinking water.', [
    P('Give three advantages of instrumental methods compared with chemical tests.', 3, ['accurate', 'sensitive / detect small amounts', 'rapid / quick (any 3, or works with mixtures / small samples)']),
    P('Describe how the spectrum is used to identify the metal ions.', 2, ['compare the lines with reference spectra', 'each metal ion has a unique pattern of lines']),
    P('Explain why a flame test could not identify the ions in a mixture of sodium and calcium ions.', 1, ['the yellow sodium colour masks the calcium colour']),
    P('A standard solution of 10 mg/dm³ gives a reading of 40 units. The sample gives 28 units. Assuming the reading is proportional to concentration, calculate the concentration of the sample.', 2, ['28 ÷ 40 × 10', '= 7.0 mg/dm³'], C(7.0, 'mg/dm³', '28/40*10'))
  ]));

  /* ---------- chem-an7 Review ---------- */
  L('chem-an7', 'Linking the ideas: planning an analysis', `<p>To identify an unknown ionic compound, test for the <b>positive ion</b> (flame test or sodium hydroxide) and the <b>negative ion</b> (acid for carbonate; acidified silver nitrate for halides; acidified barium chloride for sulfate) separately. To check purity, use melting point or chromatography. To identify gases, use the four gas tests. Instrumental methods give faster, more sensitive results and can measure concentration.</p>` + ul(['Name the reagent, describe the method and give the expected result for each ion.', 'Acids are added first to remove carbonates.', 'Chromatography: pure = one spot.']));
  E('chem-an7', 'Planning tests for an unknown salt', 'Plan tests to identify magnesium sulfate.', [
    ['Cation', 'NaOH gives a white precipitate that does not dissolve in excess; no flame colour.', ['Mg²⁺']],
    ['Anion', 'HCl then barium chloride gives a white precipitate.', [`${res('Mg²⁺ and SO₄²⁻ confirmed.')}`]]]);
  X('chem-an7', Q('A student is given two unlabelled white solids. One is potassium chloride and one is calcium carbonate.', [
    P('Describe a flame test that would distinguish the two solids, giving the results.', 2, ['potassium: lilac', 'calcium: orange-red']),
    P('Describe one other test that would distinguish them, giving the results.', 2, ['add dilute acid', 'calcium carbonate fizzes (gas turns limewater milky); potassium chloride does not']),
    P('Give the result of adding acidified silver nitrate to potassium chloride solution.', 1, ['white precipitate']),
    P('Explain why nitric acid is added before the silver nitrate.', 1, ['to remove carbonate ions, which would also form a precipitate'])
  ]));
})();
