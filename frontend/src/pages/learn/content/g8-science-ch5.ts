import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 GENERAL SCIENCE — UNIT 5
// ECOSYSTEM AND CONSERVATION OF NATURAL RESOURCES
// Source: AAEB Grade 8 General Science Student Textbook (pp. 127–163)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8ScienceCh5: Chapter = {
  id: "ch5",
  number: 5,
  title: "Ecosystem and Conservation of Natural Resources",
  titleAm: "ሥነ-ምህዳር እና የተፈጥሮ ሀብቶች ጥበቃ",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. What is an Ecosystem?",
      titleAm: "ሥነ-ምህዳር ምንድን ነው?",
      body:
        "Banchi, ecology is the branch of biology that studies the interaction between organisms and their habitat. An ecosystem is the sum of all living (biotic) and non-living (abiotic) components in a given habitat.",
      bodyAm:
        "ባንቺ፣ ኢኮሎጂ በባዮሎጂ ውስጥ የፍጥረታትን እና የመኖሪያቸውን መስተጋብር የሚያጠና የትምህርት ክፍል ነው። ሥነ-ምህዳር ማለት በአንድ መኖሪያ ውስጥ ያሉ ሕያዋን (ባዮቲክ) እና ሕያዋን ያልሆኑ (አባዮቲክ) አካላት ስብስብ ነው።",
      children: [
        {
          id: "n1-1",
          title: "Biotic components (living)",
          titleAm: "ባዮቲክ አካላት (ሕያዋን)",
          body:
            "All living organisms in an ecosystem: plants, animals, bacteria, algae, fungi.",
          bodyAm:
            "በሥነ-ምህዳሩ ውስጥ ያሉ ሁሉም ሕያዋን ፍጥረታት፡ ዕፅዋት፣ እንስሳት፣ ባክቴሪያ፣ አልጌ፣ ፈንገሶች።",
        },
        {
          id: "n1-2",
          title: "Abiotic components (non-living)",
          titleAm: "አባዮቲክ አካላት (ሕያዋን ያልሆኑ)",
          body:
            "1) Water — most important; habitat + drinking + irrigation\n" +
            "2) Sunlight — primary energy source for photosynthesis\n" +
            "3) Air — mixture of O₂, N₂, CO₂, water vapor\n" +
            "4) Soil — controls vegetation growth (fertility, pH)\n" +
            "5) Temperature — affects organism distribution\n" +
            "6) Land topography — arrangement of land",
          bodyAm:
            "1) ውሃ — በጣም አስፈላጊ።\n2) የፀሐይ ብርሃን — ለፎቶሲንተሲስ ዋና ምንጭ።\n3) አየር — O₂, N₂, CO₂።\n4) አፈር — የዕፅዋት እድገትን ይቆጣጠራል።\n5) ሙቀት — የፍጥረታትን ስርጭት ይነካል።\n6) የመሬት አቀማመጥ።",
        },
        {
          id: "n1-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: bacteria, fungi, and algae are BIOTIC (they are living). Water, air, sunlight, soil are ABIOTIC. Do not put water in the biotic group just because it supports life.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ባክቴሪያ፣ ፈንገሶች፣ አልጌ ባዮቲክ ናቸው። ውሃ፣ አየር፣ የፀሐይ ብርሃን፣ አፈር አባዮቲክ ናቸው።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Biological Interactions",
      titleAm: "ባዮሎጂያዊ መስተጋብሮች",
      body:
        "Banchi, organisms interact with each other in many ways. There are TWO big categories: INTRA-specific (same species) and INTER-specific (different species).",
      bodyAm:
        "ባንቺ፣ ፍጥረታት በብዙ መንገዶች ይገባበራሉ። ሁለት ትላልቅ ምድቦች አሉ፡ ኢንትራ-ስፔሲፊክ (ተመሳሳይ ዝርያ) እና ኢንተር-ስፔሲፊክ (የተለያዩ ዝርያዎች)።",
      children: [
        {
          id: "n2-1",
          title: "Intra-specific vs Inter-specific",
          titleAm: "ኢንትራ እና ኢንተር",
          body:
            "INTRA-specific = between SAME species. Example: two lions fighting for territory.\n\n" +
            "INTER-specific = between DIFFERENT species. Example: hyena and lion competing for food.",
          bodyAm:
            "ኢንትራ = ተመሳሳይ ዝርያ መካከል። ምሳሌ፡ ሁለት አንበሶች።\nኢንተር = የተለያዩ ዝርያዎች መካከል። ምሳሌ፡ ጅብ እና አንበሳ።",
        },
        {
          id: "n2-2",
          title: "Types of symbiotic relationships",
          titleAm: "የሲምባዮሲስ ዓይነቶች",
          body:
            "1) MUTUALISM — both benefit (+/+), obligatory.\n" +
            "Example: fungi + algae (lichen).\n\n" +
            "2) COMMENSALISM — one benefits, other neither helped nor harmed (+/0).\n" +
            "Example: big tree + epiphytes.\n\n" +
            "3) PARASITISM — one benefits, other harmed (+/−).\n" +
            "Example: human + tapeworm.\n\n" +
            "4) PROTOCOOPERATION — both benefit (+/+), NOT obligatory.\n" +
            "Example: crocodile + teeth-cleaning bird.\n\n" +
            "5) COMPETITION — both harmed (−/−).\n" +
            "Example: two plants competing for sunlight.\n\n" +
            "6) PREDATION — predator benefits, prey harmed (+/−).\n" +
            "Example: lion + zebra.",
          bodyAm:
            "1) ሙቱዋሊዝም (+/+): ሁለቱም ይጠቀማሉ።\n2) ኮመንሳሊዝም (+/0): አንዱ ይጠቀማል፣ ሌላው ግድ የለውም።\n3) ፓራሲቲዝም (+/−): አንዱ ይጠቀማል፣ ሌላው ይጎዳል።\n4) ፕሮቶኮኦፐሬሽን (+/+) ግዴታ ያልሆነ።\n5) ውድድር (−/−)።\n6) አዳኝነት (+/−)።",
        },
        {
          id: "n2-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: PARASITISM (+/−) is NOT the same as PREDATION (+/−). In parasitism, the parasite usually stays on/in the host. In predation, the predator kills and eats the prey. Also, don't confuse COMMENSALISM (+/0) with MUTUALISM (+/+).",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ፓራሲቲዝም ከአዳኝነት ጋር አይመሳሰልም። ኮመንሳሊዝም ከሙቱዋሊዝም ጋር አይደባለቅ።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Trophic Relationships — Food Chains and Webs",
      titleAm: "የምግብ ሰንሰለቶች",
      body:
        "Banchi, organisms are grouped by what they eat: AUTOTROPHS make their own food, HETEROTROPHS feed on others.",
      bodyAm:
        "ባንቺ፣ ፍጥረታት በሚመገቡት ምግብ ይመደባሉ፡ አውቶትሮፎች የራሳቸውን ምግብ ያመርታሉ፣ ሄትሮትሮፎች በሌሎች ላይ ይመገባሉ።",
      children: [
        {
          id: "n3-1",
          title: "Autotrophs — producers",
          titleAm: "አውቶትሮፎች",
          body:
            "Two types:\n" +
            "• PHOTO-autotrophs — use SUNLIGHT (green plants, algae, photosynthetic bacteria).\n" +
            "• CHEMO-autotrophs — use CHEMICAL energy (nitrifying bacteria).\n\n" +
            "Also called PRODUCERS.",
          bodyAm:
            "ሁለት ዓይነቶች፡ ፎቶ-አውቶትሮፎች (በፀሐይ ብርሃን) እና ኬሞ-አውቶትሮፎች (በኬሚካል ጉልበት)። አምራቾች ይባላሉ።",
        },
        {
          id: "n3-2",
          title: "Heterotrophs — consumers",
          titleAm: "ሄትሮትሮፎች",
          body:
            "Cannot make their own food. Includes:\n" +
            "• Herbivores — eat plants.\n" +
            "• Carnivores — eat animals.\n" +
            "• Omnivores — eat plants + animals.\n" +
            "• Decomposers — break down dead matter (bacteria, fungi).",
          bodyAm:
            "የራሳቸውን ምግብ ማዘጋጀት አይችሉም። ያካትታል፡ ሣር በላይ፣ ሥጋ በላይ፣ ሁሉን በላይ፣ አፈር በላይ።",
        },
        {
          id: "n3-3",
          title: "Food chain — 4 trophic levels",
          titleAm: "የምግብ ሰንሰለት",
          body:
            "Trophic level = position in a food chain.\n\n" +
            "1) PRODUCER (1st level) — plants. Sun is the main source of energy.\n" +
            "2) PRIMARY CONSUMER (2nd level) — herbivores/omnivores eat producers.\n" +
            "3) SECONDARY CONSUMER (3rd level) — carnivores eat herbivores.\n" +
            "4) TERTIARY CONSUMER (4th level) — carnivores eat other carnivores.\n\n" +
            "Example: Wheat → Goat → Tiger → Lion.",
          bodyAm:
            "1) አምራች (የ1ኛ ደረጃ) — ዕፅዋት።\n2) የመጀመሪያ ተጠቃሚ (2ኛ) — ሣር በላይ።\n3) ሁለተኛ ተጠቃሚ (3ኛ) — ሥጋ በላይ።\n4) ሦስተኛ ተጠቃሚ (4ኛ) — ሌሎች ሥጋ በላዮችን ይበላል።\nምሳሌ፡ ስንዴ → ፍየል → ነብር → አንበሳ።",
        },
        {
          id: "n3-4",
          title: "Food web — more complex",
          titleAm: "የምግብ ድር",
          body:
            "A food WEB is a complex feeding relationship consisting of MANY interconnected food chains.\n\n" +
            "Key difference: In a food chain, energy flows in ONE direction. In a food web, there are MANY chains connected together.",
          bodyAm:
            "የምግብ ድር = ብዙ የምግብ ሰንሰለቶች የተገናኙበት ውስብስብ ግንኙነት።",
        },
        {
          id: "n3-5",
          title: "Trophic pyramids",
          titleAm: "የትሮፊክ ፒራሚዶች",
          body:
            "1) Pyramid of NUMBERS — total number of organisms at each trophic level.\n" +
            "2) Pyramid of BIOMASS — mass of organisms at each level.\n" +
            "3) Pyramid of ENERGY — energy at each level. Energy is not recycled — it flows.\n\n" +
            "Note: The number of organisms DECREASES from bottom to top.",
          bodyAm:
            "1) የቁጥር ፒራሚድ — ቁጥር።\n2) የባዮማስ ፒራሚድ — ክብደት።\n3) የጉልበት ፒራሚድ — ጉልበት።\nቁጥሩ ከታች ወደ ላይ ይቀንሳል።",
        },
        {
          id: "n3-6",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: energy FLOWS (does not recycle) because it comes from the Sun and is eventually lost as heat. Nutrients CYCLE (recycle) through the ecosystem. Energy flows, nutrients cycle.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ጉልበት ይፈሳል (አይዘዋወርም) — ከፀሐይ ይመጣል፣ በሙቀት ይጠፋል። ንጥረ ነገሮች ይዘዋወራሉ።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Nutrient Cycles",
      titleAm: "የንጥረ ነገር ዑደቶች",
      body:
        "Banchi, nutrients move from the environment to organisms and back to the environment. This is called a NUTRIENT CYCLE. Decomposers play a big role in all cycles.",
      bodyAm:
        "ባንቺ፣ ንጥረ ነገሮች ከአካባቢው ወደ ፍጥረታት እና ወደ አካባቢው ይመለሳሉ። ይህ የንጥረ ነገር ዑደት ይባላል።",
      children: [
        {
          id: "n4-1",
          title: "Nitrogen cycle — 4 steps",
          titleAm: "የናይትሮጅን ዑደት",
          body:
            "1) NITROGEN FIXATION — N₂ from air → usable form by bacteria.\n" +
            "2) AMMONIFICATION (mineralization) — decomposers convert organic N to ammonium.\n" +
            "3) NITRIFICATION — ammonia → nitrites (by Nitrosomonas) → nitrates (by Nitrobacter). Plants absorb nitrates.\n" +
            "4) DENITRIFICATION — nitrates → N₂ gas (by Pseudomonas and Clostridium) under anaerobic conditions.",
          bodyAm:
            "1) ናይትሮጅን ማስተካከል።\n2) አሞኒፊኬሽን።\n3) ናይትሪፊኬሽን።\n4) ዲናይትሪፊኬሽን።",
        },
        {
          id: "n4-2",
          title: "Other cycles",
          titleAm: "ሌሎች ዑደቶች",
          body:
            "• OXYGEN cycle — driven mainly by PHOTOSYNTHESIS.\n" +
            "• CARBON cycle — carbon moves: atmosphere → plants → animals → soil → atmosphere → ocean.\n" +
            "• HYDROGEN cycle — starts with evaporation of ocean water.\n" +
            "• WATER cycle — continuous movement of water: evaporation → clouds → rain/snow → rivers → ocean → repeat.",
          bodyAm:
            "• ኦክሲጅን ዑደት — በፎቶሲንተሲስ ይመራል።\n• ካርቦን ዑደት።\n• ሃይድሮጅን ዑደት።\n• የውሃ ዑደት።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Conservation of Natural Resources",
      titleAm: "የተፈጥሮ ሀብቶች ጥበቃ",
      body:
        "Banchi, conservation is the care and protection of natural resources so they persist for future generations. Resources are either renewable or non-renewable.",
      bodyAm:
        "ባንቺ፣ ጥበቃ ማለት የተፈጥሮ ሀብቶችን ለወደፊት ትውልድ ለማስቀረት መንከባከብ ነው።",
      children: [
        {
          id: "n5-1",
          title: "Renewable vs Non-renewable",
          titleAm: "ታዳሽ እና ታዳሽ ያልሆኑ",
          body:
            "RENEWABLE — can be produced, reused, replaced:\n" +
            "Examples: vegetation, animals, sunlight, water, air, soil.\n\n" +
            "NON-RENEWABLE — cannot be easily made/produced if used:\n" +
            "Examples: petroleum, coal, minerals, natural gas.",
          bodyAm:
            "ታዳሽ፡ ዕፅዋት፣ እንስሳት፣ የፀሐይ ብርሃን፣ ውሃ፣ አየር።\nታዳሽ ያልሆኑ፡ ነዳጅ፣ ከሰል፣ ማዕድኖች።",
        },
        {
          id: "n5-2",
          title: "Soil",
          titleAm: "አፈር",
          body:
            "Soil = mixture of broken rocks, minerals, living organisms, air, water, and HUMUS (decaying organic matter).\n\n" +
            "Three types:\n" +
            "• LOAM — most fertile; best for plants. Holds water well.\n" +
            "• SANDY — poor water holding; dries quickly.\n" +
            "• CLAY — holds water most; heavy and dense.",
          bodyAm:
            "አፈር = የተሰበሩ ድንጋዮች፣ ማዕድኖች፣ ሕያዋን ፍጥረታት፣ አየር፣ ውሃ እና ሁመስ።\n• ሎም — በጣም ለም።\n• አሸዋማ — ውሃ አይይዝም።\n• ሸክላ — ብዙ ውሃ ይይዛል።",
        },
        {
          id: "n5-3",
          title: "Soil conservation methods",
          titleAm: "የአፈር ጥበቃ ዘዴዎች",
          body:
            "1) AFFORESTATION / REFORESTATION — roots hold soil.\n" +
            "2) TERRACING — stepped fields on hillsides slow water flow.\n" +
            "3) CONTOUR PLOUGHING — plough across slopes, not up-down.\n" +
            "4) CROP ROTATION — plant different crops over years to maintain fertility.\n" +
            "5) SHELTER BELTS — trees at field edges stop wind erosion.\n" +
            "6) CHECK DAMS — trap silt.\n" +
            "7) STRIP CROPPING — two or more crops in the same field.",
          bodyAm:
            "1) አፎረስቴሽን/ሪፎረስቴሽን።\n2) ቴራሲንግ።\n3) ኮንቱር እርሻ።\n4) ሰብል ማሽከርከር።\n5) ሼልተር ቤልት።\n6) ቼክ ዳምስ።\n7) ስትሪፕ ክሮፒንግ።",
        },
        {
          id: "n5-4",
          title: "Water and air",
          titleAm: "ውሃ እና አየር",
          body:
            "WATER is the main component of living cells. Water conservation: cover vegetation, contour ploughing, terracing, check dams, prevent pollution.\n\n" +
            "AIR = 78% N₂ + 21% O₂ + 0.93% Ar + 0.04% CO₂ + water vapor + dust.\n" +
            "Air pollution effects: global warming, global dimming, acid rain, health problems.",
          bodyAm:
            "ውሃ የሕያዋን ሴሎች ዋና አካል ነው።\nአየር = 78% N₂ + 21% O₂ + 0.93% Ar + 0.04% CO₂።",
        },
        {
          id: "n5-5",
          title: "Forests and biodiversity",
          titleAm: "ደኖች እና ብዝሃ ሕይወት",
          body:
            "FOREST = complex ecosystem mainly of trees. Ethiopia example: HARENNA FOREST (southeast).\n" +
            "Uses: clean air, cool temperature, prevent erosion, produce O₂, absorb CO₂, provide habitat.\n\n" +
            "BIODIVERSITY = collection of life and habitat in an ecosystem.\n" +
            "Values: economic, ecological, recreation, cultural, scientific.",
          bodyAm:
            "ደን = በዋናነት ዛፎች ያሉበት ውስብስብ ሥነ-ምህዳር። የኢትዮጵያ ምሳሌ፡ ሀረና ደን።\nብዝሃ ሕይወት = የሕይወት እና የመኖሪያ ስብስብ።",
        },
        {
          id: "n5-6",
          title: "In-situ vs Ex-situ conservation",
          titleAm: "ኢን-ሲቱ እና ኤክስ-ሲቱ ጥበቃ",
          body:
            "IN-SITU = conservation IN the natural habitat.\n" +
            "Examples: national parks, biosphere reserves, sanctuaries.\n\n" +
            "EX-SITU = conservation OUTSIDE the natural habitat.\n" +
            "Examples: zoos, aquariums, seed banks, botanical gardens.",
          bodyAm:
            "ኢን-ሲቱ = በተፈጥሮ መኖሪያ ውስጥ ጥበቃ።\nኤክስ-ሲቱ = ከተፈጥሮ መኖሪያ ውጭ ጥበቃ።",
        },
        {
          id: "n5-7",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: National parks, sanctuaries = IN-SITU. Zoos, aquariums, seed banks, botanical gardens = EX-SITU. Do not swap.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ብሔራዊ ፓርኮች = ኢን-ሲቱ። ዙ እና አኳሪየም = ኤክስ-ሲቱ።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Exam Strategy — Unit 5",
      titleAm: "የፈተና ስልት — ክፍል 5",
      body:
        "Banchi, five quick checks before answering Unit 5 questions.",
      bodyAm:
        "ባንቺ፣ የክፍል 5 ጥያቄዎችን ከመመለስሽ በፊት አምስት ፈጣን ቼኮች።",
      children: [
        {
          id: "n6-1",
          title: "Check 1 — Biotic or abiotic?",
          titleAm: "ቼክ 1 — ባዮቲክ ወይስ አባዮቲክ?",
          body:
            "Living (plants, animals, bacteria) = biotic. Non-living (water, air, sunlight) = abiotic.",
          bodyAm:
            "ሕያዋን = ባዮቲክ. ሕያዋን ያልሆኑ = አባዮቲክ.",
        },
        {
          id: "n6-2",
          title: "Check 2 — Which interaction?",
          titleAm: "ቼክ 2 — የትኛው መስተጋብር?",
          body:
            "Both benefit (+/+) = mutualism or protocooperation. One benefits, one unharmed (+/0) = commensalism. One benefits, one harmed (+/−) = parasitism or predation. Both harmed (−/−) = competition.",
          bodyAm:
            "(+/+) = ሙቱዋሊዝም. (+/0) = ኮመንሳሊዝም. (+/−) = ፓራሲቲዝም/አዳኝነት. (−/−) = ውድድር.",
        },
        {
          id: "n6-3",
          title: "Check 3 — Which trophic level?",
          titleAm: "ቼክ 3 — የትኛው ትሮፊክ ደረጃ?",
          body:
            "Plants = producer (1st). Herbivores = primary consumer (2nd). Carnivores = secondary (3rd). Top carnivores = tertiary (4th).",
          bodyAm:
            "ዕፅዋት = አምራች (1). ሣር በላይ = የመጀመሪያ ተጠቃሚ (2). ሥጋ በላይ = ሁለተኛ (3).",
        },
        {
          id: "n6-4",
          title: "Check 4 — Energy or nutrients?",
          titleAm: "ቼክ 4 — ጉልበት ወይስ ንጥረ ነገር?",
          body:
            "Energy FLOWS (from Sun, lost as heat). Nutrients CYCLE (recycled through ecosystem).",
          bodyAm:
            "ጉልበት ይፈሳል. ንጥረ ነገሮች ይዘዋወራሉ.",
        },
        {
          id: "n6-5",
          title: "Check 5 — In-situ or ex-situ?",
          titleAm: "ቼክ 5 — ኢን-ሲቱ ወይስ ኤክስ-ሲቱ?",
          body:
            "In natural habitat = in-situ (national parks). Outside natural habitat = ex-situ (zoos, seed banks).",
          bodyAm:
            "በተፈጥሮ መኖሪያ = ኢን-ሲቱ. ከተፈጥሮ ውጭ = ኤክስ-ሲቱ.",
        },
      ],
    },
  ],

  // ============================================================
  // QUESTIONS — Batch 1: Q1–Q60
  // ============================================================
  questions: [
    // ---------- EASY MCQ (Q1–Q25) ----------
    {
      id: "q1",
      type: "mcq",
      difficulty: "easy",
      stem: "What is an ecosystem?",
      options: [
        "Only living organisms",
        "The sum of all living and non-living components in a habitat",
        "Only plants",
        "Only the physical environment",
      ],
      answer: "1",
      explanation:
        "An ecosystem = all living (biotic) AND non-living (abiotic) components in a habitat.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the branch of biology that studies interactions between organisms and their habitat?",
      options: ["Anatomy", "Physiology", "Ecology", "Genetics"],
      answer: "2",
      explanation:
        "ECOLOGY is the study of interactions between organisms and their habitat.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a BIOTIC component?",
      options: ["Sunlight", "Water", "Bacteria", "Air"],
      answer: "2",
      explanation:
        "Bacteria are LIVING — biotic. Sunlight, water, and air are abiotic.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is an ABIOTIC component?",
      options: ["Plants", "Fungi", "Bacteria", "Sunlight"],
      answer: "3",
      explanation:
        "Sunlight is NON-LIVING — abiotic. Plants, fungi, and bacteria are biotic.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "The main source of energy for photosynthesis is:",
      options: ["Water", "Soil", "Sunlight", "Air"],
      answer: "2",
      explanation:
        "SUNLIGHT is the primary energy source for photosynthesis.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the MOST important abiotic component of an ecosystem?",
      options: ["Water", "Rocks", "Sand", "Dust"],
      answer: "0",
      explanation:
        "WATER is the most important abiotic component — it serves as a habitat, drinking source, and for irrigation.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "An interaction between members of the SAME species is called:",
      options: ["Inter-specific", "Intra-specific", "Symbiosis", "Parasitism"],
      answer: "1",
      explanation:
        "INTRA-specific = between SAME species. INTER-specific = between DIFFERENT species.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "An interaction between members of DIFFERENT species is called:",
      options: ["Intra-specific", "Inter-specific", "Same-species", "Neutral"],
      answer: "1",
      explanation:
        "INTER-specific = between DIFFERENT species.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "Which interaction benefits BOTH organisms?",
      options: ["Parasitism", "Commensalism", "Mutualism", "Predation"],
      answer: "2",
      explanation:
        "MUTUALISM benefits both organisms (+/+). Example: fungi + algae (lichen).",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "Which interaction benefits ONE and does NOT harm the other?",
      options: ["Mutualism", "Commensalism", "Parasitism", "Competition"],
      answer: "1",
      explanation:
        "COMMENSALISM = one benefits, the other neither helped nor harmed (+/0).",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "Which interaction benefits one and HARMS the other?",
      options: ["Mutualism", "Commensalism", "Parasitism", "Protocooperation"],
      answer: "2",
      explanation:
        "PARASITISM = one benefits (parasite), one is harmed (host). Example: human + tapeworm.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "An organism that makes its own food is called:",
      options: ["Heterotroph", "Autotroph", "Consumer", "Decomposer"],
      answer: "1",
      explanation:
        "AUTOTROPH = organism that makes its own food (also called producer).",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "An organism that feeds on others is called:",
      options: ["Autotroph", "Heterotroph", "Producer", "Photoautotroph"],
      answer: "1",
      explanation:
        "HETEROTROPH = organism that feeds on other organisms (also called consumer).",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "Green plants are:",
      options: ["Consumers", "Producers", "Decomposers", "Parasites"],
      answer: "1",
      explanation:
        "Green plants are PRODUCERS — they make their own food via photosynthesis.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "The FIRST trophic level in a food chain is the:",
      options: ["Producer", "Primary consumer", "Secondary consumer", "Tertiary consumer"],
      answer: "0",
      explanation:
        "The 1st trophic level = PRODUCER (green plants).",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "The 2nd trophic level is the:",
      options: ["Producer", "Primary consumer", "Secondary consumer", "Tertiary consumer"],
      answer: "1",
      explanation:
        "The 2nd trophic level = PRIMARY CONSUMER (herbivores and omnivores).",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "What is a food chain?",
      options: [
        "A direct and simple feeding system",
        "A kind of rock",
        "A group of organisms in a lake",
        "A chain made of iron",
      ],
      answer: "0",
      explanation:
        "A food chain is a DIRECT and SIMPLE feeding system that shows the transfer of energy from one organism to another.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "What is a food web?",
      options: [
        "A single food chain",
        "A complex feeding relationship of many interconnected food chains",
        "A spider web",
        "A group of plants",
      ],
      answer: "1",
      explanation:
        "A FOOD WEB is a complex feeding relationship made of MANY interconnected food chains.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "Organisms that break down dead matter are called:",
      options: ["Producers", "Primary consumers", "Decomposers", "Herbivores"],
      answer: "2",
      explanation:
        "DECOMPOSERS (bacteria, fungi) break down dead organic matter.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "Which organisms are at the END of every food chain?",
      options: ["Producers", "Herbivores", "Decomposers", "Primary consumers"],
      answer: "2",
      explanation:
        "DECOMPOSERS are found at the end of every food chain — they break down dead matter.",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "A diagram showing the number of organisms at each trophic level is a:",
      options: [
        "Pyramid of numbers",
        "Food chain",
        "Food web",
        "Nutrient cycle",
      ],
      answer: "0",
      explanation:
        "A PYRAMID OF NUMBERS shows the number of organisms at each trophic level.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "Which cycle is driven mainly by photosynthesis?",
      options: ["Nitrogen cycle", "Oxygen cycle", "Carbon cycle", "Water cycle"],
      answer: "1",
      explanation:
        "The OXYGEN cycle is driven mainly by PHOTOSYNTHESIS — plants release O₂.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "What process moves carbon from the atmosphere into plants?",
      options: ["Respiration", "Photosynthesis", "Decomposition", "Evaporation"],
      answer: "1",
      explanation:
        "PHOTOSYNTHESIS moves carbon from the air (CO₂) into plants.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "Which natural resource is NON-renewable?",
      options: ["Water", "Sunlight", "Coal", "Trees"],
      answer: "2",
      explanation:
        "COAL is non-renewable — it took millions of years to form. Water, sunlight, and trees are renewable.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "Conservation means:",
      options: [
        "Using up all resources quickly",
        "The care and protection of resources so they persist for future generations",
        "Wasting resources",
        "Ignoring resources",
      ],
      answer: "1",
      explanation:
        "CONSERVATION = care and protection of natural resources so they last for future generations.",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly matches the interaction type with an example?",
      options: [
        "Mutualism — tapeworm in humans",
        "Commensalism — epiphytes on a tree",
        "Parasitism — crocodile + teeth-cleaning bird",
        "Competition — fungi + algae",
      ],
      answer: "1",
      explanation:
        "Commensalism: epiphytes (plants on tree) benefit, tree is unharmed. Mutualism = fungi + algae. Parasitism = tapeworm + human. Protocooperation = crocodile + bird.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes protocooperation?",
      options: [
        "Both benefit, obligatory",
        "Both benefit, NOT obligatory",
        "One benefits, one harmed",
        "Both harmed",
      ],
      answer: "1",
      explanation:
        "PROTOCOOPERATION: both benefit but the relationship is NOT obligatory. Example: crocodile + teeth-cleaning bird.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes competition?",
      options: [
        "Both organisms benefit",
        "One benefits, one is harmed",
        "Both organisms are harmed",
        "Neither is affected",
      ],
      answer: "2",
      explanation:
        "COMPETITION = both organisms are HARMED (−/−) because they fight over the same limited resources.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "In the food chain Wheat → Goat → Tiger → Lion, the goat is a:",
      options: ["Producer", "Primary consumer", "Secondary consumer", "Tertiary consumer"],
      answer: "1",
      explanation:
        "Goat = PRIMARY CONSUMER (herbivore eating plants).",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "In the same chain (Wheat → Goat → Tiger → Lion), the tiger is a:",
      options: ["Primary consumer", "Secondary consumer", "Tertiary consumer", "Producer"],
      answer: "1",
      explanation:
        "Tiger eats goat (herbivore) → tiger is a SECONDARY CONSUMER.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes why the number of organisms DECREASES from bottom to top in a trophic pyramid?",
      options: [
        "Energy is lost at each level",
        "Organisms get smaller",
        "Plants are always abundant",
        "There is no reason",
      ],
      answer: "0",
      explanation:
        "Energy is LOST at each trophic level (mostly as heat), so fewer organisms can be supported at each higher level.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes energy flow in an ecosystem?",
      options: [
        "Energy cycles through the ecosystem",
        "Energy flows from the Sun through organisms and is lost as heat",
        "Energy is created by decomposers",
        "Energy stays constant",
      ],
      answer: "1",
      explanation:
        "Energy FLOWS one-way: from the Sun → producers → consumers → heat loss. It does NOT cycle.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes nutrients in an ecosystem?",
      options: [
        "They flow one-way like energy",
        "They cycle through living and non-living things",
        "They are lost to space",
        "They are only in water",
      ],
      answer: "1",
      explanation:
        "NUTRIENTS CYCLE — they move from environment → organisms → back to environment.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "In the nitrogen cycle, which process converts N₂ from the air into usable forms?",
      options: ["Denitrification", "Nitrification", "Nitrogen fixation", "Ammonification"],
      answer: "2",
      explanation:
        "NITROGEN FIXATION converts atmospheric N₂ into usable forms (like ammonia) by bacteria.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "Which process converts nitrates back to N₂ gas?",
      options: ["Denitrification", "Nitrification", "Nitrogen fixation", "Ammonification"],
      answer: "0",
      explanation:
        "DENITRIFICATION: nitrates → N₂ gas, completing the cycle. Performed by Pseudomonas and Clostridium.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "Which bacteria oxidize nitrites to nitrates?",
      options: ["Nitrosomonas", "Nitrobacter", "Pseudomonas", "Clostridium"],
      answer: "1",
      explanation:
        "NITROBACTER oxidizes nitrites to nitrates. Nitrosomonas oxidizes ammonia to nitrites.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the main role of decomposers in nutrient cycles?",
      options: [
        "To produce oxygen",
        "To break down dead matter and release nutrients back",
        "To eat plants",
        "To produce sunlight",
      ],
      answer: "1",
      explanation:
        "Decomposers break down dead organisms and waste, releasing nutrients back into the environment.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes soil?",
      options: [
        "Only rocks and minerals",
        "A mixture of broken rocks, minerals, living organisms, air, water, and humus",
        "Only water",
        "Only organic matter",
      ],
      answer: "1",
      explanation:
        "Soil = broken rocks + minerals + living organisms + air + water + HUMUS (decaying organic matter).",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Which type of soil is MOST fertile?",
      options: ["Sandy", "Clay", "Loam", "Rocky"],
      answer: "2",
      explanation:
        "LOAM soil is most fertile — it has nutrients, moisture, and good drainage.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Which soil type has the POOREST water holding capacity?",
      options: ["Sandy", "Clay", "Loam", "Silt"],
      answer: "0",
      explanation:
        "SANDY soil has large particles with poor water-holding capacity.",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "Which soil type holds the MOST water?",
      options: ["Sandy", "Clay", "Loam", "Rock"],
      answer: "1",
      explanation:
        "CLAY soil has the smallest particles and largest pore space — it holds the most water.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "Which soil conservation method involves building stair-like structures on hillsides?",
      options: ["Contour ploughing", "Terracing", "Crop rotation", "Shelter belts"],
      answer: "1",
      explanation:
        "TERRACING = building stair-like structures on hillsides to slow water flow and prevent erosion.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "Which soil conservation method involves ploughing across a slope (not up-down)?",
      options: ["Terracing", "Contour ploughing", "Crop rotation", "Afforestation"],
      answer: "1",
      explanation:
        "CONTOUR PLOUGHING = ploughing across the contour line of a slope to slow water runoff.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "Which air pollutant is a greenhouse gas?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Helium"],
      answer: "2",
      explanation:
        "Carbon dioxide (CO₂) is a greenhouse gas that contributes to global warming.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT an effect of air pollution?",
      options: ["Global warming", "Acid rain", "Global dimming", "Increased oxygen"],
      answer: "3",
      explanation:
        "Increased oxygen is NOT an effect. Air pollution causes global warming, acid rain, global dimming, and health problems.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is an example of a natural forest in Ethiopia?",
      options: ["Harenna Forest", "Amazon Forest", "Congo Forest", "Sahara Forest"],
      answer: "0",
      explanation:
        "HARENNA Forest in southeastern Ethiopia is an example of a natural forest.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes biodiversity?",
      options: [
        "The number of humans in an area",
        "The collection of life and habitat in an ecosystem",
        "The number of rocks in a forest",
        "Only large animals",
      ],
      answer: "1",
      explanation:
        "BIODIVERSITY = collection of life and habitat in ecosystems. It's the measure of species wealth in a place.",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes in-situ conservation?",
      options: [
        "Conservation OUTSIDE natural habitat",
        "Conservation IN natural habitat",
        "Conservation in zoos",
        "Conservation in laboratories",
      ],
      answer: "1",
      explanation:
        "IN-SITU conservation = protecting species IN their natural habitat. Examples: national parks, biosphere reserves, sanctuaries.",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes ex-situ conservation?",
      options: [
        "Conservation IN natural habitat",
        "Conservation OUTSIDE natural habitat",
        "Conservation by protecting entire ecosystems",
        "Conservation by law only",
      ],
      answer: "1",
      explanation:
        "EX-SITU conservation = protecting species OUTSIDE their natural habitat. Examples: zoos, aquariums, seed banks, botanical gardens.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a method for water conservation?",
      options: [
        "Wasting water",
        "Cover vegetation, terracing, preventing pollution",
        "Polluting water bodies",
        "Cutting all forests",
      ],
      answer: "1",
      explanation:
        "Water conservation methods: cover vegetation, contour ploughing, terracing, check dams, preventing pollution.",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why energy FLOWS but nutrients CYCLE?",
      options: [
        "Because energy comes from the Sun and is lost as heat, while nutrients are passed and reused",
        "Because energy is smaller than nutrients",
        "Because nutrients come from the Sun",
        "There is no difference",
      ],
      answer: "0",
      explanation:
        "Energy enters as sunlight, moves through organisms, and is eventually lost as heat. Nutrients are matter — they can be reused and recycled.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "Which is TRUE about the nitrogen cycle?",
      options: [
        "It only happens in oceans",
        "It involves nitrogen moving through atmosphere, soil, water, plants, animals, and bacteria",
        "It does not require bacteria",
        "It stops at producers",
      ],
      answer: "1",
      explanation:
        "The nitrogen cycle is complex — nitrogen moves through all these reservoirs, and bacteria play a crucial role in fixing, nitrifying, and denitrifying.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes the relationship between plants and soil?",
      options: [
        "Plants give no benefit to soil",
        "Plants add organic matter, prevent erosion, and help water infiltrate",
        "Plants remove all nutrients from soil",
        "Plants cause desertification",
      ],
      answer: "1",
      explanation:
        "Plants enrich soil with organic matter (fallen leaves, roots), prevent erosion, and help water infiltrate the soil.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why biodiversity is valuable?",
      options: [
        "For economic, ecological, recreational, cultural, and scientific reasons",
        "Only for food",
        "Only for medicine",
        "Only for tourism",
      ],
      answer: "0",
      explanation:
        "Biodiversity has MANY values: economic (raw materials), ecological (clean air, water), recreation, cultural, scientific.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes the difference between a food chain and a food web?",
      options: [
        "A food chain has one path of energy; a food web has many interconnected paths",
        "A food chain is bigger than a food web",
        "A food web only has plants",
        "There is no difference",
      ],
      answer: "0",
      explanation:
        "A FOOD CHAIN shows ONE linear path of energy flow. A FOOD WEB shows MANY interconnected food chains, representing the full complexity of the ecosystem.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes INDIGENOUS conservation knowledge?",
      options: [
        "Knowledge developed by local communities over many years of interaction with nature",
        "Knowledge only from Western science",
        "Knowledge from modern technology",
        "Knowledge from laboratories only",
      ],
      answer: "0",
      explanation:
        "INDIGENOUS knowledge = understandings, skills, and philosophies developed by societies with long histories of interaction with their natural surroundings. Examples: Konso terracing, traditional water harvesting.",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Define ecosystem and list three biotic and three abiotic components.",
      answer:
        "Ecosystem = the sum of all living and non-living components in a habitat. Biotic components: plants, animals, bacteria. Abiotic components: water, sunlight, soil.",
      explanation:
        "Banchi, remember: BIOTIC = living, ABIOTIC = non-living.",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "Compare and contrast mutualism, commensalism, and parasitism.",
      answer:
        "Mutualism (+/+): both benefit. Example: fungi + algae. Commensalism (+/0): one benefits, the other neither helped nor harmed. Example: epiphytes + tree. Parasitism (+/−): one benefits, the other is harmed. Example: tapeworm + human.",
      explanation:
        "Banchi, use the +/− notation to remember.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "Explain the difference between a food chain and a food web.",
      answer:
        "A food chain is a simple, direct feeding system that shows energy flowing in ONE direction. A food web is a complex feeding relationship consisting of MANY interconnected food chains.",
      explanation:
        "Food chain = one path. Food web = many paths connected.",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "Describe three methods of soil conservation and explain why each works.",
      answer:
        "1) Terracing — builds stair-like structures on hillsides to slow water flow and prevent erosion. 2) Contour ploughing — ploughs across a slope (not up-down) to slow water runoff and help water infiltrate. 3) Afforestation/Reforestation — tree roots hold soil in place and reduce erosion.",
      explanation:
        "All soil conservation methods aim to reduce water/wind erosion and maintain soil fertility.",
    },
        // ============================================================
    // BATCH 2 — Q61 to Q120 (final for Unit 5)
    // ============================================================

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which organisms make their own food using sunlight?",
      options: ["Heterotrophs", "Photoautotrophs", "Chemoautotrophs", "Decomposers"],
      answer: "1",
      explanation:
        "PHOTO-autotrophs use SUNLIGHT to make food. Examples: green plants, algae, photosynthetic bacteria.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Which organisms release energy from simple chemical reactions?",
      options: ["Photoautotrophs", "Chemoautotrophs", "Herbivores", "Carnivores"],
      answer: "1",
      explanation:
        "CHEMO-autotrophs release energy from CHEMICAL reactions. Example: nitrifying bacteria.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Which consumer eats ONLY plants?",
      options: ["Herbivore", "Carnivore", "Omnivore", "Decomposer"],
      answer: "0",
      explanation:
        "HERBIVORE = eats only plants. Carnivore = eats animals. Omnivore = eats both.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "Which consumer eats ONLY animals?",
      options: ["Herbivore", "Carnivore", "Omnivore", "Producer"],
      answer: "1",
      explanation:
        "CARNIVORE = eats only animals.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "Which consumer eats BOTH plants and animals?",
      options: ["Herbivore", "Carnivore", "Omnivore", "Decomposer"],
      answer: "2",
      explanation:
        "OMNIVORE = eats both plants and animals. Example: humans.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "In a food chain, the arrow points:",
      options: [
        "From the predator to the prey",
        "From the organism being eaten to the one eating",
        "Randomly",
        "Only from plants",
      ],
      answer: "1",
      explanation:
        "Food chain arrows show the DIRECTION of energy flow — from the eaten to the eater.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a decomposer?",
      options: ["Grass", "Cow", "Bacteria", "Lion"],
      answer: "2",
      explanation:
        "BACTERIA (along with fungi) are decomposers — they break down dead organic matter.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "Which nutrient cycle involves the process of photosynthesis most directly?",
      options: ["Nitrogen", "Oxygen and Carbon", "Water", "Phosphorus"],
      answer: "1",
      explanation:
        "Both OXYGEN and CARBON cycles are driven by photosynthesis (and respiration).",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "In the water cycle, what happens AFTER water evaporates?",
      options: [
        "It falls as rain immediately",
        "It condenses into clouds",
        "It freezes into ice",
        "It disappears",
      ],
      answer: "1",
      explanation:
        "Water evaporates → CONDENSES into clouds → falls as rain/snow → flows into rivers → back to ocean → repeats.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a RENEWABLE resource?",
      options: ["Coal", "Petroleum", "Trees", "Natural gas"],
      answer: "2",
      explanation:
        "Trees are renewable — they can be planted and regrow. Coal, petroleum, and natural gas are non-renewable.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a NON-RENEWABLE resource?",
      options: ["Water", "Sunlight", "Petroleum", "Trees"],
      answer: "2",
      explanation:
        "PETROLEUM is non-renewable — it took millions of years to form.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "What is soil?",
      options: [
        "Only rocks",
        "A mixture of broken rocks, minerals, living organisms, air, water, and humus",
        "Only water",
        "Only sand",
      ],
      answer: "1",
      explanation:
        "Soil = broken rocks + minerals + living organisms + air + water + humus.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "What is humus?",
      options: [
        "Chickpea dip",
        "Dark, soft, nutrient-rich decaying organic matter",
        "Type of rock",
        "Type of water",
      ],
      answer: "1",
      explanation:
        "HUMUS is dark, soft, nutrient-rich decaying organic matter from plants and animals.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "Which soil type is BEST for growing most plants?",
      options: ["Sandy", "Clay", "Loam", "Rock"],
      answer: "2",
      explanation:
        "LOAM is the best soil for plants — it has good nutrients, moisture, and drainage.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which method of soil conservation uses trees to prevent wind erosion?",
      options: ["Terracing", "Contour ploughing", "Shelter belts", "Crop rotation"],
      answer: "2",
      explanation:
        "SHELTER BELTS = trees planted at field edges to protect soil from WIND erosion.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the main source of energy for the water cycle?",
      options: ["Wind", "Sun", "Moon", "Volcanoes"],
      answer: "1",
      explanation:
        "The SUN drives the water cycle by evaporating water from oceans, lakes, and rivers.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "Which gas makes up about 78% of air?",
      options: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
      answer: "2",
      explanation:
        "NITROGEN makes up about 78% of air. Oxygen is about 21%.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "Which gas makes up about 21% of air?",
      options: ["Nitrogen", "Oxygen", "Carbon dioxide", "Argon"],
      answer: "1",
      explanation:
        "OXYGEN makes up about 21% of air.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "Which gas is a greenhouse gas that contributes to global warming?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
      answer: "2",
      explanation:
        "CARBON DIOXIDE (CO₂) is the main greenhouse gas. It traps heat in the atmosphere.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "What is a forest?",
      options: [
        "A complex ecosystem consisting mainly of trees",
        "A lake",
        "A mountain",
        "A garden",
      ],
      answer: "0",
      explanation:
        "A FOREST is a complex ecosystem consisting mainly of trees that support many life forms.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "What is deforestation?",
      options: [
        "Planting trees",
        "Removal of forest cover without replacement",
        "Watering forests",
        "Studying forests",
      ],
      answer: "1",
      explanation:
        "DEFORESTATION = cutting down forests without replacing the trees.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "What is reforestation?",
      options: [
        "Cutting down trees",
        "Planting trees where a forest has been destroyed",
        "Burning forests",
        "Building houses",
      ],
      answer: "1",
      explanation:
        "REFORESTATION = planting trees in an area where the forest has been destroyed.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a value of biodiversity?",
      options: [
        "Only economic",
        "Economic, ecological, recreational, cultural, scientific",
        "Only cultural",
        "Only scientific",
      ],
      answer: "1",
      explanation:
        "Biodiversity has MANY values: economic (raw materials), ecological (clean air), recreational, cultural, scientific.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is IN-SITU conservation?",
      options: [
        "Zoo",
        "Aquarium",
        "National park",
        "Seed bank",
      ],
      answer: "2",
      explanation:
        "A NATIONAL PARK is IN-SITU conservation (in the natural habitat). Zoos, aquariums, seed banks are EX-SITU.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is EX-SITU conservation?",
      options: [
        "Biosphere reserve",
        "Sanctuary",
        "Botanical garden",
        "National park",
      ],
      answer: "2",
      explanation:
        "A BOTANICAL GARDEN is EX-SITU (outside natural habitat). Biosphere reserves, sanctuaries, national parks are IN-SITU.",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Which pair of organisms shows MUTUALISM?",
      options: [
        "Human and tapeworm",
        "Crocodile and teeth-cleaning bird",
        "Fungi and algae (lichen)",
        "Big tree and epiphytes",
      ],
      answer: "2",
      explanation:
        "MUTUALISM: fungi + algae (lichen) — both benefit. The others: parasitism (tapeworm), protocooperation (crocodile), commensalism (epiphytes).",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Which pair shows PARASITISM?",
      options: [
        "Human and tapeworm",
        "Fungi and algae",
        "Crocodile and bird",
        "Tree and epiphytes",
      ],
      answer: "0",
      explanation:
        "PARASITISM: human + tapeworm. Tapeworm benefits, human is harmed.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Which pair shows COMMENSALISM?",
      options: [
        "Human and tapeworm",
        "Fungi and algae",
        "Big tree and epiphytes",
        "Crocodile and bird",
      ],
      answer: "2",
      explanation:
        "COMMENSALISM: epiphytes benefit, tree is unaffected.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Which pair shows PROTOCOOPERATION?",
      options: [
        "Human and tapeworm",
        "Fungi and algae",
        "Tree and epiphytes",
        "Crocodile and teeth-cleaning bird",
      ],
      answer: "3",
      explanation:
        "PROTOCOOPERATION: both benefit, NOT obligatory. Crocodile + bird.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "In a food web with plants → grasshopper → frog → snake → hawk, which is the tertiary consumer?",
      options: ["Grasshopper", "Frog", "Snake", "Hawk"],
      answer: "2",
      explanation:
        "Plants (producer) → grasshopper (primary) → frog (secondary) → SNAKE (tertiary) → hawk (quaternary).",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the pyramid of energy?",
      options: [
        "Energy increases as you go up",
        "Energy is roughly constant at all levels",
        "Energy decreases as you go up because of heat loss",
        "Energy only exists in producers",
      ],
      answer: "2",
      explanation:
        "Energy DECREASES at each level — about 90% is lost as heat between trophic levels.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the pyramid of biomass?",
      options: [
        "Shows mass of organisms at each trophic level",
        "Shows number of species",
        "Shows sunlight at each level",
        "Shows temperature",
      ],
      answer: "0",
      explanation:
        "Pyramid of BIOMASS shows the MASS of organisms (total weight) at each trophic level.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the pyramid of numbers?",
      options: [
        "Shows mass",
        "Shows number of individual organisms at each level",
        "Shows energy",
        "Shows rainfall",
      ],
      answer: "1",
      explanation:
        "Pyramid of NUMBERS shows the NUMBER of individual organisms at each trophic level.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "Which two processes are the MOST important in the oxygen cycle?",
      options: [
        "Evaporation and condensation",
        "Photosynthesis and respiration",
        "Nitrogen fixation and denitrification",
        "Combustion and evaporation",
      ],
      answer: "1",
      explanation:
        "PHOTOSYNTHESIS (plants release O₂) and RESPIRATION (organisms use O₂) drive the oxygen cycle.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why forests are important?",
      options: [
        "They clean the air, cool it on hot days, conserve heat at night, and act as sound absorbers",
        "They only provide wood",
        "They are unimportant",
        "They block sunlight",
      ],
      answer: "0",
      explanation:
        "Forests clean air, cool hot days, retain heat at night, and absorb sound. They also produce O₂ and absorb CO₂.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how deforestation harms the environment?",
      options: [
        "It increases CO₂, reduces O₂, causes soil erosion, and destroys habitat",
        "It has no effect",
        "It helps the environment",
        "It only affects trees",
      ],
      answer: "0",
      explanation:
        "Deforestation increases CO₂, reduces O₂, causes soil erosion, and destroys wildlife habitat.",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes a watershed or water catchment area?",
      options: [
        "An area where water collects and drains into a river or lake",
        "A type of tree",
        "A rock formation",
        "A wind turbine",
      ],
      answer: "0",
      explanation:
        "A WATERSHED (catchment) is an area where water collects and drains into a river, lake, or other body of water.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT a value of biodiversity?",
      options: [
        "Economic value",
        "Ecological value",
        "Pollution value",
        "Cultural value",
      ],
      answer: "2",
      explanation:
        "Pollution is NOT a value of biodiversity. Values include economic, ecological, recreational, cultural, and scientific.",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why preserving endangered species is important?",
      options: [
        "They maintain ecosystem balance and genetic diversity",
        "They are expensive to preserve",
        "They have no importance",
        "Only for decoration",
      ],
      answer: "0",
      explanation:
        "Endangered species are important for maintaining ecosystem balance and genetic diversity.",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes a biosphere reserve?",
      options: [
        "A place where living organisms are preserved in jars",
        "A protected area that conserves biodiversity and promotes sustainable use",
        "A man-made lake",
        "A zoo",
      ],
      answer: "1",
      explanation:
        "A BIOSPHERE RESERVE is a protected area that conserves biodiversity and promotes sustainable use of natural resources.",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes a 'sanctuary'?",
      options: [
        "An area where animals and their habitats are protected from disturbance",
        "A church",
        "A zoo",
        "A botanical garden",
      ],
      answer: "0",
      explanation:
        "A SANCTUARY is an area where animal habitats are protected from any disturbance.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the difference between a sanctuary and a zoo?",
      options: [
        "Sanctuaries preserve animals in their natural habitat; zoos keep them outside their habitat",
        "They are the same",
        "Sanctuaries are outdoors; zoos are indoors",
        "Zoos preserve animals better",
      ],
      answer: "0",
      explanation:
        "Sanctuaries preserve animals IN their natural habitat (in-situ). Zoos preserve them OUTSIDE natural habitat (ex-situ).",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why indigenous knowledge is important for conservation?",
      options: [
        "It is developed through long interaction with nature and offers sustainable practices",
        "It is outdated",
        "It is not useful",
        "Only modern science matters",
      ],
      answer: "0",
      explanation:
        "Indigenous knowledge is based on centuries of practical experience with local environments, offering sustainable practices.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes sustainable development?",
      options: [
        "Meeting present needs without compromising future generations",
        "Using all resources now",
        "Ignoring the environment",
        "Maximizing profit only",
      ],
      answer: "0",
      explanation:
        "SUSTAINABLE DEVELOPMENT = meeting present needs without compromising future generations' ability to meet their own.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how forests help the water cycle?",
      options: [
        "Trees release water through transpiration, affecting rainfall",
        "Trees dry up water sources",
        "Trees block rain",
        "Trees have no effect on water",
      ],
      answer: "0",
      explanation:
        "Forests release water through TRANSPIRATION, which affects humidity and precipitation in an area.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the role of soil in ecosystems?",
      options: [
        "It supports plant growth, holds water, and is home to many microorganisms",
        "It has no role",
        "It only holds rocks",
        "It is unimportant",
      ],
      answer: "0",
      explanation:
        "Soil supports plants, holds water and nutrients, and is home to many microorganisms, earthworms, and termites.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes a watershed?",
      options: [
        "An area where water collects and drains into a common outlet",
        "A type of tree",
        "A mountain",
        "A lake",
      ],
      answer: "0",
      explanation:
        "A WATERSHED = an area of land where all water that falls drains into a common outlet (river, lake, or ocean).",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes 'crop rotation'?",
      options: [
        "Planting the same crop every year",
        "Planting different crops in the same field over a period of years",
        "Only using one type of seed",
        "Cutting all plants",
      ],
      answer: "1",
      explanation:
        "CROP ROTATION = planting a SERIES of different crops on the same field over several years to maintain soil fertility.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes 'strip cropping'?",
      options: [
        "Planting two or more crops in the same field",
        "Cutting crops in strips",
        "Planting one crop only",
        "Removing all vegetation",
      ],
      answer: "0",
      explanation:
        "STRIP CROPPING = planting two or more crops in the same field. It helps control erosion and improve soil fertility.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the role of LEGUMES (like beans) in soil?",
      options: [
        "They add nitrogen to soil through nitrogen-fixing bacteria in their roots",
        "They remove all nitrogen",
        "They have no effect on soil",
        "They only add water",
      ],
      answer: "0",
      explanation:
        "Legumes (beans, peas) have nitrogen-fixing bacteria in their roots that convert N₂ from air into usable nitrogen, enriching the soil.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes the relationship between photosynthesis and cellular respiration?",
      options: [
        "Photosynthesis uses CO₂ and releases O₂; respiration uses O₂ and releases CO₂",
        "Both use CO₂",
        "Both release O₂",
        "They are the same process",
      ],
      answer: "0",
      explanation:
        "Photosynthesis: CO₂ + H₂O + light → glucose + O₂. Cellular respiration: glucose + O₂ → CO₂ + H₂O + energy. They are OPPOSITE processes.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why energy is LOST between trophic levels?",
      options: [
        "Organisms use energy for life processes and release heat",
        "Energy disappears",
        "Energy is stored in rocks",
        "Energy evaporates",
      ],
      answer: "0",
      explanation:
        "Organisms use most of the energy they consume for life processes (movement, growth, reproduction), and much is lost as HEAT.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes the role of the Sun in ecosystems?",
      options: [
        "It provides the primary energy that drives all ecosystems",
        "It only warms the air",
        "It has no role in ecosystems",
        "It only affects plants at night",
      ],
      answer: "0",
      explanation:
        "The Sun is the PRIMARY energy source for ecosystems. It powers photosynthesis, which forms the base of all food chains.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why biodiversity loss is a global concern?",
      options: [
        "It affects ecosystem stability, human food supplies, medicine, and cultural values",
        "It only affects animals",
        "It has no impact",
        "It only affects Ethiopia",
      ],
      answer: "0",
      explanation:
        "Biodiversity loss affects ecosystem stability, food supplies, medicine discovery, cultural values, and climate regulation — a GLOBAL concern.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes the difference between decomposers and detritivores?",
      options: [
        "Decomposers break down dead matter chemically; detritivores eat dead matter physically",
        "They are identical",
        "Decomposers only live in water",
        "Detritivores are plants",
      ],
      answer: "0",
      explanation:
        "DECOMPOSERS (bacteria, fungi) chemically break down dead matter. DETRITIVORES (earthworms, beetles) eat dead matter physically.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains the role of INDIGENOUS knowledge in conservation?",
      options: [
        "Local communities have developed sustainable practices over centuries (e.g., Konso terracing)",
        "It is outdated and should be ignored",
        "Only modern science is useful",
        "It is unimportant",
      ],
      answer: "0",
      explanation:
        "Indigenous knowledge often includes effective, time-tested conservation practices — like the Konso stone terraces in Ethiopia.",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "Explain the difference between biotic and abiotic components with examples.",
      answer:
        "Biotic components are LIVING things: plants, animals, bacteria, fungi. Abiotic components are NON-LIVING things: water, sunlight, air, soil, temperature, land topography.",
      explanation:
        "Banchi, remember: 'bio' means life. So biotic = living. Abiotic = without life.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "Describe three types of biological interactions and give an example of each.",
      answer:
        "1) Mutualism (+/+): both benefit. Example: fungi + algae (lichen). 2) Commensalism (+/0): one benefits, one unharmed. Example: tree + epiphytes. 3) Parasitism (+/−): one benefits, one harmed. Example: human + tapeworm.",
      explanation:
        "Banchi, use the +/− notation to remember.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "Describe three soil conservation methods.",
      answer:
        "1) Terracing — builds steps on hillsides to slow water flow. 2) Contour ploughing — ploughing across slopes (not up-down). 3) Afforestation/reforestation — planting trees to hold soil with their roots.",
      explanation:
        "All methods aim to reduce water/wind erosion and maintain soil fertility.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Explain how energy flows and nutrients cycle through an ecosystem.",
      answer:
        "Energy flows ONE-WAY: Sun → producers → primary consumers → secondary consumers → tertiary consumers. At each step, energy is lost as heat. Energy does NOT cycle back to the Sun. Nutrients (like carbon, nitrogen, water) CYCLE repeatedly: from the environment to organisms and back to the environment through decomposition, respiration, and other processes.",
      explanation:
        "Memory trick: 'Energy flows. Nutrients cycle.'",
    },
  ],
};