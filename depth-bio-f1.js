/* Diagrams for the lessons that had none (16 shared lessons and the new 4.7.2.4 lesson).
   Plain SVG drawn with currentColor and the page accent so it reads in light and dark themes. */
(() => {
  const add = GcseDepth.add;
  let n = 0;
  const C = { b: '#4f8fd8', r: '#e0634f', a: '#d9a43a', g: '#3fb37a' };
  const esc = s => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const T = (x, y, s, o = {}) => `<text x="${x}" y="${y}" fill="${o.fill || 'currentColor'}" font-size="${o.size || 15}" text-anchor="${o.anchor || 'middle'}"${o.bold ? ' font-weight="700"' : ''}>${esc(s)}</text>`;
  const box = (x, y, w, h, lines, o = {}) => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="9" fill="${o.fill || 'var(--accent-soft)'}" stroke="${o.stroke || 'var(--accent)'}" stroke-width="2"/>` +
    lines.map((s, i) => T(x + w / 2, y + h / 2 + (i - (lines.length - 1) / 2) * 18 + 5, s, { size: o.size || 15, bold: o.bold && i === 0 })).join('');
  const arrow = (id, x1, y1, x2, y2, o = {}) => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" stroke="${o.c || 'currentColor'}" stroke-width="${o.w || 2.2}" marker-end="url(#${id})"${o.dash ? ' stroke-dasharray="6 5"' : ''}/>`;
  const svg = (w, h, label, body) => { const id = 'dfa' + (++n); return `<figure class="fig sf-fig"><svg class="sf" viewBox="0 0 ${w} ${h}" role="img" aria-label="${esc(label)}" style="color:var(--ink,#1f2a3a);max-width:100%"><defs><marker id="${id}" markerUnits="userSpaceOnUse" markerWidth="12" markerHeight="12" refX="10" refY="6" orient="auto"><path d="M0 0L12 6L0 12z" fill="context-stroke"/></marker></defs>${body(id)}</svg><figcaption>${esc(label)}</figcaption></figure>`; };
  const axes = (x0, y0, w, h, xl, yl) => `<line x1="${x0}" y1="${y0}" x2="${x0 + w}" y2="${y0}" stroke="currentColor" stroke-width="2"/><line x1="${x0}" y1="${y0}" x2="${x0}" y2="${y0 - h}" stroke="currentColor" stroke-width="2"/>` + T(x0 + w / 2, y0 + 36, xl, { size: 14 }) + `<text x="${x0 - 40}" y="${y0 - h / 2}" fill="currentColor" font-size="14" text-anchor="middle" transform="rotate(-90 ${x0 - 40} ${y0 - h / 2})">${esc(yl)}</text>`;
  const D = (id, title, fig, text) => add(id, { learn: [['Diagram: ' + title, fig + `<p>${text}</p>`]] });

  D('b-stem', 'where stem cells come from', svg(680, 300, 'Sources of stem cells and the cells they can become', a =>
    box(20, 30, 180, 60, ['Embryonic stem cells', 'early embryo'], { bold: true }) + box(20, 120, 180, 60, ['Adult stem cells', 'bone marrow'], { bold: true }) + box(20, 210, 180, 60, ['Meristem', 'root and shoot tips'], { bold: true }) +
    arrow(a, 200, 60, 300, 60) + box(305, 30, 355, 60, ['most types of human cell:', 'nerve, muscle, blood, skin…']) +
    arrow(a, 200, 150, 300, 150) + box(305, 120, 355, 60, ['some types only:', 'e.g. red and white blood cells']) +
    arrow(a, 200, 240, 300, 240) + box(305, 210, 355, 60, ['any type of plant cell,', 'throughout the life of the plant'])),
    'Embryonic stem cells can become most kinds of human cell, so they have the most potential for treatments but raise ethical issues. Adult stem cells from bone marrow form only some cell types, mainly blood cells. Meristem cells in plants can become any type of plant cell for as long as the plant lives, which is why plants can be cloned quickly from small pieces of tissue.');

  D('b-active', 'active transport against a gradient', svg(680, 300, 'Active transport moves ions against the concentration gradient using energy', a => {
    let dots = ''; for (let i = 0; i < 5; i++) dots += `<circle cx="${60 + i * 50}" cy="${70 + (i % 2) * 40}" r="7" fill="${C.b}"/>`;
    for (let i = 0; i < 14; i++) dots += `<circle cx="${400 + (i % 7) * 38}" cy="${60 + Math.floor(i / 7) * 45 + (i % 2) * 12}" r="7" fill="${C.b}"/>`;
    return T(160, 30, 'soil water: low concentration', { size: 14 }) + T(520, 30, 'root hair cell: high concentration', { size: 14 }) +
      `<rect x="330" y="40" width="22" height="200" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>` + T(341, 262, 'cell membrane', { size: 13 }) +
      `<rect x="322" y="150" width="38" height="44" rx="10" fill="${C.a}" opacity=".85"/>` + T(341, 214, 'carrier protein', { size: 12 }) +
      dots + `<circle cx="270" cy="172" r="7" fill="${C.b}"/>` + arrow(a, 282, 172, 420, 172, { w: 3 }) +
      T(560, 262, 'energy from respiration', { size: 14, fill: C.r }) + arrow(a, 480, 250, 368, 192, { c: C.r, dash: true });
  }), 'Mineral ions are carried across the membrane by carrier proteins from where they are less concentrated (soil water) to where they are more concentrated (the cell). Because this is against the concentration gradient it cannot happen by diffusion; it needs energy released by respiration in the mitochondria, which is why root hair cells have many mitochondria and why uptake falls if roots lack oxygen.');

  D('b-health', 'comparing disease rates', svg(640, 300, 'Percentage of smokers and non-smokers in a study who developed lung disease', a =>
    axes(110, 250, 480, 200, 'group', '% with lung disease') + [0, 2, 4, 6].map(v => T(98, 255 - v * 30, String(v), { anchor: 'end', size: 13 }) + `<line x1="110" y1="${250 - v * 30}" x2="590" y2="${250 - v * 30}" stroke="currentColor" opacity=".15"/>`).join('') +
    `<rect x="190" y="${250 - 6 * 30}" width="110" height="${6 * 30}" fill="${C.r}" opacity=".85"/><rect x="400" y="${250 - 1 * 30}" width="110" height="30" fill="${C.b}" opacity=".85"/>` +
    T(245, 268, 'smokers', { size: 14 }) + T(455, 268, 'non-smokers', { size: 14 }) + T(245, 62, '6%', { bold: true }) + T(455, 212, '1%', { bold: true })),
    'Comparing the percentage of people affected in each group, rather than raw numbers, allows groups of different sizes to be compared fairly. Here smokers were six times more likely to develop lung disease. A correlation like this suggests a risk factor; it becomes evidence of a cause when there is a mechanism (substances in smoke damage lung cells) and the result is repeated in large studies.');

  D('b-drugs', 'how a new drug is developed and tested', svg(700, 260, 'Stages in developing and testing a new drug', a =>
    box(10, 40, 150, 70, ['Discovery', 'plants, microbes', 'or chemists'], { size: 13, bold: true }) + arrow(a, 160, 75, 185, 75) +
    box(190, 40, 150, 70, ['Preclinical', 'cells, tissues,', 'live animals'], { size: 13, bold: true }) + arrow(a, 340, 75, 365, 75) +
    box(370, 40, 150, 70, ['Clinical trial 1', 'healthy volunteers,', 'very low doses'], { size: 13, bold: true }) + arrow(a, 520, 75, 545, 75) +
    box(550, 40, 140, 70, ['Clinical trial 2', 'patients: find the', 'optimum dose'], { size: 13, bold: true }) +
    arrow(a, 620, 110, 620, 150) + box(370, 155, 320, 75, ['Double-blind trial with a placebo', 'neither doctors nor patients know', 'who has the drug'], { size: 13, bold: true }) +
    arrow(a, 370, 192, 300, 192) + box(40, 155, 255, 75, ['Peer review and', 'licensing before use'], { size: 13, bold: true })),
    'At each stage a drug is tested for toxicity (is it safe?), efficacy (does it work?) and dose. Most candidate drugs fail along the way. Starting with cells and animals, then tiny doses in healthy people, keeps the risk to volunteers low. A double-blind trial with a placebo removes bias, and peer review checks the results before the drug can be approved.');

  D('b-respiration', 'aerobic and anaerobic respiration', svg(700, 270, 'Comparing aerobic respiration with anaerobic respiration in muscles and in yeast', a =>
    box(20, 30, 660, 62, ['Aerobic (in mitochondria): glucose + oxygen → carbon dioxide + water', 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O · releases most energy'], { bold: true }) +
    box(20, 110, 320, 90, ['Anaerobic in muscles', 'glucose → lactic acid', 'no oxygen needed', 'less energy; causes oxygen debt'], { size: 14, bold: true }) +
    box(360, 110, 320, 90, ['Anaerobic in plants and yeast', 'glucose → ethanol + carbon dioxide', '(fermentation)', 'used in bread and brewing'], { size: 14, bold: true }) +
    T(350, 235, 'All three are exothermic: they transfer energy from glucose for living processes.', { size: 14 })),
    'Aerobic respiration completely oxidises glucose, so it transfers much more energy per glucose molecule than anaerobic respiration. Anaerobic respiration is used when oxygen is short. In animal muscle it makes lactic acid; in plant and yeast cells it makes ethanol and carbon dioxide. Only aerobic respiration produces water, and only fermentation produces carbon dioxide without oxygen.');

  D('b-exercise', 'heart rate before, during and after exercise', svg(660, 300, 'Heart rate rises during exercise and falls back during recovery', a => {
    const X = t => 100 + t * 40, Y = b => 250 - (b - 50) * 1.4; const pts = [[0, 70], [2, 70], [3, 130], [4, 150], [7, 155], [8, 120], [9, 95], [11, 75], [13, 70]];
    return axes(100, 250, 520, 200, 'time / minutes', 'heart rate / bpm') + [60, 100, 140].map(v => T(90, Y(v) + 5, String(v), { anchor: 'end', size: 13 })).join('') + [0, 4, 8, 12].map(t => T(X(t), 270, String(t), { size: 13 })).join('') +
      `<rect x="${X(2)}" y="40" width="${X(7) - X(2)}" height="210" fill="var(--accent-soft)" opacity=".6"/>` + T((X(2) + X(7)) / 2, 58, 'exercise', { size: 14 }) +
      `<polyline points="${pts.map(([t, b]) => X(t) + ',' + Y(b)).join(' ')}" fill="none" stroke="${C.r}" stroke-width="3"/>` + T(X(10.3), Y(115), 'recovery', { size: 14 });
  }), 'During exercise the heart rate, breathing rate and breath volume increase so that the muscles receive more oxygen and glucose and carbon dioxide is removed faster. After exercise the heart rate takes time to return to the resting rate; a shorter recovery time is a sign of greater fitness.');

  D('b-debt', 'the oxygen debt', svg(660, 300, 'Oxygen uptake stays above the resting level after exercise: the oxygen debt', a => {
    const X = t => 100 + t * 40, Y = v => 250 - v * 60; const pts = [[0, 0.4], [2, 0.4], [3, 2.2], [7, 2.6], [8, 1.6], [9, 1.0], [10, 0.7], [12, 0.45], [13, 0.4]];
    const debt = `M${X(7)},${Y(0.4)} ` + pts.slice(3).map(([t, v]) => `L${X(t)},${Y(v)}`).join(' ') + ` L${X(13)},${Y(0.4)} Z`;
    return axes(100, 250, 520, 200, 'time / minutes', 'oxygen uptake / dm³ per min') + `<path d="${debt}" fill="${C.a}" opacity=".45"/>` +
      `<line x1="100" y1="${Y(0.4)}" x2="620" y2="${Y(0.4)}" stroke="currentColor" stroke-dasharray="5 5" opacity=".6"/>` + T(190, Y(0.4) - 10, 'resting level', { size: 13 }) +
      `<polyline points="${pts.map(([t, v]) => X(t) + ',' + Y(v)).join(' ')}" fill="none" stroke="${C.b}" stroke-width="3"/>` + T(X(9.6), Y(1.5), 'oxygen debt', { size: 15, bold: true }) + T((X(3) + X(7)) / 2, Y(2.6) - 14, 'exercise', { size: 14 });
  }), 'The shaded area is the extra oxygen used after exercise has stopped. It is needed to react with the lactic acid made by anaerobic respiration: the lactic acid is carried in the blood to the liver and converted back into glucose. This is why breathing and heart rate stay high for a while after a sprint.');

  D('b-reaction', 'the ruler-drop test', svg(640, 300, 'Measuring reaction time with a dropped ruler', a =>
    `<rect x="250" y="20" width="44" height="250" rx="4" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>` + Array.from({ length: 11 }, (_, i) => `<line x1="250" y1="${40 + i * 21}" x2="${i % 5 ? 262 : 272}" y2="${40 + i * 21}" stroke="currentColor"/>`).join('') +
    `<path d="M170 250q30 -20 70 -6M170 262q30 10 70 0" fill="none" stroke="currentColor" stroke-width="3"/>` + T(140, 258, 'catcher', { size: 14, anchor: 'end' }) +
    `<line x1="330" y1="40" x2="330" y2="250" stroke="${C.r}" stroke-width="2.5"/><line x1="322" y1="40" x2="338" y2="40" stroke="${C.r}" stroke-width="2.5"/><line x1="322" y1="250" x2="338" y2="250" stroke="${C.r}" stroke-width="2.5"/>` +
    T(350, 150, 'distance fallen, d', { size: 14, anchor: 'start', fill: C.r }) + T(350, 175, 'shorter d → faster reaction', { size: 14, anchor: 'start' }) + arrow(a, 225, 60, 225, 120) + T(212, 95, 'drop', { size: 13, anchor: 'end' })),
    'The ruler is released without warning and caught between finger and thumb. The distance it falls depends on the reaction time: the further it falls, the slower the reaction. Keep the starting position, ruler and catcher the same, repeat several times, ignore anomalies and calculate a mean.');

  D('b-feedback', 'controlling blood glucose', svg(700, 350, 'Negative feedback control of blood glucose by insulin and glucagon', a =>
    box(250, 147, 190, 56, ['normal blood', 'glucose'], { bold: true }) +
    box(20, 20, 210, 56, ['glucose rises', '(after a meal)']) + box(470, 20, 210, 56, ['pancreas releases', 'insulin']) + box(470, 100, 210, 60, ['glucose into cells;', 'liver: glucose → glycogen']) +
    box(20, 274, 210, 56, ['glucose falls', '(exercise, fasting)']) + box(470, 274, 210, 56, ['pancreas releases', 'glucagon (HT)']) + box(470, 190, 210, 60, ['liver: glycogen →', 'glucose released (HT)']) +
    arrow(a, 230, 48, 466, 48) + arrow(a, 575, 76, 575, 97) + arrow(a, 470, 140, 444, 165) + arrow(a, 230, 302, 466, 302) + arrow(a, 575, 274, 575, 253) + arrow(a, 470, 210, 444, 188) +
    arrow(a, 290, 147, 170, 80, { dash: true }) + arrow(a, 290, 203, 170, 270, { dash: true })),
    'A rise in blood glucose is detected by the pancreas, which releases insulin; glucose moves into cells and the liver stores it as glycogen, so the level falls back. (HT) A fall in blood glucose causes the pancreas to release glucagon, which makes the liver convert glycogen back to glucose. Each response reverses the change, which is negative feedback.');

  D('b-cycle-ivf', 'hormones in the menstrual cycle', svg(700, 320, 'Approximate hormone levels during a 28-day menstrual cycle', a => {
    const X = d => 90 + d * 20, Y = v => 260 - v * 190; const curve = (f, c, lab, lx) => { let p = ''; for (let d = 0; d <= 28; d += 0.5) p += (d ? ' L' : 'M') + X(d).toFixed(1) + ',' + Y(f(d)).toFixed(1); return `<path d="${p}" fill="none" stroke="${c}" stroke-width="3"/>` + T(X(lx), Y(f(lx)) - 10, lab, { size: 13, fill: c, bold: true }); };
    const g = (d, m, s) => Math.exp(-((d - m) ** 2) / (2 * s * s));
    return axes(90, 260, 580, 210, 'day of cycle', 'relative level') + [0, 7, 14, 21, 28].map(d => T(X(d), 280, String(d), { size: 13 })).join('') +
      `<line x1="${X(14)}" y1="50" x2="${X(14)}" y2="260" stroke="currentColor" stroke-dasharray="5 5" opacity=".6"/>` + T(X(14), 44, 'ovulation', { size: 13 }) +
      curve(d => 0.15 + 0.25 * g(d, 3, 3) + 0.4 * g(d, 13.5, 0.8), C.b, 'FSH', 4) + curve(d => 0.1 + 0.85 * g(d, 14, 0.9), C.r, '', 15.5) + T(X(15.6), Y(0.9), 'LH', { size: 13, fill: C.r, bold: true, anchor: 'start' }) +
      curve(d => 0.1 + 0.6 * g(d, 12, 2.5) + 0.3 * g(d, 21, 3), C.g, 'oestrogen', 9.5) + curve(d => 0.05 + 0.65 * g(d, 21, 3.2), C.a, 'progesterone', 23.5);
  }), 'FSH makes an egg mature and stimulates oestrogen production. Rising oestrogen thickens the uterus lining and, at a high level, triggers a surge of LH, which causes ovulation at about day 14. Progesterone then keeps the lining thick; if no egg is fertilised, progesterone falls and the lining breaks down. IVF uses FSH and LH to make several eggs mature at once.');

  D('b-selection', 'natural selection step by step', svg(700, 230, 'The steps of evolution by natural selection', a =>
    box(10, 30, 210, 70, ['1 Variation', 'caused by mutations'], { bold: true }) + arrow(a, 220, 65, 245, 65) +
    box(250, 30, 200, 70, ['2 Competition', 'for food, mates, survival'], { bold: true }) + arrow(a, 450, 65, 475, 65) +
    box(480, 30, 210, 70, ['3 Best adapted', 'survive and breed'], { bold: true }) + arrow(a, 585, 100, 585, 125) +
    box(480, 130, 210, 70, ['4 Alleles passed', 'to offspring'], { bold: true }) + arrow(a, 480, 165, 455, 165) +
    box(150, 130, 300, 70, ['5 Over many generations the', 'allele becomes more common'], { bold: true })),
    'Natural selection needs variation within a population. Individuals with alleles that give an advantage in the current environment are more likely to survive and reproduce, so those alleles are passed on more often. Over many generations the characteristic becomes more common. Selective breeding follows the same steps, except that humans choose which individuals breed.');

  D('b-engineering', 'inserting a gene into a bacterium', svg(700, 330, 'Genetic engineering using a plasmid vector', a =>
    `<path d="M40 70h160" stroke="currentColor" stroke-width="10"/><rect x="95" y="62" width="50" height="16" fill="${C.r}"/>` + T(120, 50, 'useful gene', { size: 13 }) + T(120, 105, 'cut out with restriction enzyme', { size: 13 }) +
    `<circle cx="380" cy="80" r="48" fill="none" stroke="${C.b}" stroke-width="8" stroke-dasharray="270 32"/>` + T(380, 150, 'plasmid cut with the same enzyme', { size: 13 }) +
    arrow(a, 210, 70, 315, 75) + arrow(a, 380, 160, 380, 185) +
    `<circle cx="380" cy="240" r="40" fill="none" stroke="${C.b}" stroke-width="8"/><path d="M352 212a40 40 0 0 1 30 -12" stroke="${C.r}" stroke-width="9" fill="none"/>` + T(380, 310, 'ligase joins the sticky ends', { size: 13 }) +
    arrow(a, 430, 250, 520, 250) + `<rect x="530" y="200" width="150" height="90" rx="40" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/><circle cx="605" cy="245" r="18" fill="none" stroke="${C.b}" stroke-width="5"/>` + T(605, 220, 'bacterium', { size: 13 })),
    'The same restriction enzyme cuts the gene out and opens the plasmid, leaving matching sticky ends. Ligase joins the gene into the plasmid, and the plasmid (the vector) is taken up by a bacterium. As the bacteria reproduce they all make the protein coded by the gene, for example human insulin.');

  D('b-evidence', 'how antibiotic resistance spreads', svg(700, 230, 'A resistant strain of bacteria becomes common after antibiotic treatment', a => {
    const pop = (x, res, tot) => { let s = ''; for (let i = 0; i < tot; i++) s += `<circle cx="${x + (i % 6) * 26}" cy="${60 + Math.floor(i / 6) * 26}" r="9" fill="${i < res ? C.r : C.b}"/>`; return s; };
    return pop(30, 1, 18) + T(95, 170, 'mutation: one resistant', { size: 13 }) + arrow(a, 190, 85, 245, 85) + T(218, 72, 'antibiotic', { size: 12 }) +
      pop(270, 1, 1) + T(305, 170, 'only resistant survives', { size: 13 }) + arrow(a, 340, 85, 420, 85) + T(380, 72, 'reproduces', { size: 12 }) +
      pop(450, 18, 18) + T(515, 170, 'resistant population', { size: 13 }) +
      `<circle cx="140" cy="205" r="8" fill="${C.r}"/>` + T(155, 210, 'resistant', { size: 13, anchor: 'start' }) + `<circle cx="300" cy="205" r="8" fill="${C.b}"/>` + T(315, 210, 'not resistant', { size: 13, anchor: 'start' });
  }), 'A random mutation can make a bacterium resistant to an antibiotic. When the antibiotic is used, the non-resistant bacteria die but the resistant one survives and, with no competition, reproduces rapidly. The whole population soon carries resistance. This is natural selection happening fast enough to observe, and it is why antibiotics should be prescribed only when needed.');

  D('b-adaptation', 'size, surface area and heat loss', svg(660, 270, 'A smaller body has a larger surface area to volume ratio', a =>
    `<rect x="80" y="110" width="60" height="60" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>` + T(110, 200, '1 cm cube', { size: 14 }) + T(110, 222, 'SA 6 cm², V 1 cm³', { size: 13 }) + T(110, 244, 'SA:V = 6 : 1', { size: 14, bold: true }) +
    `<rect x="330" y="50" width="180" height="180" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>` + T(420, 140, '3 cm cube', { size: 14 }) + T(420, 162, 'SA 54 cm², V 27 cm³', { size: 13 }) + T(420, 184, 'SA:V = 2 : 1', { size: 14, bold: true }) +
    T(330, 262, 'Large animals in cold places lose heat more slowly; small animals and large ears lose heat faster.', { size: 13 })),
    'An animal transfers heat to its surroundings through its surface, but generates heat throughout its volume. A large animal has a small surface area to volume ratio, so it loses heat slowly: an advantage in cold climates (polar bears). Large thin ears give desert animals a large surface area to lose heat.');

  D('b-biodiversity', 'how fertiliser runoff kills fish', svg(700, 240, 'Eutrophication: fertiliser runoff reduces oxygen in water', a =>
    box(10, 30, 160, 70, ['Fertiliser', 'washes into', 'a lake'], { size: 13, bold: true }) + arrow(a, 170, 65, 190, 65) +
    box(195, 30, 160, 70, ['Algae grow', 'rapidly and', 'block light'], { size: 13, bold: true }) + arrow(a, 355, 65, 375, 65) +
    box(380, 30, 150, 70, ['Water plants', 'cannot', 'photosynthesise'], { size: 13, bold: true }) + arrow(a, 530, 65, 550, 65) +
    box(555, 30, 135, 70, ['Plants and', 'algae die'], { size: 13, bold: true }) + arrow(a, 620, 100, 620, 135) +
    box(380, 140, 310, 70, ['Decomposers multiply and', 'use up the dissolved oxygen'], { size: 13, bold: true }) + arrow(a, 380, 175, 330, 175) +
    box(110, 140, 215, 70, ['Fish and other', 'animals die'], { size: 13, bold: true })),
    'Pollution reduces biodiversity in water as well as on land. Extra nitrates and phosphates make algae grow very fast; they block the light, so plants below die. Bacteria that decompose the dead material respire aerobically and use up the oxygen in the water, so fish and other aquatic animals die. Careful use of fertiliser and buffer strips by rivers help to prevent this.');

  D('b-conservation', 'hedgerows link habitats', svg(700, 260, 'Hedgerows and field margins act as corridors between habitats', a =>
    `<rect x="20" y="20" width="660" height="220" fill="none" stroke="currentColor" opacity=".3"/>` +
    `<ellipse cx="100" cy="130" rx="70" ry="85" fill="${C.g}" opacity=".55"/>` + T(100, 135, 'woodland', { size: 14 }) +
    `<ellipse cx="600" cy="130" rx="70" ry="85" fill="${C.g}" opacity=".55"/>` + T(600, 135, 'woodland', { size: 14 }) +
    `<path d="M170 130 C 260 60, 440 200, 530 130" fill="none" stroke="${C.g}" stroke-width="14" opacity=".85"/>` + T(350, 108, 'hedgerow corridor', { size: 14, bold: true }) +
    T(350, 210, 'crop field (one species)', { size: 14 }) + arrow(a, 250, 160, 300, 150, { c: C.a }) + T(260, 185, 'animals move safely', { size: 12 })),
    'Large fields of a single crop support few species. Replanting hedgerows and leaving wide field margins gives food and shelter, and links isolated patches of habitat so that animals can move, find mates and recolonise areas. This keeps populations larger and more genetically varied, helping to maintain biodiversity.');

  D('b-environment-change', 'a species moving up a mountain', svg(660, 300, 'As the climate warms, the zone where a mountain species can live moves uphill', a =>
    `<path d="M40 270 L330 40 L620 270 Z" fill="var(--accent-soft)" stroke="var(--accent)" stroke-width="2"/>` +
    `<path d="M195 147 L465 147" stroke="${C.b}" stroke-width="3" stroke-dasharray="7 5"/><path d="M243 109 L417 109" stroke="${C.r}" stroke-width="3" stroke-dasharray="7 5"/>` +
    T(480, 152, 'lower limit then', { size: 13, anchor: 'start', fill: C.b }) + T(430, 104, 'lower limit now', { size: 13, anchor: 'start', fill: C.r }) +
    arrow(a, 330, 145, 330, 114) + T(330, 290, 'less land is available higher up, so the range shrinks', { size: 13 })),
    'Each species can survive only within a range of temperatures and water availability. As average temperatures rise, the lowest altitude at which a cold-adapted plant can survive moves uphill. Because a mountain narrows towards the top, the area the species can occupy shrinks, and it may disappear from the mountain altogether.');
})();
