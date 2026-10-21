/* Biology required practicals 1–7 for AQA GCSE Combined Science: Trilogy (8464).
   Interactive labs built on the shared LAB engine (build, register, plot, bars, rows, W, C)
   and the chemistry glassware kit (GL) loaded by practical-labs.js. */

Object.assign(LAB.ICONS,{
 "rp-micro":'<path d="M8 21h10M10 21v-3M7 18h9"/><path d="M12 3l3 2-4 7-3-2z"/><path d="M11 12l3 4"/><circle cx="16" cy="12" r="2.5"/>',
 "rp-osmo":'<path d="M7 3v14a3 3 0 0 0 6 0V3"/><path d="M6 3h8"/><rect x="8.5" y="9" width="3" height="6" rx="1"/><path d="M17 8h4M17 12h3"/>',
 "rp-food":'<path d="M9 3v14a3 3 0 0 0 6 0V3"/><path d="M8 3h8"/><path d="M9 12h6"/><circle cx="12" cy="15.5" r="1.2" fill="currentColor"/>',
 "rp-enz":'<rect x="3" y="6" width="18" height="12" rx="2"/><circle cx="8" cy="10" r="1.6"/><circle cx="12" cy="10" r="1.6"/><circle cx="16" cy="10" r="1.6"/><circle cx="8" cy="14" r="1.6" fill="currentColor"/><circle cx="12" cy="14" r="1.6" fill="currentColor"/>',
 "rp-photo":'<circle cx="6" cy="6" r="3"/><path d="M6 1v1M1 6h1M2.5 2.5l.8.8"/><path d="M14 21V11a3 3 0 0 1 6 0v10"/><path d="M17 20c-2-3 2-5 0-8"/><circle cx="17" cy="7" r=".8" fill="currentColor"/>',
 "rp-react":'<rect x="10" y="2" width="4" height="15" rx="1"/><path d="M10 5h2M10 8h2M10 11h2M10 14h2"/><path d="M7 21c0-3 2-4 5-4s5 1 5 4"/>',
 "rp-field":'<rect x="3" y="3" width="18" height="18" rx="1"/><path d="M3 9h18M3 15h18M9 3v18M15 3v18"/><circle cx="6" cy="6" r="1" fill="currentColor"/><circle cx="12" cy="17" r="1" fill="currentColor"/>'
});

