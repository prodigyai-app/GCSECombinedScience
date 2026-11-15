/* Extra worked examples and fill-the-gaps for the calculation lessons that had no worked example: phys-fo5, phys-fo7, phys-fo10, phys-wa1, phys-wa2, phys-wa4, phys-wa7.
   g = 9.8 N/kg, speed of sound in air = 330 m/s, speed of light = 3.0e8 m/s. Every answer is recomputed by tools/verify-depth.cjs. */
(() => {
  const { v, fr, res } = LAB.W, add = GcseDepth.add;

  /* ---------------- phys-fo5 Springs and Hooke's law ---------------- */
  add('phys-fo5', {
    ex: [
      ['Finding a spring constant from two lengths', 'A spring is 12.0 cm long. A 4.0 N force stretches it to 17.0 cm. Calculate the spring constant.', [
        ['Find the extension', 'Extension is the change in length, not the new length.', ['extension = 17.0 − 12.0 = 5.0 cm = 0.050 m']],
        ['Rearrange F = ke', 'Divide both sides by the extension.', [`${v('k')} = ${fr(v('F'), v('e'))} = ${fr('4.0', '0.050')} = ${res('80 N/m')}`]]
      ], { chk: [['4.0/0.050', 80]] }],
      ['Energy stored in a stretched spring', 'A spring with a spring constant of 80 N/m is stretched by 0.050 m. Calculate the energy stored. Assume the limit of proportionality is not exceeded.', [
        ['Choose the equation', 'Elastic potential energy stored when a spring is stretched.', [`${v('E', 'e')} = ½ ${v('k')}${v('e')}²`]],
        ['Substitute', 'Square the extension first.', ['0.050² = 0.0025', `${v('E', 'e')} = ½ × 80 × 0.0025 = ${res('0.10 J')}`]]
      ], { chk: [['0.5*80*0.050**2', 0.1]] }]
    ],
    gaps: [
      { q: 'A spring has a spring constant of 40 N/m. A force of 6.0 N stretches it.', lines: ['e = F ÷ k = 6.0 ÷ 40 = [[0.15]] m'], calc: ['6.0/40'], why: 'Rearrange F = ke to e = F ÷ k.' },
      { q: 'A 0.50 kg mass hangs from a spring and extends it by 0.098 m.', lines: ['W = mg = 0.50 × 9.8 = [[4.9]] N', 'k = F ÷ e = 4.9 ÷ 0.098 = [[50]] N/m'], calc: ['0.50*9.8', '4.9/0.098'], why: 'The force stretching the spring is the weight of the mass.' },
      { q: 'A spring with k = 200 N/m is compressed by 0.040 m.', lines: ['E<sub>e</sub> = ½ke² = ½ × 200 × 0.040² = [[0.16]] J'], calc: ['0.5*200*0.040**2'], why: 'Square the extension before multiplying.' },
      { q: 'Force–extension graph of a spring.', lines: ['Within the limit of proportionality the graph is a [[straight line|straight]] through the [[origin]]. The gradient is the [[spring constant|k]].'], calc: [], why: 'F = ke is a straight line through the origin with gradient k.' }
    ]
  });

  /* ---------------- phys-fo7 Pressure ---------------- */
  add('phys-fo7', {
    ex: [
      ['Pressure under a box', 'A box weighing 120 N rests on a table. Its base has an area of 0.040 m². Calculate the pressure it exerts on the table.', [
        ['Choose the equation', 'The force acts normal to the surface.', [`${v('p')} = ${fr(v('F'), v('A'))}`]],
        ['Substitute', '', [`${v('p')} = ${fr('120', '0.040')} = ${res('3000 Pa')}`]]
      ], { chk: [['120/0.040', 3000]] }],
      ['Pressure at the bottom of a pool (Higher)', 'A swimming pool is 2.0 m deep. The density of water is 1000 kg/m³. Calculate the pressure due to the water at the bottom. g = 9.8 N/kg.', [
        ['Choose the equation', 'Pressure in a liquid depends on depth, density and g.', [`${v('p')} = ${v('h')}${v('ρ')}${v('g')}`]],
        ['Substitute', '', [`${v('p')} = 2.0 × 1000 × 9.8 = ${res('19 600 Pa')}`]]
      ], { chk: [['2.0*1000*9.8', 19600]], higher: true }]
    ],
    gaps: [
      { q: 'A force of 500 N acts on an area of 0.25 m².', lines: ['p = F ÷ A = 500 ÷ 0.25 = [[2000]] Pa'], calc: ['500/0.25'], why: 'Pressure is force per unit area.' },
      { q: 'A pressure of 8000 Pa acts on an area of 0.50 m².', lines: ['F = pA = 8000 × 0.50 = [[4000]] N'], calc: ['8000*0.50'], why: 'Rearrange p = F ÷ A to F = pA.' },
      { higher: true, q: '(Higher) A tank of water is 2.5 m deep. ρ = 1000 kg/m³, g = 9.8 N/kg.', lines: ['p = hρg = 2.5 × 1000 × 9.8 = [[24500]] Pa'], calc: ['2.5*1000*9.8'], why: 'Use the depth of the water.' },
      { q: 'A drawing pin is pushed into a wall.', lines: ['The point has a [[small]] area, so the same force gives a [[large|high|big]] pressure.'], calc: [], why: 'p = F ÷ A: a smaller area gives a larger pressure.' }
    ]
  });

  /* ---------------- phys-fo10 Newton's first and second laws ---------------- */
  add('phys-fo10', {
    ex: [
      ['Acceleration from a resultant force', 'A car of mass 1200 kg has a driving force of 3000 N. The resistive forces total 600 N. Calculate its acceleration.', [
        ['Resultant force', 'Subtract the force acting against the motion.', ['resultant = 3000 − 600 = 2400 N']],
        ['Use F = ma', 'Rearrange for a.', [`${v('a')} = ${fr(v('F'), v('m'))} = ${fr('2400', '1200')} = ${res('2.0 m/s²')}`]]
      ], { chk: [['3000-600', 2400], ['2400/1200', 2]] }],
      ['Finding the mass', 'A resultant force of 15 N gives an object an acceleration of 2.5 m/s². Calculate its mass.', [
        ['Rearrange F = ma', 'Divide both sides by the acceleration.', [`${v('m')} = ${fr(v('F'), v('a'))}`]],
        ['Substitute', '', [`${v('m')} = ${fr('15', '2.5')} = ${res('6.0 kg')}`]]
      ], { chk: [['15/2.5', 6]] }]
    ],
    gaps: [
      { q: 'A 2.0 kg trolley is pulled by a resultant force of 5.0 N.', lines: ['a = F ÷ m = 5.0 ÷ 2.0 = [[2.5]] m/s²'], calc: ['5.0/2.0'], why: 'a = F ÷ m.' },
      { q: 'A cyclist and bicycle have a mass of 80 kg and accelerate at 0.75 m/s².', lines: ['F = ma = 80 × 0.75 = [[60]] N'], calc: ['80*0.75'], why: 'This is the resultant force.' },
      { q: 'A rocket of mass 500 kg has an upward thrust of 9000 N.', lines: ['Weight = mg = 500 × 9.8 = [[4900]] N', 'Resultant = 9000 − 4900 = [[4100]] N', 'a = 4100 ÷ 500 = [[8.2]] m/s²'], calc: ['500*9.8', '9000-4900', '4100/500'], why: 'Find the resultant force before using F = ma.' },
      { q: 'A car travels at a steady speed along a straight road.', lines: ['The resultant force on it is [[zero|0]].'], calc: [], why: 'Constant velocity means no resultant force (Newton’s first law).' }
    ]
  });

  /* ---------------- phys-wa1 Transverse and longitudinal waves ---------------- */
  add('phys-wa1', {
    ex: [
      ['Period from frequency', 'A wave has a frequency of 50 Hz. Calculate its period.', [
        ['Choose the equation', 'The period is the time for one wave.', [`${v('T')} = ${fr('1', v('f'))}`]],
        ['Substitute', '', [`${v('T')} = ${fr('1', '50')} = ${res('0.020 s')}`]]
      ], { chk: [['1/50', 0.02]] }],
      ['Frequency from a count', 'In a ripple tank, 12 waves pass a point in 3.0 s. Calculate the frequency and the period.', [
        ['Frequency', 'Frequency is the number of waves each second.', [`${v('f')} = ${fr('12', '3.0')} = ${res('4.0 Hz')}`]],
        ['Period', '', [`${v('T')} = ${fr('1', '4.0')} = ${res('0.25 s')}`]]
      ], { chk: [['12/3.0', 4], ['1/4.0', 0.25]] }]
    ],
    gaps: [
      { q: 'A wave has a frequency of 250 Hz.', lines: ['T = 1 ÷ f = 1 ÷ 250 = [[0.004]] s'], calc: ['1/250'], why: 'T = 1 ÷ f.' },
      { q: 'A wave has a period of 0.50 s.', lines: ['f = 1 ÷ T = 1 ÷ 0.50 = [[2.0|2]] Hz'], calc: ['1/0.50'], why: 'f = 1 ÷ T.' },
      { q: 'A ripple tank generator makes 90 waves in 30 s.', lines: ['f = 90 ÷ 30 = [[3.0|3]] Hz'], calc: ['90/30'], why: 'Frequency is waves per second.' },
      { q: 'Two types of wave.', lines: ['In a longitudinal wave the oscillations are [[parallel]] to the direction of energy transfer; in a transverse wave they are [[perpendicular|at right angles]] to it.'], calc: [], why: 'Sound is longitudinal; light and water ripples are transverse.' }
    ]
  });

  /* ---------------- phys-wa2 Wave speed ---------------- */
  add('phys-wa2', {
    ex: [
      ['Wave speed', 'A wave has a frequency of 5.0 Hz and a wavelength of 0.40 m. Calculate its speed.', [
        ['Choose the equation', '', [`${v('v')} = ${v('f')}${v('λ')}`]],
        ['Substitute', '', [`${v('v')} = 5.0 × 0.40 = ${res('2.0 m/s')}`]]
      ], { chk: [['5.0*0.40', 2]] }],
      ['Wavelength of a radio wave', 'A radio station broadcasts at 90 MHz. Radio waves travel at 3.0 × 10⁸ m/s. Calculate the wavelength.', [
        ['Convert the frequency', '1 MHz = 1 000 000 Hz.', ['90 MHz = 90 × 10⁶ = 9.0 × 10⁷ Hz']],
        ['Rearrange v = fλ', 'Divide both sides by f.', [`${v('λ')} = ${fr(v('v'), v('f'))} = ${fr('3.0 × 10⁸', '9.0 × 10⁷')} = ${res('3.3 m')}`]]
      ], { chk: [['3.0e8/9.0e7', 3.33]] }]
    ],
    gaps: [
      { q: 'A sound wave in air has a frequency of 440 Hz and a wavelength of 0.75 m.', lines: ['v = fλ = 440 × 0.75 = [[330]] m/s'], calc: ['440*0.75'], why: 'v = fλ.' },
      { q: 'Water waves travel at 0.60 m/s with a frequency of 3.0 Hz.', lines: ['λ = v ÷ f = 0.60 ÷ 3.0 = [[0.20]] m'], calc: ['0.60/3.0'], why: 'λ = v ÷ f.' },
      { q: 'A wave has a wavelength of 2.5 cm and a speed of 0.30 m/s.', lines: ['λ = 2.5 cm = [[0.025]] m', 'f = v ÷ λ = 0.30 ÷ 0.025 = [[12]] Hz'], calc: ['2.5/100', '0.30/0.025'], why: 'Convert centimetres to metres first.' },
      { q: 'Light of frequency 6.0 × 10¹⁴ Hz travels at 3.0 × 10⁸ m/s.', lines: ['λ = v ÷ f = (3.0 × 10⁸) ÷ (6.0 × 10¹⁴) = [[5.0e-7|5.0 × 10^-7]] m'], calc: ['3.0e8/6.0e14'], why: 'Write powers of ten as 5.0e-7.' }
    ]
  });

  /* ---------------- phys-wa4 Sound, ultrasound and seismic waves ---------------- */
  add('phys-wa4', {
    ex: [
      ['Echo sounding', 'A ship sends an ultrasound pulse to the sea bed. The echo returns after 0.80 s. The speed of sound in sea water is 1500 m/s. Calculate the depth of the water.', [
        ['Total distance travelled', 'The pulse goes down and back up.', ['distance = speed × time = 1500 × 0.80 = 1200 m']],
        ['Halve it', 'The depth is only one way.', [`depth = 1200 ÷ 2 = ${res('600 m')}`]]
      ], { chk: [['1500*0.80', 1200], ['1200/2', 600]] }],
      ['An ultrasound scan', 'An ultrasound pulse travels at 1540 m/s in soft tissue. The echo from a boundary returns after 65 μs. Calculate how deep the boundary is.', [
        ['Convert the time', '1 μs = 10⁻⁶ s.', ['65 μs = 65 × 10⁻⁶ = 6.5 × 10⁻⁵ s']],
        ['Total distance', '', ['distance = 1540 × 6.5 × 10⁻⁵ = 0.100 m']],
        ['Halve it', 'The pulse travelled there and back.', [`depth = 0.100 ÷ 2 = ${res('0.050 m (5.0 cm)')}`]]
      ], { chk: [['1540*6.5e-5', 0.1001], ['1540*6.5e-5/2', 0.05005]] }]
    ],
    gaps: [
      { q: 'An echo from a cliff is heard 1.2 s after a shout. The speed of sound is 330 m/s.', lines: ['Total distance = 330 × 1.2 = [[396]] m', 'Distance to the cliff = 396 ÷ 2 = [[198]] m'], calc: ['330*1.2', '396/2'], why: 'The sound travels there and back.' },
      { q: 'Ultrasound travels at 1500 m/s in water. An echo returns after 0.040 s.', lines: ['depth = 1500 × 0.040 ÷ 2 = [[30]] m'], calc: ['1500*0.040/2'], why: 'Halve the total distance.' },
      { q: 'The range of normal human hearing.', lines: ['From [[20]] Hz to [[20000]] Hz.'], calc: ['20', '20000'], why: '20 Hz to 20 kHz. Ultrasound is above 20 kHz.' },
      { q: 'Seismic waves.', lines: ['P-waves are [[longitudinal]] and travel through solids and liquids. S-waves are [[transverse]] and cannot travel through a [[liquid]].'], calc: [], why: 'S-waves are not detected on the far side of the Earth, so part of the core is liquid.' }
    ]
  });

  /* ---------------- phys-wa7 Lenses ---------------- */
  add('phys-wa7', {
    ex: [
      ['Magnification of a lens', 'An object 2.0 cm tall forms an image 9.0 cm tall in a convex lens. Calculate the magnification.', [
        ['Choose the equation', 'Both heights must be in the same units.', [`magnification = ${fr('image height', 'object height')}`]],
        ['Substitute', '', [`magnification = ${fr('9.0', '2.0')} = ${res('4.5')}`, 'There is no unit.']]
      ], { chk: [['9.0/2.0', 4.5]] }],
      ['Finding the image height', 'A magnifying glass has a magnification of 5.0. The object is 3.0 mm tall. Calculate the height of the image.', [
        ['Rearrange', 'Multiply both sides by the object height.', ['image height = magnification × object height']],
        ['Substitute', '', ['image height = 5.0 × 3.0 = ' + res('15 mm')]]
      ], { chk: [['5.0*3.0', 15]] }]
    ],
    gaps: [
      { q: 'An object 1.5 cm tall produces an image 6.0 cm tall.', lines: ['magnification = 6.0 ÷ 1.5 = [[4.0|4]]'], calc: ['6.0/1.5'], why: 'Magnification = image height ÷ object height.' },
      { q: 'A magnification of 3.0 is produced for an object 4.0 mm tall.', lines: ['image height = 3.0 × 4.0 = [[12]] mm'], calc: ['3.0*4.0'], why: 'Image height = magnification × object height.' },
      { q: 'A lens makes an image 2.4 cm tall with a magnification of 6.0.', lines: ['object height = 2.4 ÷ 6.0 = [[0.40|0.4]] cm'], calc: ['2.4/6.0'], why: 'Object height = image height ÷ magnification.' },
      { q: 'A convex lens.', lines: ['Parallel rays are brought together at the [[principal focus]]. A [[real]] image can be projected on to a screen.'], calc: [], why: 'A virtual image cannot be projected.' }
    ]
  });
})();
