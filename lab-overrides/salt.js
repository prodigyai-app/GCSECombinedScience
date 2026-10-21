/* RP8 Making salts */
(()=>{
const {$,C,W,fx,gauss,bars,rows,build,register}=LAB;
const MR=249.5, NA=0.025, NEED=5;
const st={step:0,n:0,warm:false,dry:false,data:[]};
LabNotebook.observe("salt",st);
const stage=`<svg id="salt-svg" viewBox="0 0 900 470" role="img" aria-label="Making copper(II) sulfate crystals">${C.room()}<g id="salt-g"></g></svg>`;
const panel=`<div class="btnrow" style="flex-wrap:wrap"><button class="btn" id="salt-warm">Warm the acid</button><button class="btn" id="salt-add">Add a spatula of CuO</button><button class="btn" id="salt-fil">Filter</button><button class="btn" id="salt-ev">Heat to evaporate</button><button class="btn" id="salt-cr">Leave to crystallise</button><button class="btn primary" id="salt-wt">Dry and weigh crystals</button><button class="btn" id="salt-new">Start a new attempt</button></div>
<div class="readout"><div><span>Stage</span><b id="salt-s">—</b></div><div><span>CuO added</span><b id="salt-n">0</b></div></div><p class="note" id="salt-h"></p>`;
build({id:"salt",eyebrow:"AQA GCSE Combined Science · Chemistry · Required practical 8 · Chemical changes",title:"Making a soluble salt",
 intro:"Prepare a pure, dry sample of copper(II) sulfate crystals from copper(II) oxide and dilute sulfuric acid. Compare your method, crystal mass and sample purity.",
 stage,bar:`<span>25.0 cm³ of dilute sulfuric acid</span><span>1 spatula ≈ 0.40 g CuO</span>`,panel,
 results:`<div class="tbl-wrap"><table><thead><tr><th>Attempt</th><th>CuO added / g</th><th>Crystals / g</th><th>Notes</th><th></th></tr></thead><tbody id="salt-tbody"></tbody></table></div>`,
 graphTitle:"Crystal mass from each attempt",graphSub:"Use method and purity notes when comparing masses",
 info:{method:["Measure 25 cm³ of dilute sulfuric acid into a beaker and warm it gently on a tripod and gauze (do not boil).","Add copper(II) oxide a spatula at a time, stirring, until some remains undissolved: the base is in excess, so all the acid has reacted.","Filter the warm mixture to remove the excess copper(II) oxide. Collect the blue filtrate in an evaporating basin.","Heat the filtrate over a water bath or gently until about half the water has evaporated and crystals start to form at the edge.","Leave to cool and crystallise. Filter off the crystals and dry them between filter papers.","Weigh the crystals and compare the crystal mass and quality."],
 vars:["(Preparation, not an investigation)","Mass of crystals obtained","Volume and concentration of acid; method of crystallisation"],
 safety:["Wear eye protection: sulfuric acid and copper(II) sulfate are irritants.","Do not boil the acid; heat gently to avoid spitting.","Copper(II) oxide powder is harmful: avoid raising dust."],
 qa:[["Why is copper(II) oxide added until some is left over?","So that all the sulfuric acid reacts. Excess base can be filtered off; excess acid could not be removed and would contaminate the crystals."],["Why is the acid warmed?","To increase the rate of reaction so the oxide dissolves faster."],["Why is the filtrate not heated to dryness?","Heating to dryness removes the water of crystallisation, giving white anhydrous powder instead of blue crystals, and can decompose the salt."], ["Why might some crystals be lost?","Some salt remains dissolved and some crystals or solution can be lost during transfer. A larger measured mass does not necessarily mean greater purity."]]}});
function draw(){ const d=st.step; let s="";
  if(d<=1){ const blue=Math.min(st.n,NEED)/NEED; s+=GL.tripod(420,300,400,150)+GL.bunsen(420,400,st.warm)+GL.beaker(420,296,130,140,.42,`rgb(${Math.round(160-130*blue)},${Math.round(200-80*blue)},${Math.round(225)})`);
    for(let i=0;i<Math.max(0,st.n-NEED)*8;i++) s+=`<circle cx="${370+(i*23)%100}" cy="${290-(i%3)*3}" r="3" fill="#151515"/>`;
    s+=`<text x="600" y="200" font-family="Arial" font-size="15" fill="#1d2a33">${st.n>NEED?"black solid remains: excess":"copper(II) oxide dissolving"}</text>`; }
  else if(d===2){ s+=`<path d="M380 120h100l-40 50v40h-20v-40z" fill="url(#g-glass)" stroke="#6f8a96"/><path d="M398 128c14 6 34 6 46 0" stroke="#151515" stroke-width="6"/>`+GL.basin(430,380,170,1,"#3f7fd0")+`<path d="M430 210v130" stroke="#3f7fd0" stroke-width="3" stroke-dasharray="3 6"/><text x="520" y="140" font-family="Arial" font-size="14" fill="#1d2a33">residue: excess CuO</text><text x="530" y="360" font-family="Arial" font-size="14" fill="#1d2a33">filtrate: copper(II) sulfate solution</text>`; }
  else if(d===3){ s+=GL.tripod(430,300,400,150)+GL.bunsen(430,400,true)+GL.basin(430,298,170,st.dry?0:.7,"#2a63c4",st.dry?"#f4f4f0":null)+`<text x="560" y="220" font-family="Arial" font-size="14" fill="#1d2a33">${st.dry?"heated to dryness: white powder!":"evaporating: crystals start at the edge"}</text>`; }
  else { s+=GL.basin(430,380,190,st.dry?0:.4,"#5b9be0",st.dry?"#f4f4f0":null); if(!st.dry) [[380,355],[410,362],[445,358],[475,352],[425,346]].forEach(([x,y])=>s+=`<path d="M${x} ${y-10}l10 6v12l-10 6l-10-6v-12z" fill="#1e63c6" stroke="#bcd8ff"/>`); s+=`<text x="560" y="330" font-family="Arial" font-size="14" fill="#1d2a33">${st.dry?"anhydrous powder":"blue crystals"}</text>`; }
  $("#salt-g").innerHTML=s; $("#salt-s").textContent=["Reacting","Reacting","Filtered","Evaporating","Crystallised"][d]; $("#salt-n").textContent=`${st.n} spatulas (${fx(st.n*.4,1)} g)`; }
function hint(t){ $("#salt-h").textContent=t; }
$("#salt-warm").onclick=()=>{ if(st.step>1) return; st.warm=!st.warm; hint(st.warm?"Warming the acid speeds up the reaction.":"Bunsen off."); draw(); };
$("#salt-add").onclick=()=>{ if(st.step>1) return; if(!st.warm&&st.n>=2) hint("The oxide is dissolving slowly. Warming the acid would speed this up."); st.n++; st.step=1; draw(); };
$("#salt-fil").onclick=()=>{ if(st.step!==1) return; if(st.n<=NEED) hint("Warning: no excess solid yet, so some acid has not reacted. Your crystals will be contaminated."); else hint("Excess CuO removed. Now heat the filtrate."); st.excess=st.n>NEED; st.step=2; draw(); };
$("#salt-ev").onclick=()=>{ if(st.step===2){ st.step=3; hint("Heat until crystals start to form, then stop. Pressing again heats to dryness."); } else if(st.step===3){ st.dry=true; hint("You have heated it to dryness: the water of crystallisation has been driven off."); } draw(); };
$("#salt-cr").onclick=()=>{ if(st.step===3){ st.step=4; hint("Crystals have formed. Dry and weigh them."); draw(); } };
$("#salt-wt").onclick=()=>{ if(st.step!==4) return; const used=Math.min(st.n,NEED)/NEED; let y=(0.72+0.08*Math.random())*used; let note="good blue crystals"; if(!st.excess){ y*=.85; note="acid left: sticky, impure crystals"; } if(st.dry){ y*=160/249.5; note="white anhydrous powder (water lost)"; }
  const m=+(NA*MR*y).toFixed(2); st.data.push({cu:+(st.n*.4).toFixed(1),m,note}); refresh(); hint("Recorded. Start a new attempt to compare."); };
$("#salt-new").onclick=()=>{ Object.assign(st,{step:0,n:0,warm:false,dry:false,excess:false}); hint("Measure 25 cm³ of acid into the beaker, then warm it."); draw(); };
$("#salt-tbody").addEventListener("click",e=>{ const b=e.target.closest(".x"); if(!b) return; st.data.splice(+b.dataset.i,1); refresh(); });
function refresh(){ rows($("#salt-tbody"),st.data.map((r,i)=>[i+1,fx(r.cu,1),fx(r.m,2),r.note]),"Make some crystals to record a result.",4,true); graph(); work(); }
function graph(){ bars($("#salt-graph"),{ylabel:"Crystal mass / g",items:st.data.map((r,i)=>({label:`Attempt ${i+1}`,v:r.m,vl:fx(r.m,2)+" g"})),empty:"Record a crystal sample"}); }
function work(){ const el=$("#salt-work"),r=st.data.at(-1);el.innerHTML=r?`<p><b>Crystal mass:</b> ${fx(r.m,2)} g. <b>Observation:</b> ${r.note}.</p><p>Excess insoluble copper oxide can be removed by filtration. Gently concentrate the filtrate, allow it to cool and dry the crystals. Explain how contamination, overheating, incomplete drying and transfer losses affect the sample. Mass alone does not measure purity.</p>`:'<p class="empty">Prepare and weigh a sample to evaluate the method.</p>'; }

hint("Measure 25 cm³ of acid into the beaker, then warm it."); draw(); refresh();
register({id:"salt",group:"rp-chem",num:8,lvl:"RP 8",name:"Making salts",icon:"rp-salt",onShow:()=>{draw();graph();}});
})();