/* ===================================================================== */
/* RP1 Microscopy: observing, measuring and drawing cells                 */
/* ===================================================================== */
(()=>{
const {$,C,W,fx,gauss,clamp,bars,rows,build,register}=LAB;
const CX=640, CY=214, R=178;                 /* field of view on the stage */
const SPEC={
 onion:{name:"Onion epidermis",stain:"iodine solution",what:"cell length"},
 cheek:{name:"Cheek cells",stain:"methylene blue",what:"cell diameter"}};
const st={sp:"onion",obj:4,coarse:20,fine:50,target:44+Math.random()*16,stained:true,dx:0,warned:false,data:[],cells:{}};
LabNotebook.observe("bmic",st);
const umPerDiv=o=>100/o;                      /* eyepiece graticule: 100 divisions, calibrated per objective */
const pxPerUm=o=>0.03*o;                      /* 100 divisions span 300 px at every magnification */
const focusPos=()=>st.coarse+(st.fine-50)/10;
const blur=()=>Math.abs(focusPos()-st.target)*st.obj*0.33;
const sharp=()=>blur()<1.2;

/* cells are generated once, in micrometres, around the centre of the slide */
function makeOnion(){ const out=[]; let y=-1500;
  while(y<1500){ const h=48+Math.random()*16; let x=-1500-Math.random()*250;
    while(x<1500){ const w=170+Math.random()*150; out.push({x,y,w,h,nx:x+w*(.25+Math.random()*.5),ny:y+h*(.3+Math.random()*.4)}); x+=w; }
    y+=h; }
  /* make sure one complete, measurable cell sits across the centre */
  const c=out.find(c=>c.x<=0&&c.x+c.w>=0&&c.y<=0&&c.y+c.h>=0); st.cells.onionTarget=c; return out; }
function makeCheek(){ const out=[];
  for(let k=0;k<420;k++){ const x=(Math.random()-.5)*3000, y=(Math.random()-.5)*3000, r=24+Math.random()*9; out.push(blob(x,y,r)); }
  const t=blob(0,0,27+Math.random()*5); out.push(t); st.cells.cheekTarget=t; return out; }
function blob(x,y,r){ const n=11, pts=[], a0=Math.random()*6.28; let minX=1e9,maxX=-1e9;
  for(let i=0;i<n;i++){ const a=a0+i/n*Math.PI*2, rr=r*(.82+Math.random()*.3), px=x+rr*Math.cos(a), py=y+rr*.85*Math.sin(a); pts.push([px,py]); minX=Math.min(minX,px); maxX=Math.max(maxX,px); }
  return {x,y,r,pts,minX,maxX,nx:x+(Math.random()-.5)*r*.5,ny:y+(Math.random()-.5)*r*.5}; }
st.cells.onion=makeOnion(); st.cells.cheek=makeCheek();
const target=()=>st.sp==="onion"?st.cells.onionTarget:st.cells.cheekTarget;
const trueLen=()=>{ const t=target(); return st.sp==="onion"?t.w:t.maxX-t.minX; };

function scope(){ /* light microscope drawn side-on */
  return `${C.shadow(190,404,120,9)}
<path d="M95 404h190l-14-26H109z" fill="#2f3438"/><rect x="95" y="400" width="190" height="8" rx="3" fill="#1d2124"/>
<path d="M210 378c34-40 40-120 18-190l-34 10c18 60 14 120-14 180z" fill="#3a4045"/>
<rect x="120" y="262" width="150" height="12" rx="3" fill="#2b3034"/><rect x="150" y="256" width="80" height="6" rx="1" fill="#dfe8ec" opacity=".85"/>
<rect x="176" y="257" width="26" height="4" fill="${st.sp==="onion"?"#d9a94a":"#6f8fd8"}" opacity=".8"/>
<circle cx="190" cy="300" r="12" fill="#ffe9a8" stroke="#555" stroke-width="2"/><path d="M178 312h24l-4 16h-16z" fill="#444"/>
<circle cx="236" cy="318" r="15" fill="url(#g-knob)" stroke="#111"/><circle cx="236" cy="318" r="8" fill="url(#g-knob)" stroke="#111"/>
<path d="M150 178l46-14 22 28-46 14z" fill="#454b50"/>
${[[-26,4],[0,10],[26,40]].map(([dx,o],i)=>`<rect x="${176+dx}" y="${204}" width="11" height="${o===st.obj?44:34}" rx="2" fill="${o===st.obj?"#c9d2d6":"#7d858a"}" transform="rotate(${dx*.6} ${181+dx} 204)"/><text x="${181+dx}" y="${o===st.obj?258:248}" font-size="8" text-anchor="middle" font-family="Arial" fill="#fff">×${o}</text>`).join("")}
<path d="M168 166l20-6 34-118-20 6z" fill="#3a4045"/><rect x="186" y="16" width="26" height="34" rx="3" fill="#24282b" transform="rotate(16 199 33)"/>
<text x="120" y="440" font-family="Arial" font-size="11" fill="#c9d2d5">Eyepiece ×10</text>`; }

function cellsSVG(){ const k=pxPerUm(st.obj), stain=st.stained;
  let g="";
  if(st.sp==="onion"){ const wall=stain?"#8a5a1c":"#d8d2bf", fill=stain?"#f1d9a0":"#f2eee0", nuc=stain?"#7b4a14":"#e4ddc8";
    const lim=R/k+340;
    st.cells.onion.forEach(c=>{ if(c.x>lim||c.x+c.w<-lim||c.y>lim||c.y+c.h<-lim) return;
      g+=`<rect x="${c.x}" y="${c.y}" width="${c.w}" height="${c.h}" fill="${fill}" stroke="${wall}" stroke-width="${1.6}" vector-effect="non-scaling-stroke"/><ellipse cx="${c.nx}" cy="${c.ny}" rx="9" ry="7" fill="${nuc}"/>`; });
  } else { const mem=stain?"#4c6fc4":"#e2e2da", fill=stain?"#cfdcf6":"#efefe8", nuc=stain?"#203e9a":"#e0e0d6";
    const lim=R/k+60;
    st.cells.cheek.forEach(c=>{ if(Math.abs(c.x)>lim||Math.abs(c.y)>lim) return;
      g+=`<path d="M${c.pts.map(p=>p.join(" ")).join("L")}Z" fill="${fill}" fill-opacity=".85" stroke="${mem}" stroke-width="1.3" vector-effect="non-scaling-stroke"/><ellipse cx="${c.nx}" cy="${c.ny}" rx="4.5" ry="3.6" fill="${nuc}"/>`; }); }
  return `<g transform="translate(${CX+st.dx} ${CY}) scale(${k})">${g}</g>`; }

function graticule(){ let t=""; const x0=CX-150;
  for(let i=0;i<=100;i++){ const x=x0+i*3, L=i%10===0?14:i%5===0?10:6; t+=`<line x1="${x}" x2="${x}" y1="${CY}" y2="${CY-L}" stroke="#111" stroke-width="${i%10===0?1:.7}"/>`;
    if(i%10===0) t+=`<text x="${x}" y="${CY-17}" text-anchor="middle" font-family="Arial" font-size="10" fill="#111">${i}</text>`; }
  return `<line x1="${x0}" x2="${x0+300}" y1="${CY}" y2="${CY}" stroke="#111" stroke-width="1"/>${t}`; }

const stage=`<svg id="bmic-svg" viewBox="0 0 900 470" role="img" aria-label="A light microscope and the view down the eyepiece, with an eyepiece graticule scale across the field of view">
<defs><clipPath id="bmic-clip"><circle cx="${CX}" cy="${CY}" r="${R}"/></clipPath><filter id="bmic-f" x="-10%" y="-10%" width="120%" height="120%"><feGaussianBlur id="bmic-gb" stdDeviation="0"/></filter>
<radialGradient id="bmic-vig" cx=".5" cy=".5" r=".5"><stop offset=".8" stop-color="#000" stop-opacity="0"/><stop offset="1" stop-color="#000" stop-opacity=".45"/></radialGradient></defs>
${C.room(330)}
<g id="bmic-scope"></g>
<circle cx="${CX}" cy="${CY}" r="${R+14}" fill="#0b0d0e"/>
<g clip-path="url(#bmic-clip)"><rect x="${CX-R}" y="${CY-R}" width="${2*R}" height="${2*R}" fill="#f6f1e2"/><g id="bmic-cells" filter="url(#bmic-f)"></g>
<g id="bmic-grat"></g><circle cx="${CX}" cy="${CY}" r="${R}" fill="url(#bmic-vig)"/></g>
<text x="${CX}" y="${CY+R+30}" text-anchor="middle" font-family="Arial" font-size="12" fill="#c9d2d5" id="bmic-cap">View down the eyepiece</text>
</svg>`;

const panel=`
<div class="field"><div class="lbl">Slide</div><div class="seg c2" id="bmic-sp">${Object.entries(SPEC).map(([k,s],i)=>`<label class="opt"><input type="radio" name="bmic-sp" value="${k}" ${i===0?"checked":""}><span>${s.name}</span></label>`).join("")}</div>
<label class="check"><input type="checkbox" id="bmic-stain" checked> Stained (<span id="bmic-stname">iodine solution</span>)</label></div>
<div class="field"><div class="lbl">Objective lens</div><div class="seg c3" id="bmic-obj">${[4,10,40].map((o,i)=>`<label class="opt"><input type="radio" name="bmic-obj" value="${o}" ${i===0?"checked":""}><span>×${o}</span></label>`).join("")}</div></div>
<div class="field"><div class="lbl">Coarse focus</div><input type="range" id="bmic-coarse" min="0" max="100" step="1" value="20" aria-label="Coarse focus"></div>
<div class="field"><div class="lbl">Fine focus</div><input type="range" id="bmic-fine" min="0" max="100" step="0.5" value="50" aria-label="Fine focus"></div>
<div class="readout"><div><span>Total magnification</span><b id="bmic-mag">×40</b></div><div><span>Image</span><b id="bmic-foc">Blurred</b></div></div>
<div class="btnrow"><button class="btn" id="bmic-line">Line up the scale with the centre cell</button></div>
<div class="field"><div class="lbl">Graticule reading for the ${"centre"} cell <i>(divisions)</i></div><input type="number" id="bmic-div" min="0" max="100" step="0.5" inputmode="decimal" aria-label="Cell length in eyepiece divisions"></div>
<div class="btnrow"><button class="btn primary" id="bmic-rec">Record measurement</button></div>
<p class="note" id="bmic-hint">Start with the ×4 objective. Focus with the coarse knob, then the fine knob. Line up the scale with the cell in the middle and count the divisions it covers.</p>`;

build({id:"bmic",eyebrow:"AQA GCSE Combined Science · Biology · Required practical 1 · Cell biology",title:"Microscopy",
 intro:"Use a light microscope to observe plant and animal cells. Focus the image, line up the eyepiece graticule with a cell and use the calibration to work out its real size and the magnification of a drawing.",
 stage,bar:`<span>Eyepiece <b>×10</b></span><span>Graticule: <b>100 divisions</b></span><span id="bmic-cal"></span>`,panel,
 results:`<div class="tbl-wrap"><table><thead><tr><th>Cells</th><th>Magnification</th><th>Divisions</th><th>µm per division</th><th>Real size / µm</th><th></th></tr></thead><tbody id="bmic-tbody"></tbody></table></div>`,
 resultsBtn:`<button class="btn" id="bmic-clear" style="min-height:34px;padding:5px 10px">Clear</button>`,
 graphTitle:"Mean size of each type of cell",graphSub:"Onion: length · cheek: diameter",workTitle:"Real size and magnification",
 info:{method:[
  "Peel a thin layer of epidermis from the inside of an onion layer with forceps and lay it flat in a drop of water on a microscope slide. (For cheek cells, gently scrape the inside of your cheek with a clean cotton bud and smear it on the slide.)",
  "Add a drop of stain (iodine solution for onion, methylene blue for cheek cells) and lower a cover slip at an angle with a mounted needle to avoid trapping air bubbles.",
  "Clip the slide onto the stage. Start with the lowest-power objective (×4) and turn the coarse focus knob to bring the cells into focus, then use the fine focus knob.",
  "Move to a higher-power objective and use only the fine focus knob to refocus.",
  "Rotate the eyepiece and move the slide so the graticule lies along a cell. Count the divisions it covers, and use the calibration for that objective to find its real size.",
  "Make a clear, labelled drawing with a pencil, using unbroken lines and no shading. Write the magnification beside it, or add a scale bar."],
 vars:["Type of cell (plant or animal)","Size of the cell (measured with the eyepiece graticule)","Calibration of the graticule for the objective used, the stain, the thickness of the specimen"],
 safety:["Iodine solution and methylene blue stain skin and are irritants: wear eye protection and avoid contact.","Cover slips and slides are fragile: report any breakage and do not handle broken glass.","Cheek cells: use a fresh cotton bud, only sample your own cells, and put used buds and slides straight into disinfectant.","Never use a microscope mirror to reflect direct sunlight: it can damage your eyes."],
 qa:[["Why is a stain added to the cells?","Most cell parts are almost transparent. A stain is absorbed by some structures (such as the nucleus), so they show up clearly."],
  ["Why should you always start with the lowest-power objective?","It has the widest field of view and the greatest depth of focus, so the cells are easy to find. You then centre them before switching to higher power."],
  ["Why must you not use the coarse focus with the ×40 objective?","The ×40 objective is very close to the slide. A large movement could push the lens into the cover slip and crack the slide or damage the lens."],
  ["Why does the eyepiece graticule need to be calibrated for each objective?","The graticule is inside the eyepiece, so it always looks the same size. The cells look bigger at higher magnification, so each division represents a smaller real length."],
  ["A cell is 0.25 mm long and is drawn 50 mm long. What is the magnification of the drawing?","Magnification = image size ÷ real size = 50 ÷ 0.25 = ×200."],
  ["Why can you see more detail with an electron microscope than with a light microscope?","It has a much higher resolution: it can distinguish between two points that are much closer together, as well as giving a higher magnification."]]}
});

function drawScope(){ $("#bmic-scope").innerHTML=scope(); }
function draw(){
  $("#bmic-cells").innerHTML=cellsSVG(); $("#bmic-grat").innerHTML=graticule();
  $("#bmic-gb").setAttribute("stdDeviation",Math.min(14,blur()).toFixed(2));
  $("#bmic-mag").textContent=`×${10*st.obj}`; $("#bmic-foc").textContent=sharp()?"In focus":blur()<4?"Nearly focused":"Blurred";
  $("#bmic-cal").innerHTML=`At ×${st.obj}: <b>1 division = ${fx(umPerDiv(st.obj),1)} µm</b>`;
  $("#bmic-cap").textContent=`${SPEC[st.sp].name}${st.stained?`, stained with ${SPEC[st.sp].stain}`:", unstained"} · field of view about ${Math.round(2*R/pxPerUm(st.obj))} µm across`;
}
function hint(t){ $("#bmic-hint").textContent=t; }
$("#bmic-sp").addEventListener("change",e=>{ st.sp=e.target.value; st.dx=0; $("#bmic-stname").textContent=SPEC[st.sp].stain; drawScope(); draw(); $("#bmic-div").value=""; hint(`Now measure the ${SPEC[st.sp].what} of the cell in the centre.`); });
$("#bmic-stain").addEventListener("change",e=>{ st.stained=e.target.checked; draw(); if(!st.stained) hint("Without a stain the cells are almost transparent and very hard to see clearly."); });
$("#bmic-obj").addEventListener("change",e=>{ const o=+e.target.value; st.obj=o; st.dx=0; st.target+=gauss()*.25; drawScope(); draw(); $("#bmic-div").value="";
  hint(o===40?"High power: use only the fine focus knob from now on.":o===10?"Refocus with the fine focus knob.":"Low power: find the cells with the coarse focus knob."); });
$("#bmic-coarse").addEventListener("input",e=>{ st.coarse=+e.target.value; draw();
  if(st.obj===40) hint("Careful! With the ×40 objective, the coarse focus could push the lens into the slide. Use only the fine focus at high power."); });
$("#bmic-fine").addEventListener("input",e=>{ st.fine=+e.target.value; draw(); });
$("#bmic-line").addEventListener("click",()=>{ const t=target(), k=pxPerUm(st.obj);
  const left=st.sp==="onion"?t.x:t.minX; st.dx=-150-left*k; draw();
  const L=trueLen()/umPerDiv(st.obj);
  hint(L>100?"The cell is longer than the scale at this magnification. Use a lower-power objective.":sharp()?`The left edge of the cell is at 0. Read where its right edge meets the scale.`:"Focus the image before you take a reading."); });
$("#bmic-rec").addEventListener("click",()=>{
  if(!sharp()){ hint("Focus the image first: you cannot measure a blurred cell accurately."); return; }
  if(st.dx===0){ hint("Line up the scale with the centre cell first."); return; }
  const v=parseFloat($("#bmic-div").value), real=trueLen()/umPerDiv(st.obj);
  if(real>100){ hint("This cell does not fit on the scale. Switch to a lower-power objective."); return; }
  if(!(v>0)){ hint("Type how many divisions the cell covers, then record."); return; }
  if(Math.abs(v-real)>Math.max(1,real*.05)){ hint(`Check that reading: count the small divisions from 0 to the right-hand edge of the cell. Each numbered mark is 10 divisions.`); return; }
  st.data.push({sp:st.sp,obj:st.obj,div:v,um:v*umPerDiv(st.obj)}); $("#bmic-div").value=""; hint("Recorded. Try the other slide, or measure again at a different magnification."); refresh(); });
$("#bmic-tbody").addEventListener("click",e=>{ const b=e.target.closest(".x"); if(!b) return; st.data.splice(+b.dataset.i,1); refresh(); });
$("#bmic-clear").addEventListener("click",()=>{ st.data=[]; refresh(); });

function refresh(){ rows($("#bmic-tbody"),st.data.map(r=>[SPEC[r.sp].name,`×${10*r.obj}`,fx(r.div,1),fx(umPerDiv(r.obj),1),fx(r.um,0)]),"Focus, line up the scale and record a measurement.",5,true); graph(); work(); }
function graph(){ const items=Object.keys(SPEC).map(k=>{ const d=st.data.filter(r=>r.sp===k); if(!d.length) return null; const m=d.reduce((a,r)=>a+r.um,0)/d.length; return {label:SPEC[k].name,v:m,vl:`${fx(m,0)} µm`,col:k==="onion"?"#b8892a":"#3f66c4"}; }).filter(Boolean);
  bars($("#bmic-graph"),{ylabel:"Mean size / µm",items,empty:"Record measurements of each type of cell"}); }
function work(){ const el=$("#bmic-work"), {fr,res,step}=W, r=st.data[st.data.length-1];
  if(!r){ el.innerHTML=`<p class="empty">Record a measurement to see the working.</p>`; return; }
  const mm=r.um/1000, draw=st.sp==="onion"?60:40;
  el.innerHTML=`<div class="work">`+step(1,"Total magnification","Multiply the eyepiece and objective magnifications.",[`10 × ${r.obj} = ${res("×"+10*r.obj)}`])
   +step(2,"Real size","Use the calibration for this objective.",[`${fx(r.div,1)} divisions × ${fx(umPerDiv(r.obj),1)} µm = ${res(fx(r.um,0)+" µm")}`,`${fx(r.um,0)} µm ÷ 1000 = ${fx(mm,3)} mm`])
   +step(3,"Magnification of a drawing",`If you draw this cell ${draw} mm long:`,[`magnification = ${fr("image size","real size")} = ${fr(draw+" mm",fx(mm,3)+" mm")} = ${res("×"+Math.round(draw/mm))}`])
   +step(4,"Compare the cells",null,[`<span>Plant cells such as onion epidermis cells are usually much longer than animal cells such as cheek cells, and have a cell wall and a regular shape.</span>`])+`</div>`; }

drawScope(); draw(); refresh();
register({id:"bmic",group:"rp-bio",num:1,lvl:"RP 1",name:"Microscopy",icon:"rp-micro",onShow:()=>{draw();graph();}});
})();

/* ===================================================================== */
/* RP2 Osmosis in potato tissue                                            */
/* ===================================================================== */
(()=>{
const {$,C,W,fx,gauss,clamp,plot,rows,build,register,RUNCOL}=LAB;
const CONC=[0,0.2,0.4,0.6,0.8,1.0];
const st={c:0,m0:null,blot:true,sap:+(0.24+Math.random()*0.1).toFixed(2),busy:false,data:[],shown:0,inTube:-1};
LabNotebook.observe("bosm",st);
const pct=c=>22*Math.tanh((st.sap-c)/0.35);
const TX=i=>150+i*62;

const stage=`<svg id="bosm-svg" viewBox="0 0 900 470" role="img" aria-label="Six boiling tubes of sucrose solution in a rack, a balance and a potato cylinder">
${C.room(318)}${C.benchFront(440)}
<g id="bosm-rack"></g>
${C.balance(600,300,"bosm-bal")}
<g id="bosm-cyl"></g>
<g id="bosm-clock" transform="translate(800 70)"><circle r="40" fill="#f7f5ec" stroke="#333" stroke-width="3"/><path id="bosm-hand" d="M0 0V-30" stroke="#b1352a" stroke-width="4" stroke-linecap="round"/><path d="M0 0V-22" stroke="#222" stroke-width="3"/><circle r="3" fill="#222"/><text y="58" text-anchor="middle" font-family="Arial" font-size="12" font-weight="700" fill="#2b3236">Timer</text></g>
<text x="335" y="460" text-anchor="middle" font-family="Arial" font-size="11" fill="#c9d2d5">Sucrose concentration / mol/dm³</text>
</svg>`;

const panel=`
<div class="field"><div class="lbl">Sucrose solution</div><div class="seg c3" id="bosm-c">${CONC.map((c,i)=>`<label class="opt"><input type="radio" name="bosm-c" value="${c}" ${i===0?"checked":""}><span>${fx(c,1)} mol/dm³</span></label>`).join("")}</div></div>
<label class="check"><input type="checkbox" id="bosm-blot" checked> Blot the cylinder dry before weighing</label>
<div class="readout"><div><span>Mass before</span><b id="bosm-m0">—</b></div><div><span>Mass after</span><b id="bosm-m1">—</b></div></div>
<div class="btnrow"><button class="btn" id="bosm-cut">Cut and weigh a fresh cylinder</button><button class="btn primary" id="bosm-go" disabled>Leave in solution for 30 minutes</button></div>
<p class="note" id="bosm-hint">Cut cylinders of the same length and diameter. Do at least one in each solution, then repeat each concentration.</p>`;

build({id:"bosm",eyebrow:"AQA GCSE Combined Science · Biology · Required practical 2 · Cell biology",title:"Osmosis in plant tissue",
 intro:"Place potato cylinders in sucrose solutions of different concentrations. Measure the percentage change in mass and use a graph to estimate the concentration of the solution inside the potato cells.",
 stage,bar:`<span>Potato cylinders 1 cm diameter, 3 cm long</span><span>Balance resolution <b>0.01 g</b></span>`,panel,
 results:`<div class="tbl-wrap"><table><thead><tr><th>Sucrose / mol/dm³</th><th>Mass before / g</th><th>Mass after / g</th><th>Change / g</th><th>Change / %</th><th></th></tr></thead><tbody id="bosm-tbody"></tbody></table></div>`,
 resultsBtn:`<button class="btn" id="bosm-clear" style="min-height:34px;padding:5px 10px">Clear</button>`,
 graphTitle:"Percentage change in mass against concentration",graphSub:"Mean of your repeats · where the curve crosses 0 %",workTitle:"Percentage change and the concentration of the cell sap",
 info:{method:[
  "Use a cork borer to cut potato cylinders of the same diameter, and trim them to the same length (for example 3 cm) with a scalpel on a tile.",
  "Blot each cylinder dry with a paper towel, weigh it on a balance and record its mass.",
  "Put each cylinder in a labelled boiling tube containing 10 cm³ of sucrose solution: 0.0, 0.2, 0.4, 0.6, 0.8 and 1.0 mol/dm³.",
  "Leave the tubes for the same time (at least 30 minutes, or overnight) at the same temperature.",
  "Remove each cylinder, blot it dry in the same way and reweigh it.",
  "Calculate the percentage change in mass. Repeat for each concentration and calculate a mean.",
  "Plot percentage change in mass against concentration and draw a curve of best fit. Where the curve crosses 0 % shows the concentration of the solution inside the potato cells."],
 vars:["Concentration of sucrose solution","Percentage change in mass of the potato cylinder","Size and type of potato, volume of solution, time in the solution, temperature, how the cylinder is blotted"],
 safety:["Take care with cork borers and scalpels: cut on a tile, away from your hand.","Wipe up spills of sugar solution to avoid slips."],
 qa:[["Why is percentage change in mass used rather than change in mass?","The cylinders do not all start with exactly the same mass. Percentage change allows fair comparison between cylinders of different starting masses."],
  ["Explain why the cylinder in 0.0 mol/dm³ (pure water) gains mass.","The water outside is a more dilute solution than the cell contents, so water moves into the cells by osmosis through the partially permeable cell membranes."],
  ["Explain why the cylinder in 1.0 mol/dm³ loses mass.","The solution outside is more concentrated than the cell contents, so water moves out of the cells by osmosis."],
  ["What happens at the concentration where the curve crosses 0 %?","The solution outside has the same concentration as the cell contents, so there is no net movement of water and no change in mass."],
  ["Why must every cylinder be blotted in the same way?","Water left on the surface adds mass that has not been absorbed. Blotting inconsistently is a source of error; not blotting gives a systematic error that makes every final mass too high."],
  ["Suggest how to make the estimate of the cell sap concentration more precise.","Use more concentrations close to where the curve crosses 0 % (for example 0.20, 0.25, 0.30, 0.35 mol/dm³) and repeat each one."]]}
});

function rack(){ let g=`<rect x="110" y="296" width="380" height="18" rx="3" fill="url(#g-wood)"/><rect x="110" y="404" width="380" height="16" rx="3" fill="url(#g-wood)"/><rect x="118" y="314" width="8" height="90" fill="url(#g-woodV)"/><rect x="474" y="314" width="8" height="90" fill="url(#g-woodV)"/>`;
  CONC.forEach((c,i)=>{ const x=TX(i), sel=Math.abs(c-st.c)<1e-6, col=`rgba(220,${232-c*60},${250-c*150},.85)`;
    g+=GL.tube(x,190,224,30,.6,col)+(st.inTube===i?`<rect x="${x-6}" y="${330}" width="12" height="44" rx="4" fill="#efe2b0" stroke="#b39a52"/>`:"")
     +`<text x="${x}" y="438" text-anchor="middle" font-family="Arial" font-size="12" fill="${sel?"#ffd36b":"#dfe6e9"}" font-weight="${sel?700:400}">${fx(c,1)}</text>`+(sel?`<path d="M${x-14} 182h28" stroke="#ffd36b" stroke-width="3"/>`:""); });
  $("#bosm-rack").innerHTML=g; }
function cyl(on){ $("#bosm-cyl").innerHTML=on?`<g transform="translate(690 302)"><rect x="-24" y="-12" width="48" height="16" rx="7" fill="#efe2b0" stroke="#b39a52"/><ellipse cx="24" cy="-4" rx="4" ry="8" fill="#e6d69c" stroke="#b39a52"/></g>`:""; }
function setBal(m){ $("#bosm-bal").textContent=fx(m,2); }
function hint(t){ $("#bosm-hint").textContent=t; }
function ui(){ $("#bosm-go").disabled=st.busy||st.m0==null; $("#bosm-cut").disabled=st.busy; }

$("#bosm-c").addEventListener("change",e=>{ st.c=+e.target.value; rack(); });
$("#bosm-blot").addEventListener("change",e=>{ st.blot=e.target.checked; });
$("#bosm-cut").addEventListener("click",()=>{ st.m0=+(2.35+Math.random()*0.45).toFixed(2); st.inTube=-1; rack(); cyl(true); setBal(st.m0);
  $("#bosm-m0").textContent=`${fx(st.m0,2)} g`; $("#bosm-m1").textContent="—"; hint(`Now leave the cylinder in the ${fx(st.c,1)} mol/dm³ solution.`); ui(); });
$("#bosm-go").addEventListener("click",()=>{ st.busy=true; ui(); cyl(false); setBal(0); const i=CONC.findIndex(c=>Math.abs(c-st.c)<1e-6); st.inTube=i; rack();
  const t0=performance.now(), c=st.c, m0=st.m0;
  const f=now=>{ const u=Math.min(1,(now-t0)/2200); $("#bosm-hand").setAttribute("transform",`rotate(${u*180})`); if(u<1){ requestAnimationFrame(f); return; }
    let m1=m0*(1+(pct(c)+gauss()*0.9)/100); if(!st.blot) m1+=0.05+Math.random()*0.05; m1=+m1.toFixed(2);
    st.inTube=-1; rack(); cyl(true); setBal(m1); $("#bosm-m1").textContent=`${fx(m1,2)} g`;
    st.data.push({c,m0,m1,blot:st.blot}); st.data.sort((a,b)=>a.c-b.c); st.m0=null; st.busy=false; ui(); refresh();
    hint(st.blot?"Recorded. Cut a fresh cylinder for the next solution.":"Recorded, but the cylinder was not blotted: surface water makes the final mass too high."); };
  requestAnimationFrame(f); });
$("#bosm-tbody").addEventListener("click",e=>{ const b=e.target.closest(".x"); if(!b) return; st.data.splice(+b.dataset.i,1); refresh(); });
$("#bosm-clear").addEventListener("click",()=>{ st.data=[]; refresh(); });

const pc=r=>(r.m1-r.m0)/r.m0*100;
function means(){ return CONC.map(c=>{ const d=st.data.filter(r=>Math.abs(r.c-c)<1e-6); return d.length?[c,d.reduce((a,r)=>a+pc(r),0)/d.length,d.length]:null; }).filter(Boolean); }
function crossing(M){ for(let i=0;i<M.length-1;i++){ const [x1,y1]=M[i],[x2,y2]=M[i+1]; if(y1>=0&&y2<=0&&y1!==y2) return x1+(0-y1)*(x2-x1)/(y2-y1); } return null; }
function refresh(){ rows($("#bosm-tbody"),st.data.map(r=>[fx(r.c,1),fx(r.m0,2),fx(r.m1,2),(r.m1>=r.m0?"+":"")+fx(r.m1-r.m0,2),(pc(r)>=0?"+":"")+fx(pc(r),1)+(r.blot?"":" *")]),"Cut a cylinder, weigh it and leave it in a solution.",5,true); graph(); work(); }
function graph(){ const M=means(), x0=crossing(M);
  plot($("#bosm-graph"),{x:{label:"Sucrose concentration / mol/dm³",min:0,max:1},y:{label:"Change in mass / %",def:[-20,20]},series:[{pts:M.map(m=>[m[0],m[1]]),col:RUNCOL[1],join:M.length>2?"curve":false}],fits:[{m:0,c:0,x0:0,x1:1,col:"#888",dash:[4,4]}].concat(x0!=null?[{m:1e6,c:-1e6*x0,x0:x0,x1:x0+1e-9,col:RUNCOL[0],dash:[3,3],label:`crosses 0 % at ${fx(x0,2)} mol/dm³`}]:[]),empty:"Your mean results will appear here"}); }
function work(){ const el=$("#bosm-work"), {fr,res,step,chips}=W, r=st.data[st.data.length-1], M=means(), x0=crossing(M);
  if(!r){ el.innerHTML=`<p class="empty">Record a result to see the working.</p>`; return; }
  let h=(x0!=null?chips([["Cell sap concentration",`≈ ${fx(x0,2)} mol/dm³`,1],["Concentrations tested",`${M.length} of 6`]]):"")+`<div class="work" style="margin-top:14px">`
   +step(1,"Percentage change in mass","For your latest cylinder:",[`${fr("change in mass","starting mass")} × 100 = ${fr(fx(r.m1-r.m0,2),fx(r.m0,2))} × 100 = ${res((pc(r)>=0?"+":"")+fx(pc(r),1)+" %")}`])
   +step(2,"Means","Take the mean of the repeats at each concentration.",[M.map(m=>`${fx(m[0],1)}: ${(m[1]>=0?"+":"")+fx(m[1],1)} % (${m[2]})`).join(" · ")]);
  h+=x0!=null?step(3,"Where the curve crosses 0 %","No net movement of water by osmosis: the solution matches the cell contents.",[`concentration of cell sap ≈ ${res(fx(x0,2)+" mol/dm³")}`])
   :step(3,"Find where the curve crosses 0 %",null,[`<span>You need results that gain mass and results that lose mass to find this point.</span>`]);
  el.innerHTML=h+`</div>`; }

rack(); setBal(0); ui(); refresh();
register({id:"bosm",group:"rp-bio",num:2,lvl:"RP 2",name:"Osmosis",icon:"rp-osmo",onShow:graph});
})();

