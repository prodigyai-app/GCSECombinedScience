const test=require('node:test'),assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),vm=require('node:vm');
const root=path.join(__dirname,'..'),read=n=>JSON.parse(fs.readFileSync(path.join(root,n),'utf8'));
const course=read('course.json'),papers=read('papers.json'),html=fs.readFileSync(path.join(root,'index.html'),'utf8');
test('All curriculum records are usable and belong to a course unit',()=>{
 const units=new Set(course.units.map(u=>u.id)),ids=new Set();
 assert.ok(course.lessons.length>=40);
 for(const l of course.lessons){assert.ok(units.has(l.unit),l.id);assert.ok(!ids.has(l.id),l.id);ids.add(l.id);assert.ok(l.notes.length>=2,l.id);assert.ok(l.notes.every(n=>n.html&&n.title),l.id);assert.ok(l.checks.length>=2,l.id);assert.ok(l.exam.length>=1,l.id);for(const q of l.checks){if(q.opts){assert.ok(Number.isInteger(q.a)&&q.a>=0&&q.a<q.opts.length,l.id);}else assert.ok(Number.isFinite(q.a),l.id);}}
});
test('Each exam part has exactly the available marks and valid numerical tolerances',()=>{
 for(const p of papers){assert.equal(p.questions.reduce((s,q)=>s+q.parts.reduce((s,a)=>s+a.m,0),0),p.marks,p.id);for(const q of p.questions){assert.ok(q.parts.length<=10,'Stable part IDs require at most ten parts per question: '+p.id);for(const a of q.parts){assert.ok(Number.isInteger(a.m)&&a.m>0);assert.equal(a.ms.length,a.m,p.id+': '+a.q);if(a.opts)assert.ok(a.a>=0&&a.a<a.opts.length);if(a.answer!==undefined){assert.ok(Number.isFinite(a.answer));if(a.tolerance!==undefined)assert.ok(a.tolerance>=0);}}}}
});
test('Published data matches the editable course and paper files',()=>{
 const c={window:{}};vm.runInNewContext(fs.readFileSync(path.join(root,'course-data.js'),'utf8'),c);
 assert.deepEqual(JSON.parse(JSON.stringify(c.window.PAPERS)),papers);
 assert.deepEqual(JSON.parse(JSON.stringify(c.window.COURSE.lessons)),course.lessons);
});
test('Inline and external JavaScript parses and has no replacement characters',()=>{
 for(const m of html.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
 for(const file of ['learning.js','topic-search.js','numeric-tools.js','config.js','course-data.js'])new vm.Script(fs.readFileSync(path.join(root,file),'utf8'));
 for(const file of ['index.html','course.json','papers.json','learning.js','print.html'])assert.ok(!fs.readFileSync(path.join(root,file),'utf8').includes('\ufffd'),file);
 const print=fs.readFileSync(path.join(root,'print.html'),'utf8');for(const m of print.matchAll(/<script[^>]*>([\s\S]*?)<\/script>/g))new vm.Script(m[1]);
});
test('Course state is isolated, including on shared GitHub Pages origins',()=>{
 const id=html.match(/window\.ALP_SITE="([^"]+)"/)[1];
 assert.ok(html.includes('const DONEKEY="learn-'+id+'-motion-done"'));
 assert.ok(html.includes('const CKEY="learn-'+id+'-check-state"'));
 assert.ok(html.includes('const OWNER="alp-owner-'+id+'"'));
 assert.ok(html.includes('const isSync=k=>/^learn-'+id+'-/'));
 assert.ok(!html.includes('store.get("pl-tab")'));
});
test('Answers and method marks are handled separately and saved on input',()=>{
 assert.ok(html.includes('Final numerical value correct.'));
 assert.ok(html.includes('if(single) s.t=[true]'));
 assert.ok(html.includes('if(t.dataset.xin) s.f=t.value; else s.w=t.value; save();'));
 const tools=require(path.join(root,'numeric-tools.js'));
 assert.equal(tools.parseNumber('1/2'),0.5);assert.ok(Number.isNaN(tools.parseNumber('process.exit()')));
});
test('Assessment coverage and timing match the course specification',()=>{
 const id=html.match(/window\.ALP_SITE="([^"]+)"/)[1];
 if(id==='gcse-combined'){
  assert.equal(papers.length,12);for(const subject of ['Biology','Chemistry','Physics'])for(const tier of ['Foundation','Higher'])for(const paper of [1,2]){const p=papers.find(p=>p.subject===subject&&p.tier===tier&&p.paper===paper);assert.ok(p);assert.equal(p.marks,70);assert.equal(p.minutes,75);}
  assert.ok(course.lessons.every(l=>!l.separate));const imports=read('imports.json');assert.ok(!imports.phys.includes('fo12'));assert.ok(!imports.phys.includes('pm5'));assert.ok(!imports.chem.includes('at9'));assert.ok(!imports.chem.includes('qc6'));
 }else if(id==='gcse-biology'){assert.equal(course.units.length,7);assert.equal(papers.length,4);for(const p of papers){assert.equal(p.marks,100);assert.equal(p.minutes,105);}}
 else{assert.equal(course.units.length,6);assert.deepEqual(papers.map(p=>[p.marks,p.minutes]),[[100,135],[100,135],[70,90]]);assert.ok(course.lessons.some(l=>l.title.toLowerCase().includes('endorsement'))||JSON.stringify(course).includes('Practical Endorsement'));}
});
