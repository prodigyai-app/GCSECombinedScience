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
 /* Realistic bench scenes drawn with the shared lab kit (LAB.C) and glassware (GL), matching the practical labs. */
 function apparatus(c,x,y,mode){
  const C=(window.LAB&&LAB.C)||null;
  if(!C) return `<p class="note">${esc(c.xlabel)}: ${esc(x)}</p>`;
  const G=window.GL||{};
  const r1=v=>(+v).toFixed(1);
  const T=(px,py,s,o={})=>`<text x="${r1(px)}" y="${r1(py)}" font-family="Arial" font-size="${o.size||12}" text-anchor="${o.anchor||'start'}" fill="${o.fill||(py>332?'#c9d2d5':'#26313a')}"${o.weight?` font-weight="${o.weight}"`:''}>${esc(s)}</text>`;
  const card=(title,val,px=636,py=26)=>{const w=244,fs=Math.max(11,Math.min(18,Math.floor((w-24)/(String(val).length*0.6))));return `<g><rect x="${px+2}" y="${py+3}" width="${w}" height="60" rx="6" fill="#000" opacity=".12"/><rect x="${px}" y="${py}" width="${w}" height="60" rx="6" fill="#fbfaf5" stroke="#c9c4b5"/>${T(px+12,py+22,title,{size:11,fill:'#5b6670'})}${T(px+12,py+47,val,{size:fs,weight:700,fill:'#1d2a33'})}</g>`;};
  const val=`${x}${mode&&mode!=='standard'&&c.modes?' · '+(c.modes.find(m=>m[0]===mode)||[,''])[1]:''}`;
  const rng=s=>{let a=s;return()=>((a=(a*9301+49297)%233280)/233280);};
  const thermo=(tx,ty,len,id,TT,o={})=>{const tMin=o.tMin??-10,tMax=o.tMax??110,s0=ty+14,s1=ty+(o.scaleLen||len-40),k=(s1-s0)/(tMax-tMin),bot=ty+len-12,yy=s1-(Math.max(tMin,Math.min(tMax,TT))-tMin)*k;
   return C.thermo(tx,ty,len,id,{tMin,tMax,scaleLen:o.scaleLen}).replace(new RegExp(`(<rect id="${id}"[^>]*?) y="[^"]*"([^>]*?) height="[^"]*"`),`$1 y="${r1(yy)}"$2 height="${r1(bot-yy)}"`);};
  const uid=c.id||'inv';
  const bath=(cx,by,w,h,TT)=>`${C.shadow(cx,by+4,w*.6,7)}<rect x="${cx-w/2}" y="${by-h}" width="${w}" height="${h}" rx="8" fill="#dfe6e8" stroke="#9aa6ab"/><rect x="${cx-w/2+8}" y="${by-h+24}" width="${w-16}" height="${h-32}" rx="4" fill="#9cc8dc" opacity=".75"/><rect x="${cx-w/2+8}" y="${by-h+24}" width="${w-16}" height="5" fill="#fff" opacity=".35"/><rect x="${cx+w/2-78}" y="${by-22}" width="64" height="14" rx="2" fill="#11181c"/><text x="${cx+w/2-46}" y="${by-11.5}" text-anchor="middle" font-family="'JetBrains Mono',ui-monospace,monospace" font-size="10" fill="#ff6b4a">${TT} °C</text>${T(cx+w/2-84,by-11,'WATER BATH',{size:8,anchor:'end',fill:'#5b6670'})}`;
  const tubeIn=(cx,ty,len,col,lv=.55,w=24)=>G.tube?G.tube(cx,ty,len,w,lv,col):`<rect x="${cx-w/2}" y="${ty}" width="${w}" height="${len}" rx="${w/2}" fill="${col}" opacity=".6"/>`;
  const beaker=(cx,by,w,h,lv,col)=>G.beaker?G.beaker(cx,by,w,h,lv,col):`<rect x="${cx-w/2}" y="${by-h}" width="${w}" height="${h}" fill="${col}" opacity=".4"/>`;
  const scope=(sx,by)=>`${C.shadow(sx+20,by+3,80,7)}<path d="M${sx-60} ${by}h150l-10-22h-130z" fill="#2c3236"/><path d="M${sx+40} ${by-22}c40-40 40-150 -10-200l-22 14c36 40 36 130 6 170z" fill="#3a4146"/><rect x="${sx-50}" y="${by-112}" width="120" height="10" rx="2" fill="#23282c"/><rect x="${sx-20}" y="${by-104}" width="40" height="5" fill="#9aa0a6"/><circle cx="${sx+44}" cy="${by-70}" r="13" fill="#1e2326"/><circle cx="${sx+44}" cy="${by-70}" r="6" fill="#4a5258"/><path d="M${sx-8} ${by-150}l14 32h14l-4-34z" fill="#5c656b"/><rect x="${sx-14}" y="${by-232}" width="30" height="86" rx="4" transform="rotate(-18 ${sx} ${by-190})" fill="#2a3034"/><rect x="${sx-30}" y="${by-262}" width="22" height="36" rx="3" transform="rotate(-18 ${sx} ${by-190})" fill="#1b1f22"/><circle cx="${sx}" cy="${by-128}" r="7" fill="#f5e6a8" opacity=".9"/>`;
  const view=(cx,cy,R,inner,label)=>`<circle cx="${cx}" cy="${cy}" r="${R+14}" fill="#0b0d0e"/><clipPath id="${uid}-vc"><circle cx="${cx}" cy="${cy}" r="${R}"/></clipPath><g clip-path="url(#${uid}-vc)"><rect x="${cx-R}" y="${cy-R}" width="${2*R}" height="${2*R}" fill="#f6f1e2"/>${inner}</g><circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#000" stroke-opacity=".35" stroke-width="10"/>${T(cx,cy+R+34,label,{size:11,anchor:'middle',fill:'#c9d2d5'})}`;
  const stopwatch=(sx,sy)=>C.stopwatch(sx,sy,`${uid}-sw`);
  const lamp=(lx,by,on,dir=-1)=>`${C.shadow(lx,by+3,46,6)}<rect x="${lx-40}" y="${by-10}" width="80" height="10" rx="3" fill="url(#g-iron)"/><path d="M${lx} ${by-10}V${by-150}l${dir*-50} -10" stroke="#3a4146" stroke-width="7" fill="none" stroke-linecap="round"/><g transform="translate(${lx+dir*-50} ${by-160}) rotate(${dir>0?200:-20})"><path d="M0 -14L44 -30V30L0 14Z" fill="#2f3539"/><ellipse cx="44" cy="0" rx="8" ry="30" fill="${on?'#fff3c4':'#555c60'}"/></g>${on?`<polygon points="${lx+dir*-56},${by-196} ${lx+dir*-56},${by-124} ${lx+dir*-300},${by-60} ${lx+dir*-300},${by-260}" fill="#fff3b0" opacity=".28"/>`:''}`;
  let d='',room=true,dark=false;
  switch(c.model){
   case 'inhibition': case 'culture':{
    const cx=330,cy=388,RX=170,RY=56,R=rng(7);let dots='';
    const zone=c.model==='inhibition'?expected(c,x)*3.78/2:0;
    const n=c.model==='culture'?Math.min(320,Math.round(expected(c,x,mode))):900;
    for(let i=0;i<n;i++){const a=R()*Math.PI*2,rr=Math.sqrt(R())*.93,px=cx+Math.cos(a)*RX*rr,py=cy+Math.sin(a)*RY*rr;if(zone&&((px-cx)/zone)**2+((py-cy)/(zone*RY/RX))**2<1)continue;dots+=`<ellipse cx="${r1(px)}" cy="${r1(py)}" rx="${c.model==='culture'?2.6:1.5}" ry="${c.model==='culture'?1.3:.8}" fill="${c.model==='culture'?'#f3efe0':'#b89a5a'}" opacity=".9"/>`;}
    d=`${C.shadow(cx,cy+16,RX*1.05,18)}<ellipse cx="${cx}" cy="${cy+8}" rx="${RX+6}" ry="${RY+6}" fill="#cfdde2" opacity=".55" stroke="#8fa3ab"/><ellipse cx="${cx}" cy="${cy}" rx="${RX}" ry="${RY}" fill="${c.model==='culture'?'#c9b27a':'#e7d3a0'}"/>${dots}`;
    if(zone)d+=`<ellipse cx="${cx}" cy="${cy}" rx="${r1(zone)}" ry="${r1(zone*RY/RX)}" fill="#f2e6c4" stroke="#c9b27a" stroke-dasharray="3 2"/><ellipse cx="${cx}" cy="${cy}" rx="11" ry="4" fill="#fff" stroke="#888"/>`;
    d+=`<ellipse cx="${cx}" cy="${cy-6}" rx="${RX+8}" ry="${RY+8}" fill="url(#g-glass)" stroke="#8fa3ab" stroke-opacity=".8"/><path d="M${cx-RX-6} ${cy-14}l18 30M${cx+RX+6} ${cy-14}l-18 30" stroke="#e8d27a" stroke-width="9" opacity=".85"/>${T(cx,cy+96,c.model==='culture'?'Agar plate, lid taped (incubated at 25 °C)':'Lawn of bacteria on agar; antibiotic disc at the centre',{size:11,anchor:'middle',fill:'#c9d2d5'})}`;
    if(c.model==='inhibition')d+=C.rule(560,372,10,17,{label:''});
    break;}
   case 'tropism':{
    if(String(mode).startsWith('gravity')){const root=mode==='gravityroot',ang=Math.abs(expected(c,x,mode))*Math.PI/180,bx=250,by0=270,L=200;
     d=`${C.shadow(330,402,170,9)}<rect x="160" y="150" width="340" height="250" rx="6" fill="#3b2f25" opacity=".85" stroke="#6b5240"/>`+T(330,140,'Light-proof box: gravity is the only directional stimulus',{size:12,anchor:'middle'});
     d+=`<rect x="190" y="${by0-20}" width="40" height="40" rx="6" fill="#e9dfc6" stroke="#b9a77a"/>`;
     for(const off of [-14,0,14]){const ex=bx+L*Math.cos(ang),ey=by0+off+(root?1:-1)*L*Math.sin(ang);d+=`<path d="M${bx-30} ${by0+off}H${bx}Q${bx+L*.6} ${by0+off} ${r1(ex)} ${r1(ey)}" fill="none" stroke="${root?'#e6d8b8':'#6aa84f'}" stroke-width="5" stroke-linecap="round"/>`;}
     d+=T(330,428,root?'Seedling laid horizontally: root tip bends down':'Seedling laid horizontally: shoot tip bends up',{size:11,anchor:'middle'})+`<path d="M560 200v60m-8-12 8 12 8-12" stroke="#f2c14e" stroke-width="3" fill="none"/>`+T(574,236,'gravity',{size:12,fill:'#26313a'});
     break;}
    const on=mode!=='dark', th=Math.abs(expected(c,x,mode))*Math.PI/180, cx=330, sy=318, L=150;
    const ex=cx+L*Math.sin(th), ey=sy-L*Math.cos(th);
    d=`${C.shadow(cx,402,70,8)}<path d="M${cx-62} 318h124l-14 82h-96z" fill="#b5653a"/><rect x="${cx-68}" y="310" width="136" height="12" rx="3" fill="#c97847"/><ellipse cx="${cx}" cy="316" rx="60" ry="6" fill="#4b3424"/>`;
    for(const off of [-30,0,30]){const bx=cx+off,ex2=bx+L*.9*Math.sin(th),ey2=sy-L*.9*Math.cos(th);d+=`<path d="M${bx} ${sy}Q${bx} ${sy-L*.5} ${r1(ex2)} ${r1(ey2)}" fill="none" stroke="#6aa84f" stroke-width="5" stroke-linecap="round"/><ellipse cx="${r1(ex2)}" cy="${r1(ey2)}" rx="9" ry="4" transform="rotate(${r1(th*180/Math.PI)} ${r1(ex2)} ${r1(ey2)})" fill="#8bc34a"/>`;}
    d+=lamp(690,400,on,1)+T(690,428,on?'Lamp: light from one side':'Lamp off (dark control)',{size:11,anchor:'middle',fill:'#c9d2d5'});
    if(!on){d+=`<rect x="${cx-110}" y="120" width="220" height="282" rx="4" fill="#3b2f25" opacity=".72" stroke="#6b5240"/>`+T(cx,110,'Light-proof box',{size:12,anchor:'middle'});}
    d+=T(cx,430,'Seedlings (oat coleoptiles)',{size:11,anchor:'middle',fill:'#c9d2d5'});
    void ex;void ey;break;}
   case 'calibration': case 'mitosis':{
    d=scope(150,400);const cx=470,cy=200,R=150;let inner='';
    if(c.model==='calibration'){const dv=2.6,x0=cx-130;for(let i=0;i<=100;i++){const px=x0+i*dv,L=i%10===0?16:i%5===0?11:7;inner+=`<line x1="${r1(px)}" x2="${r1(px)}" y1="${cy}" y2="${cy-L}" stroke="#111" stroke-width="${i%10?.6:1}"/>`;if(i%10===0)inner+=`<text x="${r1(px)}" y="${cy-20}" text-anchor="middle" font-family="Arial" font-size="9" fill="#111">${i}</text>`;}
     const sp=50*dv*10/x;inner+=`<rect x="${cx-R}" y="${cy+10}" width="${2*R}" height="36" fill="#e8dcc0" opacity=".7"/>`;for(let i=0;x0+i*sp<=cx+R;i++){const px=x0+i*sp;inner+=`<line x1="${r1(px)}" x2="${r1(px)}" y1="${cy+12}" y2="${cy+(i%5===0?40:30)}" stroke="#7a2e1a" stroke-width="1.2"/>`;}
     inner+=`<text x="${cx}" y="${cy+68}" text-anchor="middle" font-family="Arial" font-size="10" fill="#7a2e1a">stage micrometer: 10 μm per division</text><text x="${cx}" y="${cy-44}" text-anchor="middle" font-family="Arial" font-size="10" fill="#111">eyepiece graticule</text>`;}
    else{const R2=rng(11);let k=0;const mit=new Set();const tot=96;const want=Math.round(tot*x/200);while(mit.size<want)mit.add(Math.floor(R2()*tot));
     for(let row=0;row<8;row++)for(let col=0;col<12;col++,k++){const px=cx-R+8+col*26+(row%2)*12,py=cy-R+44+row*30;inner+=`<rect x="${px}" y="${py}" width="24" height="28" rx="4" fill="#f1ddc0" stroke="#c9a77d"/>`+(mit.has(k)?`<path d="M${px+6} ${py+8}l12 12M${px+18} ${py+8}l-12 12M${px+12} ${py+5}v18" stroke="#5a1f63" stroke-width="2.4" stroke-linecap="round"/>`:`<ellipse cx="${px+12}" cy="${py+14}" rx="7" ry="6" fill="#8e5aa4"/>`);}}
    d+=view(cx,cy,R,inner,c.model==='calibration'?'View down the eyepiece (×400)':'Root-tip squash, stained (×400): dark crosses are cells in mitosis');
    break;}
   case 'sampling':{
    room=false;const R=rng(5);let g=`<rect width="900" height="470" fill="#5f9a4a"/>`;for(let i=0;i<900;i++){const px=R()*900,py=R()*470;g+=`<path d="M${r1(px)} ${r1(py)}l2 -7" stroke="${R()<.5?'#4f8a3c':'#79b25f'}" stroke-width="1.4"/>`;}
    g+=`<ellipse cx="-20" cy="160" rx="170" ry="210" fill="#2f5a25" opacity=".55"/>`;
    const X=m=>60+m*26;for(let i=0;i<260;i++){const m=R()*31,dens=Math.max(0,18-0.55*m)/18;if(R()>dens)continue;const px=X(m),py=40+R()*320;g+=`<g transform="translate(${r1(px)} ${r1(py)})"><circle r="5" fill="#fff"/><circle r="2.2" fill="#f2c94c"/></g>`;}
    g+=`<rect x="40" y="398" width="${X(30)-20}" height="26" fill="#f2c14e" stroke="#9c7a1e"/>`;for(let m=0;m<=30;m++)g+=`<line x1="${X(m)}" x2="${X(m)}" y1="398" y2="${m%5?406:412}" stroke="#222"/>`+(m%5?'':`<text x="${X(m)}" y="420" text-anchor="middle" font-family="Arial" font-size="9" fill="#222">${m} m</text>`);
    const q=X(x),s=52;g+=`<rect x="${q-s/2}" y="${200-s/2}" width="${s}" height="${s}" fill="none" stroke="#f5f5f5" stroke-width="5"/>`;for(let i=1;i<5;i++)g+=`<line x1="${q-s/2+i*s/5}" x2="${q-s/2+i*s/5}" y1="${200-s/2}" y2="${200+s/2}" stroke="#eee" stroke-width=".8"/><line y1="${200-s/2+i*s/5}" y2="${200-s/2+i*s/5}" x1="${q-s/2}" x2="${q+s/2}" stroke="#eee" stroke-width=".8"/>`;
    d=g+T(60,446,'Tree at 0 m · tape measure along the transect · 0.25 m² quadrat',{size:11,fill:'#eef5e8'});break;}
   case 'potometer':{
    const pos=Math.min(380,expected(c,x,mode)*1.0);
    d=C.stand(140,402,70)+C.clamp(140,150,210,22)+`<path d="M210 260V150" stroke="#2b2f33" stroke-width="10"/>`;
    d+=`<path d="M210 150C200 120 190 100 175 80M210 150C220 115 238 95 255 82M210 150C205 125 214 100 210 70" stroke="#4e8a3a" stroke-width="3" fill="none"/>`+[[175,80],[255,82],[210,70],[188,104],[232,104],[196,128],[226,126]].map(([a,b],i)=>`<ellipse cx="${a}" cy="${b}" rx="15" ry="7" transform="rotate(${i%2?30:-30} ${a} ${b})" fill="#6aa84f"/>`).join('');
    if(mode==='humid')d+=`<path d="M150 50Q210 20 270 50L280 170H140Z" fill="#e8f4f8" opacity=".35" stroke="#cfe3ea"/>`+T(285,60,'Clear bag (humid air)',{size:11});
    d+=`<path d="M210 260v40h560" fill="none" stroke="url(#g-glass)" stroke-width="10"/><path d="M210 260v40h560" fill="none" stroke="#6f8a96" stroke-opacity=".7" stroke-width="1.2"/><rect x="${r1(250+pos)}" y="295" width="14" height="10" rx="5" fill="#fff" stroke="#556"/><rect x="300" y="250" width="70" height="24" rx="3" fill="url(#g-glass)" stroke="#6f8a96"/><path d="M335 274v26" stroke="#6f8a96" stroke-width="3"/>${T(335,244,'reservoir tap',{size:10,anchor:'middle'})}`;
    d+=C.rule(250,310,30,17,{label:''})+T(250,370,'Capillary tube: the air bubble moves as the shoot takes up water',{size:11,fill:'#c9d2d5'});
    if(x>0)d+=`<g transform="translate(60 200)"><circle r="34" fill="#2a3034"/>${[0,120,240].map(a=>`<ellipse rx="26" ry="9" transform="rotate(${a}) translate(14 0)" fill="#7d8a93"/>`).join('')}<circle r="6" fill="#111"/></g><path d="M100 180h50M100 200h60M100 220h50" stroke="#9cc8dc" stroke-width="2" stroke-dasharray="6 5"/>`+T(60,250,'Fan',{size:11,anchor:'middle'});
    break;}
   case 'respirometer':{
    const disp=Math.min(70,expected(c,x,mode)*2.5);
    d=bath(300,402,360,150,x)+thermo(170,170,220,`${uid}-th`,x,{tMin:0,tMax:50});
    for(const [tx,boil] of [[270,mode==='boiled'],[370,null]]){d+=tubeIn(tx,180,190,'#d8dde0',.2,36)+`<rect x="${tx-15}" y="166" width="30" height="18" rx="3" fill="#b03a2e"/><path d="M${tx-14} 292h28" stroke="#9aa" stroke-dasharray="2 2"/><rect x="${tx-12}" y="330" width="24" height="20" rx="3" fill="#f4f4ee" opacity=".9"/>`;
     d+=boil===null?[0,1,2,3,4].map(i=>`<circle cx="${tx-10+i*5}" cy="284" r="4" fill="#e9eef0" stroke="#9aa"/>`).join(''):[0,1,2,3,4,5].map(i=>`<ellipse cx="${tx-11+(i%3)*11}" cy="${276+Math.floor(i/3)*8}" rx="5" ry="3.5" fill="${boil?'#8a6a42':'#e3c27a'}"/>`).join('');}
    const ux=520,uy0=110,uy1=250,mid=190;
    d+=`<path d="M270 166V100H${ux}V${uy0}M370 166V130H${ux+50}V${uy0}" fill="none" stroke="#6f8a96" stroke-width="4" stroke-opacity=".85"/><path d="M${ux} ${uy0}V${uy1}a25 25 0 0 0 50 0V${uy0}" fill="none" stroke="url(#g-glass)" stroke-width="12"/><path d="M${ux} ${uy0}V${uy1}a25 25 0 0 0 50 0V${uy0}" fill="none" stroke="#6f8a96" stroke-opacity=".7" stroke-width="1.2"/>`;
    d+=`<path d="M${ux} ${r1(mid-disp)}V${uy1}a25 25 0 0 0 50 0V${r1(mid+disp)}" fill="none" stroke="#c0392b" stroke-width="8"/>`+C.rule(ux+66,uy0,5,32,{vert:true,label:''});
    d+=T(ux+120,150,'U-tube manometer',{size:11})+T(270,154,mode==='boiled'?'boiled seeds':'germinating seeds',{size:10,anchor:'middle'})+T(370,122,'glass beads',{size:10,anchor:'middle'})+T(330,428,'Fluid rises on the seeds side as oxygen is used; soda lime absorbs CO₂',{size:11,anchor:'middle'});
    break;}
   case 'datalogger':{
    const on=mode!=='dark';
    d=beaker(320,400,170,190,.8,'#a9d3e3')+`<path d="M320 392V300M320 340l-26-22M320 330l28-26M320 360l-30-14M320 314l22-22" stroke="#3f7d2c" stroke-width="4" stroke-linecap="round"/>`+[[294,318],[348,304],[290,346],[342,292],[300,300]].map(([a,b])=>`<ellipse cx="${a}" cy="${b}" rx="8" ry="4" fill="#5d9c45"/>`).join('');
    if(on)for(let i=0;i<6;i++)d+=`<circle cx="${330+i*6}" cy="${290-i*14}" r="3" fill="#fff" opacity=".7"/>`;
    d+=C.stand(470,402,90)+C.clamp(470,150,380,20)+`<rect x="372" y="140" width="16" height="200" rx="7" fill="#1d2226"/><rect x="374" y="320" width="12" height="26" fill="#9aa"/><path d="M380 140C380 90 470 70 560 120" fill="none" stroke="#111" stroke-width="5"/>`;
    d+=`${C.shadow(640,402,90,7)}<rect x="560" y="300" width="170" height="100" rx="10" fill="#2a3034" stroke="#000"/><rect x="574" y="314" width="142" height="48" rx="4" fill="url(#g-lcd)"/><text x="645" y="333" text-anchor="middle" font-family="Arial" font-size="8" fill="#4b553e">DISSOLVED O₂ / mg dm⁻³</text><text x="645" y="354" text-anchor="middle" font-family="'JetBrains Mono',ui-monospace,monospace" font-size="17" font-weight="600" fill="#1f2a18">${y==null?'--.--':(+y).toFixed(2)}</text>${T(645,384,'DATA LOGGER',{size:8,anchor:'middle',fill:'#9aa3a9'})}`;
    d+=lamp(130,400,on,-1);break;}
   case 'colorimeter':{
    const vals=c.values||[x];
    d=`${C.shadow(170,402,70,6)}<rect x="90" y="300" width="160" height="100" rx="6" fill="#b48a5a"/>`;vals.forEach((v,i)=>{const tx=110+i*24;d+=tubeIn(tx,230,150,`rgba(40,90,190,${(0.08+0.16*v).toFixed(2)})`,.7,18)+(v===x?`<path d="M${tx-12} 222h24" stroke="#f2a63a" stroke-width="3"/>`:'');});
    d+=`${C.shadow(560,402,150,9)}<path d="M420 400h280l-10-150h-260z" fill="url(#g-plastic)" stroke="#a7aba4"/><rect x="460" y="270" width="170" height="54" rx="4" fill="#0d1d27"/><rect x="464" y="274" width="162" height="46" rx="3" fill="url(#g-lcdBlue)"/><text x="545" y="306" text-anchor="middle" font-family="'JetBrains Mono',ui-monospace,monospace" font-size="20" font-weight="600" fill="#0d2a3a">${y==null?'0.000':(+y).toFixed(3)}</text><text x="620" y="286" text-anchor="end" font-family="Arial" font-size="7" fill="#0d2a3a">ABS</text><rect x="650" y="262" width="26" height="30" rx="2" fill="#1b2125"/>`+tubeIn(663,236,40,`rgba(40,90,190,${(0.08+0.16*x).toFixed(2)})`,.8,16)+T(560,380,'COLORIMETER · red filter',{size:8,anchor:'middle',fill:'#4b5258'})+T(170,430,'Standards in the rack (blank first)',{size:11,anchor:'middle',fill:'#c9d2d5'});
    break;}
   case 'chromatography':{
    const L=x,front=330-L*3.2,pig=330-expected(c,x,mode)*3.2;
    d=C.stand(200,402,40)+C.clamp(200,70,330,26)+`<rect x="300" y="60" width="60" height="345" rx="28" fill="url(#g-glass)" stroke="#6f8a96" stroke-opacity=".8"/><rect x="304" y="352" width="52" height="40" rx="18" fill="#cfe3ea" opacity=".7"/><rect x="304" y="54" width="52" height="16" rx="3" fill="#c97847"/>`;
    d+=`<rect x="316" y="70" width="28" height="300" fill="#f8f5ea" stroke="#d9d3c2"/><line x1="316" x2="344" y1="330" y2="330" stroke="#555" stroke-width="1"/><rect x="316" y="${r1(front)}" width="28" height="${r1(370-front)}" fill="#cfe3ea" opacity=".35"/><line x1="316" x2="344" y1="${r1(front)}" y2="${r1(front)}" stroke="#4a7fb5" stroke-dasharray="3 2"/><rect x="319" y="${r1(pig-4)}" width="22" height="8" rx="3" fill="${mode==='carotene'?'#e6a129':'#2f8a44'}"/>`;
    d+=`<path d="M350 322h60M350 ${r1(front)}h60" stroke="#26313a" stroke-width="1" opacity=".6"/>`+T(416,318,'pencil start line',{size:11})+T(416,r1(front+4),'solvent front',{size:11})+T(110,440,'Boiling tube with chromatography paper; solvent below the start line',{size:11,fill:'#c9d2d5'});
    break;}
   case 'electrophoresis':{
    d=`${C.shadow(330,404,230,10)}<path d="M120 400h420l-20-90h-380z" fill="#d7e3ea" opacity=".65" stroke="#8fa3ab"/><path d="M140 392h380l-16-70h-348z" fill="#7fb3d5" opacity=".6"/><path d="M190 380h280l-10-50h-260z" fill="#eaf2f6" opacity=".85" stroke="#a9bccb"/>`;
    const lane=(lx,len)=>`<path d="M${lx} ${348-0}l0 0" />`+'';void lane;
    const bandY=v=>334+(expected(c,v)/100)*40;
    for(let i=0;i<4;i++)d+=`<rect x="${226+i*56}" y="332" width="30" height="3" fill="#33405e"/>`;
    for(const v of [100,300,1000,3000,10000])d+=`<rect x="226" y="${r1(bandY(v))}" width="30" height="2.5" fill="#2b3f8d"/>`;
    d+=`<rect x="282" y="${r1(bandY(x))}" width="30" height="2.8" fill="#2b3f8d"/>`;
    d+=`<rect x="128" y="330" width="10" height="24" fill="#111"/><rect x="522" y="330" width="10" height="24" fill="#b0261c"/>`+C.psu(640,280,`${uid}-psu`,{max:150,label:'POWER SUPPLY'})+`<path d="M133 330C140 250 600 230 690 330" fill="none" stroke="#111" stroke-width="3"/><path d="M527 330C540 270 690 260 740 330" fill="none" stroke="#c0392b" stroke-width="3"/>`;
    d+=T(226,318,'ladder',{size:10})+T(282,318,'sample',{size:10})+T(120,440,'Agarose gel in buffer: DNA (negative) moves towards the positive electrode',{size:11,fill:'#c9d2d5'});
    break;}
   case 'permeability': case 'decay': case 'enzyme':{
    const TT=c.model==='enzyme'?37:x;
    d=bath(330,402,380,160,TT)+thermo(195,150,240,`${uid}-th`,TT,{tMin:0,tMax:100});
    let col='#e8d9c0',lv=.45;
    if(c.model==='permeability'){col=`rgba(160,20,70,${(0.12+0.8*expected(c,x)).toFixed(2)})`;}
    if(c.model==='decay')col=y==null?'rgba(230,110,170,.75)':'rgba(240,235,215,.8)';
    if(c.model==='enzyme')col=`rgba(40,90,190,${Math.min(.85,0.1+0.18*Math.min(4,x)).toFixed(2)})`;
    for(const [i,tx] of [[0,290],[1,350],[2,410]].map(a=>a))d+=tubeIn(tx,190,190,col,lv,30)+(c.model==='permeability'?[0,1].map(k=>`<rect x="${tx-7}" y="${336+k*10}" width="14" height="8" rx="1" fill="#7a1638"/>`).join(''):'');
    d+=stopwatch(700,290);
    d+=T(330,440,c.model==='permeability'?'Beetroot discs in distilled water at the bath temperature':c.model==='decay'?'Milk + lipase + phenolphthalein in a water bath':'Enzyme and substrate tubes equilibrated at 37 °C',{size:11,anchor:'middle',fill:'#c9d2d5'});
    break;}
   case 'osmosis':{
    const vals=c.values||[x];d=`${C.shadow(330,402,240,8)}<rect x="90" y="300" width="${vals.length*66+30}" height="100" rx="6" fill="#b48a5a" opacity=".95"/>`;
    vals.forEach((v,i)=>{const tx=125+i*66;d+=tubeIn(tx,200,190,`rgba(200,200,170,${(0.15+v*.9).toFixed(2)})`,.6,34)+`<rect x="${tx-6}" y="${300}" width="12" height="60" rx="3" fill="#efe3a4" stroke="#c9b26a"/>`+(v===x?`<path d="M${tx-18} 190h36" stroke="#f2a63a" stroke-width="3"/>`:'')+`<text x="${tx}" y="420" text-anchor="middle" font-family="Arial" font-size="10" fill="#c9d2d5">${v}</text>`;});
    d+=C.balance(640,300,`${uid}-bal`).replace('>0.00<',`>${y==null?'0.00':'2.'+String(Math.round(50+(+y)*1.5)).padStart(2,'0')}<`)+T(330,440,'Potato cylinders in sucrose solutions (mol dm⁻³)',{size:11,anchor:'middle',fill:'#c9d2d5'});
    break;}
   case 'cross':{
    const cloudy=y!=null;
    d=`${C.shadow(380,402,140,8)}<rect x="250" y="372" width="260" height="30" fill="#fbfaf5" stroke="#d9d3c2"/><path d="M340 392l80-12M340 380l80 12" stroke="#111" stroke-width="7"/>`+(G.flask?G.flask(380,398,150,.55,cloudy?'rgba(229,215,134,.95)':'rgba(229,215,134,.25)'):'')+stopwatch(620,280)+T(380,440,cloudy?'The cross can no longer be seen':'The cross is still visible through the flask',{size:11,anchor:'middle',fill:'#c9d2d5'});
    break;}
   default:{d=beaker(330,400,180,200,.6,'#9cc8dc')+C.stand(470,402,90)+C.clamp(470,150,370,20)+`<rect x="362" y="140" width="16" height="200" rx="7" fill="#1d2226"/>`;}
  }
  const bg=room?`${C.room(330)}${C.benchFront(440)}`:'';
  return `<svg viewBox="0 0 900 470" role="img" aria-label="${esc(c.title)}: apparatus" style="display:block;width:100%;color:var(--ink)">${bg}${d}${card(c.xlabel,val)}</svg>`;
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