/* ===================================================================== */
/* RP3 Food tests                                                          */
/* ===================================================================== */
(()=>{
const {$,C,W,css,rows,build,register}=LAB;
const NUT=["sugar","starch","protein","lipid"];
const pick=()=>Math.random()<.5;
let X={sugar:pick(),starch:pick(),protein:pick(),lipid:pick()}; if(!NUT.some(n=>X[n])) X.starch=true;
const FOOD={glucose:{name:"Glucose solution",c:{sugar:2}},starch:{name:"Starch suspension",c:{starch:1}},egg:{name:"Egg white",c:{protein:1}},oil:{name:"Vegetable oil",c:{lipid:1}},
 milk:{name:"Milk",c:{sugar:1,protein:1,lipid:1}},water:{name:"Water (control)",c:{}},x:{name:"Food X (unknown)",c:{sugar:X.sugar?1:0,starch:X.starch?1:0,protein:X.protein?1:0,lipid:X.lipid?1:0}}};
const TEST={ben:{name:"Benedict’s",nut:"sugar",what:"reducing sugars",col:"#3d7fd6"},iod:{name:"Iodine",nut:"starch",what:"starch",col:"#c08a3e"},
 biu:{name:"Biuret",nut:"protein",what:"protein",col:"#4f86d9"},sud:{name:"Sudan III",nut:"lipid",what:"lipids",col:"#d2452e"}};
const st={food:"glucose",test:"ben",added:false,heated:false,data:[]};
LabNotebook.observe("bfood",st);

function result(){ const f=FOOD[st.food].c, t=st.test;
  if(!st.added) return {col:st.food==="milk"?"#f4f1ea":st.food==="oil"?"#e8cf62":st.food==="egg"?"#ece9da":st.food==="starch"?"#eeeee6":"#dfeef7",obs:"No reagent added yet",pos:null};
  if(t==="ben"){ if(!st.heated) return {col:TEST.ben.col,obs:"Blue (not heated yet)",pos:null};
    const s=f.sugar||0; return s>=2?{col:"#b5401f",obs:"Brick-red precipitate",pos:true}:s===1?{col:"#d98a2b",obs:"Orange",pos:true}:{col:TEST.ben.col,obs:"Stays blue",pos:false}; }
  if(t==="iod") return f.starch?{col:"#1f1d3a",obs:"Blue-black",pos:true}:{col:"#c08a3e",obs:"Stays orange-brown",pos:false};
  if(t==="biu") return f.protein?{col:"#8a4fb3",obs:"Purple (lilac)",pos:true}:{col:"#4f86d9",obs:"Stays blue",pos:false};
  return f.lipid?{col:"#d2452e",obs:"Red-stained oily layer on top",pos:true,layer:true}:{col:"#e58a7a",obs:"Red dye mixed through, no layer",pos:false}; }

const stage=`<svg id="bfood-svg" viewBox="0 0 900 470" role="img" aria-label="A test tube of food sample in a rack, reagent bottles and a water bath">
${C.room(318)}${C.benchFront(440)}
<g id="bfood-bottles"></g><g id="bfood-tube"></g><g id="bfood-bath"></g>
<text x="380" y="460" text-anchor="middle" font-family="Arial" font-size="12" fill="#c9d2d5" id="bfood-cap"></text></svg>`;

const panel=`
<div class="field"><div class="lbl">Food sample</div><div class="seg c2" id="bfood-f">${Object.entries(FOOD).map(([k,f],i)=>`<label class="opt"><input type="radio" name="bfood-f" value="${k}" ${i===0?"checked":""}><span>${f.name}</span></label>`).join("")}</div></div>
<div class="field"><div class="lbl">Test</div><div class="seg c2" id="bfood-t">${Object.entries(TEST).map(([k,t],i)=>`<label class="opt"><input type="radio" name="bfood-t" value="${k}" ${i===0?"checked":""}><span>${t.name} (${t.what})</span></label>`).join("")}</div></div>
<div class="readout"><div><span>Observation</span><b id="bfood-obs">—</b></div><div><span>Water bath</span><b id="bfood-wb">—</b></div></div>
<div class="btnrow"><button class="btn" id="bfood-add">Add the reagent</button><button class="btn" id="bfood-heat">Heat in water bath for 5 min</button></div>
<div class="btnrow"><button class="btn primary" id="bfood-rec" disabled>Record the result</button></div>
<p class="note" id="bfood-hint">Choose a food and a test. A fresh sample is used each time you change either one.</p>`;

build({id:"bfood",eyebrow:"AQA GCSE Combined Science · Biology · Required practical 3 · Organisation",title:"Food tests",
 intro:"Use qualitative reagents to test foods for reducing sugars, starch, protein and lipids. Use water as a control, then identify what an unknown food contains.",
 stage,bar:`<span>2 cm³ of sample per test</span><span>Water bath about <b>75 °C</b></span>`,panel,
 results:`<div class="tbl-wrap"><table><thead><tr><th>Food</th><th>Test</th><th>Observation</th><th>Result</th><th></th></tr></thead><tbody id="bfood-tbody"></tbody></table></div>`,
 resultsBtn:`<button class="btn" id="bfood-clear" style="min-height:34px;padding:5px 10px">Clear</button>`,
 graphTitle:"Results grid",graphSub:"Colour seen in each test",workTitle:"What does each food contain?",
 info:{method:[
  "Grind solid food with a little distilled water using a pestle and mortar, then filter or let it settle. Put about 2 cm³ of the food solution in a clean test tube.",
  "Reducing sugars: add about 2 cm³ of Benedict’s solution and place the tube in a water bath at about 75 °C for 5 minutes. A positive result changes from blue to green, yellow, orange or brick-red.",
  "Starch: add a few drops of iodine solution. A positive result changes from orange-brown to blue-black.",
  "Protein: add about 2 cm³ of Biuret solution and shake gently. A positive result changes from blue to purple (lilac).",
  "Lipids: add a few drops of Sudan III stain and shake gently. A positive result gives a red-stained oily layer on the surface.",
  "Test water in the same way as a control, so you can compare colours."],
 vars:["Type of food","Colour change with each reagent","Volume of sample and reagent, water bath temperature and heating time"],
 safety:["Wear eye protection. Biuret solution contains sodium hydroxide, which is corrosive, and Benedict’s solution contains copper sulfate.","Use a water bath filled from a kettle, not a Bunsen burner, to heat the Benedict’s test: hot water can scald.","Sudan III stain is dissolved in ethanol, which is highly flammable: keep it away from flames.","Iodine solution is an irritant and stains skin."],
 qa:[["Why is water tested as well as the foods?","It is a control: it shows the colour of a negative result, so you can tell whether a colour change really happened."],
  ["Why must the Benedict’s test be heated?","The reaction between reducing sugars and Benedict’s solution needs heat. Without heating, the solution stays blue even when sugar is present."],
  ["A Benedict’s test turns orange rather than brick-red. What does this suggest?","Reducing sugar is present but at a lower concentration. The colour gives a rough (semi-quantitative) idea of the amount."],
  ["Why are these called qualitative tests?","They show whether a substance is present, not exactly how much."],
  ["Milk gives a positive result in three tests. Which nutrients does it contain?","Reducing sugar (lactose), protein and lipid (fat)."],
  ["Suggest why a food sample should be ground with water before testing.","The reagents work in solution. Grinding breaks up the cells and releases the nutrients so they can react with the reagent."]]}
});

function draw(){ const r=result(), t=TEST[st.test];
  let b=""; Object.entries(TEST).forEach(([k,T],i)=>{ const x=90+i*58, sel=k===st.test; b+=`${C.shadow(x,322,22,4)}<rect x="${x-16}" y="${248}" width="32" height="70" rx="6" fill="#5b4a2e" opacity=".9"/><rect x="${x-14}" y="268" width="28" height="48" rx="4" fill="${T.col}" opacity=".85"/><rect x="${x-8}" y="234" width="16" height="16" rx="3" fill="#2a2e31"/><rect x="${x-15}" y="276" width="30" height="20" fill="#f4f1ea"/><text x="${x}" y="289" text-anchor="middle" font-family="Arial" font-size="6.5" fill="#222">${T.name.replace("’","'")}</text>${sel?`<path d="M${x-18} 330h36" stroke="#ffd36b" stroke-width="3"/>`:""}`; });
  $("#bfood-bottles").innerHTML=b;
  const lv=st.added?.62:.36;
  let tube=`<rect x="300" y="296" width="160" height="16" rx="3" fill="url(#g-wood)"/>`+GL.tube(380,120,210,44,lv,r.col);
  if(r.layer) tube+=`<rect x="360" y="${330-210*lv+2}" width="40" height="12" fill="#c8331f" opacity=".95"/>`;
  if(st.test==="ben"&&st.heated&&r.pos) tube+=`<path d="M362 318q18 10 36 0v6q-18 8-36 0z" fill="#8c2a12" opacity=".7"/>`;
  $("#bfood-tube").innerHTML=tube;
  const bathOn=st.test==="ben";
  $("#bfood-bath").innerHTML=bathOn?`${GL.beaker(690,410,170,140,.7,"#9cc8e8")}${st.heated?GL.tube(690,250,140,30,.6,r.col):""}<text x="690" y="252" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="#2b3236">Water bath 75 °C</text>`:"";
  $("#bfood-obs").textContent=r.obs; $("#bfood-wb").textContent=bathOn?(st.heated?"Heated 5 min":"Not yet heated"):"Not needed";
  $("#bfood-cap").textContent=`${FOOD[st.food].name} + ${t.name} (test for ${t.what})`;
  $("#bfood-heat").disabled=!bathOn||!st.added||st.heated; $("#bfood-rec").disabled=result().pos===null; $("#bfood-add").disabled=st.added; }
function fresh(){ st.added=false; st.heated=false; draw(); }
function hint(t){ $("#bfood-hint").textContent=t; }
$("#bfood-f").addEventListener("change",e=>{ st.food=e.target.value; fresh(); });
$("#bfood-t").addEventListener("change",e=>{ st.test=e.target.value; fresh(); hint(st.test==="ben"?"The Benedict’s test needs heating in a water bath.":"Add the reagent and look for a colour change."); });
$("#bfood-add").addEventListener("click",()=>{ st.added=true; draw(); hint(st.test==="ben"?"Now heat the tube in the water bath.":"Compare the colour with the water control, then record the result."); });
$("#bfood-heat").addEventListener("click",()=>{ st.heated=true; draw(); hint("Look at the final colour, then record the result."); });
$("#bfood-rec").addEventListener("click",()=>{ const r=result(); const i=st.data.findIndex(d=>d.food===st.food&&d.test===st.test); const row={food:st.food,test:st.test,obs:r.obs,pos:r.pos,col:r.col};
  if(i>=0) st.data[i]=row; else st.data.push(row); refresh(); hint("Recorded. Try another test or another food."); });
$("#bfood-tbody").addEventListener("click",e=>{ const b=e.target.closest(".x"); if(!b) return; st.data.splice(+b.dataset.i,1); refresh(); });
$("#bfood-clear").addEventListener("click",()=>{ st.data=[]; refresh(); });

function refresh(){ rows($("#bfood-tbody"),st.data.map(d=>[FOOD[d.food].name,TEST[d.test].name,d.obs,d.pos?`<b>${TEST[d.test].what} present</b>`:`no ${TEST[d.test].what}`]),"Add a reagent and record what you see.",4,true); grid(); work(); }
function grid(){ const cv=$("#bfood-graph"); if(!cv||!cv.offsetParent) return;
  const w=cv.clientWidth, foods=Object.keys(FOOD), tests=Object.keys(TEST), rowH=30, top=34, left=Math.min(150,w*.36), h=top+foods.length*rowH+8, dpr=window.devicePixelRatio||1;
  cv.width=w*dpr; cv.height=h*dpr; cv.style.height=h+"px"; const c=cv.getContext("2d"); c.setTransform(dpr,0,0,dpr,0,0); c.clearRect(0,0,w,h);
  const ink=css("--ink"), mut=css("--muted"), line=css("--line"), cw=(w-left-6)/tests.length;
  c.font=`600 11px ${css("--f-body")}`; c.fillStyle=mut; c.textAlign="center"; c.textBaseline="middle";
  tests.forEach((t,j)=>c.fillText(TEST[t].name,left+cw*(j+.5),top/2));
  foods.forEach((f,i)=>{ const y=top+i*rowH; c.fillStyle=ink; c.textAlign="left"; c.font=`11.5px ${css("--f-body")}`; c.fillText(FOOD[f].name,4,y+rowH/2);
    tests.forEach((t,j)=>{ const x=left+cw*j+3, d=st.data.find(d=>d.food===f&&d.test===t); c.strokeStyle=line; c.lineWidth=1; c.strokeRect(x,y+3,cw-6,rowH-6);
      if(d){ c.fillStyle=d.col; c.fillRect(x+1,y+4,cw-8,rowH-8); c.fillStyle=d.pos?"#fff":"#111"; c.textAlign="center"; c.font=`700 11px ${css("--f-body")}`; c.fillText(d.pos?"+":"–",x+(cw-6)/2,y+rowH/2); } }); }); }
function work(){ const el=$("#bfood-work"), {step}=W;
  if(!st.data.length){ el.innerHTML=`<p class="empty">Record some results to see what each food contains.</p>`; return; }
  let n=0, h=`<div class="work">`;
  Object.keys(FOOD).forEach(f=>{ const d=st.data.filter(x=>x.food===f); if(!d.length) return; const has=d.filter(x=>x.pos).map(x=>TEST[x.test].what), not=d.filter(x=>!x.pos).map(x=>TEST[x.test].what), missing=Object.keys(TEST).filter(t=>!d.some(x=>x.test===t)).map(t=>TEST[t].what);
    h+=step(++n,FOOD[f].name,null,[`<span>${has.length?`Contains ${has.join(", ")}.`:"No positive results."}${not.length?` No ${not.join(", ")}.`:""}${missing.length?` Not yet tested for ${missing.join(", ")}.`:""}</span>`]); });
  const xd=st.data.filter(d=>d.food==="x");
  if(xd.length===4){ const ok=xd.every(d=>d.pos===!!FOOD.x.c[TEST[d.test].nut]); h+=step(++n,"Food X identified",null,[`<span>Food X contains ${xd.filter(d=>d.pos).map(d=>TEST[d.test].what).join(", ")||"none of the four nutrients tested"}. ${ok?"Your results are consistent.":""}</span>`]); }
  el.innerHTML=h+`</div>`; }

draw(); refresh();
register({id:"bfood",group:"rp-bio",num:3,lvl:"RP 3",name:"Food tests",icon:"rp-food",onShow:grid});
})();

