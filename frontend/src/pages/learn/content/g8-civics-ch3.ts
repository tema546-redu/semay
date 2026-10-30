import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 CITIZENSHIP (CIVICS) — UNIT 3
// DEMOCRACY
// Source: AAEB Grade 8 Citizenship Education Student Textbook (pp. 86–119)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8CivicsCh3: Chapter = {
  id: "ch3",
  number: 3,
  title: "Democracy",
  titleAm: "ዲሞክራሲ",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. The Concept of Democracy",
      titleAm: "1. የዲሞክራሲ ጽንሰ-ሐሳብ",
      body:
        "Banchi, DEMOCRACY is a political system in which the PEOPLE hold supreme political power. The people empower and dethrone leaders. The fundamental concept of democracy is FREEDOM. Democracy is not just a political system — it is a WAY OF LIFE.",
      bodyAm:
        "ባንቺ፣ ዲሞክራሲ ሉዓላዊ የፖለቲካ ሥልጣን በሕዝብ እጅ ያለበት ሥርዓት ነው። የዲሞክራሲ መሠረታዊ ጽንሰ-ሐሳብ ነፃነት ነው። ዲሞክራሲ የአኗኗር ዘይቤም ነው።",
      children: [
        {
          id: "n1-1",
          title: "Common Misunderstandings",
          titleAm: "የተለመዱ የተሳሳቱ ግንዛቤዎች",
          body:
            "Banchi, some people wrongly think democracy means LAWLESSNESS or ARBITRARINESS. Example: a student leaves class mid-session and claims it was 'democratic'. This is WRONG — the RULE OF LAW is a fundamental principle of democracy. Democracy means freedom WITHIN rules, not without them.",
          bodyAm:
            "ባንቺ፣ አንዳንድ ሰዎች ዲሞክራሲ ማለት ሕግ አለመኖር ነው ብለው ያስባሉ። ይህ ስህተት ነው — የሕግ የበላይነት የዲሞክራሲ መሠረታዊ መርህ ነው።",
        },
        {
          id: "n1-2",
          title: "Democracy as a Way of Life",
          titleAm: "ዲሞክራሲ እንደ የአኗኗር ዘይቤ",
          body:
            "Banchi, democracy is shown in DAILY LIFE — how you treat classmates, whether you cooperate, tolerate differences, and respect others' ethnic, religious, and linguistic identities. When these become the culture of society, democratization becomes easier.",
          bodyAm:
            "ባንቺ፣ ዲሞክራሲ በዕለት ተዕለት ኑሮ ይታያል — ከክፍል ጓደኞችሽ ጋር እንዴት እንደምትይዢ፣ ልዩነቶችን እንደምትታገሺ።",
        },
        {
          id: "n1-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: Democracy ≠ lawlessness. Democracy ≠ doing whatever you want. Democracy REQUIRES rules, institutions, and the rule of law. Also: democracy cannot emerge simply because we WANT it — it needs well-structured institutions and the will of society.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ዲሞክራሲ ≠ ሕግ አለመኖር። ዲሞክራሲ ሕግን፣ ተቋማትን ይፈልጋል።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Fundamental Principles of Democracy",
      titleAm: "2. የዲሞክራሲ መሠረታዊ መርሆች",
      body:
        "Banchi, democracy is best understood through its FUNDAMENTAL PRINCIPLES. You must know all NINE for Grade 8.",
      bodyAm:
        "ባንቺ፣ ዲሞክራሲ በመሠረታዊ መርሆቹ ይገለጻል። ዘጠኙን ማወቅ አለብሽ።",
      children: [
        {
          id: "n2-1",
          title: "1) Popular Sovereignty",
          titleAm: "1) የሕዝብ ሉዓላዊነት",
          body:
            "The FOUNDATION of democracy. Only the CONSENT of the governed is a legitimate source of government authority. People give consent through regularly elected representatives. All constitutional changes are approved by the people.",
          bodyAm:
            "የዲሞክራሲ መሠረት። የተገዢው ሕዝብ ፈቃድ ብቻ ለመንግሥት ሥልጣን ሕጋዊ ምንጭ ነው።",
        },
        {
          id: "n2-2",
          title: "2) Supremacy of Constitution",
          titleAm: "2) የሕገ-መንግሥት የበላይነት",
          body:
            "The CONSTITUTION takes precedence over ALL other laws. Article 9/1 of the FDRE constitution: 'any law, customary practice, or decision of an organ of state or a public official that contravenes this Constitution shall be null and void.'",
          bodyAm:
            "ሕገ-መንግሥቱ ከሁሉም ሕጎች ይበልጣል። የፌዴራል ሕገ-መንግሥት አንቀጽ 9/1።",
        },
        {
          id: "n2-3",
          title: "3) Citizen Participation",
          titleAm: "3) የዜጎች ተሳትፎ",
          body:
            "Citizens' key role in democracy is PARTICIPATION — it is BOTH a RIGHT and an OBLIGATION. Ways to participate: running for office, voting, becoming informed, debating, attending meetings, joining voluntary organizations. Participation should expand to taxation, gender equality, child trafficking, traffic accidents, environmental protection.",
          bodyAm:
            "የዜጎች ዋና ሚና ተሳትፎ ነው — መብትም ግዴታም ነው። መንገዶች፡ ለምርጫ መቅረብ፣ ድምጽ መስጠት፣ መረጃ ማግኘት፣ መወያየት፣ ስብሰባ መገኘት።",
        },
        {
          id: "n2-4",
          title: "4) Separation of Power",
          titleAm: "4) የሥልጣን መለያየት",
          body:
            "Government has THREE branches:\n" +
            "• LEGISLATIVE — creates laws.\n" +
            "• EXECUTIVE — implements laws.\n" +
            "• JUDICIARY — applies laws to specific cases.\n\n" +
            "The goal is CHECK AND BALANCE among the three organs.",
          bodyAm:
            "መንግሥት ሦስት አካላት አሉት፡\n• ሕግ አውጪ — ሕግ ይፈጥራል።\n• ሥራ አስፈጻሚ — ሕግ ይተገብራል።\n• ዳኝነት — ሕግ ይተረጉማል።\nዓላማው ሚዛን ማስጠበቅ ነው።",
        },
        {
          id: "n2-5",
          title: "5) The Principle of Secularism",
          titleAm: "5) ሴኩላሪዝም",
          body:
            "SEPARATION of religion and state. This is critical for democracy because almost every country has more than one religious group. If the majority religious group gains state power, minorities may not be able to practice their faith. Article 11 of the FDRE Constitution: the state and religion are distinct; there shall be NO state religion.",
          bodyAm:
            "የሃይማኖትና የመንግሥት መለያየት። የፌዴራል ሕገ-መንግሥት አንቀጽ 11፡ መንግሥትና ሃይማኖት ይለያያሉ።",
        },
        {
          id: "n2-6",
          title: "6) Accountability and Transparency",
          titleAm: "6) ተጠያቂነትና ግልጽነት",
          body:
            "PUBLIC ACCOUNTABILITY — the right of the public to information about government activities and to seek redress.\n" +
            "TRANSPARENCY — public access to activities of government officials and institutions. People must know what is going on for the government to be held accountable.",
          bodyAm:
            "ተጠያቂነት — ሕዝብ ስለ መንግሥት ተግባራት የመረጃ መብት አለው።\nግልጽነት — ሕዝብ የመንግሥት ባለሥልጣናትን ተግባር ማወቅ አለበት።",
        },
        {
          id: "n2-7",
          title: "7) Free, Fair and Periodic Elections",
          titleAm: "7) ነፃ፣ ፍትሐዊና ወቅታዊ ምርጫ",
          body:
            "• FREE election — all citizens can vote for the candidate of their choice.\n" +
            "• FAIR election — all votes have equal weight and are accurately counted.\n" +
            "• PERIODIC election — held at REGULAR intervals.\n\n" +
            "These must be based on UNIVERSAL SUFFRAGE (all adult citizens can vote) and SECRET BALLOT (voter's choices kept private).\n\n" +
            "Practices AGAINST democratic elections: intimidation, corruption, threats to citizens during or before an election.",
          bodyAm:
            "• ነፃ — ሁሉም ዜጋ የመረጠውን እጩ ድምጽ መስጠት ይችላል።\n• ፍትሐዊ — ሁሉም ድምጽ እኩል ክብደት አለው።\n• ወቅታዊ — በመደበኛ ጊዜ ይካሄዳል።\nበዩኒቨርሳል ምርጫና በምስጢር ድምጽ ላይ የተመሠረተ ነው።",
        },
        {
          id: "n2-8",
          title: "8) Respect for Human Rights",
          titleAm: "8) ለሰብዓዊ መብቶች አክብሮት",
          body:
            "Human rights are rights we possess SIMPLY BY VIRTUE OF BEING HUMAN — from the right to life to rights to food, education, work, health, and liberty. All eligible human beings have the right to elect their leader regardless of their background.",
          bodyAm:
            "ሰብዓዊ መብቶች ሰው በመሆን ብቻ የሚያገኛቸው መብቶች ናቸው — ከሕይወት መብት እስከ ምግብ፣ ትምህርት፣ ሥራ፣ ጤና፣ ነፃነት።",
        },
        {
          id: "n2-9",
          title: "9) Multi-Party System",
          titleAm: "9) ብዝሃ-ፓርቲ ሥርዓት",
          body:
            "A multi-party system requires MORE THAN ONE political party to participate in elections and government. It gives voters a CHOICE of candidates, parties, and policies. When a country has only ONE political party, the result is a DICTATORSHIP.",
          bodyAm:
            "ብዝሃ-ፓርቲ ሥርዓት ከአንድ በላይ የፖለቲካ ፓርቲ ይፈልጋል። ለመራጮች ምርጫ ይሰጣል። አንድ ፓርቲ ብቻ ካለ ውጤቱ ገዢነት ነው።",
        },
        {
          id: "n2-10",
          title: "10) The Rule of Law",
          titleAm: "10) የሕግ የበላይነት",
          body:
            "NO ONE — not even a king or an elected president — is ABOVE the law. Everyone must obey the law and face consequences if they break it. The law must be applied EQUALLY, FAIRLY, and CONSISTENTLY.",
          bodyAm:
            "ማንም — ንጉሥም ይሁን የተመረጠ ፕሬዚዳንት — ከሕግ በላይ አይደለም። ሕጉ በእኩል፣ በፍትሐዊና በተከታታይ መተግበር አለበት።",
        },
        {
          id: "n2-11",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: Democracy has NINE or TEN principles depending on grouping. The MOST-TESTED are: Popular Sovereignty (foundation), Rule of Law (no one above law), Free/Fair/Periodic elections, Multi-party system, and Separation of powers.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ በብዛት የሚፈተኑት፡ የሕዝብ ሉዓላዊነት፣ የሕግ የበላይነት፣ ነፃ/ፍትሐዊ ምርጫ፣ ብዝሃ-ፓርቲ፣ የሥልጣን መለያየት።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Values of Democracy",
      titleAm: "3. የዲሞክራሲ እሴቶች",
      body:
        "Banchi, democracy is a WAY OF LIFE. Its development is based on the VALUES of a specific society. Key democratic values: TOLERANCE, LIBERTY, JUSTICE, EQUALITY, INCLUSIVENESS, CIVILITY, VALUING DIVERSITY.",
      bodyAm:
        "ባንቺ፣ ዲሞክራሲ የአኗኗር ዘይቤ ነው። ዋና እሴቶች፡ መቻቻል፣ ነፃነት፣ ፍትሕ፣ እኩልነት፣ አካታችነት፣ ሥልጣኔ፣ ብዝሃነትን ማዕከል ማድረግ።",
      children: [
        {
          id: "n3-1",
          title: "1) Tolerance",
          titleAm: "1) መቻቻል",
          body:
            "Banchi, tolerance is a KEY value of democracy. Differences in ethnicity, language, culture, religion, and economic status are NATURAL — we cannot coexist without tolerating one another. When something unusual happens, we must tolerate and peacefully settle. INTOLERANCE destroys social coexistence. Mahatma Gandhi said: 'Intolerance is a form of violence and a barrier to the development of a true democratic spirit.'",
          bodyAm:
            "መቻቻል የዲሞክራሲ ቁልፍ እሴት ነው። ልዩነቶች ተፈጥሯዊ ናቸው። አለመቻቻል ማህበራዊ አብሮ መኖርን ያፈርሳል። ማህተማ ጋንዲ፡ 'አለመቻቻል የአመጽ ዓይነትና የእውነተኛ ዲሞክራሲ መንፈስ እንቅፋት ነው።'",
        },
        {
          id: "n3-2",
          title: "2) Liberty",
          titleAm: "2) ነፃነት",
          body:
            "The state of being FREE within society from authority's control or oppressive restrictions on one's way of life, behaviour, or political views. Includes: freedom to believe what you want, choose your own friends, hold your own ideas, express views publicly, meet in groups, work, or run a business.",
          bodyAm:
            "በማህበረሰብ ውስጥ ከሥልጣን ቁጥጥር ነፃ መሆን። የማመን፣ ጓደኛ የመምረጥ፣ ሐሳብ የመያዝ፣ በይፋ የመናገር፣ በቡድን የመገናኘት፣ የመሥራት ነፃነት።",
        },
        {
          id: "n3-3",
          title: "3) Justice",
          titleAm: "3) ፍትሕ",
          body:
            "Being FAIR, IMPARTIAL, and providing EQUITABLE services to the people. Derived from LAW, ETHICS, and RELIGION. It considers the right of all people and individuals to EQUAL PROTECTION UNDER THE LAW.",
          bodyAm:
            "ፍትሐዊ፣ አድልዎ የሌለውና እኩል አገልግሎት መስጠት። ከሕግ፣ ከሥነ-ምግባርና ከሃይማኖት የተገኘ። ሁሉም በሕግ ፊት እኩል ጥበቃ ማግኘት አለበት።",
        },
        {
          id: "n3-4",
          title: "4) Equality",
          titleAm: "4) እኩልነት",
          body:
            "All citizens have EQUAL ACCESS to political, social, and economic opportunities. In terms of humanity, ALL HUMANS ARE EQUAL. Colour, ethnic, religious, and economic inequalities are EXTERNAL to intrinsic humanity. Equality = everyone treated equally regardless of parents, ethnicity, religion, or wealth.",
          bodyAm:
            "ሁሉም ዜጎች እኩል የፖለቲካ፣ ማህበራዊና ኢኮኖሚያዊ ዕድል አላቸው። በሰብአዊነት ሁሉም ሰዎች እኩል ናቸው።",
        },
        {
          id: "n3-5",
          title: "5) Inclusiveness",
          titleAm: "5) አካታችነት",
          body:
            "Ensuring ALL members of society are included in decision-making and access to resources — regardless of background. No one is excluded.",
          bodyAm:
            "ሁሉም የማህበረሰብ አባላት በውሳኔ አሰጣጥና በሀብት ተጠቃሚነት እንዲካተቱ ማድረግ።",
        },
        {
          id: "n3-6",
          title: "6) Civility",
          titleAm: "6) ሥልጣኔ",
          body:
            "A moral obligation people owe to one another. Examples: respecting one another and honouring differences; listening and seeking common ground; engaging in social discourse; attention to hygiene, dress, interactions; good manners; tolerance, acceptance, non-discrimination.",
          bodyAm:
            "ሰዎች እርስ በርስ ያለባቸው የሞራል ግዴታ። ምሳሌ፡ መከባበር፣ ማዳመጥ፣ የጋራ መሠረት መፈለግ፣ ንጽህና፣ መልካም ሥነ-ምግባር።",
        },
        {
          id: "n3-7",
          title: "7) Valuing Diversity",
          titleAm: "7) ብዝሃነትን ማዕከል ማድረግ",
          body:
            "Institutions and community members VALUE diversity — recognising benefits of differences and similarities. They foster long-term relationships among diverse people. A community that values diversity ensures ALL members receive equal treatment and access to resources regardless of race, ethnicity, sexual orientation, or disability.",
          bodyAm:
            "ተቋማትና የማህበረሰብ አባላት ብዝሃነትን ያደንቃሉ። ሁሉም እኩል አያያዝና የሀብት ተደራሽነት ያገኛሉ።",
        },
        {
          id: "n3-8",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: TOLERANCE ≠ agreeing with everything. It means coexisting peacefully with differences. EQUALITY ≠ everyone gets the same thing. It means EQUAL OPPORTUNITY and equal treatment under the law.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ መቻቻል ≠ ሁሉንም መስማማት። እኩልነት ≠ ሁሉም ተመሳሳይ ነገር ማግኘት። እኩል ዕድል ማለት ነው።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Indigenous Democratic Values and Institutions",
      titleAm: "4. ተወላጅ ዲሞክራሲያዊ እሴቶችና ተቋማት",
      body:
        "Banchi, INDIGENOUS KNOWLEDGE is a system for creating, retaining, adapting, and expanding knowledge as a legacy for future generations. It gives rise to indigenous values and institutions. Ethiopia has diverse societies, each with their own indigenous systems for electing leaders, resolving conflicts, and mobilizing the public.",
      bodyAm:
        "ባንቺ፣ ተወላጅ ዕውቀት ለትውልድ የሚተላለፍ ዕውቀት ነው። ኢትዮጵያ የተለያዩ ማህበረሰቦች አሏት። እያንዳንዱ የራሱ ተወላጅ ሥርዓት አለው።",
      children: [
        {
          id: "n4-1",
          title: "Examples of Indigenous Institutions",
          titleAm: "የተወላጅ ተቋማት ምሳሌዎች",
          body:
            "• KANCHI — Wejerat people. Socio-cultural administration for peace, order, justice.\n" +
            "• AWASSIYA — Wolaita society. Conflict resolution and reparation.\n" +
            "• LUWA — Sidama society. Peaceful power transition institution.\n" +
            "• YAJOKA and GORDANNA — Gurague (Gurage). Combined legislative and judicial functions.\n" +
            "• SEERA — Kambatta. Governs relationships; also called 'Marietta' (commitment to truth).\n" +
            "• GADA — Oromo society. Well-known indigenous democratic institution of governance — covers political, economic, social, religious activities; conflict resolution, peaceful power transition, women's rights.",
          bodyAm:
            "• ካንቺ — ወጀራት።\n• አዋሲያ — ወላይታ።\n• ሉዋ — ሲዳማ።\n• ያጆካና ጎርዳና — ጉራጌ።\n• ሴራ — ካምባታ።\n• ጋዳ — ኦሮሞ።",
        },
        {
          id: "n4-2",
          title: "Importance of Indigenous Values",
          titleAm: "የተወላጅ እሴቶች ጠቀሜታ",
          body:
            "Banchi, indigenous democratic values are CRITICAL to a country's democratization. They have greater legitimacy in society because they come from the people themselves. Such values support the development of democratic values and institutions.",
          bodyAm:
            "ተወላጅ ዲሞክራሲያዊ እሴቶች ለአገር ዲሞክራሲያዊነት ወሳኝ ናቸው።",
        },
        {
          id: "n4-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: GADA (Oromo) is the MOST-TESTED indigenous democratic institution. Remember: GADA = Oromo. LUWA = Sidama (power transition). AWASSIYA = Wolaita (conflict resolution). KANCHI = Wejerat. YAJOKA = Gurage. SEERA = Kambatta.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ጋዳ = ኦሮሞ። ሉዋ = ሲዳማ። አዋሲያ = ወላይታ። ካንቺ = ወጀራት። ያጆካ = ጉራጌ። ሴራ = ካምባታ።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Challenges and Opportunities of Democracy in Ethiopia",
      titleAm: "5. በኢትዮጵያ የዲሞክራሲ ችግሮችና ዕድሎች",
      body:
        "Banchi, Ethiopia is one of the world's oldest countries, but its DEMOCRATIZATION process is still in its INFANCY. The 1987 constitution called the country 'the People's Democratic Republic of Ethiopia,' but in practice this was not the case. The 1995 constitution declares FDRE but also has limitations.",
      bodyAm:
        "ባንቺ፣ ኢትዮጵያ ከዓለማችን ጥንታዊ አገሮች አንዷ ናት፣ ግን የዲሞክራሲ ሂደቷ ገና ጨቅላ ነው።",
      children: [
        {
          id: "n5-1",
          title: "Opportunities for Democracy in Ethiopia",
          titleAm: "የዲሞክራሲ ዕድሎች",
          body:
            "• Reforms of democratic institutions (Human Rights Commission, National Board of Elections).\n" +
            "• Rapid expansion of education (public and private) — increases social consciousness.\n" +
            "• Massive infrastructure investment (roads, railways, airports, communication).\n" +
            "• Investment in agriculture and agro-industry — boosts rural productivity and employment.\n" +
            "• Private and public investment in tourism (climate, history, culture).",
          bodyAm:
            "• የዲሞክራሲያዊ ተቋማት ማሻሻያ።\n• የትምህርት መስፋፋት።\n• የመሠረተ ልማት ኢንቨስትመንት።\n• የግብርና ኢንዱስትሪ ኢንቨስትመንት።\n• የቱሪዝም ኢንቨስትመንት።",
        },
        {
          id: "n5-2",
          title: "Challenges of Democracy in Ethiopia",
          titleAm: "የዲሞክራሲ ችግሮች",
          body:
            "• No powerful institutions to support democratic processes.\n" +
            "• Absence of complementing party roles among political parties.\n" +
            "• Lack of an INFORMED society (politically conscious).\n" +
            "• Media does not conduct independent analyses — public has limited access.\n" +
            "• Weak political participation.\n" +
            "• POVERTY — hunger, starvation, basic rights questioned.",
          bodyAm:
            "• ጠንካራ ተቋማት አለመኖር።\n• የፓርቲዎች ሚና ማነስ።\n• የተማረ ማህበረሰብ ማነስ።\n• ሚዲያ ᯒራ የለም።\n• ደካማ የፖለቲካ ተሳትፎ።\n• ድህነት።",
        },
        {
          id: "n5-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: POVERTY is a MAJOR CHALLENGE for democracy in Ethiopia. So is WEAK INSTITUTIONS. Do NOT confuse opportunities (education expansion, infrastructure) with challenges (poverty, weak institutions).",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ድህነት ትልቁ ችግር ነው። ደካማ ተቋማትም ችግር ነው። ዕድሎችንና ችግሮችን አትቀላቅዪ።",
        },
      ],
    },
  ],

  // ============================================================
  // QUESTIONS — Q1 to Q120
  // ============================================================
  questions: [
    // ---------- EASY MCQ (Q1–Q25) ----------
    {
      id: "q1",
      type: "mcq",
      difficulty: "easy",
      stem: "What is democracy?",
      options: [
        "Rule by one person",
        "A political system in which the people hold supreme political power",
        "Rule by the army",
        "Rule by religious leaders",
      ],
      answer: "1",
      explanation:
        "Banchi, DEMOCRACY is a political system in which the PEOPLE hold SUPREME political power.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "The fundamental concept of democracy is:",
      options: ["Wealth", "Freedom", "Power", "Religion"],
      answer: "1",
      explanation: "The FUNDAMENTAL concept of democracy is FREEDOM.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is TRUE about democracy?",
      options: [
        "It is only a political system",
        "It is only for politicians",
        "It is a political system AND a way of life",
        "It is only for the rich",
      ],
      answer: "2",
      explanation: "Democracy is BOTH a political system AND a WAY OF LIFE.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the FOUNDATION principle of democracy?",
      options: ["Secularism", "Popular sovereignty", "Rule of law", "Multi-party system"],
      answer: "1",
      explanation: "POPULAR SOVEREIGNTY is the FOUNDATION of democracy.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "Popular sovereignty means:",
      options: [
        "The king has all power",
        "The people give consent to government through elected representatives",
        "The army rules",
        "The judiciary decides everything",
      ],
      answer: "1",
      explanation: "POPULAR SOVEREIGNTY = the PEOPLE give consent through ELECTED REPRESENTATIVES.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "The supremacy of constitution means:",
      options: [
        "The prime minister is supreme",
        "The constitution takes precedence over all other laws",
        "Parliament is supreme",
        "The army is supreme",
      ],
      answer: "1",
      explanation: "SUPREMACY OF CONSTITUTION = the constitution takes PRECEDENCE over all other laws.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "Which FDRE article states the supremacy of the constitution?",
      options: ["Article 9/1", "Article 11", "Article 51", "Article 74"],
      answer: "0",
      explanation: "ARTICLE 9/1 states: any law conflicting with the constitution is NULL AND VOID.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "The three branches of government are:",
      options: [
        "Federal, Regional, Local",
        "Legislative, Executive, Judicial",
        "President, PM, Cabinet",
        "Army, Police, Court",
      ],
      answer: "1",
      explanation: "LEGISLATIVE (makes laws), EXECUTIVE (implements), JUDICIAL (applies laws).",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "Which branch CREATES laws?",
      options: ["Executive", "Legislative", "Judiciary", "Military"],
      answer: "1",
      explanation: "The LEGISLATIVE branch CREATES laws.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "Which branch IMPLEMENTS laws?",
      options: ["Legislative", "Judiciary", "Executive", "Religious"],
      answer: "2",
      explanation: "The EXECUTIVE branch IMPLEMENTS laws.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "Which branch APPLIES laws to specific cases?",
      options: ["Executive", "Legislative", "Judiciary", "Military"],
      answer: "2",
      explanation: "The JUDICIARY applies laws to SPECIFIC CASES.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "Secularism means:",
      options: [
        "The state has a state religion",
        "The state and religion are separate",
        "Only one religion is allowed",
        "Religion rules the state",
      ],
      answer: "1",
      explanation: "SECULARISM = SEPARATION of state and religion.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "Which FDRE article declares state-religion separation?",
      options: ["Article 9", "Article 11", "Article 25", "Article 51"],
      answer: "1",
      explanation: "ARTICLE 11 — state and religion are distinct; no state religion.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "A FREE election means:",
      options: [
        "All votes have equal weight",
        "All citizens can vote for their chosen candidate",
        "Held every year",
        "Only rich people vote",
      ],
      answer: "1",
      explanation: "FREE election = all citizens can vote for the CANDIDATE OF THEIR CHOICE.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "A FAIR election means:",
      options: [
        "All citizens can vote",
        "All votes have equal weight and are accurately counted",
        "Held periodically",
        "Only one party participates",
      ],
      answer: "1",
      explanation: "FAIR election = all votes have EQUAL WEIGHT and are ACCURATELY COUNTED.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "A PERIODIC election means:",
      options: [
        "Held once",
        "Held at regular intervals",
        "Held randomly",
        "Never held",
      ],
      answer: "1",
      explanation: "PERIODIC election = held at REGULAR INTERVALS.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "Universal suffrage means:",
      options: [
        "Only men can vote",
        "All adult citizens have the right to vote regardless of wealth, gender, or status",
        "Only rich people vote",
        "Only educated people vote",
      ],
      answer: "1",
      explanation: "UNIVERSAL SUFFRAGE = ALL ADULT CITIZENS can vote regardless of wealth, income, gender, race, etc.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "Secret ballot means:",
      options: [
        "Votes are public",
        "Voter's choices are kept private",
        "Only leaders vote",
        "Voting is optional",
      ],
      answer: "1",
      explanation: "SECRET BALLOT = the voter's choices are KEPT PRIVATE.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "A multi-party system means:",
      options: [
        "Only one party exists",
        "More than one political party participates in elections and government",
        "No parties exist",
        "Parties are banned",
      ],
      answer: "1",
      explanation: "MULTI-PARTY = MORE THAN ONE political party participates.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the result when a country has only one political party?",
      options: ["Democracy", "Dictatorship", "Federalism", "Republic"],
      answer: "1",
      explanation: "One-party system = DICTATORSHIP.",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "The rule of law means:",
      options: [
        "The president is above the law",
        "No one is above the law",
        "The army is above the law",
        "The rich are above the law",
      ],
      answer: "1",
      explanation: "RULE OF LAW = NO ONE (not even a king or president) is ABOVE the law.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "Tolerance is a key value of:",
      options: ["Dictatorship", "Democracy", "Monarchy", "Oligarchy"],
      answer: "1",
      explanation: "TOLERANCE is a KEY value of DEMOCRACY.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "Liberty means:",
      options: [
        "Being free within society from oppressive restrictions",
        "Being rich",
        "Being powerful",
        "Being educated",
      ],
      answer: "0",
      explanation: "LIBERTY = being FREE within society from oppressive restrictions on one's way of life.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "Equality means:",
      options: [
        "Everyone is identical",
        "All citizens have equal access to opportunities; all humans are equal",
        "Everyone has the same job",
        "Only the rich are equal",
      ],
      answer: "1",
      explanation: "EQUALITY = all citizens have EQUAL ACCESS to political, social, and economic opportunities.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "Gada is the indigenous democratic institution of which society?",
      options: ["Wolaita", "Oromo", "Sidama", "Gurage"],
      answer: "1",
      explanation: "GADA is the indigenous democratic institution of the OROMO society.",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the relationship between democracy and the rule of law?",
      options: [
        "Democracy means no rules",
        "The rule of law is a fundamental principle of democracy",
        "Democracy and rule of law are unrelated",
        "Rule of law replaces democracy",
      ],
      answer: "1",
      explanation: "The RULE OF LAW is a FUNDAMENTAL principle of DEMOCRACY.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Why is citizen participation BOTH a right and an obligation?",
      options: [
        "Because it is optional",
        "Because it is required only for leaders",
        "Because democracy depends on the active involvement of citizens in public affairs",
        "Because it is only for the rich",
      ],
      answer: "2",
      explanation: "Participation is BOTH right and obligation because DEMOCRACY depends on ACTIVE citizen involvement.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Why is separation of powers important?",
      options: [
        "To concentrate power",
        "To prevent abuse of power and ensure checks and balances",
        "To make laws faster",
        "To give power to one person",
      ],
      answer: "1",
      explanation: "SEPARATION OF POWERS prevents ABUSE and ensures CHECKS AND BALANCES.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Why is secularism important for democracy?",
      options: [
        "Because it makes religion illegal",
        "Because it prevents one religious group from dominating others",
        "Because it promotes state religion",
        "Because it abolishes religion",
      ],
      answer: "1",
      explanation: "SECULARISM prevents ONE religious group from DOMINATING others — protecting minority rights.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "What is public accountability?",
      options: [
        "The right of officials to hide information",
        "The right of the public to information about government activities",
        "The right of the army to rule",
        "The right of the president to ignore laws",
      ],
      answer: "1",
      explanation: "PUBLIC ACCOUNTABILITY = the RIGHT OF THE PUBLIC to information about government activities.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "What is transparency?",
      options: [
        "Hiding government activities",
        "Public access to activities of government officials and institutions",
        "Censoring the media",
        "Banning debate",
      ],
      answer: "1",
      explanation: "TRANSPARENCY = PUBLIC ACCESS to activities of government officials and institutions.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a practice AGAINST democratic elections?",
      options: [
        "Free campaigning",
        "Intimidation and threats to voters",
        "Secret ballot",
        "Universal suffrage",
      ],
      answer: "1",
      explanation: "INTIMIDATION, CORRUPTION, and THREATS to citizens are practices AGAINST democratic elections.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why democracy needs informed citizens?",
      options: [
        "Because uninformed citizens make bad decisions",
        "Because informed citizens participate effectively and hold government accountable",
        "Because only educated people should vote",
        "Because it is required by law",
      ],
      answer: "1",
      explanation: "INFORMED citizens PARTICIPATE effectively and HOLD government ACCOUNTABLE.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the relationship between tolerance and coexistence?",
      options: [
        "Tolerance destroys coexistence",
        "Tolerance is essential for peaceful coexistence",
        "Tolerance has no effect",
        "Tolerance is only for children",
      ],
      answer: "1",
      explanation: "TOLERANCE is ESSENTIAL for PEACEFUL COEXISTENCE — differences are natural.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the difference between equality and fairness?",
      options: [
        "They are the same",
        "Equality = equal treatment under law; fairness = impartial decision-making",
        "Equality is only economic",
        "Fairness is only legal",
      ],
      answer: "1",
      explanation: "EQUALITY = equal treatment under law and equal access. FAIRNESS = impartial decisions.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "What did Mahatma Gandhi say about intolerance?",
      options: [
        "It is a virtue",
        "It is a form of violence and a barrier to true democratic spirit",
        "It is necessary",
        "It is unavoidable",
      ],
      answer: "1",
      explanation: "Gandhi said INTOLERANCE is a FORM OF VIOLENCE and a BARRIER to true democratic spirit.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the concept of inclusiveness?",
      options: [
        "Excluding some members",
        "Ensuring ALL members of society are included in decision-making and resource access",
        "Only including the rich",
        "Only including one ethnicity",
      ],
      answer: "1",
      explanation: "INCLUSIVENESS = ensuring ALL members of society are INCLUDED.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes civility?",
      options: [
        "Being rude to others",
        "A moral obligation people owe to one another — respect, listening, good manners",
        "Ignoring differences",
        "Only being polite to leaders",
      ],
      answer: "1",
      explanation: "CIVILITY = a MORAL OBLIGATION — respect, listening, good manners.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes valuing diversity?",
      options: [
        "Ignoring differences",
        "Recognising the benefits of differences and similarities; ensuring equal treatment for all",
        "Forcing uniformity",
        "Banning minority cultures",
      ],
      answer: "1",
      explanation: "VALUING DIVERSITY = recognising BENEFITS of differences and ENSURING equal treatment.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the indigenous institution of the WOLAITA society?",
      options: ["Gada", "Awassiya", "Luwa", "Kanchi"],
      answer: "1",
      explanation: "AWASSIYA is the Wolaita method of CONFLICT RESOLUTION and REPARATION.",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the indigenous institution of the SIDAMA society?",
      options: ["Gada", "Awassiya", "Luwa", "Seera"],
      answer: "2",
      explanation: "LUWA is the Sidama POWER TRANSITION institution.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the indigenous institution of the GURAGE people?",
      options: ["Yajoka and Gordanna", "Gada", "Awassiya", "Kanchi"],
      answer: "0",
      explanation: "YAJOKA AND GORDANNA is the Gurage institution that combines LEGISLATIVE and JUDICIAL functions.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the indigenous institution of the WEJERAT people?",
      options: ["Gada", "Kanchi", "Luwa", "Seera"],
      answer: "1",
      explanation: "KANCHI is the Wejerat socio-cultural administration system for PEACE, ORDER, JUSTICE.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the indigenous institution of the KAMBATTA people?",
      options: ["Gada", "Awassiya", "Seera (Marietta)", "Kanchi"],
      answer: "2",
      explanation: "SEERA (also called MARIETTA — 'commitment to the truth') is the Kambatta institution.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the Gada system?",
      options: [
        "It only handles religious activities",
        "It governs political, economic, social, and religious activities of the Oromo",
        "It is only for women",
        "It was abolished",
      ],
      answer: "1",
      explanation: "GADA governs POLITICAL, ECONOMIC, SOCIAL, and RELIGIOUS activities — including conflict resolution and peaceful transition.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is an OPPORTUNITY for democracy in Ethiopia?",
      options: [
        "Weak institutions",
        "Rapid expansion of education",
        "Poverty",
        "Lack of informed society",
      ],
      answer: "1",
      explanation: "RAPID EXPANSION of EDUCATION is an OPPORTUNITY — it increases social consciousness.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a CHALLENGE for democracy in Ethiopia?",
      options: [
        "Massive infrastructure investment",
        "Rapid education expansion",
        "Weak political participation and poverty",
        "Tourism investment",
      ],
      answer: "2",
      explanation: "WEAK POLITICAL PARTICIPATION and POVERTY are CHALLENGES.",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "Why is poverty a challenge for democracy?",
      options: [
        "Because it strengthens democracy",
        "Because hunger and starvation question basic rights, making democracy harder to sustain",
        "Because it improves participation",
        "Because it attracts investment",
      ],
      answer: "1",
      explanation: "POVERTY — hunger, starvation — QUESTIONS basic rights, making democracy HARDER to sustain.",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "Why are weak institutions a challenge for democracy?",
      options: [
        "Because they strengthen democracy",
        "Because without strong institutions, administration depends on leaders' personal preferences",
        "Because they improve accountability",
        "Because they support rule of law",
      ],
      answer: "1",
      explanation: "Without STRONG institutions, administration depends on the LEADER'S PERSONAL PREFERENCES.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes why a multi-party system is important?",
      options: [
        "Because it limits choices",
        "Because it gives voters a CHOICE of candidates, parties, and policies",
        "Because it ensures one party rules",
        "Because it removes accountability",
      ],
      answer: "1",
      explanation: "MULTI-PARTY system gives voters a CHOICE of candidates, parties, and policies.",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "Why is it said that democracy cannot emerge simply because we WANT it?",
      options: [
        "Because democracy is impossible",
        "Because democracy needs well-structured institutions, standards, rules, and the will of society",
        "Because only rich countries can be democratic",
        "Because democracy is only for educated people",
      ],
      answer: "1",
      explanation: "DEMOCRACY needs WELL-STRUCTURED institutions, standards, rules, AND the WILL of society.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains the relationship between democracy and freedom?",
      options: [
        "Freedom means doing anything you want",
        "Freedom in democracy means freedom WITHIN rules — not lawlessness",
        "Freedom and democracy are the same",
        "Democracy limits all freedoms",
      ],
      answer: "1",
      explanation: "FREEDOM in democracy = freedom WITHIN RULES (rule of law), NOT lawlessness.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why democracy is a WAY OF LIFE?",
      options: [
        "Because it only applies in elections",
        "Because it is shown in DAILY interactions — cooperation, tolerance, respecting diversity",
        "Because it is only for politicians",
        "Because it is only for adults",
      ],
      answer: "1",
      explanation: "Democracy is a WAY OF LIFE — shown in DAILY interactions, not just elections.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why indigenous democratic values are important?",
      options: [
        "Because they replace modern democracy",
        "Because they have greater legitimacy in society — they come from the people and support democratization",
        "Because they are the same as modern democracy",
        "Because they are outdated",
      ],
      answer: "1",
      explanation: "INDIGENOUS values have GREATER LEGITIMACY — they come from the PEOPLE and SUPPORT democratization.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why the media is important for democracy?",
      options: [
        "Because it makes money",
        "Because it provides information for informed decisions and holds government accountable",
        "Because it supports the ruling party",
        "Because it only reports good news",
      ],
      answer: "1",
      explanation: "The MEDIA provides INFORMATION for INFORMED DECISIONS and HOLDS government ACCOUNTABLE.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why the 1987 constitution declared 'People's Democratic Republic' but democracy was not realized?",
      options: [
        "Because it was limited by one-party rule and single-party dominance",
        "Because the constitution was written in Amharic only",
        "Because it had no army",
        "Because there was no president",
      ],
      answer: "0",
      explanation: "The 1987 constitution declared democracy but ONE-PARTY RULE meant democracy was NOT realized in practice.",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Define democracy and explain why it is a way of life.",
      answer:
        "Democracy = a political system in which the PEOPLE hold supreme political power; the people empower and dethrone leaders. The fundamental concept is FREEDOM.\n\n" +
        "It is a WAY OF LIFE because it is shown in DAILY interactions — how we treat classmates, whether we cooperate, tolerate differences, respect others' ethnic, religious, and linguistic identities. When this becomes the culture of society, democratization becomes easier.",
      explanation: "Banchi, remember: democracy = political system + way of life.",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "List and briefly explain the FUNDAMENTAL PRINCIPLES of democracy.",
      answer:
        "1) Popular Sovereignty — people hold supreme power; consent of the governed is the only legitimate source.\n" +
        "2) Supremacy of Constitution — constitution over all other laws (FDRE Art 9/1).\n" +
        "3) Citizen Participation — both right and obligation.\n" +
        "4) Separation of Power — legislative, executive, judicial; goal is check and balance.\n" +
        "5) Secularism — separation of state and religion (FDRE Art 11).\n" +
        "6) Accountability and Transparency — public access to government activities.\n" +
        "7) Free, Fair, and Periodic Elections — universal suffrage + secret ballot.\n" +
        "8) Respect for Human Rights — basic rights regardless of background.\n" +
        "9) Multi-Party System — more than one party for real choices; one party = dictatorship.\n" +
        "10) Rule of Law — no one above the law.",
      explanation: "Banchi, memorize all ten — very common exam question.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "Explain the VALUES of democracy with at least FIVE examples.",
      answer:
        "Values of democracy include:\n" +
        "1) TOLERANCE — coexisting with differences peacefully. Gandhi: intolerance is a form of violence.\n" +
        "2) LIBERTY — being free from oppressive restrictions on way of life, behaviour, or views.\n" +
        "3) JUSTICE — fair, impartial, equitable services; equal protection under the law.\n" +
        "4) EQUALITY — equal access to political, social, economic opportunities; all humans are equal.\n" +
        "5) INCLUSIVENESS — ensuring ALL members are included.\n" +
        "6) CIVILITY — moral obligation of respect, listening, good manners.\n" +
        "7) VALUING DIVERSITY — recognising benefits of differences; equal treatment for all.",
      explanation: "Banchi, at least five values must be listed. Tolerance and equality are most common.",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "Compare challenges and opportunities of democracy in Ethiopia.",
      answer:
        "OPPORTUNITIES:\n" +
        "• Reforms of democratic institutions (Human Rights Commission, National Board of Elections).\n" +
        "• Rapid expansion of education (public and private) — increases social consciousness.\n" +
        "• Massive infrastructure investment (roads, railways, airports, communication).\n" +
        "• Investment in agriculture and agro-industry.\n" +
        "• Investment in tourism.\n\n" +
        "CHALLENGES:\n" +
        "• No powerful institutions to support democracy.\n" +
        "• Absence of complementing party roles.\n" +
        "• Lack of an informed society.\n" +
        "• Limited access to media and independent analysis.\n" +
        "• Weak political participation.\n" +
        "• POVERTY — hunger, starvation question basic rights.",
      explanation: "Banchi, opportunities = institutional reforms, education, infrastructure. Challenges = weak institutions, poverty, weak participation.",
    },

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a principle of democracy?",
      options: [
        "Popular sovereignty",
        "Rule of law",
        "Dictatorship",
        "Free and fair elections",
      ],
      answer: "2",
      explanation: "DICTATORSHIP is NOT a principle of democracy — it is its opposite.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a value of democracy?",
      options: ["Tolerance", "Equality", "Discrimination", "Inclusiveness"],
      answer: "2",
      explanation: "DISCRIMINATION is NOT a democratic value — it is the opposite of equality.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly lists three types of democratic elections?",
      options: [
        "Open, closed, secret",
        "Free, fair, periodic",
        "One-party, multi-party, no-party",
        "National, regional, local",
      ],
      answer: "1",
      explanation: "Elections must be FREE, FAIR, and PERIODIC.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is an example of an opportunity for democracy in Ethiopia?",
      options: [
        "Poverty",
        "Weak institutions",
        "Rapid expansion of education",
        "Weak political participation",
      ],
      answer: "2",
      explanation: "RAPID EXPANSION OF EDUCATION is an OPPORTUNITY.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is an example of a challenge for democracy in Ethiopia?",
      options: [
        "Massive infrastructure investment",
        "Poverty",
        "Expansion of education",
        "Institutional reforms",
      ],
      answer: "1",
      explanation: "POVERTY is a CHALLENGE for democracy in Ethiopia.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the role of the constitution in democracy?",
      options: [
        "It is optional",
        "It is the supreme law; all other laws must conform",
        "It can be ignored",
        "It is only for the rich",
      ],
      answer: "1",
      explanation: "The CONSTITUTION is the SUPREME LAW; all other laws must conform.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes how citizen participation benefits democracy?",
      options: [
        "It weakens democracy",
        "It strengthens democracy by involving citizens in public affairs",
        "It has no effect",
        "It is only for adults",
      ],
      answer: "1",
      explanation: "CITIZEN PARTICIPATION STRENGTHENS democracy by INVOLVING citizens in public affairs.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the difference between fair and free elections?",
      options: [
        "They are the same",
        "Free = can choose candidate; Fair = votes counted accurately and weighted equally",
        "Free = votes counted; Fair = candidates chosen",
        "Both mean open voting",
      ],
      answer: "1",
      explanation: "FREE = choice of candidate. FAIR = accurate, equal-weight counting.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is an example of separation of power?",
      options: [
        "One person makes, enforces, and judges laws",
        "Parliament makes laws, the executive implements, courts judge",
        "The army rules",
        "The president rules alone",
      ],
      answer: "1",
      explanation: "SEPARATION OF POWER = legislative, executive, and judicial branches are SEPARATE.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Why is the rule of law important?",
      options: [
        "It protects the powerful",
        "It ensures everyone — including leaders — is subject to the law",
        "It benefits only the rich",
        "It replaces democracy",
      ],
      answer: "1",
      explanation: "RULE OF LAW = EVERYONE (including leaders) is SUBJECT to the law.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the relationship between democracy and human rights?",
      options: [
        "They are unrelated",
        "Democracy requires respect for human rights",
        "Democracy replaces human rights",
        "Human rights replace democracy",
      ],
      answer: "1",
      explanation: "DEMOCRACY REQUIRES RESPECT for HUMAN RIGHTS — it is one of its key principles.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly explains why a one-party system is undemocratic?",
      options: [
        "Because it gives too many choices",
        "Because it eliminates voter choice and results in dictatorship",
        "Because it has too many elections",
        "Because it is too slow",
      ],
      answer: "1",
      explanation: "A ONE-PARTY system ELIMINATES voter choice and results in DICTATORSHIP.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a way for citizens to participate?",
      options: [
        "Only voting",
        "Voting, running for office, becoming informed, debating issues, attending meetings",
        "Only running for office",
        "Only attending meetings",
      ],
      answer: "1",
      explanation: "Citizens can participate MANY ways — voting, running, informing, debating, attending.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes 'inclusiveness'?",
      options: [
        "Including only the majority",
        "Including all members of society regardless of background",
        "Excluding minorities",
        "Excluding the poor",
      ],
      answer: "1",
      explanation: "INCLUSIVENESS = including ALL members of society REGARDLESS of background.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes 'civility'?",
      options: [
        "Being rude to others",
        "Respecting one another and honouring differences",
        "Ignoring everyone",
        "Only respecting leaders",
      ],
      answer: "1",
      explanation: "CIVILITY includes RESPECT for one another and HONOURING differences.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the difference between a federal and democratic state?",
      options: [
        "They are the same",
        "Federal = structure; Democratic = political system — one does not guarantee the other",
        "Federal states are always democratic",
        "Democratic states are always federal",
      ],
      answer: "1",
      explanation: "FEDERAL = structure. DEMOCRATIC = system. One does NOT guarantee the other.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the concept of 'common values shared by peoples throughout the world'?",
      options: [
        "Only in America",
        "Universal — democracy's ideas and principles are shared globally",
        "Only in Ethiopia",
        "Only in Europe",
      ],
      answer: "1",
      explanation: "Democracy is based on COMMON VALUES shared by PEOPLES THROUGHOUT THE WORLD.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the concept of 'individual freedom to participate in political community'?",
      options: [
        "Freedom only to vote",
        "The right of individuals to participate in the political life of their community",
        "Freedom from all laws",
        "Freedom to break rules",
      ],
      answer: "1",
      explanation: "Individual freedom to PARTICIPATE in the POLITICAL COMMUNITY — voting, debating, joining associations.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes personal freedom?",
      options: [
        "Freedom to do anything",
        "The right to live without unwarranted government interference in personal life",
        "Freedom only in elections",
        "Freedom only for the rich",
      ],
      answer: "1",
      explanation: "PERSONAL FREEDOM = the right to live WITHOUT unwarranted government interference.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes economic freedom?",
      options: [
        "Freedom to vote",
        "The right to seek employment wherever you want and to own, use, and dispose of private property",
        "Freedom to worship",
        "Freedom to speak",
      ],
      answer: "1",
      explanation: "ECONOMIC FREEDOM = right to seek EMPLOYMENT and own/use/dispose PRIVATE PROPERTY.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes political freedom?",
      options: [
        "Right to own property",
        "Right to vote, be elected, and participate in political life",
        "Right to run a business",
        "Right to travel",
      ],
      answer: "1",
      explanation: "POLITICAL FREEDOM = right to VOTE, BE ELECTED, and PARTICIPATE in political life.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a way to strengthen democracy?",
      options: [
        "Reducing citizen participation",
        "Educating citizens and strengthening institutions",
        "Ignoring the rule of law",
        "Restricting the media",
      ],
      answer: "1",
      explanation: "EDUCATING citizens and STRENGTHENING institutions STRENGTHEN democracy.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the concept of 'no one is above the law'?",
      options: [
        "Rule of law",
        "Popular sovereignty",
        "Secularism",
        "Multi-party",
      ],
      answer: "0",
      explanation: "RULE OF LAW = no one (not even a king or president) is ABOVE the law.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a challenge for democracy in Ethiopia?",
      options: [
        "Lack of informed society and weak participation",
        "Too many informed citizens",
        "Excessive political participation",
        "Strong institutions",
      ],
      answer: "0",
      explanation: "LACK of informed society and WEAK participation are CHALLENGES.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the relationship between democracy and diversity?",
      options: [
        "Democracy eliminates diversity",
        "Democracy VALUES diversity and ensures equal treatment for all",
        "Democracy ignores diversity",
        "Democracy rejects diversity",
      ],
      answer: "1",
      explanation: "Democracy VALUES DIVERSITY and ensures EQUAL TREATMENT for all.",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the concept of 'accountability and transparency'?",
      options: [
        "Government hides its actions",
        "The public has access to information about government activities and can hold officials accountable",
        "Officials are above the law",
        "The media is banned",
      ],
      answer: "1",
      explanation: "ACCOUNTABILITY and TRANSPARENCY = public ACCESS to information and holding officials RESPONSIBLE.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why the media is important for democratization?",
      options: [
        "Because it supports only the government",
        "Because it provides information, exposes corruption, and enables public debate",
        "Because it makes money",
        "Because it is entertainment",
      ],
      answer: "1",
      explanation: "MEDIA provides information, EXPOSES corruption, and ENABLES public debate.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why tolerance is important for a multicultural society?",
      options: [
        "Because differences are natural and coexistence requires tolerance",
        "Because tolerance eliminates differences",
        "Because tolerance forces uniformity",
        "Because tolerance suppresses minorities",
      ],
      answer: "0",
      explanation: "DIFFERENCES are NATURAL — COEXISTENCE requires TOLERANCE.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why education is an opportunity for democracy in Ethiopia?",
      options: [
        "Because it makes people rich",
        "Because it increases social consciousness, enabling citizens to understand rights and duties",
        "Because it is free",
        "Because it is compulsory",
      ],
      answer: "1",
      explanation: "EDUCATION increases SOCIAL CONSCIOUSNESS — citizens understand their RIGHTS and DUTIES.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes why one-party systems are dangerous?",
      options: [
        "Because they eliminate choice, accountability, and lead to dictatorship",
        "Because they have too many candidates",
        "Because they have too many elections",
        "Because they are too democratic",
      ],
      answer: "0",
      explanation: "ONE-PARTY systems ELIMINATE choice and accountability and lead to DICTATORSHIP.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the difference between personal and economic freedom?",
      options: [
        "They are the same",
        "Personal = live without unwarranted interference; Economic = seek employment and own property",
        "Both are only about property",
        "Both are only about voting",
      ],
      answer: "1",
      explanation: "PERSONAL freedom = freedom from unwarranted interference in personal life. ECONOMIC freedom = employment and property rights.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how democracy treats religious diversity?",
      options: [
        "It establishes a state religion",
        "It separates state and religion (secularism), allowing all to practice freely",
        "It bans religion",
        "It favours the majority religion",
      ],
      answer: "1",
      explanation: "SECULARISM separates state and religion, allowing ALL to practice their faith FREELY.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a way Gada handles community life?",
      options: [
        "Only religious matters",
        "Political, economic, social, religious activities, conflict resolution, and women's rights",
        "Only economic matters",
        "Only conflict",
      ],
      answer: "1",
      explanation: "GADA governs POLITICAL, ECONOMIC, SOCIAL, and RELIGIOUS activities — plus CONFLICT RESOLUTION and WOMEN'S RIGHTS.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why indigenous institutions have greater legitimacy?",
      options: [
        "Because they are officially recognized",
        "Because they come from the people themselves and have evolved over generations",
        "Because they are written in law",
        "Because they are foreign imports",
      ],
      answer: "1",
      explanation: "INDIGENOUS institutions have GREATER legitimacy because they come from the PEOPLE themselves.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how a citizen might participate in taxation issues?",
      options: [
        "By refusing to pay taxes",
        "By paying fair taxes and participating in public discussions about taxation",
        "By hiding income",
        "By avoiding government services",
      ],
      answer: "1",
      explanation: "Citizen participation includes PAYING FAIR TAXES and joining PUBLIC DISCUSSIONS about taxation.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why citizen participation must expand to gender equality and environmental protection?",
      options: [
        "Because these are not important",
        "Because democracy requires active engagement on all issues affecting society",
        "Because they are only for women",
        "Because they are only for the environment",
      ],
      answer: "1",
      explanation: "Democracy requires ACTIVE ENGAGEMENT on ALL issues — including gender equality and the environment.",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the role of the Human Rights Commission?",
      options: [
        "To enforce religious law",
        "To protect and promote human rights, filling gaps in democratic institutions",
        "To collect taxes",
        "To lead the army",
      ],
      answer: "1",
      explanation: "The HUMAN RIGHTS COMMISSION protects and promotes HUMAN RIGHTS — an OPPORTUNITY for democracy in Ethiopia.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is an example of an indigenous CONFLICT RESOLUTION institution?",
      options: [
        "Gada (Oromo)",
        "Awassiya (Wolaita)",
        "Seera (Kambatta)",
        "All of the above",
      ],
      answer: "3",
      explanation: "GADA, AWASSIYA, SEERA, KANCHI, and YAJOKA all handle conflict resolution within their communities.",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the concept of 'freedom of movement'?",
      options: [
        "Freedom to move only within your village",
        "Freedom to travel and live anywhere within the country and beyond",
        "Freedom only for the rich",
        "Freedom only for men",
      ],
      answer: "1",
      explanation: "FREEDOM OF MOVEMENT allows travel and residence within the country and beyond.",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how democracy and civil society relate?",
      options: [
        "Civil society weakens democracy",
        "Civil society strengthens democracy by organizing citizens and advocating for rights",
        "They are unrelated",
        "Civil society replaces government",
      ],
      answer: "1",
      explanation: "CIVIL SOCIETY STRENGTHENS democracy by organizing citizens and advocating for rights.",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes why the 1995 FDRE constitution declares democracy but has limitations?",
      options: [
        "Because democracy was not fully realized in practice",
        "Because it was written in a foreign language",
        "Because it was too short",
        "Because it was never ratified",
      ],
      answer: "0",
      explanation: "The 1995 constitution declares democracy but FULL REALIZATION was LIMITED in practice.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the relationship between infrastructure investment and democracy?",
      options: [
        "Infrastructure reduces democracy",
        "Infrastructure increases social interaction, enabling broader democratic participation",
        "Infrastructure has no effect on democracy",
        "Infrastructure is unrelated",
      ],
      answer: "1",
      explanation: "INFRASTRUCTURE (roads, railways, communication) increases SOCIAL INTERACTION — enabling democratic participation.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how tourism investment can support democracy?",
      options: [
        "By isolating communities",
        "By creating jobs, increasing income, and fostering openness to diversity",
        "By reducing education",
        "By discouraging participation",
      ],
      answer: "1",
      explanation: "TOURISM investment CREATES JOBS, INCREASES income, and FOSTERS openness to diversity.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why agriculture investment supports democracy?",
      options: [
        "Because it improves living standards and employment, reducing poverty",
        "Because it isolates communities",
        "Because it reduces education",
        "Because it discourages participation",
      ],
      answer: "0",
      explanation: "AGRICULTURE investment IMPROVES living standards and EMPLOYMENT, REDUCING POVERTY — a key challenge.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the difference between accountability and transparency?",
      options: [
        "They are the same",
        "Accountability = the right to information and redress; Transparency = public access to government activities",
        "Accountability = about the government only",
        "Transparency = about citizens only",
      ],
      answer: "1",
      explanation: "ACCOUNTABILITY = RIGHT to information and redress. TRANSPARENCY = PUBLIC ACCESS to activities.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the difference between fair and free election?",
      options: [
        "They are the same",
        "Free = choice of candidate; Fair = equal weighting and accurate counting",
        "Free = accurate counting; Fair = choice",
        "Both mean open voting",
      ],
      answer: "1",
      explanation: "FREE = choice. FAIR = accurate, equal-weight counting.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the concept of universal suffrage?",
      options: [
        "Only men vote",
        "All adult citizens can vote regardless of wealth, gender, or status",
        "Only the educated vote",
        "Only the rich vote",
      ],
      answer: "1",
      explanation: "UNIVERSAL SUFFRAGE = ALL ADULT CITIZENS can vote regardless of wealth, income, gender, social status, etc.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the role of the House of Peoples' Representatives in Ethiopia?",
      options: [
        "It runs the police",
        "It is the parliament — makes laws and holds the executive accountable",
        "It commands the army",
        "It judges cases",
      ],
      answer: "1",
      explanation: "The HOUSE OF PEOPLES' REPRESENTATIVES is the PARLIAMENT — makes LAWS and holds the executive ACCOUNTABLE.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why democracy requires strong institutions?",
      options: [
        "Because without strong institutions, administration depends on leaders' personal preferences",
        "Because institutions replace leaders",
        "Because institutions are optional",
        "Because institutions make leaders weaker",
      ],
      answer: "0",
      explanation: "WITHOUT STRONG INSTITUTIONS, administration depends on LEADERS' PERSONAL PREFERENCES — not on rules.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the impact of competitive party politics on democracy?",
      options: [
        "It weakens democracy",
        "It regulates incumbent performance and promotes alternative ideas",
        "It has no effect",
        "It discourages voting",
      ],
      answer: "1",
      explanation: "COMPETITIVE party politics REGULATES incumbent performance and PROMOTES alternative ideas.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why democracy and human rights are 'mutually constitutive'?",
      options: [
        "They are unrelated",
        "Democracy cannot exist without human rights, and human rights need democracy for protection",
        "Both are only for the rich",
        "They oppose each other",
      ],
      answer: "1",
      explanation: "They are MUTUALLY CONSTITUTIVE — democracy NEEDS human rights, and human rights NEED democracy.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which best describes the tension between equality and liberty?",
      options: [
        "They never conflict",
        "Sometimes unlimited liberty can produce inequality; balancing them is a democratic challenge",
        "They are the same",
        "Only equality matters",
      ],
      answer: "1",
      explanation: "UNLIMITED liberty can produce INEQUALITY; BALANCING them is a key democratic challenge.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why democratization is a PROCESS, not an event?",
      options: [
        "Because it happens only once",
        "Because it requires continuous development of institutions, culture, and citizen participation",
        "Because it happens overnight",
        "Because it is only for politicians",
      ],
      answer: "1",
      explanation: "DEMOCRATIZATION is a PROCESS requiring CONTINUOUS development of institutions, culture, and participation.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why a country can be FEDERAL but not DEMOCRATIC?",
      options: [
        "Because federalism is only a state structure, not a political system",
        "Because federalism guarantees democracy",
        "Because democracy requires unitary structure",
        "Because federalism is undemocratic",
      ],
      answer: "0",
      explanation: "FEDERALISM is a STATE STRUCTURE — it does NOT guarantee democracy. A federal state can be authoritarian.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Which best describes the role of CIVIL SOCIETY in democracy?",
      options: [
        "To replace government",
        "To organize citizens, advocate for rights, and hold government accountable",
        "To support only the ruling party",
        "To run the army",
      ],
      answer: "1",
      explanation: "CIVIL SOCIETY organizes citizens, ADVOCATES for rights, and HOLDS government ACCOUNTABLE.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains the relationship between democracy and rule of law?",
      options: [
        "Democracy can exist without rule of law",
        "Rule of law is essential for democracy — it ensures no one is above the law",
        "Rule of law replaces democracy",
        "They are unrelated",
      ],
      answer: "1",
      explanation: "The RULE OF LAW is ESSENTIAL for democracy — no one (not even the president) is ABOVE the law.",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "Define democracy and explain why it is more than just a political system.",
      answer:
        "DEMOCRACY = a political system in which the PEOPLE hold supreme political power; the people empower and dethrone leaders. The fundamental concept is FREEDOM.\n\n" +
        "It is MORE than a political system because it is also a WAY OF LIFE — shown in DAILY interactions: how we treat classmates, whether we cooperate, tolerate differences, and respect others' ethnic, religious, and linguistic identities. When this becomes the culture of society, democratization becomes easier.",
      explanation:
        "Banchi, key point: democracy = political system + way of life.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "Explain the SEVEN key VALUES of democracy.",
      answer:
        "1) TOLERANCE — coexisting peacefully with differences. Gandhi: intolerance is a form of violence.\n" +
        "2) LIBERTY — freedom within society from oppressive restrictions.\n" +
        "3) JUSTICE — fair, impartial, equitable services; equal protection under the law.\n" +
        "4) EQUALITY — equal access to opportunities; all humans are equal.\n" +
        "5) INCLUSIVENESS — ensuring ALL members are included.\n" +
        "6) CIVILITY — moral obligation of respect, listening, good manners.\n" +
        "7) VALUING DIVERSITY — recognising benefits of differences; equal treatment for all.",
      explanation:
        "Banchi, memorize at least SEVEN — you may be asked for five or more.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "List and describe FOUR indigenous democratic institutions in Ethiopia.",
      answer:
        "1) GADA (Oromo) — indigenous democratic governance institution. Covers political, economic, social, religious activities; conflict resolution, peaceful power transition, women's rights.\n\n" +
        "2) AWASSIYA (Wolaita) — conflict resolution and reparation among disputants.\n\n" +
        "3) LUWA (Sidama) — peaceful POWER TRANSITION institution.\n\n" +
        "4) YAJOKA and GORDANNA (Gurage) — combines LEGISLATIVE and JUDICIAL functions.\n\n" +
        "5) KANCHI (Wejerat) — socio-cultural administration for peace, order, justice.\n\n" +
        "6) SEERA (Kambatta) — governs relationships between individuals, tribes, territorial units; called 'Marietta' (commitment to truth).",
      explanation:
        "Banchi, memorize at least FOUR — Gada is the most tested.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Analyze the challenges and opportunities of democracy in Ethiopia, and suggest what should be done.",
      answer:
        "OPPORTUNITIES:\n" +
        "• Reforms of democratic institutions (Human Rights Commission, National Board of Elections).\n" +
        "• Rapid expansion of education — increases social consciousness.\n" +
        "• Massive infrastructure investment — increases social interaction.\n" +
        "• Investment in agriculture and agro-industry.\n" +
        "• Investment in tourism.\n\n" +
        "CHALLENGES:\n" +
        "• No powerful institutions to support democracy.\n" +
        "• Absence of complementing party roles among political parties.\n" +
        "• Lack of an informed society.\n" +
        "• Limited access to media and independent analysis.\n" +
        "• Weak political participation.\n" +
        "• POVERTY — hunger, starvation.\n\n" +
        "WHAT SHOULD BE DONE:\n" +
        "• Strengthen democratic institutions.\n" +
        "• Expand education further and promote political awareness.\n" +
        "• Support independent media.\n" +
        "• Encourage competitive multi-party politics.\n" +
        "• Reduce poverty through inclusive economic development.\n" +
        "• Increase citizen participation at all levels.",
      explanation:
        "Banchi, the exam wants: opportunities + challenges + concrete recommendations.",
    },
  ],
};