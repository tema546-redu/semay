import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 SOCIAL STUDIES — UNIT 5
// AFRICA SINCE THE 1500s
// Source: AAEB Grade 8 Social Studies Student Textbook (pp. 119–146)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8SocialCh5: Chapter = {
  id: "ch5",
  number: 5,
  title: "Africa since the 1500s",
  titleAm: "አፍሪካ ከ1500ዎቹ ዓመታት ጀምሮ",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. Slavery and the Slave Trade",
      titleAm: "ባርነት እና የባሪያ ንግድ",
      body:
        "Banchi, a slave is a human being who is the property of another person. When Africans were captured, sold, and shipped to the New World, they were enslaved for their entire lives, and their children were enslaved too. Slave trade = capturing, selling, and buying enslaved persons.",
      bodyAm:
        "ባንቺ፣ ባሪያ የሌላ ሰው ንብረት የሆነ ሰው ነው። አፍሪካውያን ተይዘው፣ ተሽጠው ወደ አዲሱ ዓለም ሲላኩ ለሙሉ ሕይወታቸው ባሪያ ነበሩ፣ ልጆቻቸውም ባሪያ ነበሩ። የባሪያ ንግድ = የተጠለፉ ሰዎችን መያዝ፣ መሸጥ እና መግዛት።",
      children: [
        {
          id: "n1-1",
          title: "Actors of the slave trade",
          titleAm: "የባሪያ ንግድ ተዋናዮች",
          body:
            "At FIRST: Portugal and Spain were the main organizers.\n" +
            "By mid-17th century: North-west European countries joined.\n" +
            "In the 18th century: BRITAIN was the foremost slave-trading power, alongside the French, Dutch, Portuguese, and Spanish.",
          bodyAm:
            "መጀመሪያ፡ ፖርቹጋል እና ስፔን ዋና አዘጋጆች ነበሩ።\nበ17ኛው ክፍለ ዘመን አጋማሽ፡ የሰሜን-ምዕራብ አውሮፓ አገሮች ተቀላቀሉ።\nበ18ኛው ክፍለ ዘመን፡ ብሪታንያ ዋና ነጋዴ ነበረች፣ ከፈረንሳይ፣ ሆላንድ፣ ፖርቹጋል እና ስፔን ጋር።",
        },
        {
          id: "n1-2",
          title: "Why Africans were chosen for slavery",
          titleAm: "አፍሪካውያን ለባርነት የተመረጡበት ምክንያት",
          body:
            "1) Local Amerindians died from harsh treatment and European diseases (90% wiped out).\n" +
            "2) European criminals and outcasts were too few and died of tropical diseases.\n" +
            "3) AFRICANS had:\n" +
            "   • Immunity to some tropical diseases\n" +
            "   • Experience in metal-working, mining, and tropical agriculture\n\n" +
            "First African captives were sold into slavery across the Atlantic in 1532.",
          bodyAm:
            "1) የአገር ተወላጆች (አሜሪንዲያኖች) በአውሮፓውያን በሽታዎች ሞቱ (90% ጠፉ)።\n2) የአውሮፓ ወንጀለኞች በጣም ጥቂት ነበሩ።\n3) አፍሪካውያን፡ ለአንዳንድ ሞቃታማ በሽታዎች የበሽታ መከላከያ ነበራቸው፣ በብረት ሥራ፣ በማዕድን እና በሞቃታማ እርሻ ልምድ ነበራቸው።\nየመጀመሪያዎቹ አፍሪካውያን በ1532 ተሽጠው ወደ አሜሪካ ተወሰዱ።",
        },
        {
          id: "n1-3",
          title: "Nature of the slave trade",
          titleAm: "የባሪያ ንግድ ተፈጥሮ",
          body:
            "IN AFRICA: Captured inland → chained → marched to coast → locked in wooden cages → stripped and examined → sold.\n\n" +
            "MIDDLE PASSAGE: Chained in rows below deck → forced to lie on shelves barely ½ m apart → unable to sit or move → weeks of suffering → given barely enough food and water → 15–30% died on the crossing.\n\n" +
            "IN AMERICA: Life on plantations was hard and short. One third died within 3 years. Few survived beyond 10 years.",
          bodyAm:
            "በአፍሪካ፡ በውስጥ አካባቢ ተይዘው → በሰንሰለት ታስረው → ወደ ዳርቻ ተመርተው → በእንጨት ቤቶች ተዘግተው → ተገልጠው → ተሽጠው።\nየመሃል ጉዞ፡ በመርከብ ውስጥ በሰንሰለት → በግማሽ ሜትር ርቀት ላይ → መቀመጥም መንቀሳቀስም አይችሉም → ሳምንታት ስቃይ → 15–30% በጉዞው ሞቱ።\nበአሜሪካ፡ በእርሻ ላይ ሕይወት ከባድ ነበር። አንድ ሦስተኛ በ3 ዓመት ውስጥ ሞቱ።",
        },
        {
          id: "n1-4",
          title: "Triangular Trade",
          titleAm: "የሦስት ማዕዘን ንግድ",
          body:
            "Europe → Africa: cheap manufactured goods (glass, cotton cloth, metal hardware, cheap guns).\n" +
            "Africa → New World: SLAVES (sold for 2–3× what they cost in Africa).\n" +
            "New World → Europe: sugar cane, coffee, tobacco, cotton.",
          bodyAm:
            "አውሮፓ → አፍሪካ፡ ርካሽ የተመረቱ ዕቃዎች (ብርጭቆ፣ ጥጥ ጨርቅ፣ ብረት ዕቃ፣ ርካሽ ጠመንጃዎች)።\nአፍሪካ → አዲሱ ዓለም፡ ባሪያዎች (በ2–3 እጥፍ ዋጋ ይሸጡ ነበር)።\nአዲሱ ዓለም → አውሮፓ፡ ሸንኮራ አገዳ፣ ቡና፣ ትንባሆ፣ ጥጥ።",
        },
        {
          id: "n1-5",
          title: "Abolition — why slavery ended",
          titleAm: "ስረዛ — ባርነት ለምን አበቃ",
          body:
            "POLITICAL: American War of Independence (1776–83) and French Revolution (1789) spread ideas of 'Liberty, Equality, Fraternity'.\n\n" +
            "ECONOMIC: European manufacturers found cheap wage labor in factories more efficient than plantation slavery. Africa became a source of raw materials and a market, not just slave labor.\n\n" +
            "SLAVE RESISTANCE: Constant revolts made slavery unsafe and expensive. St. Dominique (Haiti) revolt under Toussaint L'Ouverture (1791) → independent Republic of Haiti (1803).",
          bodyAm:
            "ፖለቲካዊ፡ የአሜሪካ የነጻነት ጦርነት (1776–83) እና የፈረንሳይ አብዮት (1789) የ'ነጻነት፣ እኩልነት፣ ወንድማማችነት' ሐሳቦችን አሰራጩ።\nኢኮኖሚያዊ፡ ርካሽ የደመወዝ ሠራተኛ በፋብሪካ የበለጠ ቀልጣፋ ሆነ።\nየባሪያዎች ተቃውሞ፡ ተደጋጋሚ አመጾች ባርነትን አደገኛ አደረጉት። በሃይቲ በቱሳንት ሉቨርቸር መሪነት ነጻ ሪፐብሊክ ተቋቋመች (1803)።",
        },
        {
          id: "n1-6",
          title: "End of slavery by law",
          titleAm: "ባርነት በሕግ ሲቋረጥ",
          body:
            "1834 — British colonies\n" +
            "1848 — French colonies\n" +
            "1860 — Cuba\n" +
            "1865 — Southern United States\n" +
            "1888 — Brazil\n\n" +
            "Sierra Leone (1787) and Liberia (1822) were founded as settlements for freed blacks.",
          bodyAm:
            "1834 — የብሪታንያ ቅኝ ግዛቶች\n1848 — የፈረንሳይ ቅኝ ግዛቶች\n1860 — ኩባ\n1865 — ደቡብ አሜሪካ\n1888 — ብራዚል\nሴራሊዮን (1787) እና ላይቤሪያ (1822) ለነጻ ጥቁሮች መንደሮች ተቋቋሙ።",
        },
        {
          id: "n1-7",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exams love these pairs. Remember: Africa was the SOURCE of slaves (West Africa, Angola, Congo). Sierra Leone = freed blacks from ENGLAND (1787). Liberia = freed blacks from USA (1822). Do not mix them.",
          bodyAm:
            "ባንቺ፣ ፈተናዎች እነዚህን ጥንዶች ይወዳሉ። አፍሪካ የባሪያዎች ምንጭ ነበረች። ሴራሊዮን = ከእንግሊዝ (1787)። ላይቤሪያ = ከአሜሪካ (1822)።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Colonialism in Africa",
      titleAm: "ቅኝ ግዛት በአፍሪካ",
      body:
        "Banchi, colonialism = a BACKWARD or weaker nation is controlled by a POWERFUL nation. The powerful nation has advanced economy, strong government, and military strength.",
      bodyAm:
        "ባንቺ፣ ቅኝ ግዛት = ወደኋላ የቀረች ወይም ደካማ አገር በኃያል አገር ስትቆጣጠር። ኃያሉ አገር የላቀ ኢኮኖሚ፣ ጠንካራ መንግሥት እና ወታደራዊ ኃይል አለው።",
      children: [
        {
          id: "n2-1",
          title: "Berlin Conference (1884–1885)",
          titleAm: "የበርሊን ጉባኤ (1884–1885)",
          body:
            "Two key principles:\n" +
            "1) The Congo basin was recognized as the legitimate authority of Belgian King Leopold II. In return, European traders and missionaries got free access.\n" +
            "2) European claims in Africa would be recognized by other European governments ONLY if 'effectively occupied' (treaties signed, flags flown, administration established).",
          bodyAm:
            "ሁለት ቁልፍ መርሆች፡\n1) የኮንጎ ተፋሰስ የቤልጂየም ንጉሥ ሊዮፖልድ ዳግማዊ ሕጋዊ ስልጣን ተብሎ ተረጋገጠ። በምላሹ የአውሮፓ ነጋዴዎችና ሚስዮናውያን ነፃ መግቢያ አገኙ።\n2) የአውሮፓ አገሮች በአፍሪካ ያላቸው ጥያቄዎች በሌሎች የአውሮፓ አገሮች የሚታወቁት 'በተግባር ተቆጣጥረው' ከሆነ ብቻ ነው።",
        },
        {
          id: "n2-2",
          title: "Scramble for Africa — who got what",
          titleAm: "የአፍሪካ ሽሚያ — ማን ምን አገኘ",
          body:
            "BRITAIN: South Africa, Rhodesia, Kenya, Uganda, Sudan, Egypt, Tanganyika (after WWI).\n" +
            "FRANCE: Algeria (1847), Tunisia, Morocco, West Africa, Equatorial Africa, Madagascar.\n" +
            "GERMANY: Several colonies, redistributed as mandates after WWI (Tanganyika to Britain, Togo & Cameroon to France, South-West Africa to S. Africa).\n" +
            "ITALY: Eritrea, Italian Somaliland, Libya (attempted Ethiopia 1936 — defeated at Adwa 1896).\n" +
            "PORTUGAL: Portuguese Guinea, Angola, Mozambique.\n" +
            "SPAIN: Spanish Morocco, Spanish Sahara.\n" +
            "BELGIUM: Congo (via King Leopold II, 1876, then Belgian government 1908).\n\n" +
            "INDEPENDENT: Only ETHIOPIA and LIBERIA.",
          bodyAm:
            "ብሪታንያ፡ ደቡብ አፍሪካ፣ ሮዴዢያ፣ ኬንያ፣ ዩጋንዳ፣ ሱዳን፣ ግብፅ፣ ታንጋኒካ።\nፈረንሳይ፡ አልጄሪያ (1847)፣ ቱኒዚያ፣ ሞሮኮ፣ ምዕራብ አፍሪካ፣ ኢኳቶሪያል አፍሪካ፣ ማዳጋስካር።\nጀርመን፡ ብዙ ቅኝ ግዛቶች፣ ከWWI በኋላ ተከፋፈሉ።\nጣሊያን፡ ኤርትራ፣ የጣሊያን ሶማሊላንድ፣ ሊቢያ (ኢትዮጵያን ሞከረች 1936 — በ1896 በአድዋ ተሸነፈች)።\nፖርቹጋል፡ የፖርቹጋል ጊኒ፣ አንጎላ፣ ሞዛምቢክ።\nስፔን፡ የስፔን ሞሮኮ፣ የስፔን ሰሃራ።\nቤልጂየም፡ ኮንጎ።\nነጻ፡ ኢትዮጵያ እና ላይቤሪያ ብቻ።",
        },
        {
          id: "n2-3",
          title: "Direct vs indirect rule",
          titleAm: "ቀጥተኛ እና ቀጥተኛ ያልሆነ አገዛዝ",
          body:
            "DIRECT rule: Colonizers 'assimilate' colonial subjects into their own culture. Colonial subjects can get full legal/political rights (French citizenship). Used by France, Germany, Portugal, Spain, Italy.\n\n" +
            "INDIRECT rule: British used AFRICAN law to judge local civil disputes and minor criminal cases (not serious crimes, not cases involving Europeans).",
          bodyAm:
            "ቀጥተኛ አገዛዝ፡ ቅኝ ገዥዎቹ ተገዢዎቻቸውን ወደ ባህላቸው 'ያዋህዱ' ይሞክራሉ። ሙሉ ሕጋዊ/ፖለቲካዊ መብት ያገኛሉ (የፈረንሳይ ዜግነት)። በፈረንሳይ፣ በጀርመን፣ በፖርቹጋል፣ በስፔን፣ በጣሊያን ተጠቅመዋል።\nቀጥተኛ ያልሆነ አገዛዝ፡ ብሪታንያ የአፍሪካ ሕግ ተጠቅማ ሲቪል እና ጥቃቅን የወንጀል ጉዳዮችን ትፈርድ ነበር (ከባድ ወንጀሎች እና አውሮፓውያን የሚመለከቱ ጉዳዮች አይደሉም)።",
        },
        {
          id: "n2-4",
          title: "African independence",
          titleAm: "የአፍሪካ ነጻነት",
          body:
            "EARLY RESISTANCE (1900–1939):\n" +
            "• Religious: Kimbanguism (Belgian Congo 1921), Kitawala (East Congo), Nigro Mission (Lower Congo), Watch Tower (Nyasaland), Ethiopianism (South Africa).\n" +
            "• Traditional associations: Young Baganda (1918), Bataka (1921) in Uganda; Young Kikuyu and Central Kikuyu in Kenya.\n\n" +
            "AFTER WWII:\n" +
            "• NON-VIOLENT: Where there were NO white settlers (e.g., French West Africa 1960).\n" +
            "• VIOLENT: Where there WERE white settlers (Algeria, Mozambique, Angola, Kenya).",
          bodyAm:
            "ቀደመ ተቃውሞ (1900–1939)፡\n• ሃይማኖታዊ፡ ኪምባንጉይዝም (የቤልጂየም ኮንጎ 1921)፣ ኪታዋላ፣ ኒግሮ ሚሽን፣ ዋች ታወር፣ ኢትዮጵያኒዝም።\n• ባህላዊ ማኅበራት፡ ያንግ ባጋንዳ (1918)፣ ባታካ (1921)።\nከWWII በኋላ፡\n• ሰላማዊ፡ ነጭ ሰፋሪዎች በሌሉበት (ምሳሌ፡ የፈረንሳይ ምዕራብ አፍሪካ 1960)።\n• በኃይል፡ ነጭ ሰፋሪዎች ባሉበት (አልጄሪያ፣ ሞዛምቢክ፣ አንጎላ፣ ኬንያ)።",
        },
        {
          id: "n2-5",
          title: "First leaders of independent Africa",
          titleAm: "የነጻ አፍሪካ የመጀመሪያ መሪዎች",
          body:
            "ALGERIA (July 1, 1962) — Ahmed Ben Bella (first president).\n" +
            "MOZAMBIQUE (June 1975) — Samora Machel.\n" +
            "ANGOLA (Nov 1975) — Augustino Neto.\n" +
            "KENYA (1963) — Jomo Kenyatta.\n" +
            "GHANA (March 1957, formerly Gold Coast) — Kwame Nkrumah.\n" +
            "NIGERIA (Oct 1960) — Nnamdi Azikwe.",
          bodyAm:
            "አልጄሪያ (ሐምሌ 1, 1962) — አህመድ በን ቤላ።\nሞዛምቢክ (ሰኔ 1975) — ሳሞራ ማሼል።\nአንጎላ (ኅዳር 1975) — አውጉስቲኖ ኔቶ።\nኬንያ (1963) — ጆሞ ኬንያታ።\nጋና (መጋቢት 1957፣ ቀድሞ ጎልድ ኮስት) — ክዋሜ ንክሩማህ።\nናይጄሪያ (ጥቅምት 1960) — ንናምዲ አዚክዌ።",
        },
        {
          id: "n2-6",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: DIRECT rule = French (assimilation). INDIRECT rule = British (use local leaders). Also: Ghana's first president was Kwame Nkrumah (1957), Kenya's was Jomo Kenyatta (1963). Do not swap.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ቀጥተኛ አገዛዝ = ፈረንሳይ። ቀጥተኛ ያልሆነ = ብሪታንያ። ጋና ንክሩማህ፣ ኬንያ ኬንያታ።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Independent African States and Integration",
      titleAm: "ነጻ የአፍሪካ አገሮች እና ውህደት",
      body:
        "Banchi, after independence, African countries realized they needed to work TOGETHER — for political unity and economic strength.",
      bodyAm:
        "ባንቺ፣ ከነጻነት በኋላ የአፍሪካ አገሮች ለፖለቲካዊ አንድነት እና ለኢኮኖሚ ጥንካሬ አንድ ላይ መሥራት እንዳለባቸው ተረዱ።",
      children: [
        {
          id: "n3-1",
          title: "OAU — Organization of African Unity",
          titleAm: "የአፍሪካ አንድነት ድርጅት",
          body:
            "Founded: 1963, ADDIS ABABA, Ethiopia.\n" +
            "Started with 32 independent African states.\n" +
            "Reached 53 members by the time the AU launched (2002).\n" +
            "South Sudan joined 2011 (54th). Morocco rejoined 2017 (55th).\n\n" +
            "OBJECTIVES: promote unity and solidarity, coordinate cooperation, safeguard sovereignty, end colonialism and apartheid, promote international cooperation, harmonize policies.",
          bodyAm:
            "የተመሠረተው፡ 1963 በአዲስ አበባ፣ ኢትዮጵያ።\nበ32 ነጻ አፍሪካ አገሮች ተጀመረ።\nAU ሲቋቋም (2002) 53 አባላት ነበሩት።\nደቡብ ሱዳን 2011 (54ኛ)። ሞሮኮ 2017 (55ኛ)።\nዓላማዎች፡ አንድነትና ወንድማማችነትን ማስፋፋት፣ ትብብርን ማስተባበር፣ ሉዓላዊነትን መጠበቅ፣ ቅኝ ግዛትና አፓርታይድን ማስወገድ።",
        },
        {
          id: "n3-2",
          title: "From OAU to AU",
          titleAm: "ከOAU ወደ AU",
          body:
            "The AU (African Union) shifted focus FROM anti-colonial struggle TO Africa's development and integration.\n\n" +
            "Three summits led up to the AU:\n" +
            "1) SIRTE Summit (Libya, 1999) — adopted the Sirte Declaration.\n" +
            "2) LOMÉ Summit (Togo, 2000) — adopted the AU Constitutive Act.\n" +
            "3) LUSAKA Summit (Zambia, 2001) — drew roadmap.\n\n" +
            "AU officially launched: JULY 9, 2002, Durban Summit, South Africa.",
          bodyAm:
            "AU ትኩረቱን ከፀረ-ቅኝ ግዛት ትግል ወደ አፍሪካ ልማትና ውህደት ቀየረ።\nሦስት ጉባኤዎች፡\n1) ሰርቴ ጉባኤ (ሊቢያ 1999) — የሰርቴ ማወጫ።\n2) ሎሜ ጉባኤ (ቶጎ 2000) — የAU ሕገ-መንግሥት ማዕቀፍ።\n3) ሉሳካ ጉባኤ (ዛምቢያ 2001) — የመንገድ ካርታ።\nAU በይፋ ተጀመረ፡ ሐምሌ 9, 2002፣ ዱርባን፣ ደቡብ አፍሪካ።",
        },
        {
          id: "n3-3",
          title: "Nkrumah vs Haile Selassie — two views",
          titleAm: "ንክሩማህ እና ኃይለ ሥላሴ — ሁለት አመለካከቶች",
          body:
            "At the First Congress of Independent African States (Accra, Ghana, April 1958):\n" +
            "• Kwame Nkrumah urged a STRONG union similar to the USA. 'Africa must unite or die.'\n" +
            "• Emperor Haile Selassie recommended a LOOSE organization, warning against linguistic, racial, economic, and political differences.\n\n" +
            "Haile Selassie's view won.",
          bodyAm:
            "በመጀመሪያው የነጻ አፍሪካ አገሮች ጉባኤ (አክራ፣ ጋና፣ ሚያዝያ 1958)፡\n• ክዋሜ ንክሩማህ እንደ አሜሪካ ጠንካራ ሕብረት ጠየቀ። 'አፍሪካ መወሰን አለባት ወይም ትሞታለች።'\n• ዓፄ ኃይለ ሥላሴ ልቅ ድርጅት መርጠው የቋንቋ፣ የዘር፣ የኢኮኖሚ እና የፖለቲካ ልዩነቶችን አስጠነቀቁ።\nየኃይለ ሥላሴ አመለካከት አሸነፈ።",
        },
        {
          id: "n3-4",
          title: "AU vision — Agenda 2063",
          titleAm: "የAU ራዕይ — አጀንዳ 2063",
          body:
            "AU vision: an integrated, prosperous, and peaceful Africa, driven by its own citizens, representing a dynamic force in the global arena.\n\n" +
            "AGENDA 2063 (adopted 2015): a collective vision and roadmap to build a prosperous and united Africa based on shared values and common destiny.",
          bodyAm:
            "የAU ራዕይ፡ የተዋሃደ፣ የበለጸገ እና ሰላማዊ አፍሪካ፣ በዜጎቿ የሚመራ፣ በዓለም መድረክ ላይ ተለዋዋጭ ኃይል።\nአጀንዳ 2063 (2015)፡ የተባበረ እና የበለጸገ አፍሪካ ለመገንባት የጋራ ራዕይ እና የመንገድ ካርታ።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: OAU was founded in ADDIS ABABA in 1963. AU was launched in DURBAN in 2002. Agenda 2063 was adopted in 2015. Do not mix years.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ OAU በ1963 በአዲስ አበባ ተመሠረተ። AU በ2002 በዱርባን ተጀመረ። አጀንዳ 2063 በ2015 ተቀበለ።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Exam Strategy — Unit 5",
      titleAm: "የፈተና ስልት — ክፍል 5",
      body:
        "Banchi, five quick checks before answering Unit 5 questions.",
      bodyAm:
        "ባንቺ፣ የክፍል 5 ጥያቄዎችን ከመመለስሽ በፊት አምስት ፈጣን ቼኮች።",
      children: [
        {
          id: "n4-1",
          title: "Check 1 — Which slavery fact?",
          titleAm: "ቼክ 1 — የትኛው የባርነት እውነታ?",
          body:
            "Britain was the leading 18th-century slave trade power. Africans were chosen for immunity + skills. First Africans to America = 1532. Triangular Trade: Europe → Africa (goods), Africa → New World (slaves), New World → Europe (crops).",
          bodyAm:
            "ብሪታንያ በ18ኛው ክፍለ ዘመን ዋና ነጋዴ ነበረች። አፍሪካውያን በመከላከያና በክህሎት ተመረጡ። የመጀመሪያዎቹ ወደ አሜሪካ = 1532።",
        },
        {
          id: "n4-2",
          title: "Check 2 — Which country got what?",
          titleAm: "ቼክ 2 — የትኛው አገር ምን አገኘ?",
          body:
            "Britain = South Africa, Kenya, Egypt. France = Algeria, Madagascar. Italy = Eritrea, Libya. Portugal = Angola, Mozambique. Belgium = Congo. Independent = Ethiopia + Liberia.",
          bodyAm:
            "ብሪታንያ = ደቡብ አፍሪካ፣ ኬንያ፣ ግብፅ። ፈረንሳይ = አልጄሪያ። ጣሊያን = ኤርትራ፣ ሊቢያ። ፖርቹጋል = አንጎላ፣ ሞዛምቢክ። ቤልጂየም = ኮንጎ። ነጻ = ኢትዮጵያ እና ላይቤሪያ።",
        },
        {
          id: "n4-3",
          title: "Check 3 — Direct or indirect rule?",
          titleAm: "ቼክ 3 — ቀጥተኛ ወይስ ቀጥተኛ ያልሆነ?",
          body:
            "Direct (assimilation) = French, German, Portuguese, Spanish, Italian. Indirect (use local leaders) = British.",
          bodyAm:
            "ቀጥተኛ (ውህደት) = ፈረንሳይ፣ ጀርመን፣ ፖርቹጋል፣ ስፔን፣ ጣሊያን። ቀጥተኛ ያልሆነ = ብሪታንያ።",
        },
        {
          id: "n4-4",
          title: "Check 4 — Which first president?",
          titleAm: "ቼክ 4 — የትኛው የመጀመሪያ ፕሬዚዳንት?",
          body:
            "Ghana = Nkrumah. Kenya = Kenyatta. Algeria = Ben Bella. Angola = Neto. Mozambique = Machel. Nigeria = Azikwe.",
          bodyAm:
            "ጋና = ንክሩማህ። ኬንያ = ኬንያታ። አልጄሪያ = በን ቤላ። አንጎላ = ኔቶ። ሞዛምቢክ = ማሼል። ናይጄሪያ = አዚክዌ።",
        },
        {
          id: "n4-5",
          title: "Check 5 — OAU or AU?",
          titleAm: "ቼክ 5 — OAU ወይስ AU?",
          body:
            "OAU = 1963, Addis Ababa, 32 founding states, anti-colonial. AU = 2002, Durban, 55 members, focus on development and integration.",
          bodyAm:
            "OAU = 1963፣ አዲስ አበባ፣ 32 መስራች አገሮች፣ ፀረ-ቅኝ ግዛት። AU = 2002፣ ዱርባን፣ 55 አባላት፣ ልማትና ውህደት።",
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
      stem: "A slave is best defined as:",
      options: [
        "A paid worker",
        "A human being who is the property of another person",
        "A war prisoner",
        "A farmer",
      ],
      answer: "1",
      explanation:
        "A slave is a person who is the property of another. Slaves were enslaved for their entire lives and their children were also enslaved.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "Which two countries were the first main actors of the African slave trade?",
      options: ["Britain and France", "Portugal and Spain", "Germany and Italy", "Netherlands and Belgium"],
      answer: "1",
      explanation:
        "Portugal and Spain were first. Later Britain, France, Dutch, and others joined.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "In the 18th century, which country was the LEADING slave-trading power?",
      options: ["Portugal", "Spain", "Britain", "France"],
      answer: "2",
      explanation:
        "By the 18th century, Britain was the leading slave-trading power.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "Where were the first African captives taken directly to be sold into slavery?",
      options: [
        "Across the Atlantic to America (1532)",
        "To India (1520)",
        "To Europe (1500)",
        "To Asia (1550)",
      ],
      answer: "0",
      explanation:
        "The first African captives were transported across the Atlantic Ocean and sold into slavery in 1532.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "Why did Europeans choose Africans for slavery?",
      options: [
        "Africans were cheaper",
        "Africans had immunity to tropical diseases and skills in mining and agriculture",
        "Africans volunteered",
        "Africans were physically weaker",
      ],
      answer: "1",
      explanation:
        "Africans had immunity to some tropical diseases and experience in metal-working, mining, and tropical agriculture. Amerindians and Europeans had died from disease.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "The Triangular Trade involved which three regions?",
      options: [
        "Europe, Africa, Americas",
        "Europe, Asia, Africa",
        "Africa, Asia, Australia",
        "Americas, Asia, Europe",
      ],
      answer: "0",
      explanation:
        "Triangular Trade = Europe → Africa (goods), Africa → New World (slaves), New World → Europe (crops like sugar, coffee, tobacco, cotton).",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "Which goods were shipped from Europe to Africa in the Triangular Trade?",
      options: [
        "Sugar and coffee",
        "Slaves",
        "Cheap manufactured goods like glass and cotton cloth",
        "Gold and diamonds",
      ],
      answer: "2",
      explanation:
        "Europe → Africa: cheap manufactured goods (glass, cotton cloth, metal hardware, cheap guns).",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "Which goods were shipped from the New World to Europe?",
      options: [
        "Slaves",
        "Sugar cane, coffee, tobacco, cotton",
        "Cheap manufactured goods",
        "Guns",
      ],
      answer: "1",
      explanation:
        "New World → Europe: sugar cane, coffee, tobacco, cotton.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "Slavery was finally abolished in British colonies in:",
      options: ["1789", "1807", "1834", "1865"],
      answer: "2",
      explanation:
        "1834 in British colonies. Other dates: 1848 France, 1860 Cuba, 1865 USA, 1888 Brazil.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "Slavery was abolished in Brazil in:",
      options: ["1834", "1848", "1865", "1888"],
      answer: "3",
      explanation:
        "Brazil was the LAST major country to abolish slavery in 1888.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "Sierra Leone was founded in 1787 as a settlement for:",
      options: [
        "European settlers",
        "Freed blacks from England",
        "African kings",
        "Asian immigrants",
      ],
      answer: "1",
      explanation:
        "Sierra Leone was founded in 1787 as a settlement of 400 freed blacks from England.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "Liberia was founded in 1822 by:",
      options: [
        "Freed blacks from England",
        "Freed blacks from the USA",
        "European settlers",
        "Asian traders",
      ],
      answer: "1",
      explanation:
        "Liberia was founded by freed blacks from the USA. They declared independence in 1847.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country's revolt under Toussaint L'Ouverture led to the first successful slave revolution?",
      options: ["Haiti (St. Dominique)", "Cuba", "Brazil", "Jamaica"],
      answer: "0",
      explanation:
        "Under Toussaint L'Ouverture, the slaves of St. Dominique (Haiti) revolted in 1791 and established the independent Republic of Haiti in 1803.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "Colonialism means:",
      options: [
        "Two countries working together",
        "A backward nation is controlled by a powerful nation",
        "Countries trading equally",
        "Religious conversion",
      ],
      answer: "1",
      explanation:
        "Colonialism = a weaker/backward nation is controlled by a powerful nation with advanced economy, strong government, and military strength.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "The Berlin Conference (1884–1885) was about:",
      options: [
        "Ending the slave trade",
        "Partitioning Africa between European powers",
        "Establishing the UN",
        "Ending WWI",
      ],
      answer: "1",
      explanation:
        "The Berlin Conference (1884–1885) established rules for European powers to partition Africa.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "Which two African states remained INDEPENDENT by 1914?",
      options: [
        "Ethiopia and Liberia",
        "Egypt and Sudan",
        "Ghana and Nigeria",
        "Kenya and Uganda",
      ],
      answer: "0",
      explanation:
        "Only Ethiopia and Liberia remained independent in Africa by 1914.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country controlled Congo under King Leopold II?",
      options: ["Britain", "France", "Belgium", "Portugal"],
      answer: "2",
      explanation:
        "Belgian King Leopold II controlled the Congo region from 1876. The Belgian government took control in 1908.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "Which colonial power used DIRECT rule (assimilation)?",
      options: ["Britain", "France", "Ottoman Empire", "Ethiopia"],
      answer: "1",
      explanation:
        "France (and Germany, Portugal, Spain, Italy) used direct rule. Britain used indirect rule.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "Which colonial power used INDIRECT rule?",
      options: ["France", "Germany", "Britain", "Italy"],
      answer: "2",
      explanation:
        "Britain used indirect rule — allowing local African leaders to judge civil disputes and minor criminal cases.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "Which African country adopted the new name 'Ghana' after independence?",
      options: ["Nigeria", "Gold Coast", "Kenya", "Sierra Leone"],
      answer: "1",
      explanation:
        "Gold Coast became Ghana in March 1957. First president was Kwame Nkrumah.",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "Who was the first president of independent Kenya?",
      options: ["Kwame Nkrumah", "Jomo Kenyatta", "Nnamdi Azikwe", "Ahmed Ben Bella"],
      answer: "1",
      explanation:
        "Jomo Kenyatta became the first president of Kenya in 1963.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "Who was the first president of independent Ghana?",
      options: ["Jomo Kenyatta", "Kwame Nkrumah", "Nnamdi Azikwe", "Samora Machel"],
      answer: "1",
      explanation:
        "Kwame Nkrumah became the first president of Ghana in 1957.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "The OAU was formed in:",
      options: ["1958", "1960", "1963", "2002"],
      answer: "2",
      explanation:
        "The OAU was formed in 1963 in Addis Ababa, Ethiopia.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "Where was the OAU founded?",
      options: ["Durban", "Addis Ababa", "Accra", "Cairo"],
      answer: "1",
      explanation:
        "OAU was founded in Addis Ababa, Ethiopia, by 32 independent African states.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "The AU was officially launched in:",
      options: ["1999", "2000", "2001", "2002"],
      answer: "3",
      explanation:
        "The AU was officially launched on July 9, 2002, in Durban, South Africa.",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "What was the 'Middle Passage'?",
      options: [
        "The route between Europe and Africa",
        "The sea voyage of slaves from Africa to the Americas",
        "The route between America and Europe",
        "The route from Asia to Africa",
      ],
      answer: "1",
      explanation:
        "The Middle Passage = the terrible sea voyage of enslaved Africans across the Atlantic to the Americas. 15–30% died on the crossing.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Which three factors caused the abolition of slavery?",
      options: [
        "Political, economic, slave resistance",
        "Only religious",
        "Only military",
        "Only economic",
      ],
      answer: "0",
      explanation:
        "Political: American & French Revolutions (Liberty/Equality). Economic: wage labor more efficient. Slave resistance: constant revolts made slavery unsafe.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Why did European manufacturers want slavery abolished?",
      options: [
        "They cared about human rights only",
        "Cheap wage labor in factories was more efficient than plantation slavery",
        "They feared slave revolts",
        "The Pope ordered them",
      ],
      answer: "1",
      explanation:
        "European manufacturers found cheap wage labor in factories more efficient and less expensive than plantation slavery.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "What two principles were settled at the Berlin Conference?",
      options: [
        "Abolition of slavery and free trade",
        "Congo under Belgian king; 'effective occupation' rule",
        "End of colonialism; African self-rule",
        "Christianity and European language",
      ],
      answer: "1",
      explanation:
        "(1) Congo basin recognized as Belgian King Leopold's authority. (2) European claims recognized only if 'effectively occupied'.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "'Effective occupation' meant a European country had to:",
      options: [
        "Just claim the land",
        "Sign treaties with local leaders, fly their flag, and establish administration",
        "Only send missionaries",
        "Buy the land from Britain",
      ],
      answer: "1",
      explanation:
        "Effective occupation = treaties signed with local leaders + flag flown + administration established. Just claiming land was not enough.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Which country controlled Madagascar?",
      options: ["Britain", "France", "Portugal", "Germany"],
      answer: "1",
      explanation:
        "France added Madagascar, Tunisia, Morocco, West Africa, and Equatorial Africa between 1881 and 1912.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "Which country controlled Eritrea and Italian Somaliland?",
      options: ["Britain", "France", "Italy", "Portugal"],
      answer: "2",
      explanation:
        "Italy controlled Eritrea, Italian Somaliland, and Libya by 1914.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "Why was the Italian attempt to colonize Ethiopia in 1936 significant?",
      options: [
        "Ethiopia was already a colony",
        "Ethiopia had defeated Italy at Adwa in 1896",
        "Ethiopia surrendered peacefully",
        "The UN stopped it",
      ],
      answer: "1",
      explanation:
        "Ethiopia had defeated Italy at Adwa (1896). Italy's 1936 attempt was a revenge attack. Ethiopia was occupied 1936–1941 but never fully colonized.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Which was a religious early resistance movement against colonial rule?",
      options: [
        "Kimbanguism in Belgian Congo",
        "Young Baganda in Uganda",
        "Bataka in Uganda",
        "Young Kikuyu in Kenya",
      ],
      answer: "0",
      explanation:
        "Kimbanguism (1921) was a religious movement in Belgian Congo. Young Baganda, Bataka, and Kikuyu were traditional associations.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "The 'Young Kikuyu Association' was in:",
      options: ["Uganda", "Kenya", "Tanzania", "Belgian Congo"],
      answer: "1",
      explanation:
        "The Young Kikuyu Association and Central Kikuyu Association were in Kenya.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "Which African country achieved independence through the BLOODIEST war against France?",
      options: ["Nigeria", "Ghana", "Algeria", "Senegal"],
      answer: "2",
      explanation:
        "Algeria fought the bloodiest independence war against France. Independence on July 1, 1962. First president: Ahmed Ben Bella.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Which country's independence in 1975 was led by Samora Machel?",
      options: ["Angola", "Mozambique", "Zimbabwe", "Namibia"],
      answer: "1",
      explanation:
        "Samora Machel led Mozambique to independence in June 1975.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Which country's independence in 1975 was led by Augustino Neto?",
      options: ["Mozambique", "Angola", "Guinea-Bissau", "Cape Verde"],
      answer: "1",
      explanation:
        "Augustino Neto led Angola to independence in November 1975.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "The first president of Nigeria was:",
      options: ["Nnamdi Azikwe", "Jomo Kenyatta", "Kwame Nkrumah", "Ahmed Ben Bella"],
      answer: "0",
      explanation:
        "Nnamdi Azikwe was the first president of Nigeria (independence October 1960).",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Why did some African countries achieve independence NON-violently?",
      options: [
        "They had strong armies",
        "They had NO white settlers",
        "They were supported by the UN",
        "They were Communist countries",
      ],
      answer: "1",
      explanation:
        "African states with NO white settlers achieved independence fairly smoothly (non-violent). States WITH white settlers faced violent struggles.",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "By 1960, all West African FRENCH colonies were:",
      options: [
        "Still colonized",
        "Fully independent",
        "Under British rule",
        "Under Portuguese rule",
      ],
      answer: "1",
      explanation:
        "By 1960, all French West African colonies achieved full independence.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "The OAU's main objectives included:",
      options: [
        "Promoting unity and solidarity of African states",
        "Conquering other continents",
        "Supporting colonialism",
        "Isolating Africa from the world",
      ],
      answer: "0",
      explanation:
        "OAU objectives: promote unity and solidarity, coordinate cooperation, safeguard sovereignty, end colonialism and apartheid, promote international cooperation, harmonize policies.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "The AU's vision shifts focus from anti-colonial struggle to:",
      options: [
        "Only military power",
        "Africa's development and integration",
        "Ending all trade",
        "Isolating from the world",
      ],
      answer: "1",
      explanation:
        "The AU shifted focus from anti-colonial struggle to Africa's development and integration, peace, security, democracy, and human rights.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "Kwame Nkrumah urged Africa to form:",
      options: [
        "A loose organization",
        "A strong union similar to the USA",
        "Separate countries only",
        "Only trading alliances",
      ],
      answer: "1",
      explanation:
        "Nkrumah wanted a strong union like the USA: 'Africa must unite or die.'",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "Emperor Haile Selassie recommended:",
      options: [
        "A strong union like the USA",
        "A loose organization respecting differences",
        "No organization at all",
        "Only economic cooperation",
      ],
      answer: "1",
      explanation:
        "Haile Selassie recommended a LOOSE organization, warning against linguistic, racial, economic, and political differences. His view won.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "Which summit adopted the Sirte Declaration?",
      options: ["Lomé (2000)", "Sirte (1999)", "Lusaka (2001)", "Durban (2002)"],
      answer: "1",
      explanation:
        "The Sirte Summit (Libya, 1999) adopted the Sirte Declaration calling for the establishment of the AU.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "Which summit adopted the AU Constitutive Act?",
      options: ["Sirte (1999)", "Lomé (2000)", "Lusaka (2001)", "Durban (2002)"],
      answer: "1",
      explanation:
        "The Lomé Summit (Togo, 2000) adopted the AU Constitutive Act.",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "Agenda 2063 was adopted in:",
      options: ["1999", "2002", "2015", "2020"],
      answer: "2",
      explanation:
        "Agenda 2063 was adopted in 2015 as a collective vision and roadmap for a prosperous, united Africa.",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "Where was the First Congress of Independent African States held?",
      options: ["Addis Ababa (1958)", "Accra, Ghana (1958)", "Cairo (1960)", "Durban (2002)"],
      answer: "1",
      explanation:
        "First Congress of Independent African States: Accra, Ghana, April 15–22, 1958.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "By 2002, how many member states did the AU have?",
      options: ["32", "40", "53", "55"],
      answer: "2",
      explanation:
        "The AU had 53 members in 2002. South Sudan joined in 2011 (54th), and Morocco rejoined in 2017 (55th).",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about slavery is FALSE?",
      options: [
        "Africans were captured and sold by European colonizers",
        "Political and commercial elites of Africa were also agents of the slave trade",
        "Africans had immunity to some tropical diseases",
        "Slave trade was abolished immediately by all European countries",
      ],
      answer: "3",
      explanation:
        "Abolition was NOT immediate. Different countries abolished slavery in different years: Britain 1834, France 1848, Cuba 1860, USA 1865, Brazil 1888.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "Which factor is NOT a cause of African independence after WWII?",
      options: [
        "Lessons from WWII and the UN Charter",
        "Communist propaganda",
        "Newly independent Asian nations",
        "Increase in European colonial troops",
      ],
      answer: "3",
      explanation:
        "Increased European colonial troops did NOT cause African independence. Factors: WWI & WWII lessons, US influence, Communist propaganda, Asian independence examples, UN decisions.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Which was NOT a characteristic of the Berlin Conference?",
      options: [
        "It recognized Congo under Belgian King Leopold",
        "It set the 'effective occupation' principle",
        "It ended the slave trade",
        "It partitioned Africa among European powers",
      ],
      answer: "2",
      explanation:
        "The Berlin Conference did NOT end the slave trade — its focus was partitioning Africa. The slave trade had already been abolished by different countries separately.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly matches the colonial power with its colonies?",
      options: [
        "Britain — Angola, Mozambique",
        "France — Algeria, Madagascar",
        "Portugal — Egypt, Kenya",
        "Belgium — Nigeria, Ghana",
      ],
      answer: "1",
      explanation:
        "France: Algeria, Madagascar. Britain: Egypt, Kenya, South Africa. Portugal: Angola, Mozambique. Belgium: Congo.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "The main reason the OAU became the AU was:",
      options: [
        "To focus more on development and integration",
        "To end all African trade",
        "To fight WWI",
        "To conquer Europe",
      ],
      answer: "0",
      explanation:
        "The AU shifted focus from anti-colonial struggle to Africa's development, integration, peace, security, and good governance.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "Which is the correct order of events?",
      options: [
        "Slave trade → Berlin Conference → African independence → OAU → AU",
        "Berlin Conference → Slave trade → OAU → AU → African independence",
        "OAU → AU → Berlin Conference → Slave trade",
        "AU → OAU → Slave trade → Berlin Conference",
      ],
      answer: "0",
      explanation:
        "Slave trade (1500s–1800s) → Berlin Conference (1884–1885) → African independence (1950s–1970s) → OAU (1963) → AU (2002).",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Define slave trade and name its main actors.",
      answer:
        "Slave trade = capturing, selling, and buying of enslaved persons. Main actors: Portugal and Spain first, then Britain (leading in 18th century), French, Dutch, Portuguese, Spanish.",
      explanation:
        "Africa was the source of slaves; European countries organized the trade; the New World received the slaves.",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "Explain the Triangular Trade with the three routes.",
      answer:
        "Europe → Africa: manufactured goods. Africa → New World: slaves. New World → Europe: sugar, coffee, tobacco, cotton.",
      explanation:
        "It was called 'triangular' because the route formed a triangle across the Atlantic.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "Describe the two kinds of colonial administration in Africa.",
      answer:
        "DIRECT rule (used by France, Germany, Portugal, Spain, Italy): colonizers tried to 'assimilate' subjects into their culture; subjects could get full legal/political rights. INDIRECT rule (used by Britain): used African law to judge local disputes and minor criminal cases.",
      explanation:
        "Banchi, remember: Direct = assimilation. Indirect = use local leaders.",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "Explain the difference between the OAU and the AU.",
      answer:
        "OAU (1963, Addis Ababa) focused on anti-colonial struggle, unity, and ending apartheid. AU (2002, Durban) shifted focus to Africa's development, integration, peace, security, democracy, and human rights. The AU has more members (55 vs 32 founding states).",
      explanation:
        "Both share the goal of African unity — but the AU is more focused on development and integration.",
    },
        // ============================================================
    // BATCH 2 — Q61 to Q120 (final for Unit 5)
    // ============================================================

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which best describes the Middle Passage?",
      options: [
        "A happy voyage",
        "A short trip between islands",
        "A terrible voyage across the Atlantic for enslaved Africans",
        "A European trade route to Asia",
      ],
      answer: "2",
      explanation:
        "The Middle Passage was the brutal sea voyage of enslaved Africans to the Americas. About 15–30% died during the crossing.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Which African regions were the main sources of slaves?",
      options: ["North and East Africa", "West and South West Africa", "Central and North", "Only Egypt"],
      answer: "1",
      explanation:
        "West Africa (Senegal to Angola), Gold Coast (Ghana), Slave Coast (Nigeria), and Angola/Congo were the main sources.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Which term means 'buying and selling goods between countries'?",
      options: ["Retail", "Internal trade", "External (international) trade", "Local trade"],
      answer: "2",
      explanation:
        "External (international) trade = between two different countries. It includes import, export, and entrepot.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country gave full legal and political rights to its colonial subjects?",
      options: ["Britain", "France (assimilation)", "Belgium", "Portugal"],
      answer: "1",
      explanation:
        "France's 'assimilation' policy aimed to turn colonial subjects into French citizens with full legal and political rights. This was DIRECT rule.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "Which was the last major country to abolish slavery?",
      options: ["Britain (1834)", "France (1848)", "USA (1865)", "Brazil (1888)"],
      answer: "3",
      explanation:
        "Brazil was last, abolishing slavery in 1888.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Which two countries remained independent in Africa by 1914?",
      options: [
        "Ethiopia and Liberia",
        "Egypt and Sudan",
        "Ghana and Nigeria",
        "Kenya and Uganda",
      ],
      answer: "0",
      explanation:
        "Ethiopia and Liberia were the ONLY independent African states by 1914.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Who was the first president of Algeria?",
      options: ["Ahmed Ben Bella", "Samora Machel", "Jomo Kenyatta", "Nnamdi Azikwe"],
      answer: "0",
      explanation:
        "Ahmed Ben Bella became Algeria's first president on July 1, 1962.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "The Gold Coast became independent in 1957 and adopted the name:",
      options: ["Nigeria", "Ghana", "Kenya", "Senegal"],
      answer: "1",
      explanation:
        "Gold Coast became GHANA in March 1957. First president: Kwame Nkrumah.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country was under Italian rule by 1914?",
      options: ["Eritrea", "Ghana", "Nigeria", "Congo"],
      answer: "0",
      explanation:
        "Italy controlled Eritrea, Italian Somaliland, and Libya by 1914.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one was NOT a European colonial power in Africa?",
      options: ["Britain", "France", "Japan", "Portugal"],
      answer: "2",
      explanation:
        "Japan was NOT a European colonial power in Africa. Main European colonizers: Britain, France, Germany, Italy, Portugal, Spain, Belgium.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "Which two countries was the AU officially established between?",
      options: ["1999 and 2002", "1958 and 1963", "1975 and 1991", "2000 and 2015"],
      answer: "0",
      explanation:
        "The Sirte Declaration was in 1999, and the AU officially launched in 2002.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country joined the OAU as the 54th member in 2011?",
      options: ["South Sudan", "Morocco", "Eritrea", "Somalia"],
      answer: "0",
      explanation:
        "South Sudan joined in 2011 as the 54th member. Morocco rejoined as the 55th in 2017.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country hosted the First Congress of Independent African States in 1958?",
      options: ["Ethiopia", "Ghana", "Libya", "Togo"],
      answer: "1",
      explanation:
        "Ghana (Accra) hosted the First Congress of Independent African States (April 1958).",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "Which was the biggest outcome of slavery for Africa?",
      options: [
        "Increased wealth for all Africans",
        "Loss of productive manpower (ages 15–35)",
        "Decreased conflicts",
        "More unity among African groups",
      ],
      answer: "1",
      explanation:
        "Africa lost productive manpower (ages 15–35), suffered from conflicts, and lost its most important resources.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which African country was the FIRST to gain independence in West Africa (1957)?",
      options: ["Nigeria", "Ghana", "Senegal", "Sierra Leone"],
      answer: "1",
      explanation:
        "Ghana (formerly Gold Coast) was the first West African country to gain independence in 1957.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country controlled Sudan and Egypt?",
      options: ["France", "Britain", "Italy", "Germany"],
      answer: "1",
      explanation:
        "Britain controlled Sudan and Egypt (along with South Africa, Rhodesia, Kenya, Uganda).",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "Which European country used indirect rule?",
      options: ["France", "Germany", "Britain", "Belgium"],
      answer: "2",
      explanation:
        "Britain used indirect rule. The French used direct rule (assimilation).",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these was a traditional association that resisted colonial rule?",
      options: [
        "Young Baganda Association in Uganda",
        "Kimbanguism in Congo",
        "Watch Tower in Nyasaland",
        "All of the above",
      ],
      answer: "3",
      explanation:
        "All of these resisted colonial rule. Religious forms (Kimbanguism, Watch Tower) and traditional associations (Young Baganda, Bataka, Kikuyu) were different resistance types.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "The AU's vision (Agenda 2063) aims for:",
      options: [
        "An isolated Africa",
        "A prosperous, united Africa",
        "More colonies",
        "A single currency only",
      ],
      answer: "1",
      explanation:
        "Agenda 2063 aims for an integrated, prosperous, peaceful, and united Africa, driven by its own citizens.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "What is political integration?",
      options: [
        "Countries working together toward shared political goals",
        "Wars between countries",
        "Isolation of countries",
        "Selling weapons",
      ],
      answer: "0",
      explanation:
        "Political integration = countries shifting loyalties and political activities toward a new center. Example: OAU/AU.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "What is economic integration?",
      options: [
        "Countries cooperate to reduce barriers to products, people, and capital",
        "Countries stop trading",
        "Only one country trades",
        "Only agriculture",
      ],
      answer: "0",
      explanation:
        "Economic integration = countries cooperate to reduce or eliminate barriers to international flow of products, people, and capital.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "Which African country was the FIRST to gain independence from Portugal?",
      options: ["Mozambique", "Angola", "Guinea-Bissau", "Cape Verde"],
      answer: "2",
      explanation:
        "Guinea-Bissau gained independence from Portugal in 1974. Mozambique followed in 1975. Angola also in 1975.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country hosted the AU launch summit in 2002?",
      options: ["Libya", "Togo", "Zambia", "South Africa (Durban)"],
      answer: "3",
      explanation:
        "The AU was officially launched on July 9, 2002 in Durban, South Africa.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country hosted the Lusaka Summit in 2001?",
      options: ["Togo", "Libya", "Zambia", "South Africa"],
      answer: "2",
      explanation:
        "Lusaka Summit (Zambia, 2001) drew the roadmap for AU implementation.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country's independence leader was Samora Machel?",
      options: ["Angola", "Mozambique", "Guinea-Bissau", "Zimbabwe"],
      answer: "1",
      explanation:
        "Samora Machel led Mozambique to independence in June 1975.",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these was a POLITICAL impact of slavery on Africa?",
      options: [
        "Increased military and political supremacy of some tribes",
        "Increased unity among all tribes",
        "Reduced conflicts",
        "Growth of African parliaments",
      ],
      answer: "0",
      explanation:
        "Politically, the slave trade increased military/political supremacy of some tribes (who captured and sold other Africans), caused instability, and distributed ammunition.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Which was a SOCIAL impact of slavery on Africa?",
      options: [
        "Increased insecurity, distrust, and conflicts",
        "More education",
        "More unity",
        "Increased population",
      ],
      answer: "0",
      explanation:
        "Social impacts: insecurity, distrust, conflicts among African groups; loss of cultural beliefs; language mixing with European languages.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these was an ECONOMIC impact of slavery on Africa?",
      options: [
        "Loss of productive manpower and dependency on European goods",
        "Increase in local industry",
        "Growth of African banks",
        "Development of technology",
      ],
      answer: "0",
      explanation:
        "Economic impacts: resources stolen, humans exploited, insecurity/instability, agriculture and mining affected, productive manpower (15–35) lost, dependency on European goods.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Which African independence movement was RELIGIOUS?",
      options: [
        "Ethiopianism in South Africa",
        "Young Baganda in Uganda",
        "Bataka in Uganda",
        "Young Kikuyu in Kenya",
      ],
      answer: "0",
      explanation:
        "Ethiopianism was a religious movement in South Africa, inspired by Ethiopia's victory at Adwa (1896).",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Which country was involved in a bloodiest anti-colonial war (French rule)?",
      options: ["Senegal", "Ivory Coast", "Algeria", "Mali"],
      answer: "2",
      explanation:
        "Algeria fought the bloodiest war against French colonial rule (independence July 1, 1962).",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Which British colony achieved independence in 1963 under Jomo Kenyatta?",
      options: ["Uganda", "Tanzania", "Kenya", "Nigeria"],
      answer: "2",
      explanation:
        "Kenya achieved independence in 1963. Jomo Kenyatta became the first president.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Which factors helped African independence?",
      options: [
        "WWI & WWII lessons, US influence, Communist propaganda, Asian example, UN decisions",
        "Only religious reasons",
        "Only military victories",
        "Only economic reasons",
      ],
      answer: "0",
      explanation:
        "Factors included lessons from WWI & WWII, US influence, Communist propaganda, newly independent Asian nations' example, and UN decisions.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "Which region was the main SOURCE of African slaves?",
      options: [
        "West and South West Africa (Senegal to Angola)",
        "North Africa only",
        "East Africa only",
        "South Africa only",
      ],
      answer: "0",
      explanation:
        "West Africa (Senegal to southern Angola) was the main source. Gold Coast (Ghana), Slave Coast (Nigeria), and Angola were the greatest concentration.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "Which countries' American War of Independence and Revolution inspired the abolition of slavery?",
      options: ["Britain and France", "USA (1776) and France (1789)", "Germany and Italy", "Spain and Portugal"],
      answer: "1",
      explanation:
        "The American War of Independence (1776–83) and the French Revolution (1789) spread ideas of 'Liberty, Equality, Fraternity', inspiring the abolition movement.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "What did the founding members of the OAU agree on?",
      options: [
        "Strong unified government",
        "Loose organization respecting each country's sovereignty",
        "One African army",
        "One African currency",
      ],
      answer: "1",
      explanation:
        "Haile Selassie's view of a LOOSE organization won. The OAU respected each member's sovereignty and independence.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Which two provinces were important for African independence narratives?",
      options: [
        "Gold Coast and Kenya",
        "Angola and Mozambique",
        "Algeria and Madagascar",
        "Egypt and Sudan",
      ],
      answer: "0",
      explanation:
        "Gold Coast (Ghana, first, 1957) and Kenya (1963, Kenyatta) are two very significant African independence cases.",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these countries was NOT a target of the 'Scramble for Africa'?",
      options: ["Ethiopia", "Kenya", "Nigeria", "Zimbabwe"],
      answer: "0",
      explanation:
        "Ethiopia was never colonized (only briefly occupied 1936–1941). It was not a target of the successful Scramble.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "Which action did the British take to defeat Emperor Tewodros II at Maqdala?",
      options: [
        "They made a treaty with Yohannes",
        "They sent an expedition led by Sir Robert Napier (32,000 troops)",
        "They allied with France",
        "They bribed Ethiopian leaders",
      ],
      answer: "1",
      explanation:
        "Sir Robert Napier led a 32,000-strong British expedition. Kassa Mercha of Tigray helped with guides and supplies. The battle at Aroge was on April 10, 1868. Tewodros committed suicide.",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "Which slave revolt created the Republic of Haiti?",
      options: [
        "The Toussaint L'Ouverture rebellion",
        "The Kunta Kinte rebellion",
        "The Nat Turner rebellion",
        "The Amistad rebellion",
      ],
      answer: "0",
      explanation:
        "Under Toussaint L'Ouverture, slaves of St. Dominique (Haiti) revolted (1791). They established the Republic of Haiti in 1803.",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which was the result of effective occupation?",
      options: [
        "Any European country could claim African land by just putting a flag",
        "A country had to actually administer the territory to have its claim recognized",
        "All African land stayed independent",
        "Africans were given back their land",
      ],
      answer: "1",
      explanation:
        "Effective occupation = sign treaties with local leaders + fly flag + establish administration. Just claiming land was not enough.",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "Which country did NOT follow direct rule?",
      options: ["France", "Portugal", "Britain", "Italy"],
      answer: "2",
      explanation:
        "Britain used INDIRECT rule. France, Portugal, Italy, Germany, and Spain used direct rule.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following was NOT a slave source country?",
      options: ["Benin", "Oyo (Nigeria)", "Sierra Leone", "Ethiopia"],
      answer: "3",
      explanation:
        "Ethiopia was NOT a major slave source for the transatlantic trade. Main sources: Benin, Sierra Leone, Oyo, Ashanti, Angola, Congo.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "Which year did African independence peak across the continent?",
      options: ["1945", "1957", "1960", "1975"],
      answer: "2",
      explanation:
        "1960 is known as the 'Year of Africa' — 17 African countries gained independence that year.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "The OAU had 32 founding members. What was its eventual maximum?",
      options: ["32", "53", "55", "60"],
      answer: "2",
      explanation:
        "By 2017 the AU had 55 member states (South Sudan 54th in 2011, Morocco 55th in 2017).",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these was a result of the 'Scramble for Africa'?",
      options: [
        "Africans gained full self-rule",
        "European powers divided Africa with little regard for ethnic boundaries",
        "Slavery increased",
        "All African countries became wealthy",
      ],
      answer: "1",
      explanation:
        "European powers drew colonial boundaries without regard for African ethnic or linguistic groupings, causing long-term problems.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "Which country was the FIRST African country to gain independence from Britain after WWII?",
      options: ["Kenya", "Nigeria", "Ghana", "Uganda"],
      answer: "2",
      explanation:
        "Ghana (formerly Gold Coast) was the first British African colony to gain independence after WWII (1957).",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "Which area of Africa was MOST affected by the slave trade in the 17th–18th centuries?",
      options: [
        "Western sub-Saharan Africa",
        "North Africa",
        "Southern Africa",
        "East Africa",
      ],
      answer: "0",
      explanation:
        "Western sub-Saharan Africa was MOST seriously affected during the 17th and 18th centuries.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about European colonial rule in Africa?",
      options: [
        "Colonialists drained wealth and exploited native workers",
        "Colonialists improved African economies equally",
        "Colonialists gave freedom to all Africans",
        "Colonialists supported African manufacturing",
      ],
      answer: "0",
      explanation:
        "Colonialists drained wealth, discouraged colonial manufacturing, exploited native workers, discriminated against colonial peoples, and degraded native cultures.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "Which best describes the outcome of WWII for Africa?",
      options: [
        "Africa gained more colonies",
        "Africa began its push for independence",
        "Africa stopped all trade",
        "Africa remained the same",
      ],
      answer: "1",
      explanation:
        "After WWII, African nations pushed hard for independence. By 1960 most had achieved independence.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "Which country's independence struggle was led by Augustino Neto?",
      options: ["Angola", "Mozambique", "Guinea-Bissau", "Zimbabwe"],
      answer: "0",
      explanation:
        "Augustino Neto led Angola to independence in November 1975.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about the Berlin Conference (1884–1885) is TRUE?",
      options: [
        "African leaders were invited as equals",
        "Africans were not represented at the conference",
        "It ended the slave trade",
        "It gave independence to African states",
      ],
      answer: "1",
      explanation:
        "Africans were NOT represented at the Berlin Conference. European powers decided the partition of Africa without African input.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which of these was a positive outcome of abolishing slavery?",
      options: [
        "Growth of legitimate trade in Africa (raw materials and manufactured goods)",
        "More slaves were captured",
        "Colonialism ended",
        "Africa became wealthy",
      ],
      answer: "0",
      explanation:
        "After abolition, European manufacturers sought new markets and raw materials in Africa — encouraging 'legitimate trade' rather than slave trade.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "Why did some African kingdoms PROSPER during the slave trade?",
      options: [
        "They captured and sold other Africans to Europeans",
        "They became independent",
        "They received foreign aid",
        "They had advanced technology",
      ],
      answer: "0",
      explanation:
        "Some African kings and elites prospered by capturing and selling other Africans to European slave traders. But the continent as a whole suffered hugely.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "Which of the following correctly matches a country with its colonizer?",
      options: [
        "Kenya — Portugal",
        "Nigeria — Britain",
        "Madagascar — Italy",
        "Libya — France",
      ],
      answer: "1",
      explanation:
        "Nigeria was a British colony. Kenya was British too (not Portuguese). Madagascar was French. Libya was Italian.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correct statement about African independence is FALSE?",
      options: [
        "Algeria achieved independence through a bloody war",
        "Ghana was the first West African country to gain independence",
        "Kenya's first president was Jomo Kenyatta",
        "The Gold Coast became independent in 1963",
      ],
      answer: "3",
      explanation:
        "The Gold Coast (Ghana) became independent in 1957, NOT 1963. Kenya became independent in 1963.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes the difference between OAU and AU?",
      options: [
        "OAU focused on development; AU focused on anti-colonialism",
        "OAU focused on anti-colonialism; AU shifted to development and integration",
        "Both focused only on anti-colonialism",
        "Both focused only on development",
      ],
      answer: "1",
      explanation:
        "OAU (1963) focused on anti-colonialism and independence. AU (2002) shifted to development, integration, peace, security, democracy, and human rights.",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "Explain the impact of the slave trade on Africa.",
      answer:
        "Socially: increased insecurity, distrust, conflicts; language mixing; loss of cultural beliefs. Politically: military/political supremacy of some tribes; kings prospered. Economically: resources stolen, humans exploited, agriculture/mining damaged, productive manpower lost, dependency on European goods.",
      explanation:
        "Banchi, cover social, political, and economic — three categories.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "List five major African explorers' contributions to the great geographical discoveries.",
      answer:
        "Prince Henry the Navigator (sponsored Portuguese exploration), Bartholomew Diaz (reached Cape of Good Hope 1488), Vasco da Gama (reached India 1498), Christopher Columbus (reached America 1492), Ferdinand Magellan (circumnavigated 1519–1522).",
      explanation:
        "Each explorer's key achievement should be clearly stated.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "What were the causes of African independence after WWII?",
      answer:
        "Lessons from WWI & WWII (Europeans weakened, freedom ideals), US influence, Communist propaganda, newly independent Asian nations' example, UN decisions, and changing world attitudes toward colonialism.",
      explanation:
        "African independence was driven by a combination of international pressure and internal resistance.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Explain what the OAU and AU are, their years, and their main objectives.",
      answer:
        "OAU (1963, Addis Ababa, 32 founding states): promote African unity and solidarity; safeguard sovereignty; end colonialism and apartheid; coordinate cooperation. AU (2002, Durban, 55 members): shifted to Africa's development and integration; promote peace, security, stability, democracy, good governance, and human rights; Agenda 2063 (2015) lays out the long-term vision of a united, prosperous Africa.",
      explanation:
        "Banchi, remember: OAU = Addis Ababa 1963. AU = Durban 2002. Both share the goal of African unity.",
    },
  ],
};