/* ===================================================================== */
/* RP4 The effect of pH on amylase                                         */
/* ===================================================================== */
(()=>{
const {$,C,W,fx,gauss,plot,rows,build,register,setStopwatch,RUNCOL}=LAB;
const PH=[4,5,6,7,8,9];
const opt=6.4+Math.random()*0.6;
const tDone=pH=>{ const a=Math.exp(-Math.pow((pH-opt)/1.2,2)); return 48/a*(1+gauss()*0.06); };
const st={pH:7,int:30,speed:10,run:false,t:0,tc:null,wells:[],data:[],found:null};
LabNotebook.observe("benz",st);

const stage=`<svg id="benz-svg" viewBox="0 0 900 470" role="img" aria-label="A spotting tile with drops of iodine, a test tube of starch and amylase in a water bath, and a stopwatch">
${C.room(318)}${C.benchFront(440)}
${GL.beaker(170,410,170,150,.72,"#9cc8e8")}<g id="benz-tube"></g><text x="170" y="170" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="#2b3236">Water bath 35 °C</text>
<g transform="translate(330 300)"><rect x="0" y="0" width="300" height="120" rx="10" fill="#f4f4f0" stroke="#c9c9c2"/><g id="benz-wells"></g></g>
<g id="benz-sw">${C.stopwatch(700,250,"benz-swt")}</g>
<text x="480" y="290" text-anchor="middle" font-family="Arial" font-size="13" font-weight="700" fill="#2b3236">Spotting tile with iodine</text>
</svg>`;

const panel=`
<div class="field"><div class="lbl">pH of buffer solution</div><div class="seg c3" id="benz-ph">${PH.map(p=>`<label class="opt"><input type="radio" name="benz-ph" value="${p}" ${p===7?"checked":""}><span>pH ${p}</span></label>`).join("")}</div></div>
<div class="field"><div class="lbl">Test a drop every</div><select id="benz-int"><option value="10">10 seconds</option><option value="30" selected>30 seconds</option></select></div>
<div class="field"><div class="lbl">Simulation speed</div><select id="benz-speed"><option value="1">Real time</option><option value="10" selected>×10</option><option value="30">×30</option></select></div>
<div class="readout"><div><span>Time</span><b id="benz-t">0 s</b></div><div><span>Last drop</span><b id="benz-last">—</b></div></div>
<div class="btnrow"><button class="btn primary" id="benz-go">Mix amylase and starch, start the clock</button><button class="btn" id="benz-stop" disabled>Stop</button></div>
<p class="note" id="benz-hint">Every drop is tested with iodine. When a drop stays orange-brown, all the starch has been broken down.</p>`;

build({id:"benz",eyebrow:"AQA GCSE Combined Science · Biology · Required practical 4 · Organisation",title:"The effect of pH on amylase",
 intro:"Amylase breaks down starch. Test drops of the reaction mixture with iodine at regular intervals to find how long it takes for all the starch to be broken down at each pH, then calculate the rate.",
 stage,bar:`<span>1% starch solution, 1% amylase, buffer</span><span>Water bath <b>35 °C</b></span>`,panel,
 results:`<div class="tbl-wrap"><table><thead><tr><th>pH</th><th>Interval / s</th><th>Time for starch to be broken down / s</th><th>Rate / s⁻¹</th><th></th></tr></thead><tbody id="benz-tbody"></tbody></table></div>`,
 resultsBtn:`<button class="btn" id="benz-clear" style="min-height:34px;padding:5px 10px">Clear</button>`,
 graphTitle:"Rate of reaction against pH",graphSub:"Rate = 1000 ÷ time · mean of repeats",workTitle:"Rate of reaction",
 info:{method:[
  "Put a drop of iodine solution in each well of a spotting tile.",
  "Put 2 cm³ of amylase solution and 1 cm³ of a buffer solution (for example pH 5) into a test tube. Put 2 cm³ of starch solution into another test tube. Stand both tubes in a water bath at 35 °C for 5 minutes.",
  "Add the starch to the amylase and buffer, mix and start the stopwatch.",
  "Every 30 seconds, use a pipette to put one drop of the mixture into a well of iodine. Record the time when the iodine stays orange-brown (no starch left).",
  "Repeat with buffer solutions of different pH values, such as 4, 5, 6, 7, 8 and 9.",
  "Calculate the rate of reaction for each pH using rate = 1000 ÷ time."],
 vars:["pH of the buffer solution","Time taken for the starch to be broken down","Temperature, volume and concentration of amylase and starch, the interval between tests"],
 safety:["Wear eye protection: iodine solution is an irritant and amylase can cause allergic reactions.","Take care with hot water in the water bath."],
 qa:[["What does a blue-black colour in the iodine show?","Starch is still present in the mixture."],
  ["Why are both solutions placed in the water bath before mixing?","So they are already at 35 °C when the reaction starts. Temperature affects the rate, so it must be controlled."],
  ["Why is a buffer solution used?","It keeps the pH constant at a known value throughout the reaction."],
  ["Explain why the rate is much lower at pH 4 and pH 9.","The pH is far from the optimum. The shape of the active site changes (the enzyme is denatured), so starch no longer fits and fewer enzyme–substrate complexes form."],
  ["Testing every 30 seconds limits the resolution of the results. Explain why, and suggest an improvement.","The starch could have been broken down at any time in the 30 seconds before the first orange-brown drop. Test more often, for example every 10 seconds."],
  ["Suggest why the optimum pH found by a class can vary.","Testing at intervals limits the precision; human judgement of the colour change varies; there were only a few pH values, so the true optimum may lie between them."]]}
});

function wells(){ let g=""; for(let i=0;i<12;i++){ const r=Math.floor(i/6), c=i%6, x=30+c*48, y=32+r*56, w=st.wells[i];
  g+=`<circle cx="${x}" cy="${y}" r="17" fill="#e7e7e0" stroke="#bdbdb4"/><circle cx="${x}" cy="${y}" r="13" fill="${w?w.col:"#c08a3e"}" opacity="${w?1:.85}"/>${w?`<text x="${x}" y="${y+30}" text-anchor="middle" font-family="Arial" font-size="9" fill="#555">${w.t}s</text>`:""}`; }
  $("#benz-wells").innerHTML=g; }
function tube(){ const done=st.found!=null||(st.tc!=null&&st.t>=st.tc), lv=st.run||st.found!=null?.62:.4; $("#benz-tube").innerHTML=GL.tube(170,180,200,36,lv,done?"#e9eef0":"#dfe7ea"); }
function colourAt(t){ if(st.tc==null) return "#c08a3e"; const f=t/st.tc; return f>=1?"#c08a3e":f>.85?"#5b3a3a":"#1f1d3a"; }
function draw(){ wells(); tube(); setStopwatch(document.getElementById("benz-swt"),st.t); $("#benz-t").textContent=`${Math.floor(st.t)} s`; }
function hint(t){ $("#benz-hint").textContent=t; }
let last=0, raf=null;
function loop(now){ if(!st.run) return; const dt=Math.min(.2,(now-last)/1000)*st.speed; last=now; const before=st.t; st.t+=dt;
  for(let k=Math.floor(before/st.int)+1;k<=Math.floor(st.t/st.int);k++){ const tt=k*st.int, col=colourAt(tt), idx=(k-1)%12; st.wells[idx]={col,t:tt};
    $("#benz-last").textContent=col==="#c08a3e"?"Orange-brown":"Blue-black";
    if(col==="#c08a3e"){ st.found=tt; finish(); return; } }
  if(st.t>=600){ st.found=Infinity; finish(); return; }
  draw(); raf=requestAnimationFrame(loop); }
function finish(){ st.run=false; draw(); $("#benz-go").disabled=false; $("#benz-stop").disabled=true;
  if(st.found===Infinity){ st.data.push({pH:st.pH,int:st.int,t:null}); hint(`After 10 minutes there is still starch at pH ${st.pH}: the enzyme is hardly working at this pH.`); }
  else { st.data.push({pH:st.pH,int:st.int,t:st.found}); hint(`At pH ${st.pH} the starch was broken down within ${st.found} s. Repeat, or try another pH.`); }
  st.data.sort((a,b)=>a.pH-b.pH); refresh(); }
$("#benz-ph").addEventListener("change",e=>{ st.pH=+e.target.value; });
$("#benz-int").addEventListener("change",e=>{ st.int=+e.target.value; });
$("#benz-speed").addEventListener("change",e=>{ st.speed=+e.target.value; });
$("#benz-go").addEventListener("click",()=>{ st.t=0; st.wells=[]; st.found=null; st.tc=tDone(st.pH); st.run=true; $("#benz-go").disabled=true; $("#benz-stop").disabled=false; $("#benz-last").textContent="—";
  hint(`Reaction running at pH ${st.pH}. A drop is tested every ${st.int} s.`); last=performance.now(); raf=requestAnimationFrame(loop); });
$("#benz-stop").addEventListener("click",()=>{ st.run=false; cancelAnimationFrame(raf); $("#benz-go").disabled=false; $("#benz-stop").disabled=true; hint("Stopped before the end point, so nothing was recorded."); });
$("#benz-tbody").addEventListener("click",e=>{ const b=e.target.closest(".x"); if(!b) return; st.data.splice(+b.dataset.i,1); refresh(); });
$("#benz-clear").addEventListener("click",()=>{ st.data=[]; refresh(); });

const rate=t=>t?1000/t:0;
function means(){ return PH.map(p=>{ const d=st.data.filter(r=>r.pH===p); return d.length?[p,d.reduce((a,r)=>a+rate(r.t),0)/d.length,d.length]:null; }).filter(Boolean); }
function refresh(){ rows($("#benz-tbody"),st.data.map(r=>[r.pH,r.int,r.t?r.t:"&gt; 600",r.t?fx(rate(r.t),1):"≈ 0"]),"Start the reaction at one pH.",4,true); graph(); work(); }
function graph(){ const M=means(); plot($("#benz-graph"),{x:{label:"pH",min:3,max:10},y:{label:"Rate of reaction / s⁻¹ (1000 ÷ time)",def:[0,20]},series:[{pts:M.map(m=>[m[0],m[1]]),col:RUNCOL[2],join:M.length>2?"curve":false}],empty:"Your rates will appear here"}); }
function work(){ const el=$("#benz-work"), {fr,res,step,chips}=W, r=[...st.data].reverse().find(x=>x.t), M=means();
  if(!r){ el.innerHTML=`<p class="empty">Complete a run to see the rate calculation.</p>`; return; }
  const best=M.reduce((a,b)=>b[1]>a[1]?b:a);
  el.innerHTML=chips([["Fastest rate",`pH ${best[0]}`,1],["pH values tested",`${M.length} of 6`]])+`<div class="work" style="margin-top:14px">`
   +step(1,"Rate of reaction",`At pH ${r.pH} the starch was broken down in ${r.t} s.`,[`rate = ${fr("1000","time")} = ${fr("1000",r.t)} = ${res(fx(rate(r.t),1)+" s⁻¹")}`])
   +step(2,"Optimum pH",null,[`<span>The rate is highest at about pH ${best[0]} in your results. Amylase works best near its optimum pH; further from it, the active site changes shape and the rate falls.</span>`])
   +step(3,"Resolution",null,[`<span>You tested every ${r.int} s, so each time could be up to ${r.int} s too long. Testing more often gives more precise times.</span>`])+`</div>`; }

draw(); refresh();
register({id:"benz",group:"rp-bio",num:4,lvl:"RP 4",name:"Enzymes and pH",icon:"rp-enz",onShow:graph});
})();

