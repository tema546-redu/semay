import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 HISTORY — UNIT 1
// DEVELOPMENT OF CAPITALISM AND NATIONALISM 1815–1914
// Source: Grade 10 History Student Textbook (pp. 1–23)
// Federal Democratic Republic of Ethiopia, Ministry of Education
// For: Abenezer (Abatu) — Grade 10
// Style: mastery-lab (clean sections, key-term boxes, timelines,
// memory hooks, exam traps, exam strategy)
// ============================================================

export const g10HistoryCh1: Chapter = {
  id: "ch1",
  number: 1,
  title: "Development of Capitalism and Nationalism 1815–1914",
  titleAm: "የካፒታሊዝምና ብሔርተኝነት እድገት 1815–1914",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS UNIT
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Unit (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this unit is the FOUNDATION of modern world history. Every later unit — colonialism, world wars, the Cold War — builds on the ideas here: capitalism, nationalism, and the nation-state.\n\n" +
        "Master THREE big stories:\n" +
        "1) CAPITALISM — how the Industrial Revolution created a new economic system\n" +
        "2) NATIONALISM — how the feeling of belonging to a nation reshaped Europe\n" +
        "3) NATION-BUILDING — how Italy and Germany unified, and how the USA split and reunited\n\n" +
        "Master these three and you master this unit.",
      bodyAm:
        "አባቱ፣ ይህ ክፍል የዘመናዊ ዓለም ታሪክ መሠረት ነው። በኋላ የሚመጡ ክፍሎች — ቅኝ ግዛት፣ የዓለም ጦርነቶች፣ ቀዝቃዛ ጦርነት — በዚህ ክፍል ሐሳቦች ላይ ይገነባሉ።\n\n" +
        "ሦስቱን ትልልቅ ታሪኮች ተቆጣጥር፦\n" +
        "1) ካፒታሊዝም — የኢንዱስትሪ አብዮት አዲስ የኢኮኖሚ ሥርዓት እንዴት እንደፈጠረ\n" +
        "2) ብሔርተኝነት — የመሆን ስሜት አውሮፓን እንዴት እንደቀየረ\n" +
        "3) ብሔር-ግንባታ — ጣሊያንና ጀርመን እንዴት እንደተዋሃዱ፣ አሜሪካ እንዴት እንደተከፋፈለችና እንደተገናኘች",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the story, not just the facts",
          titleAm: "ደረጃ 1 · ታሪኩን ተረዳ፣ እውነታዎችን ብቻ አይደለም",
          body:
            "History is CAUSE → EFFECT. For every event, ask:\n" +
            "• WHY did it happen? (causes)\n" +
            "• WHAT happened? (course)\n" +
            "• SO WHAT? (consequences)\n\n" +
            "Example: Industrial Revolution (cause) → capitalism grows (effect) → competition for colonies (effect) → WWI (effect).\n\n" +
            "If you can tell the STORY, you can answer any question.",
          bodyAm:
            "ታሪክ ምክንያት → ውጤት ነው። ለየክስተቱ ጠይቅ፦\n" +
            "• ለምን ተፈጸመ? (ምክንያቶች)\n" +
            "• ምን ተፈጸመ? (ኮርስ)\n" +
            "• እንዴት? (ውጤቶች)\n\n" +
            "ታሪኩን መናገር ከቻልክ ማንኛውንም ጥያቄ መመለስ ትችላለህ።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Build a timeline in your head",
          titleAm: "ደረጃ 2 · በራስህ ውስጥ የጊዜ መስመር ስራ",
          body:
            "KEY DATES for this unit:\n" +
            "• 1815 — Congress of Vienna (Europe redrawn after Napoleon)\n" +
            "• 1834 — Zollverein (German customs union)\n" +
            "• 1848 — Revolutions across Europe (including Germany & Italy)\n" +
            "• 1861 — Kingdom of Italy proclaimed; American Civil War begins\n" +
            "• 1865 — American Civil War ends; slavery abolished (13th Amendment)\n" +
            "• 1866 — Seven Weeks War (Prussia defeats Austria)\n" +
            "• 1870–71 — Franco-Prussian War; German Empire proclaimed\n" +
            "• 1871 — Rome becomes capital of unified Italy\n" +
            "• 1884–85 — Berlin Conference (Scramble for Africa)",
          bodyAm:
            "ቁልፍ ቀኖች፦\n" +
            "• 1815 — የቪየና ኮንግረስ\n" +
            "• 1834 — ዞልቨራይን (የጀርመን ጉምሩክ ማህበር)\n" +
            "• 1848 — በአውሮፓ አብዮቶች\n" +
            "• 1861 — የጣሊያን መንግሥት ታወጀ፤ የአሜሪካ የእርስ በርስ ጦርነት ተጀመረ\n" +
            "• 1865 — የአሜሪካ ጦርነት አበቃ፤ ባርነት ተሰረዘ\n" +
            "• 1866 — የሰባት ሳምንት ጦርነት\n" +
            "• 1870–71 — የፍራንኮ-ፕሩሺያ ጦርነት፤ የጀርመን ግዛት ታወጀ\n" +
            "• 1871 — ሮም የተዋሃደች ጣሊያን ዋና ከተማ ሆነች\n" +
            "• 1884–85 — የበርሊን ኮንፈረንስ",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Learn the key terms by heart",
          titleAm: "ደረጃ 3 · ቁልፍ ቃላትን በልብህ ያዝ",
          body:
            "CAPITALISM: private ownership + profit + free market\n" +
            "NATIONALISM: loyalty & pride in one's nation\n" +
            "REALPOLITIK: politics of reality (any means necessary)\n" +
            "ZOLLVEREIN: German customs union (removed tariffs)\n" +
            "BLOOD AND IRON: Bismarck's policy using military power\n" +
            "ABOLITIONISM: movement to end slavery\n" +
            "EASTERN QUESTION: diplomatic problem over the declining Ottoman Empire",
          bodyAm:
            "ካፒታሊዝም፦ የግል ባለቤትነት + ትርፍ + ነጻ ገበያ\n" +
            "ብሔርተኝነት፦ ለብሔሩ ታማኝነትና ኩራት\n" +
            "ሪልፖሊቲክ፦ የእውነታ ፖለቲካ\n" +
            "ዞልቨራይን፦ የጀርመን ጉምሩክ ማህበር\n" +
            "ደምና ብረት፦ የቢስማርክ ወታደራዊ ፖሊሲ\n" +
            "አቦሊሽኒዝም፦ ባርነትን የማስወገድ ንቅናቄ\n" +
            "የምስራቅ ጥያቄ፦ ስለ ኦቶማን ግዛት ውድቀት ያለ ዲፕሎማሲያዊ ችግር",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check before submitting",
          titleAm: "ደረጃ 4 · ከማስረከብህ በፊት 2 ደቂቃ ቼክ",
          body:
            "1) Did I identify the CAUSE and EFFECT in the question?\n" +
            "2) Did I confuse countries? (Italy vs Germany; France vs Prussia)\n" +
            "3) Did I confuse dates? (1861 vs 1871; 1866 vs 1870)\n" +
            "4) Did I read 'NOT' in the question? (e.g., 'Which is NOT a feature...')\n" +
            "5) For battles/treaties, did I match the right country?",
          bodyAm:
            "1) ምክንያትና ውጤት ለይቼዋለሁ?\n" +
            "2) አገሮችን አምታታሁ? (ጣሊያን vs ጀርመን)\n" +
            "3) ቀኖችን አምታታሁ? (1861 vs 1871)\n" +
            "4) 'NOT' የሚለውን አነበብኩ?\n" +
            "5) ጦርነቶችንና ስምምነቶችን አገሮች ጋር አጣማሁ?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard — before you submit",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• History answers need CAUSES, not just names.\n" +
            "• 'Nationalism' has POSITIVE (unity) and NEGATIVE (aggression) sides — mention both if asked.\n" +
            "• The American Civil War was about SLAVERY first, states' rights second.\n" +
            "• Bismarck unified Germany 'from the top down' — not by revolution.\n" +
            "• Italy unified 'from below' (Garibaldi) and 'from above' (Cavour) together.",
          bodyAm:
            "• የታሪክ መልሶች ምክንያቶችን ይፈልጋሉ።\n" +
            "• ብሔርተኝነት አዎንታዊና አሉታዊ ጎኖች አሉት።\n" +
            "• የአሜሪካ ጦርነት በዋናነት ስለ ባርነት ነበር።\n" +
            "• ቢስማርክ ጀርመንን 'ከላይ ወደ ታች' አዋሃደ።\n" +
            "• ጣሊያን 'ከታች' (ጋሪባልዲ) እና 'ከላይ' (ካቮር) ተዋሃደች።",
        },
      ],
    },

    // ============================================================
    // 1.1 FEATURES OF CAPITALISM
    // ============================================================
    {
      id: "n1",
      title: "1.1 Features of Capitalism",
      titleAm: "1.1 የካፒታሊዝም ባህሪያት",
      body:
        "Abatu, capitalism is the economic system that shaped the modern world. Before you memorize dates, understand the CORE IDEA: private ownership + profit motive + free market.\n\n" +
        "The Industrial Revolution (started in England, 18th century) was the ENGINE that powered capitalism's growth.",
      bodyAm:
        "አባቱ፣ ካፒታሊዝም ዘመናዊውን ዓለም የቀረጸው የኢኮኖሚ ሥርዓት ነው። ዋናውን ሐሳብ ተረዳ፦ የግል ባለቤትነት + የትርፍ ፍላጎት + ነጻ ገበያ።\n\n" +
        "የኢንዱስትሪ አብዮት (በእንግሊዝ የጀመረ፣ 18ኛው ክፍለ ዘመን) የካፒታሊዝም እድገት ሞተር ነበር።",
      children: [
        {
          id: "n1-1",
          title: "📌 KEY TERM — Capitalism",
          titleAm: "📌 ቁልፍ ቃል — ካፒታሊዝም",
          body:
            "CAPITALISM = an economic system where:\n" +
            "• Most means of production are PRIVATELY OWNED\n" +
            "• Production is based on DEMAND and SUPPLY\n" +
            "• FREE COMPETITION drives the market\n" +
            "• Government interferes LESS (vs. command economy)\n\n" +
            "⚠ OPPOSITE: Command Economy (socialism/communism) — government controls production, distribution, prices.",
          bodyAm:
            "ካፒታሊዝም = የኢኮኖሚ ሥርዓት፦\n" +
            "• አብዛኛው የምርት ዘዴ በግል ይዞታ\n" +
            "• ምርት በፍላጎትና በአቅርቦት ላይ የተመሠረተ\n" +
            "• ነጻ ውድድር ገበያውን ይመራል\n" +
            "• መንግሥት ትንሽ ይገባል\n\n" +
            "⚠ ተቃራኒ፦ የትእዛዝ ኢኮኖሚ — መንግሥት ምርትን፣ ስርጭትን፣ ዋጋን ይቆጣጠራል።",
        },
        {
          id: "n1-2",
          title: "🏭 The Industrial Revolution — The Engine",
          titleAm: "🏭 የኢንዱስትሪ አብዮት — ሞተሩ",
          body:
            "TIMELINE:\n" +
            "• 18th century — Started in ENGLAND\n" +
            "• Then spread to: Belgium, France, German states\n" +
            "• 19th century — Transformed Western Europe & USA\n\n" +
            "KEY CHANGES:\n" +
            "• New energy: COAL and STEAM replaced wind & water\n" +
            "• FACTORY SYSTEM replaced domestic system (home workshops)\n" +
            "• New social classes emerged: PROLETARIAT (workers) & BOURGEOISIE (owners)",
          bodyAm:
            "የጊዜ መስመር፦\n" +
            "• 18ኛው ክፍለ ዘመን — በእንግሊዝ ተጀመረ\n" +
            "• ከዚያ ወደ ቤልጂየም፣ ፈረንሳይ፣ ጀርመን ተስፋፋ\n" +
            "• 19ኛው ክፍለ ዘመን — ምዕራብ አውሮፓንና አሜሪካን ቀየረ\n\n" +
            "ቁልፍ ለውጦች፦\n" +
            "• አዲስ ኃይል፦ ከሰልና እንፋሎት ነፋስንና ውሃን ተካ\n" +
            "• የፋብሪካ ሥርዓት የቤት ውስጥ ሥራን ተካ\n" +
            "• አዲስ ማህበራዊ ክፍሎች፦ ፕሮሌታሪያት እና ቡርዣዚ",
        },
        {
          id: "n1-3",
          title: "🔗 The Transatlantic Connection — How Slavery Built Capitalism",
          titleAm: "🔗 የትራንስ አትላንቲክ ግንኙነት",
          body:
            "Abatu, this is an EXAM FAVORITE. Understand the chain:\n\n" +
            "SLAVE TRADE → Plantations (sugar, cotton, tobacco) → RICHES (called 'capital') → Funded European industrialization\n\n" +
            "EXAMPLES:\n" +
            "• Slave trade enriched British port towns like LIVERPOOL\n" +
            "• Textile mills built MANCHESTER\n" +
            "• This 'capital' funded factories",
          bodyAm:
            "ይህ የፈተና ተወዳጅ ነው። ሰንሰለቱን ተረዳ፦\n\n" +
            "የባሪያ ንግድ → እርሻዎች → ሀብት ('ካፒታል') → የአውሮፓ ኢንዱስትሪን ፈነዱ\n\n" +
            "ምሳሌዎች፦\n" +
            "• የባሪያ ንግድ ሊቨርፑልን አበለጸገ\n" +
            "• ማንቸስተር በጨርቃ ጨርቅ ፋብሪካዎች አደገ",
        },
        {
          id: "n1-4",
          title: "⚠ EXAM TRAP — Capitalism vs Command Economy",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "Don't confuse these:\n\n" +
            "| Feature | Capitalism | Command Economy |\n" +
            "|---------|-----------|----------------|\n" +
            "| Ownership | Private | State/Public |\n" +
            "| Prices | Market (supply/demand) | Government-set |\n" +
            "| Competition | Free | Restricted |\n" +
            "| Government role | Minimal | Total control |\n\n" +
            "⚠ MCQ TRAP: 'Public property' is NOT a feature of capitalism — it's a feature of socialism/communism!",
          bodyAm:
            "አታምታታቸው፦\n\n" +
            "| ባህሪ | ካፒታሊዝም | የትእዛዝ ኢኮኖሚ |\n" +
            "|------|-----------|----------------|\n" +
            "| ባለቤትነት | የግል | የመንግሥት |\n" +
            "| ዋጋ | በገበያ | በመንግሥት |\n" +
            "| ውድድር | ነጻ | የተገደበ |\n\n" +
            "⚠ 'የሕዝብ ንብረት' የካፒታሊዝም ባህሪ አይደለም!",
        },
      ],
    },

    // ============================================================
    // 1.2 FEATURES OF NATIONALISM AND FORMATION OF NATION STATES
    // ============================================================
    {
      id: "n2",
      title: "1.2 Features of Nationalism and Formation of Nation States",
      titleAm: "1.2 የብሔርተኝነት ባህሪያትና የብሔር ግዛቶች ምስረታ",
      body:
        "Abatu, NATIONALISM is the second big idea of this unit. It is a feeling of belonging and loyalty that makes people think of themselves as a NATION.",
      bodyAm:
        "አባቱ፣ ብሔርተኝነት የዚህ ክፍል ሁለተኛው ትልቅ ሐሳብ ነው። ሰዎች ራሳቸውን እንደ ብሔር እንዲያስቡ የሚያደርግ የመሆንና የታማኝነት ስሜት ነው።",
      children: [
        {
          id: "n2-1",
          title: "📌 KEY TERM — Nationalism",
          titleAm: "📌 ቁልፍ ቃል — ብሔርተኝነት",
          body:
            "NATIONALISM = a feeling of belonging and loyalty that causes people to think of themselves as a NATION.\n\n" +
            "• It is the sense of belonging or feeling proud of your own country.\n" +
            "• It makes people support their nation and government.\n\n" +
            "⚠ Nationalism has TWO faces:\n" +
            "• POSITIVE: unity, independence, pride, nation-building\n" +
            "• NEGATIVE: aggression, war, empire expansion, superiority",
          bodyAm:
            "ብሔርተኝነት = ሰዎች ራሳቸውን እንደ ብሔር እንዲያስቡ የሚያደርግ የመሆንና የታማኝነት ስሜት።\n\n" +
            "⚠ ብሔርተኝነት ሁለት ፊቶች አሉት፦\n" +
            "• አዎንታዊ፦ አንድነት፣ ነጻነት፣ ኩራት\n" +
            "• አሉታዊ፦ ወረራ፣ ጦርነት፣ የቅኝ ግዛት መስፋፋት",
        },
        {
          id: "n2-2",
          title: "🌍 Factors that helped nationalism grow before the 19th century",
          titleAm: "🌍 ብሔርተኝነት ከ19ኛው ክፍለ ዘመን በፊት እንዲያድግ የረዱ ምክንያቶች",
          body:
            "Three great movements helped nationalism grow:\n\n" +
            "1) THE RENAISSANCE — development of national language and literature → national self-consciousness\n" +
            "2) THE PROTESTANT REFORMATION — broke religious unity of Europe, ended supremacy of the pope\n" +
            "3) EXPANSION OF COMMERCE — trade and colonies brought wealth → helped build strong states",
          bodyAm:
            "ሦስት ትልልቅ ንቅናቄዎች ብሔርተኝነት እንዲያድግ ረዱ፦\n\n" +
            "1) ህዳሴ — ብሔራዊ ቋንቋና ሥነ-ጽሁፍ እድገት → ብሔራዊ ግንዛቤ\n" +
            "2) የፕሮቴስታንት አብዮት — የአውሮፓን ሃይማኖታዊ አንድነት ሰበረ\n" +
            "3) የንግድ መስፋፋት — ንግድና ቅኝ ግዛቶች ሀብት አመጡ → ጠንካራ ግዛቶች ተገነቡ",
        },
        {
          id: "n2-3",
          title: "📜 The Congress of Vienna (1815) — The 'Reaction'",
          titleAm: "📜 የቪየና ኮንግረስ (1815)",
          body:
            "After Napoleon's defeat, the great powers met at the Congress of Vienna in 1815.\n\n" +
            "WHO: Britain, Russia, Prussia, Austria\n" +
            "GOAL: Reverse all changes brought by Napoleon; restore monarchies\n" +
            "RESULT: A period of 'reaction' — conservatives opposed change\n\n" +
            "⚠ But revolutionaries still spread nationalism and opposed conservatism. The tension between CONSERVATISM and NATIONALISM shaped the 19th century.",
          bodyAm:
            "ከናፖሊዮን ሽንፈት በኋላ ታላላቆቹ ኃያላን በ1815 ተገናኙ።\n\n" +
            "እነማን፦ ብሪታንያ፣ ሩሲያ፣ ፕሩሺያ፣ ኦስትሪያ\n" +
            "ግብ፦ የናፖሊዮን ለውጦችን መመለስ፤ ንጉሣዊ አገዛዞችን መመለስ\n" +
            "ውጤት፦ የ'ምላሽ' ዘመን — ወግ አጥባቂዎች ለውጥን ተቃወሙ",
        },
        {
          id: "n2-4",
          title: "⚠ EXAM TRAP — Nationalism vs Conservatism",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• CONSERVATISM = opposed change; wanted old orders (monarchy, tradition)\n" +
            "• NATIONALISM = wanted unity and independence of nations\n\n" +
            "The Congress of Vienna was CONSERVATIVE. It tried to undo Napoleon's changes.\n\n" +
            "⚠ MCQ TRAP: The Congress of Vienna did NOT promote nationalism — it tried to SUPPRESS it!",
          bodyAm:
            "• ወግ አጥባቂነት = ለውጥን ይቃወማል፤ የቆየውን ሥርዓት ይፈልጋል\n" +
            "• ብሔርተኝነት = የብሔሮችን አንድነትና ነጻነት ይፈልጋል\n\n" +
            "⚠ የቪየና ኮንግረስ ብሔርተኝነትን አላስፋፋም — ለመግታት ሞከረ!",
        },
      ],
    },

    // ============================================================
    // 1.2.1 UNIFICATION OF ITALY
    // ============================================================
    {
      id: "n3",
      title: "1.2.1 Unification of Italy",
      titleAm: "1.2.1 የጣሊያን ውህደት",
      body:
        "Abatu, in 1815 Italy was NOT a country — it was a collection of fragmented states. The story of unification is the story of THREE men: Mazzini (the dreamer), Cavour (the planner), and Garibaldi (the fighter).",
      bodyAm:
        "አባቱ፣ በ1815 ጣሊያን አገር አልነበረችም — የተበጣጠሱ ግዛቶች ስብስብ ነበረች። የውህደቱ ታሪክ የሦስት ሰዎች ታሪክ ነው፦ ማዚኒ (ሕልሙኛው)፣ ካቮር (አቅዳቂው)፣ ጋሪባልዲ (ተጋዳዩ)።",
      children: [
        {
          id: "n3-1",
          title: "🚧 Three Obstacles to Italian Unity in 1815",
          titleAm: "🚧 በ1815 ለጣሊያን አንድነት ሦስቱ እንቅፋቶች",
          body:
            "1) AUSTRIAN OCCUPATION — Austria controlled Lombardy and Venice in the north/northeast\n\n" +
            "2) THE PAPAL STATES — the principality under the pope cut the peninsula in half (north from south)\n\n" +
            "3) SEVERAL INDEPENDENT STATES:\n" +
            "• Kingdom of Sardinia (Piedmont-Sardinia) — most advanced state, on the French border\n" +
            "• Kingdom of the Two Sicilies — southern half + Sicily\n" +
            "• Duchies of Tuscany, Parma, Modena — ruled by Habsburg relatives (Austria's family)",
          bodyAm:
            "1) የኦስትሪያ ወረራ — ሰሜን/ሰሜን ምስራቅ ላይ ሎምባርዲና ቬኒስን ተቆጣጠረች\n\n" +
            "2) የጳጳስ ግዛቶች — በጳጳስ ስር ያለው ግዛት ልሳነ ምድሩን ሰበረ\n\n" +
            "3) በርካታ ገለልተኛ ግዛቶች፦\n" +
            "• የሳርዲኒያ መንግሥት — በጣም የዳበረ፣ በፈረንሳይ ድንበር\n" +
            "• የሁለቱ ሲሲሊ መንግሥት — ደቡባዊ ግማሽ + ሲሲሊ\n" +
            "• ቱስካኒ፣ ፓርማ፣ ሞዴና — በሃብስበርግ ቤተሰብ የሚገዙ",
        },
        {
          id: "n3-2",
          title: "👤 Mazzini — The Dreamer (Young Italy)",
          titleAm: "👤 ማዚኒ — ሕልሙኛው",
          body:
            "GIUSEPPE MAZZINI:\n" +
            "• Had a VISION for a united Italy\n" +
            "• Opposed monarchy; wanted a LIBERAL DEMOCRATIC REPUBLIC\n" +
            "• Member of the CARBONARI (secret society for Italian unification)\n" +
            "• In 1831, founded YOUNG ITALY — attracted tens of thousands\n" +
            "• Played a leading role in the 1848 Revolution\n" +
            "• Briefly led a Roman republic — but French forces overthrew it\n\n" +
            "KEY: Mazzini = the SPIRIT and IDEAS of unification.",
          bodyAm:
            "ጁሴፔ ማዚኒ፦\n" +
            "• ለተዋሃደች ጣሊያን ራዕይ ነበረው\n" +
            "• ንግሥናዊነትን ተቃወመ፤ ሊበራል ዲሞክራሲያዊ ሪፐብሊክ ፈለገ\n" +
            "• የካርቦናሪ አባል\n" +
            "• በ1831 'ወጣት ጣሊያን' መሠረተ\n" +
            "• በ1848 አብዮት መሪ ሚና ተጫወተ\n\n" +
            "ቁልፍ፦ ማዚኒ = የውህደቱ መንፈስና ሐሳብ።",
        },
        {
          id: "n3-3",
          title: "👤 Cavour — The Planner (Realpolitik)",
          titleAm: "👤 ካቮር — አቅዳቂው",
          body:
            "COUNT CAMILLO DI CAVOUR:\n" +
            "• In 1852, became prime minister of Kingdom of Sardinia (Piedmont)\n" +
            "• An aristocrat, well-educated\n" +
            "• STRENGTHENED Piedmont: promoted industry, railroads, agriculture, education, army\n" +
            "• Favored BRITISH-type parliamentary government\n" +
            "• Wanted Italy INDUSTRIALIZED and UNITED\n" +
            "• Reduced influence of the Catholic Church in politics\n\n" +
            "KEY MOVE — 1858 secret agreement with Napoleon III of France:\n" +
            "• France would send troops to drive Austria out of Lombardy & Venetia\n" +
            "• In return, Cavour promised Nice and Savoy to France\n" +
            "• Cavour maneuvered Austria into declaring war\n" +
            "• Sardinia-France defeated Austria → Sardinia got Lombardy & Venetia\n" +
            "• Parma, Modena, Tuscany voted by PLEBISCITE to join Sardinia",
          bodyAm:
            "ካቮር፦\n" +
            "• በ1852 የሳርዲኒያ ጠቅላይ ሚኒስትር ሆነ\n" +
            "• ፒዬሞንትን አጠናከረ\n" +
            "• የብሪታንያ ዓይነት ፓርላማዊ መንግሥት ወደደ\n" +
            "• ጣሊያን ኢንዱስትሪያልና ተዋሃደች እንድትሆን ፈለገ\n\n" +
            "ቁልፍ እርምጃ — በ1858 ከፈረንሳይ ናፖሊዮን ሳልሳዊ ጋር ምስጢራዊ ስምምነት፦\n" +
            "• ፈረንሳይ ኦስትሪያን ከሎምባርዲና ቬኒስ ለማባረር ወታደሮች ትልካለች\n" +
            "• ምትክ ካቮር ኒስና ሳቮይን ሰጠ\n" +
            "• ካቮር ኦስትሪያን እንድትጦር አደረገ\n" +
            "• ሳርዲኒያ-ፈረንሳይ አሸነፉ → ሳርዲኒያ ሎምባርዲና ቬኒስ አገኘች",
        },
        {
          id: "n3-4",
          title: "👤 Garibaldi — The Fighter (Red Shirts)",
          titleAm: "👤 ጋሪባልዲ — ተጋዳዩ",
          body:
            "GIUSEPPE GARIBALDI:\n" +
            "• Led the RED SHIRTS (army in bright red shirts)\n" +
            "• Captured Sicily → crossed to Italian mainland\n" +
            "• Conquered Southern areas\n" +
            "• Agreed to unite with Piedmont-Sardinia in the north\n" +
            "• Handed over power to Victor Emmanuel II of Sardinia\n\n" +
            "KEY: Garibaldi = the SWORD of unification (military action from below).",
          bodyAm:
            "ጁሴፔ ጋሪባልዲ፦\n" +
            "• ቀዮቹን ሸሚዞች መራ\n" +
            "• ሲሲሊን ያዘ → ወደ ዋና ምድር ተሻገረ\n" +
            "• ደቡባዊ አካባቢዎችን ያዘ\n" +
            "• ከሰሜኑ ፒዬሞንት-ሳርዲኒያ ጋር ለመዋሃድ ተስማማ\n" +
            "• ሥልጣንን ለቪክቶር ኢማኑኤል ሁለተኛ አስረከበ\n\n" +
            "ቁልፍ፦ ጋሪባልዲ = የውህደቱ ሰይፍ።",
        },
        {
          id: "n3-5",
          title: "📅 Timeline of Italian Unification",
          titleAm: "📅 የጣሊያን ውህደት የጊዜ መስመር",
          body:
            "• 1815 — Congress of Vienna: Italy fragmented\n" +
            "• 1831 — Mazzini founds Young Italy\n" +
            "• 1848 — Revolutions; Mazzini leads Roman Republic briefly\n" +
            "• 1852 — Cavour becomes PM of Sardinia\n" +
            "• 1858 — Cavour-Napoleon III secret agreement\n" +
            "• 1859 — War with Austria; Sardinia gains Lombardy\n" +
            "• 1860 — Garibaldi's Red Shirts capture Sicily and southern Italy\n" +
            "• 1861 — KINGDOM OF ITALY PROCLAIMED; Victor Emmanuel II king\n" +
            "• 1866 — Italy gains Venetia (after Austria's defeat in Seven Weeks War)\n" +
            "• 1870 — French troops leave Rome; Italy takes Rome → unification COMPLETE\n" +
            "• 1871 — Rome becomes capital of Italy",
          bodyAm:
            "• 1815 — ጣሊያን ተበጣጠሰች\n" +
            "• 1831 — ማዚኒ 'ወጣት ጣሊያን' መሠረተ\n" +
            "• 1848 — አብዮቶች\n" +
            "• 1852 — ካቮር ጠቅላይ ሚኒስትር ሆነ\n" +
            "• 1858 — ካቮር-ናፖሊዮን ስምምነት\n" +
            "• 1861 — የጣሊያን መንግሥት ታወጀ\n" +
            "• 1866 — ቬኒስ ተጨመረ\n" +
            "• 1870 — ሮም ተያዘ → ውህደት ተጠናቀቀ\n" +
            "• 1871 — ሮም ዋና ከተማ ሆነች",
        },
        {
          id: "n3-6",
          title: "⚠ Problems AFTER Unification",
          titleAm: "⚠ ከውህደት በኋላ ችግሮች",
          body:
            "Italy was politically united, but problems continued:\n\n" +
            "1) REGIONAL DIVISION — few Italians had experience in self-government\n" +
            "2) NORTH vs SOUTH TENSION — industrialized North vs agrarian South\n" +
            "3) CHURCH vs STATE HOSTILITY — government limited papal rights and controlled church property\n" +
            "4) THE MAFIA — a secret society, 'state within a state,' which the central government could not control\n\n" +
            "POSITIVE developments:\n" +
            "• Standard Italian language introduced\n" +
            "• Industrialization & urbanization in the North\n" +
            "• Modern education expanded\n" +
            "• Strong national army created",
          bodyAm:
            "ጣሊያን በፖለቲካ ተዋሃደች፣ ግን ችግሮች ቀጠሉ፦\n\n" +
            "1) የክልል ክፍፍል\n" +
            "2) ሰሜን vs ደቡብ ውጥረት\n" +
            "3) ቤተክርስቲያን vs መንግሥት\n" +
            "4) ማፊያ — 'በግዛት ውስጥ ግዛት'\n\n" +
            "አዎንታዊ እድገቶች፦\n" +
            "• መደበኛ ጣሊያንኛ ቋንቋ ተጀመረ\n" +
            "• በሰሜን ኢንዱስትሪና ከተማ መስፋፋት\n" +
            "• ዘመናዊ ትምህርት ተስፋፋ\n" +
            "• ጠንካራ ብሔራዊ ጦር ተፈጠረ",
        },
        {
          id: "n3-7",
          title: "🧠 Memory Hook — Italy's Three Men",
          titleAm: "🧠 የማስታወሻ ዘዴ",
          body:
            "Remember the three men as a sentence:\n\n" +
            "MAZZINI dreamed it.\n" +
            "CAVOUR planned it.\n" +
            "GARIBALDI fought it.\n" +
            "VICTOR EMMANUEL ruled it.\n\n" +
            "⚠ MCQ TRAP: Cavour is called the 'architect' of Italian unity — NOT Garibaldi, NOT Mazzini. Cavour built the alliances and planned the politics.",
          bodyAm:
            "ሦስቱን ሰዎች በአንድ ዓረፍተ ነገር አስታውስ፦\n\n" +
            "ማዚኒ አለመ።\n" +
            "ካቮር አቀደ።\n" +
            "ጋሪባልዲ ተጋደለ።\n" +
            "ቪክቶር ኢማኑኤል ገዛ።\n\n" +
            "⚠ ካቮር 'የውህደቱ አርክቴክት' ይባላል — ጋሪባልዲ ወይም ማዚኒ አይደለም።",
        },
      ],
    },

    // ============================================================
    // 1.2.2 UNIFICATION OF GERMANY
    // ============================================================
    {
      id: "n4",
      title: "1.2.2 Unification of Germany",
      titleAm: "1.2.2 የጀርመን ውህደት",
      body:
        "Abatu, Germany's unification is the story of PRUSSIA and one man: Otto von Bismarck. Unlike Italy (which unified 'from below'), Germany unified 'from the TOP DOWN' — by Prussian royal policy and military force.",
      bodyAm:
        "አባቱ፣ የጀርመን ውህደት የፕሩሺያና የአንድ ሰው ታሪክ ነው፦ ኦቶ ፎን ቢስማርክ። ከጣሊያን በተለየ ጀርመን 'ከላይ ወደ ታች' ተዋሃደች።",
      children: [
        {
          id: "n4-1",
          title: "🚧 Obstacles to German Unification before 1870",
          titleAm: "🚧 ከ1870 በፊት የጀርመን ውህደት እንቅፋቶች",
          body:
            "In 1815, the Congress of Vienna created the GERMAN CONFEDERATION — 39 separate autonomous states.\n\n" +
            "FORCES OPPOSED to unification:\n" +
            "• FOREIGN POWERS — Austria, Russia, France\n" +
            "• SMALL GERMAN STATES — feared Prussian domination\n" +
            "• CATHOLIC STATES — feared domination by Protestants",
          bodyAm:
            "በ1815 የቪየና ኮንግረስ የጀርመን ኮንፈደሬሽን ፈጠረ — 39 ገለልተኛ ግዛቶች።\n\n" +
            "ተቃዋሚ ኃይሎች፦\n" +
            "• የውጭ ኃያላን — ኦስትሪያ፣ ሩሲያ፣ ፈረንሳይ\n" +
            "• ትናንሽ የጀርመን ግዛቶች — የፕሩሺያ የበላይነት ፈሩ\n" +
            "• የካቶሊክ ግዛቶች — በፕሮቴስታንቶች መገዛት ፈሩ",
        },
        {
          id: "n4-2",
          title: "📌 KEY TERM — Zollverein (1834)",
          titleAm: "📌 ቁልፍ ቃል — ዞልቨራይን",
          body:
            "ZOLLVEREIN (1834) = an economic alliance (customs union) between German states.\n\n" +
            "• Removed TARIFFS on products traded between German states\n" +
            "• Promoted trade and a strong economy\n" +
            "• Was the FIRST STEP toward German unity\n\n" +
            "⚠ MCQ TRAP: Zollverein was ECONOMIC, not political. It did not unify Germany politically — but it made unity easier.",
          bodyAm:
            "ዞልቨራይን (1834) = በጀርመን ግዛቶች መካከል የኢኮኖሚ ማህበር።\n\n" +
            "• በግዛቶቹ መካከል ቀረጥ አስወገደ\n" +
            "• ንግድን አሳደገ\n" +
            "• ወደ ጀርመን አንድነት የመጀመሪያ እርምጃ ነበር\n\n" +
            "⚠ ዞልቨራይን ኢኮኖሚያዊ ነበር፣ ፖለቲካዊ አይደለም።",
        },
        {
          id: "n4-3",
          title: "👤 Bismarck — The Iron Chancellor",
          titleAm: "👤 ቢስማርክ — የብረት ቻንስለር",
          body:
            "OTTO VON BISMARCK:\n" +
            "• Conservative politician; came from the JUNKER class (landed nobility) of Prussia\n" +
            "• In 1862, King Wilhelm I chose him as prime minister\n" +
            "• Favored German unification under PRUSSIAN leadership\n\n" +
            "HIS POLICIES:\n" +
            "• REALPOLITIK — 'politics of reality' — pursue goals by ANY means necessary (war, lies, breaking treaties)\n" +
            "• BLOOD AND IRON — using MILITARY POWER to achieve unification\n\n" +
            "PRUSSIA'S STRENGTHS:\n" +
            "• Large COAL deposits in the Ruhr Valley\n" +
            "• Flourishing iron and steel industry\n" +
            "• Strong, glorified army",
          bodyAm:
            "ኦቶ ፎን ቢስማርክ፦\n" +
            "• ወግ አጥባቂ ፖለቲከኛ፤ ከጁንከር ክፍል (የመሬት መኳንንት)\n" +
            "• በ1862 ንጉሥ ዊልሄልም ቀዳማዊ ጠቅላይ ሚኒስትር አደረገው\n" +
            "• ጀርመን በፕሩሺያ መሪነት እንድትዋሃድ ፈለገ\n\n" +
            "ፖሊሲዎቹ፦\n" +
            "• ሪልፖሊቲክ — 'የእውነታ ፖለቲካ' — በማንኛውም መንገድ ግብን ማሳካት\n" +
            "• ደምና ብረት — ወታደራዊ ኃይል በመጠቀም ማዋሃድ\n\n" +
            "የፕሩሺያ ጥንካሬዎች፦\n" +
            "• በሩር ሸለቆ ብዙ ከሰል\n" +
            "• ብረትና ብረት ማቀነባበሪያ ኢንዱስትሪ\n" +
            "• ጠንካራ ጦር",
        },
        {
          id: "n4-4",
          title: "⚔ The Three Wars of German Unification",
          titleAm: "⚔ ሦስቱ የጀርመን ውህደት ጦርነቶች",
          body:
            "Bismarck unified Germany through THREE wars:\n\n" +
            "1) DANISH WAR (1864) — against Denmark\n" +
            "• Over duchies of Schleswig and Holstein\n" +
            "• Result: Schleswig → Prussia; Holstein → Austria\n\n" +
            "2) SEVEN WEEKS WAR (1866) — against Austria\n" +
            "• About LEADERSHIP of Germany\n" +
            "• Prussia supported by Italy; small German states on Austria's side\n" +
            "• Battle of Königgrätz (Sadowa), 3 July 1866 — Prussia won quickly\n" +
            "• RESULTS: Holstein annexed by Prussia; Austria excluded from German affairs; Venetia given to Italy; NORTH GERMAN CONFEDERATION formed under Prussia\n\n" +
            "3) FRANCO-PRUSSIAN WAR (1870–71) — against France\n" +
            "• Bismarck published the EMS TELEGRAM (edited to provoke France)\n" +
            "• France declared war; Southern German states joined Prussia\n" +
            "• Battle of Sedan, 2 Sept 1870 — French defeated\n" +
            "• Treaty of Frankfurt (10 May 1871): France ceded ALSACE and LORRAINE; paid huge indemnities\n" +
            "• 1871 — GERMAN EMPIRE proclaimed at Versailles; King Wilhelm of Prussia = Kaiser",
          bodyAm:
            "ቢስማርክ ጀርመንን በሦስት ጦርነቶች አዋሃደ፦\n\n" +
            "1) የዴንማርክ ጦርነት (1864)\n" +
            "• ስለ ሽሌስቪግና ሆልስታይን\n" +
            "• ውጤት፦ ሽሌስቪግ → ፕሩሺያ፤ ሆልስታይን → ኦስትሪያ\n\n" +
            "2) የሰባት ሳምንት ጦርነት (1866) — ከኦስትሪያ ጋር\n" +
            "• ስለ ጀርመን መሪነት\n" +
            "• ፕሩሺያ በጣሊያን ተደገፈች\n" +
            "• ውጤቶች፦ ሆልስታይን ተቀላቀለ፤ ኦስትሪያ ተወገደች፤ ቬኒስ ለጣሊያን፤ ሰሜን ጀርመን ኮንፈደሬሽን ተፈጠረ\n\n" +
            "3) የፍራንኮ-ፕሩሺያ ጦርነት (1870–71) — ከፈረንሳይ ጋር\n" +
            "• ቢስማርክ የኤምስ ቴሌግራምን አሳወቀ\n" +
            "• ፈረንሳይ ጦርነት አወጀች\n" +
            "• በሴዳን ፈረንሳይ ተሸነፈች\n" +
            "• ስምምነት፦ አልሳስና ሎሬን ለጀርመን\n" +
            "• 1871 — የጀርመን ግዛት በቨርሳይ ታወጀ",
        },
        {
          id: "n4-5",
          title: "📌 KEY TERM — Ems Telegram",
          titleAm: "📌 ቁልፍ ቃል — የኤምስ ቴሌግራም",
          body:
            "EMS TELEGRAM = a carefully EDITED version of a conversation between King Wilhelm and the French ambassador.\n\n" +
            "• Bismarck published it to PROVOKE France into declaring war\n" +
            "• It inflamed popular sentiment on both sides in favor of war\n" +
            "• Result: France declared war on Prussia (1870)\n\n" +
            "⚠ This is a classic example of Bismarck's REALPOLITIK — manipulating events to achieve his goal.",
          bodyAm:
            "የኤምስ ቴሌግራም = በንጉሥ ዊልሄልምና በፈረንሳይ አምባሳደር መካከል የተደረገ ውይይት በጥንቃቄ የተስተካከለ ቅጂ።\n\n" +
            "• ቢስማርክ ፈረንሳይ ጦርነት እንድትነሳ ለማነሳሳት አሳወቀው\n" +
            "⚠ ይህ የቢስማርክ ሪልፖሊቲክ ምሳሌ ነው።",
        },
        {
          id: "n4-6",
          title: "⚠ EXAM TRAP — Italy vs Germany Unification",
          titleAm: "⚠ የፈተና ወጥመድ — ጣሊያን vs ጀርመን",
          body:
            "| Feature | Italy | Germany |\n" +
            "|---------|-------|--------|\n" +
            "| Main leader | Cavour (planner) | Bismarck (Iron Chancellor) |\n" +
            "| Method | 'From below' (Garibaldi) + 'from above' (Cavour) | 'From the TOP DOWN' (Prussia) |\n" +
            "| Key state | Sardinia (Piedmont) | Prussia |\n" +
            "| Main enemy | Austria | Austria, then France |\n" +
            "| Wars | 1859 vs Austria | 1864 Denmark, 1866 Austria, 1870–71 France |\n" +
            "| Year unified | 1861 (Rome added 1870) | 1871 |\n\n" +
            "⚠ MCQ TRAP: Both unified around the same time, but by DIFFERENT methods. Germany = top-down military; Italy = mixture of below + above.",
          bodyAm:
            "| ባህሪ | ጣሊያን | ጀርመን |\n" +
            "|------|-------|--------|\n" +
            "| ዋና መሪ | ካቮር | ቢስማርክ |\n" +
            "| ዘዴ | 'ከታች' + 'ከላይ' | 'ከላይ ወደ ታች' |\n" +
            "| ዋና ግዛት | ሳርዲኒያ | ፕሩሺያ |\n" +
            "| ዋና ጠላት | ኦስትሪያ | ኦስትሪያ፣ ከዚያ ፈረንሳይ |\n" +
            "| የተዋሃደበት | 1861 | 1871 |\n\n" +
            "⚠ ሁለቱም በተመሳሳይ ጊዜ ተዋሃዱ፣ ግን በተለያየ ዘዴ።",
        },
        {
          id: "n4-7",
          title: "🧠 Memory Hook — Germany's Three Wars",
          titleAm: "🧠 የማስታወሻ ዘዴ",
          body:
            "Remember the three wars in order:\n\n" +
            "DENMARK (1864) → AUSTRIA (1866) → FRANCE (1870–71)\n\n" +
            "Mnemonic: 'D-A-F' = 'Danes Are Finished'\n\n" +
            "Or: 'First the small (Denmark), then the rival (Austria), then the big (France).'",
          bodyAm:
            "ሦስቱን ጦርነቶች በቅደም ተከተል አስታውስ፦\n\n" +
            "ዴንማርክ (1864) → ኦስትሪያ (1866) → ፈረንሳይ (1870–71)\n\n" +
            "መጀመሪያ ትንሹ (ዴንማርክ)፣ ከዚያ ተቀናቃኙ (ኦስትሪያ)፣ ከዚያ ትልቁ (ፈረንሳይ)።",
        },
      ],
    },

    // ============================================================
    // 1.2.3 THE AMERICAN CIVIL WAR
    // ============================================================
    {
      id: "n5",
      title: "1.2.3 The American Civil War (1861–1865)",
      titleAm: "1.2.3 የአሜሪካ የእርስ በርስ ጦርነት",
      body:
        "Abatu, the American Civil War was fought between the NORTHERN states (the UNION) and the SOUTHERN states (the CONFEDERATES) from 1861 to 1865. The core issue was SLAVERY.",
      bodyAm:
        "አባቱ፣ የአሜሪካ የእርስ በርስ ጦርነት በሰሜን (ዩኒየን) እና በደቡብ (ኮንፈደሬትስ) መካከል ከ1861 እስከ 1865 ተካሄደ። ዋናው ጉዳይ ባርነት ነበር።",
      children: [
        {
          id: "n5-1",
          title: "⚔ Causes of the Civil War",
          titleAm: "⚔ የጦርነቱ ምክንያቶች",
          body:
            "For nearly a century, North and South clashed over:\n" +
            "• ECONOMIC INTERESTS — North = industry; South = cotton plantations\n" +
            "• CULTURAL VALUES — North = diverse immigrants; South = white supremacy\n" +
            "• FEDERAL POWER vs STATES' RIGHTS\n" +
            "• SLAVERY — the MOST IMPORTANT issue\n\n" +
            "THE ECONOMIC ROOT:\n" +
            "• Southern economy depended on COTTON\n" +
            "• White plantation owners viewed SLAVERY as essential for survival\n" +
            "• Northern economy was INDUSTRIAL — hired factory workers at low wages, less need for slaves",
          bodyAm:
            "ሰሜንና ደቡብ ስለሚከተሉት ጉዳዮች ተጣሉ፦\n" +
            "• የኢኮኖሚ ፍላጎቶች\n" +
            "• ባህላዊ እሴቶች\n" +
            "• የፌዴራል ሥልጣን vs የግዛቶች መብት\n" +
            "• ባርነት — በጣም አስፈላጊው ጉዳይ\n\n" +
            "የኢኮኖሚ ሥር፦\n" +
            "• የደቡብ ኢኮኖሚ በጥጥ ላይ የተመሠረተ\n" +
            "• የሰሜን ኢኮኖሚ ኢንዱስትሪያዊ",
        },
        {
          id: "n5-2",
          title: "📌 KEY TERM — Abolitionism",
          titleAm: "📌 ቁልፍ ቃል — አቦሊሽኒዝም",
          body:
            "ABOLITIONISM = the movement to END slavery.\n\n" +
            "• Strong in the North\n" +
            "• Gathered momentum in the 1830s\n" +
            "• Famous leaders: William Lloyd Garrison, Frederick Douglass\n\n" +
            "⚠ Many in the North came to view slavery as not just socially unjust, but MORALLY WRONG.",
          bodyAm:
            "አቦሊሽኒዝም = ባርነትን የማስወገድ ንቅናቄ።\n\n" +
            "• በሰሜን ጠንካራ\n" +
            "• በ1830ዎቹ ኃይል አገኘ\n" +
            "• ታዋቂ መሪዎች፦ ዊልያም ሎይድ ጋሪሰን፣ ፍሬደሪክ ዳግላስ",
        },
        {
          id: "n5-3",
          title: "👤 Abraham Lincoln and the Outbreak",
          titleAm: "👤 አብርሃም ሊንከንና ጦርነቱ መጀመር",
          body:
            "• 1860 — ABRAHAM LINCOLN won the presidential election\n" +
            "• Lincoln and the Republicans promised to PREVENT the spread of slavery into new territories\n" +
            "• Shortly after, ELEVEN southern states formed the CONFEDERACY, led by JEFFERSON DAVIS\n" +
            "• They declared SECESSION (leaving the Union)\n" +
            "• 1861 — CIVIL WAR BROKE OUT\n\n" +
            "⚠ IMPORTANT: The southern states did NOT aim to take over the US government. They wanted to declare themselves INDEPENDENT.",
          bodyAm:
            "• 1860 — አብርሃም ሊንከን ፕሬዚዳንት ሆነ\n" +
            "• ሊንከን ባርነት እንዳይስፋፋ ቃል ገባ\n" +
            "• አስራ አንድ ደቡባዊ ግዛቶች ኮንፈደሬሲን መሠረቱ\n" +
            "• መለየት አወጁ\n" +
            "• 1861 — ጦርነት ተጀመረ",
        },
        {
          id: "n5-4",
          title: "📜 Turning Point — Emancipation Proclamation (1863)",
          titleAm: "📜 የለውጥ ነጥብ — የነጻነት አዋጅ",
          body:
            "• January 1863 — Lincoln issued the EMANCIPATION PROCLAMATION\n" +
            "• Freed slaves in rebelling parts of the country\n" +
            "• Also issued the HOMESTEAD LAW\n" +
            "• Many slaves from southern states flocked to the North and joined the Federal army\n" +
            "• This was a TURNING POINT in the war\n\n" +
            "• 14 April 1865 — Lincoln ASSASSINATED by John Wilkes Booth (Confederate sympathizer)\n" +
            "• 6 November 1865 — Last Confederate surrender",
          bodyAm:
            "• ጃንዋሪ 1863 — ሊንከን የነጻነት አዋጅ አወጣ\n" +
            "• በሚያምጡ ክፍሎች ባሪያዎችን ነጻ አወጣ\n" +
            "• ብዙ ባሪያዎች ወደ ሰሜን ሸሹና ጦሩን ተቀላቀሉ\n" +
            "• ይህ የለውጥ ነጥብ ነበር\n\n" +
            "• 14 ኤፕሪል 1865 — ሊንከን ተገደለ\n" +
            "• 6 ኖቬምበር 1865 — የመጨረሻው የኮንፈደሬት መስገድ",
        },
        {
          id: "n5-5",
          title: "📋 Results of the Civil War",
          titleAm: "📋 የጦርነቱ ውጤቶች",
          body:
            "• 6 December 1865 — THIRTEENTH AMENDMENT adopted → officially OUTLAWED slavery\n" +
            "• Collapse of the plantation economy in the South\n" +
            "• Rise of industrialization, cities, railroads, banks, factories in the South (slow progress)\n" +
            "• Constitutional changes became a point of departure in the struggle for EQUAL CIVIL AND HUMAN RIGHTS\n\n" +
            "⚠ MCQ TRAP: The Civil War did NOT bring equality between white and Black Americans immediately. It ended SLAVERY — but segregation and discrimination continued for a century.",
          bodyAm:
            "• 6 ዲሴምበር 1865 — አስራ ሦስተኛው ማሻሻያ → ባርነት በይፋ ተከለከለ\n" +
            "• የደቡብ እርሻ ኢኮኖሚ ወደቀ\n" +
            "• በደቡብ ኢንዱስትሪ እድገት (ቀስ ብሎ)\n" +
            "• ለእኩል መብት � struggle መነሻ ሆነ\n\n" +
            "⚠ ጦርነቱ ወዲያውኑ እኩልነት አላመጣም — ባርነትን ገደለ፣ መድልዎ ግን ቀጠለ።",
        },
        {
          id: "n5-6",
          title: "⚠ EXAM TRAP — Causes of the Civil War",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "The #1 cause was SLAVERY.\n\n" +
            "• Economic differences (industry vs. cotton) → made slavery central\n" +
            "• States' rights → the South used this argument to defend slavery\n" +
            "• Cultural values → North = diverse; South = white supremacy\n\n" +
            "⚠ MCQ TRAP: 'States' rights' was the SOUTH's argument — but the underlying issue was SLAVERY. Don't be tricked into choosing 'states' rights' as the MAIN cause.",
          bodyAm:
            "ቁልፍ ምክንያት ባርነት ነበር።\n\n" +
            "⚠ 'የግዛቶች መብት' የደቡብ ክርክር ነበር — ግን ዋናው ጉዳይ ባርነት ነበር።",
        },
      ],
    },

    // ============================================================
    // 1.2.4 NATIONALISM AND THE "EASTERN QUESTION"
    // ============================================================
    {
      id: "n6",
      title: "1.2.4 Nationalism and the 'Eastern Question'",
      titleAm: "1.2.4 ብሔርተኝነትና 'የምስራቅ ጥያቄ'",
      body:
        "Abatu, the EASTERN QUESTION was a diplomatic problem in the 19th and early 20th centuries. It arose from THREE things:\n" +
        "1) Rise of nationalist feelings among the Balkan peoples\n" +
        "2) The declining Turkish (Ottoman) Empire\n" +
        "3) Divergent interests of Great Powers in the Near East",
      bodyAm:
        "አባቱ፣ 'የምስራቅ ጥያቄ' በ19ኛውና በ20ኛው ክፍለ ዘመን መጀመሪያ የነበረ ዲፕሎማሲያዊ ችግር ነበር። ከሦስት ነገሮች ተነሳ፦\n" +
        "1) በባልካን ሕዝቦች መካከል ብሔርተኝነት መነሳት\n" +
        "2) የኦቶማን ግዛት ውድቀት\n" +
        "3) የታላላቆቹ ኃያላን ተቃራኒ ፍላጎቶች",
      children: [
        {
          id: "n6-1",
          title: "🌍 The Balkans — 'Powder Keg of Europe'",
          titleAm: "🌍 ባልካን — 'የአውሮፓ ባሩድ ሳጥን'",
          body:
            "• The Balkans were part of the DECAYING Ottoman Empire\n" +
            "• Home to MULTI-ETHNIC peoples: Serbs, Bulgarians, Rumanians, Greeks\n" +
            "• Early 1800s — discontent grew with the rise of nationalism\n" +
            "• By 1830 — Greece became independent; Serbia achieved some self-rule\n" +
            "• 1850s–60s — independence movements grew stronger\n" +
            "• 1875 — revolts broke out in several parts\n" +
            "• 1878 — Romania, Montenegro, Serbia got independence\n" +
            "• 1878–1913 — Ottoman Empire reduced in size as Great Britain, Austria, France, Italy shared its territories",
          bodyAm:
            "• ባልካን የኦቶማን ግዛት አካል ነበር\n" +
            "• ብዙ ብሔሮች፦ ሰርቦች፣ ቡልጋሪያዎች፣ ሩማኒያዎች፣ ግሪኮች\n" +
            "• በ1830 ግሪክ ነጻ ሆነች\n" +
            "• በ1878 ሩማኒያ፣ ሞንቴኔግሮ፣ ሰርቢያ ነጻ ሆኑ",
        },
        {
          id: "n6-2",
          title: "🏛 Great Powers and Their Interests",
          titleAm: "🏛 ታላላቆቹ ኃያላንና ፍላጎቶቻቸው",
          body:
            "RUSSIA:\n" +
            "• Supported Balkan nationalists\n" +
            "• Reasons: Slavs (like Bulgarians & Serbs); Orthodox Christians (like many Balkan groups); wanted access to Black Sea & Mediterranean\n\n" +
            "BRITAIN:\n" +
            "• Main concern: protect interests in INDIA\n" +
            "• Did NOT want Russians in the Mediterranean (threat to sea power)\n" +
            "• Supported the TURKS to suppress nationalist movements\n\n" +
            "AUSTRIA:\n" +
            "• Supported the Ottomans\n" +
            "• Did NOT want Russian expansion in the region",
          bodyAm:
            "ሩሲያ፦\n" +
            "• የባልካን ብሔርተኞችን ደገፈች\n" +
            "• ስላቪክ ወንድማማችነት፤ ኦርቶዶክስ ክርስትና፤ የባህር መውጫ ፍላጎት\n\n" +
            "ብሪታንያ፦\n" +
            "• በህንድ ያላትን ፍላጎት መጠበቅ\n" +
            "• ሩሲያ በሜዲትራኒያን እንዳትገባ\n" +
            "• ቱርኮችን ደገፈች\n\n" +
            "ኦስትሪያ፦\n" +
            "• ኦቶማኖችን ደገፈች\n" +
            "• የሩሲያ መስፋፋትን ተቃወመች",
        },
        {
          id: "n6-3",
          title: "⚠ EXAM TRAP — Eastern Question",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• The 'Eastern Question' is about the DECLINING OTTOMAN EMPIRE — not about Asia in general.\n" +
            "• RUSSIA supported Balkan nationalists (Slavs + Orthodox + sea access).\n" +
            "• BRITAIN supported the TURKS (to protect India and sea power).\n" +
            "• AUSTRIA supported the Ottomans (to stop Russia).\n\n" +
            "⚠ MCQ TRAP: Britain did NOT support Balkan independence — it supported the Turks to SUPPRESS nationalist movements.",
          bodyAm:
            "• 'የምስራቅ ጥያቄ' ስለ ኦቶማን ግዛት ውድቀት ነው\n" +
            "• ሩሲያ ባልካን ብሔርተኞችን ደገፈች\n" +
            "• ብሪታንያ ቱርኮችን ደገፈች\n" +
            "• ኦስትሪያ ኦቶማኖችን ደገፈች\n\n" +
            "⚠ ብሪታንያ የባልካን ነጻነትን አልደገፈችም — ቱርኮችን ደገፈች።",
        },
      ],
    },

    // ============================================================
    // UNIT SUMMARY + EXAM TRAPS
    // ============================================================
    {
      id: "nSummary",
      title: "Unit Summary — The Big Picture",
      titleAm: "የክፍሉ ማጠቃለያ",
      body:
        "1. CAPITALISM grew from the Industrial Revolution (England, 18th c.). Private ownership + profit + free market. Transatlantic slave trade provided 'capital' for industrialization.\n\n" +
        "2. NATIONALISM = loyalty and pride in one's nation. It has positive (unity) and negative (aggression) sides.\n\n" +
        "3. ITALY unified through Mazzini (ideas), Cavour (politics), Garibaldi (military). Kingdom proclaimed 1861; Rome added 1870.\n\n" +
        "4. GERMANY unified 'from the top down' by Bismarck's Prussia through three wars: Denmark (1864), Austria (1866), France (1870–71). Empire proclaimed 1871.\n\n" +
        "5. AMERICAN CIVIL WAR (1861–65) was fought over SLAVERY. North (Union) won; 13th Amendment abolished slavery.\n\n" +
        "6. EASTERN QUESTION = diplomatic problem over the declining Ottoman Empire and rising Balkan nationalism. Russia backed Balkan nationalists; Britain backed the Turks.",
      bodyAm:
        "1. ካፒታሊዝም ከኢንዱስትሪ አብዮት አደገ።\n" +
        "2. ብሔርተኝነት = ለብሔር ታማኝነትና ኩራት።\n" +
        "3. ጣሊያን በማዚኒ፣ ካቮር፣ ጋሪባልዲ ተዋሃደች። 1861 መንግሥት፤ 1870 ሮም።\n" +
        "4. ጀርመን በቢስማርክ 'ከላይ ወደ ታች' በሦስት ጦርነቶች ተዋሃደች። 1871 ግዛት።\n" +
        "5. የአሜሪካ ጦርነት (1861–65) ስለ ባርነት። ሰሜን አሸነፈ፤ 13ኛው ማሻሻያ ባርነትን አስወገደ።\n" +
        "6. የምስራቅ ጥያቄ = ስለ ኦቶማን ግዛት ውድቀትና የባልካን ብሔርተኝነት።",
    },
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 1",
      titleAm: "የተለምዱ የፈተና ወጥመዶች",
      body:
        "1) 'Public property' is NOT a feature of capitalism — it's socialism/command economy.\n" +
        "2) The Congress of Vienna (1815) tried to SUPPRESS nationalism, not promote it.\n" +
        "3) Cavour is the 'architect' of Italian unity — not Garibaldi, not Mazzini.\n" +
        "4) Zollverein (1834) was an ECONOMIC union — the first step, not political unity.\n" +
        "5) Bismarck unified Germany 'from the TOP DOWN' — not by revolution.\n" +
        "6) The Ems Telegram was EDITED by Bismarck to provoke France.\n" +
        "7) The American Civil War was about SLAVERY first — 'states' rights' was the South's argument.\n" +
        "8) The 13th Amendment (1865) abolished slavery — but equality did NOT come immediately.\n" +
        "9) In the Eastern Question, Britain supported the TURKS, not Balkan nationalists.\n" +
        "10) Russia supported Balkan nationalists for Slavic + Orthodox + sea-access reasons.",
      bodyAm:
        "1) 'የሕዝብ ንብረት' የካፒታሊዝም ባህሪ አይደለም።\n" +
        "2) የቪየና ኮንግረስ ብሔርተኝነትን ለመግታት ሞከረ።\n" +
        "3) ካቮር 'አርክቴክት' ነው።\n" +
        "4) ዞልቨራይን ኢኮኖሚያዊ ነበር።\n" +
        "5) ቢስማርክ 'ከላይ ወደ ታች' አዋሃደ።\n" +
        "6) የኤምስ ቴሌግራም በቢስማርክ ተስተካክሎ ነበር።\n" +
        "7) የአሜሪካ ጦርነት ስለ ባርነት ነበር።\n" +
        "8) 13ኛው ማሻሻያ ባርነትን አስወገደ — እኩልነት ግን ወዲያውኑ አልመጣም።\n" +
        "9) ብሪታንያ ቱርኮችን ደገፈች።\n" +
        "10) ሩሲያ ባልካን ብሔርተኞችን ደገፈች።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Which one of the following is the first European country to be industrialized?", options: ["France", "Belgium", "Germany", "England"], answer: "3", explanation: "England was the first to industrialize in the 18th century. Then Belgium, France, and German states followed." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "The two social classes formed as a result of the Industrial Revolution were:", options: ["The peasantry and the feudal lord", "The capitalist and the bourgeoisie", "The proletariat and the capitalist", "The feudal lord and the bourgeoisie"], answer: "2", explanation: "Industrialization created the PROLETARIAT (workers) and the BOURGEOISIE/CAPITALISTS (owners of production)." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Which of the following is NOT a characteristic of capitalism?", options: ["Profit maximization", "Public property", "Market economy", "Competition"], answer: "1", explanation: "PUBLIC PROPERTY is a feature of socialism/command economy, NOT capitalism. Capitalism = private ownership." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Which of the following is correct about capitalism? It is", options: ["a system in which the government controls the entire business.", "an economic system in which factories are owned by the working class.", "a system guided by a command economy and controlled by a government.", "a system where productions are privately owned and operated for profit."], answer: "3", explanation: "Capitalism = private ownership + profit motive + free market." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "The new sources of energy that replaced wind and water during the Industrial Revolution were:", options: ["Oil and gas", "Coal and steam", "Electricity and nuclear", "Solar and wind"], answer: "1", explanation: "Coal and steam replaced wind and water power in the Industrial Revolution." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "The factory system replaced the:", options: ["Domestic system", "Feudal system", "Slave system", "Market system"], answer: "0", explanation: "The factory system replaced the domestic system (home workshops)." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "The transatlantic slave trade was important in the development of capitalism because it:", options: ["ended slavery in Europe", "provided capital for European industrialization", "created the factory system", "replaced the domestic system"], answer: "1", explanation: "Riches from slave trade and plantations (called 'capital') funded European industrialization." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Which city was enriched by the slave trade and became a major British port?", options: ["Manchester", "Liverpool", "London", "Birmingham"], answer: "1", explanation: "LIVERPOOL was enriched by the slave trade. Manchester grew from textile mills." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Nationalism is best defined as:", options: ["A feeling of belonging and loyalty to a nation", "A system of government", "An economic system", "A military alliance"], answer: "0", explanation: "Nationalism = a feeling of belonging and loyalty that makes people think of themselves as a nation." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Which of the following helped nationalism grow before the 19th century?", options: ["The Renaissance", "The Protestant Reformation", "Expansion of commerce", "All of the above"], answer: "3", explanation: "All three helped: Renaissance (national language), Reformation (broke religious unity), commerce (built strong states)." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The main objective of the Congress of Vienna (1815) was to:", options: ["Promote nationalism", "Reverse changes brought by Napoleon and restore monarchies", "Unite Italy and Germany", "End the slave trade"], answer: "1", explanation: "The Congress of Vienna was CONSERVATIVE — it tried to reverse Napoleon's changes and restore monarchies." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "In 1815, Italy was:", options: ["A unified country", "Fragmented into several states", "Part of France", "Part of Germany"], answer: "1", explanation: "Italy was left completely fragmented by the Congress of Vienna in 1815." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Which was NOT an obstacle to Italian unity in 1815?", options: ["Austrian occupation of Lombardy and Venice", "The Papal States", "The existence of several independent states", "The unification of Germany"], answer: "3", explanation: "German unification was NOT an obstacle to Italian unity. The three obstacles were Austria, the Papal States, and independent states." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Who founded 'Young Italy' in 1831?", options: ["Cavour", "Garibaldi", "Mazzini", "Victor Emmanuel II"], answer: "2", explanation: "Giuseppe Mazzini founded Young Italy in 1831 to promote a united Italian republic." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Who led the Red Shirts in southern Italy?", options: ["Mazzini", "Cavour", "Garibaldi", "Napoleon III"], answer: "2", explanation: "Giuseppe Garibaldi led the Red Shirts and conquered Sicily and southern Italy." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Who became the first king of the unified Kingdom of Italy in 1861?", options: ["Garibaldi", "Cavour", "Mazzini", "Victor Emmanuel II"], answer: "3", explanation: "King Victor Emmanuel II of Sardinia became the first king of the unified Kingdom of Italy in 1861." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "The Kingdom of Italy was proclaimed in:", options: ["1859", "1861", "1866", "1870"], answer: "1", explanation: "The Kingdom of Italy was proclaimed in 1861." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Rome became the capital of the Kingdom of Italy in:", options: ["1861", "1866", "1870", "1871"], answer: "3", explanation: "Rome was taken in 1870 and proclaimed capital in 1871 — completing Italian unification." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "The German Confederation created in 1815 consisted of:", options: ["2 states", "10 states", "39 separate autonomous states", "50 states"], answer: "2", explanation: "The Congress of Vienna created the German Confederation of 39 separate autonomous states." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "The Zollverein (1834) was:", options: ["A military alliance", "An economic alliance (customs union) between German states", "A political party", "A treaty with France"], answer: "1", explanation: "The Zollverein was an economic alliance that removed tariffs between German states — the first step toward unity." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Who was known as the 'Iron Chancellor'?", options: ["Wilhelm I", "Otto von Bismarck", "Napoleon III", "Cavour"], answer: "1", explanation: "Otto von Bismarck was known as the Iron Chancellor." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "Bismarck's 'Blood and Iron' policy meant using:", options: ["Diplomacy only", "Military power to achieve unification", "Economic pressure only", "Religious influence"], answer: "1", explanation: "'Blood and Iron' = using military power to achieve German unification." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "Realpolitik means:", options: ["Politics based on ideals", "Politics of reality — pursue goals by any means necessary", "Democratic politics", "Religious politics"], answer: "1", explanation: "Realpolitik = 'politics of reality' — pursue goals by any means necessary (war, lies, breaking treaties)." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "The first war of German unification (1864) was against:", options: ["Austria", "France", "Denmark", "Russia"], answer: "2", explanation: "The Danish War of 1864 was the first war of German unification." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "The Seven Weeks War (1866) was fought between:", options: ["Prussia and France", "Prussia and Denmark", "Prussia and Austria", "Austria and France"], answer: "2", explanation: "The Seven Weeks War of 1866 was fought between Prussia and Austria over leadership of Germany." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "The Franco-Prussian War was fought in:", options: ["1864", "1866", "1870–71", "1878"], answer: "2", explanation: "The Franco-Prussian War was fought in 1870–71." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "The German Empire was proclaimed in 1871 at:", options: ["Berlin", "Versailles", "Frankfurt", "Vienna"], answer: "1", explanation: "The German Empire was proclaimed at the Palace of Versailles, outside Paris, in 1871." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "The American Civil War was fought between:", options: ["North and South", "East and West", "USA and Britain", "USA and France"], answer: "0", explanation: "The Civil War was fought between the Northern states (Union) and Southern states (Confederates)." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "The American Civil War lasted from:", options: ["1855–1860", "1861–1865", "1865–1870", "1870–1875"], answer: "1", explanation: "The American Civil War lasted from 1861 to 1865." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "The main cause of the American Civil War was:", options: ["Taxation", "Slavery", "Territorial expansion", "Religion"], answer: "1", explanation: "SLAVERY was the main cause of the American Civil War." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "Who was the president of the United States during the Civil War?", options: ["George Washington", "Abraham Lincoln", "Jefferson Davis", "Thomas Jefferson"], answer: "1", explanation: "Abraham Lincoln was president during the Civil War." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "The southern states that left the Union formed the:", options: ["Union", "Confederacy", "Republic", "Federation"], answer: "1", explanation: "Eleven southern states formed the CONFEDERACY, led by Jefferson Davis." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "The Emancipation Proclamation was issued in:", options: ["1861", "1863", "1865", "1867"], answer: "1", explanation: "Lincoln issued the Emancipation Proclamation in January 1863." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "The 13th Amendment (1865) did what?", options: ["Gave women the vote", "Officially outlawed slavery", "Ended the Civil War", "Created the Confederacy"], answer: "1", explanation: "The 13th Amendment, adopted 6 December 1865, officially outlawed slavery." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "The 'Eastern Question' was about:", options: ["The decline of the Ottoman Empire", "The unification of Italy", "The American Civil War", "The Industrial Revolution"], answer: "0", explanation: "The Eastern Question was a diplomatic problem over the declining Ottoman Empire and Balkan nationalism." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "The Balkans were known as the:", options: ["Powder keg of Europe", "Cradle of capitalism", "Home of the Renaissance", "Center of industry"], answer: "0", explanation: "The Balkans were called the 'powder keg of Europe' due to nationalist tensions." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "Which great power supported the Balkan nationalists?", options: ["Britain", "Austria", "Russia", "Germany"], answer: "2", explanation: "Russia supported Balkan nationalists for Slavic, Orthodox, and sea-access reasons." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "Which great power supported the Ottoman Turks to suppress nationalist movements?", options: ["Russia", "Britain", "Serbia", "Greece"], answer: "1", explanation: "Britain supported the Turks to protect its interests in India and prevent Russian expansion." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "Abolitionism was the movement to:", options: ["End slavery", "Unify Germany", "Spread capitalism", "Promote nationalism"], answer: "0", explanation: "Abolitionism was the movement to end slavery, strong in the North." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "Which of the following was a famous abolitionist leader?", options: ["Bismarck", "Cavour", "Frederick Douglass", "Garibaldi"], answer: "2", explanation: "Frederick Douglass (and William Lloyd Garrison) were famous abolitionist leaders." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Why did the Industrial Revolution first start in England?", options: ["England had the most colonies", "England had coal, iron, capital, and stable government", "England had the largest army", "England was the most religious country"], answer: "1", explanation: "England had key advantages: coal and iron deposits, capital from trade, stable government, and a large labor force." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "How did the transatlantic slave trade contribute to capitalism?", options: ["It ended feudalism", "It provided capital that funded industrialization", "It created the factory system", "It replaced the domestic system"], answer: "1", explanation: "Riches from the slave trade and plantations (called 'capital') funded European industrialization." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "The proletariat refers to:", options: ["The owners of factories", "The working class", "The nobility", "The clergy"], answer: "1", explanation: "PROLETARIAT = the working class who receive wages for their labor." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "The bourgeoisie refers to:", options: ["The working class", "The owners of the means of production (capitalists)", "The peasants", "The clergy"], answer: "1", explanation: "BOURGEOISIE = the capitalist class who own the means of production." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "Which of the following is a difference between capitalism and a command economy?", options: ["Capitalism has private ownership; command economy has state ownership", "Capitalism has government-set prices; command economy has market prices", "Capitalism restricts competition; command economy encourages it", "Capitalism has no profit motive; command economy has profit motive"], answer: "0", explanation: "Capitalism = private ownership; command economy = state ownership. The other options are reversed." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "Cavour's main strategy for Italian unification was:", options: ["Leading military campaigns personally", "Building alliances and strengthening Piedmont economically and militarily", "Writing revolutionary literature", "Appealing to the pope"], answer: "1", explanation: "Cavour built alliances (especially with France) and strengthened Piedmont's economy, army, and education." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "In the secret agreement of 1858, Cavour promised France:", options: ["Lombardy and Venetia", "Nice and Savoy", "Rome and the Papal States", "Sicily and Sardinia"], answer: "1", explanation: "Cavour promised Nice and Savoy to France in return for French troops against Austria." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "Garibaldi handed over power to:", options: ["Mazzini", "Cavour", "Victor Emmanuel II", "Napoleon III"], answer: "2", explanation: "Garibaldi handed over power to Victor Emmanuel II of Sardinia, helping unify Italy." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "Which region was added to Italy in 1866 after Austria's defeat in the Seven Weeks War?", options: ["Rome", "Venetia", "Sicily", "Sardinia"], answer: "1", explanation: "Italy gained Venetia in 1866 after Austria's defeat in the Seven Weeks War." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Why did France withdraw its troops from Rome in 1870?", options: ["Because of the Franco-Prussian War", "Because of a treaty with Italy", "Because the pope asked them to leave", "Because of the American Civil War"], answer: "0", explanation: "When the Franco-Prussian War broke out in 1870, French armies withdrew from Rome, allowing Italy to take Rome." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "Which was a problem Italy faced AFTER unification?", options: ["Tension between the industrialized North and agrarian South", "The Mafia", "Hostility between the Church and the government", "All of the above"], answer: "3", explanation: "All were post-unification problems: regional division, North-South tension, Church-state hostility, and the Mafia." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "The North German Confederation was formed after:", options: ["The Danish War", "The Seven Weeks War", "The Franco-Prussian War", "The Congress of Vienna"], answer: "1", explanation: "The North German Confederation was formed after the Seven Weeks War (1866) under Prussian leadership." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "The Ems Telegram was significant because it:", options: ["Ended the Franco-Prussian War", "Provoked France to declare war on Prussia", "Created the German Confederation", "Ended the Seven Weeks War"], answer: "1", explanation: "Bismarck edited and published the Ems Telegram to provoke France into declaring war in 1870." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "As a result of the Treaty of Frankfurt (1871), France ceded to Germany:", options: ["Alsace and Lorraine", "Nice and Savoy", "Venetia and Lombardy", "Holstein and Schleswig"], answer: "0", explanation: "France ceded Alsace and Lorraine (rich in coal and iron) to Germany in the Treaty of Frankfurt." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "Which of the following was NOT a force opposed to German unification before 1870?", options: ["Foreign powers (Austria, Russia, France)", "Small German states fearing Prussian domination", "Catholic states fearing Protestant domination", "The Zollverein"], answer: "3", explanation: "The Zollverein PROMOTED unity economically. It was not an obstacle." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "Prussia's main economic advantage in the 19th century was:", options: ["Large overseas colonies", "Coal deposits in the Ruhr Valley and iron/steel industry", "Control of the Mediterranean", "A large navy"], answer: "1", explanation: "Prussia had large coal deposits in the Ruhr Valley and a flourishing iron and steel industry." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "Which statement about German unification is TRUE?", options: ["It was achieved by popular revolution", "It was achieved 'from the top down' by Prussian royal policy", "It was achieved by Mazzini's ideas", "It was achieved peacefully without war"], answer: "1", explanation: "German unification was achieved 'from the top down' — a product of Prussian royal policies and military force." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "The Southern German states joined Prussia in the Franco-Prussian War because:", options: ["They wanted to expand their territory", "They opposed French invasion", "They were forced by Austria", "They wanted to end the war quickly"], answer: "1", explanation: "The Southern German states (Bavaria, Wurtemberg, Baden, Hesse Darmstadt) entered the war on Prussia's side opposing French invasion." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "The American Civil War was NOT caused by:", options: ["Economic differences between North and South", "The issue of slavery", "Cultural differences between North and South", "A dispute over the Zollverein"], answer: "3", explanation: "The Zollverein was a German customs union — it had nothing to do with the American Civil War." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "The Northern economy was based more on:", options: ["Agriculture and cotton", "Industry", "Slavery", "Plantations"], answer: "1", explanation: "The Northern economy was based more on INDUSTRY than agriculture, so it had less need for slaves." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "The Southern economy depended mainly on:", options: ["Cotton and plantations", "Industry", "Fishing", "Mining"], answer: "0", explanation: "The Southern economy depended mainly on COTTON and plantations, which relied on slave labor." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Who led the Confederacy during the American Civil War?", options: ["Abraham Lincoln", "Jefferson Davis", "Frederick Douglass", "William Lloyd Garrison"], answer: "1", explanation: "Jefferson Davis, a rich plantation owner, led the Confederacy." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "The Emancipation Proclamation freed slaves in:", options: ["All states", "Only the North", "Rebelling parts of the country", "Only Washington D.C."], answer: "2", explanation: "The Emancipation Proclamation freed slaves in those parts of the country that rebelled against the United States." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "Which amendment officially outlawed slavery?", options: ["13th Amendment", "14th Amendment", "15th Amendment", "19th Amendment"], answer: "0", explanation: "The 13th Amendment, adopted 6 December 1865, officially outlawed slavery." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Which was a result of the American Civil War?", options: ["Immediate equality between white and Black Americans", "End of slavery in the USA", "Expansion of the plantation economy in the South", "Increase of political domination of the Confederates"], answer: "1", explanation: "The Civil War resulted in the END OF SLAVERY in the USA — but not immediate equality." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "Why did Russia support Balkan nationalists?", options: ["Because Russians were Slavs like Bulgarians and Serbs", "Because Russians were Orthodox Christians like many Balkan groups", "Because Russia wanted access to the Black Sea and Mediterranean", "All of the above"], answer: "3", explanation: "All three: Slavic brotherhood, Orthodox Christianity, and sea access." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "Why did Britain support the Ottoman Turks?", options: ["To protect its interests in India and prevent Russian expansion", "Because Britain was Orthodox", "Because Britain was Slavic", "Because Britain wanted to unify the Balkans"], answer: "0", explanation: "Britain's main concern was protecting its interests in India and preventing Russian expansion in the Mediterranean." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "By 1830, which Balkan country had become independent?", options: ["Serbia", "Bulgaria", "Greece", "Romania"], answer: "2", explanation: "By 1830, Greece became an independent state, and Serbia achieved some self-rule." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "Which countries got independence in 1878?", options: ["Greece, Serbia, Bulgaria", "Romania, Montenegro, Serbia", "Italy, Germany, France", "Albania, Bosnia, Croatia"], answer: "1", explanation: "Romania, Montenegro, and Serbia got their independence in 1878." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "The term 'Eastern Question' refers to the diplomatic problem created by:", options: ["The rise of Germany", "The decline of the Ottoman Empire and Balkan nationalism", "The American Civil War", "The Industrial Revolution"], answer: "1", explanation: "The Eastern Question arose from the declining Ottoman Empire, Balkan nationalism, and Great Power rivalries." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "The Congress of Vienna was dominated by which four powers?", options: ["Britain, Russia, Prussia, Austria", "Britain, France, Prussia, Austria", "Russia, France, Germany, Italy", "Britain, Russia, France, Italy"], answer: "0", explanation: "Britain, Russia, Prussia, and Austria drew up the Treaty of Vienna in 1815." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "Which of the following was a CONSERVATIVE force at the Congress of Vienna?", options: ["Nationalist revolutionaries", "Monarchies and old orders", "Working-class movements", "Young Italy"], answer: "1", explanation: "Conservatives at Vienna wanted to restore monarchies and reverse Napoleon's changes." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "The Red Shirts were:", options: ["Austrian soldiers", "Garibaldi's army in southern Italy", "Prussian soldiers", "French revolutionaries"], answer: "1", explanation: "Garibaldi led the Red Shirts, an army in bright red shirts, in southern Italy." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "Which was a positive development in Italy AFTER unification?", options: ["Introduction of a standard Italian language", "Growth of industrialization in the North", "Expansion of modern education", "All of the above"], answer: "3", explanation: "All were positive developments after unification." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Which battle in 1866 allowed Prussia to defeat Austria quickly?", options: ["Battle of Sedan", "Battle of Königgrätz (Sadowa)", "Battle of Marne", "Battle of Waterloo"], answer: "1", explanation: "At the Battle of Königgrätz (Sadowa) on 3 July 1866, the Prussian army quickly defeated the Austrian forces." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "The German Empire was proclaimed in 1871 with:", options: ["Kaiser Wilhelm I of Prussia", "Otto von Bismarck as Kaiser", "Napoleon III as Kaiser", "Franz Joseph as Kaiser"], answer: "0", explanation: "King Wilhelm of Prussia became German Emperor (Kaiser) in 1871." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "Which of the following was NOT a result of the Seven Weeks War (1866)?", options: ["Holstein annexed by Prussia", "Austria excluded from German affairs", "Venetia given to Italy", "Alsace and Lorraine given to Germany"], answer: "3", explanation: "Alsace and Lorraine were given to Germany after the FRANCO-PRUSSIAN War (1871), not the Seven Weeks War." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "The main goal of the Zollverein was to:", options: ["Unify Germany politically", "Promote trade by removing tariffs between German states", "Create a German army", "Defeat Austria"], answer: "1", explanation: "The Zollverein removed tariffs on products traded between German states, promoting trade and a strong economy." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "Abraham Lincoln was assassinated by:", options: ["Jefferson Davis", "John Wilkes Booth", "Frederick Douglass", "William Lloyd Garrison"], answer: "1", explanation: "John Wilkes Booth, a Confederate sympathizer, assassinated Lincoln on 14 April 1865." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "The 19th-century 'reaction' period in Europe referred to:", options: ["A period of revolutionary change", "A period when conservatives wanted to return to old orders", "A period of rapid industrialization", "A period of colonial expansion"], answer: "1", explanation: "The 'reaction' period after Napoleon was when conservatives in power wanted to return to old orders and oppose change." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Which statement BEST explains why Italy unified 'from below' and 'from above'?", options: ["Garibaldi's military action (below) combined with Cavour's diplomacy (above)", "Mazzini's ideas alone unified Italy", "Austria helped Italy unify", "The pope supported unification"], answer: "0", explanation: "Italy unified through a combination: Garibaldi's popular military action in the south ('from below') and Cavour's political/diplomatic strategy in the north ('from above')." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "Which sequence correctly orders the German unification wars?", options: ["Austria → Denmark → France", "Denmark → Austria → France", "France → Denmark → Austria", "Denmark → France → Austria"], answer: "1", explanation: "The correct order: Danish War (1864) → Seven Weeks War against Austria (1866) → Franco-Prussian War (1870–71)." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Why did Bismarck publish the Ems Telegram?", options: ["To make peace with France", "To provoke France into declaring war on Prussia", "To inform Austria of Prussian plans", "To end the Seven Weeks War"], answer: "1", explanation: "Bismarck edited and published the Ems Telegram to provoke France into declaring war in 1870 — a classic example of Realpolitik." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Which of the following BEST describes Bismarck's Realpolitik?", options: ["Politics based on religious principles", "Politics of reality — pursue goals by any means necessary", "Politics based on democratic elections", "Politics of peace and cooperation"], answer: "1", explanation: "Realpolitik = 'politics of reality' — pursue goals by any means necessary (war, lies, breaking treaties)." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "Which was a direct consequence of the Franco-Prussian War for Germany?", options: ["Germany lost territory to France", "The German Empire was proclaimed at Versailles", "Austria became part of Germany", "Germany was divided into smaller states"], answer: "1", explanation: "The German Empire was proclaimed at Versailles in 1871 — the pinnacle of Bismarck's efforts." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "The American Civil War can BEST be understood as a conflict over:", options: ["States' rights only", "Slavery and its extension into new territories", "Taxation without representation", "Religious freedom"], answer: "1", explanation: "The Civil War was fundamentally about SLAVERY and its extension into new territories. 'States' rights' was the South's argument to defend slavery." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "Which statement about the Emancipation Proclamation is TRUE?", options: ["It freed all slaves in the USA immediately", "It freed slaves only in rebelling parts of the country", "It gave Black Americans the right to vote", "It ended the Civil War"], answer: "1", explanation: "The Emancipation Proclamation (1863) freed slaves only in those parts of the country that rebelled. It did not free slaves in border states loyal to the Union." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "Why did the 13th Amendment matter more than the Emancipation Proclamation?", options: ["It was issued by Lincoln personally", "It permanently outlawed slavery in the Constitution", "It gave land to former slaves", "It ended the Civil War"], answer: "1", explanation: "The 13th Amendment (1865) permanently outlawed slavery in the US Constitution — a lasting constitutional change, unlike the Emancipation Proclamation (a war measure)." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "Which of the following BEST explains why Britain supported the Ottoman Turks in the Eastern Question?", options: ["Britain wanted to spread democracy", "Britain wanted to protect its interests in India and prevent Russian expansion", "Britain was Orthodox Christian", "Britain wanted to unify the Balkans"], answer: "1", explanation: "Britain's main concern was protecting its interests in India. It did not want Russians in the Mediterranean, where they might challenge British sea power." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "The 'Eastern Question' was primarily caused by:", options: ["The rise of Germany", "The decline of the Ottoman Empire and the rise of Balkan nationalism", "The American Civil War", "The Industrial Revolution"], answer: "1", explanation: "The Eastern Question arose from the decline of the Ottoman Empire, the rise of nationalist feelings among Balkan peoples, and the divergent interests of Great Powers." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "Which of the following correctly matches a leader with his role in Italian unification?", options: ["Mazzini — military leader of the Red Shirts", "Cavour — founder of Young Italy", "Garibaldi — military leader of the Red Shirts", "Victor Emmanuel II — founder of Young Italy"], answer: "2", explanation: "Garibaldi led the Red Shirts. Mazzini founded Young Italy. Cavour was the political architect. Victor Emmanuel II became king." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "Which was a consequence of Italian unification?", options: ["The pope's power was strengthened", "Tension between the industrialized North and the agrarian South", "Slavery was abolished in Italy", "Italy became a German colony"], answer: "1", explanation: "After unification, tension grew between the industrialized North and the agrarian South. The pope's power was actually reduced." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Which of the following BEST explains the difference between Italian and German unification?", options: ["Italy unified through diplomacy only; Germany through war only", "Italy unified through a mix of popular action and diplomacy; Germany through top-down Prussian military policy", "Both unified through revolution from below", "Both unified peacefully"], answer: "1", explanation: "Italy: mix of Garibaldi's popular action ('from below') and Cavour's diplomacy ('from above'). Germany: top-down Prussian royal policy and military force." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Why did the Southern German states join Prussia against France in 1870?", options: ["They wanted to expand their territory", "They opposed French invasion and felt a common German cause", "They were forced by Austria", "They wanted to end the war quickly"], answer: "1", explanation: "The Southern German states entered the war on Prussia's side opposing French invasion, showing growing German national feeling." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "Which statement about nationalism is MOST accurate?", options: ["Nationalism is always positive", "Nationalism is always negative", "Nationalism can promote unity and independence but also aggression and war", "Nationalism has no effect on history"], answer: "2", explanation: "Nationalism has two faces: positive (unity, independence, pride) and negative (aggression, war, empire expansion)." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "Which of the following was a common feature of both Italian and German unification?", options: ["Both were led by Mazzini", "Both involved conflict with Austria", "Both were achieved by 1861", "Both were led by France"], answer: "1", explanation: "Both Italian and German unification involved conflict with Austria. Italy fought Austria in 1859; Prussia fought Austria in 1866." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "The term 'Realpolitik' is BEST associated with:", options: ["Mazzini", "Garibaldi", "Bismarck", "Lincoln"], answer: "2", explanation: "Realpolitik is BEST associated with Otto von Bismarck, who pursued German unification by any means necessary." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "Which of the following was NOT a cause of the American Civil War?", options: ["Economic differences between North and South", "The issue of slavery", "Cultural differences between North and South", "The Zollverein"], answer: "3", explanation: "The Zollverein was a German customs union — it had nothing to do with the American Civil War." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "Which statement about the Congress of Vienna is TRUE?", options: ["It promoted nationalism across Europe", "It tried to reverse Napoleon's changes and restore monarchies", "It unified Italy and Germany", "It ended the slave trade"], answer: "1", explanation: "The Congress of Vienna (1815) was conservative — it tried to reverse Napoleon's changes and restore monarchies." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "Which of the following BEST explains why capitalism first emerged in Western Europe?", options: ["Western Europe had the most natural resources", "Western Europe had a combination of trade wealth, stable governments, and industrialization", "Western Europe had no feudal system", "Western Europe was the most populated region"], answer: "1", explanation: "Western Europe had a combination of factors: wealth from trade (including the slave trade), stable governments, and the Industrial Revolution (starting in England)." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "easy", stem: "Define capitalism and list its main features.", answer: "Capitalism is an economic system where most means of production are PRIVATELY OWNED. Main features: (1) private ownership, (2) profit motive, (3) free market based on demand and supply, (4) free competition, (5) minimal government interference.", explanation: "Key features: private ownership + profit + free market + competition + minimal government." },
    { id: "q102", type: "short", difficulty: "easy", stem: "Explain the role of the Industrial Revolution in the establishment of the capitalist system.", answer: "The Industrial Revolution (starting in England, 18th century) transformed production from hand tools (domestic system) to machines in factories (factory system). It created new social classes (proletariat and bourgeoisie), replaced wind and water with coal and steam, and generated wealth that fueled capitalism. It made mass production and profit-driven markets possible.", explanation: "Industrial Revolution = engine of capitalism." },
    { id: "q103", type: "short", difficulty: "easy", stem: "Define nationalism and give one positive and one negative example from this unit.", answer: "Nationalism is a feeling of belonging and loyalty that makes people think of themselves as a nation. POSITIVE example: Italian and German unification (building nations). NEGATIVE example: competition for colonies and the Balkan tensions that contributed to WWI.", explanation: "Nationalism has two faces: unity (positive) and aggression (negative)." },
    { id: "q104", type: "short", difficulty: "easy", stem: "What was the main objective of the Congress of Vienna (1815)?", answer: "The main objective was to reverse all the changes brought about in Europe during the reign of Napoleon and to restore the monarchies. It was a conservative reaction against nationalism and revolution.", explanation: "Congress of Vienna = conservative reaction; restore monarchies." },
    { id: "q105", type: "short", difficulty: "medium", stem: "Describe the three obstacles to Italian unity in 1815.", answer: "(1) Austrian occupation of Lombardy and Venice in the north/northeast. (2) The Papal States under the pope, which cut the peninsula in half. (3) The existence of several independent states (Kingdom of Sardinia, Kingdom of the Two Sicilies, and duchies of Tuscany, Parma, Modena).", explanation: "Austria + Papal States + independent states = three obstacles." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Explain the roles of Mazzini, Cavour, and Garibaldi in Italian unification.", answer: "Mazzini: the DREAMER — founded Young Italy, spread the vision of a united republic. Cavour: the PLANNER — prime minister of Sardinia, built alliances (with France), strengthened Piedmont economically and militarily. Garibaldi: the FIGHTER — led the Red Shirts, conquered Sicily and southern Italy, handed power to Victor Emmanuel II.", explanation: "Mazzini dreamed it, Cavour planned it, Garibaldi fought it." },
    { id: "q107", type: "short", difficulty: "medium", stem: "What were the causes and results of the Seven Weeks War (1866)?", answer: "CAUSE: Competition between Prussia and Austria over leadership of Germany. RESULT: Prussia defeated Austria at Königgrätz (Sadowa). Holstein was annexed by Prussia; Austria was excluded from German affairs; Venetia was given to Italy; the North German Confederation was formed under Prussian leadership.", explanation: "Seven Weeks War = Prussia vs Austria over German leadership." },
    { id: "q108", type: "short", difficulty: "medium", stem: "Explain the significance of the Ems Telegram.", answer: "The Ems Telegram was a carefully EDITED version of a conversation between King Wilhelm and the French ambassador, published by Bismarck. It was significant because it provoked France to declare war on Prussia in 1870, starting the Franco-Prussian War. This war led to the proclamation of the German Empire in 1871.", explanation: "Ems Telegram = Bismarck's provocation → Franco-Prussian War → German Empire." },
    { id: "q109", type: "short", difficulty: "medium", stem: "What were the main causes of the American Civil War?", answer: "The main causes were: (1) SLAVERY — the most important issue; (2) economic differences (industrial North vs. cotton plantation South); (3) cultural differences (diverse North vs. white supremacy South); (4) the power of the federal government vs. states' rights. The election of Lincoln (1860) and the secession of eleven southern states triggered the war.", explanation: "Slavery was the #1 cause; economic and cultural differences made it worse." },
    { id: "q110", type: "short", difficulty: "medium", stem: "What were the results of the American Civil War?", answer: "(1) The 13th Amendment (1865) officially outlawed slavery. (2) The plantation economy in the South collapsed. (3) Industrialization, cities, railroads, banks, and factories grew in the South (slowly). (4) Constitutional changes became a point of departure in the struggle for equal civil and human rights.", explanation: "Slavery abolished; South devastated; long struggle for equality began." },
    { id: "q111", type: "short", difficulty: "medium", stem: "Explain the 'Eastern Question' and the interests of Russia, Britain, and Austria.", answer: "The Eastern Question was a diplomatic problem caused by the decline of the Ottoman Empire and the rise of Balkan nationalism. RUSSIA supported Balkan nationalists (Slavs, Orthodox Christians, wanted sea access). BRITAIN supported the Turks (to protect India and prevent Russian expansion). AUSTRIA supported the Ottomans (to stop Russian expansion).", explanation: "Eastern Question = Ottoman decline + Balkan nationalism + Great Power rivalry." },
    { id: "q112", type: "short", difficulty: "medium", stem: "Why did the Industrial Revolution begin in England?", answer: "England had key advantages: (1) large coal and iron deposits; (2) capital from trade (including the slave trade); (3) a stable government and legal system; (4) a large labor force; (5) overseas colonies that provided raw materials and markets; (6) agricultural improvements that freed workers for factories.", explanation: "Coal + iron + capital + stable government + labor + colonies." },
    { id: "q113", type: "short", difficulty: "medium", stem: "Compare and contrast the unification of Italy and Germany.", answer: "SIMILARITIES: Both were fragmented in 1815; both unified in the mid-19th century; both involved conflict with Austria; both used nationalism. DIFFERENCES: Italy unified through a mix of popular action (Garibaldi, 'from below') and diplomacy (Cavour, 'from above'); Germany unified 'from the top down' through Prussian royal policy and military force (Bismarck's three wars). Italy's key state was Sardinia; Germany's was Prussia.", explanation: "Italy = mix of below + above; Germany = top-down military." },
    { id: "q114", type: "short", difficulty: "medium", stem: "What was the Zollverein and why was it important?", answer: "The Zollverein (1834) was an economic alliance (customs union) between German states that removed tariffs on products traded between them. It was important because it promoted trade, strengthened the German economy, and was the FIRST STEP toward German political unification.", explanation: "Zollverein = economic union; first step to German unity." },
    { id: "q115", type: "short", difficulty: "hard", stem: "Explain the concept of Realpolitik and how Bismarck used it.", answer: "Realpolitik means 'politics of reality' — pursuing goals by any means necessary (war, lies, breaking treaties). Bismarck used it to unify Germany: he manipulated the Ems Telegram to provoke France, broke treaties when convenient, and used military force ('Blood and Iron') through three wars (Denmark, Austria, France). He prioritized practical results over ideology.", explanation: "Realpolitik = any means necessary; Bismarck's method." },
    { id: "q116", type: "short", difficulty: "hard", stem: "Why did the American Civil War NOT immediately bring equality between white and Black Americans?", answer: "The Civil War ended slavery (13th Amendment, 1865), but it did not end discrimination. The South continued to hold onto a social order based on white supremacy in private and political life. Segregation, discriminatory laws (Jim Crow), and economic inequality continued for a century. The war was a point of departure in the struggle for equal rights — not its completion.", explanation: "Slavery ended, but discrimination and segregation continued." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Why did the Balkan region become known as the 'powder keg of Europe'?", answer: "The Balkans were home to multi-ethnic peoples (Serbs, Bulgarians, Rumanians, Greeks) with rising nationalist feelings. The declining Ottoman Empire left a power vacuum. Great Powers (Russia, Britain, Austria) competed for influence, each supporting different groups. Nationalist revolts, Great Power rivalries, and unresolved problems created tensions that could easily explode into war — hence 'powder keg.'", explanation: "Multi-ethnic + nationalist movements + Great Power rivalry = powder keg." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Explain how the transatlantic slave trade contributed to the development of capitalism.", answer: "The transatlantic slave trade and plantation slavery generated enormous wealth. European merchants made money through networks of colonies and sugar, cotton, and tobacco plantations. These riches, sometimes called 'capital,' were used to fund Europe's industrialization. For example, the slave trade enriched British port towns like Liverpool, and textile mills built Manchester. Thus, the slave trade and plantation riches were important factors in the development of capitalism in Europe.", explanation: "Slave trade → wealth → capital → industrialization → capitalism." },
    { id: "q119", type: "short", difficulty: "hard", stem: "What were the consequences of the Franco-Prussian War for Germany and France?", answer: "For GERMANY: The German Empire was proclaimed at Versailles in 1871; Germany annexed Alsace and Lorraine (rich in coal and iron); Germany received huge war indemnities from France. For FRANCE: The Second Empire ended; France lost Alsace and Lorraine; France paid huge war indemnities; France was humiliated, which contributed to future tensions (and WWI).", explanation: "Germany unified + gained territory; France humiliated + lost territory." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Which event in this unit do you think most influenced the outbreak of World War I, and why?", answer: "Answers may vary, but the strongest answers will identify: (1) The rise of NATIONALISM and the competition for colonies (imperialism) — which created rivalries between Great Powers. (2) The UNIFICATION OF GERMANY (1871) — which changed the balance of power in Europe and created German ambitions that threatened Britain and France. (3) The BALKAN CRISIS (Eastern Question) — where nationalist tensions and Great Power rivalries created a 'powder keg.' The most direct cause was the Balkan crisis (assassination of Archduke Franz Ferdinand, 1914), but the underlying causes were nationalism, imperialism, and militarism — all major themes of this unit.", explanation: "Nationalism + imperialism + German unification + Balkan crisis." },
  ],
};