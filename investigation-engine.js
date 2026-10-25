/* Data-taking investigations: repeated readings, graphing, uncertainty and analysis. */
window.InvestigationLab = (() => {
 'use strict';
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const mean=a=>a.reduce((s,x)=>s+x,0)/a.length;
 const sd=a=>a.length>1?Math.sqrt(a.reduce((s,x)=>s+(x-mean(a))**2,0)/(a.length-1)):0;
 const round=(x,d=2)=>+x.toFixed(d);
 function spearman(pairs){
  if(pairs.length<3)return null;
  const ranks=values=>values.map(v=>{const less=values.filter(x=>x<v).length,equal=values.filter(x=>x===v).length;return less+(equal+1)/2;});
  const x=ranks(pairs.map(p=>p[0])),y=ranks(pairs.map(p=>p[1])),mx=mean(x),my=mean(y);
  const den=Math.sqrt(x.reduce((s,v)=>s+(v-mx)**2,0)*y.reduce((s,v)=>s+(v-my)**2,0));
  return den?x.reduce((s,v,i)=>s+(v-mx)*(y[i]-my),0)/den:null;
 }
 function expected(c,x,mode='standard') {
  const p=c.params||[];
  switch(c.model){
   case 'inhibition': return x===0?6:6+18*x/(x+20);
   case 'tropism': return mode==='dark'?0:(mode==='gravityroot'?-1:1)*45*(1-Math.exp(-x/12));
   case 'decay': return 1800/Math.max(0.12,Math.exp(-(((x-40)/19)**2))*6);
   case 'calibration': return x/50; // stage micrometer μm spanning 50 eyepiece divisions
   case 'mitosis': return x/200*100;
   case 'enzyme': return 1.5*x/(mode==='inhibitor'?2+x:1+x);
   case 'potometer': return (mode==='humid'?0.003:0.008)*(1+x/2)*300; // mm in 300 s
   case 'colorimeter': return 0.12*x;
   case 'chromatography': return x*(mode==='carotene'?0.91:0.58);
   case 'electrophoresis': return 100-25*Math.log10(x);
   case 'culture': return 80*2**(x/(mode==='antibiotic'?480:120));
   case 'permeability': return 0.03+0.85/(1+Math.exp(-(x-48)/7));
   case 'osmosis': return (0.35-x)*32;
   case 'qualitative': return x;
   case 'respirometer': return (mode==='boiled'?0:0.06*Math.exp((x-20)/18))*10; // mm in 10 min
   case 'datalogger': return mode==='dark'?8-0.012*x:8+0.018*x;
   case 'sampling': return Math.max(0,18-0.55*x);
   case 'cross': return 60/x;
   default: throw Error('Unknown investigation model: '+c.model);
  }
 }
 function apparatus(c,x,y,mode){
  const label=(x,y,t)=>`<text x="${x}" y="${y}" fill="currentColor" font-size="17">${esc(t)}</text>`;
  let drawing='';
  if(c.model==='inhibition'||c.model==='culture') drawing=`<circle cx="260" cy="205" r="145" fill="#e9d5a2" stroke="currentColor" stroke-width="3"/>${Array.from({length:90},(_,i)=>`<circle cx="${150+(i*67)%220}" cy="${100+(i*43)%210}" r="2" fill="#847249"/>`).join('')}<circle cx="260" cy="205" r="${c.model==='inhibition'?expected(c,x)*3:18}" fill="#f8f1df" stroke="#866d42"/><circle cx="260" cy="205" r="12" fill="#fff" stroke="#333"/>`+label(440,150,'Sealed agar plate')+label(440,185,'Model observations; no plate opening');
  else if(c.model==='tropism') {
   const gravity=mode.startsWith('gravity'),bend=Math.min(x*3,100),end=mode==='gravityroot'?230+bend:230-bend;
   drawing=gravity?`<path d="M150 230H240Q310 230 350 ${end}" fill="none" stroke="#55a044" stroke-width="12"/><path d="M560 90V290m-15-25 15 25 15-25" stroke="#e8ac28" stroke-width="6"/>`+label(410,335,mode==='gravityroot'?'Root: positive gravitropism':'Shoot: negative gravitropism'):`<rect x="180" y="280" width="200" height="90" fill="#805b38"/><path d="M280 280Q280 180 ${280+(mode==='dark'?0:bend)} 100" fill="none" stroke="#55a044" stroke-width="12"/><path d="M590 100H440m25-15-25 15 25 15" stroke="#e8ac28" stroke-width="8"/>`;
   drawing+=label(440,150,gravity?'Gravity downwards; no directional light':mode==='dark'?'Dark control':'One-sided light');
  }
  else if(c.model==='calibration') drawing=`<circle cx="285" cy="210" r="150" fill="#faf5dc" stroke="currentColor"/>${Array.from({length:11},(_,i)=>`<path d="M${160+i*25} 205v${i%5?15:35}" stroke="#333"/><path d="M${160+i*25} 170v20" stroke="#b14949"/>`).join('')}`+label(460,170,'Overlay both scales')+label(460,205,`${x} μm spans 50 eyepiece divisions`);
  else if(c.model==='chromatography') drawing=`<rect x="215" y="60" width="140" height="310" fill="#f3ead5" stroke="currentColor"/><path d="M215 340H355" stroke="#444"/><path d="M215 90H355" stroke="#5796cf" stroke-dasharray="5 5"/><path d="M245 ${340-250*expected(c,x,mode)/x}H325" stroke="${mode==='carotene'?'#e6a129':'#348644'}" stroke-width="14"/>`+label(440,150,'Pencil baseline; solvent below spots')+label(440,185,'Mark solvent front immediately');
  else if(c.model==='electrophoresis') drawing=`<rect x="150" y="60" width="280" height="310" fill="#aac5dd" stroke="currentColor"/>${[100,300,1000,3000,10000].map((n,i)=>`<path d="M180 ${80+expected(c,n)*3}h70M310 ${80+expected(c,x)*3}h70" stroke="#304f8d" stroke-width="5"/>`).join('')}`+label(470,140,'DNA travels towards the positive electrode')+label(470,180,'Compare with a DNA ladder');
  else if(c.model==='mitosis') drawing=Array.from({length:200},(_,i)=>{const mitotic=(i*37)%200<x,cx=70+i%20*29,cy=55+Math.floor(i/20)*28;return `<rect x="${cx}" y="${cy}" width="27" height="26" rx="3" fill="#eeddb6" stroke="#b8a888"/>`+(mitotic?`<path d="M${cx+8} ${cy+7}l10 12m-10 0 10-12" stroke="#b34450" stroke-width="3"/>`:`<ellipse cx="${cx+13}" cy="${cy+13}" rx="7" ry="6" fill="#897fb6"/>`);}).join('')+label(675,140,'200 cells in this field')+label(675,175,`${x} mitotic cells`)+label(675,210,'Condensed chromosomes')+label(675,245,'are shown in red');
  else if(c.model==='sampling') drawing=`<rect x="120" y="65" width="340" height="280" fill="#609550"/>${Array.from({length:35},(_,i)=>`<circle cx="${130+(i*53)%320}" cy="${80+(i*71)%245}" r="5" fill="#f6f0c0"/>`).join('')}<rect x="${150+x*6}" y="170" width="55" height="55" fill="none" stroke="#fff" stroke-width="4"/>`+label(490,150,'Belt transect; 0.25 m² quadrat')+label(490,185,'Random positions within each distance band');
  else if(c.model==='cross') drawing=`<path d="M215 300l120-120m-120 0 120 120" stroke="#333" stroke-width="12"/><path d="M215 70h120v80l70 190H145l70-190z" fill="#e5d786" fill-opacity="${y==null?.15:1}" stroke="currentColor" stroke-width="3"/>`+label(460,130,y==null?'The cross is visible before mixing':'Sulfur has obscured the cross')+label(460,170,'Time to the same visual endpoint');
  else if(c.model==='potometer'||c.model==='respirometer') drawing=`<rect x="120" y="220" width="410" height="18" rx="8" fill="#c8dfef" stroke="currentColor"/><rect x="${170+Math.min(300,expected(c,x,mode)*25)}" y="222" width="12" height="14" fill="#fff" stroke="#333"/><path d="M150 220V110h90v110" fill="none" stroke="currentColor" stroke-width="4"/>`+label(130,280,'Capillary scale / mm')+label(450,100,c.model==='potometer'?'Leafy shoot; airtight water-filled apparatus':'Respiring seeds; CO₂ absorbent separated')+label(450,140,'Control temperature; check for leaks');
  else drawing=`<rect x="170" y="90" width="150" height="230" rx="15" fill="#c8dfef" fill-opacity=".5" stroke="currentColor" stroke-width="3"/><path d="M180 200h130v100H180z" fill="${c.model==='permeability'?'#bd5080':'#76a7ce'}" opacity=".7"/><path d="M245 55v160" stroke="#444" stroke-width="8"/><rect x="400" y="105" width="470" height="150" rx="10" fill="var(--panel)" stroke="currentColor"/>`+label(422,145,c.model==='datalogger'?'Dissolved oxygen probe':c.model==='decay'?'Milk + lipase + indicator':'Measurement apparatus')+label(422,190,`${c.xlabel}:`)+`<text x="422" y="230" fill="currentColor" font-size="22" font-weight="700">${esc(String(x))}</text>`;
  return `<svg viewBox="0 0 900 400" role="img" aria-label="${esc(c.title)} apparatus model" style="display:block;width:100%;color:var(--ink)">${drawing}</svg>`;
 }
 function create(c){
  const {$,build,register,plot,rows,fx}=LAB, id=c.id;
  const st={data:[]}; LabNotebook.observe(id,st);
  const select=`<label for="${id}-x">${esc(c.xlabel)}</label><select id="${id}-x">${c.values.map(x=>`<option value="${x}">${x}</option>`).join('')}</select>`;
  const mode=c.modes?`<label for="${id}-mode">Condition</label><select id="${id}-mode">${c.modes.map(([v,n])=>`<option value="${v}">${n}</option>`).join('')}</select>`:'';
  const section=build({id,embed:!!c.embed,eyebrow:c.eyebrow,title:c.title,intro:c.intro+' This is a simplified teaching model: collect repeats and evaluate its limits.',stage:`<div id="${id}-apparatus"></div>`,bar:`<span>${esc(c.controls)}</span>`,panel:`<div class="field">${select}</div><div class="field">${mode}</div><button class="btn primary" id="${id}-measure">${c.action||'Take a reading'}</button><p role="status" id="${id}-reading">Choose a setting and take a reading.</p><label for="${id}-entry">${esc(c.entryLabel||c.ylabel)}</label><input type="number" step="any" id="${id}-entry"><button class="btn" id="${id}-record">Record reading</button>`,results:`<div class="tbl-wrap"><table><thead><tr><th>${esc(c.xlabel)}</th><th>Condition</th><th>Repeat</th><th>${esc(c.ylabel)}</th><th></th></tr></thead><tbody id="${id}-tbody"></tbody></table></div><button class="btn" id="${id}-clear">Clear readings</button>`,graphTitle:`${c.ylabel} against ${c.xlabel}`,graphSub:'Individual readings; repeats reveal variation',workTitle:'Analysis of your measurements',info:{method:c.method,vars:[c.xlabel,c.ylabel,c.controls],safety:c.safety,qa:c.qa}});
  let pending=null,observation=null;
  const settings=()=>({x:+$('#'+id+'-x').value,mode:$('#'+id+'-mode')?.value||'standard'});
  function draw(){const {x,mode}=settings();$('#'+id+'-apparatus').innerHTML=apparatus(c,x,observation?.y??null,mode);}
  function refresh(){
   rows($('#'+id+'-tbody'),st.data.map((r,i)=>[r.x,c.modes?.find(m=>m[0]===r.mode)?.[1]||'Standard',st.data.slice(0,i+1).filter(a=>a.x===r.x&&a.mode===r.mode).length,fx(r.y,c.dp??2)]),'Take and record readings at several settings.',4,true);
   const modes=[...new Set(st.data.map(r=>r.mode))];
   const X=x=>c.model==='electrophoresis'?Math.log10(x):x;
   plot($('#'+id+'-graph'),{x:{label:c.model==='electrophoresis'?'log₁₀(fragment length / bp)':c.xlabel,def:[X(Math.min(...c.values)),X(Math.max(...c.values))]},y:{label:c.ylabel},series:modes.map((m,i)=>({pts:st.data.filter(r=>r.mode===m).map(r=>[X(r.x),r.y]),col:LAB.RUNCOL[i%6],join:false,label:c.modes?.find(a=>a[0]===m)?.[1]||'Readings'})),empty:'Record readings to plot the graph.'});
   const last=st.data.at(-1), a=last?st.data.filter(r=>r.x===last.x&&r.mode===last.mode).map(r=>r.y):[];
   $('#'+id+'-work').innerHTML=last?`<p><b>At ${last.x} (${esc(last.mode)}):</b> ${a.length} reading(s); mean = ${fx(mean(a),3)}; ${a.length>1?`sample standard deviation = ${fx(sd(a),3)}; half-range = ${fx((Math.max(...a)-Math.min(...a))/2,3)}`:'repeat this setting to estimate variation.'}</p><p>${c.analysis(last,st.data)}</p><p class="muted">${esc(c.uncertainty)}</p>`:'<p class="empty">Record a reading to analyse it.</p>';
   if(c.model==='sampling'&&st.data.length>=3){const r=spearman(st.data.map(v=>[v.x,v.y]));if(r!==null)$('#'+id+'-work').insertAdjacentHTML('beforeend',`<p>Descriptive Spearman rank correlation: rₛ = ${r.toFixed(3)} (average ranks for ties). This measures monotonic association, not causation. Statistical significance needs an appropriate independent sampling design and a valid critical value or test calculation.</p>`);}
   LabNotebook.flush();
  }
  $('#'+id+'-measure').onclick=()=>{
   const {x,mode}=settings(), theory=expected(c,x,mode), noise=c.noise??0.025;
   const y=round(Math.max(c.allowNegative?-Infinity:0,theory+(Math.random()-.5)*noise*Math.max(1,Math.abs(theory))),c.dp??2);
   pending={x,mode,y};observation=pending;
   $('#'+id+'-reading').textContent=c.model==='calibration'?`${x} μm spans 50 eyepiece divisions. Enter μm per division.`:c.model==='chromatography'?`Solvent front ${x} mm; pigment travelled ${y} mm.`:c.model==='cross'?`The cross disappeared after ${y} s (model time accelerated).`:`${c.ylabel}: ${y}. Enter this observation to record it.`;
   $('#'+id+'-entry').value=''; draw();
  };
  $('#'+id+'-record').onclick=()=>{
   const value=$('#'+id+'-entry').value.trim(), n=Number(value);
   if(!pending||!value||!Number.isFinite(n)||Math.abs(n-pending.y)>Math.max(0.015,Math.abs(pending.y)*0.025)){$('#'+id+'-reading').textContent='Take a reading, then check your entry and units before recording.';return;}
   st.data.push({...pending,y:n});pending=null;refresh();$('#'+id+'-reading').textContent='Reading recorded. Repeat this setting, then change the independent variable.';
  };
  section.querySelectorAll('select').forEach(el=>{if(el.id===id+'-x'||el.id===id+'-mode')el.onchange=()=>{pending=null;observation=null;draw();};});
  $('#'+id+'-tbody').addEventListener('click',e=>{const b=e.target.closest('.x');if(b){st.data.splice(+b.dataset.i,1);refresh();}});
  $('#'+id+'-clear').onclick=()=>{if(!st.data.length||confirm('Clear the recorded readings for this practical?')){st.data=[];refresh();}};
  draw();refresh();if(!c.embed)register({id,group:c.group||'rp-bio',num:c.num,lvl:c.lvl,name:c.name||c.title,icon:c.icon||'l-bio',onShow:()=>{draw();refresh();}});
  return {section,refresh,draw,state:st};
 }
 return {create,expected,mean,sd,spearman,apparatus};
})();
