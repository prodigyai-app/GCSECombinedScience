/* Fill-the-gaps for Infection and response (4.3), Bioenergetics (4.4) and Homeostasis and response (4.5). Every number is recomputed by tools/verify-depth.cjs. */
(() => {
  const add = GcseDepth.add, G = (q, lines, calc, why, higher) => Object.assign({ q, lines, calc: calc || [], why }, higher ? { higher: true } : {});

  add('b-pathogens', { gaps: [
    G('Types of pathogen.', ['Pathogens include [[bacteria]], [[viruses]], protists and [[fungi]].'], [], 'Each type can cause disease in animals or plants.'),
    G('Match the disease to the pathogen.', ['Measles is caused by a [[virus]], salmonella food poisoning by a [[bacterium|bacteria]] and malaria by a [[protist]].'], [], 'Rose black spot is caused by a fungus.'),
    G('Spread of disease.', ['Pathogens can be spread by water, by [[air|droplets]] and by direct [[contact]]. Malaria is spread by a [[vector|mosquito]].'], [], 'A vector carries the pathogen without being harmed.'),
    G('Reducing spread.', ['Spread of disease can be reduced by [[hygiene|washing hands]], destroying vectors, isolating infected individuals and [[vaccination]].'], [], 'Condoms reduce the spread of gonorrhoea and HIV.')
  ] });
  add('b-defence', { gaps: [
    G('Non-specific defences.', ['The skin is a [[barrier]]; the nose traps pathogens in [[mucus|hairs]]; the stomach produces [[hydrochloric|strong|hydrochloric acid]] acid.'], [], 'These defences work against all pathogens.'),
    G('White blood cells.', ['White blood cells ingest pathogens by [[phagocytosis]], produce [[antibodies]] and produce antitoxins.'], [], 'Each antibody is specific to one antigen.'),
    G('Vaccination.', ['A vaccine contains [[dead|weakened|inactive]] pathogens. It stimulates the body to make [[antibodies]] and [[memory]] cells.'], [], 'Memory cells make a faster, larger secondary response.'),
    G('Herd immunity.', ['If a large proportion of the population is [[vaccinated|immune]], the spread of the pathogen is [[reduced|less|slowed]].'], [], 'People who are not vaccinated are protected indirectly.')
  ] });
  add('b-drugs', { gaps: [
    G('Antibiotics.', ['Antibiotics such as penicillin kill [[bacteria]] but do not work against [[viruses]].'], [], 'Viruses live inside cells and are hard to target.'),
    G('Resistance.', ['Overuse of antibiotics leads to [[resistant|resistance]] strains of bacteria, so doctors should only [[prescribe]] them when needed.'], [], 'MRSA is an example of a resistant strain.'),
    G('Drug origins.', ['Aspirin was originally made from [[willow]] bark, digitalis comes from [[foxglove]] and penicillin from a [[mould|fungus]].'], [], 'Many drugs are now made synthetically.'),
    G('Clinical trials.', ['A drug is tested on cells, then animals, then healthy volunteers, then patients. In a double-blind trial neither the [[doctor|doctors]] nor the [[patient|patients]] knows who has the [[placebo|dummy drug]].'], [], 'This avoids bias.')
  ] });
  add('b-monoclonal', { gaps: [
    G('Making monoclonal antibodies.', ['A [[lymphocyte]] that makes a specific antibody is fused with a [[tumour|myeloma]] cell to form a [[hybridoma]] cell.'], [], 'The hybridoma divides rapidly and makes the antibody.'),
    G('Properties.', ['Monoclonal antibodies are [[specific]] to one type of antigen, so they can be used to target [[cancer|particular]] cells.'], [], 'They are produced from a single clone of cells.'),
    G('Uses.', ['Monoclonal antibodies are used in [[pregnancy]] tests, to diagnose disease, in laboratory research and to deliver [[drugs]] to cancer cells.'], [], 'The antibody carries a radioactive substance or toxin to the tumour.'),
    G('Side effects.', ['Monoclonal antibody treatments have caused more side effects than expected, because the target [[antigens|molecules]] are not found only on cancer cells.'], [], 'They can bind to healthy cells.')
  ] });
  add('b-plantdefence', { gaps: [
    G('Physical defences.', ['Plants have a waxy [[cuticle]], cell walls made of [[cellulose]] and layers of dead cells (bark) as barriers.'], [], 'These stop pathogens entering.'),
    G('Chemical defences.', ['Some plants produce [[antibacterial]] chemicals or [[poisons|poison]] to deter herbivores.'], [], 'Examples include mint and tea.'),
    G('Mechanical adaptations.', ['Thorns and [[hairs]] deter animals, and some leaves [[curl|fold|droop]] when touched.'], [], 'These are mechanical adaptations.'),
    G('Deficiencies.', ['A lack of [[nitrate|nitrates]] causes stunted growth; a lack of [[magnesium]] causes yellow leaves (chlorosis).'], [], 'Magnesium is needed to make chlorophyll.')
  ] });
  add('b-photo', { gaps: [
    G('Photosynthesis.', ['Photosynthesis takes place in [[chloroplasts]] and [[absorbs|takes in|transfers]] energy from light. It is an [[endothermic]] reaction.'], [], 'Energy is transferred from the environment.'),
    G('Word equation.', ['carbon dioxide + [[water]] → [[glucose]] + [[oxygen]]'], [], 'Light energy is needed.'),
    G('Balanced equation.', ['6CO₂ + 6H₂O → C₆H₁₂O₆ + [[6]]O₂'], ['6'], 'There are 6 carbon atoms on each side.'),
    G('Uses of glucose.', ['Glucose is used in [[respiration]], converted to [[starch]] for storage, used to make [[cellulose]] for cell walls and converted to fats and oils.'], [], 'Glucose and nitrates are used to make amino acids.')
  ] });
  add('b-photo-rate', { gaps: [
    G('Limiting factors.', ['The rate of photosynthesis may be limited by light intensity, [[carbon dioxide]] concentration, [[temperature]] and the amount of chlorophyll.'], [], 'The factor in shortest supply limits the rate.'),
    G('Light intensity and distance.', ['Light intensity is proportional to 1 ÷ distance². If the distance is doubled, the light intensity becomes [[1/4|0.25|a quarter|one quarter]].'], ['1/2**2'], 'Doubling distance gives (1/2)² = 1/4.'),
    G('A lamp is moved from 10 cm to 20 cm.', ['The intensity is [[25|0.25]]% of the original.'], ['(10/20)**2*100'], 'Intensity ∝ 1/d².'),
    G('Counting bubbles.', ['Counting the bubbles of [[oxygen]] released by pondweed in a minute gives a measure of the [[rate]] of photosynthesis.'], [], 'The rate is the number of bubbles per minute.')
  ] });
  add('b-photo-higher', { gaps: [
    G('Graph interpretation.', ['On a graph of rate against light intensity, the rate stops increasing when another factor such as [[carbon dioxide|temperature]] becomes [[limiting]].'], [], 'The graph levels off.'),
    G('Greenhouse economics.', ['Farmers may add carbon dioxide and heating to greenhouses, but the extra cost must be less than the [[increase|extra]] in [[yield|profit|crop]].'], [], 'There is no benefit in raising a factor that is not limiting.'),
    G('Optimum temperature.', ['Above about 45 °C the rate of photosynthesis [[falls|decreases]] because the [[enzymes|enzyme]] are denatured.'], [], 'Enzymes control photosynthesis reactions.'),
    G('Chlorophyll.', ['A lack of [[magnesium]] reduces chlorophyll, so the rate of photosynthesis [[decreases|falls|is lower]].'], [], 'Chlorophyll absorbs the light.')
  ] });
  add('b-respiration', { gaps: [
    G('Aerobic respiration.', ['glucose + [[oxygen]] → [[carbon dioxide]] + [[water]]. It happens in the [[mitochondria]].'], [], 'It releases energy for the cell.'),
    G('Anaerobic respiration in muscles.', ['glucose → [[lactic acid]]. It transfers [[less]] energy than aerobic respiration.'], [], 'It is used when oxygen is limited.'),
    G('Anaerobic respiration in yeast.', ['glucose → [[ethanol]] + [[carbon dioxide]]. This is called [[fermentation]].'], [], 'It is used to make bread and alcoholic drinks.'),
    G('Respiration is exothermic.', ['Respiration is an [[exothermic]] reaction because energy is transferred to the [[surroundings]].'], [], 'Respiration occurs in all living cells.')
  ] });
  add('b-exercise', { gaps: [
    G('During exercise.', ['Heart rate and breathing rate [[increase]] to supply more [[oxygen]] and glucose to the muscles.'], [], 'More carbon dioxide is also removed.'),
    G('Muscles.', ['Muscles store glucose as [[glycogen]]. If there is not enough oxygen, anaerobic respiration produces [[lactic acid]], which causes fatigue.'], [], 'Fatigue is the muscle stopping contracting efficiently.'),
    G('Metabolism.', ['Metabolism is the [[sum]] of all the chemical reactions in a cell or the body. The [[liver]] converts glucose to glycogen and breaks down excess amino acids.'], [], 'Metabolic reactions include respiration and making proteins.'),
    G('Heart rate data.', ['Resting heart rate is 70 bpm and exercise raises it to 154 bpm: the increase is [[84]] bpm, which is [[120]]% of the resting rate.'], ['154-70', '(154-70)/70*100'], 'Percentage increase = increase ÷ original × 100.')
  ] });
  add('b-debt', { gaps: [
    G('Oxygen debt.', ['After vigorous exercise the extra oxygen needed to [[remove|break down|oxidise]] lactic acid is called the oxygen [[debt]].'], [], 'The breathing rate stays high after exercise.'),
    G('Lactic acid.', ['The lactic acid is carried in the blood to the [[liver]], where it is converted back to [[glucose]].'], [], 'This needs oxygen.'),
    G('Recovery.', ['After exercise the [[breathing]] rate and heart rate stay high until the oxygen debt is repaid.'], [], 'The heart continues to supply oxygen to the liver.'),
    G('Comparing.', ['Anaerobic respiration releases [[less]] energy per glucose molecule because glucose is [[incompletely|only partly]] broken down.'], [], 'Lactic acid still contains energy.')
  ] });

  add('b-nerves', { gaps: [
    G('Homeostasis.', ['Homeostasis is the [[regulation|control|maintenance]] of the internal [[conditions|environment]] of a cell or organism.'], [], 'It keeps conditions optimum for enzyme action.'),
    G('A reflex arc.', ['stimulus → [[receptor]] → sensory neurone → [[CNS|central nervous system|relay neurone]] → motor neurone → [[effector]] → response'], [], 'A reflex is fast and automatic.'),
    G('Synapse.', ['At a synapse a [[chemical|transmitter|neurotransmitter]] diffuses across the gap and triggers a new [[electrical|nerve]] impulse.'], [], 'Synapses slow the impulse slightly.'),
    G('Effectors.', ['Effectors are [[muscles]] or [[glands]].'], [], 'Muscles contract and glands secrete.')
  ] });
  add('b-reaction', { gaps: [
    G('Ruler-drop test.', ['A student catches a ruler dropped by a partner. The distance fallen gives a measure of [[reaction time|reaction]] time. A shorter distance means a [[faster|shorter|quicker]] reaction.'], [], 'The longer the ruler falls, the longer the reaction time.'),
    G('Mean.', ['Reaction times 0.21 s, 0.19 s and 0.20 s have a mean of [[0.2|0.20]] s.'], ['(0.21+0.19+0.20)/3'], 'Add the values and divide by the number of values.'),
    G('Control variables.', ['To make the test fair, use the same [[ruler|hand]], the same starting position and the same [[person|student]].'], [], 'Only the independent variable should change.'),
    G('Investigating factors.', ['Caffeine is a [[stimulant]] and reduces reaction time, whereas [[alcohol]] is a depressant and increases it.'], [], 'Drugs can affect the nervous system.')
  ] });
  add('b-brain', { gaps: [
    G('Regions of the brain.', ['The [[cerebral cortex]] controls consciousness, intelligence, memory and language; the [[cerebellum]] controls coordination and balance; the [[medulla]] controls heart rate and breathing.'], [], 'The medulla controls unconscious activities.'),
    G('Studying the brain.', ['Scientists study the brain using patients with [[damage]], electrical [[stimulation]] and MRI scanning.'], [], 'Each method gives different information.'),
    G('Treatment difficulty.', ['It is difficult to treat brain damage and disease because the brain is [[complex]] and delicate, and because drugs cannot easily cross the blood–brain barrier.'], [], 'The brain is hard to access.'),
    G('Scans.', ['An MRI scan shows the brain’s [[structure|activity]] in detail without [[damaging|harming]] the patient.'], [], 'It uses magnetic fields and is not damaging.')
  ] });
  add('b-brain-research', { gaps: [
    G('Evidence about brain function.', ['Damage to a particular region that causes the loss of a particular ability suggests that the region controls that [[function|ability]].'], [], 'Case studies give evidence about brain regions.'),
    G('Electrical stimulation.', ['Stimulating the cerebral cortex with [[electrodes|electrical]] and observing the response shows which [[part|region|area]] of the brain controls a body function.'], [], 'This was done in people having brain surgery.'),
    G('MRI.', ['MRI scans can be used to see the [[activity|structure|active]] of different regions of the brain.'], [], 'Active regions use more blood and oxygen.'),
    G('Risks.', ['Investigating the brain is risky because [[damage|harm]] to it may be irreversible, and some techniques are [[invasive]].'], [], 'Ethical issues must be considered.')
  ] });
  add('b-eye', { gaps: [
    G('Parts of the eye.', ['The [[cornea]] refracts light, the [[iris]] controls the size of the pupil, the lens focuses light on the [[retina]] and the optic nerve carries impulses to the brain.'], [], 'The retina contains light receptors.'),
    G('Looking at a near object.', ['The ciliary muscles [[contract]], the suspensory ligaments [[loosen|slacken]] and the lens becomes more [[rounded|curved|fat|thicker]].'], [], 'A thicker lens refracts light more strongly.'),
    G('Looking at a distant object.', ['The ciliary muscles [[relax]], the suspensory ligaments become [[tight|taut]] and the lens becomes [[thinner|flatter]].'], [], 'This is accommodation.'),
    G('Bright light.', ['In bright light the circular muscles of the iris [[contract]] and the pupil becomes [[smaller|narrower]].'], [], 'This protects the retina from damage.')
  ] });
  add('b-temperature', { gaps: [
    G('Body temperature.', ['The human body is kept at about [[37]] °C, the optimum temperature for [[enzymes|enzyme]].'], ['37'], 'The thermoregulatory centre is in the brain.'),
    G('When body temperature is too high.', ['Sweating increases and blood vessels near the skin [[dilate|widen]], so more heat is [[lost|transferred]].'], [], 'Evaporation of sweat cools the skin.'),
    G('When body temperature is too low.', ['Muscles [[shiver|contract]], sweating stops and blood vessels near the skin [[constrict|narrow]].'], [], 'Shivering releases energy by respiration.'),
    G('Receptors.', ['Temperature receptors in the [[skin]] and the brain detect changes and send information to the [[thermoregulatory centre|brain]].'], [], 'The centre coordinates the response.')
  ] });
  add('b-temperature-higher', { gaps: [
    G('Negative feedback.', ['If body temperature rises above normal, the response [[reduces|decreases|lowers]] it, which is an example of [[negative]] feedback.'], [], 'Negative feedback restores the normal level.'),
    G('Vasodilation.', ['Vasodilation increases blood flow to the skin, so more energy is [[radiated|lost]] from the surface.'], [], 'The skin looks redder.'),
    G('Sweat.', ['Sweat evaporating from the skin takes [[energy|heat]] from the body, so the body [[cools]].'], [], 'The sweat glands are stimulated by the brain.'),
    G('Cold.', ['In the cold, vasoconstriction [[reduces|decreases]] blood flow near the surface, so less energy is lost to the [[surroundings|environment]].'], [], 'Hair erector muscles also contract.')
  ] });
  add('b-endocrine', { gaps: [
    G('Hormones.', ['Hormones are chemicals secreted by [[glands]] directly into the [[blood]], which carries them to target organs.'], [], 'The response is slower but longer lasting than a nervous response.'),
    G('The pituitary gland.', ['The pituitary gland is called the [[master]] gland because its hormones act on other glands. The [[pancreas]] produces insulin.'], [], 'Insulin lowers blood glucose.'),
    G('Insulin.', ['When blood glucose is high the pancreas releases [[insulin]], which makes the liver convert glucose to [[glycogen]].'], [], 'Blood glucose falls back to normal.'),
    G('Diabetes.', ['In type 1 diabetes the pancreas does not make enough [[insulin]], so patients are treated with [[injections|insulin injections]]. Type 2 diabetes is linked to [[obesity]].'], [], 'In type 2 the body cells no longer respond to insulin.')
  ] });
  add('b-feedback', { gaps: [
    G('Glucagon.', ['When blood glucose is low the pancreas releases [[glucagon]], which makes the liver convert [[glycogen]] to glucose.'], [], 'Insulin and glucagon work antagonistically.'),
    G('Adrenaline.', ['Adrenaline is released from the [[adrenal]] glands and increases [[heart rate]], preparing the body for [[fight or flight|fight]].'], [], 'More blood goes to the muscles.'),
    G('Thyroxine.', ['The thyroid gland makes [[thyroxine]], which controls the basal [[metabolic]] rate.'], [], 'It is important for growth and development.'),
    G('Negative feedback.', ['When the level of thyroxine is too high, the pituitary gland [[reduces|decreases|lowers]] the release of TSH, so less thyroxine is made.'], [], 'The response reverses the change.')
  ] });
  add('b-kidneys', { gaps: [
    G('Urea.', ['Urea is made in the [[liver]] from excess amino acids and is removed from the blood by the [[kidneys]] in urine.'], [], 'The urine is stored in the bladder.'),
    G('The kidneys.', ['The kidneys also help to regulate the [[water]] and ion content of the blood.'], [], 'Blood is filtered and useful substances are reabsorbed.'),
    G('Kidney failure.', ['A patient with kidney failure may be treated by [[dialysis|kidney dialysis]], which removes [[urea]] from the blood, or by a kidney [[transplant]].'], [], 'A transplant may be rejected by the immune system.'),
    G('Dialysis.', ['In dialysis the patient’s blood flows past a partially permeable membrane. Urea moves by [[diffusion]] into the dialysis fluid.'], [], 'The dialysis fluid contains no urea, so there is a concentration gradient.')
  ] });
  add('b-kidney-filtration', { gaps: [
    G('Filtration.', ['In the kidney, blood is filtered under [[pressure|high pressure]]. [[Glucose]], all of it, is reabsorbed into the blood.'], [], 'Selective reabsorption returns the useful substances.'),
    G('ADH.', ['ADH is released from the [[pituitary]] gland. More ADH makes the kidney reabsorb [[more]] water, so the urine becomes [[concentrated|more concentrated]].'], [], 'It is released when the blood is too concentrated.'),
    G('Negative feedback.', ['When the water content of the blood is too high, the pituitary releases [[less|little]] ADH, so [[more|a large volume of]] dilute urine is produced.'], [], 'Water is lost to restore balance.'),
    G('Substances in urine.', ['Normal urine contains water, [[urea]] and excess ions but no [[glucose|protein|blood cells]].'], [], 'Glucose in urine can indicate diabetes.')
  ] });
  add('b-reproductive-hormones', { gaps: [
    G('Hormones in the menstrual cycle.', ['[[FSH]] causes eggs to mature and stimulates the ovary to release [[oestrogen]]. [[LH]] stimulates ovulation.'], [], 'Progesterone maintains the uterus lining.'),
    G('Cycle length.', ['The menstrual cycle lasts about [[28]] days and ovulation usually occurs on about day [[14]].'], ['28', '14'], 'Menstruation occurs at the start of the cycle.'),
    G('Contraception.', ['The pill contains [[oestrogen]] and progesterone and prevents the release of [[eggs|an egg]]; condoms are a [[barrier]] method that also protect against infection.'], [], 'Condoms reduce the risk of sexually transmitted infections.'),
    G('Other methods.', ['Contraceptive implants and injections release [[progesterone]], and an IUD prevents [[implantation|fertilisation]].'], [], 'Abstinence is also a method.')
  ] });
  add('b-cycle-ivf', { gaps: [
    G('Hormone interaction.', ['FSH stimulates oestrogen release; high oestrogen levels stimulate the release of [[LH]] which causes [[ovulation]].'], [], 'Oestrogen also inhibits FSH release.'),
    G('Fertility treatment.', ['Giving FSH and LH can help women who do not [[ovulate|produce eggs]] to become pregnant.'], [], 'This is a fertility drug treatment.'),
    G('IVF.', ['In IVF, eggs are [[collected|removed]] from the mother and fertilised by sperm in the [[laboratory|lab]], and then [[embryos|an embryo]] are returned to the uterus.'], [], 'Hormones are used to stimulate egg production.'),
    G('Evaluating IVF.', ['IVF can be emotionally and physically stressful, it has a [[low]] success rate and may lead to multiple births.'], [], 'Multiple births carry health risks.')
  ] });
  add('b-tropisms', { gaps: [
    G('Phototropism.', ['Shoots grow [[towards]] light, so they show [[positive]] phototropism.'], [], 'This helps them to absorb more light for photosynthesis.'),
    G('Gravitropism.', ['Roots grow [[downwards|towards gravity]] in response to gravity, so they show positive [[gravitropism|geotropism]].'], [], 'This helps them to anchor the plant and absorb water.'),
    G('Auxin.', ['The plant hormone [[auxin]] is made in the shoot tip and causes cells to [[elongate|lengthen|grow longer]].'], [], 'Auxin is unequally distributed in response to light.'),
    G('Experiment design.', ['When investigating phototropism, use seedlings of the same [[age|species]] and the same [[temperature]] with a light source from one side only.'], [], 'Only the light direction should vary.')
  ] });
  add('b-plant-hormones', { gaps: [
    G('Auxin in a shoot.', ['Light from one side causes auxin to move to the [[shaded]] side, so those cells [[elongate|grow]] more and the shoot bends towards the [[light]].'], [], 'More auxin on the shaded side.'),
    G('Auxin in a root.', ['In a root, a high concentration of auxin [[inhibits]] cell elongation, so the root bends [[down|downwards|towards gravity]].'], [], 'This is the opposite effect to that in shoots.'),
    G('Gibberellins and ethene.', ['Gibberellins promote seed [[germination]] and ethene controls cell division and fruit [[ripening]].'], [], 'Ethene is used to ripen fruit during transport.'),
    G('Uses of auxin.', ['Auxins are used as selective [[weedkillers]] and in rooting [[powder|hormone]] to produce plant cuttings.'], [], 'They are used in horticulture.')
  ] });
})();
