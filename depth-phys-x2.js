/* Exam-style questions for Atomic structure (phys-at1–phys-at9) and Forces (phys-fo1–phys-fo13). Each lesson to at least 12 marks;
   phys-fo13 gets a 6-mark extended response. g = 9.8 N/kg. */
(() => {
  const add = GcseDepth.add;
  const P = (q, m, ms, x) => Object.assign({ q, m, lines: Math.max(2, m), ms: ms.map(t => ['1', t]) }, x || {});
  const C = (a, unit, calc, tol = 0.02) => ({ ans: { a, unit, tol }, calc });
  const H = o => Object.assign(o, { ht: true });
  const Q = (stem, parts) => ({ stem: stem ? `<p>${stem}</p>` : '', parts });
  const L6 = (a, b, c) => [['Level 3 (5–6)', a], ['Level 2 (3–4)', b], ['Level 1 (1–2)', c], ['0', 'No relevant content.']];

  add('phys-at1', { exam: [Q('Uranium-235 and uranium-238 are isotopes of uranium. The atomic number of uranium is 92.', [
    P('Calculate the number of neutrons in a uranium-235 nucleus.', 1, ['235 − 92 = 143'], C(143, '', '235-92', 0.001)),
    P('Explain why uranium-235 and uranium-238 are isotopes of the same element.', 1, ['same number of protons (92) but a different number of neutrons'])
  ])] });
  add('phys-at2', { exam: [Q('In the alpha scattering experiment, alpha particles were fired at a very thin sheet of gold foil.', [
    P('Explain why the gold foil had to be very thin.', 1, ['alpha particles are not very penetrating, so they would be absorbed by thicker foil']),
    P('Explain why the results meant that the plum pudding model had to be replaced.', 2, ['large deflections (and bouncing back) could not happen if the positive charge was spread out', 'so the mass and positive charge must be concentrated in a tiny nucleus'])
  ])] });
  add('phys-at3', { exam: [Q('Smoke detectors contain a small alpha source.', [
    P('Explain why an alpha source is used rather than a gamma source.', 2, ['alpha is strongly ionising, so it ionises the air and lets a small current flow', 'gamma is weakly ionising (and would pass out of the detector)']),
    P('Explain why the alpha source is not dangerous to people in the room.', 2, ['alpha particles only travel a few centimetres in air', 'they are stopped by the casing (or by the outer layer of skin)']),
    P('The source has a very long half-life. Give one reason why this is useful.', 1, ['its activity stays almost constant, so the detector works for many years without replacing the source']),
    P('Name the unit of activity.', 1, ['becquerel (Bq)'])
  ])] });
  add('phys-at4', { exam: [Q('Thorium-234 (atomic number 90) decays by beta emission to form protactinium.', [
    P('Give the mass number and atomic number of the protactinium nucleus.', 2, ['mass number 234', 'atomic number 91']),
    P('Describe what happens inside the nucleus during beta decay.', 2, ['a neutron changes into a proton', 'a high-speed electron is emitted from the nucleus']),
    P('State the effect of gamma emission on the mass number and atomic number of a nucleus.', 1, ['neither changes (the nucleus just loses energy)'])
  ])] });
  add('phys-at5', { exam: [Q('Iodine-131 has a half-life of 8 days. A sample has an initial activity of 800 Bq.', [
    P('Calculate the activity after 24 days.', 2, ['24 days = 3 half-lives', '800 ÷ 2³ = 100 Bq'], C(100, 'Bq', '800/2**3')),
    P('Calculate how long it takes for the activity to fall to 25 Bq.', 2, ['800 → 25 is 5 half-lives (800 ÷ 25 = 32 = 2⁵)', '5 × 8 = 40 days'], C(40, 'days', '5*8')),
    P('Explain why the half-life cannot be used to predict when a particular nucleus will decay.', 1, ['radioactive decay is random'])
  ])] });
  add('phys-at6', { exam: [Q('Radon gas is a source of background radiation.', [
    P('Give two other natural sources of background radiation.', 2, ['rocks (and soil)', 'cosmic rays (from space) / food and drink']),
    P('Radon emits alpha particles. Explain why breathing in radon is a particular hazard.', 2, ['alpha is strongly ionising', 'inside the lungs all its energy is absorbed by nearby cells, damaging them / causing cancer'])
  ])] });
  add('phys-at7', { exam: [Q('Radiation from a radioactive source is used to treat cancer.', [
    P('Explain why the radiation is directed at the tumour from several different directions.', 2, ['the beams overlap at the tumour, so it receives a large dose', 'healthy tissue receives only a small dose from each beam']),
    P('Give one risk to the patient of radiotherapy.', 1, ['healthy cells may be damaged / side effects / a small chance of causing cancer later']),
    P('Give one reason why a doctor may decide that the benefits outweigh the risks.', 1, ['the radiation kills cancer cells that would otherwise harm or kill the patient'])
  ])] });
  add('phys-at8', { exam: [Q('The products of fission in a nuclear reactor are stored as radioactive waste.', [
    P('Explain why the waste from a nuclear reactor must be stored safely for a very long time.', 2, ['the smaller nuclei produced by fission (daughter nuclei) are radioactive', 'some have very long half-lives, so they stay hazardous for thousands of years']),
    P('Suggest why nuclear fusion is not yet used in power stations.', 1, ['it needs extremely high temperatures and pressures, which are very difficult to achieve and contain']),
    P('Give one advantage that fusion would have over fission as an energy source.', 1, ['the fuel (isotopes of hydrogen) is plentiful / it produces much less radioactive waste'])
  ])] });
  add('phys-at9', { exam: [Q('A student measures the count rate from a radioactive source. The background count rate is 30 counts/min.', [
    P('The measured count rate is 510 counts/min. Calculate the count rate due to the source.', 1, ['510 − 30 = 480 counts/min'], C(480, 'counts/min', '510-30')),
    P('Two hours later the corrected count rate is 120 counts/min. Calculate the half-life.', 2, ['480 → 240 → 120 is two half-lives', 'half-life = 2 ÷ 2 = 1 hour'], C(1, 'hour', '2/2')),
    P('Explain why the student should take several readings at each time.', 2, ['radioactive decay is random, so the count varies', 'a mean of several readings reduces the effect of this random variation'])
  ])] });

  add('phys-fo1', { exam: [Q('A hiker walks 6.0 km east and then 8.0 km north. The walk takes 4.0 hours.', [
    P('Calculate the total distance walked.', 1, ['6.0 + 8.0 = 14 km'], C(14, 'km', '6.0+8.0')),
    H(P('Calculate the size of her displacement from the start.', 2, ['√(6.0² + 8.0²) (or a scale drawing)', '= 10 km'], C(10, 'km', 'sqrt(6.0**2+8.0**2)'))),
    P('Calculate her average speed.', 1, ['14 ÷ 4.0 = 3.5 km/h'], C(3.5, 'km/h', '14/4.0')),
    P('Explain why her average velocity is not the same as her average speed.', 2, ['velocity uses displacement (10 km), not distance (14 km)', 'velocity also has a direction'])
  ])] });
  add('phys-fo2', { exam: [Q('An astronaut has a mass of 70 kg.', [
    P('Calculate her weight on Earth. (g = 9.8 N/kg)', 2, ['W = 70 × 9.8', '= 686 N'], C(686, 'N', '70*9.8')),
    P('Her weight on the Moon is 112 N. Calculate the gravitational field strength on the Moon.', 2, ['g = W ÷ m = 112 ÷ 70', '= 1.6 N/kg'], C(1.6, 'N/kg', '112/70')),
    P('Explain why her mass is the same on the Moon.', 1, ['mass is the amount of matter, which does not depend on the gravitational field']),
    P('Name the instrument used to measure weight.', 1, ['a newtonmeter (calibrated spring balance)'])
  ])] });
  add('phys-fo3', { exam: [Q('A car moves along a level road. The driving force is 3000 N and the total resistive force is 1800 N.', [
    P('Calculate the resultant force on the car and give its direction.', 2, ['3000 − 1800 = 1200 N', 'forwards (in the direction of the driving force)'], C(1200, 'N', '3000-1800')),
    P('Describe the motion of the car.', 1, ['it accelerates (speeds up)']),
    P('Later, the resistive force increases to 3000 N. Describe and explain the motion of the car now.', 2, ['it moves at a constant speed (velocity)', 'because the resultant force is zero']),
    H(P('Two forces of 30 N and 40 N act on an object at right angles. Calculate the resultant force.', 2, ['√(30² + 40²)', '= 50 N'], C(50, 'N', 'sqrt(30**2+40**2)')))
  ])] });
  add('phys-fo4', { exam: [
    Q('A crane lifts a 500 kg steel beam through a vertical height of 20 m.', [
      P('Calculate the work done against gravity.', 3, ['weight = 500 × 9.8 = 4900 N', 'W = Fs = 4900 × 20', '= 98 000 J'], C(98000, 'J', '500*9.8*20')),
      P('Name the energy store that increases.', 1, ['the gravitational potential store of the beam'])
    ]),
    Q('A worker drags a box 8.0 m across a floor with a force of 150 N.', [
      P('Calculate the work done.', 2, ['W = 150 × 8.0', '= 1200 J'], C(1200, 'J', '150*8.0')),
      P('Explain what happens to the temperature of the box and the floor.', 1, ['it rises, because work done against friction transfers energy to their thermal stores'])
    ])
  ] });
  add('phys-fo5', { exam: [Q('A 2.0 N weight is hung on a spring with a spring constant of 25 N/m.', [
    P('Calculate the extension of the spring.', 2, ['e = F ÷ k = 2.0 ÷ 25', '= 0.080 m'], C(0.08, 'm', '2.0/25'))
  ])] });
  add('phys-fo6', { exam: [Q('A wheelbarrow carries a 600 N load. The centre of mass of the load is 0.40 m from the wheel axle (the pivot). The gardener lifts the handles 1.6 m from the axle.', [
    P('Calculate the moment of the load about the pivot.', 2, ['M = Fd = 600 × 0.40', '= 240 N m'], C(240, 'N m', '600*0.40')),
    P('Calculate the upward force needed at the handles to lift the load.', 2, ['F = 240 ÷ 1.6', '= 150 N'], C(150, 'N', '240/1.6')),
    P('Explain why the wheelbarrow makes lifting the load easier.', 2, ['the force is applied further from the pivot than the load', 'so a smaller force gives the same moment (it is a force multiplier)'])
  ])] });
  add('phys-fo7', { exam: [Q('A submarine is 150 m below the surface of the sea. The density of sea water is 1030 kg/m³.', [
    H(P('Calculate the pressure due to the water at this depth.', 2, ['p = hρg = 150 × 1030 × 9.8', '= 1 514 100 Pa (1.5 × 10⁶ Pa)'], C(1514100, 'Pa', '150*1030*9.8'))),
    P('Explain why the pressure is greater at a greater depth.', 1, ['there is a greater weight (column) of water above'])
  ])] });
  add('phys-fo8', { exam: [Q('A bus travels 3.6 km between two stops in 6.0 minutes, including 1.0 minute waiting at traffic lights.', [
    P('Calculate the average speed of the bus for the whole journey in m/s.', 3, ['distance = 3600 m and time = 360 s', 'v = s ÷ t = 3600 ÷ 360', '= 10 m/s'], C(10, 'm/s', '3600/360')),
    P('Describe what a distance–time graph shows while the bus waits at the lights.', 1, ['a horizontal (flat) line']),
    P('Give a typical walking speed for a person.', 1, ['about 1.5 m/s (accept 1–2 m/s)'])
  ])] });
  add('phys-fo9', { exam: [Q('A cyclist slows down from 8.0 m/s to 2.0 m/s in 4.0 s.', [
    P('Calculate the deceleration of the cyclist.', 2, ['a = (8.0 − 2.0) ÷ 4.0', '= 1.5 m/s²'], C(1.5, 'm/s²', '(8.0-2.0)/4.0'))
  ])] });
  add('phys-fo10', { exam: [Q('A 0.80 kg trolley is pulled by a resultant force of 1.2 N.', [
    P('Calculate the acceleration of the trolley.', 2, ['a = F ÷ m = 1.2 ÷ 0.80', '= 1.5 m/s²'], C(1.5, 'm/s²', '1.2/0.80'))
  ])] });
  add('phys-fo11', { exam: [Q('A driver has been drinking alcohol.', [
    P('Explain the effect on the car’s stopping distance.', 2, ['the driver’s reaction time increases', 'so the thinking distance, and so the stopping distance, increases'])
  ])] });
  add('phys-fo12', { exam: [Q('A 60 kg ice skater moves at 4.0 m/s.', [
    P('Calculate her momentum.', 2, ['p = mv = 60 × 4.0', '= 240 kg m/s'], C(240, 'kg m/s', '60*4.0'))
  ])] });
  add('phys-fo13', { exam: [Q('Road safety campaigns warn drivers about stopping distances.', [
    P('Explain the factors that affect the stopping distance of a car, and why the stopping distance increases with speed.', 6, [], {
      lines: 10,
      lor: L6('A detailed explanation of both thinking and braking distance with several factors for each, and a clear explanation of how speed affects both.', 'Factors for both distances given with some explanation, or one distance explained in detail.', 'Some factors listed with little explanation.'),
      ind: ['Stopping distance = thinking distance + braking distance', 'Thinking distance depends on reaction time: increased by tiredness, alcohol, drugs, distractions such as mobile phones', 'Braking distance depends on the condition of the brakes and tyres, wet or icy roads (less friction), and the mass of the car', 'At a higher speed the car travels further during the reaction time, so the thinking distance increases (in proportion to speed)', 'At a higher speed there is more kinetic energy to transfer, so the braking force must do more work: braking distance increases (roughly with the square of speed)', 'Large decelerations need large forces, which may cause brakes to overheat or the car to skid']
    })
  ])] });
})();
