import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 BIOLOGY — UNIT 2
// PLANTS
// Source: Grade 10 Biology Student Textbook (pp. 17–49)
// For: Abenezer (Abatu) — Grade 10
// ============================================================

export const g10BiologyCh2: Chapter = {
  id: "ch2",
  number: 2,
  title: "Plants",
  titleAm: "እፅዋት",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, Unit 2 is the BIGGEST botany unit. It has SIX big halves:\n" +
        "1) MAJOR GROUPS OF PLANTS (bryophytes → pteridophytes → gymnosperms → angiosperms)\n" +
        "2) PLANT STRUCTURE (root, stem, leaf — external & internal)\n" +
        "3) TRANSPORT IN PLANTS (xylem & phloem)\n" +
        "4) PHOTOSYNTHESIS & RESPIRATION\n" +
        "5) REPRODUCTION (non-flowering & flowering, pollination, fertilization, seed, germination, dispersal)\n" +
        "6) PLANT RESPONSES (tropisms) & MEDICINAL PLANTS\n\n" +
        "The WHOLE chapter reduces to these must-know items:\n" +
        "• The FOUR plant groups and their examples\n" +
        "• Root vs stem vs leaf functions\n" +
        "• Xylem vs phloem\n" +
        "• Photosynthesis equation + requirements\n" +
        "• Flower parts + pollination + fertilization\n" +
        "• Seed germination types\n" +
        "• Tropisms (photo-, geo-, hydro-, thigmo-)\n" +
        "• Ethiopian medicinal plants\n\n" +
        "Mastery rule: MEMORIZE the tables and the equations. This unit is heavy on recall + diagram labels.",
      bodyAm:
        "አባቱ፣ ክፍል 2 ትልቁ የእፅዋት ክፍል ነው። ስድስት ትላልቅ ክፍሎች አሉት፡\n" +
        "1) ዋና ዋና የእፅዋት ቡድኖች\n" +
        "2) የእፅዋት አወቃቀር\n" +
        "3) በእፅዋት ውስጥ መጓጓዣ\n" +
        "4) ፎቶሲንተሲስና መተንፈስ\n" +
        "5) መራባት\n" +
        "6) የእፅዋት ምላሾችና መድኃኒት እፅዋት",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 — Plant groups",
          titleAm: "ደረጃ 1 — የእፅዋት ቡድኖች",
          body:
            "FOUR major plant groups (from simple → complex):\n" +
            "1) BRYOPHYTES (mosses, liverworts) — no vascular tissue; need water for reproduction; small\n" +
            "2) PTERIDOPHYTES (ferns, horsetails) — have vascular tissue; need water for reproduction; spores\n" +
            "3) GYMNOSPERMS (pines, junipers) — seeds but NO flowers; seeds in CONES\n" +
            "4) ANGIOSPERMS (flowering plants) — flowers + fruits + seeds enclosed in ovary",
          bodyAm:
            "አራት ዋና ቡድኖች፡\n" +
            "ብራዮፋይት (ሳር አይነት) — ቫስኩላር የለም\n" +
            "ፕቴሪዶፋይት (ፈርን) — ቫስኩላር አለው፣ ስፖር\n" +
            "ጂምኖስፐርም (ጥድ) — ኮን አለው\n" +
            "አንጂዮስፐርም (አበባ) — አበባ + ፍሬ",
        },
        {
          id: "n0-2",
          title: "Pass 2 — Structure and transport",
          titleAm: "ደረጃ 2 — አወቃቀርና መጓጓዣ",
          body:
            "STRUCTURE:\n" +
            "• ROOT — absorbs water + minerals, anchors plant\n" +
            "• STEM — supports leaves, transports water/food\n" +
            "• LEAF — main site of PHOTOSYNTHESIS\n\n" +
            "TRANSPORT:\n" +
            "• XYLEM — carries WATER + MINERALS from root → leaf (upward only)\n" +
            "• PHLOEM — carries FOOD (sugars) from leaf → all parts (both directions)",
          bodyAm:
            "ሥር — ውሃና ማዕድን ይወስዳል።\n" +
            "ግንድ — ይደግፋል፣ ያጓጉዛል።\n" +
            "ቅጠል — ፎቶሲንተሲስ።\n" +
            "ዚለም — ውሃ ወደ ላይ።\n" +
            "ፍሎም — ምግብ ወደ ሁሉም ክፍል።",
        },
        {
          id: "n0-3",
          title: "Pass 3 — Photosynthesis & respiration",
          titleAm: "ደረጃ 3 — ፎቶሲንተሲስና መተንፈስ",
          body:
            "PHOTOSYNTHESIS:\n" +
            "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (needs light + chlorophyll)\n" +
            "• Happens in CHLOROPLASTS\n" +
            "• Takes IN CO₂, gives OUT O₂\n\n" +
            "RESPIRATION:\n" +
            "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy\n" +
            "• Happens in MITOCHONDRIA\n" +
            "• Takes IN O₂, gives OUT CO₂",
          bodyAm:
            "ፎቶሲንተሲስ: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\n" +
            "መተንፈስ: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy",
        },
        {
          id: "n0-4",
          title: "Pass 4 — Reproduction",
          titleAm: "ደረጃ 4 — መራባት",
          body:
            "NON-FLOWERING plants reproduce by:\n" +
            "• SPORES (bryophytes, pteridophytes)\n" +
            "• SEEDS in CONES (gymnosperms)\n\n" +
            "FLOWERING plants:\n" +
            "• Flower → pollination → fertilization → seed → fruit → germination\n" +
            "• Male part = STAMEN (anther + filament)\n" +
            "• Female part = PISTIL (stigma + style + ovary)",
          bodyAm:
            "አበባ የሌላቸው: ስፖር ወይም ኮን።\n" +
            "አበባ ያላቸው: አበባ → ውህደት → ዘር → ፍሬ።\n" +
            "ወንድ = stamen, ሴት = pistil።",
        },
        {
          id: "n0-5",
          title: "Pass 5 — Responses and medicinal plants",
          titleAm: "ደረጃ 5 — ምላሾችና መድኃኒት እፅዋት",
          body:
            "TROPISMS:\n" +
            "• PHOTOTROPISM — response to LIGHT (shoot grows toward light)\n" +
            "• GEOTROPISM — response to GRAVITY (root grows down)\n" +
            "• HYDROTROPISM — response to WATER (root grows toward water)\n" +
            "• THIGMOTROPISM — response to TOUCH\n\n" +
            "MEDICINAL PLANTS (Ethiopia):\n" +
            "• Endod — schistosomiasis\n" +
            "• Gesho — cough, stomach\n" +
            "• Kosso (Hagenia) — tapeworm\n" +
            "• Tena Adam (Ruta) — stomach, cold\n" +
            "• Feto (Lepidium) — diarrhea",
          bodyAm:
            "ፎቶትሮፒዝም — ብርሃን።\n" +
            "ጂኦትሮፒዝም — ስበት።\n" +
            "ሃይድሮትሮፒዝም — ውሃ።\n" +
            "ቲግሞትሮፒዝም — ንክኪ።\n" +
            "እንዶድ፣ ጌሾ፣ ኮሶ፣ ጤና አዳም፣ ፈጦ።",
        },
        {
          id: "n0-6",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Know the FOUR plant groups with examples.\n" +
            "• Know root vs stem vs leaf functions.\n" +
            "• Know xylem vs phloem.\n" +
            "• Know photosynthesis & respiration equations.\n" +
            "• Know flower parts and their functions.\n" +
            "• Know pollination vs fertilization.\n" +
            "• Know the types of germination.\n" +
            "• Know tropisms.\n" +
            "• Know Ethiopian medicinal plants.",
          bodyAm:
            "አራቱን ቡድኖች፣ የሥር/ግንድ/ቅጠል ተግባር፣ xylem/phloem፣ ፎቶሲንተሲስ፣ የአበባ ክፍሎች፣ የመራባት ሂደት፣ ትሮፒዝም፣ መድኃኒት እፅዋት አወቅ።",
        },
      ],
    },

    // ============================================================
    // 2.1 MAJOR GROUPS OF PLANTS
    // ============================================================
    {
      id: "n1",
      title: "2.1 Major Groups of Plants",
      titleAm: "2.1 ዋና ዋና የእፅዋት ቡድኖች",
      body:
        "Abatu, plants are classified into FOUR major groups based on whether they have VASCULAR TISSUE, SEEDS, and FLOWERS. This is a MUST-MEMORIZE table.",
      bodyAm:
        "እፅዋት በአራት ቡድን ይከፈላሉ — በቫስኩላር፣ በዘር፣ በአበባ መኖር ላይ ተመስርተው።",
      children: [
        {
          id: "n1-1",
          title: "Overview — the four groups",
          titleAm: "አጠቃላይ እይታ",
          body:
            "| Group | Vascular tissue | Seeds | Flowers/Fruits | Examples |\n" +
            "|-------|-----------------|-------|----------------|----------|\n" +
            "| Bryophytes | NO | NO | NO | Mosses, liverworts |\n" +
            "| Pteridophytes | YES | NO (spores) | NO | Ferns, horsetails |\n" +
            "| Gymnosperms | YES | YES (in cones) | NO | Pines, junipers, cycads |\n" +
            "| Angiosperms | YES | YES | YES | All flowering plants |\n\n" +
            "Progression: bryophytes → pteridophytes → gymnosperms → angiosperms (simple → complex).",
          bodyAm:
            "ብራዮፋይት — ቫስኩላር የለም፣ ዘር የለም።\n" +
            "ፕቴሪዶፋይት — ቫስኩላር አለው፣ ስፖር።\n" +
            "ጂምኖስፐርም — ዘር አለው፣ አበባ የለም።\n" +
            "አንጂዮስፐርም — ዘር + አበባ።",
        },
        {
          id: "n1-2",
          title: "Bryophytes (mosses & liverworts)",
          titleAm: "ብራዮፋይቶች",
          body:
            "• NO vascular tissue → small, low-growing\n" +
            "• Live in MOIST environments\n" +
            "• Reproduce by SPORES\n" +
            "• Need WATER for sperm to swim to egg\n" +
            "• Examples: mosses (Funaria), liverworts (Marchantia)\n" +
            "• Important: prevent soil erosion, absorb water",
          bodyAm:
            "• ቫስኩላር የለም\n" +
            "• እርጥብ ቦታ\n" +
            "• ስፖር\n" +
            "• ለመራባት ውሃ ያስፈልጋል\n" +
            "• ሙሴ፣ ሊቨርዎርት",
        },
        {
          id: "n1-3",
          title: "Pteridophytes (ferns & horsetails)",
          titleAm: "ፕቴሪዶፋይቶች",
          body:
            "• HAVE vascular tissue (xylem + phloem) → can grow taller\n" +
            "• Reproduce by SPORES (not seeds)\n" +
            "• Need WATER for sperm to swim to egg\n" +
            "• Leaves called FRONDS\n" +
            "• Spores produced in SORI (clusters on underside of fronds)\n" +
            "• Examples: ferns, horsetails, club mosses",
          bodyAm:
            "• ቫስኩላር አለው\n" +
            "• ስፖር\n" +
            "• ውሃ ያስፈልጋል\n" +
            "• ፈርን፣ ሆርስቴል",
        },
        {
          id: "n1-4",
          title: "Gymnosperms (cone-bearing plants)",
          titleAm: "ጂምኖስፐርሞች",
          body:
            "• HAVE vascular tissue\n" +
            "• HAVE SEEDS — but seeds are NAKED (not enclosed in ovary) → lie exposed on CONE scales\n" +
            "• NO flowers, NO fruits\n" +
            "• Reproduce by SEEDS in CONES\n" +
            "• Male cone → pollen; Female cone → ovules → seeds\n" +
            "• Do NOT need water for reproduction (wind pollination)\n" +
            "• Examples: pines (Pinus), junipers (Juniperus), cycads, Ginkgo\n" +
            "• Economic value: timber, paper, resins, turpentine",
          bodyAm:
            "• ቫስኩላር አለው\n" +
            "• ዘር አለው (ነገር ግን በኮን ውስጥ)\n" +
            "• አበባ የለም\n" +
            "• ጥድ፣ ጁኒፐር\n" +
            "• እንጨት፣ ወረቀት",
        },
        {
          id: "n1-5",
          title: "Angiosperms (flowering plants)",
          titleAm: "አንጂዮስፐርሞች",
          body:
            "• HAVE vascular tissue\n" +
            "• HAVE SEEDS ENCLOSED in an OVARY (which becomes fruit)\n" +
            "• HAVE FLOWERS (reproductive organs)\n" +
            "• HAVE FRUITS\n" +
            "• Divided into MONOCOTS and DICOTS\n\n" +
            "MONOCOT features:\n" +
            "• One cotyledon\n" +
            "• Parallel leaf veins\n" +
            "• Fibrous roots\n" +
            "• Floral parts in 3s\n" +
            "• Examples: maize, wheat, barley, teff, grasses\n\n" +
            "DICOT features:\n" +
            "• Two cotyledons\n" +
            "• Netted leaf veins\n" +
            "• Tap root\n" +
            "• Floral parts in 4s or 5s\n" +
            "• Examples: beans, peas, coffee, mango, eucalyptus",
          bodyAm:
            "• ቫስኩላር + ዘር + አበባ + ፍሬ\n" +
            "ሞኖኮት: አንድ cotyledon፣ ትይዩ እርሳስ፣ ፋይበር ሥር\n" +
            "ዳይኮት: ሁለት cotyledon፣ መረብ እርሳስ፣ ታፕ ሥር",
        },
        {
          id: "n1-6",
          title: "⚠ Remember trap — Plant groups",
          titleAm: "⚠ አትርሳ — የእፅዋት ቡድኖች",
          body:
            "• Bryophytes = NO vascular, NO seeds — mosses.\n" +
            "• Pteridophytes = vascular, NO seeds — ferns (spores).\n" +
            "• Gymnosperms = vascular, seeds in CONES — pines.\n" +
            "• Angiosperms = vascular, seeds in OVARY — flowering plants.\n" +
            "• ONLY angiosperms have flowers and fruits.\n" +
            "• Gymnosperm seeds are NAKED (no ovary covering).\n" +
            "• Mosses & ferns need water for reproduction; gymnosperms & angiosperms do NOT.\n" +
            "• Monocots = 1 cotyledon, parallel veins; Dicots = 2 cotyledons, netted veins.",
          bodyAm:
            "ብራዮ = ቫስኩላር የለም።\n" +
            "ፕቴሪዶ = ስፖር።\n" +
            "ጂምኖ = ኮን።\n" +
            "አንጂዮ = አበባ + ፍሬ።\n" +
            "ሞኖኮት = 1, ዳይኮት = 2።",
        },
      ],
    },

    // ============================================================
    // 2.2 EXTERNAL STRUCTURE OF PLANTS
    // ============================================================
    {
      id: "n2",
      title: "2.2 External Structure of Plants",
      titleAm: "2.2 የእፅዋት ውጫዊ አወቃቀር",
      body:
        "Abatu, a typical flowering plant has THREE main organs: ROOT, STEM, and LEAF. Each is adapted for its function.",
      bodyAm:
        "አባቱ፣ እፅዋት ሦስት ዋና አካላት አሉት፡ ሥር፣ ግንድ፣ ቅጠል።",
      children: [
        {
          id: "n2-1",
          title: "The ROOT — structure & function",
          titleAm: "ሥር",
          body:
            "FUNCTIONS:\n" +
            "• ABSORB water and minerals from soil\n" +
            "• ANCHOR the plant in soil\n" +
            "• STORE food (e.g., carrot, beetroot)\n" +
            "• Sometimes used for VEGETATIVE REPRODUCTION\n\n" +
            "TYPES:\n" +
            "• TAP ROOT — one main root + lateral roots (DICOTS: bean, carrot)\n" +
            "• FIBROUS ROOT — many similar roots, no main one (MONOCOTS: maize, grass)\n" +
            "• ADVENTITIOUS ROOT — roots from stem/leaf (e.g., aerial roots)\n\n" +
            "ZONES (top → bottom):\n" +
            "• Root cap → protection\n" +
            "• Zone of cell division (meristem) → new cells\n" +
            "• Zone of elongation → cells lengthen\n" +
            "• Zone of maturation → cells differentiate\n" +
            "• Root hairs → increase absorption surface",
          bodyAm:
            "ሥር ተግባር፡ ውሃ መውሰድ፣ መያዝ፣ ምግብ ማከማቸት።\n" +
            "ታፕ — ዳይኮት።\n" +
            "ፋይበር — ሞኖኮት።\n" +
            "ዞኖች: cap → division → elongation → maturation → hairs።",
        },
        {
          id: "n2-2",
          title: "The STEM — structure & function",
          titleAm: "ግንድ",
          body:
            "FUNCTIONS:\n" +
            "• SUPPORT leaves, flowers, fruits\n" +
            "• TRANSPORT water (xylem) and food (phloem)\n" +
            "• STORE food (e.g., sugarcane, potato tuber)\n" +
            "• Perform some PHOTOSYNTHESIS (green stems)\n" +
            "• VEGETATIVE REPRODUCTION (e.g., runners, tubers)\n\n" +
            "EXTERNAL PARTS:\n" +
            "• Node — point where leaves/branches attach\n" +
            "• Internode — segment between two nodes\n" +
            "• Axil — angle between stem and leaf\n" +
            "• Axillary bud — bud in axil; grows into branch\n" +
            "• Terminal bud — bud at stem tip\n" +
            "• Lenticels — pores for gas exchange",
          bodyAm:
            "ግንድ፡ መደገፍ፣ ማጓጓዝ፣ ማከማቸት።\n" +
            "ኖድ፣ ኢንተርኖድ፣ አክስል፣ ቡድ፣ ለንቲሴል።",
        },
        {
          id: "n2-3",
          title: "The LEAF — external parts",
          titleAm: "ቅጠል — ውጫዊ ክፍሎች",
          body:
            "PARTS:\n" +
            "• BLADE (lamina) — flat green part; main photosynthetic surface\n" +
            "• PETIOLE — stalk attaching blade to stem\n" +
            "• MIDRIB — central vein\n" +
            "• VEINS — carry water (xylem) and food (phloem)\n" +
            "• STIPULES — small flaps at petiole base\n\n" +
            "VEIN PATTERNS:\n" +
            "• NETTED (reticulate) — DICOTS\n" +
            "• PARALLEL — MONOCOTS\n\n" +
            "ARRANGEMENT (on stem):\n" +
            "• ALTERNATE — one leaf per node\n" +
            "• OPPOSITE — two leaves per node\n" +
            "• WHORLED — three or more per node",
          bodyAm:
            "ቅጠል: blade, petiole, midrib, veins።\n" +
            "መረብ እርሳስ = ዳይኮት።\n" +
            "ትይዩ = ሞኖኮት።",
        },
        {
          id: "n2-4",
          title: "Leaf adaptations",
          titleAm: "የቅጠል ማላመዶች",
          body:
            "Leaves are adapted for different environments:\n" +
            "• THIN + BROAD → maximize light capture\n" +
            "• THICK CUTICLE → reduce water loss (dry climates)\n" +
            "• HAIRY surface → trap moisture / deter herbivores\n" +
            "• SUNKEN stomata → reduce transpiration\n" +
            "• TENDRILLS (in peas) → climbing\n" +
            "• SPINES (in cactus) → reduce water loss + defense\n" +
            "• THICK FLESHY leaves (aloe) → store water\n" +
            "• INSECT-TRAPPING leaves (Venus flytrap) → catch prey",
          bodyAm:
            "ቅጠሎች ለአካባቢ ይላመዳሉ፡\n" +
            "ቀጭን + ሰፊ — ብርሃን።\n" +
            "ወፍራም cuticle — ውሃ ማስቀረት።\n" +
            "እሾህ (cactus) — ውሃ ማስቀረት።\n" +
            "tendril (peas) — መውጣት።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap — External structure",
          titleAm: "⚠ አትርሳ — ውጫዊ አወቃቀር",
          body:
            "• ROOT absorbs water + minerals; STEM supports + transports.\n" +
            "• TAP root = dicots; FIBROUS root = monocots.\n" +
            "• PETIOLE = leaf stalk; BLADE = flat part.\n" +
            "• Netted veins = dicots; Parallel veins = monocots.\n" +
            "• Node = leaf attachment point; Internode = between nodes.\n" +
            "• Axillary bud → branch; Terminal bud → main growth.\n" +
            "• Root hairs INCREASE surface area for absorption.",
          bodyAm:
            "ሥር = መውሰድ; ግንድ = መደገፍ + ማጓጓዝ።\n" +
            "ታፕ = ዳይኮት; ፋይበር = ሞኖኮት።\n" +
            "መረብ = ዳይኮት; ትይዩ = ሞኖኮት።",
        },
      ],
    },

    // ============================================================
    // 2.3 INTERNAL STRUCTURE OF PLANTS
    // ============================================================
    {
      id: "n3",
      title: "2.3 Internal Structure of Plants",
      titleAm: "2.3 የእፅዋት ውስጣዊ አወቃቀር",
      body:
        "Abatu, when you cut a plant organ in cross-section, you see TISSUES. The most important are xylem, phloem, and the leaf tissues.",
      bodyAm:
        "ውስጣዊ አወቃቀር ቲሹዎችን ያሳያል።",
      children: [
        {
          id: "n3-1",
          title: "Plant tissues — overview",
          titleAm: "የእፅዋት ቲሹ",
          body:
            "• EPIDERMIS — outer protective layer\n" +
            "• CORTEX — storage and support (below epidermis)\n" +
            "• VASCULAR TISSUE — xylem + phloem (transport)\n" +
            "• PITH — central storage tissue\n" +
            "• CAMBIUM — layer that makes new xylem/phloem (growth in thickness)\n" +
            "• MERISTEM — region of cell division (tips of root and shoot)",
          bodyAm:
            "ኤፒደርሚስ — ውጫዊ ጥበቃ።\n" +
            "ኮርቴክስ — ማከማቻ።\n" +
            "ቫስኩላር — xylem + phloem።\n" +
            "ፒዝ — መሃል።\n" +
            "ካምቢየም — አዲስ ቲሹ።\n" +
            "ሜሪስቴም — ሴል መከፋፈል።",
        },
        {
          id: "n3-2",
          title: "XYLEM vs PHLOEM",
          titleAm: "ዚለም እና ፍሎም",
          body:
            "| Feature | XYLEM | PHLOEM |\n" +
            "|---------|-------|--------|\n" +
            "| Carries | Water + minerals | Sugars (food) |\n" +
            "| Direction | Upward (root → leaf) | Both directions |\n" +
            "| Cells | Dead at maturity | Alive at maturity |\n" +
            "| Cell types | Tracheids + vessel elements | Sieve tubes + companion cells |\n" +
            "| Location | Inside (toward center) | Outside |\n\n" +
            "KEY: XYLEM = WATER UP; PHLOEM = FOOD AROUND.",
          bodyAm:
            "ዚለም: ውሃ ወደ ላይ፤ ሴሎች ሞተዋል።\n" +
            "ፍሎም: ምግብ በሁለት አቅጣጫ፤ ሴሎች ሕያው።",
        },
        {
          id: "n3-3",
          title: "Leaf internal structure",
          titleAm: "የቅጠል ውስጣዊ አወቃቀር",
          body:
            "Cross-section of a leaf (top → bottom):\n" +
            "• CUTICLE — waxy, prevents water loss\n" +
            "• UPPER EPIDERMIS — protective layer\n" +
            "• PALISADE MESOPHYLL — tall, tightly packed cells; MAIN site of photosynthesis\n" +
            "• SPONGY MESOPHYLL — loosely packed, air spaces; gas exchange\n" +
            "• VEINS — xylem + phloem\n" +
            "• LOWER EPIDERMIS — with STOMATA (pores for gas exchange)\n" +
            "• STOMATA — flanked by GUARD CELLS that open/close them",
          bodyAm:
            "cuticle → upper epidermis → palisade → spongy → lower epidermis + stomata።\n" +
            "ፓሊሴድ = ፎቶሲንተሲስ።\n" +
            "ስቶማታ = ጋዝ ልውውጥ።\n" +
            "guard cells = መክፈት/መዝጋት።",
        },
        {
          id: "n3-4",
          title: "Stem and root cross-sections",
          titleAm: "የግንድና ሥር ክፍል",
          body:
            "DICOT STEM (outside → inside):\n" +
            "• Epidermis → cortex → vascular bundles (in ring) → pith\n" +
            "• Vascular bundles = xylem (inner) + cambium + phloem (outer)\n\n" +
            "MONOCOT STEM:\n" +
            "• Vascular bundles SCATTERED throughout\n" +
            "• No distinct pith\n\n" +
            "DICOT ROOT:\n" +
            "• Epidermis → cortex → endodermis → pericycle → xylem (star-shaped in center) → phloem between xylem arms\n\n" +
            "MONOCOT ROOT:\n" +
            "• Xylem in ring around pith (not star-shaped)",
          bodyAm:
            "ዳይኮት ግንድ: ቫስኩላር በቀለበት።\n" +
            "ሞኖኮት ግንድ: ተበታትኖ።\n" +
            "ዳይኮት ሥር: xylem ኮከብ ቅርጽ።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap — Internal structure",
          titleAm: "⚠ አትርሳ — ውስጣዊ አወቃቀር",
          body:
            "• XYLEM = water up = DEAD cells = inner.\n" +
            "• PHLOEM = food around = ALIVE cells = outer.\n" +
            "• PALISADE = main photosynthesis site.\n" +
            "• STOMATA = gas exchange; controlled by GUARD CELLS.\n" +
            "• Dicot stem = vascular bundles in a RING.\n" +
            "• Monocot stem = vascular bundles SCATTERED.\n" +
            "• Dicot root = xylem STAR-shaped in center.",
          bodyAm:
            "ዚለም = ውሃ ወደ ላይ, ሞቶ።\n" +
            "ፍሎም = ምግብ, ሕያው።\n" +
            "ፓሊሴድ = ፎቶሲንተሲስ።\n" +
            "ስቶማታ = ጋዝ።",
        },
      ],
    },

    // ============================================================
    // 2.4 TRANSPORT IN PLANTS
    // ============================================================
    {
      id: "n4",
      title: "2.4 Transport in Plants",
      titleAm: "2.4 በእፅዋት ውስጥ መጓጓዣ",
      body:
        "Abatu, plants have TWO transport systems: XYLEM (water) and PHLOEM (food). Each works differently.",
      bodyAm:
        "ሁለት የመጓጓዣ ሥርዓቶች: ዚለምና ፍሎም።",
      children: [
        {
          id: "n4-1",
          title: "Water & mineral transport (xylem)",
          titleAm: "የውሃና ማዕድን መጓጓዣ",
          body:
            "PATH: Soil → root hairs → root cortex → xylem → stem → leaf → stomata (lost as vapour)\n\n" +
            "THREE forces move water UP through xylem:\n" +
            "1) TRANSPIRATION PULL — evaporation from leaves creates suction (main force)\n" +
            "2) ROOT PRESSURE — root cells actively pump ions, water follows in\n" +
            "3) CAPILLARITY — water rises in narrow tubes (xylem)\n\n" +
            "TRANSPIRATION = loss of water vapour from leaves through stomata.\n" +
            "• Faster in: hot, dry, windy, bright conditions\n" +
            "• Slower in: cool, humid, still, dark conditions",
          bodyAm:
            "መንገድ: አፈር → ሥር → ዚለም → ግንድ → ቅጠል → ስቶማታ።\n" +
            "ሦስት ኃይሎች: transpiration pull፣ root pressure፣ capillarity።\n" +
            "ትራንስፒሬሽን = ውሃ ትነት መውጣት።",
        },
        {
          id: "n4-2",
          title: "Food transport (phloem)",
          titleAm: "የምግብ መጓጓዣ",
          body:
            "PHLOEM carries SUGARS (sucrose) and other organic compounds.\n" +
            "• Direction: from SOURCE (leaf = makes sugar) to SINK (root, fruit, growing tip = uses/stores sugar)\n" +
            "• Can be upward or downward\n" +
            "• Mechanism: pressure-flow (translocation)\n" +
            "• Companion cells supply energy (ATP) to sieve tubes",
          bodyAm:
            "ፍሎም ስኳር ያጓጉዛል።\n" +
            "ከ SOURCE (ቅጠል) → SINK (ሥር, ፍሬ)።\n" +
            "ሁለት አቅጣጫ።",
        },
        {
          id: "n4-3",
          title: "Girdling (ringing) experiment",
          titleAm: "የግርድሊንግ ሙከራ",
          body:
            "What happens if you remove a ring of bark (which contains phloem) from a stem?\n\n" +
            "RESULT: Food (sugars) cannot move down past the ring → sugars build up ABOVE the ring → swelling (gall) forms above the ring.\n\n" +
            "PROOF: Food travels through PHLOEM, not xylem.\n\n" +
            "(Xylem is deeper, so water still goes up and leaves stay alive for a while.)",
          bodyAm:
            "ቅርፊት (ፍሎም) ከተወገደ:\n" +
            "ምግብ ከቀለበቱ በላይ ይከማቻል → እብጠት።\n" +
            "ማረጋገጫ: ምግብ በፍሎም ይጓዛል።",
        },
        {
          id: "n4-4",
          title: "⚠ Remember trap — Transport",
          titleAm: "⚠ አትርሳ — መጓጓዣ",
          body:
            "• XYLEM = water + minerals = UP only.\n" +
            "• PHLOEM = sugars = BOTH directions.\n" +
            "• TRANSPIRATION PULL is the main force moving water up.\n" +
            "• TRANSPIRATION happens through STOMATA.\n" +
            "• Root pressure and capillarity also help.\n" +
            "• Girdling proves FOOD travels in PHLOEM.\n" +
            "• Transpiration is faster in hot, dry, windy conditions.",
          bodyAm:
            "ዚለም = ውሃ ወደ ላይ።\n" +
            "ፍሎም = ምግብ በሁለት አቅጣጫ።\n" +
            "transpiration pull = ዋና ኃይል።\n" +
            "girdling = ፍሎም ማረጋገጫ።",
        },
      ],
    },

    // ============================================================
    // 2.5 PHOTOSYNTHESIS
    // ============================================================
    {
      id: "n5",
      title: "2.5 Photosynthesis",
      titleAm: "2.5 ፎቶሲንተሲስ",
      body:
        "Abatu, PHOTOSYNTHESIS is the process by which GREEN PLANTS make their own food using LIGHT energy, CO₂, and WATER.",
      bodyAm:
        "ፎቶሲንተሲስ አረንጓዴ እፅዋት ምግባቸውን የሚሠሩበት ሂደት ነው።",
      children: [
        {
          id: "n5-1",
          title: "The equation",
          titleAm: "ቀመሩ",
          body:
            "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\n\n" +
            "Reactants (inputs):\n" +
            "• 6 molecules of carbon dioxide (CO₂)\n" +
            "• 6 molecules of water (H₂O)\n" +
            "• Light energy (sunlight)\n" +
            "• Chlorophyll (green pigment)\n\n" +
            "Products (outputs):\n" +
            "• 1 molecule of glucose (C₆H₁₂O₆) — food\n" +
            "• 6 molecules of oxygen (O₂) — released into air",
          bodyAm:
            "ግብዓቶች: CO₂ + H₂O + ብርሃን + ክሎሮፊል።\n" +
            "ውጤቶች: ግሉኮስ + O₂።",
        },
        {
          id: "n5-2",
          title: "Where it happens — chloroplast",
          titleAm: "የሚካሄድበት ቦታ",
          body:
            "• Photosynthesis occurs in CHLOROPLASTS (in mesophyll cells of leaf)\n" +
            "• Green pigment CHLOROPHYLL absorbs LIGHT energy\n" +
            "• Chlorophyll absorbs mainly RED and BLUE light — reflects GREEN (why leaves look green)\n" +
            "• Mainly in PALISADE mesophyll cells (most chloroplasts)",
          bodyAm:
            "ክሎሮፕላስት ውስጥ።\n" +
            "ክሎሮፊል ቀይና ሰማያዊ ይወስዳል፤ አረንጓዴ ያንፀባርቃል።\n" +
            "ፓሊሴድ ሴሎች።",
        },
        {
          id: "n5-3",
          title: "Chloroplast structure",
          titleAm: "የክሎሮፕላስት አወቃቀር",
          body:
            "Chloroplast parts:\n" +
            "• GRANA — stacks of thylakoids (membranes where light is absorbed)\n" +
            "• THYLAKOID — individual disc; contains CHLOROPHYLL\n" +
            "• STROMA — fluid matrix; where glucose is made\n" +
            "• DOUBLE MEMBRANE — outer + inner envelope\n\n" +
            "Light reactions → in thylakoid membranes (make ATP + NADPH + O₂)\n" +
            "Calvin cycle → in stroma (uses ATP/NADPH to make glucose)",
          bodyAm:
            "ግራና — ቲላኮይድ ክምር።\n" +
            "ቲላኮይድ — ክሎሮፊል ያለበት።\n" +
            "ስትሮማ — ግሉኮስ የሚሠራበት።",
        },
        {
          id: "n5-4",
          title: "Factors affecting photosynthesis",
          titleAm: "ተጽዕኖ የሚያደርጉ ምክንያቶች",
          body:
            "RATE of photosynthesis increases with:\n" +
            "• LIGHT INTENSITY — up to a maximum (saturation point)\n" +
            "• CO₂ CONCENTRATION — up to a maximum\n" +
            "• TEMPERATURE — up to optimum (~25–35°C); too hot → enzymes denature\n" +
            "• WATER — needed as reactant\n" +
            "• CHLOROPHYLL amount — more green = more photosynthesis\n\n" +
            "Limiting factor = whichever one is in shortest supply.",
          bodyAm:
            "ብርሃን፣ CO₂፣ ሙቀት፣ ውሃ፣ ክሎሮፊል።\n" +
            "limit factor = በትንሹ ያለው።",
        },
        {
          id: "n5-5",
          title: "Importance of photosynthesis",
          titleAm: "የፎቶሲንተሲስ ጠቀሜታ",
          body:
            "• Produces FOOD for plants and animals (base of all food chains)\n" +
            "• Releases OXYGEN into atmosphere (for respiration)\n" +
            "• Removes CO₂ from atmosphere (helps with climate change)\n" +
            "• Source of FOSSIL FUELS (from ancient plants)",
          bodyAm:
            "ምግብ + ኦክሲጅን + CO₂ ማስወገድ።",
        },
        {
          id: "n5-6",
          title: "⚠ Remember trap — Photosynthesis",
          titleAm: "⚠ አትርሳ — ፎቶሲንተሲስ",
          body:
            "• Equation: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (needs light + chlorophyll).\n" +
            "• Happens in CHLOROPLASTS, not mitochondria.\n" +
            "• Chlorophyll absorbs RED + BLUE, reflects GREEN.\n" +
            "• Oxygen comes from WATER (not from CO₂).\n" +
            "• Glucose is the food product.\n" +
            "• Light reactions in thylakoid; Calvin cycle in stroma.\n" +
            "• Photosynthesis = OPPOSITE of respiration.",
          bodyAm:
            "ቀመሩን አስታውስ።\n" +
            "ክሎሮፕላስት።\n" +
            "ኦክሲጅን ከውሃ።",
        },
      ],
    },

    // ============================================================
    // 2.6 RESPIRATION
    // ============================================================
    {
      id: "n6",
      title: "2.6 Respiration in Plants",
      titleAm: "2.6 በእፅዋት ውስጥ መተንፈስ",
      body:
        "Abatu, RESPIRATION is how plants (and all living things) RELEASE ENERGY from food. It happens ALL THE TIME, day and night.",
      bodyAm:
        "መተንፈስ ከምግብ ጉልበት ማውጣት ነው። ሁልጊዜ ይካሄዳል።",
      children: [
        {
          id: "n6-1",
          title: "Aerobic respiration — the equation",
          titleAm: "ኤሮቢክ መተንፈስ",
          body:
            "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ENERGY (ATP)\n\n" +
            "• Happens in MITOCHONDRIA\n" +
            "• Uses OXYGEN\n" +
            "• Releases much energy (~38 ATP per glucose)\n" +
            "• Happens in ALL living plant cells, all the time\n" +
            "• More active in growing parts (root tips, buds, germinating seeds)",
          bodyAm:
            "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy።\n" +
            "ሚቶኮንድሪያ ውስጥ።\n" +
            "ኦክሲጅን ያስፈልጋል።",
        },
        {
          id: "n6-2",
          title: "Anaerobic respiration (fermentation)",
          titleAm: "አናኤሮቢክ መተንፈስ",
          body:
            "When oxygen is NOT available:\n\n" +
            "In plants & yeast:\n" +
            "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂ + energy\n" +
            "(glucose → ethanol + carbon dioxide + energy)\n\n" +
            "In animals (muscles):\n" +
            "C₆H₁₂O₆ → 2C₃H₆O₃ + energy\n" +
            "(glucose → lactic acid + energy)\n\n" +
            "• Releases LESS energy than aerobic\n" +
            "• Used in bread-making (CO₂ makes bread rise) and alcohol brewing",
          bodyAm:
            "በእፅዋት/እርሾ: ግሉኮስ → ኤታኖል + CO₂።\n" +
            "በእንስሳት ጡንቻ: ግሉኮስ → ላቲክ አሲድ።\n" +
            "አነስተኛ ጉልበት።",
        },
        {
          id: "n6-3",
          title: "Photosynthesis vs Respiration — comparison",
          titleAm: "ፎቶሲንተሲስ እና መተንፈስ ንጽጽር",
          body:
            "| Feature | Photosynthesis | Respiration |\n" +
            "|---------|----------------|-------------|\n" +
            "| Purpose | Make food | Release energy |\n" +
            "| Location | Chloroplast | Mitochondria |\n" +
            "| Needs light | YES | NO |\n" +
            "| Gas used | CO₂ | O₂ |\n" +
            "| Gas produced | O₂ | CO₂ |\n" +
            "| When | Day (light) | Day AND night |\n" +
            "| Energy | STORES energy | RELEASES energy |\n" +
            "| Equation | 6CO₂+6H₂O→C₆H₁₂O₆+6O₂ | C₆H₁₂O₆+6O₂→6CO₂+6H₂O |",
          bodyAm:
            "| | ፎቶሲንተሲስ | መተንፈስ |\n" +
            "|ቦታ|ክሎሮፕላስት|ሚቶኮንድሪያ|\n" +
            "|ብርሃን|ያስፈልጋል|አያስፈልግም|\n" +
            "|ጋዝ|CO₂ ወስዶ O₂ ይሰጣል|O₂ ወስዶ CO₂ ይሰጣል|",
        },
        {
          id: "n6-4",
          title: "⚠ Remember trap — Respiration",
          titleAm: "⚠ አትርሳ — መተንፈስ",
          body:
            "• Respiration happens ALL THE TIME (day and night).\n" +
            "• Photosynthesis only in LIGHT.\n" +
            "• Respiration in MITOCHONDRIA.\n" +
            "• Respiration uses O₂, gives out CO₂ (opposite of photosynthesis).\n" +
            "• Aerobic = with O₂ (more ATP).\n" +
            "• Anaerobic = without O₂ (less ATP).\n" +
            "• In plants, anaerobic makes ETHANOL; in animals, LACTIC ACID.",
          bodyAm:
            "መተንፈስ ሁልጊዜ።\n" +
            "ፎቶሲንተሲስ በብርሃን ብቻ።\n" +
            "ሚቶኮንድሪያ።\n" +
            "ኤታኖል vs ላቲክ አሲድ።",
        },
      ],
    },

    // ============================================================
    // 2.7 REPRODUCTION IN PLANTS
    // ============================================================
    {
      id: "n7",
      title: "2.7 Reproduction in Plants",
      titleAm: "2.7 በእፅዋት ውስጥ መራባት",
      body:
        "Abatu, plants reproduce both ASEXUALLY and SEXUALLY. This section covers the FULL cycle from flower to seed to germination.",
      bodyAm:
        "እፅዋት በአሴክስዋልና በሴክስዋል ይራባሉ።",
      children: [
        {
          id: "n7-1",
          title: "Asexual vs sexual reproduction",
          titleAm: "አሴክስዋል እና ሴክስዋል",
          body:
            "ASEXUAL reproduction:\n" +
            "• One parent\n" +
            "• No gametes (sex cells)\n" +
            "• Offspring = genetically identical clone\n" +
            "• Faster\n" +
            "• Examples: runners (strawberry), tubers (potato), bulbs (onion), rhizomes (ginger), cuttings, grafting, budding (yeast)\n\n" +
            "SEXUAL reproduction:\n" +
            "• Two parents (male + female gametes)\n" +
            "• Gametes FUSE (fertilization)\n" +
            "• Offspring = genetic variation\n" +
            "• Slower\n" +
            "• Examples: flowering plants (seed), gymnosperms (seed in cone)",
          bodyAm:
            "አሴክስዋል = አንድ ወላጅ, ተመሳሳይ, ፈጣን።\n" +
            "ሴክስዋል = ሁለት ወላጅ, ልዩነት።",
        },
        {
          id: "n7-2",
          title: "Life cycle of gymnosperms",
          titleAm: "የጂምኖስፐርም ሕይወት ዑደት",
          body:
            "Pine tree example:\n" +
            "1) Mature tree produces MALE and FEMALE cones\n" +
            "2) Male cone → produces POLLEN (with sperm cells)\n" +
            "3) Female cone → produces OVULES (with eggs)\n" +
            "4) Wind carries pollen to female cone → POLLINATION\n" +
            "5) Pollen tube grows → FERTILIZATION\n" +
            "6) Zygote → embryo → SEED on cone scale\n" +
            "7) Cone opens; wind disperses seeds\n" +
            "8) Seed germinates → seedling → tree",
          bodyAm:
            "ወንድ ኮን → የአበባ ዱቄት።\n" +
            "ሴት ኮን → እንቁላል።\n" +
            "ንፋስ → ውህደት → ዘር።",
        },
        {
          id: "n7-3",
          title: "Structure of a flower",
          titleAm: "የአበባ አወቃቀር",
          body:
            "FOUR whorls of a flower (outside → inside):\n" +
            "1) SEPALS (calyx) — outer, green, protect bud\n" +
            "2) PETALS (corolla) — colored, attract pollinators\n" +
            "3) STAMENS (androecium) — MALE parts; each = anther + filament\n" +
            "4) CARPELS/PISTILS (gynoecium) — FEMALE parts; each = stigma + style + ovary\n\n" +
            "ANT HER = produces pollen\n" +
            "FILAMENT = supports anther\n" +
            "STIGMA = receives pollen\n" +
            "STYLE = connects stigma to ovary\n" +
            "OVARY = contains OVULES; becomes FRUIT\n" +
            "OVULE = becomes SEED\n" +
            "RECEPTACLE = base holding flower parts",
          bodyAm:
            "4 ክብ: ሴፓል, ፔታል, ስታመን, ፒስቲል።\n" +
            "stamen = ወንድ (anther + filament)።\n" +
            "pistil = ሴት (stigma + style + ovary)።\n" +
            "ovary → ፍሬ; ovule → ዘር።",
        },
        {
          id: "n7-4",
          title: "Pollination",
          titleAm: "የአበባ ዱቄት ስርጭት",
          body:
            "POLLINATION = transfer of POLLEN from ANTHER to STIGMA.\n\n" +
            "TWO TYPES:\n" +
            "• SELF-POLLINATION — pollen to stigma of SAME flower (or same plant)\n" +
            "• CROSS-POLLINATION — pollen to stigma of DIFFERENT plant of same species\n\n" +
            "AGENTS of pollination:\n" +
            "• WIND (maize, grasses) — small dull flowers, much pollen\n" +
            "• INSECTS (bees, butterflies) — colorful, scented, nectar\n" +
            "• BIRDS (sunbirds) — bright red tubular flowers\n" +
            "• WATER (some aquatic plants)\n" +
            "• BATS (night bloomers), MAMMALS\n\n" +
            "CROSS-pollination gives GENETIC VARIATION.",
          bodyAm:
            "የአበባ ዱቄት ስርጭት = anther → stigma።\n" +
            "ራስ-ዱቄት vs ሌላ-ዱቄት።\n" +
            "ነፋስ፣ ነፍሳት፣ ወፎች፣ ውሃ።",
        },
        {
          id: "n7-5",
          title: "Fertilization and seed formation",
          titleAm: "ውህደትና የዘር ምስረታ",
          body:
            "STEPS after pollination:\n" +
            "1) Pollen grain lands on stigma → germinates\n" +
            "2) POLLEN TUBE grows down through style to ovary\n" +
            "3) Two SPERM nuclei travel through pollen tube\n" +
            "4) Sperm enters OVULE → fuses with EGG → ZYGOTE (FERTILIZATION)\n" +
            "5) Zygote → embryo\n" +
            "6) Ovule → SEED\n" +
            "7) Ovary → FRUIT\n" +
            "8) Petals, stamens, sepals wither and fall",
          bodyAm:
            "ፖለን → stigma → pollen tube → ovary → ovule።\n" +
            "ዚጎት → embryo።\n" +
            "ovule → ዘር።\n" +
            "ovary → ፍሬ።",
        },
        {
          id: "n7-6",
          title: "Structure of a seed",
          titleAm: "የዘር አወቃቀር",
          body:
            "A typical seed (e.g., bean — dicot) has:\n" +
            "• SEED COAT (testa) — outer protective layer\n" +
            "• COTYLEDON(S) — seed leaves; store food\n" +
            "• EMBRYO — young plant with:\n" +
            "  - RADICLE — embryonic root (grows into root)\n" +
            "  - PLUMULE — embryonic shoot (grows into stem + leaves)\n" +
            "  - EPICOTYL — stem above cotyledon\n" +
            "• HILUM — scar where seed was attached to ovary\n" +
            "• MICROPYLE — small hole for water entry\n\n" +
            "MONOCOT seed (e.g., maize): ONE cotyledon + ENDOSPERM (food store)",
          bodyAm:
            "ዘር: seed coat, cotyledon, embryo (radicle + plumule), hilum, micropyle።\n" +
            "ሞኖኮት: 1 cotyledon + endosperm።",
        },
        {
          id: "n7-7",
          title: "Dicot vs monocot seeds",
          titleAm: "ዳይኮት እና ሞኖኮት ዘሮች",
          body:
            "| Feature | Dicot seed (bean) | Monocot seed (maize) |\n" +
            "|---------|-------------------|----------------------|\n" +
            "| Cotyledons | 2 | 1 |\n" +
            "| Endosperm | Absent (food in cotyledons) | Present (food in endosperm) |\n" +
            "| Food storage | Cotyledons are fleshy | Endosperm is large |\n" +
            "| Root type | Tap root | Fibrous root |\n" +
            "| Leaf veins | Netted | Parallel |\n" +
            "| Floral parts | 4s or 5s | 3s |",
          bodyAm:
            "ዳይኮት: 2 cotyledon, endosperm የለም።\n" +
            "ሞኖኮት: 1 cotyledon, endosperm አለ።",
        },
        {
          id: "n7-8",
          title: "Seed germination",
          titleAm: "የዘር መብቀል",
          body:
            "GERMINATION = growth of embryo from seed into seedling.\n\n" +
            "REQUIREMENTS for germination:\n" +
            "• WATER (softens seed coat, activates enzymes)\n" +
            "• OXYGEN (for respiration)\n" +
            "• SUITABLE TEMPERATURE (warmth ~20–30°C)\n" +
            "• (Some seeds need LIGHT; some need DARK)\n\n" +
            "TWO TYPES based on cotyledon position:\n" +
            "• EPIGEAL — cotyledons pushed ABOVE soil (e.g., bean, castor)\n" +
            "• HYPOGEAL — cotyledons stay BELOW soil (e.g., maize, pea)",
          bodyAm:
            "ውሃ + O₂ + ሙቀት ያስፈልጋል።\n" +
            "ኤፒጂል — cotyledon ከአፈር በላይ።\n" +
            "ሃይፖጂል — cotyledon ከአፈር በታች።",
        },
        {
          id: "n7-9",
          title: "Fruit and seed dispersal",
          titleAm: "የፍሬና ዘር መበተን",
          body:
            "DISPERSAL = spreading seeds away from parent plant (reduces competition).\n\n" +
            "AGENTS:\n" +
            "• WIND (anemochory) — light seeds with wings/hairs (dandelion, maple)\n" +
            "• WATER (hydrochory) — floating seeds (coconut)\n" +
            "• ANIMALS (zoochory) — eaten and dropped; or sticky (burdock)\n" +
            "• EXPLOSION (autochory) — pods burst (bean, pea)\n" +
            "• GRAVITY (barochory) — heavy fruits fall\n\n" +
            "IMPORTANCE: reduces competition, allows colonization, increases survival",
          bodyAm:
            "በነፋስ፣ በውሃ፣ በእንስሳ፣ በፍንዳታ፣ በስበት።\n" +
            "ውድድር ለመቀነስ።",
        },
        {
          id: "n7-10",
          title: "⚠ Remember trap — Reproduction",
          titleAm: "⚠ አትርሳ — መራባት",
          body:
            "• POLLINATION = pollen transfer; FERTILIZATION = gamete fusion.\n" +
            "• Pollination happens BEFORE fertilization.\n" +
            "• Ovary → fruit; Ovule → seed.\n" +
            "• Self-pollination = same plant; cross = different plants.\n" +
            "• Wind-pollinated flowers: small, dull, lots of pollen.\n" +
            "• Insect-pollinated: colorful, scented, nectar.\n" +
            "• Germination needs water + O₂ + warmth.\n" +
            "• Epigeal = cotyledon above soil; hypogeal = below.\n" +
            "• Dispersal reduces COMPETITION.",
          bodyAm:
            "ዱቄት ስርጭት ≠ ውህደት።\n" +
            "ኦቫሪ → ፍሬ; ኦቫል → ዘር።\n" +
            "ኤፒጂል vs ሃይፖጂል።",
        },
      ],
    },

    // ============================================================
    // 2.8 PLANT RESPONSES (TROPISMS)
    // ============================================================
    {
      id: "n8",
      title: "2.8 Plant Responses (Tropisms)",
      titleAm: "2.8 የእፅዋት ምላሾች (ትሮፒዝም)",
      body:
        "Abatu, plants CANNOT move their whole body — but they CAN grow toward or away from stimuli. This growth response is called a TROPISM.",
      bodyAm:
        "እፅዋት ሙሉ ሰውነታቸውን ማንቀሳቀስ አይችሉም — ግን ወደ ማነቃቂያ ያድጋሉ። ይህ ትሮፒዝም ይባላል።",
      children: [
        {
          id: "n8-1",
          title: "Types of tropisms",
          titleAm: "የትሮፒዝም ዓይነቶች",
          body:
            "• PHOTOTROPISM — response to LIGHT\n" +
            "  - Shoot: POSITIVE (grows toward light)\n" +
            "  - Root: NEGATIVE (grows away from light)\n\n" +
            "• GEOTROPISM (gravitropism) — response to GRAVITY\n" +
            "  - Root: POSITIVE (grows down with gravity)\n" +
            "  - Shoot: NEGATIVE (grows up against gravity)\n\n" +
            "• HYDROTROPISM — response to WATER\n" +
            "  - Root: POSITIVE (grows toward water)\n\n" +
            "• THIGMOTROPISM — response to TOUCH\n" +
            "  - Tendrils wrap around support\n" +
            "  - Example: pea tendrils, climbing vines\n\n" +
            "• CHEMOTROPISM — response to CHEMICALS\n" +
            "  - Pollen tube grows toward ovule's chemicals",
          bodyAm:
            "ፎቶትሮፒዝም — ብርሃን።\n" +
            "ጂኦትሮፒዝም — ስበት።\n" +
            "ሃይድሮትሮፒዝም — ውሃ።\n" +
            "ቲግሞትሮፒዝም — ንክኪ።\n" +
            "ኬሞትሮፒዝም — ኬሚካል።",
        },
        {
          id: "n8-2",
          title: "Auxin — the growth hormone",
          titleAm: "ኦክሲን — የእድገት ሆርሞን",
          body:
            "AUXIN is a plant hormone that controls growth.\n\n" +
            "Effects of auxin:\n" +
            "• Promotes cell ELONGATION\n" +
            "• Concentrated on the DARK side of a shoot → cells on dark side elongate more → shoot BENDS toward light\n" +
            "• High concentration INHIBITS root growth (but low concentration promotes it)\n" +
            "• Used in agriculture: rooting powder, weed killer (high dose), fruit ripening\n\n" +
            "Phototropism mechanism:\n" +
            "1) Light on one side\n" +
            "2) Auxin moves to SHADED side\n" +
            "3) Shaded cells elongate more\n" +
            "4) Shoot BENDS toward light",
          bodyAm:
            "ኦክሲን = የእድገት ሆርሞን።\n" +
            "ጥላ በኩል ይሰበሰባል → ያድጋል → ወደ ብርሃን ይታጠፋል።\n" +
            "ከፍተኛ መጠን → ሥር ይገድባል።",
        },
        {
          id: "n8-3",
          title: "Darwin's phototropism experiment",
          titleAm: "የዳርዊን ሙከራ",
          body:
            "Darwin experimented on grass coleoptiles:\n" +
            "1) Tip intact → bends toward light\n" +
            "2) Tip removed → NO bending\n" +
            "3) Tip covered with opaque cap → NO bending\n" +
            "4) Tip covered with transparent cap → BENDS\n" +
            "5) Base covered → BENDS\n\n" +
            "CONCLUSION: The TIP of the shoot SENSES light and sends a signal (later found to be auxin) that causes bending.\n\n" +
            "This work later led to discovery of auxin.",
          bodyAm:
            "ዳርዊን: ጫፍ ብቻ ብርሃን ይሰማል።\n" +
            "ጫፍ ከተወገደ/ከተሸፈነ → አይታጠፍም።\n" +
            "ሲግናል = ኦክሲን።",
        },
        {
          id: "n8-4",
          title: "⚠ Remember trap — Tropisms",
          titleAm: "⚠ አትርሳ — ትሮፒዝም",
          body:
            "• Root: POSITIVE geotropism (grows DOWN); NEGATIVE phototropism.\n" +
            "• Shoot: NEGATIVE geotropism (grows UP); POSITIVE phototropism.\n" +
            "• Hydrotropism: root grows toward WATER.\n" +
            "• Thigmotropism: response to TOUCH (tendrils).\n" +
            "• Auxin = growth hormone; concentrates on SHADED side.\n" +
            "• High auxin INHIBITS roots; low auxin PROMOTES roots.\n" +
            "• Tropism = directional growth response.",
          bodyAm:
            "ሥር: ወደ ታች (ጂኦ +), ከብርሃን ይርቃል።\n" +
            "ሾት: ወደ ላይ (ጂኦ −), ወደ ብርሃን (+).\n" +
            "ኦክሲን ጥላ በኩል።",
        },
      ],
    },

    // ============================================================
    // 2.9 MEDICINAL PLANTS OF ETHIOPIA
    // ============================================================
    {
      id: "n9",
      title: "2.9 Medicinal Plants of Ethiopia",
      titleAm: "2.9 የኢትዮጵያ መድኃኒት እፅዋት",
      body:
        "Abatu, Ethiopia has a RICH tradition of medicinal plants. This is tested on national exams.",
      bodyAm:
        "ኢትዮጵያ የባህላዊ መድኃኒት እፅዋት ባህል አላት።",
      children: [
        {
          id: "n9-1",
          title: "Common Ethiopian medicinal plants",
          titleAm: "የተለመዱ መድኃኒት እፅዋት",
          body:
            "| Plant (Amharic) | Scientific name | Treats |\n" +
            "|-----------------|-----------------|--------|\n" +
            "| Endod | Phytolacca dodecandra | Schistosomiasis (kills snails) |\n" +
            "| Kosso | Hagenia abyssinica | Tapeworm |\n" +
            "| Tena Adam | Ruta chalepensis | Stomach ache, cold, fever |\n" +
            "| Gesho | Rhamnus prinoides | Cough, stomach, liver |\n" +
            "| Feto | Lepidium sativum | Diarrhea, abdominal pain |\n" +
            "| Damakese | Ocimum lamiifolium | Cold, cough, fever |\n" +
            "| Girawa | Vernonia amygdalina | Malaria, stomach |\n" +
            "| Nech Shinkurt | Allium sativum (garlic) | Infection, blood pressure |\n" +
            "| Besobilla | Ocimum basilicum | Abdominal pain |\n" +
            "| Kitel | Aloe species | Skin wounds, burns |",
          bodyAm:
            "እንዶድ — ሽስቶሶሚያሲስ።\n" +
            "ኮሶ — ታፕዎርም።\n" +
            "ጤና አዳም — ሆድ ቁርጠት።\n" +
            "ጌሾ — ሳል።\n" +
            "ፈጦ — ተቅማጥ።\n" +
            "ዳማከሴ — ሳል።\n" +
            "ግራዋ — ወባ።",
        },
        {
          id: "n9-2",
          title: "Importance of medicinal plants",
          titleAm: "የመድኃኒት እፅዋት ጠቀሜታ",
          body:
            "• CHEAP and ACCESSIBLE for rural communities\n" +
            "• CULTURALLY accepted\n" +
            "• SOURCE of modern drugs (e.g., aspirin from willow, quinine from cinchona)\n" +
            "• PRESERVES biodiversity\n" +
            "• Income for rural households\n\n" +
            "CAUTIONS:\n" +
            "• Not all traditional medicines are safe\n" +
            "• Overharvesting threatens some species\n" +
            "• Need scientific validation",
          bodyAm:
            "ርካሽ፣ ተደራሽ፣ ባህላዊ፣ ዘመናዊ መድኃኒት ምንጭ።\n" +
            "ጥንቃቄ: ሁሉም አይደለም ደህንነቱ የተረጋገጠ።",
        },
        {
          id: "n9-3",
          title: "⚠ Remember trap — Medicinal plants",
          titleAm: "⚠ አትርሳ — መድኃኒት እፅዋት",
          body:
            "• Endod = Phytolacca dodecandra = schistosomiasis snails.\n" +
            "• Kosso = Hagenia abyssinica = tapeworm.\n" +
            "• Tena Adam = Ruta chalepensis = stomach/cold.\n" +
            "• Gesho = Rhamnus prinoides = cough.\n" +
            "• Feto = Lepidium sativum = diarrhea.\n" +
            "• Girawa = Vernonia = malaria.\n" +
            "• Damakese = Ocimum = cold/fever.\n" +
            "• Many modern drugs ORIGINALLY come from plants.",
          bodyAm:
            "እንዶድ = ሽስቶሶሚያሲስ።\n" +
            "ኮሶ = ታፕዎርም።\n" +
            "ጤና አዳም = ሆድ።\n" +
            "ጌሾ = ሳል።\n" +
            "ግራዋ = ወባ።",
        },
      ],
    },

    // ============================================================
    // FORMULA / REFERENCE SHEET
    // ============================================================
    {
      id: "nRef",
      title: "Reference Sheet — Unit 2",
      titleAm: "የማጣቀሻ ሉህ — ክፍል 2",
      body:
        "| Item | Key fact |\n" +
        "|------|----------|\n" +
        "| Bryophytes | No vascular, no seeds — mosses |\n" +
        "| Pteridophytes | Vascular, no seeds — ferns (spores) |\n" +
        "| Gymnosperms | Vascular, seeds in CONES — pines |\n" +
        "| Angiosperms | Vascular, seeds in OVARY — flowers/fruits |\n" +
        "| Monocot | 1 cotyledon, parallel veins, fibrous root |\n" +
        "| Dicot | 2 cotyledons, netted veins, tap root |\n" +
        "| Root function | Absorb water/minerals, anchor |\n" +
        "| Stem function | Support, transport |\n" +
        "| Leaf function | Photosynthesis, gas exchange |\n" +
        "| Xylem | Water up, dead cells, inner |\n" +
        "| Phloem | Food both ways, alive cells, outer |\n" +
        "| Photosynthesis | 6CO₂+6H₂O→C₆H₁₂O₆+6O₂ (chloroplast) |\n" +
        "| Respiration | C₆H₁₂O₆+6O₂→6CO₂+6H₂O+energy (mitochondria) |\n" +
        "| Pollination | Pollen anther → stigma |\n" +
        "| Fertilization | Sperm + egg → zygote |\n" +
        "| Ovary becomes | Fruit |\n" +
        "| Ovule becomes | Seed |\n" +
        "| Germination needs | Water + O₂ + warmth |\n" +
        "| Epigeal | Cotyledon above soil (bean) |\n" +
        "| Hypogeal | Cotyledon below soil (maize) |\n" +
        "| Phototropism | Light response |\n" +
        "| Geotropism | Gravity response |\n" +
        "| Hydrotropism | Water response |\n" +
        "| Thigmotropism | Touch response |\n" +
        "| Auxin | Growth hormone (shaded side) |\n" +
        "| Endod | Schistosomiasis |\n" +
        "| Kosso | Tapeworm |\n" +
        "| Tena Adam | Stomach/cold |\n" +
        "| Gesho | Cough |\n" +
        "| Feto | Diarrhea |",
      bodyAm:
        "ሰንጠረዡን አስታውስ።",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 2",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1) Bryophytes = no vascular; pteridophytes = vascular + spores.\n" +
        "2) Gymnosperm seeds are NAKED (no ovary).\n" +
        "3) Only angiosperms have flowers + fruits.\n" +
        "4) Monocot = 1 cotyledon; Dicot = 2 cotyledons.\n" +
        "5) XYLEM = water UP; PHLOEM = food BOTH ways.\n" +
        "6) Photosynthesis in CHLOROPLAST, respiration in MITOCHONDRIA.\n" +
        "7) Photosynthesis only in LIGHT; respiration ALL the time.\n" +
        "8) Oxygen from photosynthesis comes from WATER.\n" +
        "9) Chlorophyll absorbs red + blue, reflects green.\n" +
        "10) Pollination ≠ fertilization.\n" +
        "11) Ovary → fruit; Ovule → seed.\n" +
        "12) Germination needs water + O₂ + suitable temperature.\n" +
        "13) Epigeal = cotyledon above; Hypogeal = below.\n" +
        "14) Root = positive geotropism; Shoot = positive phototropism.\n" +
        "15) Auxin concentrates on SHADED side.\n" +
        "16) High auxin INHIBITS roots.\n" +
        "17) Girdling proves food travels in PHLOEM.\n" +
        "18) Transpiration pull is main force lifting water.\n" +
        "19) Endod = schistosomiasis; Kosso = tapeworm.\n" +
        "20) Dispersal reduces competition.",
      bodyAm:
        "ወጥመዶቹን ሁሉ አስታውስ።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Which plant group has NO vascular tissue?", options: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"], answer: "0", explanation: "Bryophytes lack vascular tissue." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Which plant group reproduces by spores and HAS vascular tissue?", options: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"], answer: "1", explanation: "Pteridophytes (ferns) = vascular + spores." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Which plant group has seeds in CONES?", options: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"], answer: "2", explanation: "Gymnosperms = naked seeds in cones." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Which plant group has flowers and fruits?", options: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"], answer: "3", explanation: "Angiosperms = flowering plants." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Mosses belong to which group?", options: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"], answer: "0", explanation: "Mosses = bryophytes." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Ferns belong to which group?", options: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"], answer: "1", explanation: "Ferns = pteridophytes." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Pine trees belong to which group?", options: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"], answer: "2", explanation: "Pines = gymnosperms." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Which plant group does maize belong to?", options: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"], answer: "3", explanation: "Maize = angiosperm (flowering plant)." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "How many cotyledons does a monocot have?", options: ["One", "Two", "Three", "None"], answer: "0", explanation: "Monocot = one cotyledon." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "How many cotyledons does a dicot have?", options: ["One", "Two", "Three", "None"], answer: "1", explanation: "Dicot = two cotyledons." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Leaf veins in monocots are:", options: ["Netted", "Parallel", "Spiral", "Absent"], answer: "1", explanation: "Monocots = parallel veins." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Leaf veins in dicots are:", options: ["Netted", "Parallel", "Spiral", "Absent"], answer: "0", explanation: "Dicots = netted veins." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Which root type do monocots have?", options: ["Tap", "Fibrous", "Aerial", "None"], answer: "1", explanation: "Monocots = fibrous root." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Which root type do dicots have?", options: ["Tap", "Fibrous", "Aerial", "None"], answer: "0", explanation: "Dicots = tap root." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "The main function of roots is:", options: ["Photosynthesis", "Absorb water and minerals", "Produce flowers", "Make seeds"], answer: "1", explanation: "Roots = water/mineral absorption + anchorage." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "The main function of stems is:", options: ["Photosynthesis", "Support and transport", "Absorb water", "Make pollen"], answer: "1", explanation: "Stems = support + transport." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "The main site of photosynthesis is the:", options: ["Root", "Stem", "Leaf", "Flower"], answer: "2", explanation: "Leaves = main photosynthetic organ." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "The flat green part of a leaf is called:", options: ["Petiole", "Blade", "Stipule", "Node"], answer: "1", explanation: "Blade = flat part." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "The stalk of a leaf is called:", options: ["Petiole", "Blade", "Stipule", "Node"], answer: "0", explanation: "Petiole = leaf stalk." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "The point where a leaf attaches to the stem is called:", options: ["Internode", "Node", "Axil", "Bud"], answer: "1", explanation: "Node = leaf attachment." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Xylem carries:", options: ["Food", "Water and minerals", "Oxygen", "Hormones"], answer: "1", explanation: "Xylem = water + minerals." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "Phloem carries:", options: ["Water", "Minerals", "Food (sugars)", "Oxygen"], answer: "2", explanation: "Phloem = food." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "Photosynthesis produces:", options: ["CO₂ and water", "Glucose and oxygen", "Protein and fat", "Only ATP"], answer: "1", explanation: "Glucose + O₂." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "Photosynthesis requires:", options: ["Only CO₂", "CO₂, water, light, chlorophyll", "Only oxygen", "Only water"], answer: "1", explanation: "All four needed." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "Photosynthesis happens in:", options: ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"], answer: "1", explanation: "Chloroplast." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "Respiration happens in:", options: ["Mitochondria", "Chloroplast", "Nucleus", "Vacuole"], answer: "0", explanation: "Mitochondria." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Respiration produces:", options: ["Glucose", "Oxygen", "CO₂ + water + energy", "Chlorophyll"], answer: "2", explanation: "CO₂ + H₂O + energy." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Which gas is released during photosynthesis?", options: ["CO₂", "O₂", "N₂", "H₂"], answer: "1", explanation: "O₂ released." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Which gas is released during respiration?", options: ["CO₂", "O₂", "N₂", "H₂"], answer: "0", explanation: "CO₂ released." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "The male part of a flower is:", options: ["Pistil", "Stamen", "Sepal", "Petal"], answer: "1", explanation: "Stamen = male." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "The female part of a flower is:", options: ["Pistil", "Stamen", "Sepal", "Petal"], answer: "0", explanation: "Pistil = female." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "Pollen is produced in the:", options: ["Stigma", "Anther", "Ovary", "Style"], answer: "1", explanation: "Anther = pollen." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "The ovary becomes the:", options: ["Seed", "Fruit", "Flower", "Root"], answer: "1", explanation: "Ovary → fruit." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "The ovule becomes the:", options: ["Seed", "Fruit", "Flower", "Root"], answer: "0", explanation: "Ovule → seed." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "Pollination is transfer of pollen from:", options: ["Stigma to anther", "Anther to stigma", "Ovary to ovule", "Root to leaf"], answer: "1", explanation: "Anther → stigma." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "Which of these is needed for seed germination?", options: ["Only light", "Water, oxygen, suitable temperature", "Only CO₂", "Only soil"], answer: "1", explanation: "Water + O₂ + warmth." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "The response of plants to light is called:", options: ["Geotropism", "Phototropism", "Hydrotropism", "Thigmotropism"], answer: "1", explanation: "Phototropism = light." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "The response of roots to gravity is:", options: ["Positive geotropism", "Negative geotropism", "Phototropism", "Hydrotropism"], answer: "0", explanation: "Roots grow down = positive geotropism." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "The plant hormone that controls growth is:", options: ["Insulin", "Auxin", "Adrenaline", "Thyroxine"], answer: "1", explanation: "Auxin = plant growth hormone." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "Endod is used to control:", options: ["Malaria", "Schistosomiasis", "Tuberculosis", "Cholera"], answer: "1", explanation: "Endod kills schistosomiasis snails." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Which group is called 'naked seed' plants?", options: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"], answer: "2", explanation: "Gymnosperms = naked seeds (no ovary)." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Which plants need water for their sperm to swim to the egg?", options: ["Bryophytes and pteridophytes", "Gymnosperms and angiosperms", "Only angiosperms", "Only gymnosperms"], answer: "0", explanation: "Bryophytes & pteridophytes need water for reproduction." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "A plant with parallel leaf veins is most likely a:", options: ["Dicot", "Monocot", "Gymnosperm", "Bryophyte"], answer: "1", explanation: "Parallel veins = monocot." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "A plant with tap root and netted veins is a:", options: ["Monocot", "Dicot", "Gymnosperm", "Fern"], answer: "1", explanation: "Tap root + netted = dicot." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "The zone of a root where cells lengthen is the:", options: ["Root cap", "Zone of cell division", "Zone of elongation", "Zone of maturation"], answer: "2", explanation: "Elongation = cells lengthen." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "Root hairs function to:", options: ["Store food", "Increase absorption surface area", "Produce flowers", "Transport food"], answer: "1", explanation: "Root hairs = more surface for absorption." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "The central vein of a leaf is the:", options: ["Petiole", "Midrib", "Stipule", "Blade"], answer: "1", explanation: "Midrib = central vein." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "The waxy layer on a leaf that reduces water loss is the:", options: ["Epidermis", "Cuticle", "Stomata", "Palisade"], answer: "1", explanation: "Cuticle = waxy protective layer." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "The main photosynthesis cells in a leaf are:", options: ["Palisade mesophyll", "Spongy mesophyll", "Epidermis", "Guard cells"], answer: "0", explanation: "Palisade = main photosynthesis site." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Stomata are controlled by:", options: ["Guard cells", "Palisade cells", "Xylem", "Phloem"], answer: "0", explanation: "Guard cells open/close stomata." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "In a dicot stem, vascular bundles are arranged:", options: ["Scattered", "In a ring", "In the center", "Randomly"], answer: "1", explanation: "Dicot stem = ring of bundles." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "In a monocot stem, vascular bundles are:", options: ["Scattered", "In a ring", "At the edges", "Absent"], answer: "0", explanation: "Monocot stem = scattered bundles." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "Which tissue carries water upward in plants?", options: ["Phloem", "Xylem", "Cambium", "Epidermis"], answer: "1", explanation: "Xylem = water up." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "Which tissue carries food in both directions?", options: ["Xylem", "Phloem", "Cambium", "Cortex"], answer: "1", explanation: "Phloem = food both directions." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "The main force pulling water up the xylem is:", options: ["Root pressure", "Capillarity", "Transpiration pull", "Gravity"], answer: "2", explanation: "Transpiration pull = main force." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "Transpiration is the loss of:", options: ["Water vapour", "Oxygen", "Food", "Minerals"], answer: "0", explanation: "Water vapour lost." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "The girdling experiment proves food travels through:", options: ["Xylem", "Phloem", "Cambium", "Cortex"], answer: "1", explanation: "Girdling removes phloem → food build-up above ring." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Chlorophyll absorbs mainly which colors?", options: ["Green and yellow", "Red and blue", "Only green", "Only red"], answer: "1", explanation: "Red + blue absorbed; green reflected." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "The light reactions of photosynthesis occur in:", options: ["Stroma", "Thylakoid membranes", "Mitochondria", "Nucleus"], answer: "1", explanation: "Thylakoid membranes = light reactions." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "The Calvin cycle occurs in:", options: ["Stroma", "Thylakoid", "Mitochondria", "Cytoplasm"], answer: "0", explanation: "Stroma = Calvin cycle." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "Which factor is NOT needed for photosynthesis?", options: ["Light", "CO₂", "Oxygen", "Water"], answer: "2", explanation: "O₂ is a PRODUCT, not input." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "The oxygen released in photosynthesis comes from:", options: ["CO₂", "Water", "Glucose", "Air"], answer: "1", explanation: "Oxygen from water splitting." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "Anaerobic respiration in plants produces:", options: ["Lactic acid", "Ethanol and CO₂", "Only CO₂", "Only water"], answer: "1", explanation: "Ethanol + CO₂." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "Anaerobic respiration in animal muscles produces:", options: ["Ethanol", "Lactic acid", "Oxygen", "Glucose"], answer: "1", explanation: "Lactic acid in muscles." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Asexual reproduction in plants produces offspring that are:", options: ["Genetically different", "Genetically identical", "Always male", "Always female"], answer: "1", explanation: "Asexual = clones." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "Which of these is a natural form of asexual reproduction?", options: ["Pollination", "Fertilization", "Runners", "Seed dispersal"], answer: "2", explanation: "Runners = asexual reproduction." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "The function of petals is to:", options: ["Protect bud", "Attract pollinators", "Receive pollen", "Produce seeds"], answer: "1", explanation: "Petals = attract pollinators." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "The function of sepals is to:", options: ["Protect the bud", "Produce pollen", "Attract pollinators", "Form fruit"], answer: "0", explanation: "Sepals protect bud." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "Which part receives pollen?", options: ["Anther", "Stigma", "Style", "Ovary"], answer: "1", explanation: "Stigma receives pollen." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "Self-pollination involves pollen transfer within:", options: ["Different plants", "Same plant", "Different species", "Water only"], answer: "1", explanation: "Self = same plant." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Wind-pollinated flowers usually have:", options: ["Large colorful petals", "Small dull petals with lots of pollen", "Nectar", "Sticky stigma"], answer: "1", explanation: "Wind-pollinated = small, dull, lots of pollen." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "After fertilization, the zygote becomes the:", options: ["Seed", "Embryo", "Fruit", "Flower"], answer: "1", explanation: "Zygote → embryo → seed." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "The radicle of a seed becomes the:", options: ["Shoot", "Root", "Leaf", "Flower"], answer: "1", explanation: "Radicle = root." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "The plumule of a seed becomes the:", options: ["Root", "Shoot", "Cotyledon", "Seed coat"], answer: "1", explanation: "Plumule = shoot." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Monocot seeds have:", options: ["Two cotyledons + endosperm", "One cotyledon + endosperm", "No cotyledon", "Only fruit"], answer: "1", explanation: "Monocot = 1 cotyledon + endosperm." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "Epigeal germination means cotyledons are:", options: ["Above soil", "Below soil", "Underground", "Absent"], answer: "0", explanation: "Epigeal = above soil." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "Hypogeal germination means cotyledons are:", options: ["Above soil", "Below soil", "Absent", "In the air"], answer: "1", explanation: "Hypogeal = below soil." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "Which is NOT an agent of seed dispersal?", options: ["Wind", "Water", "Animals", "Photosynthesis"], answer: "3", explanation: "Photosynthesis is not dispersal." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "Why is seed dispersal important?", options: ["Increases competition", "Reduces competition", "Stops growth", "Kills seeds"], answer: "1", explanation: "Dispersal reduces competition." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "The response of roots to water is called:", options: ["Phototropism", "Geotropism", "Hydrotropism", "Thigmotropism"], answer: "2", explanation: "Hydrotropism = water response." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Which plant group first evolved vascular tissue?", options: ["Bryophytes", "Pteridophytes", "Gymnosperms", "Angiosperms"], answer: "1", explanation: "Pteridophytes = first vascular plants." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "A plant has flowers, seeds in ovary, and two cotyledons. It is a:", options: ["Monocot angiosperm", "Dicot angiosperm", "Gymnosperm", "Fern"], answer: "1", explanation: "Dicot angiosperm." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Which is the correct sequence in a dicot root (outside → center)?", options: ["Epidermis → cortex → endodermis → pericycle → xylem", "Cortex → epidermis → xylem → phloem", "Xylem → cortex → epidermis", "Pith → xylem → epidermis"], answer: "0", explanation: "Epidermis → cortex → endodermis → pericycle → xylem." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Which structure is star-shaped in a dicot root?", options: ["Phloem", "Xylem", "Cortex", "Epidermis"], answer: "1", explanation: "Xylem star-shaped in dicot root." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "If you remove the ring of bark (phloem), food accumulates:", options: ["Below the ring", "Above the ring", "Inside xylem", "In roots"], answer: "1", explanation: "Food builds up ABOVE the ring." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "The main advantage of transpiration is:", options: ["Wastes water", "Pulls water up from roots", "Cools the plant only", "Kills plant"], answer: "1", explanation: "Transpiration pull lifts water." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "At saturation point, further increase in light intensity will:", options: ["Increase photosynthesis more", "Not increase photosynthesis", "Stop photosynthesis", "Kill the plant"], answer: "1", explanation: "Saturation = no further increase." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "If CO₂ is the limiting factor, which will increase photosynthesis?", options: ["More light only", "More water only", "More CO₂", "More oxygen"], answer: "2", explanation: "Adding the limiting factor increases rate." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "The equation 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ represents:", options: ["Respiration", "Photosynthesis", "Fermentation", "Transpiration"], answer: "1", explanation: "Photosynthesis." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "Which would happen to photosynthesis if a plant is kept in darkness?", options: ["It continues normally", "It stops", "It speeds up", "Only respiration stops"], answer: "1", explanation: "Photosynthesis needs light." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "A plant kept in a sealed glass jar in light would:", options: ["Soon run out of CO₂", "Keep photosynthesizing forever", "Increase CO₂", "Die immediately"], answer: "0", explanation: "CO₂ in a sealed jar is limited." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "Which statement about pollination and fertilization is TRUE?", options: ["Fertilization happens first", "Pollination happens first", "They happen at the same time", "They are the same process"], answer: "1", explanation: "Pollination (transfer of pollen) comes before fertilization." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Which is the correct sequence after pollination?", options: ["Fertilization → pollen tube → zygote", "Pollen tube → fertilization → zygote", "Zygote → pollen tube → fertilization", "Pollen tube → zygote → fertilization"], answer: "1", explanation: "Pollen tube grows → fertilization → zygote." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "The seed coat develops from:", options: ["Ovule wall", "Ovary wall", "Anther", "Stigma"], answer: "0", explanation: "Seed coat from ovule (integuments)." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "The fruit develops from:", options: ["Ovary", "Ovule", "Stigma", "Style"], answer: "0", explanation: "Fruit = ovary." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "A seed in which the cotyledons are pushed above the soil is:", options: ["Hypogeal", "Epigeal", "Underground", "Absent"], answer: "1", explanation: "Epigeal = cotyledon above soil." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "A seed in which the cotyledons remain below the soil is:", options: ["Hypogeal", "Epigeal", "Underground", "Absent"], answer: "0", explanation: "Hypogeal = cotyledon below soil." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "Auxin is produced at the:", options: ["Root base", "Shoot tip", "Leaf", "Flower"], answer: "1", explanation: "Auxin made at shoot tip." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "When a shoot bends toward light, auxin is concentrated on the:", options: ["Light side", "Shaded side", "Top", "Bottom"], answer: "1", explanation: "Shaded side." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "In the Darwin experiment, a shoot with the tip covered by opaque cap:", options: ["Bends toward light", "Does NOT bend", "Bends away", "Grows straight up"], answer: "1", explanation: "Opaque cap blocks light → no bending." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "easy", stem: "List the FOUR major groups of plants with one example each.", answer: "1) BRYOPHYTES — mosses, liverworts\n2) PTERIDOPHYTES — ferns, horsetails\n3) GYMNOSPERMS — pines, junipers\n4) ANGIOSPERMS — maize, wheat, beans, all flowering plants", explanation: "Four groups." },
    { id: "q102", type: "short", difficulty: "easy", stem: "List three functions of the root.", answer: "1) Absorb water and minerals from soil\n2) Anchor the plant in soil\n3) Store food (e.g., carrot, beetroot)\n4) Sometimes used for vegetative reproduction", explanation: "Absorb, anchor, store." },
    { id: "q103", type: "short", difficulty: "easy", stem: "List three functions of the stem.", answer: "1) Support leaves, flowers, fruits\n2) Transport water (xylem) and food (phloem)\n3) Store food (e.g., sugarcane, potato)\n4) Some photosynthesis (green stems)\n5) Vegetative reproduction (runners, tubers)", explanation: "Support, transport, store." },
    { id: "q104", type: "short", difficulty: "easy", stem: "List three functions of the leaf.", answer: "1) Photosynthesis (main site)\n2) Gas exchange (via stomata)\n3) Transpiration (loss of water vapour)\n4) Storage (e.g., aloe, onion)\n5) Sometimes used to catch insects (Venus flytrap) or climb (tendrils)", explanation: "Photosynthesis, gas exchange, transpiration." },
    { id: "q105", type: "short", difficulty: "medium", stem: "Compare xylem and phloem in a table.", answer: "| Feature | Xylem | Phloem |\n|---------|-------|--------|\n| Carries | Water + minerals | Sugars (food) |\n| Direction | Upward | Both directions |\n| Cells | Dead at maturity | Alive at maturity |\n| Location | Inside | Outside |\n| Cell types | Tracheids, vessel elements | Sieve tubes, companion cells |", explanation: "Xylem = water up; phloem = food both ways." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Write the full equation for photosynthesis and list its requirements.", answer: "6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂\n\nRequirements (inputs):\n• Carbon dioxide (CO₂)\n• Water (H₂O)\n• Light energy (sunlight)\n• Chlorophyll (green pigment)\n\nProducts:\n• Glucose (C₆H₁₂O₆)\n• Oxygen (O₂)", explanation: "Memorize the equation." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Write the equation for aerobic respiration in plants.", answer: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy (ATP)\n\n• Happens in mitochondria\n• Uses oxygen\n• Releases much energy\n• Happens all the time (day and night)", explanation: "Reverse of photosynthesis." },
    { id: "q108", type: "short", difficulty: "medium", stem: "Distinguish between photosynthesis and respiration.", answer: "| Feature | Photosynthesis | Respiration |\n|---------|----------------|-------------|\n| Purpose | Make food | Release energy |\n| Location | Chloroplast | Mitochondria |\n| Needs light | Yes | No |\n| Gas used | CO₂ | O₂ |\n| Gas produced | O₂ | CO₂ |\n| When | Only in light | Day and night |\n| Energy | Stores | Releases |", explanation: "Opposites in most respects." },
    { id: "q109", type: "short", difficulty: "medium", stem: "Describe the internal structure of a leaf.", answer: "From top to bottom:\n1) CUTICLE — waxy, prevents water loss\n2) UPPER EPIDERMIS — protective layer\n3) PALISADE MESOPHYLL — tall, tightly packed; main photosynthesis\n4) SPONGY MESOPHYLL — loosely packed; gas exchange\n5) VEINS — xylem + phloem\n6) LOWER EPIDERMIS — with stomata for gas exchange\n7) STOMATA — flanked by guard cells", explanation: "Cuticle → upper epidermis → palisade → spongy → lower epidermis + stomata." },
    { id: "q110", type: "short", difficulty: "medium", stem: "List the parts of a typical flower and their functions.", answer: "• SEPALS — protect the bud\n• PETALS — attract pollinators\n• STAMEN (anther + filament) — male part; anther produces pollen\n• PISTIL/CARPEL (stigma + style + ovary) — female part\n  - Stigma receives pollen\n  - Style connects stigma to ovary\n  - Ovary contains ovules; becomes fruit\n• RECEPTACLE — base holding all parts", explanation: "Four whorls." },
    { id: "q111", type: "short", difficulty: "medium", stem: "Distinguish between pollination and fertilization.", answer: "POLLINATION:\n• Transfer of pollen from anther to stigma\n• Happens BEFORE fertilization\n• Done by wind, insects, birds, water\n\nFERTILIZATION:\n• Fusion of male sperm and female egg\n• Happens AFTER pollination\n• Forms a zygote\n\nSequence: Pollination → pollen tube growth → fertilization → seed formation", explanation: "Pollination first; fertilization later." },
    { id: "q112", type: "short", difficulty: "medium", stem: "List the requirements for seed germination.", answer: "1) WATER — softens seed coat, activates enzymes\n2) OXYGEN — for respiration\n3) SUITABLE TEMPERATURE — warmth (~20–30°C)\n4) (Some seeds also need light; some need dark)\n\nNOT needed: soil (seeds can germinate on wet paper in the lab)", explanation: "Water + O₂ + warmth." },
    { id: "q113", type: "short", difficulty: "medium", stem: "What is the difference between epigeal and hypogeal germination?", answer: "EPIGEAL:\n• Cotyledons pushed ABOVE soil\n• Example: bean, castor\n\nHYPOGEAL:\n• Cotyledons remain BELOW soil\n• Example: maize, pea", explanation: "Epigeal = above; hypogeal = below." },
    { id: "q114", type: "short", difficulty: "hard", stem: "Describe the process of fertilization in a flowering plant.", answer: "1) Pollen grain lands on stigma and germinates\n2) Pollen tube grows down through style to ovary\n3) Sperm nuclei travel through pollen tube\n4) Sperm enters ovule and fuses with egg → ZYGOTE (fertilization)\n5) Zygote → embryo\n6) Ovule → seed\n7) Ovary → fruit", explanation: "Pollen tube → fusion → zygote → seed." },
    { id: "q115", type: "short", difficulty: "hard", stem: "Describe Darwin's phototropism experiment and its conclusion.", answer: "Darwin used grass coleoptiles:\n1) Tip intact → bends toward light\n2) Tip removed → no bending\n3) Tip covered with OPAQUE cap → no bending\n4) Tip covered with TRANSPARENT cap → bends\n5) Base covered → bends\n\nCONCLUSION: The TIP of the shoot SENSES light and sends a signal to cause bending (later found to be AUXIN).", explanation: "Tip senses light; auxin causes bending." },
    { id: "q116", type: "short", difficulty: "hard", stem: "Explain what happens if you remove a ring of bark (phloem) from a plant stem.", answer: "1) Phloem is removed → sugars cannot pass down\n2) Food accumulates ABOVE the ring\n3) Swelling (gall) forms above the ring\n4) Xylem is deeper (not removed) → water still goes up → leaves survive for a time\n\nCONCLUSION: This proves that FOOD travels through the PHLOEM, not the xylem.", explanation: "Girdling = food builds up above ring." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Explain how auxin causes a shoot to bend toward light.", answer: "1) Light shines from one side\n2) Auxin (growth hormone) moves to the SHADED side\n3) Higher auxin on shaded side causes cells there to ELONGATE more\n4) The elongated shaded side pushes the shoot to bend TOWARD light\n5) Result: shoot bends toward light (positive phototropism)", explanation: "Auxin on shaded side → cells elongate → bend toward light." },
    { id: "q118", type: "short", difficulty: "hard", stem: "List the agents of seed dispersal and how each works.", answer: "1) WIND — light seeds with wings/hairs (dandelion, maple)\n2) WATER — floating seeds (coconut)\n3) ANIMALS — seeds eaten/dropped or sticky (burdock); birds carry seeds\n4) EXPLOSION — pods burst (bean, pea)\n5) GRAVITY — heavy fruits fall\n\nIMPORTANCE: Reduces competition, allows colonization, increases survival.", explanation: "Wind, water, animals, explosion, gravity." },
    { id: "q119", type: "short", difficulty: "hard", stem: "Give five Ethiopian medicinal plants and what they treat.", answer: "1) ENDOD (Phytolacca dodecandra) — schistosomiasis (kills snails)\n2) KOSSO (Hagenia abyssinica) — tapeworm\n3) TENA ADAM (Ruta chalepensis) — stomach ache, cold\n4) GESHO (Rhamnus prinoides) — cough, stomach\n5) FETO (Lepidium sativum) — diarrhea, abdominal pain\n6) GIRAWA (Vernonia amygdalina) — malaria\n7) DAMAKESE (Ocimum lamiifolium) — cold, fever", explanation: "Know at least five." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Explain why animals cannot live without plants.", answer: "1) PLANTS PRODUCE OXYGEN (photosynthesis) — animals need O₂ for respiration\n2) PLANTS ARE THE BASE OF FOOD CHAINS — animals eat plants or eat plant-eaters\n3) PLANTS REMOVE CO₂ from the atmosphere\n4) PLANTS FORM HABITATS and provide shelter\n5) PLANTS PRODUCE fruits/seeds that feed animals\n6) PLANTS SUPPORT THE WATER CYCLE (transpiration → rain)\n\nWithout plants, animals would run out of oxygen, food, and habitat.", explanation: "Oxygen + food + habitat." },
  ],
};