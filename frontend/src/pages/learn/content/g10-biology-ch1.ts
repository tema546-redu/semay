import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 BIOLOGY — UNIT 1
// SUB-FIELDS OF BIOLOGY
// Source: Grade 10 Biology Student Textbook (pp. 1–16)
// For: Abenezer (Abatu) — Grade 10
// ============================================================

export const g10BiologyCh1: Chapter = {
  id: "ch1",
  number: 1,
  title: "Sub-fields of Biology",
  titleAm: "የባዮሎጂ ንዑስ ዘርፎች",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this is the OPENING unit of Grade 10 Biology. It has THREE big ideas:\n" +
        "1) WHAT biology is and its major branches\n" +
        "2) The RELATIONSHIP between biology and other sciences\n" +
        "3) The HISTORY of biology — Ethiopian and world scientists\n\n" +
        "The WHOLE chapter reduces to these must-know lists:\n" +
        "• Branches of biology (pure vs applied)\n" +
        "• Biology's links to chemistry, physics, math, geography, etc.\n" +
        "• Major historical figures and their discoveries\n" +
        "• Ethiopian biologists and their contributions\n\n" +
        "Mastery rule: MEMORIZE the tables and the names. This unit is heavy on recall.",
      bodyAm:
        "አባቱ፣ ይህ የመጀመሪያው ክፍል ነው። ሦስት ትላልቅ ሃሳቦች አሉት፡\n" +
        "1) ባዮሎጂ ምንድን ነው? ዋና ዋና ዘርፎቹስ?\n" +
        "2) ባዮሎጂ ከሌሎች ሳይንሶች ጋር ያለው ግንኙነት\n" +
        "3) የባዮሎጂ ታሪክ — ኢትዮጵያዊና የዓለም ሳይንቲስቶች",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 — Definitions and branches",
          titleAm: "ደረጃ 1 — ትርጓሜዎችና ዘርፎች",
          body:
            "BIOLOGY = the study of living things (organisms) and their interactions with the environment.\n" +
            "• Comes from Greek: bios = life, logos = study.\n" +
            "• Deals with STRUCTURE, FUNCTION, GROWTH, ORIGIN, EVOLUTION, and DISTRIBUTION of living things.",
          bodyAm:
            "ባዮሎጂ = ሕያዋን ፍጥረታትንና ከአካባቢያቸው ጋር ያላቸውን ግንኙነት የሚያጠና ሳይንስ።\n" +
            "ባዮስ = ሕይወት, ሎጎስ = ጥናት።",
        },
        {
          id: "n0-2",
          title: "Pass 2 — Pure vs applied branches",
          titleAm: "ደረጃ 2 — ንጹህና ተግባራዊ ዘርፎች",
          body:
            "PURE (basic) biology: done for KNOWLEDGE itself — no immediate practical use.\n" +
            "• Example: studying how a new bird species migrates.\n\n" +
            "APPLIED biology: uses biological knowledge for PRACTICAL purposes (medicine, agriculture, industry).\n" +
            "• Example: using genetics to breed drought-resistant wheat.",
          bodyAm:
            "ንጹህ (መሠረታዊ): ለእውቀት ብቻ።\n" +
            "ተግባራዊ: ለተግባራዊ ጥቅም (ሕክምና፣ ግብርና፣ ኢንዱስትሪ)።",
        },
        {
          id: "n0-3",
          title: "Pass 3 — Connections to other sciences",
          titleAm: "ደረጃ 3 — ከሌሎች ሳይንሶች ጋር ግንኙነት",
          body:
            "• CHEMISTRY → explains biomolecules (carbohydrates, proteins, DNA)\n" +
            "• PHYSICS → explains light, sound, heat effects on organisms\n" +
            "• MATHEMATICS → statistics, measuring populations, modeling\n" +
            "• GEOGRAPHY → distribution of organisms, climate effects\n" +
            "• GEOLOGY → fossils, evolution, soil composition",
          bodyAm:
            "ኬሚስትሪ → ባዮሞለኪዩሎችን ያብራራል።\n" +
            "ፊዚክስ → ብርሃን፣ ድምፅ፣ ሙቀት።\n" +
            "ሒሳብ → ስታቲስቲክስ፣ ሞዴል።\n" +
            "ጂኦግራፊ → ስርጭት፣ የአየር ንብረት።\n" +
            "ጂኦሎጂ → ቅሪተ አካል፣ አፈር።",
        },
        {
          id: "n0-4",
          title: "Pass 4 — History of biology",
          titleAm: "ደረጃ 4 — የባዮሎጂ ታሪክ",
          body:
            "World figures to know:\n" +
            "• ARISTOTLE — first to classify animals systematically\n" +
            "• GALEN — early anatomy (medical)\n" +
            "• ANTONIE VAN LEEUWENHOEK — discovered microorganisms (with microscope)\n" +
            "• CARL LINNAEUS — binomial nomenclature (scientific naming)\n" +
            "• CHARLES DARWIN — theory of evolution by natural selection\n" +
            "• GREGOR MENDEL — father of genetics\n" +
            "• LOUIS PASTEUR — germ theory, pasteurization\n" +
            "• ROBERT KOCH — identified bacteria causing TB, cholera\n" +
            "• JANE GOODALL — chimpanzee behavior\n" +
            "• BARBARA McCLINTOCK — jumping genes (transposons)\n" +
            "• WATSON & CRICK — DNA double helix structure\n" +
            "• WILMUT & CAMPBELL — first cloned mammal (Dolly the sheep)",
          bodyAm:
            "የዓለም ስመጣጥ ሰዎች፡\n" +
            "አርስቶትል — ምድብ አደራጅ\n" +
            "ሊኒየስ — የሳይንሳዊ ስም አሰጣጥ\n" +
            "ዳርዊን — ዝግመተ ለውጥ\n" +
            "ሜንደል — የዘር ውርስ አባት\n" +
            "ፓስቴር — ጀርም ቲዎሪ\n" +
            "ኮች — ቲቢ፣ ኮሌራ ተህዋስ\n" +
            "ዋትሰንና ክሪክ — DNA\n" +
            "ዊልሙትና ካምቤል — ዶሊ በግ",
        },
        {
          id: "n0-5",
          title: "Pass 5 — Ethiopian biologists",
          titleAm: "ደረጃ 5 — ኢትዮጵያዊ ባዮሎጂስቶች",
          body:
            "• Dr. AKLILU LEMMA — plant geneticist; collected/studied Ethiopian crops; co-discovered the cause of Vicia faba (faba bean) disease\n" +
            "• Prof. YALEMTSEHAY MEKONNEN — human physiology\n" +
            "• Prof. GEBISSA EJETA — sorghum breeder; developed drought-tolerant sorghum (World Food Prize 2009)\n" +
            "• Dr. MELAKU WOREDE — plant genetic resources; established Ethiopian seed bank (World Food Prize 2013)\n" +
            "• Dr. TIRFIE ABEBE — renowned Ethiopian botanist (fig trees)",
          bodyAm:
            "ዶ/ር አክሊሉ ለማ — የእፅዋት ጀነቲክስ።\n" +
            "ፕ/ር ያለምጼሃይ መኮንን — ሰው ፊዚዮሎጂ።\n" +
            "ፕ/ር ገቢሳ ኤጀታ — ማሽላ ተመራማሪ።\n" +
            "ዶ/ር መላኩ ወረደ — የዘር ባንክ።\n" +
            "ዶ/ር ጥርፊ አበበ — የእፅዋት ተመራማሪ።",
        },
        {
          id: "n0-6",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Know the DEFINITION of biology and its Greek origin.\n" +
            "• Distinguish PURE from APPLIED branches — exams love this.\n" +
            "• Know which scientist is famous for WHAT.\n" +
            "• Know Ethiopian biologists — this appears on national exams.\n" +
            "• Know the types of discoveries (theoretical vs applied).",
          bodyAm:
            "• የባዮሎጂ ትርጓሜ አወቅ።\n" +
            "• ንጹህና ተግባራዊ ለዩ።\n" +
            "• እያንዳንዱ ሳይንቲስት በምን እንደታወቀ አወቅ።\n" +
            "• ኢትዮጵያዊ ባዮሎጂስቶች አወቅ።",
        },
      ],
    },

    // ============================================================
    // 1.1 WHAT IS BIOLOGY?
    // ============================================================
    {
      id: "n1",
      title: "1.1 What is Biology?",
      titleAm: "1.1 ባዮሎጂ ምንድን ነው?",
      body:
        "Abatu, BIOLOGY is the branch of science that studies LIVING ORGANISMS — their structure, function, growth, origin, evolution, and distribution.",
      bodyAm:
        "ባዮሎጂ ሕያዋን ፍጥረታትን የሚያጠና ሳይንስ ነው።",
      children: [
        {
          id: "n1-1",
          title: "Definition and origin",
          titleAm: "ትርጓሜና ምንጭ",
          body:
            "BIOLOGY (from Greek):\n" +
            "• bios = LIFE\n" +
            "• logos = STUDY / KNOWLEDGE\n\n" +
            "So biology = the study of life.\n\n" +
            "It examines:\n" +
            "• What living things are made of (STRUCTURE)\n" +
            "• How they work (FUNCTION)\n" +
            "• How they grow and develop (GROWTH)\n" +
            "• Where they come from (ORIGIN)\n" +
            "• How they change over time (EVOLUTION)\n" +
            "• Where they live (DISTRIBUTION)",
          bodyAm:
            "ባዮስ = ሕይወት, ሎጎስ = ጥናት።\n" +
            "ባዮሎጂ ስለ ሕይወት ጥናት ነው።",
        },
        {
          id: "n1-2",
          title: "Characteristics of living things",
          titleAm: "የሕያዋን ባህሪያት",
          body:
            "All living things share these characteristics (MRS GREN):\n" +
            "• M — MOVEMENT (internal or external)\n" +
            "• R — RESPIRATION (release energy from food)\n" +
            "• S — SENSITIVITY (respond to stimuli)\n" +
            "• G — GROWTH (increase in size/mass)\n" +
            "• R — REPRODUCTION (produce offspring)\n" +
            "• E — EXCRETION (remove waste)\n" +
            "• N — NUTRITION (obtain food/energy)",
          bodyAm:
            "MRS GREN፡\n" +
            "M — እንቅስቃሴ\n" +
            "R — መተንፈስ\n" +
            "S — ስሜት\n" +
            "G — እድገት\n" +
            "R — መራባት\n" +
            "E — መጣል\n" +
            "N — ምግብ",
        },
        {
          id: "n1-3",
          title: "Branches of biology — PURE",
          titleAm: "የባዮሎጂ ዘርፎች — ንጹህ",
          body:
            "PURE branches (study for knowledge itself):\n" +
            "• ZOOLOGY — animals\n" +
            "• BOTANY — plants\n" +
            "• MICROBIOLOGY — microorganisms (bacteria, viruses, fungi)\n" +
            "• GENETICS — inheritance\n" +
            "• ECOLOGY — organisms and environment\n" +
            "• PHYSIOLOGY — functions of body parts\n" +
            "• ANATOMY — structure of body parts\n" +
            "• TAXONOMY — classification\n" +
            "• EMBRYOLOGY — development of embryos\n" +
            "• HISTOLOGY — tissues\n" +
            "• CYTOLOGY — cells\n" +
            "• PALAEONTOLOGY — fossils",
          bodyAm:
            "ንጹህ ዘርፎች፡\n" +
            "ዞኦሎጂ — እንስሳት\n" +
            "ቦታኒ — እፅዋት\n" +
            "ማይክሮባዮሎጂ — ተህዋስ\n" +
            "ጀነቲክስ — ውርስ\n" +
            "ኢኮሎጂ — ሥነ ምህዳር\n" +
            "ፊዚዮሎጂ — ተግባር\n" +
            "አናቶሚ — አወቃቀር\n" +
            "ታክሶኖሚ — ምድብ\n" +
            "ኢምብሪዮሎጂ — አርብሮ\n" +
            "ሂስቶሎጂ — ቲሹ\n" +
            "ሳይቶሎጂ — ሴል\n" +
            "ፓሊዮንቶሎጂ — ቅሪተ አካል",
        },
        {
          id: "n1-4",
          title: "Branches of biology — APPLIED",
          titleAm: "የባዮሎጂ ዘርፎች — ተግባራዊ",
          body:
            "APPLIED branches (use biological knowledge for practical purposes):\n" +
            "• MEDICINE — treat diseases\n" +
            "• AGRICULTURE — crop and animal production\n" +
            "• BIOTECHNOLOGY — use organisms to make products\n" +
            "• PHARMACOLOGY — drug study\n" +
            "• VETERINARY SCIENCE — animal health\n" +
            "• FORESTRY — forest management\n" +
            "• FISHERIES — fish production\n" +
            "• HORTICULTURE — garden plants\n" +
            "• DENTISTRY — teeth\n" +
            "• PUBLIC HEALTH — community health",
          bodyAm:
            "ተግባራዊ ዘርፎች፡\n" +
            "ሕክምና፣ ግብርና፣ ባዮቴክኖሎጂ፣ ፋርማኮሎጂ፣ የእንስሳት ሕክምና፣ ደን፣ ዓሣ፣ ሆርቲካልቸር፣ የጥርስ ሕክምና፣ ሕዝብ ጤና።",
        },
        {
          id: "n1-5",
          title: "⚠ Remember trap — Branches",
          titleAm: "⚠ አትርሳ — ዘርፎች",
          body:
            "• ZOOLOGY = animals; BOTANY = plants.\n" +
            "• MICROBIOLOGY = tiny organisms; CYTOLOGY = cells.\n" +
            "• GENETICS = inheritance; TAXONOMY = classification.\n" +
            "• PURE = knowledge; APPLIED = practical use.\n" +
            "• MEDICINE is APPLIED, not pure.\n" +
            "• ECOLOGY studies organisms + environment together.",
          bodyAm:
            "ዞኦሎጂ = እንስሳት, ቦታኒ = እፅዋት።\n" +
            "ማይክሮባዮሎጂ = ተህዋስ, ሳይቶሎጂ = ሴል።\n" +
            "ጀነቲክስ = ውርስ, ታክሶኖሚ = ምድብ።\n" +
            "ንጹህ = እውቀት; ተግባራዊ = ጥቅም።",
        },
      ],
    },

    // ============================================================
    // 1.2 BIOLOGY AND OTHER SCIENCES
    // ============================================================
    {
      id: "n2",
      title: "1.2 Biology and Other Sciences",
      titleAm: "1.2 ባዮሎጂና ሌሎች ሳይንሶች",
      body:
        "Abatu, biology does NOT stand alone. It borrows methods and knowledge from other sciences and gives knowledge back to them.",
      bodyAm:
        "ባዮሎጂ ብቻውን አይደለም — ከሌሎች ሳይንሶች ይወስዳል፣ ይሰጣል።",
      children: [
        {
          id: "n2-1",
          title: "Biology & Chemistry",
          titleAm: "ባዮሎጂና ኬሚስትሪ",
          body:
            "CHEMISTRY explains:\n" +
            "• Structure of biomolecules (carbohydrates, lipids, proteins, nucleic acids)\n" +
            "• Chemical reactions in cells (metabolism)\n" +
            "• How enzymes work\n" +
            "• How medicines work in the body\n" +
            "• Blood chemistry (pH, ions)\n" +
            "• Photosynthesis and respiration reactions",
          bodyAm:
            "ኬሚስትሪ ያብራራል፡\n" +
            "• ባዮሞለኪዩሎች\n" +
            "• የሴል ኬሚካላዊ ምላሾች\n" +
            "• ኢንዛይሞች\n" +
            "• መድኃኒቶች\n" +
            "• ደም ኬሚስትሪ\n" +
            "• ፎቶሲንተሲስ",
        },
        {
          id: "n2-2",
          title: "Biology & Physics",
          titleAm: "ባዮሎጂና ፊዚክስ",
          body:
            "PHYSICS explains:\n" +
            "• How light is used in photosynthesis / vision\n" +
            "• How sound is used in animal communication\n" +
            "• Heat regulation in organisms\n" +
            "• Pressure (blood pressure, plant water transport)\n" +
            "• Movement and forces (muscles, bones, flight)\n" +
            "• Microscopes, X-rays, MRI — diagnostic tools",
          bodyAm:
            "ፊዚክስ ያብራራል፡\n" +
            "• ብርሃን (ፎቶሲንተሲስ፣ ራዕይ)\n" +
            "• ድምፅ\n" +
            "• ሙቀት\n" +
            "• ግፊት\n" +
            "• እንቅስቃሴ\n" +
            "• መሣሪያዎች",
        },
        {
          id: "n2-3",
          title: "Biology & Mathematics",
          titleAm: "ባዮሎጂና ሒሳብ",
          body:
            "MATHEMATICS helps biology with:\n" +
            "• Counting and measuring populations\n" +
            "• Statistical analysis (e.g., is a result significant?)\n" +
            "• Modeling (e.g., disease spread, population growth)\n" +
            "• Ratios (e.g., surface-area-to-volume ratio)\n" +
            "• Data in genetics (Mendel's ratios 3:1, 9:3:3:1)",
          bodyAm:
            "ሒሳብ ይረዳል፡\n" +
            "• ሕዝብ ቆጠራ\n" +
            "• ስታቲስቲክስ\n" +
            "• ሞዴል\n" +
            "• ሬሾ\n" +
            "• የጀነቲክስ ሬሾ",
        },
        {
          id: "n2-4",
          title: "Biology & Geography / Geology",
          titleAm: "ባዮሎጂና ጂኦግራፊ/ጂኦሎጂ",
          body:
            "GEOGRAPHY helps biology:\n" +
            "• Distribution of organisms across the world\n" +
            "• Climate effects on organisms\n" +
            "• Biomes (tropical, desert, temperate)\n\n" +
            "GEOLOGY helps biology:\n" +
            "• Fossils → evolution evidence\n" +
            "• Soil composition → plant growth\n" +
            "• Rock layers → dating organisms",
          bodyAm:
            "ጂኦግራፊ → ስርጭት፣ የአየር ንብረት፣ ባዮም።\n" +
            "ጂኦሎጂ → ቅሪተ አካል፣ አፈር።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap — Interdisciplinary",
          titleAm: "⚠ አትርሳ — የጋራ ሳይንስ",
          body:
            "• CHEMISTRY explains the molecules of life.\n" +
            "• PHYSICS explains the forces, light, heat effects.\n" +
            "• MATH explains populations and ratios.\n" +
            "• GEOGRAPHY explains distribution (where organisms live).\n" +
            "• GEOLOGY explains fossils and evolution.\n" +
            "• Do NOT say biology is unrelated to other sciences — it uses ALL of them.",
          bodyAm:
            "ኬሚስትሪ = ሞለኪዩሎች።\n" +
            "ፊዚክስ = ኃይል፣ ብርሃን፣ ሙቀት።\n" +
            "ሒሳብ = ሕዝብ፣ ሬሾ።\n" +
            "ጂኦግራፊ = ስርጭት።\n" +
            "ጂኦሎጂ = ቅሪተ አካል።",
        },
      ],
    },

    // ============================================================
    // 1.3 HISTORY OF BIOLOGY
    // ============================================================
    {
      id: "n3",
      title: "1.3 History of Biology",
      titleAm: "1.3 የባዮሎጂ ታሪክ",
      body:
        "Abatu, this section is names + discoveries. It is HEAVILY tested on the national exam.",
      bodyAm:
        "ይህ ክፍል ስሞች + ግኝቶች ነው። በፈተና ብዙ ይመጣል።",
      children: [
        {
          id: "n3-1",
          title: "Early world figures",
          titleAm: "የመጀመሪያዎቹ የዓለም ሰዎች",
          body:
            "• ARISTOTLE (384–322 BCE) — Greek philosopher; classified animals by habitat (land, water, air); first systematic classification\n" +
            "• GALEN (129–216 CE) — Greek physician; anatomy based on animal dissections; his ideas dominated medicine for 1300+ years\n" +
            "• ANTONIE VAN LEEUWENHOEK (1632–1723) — Dutch; built powerful microscopes; first saw bacteria and protozoa (called them 'animalcules')",
          bodyAm:
            "አርስቶትል — እንስሳትን በምድብ አደራጀ።\n" +
            "ጋለን — አናቶሚ።\n" +
            "ሌውዌንሁክ — ማይክሮስኮፕ፤ ባክቴሪያ አየ።",
        },
        {
          id: "n3-2",
          title: "Classification and naming",
          titleAm: "ምድብና ስም",
          body:
            "• CARL LINNAEUS (1707–1778) — Swedish; created BINOMIAL NOMENCLATURE (two-part Latin names: Genus species); e.g., Homo sapiens, Panthera leo\n" +
            "• His classification system is the basis of modern taxonomy\n" +
            "• Classified organisms into Kingdom → Phylum → Class → Order → Family → Genus → Species",
          bodyAm:
            "ሊኒየስ — ሁለት ክፍል ሳይንሳዊ ስም (ጂነስ + ስፔሺስ)።\n" +
            "ዘመናዊ ታክሶኖሚ መሠረት።",
        },
        {
          id: "n3-3",
          title: "Evolution and genetics",
          titleAm: "ዝግመተ ለውጥና የዘር ውርስ",
          body:
            "• CHARLES DARWIN (1809–1882) — British naturalist; proposed EVOLUTION BY NATURAL SELECTION; wrote 'On the Origin of Species' (1859)\n" +
            "• GREGOR MENDEL (1822–1884) — Austrian monk; father of GENETICS; discovered laws of inheritance using pea plants\n" +
            "• WATSON & CRICK (1953) — discovered DNA double-helix structure\n" +
            "• BARBARA McCLINTOCK — discovered transposons ('jumping genes') in maize",
          bodyAm:
            "ዳርዊን — ዝግመተ ለውጥ በተፈጥሮ ምርጫ።\n" +
            "ሜንደል — የዘር ውርስ ሕግ።\n" +
            "ዋትሰንና ክሪክ — DNA መዋቅር።\n" +
            "ማክሊንቶክ — ተንቀሳቃሽ ጂኖች።",
        },
        {
          id: "n3-4",
          title: "Medicine and microbiology",
          titleAm: "ሕክምናና ማይክሮባዮሎጂ",
          body:
            "• LOUIS PASTEUR (1822–1895) — French; proved microorganisms cause disease (germ theory); developed pasteurization; created rabies vaccine\n" +
            "• ROBERT KOCH (1843–1910) — German; identified bacteria causing tuberculosis (TB), cholera, anthrax; Koch's postulates\n" +
            "• ALEXANDER FLEMING — discovered penicillin (first antibiotic)",
          bodyAm:
            "ፓስቴር — ጀርም ቲዎሪ፣ ፓስቴሪዜሽን፣ የእብድ ውሻ ክትባት።\n" +
            "ኮች — ቲቢ፣ ኮሌራ፣ አንትራክስ።\n" +
            "ፍሌሚንግ — ፔኒሲሊን።",
        },
        {
          id: "n3-5",
          title: "Modern biology & cloning",
          titleAm: "ዘመናዊ ባዮሎጂና ክሎኒንግ",
          body:
            "• JANE GOODALL — studied chimpanzees in Tanzania for decades; discovered tool use in chimps\n" +
            "• IAN WILMUT & KEITH CAMPBELL — created DOLLY the sheep (1996), first cloned mammal from adult cell\n" +
            "• Modern biology now includes genomics, bioinformatics, synthetic biology",
          bodyAm:
            "ጄን ጉዳል — ቺምፓንዚ ጥናት።\n" +
            "ዊልሙትና ካምቤል — ዶሊ በግ (ክሎን)።\n" +
            "ዘመናዊ ባዮሎጂ — ጂኖሚክስ፣ ባዮኢንፎርማቲክስ።",
        },
        {
          id: "n3-6",
          title: "⚠ Remember trap — History",
          titleAm: "⚠ አትርሳ — ታሪክ",
          body:
            "• ARISTOTLE = classification by habitat (first).\n" +
            "• LINNAEUS = binomial nomenclature (two names).\n" +
            "• DARWIN = evolution by natural selection.\n" +
            "• MENDEL = genetics (pea plants).\n" +
            "• PASTEUR = germ theory + pasteurization.\n" +
            "• KOCH = TB, cholera bacteria.\n" +
            "• WATSON & CRICK = DNA structure.\n" +
            "• McCLINTOCK = jumping genes.\n" +
            "• WILMUT & CAMPBELL = Dolly the sheep.\n" +
            "• LEEUWENHOEK = first saw microorganisms.",
          bodyAm:
            "አርስቶትል = ምድብ።\n" +
            "ሊኒየስ = ሁለት ስም።\n" +
            "ዳርዊን = ዝግመተ ለውጥ።\n" +
            "ሜንደል = ውርስ።\n" +
            "ፓስቴር = ጀርም።\n" +
            "ኮች = ቲቢ።\n" +
            "ዋትሰንና ክሪክ = DNA።\n" +
            "ማክሊንቶክ = ጂኖች።\n" +
            "ዊልሙት = ዶሊ።",
        },
      ],
    },

    // ============================================================
    // 1.4 ETHIOPIAN BIOLOGISTS
    // ============================================================
    {
      id: "n4",
      title: "1.4 Ethiopian Biologists and Their Contributions",
      titleAm: "1.4 ኢትዮጵያዊ ባዮሎጂስቶችና አስተዋጽኦአቸው",
      body:
        "Abatu, this is a UNIQUE section. National exams ask about these Ethiopian scientists. Know their names, fields, and contributions.",
      bodyAm:
        "ይህ ልዩ ክፍል ነው። ብሔራዊ ፈተና ስለእነዚህ ይጠይቃል።",
      children: [
        {
          id: "n4-1",
          title: "Dr. Aklilu Lemma",
          titleAm: "ዶ/ር አክሊሉ ለማ",
          body:
            "• Ethiopian biologist (plant genetics / parasitology)\n" +
            "• Discovered that the berries of the ENDOD plant (Phytolacca dodecandra) kill SNAILS that carry schistosomiasis (bilharzia)\n" +
            "• This gave a natural, cheap way to control the disease\n" +
            "• Worked at Haile Selassie I University (now Addis Ababa University)\n" +
            "• Also studied faba bean diseases",
          bodyAm:
            "• ኢትዮጵያዊ ባዮሎጂስት\n" +
            "• እንዶድ (Phytolacca dodecandra) ቅጠል ቢልሃርዚያ ተሸካሚ ቀንድ አውጣዎችን እንደሚገድል አገኘ\n" +
            "• ተፈጥሯዊ መድኃኒት",
        },
        {
          id: "n4-2",
          title: "Prof. Yalemtsehay Mekonnen",
          titleAm: "ፕ/ር ያለምጼሃይ መኮንን",
          body:
            "• Ethiopian female biologist\n" +
            "• Specialized in HUMAN PHYSIOLOGY\n" +
            "• Studied effects of medicinal plants on human health\n" +
            "• Professor at Addis Ababa University\n" +
            "• Contributed to understanding traditional medicine",
          bodyAm:
            "• ኢትዮጵያዊት ሴት ባዮሎጂስት\n" +
            "• በሰው ፊዚዮሎጂ\n" +
            "• የባህላዊ መድኃኒቶች ተጽዕኖ አጠናች",
        },
        {
          id: "n4-3",
          title: "Prof. Gebissa Ejeta",
          titleAm: "ፕ/ር ገቢሳ ኤጀታ",
          body:
            "• Ethiopian plant breeder (sorghum expert)\n" +
            "• Developed DROUGHT-TOLERANT and STRIGA-RESISTANT SORGHUM\n" +
            "• This helped millions of farmers in Africa\n" +
            "• Won the WORLD FOOD PRIZE in 2009\n" +
            "• Worked at Purdue University, USA",
          bodyAm:
            "• የማሽላ ተመራማሪ\n" +
            "• ድርቅን የሚቋቋም ማሽላ ፈጠረ\n" +
            "• የዓለም ምግብ ሽልማት 2009 አገኘ",
        },
        {
          id: "n4-4",
          title: "Dr. Melaku Werede",
          titleAm: "ዶ/ር መላኩ ወረደ",
          body:
            "• Ethiopian plant geneticist\n" +
            "• Founded Ethiopia's SEED BANK (Plant Genetic Resources Center)\n" +
            "• Preserved indigenous crop varieties (wheat, teff, barley)\n" +
            "• Won the RIGHT LIVELIHOOD AWARD (1989) and WORLD FOOD PRIZE (2013)\n" +
            "• Saved Ethiopian farmers' seeds during famine",
          bodyAm:
            "• የእፅዋት ጀነቲክስ\n" +
            "• የኢትዮጵያ የዘር ባንክ መሥራች\n" +
            "• የአገር በቀል ሰብሎችን አስቀመጠ\n" +
            "• የዓለም ምግብ ሽልማት 2013",
        },
        {
          id: "n4-5",
          title: "Dr. Tirfie Abebe",
          titleAm: "ዶ/ር ጥርፊ አበበ",
          body:
            "• Ethiopian botanist\n" +
            "• Leading expert on Ethiopian FIG trees (Ficus species)\n" +
            "• Discovered many new fig species\n" +
            "• Professor of botany, Addis Ababa University\n" +
            "• Contributed to Ethiopian flora documentation",
          bodyAm:
            "• ኢትዮጵያዊ ቦታኒስት\n" +
            "• የኢትዮጵያ በለስ ዛፎች ባለሙያ\n" +
            "• አዳዲስ ዝርያዎችን አገኘ",
        },
        {
          id: "n4-6",
          title: "⚠ Remember trap — Ethiopian scientists",
          titleAm: "⚠ አትርሳ — ኢትዮጵያዊ ሳይንቲስቶች",
          body:
            "• AKLILU LEMMA = ENDOD plant kills snails (schistosomiasis control).\n" +
            "• GEBISSA EJETA = drought-resistant SORGHUM (World Food Prize 2009).\n" +
            "• MELAKU WEREDE = SEED BANK / plant genetic resources (World Food Prize 2013).\n" +
            "• YALEMTSEHAY MEKONNEN = human physiology / medicinal plants.\n" +
            "• TIRFIE ABEBE = FIG trees (botany).\n" +
            "• Do NOT confuse Gebissa (sorghum) with Melaku (seed bank).",
          bodyAm:
            "አክሊሉ = እንዶድ።\n" +
            "ገቢሳ = ማሽላ።\n" +
            "መላኩ = የዘር ባንክ።\n" +
            "ያለምጼሃይ = ፊዚዮሎጂ።\n" +
            "ጥርፊ = በለስ።",
        },
      ],
    },

    // ============================================================
    // FORMULA / REFERENCE SHEET
    // ============================================================
    {
      id: "nRef",
      title: "Reference Sheet — Unit 1",
      titleAm: "የማጣቀሻ ሉህ — ክፍል 1",
      body:
        "| Item | Key fact |\n" +
        "|------|----------|\n" +
        "| Biology | Study of living things (bios = life, logos = study) |\n" +
        "| Pure biology | Study for knowledge |\n" +
        "| Applied biology | Study for practical use |\n" +
        "| Zoology | Animals |\n" +
        "| Botany | Plants |\n" +
        "| Microbiology | Microorganisms |\n" +
        "| Genetics | Inheritance |\n" +
        "| Ecology | Organisms + environment |\n" +
        "| Taxonomy | Classification |\n" +
        "| Cytology | Cells |\n" +
        "| Histology | Tissues |\n" +
        "| Embryology | Embryo development |\n" +
        "| Palaeontology | Fossils |\n" +
        "| Aristotle | First systematic classification |\n" +
        "| Linnaeus | Binomial nomenclature |\n" +
        "| Darwin | Evolution by natural selection |\n" +
        "| Mendel | Father of genetics (peas) |\n" +
        "| Pasteur | Germ theory / pasteurization |\n" +
        "| Koch | TB / cholera bacteria |\n" +
        "| Leeuwenhoek | First saw microorganisms |\n" +
        "| Watson & Crick | DNA double helix |\n" +
        "| McClintock | Jumping genes |\n" +
        "| Wilmut & Campbell | Dolly the sheep (clone) |\n" +
        "| Aklilu Lemma | Endod kills snails |\n" +
        "| Gebissa Ejeta | Drought-resistant sorghum (World Food Prize 2009) |\n" +
        "| Melaku Werede | Seed bank (World Food Prize 2013) |\n" +
        "| Yalemtsehay Mekonnen | Human physiology |\n" +
        "| Tirfie Abebe | Fig trees |",
      bodyAm:
        "የማጣቀሻ ሰንጠረዡን አስታውስ።",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 1",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1) Biology = study of LIVING things (not non-living).\n" +
        "2) Pure ≠ applied. Medicine is applied.\n" +
        "3) Zoology = animals; Botany = plants.\n" +
        "4) Microbiology = microorganisms; Cytology = cells.\n" +
        "5) Genetics = inheritance; Taxonomy = classification.\n" +
        "6) Aristotle = first classification; Linnaeus = naming system.\n" +
        "7) Darwin = evolution; Mendel = genetics.\n" +
        "8) Pasteur = germ theory; Koch = specific bacteria.\n" +
        "9) Leeuwenhoek = first microscope observations of microbes.\n" +
        "10) Watson & Crick = DNA structure (not discovery of DNA itself).\n" +
        "11) McClintock = jumping genes (maize).\n" +
        "12) Dolly = first cloned mammal (Wilmut & Campbell).\n" +
        "13) Aklilu Lemma = Endod (schistosomiasis snails).\n" +
        "14) Gebissa Ejeta = sorghum; Melaku Werede = seed bank.\n" +
        "15) Yalemtsehay Mekonnen = human physiology.\n" +
        "16) Tirfie Abebe = fig trees (botany).\n" +
        "17) Chemistry explains biomolecules; physics explains light/heat.\n" +
        "18) Geography explains distribution; geology explains fossils.\n" +
        "19) MRS GREN = characteristics of living things.\n" +
        "20) Endod is a PLANT (Phytolacca dodecandra).",
      bodyAm:
        "ወጥመዶቹን ሁሉ አስታውስ።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "What is biology?", options: ["Study of non-living things", "Study of living things", "Study of rocks", "Study of stars"], answer: "1", explanation: "Biology = study of living organisms." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "The word 'biology' comes from which language?", options: ["Latin", "Greek", "Arabic", "Amharic"], answer: "1", explanation: "Greek: bios (life) + logos (study)." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "What does 'bios' mean?", options: ["Study", "Life", "Earth", "Animal"], answer: "1", explanation: "bios = life." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "What does 'logos' mean?", options: ["Life", "Study/knowledge", "Plant", "Rock"], answer: "1", explanation: "logos = study/knowledge." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "The study of animals is called:", options: ["Botany", "Zoology", "Ecology", "Genetics"], answer: "1", explanation: "Zoology = animals." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "The study of plants is called:", options: ["Zoology", "Botany", "Microbiology", "Anatomy"], answer: "1", explanation: "Botany = plants." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "The study of microorganisms is called:", options: ["Botany", "Zoology", "Microbiology", "Genetics"], answer: "2", explanation: "Microbiology = microorganisms." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The study of inheritance is called:", options: ["Genetics", "Ecology", "Botany", "Zoology"], answer: "0", explanation: "Genetics = inheritance." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "The study of organisms and their environment is called:", options: ["Anatomy", "Ecology", "Genetics", "Botany"], answer: "1", explanation: "Ecology = organisms + environment." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "The study of cells is called:", options: ["Cytology", "Histology", "Taxonomy", "Ecology"], answer: "0", explanation: "Cytology = cells." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The study of tissues is called:", options: ["Cytology", "Histology", "Anatomy", "Genetics"], answer: "1", explanation: "Histology = tissues." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "The study of body structure is called:", options: ["Anatomy", "Physiology", "Genetics", "Ecology"], answer: "0", explanation: "Anatomy = structure." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "The study of body function is called:", options: ["Anatomy", "Physiology", "Taxonomy", "Botany"], answer: "1", explanation: "Physiology = function." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "The study of classification is called:", options: ["Taxonomy", "Ecology", "Genetics", "Cytology"], answer: "0", explanation: "Taxonomy = classification." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Which is a PURE branch of biology?", options: ["Medicine", "Agriculture", "Zoology", "Biotechnology"], answer: "2", explanation: "Zoology = pure (knowledge). Medicine/agriculture = applied." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Which is an APPLIED branch of biology?", options: ["Botany", "Genetics", "Medicine", "Ecology"], answer: "2", explanation: "Medicine = practical use." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "PURE biology is done for:", options: ["Profit", "Knowledge itself", "Medicine", "Farming"], answer: "1", explanation: "Pure = knowledge." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "APPLIED biology is done for:", options: ["Curiosity only", "Practical use", "Classification", "Naming"], answer: "1", explanation: "Applied = practical use." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "Which science explains the structure of biomolecules?", options: ["Physics", "Chemistry", "Geography", "Geology"], answer: "1", explanation: "Chemistry explains molecules." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "Which science explains the effect of light on organisms?", options: ["Chemistry", "Physics", "Geology", "Geography"], answer: "1", explanation: "Physics explains light/heat." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Which science helps with population statistics?", options: ["Mathematics", "Geology", "Physics", "Chemistry"], answer: "0", explanation: "Math = statistics, ratios." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "Which science explains the distribution of organisms?", options: ["Physics", "Chemistry", "Geography", "Geology"], answer: "2", explanation: "Geography = distribution." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "Which science explains fossils and evolution?", options: ["Geography", "Geology", "Physics", "Chemistry"], answer: "1", explanation: "Geology = fossils, rocks." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "Who is famous for first systematically classifying animals?", options: ["Darwin", "Aristotle", "Linnaeus", "Mendel"], answer: "1", explanation: "Aristotle = first classification." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "Who invented binomial nomenclature?", options: ["Aristotle", "Linnaeus", "Darwin", "Pasteur"], answer: "1", explanation: "Linnaeus = two-part naming." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "Who proposed evolution by natural selection?", options: ["Mendel", "Darwin", "Linnaeus", "Pasteur"], answer: "1", explanation: "Darwin = evolution." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Who is called the father of genetics?", options: ["Darwin", "Mendel", "Watson", "Pasteur"], answer: "1", explanation: "Mendel = father of genetics." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Who discovered DNA's double helix structure?", options: ["Watson & Crick", "Mendel", "Darwin", "Pasteur"], answer: "0", explanation: "Watson & Crick = DNA structure." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Who developed pasteurization?", options: ["Koch", "Pasteur", "Darwin", "Linnaeus"], answer: "1", explanation: "Pasteur = pasteurization." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "Who discovered transposons (jumping genes)?", options: ["Mendel", "McClintock", "Watson", "Darwin"], answer: "1", explanation: "McClintock = jumping genes." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "Who created Dolly the sheep?", options: ["Watson & Crick", "Wilmut & Campbell", "Pasteur", "Koch"], answer: "1", explanation: "Wilmut & Campbell = Dolly." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "Who first saw microorganisms using a microscope?", options: ["Linnaeus", "Leeuwenhoek", "Darwin", "Pasteur"], answer: "1", explanation: "Leeuwenhoek = first microorganisms." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "Aklilu Lemma studied which plant?", options: ["Endod", "Teff", "Coffee", "Sorghum"], answer: "0", explanation: "Endod = kills snails." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "Gebissa Ejeta improved which crop?", options: ["Teff", "Sorghum", "Coffee", "Wheat"], answer: "1", explanation: "Gebissa Ejeta = sorghum." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "Melaku Werede founded Ethiopia's:", options: ["National bank", "Seed bank", "Hospital", "University"], answer: "1", explanation: "Melaku Werede = seed bank." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "Yalemtsehay Mekonnen specialized in:", options: ["Human physiology", "Zoology", "Microbiology", "Genetics"], answer: "0", explanation: "Yalemtsehay = human physiology." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "Tirfie Abebe is an expert on:", options: ["Fig trees", "Sorghum", "Snails", "Sheep"], answer: "0", explanation: "Tirfie Abebe = fig trees." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "Which of these is a characteristic of living things?", options: ["Breathing only", "Reproduction", "Rusting", "Dissolving"], answer: "1", explanation: "Reproduction = living characteristic." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "MRS GREN stands for characteristics of:", options: ["Non-living things", "Living things", "Rocks", "Chemicals"], answer: "1", explanation: "MRS GREN = living things." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "The study of embryos is called:", options: ["Embryology", "Ecology", "Histology", "Genetics"], answer: "0", explanation: "Embryology = embryos." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Which is NOT a pure branch of biology?", options: ["Botany", "Zoology", "Agriculture", "Genetics"], answer: "2", explanation: "Agriculture = applied." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Which is NOT an applied branch of biology?", options: ["Medicine", "Pharmacology", "Ecology", "Veterinary science"], answer: "2", explanation: "Ecology = pure (knowledge)." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "Which branch deals with naming organisms?", options: ["Taxonomy", "Ecology", "Genetics", "Anatomy"], answer: "0", explanation: "Taxonomy = classification and naming." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "Binominal nomenclature uses which language?", options: ["English", "Latin", "Greek", "French"], answer: "1", explanation: "Latin = scientific names." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "Homo sapiens is an example of:", options: ["Common name", "Binomial name", "Chemical name", "Amharic name"], answer: "1", explanation: "Homo sapiens = binomial name." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "Who identified bacteria causing tuberculosis?", options: ["Pasteur", "Koch", "Darwin", "Linnaeus"], answer: "1", explanation: "Koch = TB bacteria." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "Who proved microorganisms cause disease?", options: ["Darwin", "Pasteur", "Mendel", "McClintock"], answer: "1", explanation: "Pasteur = germ theory." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "Which scientist studied chimpanzees in Tanzania?", options: ["Jane Goodall", "Barbara McClintock", "Yalemtsehay", "Tirfie Abebe"], answer: "0", explanation: "Jane Goodall = chimpanzees." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "Which scientist is associated with the World Food Prize 2009?", options: ["Aklilu Lemma", "Gebissa Ejeta", "Melaku Werede", "Tirfie Abebe"], answer: "1", explanation: "Gebissa Ejeta = World Food Prize 2009." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Which scientist is associated with the World Food Prize 2013?", options: ["Aklilu Lemma", "Gebissa Ejeta", "Melaku Werede", "Tirfie Abebe"], answer: "2", explanation: "Melaku Werede = World Food Prize 2013." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "The ENDOD plant is used to control:", options: ["Malaria", "Schistosomiasis", "Tuberculosis", "Cholera"], answer: "1", explanation: "Endod kills snails carrying schistosomiasis." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "Dolly the sheep was cloned by:", options: ["Watson & Crick", "Wilmut & Campbell", "Pasteur & Koch", "Mendel & Darwin"], answer: "1", explanation: "Wilmut & Campbell = Dolly." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "Which scientist is famous for 'On the Origin of Species'?", options: ["Linnaeus", "Darwin", "Mendel", "Pasteur"], answer: "1", explanation: "Darwin = Origin of Species." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "Mendel worked with which organism?", options: ["Fruit flies", "Pea plants", "Mice", "Bacteria"], answer: "1", explanation: "Mendel = pea plants." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "McClintock discovered jumping genes in:", options: ["Pea plants", "Maize", "Bacteria", "Mice"], answer: "1", explanation: "McClintock = maize (corn)." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "Which is NOT a characteristic of living things?", options: ["Reproduction", "Growth", "Rusting", "Respiration"], answer: "2", explanation: "Rusting = non-living chemical change." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "The scientific name for humans is:", options: ["Homo sapiens", "Panthera leo", "Canis lupus", "Mus musculus"], answer: "0", explanation: "Homo sapiens = humans." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Binomial nomenclature means:", options: ["Two names", "Three names", "One name", "Four names"], answer: "0", explanation: "Binomial = two names." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Which scientist is associated with human physiology and medicinal plants?", options: ["Yalemtsehay Mekonnen", "Gebissa Ejeta", "Aklilu Lemma", "Melaku Werede"], answer: "0", explanation: "Yalemtsehay = human physiology." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "Which is an applied biological science?", options: ["Taxonomy", "Biotechnology", "Ecology", "Anatomy"], answer: "1", explanation: "Biotechnology = applied." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "Which science helps measure populations?", options: ["Physics", "Mathematics", "Geology", "Geography"], answer: "1", explanation: "Mathematics = statistics." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Which science explains photosynthesis reactions?", options: ["Chemistry", "Physics", "Geography", "Geology"], answer: "0", explanation: "Chemistry = reactions." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "The study of fossils is called:", options: ["Palaeontology", "Ecology", "Genetics", "Anatomy"], answer: "0", explanation: "Palaeontology = fossils." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "Aristotle classified animals by:", options: ["DNA", "Habitat", "Blood type", "Colour"], answer: "1", explanation: "Aristotle = habitat (land, water, air)." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Which scientist developed the rabies vaccine?", options: ["Koch", "Pasteur", "Darwin", "Linnaeus"], answer: "1", explanation: "Pasteur = rabies vaccine." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "The World Food Prize is given for:", options: ["Food security/agriculture", "Space exploration", "Medicine", "Sports"], answer: "0", explanation: "World Food Prize = food security." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "Which scientist saved Ethiopian seeds during famine?", options: ["Aklilu Lemma", "Melaku Werede", "Gebissa Ejeta", "Tirfie Abebe"], answer: "1", explanation: "Melaku Werede = seed bank." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "Which scientist developed drought-resistant sorghum?", options: ["Melaku Werede", "Gebissa Ejeta", "Aklilu Lemma", "Yalemtsehay"], answer: "1", explanation: "Gebissa Ejeta = sorghum." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "Which scientist is an expert on Ethiopian fig trees?", options: ["Tirfie Abebe", "Yalemtsehay", "Aklilu Lemma", "Melaku Werede"], answer: "0", explanation: "Tirfie Abebe = fig trees." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "The ENDOD plant's scientific name is:", options: ["Phytolacca dodecandra", "Homo sapiens", "Zea mays", "Ficus sycomorus"], answer: "0", explanation: "Endod = Phytolacca dodecandra." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Schistosomiasis is spread by:", options: ["Mosquitoes", "Snails", "Flies", "Ticks"], answer: "1", explanation: "Snails = intermediate host." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "Which is NOT a branch of biology?", options: ["Botany", "Zoology", "Physics", "Genetics"], answer: "2", explanation: "Physics = separate science." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "Cell theory says all living things are made of:", options: ["Atoms", "Cells", "Organs", "Tissues"], answer: "1", explanation: "Cells = basic unit of life." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "Which scientist is known for germ theory?", options: ["Darwin", "Pasteur", "Mendel", "Linnaeus"], answer: "1", explanation: "Pasteur = germ theory." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "The proper order in classification is:", options: ["Kingdom → Phylum → Class → Order → Family → Genus → Species", "Species → Genus → Family → Order → Class → Phylum → Kingdom", "Both A and B", "None"], answer: "2", explanation: "Both directions are correct (one is reverse of the other)." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "Which branch studies the structure of organs?", options: ["Anatomy", "Physiology", "Ecology", "Genetics"], answer: "0", explanation: "Anatomy = structure." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "Which branch studies how organs work?", options: ["Anatomy", "Physiology", "Botany", "Zoology"], answer: "1", explanation: "Physiology = function." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "Which is a characteristic unique to living things?", options: ["Melting", "Growing", "Dissolving", "Rusting"], answer: "1", explanation: "Growth = living feature." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "The study of embryos is called:", options: ["Embryology", "Ecology", "Histology", "Cytology"], answer: "0", explanation: "Embryology = embryos." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "Which scientist discovered the structure of DNA?", options: ["Mendel", "Watson & Crick", "Darwin", "Pasteur"], answer: "1", explanation: "Watson & Crick = DNA structure." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Which of these is NOT a pure field of biology?", options: ["Palaeontology", "Histology", "Pharmaceuticals", "Cytology"], answer: "2", explanation: "Pharmaceuticals = applied." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "A scientist who studies how birds migrate to Ethiopia is doing:", options: ["Pure biology", "Applied biology", "Chemistry", "Physics"], answer: "0", explanation: "Migration study = pure (knowledge)." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "A scientist who uses genetics to breed drought-resistant wheat is doing:", options: ["Pure biology", "Applied biology", "Botany only", "Ecology"], answer: "1", explanation: "Practical use = applied." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Dr. Aklilu Lemma's discovery mainly helped control:", options: ["Malaria", "Schistosomiasis (bilharzia)", "Tuberculosis", "HIV/AIDS"], answer: "1", explanation: "Endod kills schistosomiasis snails." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "Which scientist established Ethiopia's seed bank?", options: ["Aklilu Lemma", "Gebissa Ejeta", "Melaku Werede", "Yalemtsehay Mekonnen"], answer: "2", explanation: "Melaku Werede = seed bank." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "Which is the correct pairing?", options: ["Pasteur — evolution", "Mendel — genetics", "Darwin — DNA", "Linnaeus — vaccines"], answer: "1", explanation: "Mendel = genetics." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "Which is the correct pairing?", options: ["Gebissa Ejeta — sorghum", "Melaku Werede — fig trees", "Aklilu Lemma — seed bank", "Tirfie Abebe — sorghum"], answer: "0", explanation: "Gebissa Ejeta = sorghum." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "Which is the correct pairing?", options: ["Aklilu Lemma — Endod", "Tirfie Abebe — Endod", "Yalemtsehay — Endod", "Gebissa Ejeta — Endod"], answer: "0", explanation: "Aklilu Lemma = Endod." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "Which is the correct pairing?", options: ["Tirfie Abebe — fig trees", "Tirfie Abebe — sorghum", "Tirfie Abebe — sheep", "Tirfie Abebe — snails"], answer: "0", explanation: "Tirfie Abebe = fig trees." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "Which branch would study the spread of a new disease?", options: ["Ecology", "Genetics", "Anatomy", "Histology"], answer: "0", explanation: "Ecology = organisms + environment (including disease spread)." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "An Ethiopian biologist who won the World Food Prize in 2009 is:", options: ["Melaku Werede", "Gebissa Ejeta", "Aklilu Lemma", "Tirfie Abebe"], answer: "1", explanation: "Gebissa Ejeta = World Food Prize 2009." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "An Ethiopian biologist who won the World Food Prize in 2013 is:", options: ["Melaku Werede", "Gebissa Ejeta", "Aklilu Lemma", "Yalemtsehay"], answer: "0", explanation: "Melaku Werede = World Food Prize 2013." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Which statement about biology and other sciences is FALSE?", options: ["Biology uses chemistry to understand biomolecules", "Biology uses physics to understand light effects", "Biology is completely unrelated to other sciences", "Biology uses math for statistics"], answer: "2", explanation: "Biology is closely connected to other sciences." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Which scientist is known for the germ theory of disease?", options: ["Darwin", "Pasteur", "Mendel", "Linnaeus"], answer: "1", explanation: "Pasteur = germ theory." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "Dolly the sheep was cloned from which type of cell?", options: ["Embryonic stem cell", "Adult body cell", "Bacterial cell", "Plant cell"], answer: "1", explanation: "Dolly = adult cell cloning." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "Which scientist first used a microscope to see bacteria?", options: ["Pasteur", "Koch", "Leeuwenhoek", "Linnaeus"], answer: "2", explanation: "Leeuwenhoek = first saw microorganisms." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "Which scientist studied how traits pass from parents to offspring?", options: ["Darwin", "Mendel", "Pasteur", "Koch"], answer: "1", explanation: "Mendel = inheritance." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "The World Food Prize is given for:", options: ["Food security improvements", "Medicine discoveries", "Space exploration", "Sports achievements"], answer: "0", explanation: "World Food Prize = food security." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "Which scientist discovered jumping genes?", options: ["Mendel", "McClintock", "Watson", "Crick"], answer: "1", explanation: "McClintock = transposons." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "The branch of biology that studies organisms as whole systems including their environment is:", options: ["Cytology", "Histology", "Ecology", "Anatomy"], answer: "2", explanation: "Ecology = organisms + environment." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "easy", stem: "Define biology and state its Greek origin.", answer: "BIOLOGY is the science that studies LIVING ORGANISMS — their structure, function, growth, origin, evolution, and distribution.\n\nGreek origin: bios = life, logos = study/knowledge.", explanation: "Biology = study of life; bios + logos." },
    { id: "q102", type: "short", difficulty: "easy", stem: "List FIVE branches of biology and what each studies.", answer: "1) Zoology — animals\n2) Botany — plants\n3) Microbiology — microorganisms\n4) Genetics — inheritance\n5) Ecology — organisms and environment\n\n(Also accepted: anatomy, physiology, taxonomy, cytology, histology, embryology)", explanation: "Know at least five." },
    { id: "q103", type: "short", difficulty: "easy", stem: "Differentiate between pure and applied biology.", answer: "PURE biology: done for KNOWLEDGE itself — understanding how nature works, no immediate practical use. Example: studying a new bird species.\n\nAPPLIED biology: uses biological knowledge for PRACTICAL purposes (medicine, agriculture, industry). Example: breeding drought-resistant wheat.", explanation: "Pure = knowledge; applied = practical use." },
    { id: "q104", type: "short", difficulty: "easy", stem: "List the seven characteristics of living things (MRS GREN).", answer: "M — Movement\nR — Respiration\nS — Sensitivity\nG — Growth\nR — Reproduction\nE — Excretion\nN — Nutrition", explanation: "MRS GREN." },
    { id: "q105", type: "short", difficulty: "medium", stem: "Explain how chemistry is related to biology.", answer: "CHEMISTRY explains the CHEMICAL BASIS OF LIFE:\n• Structure of biomolecules (carbohydrates, lipids, proteins, nucleic acids)\n• Chemical reactions in cells (metabolism)\n• How enzymes work\n• How medicines work in the body\n• Blood chemistry (pH, ions)\n• Photosynthesis and respiration reactions", explanation: "Chemistry = molecules and reactions of life." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Explain how physics is related to biology.", answer: "PHYSICS explains the PHYSICAL PRINCIPLES in biology:\n• How light is used in photosynthesis and vision\n• How sound is used in communication\n• Heat regulation\n• Pressure (blood pressure, plant water transport)\n• Movement and forces (muscles, bones)\n• Instruments (microscopes, X-rays, MRI)", explanation: "Physics = forces, light, heat." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Who is Carl Linnaeus and what is his main contribution?", answer: "Carl Linnaeus (1707–1778) was a Swedish botanist.\n\nMain contribution: BINOMIAL NOMENCLATURE — the system of giving every organism a two-part Latin name (Genus + species), e.g., Homo sapiens.\n\nHis classification system is the basis of modern taxonomy.", explanation: "Linnaeus = binomial nomenclature." },
    { id: "q108", type: "short", difficulty: "medium", stem: "Who is Charles Darwin and what is his theory?", answer: "Charles Darwin (1809–1882) was a British naturalist.\n\nHis theory: EVOLUTION BY NATURAL SELECTION — organisms with traits better suited to their environment are more likely to survive and reproduce, passing those traits to offspring. Over many generations, this leads to evolution.\n\nBook: 'On the Origin of Species' (1859).", explanation: "Darwin = natural selection." },
    { id: "q109", type: "short", difficulty: "medium", stem: "Who is Gregor Mendel and why is he called the father of genetics?", answer: "Gregor Mendel (1822–1884) was an Austrian monk who experimented with PEA PLANTS.\n\nHe discovered the LAWS OF INHERITANCE — how traits are passed from parents to offspring in predictable patterns (dominant/recessive).\n\nBecause his work founded the science of genetics, he is called the FATHER OF GENETICS.", explanation: "Mendel = pea plants, inheritance." },
    { id: "q110", type: "short", difficulty: "medium", stem: "What did Louis Pasteur contribute to biology?", answer: "Louis Pasteur (1822–1895):\n1) Proved the GERM THEORY of disease — microorganisms cause disease.\n2) Developed PASTEURIZATION (heating to kill microbes in milk, wine).\n3) Created the RABIES VACCINE.\n4) Disproved spontaneous generation.", explanation: "Pasteur = germ theory, pasteurization, rabies vaccine." },
    { id: "q111", type: "short", difficulty: "medium", stem: "What did Robert Koch contribute to biology?", answer: "Robert Koch (1843–1910):\n1) Identified the bacteria causing TUBERCULOSIS, CHOLERA, and ANTHRAX.\n2) Developed KOCH'S POSTULATES — rules for proving a specific microbe causes a specific disease.", explanation: "Koch = TB, cholera, anthrax bacteria." },
    { id: "q112", type: "short", difficulty: "hard", stem: "Describe Dr. Aklilu Lemma's contribution.", answer: "Dr. Aklilu Lemma was an Ethiopian biologist.\n\nContribution: He discovered that the berries of the ENDOD plant (Phytolacca dodecandra) KILL SNAILS that carry SCHISTOSOMIASIS (bilharzia).\n\nThis provided a natural, cheap, locally available way to control the disease — reducing infection in Ethiopia and other African countries.", explanation: "Endod kills schistosomiasis snails." },
    { id: "q113", type: "short", difficulty: "hard", stem: "Describe Prof. Gebissa Ejeta's contribution.", answer: "Prof. Gebissa Ejeta is an Ethiopian plant breeder (sorghum expert).\n\nContribution: He developed DROUGHT-TOLERANT and STRIGA-RESISTANT SORGHUM varieties.\n\nImpact: Helped millions of farmers across Africa grow food in harsh conditions.\n\nAward: World Food Prize 2009.", explanation: "Sorghum; World Food Prize 2009." },
    { id: "q114", type: "short", difficulty: "hard", stem: "Describe Dr. Melaku Werede's contribution.", answer: "Dr. Melaku Werede is an Ethiopian plant geneticist.\n\nContribution: He FOUNDED Ethiopia's SEED BANK (Plant Genetic Resources Center). He collected and preserved INDIGENOUS CROP VARIETIES (wheat, teff, barley, sorghum) and saved Ethiopian farmers' seeds during famine.\n\nAward: World Food Prize 2013.", explanation: "Seed bank; World Food Prize 2013." },
    { id: "q115", type: "short", difficulty: "hard", stem: "Describe Prof. Yalemtsehay Mekonnen's contribution.", answer: "Prof. Yalemtsehay Mekonnen is an Ethiopian biologist.\n\nContribution: She specialized in HUMAN PHYSIOLOGY — studying how the human body works, and the effects of medicinal plants on human health. Her work at Addis Ababa University contributed to understanding traditional medicine.", explanation: "Human physiology; medicinal plants." },
    { id: "q116", type: "short", difficulty: "hard", stem: "Describe Dr. Tirfie Abebe's contribution.", answer: "Dr. Tirfie Abebe is an Ethiopian botanist.\n\nContribution: He is a leading expert on ETHIOPIAN FIG TREES (Ficus species). He discovered many new fig species and contributed to the documentation of Ethiopia's flora.", explanation: "Fig trees (botany)." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Explain how geography and geology are related to biology.", answer: "GEOGRAPHY helps biology:\n• Distribution of organisms around the world\n• Climate effects\n• Biomes (tropical, desert, temperate)\n\nGEOLOGY helps biology:\n• Fossils → evidence of evolution\n• Soil composition → plant growth\n• Rock layers → dating organisms", explanation: "Geography = distribution; geology = fossils." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Who discovered the structure of DNA and in what year?", answer: "JAMES WATSON and FRANCIS CRICK discovered the DOUBLE-HELIX STRUCTURE OF DNA in 1953. This explained how genetic information is stored and copied.", explanation: "Watson & Crick, 1953, DNA double helix." },
    { id: "q119", type: "short", difficulty: "hard", stem: "What is the difference between cytology and histology?", answer: "CYTOLOGY = the study of CELLS (their structure, function, and chemistry).\n\nHISTOLOGY = the study of TISSUES (groups of similar cells working together).\n\nSo: cytology → cells; histology → tissues.", explanation: "Cytology = cells; histology = tissues." },
    { id: "q120", type: "short", difficulty: "hard", stem: "List the main contributions of biology to society.", answer: "1) MEDICINE — vaccines, antibiotics, disease treatment\n2) AGRICULTURE — better crops and livestock, food security\n3) BIOTECHNOLOGY — insulin production, GMOs\n4) ENVIRONMENT — conservation, pollution control\n5) INDUSTRY — fermentation, food processing\n6) FORENSICS — DNA fingerprinting\n7) EDUCATION — understanding life and health", explanation: "Biology helps medicine, agriculture, environment, industry." },
  ],
};