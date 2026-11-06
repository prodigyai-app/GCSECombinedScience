/* Exam-style questions for each required practical lab, shared by the four GCSE science sites.
   Attaches a marked question set below each lab once the lab section exists. Skipped inside embedded lesson frames. */
(function(){
'use strict';
const ms=a=>a.map((t,i)=>[String(i+1),t]);
const P=(q,m,marks,ans,unit)=>Object.assign({q,m,lines:Math.max(2,m),ms:ms(marks)},ans!==undefined?{ans:{a:ans,unit:unit||'',tol:0.02,atol:0}}:{});
const Q=(stem,parts)=>({stem,parts});
const D={
/* ---------------- Biology ---------------- */
bmic:Q('<p>A student uses a light microscope to observe onion epidermis cells stained with iodine.</p>',[
 P('Explain why the onion tissue must be a single, thin layer of cells.',2,['So light can pass through it (1)','So individual cells can be seen clearly / cells do not overlap (1)']),
 P('Describe how the student should focus on the cells.',3,['Start with the lowest-power objective lens (1)','Use the coarse focus to bring the stage close, then move away until the image is in focus (1)','Use the fine focus, then switch to a higher power and refocus with fine focus (1)']),
 P('A cell measures 24 mm in the student’s drawing at × 400. Calculate its real length in micrometres.',3,['24 ÷ 400 = 0.06 mm (1)','0.06 × 1000 (1)','60 μm (1)'],60,'μm'),
 P('Give two features of a good biological drawing.',2,['Clear, continuous lines with no shading (1)','Labels with straight lines / a title and magnification stated (1)'])]),
bzone:Q('<p>A student investigates the effect of three antibiotics on the growth of bacteria using paper discs on a nutrient agar plate.</p>',[
 P('Give two aseptic techniques the student should use.',2,['Sterilise the inoculating loop by flaming until red hot (1)','Open the lid only slightly / work near a Bunsen flame / disinfect the bench (1)']),
 P('Antibiotic B gives a clear zone of diameter 22 mm. Calculate its area using π = 3.14.',3,['r = 11 mm (1)','3.14 × 11² (1)','380 mm² (1)'],379.94,'mm²'),
 P('Explain why the plate is incubated at 25 °C and not 37 °C.',2,['At 37 °C human pathogens could grow (1)','25 °C reduces this risk while still allowing growth (1)']),
 P('Suggest why the student included a disc soaked in sterile water.',1,['Control, to show the effect is due to the antibiotic (1)']),
 P('Explain why the student should not draw conclusions from one plate.',2,['Results may be due to chance / an anomaly (1)','Repeat to check repeatability and calculate means (1)'])]),
bosm:Q('<p>A student puts potato cylinders into sucrose solutions of different concentrations for 30 minutes and measures their change in mass.</p>',[
 P('A cylinder changes from 2.50 g to 2.20 g. Calculate the percentage change in mass.',2,['(2.20 − 2.50) ÷ 2.50 × 100 (1)','−12% (1)'],-12,'%'),
 P('Explain why the cylinder lost mass.',3,['Solution is more concentrated than the potato cells (1)','Water moves out of the cells by osmosis (1)','Through the partially permeable cell membrane (1)']),
 P('Give two variables that should be controlled.',2,['Size/length/surface area of cylinders (1)','Time in solution / temperature / same potato (1)']),
 P('Describe how the student could use a graph of the results to estimate the concentration of the potato cell contents.',3,['Plot percentage change in mass against concentration (1)','Draw a line of best fit (1)','Read off the concentration where the line crosses 0% (1)'])]),
bfood:Q('<p>A student tests a sample of milk for sugar, starch, protein and lipid.</p>',[
 P('Describe how to test the milk for reducing sugar and give the positive result.',3,['Add Benedict’s solution (1)','Heat in a water bath at about 75 °C for a few minutes (1)','Colour change from blue to green/yellow/brick-red (1)']),
 P('Name the reagent used to test for protein and the positive colour.',2,['Biuret reagent (1)','Lilac/purple (1)']),
 P('Give one safety precaution when testing for lipids with ethanol.',1,['Keep ethanol away from flames / flammable (1)']),
 P('The Benedict’s test gives a yellow colour. Explain why this test is described as semi-quantitative.',2,['Colour indicates approximately how much sugar is present (1)','But does not give an exact concentration (1)']),
 P('Suggest how the student could make the sugar test more quantitative.',2,['Compare with colours from glucose solutions of known concentration / colour standards (1)','Or use a colorimeter (1)'])]),
benz:Q('<p>A student investigates the effect of pH on amylase. Starch and amylase are mixed with a buffer, and a drop is tested with iodine every 30 seconds.</p>',[
 P('Explain why a buffer solution is added.',1,['To keep the pH constant at a known value (1)']),
 P('At pH 6, iodine stopped turning blue-black after 150 s. Calculate the rate using rate = 1000 ÷ time.',2,['1000 ÷ 150 (1)','6.7 s⁻¹ (1)'],6.67,'s⁻¹'),
 P('Explain why sampling every 30 seconds limits the precision of the result.',2,['The end point could be anywhere within the 30 s interval (1)','Sample more often, e.g. every 10 s (1)']),
 P('Give two control variables.',2,['Temperature (water bath) (1)','Volume/concentration of starch or amylase (1)']),
 P('Explain why the rate is very low at pH 2.',3,['Extreme pH changes the shape of the active site (1)','Enzyme denatured (1)','Starch no longer fits / fewer enzyme–substrate complexes form (1)'])]),
bphot:Q('<p>Pondweed is placed at different distances from a lamp and the volume of oxygen collected in 5 minutes is measured.</p>',[
 P('At 10 cm, 2.5 cm³ of oxygen is collected in 5 minutes. Calculate the rate in cm³/min.',2,['2.5 ÷ 5 (1)','0.5 cm³/min (1)'],0.5,'cm³/min'),
 P('Explain why the rate of photosynthesis decreases as the lamp is moved further away.',2,['Light intensity decreases (1)','Light is the limiting factor (1)']),
 P('Describe how the student could keep the temperature constant.',2,['Place the boiling tube in a water bath / use a heat shield or LED lamp (1)','Monitor temperature with a thermometer (1)']),
 P('Light intensity is proportional to 1/d². Calculate the relative light intensity at 20 cm compared with 10 cm.',2,['(10/20)² (1)','0.25 / one quarter (1)'],0.25,''),
 P('Give one reason why collecting gas is better than counting bubbles.',2,['Bubbles may be different sizes (1)','Gas collection measures volume directly, so more accurate (1)'])]),
breac:Q('<p>Students use a ruler-drop test to compare reaction times with the dominant and non-dominant hand.</p>',[
 P('Give the independent and dependent variables.',2,['Independent: hand used (1)','Dependent: distance the ruler falls / reaction time (1)']),
 P('Mean catch distances were 14 cm (dominant) and 19 cm (non-dominant). Calculate the percentage difference compared with the dominant hand.',2,['(19 − 14) ÷ 14 × 100 (1)','36% (1)'],35.7,'%'),
 P('Explain why the person dropping the ruler should not give a warning.',2,['The catcher could anticipate the drop (1)','So the measured value would not be a true reaction time (1)']),
 P('Suggest why the students should repeat each test several times.',2,['To reduce the effect of random variation / practice effects (1)','Identify anomalies and calculate a mean (1)']),
 P('Explain how the nervous system is involved in catching the ruler.',2,['Receptors in the eye detect the falling ruler; impulses pass along sensory neurones to the brain (1)','Impulses along motor neurones to hand muscles, which contract (1)'])]),
bshoot:Q('<p>A student grows cress seedlings in three boxes: lit from one side, lit from above, and in darkness.</p>',[
 P('Predict the direction of growth in each box.',3,['One side: bend towards the light (1)','Above: grow straight up (1)','Darkness: grow straight up, tall and pale (1)']),
 P('Explain the growth of the seedlings lit from one side.',3,['Auxin moves to the shaded side of the shoot (1)','Auxin stimulates cell elongation on the shaded side (1)','So shoots bend towards the light (1)']),
 P('Give two variables that must be controlled.',2,['Number/type/age of seeds (1)','Volume of water / temperature (1)']),
 P('Suggest how the student could measure the response quantitatively.',2,['Measure the angle of curvature with a protractor (1)','Measure the length of each shoot with a ruler and calculate a mean (1)'])]),
bfield:Q('<p>Students investigate how the number of dandelions changes with distance from a hedge using a transect.</p>',[
 P('Describe how the students should use the transect.',3,['Lay a tape measure from the hedge across the field (1)','Place a quadrat at regular intervals along the tape (1)','Count dandelions in each quadrat (1)']),
 P('Name one abiotic factor they could measure at each quadrat and the equipment used.',2,['Light intensity (1)','Light meter (1); accept soil moisture with a moisture meter, temperature with a thermometer']),
 P('In another part of the field, mean dandelions per 0.25 m² quadrat is 1.5. The area is 600 m². Estimate the number of dandelions.',3,['600 ÷ 0.25 = 2400 quadrats (1)','2400 × 1.5 (1)','3600 (1)'],3600,'dandelions'),
 P('Explain why repeating the transect in different places improves the investigation.',2,['Results more representative of the whole field (1)','Reduces the effect of an unusual area / allows a mean (1)'])]),
bdecaylab:Q('<p>A student investigates how temperature affects the rate of decay of milk using lipase and phenolphthalein, timing how long the pink colour takes to disappear.</p>',[
 P('Explain why the pink colour disappears.',2,['Lipase breaks down fat into fatty acids (1)','pH falls, so phenolphthalein becomes colourless (1)']),
 P('The colour disappears after 320 s at 25 °C. Calculate the rate using 1000 ÷ time.',2,['1000 ÷ 320 (1)','3.1 s⁻¹ (1)'],3.125,'s⁻¹'),
 P('Explain why the milk and lipase are put into the water bath separately before mixing.',2,['So both reach the test temperature (1)','Reaction does not start before the temperature is correct (1)']),
 P('Suggest why judging the colour change by eye is a source of error and how it could be reduced.',2,['End point is subjective / gradual change (1)','Use a white tile / pH probe / colour standard (1)']),
 P('Predict the result at 70 °C and explain.',2,['Colour does not change / very slow (1)','Lipase is denatured (1)'])]),
/* ---------------- Chemistry ---------------- */
salt:Q('<p>A student makes crystals of copper sulfate from copper oxide and dilute sulfuric acid.</p>',[
 P('Explain why the acid is warmed and the copper oxide is added until no more dissolves.',2,['Warming speeds up the reaction (1)','Excess ensures all the acid reacts (1)']),
 P('Describe how the excess copper oxide is removed.',1,['Filtration (1)']),
 P('Describe how to obtain pure, dry crystals from the solution.',3,['Heat the solution gently in an evaporating basin to evaporate some water (1)','Leave to cool so crystals form (1)','Pat crystals dry with filter paper / leave in a warm place (1)']),
 P('Write the word equation for the reaction.',2,['copper oxide + sulfuric acid → (1)','copper sulfate + water (1)']),
 P('Give one hazard and how to reduce the risk.',2,['Hot acid/solution can scald or spit (1)','Wear eye protection / do not boil to dryness / heat gently (1)'])]),
titr:Q('<p>A student uses a titration to find the concentration of sodium hydroxide solution using 0.100 mol/dm³ hydrochloric acid.</p>',[
 P('Describe how to measure exactly 25.0 cm³ of sodium hydroxide into the flask.',2,['Use a pipette and pipette filler (1)','Read the bottom of the meniscus on the line at eye level (1)']),
 P('Explain how the student knows the end point has been reached.',2,['Indicator changes colour, e.g. phenolphthalein pink to colourless (1)','Add acid dropwise near the end and swirl (1)']),
 P('Titres: 22.60, 22.15, 22.20, 22.10 cm³. Calculate the mean of the concordant titres.',2,['Concordant: 22.15, 22.20, 22.10 (1)','Mean = 22.15 cm³ (1)'],22.15,'cm³'),
 P('Calculate the concentration of the sodium hydroxide. (HCl + NaOH → NaCl + H₂O)',4,['Moles HCl = 0.100 × 0.02215 = 0.002215 mol (1)','Moles NaOH = 0.002215 mol (1:1) (1)','Concentration = 0.002215 ÷ 0.0250 (1)','0.0886 mol/dm³ (1)'],0.0886,'mol/dm³')]),
elec:Q('<p>A student electrolyses aqueous solutions using inert carbon electrodes and identifies the products.</p>',[
 P('Explain why the electrodes should be inert.',1,['So they do not react with the products/electrolyte (1)']),
 P('Copper chloride solution is electrolysed. Name the products at the cathode and anode.',2,['Cathode: copper (1)','Anode: chlorine (1)']),
 P('Describe the test for chlorine.',2,['Damp (blue) litmus paper (1)','Is bleached / turns white (1)']),
 P('Sodium chloride solution is electrolysed. Explain why hydrogen, not sodium, forms at the cathode.',3,['Sodium is more reactive than hydrogen (1)','H⁺ ions from water are discharged instead (1)','2H⁺ + 2e⁻ → H₂ / hydrogen gas forms (1)']),
 P('Give a safety precaution and the reason for it.',2,['Use low voltage / do in a well-ventilated room (1)','Chlorine is toxic / to avoid electric shock (1)'])]),
temp:Q('<p>A student adds sodium hydroxide solution in 5 cm³ portions to 25 cm³ of hydrochloric acid in a polystyrene cup and records the highest temperature after each addition.</p>',[
 P('Explain why a polystyrene cup with a lid is used.',2,['Polystyrene is a good insulator (1)','Reduces energy transfer to the surroundings (1)']),
 P('Starting temperature 19.5 °C; maximum 28.3 °C. Calculate the temperature rise.',1,['8.8 °C (1)'],8.8,'°C'),
 P('Is the reaction exothermic or endothermic? Explain.',2,['Exothermic (1)','Temperature of surroundings/solution increases (1)']),
 P('Explain why the temperature falls when more alkali is added after neutralisation is complete.',2,['No more reaction, so no more energy released (1)','Cooler alkali added / energy lost to surroundings (1)']),
 P('Suggest how to improve the accuracy of the temperature readings.',3,['Use a digital thermometer/probe with higher resolution (1)','Stir the mixture (1)','Repeat and calculate means / use smaller volume intervals near the maximum (1)'])]),
rate:Q('<p>A student investigates how the concentration of sodium thiosulfate affects the rate of its reaction with hydrochloric acid by timing how long it takes for a cross under the flask to disappear.</p>',[
 P('Explain why the cross disappears.',1,['A precipitate of sulfur forms, making the solution cloudy (1)']),
 P('At one concentration the cross disappears after 50 s. Calculate the rate as 1/time.',2,['1 ÷ 50 (1)','0.020 s⁻¹ (1)'],0.02,'s⁻¹'),
 P('Explain, using collision theory, why increasing the concentration increases the rate.',3,['More particles in the same volume (1)','More frequent collisions (1)','More successful collisions per second (1)']),
 P('Give two control variables.',2,['Volume/concentration of acid (1)','Temperature / same cross / same total volume (1)']),
 P('Suggest one improvement and explain why it would reduce error.',2,['Use a light sensor/data logger (1)','Removes subjective judgement of when the cross disappears (1)'])]),
chrom:Q('<p>A student uses paper chromatography to identify the dyes in a food colouring.</p>',[
 P('Explain why the start line is drawn in pencil, not ink.',2,['Pencil does not dissolve in the solvent (1)','Ink would separate and interfere with results (1)']),
 P('Explain why the start line must be above the level of the solvent.',1,['So the dyes do not dissolve into the solvent in the beaker (1)']),
 P('A dye spot moves 4.2 cm; the solvent front moves 7.0 cm. Calculate the Rf value.',2,['4.2 ÷ 7.0 (1)','0.60 (1)'],0.6,''),
 P('The food colouring produced three spots. What does this tell you?',2,['It is a mixture (1)','Of at least three dyes / it is impure (1)']),
 P('Explain how the student could identify one of the dyes.',3,['Run known dyes on the same paper (1)','Compare Rf values / heights of spots (1)','Matching Rf in the same solvent shows the same dye (1)'])]),
ions:Q('<p>A student is given an unknown white solid and carries out tests to identify the ions present.</p>',[
 P('A flame test gives a lilac flame. Identify the metal ion.',1,['Potassium, K⁺ (1)']),
 P('Describe how to carry out a flame test.',2,['Dip a clean nichrome wire loop in acid then into the solid (1)','Hold in a blue Bunsen flame and observe the colour (1)']),
 P('Describe the test for sulfate ions and the positive result.',3,['Add dilute hydrochloric acid (1)','Then barium chloride solution (1)','White precipitate (1)']),
 P('Another solution gives a blue precipitate with sodium hydroxide. Name the metal ion.',1,['Copper(II), Cu²⁺ (1)']),
 P('Explain why flame tests can be difficult to use for mixtures of metal ions.',2,['Some colours mask others (1)','Hard to identify each metal; flame emission spectroscopy can be used instead (1)']),
 P('Name the precipitate colour when silver nitrate is added to a bromide solution acidified with nitric acid.',1,['Cream (1)'])]),
water:Q('<p>A student analyses and purifies a sample of salty water.</p>',[
 P('Describe how to find the mass of dissolved solids in 50 cm³ of the sample.',3,['Weigh an empty evaporating basin (1)','Add 50 cm³ of sample and heat until all water evaporates (1)','Reweigh; difference = mass of solids (1)']),
 P('The solid had a mass of 1.75 g. Calculate the concentration of dissolved solids in g/dm³.',2,['1.75 ÷ 0.050 (1)','35 g/dm³ (1)'],35,'g/dm³'),
 P('Describe how distillation produces pure water from the sample.',3,['Heat the water so it evaporates (1)','Steam passes into a condenser and cools (1)','Water condenses and is collected; salts remain (1)']),
 P('Describe how to test that the distilled water is pure.',2,['Measure its boiling point (1)','Pure water boils at exactly 100 °C (1)'])]),
/* ---------------- Physics ---------------- */
shc:Q('<p>A student heats a 1.0 kg aluminium block with a 50 W electric heater and records its temperature every minute.</p>',[
 P('Calculate the energy supplied by the heater in 10 minutes.',2,['E = Pt = 50 × 600 (1)','30 000 J (1)'],30000,'J'),
 P('The temperature rose by 32 °C. Calculate the specific heat capacity of aluminium.',3,['c = ΔE ÷ (m Δθ) (1)','30 000 ÷ (1.0 × 32) (1)','938 J/kg °C (1)'],937.5,'J/kg °C'),
 P('The accepted value is 900 J/kg °C. Explain why the student’s value is higher.',2,['Energy lost to the surroundings (1)','So not all energy supplied raised the block’s temperature (1)']),
 P('Suggest two improvements to the method.',2,['Insulate the block (1)','Put oil in the thermometer hole for good thermal contact / use a joulemeter (1)']),
 P('Explain why the thermometer reading continues to rise after the heater is switched off.',1,['Heater is still hot and transfers energy to the block (1)'])]),
insulation:Q('<p>A student compares insulating materials by wrapping beakers of hot water and measuring the temperature drop in 10 minutes.</p>',[
 P('Give the independent and dependent variables.',2,['Independent: type of insulating material (1)','Dependent: temperature decrease in 10 minutes (1)']),
 P('Give three control variables.',3,['Volume of water (1)','Starting temperature (1)','Thickness of material / size of beaker / time (1)']),
 P('Water in beaker A cools from 80 °C to 62 °C. Water in beaker B cools from 80 °C to 71 °C. Which is the better insulator? Explain.',2,['B (1)','Smaller temperature drop (9 °C vs 18 °C), so less energy transferred (1)']),
 P('Explain why a lid should be placed on each beaker.',2,['Reduces energy transfer by evaporation/convection from the surface (1)','So the material is the only difference / fair test (1)']),
 P('Suggest why a bar chart is used to display the results.',1,['Independent variable is categoric (1)'])]),
rs:Q('<p>A student investigates how the length of a wire affects its resistance.</p>',[
 P('Draw or describe the circuit used.',3,['Ammeter in series with the wire (1)','Voltmeter in parallel with the wire (1)','Battery/power supply with crocodile clips to vary length (1)']),
 P('At 50 cm, V = 1.8 V and I = 0.30 A. Calculate the resistance.',2,['R = V ÷ I = 1.8 ÷ 0.30 (1)','6.0 Ω (1)'],6,'Ω'),
 P('Explain why the current should be kept small.',2,['Large current heats the wire (1)','Increasing resistance / temperature becomes another variable (1)']),
 P('The graph of resistance against length is a straight line that does not pass through the origin. Suggest a reason.',1,['Zero error / resistance of connecting wires and clips / contact resistance (1)']),
 P('Describe the relationship between length and resistance shown by a straight line through the origin.',2,['Resistance is directly proportional to length (1)','Doubling length doubles resistance (1)'])]),
iv:Q('<p>A student investigates the I–V characteristics of a filament lamp, a resistor and a diode.</p>',[
 P('Describe how the student changes the potential difference and gets negative values.',2,['Use a variable resistor / variable power supply (1)','Reverse the connections to the component (1)']),
 P('Describe the shape of the I–V graph for a filament lamp and explain it.',3,['Curve: gradient decreases as V increases (1)','Filament gets hotter as current increases (1)','So resistance increases (1)']),
 P('A diode has a current of 0.020 A at 0.70 V. Calculate its resistance.',2,['0.70 ÷ 0.020 (1)','35 Ω (1)'],35,'Ω'),
 P('Describe the I–V graph of a diode.',2,['No/very small current in the reverse direction (1)','Current increases sharply above about 0.6–0.7 V in forward direction (1)']),
 P('Explain why a resistor at constant temperature is described as ohmic.',1,['Current is directly proportional to potential difference / straight line through origin (1)'])]),
de:Q('<p>A student measures the density of a stone and of a wooden block.</p>',[
 P('The wooden block is 5.0 cm × 4.0 cm × 3.0 cm and has a mass of 42 g. Calculate its density in g/cm³.',3,['Volume = 60 cm³ (1)','42 ÷ 60 (1)','0.70 g/cm³ (1)'],0.7,'g/cm³'),
 P('Describe how to find the volume of the irregular stone.',3,['Fill a displacement (eureka) can to the spout (1)','Lower the stone in and collect the displaced water in a measuring cylinder (1)','Volume of water = volume of stone (1)']),
 P('Convert 0.70 g/cm³ to kg/m³.',1,['700 kg/m³ (1)'],700,'kg/m³'),
 P('Suggest two sources of error when measuring the stone’s volume.',2,['Water drips from spout after collection / water left in the can spout (1)','Reading the measuring cylinder (meniscus) / bubbles on stone (1)']),
 P('Explain how the student could make the volume measurement more precise.',1,['Use a measuring cylinder with smaller divisions / smaller cylinder (1)'])]),
sp:Q('<p>A student hangs masses on a spring and measures its extension.</p>',[
 P('A force of 4.0 N gives an extension of 0.050 m. Calculate the spring constant.',2,['k = F ÷ e = 4.0 ÷ 0.050 (1)','80 N/m (1)'],80,'N/m'),
 P('Explain why the student should read the ruler at eye level with a pointer.',2,['Avoids parallax error (1)','So length readings are accurate (1)']),
 P('Describe what the graph of force against extension shows if the limit of proportionality is exceeded.',2,['Line stops being straight / curves (1)','Extension is no longer proportional to force (1)']),
 P('Calculate the elastic potential energy stored when the spring is extended by 0.050 m.',2,['½ × 80 × 0.050² (1)','0.10 J (1)'],0.1,'J'),
 P('Give one safety precaution.',2,['Clamp the stand to the bench / use a counterweight (1)','Wear eye protection / keep feet away from falling masses (1)'])]),
ac:Q('<p>A student investigates how force affects the acceleration of a trolley using light gates.</p>',[
 P('The trolley’s speed changes from 0.20 m/s to 0.80 m/s in 0.50 s. Calculate the acceleration.',2,['(0.80 − 0.20) ÷ 0.50 (1)','1.2 m/s² (1)'],1.2,'m/s²'),
 P('Explain why masses are moved from the trolley to the hanger to increase the force.',2,['Keeps the total mass of the system constant (1)','So only the force changes / fair test (1)']),
 P('Explain why light gates give better results than a stopwatch.',2,['No human reaction time (1)','Can measure short times precisely / reduces random error (1)']),
 P('State the relationship the student should find between force and acceleration.',2,['Acceleration is directly proportional to resultant force (1)','F = ma (1)']),
 P('Suggest how the student could compensate for friction.',2,['Tilt the runway slightly (1)','Until the trolley moves at constant speed when pushed (1)'])]),
wv:Q('<p>A student uses a ripple tank to measure the speed of water waves.</p>',[
 P('Describe how to measure the wavelength.',2,['Use a ruler on the shadow pattern / photograph with a scale (1)','Measure across several waves and divide by the number of waves (1)']),
 P('10 waves pass a point in 4.0 s. Calculate the frequency.',2,['10 ÷ 4.0 (1)','2.5 Hz (1)'],2.5,'Hz'),
 P('The wavelength is 0.018 m. Calculate the wave speed.',2,['v = fλ = 2.5 × 0.018 (1)','0.045 m/s (1)'],0.045,'m/s'),
 P('Explain why measuring across ten waves gives a more accurate wavelength.',2,['Measurement uncertainty is spread over 10 waves (1)','Smaller percentage error per wavelength (1)']),
 P('Give one way of measuring the speed of waves on a string.',2,['Vibration generator and signal generator; measure λ with a metre rule (1)','Read f from the signal generator and use v = fλ (1)'])]),
lt:Q('<p>A student investigates the refraction of light through a glass block.</p>',[
 P('Describe how the student traces the path of the light ray.',3,['Draw around the block and shine a ray through it (1)','Mark the incident and emergent rays with crosses (1)','Join the points to draw the ray inside the block (1)']),
 P('Explain why the ray bends towards the normal as it enters the glass.',2,['Light slows down in glass (1)','Glass is optically denser (1)']),
 P('Explain why the room should be darkened.',1,['So the ray can be seen clearly (1)']),
 P('Suggest how the student could measure angles more accurately.',2,['Use a thin ray / sharp pencil and a protractor (1)','Draw the normal accurately at 90° / repeat and average (1)']),
 P('State what happens to a ray that enters the block along the normal.',2,['It does not change direction (1)','But it does slow down (1)'])]),
ir:Q('<p>A student uses a Leslie cube with four different surfaces filled with hot water and an infrared detector.</p>',[
 P('Give the independent and dependent variables.',2,['Independent: type of surface (1)','Dependent: infrared radiation emitted / detector reading (1)']),
 P('Predict which surface emits the most infrared radiation.',1,['Matt black (1)']),
 P('Explain why the detector should be the same distance from each surface.',2,['Intensity depends on distance (1)','So it is a fair test / only the surface affects the reading (1)']),
 P('Give one hazard and how to reduce the risk.',2,['Hot water can scald (1)','Do not touch the cube / fill carefully / wipe spills (1)']),
 P('Describe the order of the surfaces from best to worst emitter.',3,['Matt black best (1)','Shiny black / white next (1)','Shiny silver worst (1)'])])
};
function attach(id){
 const sec=document.getElementById('lab-'+id); if(!sec||!window.EXAM||sec.querySelector('.lsec.rp-exam'))return false;
 const host=document.createElement('div');host.className='lsec rp-exam';sec.appendChild(host);
 window.EXAM.attach(id,{title:'Exam-style questions on this practical',intro:'Answer as you would in the exam, then use the mark scheme to mark yourself. Equivalent scientifically correct wording is acceptable.',suffix:'-rpq',qs:[{stem:D[id].stem,parts:D[id].parts}]});
 return true;
}
function run(){ if(new URLSearchParams(location.search).get('embeddedPractical'))return; Object.keys(D).forEach(attach); }
window.GCSEPracticalQuestions={data:D,attach,run};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
