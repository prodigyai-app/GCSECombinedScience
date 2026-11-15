/* Fill-the-gaps for Forces (phys-fo1–phys-fo13). g = 9.8 N/kg, Moon g = 1.6 N/kg. */
(() => {
  const add = GcseDepth.add, G = (q, lines, calc, why, higher) => Object.assign({ q, lines, calc: calc || [], why }, higher ? { higher: true } : {});

  add('phys-fo1', { gaps: [
    G('Scalars and vectors.', ['A scalar has [[magnitude|size]] only. A vector has magnitude and [[direction]].'], [], 'Vectors are drawn as arrows.'),
    G('Examples.', ['Speed is a [[scalar]] and velocity is a [[vector]]. Mass is a [[scalar]] and weight is a [[vector|force]].'], [], 'Velocity includes direction; speed does not.'),
    G('Non-contact forces.', ['Gravitational, electrostatic and [[magnetic]] forces act without the objects touching.'], [], 'Contact forces include friction and tension.'),
    G('Drawing forces.', ['A force is shown as an [[arrow]]. Its length shows the [[magnitude|size]] of the force.'], [], 'The direction of the arrow shows the direction of the force.')
  ] });
  add('phys-fo2', { gaps: [
    G('A 65 kg person on Earth (g = 9.8 N/kg).', ['W = mg = 65 × 9.8 = [[637]] N'], ['65*9.8'], 'W = mg.'),
    G('A rock weighs 49 N on Earth.', ['m = W ÷ g = 49 ÷ 9.8 = [[5.0|5]] kg'], ['49/9.8'], 'Rearrange W = mg.'),
    G('On the Moon g = 1.6 N/kg. A 20 kg object:', ['W = 20 × 1.6 = [[32]] N'], ['20*1.6'], 'Its mass is still 20 kg.'),
    G('Mass and weight.', ['Mass is the amount of [[matter]] in an object, measured in [[kilograms|kg]]. Weight is a [[force]] measured in [[newtons|N]].'], [], 'Weight depends on the gravitational field strength.')
  ] });
  add('phys-fo3', { gaps: [
    G('Forces of 8 N east and 5 N west act on an object.', ['resultant = 8 − 5 = [[3]] N to the [[east]]'], ['8-5'], 'Subtract forces in opposite directions.'),
    G('(Higher) Perpendicular forces of 6.0 N and 8.0 N.', ['resultant = √(6.0² + 8.0²) = [[10]] N'], ['sqrt(6.0**2+8.0**2)'], 'Use Pythagoras for forces at right angles.', true),
    G('A car has a driving force of 2500 N and drag of 900 N.', ['resultant = 2500 − 900 = [[1600]] N'], ['2500-900'], 'The resultant acts in the direction of the larger force.'),
    G('Balanced forces.', ['If the resultant force is zero the forces are [[balanced]] and the object stays at rest or moves at a constant [[velocity|speed]].'], [], 'Newton’s first law.')
  ] });
  add('phys-fo4', { gaps: [
    G('A force of 40 N moves a box 6.0 m.', ['W = Fs = 40 × 6.0 = [[240]] J'], ['40*6.0'], 'Work done = force × distance.'),
    G('A student does 1500 J of work pushing a trolley 30 m.', ['F = W ÷ s = 1500 ÷ 30 = [[50]] N'], ['1500/30'], 'Rearrange W = Fs.'),
    G('A brake does 120 000 J of work with a force of 6000 N.', ['distance = W ÷ F = 120 000 ÷ 6000 = [[20]] m'], ['120000/6000'], 'The braking distance.'),
    G('Work and heating.', ['Work done against friction is transferred as [[thermal|heat|heating]] energy. One joule is the work done when a force of one [[newton]] moves an object one [[metre|meter]].'], [], 'Friction heats the surfaces.')
  ] });
  add('phys-fo6', { gaps: [
    G('A force of 20 N acts 0.50 m from a pivot.', ['moment = Fd = 20 × 0.50 = [[10]] N m'], ['20*0.50'], 'Distance is measured at right angles to the force.'),
    G('A force of 40 N gives a moment of 8.0 N m.', ['d = M ÷ F = 8.0 ÷ 40 = [[0.20|0.2]] m'], ['8.0/40'], 'Rearrange M = Fd.'),
    G('A seesaw balances. A 300 N child sits 1.5 m from the pivot, a 450 N child on the other side.', ['clockwise moment = 300 × 1.5 = [[450]] N m', 'distance of the 450 N child = 450 ÷ 450 = [[1.0|1]] m'], ['300*1.5', '450/450'], 'Balanced when clockwise moment = anticlockwise moment.'),
    G('Gears.', ['A small gear driving a [[larger]] gear gives a greater turning effect but a [[slower]] rotation.'], [], 'Gears transmit rotational effects.')
  ] });
  add('phys-fo8', { gaps: [
    G('A runner covers 100 m in 12.5 s.', ['v = s ÷ t = 100 ÷ 12.5 = [[8.0|8]] m/s'], ['100/12.5'], 'v = s ÷ t.'),
    G('A car travels at 15 m/s for 40 s.', ['s = vt = 15 × 40 = [[600]] m'], ['15*40'], 's = vt.'),
    G('A cyclist covers 9000 m in 30 minutes.', ['t = [[1800]] s', 'v = 9000 ÷ 1800 = [[5.0|5]] m/s'], ['30*60', '9000/1800'], 'Convert minutes to seconds.'),
    G('Distance–time graphs.', ['The gradient shows the [[speed]]. A horizontal line means the object is [[stationary|at rest|not moving]].'], [], 'A steeper line is a faster object.')
  ] });
  add('phys-fo9', { gaps: [
    G('A car accelerates from 0 to 24 m/s in 8.0 s.', ['a = Δv ÷ t = 24 ÷ 8.0 = [[3.0|3]] m/s²'], ['24/8.0'], 'a = Δv ÷ t.'),
    G('A car accelerates from rest at 2.0 m/s² over 25 m.', ['v² = 2as = 2 × 2.0 × 25 = [[100]]', 'v = [[10]] m/s'], ['2*2.0*25', 'sqrt(100)'], 'Use v² − u² = 2as with u = 0 (given on the equation sheet).'),
    G('Velocity–time graphs.', ['The gradient is the [[acceleration]]. The area under the graph is the [[distance|displacement]] travelled.'], [], 'Split the area into shapes.'),
    G('A car accelerates uniformly from 0 to 12 m/s in 6.0 s, then travels at 12 m/s for 4.0 s.', ['distance in 6.0 s = ½ × 6.0 × 12 = [[36]] m', 'distance in the next 4.0 s = 12 × 4.0 = [[48]] m'], ['0.5*6.0*12', '12*4.0'], 'Triangle then rectangle.')
  ] });
  add('phys-fo11', { gaps: [
    G('Stopping distance.', ['stopping distance = thinking distance + [[braking]] distance'], [], 'Both depend on speed.'),
    G('A thinking distance of 9.0 m and a braking distance of 24 m.', ['stopping distance = 9.0 + 24 = [[33]] m'], ['9.0+24'], 'Add the two distances.'),
    G('A car travels at 15 m/s. The driver’s reaction time is 0.60 s.', ['thinking distance = 15 × 0.60 = [[9.0|9]] m'], ['15*0.60'], 's = vt.'),
    G('Factors.', ['Tiredness and alcohol increase the [[reaction time|thinking distance]]. Worn tyres or wet roads increase the [[braking]] distance.'], [], 'Speed affects both.')
  ] });
  add('phys-fo12', { gaps: [
    G('A 1200 kg car moves at 15 m/s.', ['p = mv = 1200 × 15 = [[18000]] kg m/s'], ['1200*15'], 'p = mv.'),
    G('A 0.50 kg ball has a momentum of 4.0 kg m/s.', ['v = p ÷ m = 4.0 ÷ 0.50 = [[8.0|8]] m/s'], ['4.0/0.50'], 'Rearrange p = mv.'),
    G('A 2.0 kg trolley at 3.0 m/s collides with a stationary 1.0 kg trolley and they stick together.', ['momentum before = 2.0 × 3.0 = [[6.0|6]] kg m/s', 'speed after = 6.0 ÷ 3.0 = [[2.0|2]] m/s'], ['2.0*3.0', '6.0/3.0'], 'The combined mass is 3.0 kg.'),
    G('Conservation of momentum.', ['In a closed system the total momentum before an event is [[equal to|the same as|equal]] the total momentum after.'], [], 'Momentum is a vector.')
  ] });
  add('phys-fo13', { gaps: [
    G('An 800 kg car has a driving force of 2000 N and resistive forces of 400 N.', ['a = F ÷ m = (2000 − 400) ÷ 800 = [[2.0|2]] m/s²'], ['(2000-400)/800'], 'Use the resultant force.'),
    G('A spring with k = 25 N/m is stretched by 0.40 m.', ['F = ke = 25 × 0.40 = [[10]] N'], ['25*0.40'], 'F = ke.'),
    G('A force of 600 N acts on an area of 0.030 m².', ['p = F ÷ A = 600 ÷ 0.030 = [[20000]] Pa'], ['600/0.030'], 'p = F ÷ A.'),
    G('Terminal velocity.', ['A falling object reaches terminal velocity when the resistive force equals its [[weight]].'], [], 'The resultant force is then zero.')
  ] });
})();
