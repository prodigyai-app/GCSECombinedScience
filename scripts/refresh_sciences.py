from pathlib import Path
import json,re,urllib.request,subprocess,hashlib
PROJECT=Path(__file__).resolve().parents[1]
ROOT=PROJECT/'sources'
ROOT.mkdir(exist_ok=True)
SCRIPT=re.compile(r'<script[^>]*>([\s\S]*?)</script>')
def scripts(source):return [m[1] for m in SCRIPT.finditer(source)]

def js(value):return json.dumps(value,ensure_ascii=False).replace('</','<\\/')

def tag(code):return '<script>\n'+code+'\n</script>\n'

def combined_corrections(code,subject):
 if subject=='chem':
  # Preserve nitrate salt chemistry without incorrectly applying the non-oxidising
  # acid + metal rule to nitric acid.
  needle='function draw(){ const A=ACID[+$("#cc4-a").value], Bs=BASE[+$("#cc4-b").value];'
  guard='''\n  if(A[0]==="HNO3"&&Bs[2]==="metal"){ set("cc4-w","Nitric acid is an oxidising acid: metal reactions do not follow the general hydrogen rule."); set("cc4-e",""); set("cc4-n","This combination is outside the model. Choose a metal oxide, hydroxide or carbonate to make a nitrate salt."); ["cc4-s","cc4-sf","cc4-o"].forEach(k=>set(k,"—")); return; }'''
  code=code.replace(needle,needle+guard)
  code=code.replace('Use a titration to add exactly the right amount.','Hydrogen ions react with hydroxide ions to form water.')
  code=code.replace('acid + metal → salt + hydrogen','dilute hydrochloric/sulfuric acid + reactive metal → salt + hydrogen')
  code=code.replace('Copper is less reactive than hydrogen, so it does not react with dilute acids.','Copper is less reactive than hydrogen, so it does not produce hydrogen with dilute hydrochloric or sulfuric acid.')
  for beginning in ['A tangent at','In Pb²⁺ + 2e⁻','A solution is diluted by adding water','Which is a limitation of the simple particle model','Give two limitations of the particle model']:
   code=code.replace('q:"'+beginning,'q:"<span class=\\"ht\\">Higher</span> '+beginning)
  code=code.replace('<p>The simple particle model has <b>limitations</b>','<p class="htbox"><span class="ht">Higher</span> The simple particle model has <b>limitations</b>')
  for beginning in ['What is the general formula of the alkenes?','How many hydrogen atoms are in a molecule of the alkene with 5 carbon atoms?']:
   code=re.sub(r'\s*\{q:"'+re.escape(beginning)+r'"[^\n]*?\},?', '',code)
  code=code.replace('Small molecules have low melting points and never conduct.','Small molecules generally have low melting points and do not conduct when pure; solutions may conduct if the molecules ionise.')
  code=code.replace('no units, always < 1','no units; 0 ≤ Rf ≤ 1')
  # The qualitative explanation is Higher; the mass/volume calculations are all-tier.
  code=code.replace('<p>Dissolving <b>more solute</b>','<p><span class="ht">Higher</span> Dissolving <b>more solute</b>')
  rp={1:8,3:9,4:10,5:11,6:12,8:13}
 else:
  for beginning in ['A car drives round a roundabout']:
   code=code.replace('q:"'+beginning,'q:"<span class=\\"ht\\">Higher</span> '+beginning)
  code=code.replace('B.example("Estimating a braking force"','B.example("Higher · Estimating a braking force"')
  code=code.replace('shaded area = distance','Higher: shaded area = distance')
  code=code.replace('braking distance ∝ speed²','for a fixed braking force and mass, braking distance ∝ speed²')
  code=code.replace('temperature ∝ average kinetic energy','absolute temperature (K) ∝ average kinetic energy')
  code=code.replace('hotter objects have more','for the same mass and material, hotter objects have more')
  # Thermal insulation is useful working-scientifically practice, not a Trilogy RP.
  if 'id:"en7"' in code:code=re.sub(r'[Rr]equired practical\s*2','optional insulation investigation',code)
  rp={1:14,3:15,4:16,5:17,6:18,7:19,8:20,10:21}
 def remap(m):
  n=int(m[2]);return m[1]+str(rp[n]) if n in rp else m[0]
 code=re.sub(r'(RP\s?|[Rr]equired practical(?: activity)?\s+)(\d+)\b',remap,code)
 return code

