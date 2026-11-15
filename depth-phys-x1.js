/* Exam-style questions for Energy (phys-en1–phys-en9), Electricity (phys-el1–phys-el9) and Particle model (phys-pm1–phys-pm6).
   Lifts each lesson to at least 12 marks; adds a 6-mark extended response to phys-el9 and phys-pm6. g = 9.8 N/kg. */
(() => {
  const add = GcseDepth.add;
  const P = (q, m, ms, x) => Object.assign({ q, m, lines: Math.max(2, m), ms: ms.map(t => ['1', t]) }, x || {});
  const C = (a, unit, calc, tol = 0.02) => ({ ans: { a, unit, tol }, calc });
  const Q = (stem, parts) => ({ stem: stem ? `<p>${stem}</p>` : '', parts });
  const L6 = (a, b, c) => [['Level 3 (5–6)', a], ['Level 2 (3–4)', b], ['Level 1 (1–2)', c], ['0', 'No relevant content.']];

  add('phys-en1', { exam: [Q('A pendulum is pulled to one side and released.', [
    P('Describe the changes in energy stores as the pendulum swings from its highest point to its lowest point.', 2, ['the gravitational potential store (of the bob) decreases', 'the kinetic store increases']),
    P('After some time the pendulum stops swinging. Explain what has happened to the energy.', 2, ['energy has been transferred to the thermal store of the surroundings (by air resistance / friction at the pivot)', 'the energy is dissipated (spread out), not destroyed'])
  ])] });
  add('phys-en2', { exam: [Q('A 0.050 kg ball is dropped from a window 8.0 m above the ground. Ignore air resistance.', [
    P('Calculate the speed of the ball just before it hits the ground.', 3, ['E<sub>p</sub> = 0.050 × 9.8 × 8.0 = 3.92 J', '½ × 0.050 × v² = 3.92', 'v = 12.5 m/s (allow 13 m/s)'], C(12.5, 'm/s', 'sqrt(2*9.8*8.0)'))
  ])] });
  add('phys-en3', { exam: [Q('A toy launcher contains a spring with a spring constant of 800 N/m. The spring is compressed by 0.050 m.', [
    P('Calculate the elastic potential energy stored in the spring.', 2, ['E<sub>e</sub> = ½ × 800 × 0.050²', '= 1.0 J'], C(1.0, 'J', '0.5*800*0.050**2'))
  ])] });
  add('phys-en5', { exam: [Q('An electric motor lifts a 12 kg box through a height of 1.5 m in 3.0 s.', [
    P('Calculate the useful power output of the motor.', 3, ['work done = mgh = 12 × 9.8 × 1.5 = 176.4 J', 'P = E ÷ t = 176.4 ÷ 3.0', '= 59 W (58.8 W)'], C(58.8, 'W', '12*9.8*1.5/3.0'))
  ])] });
  add('phys-en6', { exam: [Q('A 1500 W hair dryer has a useful power output of 1200 W.', [
    P('Calculate the efficiency of the hair dryer.', 2, ['efficiency = 1200 ÷ 1500', '= 0.80 (80 %)'], C(0.8, '', '1200/1500')),
    P('Suggest one way in which energy is wasted by the hair dryer.', 1, ['sound / heating the casing (and the surroundings) instead of the air flow'])
  ])] });
  add('phys-en7', { exam: [Q('A family want to reduce the rate at which their house loses energy.', [
    P('Explain why double glazing reduces the rate of energy transfer through the windows.', 2, ['there is a gap of air (or gas) between the panes', 'air has a very low thermal conductivity, so energy is conducted more slowly']),
    P('The walls of house A are twice as thick as the walls of house B. They are made of the same brick. Which house loses energy more slowly through its walls? Give a reason.', 2, ['house A', 'thicker walls give a lower rate of energy transfer'])
  ])] });
  add('phys-en8', { exam: [Q('A village is choosing between a solar farm and a wind farm.', [
    P('Give one advantage that both resources share.', 1, ['renewable / no carbon dioxide emitted while generating / no fuel costs']),
    P('Explain one disadvantage of using solar power in the UK.', 2, ['the output depends on daylight / weather (cloud)', 'so there is little or no output at night or in winter, when demand is high'])
  ])] });
  add('phys-en9', { exam: [
    Q('A 60 kg skier starts from rest and slides down a slope, dropping a vertical height of 20 m. Her speed at the bottom is 15 m/s.', [
      P('Calculate the decrease in her gravitational potential energy.', 2, ['E<sub>p</sub> = 60 × 9.8 × 20', '= 11 760 J'], C(11760, 'J', '60*9.8*20')),
      P('Calculate her kinetic energy at the bottom of the slope.', 2, ['E<sub>k</sub> = ½ × 60 × 15²', '= 6750 J'], C(6750, 'J', '0.5*60*15**2')),
      P('Calculate the energy dissipated during the descent.', 1, ['11 760 − 6750 = 5010 J'], C(5010, 'J', '11760-6750'))
    ]),
    Q('A 3.0 kW immersion heater heats 150 kg of water in a tank. The specific heat capacity of water is 4200 J/kg °C.', [
      P('Calculate the time taken to raise the temperature of the water by 40 °C. Assume no energy is lost.', 3, ['ΔE = 150 × 4200 × 40 = 25 200 000 J', 't = E ÷ P = 25 200 000 ÷ 3000', '= 8400 s'], C(8400, 's', '150*4200*40/3000'))
    ])
  ] });

  add('phys-el1', { exam: [Q('A torch bulb carries a current of 0.25 A for 8.0 minutes.', [
    P('Calculate the charge that flows through the bulb.', 3, ['t = 8.0 × 60 = 480 s', 'Q = It = 0.25 × 480', '= 120 C'], C(120, 'C', '0.25*480'))
  ])] });
  add('phys-el2', { exam: [Q('A student measures the p.d. across a resistor as 4.5 V and the current through it as 0.30 A.', [
    P('Calculate the resistance of the resistor.', 2, ['R = V ÷ I = 4.5 ÷ 0.30', '= 15 Ω'], C(15, 'Ω', '4.5/0.30')),
    P('Name the meter used to measure the p.d. and state how it is connected.', 1, ['a voltmeter, connected in parallel with the resistor (both needed)'])
  ])] });
  add('phys-el3', { exam: [Q('An LDR is used in a circuit that switches on a street light.', [
    P('Describe how the resistance of the LDR changes as it gets dark.', 1, ['the resistance increases']),
    P('At one light level the p.d. across the LDR is 3.0 V and the current is 0.0015 A. Calculate its resistance.', 2, ['R = 3.0 ÷ 0.0015', '= 2000 Ω'], C(2000, 'Ω', '3.0/0.0015')),
    P('Give one other use of an LDR.', 1, ['automatic night lights / light meters in cameras / burglar detectors'])
  ])] });
  add('phys-el4', { exam: [Q('Two identical lamps are connected in parallel to a 6.0 V battery. The current from the battery is 0.80 A.', [
    P('What is the current in each lamp? Give a reason.', 2, ['0.40 A', 'the current splits equally between identical branches (currents in parallel branches add up to the total)'], C(0.4, 'A', '0.80/2'))
  ])] });
  add('phys-el5', { exam: [Q('A student touches the live wire of a lamp that is switched off at the lamp.', [
    P('Explain why she could get an electric shock.', 3, ['the live wire is still at a high potential (230 V)', 'her body is at earth potential (0 V), so there is a large p.d. across her', 'a current flows through her to earth'])
  ])] });
  add('phys-el6', { exam: [Q('A 1.2 kW toaster is switched on for 3.0 minutes.', [
    P('Calculate the energy transferred by the toaster.', 3, ['t = 3.0 × 60 = 180 s', 'E = Pt = 1200 × 180', '= 216 000 J'], C(216000, 'J', '1200*180'))
  ])] });
  add('phys-el7', { exam: [Q('The National Grid uses step-up and step-down transformers.', [
    P('Explain why using step-up transformers makes the National Grid an efficient way to transfer energy.', 3, ['the p.d. is increased, so the current is reduced for the same power', 'a smaller current causes less heating of the cables', 'so less energy is wasted (dissipated)']),
    P('Explain why step-down transformers are used before electricity reaches homes.', 1, ['to reduce the p.d. to 230 V, which is safer to use in homes'])
  ])] });
  add('phys-el8', { exam: [Q('A balloon is rubbed on a woollen jumper and becomes negatively charged.', [
    P('Explain how the balloon becomes negatively charged.', 2, ['electrons are transferred from the jumper to the balloon (by friction)', 'the balloon now has more electrons than protons'])
  ])] });
  add('phys-el9', { exam: [Q('A student investigates how the length of a wire affects its resistance.', [
    P('Describe a method the student could use. Include the measurements she should take and how she would use them.', 6, [], {
      lines: 10,
      lor: L6('A clear, logically ordered method that would produce valid results: circuit with ammeter in series and voltmeter in parallel, several lengths measured, R calculated from V ÷ I and a graph plotted, with control of temperature.', 'A method with most steps, including measuring V and I for different lengths, with some detail of how resistance is found.', 'Simple statements about some steps, such as changing the length or using a meter, without a clear method.'),
      ind: ['Connect the wire to a battery (or power supply), an ammeter in series and a voltmeter in parallel with the length of wire', 'Use crocodile clips on a metre ruler to set the length of wire, e.g. 10, 20, 30, 40, 50 cm', 'Record the current and the p.d. for each length', 'Calculate R = V ÷ I', 'Use a low current / switch off between readings so the wire does not heat up', 'Repeat and find the mean; plot resistance against length: a straight line through the origin']
    })
  ])] });

  add('phys-pm1', { exam: [Q('A gold ring has a mass of 9.65 g and a volume of 0.50 cm³.', [
    P('Calculate the density of gold in g/cm³.', 2, ['ρ = 9.65 ÷ 0.50', '= 19.3 g/cm³'], C(19.3, 'g/cm³', '9.65/0.50'))
  ])] });
  add('phys-pm2', { exam: [Q('Ice is heated until it melts, and the water is then heated further.', [
    P('Explain why the temperature stays at 0 °C while the ice melts.', 2, ['the energy supplied breaks the bonds between the particles / increases their potential energy', 'it does not increase the kinetic energy of the particles, so the temperature does not change']),
    P('What happens to the internal energy of the ice as it melts?', 1, ['it increases']),
    P('Name the change of state from a solid directly to a gas.', 1, ['sublimation']),
    P('Explain why a change of state is a physical change.', 2, ['no new substance is formed / the mass is conserved', 'the material recovers its original properties if the change is reversed']),
    P('Steam condenses on a cold window. Describe how the arrangement of its particles changes.', 1, ['the particles become much closer together (but still randomly arranged)'])
  ])] });
  add('phys-pm3', { exam: [Q('A freezer removes 167 000 J of energy from some water at 0 °C, freezing it completely. The specific latent heat of fusion of water is 334 000 J/kg.', [
    P('Calculate the mass of water frozen.', 2, ['m = E ÷ L = 167 000 ÷ 334 000', '= 0.50 kg'], C(0.5, 'kg', '167000/334000'))
  ])] });
  add('phys-pm4', { exam: [Q('A gas syringe is sealed and placed in a beaker of hot water. The plunger can move freely.', [
    P('Explain, in terms of particles, how the gas exerts a pressure on the walls of the syringe.', 2, ['the particles collide with the walls', 'each collision exerts a force; pressure is the total force per unit area']),
    P('Explain why the plunger moves outwards when the syringe is heated.', 3, ['the particles gain kinetic energy / move faster', 'they collide with the plunger more often and with more force, so the pressure inside increases', 'the plunger is pushed out until the pressure inside equals the pressure outside (the volume increases)']),
    P('State what happens to the mass of gas in the syringe.', 1, ['it stays the same'])
  ])] });
  add('phys-pm5', { exam: [Q('Air in a bicycle pump has a volume of 120 cm³ at a pressure of 100 kPa. The outlet is blocked and the plunger is pushed in slowly, so the temperature stays constant.', [
    P('Calculate the pressure when the volume is 40 cm³.', 3, ['p₁V₁ = p₂V₂', 'p₂ = 100 × 120 ÷ 40', '= 300 kPa'], C(300, 'kPa', '100*120/40')),
    P('Explain, in terms of particles, why the pressure increases as the volume decreases.', 2, ['the same number of particles are in a smaller volume', 'so they collide with the walls more often (per unit area), giving a larger force per unit area'])
  ])] });
  add('phys-pm6', { exam: [Q('A student wants to find the density of an irregularly shaped stone and of a liquid.', [
    P('Describe methods the student could use to find both densities.', 6, [], {
      lines: 10,
      lor: L6('Clear methods for both: mass measured on a balance, volume of the stone by displacement and volume of the liquid with a measuring cylinder, with density = mass ÷ volume and steps to improve accuracy.', 'A method for one material in detail, or both with some steps missing.', 'Simple statements, such as using a balance or measuring cylinder, without a clear method.'),
      ind: ['Stone: measure its mass on a balance', 'Fill a displacement (eureka) can to the spout; lower the stone in and collect the displaced water in a measuring cylinder: this is the volume of the stone', 'Liquid: measure the mass of an empty measuring cylinder, add a known volume of liquid and measure the mass again', 'Mass of liquid = difference in the two masses', 'Density = mass ÷ volume for each', 'Read the measuring cylinder at eye level at the bottom of the meniscus; repeat and take a mean']
    })
  ])] });
})();
