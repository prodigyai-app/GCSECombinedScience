/* Exam-style questions for Waves (phys-wa1–phys-wa10), Magnetism (phys-mg1–phys-mg7) and Space (phys-sx1–phys-sx4). Each lesson to at least 12 marks;
   phys-wa10 and phys-mg7 get a 6-mark extended response. Speed of light 3.0e8 m/s, speed of sound in air 330 m/s. */
(() => {
  const add = GcseDepth.add;
  const P = (q, m, ms, x) => Object.assign({ q, m, lines: Math.max(2, m), ms: ms.map(t => ['1', t]) }, x || {});
  const C = (a, unit, calc, tol = 0.02) => ({ ans: { a, unit, tol }, calc });
  const H = o => Object.assign(o, { ht: true });
  const Q = (stem, parts) => ({ stem: stem ? `<p>${stem}</p>` : '', parts });
  const L6 = (a, b, c) => [['Level 3 (5–6)', a], ['Level 2 (3–4)', b], ['Level 1 (1–2)', c], ['0', 'No relevant content.']];

  add('phys-wa1', { exam: [Q('A student makes waves on a long slinky spring.', [
    P('Describe how she should move the end of the slinky to make a longitudinal wave.', 1, ['push and pull the end backwards and forwards along the length of the slinky']),
    P('The waves have a frequency of 4.0 Hz. Calculate the period.', 2, ['T = 1 ÷ f = 1 ÷ 4.0', '= 0.25 s'], C(0.25, 's', '1/4.0')),
    P('Give one example of a transverse wave and one example of a longitudinal wave.', 2, ['transverse: light / any electromagnetic wave / ripples on water', 'longitudinal: sound'])
  ])] });
  add('phys-wa2', { exam: [Q('A bat emits ultrasound with a frequency of 40 kHz. The speed of sound in air is 330 m/s.', [
    P('Calculate the wavelength of the ultrasound.', 2, ['λ = v ÷ f = 330 ÷ 40 000', '= 0.00825 m (8.3 mm)'], C(0.00825, 'm', '330/40000'))
  ])] });
  add('phys-wa3', { exam: [Q('A ray of light travels from air into a rectangular glass block at an angle of incidence of 40°.', [
    P('State what happens to the speed of the light as it enters the glass.', 1, ['it decreases']),
    P('Describe the direction of the ray inside the block.', 1, ['it bends towards the normal']),
    P('The ray leaves through the opposite, parallel side of the block. Describe its direction after it leaves.', 2, ['it bends away from the normal', 'it is parallel to its original direction (leaves at 40° to the normal)'])
  ])] });
  add('phys-wa4', { exam: [Q('An earthquake produces P-waves and S-waves that travel through the Earth.', [
    P('Explain how seismic waves provide evidence that part of the Earth’s core is liquid.', 3, ['S-waves are transverse', 'S-waves cannot travel through a liquid', 'S-waves are not detected on the opposite side of the Earth (there is an S-wave shadow zone)'])
  ])] });
  add('phys-wa5', { exam: [Q('All electromagnetic waves travel at 3.0 × 10⁸ m/s in a vacuum.', [
    P('Calculate the frequency of a radio wave with a wavelength of 1500 m.', 2, ['f = v ÷ λ = 3.0 × 10⁸ ÷ 1500', '= 2.0 × 10⁵ Hz'], C(2e5, 'Hz', '3.0e8/1500')),
    P('Name the type of electromagnetic wave with wavelengths between those of visible light and microwaves.', 1, ['infrared']),
    P('Electromagnetic waves transfer energy from a source to an absorber. Give one example, naming the source and the absorber.', 2, ['a suitable source, e.g. the Sun / a microwave oven / a radio transmitter', 'a matching absorber, e.g. skin / food / an aerial'])
  ])] });
  add('phys-wa6', { exam: [Q('Different parts of the electromagnetic spectrum have different uses and hazards.', [
    P('Explain how an infrared camera can find a person in the dark.', 2, ['all objects emit infrared radiation; warmer objects emit more', 'the person is warmer than the surroundings, so shows up brightly on the camera']),
    P('Explain why ultraviolet is more hazardous than visible light.', 2, ['ultraviolet has a higher frequency, so it carries more energy', 'it can damage skin cells / cause skin cancer (and eye damage)']),
    P('Give one use of gamma rays in a hospital.', 1, ['sterilising equipment / radiotherapy / medical tracers']),
    P('Name the unit used for radiation dose.', 1, ['sievert (Sv)'])
  ])] });
  add('phys-wa7', { exam: [Q('A projector uses a convex lens to form an image of a small slide on a distant screen.', [
    P('Is the image real or virtual? Give a reason.', 2, ['real', 'the light rays actually meet, so the image can be formed on the screen']),
    P('A picture 0.024 m tall on the slide forms an image 1.2 m tall on the screen. Calculate the magnification.', 2, ['magnification = 1.2 ÷ 0.024', '= 50'], C(50, '', '1.2/0.024')),
    P('State the unit of magnification.', 1, ['it has no unit'])
  ])] });
  add('phys-wa8', { exam: [Q('A stage light shines white light through a green filter onto an actor wearing a red shirt and white trousers.', [
    P('What colour is the light that leaves the filter?', 1, ['green']),
    P('What colour does the red shirt appear? Explain your answer.', 2, ['black', 'the shirt absorbs green light and only reflects red, so no light is reflected']),
    P('What colour do the white trousers appear?', 1, ['green']),
    P('Describe the difference between specular reflection and diffuse reflection.', 2, ['specular: from a smooth surface, in a single direction (a clear image)', 'diffuse: from a rough surface, scattered in many directions'])
  ])] });
  add('phys-wa9', { exam: [Q('A hot iron is unplugged and left to cool.', [
    P('Explain why the iron emits less infrared radiation as it cools.', 1, ['the intensity of radiation emitted decreases as the temperature decreases']),
    P('Describe how the radiation emitted by an object changes as its temperature increases.', 2, ['more radiation is emitted at every wavelength (greater intensity)', 'the peak moves to shorter wavelengths']),
    P('What is meant by a perfect black body?', 1, ['an object that absorbs all the radiation that falls on it (it is also the best possible emitter)'])
  ])] });
  add('phys-wa10', { exam: [Q('A student uses a Leslie cube (a hollow metal cube with four different outer surfaces) filled with hot water.', [
    P('Describe how the student could investigate how the type of surface affects the amount of infrared radiation emitted.', 6, [], {
      lines: 10,
      lor: L6('A clear, logically ordered method with control variables and an infrared detector at a fixed distance from each face, readings recorded and compared, and a correct expected conclusion.', 'A method with most steps, including measuring the radiation from each surface, but with some detail missing.', 'Simple statements about using the cube or a thermometer without a clear method.'),
      ind: ['Fill the Leslie cube with hot water from a kettle and place it on a heatproof mat', 'Point an infrared detector at one face from a fixed distance (e.g. 5 cm)', 'Record the reading; repeat for each face, keeping the distance the same', 'Take the readings quickly, so the water temperature is about the same for each face', 'Compare: matt black emits most, shiny silver least', 'Safety: take care with hot water; do not touch the hot faces']
    })
  ])] });

  add('phys-mg1', { exam: [Q('A bar magnet is placed near an iron nail.', [
    P('Explain why the nail is attracted to either pole of the magnet.', 2, ['the nail becomes an induced magnet', 'induced magnets are always attracted to the magnet']),
    P('Describe the difference between a permanent magnet and an induced magnet.', 2, ['a permanent magnet produces its own magnetic field', 'an induced magnet is only magnetic when it is in a magnetic field (it loses most or all of its magnetism when removed)'])
  ])] });
  add('phys-mg2', { exam: [Q('An electromagnet is used in a scrapyard crane.', [
    P('Explain why an electromagnet is used rather than a permanent magnet.', 1, ['it can be switched off to release the scrap']),
    P('Describe the shape of the magnetic field around a long straight wire carrying a current.', 2, ['concentric circles', 'centred on the wire, in a plane at right angles to it']),
    P('Give two factors that affect the strength of the field around the wire.', 2, ['the size of the current', 'the distance from the wire']),
    P('State why the coil of the electromagnet is wound around an iron core.', 1, ['the iron core increases the strength of the magnetic field'])
  ])] });
  add('phys-mg3', { exam: [Q('A wire carrying a current is placed at right angles to a magnetic field.', [
    P('Name the effect that produces a force on the wire.', 1, ['the motor effect']),
    H(P('The wire is 0.050 m long, the current is 4.0 A and the magnetic flux density is 0.30 T. Calculate the force on the wire.', 2, ['F = BIl = 0.30 × 4.0 × 0.050', '= 0.060 N'], C(0.06, 'N', '0.30*4.0*0.050'))),
    P('Give two ways of reversing the direction of the force.', 2, ['reverse the current', 'reverse the magnetic field (swap the poles)']),
    P('Name the rule used to find the direction of the force and state what the thumb represents.', 2, ['Fleming’s left-hand rule', 'the thumb shows the direction of the force (motion)'])
  ])] });
  add('phys-mg4', { exam: [Q('A d.c. electric motor contains a coil that turns in a magnetic field.', [
    P('Give two ways of making the motor spin faster.', 2, ['increase the current (or p.d.)', 'use a stronger magnet / more turns on the coil']),
    P('Explain the purpose of the split-ring commutator.', 2, ['it reverses the current in the coil every half turn', 'so the coil keeps rotating in the same direction'])
  ])] });
  add('phys-mg5', { exam: [Q('A student pushes a bar magnet into a coil connected to a sensitive ammeter.', [
    P('Describe the ammeter reading while the magnet is held still inside the coil.', 1, ['zero']),
    P('Describe the ammeter reading as the magnet is pulled out of the coil.', 1, ['a current in the opposite direction']),
    H(P('Explain why the induced current opposes the movement of the magnet.', 2, ['the induced current produces its own magnetic field', 'which opposes the change that induced it (the movement of the magnet)']))
  ])] });
  add('phys-mg6', { exam: [Q('A transformer has 600 turns on its primary coil and 30 turns on its secondary coil. The primary coil is connected to a 230 V a.c. supply.', [
    H(P('Calculate the p.d. across the secondary coil.', 2, ['V<sub>s</sub> = 230 × 30 ÷ 600', '= 11.5 V'], C(11.5, 'V', '230*30/600'))),
    P('Is this a step-up or a step-down transformer?', 1, ['step-down']),
    P('Explain why the core of the transformer is made of iron.', 2, ['iron is easily magnetised', 'it carries the changing magnetic field from the primary coil to the secondary coil'])
  ])] });
  add('phys-mg7', { exam: [Q('A bicycle has a small alternator driven by the wheel. It lights the bicycle’s lamp.', [
    P('Explain how the alternator produces an alternating current and how its output could be increased.', 6, [], {
      lines: 10,
      lor: L6('A clear explanation of how a p.d. is induced by relative motion between the coil and the field, why the current alternates, the role of slip rings, and at least two ways to increase the output.', 'Induction explained with some detail, and at least one way to increase the output.', 'Simple statements, such as the magnet turning or the wheel making electricity.'),
      ind: ['A coil and a magnet rotate relative to each other (the wheel turns the magnet or coil)', 'The coil cuts the magnetic field lines (the field through the coil changes), inducing a p.d.', 'The circuit is complete, so an induced current flows through the lamp', 'Every half turn the direction of motion through the field reverses, so the p.d. and current alternate', 'Slip rings and brushes connect a rotating coil to the external circuit', 'Output increases with faster rotation, a stronger magnet, more turns on the coil']
    })
  ])] });

  add('phys-sx1', { exam: [Q('Our solar system contains one star, the Sun.', [
    P('Name the galaxy that contains our solar system.', 1, ['the Milky Way']),
    P('Name the natural satellites that orbit some of the planets.', 1, ['moons']),
    P('A star much more massive than the Sun follows a different life cycle. Name the stage that comes after its main sequence.', 1, ['red super giant'])
  ])] });
  add('phys-sx2', { exam: [Q('The Moon orbits the Earth in an almost circular path at a constant speed.', [
    P('Name the force that keeps the Moon in orbit and give its direction.', 2, ['gravity (gravitational attraction of the Earth)', 'towards the centre of the Earth']),
    P('Explain why the Moon’s velocity is changing even though its speed is constant.', 2, ['velocity is a vector (has a direction)', 'the direction of motion is continually changing, so the velocity changes'])
  ])] });
  add('phys-sx3', { exam: [Q('Light from a distant galaxy is observed to be red-shifted.', [
    P('What does red-shift tell us about the motion of the galaxy?', 1, ['it is moving away from us']),
    P('Galaxy A is further away than galaxy B. Compare their red-shifts.', 1, ['galaxy A has a larger red-shift']),
    P('Explain how red-shift provides evidence for the Big Bang theory.', 2, ['more distant galaxies are moving away faster, so the universe is expanding', 'tracing this back suggests the universe began from a very small, hot, dense region'])
  ])] });
  add('phys-sx4', { exam: [Q('Stars form from clouds of dust and gas.', [
    P('Name a cloud of dust and gas in space from which stars form.', 1, ['nebula']),
    P('Explain how elements heavier than iron are formed and spread through the universe.', 2, ['they are formed in a supernova', 'the explosion distributes them throughout the universe']),
    P('Name the two possible objects left after a supernova.', 2, ['neutron star', 'black hole']),
    P('Give one difference between a planet and a moon.', 1, ['a planet orbits a star; a moon orbits a planet'])
  ])] });
})();
