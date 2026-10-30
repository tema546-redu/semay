import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 ECONOMICS — UNIT 7
// AN OVERVIEW OF THE ETHIOPIAN ECONOMY
// Source: Grade 10 Economics Student Textbook (pp. 129–154)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, formula boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10EconomicsCh7: Chapter = {
  id: "ch7",
  number: 7,
  title: "An Overview of the Ethiopian Economy",
  titleAm: "የኢትዮጵያ ኢኮኖሚ አጠቃላይ እይታ",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about Ethiopia's ECONOMY — its history, sectors, and GDP:\n" +
        "1) Historical evolution — Monarchy → Derg → EPRDF → market economy.\n" +
        "2) GDP components — Y = C + I + G + NX.\n" +
        "3) Real vs Nominal GDP and GDP Deflator.\n" +
        "4) Agricultural sector — the backbone.\n" +
        "5) Industrial sector.\n" +
        "6) Service sector.\n" +
        "7) ADLI strategy — Agriculture Development-Led Industrialization.\n\n" +
        "The WHOLE chapter reduces to FIVE formulas:\n" +
        "• Y = C + I + G + NX\n" +
        "• NX = X − M\n" +
        "• GDP Deflator = (Nominal GDP / Real GDP) × 100\n" +
        "• Real GDP = base-year prices × current quantities\n" +
        "• Inflation rate = (Deflator₂ − Deflator₁)/Deflator₁ × 100%\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ አምስቱ ቀመሮች፡\n" +
        "Y = C + I + G + NX\n" +
        "NX = X − M\n" +
        "GDP Deflator = (Nominal/Real) × 100\n" +
        "Real GDP = base year prices × current quantities",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the historical arc",
          titleAm: "ደረጃ 1 · የታሪክ ጎዳና",
          body:
            "MONARCHY (pre-1974):\n" +
            "• Feudal, agricultural economy.\n" +
            "• Land in hands of wealthy landlords.\n\n" +
            "DERG / MILITARY (1974–1991):\n" +
            "• Socialist / command economy.\n" +
            "• Nationalized banks, industries.\n" +
            "• Land reform.\n\n" +
            "EPRDF (1991+):\n" +
            "• Market-oriented economy.\n" +
            "• Privatization, deregulation.\n" +
            "• ADLI strategy.",
          bodyAm:
            "የንጉሠ ነገሥት ዘመን: ፊውዳል።\n" +
            "ደርግ: ሶሻሊስት።\n" +
            "ኢሕአዴግ: ገበያ ኢኮኖሚ።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the GDP identity",
          titleAm: "ደረጃ 2 · የGDP ማንነት",
          body:
            "Y = C + I + G + NX\n\n" +
            "• C = Consumption (household spending).\n" +
            "• I = Investment (capital equipment, inventories, structures including new housing).\n" +
            "• G = Government purchases (salaries, public works — NOT transfer payments).\n" +
            "• NX = X − M (exports minus imports).\n\n" +
            "Deflator = (Nominal GDP / Real GDP) × 100.\n" +
            "Base year: Deflator = 100 always.",
          bodyAm:
            "Y = C + I + G + NX።\n" +
            "Deflator = (Nominal/Real) × 100።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master the three sectors",
          titleAm: "ደረጃ 3 · ሦስቱን ዘርፎች ተቆጣጥር",
          body:
            "AGRICULTURE:\n" +
            "• Backbone of Ethiopian economy.\n" +
            "• ~33–45% of GDP (declining).\n" +
            "• Employs ~80–85% of population.\n" +
            "• Supplies ~70% of raw materials.\n\n" +
            "INDUSTRY:\n" +
            "• Small compared to others.\n" +
            "• Manufacturing 38%, Construction 25%, Electricity/water 18%.\n" +
            "• ~29% of GDP (rising).\n\n" +
            "SERVICE:\n" +
            "• ~40–46% of GDP.\n" +
            "• Largest or second largest sector.\n" +
            "• Trade, hotels, transport, banking, education, health.",
          bodyAm:
            "እርሻ: ~33-45% GDP፤ ~85% ሠራተኛ።\n" +
            "ኢንዱስትሪ: ~29%።\n" +
            "አገልግሎት: ~40-46%።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Did you use Nominal GDP for deflator numerator?\n" +
            "2) Did you use base-year prices for real GDP?\n" +
            "3) Did you exclude transfer payments from G?\n" +
            "4) Did you know new housing = Investment (I)?\n" +
            "5) Did you identify ADLI as Ethiopia's strategy?",
          bodyAm:
            "1) Nominal/Real ✓\n" +
            "2) Base-year prices ✓\n" +
            "3) Transfer payments አይካተቱም ✓\n" +
            "4) አዲስ ቤት = Investment ✓",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስረት",
          body:
            "• New HOUSING purchase = Investment (I), NOT consumption.\n" +
            "• Transfer payments (pensions, unemployment benefits) are NOT part of G.\n" +
            "• Net exports = X − M. Import reduces NX but does NOT change GDP (because it was added to C, I, or G).\n" +
            "• GDP Deflator = 100 in base year ALWAYS.\n" +
            "• Real GDP uses CONSTANT (base-year) prices.\n" +
            "• Nominal GDP uses CURRENT prices.\n" +
            "• ADLI = Agriculture Development-Led Industrialization — Ethiopia's strategy.\n" +
            "• Smallholder farming = >90% of agricultural production, ~95% of crop area.",
          bodyAm:
            "• አዲስ ቤት = I።\n" +
            "• Transfer payments = በG አይካተቱም።\n" +
            "• Deflator base year = 100።\n" +
            "• ADLI = የኢትዮጵያ ስትራቴጂ።",
        },
      ],
    },

    // ============================================================
    // 7.1 COMPONENTS OF GDP
    // ============================================================
    {
      id: "n1",
      title: "7.1 Components of Gross Domestic Product (GDP)",
      titleAm: "7.1 የGDP አካላት",
      body:
        "Abatu, GDP (Y) is divided into FOUR components: consumption (C), investment (I), government purchases (G), and net exports (NX).",
      bodyAm:
        "አባቱ፣ Y = C + I + G + NX።",
      children: [
        {
          id: "n1-1",
          title: "The GDP identity",
          titleAm: "የGDP ማንነት",
          body:
            "Y = C + I + G + NX\n\n" +
            "Where:\n" +
            "• Y = GDP\n" +
            "• C = Consumption\n" +
            "• I = Investment\n" +
            "• G = Government purchases\n" +
            "• NX = Net exports = Exports (X) − Imports (M)\n\n" +
            "This is an IDENTITY — an equation that MUST be true by definition (every birr of expenditure is placed into one of the four components).",
          bodyAm:
            "Y = C + I + G + NX።\n" +
            "NX = X − M።",
        },
        {
          id: "n1-2",
          title: "Consumption (C)",
          titleAm: "ፍጆታ (C)",
          body:
            "CONSUMPTION = spending by households on goods and services — EXCEPT purchases of new housing.\n\n" +
            "Includes:\n" +
            "• Durable goods (cars, appliances).\n" +
            "• Nondurable goods (food, clothing).\n" +
            "• Services (haircuts, medical care, education).\n\n" +
            "EXCLUDES: new housing purchases (those are INVESTMENT).",
          bodyAm:
            "የቤተሰብ ወጪ።\n" +
            "አዲስ ቤት ግን አይካተትም (I ነው)።",
        },
        {
          id: "n1-3",
          title: "Investment (I)",
          titleAm: "ኢንቨስትመንት (I)",
          body:
            "INVESTMENT = purchase of goods that will be used in the future to produce more goods and services.\n\n" +
            "Sum of:\n" +
            "• Capital equipment.\n" +
            "• Inventories.\n" +
            "• Structures (INCLUDING new housing).\n\n" +
            "IMPORTANT:\n" +
            "• New house purchase = INVESTMENT (by convention).\n" +
            "• Inventory accumulation counted as investment (firm 'purchased' its own goods).\n" +
            "• NOT financial investment (stocks, bonds).",
          bodyAm:
            "ካፒታል ዕቃ፣ ክምችት፣ መዋቅር (አዲስ ቤት ጨምሮ)።\n" +
            "ፋይናንሺያል ኢንቨስትመንት (አክሲዮን) አይደለም።",
        },
        {
          id: "n1-4",
          title: "Government purchases (G)",
          titleAm: "የመንግሥት ግዥ (G)",
          body:
            "GOVERNMENT PURCHASES = spending on goods and services by local, state, and federal governments.\n\n" +
            "Includes:\n" +
            "• Salaries of government workers (army general, schoolteacher).\n" +
            "• Expenditures on public works.\n\n" +
            "EXCLUDES:\n" +
            "• TRANSFER PAYMENTS (Social Security, unemployment benefits, pensions).\n" +
            "• Reason: transfer payments are NOT in exchange for a currently produced good or service.\n" +
            "• They alter household income but do NOT reflect production.",
          bodyAm:
            "የመንግሥት ደመወዝ + የሕዝብ ሥራዎች።\n" +
            "Transfer payments (ጡረታ፣ ስራ አጥነት ጥቅማ) አይካተቱም።",
        },
        {
          id: "n1-5",
          title: "Net exports (NX)",
          titleAm: "የተጣራ ወጪ (NX)",
          body:
            "NET EXPORTS = Exports (X) − Imports (M).\n\n" +
            "KEY INSIGHT:\n" +
            "• Import reduces NX, BUT it was already included in C, I, or G with a plus sign → so total GDP unchanged.\n" +
            "• Import of Birr 300,000 car from Toyota: C increases by 300K, NX decreases by 300K → net effect on GDP = 0.\n\n" +
            "The 'net' in net exports means imports are SUBTRACTED from exports.",
          bodyAm:
            "NX = X − M።\n" +
            "Import በC/I/G ውስጥ ስለሚካተት → በNX ውስጥ ሲቀነስ GDP አይለወጥም።",
        },
        {
          id: "n1-6",
          title: "⚠ Remember trap — GDP components",
          titleAm: "⚠ አትርሳ — የGDP አካላት",
          body:
            "• New HOUSING purchase = I (NOT C).\n" +
            "• Transfer payments (pensions, benefits) = NOT in G.\n" +
            "• Financial investments (stocks, bonds) = NOT counted in GDP's I.\n" +
            "• Import reduces NX but does NOT change total GDP.\n" +
            "• Government salaries = G. Government transfer payments = NOT G.\n" +
            "• Inventory accumulation counted as investment.",
          bodyAm:
            "• አዲስ ቤት = I።\n" +
            "• Transfer payments = G አይደለም።\n" +
            "• Financial investments = GDP አይደለም።",
        },
      ],
    },

    // ============================================================
    // 7.2 REAL GDP vs NOMINAL GDP
    // ============================================================
    {
      id: "n2",
      title: "7.2 Real GDP vs Nominal GDP",
      titleAm: "7.2 እውነተኛ vs ስም አቀፍ GDP",
      body:
        "Abatu, NOMINAL GDP uses CURRENT prices; REAL GDP uses BASE-YEAR (constant) prices. Real GDP is the better measure of production.",
      bodyAm:
        "አባቱ፣ ስም አቀፍ = የአሁን ዋጋ፤ እውነተኛ = base year ዋጋ።",
      children: [
        {
          id: "n2-1",
          title: "Nominal GDP vs Real GDP",
          titleAm: "ስም አቀፍ vs እውነተኛ",
          body:
            "NOMINAL GDP: production valued at CURRENT prices.\n" +
            "• Reflects BOTH price and quantity changes.\n\n" +
            "REAL GDP: production valued at BASE-YEAR prices.\n" +
            "• Reflects ONLY quantity changes.\n" +
            "• Better measure of economic growth.\n\n" +
            "In the BASE YEAR: Nominal GDP = Real GDP.",
          bodyAm:
            "Nominal: የአሁን ዋጋ።\n" +
            "Real: base year ዋጋ።\n" +
            "Base year: Nominal = Real።",
        },
        {
          id: "n2-2",
          title: "GDP Deflator",
          titleAm: "የGDP ማስተካከያ",
          body:
            "GDP DEFLATOR = (Nominal GDP / Real GDP) × 100\n\n" +
            "• Measures the price level relative to base year.\n" +
            "• In base year: Deflator = 100.\n" +
            "• Deflator > 100 → prices have risen (inflation).\n" +
            "• Deflator = 100 → prices constant.\n" +
            "• Deflator < 100 → prices have fallen (deflation).",
          bodyAm:
            "Deflator = (Nominal/Real) × 100።\n" +
            "Base year = 100።",
        },
        {
          id: "n2-3",
          title: "Inflation rate from deflator",
          titleAm: "የዋጋ ግሽበት መጠን",
          body:
            "INFLATION RATE (Year 2) = [(Deflator Year 2 − Deflator Year 1) / Deflator Year 1] × 100%\n\n" +
            "Example:\n" +
            "• Year 1 deflator = 100; Year 2 deflator = 171 → inflation = 71%\n" +
            "• Year 2 deflator = 171; Year 3 deflator = 240 → inflation = 40%",
          bodyAm:
            "Inflation = (D₂ − D₁)/D₁ × 100%።",
        },
        {
          id: "n2-4",
          title: "Worked Example — Nominal, Real, Deflator",
          titleAm: "ሠርተ ምሳሌ — Nominal, Real, Deflator",
          body:
            "Textbook Table 7.2 (base year = 2010):\n" +
            "2010: Q_kitfo=100, P_kitfo=150; Q_chumbo=50, P_chumbo=250\n" +
            "2011: Q_kitfo=150, P_kitfo=180; Q_chumbo=100, P_chumbo=350\n" +
            "2012: Q_kitfo=200, P_kitfo=200; Q_chumbo=150, P_chumbo=400\n\n" +
            "NOMINAL GDP:\n" +
            "2010: 150(100) + 250(50) = 15,000 + 12,500 = 27,500\n" +
            "2011: 180(150) + 350(100) = 27,000 + 35,000 = 62,000\n" +
            "2012: 200(200) + 400(150) = 40,000 + 60,000 = 100,000\n\n" +
            "REAL GDP (base 2010):\n" +
            "2010: 150(100) + 250(50) = 27,500\n" +
            "2011: 150(150) + 250(100) = 22,500 + 25,000 = 47,500\n" +
            "2012: 150(200) + 250(150) = 30,000 + 37,500 = 67,500\n\n" +
            "GDP DEFLATOR:\n" +
            "2010: 27,500/27,500 × 100 = 100\n" +
            "2011: 62,000/47,500 × 100 ≈ 131\n" +
            "2012: 100,000/67,500 × 100 ≈ 148",
          bodyAm:
            "2010: Nominal = Real = 27,500; Deflator = 100።\n" +
            "2011: N=62,000, R=47,500, D≈131።\n" +
            "2012: N=100,000, R=67,500, D≈148።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap — GDP measures",
          titleAm: "⚠ አትርሳ — GDP መለኪያዎች",
          body:
            "• Base year: Nominal = Real → Deflator = 100.\n" +
            "• REAL GDP uses BASE-YEAR prices (constant).\n" +
            "• NOMINAL GDP uses CURRENT prices.\n" +
            "• Deflator measures PRICE changes, not quantity.\n" +
            "• Real GDP better measures economic growth.\n" +
            "• If quantities rise but prices constant → deflator CONSTANT.\n" +
            "• If prices rise but quantities constant → deflator RISES.",
          bodyAm:
            "• Base year: D = 100።\n" +
            "• Real = base prices።\n" +
            "• Deflator = ዋጋ ብቻ።",
        },
      ],
    },

    // ============================================================
    // 7.3 AGRICULTURAL SECTOR
    // ============================================================
    {
      id: "n3",
      title: "7.3 The Agricultural Sector in the Ethiopian Economy",
      titleAm: "7.3 የኢትዮጵያ እርሻ ዘርፍ",
      body:
        "Abatu, AGRICULTURE is the BACKBONE of the Ethiopian economy — employs ~80–85% of the population and supplies ~70% of raw materials to industry.",
      bodyAm:
        "አባቱ፣ እርሻ = የኢትዮጵያ ኢኮኖሚ አከርካሪ።",
      children: [
        {
          id: "n3-1",
          title: "Main features",
          titleAm: "ዋና ባህሪያት",
          body:
            "AGRICULTURE:\n" +
            "• Contributes ~45% of GDP (older data; ~33% in 2019/20).\n" +
            "• Generates >80% of export earnings.\n" +
            "• Employs ~80–85% of population.\n" +
            "• Supplies ~70% of raw materials to secondary activities.\n" +
            "• Produces both crops and livestock.\n" +
            "• Crops include food crops, cash crops, fruits, vegetables.",
          bodyAm:
            "~45% GDP፤ >80% ወጪ ንግድ፤ ~85% ሠራተኛ፤ ~70% ጥሬ ዕቃ።",
        },
        {
          id: "n3-2",
          title: "Major problems",
          titleAm: "ዋና ችግሮች",
          body:
            "• Frequent drought.\n" +
            "• Soil degradation (overgrazing, overpopulation).\n" +
            "• Land fragmentation.\n" +
            "• Backward agricultural practices.\n" +
            "• Poor marketing facilities (poor roads).\n" +
            "• Rapidly increasing prices of inputs (fertilizers).",
          bodyAm:
            "• ድርቅ\n" +
            "• የአፈር መራቆት\n" +
            "• የመሬት መከፋፈል\n" +
            "• የኋላ ቀር ቴክኖሎጂ\n" +
            "• የገበያ ችግር",
        },
        {
          id: "n3-3",
          title: "Roles of agriculture",
          titleAm: "የእርሻ ሚናዎች",
          body:
            "1) SOURCE OF FOOD AND RAW MATERIALS:\n" +
            "• Supplies food grains, dairy, meat.\n" +
            "• Supplies raw materials to industries.\n\n" +
            "2) SOURCE OF CAPITAL:\n" +
            "• Transfer via tax.\n" +
            "• Price controls on agricultural products.\n" +
            "• Compulsory delivery at fixed prices.\n\n" +
            "3) CONTRIBUTES TO GDP:\n" +
            "• Share declined from 76% (1960s) to ~33–45%.\n\n" +
            "4) CONTRIBUTES TO EMPLOYMENT:\n" +
            "• >80% of population earns from agriculture.",
          bodyAm:
            "1) ምግብ/ጥሬ ዕቃ\n2) ካፒታል\n3) GDP\n4) ሥራ",
        },
        {
          id: "n3-4",
          title: "Farming systems",
          titleAm: "የእርሻ ስርዓቶች",
          body:
            "THREE farming systems:\n\n" +
            "1) SMALLHOLDER FARMING (dominant):\n" +
            "• >90% of agricultural production.\n" +
            "• ~95% of total crop area.\n" +
            "• ~10.58 million households.\n" +
            "• Average household size ~5 members.\n" +
            "• >86% cultivate < 2 hectares.\n\n" +
            "2) PASTORAL / NOMADIC:\n" +
            "• ~40% of Ethiopia's land area (arid/semi-arid).\n" +
            "• Rely on livestock.\n" +
            "• ~20% of cattle, 25% of sheep, 73% of goats.\n" +
            "• Supports ~5.5 million people.\n\n" +
            "3) COMMERCIAL FARMING:\n" +
            "• Introduced during 3rd five-year plan (1968–73).\n" +
            "• State farms: ~5% of cropland, <10% of production.\n" +
            "• Major crops: cotton, coffee, tea, sugarcane, fruits, vegetables.\n" +
            "• Now only 13 state farms (156,040 hectares).",
          bodyAm:
            "1) ትንሽ አርሶ አደር (ዋና)።\n" +
            "2) አርብቶ አደር።\n" +
            "3) የንግድ እርሻ።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap — Agriculture",
          titleAm: "⚠ አትርሳ — እርሻ",
          body:
            "• SMALLHOLDER farming is DOMINANT (>90% of production).\n" +
            "• Agriculture employs ~80–85% of population.\n" +
            "• Agriculture supplies ~70% of raw materials to industry.\n" +
            "• Pastoral lands = ~40% of Ethiopia.\n" +
            "• Smallholder average household size = ~5 members.\n" +
            "• ~86% of smallholders cultivate < 2 hectares.",
          bodyAm:
            "• ትንሽ አርሶ አደር ዋና ነው።\n" +
            "• ~85% ሠራተኛ።\n" +
            "• ~70% ጥሬ ዕቃ።",
        },
      ],
    },

    // ============================================================
    // 7.4 INDUSTRIAL SECTOR
    // ============================================================
    {
      id: "n4",
      title: "7.4 The Industrial Sector in the Ethiopian Economy",
      titleAm: "7.4 የኢትዮጵያ ኢንዱስትሪ ዘርፍ",
      body:
        "Abatu, the INDUSTRIAL sector is SMALL compared to agriculture and services — but growing. Dominated by manufacturing (38%), construction (25%), electricity/water (18%).",
      bodyAm:
        "አባቱ፣ ኢንዱስትሪ ትንሽ ግን እያደገ ነው።",
      children: [
        {
          id: "n4-1",
          title: "Main features",
          titleAm: "ዋና ባህሪያት",
          body:
            "INDUSTRIAL SECTOR:\n" +
            "• Contributes ~13% of GDP (older data; ~29% in 2019/20).\n" +
            "• ~9.5% of employment.\n" +
            "• ~130 state-owned and ~7,000 private manufacturing industries.\n\n" +
            "Sub-sectors:\n" +
            "• Manufacturing: 38%\n" +
            "• Construction: 25%\n" +
            "• Electricity & water: 18%\n" +
            "• Mining, quarrying, others: 19%",
          bodyAm:
            "~13% GDP (አሁን ~29%)።\n" +
            "Manufacturing 38%፤ Construction 25%፤ Electricity 18%።",
        },
        {
          id: "n4-2",
          title: "Major problems",
          titleAm: "ዋና ችግሮች",
          body:
            "• Low industrial base.\n" +
            "• Low productivity.\n" +
            "• Underutilization of capacity.\n" +
            "• Shortages of foreign exchange, new investment, raw materials, spare parts.\n" +
            "• Very low technology / high dependence on imported technology.\n" +
            "• Low-level skills and management.",
          bodyAm:
            "• ዝቅተኛ መሠረት\n" +
            "• ዝቅተኛ ምርታማነት\n" +
            "• የቴክኖሎጂ ጥገኝነት",
        },
        {
          id: "n4-3",
          title: "Roles — output, employment, foreign exchange",
          titleAm: "ሚናዎች",
          body:
            "OUTPUT:\n" +
            "• Manufacturing dominated by food & beverages (48% of gross output).\n" +
            "• Non-metal (17%), chemicals (9%).\n\n" +
            "EMPLOYMENT:\n" +
            "• 1,677,906 persons engaged (2007/08); 678,911 employees.\n" +
            "• Food & beverage = 50% of manufacturing employment.\n" +
            "• Non-metal = 14%; Paper/printing = 10.9%.\n\n" +
            "FOREIGN EXCHANGE:\n" +
            "• Industry contributes LITTLE (<10% — agriculture >90%).\n" +
            "• Textiles = 41.5% of sector's forex.\n" +
            "• Food & beverage = 32.9%.\n" +
            "• Leather & footwear = 10.8%.",
          bodyAm:
            "Output: ምግብ/መጠጥ 48%።\n" +
            "Employment: ምግብ 50%።\n" +
            "Forex: ጨርቃጨርቅ 41.5%።",
        },
        {
          id: "n4-4",
          title: "AGOA and preferential access",
          titleAm: "AGOA እና ልዩ መዳረሻ",
          body:
            "AGOA (Africa Growth and Opportunity Act):\n" +
            "• Allows some developing countries (including Ethiopia) to access US textile market without tariffs and quotas.\n" +
            "• Notable opportunity for Ethiopian manufacturing.\n\n" +
            "Also: European countries opening markets to African manufactured products (e.g., Ethiopian sugar in Europe).",
          bodyAm:
            "AGOA = ወደ US ገበያ ያለ ታሪፍ/ኮታ።\n" +
            "ለኢትዮጵያ ጨርቃጨርቅ ዕድል።",
        },
        {
          id: "n4-5",
          title: "⚠ Remember trap — Industry",
          titleAm: "⚠ አትርሳ — ኢንዱስትሪ",
          body:
            "• Manufacturing = 38% of industrial sector (largest sub-sector).\n" +
            "• Construction = 25%.\n" +
            "• Electricity & water = 18%.\n" +
            "• Food & beverage = biggest manufacturing sub-sector (48% output, 50% employment).\n" +
            "• Textiles = biggest forex contributor (41.5%) within manufacturing.\n" +
            "• Industry contributes <10% of forex (agriculture >90%).\n" +
            "• AGOA = US market access without tariffs/quotas.",
          bodyAm:
            "• Manufacturing = 38%።\n" +
            "• ምግብ/መጠጥ = 48% output።\n" +
            "• AGOA = US ገበያ።",
        },
      ],
    },

    // ============================================================
    // 7.5 SERVICE SECTOR
    // ============================================================
    {
      id: "n5",
      title: "7.5 The Service Sector in the Ethiopian Economy",
      titleAm: "7.5 የኢትዮጵያ አገልግሎት ዘርፍ",
      body:
        "Abatu, the SERVICE sector includes trade, hotels, transport, banking, education, health, and public administration.",
      bodyAm:
        "አባቱ፣ አገልግሎት = ንግድ፣ ሆቴል፣ ትራንስፖርት፣ ባንክ፣ ትምህርት፣ ጤና።",
      children: [
        {
          id: "n5-1",
          title: "Components",
          titleAm: "አካላት",
          body:
            "SERVICE SECTOR includes:\n" +
            "• Wholesale and retail trade.\n" +
            "• Hotels and restaurants.\n" +
            "• Transport and communication.\n" +
            "• Banking and insurance.\n" +
            "• Public administration and defense.\n" +
            "• Education.\n" +
            "• Health.\n" +
            "• Domestic and other services.\n\n" +
            "Distributive services = first 5; 'Other' = the rest.",
          bodyAm:
            "ንግድ፣ ሆቴል፣ ትራንስፖርት፣ ባንክ፣ አስተዳደር፣ ትምህርት፣ ጤና።",
        },
        {
          id: "n5-2",
          title: "Main features",
          titleAm: "ዋና ባህሪያት",
          body:
            "• Share in GDP: ~45.1% (2008/09); ~46% (2009/10); ~40% (2019/20).\n" +
            "• About 10% of population engaged.\n" +
            "• Large share from GOVERNMENT employment.\n" +
            "• Significant growth in health, trade, tourism, banking since early 1990s reforms.",
          bodyAm:
            "~45-46% GDP።\n" +
            "~10% ሠራተኛ።",
        },
        {
          id: "n5-3",
          title: "Roles — output, employment, forex",
          titleAm: "ሚናዎች",
          body:
            "OUTPUT:\n" +
            "• ~45–46% of GDP — dominated agriculture in 2008/09 and 2009/10.\n\n" +
            "EMPLOYMENT:\n" +
            "• Second largest sector after agriculture.\n" +
            "• ~1.4% of labor force in health and education.\n" +
            "• ~0.5% in communication and transport.\n" +
            "• Employment growth from: government efforts, infrastructure push, expanding services, horticulture.\n\n" +
            "FOREIGN EXCHANGE:\n" +
            "• 2008/09: ~$2 billion (Ethiopian Airlines, Shipping Lines, tourism, communication, insurance, financial).\n" +
            "• Compared to $1.5 billion from goods exports.",
          bodyAm:
            "~45% GDP።\n" +
            "ሁለተኛ ትልቅ ሠራተኛ ቀጣሪ።\n" +
            "$2B forex (2008/09)።",
        },
        {
          id: "n5-4",
          title: "Three types of service activities",
          titleAm: "ሦስቱ የአገልግሎት ዓይነቶች",
          body:
            "PHYSICAL ACTIVITIES: work with objects (car repair, hairdressing, cooking).\n\n" +
            "INTELLECTUAL ACTIVITIES: education or training (university, vocational).\n\n" +
            "AESTHETIC ACTIVITIES: artistic experiences (museums, theater, art shows, music).",
          bodyAm:
            "አካላዊ: መኪና ጥገና።\n" +
            "አእምሮአዊ: ትምህርት።\n" +
            "ውበታዊ: ሙዚየም፣ ቲያትር።",
        },
        {
          id: "n5-5",
          title: "⚠ Remember trap — Services",
          titleAm: "⚠ አትርሳ — አገልግሎቶች",
          body:
            "• Service = ~40–46% of GDP.\n" +
            "• Second largest employer (after agriculture).\n" +
            "• In 2008/09 and 2009/10, service DOMINATED agriculture in GDP share.\n" +
            "• ~10% of population engaged in service.\n" +
            "• Ethiopian Airlines and Shipping Lines are major forex earners.\n" +
            "• Service exports ~$2B > goods exports ~$1.5B (2008/09).",
          bodyAm:
            "• Service = 2ኛ ትልቅ።\n" +
            "• 2008/09: service > agriculture።",
        },
      ],
    },

    // ============================================================
    // 7.6 AGRICULTURE vs INDUSTRIAL DEVELOPMENT
    // ============================================================
    {
      id: "n6",
      title: "7.6 Agriculture vs Industrial Development",
      titleAm: "7.6 እርሻ vs ኢንዱስትሪ ልማት",
      body:
        "Abatu, Ethiopia adopted ADLI (Agricultural Development-Led Industrialization) — agriculture leads, industry follows.",
      bodyAm:
        "አባቱ፣ ADLI = እርሻ ይመራል፤ ኢንዱስትሪ ይከተላል።",
      children: [
        {
          id: "n6-1",
          title: "Two views",
          titleAm: "ሁለቱ አመለካከቶች",
          body:
            "WESTERN VIEW (industrial priority):\n" +
            "• Industrial sector has largest potential for technology adoption.\n" +
            "• Creates forward and backward linkages.\n" +
            "• Agriculture = passive/supportive role.\n\n" +
            "DEVELOPMENT ECONOMISTS (since 1970s):\n" +
            "• Agriculture = LEADING and DYNAMIC sector.\n" +
            "• Without agricultural development, industrial growth is weak.\n" +
            "• Ethiopia adopted this view → ADLI.",
          bodyAm:
            "ምዕራባውያን: ኢንዱስትሪ ይመራ።\n" +
            "የልማት ኢኮኖሚስቶች: እርሻ ይመራ።",
        },
        {
          id: "n6-2",
          title: "ADLI strategy",
          titleAm: "ADLI ስትራቴጂ",
          body:
            "ADLI = Agricultural Development-Led Industrialization.\n\n" +
            "• Agriculture is the LEADING sector.\n" +
            "• Industry develops by building on agriculture's raw materials and demand.\n" +
            "• Backward + forward linkages:\n" +
            "   – Backward: agriculture supplies food/raw materials to industry.\n" +
            "   – Forward: industry supplies modern inputs to agriculture.\n" +
            "• Ethiopia adopted ADLI after 1991.",
          bodyAm:
            "ADLI = እርሻ የሚመራ ኢንዱስትሪ ልማት።\n" +
            "እርሻ ይመራል፤ ኢንዱስትሪ ይከተላል።",
        },
        {
          id: "n6-3",
          title: "⚠ Remember trap — ADLI",
          titleAm: "⚠ አትርሳ — ADLI",
          body:
            "• ADLI = AGRICULTURAL Development-Led Industrialization.\n" +
            "• Ethiopia adopted ADLI (NOT IDLA — that's a distractor).\n" +
            "• Agriculture is the LEADING sector.\n" +
            "• Backward linkage: agriculture supplies industry.\n" +
            "• Forward linkage: industry supplies agriculture.\n" +
            "• Western industrial-first model NOT adopted by Ethiopia.",
          bodyAm:
            "• ADLI = እርሻ ይመራል።\n" +
            "• ኢትዮጵያ ADLI ተቀብላለች።\n" +
            "• Backward: እርሻ → ኢንዱስትሪ።",
        },
      ],
    },

    // ============================================================
    // FORMULA SHEET
    // ============================================================
    {
      id: "nFormula",
      title: "Formula Sheet — Unit 7",
      titleAm: "የቀመር ሉህ — ክፍል 7",
      body:
        "| Quantity                  | Formula                                          |\n" +
        "|---------------------------|--------------------------------------------------|\n" +
        "| GDP identity              | Y = C + I + G + NX                               |\n" +
        "| Net exports               | NX = X − M                                       |\n" +
        "| GDP Deflator              | (Nominal GDP / Real GDP) × 100                   |\n" +
        "| Inflation rate            | (D₂ − D₁)/D₁ × 100%                              |\n" +
        "| Real GDP                  | base-year prices × current quantities            |\n" +
        "| Nominal GDP               | current prices × current quantities              |\n" +
        "| Base year                 | Nominal = Real → Deflator = 100                  |",
      bodyAm:
        "| መጠን             | ቀመር                                    |\n" +
        "|------------------|----------------------------------------|\n" +
        "| Y                | C + I + G + NX                         |\n" +
        "| NX               | X − M                                  |\n" +
        "| Deflator         | (Nominal/Real) × 100                   |\n" +
        "| Inflation        | (D₂ − D₁)/D₁ × 100%                    |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 7",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 7",
      body:
        "1) New housing = Investment (I), NOT consumption.\n" +
        "2) Transfer payments NOT in G (pensions, unemployment benefits).\n" +
        "3) Imports reduce NX but total GDP unchanged.\n" +
        "4) Base year: Nominal = Real → Deflator = 100.\n" +
        "5) Real GDP uses BASE-YEAR prices.\n" +
        "6) Deflator measures PRICE change, not quantity.\n" +
        "7) Agriculture employs ~85%; industry ~9.5%; service ~10% of population.\n" +
        "8) Smallholder farming = >90% of agricultural production.\n" +
        "9) ADLI = Agricultural Development-Led Industrialization (NOT IDLA).\n" +
        "10) NBE 2019/20: agriculture ~33%, industry ~29%, service ~40% of GDP.",
      bodyAm:
        "1) አዲስ ቤት = I።\n" +
        "2) Transfer payments = አይካተቱም።\n" +
        "3) Base year: D = 100።\n" +
        "4) ADLI = እርሻ ይመራል።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "The GDP identity is:", options: ["Y = C + I + G + NX", "Y = C − I + G + NX", "Y = C + I − G + NX", "Y = C + I + G − NX"], answer: "0", explanation: "Y = C + I + G + NX." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Net exports (NX) equals:", options: ["X + M", "X − M", "M − X", "X × M"], answer: "1", explanation: "NX = Exports − Imports." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Purchase of a newly built house is counted as:", options: ["Consumption", "Investment", "Government spending", "Net exports"], answer: "1", explanation: "New housing = Investment (I)." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Transfer payments are:", options: ["Included in government purchases", "Excluded from government purchases", "Included in net exports", "Included in consumption"], answer: "1", explanation: "Transfer payments (pensions, benefits) are NOT in G." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Nominal GDP uses:", options: ["Base-year prices", "Current prices", "Constant prices", "Real prices"], answer: "1", explanation: "Nominal GDP = current prices." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Real GDP uses:", options: ["Current prices", "Base-year prices", "Current exchange rates", "Future prices"], answer: "1", explanation: "Real GDP uses CONSTANT (base-year) prices." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "The GDP Deflator in the base year is always:", options: ["0", "1", "100", "1000"], answer: "2", explanation: "Base year: Nominal = Real → Deflator = 100." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "In the base year, nominal GDP equals:", options: ["Zero", "Real GDP", "Half of real GDP", "Twice real GDP"], answer: "1", explanation: "Base year: Nominal = Real." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Agriculture's main role in Ethiopia is:", options: ["Only source of food", "Backbone of the economy", "Only export source", "Only employment source"], answer: "1", explanation: "Agriculture = BACKBONE of Ethiopian economy." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "What percentage of Ethiopian population earns livelihood from agriculture?", options: ["10%", "40%", "80–85%", "100%"], answer: "2", explanation: "~80–85% of population works in agriculture." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The dominant farming system in Ethiopia is:", options: ["Pastoral", "Commercial", "Smallholder", "State farms"], answer: "2", explanation: "Smallholder farming is DOMINANT (>90% of production)." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "ADLI stands for:", options: ["Agricultural Development-Led Industrialization", "Industrial Development-Led Agriculture", "Agricultural Deregulation-Led Investment", "Africa Development-Led Investment"], answer: "0", explanation: "ADLI = Agricultural Development-Led Industrialization." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Which sector dominates Ethiopian exports?", options: ["Manufacturing", "Agriculture", "Service", "Mining"], answer: "1", explanation: "Agriculture >90% of Ethiopia's exports." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Which sector employed the largest portion of Ethiopians?", options: ["Industry", "Service", "Agriculture", "Government"], answer: "2", explanation: "Agriculture employs ~80–85%." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Before 1974, Ethiopia had a:", options: ["Command economy", "Market-oriented economy", "Feudal agricultural economy", "Mixed economy"], answer: "2", explanation: "Pre-1974: feudal agricultural economy." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "During 1974–1991, Ethiopia had a:", options: ["Feudal economy", "Socialist/command economy", "Market economy", "Mixed economy"], answer: "1", explanation: "Derg regime: socialist/command economy." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "After 1991, Ethiopia moved to:", options: ["Feudal economy", "Socialist economy", "Market-oriented economy", "Pure communist economy"], answer: "2", explanation: "1991: EPRDF → market-oriented economy." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Which sub-sector dominates Ethiopian manufacturing?", options: ["Textiles", "Food and beverages", "Chemicals", "Wood"], answer: "1", explanation: "Food & beverage = 48% of output, 50% of employment." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "If C = 100, I = 50, G = 80, NX = −20, GDP (Y) equals:", options: ["150", "170", "210", "230"], answer: "2", explanation: "Y = 100 + 50 + 80 + (−20) = 210." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "If exports = 200 and imports = 250, NX equals:", options: ["50", "−50", "450", "200"], answer: "1", explanation: "NX = 200 − 250 = −50." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "If Nominal GDP = 200 and Real GDP = 100, the GDP Deflator equals:", options: ["50", "100", "150", "200"], answer: "3", explanation: "Deflator = (200/100) × 100 = 200." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "If Nominal GDP = 62,000 and Real GDP = 47,500, deflator equals:", options: ["100", "131", "148", "175"], answer: "1", explanation: "Deflator = (62,000/47,500) × 100 ≈ 131." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "If Year 1 deflator = 100 and Year 2 = 150, inflation rate is:", options: ["15%", "50%", "100%", "150%"], answer: "1", explanation: "(150−100)/100 × 100% = 50%." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "Which reduces NX but does NOT reduce GDP?", options: ["Export rise", "Import rise", "Government spending rise", "Investment fall"], answer: "1", explanation: "Imports reduce NX but were already in C, I, or G → GDP unchanged." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "Transfer payments are excluded from GDP because they:", options: ["Are illegal", "Are not in exchange for current production", "Involve foreign countries", "Are never paid"], answer: "1", explanation: "Transfer payments are not for currently produced goods." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "Agriculture supplies approximately what % of raw materials to industry?", options: ["10%", "30%", "70%", "100%"], answer: "2", explanation: "~70% of raw materials come from agriculture." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "Smallholder farming accounts for what % of Ethiopia's crop area?", options: ["40%", "70%", "85%", "95%"], answer: "3", explanation: "~95% of crop area is smallholder." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "What % of Ethiopia is classified as pastoral/arid land?", options: ["10%", "25%", "40%", "60%"], answer: "2", explanation: "~40% of land is arid/semi-arid." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "Which is the largest sub-sector of Ethiopian manufacturing?", options: ["Textiles", "Food & beverages", "Chemicals", "Leather"], answer: "1", explanation: "Food & beverage = 48% of manufacturing output." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "Textiles generate what % of manufacturing forex earnings?", options: ["10%", "25%", "41.5%", "50%"], answer: "2", explanation: "Textiles = 41.5% of sector's forex." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Which sector is the second-largest employer after agriculture?", options: ["Industry", "Service", "Government", "Mining"], answer: "1", explanation: "Service is second after agriculture." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "In 2008/09 and 2009/10, which sector contributed ~45-46% of GDP?", options: ["Agriculture", "Industry", "Service", "Mining"], answer: "2", explanation: "Service = ~45–46% of GDP during that period." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "NBE 2019/20 data: what is agriculture's share of GDP?", options: ["20%", "33%", "45%", "55%"], answer: "1", explanation: "Agriculture's share fell from 40% to ~33% (2019/20)." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "ADLI assumes:", options: ["Industry leads agriculture", "Agriculture is leading and dynamic sector", "Service dominates", "Mining dominates"], answer: "1", explanation: "ADLI: agriculture is LEADING and dynamic." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "AGOA gives Ethiopia access to:", options: ["Chinese market", "US textile market without tariffs/quotas", "European agricultural market", "African markets"], answer: "1", explanation: "AGOA = US market access without tariffs/quotas." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Textbook Table 7.2: 2010 Q_kitfo=100, P=150; Q_chumbo=50, P=250. Nominal GDP 2010 is:", options: ["22,500", "25,000", "27,500", "30,000"], answer: "2", explanation: "150(100) + 250(50) = 15,000 + 12,500 = 27,500." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Using base year 2010, real GDP for 2011 in Table 7.2 is:", options: ["47,500", "62,000", "100,000", "27,500"], answer: "0", explanation: "Real GDP 2011 = 150(150) + 250(100) = 22,500 + 25,000 = 47,500." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "Deflator for 2012 with Nominal = 100,000, Real = 67,500 is:", options: ["100", "131", "148", "200"], answer: "2", explanation: "(100,000/67,500) × 100 ≈ 148." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "If deflator rises from 171 to 240, inflation is:", options: ["31%", "40%", "69%", "70%"], answer: "1", explanation: "(240−171)/171 × 100% ≈ 40%." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "Which does NOT count as investment (I) in GDP?", options: ["Purchase of new house", "Purchase of machinery", "Purchase of government bonds", "Inventory accumulation"], answer: "2", explanation: "Financial investments (bonds, stocks) NOT counted in GDP's I." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Which statement is FALSE?", options: ["Government salary is in G", "Government transfer payment is NOT in G", "Government pension is in G", "Military spending is in G"], answer: "2", explanation: "Pensions are transfer payments — NOT in G." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "Smallholder farming accounts for what % of agricultural production?", options: ["~40%", "~60%", "~90%", "100%"], answer: "2", explanation: ">90% of agricultural production comes from smallholders." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "Backward linkage in ADLI means:", options: ["Industry supplies inputs to agriculture", "Agriculture supplies food/raw materials to industry", "Service supplies goods", "Government supplies capital"], answer: "1", explanation: "Backward linkage = agriculture supplies to industry." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "State the GDP identity and define each component.", answer: "GDP identity: Y = C + I + G + NX\n\n• C = Consumption: household spending on goods and services (excluding new housing).\n• I = Investment: purchase of capital equipment, inventories, structures (INCLUDING new housing).\n• G = Government purchases: government spending on goods and services (salaries, public works). EXCLUDES transfer payments.\n• NX = Net exports = Exports (X) − Imports (M).", explanation: "Y = C + I + G + NX." },
    { id: "q45", type: "short", difficulty: "easy", stem: "Differentiate between nominal GDP and real GDP.", answer: "NOMINAL GDP: production valued at CURRENT prices; reflects both price and quantity changes.\n\nREAL GDP: production valued at BASE-YEAR (constant) prices; reflects only quantity changes; better measure of production growth.\n\nIn the BASE YEAR: Nominal GDP = Real GDP.", explanation: "Nominal = current; Real = base-year prices." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Explain what the GDP deflator measures and how it is computed.", answer: "The GDP DEFLATOR measures the current level of prices relative to base-year prices — it reflects only PRICE changes, not quantity.\n\nFormula:\nGDP Deflator = (Nominal GDP / Real GDP) × 100\n\n• Base year: Deflator = 100.\n• Deflator > 100 → prices risen (inflation).\n• Deflator < 100 → prices fallen (deflation).", explanation: "Deflator = (Nominal/Real) × 100; measures prices only." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Explain the roles of agriculture in the Ethiopian economy.", answer: "1) Source of FOOD AND RAW MATERIALS — supplies food grains, dairy, meat and ~70% of industrial raw materials.\n2) Source of CAPITAL — via tax, price controls, compulsory delivery at fixed prices.\n3) Contributes to GDP — ~33–45% of GDP (declining from 76% in 1960s).\n4) Contributes to EMPLOYMENT — ~80–85% of population earns livelihood from agriculture.\n\nAgriculture is the BACKBONE of the Ethiopian economy.", explanation: "Food/raw materials, capital, GDP, employment." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Describe the three farming systems in Ethiopia.", answer: "1) SMALLHOLDER FARMING: dominant system — >90% of agricultural production, ~95% of crop area, ~10.58 million households, average 5 members, >86% cultivate <2 hectares.\n\n2) PASTORAL/NOMADIC: ~40% of Ethiopia's land (arid/semi-arid), relies on livestock — 20% cattle, 25% sheep, 73% goats; supports ~5.5 million people.\n\n3) COMMERCIAL FARMING: introduced 1968–73 (3rd five-year plan); state farms — 5% of cropland but <10% of production; currently 13 state farms (156,040 hectares); major crops: cotton, coffee, tea, sugarcane, fruits, vegetables.", explanation: "Smallholder, pastoral, commercial." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Explain the roles of the industrial sector in the Ethiopian economy.", answer: "OUTPUT CONTRIBUTION: Food & beverage = 48% of manufacturing output; non-metal = 17%; chemicals = 9%.\n\nEMPLOYMENT CONTRIBUTION: 1.68 million persons engaged (2007/08); food & beverage = 50% of manufacturing employment; non-metal = 14%; paper/printing = 10.9%.\n\nFOREIGN EXCHANGE: Industry contributes <10% (agriculture >90%). Textiles = 41.5% of manufacturing forex; food & beverage = 32.9%; leather/footwear = 10.8%.\n\nAGOA gives Ethiopian manufacturing access to US market without tariffs/quotas.", explanation: "Output, employment, forex; AGOA opportunity." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Compare agriculture-led vs industry-led development and explain Ethiopia's ADLI strategy.", answer: "INDUSTRY-LED (Western view):\n• Industrial sector has largest potential for technology adoption and forward/backward linkages.\n• Agriculture has passive/supportive role.\n\nAGRICULTURE-LED (development economists since 1970s):\n• Agriculture = LEADING and DYNAMIC sector.\n• Without agricultural development, industrial growth is weak.\n\nETHIOPIA'S ADLI (Agricultural Development-Led Industrialization):\n• Agriculture leads; industry follows.\n• BACKWARD LINKAGE: agriculture supplies food/raw materials to industry.\n• FORWARD LINKAGE: industry supplies modern inputs to agriculture.\n• Adopted since 1991.\n\nADLI recognizes agriculture's central role in Ethiopia's economy and links it directly to industrialization.", explanation: "Industry-first vs agriculture-first; ADLI = agriculture leads, industry follows." },
  ],
};