/* ===================================================================== */
/* RP5 Light intensity and the rate of photosynthesis                      */
/* ===================================================================== */
(()=>{
const {$,C,W,fx,gauss,plot,rows,build,register,clamp,RUNCOL}=LAB;
const st={d:20,shield:true,ready:false,busy:false,data:[],count:0,axis:"d",bubbles:[]};
LabNotebook.observe("bphot",st);
const PX=12, TX=640;                       /* px per cm along the bench; tube position */
const temp=()=>st.shield?20:20+Math.min(14,140/st.d);
const rateOf=d=>{ const I=1/Math.pow(d/100,2); return 70*I/(I+30)*(1+0.05*(temp()-20)); };
const poisson=l=>{ let L=Math.exp(-l),k=0,p=1; do{ k++; p*=Math.random(); }while(p>L); return k-1; };

const stage=`<svg id="bphot-svg" viewBox="0 0 900 470" role="img" aria-label="A lamp shining on pondweed in a boiling tube; bubbles of oxygen rise from the cut stem">
${C.room(330)}${C.benchFront(440)}
${(()=>{ let t=`<rect x="${TX-50*PX-8}" y="400" width="${50*PX+16}" height="28" rx="2" fill="#f2e7c6" stroke="#b39a52"/>`; for(let cm=0;cm<=50;cm++){ const x=TX-cm*PX, L=cm%10===0?14:cm%5===0?10:6; t+=`<line x1="${x}" x2="${x}" y1="400" y2="${400+L}" stroke="#222" stroke-width="${cm%10?0.7:1.2}"/>`; if(cm%10===0) t+=`<text x="${x}" y="424" text-anchor="middle" font-family="Arial" font-size="10" fill="#222">${cm}</text>`; } return t+`<text x="${TX-50*PX-4}" y="396" font-family="Arial" font-size="10" fill="#dfe6e9">distance from pondweed / cm</text>`; })()}
<g id="bphot-lamp"></g><g id="bphot-sg"></g>
${GL.beaker(TX,412,120,170,.76,"#a7cfe6",{op:.55})}
${GL.tube(TX,160,230,44,.8,"#cfe7f2")}
<g id="bphot-weed"><path d="M${TX} 372c-6-30 6-60-2-96" stroke="#3f7b2c" stroke-width="4" fill="none"/>${[0,1,2,3,4,5,6].map(i=>`<path d="M${TX-1} ${364-i*14}q${i%2?14:-14} -6 ${i%2?18:-18} -16" stroke="#4f9a36" stroke-width="5" fill="none" stroke-linecap="round"/>`).join("")}</g>
<g id="bphot-bub"></g>
<g transform="translate(770 130)">${C.thermo(0,0,180,"bphot-th",{tMin:0,tMax:50})}</g>
</svg>`;

const panel=`
<div class="field"><div class="lbl">Distance from lamp to pondweed <output id="bphot-d-o">20 cm</output></div><input type="range" id="bphot-d" min="10" max="50" step="5" value="20" aria-label="Distance"></div>
<label class="check"><input type="checkbox" id="bphot-shield" checked> Beaker of water between lamp and tube (heat shield)</label>
<div class="readout"><div><span>Water temperature</span><b id="bphot-T">20.0 °C</b></div><div><span>Bubbles counted</span><b id="bphot-n">—</b></div></div>
<div class="btnrow"><button class="btn" id="bphot-wait">Leave for 5 minutes to adjust</button><button class="btn primary" id="bphot-count" disabled>Count bubbles for 1 minute</button></div>
<div class="field"><div class="lbl">Graph</div><div class="seg c2" id="bphot-axis"><label class="opt"><input type="radio" name="bphot-axis" value="d" checked><span>Rate against distance</span></label><label class="opt"><input type="radio" name="bphot-axis" value="I"><span>Rate against light intensity</span></label></div></div>
<p class="note" id="bphot-hint">After moving the lamp, leave the pondweed for 5 minutes so the rate settles before you count.</p>`;

build({id:"bphot",eyebrow:"AQA GCSE Combined Science · Biology · Required practical 5 · Bioenergetics",title:"Light intensity and photosynthesis",
 intro:"Count the bubbles of oxygen given off by pondweed with the lamp at different distances. Use the inverse square law to relate distance to light intensity and see how light affects the rate of photosynthesis.",
 stage,bar:`<span>Pondweed in 0.2% sodium hydrogencarbonate</span><span>Bench lamp, room otherwise dark</span>`,panel,
 results:`<div class="tbl-wrap"><table><thead><tr><th>Distance / cm</th><th>Light intensity (1/d²) / m⁻²</th><th>Temperature / °C</th><th>Bubbles per minute</th><th></th></tr></thead><tbody id="bphot-tbody"></tbody></table></div>`,
 resultsBtn:`<button class="btn" id="bphot-clear" style="min-height:34px;padding:5px 10px">Clear</button>`,
 graphTitle:"Rate of photosynthesis",graphSub:"Mean bubbles per minute",workTitle:"Light intensity and the inverse square law",
 info:{method:[
  "Put a piece of pondweed (such as Cabomba or Elodea), cut end upwards, in a boiling tube of sodium hydrogencarbonate solution, which supplies carbon dioxide.",
  "Place a beaker of water between the lamp and the tube to absorb heat, and stand the tube a measured distance (for example 10 cm) from the lamp.",
  "Leave the pondweed for 5 minutes to adjust to the light.",
  "Count the number of bubbles given off in 1 minute. Repeat the count twice more and calculate a mean.",
  "Move the lamp to 20, 30, 40 and 50 cm and repeat.",
  "Light intensity is proportional to 1 ÷ distance². Plot the rate against distance, or against light intensity."],
 vars:["Distance from the lamp (light intensity)","Rate of photosynthesis (bubbles of oxygen per minute)","Temperature, carbon dioxide concentration, type and length of pondweed, the lamp used"],
 safety:["Lamps get hot: do not touch the bulb, and keep water away from the lamp and the mains supply.","Wash your hands after handling pondweed."],
 qa:[["Why is sodium hydrogencarbonate added to the water?","It releases carbon dioxide, so carbon dioxide does not limit the rate of photosynthesis."],
  ["What is the purpose of the beaker of water between the lamp and the pondweed?","It absorbs heat from the lamp, so the temperature of the pondweed stays the same. Temperature is a control variable."],
  ["The lamp is moved from 20 cm to 10 cm. By what factor does the light intensity change?","Light intensity ∝ 1 ÷ d². Halving the distance makes the intensity 2² = 4 times greater."],
  ["Why does the rate stop increasing much at the highest light intensities?","Another factor, such as carbon dioxide concentration or temperature, becomes the limiting factor."],
  ["Counting bubbles is not very accurate. Suggest a better method.","Collect the gas in a gas syringe or an inverted measuring cylinder and measure its volume, because bubbles can be different sizes."],
  ["Why should the experiment be done in a dark room?","So the lamp is the only source of light and the light intensity depends only on its distance."]]}
});

function lamp(){ const x=TX-st.d*PX-32; $("#bphot-lamp").innerHTML=`${C.shadow(x,402,40,5)}<rect x="${x-30}" y="392" width="60" height="10" rx="3" fill="#2f3438"/><rect x="${x-4}" y="250" width="8" height="142" fill="url(#g-steelV)"/>
<path d="M${x-8} 250l40-26v58z" fill="#3a4045"/><ellipse cx="${x+32}" cy="253" rx="8" ry="29" fill="#fff6c8"/><path d="M${x+40} 253L${TX-30} 210L${TX-30} 340z" fill="#fff6b0" opacity=".16"/>`;
  $("#bphot-sg").innerHTML=st.shield?GL.beaker((x+32+TX-60)/2,412,34,96,.75,"#a7cfe6"):""; }
function hint(t){ $("#bphot-hint").textContent=t; }
function ui(){ $("#bphot-count").disabled=!st.ready||st.busy; $("#bphot-wait").disabled=st.busy||st.ready; $("#bphot-d").disabled=st.busy; }
function setT(){ LAB.setThermo("bphot-th",temp()); $("#bphot-T").textContent=`${fx(temp(),1)} °C`; }
$("#bphot-d").addEventListener("input",e=>{ st.d=+e.target.value; $("#bphot-d-o").textContent=`${st.d} cm`; st.ready=false; lamp(); setT(); ui(); hint("Leave the pondweed for 5 minutes to adjust before counting."); });
$("#bphot-shield").addEventListener("change",e=>{ st.shield=e.target.checked; st.ready=false; lamp(); setT(); ui(); if(!st.shield) hint("Without the heat shield the lamp warms the water, especially when it is close. Temperature would no longer be controlled."); });
$("#bphot-axis").addEventListener("change",e=>{ st.axis=e.target.value; graph(); });
$("#bphot-wait").addEventListener("click",()=>{ st.busy=true; ui(); setTimeout(()=>{ st.ready=true; st.busy=false; ui(); hint("Ready. Count the bubbles for 1 minute."); },900); });
$("#bphot-count").addEventListener("click",()=>{ st.busy=true; ui(); const lam=rateOf(st.d), n=poisson(lam), times=[...Array(n)].map(()=>Math.random()*3000).sort((a,b)=>a-b); let shown=0; const t0=performance.now();
  $("#bphot-n").textContent="0";
  const f=now=>{ const el=now-t0; while(shown<n&&times[shown]<=el){ shown++; st.bubbles.push({y:282,x:TX+(Math.random()-.5)*6,r:2.4+Math.random()*1.6}); $("#bphot-n").textContent=shown; }
    st.bubbles.forEach(b=>b.y-=2.2); st.bubbles=st.bubbles.filter(b=>b.y>176); $("#bphot-bub").innerHTML=st.bubbles.map(b=>`<circle cx="${b.x.toFixed(1)}" cy="${b.y.toFixed(1)}" r="${b.r.toFixed(1)}" fill="#fff" fill-opacity=".7" stroke="#cfe7f2"/>`).join("");
    if(el<3000||st.bubbles.length){ requestAnimationFrame(f); return; }
    st.data.push({d:st.d,T:temp(),n}); st.data.sort((a,b)=>a.d-b.d); st.busy=false; ui(); refresh(); hint(`${n} bubbles in 1 minute. Repeat the count, then try another distance.`); };
  requestAnimationFrame(f); });
$("#bphot-tbody").addEventListener("click",e=>{ const b=e.target.closest(".x"); if(!b) return; st.data.splice(+b.dataset.i,1); refresh(); });
$("#bphot-clear").addEventListener("click",()=>{ st.data=[]; refresh(); });

const I=d=>1/Math.pow(d/100,2);
function means(){ return [...new Set(st.data.map(r=>r.d))].sort((a,b)=>a-b).map(d=>{ const x=st.data.filter(r=>r.d===d); return [d,x.reduce((a,r)=>a+r.n,0)/x.length,x.length]; }); }
function refresh(){ rows($("#bphot-tbody"),st.data.map(r=>[r.d,fx(I(r.d),0),fx(r.T,1),r.n]),"Leave the pondweed to adjust, then count the bubbles.",4,true); graph(); work(); }
function graph(){ const M=means(); const pts=M.map(m=>[st.axis==="d"?m[0]:I(m[0]),m[1]]);
  plot($("#bphot-graph"),{x:st.axis==="d"?{label:"Distance from lamp / cm",min:0,max:55}:{label:"Light intensity (1 ÷ distance²) / m⁻²",min:0},y:{label:"Rate / bubbles per minute",def:[0,60]},series:[{pts,col:RUNCOL[2],join:pts.length>2?"curve":false}],empty:"Your mean rates will appear here"}); }
function work(){ const el=$("#bphot-work"), {fr,res,step}=W, M=means();
  if(!M.length){ el.innerHTML=`<p class="empty">Record some counts to see the working.</p>`; return; }
  const m=M[0], d=m[0]/100, hot=st.data.some(r=>r.T>21);
  let h=`<div class="work">`+step(1,"Light intensity",`Light intensity ∝ 1 ÷ distance². At ${m[0]} cm:`,[`${fr("1",`(${fx(d,2)} m)²`)} = ${res(fx(I(m[0]),0)+" m⁻²")} (arbitrary units)`]);
  h+=step(2,"Inverse square law",null,[`<span>Halving the distance makes the light 4 times as intense; doubling it makes the light ¼ as intense.</span>`]);
  if(M.length>1){ const a=M[0], b=M[M.length-1]; h+=step(3,"Compare the rates",null,[`<span>At ${a[0]} cm: ${fx(a[1],1)} bubbles/min; at ${b[0]} cm: ${fx(b[1],1)} bubbles/min. The light intensity is ${fx(I(a[0])/I(b[0]),0)} times greater, but the rate is only ${fx(a[1]/Math.max(.1,b[1]),1)} times greater, because at high light intensity other factors (carbon dioxide, temperature) start to limit the rate.</span>`]); }
  if(hot) h+=step(M.length>1?4:3,"Was it a fair test?",null,[`<span><b class="no">No:</b> some readings were taken without the heat shield, so the temperature changed as well as the light intensity.</span>`]);
  el.innerHTML=h+`</div>`; }

lamp(); setT(); ui(); refresh();
register({id:"bphot",group:"rp-bio",num:5,lvl:"RP 5",name:"Photosynthesis",icon:"rp-photo",onShow:()=>{setT();graph();}});
})();

