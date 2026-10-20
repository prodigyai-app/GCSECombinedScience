/* Reuse the current Biology lessons; preserve native Trilogy-only adaptations. */
const fs=require('node:fs'),path=require('node:path'),cp=require('node:child_process');
const root=path.join(__dirname,'..');
(async()=>{
 const response=await fetch('https://raw.githubusercontent.com/prodigyai-app/GCSEBiology/main/course.json');
 if(!response.ok)throw Error('Biology download failed: '+response.status);
 const source=await response.json(),course=JSON.parse(fs.readFileSync(path.join(root,'course.json'),'utf8'));
 const map={1:1,3:2,4:3,5:4,6:5,7:6,9:7};
 const remap=x=>Array.isArray(x)?x.map(remap):x&&typeof x==='object'?Object.fromEntries(Object.entries(x).map(([k,v])=>[k,remap(v)])):typeof x==='string'?x.replace(/(RP\s*|[Rr]equired practical(?: activity)?\s+)(\d+)\b/g,(_,prefix,n)=>prefix+(map[n]??n)):x;
 course.lessons=[...remap(source.lessons.filter(l=>!l.separate)),...course.lessons.filter(l=>!l.id.startsWith('b-'))];
 course.units=[...source.units.map(u=>({...u,subject:'Biology',subtitle:u.subtitle+' · shared with GCSE Biology'})),...course.units.filter(u=>u.subject!=='Biology')];
 fs.writeFileSync(path.join(root,'course.json'),JSON.stringify(course,null,2));
 const result=cp.spawnSync(process.execPath,[path.join(__dirname,'build.cjs')],{stdio:'inherit'});
 if(result.status)process.exitCode=result.status;
 console.log('Shared Biology refreshed. Review changes and run the course checks before publishing.');
})().catch(error=>{console.error(error.message);process.exitCode=1;});
