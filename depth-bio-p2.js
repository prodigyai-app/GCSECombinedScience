/* Diagrams for the Biology-only lessons that had none. Same drawing helpers as depth-f1.js. */
(() => {
  const add = GcseDepth.add;
  let n = 0;
  const C = { b: '#4f8fd8', r: '#e0634f', a: '#d9a43a', g: '#3fb37a' };
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" fill="${o.fill || 'currentColor'}" font-size="${o.size || 15}" text-anchor="${o.anchor || 'middle'}"${o.bold ? ' font-weight="700"' : ''}>${esc(s)}</text>`;
  const box = (x, y, w, h, lines, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" fill="${o.fill || 'var(--accent-soft)'}" stroke="${o.stroke || 'var(--accent)'}" stroke-width="2"/>` +
    lines.map((s, i) => T(x + w / 2, y + h / 2 + (i - (lines.length - 1) / 2) * 18 + 5, s, { size: o.size || 15, bold: o.bold && i === 0 })).join('');
  const arrow = (id, x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.c || 'currentColor'}" stroke-width="${o.w || 2.2}" marker-end="url(#${id})"${o.dash ? ' stroke-dasharray="6 5"' : ''}/>`;
  const svg = (w, h, label, body) => { const id = 'dfb' + (++n); return `<figure class="fig sf-fig"><svg class="sf" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" style="color:var(--ink,#1f2a3a);max-width:100%"><defs><marker id="${id}" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0L12 6L0 12z" fill="context-stroke"/></marker></defs>${body(id)}</svg><figcaption>${esc(label)}</figcaption></figure>`; };
  const axes = (x0, y0, w, h, xl, yl) => `<line x1="${x0}" y1="${y0}" x2="${x0 + w}" y2="${y0}" stroke="currentColor" stroke-width="2"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y0 - h}" stroke="currentColor" stroke-width="2"/>` + T(x0 + w / 2, y0 + 36, xl, { size: 14 }) + `<text x="${x0 - 40}" y="${y0 - h / 2}" fill="currentColor" font-size="14" text-anchor="middle" transform="rotate(-90 ${x0 - 40} ${y0 - h / 2})">${esc(yl)}</text>`;
  const D = (id, title, fig, text) => add(id, { learn: [['Diagram: ' + title, fig + `<p>${text}</p>`]] });

  D('b-monoclonal', 'making monoclonal antibodies', svg(700, 290, 'Producing monoclonal antibodies from a hybridoma', a =>
    box(10, 30, 190, 70, ['Mouse injected', 'with antigen'], { bold: true }) + arrow(a, 200, 65, 225, 65) +
    box(230, 30, 200, 70, ['Lymphocytes that', 'make the antibody'], { bold: true }) + arrow(a, 330, 100, 330, 130) +
    box(470, 135, 200, 70, ['Tumour (myeloma)', 'cells divide rapidly'], { bold: true }) + arrow(a, 470, 170, 445, 170) +
    box(230, 135, 210, 70, ['fused → hybridoma', 'cell'], { bold: true }) + arrow(a, 230, 170, 205, 170) +
    box(10, 135, 190, 70, ['Single hybridoma', 'cloned'], { bold: true }) + arrow(a, 105, 205, 105, 230) +
    box(10, 232, 660, 46, ['Many identical cells make one antibody → collected and purified'], { bold: true })),
    'The lymphocyte provides the ability to make one specific antibody; the tumour cell provides the ability to divide rapidly in culture. Fusing them makes a hybridoma that does both. One hybridoma is cloned so that every cell makes exactly the same (monoclonal) antibody, which binds to only one antigen.');

  D('b-plantdefence', 'how plants defend themselves', svg(700, 240, 'Physical, chemical and mechanical plant defences', a =>
    box(10, 20, 220, 200, ['Physical', 'waxy cuticle', 'cellulose cell walls', 'bark (dead cells)', 'that pathogens cannot', 'easily get through'], { bold: true, size: 14 }) +
    box(240, 20, 220, 200, ['Chemical', 'antibacterial chemicals', '(e.g. mint, witch hazel)', 'poisons that deter', 'herbivores', '(e.g. foxglove)'], { bold: true, size: 14 }) +
    box(470, 20, 220, 200, ['Mechanical', 'thorns and hairs', 'leaves that droop', 'or curl when touched', 'mimicry that tricks', 'animals'], { bold: true, size: 14 })),
    'Plants cannot move away from pathogens or herbivores, so they rely on defences. Physical barriers stop pathogens getting in; chemical defences kill microorganisms or make the plant unpleasant or poisonous to eat; mechanical adaptations deter or trick animals. Exam answers should name the type of defence and then explain how it protects the plant.');

  D('b-brain-research', 'methods of studying the brain', svg(700, 250, 'Comparing three ways of investigating brain function', a =>
    box(10, 20, 220, 210, ['Patients with', 'brain damage', 'non-invasive', 'but damage is not', 'controlled; few cases'], { bold: true, size: 14 }) +
    box(240, 20, 220, 210, ['Electrical', 'stimulation', 'shows which area', 'controls a function', 'but invasive (surgery)'], { bold: true, size: 14 }) +
    box(470, 20, 220, 210, ['MRI scanning', 'shows active areas', 'in healthy people', 'non-invasive', 'but expensive'], { bold: true, size: 14 })),
    'Each method gives a different kind of evidence. Damage studies show what is lost when an area stops working; stimulation shows what an area does when it is activated; functional MRI shows which areas are most active during a task. Combining evidence from several methods gives scientists more confidence in a map of brain function.');

  D('b-temperature-higher', 'responses to hot and cold', svg(700, 300, 'How the body responds when core temperature rises or falls', a =>
    box(250, 125, 200, 56, ['thermoregulatory', 'centre (brain)'], { bold: true }) +
    box(10, 20, 220, 90, ['Too hot', 'vasodilation', 'more sweat', 'hairs lie flat'], { size: 14, bold: true }) +
    box(470, 20, 220, 90, ['Too cold', 'vasoconstriction', 'shivering, no sweat', 'hairs raised'], { size: 14, bold: true }) +
    box(10, 200, 220, 70, ['more energy', 'transferred to the air'], { size: 14 }) + box(470, 200, 220, 70, ['less energy lost;', 'respiration releases more'], { size: 14 }) +
    arrow(a, 250, 145, 230, 90) + arrow(a, 450, 145, 470, 90) + arrow(a, 120, 110, 120, 196) + arrow(a, 580, 110, 580, 196) +
    T(350, 230, 'temperature returns', { size: 13 }) + T(350, 248, 'to about 37 °C', { size: 13 })),
    'The thermoregulatory centre receives information from temperature receptors in the skin and blood. If the body is too hot, vasodilation and sweating increase energy transfer to the surroundings. If too cold, vasoconstriction reduces energy loss and shivering releases energy by respiration. Both responses reverse the change, which is negative feedback.');

  D('b-kidney-filtration', 'how a nephron makes urine', svg(700, 280, 'Filtration and selective reabsorption in a kidney nephron', a =>
    `<circle cx="90" cy="110" r="45" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>` + T(90, 115, 'glomerulus', { size: 13 }) +
    `<path d="M135 110 H300 Q340 110 340 150 V210 Q340 240 380 240 H600" fill="none" stroke="var(--accent)" stroke-width="16" opacity=".6"/>` +
    T(220, 70, 'filtration under pressure:', { size: 13 }) + T(220, 90, 'water, glucose, ions, urea pass in', { size: 13 }) +
    arrow(a, 300, 135, 300, 175, { c: C.g }) + T(240, 195, 'reabsorbed: all glucose,', { size: 13, fill: C.g }) + T(240, 212, 'ions the body needs', { size: 13, fill: C.g }) +
    arrow(a, 470, 225, 470, 180, { c: C.b }) + T(470, 165, 'reabsorbed: water (more with ADH)', { size: 13, fill: C.b }) +
    T(640, 245, 'urine', { size: 14, bold: true }) + T(90, 185, 'cells and proteins', { size: 13 }) + T(90, 202, 'stay in the blood', { size: 13 })),
    'Blood is filtered at high pressure in the glomerulus: small molecules pass into the nephron but cells and proteins are too large. As the filtrate flows along the tubule, all the glucose and the ions the body needs are reabsorbed. (HT) ADH controls how much water is reabsorbed, and so the volume and concentration of urine.');

  D('b-plant-hormones', 'uses of plant hormones', svg(700, 230, 'Commercial uses of auxin, gibberellins and ethene', a =>
    box(10, 20, 220, 190, ['Auxin', 'rooting powder', 'for cuttings', 'selective weedkillers', 'tissue culture'], { bold: true, size: 14 }) +
    box(240, 20, 220, 190, ['Gibberellins (HT)', 'end seed dormancy', 'promote flowering', 'larger fruit'], { bold: true, size: 14 }) +
    box(470, 20, 220, 190, ['Ethene (HT)', 'controls ripening', 'during storage and', 'transport of fruit'], { bold: true, size: 14 })),
    'Growers use plant hormones to control growth. Auxins help cuttings form roots quickly and, in high doses, make broad-leaved weeds grow uncontrollably and die. (HT) Gibberellins can start germination and make fruit bigger; ethene is used to ripen fruit at the right time, so it can be picked unripe and transported without damage.');

  D('b-repro-evaluation', 'sexual and asexual reproduction compared', svg(700, 250, 'Advantages of sexual and asexual reproduction', a =>
    box(10, 20, 330, 210, ['Sexual reproduction', 'variation in offspring', 'better chance of surviving', 'environmental change', 'humans can use it for', 'selective breeding'], { bold: true, size: 14 }) +
    box(360, 20, 330, 210, ['Asexual reproduction', 'only one parent needed', 'faster; less energy used', 'many identical offspring', 'when conditions are good', 'no variation: one disease', 'can affect all'], { bold: true, size: 14 })),
    'Organisms that can do both get the best of each: malarial parasites reproduce asexually in humans and sexually in mosquitoes; many fungi make spores asexually and reproduce sexually to produce variation; strawberry plants grow runners as well as seeds. Use the context of the question to judge which method is more useful.');

  D('b-nucleotides', 'DNA base pairing', svg(700, 260, 'Two strands of DNA held together by complementary base pairs', a => {
    const L = ['A', 'T', 'G', 'C', 'C', 'A', 'G'], P = { A: 'T', T: 'A', G: 'C', C: 'G' }, col = { A: C.r, T: C.b, G: C.g, C: C.a };
    let s = `<line x1="60" y1="70" x2="640" y2="70" stroke="currentColor" stroke-width="5"/><line x1="60" y1="190" x2="640" y2="190" stroke="currentColor" stroke-width="5"/>`;
    L.forEach((b, i) => { const x = 100 + i * 80; s += `<rect x="${x - 18}" y="74" width="36" height="52" fill="${col[b]}" opacity=".85"/>` + T(x, 107, b, { bold: true }) + `<rect x="${x - 18}" y="134" width="36" height="52" fill="${col[P[b]]}" opacity=".85"/>` + T(x, 167, P[b], { bold: true }); });
    return s + T(350, 45, 'sugar–phosphate backbone', { size: 13 }) + T(350, 222, 'A pairs with T; C pairs with G', { size: 14, bold: true }) + T(350, 245, 'each sequence of three bases codes for one amino acid', { size: 13 });
  }), 'Each nucleotide has a sugar, a phosphate and one of four bases. The bases on opposite strands pair up: A with T, and C with G. Because pairing is complementary, the sequence of one strand gives the sequence of the other, and the percentage of A always equals T and the percentage of C always equals G.');

  D('b-protein', 'from gene to protein', svg(700, 250, 'Protein synthesis: a gene is copied and read at a ribosome', a =>
    box(10, 30, 200, 80, ['Nucleus', 'gene copied into', 'a template (mRNA)'], { bold: true, size: 14 }) + arrow(a, 210, 70, 245, 70) +
    box(250, 30, 200, 80, ['Template leaves', 'nucleus to a', 'ribosome'], { bold: true, size: 14 }) + arrow(a, 450, 70, 485, 70) +
    box(490, 30, 200, 80, ['Ribosome reads', 'three bases at a time'], { bold: true, size: 14 }) + arrow(a, 590, 110, 590, 140) +
    box(250, 145, 440, 80, ['Carrier molecules bring amino acids in order;', 'the chain folds into a specific shape', '(enzyme, hormone or structural protein)'], { bold: true, size: 14 })),
    '(HT) The order of bases in a gene decides the order of amino acids in a protein, and the order of amino acids decides how the chain folds. A mutation can change one or more amino acids; if the change alters the shape, for example of an enzyme’s active site, the protein may no longer work.');

  D('b-cloning', 'adult cell cloning', svg(700, 250, 'The steps of adult cell cloning', a =>
    box(10, 20, 210, 70, ['Remove nucleus', 'from an egg cell'], { bold: true, size: 14 }) + arrow(a, 220, 55, 245, 55) +
    box(250, 20, 210, 70, ['Insert nucleus from', 'an adult body cell'], { bold: true, size: 14 }) + arrow(a, 460, 55, 485, 55) +
    box(490, 20, 200, 70, ['Electric shock', 'starts division'], { bold: true, size: 14 }) + arrow(a, 590, 90, 590, 120) +
    box(250, 125, 440, 70, ['Embryo implanted into a host mother', 'clone identical to the body-cell donor'], { bold: true, size: 14 })),
    'The new animal has the same DNA as the animal that donated the body cell nucleus, not the egg donor or the host mother. Dolly the sheep was cloned this way. Cloning can copy animals with useful characteristics, but it reduces genetic variation and has a low success rate.');

  D('b-history', 'how a new species forms', svg(700, 230, 'Speciation after geographical isolation', a =>
    box(10, 30, 200, 80, ['One population', 'is split by a', 'barrier'], { bold: true, size: 14 }) + arrow(a, 210, 70, 245, 70) +
    box(250, 30, 200, 80, ['Different conditions', 'select different', 'alleles'], { bold: true, size: 14 }) + arrow(a, 450, 70, 485, 70) +
    box(490, 30, 200, 80, ['Populations become', 'very different'], { bold: true, size: 14 }) + arrow(a, 590, 110, 590, 140) +
    box(250, 145, 440, 70, ['They can no longer interbreed to produce', 'fertile offspring: two species'], { bold: true, size: 14 })),
    'Wallace’s work on speciation explained how new species arise. When populations are isolated, for example by a sea or mountain range, each one evolves by natural selection to suit its own environment. Over many generations they become so different that they are separate species.');

  D('b-foodproduction', 'making mycoprotein', svg(700, 250, 'Producing mycoprotein from Fusarium in a fermenter', a =>
    `<rect x="250" y="30" width="200" height="190" rx="20" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>` + T(350, 120, 'fermenter', { bold: true }) + T(350, 142, 'Fusarium grows', { size: 13 }) +
    arrow(a, 120, 70, 248, 70) + T(110, 60, 'glucose syrup', { size: 13, anchor: 'end' }) + arrow(a, 120, 190, 248, 190) + T(110, 195, 'air (oxygen)', { size: 13, anchor: 'end' }) +
    arrow(a, 452, 125, 560, 125) + T(570, 120, 'harvest and', { size: 13, anchor: 'start' }) + T(570, 138, 'purify', { size: 13, anchor: 'start' }) + T(350, 242, 'temperature and pH kept at the optimum', { size: 13 })),
    'The fungus Fusarium is grown on glucose syrup in large aerobic fermenters, with temperature and pH controlled. The fungal biomass is harvested and purified to make mycoprotein, a protein-rich, low-fat food suitable for vegetarians. Producing food from microorganisms is fast and needs little land.');
})();