/* ===================================================================== */
/* RP6 Reaction time (a real ruler-drop test)                              */
/* ===================================================================== */
(()=>{
const {$,C,W,fx,bars,rows,build,register,RUNCOL}=LAB;
const COND=["Dominant hand","Other hand","Distracted (counting backwards aloud)"];
const PXCM=6, TOP=52, LEN=50;                 /* 50 cm ruler, 6 px per cm */
const st={cond:0,phase:"idle",t0:0,timer:null,fall:0,data:[]};
LabNotebook.observe("breac",st);

const stage=`<svg id="breac-svg" viewBox="0 0 900 470" role="img" aria-label="A 50 cm ruler held above an open finger and thumb, ready to be dropped and caught">
${C.room(400)}
<g id="breac-ruler"></g>
<g id="breac-hand"><path d="M380 404c-20-30-26-66 6-82l60-6c22 0 26 30 6 34l-38 6" fill="#e9b893" stroke="#b9876a" stroke-width="2"/><path d="M386 336c20-8 46-6 64 6" fill="none" stroke="#b9876a" stroke-width="2"/><path id="breac-thumb" d="M470 360l-28 0" stroke="#e9b893" stroke-width="18" stroke-linecap="round"/></g>
<text x="620" y="120" font-family="Arial" font-size="40" font-weight="700" fill="#fff" id="breac-big"></text>
<text x="620" y="150" font-family="Arial" font-size="14" fill="#c9d2d5" id="breac-small"></text>
</svg>`;

const panel=`
<div class="field"><div class="lbl">Condition you are testing</div><div class="seg c1" id="breac-c">${COND.map((c,i)=>`<label class="opt"><input type="radio" name="breac-c" value="${i}" ${i===0?"checked":""}><span>${c}</span></label>`).join("")}</div></div>
<div class="btnrow"><button class="btn" id="breac-ready">Get ready</button></div>
<button class="btn primary" id="breac-catch" style="min-height:64px;font-size:1.15rem" disabled>Catch!</button>
<div class="readout"><div><span>Ruler reading</span><b id="breac-d">—</b></div><div><span>Reaction time</span><b id="breac-rt">—</b></div></div>
<p class="note" id="breac-hint">Press Get ready, then watch the ruler. The moment it starts to fall, press Catch! (or the space bar). Do at least five tries for each condition.</p>`;

build({id:"breac",eyebrow:"AQA GCSE Combined Science · Biology · Required practical 6 · Homeostasis and response",title:"Reaction time",
 intro:"A real ruler-drop test using your own reactions. The ruler falls when you least expect it; catch it as fast as you can. The distance it falls gives your reaction time, so you can investigate a factor that affects it.",
 stage,bar:`<span>50 cm ruler · reading at the top of the thumb</span><span>g = <b>9.8 m/s²</b></span>`,panel,
 results:`<div class="tbl-wrap"><table><thead><tr><th>Try</th><th>Condition</th><th>Distance / cm</th><th>Reaction time / s</th><th></th></tr></thead><tbody id="breac-tbody"></tbody></table></div>`,
 resultsBtn:`<button class="btn" id="breac-clear" style="min-height:34px;padding:5px 10px">Clear</button>`,
 graphTitle:"Mean reaction time for each condition",graphSub:"Your own results",workTitle:"From distance to reaction time",
 info:{method:[
  "Work in pairs. The person being tested sits with their forearm resting on the edge of a table, with their finger and thumb open about 2 cm apart.",
  "Their partner holds a 30 cm or 50 cm ruler vertically so the zero mark is level with the top of the thumb.",
  "The partner drops the ruler without warning. The person being tested catches it as quickly as possible.",
  "Record the reading on the ruler at the top of the thumb. Repeat at least five times and calculate a mean.",
  "Change one factor, such as using the other hand, being distracted, or after drinking a caffeinated drink, and repeat.",
  "Convert each distance to a reaction time using a conversion table or the equation t = √(2d ÷ g)."],
 vars:["The factor being tested (for example which hand, or a distraction)","Reaction time (from the distance the ruler falls)","Same person and ruler, same starting position of hand and ruler, same unpredictable timing of the drop"],
 safety:["If caffeine is tested, follow the school’s rules: some people should not have caffeine, and nobody should have more than a small, agreed amount.","Make sure the ruler cannot fall onto anyone’s feet or face."],
 qa:[["Why must the ruler be dropped without warning?","So the person cannot predict when it will fall. A predictable drop measures anticipation, not reaction time."],
  ["Why is the test repeated several times and a mean calculated?","Reaction times vary from one try to the next. A mean reduces the effect of this random variation and helps identify anomalies."],
  ["Why might the times measured here be longer than with a real ruler?","On a computer the time also includes delays in the screen and the mouse or keyboard."],
  ["A ruler falls 18 cm before it is caught. Calculate the reaction time.","t = √(2d ÷ g) = √(2 × 0.18 ÷ 9.8) = 0.19 s."],
  ["Name the type of response being measured and the pathway involved.","A conscious, learned response: receptor (eye) → sensory neurone → coordinator (brain, spinal cord) → motor neurone → effector (muscles of the hand)."],
  ["Suggest why reaction time often improves after the first few tries.","Practice: the person gets used to the task. To avoid this affecting the comparison, do some practice tries first or alternate the conditions."]]}
});

const g=980; /* cm/s² */
function ruler(off){ let t=""; for(let cm=0;cm<=LEN;cm++){ const y=TOP+(LEN-cm)*PXCM, L=cm%10===0?26:cm%5===0?18:10; t+=`<line x1="420" x2="${420+L}" y1="${y}" y2="${y}" stroke="#222" stroke-width="${cm%10?0.8:1.4}"/>`; if(cm%5===0) t+=`<text x="${458}" y="${y+4}" font-family="Arial" font-size="11" fill="#222">${cm}</text>`; }
  $("#breac-ruler").innerHTML=`<g transform="translate(0 ${off})"><rect x="416" y="${TOP-8}" width="66" height="${LEN*PXCM+16}" rx="3" fill="#f2e7c6" stroke="#b39a52"/>${t}</g>`; }
const zeroY=()=>TOP+LEN*PXCM;   /* the 0 cm mark starts level with the thumb */
function hand(closed){ $("#breac-thumb").setAttribute("d",closed?"M470 360l-34 0":"M470 360l-20 0"); }
function big(a,b){ $("#breac-big").textContent=a; $("#breac-small").textContent=b||""; }
function hint(t){ $("#breac-hint").textContent=t; }
function ready(){ if(st.phase==="waiting"||st.phase==="falling") return; st.phase="waiting"; ruler(0); hand(false); big("Wait…","Watch the ruler"); $("#breac-catch").disabled=false; $("#breac-ready").disabled=true;
  st.timer=setTimeout(()=>{ st.phase="falling"; st.t0=performance.now(); big("",""); requestAnimationFrame(fall); },1200+Math.random()*2800); }
function fall(now){ if(st.phase!=="falling") return; const t=(now-st.t0)/1000, d=0.5*g*t*t; ruler(d*PXCM);
  if(d>LEN+4){ st.phase="idle"; big("Missed!","It fell more than 50 cm"); hint("Missed. Press Get ready to try again."); reset(); return; } requestAnimationFrame(fall); }
function reset(){ $("#breac-catch").disabled=true; $("#breac-ready").disabled=false; }
function catchIt(){ if(st.phase==="waiting"){ clearTimeout(st.timer); st.phase="idle"; big("Too early!","Wait until the ruler moves"); hint("You pressed before the ruler dropped. That try does not count."); reset(); return; }
  if(st.phase!=="falling") return; const t=(performance.now()-st.t0)/1000, d=0.5*g*t*t; st.phase="idle"; hand(true); ruler(d*PXCM);
  const read=Math.round(d*2)/2, rt=Math.sqrt(2*read/100/9.8);
  st.data.push({c:st.cond,d:read,t:rt}); big(`${fx(rt,3)} s`,`Caught at ${fx(read,1)} cm`); $("#breac-d").textContent=`${fx(read,1)} cm`; $("#breac-rt").textContent=`${fx(rt,3)} s`; reset(); refresh(); hint("Recorded. Press Get ready for the next try."); }
$("#breac-c").addEventListener("change",e=>{ st.cond=+e.target.value; });
$("#breac-ready").addEventListener("click",ready);
$("#breac-catch").addEventListener("click",catchIt);
document.addEventListener("keydown",e=>{ const sec=$("#lab-breac"); if(!sec||sec.hidden||e.code!=="Space") return; const tag=(e.target.tagName||"").toLowerCase(); if(tag==="input"&&e.target.type!=="radio"||tag==="textarea"||tag==="select") return;
  e.preventDefault(); if(st.phase==="idle") ready(); else catchIt(); });
$("#breac-tbody").addEventListener("click",e=>{ const b=e.target.closest(".x"); if(!b) return; st.data.splice(+b.dataset.i,1); refresh(); });
$("#breac-clear").addEventListener("click",()=>{ st.data=[]; refresh(); });

function refresh(){ rows($("#breac-tbody"),st.data.map((r,i)=>[i+1,COND[r.c],fx(r.d,1),fx(r.t,3)]),"Press Get ready and catch the ruler.",4,true); graph(); work(); }
function means(){ return COND.map((c,i)=>{ const d=st.data.filter(r=>r.c===i); return d.length?{i,label:c,v:d.reduce((a,r)=>a+r.t,0)/d.length,n:d.length}:null; }).filter(Boolean); }
function graph(){ bars($("#breac-graph"),{ylabel:"Mean reaction time / s",items:means().map(m=>({label:m.label.replace(" (counting backwards aloud)",""),v:m.v,vl:`${fx(m.v,3)} s`,col:RUNCOL[m.i]})),empty:"Catch the ruler to record a time"}); }
function work(){ const el=$("#breac-work"), {fr,sq,res,step}=W, r=st.data[st.data.length-1], M=means();
  if(!r){ el.innerHTML=`<p class="empty">Catch the ruler to see the calculation.</p>`; return; }
  let h=`<div class="work">`+step(1,"Distance in metres",null,[`${fx(r.d,1)} cm = ${fx(r.d/100,3)} m`])
   +step(2,"Reaction time","The ruler falls from rest with acceleration g, so d = ½gt².",[`t = ${sq(fr("2d","g"))} = ${sq(fr("2 × "+fx(r.d/100,3),"9.8"))} = ${res(fx(r.t,3)+" s")}`]);
  if(M.length) h+=step(3,"Means",null,[M.map(m=>`${m.label}: ${fx(m.v,3)} s (${m.n} ${m.n===1?"try":"tries"})`).join("<br>")]);
  if(M.length>1){ const s=[...M].sort((a,b)=>a.v-b.v); h+=step(4,"Conclusion",null,[`<span>Fastest: ${s[0].label.toLowerCase()} (${fx(s[0].v,3)} s). ${M.some(m=>m.n<5)?"Do at least five tries per condition before drawing a conclusion.":"Check whether the difference is bigger than the spread of your repeat results."}</span>`]); }
  el.innerHTML=h+`</div>`; }

ruler(0); refresh();
register({id:"breac",group:"rp-bio",num:6,lvl:"RP 6",name:"Reaction time",icon:"rp-react",onShow:graph});
})();

