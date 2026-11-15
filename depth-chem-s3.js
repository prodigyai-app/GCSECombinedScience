/* Fill-the-gaps for Organic chemistry (chem-or1–chem-or8), Analysis (chem-an1–chem-an6), Atmosphere (chem-am1–chem-am4) and Using resources (chem-ur1–chem-ur7). Every number is recomputed by tools/verify-depth.cjs. */
(() => {
  const add = GcseDepth.add, G = (q, lines, calc, why, higher) => Object.assign({ q, lines, calc: calc || [], why }, higher ? { higher: true } : {});

  add('chem-or1', { gaps: [
    G('Crude oil.', ['Crude oil is a [[mixture]] of many hydrocarbons, which are compounds containing only [[hydrogen]] and [[carbon]].'], [], 'Hydrocarbons are made from hydrogen and carbon atoms only.'),
    G('Alkanes.', ['The general formula of alkanes is C<sub>n</sub>H<sub>[[2n+2]]</sub>, so an alkane with 5 carbon atoms has [[12]] hydrogen atoms.'], ['2*5+2'], 'Alkanes are saturated: all the carbon–carbon bonds are single.'),
    G('Names of the first four alkanes.', ['Methane, [[ethane]], [[propane]] and [[butane]].'], [], 'They have 1, 2, 3 and 4 carbon atoms.'),
    G('Complete combustion of methane.', ['CH₄ + [[2]]O₂ → CO₂ + [[2]]H₂O'], ['2', '2'], 'Complete combustion of a hydrocarbon gives carbon dioxide and water.')
  ] });
  add('chem-or2', { gaps: [
    G('Fractional distillation.', ['Crude oil is heated and the vapours rise up a [[column|fractionating column]]. Fractions with [[lower|smaller|low]] boiling points rise higher.'], [], 'The column is hotter at the bottom and cooler at the top.'),
    G('Trends in the fractions.', ['As the hydrocarbon molecules get longer, the boiling point [[increases|rises|goes up]] and the liquid becomes more [[viscous]] and less flammable.'], [], 'Longer molecules have stronger intermolecular forces.'),
    G('Uses.', ['Petrol and [[diesel]] are used as fuels; [[bitumen]] is used to surface roads.'], [], 'Each fraction has different uses depending on its properties.'),
    G('Separation.', ['The fractions are not pure compounds. Each fraction is a [[mixture]] of hydrocarbons with similar [[boiling points|chain lengths]].'], [], 'Molecules of similar size have similar boiling points.')
  ] });
  add('chem-or3', { gaps: [
    G('Why crack?', ['Cracking breaks down [[long|large]] hydrocarbons into [[shorter|smaller]] more useful molecules, because there is more demand for short chains.'], [], 'Shorter molecules are in greater demand as fuels.'),
    G('Cracking conditions.', ['Cracking can be done by heating with a [[catalyst]] or by using [[steam]].'], [], 'Both are methods of thermal decomposition.'),
    G('Test for an alkene.', ['Shaking with bromine water turns it from [[orange|brown|yellow]] to [[colourless]] if an alkene is present.'], [], 'The bromine adds across the double bond.')
  ] });
  add('chem-or4', { gaps: [
    G('Addition reactions of ethene.', ['Ethene reacts with hydrogen to form [[ethane]], with steam to form [[ethanol]] and with bromine to form dibromoethane.'], [], 'The double bond opens up and atoms are added.'),
    G('Balance and complete.', ['C₂H₄ + H₂ → C₂H<sub>[[6]]</sub>'], ['4+2'], 'Ethane has two carbon atoms and six hydrogen atoms.'),
    G('Combustion of alkenes.', ['Alkenes burn with a smoky flame because they have a [[higher]] proportion of carbon than alkanes, so combustion is more [[incomplete]].'], [], 'They are more likely to produce soot.'),
    G('Addition.', ['In an addition reaction two molecules join to form [[one]] product and no other substance is [[made|produced|formed]].'], [], 'All of the atoms of the reactants end up in the product.')
  ] });
  add('chem-or5', { gaps: [
    G('Functional group.', ['Alcohols contain the [[–OH|OH|hydroxyl]] functional group. Methanol, ethanol and [[propanol]] are the first three.'], [], 'All alcohols have names ending in -ol.'),
    G('Reaction with sodium.', ['Alcohols react with sodium to produce [[hydrogen]] gas, but less vigorously than [[water]] does.'], [], 'Bubbles of hydrogen are seen.'),
    G('Oxidation.', ['Ethanol can be oxidised to ethanoic acid, a [[carboxylic acid]], for example by using an oxidising agent or by [[microbes|bacteria|air]].'], [], 'This is how wine turns to vinegar.'),
    G('Fermentation.', ['Ethanol is made by [[fermentation]] of sugar using [[yeast]] at about 30 °C, in [[anaerobic|no oxygen]] conditions.'], [], 'The sugar is broken down to ethanol and carbon dioxide.')
  ] });
  add('chem-or6', { gaps: [
    G('Carboxylic acids.', ['Carboxylic acids contain the [[–COOH|COOH]] group and are [[weak]] acids because they ionise only partly.'], [], 'Their names end in -oic acid.'),
    G('Reaction with carbonates.', ['Carboxylic acids react with carbonates to give a salt, water and [[carbon dioxide]].'], [], 'This is the same as other acids.'),
    G('Esters.', ['A carboxylic acid reacts with an [[alcohol]] to make an [[ester]] and water, using an acid catalyst.'], [], 'Esters have a sweet, fruity smell.'),
    G('Name the ester.', ['Ethanol and ethanoic acid make ethyl [[ethanoate]].'], [], 'The alcohol part comes first, then the acid part ending in -oate.')
  ] });
  add('chem-or7', { gaps: [
    G('Addition polymerisation.', ['Many small [[monomers|monomer]] molecules with a C=C double bond join to form a long [[polymer]] chain.'], [], 'Poly(ethene) is made from ethene.'),
    G('Poly(ethene).', ['The monomer is [[ethene]] and the polymer is represented by a repeating unit in brackets with the letter [[n]] outside.'], [], 'The double bond opens so that the monomers can link.'),
    G('Products.', ['In addition polymerisation the only product is the [[polymer]], so there is [[no|not any]] other product.'], [], 'No small molecule is lost.'),
    G('Draw the repeat unit.', ['For poly(propene) the repeat unit has [[2]] carbon atoms in the main chain.'], ['2'], 'The CH₃ group is a side group, not part of the main chain.', true)
  ] });
  add('chem-or8', { gaps: [
    G('Condensation polymerisation.', ['Monomers join and lose a small molecule, usually [[water]], for each link formed. There are [[two]] different functional groups in the monomers.'], [], 'The small molecule is lost each time a bond forms.'),
    G('Polyesters.', ['A polyester is made from a [[diol|dialcohol]] and a dicarboxylic acid, and the link between them is an [[ester]] link.'], [], 'Each monomer has two functional groups.'),
    G('Amino acids.', ['Amino acids join by condensation polymerisation to form [[proteins|polypeptides]]. Each amino acid has an amine group and a [[carboxyl|carboxylic acid]] group.'], [], 'The amine and acid groups react together.'),
    G('DNA.', ['DNA is a polymer made from four different [[nucleotides|monomers]] arranged in two strands that form a [[double helix]].'], [], 'Each nucleotide contains a sugar, a phosphate and a base.')
  ] });

  add('chem-an1', { gaps: [
    G('Pure substances.', ['In chemistry a pure substance is a single [[element]] or [[compound]], which melts and boils at a [[fixed|specific|sharp]] temperature.'], [], 'Mixtures melt over a range of temperatures.'),
    G('Melting point data.', ['A sample melts between 79 °C and 82 °C, whereas pure naphthalene melts at 80 °C. The sample is [[impure|a mixture|not pure]].'], [], 'Impurities lower and widen the melting range.'),
    G('Formulations.', ['A formulation is a [[mixture]] designed as a useful product, with exact [[quantities|amounts|proportions]] of each component.'], [], 'Examples: fuels, paints, medicines, alloys and fertilisers.'),
    G('Percentage composition.', ['A 50 g formulation contains 10 g of an active ingredient: the percentage is 10 ÷ 50 × 100 = [[20]]%.'], ['10/50*100'], 'Percentage = part ÷ whole × 100.')
  ] });
  add('chem-an2', { gaps: [
    G('Setting up.', ['The start line is drawn in [[pencil]] because ink would [[dissolve|run|spread]] in the solvent.'], [], 'Pencil is insoluble.'),
    G('Solvent level.', ['The solvent must be [[below]] the start line so the sample does not dissolve into the solvent in the beaker.'], [], 'The sample must stay on the paper.'),
    G('R<sub>f</sub> value.', ['A spot travels 3.0 cm and the solvent travels 5.0 cm. R<sub>f</sub> = 3.0 ÷ 5.0 = [[0.6|0.60]]'], ['3.0/5.0'], 'R<sub>f</sub> = distance moved by the substance ÷ distance moved by the solvent.'),
    G('Interpretation.', ['A pure substance gives [[one]] spot. Different substances can be identified by comparing their R<sub>f</sub> values with those of [[known|reference|standard]] substances.'], [], 'A mixture gives more than one spot.')
  ] });
  add('chem-an3', { gaps: [
    G('Hydrogen.', ['Hydrogen gives a [[squeaky pop]] with a lit splint.'], [], 'The gas burns rapidly with oxygen.'),
    G('Oxygen.', ['Oxygen relights a [[glowing]] splint.'], [], 'It supports combustion.'),
    G('Carbon dioxide.', ['Carbon dioxide turns limewater [[milky|cloudy]].'], [], 'A white precipitate of calcium carbonate forms.'),
    G('Chlorine.', ['Chlorine [[bleaches]] damp litmus paper, turning it [[white]].'], [], 'The paper turns red briefly because chlorine solution is acidic.')
  ] });
  add('chem-an4', { gaps: [
    G('Flame tests.', ['Lithium gives a [[crimson|red]] flame, sodium a [[yellow]] flame, potassium a [[lilac]] flame and copper a [[green|blue-green]] flame.'], [], 'Calcium gives an orange-red flame.'),
    G('Sodium hydroxide test.', ['Copper(II) ions give a [[blue]] precipitate; iron(II) ions give a [[green]] precipitate; iron(III) ions give a [[brown]] precipitate.'], [], 'Add sodium hydroxide solution to the unknown solution.'),
    G('White precipitates.', ['Aluminium, calcium and magnesium ions give a [[white]] precipitate. The aluminium precipitate [[dissolves|redissolves]] in excess sodium hydroxide.'], [], 'Magnesium and calcium precipitates do not dissolve.'),
    G('Why use instrumental methods?', ['Flame emission spectroscopy is [[fast|quick|rapid]], very [[sensitive]] and accurate, and it can identify mixtures of ions.'], [], 'It uses a small sample.')
  ] });
  add('chem-an5', { gaps: [
    G('Carbonate ions.', ['Add dilute acid; carbonates produce [[carbon dioxide]], which turns limewater milky.'], [], 'CO₃²⁻ + 2H⁺ → CO₂ + H₂O.'),
    G('Halide ions.', ['Add dilute [[nitric]] acid and then silver nitrate. Chloride gives a [[white]] precipitate, bromide a [[cream]] precipitate and iodide a [[yellow]] precipitate.'], [], 'The acid is added first to remove carbonate ions.'),
    G('Sulfate ions.', ['Add dilute hydrochloric acid and [[barium chloride]] solution. A [[white]] precipitate shows sulfate ions.'], [], 'The precipitate is barium sulfate.'),
    G('Why add acid first?', ['Dilute acid is added first to remove [[carbonate|carbonates]] ions, which would also form a white precipitate.'], [], 'This avoids a false positive result.')
  ] });
  add('chem-an6', { gaps: [
    G('Advantages of instrumental methods.', ['Instrumental methods are accurate, [[sensitive]] and [[rapid|quick|fast]], and can test very small samples.'], [], 'They are used in forensics and monitoring.'),
    G('Flame emission spectroscopy.', ['The light from a heated sample is split into a [[spectrum]], and the pattern of lines identifies the [[metal ions|ions|metal]] present.'], [], 'Each ion has a characteristic pattern.'),
    G('Flame tests compared.', ['In a simple flame test a mixture of ions can give a [[mixed|confusing]] colour, making it [[hard|difficult]] to interpret.'], [], 'Spectroscopy can identify each ion separately.'),
    G('Concentration.', ['A flame emission spectrometer can also measure the [[concentration]] of the ions by the [[intensity|brightness]] of the light.'], [], 'The intensity of a line depends on the amount of ion present.')
  ] });

  add('chem-am1', { gaps: [
    G('Composition of today’s atmosphere.', ['Dry air is about [[80|78]]% nitrogen and about [[20|21]]% oxygen, with small amounts of argon and carbon dioxide.'], ['80', '20'], 'Nitrogen is the most abundant gas.'),
    G('Early atmosphere.', ['Volcanic activity released carbon dioxide, [[water vapour|steam]] and nitrogen. The water vapour [[condensed]] to form the oceans.'], [], 'The early atmosphere was mostly carbon dioxide.'),
    G('Oxygen.', ['The oxygen in the atmosphere was produced by [[algae|plants]] through [[photosynthesis]].'], [], 'Photosynthesis removed carbon dioxide and released oxygen.'),
    G('Decrease in carbon dioxide.', ['Carbon dioxide levels fell because it was [[absorbed|taken in]] by plants, dissolved in the oceans and locked up in [[sedimentary rocks|fossil fuels|limestone]].'], [], 'Carbon was locked up in rocks and fossil fuels.')
  ] });
  add('chem-am2', { gaps: [
    G('Greenhouse gases.', ['Carbon dioxide, methane and [[water vapour]] are greenhouse gases that [[absorb]] long-wavelength infrared radiation.'], [], 'They keep the Earth warm.'),
    G('Human activity.', ['Burning fossil fuels increases carbon dioxide levels, and [[farming|cattle|landfill|agriculture]] increases methane levels.'], [], 'Methane comes from livestock and rice paddies.'),
    G('Global warming.', ['An increase in greenhouse gases leads to an increase in the Earth’s average [[temperature]], called global [[warming]].'], [], 'The effects include rising sea levels and extreme weather.'),
    G('Evidence.', ['It is hard to model climate change because the system is [[complex]] and there are [[many|lots of]] variables.'], [], 'Predictions have uncertainty.')
  ] });
  add('chem-am3', { gaps: [
    G('Carbon footprint.', ['The carbon footprint is the total amount of [[carbon dioxide]] and other greenhouse gases emitted over the [[life cycle|lifetime]] of a product or event.'], [], 'It is measured in kilograms or tonnes.'),
    G('Reducing carbon footprint.', ['Use renewable energy, improve [[energy efficiency|efficiency]] and plant forests, because trees [[absorb|take in|remove]] carbon dioxide.'], [], 'Carbon capture and storage can also help.'),
    G('Difficulties.', ['It is hard to cut emissions because of [[cost]] and because it depends on [[international|global]] cooperation and public attitudes.'], [], 'People may be reluctant to change lifestyle.'),
    G('Carbon neutral.', ['Burning biofuels adds carbon dioxide to the atmosphere, but the plants [[absorbed|took in]] the same amount while growing.'], [], 'Biofuels can be described as carbon neutral, ignoring transport and processing.')
  ] });
  add('chem-am4', { gaps: [
    G('Incomplete combustion.', ['Incomplete combustion makes [[carbon monoxide]] and soot (carbon) because there is not enough [[oxygen]].'], [], 'Carbon monoxide is a toxic gas.'),
    G('Carbon monoxide.', ['Carbon monoxide is toxic because it [[binds|combines]] with haemoglobin, so less [[oxygen]] is carried in the blood.'], [], 'It is colourless and odourless.'),
    G('Acid rain.', ['Burning fuels containing sulfur releases sulfur [[dioxide]], which causes [[acid rain]].'], [], 'Nitrogen oxides also cause acid rain.'),
    G('Nitrogen oxides.', ['Nitrogen oxides form when nitrogen and oxygen react at [[high]] temperatures, for example in a car [[engine]].'], [], 'The reaction does not occur at room temperature.')
  ] });

  add('chem-ur1', { gaps: [
    G('Potable water.', ['Potable water is water that is [[safe]] to drink. It is not the same as [[pure]] water, which contains nothing else.'], [], 'Potable water may contain dissolved substances.'),
    G('Treating fresh water.', ['Water from rivers and reservoirs is passed through a [[filter bed|filter]] and then sterilised using chlorine, [[ozone]] or ultraviolet light.'], [], 'Sterilising kills microbes.'),
    G('Desalination.', ['Sea water can be made potable by [[distillation]] or by [[reverse osmosis]], but both use a lot of [[energy]].'], [], 'This makes desalination expensive.'),
    G('Sustainable development.', ['Sustainable development meets the needs of [[current|present]] generations without harming [[future]] generations.'], [], 'It considers the environment and resources.')
  ] });
  add('chem-ur2', { gaps: [
    G('Sewage treatment stages.', ['Screening removes large [[solids|objects]], then sedimentation produces [[sludge]] and effluent.'], [], 'Sludge settles at the bottom.'),
    G('Sludge.', ['The sludge is broken down by [[anaerobic]] digestion, which can produce [[methane|biogas]] gas.'], [], 'The gas can be used as fuel.'),
    G('Effluent.', ['The effluent is treated by [[aerobic]] biological treatment, which needs a supply of [[oxygen|air]].'], [], 'Bacteria break down the organic matter.'),
    G('Industrial waste water.', ['Industrial waste may need extra treatment to remove [[harmful|toxic]] chemicals and [[organic]] matter.'], [], 'Some substances are dangerous to living things.')
  ] });
  add('chem-ur3', { gaps: [
    G('Low-grade ores.', ['Copper-rich ores are running [[out|low]], so scientists use [[phytomining]] and bioleaching to extract copper from low-grade ores.'], [], 'These methods are less damaging to the environment.'),
    G('Phytomining.', ['Plants absorb copper compounds through their roots. The plants are [[burned]] and the copper is extracted from the [[ash]].'], [], 'The plants concentrate the metal.'),
    G('Bioleaching.', ['In bioleaching, [[bacteria|microorganisms]] produce a solution called a [[leachate]] that contains copper ions.'], [], 'The copper can be extracted from the leachate.'),
    G('Getting copper from a solution.', ['Copper can be obtained from a solution by [[displacement]] with scrap iron, or by [[electrolysis]].'], [], 'Iron is more reactive than copper.')
  ] });
  add('chem-ur4', { gaps: [
    G('Life cycle assessment.', ['A life cycle assessment looks at the [[environmental]] impact of a product from getting the [[raw materials|raw material]] to its [[disposal]].'], [], 'The stages are raw materials, manufacture, use and disposal.'),
    G('Recycling.', ['Recycling metals saves [[energy]] and conserves [[raw materials|ores|resources]], and reduces waste going to landfill.'], [], 'Glass and metals can be recycled many times.'),
    G('Why LCAs can be biased.', ['Some of the data in a life cycle assessment is [[subjective|value judgements|a matter of opinion]], so it can be used to support an [[advert|argument|claim]].'], [], 'Selective use can make a product look better than it is.'),
    G('Reuse.', ['Glass bottles can be [[reused|washed]] or crushed and melted to make new glass.'], [], 'Reuse needs less energy than recycling.')
  ] });
  add('chem-ur5', { gaps: [
    G('Rusting.', ['Iron rusts when it is in contact with both [[oxygen|air]] and [[water]].'], [], 'Both are needed for rusting.'),
    G('Barrier methods.', ['Painting, oiling and [[coating|plating]] stop oxygen and water reaching the metal.'], [], 'They form a barrier.'),
    G('Sacrificial protection.', ['A more [[reactive]] metal such as [[zinc|magnesium]] is attached to iron and corrodes instead of the iron.'], [], 'The more reactive metal loses electrons first.'),
    G('Galvanising.', ['Galvanised iron is coated with [[zinc]], which protects the iron even if the coating is [[scratched|damaged|broken]].'], [], 'It provides both a barrier and sacrificial protection.')
  ] });
  add('chem-ur6', { gaps: [
    G('Alloys.', ['Steel is an alloy of iron and [[carbon]]. Alloys are [[harder|stronger]] than pure metals.'], [], 'The different atoms distort the layers.'),
    G('Ceramics.', ['Glass and clay ceramics are [[brittle]], poor conductors and have high melting points.'], [], 'Ceramics include pottery and bricks.'),
    G('Polymers.', ['Thermosoftening polymers [[melt|soften]] on heating, but thermosetting polymers [[do not melt|keep their shape|do not soften]] because of strong cross-links.'], [], 'Cross-links join the polymer chains together.'),
    G('Composites.', ['A composite is made of [[fibres|reinforcement]] surrounded by a [[matrix|binder]], for example carbon fibre or concrete.'], [], 'Composites combine useful properties of materials.')
  ] });
  add('chem-ur7', { gaps: [
    G('Haber process.', ['N₂ + 3H₂ ⇌ [[2]]NH₃. The reactants are [[nitrogen]] from the air and [[hydrogen]] from natural gas.'], ['2'], 'The reaction is reversible.'),
    G('Conditions.', ['The conditions are about [[450]] °C, 200 atmospheres pressure and an [[iron]] catalyst.'], ['450'], 'It is a compromise between rate and yield.'),
    G('Recycling.', ['Unreacted nitrogen and hydrogen are [[recycled|returned]] to the reactor, and ammonia is [[liquefied|cooled]] and removed.'], [], 'Ammonia condenses at a higher temperature than the reactant gases.'),
    G('NPK fertilisers.', ['NPK fertilisers contain compounds of [[nitrogen]], [[phosphorus]] and [[potassium]].'], [], 'Plants need these elements for healthy growth.')
  ] });
})();
