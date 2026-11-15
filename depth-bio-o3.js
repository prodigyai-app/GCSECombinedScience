/* Opus depth pass for Homeostasis and response (4.5). */
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

  /* ---------- b-nerves ---------- */
  L('b-nerves', 'Going further: homeostasis and the reflex arc', `<p><b>Homeostasis</b> is the regulation of the internal conditions of a cell or organism to maintain optimum conditions for function in response to internal and external changes. In the human body this includes control of blood glucose concentration, body temperature and water levels. Automatic control systems involve nervous responses or chemical responses, and all have <b>receptors</b> (detect stimuli), a <b>coordination centre</b> (brain, spinal cord or pancreas, which receives and processes information) and <b>effectors</b> (muscles or glands that bring about responses).</p><p>The nervous system enables humans to react to their surroundings. Information from receptors passes along sensory neurones to the CNS, which coordinates the response. Reflex actions are automatic and rapid, do not involve the conscious part of the brain, and protect the body from harm. At a <b>synapse</b>, an electrical impulse triggers the release of a chemical that diffuses across the gap and starts an impulse in the next neurone.</p>` + ul(['Reflex arc: stimulus → receptor → sensory neurone → relay neurone (CNS) → motor neurone → effector → response.', 'Impulses travel at up to about 100 m/s along neurones.', 'Synapses make impulses travel in one direction only.']));
  E('b-nerves', 'Speed of a nerve impulse', 'An impulse travels 1.2 m from a toe to the spinal cord in 0.015 s. Calculate its speed.', [
    ['Speed', 'distance ÷ time.', ['1.2 ÷ 0.015']],
    ['Answer', 'Calculate.', [`${res('80 m/s')}`]]], { chk: [['1.2/0.015', 80]] });
  E('b-nerves', 'Classifying a response', 'Is blinking when a ball flies towards your face a reflex? Explain.', [
    ['Features', 'Automatic, rapid, no conscious thought.', ['protects the eye']],
    ['Answer', 'Matches the definition.', [`${res('Yes: it is an automatic, rapid protective response.')}`]]]);
  X('b-nerves', Q('The knee-jerk reflex happens when the tendon below the kneecap is tapped.', [
    P('Name the effector in the knee-jerk reflex.', 1, ['(thigh) muscle']),
    P('An impulse travels 0.8 m to the spinal cord and 0.8 m back at 100 m/s. Calculate the time taken, ignoring the synapse.', 2, ['total distance 1.6 m', '1.6 ÷ 100 = 0.016 s'], C(0.016, 's', '1.6/100'))
  ]));

  /* ---------- b-reaction ---------- */
  L('b-reaction', 'Going further: the reaction time practical', `<p>In the ruler-drop test, one person holds a ruler vertically just above the other person’s open finger and thumb, then drops it without warning. The distance the ruler falls before being caught is recorded and converted to a reaction time using a conversion table or, with physics, using t = √(2d ÷ g). Repeat several times and calculate a mean, ignoring anomalies. The independent variable may be caffeine, distraction, practice or the hand used.</p><p>Control variables include the same catcher, the same starting position of the hand, the same ruler and the same dropping height. Practice can improve results, so the first trials might be excluded or the order of conditions varied. Reaction times are typically 0.15–0.30 s.</p>` + ul(['Shorter distance → shorter reaction time.', 'Caffeine is a stimulant and can reduce reaction time.', 'Ethics: caffeine doses must be safe; participants must consent.']));
  E('b-reaction', 'Distance to reaction time', 'A ruler falls 0.20 m before it is caught. Using t = √(2d ÷ g) with g = 9.8 m/s², calculate the reaction time.', [
    ['Substitute', '2 × 0.20 ÷ 9.8 = 0.0408.', ['t² = 0.0408']],
    ['Square root', 'Take the root.', [`${res('t = 0.20 s')}`]]], { chk: [['sqrt(2*0.20/9.8)', 0.202]] });
  E('b-reaction', 'Mean with an anomaly', 'Distances (cm): 18, 17, 19, 31, 18. Calculate the mean, excluding any anomaly.', [
    ['Anomaly', '31 cm is far from the others.', ['exclude it']],
    ['Mean', '(18 + 17 + 19 + 18) ÷ 4.', [`${res('18 cm')}`]]], { chk: [['(18+17+19+18)/4', 18]] });
  X('b-reaction', Q('A student does the ruler-drop test five times and gets 14, 16, 15, 15 and 15 cm.', [
    P('Calculate the mean distance.', 1, ['15 cm'], C(15, 'cm', '(14+16+15+15+15)/5'))
  ]));

  /* ---------- b-brain ---------- */
  L('b-brain', 'Going further: the brain', `<p>The brain controls complex behaviour. It is made of billions of interconnected neurones and has different regions that carry out different functions. The <b>cerebral cortex</b> (the two cerebral hemispheres) is responsible for consciousness, intelligence, memory and language. The <b>cerebellum</b> coordinates muscular activity and balance. The <b>medulla</b> controls unconscious activities such as breathing and heart rate.</p><p>Neuroscientists have mapped the regions to particular functions by studying patients with brain damage, electrically stimulating different parts of the brain and using MRI scanning techniques. The complexity and delicacy of the brain make investigating and treating brain disorders very difficult: damage may be hard to reach, surgery may damage other areas, and many drugs cannot pass from the blood into the brain.</p>` + ul(['Damage to the medulla is often fatal because breathing and heart rate are affected.', 'Damage to the cerebellum affects coordination and balance.', 'Each hemisphere controls the opposite side of the body.']));
  E('b-brain', 'Predicting effects of damage', 'A patient’s cerebellum is damaged by a stroke. Predict the effects.', [
    ['Function', 'Cerebellum coordinates movement and balance.', ['link region to function']],
    ['Effects', 'Loss of fine control.', [`${res('Unsteady walking, poor balance and clumsy movements.')}`]]]);
  E('b-brain', 'Why brain treatment is difficult', 'Give two reasons why a tumour deep in the brain is difficult to treat.', [
    ['Access', 'Surgery may damage surrounding tissue.', ['delicate tissue']],
    ['Drugs', 'Many drugs cannot cross into the brain.', [`${res('Risk of damage during surgery; drugs may not reach the tumour.')}`]]]);
  X('b-brain', Q('A patient has damage to the cerebral cortex after a head injury.', [
    P('Suggest two functions that may be affected.', 2, ['memory', 'language / speech / consciousness / intelligence']),
    P('Explain why the patient’s heart rate is unaffected.', 1, ['heart rate is controlled by the medulla, which is not damaged'])
  ]));

  /* ---------- b-brain-research ---------- */
  L('b-brain-research', 'Going further: evaluating brain research methods', `<p>Studying patients with brain damage shows which abilities are lost when a region is damaged, but damage rarely affects only one region, there may be few patients, and the damage cannot be controlled. Electrical stimulation of areas of the brain during surgery shows which movements or sensations each region controls, but it is invasive and can only be carried out in patients who are already having surgery. <b>MRI scanning</b> (including functional MRI) shows which areas are most active during particular tasks; it is non-invasive and can be used on healthy volunteers, but it is expensive and shows blood flow rather than nerve impulses directly.</p>` + ul(['Evaluate with advantages and disadvantages, then a judgement.', 'Ethical issues: consent, risk, privacy.', 'Combining methods gives stronger evidence.']));
  E('b-brain-research', 'Choosing a method', 'A researcher wants to find which area of a healthy volunteer’s brain is active when they read. Which method should be used?', [
    ['Healthy volunteer', 'Must be non-invasive.', ['not stimulation or damage studies']],
    ['Answer', 'Shows activity during tasks.', [`${res('Functional MRI scanning.')}`]]]);
  E('b-brain-research', 'Interpreting evidence', 'Several patients with damage to the same area all lost the ability to speak but could understand speech. What does this suggest?', [
    ['Pattern', 'Same damage, same loss.', ['consistent evidence']],
    ['Conclusion', 'That area controls producing speech.', [`${res('The damaged region is involved in speech production, not understanding.')}`]]]);
  X('b-brain-research', Q('Scientists use MRI scans to study the brain.', [
    P('Give one reason why MRI scans are safer than electrical stimulation of the brain.', 1, ['non-invasive / no surgery needed'])
  ]));

  /* ---------- b-eye ---------- */
  L('b-eye', 'Going further: focusing and defects of vision', `<p>The eye is a sense organ containing receptors sensitive to light intensity and colour. Light is refracted by the <b>cornea</b> and the <b>lens</b> to focus an image on the <b>retina</b>, which contains light-sensitive rods and cones; the optic nerve carries impulses to the brain. The iris controls the size of the pupil and so the amount of light reaching the retina; the sclera is the tough white outer layer; the ciliary muscles and suspensory ligaments change the shape of the lens.</p><p><b>Accommodation</b> is the process of changing the shape of the lens to focus on near or distant objects. Near: ciliary muscles contract, suspensory ligaments loosen, the lens becomes thicker and refracts light more. Far: ciliary muscles relax, ligaments are pulled tight, the lens is pulled thin and refracts light less. In myopia (short-sightedness) the image forms in front of the retina; in hyperopia (long-sightedness) it forms behind it. Both are corrected with spectacle or contact lenses, laser surgery to change the shape of the cornea, or replacement lenses.</p>` + ul(['Myopia: corrected with a concave (diverging) lens.', 'Hyperopia: corrected with a convex (converging) lens.', 'Pupil reflex: circular muscles contract in bright light.']));
  E('b-eye', 'Correcting short-sightedness', 'A person can see near objects clearly but distant objects are blurred. Explain the cause and the correction.', [
    ['Cause', 'Light from distant objects focuses in front of the retina.', ['myopia: eyeball too long or lens too strong']],
    ['Correction', 'Diverging lens spreads light out first.', [`${res('Concave lens, or laser surgery to flatten the cornea.')}`]]]);
  E('b-eye', 'Iris in dim light', 'Describe how the iris responds when someone walks into a dark room.', [
    ['Muscles', 'Radial muscles contract; circular muscles relax.', ['pupil widens']],
    ['Effect', 'More light enters.', [`${res('The pupil dilates so more light reaches the retina.')}`]]]);
  X('b-eye', Q('This question is about the eye.', [
    P('Name the part of the eye that contains light receptors.', 1, ['retina']),
    P('Explain why a person with hyperopia cannot see near objects clearly, and how a lens corrects it.', 2, ['light focuses behind the retina (lens cannot thicken enough / eyeball too short)', 'a convex / converging lens refracts light more so it focuses on the retina'])
  ]));

  /* ---------- b-temperature ---------- */
  L('b-temperature', 'Going further: controlling body temperature', `<p>Body temperature is monitored and controlled by the <b>thermoregulatory centre</b> in the brain. It contains receptors sensitive to the temperature of the blood, and it receives impulses from temperature receptors in the skin. If the body temperature is too high, blood vessels near the skin surface dilate (vasodilation), so more blood flows near the surface and more energy is transferred to the surroundings, and sweat is produced, which evaporates and transfers energy from the skin. If the body temperature is too low, blood vessels constrict (vasoconstriction), sweating stops, and skeletal muscles contract rapidly (shivering), which needs respiration and so transfers energy.</p><p>Body temperature is kept at about 37 °C because this is the optimum temperature for enzymes. Heat stroke and hypothermia happen when the control system is overwhelmed.</p>` + ul(['Vasodilation: skin looks red; vasoconstriction: skin looks pale.', 'Vessels do not move up or down in the skin; they widen or narrow.', 'Sweating needs water, so drink more in hot weather.']));
  E('b-temperature', 'Interpreting temperature data', 'A runner’s core temperature rises from 37.0 °C to 38.6 °C. By how much has it risen and how will the body respond?', [
    ['Rise', '38.6 − 37.0.', ['1.6 °C']],
    ['Response', 'Thermoregulatory centre triggers cooling.', [`${res('Sweating and vasodilation increase energy transfer to the surroundings.')}`]]], { chk: [['38.6-37.0', 1.6]] });
  E('b-temperature', 'Explaining shivering', 'Explain how shivering raises body temperature.', [
    ['Muscles', 'Skeletal muscles contract rapidly.', ['needs energy']],
    ['Respiration', 'Respiration is exothermic.', [`${res('More respiration releases energy that warms the body.')}`]]]);
  X('b-temperature', Q('A person moves from a warm room into a very cold place.', [
    P('Name the part of the brain that detects the change in blood temperature.', 1, ['thermoregulatory centre (hypothalamus)']),
    P('Explain how vasoconstriction reduces energy loss.', 2, ['blood vessels supplying the skin capillaries narrow', 'less blood flows near the surface, so less energy is transferred to the surroundings'])
  ]));

  /* ---------- b-temperature-higher ---------- */
  L('b-temperature-higher', 'Going further: negative feedback in thermoregulation', `<p>Temperature control is an example of <b>negative feedback</b>: a change from the normal level is detected, and the response reverses that change, bringing the temperature back to normal. When temperature rises above the set point, cooling responses (sweating, vasodilation) are switched on; when it falls back, they are switched off. When temperature falls, warming responses (shivering, vasoconstriction, hairs raised by erector muscles to trap insulating air) are switched on.</p><p>The thermoregulatory centre compares information from receptors in the skin and in the blood. Responses from several effectors work together. In hot, humid conditions sweat cannot evaporate easily, so cooling is less effective and the risk of overheating increases.</p>` + ul(['Negative feedback keeps conditions within narrow limits.', 'Name receptor, coordination centre and effector in answers.', 'Humidity reduces evaporation of sweat.']));
  E('b-temperature-higher', 'Why humid heat is dangerous', 'Explain why exercising in hot, humid weather can cause heat stroke.', [
    ['Evaporation', 'Humid air contains a lot of water vapour, so sweat evaporates slowly.', ['less cooling']],
    ['Result', 'Energy from respiration is not removed fast enough.', [`${res('Core temperature rises above safe levels.')}`]]]);
  E('b-temperature-higher', 'Feedback loop', 'Describe the negative feedback loop when core temperature falls to 36.0 °C.', [
    ['Detection', 'Thermoregulatory centre detects the fall.', ['receptor in brain']],
    ['Response', 'Shivering and vasoconstriction until 37 °C is restored, then they stop.', [`${res('The response reverses the change, then switches off.')}`]]]);
  X('b-temperature-higher', Q('Thermoregulation uses negative feedback.', [
    P('Explain why the body stops sweating when core temperature returns to normal.', 1, ['negative feedback: the stimulus (high temperature) is removed so the response is switched off'])
  ]));

  /* ---------- b-endocrine ---------- */
  L('b-endocrine', 'Going further: hormones and diabetes', `<p>The endocrine system is composed of glands that secrete chemicals called <b>hormones</b> directly into the bloodstream, which carries them to a target organ where they produce an effect. Compared with the nervous system, the effects are slower but act for longer. The <b>pituitary gland</b> in the brain is a "master gland" that secretes several hormones in response to body conditions; these in turn act on other glands to stimulate the release of other hormones. Other glands include the thyroid, pancreas, adrenal glands, ovaries and testes.</p><p>Blood glucose concentration is monitored and controlled by the pancreas. If it is too high, the pancreas produces <b>insulin</b>, which causes glucose to move from the blood into cells; in liver and muscle cells excess glucose is converted to glycogen for storage. <b>Type 1 diabetes</b> is a disorder in which the pancreas fails to produce sufficient insulin; it is treated with insulin injections. In <b>type 2 diabetes</b> the body cells no longer respond to insulin; it is treated with a carbohydrate-controlled diet and an exercise regime, and obesity is a risk factor.</p>` + ul(['Insulin lowers blood glucose; glucagon raises it (HT).', 'Glycogen is stored in the liver and muscles.', 'Hormones reach every cell but only affect target cells with receptors.']));
  E('b-endocrine', 'Interpreting a glucose test', 'After a glucose drink, person A’s blood glucose falls back to normal in 2 hours; person B’s stays high for 4 hours. Suggest why.', [
    ['A', 'Normal insulin response.', ['glucose taken into cells']],
    ['B', 'Little insulin, or cells do not respond.', [`${res('B may have diabetes.')}`]]]);
  E('b-endocrine', 'Percentage change in glucose', 'Blood glucose rises from 5.0 to 8.5 mmol/dm³ after a meal. Calculate the percentage increase.', [
    ['Change', '8.5 − 5.0 = 3.5.', ['increase']],
    ['Percentage', '÷ 5.0 × 100.', [`${res('70%')}`]]], { chk: [['(8.5-5.0)/5.0*100', 70]] });
  X('b-endocrine', Q('The pancreas helps to control blood glucose concentration.', [
    P('Describe what happens to excess glucose in liver cells when insulin is released.', 1, ['converted to glycogen (for storage)']),
    P('Give one treatment for type 2 diabetes other than drugs.', 1, ['carbohydrate-controlled diet / exercise / losing weight']),
    P('Explain why a hormonal response is slower than a nervous response.', 1, ['hormones travel in the blood, which is slower than electrical impulses along neurones'])
  ]));

  /* ---------- b-feedback ---------- */
  L('b-feedback', 'Going further: glucagon, adrenaline and thyroxine', `<p>(HT) If blood glucose concentration is too low, the pancreas produces <b>glucagon</b>, which causes glycogen to be converted into glucose and released into the blood. Insulin and glucagon interact in a negative feedback cycle to control blood glucose levels within narrow limits.</p><p><b>Adrenaline</b> is produced by the adrenal glands in times of fear or stress. It increases heart rate and boosts the delivery of oxygen and glucose to the brain and muscles, preparing the body for "flight or fight". <b>Thyroxine</b> from the thyroid gland stimulates the basal metabolic rate and plays an important role in growth and development. Thyroxine levels are controlled by negative feedback: when levels are high, the pituitary releases less TSH, so the thyroid releases less thyroxine; when levels are low, more TSH is released.</p>` + ul(['Adrenaline is not controlled by negative feedback in the same way.', 'Glucagon is not glycogen.', 'TSH = thyroid-stimulating hormone (from the pituitary).']));
  E('b-feedback', 'Blood glucose during fasting', 'Explain how blood glucose stays steady when someone misses breakfast.', [
    ['Detection', 'Pancreas detects low glucose.', ['releases glucagon']],
    ['Response', 'Liver converts glycogen to glucose.', [`${res('Glucose is released into the blood, restoring the level.')}`]]], { desc: true, higher: true });
  E('b-feedback', 'Thyroxine feedback', 'A person’s thyroxine level falls. Describe the negative feedback that restores it.', [
    ['Pituitary', 'Detects low thyroxine; releases more TSH.', ['more TSH']],
    ['Thyroid', 'Releases more thyroxine until normal.', [`${res('Then TSH release decreases again.')}`]]], { desc: true, higher: true });
  X('b-feedback', Q('Adrenaline is released when a person is frightened.', [
    P('Name the glands that release adrenaline.', 1, ['adrenal glands'])
  ]));

  /* ---------- b-kidneys ---------- */
  L('b-kidneys', 'Going further: water balance and kidney failure', `<p>Water leaves the body via the lungs during exhalation, and water, ions and urea are lost from the skin in sweat; there is no control over these losses. Excess water, ions and urea are removed via the kidneys in the urine. If body cells lose or gain too much water by osmosis they do not function efficiently. The digestion of proteins from the diet results in excess amino acids, which are deaminated in the liver to form ammonia; ammonia is toxic and is immediately converted to <b>urea</b> for safe excretion.</p><p>People with kidney failure may be treated by organ transplant or by using kidney <b>dialysis</b>. In a dialysis machine, blood flows past a partially permeable membrane; the dialysis fluid has the same concentration of useful substances as normal blood (so glucose and useful ions are not lost) but no urea, so urea diffuses out. Dialysis must be done several times a week; a transplant frees the patient from this, but there is a shortage of donors and a risk of rejection, so immunosuppressant drugs are needed.</p>` + ul(['Kidneys filter blood, then reabsorb useful substances.', 'Urine: water, urea, ions.', 'Excess ions and water are removed to keep blood concentration correct.']));
  E('b-kidneys', 'Dialysis fluid', 'Explain why the dialysis fluid contains glucose at the same concentration as normal blood.', [
    ['Diffusion', 'No concentration gradient for glucose.', ['equal concentrations']],
    ['Result', 'Glucose is not lost from the blood.', [`${res('Useful glucose stays in the blood while urea diffuses out.')}`]]]);
  E('b-kidneys', 'Weekly dialysis time', 'A patient has dialysis for 4 hours, 3 times a week. How many hours is this per year?', [
    ['Per week', '4 × 3 = 12 hours.', ['12 h']],
    ['Per year', '× 52.', [`${res('624 hours')}`]]], { chk: [['4*3*52', 624]] });
  X('b-kidneys', Q('Urea is removed from the blood by the kidneys.', [
    P('Describe how urea is formed in the body.', 1, ['excess amino acids are deaminated in the liver to form ammonia, which is converted to urea'])
  ]));

  /* ---------- b-kidney-filtration ---------- */
  L('b-kidney-filtration', 'Going further: how a nephron works', `<p>The kidneys produce urine by <b>filtration</b> of the blood and <b>selective reabsorption</b> of useful substances such as glucose, some ions and water. In each nephron, blood at high pressure in the glomerulus is filtered into the Bowman’s capsule: small molecules such as water, glucose, ions and urea pass into the filtrate, but blood cells and proteins are too large. As the filtrate passes along the tubule, all the glucose is reabsorbed (by active transport), together with the ions and water the body needs.</p><p>(HT) The water level in the body is controlled by the hormone <b>ADH</b>, released by the pituitary gland when the blood is too concentrated. ADH makes the kidney tubules more permeable to water, so more water is reabsorbed back into the blood and a smaller volume of concentrated urine is produced. This is controlled by negative feedback.</p>` + ul(['Glucose in urine suggests diabetes.', 'Protein in urine suggests damaged glomeruli.', 'More ADH → more water reabsorbed → less, more concentrated urine.']));
  E('b-kidney-filtration', 'Percentage of water reabsorbed', 'The kidneys filter 180 dm³ of fluid a day and produce 1.5 dm³ of urine. What percentage of water is reabsorbed?', [
    ['Reabsorbed', '180 − 1.5 = 178.5 dm³.', ['volume returned']],
    ['Percentage', '÷ 180 × 100.', [`${res('99.2%')}`]]], { chk: [['(180-1.5)/180*100', 99.17]] });
  E('b-kidney-filtration', 'Effect of a salty meal', 'Explain how ADH responds after a salty meal.', [
    ['Detection', 'Blood becomes more concentrated.', ['pituitary releases more ADH']],
    ['Effect', 'More water reabsorbed.', [`${res('Small volume of concentrated urine; blood concentration returns to normal.')}`]]], { desc: true, higher: true });
  X('b-kidney-filtration', Q('The table shows concentrations (g/dm³) in blood plasma, filtrate and urine. Glucose: 1.0, 1.0, 0. Urea: 0.3, 0.3, 20. Protein: 80, 0, 0.', [
    P('Explain why there is no protein in the filtrate.', 1, ['protein molecules are too large to be filtered']),
    P('Calculate how many times more concentrated urea is in urine than in filtrate.', 1, ['67 times (66.7)'], C(66.7, '', '20/0.3', 0.005)),
    H(P('Suggest how the urine would change on a hot day with little drinking, and explain why.', 1, ['smaller volume, more concentrated, because more ADH causes more water reabsorption']))
  ]));

  /* ---------- b-reproductive-hormones ---------- */
  L('b-reproductive-hormones', 'Going further: hormones in reproduction', `<p>During puberty reproductive hormones cause secondary sex characteristics to develop. <b>Oestrogen</b> is the main female reproductive hormone, produced in the ovary; at puberty eggs begin to mature and one is released about every 28 days (ovulation). <b>Testosterone</b> is the main male reproductive hormone, produced by the testes, and it stimulates sperm production.</p><p>Several hormones control the menstrual cycle. <b>FSH</b> (pituitary) causes maturation of an egg in the ovary. <b>LH</b> (pituitary) stimulates the release of the egg. <b>Oestrogen</b> and <b>progesterone</b> are involved in maintaining the uterus lining. Hormonal contraception (oral pills, injections, implants, skin patches) uses oestrogen and/or progesterone to inhibit FSH and so stop eggs maturing, or progesterone to thicken cervical mucus. Non-hormonal methods include condoms and diaphragms (barriers), intrauterine devices, spermicides, abstinence around ovulation and surgical sterilisation.</p>` + ul(['Condoms also protect against sexually transmitted infections.', 'Hormonal methods are more effective but can have side effects.', 'The pill must be taken every day.']));
  E('b-reproductive-hormones', 'Choosing a contraceptive', 'A couple want a method that protects against STIs. Which should they choose and why?', [
    ['Requirement', 'Must stop body fluids being exchanged.', ['barrier needed']],
    ['Answer', 'Condom.', [`${res('Condoms: a barrier method that also reduces STI transmission.')}`]]]);
  E('b-reproductive-hormones', 'Effectiveness data', 'In one year, 1 in 100 women using the pill and 18 in 100 using condoms became pregnant. How many times more effective was the pill in this data?', [
    ['Compare', '18 ÷ 1.', ['ratio of failure rates']],
    ['Answer', 'Interpret.', [`${res('18 times fewer pregnancies with the pill')}`]]], { chk: [['18/1', 18]] });
  X('b-reproductive-hormones', Q('This question is about contraception.', [
    P('Explain how the combined pill prevents pregnancy.', 1, ['oestrogen (and progesterone) inhibit FSH so no eggs mature / are released'])
  ]));

  /* ---------- b-cycle-ivf ---------- */
  L('b-cycle-ivf', 'Going further: hormone interactions and fertility', `<p>(HT) The hormones of the menstrual cycle interact. FSH from the pituitary stimulates an egg to mature and the ovary to produce oestrogen. Oestrogen causes the uterus lining to thicken, inhibits FSH and, at high levels, stimulates LH release. LH causes ovulation at about day 14. Progesterone, produced by the empty follicle, maintains the uterus lining and inhibits FSH and LH. If the egg is not fertilised, progesterone levels fall and the lining breaks down (menstruation).</p><p>Infertility can be treated with FSH and LH in a "fertility drug". In <b>IVF</b>: FSH and LH are given to stimulate maturation of several eggs; the eggs are collected and fertilised by sperm in the laboratory; the fertilised eggs develop into embryos; one or two embryos are inserted into the uterus. IVF gives infertile couples a chance of a child, but it is emotionally and physically stressful, success rates are not high, and it can lead to multiple births, which are a risk to the mother and babies.</p>` + ul(['FSH → egg matures; LH → ovulation.', 'Progesterone falling → menstruation.', 'Ethical issues: unused embryos.']));
  E('b-cycle-ivf', 'IVF success rate', 'A clinic carried out 450 IVF cycles and 117 led to a birth. Calculate the success rate.', [
    ['Divide', '117 ÷ 450.', ['0.26']],
    ['Percentage', '× 100.', [`${res('26%')}`]]], { chk: [['117/450*100', 26]] });
  E('b-cycle-ivf', 'Why progesterone matters', 'Explain why a woman with low progesterone may have difficulty staying pregnant.', [
    ['Role', 'Progesterone maintains the uterus lining.', ['lining needed for implantation']],
    ['Effect', 'Low levels allow the lining to break down.', [`${res('The embryo may not stay implanted.')}`]]], { desc: true, higher: true });
  X('b-cycle-ivf', Q('In one year a fertility clinic carried out 300 IVF treatments. 81 resulted in a pregnancy.', [
    P('Calculate the percentage success rate.', 1, ['27%'], C(27, '%', '81/300*100'))
  ]));

  /* ---------- b-tropisms ---------- */
  L('b-tropisms', 'Going further: the seedling investigation', `<p>Plants produce hormones to coordinate and control growth and responses to light (<b>phototropism</b>) and gravity (<b>gravitropism</b> or geotropism). Shoots grow towards light and away from gravity; roots grow towards gravity and (often) away from light. These responses help shoots get light for photosynthesis and roots anchor the plant and reach water.</p><p>In a typical investigation, cress or mustard seedlings are grown in Petri dishes or boxes, some lit from one side and some evenly lit or in darkness. The independent variable is the direction or intensity of light; the dependent variable can be the angle of bending or the length of shoots; control variables include the number of seeds, the type of seed, temperature, the amount of water and the age of the seedlings. Measuring many seedlings and calculating a mean gives a more reliable result.</p>` + ul(['Use a protractor to measure the angle of curvature.', 'Seedlings in darkness grow tall and thin (etiolated).', 'Clinostats rotate seedlings to remove the effect of gravity.']));
  E('b-tropisms', 'Mean angle of bending', 'Five seedlings bent 32°, 28°, 35°, 30° and 30° towards a light. Calculate the mean.', [
    ['Add', '32 + 28 + 35 + 30 + 30 = 155.', ['total']],
    ['Divide', '÷ 5.', [`${res('31°')}`]]], { chk: [['(32+28+35+30+30)/5', 31]] });
  E('b-tropisms', 'Explaining a root response', 'A bean seed is placed on its side. Describe and explain the response of its root.', [
    ['Response', 'The root bends downwards.', ['positive gravitropism']],
    ['Benefit', 'Reaches water and anchors the plant.', [`${res('The root grows towards gravity, into the soil.')}`]]]);
  X('b-tropisms', Q('Seedlings are grown in a box with a hole in one side.', [
    P('Describe how the shoots will grow after three days.', 1, ['they bend / grow towards the hole (light)'])
  ]));

  /* ---------- b-plant-hormones ---------- */
  L('b-plant-hormones', 'Going further: auxin, gibberellins and ethene', `<p><b>Auxin</b> is a plant hormone produced in the tips of shoots and roots. In a shoot lit from one side, auxin moves to the shaded side, where it stimulates cell elongation, so the shoot bends towards the light. In a root placed horizontally, auxin collects on the lower side, where it <b>inhibits</b> cell elongation, so the upper side grows more and the root bends downwards. (HT) Gibberellins are important in initiating seed germination, and ethene controls cell division and the ripening of fruits.</p><p>Plant growth hormones are used in agriculture and horticulture. Auxins are used as weedkillers (selective weedkillers kill broad-leaved weeds), as rooting powders and for promoting growth in tissue culture. (HT) Ethene is used in the food industry to control ripening of fruit during storage and transport. Gibberellins can be used to end seed dormancy, promote flowering and increase fruit size.</p>` + ul(['Auxin: elongation in shoots; inhibition in roots.', 'Unripe bananas can be shipped and ripened with ethene at their destination.', 'Selective weedkillers make weeds grow too fast and die.']));
  E('b-plant-hormones', 'Shipping bananas', 'Explain why bananas are picked unripe and treated with ethene in the importing country.', [
    ['Transport', 'Unripe fruit is firm and less easily damaged.', ['less waste']],
    ['Ripening', 'Ethene ripens them on demand.', [`${res('Fruit arrives undamaged and ripens when needed for sale.')}`]]], { desc: true, higher: true });
  E('b-plant-hormones', 'Rooting powder data', '40 cuttings without rooting powder gave 14 rooted; 40 with it gave 34 rooted. Calculate both percentages.', [
    ['Without', '14 ÷ 40 × 100 = 35%.', ['35%']],
    ['With', '34 ÷ 40 × 100.', [`${res('85% with rooting powder')}`]]], { chk: [['14/40*100', 35], ['34/40*100', 85]] });
  X('b-plant-hormones', Q('A farmer sprays a selective weedkiller containing auxin on a field of wheat.', [
    P('Explain how the weedkiller kills broad-leaved weeds.', 2, ['it causes the weeds to grow too quickly / uncontrolled growth', 'so they die']),
    P('Explain why the wheat is not killed.', 1, ['the wheat (narrow-leaved) is not affected by / does not absorb as much of the hormone'])
  ]));
})();