/* ===================================================================== */
/* RP7 Field investigations: quadrats and transects                        */
/* ===================================================================== */
(()=>{
const {$,W,fx,plot,rows,build,register,RUNCOL}=LAB;
const FW=30, FH=20, S=19, OX=30, OY=40;       /* field 30 m × 20 m, 19 px per metre */
const Q=0.5, TREE=[0,10];                     /* 0.5 m × 0.5 m quadrat; tree on the left edge */
const dist=(x,y)=>Math.hypot(x-TREE[0],y-TREE[1]);
const dens=(x,y)=>12*(1-Math.exp(-Math.max(0,dist(x,y)-2)/6)); /* daisies per m²: fewer in the shade */
const plants=[]; (()=>{ const max=12; for(let k=0;k<FW*FH*max*1.1;k++){ const x=Math.random()*FW, y=Math.random()*FH; if(Math.random()*max<dens(x,y)) plants.push([x,y]); } })();
const lux=d=>Math.round((18000*(1-0.85*Math.exp(-d/5)))/100)*100;
const st={mode:"rand",q:null,tdist:2,data:[]};
LabNotebook.observe("bfield",st);
const countIn=(x,y)=>plants.filter(p=>p[0]>=x&&p[0]<x+Q&&p[1]>=y&&p[1]<y+Q).length;

const stage=`<svg id="bfield-svg" viewBox="0 0 900 470" role="img" aria-label="A field with a tree on one side, daisies scattered across it, and a quadrat with a close-up view">
<rect width="900" height="470" fill="#2a3b2a"/>
<rect x="${OX}" y="${OY}" width="${FW*S}" height="${FH*S}" fill="#5f9a46"/>
<clipPath id="bfield-clip"><rect x="${OX}" y="${OY}" width="${FW*S}" height="${FH*S}"/></clipPath><g clip-path="url(#bfield-clip)"><circle cx="${OX}" cy="${OY+10*S}" r="${7*S}" fill="#1f3a1c" opacity=".38"/><circle cx="${OX}" cy="${OY+10*S}" r="${4*S}" fill="#1f3a1c" opacity=".3"/></g>
<g fill="#fff">${plants.map(p=>`<circle cx="${(OX+p[0]*S).toFixed(1)}" cy="${(OY+p[1]*S).toFixed(1)}" r="1.2"/>`).join("")}</g>
<circle cx="${OX+8}" cy="${OY+10*S}" r="22" fill="#2e5a26"/><circle cx="${OX+8}" cy="${OY+10*S}" r="7" fill="#5b3c1f"/>
<g id="bfield-tape"></g><g id="bfield-q"></g>
<text x="${OX}" y="${OY-12}" font-family="Arial" font-size="12" fill="#dfe6e9">Field 30 m × 20 m · tree at the left edge</text>
<g transform="translate(640 60)"><rect x="-8" y="-8" width="236" height="236" fill="#1b231b" rx="6"/><rect width="220" height="220" fill="#6aa64f"/><g id="bfield-zoom"></g>
<path d="M0 0h220v220H0z" fill="none" stroke="#f3f0e6" stroke-width="5"/><text x="110" y="246" text-anchor="middle" font-family="Arial" font-size="12" fill="#dfe6e9" id="bfield-zcap">Close-up of the quadrat</text></g>
</svg>`;

const panel=`
<div class="field"><div class="lbl">Method</div><div class="seg c2" id="bfield-mode"><label class="opt"><input type="radio" name="bfield-mode" value="rand" checked><span>Random sampling (population size)</span></label><label class="opt"><input type="radio" name="bfield-mode" value="tran"><span>Transect from the tree (distribution)</span></label></div></div>
<div class="field" id="bfield-tf" hidden><div class="lbl">Distance along the transect <output id="bfield-t-o">2 m</output></div><input type="range" id="bfield-t" min="0" max="28" step="2" value="2" aria-label="Distance from the tree"></div>
<div class="readout"><div><span>Quadrat position</span><b id="bfield-pos">—</b></div><div><span>Daisies in quadrat</span><b id="bfield-n">—</b></div></div>
<div class="btnrow"><button class="btn primary" id="bfield-go">Place quadrat at random coordinates</button></div>
<p class="note" id="bfield-hint">Use random coordinates so every part of the field has an equal chance of being sampled. Sample at least 10 quadrats.</p>`;

build({id:"bfield",eyebrow:"AQA GCSE Combined Science · Biology · Required practical 7 · Ecology",title:"Field investigations",
 intro:"Use quadrats to estimate the population of daisies in a field by random sampling, and use a transect to see how their distribution changes with distance from a tree.",
 stage,bar:`<span>Quadrat <b>0.5 m × 0.5 m</b> (0.25 m²)</span><span>Field area <b>600 m²</b></span>`,panel,
 results:`<div class="tbl-wrap"><table><thead><tr><th>Method</th><th>Position</th><th>Light / lux</th><th>Number of daisies</th><th></th></tr></thead><tbody id="bfield-tbody"></tbody></table></div>`,
 resultsBtn:`<button class="btn" id="bfield-clear" style="min-height:34px;padding:5px 10px">Clear</button>`,
 graphTitle:"Sampling results",graphSub:"",workTitle:"Estimating population size",
 info:{method:[
  "Random sampling: lay two tape measures at right angles along two edges of the area.",
  "Use a random number generator to pick coordinates, place a quadrat with its corner at that point and count the number of the plant species inside it.",
  "Repeat for at least 10 quadrats. Estimate the population: mean number per quadrat × (area of field ÷ area of quadrat).",
  "Transect: lay a tape measure in a straight line from one habitat to another, for example from under a tree out into open ground.",
  "Place a quadrat at regular intervals (for example every 2 m) along the tape and count the plants. Measure an abiotic factor, such as light intensity, at each point.",
  "Plot the number of plants against distance along the transect, and compare it with the abiotic factor."],
 vars:["Position in the field (random coordinates), or distance from the tree along the transect","Number of daisies in each quadrat","Size of quadrat, how plants on the edge are counted, the time of day and season"],
 safety:["Wash your hands after fieldwork, and cover any cuts.","Watch out for hazards such as stinging plants, uneven ground and animal waste; follow the school’s fieldwork rules."],
 qa:[["Why must the quadrats be placed randomly?","To avoid bias: if you chose where to put them, you might pick areas with more (or fewer) plants, so the sample would not represent the whole field."],
  ["Why is taking more quadrats better?","A bigger sample gives a mean that is more likely to be representative of the whole field, so the estimate is more accurate."],
  ["The mean number of daisies is 3.2 per 0.25 m² quadrat. The field is 600 m². Estimate the population.","3.2 × (600 ÷ 0.25) = 3.2 × 2400 = 7680 daisies."],
  ["Why is a transect used instead of random quadrats to study distribution?","A transect samples at set points along a line, so you can see how the number of plants changes with distance and relate it to a changing factor such as light."],
  ["Suggest why there are fewer daisies near the tree.","Less light reaches the ground in the tree’s shade, so the daisies photosynthesise less; the tree also competes for water and mineral ions."],
  ["Suggest a rule for counting plants that lie on the edge of the quadrat.","For example, count plants on two edges (top and left) but not the other two, and apply the same rule every time."]]}
});

function placeQ(x,y,n){ $("#bfield-q").innerHTML=`<rect x="${OX+x*S}" y="${OY+y*S}" width="${Q*S}" height="${Q*S}" fill="none" stroke="#ffd36b" stroke-width="2"/><circle cx="${OX+(x+Q/2)*S}" cy="${OY+(y+Q/2)*S}" r="11" fill="none" stroke="#ffd36b" stroke-width="1.5"/>`;
  const k=220/Q; $("#bfield-zoom").innerHTML=plants.filter(p=>p[0]>=x&&p[0]<x+Q&&p[1]>=y&&p[1]<y+Q).map(p=>{ const cx=(p[0]-x)*k, cy=(p[1]-y)*k; return `<g transform="translate(${cx.toFixed(1)} ${cy.toFixed(1)})">${[0,1,2,3,4,5,6,7].map(i=>`<ellipse rx="3.2" ry="9" transform="rotate(${i*45}) translate(0 -8)" fill="#fff"/>`).join("")}<circle r="5" fill="#f2c230"/></g>`; }).join("");
  $("#bfield-zcap").textContent=`Quadrat at (${fx(x,1)} m, ${fx(y,1)} m): ${n} ${n===1?"daisy":"daisies"}`; $("#bfield-pos").textContent=`(${fx(x,1)}, ${fx(y,1)}) m`; $("#bfield-n").textContent=n; }
function tape(){ $("#bfield-tape").innerHTML=st.mode==="tran"?`<line x1="${OX}" y1="${OY+10*S}" x2="${OX+FW*S}" y2="${OY+10*S}" stroke="#f2e7c6" stroke-width="3" stroke-dasharray="10 4"/>`:`<line x1="${OX}" y1="${OY+FH*S+6}" x2="${OX+FW*S}" y2="${OY+FH*S+6}" stroke="#f2e7c6" stroke-width="3"/><line x1="${OX-6}" y1="${OY}" x2="${OX-6}" y2="${OY+FH*S}" stroke="#f2e7c6" stroke-width="3"/>`; }
function hint(t){ $("#bfield-hint").textContent=t; }
$("#bfield-mode").addEventListener("change",e=>{ st.mode=e.target.value; $("#bfield-tf").hidden=st.mode!=="tran"; $("#bfield-go").textContent=st.mode==="tran"?"Place quadrat here and count":"Place quadrat at random coordinates"; tape();
  hint(st.mode==="tran"?"Place a quadrat every 2 m along the tape and record the light intensity at each point.":"Use random coordinates so every part of the field has an equal chance of being sampled."); graph(); work(); });
$("#bfield-t").addEventListener("input",e=>{ st.tdist=+e.target.value; $("#bfield-t-o").textContent=`${st.tdist} m`; });
$("#bfield-go").addEventListener("click",()=>{ let x,y,row;
  if(st.mode==="rand"){ x=Math.round(Math.random()*(FW-Q)*10)/10; y=Math.round(Math.random()*(FH-Q)*10)/10; const n=countIn(x,y); row={m:"rand",x,y,n,lux:null}; placeQ(x,y,n); }
  else { x=Math.min(FW-Q,st.tdist); y=10-Q/2; const n=countIn(x,y); row={m:"tran",x,y,n,lux:lux(x+Q/2)}; placeQ(x,y,n);
    const i=st.data.findIndex(r=>r.m==="tran"&&r.x===x); if(i>=0){ st.data[i]=row; refresh(); return; } }
  st.data.push(row); refresh(); });
$("#bfield-tbody").addEventListener("click",e=>{ const b=e.target.closest(".x"); if(!b) return; st.data.splice(+b.dataset.i,1); refresh(); });
$("#bfield-clear").addEventListener("click",()=>{ st.data=[]; refresh(); });

const R=()=>st.data.filter(r=>r.m==="rand"), T=()=>st.data.filter(r=>r.m==="tran").sort((a,b)=>a.x-b.x);
function refresh(){ rows($("#bfield-tbody"),st.data.map(r=>[r.m==="rand"?"Random":"Transect",r.m==="rand"?`(${fx(r.x,1)}, ${fx(r.y,1)}) m`:`${fx(r.x,0)} m from tree`,r.lux==null?"—":r.lux,r.n]),"Place a quadrat to start.",4,true); graph(); work(); }
function graph(){ const cv=$("#bfield-graph");
  if(st.mode==="rand"){ const r=R(); let s=0; const pts=r.map((q,i)=>{ s+=q.n; return [i+1,s/(i+1)*(FW*FH/(Q*Q))]; });
    plot(cv,{x:{label:"Number of quadrats sampled",min:0,max:Math.max(10,r.length+1)},y:{label:"Estimated population",def:[0,8000]},series:[{pts,col:RUNCOL[1],join:pts.length>1?"line":false}],empty:"Your running estimate will appear here"}); }
  else { const t=T(); plot(cv,{x:{label:"Distance from the tree / m",min:0,max:30},y:{label:"Number of daisies per quadrat",def:[0,5]},series:[{pts:t.map(q=>[q.x,q.n]),col:RUNCOL[2],join:t.length>1?"line":false}],empty:"Your transect results will appear here"}); } }
function work(){ const el=$("#bfield-work"), {fr,res,step}=W;
  if(st.mode==="rand"){ const r=R(); if(!r.length){ el.innerHTML=`<p class="empty">Sample some random quadrats to estimate the population.</p>`; return; }
    const mean=r.reduce((a,q)=>a+q.n,0)/r.length, est=mean*FW*FH/(Q*Q);
    el.innerHTML=`<div class="work">`+step(1,"Mean per quadrat",`Total daisies ÷ number of quadrats (${r.length}).`,[`${fr(r.reduce((a,q)=>a+q.n,0),r.length)} = ${fx(mean,2)} per quadrat`])
     +step(2,"Scale up to the whole field","Area of field ÷ area of one quadrat.",[`${fr("600 m²","0.25 m²")} = 2400 quadrats would cover the field`])
     +step(3,"Estimated population",null,[`${fx(mean,2)} × 2400 = ${res("≈ "+Math.round(est/10)*10+" daisies")}`])
     +(r.length<10?step(4,"How reliable?",null,[`<span>Only ${r.length} quadrats so far. Sample at least 10 so the mean is more representative.</span>`]):"")+`</div>`; }
  else { const t=T(); if(t.length<2){ el.innerHTML=`<p class="empty">Place quadrats at several points along the transect.</p>`; return; }
    const a=t[0], b=t[t.length-1];
    el.innerHTML=`<div class="work">`+step(1,"Describe the pattern",null,[`<span>At ${fx(a.x,0)} m from the tree: ${a.n} daisies, ${a.lux} lux. At ${fx(b.x,0)} m: ${b.n} daisies, ${b.lux} lux.</span>`])
     +step(2,"Explain it",null,[`<span>${b.n>a.n?"There are more daisies further from the tree, where the light intensity is higher.":"Look for a link between the number of daisies and the light intensity."} Daisies need light for photosynthesis; the tree’s shade reduces light and the tree competes for water and mineral ions.</span>`])
     +step(3,"Correlation, not proof",null,[`<span>Light is correlated with daisy numbers, but other factors (such as soil moisture or trampling) could also change along the transect.</span>`])+`</div>`; } }

tape(); refresh();
register({id:"bfield",group:"rp-bio",num:7,lvl:"RP 7",name:"Field investigations",icon:"rp-field",onShow:graph});
})();
