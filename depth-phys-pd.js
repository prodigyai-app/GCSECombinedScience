/* Potential dividers and sensing circuits (phys-el11, Lesson 5 of Electricity): worked examples, fill-the-gaps and exam questions.
   Every number is recomputed by tools/verify-depth.cjs. */
(() => {
  const { v, fr, res } = LAB.W, add = GcseDepth.add;
  const S = (t, why, lines) => [t, why, lines];
  const G = (q, lines, calc, why) => ({ q, lines, calc: calc || [], why });
  const P = (q, m, ms, x) => Object.assign({ q, m, lines: Math.max(2, m), ms: ms.map(t => ['1', t]) }, x || {});
  const C = (a, unit, calc, tol = 0.02) => ({ ans: { a, unit, tol }, calc });
  const Q = (stem, parts) => ({ stem: stem ? `<p>${stem}</p>` : '', parts });

  add('phys-el11', {
    ex: [
      ['When does the alarm sound?', 'A thermistor is connected in series with a 2.0 kΩ fixed resistor and a 12 V supply. An alarm sounds when the p.d. across the fixed resistor reaches 8.0 V. Calculate the resistance of the thermistor at that moment.', [
        S('P.d. across the thermistor', 'The two p.d.s add up to the supply p.d.', ['12 − 8.0 = 4.0 V']),
        S('Current', 'Use the fixed resistor, where both V and R are known; same current in series.', [`${v('I')} = ${fr('8.0', '2000')} = 0.0040 A`]),
        S('Thermistor resistance', '', [`${v('R')} = ${fr('4.0', '0.0040')} = ${res('1000 Ω')}`]),
        S('What it means', 'Hotter means lower thermistor resistance.', ['As it gets hotter the thermistor\'s resistance falls; once it is 1.0 kΩ or less, the fixed resistor has at least 8.0 V and the alarm sounds.'])
      ], { chk: [['12-8.0', 4], ['8.0/2000', 0.004], ['4.0/0.0040', 1000]] }],
      ['Designing a night light', 'An LDR and a fixed resistor form a potential divider. A lamp should switch on when it gets dark, and the switching circuit turns the lamp on when its input p.d. rises. Explain where the input should be connected.', [
        S('What the LDR does', '', ['In the dark the resistance of the LDR increases.']),
        S('How the share changes', 'The bigger resistance gets the bigger share.', ['So the p.d. across the LDR increases and the p.d. across the fixed resistor decreases.']),
        S('Choose the output', '', [res('Connect the switching circuit across the LDR'), 'Its p.d. rises in the dark, so the lamp comes on.'])
      ], { desc: true }]
    ],
    gaps: [
      G('A 6.0 V supply is connected to a 1.0 kΩ and a 2.0 kΩ resistor in series.', ['total resistance = 1000 + 2000 = [[3000]] Ω', 'current = 6.0 ÷ 3000 = [[0.0020|0.002]] A', 'p.d. across the 2.0 kΩ resistor = 0.0020 × 2000 = [[4.0|4]] V'], ['1000+2000', '6.0/3000', '0.0020*2000'], 'The two p.d.s add up to 6.0 V.'),
      G('Sharing the p.d.', ['Two equal resistors in series each have [[half|one half|50%]] of the supply p.d. across them. The resistor with the larger resistance has the [[larger|bigger|greater]] p.d.'], [], 'The current is the same, so V = IR is bigger where R is bigger.'),
      G('An LDR is in series with a fixed resistor.', ['When the light gets brighter, the resistance of the LDR [[decreases|falls]], so the p.d. across the LDR [[decreases|falls]] and the p.d. across the fixed resistor [[increases|rises]].'], [], 'The two p.d.s always add up to the supply p.d.'),
      G('A 12 V supply; the p.d. across a 3.0 kΩ resistor is 9.0 V.', ['p.d. across the other resistor = 12 − 9.0 = [[3.0|3]] V', 'current = 9.0 ÷ 3000 = [[0.0030|0.003]] A', 'resistance of the other resistor = 3.0 ÷ 0.0030 = [[1000]] Ω'], ['12-9.0', '9.0/3000', '3.0/0.0030'], 'Find the current from the resistor you know everything about.')
    ],
    exam: [
      Q('A 6.0 V battery is connected in series with a 1.2 kΩ resistor and a 4.8 kΩ resistor. A voltmeter is connected across the 4.8 kΩ resistor.', [
        P('Calculate the combined resistance of the two resistors in ohms.', 1, ['1200 + 4800 = 6000 Ω'], C(6000, 'Ω', '1200+4800')),
        P('Calculate the current through the battery.', 2, ['I = V ÷ R = 6.0 ÷ 6000', '= 0.0010 A'], C(0.001, 'A', '6.0/6000')),
        P('Calculate the reading on the voltmeter.', 2, ['V = I R = 0.0010 × 4800', '= 4.8 V'], C(4.8, 'V', '0.001*4800')),
        P('The 1.2 kΩ resistor is replaced with one of a larger resistance. Explain what happens to the reading on the voltmeter.', 2, ['the total resistance increases, so the current decreases', 'so the p.d. across the 4.8 kΩ resistor (= I × 4800) decreases / the larger resistor takes a bigger share of the 6.0 V'])
      ]),
      Q('A thermistor is connected in series with a 5.0 kΩ fixed resistor and a 9.0 V supply. A fan switches on when the p.d. across the fixed resistor reaches 6.0 V.', [
        P('Describe how the resistance of a thermistor changes as its temperature increases.', 1, ['the resistance decreases']),
        P('Explain why the fan switches on when the room becomes warmer.', 3, ['the resistance of the thermistor decreases', 'so the thermistor takes a smaller share of the 9.0 V (the current increases)', 'so the p.d. across the fixed resistor increases until it reaches 6.0 V']),
        P('Calculate the resistance of the thermistor when the fan switches on.', 3, ['p.d. across thermistor = 9.0 − 6.0 = 3.0 V', 'I = 6.0 ÷ 5000 = 0.0012 A', 'R = 3.0 ÷ 0.0012 = 2500 Ω'], C(2500, 'Ω', '3.0/(6.0/5000)'))
      ])
    ]
  });
})();
