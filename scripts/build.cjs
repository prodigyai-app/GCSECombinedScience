/* Update deployable data after editing course.json or papers.json. */
const fs=require('node:fs'),vm=require('node:vm'),path=require('node:path');
const root=path.join(__dirname,'..'),c={window:{}};
vm.runInNewContext(fs.readFileSync(path.join(root,'course-data.js'),'utf8'),c);
const course=JSON.parse(fs.readFileSync(path.join(root,'course.json'),'utf8'));
const papers=JSON.parse(fs.readFileSync(path.join(root,'papers.json'),'utf8'));
const safe=o=>JSON.stringify(o).replace(/<\//g,'<\\/');
fs.writeFileSync(path.join(root,'course-data.js'),'window.COURSE='+safe(course)+';\nwindow.PAPERS='+safe(papers)+';\nwindow.COURSE_META='+safe(c.window.COURSE_META)+';\n');
console.log('Updated course-data.js:',course.lessons.length,'lessons and',papers.length,'papers.');
