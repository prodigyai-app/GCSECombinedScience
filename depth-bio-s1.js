/* Fill-the-gaps for Cell biology (4.1) and Organisation (4.2). Every number is recomputed by tools/verify-depth.cjs. */
(() => {
  const add = GcseDepth.add, G = (q, lines, calc, why, higher) => Object.assign({ q, lines, calc: calc || [], why }, higher ? { higher: true } : {});

  add('b-cells', { gaps: [
    G('Cell structures.', ['The [[nucleus]] contains the genetic material, the [[mitochondria|mitochondrion]] release energy by aerobic respiration and [[ribosomes|ribosome]] make proteins.'], [], 'Each sub-cellular structure has a specific job.'),
    G('Plant cells only.', ['Plant cells have a rigid [[cell wall]] made of cellulose, a [[permanent]] vacuole containing cell sap and [[chloroplasts|chloroplast]] for photosynthesis.'], [], 'Animal cells do not have any of these three structures.'),
    G('Bacterial cells.', ['Bacteria are [[prokaryotic|prokaryotes]] cells. Their genetic material is not in a nucleus but is a single [[DNA|chromosomal DNA]] loop, and they may also contain small rings called [[plasmids|plasmid]].'], [], 'Prokaryotic cells have no nucleus.'),
    G('Membranes and walls.', ['The cell [[membrane]] controls which substances enter and leave the cell, whereas the [[cytoplasm]] is where most chemical reactions take place.'], [], 'Both plant and animal cells have a membrane and cytoplasm.')
  ] });
  add('b-microscopy', { gaps: [
    G('Magnification equation.', ['magnification = [[image size|size of image]] ÷ [[real size|actual size|size of real object]]'], [], 'Make sure the image size and real size are in the same units.'),
    G('A cell image is 45 mm long. The real cell is 0.09 mm long.', ['magnification = 45 ÷ 0.09 = ×[[500]]'], ['45/0.09'], 'Divide the image size by the real size.'),
    G('A cell has a real length of 0.060 mm and is magnified ×400.', ['image size = 0.060 × 400 = [[24]] mm'], ['0.060*400'], 'Rearrange magnification = image ÷ real.'),
    G('Resolution.', ['An electron microscope has a higher [[resolution]] and [[magnification]] than a light microscope, so it can show [[sub-cellular|internal]] structures in more detail.'], [], 'Electron microscopes reveal ribosomes and the internal structure of mitochondria.')
  ] });
  add('b-specialisation', { gaps: [
    G('Differentiation.', ['As an animal embryo develops, cells [[differentiate]] to become [[specialised]] for a particular function.'], [], 'Most animal cells lose the ability to differentiate once specialised.'),
    G('Sperm cell.', ['A sperm cell has a [[tail]] to swim, many [[mitochondria]] to provide energy and an [[acrosome|enzymes]] with enzymes to digest the egg cell membrane.'], [], 'Each feature is linked to its function.'),
    G('Root hair cell.', ['A root hair cell has a long extension that gives a large [[surface area]] and many mitochondria to provide energy for [[active transport]] of mineral ions.'], [], 'Root hair cells absorb water and mineral ions.'),
    G('Xylem.', ['Xylem cells are [[dead|hollow]] cells joined end to end with walls strengthened by [[lignin]], and they carry [[water]] up the plant.'], [], 'Lignin makes the walls strong and waterproof.')
  ] });
  add('b-mitosis', { gaps: [
    G('The cell cycle.', ['Before a cell divides, its [[DNA]] is copied and the number of sub-cellular structures [[increases|doubles]].'], [], 'Growth and DNA replication happen first.'),
    G('Stages.', ['In mitosis the [[chromosomes]] line up, one set of chromosomes is pulled to each end of the cell and then the [[cytoplasm]] and cell membranes divide.'], [], 'Cytokinesis follows mitosis.'),
    G('A human body cell has 46 chromosomes.', ['After mitosis each daughter cell has [[46]] chromosomes and is [[genetically identical|identical]] to the parent cell.'], ['46'], 'Mitosis produces two genetically identical diploid cells.'),
    G('Uses of mitosis.', ['Mitosis is used for [[growth]], for [[repair]] of damaged tissue and, in some organisms, for [[asexual reproduction|asexual]] reproduction.'], [], 'It produces new cells with the same genes.')
  ] });
  add('b-stem', { gaps: [
    G('Stem cells.', ['Stem cells are [[undifferentiated]] cells that can divide and differentiate into [[many|different|other]] types of cell.'], [], 'They are found in embryos, in adult bone marrow and in meristems of plants.'),
    G('Therapeutic uses.', ['Stem cells from [[bone marrow|embryos]] can be used to replace damaged cells, for example in the treatment of [[paralysis|diabetes|blindness]].'], [], 'Treatment is still being developed for many conditions.'),
    G('Risks.', ['A risk of stem cell treatment is that [[viruses|a virus]] in donor cells could be transferred to the patient, and that the cells may be [[rejected]] by the immune system.'], [], 'Using the patient’s own stem cells reduces the risk of rejection.'),
    G('Plant stem cells.', ['Meristem tissue in plants can differentiate into any type of plant cell throughout the plant’s [[life]], and is used to produce [[clones]] quickly.'], [], 'Clones of rare plants can be grown to prevent extinction.')
  ] });
  add('b-diffusion', { gaps: [
    G('Definition.', ['Diffusion is the [[net]] movement of particles from a region of [[higher|high]] concentration to a region of [[lower|low]] concentration.'], [], 'It does not need energy from respiration.'),
    G('A cube has a side of 3 cm.', ['Surface area = 6 × 3² = [[54]] cm²; volume = 3³ = [[27]] cm³; ratio = [[2]] : 1'], ['6*3**2', '3**3', '54/27'], 'Surface area to volume ratio = area ÷ volume.'),
    G('Factors.', ['Diffusion is faster with a [[steeper]] concentration gradient, a larger [[surface area]] and a higher [[temperature]].'], [], 'Particles move faster at a higher temperature.'),
    G('Exchange surfaces.', ['Alveoli have a thin wall, a good [[blood]] supply and are [[ventilated]] to maintain a steep concentration gradient.'], [], 'Breathing and blood flow keep the gradient steep.')
  ] });
  add('b-osmosis', { gaps: [
    G('Definition.', ['Osmosis is the diffusion of [[water]] from a dilute solution to a concentrated solution through a [[partially permeable|selectively permeable|semi-permeable]] membrane.'], [], 'Water moves from high water concentration to low water concentration.'),
    G('A potato cylinder is 5.0 g before and 5.5 g after being left in a solution.', ['percentage change = (5.5 − 5.0) ÷ 5.0 × 100 = [[10]]%'], ['(5.5-5.0)/5.0*100'], 'Percentage change = change ÷ original × 100.'),
    G('A potato cylinder changes from 4.0 g to 3.4 g.', ['percentage change = (3.4 − 4.0) ÷ 4.0 × 100 = [[-15|−15]]%'], ['(3.4-4.0)/4.0*100'], 'A negative value shows a loss of mass.'),
    G('Interpretation.', ['The mass of the potato cylinder decreases in a [[concentrated|strong]] sugar solution because water leaves the cells by [[osmosis]].'], [], 'The concentration where there is no change in mass shows the concentration inside the potato cells.')
  ] });
  add('b-active', { gaps: [
    G('Active transport.', ['Active transport moves substances from a [[lower|low]] concentration to a [[higher|high]] concentration, against the concentration gradient, and needs [[energy]] from respiration.'], [], 'Diffusion and osmosis are passive.'),
    G('Where it occurs.', ['Root hair cells use active transport to absorb mineral [[ions]] from the soil, and the gut absorbs [[glucose]] into the blood.'], [], 'The concentration in the cell is higher than outside.'),
    G('Evidence.', ['A cell with many [[mitochondria]] is likely to carry out a lot of active transport, because it needs a lot of [[energy|ATP]].'], [], 'Mitochondria release energy in respiration.'),
    G('Compare the processes.', ['Of diffusion, osmosis and active transport, only [[active transport]] needs energy from respiration.'], [], 'The other two are passive.')
  ] });
  add('b-culture', { gaps: [
    G('Aseptic technique.', ['Inoculating loops are passed through a [[flame]] to sterilise them, and the lid of the Petri dish is [[taped|secured|sealed]] on to prevent contamination.'], [], 'This prevents unwanted microorganisms from growing.'),
    G('Incubation.', ['Cultures in school are incubated at a maximum of [[25]] °C to reduce the chance of growing [[pathogens|harmful bacteria]] that are dangerous.'], ['25'], 'Human pathogens grow best at body temperature.'),
    G('Inhibition zone.', ['A clear area around a disc shows that the antibiotic has [[killed|inhibited]] the bacteria. A larger zone means the antibiotic is [[more]] effective.'], [], 'The antibiotic diffuses out of the disc.'),
    G('A zone has a diameter of 12 mm.', ['Area = πr² = π × [[6]]² = [[113]] mm²'], ['12/2', 'pi*6**2'], 'Radius = diameter ÷ 2.')
  ] });

  add('b-digestion', { gaps: [
    G('Levels of organisation.', ['Cells form [[tissues]], tissues form [[organs]], and organs form organ [[systems]].'], [], 'The digestive system is an organ system.'),
    G('Enzymes and their substrates.', ['Amylase breaks down [[starch]], protease breaks down [[protein|proteins]] and lipase breaks down [[lipids|fats]].'], [], 'The products are sugars, amino acids and fatty acids with glycerol.'),
    G('Bile.', ['Bile is made in the [[liver]], stored in the gall bladder and is [[alkaline]] to neutralise acid from the stomach. It also [[emulsifies]] fat to increase the surface area.'], [], 'Bile provides the right pH for enzymes in the small intestine.'),
    G('Products of digestion.', ['Carbohydrases produce simple [[sugars]], proteases produce [[amino acids]], and lipases produce [[fatty acids]] and glycerol.'], [], 'Digested food is absorbed into the blood.')
  ] });
  add('b-enzymes', { gaps: [
    G('Enzymes.', ['Enzymes are biological [[catalysts]] made of [[protein|proteins]]. Each has an [[active site]] that fits a specific substrate.'], [], 'This is called the lock and key model.'),
    G('Temperature.', ['As the temperature rises above the optimum, the shape of the active site [[changes|is altered]] and the enzyme becomes [[denatured]].'], [], 'The substrate no longer fits.'),
    G('pH.', ['Pepsin works best at about pH [[2]] in the stomach, whereas amylase works best at about pH [[7]].'], ['2', '7'], 'Different enzymes have different optimum pH values.'),
    G('Interpreting a starch test.', ['Iodine solution stays orange-brown when added to a sample taken after 90 s, so starch is [[absent|not present|no longer present]], showing that amylase has [[digested|broken down]] it.'], [], 'Iodine turns blue-black only if starch is present.')
  ] });
  add('b-foodtests', { gaps: [
    G('Benedict’s test.', ['Heating with Benedict’s reagent turns it from blue to [[green|yellow|orange|brick red|red]] if [[reducing sugar|sugar|sugars]] is present.'], [], 'The colour depends on the amount of sugar.'),
    G('Iodine test.', ['Iodine solution turns from orange-brown to [[blue-black|blue black]] if [[starch]] is present.'], [], 'It is a test for starch.'),
    G('Biuret test.', ['Biuret reagent turns from blue to [[purple|lilac]] if [[protein]] is present.'], [], 'This is a test for protein.'),
    G('Lipid test.', ['Shaking a sample with ethanol then water gives a [[cloudy|white]] emulsion if [[lipids|lipid|fats]] are present.'], [], 'This is the ethanol emulsion test.')
  ] });
  add('b-heart', { gaps: [
    G('The heart.', ['The [[right]] ventricle pumps blood to the lungs and the [[left]] ventricle pumps blood to the body.'], [], 'The left ventricle has a thicker muscular wall.'),
    G('Valves.', ['The heart has [[valves]] to prevent the [[backflow|back flow]] of blood.'], [], 'Valves keep blood flowing in one direction.'),
    G('Cardiac output.', ['The heart rate is 70 beats per minute and the stroke volume is 80 cm³. cardiac output = 70 × 80 = [[5600]] cm³/min.'], ['70*80'], 'Cardiac output = stroke volume × heart rate.'),
    G('Blood vessels.', ['Arteries carry blood [[away from|from]] the heart at high pressure and have thick [[muscular|elastic]] walls; [[capillaries|capillary]] are one cell thick for exchange.'], [], 'Veins carry blood to the heart and have valves.')
  ] });
  add('b-blood', { gaps: [
    G('Red blood cells.', ['Red blood cells carry [[oxygen]] in [[haemoglobin]]. They have no [[nucleus]] and a biconcave shape to give a large surface area.'], [], 'Haemoglobin combines with oxygen to form oxyhaemoglobin.'),
    G('White cells and platelets.', ['White blood cells defend against [[pathogens]]; [[platelets]] help the blood to clot.'], [], 'Plasma carries dissolved substances.'),
    G('Heart disease.', ['In coronary heart disease the coronary arteries are narrowed by [[fatty]] deposits. A [[stent]] can be used to keep an artery open.'], [], 'Statins reduce blood cholesterol.'),
    G('Artificial hearts.', ['A mechanical valve can replace a [[faulty|damaged]] heart valve, but the patient may need to take [[anticoagulants|drugs to prevent clots|blood-thinning drugs]].'], [], 'Blood can clot on artificial surfaces.')
  ] });
  add('b-health', { gaps: [
    G('Health.', ['A [[communicable]] disease can be passed from person to person; a [[non-communicable|non communicable]] disease cannot.'], [], 'Cancer and heart disease are non-communicable.'),
    G('Risk factors.', ['Smoking increases the risk of lung cancer and [[heart|cardiovascular]] disease; an excess of [[alcohol]] damages the liver.'], [], 'Many diseases have several risk factors.'),
    G('Cancer.', ['Cancer results from uncontrolled cell [[division|growth]]. A [[benign]] tumour does not spread, but a [[malignant]] tumour invades other tissues.'], [], 'Malignant cells can spread in the blood to form secondary tumours.'),
    G('Percentage risk.', ['In a study, 30 of 600 smokers had a disease: percentage = 30 ÷ 600 × 100 = [[5]]%.'], ['30/600*100'], 'Percentage = number ÷ total × 100.')
  ] });
  add('b-plants', { gaps: [
    G('Transport tissues.', ['[[Xylem]] transports water and mineral ions from the roots; [[phloem]] transports dissolved sugars to the rest of the plant.'], [], 'Transport of sugars in phloem is called translocation.'),
    G('Stomata.', ['Water vapour leaves the leaf through [[stomata]], which are opened and closed by [[guard cells]].'], [], 'The loss of water vapour is called transpiration.'),
    G('Transpiration.', ['Transpiration is faster in [[hot|warm]], [[dry]], windy and bright conditions.'], [], 'Higher temperature and wind remove water vapour faster.'),
    G('Palisade mesophyll.', ['The palisade layer contains many [[chloroplasts]] and is near the [[upper|top]] surface of the leaf, so it is the main site of [[photosynthesis]].'], [], 'The cells are packed with chloroplasts.')
  ] });
})();
