import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 GEOGRAPHY — UNIT 5
// MAJOR ECONOMIC AND CULTURAL ACTIVITIES OF AFRICA
// Source: Grade 10 Geography Student Textbook (pp. 119–144)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, definition boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10GeographyCh5: Chapter = {
  id: "ch5",
  number: 5,
  title: "Major Economic and Cultural Activities of Africa",
  titleAm: "የአፍሪካ ዋና ኢኮኖሚያዊና ባህላዊ እንቅስቃሴዎች",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about AFRICA'S ECONOMY AND CULTURE:\n" +
        "1) Employment structure — primary, secondary, tertiary, quaternary.\n" +
        "2) Africa's economic activities — agriculture, mining, forestry, fishery (primary); manufacturing (secondary); services (tertiary).\n" +
        "3) Unemployment — types, effects, solutions.\n" +
        "4) Africa's Agenda 2063 — 50-year development plan.\n" +
        "5) Agenda 2063 vs SDGs (Agenda 2030).\n" +
        "6) Linguistic + religious diversity.\n\n" +
        "The WHOLE chapter reduces to FIVE key ideas:\n" +
        "• Four economic sectors: primary, secondary, tertiary, quaternary.\n" +
        "• Africa is heavily PRIMARY (agriculture ~2/3 of workers).\n" +
        "• Unemployment rate = (Unemployed / Workforce) × 100.\n" +
        "• Agenda 2063 = AU's 50-year plan (2013–2063).\n" +
        "• Africa = most linguistically diverse continent (>2,000 languages).\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ አምስቱ ዋና ሐሳቦች፡\n" +
        "1) 4 የኢኮኖሚ ዘርፎች\n" +
        "2) አፍሪካ በprimary ላይ የተመሠረተች\n" +
        "3) የስራ አጥነት መጠን = (ስራ አጥ / ሰራተኛ) × 100\n" +
        "4) Agenda 2063 = የAU 50 ዓመት እቅድ\n" +
        "5) 2,000+ ቋንቋዎች",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the four economic sectors",
          titleAm: "ደረጃ 1 · አራቱ ዘርፎች",
          body:
            "PRIMARY: extract raw materials (agriculture, mining, forestry, fishery).\n\n" +
            "SECONDARY: change raw materials into new products (manufacturing).\n\n" +
            "TERTIARY: services (education, health, tourism, banking, transport).\n\n" +
            "QUATERNARY: knowledge-based (ICT, R&D, financial planning).\n\n" +
            "Developed countries → more TERTIARY.\n" +
            "Developing countries → more PRIMARY (especially agriculture).",
          bodyAm:
            "Primary: ጥሬ ዕቃ።\n" +
            "Secondary: ማኑፋክቸሪንግ።\n" +
            "Tertiary: አገልግሎት።\n" +
            "Quaternary: እውቀት።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the unemployment formula",
          titleAm: "ደረጃ 2 · የስራ አጥነት ቀመር",
          body:
            "UNEMPLOYMENT RATE = (Number of unemployed / Total workforce) × 100\n\n" +
            "TWO types of unemployment:\n" +
            "• VOLUNTARY: jobless by choice.\n" +
            "• INVOLUNTARY: willing + able but can't find work.\n\n" +
            "Africa = highest working poverty (< US$2/day).",
          bodyAm:
            "Rate = (ስራ አጥ / ሰራተኛ) × 100።\n" +
            "Voluntary: በምርጫ።\n" +
            "Involuntary: ምንም ስራ ስላልተገኘ።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master Agenda 2063",
          titleAm: "ደረጃ 3 · Agenda 2063",
          body:
            "AGENDA 2063:\n" +
            "• Africa's 50-year blueprint (2013–2063).\n" +
            "• Launched by AFRICAN UNION (AU).\n" +
            "• Aims: inclusive social + economic development, continental integration, democracy, peace + security.\n\n" +
            "PRIORITIES:\n" +
            "• Inclusive growth.\n" +
            "• Integration.\n" +
            "• Democratic governance.\n" +
            "• Peace + security.\n\n" +
            "FLAGSHIP PROGRAMS include:\n" +
            "• High-speed train network.\n" +
            "• AfCFTA (African Continental Free Trade Area).\n" +
            "• African passport.\n" +
            "• Silencing the guns by 2020.\n" +
            "• Grand Inga Dam.\n" +
            "• Single African Air Transport Market (SAATM).",
          bodyAm:
            "50 ዓመት እቅድ (2013–2063)።\n" +
            "በAU የተጀመረ።\n" +
            "AfCFTA + Grand Inga + SAATM።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Did you know agriculture employs ~2/3 of African workers?\n" +
            "2) Did you know Africa has 624 million hectares of forest (20.6% of land)?\n" +
            "3) Did you know Africa = 15.6% of world's forest cover?\n" +
            "4) Did you know Agenda 2063 runs from 2013 to 2063?\n" +
            "5) Did you know Africa has >2,000 languages?",
          bodyAm:
            "1) 2/3 እርሻ?\n" +
            "2) 624 ሚሊዮን ሄክታር?\n" +
            "3) 15.6% የዓለም ደን?\n" +
            "4) 2013–2063?\n" +
            "5) 2,000+ ቋንቋዎች?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፋርት",
          body:
            "• Primary = agriculture, mining, forestry, fishery.\n" +
            "• Secondary = manufacturing (copper ore → electric cable).\n" +
            "• Tertiary = services (transport, tourism, banking).\n" +
            "• Quaternary = knowledge (ICT, R&D).\n" +
            "• Agriculture: ~2/3 of African workers; 30–60% of GDP; ~30% of exports.\n" +
            "• Africa has 624 million ha forest (20.6% of land; 15.6% of world's forest).\n" +
            "• Unemployment rate = (Unemployed / Workforce) × 100.\n" +
            "• Agenda 2063 = 50 years, 2013–2063.\n" +
            "• SDGs = 17 goals by 2030.\n" +
            "• Africa = >2,000 languages; 1/3 of world's 6,000 languages.\n" +
            "• Nigeria = 514 languages (most).",
          bodyAm:
            "• Agriculture ~2/3 ሰራተኛ።\n" +
            "• 624M ha ደን።\n" +
            "• Agenda 2063 = 2013–2063።\n" +
            "• 2,000+ ቋንቋዎች።\n" +
            "• ናይጄሪያ = 514 ቋንቋዎች።",
        },
      ],
    },

    // ============================================================
    // 5.1 EMPLOYMENT STRUCTURE IN THE WORLD
    // ============================================================
    {
      id: "n1",
      title: "5.1 Overview of Employment Structure in the World",
      titleAm: "5.1 የዓለም የስራ አወቃቀር",
      body:
        "Abatu, the employment structure shows how the labor force is divided between PRIMARY, SECONDARY, and TERTIARY economic activities. QUATERNARY is a new, emerging sector.",
      bodyAm:
        "አባቱ፣ የስራ አወቃቀር = በprimary/secondary/tertiary መከፋፈል።",
      children: [
        {
          id: "n1-1",
          title: "Four economic sectors",
          titleAm: "አራቱ የኢኮኖሚ ዘርፎች",
          body:
            "1) PRIMARY SECTOR:\n" +
            "• Extracting raw materials.\n" +
            "• Rearing animals, growing crops.\n" +
            "• Mining, fishing, forestry, agriculture.\n\n" +
            "2) SECONDARY SECTOR:\n" +
            "• Changing raw materials into new products.\n" +
            "• MANUFACTURING.\n\n" +
            "3) TERTIARY SECTOR:\n" +
            "• Services: education, health, tourism, banking, transport, retail.\n\n" +
            "4) QUATERNARY SECTOR:\n" +
            "• Knowledge-based.\n" +
            "• ICT, research + development, education, financial planning.\n" +
            "• People engaged in information generating + sharing.",
          bodyAm:
            "Primary: ጥሬ ዕቃ።\n" +
            "Secondary: ማኑፋክቸሪንግ።\n" +
            "Tertiary: አገልግሎት።\n" +
            "Quaternary: እውቀት።",
        },
        {
          id: "n1-2",
          title: "Developed vs developing countries",
          titleAm: "ያደጉ vs ታዳጊ አገሮች",
          body:
            "DEVELOPED COUNTRIES:\n" +
            "• More people work in TERTIARY sector.\n\n" +
            "DEVELOPING COUNTRIES (DVCs):\n" +
            "• More people work in PRIMARY sector (especially agriculture).\n\n" +
            "DVC CHARACTERISTICS:\n" +
            "• World's least industrialized nations.\n" +
            "• Heavy commitment to agriculture.\n" +
            "• Low literacy.\n" +
            "• High unemployment.\n" +
            "• Rapid population growth.\n" +
            "• Exports largely agricultural or raw materials.\n" +
            "• Scarce capital equipment.\n" +
            "• Primitive technology.\n" +
            "• Low productivity.\n" +
            "• >60% of world population lives there.",
          bodyAm:
            "ያደጉ: tertiary።\n" +
            "ታዳጊ: primary።\n" +
            ">60% የዓለም ህዝብ በDVCs።",
        },
        {
          id: "n1-3",
          title: "Income categories",
          titleAm: "የገቢ ምድቦች",
          body:
            "MIDDLE-INCOME COUNTRIES (2020):\n" +
            "• 75% of world's population.\n" +
            "• 62% of world's poor.\n\n" +
            "Sub-categories (2021 GNI per capita):\n" +
            "• LOWER MIDDLE-INCOME: $1,036 – $4,045.\n" +
            "• UPPER MIDDLE-INCOME: $4,046 – $12,535.\n\n" +
            "LOW-INCOME COUNTRIES (2018):\n" +
            "• GNI per capita $1,025 or less.\n" +
            "• 2020 examples: Afghanistan, Bangladesh, sub-Saharan African nations.\n\n" +
            "MOVEMENT:\n" +
            "• China, Malaysia, Thailand → moved out of low-income to lower middle-income.\n" +
            "• South Korea, Singapore → now high-income.",
          bodyAm:
            "Lower middle: $1,036–$4,045።\n" +
            "Upper middle: $4,046–$12,535።\n" +
            "Low: ≤ $1,025።\n" +
            "Korea, Singapore → high።",
        },
        {
          id: "n1-4",
          title: "⚠ Remember trap — Sectors",
          titleAm: "⚠ አትርሳ — ዘርፎች",
          body:
            "• PRIMARY = agriculture, mining, forestry, fishing.\n" +
            "• SECONDARY = manufacturing.\n" +
            "• TERTIARY = services.\n" +
            "• QUATERNARY = knowledge-based (ICT, R&D).\n" +
            "• Developed → TERTIARY; Developing → PRIMARY.\n" +
            "• Lower middle-income: $1,036–$4,045.\n" +
            "• Upper middle-income: $4,046–$12,535.\n" +
            "• Low-income: ≤ $1,025.\n" +
            "• Quaternary not included in standard country assessment.",
          bodyAm:
            "Primary: እርሻ/ማዕድን።\n" +
            "Secondary: ማኑፋክቸሪንግ።\n" +
            "Tertiary: አገልግሎት።\n" +
            "Quaternary: እውቀት።",
        },
      ],
    },

    // ============================================================
    // 5.2 MAJOR ECONOMIC ACTIVITIES IN AFRICA
    // ============================================================
    {
      id: "n2",
      title: "5.2 Major Economic Activities in Africa",
      titleAm: "5.2 የአፍሪካ ዋና ኢኮኖሚያዊ እንቅስቃሴዎች",
      body:
        "Abatu, Africa largely depends on the PRIMARY sector — agriculture, mining, forestry, and fishing.",
      bodyAm:
        "አባቱ፣ አፍሪካ በprimary ላይ የተመሠረተች።",
      children: [
        {
          id: "n2-1",
          title: "Primary sector — agriculture",
          titleAm: "Primary — እርሻ",
          body:
            "AGRICULTURE:\n" +
            "• Single most important economic activity.\n" +
            "• Employs ~2/3 (two-thirds) of working population.\n" +
            "• 30–60% of GDP.\n" +
            "• ~30% of value of exports.\n" +
            "• Most is RAIN-FED → vulnerable to climate variability.\n" +
            "• Frequent droughts + occasional floods destroy crops + livestock.",
          bodyAm:
            "~2/3 ሰራተኛ።\n" +
            "30–60% GDP።\n" +
            "~30% ወጪ ንግድ።\n" +
            "በዝናብ ላይ የተመሠረተ።",
        },
        {
          id: "n2-2",
          title: "Primary sector — mining, forestry, fishery",
          titleAm: "Primary — ማዕድን፣ ደን፣ ዓሳ",
          body:
            "MINING:\n" +
            "• Africa has huge mineral resources.\n" +
            "• Global demand for copper, gold, platinum, diamonds.\n" +
            "• Active sector across Africa.\n\n" +
            "FORESTRY:\n" +
            "• 624 million hectares under forest.\n" +
            "• 20.6% of Africa's land area.\n" +
            "• 15.6% of world's forest cover.\n" +
            "• Supports many economies (rural + urban).\n" +
            "• Many wildlife parks are in forested areas.\n\n" +
            "FISHERY:\n" +
            "• Integral part of culture + economy.\n" +
            "• Economic + nutritional roles.\n" +
            "• Food + nutrition security.\n" +
            "• Jobs for coastal populations (often poorest + most vulnerable).",
          bodyAm:
            "624M ha ደን (20.6%)።\n" +
            "15.6% የዓለም ደን።\n" +
            "ዓሳ ለባህር ዳርቻ ህዝብ።",
        },
        {
          id: "n2-3",
          title: "Challenges of primary sector",
          titleAm: "የprimary ችግሮች",
          body:
            "1) Productivity + reliability vary:\n" +
            "• Depend on weather + natural elements (soil fertility, rainfall).\n\n" +
            "2) Dependent on exchange rates + other industries:\n" +
            "• Manufacturers have more economic power than raw material producers.\n\n" +
            "3) LOW WAGES:\n" +
            "• Primary sector workers often work for extremely low wages.\n\n" +
            "4) HARDEST TRANSITION:\n" +
            "• Moving from primary to secondary is the hardest move.\n" +
            "• Governments may lack money for manufacturing investment.",
          bodyAm:
            "የአየር ሁኔታ ጥገኛ።\n" +
            "ዝቅተኛ ደመወዝ።\n" +
            "ወደ secondary መሸጋገር አስቸጋሪ።",
        },
        {
          id: "n2-4",
          title: "Secondary sector in Africa",
          titleAm: "Secondary በአፍሪካ",
          body:
            "SECONDARY SECTOR:\n" +
            "• Processes basic materials from primary sector → new goods.\n" +
            "• Example: copper ore → electric cable.\n\n" +
            "AFRICA'S SECONDARY SECTOR:\n" +
            "• Growing rapidly in recent decades.\n" +
            "• NOT keeping up with worldwide improvements.\n" +
            "• Manufacturing: textiles, clothing, footwear, basic woods, metals.\n\n" +
            "FLUCTUATING:\n" +
            "• Electricity, gas, water industries markedly fluctuating over past decades.\n" +
            "• Very sensitive to changing economic trends.",
          bodyAm:
            "ከprimary → አዲስ ምርት።\n" +
            "ልብስ፣ ጫማ፣ እንጨት፣ ብረት።\n" +
            "የመብራት/ውሃ ዘርፍ ይለዋወጣል።",
        },
        {
          id: "n2-5",
          title: "Tertiary sector in Africa",
          titleAm: "Tertiary በአፍሪካ",
          body:
            "TERTIARY SECTOR:\n" +
            "• Range of service activities.\n" +
            "• Sells services + skills.\n" +
            "• Also involves selling goods from primary + secondary sectors.\n\n" +
            "GROWTH AREAS:\n" +
            "• Transport + storage.\n" +
            "• Communication.\n" +
            "• Real estate.\n" +
            "• Hospitality (hotels + restaurants).\n" +
            "• TOURISM — growing importance, depends on natural resources + biodiversity.",
          bodyAm:
            "ትራንስፖርት፣ ኮሙኒኬሽን፣ ሆቴል።\n" +
            "ቱሪዝም በተፈጥሮ ሀብት ላይ የተመሠረተ።",
        },
        {
          id: "n2-6",
          title: "Factors hindering Africa's economic growth",
          titleAm: "የኢኮኖሚ እድገት አግዳሚ ምክንያቶች",
          body:
            "1) LIMITATIONS IN TECHNOLOGY:\n" +
            "• Key to development.\n" +
            "• Helps create/access/use ICT.\n" +
            "• Major difference between developed + developing countries.\n\n" +
            "2) OVER-DEPENDENCE ON FOREIGN AID:\n" +
            "• Many countries depend on foreign partners.\n" +
            "• Education, health, agriculture rely on aid.\n" +
            "• Leads to STAGNATION of economy.\n\n" +
            "3) POOR STRUCTURES OF THE ECONOMY:\n" +
            "• Still export raw materials (cocoa, diamond, gold, bauxite).\n" +
            "• Do NOT add value.\n" +
            "• Import light industry products (toys, matches, toothpicks).\n\n" +
            "4) POOR EDUCATION:\n" +
            "• Education promotes entrepreneurship + skills.\n" +
            "• Current systems not producing job-ready graduates.",
          bodyAm:
            "ቴክኖሎጂ ውስንነት።\n" +
            "የውጭ እርዳታ ጥገኝነት።\n" +
            "ደካማ መዋቅር።\n" +
            "ደካማ ትምህርት።",
        },
        {
          id: "n2-7",
          title: "⚠ Remember trap — Economic activities",
          titleAm: "⚠ አትርሳ — ኢኮኖሚያዊ እንቅስቃሴዎች",
          body:
            "• Agriculture employs ~2/3 of African workers.\n" +
            "• Agriculture = 30–60% of GDP; ~30% of exports.\n" +
            "• Africa has 624 million ha forest (20.6% of land).\n" +
            "• 15.6% of world's forest cover in Africa.\n" +
            "• Primary workers = LOW WAGES.\n" +
            "• Moving from primary to secondary = HARDEST move.\n" +
            "• Secondary = manufacturing.\n" +
            "• Tertiary = services (transport, tourism, banking).\n" +
            "• Quaternary = knowledge (ICT, R&D).",
          bodyAm:
            "~2/3 እርሻ።\n" +
            "30–60% GDP።\n" +
            "624M ha ደን።\n" +
            "Primary → secondary አስቸጋሪ።",
        },
      ],
    },

    // ============================================================
    // 5.3 UNEMPLOYMENT SOLUTIONS
    // ============================================================
    {
      id: "n3",
      title: "5.3 Possible Solutions to the Problem of Unemployment",
      titleAm: "5.3 የስራ አጥነት መፍትሔዎች",
      body:
        "Abatu, unemployment = employable people actively seeking work but unable to find it. Calculated by dividing unemployed by workforce × 100.",
      bodyAm:
        "አባቱ፣ ስራ አጥነት = ሥራ ፈላጊ ግን ያላገኘ።",
      children: [
        {
          id: "n3-1",
          title: "Types of unemployment",
          titleAm: "የስራ አጥነት ዓይነቶች",
          body:
            "VOLUNTARY UNEMPLOYMENT:\n" +
            "• Jobless by CHOICE.\n" +
            "• Example: quitting a job to start a small business.\n\n" +
            "INVOLUNTARY UNEMPLOYMENT:\n" +
            "• Willing + able to work but can't find a job.\n" +
            "• Example: university graduates can't find jobs.\n\n" +
            "UNEMPLOYMENT RATE = (Unemployed / Total workforce) × 100",
          bodyAm:
            "Voluntary: በምርጫ።\n" +
            "Involuntary: በአስገዳጅ።\n" +
            "Rate = (ስራ አጥ / ሰራተኛ) × 100።",
        },
        {
          id: "n3-2",
          title: "Effects of unemployment",
          titleAm: "የስራ አጥነት ውጤቶች",
          body:
            "ON WORKERS:\n" +
            "• Financial hardship.\n" +
            "• Affects families + relationships.\n" +
            "• Affects communities.\n\n" +
            "ON ECONOMY:\n" +
            "• Reduced demand for goods + services.\n" +
            "• Low consumption + buying power.\n" +
            "• Lower profits for businesses.\n" +
            "• Businesses may disappear.\n" +
            "• Government loses tax revenue → reduces budget + workforce.",
          bodyAm:
            "የገንዘብ ችግር።\n" +
            "የፍላጎት መቀነስ።\n" +
            "የታክስ ገቢ መቀነስ።",
        },
        {
          id: "n3-3",
          title: "Solutions to unemployment",
          titleAm: "የስራ አጥነት መፍትሔዎች",
          body:
            "1) CREATE MORE JOB OPPORTUNITIES:\n" +
            "• Governments should ensure job creation.\n" +
            "• Pay workers adequately.\n\n" +
            "2) ENCOURAGE DIVERSE FIELDS:\n" +
            "• Kids should explore many career options.\n" +
            "• Innovative fields → diversified economy.\n\n" +
            "3) SUSTAINABLE DEVELOPMENT:\n" +
            "• Brundtland Commission Report (1987): 'development that meets present needs without compromising future generations'.\n" +
            "• 4 dimensions: society, environment, culture, economy.\n" +
            "• Leads to sustainable employment.",
          bodyAm:
            "ስራ መፍጠር።\n" +
            "ብዝሃ መስኮች።\n" +
            "ዘላቂ ልማት (Brundtland 1987)።",
        },
        {
          id: "n3-4",
          title: "⚠ Remember trap — Unemployment",
          titleAm: "⚠ አትርሳ — ስራ አጥነት",
          body:
            "• Unemployment rate = (Unemployed / Workforce) × 100.\n" +
            "• Voluntary = by choice.\n" +
            "• Involuntary = willing but can't find.\n" +
            "• Africa = highest WORKING POVERTY (<$2/day).\n" +
            "• Sustainable development = Brundtland Commission 1987.\n" +
            "• 4 dimensions: society, environment, culture, economy.",
          bodyAm:
            "Rate = (ስራ አጥ / ሰራተኛ) × 100።\n" +
            "Brundtland = 1987።",
        },
      ],
    },

    // ============================================================
    // 5.4-5.5 AGENDA 2063 AND SDGs
    // ============================================================
    {
      id: "n4",
      title: "5.4–5.5 Africa's Agenda 2063 and SDGs",
      titleAm: "5.4–5.5 Agenda 2063 እና SDGs",
      body:
        "Abatu, Agenda 2063 is Africa's 50-year development plan (2013–2063). SDGs (Agenda 2030) are 17 global goals by 2030.",
      bodyAm:
        "አባቱ፣ Agenda 2063 = 50 ዓመት፤ SDGs = 17 ግቦች በ2030።",
      children: [
        {
          id: "n4-1",
          title: "Agenda 2063 — definition and aim",
          titleAm: "Agenda 2063 — ትርጉም",
          body:
            "AGENDA 2063:\n" +
            "• Africa's blueprint + masterplan.\n" +
            "• Transforming Africa into global powerhouse of the future.\n" +
            "• 50-year plan (2013–2063).\n" +
            "• Launched by AFRICAN UNION (AU).\n\n" +
            "PRIORITIES (after OAU's anti-apartheid focus):\n" +
            "• Inclusive social + economic development.\n" +
            "• Continental + regional integration.\n" +
            "• Democratic governance.\n" +
            "• Peace + security.\n\n" +
            "WHY NEEDED:\n" +
            "• Renewed economic growth + social progress.\n" +
            "• People-centered development.\n" +
            "• Gender equality + youth empowerment.\n" +
            "• Changing global contexts (globalization, ICT revolution).",
          bodyAm:
            "50 ዓመት (2013–2063)።\n" +
            "AU ያቀረበ።\n" +
            "4 ቅድሚያዎች።",
        },
        {
          id: "n4-2",
          title: "Agenda 2063 flagship programs",
          titleAm: "የAgenda 2063 ፍላግሺፕ ፕሮግራሞች",
          body:
            "15 FLAGSHIP PROGRAMS:\n" +
            "1) Integrated high-speed train network.\n" +
            "2) African commodities strategy.\n" +
            "3) AfCFTA (African Continental Free Trade Area).\n" +
            "4) African passport + free movement.\n" +
            "5) Silencing the guns by 2020.\n" +
            "6) Grand Inga Dam project.\n" +
            "7) SAATM (Single African Air Transport Market).\n" +
            "8) Annual African economic forum.\n" +
            "9) African financial institutions.\n" +
            "10) Pan-African e-network.\n" +
            "11) Africa outer space strategy.\n" +
            "12) African virtual + e-university.\n" +
            "13) Cyber security.\n" +
            "14) Great African Museum.\n" +
            "15) Encyclopedia Africana.",
          bodyAm:
            "AfCFTA + Grand Inga + SAATM።\n" +
            "Silencing the guns 2020።\n" +
            "15 ፕሮግራሞች።",
        },
        {
          id: "n4-3",
          title: "SDGs — 17 global goals",
          titleAm: "SDGs — 17 ግቦች",
          body:
            "SUSTAINABLE DEVELOPMENT GOALS (SDGs):\n" +
            "• 17 interlinked global goals.\n" +
            "• Set by UN General Assembly in 2015.\n" +
            "• To be achieved by 2030.\n" +
            "• Blueprint for peace + prosperity.\n\n" +
            "SUCCEED MILLENNIUM DEVELOPMENT GOALS (MDGs) which ended 2015.\n\n" +
            "17 GOALS:\n" +
            "1) No poverty\n" +
            "2) Zero hunger\n" +
            "3) Good health and well-being\n" +
            "4) Quality education\n" +
            "5) Gender equality\n" +
            "6) Clean water and sanitation\n" +
            "7) Affordable and clean energy\n" +
            "8) Decent work and economic growth\n" +
            "9) Industry, innovation, and infrastructure\n" +
            "10) Reduced inequalities\n" +
            "11) Sustainable cities and communities\n" +
            "12) Responsible consumption and production\n" +
            "13) Climate action\n" +
            "14) Life below water\n" +
            "15) Life on land\n" +
            "16) Peace, justice, and strong institutions\n" +
            "17) Partnerships for the goals",
          bodyAm:
            "17 ግቦች።\n" +
            "2015–2030።\n" +
            "MDGs ተተክተዋል።",
        },
        {
          id: "n4-4",
          title: "Agenda 2063 vs SDGs",
          titleAm: "Agenda 2063 vs SDGs",
          body:
            "SIMILARITIES:\n" +
            "• Both aim at sustainable development.\n" +
            "• Both target poverty reduction.\n" +
            "• Both emphasize economic growth + social progress.\n" +
            "• Both mention peace + security.\n" +
            "• Africa's Agenda 2063 aligns with UN's Agenda 2030.\n\n" +
            "DIFFERENCES:\n" +
            "• Agenda 2063 → AFRICA-focused; 50 years (2013–2063).\n" +
            "• SDGs → GLOBAL; 17 goals by 2030 (Agenda 2030).\n" +
            "• Agenda 2063 = Pan-African ideals + Renaissance.\n" +
            "• SDGs = universal global framework.",
          bodyAm:
            "ሁለቱም ዘላቂ ልማት።\n" +
            "2063 = አፍሪካ (50 ዓመት)።\n" +
            "SDGs = ዓለም (2030)።",
        },
        {
          id: "n4-5",
          title: "⚠ Remember trap — Agendas",
          titleAm: "⚠ አትርሳ — አጀንዳዎች",
          body:
            "• Agenda 2063 = 50 years (2013–2063), AU-led.\n" +
            "• SDGs = 17 goals, 2015–2030, UN-led.\n" +
            "• AfCFTA + SAATM = Agenda 2063 flagships.\n" +
            "• SDGs replaced MDGs (MDGs ended 2015).\n" +
            "• Agenda 2063 aligns with Agenda 2030.\n" +
            "• Silencing the guns by 2020 = Agenda 2063 flagship (deadline passed).",
          bodyAm:
            "2063 = 50 ዓመት።\n" +
            "SDGs = 17 ግቦች 2030።\n" +
            "AfCFTA + SAATM።",
        },
      ],
    },

    // ============================================================
    // 5.6 LINGUISTIC AND RELIGIOUS DIVERSITY
    // ============================================================
    {
      id: "n5",
      title: "5.6 Linguistic and Religious Diversity in Africa",
      titleAm: "5.6 የቋንቋና ሃይማኖት ብዝሃነት",
      body:
        "Abatu, Africa is the MOST LINGUISTICALLY DIVERSE continent — >2,000 languages, 1/3 of world's 6,000 languages.",
      bodyAm:
        "አባቱ፣ አፍሪካ = በቋንቋ ብዝሃነት ቀዳሚ።",
      children: [
        {
          id: "n5-1",
          title: "Language diversity",
          titleAm: "የቋንቋ ብዝሃነት",
          body:
            "AFRICA = MOST LINGUISTICALLY DIVERSE continent:\n" +
            "• Home to 1/3 of world's 6,000 languages.\n" +
            "• <1/7 of world's population.\n" +
            "• >2,000 living languages.\n" +
            "• Many countries highly multilingual.\n\n" +
            "LIVING LANGUAGE: still spoken today; must have at least one speaker whose FIRST language it is.\n" +
            "Also called MODERN LANGUAGE.\n\n" +
            "TOP COUNTRIES BY NUMBER OF LANGUAGES:\n" +
            "1) Nigeria — 514\n" +
            "2) Cameroon — 278\n" +
            "3) DRC — 215\n" +
            "4) Chad — 131\n" +
            "5) Tanzania — 128\n" +
            "6) Ethiopia — 86\n" +
            "7) Ghana — 79\n" +
            "8) Côte d'Ivoire — 78",
          bodyAm:
            "1/3 የዓለም ቋንቋዎች።\n" +
            "2,000+ ቋንቋዎች።\n" +
            "ናይጄሪያ 514።\n" +
            "ኢትዮጵያ 86።",
        },
        {
          id: "n5-2",
          title: "Religious diversity",
          titleAm: "የሃይማኖት ብዝሃነት",
          body:
            "AFRICA'S RELIGIONS:\n" +
            "• Mixture of LOCAL + GLOBAL beliefs.\n" +
            "• Mostly CHRISTIANITY, ISLAM, and TRADITIONAL AFRICAN BELIEFS (folk religions).\n" +
            "• Religion influences art, philosophy, culture.\n\n" +
            "RELIGIOUS DIVERSITY INDEX (RDI):\n" +
            "• Scale 0–10.\n" +
            "• 10 = maximum diversity (all 8 groups equal).\n" +
            "• 8 groups: Christians, Muslims, Buddhists, folk religions, Hindus, Jews, other religions, religiously unaffiliated.\n\n" +
            "RDI RANGES:\n" +
            "• VERY HIGH: 7.0+\n" +
            "• HIGH: 5.3–6.9\n" +
            "• MODERATE: 3.1–5.2\n" +
            "• LOW: 0–3.0\n\n" +
            "HIGH RDI IN AFRICA:\n" +
            "• Guinea-Bissau + Togo = 7.5 each.\n" +
            "• Côte d'Ivoire = 7.4.\n" +
            "• Benin = 7.2.\n" +
            "• Mozambique = 7.0.",
          bodyAm:
            "RDI 0–10።\n" +
            "Very high: 7+።\n" +
            "High: 5.3–6.9።\n" +
            "Guinea-Bissau + Togo 7.5።",
        },
        {
          id: "n5-3",
          title: "⚠ Remember trap — Diversity",
          titleAm: "⚠ አትርሳ — ብዝሃነት",
          body:
            "• Africa = MOST linguistically diverse.\n" +
            "• >2,000 living languages (1/3 of world's 6,000).\n" +
            "• Nigeria = 514 languages (most).\n" +
            "• Ethiopia = 86 languages.\n" +
            "• RDI scale 0–10; 10 = max diversity.\n" +
            "• Very high RDI: 7.0+.\n" +
            "• Guinea-Bissau + Togo = 7.5 (highest in Africa).\n" +
            "• Folk religions = traditional African beliefs.",
          bodyAm:
            "ናይጄሪያ 514።\n" +
            "ኢትዮጵያ 86።\n" +
            "RDI 0–10።",
        },
      ],
    },

    // ============================================================
    // FORMULA SHEET
    // ============================================================
    {
      id: "nFormula",
      title: "Formula Sheet — Unit 5",
      titleAm: "የቀመር ሉህ — ክፍል 5",
      body:
        "| Quantity                     | Formula / Definition                              |\n" +
        "|------------------------------|----------------------------------------------------|\n" +
        "| Unemployment rate            | (Unemployed / Total workforce) × 100               |\n" +
        "| Lower middle-income          | GNI per capita $1,036 – $4,045                     |\n" +
        "| Upper middle-income          | GNI per capita $4,046 – $12,535                    |\n" +
        "| Low-income                   | GNI per capita ≤ $1,025                            |\n" +
        "| Agriculture share of GDP     | 30–60%                                             |\n" +
        "| Agriculture share of workers | ~2/3                                               |\n" +
        "| Africa forest area           | 624 million ha (20.6% of land)                     |\n" +
        "| Africa forest share of world | 15.6%                                              |\n" +
        "| Agenda 2063 timeline         | 2013–2063 (50 years)                               |\n" +
        "| SDG timeline                 | 2015–2030                                          |\n" +
        "| Number of SDGs               | 17                                                 |\n" +
        "| RDI scale                    | 0–10                                               |",
      bodyAm:
        "| መጠን             | ቀመር/ትርጉም                          |\n" +
        "|------------------|--------------------------------------|\n" +
        "| ስራ አጥነት        | (ስራ አጥ/ሰራተኛ) × 100                 |\n" +
        "| እርሻ ድርሻ        | 30–60% GDP፣ ~2/3 ሰራተኛ             |\n" +
        "| 2063             | 2013–2063                            |\n" +
        "| SDGs             | 17 ግቦች 2015–2030                    |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 5",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 5",
      body:
        "1) Primary = agriculture, mining, forestry, fishery.\n" +
        "2) Secondary = manufacturing.\n" +
        "3) Tertiary = services.\n" +
        "4) Quaternary = knowledge-based.\n" +
        "5) Developed → tertiary; Developing → primary.\n" +
        "6) Agriculture ~2/3 of African workers; 30–60% of GDP.\n" +
        "7) Africa forest = 624M ha (20.6% of land).\n" +
        "8) Unemployment rate = (Unemployed / Workforce) × 100.\n" +
        "9) Agenda 2063 = 2013–2063 (50 years).\n" +
        "10) SDGs = 17 goals by 2030.\n" +
        "11) Africa = >2,000 languages.\n" +
        "12) Nigeria = 514 languages (most).\n" +
        "13) RDI scale 0–10; very high = 7.0+.\n" +
        "14) Guinea-Bissau + Togo = RDI 7.5 (highest in Africa).",
      bodyAm:
        "1) Primary = እርሻ/ማዕድን።\n" +
        "2) Secondary = ማኑፋክቸሪንግ።\n" +
        "3) 2/3 እርሻ።\n" +
        "4) 2013–2063።\n" +
        "5) 2,000+ ቋንቋዎች።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "The PRIMARY sector includes:", options: ["Manufacturing", "Agriculture, mining, forestry, fishing", "Banking, tourism", "ICT, R&D"], answer: "1", explanation: "Primary = extracting raw materials." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "The SECONDARY sector includes:", options: ["Farming", "Manufacturing", "Banking", "Teaching"], answer: "1", explanation: "Secondary = manufacturing." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "The TERTIARY sector includes:", options: ["Mining", "Manufacturing", "Services", "Agriculture"], answer: "2", explanation: "Tertiary = services." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "The QUATERNARY sector is based on:", options: ["Mining", "Manufacturing", "Agriculture", "Knowledge"], answer: "3", explanation: "Quaternary = knowledge-based." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Developed countries have more workers in:", options: ["Primary", "Secondary", "Tertiary", "Quaternary only"], answer: "2", explanation: "Developed = more TERTIARY workers." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Developing countries have more workers in:", options: ["Primary", "Secondary", "Tertiary", "Quaternary"], answer: "0", explanation: "Developing = more PRIMARY (agriculture)." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Agriculture employs about ___ of Africa's workers:", options: ["1/4", "1/2", "2/3", "3/4"], answer: "2", explanation: "~2/3 of working population." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Agriculture contributes about ___ of Africa's GDP:", options: ["10–20%", "30–60%", "70–80%", "90%+"], answer: "1", explanation: "30–60% of GDP." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Africa has how many million hectares of forest?", options: ["62 million", "124 million", "624 million", "1,240 million"], answer: "2", explanation: "624 million ha (20.6% of land)." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Africa has what % of world's forest cover?", options: ["5.6%", "10%", "15.6%", "25%"], answer: "2", explanation: "15.6% of world's forest cover." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Unemployment rate is calculated by:", options: ["(Employed / Workforce) × 100", "(Unemployed / Workforce) × 100", "(Unemployed / Population) × 100", "(Workforce / Population) × 100"], answer: "1", explanation: "(Unemployed / Workforce) × 100." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Which is VOLUNTARY unemployment?", options: ["Unable to find work", "Jobless by choice", "Laid off", "Retired"], answer: "1", explanation: "Voluntary = jobless by choice." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Agenda 2063 is a:", options: ["10-year plan", "20-year plan", "50-year plan", "100-year plan"], answer: "2", explanation: "50 years (2013–2063)." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Agenda 2063 was launched by:", options: ["UN", "EU", "African Union", "World Bank"], answer: "2", explanation: "AU = African Union." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "How many Sustainable Development Goals (SDGs) are there?", options: ["10", "15", "17", "20"], answer: "2", explanation: "17 SDGs." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "SDGs are to be achieved by:", options: ["2020", "2025", "2030", "2050"], answer: "2", explanation: "By 2030 (Agenda 2030)." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Africa has how many living languages?", options: ["200", "500", "1,000", "2,000+"], answer: "3", explanation: ">2,000 living languages." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Which African country has the MOST languages?", options: ["Ethiopia", "Nigeria", "Egypt", "South Africa"], answer: "1", explanation: "Nigeria = 514 languages." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "Africa's largest export/economic activity is:", options: ["Manufacturing", "Services", "Agriculture", "IT"], answer: "2", explanation: "Agriculture is the single most important economic activity." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "Africa has how many languages per 6,000 worldwide?", options: ["1/6", "1/5", "1/4", "1/3"], answer: "3", explanation: "1/3 of world's 6,000 languages." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "Which economic challenge faces Africa MOST?", options: ["Surplus capital", "Over-dependence on foreign aid", "Over-industrialization", "Zero unemployment"], answer: "1", explanation: "Over-dependence on foreign aid = major challenge." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "In lower middle-income economies, GNI per capita (2021) is:", options: ["≤ $1,025", "$1,036 – $4,045", "$4,046 – $12,535", "> $12,535"], answer: "1", explanation: "$1,036–$4,045." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "In upper middle-income economies, GNI per capita (2021) is:", options: ["≤ $1,025", "$1,036 – $4,045", "$4,046 – $12,535", "> $12,535"], answer: "2", explanation: "$4,046–$12,535." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "Low-income countries have GNI per capita of:", options: ["≤ $1,025", "$1,036 – $4,045", "$4,046 – $12,535", "> $12,535"], answer: "0", explanation: "≤ $1,025 (2018)." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "Which is an example of involuntary unemployment?", options: ["Quitting to start a business", "Refusing to work", "Graduates unable to find jobs", "Retiring early"], answer: "2", explanation: "Involuntary = willing but unable to find." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "Africa has the world's highest rate of:", options: ["High income", "Working poverty", "Industrialization", "Low birth rate"], answer: "1", explanation: "Africa = highest WORKING POVERTY (<$2/day)." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "AfCFTA stands for:", options: ["African Continental Free Trade Area", "Africa Free Commerce and Trade Alliance", "African Community Free Trade Agreement", "Africa Foreign Cooperation Trade Area"], answer: "0", explanation: "African Continental Free Trade Area." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "Agenda 2063 is intended to address all EXCEPT:", options: ["Economic development", "Political integration", "Colonial expansion", "Peace and security"], answer: "2", explanation: "Colonial expansion is NOT part of Agenda 2063." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "Which was the predecessor of the African Union?", options: ["United Nations", "Organization of African Unity (OAU)", "Economic Community of West Africa", "African Development Bank"], answer: "1", explanation: "OAU was predecessor of AU." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "The SDGs replaced:", options: ["OAU", "MDGs", "Agenda 2063", "UN Charter"], answer: "1", explanation: "SDGs replaced MDGs (which ended 2015)." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Which country has the highest RDI (Religious Diversity Index) in Africa?", options: ["Ethiopia", "Guinea-Bissau", "Egypt", "Sudan"], answer: "1", explanation: "Guinea-Bissau = 7.5 (tied with Togo)." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "The RDI scale ranges from:", options: ["0–100", "0–10", "1–5", "1–100"], answer: "1", explanation: "0–10 scale; 10 = maximum diversity." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "In the Religious Diversity Index, 'folk religions' refers to:", options: ["Global religions", "Traditional African beliefs", "Atheism", "New religious movements"], answer: "1", explanation: "Folk religions = traditional African beliefs." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Ethiopia has how many languages?", options: ["56", "66", "76", "86"], answer: "3", explanation: "Ethiopia = 86 languages." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Africa is home to what fraction of world's population?", options: ["~1/7", "~1/5", "~1/3", "~1/2"], answer: "0", explanation: "Less than 1/7 of world population." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Which statement about the primary sector is FALSE?", options: ["Workers often earn low wages", "Products depend on weather", "It's the easiest transition to secondary", "Manufacturers have more economic power"], answer: "2", explanation: "Primary→secondary is the HARDEST transition." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Africa's over-dependence on foreign aid leads to:", options: ["Economic growth", "Economic stagnation", "Technological advancement", "Industrialization"], answer: "1", explanation: "Over-dependence → economic STAGNATION." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "The Brundtland Commission Report was published in:", options: ["1977", "1987", "1997", "2007"], answer: "1", explanation: "1987." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "Which is NOT a Sustainable Development Goal?", options: ["No poverty", "Zero hunger", "Conquer Africa", "Climate action"], answer: "2", explanation: "'Conquer Africa' is not an SDG." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "Which two continents together share ~77% of global population?", options: ["Africa + Europe", "Asia + Africa", "Asia + Europe", "Africa + Americas"], answer: "1", explanation: "Asia + Africa = ~77% of world population." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Which statement about Agenda 2063 is TRUE?", options: ["It runs 2020–2070", "It aligns with UN Agenda 2030", "It has 20 goals", "It was launched by the EU"], answer: "1", explanation: "Agenda 2063 aligns with UN Agenda 2030." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "The 'demographic explosion' of developing countries occurred:", options: ["1800s", "Early 1900s", "20th century", "21st century"], answer: "2", explanation: "20th century = demographic explosion." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "Which region has the HIGHEST population share of the world (2021)?", options: ["Asia (59.5%)", "Africa (17.2%)", "Europe (9.6%)", "Americas (13.1%)"], answer: "0", explanation: "Asia = 59.5%." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Differentiate the four economic sectors.", answer: "PRIMARY: extract raw materials from environment — agriculture, mining, forestry, fishing.\n\nSECONDARY: change raw materials into new products — manufacturing (e.g., copper ore → electric cable).\n\nTERTIARY: service sector — education, health, tourism, banking, transport.\n\nQUATERNARY: knowledge-based — ICT, R&D, education, financial planning.\n\nNote: Quaternary is NEW and NOT included in standard country-level assessment.", explanation: "Primary (extract), Secondary (manufacture), Tertiary (services), Quaternary (knowledge)." },
    { id: "q45", type: "short", difficulty: "easy", stem: "State the formula for unemployment rate and explain voluntary vs involuntary unemployment.", answer: "UNEMPLOYMENT RATE = (Number of unemployed / Total workforce) × 100\n\nVOLUNTARY UNEMPLOYMENT:\n• Jobless by CHOICE.\n• Example: quitting a job to start a small business.\n\nINVOLUNTARY UNEMPLOYMENT:\n• Willing + able to work but can't find a job.\n• Example: graduates unable to find jobs.", explanation: "Rate = (Unemployed / Workforce) × 100; Voluntary = choice; Involuntary = can't find." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Describe Africa's agricultural role in the economy.", answer: "AFRICA'S AGRICULTURE:\n• Single most important economic activity.\n• Employs ~2/3 (two-thirds) of the working population.\n• Contributes 30–60% of GDP.\n• ~30% of value of exports.\n• Mostly RAIN-FED → vulnerable to climate variability (frequent droughts + occasional floods).\n\nChallenges:\n• Weather-dependent productivity.\n• Low wages.\n• Difficult transition to secondary sector.\n• Dependence on exchange rates + manufacturers' power.", explanation: "~2/3 workers; 30–60% GDP; ~30% exports; rain-fed." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Explain the main factors hindering Africa's economic growth.", answer: "1) LIMITATIONS IN TECHNOLOGY:\n• Key to development; gap between developed + developing countries.\n• Africa needs to invest in technology.\n\n2) OVER-DEPENDENCE ON FOREIGN AID:\n• Many sectors (education, health, agriculture) rely on foreign partners.\n• Leads to STAGNATION of the economy.\n\n3) POOR STRUCTURES OF THE ECONOMY:\n• Still exporting raw materials (cocoa, diamond, gold, bauxite) without adding value.\n• Importing light industry products (toys, matches, toothpicks).\n\n4) POOR EDUCATION:\n• Education systems not producing job-ready, skilled graduates.\n\nOTHER ISSUES:\n• High working poverty (<$2/day).\n• High youth unemployment + underemployment.\n• Generational cycles of poverty.\n• Crime + violence among idle youth.\n• Dangerous migration to developed regions.", explanation: "Technology, foreign aid dependence, poor structures, poor education." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Explain Agenda 2063 and its flagship programs.", answer: "AGENDA 2063:\n• Africa's blueprint + masterplan.\n• 50-year plan (2013–2063).\n• Launched by African Union (AU).\n• Aims to make Africa a global powerhouse.\n\nPRIORITIES:\n• Inclusive social + economic development.\n• Continental + regional integration.\n• Democratic governance.\n• Peace + security.\n\nFLAGSHIP PROGRAMS (highlights):\n• Integrated high-speed train network.\n• AfCFTA (African Continental Free Trade Area).\n• African passport + free movement.\n• Silencing the guns by 2020 (deadline passed).\n• Grand Inga Dam project.\n• SAATM (Single African Air Transport Market).\n• Pan-African e-network.\n• Cyber security + Great African Museum + Encyclopedia Africana.\n\nALIGNMENT: With UN Agenda 2030 (SDGs).", explanation: "50-year AU plan; AfCFTA, Grand Inga, SAATM, etc." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Compare Agenda 2063 with Sustainable Development Goals (SDGs).", answer: "AGENDA 2063:\n• Africa-focused.\n• 50 years (2013–2063).\n• Launched by African Union.\n• Aims: inclusive growth, integration, democratic governance, peace + security.\n• Pan-African ideals + Renaissance.\n\nSDGs (AGENDA 2030):\n• Global.\n• 17 goals by 2030.\n• Set by UN General Assembly (2015).\n• Replaced MDGs (which ended 2015).\n• Universal blueprint for peace + prosperity.\n\nSIMILARITIES:\n• Both target sustainable development.\n• Both emphasize poverty reduction, economic growth, social progress.\n• Both mention peace + security.\n• Agenda 2063 ALIGNS with Agenda 2030.\n\nDIFFERENCES:\n• 2063 = Africa; 50 years.\n• SDGs = global; 17 goals, 15 years (2015–2030).", explanation: "2063 (Africa, 50 yrs) vs SDGs (global, 17 goals by 2030); aligned." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Describe Africa's linguistic and religious diversity.", answer: "LINGUISTIC DIVERSITY:\n• Africa = MOST linguistically diverse continent.\n• >2,000 living languages.\n• 1/3 of world's 6,000 languages (<1/7 of world population).\n• Many countries highly multilingual.\n• TOP: Nigeria (514), Cameroon (278), DRC (215), Chad (131), Tanzania (128), Ethiopia (86).\n• Living language = still spoken; at least one native speaker.\n\nRELIGIOUS DIVERSITY:\n• Mixture of LOCAL + GLOBAL beliefs.\n• Mostly Christianity, Islam, and traditional African beliefs (folk religions).\n• Religion influences art, philosophy, culture.\n\nRELIGIOUS DIVERSITY INDEX (RDI):\n• Scale 0–10; 10 = maximum diversity.\n• 8 groups: Christians, Muslims, Buddhists, folk religions, Hindus, Jews, other, unaffiliated.\n• Ranges: Very High (7.0+), High (5.3–6.9), Moderate (3.1–5.2), Low (0–3.0).\n• African highest: Guinea-Bissau + Togo (7.5), Côte d'Ivoire (7.4), Benin (7.2), Mozambique (7.0).", explanation: ">2,000 languages (Nigeria 514); RDI 0–10; Guinea-Bissau/Togo = 7.5." },
  ],
};