/* Worked examples for Particle model (phys-pm1–phys-pm6), Atomic structure (phys-at1–phys-at9), Waves (phys-wa3, phys-wa5, phys-wa6, phys-wa8–phys-wa10),
   Magnetism (phys-mg1–phys-mg7) and Space (phys-sx1–phys-sx4). Every number is recomputed by tools/verify-depth.cjs. */
(() => {
  const { v, fr, res } = LAB.W, add = GcseDepth.add;
  const S = (t, why, lines) => [t, why, lines];

  /* ---------------- Particle model ---------------- */
  add('phys-pm1', { ex: [
    ['Density of a regular block', 'A metal block measures 4.0 cm × 5.0 cm × 2.0 cm and has a mass of 108 g. Calculate its density in g/cm³ and kg/m³.', [
      S('Volume', 'length × width × height.', ['V = 4.0 × 5.0 × 2.0 = 40 cm³']),
      S('Density', 'ρ = m ÷ V.', [`ρ = ${fr('108', '40')} = ${res('2.7 g/cm³')}`]),
      S('Convert', '1 g/cm³ = 1000 kg/m³.', [res('2700 kg/m³ (aluminium)')])
    ], { chk: [['4.0*5.0*2.0', 40], ['108/40', 2.7], ['2.7*1000', 2700]] }]
  ] });
  add('phys-pm2', { ex: [
    ['Reading a heating curve', 'Ice at −10 °C is heated steadily until it becomes steam at 110 °C. Describe what happens to the temperature and the particles.', [
      S('Sloping sections', 'Solid, liquid and gas warming.', ['The temperature rises: the particles’ kinetic energy increases.']),
      S('Flat sections', 'Melting at 0 °C and boiling at 100 °C.', ['The temperature stays constant: the energy breaks bonds, increasing the particles’ potential energy.']),
      S('Longest flat section', '', ['Boiling takes longer than melting because separating the particles completely needs more energy.'])
    ], { desc: true }],
    ['Internal energy and temperature', 'A pan of water is heated from 20 °C to 60 °C. Explain what happens to its internal energy.', [
      S('Definition', '', ['Internal energy is the total kinetic and potential energy of all the particles.']),
      S('Explain', '', ['Heating increases the particles’ average kinetic energy, so the temperature rises and the internal energy increases.'])
    ], { desc: true }]
  ] });
  add('phys-pm3', { ex: [
    ['Specific latent heat from a practical', 'A 2.0 kW kettle is left boiling with its lid open. In 140 s its mass falls by 0.12 kg. Estimate the specific latent heat of vaporisation of water.', [
      S('Energy supplied', 'E = Pt.', ['E = 2000 × 140 = 280 000 J']),
      S('Rearrange E = mL', '', [`${v('L')} = ${fr('280 000', '0.12')} = ${res('2.3 × 10⁶ J/kg')}`]),
      S('Evaluate', 'The accepted value is 2.26 × 10⁶ J/kg.', ['Some energy heats the surroundings, so the estimate is a little too high.'])
    ], { chk: [['2000*140', 280000], ['280000/0.12', 2.33e6]] }]
  ] });
  add('phys-pm4', { ex: [
    ['Heating a sealed can', 'A sealed can of air is heated. Explain why the pressure inside increases.', [
      S('Particle motion', '', ['The air particles gain kinetic energy and move faster.']),
      S('Collisions', 'The volume cannot change.', ['They hit the walls more often and with more force.']),
      S('Pressure', '', ['The total force on each unit area of the wall increases, so the pressure increases.'])
    ], { desc: true }],
    ['A tyre on a hot day', 'A car is parked in the sun. Explain why the pressure of the air in its tyres increases.', [
      S('Temperature', '', ['The air in the tyre is heated, so its particles move faster on average.']),
      S('Volume', 'The tyre can hardly stretch.', ['The volume stays almost constant.']),
      S('Pressure', '', ['The particles collide with the tyre walls more often and harder, so the pressure increases.'])
    ], { desc: true }]
  ] });
  add('phys-pm5', { ex: [
    ['A rising weather balloon', 'A balloon holds 2.0 m³ of helium at 100 kPa. It rises until the pressure is 25 kPa. Assuming constant temperature, calculate the new volume.', [
      S('pV = constant', '', [`${v('p')}₁${v('V')}₁ = ${v('p')}₂${v('V')}₂`]),
      S('Substitute', '', [`${v('V')}₂ = ${fr('100 × 2.0', '25')} = ${res('8.0 m³')}`])
    ], { chk: [['100*2.0/25', 8]] }]
  ] });
  add('phys-pm6', { ex: [
    ['From ice to warm water', 'Calculate the energy needed to change 0.50 kg of ice at 0 °C into water at 20 °C. (L<sub>f</sub> = 334 000 J/kg, c = 4200 J/kg °C)', [
      S('Melt the ice', 'E = mL.', ['E₁ = 0.50 × 334 000 = 167 000 J']),
      S('Warm the water', 'ΔE = mcΔθ.', ['E₂ = 0.50 × 4200 × 20 = 42 000 J']),
      S('Total', '', [`167 000 + 42 000 = ${res('209 000 J')}`])
    ], { chk: [['0.50*334000', 167000], ['0.50*4200*20', 42000], ['167000+42000', 209000]] }],
    ['Will it float?', 'A block has a mass of 0.80 kg and a volume of 0.0010 m³. Will it float in water (density 1000 kg/m³)?', [
      S('Density', '', [`ρ = ${fr('0.80', '0.0010')} = 800 kg/m³`]),
      S('Compare', 'Less dense than the liquid: it floats.', [res('800 < 1000, so it floats')])
    ], { chk: [['0.80/0.0010', 800]] }]
  ] });

  /* ---------------- Atomic structure ---------------- */
  add('phys-at1', { ex: [
    ['Particles in an atom', 'A chlorine atom has the symbol ³⁵₁₇Cl. How many protons, neutrons and electrons does it have? How is chlorine-37 different?', [
      S('Protons', 'Atomic number (bottom).', ['17 protons']),
      S('Neutrons', 'Mass number − atomic number.', ['35 − 17 = 18 neutrons']),
      S('Electrons', 'The atom is neutral.', ['17 electrons']),
      S('Chlorine-37', 'An isotope.', [res('17 protons but 37 − 17 = 20 neutrons')])
    ], { chk: [['35-17', 18], ['37-17', 20]] }],
    ['Size of the nucleus', 'An atom has a radius of about 1 × 10⁻¹⁰ m and its nucleus a radius of about 1 × 10⁻¹⁴ m. How many times larger is the atom?', [
      S('Divide', '', [`${fr('1 × 10⁻¹⁰', '1 × 10⁻¹⁴')} = 10⁴`]),
      S('Answer', '', [res('The atom is about 10 000 times wider than its nucleus'), 'Almost all the mass is in the tiny nucleus.'])
    ], { chk: [['1e-10/1e-14', 10000]] }]
  ] });
  add('phys-at2', { ex: [
    ['Why the plum pudding model was replaced', 'Explain how the alpha scattering experiment led to the nuclear model.', [
      S('Prediction', 'Plum pudding: positive charge spread out.', ['All alpha particles should pass through with only small deflections.']),
      S('Observation', '', ['Most passed straight through, but a few were deflected through large angles, and some bounced back.']),
      S('Conclusion', '', ['The mass and positive charge are concentrated in a tiny nucleus; most of the atom is empty space.'])
    ], { desc: true }],
    ['How the model developed further', 'Describe what Bohr and Chadwick added to the nuclear model.', [
      S('Bohr', 'His calculations agreed with experiments.', ['Electrons orbit the nucleus at specific distances (energy levels).']),
      S('Later', '', ['The positive charge of the nucleus was found to be made of protons.']),
      S('Chadwick', 'About 20 years after the nucleus was accepted.', ['He provided evidence for neutrons in the nucleus.'])
    ], { desc: true }]
  ] });
  add('phys-at3', { ex: [
    ['Identifying a radiation', 'A source is tested with absorbers. Count rates: no absorber 300 counts/min; paper 300; 3 mm aluminium 50; 2 cm lead 48. Background is 48 counts/min. Which radiation does it emit?', [
      S('Paper', 'No drop.', ['No alpha.']),
      S('Aluminium', 'Large drop to near background.', ['Beta is present.']),
      S('Lead', 'The rest is background.', [res('The source emits beta only')])
    ], { desc: true }],
    ['Count rate', 'A Geiger–Müller tube records 1800 counts in 60 s. Calculate the count rate.', [
      S('Count rate', 'counts ÷ time.', [`${fr('1800', '60')} = ${res('30 counts per second')}`]),
      S('Note', '', ['The count rate is less than the activity, because not all the radiation reaches the detector.'])
    ], { chk: [['1800/60', 30]] }]
  ] });
  add('phys-at4', { ex: [
    ['A beta decay', 'Carbon-14 (mass number 14, atomic number 6) decays by beta emission. Find the new nucleus.', [
      S('What happens', 'A neutron changes into a proton and an electron is emitted.', ['The beta particle is written with mass number 0 and atomic number −1.']),
      S('Balance', 'Totals stay the same.', ['mass number: 14 = 14 + 0', 'atomic number: 6 = 7 + (−1)']),
      S('Identify', '', [res('Nitrogen-14 (atomic number 7)')])
    ], { chk: [['14-0', 14], ['6+1', 7]] }]
  ] });
  add('phys-at5', { ex: [
    ['Half-life from data', 'The activity of a sample falls from 640 Bq to 160 Bq in 12 hours. Calculate its half-life.', [
      S('How many halvings?', '', ['640 → 320 → 160: two half-lives']),
      S('Half-life', '', [`${fr('12', '2')} = ${res('6 hours')}`])
    ], { chk: [['640/160', 4], ['12/2', 6]] }],
    ['Net decline as a ratio (Higher)', 'What fraction of a radioactive sample remains after 3 half-lives? Express the decline as a ratio.', [
      S('Halve three times', '', ['½ × ½ × ½ = ⅛']),
      S('Ratio', '', [res('1 : 8 remains (0.125), so 7/8 has decayed')])
    ], { chk: [['0.5**3', 0.125]], higher: true }]
  ] });
  add('phys-at6', { ex: [
    ['Correcting for background', 'A detector reads 85 counts/min near a source. With the source removed it reads 25 counts/min. What is the count rate from the source?', [
      S('Subtract background', 'Background is always there.', [`85 − 25 = ${res('60 counts/min')}`])
    , S('Why it matters', '', ['Without the correction, the source would seem more active than it is.'])], { chk: [['85-25', 60]] }],
    ['Contamination or irradiation?', 'A patient is given a radioactive tracer. A nurse stands near the patient. Explain which person is contaminated and which is irradiated.', [
      S('Patient', 'The radioactive atoms are inside the body.', ['The patient is contaminated: the tracer keeps emitting until it decays or leaves the body.']),
      S('Nurse', '', ['The nurse is irradiated: exposed to radiation from outside but does not become radioactive.']),
      S('Reducing risk', '', ['The nurse limits time near the patient and keeps a distance.'])
    ], { desc: true }]
  ] });
  add('phys-at7', { ex: [
    ['Choosing a medical tracer', 'Explain why a gamma emitter with a half-life of 6 hours is a good choice for a medical tracer.', [
      S('Gamma', 'Weakly ionising and very penetrating.', ['It leaves the body and can be detected outside, with little damage to cells.']),
      S('Half-life of hours', '', ['Long enough for the scan, but the activity falls quickly afterwards, so the dose is small.'])
    ], { desc: true }],
    ['How much is left?', 'A tracer has a half-life of 6 hours. What percentage of its activity remains after 24 hours?', [
      S('Number of half-lives', '', ['24 ÷ 6 = 4']),
      S('Percentage', '', [`100 % ÷ 2⁴ = ${res('6.25 %')}`])
    ], { chk: [['24/6', 4], ['100/2**4', 6.25]] }]
  ] });
  add('phys-at8', { ex: [
    ['A chain reaction', 'Describe how a chain reaction happens in a nuclear reactor and how it is controlled.', [
      S('Fission', '', ['A uranium-235 nucleus absorbs a neutron and splits into two smaller nuclei, releasing 2 or 3 neutrons, gamma rays and energy.']),
      S('Chain', '', ['The released neutrons are absorbed by further nuclei, which also split.']),
      S('Control', '', ['Control rods absorb some neutrons so the reaction continues at a steady rate.'])
    ], { desc: true }],
    ['Fission and fusion compared', 'Compare nuclear fission and nuclear fusion.', [
      S('Fission', '', ['A large, unstable nucleus splits into two smaller nuclei (used in power stations).']),
      S('Fusion', '', ['Two light nuclei join to form a heavier nucleus; some mass is converted to energy (powers the stars).']),
      S('Both', '', ['Both release energy; fusion needs very high temperature and pressure.'])
    ], { desc: true }]
  ] });
  add('phys-at9', { ex: [
    ['An alpha decay', 'Polonium-210 (atomic number 84) emits an alpha particle. Find the mass number and atomic number of the new nucleus.', [
      S('Alpha particle', '', ['mass number 4, atomic number 2']),
      S('New nucleus', '', [`mass number 210 − 4 = 206, atomic number 84 − 2 = 82: ${res('lead-206')}`])
    ], { chk: [['210-4', 206], ['84-2', 82]] }],
    ['Half-life calculation', 'Polonium-210 has a half-life of 138 days. A source has an activity of 2000 Bq. How long until it falls to 250 Bq?', [
      S('Halvings', '', ['2000 → 1000 → 500 → 250: three half-lives']),
      S('Time', '', [`3 × 138 = ${res('414 days')}`])
    ], { chk: [['2000/2**3', 250], ['3*138', 414]] }]
  ] });

  /* ---------------- Waves ---------------- */
  add('phys-wa3', { ex: [
    ['Reflection from a mirror', 'A ray hits a plane mirror at 25° to the normal. Find the angle of reflection and the angle between the incident and reflected rays.', [
      S('Law of reflection', '', ['angle of reflection = 25°']),
      S('Between the rays', '', [`25 + 25 = ${res('50°')}`])
    ], { chk: [['25+25', 50]] }],
    ['Why light bends (Higher)', 'Explain, using wave fronts, why light bends towards the normal when it enters glass at an angle.', [
      S('Speed change', '', ['Light travels more slowly in glass than in air.']),
      S('Wave fronts', '', ['One end of each wave front enters the glass first and slows down while the other end is still moving faster.']),
      S('Result', '', ['The wave front turns, so the ray bends towards the normal. The frequency stays the same; the wavelength gets shorter.'])
    ], { desc: true, higher: true }]
  ] });
  add('phys-wa5', { ex: [
    ['Wavelength of a microwave', 'Wi-Fi uses microwaves with a frequency of 2.4 GHz. Calculate the wavelength. (speed = 3.0 × 10⁸ m/s)', [
      S('Convert', '1 GHz = 10⁹ Hz.', ['f = 2.4 × 10⁹ Hz']),
      S('λ = v ÷ f', '', [`${v('λ')} = ${fr('3.0 × 10⁸', '2.4 × 10⁹')} = ${res('0.125 m (12.5 cm)')}`])
    ], { chk: [['3.0e8/2.4e9', 0.125]] }],
    ['Frequency of red light', 'Red light has a wavelength of 7.0 × 10⁻⁷ m. Calculate its frequency.', [
      S('f = v ÷ λ', '', [`${v('f')} = ${fr('3.0 × 10⁸', '7.0 × 10⁻⁷')} = ${res('4.3 × 10¹⁴ Hz')}`])
    , S('Check', 'Visible light frequencies are around 10¹⁴ Hz.', ['The answer is sensible.'])], { chk: [['3.0e8/7.0e-7', 4.29e14]] }]
  ] });
  add('phys-wa6', { ex: [
    ['Why X-rays show bones', 'Explain how an X-ray image of a broken arm is produced.', [
      S('Absorption', '', ['X-rays are absorbed by bone but mostly pass through soft tissue.']),
      S('Detector', '', ['Where X-rays reach the detector it is exposed; bones leave a shadow.']),
      S('Safety', 'X-rays are ionising.', ['Exposure is kept short; staff stand behind lead screens.'])
    ], { desc: true }],
    ['Comparing doses', 'A CT scan gives a dose of about 10 mSv. Average background radiation in the UK is about 2.7 mSv per year. How many years of background is the scan equal to?', [
      S('Divide', '', [`${fr('10', '2.7')} = ${res('about 3.7 years')}`]),
      S('Judge', '', ['The benefit of the diagnosis usually outweighs this small extra risk.'])
    ], { chk: [['10/2.7', 3.7]] }]
  ] });
  add('phys-wa8', { ex: [
    ['A blue shirt under red light', 'A blue shirt is lit only by red light. What colour does it appear? Explain.', [
      S('Shirt', '', ['A blue shirt reflects blue light and absorbs other colours.']),
      S('Red light', '', ['There is no blue light to reflect; the red light is absorbed.']),
      S('Result', '', [res('The shirt looks black')])
    ], { desc: true }],
    ['Why snow is white', 'Explain why snow looks white and a window is transparent.', [
      S('Snow', '', ['It reflects all colours (all wavelengths) of visible light equally, in many directions.']),
      S('Window', '', ['Glass transmits most of the light, so you can see through it.'])
    ], { desc: true }]
  ] });
  add('phys-wa9', { ex: [
    ['Two cans of hot water', 'A matt black can and a shiny silver can are filled with water at 80 °C. Which cools faster? Explain.', [
      S('Emission', '', ['Matt black surfaces are better emitters of infrared radiation.']),
      S('Answer', '', [res('The black can cools faster')]),
      S('Fair test', '', ['Same volume and starting temperature of water, same size of can.'])
    ], { desc: true }],
    ['The Earth’s temperature', 'Explain why the temperature of the Earth depends on the radiation it absorbs and emits.', [
      S('Balance', '', ['If the Earth absorbs radiation at the same rate as it emits it, its temperature stays constant.']),
      S('Greenhouse gases', '', ['They absorb infrared emitted by the Earth, so less escapes and the temperature rises until a new balance is reached.'])
    ], { desc: true }]
  ] });
  add('phys-wa10', { ex: [
    ['Measuring water waves', 'In a ripple tank, 10 waves pass a point in 5.0 s. Ten wavelengths measure 0.60 m. Calculate the wave speed.', [
      S('Frequency', '', ['f = 10 ÷ 5.0 = 2.0 Hz']),
      S('Wavelength', '', ['λ = 0.60 ÷ 10 = 0.060 m']),
      S('Speed', 'v = fλ.', [`${v('v')} = 2.0 × 0.060 = ${res('0.12 m/s')}`])
    ], { chk: [['10/5.0', 2], ['0.60/10', 0.06], ['2.0*0.060', 0.12]] }],
    ['Light entering glass', 'Light of frequency 5.0 × 10¹⁴ Hz travels from air into glass, where its speed is 2.0 × 10⁸ m/s. Calculate its wavelength in glass.', [
      S('Frequency does not change', '', ['f = 5.0 × 10¹⁴ Hz in glass too']),
      S('λ = v ÷ f', '', [`${v('λ')} = ${fr('2.0 × 10⁸', '5.0 × 10¹⁴')} = ${res('4.0 × 10⁻⁷ m')}`])
    ], { chk: [['2.0e8/5.0e14', 4e-7]] }]
  ] });

  /* ---------------- Magnetism ---------------- */
  add('phys-mg1', { ex: [
    ['Plotting a magnetic field', 'Describe how to plot the magnetic field of a bar magnet with a compass.', [
      S('Start', '', ['Place the magnet on paper. Put a plotting compass near the north pole and mark where the needle points.']),
      S('Repeat', '', ['Move the compass so its tail is at the last mark; mark again. Join the dots to make a field line.']),
      S('Finish', '', ['Repeat from different starting points. Add arrows from north to south.'])
    ], { desc: true }],
    ['Permanent or induced?', 'A steel paper clip hangs from a bar magnet and a second clip hangs from the first. Explain why, and what happens when the magnet is removed.', [
      S('Induced magnetism', '', ['The clips become induced magnets in the magnet’s field, so they attract each other.']),
      S('Removed', '', ['Induced magnets lose most or all of their magnetism quickly, so the clips fall.'])
    ], { desc: true }]
  ] });
  add('phys-mg2', { ex: [
    ['Making a stronger electromagnet', 'Give three ways to make an electromagnet stronger and explain each.', [
      S('More current', '', ['A larger current gives a stronger magnetic field.']),
      S('More turns', '', ['More turns of wire add more field.']),
      S('Iron core', '', ['Soft iron becomes magnetised and greatly increases the field.'])
    ], { desc: true }],
    ['Field of a solenoid', 'Describe the magnetic field of a solenoid carrying a current.', [
      S('Outside', '', ['The field is like that of a bar magnet, with a north pole at one end.']),
      S('Inside', '', ['The field is strong and uniform (parallel, evenly spaced lines).']),
      S('Reversing', '', ['Reversing the current swaps the poles.'])
    ], { desc: true }]
  ] });
  add('phys-mg3', { ex: [
    ['Current from a force (Higher)', 'A 0.20 m length of wire in a 0.15 T field feels a force of 0.090 N. Calculate the current.', [
      S('Rearrange F = BIl', '', [`${v('I')} = ${fr(v('F'), v('B') + v('l'))}`]),
      S('Substitute', '', [`${v('I')} = ${fr('0.090', '0.15 × 0.20')} = ${res('3.0 A')}`])
    ], { chk: [['0.090/(0.15*0.20)', 3]], higher: true }]
  ] });
  add('phys-mg4', { ex: [
    ['How a d.c. motor turns', 'Explain why the coil of a d.c. motor keeps rotating in the same direction.', [
      S('Forces', '', ['The current in each side of the coil is in the magnetic field, so each side feels a force (the motor effect). The forces are in opposite directions, so the coil turns.']),
      S('Commutator', '', ['Every half turn the split-ring commutator reverses the current in the coil.']),
      S('Result', '', ['The forces keep turning the coil the same way.'])
    ], { desc: true }],
    ['How a loudspeaker works', 'Explain how a loudspeaker produces a sound.', [
      S('Current', '', ['An alternating current passes through a coil attached to a cone, in the field of a permanent magnet.']),
      S('Force', '', ['The force on the coil keeps reversing, so the coil and cone move in and out.']),
      S('Sound', '', ['The vibrating cone creates pressure variations in the air: a sound wave with the same frequency as the current.'])
    ], { desc: true }]
  ] });
  add('phys-mg5', { ex: [
    ['A simple generator', 'Describe how rotating a coil in a magnetic field produces an alternating current.', [
      S('Inducing a p.d.', '', ['As the coil rotates it cuts the field lines, inducing a p.d. across its ends.']),
      S('Alternating', '', ['Each half turn, each side moves the other way through the field, so the p.d. reverses.']),
      S('Slip rings', '', ['Slip rings and brushes connect the coil to the circuit, giving an a.c. output.'])
    ], { desc: true }],
    ['A dynamic microphone', 'Explain how a microphone turns sound into an electrical signal.', [
      S('Vibration', '', ['Sound waves make a diaphragm vibrate, moving a coil attached to it.']),
      S('Induction', '', ['The coil moves in a magnetic field, so a p.d. is induced.']),
      S('Signal', '', ['The induced p.d. varies in the same way as the pressure variations of the sound.'])
    ], { desc: true }]
  ] });
  add('phys-mg6', { ex: [
    ['Current in a transformer (Higher)', 'A transformer has a primary p.d. of 230 V and a primary current of 0.50 A. Its secondary p.d. is 12 V. Assuming it is 100 % efficient, calculate the secondary current.', [
      S('Power in = power out', '', [`${v('V', 'p')}${v('I', 'p')} = ${v('V', 's')}${v('I', 's')}`]),
      S('Substitute', '', [`${v('I', 's')} = ${fr('230 × 0.50', '12')} = ${res('9.6 A')}`])
    ], { chk: [['230*0.50/12', 9.58]], higher: true }]
  ] });
  add('phys-mg7', { ex: [
    ['Force on a wire (Higher)', 'A 5.0 cm wire carries 3.0 A at right angles to a 0.40 T field. Calculate the force.', [
      S('Units', '', ['l = 5.0 cm = 0.050 m']),
      S('F = BIl', '', [`${v('F')} = 0.40 × 3.0 × 0.050 = ${res('0.060 N')}`])
    ], { chk: [['0.40*3.0*0.050', 0.06]], higher: true }],
    ['A substation transformer (Higher)', 'A transformer steps 11 000 V down to 230 V. The secondary coil has 100 turns. How many turns does the primary have?', [
      S('Turns ratio', '', [`${v('n', 'p')} = ${v('n', 's')} × ${fr(v('V', 'p'), v('V', 's'))}`]),
      S('Substitute', '', [`${v('n', 'p')} = 100 × ${fr('11 000', '230')} = ${res('4783 turns (about 4800)')}`])
    ], { chk: [['100*11000/230', 4783]], higher: true }]
  ] });

  /* ---------------- Space ---------------- */
  add('phys-sx1', { ex: [
    ['Life cycle of a Sun-sized star', 'Describe the life cycle of a star about the same size as the Sun.', [
      S('Formation', '', ['Nebula → protostar: gravity pulls dust and gas together and it heats up until fusion starts.']),
      S('Main sequence', '', ['Hydrogen fuses into helium; the star is stable for billions of years.']),
      S('End', '', ['Red giant → white dwarf → black dwarf (when it has cooled).'])
    ], { desc: true }],
    ['Why a star is stable', 'Explain why a main sequence star stays the same size.', [
      S('Inward', '', ['Gravity pulls the star’s matter inwards.']),
      S('Outward', '', ['Fusion energy creates an outward pressure.']),
      S('Balance', '', ['The two are in equilibrium, so the star neither collapses nor expands.'])
    ], { desc: true }]
  ] });
  add('phys-sx2', { ex: [
    ['Constant speed but changing velocity', 'A satellite moves in a circular orbit at a constant speed. Explain why it is accelerating.', [
      S('Velocity', '', ['Velocity is a vector: it includes direction.']),
      S('Direction', '', ['The direction of motion is always changing, so the velocity is changing.']),
      S('Force', '', ['Gravity provides a resultant force towards the centre, so there is an acceleration towards the centre.'])
    ], { desc: true }],
    ['Changing orbit (Higher)', 'Explain how the speed of a satellite in a stable orbit depends on the radius of the orbit.', [
      S('Smaller orbit', '', ['Gravity is stronger closer to the Earth.']),
      S('Result', '', ['To stay in a smaller orbit the satellite must move faster; if its speed changes, the radius must change too.'])
    ], { desc: true, higher: true }]
  ] });
  add('phys-sx3', { ex: [
    ['Evidence for the Big Bang', 'Explain how red-shift supports the Big Bang theory.', [
      S('Observation', '', ['Light from distant galaxies has longer wavelengths than expected: it is red-shifted.']),
      S('Pattern', '', ['The further away the galaxy, the bigger the red-shift, so the faster it is moving away.']),
      S('Conclusion', '', ['The universe is expanding, which suggests it began from a very small, hot, dense region.'])
    ], { desc: true }],
    ['Dark matter and dark energy', 'Describe what observations of supernovae since 1998 suggest, and what is still not understood.', [
      S('Observation', '', ['Distant galaxies are receding ever faster: the expansion is accelerating.']),
      S('Not understood', '', ['Dark mass and dark energy are proposed to explain this, but are not yet understood.'])
    ], { desc: true }]
  ] });
  add('phys-sx4', { ex: [
    ['A light-year', 'A light-year is the distance light travels in one year (3.15 × 10⁷ s). Calculate it in metres.', [
      S('distance = speed × time', '', [`3.0 × 10⁸ × 3.15 × 10⁷ = ${res('9.5 × 10¹⁵ m')}`]),
      S('Scale', '', ['The nearest star after the Sun is about 4 light-years away.'])
    ], { chk: [['3.0e8*3.15e7', 9.45e15]] }],
    ['Comparing star life cycles', 'Compare the end of a Sun-sized star with the end of a much more massive star.', [
      S('Sun-sized', '', ['Red giant → white dwarf → black dwarf.']),
      S('Massive', '', ['Red super giant → supernova → neutron star or, for the most massive, a black hole.']),
      S('Elements', '', ['Supernovae make elements heavier than iron and spread them through space.'])
    ], { desc: true }]
  ] });
})();
