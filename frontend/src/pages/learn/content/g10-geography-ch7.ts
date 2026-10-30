import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 GEOGRAPHY — UNIT 7
// GEOGRAPHIC ISSUES AND PUBLIC CONCERNS IN AFRICA
// Source: Grade 10 Geography Student Textbook (pp. 159–174)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, definition boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10GeographyCh7: Chapter = {
  id: "ch7",
  number: 7,
  title: "Geographic Issues and Public Concerns in Africa",
  titleAm: "የአፍሪካ ጂኦግራፊያዊ ጉዳዮችና ህዝባዊ ጭንቀቶች",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about THREE major geographic issues in Africa:\n" +
        "1) UNPLANNED URBANIZATION — causes + consequences.\n" +
        "2) MIGRATION — factors + impacts.\n" +
        "3) COASTAL POLLUTION — causes + effects + solutions.\n\n" +
        "The WHOLE chapter reduces to FOUR key ideas:\n" +
        "• Urbanization = shift from rural to urban areas; unplanned → slums, poor infrastructure.\n" +
        "• Africa has 7 megacities (over 10 million): Cairo, Kinshasa, Lagos, Accra, Johannesburg–Pretoria, Khartoum, Nairobi.\n" +
        "• Migration = movement; PUSH factors (leave) vs PULL factors (attract).\n" +
        "• Coastal pollution = mostly from land-based sources (sewage, industrial waste, plastic).\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ ሦስቱ ዋና ጉዳዮች፡\n" +
        "1) ያልተዘጋጀ ከተማነት\n" +
        "2) ፍልሰት\n" +
        "3) የባህር ጠረፍ ብክለት",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand unplanned urbanization",
          titleAm: "ደረጃ 1 · ያልተዘጋጀ ከተማነት",
          body:
            "URBANIZATION = population shift from RURAL to URBAN areas.\n\n" +
            "UNPLANNED URBANIZATION causes:\n" +
            "• Unplanned + unregulated growth.\n" +
            "• Legacy of colonialism.\n" +
            "• Structural adjustment programs (IMF).\n" +
            "• Neoliberalism pressure.\n" +
            "• Weak urban planning institutions.\n\n" +
            "CONSEQUENCES:\n" +
            "• Slums + squatter settlements.\n" +
            "• Poor infrastructure.\n" +
            "• Economic problems.\n" +
            "• Health problems.\n" +
            "• Social instability.\n" +
            "• Climate change vulnerability.",
          bodyAm:
            "ያልተዘጋጀ ከተማነት።\n" +
            "ችግሮች: ሰፈራዎች፣ መሠረተ ልማት፣ ጤና።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Master Africa's megacities",
          titleAm: "ደረጃ 2 · ሜጋ ከተሞች",
          body:
            "AFRICA HAS 7 MEGACITIES (populations over 10 million):\n" +
            "1) Cairo (Egypt)\n" +
            "2) Kinshasa (DRC)\n" +
            "3) Lagos (Nigeria)\n" +
            "4) Accra (Ghana)\n" +
            "5) Johannesburg–Pretoria (South Africa)\n" +
            "6) Khartoum (Sudan)\n" +
            "7) Nairobi (Kenya)\n\n" +
            "PROJECTED:\n" +
            "• Africa's urban population = 2.5 billion by 2050.\n" +
            "• 21% of world's projected urban population.",
          bodyAm:
            "7 ሜጋ ከተሞች፡\n" +
            "ካይሮ፣ ኪንሻሳ፣ ሌጎስ፣ አክራ፣ ጆሃንስበርግ–ፕሪቶሪያ፣ ካርቱም፣ ናይሮቢ።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master migration push/pull factors",
          titleAm: "ደረጃ 3 · Push/Pull",
          body:
            "PUSH FACTORS (leave origin):\n" +
            "• Poor socio-economic conditions.\n" +
            "• Low wages.\n" +
            "• High unemployment.\n" +
            "• Poverty.\n" +
            "• Poor governance + corruption.\n" +
            "• Political instability.\n" +
            "• Conflict + civil strife.\n" +
            "• War, drought, famine, natural disasters.\n\n" +
            "PULL FACTORS (attract destination):\n" +
            "• Better job opportunities.\n" +
            "• Higher income.\n" +
            "• Greater security.\n" +
            "• Better education + health care.",
          bodyAm:
            "Push: ድህነት፣ ስራ አጥነት፣ ግጭት።\n" +
            "Pull: ስራ፣ ገቢ፣ ትምህርት፣ ጤና።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Did you know Africa has 7 megacities?\n" +
            "2) Did you know 60% of urban jobs in Africa are informal?\n" +
            "3) Did you know migration can be voluntary OR forced?\n" +
            "4) Did you know >80% of marine pollution in South Africa is land-based?\n" +
            "5) Did you know Africa produces 5% and consumes 4% of global plastic?",
          bodyAm:
            "1) 7 ሜጋ ከተሞች?\n" +
            "2) 60% መደበኛ ያልሆነ?\n" +
            "3) Voluntary/Forced?\n" +
            "4) 80% መሬት ላይ የተመሠረተ?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፋርት",
          body:
            "• URBANIZATION = shift from rural to urban.\n" +
            "• UNPLANNED causes: colonial legacy, structural adjustment, neoliberalism, weak planning.\n" +
            "• 7 megacities: Cairo, Kinshasa, Lagos, Accra, Johannesburg–Pretoria, Khartoum, Nairobi.\n" +
            "• ~2.5 billion urban Africans by 2050.\n" +
            "• 60% of urban jobs in Africa = informal.\n" +
            "• MIGRATION: internal vs international; voluntary vs forced.\n" +
            "• Push = leave origin; Pull = attract destination.\n" +
            "• Coastal pollution: >80% from land-based sources in South Africa.\n" +
            "• Africa produces 5%, consumes 4% of global plastic.\n" +
            "• Plastic consumption: Africa 16 kg/person; world 45 kg; W. Europe 136 kg.",
          bodyAm:
            "• 7 ሜጋ ከተሞች።\n" +
            "• 60% መደበኛ ያልሆነ።\n" +
            "• Push vs Pull።\n" +
            "• 80% መሬት ላይ።",
        },
      ],
    },

    // ============================================================
    // 7.1 UNPLANNED URBANIZATION
    // ============================================================
    {
      id: "n1",
      title: "7.1 Unplanned Urbanization",
      titleAm: "7.1 ያልተዘጋጀ ከተማነት",
      body:
        "Abatu, URBANIZATION = population shift from rural to urban areas. UNPLANNED = rapid, unregulated growth causing slums, poor infrastructure, and other issues.",
      bodyAm:
        "አባቱ፣ ከተማነት = ከገጠር ወደ ከተማ ፍልሰት።",
      children: [
        {
          id: "n1-1",
          title: "Urbanization definition",
          titleAm: "የከተማነት ትርጉም",
          body:
            "URBANIZATION:\n" +
            "• Population shift from rural to urban areas.\n" +
            "• Corresponding decrease in proportion living in rural areas.\n" +
            "• Ways societies adapt to these situations.\n" +
            "• Process by which towns/cities form + grow.\n\n" +
            "EFFECTS OF URBAN GROWTH:\n" +
            "• Environmental + ecological footprints increase.\n" +
            "• Urban expansion into forests, wetlands, agriculture → habitat clearing + degradation.\n" +
            "• Consumptive lifestyles → pollution + waste.",
          bodyAm:
            "ከገጠር → ከተማ።\n" +
            "አካባቢያዊ ጫና ይጨምራል።",
        },
        {
          id: "n1-2",
          title: "Benefits of well-managed urbanization",
          titleAm: "የተዘጋጀ ከተማነት ጥቅሞች",
          body:
            "URBANIZATION IS NOT BAD PER SE:\n" +
            "• Brings economic, cultural, societal benefits.\n" +
            "• Well-managed cities = efficient + effective.\n" +
            "• Economies of scale.\n" +
            "• Proximity + diversity → innovation + employment.\n" +
            "• Exchanging ideas breeds new ideas.",
          bodyAm:
            "ከተማነት ጥሩ ነው (በትክክል ከተዘጋጀ)።\n" +
            "ፈጠራ ይፈጥራል።",
        },
        {
          id: "n1-3",
          title: "Key features of unplanned urbanization",
          titleAm: "የunplanned ባህሪያት",
          body:
            "KEY FEATURES:\n" +
            "• Urban sprawl + compactness.\n" +
            "• Unplanned urban growth.\n" +
            "• Land use change.\n" +
            "• Accelerated poverty.\n" +
            "• Environmental degradation.\n" +
            "• Poor air + water quality.\n" +
            "• Insufficient water availability.\n" +
            "• Waste-disposal problems.",
          bodyAm:
            "Sprawl፣ ያልተዘጋጀ እድገት፣ ድህነት፣ ብክለት።",
        },
        {
          id: "n1-4",
          title: "Causes of unplanned urbanization in Africa",
          titleAm: "ምክንያቶች",
          body:
            "CAUSES:\n" +
            "1) Unplanned + unregulated growth.\n" +
            "2) Legacy of COLONIALISM.\n" +
            "3) Policy pressure of international institutions (STRUCTURAL ADJUSTMENT PROGRAM of IMF).\n" +
            "4) Pressure of developed countries (NEOLIBERALISM).\n" +
            "5) Weak urban planning institutions.\n\n" +
            "RURAL-URBAN MIGRATION is a main driver:\n" +
            "• Prospect of greater employment.\n" +
            "• Hope of better life in cities.",
          bodyAm:
            "ቅኝ ግዛት፣ SAP (IMF)፣ ኒዮሊበራሊዝም፣ ደካማ ዕቅድ።\n" +
            "Rural-urban ፍልሰት።",
        },
        {
          id: "n1-5",
          title: "Consequences — slums and squatter settlements",
          titleAm: "ውጤቶች — ሰፈራዎች",
          body:
            "SLUMS + SQUATTER SETTLEMENTS:\n" +
            "• Unlawful residential settlements.\n" +
            "• Growth exacerbated by:\n" +
            "   – Fast-paced industrialization.\n" +
            "   – Lack of developed land for housing.\n" +
            "   – Large influx of rural immigrants.\n" +
            "   – Very high land prices beyond urban poor.\n\n" +
            "ADDis ABABA CASE:\n" +
            "• Established from villages WITHOUT a master plan.\n" +
            "• >2/3 of population believed to live in slums.\n" +
            "• Two types:\n" +
            "   1) Slums — congested areas, deteriorated infrastructure.\n" +
            "   2) Squatter settlements — illegal settlements on open space, farmland, steep slopes, river buffers, roadsides.",
          bodyAm:
            "ያልተፈቀዱ ሰፈራዎች።\n" +
            "አዲስ አበባ: >2/3 በሰፈራ።\n" +
            "2 ዓይነቶች: slums + squatters።",
        },
        {
          id: "n1-6",
          title: "Consequences — poor infrastructure, economy, health, social",
          titleAm: "ሌሎች ውጤቶች",
          body:
            "POOR INFRASTRUCTURE:\n" +
            "• Insufficient investment in urban infrastructure.\n" +
            "• Weak transportation (roads, railroads, airports, ports).\n" +
            "• Inadequate electric power.\n" +
            "• Water supply + sewage shortages.\n" +
            "• Weak communications.\n" +
            "• Infrastructure growth does NOT keep pace with population.\n\n" +
            "ECONOMIC PROBLEMS:\n" +
            "• High costs of housing, food, transport.\n" +
            "• High unemployment.\n" +
            "• ~60% of jobs in INFORMAL or GREY economy.\n" +
            "• Informal jobs neither taxed nor monitored.\n\n" +
            "HEALTH PROBLEMS:\n" +
            "• Obesity, respiratory diseases.\n" +
            "• Lack of adequate sanitation.\n" +
            "• Rapid spread of communicable diseases.\n\n" +
            "SOCIAL INSTABILITY:\n" +
            "• Urban violence + unrest.\n" +
            "• Widening inequalities.\n" +
            "• Competition for scarce resources (land).\n" +
            "• Weak city governance → crime.",
          bodyAm:
            "መሠረተ ልማት ደካማ።\n" +
            "60% መደበኛ ያልሆነ ስራ።\n" +
            "ጤና ችግር።\n" +
            "ማህበራዊ አለመረጋጋት።",
        },
        {
          id: "n1-7",
          title: "Climate change and urbanization",
          titleAm: "የአየር ንብረት ለውጥ",
          body:
            "CLIMATE CHANGE IMPACTS:\n" +
            "• Rapid + poorly planned expansion → exposure to climate effects.\n" +
            "• Migration driven partly by extreme weather.\n" +
            "• Cities near sea/natural waterways → higher flood risk.\n\n" +
            "SOLUTION: making cities RESILIENT to extreme weather should be a priority for both local governments + private sectors.",
          bodyAm:
            "ጎርፍ አደጋ።\n" +
            "መላመድ ቅድሚያ ይሁን።",
        },
        {
          id: "n1-8",
          title: "⚠ Remember trap — Urbanization",
          titleAm: "⚠ አትርሳ — ከተማነት",
          body:
            "• Urbanization = rural → urban shift.\n" +
            "• Unplanned causes: colonial legacy, SAP, neoliberalism, weak planning.\n" +
            "• 7 megacities: Cairo, Kinshasa, Lagos, Accra, Johannesburg–Pretoria, Khartoum, Nairobi.\n" +
            "• ~2.5 billion urban Africans by 2050 (21% of world's urban).\n" +
            "• 60% of urban jobs in Africa = informal.\n" +
            "• Addis Ababa: >2/3 live in slums.\n" +
            "• Slum ≠ squatter: slums = congested; squatters = illegal.\n" +
            "• Urban primacy = one city dominates (usually capital).",
          bodyAm:
            "• 7 ሜጋ ከተሞች።\n" +
            "• 60% informal።\n" +
            "• Addis: >2/3 slums።",
        },
      ],
    },

    // ============================================================
    // 7.2 MIGRATION
    // ============================================================
    {
      id: "n2",
      title: "7.2 Migration — Factors and Impacts on Africa",
      titleAm: "7.2 ፍልሰት",
      body:
        "Abatu, MIGRATION = permanent change of residence by an individual or group. Can be internal or international; voluntary or forced.",
      bodyAm:
        "አባቱ፣ ፍልሰት = ቋሚ የመኖሪያ ለውጥ።",
      children: [
        {
          id: "n2-1",
          title: "Types of migration",
          titleAm: "የፍልሰት ዓይነቶች",
          body:
            "INTERNAL MIGRATION:\n" +
            "• Within a country.\n" +
            "• Example: rural → urban.\n\n" +
            "INTERNATIONAL MIGRATION:\n" +
            "• From one country to another.\n\n" +
            "VOLUNTARY MIGRATION:\n" +
            "• In search of better economic opportunities + good life.\n\n" +
            "FORCED MIGRATION:\n" +
            "• Expelled by factors: war, drought, famine, natural disasters, political conflicts.",
          bodyAm:
            "Internal vs International።\n" +
            "Voluntary vs Forced።",
        },
        {
          id: "n2-2",
          title: "Push factors",
          titleAm: "Push ምክንያቶች",
          body:
            "ECONOMIC PUSH:\n" +
            "• Poor socio-economic conditions.\n" +
            "• Low wages.\n" +
            "• High unemployment.\n" +
            "• Poverty.\n" +
            "• Mismatch between population growth + available resources.\n" +
            "• Low level of technology.\n" +
            "• Limited capacity to create jobs.\n\n" +
            "POLITICAL + SOCIAL PUSH:\n" +
            "• Poor governance.\n" +
            "• Corruption.\n" +
            "• Political instability.\n" +
            "• Conflict + civil strife.\n" +
            "• War, drought, famine, natural disasters.",
          bodyAm:
            "ድህነት፣ ስራ አጥነት፣ ግጭት፣ ጦርነት።",
        },
        {
          id: "n2-3",
          title: "Pull factors",
          titleAm: "Pull ምክንያቶች",
          body:
            "PULL FACTORS:\n" +
            "• Real or perceived opportunity for better life.\n" +
            "• High income.\n" +
            "• Greater security.\n" +
            "• Better quality of education.\n" +
            "• Better health care.\n" +
            "• Better infrastructure.",
          bodyAm:
            "ስራ፣ ገቢ፣ ደህንነት፣ ትምህርት፣ ጤና።",
        },
        {
          id: "n2-4",
          title: "Africa's migration history",
          titleAm: "የአፍሪካ ፍልሰት ታሪክ",
          body:
            "SLAVE MIGRATIONS (16th–19th centuries):\n" +
            "• Europeans forced migrations.\n" +
            "• Significantly reduced Africa's population.\n" +
            "• Contributed to population stagnation (1500–1900).\n\n" +
            "OTHER MOVEMENTS:\n" +
            "• Communities spread across 2–3 nation states.\n" +
            "• Movement often NOT limited by political boundaries.\n" +
            "• Shaped Africa's present demographic landscape.",
          bodyAm:
            "ባርነት 16ኛ–19ኛ ክፍለ ዘመን።\n" +
            "ህዝብ ቀነሰ።\n" +
            "ድንበር አቋራጭ እንቅስቃሴ።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap — Migration",
          titleAm: "⚠ አትርሳ — ፍልሰት",
          body:
            "• Migration = permanent change of residence.\n" +
            "• Internal vs international.\n" +
            "• Voluntary vs forced.\n" +
            "• PUSH = leave origin (poverty, conflict, drought).\n" +
            "• PULL = attract destination (jobs, education, health).\n" +
            "• Slave migrations (16th–19th c.) → Africa population stagnation.\n" +
            "• African communities often span multiple countries.",
          bodyAm:
            "Push vs Pull።\n" +
            "ባርነት = ህዝብ ቀነሰ።",
        },
      ],
    },

    // ============================================================
    // 7.3 COASTAL POLLUTION
    // ============================================================
    {
      id: "n3",
      title: "7.3 Coastal Pollution in Africa",
      titleAm: "7.3 የባህር ጠረፍ ብክለት",
      body:
        "Abatu, COASTAL POLLUTION = contamination of coastal waters. Most pollution is LAND-BASED — from sewage, industrial waste, and plastic.",
      bodyAm:
        "አባቱ፣ የባህር ጠረፍ ብክለት።",
      children: [
        {
          id: "n3-1",
          title: "Sources of pollution",
          titleAm: "የብክለት ምንጮች",
          body:
            "SOURCES:\n" +
            "• Discharge of sewage + industrial waste from coastal channels.\n" +
            "• Dumping of wastes at sea.\n" +
            "• Discharge of sewage + rubbish from ships.\n" +
            "• Handling of cargo.\n" +
            "• Exploration + exploitation of sea bed + ocean floor.\n" +
            "• Accidental pollution by oil spills.\n" +
            "• Pollutants from land by air + other routes.\n\n" +
            "MOST FREQUENT CAUSE: discharge of municipal sewage + industrial wastes into coastal waters or estuaries through LOW-QUALITY disposal facilities.",
          bodyAm:
            "የፍሳሽ ውሃ + የኢንዱስትሪ ቆሻሻ።\n" +
            "ነዳጅ መፍሰስ።",
        },
        {
          id: "n3-2",
          title: "Classes of pollutants",
          titleAm: "የብክለት ዓይነቶች",
          body:
            "MAJOR CLASSES:\n" +
            "• Decomposable organic materials.\n" +
            "• Heavy metals + other toxic matter.\n" +
            "• Dissolved + suspended non-toxic inorganic substances.\n" +
            "• Pathogenic organisms.\n\n" +
            "FACTORS AFFECTING SELF-PURIFICATION:\n" +
            "• Dilution.\n" +
            "• Temperature.\n" +
            "• Adsorption.\n" +
            "• Sedimentation.\n" +
            "• Nutrient deficiencies.",
          bodyAm:
            "Organic፣ ሄቪ ሜታል፣ ባክቴሪያ።\n" +
            "Self-purification ይጎዳል።",
        },
        {
          id: "n3-3",
          title: "Impacts of pollution",
          titleAm: "የብክለት ተጽእኖዎች",
          body:
            "IMPACTS:\n" +
            "• Modification + destruction of habitats.\n" +
            "• Over-fishing.\n" +
            "• Pollution traced to LAND-BASED human activities far from sea.\n" +
            "• Excessive sediment + microbes + organic nutrients.\n" +
            "• Nitrogen from sewage + agricultural/urban run-off.\n" +
            "• Destruction of wetlands + mangroves (natural filters).\n" +
            "• Oil leaks + accidental spills from shipping.\n" +
            "• Bilgewater discharge.\n" +
            "• Oil drilling + mineral extraction.",
          bodyAm:
            "Habitats ይጠፋሉ።\n" +
            "ናይትሮጅን ይከማቻል።\n" +
            "Wetlands ይጠፋሉ።",
        },
        {
          id: "n3-4",
          title: "Plastic pollution — a case study",
          titleAm: "የፕላስቲክ ብክለት",
          body:
            "GLOBAL PLASTIC PRODUCTION (2020): >400 million tons.\n" +
            "• China: 28% production; 20% consumption.\n" +
            "• North America: 19% production; 21% consumption.\n" +
            "• Western Europe: 19% production; 18% consumption.\n\n" +
            "AFRICA (2020):\n" +
            "• 1.3 billion people (16% of world).\n" +
            "• Produces 5% of global plastic.\n" +
            "• Consumes 4% of global plastic.\n" +
            "• Plastic consumption: 16 kg/person (2015).\n" +
            "• World average: 45 kg/person.\n" +
            "• Western Europe: 136 kg/person.\n\n" +
            "SOUTH AFRICA (2010):\n" +
            "• Ranked 11th worst plastic polluter in ocean.\n" +
            "• >80% of marine pollution from LAND-BASED sources.\n" +
            "• Only 16% of plastic recycled.\n" +
            "• ~8 million metric tons discarded plastic → rivers → oceans.",
          bodyAm:
            "ዓለም: 400M ቶን።\n" +
            "አፍሪካ: 5% ምርት፣ 4% ፍጆታ።\n" +
            "16 kg/ሰው።\n" +
            "ደቡብ አፍሪካ: 80% መሬት ላይ።",
        },
        {
          id: "n3-5",
          title: "Solutions",
          titleAm: "መፍትሔዎች",
          body:
            "SOLUTIONS:\n" +
            "• Multi-stakeholder interventions.\n" +
            "• Coordinated actions.\n" +
            "• Proper waste management infrastructure.\n" +
            "• Reduce plastic use + increase recycling.\n" +
            "• Protect + restore wetlands + mangroves.\n" +
            "• Control industrial + municipal discharge.\n" +
            "• Awareness + education.",
          bodyAm:
            "ብዙ ባለድርሻ ተሳትፎ።\n" +
            "የቆሻሻ አስተዳደር።\n" +
            "Recycling።",
        },
        {
          id: "n3-6",
          title: "⚠ Remember trap — Coastal pollution",
          titleAm: "⚠ አትርሳ — የባህር ብክለት",
          body:
            "• Most frequent cause: discharge of municipal sewage + industrial waste.\n" +
            "• >80% of marine pollution in South Africa is LAND-BASED.\n" +
            "• Africa produces 5%, consumes 4% of global plastic.\n" +
            "• Plastic consumption: Africa 16 kg/person; world 45 kg; W. Europe 136 kg.\n" +
            "• Global plastic production 2020: >400 million tons.\n" +
            "• China = largest plastic producer (28%) + consumer (20%).\n" +
            "• South Africa ranked 11th worst plastic polluter (2010).\n" +
            "• Only 16% of South African plastic recycled.",
          bodyAm:
            "80% መሬት ላይ።\n" +
            "5% ምርት፣ 4% ፍጆታ።\n" +
            "16 kg/ሰው።\n" +
            "ደቡብ አፍሪካ 11ኛ።",
        },
      ],
    },

    // ============================================================
    // KEY DEFINITIONS
    // ============================================================
    {
      id: "nFormula",
      title: "Key Definitions & Relationships — Unit 7",
      titleAm: "ዋና ትርጓሜዎች — ክፍል 7",
      body:
        "| Concept                       | Definition / Key Fact                                  |\n" +
        "|-------------------------------|--------------------------------------------------------|\n" +
        "| Urbanization                  | Rural → urban population shift                         |\n" +
        "| Unplanned urbanization        | Rapid, unregulated growth → slums + poor infrastructure|\n" +
        "| Slum                          | Congested area, poor infrastructure                    |\n" +
        "| Squatter settlement           | Illegal settlement on open land                        |\n" +
        "| Megacity                      | City with >10 million population                       |\n" +
        "| Africa's 7 megacities         | Cairo, Kinshasa, Lagos, Accra, Johannesburg–Pretoria, Khartoum, Nairobi |\n" +
        "| Urban primacy                 | One city dominates (usually the capital)               |\n" +
        "| Migration                     | Permanent change of residence                          |\n" +
        "| Internal migration            | Within a country                                       |\n" +
        "| International migration       | Between countries                                      |\n" +
        "| Voluntary migration           | In search of better life                               |\n" +
        "| Forced migration              | Expelled by war, drought, etc.                         |\n" +
        "| Push factors                  | Reasons to leave origin                                |\n" +
        "| Pull factors                  | Reasons to attract destination                         |\n" +
        "| Coastal pollution             | Contamination of coastal waters                        |\n" +
        "| Most frequent cause           | Sewage + industrial discharge                          |\n" +
        "| Plastic: Africa production    | 5% of global                                           |\n" +
        "| Plastic: Africa consumption   | 4% of global                                           |\n" +
        "| Plastic: Africa per capita    | 16 kg/person                                           |\n" +
        "| Plastic: world per capita     | 45 kg/person                                           |",
      bodyAm:
        "| ጽንሰ-ሐሳብ         | ትርጉም                          |\n" +
        "|------------------|--------------------------------|\n" +
        "| ከተማነት           | ከገጠር → ከተማ                   |\n" +
        "| 7 ሜጋ ከተሞች      | ካይሮ፣ ኪንሻሳ፣ ሌጎስ...        |\n" +
        "| ፍልሰት            | ቋሚ የመኖሪያ ለውጥ                |\n" +
        "| Push vs Pull     | መውጣት vs መሳብ                  |\n" +
        "| 80%              | መሬት ላይ የተመሠረተ           |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 7",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 7",
      body:
        "1) Urbanization = rural → urban shift.\n" +
        "2) 7 megacities: Cairo, Kinshasa, Lagos, Accra, Johannesburg–Pretoria, Khartoum, Nairobi.\n" +
        "3) Unplanned causes: colonial legacy, SAP, neoliberalism, weak planning.\n" +
        "4) 60% of urban jobs in Africa = informal.\n" +
        "5) Migration = permanent change of residence.\n" +
        "6) Internal vs international; voluntary vs forced.\n" +
        "7) Push = leave origin; Pull = attract destination.\n" +
        "8) Slave trade (16th–19th c.) → Africa population stagnation.\n" +
        "9) Coastal pollution: >80% land-based (South Africa).\n" +
        "10) Africa produces 5% of global plastic; consumes 4%.\n" +
        "11) Plastic consumption: Africa 16 kg/person; world 45 kg; W. Europe 136 kg.\n" +
        "12) Global plastic production 2020: >400 million tons.",
      bodyAm:
        "1) 7 ሜጋ ከተሞች።\n" +
        "2) 60% informal።\n" +
        "3) Push vs Pull።\n" +
        "4) 80% መሬት ላይ።\n" +
        "5) 16 kg/ሰው።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Urbanization refers to:", options: ["Urban → rural shift", "Rural → urban shift", "International migration", "Population decline"], answer: "1", explanation: "Urbanization = rural → urban shift." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Unplanned urbanization often causes:", options: ["Better infrastructure", "Slums + squatter settlements", "More jobs", "Better health"], answer: "1", explanation: "Unplanned → slums + squatters." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "A megacity has a population of over:", options: ["1 million", "5 million", "10 million", "50 million"], answer: "2", explanation: "Megacity = >10 million." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Africa has how many megacities?", options: ["3", "5", "7", "10"], answer: "2", explanation: "7 megacities." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Which is NOT an African megacity?", options: ["Cairo", "Lagos", "Nairobi", "London"], answer: "3", explanation: "London is not in Africa." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "What % of urban jobs in Africa are informal?", options: ["20%", "40%", "60%", "80%"], answer: "2", explanation: "~60% informal." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Migration is:", options: ["Temporary vacation", "Permanent change of residence", "Only internal", "Only forced"], answer: "1", explanation: "Permanent change of residence." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Internal migration occurs:", options: ["Between countries", "Within a country", "Between continents", "Only overseas"], answer: "1", explanation: "Internal = within a country." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "International migration occurs:", options: ["Within a country", "Between countries", "Within a city", "Between regions only"], answer: "1", explanation: "Between countries." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Push factors of migration are:", options: ["Benefits at destination", "Reasons to leave origin", "Reasons to stay home", "Environmental protections"], answer: "1", explanation: "Push = leave origin." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Pull factors of migration are:", options: ["Reasons to leave origin", "Reasons to attract destination", "Reasons to stay", "Natural disasters"], answer: "1", explanation: "Pull = attract destination." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Forced migration is caused by:", options: ["Better jobs", "War, drought, famine", "Higher income", "Better schools"], answer: "1", explanation: "Forced = war, drought, famine." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Voluntary migration is usually driven by:", options: ["War", "Drought", "Better economic opportunities", "Famine"], answer: "2", explanation: "Voluntary = better economic opportunities." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "The most frequent cause of coastal pollution is:", options: ["Oil spills", "Discharge of sewage + industrial waste", "Volcanic eruptions", "Earthquakes"], answer: "1", explanation: "Municipal sewage + industrial waste." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Most marine pollution in South Africa originates from:", options: ["Ships", "Land-based sources", "Volcanoes", "Air"], answer: "1", explanation: ">80% from LAND-based sources." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Africa produces what % of global plastic?", options: ["5%", "15%", "25%", "50%"], answer: "0", explanation: "Africa produces 5%." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Africa consumes what % of global plastic?", options: ["4%", "14%", "24%", "54%"], answer: "0", explanation: "Africa consumes 4%." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Addis Ababa has what fraction of population living in slums?", options: ["<1/4", "~1/2", ">2/3", "100%"], answer: "2", explanation: ">2/3 of population in slums." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "Africa's projected urban population in 2050 is:", options: ["500 million", "1 billion", "2.5 billion", "5 billion"], answer: "2", explanation: "~2.5 billion." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "Africa's projected urban population in 2050 is what % of world's urban?", options: ["5%", "10%", "21%", "50%"], answer: "2", explanation: "~21% of world's urban." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "Urban primacy refers to:", options: ["Rural dominance", "One city dominating (usually capital)", "Balanced city growth", "Small towns"], answer: "1", explanation: "One city dominates over all others." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "Which is NOT a cause of unplanned urbanization?", options: ["Colonial legacy", "Structural adjustment program", "Weak planning institutions", "Perfect urban planning"], answer: "3", explanation: "Perfect planning is NOT a cause of unplanned urbanization." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "Which is NOT a key feature of unplanned urbanization?", options: ["Urban sprawl", "Environmental degradation", "Enhanced infrastructure", "Waste-disposal problems"], answer: "2", explanation: "Enhanced infrastructure is NOT a feature." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "Which is NOT a consequence of unplanned urbanization?", options: ["Slums and squatters", "Poor infrastructure", "Improved health", "Social instability"], answer: "2", explanation: "Improved health is NOT a consequence — health problems ARE." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "What % of jobs in many urban African centers are in informal/grey economy?", options: ["20%", "40%", "60%", "90%"], answer: "2", explanation: "~60% informal." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "Africa's population stagnation (1500–1900) was mainly due to:", options: ["Industrialization", "Slave trade + colonization + disease", "High fertility", "Good health"], answer: "1", explanation: "Slave trade, colonization, disease." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "Which is a PUSH factor of migration?", options: ["Better jobs at destination", "Higher income", "Poverty at origin", "Better health care"], answer: "2", explanation: "Poverty at origin = PUSH." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "Which is a PULL factor of migration?", options: ["Poverty", "Unemployment", "Conflict", "Better education at destination"], answer: "3", explanation: "Better education at destination = PULL." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "Most coastal pollution comes from:", options: ["Land-based sources", "Deep sea", "Atmosphere only", "Volcanoes"], answer: "0", explanation: "Most from land-based sources." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "Global plastic production (2020) exceeded:", options: ["4 million tons", "40 million tons", "400 million tons", "4 billion tons"], answer: "2", explanation: ">400 million tons." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Which country is the largest plastic producer?", options: ["USA", "China", "Germany", "Japan"], answer: "1", explanation: "China = 28% of global production." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "Africa's per capita plastic consumption (2015) was:", options: ["5 kg", "16 kg", "45 kg", "136 kg"], answer: "1", explanation: "16 kg/person." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "The global average per capita plastic consumption is:", options: ["5 kg", "16 kg", "45 kg", "136 kg"], answer: "2", explanation: "45 kg/person." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Which country ranked 11th worst plastic polluter in 2010?", options: ["Egypt", "South Africa", "Nigeria", "Kenya"], answer: "1", explanation: "South Africa ranked 11th in 2010." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Only what % of South African plastic is recycled?", options: ["6%", "16%", "46%", "96%"], answer: "1", explanation: "Only 16%." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Which statement about Africa's 7 megacities is FALSE?", options: ["All over 10 million population", "Include Cairo, Lagos, Nairobi", "Include London", "Include Kinshasa, Accra"], answer: "2", explanation: "London is NOT in Africa." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Which statement about migration is TRUE?", options: ["All migration is voluntary", "All migration is forced", "Migration can be voluntary OR forced", "Migration is always internal"], answer: "2", explanation: "Migration can be voluntary or forced." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "Addis Ababa's urban growth challenges are mainly due to:", options: ["Perfect planning", "Informal settlements + unplanned growth", "No population growth", "Strong infrastructure"], answer: "1", explanation: "Informal settlements + unplanned growth." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "Africa's plastic consumption is lower than the world average because:", options: ["Africa is richer", "Africa has lower per capita income + less plastic use", "Africa has no plastic waste", "Africa has no population"], answer: "1", explanation: "Lower income + less plastic use." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "Which is NOT a pollutant reaching coastal waters?", options: ["Decomposable organic materials", "Heavy metals", "Clean drinking water", "Pathogenic organisms"], answer: "2", explanation: "Clean drinking water is NOT a pollutant." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Africa's urban future is likely to be shaped by:", options: ["Reduction in cities", "Rapid + unplanned expansion", "Decline in population", "Zero migration"], answer: "1", explanation: "Rapid + unplanned expansion." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "Which statement about unplanned urbanization is FALSE?", options: ["Creates slums", "Increases environmental degradation", "Guarantees better health care", "Strains infrastructure"], answer: "2", explanation: "Unplanned urbanization does NOT guarantee better health care." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "Africa's plastic consumption being 4% while world population share is 16% indicates:", options: ["Africa wastes more plastic than others", "Africa's per capita plastic use is much lower", "Africa produces 100% of plastics", "Africa has no plastic problem"], answer: "1", explanation: "Lower per capita use despite 16% of world population." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Define urbanization and explain why unplanned urbanization occurs.", answer: "URBANIZATION: the population shift from rural to urban areas, with corresponding decreases in rural populations and adaptations in society.\n\nUNPLANNED URBANIZATION occurs when urban growth happens rapidly and without adequate planning. Causes:\n1) Unplanned + unregulated growth.\n2) Legacy of colonialism.\n3) Policy pressure of international institutions (structural adjustment programs of IMF).\n4) Pressure of developed countries (neoliberalism).\n5) Weak urban planning institutions.\n\nRural-urban migration is a main driver (jobs, better life).", explanation: "Rural→urban shift; unplanned due to colonial legacy, SAP, neoliberalism, weak planning." },
    { id: "q45", type: "short", difficulty: "easy", stem: "List Africa's 7 megacities.", answer: "Africa's 7 megacities (over 10 million population):\n1) Cairo (Egypt)\n2) Kinshasa (DRC)\n3) Lagos (Nigeria)\n4) Accra (Ghana)\n5) Johannesburg–Pretoria (South Africa)\n6) Khartoum (Sudan)\n7) Nairobi (Kenya)\n\nAfrica's urban population is projected to reach 2.5 billion by 2050 (~21% of world's urban population).", explanation: "Cairo, Kinshasa, Lagos, Accra, Johannesburg–Pretoria, Khartoum, Nairobi." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Explain the consequences of unplanned urbanization.", answer: "1) SLUMS + SQUATTER SETTLEMENTS:\n• Unlawful residential settlements.\n• Exacerbated by industrialization, land shortages, rural influx, high land prices.\n• Addis Ababa: >2/3 of population live in slums; two types — slums (congested, substandard) + squatters (illegal on open land).\n\n2) POOR INFRASTRUCTURE:\n• Insufficient investment; weak transport, power, water, sewage, communications.\n• Infrastructure growth does NOT keep pace with population.\n\n3) ECONOMIC PROBLEMS:\n• High housing, food, transport costs.\n• High unemployment.\n• ~60% of jobs in informal/grey economy.\n\n4) HEALTH PROBLEMS:\n• Obesity, respiratory diseases.\n• Lack of adequate sanitation.\n• Rapid spread of communicable diseases.\n\n5) SOCIAL INSTABILITY:\n• Urban violence + unrest.\n• Widening inequalities.\n• Competition for scarce resources (land).\n• Weak governance → crime.", explanation: "Slums, poor infrastructure, economic + health problems, social instability." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Explain migration and its push and pull factors.", answer: "MIGRATION: permanent change of residence by an individual or group. Can occur within a country (INTERNAL) or between countries (INTERNATIONAL). Can be VOLUNTARY (search for better economic opportunities) or FORCED (war, drought, famine, natural disasters, conflict).\n\nPUSH FACTORS (leave origin):\n• Poor socio-economic conditions.\n• Low wages, high unemployment, poverty.\n• Poor governance, corruption, political instability, conflict.\n• War, drought, famine, natural disasters.\n\nPULL FACTORS (attract destination):\n• Better job opportunities.\n• Higher income.\n• Greater security.\n• Better quality education + health care.\n• Better infrastructure.\n\nHISTORICAL CONTEXT: slave migrations (16th–19th centuries) significantly reduced Africa's population.", explanation: "Push = leave; Pull = attract; voluntary vs forced." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Describe the causes and sources of coastal pollution in Africa.", answer: "SOURCES:\n• Discharge of sewage + industrial waste from coastal channels.\n• Dumping of wastes at sea.\n• Sewage + rubbish from ships.\n• Handling of cargo.\n• Exploration + exploitation of sea bed + ocean floor.\n• Accidental oil spills.\n• Pollutants from land by air + other routes.\n\nMOST FREQUENT CAUSE: discharge of municipal sewage + industrial waste into coastal waters/estuaries through low-quality disposal facilities.\n\nCLASSES OF POLLUTANTS:\n• Decomposable organic materials.\n• Heavy metals + toxic matter.\n• Dissolved + suspended non-toxic inorganic substances.\n• Pathogenic organisms.\n\nCAUSES OF RAPID INCREASE: population growth, urbanization, industrial development along coastal areas.", explanation: "Sewage + industrial waste; classes: organic, heavy metals, pathogens." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Explain plastic pollution in Africa and its impacts.", answer: "GLOBAL PLASTIC PRODUCTION (2020): >400 million tons.\n• China: 28% production, 20% consumption.\n• North America: 19% production, 21% consumption.\n• Western Europe: 19% production, 18% consumption.\n\nAFRICA (2020):\n• 1.3 billion people (16% of world).\n• Produces 5%, consumes 4% of global plastic.\n• Per capita consumption: 16 kg (vs world 45 kg; W. Europe 136 kg).\n\nSOUTH AFRICA (2010):\n• Ranked 11th worst plastic polluter.\n• >80% of marine pollution is LAND-BASED.\n• Only 16% recycled; ~8 million tons discarded → rivers → oceans.\n\nIMPACTS:\n• Human health.\n• Loss of livelihoods.\n• Greenhouse gas emissions.\n• Loss of biodiversity.\n• Compromised ecosystem functioning.\n\nSOLUTIONS: Multi-stakeholder interventions, coordinated actions, better waste management, reduce + recycle.", explanation: "Africa 5% production, 4% consumption; SA 16% recycled." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Explain the case of Addis Ababa's unplanned urbanization.", answer: "ADDIS ABABA — Case Study:\n\nBACKGROUND:\n• Ethiopia's largest city.\n• Established from VILLAGES without a MASTER PLAN.\n• Informal settlement is at the heart of the city's development.\n\nCHALLENGES:\n• Unplanned urban development + inefficient land use.\n• Extensive urban poverty + joblessness.\n• Inadequate housing + congestion.\n• Underdeveloped infrastructure.\n\nTWO TYPES OF INFORMAL SETTLEMENTS:\n1) SLUMS:\n• Located in highly congested areas.\n• Deteriorated infrastructure, unsanitary environment.\n• Substandard materials.\n• >2/3 of the population believed to live in slums.\n\n2) SQUATTER SETTLEMENTS:\n• Illegally built settlements.\n• Located on open space, farmland, steep slopes, river buffers, road sides.\n• No legal title deed.\n• Low-quality housing, occupied by the poor.\n\nIMPACTS:\n• Negatively affects proper land use.\n• Inadequate municipal services.\n• Prohibits planned development.\n• Promotes spontaneous horizontal expansion.", explanation: "Addis Ababa: >2/3 in slums; two types — slums + squatters." },
  ],
};