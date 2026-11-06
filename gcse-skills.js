/* Working scientifically and maths skills unit, shared by the GCSE Biology, Chemistry, Physics and Combined Science sites.
   GCSESkills.build(subject) registers the lessons and returns a hub unit. subject: 'biology' | 'chemistry' | 'physics' | 'combined'. */
(function(){
'use strict';
const ICON='<path d="M9 3h6M10 3v5l-5 9a3 3 0 0 0 2.6 4.5h8.8A3 3 0 0 0 19 17l-5-9V3"/><path d="M7.5 14h9"/>';
const UNIT='skills';
/* --- shared helpers --- */
const ul=a=>'<ul>'+a.map(x=>`<li>${x}</li>`).join('')+'</ul>';
const ms=a=>a.map((t,i)=>[String(i+1),t]);
const part=(q,m,marks,extra)=>Object.assign({q,m,lines:Math.max(2,m),ms:ms(marks)},extra||{});
const num=(a,unit,tol)=>({ans:{a,unit:unit||'',tol:tol??0.02,atol:0}});
const mcq=(q,opts,why,k)=>{ /* correct answer first in opts; k places it */ const rest=opts.slice(1),pos=k%opts.length;const o=rest.slice(0,pos).concat([opts[0]],rest.slice(pos));return {q,opts:o,a:pos,why}; };
const pick=(s,map)=>map[s]||map.combined||map.biology;

/* =========================== 1. Planning =========================== */
const L1={id:'ws-plan',title:'Planning an investigation',spec:'WS 2.1–2.2',
 intro:'Turn a question into a hypothesis and a fair, safe method that gives valid results.',
 outcomes:['Write a testable hypothesis and prediction','Identify independent, dependent and control variables','Plan a safe method with a suitable range, interval and number of repeats'],
 notes:[['Hypotheses and predictions','<p>A <b>hypothesis</b> is a proposed explanation that can be tested, often based on a scientific idea: "the rate increases with temperature because particles collide more often and with more energy". A <b>prediction</b> says what you expect to observe if the hypothesis is correct: "doubling the temperature will shorten the time".</p>'],
  ['Variables','<p>The <b>independent variable</b> is the one you change. The <b>dependent variable</b> is the one you measure. <b>Control variables</b> are kept the same so that only the independent variable affects the result. A <b>categoric</b> variable has values that are labels (type of metal); a <b>continuous</b> variable can take any numerical value (temperature).</p><p>A <b>fair test</b> changes only the independent variable. In field studies where you cannot control everything (for example weather), you <b>monitor</b> the uncontrolled variables and choose a large sample.</p>'],
  ['Range, interval, repeats and safety','<p>Choose a <b>range</b> wide enough to show a pattern and at least five values with an even <b>interval</b>. Repeat each value (usually three times) so anomalies can be spotted and a mean calculated. A <b>risk assessment</b> names each hazard, the risk it causes and how to reduce it, for example "hot water bath: scalding: use tongs and keep below 60 °C".</p>']],
 example:{biology:['Planning an enzyme investigation','Plan how temperature affects how quickly amylase digests starch.',[['Variables','Name all three types.',['IV: temperature (20, 30, 40, 50, 60 °C)','DV: time for iodine to stop turning blue-black','Controls: volume and concentration of starch and amylase, pH (buffer)']],['Method','Short, numbered steps.',['Warm starch and amylase separately in a water bath for 5 min, then mix and start the timer.','Test a drop with iodine every 30 s.']],['Repeats and safety','',['Repeat three times at each temperature and find the mean.','Wear eye protection; iodine is an irritant.']]]],
  chemistry:['Planning a rate investigation','Plan how acid concentration affects the rate of reaction between magnesium and hydrochloric acid.',[['Variables','',['IV: acid concentration (0.2–1.0 mol/dm³)','DV: volume of hydrogen in 60 s, measured with a gas syringe','Controls: length of magnesium ribbon, volume of acid, temperature']],['Method','',['Add 50 cm³ of acid to a conical flask connected to a gas syringe.','Add 3 cm of magnesium, start the timer and read the volume after 60 s.']],['Repeats and safety','',['Repeat each concentration three times.','Wear eye protection; hydrogen is flammable, so no flames nearby.']]]],
  physics:['Planning a resistance investigation','Plan how the length of a wire affects its resistance.',[['Variables','',['IV: length (10, 20, 30, 40, 50 cm)','DV: resistance, from V ÷ I','Controls: material, diameter, current kept low (so temperature stays constant)']],['Method','',['Connect the wire with an ammeter in series and a voltmeter in parallel.','Measure V and I at each length using crocodile clips on a metre rule.']],['Repeats and safety','',['Repeat and calculate a mean resistance for each length.','Switch off between readings; the wire can get hot.']]]]},
 checks:[['What is the dependent variable?',['The variable you measure','The variable you change','A variable kept constant','A variable that cannot be measured'],'You measure the dependent variable.'],
  ['Which is a control variable when testing how light intensity affects photosynthesis?',['Temperature','Light intensity','Rate of bubbling','Distance of the lamp'],'Temperature must be kept the same.'],
  ['Which is a categoric variable?',['Type of metal','Temperature','Mass','Time'],'Categoric variables are labels.'],
  ['Why should each reading be repeated?',['To spot anomalies and calculate a mean','To make the experiment longer','To change the independent variable','To make the test unfair'],'Repeats improve repeatability.'],
  ['What makes a hypothesis different from a prediction?',['A hypothesis is a testable explanation; a prediction is the expected result','They are the same','A prediction explains why','A hypothesis is a measurement'],'Hypotheses explain; predictions say what will happen.'],
  ['In a field study the temperature cannot be controlled. What should the scientist do?',['Monitor it and use a large sample','Ignore it','Change it deliberately','Stop the study'],'Monitoring lets its effect be considered.']],
 exam:[{stem:'A student investigates how the mass of sugar dissolved in water affects the time it takes for the water to freeze.',parts:[part('Identify the independent and dependent variables.',2,['Independent: mass of sugar (1)','Dependent: time to freeze (1)']),part('Give two control variables.',2,['Volume of water (1)','Starting temperature / freezer temperature / type of container (1)']),part('Suggest a suitable range and number of values for the independent variable.',2,['e.g. 0 g to 20 g (1)','At least five values at equal intervals, e.g. 0, 5, 10, 15, 20 g (1)'])]},
  {stem:'',parts:[part('Write a risk assessment for heating a liquid in a beaker over a Bunsen burner.',3,['Hazard: hot liquid / burner flame (1)','Risk: scalds/burns, clothing or hair catching fire (1)','Control: eye protection, tie hair back, use a tripod and gauze / do not overfill / let cool before moving (1)'])]},
  {stem:'',parts:[part('Explain why scientists use large sample sizes in medical studies.',2,['Reduces the effect of individual variation / random error (1)','Results more representative, so conclusions are more valid (1)'])]}],
 keypoints:['Change one variable (independent), measure one (dependent), control the rest.','Use at least five values at equal intervals and repeat each reading.'],
 mistakes:['Writing "the amount" instead of naming exactly what is measured and its unit.','Listing the independent variable as a control variable.']};

/* =========================== 2. Using equipment =========================== */
const L2={id:'ws-measure',title:'Using equipment and measuring',spec:'WS 2.3–2.4',
 intro:'Choose the right instrument, read it correctly and quote a measurement with its uncertainty.',
 outcomes:['Choose equipment with a suitable resolution','Read scales, meniscuses and digital meters correctly','Estimate uncertainty and use SI units and prefixes'],
 notes:[['Choosing equipment','<p>The <b>resolution</b> of an instrument is the smallest change it can show: a ruler marked in mm has a resolution of 1 mm; a balance reading 0.01 g has a resolution of 0.01 g. Choose an instrument whose resolution is small compared with the size of the measurement. To measure 25.0 cm³ of liquid, a measuring cylinder (±0.5 cm³) is less precise than a burette or pipette (±0.05 cm³).</p>'],
  ['Reading scales','<p>Read a liquid level at the bottom of the <b>meniscus</b> with your eye level with it, to avoid parallax error. Check that balances, meters and newton-meters read zero before use (a <b>zero error</b> adds the same amount to every reading). For a timer, human reaction time limits precision, so use longer timings or light gates.</p>'],
  ['Uncertainty and units','<p><b>Uncertainty</b> can be estimated as half the range of repeat readings: for 12.1, 12.5 and 12.3 s the mean is 12.3 s and the uncertainty is ±0.2 s. Use SI units and prefixes: k = 10³, m = 10⁻³, μ = 10⁻⁶, n = 10⁻⁹. So 2.5 kJ = 2500 J and 450 nm = 4.5 × 10⁻⁷ m.</p>']],
 example:{biology:['Choosing a measuring instrument','A student needs 5.0 cm³ of enzyme solution. Which is better: a 100 cm³ measuring cylinder or a 10 cm³ syringe?',[['Compare resolution','',['100 cm³ cylinder: marked every 1 cm³','10 cm³ syringe: marked every 0.2 cm³']],['Relative error','',['±0.5 cm³ in 5 cm³ is 10%; ±0.1 cm³ is 2%']],['Choose','',['The syringe, because its uncertainty is much smaller compared with the volume.']]]],
  chemistry:['Uncertainty from repeat titres','Titres: 24.10, 24.30, 24.20 cm³. Give the mean and uncertainty.',[['Mean','',['(24.10 + 24.30 + 24.20) ÷ 3 = 24.20 cm³']],['Range','',['24.30 − 24.10 = 0.20 cm³']],['Uncertainty','Half the range.',['24.20 ± 0.10 cm³']]]],
  physics:['Using prefixes','A current is 250 mA and a resistance is 4.0 kΩ. Calculate the potential difference.',[['Convert to SI','',['250 mA = 0.250 A; 4.0 kΩ = 4000 Ω']],['Equation','V = I R',['V = 0.250 × 4000']],['Answer','',['V = 1000 V (1.0 kV)']]]]},
 checks:[['What is the resolution of a thermometer marked every 0.5 °C?',['0.5 °C','1 °C','0.1 °C','5 °C'],'Resolution is the smallest scale division.'],
  ['Where should you read a measuring cylinder?',['At the bottom of the meniscus at eye level','At the top of the meniscus from above','Anywhere on the curve','From below the bench'],'This avoids parallax error.'],
  ['A balance reads 0.02 g with nothing on it. This is a…',['zero error','random error','resolution','parallax error'],'The reading is wrong by the same amount every time.'],
  ['Repeat readings: 4.2, 4.6, 4.4 s. Uncertainty?',['±0.2 s','±0.4 s','±0.1 s','±4.4 s'],'Half the range: 0.4 ÷ 2.'],
  ['Convert 3.6 kJ to joules.',['3600 J','0.0036 J','360 J','36 000 J'],'k means × 1000.'],
  ['Which piece of equipment measures 25.0 cm³ most precisely?',['Pipette','Beaker','Measuring cylinder (100 cm³)','Conical flask'],'Pipettes have small uncertainty.']],
 exam:[{stem:'A student measures the temperature of water every minute with a thermometer that has a resolution of 1 °C.',parts:[part('Suggest a better instrument and explain why.',2,['Digital thermometer / temperature probe with resolution 0.1 °C (1)','Smaller resolution, so smaller changes can be detected / more precise (1)']),part('Repeat readings at 5 minutes were 41 °C, 43 °C and 42 °C. Give the mean and the uncertainty.',2,['Mean = 42 °C (1)','Uncertainty ±1 °C (1)'])]},
  {stem:'',parts:[part('Write 0.000 35 m in standard form and in micrometres.',2,['3.5 × 10⁻⁴ m (1)','350 μm (1)'])]},
  {stem:'',parts:[part('Explain how a zero error affects the accuracy and precision of results.',3,['A zero error is a systematic error (1)','All readings are shifted by the same amount, so accuracy is reduced (1)','Precision / spread of repeats is not affected (1)'])]}],
 keypoints:['Resolution is the smallest change an instrument can show.','Uncertainty ≈ half the range of repeat readings.'],
 mistakes:['Reading the top of the meniscus.','Forgetting to convert prefixes (mA, kJ) before using an equation.']};

/* =========================== 3. Observing and recording =========================== */
const L3={id:'ws-record',title:'Observing and recording results',spec:'WS 3.1–3.2',
 intro:'Record results clearly, spot anomalies and calculate means to a sensible number of significant figures.',
 outcomes:['Draw results tables with headings and units','Identify anomalous results and calculate a mean','Use a sensible number of significant figures and decimal places'],
 notes:[['Results tables','<p>Put the independent variable in the first column and repeats of the dependent variable in the next columns, followed by the mean. Headings include the quantity and unit, for example "Temperature in °C" or "Time / s"; units go in the heading, not in each cell. Record all readings to the same number of decimal places, matching the resolution of the instrument.</p><table class="ws-table" style="border-collapse:collapse;margin-top:.6em"><thead><tr><th style="border:1px solid currentColor;padding:4px 8px">Temperature in °C</th><th style="border:1px solid currentColor;padding:4px 8px">Time 1 in s</th><th style="border:1px solid currentColor;padding:4px 8px">Time 2 in s</th><th style="border:1px solid currentColor;padding:4px 8px">Time 3 in s</th><th style="border:1px solid currentColor;padding:4px 8px">Mean time in s</th></tr></thead><tbody><tr><td style="border:1px solid currentColor;padding:4px 8px">20</td><td style="border:1px solid currentColor;padding:4px 8px">64</td><td style="border:1px solid currentColor;padding:4px 8px">66</td><td style="border:1px solid currentColor;padding:4px 8px">62</td><td style="border:1px solid currentColor;padding:4px 8px">64</td></tr><tr><td style="border:1px solid currentColor;padding:4px 8px">30</td><td style="border:1px solid currentColor;padding:4px 8px">41</td><td style="border:1px solid currentColor;padding:4px 8px">58</td><td style="border:1px solid currentColor;padding:4px 8px">43</td><td style="border:1px solid currentColor;padding:4px 8px">42 (58 is anomalous)</td></tr></tbody></table>'],
  ['Anomalies and means','<p>An <b>anomalous result</b> does not fit the pattern of the others. Check it, repeat it if possible, and leave it out of the mean. Mean = sum of values ÷ number of values. For 23, 25, 41 and 24, 41 is anomalous, so the mean is (23 + 25 + 24) ÷ 3 = 24.</p>'],
  ['Significant figures','<p>Give a calculated answer to the same number of significant figures as the least precise data used, usually 2 or 3. 0.004 56 has 3 significant figures; 45 600 has 3 if the zeros are placeholders. Median = the middle value in order; mode = the most common value.</p>']],
 example:{biology:['Mean with an anomaly','Pulse rates after exercise: 128, 132, 96, 130 beats/min. Calculate the mean.',[['Spot the anomaly','',['96 is much lower than the others.']],['Exclude it','',['(128 + 132 + 130) ÷ 3']],['Mean','',['= 130 beats/min']]]],
  chemistry:['Concordant titres','Titres: 23.45, 22.90, 22.95, 22.85 cm³. Which should be used and what is the mean?',[['Concordant results','Within 0.10 cm³ of each other.',['22.90, 22.95 and 22.85 cm³ are concordant; 23.45 is the rough titre.']],['Mean','',['(22.90 + 22.95 + 22.85) ÷ 3 = 22.90 cm³']],['Precision','Two decimal places, as read from a burette.',['Mean titre = 22.90 cm³']]]],
  physics:['Recording a timing','Times for a trolley: 2.31, 2.28, 2.35 s. Give the mean to a suitable precision.',[['Sum','',['2.31 + 2.28 + 2.35 = 6.94 s']],['Mean','',['6.94 ÷ 3 = 2.3133… s']],['Round','Match the data (2 decimal places).',['Mean = 2.31 s']]]]},
 checks:[['Where should units go in a results table?',['In the column headings','In every cell','Under the table','Nowhere'],'Units belong in the headings.'],
  ['Mean of 12, 14, 13 and 30 (30 is anomalous)?',['13','17.25','14','12'],'(12 + 14 + 13) ÷ 3 = 13.'],
  ['How many significant figures in 0.0507?',['3','4','2','5'],'Leading zeros do not count.'],
  ['Which column comes first in a results table?',['Independent variable','Dependent variable','Mean','Control variables'],'The variable you change goes first.'],
  ['The median of 4, 9, 6, 2, 7 is…',['6','5.6','7','9'],'In order: 2, 4, 6, 7, 9.'],
  ['Why exclude an anomalous result from a mean?',['It would distort the mean','It makes the mean too precise','It is always the highest value','It is the control'],'Including it gives a misleading average.']],
 exam:[{stem:'A student records the volume of gas produced every 30 seconds: 0 s: 0 cm³; 30 s: 18 cm³; 60 s: 31 cm³; 90 s: 52 cm³; 120 s: 46 cm³; 150 s: 49 cm³.',parts:[part('Identify the anomalous result and explain your choice.',2,['90 s / 52 cm³ (1)','Volume is higher than at 120 s / does not fit the pattern of increasing then levelling off (1)']),part('Suggest one cause of this anomaly.',1,['Misread the syringe / timing error / gas syringe stuck then jumped (1)'])]},
  {stem:'',parts:[part('Calculate the mean of 3.42, 3.38, 3.51 and 3.40 g. Give your answer to 3 significant figures.',2,['(3.42 + 3.38 + 3.51 + 3.40) ÷ 4 = 3.4275 (1)','3.43 g (1)'],num(3.43,'g',0.003))]},
  {stem:'',parts:[part('Describe how to draw a results table for an investigation into how temperature affects reaction time, with three repeats.',3,['First column: temperature in °C (1)','Three columns for repeat times with unit in heading (1)','Column for mean time; values to consistent decimal places (1)'])]}],
 keypoints:['Units in headings; independent variable in the first column.','Exclude anomalies before calculating a mean.'],
 mistakes:['Recording 12, 12.5 and 12.25 in the same column (inconsistent decimal places).','Giving a mean to more significant figures than the data.']};

/* =========================== 4. Analysing =========================== */
const L4={id:'ws-analyse',title:'Analysing data and drawing graphs',spec:'WS 3.3–3.5',
 intro:'Choose the right graph, draw a line of best fit, read gradients and write conclusions supported by evidence.',
 outcomes:['Choose bar charts or line graphs and plot them accurately','Find a gradient and use a tangent for a rate (Higher)','Describe patterns, and tell correlation from cause'],
 notes:[['Which graph?','<p>Use a <b>bar chart</b> when the independent variable is categoric, and a <b>line graph</b> (scatter plot) when both variables are continuous. Put the independent variable on the x-axis, label both axes with units, and choose a scale that uses at least half the grid. Plot points with small neat crosses.</p>'],
  ['Lines and gradients','<p>Draw a smooth <b>line of best fit</b> (straight or curved) with points evenly on both sides; ignore anomalies. A straight line through the origin shows <b>direct proportion</b>. Gradient = change in y ÷ change in x, using a large triangle. On a curve, the rate at one moment is the gradient of a <b>tangent</b> drawn at that point (Higher).</p>'],
  ['Writing conclusions','<p>Describe the pattern ("as X increases, Y increases"), quote data, then explain it using science. A correlation does not prove that one variable causes the other: there may be a third factor or chance. Percentage change = (new − original) ÷ original × 100.</p>']],
 example:{biology:['Rate from a gradient','Oxygen produced rises from 2.0 cm³ at 1 min to 10.0 cm³ at 5 min (straight line). Find the rate.',[['Change in y','',['10.0 − 2.0 = 8.0 cm³']],['Change in x','',['5 − 1 = 4 min']],['Gradient','',['8.0 ÷ 4 = 2.0 cm³/min']]]],
  chemistry:['Tangent on a curve (Higher)','A tangent at 40 s on a gas-volume curve passes through (0 s, 10 cm³) and (80 s, 50 cm³). Find the rate at 40 s.',[['Δy','',['50 − 10 = 40 cm³']],['Δx','',['80 − 0 = 80 s']],['Rate','',['40 ÷ 80 = 0.50 cm³/s']]]],
  physics:['Gradient of a distance–time graph','A straight line passes through (2 s, 6 m) and (8 s, 30 m). Find the speed.',[['Δy','',['30 − 6 = 24 m']],['Δx','',['8 − 2 = 6 s']],['Speed','gradient = distance ÷ time',['24 ÷ 6 = 4.0 m/s']]]]},
 checks:[['The independent variable is "type of food". Which graph?',['Bar chart','Line graph','Pie chart','Histogram of time'],'Categoric data use a bar chart.'],
  ['What does a straight line through the origin show?',['Direct proportion','No relationship','Inverse proportion','An anomaly'],'Y doubles when X doubles.'],
  ['A line passes through (0, 0) and (4, 20). Gradient?',['5','80','0.2','24'],'20 ÷ 4 = 5.'],
  ['Mass changes from 50 g to 42 g. Percentage change?',['−16%','−8%','+16%','−19%'],'(42 − 50) ÷ 50 × 100.'],
  ['Ice-cream sales and sunburn cases both rise in summer. This shows…',['correlation, caused by a third factor (sunshine)','ice cream causes sunburn','sunburn causes ice-cream sales','no correlation'],'Both are caused by hot sunny weather.'],
  ['How is the rate at a point on a curve found?',['Gradient of a tangent at that point','Reading the y-value','Area under the curve','Dividing y by x at the origin'],'The tangent gives the instantaneous rate.']],
 exam:[{stem:'Students measured how the temperature of water affects the time taken for a sugar cube to dissolve. 20 °C: 120 s; 30 °C: 85 s; 40 °C: 60 s; 50 °C: 42 s; 60 °C: 30 s.',parts:[part('Describe the pattern shown by the results.',2,['As temperature increases, time decreases (1)','Decrease gets smaller at higher temperatures / not proportional, quoting data (1)']),part('Calculate the percentage decrease in time from 20 °C to 60 °C.',2,['(30 − 120) ÷ 120 × 100 (1)','75% decrease (1)'],num(75,'%')),part('Explain why a line graph is suitable for these data.',1,['Both variables are continuous (1)'])]},
  {stem:'',parts:[part('A study finds that people who drink more coffee have more heart disease. Explain why this does not show that coffee causes heart disease.',3,['It shows a correlation only (1)','Another factor may cause both, e.g. smoking, stress, age (1)','Need a controlled study / mechanism to show causation (1)'])]},
  {stem:'',parts:[part('Describe how to draw a line graph from a table of results.',4,['Independent variable on x-axis, dependent on y-axis (1)','Label axes with quantities and units (1)','Choose scales using at least half the grid; plot points accurately (1)','Draw a line or smooth curve of best fit, ignoring anomalies (1)'])]}],
 keypoints:['Bar chart for categoric data; line graph for continuous data.','Gradient = Δy ÷ Δx; for curves use a tangent.'],
 mistakes:['Joining points dot-to-dot instead of drawing a line of best fit.','Saying a correlation proves cause.']};

/* =========================== 5. Evaluating =========================== */
const L5={id:'ws-evaluate',title:'Evaluating methods and results',spec:'WS 3.6–3.8',
 intro:'Judge how far results can be trusted, name the errors involved and suggest improvements.',
 outcomes:['Use accuracy, precision, repeatability, reproducibility and validity correctly','Tell random errors from systematic errors','Suggest specific improvements to a method'],
 notes:[['Key terms','<p><b>Accurate</b>: close to the true value. <b>Precise</b>: repeat readings close together (small spread). <b>Repeatable</b>: the same person using the same method gets similar results. <b>Reproducible</b>: a different person, or a different method or equipment, gets similar results. <b>Valid</b>: the investigation answers the question, because only the independent variable affected the result.</p>'],
  ['Errors','<p><b>Random errors</b> make readings vary unpredictably (for example reaction time when using a stopwatch, or a fluctuating reading). They reduce precision; repeating and averaging reduces their effect. <b>Systematic errors</b> shift every reading by the same amount or proportion (zero error, a thermometer that reads 2 °C high, heat lost to the surroundings). They reduce accuracy and are not removed by repeating.</p>'],
  ['Suggesting improvements','<p>Be specific: "use a gas syringe instead of counting bubbles", "use a data logger to record temperature every second", "insulate the beaker with a lid to reduce energy lost", "take readings at smaller intervals between 30 °C and 40 °C to find the optimum more precisely". Peer review lets other scientists check methods and conclusions.</p>']],
 example:{biology:['Evaluating a pondweed investigation','A student counted bubbles from pondweed at different lamp distances. Evaluate the method.',[['Weakness 1','Measurement.',['Bubbles vary in size, so counting is not an accurate measure of oxygen volume.']],['Weakness 2','Control.',['The lamp heats the water, so temperature was not controlled.']],['Improvements','',['Collect gas in a syringe; use an LED or a heat shield and check temperature with a thermometer.']]]],
  chemistry:['Evaluating an energy-change experiment','The temperature rise for a neutralisation was lower than the data-book value. Explain and improve.',[['Error type','',['Systematic error: energy was lost to the surroundings.']],['Effect','',['Every temperature rise is too low, so accuracy is reduced.']],['Improvement','',['Use a polystyrene cup with a lid, stir, and read the maximum temperature.']]]],
  physics:['Evaluating a specific heat capacity result','A student finds c = 5200 J/kg °C for water (true value 4200). Explain the difference.',[['Direction','',['The value is too high.']],['Cause','Systematic error.',['Energy was lost to the surroundings, so more energy was supplied than went into the water.']],['Improvement','',['Insulate the beaker, add a lid, and start below room temperature.']]]]},
 checks:[['Results are close together but far from the true value. They are…',['precise but not accurate','accurate but not precise','accurate and precise','valid and accurate'],'Small spread, wrong mean.'],
  ['Which is a systematic error?',['A thermometer that reads 1 °C too high','Variation in reaction time','A gust of wind once','Misreading one value'],'It affects every reading equally.'],
  ['How can the effect of random errors be reduced?',['Repeat readings and calculate a mean','Recalibrate the instrument','Use a larger range only','Change the dependent variable'],'Averages reduce random variation.'],
  ['Another class uses a different method and gets similar results. The results are…',['reproducible','repeatable only','anomalous','invalid'],'Reproducible means others can obtain them.'],
  ['An investigation is valid if…',['it measures what it sets out to measure, with other variables controlled','it uses expensive equipment','it has many anomalies','it gives a big number'],'Validity depends on a fair test.'],
  ['Which improvement reduces human timing error?',['Using a light gate and data logger','Using a stopwatch with more digits','Reading faster','Using a smaller range'],'Automatic timing removes reaction time.']],
 exam:[{stem:'',parts:[part('Explain the difference between repeatable and reproducible results.',2,['Repeatable: same person, same method/equipment gets similar results (1)','Reproducible: different person/method/equipment gets similar results (1)'])]},
  {stem:'',parts:[part('A student uses a stopwatch to time how long a ball takes to fall 1.0 m. Readings vary from 0.38 s to 0.52 s. Evaluate the method and suggest improvements.',4,['Large spread shows random error / low precision (1)','Due to human reaction time when starting/stopping (1)','Use light gates/data logger or video analysis (1)','Use a larger drop height so timing errors are a smaller fraction / repeat and average (1)'])]},
  {stem:'',parts:[part('Explain why scientific findings are peer reviewed before publication.',2,['Other scientists check the method, data and conclusions (1)','To detect errors or bias and ensure findings are valid (1)'])]}],
 keypoints:['Random error → poor precision → repeat and average.','Systematic error → poor accuracy → fix the method or instrument.'],
 mistakes:['Using "reliable" when the question asks about repeatability or precision.','Suggesting "be more careful" instead of a specific improvement.']};

/* =========================== 6. Subject calculation pages =========================== */
/* Each item: [question, answer, unit, why, tag] tag 'sep' = separate science only, 'ht' = Higher */
const CALC={
 biology:{id:'ws-calc-bio',title:'Biology maths: mixed practice',spec:'Maths skills',intro:'Practise the calculations that appear in biology papers: magnification, percentages, means, rates, ratios, probability and estimates.',
  notes:'<p><b>Equations to know:</b> magnification = image size ÷ real size; percentage change = (final − initial) ÷ initial × 100; rate = amount ÷ time (or 1000 ÷ time); population ≈ mean per quadrat × (total area ÷ quadrat area); efficiency = biomass transferred ÷ biomass available × 100; cardiac output = stroke volume × heart rate; area of a circle = πr².</p><p><b>Units:</b> 1 mm = 1000 μm; 1 dm³ = 1000 cm³. Always show working: method marks are available even if the final answer is wrong.</p>',
  items:[['An image of a cell is 45 mm long at × 1500 magnification. Calculate the real length in μm.',30,'μm','45 ÷ 1500 = 0.03 mm = 30 μm.'],
   ['A potato cylinder changes from 2.40 g to 2.70 g. Calculate the percentage change in mass.',12.5,'%','0.30 ÷ 2.40 × 100 = 12.5%.'],
   ['A cube of side 3 cm. Calculate the surface area to volume ratio (x : 1).',2,': 1','54 ÷ 27 = 2.'],
   ['Starch disappears in 40 s. Calculate the rate as 1000 ÷ time.',25,'s⁻¹','1000 ÷ 40 = 25.'],
   ['Stroke volume 75 cm³, heart rate 68 beats/min. Calculate cardiac output in cm³/min.',5100,'cm³/min','75 × 68 = 5100.'],
   ['Mean 6 plants per 0.25 m² quadrat; field 1200 m². Estimate the population.',28800,'plants','(1200 ÷ 0.25) × 6.'],
   ['Producers 8000 kg, primary consumers 640 kg. Calculate efficiency of transfer.',8,'%','640 ÷ 8000 × 100.'],
   ['Aa × Aa: give the percentage of offspring expected to be aa.',25,'%','1 of 4 outcomes.'],
   ['A clear zone has diameter 18 mm. Calculate its area (π = 3.14).',254.34,'mm²','3.14 × 9² = 254.34 mm².','sep'],
   ['A bacterium divides every 20 minutes. How many bacteria come from one after 3 hours?',512,'bacteria','9 divisions; 2⁹ = 512.','sep'],
   ['Light intensity is 100 units at 10 cm. Calculate intensity at 25 cm (inverse square law).',16,'units','100 × (10/25)² = 16.','ht'],
   ['Extra oxygen uptake averages 1.2 dm³/min for 5 minutes. Calculate the oxygen debt.',6,'dm³','1.2 × 5 = 6.0 dm³.','ht']]},
 chemistry:{id:'ws-calc-chem',title:'Chemical calculations: mixed practice',spec:'4.3 · Maths skills',intro:'Practise every type of chemistry calculation in one place: relative formula mass, percentage by mass, moles, reacting masses, concentration, titrations, gas volumes, yield and atom economy.',
  notes:'<p><b>Key equations:</b> moles = mass ÷ Mr; concentration (g/dm³) = mass ÷ volume (dm³); concentration (mol/dm³) = moles ÷ volume (dm³); volume of gas at RTP = moles × 24 dm³ (separate chemistry); percentage yield = actual ÷ theoretical × 100 (separate); atom economy = Mr of desired product ÷ total Mr of reactants × 100 (separate).</p><p><b>Reacting masses method:</b> (1) moles of the known substance; (2) use the balanced equation ratio; (3) mass = moles × Mr. Convert cm³ to dm³ by dividing by 1000. Relative atomic masses: H 1, C 12, N 14, O 16, Na 23, Mg 24, S 32, Cl 35.5, Ca 40, Cu 63.5.</p>',
  items:[['Calculate the relative formula mass (Mr) of CaCO₃.',100,'','40 + 12 + 3 × 16 = 100.'],
   ['Calculate the percentage by mass of oxygen in MgO.',40,'%','16 ÷ 40 × 100 = 40%.'],
   ['How many moles are in 11 g of CO₂?',0.25,'mol','Mr = 44; 11 ÷ 44 = 0.25 mol.','ht'],
   ['Mg + 2HCl → MgCl₂ + H₂. What mass of MgCl₂ forms from 4.8 g of Mg? (Mr MgCl₂ = 95)',19,'g','0.20 mol Mg → 0.20 mol MgCl₂; 0.20 × 95 = 19 g.','ht'],
   ['5.0 g of salt is dissolved to make 250 cm³ of solution. Concentration in g/dm³?',20,'g/dm³','5.0 ÷ 0.250 = 20 g/dm³.'],
   ['0.050 mol of NaOH in 200 cm³. Concentration in mol/dm³?',0.25,'mol/dm³','0.050 ÷ 0.200 = 0.25 mol/dm³.','sep ht'],
   ['25.0 cm³ of NaOH is neutralised by 20.0 cm³ of 0.10 mol/dm³ HCl (1 : 1). Concentration of NaOH in mol/dm³?',0.08,'mol/dm³','0.0020 mol HCl → 0.0020 mol NaOH; 0.0020 ÷ 0.0250 = 0.080.','sep ht'],
   ['What volume does 0.40 mol of a gas occupy at room temperature and pressure? (24 dm³/mol)',9.6,'dm³','0.40 × 24 = 9.6 dm³.','sep ht'],
   ['The theoretical yield is 12.0 g and the actual yield is 9.0 g. Percentage yield?',75,'%','9.0 ÷ 12.0 × 100.','sep'],
   ['CaCO₃ → CaO + CO₂. Calculate the atom economy for CaO. (Mr CaCO₃ = 100, CaO = 56)',56,'%','56 ÷ 100 × 100 = 56%.','sep'],
   ['A mass of 2.40 g of magnesium burns to form 4.00 g of magnesium oxide. What mass of oxygen reacted?',1.6,'g','Conservation of mass: 4.00 − 2.40 = 1.60 g.'],
   ['60 cm³ of gas is produced in 25 s. Calculate the mean rate in cm³/s.',2.4,'cm³/s','60 ÷ 25 = 2.4 cm³/s.']]},
 physics:{id:'ws-calc-phys',title:'Physics equations: recall and rearrange',spec:'Maths skills · equations',intro:'Practise choosing, rearranging and using the GCSE physics equations, with unit conversions.',
  notes:'<p><b>Method:</b> (1) write the equation; (2) convert to SI units (kg, m, s, A, V, Ω, J, W); (3) rearrange; (4) substitute; (5) give the answer with a unit. Equations you must recall include: W = mg; E<sub>k</sub> = ½mv²; E<sub>p</sub> = mgh; P = E ÷ t; efficiency = useful output ÷ total input; Q = It; V = IR; P = VI; P = I²R; E = Pt; ρ = m ÷ V; v = s ÷ t; a = Δv ÷ t; F = ma; W = Fs; F = ke; v = fλ; p = mv (Higher).</p><p><b>Given on the sheet:</b> ΔE = mcΔθ; E = mL; E<sub>e</sub> = ½ke²; v² − u² = 2as; F = BIl (Higher).</p>',
  items:[['A 0.50 kg ball moves at 6.0 m/s. Calculate its kinetic energy.',9,'J','½ × 0.50 × 6.0² = 9.0 J.'],
   ['A 60 kg climber rises 15 m (g = 9.8 N/kg). Calculate the gain in gravitational potential energy.',8820,'J','60 × 9.8 × 15 = 8820 J.'],
   ['A kettle transfers 180 kJ in 1 minute. Calculate its power in W.',3000,'W','180 000 ÷ 60 = 3000 W.'],
   ['A lamp has V = 12 V and I = 0.50 A. Calculate its resistance.',24,'Ω','R = V ÷ I = 24 Ω.'],
   ['A charge of 120 C flows in 40 s. Calculate the current.',3,'A','I = Q ÷ t = 3.0 A.'],
   ['A heater draws 5.0 A from a 230 V supply. Calculate its power.',1150,'W','P = VI = 1150 W.'],
   ['Calculate the energy needed to heat 2.0 kg of water by 15 °C (c = 4200 J/kg °C).',126000,'J','2.0 × 4200 × 15 = 126 000 J.'],
   ['A 0.040 m³ block has a mass of 108 kg. Calculate its density.',2700,'kg/m³','108 ÷ 0.040 = 2700 kg/m³.'],
   ['A car accelerates from 4 m/s to 24 m/s in 8.0 s. Calculate the acceleration.',2.5,'m/s²','(24 − 4) ÷ 8.0 = 2.5 m/s².'],
   ['A resultant force of 1200 N acts on an 800 kg car. Calculate the acceleration.',1.5,'m/s²','a = F ÷ m = 1.5 m/s².'],
   ['A spring of k = 40 N/m is stretched by 0.15 m. Calculate the force.',6,'N','F = ke = 6.0 N.'],
   ['A wave has frequency 50 Hz and wavelength 0.40 m. Calculate its speed.',20,'m/s','v = fλ = 20 m/s.'],
   ['Calculate the momentum of a 70 kg runner moving at 8.0 m/s.',560,'kg m/s','p = mv = 560 kg m/s.','ht'],
   ['A 0.25 m wire carries 2.0 A at right angles to a 0.30 T field. Calculate the force.',0.15,'N','F = BIl = 0.30 × 2.0 × 0.25 = 0.15 N.','ht'],
   ['A force of 600 N acts on an area of 0.20 m². Calculate the pressure.',3000,'Pa','p = F ÷ A = 600 ÷ 0.20 = 3000 Pa.','sep']]}
};

const EX_CALC={
 biology:[{stem:'A student uses a microscope to look at onion cells. A drawing of a cell is 72 mm long. The real cell is 0.12 mm long.',parts:[part('Calculate the magnification of the drawing.',2,['72 ÷ 0.12 (1)','× 600 (1)'],num(600,'')),part('Another cell is 0.09 mm long. Calculate its length in the drawing at the same magnification.',2,['0.09 × 600 (1)','54 mm (1)'],num(54,'mm'))]},
  {stem:'In a sample of 160 fish, 24 carry a parasite.',parts:[part('Calculate the percentage of fish carrying the parasite.',2,['24 ÷ 160 × 100 (1)','15% (1)'],num(15,'%')),part('The lake contains about 4500 fish. Estimate how many carry the parasite.',2,['0.15 × 4500 (1)','675 (1)'],num(675,'fish'))]}],
 chemistry:[{stem:'Calcium carbonate decomposes: CaCO₃ → CaO + CO₂. (Ar: Ca 40, C 12, O 16)',parts:[part('Calculate the Mr of CaCO₃ and of CaO.',2,['CaCO₃ = 100 (1)','CaO = 56 (1)']),part('Calculate the mass of CaO produced from 25 g of CaCO₃.',3,['Moles CaCO₃ = 25 ÷ 100 = 0.25 (1)','Moles CaO = 0.25 (1:1 ratio) (1)','Mass = 0.25 × 56 = 14 g (1)'],num(14,'g'))]},
  {stem:'A student dissolves 2.0 g of sodium hydroxide in water to make 500 cm³ of solution.',parts:[part('Calculate the concentration in g/dm³.',2,['500 cm³ = 0.500 dm³ (1)','2.0 ÷ 0.500 = 4.0 g/dm³ (1)'],num(4,'g/dm³'))]}],
 physics:[{stem:'An electric kettle is rated 2.2 kW and is connected to the 230 V mains.',parts:[part('Calculate the current in the kettle.',3,['P = VI so I = P ÷ V (1)','2200 ÷ 230 (1)','9.6 A (1)'],num(9.57,'A',0.01)),part('The kettle heats 1.5 kg of water from 20 °C to 100 °C. Calculate the energy transferred to the water. (c = 4200 J/kg °C)',2,['1.5 × 4200 × 80 (1)','504 000 J (1)'],num(504000,'J'))]},
  {stem:'A cyclist of total mass 80 kg accelerates from rest to 6.0 m/s in 4.0 s.',parts:[part('Calculate the acceleration.',2,['6.0 ÷ 4.0 (1)','1.5 m/s² (1)'],num(1.5,'m/s²')),part('Calculate the resultant force needed.',2,['F = ma = 80 × 1.5 (1)','120 N (1)'],num(120,'N'))]}]
};

function calcLesson(LEARN,EXAM,subj,num0,combined){
 const c=CALC[subj],B=LEARN.B;
 const items=c.items.filter(x=>!(combined&&/sep/.test(x[4]||'')));
 const checks=items.map(([q,a,unit,why,tag])=>({q:(/ht/.test(tag||'')?'<span class="ht">Higher</span> ':'')+q,a,unit,why,tol:0.02}));
 const blocks=[B.text('Equations and method',c.notes),B.check(checks,'Mixed calculation practice'),B.keypoints(['Write the equation, convert units, rearrange, substitute, then give the unit.','Use the number of marks to judge how many steps to show.']),B.mistakes(['Forgetting to convert cm³ to dm³, g to kg or kJ to J.','Rounding too early in a multi-step calculation.'])];
 LEARN.lesson({id:c.id,group:'lessons',num:num0,lvl:c.spec,name:c.title,icon:UNIT,tag:'',eyebrow:'Working scientifically · '+c.spec,title:c.title,intro:c.intro,outcomes:[['Choose and rearrange the correct equation',''],['Convert units and use standard form',''],['Show working clearly for method marks','']],blocks});
 if(EXAM&&EX_CALC[subj])EXAM.attach(c.id,{title:'Exam-style calculations',intro:'Show your working, then mark yourself against the mark scheme.',qs:EX_CALC[subj]});
}

function skillLesson(LEARN,EXAM,L,subj,num0,k){
 const B=LEARN.B, exPick=subj==='combined'?['biology','chemistry','physics'][k%3]:subj, ex=L.example[exPick];
 const blocks=L.notes.map(([t,h])=>B.text(t,h));
 blocks.push(B.example(ex[0],ex[1],ex[2]));
 blocks.push(B.check(L.checks.map((c,i)=>mcq(c[0],c[1],c[2],i+k))),B.keypoints(L.keypoints),B.mistakes(L.mistakes));
 LEARN.lesson({id:L.id,group:'lessons',num:num0,lvl:L.spec,name:L.title,icon:UNIT,tag:'',eyebrow:'Working scientifically · '+L.spec,title:L.title,intro:L.intro,outcomes:L.outcomes.map(o=>[o,L.spec]),blocks});
 if(EXAM)EXAM.attach(L.id,{title:'Apply your understanding',intro:'Write your response, then use each marking point to award your marks.',qs:L.exam.filter(q=>q.parts.length)});
}

function build(subject){
 const LEARN=window.LEARN, EXAM=window.EXAM, LAB=window.LAB;
 if(!LEARN||!LEARN.lesson||!LEARN.B)return null;
 const prev=LEARN.unit; LEARN.unit=UNIT;
 if(LAB&&LAB.ICONS){LAB.ICONS['u-'+UNIT]=ICON;LAB.ICONS['l-'+UNIT]=ICON;}
 const combined=subject==='combined';
 [L1,L2,L3,L4,L5].forEach((L,k)=>skillLesson(LEARN,EXAM,L,subject,k+1,k));
 const calcs=combined?['biology','chemistry','physics']:[subject];
 calcs.forEach((s,i)=>calcLesson(LEARN,EXAM,s,6+i,combined));
 LEARN.unit=prev;
 const done=L=>L.filter(p=>LEARN.done.has(p.id)).length;
 return {key:UNIT,kind:'Skills · Lessons',title:'Working scientifically',sub:'Practical skills and maths for every paper',icon:'u-'+UNIT,noun:'lessons',listLabel:'Working scientifically lessons',done,
  desc:'Planning investigations, using equipment, recording, analysing and evaluating results, and '+(combined?'mixed biology, chemistry and physics calculations.':subject==='chemistry'?'mixed chemical calculations.':subject==='physics'?'practice with every GCSE physics equation.':'biology maths.'),
  intro:'These lessons cover the practical and maths skills tested across all the papers. A lesson is ticked off when you get every check question right.',
  groups:[[UNIT+':lessons','Working scientifically and maths skills']]};
}
window.GCSESkills={build};
})();
