/* Fill-the-gaps for Particle model (phys-pm1–phys-pm6) and Atomic structure (phys-at1–phys-at9). Lf = 334 000 J/kg, Lv = 2 260 000 J/kg, c(water) = 4200 J/kg °C. */
(() => {
  const add = GcseDepth.add, G = (q, lines, calc, why, higher) => Object.assign({ q, lines, calc: calc || [], why }, higher ? { higher: true } : {});

  add('phys-pm1', { gaps: [
    G('A block has a mass of 0.60 kg and a volume of 0.00020 m³.', ['ρ = m ÷ V = 0.60 ÷ 0.00020 = [[3000]] kg/m³'], ['0.60/0.00020'], 'Density = mass ÷ volume.'),
    G('The density of water is 1000 kg/m³.', ['mass of 0.25 m³ = ρV = 1000 × 0.25 = [[250]] kg'], ['1000*0.25'], 'm = ρV.'),
    G('A stone of mass 150 g displaces 60 cm³ of water.', ['ρ = 150 ÷ 60 = [[2.5]] g/cm³'], ['150/60'], 'Its volume equals the water it displaces.'),
    G('States of matter.', ['In a solid the particles are held in a [[regular]] pattern. In a gas they are [[far apart|widely spaced]] and move at [[random]].'], [], 'Gases have the lowest density.')
  ] });
  add('phys-pm2', { gaps: [
    G('Internal energy.', ['Internal energy is the total [[kinetic]] energy and [[potential]] energy of all the particles in a system.'], [], 'Heating increases the internal energy.'),
    G('A substance is melting.', ['Its temperature stays [[constant|the same]] because the energy supplied increases the [[potential]] energy of the particles.'], [], 'The bonds are being broken.'),
    G('Changes of state.', ['A change of state is a [[physical]] change. The [[mass]] is conserved and the substance recovers its properties if the change is reversed.'], [], 'No new substance is formed.'),
    G('Heating a gas.', ['Heating a gas raises the average [[kinetic]] energy of its particles, so its [[temperature]] rises.'], [], 'Temperature is related to the average kinetic energy.')
  ] });
  add('phys-pm3', { gaps: [
    G('Melting 0.50 kg of ice (L<sub>f</sub> = 334 000 J/kg).', ['E = mL = 0.50 × 334 000 = [[167000]] J'], ['0.50*334000'], 'E = mL.'),
    G('Boiling 0.20 kg of water at 100 °C (L<sub>v</sub> = 2 260 000 J/kg).', ['E = mL = 0.20 × 2 260 000 = [[452000]] J'], ['0.20*2260000'], 'E = mL.'),
    G('680 000 J boils some water (L<sub>v</sub> = 2 260 000 J/kg).', ['m = E ÷ L = 680 000 ÷ 2 260 000 = [[0.30]] kg'], ['680000/2260000'], 'Rearrange E = mL.'),
    G('Latent heat.', ['Specific latent heat of [[fusion]] is for melting or freezing. Specific latent heat of [[vaporisation|vaporization]] is for boiling or condensing.'], [], 'The temperature does not change during a change of state.')
  ] });
  add('phys-pm4', { gaps: [
    G('Gas pressure.', ['Gas pressure is caused by particles colliding with the [[walls|container]]. Heating a gas at constant volume [[increases|raises]] the pressure.'], [], 'The particles move faster and hit the walls harder and more often.'),
    G('Collisions and pressure.', ['If the particles hit the walls more [[often|frequently]] and with more [[force]], the pressure increases.'], [], 'Both happen when a gas is heated at constant volume.'),
    G('Temperature of a gas.', ['The temperature of a gas is related to the average [[kinetic]] energy of its particles.'], [], 'Faster particles mean a higher temperature.'),
    G('Direction of gas pressure.', ['The force from gas pressure acts at [[right angles|90°|90 degrees]] to the walls of the container.'], [], 'The pressure acts on every surface.')
  ] });
  add('phys-pm5', { gaps: [
    G('A gas has a volume of 4.0 m³ at 100 kPa. It is compressed to 1.0 m³ at constant temperature.', ['p<sub>2</sub> = p<sub>1</sub>V<sub>1</sub> ÷ V<sub>2</sub> = 100 × 4.0 ÷ 1.0 = [[400]] kPa'], ['100*4.0/1.0'], 'pV = constant.'),
    G('240 cm³ of gas at 100 kPa is compressed until its pressure is 150 kPa.', ['V<sub>2</sub> = 100 × 240 ÷ 150 = [[160]] cm³'], ['100*240/150'], 'The volume falls as the pressure rises.'),
    G('A bubble of volume 2.0 cm³ at 300 kPa rises to where the pressure is 100 kPa.', ['V<sub>2</sub> = 300 × 2.0 ÷ 100 = [[6.0|6]] cm³'], ['300*2.0/100'], 'Assume the temperature is constant.'),
    G('Halving the volume of a gas at constant temperature.', ['The pressure [[doubles|is doubled|doubled]].'], [], 'Pressure is inversely proportional to volume.')
  ] });
  add('phys-pm6', { gaps: [
    G('A block of mass 2.7 kg has a volume of 0.0010 m³.', ['ρ = 2.7 ÷ 0.0010 = [[2700]] kg/m³'], ['2.7/0.0010'], 'ρ = m ÷ V.'),
    G('0.30 kg of water is heated by 50 °C (c = 4200 J/kg °C).', ['ΔE = 0.30 × 4200 × 50 = [[63000]] J'], ['0.30*4200*50'], 'ΔE = mcΔθ.'),
    G('Melting 2.0 kg of ice (L<sub>f</sub> = 334 000 J/kg).', ['E = 2.0 × 334 000 = [[668000]] J'], ['2.0*334000'], 'E = mL.'),
    G('A gas at 500 kPa and 2.0 m³ expands to 5.0 m³ at constant temperature.', ['p<sub>2</sub> = 500 × 2.0 ÷ 5.0 = [[200]] kPa'], ['500*2.0/5.0'], 'pV = constant.')
  ] });

  add('phys-at1', { gaps: [
    G('Carbon-14 has 6 protons.', ['neutrons = 14 − 6 = [[8]]', 'electrons in the neutral atom = [[6]]'], ['14-6', '6'], 'Mass number − atomic number = neutrons.'),
    G('Isotopes.', ['Isotopes are atoms of the same element with the same number of [[protons]] but different numbers of [[neutrons]].'], [], 'Their chemical behaviour is the same.'),
    G('Size of an atom.', ['An atom has a radius of about 1 × 10⁻¹⁰ m and its nucleus about 1 × 10⁻¹⁵ m, so the atom is [[100000|1e5]] times wider.'], ['1e-10/1e-15'], 'Most of an atom is empty space.'),
    G('Uranium-238 has 92 protons.', ['mass number = [[238]]', 'neutrons = 238 − 92 = [[146]]'], ['238', '238-92'], 'The mass number is the number of protons plus neutrons.')
  ] });
  add('phys-at2', { gaps: [
    G('The plum pudding model.', ['It showed an atom as a ball of [[positive]] charge with [[electrons]] embedded in it.'], [], 'Thomson’s model before the nucleus was discovered.'),
    G('Alpha scattering.', ['Most alpha particles passed [[straight through|through]] the gold foil, showing that an atom is mostly [[empty space]].'], [], 'Rutherford’s experiment.'),
    G('Large deflections.', ['A few alpha particles were deflected through large angles. This showed that the nucleus is [[positively|positive]] charged and very [[small]].'], [], 'Like charges repel.'),
    G('Later models.', ['Bohr suggested that electrons orbit the nucleus at [[specific|fixed|set]] distances. Chadwick discovered the [[neutron]].'], [], 'The nuclear model was refined by experiments.')
  ] });
  add('phys-at3', { gaps: [
    G('Types of radiation.', ['An alpha particle is a [[helium]] nucleus, a beta particle is a fast [[electron]] and gamma is [[electromagnetic]] radiation.'], [], 'Alpha: 2 protons and 2 neutrons.'),
    G('Penetration.', ['Alpha is stopped by [[paper]], beta by thin [[aluminium]] and gamma is reduced by thick [[lead]].'], [], 'Alpha is the least penetrating.'),
    G('Ionising power.', ['Alpha is the [[most|strongest|highest]] ionising and gamma is the [[least|weakest|lowest]] ionising.'], [], 'The opposite order to penetration.'),
    G('Activity.', ['Activity is measured in [[becquerel|becquerels|Bq]] and is the number of [[decays|nuclei decaying|disintegrations]] per second.'], [], '1 Bq is 1 decay per second.')
  ] });
  add('phys-at4', { gaps: [
    G('Uranium-238 (atomic number 92) emits an alpha particle.', ['new mass number = 238 − 4 = [[234]]', 'new atomic number = 92 − 2 = [[90]]'], ['238-4', '92-2'], 'An alpha particle has mass number 4 and atomic number 2.'),
    G('Carbon-14 (mass number 14, atomic number 6) emits a beta particle.', ['new mass number = [[14]]', 'new atomic number = 6 + 1 = [[7]]'], ['14', '6+1'], 'A neutron changes into a proton.'),
    G('Gamma emission.', ['Gamma emission changes neither the mass number nor the [[atomic|proton]] number of the nucleus.'], [], 'The nucleus just loses energy.'),
    G('Radon-222 (atomic number 86) emits an alpha particle.', ['new mass number = 222 − 4 = [[218]]', 'new atomic number = 86 − 2 = [[84]]'], ['222-4', '86-2'], 'Alpha emission reduces the mass number by 4.')
  ] });
  add('phys-at5', { gaps: [
    G('A source has an activity of 800 Bq and a half-life of 6.0 hours.', ['number of half-lives in 18 hours = 18 ÷ 6.0 = [[3]]', 'activity after 18 hours = 800 ÷ 2³ = [[100]] Bq'], ['18/6.0', '800/2**3'], 'Halve once for each half-life.'),
    G('64 g of an isotope has a half-life of 10 days.', ['mass left after 30 days = 64 ÷ 2³ = [[8]] g'], ['64/2**3'], '30 days is three half-lives.'),
    G('The activity falls from 480 Bq to 60 Bq in 21 minutes.', ['480 → 240 → 120 → 60, so there are [[3]] half-lives', 'half-life = 21 ÷ 3 = [[7]] minutes'], ['3', '21/3'], 'Count the halvings.'),
    G('Half-life.', ['The half-life is the time for the number of [[nuclei|radioactive nuclei|atoms]] to halve, or for the [[activity|count rate]] to fall to [[half|50%]].'], [], 'It is the same for every sample of that isotope.')
  ] });
  add('phys-at6', { gaps: [
    G('Contamination.', ['Contamination is the unwanted presence of [[radioactive]] atoms on or inside another material.'], [], 'The danger continues as long as the atoms decay.'),
    G('Irradiation.', ['An irradiated object does not become [[radioactive]].'], [], 'Irradiation is exposure to radiation from outside.'),
    G('Background radiation.', ['Natural sources of background radiation include [[radon]] gas, rocks and [[cosmic rays|cosmic radiation]].'], [], 'Human sources include medical X-rays.'),
    G('Reducing the dose.', ['Workers reduce their dose by limiting the [[time]] of exposure, increasing the [[distance]] from the source and using [[shielding|lead]].'], [], 'Handle sources with tongs.')
  ] });
  add('phys-at7', { gaps: [
    G('Medical tracers.', ['A tracer should emit [[gamma]] radiation so it can be detected outside the body, and have a short [[half-life]].'], [], 'Alpha would be absorbed inside the body.'),
    G('Radiotherapy.', ['Radiotherapy uses [[gamma|high-energy]] radiation to kill [[cancer|tumour]] cells. Beams from several directions reduce damage to [[healthy]] tissue.'], [], 'The tumour receives a high dose.'),
    G('Thickness gauges.', ['A paper-thickness monitor uses a [[beta]] source because alpha is absorbed by the paper and gamma [[passes through|is not absorbed by]] it.'], [], 'The detected count rate changes with thickness.'),
    G('Sterilising.', ['Gamma radiation sterilises medical equipment by killing [[bacteria|microbes|germs]].'], [], 'The equipment does not become radioactive.')
  ] });
  add('phys-at8', { gaps: [
    G('Fission.', ['In fission a [[neutron]] is absorbed by a large nucleus such as uranium-235, which splits into [[two]] smaller nuclei, releasing more neutrons and energy.'], [], 'The released neutrons can cause further fission.'),
    G('Chain reaction.', ['In a chain reaction the neutrons released cause further [[fission|splitting]]. In a reactor [[control rods|boron rods]] absorb neutrons to control the rate.'], [], 'An uncontrolled chain reaction is a nuclear explosion.'),
    G('Fusion.', ['In fusion two light nuclei join to form a [[heavier|larger]] nucleus. It needs very high [[temperature]] and pressure.'], [], 'Fusion releases energy in stars.'),
    G('Where energy is released.', ['Fusion powers the [[Sun|stars]]. Fission is used in nuclear [[reactors|power stations|bombs|weapons]].'], [], 'Both release energy from the nucleus.')
  ] });
  add('phys-at9', { gaps: [
    G('A nucleus has 27 protons and 33 neutrons.', ['mass number = 27 + 33 = [[60]]'], ['27+33'], 'Mass number = protons + neutrons.'),
    G('A sample has a half-life of 5 minutes and an initial count rate of 640 counts/min.', ['After 20 minutes: 640 ÷ 2⁴ = [[40]] counts/min'], ['640/2**4'], '20 minutes is four half-lives.'),
    G('Uranium-235 (atomic number 92) emits an alpha particle.', ['new mass number = [[231]]', 'new atomic number = [[90]]'], ['235-4', '92-2'], 'Mass number − 4; atomic number − 2.'),
    G('Penetration.', ['Alpha is stopped by paper, [[beta]] by a few mm of aluminium and [[gamma]] only by thick lead.'], [], 'Match each to its range.')
  ] });
})();
