/* Fill-the-gaps for Waves (phys-wa3, phys-wa5, phys-wa6, phys-wa8–phys-wa10), Magnetism (phys-mg1–phys-mg7) and Space (phys-sx1–phys-sx4). Speed of light 3.0e8 m/s. */
(() => {
  const add = GcseDepth.add, G = (q, lines, calc, why, higher) => Object.assign({ q, lines, calc: calc || [], why }, higher ? { higher: true } : {});

  add('phys-wa3', { gaps: [
    G('Reflection.', ['The angle of incidence equals the angle of [[reflection]]. Both are measured from the [[normal]].'], [], 'The law of reflection.'),
    G('Refraction.', ['A ray passes from air into glass. It bends [[towards]] the normal because it [[slows|slows down]].'], [], 'Light travels more slowly in glass.'),
    G('Wavelength in glass.', ['When light enters glass its wavelength [[decreases|gets shorter|shortens]] but its [[frequency]] stays the same.'], [], 'v = fλ with v smaller and f fixed.'),
    G('A ray strikes a plane mirror with an angle of incidence of 35°.', ['angle of reflection = [[35]]°', 'angle between the incident and reflected rays = 2 × 35 = [[70]]°'], ['35', '2*35'], 'Both angles are measured from the normal.')
  ] });
  add('phys-wa5', { gaps: [
    G('Order of the spectrum.', ['In order of increasing frequency: radio, [[microwave|microwaves]], infrared, visible, [[ultraviolet|UV]], X-ray, [[gamma]].'], [], 'Wavelength decreases in the same order.'),
    G('Properties.', ['All electromagnetic waves are [[transverse]] and travel at [[3.0e8|3e8|300000000]] m/s in a vacuum.'], ['3.0e8'], 'The speed is the same for all of them.'),
    G('Gamma rays.', ['Gamma rays have the [[highest]] frequency and the [[shortest]] wavelength.'], [], 'They carry the most energy.'),
    G('A wave of frequency 1.0 × 10⁹ Hz travels at 3.0 × 10⁸ m/s.', ['λ = v ÷ f = (3.0 × 10⁸) ÷ (1.0 × 10⁹) = [[0.30|0.3]] m'], ['3.0e8/1.0e9'], 'This is a microwave.')
  ] });
  add('phys-wa6', { gaps: [
    G('Uses.', ['Radio waves are used for [[communication|communications|broadcasting|television]] and X-rays for medical [[imaging]].'], [], 'Different frequencies have different uses.'),
    G('Dangers.', ['Ultraviolet radiation can cause skin [[cancer]]. X-rays and gamma rays are [[ionising]] and can damage [[cells|DNA]].'], [], 'Ionising radiation can cause mutations.'),
    G('Energy of the waves.', ['Higher-frequency radiation carries [[more]] energy, so gamma rays are more [[dangerous|hazardous|harmful]] than radio waves.'], [], 'Frequency and energy are related.'),
    G('Dose.', ['Radiation dose is measured in [[sieverts|sievert|Sv]].'], [], 'It measures the risk of harm.')
  ] });
  add('phys-wa8', { gaps: [
    G('A red object in white light.', ['It [[reflects]] red light and [[absorbs]] the other colours.'], [], 'The colour we see is the colour reflected.'),
    G('Filters.', ['A blue filter transmits [[blue]] light and absorbs the other colours.'], [], 'Other colours are absorbed.'),
    G('White light.', ['White light is a mixture of [[all|many]] colours. A prism splits it by [[refraction|dispersion]].'], [], 'Different colours refract by different amounts.'),
    G('Reflection from surfaces.', ['A smooth surface gives [[specular]] reflection and a clear image. A rough surface scatters light in [[many|all]] directions.'], [], 'Diffuse reflection.')
  ] });
  add('phys-wa9', { gaps: [
    G('Emission.', ['All objects emit [[infrared]] radiation. The hotter the object, the [[more]] radiation it emits each second.'], [], 'The intensity rises with temperature.'),
    G('A perfect black body.', ['It is a good [[absorber]] and a good [[emitter]] of radiation and does not reflect or transmit any.'], [], 'Black surfaces absorb and emit best.'),
    G('Peak wavelength.', ['As the temperature of an object increases, the peak wavelength of the radiation it emits gets [[shorter]].'], [], 'Hotter objects glow brighter and bluer.'),
    G('The Earth’s temperature.', ['The Earth stays at a constant temperature when the radiation it [[absorbs]] equals the radiation it [[emits|radiates]].'], [], 'Changing either changes the temperature.')
  ] });
  add('phys-wa10', { gaps: [
    G('A wave has a frequency of 1500 Hz and a wavelength of 0.20 m.', ['v = fλ = 1500 × 0.20 = [[300]] m/s'], ['1500*0.20'], 'v = fλ.'),
    G('A wave has a frequency of 20 Hz.', ['T = 1 ÷ f = 1 ÷ 20 = [[0.050|0.05]] s'], ['1/20'], 'T = 1 ÷ f.'),
    G('A lens makes an image 12 cm tall of an object 3.0 cm tall.', ['magnification = 12 ÷ 3.0 = [[4.0|4]]'], ['12/3.0'], 'Magnification has no unit.'),
    G('Types of wave.', ['Sound waves are [[longitudinal]] and light waves are [[transverse]].'], [], 'Direction of the oscillations compared with the energy transfer.')
  ] });

  add('phys-mg1', { gaps: [
    G('Magnetic poles.', ['Like poles [[repel]] and unlike poles [[attract]]. Field lines run from [[north]] to south outside the magnet.'], [], 'The field is strongest at the poles.'),
    G('Induced magnets.', ['An induced magnet is only magnetic while it is in a [[magnetic field]]. It is always [[attracted]] to the magnet.'], [], 'Unmagnetised iron becomes an induced magnet.'),
    G('Magnetic materials.', ['Iron, [[cobalt]] and nickel are magnetic materials.'], [], 'Steel contains iron.'),
    G('Plotting a field.', ['A plotting [[compass]] points along the direction of the magnetic field at that point.'], [], 'It points towards the south pole of the magnet.')
  ] });
  add('phys-mg2', { gaps: [
    G('A current-carrying wire.', ['A current in a wire creates a [[magnetic field]] around it. The field is stronger when the current is [[larger|greater|bigger|higher]].'], [], 'It is also stronger close to the wire.'),
    G('A solenoid.', ['The field of a solenoid is like that of a [[bar magnet]]. An iron [[core]] makes it stronger.'], [], 'The field inside is strong and uniform.'),
    G('Strengthening an electromagnet.', ['Increasing the number of turns of the coil [[increases]] the strength of the magnetic field.'], [], 'So does a larger current.'),
    G('Switching.', ['An electromagnet can be switched [[on and off|off and on]] by switching the current.'], [], 'This makes it useful for lifting scrap metal.')
  ] });
  add('phys-mg3', { gaps: [
    G('A 0.20 m wire carries 5.0 A in a magnetic field of flux density 0.30 T.', ['F = BIl = 0.30 × 5.0 × 0.20 = [[0.30|0.3]] N'], ['0.30*5.0*0.20'], 'F = BIl.', true),
    G('A 0.50 m wire carries 2.0 A and experiences a force of 0.40 N.', ['B = F ÷ Il = 0.40 ÷ (2.0 × 0.50) = [[0.40|0.4]] T'], ['0.40/(2.0*0.50)'], 'Rearrange F = BIl.', true),
    G('Fleming’s left-hand rule.', ['The thumb shows the [[force|motion|thrust]], the first finger the [[field]] and the second finger the [[current]].'], [], 'Thumb, First, seCond.'),
    G('Reversing the current.', ['Reversing the current reverses the [[force|direction of the force]] on the wire.'], [], 'So does reversing the field.')
  ] });
  add('phys-mg4', { gaps: [
    G('A d.c. motor.', ['The forces on the two sides of the coil act in [[opposite]] directions. The split-ring [[commutator]] reverses the current every half turn.'], [], 'This keeps the coil turning in one direction.'),
    G('Making a motor turn faster.', ['Increase the [[current]], use a [[stronger]] magnet or use more [[turns]].'], [], 'Each increases the force on the coil.'),
    G('A loudspeaker.', ['An [[alternating|a.c.]] current in the coil in the magnetic field makes the cone [[vibrate|move in and out]].'], [], 'The frequency of the sound matches the current.'),
    G('Direction of rotation.', ['Reversing the direction of the current reverses the direction of [[rotation|spin]].'], [], 'The force on each side reverses.')
  ] });
  add('phys-mg5', { gaps: [
    G('Inducing a p.d.', ['A p.d. is induced when a conductor [[cuts|moves through]] magnetic field lines, or when the magnetic field through a coil [[changes]].'], [], 'The induced effect opposes the change.'),
    G('Increasing the induced p.d.', ['Move the magnet [[faster]], use a [[stronger]] magnet or use more [[turns]] on the coil.'], [], 'All of these increase the rate of cutting the field.'),
    G('Generators.', ['An alternator produces [[alternating|a.c.]] current using slip rings. A dynamo produces [[direct|d.c.]] current using a commutator.'], [], 'Both are generators.'),
    G('Energy transfer.', ['A generator transfers [[kinetic|mechanical]] energy to [[electrical]] energy.'], [], 'Something must turn the coil.')
  ] });
  add('phys-mg6', { gaps: [
    G('(Higher) A transformer has 200 turns on the primary coil and 50 on the secondary. The primary p.d. is 240 V.', ['V<sub>s</sub> = V<sub>p</sub> × n<sub>s</sub> ÷ n<sub>p</sub> = 240 × 50 ÷ 200 = [[60]] V'], ['240*50/200'], 'V<sub>p</sub> ÷ V<sub>s</sub> = n<sub>p</sub> ÷ n<sub>s</sub>.', true),
    G('(Higher) A step-up transformer has 100 primary turns and 2300 secondary turns. The primary p.d. is 12 V.', ['V<sub>s</sub> = 12 × 2300 ÷ 100 = [[276]] V'], ['12*2300/100'], 'More secondary turns give a larger p.d.', true),
    G('(Higher) A 100 % efficient transformer has a primary of 230 V and 2.0 A. The secondary p.d. is 23 V.', ['I<sub>s</sub> = V<sub>p</sub>I<sub>p</sub> ÷ V<sub>s</sub> = 230 × 2.0 ÷ 23 = [[20]] A'], ['230*2.0/23'], 'Power in = power out.', true),
    G('Why a.c.?', ['Transformers work only with [[alternating|a.c.]] current because a changing magnetic field is needed to induce a p.d. in the [[secondary]] coil.'], [], 'A steady d.c. gives no change in the field.')
  ] });
  add('phys-mg7', { gaps: [
    G('(Higher) B = 0.50 T, I = 4.0 A and l = 0.25 m.', ['F = BIl = 0.50 × 4.0 × 0.25 = [[0.50|0.5]] N'], ['0.50*4.0*0.25'], 'F = BIl.', true),
    G('(Higher) A transformer has 500 primary turns and 100 secondary turns. The primary p.d. is 230 V.', ['V<sub>s</sub> = 230 × 100 ÷ 500 = [[46]] V'], ['230*100/500'], 'A step-down transformer.', true),
    G('Step-up transformers.', ['A step-up transformer [[increases]] the p.d. and a step-down transformer [[decreases|reduces]] it.'], [], 'The secondary has more or fewer turns.'),
    G('Strengthening a solenoid.', ['The field can be increased by increasing the [[current]], adding more turns and adding an [[iron]] core.'], [], 'All three methods work.')
  ] });

  add('phys-sx1', { gaps: [
    G('Formation of the Sun.', ['The Sun formed from a cloud of [[dust and gas|gas and dust|dust|gas]] pulled together by [[gravity]].'], [], 'Fusion starts when the core is hot and dense enough.'),
    G('A stable star.', ['A star is stable when the outward pressure from [[fusion]] balances the inward force of [[gravity]].'], [], 'The star stays the same size.'),
    G('Life cycles.', ['A star like the Sun becomes a red giant then a white dwarf. A much more massive star ends in a [[supernova]] explosion, leaving a [[neutron star|black hole]].'], [], 'Mass decides the end of a star’s life.'),
    G('Heavy elements.', ['Elements heavier than iron are formed in a [[supernova]].'], [], 'They are then spread through space.')
  ] });
  add('phys-sx2', { gaps: [
    G('Circular orbit.', ['An object in a circular orbit at constant speed has a changing [[velocity]] because its [[direction]] is changing.'], [], 'Velocity is a vector.'),
    G('Force on a planet.', ['The force that keeps a planet in orbit is [[gravity|gravitational force|gravitational attraction]].'], [], 'It acts towards the Sun.'),
    G('Orbital speed.', ['The closer a satellite is to the Earth, the [[faster]] it must travel to stay in orbit.'], [], 'A satellite that speeds up moves into a smaller orbit.'),
    G('Geostationary satellites.', ['A geostationary satellite orbits the Earth once every [[24]] hours.'], ['24'], 'It stays above the same point.')
  ] });
  add('phys-sx3', { gaps: [
    G('Red-shift.', ['Light from distant galaxies is shifted to [[longer|red]] wavelengths. This is called [[red-shift]].'], [], 'The galaxies are moving away.'),
    G('Evidence for expansion.', ['The further away a galaxy is, the [[faster]] it is moving away. This shows the universe is [[expanding]].'], [], 'Space itself is stretching.'),
    G('The Big Bang.', ['The Big Bang theory says the universe began from a very small, [[hot]] and [[dense]] region.'], [], 'It has been expanding ever since.'),
    G('More evidence.', ['Cosmic microwave background radiation is [[microwave]] radiation that is evidence for the [[Big Bang]].'], [], 'It is radiation left over from the early universe.')
  ] });
  add('phys-sx4', { gaps: [
    G('The weight of a 50 kg astronaut on the Moon (g = 1.6 N/kg).', ['W = mg = 50 × 1.6 = [[80]] N'], ['50*1.6'], 'W = mg.'),
    G('Light from the Sun takes 500 s to reach the Earth.', ['distance = 3.0 × 10⁸ × 500 = [[1.5e11|1.5 × 10^11]] m'], ['3.0e8*500'], 'distance = speed × time.'),
    G('Stars.', ['Stars shine by nuclear [[fusion]]. Hydrogen fuses to form [[helium]].'], [], 'Fusion releases energy.'),
    G('Our place in the universe.', ['The Sun is a [[star]] in the [[Milky Way]] galaxy.'], [], 'The Milky Way has billions of stars.')
  ] });
})();
