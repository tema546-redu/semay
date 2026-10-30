import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 GEOGRAPHY — UNIT 6
// HUMAN–NATURAL ENVIRONMENT INTERACTIONS
// Source: Grade 10 Geography Student Textbook (pp. 145–158)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, definition boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10GeographyCh6: Chapter = {
  id: "ch6",
  number: 6,
  title: "Human–Natural Environment Interactions",
  titleAm: "የሰው–ተፈጥሮ አካባቢ ግንኙነቶች",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about HUMAN-ENVIRONMENT INTERACTIONS:\n" +
        "1) Global population change.\n" +
        "2) Human-environment relationship — dependence, modification, adaptation.\n" +
        "3) Indigenous knowledge in conservation.\n\n" +
        "The WHOLE chapter reduces to FIVE key ideas:\n" +
        "• Population change = difference in population size over a period.\n" +
        "• TWO major theories: environmental DETERMINISM vs POSSIBILISM.\n" +
        "• THREE types of human-environment interaction: dependence, modification, adaptation.\n" +
        "• TWO types of adaptation: AUTONOMOUS vs PLANNED.\n" +
        "• Indigenous knowledge = valuable for conservation.\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ አምስቱ ዋና ሐሳቦች፡\n" +
        "1) የህዝብ ለውጥ\n" +
        "2) Determinism vs Possibilism\n" +
        "3) ጥገኝነት፣ ማሻሻል፣ መላመድ\n" +
        "4) Autonomous vs Planned\n" +
        "5) ባህላዊ እውቀት",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand population change",
          titleAm: "ደረጃ 1 · የህዝብ ለውጥ",
          body:
            "POPULATION CHANGE = difference in population size from beginning to end of a period.\n\n" +
            "INCREASES:\n" +
            "• Fertility (births).\n" +
            "• Immigration.\n\n" +
            "DECREASES:\n" +
            "• Mortality (deaths).\n" +
            "• Emigration.\n\n" +
            "AFRICA'S HISTORY:\n" +
            "• 1500 AD: 80 million.\n" +
            "• 1900 AD: 100 million (only +20M in 400 years — slave trade, colonization, disease).\n" +
            "• 1900–1980: demographic explosion.\n" +
            "• 2015: 962 million SSA.\n" +
            "• 2021: >1.37 billion (2.45% growth).",
          bodyAm:
            "1500: 80M → 1900: 100M።\n" +
            "1900–1980: ፍንዳታ።\n" +
            "2021: 1.37B።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Determinism vs Possibilism",
          titleAm: "ደረጃ 2 · Determinism vs Possibilism",
          body:
            "ENVIRONMENTAL DETERMINISM:\n" +
            "• Natural/physical environment SHAPES culture.\n" +
            "• Environment DICTATES human activities.\n" +
            "• Popular in 19th-century Europe.\n" +
            "• Rejected in 1950s.\n\n" +
            "ENVIRONMENTAL POSSIBILISM:\n" +
            "• Humans can ADAPT + CHOOSE from alternatives.\n" +
            "• Opposite of determinism.\n" +
            "• Degree of environmental influence DECLINES with modernization + technology.\n" +
            "• Modern view.",
          bodyAm:
            "Determinism: አካባቢ ይወስናል።\n" +
            "Possibilism: ሰው ይመርጣል።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Three interactions and two adaptations",
          titleAm: "ደረጃ 3 · ሦስቱ ግንኙነቶችና ሁለቱ መላመዶች",
          body:
            "THREE TYPES OF INTERACTION:\n" +
            "1) DEPENDENCE: rely on environment for survival (food, water, shelter, clothing).\n" +
            "2) MODIFICATION: change environment (cut forests, build dams, drill for oil).\n" +
            "3) ADAPTATION: adjust to environment (warm clothes in cold; thin clothes in hot).\n\n" +
            "TWO TYPES OF ADAPTATION:\n" +
            "1) AUTONOMOUS (spontaneous) — NOT conscious response; triggered by ecological changes.\n" +
            "2) PLANNED — deliberate policy decision to return to / maintain desired state.\n\n" +
            "THREE CATEGORIES OF RESPONSES:\n" +
            "• Technological (grey measures).\n" +
            "• Ecosystem-based (green measures).\n" +
            "• Behavioral/managerial/policy (soft measures).",
          bodyAm:
            "ጥገኝነት፣ ማሻሻል፣ መላመድ።\n" +
            "Autonomous vs Planned።\n" +
            "Grey, green, soft measures።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Do you know Africa's population 1500 → 1900?\n" +
            "2) Do you know the cause of population stagnation?\n" +
            "3) Do you know determinism vs possibilism?\n" +
            "4) Do you know autonomous vs planned adaptation?\n" +
            "5) Do you know the Teso community example?",
          bodyAm:
            "1) 80M → 100M?\n" +
            "2) Slave trade + disease?\n" +
            "3) Determinism vs Possibilism?\n" +
            "4) Autonomous vs Planned?\n" +
            "5) Teso?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፋርት",
          body:
            "• Population change = difference from start to end of a period.\n" +
            "• Africa 1500: 80M → 1900: 100M (+20M in 400 years).\n" +
            "• Population STAGNATION caused by: slave trade, colonization, deadly diseases.\n" +
            "• Environmental determinism = environment dictates culture.\n" +
            "• Environmental possibilism = humans choose responses.\n" +
            "• Three interactions: dependence, modification, adaptation.\n" +
            "• Two types of adaptation: autonomous (spontaneous) + planned.\n" +
            "• Green + soft measures = low-cost; grey (technological) = high-cost.\n" +
            "• Indigenous knowledge = valuable for conservation.",
          bodyAm:
            "• 80M → 100M።\n" +
            "• Stagnation = slave trade, disease።\n" +
            "• Determinism vs Possibilism።\n" +
            "• Autonomous vs Planned።",
        },
      ],
    },

    // ============================================================
    // 6.1 GLOBAL POPULATION CHANGE
    // ============================================================
    {
      id: "n1",
      title: "6.1 Overview of Global Population Change",
      titleAm: "6.1 የዓለም ህዝብ ለውጥ",
      body:
        "Abatu, population change = difference in population size from beginning to end of a period. It includes fertility, mortality, and migration.",
      bodyAm:
        "አባቱ፣ የህዝብ ለውጥ = በጊዜ ልዩነት።",
      children: [
        {
          id: "n1-1",
          title: "Population change definition",
          titleAm: "የህዝብ ለውጥ ትርጉም",
          body:
            "POPULATION CHANGE = difference in population size from beginning to end of a certain period.\n\n" +
            "INCREASES:\n" +
            "• Fertility (births).\n" +
            "• Immigration.\n\n" +
            "DECREASES:\n" +
            "• Mortality (deaths).\n" +
            "• Emigration.\n\n" +
            "Composition also changes (birth/death rates, sex ratio, life expectancy, migration).",
          bodyAm:
            "መጨመር: ልደት + ፍልሰት ወደ ውስጥ።\n" +
            "መቀነስ: ሞት + ፍልሰት ወደ ውጭ።",
        },
        {
          id: "n1-2",
          title: "Africa's population stagnation (1500–1900)",
          titleAm: "የአፍሪካ ህዝብ መቆም (1500–1900)",
          body:
            "AFRICA'S POPULATION STAGNATION:\n" +
            "• 1500 AD: 80 million.\n" +
            "• 1900 AD: 100 million.\n" +
            "• Only +20 million in 400 years.\n\n" +
            "CAUSES:\n" +
            "• SLAVE TRADE.\n" +
            "• COLONIZATION.\n" +
            "• Spread of DEADLY DISEASES.\n\n" +
            "Meanwhile:\n" +
            "• Asia, South America, North America grew 3–5× in the same period.",
          bodyAm:
            "80M → 100M።\n" +
            "ምክንያት: ባርነት፣ ቅኝ ግዛት፣ በሽታ።\n" +
            "ሌሎች አህጉራት 3–5× አደጉ።",
        },
        {
          id: "n1-3",
          title: "Africa's demographic explosion (1900–present)",
          titleAm: "የአፍሪካ ስንጥቅ (1900–አሁን)",
          body:
            "20th century = 'demographic explosion' of developing world.\n\n" +
            "SUB-SAHARAN AFRICA (SSA):\n" +
            "• 1900–1980: population kept increasing.\n" +
            "• ~2.8% per year growth (average).\n" +
            "• 1980–2015 sub-regions:\n" +
            "   – Eastern Africa: 2.9%/year.\n" +
            "   – Central Africa: 3.0%/year.\n" +
            "   – Western Africa: 2.7%/year.\n" +
            "   – Southern Africa: 1.8%/year.\n" +
            "• Eastern + Central + Western Africa = 93.5% of continent's population (2015).\n" +
            "• 2015: 962 million (10× its 1900 level).\n" +
            "• 2021: >1.3 billion; 2.45% annual growth.\n\n" +
            "CONTINENTAL SHARES (2021):\n" +
            "• Asia: 59.5% (4.68 billion).\n" +
            "• Africa: 17.2% (1.37 billion).\n" +
            "• Europe: 9.59% (748 million).\n" +
            "• North America: 7.60% (597 million).\n" +
            "• South America: 5.53% (434 million).\n" +
            "• Oceania: 0.55% (43 million).\n" +
            "• Asia + Africa together = ~77% of world population.",
          bodyAm:
            "2.8% አማካይ።\n" +
            "2015: 962M።\n" +
            "2021: 1.37B።\n" +
            "Asia + Africa = 77%።",
        },
        {
          id: "n1-4",
          title: "Causes of rapid world population growth",
          titleAm: "የፈጣን እድገት ምክንያቶች",
          body:
            "ADVANCES IN MODERN MEDICINE:\n" +
            "• Reduced infant, child, maternal mortality.\n" +
            "• Increased life expectancy.\n\n" +
            "IMPROVED LIVING STANDARDS:\n" +
            "• Better nutrition.\n" +
            "• Better sanitation.\n\n" +
            "These have contributed to higher population.",
          bodyAm:
            "ሕክምና + ኑሮ ደረጃ።\n" +
            "ሞት ቀነሰ፤ ቆይታ ጨመረ።",
        },
        {
          id: "n1-5",
          title: "⚠ Remember trap — Population change",
          titleAm: "⚠ አትርሳ — የህዝብ ለውጥ",
          body:
            "• Population change = difference from start to end of a period.\n" +
            "• Africa 1500: 80M → 1900: 100M.\n" +
            "• Stagnation caused by: slave trade, colonization, deadly diseases.\n" +
            "• SSA growth 1900–1980: ~2.8%/year average.\n" +
            "• 2015 SSA population = 962 million.\n" +
            "• 2021 world population = 7.875 billion.\n" +
            "• Asia + Africa = ~77% of world population.\n" +
            "• 20th century = 'demographic explosion' of developing world.",
          bodyAm:
            "80M → 100M።\n" +
            "ባርነት፣ ቅኝ ግዛት፣ በሽታ።\n" +
            "77% Asia+Africa።",
        },
      ],
    },

    // ============================================================
    // 6.2 HUMAN-ENVIRONMENT RELATIONSHIP
    // ============================================================
    {
      id: "n2",
      title: "6.2 Human-Environment Relationship",
      titleAm: "6.2 የሰው–አካባቢ ግንኙነት",
      body:
        "Abatu, humans and environment AFFECT each other — reciprocal. Two main theories explain this: determinism and possibilism.",
      bodyAm:
        "አባቱ፣ ሰውና አካባቢ እርስ በርስ ይነካካሉ።\n" +
        "Determinism + Possibilism።",
      children: [
        {
          id: "n2-1",
          title: "Environment definition",
          titleAm: "የአካባቢ ትርጉም",
          body:
            "ENVIRONMENT = surroundings or conditions in which persons, animals, or plants live or operate.\n\n" +
            "• All external factors affecting an organism.\n" +
            "• Multidimensional system of complex relationships.\n" +
            "• Continually changing state.",
          bodyAm:
            "አካባቢ = ዙሪያ ሁኔታዎች።\n" +
            "ሁሉንም ውጫዊ ሁኔታዎች ያካትታል።",
        },
        {
          id: "n2-2",
          title: "Environmental determinism",
          titleAm: "Environmental Determinism",
          body:
            "ENVIRONMENTAL DETERMINISM:\n" +
            "• Natural/physical environment SHAPES + CREATES cultures.\n" +
            "• Environment DICTATES culture.\n" +
            "• Economic growth + human activities CONTROLLED by physical environment.\n\n" +
            "HISTORY:\n" +
            "• Popularized by Europeans in 19th century.\n" +
            "• REJECTED in 1950s.\n" +
            "• Replaced by environmental possibilism.",
          bodyAm:
            "አካባቢ ይወስናል።\n" +
            "19ኛው ክፍለ ዘመን።\n" +
            "በ1950ዎቹ ተቀባይነት አላገኘም።",
        },
        {
          id: "n2-3",
          title: "Environmental possibilism",
          titleAm: "Environmental Possibilism",
          body:
            "ENVIRONMENTAL POSSIBILISM:\n" +
            "• People can ADAPT to diverse environments.\n" +
            "• Humans CHOOSE from many alternatives (possibilities).\n" +
            "• Despite environmental limitations.\n" +
            "• OPPOSITE of determinism.\n\n" +
            "KEY PRINCIPLE:\n" +
            "• Humans have capacity to choose between possible responses.\n" +
            "• Degree of environmental influence DECLINES with modernization + technology.",
          bodyAm:
            "ሰው ይመርጣል።\n" +
            "ቴክኖሎጂ ሲያድግ የአካባቢ ተጽእኖ ይቀንሳል።",
        },
        {
          id: "n2-4",
          title: "Three types of human-environment interaction",
          titleAm: "ሦስቱ ግንኙነቶች",
          body:
            "1) DEPENDENCE:\n" +
            "• Rely on environment for FOOD, WATER, SHELTER, CLOTHING.\n" +
            "• Also for economic activity (raw materials, ecosystem services).\n" +
            "• Environment provides carbon sequestration, water purification, flood management.\n\n" +
            "2) MODIFICATION:\n" +
            "• Humans CHANGE environment to fulfill needs.\n" +
            "• Examples: cut forests for farms, build dams, drill oil wells.\n" +
            "• Positive: afforestation, conservation.\n" +
            "• Negative: pollution, deforestation, overpopulation.\n\n" +
            "3) ADAPTATION:\n" +
            "• Adjustment to new environment for survival.\n" +
            "• Examples: warm clothes in cold, thin clothes in hot; building on higher ground.",
          bodyAm:
            "ጥገኝነት: ምግብ፣ ውሃ፣ መጠለያ።\n" +
            "ማሻሻል: ደን መቁረጥ፣ ግድብ መስራት።\n" +
            "መላመድ: ልብስ፣ ቤት።",
        },
        {
          id: "n2-5",
          title: "Adaptation responses — three categories",
          titleAm: "የመላመድ ምላሾች",
          body:
            "TECHNOLOGICAL SOLUTIONS (GREY MEASURES):\n" +
            "• High-tech, innovative.\n" +
            "• High funding needed.\n" +
            "• More research + training.\n\n" +
            "ECOSYSTEM-BASED (GREEN MEASURES):\n" +
            "• Nature-based solutions.\n" +
            "• Ecosystem services.\n" +
            "• Low cost.\n" +
            "• Example: reforestation to stop desertification.\n\n" +
            "BEHAVIORAL/MANAGERIAL/POLICY (SOFT MEASURES):\n" +
            "• Low-cost approaches.\n" +
            "• Increase adaptive capacity + resilience.\n\n" +
            "Green + soft measures = low cost; increase resilience.",
          bodyAm:
            "Grey: ከፍተኛ ወጪ።\n" +
            "Green: ተፈጥሮ-ተኮር፣ ዝቅተኛ ወጪ።\n" +
            "Soft: ፖሊሲ፣ ባህሪ።",
        },
        {
          id: "n2-6",
          title: "Two types of adaptation",
          titleAm: "ሁለቱ የመላመድ ዓይነቶች",
          body:
            "AUTONOMOUS ADAPTATION (SPONTANEOUS):\n" +
            "• NOT a conscious response.\n" +
            "• Triggered by ecological changes in natural systems.\n" +
            "• Triggered by market or lifestyle changes in human systems.\n\n" +
            "PLANNED ADAPTATION:\n" +
            "• Result of DELIBERATE policy decision.\n" +
            "• Based on awareness that conditions changed.\n" +
            "• Action required to return to / maintain / achieve desired state.",
          bodyAm:
            "Autonomous = በራስ-ሰር።\n" +
            "Planned = በፖሊሲ።",
        },
        {
          id: "n2-7",
          title: "⚠ Remember trap — Human-environment",
          titleAm: "⚠ አትርሳ — ሰው–አካባቢ",
          body:
            "• Environment = all external factors affecting organism.\n" +
            "• Determinism = environment dictates culture (19th c.; rejected 1950s).\n" +
            "• Possibilism = humans choose responses (modern view).\n" +
            "• THREE interactions: dependence, modification, adaptation.\n" +
            "• GREEN + SOFT = low cost; GREY (technological) = high cost.\n" +
            "• AUTONOMOUS = spontaneous (ecological).\n" +
            "• PLANNED = deliberate policy decision.\n" +
            "• Positive modification: afforestation, conservation.",
          bodyAm:
            "Determinism vs Possibilism።\n" +
            "ጥገኝነት፣ ማሻሻል፣ መላመድ።\n" +
            "Autonomous vs Planned።",
        },
      ],
    },

    // ============================================================
    // 6.3 INDIGENOUS KNOWLEDGE
    // ============================================================
    {
      id: "n3",
      title: "6.3 Indigenous Knowledge in Conservation of Natural Resources",
      titleAm: "6.3 የአገር በቀል እውቀት በተፈጥሮ ሀብት ጥበቃ",
      body:
        "Abatu, African people have accumulated vast INDIGENOUS KNOWLEDGE about biodiversity + its uses — orally transferred across generations.",
      bodyAm:
        "አባቱ፣ ባህላዊ እውቀት = በትውልድ ተላልፎ የመጣ።",
      children: [
        {
          id: "n3-1",
          title: "Definition and importance",
          titleAm: "ትርጉምና ጠቀሜታ",
          body:
            "INDIGENOUS KNOWLEDGE:\n" +
            "• Accumulated among indigenous peoples.\n" +
            "• Orally transferred across generations.\n" +
            "• Basis for conservation of natural resources.\n" +
            "• Valuable in managing environmental degradation.\n" +
            "• Valuable for sustainable use of natural resources.\n\n" +
            "ROLE OF PLANT MEDICINE IN AFRICA:\n" +
            "• Heavy reliance — local availability.\n" +
            "• Low price.\n" +
            "• Accepted by local communities.\n" +
            "• Few health care centers + medical professionals (especially rural).\n" +
            "• Important part of health care system since ancient times.",
          bodyAm:
            "በትውልድ ተላልፏል።\n" +
            "ለጥበቃ መሠረት ነው።\n" +
            "የእፅዋት መድኃኒት ዋና ነው።",
        },
        {
          id: "n3-2",
          title: "Case study — Teso community (Busia County, Kenya)",
          titleAm: "የቴሶ ማህበረሰብ (ኬንያ)",
          body:
            "TESO COMMUNITY (Busia County, Kenya):\n" +
            "• Dominics Dan Ayaa + Fuchaka Waswa (2016).\n" +
            "• Protected areas — prohibited farming, grazing, settlement.\n\n" +
            "EKUTET / EPUNYAS CEREMONY:\n" +
            "• Exhuming remains of dead buried at least 10 years.\n" +
            "• Elderly men + women performed.\n" +
            "• Children + foreigners NOT allowed.\n" +
            "• Remains transferred to SACRED central site in special baskets.\n" +
            "• Sacred sites became thick forests.\n" +
            "• No human activity allowed → habitats for flora + fauna.\n\n" +
            "WATER COURCES + WELLS:\n" +
            "• Rivers, marshes, swamps = dwelling places for ancestors + 'God's creatures'.\n" +
            "• Snakes, frogs, toads protected — believed to maintain water points.\n" +
            "• Strong rules + beliefs protected water sources for generations.",
          bodyAm:
            "Ekutet/Epunyas: አጥንት ማውጣት።\n" +
            "የተቀደሱ ቦታዎች → ደን።\n" +
            "ውሃ ምንጮች ጥበቃ።",
        },
        {
          id: "n3-3",
          title: "⚠ Remember trap — Indigenous knowledge",
          titleAm: "⚠ አትርሳ — ባህላዊ እውቀት",
          body:
            "• Indigenous knowledge = accumulated + orally transferred.\n" +
            "• Basis for conservation in Africa.\n" +
            "• Plant medicine = important health care system.\n" +
            "• Teso community (Kenya) = example.\n" +
            "• Ekutet/Epunyas = exhuming remains after 10+ years.\n" +
            "• Sacred sites → thick forests → habitats.\n" +
            "• Water sources = dwelling places for ancestors.\n" +
            "• Snakes, frogs, toads = protectors of water.",
          bodyAm:
            "በትውልድ ተላልፏል።\n" +
            "Teso (ኬንያ) = ምሳሌ።\n" +
            "Ekutet = አጥንት ማውጣት።",
        },
      ],
    },

    // ============================================================
    // KEY DEFINITIONS
    // ============================================================
    {
      id: "nFormula",
      title: "Key Definitions & Relationships — Unit 6",
      titleAm: "ዋና ትርጓሜዎች — ክፍል 6",
      body:
        "| Concept                       | Definition / Key Fact                              |\n" +
        "|-------------------------------|----------------------------------------------------|\n" +
        "| Population change             | Difference in population size over a period        |\n" +
        "| Africa 1500 population        | 80 million                                         |\n" +
        "| Africa 1900 population        | 100 million                                        |\n" +
        "| Africa 2021 population        | ~1.37 billion                                      |\n" +
        "| Africa growth rate (2021)     | 2.45%                                              |\n" +
        "| Stagnation cause              | Slave trade + colonization + disease               |\n" +
        "| Environment                   | External factors affecting an organism             |\n" +
        "| Environmental determinism     | Environment dictates culture                       |\n" +
        "| Environmental possibilism     | Humans choose responses                            |\n" +
        "| Dependence                    | Rely on environment for survival                   |\n" +
        "| Modification                  | Change environment to meet needs                   |\n" +
        "| Adaptation                    | Adjust to environment                              |\n" +
        "| Autonomous adaptation         | Spontaneous (ecological)                           |\n" +
        "| Planned adaptation            | Deliberate policy decision                         |\n" +
        "| Grey measures                 | Technological                                      |\n" +
        "| Green measures                | Ecosystem-based                                    |\n" +
        "| Soft measures                 | Behavioral/managerial/policy                       |\n" +
        "| Indigenous knowledge          | Accumulated + orally transferred; conservation     |\n" +
        "| Teso community                | Busia County, Kenya; sacred sites conservation     |",
      bodyAm:
        "| ጽንሰ-ሐሳብ          | ትርጉም                            |\n" +
        "|-------------------|----------------------------------|\n" +
        "| 1500              | 80M                              |\n" +
        "| 1900              | 100M                             |\n" +
        "| 2021              | 1.37B                            |\n" +
        "| Determinism       | አካባቢ ይወስናል                      |\n" +
        "| Possibilism       | ሰው ይመርጣል                        |\n" +
        "| Autonomous        | በራስ-ሰር                           |\n" +
        "| Planned           | በፖሊሲ                            |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 6",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 6",
      body:
        "1) Population change = difference from start to end of a period.\n" +
        "2) Africa 1500: 80M; 1900: 100M (+20M in 400 years).\n" +
        "3) Stagnation caused by: slave trade, colonization, deadly diseases.\n" +
        "4) Determinism = environment dictates (19th c.); rejected 1950s.\n" +
        "5) Possibilism = humans choose (modern).\n" +
        "6) Three interactions: dependence, modification, adaptation.\n" +
        "7) Autonomous = spontaneous; Planned = deliberate policy.\n" +
        "8) Green + soft = low cost; grey = high cost.\n" +
        "9) Africa 2021 population = 1.37 billion; 2.45% growth.\n" +
        "10) Asia + Africa = ~77% of world population.\n" +
        "11) Indigenous knowledge = basis for conservation.\n" +
        "12) Teso community (Kenya) = sacred sites → forests.",
      bodyAm:
        "1) 80M → 100M።\n" +
        "2) ባርነት፣ ቅኝ ግዛት፣ በሽታ።\n" +
        "3) Determinism vs Possibilism።\n" +
        "4) Autonomous vs Planned።\n" +
        "5) Teso = ኬንያ።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Population change is:", options: ["Birth minus death only", "Difference in size from start to end of a period", "Only migration", "Death rate"], answer: "1", explanation: "Difference over a period." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Which INCREASES population?", options: ["Death", "Emigration", "Birth + immigration", "Out-migration"], answer: "2", explanation: "Births + immigration increase population." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Which DECREASES population?", options: ["Birth", "Immigration", "Death + emigration", "Fertility"], answer: "2", explanation: "Deaths + emigration decrease population." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Africa's population in 1500 AD was about:", options: ["8 million", "80 million", "800 million", "8 billion"], answer: "1", explanation: "80 million." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Africa's population in 1900 AD was about:", options: ["10 million", "100 million", "1 billion", "500 million"], answer: "1", explanation: "100 million." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Africa's population in 2021 was about:", options: ["500 million", "1.37 billion", "2.5 billion", "5 billion"], answer: "1", explanation: "~1.37 billion." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "The environment is:", options: ["Only animals", "Only plants", "Surroundings affecting organisms", "Only weather"], answer: "2", explanation: "Environment = all external factors." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Environmental determinism says:", options: ["Humans shape environment", "Environment dictates culture", "Humans choose responses", "Environment is irrelevant"], answer: "1", explanation: "Determinism = environment dictates." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Environmental possibilism says:", options: ["Environment dictates", "Humans have no choice", "Humans choose from possible responses", "Environment is always irrelevant"], answer: "2", explanation: "Possibilism = humans choose responses." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Which is an example of DEPENDENCE on environment?", options: ["Building dams", "Cutting forests", "Using water for drinking", "Wearing warm clothes"], answer: "2", explanation: "Drinking water = dependence." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Which is an example of MODIFICATION?", options: ["Drinking water", "Cutting forests", "Wearing clothes", "Building on higher ground"], answer: "1", explanation: "Cutting forests = modification." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Which is an example of ADAPTATION?", options: ["Building dams", "Cutting forests", "Wearing warm clothes in cold climate", "Drilling for oil"], answer: "2", explanation: "Warm clothes = adaptation." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Autonomous adaptation is also called:", options: ["Planned adaptation", "Spontaneous adaptation", "Technological adaptation", "Grey adaptation"], answer: "1", explanation: "Autonomous = spontaneous." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Planned adaptation is the result of:", options: ["Random change", "Deliberate policy decision", "Ecological change only", "Market forces only"], answer: "1", explanation: "Planned = deliberate policy." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Indigenous knowledge is:", options: ["Always written", "Modern science", "Accumulated + orally transferred", "Government policy"], answer: "2", explanation: "Indigenous knowledge = orally transferred." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Which is an example of a GREEN measure?", options: ["Building concrete dams", "Reforestation", "High-tech desalination", "Grey infrastructure"], answer: "1", explanation: "Reforestation = green (ecosystem-based)." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "The Teso community is in:", options: ["Ethiopia", "Kenya", "Tanzania", "Uganda"], answer: "1", explanation: "Teso community = Busia County, Kenya." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Plant medicine is important in Africa because:", options: ["It's always scientific", "It's imported", "Local availability + low price", "It's only for rich"], answer: "2", explanation: "Local + low price + acceptance." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "Africa's population STAGNATION (1500–1900) was mainly due to:", options: ["Rich mineral resources", "Slave trade, colonization, diseases", "High fertility", "Good health care"], answer: "1", explanation: "Slave trade, colonization, deadly diseases." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "Africa's growth rate (2021) was about:", options: ["0.5%", "1.0%", "2.45%", "5%"], answer: "2", explanation: "2.45% per year." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "Asia + Africa together account for about what % of world population?", options: ["50%", "60%", "77%", "90%"], answer: "2", explanation: "~77%." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "Environmental determinism was popular in:", options: ["17th century", "18th century", "19th century", "21st century"], answer: "2", explanation: "Popular 19th century; rejected 1950s." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "Environmental possibilism emphasizes:", options: ["Environment dictates everything", "Humans have no choice", "Humans choose from possible responses", "No human impact"], answer: "2", explanation: "Humans CHOOSE from alternatives." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "Which is NOT a benefit from the environment?", options: ["Food", "Water", "Shelter", "Pollution"], answer: "3", explanation: "Pollution is a negative impact, not a benefit." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "Adaptation aims to:", options: ["Increase vulnerability", "Improve chances of survival", "Destroy environment", "Increase pollution"], answer: "1", explanation: "Adaptation = improve survival chances." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "Adaptation responses can be grouped into:", options: ["Green, red, blue", "Grey, green, soft", "Hard, soft, sharp", "Technical, physical, virtual"], answer: "1", explanation: "Grey (technological), green (ecosystem), soft (behavioral/policy)." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "Green + soft measures are usually:", options: ["High cost", "Low cost", "Impossible", "Illegal"], answer: "1", explanation: "Green + soft = low-cost solutions." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "Reforestation can help stop desertification because it:", options: ["Destroys soils", "Recharges groundwater", "Kills plants", "Creates pollution"], answer: "1", explanation: "Reforestation = recharge groundwater + stop desertification." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "The three types of human-environment interaction are:", options: ["Birth, death, migration", "Dependence, modification, adaptation", "Primary, secondary, tertiary", "Grey, green, soft"], answer: "1", explanation: "Dependence, modification, adaptation." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "Indigenous knowledge in Africa is:", options: ["Irrelevant", "Only written", "Basis for conservation of natural resources", "Only scientific"], answer: "2", explanation: "Indigenous knowledge = basis for conservation." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Plant medicine is important in Africa mainly because:", options: ["It's imported", "Local availability + low cost", "Fewer plants", "Government mandate"], answer: "1", explanation: "Local + low cost + acceptance." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "In the Teso community case study, sacred sites became:", options: ["Farmland", "Cities", "Thick forests (habitats)", "Deserts"], answer: "2", explanation: "Sacred sites → thick forests → habitats." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "Which is NOT a negative environmental impact of human activity?", options: ["Pollution", "Deforestation", "Afforestation", "Overpopulation"], answer: "2", explanation: "Afforestation = positive impact." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "The world's population in 2021 was about:", options: ["5 billion", "7.875 billion", "10 billion", "15 billion"], answer: "1", explanation: "~7.875 billion." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Which two continents have crossed the 1 billion population milestone?", options: ["Africa + Europe", "Asia + Africa", "Asia + Europe", "Africa + Americas"], answer: "1", explanation: "Only Asia + Africa have crossed 1 billion." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "The demographic explosion of the developing world occurred in:", options: ["17th century", "18th century", "19th century", "20th century"], answer: "3", explanation: "20th century = demographic explosion." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Environmental determinism was rejected in favor of:", options: ["Environmentalism", "Possibilism", "Capitalism", "Feudalism"], answer: "1", explanation: "Rejected → replaced by possibilism." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "Which is a characteristic of autonomous adaptation?", options: ["Deliberate policy decision", "Conscious response", "Not conscious, triggered by ecological changes", "Government-driven"], answer: "2", explanation: "Autonomous = NOT conscious; triggered by ecological changes." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "Africa's population grew from 80M (1500) to 100M (1900) — an increase of:", options: ["10M", "20M", "50M", "100M"], answer: "1", explanation: "+20 million in 400 years." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "Which climate-related concept is NOT part of human-environment interaction types?", options: ["Dependence", "Modification", "Adaptation", "Colonization"], answer: "3", explanation: "Colonization is not an interaction type — the three are dependence, modification, adaptation." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Natural calamities such as floods and droughts are:", options: ["Only human-caused", "Nature's negative impacts on people", "Only adaptation responses", "Planned responses"], answer: "1", explanation: "Natural calamities = nature's negative impacts." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "The Teso community practice of Ekutet/Epunyas involved:", options: ["Building dams", "Exhuming remains of the dead", "Planting trees", "Damming rivers"], answer: "1", explanation: "Ekutet/Epunyas = exhuming dead remains." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "Which statement is TRUE?", options: ["Africa has the highest population in the world", "Asia + Africa = ~77% of world population", "Oceania has the highest population", "Europe has 20% of world population"], answer: "1", explanation: "Asia + Africa = ~77%." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Define population change and list its components.", answer: "POPULATION CHANGE = difference in the size of the population from the beginning to the end of a certain period.\n\nCOMPONENTS:\n• INCREASES: Fertility (births) + Immigration.\n• DECREASES: Mortality (deaths) + Emigration.\n\nComposition also changes (birth + death rates, sex ratios, life expectancies, migration rates).\n\nUnderstanding these changes is crucial for development planning.", explanation: "Population change = difference over period; components = births, deaths, migration." },
    { id: "q45", type: "short", difficulty: "easy", stem: "Differentiate environmental determinism and possibilism.", answer: "ENVIRONMENTAL DETERMINISM:\n• Natural/physical environment shapes + creates cultures.\n• Environment dictates culture + human activities.\n• Popularized by Europeans in 19th century.\n• Rejected in 1950s.\n\nENVIRONMENTAL POSSIBILISM:\n• People can adapt to diverse environments.\n• Humans choose from many alternatives (possibilities).\n• Despite environmental limitations.\n• Opposite of determinism.\n• Degree of environmental influence declines with modernization + technology.", explanation: "Determinism = environment dictates (19th c.); Possibilism = humans choose (modern)." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Explain the three types of human-environment interaction.", answer: "1) DEPENDENCE:\n• Rely on environment for food, water, shelter, clothing.\n• Also for economic activities (raw materials + ecosystem services).\n• Environment provides carbon sequestration, water purification, flood risk management.\n\n2) MODIFICATION:\n• Humans CHANGE environment to meet needs.\n• Examples: cutting forests for farmland; building dams; drilling oil wells.\n• Positive: afforestation + conservation.\n• Negative: pollution, deforestation, overpopulation.\n\n3) ADAPTATION:\n• Adjustment to environment for survival.\n• Examples: warm clothes in cold; thin clothes in hot; building on higher ground to avoid floods.", explanation: "Dependence, modification, adaptation." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Explain the two types of adaptation.", answer: "AUTONOMOUS ADAPTATION (also called SPONTANEOUS):\n• NOT a conscious response to environmental change.\n• Triggered by ecological changes in natural systems.\n• Triggered by market or lifestyle changes in human systems.\n\nPLANNED ADAPTATION:\n• Result of a DELIBERATE policy decision.\n• Based on awareness that conditions have changed or are about to change.\n• Action required to return to / maintain / achieve desired state.\n\nBOTH types help humans + natural systems build resilience against environmental changes.", explanation: "Autonomous = spontaneous; Planned = deliberate policy." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Explain Africa's population stagnation (1500–1900) and demographic explosion (20th century).", answer: "STAGNATION (1500–1900):\n• 1500 AD: 80 million → 1900 AD: 100 million.\n• Only +20 million in 400 years.\n\nCAUSES:\n• Slave trade.\n• Colonization.\n• Spread of deadly diseases.\n\nMeanwhile: Asia, South America, North America grew 3–5×.\n\nDEMOGRAPHIC EXPLOSION (20th century):\n• All developing regions (including SSA) experienced high population growth.\n• SSA 1900–1980: ~2.8%/year average growth.\n• Sub-regions 1980–2015: Eastern (2.9%), Central (3.0%), Western (2.7%), Southern (1.8%).\n• 2015 SSA population = 962 million (10× 1900 level).\n• 2021: >1.37 billion; 2.45% growth.\n\nCAUSES: Advances in medicine + improved living standards reduced mortality, increasing life expectancy.", explanation: "80M → 100M stagnation; 20th-century explosion." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Explain indigenous knowledge and its role in conservation in Africa.", answer: "INDIGENOUS KNOWLEDGE:\n• Accumulated among indigenous peoples of Africa.\n• Orally transferred across many generations.\n• Basis for conservation of natural resources.\n• Valuable in managing environmental degradation.\n• Valuable for sustainable use of natural resources.\n\nPLANT MEDICINE:\n• Important part of African health care for centuries.\n• Heavy reliance due to: local availability, low price, community acceptance, few health care centers + medical professionals (especially rural).\n\nCASE STUDY — TESO COMMUNITY (Busia County, Kenya):\n• Dominics Dan Ayaa + Fuchaka Waswa (2016).\n• Protected areas — no farming, grazing, settlement.\n• Ekutet/Epunyas ceremony: exhuming remains buried 10+ years.\n• Remains transferred to sacred sites → became thick forests (habitats).\n• Water sources (rivers, marshes, wells) treated as sacred — dwelling places for ancestors + God's creatures.\n• Snakes, frogs, toads protected — believed to maintain water points.\n• Strong rules + beliefs protected these sites for generations.", explanation: "Accumulated + orally transferred; Teso example = sacred sites." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Explain the categories of adaptation responses.", answer: "THREE CATEGORIES OF ADAPTATION RESPONSES:\n\n1) TECHNOLOGICAL SOLUTIONS — GREY MEASURES:\n• High-tech, innovative technologies.\n• Need large amounts of funding.\n• Require more research, experience, training to operate.\n\n2) ECOSYSTEM-BASED — GREEN MEASURES:\n• Nature-based solutions.\n• Provide ecosystem services to environmental problems.\n• Example: reforestation can stop desertification + recharge groundwater in times of drought.\n• Often low-cost solutions.\n\n3) BEHAVIORAL, MANAGERIAL, POLICY APPROACHES — SOFT MEASURES:\n• Behavioral + policy approaches.\n• Low-cost solutions.\n• Aim at decreasing sensitivity + increasing adaptive capacity.\n• Build resilience of human + natural systems.\n\nKEY: Green + soft measures = low-cost + build resilience. Grey (technological) = high-cost + require training.", explanation: "Grey (technological), green (ecosystem), soft (behavioral/policy)." },
  ],
};