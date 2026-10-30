import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 ECONOMICS — UNIT 6
// ECONOMIC GROWTH
// Source: Grade 10 Economics Student Textbook (pp. 113–128)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, formula boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10EconomicsCh6: Chapter = {
  id: "ch6",
  number: 6,
  title: "Economic Growth",
  titleAm: "የኢኮኖሚ እድገት",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about measuring and explaining ECONOMIC GROWTH:\n" +
        "1) Macroeconomic variables (GDP, inflation, unemployment).\n" +
        "2) Definition and measurement of economic growth.\n" +
        "3) Sources of economic growth (productivity + factors of production).\n" +
        "4) Weaknesses of GDP as a measure.\n" +
        "5) Business cycle (boom → recession → depression → recovery).\n\n" +
        "The WHOLE chapter reduces to FOUR formulas + THREE key ideas:\n" +
        "• Growth rate: g = (RGDPₜ − RGDPₜ₋₁) / RGDPₜ₋₁ × 100%\n" +
        "• Per capita RGDP: RGDP / Population\n" +
        "• Current account balance: X − M\n" +
        "• GDP = total income = total expenditure.\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ አራት ቀመሮች፡\n" +
        "g = (RGDPₜ − RGDPₜ₋₁)/RGDPₜ₋₁ × 100%\n" +
        "Per capita = RGDP/ህዝብ\n" +
        "CA = X − M\n" +
        "GDP = ጠቅላላ ገቢ = ጠቅላላ ወጪ",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the big picture",
          titleAm: "ደረጃ 1 · ትልቁን ምስል መረዳት",
          body:
            "MACROECONOMIC VARIABLES:\n" +
            "• Current account balance (X − M)\n" +
            "• Inflation\n" +
            "• Economic growth\n" +
            "• Unemployment\n\n" +
            "MACROECONOMIC GOALS:\n" +
            "• Improved current account balance\n" +
            "• Stable prices\n" +
            "• Increased economic growth\n" +
            "• Reduced unemployment",
          bodyAm:
            "ተለዋዋጮች: CA, inflation, growth, unemployment።\n" +
            "ግቦች: improved CA, stable prices, growth, low unemployment።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the formulas",
          titleAm: "ደረጃ 2 · ቀመሮችን አስታውስ",
          body:
            "Growth rate:\n" +
            "g = (RGDPₜ − RGDPₜ₋₁) / RGDPₜ₋₁ × 100%\n\n" +
            "Per capita RGDP:\n" +
            "Per capita RGDP = RGDP / Population\n\n" +
            "Current account balance:\n" +
            "CA = Exports (X) − Imports (M)\n\n" +
            "GDP definition:\n" +
            "GDP = Total income = Total expenditure",
          bodyAm:
            "g = (RGDPₜ − RGDPₜ₋₁)/RGDPₜ₋₁ × 100%\n" +
            "Per capita = RGDP/ህዝብ\n" +
            "CA = X − M",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master the business cycle",
          titleAm: "ደረጃ 3 · የንግድ ዑደት ተቆጣጥር",
          body:
            "FOUR phases:\n" +
            "1) BOOM (Prosperity) — rising demand, prices, investment, employment, income.\n" +
            "2) RECESSION — cuts in investment, employment, income; prices fall.\n" +
            "3) DEPRESSION (Slump) — business confidence at LOWEST; I, employment, output, income, prices at BOTTOM.\n" +
            "4) RECOVERY (Expansion) — moving out of depression; I, employment, output, income, prices moving UP.\n\n" +
            "Key: The cycle is IRREGULAR and UNPREDICTABLE.",
          bodyAm:
            "1) Boom (ማደግ)\n" +
            "2) Recession (ማሽቆልቆል)\n" +
            "3) Depression (ውድቀት)\n" +
            "4) Recovery (ማገገም)",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Did you use RGDP (real), not nominal?\n" +
            "2) Did you divide by RGDPₜ₋₁ (previous year) for growth rate?\n" +
            "3) Did you compute per capita by dividing by POPULATION?\n" +
            "4) Did you remember GDP ≠ well-being?\n" +
            "5) Did you identify the correct business cycle phase?",
          bodyAm:
            "1) RGDP (not nominal)?\n" +
            "2) በቀድሞው ዓመት RGDP አካፈልክ?\n" +
            "3) በህዝብ ቁጥር አካፈልክ?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Growth ≠ development. Growth = increase in GDP. Development = broader transformation.\n" +
            "• Growth rate formula uses PREVIOUS year RGDP as denominator.\n" +
            "• Per capita RGDP = RGDP ÷ population.\n" +
            "• Trade surplus: X > M. Trade deficit: X < M.\n" +
            "• GDP excludes: leisure, unpaid work (household), environment quality, income distribution, black market.\n" +
            "• Business cycle = IRREGULAR, UNPREDICTABLE.\n" +
            "• Lowest point of cycle = DEPRESSION (trough). Highest = BOOM (peak).",
          bodyAm:
            "• እድገት ≠ ልማት።\n" +
            "• g በቀድሞ RGDP አካፈል።\n" +
            "• Per capita = RGDP/ህዝብ።\n" +
            "• GDP ሌዘር፣ ያልተከፈለ ሥራ፣ አካባቢ አያካትትም።\n" +
            "• Business cycle = irregular።",
        },
      ],
    },

    // ============================================================
    // 6.1 REVIEW OF MACROECONOMIC VARIABLES
    // ============================================================
    {
      id: "n1",
      title: "6.1 Review of Macroeconomic Variables",
      titleAm: "6.1 የማክሮ ኢኮኖሚ ተለዋዋጮች ግምገማ",
      body:
        "Abatu, MACROECONOMICS studies decisions at COUNTRY level; MICROECONOMICS studies decisions at INDIVIDUAL level.",
      bodyAm:
        "አባቱ፣ ማክሮ = በአገር ደረጃ፤ ማይክሮ = በግል ደረጃ።",
      children: [
        {
          id: "n1-1",
          title: "Micro vs Macro",
          titleAm: "ማይክሮ vs ማክሮ",
          body:
            "MICROECONOMICS:\n" +
            "• Studies individual decision-making units (individual consumer, individual producer).\n" +
            "• Goal: maximize satisfaction (consumers) or profit (producers).\n" +
            "• Analysis of optimization.\n\n" +
            "MACROECONOMICS:\n" +
            "• Studies decisions at country level (through government).\n" +
            "• Deals with national endowments (land, forest, water, population, capital).\n" +
            "• Goal: attain macroeconomic goals (growth, low unemployment, stable prices, balance of payments).",
          bodyAm:
            "ማይክሮ = ግል።\n" +
            "ማክሮ = አገር።",
        },
        {
          id: "n1-2",
          title: "Current account balance",
          titleAm: "የአሁኑ ሂሳብ ሚዛን",
          body:
            "CURRENT ACCOUNT BALANCE = difference between the dollar value of goods exported and the dollar value of goods imported.\n\n" +
            "Formula:\n" +
            "Current account balance = Exports (X) − Imports (M)\n\n" +
            "Two scenarios:\n" +
            "• If X > M → TRADE SURPLUS (desirable). Country benefits from trade.\n" +
            "• If X < M → TRADE DEFICIT (undesirable). Country loses from trade.\n\n" +
            "Developing countries often have trade deficits (export cheap primary goods, import expensive manufactured goods).",
          bodyAm:
            "CA = X − M።\n" +
            "X > M: surplus (ጥሩ)።\n" +
            "X < M: deficit (መጥፎ)።",
        },
        {
          id: "n1-3",
          title: "Inflation",
          titleAm: "የዋጋ ግሽበት",
          body:
            "INFLATION: an increase in the overall price level of goods and services over a certain period.\n\n" +
            "• Reduces purchasing power of money.\n" +
            "• High inflation is undesirable → policymakers keep it low.\n\n" +
            "Two types (causes):\n" +
            "• COST-PUSH: high production costs → producers raise prices.\n" +
            "• DEMAND-PULL: growing demand allows firms to raise prices.",
          bodyAm:
            "ግሽበት = የዋጋ ደረጃ መጨመር።\n" +
            "Cost-push: ወጪ ከፍተኛ።\n" +
            "Demand-pull: ፍላጎት ከፍተኛ።",
        },
        {
          id: "n1-4",
          title: "Economic growth",
          titleAm: "የኢኮኖሚ እድገት",
          body:
            "ECONOMIC GROWTH: amount that the level of output within an economy increases over a given period (usually a year).\n\n" +
            "• Desirable — people within economy getting richer.\n" +
            "• Can be increased through: technological improvement, increased demand, increased workforce size.",
          bodyAm:
            "ውጤት በጊዜ ሂደት መጨመር።\n" +
            "በቴክኖሎጂ፣ በፍላጎት፣ በሠራተኛ ቁጥር ይጨምራል።",
        },
        {
          id: "n1-5",
          title: "Unemployment",
          titleAm: "ስራ አጥነት",
          body:
            "UNEMPLOYMENT: people within an economy who are willing and able to work, but don't have a job at the going wage rate.\n\n" +
            "Four types:\n" +
            "• FRICTIONAL: searching for a new job / transition between jobs.\n" +
            "• STRUCTURAL: decline of a specific industry (e.g., typewriting, coal mining).\n" +
            "• SEASONAL: caused by time of year (e.g., drought time for farmers).\n" +
            "• CYCLICAL: caused by recession — reduction in output.",
          bodyAm:
            "4 ዓይነቶች:\n" +
            "• ፍሪክሽናል (ሥራ ፍለጋ)\n" +
            "• ስትራክቸራል (ኢንዱስትሪ ውድቀት)\n" +
            "• ሲዞናል (ወቅት)\n" +
            "• ሳይክሊካል (ውድቀት)",
        },
        {
          id: "n1-6",
          title: "⚠ Remember trap — Macro variables",
          titleAm: "⚠ አትርሳ — ማክሮ ተለዋዋጮች",
          body:
            "• Current account = X − M (exports MINUS imports).\n" +
            "• X > M → SURPLUS; X < M → DEFICIT.\n" +
            "• Inflation reduces PURCHASING POWER.\n" +
            "• Cost-push vs demand-pull are TWO causes of inflation.\n" +
            "• Growth = increase in OUTPUT.\n" +
            "• 4 unemployment types: frictional, structural, seasonal, cyclical.\n" +
            "• CYCLICAL unemployment is caused by RECESSION.",
          bodyAm:
            "• CA = X − M።\n" +
            "• Inflation = purchasing power ↓።\n" +
            "• 4 የስራ አጥነት ዓይነቶች።",
        },
      ],
    },

    // ============================================================
    // 6.2 DEFINITION AND MEASUREMENT OF ECONOMIC GROWTH
    // ============================================================
    {
      id: "n2",
      title: "6.2 Definition and Measurement of Economic Growth",
      titleAm: "6.2 የኢኮኖሚ እድገት ትርጉምና መለኪያ",
      body:
        "Abatu, economic growth has TWO definitions: SHORT RUN (RGDP increases) and LONG RUN (sustained increase in per capita income + structural changes).",
      bodyAm:
        "አባቱ፣ አጭር ጊዜ = RGDP መጨመር፤ ረጅም ጊዜ = per capita ገቢ ዘላቂ መጨመር + መዋቅራዊ ለውጥ።",
      children: [
        {
          id: "n2-1",
          title: "Short-run growth formula",
          titleAm: "የአጭር ጊዜ እድገት ቀመር",
          body:
            "SHORT RUN growth = increase in RGDP.\n\n" +
            "Growth rate formula:\n" +
            "g = (RGDPₜ − RGDPₜ₋₁) / RGDPₜ₋₁ × 100%\n\n" +
            "Where:\n" +
            "• RGDPₜ = real GDP in current year\n" +
            "• RGDPₜ₋₁ = real GDP in previous year",
          bodyAm:
            "g = (RGDPₜ − RGDPₜ₋₁)/RGDPₜ₋₁ × 100%",
        },
        {
          id: "n2-2",
          title: "Long-run growth",
          titleAm: "የረጅም ጊዜ እድገት",
          body:
            "LONG RUN growth = sustained increase in per capita income + associated structural changes.\n\n" +
            "Structural changes:\n" +
            "• Industrialization.\n" +
            "• Fall in share of agriculture (in GDP and workforce).\n" +
            "• Rise in share of industrial and service sectors.",
          bodyAm:
            "ረጅም ጊዜ = ዘላቂ per capita ገቢ መጨመር + መዋቅራዊ ለውጥ።",
        },
        {
          id: "n2-3",
          title: "Per capita RGDP",
          titleAm: "Per capita RGDP",
          body:
            "PER CAPITA RGDP = RGDP of the year divided by total population of that year.\n\n" +
            "Formula:\n" +
            "Per capita RGDP = RGDPₜ / Populationₜ\n\n" +
            "Also known as PER CAPITA INCOME.",
          bodyAm:
            "Per capita RGDP = RGDPₜ / Populationₜ",
        },
        {
          id: "n2-4",
          title: "Economic growth vs economic development",
          titleAm: "እድገት vs ልማት",
          body:
            "ECONOMIC GROWTH:\n" +
            "• Rate of increase in GDP or GDP per capita.\n" +
            "• Narrower concept.\n\n" +
            "ECONOMIC DEVELOPMENT:\n" +
            "• Broader concept — overall transformation in human life.\n" +
            "• Progressive changes in social, political, institutional, economic structures.\n\n" +
            "RELATIONSHIP:\n" +
            "• Growth can happen WITHOUT development.\n" +
            "• Development REQUIRES growth.\n" +
            "• Growth is a NECESSARY but NOT SUFFICIENT condition for development.\n" +
            "• Growth is a SUBSET of development.",
          bodyAm:
            "እድገት = ጠባብ።\n" +
            "ልማት = ሰፊ።\n" +
            "እድገት ያለ ልማት ይቻላል።\n" +
            "ልማት ግን እድገት ይፈልጋል።",
        },
        {
          id: "n2-5",
          title: "Worked Example — Growth rate",
          titleAm: "ሠርተ ምሳሌ — የእድገት መጠን",
          body:
            "Problem: RGDP in 2022 = 100 billion Birr; RGDP in 2021 = 90 billion Birr. Find growth rate.\n\n" +
            "Solution:\n" +
            "g = (100 − 90)/90 × 100%\n" +
            "  = 10/90 × 100%\n" +
            "  ≈ 11.11%",
          bodyAm:
            "g = (100 − 90)/90 × 100% ≈ 11.11%",
        },
        {
          id: "n2-6",
          title: "Worked Example — Per capita",
          titleAm: "ሠርተ ምሳሌ — Per capita",
          body:
            "Problem: RGDP = 100 billion Birr; Population = 120 million. Find per capita RGDP.\n\n" +
            "Solution:\n" +
            "Per capita RGDP = 100,000,000,000 / 120,000,000\n" +
            "= 833.33 Birr per person",
          bodyAm:
            "Per capita = 100B / 120M = 833.33 ብር",
        },
        {
          id: "n2-7",
          title: "⚠ Remember trap — Growth vs development",
          titleAm: "⚠ አትርሳ — እድገት vs ልማት",
          body:
            "• Growth ≠ development. They are NOT synonyms.\n" +
            "• Growth rate denominator is RGDPₜ₋₁ (previous year).\n" +
            "• Use RGDP (real), NOT nominal GDP.\n" +
            "• Per capita uses POPULATION, not labor force.\n" +
            "• Growth can occur WITHOUT development (GDP up, but inequality/welfare unchanged).\n" +
            "• Development requires growth but also structural change.\n" +
            "• Growth is a SUBSET of development.",
          bodyAm:
            "• እድገት ≠ ልማት።\n" +
            "• g በቀድሞ RGDP አካፈል።\n" +
            "• RGDP ተጠቀም።\n" +
            "• Per capita = በህዝብ ቁጥር።",
        },
      ],
    },

    // ============================================================
    // 6.3 SOURCES OF ECONOMIC GROWTH
    // ============================================================
    {
      id: "n3",
      title: "6.3 Sources of Economic Growth",
      titleAm: "6.3 የኢኮኖሚ እድገት ምንጮች",
      body:
        "Abatu, economic growth comes from PRODUCTIVITY (the key word) and FACTORS OF PRODUCTION (capital, labor, natural resources, technology).",
      bodyAm:
        "አባቱ፣ ምንጮች: ምርታማነት + የምርት ምክንያቶች።",
      children: [
        {
          id: "n3-1",
          title: "Productivity as the key explanation",
          titleAm: "ምርታማነት እንደ ዋና ምክንያት",
          body:
            "Why are some countries rich and others poor? The answer is PRODUCTIVITY.\n\n" +
            "PRODUCTIVITY: output per unit of input (e.g., output per worker).\n\n" +
            "Higher productivity → higher income → higher living standards.\n\n" +
            "Americans live better than Nigerians because American workers are MORE PRODUCTIVE.\n" +
            "Japanese living standards grew faster than Argentineans because Japanese productivity grew faster.",
          bodyAm:
            "ሀብታም vs ድሃ = ምርታማነት።\n" +
            "ከፍተኛ ምርታማነት → ከፍተኛ ገቢ።",
        },
        {
          id: "n3-2",
          title: "Four determinants of productivity",
          titleAm: "አራቱ የምርታማነት ወሳኝ ምክንያቶች",
          body:
            "1) PHYSICAL CAPITAL PER WORKER:\n" +
            "• Tools and machinery available per worker.\n" +
            "• More tools → more productive.\n\n" +
            "2) HUMAN CAPITAL PER WORKER:\n" +
            "• Knowledge and skills from education, training, experience.\n" +
            "• Includes childhood programs, school, on-the-job training.\n\n" +
            "3) NATURAL RESOURCES PER WORKER:\n" +
            "• Inputs provided by nature: land, rivers, minerals.\n" +
            "• Important but NOT necessary (Japan has few resources but is rich).\n\n" +
            "4) TECHNOLOGICAL KNOWLEDGE:\n" +
            "• Understanding of best ways to produce goods and services.\n" +
            "• Advances in farming technology → fewer farmers feed more people.",
          bodyAm:
            "1) አካላዊ ካፒታል\n" +
            "2) ሰው ካፒታል (ትምህርት፣ ክህሎት)\n" +
            "3) ተፈጥሮ ሀብት\n" +
            "4) ቴክኖሎጂ እውቀት",
        },
        {
          id: "n3-3",
          title: "Kuznets's five characteristics of modern growth",
          titleAm: "የ Kuznets አምስት ባህሪያት",
          body:
            "Simon Kuznets (father of national income accounting) identified FIVE characteristics:\n\n" +
            "a) High rates of increase in per capita income.\n" +
            "b) High rates of increase in factor productivity.\n" +
            "c) High rates of structural transformation (agriculture → industry).\n" +
            "d) Increase in saving and investment rates.\n" +
            "e) Increasing application of modern scientific knowledge in production.",
          bodyAm:
            "a) Per capita ገቢ ↑\n" +
            "b) Factor productivity ↑\n" +
            "c) Structural transformation\n" +
            "d) Saving & investment ↑\n" +
            "e) Scientific knowledge አገልግሎት ↑",
        },
        {
          id: "n3-4",
          title: "World Bank income categories",
          titleAm: "የዓለም ባንክ የገቢ ምድቦች",
          body:
            "World Bank classifies economies (GNI per capita, 2008):\n\n" +
            "• LOW-INCOME COUNTRIES (LICs): ≤ $975\n" +
            "• LOWER-MIDDLE-INCOME (LMCs): $976 – $3,855\n" +
            "• UPPER-MIDDLE-INCOME (UMCs): $3,856 – $11,906\n" +
            "• HIGH-INCOME OECD + other high-income: ≥ $11,907\n\n" +
            "Middle-income = LMCs + UMCs.\n\n" +
            "LEAST DEVELOPED COUNTRIES (LDCs, UN 2010): 49 countries — 33 in Africa, 15 in Asia, plus Haiti. Low income, low human capital, high economic vulnerability.",
          bodyAm:
            "LICs: ≤ $975\n" +
            "LMCs: $976 – $3,855\n" +
            "UMCs: $3,856 – $11,906\n" +
            "High: ≥ $11,907\n" +
            "LDCs: 49 (33 Africa + 15 Asia + Haiti)።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap — Sources of growth",
          titleAm: "⚠ አትርሳ — የእድገት ምንጮች",
          body:
            "• PRODUCTIVITY is the single most important explanation.\n" +
            "• Natural resources are NOT necessary for growth (Japan is rich with few resources).\n" +
            "• Human capital = education + training + experience.\n" +
            "• Physical capital = tools + machinery.\n" +
            "• World Bank categories: LICs, LMCs, UMCs, High-income.\n" +
            "• LDCs = 49 countries (33 Africa + 15 Asia + Haiti).\n" +
            "• Kuznets = 5 characteristics of modern growth.",
          bodyAm:
            "• ምርታማነት ዋና ነው።\n" +
            "• ተፈጥሮ ሀብት አስፈላጊ አይደለም።\n" +
            "• LDCs = 49።",
        },
      ],
    },

    // ============================================================
    // 6.4 WEAKNESSES OF USING GDP
    // ============================================================
    {
      id: "n4",
      title: "6.4 The Weaknesses of Using GDP / GDP Per Capita",
      titleAm: "6.4 የGDP ጉድለቶች",
      body:
        "Abatu, GDP is a good measure of economic well-being for MOST purposes — but NOT ALL. It excludes several important dimensions of well-being.",
      bodyAm:
        "አባቱ፣ GDP ጥሩ መለኪያ ነው ግን ፍጹም አይደለም።",
      children: [
        {
          id: "n4-1",
          title: "What GDP excludes",
          titleAm: "GDP የማያካትታቸው",
          body:
            "GDP EXCLUDES:\n" +
            "1) LEISURE — free time has value.\n" +
            "2) UNPAID WORK / HOME PRODUCTION — cooking at home, child care by parents, volunteer work.\n" +
            "3) ENVIRONMENTAL QUALITY — pollution, environmental degradation.\n" +
            "4) INCOME DISTRIBUTION — GDP per capita is an average; hides inequality.\n" +
            "5) BLACK MARKET / UNDERGROUND ECONOMY — illegal or unreported transactions.\n\n" +
            "Note: GDP CAN rise while well-being falls (e.g., longer working hours, more pollution).",
          bodyAm:
            "1) ሌዘር\n" +
            "2) ያልተከፈለ ሥራ\n" +
            "3) አካባቢ\n" +
            "4) የገቢ ስርጭት\n" +
            "5) ጥቁር ገበያ",
        },
        {
          id: "n4-2",
          title: "Worked example — Chef's meal",
          titleAm: "ሠርተ ምሳሌ — የሼፍ ምግብ",
          body:
            "When a CHEF prepares a meal and sells it at a restaurant → counted in GDP.\n" +
            "When the SAME CHEF prepares the SAME meal for family at home → NOT counted in GDP.\n\n" +
            "Same value created, different GDP recording.\n\n" +
            "Similarly:\n" +
            "• Child care at day-care center → in GDP.\n" +
            "• Child care by parents at home → NOT in GDP.\n" +
            "• Volunteer work → NOT in GDP.",
          bodyAm:
            "ሼፍ በሬስቶራንት → GDP ውስጥ።\n" +
            "ሼፍ በቤት → GDP ውስጥ አይደለም።",
        },
        {
          id: "n4-3",
          title: "GDP and income distribution",
          titleAm: "GDP እና የገቢ ስርጭት",
          body:
            "Two societies with SAME GDP per capita can have very different distributions:\n\n" +
            "Society A: 100 people × $50,000 = $5M, per capita = $50,000.\n" +
            "Society B: 10 people × $500,000 + 90 × $0 = $5M, per capita = $50,000.\n\n" +
            "Same GDP per capita, but VASTLY different well-being.\n\n" +
            "GDP per capita is an AVERAGE — hides inequality.",
          bodyAm:
            "አንድ ዓይነት GDP per capita → የተለያየ ስርጭት።\n" +
            "አማካይ ስርጭትን ይደብቃል።",
        },
        {
          id: "n4-4",
          title: "⚠ Remember trap — GDP limits",
          titleAm: "⚠ አትርሳ — የGDP ገደቦች",
          body:
            "• GDP excludes LEISURE, UNPAID WORK, ENVIRONMENT, INCOME DISTRIBUTION, BLACK MARKET.\n" +
            "• GDP per capita is an AVERAGE — hides distribution.\n" +
            "• GDP can RISE while well-being FALLS (more pollution, more hours).\n" +
            "• Home cooking ≠ GDP; restaurant cooking = GDP.\n" +
            "• Parental child care ≠ GDP; day-care = GDP.\n" +
            "• GDP ≠ perfect well-being measure — but is a GOOD measure for most purposes.",
          bodyAm:
            "• GDP ሌዘር፣ ያልተከፈለ ሥራ አያካትትም።\n" +
            "• GDP per capita አማካይ ነው።\n" +
            "• GDP ↑ ሆኖ well-being ↓ ሊሆን ይችላል።",
        },
      ],
    },

    // ============================================================
    // 6.5 THE BUSINESS CYCLE AND ITS PHASES
    // ============================================================
    {
      id: "n5",
      title: "6.5 The Business Cycle and Its Phases",
      titleAm: "6.5 የንግድ ዑደትና ደረጃዎቹ",
      body:
        "Abatu, the BUSINESS CYCLE refers to IRREGULAR and largely UNPREDICTABLE fluctuations in economic activity.",
      bodyAm:
        "አባቱ፣ የንግድ ዑደት = መደበኛ ያልሆነ የኢኮኖሚ ልዋጭነት።",
      children: [
        {
          id: "n5-1",
          title: "Definition",
          titleAm: "ትርጉም",
          body:
            "BUSINESS CYCLE: irregular and largely unpredictable fluctuations in economic activity, as measured by production of goods and services or number of people employed.\n\n" +
            "IMPORTANT: The term is somewhat MISLEADING — it suggests regular, predictable patterns. In reality, economic fluctuations are NOT regular and are almost impossible to predict accurately.",
          bodyAm:
            "መደበኛ ያልሆነ፣ ሊተነበይ የማይችል ልዋጭነት።",
        },
        {
          id: "n5-2",
          title: "Four phases",
          titleAm: "አራቱ ደረጃዎች",
          body:
            "1) PROSPERITY / BOOM (PEAK):\n" +
            "• Rising demand, prices, investment, employment, income, purchasing power.\n" +
            "• Multiplier effect fuels boom.\n\n" +
            "2) RECESSION:\n" +
            "• Economy overheats; authorities and business become cautious.\n" +
            "• Cuts in investment → cuts in employment → falling income → falling demand.\n" +
            "• Prices begin to fall.\n\n" +
            "3) DEPRESSION / SLUMP (TROUGH):\n" +
            "• Business confidence at LOWEST.\n" +
            "• Investment, employment, output, income, prices at BOTTOM.\n\n" +
            "4) RECOVERY / EXPANSION:\n" +
            "• Economy moves out of depression.\n" +
            "• Investment, employment, output, income, prices move UP.\n" +
            "• May lead back to boom.",
          bodyAm:
            "1) Boom (ከፍተኛ)\n" +
            "2) Recession (ማሽቆልቆል)\n" +
            "3) Depression (ዝቅተኛ)\n" +
            "4) Recovery (ማገገም)",
        },
        {
          id: "n5-3",
          title: "⚠ Remember trap — Business cycle",
          titleAm: "⚠ አትርሳ — የንግድ ዑደት",
          body:
            "• Business cycle is IRREGULAR and UNPREDICTABLE — not a regular pattern.\n" +
            "• Four phases: Boom → Recession → Depression → Recovery.\n" +
            "• PEAK = Boom (highest point).\n" +
            "• TROUGH = Depression (lowest point).\n" +
            "• Boom: demand, prices, employment ALL rise.\n" +
            "• Depression: business confidence at LOWEST.\n" +
            "• Recovery = moving OUT of depression.",
          bodyAm:
            "• መደበኛ አይደለም።\n" +
            "• 4 ደረጃዎች።\n" +
            "• Boom = peak፤ Depression = trough።",
        },
      ],
    },

    // ============================================================
    // FORMULA SHEET
    // ============================================================
    {
      id: "nFormula",
      title: "Formula Sheet — Unit 6",
      titleAm: "የቀመር ሉህ — ክፍል 6",
      body:
        "| Quantity                     | Formula                                          |\n" +
        "|------------------------------|--------------------------------------------------|\n" +
        "| Economic growth rate         | g = (RGDPₜ − RGDPₜ₋₁) / RGDPₜ₋₁ × 100%           |\n" +
        "| Per capita RGDP              | RGDP / Population                                |\n" +
        "| Current account balance      | CA = Exports (X) − Imports (M)                   |\n" +
        "| Trade surplus                | X > M                                            |\n" +
        "| Trade deficit                | X < M                                            |\n" +
        "| GDP identity                 | GDP = Total income = Total expenditure           |",
      bodyAm:
        "| መጠን             | ቀመር                                    |\n" +
        "|------------------|----------------------------------------|\n" +
        "| g                | (RGDPₜ − RGDPₜ₋₁)/RGDPₜ₋₁ × 100%     |\n" +
        "| Per capita       | RGDP/ህዝብ                               |\n" +
        "| CA               | X − M                                  |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 6",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 6",
      body:
        "1) Growth ≠ development. Growth is a SUBSET of development.\n" +
        "2) Growth can happen WITHOUT development; development REQUIRES growth.\n" +
        "3) Growth rate uses PREVIOUS year RGDP as denominator.\n" +
        "4) Use RGDP (real), NOT nominal GDP.\n" +
        "5) Per capita uses POPULATION, not labor force.\n" +
        "6) Current account = X − M. X > M → surplus; X < M → deficit.\n" +
        "7) Productivity is the key explanation for income differences.\n" +
        "8) Natural resources are NOT necessary for growth.\n" +
        "9) GDP excludes: leisure, unpaid work, environment, income distribution, black market.\n" +
        "10) GDP per capita is an AVERAGE — hides inequality.\n" +
        "11) Business cycle = IRREGULAR, not predictable.\n" +
        "12) Four phases: Boom → Recession → Depression → Recovery.\n" +
        "13) Peak = Boom; Trough = Depression.",
      bodyAm:
        "1) እድገት ≠ ልማት።\n" +
        "2) g በቀድሞ RGDP አካፈል።\n" +
        "3) RGDP ተጠቀም።\n" +
        "4) Per capita = በህዝብ ቁጥር።\n" +
        "5) Business cycle = irregular።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Macroeconomics studies:", options: ["Individual consumers", "Individual producers", "Decisions at country level", "Single markets"], answer: "2", explanation: "Macroeconomics = country-level decisions." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Microeconomics studies:", options: ["Country-level decisions", "Individual decision-making units", "International trade", "Business cycles"], answer: "1", explanation: "Microeconomics = individual level." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Current account balance equals:", options: ["X + M", "X − M", "M − X", "X × M"], answer: "1", explanation: "CA = Exports − Imports." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "If exports > imports, the country has:", options: ["Trade deficit", "Trade surplus", "Balanced trade", "No trade"], answer: "1", explanation: "X > M → SURPLUS." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "If exports < imports, the country has:", options: ["Trade deficit", "Trade surplus", "Balanced trade", "No trade"], answer: "0", explanation: "X < M → DEFICIT." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Inflation is:", options: ["Fall in overall prices", "Increase in overall price level", "Constant prices", "Only food prices rising"], answer: "1", explanation: "Inflation = rise in general price level." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Inflation reduces:", options: ["Production", "Purchasing power of money", "Population", "Exports"], answer: "1", explanation: "Inflation → money buys less → lower purchasing power." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Economic growth means:", options: ["Increase in output level", "Increase in population", "Increase in prices", "Decrease in output"], answer: "0", explanation: "Growth = increase in output." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Unemployment refers to people who are:", options: ["Retired", "Willing and able to work but without a job at going wage", "Too young to work", "Not willing to work"], answer: "1", explanation: "Unemployment = willing + able + no job at going wage." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Cyclical unemployment is caused by:", options: ["Searching for a new job", "Recession", "Season", "Industry decline"], answer: "1", explanation: "Cyclical = due to recession." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Seasonal unemployment is caused by:", options: ["Recession", "Time of year", "Job search", "Technology"], answer: "1", explanation: "Seasonal = due to time of year." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Structural unemployment is caused by:", options: ["Recession", "Season", "Decline of a specific industry", "Searching for work"], answer: "2", explanation: "Structural = industry decline." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Frictional unemployment is caused by:", options: ["Recession", "Search for new job / transition", "Season", "Industry decline"], answer: "1", explanation: "Frictional = searching between jobs." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Short-run economic growth is:", options: ["Increase in nominal GDP", "Increase in RGDP", "Increase in population", "Increase in prices"], answer: "1", explanation: "Short-run growth = RGDP increases." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Per capita RGDP equals:", options: ["RGDP × Population", "RGDP / Population", "Population / RGDP", "RGDP − Population"], answer: "1", explanation: "Per capita = RGDP / Population." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Which is NOT a macroeconomic variable?", options: ["Inflation", "Unemployment", "Economic growth", "Utility"], answer: "3", explanation: "Utility is a microeconomic concept." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Which is a macroeconomic goal?", options: ["Maximize individual utility", "Reduce unemployment", "Maximize firm profit", "Minimize prices"], answer: "1", explanation: "Reduced unemployment = macro goal." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Business cycle has how many phases?", options: ["Two", "Three", "Four", "Five"], answer: "2", explanation: "Four phases: Boom, Recession, Depression, Recovery." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "If RGDP in 2022 = 110B and 2021 = 100B, growth rate is:", options: ["1%", "10%", "11%", "20%"], answer: "1", explanation: "g = (110−100)/100 × 100% = 10%." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "If RGDP = 200B and population = 50M, per capita RGDP equals:", options: ["250", "4000", "10000", "100"], answer: "1", explanation: "200B / 50M = 4,000 Birr per person." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "Economic growth can occur WITHOUT:", options: ["Population", "Economic development", "GDP", "Output"], answer: "1", explanation: "Growth CAN occur without development (development is broader)." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "Growth is a ____ of development:", options: ["Substitute", "Necessary but not sufficient condition", "Equal concept", "Unrelated concept"], answer: "1", explanation: "Growth = necessary but not sufficient for development." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "The single most important explanation for differences in living standards is:", options: ["Natural resources", "Population size", "Productivity", "Government"], answer: "2", explanation: "PRODUCTIVITY is the key explanation." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "Physical capital per worker refers to:", options: ["Workers' skills", "Tools and machinery per worker", "Natural resources", "Population"], answer: "1", explanation: "Physical capital = tools + machinery." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "Human capital refers to:", options: ["Tools", "Knowledge and skills from education/training", "Natural resources", "Money"], answer: "1", explanation: "Human capital = knowledge + skills." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "Which country is a good example that natural resources are NOT necessary for growth?", options: ["Kuwait", "Saudi Arabia", "Japan", "Nigeria"], answer: "2", explanation: "Japan is rich with FEW natural resources." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "GDP excludes:", options: ["Government spending", "Household production at home", "Investment", "Exports"], answer: "1", explanation: "Unpaid household work excluded from GDP." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "GDP EXCLUDES:", options: ["Restaurant meals", "Home-cooked meals for family", "Clothing purchases", "Car purchases"], answer: "1", explanation: "Home cooking → not counted in GDP." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "Two societies with same GDP per capita can have:", options: ["Identical distribution", "Different distributions", "No population", "No output"], answer: "1", explanation: "Same average, but distributions can be very different." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "Business cycle is:", options: ["Regular and predictable", "Irregular and largely unpredictable", "Always constant", "Only about inflation"], answer: "1", explanation: "Business cycle = IRREGULAR and largely unpredictable." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "The PEAK of the business cycle is:", options: ["Depression", "Recovery", "Boom", "Recession"], answer: "2", explanation: "Peak = Boom (highest point)." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "The TROUGH of the business cycle is:", options: ["Boom", "Depression", "Recovery", "Recession"], answer: "1", explanation: "Trough = Depression (lowest point)." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "During a BOOM, which typically does NOT rise?", options: ["Employment", "Investment", "Prices", "Unemployment"], answer: "3", explanation: "During boom, unemployment FALLS (not rises)." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Business confidence is LOWEST during:", options: ["Boom", "Recovery", "Recession", "Depression"], answer: "3", explanation: "Depression = business confidence at LOWEST." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Recovery phase means the economy is:", options: ["Entering depression", "Moving out of depression", "At peak", "Constant"], answer: "1", explanation: "Recovery = moving OUT of depression." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "If RGDPₜ = 500B, RGDPₜ₋₁ = 400B, growth rate is:", options: ["10%", "20%", "25%", "100%"], answer: "2", explanation: "g = (500−400)/400 × 100% = 25%." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Structural transformation in long-run growth involves:", options: ["Agriculture → Industry shift", "Industry → Agriculture shift", "No shift", "Population decline"], answer: "0", explanation: "Structural change = agriculture → industry." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "World Bank's 2008 category for LOW-INCOME countries (GNI per capita):", options: ["≤ $975", "$976–$3,855", "$3,856–$11,906", "≥ $11,907"], answer: "0", explanation: "LICs = ≤ $975." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "LDCs (2010 UN classification) include:", options: ["20 countries", "30 countries", "49 countries", "100 countries"], answer: "2", explanation: "LDCs = 49 (33 Africa + 15 Asia + Haiti)." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "Which is NOT a Kuznets characteristic of modern growth?", options: ["High per capita income growth", "High factor productivity growth", "Decreasing rates of saving", "Structural transformation"], answer: "2", explanation: "Kuznets says INCREASING saving/investment rates." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "If GDP rises because of longer working hours and more pollution, well-being:", options: ["Definitely rises", "May FALL despite GDP rising", "Is unaffected", "Cannot be measured"], answer: "1", explanation: "GDP can rise while well-being falls (lost leisure, pollution)." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "Which unemployment type is caused by industry decline?", options: ["Frictional", "Structural", "Seasonal", "Cyclical"], answer: "1", explanation: "Structural = industry decline." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "The multiplier effect fuels which phase of the business cycle?", options: ["Recession", "Depression", "Boom", "Trough"], answer: "2", explanation: "Multiplier effect fuels BOOM conditions." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Define economic growth in the short run and long run.", answer: "SHORT-RUN growth: when Real GDP (RGDP) increases over a given period (usually one year).\n\nLONG-RUN growth: when there is a SUSTAINED increase in per capita income AND associated STRUCTURAL CHANGES in the economy (e.g., shift from agriculture to manufacturing).", explanation: "Short: RGDP increases. Long: sustained per capita income + structural change." },
    { id: "q45", type: "short", difficulty: "easy", stem: "Distinguish between economic growth and economic development.", answer: "ECONOMIC GROWTH:\n• Rate of increase in GDP or GDP per capita.\n• Narrower concept.\n• Quantitative.\n\nECONOMIC DEVELOPMENT:\n• Broader concept — overall transformation in human life.\n• Progressive changes in social, political, institutional, economic structures.\n• Qualitative + quantitative.\n\nRELATIONSHIP:\n• Growth can occur WITHOUT development.\n• Development REQUIRES growth.\n• Growth is a NECESSARY but NOT SUFFICIENT condition.\n• Growth is a SUBSET of development.", explanation: "Growth narrow; development broad. Growth necessary but not sufficient." },
    { id: "q46", type: "short", difficulty: "medium", stem: "State the formula for economic growth rate and per capita RGDP.", answer: "GROWTH RATE:\ng = (RGDPₜ − RGDPₜ₋₁) / RGDPₜ₋₁ × 100%\nwhere RGDPₜ = real GDP this year; RGDPₜ₋₁ = real GDP last year.\n\nPER CAPITA RGDP:\nPer capita RGDP = RGDPₜ / Populationₜ\nAlso known as per capita income.", explanation: "g = (RGDPₜ − RGDPₜ₋₁)/RGDPₜ₋₁ × 100%; per capita = RGDP/population." },
    { id: "q47", type: "short", difficulty: "medium", stem: "List the four determinants of productivity.", answer: "1) PHYSICAL CAPITAL PER WORKER: tools and machinery available per worker.\n2) HUMAN CAPITAL PER WORKER: knowledge and skills from education, training, experience.\n3) NATURAL RESOURCES PER WORKER: land, rivers, minerals provided by nature.\n4) TECHNOLOGICAL KNOWLEDGE: understanding of best production methods.\n\nNote: Natural resources are IMPORTANT but NOT NECESSARY (e.g., Japan is rich with few resources).", explanation: "Physical capital, human capital, natural resources, technology." },
    { id: "q48", type: "short", difficulty: "medium", stem: "List five things GDP EXCLUDES.", answer: "GDP EXCLUDES:\n1) LEISURE — free time has value.\n2) UNPAID WORK / HOME PRODUCTION — home cooking, parental child care, volunteer work.\n3) ENVIRONMENTAL QUALITY — pollution, degradation.\n4) INCOME DISTRIBUTION — GDP per capita is an average, hides inequality.\n5) BLACK MARKET / UNDERGROUND ECONOMY — illegal or unreported transactions.\n\nGDP can rise while well-being falls.", explanation: "Leisure, unpaid work, environment, distribution, black market." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Explain the four phases of the business cycle.", answer: "1) BOOM (Prosperity/Peak): rising demand, prices, investment, employment, income, purchasing power. Multiplier effect fuels boom.\n\n2) RECESSION: economy overheats; cuts in investment → falling employment, income, demand; prices fall.\n\n3) DEPRESSION (Slump/Trough): business confidence at LOWEST; investment, employment, output, income, prices at BOTTOM.\n\n4) RECOVERY (Expansion): economy moves out of depression; investment, employment, output, income, prices move UP, possibly leading to boom again.", explanation: "Boom → Recession → Depression → Recovery." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Using the growth rate formula, calculate the growth rate if RGDP in 2022 was 90 billion Birr and RGDP in 2021 was 75 billion Birr.", answer: "Solution:\nRGDPₜ = 90 billion\nRGDPₜ₋₁ = 75 billion\n\ng = (RGDPₜ − RGDPₜ₋₁) / RGDPₜ₋₁ × 100%\n  = (90 − 75) / 75 × 100%\n  = 15/75 × 100%\n  = 0.20 × 100%\n  = 20%", explanation: "g = (90 − 75)/75 × 100% = 20%." },
  ],
};