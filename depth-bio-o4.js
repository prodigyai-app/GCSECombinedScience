/* Opus depth pass for Inheritance, variation and evolution (4.6). */
(() => {
  const { v, fr, res } = LAB.W, add = GcseDepth.add, D = { desc: true };
  const ul = a => '<ul>' + a.map(x => `<li>${x}</li>`).join('') + '</ul>';
  const L = (id, title, html, higher) => add(id, { learn: [[title, html, higher]] });
  const E = (id, title, q, steps, meta) => add(id, { ex: [[title, q, steps, meta || D]] });
  const P = (q, m, ms, x) => Object.assign({ q, m, lines: Math.max(2, m), ms: ms.map(t => ['1', t]) }, x || {});
  const C = (a, unit, calc, tol = 0.02) => ({ ans: { a, unit, tol }, calc });
  const H = o => Object.assign(o, { ht: true, q: '<span class="ht">Higher</span> ' + o.q });
  const Q = (stem, parts) => ({ stem: stem ? `<p>${stem}</p>` : '', parts });
  const X = (id, ...qs) => add(id, { exam: qs });
  const L6 = (a, b, c) => [['Level 3 (5–6)', a], ['Level 2 (3–4)', b], ['Level 1 (1–2)', c], ['0', 'No relevant content.']];

  /* ---------- b-repro ---------- */
  L('b-repro', 'Going further: meiosis and fertilisation', `<p>Sexual reproduction involves the joining (fusion) of male and female gametes: sperm and egg cells in animals; pollen and egg cells in flowering plants. There is mixing of genetic information, which leads to variety in the offspring. The formation of gametes involves <b>meiosis</b>. Asexual reproduction involves only one parent and no fusion of gametes; there is no mixing of genetic information, so the offspring are genetically identical clones. Only mitosis is involved.</p><p>In meiosis, copies of the genetic information are made, then the cell divides twice to form <b>four</b> gametes, each with a single set of chromosomes (23 in humans), and all genetically different from each other. At fertilisation, gametes join to restore the normal number of chromosomes (46); the new cell divides by mitosis, and the number of cells increases. As the embryo develops, cells differentiate.</p>` + ul(['Mitosis: 2 identical diploid cells. Meiosis: 4 different haploid cells.', 'Meiosis happens in the testes and ovaries (anthers and ovaries in plants).', 'Haploid = one set of chromosomes.']));
  E('b-repro', 'Chromosome numbers', 'A dog has 78 chromosomes in its body cells. Give the number in a sperm cell and in a fertilised egg.', [
    ['Gamete', 'Half the body cell number.', ['78 ÷ 2 = 39']],
    ['Zygote', 'Two gametes fuse.', [`${res('39 in a sperm; 78 in a fertilised egg')}`]]], { chk: [['78/2', 39]] });
  E('b-repro', 'Comparing mitosis and meiosis', 'Compare the number and type of cells produced by mitosis and meiosis.', [
    ['Mitosis', 'Two cells, identical, full chromosome number.', ['body cells']],
    ['Meiosis', 'Four cells, genetically different, half the number.', [`${res('Mitosis: 2 identical diploid; meiosis: 4 different haploid.')}`]]]);
  X('b-repro', Q('A cat has 38 chromosomes in each body cell.', [
    P('Give the number of chromosomes in a cat egg cell.', 1, ['19'], C(19, '', '38/2', 0)),
    P('Give the number of cells produced when one cell divides by meiosis.', 1, ['4'], C(4, '', '4', 0)),
    P('Explain why kittens from the same parents look different from each other.', 1, ['meiosis produces genetically different gametes / random fertilisation mixes genetic information'])
  ]));

  /* ---------- b-repro-evaluation ---------- */
  L('b-repro-evaluation', 'Going further: organisms that use both methods', `<p>Advantages of sexual reproduction: it produces variation in the offspring; if the environment changes, variation gives a survival advantage by natural selection; and humans can speed up natural selection through selective breeding to increase food production. Advantages of asexual reproduction: only one parent is needed; it is more time- and energy-efficient as no mate is needed; it is faster than sexual reproduction; and many identical offspring can be produced when conditions are favourable.</p><p>Some organisms reproduce by both methods depending on circumstances. Malarial parasites reproduce asexually in the human host but sexually in the mosquito. Many fungi reproduce asexually by spores but also sexually to give variation. Many plants produce seeds sexually, but also reproduce asexually by runners (strawberry plants) or bulb division (daffodils).</p>` + ul(['Asexual offspring are clones: one disease could wipe them all out.', 'Sexual reproduction needs two parents and more energy.', 'Use the context in evaluation questions.']));
  E('b-repro-evaluation', 'Explaining aphid reproduction', 'Aphids reproduce asexually in summer and sexually in autumn. Suggest why.', [
    ['Summer', 'Good conditions: fast population growth is useful.', ['asexual: many offspring quickly']],
    ['Autumn', 'Conditions change; variation helps survival.', [`${res('Asexual when conditions are good; sexual to produce variation before winter.')}`]]]);
  E('b-repro-evaluation', 'Number of offspring', 'An aphid produces 5 offspring a day asexually. Each offspring starts reproducing after 7 days. How many offspring does one aphid produce in 14 days (ignoring its offspring)?', [
    ['Daily rate', '5 per day.', ['for 14 days']],
    ['Total', '5 × 14.', [`${res('70 offspring')}`]]], { chk: [['5*14', 70]] });
  X('b-repro-evaluation', Q('Strawberry plants can reproduce sexually by seeds and asexually by runners.', [
    P('Give one advantage of growing strawberries from runners.', 1, ['faster / offspring identical to a parent with desired features / only one parent needed']),
    P('Give one disadvantage of growing strawberries only from runners.', 1, ['no variation, so a disease could affect all plants']),
    P('Explain why seeds produced by sexual reproduction might help the species survive a change in climate.', 1, ['variation means some offspring may have characteristics that suit the new climate'])
  ]));

  /* ---------- b-dna ---------- */
  L('b-dna', 'Going further: genes and the genome', `<p>The genetic material in the nucleus of a cell is composed of a chemical called <b>DNA</b>. DNA is a polymer made up of two strands forming a double helix. The DNA is contained in structures called <b>chromosomes</b>. A <b>gene</b> is a small section of DNA on a chromosome; each gene codes for a particular sequence of amino acids, to make a specific protein. The <b>genome</b> of an organism is the entire genetic material of that organism. The whole human genome has now been studied, and this has great importance for medicine in the future.</p><p>Understanding the human genome is important for the search for genes linked to different types of disease, for understanding and treating inherited disorders, and for tracing human migration patterns from the past. Concerns include the privacy of genetic information, possible discrimination by employers or insurers, and anxiety about knowing a risk of a disease that cannot be treated.</p>` + ul(['Hierarchy: nucleus → chromosome → DNA → gene → base sequence.', 'Humans have about 20 000 genes.', 'Alleles are different forms of the same gene.']));
  E('b-dna', 'Using the genome in medicine', 'Explain how knowing a person’s genome could help their doctor prescribe drugs.', [
    ['Genes and drugs', 'Some alleles affect how people respond to drugs.', ['personalised medicine']],
    ['Benefit', 'Choose the most effective drug and dose.', [`${res('Fewer side effects and more effective treatment.')}`]]]);
  E('b-dna', 'Scale of the genome', 'The human genome has about 3 × 10⁹ base pairs and about 20 000 genes. Estimate the mean number of base pairs per gene.', [
    ['Divide', '3 × 10⁹ ÷ 2 × 10⁴.', ['1.5 × 10⁵']],
    ['Answer', 'Interpret.', [`${res('About 150 000 base pairs per gene (much DNA is non-coding).')}`]]], { chk: [['3e9/2e4', 150000]] });
  X('b-dna', Q('DNA is found in the nucleus of cells.', [
    P('Describe the structure of DNA.', 2, ['a polymer', 'made of two strands in a double helix']),
    P('Give one way that studying the human genome helps scientists understand human history.', 1, ['tracing human migration patterns from the past'])
  ]));

  /* ---------- b-nucleotides ---------- */
  L('b-nucleotides', 'Going further: DNA structure and the genetic code', `<p>DNA is made from repeating units called <b>nucleotides</b>. Each nucleotide consists of a common sugar and phosphate group with one of four different bases attached to the sugar: A, C, G and T. The long strands of DNA consist of alternating sugar and phosphate sections, with the bases attached to each sugar. On the opposite strands of the double helix, a C is always linked to a G, and an A to a T: they are <b>complementary</b> base pairs.</p><p>The order of bases controls the order in which amino acids are assembled to produce a particular protein. A sequence of three bases is the code for a particular amino acid. Proteins are synthesised on ribosomes, according to a template; carrier molecules bring specific amino acids to add to the growing protein chain in the correct order.</p>` + ul(['If 30% of bases are A, then 30% are T, and 20% each are C and G.', 'Number of amino acids = number of bases ÷ 3 (coding sequence).', 'Biology only.']));
  E('b-nucleotides', 'Base percentages', 'In a DNA sample 22% of the bases are guanine. Calculate the percentage of adenine.', [
    ['Pairing', 'G = C = 22%.', ['G + C = 44%']],
    ['A and T', 'The rest are A and T equally.', [`(100 − 44) ÷ 2 = ${res('28%')}`]]], { chk: [['(100-2*22)/2', 28]] });
  E('b-nucleotides', 'Amino acids from bases', 'A gene has 1260 bases in its coding sequence. How many amino acids does the protein contain?', [
    ['Triplets', 'Three bases per amino acid.', ['1260 ÷ 3']],
    ['Answer', 'Calculate.', [`${res('420 amino acids')}`]]], { chk: [['1260/3', 420]] });
  X('b-nucleotides', Q('A sample of DNA contains 18% thymine.', [
    P('Calculate the percentage of cytosine in the sample.', 2, ['A = 18%, so A + T = 36%', 'C = (100 − 36) ÷ 2 = 32%'], C(32, '%', '(100-2*18)/2')),
    P('Name the part of the nucleotide that differs between the four types.', 1, ['the base'])
  ]));

  /* ---------- b-protein ---------- */
  L('b-protein', 'Going further: mutations and gene expression', `<p>(HT) Protein synthesis has two stages. In the nucleus, the gene is copied into a template molecule (mRNA), which can leave the nucleus. At the ribosome, the template is read three bases at a time; carrier molecules bring the specific amino acids, which are joined in the correct order. When the chain is complete, it folds up to form a unique shape, which allows proteins such as enzymes, hormones and structural proteins (collagen) to do their jobs.</p><p><b>Mutations</b> occur continuously. Most do not alter the protein, or only alter it slightly so its appearance or function is unchanged. A few may alter the shape of an enzyme’s active site so the substrate no longer fits, or change a structural protein so it loses strength. Not all parts of DNA code for proteins: non-coding parts can switch genes on and off, so variations in these areas may affect how genes are expressed.</p>` + ul(['Substitution: one base replaced; may change one amino acid.', 'Insertion or deletion: shifts every following triplet, often with large effects.', 'Protein shape determines function.']));
  E('b-protein', 'Effect of a deletion', 'Explain why deleting one base usually has a bigger effect than substituting one base.', [
    ['Substitution', 'Changes only one triplet, so at most one amino acid.', ['often little effect']],
    ['Deletion', 'Shifts every following triplet.', [`${res('Many amino acids change, so the protein shape is greatly altered.')}`]]], { desc: true, higher: true });
  E('b-protein', 'Reading a base sequence', 'A section of the template codes ATG GCA TTC. How many amino acids does this code for, and what happens if the C in GCA becomes T?', [
    ['Count', 'Three triplets.', ['3 amino acids']],
    ['Change', 'GCA → GTA changes one triplet.', [`${res('Only the second amino acid may change.')}`]]], { desc: true, higher: true });
  X('b-protein', Q('Haemoglobin is a protein found in red blood cells.', [
    H(P('Describe how the order of bases in a gene determines the structure of haemoglobin.', 2, ['each sequence of three bases codes for one amino acid', 'the order of amino acids determines how the protein folds / its shape'])),
    H(P('A mutation changes one base in the haemoglobin gene. Explain why this might not affect the protein.', 1, ['the new triplet may code for the same amino acid / the change may not affect the shape']))
  ]));

  /* ---------- b-inheritance ---------- */
  L('b-inheritance', 'Going further: alleles and inherited disorders', `<p>Some characteristics are controlled by a single gene, such as fur colour in mice and red-green colour blindness in humans. Each gene may have different forms called <b>alleles</b>. The alleles present, or <b>genotype</b>, operate at a molecular level to develop characteristics that can be expressed as a <b>phenotype</b>. A <b>dominant</b> allele is always expressed, even if only one copy is present; a <b>recessive</b> allele is only expressed if two copies are present. If the two alleles are the same, the individual is <b>homozygous</b>; if different, <b>heterozygous</b>. Most characteristics are a result of multiple genes interacting.</p><p>Polydactyly (extra fingers or toes) is caused by a dominant allele. Cystic fibrosis, a disorder of cell membranes, is caused by a recessive allele. Embryo screening and gene therapy are possible ways to deal with inherited disorders, but they raise economic, social and ethical issues. In humans, ordinary body cells have 23 pairs of chromosomes; 22 pairs control characteristics only, and one pair carries the genes that determine sex (XX female, XY male).</p>` + ul(['Carrier: heterozygous for a recessive disorder; does not have symptoms.', 'Probability of a boy or girl is 50% each time.', 'Use capital letter for dominant, same lower-case letter for recessive.']));
  E('b-inheritance', 'Sex inheritance', 'Use a genetic cross to show the probability of a child being male.', [
    ['Gametes', 'Mother: X, X. Father: X, Y.', ['XX × XY']],
    ['Offspring', 'XX, XX, XY, XY.', [`${res('2 out of 4 = 50% male')}`]]], { chk: [['2/4*100', 50]] });
  E('b-inheritance', 'Two carrier parents', 'Both parents are carriers of cystic fibrosis (Ff). What is the probability their child is a carrier?', [
    ['Cross', 'Ff × Ff → FF, Ff, Ff, ff.', ['four outcomes']],
    ['Carriers', 'Ff appears twice.', [`${res('2/4 = 50%')}`]]], { chk: [['2/4*100', 50]] });
  X('b-inheritance', Q('Polydactyly is caused by a dominant allele, D.', [
    P('A father has genotype Dd and the mother dd. Calculate the probability that their child has polydactyly.', 1, ['50% (1/2)'], C(50, '%', '2/4*100'))
  ]));

  /* ---------- b-crosses ---------- */
  L('b-crosses', 'Going further: genetic diagrams and family trees', `<p>A <b>Punnett square</b> shows the possible combinations of alleles in the offspring of two parents. Write the alleles of one parent’s gametes across the top and the other parent’s down the side, then fill in each box. The results give the probability of each genotype and phenotype, usually as a fraction, percentage or ratio. A cross between two heterozygotes (Aa × Aa) gives a 3 : 1 ratio of dominant to recessive phenotypes; Aa × aa gives 1 : 1.</p><p>Family trees (pedigree charts) show how a characteristic is inherited in a family. If two unaffected parents have an affected child, the allele must be recessive and both parents must be carriers. The actual ratio in offspring often differs from the expected ratio because fertilisation is random and the number of offspring is small.</p>` + ul(['Probabilities apply to each child independently.', 'Expected number = probability × total offspring.', 'A test cross with a homozygous recessive reveals an unknown genotype.']));
  E('b-crosses', 'Expected numbers', 'Two heterozygous pea plants (Tt) produce 240 seeds. How many are expected to grow into short (tt) plants?', [
    ['Probability', 'Tt × Tt: tt = 1/4.', ['0.25']],
    ['Expected number', '0.25 × 240.', [`${res('60 short plants')}`]]], { chk: [['240/4', 60]] });
  E('b-crosses', 'Reading a family tree', 'Two parents without a disorder have a son with the disorder. What can you conclude?', [
    ['Inheritance', 'The disorder appeared although neither parent shows it.', ['allele is recessive']],
    ['Genotypes', 'Both parents carry one copy.', [`${res('Recessive allele; both parents are heterozygous carriers.')}`]]]);
  X('b-crosses', Q('In guinea pigs, black fur (B) is dominant to white fur (b). Two black guinea pigs have 12 offspring: 9 black and 3 white.', [
    P('Give the genotypes of the parents and explain your answer.', 2, ['both Bb', 'white offspring (bb) must receive b from each parent']),
    P('Calculate the expected number of white offspring from 12.', 1, ['3'], C(3, '', '12/4', 0))
  ]));

  /* ---------- b-selection ---------- */
  L('b-selection', 'Going further: variation and selective breeding', `<p>Differences in the characteristics of individuals in a population are called <b>variation</b>, and may be due to differences in the genes they have inherited (genetic causes), the conditions in which they have developed (environmental causes), or a combination of both. There is usually extensive genetic variation within a population. All variants arise from mutations; most have no effect on the phenotype, some influence it and very few determine it.</p><p>In <b>evolution by natural selection</b>, individuals with characteristics most suited to the environment are more likely to survive to breed successfully, passing on the alleles for those characteristics. <b>Selective breeding</b> (artificial selection) is the process by which humans breed plants and animals for particular characteristics: choose parents with the desired characteristic, breed them, select the best offspring and repeat over many generations. Uses include disease resistance in crops, more meat or milk from animals, gentle domestic dogs and large unusual flowers. Selective breeding can lead to inbreeding, where some breeds are prone to disease or inherited defects.</p>` + ul(['Identical twins show the effect of environment.', 'Selective breeding reduces genetic variation.', 'Evolution: change in inherited characteristics of a population over time.']));
  E('b-selection', 'Selective breeding results', 'Milk yield of a herd rose from 5000 to 8500 litres per cow per year after selective breeding. Calculate the percentage increase.', [
    ['Increase', '8500 − 5000 = 3500.', ['litres']],
    ['Percentage', '÷ 5000 × 100.', [`${res('70%')}`]]], { chk: [['3500/5000*100', 70]] });
  E('b-selection', 'Natural selection in rabbits', 'Explain how a population of rabbits could become faster runners over many generations if foxes are common.', [
    ['Variation', 'Some rabbits are faster due to their alleles.', ['mutation causes variation']],
    ['Selection', 'Faster rabbits survive and breed more.', [`${res('Alleles for speed become more common in the population.')}`]]]);
  X('b-selection', Q('Wild cabbage has been selectively bred to produce broccoli, cauliflower and kale.', [
    P('Describe the steps a breeder would take to produce a cabbage with larger leaves.', 2, ['select parents with the largest leaves and breed them', 'select the offspring with the largest leaves and repeat over many generations']),
    P('Give one disadvantage of selective breeding.', 1, ['reduces variation / inbreeding / more prone to disease or inherited defects'])
  ]));

  /* ---------- b-engineering ---------- */
  L('b-engineering', 'Going further: genetic engineering in agriculture and medicine', `<p>Genetic engineering is a process which involves modifying the genome of an organism by introducing a gene from another organism to give a desired characteristic. Plant crops have been genetically engineered to be resistant to diseases, herbicides or insect attack, or to produce bigger, better fruits. Bacterial cells have been genetically engineered to produce useful substances such as human insulin to treat diabetes. Crops that have had their genes modified are called genetically modified (GM) crops.</p><p>Benefits include increased yields and reduced pesticide use. Concerns include the effect on populations of wild flowers and insects, the possibility of genes spreading to wild plants, and uncertainty about the long-term effects of eating GM crops on human health. Modern medical research is exploring the possibility of genetic modification to overcome some inherited disorders (gene therapy).</p>` + ul(['Evaluate with benefits, risks and a conclusion.', 'GM insulin is identical to human insulin.', 'Golden rice contains a gene for beta-carotene (vitamin A precursor).']));
  E('b-engineering', 'Evaluating a GM crop', 'A maize crop is engineered to produce a toxin that kills caterpillars. Give one benefit and one risk.', [
    ['Benefit', 'Less crop eaten; less insecticide sprayed.', ['higher yield']],
    ['Risk', 'May harm other insects, or pests become resistant.', [`${res('Higher yield and less spraying, but risk to non-target insects.')}`]]]);
  E('b-engineering', 'Yield increase', 'A GM crop yields 9.2 tonnes per hectare compared with 7.4 for the non-GM crop. Calculate the percentage increase.', [
    ['Increase', '9.2 − 7.4 = 1.8.', ['tonnes']],
    ['Percentage', '÷ 7.4 × 100.', [`${res('24.3%')}`]]], { chk: [['1.8/7.4*100', 24.32]] });
  X('b-engineering', Q('Human insulin is made by genetically engineered bacteria.', [
    P('Give one advantage of producing insulin using bacteria.', 1, ['large amounts quickly / identical to human insulin / no animal ethics issues'])
  ]));

  /* ---------- b-engineering-steps ---------- */
  L('b-engineering-steps', 'Going further: the steps of genetic engineering', `<p>(HT) In genetic engineering, enzymes are used to isolate the required gene: <b>restriction enzymes</b> cut it out of the DNA, leaving short single-stranded "sticky ends". The gene is inserted into a <b>vector</b>, usually a bacterial plasmid or a virus. The same restriction enzyme cuts the plasmid, giving matching sticky ends, and <b>ligase</b> enzymes join the gene into the plasmid. The vector is used to insert the gene into the required cells. Genes are transferred to the cells of animals, plants or microorganisms at an early stage in their development so that they develop with the desired characteristics.</p><p>Bacteria that have taken up the plasmid can be identified using marker genes, such as antibiotic resistance: only bacteria with the plasmid grow on agar containing that antibiotic. The selected bacteria are grown in large fermenters to produce the protein.</p>` + ul(['Restriction enzymes: cut. Ligase: join.', 'Sticky ends must be complementary.', 'Early stage insertion means all cells carry the gene.']));
  E('b-engineering-steps', 'Selecting transformed bacteria', 'Explain how scientists identify bacteria that have taken up a plasmid carrying an antibiotic resistance marker gene.', [
    ['Grow', 'Spread bacteria on agar containing the antibiotic.', ['selective medium']],
    ['Survivors', 'Only bacteria with the plasmid are resistant.', [`${res('Colonies that grow have taken up the plasmid.')}`]]], { desc: true, higher: true });
  E('b-engineering-steps', 'Ordering the steps', 'Put in order: insert plasmid into bacterium; cut gene out; join gene into plasmid; cut plasmid.', [
    ['Cutting', 'Use the same restriction enzyme on both.', ['cut gene out; cut plasmid']],
    ['Joining and transfer', 'Ligase, then insertion.', [`${res('Cut gene → cut plasmid → join with ligase → insert into bacterium')}`]]], { desc: true, higher: true });
  X('b-engineering-steps', Q('Scientists want bacteria to produce human growth hormone.', [
    H(P('Name the enzyme used to cut the gene from human DNA.', 1, ['restriction enzyme'])),
    H(P('Name the enzyme used to join the gene into the plasmid.', 1, ['ligase'])),
    H(P('Explain why the bacteria can then be used to make large amounts of the hormone.', 1, ['bacteria reproduce rapidly and each new bacterium carries the gene / expresses it']))
  ]));

  /* ---------- b-cloning ---------- */
  L('b-cloning', 'Going further: methods of cloning', `<p><b>Tissue culture</b>: small groups of cells from part of a plant are grown on agar containing nutrients and hormones to produce identical new plants; it is used to preserve rare species and commercially in nurseries. <b>Cuttings</b>: gardeners take cuttings from good parent plants and plant them (often with rooting powder) to produce many identical plants quickly and cheaply. <b>Embryo transplants</b>: cells are split apart from a developing animal embryo before they become specialised, and the identical embryos are transplanted into host mothers.</p><p><b>Adult cell cloning</b>: the nucleus is removed from an unfertilised egg cell; the nucleus from an adult body cell, such as a skin cell, is inserted into the egg; an electric shock stimulates the egg to divide; when the embryo has developed into a ball of cells, it is inserted into the womb of an adult female. The offspring is genetically identical to the animal that provided the body cell (as with Dolly the sheep). Concerns include reduced genetic variation, lower success rates, and ethical objections.</p>` + ul(['Clone: genetically identical individual.', 'Embryo transplant clones are identical to each other, not to the parents.', 'Adult cell clone is identical to the donor of the nucleus.']));
  E('b-cloning', 'Who is the clone identical to?', 'A sheep is cloned using the nucleus of a skin cell from sheep A and an egg from sheep B, and is carried by sheep C. Which sheep is the clone identical to?', [
    ['Genetic material', 'The nucleus contains the DNA.', ['nucleus from A']],
    ['Answer', 'B supplied only the empty egg; C only the womb.', [`${res('Sheep A')}`]]]);
  E('b-cloning', 'Number of calves', 'An embryo is split into 6 cells, and each is transplanted. 4 develop into calves. Calculate the success rate.', [
    ['Divide', '4 ÷ 6.', ['0.667']],
    ['Percentage', '× 100.', [`${res('67%')}`]]], { chk: [['4/6*100', 66.67]] });
  X('b-cloning', Q('A farmer uses embryo transplants to produce several calves from a prize cow and bull.', [
    P('Explain why the calves are genetically identical to each other but not to either parent.', 1, ['all come from the same embryo (one fertilised egg), which combined genes from both parents'])
  ]));

  /* ---------- b-history ---------- */
  L('b-history', 'Going further: Darwin, Mendel and speciation', `<p>Charles Darwin, after a round-the-world voyage, experimentation, discussion and reflection, proposed the theory of evolution by natural selection, published in 1859 in <i>On the Origin of Species</i>. Individual organisms within a species show a wide range of variation; those with characteristics most suited to the environment are more likely to survive and breed; the characteristics are passed on. The theory was only gradually accepted because it challenged the idea that God made all animals and plants, there was insufficient evidence at the time, and the mechanism of inheritance and variation was not known until 50 years later.</p><p>Lamarck suggested that changes that occur in an organism during its lifetime can be inherited; this is now rejected. Alfred Russel Wallace independently proposed natural selection and is best known for his work on <b>speciation</b>: populations become isolated, genetic variation and different conditions lead to natural selection of different alleles, and eventually the populations can no longer interbreed to produce fertile offspring. Gregor Mendel’s experiments with pea plants showed that characteristics are determined by "units" (genes) passed on unchanged; his work was recognised only after his death, once chromosomes and genes were discovered.</p>` + ul(['Species: organisms that can interbreed to produce fertile offspring.', 'Evidence for evolution: fossils, antibiotic resistance.', 'Darwin did not know about genes.']));
  E('b-history', 'Darwin versus Lamarck', 'Explain how Darwin and Lamarck would explain long necks in giraffes.', [
    ['Lamarck', 'Giraffes stretched their necks and passed on longer necks.', ['acquired characteristic inherited']],
    ['Darwin', 'Giraffes with longer necks survived and bred more.', [`${res('Darwin: natural selection of variation; Lamarck: inheritance of acquired characteristics.')}`]]]);
  E('b-history', 'Mendel’s ratio', 'Mendel crossed tall pea plants and got 787 tall and 277 short. Calculate the ratio of tall to short.', [
    ['Divide', '787 ÷ 277.', ['2.84']],
    ['Interpret', 'Close to 3 : 1.', [`${res('About 2.8 : 1, close to the expected 3 : 1')}`]]], { chk: [['787/277', 2.841]] });
  X('b-history', Q('Mendel investigated inheritance in pea plants.', [
    P('Mendel obtained 6022 yellow seeds and 2001 green seeds. Calculate the ratio of yellow to green seeds.', 1, ['3.0 : 1'], C(3.0, '', '6022/2001', 0.01)),
    P('Give the modern name for Mendel’s "units" of inheritance.', 1, ['genes']),
    P('Explain why Darwin could not explain how variation was passed on.', 1, ['genes / the mechanism of inheritance had not been discovered'])
  ]));

  /* ---------- b-evidence ---------- */
  L('b-evidence', 'Going further: fossils, extinction and resistance', `<p>The theory of evolution by natural selection is now widely accepted. Evidence comes from fossils and from the development of antibiotic resistance in bacteria. <b>Fossils</b> are the remains of organisms from millions of years ago found in rocks. They may form from parts of organisms that have not decayed because conditions for decay were absent, when parts are replaced by minerals as they decay, or as traces such as footprints, burrows and rootlet traces. Many early forms of life were soft-bodied, so they left few traces, and those that did were often destroyed by geological activity; this is why scientists cannot be certain how life began.</p><p><b>Extinction</b> may be caused by new diseases, new predators, new competitors, changes to the environment over geological time, or a single catastrophic event. Bacteria can evolve rapidly because they reproduce at a fast rate. Mutations produce resistant strains such as MRSA, which survive antibiotic treatment and reproduce, so the population of the resistant strain rises. To reduce resistance: do not prescribe antibiotics for viral or non-serious infections, complete the course, and restrict agricultural use.</p>` + ul(['Resistance is natural selection in action.', 'New antibiotics are expensive and slow to develop.', 'Fossil record shows gradual change over time.']));
  E('b-evidence', 'Growth of a resistant strain', 'A resistant bacterium divides every 30 minutes. How many resistant bacteria are there after 6 hours, starting from one?', [
    ['Divisions', '360 ÷ 30 = 12.', ['12']],
    ['Number', '2¹².', [`${res('4096')}`]]], { chk: [['2**12', 4096]] });
  E('b-evidence', 'Completing the course', 'Explain why patients should finish a course of antibiotics.', [
    ['Survivors', 'Stopping early may leave the most resistant bacteria alive.', ['partial treatment']],
    ['Result', 'They multiply.', [`${res('Finishing the course kills all the bacteria, reducing resistant strains.')}`]]]);
  X('b-evidence', Q('Fossils provide evidence for evolution.', [
    P('Explain why the fossil record is incomplete.', 2, ['many early organisms were soft-bodied so did not fossilise', 'many fossils have been destroyed by geological activity / not yet found']),
    P('Give one cause of extinction.', 1, ['new predator / disease / competitor / environmental change / catastrophic event'])
  ]));

  /* ---------- b-classification ---------- */
  L('b-classification', 'Going further: classifying organisms', `<p>Traditionally living things have been classified into groups depending on their structure and characteristics in a system described by Carl Linnaeus: kingdom, phylum, class, order, family, genus and species. Organisms are named by the binomial system of genus and species, for example <i>Homo sapiens</i>. As evidence of internal structures became more developed due to improvements in microscopes, and the understanding of biochemical processes progressed, new models of classification were proposed.</p><p>Due to evidence available from chemical analysis there is now a <b>three-domain</b> system developed by Carl Woese: Archaea (primitive bacteria usually living in extreme environments), Bacteria (true bacteria) and Eukaryota (protists, fungi, plants and animals). <b>Evolutionary trees</b> are a method used by scientists to show how they believe organisms are related. They use current classification data for living organisms and fossil data for extinct organisms. The closer two branches are, the more recent their common ancestor.</p>` + ul(['Genus name has a capital letter; species does not.', 'DNA sequencing shows relationships more accurately than appearance.', 'Organisms in the same genus are more closely related than those in the same family only.']));
  E('b-classification', 'Using binomial names', 'The lion is Panthera leo and the tiger Panthera tigris. The domestic cat is Felis catus. Which two are most closely related?', [
    ['Genus', 'Lion and tiger share Panthera.', ['same genus']],
    ['Answer', 'Cat is in a different genus.', [`${res('Lion and tiger')}`]]]);
  E('b-classification', 'DNA similarity', 'Species X shares 98% of its DNA with species Y and 85% with species Z. Which is the closer relative of X?', [
    ['Compare', '98% > 85%.', ['more shared DNA']],
    ['Conclusion', 'More recent common ancestor.', [`${res('Y is more closely related to X.')}`]]]);
  X('b-classification', Q('A scientist discovers a new species of bacterium living in a hot spring at 90 °C.', [
    P('Suggest which domain the organism might belong to and give a reason.', 2, ['Archaea', 'they often live in extreme environments / chemical analysis differs from true bacteria']),
    P('Give the two parts of a binomial name.', 1, ['genus and species'])
  ]));
})();
