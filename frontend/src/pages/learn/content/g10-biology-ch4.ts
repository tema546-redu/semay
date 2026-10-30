import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 BIOLOGY — UNIT 4
// CELL REPRODUCTION
// Source: Grade 10 Biology Student Textbook (pp. 81–93)
// For: Abenezer (Abatu) — Grade 10
// ============================================================

export const g10BiologyCh4: Chapter = {
  id: "ch4",
  number: 4,
  title: "Cell Reproduction",
  titleAm: "የሴል መራባት",

  notes: [
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, Unit 4 is CELL REPRODUCTION. It has FOUR big halves:\n" +
        "1) THE CELL CYCLE (interphase + M phase)\n" +
        "2) MITOSIS (4 phases: prophase, metaphase, anaphase, telophase)\n" +
        "3) MEIOSIS (Meiosis I + Meiosis II)\n" +
        "4) MITOSIS vs MEIOSIS + significance\n\n" +
        "The WHOLE chapter reduces to these must-know items:\n" +
        "• Stages of the cell cycle (G1, S, G2, M)\n" +
        "• What happens in each mitotic phase\n" +
        "• What happens in each meiotic phase\n" +
        "• The mitosis vs meiosis comparison table\n" +
        "• Haploid vs diploid\n" +
        "• Crossing over and its importance\n" +
        "• Cancer = uncontrolled cell division\n" +
        "• Ethiopian geneticist Dr. Melaku Worede\n\n" +
        "Mastery rule: MEMORIZE the phase descriptions and the comparison table. This unit is heavy on sequencing and definitions.",
      bodyAm:
        "አባቱ፣ ክፍል 4 የሴል መራባት ነው። አራት ትላልቅ ክፍሎች፡\n" +
        "1) የሴል ዑደት\n" +
        "2) ሚቶሲስ\n" +
        "3) ሜዮሲስ\n" +
        "4) ሚቶሲስ vs ሜዮሲስ",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 — Cell cycle",
          titleAm: "ደረጃ 1 — የሴል ዑደት",
          body:
            "CELL CYCLE = the series of events a cell goes through from one division to the next.\n\n" +
            "TWO main stages:\n" +
            "1) INTERPHASE — cell grows and copies DNA (longest stage, ~90% of cycle)\n" +
            "2) M PHASE (mitotic phase) — cell divides (mitosis + cytokinesis)\n\n" +
            "INTERPHASE has 3 sub-stages:\n" +
            "• G1 (Gap 1) — cell grows, makes proteins\n" +
            "• S (Synthesis) — DNA REPLICATION (each chromosome → 2 sister chromatids)\n" +
            "• G2 (Gap 2) — cell prepares for division, more growth\n\n" +
            "M PHASE has 2 parts:\n" +
            "• MITOSIS — nucleus divides\n" +
            "• CYTOKINESIS — cytoplasm divides",
          bodyAm:
            "ዑደት: interphase + M phase።\n" +
            "Interphase: G1, S, G2።\n" +
            "S: DNA ቅጂ።\n" +
            "M: ሚቶሲስ + ሳይቶኪኒሲስ።",
        },
        {
          id: "n0-2",
          title: "Pass 2 — Mitosis",
          titleAm: "ደረጃ 2 — ሚቶሲስ",
          body:
            "MITOSIS = division of the nucleus producing TWO identical diploid daughter cells.\n\n" +
            "FOUR phases (P-M-A-T):\n" +
            "1) PROPHASE — chromosomes condense, nuclear envelope breaks, spindle forms\n" +
            "2) METAPHASE — chromosomes line up at the equator (middle)\n" +
            "3) ANAPHASE — sister chromatids separate, move to opposite poles\n" +
            "4) TELOPHASE — nuclear envelopes reform, chromosomes decondense\n\n" +
            "Followed by CYTOKINESIS — cytoplasm divides → 2 identical cells.",
          bodyAm:
            "ሚቶሲስ: P-M-A-T።\n" +
            "Prophase: chromosomes ይጠጣጠፋሉ።\n" +
            "Metaphase: መሃል ይሰለፋሉ።\n" +
            "Anaphase: ይለያያሉ።\n" +
            "Telophase: ኒውክሊየስ ይመለሳል።",
        },
        {
          id: "n0-3",
          title: "Pass 3 — Meiosis",
          titleAm: "ደረጃ 3 — ሜዮሲስ",
          body:
            "MEIOSIS = division producing FOUR haploid gametes (sex cells).\n" +
            "• TWO successive divisions: Meiosis I + Meiosis II\n" +
            "• Diploid (2n) → 4 haploid (n) cells\n" +
            "• Happens in gonads (testes, ovaries)\n\n" +
            "MEIOSIS I (reduction division):\n" +
            "• Prophase I — homologous chromosomes pair up (synapsis), CROSSING OVER occurs\n" +
            "• Metaphase I — homologous pairs line up\n" +
            "• Anaphase I — homologues separate\n" +
            "• Telophase I — 2 haploid cells form\n\n" +
            "MEIOSIS II (like mitosis):\n" +
            "• Prophase II, Metaphase II, Anaphase II, Telophase II\n" +
            "• Sister chromatids separate → 4 haploid cells\n\n" +
            "CROSSING OVER = exchange of genes between homologous chromosomes → GENETIC VARIATION.",
          bodyAm:
            "ሜዮሲስ = 4 haploid።\n" +
            "Meiosis I: cross over።\n" +
            "Meiosis II: mitosis አይነት።\n" +
            "2n → 4n(haploid)።",
        },
        {
          id: "n0-4",
          title: "Pass 4 — Mitosis vs Meiosis",
          titleAm: "ደረጃ 4 — ሚቶሲስ vs ሜዮሲስ",
          body:
            "| Feature | Mitosis | Meiosis |\n" +
            "|---------|---------|---------|\n" +
            "| Divisions | 1 | 2 |\n" +
            "| Daughter cells | 2 | 4 |\n" +
            "| Chromosome number | 2n → 2n (same) | 2n → n (halved) |\n" +
            "| Genetic result | Identical | Genetically varied |\n" +
            "| Crossing over | No | Yes (Prophase I) |\n" +
            "| Homologous pairing | No | Yes |\n" +
            "| Purpose | Growth, repair | Sexual reproduction |\n" +
            "| Where | All body cells | Gonads (testes, ovaries) |",
          bodyAm:
            "ሚቶሲስ: 1 division, 2 identical, 2n→2n።\n" +
            "ሜዮሲስ: 2 divisions, 4 varied, 2n→n።\n" +
            "Cross over በሜዮሲስ ብቻ።",
        },
        {
          id: "n0-5",
          title: "Pass 5 — Cancer & Ethiopian geneticist",
          titleAm: "ደረጃ 5 — ካንሰርና ኢትዮጵያዊ ጀነቲሲስት",
          body:
            "CANCER = UNCONTROLLED cell division.\n" +
            "• Cell cycle checkpoints fail\n" +
            "• Cells divide without stopping\n" +
            "• Form tumors\n" +
            "• Caused by mutations (DNA damage) from radiation, chemicals, viruses, inherited\n" +
            "• NOT infectious (not spread by contact)\n\n" +
            "Dr. MELAKU WOREDE — Ethiopian geneticist:\n" +
            "• Founded Ethiopia's SEED BANK\n" +
            "• Preserved indigenous crop seeds\n" +
            "• Won World Food Prize 2013\n" +
            "• World Food Prize 2009 = Gebissa Ejeta",
          bodyAm:
            "ካንሰር = ያልተቆጣጠረ ሴል ክፍፍል።\n" +
            "Melaku Worede: የዘር ባንክ፣ WFP 2013።",
        },
        {
          id: "n0-6",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Know the stages of the cell cycle in ORDER: G1 → S → G2 → M.\n" +
            "• DNA REPLICATION happens in S phase.\n" +
            "• Mitosis produces IDENTICAL cells; meiosis produces VARIED cells.\n" +
            "• Mitosis = 2 cells, 2n → 2n. Meiosis = 4 cells, 2n → n.\n" +
            "• Crossing over happens in PROPHASE I of meiosis.\n" +
            "• Haploid = n (one set); Diploid = 2n (two sets).\n" +
            "• Cancer = uncontrolled division.\n" +
            "• Dr. Melaku Worede = seed bank, WFP 2013.",
          bodyAm:
            "G1-S-G2-M ቅደም ተከተል።\n" +
            "S phase: DNA ቅጂ።\n" +
            "ሚቶሲስ = 2 cells; ሜዮሲስ = 4 cells።\n" +
            "Cross over: Prophase I።\n" +
            "Melaku Worede = ዘር ባንክ።",
        },
      ],
    },

    {
      id: "n1",
      title: "4.1 The Cell Cycle",
      titleAm: "4.1 የሴል ዑደት",
      body:
        "Abatu, the CELL CYCLE is the complete set of stages from one cell division to the next. It has TWO main parts: INTERPHASE and M PHASE.",
      bodyAm:
        "የሴል ዑደት = interphase + M phase።",
      children: [
        {
          id: "n1-1",
          title: "The three phases of interphase",
          titleAm: "የinterphase ሦስቱ ደረጃዎች",
          body:
            "G1 phase (Gap 1):\n" +
            "• Cell GROWS\n" +
            "• Makes PROTEINS and organelles\n" +
            "• Normal cell activities\n\n" +
            "S phase (Synthesis):\n" +
            "• DNA REPLICATION\n" +
            "• Each chromosome → 2 IDENTICAL SISTER CHROMATIDS (joined at centromere)\n" +
            "• Key phase for genetic continuity\n\n" +
            "G2 phase (Gap 2):\n" +
            "• Further growth\n" +
            "• Prepares for division\n" +
            "• Checks DNA for damage\n\n" +
            "KEY: Interphase is the LONGEST part (~90% of the cycle).",
          bodyAm:
            "G1: እድገት።\n" +
            "S: DNA ቅጂ።\n" +
            "G2: ዝግጅት።\n" +
            "Interphase ~90%።",
        },
        {
          id: "n1-2",
          title: "M phase (mitotic phase)",
          titleAm: "M phase",
          body:
            "M PHASE = nucleus division (mitosis) + cytoplasm division (cytokinesis).\n" +
            "• Mitosis produces 2 identical nuclei\n" +
            "• Cytokinesis divides the cell into 2 daughter cells\n\n" +
            "RESULT: One parent cell → TWO genetically IDENTICAL daughter cells.",
          bodyAm:
            "M phase = ሚቶሲስ + ሳይቶኪኒሲስ።\n" +
            "ውጤት: 2 ተመሳሳይ ሴሎች።",
        },
        {
          id: "n1-3",
          title: "⚠ Remember trap — Cell cycle",
          titleAm: "⚠ አትርሳ — የሴል ዑደት",
          body:
            "• Cell cycle = INTERPHASE + M PHASE.\n" +
            "• DNA replication happens in S phase.\n" +
            "• Interphase is the LONGEST phase.\n" +
            "• G1 → S → G2 → M (in order!).\n" +
            "• Cytokinesis = cytoplasm division.\n" +
            "• Result of mitosis = 2 identical cells.",
          bodyAm:
            "Interphase + M።\n" +
            "S: DNA።\n" +
            "G1→S→G2→M።",
        },
      ],
    },

    {
      id: "n2",
      title: "4.2 Mitosis",
      titleAm: "4.2 ሚቶሲስ",
      body:
        "Abatu, MITOSIS is the division of the nucleus producing TWO identical daughter nuclei. It has FOUR stages: PROPHASE, METAPHASE, ANAPHASE, TELOPHASE.",
      bodyAm:
        "ሚቶሲስ: 4 ደረጃዎች — Prophase, Metaphase, Anaphase, Telophase።",
      children: [
        {
          id: "n2-1",
          title: "Prophase",
          titleAm: "Prophase",
          body:
            "• Chromosomes CONDENSE (become visible — thick, short)\n" +
            "• NUCLEAR ENVELOPE breaks down\n" +
            "• NUCLEOLUS disappears\n" +
            "• SPINDLE FIBERS form from centrosomes\n" +
            "• Centrioles move to opposite poles\n" +
            "• Chromosomes appear as pairs of SISTER CHROMATIDS joined at centromere",
          bodyAm:
            "Chromosomes ይጠጣጠፋሉ።\n" +
            "Nuclear envelope ይፈርሳል።\n" +
            "Spindle ይፈጠራል።",
        },
        {
          id: "n2-2",
          title: "Metaphase",
          titleAm: "Metaphase",
          body:
            "• Chromosomes line up at the EQUATOR (middle) of the cell\n" +
            "• Spindle fibers attach to CENTROMERES\n" +
            "• KEY: 'M' for MIDDLE — chromosomes in the middle.",
          bodyAm:
            "መሃል ይሰለፋሉ።\n" +
            "Spindle ከ centromere ጋር ይገናኛል።",
        },
        {
          id: "n2-3",
          title: "Anaphase",
          titleAm: "Anaphase",
          body:
            "• SISTER CHROMATIDS SEPARATE\n" +
            "• Each chromatid is now an individual CHROMOSOME\n" +
            "• Chromosomes move to OPPOSITE POLES\n" +
            "• KEY: 'A' for AWAY — chromatids move apart.",
          bodyAm:
            "Sister chromatids ይለያያሉ።\n" +
            "ወደ ሁለት ጫፎች ይጓዛሉ።",
        },
        {
          id: "n2-4",
          title: "Telophase",
          titleAm: "Telophase",
          body:
            "• Chromosomes reach poles\n" +
            "• NUCLEAR ENVELOPE reforms around each set\n" +
            "• Chromosomes DECONDENSE\n" +
            "• Nucleolus reappears\n" +
            "• Spindle breaks down\n" +
            "• THEN cytokinesis — cytoplasm divides → 2 daughter cells.",
          bodyAm:
            "Nuclear envelope ይመለሳል።\n" +
            "Chromosomes ይዘረጋሉ።\n" +
            "ቀጥሎ cytokinesis።",
        },
        {
          id: "n2-5",
          title: "Significance of mitosis",
          titleAm: "የሚቶሲስ ጠቀሜታ",
          body:
            "• GROWTH — adds new cells to body\n" +
            "• REPAIR — replaces damaged cells (wounds, scrapes)\n" +
            "• REPLACEMENT — replaces worn-out cells (skin, blood)\n" +
            "• ASEXUAL reproduction — in some organisms\n" +
            "• MAINTAINS chromosome number — 2n → 2n\n" +
            "• Produces IDENTICAL cells — genetic continuity",
          bodyAm:
            "እድገት፣ ጥገና፣ ምትክ፣ አሴክስዋል፣ 2n→2n።",
        },
        {
          id: "n2-6",
          title: "⚠ Remember trap — Mitosis",
          titleAm: "⚠ አትርሳ — ሚቶሲስ",
          body:
            "• Order: PROPHASE → METAPHASE → ANAPHASE → TELOPHASE (P-M-A-T).\n" +
            "• Metaphase = MIDDLE. Anaphase = APART.\n" +
            "• Sister chromatids separate in ANAPHASE.\n" +
            "• Nuclear envelope breaks in PROPHASE, reforms in TELOPHASE.\n" +
            "• Mitosis produces IDENTICAL cells.\n" +
            "• Mitosis maintains chromosome number (2n → 2n).",
          bodyAm:
            "P-M-A-T።\n" +
            "Metaphase = መሃል።\n" +
            "Anaphase = መለያየት።\n" +
            "2n→2n።",
        },
      ],
    },

    {
      id: "n3",
      title: "4.3 Meiosis",
      titleAm: "4.3 ሜዮሲስ",
      body:
        "Abatu, MEIOSIS produces FOUR haploid gametes (sex cells) from one diploid parent cell. It has TWO successive divisions: Meiosis I and Meiosis II.",
      bodyAm:
        "ሜዮሲስ = 4 haploid ሴሎች። ሁለት ክፍፍሎች።",
      children: [
        {
          id: "n3-1",
          title: "Overview",
          titleAm: "አጠቃላይ እይታ",
          body:
            "• Starts with ONE diploid (2n) cell\n" +
            "• DNA replicates BEFORE meiosis (in S phase)\n" +
            "• TWO successive divisions: Meiosis I + Meiosis II\n" +
            "• Result: 4 haploid (n) daughter cells\n" +
            "• Occurs in GONADS (testes → sperm; ovaries → eggs)\n" +
            "• Produces GENETIC VARIATION",
          bodyAm:
            "2n → 4n (haploid)።\n" +
            "በ gonads (ወንድ/ሴት)።\n" +
            "የዘር ልዩነት።",
        },
        {
          id: "n3-2",
          title: "Meiosis I — Prophase I",
          titleAm: "Meiosis I — Prophase I",
          body:
            "• Chromosomes condense\n" +
            "• HOMOLOGOUS chromosomes pair up (SYNAPSIS) → form a TETRAD (bivalent)\n" +
            "• CROSSING OVER occurs — exchange of segments between homologous chromosomes\n" +
            "• Sites of crossing over = CHIASMATA\n" +
            "• Nuclear envelope breaks down\n" +
            "• Spindle forms\n\n" +
            "KEY: CROSSING OVER = GENETIC RECOMBINATION → genetic variation.",
          bodyAm:
            "Homologous ይጣመራሉ።\n" +
            "Crossing over ይከሰታል።\n" +
            "→ የዘር ልዩነት።",
        },
        {
          id: "n3-3",
          title: "Meiosis I — Metaphase I, Anaphase I, Telophase I",
          titleAm: "Meiosis I — ሌሎቹ ደረጃዎች",
          body:
            "METAPHASE I:\n" +
            "• HOMOLOGOUS pairs (tetrads) line up at the equator\n" +
            "• Random orientation (INDEPENDENT ASSORTMENT)\n\n" +
            "ANAPHASE I:\n" +
            "• HOMOLOGOUS CHROMOSOMES separate (not sister chromatids!)\n" +
            "• Move to opposite poles\n" +
            "• Each pole gets ONE chromosome from each homologous pair\n\n" +
            "TELOPHASE I + Cytokinesis:\n" +
            "• Two haploid cells form\n" +
            "• Each chromosome still has 2 sister chromatids\n" +
            "• Briefly rest before Meiosis II",
          bodyAm:
            "Metaphase I: homologues መሃል።\n" +
            "Anaphase I: homologues ይለያያሉ።\n" +
            "Telophase I: 2 haploid።",
        },
        {
          id: "n3-4",
          title: "Meiosis II — the second division",
          titleAm: "Meiosis II",
          body:
            "Meiosis II is like MITOSIS but with haploid cells.\n\n" +
            "PROPHASE II — chromosomes condense, spindle forms\n" +
            "METAPHASE II — chromosomes line up at equator\n" +
            "ANAPHASE II — SISTER CHROMATIDS separate, move to poles\n" +
            "TELOPHASE II — nuclear envelopes reform, cytoplasm divides\n\n" +
            "RESULT: 4 haploid (n) daughter cells, each GENETICALLY UNIQUE.",
          bodyAm:
            "Meiosis II = ሚቶሲስ አይነት።\n" +
            "Anaphase II: sister chromatids ይለያያሉ።\n" +
            "ውጤት: 4 haploid።",
        },
        {
          id: "n3-5",
          title: "Importance of meiosis",
          titleAm: "የሜዮሲስ ጠቀሜታ",
          body:
            "• Produces GAMETES (sperm, eggs)\n" +
            "• Halves chromosome number (2n → n) → maintains species chromosome number across generations\n" +
            "• Produces GENETIC VARIATION via crossing over and independent assortment\n" +
            "• Variation = survival of species (adaptation, evolution)\n" +
            "• Errors in meiosis → chromosomal abnormalities (e.g., Down syndrome)",
          bodyAm:
            "ጋሜት ማምረት።\n" +
            "Chromosome ቁጥር ማግለል።\n" +
            "የዘር ልዩነት።",
        },
        {
          id: "n3-6",
          title: "⚠ Remember trap — Meiosis",
          titleAm: "⚠ አትርሳ — ሜዮሲስ",
          body:
            "• Meiosis = 2 divisions, 4 haploid cells.\n" +
            "• Crossing over = PROPHASE I.\n" +
            "• Homologous chromosomes separate in ANAPHASE I.\n" +
            "• Sister chromatids separate in ANAPHASE II.\n" +
            "• Haploid = n; Diploid = 2n.\n" +
            "• Meiosis produces genetic variation.\n" +
            "• Meiosis happens in GONADS (testes, ovaries).\n" +
            "• Meiosis maintains chromosome number ACROSS GENERATIONS (not across body cells).",
          bodyAm:
            "2 ክፍፍሎች፣ 4 haploid።\n" +
            "Cross over: Prophase I።\n" +
            "Anaphase I: homologues።\n" +
            "Anaphase II: sister chromatids።",
        },
      ],
    },

    {
      id: "n4",
      title: "4.4 Mitosis vs Meiosis — Full Comparison",
      titleAm: "4.4 ሚቶሲስ እና ሜዮሲስ ሙሉ ንጽጽር",
      body:
        "Abatu, this table is TESTED EVERY YEAR. Memorize it row by row.",
      bodyAm:
        "ይህ ሰንጠረዥ በየዓመቱ ይመጣል።",
      children: [
        {
          id: "n4-1",
          title: "Full comparison table",
          titleAm: "ሙሉ ሰንጠረዥ",
          body:
            "| Feature | Mitosis | Meiosis |\n" +
            "|---------|---------|---------|\n" +
            "| Number of divisions | 1 | 2 |\n" +
            "| Daughter cells | 2 | 4 |\n" +
            "| Chromosome number | 2n → 2n | 2n → n |\n" +
            "| Genetic result | Identical | Genetically varied |\n" +
            "| Crossing over | No | Yes (Prophase I) |\n" +
            "| Homologous pairing | No | Yes (Prophase I) |\n" +
            "| Purpose | Growth, repair, asexual | Gamete production |\n" +
            "| Where | All somatic (body) cells | Gonads |\n" +
            "| Resulting cells | Diploid | Haploid |\n" +
            "| Errors lead to | Cancer (uncontrolled division) | Aneuploidy, Down syndrome |",
          bodyAm:
            "ሚቶሲስ: 1 division, 2 cells, 2n→2n, identical።\n" +
            "ሜዮሲስ: 2 divisions, 4 cells, 2n→n, varied።",
        },
        {
          id: "n4-2",
          title: "Haploid vs Diploid",
          titleAm: "Haploid vs Diploid",
          body:
            "HAPLOID (n):\n" +
            "• ONE set of chromosomes\n" +
            "• Example: human gametes (sperm, egg) have n = 23\n" +
            "• Symbol: n\n" +
            "• Produced by meiosis\n\n" +
            "DIPLOID (2n):\n" +
            "• TWO sets of chromosomes (one from each parent)\n" +
            "• Example: human body cells have 2n = 46 (23 pairs)\n" +
            "• Symbol: 2n\n" +
            "• Produced by mitosis\n\n" +
            "HOMOLOGOUS CHROMOSOMES = a pair (one from each parent) with the SAME genes at the SAME positions.",
          bodyAm:
            "Haploid = n (gametes, 23)።\n" +
            "Diploid = 2n (body, 46)።\n" +
            "Homologous = ጥንድ።",
        },
        {
          id: "n4-3",
          title: "⚠ Remember trap — Comparison",
          titleAm: "⚠ አትርሳ — ንጽጽር",
          body:
            "• Mitosis = 1 division, 2 cells. Meiosis = 2 divisions, 4 cells.\n" +
            "• Mitosis = 2n → 2n. Meiosis = 2n → n.\n" +
            "• Crossing over happens ONLY in meiosis.\n" +
            "• Meiosis produces gametes; mitosis produces body cells.\n" +
            "• Human n = 23; 2n = 46.\n" +
            "• Homologous chromosomes pair in Prophase I of meiosis.",
          bodyAm:
            "ሚቶሲስ: 2n→2n።\n" +
            "ሜዮሲስ: 2n→n።\n" +
            "Crossing over: ሜዮሲስ ብቻ።",
        },
      ],
    },

    {
      id: "n5",
      title: "4.5 Cancer — Uncontrolled Cell Division",
      titleAm: "4.5 ካንሰር — ያልተቆጣጠረ ሴል ክፍፍል",
      body:
        "Abatu, CANCER is UNCONTROLLED cell division. When the cell cycle checkpoints fail, cells divide without stopping.",
      bodyAm:
        "ካንሰር = ያልተቆጣጠረ ክፍፍል።",
      children: [
        {
          id: "n5-1",
          title: "What is cancer?",
          titleAm: "ካንሰር ምንድን ነው?",
          body:
            "• Cancer = UNCONTROLLED cell division\n" +
            "• Caused by MUTATIONS in genes that control the cell cycle\n" +
            "• Cells divide rapidly and ignore normal signals\n" +
            "• Form TUMORS (benign or malignant)\n" +
            "• Malignant tumors can spread (METASTASIS)\n\n" +
            "NOT INFECTIOUS — you cannot catch cancer from someone.\n" +
            "CAUSES: radiation (UV, X-rays), chemicals (tobacco), viruses, inherited mutations, aging.",
          bodyAm:
            "ያልተቆጣጠረ ክፍፍል።\n" +
            "Mutation።\n" +
            "Tumor።\n" +
            "ተላላፊ አይደለም።",
        },
        {
          id: "n5-2",
          title: "Significance of controlled cell division",
          titleAm: "የተቆጣጠረ ክፍፍል ጠቀሜታ",
          body:
            "When cell division IS controlled:\n" +
            "• Normal growth\n" +
            "• Tissue repair\n" +
            "• Replacement of worn-out cells\n\n" +
            "When NOT controlled:\n" +
            "• Tumors form\n" +
            "• Organs malfunction\n" +
            "• Cancer\n\n" +
            "CELL CYCLE CHECKPOINTS (G1, G2, M) normally PREVENT damaged cells from dividing.",
          bodyAm:
            "ተቆጣጠረ = ጤናማ።\n" +
            "ያልተቆጣጠረ = ካንሰር።",
        },
        {
          id: "n5-3",
          title: "⚠ Remember trap — Cancer",
          titleAm: "⚠ አትርሳ — ካንሰር",
          body:
            "• Cancer = UNCONTROLLED cell division.\n" +
            "• Caused by MUTATIONS.\n" +
            "• NOT infectious.\n" +
            "• Forms TUMORS.\n" +
            "• Cell cycle checkpoints fail in cancer.\n" +
            "• Radiation, tobacco, viruses can cause mutations.",
          bodyAm:
            "ያልተቆጣጠረ፣ mutation፣ tumor፣ ተላላፊ አይደለም።",
        },
      ],
    },

    {
      id: "nRef",
      title: "Reference Sheet — Unit 4",
      titleAm: "የማጣቀሻ ሉህ — ክፍል 4",
      body:
        "| Item | Key fact |\n" +
        "|------|----------|\n" +
        "| Cell cycle | Interphase + M phase |\n" +
        "| Interphase stages | G1 → S → G2 |\n" +
        "| DNA replication | S phase |\n" +
        "| Mitosis phases | Prophase, Metaphase, Anaphase, Telophase |\n" +
        "| Metaphase | Chromosomes in MIDDLE |\n" +
        "| Anaphase | Chromatids move APART |\n" +
        "| Mitosis result | 2 identical diploid cells |\n" +
        "| Meiosis result | 4 haploid cells |\n" +
        "| Meiosis I key event | Crossing over (Prophase I) |\n" +
        "| Haploid | n |\n" +
        "| Diploid | 2n |\n" +
        "| Human n | 23 |\n" +
        "| Human 2n | 46 |\n" +
        "| Cancer | Uncontrolled division |\n" +
        "| Melaku Worede | Seed bank, WFP 2013 |\n" +
        "| Gebissa Ejeta | Sorghum, WFP 2009 |",
      bodyAm:
        "ሰንጠረዡን አስታውስ።",
    },

    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 4",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1) Cell cycle = interphase + M phase.\n" +
        "2) DNA replication in S phase.\n" +
        "3) G1 → S → G2 → M (correct order).\n" +
        "4) Mitosis phases: Prophase → Metaphase → Anaphase → Telophase.\n" +
        "5) Metaphase = middle; Anaphase = apart.\n" +
        "6) Cytokinesis = cytoplasm division.\n" +
        "7) Mitosis → 2 identical cells (2n → 2n).\n" +
        "8) Meiosis → 4 varied cells (2n → n).\n" +
        "9) Crossing over happens in PROPHASE I of meiosis.\n" +
        "10) Homologous chromosomes separate in ANAPHASE I.\n" +
        "11) Sister chromatids separate in ANAPHASE II.\n" +
        "12) Haploid = n; diploid = 2n.\n" +
        "13) Human gametes = 23 (n); body cells = 46 (2n).\n" +
        "14) Cancer = uncontrolled division.\n" +
        "15) Cancer is NOT infectious.\n" +
        "16) Melaku Worede = seed bank, WFP 2013.\n" +
        "17) Meiosis produces genetic VARIATION.\n" +
        "18) Mitosis maintains chromosome number.\n" +
        "19) Interphase is LONGEST phase.\n" +
        "20) Cell cycle checkpoints prevent damaged cells from dividing.",
      bodyAm:
        "ወጥመዶቹን ሁሉ አስታውስ።",
    },
  ],

  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "What is the cell cycle?", options: ["Only mitosis", "Interphase + M phase", "Only interphase", "DNA replication only"], answer: "1", explanation: "Cell cycle = interphase + M phase." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Which is the longest stage of the cell cycle?", options: ["Prophase", "Metaphase", "Interphase", "Anaphase"], answer: "2", explanation: "Interphase ~90%." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "DNA replication happens in which phase?", options: ["G1", "S", "G2", "M"], answer: "1", explanation: "S (synthesis) phase." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "The correct order of interphase is:", options: ["S → G1 → G2", "G1 → S → G2", "G2 → G1 → S", "G1 → G2 → S"], answer: "1", explanation: "G1 → S → G2." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "How many cells does mitosis produce?", options: ["1", "2", "4", "8"], answer: "1", explanation: "Mitosis = 2 cells." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "How many cells does meiosis produce?", options: ["1", "2", "4", "8"], answer: "2", explanation: "Meiosis = 4 cells." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "In which phase do chromosomes line up in the middle?", options: ["Prophase", "Metaphase", "Anaphase", "Telophase"], answer: "1", explanation: "Metaphase = middle." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "In which phase do sister chromatids separate?", options: ["Prophase", "Metaphase", "Anaphase", "Telophase"], answer: "2", explanation: "Anaphase = apart." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "In which phase does the nuclear envelope break down?", options: ["Prophase", "Metaphase", "Anaphase", "Telophase"], answer: "0", explanation: "Prophase." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "In which phase do nuclear envelopes reform?", options: ["Prophase", "Metaphase", "Anaphase", "Telophase"], answer: "3", explanation: "Telophase." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Mitosis produces how many daughter cells?", options: ["2 identical", "4 varied", "1", "8"], answer: "0", explanation: "2 identical." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Meiosis produces how many daughter cells?", options: ["2 identical", "4 haploid", "1", "8"], answer: "1", explanation: "4 haploid." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Haploid means:", options: ["Two sets", "One set", "Zero sets", "Three sets"], answer: "1", explanation: "Haploid (n) = one set." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Diploid means:", options: ["Two sets", "One set", "Zero sets", "Three sets"], answer: "0", explanation: "Diploid (2n) = two sets." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Human body cells have how many chromosomes?", options: ["23", "46", "48", "92"], answer: "1", explanation: "2n = 46." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Human gametes have how many chromosomes?", options: ["23", "46", "48", "92"], answer: "0", explanation: "n = 23." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Crossing over happens in which phase?", options: ["Prophase I", "Metaphase I", "Anaphase I", "Telophase I"], answer: "0", explanation: "Prophase I." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Where does meiosis occur?", options: ["Skin", "Brain", "Gonads", "Liver"], answer: "2", explanation: "Gonads (testes, ovaries)." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "Mitosis is important for:", options: ["Gamete production", "Growth and repair", "Creating genetic variation", "Meiosis"], answer: "1", explanation: "Growth + repair." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "Meiosis is important for:", options: ["Growth", "Repair", "Gamete production + variation", "Only repair"], answer: "2", explanation: "Gametes + variation." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Cancer is:", options: ["Normal cell division", "Uncontrolled cell division", "Cell death", "Cell repair"], answer: "1", explanation: "Uncontrolled division." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "Is cancer infectious?", options: ["Yes", "No", "Only in children", "Only in adults"], answer: "1", explanation: "Cancer is NOT infectious." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "Which is NOT a cause of cancer mutations?", options: ["Radiation", "Tobacco", "Some viruses", "Handwashing"], answer: "3", explanation: "Handwashing does not cause mutations." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "Dr. Melaku Worede is known for:", options: ["Sorghum breeding", "Seed bank + plant genetics", "Snail research", "Human physiology"], answer: "1", explanation: "Seed bank, plant genetics." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "Mitosis maintains chromosome number. That means:", options: ["2n → n", "2n → 2n", "n → 2n", "4n → 2n"], answer: "1", explanation: "2n → 2n." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "Meiosis reduces chromosome number. That means:", options: ["2n → n", "2n → 2n", "n → 2n", "4n → 2n"], answer: "0", explanation: "2n → n." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Cytokinesis is:", options: ["Nucleus division", "Cytoplasm division", "DNA replication", "Spindle formation"], answer: "1", explanation: "Cytoplasm division." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Sister chromatids are joined at the:", options: ["Nucleus", "Centromere", "Ribosome", "Golgi"], answer: "1", explanation: "Centromere." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Homologous chromosomes are:", options: ["Identical chromosomes", "A pair (one from each parent)", "Sister chromatids", "Cancer cells"], answer: "1", explanation: "One from each parent." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "The M phase includes:", options: ["Only mitosis", "Only cytokinesis", "Mitosis + cytokinesis", "Only interphase"], answer: "2", explanation: "Mitosis + cytokinesis." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "Cell cycle checkpoints are important because they:", options: ["Stop all division", "Prevent damaged cells from dividing", "Kill cells", "Speed up division"], answer: "1", explanation: "Prevent damaged cells from dividing." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "In cancer, what fails?", options: ["DNA replication", "Cell cycle checkpoints", "Cytokinesis", "Spindle formation"], answer: "1", explanation: "Cell cycle checkpoints fail." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "Which phase has chromosomes condensing?", options: ["Prophase", "Metaphase", "Anaphase", "Telophase"], answer: "0", explanation: "Prophase." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "Which phase follows telophase?", options: ["Prophase", "Metaphase", "Anaphase", "Cytokinesis"], answer: "3", explanation: "Cytokinesis follows telophase." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "Mitosis and meiosis both involve:", options: ["Chromosome movement", "Crossing over", "Reducing chromosome number", "Gamete formation"], answer: "0", explanation: "Both involve chromosome movement." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "Genetic variation is produced mainly by:", options: ["Mitosis", "Meiosis", "Cytokinesis", "Cell cycle"], answer: "1", explanation: "Meiosis (crossing over + independent assortment)." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "A human sperm cell has:", options: ["1n = 23", "2n = 46", "4n = 92", "3n = 69"], answer: "0", explanation: "n = 23." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "Which cell type would undergo mitosis?", options: ["Sperm cell", "Egg cell", "Skin cell", "Zygote only"], answer: "2", explanation: "Skin cells (somatic) use mitosis." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "In which phase do chromosomes reach opposite poles?", options: ["Prophase", "Metaphase", "Anaphase", "Telophase"], answer: "3", explanation: "Telophase." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "Tumors form when:", options: ["Cells stop dividing", "Cells divide without stopping", "DNA repairs", "Cell cycle checkpoints work"], answer: "1", explanation: "Uncontrolled division → tumors." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Which is the correct mitosis phase order?", options: ["Prophase, Anaphase, Metaphase, Telophase", "Prophase, Metaphase, Anaphase, Telophase", "Metaphase, Prophase, Telophase, Anaphase", "Anaphase, Telophase, Prophase, Metaphase"], answer: "1", explanation: "P-M-A-T." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "In Meiosis I anaphase, what separates?", options: ["Sister chromatids", "Homologous chromosomes", "Centromeres", "Nuclei"], answer: "1", explanation: "Homologous chromosomes separate in Anaphase I." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "In Meiosis II anaphase, what separates?", options: ["Homologous chromosomes", "Sister chromatids", "Nuclei", "Spindle"], answer: "1", explanation: "Sister chromatids separate in Anaphase II." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "Which does NOT happen during mitosis?", options: ["Nuclear envelope breaks down", "Chromosomes condense", "Crossing over", "Spindle forms"], answer: "2", explanation: "Crossing over = meiosis only." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "During S phase, each chromosome becomes:", options: ["Two sister chromatids", "Four chromatids", "One chromatid", "Nothing"], answer: "0", explanation: "Two sister chromatids." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "Which describes meiosis I only?", options: ["Homologous pairing", "Sister chromatid separation", "Cytokinesis", "Spindle formation"], answer: "0", explanation: "Homologous pairing in Prophase I." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "Which describes meiosis II?", options: ["Reduction division", "Like mitosis (equational division)", "Creates 2 cells", "Maintains 2n"], answer: "1", explanation: "Meiosis II is like mitosis." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "How many divisions does meiosis require?", options: ["1", "2", "3", "4"], answer: "1", explanation: "Two divisions." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "Meiosis produces gametes with how many chromosome sets?", options: ["One set (n)", "Two sets (2n)", "Three sets (3n)", "Four sets (4n)"], answer: "0", explanation: "One set (n)." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Which is TRUE of MEIOSIS?", options: ["Maintains chromosome number", "Produces variation", "Produces identical cells", "Happens in skin cells"], answer: "1", explanation: "Produces variation." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "The paternal + maternal chromosomes that carry the SAME genes are called:", options: ["Sister chromatids", "Homologous chromosomes", "Centromeres", "Spindles"], answer: "1", explanation: "Homologous chromosomes." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "Which stage of the cell cycle comes FIRST?", options: ["G1", "S", "G2", "M"], answer: "0", explanation: "G1." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "Which stage of interphase is preparation for division?", options: ["G1", "S", "G2", "M"], answer: "2", explanation: "G2 prepares for division." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "Dr. Melaku Worede won the World Food Prize in:", options: ["2009", "2013", "2000", "2020"], answer: "1", explanation: "2013." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "Gebissa Ejeta won the World Food Prize in:", options: ["2009", "2013", "2000", "2020"], answer: "0", explanation: "2009." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "Which Ethiopian founded the seed bank?", options: ["Aklilu Lemma", "Gebissa Ejeta", "Melaku Worede", "Tirfie Abebe"], answer: "2", explanation: "Melaku Worede." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "Crossing over produces:", options: ["Identical chromatids", "Genetic variation", "Cancer", "Fewer chromosomes"], answer: "1", explanation: "Genetic variation." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Which is a key difference between mitosis and meiosis?", options: ["Both produce 2 cells", "Mitosis produces varied cells", "Meiosis halves chromosome number", "Both cross over"], answer: "2", explanation: "Meiosis halves chromosome number." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Sister chromatids are separated in:", options: ["Mitosis and Meiosis II", "Meiosis I only", "Interphase", "G1"], answer: "0", explanation: "Sister chromatids separate in anaphase of mitosis and anaphase II of meiosis." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "The centromere holds together:", options: ["Homologous chromosomes", "Sister chromatids", "Nuclear envelopes", "Spindle fibers"], answer: "1", explanation: "Sister chromatids." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "Somatic cells are:", options: ["Body cells", "Sex cells", "Gametes", "Cancer cells"], answer: "0", explanation: "Body cells." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Gametes are:", options: ["Somatic cells", "Sex cells (sperm, egg)", "Cancer cells", "Red blood cells"], answer: "1", explanation: "Sex cells." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "Which produces genetically IDENTICAL cells?", options: ["Meiosis", "Mitosis", "Both", "Neither"], answer: "1", explanation: "Mitosis produces identical cells." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "Which produces genetically VARIED cells?", options: ["Meiosis", "Mitosis", "Both", "Neither"], answer: "0", explanation: "Meiosis (variation)." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Cancer cells:", options: ["Divide slowly", "Divide without stopping", "Cross over", "Reduce chromosome number"], answer: "1", explanation: "Uncontrolled division." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "Which type of cancer treatment targets rapidly dividing cells?", options: ["Surgery only", "Chemotherapy", "Bacteria", "Alcohol"], answer: "1", explanation: "Chemotherapy targets rapidly dividing cells." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "Which mutation causes cancer?", options: ["In cell cycle control genes", "In skin pigment", "In hair color", "In eye color"], answer: "0", explanation: "Cell cycle control genes." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "Meiosis occurs in which organs?", options: ["Brain, liver", "Testes, ovaries", "Skin, muscle", "Kidney, lung"], answer: "1", explanation: "Testes + ovaries (gonads)." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "Crossing over creates:", options: ["Tumors", "Chiasmata", "Identical cells", "Diploid cells"], answer: "1", explanation: "Chiasmata = crossing over sites." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "Which produces haploid cells?", options: ["Mitosis", "Meiosis", "Both", "Neither"], answer: "1", explanation: "Meiosis produces haploid cells." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Interphase consists of:", options: ["G1, S, G2", "P, M, A, T", "M + Cytokinesis", "Only S"], answer: "0", explanation: "G1, S, G2." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "The stage where the cell CYTOPLASM divides is:", options: ["Mitosis", "Cytokinesis", "Interphase", "Meiosis II"], answer: "1", explanation: "Cytokinesis." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "Chromosomes condense (become visible) in:", options: ["Prophase", "Metaphase", "Anaphase", "Telophase"], answer: "0", explanation: "Prophase." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "During S phase, what is synthesized?", options: ["Proteins", "DNA", "Lipids", "Carbohydrates"], answer: "1", explanation: "DNA." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Which structure forms during prophase?", options: ["Spindle fibers", "Golgi", "Lysosome", "Nucleolus"], answer: "0", explanation: "Spindle fibers." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "The 'M' in M phase stands for:", options: ["Mitosis", "Metaphase", "Membrane", "Microtubule"], answer: "0", explanation: "Mitosis (specifically mitotic phase)." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "Which statement is TRUE?", options: ["Mitosis = sexual reproduction", "Meiosis = growth", "Mitosis = growth", "Mitosis produces gametes"], answer: "2", explanation: "Mitosis = growth." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "A zygote forms from:", options: ["Two somatic cells", "Sperm + egg", "One gamete", "Cancer cell"], answer: "1", explanation: "Sperm + egg." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "If a cell has 8 chromosomes before mitosis, after mitosis each cell has:", options: ["4", "8", "16", "2"], answer: "1", explanation: "Mitosis maintains 8 (2n → 2n)." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "If a cell has 8 chromosomes before meiosis, each gamete has:", options: ["2", "4", "8", "16"], answer: "1", explanation: "Meiosis halves: 8 → 4." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Which produces 4 haploid cells?", options: ["Mitosis", "Meiosis", "Cytokinesis", "G1 phase"], answer: "1", explanation: "Meiosis." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "Which produces 2 diploid cells?", options: ["Mitosis", "Meiosis", "Both", "Neither"], answer: "0", explanation: "Mitosis." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Which phase includes crossing over?", options: ["Mitotic prophase", "Meiosis I prophase", "Anaphase", "Telophase"], answer: "1", explanation: "Crossing over = Prophase I of meiosis." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Which produces gametes?", options: ["Mitosis", "Meiosis", "Interphase", "Cytokinesis"], answer: "1", explanation: "Meiosis." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "In a diploid organism (2n=20), gametes have:", options: ["5", "10", "20", "40"], answer: "1", explanation: "n = 10." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "If cancer occurs, it means:", options: ["Cells die too fast", "Cells divide too slowly", "Cell cycle checkpoints failed", "DNA replication stopped"], answer: "2", explanation: "Checkpoints failed." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "Meiosis I is called:", options: ["Equational division", "Reduction division", "Mitosis-like division", "Cytokinesis"], answer: "1", explanation: "Reduction division (2n → n)." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "Which does NOT contribute to genetic variation?", options: ["Crossing over", "Independent assortment", "Mitosis", "Random fertilization"], answer: "2", explanation: "Mitosis does not create variation." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "Independent assortment occurs in:", options: ["Mitosis metaphase", "Meiosis I metaphase", "Meiosis II metaphase", "Telophase"], answer: "1", explanation: "Metaphase I — random orientation of homologous pairs." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "Which structure is composed of spindle fibers and pulls chromosomes apart?", options: ["Centromere", "Centriole", "Chromatid", "Nucleolus"], answer: "1", explanation: "Centrioles organize spindle fibers." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "In MEIOSIS, DNA replicates:", options: ["Twice (before both divisions)", "Once (before meiosis I)", "After telophase", "Never"], answer: "1", explanation: "DNA replicates ONCE before meiosis I." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "The zygote's chromosome number is:", options: ["n", "2n", "4n", "0"], answer: "1", explanation: "Zygote = 2n (diploid)." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Which of these is NOT a mitotic phase?", options: ["Prophase", "Metaphase", "Cytokinesis", "Anaphase"], answer: "2", explanation: "Cytokinesis is separate from mitosis (but part of M phase)." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "In meiosis I, sister chromatids:", options: ["Separate", "Stay together", "Disappear", "Cross over"], answer: "1", explanation: "Sister chromatids stay together in meiosis I." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "Which is the FIRST phase of meiosis I?", options: ["Prophase I", "Metaphase I", "Anaphase I", "Telophase I"], answer: "0", explanation: "Prophase I." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "If a cell has 4 chromosomes in G1, after S phase it has:", options: ["4 chromosomes (8 chromatids)", "8 chromosomes (4 chromatids)", "2 chromosomes", "16 chromosomes"], answer: "0", explanation: "S phase doubles DNA → 4 chromosomes but each has 2 chromatids (8 total chromatids)." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "Which cell would be haploid?", options: ["Somatic cell", "Skin cell", "Sperm cell", "Liver cell"], answer: "2", explanation: "Sperm = haploid." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "Cell division regulation is important because:", options: ["Uncontrolled division kills cells", "Prevents cancer", "Both A and B", "Neither"], answer: "1", explanation: "Regulation prevents cancer." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "Asexual reproduction in some organisms uses:", options: ["Meiosis", "Mitosis", "Both equally", "Neither"], answer: "1", explanation: "Asexual reproduction uses mitosis." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "A cell with 2n = 12 undergoes meiosis. Result:", options: ["2 cells with 12 each", "4 cells with 6 each", "4 cells with 12 each", "2 cells with 6 each"], answer: "1", explanation: "4 haploid cells with 6 chromosomes each." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "easy", stem: "Define the cell cycle and list its two main stages.", answer: "CELL CYCLE = the series of events a cell goes through from one division to the next.\n\nTWO main stages:\n1) INTERPHASE — cell grows and copies DNA (longest part)\n2) M PHASE (mitotic phase) — cell divides (mitosis + cytokinesis)", explanation: "Interphase + M phase." },
    { id: "q102", type: "short", difficulty: "easy", stem: "List the three stages of interphase and what happens in each.", answer: "1) G1 (Gap 1) — cell grows, makes proteins and organelles\n2) S (Synthesis) — DNA REPLICATION (each chromosome → 2 sister chromatids)\n3) G2 (Gap 2) — further growth, cell prepares for division\n\nOrder: G1 → S → G2", explanation: "G1 → S → G2." },
    { id: "q103", type: "short", difficulty: "easy", stem: "List the four stages of mitosis in order.", answer: "1) PROPHASE — chromosomes condense; nuclear envelope breaks; spindle forms\n2) METAPHASE — chromosomes line up at the equator (middle)\n3) ANAPHASE — sister chromatids separate and move to opposite poles\n4) TELOPHASE — nuclear envelopes reform; chromosomes decondense\n\nFollowed by cytokinesis.", explanation: "P-M-A-T." },
    { id: "q104", type: "short", difficulty: "easy", stem: "What is the significance of mitosis?", answer: "• GROWTH — adds new cells to the body\n• REPAIR — replaces damaged cells (wounds)\n• REPLACEMENT — replaces worn-out cells (skin, blood)\n• ASEXUAL reproduction in some organisms\n• Maintains chromosome number (2n → 2n)\n• Produces genetically IDENTICAL cells", explanation: "Growth, repair, replacement." },
    { id: "q105", type: "short", difficulty: "medium", stem: "What is meiosis? State its main outcome.", answer: "MEIOSIS = a type of cell division that produces FOUR HAPLOID daughter cells from one diploid parent cell.\n\nMain outcome:\n• Two successive divisions (Meiosis I + Meiosis II)\n• Produces gametes (sperm, eggs)\n• Reduces chromosome number 2n → n\n• Produces genetic VARIATION via crossing over and independent assortment", explanation: "4 haploid gametes." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Describe crossing over and its importance.", answer: "CROSSING OVER = the exchange of genetic segments between HOMOLOGOUS CHROMOSOMES during PROPHASE I of meiosis.\n\nHow:\n• Homologous chromosomes pair up (synapsis)\n• Non-sister chromatids break and rejoin at chiasmata\n• Segments are exchanged\n\nIMPORTANCE:\n• Creates GENETIC VARIATION\n• Produces new combinations of genes\n• Important for species adaptation and evolution", explanation: "Crossing over = Prophase I; creates variation." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Compare mitosis and meiosis.", answer: "| Feature | Mitosis | Meiosis |\n|---------|---------|---------|\n| Divisions | 1 | 2 |\n| Daughter cells | 2 | 4 |\n| Chromosome number | 2n → 2n | 2n → n |\n| Genetic result | Identical | Varied |\n| Crossing over | No | Yes (Prophase I) |\n| Purpose | Growth, repair | Gametes |\n| Where | Somatic cells | Gonads |", explanation: "Know at least 4 differences." },
    { id: "q108", type: "short", difficulty: "medium", stem: "Define haploid and diploid. Give human examples.", answer: "HAPLOID (n) = ONE set of chromosomes.\n• Human gametes: n = 23\n• Produced by meiosis\n\nDIPLOID (2n) = TWO sets of chromosomes (one from each parent).\n• Human body cells: 2n = 46 (23 pairs)\n• Produced by mitosis\n\nWhen sperm (n=23) + egg (n=23) fuse → zygote (2n=46).", explanation: "n=23, 2n=46." },
    { id: "q109", type: "short", difficulty: "medium", stem: "What is cancer? What causes it?", answer: "CANCER = UNCONTROLLED cell division.\n\nCauses:\n• MUTATIONS in genes controlling the cell cycle\n• Radiation (UV, X-rays)\n• Chemicals (tobacco smoke)\n• Some viruses\n• Inherited mutations\n• Aging\n\nResult: cells divide without stopping → form tumors.\nNOT INFECTIOUS — cancer cannot be spread from person to person.", explanation: "Uncontrolled division; caused by mutations." },
    { id: "q110", type: "short", difficulty: "medium", stem: "What is the importance of cell division regulation?", answer: "Cell division regulation:\n• Ensures NORMAL growth\n• Allows TISSUE REPAIR\n• Prevents UNCONTROLLED DIVISION (cancer)\n• Maintains correct chromosome number\n• Prevents damaged cells from dividing (via checkpoints)\n\nWithout regulation → cancer.", explanation: "Regulation prevents cancer and maintains order." },
    { id: "q111", type: "short", difficulty: "medium", stem: "Describe Dr. Melaku Worede's contribution.", answer: "Dr. Melaku Worede is an Ethiopian plant geneticist.\n\nContribution:\n• FOUNDED Ethiopia's SEED BANK (Plant Genetic Resources Center)\n• Preserved INDIGENOUS CROP seeds (wheat, teff, barley)\n• Saved Ethiopian farmers' seeds during famine\n\nAward: World Food Prize 2013.", explanation: "Seed bank, WFP 2013." },
    { id: "q112", type: "short", difficulty: "medium", stem: "Describe what happens in Anaphase I vs Anaphase II.", answer: "ANAPHASE I (Meiosis I):\n• HOMOLOGOUS CHROMOSOMES separate\n• Each pole receives ONE chromosome from each pair (each still has 2 chromatids)\n\nANAPHASE II (Meiosis II):\n• SISTER CHROMATIDS separate\n• Each chromatid becomes a separate chromosome\n• Moves to opposite poles\n\nKey difference: I separates HOMOLOGUES; II separates SISTER CHROMATIDS.", explanation: "I = homologues; II = sister chromatids." },
    { id: "q113", type: "short", difficulty: "medium", stem: "Why is meiosis important for maintaining chromosome number across generations?", answer: "Meiosis halves the chromosome number (2n → n) when producing gametes.\n\n• If gametes were 2n, the zygote would be 4n, doubling each generation\n• Meiosis ensures that when sperm (n) + egg (n) fuse → zygote is 2n\n• This MAINTAINS the species chromosome number across generations\n• Also creates variation, helping species adapt", explanation: "Halving keeps species chromosome number constant." },
    { id: "q114", type: "short", difficulty: "hard", stem: "Describe what happens in each phase of Meiosis I.", answer: "PROPHASE I:\n• Chromosomes condense\n• Homologous chromosomes pair (synapsis) → tetrads\n• CROSSING OVER occurs at chiasmata\n• Nuclear envelope breaks, spindle forms\n\nMETAPHASE I:\n• Homologous pairs line up at the equator\n• Random orientation (independent assortment)\n\nANAPHASE I:\n• HOMOLOGOUS chromosomes separate\n• Move to opposite poles\n\nTELOPHASE I:\n• Two haploid cells form\n• Each chromosome has 2 sister chromatids\n• Cytokinesis follows", explanation: "Prophase I → Metaphase I → Anaphase I → Telophase I." },
    { id: "q115", type: "short", difficulty: "hard", stem: "Describe what happens in each phase of Meiosis II.", answer: "PROPHASE II:\n• Chromosomes condense\n• Spindle forms\n\nMETAPHASE II:\n• Chromosomes line up at the equator (like mitosis)\n\nANAPHASE II:\n• SISTER CHROMATIDS separate\n• Move to opposite poles\n\nTELOPHASE II:\n• Nuclear envelopes reform\n• Cytokinesis → 4 haploid cells\n\nRESULT: 4 genetically VARIED haploid cells.", explanation: "Meiosis II is like mitosis in haploid cells." },
    { id: "q116", type: "short", difficulty: "hard", stem: "Explain why sexual reproduction (using meiosis) creates genetic variation.", answer: "Sexual reproduction creates variation through:\n\n1) CROSSING OVER (Prophase I): homologous chromosomes exchange segments → new combinations of genes\n\n2) INDEPENDENT ASSORTMENT (Metaphase I): homologous pairs line up randomly → different combinations of paternal/maternal chromosomes in gametes\n\n3) RANDOM FERTILIZATION: any sperm can fuse with any egg → many possible combinations\n\nIMPORTANCE: variation helps populations survive environmental changes (adaptation, evolution).", explanation: "Crossing over + independent assortment + random fertilization." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Explain the difference between benign and malignant tumors.", answer: "BENIGN TUMORS:\n• Stay in one place (no spread)\n• Grow slowly\n• Usually NOT dangerous\n• Can often be removed surgically\n\nMALIGNANT TUMORS (cancer):\n• Can spread (METASTASIS) via blood/lymph\n• Invade other tissues\n• Grow rapidly\n• Life-threatening\n• Need aggressive treatment (surgery, chemo, radiation)\n\nKEY: malignant = cancer; benign = non-cancerous.", explanation: "Benign = no spread; malignant = spreads." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Why is control of the cell cycle important?", answer: "Control of the cell cycle is important because:\n\n1) NORMAL GROWTH — new cells are added only when needed\n2) TISSUE REPAIR — damaged cells are replaced\n3) PREVENTS CANCER — checkpoints stop damaged cells from dividing\n4) MAINTAINS CHROMOSOME NUMBER — DNA is only replicated once per cycle\n5) AVOIDS MUTATIONS — cells with mutations are repaired or destroyed (apoptosis)\n\nWithout control → tumor formation → cancer.", explanation: "Control prevents cancer and maintains order." },
    { id: "q119", type: "short", difficulty: "hard", stem: "A cell with 2n = 24 undergoes meiosis. How many chromosomes does each gamete have?", answer: "2n = 24 → n = 12\n\nMeiosis halves the chromosome number.\n\nEach gamete has 12 chromosomes (n=12).\n\nMeiosis produces 4 gametes from this cell, each with 12 chromosomes.", explanation: "n = 12." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Compare mitosis and meiosis in terms of genetic variation.", answer: "MITOSIS:\n• Produces GENETICALLY IDENTICAL cells\n• No crossing over\n• No independent assortment\n• Chromosome number is maintained (2n → 2n)\n• Used for growth and repair\n\nMEIOSIS:\n• Produces GENETICALLY VARIED cells\n• CROSSING OVER occurs (Prophase I)\n• INDEPENDENT ASSORTMENT occurs (Metaphase I)\n• Chromosome number is halved (2n → n)\n• Used for gamete formation\n\nMeiosis is a SOURCE of variation; mitosis preserves genetic information.", explanation: "Mitosis = identical; meiosis = varied." },
  ],
};