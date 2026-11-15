/* Fill-the-gaps for Atomic structure (chem-at1–chem-at9) and Bonding (chem-bo1–chem-bo9). Atomic masses used: H 1, C 12, N 14, O 16, Na 23, Mg 24, Cl 35.5, Ca 40. Every number is recomputed by tools/verify-depth.cjs. */
(() => {
  const add = GcseDepth.add, G = (q, lines, calc, why, higher) => Object.assign({ q, lines, calc: calc || [], why }, higher ? { higher: true } : {});

  add('chem-at1', { gaps: [
    G('Classify each substance.', ['Oxygen is an [[element]], carbon dioxide is a [[compound]] and air is a [[mixture]].'], [], 'An element has one type of atom, a compound has two or more types of atom chemically bonded, and a mixture is not chemically joined.'),
    G('Balance the equation for magnesium burning.', ['[[2]]Mg + O₂ → [[2]]MgO'], ['2', '2'], 'There are two oxygen atoms on the left, so two MgO are needed, and then two Mg.'),
    G('Balance the equation for methane burning.', ['CH₄ + [[2]]O₂ → CO₂ + [[2]]H₂O'], ['2', '2'], 'Four hydrogen atoms need two water molecules; that gives four oxygen atoms, so two O₂.'),
    G('Count the atoms in Ca(OH)₂.', ['It contains [[1]] calcium atom, [[2]] oxygen atoms and [[2]] hydrogen atoms, so [[5]] atoms altogether.'], ['1', '2', '2', '1+2+2'], 'The number outside the bracket multiplies everything inside it.')
  ] });
  add('chem-at2', { gaps: [
    G('Choose the method.', ['To separate an insoluble solid from a liquid use [[filtration]]; to obtain a solute from its solution use [[crystallisation|evaporation]].'], [], 'Filtration removes undissolved solid; evaporation or crystallisation recovers the dissolved solid.'),
    G('Separating liquids.', ['Ethanol (boiling point 78 °C) and water (100 °C) are separated by [[fractional distillation]]; the liquid that boils off first is [[ethanol]].'], [], 'The liquid with the lower boiling point evaporates first and is collected first.'),
    G('Obtaining pure water from salt solution.', ['Use [[simple distillation|distillation]]: the water [[evaporates|boils]], is cooled in the condenser and collects as [[pure water|water|distillate]].'], [], 'The salt stays behind in the flask.'),
    G('Physical methods.', ['Separating a mixture does not involve a [[chemical]] reaction, so no [[new substances|new substance]] are made.'], [], 'Mixtures can be separated by physical processes because the substances are not chemically combined.')
  ] });
  add('chem-at3', { gaps: [
    G('Match the scientist to the model.', ['Dalton thought atoms were [[solid spheres|spheres|tiny spheres]]; Thomson proposed the [[plum pudding]] model.'], [], 'Dalton: solid indivisible spheres. Thomson: a ball of positive charge with electrons embedded.'),
    G('Rutherford’s scattering experiment.', ['Most alpha particles passed straight through, so the atom is mostly [[empty space]]; a few were deflected, so the nucleus is [[positive|positively charged]].'], [], 'Like charges repel, so alpha particles (positive) were repelled by the positive nucleus.'),
    G('Rutherford’s conclusion.', ['A few alpha particles bounced back, which showed that the mass is concentrated in a tiny [[nucleus]].'], [], 'Only a very small, dense, massive centre could reverse the direction of an alpha particle.'),
    G('Later developments.', ['Bohr suggested that electrons orbit the nucleus at fixed [[distances|energy levels|shells]]; Chadwick later discovered the [[neutron]].'], [], 'Chadwick’s work (about 20 years after the nuclear model) showed that the nucleus contains neutrons.')
  ] });
  add('chem-at4', { gaps: [
    G('Sub-atomic particles.', ['A proton has relative mass [[1]] and charge [[+1|1+]]; an electron has charge [[-1|−1|1-]].'], ['1', '1', '-1'], 'Proton: 1, +1. Neutron: 1, 0. Electron: very small, −1.'),
    G('An atom of aluminium (atomic number 13, mass number 27).', ['Protons = [[13]]; electrons = [[13]]; neutrons = 27 − 13 = [[14]].'], ['13', '13', '27-13'], 'The number of protons equals the atomic number; neutrons = mass number − atomic number.'),
    G('Isotopes of chlorine.', ['Chlorine-35 and chlorine-37 have the same number of [[protons]] but different numbers of [[neutrons]]. Chlorine-37 has [[20]] neutrons.'], ['37-17'], 'Chlorine has atomic number 17, so 37 − 17 = 20 neutrons.'),
    G('The size of an atom.', ['An atom has a radius of about 0.1 nm, which is [[1e-10|1 × 10^-10|1×10^-10]] m.'], ['0.1e-9'], '1 nm = 1 × 10⁻⁹ m, so 0.1 nm = 1 × 10⁻¹⁰ m.')
  ] });
  add('chem-at5', { gaps: [
    G('Electronic structure of sodium (atomic number 11).', ['Sodium has [[11]] electrons, arranged 2, [[8]], [[1]].'], ['11', '8', '1'], 'Fill the shells from the inside: 2, then 8, then the rest.'),
    G('Electronic structure of chlorine (atomic number 17).', ['The electronic structure is 2, [[8]], [[7]].'], ['8', '17-2-8'], 'After 2 and 8, the remaining 7 electrons go in the third shell.'),
    G('Groups and shells.', ['An element with electronic structure 2,8,2 is in group [[2]] and period [[3]].'], ['2', '3'], 'The number of outer electrons gives the group; the number of shells gives the period.'),
    G('Argon (atomic number 18).', ['Argon’s structure is 2, 8, [[8]]. Its outer shell is [[full]], so it is unreactive.'], ['18-2-8'], 'A full outer shell is a stable arrangement.')
  ] });
  add('chem-at6', { gaps: [
    G('Arrangement of the modern table.', ['The elements are arranged in order of atomic [[number]]. Elements in the same [[group]] have the same number of outer electrons.'], [], 'The modern table is ordered by atomic number, not atomic weight.'),
    G('Mendeleev’s table.', ['Mendeleev left [[gaps]] for elements that had not yet been discovered and sometimes swapped the order of elements so that they fitted the [[group|pattern]].'], [], 'His predictions of the properties of missing elements were later confirmed.'),
    G('Metals and non-metals.', ['Metals are on the [[left]] of the table and form [[positive]] ions; non-metals are on the [[right]].'], [], 'Metals lose electrons to form positive ions; non-metals gain or share electrons.'),
    G('Position in the table.', ['An element with 3 shells and 6 outer electrons is in period [[3]] and group [[6|VI]].'], ['3', '6'], 'Shells give the period and outer electrons give the group.')
  ] });
  add('chem-at7', { gaps: [
    G('Group 0.', ['The noble gases are unreactive because they have a [[full]] outer shell. Their boiling points [[increase|rise|go up]] down the group.'], [], 'Larger atoms have stronger intermolecular forces, so the boiling points increase down the group.'),
    G('Alkali metals.', ['Group 1 metals have [[1]] electron in the outer shell and form ions with charge [[+1|1+]].'], ['1', '1'], 'They lose their one outer electron.'),
    G('Trend in reactivity.', ['Going down group 1, reactivity [[increases|gets greater|goes up]] because the outer electron is [[further]] from the nucleus and is lost more easily.'], [], 'The outer electron is more weakly attracted as the number of shells increases.'),
    G('Lithium in water.', ['Lithium reacts with water to form lithium [[hydroxide]] and [[hydrogen]] gas; the solution is [[alkaline]].'], [], 'The alkali metals form hydroxides, which give alkaline solutions.')
  ] });
  add('chem-at8', { gaps: [
    G('Properties of the halogens.', ['The halogens are [[non-metals|non metals]] with [[7]] outer electrons and form ions with charge [[-1|−1|1-]].'], ['7', '-1'], 'They gain one electron to complete the outer shell.'),
    G('Trend in boiling points.', ['Going down group 7, the boiling points [[increase|rise|go up]]. At room temperature chlorine is a [[gas]] and iodine is a [[solid]].'], [], 'The molecules get larger, so intermolecular forces are stronger.'),
    G('Displacement.', ['Chlorine displaces [[bromine]] from potassium bromide solution because chlorine is more [[reactive]] than bromine.'], [], 'A more reactive halogen displaces a less reactive halogen from its salt.'),
    G('Reactivity trend.', ['Going down group 7, reactivity [[decreases|falls|goes down|gets less]] because the outer shell is [[further]] from the nucleus, so an electron is gained less easily.'], [], 'The opposite trend to group 1.')
  ] });
  add('chem-at9', { gaps: [
    G('Properties of transition metals.', ['Compared with group 1 metals, transition metals have [[higher]] melting points, [[higher|greater]] density and are [[harder|stronger]].'], [], 'Transition metals are strong, dense and have high melting points.'),
    G('Ions and colour.', ['Transition metal compounds are often [[coloured]] and the metals can form ions with different [[charges]].'], [], 'For example, iron forms Fe²⁺ and Fe³⁺ ions.'),
    G('Catalysts.', ['Many transition metals and their compounds act as [[catalysts]]; iron is used in the [[Haber]] process.'], [], 'Iron catalyses the production of ammonia.'),
    G('Comparison with group 1.', ['Transition metals are [[less]] reactive than the alkali metals and do not react vigorously with [[water]].'], [], 'They are much less reactive than group 1 metals.')
  ] });

  add('chem-bo1', { gaps: [
    G('Sodium and chlorine.', ['Sodium (2,8,1) [[loses]] one electron to form Na⁺; chlorine (2,8,7) [[gains]] one electron to form Cl⁻.'], [], 'Metals lose electrons and non-metals gain them in ionic bonding.'),
    G('Magnesium oxide.', ['Mg (2,8,2) loses [[2]] electrons to form Mg²⁺. O (2,6) gains [[2]] electrons to form O²⁻. The formula is [[MgO]].'], ['2', '2'], 'The charges balance (+2 and −2), so one of each ion.'),
    G('Ion charges.', ['Group 1 ions have charge [[1+|+1]], group 2 ions [[2+|+2]], group 6 ions [[2-|2−|-2|−2]] and group 7 ions [[1-|1−|-1|−1]].'], [], 'The charge depends on how many electrons are lost or gained to get a full outer shell.'),
    G('Ionic bond.', ['An ionic bond is the [[electrostatic]] force of attraction between [[oppositely]] charged ions.'], [], 'It is strong and acts in all directions.')
  ] });
  add('chem-bo2', { gaps: [
    G('Formulae from charges.', ['Calcium ions are Ca²⁺ and chloride ions are Cl⁻, so calcium chloride has [[1]] Ca²⁺ ion for every [[2]] Cl⁻ ions: the formula is [[CaCl₂|CaCl2]].'], ['1', '2'], 'Two chloride ions balance one calcium ion.'),
    G('Sodium oxide.', ['Na⁺ and O²⁻ need [[2]] Na⁺ for each O²⁻, so the formula is [[Na₂O|Na2O]].'], ['2'], 'Two +1 charges balance one −2 charge.'),
    G('Giant ionic lattice.', ['In sodium chloride each Na⁺ ion is surrounded by [[6]] Cl⁻ ions in a regular [[lattice|giant lattice|3D lattice]].'], ['6'], 'The structure is a giant 3D lattice.'),
    G('Empirical formula.', ['The ratio of ions in a lattice gives the [[empirical]] formula, as there are no separate [[molecules]].'], [], 'Ionic compounds do not exist as molecules.')
  ] });
  add('chem-bo3', { gaps: [
    G('Covalent bond.', ['A covalent bond is a [[shared pair|pair]] of electrons between two [[non-metal|non metal|nonmetal]] atoms.'], [], 'The shared electrons are attracted to both nuclei.'),
    G('Water.', ['An oxygen atom needs [[2]] more electrons, so it forms [[2]] covalent bonds with two hydrogen atoms: H₂O.'], ['2', '2'], 'Oxygen has 6 outer electrons and needs 2 more.'),
    G('Methane.', ['Carbon has [[4]] outer electrons and forms [[4]] covalent bonds with hydrogen to make CH₄.'], ['4', '4'], 'Carbon needs four more electrons to fill its outer shell.'),
    G('Double bond.', ['In carbon dioxide each oxygen atom shares [[2]] pairs of electrons with carbon, forming a [[double]] bond.'], ['2'], 'O=C=O has two double bonds.')
  ] });
  add('chem-bo4', { gaps: [
    G('Structure of a metal.', ['A metal has a regular arrangement of positive [[ions]] in a sea of [[delocalised|free]] electrons.'], [], 'This is called metallic bonding.'),
    G('Electrical conductivity.', ['Metals conduct electricity because the [[delocalised|free]] electrons can [[move|flow]] through the structure.'], [], 'The delocalised electrons carry charge.'),
    G('Malleability.', ['Metals can be bent and shaped because the [[layers]] of atoms can [[slide]] over each other.'], [], 'The bonding is not directional, so the layers slide without breaking the bonds.'),
    G('Alloys.', ['An alloy is a [[mixture]] of a metal with another element. It is [[harder]] than the pure metal because the different-sized atoms distort the [[layers]].'], [], 'The layers cannot slide over each other so easily.')
  ] });
  add('chem-bo5', { gaps: [
    G('State symbols.', ['(s) means [[solid]], (l) means [[liquid]], (g) means [[gas]] and (aq) means [[aqueous|dissolved in water]].'], [], 'These show the physical state of each substance in an equation.'),
    G('Changes of state.', ['Melting changes a solid to a [[liquid]]; the reverse is [[freezing]]. Evaporating changes a liquid to a [[gas]].'], [], 'Melting and freezing happen at the melting point.'),
    G('Particles in a gas.', ['In a gas the particles are [[far apart]] and move [[randomly|quickly|fast]]; the forces between them are [[weak|very weak]].'], [], 'The particles have the most energy and are the least ordered.'),
    G('Energy and change of state.', ['Energy is needed to overcome the [[forces]] between particles when a substance melts or boils. The particles themselves do not [[change|break up]].'], [], 'In a covalent molecular substance only the intermolecular forces are overcome.')
  ] });
  add('chem-bo6', { gaps: [
    G('Ionic compounds.', ['Ionic compounds have [[high]] melting points because the [[strong]] electrostatic forces between ions need a lot of energy to overcome.'], [], 'There are many strong forces in the lattice.'),
    G('Conduction in ionic compounds.', ['Ionic compounds conduct electricity when [[molten|dissolved|liquid]] because the [[ions]] are free to move; they do not conduct when [[solid]].'], [], 'In the solid the ions are held in fixed positions.'),
    G('Small molecules.', ['Simple molecular substances have [[low]] melting and boiling points because the [[intermolecular]] forces between molecules are weak.'], [], 'The covalent bonds inside the molecules do not break.'),
    G('Boiling points.', ['As molecules get larger, the intermolecular forces get [[stronger|greater]], so the boiling point [[increases|rises]].'], [], 'More energy is needed to separate larger molecules.')
  ] });
  add('chem-bo7', { gaps: [
    G('Giant covalent structures.', ['Diamond and silicon dioxide are giant [[covalent]] structures with [[high|very high]] melting points because many strong covalent [[bonds]] must be broken.'], [], 'All the atoms are joined by strong covalent bonds.'),
    G('Comparing structures.', ['Sodium chloride, water and copper: the one that conducts as a solid is [[copper]]; the one with the lowest boiling point is [[water]].'], [], 'Copper has delocalised electrons; water is a small molecule.'),
    G('Silicon dioxide.', ['In silicon dioxide each silicon atom is bonded to [[4]] oxygen atoms, giving a [[giant]] structure.'], ['4'], 'It has the same type of structure as diamond.'),
    G('Insulators.', ['Most giant covalent substances do not conduct electricity because they have no [[delocalised|free]] electrons or ions.'], [], 'All of the outer electrons are used in bonding.')
  ] });
  add('chem-bo8', { gaps: [
    G('Diamond.', ['Each carbon atom in diamond forms [[4]] covalent bonds, so diamond is very [[hard]] and has a [[high]] melting point.'], ['4'], 'It is used in cutting tools.'),
    G('Graphite.', ['In graphite each carbon atom forms [[3]] covalent bonds in layers with [[weak|no covalent]] forces between the layers, so it is [[soft|slippery]].'], ['3'], 'The layers can slide over each other.'),
    G('Graphite conducts.', ['Graphite conducts electricity because each carbon has one [[delocalised|free]] electron that can move between the [[layers]].'], [], 'The fourth outer electron of each carbon is delocalised.'),
    G('Graphene and fullerenes.', ['Graphene is a single [[layer]] of graphite; buckminsterfullerene (C₆₀) is a [[molecule|hollow molecule]] and carbon nanotubes are [[cylinders|tubes]].'], [], 'All are forms of carbon with different structures and uses.')
  ] });
  add('chem-bo9', { gaps: [
    G('Size of nanoparticles.', ['Nanoparticles are between [[1]] and [[100]] nm across.'], ['1', '100'], 'This is a few hundred atoms or fewer across.'),
    G('Surface area to volume ratio.', ['A cube of side 2 cm has a surface area of [[24]] cm² and a volume of [[8]] cm³, so SA : V = [[3]] : 1.'], ['6*2**2', '2**3', '24/8'], 'Surface area = 6 × side²; volume = side³.'),
    G('Smaller particles.', ['As particles get smaller, the surface area to volume ratio [[increases|gets bigger|rises]], so smaller amounts are needed as [[catalysts|catalyst]].'], [], 'More of the atoms are on the surface where reactions happen.'),
    G('Uses and risks.', ['Nanoparticles are used in [[sunscreens|sun creams|medicine|cosmetics]] but their effects on [[health]] are not fully known.'], [], 'They can enter cells easily and may be harmful.')
  ] });
})();