def imported(repo,prefix,allowed):
 source=(ROOT/repo/'index.html').read_text(encoding='utf-8')
 rows=json.loads((ROOT/(repo+'-lessons.json')).read_text(encoding='utf-8'))
 allids={r['id'] for r in rows if r['id']}
 units={r['unit'] for r in rows if r['unit']}
 output=[];used=[];current=''
 # Every ID, including IDs inside selectors/templates, gets a subject namespace.
 def namespace(code):
  code=combined_corrections(code,prefix)
  for old in sorted(allids,key=len,reverse=True):
   code=re.sub(r'(?<![A-Za-z0-9_])'+re.escape(old)+r'(?![A-Za-z0-9_])',prefix+'-'+old,code)
  # Imported lessons use the Combined specification numbers in their labels.
  code=code.replace('AQA GCSE '+('Chemistry' if prefix=='chem' else 'Physics'),'AQA Combined Science · '+('Chemistry' if prefix=='chem' else 'Physics'))
  for unit in units:code=code.replace('u-'+unit,'u-'+prefix+'-'+unit)
  practicals={'chem':{'salt':'salt','elec':'elec','temp':'temp','rate':'rate','chrom':'chrom','water':'water'},'phys':{'shc':'shc','rs':'rs','iv':'iv','de':'de','sp':'sp','ac':'ac','wv':'wv','ir':'ir'}}[prefix]
  for old,new in practicals.items():code=code.replace('href="#'+old+'"','href="#'+prefix+'-practical-'+new+'"')
  # Only dotted specification references have a further dot; ordinary decimal
  # measurements in questions and simulations must never be rewritten.
  if prefix=='chem':code=re.sub(r'\b4\.(\d+)(?=\.)',r'5.\1',code)
  else:
   code=code.replace('4.5.6','6.5.4').replace('4.5.7','6.5.5')
   code=re.sub(r'\b4\.(\d+)(?=\.)',r'6.\1',code)
  return code
 for code in scripts(source):
  unit=re.search(r'LEARN.unit\s*=\s*"([^"]+)"',code)
  if unit:current=unit[1]
  # Shared drawers are declared alongside the original unit headers.
  if 'window.ELEC=' in code or 'window.ORG=' in code:
   output.append(tag(namespace(code)))
  m=re.search(r'lesson\(\{id:"([^"]+)"',code)
  if m and m[1] in allowed:
   output.append(tag('LEARN.unit='+js(prefix+'-'+current)+';\n'+namespace(code)))
   row=next(r for r in rows if r['id']==m[1]);used.append({**row,'lvl':namespace(row['lvl']),'id':prefix+'-'+row['id'],'unit':prefix+'-'+row['unit'],'subject':prefix})
  # Attach only the exam questions belonging to allowed lessons.
  attached=re.findall(r'(?:EXAM\.)?attach\("([^"]+)"',code)
  if any(i in allowed for i in attached) and not m:output.append(tag(namespace(code)))
 return ''.join(output),used
if __name__=='__main__':
 versions=json.loads((PROJECT/'shared-sources.json').read_text(encoding='utf-8'))
 manifest=json.loads((PROJECT/'imports.json').read_text(encoding='utf-8'))
 output='';used=[]
 for pre,repo in [('chem','GCSEChemistry'),('phys','GCSEPhysics')]:
  ref=versions[pre]['ref'];url=f'https://raw.githubusercontent.com/prodigyai-app/{repo}/{ref}/index.html'
  source=urllib.request.urlopen(url,timeout=60).read().decode('utf-8')
  folder=ROOT/repo;folder.mkdir(exist_ok=True);(folder/'index.html').write_text(source,encoding='utf-8')
  rows=[];unit=''
  for code in scripts(source):
   u=re.search(r'LEARN.unit\s*=\s*"([^"<>]+)"',code)
   if u:unit=u[1]
   m=re.search(r'lesson\(\{([\s\S]*?)blocks:',code)
   if m:
    props={k:re.search(k+r'\s*:\s*"([^"<>]*)"',m[1]) for k in ['id','name','group','lvl']}
    row=dict(unit=unit,**{k:v[1] if v else '' for k,v in props.items()})
    if row['id']:rows.append(row)
  (ROOT/(repo+'-lessons.json')).write_text(json.dumps(rows),encoding='utf-8')
  if pre=='phys':
   for block in scripts(source):
    if '/* GCSE helpers:' in block:output+=tag(block.replace('AQA GCSE Physics','AQA Combined Science · Physics'))
  block,meta=imported(repo,pre,manifest[pre]);output+=block;used+=meta
  versions[pre]['sha256']=hashlib.sha256(source.encode()).hexdigest()
 html=(PROJECT/'index.html').read_text(encoding='utf-8')
 begin='<!-- BEGIN SHARED SCIENCE LESSONS -->';end='<!-- END SHARED SCIENCE LESSONS -->'
 a=html.index(begin)+len(begin);b=html.index(end)
 (PROJECT/'index.html').write_text(html[:a]+'\n'+output+html[b:],encoding='utf-8')
 course=json.loads((PROJECT/'course.json').read_text(encoding='utf-8'));course['imports']=used
 (PROJECT/'course.json').write_text(json.dumps(course,ensure_ascii=False,indent=2),encoding='utf-8')
 (PROJECT/'shared-sources.json').write_text(json.dumps(versions,indent=2),encoding='utf-8')
 subprocess.run(['node',str(PROJECT/'scripts/build.cjs')],check=True)
 print('Updated',len(used),'allowlisted source lessons. Review curriculum changes before publishing.')
