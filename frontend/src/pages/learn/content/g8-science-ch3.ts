import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 GENERAL SCIENCE — UNIT 3
// CLASSIFICATION OF COMPOUNDS
// Source: AAEB Grade 8 General Science Student Textbook (pp. 38–73)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8ScienceCh3: Chapter = {
  id: "ch3",
  number: 3,
  title: "Classification of Compounds",
  titleAm: "የውህዶች ምደባ",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. Organic vs Inorganic Compounds",
      titleAm: "ኦርጋኒክ እና ኢንኦርጋኒክ ውህዶች",
      body:
        "Banchi, chemists divide all compounds into TWO big families. This is the most basic classification in chemistry.",
      bodyAm:
        "ባንቺ፣ ኬሚስቶች ሁሉንም ውህዶች በሁለት ትላልቅ ቤተሰቦች ይከፍላሉ። ይህ በኬሚስትሪ ውስጥ በጣም መሠረታዊው ምደባ ነው።",
      children: [
        {
          id: "n1-1",
          title: "Old definitions (before 1828)",
          titleAm: "ጥንታዊ ትርጓሜዎች (ከ1828 በፊት)",
          body:
            "• ORGANIC compounds = obtained from LIVING organisms (plants, animals).\n" +
            "• INORGANIC compounds = obtained from MINERAL constituents of the earth (non-living).\n" +
            "• Chemists believed a special 'VITAL FORCE' from living organisms was needed to make organic compounds.",
          bodyAm:
            "• ኦርጋኒክ ውህዶች = ከሕያዋን ፍጥረታት የተገኙ።\n• ኢንኦርጋኒክ ውህዶች = ከምድር ማዕድናዊ አካላት የተገኙ።\n• ልዩ 'የሕይወት ኃይል' (ቪታል ፎርስ) ያስፈልጋል ብለው አመኑ።",
        },
        {
          id: "n1-2",
          title: "Wöhler's breakthrough (1828)",
          titleAm: "የወህለር ግኝት (1828)",
          body:
            "German chemist FRIEDRICH WÖHLER heated an aqueous solution of TWO INORGANIC compounds — ammonium chloride (NH₄Cl) and silver cyanate (AgCNO) — and produced UREA [(NH₂)₂CO], which is an ORGANIC compound found in urine.\n\n" +
            "This PROVED the vital-force theory WRONG. Organic compounds can be made from inorganic ones.",
          bodyAm:
            "ጀርመናዊው ኬሚስት ፍሪድሪክ ወህለር ሁለት ኢንኦርጋኒክ ውህዶችን ሲያሞቅ ዩሪያ የተባለ ኦርጋኒክ ውህድ አመረተ። ይህ የቪታል-ፎርስ ንድፈ ሐሳብን አሳሳተ።",
        },
        {
          id: "n1-3",
          title: "Modern definitions (memorize these!)",
          titleAm: "ዘመናዊ ትርጓሜዎች",
          body:
            "• ORGANIC compounds contain CARBON and HYDROGEN (plus other elements like O, N, S, P, halogens).\n" +
            "EXCEPT: oxides of carbon (CO, CO₂), carbonates (CO₃²⁻), hydrogen carbonates (HCO₃⁻), cyanides (CN⁻), and cyanates (CNO⁻) are INORGANIC despite containing carbon.\n\n" +
            "• INORGANIC compounds are compounds of elements OTHER than carbon (or the exceptions above).",
          bodyAm:
            "• ኦርጋኒክ ውህዶች ካርቦንና ሃይድሮጅን ይይዛሉ።\nብቻ ሳይሆን ኦክሲጅን፣ ናይትሮጅን፣ ሰልፈር፣ ፎስፎረስ ሊኖሩባቸው ይችላሉ።\n• ኢንኦርጋኒክ ውህዶች ከካርቦን ውጭ ያሉ ንጥረ ነገሮች ውህዶች ናቸው።",
        },
        {
          id: "n1-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, HUGE trap: CO₂, CO, carbonates, and hydrogen carbonates CONTAIN CARBON but are INORGANIC. This is the #1 trap in Unit 3. Example: CaCO₃ (calcium carbonate) is INORGANIC even though it has carbon.",
          bodyAm:
            "ባንቺ፣ ትልቅ ወጥመድ፡ CO₂፣ CO፣ ካርቦኔቶች እና ሃይድሮጅን ካርቦኔት ካርቦን ይይዛሉ ግን ኢንኦርጋኒክ ናቸው። ምሳሌ፡ CaCO₃ ኢንኦርጋኒክ ነው።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Hydrocarbons — The Simplest Organic Compounds",
      titleAm: "ሃይድሮካርቦኖች — በጣም ቀላል ኦርጋኒክ ውህዶች",
      body:
        "Banchi, a HYDROCARBON is a compound that contains ONLY carbon and hydrogen. This is the most tested topic in Unit 3. There are THREE families: alkanes, alkenes, and alkynes.",
      bodyAm:
        "ባንቺ፣ ሃይድሮካርቦን ካርቦንና ሃይድሮጅን ብቻ የያዘ ውህድ ነው። ሦስት ቤተሰቦች አሉ፡ አልካኖች፣ አልኬኖች፣ አልካይኖች።",
      children: [
        {
          id: "n2-1",
          title: "Alkanes — general formula CnH2n+2",
          titleAm: "አልካኖች — CnH2n+2",
          body:
            "Single bonds only. Called SATURATED hydrocarbons.\n" +
            "Formula: CnH2n+2 where n = 1, 2, 3, …\n\n" +
            "First 10 alkanes:\n" +
            "1) CH₄ — methane\n" +
            "2) C₂H₆ — ethane\n" +
            "3) C₃H₈ — propane\n" +
            "4) C₄H₁₀ — butane\n" +
            "5) C₅H₁₂ — pentane\n" +
            "6) C₆H₁₄ — hexane\n" +
            "7) C₇H₁₆ — heptane\n" +
            "8) C₈H₁₈ — octane\n" +
            "9) C₉H₂₀ — nonane\n" +
            "10) C₁₀H₂₂ — decane",
          bodyAm:
            "ነጠላ ትስስር ብቻ። የተሞሉ ሃይድሮካርቦኖች ይባላሉ።\nቀመር፡ CnH2n+2\nየመጀመሪያዎቹ 10 አልካኖች፡ ሜቴን፣ ኤቴን፣ ፕሮፔን፣ ቡቴን፣ ፔንቴን፣ ሄክሴን፣ ሄፕቴን፣ ኦክቴን፣ ኖኔን፣ ዴኬን።",
        },
        {
          id: "n2-2",
          title: "Alkenes — general formula CnH2n",
          titleAm: "አልኬኖች — CnH2n",
          body:
            "Have ONE double bond (C=C). Called UNSATURATED hydrocarbons.\n" +
            "Formula: CnH2n where n = 2, 3, 4, …\n\n" +
            "First few alkenes:\n" +
            "1) C₂H₄ — ethene\n" +
            "2) C₃H₆ — propene\n" +
            "3) C₄H₈ — butene\n" +
            "4) C₅H₁₀ — pentene\n" +
            "5) C₆H₁₂ — hexene",
          bodyAm:
            "አንድ ድርብ ትስስር (C=C) አላቸው። ያልተሞሉ ሃይድሮካርቦኖች ይባላሉ።\nቀመር፡ CnH2n\nየመጀመሪያዎቹ አልኬኖች፡ ኤቴን፣ ፕሮፔን፣ ቡቴን፣ ፔንቴን፣ ሄክሴን።",
        },
        {
          id: "n2-3",
          title: "Alkynes — general formula CnH2n-2",
          titleAm: "አልካይኖች — CnH2n-2",
          body:
            "Have ONE triple bond (C≡C). Called UNSATURATED hydrocarbons.\n" +
            "Formula: CnH2n-2 where n = 2, 3, 4, …\n\n" +
            "First few alkynes:\n" +
            "1) C₂H₂ — ethyne (acetylene)\n" +
            "2) C₃H₄ — propyne\n" +
            "3) C₄H₆ — butyne\n" +
            "4) C₅H₈ — pentyne\n" +
            "5) C₆H₁₀ — hexyne",
          bodyAm:
            "አንድ ሦስት ትስስር (C≡C) አላቸው።\nቀመር፡ CnH2n-2\nየመጀመሪያዎቹ አልካይኖች፡ ኤታይን፣ ፕሮፓይን፣ ቡታይን።",
        },
        {
          id: "n2-4",
          title: "Prefixes for naming",
          titleAm: "የመሰየሚያ ቅድመ ቅጥያዎች",
          body:
            "Number of C atoms → Prefix\n" +
            "1 → Meth-\n" +
            "2 → Eth-\n" +
            "3 → Prop-\n" +
            "4 → But-\n" +
            "5 → Pent-\n" +
            "6 → Hex-\n" +
            "7 → Hept-\n" +
            "8 → Oct-\n" +
            "9 → Non-\n" +
            "10 → Dec-\n\n" +
            "Suffixes:\n" +
            "Alkane → -ane\n" +
            "Alkene → -ene\n" +
            "Alkyne → -yne",
          bodyAm:
            "1 → ሜት-፣ 2 → ኤት-፣ 3 → ፕሮፕ-፣ 4 → ቡት-፣ 5 → ፔንት-፣ 6 → ሄክስ-፣ 7 → ሄፕት-፣ 8 → ኦክት-፣ 9 → ኖን-፣ 10 → ዴክ-\nቅጥያዎች፡ -ane፣ -ene፣ -yne።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, EASY WAY to remember the three formulas:\n" +
            "AlkANE = 'a' for 'Alone' = SATURATED = most H = CnH2n+2\n" +
            "AlkENE = 'e' for 'Extra bond' = ONE double bond = CnH2n\n" +
            "AlkYNE = 'y' for 'Ys' = 'Why so few H?' = ONE triple bond = CnH2n-2",
          bodyAm:
            "ባንቺ፣ ሦስቱን ቀመሮች ለማስታወስ ቀላል መንገድ፡\nአልካን = CnH2n+2\nአልኬን = CnH2n\nአልካይን = CnH2n-2",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Uses of Common Organic Compounds",
      titleAm: "የተለመዱ ኦርጋኒክ ውህዶች አጠቃቀሞች",
      body:
        "Banchi, you must know the uses of these compounds — it's a common exam question.",
      bodyAm:
        "ባንቺ፣ የእነዚህን ውህዶች አጠቃቀሞች ማወቅ አለብሽ — ተደጋጋሚ የፈተና ጥያቄ ነው።",
      children: [
        {
          id: "n3-1",
          title: "Methane (CH₄)",
          titleAm: "ሜቴን",
          body: "Used as fuel for cooking, heating, generating electricity. Main component of BIOGAS.",
          bodyAm: "ለማብሰያ፣ ለማሞቂያ፣ ለኤሌክትሪክ ማመንጨት ያገለግላል። የባዮጋዝ ዋና አካል።",
        },
        {
          id: "n3-2",
          title: "Propane (C₃H₈) + Butane (C₄H₁₀)",
          titleAm: "ፕሮፔን እና ቡቴን",
          body: "Mixture compressed in steel cylinders = 'butagas'. Used for cooking and heating.",
          bodyAm: "በብረት ሲሊንደር ተጨምቆ 'ቡታጋዝ' ይባላል። ለማብሰያና ለማሞቂያ ያገለግላል።",
        },
        {
          id: "n3-3",
          title: "Ethyne (C₂H₂)",
          titleAm: "ኤታይን",
          body: "Used to produce the OXYACETYLENE FLAME — for cutting and welding steel and iron.",
          bodyAm: "የኦክሲ-አሴቲሊን ነበልባል ለማምረት ያገለግላል — ብረት ለመቁረጥና ለመበየድ።",
        },
        {
          id: "n3-4",
          title: "Ethanol (C₂H₅OH)",
          titleAm: "ኤታኖል",
          body: "Alcoholic beverages (beer, wine, tella, teji). Mixed with petrol as fuel. Produces acetic acid. Cleaning wounds.",
          bodyAm: "የአልኮል መጠጦች (ቢራ፣ ወይን፣ ጠላ፣ ጠጅ)። ከፔትሮል ጋር ተቀላቅሎ ነዳጅ። አሴቲክ አሲድ ማምረት። ቁስል ማጠብ።",
        },
        {
          id: "n3-5",
          title: "Ethanoic acid (acetic acid, CH₃COOH)",
          titleAm: "ኢታኖይክ አሲድ",
          body: "Vinegar is 4–8% acetic acid. Used as food flavoring, disinfectant, and preserving vegetables (pickling).",
          bodyAm: "ኮምጣጤ 4–8% አሴቲክ አሲድ ነው። ለምግብ ጣዕም፣ ለፀረ-ተህዋሲያን፣ አትክልት ለማቆየት ያገለግላል።",
        },
        {
          id: "n3-6",
          title: "Formalin",
          titleAm: "ፎርማሊን",
          body: "Formaldehyde dissolved in water (40%). Used to preserve biological specimens (makes proteins hard and insoluble).",
          bodyAm: "ፎርማልዲሃይድ በውሃ ውስጥ (40%)። ባዮሎጂያዊ ናሙናዎችን ለማቆየት ያገለግላል።",
        },
        {
          id: "n3-7",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: ETHYNE (C₂H₂) is used for welding — NOT ethene. EtEne (C₂H₄) is used to ripen fruits and make plastics. Do not swap.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ኤታይን (C₂H₂) ለብየዳ ያገለግላል — ኤቴን አይደለም።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Inorganic Compounds — 4 Groups",
      titleAm: "ኢንኦርጋኒክ ውህዶች — 4 ቡድኖች",
      body:
        "Banchi, inorganic compounds are grouped into FOUR families: oxides, acids, bases, and salts.",
      bodyAm:
        "ባንቺ፣ ኢንኦርጋኒክ ውህዶች በአራት ቤተሰቦች ይከፈላሉ፡ ኦክሳይዶች፣ አሲዶች፣ ቤዞች፣ ጨዎች።",
      children: [
        {
          id: "n4-1",
          title: "Oxides",
          titleAm: "ኦክሳይዶች",
          body:
            "Oxide = binary compound of oxygen + another element.\n" +
            "Element + Oxygen → Oxide\n\n" +
            "Two types:\n" +
            "• Metallic oxides (metal + oxygen): CaO, Na₂O, MgO\n" +
            "• Non-metallic oxides (non-metal + oxygen): CO₂, SO₂, SO₃, NO₂",
          bodyAm:
            "ኦክሳይድ = ኦክሲጅን + ሌላ ንጥረ ነገር ሁለትዮሽ ውህድ።\nሁለት ዓይነቶች፡\n• ሜታሊክ ኦክሳይዶች፡ CaO, Na₂O, MgO\n• ኔሜታሊክ ኦክሳይዶች፡ CO₂, SO₂, SO₃, NO₂",
        },
        {
          id: "n4-2",
          title: "Acidic vs Basic oxides",
          titleAm: "አሲዳማ እና ቤዚክ ኦክሳይዶች",
          body:
            "• ACIDIC oxides = mostly NON-METALLIC oxides. They react with water to form ACIDS.\n" +
            "  Example: SO₃ + H₂O → H₂SO₄\n" +
            "  Example: CO₂ + H₂O → H₂CO₃\n\n" +
            "• BASIC oxides = mostly METALLIC oxides. They react with water to form BASES.\n" +
            "  Example: CaO + H₂O → Ca(OH)₂\n" +
            "  Example: Na₂O + H₂O → 2NaOH",
          bodyAm:
            "• አሲዳማ ኦክሳይዶች = ብዙውን ጊዜ ኔሜታሊክ። ከውሃ ጋር ተጣምረው አሲዶች ይሠራሉ።\n• ቤዚክ ኦክሳይዶች = ብዙውን ጊዜ ሜታሊክ። ከውሃ ጋር ተጣምረው ቤዞች ይሠራሉ።",
        },
        {
          id: "n4-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: 'Metallic' vs 'Basic' AND 'Non-metallic' vs 'Acidic' are NOT 100% the same. MOST metallic oxides are basic (but not all — some like Al₂O₃ are amphoteric). MOST non-metallic oxides are acidic (but some like CO and H₂O are neutral). However, for Grade 8 exams, use: Metal → Basic, Non-metal → Acidic.",
          bodyAm:
            "ባንቺ፣ ለ8ኛ ክፍል ፈተና፡ ሜታል ኦክሳይድ → ቤዚክ፣ ኔሜታል ኦክሳይድ → አሲዳማ።",
        },
        {
          id: "n4-4",
          title: "Acids",
          titleAm: "አሲዶች",
          body:
            "ACIDS = substances that release HYDROGEN IONS (H⁺) in water.\n\n" +
            "Common acids:\n" +
            "• HCl — hydrochloric acid\n" +
            "• H₂SO₄ — sulfuric acid\n" +
            "• HNO₃ — nitric acid\n\n" +
            "Properties:\n" +
            "• Sour taste (lemon, vinegar)\n" +
            "• Turn blue litmus RED\n" +
            "• React with active metals → salt + hydrogen gas\n" +
            "• React with carbonates → salt + water + CO₂",
          bodyAm:
            "አሲዶች = በውሃ ውስጥ ሃይድሮጅን አዮን (H⁺) የሚለቁ ንጥረ ነገሮች።\nዋና አሲዶች፡ HCl, H₂SO₄, HNO₃\nባህሪያት፡ ጎምዛዛ ጣዕም፣ ሰማያዊ ሊትመስ ወደ ቀይ፣ ከሜታሎች ጋር ሃይድሮጅን ጋዝ ያመነጫሉ።",
        },
        {
          id: "n4-5",
          title: "Naming acids — 3 rules",
          titleAm: "አሲዶችን መሰየም — 3 ደንቦች",
          body:
            "Rule 1: anion ends in -ide → acid starts with 'hydro-' and ends with '-ic'.\n" +
            "  Example: chloride (Cl⁻) → hydrochloric acid (HCl)\n\n" +
            "Rule 2: anion ends in -ite → acid ends with '-ous'.\n" +
            "  Example: sulfite (SO₃²⁻) → sulfurous acid (H₂SO₃)\n\n" +
            "Rule 3: anion ends in -ate → acid ends with '-ic'.\n" +
            "  Example: nitrate (NO₃⁻) → nitric acid (HNO₃)\n" +
            "  Example: sulfate (SO₄²⁻) → sulfuric acid (H₂SO₄)",
          bodyAm:
            "ደንብ 1፡ አኒዮን በ -ide ካለቀ → አሲዱ በ 'hydro-' ይጀምራል፣ በ -ic ያልቃል።\nደንብ 2፡ -ite → -ous acid.\nደንብ 3፡ -ate → -ic acid.",
        },
        {
          id: "n4-6",
          title: "Bases and alkalis",
          titleAm: "ቤዞች እና አልካሊዎች",
          body:
            "BASE = an oxide or hydroxide of a metal that neutralizes acid to form salt and water.\n" +
            "ALKALI = a base that is SOLUBLE in water (releases OH⁻ ions).\n\n" +
            "Common bases:\n" +
            "• NaOH — sodium hydroxide\n" +
            "• KOH — potassium hydroxide\n" +
            "• Ca(OH)₂ — calcium hydroxide\n" +
            "• NH₄OH — ammonium hydroxide\n\n" +
            "Properties: bitter taste, slippery feel, turn red litmus BLUE.",
          bodyAm:
            "ቤዝ = አሲድን ገለልተኛ የሚያደርግ ሜታል ኦክሳይድ ወይም ሃይድሮክሳይድ።\nአልካሊ = በውሃ የሚሟሟ ቤዝ (OH⁻ ይለቃል)።\nዋና ቤዞች፡ NaOH, KOH, Ca(OH)₂, NH₄OH\nባህሪያት፡ መራራ ጣዕም፣ ቀይ ሊትመስ ወደ ሰማያዊ።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Indicators and Neutralization",
      titleAm: "ኢንዲኬተሮች እና ገለልተኝነት",
      body:
        "Banchi, indicators are dyes that change color to tell us if a solution is acidic or basic. Neutralization is when acid + base react to form salt + water.",
      bodyAm:
        "ባንቺ፣ ኢንዲኬተሮች አንድ መፍትሔ አሲዳማ ወይም ቤዚክ መሆኑን የሚነግሩን ቀለም-ቀያሪ ቀለሞች ናቸው። ገለልተኝነት አሲድ + ቤዝ ሲጣመሩ ጨው + ውሃ ይሠራሉ።",
      children: [
        {
          id: "n5-1",
          title: "Common indicators",
          titleAm: "የተለመዱ ኢንዲኬተሮች",
          body:
            "Blue litmus paper → turns RED in acid.\n" +
            "Red litmus paper → turns BLUE in base.\n" +
            "Phenolphthalein → colourless in acid, PINK in base.\n" +
            "Methyl orange → RED in acid, YELLOW in base.\n\n" +
            "You can also make your own indicator from beetroot, red cabbage, or flower petals.",
          bodyAm:
            "ሰማያዊ ሊትመስ → በአሲድ ውስጥ ቀይ።\nቀይ ሊትመስ → በቤዝ ውስጥ ሰማያዊ።\nፌኖልፍታሊን → በአሲድ ቀለም የለውም፣ በቤዝ ሮዝ።\nሜቲል ኦሬንጅ → በአሲድ ቀይ፣ በቤዝ ቢጫ።",
        },
        {
          id: "n5-2",
          title: "Neutralization reaction",
          titleAm: "የገለልተኝነት ምላሽ",
          body:
            "ACID + BASE → SALT + WATER\n\n" +
            "Example: HCl + NaOH → NaCl + H₂O\n" +
            "Example: H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O\n" +
            "Example: 2HCl + Ca(OH)₂ → CaCl₂ + 2H₂O",
          bodyAm:
            "አሲድ + ቤዝ → ጨው + ውሃ\nምሳሌ፡ HCl + NaOH → NaCl + H₂O",
        },
        {
          id: "n5-3",
          title: "Real-life uses of neutralization",
          titleAm: "የገለልተኝነት ተግባራዊ ጥቅሞች",
          body:
            "HOME: Toothpaste (basic) neutralizes mouth acid. Conditioner neutralizes shampoo.\n" +
            "HEALTH: Antacids neutralize stomach acid. Vinegar (acid) cures wasp stings (basic). Baking soda (base) cures bee stings (acidic).\n" +
            "AGRICULTURE: Powdered lime (CaO) or limestone (CaCO₃) neutralizes acidic soil.",
          bodyAm:
            "ቤት፡ ሳሙና አሲድ አፍን ያገለልትኛል። ኮንዲሽነር ሻምፑን ያገለልትኛል።\nጤና፡ አንታሲድ የሆድ አሲድን ያገለልትኛል። ኮምጣጤ የንፋስ ንክሻ ይፈውሳል።\nግብርና፡ ኖራ አሲዳማ አፈርን ያገለልትኛል።",
        },
        {
          id: "n5-4",
          title: "Salts",
          titleAm: "ጨዎች",
          body:
            "SALT = compound with a positive ion (from a base) and a negative ion (from an acid).\n\n" +
            "Common salts:\n" +
            "• NaCl — sodium chloride (table salt)\n" +
            "• CaCO₃ — calcium carbonate\n" +
            "• KNO₃ — potassium nitrate (gunpowder)\n" +
            "• NaHCO₃ — sodium bicarbonate (baking soda)",
          bodyAm:
            "ጨው = ከቤዝ አዎንታዊ አዮን + ከአሲድ አሉታዊ አዮን ያለው ውህድ።\nዋና ጨዎች፡ NaCl, CaCO₃, KNO₃, NaHCO₃።",
        },
        {
          id: "n5-5",
          title: "Naming salts",
          titleAm: "ጨዎችን መሰየም",
          body:
            "The name of a salt = name of cation (from base) + name of anion (from acid).\n\n" +
            "Acid → Salt group:\n" +
            "HCl → chloride\n" +
            "H₂SO₄ → sulfate\n" +
            "HNO₃ → nitrate\n" +
            "H₂CO₃ → carbonate",
          bodyAm:
            "የጨው ስም = የካታዮን ስም + የአኒዮን ስም።\nHCl → ክሎራይድ\nH₂SO₄ → ሰልፌት\nHNO₃ → ናይትሬት\nH₂CO₃ → ካርቦኔት",
        },
        {
          id: "n5-6",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: salts are NOT just 'table salt' (NaCl). ANY compound from acid + base is a salt. CaCO₃, KNO₃, NaHCO₃, MgSO₄ — all salts.",
          bodyAm:
            "ባንቺ፣ ጨዎች NaCl ብቻ አይደሉም። ማንኛውም ከአሲድ + ቤዝ የመጣ ውህድ ጨው ነው።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Safety with Acids and Bases",
      titleAm: "በአሲዶችና በቤዞች ጋር ደህንነት",
      body:
        "Banchi, acids and bases can cause severe burns and eye damage. Learn the safety rules carefully.",
      bodyAm:
        "ባንቺ፣ አሲዶችና ቤዞች ከባድ ቃጠሎና የዓይን ጉዳት ሊያስከትሉ ይችላሉ።",
      children: [
        {
          id: "n6-1",
          title: "If acid spills on skin",
          titleAm: "አሲድ በቆዳ ላይ ካፈሰሰ",
          body: "Wash with plenty of water, then with 10% Na₂CO₃ solution.",
          bodyAm: "በብዙ ውሃ አጠቢ፣ ከዚያ በ10% Na₂CO₃ መፍትሔ።",
        },
        {
          id: "n6-2",
          title: "If base spills on skin",
          titleAm: "ቤዝ በቆዳ ላይ ካፈሰሰ",
          body: "Wash with plenty of water, then with a WEAK acid like dilute acetic acid (vinegar).",
          bodyAm: "በብዙ ውሃ አጠቢ፣ ከዚያ በደካማ አሲድ (አሴቲክ አሲድ/ኮምጣጤ)።",
        },
        {
          id: "n6-3",
          title: "If acid/base enters eyes",
          titleAm: "በዓይን ውስጥ ከገባ",
          body: "Wash with PLENTY of water for a long time. Seek medical treatment immediately.",
          bodyAm: "በብዙ ውሃ ለረጅም ጊዜ አጠቢ። ወዲያውኑ ሕክምና ፈልጊ።",
        },
        {
          id: "n6-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, MEMORY TRICK: 'Acid on skin → use a BASE (Na₂CO₃). Base on skin → use an ACID (vinegar).' You neutralize acid with a base, and base with an acid. Do NOT swap.",
          bodyAm:
            "ባንቺ፣ ዘዴ፡ አሲድ በቆዳ → ቤዝ ተጠቀሚ። ቤዝ በቆዳ → አሲድ ተጠቀሚ።",
        },
      ],
    },

    {
      id: "n7",
      title: "7. Exam Strategy — Unit 3",
      titleAm: "የፈተና ስልት — ክፍል 3",
      body: "Banchi, five quick checks before answering Unit 3 questions.",
      bodyAm: "ባንቺ፣ የክፍል 3 ጥያቄዎችን ከመመለስሽ በፊት አምስት ፈጣን ቼኮች።",
      children: [
        {
          id: "n7-1",
          title: "Check 1 — Organic or inorganic?",
          titleAm: "ቼክ 1 — ኦርጋኒክ ወይስ ኢንኦርጋኒክ?",
          body: "Contains carbon + hydrogen → organic. Exception: CO₂, carbonates → inorganic despite carbon.",
          bodyAm: "ካርቦን + ሃይድሮጅን ያለው → ኦርጋኒክ። ልዩ፡ CO₂፣ ካርቦኔቶች → ኢንኦርጋኒክ።",
        },
        {
          id: "n7-2",
          title: "Check 2 — Which hydrocarbon formula?",
          titleAm: "ቼክ 2 — የትኛው ሃይድሮካርቦን ቀመር?",
          body: "Alkane = CnH2n+2. Alkene = CnH2n. Alkyne = CnH2n-2.",
          bodyAm: "አልካን = CnH2n+2. አልኬን = CnH2n. አልካይን = CnH2n-2.",
        },
        {
          id: "n7-3",
          title: "Check 3 — Acid or base?",
          titleAm: "ቼክ 3 — አሲድ ወይስ ቤዝ?",
          body: "Releases H⁺ → acid. Releases OH⁻ → base. Sour → acid. Bitter → base.",
          bodyAm: "H⁺ ይለቃል → አሲድ. OH⁻ ይለቃል → ቤዝ.",
        },
        {
          id: "n7-4",
          title: "Check 4 — Litmus colors?",
          titleAm: "ቼክ 4 — የሊትመስ ቀለሞች?",
          body: "Blue litmus → red in acid. Red litmus → blue in base.",
          bodyAm: "ሰማያዊ ሊትመስ → በአሲድ ቀይ. ቀይ ሊትመስ → በቤዝ ሰማያዊ.",
        },
        {
          id: "n7-5",
          title: "Check 5 — What's the salt?",
          titleAm: "ቼክ 5 — ጨው ምንድን ነው?",
          body: "Salt = cation (from base) + anion (from acid). Acid + Base → Salt + Water.",
          bodyAm: "ጨው = ካታዮን + አኒዮን. አሲድ + ቤዝ → ጨው + ውሃ.",
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
      stem: "What is the modern definition of an organic compound?",
      options: [
        "Compound from living organisms only",
        "Compound containing carbon and hydrogen",
        "Compound containing only metals",
        "Compound with no carbon",
      ],
      answer: "1",
      explanation:
        "Modern definition: organic compounds contain CARBON and HYDROGEN (plus other elements). They are not defined by where they come from.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "Which chemist PROVED that organic compounds can be made from inorganic ones?",
      options: ["Democritus", "Friedrich Wöhler", "Aristotle", "Lavoisier"],
      answer: "1",
      explanation:
        "In 1828, Wöhler made urea (organic) from ammonium chloride and silver cyanate (inorganic). This disproved the vital-force theory.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "A hydrocarbon is a compound that contains ONLY:",
      options: [
        "Carbon and oxygen",
        "Carbon and hydrogen",
        "Hydrogen and oxygen",
        "Carbon only",
      ],
      answer: "1",
      explanation:
        "A hydrocarbon contains ONLY carbon and hydrogen atoms. That's the definition.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "The general formula of alkanes is:",
      options: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnHn"],
      answer: "1",
      explanation:
        "Alkanes have the general formula CnH2n+2. They have only single bonds (saturated).",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "The general formula of alkenes is:",
      options: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnHn"],
      answer: "0",
      explanation:
        "Alkenes have the general formula CnH2n. They have one double bond (C=C).",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "The general formula of alkynes is:",
      options: ["CnH2n", "CnH2n+2", "CnH2n-2", "CnHn"],
      answer: "2",
      explanation:
        "Alkynes have the general formula CnH2n-2. They have one triple bond (C≡C).",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "The first alkane (CH₄) is called:",
      options: ["Methane", "Ethane", "Propane", "Butane"],
      answer: "0",
      explanation:
        "CH₄ has 1 carbon → prefix 'meth-' → METHANE.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "C₂H₆ is called:",
      options: ["Methane", "Ethane", "Propane", "Ethene"],
      answer: "1",
      explanation:
        "C₂H₆ has 2 carbons → 'eth-' + '-ane' → ETHANE.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "C₃H₈ is called:",
      options: ["Ethane", "Propane", "Butane", "Propene"],
      answer: "1",
      explanation:
        "C₃H₈ has 3 carbons → 'prop-' + '-ane' → PROPANE.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "C₄H₁₀ is called:",
      options: ["Propane", "Butane", "Pentane", "Butene"],
      answer: "1",
      explanation:
        "C₄H₁₀ has 4 carbons → 'but-' + '-ane' → BUTANE.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "C₂H₄ is called:",
      options: ["Ethane", "Ethene", "Ethyne", "Methane"],
      answer: "1",
      explanation:
        "C₂H₄ has 2 carbons with the '-ene' ending → ETHENE.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "C₂H₂ is called:",
      options: ["Ethane", "Ethene", "Ethyne", "Methane"],
      answer: "2",
      explanation:
        "C₂H₂ has 2 carbons with the '-yne' ending → ETHYNE (also called acetylene).",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "The suffix '-ane' indicates:",
      options: ["An alkene", "An alkyne", "An alkane", "An acid"],
      answer: "2",
      explanation:
        "Suffix '-ane' = alkane (saturated hydrocarbon).",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "The suffix '-ene' indicates:",
      options: ["An alkane", "An alkene", "An alkyne", "A base"],
      answer: "1",
      explanation:
        "Suffix '-ene' = alkene (has a double bond).",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "The suffix '-yne' indicates:",
      options: ["An alkane", "An alkene", "An alkyne", "An oxide"],
      answer: "2",
      explanation:
        "Suffix '-yne' = alkyne (has a triple bond).",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "Methane is mainly used as:",
      options: [
        "A cooking fuel and for biogas",
        "A cleaning agent",
        "A food color",
        "A medicine",
      ],
      answer: "0",
      explanation:
        "Methane is the main component of biogas and is used for cooking, heating, and generating electricity.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "Ethyne is used to produce:",
      options: [
        "Oxyacetylene flame for welding",
        "Drinking water",
        "Table salt",
        "Glass",
      ],
      answer: "0",
      explanation:
        "Ethyne (C₂H₂) burns with oxygen to produce the oxyacetylene flame used for cutting and welding steel and iron.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "Ethanol is used in:",
      options: [
        "Alcoholic beverages and fuel",
        "Kitchen salt",
        "Oxygen production",
        "Glass making",
      ],
      answer: "0",
      explanation:
        "Ethanol is used in alcoholic beverages, mixed with petrol as fuel, and in medicine for cleaning wounds.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "Vinegar contains mainly:",
      options: [
        "Hydrochloric acid",
        "Acetic acid (ethanoic acid)",
        "Sulfuric acid",
        "Nitric acid",
      ],
      answer: "1",
      explanation:
        "Vinegar is 4–8% acetic acid (ethanoic acid). Used as flavoring and disinfectant.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the modern definition of an inorganic compound?",
      options: [
        "Compound containing carbon",
        "Compound of elements OTHER than carbon (with some exceptions)",
        "Compound from living things",
        "Compound with oxygen only",
      ],
      answer: "1",
      explanation:
        "Inorganic = compounds NOT primarily based on carbon (with exceptions like CO₂, carbonates).",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one of these is INORGANIC despite containing carbon?",
      options: ["CH₄", "C₂H₆", "CO₂", "C₂H₅OH"],
      answer: "2",
      explanation:
        "CO₂ (carbon dioxide) contains carbon but is INORGANIC. Oxides of carbon are exceptions.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "An oxide is a compound containing:",
      options: [
        "Oxygen and any other element",
        "Only oxygen",
        "Only metals",
        "Only carbon",
      ],
      answer: "0",
      explanation:
        "An oxide is a binary compound of oxygen + another element.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a METALLIC oxide?",
      options: ["CO₂", "SO₂", "CaO", "NO₂"],
      answer: "2",
      explanation:
        "CaO (calcium oxide) has calcium (a metal) + oxygen → metallic oxide.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a NON-METALLIC oxide?",
      options: ["CaO", "Na₂O", "MgO", "CO₂"],
      answer: "3",
      explanation:
        "CO₂ has carbon (non-metal) + oxygen → non-metallic oxide.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "Acids release which ion in water?",
      options: ["Hydroxide ion (OH⁻)", "Hydrogen ion (H⁺)", "Sodium ion (Na⁺)", "Chloride ion (Cl⁻)"],
      answer: "1",
      explanation:
        "Acids release HYDROGEN IONS (H⁺) in water.",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Which one is NOT a hydrocarbon?",
      options: ["Methane", "Ethene", "Ethyne", "Ethanol"],
      answer: "3",
      explanation:
        "Ethanol (C₂H₅OH) contains oxygen — it's an alcohol, not a hydrocarbon. Hydrocarbons have ONLY C and H.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Which formula represents an alkene with 8 carbon atoms?",
      options: ["C₈H₈", "C₈H₁₆", "C₈H₁₈", "C₈H₁₄"],
      answer: "1",
      explanation:
        "Alkene formula = CnH2n = C₈H₁₆.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Which formula represents an alkane with 6 carbon atoms?",
      options: ["C₆H₁₂", "C₆H₁₄", "C₆H₁₀", "C₆H₁₃"],
      answer: "1",
      explanation:
        "Alkane formula = CnH2n+2 = C₆H₁₄.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Which formula represents an alkyne with 4 carbon atoms?",
      options: ["C₄H₈", "C₄H₁₀", "C₄H₆", "C₄H₄"],
      answer: "2",
      explanation:
        "Alkyne formula = CnH2n-2 = C₄H₆.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the formula of pentane?",
      options: ["C₅H₁₀", "C₅H₁₂", "C₅H₈", "C₅H₁₄"],
      answer: "1",
      explanation:
        "Pentane is an alkane with 5 carbons: CnH2n+2 = C₅H₁₂.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the name of C₈H₁₈?",
      options: ["Octane", "Octene", "Octyne", "Nonane"],
      answer: "0",
      explanation:
        "8 carbons + alkane formula → 'oct-' + '-ane' = OCTANE.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the name of C₆H₁₂?",
      options: ["Hexane", "Hexene", "Hexyne", "Pentane"],
      answer: "1",
      explanation:
        "6 carbons + alkene formula (CnH2n = C₆H₁₂) → 'hex-' + '-ene' = HEXENE.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the name of C₉H₂₀?",
      options: ["Nonyne", "Nonene", "Nonane", "Decane"],
      answer: "2",
      explanation:
        "9 carbons + alkane formula = CnH2n+2 = C₉H₂₀ → NONANE.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the name of C₁₀H₂₂?",
      options: ["Decane", "Decene", "Decyne", "Nonane"],
      answer: "0",
      explanation:
        "10 carbons + alkane formula → DECANE.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about the difference between alkanes and alkenes?",
      options: [
        "Alkanes have double bonds; alkenes have single bonds",
        "Alkanes have single bonds; alkenes have one double bond",
        "Both have triple bonds",
        "Neither has carbon",
      ],
      answer: "1",
      explanation:
        "Alkanes are saturated (single bonds only). Alkenes have one double bond (C=C).",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the correct formula for butane?",
      options: ["C₄H₁₀", "C₄H₈", "C₄H₆", "C₄H₁₂"],
      answer: "0",
      explanation:
        "Butane (alkane, 4 carbons) = CnH2n+2 = C₄H₁₀.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following is the CORRECT order of prefixes from 1 to 4 carbons?",
      options: [
        "Meth-, eth-, prop-, but-",
        "Eth-, meth-, prop-, but-",
        "Prop-, meth-, eth-, but-",
        "But-, prop-, eth-, meth-",
      ],
      answer: "0",
      explanation:
        "Correct order: Meth- (1), Eth- (2), Prop- (3), But- (4).",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Formalin is a solution of:",
      options: [
        "Formaldehyde in water",
        "Formic acid in water",
        "Acetic acid in water",
        "Ethanol in water",
      ],
      answer: "0",
      explanation:
        "Formalin = 40% formaldehyde in water. Used for preserving biological specimens.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Propane and butane mixture is compressed and sold as:",
      options: ["Methane", "Butagas", "Petrol", "Kerosene"],
      answer: "1",
      explanation:
        "A mixture of propane and butane compressed in a steel cylinder is sold as 'butagas' for cooking and heating.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Which one is NOT a correct use of ethyne?",
      options: [
        "Welding steel",
        "Cutting iron",
        "Oxyacetylene flame",
        "Preserving biological specimens",
      ],
      answer: "3",
      explanation:
        "Ethyne is for welding and cutting. Preserving specimens is done with FORMALIN.",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a base?",
      options: ["HCl", "H₂SO₄", "NaOH", "HNO₃"],
      answer: "2",
      explanation:
        "NaOH (sodium hydroxide) is a base. HCl, H₂SO₄, HNO₃ are acids.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is an acid?",
      options: ["NaOH", "KOH", "Ca(OH)₂", "H₂SO₄"],
      answer: "3",
      explanation:
        "H₂SO₄ (sulfuric acid) is an acid. The others are bases.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "The ion that is characteristic of ALL bases in water is:",
      options: ["H⁺", "OH⁻", "Na⁺", "Cl⁻"],
      answer: "1",
      explanation:
        "Bases release HYDROXIDE IONS (OH⁻) in water.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "The chemical formula for hydrochloric acid is:",
      options: ["HCl", "H₂SO₄", "HNO₃", "H₂CO₃"],
      answer: "0",
      explanation:
        "Hydrochloric acid = HCl.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "The chemical formula for sulfuric acid is:",
      options: ["HCl", "H₂SO₄", "HNO₃", "H₂CO₃"],
      answer: "1",
      explanation:
        "Sulfuric acid = H₂SO₄.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "The chemical formula for nitric acid is:",
      options: ["HCl", "H₂SO₄", "HNO₃", "H₂CO₃"],
      answer: "2",
      explanation:
        "Nitric acid = HNO₃.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "Blue litmus paper turns ___ in an acid.",
      options: ["Red", "Blue", "Green", "Colourless"],
      answer: "0",
      explanation:
        "Blue litmus turns RED in acid.",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "Red litmus paper turns ___ in a base.",
      options: ["Red", "Blue", "Green", "Colourless"],
      answer: "1",
      explanation:
        "Red litmus turns BLUE in a base.",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "Phenolphthalein turns ___ in a base.",
      options: ["Colourless", "Pink", "Blue", "Red"],
      answer: "1",
      explanation:
        "Phenolphthalein: colourless in acid, PINK in base.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "Which acid + base reaction forms table salt (NaCl)?",
      options: [
        "HCl + NaOH → NaCl + H₂O",
        "H₂SO₄ + NaOH → NaCl + H₂O",
        "HNO₃ + KOH → NaCl + H₂O",
        "HCl + Ca(OH)₂ → NaCl + H₂O",
      ],
      answer: "0",
      explanation:
        "Hydrochloric acid + sodium hydroxide → sodium chloride + water.",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "Which one is the FIRST organic compound ever synthesized from inorganic compounds?",
      options: ["Ammonium cyanate (NH₄CNO)", "Urea [(NH₂)₂CO]", "Silver chloride", "Ammonium chloride"],
      answer: "1",
      explanation:
        "Wöhler synthesized UREA (an organic compound) from ammonium chloride + silver cyanate (inorganic). Urea is the first organic compound synthesized in the lab.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "What is the missing product X in the equation: NaOH + H₂SO₄ → X + H₂O?",
      options: ["NaCl", "Na₂SO₄", "Na₂O", "NaOH"],
      answer: "1",
      explanation:
        "2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O. The salt is sodium sulfate (Na₂SO₄).",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about oxides is TRUE?",
      options: [
        "All oxides are acidic",
        "All oxides are basic",
        "Non-metallic oxides are generally acidic; metallic oxides are generally basic",
        "Oxides contain only one element",
      ],
      answer: "2",
      explanation:
        "Non-metallic oxides are generally acidic; metallic oxides are generally basic.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Which formula is an ALKYNE containing 10 hydrogen atoms?",
      options: ["C₆H₁₀", "C₅H₈", "C₁₀H₁₀", "C₈H₁₀"],
      answer: "0",
      explanation:
        "For C₆H₁₀: n = 6, CnH2n-2 = C₆H₁₀ ✓. Alkyne with 10 H atoms = C₆H₁₀.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes the naming rule for acids?",
      options: [
        "Anion ending in -ide → acid name starts with 'hydro-'",
        "Anion ending in -ate → acid name starts with 'hydro-'",
        "Anion ending in -ite → acid name starts with 'hydro-'",
        "All acids start with 'hydro-'",
      ],
      answer: "0",
      explanation:
        "Rule 1: -ide anion → 'hydro-' + stem + '-ic acid'. Example: chloride → hydrochloric acid.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "Which of the following is NOT a salt?",
      options: ["NaCl", "CaCO₃", "KNO₃", "NaOH"],
      answer: "3",
      explanation:
        "NaOH is a BASE, not a salt. Salts come from acid + base reactions.",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Define: organic compound, inorganic compound, and hydrocarbon.",
      answer:
        "Organic compound: contains carbon and hydrogen (with exceptions like CO₂). Inorganic compound: compounds of elements other than carbon (with exceptions). Hydrocarbon: compound containing only carbon and hydrogen.",
      explanation:
        "Remember the exceptions to the carbon rule — oxides of carbon, carbonates, bicarbonates.",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "Write the general formulas and one example each of alkanes, alkenes, and alkynes.",
      answer:
        "Alkanes: CnH2n+2 — example CH₄ (methane). Alkenes: CnH2n — example C₂H₄ (ethene). Alkynes: CnH2n-2 — example C₂H₂ (ethyne).",
      explanation:
        "Alkanes = single bonds. Alkenes = one double bond. Alkynes = one triple bond.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "What is neutralization? Give two examples of its use in daily life.",
      answer:
        "Neutralization is a reaction between an acid and a base to form a salt and water. Examples: (1) Toothpaste (basic) neutralizes mouth acid. (2) Antacids (basic) neutralize stomach acid.",
      explanation:
        "Acid + Base → Salt + Water.",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "Explain the safety measures if a concentrated acid is spilled on the skin.",
      answer:
        "Wash the affected area thoroughly with plenty of water, then wash with a 10% Na₂CO₃ solution to neutralize the remaining acid. Seek medical attention if the burn is severe.",
      explanation:
        "Remember: acid on skin → neutralize with a base. Base on skin → neutralize with a weak acid (vinegar).",
    },
        // ============================================================
    // BATCH 2 — Q61 to Q120 (final for Unit 3)
    // ============================================================

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is an organic compound?",
      options: ["NaCl", "CaO", "CH₃COOH", "H₂O"],
      answer: "2",
      explanation:
        "CH₃COOH (acetic acid) contains carbon and hydrogen → organic. NaCl, CaO, H₂O are inorganic.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is an inorganic compound?",
      options: ["C₂H₅OH", "CH₄", "NaCl", "C₆H₁₂O₆"],
      answer: "2",
      explanation:
        "NaCl (table salt) has no carbon → inorganic. The others are organic.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "What does 'CnH2n+2' represent?",
      options: ["Alkene formula", "Alkane formula", "Alkyne formula", "Acid formula"],
      answer: "1",
      explanation:
        "CnH2n+2 is the general formula for ALKANES (saturated hydrocarbons).",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a DIATOMIC element molecule of carbon?",
      options: ["CO₂", "CH₄", "C₆H₁₀", "None — carbon does not form diatomic molecules"],
      answer: "3",
      explanation:
        "Carbon exists as a solid, not as diatomic molecules. CO₂ and CH₄ are compounds. C₆H₁₀ is a hydrocarbon.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the correct name for C₂H₅OH?",
      options: ["Ethane", "Ethanol", "Ethene", "Ethanoic acid"],
      answer: "1",
      explanation:
        "C₂H₅OH = ethanol (ethyl alcohol).",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a soap or detergent property?",
      options: [
        "Sour taste",
        "Bitter taste and slippery feel",
        "Always turns blue litmus red",
        "Neutral taste",
      ],
      answer: "1",
      explanation:
        "Soaps and detergents are BASIC — they have a bitter taste and slippery feel. They turn red litmus blue.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT an indicator?",
      options: ["Litmus", "Phenolphthalein", "Methyl orange", "Salt"],
      answer: "3",
      explanation:
        "Salt is a compound, not an indicator. Indicators are substances that change color to tell acid from base.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is used to preserve biological specimens?",
      options: ["Ethyne", "Formalin", "Methane", "Vinegar"],
      answer: "1",
      explanation:
        "Formalin (40% formaldehyde in water) is used to preserve biological specimens.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is used as a disinfectant and food flavoring?",
      options: ["HCl", "Vinegar (acetic acid)", "Sulfuric acid", "Nitric acid"],
      answer: "1",
      explanation:
        "Vinegar (4–8% acetic acid) is used as a food flavoring and disinfectant.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Which acid is found in the stomach?",
      options: ["HCl", "H₂SO₄", "HNO₃", "CH₃COOH"],
      answer: "0",
      explanation:
        "Hydrochloric acid (HCl) is found in the stomach and helps digest food.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is NOT a base?",
      options: ["NaOH", "KOH", "Ca(OH)₂", "H₂SO₄"],
      answer: "3",
      explanation:
        "H₂SO₄ (sulfuric acid) is an ACID, not a base.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is NOT an acid?",
      options: ["HCl", "HNO₃", "NaOH", "H₂SO₄"],
      answer: "2",
      explanation:
        "NaOH (sodium hydroxide) is a BASE, not an acid.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "What does the suffix '-ic' indicate in an acid name?",
      options: [
        "Anion ends in -ide",
        "Anion ends in -ite",
        "Anion ends in -ate",
        "No anion",
      ],
      answer: "2",
      explanation:
        "The suffix '-ic' corresponds to an anion ending in '-ate' or '-ide'. Example: nitrate → nitric acid.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is a salt?",
      options: ["HCl", "NaOH", "NaCl", "H₂O"],
      answer: "2",
      explanation:
        "NaCl (sodium chloride, table salt) is a salt. It comes from HCl + NaOH.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which salt is used as a food preservative and in baking?",
      options: ["KNO₃", "NaHCO₃ (baking soda)", "CaCO₃", "NaCl"],
      answer: "1",
      explanation:
        "NaHCO₃ (sodium bicarbonate, baking soda) is used in baking and as a food preservative.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "Which salt is used to make gunpowder?",
      options: ["NaCl", "KNO₃", "CaCO₃", "NaHCO₃"],
      answer: "1",
      explanation:
        "KNO₃ (potassium nitrate, saltpeter) is used in gunpowder.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "Which substance is used to neutralize acid spills on the skin?",
      options: ["Vinegar", "10% Na₂CO₃ solution", "Water only", "Lemon juice"],
      answer: "1",
      explanation:
        "10% sodium carbonate (Na₂CO₃) is used to neutralize acid on the skin.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "Which substance is used to neutralize base spills on the skin?",
      options: ["Dilute acetic acid (vinegar)", "NaOH", "10% Na₂CO₃", "Water"],
      answer: "0",
      explanation:
        "A weak acid like dilute acetic acid (vinegar) neutralizes a base on the skin.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "The main component of biogas is:",
      options: ["Methane", "Ethane", "Propane", "Butane"],
      answer: "0",
      explanation:
        "Methane (CH₄) is the main component of biogas.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "Butagas is a mixture of:",
      options: [
        "Propane and butane",
        "Methane and ethane",
        "Ethanol and acetic acid",
        "Ethyne and oxygen",
      ],
      answer: "0",
      explanation:
        "Butagas = mixture of propane (C₃H₈) and butane (C₄H₁₀).",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "An acid + base reaction produces:",
      options: [
        "Salt + hydrogen",
        "Salt + water",
        "Salt + oxygen",
        "Acid + water",
      ],
      answer: "1",
      explanation:
        "Acid + Base → Salt + Water. This is called neutralization.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "Which acid is present in vinegar?",
      options: ["Hydrochloric acid", "Acetic acid", "Sulfuric acid", "Nitric acid"],
      answer: "1",
      explanation:
        "Vinegar contains 4–8% ACETIC ACID (CH₃COOH).",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "The word 'atom' comes from the Greek word:",
      options: ["Atomos", "Aerosol", "Alkan", "Anode"],
      answer: "0",
      explanation:
        "Democritus called the smallest particles 'atomos' (uncuttable).",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a compound?",
      options: ["O₂", "H₂", "H₂O", "N₂"],
      answer: "2",
      explanation:
        "H₂O (water) is a compound — 2 different elements (H and O).",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a molecule of an element?",
      options: ["HCl", "H₂O", "Cl₂", "NH₃"],
      answer: "2",
      explanation:
        "Cl₂ contains only chlorine atoms → molecule of an element.",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly identifies the number of atoms in one molecule of glucose (C₆H₁₂O₆)?",
      options: ["6", "12", "18", "24"],
      answer: "3",
      explanation:
        "6 carbon + 12 hydrogen + 6 oxygen = 24 atoms per molecule.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these is NOT a real family of hydrocarbons?",
      options: ["Alkanes", "Alkenes", "Alkynes", "Alkalines"],
      answer: "3",
      explanation:
        "The three hydrocarbon families are alkanes, alkenes, and alkynes. 'Alkalines' is not a family.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the correct name for the salt formed in: HCl + KOH → ?",
      options: ["Sodium chloride", "Potassium chloride", "Potassium hydroxide", "Hydrochloric acid"],
      answer: "1",
      explanation:
        "HCl + KOH → KCl + H₂O. The salt is potassium chloride (KCl).",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a correct neutralization reaction?",
      options: [
        "HCl + NaOH → NaCl + H₂",
        "HCl + NaOH → NaCl + H₂O",
        "HCl + NaOH → NaCl + O₂",
        "HCl + NaOH → NaOH + HCl",
      ],
      answer: "1",
      explanation:
        "Acid + Base → Salt + Water: HCl + NaOH → NaCl + H₂O.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Which formula represents ethanoic acid?",
      options: ["HCOOH", "CH₃COOH", "C₂H₅OH", "CH₃OH"],
      answer: "1",
      explanation:
        "Ethanoic acid (acetic acid) = CH₃COOH.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why toothpaste neutralizes mouth acid?",
      options: [
        "Toothpaste is acidic — it stops the acid",
        "Toothpaste is basic — it neutralizes the acid",
        "Toothpaste is neutral — it doesn't react",
        "Toothpaste absorbs the acid",
      ],
      answer: "1",
      explanation:
        "Toothpaste contains BASES (like calcium carbonate) that neutralize the acid produced by mouth bacteria.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why a conditioner is used after shampoo?",
      options: [
        "Conditioner adds color",
        "Conditioner is slightly acidic, neutralizing the slightly basic shampoo",
        "Conditioner is a base",
        "Conditioner dries the hair",
      ],
      answer: "1",
      explanation:
        "Shampoo is slightly BASIC. Conditioner is slightly ACIDIC and neutralizes the shampoo, making hair smooth and shiny.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "Antacids such as Mg(OH)₂ are used to:",
      options: [
        "Increase stomach acid",
        "Neutralize excess stomach acid",
        "Add more flavor",
        "Cool the stomach",
      ],
      answer: "1",
      explanation:
        "Antacids are BASES (Mg(OH)₂, Al(OH)₃) that neutralize EXCESS stomach acid.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly identifies the acid found in lemon juice?",
      options: ["Hydrochloric acid", "Sulfuric acid", "Citric acid", "Nitric acid"],
      answer: "2",
      explanation:
        "Lemon juice contains CITRIC ACID, which gives it a sour taste.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why acidic soil is treated with lime?",
      options: [
        "Lime (CaO, CaCO₃) is a base that neutralizes acidic soil",
        "Lime is an acid that neutralizes basic soil",
        "Lime has no effect on soil",
        "Lime adds more acid",
      ],
      answer: "0",
      explanation:
        "Lime (CaO), limestone (CaCO₃), and wood ash are BASES that neutralize ACIDIC soil.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Which reaction produces CO₂ gas?",
      options: [
        "Acid + base",
        "Acid + carbonate",
        "Base + base",
        "Salt + water",
      ],
      answer: "1",
      explanation:
        "Acid + Carbonate → Salt + Water + Carbon dioxide (CO₂). Example: 2HCl + CaCO₃ → CaCl₂ + H₂O + CO₂.",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "Which reaction produces HYDROGEN gas?",
      options: [
        "Acid + base",
        "Acid + active metal",
        "Salt + water",
        "Base + water",
      ],
      answer: "1",
      explanation:
        "Acid + Active Metal → Salt + Hydrogen gas. Example: Zn + 2HCl → ZnCl₂ + H₂.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the acidic nature of SO₂?",
      options: [
        "It's a metallic oxide → basic",
        "It's a non-metallic oxide → acidic",
        "It's neutral",
        "It's a salt",
      ],
      answer: "1",
      explanation:
        "SO₂ (sulfur dioxide) is a NON-metallic oxide → acidic oxide. It reacts with water to form sulfurous acid (H₂SO₃).",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the basic nature of CaO?",
      options: [
        "Metallic oxide → basic",
        "Non-metallic oxide → acidic",
        "Neutral",
        "Salty",
      ],
      answer: "0",
      explanation:
        "CaO (calcium oxide) is a METALLIC oxide → basic. It reacts with water to form calcium hydroxide Ca(OH)₂.",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the missing product X in: CO₂ + H₂O → X?",
      options: ["H₂CO₃ (carbonic acid)", "CaCO₃", "C₂H₅OH", "CH₄"],
      answer: "0",
      explanation:
        "CO₂ + H₂O → H₂CO₃ (carbonic acid). Acidic oxides react with water to form acids.",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the missing product Y in: CaO + H₂O → Y?",
      options: ["CaCO₃", "Ca(OH)₂", "CaH₂", "CaO₂"],
      answer: "1",
      explanation:
        "CaO + H₂O → Ca(OH)₂ (calcium hydroxide). Basic oxides react with water to form bases.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the missing product Z in: CaO + CO₂ → Z?",
      options: ["Ca(OH)₂", "CaCO₃", "CaO₂", "CaH₂"],
      answer: "1",
      explanation:
        "CaO + CO₂ → CaCO₃ (calcium carbonate). Basic oxide + acidic oxide → salt.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly matches the acid with the salt group?",
      options: [
        "HCl → carbonate",
        "H₂SO₄ → chloride",
        "HNO₃ → nitrate",
        "H₂CO₃ → sulfate",
      ],
      answer: "2",
      explanation:
        "HNO₃ → nitrates. HCl → chlorides. H₂SO₄ → sulfates. H₂CO₃ → carbonates.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the naming of NaCl?",
      options: [
        "Cation is Na⁺, anion is Cl⁻ → sodium chloride",
        "Cation is Cl⁻, anion is Na⁺ → chlorine sodium",
        "Just 'salt'",
        "Hydrochloric acid",
      ],
      answer: "0",
      explanation:
        "Salt name = cation + anion. Na⁺ (sodium) + Cl⁻ (chloride) = sodium chloride.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the formula of potassium nitrate?",
      options: ["KNO₃", "KNO₂", "K₂NO₃", "KOH"],
      answer: "0",
      explanation:
        "Potassium ion (K⁺) + nitrate ion (NO₃⁻) → KNO₃.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the formula of calcium carbonate?",
      options: ["CaCO₃", "Ca₂CO₃", "CaCO₂", "CaC"],
      answer: "0",
      explanation:
        "Calcium ion (Ca²⁺) + carbonate ion (CO₃²⁻) → CaCO₃.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "Which one is NOT a use of common organic compounds?",
      options: [
        "Methane as fuel",
        "Ethyne for welding",
        "Ethanol in beverages",
        "NaCl for oxyacetylene welding",
      ],
      answer: "3",
      explanation:
        "NaCl (table salt) is INORGANIC and not used for welding. Ethyne is used for oxyacetylene welding.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes an indicator?",
      options: [
        "A dye that changes color in acid or base",
        "A type of salt",
        "A base that neutralizes acids",
        "A strong acid",
      ],
      answer: "0",
      explanation:
        "An indicator is a DYE that shows the presence of an acid or base by changing color.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why red cabbage can be used as an indicator?",
      options: [
        "It contains natural pigments that change color with pH",
        "It is a strong acid",
        "It is a base",
        "It has no color",
      ],
      answer: "0",
      explanation:
        "Red cabbage (and beetroot, flower petals) contain NATURAL PIGMENTS that change color with pH — they can be used as homemade indicators.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the amphoteric nature of some oxides?",
      options: [
        "They act as both acid and base",
        "They are always acidic",
        "They are always basic",
        "They do not react",
      ],
      answer: "0",
      explanation:
        "Some oxides (like Al₂O₃) are AMPHOTERIC — they can act as either an acid or a base depending on what they react with.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about organic compounds is FALSE?",
      options: [
        "They contain carbon and hydrogen",
        "They can be synthesized from inorganic compounds",
        "They always come from living organisms",
        "They may contain oxygen, nitrogen, or sulfur",
      ],
      answer: "2",
      explanation:
        "Organic compounds do NOT always come from living organisms. Wöhler proved in 1828 that they can be made from inorganic compounds.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which is the correct balanced equation for the neutralization of sulfuric acid with sodium hydroxide?",
      options: [
        "H₂SO₄ + NaOH → Na₂SO₄ + H₂O",
        "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O",
        "H₂SO₄ + 2NaOH → Na₂SO₄ + H₂",
        "H₂SO₄ + NaOH → NaSO₄ + H₂O",
      ],
      answer: "1",
      explanation:
        "H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Balance: 2 Na, 4 H, 1 S, 4 O on both sides.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly matches the ion with its formula?",
      options: [
        "Carbonate — CO₃²⁻",
        "Nitrate — NO₂⁻",
        "Sulfate — SO₃²⁻",
        "Hydroxide — OH₂⁻",
      ],
      answer: "0",
      explanation:
        "Carbonate = CO₃²⁻ ✓. Nitrate = NO₃⁻ (not NO₂⁻). Sulfate = SO₄²⁻ (not SO₃²⁻). Hydroxide = OH⁻ (not OH₂⁻).",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes the difference between a base and an alkali?",
      options: [
        "Alkali is a base that is soluble in water",
        "Base is always soluble; alkali is not",
        "They are exactly the same",
        "Alkali is an acid; base is a salt",
      ],
      answer: "0",
      explanation:
        "All alkalis are bases, but not all bases are alkalis. An ALKALI is a base that DISSOLVES in water (releases OH⁻).",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why you should NEVER put lab acids into your mouth?",
      options: [
        "They taste bad",
        "They are corrosive and can cause severe internal damage",
        "They are cold",
        "They are invisible",
      ],
      answer: "1",
      explanation:
        "Hydrochloric, sulfuric, and nitric acids are CORROSIVE and POISONOUS. They cause severe internal irritation and damage if swallowed.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly pairs a compound with its use?",
      options: [
        "Ethyne — preserving biological specimens",
        "Formalin — welding steel",
        "Methane — cooking fuel",
        "Vinegar — making soap",
      ],
      answer: "2",
      explanation:
        "Methane is used as cooking fuel ✓. Ethyne is for welding (not preserving). Formalin is for preserving (not welding). Vinegar is for flavoring, not soap.",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "Name three common laboratory acids and three common laboratory bases.",
      answer:
        "Acids: hydrochloric acid (HCl), sulfuric acid (H₂SO₄), nitric acid (HNO₃). Bases: sodium hydroxide (NaOH), potassium hydroxide (KOH), calcium hydroxide (Ca(OH)₂).",
      explanation:
        "Banchi, memorize the formulas of these six.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "State the difference between a metallic oxide and a non-metallic oxide. Give one example of each.",
      answer:
        "Metallic oxide = compound of a METAL + oxygen. Example: CaO, Na₂O, MgO. Non-metallic oxide = compound of a NON-METAL + oxygen. Example: CO₂, SO₂, SO₃.",
      explanation:
        "Metallic oxides are usually BASIC. Non-metallic oxides are usually ACIDIC.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "Describe three applications of neutralization reactions in daily life.",
      answer:
        "1) Toothpaste (base) neutralizes mouth acid. 2) Antacids (base) neutralize excess stomach acid. 3) Lime (base) neutralizes acidic soil in agriculture.",
      explanation:
        "Neutralization is very common in homes, health, and farming.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Explain how to name a salt from its acid and base using an example.",
      answer:
        "A salt's name = cation (from base) + anion (from acid). Example: NaOH (base) + HCl (acid) → NaCl + H₂O. The salt is named 'sodium chloride': 'sodium' comes from the base (NaOH), 'chloride' comes from the acid (HCl, with 'hydro-' dropped and '-ic' changed to '-ide').",
      explanation:
        "Acid → salt group: HCl → chloride, H₂SO₄ → sulfate, HNO₃ → nitrate, H₂CO₃ → carbonate.",
    },
  ],
};