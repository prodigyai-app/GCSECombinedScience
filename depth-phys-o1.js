/* Worked examples for Energy (phys-en1–phys-en9), Electricity (phys-el1–phys-el9) and Forces (phys-fo1–phys-fo13, except phys-fo5, phys-fo7, phys-fo10 in depth-s1.js).
   g = 9.8 N/kg, c(water) = 4200 J/kg °C. Every number is recomputed by tools/verify-depth.cjs. */
(() => {
  const { v, fr, res } = LAB.W, add = GcseDepth.add;
  const S = (t, why, lines) => [t, why, lines];

  /* ---------------- Energy ---------------- */
  add('phys-en1', { ex: [
    ['An electric kettle', 'Describe the energy transfers when an electric kettle boils water.', [
      S('Name the pathway in', 'The energy arrives by a current.', ['Energy is transferred electrically from the mains to the heating element.']),
      S('Name the useful store', '', ['The element heats the water, so the thermal store of the water increases.']),
      S('Name the wasted energy', 'Some energy always spreads out.', ['Some energy heats the kettle and the air, increasing their thermal stores (dissipated).'])
    ], { desc: true }],
    ['A car braking', 'A moving car brakes to a stop. Describe the energy transfers.', [
      S('Start and end', '', ['The kinetic store of the car decreases to zero.']),
      S('Pathway', 'Friction between the brake pads and discs does work.', ['Energy is transferred mechanically by the friction forces.']),
      S('Where it goes', '', ['The thermal store of the brakes increases, then energy is dissipated to the surroundings by heating (and a little by sound).'])
    ], { desc: true }]
  ] });
  add('phys-en2', { ex: [
    ['Speed from kinetic energy', 'A 1200 kg car has 240 000 J in its kinetic store. Calculate its speed.', [
      S('Rearrange E<sub>k</sub> = ½mv²', 'Multiply by 2, divide by m.', [`${v('v')}² = ${fr('2' + v('E', 'k'), v('m'))} = ${fr('2 × 240 000', '1200')} = 400`]),
      S('Square root', '', [`${v('v')} = √400 = ${res('20 m/s')}`])
    ], { chk: [['2*240000/1200', 400], ['sqrt(400)', 20]] }],
    ['How high will it go?', 'A ball is thrown straight up at 7.0 m/s. Ignoring air resistance, calculate the maximum height it reaches. (g = 9.8 N/kg)', [
      S('Energy is conserved', 'At the top all the kinetic energy has become gravitational potential energy.', [`½${v('m')}${v('v')}² = ${v('m')}${v('g')}${v('h')}`]),
      S('The mass cancels', 'Divide both sides by m.', [`${v('h')} = ${fr(v('v') + '²', '2' + v('g'))} = ${fr('7.0²', '2 × 9.8')} = ${res('2.5 m')}`])
    ], { chk: [['7.0**2/(2*9.8)', 2.5]] }]
  ] });
  add('phys-en3', { ex: [
    ['Spring constant from stored energy', 'A spring stores 0.36 J when it is stretched by 0.060 m. Calculate its spring constant.', [
      S('Rearrange E<sub>e</sub> = ½ke²', '', [`${v('k')} = ${fr('2' + v('E', 'e'), v('e') + '²')}`]),
      S('Substitute', '', [`${v('k')} = ${fr('2 × 0.36', '0.060²')} = ${fr('0.72', '0.0036')} = ${res('200 N/m')}`])
    ], { chk: [['2*0.36/0.060**2', 200]] }],
    ['Energy from a graph', 'A force–extension graph is a straight line from the origin to 6.0 N at 0.12 m. Calculate the energy stored.', [
      S('Use the area', 'The work done stretching the spring is the area under the line: a triangle.', ['energy = ½ × force × extension']),
      S('Substitute', '', [`energy = ½ × 6.0 × 0.12 = ${res('0.36 J')}`, 'Check: k = 6.0 ÷ 0.12 = 50 N/m, and ½ × 50 × 0.12² = 0.36 J.'])
    ], { chk: [['0.5*6.0*0.12', 0.36], ['6.0/0.12', 50], ['0.5*50*0.12**2', 0.36]] }]
  ] });
  add('phys-en4', { ex: [
    ['Specific heat capacity from practical data', 'In required practical 14, a 50 W heater warms a 1.0 kg metal block for 600 s. The temperature rises by 33 °C. Calculate the specific heat capacity.', [
      S('Energy supplied', 'E = Pt.', ['E = 50 × 600 = 30 000 J']),
      S('Rearrange ΔE = mcΔθ', '', [`${v('c')} = ${fr('Δ' + v('E'), v('m') + 'Δθ')} = ${fr('30 000', '1.0 × 33')} = ${res('910 J/kg °C')}`]),
      S('Evaluate', 'Energy lost to the surroundings means the true value is lower.', ['Insulating the block would make the result more accurate.'])
    ], { chk: [['50*600', 30000], ['30000/(1.0*33)', 909]] }]
  ] });
  add('phys-en5', { ex: [
    ['Energy from power and time', 'A 1.5 kW microwave oven is used for 4.0 minutes. Calculate the energy transferred.', [
      S('Convert the units', 'Power in watts, time in seconds.', ['1.5 kW = 1500 W; 4.0 min = 240 s']),
      S('Use E = Pt', '', [`${v('E')} = 1500 × 240 = ${res('360 000 J')}`])
    ], { chk: [['4.0*60', 240], ['1500*240', 360000]] }],
    ['Comparing two motors', 'Motor A lifts a 50 N load through 2.0 m in 4.0 s. Motor B lifts the same load through the same height in 2.5 s. Which motor is more powerful?', [
      S('Work done', 'Both do the same work.', ['W = Fs = 50 × 2.0 = 100 J']),
      S('Power of each', 'P = W ÷ t.', ['A: 100 ÷ 4.0 = 25 W', 'B: 100 ÷ 2.5 = 40 W']),
      S('Conclusion', '', [res('B is more powerful: it transfers the same energy in less time')])
    ], { chk: [['50*2.0', 100], ['100/4.0', 25], ['100/2.5', 40]] }]
  ] });
  add('phys-en6', { ex: [
    ['Wasted power', 'A 60 W lamp is 15 % efficient. Calculate its useful output power and the power wasted.', [
      S('Useful power', 'useful = efficiency × total.', ['useful = 0.15 × 60 = 9.0 W']),
      S('Wasted power', 'wasted = total − useful.', [`wasted = 60 − 9.0 = ${res('51 W')}`, 'Most of the energy heats the surroundings.'])
    ], { chk: [['0.15*60', 9], ['60-9.0', 51]] }],
    ['Input energy needed', 'A motor is 0.80 efficient. It must transfer 400 J of useful energy. Calculate the energy that must be supplied.', [
      S('Rearrange', 'total input = useful output ÷ efficiency.', [`input = ${fr('400', '0.80')} = ${res('500 J')}`]),
      S('Check', '', ['400 ÷ 500 = 0.80 ✓'])
    ], { chk: [['400/0.80', 500]] }]
  ] });
  add('phys-en7', { ex: [
    ['Comparing insulators', 'In required practical 2, water in beaker X cools from 80 °C to 60 °C in 10 minutes. Water in beaker Y, wrapped in a different material, cools from 80 °C to 70 °C in 10 minutes. Which material is the better insulator?', [
      S('Rate of cooling', 'temperature drop ÷ time.', ['X: (80 − 60) ÷ 10 = 2.0 °C per minute', 'Y: (80 − 70) ÷ 10 = 1.0 °C per minute']),
      S('Conclusion', 'A slower rate of cooling means a lower rate of energy transfer.', [res('Y’s material is the better insulator')]),
      S('Fair test', '', ['Same volume and starting temperature of water, same thickness of material.'])
    ], { chk: [['(80-60)/10', 2], ['(80-70)/10', 1]] }],
    ['Cavity wall insulation', 'Explain how cavity wall insulation reduces the energy a house loses each second.', [
      S('The material', '', ['Foam or mineral wool fills the gap between the two layers of brick.']),
      S('Why it works', 'It traps air, which has a very low thermal conductivity.', ['Energy is conducted through the wall much more slowly, and air in the gap can no longer circulate.']),
      S('Link to the question', '', ['The rate of energy transfer through the walls is lower, so the house cools more slowly and less heating is needed.'])
    ], { desc: true }]
  ] });
  add('phys-en8', { ex: [
    ['How many wind turbines?', 'A 1200 MW gas power station is to be replaced by wind turbines. Each turbine has a maximum power of 3.0 MW but, on average, produces 35 % of this. Estimate how many turbines are needed.', [
      S('Average output of one turbine', '', ['3.0 × 0.35 = 1.05 MW']),
      S('Number needed', '', [`1200 ÷ 1.05 = 1143, so ${res('about 1100 turbines')}`]),
      S('Evaluate', 'Wind is not available on demand.', ['Back-up (for example gas or storage) is still needed when the wind does not blow.'])
    ], { chk: [['3.0*0.35', 1.05], ['1200/1.05', 1143]] }],
    ['Evaluating a resource', 'Evaluate the use of a tidal barrage to generate electricity.', [
      S('Advantages', '', ['Renewable; no CO₂ while generating; tides are predictable so the output is reliable.']),
      S('Disadvantages', '', ['Expensive to build; few suitable estuaries; changes habitats for birds and fish; output varies through the day.']),
      S('Conclusion', 'Always finish with a judgement.', ['A useful low-carbon supply where the site allows, but it cannot meet all demand on its own.'])
    ], { desc: true }]
  ] });
  add('phys-en9', { ex: [
    ['A roller coaster', 'A 500 kg roller coaster car starts from rest at the top of a 30 m drop. 80 % of the gravitational potential energy it loses becomes kinetic energy. Calculate its speed at the bottom. (g = 9.8 N/kg)', [
      S('Energy lost from the gravitational store', '', ['E<sub>p</sub> = 500 × 9.8 × 30 = 147 000 J']),
      S('Kinetic energy gained', '', ['E<sub>k</sub> = 0.80 × 147 000 = 117 600 J']),
      S('Speed', 'Rearrange E<sub>k</sub> = ½mv².', [`${v('v')} = √(2 × 117 600 ÷ 500) = √470.4 = ${res('22 m/s')}`])
    ], { chk: [['500*9.8*30', 147000], ['0.80*147000', 117600], ['sqrt(2*117600/500)', 21.7, 0.02]] }],
    ['Time to boil', 'A 2.0 kW kettle heats 1.5 kg of water from 20 °C to 100 °C. Assuming no energy is wasted, calculate the time taken. (c = 4200 J/kg °C)', [
      S('Energy needed', 'ΔE = mcΔθ.', ['ΔE = 1.5 × 4200 × 80 = 504 000 J']),
      S('Time', 't = E ÷ P.', [`${v('t')} = ${fr('504 000', '2000')} = ${res('252 s (about 4.2 minutes)')}`])
    ], { chk: [['1.5*4200*80', 504000], ['504000/2000', 252]] }]
  ] });

  /* ---------------- Electricity ---------------- */
  add('phys-el1', { ex: [
    ['How long does it take?', 'A current of 0.30 A flows through a lamp. How long does it take for 900 C of charge to flow?', [
      S('Rearrange Q = It', '', [`${v('t')} = ${fr(v('Q'), v('I'))} = ${fr('900', '0.30')} = 3000 s`]),
      S('Convert', '', [res('3000 s = 50 minutes')])
    ], { chk: [['900/0.30', 3000], ['3000/60', 50]] }]
  ] });
  add('phys-el2', { ex: [
    ['Current from p.d. and resistance', 'A heater element has a resistance of 46 Ω. Calculate the current when it is connected to 230 V.', [
      S('Choose the equation', 'V and R are known; I is needed.', [`${v('V')} = ${v('I')}${v('R')}`]),
      S('Rearrange and substitute', 'Divide both sides by R.', [`${v('I')} = ${fr(v('V'), v('R'))} = ${fr('230', '46')} = ${res('5.0 A')}`])
    ], { chk: [['230/46', 5]] }],
    ['Resistance from a graph', 'The I–V graph for a resistor is a straight line through the origin. At 3.0 V the current is 0.15 A. Calculate the resistance and say what the graph shows.', [
      S('Read one point', '', [`${v('R')} = ${fr('3.0', '0.15')} = ${res('20 Ω')}`]),
      S('Interpret', 'A straight line through the origin means I ∝ V.', ['The resistance is constant, so the resistor is ohmic (at constant temperature).'])
    ], { chk: [['3.0/0.15', 20]] }]
  ] });
  add('phys-el3', { ex: [
    ['Resistance of a filament lamp', 'At 2.0 V the current in a filament lamp is 0.20 A. At 6.0 V it is 0.30 A. Calculate the resistance at each p.d. and explain the difference.', [
      S('At 2.0 V', '', ['R = 2.0 ÷ 0.20 = 10 Ω']),
      S('At 6.0 V', '', ['R = 6.0 ÷ 0.30 = 20 Ω']),
      S('Explain', 'A larger current heats the filament.', [res('The hotter filament has a higher resistance, so the I–V graph curves')])
    ], { chk: [['2.0/0.20', 10], ['6.0/0.30', 20]] }],
    ['A thermistor in a heating control', 'A thermistor is used to switch on a heater when a room gets cold. Explain how its resistance changes as the room cools.', [
      S('Property', '', ['A thermistor’s resistance increases as its temperature decreases.']),
      S('In the circuit', 'In a series circuit the p.d. divides in proportion to resistance.', ['As the room cools, the p.d. across the thermistor rises; at a set value this switches the heater on.'])
    ], { desc: true }]
  ] });
  add('phys-el4', { ex: [
    ['A parallel circuit', 'A 6.0 Ω and a 4.0 Ω resistor are connected in parallel to a 12 V supply. Calculate the current in each resistor and the total current.', [
      S('Same p.d. across each branch', '', ['I₁ = 12 ÷ 6.0 = 2.0 A', 'I₂ = 12 ÷ 4.0 = 3.0 A']),
      S('Currents add', '', [`total = 2.0 + 3.0 = ${res('5.0 A')}`]),
      S('Check', 'The total resistance is less than the smallest resistor.', ['R = 12 ÷ 5.0 = 2.4 Ω, which is less than 4.0 Ω'])
    ], { chk: [['12/6.0', 2], ['12/4.0', 3], ['2.0+3.0', 5], ['12/5.0', 2.4]] }],
    ['A missing p.d.', 'A 9.0 V battery is connected to a lamp and a resistor in series. The p.d. across the lamp is 3.5 V and the current is 0.25 A. Calculate the resistance of the resistor.', [
      S('P.d. shared in series', '', ['V across resistor = 9.0 − 3.5 = 5.5 V']),
      S('Use R = V ÷ I', '', [`${v('R')} = ${fr('5.5', '0.25')} = ${res('22 Ω')}`])
    ], { chk: [['9.0-3.5', 5.5], ['5.5/0.25', 22]] }]
  ] });
  add('phys-el5', { ex: [
    ['Choosing a fuse', 'A 2.3 kW kettle is connected to the 230 V mains. Fuses of 3 A, 5 A and 13 A are available. Which should be used?', [
      S('Normal current', 'I = P ÷ V.', ['I = 2300 ÷ 230 = 10 A']),
      S('Choose', 'The fuse must be just above the normal current.', [res('13 A: a 3 A or 5 A fuse would melt in normal use')])
    ], { chk: [['2300/230', 10]] }],
    ['When the live wire touches the case', 'Explain how the earth wire and fuse protect a user if the live wire touches the metal case of a toaster.', [
      S('The fault', '', ['The case becomes connected to the live wire at 230 V.']),
      S('Earth wire', 'The earth wire has a very low resistance.', ['A large current flows from the live wire through the case and the earth wire to earth.']),
      S('Fuse', '', ['The large current melts the fuse, which disconnects the live wire, so the case is no longer live.'])
    ], { desc: true }]
  ] });
  add('phys-el6', { ex: [
    ['Energy from charge and p.d.', 'A current of 0.50 A flows through a 12 V motor for 10 minutes. Calculate the charge that flows and the energy transferred.', [
      S('Charge', 'Q = It, time in seconds.', ['Q = 0.50 × 600 = 300 C']),
      S('Energy', 'E = QV.', [`${v('E')} = 300 × 12 = ${res('3600 J')}`]),
      S('Check with power', '', ['P = VI = 6.0 W; E = Pt = 6.0 × 600 = 3600 J ✓'])
    ], { chk: [['0.50*600', 300], ['300*12', 3600], ['12*0.50*600', 3600]] }],
    ['Using P = I²R', 'A current of 0.20 A flows through a 450 Ω resistor. Calculate the power.', [
      S('Choose the equation', 'V is not given.', [`${v('P')} = ${v('I')}²${v('R')}`]),
      S('Substitute', '', [`${v('P')} = 0.20² × 450 = 0.04 × 450 = ${res('18 W')}`])
    ], { chk: [['0.20**2*450', 18]] }]
  ] });
  add('phys-el7', { ex: [
    ['Why high p.d. matters', 'A transmission cable has a resistance of 5.0 Ω. Compare the power wasted when it carries 200 A and when it carries 20 A.', [
      S('Power wasted = I²R', '', ['200 A: 200² × 5.0 = 200 000 W', '20 A: 20² × 5.0 = 2000 W']),
      S('Compare', '', [res('Ten times less current wastes 100 times less power'), 'This is why the grid uses a very high p.d. (and so a low current).'])
    ], { chk: [['200**2*5.0', 200000], ['20**2*5.0', 2000], ['200000/2000', 100]] }]
  ] });
  add('phys-el8', { ex: [
    ['A shock from a car door', 'A passenger slides across a car seat, gets out and touches the metal door. She feels a small shock. Explain why.', [
      S('Charging', 'Friction between insulators transfers electrons.', ['Rubbing against the seat transfers electrons, so the passenger becomes charged.']),
      S('The p.d.', '', ['A large p.d. builds up between her and the car (which is earthed through the ground).']),
      S('Discharge', '', ['When she touches the metal, electrons flow suddenly through her: a spark or small shock.'])
    ], { desc: true }]
 ,
    ['Force in an electric field', 'A small positive charge is placed near a large negatively charged sphere. Describe the force on it and how the force changes as it moves closer.', [
      S('Direction', 'Opposite charges attract.', ['The force is towards the sphere, along the field lines (which point into a negative charge).']),
      S('Size', 'The field is stronger where the lines are closer together.', ['The force increases as the charge moves closer to the sphere.'])
    ], { desc: true }]
  ] });
  add('phys-el9', { ex: [
    ['Cost of using a heater', 'A 2.5 kW heater is used for 3.0 hours. Electricity costs 28p per kWh. Calculate the cost.', [
      S('Energy in kWh', 'kW × hours.', ['E = 2.5 × 3.0 = 7.5 kWh']),
      S('Cost', '', [`7.5 × 28 = 210p = ${res('£2.10')}`])
    ], { chk: [['2.5*3.0', 7.5], ['7.5*28', 210]] }],
    ['A lamp rating', 'A lamp is labelled 12 V, 36 W. Calculate the current in it and its resistance when it is working normally.', [
      S('Current', 'I = P ÷ V.', ['I = 36 ÷ 12 = 3.0 A']),
      S('Resistance', 'R = V ÷ I.', [`${v('R')} = 12 ÷ 3.0 = ${res('4.0 Ω')}`])
    ], { chk: [['36/12', 3], ['12/3.0', 4]] }]
  ] });

  /* ---------------- Forces ---------------- */
  add('phys-fo1', { ex: [
    ['Distance and displacement', 'A student walks 3.0 km north and then 4.0 km east. Find the distance travelled and the size of her displacement.', [
      S('Distance (scalar)', 'Add the lengths of the path.', ['distance = 3.0 + 4.0 = 7.0 km']),
      S('Displacement (vector)', 'Straight line from start to finish: use a scale drawing or Pythagoras.', [`displacement = √(3.0² + 4.0²) = ${res('5.0 km')} (north-east)`])
    ], { chk: [['3.0+4.0', 7], ['sqrt(3.0**2+4.0**2)', 5]] }],
    ['Forces on a parachutist', 'Name the forces on a parachutist falling at a steady speed and say whether each is a contact or non-contact force.', [
      S('Weight', '', ['Weight acts downwards: a non-contact (gravitational) force.']),
      S('Air resistance', '', ['Air resistance (drag) acts upwards: a contact force.']),
      S('Steady speed', '', ['The two forces are equal and opposite, so the resultant force is zero.'])
    ], { desc: true }]
  ] });
  add('phys-fo2', { ex: [
    ['Weight on Mars', 'A rover weighs 370 N on Mars, where g = 3.7 N/kg. Calculate its mass and its weight on Earth (g = 9.8 N/kg).', [
      S('Mass', 'm = W ÷ g.', ['m = 370 ÷ 3.7 = 100 kg']),
      S('Weight on Earth', 'Mass does not change.', [`W = 100 × 9.8 = ${res('980 N')}`])
    ], { chk: [['370/3.7', 100], ['100*9.8', 980]] }]
  ] });
  add('phys-fo3', { ex: [
    ['A tug of war', 'Team A pulls with 520 N and team B pulls the other way with 480 N. Find the resultant force.', [
      S('Choose a direction', 'Forces in opposite directions subtract.', ['Take the direction of team A’s pull as positive.']),
      S('Resultant', '', [`resultant = 520 − 480 = ${res('40 N towards team A')}`, 'The rope accelerates towards team A.'])
    ], { chk: [['520-480', 40]] }],
    ['A car at steady speed', 'A car has a driving force of 2000 N. Air resistance is 1200 N and friction is 800 N. Describe its motion.', [
      S('Resistive forces', '', ['1200 + 800 = 2000 N backwards']),
      S('Resultant', '', ['2000 − 2000 = 0 N']),
      S('Motion', 'Newton’s first law.', [res('Zero resultant force: the car moves at a constant velocity')])
    ], { chk: [['1200+800', 2000], ['2000-2000', 0]] }]
  ] });
  add('phys-fo4', { ex: [
    ['Climbing a wall', 'A 70 kg climber climbs 12 m up a wall. Calculate the work done against gravity. (g = 9.8 N/kg)', [
      S('Force needed', 'Equal to her weight.', ['F = mg = 70 × 9.8 = 686 N']),
      S('Work done', 'W = Fs.', [`${v('W')} = 686 × 12 = ${res('8232 J (8.2 kJ)')}`])
    ], { chk: [['70*9.8', 686], ['686*12', 8232]] }],
    ['Braking force from work done', 'A car has 300 000 J in its kinetic store. The brakes stop it in 50 m. Calculate the average braking force.', [
      S('Work done by the brakes', 'All the kinetic energy is transferred.', ['W = 300 000 J']),
      S('Rearrange W = Fs', '', [`${v('F')} = ${fr('300 000', '50')} = ${res('6000 N')}`])
    ], { chk: [['300000/50', 6000]] }]
  ] });
  add('phys-fo6', { ex: [
    ['A crowbar', 'A force of 200 N is applied 0.80 m from the pivot of a crowbar. The load is 0.10 m from the pivot on the other side. Calculate the force on the load.', [
      S('Principle of moments', 'Moment of the effort = moment of the load.', ['200 × 0.80 = F × 0.10']),
      S('Solve', '', [`${v('F')} = ${fr('160', '0.10')} = ${res('1600 N')}`, 'A small force a long way from the pivot gives a large force near it.'])
    ], { chk: [['200*0.80', 160], ['160/0.10', 1600]] }]
  ] });
  add('phys-fo8', { ex: [
    ['Speed from a graph', 'A distance–time graph is a straight line from (0 s, 0 m) to (40 s, 200 m), then horizontal until 60 s. Describe the motion.', [
      S('First part', 'Speed = gradient.', ['speed = 200 ÷ 40 = 5.0 m/s (constant)']),
      S('Second part', '', ['Horizontal line: the object is stationary for 20 s.'])
    ], { chk: [['200/40', 5], ['60-40', 20]] }],
    ['Journey time', 'A cyclist travels 1.2 km at an average speed of 4.0 m/s. How long does it take?', [
      S('Units', '', ['1.2 km = 1200 m']),
      S('Rearrange s = vt', '', [`${v('t')} = ${fr('1200', '4.0')} = ${res('300 s (5 minutes)')}`])
    ], { chk: [['1200/4.0', 300]] }]
  ] });
  add('phys-fo9', { ex: [
    ['Acceleration from rest', 'A sports car reaches 27 m/s from rest in 9.0 s. Calculate its acceleration.', [
      S('Change in velocity', '', ['Δv = 27 − 0 = 27 m/s']),
      S('Use a = Δv ÷ t', '', [`${v('a')} = ${fr('27', '9.0')} = ${res('3.0 m/s²')}`])
    ], { chk: [['27/9.0', 3]] }],
    ['Distance from a velocity–time graph', 'A car speeds up uniformly from 4.0 m/s to 10 m/s in 6.0 s. Calculate the distance travelled.', [
      S('Area under the graph', 'The shape is a trapezium (a rectangle plus a triangle).', ['rectangle: 4.0 × 6.0 = 24 m', 'triangle: ½ × 6.0 × 6.0 = 18 m']),
      S('Add', '', [`distance = 24 + 18 = ${res('42 m')}`])
    ], { chk: [['4.0*6.0', 24], ['0.5*6.0*6.0', 18], ['0.5*(4.0+10)*6.0', 42]] }]
  ] });
  add('phys-fo11', { ex: [
    ['Stopping distance on a motorway', 'A car travels at 25 m/s. The driver’s reaction time is 0.70 s and the braking distance is 40 m. Calculate the stopping distance.', [
      S('Thinking distance', 'The car keeps moving at 25 m/s during the reaction time.', ['thinking distance = 25 × 0.70 = 17.5 m']),
      S('Stopping distance', '', [`17.5 + 40 = ${res('57.5 m (about 58 m)')}`])
    ], { chk: [['25*0.70', 17.5], ['17.5+40', 57.5]] }]
  ] });
  add('phys-fo12', { ex: [
    ['Force from a change in momentum (Higher)', 'A 0.16 kg cricket ball moving at 30 m/s is caught and stopped in 0.040 s. Calculate the average force on the ball.', [
      S('Change in momentum', '', ['Δp = 0.16 × 30 = 4.8 kg m/s']),
      S('F = Δp ÷ t', '', [`${v('F')} = ${fr('4.8', '0.040')} = ${res('120 N')}`, 'Moving the hands back increases t and reduces the force.'])
    ], { chk: [['0.16*30', 4.8], ['4.8/0.040', 120]], higher: true }],
    ['Skaters pushing apart', 'Two skaters stand still, then push apart. The 60 kg skater moves at 1.5 m/s. Calculate the speed of the 40 kg skater.', [
      S('Momentum before', '', ['Both still, so total momentum = 0']),
      S('Momentum after', 'Equal and opposite.', ['60 × 1.5 = 40 × v']),
      S('Solve', '', [`${v('v')} = ${fr('90', '40')} = ${res('2.25 m/s in the opposite direction')}`])
    ], { chk: [['60*1.5', 90], ['90/40', 2.25]] }]
  ] });
  add('phys-fo13', { ex: [
    ['A car speeding up', 'A 1000 kg car accelerates from rest to 20 m/s in 10 s. Calculate its acceleration and the resultant force.', [
      S('Acceleration', 'a = Δv ÷ t.', ['a = 20 ÷ 10 = 2.0 m/s²']),
      S('Resultant force', 'F = ma.', [`${v('F')} = 1000 × 2.0 = ${res('2000 N')}`])
    ], { chk: [['20/10', 2], ['1000*2.0', 2000]] }],
    ['Terminal velocity', 'An 80 kg skydiver falls at terminal velocity. Calculate the air resistance on her and explain why her speed stays constant. (g = 9.8 N/kg)', [
      S('Weight', '', ['W = 80 × 9.8 = 784 N']),
      S('Air resistance', 'At terminal velocity the forces balance.', [res('air resistance = 784 N upwards')]),
      S('Explain', '', ['The resultant force is zero, so there is no acceleration.'])
    ], { chk: [['80*9.8', 784]] }]
  ] });
})();
