/* Fill-the-gaps for Energy (phys-en1–phys-en9) and Electricity (phys-el1–phys-el9). g = 9.8 N/kg, c(water) = 4200 J/kg °C. Every number is recomputed by tools/verify-depth.cjs. */
(() => {
  const add = GcseDepth.add, G = (q, lines, calc, why, higher) => Object.assign({ q, lines, calc: calc || [], why }, higher ? { higher: true } : {});

  add('phys-en1', { gaps: [
    G('Name the stores.', ['A stretched spring stores energy in its [[elastic potential|elastic]] store, a moving car in its [[kinetic]] store and a battery in its [[chemical]] store.'], [], 'Energy is stored in kinetic, gravitational potential, elastic potential, chemical, thermal, nuclear and magnetic stores.'),
    G('A ball rolls down a slope.', ['The gravitational potential store [[decreases|falls|goes down]] and the kinetic store [[increases|rises|goes up]].'], [], 'Energy is transferred mechanically from one store to the other.'),
    G('Ways of transferring energy.', ['Energy can be transferred by forces (mechanically), electrically, by [[heating]] and by [[radiation|waves]].'], [], 'These are the four pathways.'),
    G('A closed system.', ['In a closed system the total energy [[stays the same|is conserved|is constant|does not change]].'], [], 'Energy cannot be created or destroyed, only transferred.')
  ] });
  add('phys-en2', { gaps: [
    G('A 1000 kg car travels at 20 m/s.', ['E<sub>k</sub> = ½mv² = ½ × 1000 × 20² = [[200000]] J'], ['0.5*1000*20**2'], 'Square the speed first.'),
    G('A 3.0 kg book is lifted 1.5 m. g = 9.8 N/kg.', ['E<sub>p</sub> = mgh = 3.0 × 9.8 × 1.5 = [[44.1]] J'], ['3.0*9.8*1.5'], 'E<sub>p</sub> = mgh.'),
    G('A 0.20 kg ball is dropped from a height of 4.0 m.', ['E<sub>p</sub> lost = 0.20 × 9.8 × 4.0 = [[7.84]] J', 'v = √(2E<sub>k</sub> ÷ m) = √(2 × 7.84 ÷ 0.20) = [[8.85]] m/s'], ['0.20*9.8*4.0', 'sqrt(2*7.84/0.20)'], 'All the lost gravitational energy becomes kinetic energy.'),
    G('A cyclist doubles her speed.', ['Her kinetic energy becomes [[4|four]] times as large, because E<sub>k</sub> depends on the speed [[squared]].'], ['4'], 'E<sub>k</sub> ∝ v².')
  ] });
  add('phys-en3', { gaps: [
    G('A spring with k = 50 N/m is stretched by 0.20 m.', ['E<sub>e</sub> = ½ke² = ½ × 50 × 0.20² = [[1.0|1]] J'], ['0.5*50*0.20**2'], 'Square the extension first.'),
    G('A spring stores 0.90 J when compressed by 0.060 m.', ['k = 2E<sub>e</sub> ÷ e² = 2 × 0.90 ÷ 0.060² = [[500]] N/m'], ['2*0.90/0.060**2'], 'Rearrange E<sub>e</sub> = ½ke².'),
    G('A catapult (k = 300 N/m) is pulled back 0.10 m and fires a 0.020 kg stone.', ['E<sub>e</sub> = ½ × 300 × 0.10² = [[1.5]] J', 'v = √(2 × 1.5 ÷ 0.020) = [[12.2]] m/s'], ['0.5*300*0.10**2', 'sqrt(2*1.5/0.020)'], 'Assume all the stored energy becomes kinetic energy.'),
    G('A spring is released.', ['Energy is transferred from the [[elastic potential|elastic]] store to the [[kinetic]] store.'], [], 'The spring does work on the object.')
  ] });
  add('phys-en4', { gaps: [
    G('2.0 kg of water is heated by 15 °C (c = 4200 J/kg °C).', ['ΔE = mcΔθ = 2.0 × 4200 × 15 = [[126000]] J'], ['2.0*4200*15'], 'ΔE = mcΔθ.'),
    G('A 0.50 kg aluminium block (c = 900 J/kg °C) is heated from 20 °C to 60 °C.', ['Δθ = [[40]] °C', 'ΔE = 0.50 × 900 × 40 = [[18000]] J'], ['60-20', '0.50*900*40'], 'Find the temperature change first.'),
    G('A heater supplies 84 000 J to 1.0 kg of water (c = 4200 J/kg °C).', ['Δθ = ΔE ÷ mc = 84 000 ÷ (1.0 × 4200) = [[20]] °C'], ['84000/(1.0*4200)'], 'Rearrange ΔE = mcΔθ.'),
    G('Required practical 14.', ['The measured specific heat capacity is usually too [[high|large|big]] because some energy is lost to the [[surroundings]].'], [], 'The temperature rise is smaller than it should be, so c = ΔE ÷ mΔθ comes out too large.')
  ] });
  add('phys-en5', { gaps: [
    G('A motor transfers 3000 J in 20 s.', ['P = E ÷ t = 3000 ÷ 20 = [[150]] W'], ['3000/20'], 'Power is the rate of energy transfer.'),
    G('A 2.0 kW kettle runs for 3.0 minutes.', ['t = [[180]] s', 'E = Pt = 2000 × 180 = [[360000]] J'], ['3.0*60', '2000*180'], 'Convert to seconds and watts first.'),
    G('A crane lifts 200 kg through 15 m in 12 s (g = 9.8 N/kg).', ['Work = mgh = 200 × 9.8 × 15 = [[29400]] J', 'P = 29 400 ÷ 12 = [[2450]] W'], ['200*9.8*15', '29400/12'], 'Work done equals the gain in gravitational potential energy.'),
    G('Power.', ['Power is the [[rate]] of transferring energy. One watt is one [[joule]] per second.'], [], 'P = E ÷ t.')
  ] });
  add('phys-en6', { gaps: [
    G('A motor takes in 500 J and gives out 350 J of useful energy.', ['efficiency = useful ÷ total = 350 ÷ 500 = [[0.70|0.7]]', 'as a percentage = [[70]] %'], ['350/500', '350/500*100'], 'Efficiency has no unit.'),
    G('A lamp is 8 % efficient. It takes in 50 J.', ['useful = 0.08 × 50 = [[4.0|4]] J', 'wasted = 50 − 4.0 = [[46]] J'], ['0.08*50', '50-4.0'], 'Wasted energy = total − useful.'),
    G('A machine takes in 2000 J and wastes 600 J.', ['useful = 2000 − 600 = [[1400]] J', 'efficiency = 1400 ÷ 2000 = [[0.70|0.7]]'], ['2000-600', '1400/2000'], 'Find the useful energy first.'),
    G('Wasted energy.', ['Wasted energy is [[dissipated]] to the surroundings. Lubricating a machine reduces the energy wasted by [[friction]].'], [], 'Dissipated energy is stored in less useful ways.')
  ] });
  add('phys-en7', { gaps: [
    G('Conduction in metals.', ['Metals conduct thermal energy well because they contain [[free|delocalised]] electrons that transfer energy through the metal.'], [], 'Particles also vibrate and pass energy on, but free electrons make metals especially good conductors.'),
    G('Choosing a material for a house wall.', ['A material with a [[low]] thermal conductivity transfers energy [[slowly|more slowly]], so it is a good insulator.'], [], 'Insulators reduce the rate of energy transfer.'),
    G('Thickness of a wall.', ['The thicker the wall, the [[lower|smaller|slower]] the rate of energy transfer through it. Cavity wall insulation traps [[air]].'], [], 'Trapped air is a poor conductor.'),
    G('Required practical 2.', ['The temperature of the water is measured at equal [[time]] intervals while the [[insulation|material|insulating material]] is changed.'], [], 'Keep the starting temperature and volume of water the same.')
  ] });
  add('phys-en8', { gaps: [
    G('Fossil fuels.', ['Coal, oil and gas are [[non-renewable]] and release [[carbon dioxide|CO₂|CO2]] when they are burned.'], [], 'They contribute to global warming.'),
    G('Renewable resources.', ['Wind and solar are [[renewable]] but their output is not [[reliable|constant|steady]] because it depends on the weather.'], [], 'Hydroelectric and tidal output is more predictable.'),
    G('Nuclear power.', ['Nuclear power stations release no [[carbon dioxide|CO₂|CO2]] when generating but produce radioactive [[waste]].'], [], 'The waste must be stored safely for a very long time.'),
    G('A wind turbine with a power of 2000 kW runs for 6.0 hours.', ['energy = Pt = 2000 × 6.0 = [[12000]] kWh'], ['2000*6.0'], 'kW × h = kWh.')
  ] });
  add('phys-en9', { gaps: [
    G('A 0.40 kg ball is thrown upwards at 12 m/s.', ['E<sub>k</sub> = ½mv² = ½ × 0.40 × 12² = [[28.8]] J', 'maximum height = E<sub>k</sub> ÷ mg = 28.8 ÷ (0.40 × 9.8) = [[7.35]] m'], ['0.5*0.40*12**2', '28.8/(0.40*9.8)'], 'All the kinetic energy becomes gravitational potential energy at the top.'),
    G('0.50 kg of water is heated by 20 °C (c = 4200 J/kg °C).', ['ΔE = mcΔθ = 0.50 × 4200 × 20 = [[42000]] J'], ['0.50*4200*20'], 'ΔE = mcΔθ.'),
    G('A machine takes in 40 W and gives out 30 W of useful power.', ['efficiency = 30 ÷ 40 = [[0.75]]'], ['30/40'], 'Efficiency = useful ÷ total.'),
    G('Which quantities?', ['Kinetic energy depends on mass and [[speed|velocity]]. Gravitational potential energy depends on mass, g and [[height]].'], [], 'E<sub>k</sub> = ½mv²; E<sub>p</sub> = mgh.')
  ] });

  add('phys-el1', { gaps: [
    G('A current of 3.0 A flows for 20 s.', ['Q = It = 3.0 × 20 = [[60]] C'], ['3.0*20'], 'Charge = current × time.'),
    G('120 C of charge passes a point in 30 s.', ['I = Q ÷ t = 120 ÷ 30 = [[4.0|4]] A'], ['120/30'], 'I = Q ÷ t.'),
    G('A current of 0.50 A flows for 2.0 minutes.', ['t = [[120]] s', 'Q = It = 0.50 × 120 = [[60]] C'], ['2.0*60', '0.50*120'], 'Convert minutes to seconds.'),
    G('Charge and current.', ['In a metal the current is a flow of [[electrons]]. Charge is measured in [[coulombs|coulomb]].'], [], 'Conventional current is drawn from positive to negative.')
  ] });
  add('phys-el2', { gaps: [
    G('A 12 Ω resistor carries a current of 0.50 A.', ['V = IR = 0.50 × 12 = [[6.0|6]] V'], ['0.50*12'], 'V = IR.'),
    G('A resistor has 9.0 V across it and a current of 0.30 A.', ['R = V ÷ I = 9.0 ÷ 0.30 = [[30]] Ω'], ['9.0/0.30'], 'R = V ÷ I.'),
    G('A lamp of resistance 15 Ω is connected to 6.0 V.', ['I = V ÷ R = 6.0 ÷ 15 = [[0.40|0.4]] A'], ['6.0/15'], 'I = V ÷ R.'),
    G('An ohmic conductor at constant temperature.', ['The current is [[directly proportional|proportional]] to the potential difference. The unit of resistance is the [[ohm|ohms]].'], [], 'Its I–V graph is a straight line through the origin.')
  ] });
  add('phys-el3', { gaps: [
    G('A filament lamp.', ['As the current increases the filament gets [[hotter]] and its resistance [[increases|rises|goes up]].'], [], 'Its I–V graph curves.'),
    G('A diode.', ['A diode allows current in [[one]] direction only. In the other direction its resistance is very [[high|large]].'], [], 'The current is almost zero in reverse.'),
    G('Sensors.', ['The resistance of an LDR [[decreases|falls]] as light intensity increases. The resistance of a thermistor [[decreases|falls]] as temperature increases.'], [], 'Both are used in sensing circuits.'),
    G('At one point on a filament lamp graph the p.d. is 4.0 V and the current is 0.20 A.', ['R = V ÷ I = 4.0 ÷ 0.20 = [[20]] Ω'], ['4.0/0.20'], 'Use the p.d. and current at that point, not the gradient.')
  ] });
  add('phys-el4', { gaps: [
    G('Resistors of 2.0 Ω, 3.0 Ω and 5.0 Ω are connected in series.', ['R = 2.0 + 3.0 + 5.0 = [[10]] Ω'], ['2.0+3.0+5.0'], 'Resistances in series add.'),
    G('A 12 V battery is connected to a 20 Ω and a 40 Ω resistor in series.', ['R = 20 + 40 = [[60]] Ω', 'I = V ÷ R = 12 ÷ 60 = [[0.20|0.2]] A', 'p.d. across the 20 Ω resistor = 0.20 × 20 = [[4.0|4]] V'], ['20+40', '12/60', '0.20*20'], 'The same current flows through both.'),
    G('Two parallel branches carry 0.30 A and 0.50 A.', ['total current = 0.30 + 0.50 = [[0.80|0.8]] A', 'The p.d. across each branch is [[the same|equal]] as the supply.'], ['0.30+0.50'], 'Currents add in parallel.'),
    G('Series circuit.', ['The current is the [[same]] everywhere. Adding more resistors [[increases]] the total resistance.'], [], 'The p.d. is shared between the components.')
  ] });
  add('phys-el5', { gaps: [
    G('UK mains.', ['The UK mains supply is [[230]] V a.c. at a frequency of [[50]] Hz.'], ['230', '50'], 'a.c. keeps changing direction.'),
    G('Plug wires.', ['The live wire is [[brown]], the neutral wire is [[blue]] and the earth wire is [[green and yellow|green-yellow|yellow and green|green/yellow]].'], [], 'Remember the colours of the three-core cable.'),
    G('Fuses.', ['A fuse is wired into the [[live]] wire. It melts if the current is too [[large|high|big]].'], [], 'The fuse breaks the circuit.'),
    G('The earth wire.', ['The earth wire connects the metal case to [[earth|the ground]] so that the case cannot become [[live]].'], [], 'A fault current then flows to earth and blows the fuse.')
  ] });
  add('phys-el6', { gaps: [
    G('A current of 2.0 A flows through a 12 V lamp.', ['P = VI = 12 × 2.0 = [[24]] W'], ['12*2.0'], 'P = VI.'),
    G('A 2300 W kettle is connected to the 230 V mains.', ['I = P ÷ V = 2300 ÷ 230 = [[10]] A'], ['2300/230'], 'I = P ÷ V.'),
    G('A current of 3.0 A flows through a 5.0 Ω resistor.', ['P = I²R = 3.0² × 5.0 = [[45]] W'], ['3.0**2*5.0'], 'Square the current first.'),
    G('A 60 W lamp is on for 2.0 minutes.', ['E = Pt = 60 × 120 = [[7200]] J'], ['60*120'], 'Time in seconds.')
  ] });
  add('phys-el7', { gaps: [
    G('A power station transmits 50 MW at 400 000 V.', ['I = P ÷ V = 50 000 000 ÷ 400 000 = [[125]] A'], ['50e6/400e3'], 'A higher p.d. means a lower current for the same power.'),
    G('Step-up transformers.', ['A step-up transformer [[increases]] the p.d. so the [[current]] is lower, reducing the energy lost as [[heat|heating|thermal energy]] in the cables.'], [], 'This makes transmission efficient.'),
    G('Step-down transformers.', ['Near homes, step-down transformers reduce the p.d. to [[230]] V.'], ['230'], 'High p.d. is unsafe in houses.'),
    G('Energy wasted in cables depends on the square of the current.', ['If the current is halved, the energy wasted becomes [[a quarter|one quarter|0.25|1/4]] as much.'], [], '(½)² = ¼.')
  ] });
  add('phys-el8', { gaps: [
    G('Charging by friction.', ['When two insulators are rubbed together, [[electrons]] move from one to the other. The one that gains them becomes [[negatively|negative]] charged.'], [], 'Only electrons move.'),
    G('Forces between charges.', ['Like charges [[repel]] and opposite charges [[attract]].'], [], 'The force is a non-contact force.'),
    G('An electric field.', ['An electric field is a region where a charged object experiences a [[force]]. Field lines point away from a [[positive]] charge.'], [], 'The field is stronger where the lines are closer together.'),
    G('Sparks.', ['A spark can happen when a large [[potential difference|p.d.|voltage]] builds up between a charged object and [[earth|the ground]].'], [], 'The air between them ionises and conducts.')
  ] });
  add('phys-el9', { gaps: [
    G('A 1150 W toaster is connected to 230 V.', ['I = P ÷ V = 1150 ÷ 230 = [[5.0|5]] A', 'R = V ÷ I = 230 ÷ 5.0 = [[46]] Ω'], ['1150/230', '230/5.0'], 'Find the current first.'),
    G('A 12 V battery is connected to resistors of 3.0 Ω and 9.0 Ω in series.', ['R = [[12]] Ω', 'I = 12 ÷ 12 = [[1.0|1]] A'], ['3.0+9.0', '12/12'], 'Total resistance first.'),
    G('A 3.0 kW heater runs for 2.0 hours. Electricity costs 30 p per kWh.', ['energy = 3.0 × 2.0 = [[6.0|6]] kWh', 'cost = 6.0 × 30 = [[180]] p'], ['3.0*2.0', '6.0*30'], 'kW × h = kWh.'),
    G('A charge of 40 C moves through a p.d. of 6.0 V.', ['E = QV = 40 × 6.0 = [[240]] J'], ['40*6.0'], 'Energy transferred = charge × p.d.')
  ] });
})();
