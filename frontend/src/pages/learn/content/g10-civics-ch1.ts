import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 CITIZENSHIP EDUCATION — UNIT 1
// DEMOCRACY AND DEMOCRATIZATION
// Source: Grade 10 Citizenship Education Student Textbook (pp. 1–23)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, definition boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10CivicsCh1: Chapter = {
  id: "ch1",
  number: 1,
  title: "Democracy and Democratization",
  titleAm: "ዲሞክራሲና ዲሞክራሲያዊነት",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about DEMOCRACY — what it means, how it develops, and who makes it work.\n\n" +
        "It has SIX parts:\n" +
        "1) Concept of democracy + democratization.\n" +
        "2) Actors of democratization (parties, civil society, interest groups, media).\n" +
        "3) Democratic institutions (INEC, parties, pressure groups).\n" +
        "4) Democracy's role in social transformation.\n" +
        "5) Democratic values (liberty, justice, equality).\n" +
        "6) Aspects of democracy (social, economic, political).\n\n" +
        "The WHOLE chapter reduces to FIVE key ideas:\n" +
        "• Democracy = rule by the people (demos = people; kratos = rule).\n" +
        "• Democratization = transition to a more democratic system.\n" +
        "• Actors: political parties, civil society, interest groups, media.\n" +
        "• Democratic institutions: INEC, parties, pressure groups.\n" +
        "• Core values: LIBERTY, JUSTICE, EQUALITY.\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ አምስቱ ዋና ሐሳቦች፡\n" +
        "• ዲሞክራሲ = በህዝብ አገዛዝ (demos + kratos)።\n" +
        "• ዲሞክራሲያዊነት = ወደ ዲሞክራሲ ሽግግር።\n" +
        "• ተዋናዮች: ፓርቲዎች፣ ሲቪል ማህበረሰብ፣ የፍላጎት ቡድኖች፣ ሚዲያ።\n" +
        "• ተቋማት: INEC፣ ፓርቲዎች፣ ግፊት ቡድኖች።\n" +
        "• እሴቶች: ነፃነት፣ ፍትህ፣ እኩልነት።",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand democracy vs democratization",
          titleAm: "ደረጃ 1 · Democracy vs Democratization",
          body:
            "DEMOCRACY:\n" +
            "• From Greek 'demos' (people) + 'kratos' (rule).\n" +
            "• Rule by the people — directly or through elected representatives.\n" +
            "• Elastic term (no absolute definition).\n" +
            "• Embraces equality, individual freedom, opportunity.\n\n" +
            "DEMOCRATIZATION:\n" +
            "• Complex, long-term, dynamic, open-ended process.\n" +
            "• Progress toward more rule-based, consensual, participatory politics.\n" +
            "• Transition to a more democratic regime.\n" +
            "• From authoritarian → semi-democracy → full democracy.",
          bodyAm:
            "ዲሞክራሲ = የህዝብ አገዛዝ።\n" +
            "ዲሞክራሲያዊነት = ወደ ዲሞክራሲ ሽግግር።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the actors",
          titleAm: "ደረጃ 2 · ተዋናዮችን አስታውስ",
          body:
            "FOUR ACTORS OF DEMOCRATIZATION:\n" +
            "1) POLITICAL PARTIES:\n" +
            "• Vectors of democracy.\n" +
            "• Instruments for winning power via elections.\n" +
            "• Settings for alternative policy proposals.\n\n" +
            "2) CIVIL SOCIETIES:\n" +
            "• Non-governmental associations.\n" +
            "• Consciousness raising, defense of legitimate interests.\n\n" +
            "3) INTEREST GROUPS:\n" +
            "• Autonomous from government/parties.\n" +
            "• Influence government policy.\n" +
            "• Transmission belts between people and government.\n\n" +
            "4) MEDIA:\n" +
            "• Newspapers, TV, radio, etc.\n" +
            "• Political training + democratic culture.\n" +
            "• Must be free + independent.",
          bodyAm:
            "ፓርቲዎች፣ ሲቪል ማህበረሰብ፣ የፍላጎት ቡድኖች፣ ሚዲያ።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master the democratic institutions",
          titleAm: "ደረጃ 3 · ዲሞክራሲያዊ ተቋማት",
          body:
            "THREE KEY DEMOCRATIC INSTITUTIONS:\n" +
            "1) INDEPENDENT NATIONAL ELECTORAL COMMISSION (INEC):\n" +
            "• Organize, conduct, supervise elections.\n" +
            "• Registers voters + parties.\n" +
            "• Delimits constituencies.\n" +
            "• Fixes election dates.\n" +
            "• Educates electorate.\n\n" +
            "2) POLITICAL PARTIES:\n" +
            "• Forum for national unity.\n" +
            "• Educate members + public.\n" +
            "• Recruit/appoint leaders.\n" +
            "• Link people + government.\n" +
            "• Ensure accountability.\n\n" +
            "3) PRESSURE GROUPS:\n" +
            "• Influence government policy.\n" +
            "• Promote member interests.\n" +
            "• Watchdog over public policies.\n" +
            "• Manpower bank for government.",
          bodyAm:
            "INEC: ምርጫ ማካሄድ።\n" +
            "ፓርቲ: ህዝብን ማገናኘት።\n" +
            "ግፊት ቡድን: ፖሊሲ ማሻሻል።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Do you know demos + kratos?\n" +
            "2) Do you know 4 actors of democratization?\n" +
            "3) Do you know 3 core democratic values?\n" +
            "4) Do you know 3 aspects of democracy?\n" +
            "5) Do you know INEC's 9 functions?",
          bodyAm:
            "1) demos + kratos?\n" +
            "2) 4 ተዋናዮች?\n" +
            "3) 3 እሴቶች?\n" +
            "4) 3 ገጽታዎች?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፋርት",
          body:
            "• Democracy = demos (people) + kratos (rule).\n" +
            "• Democratization = transition to more democracy.\n" +
            "• 4 actors: political parties, civil societies, interest groups, media.\n" +
            "• 3 democratic institutions: INEC, political parties, pressure groups.\n" +
            "• 3 core values: liberty, justice, equality.\n" +
            "• Liberty = personal + political + economic freedom.\n" +
            "• Justice = distributive + corrective + procedural.\n" +
            "• Equality = political + social + economic.\n" +
            "• 3 aspects: social + economic + political.",
          bodyAm:
            "• demos + kratos።\n" +
            "• 4 ተዋናዮች።\n" +
            "• 3 እሴቶች።\n" +
            "• 3 ገጽታዎች።",
        },
      ],
    },

    // ============================================================
    // 1.1 CONCEPT OF DEMOCRACY
    // ============================================================
    {
      id: "n1",
      title: "1.1 The Concept of Democracy and Democratization",
      titleAm: "1.1 የዲሞክራሲና ዲሞክራሲያዊነት ጽንሰ-ሐሳብ",
      body:
        "Abatu, there is NO absolute definition of democracy. The term is ELASTIC — it expands and contracts according to time, place, and circumstances.",
      bodyAm:
        "አባቱ፣ ዲሞክራሲ ፍጹም ትርጉም የለውም። ቃሉ ተለዋዋጭ ነው።",
      children: [
        {
          id: "n1-1",
          title: "Definition of democracy",
          titleAm: "የዲሞክራሲ ትርጉም",
          body:
            "DEMOCRACY:\n" +
            "• From Greek 'demos' (people) + 'kratos' (rule / legitimate power to rule).\n" +
            "• Rule by the people OR government by the people.\n" +
            "• Dictionary: government in which people hold ruling power directly or through elected representatives.\n\n" +
            "PRINCIPLES:\n" +
            "• Equality.\n" +
            "• Individual freedom.\n" +
            "• Opportunity for common people.\n" +
            "• Compromise + bargaining in decision-making.\n\n" +
            "NOTE: No absolute definition — term is ELASTIC (expands/contracts by time, place, circumstance).",
          bodyAm:
            "demos + kratos = ህዝብ + አገዛዝ።\n" +
            "እኩልነት፣ ነፃነት፣ እድል።\n" +
            "ፍጹም ትርጉም የለውም።",
        },
        {
          id: "n1-2",
          title: "Meaning of democratization",
          titleAm: "የዲሞክራሲያዊነት ትርጉም",
          body:
            "DEMOCRATIZATION:\n" +
            "• Complex, long-term, dynamic, open-ended process.\n" +
            "• Progress toward more rule-based, consensual, participatory politics.\n" +
            "• Political process that moves a country's political system INTO democracy.\n" +
            "• Transition to more democratic regime.\n\n" +
            "TYPES OF TRANSITIONS:\n" +
            "• Authoritarian → full democracy.\n" +
            "• Authoritarian → semi-democracy.\n" +
            "• Semi-authoritarian → democratic.\n\n" +
            "NOTE: Democratization is NOT an overnight program — it needs time + actors.",
          bodyAm:
            "ረጅም ጊዜ ሂደት።\n" +
            "ወደ ዲሞክራሲ ሽግግር።\n" +
            "በአንድ ሌሊት አይሆንም።",
        },
        {
          id: "n1-3",
          title: "⚠ Remember trap — Democracy",
          titleAm: "⚠ አትርሳ — ዲሞክራሲ",
          body:
            "• Democracy = demos + kratos (people + rule).\n" +
            "• NO absolute definition — term is ELASTIC.\n" +
            "• Democracy ≠ democratization.\n" +
            "• Democratization = process; Democracy = state.\n" +
            "• Democratization is NOT overnight.\n" +
            "• Democracy embraces equality, freedom, opportunity.",
          bodyAm:
            "• demos + kratos።\n" +
            "• ተለዋዋጭ ቃል።\n" +
            "• ዲሞክራሲ ≠ ዲሞክራሲያዊነት።",
        },
      ],
    },

    // ============================================================
    // 1.2 ACTORS OF DEMOCRATIZATION
    // ============================================================
    {
      id: "n2",
      title: "1.2 Actors in the Democratization Process",
      titleAm: "1.2 የዲሞክራሲያዊነት ተዋናዮች",
      body:
        "Abatu, FOUR main actors drive democratization: political parties, civil societies, interest groups, and media.",
      bodyAm:
        "አባቱ፣ 4 ተዋናዮች፡ ፓርቲዎች፣ ሲቪል ማህበረሰብ፣ የፍላጎት ቡድኖች፣ ሚዲያ።",
      children: [
        {
          id: "n2-1",
          title: "Political parties",
          titleAm: "ፖለቲካ ፓርቲዎች",
          body:
            "POLITICAL PARTIES:\n" +
            "• Vectors of democracy.\n" +
            "• Essential to functioning + durability of democracy.\n" +
            "• Instruments for attaining power via FREE, FAIR, TRANSPARENT elections.\n" +
            "• Settings for working out practical ideas + alternative programs.",
          bodyAm:
            "የዲሞክራሲ ተሸካሚዎች።\n" +
            "በነፃ ምርጫ ስልጣን ያገኛሉ።",
        },
        {
          id: "n2-2",
          title: "Civil societies",
          titleAm: "ሲቪል ማህበረሰብ",
          body:
            "CIVIL SOCIETIES:\n" +
            "• Non-governmental associations + organizations.\n" +
            "• Valuable vectors of democracy (like political parties).\n" +
            "• Differ from parties only in FINAL GOAL.\n" +
            "• Contribute to:\n" +
            "   – Consciousness raising.\n" +
            "   – Defense of legitimate interests.\n" +
            "   – Protection of individual + collective rights.\n\n" +
            "EFFICIENCY depends on autonomy + institutionalization.",
          bodyAm:
            "መንግስታዊ ያልሆኑ ድርጅቶች።\n" +
            "ግንዛቤ ማሳደግ።\n" +
            "መብት መከላከል።",
        },
        {
          id: "n2-3",
          title: "Interest groups",
          titleAm: "የፍላጎት ቡድኖች",
          body:
            "INTEREST GROUPS:\n" +
            "• Organizations/groups autonomous from government + parties.\n" +
            "• Objective: INFLUENCE government.\n" +
            "• Transmission belts between people + government.\n" +
            "• Bridge gap between citizen + government.\n" +
            "• Citizens communicate policy wants through them.",
          bodyAm:
            "መንግስትን የሚያሻሻሉ ቡድኖች።\n" +
            "በህዝብና መንግስት መካከል ድልድይ።",
        },
        {
          id: "n2-4",
          title: "Media",
          titleAm: "ሚዲያ",
          body:
            "MEDIA:\n" +
            "• Institution + methods of communication.\n" +
            "• Reaches large numbers simultaneously.\n" +
            "• Includes newspapers, TV, radio, books, posters, magazines, cinema.\n" +
            "• Role: political training of citizens + democratic culture.\n\n" +
            "REQUIREMENTS:\n" +
            "• Must be FREE + INDEPENDENT.\n" +
            "• Sufficient material + human resources.\n" +
            "• QUALITY of information matters more than quantity of outlets.",
          bodyAm:
            "ፃህፍት፣ ቴሌቪዥን፣ ሬዲዮ።\n" +
            "ነፃ + ገለልተኛ መሆን አለበት።\n" +
            "ጥራት > ብዛት።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap — Actors",
          titleAm: "⚠ አትርሳ — ተዋናዮች",
          body:
            "• FOUR actors: political parties, civil societies, interest groups, media.\n" +
            "• Political parties → win elections via free + fair + transparent elections.\n" +
            "• Civil societies → non-governmental; consciousness raising.\n" +
            "• Interest groups → influence government policy.\n" +
            "• Media → must be FREE + INDEPENDENT.\n" +
            "• Media quality matters more than quantity.",
          bodyAm:
            "4 ተዋናዮች።\n" +
            "ሚዲያ ነፃ መሆን አለበት።",
        },
      ],
    },

    // ============================================================
    // 1.3 DEMOCRATIC INSTITUTIONS
    // ============================================================
    {
      id: "n3",
      title: "1.3 Institutionalizing Democracy",
      titleAm: "1.3 ዲሞክራሲን ተቋማዊ ማድረግ",
      body:
        "Abatu, DEMOCRATIC INSTITUTIONS make democracy work. If they are STRONG, they are respected and difficult to manipulate.",
      bodyAm:
        "አባቱ፣ ዲሞክራሲያዊ ተቋማት ዲሞክራሲን ያሠራሉ።",
      children: [
        {
          id: "n3-1",
          title: "Definition of democratic institutions",
          titleAm: "ትርጉም",
          body:
            "DEMOCRATIC INSTITUTIONS:\n" +
            "• Institutions that facilitate + promote democracy.\n" +
            "• Make democracy work.\n" +
            "• Must serve entire population with EQUALITY under the law.\n\n" +
            "KEY POINT:\n" +
            "• Autocratic + oligarchic governments may have rule of law but do NOT qualify as democracy — they fail to fully ensure equality under law.\n" +
            "• Strong institutions → respected + difficult to manipulate.\n" +
            "• Enable honest people to survive.",
          bodyAm:
            "ዲሞክራሲን የሚያሠሩ ተቋማት።\n" +
            "በሕግ ፊት እኩልነት።\n" +
            "ጠንካራ = ለመጠቀም አስቸጋሪ።",
        },
        {
          id: "n3-2",
          title: "INEC — Independent National Electoral Commission",
          titleAm: "INEC",
          body:
            "INEC:\n" +
            "• Corporate body.\n" +
            "• Organizes, conducts, supervises elections.\n\n" +
            "NINE FUNCTIONS:\n" +
            "1) Conducts elections.\n" +
            "2) Conducts referendums + plebiscites.\n" +
            "3) Registers voters.\n" +
            "4) Delimits constituencies.\n" +
            "5) Registers parties; monitors their organization + campaigns.\n" +
            "6) Provides electoral officers + materials.\n" +
            "7) Fixes dates of elections.\n" +
            "8) Provides security at polling stations.\n" +
            "9) Educates the electorate.",
          bodyAm:
            "INEC = 9 ተግባራት።\n" +
            "ምርጫ፣ ምዝገባ፣ ድንበር፣ ትምህርት።",
        },
        {
          id: "n3-3",
          title: "Political parties (functions)",
          titleAm: "የፓርቲ ተግባራት",
          body:
            "POLITICAL PARTIES:\n" +
            "• Organized groups sharing same ideologies + interests.\n" +
            "• Seek to WIN elections + control state power.\n\n" +
            "NINE FUNCTIONS:\n" +
            "1) Forum for national unity + mutual understanding.\n" +
            "2) Educate members + public.\n" +
            "3) Machinery for recruitment/appointment.\n" +
            "4) Link between people + government.\n" +
            "5) Ensure political stability.\n" +
            "6) Harmonize sectional + diversified interests.\n" +
            "7) Provide social amenities + infrastructure.\n" +
            "8) Sensitize electorate on national issues + policies.\n" +
            "9) Ensure accountability through constructive criticism.",
          bodyAm:
            "9 ተግባራት።\n" +
            "ህዝብን ማገናኘት።\n" +
            "ተጠያቂነት።",
        },
        {
          id: "n3-4",
          title: "Pressure groups (functions)",
          titleAm: "የግፊት ቡድን ተግባራት",
          body:
            "PRESSURE GROUPS:\n" +
            "• Organized body of people.\n" +
            "• Influence government policy.\n" +
            "• Promote members' interests.\n" +
            "• Also called INTEREST GROUPS.\n\n" +
            "EIGHT FUNCTIONS:\n" +
            "1) Offer useful advice + suggestions.\n" +
            "2) Promote economic stability.\n" +
            "3) Provide certain welfare services.\n" +
            "4) Educate members + public on national issues + human rights.\n" +
            "5) Act as link between people + government.\n" +
            "6) Act as watchdog over public policies.\n" +
            "7) Support candidates + parties to win elections.\n" +
            "8) Act as manpower bank for government.",
          bodyAm:
            "8 ተግባራት።\n" +
            "Watchdog።\n" +
            "Manpower bank።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap — Institutions",
          titleAm: "⚠ አትርሳ — ተቋማት",
          body:
            "• Strong institutions = respected + hard to manipulate.\n" +
            "• Autocratic governments can have rule of law but NOT democracy (fail equality).\n" +
            "• INEC = 9 functions (elections, referendums, voter registration, delimitation, party registration, electoral officers, election dates, security, voter education).\n" +
            "• Political parties = 9 functions.\n" +
            "• Pressure groups = 8 functions.\n" +
            "• Pressure groups also called INTEREST GROUPS.",
          bodyAm:
            "• ጠንካራ = ለመጠቀም አስቸጋሪ።\n" +
            "• INEC = 9 ተግባራት።\n" +
            "• ፓርቲ = 9 ተግባራት።\n" +
            "• ግፊት = 8 ተግባራት።",
        },
      ],
    },

    // ============================================================
    // 1.4 DEMOCRACY AND SOCIAL TRANSFORMATION
    // ============================================================
    {
      id: "n4",
      title: "1.4 The Role of Democracy for Social Transformation",
      titleAm: "1.4 ዲሞክራሲ ለማህበራዊ ለውጥ",
      body:
        "Abatu, SOCIAL TRANSFORMATION = restructuring of all aspects of life — culture, relations, politics, economy, thinking, living.",
      bodyAm:
        "አባቱ፣ ማህበራዊ ለውጥ = ሁሉንም የህይወት ጎን ማሻሻል።",
      children: [
        {
          id: "n4-1",
          title: "Definition of social transformation",
          titleAm: "ትርጉም",
          body:
            "SOCIAL TRANSFORMATION:\n" +
            "1) Individual level: altering socially ascribed status of parents into socially ACHIEVED status (status transformation).\n" +
            "2) Societal level: large-scale social change (cultural reforms, societal transformation).\n" +
            "3) Also: restructuring of ALL aspects of life — culture, social relations, politics, economy, thinking, living.\n\n" +
            "HISTORICAL NOTE:\n" +
            "• Societies transformed from small associations → communities → nations.\n" +
            "• For most of history, pace was VERY SLOW.",
          bodyAm:
            "የግልም ሆነ የህብረተሰብ ደረጃ።\n" +
            "ሁሉንም የህይወት ጎን ያካትታል።",
        },
        {
          id: "n4-2",
          title: "Five manifestations of transformation",
          titleAm: "አምስቱ መገለጫዎች",
          body:
            "1) SOCIAL CHANGE:\n" +
            "• Increased awareness, attitudinal change, civic participation, policy change correcting injustice.\n" +
            "• Starts with individual + social justice.\n\n" +
            "2) CIVIC ENGAGEMENT:\n" +
            "• Many ways people participate in civic, community, political life.\n" +
            "• Becoming informed, public dialogue, volunteering, voting, advocacy.\n\n" +
            "3) CIVIC DIALOGUE:\n" +
            "• Explore civic matters + social issues.\n" +
            "• Two+ parties with differing viewpoints → common understanding.\n" +
            "• Empathy, understanding, suspension of judgment.\n\n" +
            "4) SOCIAL CAPITAL:\n" +
            "• Collective value of social networks.\n" +
            "• Trust, reciprocity, information, cooperation.\n" +
            "• Bonding (similar people) + bridging (diverse people) networks.\n\n" +
            "5) COMMUNITY DEVELOPMENT:\n" +
            "• Economic, social, physical dimensions.\n" +
            "• Housing, job training, business start-ups.\n" +
            "• Empowers individuals + groups.",
          bodyAm:
            "ማህበራዊ ለውጥ፣ ሲቪክ ተሳትፎ፣ ሲቪክ ውይይት፣ ማህበራዊ ካፒታል፣ ማህበረሰብ ልማት።",
        },
        {
          id: "n4-3",
          title: "⚠ Remember trap — Transformation",
          titleAm: "⚠ አትርሳ — ለውጥ",
          body:
            "• Social transformation = restructuring of all life aspects.\n" +
            "• 5 manifestations: social change, civic engagement, civic dialogue, social capital, community development.\n" +
            "• CIVIC DIALOGUE = differing viewpoints → common understanding.\n" +
            "• SOCIAL CAPITAL = trust, reciprocity, information, cooperation.\n" +
            "• BONDING = similar people; BRIDGING = diverse people.\n" +
            "• COMMUNITY DEVELOPMENT = empowers + provides skills.",
          bodyAm:
            "5 መገለጫዎች።\n" +
            "Social capital = እምነት + ትብብር።",
        },
      ],
    },

    // ============================================================
    // 1.5 DEMOCRATIC VALUES
    // ============================================================
    {
      id: "n5",
      title: "1.5 Democratic Values",
      titleAm: "1.5 ዲሞክራሲያዊ እሴቶች",
      body:
        "Abatu, THREE core democratic values: LIBERTY, JUSTICE, EQUALITY.",
      bodyAm:
        "አባቱ፣ 3 ዋና እሴቶች፡ ነፃነት፣ ፍትህ፣ እኩልነት።",
      children: [
        {
          id: "n5-1",
          title: "Liberty (freedom)",
          titleAm: "ነፃነት",
          body:
            "LIBERTY — 3 types:\n\n" +
            "1) PERSONAL FREEDOM:\n" +
            "• Free from arbitrary arrest + detention.\n" +
            "• Homes/property secured from unreasonable searches + seizures.\n\n" +
            "2) POLITICAL FREEDOM:\n" +
            "• Right to participate freely in political process (elections).\n" +
            "• Without arbitrary arrest, harassment, electoral corruption (vote buying, intimidation, obstruction).\n\n" +
            "3) ECONOMIC FREEDOM:\n" +
            "• Acquire, use, transfer, dispose of private property without unreasonable government interference.\n" +
            "• Seek employment anywhere, change jobs, join lawful unions + corporations.",
          bodyAm:
            "የግል + የፖለቲካ + የኢኮኖሚ ነፃነት።",
        },
        {
          id: "n5-2",
          title: "Justice",
          titleAm: "ፍትህ",
          body:
            "JUSTICE — 3 types:\n\n" +
            "1) DISTRIBUTIVE JUSTICE:\n" +
            "• Distributing benefits + burdens via agreed-upon standards of fairness.\n\n" +
            "2) CORRECTIVE JUSTICE:\n" +
            "• Proportional response to correct wrongs + injuries.\n\n" +
            "3) PROCEDURAL JUSTICE:\n" +
            "• Procedures for gathering info + making decisions should be guided by impartiality + openness.",
          bodyAm:
            "Distributive + corrective + procedural።",
        },
        {
          id: "n5-3",
          title: "Equality",
          titleAm: "እኩልነት",
          body:
            "EQUALITY — 3 types:\n\n" +
            "1) POLITICAL EQUALITY:\n" +
            "• All adults have equal political rights.\n" +
            "• 'One man, one vote, one value'.\n\n" +
            "2) SOCIAL EQUALITY:\n" +
            "• No social hierarchy at individual + collective level.\n" +
            "• No discrimination whatsoever.\n\n" +
            "3) ECONOMIC EQUALITY:\n" +
            "• All people deserve equal + fair access to national resources + services.",
          bodyAm:
            "የፖለቲካ + የማህበራዊ + የኢኮኖሚ እኩልነት።",
        },
        {
          id: "n5-4",
          title: "⚠ Remember trap — Democratic values",
          titleAm: "⚠ አትርሳ — እሴቶች",
          body:
            "• 3 core values: LIBERTY, JUSTICE, EQUALITY.\n" +
            "• LIBERTY = personal + political + economic freedom.\n" +
            "• JUSTICE = distributive + corrective + procedural.\n" +
            "• EQUALITY = political + social + economic.\n" +
            "• 'One man, one vote, one value' = POLITICAL equality.\n" +
            "• Procedural justice = impartiality + openness.",
          bodyAm:
            "3 እሴቶች x 3 ዓይነቶች = 9 ንዑስ እሴቶች።",
        },
      ],
    },

    // ============================================================
    // 1.6 ASPECTS OF DEMOCRACY
    // ============================================================
    {
      id: "n6",
      title: "1.6 Aspects of Democracy",
      titleAm: "1.6 የዲሞክራሲ ገጽታዎች",
      body:
        "Abatu, democracy has THREE aspects: SOCIAL, ECONOMIC, POLITICAL.",
      bodyAm:
        "አባቱ፣ 3 ገጽታዎች፡ ማህበራዊ፣ ኢኮኖሚያዊ፣ ፖለቲካዊ።",
      children: [
        {
          id: "n6-1",
          title: "Social aspect",
          titleAm: "ማህበራዊ ገጽታ",
          body:
            "SOCIAL ASPECT:\n" +
            "• Removal of ALL discrimination on basis of class, caste, creed, color, sex, ethnicity, race, etc.\n" +
            "• All men + women — rich or poor — are SOCIALLY EQUAL.\n" +
            "• Should be treated as equals.",
          bodyAm:
            "ማንኛውም አድልዎ አይፈቀድም።\n" +
            "ሁሉም ማህበራዊ እኩል።",
        },
        {
          id: "n6-2",
          title: "Economic aspect",
          titleAm: "ኢኮኖሚያዊ ገጽታ",
          body:
            "ECONOMIC ASPECT:\n" +
            "• Equitable + just distribution of wealth + resources.\n" +
            "• Abolition of glaring disparities/polarization on basis of wealth.\n" +
            "• Recognizes:\n" +
            "   – Right to work.\n" +
            "   – Right to leisure.\n" +
            "   – Fair wages.\n" +
            "   – Unrestricted right to enjoy life.",
          bodyAm:
            "ፍትሃዊ ስርጭት።\n" +
            "የሥራ፣ የእረፍት፣ የፍትሃዊ ደመወዝ መብት።",
        },
        {
          id: "n6-3",
          title: "Political aspect",
          titleAm: "ፖለቲካዊ ገጽታ",
          body:
            "POLITICAL ASPECT:\n" +
            "• Provision of political rights:\n" +
            "   – Right to vote.\n" +
            "   – Right to contest elections.\n" +
            "   – Right to hold public office.\n" +
            "   – Right to movement.\n" +
            "   – Right to thought.\n" +
            "   – Right to association.\n" +
            "   – Right to freedom of conscience.\n" +
            "   – Right to speak.\n\n" +
            "For citizens to exercise these rights, they must have:\n" +
            "• Freedom of speech.\n" +
            "• Freedom of association.\n" +
            "• Freedom of publication.",
          bodyAm:
            "የመምረጥ፣ የመመረጥ፣ የመናገር መብቶች።",
        },
        {
          id: "n6-4",
          title: "⚠ Remember trap — Aspects",
          titleAm: "⚠ አትርሳ — ገጽታዎች",
          body:
            "• 3 aspects: SOCIAL, ECONOMIC, POLITICAL.\n" +
            "• SOCIAL = no discrimination.\n" +
            "• ECONOMIC = equitable distribution + right to work/leisure/fair wages.\n" +
            "• POLITICAL = right to vote, contest, hold office, movement, speech.",
          bodyAm:
            "ማህበራዊ + ኢኮኖሚያዊ + ፖለቲካዊ።",
        },
      ],
    },

    // ============================================================
    // KEY DEFINITIONS & RELATIONSHIPS
    // ============================================================
    {
      id: "nFormula",
      title: "Key Definitions & Relationships — Unit 1",
      titleAm: "ዋና ትርጓሜዎች — ክፍል 1",
      body:
        "| Concept                       | Definition / Key Fact                              |\n" +
        "|-------------------------------|----------------------------------------------------|\n" +
        "| Democracy                     | Rule by the people (demos + kratos)                |\n" +
        "| Democratization               | Transition to more democracy                       |\n" +
        "| 4 actors                      | Political parties, civil societies, interest groups, media |\n" +
        "| 3 democratic institutions     | INEC, political parties, pressure groups           |\n" +
        "| INEC functions                | 9 (elections, voter registration, delimitation)    |\n" +
        "| Political party functions     | 9 (unity, education, recruitment, etc.)            |\n" +
        "| Pressure group functions      | 8 (advice, watchdog, manpower bank, etc.)          |\n" +
        "| Social transformation         | Restructuring of all life aspects                  |\n" +
        "| 5 manifestations              | Social change, civic engagement, dialogue, social capital, community development |\n" +
        "| 3 core values                 | Liberty, justice, equality                         |\n" +
        "| Liberty types                 | Personal, political, economic                      |\n" +
        "| Justice types                 | Distributive, corrective, procedural               |\n" +
        "| Equality types                | Political, social, economic                        |\n" +
        "| 3 aspects of democracy        | Social, economic, political                        |",
      bodyAm:
        "| ጽንሰ-ሐሳብ         | ትርጉም                          |\n" +
        "|------------------|--------------------------------|\n" +
        "| ዲሞክራሲ           | demos + kratos                 |\n" +
        "| 4 ተዋናዮች        | ፓርቲ፣ ሲቪል፣ ፍላጎት፣ ሚዲያ       |\n" +
        "| 3 ተቋማት         | INEC፣ ፓርቲ፣ ግፊት              |\n" +
        "| 3 እሴቶች         | ነፃነት፣ ፍትህ፣ እኩልነት        |\n" +
        "| 3 ገጽታዎች        | ማህበራዊ፣ ኢኮኖሚ፣ ፖለቲካ      |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 1",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 1",
      body:
        "1) Democracy = demos + kratos (people + rule).\n" +
        "2) No absolute definition — term is ELASTIC.\n" +
        "3) Democratization is NOT overnight.\n" +
        "4) 4 actors: parties, civil society, interest groups, media.\n" +
        "5) Media must be FREE + INDEPENDENT.\n" +
        "6) Autocratic governments can have rule of law but NOT democracy.\n" +
        "7) INEC = 9 functions; parties = 9; pressure groups = 8.\n" +
        "8) 5 manifestations of transformation.\n" +
        "9) 3 core values: LIBERTY, JUSTICE, EQUALITY.\n" +
        "10) Liberty = personal + political + economic.\n" +
        "11) Justice = distributive + corrective + procedural.\n" +
        "12) Equality = political + social + economic.\n" +
        "13) 'One man, one vote, one value' = POLITICAL equality.\n" +
        "14) 3 aspects: SOCIAL, ECONOMIC, POLITICAL.",
      bodyAm:
        "1) demos + kratos።\n" +
        "2) 4 ተዋናዮች።\n" +
        "3) INEC = 9።\n" +
        "4) 3 እሴቶች።\n" +
        "5) 3 ገጽታዎች።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "The word democracy comes from which two Greek words?", options: ["Demos and polis", "Demos and kratos", "Polis and kratos", "Demos and logos"], answer: "1", explanation: "Demos (people) + kratos (rule)." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "'Demos' in Greek means:", options: ["Rule", "Power", "People", "State"], answer: "2", explanation: "Demos = people." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "'Kratos' in Greek means:", options: ["People", "Rule / legitimate power", "Freedom", "Equality"], answer: "1", explanation: "Kratos = rule." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Democracy is best defined as:", options: ["One-party rule", "Rule by the people", "Military rule", "Monarchy"], answer: "1", explanation: "Rule by the people." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Which is NOT an actor of democratization?", options: ["Political parties", "Civil societies", "Interest groups", "Army"], answer: "3", explanation: "The army is NOT one of the four actors." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Which actor is described as a 'transmission belt' between people and government?", options: ["Media", "Political parties", "Interest groups", "INEC"], answer: "2", explanation: "Interest groups = transmission belts." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "INEC stands for:", options: ["International National Election Committee", "Independent National Electoral Commission", "Internal National Electoral Council", "International Nigerian Electoral Commission"], answer: "1", explanation: "Independent National Electoral Commission." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "A pressure group is also called:", options: ["Civil society", "Political party", "Interest group", "Mass media"], answer: "2", explanation: "Interest group." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Democratic institutions must serve the entire population with:", options: ["Preferential treatment", "Equality under the law", "Military rule", "Religious law"], answer: "1", explanation: "Equality under the law." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Which is a core democratic value?", options: ["Dictatorship", "Liberty", "Censorship", "Discrimination"], answer: "1", explanation: "Liberty = one of the 3 core values." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "How many core democratic values are there?", options: ["Two", "Three", "Four", "Five"], answer: "1", explanation: "Three: liberty, justice, equality." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "How many aspects of democracy are there?", options: ["Two", "Three", "Four", "Five"], answer: "1", explanation: "Three: social, economic, political." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Social transformation is:", options: ["Only economic growth", "Restructuring of all life aspects", "Only political change", "Only religious change"], answer: "1", explanation: "Restructuring of ALL aspects of life." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Which is NOT a manifestation of social transformation?", options: ["Social change", "Civic engagement", "Military coup", "Social capital"], answer: "2", explanation: "Military coup is NOT a manifestation." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "How many types of LIBERTY are there?", options: ["One", "Two", "Three", "Four"], answer: "2", explanation: "Personal, political, economic." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "How many types of JUSTICE are there?", options: ["Two", "Three", "Four", "Five"], answer: "1", explanation: "Distributive, corrective, procedural." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "How many types of EQUALITY are there?", options: ["Two", "Three", "Four", "Five"], answer: "1", explanation: "Political, social, economic." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "'One man, one vote, one value' describes:", options: ["Social equality", "Political equality", "Economic equality", "Distributive justice"], answer: "1", explanation: "Political equality." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "Which best describes democratization?", options: ["Immediate revolution", "Long-term process of transition to democracy", "Military takeover", "One-day election"], answer: "1", explanation: "Long-term process." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "Democratization can include transitions from:", options: ["Only from monarchy", "Authoritarian → democracy, semi-democracy, or democratic systems", "Only from socialism", "Only from dictatorship"], answer: "1", explanation: "Multiple transition paths." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "Which is a function of INEC?", options: ["Print money", "Conduct elections + register voters", "Make laws", "Command army"], answer: "1", explanation: "INEC conducts elections + registers voters." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "Which is NOT a function of political parties?", options: ["Forum for national unity", "Educate public", "Command the army", "Recruit leaders"], answer: "2", explanation: "Parties do NOT command the army." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "Which is a function of pressure groups?", options: ["Conduct national elections", "Act as watchdog over public policies", "Declare war", "Print currency"], answer: "1", explanation: "Watchdog over public policies." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "Civic dialogue is best described as:", options: ["One-way speech", "Two or more parties with differing viewpoints working toward common understanding", "Military parade", "Religious ceremony"], answer: "1", explanation: "Differing viewpoints → common understanding." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "Social capital involves:", options: ["Only money", "Trust, reciprocity, information, cooperation from social networks", "Only government resources", "Only private property"], answer: "1", explanation: "Trust, reciprocity, information, cooperation." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "Bonding networks connect:", options: ["Diverse people", "Similar people", "Only strangers", "Only governments"], answer: "1", explanation: "Bonding = similar people." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "Bridging networks connect:", options: ["Similar people", "Diverse people", "Only families", "Only parties"], answer: "1", explanation: "Bridging = diverse people." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "Distributive justice concerns:", options: ["Correcting wrongs", "Fair procedures", "Distributing benefits + burdens by agreed standards", "Punishment only"], answer: "2", explanation: "Distributing benefits + burdens." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "Corrective justice concerns:", options: ["Fair distribution", "Proportional response to correct wrongs", "Public procedures", "Political equality"], answer: "1", explanation: "Correct wrongs + injuries." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "Procedural justice involves:", options: ["Distribution of wealth", "Impartiality + openness of proceedings", "Arrest of suspects", "Economic growth"], answer: "1", explanation: "Impartiality + openness." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Social equality means:", options: ["Same income for everyone", "No social hierarchy or discrimination", "Only political rights", "Only economic rights"], answer: "1", explanation: "No social hierarchy or discrimination." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "Economic equality means:", options: ["Equal income for all", "Equal + fair access to national resources + services", "Only property rights", "Only political rights"], answer: "1", explanation: "Equal + fair access to resources + services." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "The social aspect of democracy means:", options: ["Removal of all discrimination", "Maximizing profit", "Military control", "One-party rule"], answer: "0", explanation: "Removal of discrimination." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "The political aspect of democracy includes:", options: ["Right to vote + hold public office", "Right to own property only", "Right to work only", "Right to leisure only"], answer: "0", explanation: "Right to vote + hold public office." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Media must be free + independent to perform its role in:", options: ["Military defense", "Political training + democratic culture", "Printing money", "Judging criminals"], answer: "1", explanation: "Political training + democratic culture." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Why is democratization described as 'open-ended'?", options: ["It has a fixed endpoint", "It is a complex, long-term, ongoing process", "It ends immediately after elections", "It is overnight"], answer: "1", explanation: "Complex, ongoing process without fixed endpoint." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Which statement about democratic institutions is FALSE?", options: ["Strong institutions are hard to manipulate", "Autocratic governments qualify as democracy if they have rule of law", "Strong institutions enable honest people to survive", "They promote democracy"], answer: "1", explanation: "Autocratic governments do NOT qualify — they fail equality." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "Which is TRUE about political parties vs civil societies?", options: ["They are identical", "They differ only in their final goal", "They are enemies", "They never overlap"], answer: "1", explanation: "Differ only in final goal." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "Which is NOT a freedom within economic freedom?", options: ["Acquire private property", "Transfer property", "Arbitrary arrest", "Seek employment"], answer: "2", explanation: "Arbitrary arrest is a PERSONAL freedom issue, not economic." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "What does 'elastic' mean for the definition of democracy?", options: ["Always fixed", "Expands + contracts by time, place, circumstance", "Religious", "Military"], answer: "1", explanation: "Expands + contracts." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Which best describes 'civic engagement'?", options: ["Only military service", "Participating in civic, community, political life", "Only paying taxes", "Only voting"], answer: "1", explanation: "Multiple forms of participation." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "Which is NOT part of the social aspect of democracy?", options: ["Elimination of discrimination by class", "Elimination of discrimination by sex", "Elimination of discrimination by ethnicity", "Elimination of private property"], answer: "3", explanation: "Eliminating private property is NOT the social aspect." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "Which statement about the political aspect of democracy is FALSE?", options: ["It includes right to vote", "It includes right to hold public office", "It includes right to freedom of conscience", "It prohibits political association"], answer: "3", explanation: "Political aspect INCLUDES association, not prohibits." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Define democracy and state its Greek origins.", answer: "DEMOCRACY:\n• From Greek 'demos' (people) + 'kratos' (rule / legitimate power to rule).\n• Means rule by the people or government by the people.\n• Dictionary: government in which people hold ruling power — directly or through elected representatives.\n\nPRINCIPLES:\n• Equality.\n• Individual freedom.\n• Opportunity for common people.\n• Compromise + bargaining in decision-making.\n\nNOTE: There is NO absolute definition — the term is ELASTIC, expanding/contracting by time, place, circumstance.", explanation: "Demos + kratos; rule by people." },
    { id: "q45", type: "short", difficulty: "easy", stem: "Define democratization and list the four actors.", answer: "DEMOCRATIZATION: a complex, long-term, dynamic, open-ended process — progress toward more rule-based, consensual, participatory politics. It is the transition to a more democratic political regime.\n\nFOUR ACTORS OF DEMOCRATIZATION:\n1) POLITICAL PARTIES: vectors of democracy; instruments for winning power via free + fair elections.\n2) CIVIL SOCIETIES: non-governmental associations; consciousness raising + protection of rights.\n3) INTEREST GROUPS: autonomous; influence government policy; transmission belts between people + government.\n4) MEDIA: newspapers, TV, radio; political training + democratic culture; must be free + independent.", explanation: "Parties, civil societies, interest groups, media." },
    { id: "q46", type: "short", difficulty: "medium", stem: "List the three democratic institutions and one key function of each.", answer: "1) INDEPENDENT NATIONAL ELECTORAL COMMISSION (INEC):\n• 9 functions: conduct elections, referendums + plebiscites; register voters; delimit constituencies; register + monitor parties; provide electoral officers + materials; fix election dates; provide security at polling stations; educate electorate.\n\n2) POLITICAL PARTIES:\n• 9 functions: forum for national unity; educate members + public; recruitment/appointment; link between people + government; ensure political stability; harmonize diversified interests; provide social amenities; sensitize electorate; ensure accountability through constructive criticism.\n\n3) PRESSURE GROUPS:\n• 8 functions: advise; promote economic stability; provide welfare services; educate members + public; link people + government; watchdog over public policies; support candidates; manpower bank for government.", explanation: "INEC, parties, pressure groups." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Explain the role of democracy in social transformation.", answer: "SOCIAL TRANSFORMATION = restructuring of ALL aspects of life — culture, social relations, politics, economy, thinking, living.\n\nFIVE MANIFESTATIONS:\n1) SOCIAL CHANGE:\n• Increased awareness + attitudinal change.\n• Civic participation + policy change correcting injustice.\n\n2) CIVIC ENGAGEMENT:\n• Many ways people participate in civic, community, political life.\n• Becoming informed, public dialogue, volunteering, voting, advocacy.\n\n3) CIVIC DIALOGUE:\n• Differing viewpoints working toward common understanding.\n• Empathy + suspension of judgment.\n\n4) SOCIAL CAPITAL:\n• Collective value of social networks.\n• Trust, reciprocity, information, cooperation.\n• Bonding (similar people) + bridging (diverse people) networks.\n\n5) COMMUNITY DEVELOPMENT:\n• Economic, social, physical dimensions.\n• Housing, job training, business start-ups.\n• Empowers individuals + groups.", explanation: "5 manifestations of social transformation." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Explain the three core democratic values and their types.", answer: "THREE CORE VALUES:\n\n1) LIBERTY (freedom) — 3 types:\n• PERSONAL: free from arbitrary arrest + detention; homes/property secured from unreasonable searches + seizures.\n• POLITICAL: right to participate freely in elections without arrest, harassment, electoral corruption.\n• ECONOMIC: right to acquire, use, transfer, dispose of private property; seek employment anywhere; join lawful unions.\n\n2) JUSTICE — 3 types:\n• DISTRIBUTIVE: distributing benefits + burdens via agreed standards of fairness.\n• CORRECTIVE: proportional response to correct wrongs + injuries.\n• PROCEDURAL: procedures for gathering info + making decisions guided by impartiality + openness.\n\n3) EQUALITY — 3 types:\n• POLITICAL: all adults have equal political rights — 'one man, one vote, one value'.\n• SOCIAL: no social hierarchy or discrimination.\n• ECONOMIC: all people deserve equal + fair access to national resources + services.", explanation: "Liberty, justice, equality — 3 types each." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Explain the three aspects of democracy with examples.", answer: "THREE ASPECTS:\n\n1) SOCIAL ASPECT:\n• Removal of ALL discrimination — class, caste, creed, color, sex, ethnicity, race.\n• All men + women — rich or poor — are SOCIALLY EQUAL.\n• Treated as equals.\n\n2) ECONOMIC ASPECT:\n• Equitable + just distribution of wealth + resources.\n• Abolition of glaring disparities/polarization by wealth.\n• Recognizes:\n  – Right to work.\n  – Right to leisure.\n  – Fair wages.\n  – Unrestricted right to enjoy life.\n\n3) POLITICAL ASPECT:\n• Provision of political rights:\n  – Right to vote.\n  – Right to contest elections.\n  – Right to hold public office.\n  – Right to movement.\n  – Right to thought.\n  – Right to association.\n  – Right to freedom of conscience.\n  – Right to speak.\n• Requires freedom of speech, association, + publication.", explanation: "Social, economic, political — with rights in each." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Explain why autocratic governments do not qualify as democracy even with rule of law.", answer: "AUTOCRATIC + OLIGARCHIC GOVERNMENTS:\n• May have the RULE OF LAW.\n• BUT do NOT qualify as democracy.\n\nREASON:\n• They FAIL to fully ensure EQUALITY under the law.\n• DEMOCRATIC INSTITUTIONS must serve the ENTIRE population with equality under the law.\n\nKEY POINTS:\n• Democratic institutions facilitate + promote democracy.\n• They make democracy work.\n• When strong, they are RESPECTED + difficult to manipulate.\n• They enable honest people to survive.\n\nEXAMPLE:\n• An autocratic government may enforce laws but applies them unequally.\n• Democracy requires equal protection + treatment for all citizens.\n\nTHUS: Rule of law alone is NECESSARY but NOT SUFFICIENT for democracy.", explanation: "Rule of law + equality = democracy; autocrats fail equality." },
  ],
};