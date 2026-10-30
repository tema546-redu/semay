import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 CITIZENSHIP EDUCATION — UNIT 7
// PATRIOTISM
// Source: Grade 10 Citizenship Education Student Textbook (pp. 140–164)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, definition boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10CivicsCh7: Chapter = {
  id: "ch7",
  number: 7,
  title: "Patriotism",
  titleAm: "አርበኝነት",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about PATRIOTISM — love, devotion, and commitment to one's country.\n\n" +
        "It has FIVE parts:\n" +
        "1) Meaning of patriotism.\n" +
        "2) Types of patriotism (6 types).\n" +
        "3) Bases of patriotism (8 bases).\n" +
        "4) Importance of patriotism.\n" +
        "5) Duties expected of patriots (4 duties).\n\n" +
        "The WHOLE chapter reduces to FIVE key ideas:\n" +
        "• Patriotism = from Latin 'patria' (fatherland) → love of country.\n" +
        "• 6 types: Constitutional, Traditional, Icon, Symbolic, Capital, Environmental.\n" +
        "• 8 bases: equality, tolerance, loyalty, well-being concern, sacrifice, protecting constitution, personal/civic duties, defense.\n" +
        "• 4 duties: knowing true history, promoting common good, poverty reduction, voluntarism.\n" +
        "• PATRIOTISM ≠ nationalism (nationalism = nation-state paramount).\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ አምስቱ ዋና ሐሳቦች፡\n" +
        "• ፓትሪዮቲዝም = የሀገር ፍቅር።\n" +
        "• 6 ዓይነቶች።\n" +
        "• 8 መሠረቶች።\n" +
        "• 4 ግዴታዎች።\n" +
        "• ፓትሪዮቲዝም ≠ ብሔርተኝነት።",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the meaning",
          titleAm: "ደረጃ 1 · ትርጉሙን መረዳት",
          body:
            "PATRIOTISM:\n" +
            "• From Latin 'PATRIA' = fatherland.\n" +
            "• Sentiment; psychological attachment to one's nation.\n" +
            "• Belongingness to definite historical + cultural setting.\n" +
            "• Deep-rooted sentiment of having separate father/mother land.\n" +
            "• Live for or devotion to one's country + fundamental values.\n" +
            "• Feeling proud of country's history, culture, tradition.\n" +
            "• ACTION-ORIENTED (practical, not just feeling).\n" +
            "• Devoting time, ability, knowledge, even life for fundamental principles.\n" +
            "• Expressed in: war front, research, good ethics, competence, leadership, responsibility.",
          bodyAm:
            "patria = አባት ምድር።\n" +
            "የሀገር ፍቅር።\n" +
            "ተግባራዊ።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the 6 types",
          titleAm: "ደረጃ 2 · 6 ዓይነቶች",
          body:
            "SIX TYPES:\n" +
            "1) CONSTITUTIONAL: commitment to democracy + human rights; coexistence, tolerance.\n" +
            "2) TRADITIONAL: readiness to give life for motherland; particularistic sense of belonging.\n" +
            "3) ICON: shows love through actions with positive impact; heroic; willing to risk life.\n" +
            "4) SYMBOLIC: respect for national symbols (flag, anthem).\n" +
            "5) CAPITAL: focus on national economic development.\n" +
            "6) ENVIRONMENTAL: love for country's environment; protecting nature.",
          bodyAm:
            "Constitutional፣ Traditional፣ Icon፣ Symbolic፣ Capital፣ Environmental።\n" +
            "CTISCE።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master bases and duties",
          titleAm: "ደረጃ 3 · መሠረቶችና ግዴታዎች",
          body:
            "EIGHT BASES:\n" +
            "1) Equality.\n" +
            "2) Tolerance.\n" +
            "3) Loyalty.\n" +
            "4) Concern for well-being of country.\n" +
            "5) Sacrificing personal desires for common good.\n" +
            "6) Protecting the constitution.\n" +
            "7) Carrying out personal + civic duties.\n" +
            "8) Defending country during external attack.\n\n" +
            "FOUR DUTIES:\n" +
            "1) Knowing TRUE history of country.\n" +
            "2) Promoting COMMON GOOD.\n" +
            "3) POVERTY REDUCTION.\n" +
            "4) VOLUNTARISM.",
          bodyAm:
            "8 መሠረቶች።\n" +
            "4 ግዴታዎች፡ ታሪክ፣ የጋራ ጥቅም፣ ድህነት ቅነሳ፣ በጎ ፈቃድ።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Do you know 6 types of patriotism?\n" +
            "2) Do you know 8 bases?\n" +
            "3) Do you know 4 duties?\n" +
            "4) Do you know Latin origin ('patria')?\n" +
            "5) Do you know Adwa as example?",
          bodyAm:
            "1) 6 ዓይነቶች?\n" +
            "2) 8 መሠረቶች?\n" +
            "3) 4 ግዴታዎች?\n" +
            "4) patria?\n" +
            "5) አድዋ?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፋርት",
          body:
            "• PATRIOTISM = from Latin 'patria' (fatherland).\n" +
            "• ACTION-ORIENTED — not just feeling.\n" +
            "• 6 types: Constitutional, Traditional, Icon, Symbolic, Capital, Environmental.\n" +
            "• CONSTITUTIONAL = commitment to democracy + human rights.\n" +
            "• TRADITIONAL = ready to give life for motherland.\n" +
            "• ICON = heroic actions with positive impact.\n" +
            "• SYMBOLIC = respect for national symbols.\n" +
            "• CAPITAL = focus on economic development.\n" +
            "• ENVIRONMENTAL = protecting environment.\n" +
            "• ADWA (1896) = example of patriotic deed.\n" +
            "• 4 duties: history, common good, poverty reduction, voluntarism.\n" +
            "• PATRIOTISM ≠ NATIONALISM.",
          bodyAm:
            "patria = አባት ምድር።\n" +
            "6 ዓይነቶች።\n" +
            "8 መሠረቶች።\n" +
            "4 ግዴታዎች።\n" +
            "አድዋ = ምሳሌ።",
        },
      ],
    },

    // ============================================================
    // 7.1 MEANING OF PATRIOTISM
    // ============================================================
    {
      id: "n1",
      title: "7.1 The Meaning of Patriotism",
      titleAm: "7.1 የአርበኝነት ትርጉም",
      body:
        "Abatu, PATRIOTISM = from Latin 'patria' (fatherland). It is a deep-rooted sentiment of attachment to one's country.",
      bodyAm:
        "አባቱ፣ patria = አባት ምድር።\n" +
        "የሀገር ፍቅር።",
      children: [
        {
          id: "n1-1",
          title: "Definition of patriotism",
          titleAm: "ትርጉም",
          body:
            "PATRIOTISM:\n" +
            "• From Latin term 'PATRIA' = fatherland.\n" +
            "• Sentiment; psychological attachment to one's nation.\n" +
            "• Belongingness to definite historical + cultural setting.\n" +
            "• Specific country with definite language + customs.\n" +
            "• Deep-rooted sentiment of having separate father/mother land.\n" +
            "• Live for or devotion to one's country.\n" +
            "• Devotion to fundamental values + principles (security + welfare depend).\n" +
            "• Feeling proud of country's history, culture, tradition.\n" +
            "• Combination of: ethnic, cultural, political, historical feelings.",
          bodyAm:
            "patria = አባት ምድር።\n" +
            "ጥልቅ ስሜት።\n" +
            "ለሀገር መወሰን።",
        },
        {
          id: "n1-2",
          title: "Patriotism is action-oriented",
          titleAm: "ተግባራዊ",
          body:
            "PATRIOTISM IS ACTION-ORIENTED:\n" +
            "• NOT just feeling.\n" +
            "• Practical + action-oriented.\n" +
            "• True patriot feels proud of country's history, culture, world standing.\n" +
            "• In democratic system: devote TIME, ABILITY, KNOWLEDGE, even LIFE for fundamental principles.\n\n" +
            "EXPRESSED IN:\n" +
            "• War front.\n" +
            "• Research.\n" +
            "• Good ethics.\n" +
            "• Competence in work.\n" +
            "• Leadership.\n" +
            "• Ability to carry responsibility.\n\n" +
            "SHOULD BE:\n" +
            "• Continuous.\n" +
            "• Sustainable.\n" +
            "• Strongly fixed in minds of everyone.",
          bodyAm:
            "ተግባራዊ ነው።\n" +
            "በጦር ግንባር፣ በምርምር፣ በሥራ።\n" +
            "ቀጣይ + ዘላቂ።",
        },
        {
          id: "n1-3",
          title: "Patriotism vs Nationalism",
          titleAm: "Patriotism vs Nationalism",
          body:
            "PATRIOTISM:\n" +
            "• Love + devotion to country.\n" +
            "• Includes criticism for improvement.\n" +
            "• Action-oriented.\n" +
            "• Based on VALUES + PRINCIPLES.\n\n" +
            "NATIONALISM:\n" +
            "• Modern history movement.\n" +
            "• Nation-state PARAMOUNT for social, economic, cultural aspirations.\n" +
            "• Based on common descent, language, religion.\n" +
            "• Can lead to chauvinism.\n" +
            "• Can EXCESSIVELY favor own nation over others.\n\n" +
            "KEY: Patriotism is broader + more inclusive. Nationalism can become chauvinism.",
          bodyAm:
            "Patriotism = የሀገር ፍቅር።\n" +
            "Nationalism = ብሔርተኝነት።\n" +
            "Nationalism ወደ chauvinism ሊሸጋገር ይችላል።",
        },
        {
          id: "n1-4",
          title: "⚠ Remember trap — Meaning",
          titleAm: "⚠ አትርሳ — ትርጉም",
          body:
            "• PATRIOTISM = Latin 'patria' = fatherland.\n" +
            "• ACTION-ORIENTED — not just feeling.\n" +
            "• Expressed in: war front, research, ethics, competence, leadership.\n" +
            "• PATRIOTISM ≠ nationalism.\n" +
            "• Nationalism = nation-state paramount.\n" +
            "• National chauvinism = excessive/overly loyal at expense of others.",
          bodyAm:
            "patria = አባት ምድር።\n" +
            "ተግባራዊ።\n" +
            "Nationalism ≠ Patriotism።",
        },
      ],
    },

    // ============================================================
    // 7.2 TYPES OF PATRIOTISM
    // ============================================================
    {
      id: "n2",
      title: "7.2 Types of Patriotism",
      titleAm: "7.2 የአርበኝነት ዓይነቶች",
      body:
        "Abatu, there are SIX types: Constitutional, Traditional, Icon, Symbolic, Capital, Environmental.",
      bodyAm:
        "አባቱ፣ 6 ዓይነቶች።",
      children: [
        {
          id: "n2-1",
          title: "1) Constitutional patriotism",
          titleAm: "1) Constitutional",
          body:
            "CONSTITUTIONAL PATRIOTISM:\n" +
            "• Strong commitment/alignment with DEMOCRACY + HUMAN RIGHTS.\n" +
            "• Devotion to fundamental values + principles.\n" +
            "• Standing guard for right + interest of citizens.\n" +
            "• Acknowledge + appreciate existence of people with different language, color, sex, religion.\n" +
            "• Implies: coexistence, mutual understanding, tolerance, peaceful resolution of conflicts.",
          bodyAm:
            "ለዲሞክራሲ + ሰብዓዊ መብት ቁርጠኝነት።\n" +
            "ሁሉንም ማክበር።\n" +
            "መቻቻል።",
        },
        {
          id: "n2-2",
          title: "2) Traditional patriotism",
          titleAm: "2) Traditional",
          body:
            "TRADITIONAL PATRIOTISM:\n" +
            "• Readiness to GIVE LIFE for motherland.\n" +
            "• Particularistic sense of belonging to nation/country.\n" +
            "• NO attempt to align with democratic principles.\n" +
            "• Focus on SACRIFICE for homeland.",
          bodyAm:
            "ለሀገር ሕይወት መስጠት።\n" +
            "የተለየ የትውልድ ቦታ።\n" +
            "ያለ ዲሞክራሲ ግንኙነት።",
        },
        {
          id: "n2-3",
          title: "3) Icon patriotism",
          titleAm: "3) Icon",
          body:
            "ICON PATRIOTISM:\n" +
            "• Shows love through ACTIONS with POSITIVE IMPACT.\n" +
            "• HEROIC — willing to risk life for homeland.\n" +
            "• Attitudes + heroic values.\n" +
            "• Current generation follows past heroes.\n" +
            "• Strong + powerful spirit must be in every individual.\n" +
            "• Especially younger generation inheriting country.",
          bodyAm:
            "ተግባራዊ ጀግንነት።\n" +
            "ሕይወት ለመስጠት ፈቃደኛ።\n" +
            "ለወጣቶች አርዓያ።",
        },
        {
          id: "n2-4",
          title: "4) Symbolic patriotism",
          titleAm: "4) Symbolic",
          body:
            "SYMBOLIC PATRIOTISM:\n" +
            "• Respect for NATIONAL SYMBOLS.\n" +
            "• Symbols: flag, national anthem, other important symbols.\n" +
            "• Evoke spirit of individual as symbol of love for country.\n" +
            "• Abstract, affective attachment to nation + core values.\n" +
            "• Focused on trends + expresses concerns.\n" +
            "• High spirit of patriotic loyalty.\n" +
            "• Interested in own people + loving other nations.",
          bodyAm:
            "ብሔራዊ ምልክቶች።\n" +
            "ባንዲራ፣ ብሔራዊ መዝሙር።\n" +
            "ስሜታዊ ግንኙነት።",
        },
        {
          id: "n2-5",
          title: "5) Capital patriotism",
          titleAm: "5) Capital",
          body:
            "CAPITAL PATRIOTISM:\n" +
            "• Actions expressed through feelings of patriotism.\n" +
            "• Focus on DEVELOPMENT OF NATIONAL ECONOMY.\n" +
            "• Individuals feel involvement in economic development = major contribution.\n" +
            "• Contribute to overall well-being of society + state.\n" +
            "• Bring honor + raise image of country.\n" +
            "• Ignites national pride.\n" +
            "• Builds sense of identity.",
          bodyAm:
            "በኢኮኖሚ ልማት አርበኝነት።\n" +
            "የሀገር ምስል ማሳደግ።\n" +
            "ብሔራዊ ኩራት።",
        },
        {
          id: "n2-6",
          title: "6) Environmental patriotism",
          titleAm: "6) Environmental",
          body:
            "ENVIRONMENTAL PATRIOTISM:\n" +
            "• Environment = area you live + natural world around.\n" +
            "• Source of life + foundation.\n" +
            "• Responsibility of every human being to protect environment.\n" +
            "• Patriotism NOT just defending country.\n" +
            "• Can be shown through actions improving quality of life + environment.",
          bodyAm:
            "አካባቢን መጠበቅ።\n" +
            "የህይወት ምንጭ።\n" +
            "የሁሉም ግዴታ።",
        },
        {
          id: "n2-7",
          title: "⚠ Remember trap — Types",
          titleAm: "⚠ አትርሳ — ዓይነቶች",
          body:
            "• 6 types: Constitutional, Traditional, Icon, Symbolic, Capital, Environmental.\n" +
            "• CONSTITUTIONAL = democracy + human rights.\n" +
            "• TRADITIONAL = willing to die for country.\n" +
            "• ICON = heroic actions.\n" +
            "• SYMBOLIC = respect national symbols.\n" +
            "• CAPITAL = economic development.\n" +
            "• ENVIRONMENTAL = protect nature.",
          bodyAm:
            "6 ዓይነቶች።\n" +
            "Constitutional = ዲሞክራሲ።\n" +
            "Traditional = ሕይወት መስጠት።\n" +
            "Symbolic = ባንዲራ።\n" +
            "Capital = ኢኮኖሚ።\n" +
            "Environmental = ተፈጥሮ።",
        },
      ],
    },

    // ============================================================
    // 7.3 BASES OF PATRIOTISM
    // ============================================================
    {
      id: "n3",
      title: "7.3 The Bases of Patriotism",
      titleAm: "7.3 የአርበኝነት መሠረቶች",
      body:
        "Abatu, there are EIGHT bases of patriotism.",
      bodyAm:
        "አባቱ፣ 8 መሠረቶች።",
      children: [
        {
          id: "n3-1",
          title: "1) Equality",
          titleAm: "1) Equality",
          body:
            "EQUALITY:\n" +
            "• Constitutional patriotism based on equality.\n" +
            "• Respect + acceptance of constitutional democracy.\n" +
            "• Respect + observance of human rights.\n" +
            "• Every citizen expected to protect rights of others.\n" +
            "• Entitled NOT to engage in practices violating constitution.\n" +
            "• Citizens have equal rights + responsibilities in DEMOCRATIC systems.\n" +
            "• NO equal rights + responsibilities in undemocratic systems.\n" +
            "• In Ethiopia: rights + responsibilities (not just geography, minerals, mountains).",
          bodyAm:
            "እኩልነት።\n" +
            "መብቶች + ግዴታዎች።\n" +
            "በዲሞክራሲ ውስጥ እኩል።",
        },
        {
          id: "n3-2",
          title: "2) Tolerance",
          titleAm: "2) Tolerance",
          body:
            "TOLERANCE:\n" +
            "• Important attribute of true patriotism.\n" +
            "• Ethiopia = different ethnic groups, languages, religions.\n" +
            "• Space for ALL → common ground.\n" +
            "• Opportunity to claim pride in own legacy + history.\n\n" +
            "PAST vs PRESENT:\n" +
            "• Past: few groups could take pride (differences not recognized).\n" +
            "• Present (democratic + constitutional): tolerance = NOT a gift.\n" +
            "• It is a CONSTITUTIONAL + CIVIL OBLIGATION.\n" +
            "• Citizens respect + accept differences as normal.",
          bodyAm:
            "መቻቻል።\n" +
            "ሁሉም ቡድን ቦታ አለው።\n" +
            "የሕገ-መንግስት ግዴታ።",
        },
        {
          id: "n3-3",
          title: "3) Loyalty",
          titleAm: "3) Loyalty",
          body:
            "LOYALTY:\n" +
            "• Constitutional patriotism based on constitutional loyalty.\n" +
            "• In democratic system, citizens loyal to:\n" +
            "   – Constitution.\n" +
            "   – People.\n" +
            "   – Elected government.\n" +
            "   – Community at large.\n" +
            "• Take care of others' property + wealth.\n" +
            "• Perform duties + responsibilities assigned.",
          bodyAm:
            "ለሕገ-መንግስት፣ ለህዝብ፣ ለመንግስት ታማኝነት።\n" +
            "የሌሎችን ንብረት መጠበቅ።",
        },
        {
          id: "n3-4",
          title: "4) Concern for well-being of one's country",
          titleAm: "4) Well-being",
          body:
            "WELL-BEING CONCERN:\n" +
            "• Patriotic citizens READY to defend country.\n" +
            "• Ethiopia = long tradition of sacrifices for independence + territory.\n" +
            "• Proud of resistance against colonialism + foreign invasions.\n" +
            "• Every citizen has MORAL OBLIGATION to pay tributes + show respect to heroes.\n" +
            "• Heroes = patriots from many nations, nationalities, peoples.\n" +
            "• Fought against common enemy.\n" +
            "• Example: VICTORY OF ADWA (1896).",
          bodyAm:
            "ሀገርን መከላከል።\n" +
            "ለነጻነት መስዋዕትነት።\n" +
            "አድዋ (1896) = ዋና ምሳሌ።",
        },
        {
          id: "n3-5",
          title: "5) Sacrificing personal desires for common good",
          titleAm: "5) Sacrifice",
          body:
            "SACRIFICE:\n" +
            "• Based on love, devotion, commitment to country.\n" +
            "• True patriots SACRIFICE personal desires + interests.\n" +
            "• For the COMMON GOOD.\n" +
            "• Personal interests subordinated to community interests.",
          bodyAm:
            "የግል ፍላጎቶችን መስዋዕት ማድረግ።\n" +
            "ለጋራ ጥቅም።",
        },
        {
          id: "n3-6",
          title: "6) Protecting the constitution",
          titleAm: "6) Protecting constitution",
          body:
            "PROTECTING CONSTITUTION:\n" +
            "• Constitution = supreme law.\n" +
            "• Any law/custom/decision contravening constitution = NO EFFECT.\n" +
            "• Democratic + constitutional framework:\n" +
            "   – Duty of every citizen to support protection + implementation.\n" +
            "• Citizens contribute to respect of rights + entitlements of individuals + groups.",
          bodyAm:
            "ሕገ-መንግስት = የበላይ ሕግ።\n" +
            "የሁሉም ግዴታ መጠበቅ።\n" +
            "መብቶችን ማክበር።",
        },
        {
          id: "n3-7",
          title: "7) Carrying out personal and civic duties",
          titleAm: "7) Duties",
          body:
            "CARRYING OUT DUTIES:\n" +
            "• True patriots = good at personal + civic duties.\n" +
            "• NOT excessively self-centered.\n" +
            "• Understand success depends on healthy relationships with others.\n" +
            "• Commit to tasks WITHOUT enforcement.\n" +
            "• True patriots = SELF-RELIANT.",
          bodyAm:
            "ግል + ሲቪክ ግዴታዎችን ማከናወን።\n" +
            "ራስን መቻል።",
        },
        {
          id: "n3-8",
          title: "8) Defending country during external attack",
          titleAm: "8) Defending country",
          body:
            "DEFENDING COUNTRY:\n" +
            "• When country's security in danger → patriot ready to defend.\n" +
            "• Important for protecting from aggressors.\n" +
            "• Example: Battle of ADWA (1896) — Ethiopians from all nations + nationalities participated when Italy invaded.",
          bodyAm:
            "ሀገርን መከላከል።\n" +
            "የአድዋ ጦርነት = ዋና ምሳሌ።",
        },
        {
          id: "n3-9",
          title: "⚠ Remember trap — Bases",
          titleAm: "⚠ አትርሳ — መሠረቶች",
          body:
            "• EIGHT bases: equality, tolerance, loyalty, well-being concern, sacrifice, protecting constitution, personal/civic duties, defense.\n" +
            "• TOLERANCE = constitutional + civil obligation (not gift).\n" +
            "• LOYALTY = to constitution, people, government, community.\n" +
            "• SACRIFICE = personal desires for common good.\n" +
            "• PROTECTING CONSTITUTION = supreme law.\n" +
            "• DEFENSE = example of ADWA (1896).",
          bodyAm:
            "8 መሠረቶች።\n" +
            "Tolerance = ግዴታ።\n" +
            "Adwa = ምሳሌ።",
        },
      ],
    },

    // ============================================================
    // 7.4 IMPORTANCE OF PATRIOTISM
    // ============================================================
    {
      id: "n4",
      title: "7.4 The Importance of Patriotism",
      titleAm: "7.4 የአርበኝነት ጠቀሜታ",
      body:
        "Abatu, patriotism is extremely important — especially in families + schools. Children growing up with patriotic sentiments have better sense of self.",
      bodyAm:
        "አባቱ፣ አርበኝነት በጣም አስፈላጊ ነው።",
      children: [
        {
          id: "n4-1",
          title: "Importance — Bringing people together",
          titleAm: "ሰዎችን ማገናኘት",
          body:
            "BRINGING PEOPLE TOGETHER:\n" +
            "• Part of one nation → motivates toward mission of making country better.\n" +
            "• Related to one another.\n" +
            "• Develops sense of unity + togetherness.\n" +
            "• Gives DIRECTION + PURPOSE to lives.\n" +
            "• Example: watching Ethiopian flag at events → sense of belonging.",
          bodyAm:
            "አንድነት ይፈጥራል።\n" +
            "ባንዲራ = የትውልድ ስሜት።",
        },
        {
          id: "n4-2",
          title: "Importance — Building a stronger nation",
          titleAm: "ጠንካራ ብሔር መገንባት",
          body:
            "BUILDING STRONGER NATION:\n" +
            "• Motivates individuals to work toward betterment of country.\n" +
            "• Entire nation works together.\n" +
            "• Reminds citizens to keep values in mind.\n" +
            "• Stay united + together.\n" +
            "• Reminds Ethiopians to be HARDWORKING + HONEST.\n" +
            "• Work to make country excel.\n" +
            "• Support each other.",
          bodyAm:
            "ሁሉም ለሀገር ይሰራል።\n" +
            "ትጉህ + ታማኝ መሆን።",
        },
        {
          id: "n4-3",
          title: "Importance — Developing patriotic spirit as admirable quality",
          titleAm: "አርበኛ መንፈስ ማዳበር",
          body:
            "ADMIRABLE QUALITY:\n" +
            "• Citizens who know themselves + identify beliefs + values = infinitely MORE ATTRACTIVE.\n" +
            "• People who stick to virtues + practice regularly = stronger.\n" +
            "• Not afraid to display loyalty + affection.",
          bodyAm:
            "እራስን ማወቅ።\n" +
            "መልካም ባህሪያት።\n" +
            "ታማኝነት ማሳየት።",
        },
        {
          id: "n4-4",
          title: "⚠ Remember trap — Importance",
          titleAm: "⚠ አትርሳ — ጠቀሜታ",
          body:
            "• 3 main importance areas: bringing people together, building stronger nation, admirable quality.\n" +
            "• BRINGING PEOPLE TOGETHER = unity + purpose.\n" +
            "• STRONGER NATION = hardworking + honest + supportive.\n" +
            "• ADMIRABLE QUALITY = confident + loyal.",
          bodyAm:
            "3 ጠቀሜታዎች፡\n" +
            "አንድነት፣ ጠንካራ ሀገር፣ ጥሩ ባህሪ።",
        },
      ],
    },

    // ============================================================
    // 7.5 DUTIES EXPECTED OF PATRIOTS
    // ============================================================
    {
      id: "n5",
      title: "7.5 Duties Expected of Patriots",
      titleAm: "7.5 ከአርበኞች የሚጠበቁ ግዴታዎች",
      body:
        "Abatu, patriots have FOUR key duties: knowing true history, promoting common good, poverty reduction, and voluntarism.",
      bodyAm:
        "አባቱ፣ 4 ግዴታዎች።",
      children: [
        {
          id: "n5-1",
          title: "1) Knowing the true history of the country",
          titleAm: "1) ታሪክ ማወቅ",
          body:
            "TRUE HISTORY:\n" +
            "• History = part of social science dealing with social events.\n" +
            "• Writing can be DISTORTED for various reasons:\n" +
            "   – Political ambitions.\n" +
            "   – Wrong sources.\n" +
            "   – Outdated sources.\n" +
            "• History should be based on FACTS.\n" +
            "• Every historian should use facts.\n" +
            "• Some accounts misleading + far from truth.\n" +
            "• Writers create false evidence.\n\n" +
            "IMPORTANCE:\n" +
            "• True history helps understand + solve current problems.\n" +
            "• True history TEACHES VALUES.\n" +
            "• Fabricated history = false impression.\n" +
            "• History shapes values + beliefs.\n" +
            "• Awareness of correct history → tolerance + mutual understanding.\n" +
            "• Appreciate role of nations, nationalities, peoples in war, peace, development.",
          bodyAm:
            "ታሪክ በእውነት ላይ የተመሠረተ መሆን አለበት።\n" +
            "ሐሰተኛ ታሪክ = አደገኛ።\n" +
            "እውነተኛ ታሪክ = እሴቶችን ያስተምራል።",
        },
        {
          id: "n5-2",
          title: "2) Promoting common good",
          titleAm: "2) የጋራ ጥቅም",
          body:
            "COMMON GOOD:\n" +
            "• Subordination of personal interest to good of community.\n" +
            "• Also called CIVIC VIRTUE.\n" +
            "• Society = individuals whose interests are interdependent.\n" +
            "• Furtherance of community interest → common goal.\n" +
            "• Citizens benefit from joint effort.\n\n" +
            "PROMOTION METHODS:\n" +
            "• Identify STATE SECRETS + defend them.\n" +
            "• State secrets = information whose exposure endangers nation.\n" +
            "• Types: military, foreign relation, trade, medical secrets.\n" +
            "• MUST KEEP SECRET regardless of how learned.\n\n" +
            "FACTORS AFFECTING COMMON GOOD:\n" +
            "• Selfish personal interests.\n" +
            "• Corruption (nepotism, embezzlement).",
          bodyAm:
            "የጋራ ጥቅም = civic virtue።\n" +
            "የመንግስት ምስጢር መጠበቅ።\n" +
            "ራስ ወዳድነት + ሙስና = አደጋ።",
        },
        {
          id: "n5-3",
          title: "3) Poverty reduction",
          titleAm: "3) ድህነት ቅነሳ",
          body:
            "POVERTY REDUCTION:\n" +
            "• Reduce poverty to level where citizens meet at least basic necessities.\n" +
            "• Despite tech advances, poverty remains extremely serious.\n" +
            "• Varies from place to place.\n" +
            "• Poor countries: inability to meet basic needs.\n" +
            "• Indicators: illiteracy, inadequate social services, lack of infrastructure.\n\n" +
            "EFFECTS:\n" +
            "• Kills personal esteem + self-confidence.\n" +
            "• Stumbling block for democracy.\n" +
            "• Inequalities, transgression, rebellion.\n" +
            "• Weakens social cohesion.\n" +
            "• Country can disintegrate.\n" +
            "• ETHIOPIA = one of poorest in world.",
          bodyAm:
            "ድህነት = መሠረታዊ ፍላጎቶችን ማሟላት አለመቻል።\n" +
            "ራስ መተማመን ይቀንሳል።\n" +
            "ዲሞክራሲን ይጎዳል።",
        },
        {
          id: "n5-4",
          title: "4) Voluntarism",
          titleAm: "4) በጎ ፈቃደኝነት",
          body:
            "VOLUNTARISM:\n" +
            "• Personal initiative to give service to community.\n" +
            "• NOT for price or personal enrichment.\n" +
            "• Volunteers give services because:\n" +
            "   – Interested in cause.\n" +
            "   – Enjoy helping others.\n" +
            "• Provides valuable job experience.\n" +
            "• Citizens join together → form civic associations.\n" +
            "• Activities at community/national/international levels.\n" +
            "• Aim = promote well-being of people.\n" +
            "• Differ by focus (water shortage, school, health).",
          bodyAm:
            "ያለ ክፍያ ማገልገል።\n" +
            "ለሰዎች መርዳት።\n" +
            "የሥራ ልምድ ይሰጣል።",
        },
        {
          id: "n5-5",
          title: "⚠ Remember trap — Duties",
          titleAm: "⚠ አትርሳ — ግዴታዎች",
          body:
            "• FOUR duties: knowing history, promoting common good, poverty reduction, voluntarism.\n" +
            "• TRUE HISTORY = teaches values; false history = misleading.\n" +
            "• COMMON GOOD = civic virtue; defend state secrets.\n" +
            "• CORRUPTION + SELFISHNESS affect common good.\n" +
            "• POVERTY = stumbling block for democracy.\n" +
            "• VOLUNTARISM = service without pay.",
          bodyAm:
            "4 ግዴታዎች።\n" +
            "ታሪክ = እሴት።\n" +
            "ሙስና = አደጋ።\n" +
            "በጎ ፈቃድ = ያለ ክፍያ።",
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
        "| Concept                       | Definition / Key Fact                              |\n" +
        "|-------------------------------|----------------------------------------------------|\n" +
        "| Patriotism                    | Love + devotion to one's country                   |\n" +
        "| Latin origin                  | 'Patria' = fatherland                              |\n" +
        "| Nationalism                   | Movement where nation-state is paramount           |\n" +
        "| 6 types                       | Constitutional, Traditional, Icon, Symbolic, Capital, Environmental |\n" +
        "| Constitutional patriotism     | Commitment to democracy + human rights             |\n" +
        "| Traditional patriotism        | Readiness to give life for motherland              |\n" +
        "| Icon patriotism               | Heroic actions with positive impact                |\n" +
        "| Symbolic patriotism           | Respect for national symbols                       |\n" +
        "| Capital patriotism            | Focus on national economic development             |\n" +
        "| Environmental patriotism      | Love + protection for country's environment        |\n" +
        "| 8 bases                       | Equality, tolerance, loyalty, well-being, sacrifice, protecting constitution, duties, defense |\n" +
        "| 4 duties                      | True history, common good, poverty reduction, voluntarism |\n" +
        "| Adwa (1896)                   | Example of patriotic deed                          |\n" +
        "| Common good                   | Civic virtue — subordination of personal interest  |\n" +
        "| Voluntarism                   | Service without pay                                |",
      bodyAm:
        "| ጽንሰ-ሐሳብ         | ትርጉም                          |\n" +
        "|------------------|--------------------------------|\n" +
        "| Patriotism       | የሀገር ፍቅር                     |\n" +
        "| Patria           | አባት ምድር                       |\n" +
        "| 6 ዓይነቶች        | CTISCE                         |\n" +
        "| 8 መሠረቶች        | Equality + 7                   |\n" +
        "| 4 ግዴታዎች        | History, Common good, Poverty, Voluntarism |\n" +
        "| Adwa             | ምሳሌ                           |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 7",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 7",
      body:
        "1) PATRIOTISM = Latin 'patria' = fatherland.\n" +
        "2) ACTION-ORIENTED — not just feeling.\n" +
        "3) PATRIOTISM ≠ nationalism.\n" +
        "4) 6 types: Constitutional, Traditional, Icon, Symbolic, Capital, Environmental.\n" +
        "5) CONSTITUTIONAL = democracy + human rights.\n" +
        "6) TRADITIONAL = willing to give life.\n" +
        "7) ICON = heroic actions.\n" +
        "8) SYMBOLIC = national symbols.\n" +
        "9) CAPITAL = economic development.\n" +
        "10) ENVIRONMENTAL = protecting environment.\n" +
        "11) 8 bases: equality, tolerance, loyalty, well-being, sacrifice, protecting constitution, duties, defense.\n" +
        "12) TOLERANCE = constitutional obligation (not gift).\n" +
        "13) 4 duties: true history, common good, poverty reduction, voluntarism.\n" +
        "14) ADWA (1896) = example of patriotic deed.",
      bodyAm:
        "patria = አባት ምድር።\n" +
        "6 ዓይነቶች።\n" +
        "8 መሠረቶች።\n" +
        "4 ግዴታዎች።\n" +
        "Adwa = ምሳሌ።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "The word patriotism is derived from Latin term:", options: ["Populus", "Patria", "Pater", "Patronus"], answer: "1", explanation: "Patria = fatherland." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Patria means:", options: ["Mother land", "Father land", "Holy land", "Foreign land"], answer: "1", explanation: "Fatherland." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Patriotism is:", options: ["Love + devotion to country", "Hatred of country", "Military service only", "Tax payment only"], answer: "0", explanation: "Love + devotion to country." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "How many types of patriotism are identified?", options: ["Four", "Five", "Six", "Seven"], answer: "2", explanation: "Six types." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Constitutional patriotism refers to:", options: ["Only laws", "Commitment to democracy + human rights", "Military rule", "Religious rule"], answer: "1", explanation: "Commitment to democracy + human rights." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Traditional patriotism refers to:", options: ["Economic development", "Readiness to give life for motherland", "Protecting environment", "Respecting flag"], answer: "1", explanation: "Readiness to give life." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Icon patriotism refers to:", options: ["Respecting symbols", "Heroic actions with positive impact", "Economic development", "Protecting environment"], answer: "1", explanation: "Heroic actions." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Symbolic patriotism refers to:", options: ["Economic development", "Respect for national symbols", "Heroic actions", "Environmental protection"], answer: "1", explanation: "Respect for national symbols." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Capital patriotism focuses on:", options: ["Military", "National economic development", "Religion", "Language"], answer: "1", explanation: "Economic development." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Environmental patriotism focuses on:", options: ["Economic growth", "Protecting environment", "National symbols", "Religious faith"], answer: "1", explanation: "Protecting environment." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "How many bases of patriotism are there?", options: ["Five", "Six", "Seven", "Eight"], answer: "3", explanation: "Eight bases." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Which is NOT a base of patriotism?", options: ["Equality", "Tolerance", "Loyalty", "Corruption"], answer: "3", explanation: "Corruption is NOT a base — it undermines common good." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "How many duties of patriots are identified?", options: ["Two", "Three", "Four", "Five"], answer: "2", explanation: "Four duties." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Which is a duty of patriots?", options: ["Knowing true history", "Ignoring history", "Promoting corruption", "Avoiding voluntarism"], answer: "0", explanation: "Knowing true history." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Common good is also called:", options: ["Civic virtue", "Civic vice", "Nationalism", "Patriotism"], answer: "0", explanation: "Civic virtue." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Voluntarism means:", options: ["Service for high pay", "Personal initiative to serve without pay", "Military service", "Forced labor"], answer: "1", explanation: "Service without pay." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "The Battle of Adwa occurred in:", options: ["1886", "1896", "1906", "1916"], answer: "1", explanation: "1896." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Which is a trait of patriotic citizens?", options: ["Taking undue advantage of privileges", "Awareness of rights + duties", "Ignoring country", "Avoiding responsibility"], answer: "1", explanation: "Awareness of rights + duties." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "Which best describes constitutional patriotism?", options: ["Dying for country", "Commitment to democracy + human rights", "Respecting flag", "Economic growth"], answer: "1", explanation: "Commitment to democracy + human rights." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "In a democracy, tolerance is:", options: ["Optional gift", "Constitutional + civil obligation", "Military duty", "Religious practice"], answer: "1", explanation: "Constitutional + civil obligation." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "Which virtue is NOT promoted by indigenous institutions?", options: ["Peace", "Solidarity", "Dishonesty", "Respect"], answer: "2", explanation: "Dishonesty is NOT promoted." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "Which is TRUE about the relationship between patriotism and nationalism?", options: ["They are identical", "Patriotism is broader + more inclusive than nationalism", "Nationalism is broader", "They are opposites"], answer: "1", explanation: "Patriotism is broader + more inclusive." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "Which is a disadvantage of ignoring history?", options: ["Better values", "False impression + misleading", "Improved understanding", "Unity"], answer: "1", explanation: "False impression + misleading." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "State secrets are:", options: ["Any government info", "Info whose exposure endangers nation", "Public info", "Personal secrets"], answer: "1", explanation: "Info whose exposure endangers nation." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "Which factor affects common good?", options: ["Civic virtue", "Corruption", "Honesty", "Voluntarism"], answer: "1", explanation: "Corruption = negative factor." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "Poverty is a stumbling block for:", options: ["Democracy", "Economic growth", "Social cohesion", "All of the above"], answer: "3", explanation: "All of the above." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "Voluntarism helps:", options: ["Only volunteers", "Community well-being + volunteer experience", "Only government", "Only business"], answer: "1", explanation: "Community + volunteer experience." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "Which is TRUE about patriotism in a democratic system?", options: ["Limited to war front", "Devotion to fundamental principles in various ways", "Only voting", "Only paying taxes"], answer: "1", explanation: "Devotion to fundamental principles in various ways." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "In democratic system, citizens are loyal to all EXCEPT:", options: ["Constitution", "People", "Elected government", "Own personal desire only"], answer: "3", explanation: "Loyalty to own personal desire only is NOT a feature — loyalty is to constitution, people, government, community." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "Poverty reduction aims to reduce poverty to a level where:", options: ["Everyone is rich", "Citizens meet at least basic necessities", "No one works", "Government is absent"], answer: "1", explanation: "Citizens meet at least basic necessities." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Which is NOT a trait of patriotic citizen?", options: ["Awareness of rights + duties", "Eagerness to make country better", "Taking undue advantage of privileges", "Fighting for better nation"], answer: "2", explanation: "Taking undue advantage = NOT patriotic." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "Which is TRUE about importance of patriotism?", options: ["It weakens society", "It brings people together + builds stronger nation", "It causes division", "It promotes inequality"], answer: "1", explanation: "Brings people together + builds stronger nation." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "Which is the basis of constitutional patriotism?", options: ["Fear", "Equality", "Wealth", "Military power"], answer: "1", explanation: "Equality." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Battle of Adwa is an example of:", options: ["Traditional patriotism", "Symbolic patriotism", "Environmental patriotism", "Capital patriotism"], answer: "0", explanation: "Traditional — willing to give life for motherland." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Which is NOT a characteristic of nationalism?", options: ["Nation-state paramount", "Based on common descent", "Based on language", "Inclusive + broad"], answer: "3", explanation: "Nationalism is NOT inclusive/broad — patriotism is." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Which statement about patriotism is FALSE?", options: ["Action-oriented", "From Latin 'patria'", "Same as nationalism", "Devotion to country"], answer: "2", explanation: "Patriotism is NOT same as nationalism." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Which best explains 'sacrificing personal desires for common good'?", options: ["Getting rich personally", "Subordinating personal interests to community well-being", "Ignoring others", "Following selfish interests"], answer: "1", explanation: "Subordinating personal interests to community." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "Which is NOT a duty of a patriot?", options: ["Knowing true history", "Promoting common good", "Reducing poverty", "Promoting corruption"], answer: "3", explanation: "Promoting corruption is NOT a duty — it undermines common good." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "Which best describes patriotic citizenship in Ethiopia?", options: ["Respecting rights + interests of peoples", "Respecting national symbols", "Respecting rules + regulations", "All of the above"], answer: "3", explanation: "All are aspects of modern patriotism." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "Which statement about traditional patriotism is TRUE?", options: ["Based on democracy", "Ready to sacrifice life for country", "Based on economic development", "Protects environment"], answer: "1", explanation: "Willingness to sacrifice life for country." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Which is TRUE about false history?", options: ["It teaches values", "It creates false impressions used to mislead", "It is always accurate", "It promotes patriotism"], answer: "1", explanation: "False impressions used to mislead." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "Which statement about corruption is TRUE?", options: ["It promotes common good", "It damages common good + weakens rule of law", "It is patriotic", "It strengthens democracy"], answer: "1", explanation: "Damages common good + weakens rule of law." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "Which is TRUE about voluntarism?", options: ["Forced labor", "Service for personal enrichment", "Personal initiative to serve without pay", "Government program"], answer: "2", explanation: "Personal initiative to serve without pay." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Define patriotism and state its Latin origin.", answer: "PATRIOTISM:\n• From Latin term 'PATRIA' = fatherland.\n• Sentiment; psychological attachment to one's nation.\n• Belongingness to a definite historical + cultural setting.\n• Deep-rooted sentiment of having a separate father/mother land.\n• Live for or devotion to one's country + fundamental values + principles upon which its security + welfare depend.\n• Feeling of pride in country's history, culture, tradition.\n• Combination of ethnic, cultural, political, historical feelings.\n• ACTION-ORIENTED (not just feeling).\n\nEXPRESSED IN:\n• War front.\n• Research.\n• Good ethics.\n• Competence in work.\n• Leadership.\n• Ability to carry responsibility.", explanation: "From Latin 'patria' = fatherland; love + devotion to country." },
    { id: "q45", type: "short", difficulty: "easy", stem: "List the six types of patriotism.", answer: "SIX TYPES:\n\n1) CONSTITUTIONAL PATRIOTISM:\n• Strong commitment/alignment with democracy + human rights.\n• Standing guard for rights + interests.\n• Acknowledge + appreciate diversity.\n• Coexistence, mutual understanding, tolerance, peaceful resolution.\n\n2) TRADITIONAL PATRIOTISM:\n• Readiness to give life for motherland.\n• Particularistic sense of belonging to a nation/country.\n• No attempt to align with democratic principles.\n\n3) ICON PATRIOTISM:\n• Shows love through actions with positive impact.\n• Heroic — willing to risk life for homeland.\n• Inspires younger generation.\n\n4) SYMBOLIC PATRIOTISM:\n• Respect for national symbols (flag, anthem, others).\n• Abstract, affective attachment to nation + core values.\n\n5) CAPITAL PATRIOTISM:\n• Focus on national economic development.\n• Contribute to society's + state's well-being.\n• Raise country's image; build sense of identity.\n\n6) ENVIRONMENTAL PATRIOTISM:\n• Love for country's environment.\n• Protection of nature + improvement of quality of life.", explanation: "6 types: Constitutional, Traditional, Icon, Symbolic, Capital, Environmental." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Explain the bases of patriotism.", answer: "EIGHT BASES:\n\n1) EQUALITY:\n• Constitutional patriotism based on equality.\n• Respect + acceptance of constitutional democracy.\n• Respect + observance of human rights.\n• Equal rights + responsibilities in democratic systems.\n\n2) TOLERANCE:\n• Important attribute of true patriotism.\n• Space for all ethnic groups to share common ground.\n• Constitutional + civil obligation (not gift).\n• Respect + accept differences as normal.\n\n3) LOYALTY:\n• Constitutional loyalty.\n• Loyal to constitution, people, elected government, community.\n• Take care of others' property.\n\n4) CONCERN FOR WELL-BEING OF COUNTRY:\n• Ready to defend country.\n• Moral obligation to honor heroes.\n• Example: Adwa (1896).\n\n5) SACRIFICING PERSONAL DESIRES:\n• True patriots sacrifice personal desires for common good.\n\n6) PROTECTING THE CONSTITUTION:\n• Constitution = supreme law.\n• Duty of every citizen to support.\n\n7) CARRYING OUT PERSONAL + CIVIC DUTIES:\n• Not excessively self-centered.\n• Self-reliant.\n\n8) DEFENDING COUNTRY DURING EXTERNAL ATTACK:\n• Ready to defend when security in danger.\n• Example: Adwa (1896).", explanation: "8 bases: equality, tolerance, loyalty, well-being, sacrifice, constitution, duties, defense." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Explain the importance of patriotism.", answer: "THREE MAIN IMPORTANCE AREAS:\n\n1) BRINGING PEOPLE TOGETHER:\n• Part of one nation motivates citizens.\n• Mission of making country better.\n• Sense of unity + togetherness.\n• Gives direction + purpose to lives.\n• Example: Ethiopian flag at events → sense of belonging.\n\n2) BUILDING A STRONGER NATION:\n• Motivates individuals to work for betterment of country.\n• Entire nation works together.\n• Reminds Ethiopians to be hardworking + honest.\n• Support each other.\n\n3) DEVELOPING PATRIOTIC SPIRIT AS ADMIRABLE QUALITY:\n• Citizens who know themselves + identify beliefs + values are more attractive.\n• People who stick to virtues are stronger.\n• Not afraid to display loyalty + affection.\n\nOVERALL:\n• Especially important in families + schools.\n• Children with patriotic sentiments have better sense of self.", explanation: "Unity, stronger nation, admirable quality." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Explain the duties expected of patriots.", answer: "FOUR DUTIES:\n\n1) KNOWING TRUE HISTORY:\n• History = part of social science.\n• Can be distorted (political ambition, wrong sources).\n• True history teaches values.\n• False history misleads.\n• Helps understand + solve current problems.\n• Awareness of correct history → tolerance + mutual understanding.\n\n2) PROMOTING COMMON GOOD:\n• Subordination of personal interest to community good.\n• Called CIVIC VIRTUE.\n• Identify + defend state secrets.\n• State secrets = info whose exposure endangers nation.\n• Factors affecting common good: selfishness + corruption.\n\n3) POVERTY REDUCTION:\n• Reduce poverty to level where citizens meet basic necessities.\n• Poverty kills self-esteem + self-confidence.\n• Stumbling block for democracy.\n• Weakens social cohesion.\n• Ethiopia = one of poorest in world.\n\n4) VOLUNTARISM:\n• Personal initiative to serve community.\n• NOT for price or personal enrichment.\n• Provides valuable job experience.\n• Citizens form civic associations.\n• Activities at community/national/international levels.\n• Aim = promote well-being of people.", explanation: "History, common good, poverty reduction, voluntarism." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Differentiate patriotism and nationalism.", answer: "PATRIOTISM:\n• From Latin 'patria' = fatherland.\n• Love + devotion to country.\n• ACTION-ORIENTED (practical, not just feeling).\n• Broader + more inclusive.\n• Based on VALUES + PRINCIPLES.\n• Includes criticism for improvement.\n• Expressed in: war front, research, ethics, competence, leadership.\n\nNATIONALISM:\n• Modern history movement.\n• Nation-state PARAMOUNT for social, economic, cultural aspirations.\n• Based on common DESCENT, LANGUAGE, RELIGION.\n• Can lead to CHAUVINISM.\n• Can excessively favor own nation over others.\n• Narrower + potentially exclusive.\n\nCHauvinism:\n• Excessive/overly loyal to own country, race, gender.\n• Often at expense of others.\n\nKEY DIFFERENCE:\n• Patriotism = inclusive love of country.\n• Nationalism = can become exclusive/chauvinistic.", explanation: "Patriotism = inclusive love; Nationalism = nation-state paramount." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Explain the traits of patriotic citizens.", answer: "TRAITS OF PATRIOTIC CITIZENS:\n\n1) AWARENESS OF RIGHTS + DUTIES:\n• Don't take undue advantage of rights.\n• Fulfill duties.\n• Understand balance between rights + duties.\n\n2) FIGHTING FOR A BETTER NATION:\n• Not wrangling with others.\n• Acknowledge drawbacks.\n• Take responsibility to fix them.\n• Voice opinions on wrongdoings.\n\n3) EAGERNESS TO MAKE COUNTRY BETTER:\n• Constant efforts.\n• Career decisions, social work, spreading awareness, saving resources.\n• Take initiative.\n\n4) NOT TAKING UNDUE ADVANTAGE OF PRIVILEGES:\n• Wrong to take undue advantage of position.\n• Want things naturally.\n• Define principles clearly.\n• Ethical behavior.\n• Patriotism is contagious — affects people around.\n\nEXAMPLES:\n• Nurse refusing bribe (Roza case).\n• Teacher mobilizing community (Zeleke case).", explanation: "Awareness, fighting for better nation, eagerness, no undue privilege." },
  ],
};