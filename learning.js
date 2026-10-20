/* New biology content uses the established Prodigy lesson, marking and account engine. */
(() => {
 'use strict';
 const {B,lesson}=LEARN, {$,$$,store}=LAB, meta=COURSE_META;
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const doneKey=`learn-${meta.id}-motion-done`, timerKey=`learn-${meta.id}-paper-timers`;
 const ICON='<path d="M6 3c0 8 12 10 12 18M18 3c0 8-12 10-12 18M7 6h10M9 10h6M9 14h6M7 18h10"/>';
 LAB.ICONS['l-bio']=ICON;
 const qsToExam=items=>items.map((p,i)=>({stem:p.stem||'',parts:[{q:p.q,m:p.m,lines:Math.max(2,p.m),ms:p.ms.map((x,j)=>[''+(j+1),x]),...(p.answer!==undefined?{ans:{a:p.answer,unit:p.unit||'',tol:p.tolerance!==undefined?0:0.02,atol:p.tolerance??0}}:{})}]}));
 function practical(p){return B.practical(`<p><b>${p.title}</b></p><ol>${p.method.map(x=>`<li>${x}</li>`).join('')}</ol><p><b>Variables and controls</b></p><ul>${(p.variables||[]).map(x=>`<li>${x}</li>`).join('')}</ul><p><b>Safety and ethics</b></p><ul>${(p.safety||[]).map(x=>`<li>${x}</li>`).join('')}</ul><p><b>Analysis:</b> ${p.analysis}</p>`,'Practical method and analysis');}
 function simHTML(id,type){
  const labels={enzyme:['Temperature / °C',0,70,35],osmosis:['External sucrose concentration / mol dm⁻³',0,1,0.1],genetics:['Cross',0,2,0],population:['Time / model generations',0,40,10],photosynthesis:['Light intensity / arbitrary units',0,100,30],sampling:['Number of quadrats sampled',1,20,5],magnification:['Image size / mm',1,100,40]};
  const [label,min,max,value]=labels[type]||labels.enzyme;
  return `<div class="lcard bio-sim" id="${id}" data-biosim="${type}"><h3><span class="kind k-sim">Interactive</span>Explore the model</h3><p class="muted">Change the control, predict the result, then explain it using the lesson. This is a simplified teaching model.</p><label for="${id}-control">${label}: <output id="${id}-value"></output></label><input id="${id}-control" type="range" min="${min}" max="${max}" step="${type==='osmosis'?0.05:1}" value="${value}"><svg class="bio-diagram" viewBox="0 0 640 260" role="img" aria-label="Interactive ${type} model"></svg><p class="bio-result" aria-live="polite"></p><p class="bio-explain"></p></div>`;
 }
 function drawSim(host){
  const type=host.dataset.biosim, x=+host.querySelector('input').value;
  const out=host.querySelector('output'),result=host.querySelector('.bio-result'),why=host.querySelector('.bio-explain');
  out.textContent=x;let value=0, explanation='', label='',points=[],maxY=100;
  const rate=t=>t<=40?Math.pow(t/40,1.6)*100:Math.max(0,100*Math.exp(-Math.pow((t-40)/10,2)));
  if(type==='enzyme'){value=rate(x);label=`Relative enzyme activity: ${value.toFixed(1)}%`;explanation=x>40?'Above the model optimum, bonds maintaining the enzyme structure are disrupted; the active site changes shape. Real optima depend on the enzyme.':'Increasing temperature increases kinetic energy and successful collisions up to the optimum. Low temperature slows activity without denaturing the enzyme.';for(let i=0;i<=70;i++)points.push([i/70,rate(i)]);}
  if(type==='osmosis'){value=(0.4-x)*35;label=`Model mass change: ${value.toFixed(1)}%`;explanation=x===0.4?'No net movement of water: the model tissue and solution have the same water potential.':'Water moves through a partially permeable membrane from higher to lower water potential. The model tissue has zero net mass change at 0.40 mol dm⁻³; this value depends on the tissue.';for(let i=0;i<=100;i++)points.push([i/100,50+(0.4-i/100)*35]);}
  if(type==='genetics'){
   const crosses=[['Aa × Aa',['AA','Aa','Aa','aa'],'75% dominant phenotype; 25% recessive phenotype'],['Aa × aa',['Aa','aa','Aa','aa'],'50% dominant; 50% recessive'],['AA × aa',['Aa','Aa','Aa','Aa'],'100% dominant phenotype; all heterozygous']];
   const [cross,children,phenotype]=crosses[x];out.textContent=cross;result.textContent=phenotype;why.textContent='Each box has probability ¼. These are expected probabilities for each offspring, not a guaranteed ratio in a small family. The example assumes complete dominance at one autosomal locus.';
   host.querySelector('svg').innerHTML=`<text x="320" y="35" fill="currentColor" text-anchor="middle" font-size="22">${cross}</text>${children.map((c,i)=>`<rect x="${180+(i%2)*140}" y="${55+Math.floor(i/2)*90}" width="130" height="80" rx="8" fill="var(--accent-soft)" stroke="var(--accent)"/><text x="${245+(i%2)*140}" y="${105+Math.floor(i/2)*90}" fill="currentColor" text-anchor="middle" font-size="28">${c}</text>`).join('')}`;return;
  }
  if(type==='population'){const f=t=>100/(1+19*Math.exp(-0.2*t));value=f(x);label=`Population: ${Math.round(value*10)} organisms`;explanation='The logistic model slows as resources become limiting. Carrying capacity is set at 1000 organisms here. Real populations fluctuate and this model does not predict a particular ecosystem.';for(let i=0;i<=40;i++)points.push([i/40,f(i)]);}
  if(type==='photosynthesis'){const f=t=>Math.min(80,t*1.6);value=f(x);label=`Relative photosynthesis rate: ${value.toFixed(0)} units`;explanation=x>=50?'Increasing light no longer increases the rate: a different factor, such as carbon dioxide supply or temperature, limits photosynthesis.':'Light is the limiting factor in this part of the model. Compare rates only while temperature and carbon dioxide are controlled.';for(let i=0;i<=100;i++)points.push([i/100,f(i)]);}
  if(type==='sampling'){
   const counts=[2,5,1,8,4,6,3,7,2,9,3,5,4,6,7,1,5,4,6,7],mean=counts.slice(0,x).reduce((a,b)=>a+b,0)/x;value=mean*10;label=`Mean ${mean.toFixed(2)} plants per 0.25 m² → ${Math.round(mean/0.25*100)} plants in 100 m²`;explanation='Quadrats should be positioned using independently chosen random coordinates. More repeats generally improve representativeness; they do not remove biased placement. The displayed counts are a fixed teaching dataset.';points=counts.slice(0,x).map((v,i)=>[(i+1)/20,v*10]);
  }
  if(type==='magnification'){value=x;label=`Magnification: ×${(x*1000/50).toFixed(0)}`;explanation=`A 50 μm cell produces an image ${x} mm wide. Convert ${x} mm to ${x*1000} μm, then divide image size by actual size. Increasing magnification alone does not improve resolution.`;for(let i=0;i<=100;i++)points.push([i/100,i]);}
  result.textContent=label;why.textContent=explanation;
  const poly=points.map(([a,b])=>`${65+a*540},${220-b/maxY*170}`).join(' ');
  host.querySelector('svg').innerHTML=`<path d="M65 25V220H610" fill="none" stroke="currentColor" stroke-width="2"/><text x="65" y="245" fill="currentColor" font-size="13">${type==='osmosis'?'Concentration increases →':type==='sampling'?'Quadrat number →':'Control increases →'}</text><text x="12" y="20" fill="currentColor" font-size="13">${type==='osmosis'?'Mass change (zero at midline)':type==='magnification'?'Image size':type==='sampling'?'Count':'Relative response'}</text>${type==='osmosis'?'<line x1="65" y1="135" x2="605" y2="135" stroke="var(--muted)" stroke-dasharray="5 5"/>':''}<polyline points="${poly}" fill="none" stroke="var(--accent)" stroke-width="3"/>`;
 }
 function overviewDiagram(unit){
  const name=(unit.title||'').toLowerCase();
  let caption='',drawing='';
  const box=(x,y,w,h,text)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="var(--accent-soft)" stroke="var(--accent)"/><text x="${x+w/2}" y="${y+h/2+5}" text-anchor="middle" fill="currentColor" font-size="15">${text}</text>`;
  const arrow=(x1,y1,x2,y2)=>`<path d="M${x1} ${y1}L${x2} ${y2}" fill="none" stroke="var(--data)" stroke-width="3" marker-end="url(#arrow-${unit.id})"/>`;
  if(/cell|foundations/.test(name)){
   caption='Schematic animal cell. Organelles are enlarged for visibility; this is not a scale drawing.';
   drawing=`<ellipse cx="320" cy="145" rx="225" ry="108" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="3"/><ellipse cx="300" cy="130" rx="65" ry="48" fill="var(--sunk)" stroke="var(--data)" stroke-width="3"/><text x="300" y="135" text-anchor="middle" fill="currentColor">Nucleus · DNA</text>${[170,420].map((x,i)=>`<ellipse cx="${x}" cy="${155+i*15}" rx="35" ry="18" fill="none" stroke="var(--data)" stroke-width="3"/><path d="M${x-20} ${155+i*15}q10-18 20 0t20 0" fill="none" stroke="var(--data)"/>`).join('')}<text x="440" y="80" fill="currentColor">Cell membrane</text><text x="130" y="225" fill="currentColor">Cytoplasm</text><text x="405" y="220" fill="currentColor">Mitochondrion</text><text x="140" y="90" fill="currentColor">• • Ribosomes</text>`;
  }else if(/organisation|exchange|transport/.test(name)){
   caption='Double circulation: arrows show the route of blood. Arteries carry blood away from the heart and veins return it; oxygen content depends on the circuit.';
   drawing=box(240,15,160,45,'Lungs')+box(50,100,200,55,'Right side of heart')+box(390,100,200,55,'Left side of heart')+box(240,220,160,45,'Body tissues')+arrow(180,100,280,60)+arrow(360,60,460,100)+arrow(490,155,370,220)+arrow(270,220,150,155)+`<text x="82" y="63" fill="var(--data)" font-size="13">Pulmonary artery</text><text x="440" y="65" fill="var(--data)" font-size="13">Pulmonary vein</text><text x="510" y="205" fill="var(--data)" font-size="13">Aorta</text><text x="85" y="205" fill="var(--data)" font-size="13">Vena cava</text>`;
  }else if(/homeostasis|communication/.test(name)){
   caption='Negative feedback opposes a departure from the normal range. Receptors, coordination and effectors work together; different variables use different mechanisms.';
   drawing=box(15,100,135,60,'Change detected')+arrow(150,130,195,130)+box(195,100,105,60,'Coordinator')+arrow(300,130,345,130)+box(345,100,105,60,'Effector')+arrow(450,130,495,130)+box(495,100,130,60,'Opposing response')+`<path d="M560 160V230H80V170" fill="none" stroke="var(--data)" stroke-width="3" marker-end="url(#arrow-${unit.id})"/><text x="320" y="252" text-anchor="middle" fill="currentColor">Reduced deviation → reduced corrective signal</text>`;
  }else if(/bioenergetics|energy/.test(name)){
   caption='Photosynthesis stores energy in organic molecules; respiration releases energy for cell processes. Plants carry out both, and respiration continues in darkness.';
   drawing=box(30,55,205,65,'Carbon dioxide + water')+box(400,55,210,65,'Glucose + oxygen')+arrow(235,70,395,70)+`<text x="320" y="48" text-anchor="middle" fill="currentColor">Photosynthesis</text><text x="320" y="100" text-anchor="middle" fill="currentColor">Light energy</text>`+arrow(400,185,240,185)+`<text x="320" y="165" text-anchor="middle" fill="currentColor">Aerobic respiration</text><text x="320" y="220" text-anchor="middle" fill="currentColor">Energy released for cell processes</text>`;
  }else if(/ecology|ecosystem/.test(name)){
   caption='Food-chain arrows show transfer of biomass and chemical energy from food to consumer. Energy is dissipated at every stage; matter is recycled by decomposers.';
   drawing=box(25,75,145,60,'Grass · producer')+arrow(170,105,220,105)+box(220,75,160,60,'Rabbit · consumer')+arrow(380,105,430,105)+box(430,75,180,60,'Fox · predator')+box(215,215,220,45,'Decomposers and decay')+arrow(95,135,240,210)+arrow(300,135,320,210)+arrow(520,135,400,210);
  }else if(/inheritance|genetics/.test(name)){
   if(meta.id!=='alevel-biology'){
    caption='A gene is a DNA sequence coding for a protein. Inherited information and environmental conditions can both affect phenotype.';
    drawing=box(25,100,160,60,'DNA · gene')+arrow(185,130,235,130)+box(235,100,160,60,'Protein')+arrow(395,130,445,130)+box(445,100,170,60,'Phenotype');
   }else{
   caption='Information flow: a gene is a DNA sequence. Gene expression links nucleotide sequence to a polypeptide; environmental conditions also influence phenotype.';
   drawing=box(25,100,160,60,'DNA · gene')+arrow(185,130,235,130)+box(235,100,160,60,'RNA message')+arrow(395,130,445,130)+box(445,100,170,60,'Polypeptide')+`<text x="210" y="90" text-anchor="middle" fill="currentColor">Transcription</text><text x="420" y="90" text-anchor="middle" fill="currentColor">Translation</text>`;
   }
  }else if(/infection|disease|biodiversity/.test(name)){
   caption='A simplified immune response. Specific lymphocytes recognise antigens; antibodies bind their complementary antigens. Phagocytes also engulf pathogens.';
   drawing=box(20,105,155,60,'Pathogen antigens')+arrow(175,135,225,135)+box(225,105,170,60,'Specific lymphocyte')+arrow(395,135,445,135)+box(445,105,170,60,'Antibodies')+`<text x="320" y="220" text-anchor="middle" fill="currentColor">Memory cells support a faster secondary response</text>`;
  }else return '';
  return B.fig(`<svg class="bio-diagram" viewBox="0 0 640 290" role="img" aria-label="${esc(caption)}"><defs><marker id="arrow-${unit.id}" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4L0 8" fill="var(--data)"/></marker></defs>${drawing}</svg>`,caption);
 }
 const diagramUnits=new Set();
 COURSE.lessons.forEach((l,i)=>{
  LEARN.unit=l.unit;
  const blocks=l.notes.map(n=>B.text(n.title,n.html));
  if(!diagramUnits.has(l.unit)){const unit=COURSE.units.find(u=>u.id===l.unit);if(unit){const fig=overviewDiagram(unit);if(fig)blocks.unshift(fig);}diagramUnits.add(l.unit);}
  if(l.sim)blocks.splice(1,0,simHTML('bio-model-'+l.id,l.sim));
  if(l.example)blocks.push(B.example(l.example.title,l.example.q,l.example.steps));
  if(l.practical)blocks.push(practical(l.practical));
  blocks.push(B.check(l.checks),B.keypoints(l.keypoints),B.mistakes(l.mistakes));
  lesson({id:l.id,group:'lessons',num:i+1,lvl:l.spec,name:l.title,icon:'bio',tag:[l.tier==='higher'?'Higher':null,l.separate?'Biology only':null].filter(Boolean).join(' · '),eyebrow:meta.sub+' · '+l.spec,title:l.title,intro:l.summary,outcomes:l.keypoints.slice(0,3).map(k=>[k,l.spec]),blocks});
  if(l.exam?.length)EXAM.attach(l.id,{title:'Apply your understanding',intro:'Write your response, then use each marking point to award your marks. Equivalent scientifically correct wording is acceptable.',qs:qsToExam(l.exam)});
 });
 $$('.bio-sim').forEach(host=>{host.querySelector('input').addEventListener('input',()=>drawSim(host));drawSim(host);});
 const timers=store.get(timerKey)||{};
 function remaining(p){const t=timers[p.id];return !t?p.minutes*60:t.end?Math.max(0,Math.ceil((t.end-Date.now())/1000)):t.left;}
 function timerPaint(p){const host=$('#timer-'+p.id);if(!host)return;const sec=remaining(p),t=timers[p.id];host.querySelector('output').textContent=`${Math.floor(sec/60)}:${String(sec%60).padStart(2,'0')}`;host.querySelector('[data-timer=start]').textContent=t?.end?'Pause':sec===p.minutes*60?'Start timer':'Resume';host.querySelector('[role=status]').textContent=sec===0?'Time is up. Finish your sentence, then mark your paper.':t?.end?'Timer running. Your answers save as you type.':'Timer paused.';}
 const paperScores={};
 function paperSummary(p,cid){
  const ps=EXAM.allParts(cid),total=ps.reduce((s,q)=>s+q.m,0),marked=ps.filter(q=>EXAM.pscore(q)!==null),score=marked.reduce((s,q)=>s+EXAM.pscore(q),0);
  paperScores[p.id]={score,total,marked:marked.length};
  const host=$('#summary-'+p.id);if(host){host.querySelector('b').textContent=`${score} / ${total} marks · ${marked.length} / ${ps.length} parts marked`;host.querySelector('progress').value=score;}
  if(marked.length===ps.length&&ps.length){LEARN.done.add(p.id);store.set(doneKey,[...LEARN.done]);LEARN.mark();}
 }
 PAPERS.forEach((p,i)=>{
  LEARN.unit='papers';
  const total=p.questions.reduce((s,q)=>s+q.parts.reduce((s,a)=>s+a.m,0),0);
  if(total!==p.marks)throw Error(`Paper ${p.id}: ${total} marks, expected ${p.marks}`);
  const help=p.subject==='Chemistry'?'<p>Use the supplied <button class="btn" data-periodic>Periodic Table</button>.</p>':p.subject==='Physics'?'<p><a href="'+esc(p.equationURL||'https://www.aqa.org.uk/subjects/science/gcse/science-8464/assessment-resources')+'" target="_blank" rel="noopener">Open the official AQA Combined Science equation sheet</a>. Check the insert matches your exam year.</p>':'';
  lesson({id:p.id,group:p.tier==='Foundation'?'foundation':p.tier==='Higher'?'higher':'ocr',num:i+1,lvl:p.tier||'A Level',name:p.title,icon:'bio',eyebrow:meta.sub+' · Original Prodigy practice paper',title:p.title,intro:`${p.marks} marks · ${p.minutes} minutes · ${p.tier||'A Level'}. Unofficial practice material; not an exam-board paper.`,outcomes:[['Apply knowledge, interpret evidence and evaluate practical work.',''],['Show calculations, units and scientific reasoning.','']],blocks:[B.text('Before you begin',`<p>Answer every question. Use a calculator. Show your working and include units. Use the number of marks to judge the detail needed.</p><p><b>Content:</b> ${p.coverage.map(esc).join('; ')}.</p>${help}<p><a class="btn" href="print.html?paper=${encodeURIComponent(p.id)}" target="_blank" rel="noopener">Printable question paper</a> <a class="btn" href="print.html?paper=${encodeURIComponent(p.id)}&answers=1" target="_blank" rel="noopener">Printable mark scheme</a></p><p class="note">These papers support revision. Scores are self-marked and have no official grade boundaries.</p>`),`<div class="lcard" id="timer-${p.id}"><h3>Paper timer</h3><output class="paper-clock" aria-label="Time remaining"></output><div class="bio-controls"><button class="btn primary" data-timer="start" data-paper="${p.id}">Start timer</button><button class="btn" data-timer="reset" data-paper="${p.id}">Reset timer</button></div><p class="muted" role="status"></p></div>`,`<div class="lcard paper-summary" id="summary-${p.id}"><h3>Your paper progress</h3><b></b><progress max="${p.marks}" value="0" aria-label="Marks awarded"></progress><p class="muted">Check numerical values, then award method and explanation marks against the scheme.</p></div>`]});
  const qs=p.questions.map(q=>({stem:`<h4>${q.title||q.topic||''}</h4>${q.stem||''}`,parts:q.parts.map(a=>({q:a.q,m:a.m,lines:Math.max(2,a.m),note:a.note||'',ms:a.ms.map((t,j)=>[''+(j+1),t]),...(a.opts?{opts:a.opts,a:a.a,why:a.ms.join(' ')}:{}),...(a.answer!==undefined?{ans:{a:a.answer,unit:a.unit||'',tol:a.tolerance!==undefined?0:0.02,atol:a.tolerance??0}}:{})}))}));
  let cid='xm-'+p.id;
  EXAM.attach(p.id,{title:'Question paper',intro:'Answer first. Open the mark scheme when you are ready to mark.',qs,onChange:()=>paperSummary(p,cid)});
  paperSummary(p,cid);timerPaint(p);
 });
 document.addEventListener('click',e=>{
  const t=e.target.closest('[data-timer]');if(t){const p=PAPERS.find(p=>p.id===t.dataset.paper),left=remaining(p);if(t.dataset.timer==='reset'){if(!confirm('Reset this timer? Your written answers and marks will stay saved.'))return;delete timers[p.id];}else if(timers[p.id]?.end)timers[p.id]={left};else if(left>0)timers[p.id]={end:Date.now()+left*1000};store.set(timerKey,timers);timerPaint(p);}
  if(e.target.closest('[data-periodic]')){
   let dlg=$('#bio-periodic');if(!dlg){dlg=document.createElement('dialog');dlg.id='bio-periodic';dlg.innerHTML='<button class="btn" data-closeperiodic>Close table</button><h2>AQA relative atomic masses</h2>'+CH.ptable({id:'bio-table'});document.body.append(dlg);}dlg.showModal();
  }
  if(e.target.closest('[data-closeperiodic]'))$('#bio-periodic').close();
 });
 setInterval(()=>PAPERS.forEach(timerPaint),1000);
 LEARN.unit=null;
 const done=L=>L.filter(p=>LEARN.done.has(p.id)).length;
  const units=COURSE.units.map(u=>({key:u.id,title:u.title,kind:u.subject||'Revision lessons',sub:u.subtitle||'',desc:u.description||'',icon:'u-'+u.id,noun:'lessons',listLabel:u.title+' lessons',done,intro:'Read, explore and check your understanding. A lesson is completed when all its quick checks are correct.',groups:[[u.id+':lessons',u.title]]}));
 for(const row of COURSE.imports||[]){const u=units.find(u=>u.key===row.unit);if(u&&!u.groups.some(([g])=>g===row.unit+':'+row.group))u.groups.push([row.unit+':'+row.group,row.lvl.split(' · ')[0]]);}
 units.forEach(u=>LAB.ICONS[u.icon]=ICON);
 if(PAPERS.length)units.push({key:'papers',title:'Practice papers',kind:'Exam practice',sub:meta.id==='gcse-combined'?'Six papers per tier · 70 marks · 75 minutes':'Full papers, timers and printable mark schemes',desc:'Original Prodigy papers with saved answers, a timer and self-marking. These are independent practice resources.',intro:'Choose a paper. Answer the questions, then mark against the scheme. You can print a question paper or a separate mark scheme.',icon:'u-papers',noun:'papers',listLabel:'Practice papers',done,groups:[['papers:foundation','Foundation'],['papers:higher','Higher'],['papers:ocr','OCR A Level']].filter(([g])=>LAB.list.some(x=>x.group===g))});
 LAB.ICONS['u-papers']='<path d="M6 2h9l4 4v16H6zM9 10h7M9 14h7M9 18h5"/>';
 LAB.list.forEach(p=>{if(!LAB.ICONS[p.icon])LAB.ICONS[p.icon]=p.unit?.startsWith('phys-')?'<path d="M2 12c3-10 7-10 10 0s7 10 10 0"/>':p.unit?.startsWith('chem-')?'<path d="M9 3h6M10 3v6l-6 11h16L14 9V3"/>':ICON;});
 window.HUB_UNITS=units;
 LAB.boot({list:true,units,groups:units.flatMap(u=>u.groups),hubIntro:meta.intro,onRoute:()=>queueMicrotask(filterTier)});LEARN.mark();
 // A visible course switcher uses the deployed GitHub URLs until custom DNS is set.
 const controls=document.createElement('div');controls.className='bio-controls lcard';controls.innerHTML=`<label>Course <select aria-label="Choose a course"><option value="">${meta.title}</option>${[['GCSEBiology','GCSE Biology'],['ALevelBiology','A Level Biology'],['GCSECombinedScience','Combined Science'],['GCSEPhysics','GCSE Physics'],['GCSEChemistry','GCSE Chemistry']].filter(([r])=>r!==({ 'gcse-biology':'GCSEBiology','alevel-biology':'ALevelBiology','gcse-combined':'GCSECombinedScience'}[meta.id])).map(([r,t])=>`<option value="https://prodigyai-app.github.io/${r}/">${t}</option>`).join('')}</select></label>${meta.id!=='alevel-biology'?'<label>Study tier <select id="study-tier"><option value="all">All content</option><option value="foundation">Foundation</option><option value="higher">Higher</option></select></label>':''}<span class="muted">Your progress saves as you work.</span>`;
 $('header.top').after(controls);controls.querySelector('[aria-label="Choose a course"]').addEventListener('change',e=>{if(e.target.value)location.href=e.target.value;});
 const tier=$('#study-tier');
 function filterTier(){if(!tier)return;const value=tier.value;$$('.prac').forEach(b=>{const p=LAB.list.find(x=>x.id===b.dataset.id);const higher=/higher/i.test(p?.tag||'')||p?.group==='papers:higher',foundation=p?.group==='papers:foundation';b.hidden=value==='foundation'?higher:value==='higher'?foundation:false;});const activeUnit=units.find(u=>u.key===document.body.dataset.unit);$$('.navgroup').forEach(g=>g.hidden=!activeUnit?.groups.some(([key])=>key===g.dataset.g)||![...g.querySelectorAll('.prac')].some(b=>!b.hidden));$$('.qi').forEach(q=>q.hidden=value==='foundation'&&(!!q.querySelector('.ht')||/^\s*\d*\s*Higher\b/.test(q.textContent)));$$('.xp').forEach(q=>q.hidden=value==='foundation'&&!!q.querySelector('.xpq .ht'));$$('.htbox').forEach(q=>q.hidden=value==='foundation');LEARN.updateTier?.();if(document.body.classList.contains('in-prac'))LAB.refreshNav?.();}
 if(tier){tier.value=store.get('learn-'+meta.id+'-study-tier')||'all';tier.addEventListener('change',()=>{store.set('learn-'+meta.id+'-study-tier',tier.value);filterTier();});window.addEventListener('hashchange',filterTier);filterTier();}
 const sources=document.createElement('footer');sources.className='lcard source-list';sources.innerHTML='<p><b>Prodigy revision</b> · Independent educational material. Course content is based on the specifications below; practice questions are original and are not endorsed by AQA or OCR.</p><p>'+COURSE.sources.map(s=>`<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.title)}</a>`).join(' · ')+'</p>';$('body>.wrap').append(sources);
 window.PRODIGY_COURSE={paperScores};
})();
