import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 CITIZENSHIP EDUCATION — UNIT 5
// FEDERALISM IN ETHIOPIA
// Source: Grade 10 Citizenship Education Student Textbook (pp. 101–124)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, definition boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10CivicsCh5: Chapter = {
  id: "ch5",
  number: 5,
  title: "Federalism in Ethiopia",
  titleAm: "በኢትዮጵያ ፌዴራሊዝም",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about FEDERALISM — how power is divided between central + regional governments, focusing on Ethiopia.\n\n" +
        "It has FIVE parts:\n" +
        "1) Meaning of federalism.\n" +
        "2) Types: DUAL vs COOPERATIVE.\n" +
        "3) Key features: division of power, decentralized system, written + supreme constitution.\n" +
        "4) Advantages + disadvantages.\n" +
        "5) Ethiopian federalism + diversity.\n\n" +
        "The WHOLE chapter reduces to FIVE key ideas:\n" +
        "• Federalism = power divided between federal + regional governments.\n" +
        "• DUAL = 'layer cake' (separate); COOPERATIVE = 'marble cake' (overlapping).\n" +
        "• Features: division of power, decentralization, written supreme constitution.\n" +
        "• 9 advantages + 5 disadvantages.\n" +
        "• Ethiopian federalism = ethnic-based; bi-cameral (HPR + HoF); adopted 1995.\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ አምስቱ ዋና ሐሳቦች፡\n" +
        "• ፌዴራሊዝም = የስልጣን ክፍፍል።\n" +
        "• Dual vs Cooperative።\n" +
        "• 3 ዋና ባህሪያት።\n" +
        "• 9 ጥቅሞች + 5 ጉዳቶች።\n" +
        "• የኢትዮጵያ ፌዴራሊዝም = ብሔር ተኮር።",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the meaning",
          titleAm: "ደረጃ 1 · ትርጉሙን መረዳት",
          body:
            "FEDERALISM:\n" +
            "• System of government where power is divided between FEDERAL + REGIONAL governments.\n" +
            "• DEVOLUTION = transfer of power to the region.\n" +
            "• Neither level is supreme.\n" +
            "• Power coordinated between center + region.\n" +
            "• Avoids monopoly of power.\n\n" +
            "KEY DEFINITIONS:\n" +
            "• Shared-rule + regional self-rule.\n" +
            "• Neither level constitutionally subordinate to other.\n" +
            "• Each has sovereign powers from constitution.\n" +
            "• High federal court adjudicates disputes.",
          bodyAm:
            "የስልጣን ክፍፍል።\n" +
            "Devolution = ወደ ክልል ስልጣን ማስተላለፍ።\n" +
            "ሁለቱም እኩል ናቸው።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Types — Dual vs Cooperative",
          titleAm: "ደረጃ 2 · Dual vs Cooperative",
          body:
            "DUAL FEDERALISM ('Layer Cake'):\n" +
            "• CLEAR division between state + national governments.\n" +
            "• States own powers; central can't intervene.\n" +
            "• ADVANTAGES: protects local jurisdictions; local laws reflect local needs.\n" +
            "• DISADVANTAGES: tension; reduced cooperation; decreased unity.\n\n" +
            "COOPERATIVE FEDERALISM ('Marble Cake'):\n" +
            "• Share power + collaborate on OVERLAPPING functions.\n" +
            "• Federal + state + local interact cooperatively.\n" +
            "• ADVANTAGES: efficiency; practical; participation; incentive to cooperate.\n" +
            "• DISADVANTAGES: decrease in state powers; federal may intervene.",
          bodyAm:
            "Dual = 'Layer Cake' (የተለያየ)።\n" +
            "Cooperative = 'Marble Cake' (የተቀላቀለ)።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master advantages vs disadvantages",
          titleAm: "ደረጃ 3 · ጥቅሞች vs ጉዳቶች",
          body:
            "NINE ADVANTAGES:\n" +
            "1) Division of powers.\n" +
            "2) Separate government.\n" +
            "3) Written constitution.\n" +
            "4) Rigid constitution.\n" +
            "5) Special judiciary.\n" +
            "6) Better understanding of local issues.\n" +
            "7) Increasing citizen participation.\n" +
            "8) Protection against tyranny.\n" +
            "9) More efficiency.\n\n" +
            "FIVE DISADVANTAGES:\n" +
            "1) Conflict of authority.\n" +
            "2) Regionalism over patriotism.\n" +
            "3) Lack of accountability.\n" +
            "4) Inequalities between states.\n" +
            "5) Blockage of nationalist policies by states.",
          bodyAm:
            "9 ጥቅሞች።\n" +
            "5 ጉዳቶች።\n" +
            "ጥቅም: ኃይል ክፍፍል፣ ተሳትፎ፣ ቅልጥፍና።\n" +
            "ጉዳት: ግጭት፣ ክልላዊነት፣ አለመመጣጠን።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Do you know dual = 'layer cake' + cooperative = 'marble cake'?\n" +
            "2) Do you know 3 features of federalism?\n" +
            "3) Do you know 9 advantages + 5 disadvantages?\n" +
            "4) Do you know 2 federal houses in Ethiopia?\n" +
            "5) Do you know Article 50(8) + Article 55 + 61-62?",
          bodyAm:
            "1) Layer/Marble Cake?\n" +
            "2) 3 ባህሪያት?\n" +
            "3) 9 + 5?\n" +
            "4) 2 ምክር ቤቶች?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፋርት",
          body:
            "• FEDERALISM = division of power between federal + regional.\n" +
            "• DEVOLUTION = transfer of power.\n" +
            "• DUAL = 'layer cake'; COOPERATIVE = 'marble cake'.\n" +
            "• 3 features: division of power, decentralization, written supreme constitution.\n" +
            "• 9 advantages; 5 disadvantages.\n" +
            "• ETHIOPIA: Federal Democratic Republic; adopted federalism 1995.\n" +
            "• Bi-cameral: House of People's Representatives (HPR) + House of Federation (HoF).\n" +
            "• HPR = supreme political organ (Article 53(3)).\n" +
            "• HoF = represents nations/nationalities/peoples (Article 61-62).\n" +
            "• Article 50(8): federal + state powers defined; each respects other.",
          bodyAm:
            "• Dual = layer; Cooperative = marble።\n" +
            "• 3 ባህሪያት።\n" +
            "• 9 + 5።\n" +
            "• HPR + HoF።\n" +
            "• Article 50(8)።",
        },
      ],
    },

    // ============================================================
    // 5.1 MEANING OF FEDERALISM
    // ============================================================
    {
      id: "n1",
      title: "5.1 The Meaning of Federalism",
      titleAm: "5.1 የፌዴራሊዝም ትርጉም",
      body:
        "Abatu, FEDERALISM = system of government where power is divided between federal + regional governments. Devolution transfers power to the region.",
      bodyAm:
        "አባቱ፣ ፌዴራሊዝም = የስልጣን ክፍፍል።",
      children: [
        {
          id: "n1-1",
          title: "Definitions of federalism",
          titleAm: "ትርጓሜዎች",
          body:
            "DEFINITION 1:\n" +
            "• Political organization.\n" +
            "• Activities of government divided between regional + central governments.\n" +
            "• Each kind of government has some activities on which it makes FINAL decisions.\n\n" +
            "DEFINITION 2:\n" +
            "• Advocacy of multi-tiered government.\n" +
            "• Combines SHARED-RULE + REGIONAL SELF-RULE.\n" +
            "• Neither federal nor constituent units constitutionally subordinate.\n" +
            "• Each has sovereign powers from constitution.\n" +
            "• Each deals directly with citizens.\n" +
            "• Each directly elected by citizens.\n\n" +
            "DEFINITION 3:\n" +
            "• Public authority divided between state + central governments.\n" +
            "• Each level has some issues on which it makes FINAL decisions.\n" +
            "• High federal court adjudicates disputes.",
          bodyAm:
            "ስልጣን በሁለት ደረጃ ይከፈላል።\n" +
            "Shared-rule + self-rule።\n" +
            "ሁለቱም እኩል ናቸው።",
        },
        {
          id: "n1-2",
          title: "Devolution and coordination",
          titleAm: "Devolution",
          body:
            "DEVOLUTION:\n" +
            "• Principle of federalism.\n" +
            "• Transfer of power to the region that constitutes the federation.\n" +
            "• Makes NEITHER federal NOR regional government supreme.\n" +
            "• Power coordinated between center + region.\n" +
            "• Avoids MONOPOLY of power.",
          bodyAm:
            "ወደ ክልል ስልጣን ማስተላለፍ።\n" +
            "የስልጣን ሞኖፖሊ ያስወግዳል።",
        },
        {
          id: "n1-3",
          title: "Case study — Lower Omo flood",
          titleAm: "የታችኛው ኦሞ ጎርፍ",
          body:
            "LOWER OMO BASIN FLOOD:\n" +
            "• Heavy rain in highland areas → Omo River overflowed.\n" +
            "• Flooded villages + farm lands.\n" +
            "• Many livestock died + thousands homeless.\n" +
            "• Beyond capacity of regional state.\n\n" +
            "FEDERAL RESPONSE:\n" +
            "• Federal government stepped in.\n" +
            "• Ethiopians from different backgrounds responded.\n" +
            "• Religious institutions provided help.\n" +
            "• Regional governments mobilized resources.\n\n" +
            "LESSON: Coordinated effort of federal + regional governments can solve problems. Spirit of unity + care for humans.",
          bodyAm:
            "ከክልል አቅም በላይ ሲሆን ፌዴራል ይረዳል።\n" +
            "የትብብር መንፈስ።",
        },
        {
          id: "n1-4",
          title: "⚠ Remember trap — Meaning",
          titleAm: "⚠ አትርሳ — ትርጉም",
          body:
            "• FEDERALISM = division of power between federal + regional governments.\n" +
            "• DEVOLUTION = transfer of power to region.\n" +
            "• Neither level is SUPREME.\n" +
            "• Shared-rule + regional self-rule.\n" +
            "• Each level has FINAL decisions on some issues.\n" +
            "• High federal court adjudicates disputes.\n" +
            "• Avoids monopoly of power.",
          bodyAm:
            "ስልጣን ክፍፍል።\n" +
            "Devolution።\n" +
            "ሁለቱም እኩል።",
        },
      ],
    },

    // ============================================================
    // 5.2 TYPES OF FEDERALISM
    // ============================================================
    {
      id: "n2",
      title: "5.2 Types of Federalism",
      titleAm: "5.2 የፌዴራሊዝም ዓይነቶች",
      body:
        "Abatu, TWO main types: DUAL federalism ('layer cake') and COOPERATIVE federalism ('marble cake').",
      bodyAm:
        "አባቱ፣ Dual vs Cooperative።",
      children: [
        {
          id: "n2-1",
          title: "Dual federalism",
          titleAm: "Dual",
          body:
            "DUAL FEDERALISM:\n" +
            "• Clearly divides authority between state + national governments.\n" +
            "• Called 'LAYER CAKE FEDERALISM'.\n" +
            "• State governments own powers where central can't intervene.\n" +
            "• And vice versa.\n" +
            "• Early: states controlled almost all aspects of individuals.\n" +
            "• National: internal improvements, international relations, commercial aspects between states.",
          bodyAm:
            "'Layer cake'።\n" +
            "ግልጽ ክፍፍል።\n" +
            "ማንም ጣልቃ አይገባም።",
        },
        {
          id: "n2-2",
          title: "Advantages of dual federalism",
          titleAm: "የDual ጥቅሞች",
          body:
            "TWO ADVANTAGES:\n" +
            "1) PROTECTION of local jurisdictions from federal overreach:\n" +
            "• Prevents federal government from having too much power.\n\n" +
            "2) LOCAL LAWS develop + reflect local needs:\n" +
            "• Different states have varying laws (divorce, marriage, speed limits).\n" +
            "• Formed on basis of state requirements.\n" +
            "• Example: less populated state might assign higher speed limit.",
          bodyAm:
            "1) የአካባቢ ጥበቃ።\n" +
            "2) የአካባቢ ሕጎች።",
        },
        {
          id: "n2-3",
          title: "Disadvantages of dual federalism",
          titleAm: "የDual ጉዳቶች",
          body:
            "THREE DISADVANTAGES:\n" +
            "1) TENSION between state + federal stays at brim:\n" +
            "• Not favorable for development.\n\n" +
            "2) DECREASING COOPERATION:\n" +
            "• Reduced efficiency of programs.\n\n" +
            "3) DECREASED UNITY:\n" +
            "• As state power increases, unity decreases.",
          bodyAm:
            "1) ውጥረት።\n" +
            "2) ትብብር መቀነስ።\n" +
            "3) አንድነት መቀነስ።",
        },
        {
          id: "n2-4",
          title: "Cooperative federalism",
          titleAm: "Cooperative",
          body:
            "COOPERATIVE FEDERALISM:\n" +
            "• State + national governments SHARE power + COLLABORATE on overlapping functions.\n" +
            "• Called 'MARBLE CAKE FEDERALISM'.\n" +
            "• Federal + state + local interact COOPERATIVELY.\n" +
            "• Solve common problems.\n" +
            "• NOT policies separately.",
          bodyAm:
            "'Marble cake'።\n" +
            "ሁለቱም ይተባበራሉ።\n" +
            "የጋራ ችግሮችን ይፈታሉ።",
        },
        {
          id: "n2-5",
          title: "Advantages of cooperative federalism",
          titleAm: "የCooperative ጥቅሞች",
          body:
            "FIVE ADVANTAGES:\n" +
            "1) National + state work TOGETHER for efficient services.\n" +
            "2) More PRACTICAL approach to intergovernmental relations.\n" +
            "3) Both levels hold own powers + responsibilities:\n" +
            "• People sense participation.\n" +
            "• Prevents excessive power.\n" +
            "4) States have INCENTIVE to cooperate.\n" +
            "5) States can INFLUENCE how programs are implemented.",
          bodyAm:
            "1) አብሮ መስራት።\n" +
            "2) ተግባራዊ አቀራረብ።\n" +
            "3) ሁለቱም ስልጣን።\n" +
            "4) ማበረታቻ።\n" +
            "5) ተጽእኖ።",
        },
        {
          id: "n2-6",
          title: "Disadvantages of cooperative federalism",
          titleAm: "የCooperative ጉዳቶች",
          body:
            "TWO DISADVANTAGES:\n" +
            "1) DECREASE in state's powers:\n" +
            "• Instead of being on their own, federal may intervene.\n\n" +
            "2) Federal may intervene in policies once reserved to states.",
          bodyAm:
            "1) የክልል ስልጣን መቀነስ።\n" +
            "2) ፌዴራል ጣልቃ መግባት።",
        },
        {
          id: "n2-7",
          title: "⚠ Remember trap — Types",
          titleAm: "⚠ አትርሳ — ዓይነቶች",
          body:
            "• DUAL = 'layer cake' (separate).\n" +
            "• COOPERATIVE = 'marble cake' (overlapping).\n" +
            "• Dual advantages: protection + local laws.\n" +
            "• Dual disadvantages: tension, reduced cooperation, decreased unity.\n" +
            "• Cooperative advantages: efficiency, participation, incentive.\n" +
            "• Cooperative disadvantages: decrease in state powers, federal intervention.",
          bodyAm:
            "Layer vs Marble።\n" +
            "Dual = የተለያየ።\n" +
            "Cooperative = የተቀላቀለ።",
        },
      ],
    },

    // ============================================================
    // 5.3 KEY FEATURES OF FEDERALISM
    // ============================================================
    {
      id: "n3",
      title: "5.3 Key Features of Federalism",
      titleAm: "5.3 ዋና ባህሪያት",
      body:
        "Abatu, THREE key features: division of power, decentralized system of government, and written + supreme federal constitution.",
      bodyAm:
        "አባቱ፣ 3 ዋና ባህሪያት።",
      children: [
        {
          id: "n3-1",
          title: "Division of power",
          titleAm: "የስልጣን ክፍፍል",
          body:
            "DIVISION OF POWER:\n" +
            "• Constitutional division between federal + states.\n" +
            "• Relates to legislative, executive, judicial, financial functions.\n" +
            "• Based on DUAL PRINCIPLE:\n" +
            "   – Desire to be UNITED.\n" +
            "   – Desire to be AUTONOMOUS.\n\n" +
            "DESIGN:\n" +
            "• Federal = powers SHARED in common.\n" +
            "• States = powers relevant for REGIONAL identity.",
          bodyAm:
            "ስልጣን በሕገ-መንግስት ይከፈላል።\n" +
            "አንድነት + ራስን መስተዳደር።",
        },
        {
          id: "n3-2",
          title: "Decentralized system of government",
          titleAm: "ያልተማከለ ስርዓት",
          body:
            "DECENTRALIZED SYSTEM:\n" +
            "• Units (local governments) SUBORDINATE to center.\n" +
            "• Created by center via STATUTE.\n" +
            "• Can be wiped out by center at any time.\n" +
            "• Delegation of power = at MERCY of center.\n" +
            "• Subject to UNILATERAL withdrawal.\n" +
            "• Emphasis on SELF-RULE (not shared rule).\n\n" +
            "IN A FEDERATION:\n" +
            "• Division constitutionally GUARANTEED.\n" +
            "• States NOT creations of federal government.\n" +
            "• Both derive authority from CONSTITUTION.\n" +
            "• Neither level can change terms unilaterally.",
          bodyAm:
            "ያልተማከለ = ከማዕከል በታች።\n" +
            "ፌዴሬሽን = በሕገ-መንግስት የተረጋገጠ።\n" +
            "ሁለቱም እኩል ናቸው።",
        },
        {
          id: "n3-3",
          title: "Written and supreme federal constitution",
          titleAm: "የተጻፈ + የበላይ ሕገ-መንግስት",
          body:
            "WRITTEN + SUPREME CONSTITUTION:\n" +
            "• Division based on WRITTEN + SUPREME federal constitution.\n" +
            "• Both orders of government must submit.\n" +
            "• Federations originate from BARGAINS struck at a particular time.\n" +
            "• Designed to serve for generations.\n" +
            "• Written constitutions = records of terms of bargain.\n" +
            "• Binding.\n\n" +
            "WHY:\n" +
            "• If autonomous within respective spheres,\n" +
            "• Authority of one shouldn't depend on the other.\n" +
            "• Must derive from something SUPREME to both.",
          bodyAm:
            "የተጻፈ + የበላይ ሕገ-መንግስት።\n" +
            "ሁለቱም ይገዛሉ።\n" +
            "ሁለቱም ከሕገ-መንግስት ይወርሳሉ።",
        },
        {
          id: "n3-4",
          title: "⚠ Remember trap — Features",
          titleAm: "⚠ አትርሳ — ባህሪያት",
          body:
            "• THREE features: division of power, decentralization, written supreme constitution.\n" +
            "• DIVISION = legislative, executive, judicial, financial.\n" +
            "• DECENTRALIZATION = local units subordinate to center.\n" +
            "• FEDERATION = states NOT creations of federal government.\n" +
            "• CONSTITUTION = written + supreme + binding.",
          bodyAm:
            "3 ባህሪያት።\n" +
            "ስልጣን፣ decentralization፣ constitution።",
        },
      ],
    },

    // ============================================================
    // 5.4 ADVANTAGES AND DISADVANTAGES
    // ============================================================
    {
      id: "n4",
      title: "5.4 Advantages and Disadvantages of Federalism",
      titleAm: "5.4 ጥቅሞችና ጉዳቶች",
      body:
        "Abatu, federalism has NINE advantages and FIVE disadvantages.",
      bodyAm:
        "አባቱ፣ 9 + 5።",
      children: [
        {
          id: "n4-1",
          title: "Advantages — Division of power, separate government, written constitution",
          titleAm: "ጥቅሞች 1-3",
          body:
            "1) DIVISION OF POWERS:\n" +
            "• Powers distributed between center + units.\n" +
            "• Constitution states what federal has, leaves rest to units.\n" +
            "• OR states what units have, leaves rest to federal.\n\n" +
            "2) SEPARATE GOVERNMENT:\n" +
            "• Center + units have SEPARATE governmental apparatus.\n" +
            "• Example: US states have separate legislatures + executives.\n\n" +
            "3) WRITTEN CONSTITUTION:\n" +
            "• Must have written constitution.\n" +
            "• Written agreement between various states.",
          bodyAm:
            "ስልጣን ክፍፍል።\n" +
            "የተለያዩ መንግስታት።\n" +
            "የተጻፈ ሕገ-መንግስት።",
        },
        {
          id: "n4-2",
          title: "Advantages — Rigid constitution, special judiciary, local issues",
          titleAm: "ጥቅሞች 4-6",
          body:
            "4) RIGID CONSTITUTION:\n" +
            "• More or less rigid.\n" +
            "• Regarded as SACRED agreement.\n" +
            "• Flexible constitution allows central to curtail state autonomy.\n\n" +
            "5) SPECIAL JUDICIARY:\n" +
            "• Adjudicates constitutional disputes.\n" +
            "• Custodian + guardian of constitution.\n" +
            "• Can declare laws at variance with constitution.\n" +
            "• Constitution = supreme law.\n\n" +
            "6) BETTER UNDERSTANDING OF LOCAL ISSUES:\n" +
            "• Central can't understand every area's problems.\n" +
            "• Local branches are RIGHT IN THE MIDDLE of local society.\n" +
            "• Better suited to grass-roots problems.",
          bodyAm:
            "ጠንካራ ሕገ-መንግስት።\n" +
            "ልዩ ዳኝነት።\n" +
            "የአካባቢ ጉዳዮች መረዳት።",
        },
        {
          id: "n4-3",
          title: "Advantages — Participation, protection against tyranny, efficiency",
          titleAm: "ጥቅሞች 7-9",
          body:
            "7) INCREASING CITIZEN PARTICIPATION:\n" +
            "• Dual levels of government.\n" +
            "• Citizens participate at grass-roots level.\n\n" +
            "8) PROTECTION AGAINST TYRANNY:\n" +
            "• Divides power between national + state.\n" +
            "• Spreads national power among 3 branches.\n" +
            "• Check + balance → deterrent to tyranny.\n\n" +
            "9) MORE EFFICIENCY:\n" +
            "• Powers dispersed among states.\n" +
            "• States solve own problems.\n" +
            "• 'Cookie-cutter' approach less effective.\n" +
            "• Each state can come up with own solution.",
          bodyAm:
            "ተሳትፎ።\n" +
            "ከአምባገነንነት መከላከል።\n" +
            "ቅልጥፍና።",
        },
        {
          id: "n4-4",
          title: "Disadvantages — Conflict, regionalism, lack of accountability",
          titleAm: "ጉዳቶች 1-3",
          body:
            "1) CONFLICT OF AUTHORITY:\n" +
            "• Power struggle between center + state.\n" +
            "• Long-term conflict → hurdles to national development.\n\n" +
            "2) REGIONALISM OVER PATRIOTISM:\n" +
            "• Federalism promotes SMALLER levels of pride.\n" +
            "• One region vs another.\n" +
            "• Take away from patriotism.\n\n" +
            "3) LACK OF ACCOUNTABILITY:\n" +
            "• Shared responsibility → easy to relinquish.\n" +
            "• If something goes wrong, both sides can deny.",
          bodyAm:
            "ስልጣን ግጭት።\n" +
            "ክልላዊነት።\n" +
            "ተጠያቂነት እጥረት።",
        },
        {
          id: "n4-5",
          title: "Disadvantages — Inequalities, blocked national policies",
          titleAm: "ጉዳቶች 4-5",
          body:
            "4) INEQUALITIES BETWEEN STATES:\n" +
            "• Regional inequalities.\n" +
            "• Example: education funding varies.\n" +
            "• Taxes, health care, welfare vary.\n" +
            "• Increases regional inequality.\n\n" +
            "5) BLOCKAGE OF NATIONALIST POLICIES:\n" +
            "• States challenge national laws in court.\n" +
            "• Refuse to enforce national laws.\n" +
            "• Deliberately obstruct enforcement.",
          bodyAm:
            "ክልላዊ አለመመጣጠን።\n" +
            "ብሔራዊ ፖሊሲዎችን ማዕቀብ።",
        },
        {
          id: "n4-6",
          title: "⚠ Remember trap — Pros & cons",
          titleAm: "⚠ አትርሳ — ጥቅምና ጉዳት",
          body:
            "• 9 advantages: division of power, separate govt, written constitution, rigid constitution, special judiciary, better understanding of local issues, citizen participation, protection against tyranny, efficiency.\n" +
            "• 5 disadvantages: conflict of authority, regionalism, lack of accountability, inequalities, blockage of nationalist policies.\n" +
            "• SPECIAL JUDICIARY = guardian of constitution.\n" +
            "• PROTECTION AGAINST TYRANNY = through check + balance.",
          bodyAm:
            "9 ጥቅሞች።\n" +
            "5 ጉዳቶች።",
        },
      ],
    },

    // ============================================================
    // 5.5 ETHIOPIAN FEDERALISM AND DIVERSITY
    // ============================================================
    {
      id: "n5",
      title: "5.5 The Role of Federalism in Accommodating Diversity in Ethiopia",
      titleAm: "5.5 በኢትዮጵያ ብዝሃነትን ማስተናገድ",
      body:
        "Abatu, Ethiopia's federalism reconciles ETHNIC DIVERSITY with POLITICAL UNITY. Adopted 1995.",
      bodyAm:
        "አባቱ፣ የኢትዮጵያ ፌዴራሊዝም = ብዝሃነት + አንድነት።",
      children: [
        {
          id: "n5-1",
          title: "Rationale of Ethiopian federalism",
          titleAm: "ምክንያት",
          body:
            "RATIONALE:\n" +
            "• Reconciliation of ETHNIC DIVERSITY with POLITICAL UNITY.\n" +
            "• Culmination of long search for constitutional formula.\n" +
            "• Ethiopia = centralized unitary state for almost a century.\n" +
            "• Idea of centralized unified state PROVED INEFFECTIVE.\n" +
            "• Federalism = promising formula for UNITY.\n" +
            "• Past regimes: 'one nation, one government, one language, one religion'.\n" +
            "• This SIDELINED diversity.\n" +
            "• Current: accommodate INTERESTS of DISTINCT ETHNIC GROUPS.",
          bodyAm:
            "ብዝሃነት + አንድነት።\n" +
            "ያለፈው 'አንድ ብሔር' አልሰራም።\n" +
            "ፌዴራሊዝም = መፍትሔ።",
        },
        {
          id: "n5-2",
          title: "Feature 1 — Power division between states + federal",
          titleAm: "ባህሪ 1 — ስልጣን ክፍፍል",
          body:
            "POWER DIVISION:\n" +
            "• Two levels: federal + state.\n" +
            "• Constitutional regulation of inter-government relations.\n" +
            "• Constitution lists:\n" +
            "   – Federal powers.\n" +
            "   – State powers.\n" +
            "   – Concurrent powers.\n" +
            "   – Residual power → states.\n\n" +
            "ARTICLE 50(8):\n" +
            "• 'Federal and state powers are defined by this constitution.'\n" +
            "• 'States shall respect powers of federal.'\n" +
            "• 'Federal shall respect powers of states.'\n" +
            "• Both have constitutionally limited jurisdiction.\n" +
            "• Restriction on crossing into each other's affairs.",
          bodyAm:
            "Federal + State + Concurrent + Residual።\n" +
            "Article 50(8): እርስ በርስ መከባበር።",
        },
        {
          id: "n5-3",
          title: "Feature 2 — Bi-cameral legislature",
          titleAm: "ባህሪ 2 — ሁለት ምክር ቤቶች",
          body:
            "BI-CAMERAL LEGISLATURE:\n" +
            "• Article 45, 53 of FDRE Constitution.\n" +
            "• TWO federal houses.\n\n" +
            "A) HOUSE OF PEOPLE'S REPRESENTATIVES (HPR):\n" +
            "• Supreme political organ.\n" +
            "• Article 53(3): highest authority.\n" +
            "• Article 55: powers + functions.\n" +
            "• Can legislate on all federal matters (Article 51).\n" +
            "• Together with HoF: measures on human rights violations.\n" +
            "• Can question PM + federal officials.\n" +
            "• 1/3 of members can request discussion.\n\n" +
            "B) HOUSE OF FEDERATION (HoF):\n" +
            "• Representative of nations/nationalities/peoples.\n" +
            "• 5-year tenure.\n" +
            "• Each nationality = at least 1 member.\n" +
            "• Large groups: +1 for each 1 million additional population.\n" +
            "• Elected directly OR by state council (Articles 61-62).",
          bodyAm:
            "HPR = የህዝብ ተወካዮች ምክር ቤት።\n" +
            "HoF = የፌዴሬሽን ምክር ቤት።\n" +
            "HPR = ሁሉንም ይለያል።\n" +
            "HoF = ብሔሮችን ይወክላል።",
        },
        {
          id: "n5-4",
          title: "Challenges to Ethiopian federalism",
          titleAm: "ችግሮች",
          body:
            "CHALLENGES:\n" +
            "• Balance between UNITY + DIVERSITY.\n" +
            "• National SELF-DETERMINATION + federalism.\n" +
            "• Constituent states coincide with nationalities.\n" +
            "• Relation between individual + collective rights.\n" +
            "• Some constituent units NOT YET viable regional governments.\n" +
            "• Some don't seem to have nation/nationality status.\n" +
            "• Lack of experience, skilled manpower, resources.\n" +
            "• Historical marginalization.\n\n" +
            "SOLUTION:\n" +
            "• ASYMMETRIC federalism (at least short term).\n" +
            "• Federal powers extensive for problematic states.",
          bodyAm:
            "Unity vs diversity።\n" +
            "አንዳንድ ክልሎች ዝግጁ አይደሉም።\n" +
            "Asymmetric federalism = መፍትሔ።",
        },
        {
          id: "n5-5",
          title: "⚠ Remember trap — Ethiopian federalism",
          titleAm: "⚠ አትርሳ — የኢትዮጵያ ፌዴራሊዝም",
          body:
            "• Ethiopia = federalism adopted 1995.\n" +
            "• Rationale: reconcile ETHNIC DIVERSITY + POLITICAL UNITY.\n" +
            "• Past regimes: 'one nation, one language, one religion' → sidelined diversity.\n" +
            "• Article 50(8): federal + state respect each other's powers.\n" +
            "• BI-CAMERAL: HPR + HoF.\n" +
            "• HPR = supreme political organ; Article 55.\n" +
            "• HoF = represents nations/nationalities; Articles 61-62.\n" +
            "• HoF: +1 per 1 million additional population for large groups.\n" +
            "• CHALLENGES: unity vs diversity; self-determination; asymmetric federalism.",
          bodyAm:
            "1995።\n" +
            "HPR + HoF።\n" +
            "Article 50(8)።\n" +
            "Asymmetric = መፍትሔ።",
        },
      ],
    },

    // ============================================================
    // KEY DEFINITIONS
    // ============================================================
    {
      id: "nFormula",
      title: "Key Definitions & Relationships — Unit 5",
      titleAm: "ዋና ትርጓሜዎች — ክፍል 5",
      body:
        "| Concept                       | Definition / Key Fact                              |\n" +
        "|-------------------------------|----------------------------------------------------|\n" +
        "| Federalism                    | Power divided between federal + regional governments |\n" +
        "| Devolution                    | Transfer of power to region                        |\n" +
        "| Dual federalism               | 'Layer cake' — separate powers                     |\n" +
        "| Cooperative federalism        | 'Marble cake' — overlapping powers                 |\n" +
        "| 3 key features                | Division of power, decentralization, written supreme constitution |\n" +
        "| 9 advantages                  | Division of power, separate govt, written constitution, rigid constitution, special judiciary, local issues, citizen participation, protection against tyranny, efficiency |\n" +
        "| 5 disadvantages              | Conflict of authority, regionalism, lack of accountability, inequalities, blockage of nationalist policies |\n" +
        "| Ethiopian federalism          | Adopted 1995; ethnic-based                        |\n" +
        "| Rationale                     | Reconcile ethnic diversity + political unity       |\n" +
        "| Bi-cameral                    | HPR + House of Federation                          |\n" +
        "| HPR                           | Supreme political organ; Article 55                |\n" +
        "| HoF                           | Represents nations/nationalities; Articles 61-62   |\n" +
        "| Article 50(8)                 | Federal + state respect each other's powers        |",
      bodyAm:
        "| ጽንሰ-ሐሳብ         | ትርጉም                          |\n" +
        "|------------------|--------------------------------|\n" +
        "| Federalism       | የስልጣን ክፍፍል                    |\n" +
        "| Dual             | Layer cake                     |\n" +
        "| Cooperative      | Marble cake                    |\n" +
        "| HPR              | የህዝብ ተወካዮች                   |\n" +
        "| HoF              | የፌዴሬሽን ምክር ቤት              |\n" +
        "| Article 50(8)    | መከባበር                        |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 5",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 5",
      body:
        "1) FEDERALISM = division of power; NOT unitary.\n" +
        "2) DEVOLUTION = transfer of power.\n" +
        "3) DUAL = 'layer cake'; COOPERATIVE = 'marble cake'.\n" +
        "4) 3 features: division of power, decentralization, written supreme constitution.\n" +
        "5) Decentralization = units SUBORDINATE to center.\n" +
        "6) Federation = states NOT creations of federal government.\n" +
        "7) 9 advantages + 5 disadvantages.\n" +
        "8) Ethiopia: 1995; ethnic-based federalism.\n" +
        "9) BI-CAMERAL: HPR + HoF.\n" +
        "10) HPR = supreme political organ; Article 55.\n" +
        "11) HoF = represents nations/nationalities; +1 per 1M additional.\n" +
        "12) Article 50(8): mutual respect for powers.\n" +
        "13) Asymmetric federalism = solution for weak states.",
      bodyAm:
        "1) Layer/Marble።\n" +
        "2) 3 ባህሪያት።\n" +
        "3) 9 + 5።\n" +
        "4) 1995።\n" +
        "5) HPR + HoF።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Federalism is best defined as:", options: ["Centralized government", "Power divided between federal + regional governments", "Military rule", "Religious rule"], answer: "1", explanation: "Power divided between federal + regional governments." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Devolution means:", options: ["Centralizing power", "Transfer of power to the region", "Abolishing regions", "Military takeover"], answer: "1", explanation: "Transfer of power to the region." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Dual federalism is also called:", options: ["Marble cake", "Layer cake", "Cheese cake", "Pound cake"], answer: "1", explanation: "Dual = 'Layer Cake'." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Cooperative federalism is also called:", options: ["Layer cake", "Marble cake", "Cheese cake", "Pound cake"], answer: "1", explanation: "Cooperative = 'Marble Cake'." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "How many key features of federalism are there?", options: ["Two", "Three", "Four", "Five"], answer: "1", explanation: "Three." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Which is NOT a key feature of federalism?", options: ["Division of power", "Decentralized system", "Written supreme constitution", "Military control"], answer: "3", explanation: "Military control is NOT a feature." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "How many advantages of federalism are there?", options: ["Five", "Seven", "Nine", "Eleven"], answer: "2", explanation: "Nine." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Which is NOT an advantage of federalism?", options: ["Protection against tyranny", "Increasing citizen participation", "More efficiency", "Regionalism over patriotism"], answer: "3", explanation: "Regionalism is a DISADVANTAGE." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "How many disadvantages of federalism are there?", options: ["Three", "Four", "Five", "Six"], answer: "2", explanation: "Five." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Which is a disadvantage of federalism?", options: ["Protection against tyranny", "Citizen participation", "Lack of accountability", "More efficiency"], answer: "2", explanation: "Lack of accountability = disadvantage." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Ethiopia adopted federalism in:", options: ["1985", "1991", "1995", "2000"], answer: "2", explanation: "1995." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "How many federal houses does Ethiopia have?", options: ["One", "Two", "Three", "Four"], answer: "1", explanation: "Two: HPR + House of Federation." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "HPR stands for:", options: ["House of People's Representatives", "House of Public Representation", "House of Parliament Representatives", "House of People's Rights"], answer: "0", explanation: "House of People's Representatives." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "HoF stands for:", options: ["House of Federation", "House of Freedom", "House of Funds", "House of Foreign Affairs"], answer: "0", explanation: "House of Federation." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "The rationale of Ethiopian federalism is:", options: ["To create conflict", "To reconcile ethnic diversity with political unity", "To promote one ethnicity", "To weaken regions"], answer: "1", explanation: "Reconcile ethnic diversity with political unity." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Dual federalism divides power:", options: ["Overlapping", "Separately (clear division)", "Equally", "Randomly"], answer: "1", explanation: "Clear division — 'layer cake'." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Cooperative federalism requires state + national governments to:", options: ["Compete", "Share power + collaborate on overlapping functions", "Separate completely", "Ignore each other"], answer: "1", explanation: "Share power + collaborate." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "House of Federation represents:", options: ["Businesses only", "Nations, nationalities, + peoples", "Military", "Only federal officials"], answer: "1", explanation: "Represents nations, nationalities, + peoples." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "Which is an advantage of DUAL federalism?", options: ["Protection of local jurisdictions", "Reduced cooperation", "Increased tension", "Decreased unity"], answer: "0", explanation: "Protection of local jurisdictions." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "Which is a disadvantage of COOPERATIVE federalism?", options: ["Reduced efficiency", "Decrease in state powers", "Decreased participation", "Reduced cooperation"], answer: "1", explanation: "Decrease in state powers." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "In decentralized system, local governments are:", options: ["Equal to center", "Subordinate to center", "Above center", "Independent"], answer: "1", explanation: "Subordinate to center." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "In a FEDERATION, states are:", options: ["Creations of federal government", "Not creations of federal government", "Subordinate to center", "Dependent on center"], answer: "1", explanation: "States are NOT creations — both derive from constitution." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "Special judiciary in federalism acts as:", options: ["Executor of laws", "Custodian + guardian of constitution", "Military tribunal", "Religious court"], answer: "1", explanation: "Custodian + guardian of constitution." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "Which disadvantage refers to regions putting themselves above the nation?", options: ["Conflict of authority", "Regionalism over patriotism", "Lack of accountability", "Inequalities"], answer: "1", explanation: "Regionalism over patriotism." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "Which disadvantage refers to states blocking national policies?", options: ["Conflict of authority", "Regionalism", "Blockage of nationalist policies", "Lack of accountability"], answer: "2", explanation: "Blockage of nationalist policies." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "Ethiopia's federalism is described as:", options: ["Dual only", "Cooperative only", "Ethnic-based", "No type"], answer: "2", explanation: "Ethnic-based federalism." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "Which Article of FDRE Constitution defines federal + state powers?", options: ["Article 50(8)", "Article 55", "Article 61", "Article 39"], answer: "0", explanation: "Article 50(8)." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "Article 55 defines powers of:", options: ["House of Federation", "House of People's Representatives", "Prime Minister", "President"], answer: "1", explanation: "Article 55 = HPR powers." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "Articles 61-62 define powers of:", options: ["HPR", "House of Federation", "Prime Minister", "President"], answer: "1", explanation: "HoF powers." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "House of Federation members serve for:", options: ["3 years", "4 years", "5 years", "6 years"], answer: "2", explanation: "5 years." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "In HoF, for each 1 million additional population:", options: ["+1 member", "+2 members", "+5 members", "No additional"], answer: "0", explanation: "+1 member." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "Which is a challenge to Ethiopian federalism?", options: ["Balance between unity + diversity", "Skilled manpower shortage", "Historical marginalization", "All of the above"], answer: "3", explanation: "All are challenges." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "Asymmetric federalism is proposed as a solution for:", options: ["Strong states", "Weak/underdeveloped constituent states", "Federal government", "Foreign relations"], answer: "1", explanation: "For weak constituent states." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Past Ethiopian regimes propagated:", options: ["Diversity", "Multiculturalism", "'One nation, one government, one language, one religion'", "Federalism"], answer: "2", explanation: "One nation, one government, one language, one religion." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Which is TRUE about cooperative federalism?", options: ["Federal + state compete", "Federal + state collaborate on overlapping functions", "Federal + state are completely separate", "Federal dominates state"], answer: "1", explanation: "Collaborate on overlapping functions." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Which statement about federalism is FALSE?", options: ["It divides power between federal + regional", "Neither level is supreme", "It avoids monopoly of power", "It has no constitution"], answer: "3", explanation: "Federalism has a written + supreme constitution." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Why is dual federalism called 'layer cake'?", options: ["Because it's sweet", "Because layers are separate + clearly divided", "Because it mixes layers", "Because it's baked"], answer: "1", explanation: "Layers are separate + clearly divided." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "Which statement about Ethiopian federalism is TRUE?", options: ["It's based on religion", "It's based on ethnicity", "It's based on geography only", "It's not federal"], answer: "1", explanation: "Ethnic-based." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "Which is NOT a role of the House of Federation?", options: ["Representing nations/nationalities", "Interpreting the constitution", "Adjudicating constitutional disputes", "Commanding the military"], answer: "3", explanation: "Commanding military is NOT a HoF role." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "Why is federalism important for accommodating diversity in Ethiopia?", options: ["It eliminates diversity", "It reconciles ethnic diversity with political unity", "It promotes one ethnicity", "It weakens regions"], answer: "1", explanation: "Reconciles ethnic diversity with political unity." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Which is TRUE about Ethiopia's bi-cameral legislature?", options: ["Only HPR exists", "Only HoF exists", "Both HPR + HoF exist", "No legislature exists"], answer: "2", explanation: "Both HPR + HoF exist." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "Why might asymmetric federalism be needed?", options: ["Some states are powerful", "Some states are not yet viable regional governments", "All states are equal", "Federal government is weak"], answer: "1", explanation: "Some states not yet viable — federal powers extensive." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "Which statement about the House of People's Representatives (HPR) is TRUE?", options: ["It represents only one ethnic group", "It is the supreme political organ", "It has no legislative powers", "It only meets once a year"], answer: "1", explanation: "Supreme political organ." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Define federalism and explain devolution.", answer: "FEDERALISM:\n• System of government where power is divided between FEDERAL + REGIONAL governments.\n• Political organization where activities of government are divided between regional + central governments.\n• Each kind of government has some activities on which it makes FINAL decisions.\n• Advocacy of multi-tiered government combining SHARED-RULE + REGIONAL SELF-RULE.\n• Neither federal nor constituent units constitutionally subordinate to the other.\n• Each has sovereign powers from constitution.\n• Each directly deals with + elected by citizens.\n\nDEVOLUTION:\n• Principle of federalism.\n• Transfer of power to the region that constitutes the federation.\n• Makes NEITHER federal NOR regional government supreme.\n• Power coordinated between center + region.\n• Avoids MONOPOLY of power.", explanation: "Federalism = power division; Devolution = transfer to region." },
    { id: "q45", type: "short", difficulty: "easy", stem: "Differentiate dual and cooperative federalism.", answer: "DUAL FEDERALISM ('LAYER CAKE'):\n• Clearly divides authority between state + national governments.\n• State + central each own separate powers; no intervention.\n• ADVANTAGES:\n  – Protection of local jurisdictions from federal overreach.\n  – Local laws develop + reflect local needs.\n• DISADVANTAGES:\n  – Tension between state + federal.\n  – Reduced cooperation.\n  – Decreased unity.\n\nCOOPERATIVE FEDERALISM ('MARBLE CAKE'):\n• State + national governments SHARE power + COLLABORATE on overlapping functions.\n• Federal + state + local interact cooperatively.\n• Solve common problems together.\n• ADVANTAGES:\n  – Efficiency in services.\n  – Practical approach.\n  – Both hold own powers.\n  – Incentive to cooperate.\n  – States influence program implementation.\n• DISADVANTAGES:\n  – Decrease in state powers.\n  – Federal intervention in state affairs.", explanation: "Dual = layer cake (separate); Cooperative = marble cake (overlapping)." },
    { id: "q46", type: "short", difficulty: "medium", stem: "List the three key features of federalism.", answer: "THREE KEY FEATURES:\n\n1) DIVISION OF POWER:\n• Constitutional division between federal + states.\n• Relates to legislative, executive, judicial, financial functions.\n• Based on DUAL PRINCIPLE: desire to be united + autonomous.\n• Federal: powers shared in common.\n• States: powers for regional identity.\n\n2) DECENTRALIZED SYSTEM OF GOVERNMENT:\n• Units (local governments) subordinate to center.\n• Created by center via STATUTE.\n• Can be wiped out at any time.\n• Delegation = at MERCY of center.\n• Subject to UNILATERAL withdrawal.\n\nIN A FEDERATION:\n• Division constitutionally GUARANTEED.\n• States NOT creations of federal government.\n• Both derive authority from constitution.\n\n3) WRITTEN + SUPREME FEDERAL CONSTITUTION:\n• Division based on written + supreme constitution.\n• Both orders must submit.\n• Federations originate from bargains.\n• Designed to serve generations.\n• Written constitution = record of bargain.\n• Binding.", explanation: "Division of power, decentralization, written supreme constitution." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Explain the advantages of federalism.", answer: "NINE ADVANTAGES:\n\n1) DIVISION OF POWERS:\n• Powers distributed between center + units.\n\n2) SEPARATE GOVERNMENT:\n• Center + units have separate apparatus.\n\n3) WRITTEN CONSTITUTION:\n• Political partnership requires written agreement.\n\n4) RIGID CONSTITUTION:\n• Sacred agreement; not easily violated.\n• Flexible constitution allows curtailment of state autonomy.\n\n5) SPECIAL JUDICIARY:\n• Adjudicates constitutional disputes.\n• Guardian + custodian of constitution.\n• Can declare laws unconstitutional.\n\n6) BETTER UNDERSTANDING OF LOCAL ISSUES:\n• Central can't understand every area.\n• Local branches at grass roots.\n\n7) INCREASING CITIZEN PARTICIPATION:\n• Dual levels increase grass-roots participation.\n\n8) PROTECTION AGAINST TYRANNY:\n• Divides power → check + balance.\n• Deterrent to tyranny.\n\n9) MORE EFFICIENCY:\n• States solve own problems.\n• 'Cookie-cutter' approach less effective.", explanation: "9 advantages: division, separate govt, written/rigid constitution, judiciary, local issues, participation, anti-tyranny, efficiency." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Explain the disadvantages of federalism.", answer: "FIVE DISADVANTAGES:\n\n1) CONFLICT OF AUTHORITY:\n• Power struggle between center + state.\n• Long-term conflict → hurdles to development.\n\n2) REGIONALISM OVER PATRIOTISM:\n• Promotes smaller levels of pride.\n• One region vs another.\n• Takes away from national patriotism.\n\n3) LACK OF ACCOUNTABILITY:\n• Shared responsibility → easy to relinquish.\n• Both sides can deny if something goes wrong.\n\n4) INEQUALITIES BETWEEN STATES:\n• Regional inequalities.\n• Education funding, taxes, health care vary.\n• Increases disparities.\n\n5) BLOCKAGE OF NATIONALIST POLICIES BY STATES:\n• States challenge national laws in court.\n• Refuse to enforce.\n• Deliberately obstruct.", explanation: "Conflict, regionalism, accountability, inequalities, blockage." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Explain Ethiopia's bi-cameral legislature.", answer: "BI-CAMERAL LEGISLATURE:\n• FDRE Constitution (Articles 45, 53).\n• TWO federal houses.\n\nA) HOUSE OF PEOPLE'S REPRESENTATIVES (HPR):\n• Supreme political organ (Article 53(3)).\n• Article 55: powers + functions.\n• Legislates on all federal matters (Article 51).\n• Together with HoF: measures on human rights violations.\n• Can question PM + officials.\n• 1/3 of members can request discussion.\n\nB) HOUSE OF FEDERATION (HoF):\n• Representative organ of nations/nationalities/peoples.\n• 5-year tenure.\n• Each nationality = at least 1 member.\n• Large groups: +1 per 1 million additional population.\n• Elected directly OR by state council (Articles 61-62).\n\nKEY ROLES OF HoF:\n• Interprets constitution.\n• Adjudicates constitutional disputes.\n• Represents ethnic groups.", explanation: "HPR = supreme; HoF = represents nations." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Explain the role of federalism in accommodating diversity in Ethiopia.", answer: "RATIONALE:\n• Reconciliation of ETHNIC DIVERSITY with POLITICAL UNITY.\n• Ethiopia: centralized unitary state for almost a century.\n• Idea of centralized unified state PROVED INEFFECTIVE.\n• Federalism = promising formula for UNITY.\n\nPAST REGIMES:\n• 'One nation, one government, one language, one religion'.\n• Completely SIDELINED diversity.\n\nCURRENT FEDERALISM:\n• Accommodates INTERESTS of distinct ethnic groups.\n• Constitutional recognition of diversity.\n\nFEATURES:\n1) POWER DIVISION:\n• Federal, state, concurrent, residual (to states).\n• Article 50(8): mutual respect for powers.\n\n2) BI-CAMERAL:\n• HPR (supreme political organ).\n• HoF (represents nations/nationalities/peoples).\n\nCHALLENGES:\n• Balance between unity + diversity.\n• National self-determination vs federalism.\n• Constituent states coincide with nationalities.\n• Individual vs collective rights.\n• Some states not yet viable.\n• Lack of experience, resources, historical marginalization.\n\nSOLUTION:\n• ASYMMETRIC federalism (at least short term).\n• Federal powers extensive for weak states.", explanation: "Reconciles diversity + unity; ethnic-based; some challenges remain." },
  ],
};