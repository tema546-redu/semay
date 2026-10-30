import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 HISTORY — UNIT 2
// AFRICA & THE COLONIAL EXPERIENCE (1880s–1960s)
// Source: Grade 10 History Student Textbook (pp. 24–43)
// For: Abenezer (Abatu) — Grade 10
// Style: mastery-lab (key terms, timelines, exam traps, memory hooks)
// ============================================================

export const g10HistoryCh2: Chapter = {
  id: "ch2",
  number: 2,
  title: "Africa & the Colonial Experience (1880s–1960s)",
  titleAm: "አፍሪካ እና የቅኝ ግዛት ልምድ (1880ዎቹ–1960ዎቹ)",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS UNIT
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Unit (Your Route to 100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this unit is the STORY OF AFRICA under European colonial rule. It has FIVE big parts:\n" +
        "1) BACKGROUND TO COLONIALISM — what it is, how it started\n" +
        "2) MOTIVES — why Europeans colonized Africa\n" +
        "3) SCRAMBLE & BERLIN CONFERENCE — how Africa was divided\n" +
        "4) COLONIAL POLICIES — how colonies were governed (4 systems)\n" +
        "5) RESISTANCE & IMPACTS — how Africans fought back and what changed\n\n" +
        "Master these FIVE must-know items:\n" +
        "• Definition of colonialism + link to imperialism\n" +
        "• Four motives: Economic, Political, Civilizing Mission, Religious\n" +
        "• Berlin Conference (1884–85) rules\n" +
        "• Four colonial policies: Company, Direct/Assimilation, Indirect, Settlers\n" +
        "• Early resistance leaders + why they failed",
      bodyAm:
        "አባቱ፣ ይህ ክፍል አፍሪካ በአውሮፓ ቅኝ ግዛት ሥር የነበረችበት ታሪክ ነው። አምስት ትላልቅ ክፍሎች፦\n" +
        "1) የቅኝ ግዛት ዳራ\n" +
        "2) ምክንያቶች\n" +
        "3) ስክራምብልና የበርሊን ኮንፈረንስ\n" +
        "4) የቅኝ ግዛት ፖሊሲዎች\n" +
        "5) ተቃውሞና ተጽዕኖዎች",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the definition",
          titleAm: "ደረጃ 1 · ትርጓሜውን ተረዳ",
          body:
            "COLONIALISM = direct and total dominance of one country by another based on possession of state authority by a foreign power.\n\n" +
            "• One country subjugates another, conquering and exploiting its people\n" +
            "• Linked to IMPERIALISM = policy of using power and influence to rule another nation or people\n\n" +
            "⚠ Colonialism is ancient (Greeks, Romans, Ottomans). It grew in scope since the 16th century after the Age of Discovery.",
          bodyAm:
            "ቅኝ ግዛት = አንድ አገር ሌላውን በሙሉ መቆጣጠር።\n" +
            "ከኢምፔሪያሊዝም ጋር የተያያዘ ነው።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Know the four motives",
          titleAm: "ደረጃ 2 · አራቱን ምክንያቶች ወቅታዊ አድርግ",
          body:
            "Four main motives:\n" +
            "1) ECONOMIC — raw materials + new markets\n" +
            "2) POLITICAL/STRATEGIC — power, prestige, military bases\n" +
            "3) CIVILIZING MISSION / WHITE MAN'S BURDEN — 'spread civilization' (Kipling's poem)\n" +
            "4) RELIGIOUS — missionaries wanted political protection\n\n" +
            "⚠ ECONOMIC is always the #1 motive in exam questions.",
          bodyAm:
            "አራት ምክንያቶች፦\n" +
            "1) ኢኮኖሚያዊ\n" +
            "2) ፖለቲካዊ/ስትራቴጂያዊ\n" +
            "3) ስልጣኔ ተልዕኮ\n" +
            "4) ሃይማኖታዊ",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master the Berlin Conference rules",
          titleAm: "ደረጃ 3 · የበርሊን ኮንፈረንስ ደንቦችን ተቆጣጥር",
          body:
            "BERLIN CONFERENCE (1884–85):\n" +
            "• 14 European countries + USA\n" +
            "• Led by Otto von Bismarck\n" +
            "• AFRICA NOT INVITED\n" +
            "• Main goal: divide Africa among European powers\n\n" +
            "KEY RULES:\n" +
            "• Principle of EFFECTIVE OCCUPATION (Article 35) — must have treaty + flag + administration + police\n" +
            "• Doctrine of SPHERE OF INFLUENCE (Article 34) — must notify other powers\n" +
            "• Congo Free State = personal property of King Leopold II of Belgium\n" +
            "• FREE NAVIGATION of Niger and Congo rivers\n" +
            "• Resolved to END SLAVERY in Africa",
          bodyAm:
            "14 አገሮች፣ አፍሪካ አልተጋበዘችም።\n" +
            "ቁልፍ ደንቦች: effective occupation, sphere of influence።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Compare the four colonial policies",
          titleAm: "ደረጃ 4 · አራቱን ፖሊሲዎች አመሳኽር",
          body:
            "FOUR POLICIES:\n" +
            "1) COMPANY RULE — private companies (e.g., British South Africa Company by Cecil Rhodes)\n" +
            "2) DIRECT RULE & ASSIMILATION — French (Albert Sarraut); replace African rulers with Europeans; assimilation = 'become French'\n" +
            "3) INDIRECT RULE — British (Frederick Lugard); use African chiefs under supervision\n" +
            "4) SETTLERS RULE — Europeans settle; take fertile land (Kenya, Algeria, Southern Africa)\n\n" +
            "⚠ ALL colonial systems shared: undemocratic, imposed without consent, 'divide and rule'.",
          bodyAm:
            "አራቱ ፖሊሲዎች: Company, Direct/Assimilation, Indirect, Settlers።\n" +
            "ሁሉም 'divide and rule' ተጠቀሙ።",
        },
        {
          id: "n0-5",
          title: "Pass 5 · Learn the resistance leaders",
          titleAm: "ደረጃ 5 · የተቃውሞ መሪዎችን አስታውስ",
          body:
            "WEST AFRICA:\n" +
            "• Ahmadu Seku — Tukulor Empire (resisted French)\n" +
            "• Samori Ture — Mandinka Empire (1882–1898, 30,000 army, exiled to Gabon)\n" +
            "• Asantehene Prempe — Gold Coast (Ghana) vs British\n\n" +
            "EAST AFRICA:\n" +
            "• Kinjikitile Ngwale — Maji Maji Uprising (1905–07, Tanganyika, vs Germans)\n\n" +
            "SOUTH AFRICA:\n" +
            "• Samuel Maharero — Herero (1904)\n" +
            "• Hendrik Witbooi — Nama (1905)\n\n" +
            "NORTH AFRICA:\n" +
            "• Colonel Urabi Pasha — Egypt vs British/French (1881–82)\n\n" +
            "⚠ Why they failed: military inferiority + lack of cooperation/unity.",
          bodyAm:
            "ምዕራብ፦ አህመዱ ሴኩ፣ ሳሞሪ ቱሬ፣ ፕሬምፔ።\n" +
            "ምስራቅ፦ ኪንጂኪቲሌ ንግዋሌ (ማጂ ማጂ)።\n" +
            "ደቡብ፦ ማሃሬሮ፣ ዊትቡይ።\n" +
            "ሰሜን፦ ኡራቢ ፓሻ።",
        },
        {
          id: "n0-6",
          title: "⚠ Exam standard — before you submit",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Colonialism ≠ imperialism (colonialism = practice; imperialism = policy/belief)\n" +
            "• ECONOMIC was the #1 motive — not 'civilizing mission'\n" +
            "• Africa was NOT invited to Berlin Conference\n" +
            "• Effective occupation required TREATY + FLAG + ADMINISTRATION\n" +
            "• Assimilation = French; Indirect Rule = British\n" +
            "• ALL colonial systems: undemocratic + divide and rule\n" +
            "• Maji Maji = Tanganyika (Tanzania), not Kenya\n" +
            "• Samori Ture resisted FRENCH (not British)\n" +
            "• Prempe resisted BRITISH (not French)\n" +
            "• Colonialism had BOTH negative (underdevelopment) and positive (railways, end of tribal wars) impacts",
          bodyAm:
            "ቅኝ ግዛት ≠ ኢምፔሪያሊዝም።\n" +
            "ኢኮኖሚያዊ = ቁልፍ ምክንያት።\n" +
            "አፍሪካ አልተጋበዘችም።",
        },
      ],
    },

    // ============================================================
    // 2.1 GENERAL BACKGROUND TO COLONIALISM
    // ============================================================
    {
      id: "n1",
      title: "2.1 General Background to Colonialism",
      titleAm: "2.1 የቅኝ ግዛት አጠቃላይ ዳራ",
      body:
        "Abatu, before 1880, only 10% of Africa was under foreign rule. By 1914, almost all of Africa was colonized. What happened? The SCRAMBLE FOR AFRICA.",
      bodyAm:
        "ከ1880 በፊት 10% ብቻ ነበር። በ1914 ሁሉም ተቀነሰ።",
      children: [
        {
          id: "n1-1",
          title: "📌 KEY TERM — Colonialism",
          titleAm: "📌 ቁልፍ ቃል — ቅኝ ግዛት",
          body:
            "COLONIALISM = direct and total dominance of one country by another based on possession of state authority by a foreign power.\n\n" +
            "• One country subjugates another, conquering and exploiting its people\n" +
            "• Tied to IMPERIALISM = policy/belief of using power and influence to rule another nation or people\n\n" +
            "Colonialism is ancient:\n" +
            "• Greeks, Romans, Ottomans established colonies overseas\n" +
            "• Grew since the 16th century after the Age of Discovery\n" +
            "• Enabled by advances in navigation technology",
          bodyAm:
            "ቅኝ ግዛት = ሙሉ ቁጥጥር።\n" +
            "ከግሪኮች፣ ሮማውያን፣ ኦቶማኖች ጀምሮ ይታወቃል።",
        },
        {
          id: "n1-2",
          title: "📌 KEY TERM — Legitimate Trade",
          titleAm: "📌 ቁልፍ ቃል — ህጋዊ ንግድ",
          body:
            "After the Atlantic Slave Trade ended, Europeans began 'LEGITIMATE TRADE' with Africa.\n\n" +
            "• 'Legitimate commerce' = commodity trade between Africans and European merchants after slavery was abolished\n" +
            "• African RAW PRODUCTS (especially cash crops) were exchanged for European goods\n\n" +
            "SHIFT:\n" +
            "• Before: human merchandise (slaves)\n" +
            "• After: tropical crops (palm oil, groundnuts, cotton, gum, cocoa, coffee)\n\n" +
            "⚠ RESULT: This heightened COMPETITION → race for Africa (Scramble).",
          bodyAm:
            "ከባሪያ ንግድ በኋላ 'ህጋዊ ንግድ'።\n" +
            "ጥሬ ምርቶች ↔ የአውሮፓ ምርቶች።\n" +
            "ውድድር አስነሳ → ስክራምብል።",
        },
        {
          id: "n1-3",
          title: "🔍 Explorers and Missionaries",
          titleAm: "🔍 አሳሾችና ሚስዮናሪዎች",
          body:
            "EXPLORERS (between late 18th century and 1870s):\n" +
            "• BEFORE 1850s — inspired by scientific inquiry\n" +
            "• AFTER 1850s — agents of European governments\n\n" +
            "MISSIONARIES:\n" +
            "• Came with good intention to evangelize\n" +
            "• BUT timing was BAD — came alongside colonial administrators and traders\n" +
            "• Preached 'Christianity, commerce and civilization'\n" +
            "• Depended on traders for funds and administrators for security\n\n" +
            "⚠ CONVERSION SUCCESS was LOW:\n" +
            "• In the last two decades of the 19th century, converted LESS THAN 1% of non-Muslim Africans (outside Ethiopia)\n" +
            "• Because of failure, missionaries began to APPEAL to their governments for help",
          bodyAm:
            "አሳሾች: ከ1850 በፊት ሳይንሳዊ፣ ከዚያ በኋላ የመንግሥት ወኪሎች።\n" +
            "ሚስዮናሪዎች: ከ1% በታች ቀየሩ።",
        },
        {
          id: "n1-4",
          title: "⚠ EXAM TRAP — Colonialism vs Imperialism",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• COLONIALISM = the PRACTICE of one country ruling another\n" +
            "• IMPERIALISM = the POLICY/BELIEF of using power and influence to rule another nation\n\n" +
            "They are inseparably tied — but NOT the same.\n\n" +
            "⚠ MCQ TRAP: 'The concept of colonialism is inseparably tied to that of ___' → answer = IMPERIALISM (not communism, not socialism, not feudalism).",
          bodyAm:
            "ቅኝ ግዛት = ተግባር።\n" +
            "ኢምፔሪያሊዝም = ፖሊሲ።",
        },
        {
          id: "n1-5",
          title: "⚠ EXAM TRAP — Missionary success",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "MISSIONARIES WERE NOT SUCCESSFUL in converting most Africans.\n\n" +
            "• Converted LESS THAN 1% of non-Muslim Africans (outside Ethiopia)\n" +
            "• Because of this lack of success, they appealed to European governments for help\n" +
            "• That appeal CONTRIBUTED to colonization\n\n" +
            "⚠ MCQ TRAP: 'European missionaries were successful in converting most of the Africans' → FALSE!",
          bodyAm:
            "ሚስዮናሪዎች አልተሳኩም።\n" +
            "<1% ብቻ ቀየሩ።",
        },
      ],
    },

    // ============================================================
    // 2.2 MOTIVES OF EUROPEAN COLONIALISM
    // ============================================================
    {
      id: "n2",
      title: "2.2 The Motives of European Colonialism",
      titleAm: "2.2 የአውሮፓ ቅኝ ግዛት ምክንያቶች",
      body:
        "Abatu, WHY did Europeans colonize Africa? There are FOUR main motives. ECONOMIC is the #1.",
      bodyAm:
        "አራት ምክንያቶች። ኢኮኖሚያዊ = #1።",
      children: [
        {
          id: "n2-1",
          title: "💰 A. Economic Motive (MOST IMPORTANT)",
          titleAm: "💰 A. ኢኮኖሚያዊ ምክንያት",
          body:
            "TWO visible economic needs:\n" +
            "1) DEMAND FOR RAW MATERIALS — factories needed inputs\n" +
            "2) NEED FOR NEW MARKET CENTRES — to sell manufactured goods\n\n" +
            "The 1800s was a time of great INDUSTRIALIZATION in Europe:\n" +
            "• Factories required raw materials for manufacturing\n" +
            "• Africa had abundant untapped resources\n\n" +
            "AFRICA'S WEALTH:\n" +
            "• Agricultural: groundnuts, palm oil, wood, cotton, gum\n" +
            "• Mining: rubber, gold, diamonds",
          bodyAm:
            "ጥሬ ነገር + አዲስ ገበያ።\n" +
            "የአፍሪካ ሀብት: ግብዓቶችና ማዕድናት።",
        },
        {
          id: "n2-2",
          title: "🏛 B. Political / Strategic Interest",
          titleAm: "🏛 B. ፖለቲካዊ / ስትራቴጂያዊ ምክንያት",
          body:
            "Major world powers competed for POWER and PRESTIGE.\n\n" +
            "• Great Britain, France, Spain — competing\n" +
            "• Wanted to dominate STRATEGIC TERRITORIES\n" +
            "• Favourable locations for MILITARY AND NAVAL BASES\n\n" +
            "⚠ This motive is about POWER, not just money.",
          bodyAm:
            "ኃያላን ስለ ስልጣንና ክብር ተወዳደሩ።\n" +
            "ስትራቴጂያዊ ቦታዎች።",
        },
        {
          id: "n2-3",
          title: "📜 C. The Civilizing Mission & White Man's Burden",
          titleAm: "📜 C. የስልጣኔ ተልዕኮ",
          body:
            "THE CIVILIZING MISSION = a RATIONALE for intervention or colonization of non-Western peoples.\n\n" +
            "• Europeans presented themselves as having a mission to spread:\n" +
            "  - Civilization\n" +
            "  - Commerce\n" +
            "  - Christianity\n" +
            "• Clear implication: Africans = inferior/uncivilized; Europeans = superior/civilized\n\n" +
            "WHITE MAN'S BURDEN:\n" +
            "• Poem by English poet RUDYARD KIPLING (1899)\n" +
            "• Proposed that WHITE PEOPLE SHOULD RULE over non-white people\n" +
            "• Until they can take their place by fully adopting Western ways\n\n" +
            "⚠ Kipling described the subjects as 'half-devil and half child' — showing European racism.",
          bodyAm:
            "የስልጣኔ ተልዕኮ = የቅኝ ግዛት ማስረጃ።\n" +
            "Kipling's poem (1899)።",
        },
        {
          id: "n2-4",
          title: "⛪ D. Religious Factor",
          titleAm: "⛪ D. ሃይማኖታዊ ምክንያት",
          body:
            "Some MISSIONARIES supported colonization because they believed:\n\n" +
            "• European control would provide a POLITICAL ENVIRONMENT\n" +
            "• That environment would FACILITATE their missionary activities\n" +
            "• Protection + order = easier conversion\n\n" +
            "⚠ This means missionaries actively cooperated with colonizers.",
          bodyAm:
            "አንዳንድ ሚስዮናሪዎች ቅኝ ግዛትን ደገፉ።",
        },
        {
          id: "n2-5",
          title: "⚠ EXAM TRAP — Motives",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• ECONOMIC was the MAIN motive.\n" +
            "• 'Civilizing mission' was a RATIONALE (excuse) — not the main driver.\n" +
            "• 'White Man's Burden' = a POEM (Rudyard Kipling, 1899).\n" +
            "• Kipling's poem called non-white people 'half-devil and half child'.\n" +
            "• Missionaries were NOT successful converters (less than 1%) but they SUPPORTED colonization.\n" +
            "• Strategic motive = military/naval bases + prestige.",
          bodyAm:
            "ኢኮኖሚያዊ = #1።\n" +
            "ስልጣኔ = ማስረጃ ብቻ።",
        },
      ],
    },

    // ============================================================
    // 2.3 SCRAMBLE FOR AFRICA & BERLIN CONFERENCE
    // ============================================================
    {
      id: "n3",
      title: "2.3 Scramble for Africa and the Berlin Conference",
      titleAm: "2.3 የአፍሪካ ስክራምብልና የበርሊን ኮንፈረንስ",
      body:
        "Abatu, SCRAMBLE FOR AFRICA = the fierce rivalry, massive and rapid colonial expansion of Europeans in Africa from the 1880s to the first decade of the 20th century.",
      bodyAm:
        "ስክራምብል = ከ1880ዎቹ እስከ 20ኛው ክፍለ ዘመን መጀመሪያ የተካሄደው ፍጥነት ያለው የቅኝ ግዛት መስፋፋት።",
      children: [
        {
          id: "n3-1",
          title: "🌍 Before the 1880s",
          titleAm: "🌍 ከ1880ዎቹ በፊት",
          body:
            "Before 1880:\n" +
            "• Only 10% of Africa ruled by foreign powers\n" +
            "• Most of North Africa = nominal Turkish (Ottoman) rule\n" +
            "• Omani rule in Zanzibar Island\n" +
            "• British in Sierra Leone\n" +
            "• French in Algeria\n" +
            "• Boers + British in South Africa\n" +
            "• Portuguese in Mozambique + Angola coastal areas\n\n" +
            "FOREIGN RULE WAS LIMITED TO COASTAL AREAS ONLY.\n" +
            "The other 90% of Africa was FREE.",
          bodyAm:
            "ከ1880 በፊት: 10% ብቻ የውጭ ቁጥጥር።\n" +
            "90% ነጻ ነበር።",
        },
        {
          id: "n3-2",
          title: "📅 The Berlin Conference (1884–1885)",
          titleAm: "📅 የበርሊን ኮንፈረንስ",
          body:
            "BERLIN CONFERENCE (1884–85):\n" +
            "• Held in Berlin, Germany\n" +
            "• Led by German Chancellor OTTO VON BISMARCK\n" +
            "• 14 countries represented:\n" +
            "  Austria-Hungary, Belgium, Denmark, France, Germany, Great Britain, Italy, Netherlands, Portugal, Russia, Spain, Sweden-Norway, Turkey, USA\n" +
            "• MAJOR PLAYERS: France, Germany, Great Britain, Portugal\n" +
            "• AFRICA WAS NOT INVITED NOR INVOLVED\n" +
            "• Main goal: DIVIDE UP AFRICA\n\n" +
            "⚠ THE BERLIN CONFERENCE MARKED THE REAL BEGINNING OF COLONIZATION IN AFRICA.",
          bodyAm:
            "14 አገሮች፣ አፍሪካ አልተጋበዘችም።\n" +
            "Bismarck መራ።",
        },
        {
          id: "n3-3",
          title: "📜 The Four Key Rules of Berlin",
          titleAm: "📜 አራቱ ቁልፍ ደንቦች",
          body:
            "1) PRINCIPLE OF EFFECTIVE OCCUPATION (Article 35):\n" +
            "• Colonial powers could acquire rights ONLY IF:\n" +
            "  - They had treaties with local leaders\n" +
            "  - They flew their flag there\n" +
            "  - They established administration with police force\n\n" +
            "2) DOCTRINE OF SPHERE OF INFLUENCE (Article 34):\n" +
            "• Any new taking of African coast territory → must NOTIFY other signatory powers\n\n" +
            "3) THE CONGO FREE STATE (today's DRC):\n" +
            "• Confirmed as PRIVATE PROPERTY of King Leopold II of Belgium\n\n" +
            "4) FREE NAVIGATION of the Niger and Congo rivers\n\n" +
            "5) Conference resolved to END SLAVERY in Africa.",
          bodyAm:
            "1) ውጤታማ ይዞታ (ስምምነት + ባንዲራ + አስተዳደር)\n" +
            "2) የተጽዕኖ ሉል (ማሳወቅ)\n" +
            "3) ኮንጎ = የሊዮፖልድ ሁለተኛ የግል ንብረት\n" +
            "4) ነጻ የወንዝ ጉዞ\n" +
            "5) ባርነት መጨረስ",
        },
        {
          id: "n3-4",
          title: "⚠ Why Europeans succeeded so quickly",
          titleAm: "⚠ አውሮፓውያን ለምን በፍጥነት ተሳኩ",
          body:
            "TWO main reasons:\n\n" +
            "1) MILITARY SUPERIORITY\n" +
            "• Professional, well-trained armies\n" +
            "• Superior weapons (machine guns, rifles)\n\n" +
            "2) LACK OF COOPERATION & SOLIDARITY AMONG AFRICANS\n" +
            "• Divided kingdoms\n" +
            "• Europeans used 'divide and rule'\n" +
            "• Recruited Africans to fight Africans\n\n" +
            "⚠ Other factors: fake treaties (e.g., Wuchale Treaty with Ethiopia).",
          bodyAm:
            "1) ወታደራዊ የበላይነት\n" +
            "2) አፍሪካውያን አንድነት ማጣት\n" +
            "ሐሰተኛ ስምምነቶች",
        },
        {
          id: "n3-5",
          title: "⚠ EXAM TRAP — Berlin Conference",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• Africa was NOT invited\n" +
            "• 14 countries attended — NONE African\n" +
            "• Bismarck was leader (German Chancellor)\n" +
            "• Congo = Leopold II's PERSONAL property\n" +
            "• Effective Occupation = treaty + flag + administration + police\n" +
            "• Free navigation of NIGER and CONGO rivers\n" +
            "• Berlin Conference = beginning of REAL colonization\n" +
            "• Conference resolved to END slavery\n\n" +
            "⚠ MCQ TRAP: 'Africa was involved in the Berlin Conference' → FALSE.\n" +
            "⚠ MCQ TRAP: 'The conference gave Congo to Belgium' → FALSE; gave it to Leopold II PERSONALLY.",
          bodyAm:
            "አፍሪካ አልተጋበዘችም።\n" +
            "ኮንጎ = የሊዮፖልድ የግል ንብረት።\n" +
            "ውጤታማ ይዞታ = ስምምነት + ባንዲራ + አስተዳደር።",
        },
        {
          id: "n3-6",
          title: "🧠 Memory Hook — Berlin Conference",
          titleAm: "🧠 የማስታወሻ ዘዴ",
          body:
            "Remember the Berlin rules as 'T-F-A-P':\n" +
            "• T = Treaty with local leaders\n" +
            "• F = Flag must fly\n" +
            "• A = Administration established\n" +
            "• P = Police force to keep order\n\n" +
            "Remember the two rivers: NIGER and CONGO (both free for navigation).\n\n" +
            "Remember: Congo → Leopold II PERSONALLY.",
          bodyAm:
            "T-F-A-P = ስምምነት + ባንዲራ + አስተዳደር + ፖሊስ።\n" +
            "ናይጀር + ኮንጎ = ነጻ ወንዞች።",
        },
      ],
    },

    // ============================================================
    // 2.4 COLONIAL POLICIES AND ADMINISTRATION
    // ============================================================
    {
      id: "n4",
      title: "2.4 Colonial Policies and Administration",
      titleAm: "2.4 የቅኝ ግዛት ፖሊሲዎችና አስተዳደር",
      body:
        "Abatu, FOUR different colonial systems were used. Know each one's architect and country.",
      bodyAm:
        "አራት የተለያዩ ሥርዓቶች።",
      children: [
        {
          id: "n4-1",
          title: "🏢 1. Company Rule",
          titleAm: "🏢 1. የኩባንያ አገዛዝ",
          body:
            "COMPANY RULE:\n" +
            "• European nations allowed PRIVATE COMPANIES to administer large African territories\n" +
            "• Companies formed by BUSINESSMEN interested in exploiting resources\n" +
            "• Period: 1880s to 1924\n\n" +
            "EXAMPLE:\n" +
            "• BRITISH SOUTH AFRICA COMPANY (B.S.A.C) — formed 1887\n" +
            "• Under control of CECIL RHODES\n" +
            "• Administered: Nyasaland, Northern Rhodesia, Southern Rhodesia\n" +
            "• Until 1924\n\n" +
            "CECIL RHODES:\n" +
            "• Went to South Africa in 1871\n" +
            "• By 1889: controlled 90% of world's diamond production + dominated gold market\n" +
            "• Prime Minister of British Cape Colony (1890–1896)\n" +
            "• Extended British control in Africa\n\n" +
            "WHY COMPANY RULE FAILED:\n" +
            "• SHORTAGE OF FINANCE\n" +
            "• OPPOSITION from Africans and missionaries over harsh rule",
          bodyAm:
            "የግል ኩባንያዎች አስተዳደሩ።\n" +
            "Cecil Rhodes (B.S.A.C)።\n" +
            "ያለፈበት ምክንያት: ገንዘብ እጥረት + ተቃውሞ።",
        },
        {
          id: "n4-2",
          title: "🇫🇷 2. Direct Rule & Assimilation (FRENCH)",
          titleAm: "🇫🇷 2. ቀጥታ አገዛዝና አሲሚሌሽን",
          body:
            "DIRECT RULE — used by FRENCH, Belgians, Germans, Portuguese.\n\n" +
            "FEATURES:\n" +
            "• African indigenous rulers + local governments REMOVED\n" +
            "• Replaced by EUROPEAN PERSONNEL\n" +
            "• African chiefs used only at LOWER levels (to collect taxes, recruit labor, suppress opposition)\n" +
            "• French considered colonies as PART OF FRANCE\n\n" +
            "ARCHITECT: ALBERT SARRAUT\n\n" +
            "ASSIMILATION:\n" +
            "• An African, after receiving FRENCH EDUCATION, could become French\n" +
            "• Accepted INHERENT SUPERIORITY of French culture\n" +
            "• Extended French language, institutions, laws, customs\n\n" +
            "ASSOCIATION (opposite idea):\n" +
            "• Relationship = cooperation, not identity/merging\n" +
            "• Emphasized cooperation between rulers and ruled",
          bodyAm:
            "ፈረንሳይ — ቀጥታ አገዛዝ።\n" +
            "African rulers ተወገዱ።\n" +
            "Assimilation = 'ፈረንሳዊ መሆን'።\n" +
            "Association = 'ትብብር'።",
        },
        {
          id: "n4-3",
          title: "🇬🇧 3. Indirect Rule (BRITISH)",
          titleAm: "🇬🇧 3. በተዘዋዋሪ አገዛዝ",
          body:
            "INDIRECT RULE — used by BRITISH.\n\n" +
            "ARCHITECT: FREDERICK LUGARD\n" +
            "• Exercised when governor of Nigeria and British East Africa\n" +
            "• Book: 'The Dual Mandate in British Tropical Africa' (1922)\n\n" +
            "FEATURES:\n" +
            "• Used INDIGENOUS AFRICAN RULERS within colonial administration\n" +
            "• Greater use of African CUSTOMARY LAW (unlike French)\n\n" +
            "LUGARD'S REASONS (why indirect rule was good):\n" +
            "1) CHEAPEST way to administer\n" +
            "2) MOST EFFECTIVE\n" +
            "3) REDUCED African resistance\n\n" +
            "⚠ NEGATIVE EFFECT:\n" +
            "• Aggravated ETHNIC DIFFERENCES\n" +
            "• Emphasized differences in dialect, dress, religion",
          bodyAm:
            "ብሪታንያ — በተዘዋዋሪ አገዛዝ።\n" +
            "Lugard = አርክቴክት።\n" +
            "የአፍሪካ መሪዎችን ተጠቀመ።\n" +
            "ጥቅሞች: ርካሽ፣ ውጤታማ፣ ተቃውሞ ይቀንሳል።",
        },
        {
          id: "n4-4",
          title: "🏘 4. Settlers Rule",
          titleAm: "🏘 4. የሰፋሪዎች አገዛዝ",
          body:
            "SETTLERS RULE:\n" +
            "• Europeans came and SETTLED in Africa\n" +
            "• DISPLACED indigenous Africans\n" +
            "• Fertile lands taken from Africans and given to MINORITY WHITE SETTLERS\n\n" +
            "WHERE:\n" +
            "• Southern Africa: South Africa, Southern & Northern Rhodesia (Zimbabwe & Zambia), Angola, Mozambique, South West Africa (Namibia)\n" +
            "• East Africa: Kenya (British)\n" +
            "• North Africa: Algeria (French)\n\n" +
            "EXAMPLE — KENYA:\n" +
            "• Kikuyu lost ancestral territory in 'White Highlands' to European settlers\n" +
            "• Migrated in mass to Nairobi in search of employment\n\n" +
            "ADMINISTRATION: very HARSH and RACIST.\n" +
            "Africans became LABORERS and LANDLESS TENANTS.",
          bodyAm:
            "አውሮፓውያን ሰፈሩ።\n" +
            "መሬት ተወሰደ።\n" +
            "Kenya — ኪኩዩ መሬት አጡ።\n" +
            "አስተዳደር: ከባድና ዘረኛ።",
        },
        {
          id: "n4-5",
          title: "⚠ Common features of ALL colonial systems",
          titleAm: "⚠ የሁሉም የጋራ ባህሪያት",
          body:
            "Despite differences, ALL colonial governments shared:\n\n" +
            "1) UNDEMOCRATIC\n" +
            "2) IMPOSED WITHOUT AFRICAN CONSENT\n" +
            "3) ALL engaged in 'DIVIDE AND RULE'\n\n" +
            "⚠ MCQ TRAP: 'All colonial rule shared ___' → answer = DIVIDE AND RULE (not assimilation, not association, not democracy).",
          bodyAm:
            "ሁሉም የጋራ: ዲሞክራሲያዊ ያልሆነ፣ ያለ ፈቃድ፣ 'divide and rule'።",
        },
        {
          id: "n4-6",
          title: "🧠 Memory Hook — Colonial Policies",
          titleAm: "🧠 የማስታወሻ ዘዴ",
          body:
            "Match policy → country → architect:\n\n" +
            "• DIRECT/ASSIMILATION → FRANCE → Albert Sarraut\n" +
            "• INDIRECT RULE → BRITAIN → Frederick Lugard\n" +
            "• COMPANY RULE → BRITAIN → Cecil Rhodes (B.S.A.C)\n" +
            "• SETTLERS RULE → Multiple (Britain, France, Portugal) → no single architect\n\n" +
            "⚠ MCQ TRAP: 'The architect of indirect rule was ___' → Frederick Lugard (not Sarraut, not Rhodes).\n" +
            "⚠ MCQ TRAP: 'Assimilation was designed by ___' → Albert Sarraut.",
          bodyAm:
            "Direct = French = Sarraut።\n" +
            "Indirect = British = Lugard።\n" +
            "Company = British = Rhodes።\n" +
            "Settlers = multiple።",
        },
      ],
    },

    // ============================================================
    // 2.5 EARLY AFRICAN RESISTANCE MOVEMENTS
    // ============================================================
    {
      id: "n5",
      title: "2.5 Early African Resistance Movements Against Colonialism",
      titleAm: "2.5 የመጀመሪያ የአፍሪካ ተቃውሞዎች",
      body:
        "Abatu, Africans resisted colonial rule in many ways — armed and nonviolent. Learn the leaders and WHERE they resisted.",
      bodyAm:
        "በታጠቁና ባልታጠቁ መንገዶች ተቃወሙ።",
      children: [
        {
          id: "n5-1",
          title: "📅 Three stages of African response",
          titleAm: "📅 ሦስቱ ደረጃዎች",
          body:
            "STAGE 1: EARLY RESISTANCE (1880–1914)\n" +
            "• Armed responses\n" +
            "• Examples: Samori Ture, Maji Maji\n\n" +
            "STAGE 2: MID PERIOD (1914–1945)\n" +
            "• More organized movements\n\n" +
            "STAGE 3: DECOLONIZATION (1950s–1980s)\n" +
            "• NATIONAL LIBERATION MOVEMENTS\n" +
            "• Aimed at INDEPENDENCE\n\n" +
            "NONVIOLENT FORMS:\n" +
            "• Indigenous press\n" +
            "• Trade unionism\n" +
            "• Organized religion\n" +
            "• Associations\n" +
            "• Literary and art forms\n" +
            "• Mass migrations",
          bodyAm:
            "1) 1880–1914 — ቀደምት\n" +
            "2) 1914–1945 — መካከለኛ\n" +
            "3) 1950ዎቹ–1980ዎቹ — ዲኮሎኒዜሽን",
        },
        {
          id: "n5-2",
          title: "🌍 West Africa — Ahmadu Seku & Samori Ture",
          titleAm: "🌍 ምዕራብ አፍሪካ",
          body:
            "AHMADU SEKU:\n" +
            "• Prominent leader of the TUKULOR EMPIRE\n" +
            "• From 1830s to 1845, resisted FRENCH rule\n" +
            "• Preferred DIPLOMACY over armed resistance at first\n" +
            "• When French broke promises → clashed with French-Senegalese troops\n" +
            "• DEFEATED; exiled to Sokoto, died there\n" +
            "• French then allied with his BROTHER\n\n" +
            "SAMORI TURE (ca. 1830–1900):\n" +
            "• MUSLIM leader of the MANDINKA EMPIRE\n" +
            "• Armed resistance vs French: 1882 to 1898\n" +
            "• United most people between source of Niger and Upper Volta basin\n" +
            "• Strong army of 30,000 men\n" +
            "• Governed areas in today's Guinea, Mali, Cote d'Ivoire\n" +
            "• France CAPTURED him in 1900\n" +
            "• Exiled to GABON (Central Africa)",
          bodyAm:
            "Ahmadu Seku = Tukulor; ወደ Sokoto ተሰደደ።\n" +
            "Samori Ture = Mandinka; ወደ Gabon ተሰደደ።",
        },
        {
          id: "n5-3",
          title: "🇬🇭 The Asante — Gold Coast",
          titleAm: "🇬🇭 አሳንቴ",
          body:
            "THE ASANTE (Gold Coast / Ghana):\n" +
            "• British expanded from coastal areas\n" +
            "• Faced opposition from the ASANTE KINGDOM\n" +
            "• Led by ASANTEHENE (King) PREMPE\n" +
            "• Bloody war → British DEFEATED local resistance\n" +
            "• British established Gold Coast colony over ALL of Ghana in 1900\n\n" +
            "NIGERIA:\n" +
            "• British used 'divide and rule' + superior weapons\n" +
            "• Recruited African troops\n" +
            "• Conquered all of Nigeria by 1910",
          bodyAm:
            "Asantehene Prempe — እንግሊዝን ተቃወመ።\n" +
            "1900 እንግሊዝ ጋናን ተቆጣጠረች።",
        },
        {
          id: "n5-4",
          title: "🌋 East Africa — Maji Maji Uprising",
          titleAm: "🌋 ምስራቅ አፍሪካ — ማጂ ማጂ",
          body:
            "MAJI MAJI UPRISING (1905–1907):\n" +
            "• In TANGANYIKA (modern Tanzania)\n" +
            "• MOST SIGNIFICANT African challenge to GERMAN colonial rule\n" +
            "• German colonies in Africa: Tanganyika, Togo, Cameroon, Namibia\n\n" +
            "CAUSES:\n" +
            "• High taxation\n" +
            "• Forced labor\n" +
            "• Forced to grow COTTON\n" +
            "• Forced to BUILD ROADS for Europeans\n\n" +
            "LEADER: Prophet KINJIKITILE NGWALE\n" +
            "• Taught people to sprinkle sacred water called 'MAJI MAJI'\n" +
            "• Promised it would turn enemy bullets into water\n\n" +
            "SPREAD: 20 different ethnic groups joined\n\n" +
            "⚠ NATURE: SPONTANEOUS rising — NO previous planning, NO central leadership\n\n" +
            "GERMAN RESPONSE:\n" +
            "• 'SCORCHED EARTH' policy — destroyed villages\n" +
            "• Crushed the uprising",
          bodyAm:
            "Maji Maji (1905–07) — Tanganyika።\n" +
            "Kinjikitile Ngwale መራ።\n" +
            "ስፖንታኒያ ነበር።\n" +
            "ጀርመን 'scorched earth' ተጠቀመ።",
        },
        {
          id: "n5-5",
          title: "🇳🇦 South Africa — Herero & Nama",
          titleAm: "🇳🇦 ደቡብ አፍሪካ",
          body:
            "GERMAN SOUTH WEST AFRICA (Namibia):\n" +
            "• German rule = HARSH + LAND ALIENATION\n" +
            "• Land taken from Africans → given to German settlers\n" +
            "• Indigenous HERERO and NAMA peasants forced to reduce grazing land\n" +
            "• Cattle epidemic of 1896-97 → white settlers took more land\n\n" +
            "REBELLIONS:\n" +
            "• 1904 — HERERO people, led by SAMUEL MAHARERO\n" +
            "• 1905 — NAMA people, led by HENDRIK WITBOOI\n" +
            "• BOTH uprisings CRUSHED by Germans",
          bodyAm:
            "Herero (1904) — Samuel Maharero።\n" +
            "Nama (1905) — Hendrik Witbooi።\n" +
            "ሁለቱም ተጨፈጨፉ።",
        },
        {
          id: "n5-6",
          title: "🇪🇬 North Africa — Urabi Pasha",
          titleAm: "🇪🇬 ሰሜን አፍሪካ",
          body:
            "EGYPT:\n" +
            "• After Suez Canal opened (1869) → Britain and France competed for influence\n" +
            "• Egypt had WEAK government led by KHEDIVE ISMAEL PASHA\n" +
            "• 1879 — Britain and France agreed to DUAL CONTROL over Egypt\n\n" +
            "REVOLT:\n" +
            "• 1881 — Egyptian people revolted against British/French domination\n" +
            "• Led by COLONEL URABI PASHA\n\n" +
            "BRITISH RESPONSE:\n" +
            "• 1882 — British forces entered CAIRO under banner of 'controlling the revolt'\n" +
            "• Defeated the revolt\n" +
            "• EGYPT BECAME A BRITISH COLONY",
          bodyAm:
            "Urabi Pasha — 1881 ተቃወመ።\n" +
            "1882 እንግሊዝ ካይሮ ገባች።",
        },
        {
          id: "n5-7",
          title: "⚠ Why early resistance movements FAILED",
          titleAm: "⚠ ለምን አልተሳኩም",
          body:
            "WHY AFRICAN RESISTANCE FAILED:\n" +
            "1) MILITARY INFERIORITY — Europeans had superior weapons\n" +
            "2) LACK OF UNITY — Africans were divided\n" +
            "3) ABSENCE OF EFFECTIVE ORGANIZATION — no central command\n" +
            "4) POORLY ARMED — spears vs machine guns\n\n" +
            "⚠ MCQ TRAP: 'Which was NOT a cause for failure?' — Answer: 'Africans' inclination to colonial administration' is WRONG (they DIDN'T prefer colonial rule).",
          bodyAm:
            "ያለፈበት: ወታደራዊ ድክመት፣ አንድነት ማጣት፣ ድርጅታዊ ጉድለት።",
        },
        {
          id: "n5-8",
          title: "🧠 Memory Hook — Resistance Leaders",
          titleAm: "🧠 የማስታወሻ ዘዴ",
          body:
            "Match leader → place → enemy:\n\n" +
            "• Ahmadu Seku → Tukulor (W. Africa) → French\n" +
            "• Samori Ture → Mandinka (W. Africa) → French\n" +
            "• Asantehene Prempe → Gold Coast (Ghana) → British\n" +
            "• Kinjikitile Ngwale → Tanganyika → German\n" +
            "• Samuel Maharero → Namibia → German\n" +
            "• Hendrik Witbooi → Namibia → German\n" +
            "• Urabi Pasha → Egypt → British\n\n" +
            "Mnemonic: 'Samori, Seku, Prempe' = West African trio (SPA).",
          bodyAm:
            "ሳሞሪ = Mandinka, French።\n" +
            "ፕሬምፔ = Asante, British።\n" +
            "ንግዋሌ = Tanganyika, German።",
        },
      ],
    },

    // ============================================================
    // 2.6 IMPACTS OF COLONIAL RULE ON AFRICA
    // ============================================================
    {
      id: "n6",
      title: "2.6 Impacts of Colonial Rule on Africa",
      titleAm: "2.6 የቅኝ ግዛት ተጽዕኖዎች",
      body:
        "Abatu, colonialism had POLITICAL, ECONOMIC, and SOCIAL impacts — mostly NEGATIVE but with some positives.",
      bodyAm:
        "ፖለቲካዊ፣ ኢኮኖሚያዊ፣ ማህበራዊ ተጽዕኖዎች።",
      children: [
        {
          id: "n6-1",
          title: "🏛 2.6.1 Political Impacts",
          titleAm: "🏛 2.6.1 ፖለቲካዊ ተጽዕኖዎች",
          body:
            "1) Africans LOST INDEPENDENCE and FREEDOM\n" +
            "2) African INDIGENOUS ADMINISTRATIONS DESTROYED\n" +
            "3) Europeans created ARTIFICIAL BOUNDARIES without local approval\n" +
            "4) Created colonial legacy of BOUNDARY CONFLICTS after independence\n" +
            "5) Sometimes GROUPED TOGETHER people who had never been united\n" +
            "6) Sometimes DIVIDED existing groups of people",
          bodyAm:
            "ነጻነት ጠፋ።\n" +
            "የአፍሪካ አስተዳደሮች ጠፉ።\n" +
            "ሰው ሰራሽ ድንበሮች።",
        },
        {
          id: "n6-2",
          title: "💰 2.6.2 Economic Impacts",
          titleAm: "💰 2.6.2 ኢኮኖሚያዊ ተጽዕኖዎች",
          body:
            "1) UNDER-DEVELOPMENT of African territories\n" +
            "2) Africa remained a SUPPLIER OF RAW MATERIALS for Europe\n" +
            "3) Africans NOT ALLOWED or encouraged to go into MANUFACTURING\n" +
            "4) Colonial education made Africans abandon INDIGENOUS TECHNOLOGICAL SKILLS\n" +
            "5) Natural resources EXPLOITED by Europeans\n" +
            "6) Forests cleared for timber + firewood (for steam trains + rail tracks)",
          bodyAm:
            "አፍሪካ ጥሬ ነገር አቅራቢ ሆነች።\n" +
            "ማኑፋክቸሪንግ አልተፈቀደም።\n" +
            "ተፈጥሮ ሀብት ተበዘበዘ።",
        },
        {
          id: "n6-3",
          title: "👥 2.6.3 Social Impacts",
          titleAm: "👥 2.6.3 ማህበራዊ ተጽዕኖዎች",
          body:
            "1) DISRUPTED development and way of living\n" +
            "2) Communities MOVED and RELOCATED to create white settlement areas\n" +
            "3) BROUGHT NEW DISEASES\n" +
            "• Example: RINDERPEST disease — affected livestock of the Shona people (Zimbabwe/Botswana) + North Ethiopia (Kefu Qen)\n\n" +
            "POSITIVE OUTCOMES (few but real):\n" +
            "• Tribal warfares ENDED following colonial administration\n" +
            "• Introduction of different MODERN IDEAS\n" +
            "• Construction of RAILWAYS and ROADS (to transport raw materials to ports)",
          bodyAm:
            "አኗኗር ተረበሸ።\n" +
            "አዲስ በሽታዎች (Rinderpest)።\n" +
            "አዎንታዊ: የጎሳ ጦርነቶች ተጨረሱ፣ መንገዶች ተሠሩ።",
        },
        {
          id: "n6-4",
          title: "⚠ EXAM TRAP — Impacts",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• Colonialism BROUGHT diseases (Rinderpest) — it didn't cure them.\n" +
            "• Colonialism UNDER-DEVELOPED Africa — it didn't develop it.\n" +
            "• Railroads were built to EXTRACT raw materials — not to help Africans.\n" +
            "• Colonial boundaries were ARTIFICIAL — no African approval.\n\n" +
            "⚠ MCQ TRAP: 'The main reason for European colonization' → answer = EXPLOIT RICH AFRICAN RESOURCES (economic).",
          bodyAm:
            "ቅኝ ግዛት በሽታ አመጣ።\n" +
            "ሀብትን በዘበዘ።",
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
        "1. COLONIALISM = direct dominance of one country by another. Tied to imperialism.\n" +
        "2. MOTIVES = Economic (#1), Political, Civilizing Mission, Religious.\n" +
        "3. SCRAMBLE = fierce rivalry from 1880s. Berlin Conference (1884–85) divided Africa; Africa NOT invited.\n" +
        "4. POLICIES = Company (Rhodes), Direct/Assimilation (Sarraut/French), Indirect (Lugard/British), Settlers.\n" +
        "5. RESISTANCE = Samori Ture, Ahmadu Seku, Prempe, Kinjikitile Ngwale, Maharero, Witbooi, Urabi Pasha. All failed due to military inferiority + lack of unity.\n" +
        "6. IMPACTS = Political (artificial boundaries), Economic (under-development, raw material supplier), Social (relocation, diseases, Rinderpest).",
      bodyAm:
        "ስድስት ቁልፍ ነጥቦች።",
    },
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 2",
      titleAm: "የተለምዱ የፈተና ወጥመዶች",
      body:
        "1) Colonialism ≠ imperialism (practice vs policy).\n" +
        "2) ECONOMIC was the #1 motive.\n" +
        "3) Africa was NOT invited to Berlin Conference.\n" +
        "4) Effective Occupation = treaty + flag + administration + police.\n" +
        "5) Congo = Leopold II's PERSONAL property.\n" +
        "6) Assimilation = FRENCH; Indirect Rule = BRITISH.\n" +
        "7) ALL colonial systems used 'divide and rule'.\n" +
        "8) Maji Maji = Tanganyika (NOT Kenya).\n" +
        "9) Samori Ture resisted FRENCH.\n" +
        "10) Prempe resisted BRITISH.\n" +
        "11) Missionaries converted <1% — were NOT successful.\n" +
        "12) Rinderpest = disease spread by colonization.\n" +
        "13) 'White Man's Burden' = poem by Rudyard Kipling (1899).\n" +
        "14) Early resistance failed due to MILITARY INFERIORITY + LACK OF UNITY.\n" +
        "15) Berlin Conference = REAL beginning of colonization.\n" +
        "16) All colonial rule was UNDEMOCRATIC.",
      bodyAm:
        "16 ወጥመዶች።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Colonialism is best defined as:", options: ["The exchange of goods between nations", "Direct and total dominance of one country by another", "A system of free trade", "A type of religious movement"], answer: "1", explanation: "Colonialism = direct and total dominance of one country by another based on possession of state authority by a foreign power." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Colonialism is inseparably tied to:", options: ["Communism", "Socialism", "Imperialism", "Feudalism"], answer: "2", explanation: "Colonialism is inextricably tied to IMPERIALISM — the policy of using power to rule another nation." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "One factor that facilitated the expansion of colonialism in the 16th century was:", options: ["Advances in navigational technology", "The Reformation", "Bartering", "The Industrial Revolution"], answer: "0", explanation: "Advances in navigational technology allowed Europeans to travel to all corners of the earth." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "'Legitimate trade' in the 19th century was a trade where:", options: ["Africans traded equally with each other", "African raw materials were exchanged for European goods", "Only slaves were traded", "Europeans traded only with Asia"], answer: "1", explanation: "Legitimate commerce = commodity trade after slavery was abolished — African raw products were exchanged for European goods." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Before the 1880s, what percentage of Africa was under foreign rule?", options: ["10%", "50%", "90%", "100%"], answer: "0", explanation: "Before 1880, only 10% of Africa was ruled by foreign powers (mostly coastal areas)." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "The Scramble for Africa occurred from:", options: ["1750s–1780s", "1880s–1900s", "1950s–1960s", "1700s–1750s"], answer: "1", explanation: "The Scramble for Africa = fierce rivalry and rapid colonial expansion from the 1880s to the first decade of the 20th century." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "The Berlin Conference was held in:", options: ["1884–1885", "1880–1882", "1890–1891", "1914–1918"], answer: "0", explanation: "The Berlin Conference was held from 1884 to 1885." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The Berlin Conference was led by:", options: ["Cecil Rhodes", "Otto von Bismarck", "King Leopold II", "Frederick Lugard"], answer: "1", explanation: "German Chancellor Otto von Bismarck led the Berlin Conference." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "How many countries were represented at the Berlin Conference?", options: ["5", "10", "14", "39"], answer: "2", explanation: "Fourteen countries were represented at the Berlin Conference — NONE African." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Which continent was NOT invited to the Berlin Conference?", options: ["Europe", "Asia", "Africa", "America"], answer: "2", explanation: "Africa was NOT invited nor involved in the Berlin Conference." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The Congo Free State was confirmed as the private property of:", options: ["Belgium", "France", "King Leopold II of Belgium", "Germany"], answer: "2", explanation: "The Congo Free State was confirmed as the PERSONAL property of King Leopold II of Belgium." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Free navigation was guaranteed for which two rivers?", options: ["Nile and Amazon", "Niger and Congo", "Zambezi and Nile", "Congo and Nile"], answer: "1", explanation: "Free navigation of the NIGER and CONGO rivers was agreed." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Which was the MAIN economic motive for colonization?", options: ["To spread Christianity", "To exploit raw materials and find new markets", "To stop the slave trade", "To build railroads"], answer: "1", explanation: "The main economic motives were demand for raw materials and need for new market centres." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "The 'White Man's Burden' was a poem written by:", options: ["William Shakespeare", "Rudyard Kipling", "Charles Darwin", "Karl Marx"], answer: "1", explanation: "The poem was written by English poet Rudyard Kipling in 1899." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "The 'civilizing mission' was a rationale for:", options: ["Ending slavery", "Colonization", "Building railroads", "Promoting Islam"], answer: "1", explanation: "The civilizing mission was a rationale for intervention or colonization of non-Western peoples." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Which colonial policy used indigenous African rulers within colonial administration?", options: ["Direct rule", "Indirect rule", "Assimilation", "Settlers rule"], answer: "1", explanation: "Indirect rule used indigenous African rulers within the colonial administration (British policy)." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "The architect of British indirect rule was:", options: ["Cecil Rhodes", "Frederick Lugard", "Albert Sarraut", "Otto von Bismarck"], answer: "1", explanation: "Frederick Lugard was the architect of British indirect rule." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Which country used direct rule and assimilation?", options: ["Britain", "France", "Germany", "Belgium"], answer: "1", explanation: "The French (Belgians, Germans, Portuguese also) used direct rule and assimilation." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "The British South Africa Company was controlled by:", options: ["Cecil Rhodes", "Frederick Lugard", "King Leopold II", "Albert Sarraut"], answer: "0", explanation: "The British South Africa Company was under the control of Cecil Rhodes." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "Which colonial rule used private companies to administer territories?", options: ["Company rule", "Direct rule", "Indirect rule", "Settlers rule"], answer: "0", explanation: "Company rule — private companies administered territories (e.g., B.S.A.C)." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "All forms of colonial rule shared commonly:", options: ["Assimilation policy", "Divide and rule", "Association policy", "Democracy"], answer: "1", explanation: "ALL colonial systems engaged in 'divide and rule' — they were undemocratic and imposed without consent." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "The Maji Maji Uprising was in:", options: ["Kenya", "Tanganyika (Tanzania)", "Nigeria", "Ghana"], answer: "1", explanation: "The Maji Maji Uprising was in Tanganyika (modern Tanzania) from 1905 to 1907." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "The Maji Maji Uprising was against which colonial power?", options: ["Britain", "France", "Germany", "Belgium"], answer: "2", explanation: "The Maji Maji Uprising was against GERMAN colonial rule." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "Who led the Maji Maji Uprising?", options: ["Kinjikitile Ngwale", "Samori Ture", "Urabi Pasha", "Prempe"], answer: "0", explanation: "Prophet Kinjikitile Ngwale led the Maji Maji Uprising." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "Samori Ture resisted which colonial power?", options: ["British", "French", "German", "Portuguese"], answer: "1", explanation: "Samori Ture resisted FRENCH rule in the Mandinka Empire from 1882 to 1898." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "Samori Ture was exiled to:", options: ["Gabon", "Sokoto", "Nairobi", "Egypt"], answer: "0", explanation: "The French captured Samori in 1900 and exiled him to GABON in Central Africa." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Ahmadu Seku was a leader of the:", options: ["Mandinka Empire", "Tukulor Empire", "Asante Kingdom", "Herero people"], answer: "1", explanation: "Ahmadu Seku was a prominent leader of the TUKULOR Empire in West Africa." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Asantehene Prempe resisted which colonial power?", options: ["British", "French", "German", "Portuguese"], answer: "0", explanation: "Asantehene Prempe resisted BRITISH colonial expansion in the Gold Coast (Ghana)." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Colonel Urabi Pasha led resistance in:", options: ["Egypt", "Nigeria", "South Africa", "Kenya"], answer: "0", explanation: "Colonel Urabi Pasha led the Egyptian resistance against British/French domination in 1881." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "The Herero and Nama rebellions were against which colonial power?", options: ["British", "French", "German", "Portuguese"], answer: "2", explanation: "The Herero (1904) and Nama (1905) rebellions were against GERMAN rule in South West Africa (Namibia)." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "European missionaries converted what percentage of non-Muslim Africans outside Ethiopia?", options: ["Less than 1%", "About 25%", "About 50%", "About 90%"], answer: "0", explanation: "Missionaries converted only LESS THAN 1% of non-Muslim Africans (outside Ethiopia) in the last two decades of the 19th century." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "The Berlin Conference marked the:", options: ["End of colonialism", "Real beginning of colonization in Africa", "End of slavery", "Start of WWI"], answer: "1", explanation: "The Berlin Conference marked the REAL BEGINNING of colonization in Africa." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "The principle of 'effective occupation' required:", options: ["Only a flag", "Treaty with local leaders + flag + administration + police", "Only money", "Only military force"], answer: "1", explanation: "Effective occupation required: treaties with local leaders, flying their flag, and establishing administration with police force." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "The doctrine of 'sphere of influence' required:", options: ["Notifying other powers of new territories taken", "Building churches", "Ending slavery", "Paying money"], answer: "0", explanation: "According to Article 34, any new act of taking possession had to be NOTIFIED to other signatory powers." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "Which countries were the MAJOR players at the Berlin Conference?", options: ["France, Germany, Britain, Portugal", "Italy, Spain, Russia, USA", "Denmark, Netherlands, Sweden, Turkey", "Austria-Hungary, Belgium, Russia, USA"], answer: "0", explanation: "France, Germany, Great Britain, and Portugal were the major players." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "Company rule in Africa lasted from:", options: ["1880s to 1924", "1850s to 1900", "1920s to 1960", "1700s to 1800"], answer: "0", explanation: "Company rule was exercised from the 1880s to 1924." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "The main reason for the failure of company rule was:", options: ["Too much money", "Shortage of finance and African opposition", "Lack of territory", "Too many missionaries"], answer: "1", explanation: "Company rule failed due to a shortage of finance and opposition from Africans and missionaries over harsh rule." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "In direct rule, African indigenous rulers were:", options: ["Kept in power", "Removed and replaced by Europeans", "Given more power", "Made kings"], answer: "1", explanation: "In direct rule, African indigenous rulers and local governments were removed and replaced by European personnel." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "Assimilation meant an African could become French after:", options: ["Paying money", "Receiving French education", "Fighting in wars", "Marrying a French person"], answer: "1", explanation: "Under assimilation, an African, after receiving French education, stood a chance of becoming French." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "According to Lugard, indirect rule was preferable because it was:", options: ["Expensive", "Cheapest and most effective", "Difficult", "Unpopular"], answer: "1", explanation: "Lugard argued indirect rule was the CHEAPEST and MOST EFFECTIVE way to administer colonies, and it reduced African resistance." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "The MAIN reason for European colonization of Africa was:", options: ["To establish democracy", "To exploit rich African resources", "To stop the slave trade", "To spread Islam"], answer: "1", explanation: "The economic motive — exploiting rich African resources — was the main reason." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Which was NOT a motive for European colonization?", options: ["Economic gain", "Strategic/military bases", "Civilizing mission", "Establishing democratic regimes in Africa"], answer: "3", explanation: "Establishing democratic regimes was NOT a motive — colonies were undemocratic." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "The 'White Man's Burden' poem reflected the idea that:", options: ["The white race had become a burden on other races", "The white man had a responsibility to civilize other races", "Colonialism was a burden brought by a white man on others", "The white man should not carry the burden of colonialism"], answer: "1", explanation: "Kipling's poem proposed that white people should rule over non-white people until they could take their place by adopting Western ways." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "Civilizing mission as a justification for European colonization:", options: ["Considers other peoples as agents of historical change", "Considers Europe as less civilized", "Considers colonialism as enslavement", "Considers colonialism as good for the colonized"], answer: "3", explanation: "The civilizing mission rationale presented colonialism as GOOD for the colonized — bringing civilization, commerce, and Christianity." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "Which was NOT agreed upon at the Berlin Conference?", options: ["Free trade along major African rivers", "Ground rules for future appropriation", "Recognition of the Congo Free State", "Return of African territories to Africans"], answer: "3", explanation: "The Berlin Conference did NOT agree to return territories to Africans. It divided Africa among Europeans." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "Which country practiced SETTLERS rule in Kenya?", options: ["France", "Britain", "Germany", "Portugal"], answer: "1", explanation: "Kenya was a BRITISH colony where settler rule was practiced." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "Which two colonial powers used direct rule and assimilation?", options: ["Britain and USA", "France and Belgium", "Germany and Russia", "Italy and Spain"], answer: "1", explanation: "The French, Belgians, Germans, and Portuguese used direct rule and assimilation. The strongest examples are France and Belgium." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "The French colonial policy designed by Albert Sarraut was:", options: ["Indirect rule", "Direct rule and assimilation", "Company rule", "Settlers rule"], answer: "1", explanation: "Albert Sarraut designed the French colonial policy of direct rule and assimilation." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "The difference between assimilation and association is:", options: ["Both mean the same", "Assimilation = identity/merging; association = cooperation", "Assimilation = cooperation; association = identity", "Neither exists"], answer: "1", explanation: "Assimilation = identity and merging; Association = cooperation between rulers and ruled, not identity." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Indirect rule aggravated ethnic differences by emphasizing differences in:", options: ["Dialect, dress, religion", "Language only", "Money only", "Food only"], answer: "0", explanation: "British indirect rule aggravated ethnic differences that emphasized differences in dialect of language, dress, and religion." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "The main difference between the British and French colonial policies was:", options: ["British used indirect rule; French used direct rule/assimilation", "British used assimilation; French used indirect rule", "Both used the same system", "Neither used any system"], answer: "0", explanation: "British = indirect rule (using African chiefs); French = direct rule and assimilation (replacing African rulers)." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "Why did the Kikuyu migrate to Nairobi?", options: ["To find gold", "They lost ancestral land to European settlers", "To trade", "To attend school"], answer: "1", explanation: "The Kikuyu lost their ancestral territory in the 'White Highlands' to European settlers and migrated to Nairobi in search of employment." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "Why did early African resistance movements FAIL?", options: ["Africans preferred colonial administration", "Military inferiority and lack of unity", "Europeans were weaker", "Africans had no leaders"], answer: "1", explanation: "Key factors: military inferiority, lack of cooperation/unity, absence of effective organization, poor armament." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "Which was NOT a cause for the failure of early African resistance?", options: ["Absence of effective organization", "Lack of unity among Africans", "Poorly armed", "Africans' inclination to colonial administration"], answer: "3", explanation: "'Africans' inclination to colonial administration' is NOT a cause — Africans actively resisted." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "The Maji Maji movement was characterized as:", options: ["Well-planned with central leadership", "A spontaneous rising with no prior planning", "A European-led movement", "A peaceful movement"], answer: "1", explanation: "The Maji Maji movement was a SPONTANEOUS rising with no previous planning and central leadership." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "The German response to the Maji Maji uprising was called:", options: ["Scorched earth policy", "Peaceful negotiation", "Divide and rule", "Assimilation"], answer: "0", explanation: "The Germans followed a 'scorched earth' policy — destroying villages and crushing the uprising." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "The Maji Maji sacred water was believed to:", options: ["Cure diseases", "Turn enemy bullets into water", "Bring rain", "Feed the people"], answer: "1", explanation: "Kinjikitile Ngwale taught the people that Maji Maji water would turn enemy bullets into water." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Why did the Germans take land in South West Africa?", options: ["For gold mining", "For settlers and grazing land", "For religious purposes", "For sports"], answer: "1", explanation: "German rule was harsh, taking land from Africans and giving it to German settlers. The Herero and Nama peasants were forced to reduce their grazing land." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Britain and France agreed to DUAL CONTROL over Egypt in:", options: ["1869", "1879", "1881", "1900"], answer: "1", explanation: "In 1879, both Britain and France agreed to implement dual control over Egypt." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "Which was a POLITICAL impact of colonial rule?", options: ["Artificial boundaries caused conflicts after independence", "Railways were built", "Rinderpest disease spread", "Christianity spread"], answer: "0", explanation: "Europeans created artificial boundaries without African approval — a legacy causing boundary conflicts after independence." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "Which was an ECONOMIC impact of colonial rule?", options: ["Boundary conflicts", "Africa remained a supplier of raw materials for Europe", "Rinderpest spread", "Tribal warfare increased"], answer: "1", explanation: "Economic impact: Africa remained a supplier of raw materials for Europe and was not allowed to go into manufacturing." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Which was a SOCIAL impact of colonial rule?", options: ["Africa became a supplier of raw materials", "Artificial boundaries were drawn", "Communities were relocated to create white settlement areas", "Africans were not allowed into manufacturing"], answer: "2", explanation: "Social impact: communities were moved and relocated to create white settlement areas for large-scale farming." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "Rinderpest disease affected the livestock of:", options: ["The Kikuyu and Zulu", "The Shona people of Zimbabwe/Botswana and North Ethiopia", "The Masai of Kenya", "The Berbers of North Africa"], answer: "1", explanation: "Rinderpest affected the livestock of the Shona people of present-day Zimbabwe and Botswana, and North Ethiopia during the Kefu Qen." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "Which was a POSITIVE outcome of colonialism?", options: ["Africa was under-developed", "Introduction of modern ideas and construction of railways/roads", "Africans lost independence", "Tribal warfare increased"], answer: "1", explanation: "Positive outcomes: tribal warfare ended, modern ideas introduced, railways and roads built (though mainly to transport raw materials to ports)." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Why did Europeans succeed in quickly partitioning Africa?", options: ["Military superiority and lack of African cooperation", "Africans were rich", "Africa had no armies", "Europeans were peaceful"], answer: "0", explanation: "European victory came from military superiority and lack of cooperation/solidarity among Africans." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "Which were two major players at the Berlin Conference that controlled most of colonial Africa?", options: ["France and Great Britain", "Italy and Spain", "Germany and Russia", "USA and Belgium"], answer: "0", explanation: "France, Germany, Great Britain, and Portugal were the major players. France and Great Britain controlled the most." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "Before the Berlin Conference, Germany had proclaimed which territories as its protectorate?", options: ["Togo, Cameroon, South-West Africa, and later Tanganyika", "Kenya, Nigeria, Egypt", "Angola, Mozambique", "South Africa, Rhodesia"], answer: "0", explanation: "Germany proclaimed Togo, Cameroon, and South-West Africa (1884), and Tanganyika (1885) as its protectorates." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "By 1830, which Balkan country had become independent?", options: ["Serbia", "Bulgaria", "Greece", "Romania"], answer: "2", explanation: "By 1830, Greece became an independent state. Serbia achieved some self-rule." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "Why were missionaries NOT successful in converting Africans?", options: ["They didn't try", "African religions were stronger", "They converted less than 1% in the last two decades of the 19th century", "Africans were too wealthy"], answer: "2", explanation: "They converted less than 1% of non-Muslim Africans (outside Ethiopia) in the last two decades of the 19th century." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "The French colonial approach called 'association' emphasized:", options: ["Complete merging of African and French identity", "Cooperation between ruler and ruled", "Replacing all African rulers with French", "Slavery"], answer: "1", explanation: "Association emphasized cooperation between the ruler and the ruled, unlike assimilation which aimed at merging." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "According to Lugard, indirect rule was preferable because it:", options: ["Paid Africans well", "Reduced African resistance", "Built more churches", "Increased slavery"], answer: "1", explanation: "Lugard argued indirect rule was cheap, effective, and reduced African resistance." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "Samori Ture united people between:", options: ["Nile and Congo", "Niger source and Upper Volta basin", "Zambezi and Limpopo", "Nile and Red Sea"], answer: "1", explanation: "Samori Ture united most people in the vast area between the source of Niger and the Upper Volta basin." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "Which statement about colonialism is TRUE?", options: ["It brought only positive changes", "It brought only negative changes", "It had both positive and negative impacts", "It had no impact"], answer: "2", explanation: "Colonialism had both negative impacts (under-development, loss of independence) and some positive outcomes (end of tribal wars, modern ideas, roads, railways)." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "Company rule was exercised from:", options: ["1880s to 1924", "1900 to 1960", "1950s to 1990", "1800 to 1850"], answer: "0", explanation: "Company rule was exercised from the 1880s to 1924." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Which British company lasted longer in Africa?", options: ["British East African Company", "British South Africa Company", "British West Africa Company", "Royal Niger Company"], answer: "1", explanation: "The British South Africa Company (B.S.A.C), formed in 1887, lasted longer than the British East African Company." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "Which territory was NOT administered by the British South Africa Company?", options: ["Nyasaland", "Northern Rhodesia", "Southern Rhodesia", "Egypt"], answer: "3", explanation: "The B.S.A.C administered Nyasaland, Northern Rhodesia, and Southern Rhodesia — NOT Egypt." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "Which two colonial powers practiced assimilation?", options: ["Britain and Germany", "France and Portugal", "Italy and Spain", "Russia and USA"], answer: "1", explanation: "The French, Belgians, Germans, and Portuguese used direct rule and assimilation. France and Portugal are the strongest examples." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "In 'divide and rule,' Europeans:", options: ["United African groups", "Used African divisions to their advantage", "Gave land to Africans", "Promoted African unity"], answer: "1", explanation: "'Divide and rule' = Europeans exploited existing divisions among Africans to control them more easily." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "What did the Berlin Conference resolve to END in Africa?", options: ["Trade", "Slavery", "Colonialism", "War"], answer: "1", explanation: "The conference resolved to end slavery in Africa." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "Which statement about the Berlin Conference is TRUE?", options: ["Africans participated actively", "Africa was divided without African representation", "Slavery increased", "African leaders signed the agreement"], answer: "1", explanation: "Africa was NOT invited nor involved — the continent was divided without African representation." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Effective occupation required all of the following EXCEPT:", options: ["Treaty with local leaders", "Flying their flag", "Establishing administration with police", "Paying tribute to African kings"], answer: "3", explanation: "Effective occupation did NOT require paying tribute to African kings. It required: treaty, flag, administration with police." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "Which was the fundamental difference between British and French colonial policies?", options: ["British used direct rule; French used indirect rule", "British used indirect rule; French used direct rule", "Both used identical systems", "Neither used African chiefs"], answer: "1", explanation: "British = INDIRECT rule (using African chiefs); French = DIRECT rule and ASSIMILATION (replacing African rulers with Europeans)." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Which factor did NOT contribute to European success in partitioning Africa?", options: ["Military superiority", "Lack of African cooperation", "Fake treaties", "African unity"], answer: "3", explanation: "African UNITY would have stopped Europeans — it was the LACK of unity that helped Europeans." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Which early resistance was characterized as SPONTANEOUS with NO central leadership?", options: ["Maji Maji Uprising", "Urabi Revolt", "Samori Ture's resistance", "Asante resistance"], answer: "0", explanation: "The Maji Maji movement was a spontaneous rising with no previous planning and central leadership." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "Which statement about the Berlin Conference is FALSE?", options: ["Africa was not invited", "The Congo Free State became Leopold II's personal property", "Africa was divided among European powers", "African leaders negotiated terms"], answer: "3", explanation: "African leaders did NOT negotiate terms at Berlin — Africa was not invited or involved." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "Which early resistance leader was exiled to GABON?", options: ["Samori Ture", "Ahmadu Seku", "Prempe", "Urabi Pasha"], answer: "0", explanation: "Samori Ture was exiled to Gabon. Ahmadu Seku was exiled to Sokoto." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "Which early resistance leader was exiled to SOKOTO?", options: ["Samori Ture", "Ahmadu Seku", "Prempe", "Kinjikitile Ngwale"], answer: "1", explanation: "Ahmadu Seku was exiled to Sokoto, where he died." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "The main reason Africans lost to Europeans was:", options: ["African leaders were weak", "Military inferiority and lack of unity", "Africans wanted colonial rule", "Europeans had better food"], answer: "1", explanation: "Military inferiority and lack of cooperation/unity among Africans were the key reasons." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "Which was NOT a feature of settler rule?", options: ["Fertile lands taken from Africans", "Africans became laborers", "Africans became landless tenants", "Africans were given the best lands"], answer: "3", explanation: "Settler rule TOOK the best lands from Africans and gave them to white settlers. Africans became laborers and landless tenants." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "The 'civilizing mission' was problematic because:", options: ["It promoted African culture", "It implied Africans were inferior and Europeans superior", "It ended slavery", "It built railways"], answer: "1", explanation: "The civilizing mission presented Africans as inferior/uncivilized and Europeans as superior/civilized — a racist justification." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "Which statement about colonialism and development is TRUE?", options: ["Colonialism developed African manufacturing", "Colonialism under-developed Africa but built some infrastructure", "Colonialism had no impact", "Colonialism only built schools"], answer: "1", explanation: "Colonialism UNDER-DEVELOPED Africa (raw material supplier, no manufacturing) but built SOME infrastructure (railways, roads — mainly to extract resources)." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "Which was the MOST significant consequence of colonial boundaries?", options: ["They promoted peace", "They caused post-independence conflicts", "They matched ethnic groups perfectly", "They united all Africans"], answer: "1", explanation: "Artificial colonial boundaries became a colonial legacy and caused boundary conflicts among many African nations after independence." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Which resistance leader fought the FRENCH in the Mandinka Empire?", options: ["Samori Ture", "Asantehene Prempe", "Kinjikitile Ngwale", "Urabi Pasha"], answer: "0", explanation: "Samori Ture was a Muslim leader in the Mandinka Empire who fought the French from 1882 to 1898." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Which colonial power established 'Gold Coast' colony over all of Ghana?", options: ["France", "Britain", "Germany", "Portugal"], answer: "1", explanation: "After defeating the Asante resistance, Britain established the Gold Coast colony over all of Ghana in 1900." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "In which country did Urabi Pasha lead a revolt?", options: ["Sudan", "Egypt", "Libya", "Morocco"], answer: "1", explanation: "Urabi Pasha led the Egyptian resistance against Anglo-French domination in 1881–82." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "Which pair is correctly matched?", options: ["Samori Ture — French", "Kinjikitile Ngwale — French", "Asantehene Prempe — German", "Urabi Pasha — German"], answer: "0", explanation: "Samori Ture = French. Kinjikitile = German. Prempe = British. Urabi Pasha = British." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "Which colonial power used 'association' as a policy?", options: ["Britain", "France", "Germany", "Portugal"], answer: "1", explanation: "France used both 'assimilation' and 'association' policies in different contexts." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "Which statement BEST explains why Berlin Conference was significant?", options: ["It ended all wars", "It laid international guidelines for colonizing Africa", "It gave Africa back to Africans", "It promoted African independence"], answer: "1", explanation: "The Berlin Conference laid international guidelines (38 articles) for colonization and marked the real beginning of colonization in Africa." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "Which was a consequence of the Berlin Conference?", options: ["Africa remained 90% free", "European powers divided Africa among themselves", "Slavery increased", "Africa gained independence"], answer: "1", explanation: "After Berlin, European powers divided Africa among themselves — African colonization accelerated rapidly." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "Which historical interpretation of colonialism is MOST accurate?", options: ["Colonialism was entirely positive", "Colonialism was entirely negative", "Colonialism had both exploitative and some developmental impacts", "Colonialism had no impact on Africa"], answer: "2", explanation: "Historians recognize that colonialism had BOTH exploitative impacts (under-development, loss of independence) and some developmental impacts (railways, modern ideas, end of tribal wars)." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "easy", stem: "Define colonialism and explain its connection to imperialism.", answer: "COLONIALISM = the direct and total dominance of one country by another based on the possession of state authority by a foreign power. It occurs when one country subjugates another, conquering and exploiting its people.\n\nIMPERIALISM = the policy or belief of using power and influence to rule another nation or people.\n\nCONNECTION: The two concepts are inextricably tied — colonialism is the PRACTICE, and imperialism is the POLICY/BELIEF that justifies it.", explanation: "Colonialism = practice; imperialism = policy." },
    { id: "q102", type: "short", difficulty: "easy", stem: "Explain 'legitimate trade' and its effect on Africa.", answer: "LEGITIMATE TRADE = commodity trade between Africans and European merchants after the Atlantic slave trade was abolished.\n\n• African raw products (especially cash crops) were exchanged for European goods\n• Shifted the relationship from human merchandise to tropical crops\n\nEFFECT:\n• Heightened competitiveness between European powers\n• Resulted in a RACE FOR AFRICA (Scramble)\n• Increased European interest in controlling African territories", explanation: "Raw materials replaced slaves; led to Scramble." },
    { id: "q103", type: "short", difficulty: "easy", stem: "List the four main motives for European colonization of Africa.", answer: "1) ECONOMIC (most important): Demand for raw materials and need for new markets; Africa had untapped resources (gold, diamonds, cotton, palm oil, etc.)\n\n2) POLITICAL/STRATEGIC: Power and prestige; strategic territories; military/naval bases\n\n3) CIVILIZING MISSION / WHITE MAN'S BURDEN: Claimed a mission to spread civilization, commerce, and Christianity; Kipling's poem (1899)\n\n4) RELIGIOUS: Some missionaries supported colonization to facilitate their activities", explanation: "Economic, political, civilizing, religious." },
    { id: "q104", type: "short", difficulty: "easy", stem: "What were the main agreements of the Berlin Conference?", answer: "BERLIN CONFERENCE (1884–85) — main agreements:\n\n1) PRINCIPLE OF EFFECTIVE OCCUPATION (Article 35): Powers could acquire land only if they had treaties with local leaders, flew their flag, and established administration with police.\n\n2) DOCTRINE OF SPHERE OF INFLUENCE (Article 34): Any new taking of coastal territory had to be notified to other signatories.\n\n3) CONGO FREE STATE: Confirmed as private property of King Leopold II of Belgium.\n\n4) FREE NAVIGATION of the Niger and Congo rivers.\n\n5) Resolved to END SLAVERY in Africa.", explanation: "Effective occupation, sphere of influence, Congo, rivers, anti-slavery." },
    { id: "q105", type: "short", difficulty: "medium", stem: "Compare company rule with direct rule.", answer: "COMPANY RULE:\n• Private companies administered territories\n• Formed by businessmen exploiting resources\n• Example: British South Africa Company (Cecil Rhodes)\n• Period: 1880s to 1924\n• FAILED due to shortage of finance + African/missionary opposition\n\nDIRECT RULE:\n• African indigenous rulers removed\n• Replaced by European personnel\n• Used by French, Belgians, Germans, Portuguese\n• African chiefs used only at lower levels\n• French considered colonies part of France\n• Architected by Albert Sarraut (French)\n\nKEY DIFFERENCE: Company rule = private administration; Direct rule = European government administration.", explanation: "Company = private; Direct = European personnel." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Explain the difference between assimilation and association.", answer: "ASSIMILATION:\n• African receiving French education could 'become French'\n• Accepted inherent superiority of French culture\n• Extended French language, institutions, laws, customs\n• Aimed at MERGING African identity into French identity\n\nASSOCIATION:\n• OPPOSITE idea of assimilation\n• Relationship between conqueror and conquered = COOPERATION\n• NOT identity and merging\n• Emphasized cooperation between rulers and ruled\n\nKEY DIFFERENCE: Assimilation = identity/merging; Association = cooperation.", explanation: "Merging vs cooperation." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Explain the British indirect rule and its effects.", answer: "INDIRECT RULE (British):\n• Used indigenous African rulers within colonial administration\n• Architect: Frederick Lugard\n• Book: 'The Dual Mandate in British Tropical Africa' (1922)\n• Greater use of African customary law than the French\n\nLUGARD'S REASONS:\n1) Cheapest way to administer\n2) Most effective\n3) Reduced African resistance\n\nEFFECTS:\n• Aggravated ETHNIC DIFFERENCES\n• Emphasized differences in dialect, dress, religion\n• Preserved some traditional structures but under European control", explanation: "Lugard = architect; effects = aggravated ethnic differences." },
    { id: "q108", type: "short", difficulty: "medium", stem: "Describe settler rule and where it was practiced.", answer: "SETTLERS RULE:\n• Europeans came and settled in Africa\n• DISPLACED indigenous Africans\n• Fertile lands taken from Africans and given to MINORITY WHITE SETTLERS\n• Administration was HARSH and RACIST\n• Africans became LABORERS and LANDLESS TENANTS\n\nWHERE:\n• Southern Africa: South Africa, Southern & Northern Rhodesia (Zimbabwe & Zambia), Angola, Mozambique, South West Africa (Namibia)\n• East Africa: Kenya (British)\n• North Africa: Algeria (French)\n\nEXAMPLE — KENYA:\n• The Kikuyu lost their ancestral territory in the 'White Highlands'\n• Migrated to Nairobi in search of employment", explanation: "Southern/East/North Africa; displaced Africans." },
    { id: "q109", type: "short", difficulty: "medium", stem: "What were the common features of all colonial systems?", answer: "Despite differences, ALL colonial governments shared:\n\n1) UNDEMOCRATIC — no real participation by Africans\n\n2) IMPOSED WITHOUT CONSENT — colonial rule was imposed on African people without their agreement\n\n3) 'DIVIDE AND RULE' — all engaged in exploiting divisions among Africans to maintain control\n\nThese features made colonialism fundamentally exploitative and oppressive, regardless of the specific administrative model used.", explanation: "Undemocratic + imposed + divide and rule." },
    { id: "q110", type: "short", difficulty: "medium", stem: "Describe the Maji Maji Uprising and why it is significant.", answer: "MAJI MAJI UPRISING (1905–1907):\n• In Tanganyika (modern Tanzania)\n• MOST SIGNIFICANT African challenge to German colonial rule\n\nCAUSES:\n• High taxation\n• Forced labor\n• Forced cotton growing\n• Forced road building\n\nLEADER: Prophet Kinjikitile Ngwale\n• Taught people to sprinkle 'Maji Maji' water on their bodies\n• Promised it would turn enemy bullets into water\n\nSPREAD: 20 different ethnic groups joined\n\nGERMAN RESPONSE: 'Scorched earth' policy — destroyed villages\n\nSIGNIFICANCE: Showed African resistance to German rule, but also revealed the weakness of spontaneous (unplanned) uprisings against superior military power.", explanation: "Tanganyika, 1905–07, spontaneous, against Germans." },
    { id: "q111", type: "short", difficulty: "medium", stem: "Why did early African resistance movements fail?", answer: "Early African resistance movements FAILED because:\n\n1) MILITARY INFERIORITY — European powers used professional, well-trained armies with superior weapons (machine guns, rifles)\n\n2) LACK OF COOPERATION AND SOLIDARITY — African kingdoms were divided and lacked unity\n\n3) ABSENCE OF EFFECTIVE ORGANIZATION — many movements were spontaneous without central leadership or planning\n\n4) POORLY ARMED — Africans had spears, swords vs European guns\n\n5) DIVIDE AND RULE — Europeans exploited African divisions\n\n6) FAMINE AND DISEASE — weakened African resistance\n\nThe combination of these factors made it impossible to defeat European military power.", explanation: "Military, unity, organization, weapons." },
    { id: "q112", type: "short", difficulty: "medium", stem: "Describe the political, economic, and social impacts of colonial rule.", answer: "POLITICAL:\n• Africans lost independence and freedom\n• African indigenous administrations destroyed\n• Europeans created artificial boundaries without African approval\n• Boundary conflicts after independence\n\nECONOMIC:\n• Under-development of African territories\n• Africa remained a raw material supplier for Europe\n• Africans not allowed into manufacturing\n• Colonial education made Africans abandon indigenous skills\n• Natural resources exploited\n\nSOCIAL:\n• Communities relocated to create white settlements\n• New diseases introduced (e.g., Rinderpest)\n• Disrupted traditional way of living\n\nPOSITIVE OUTCOMES (few):\n• Tribal warfare ended\n• Modern ideas introduced\n• Railways and roads built (to transport raw materials)", explanation: "Political = boundaries; Economic = under-development; Social = relocation + disease." },
    { id: "q113", type: "short", difficulty: "hard", stem: "Evaluate the 'civilizing mission' as a justification for colonialism.", answer: "THE CIVILIZING MISSION:\n• Europeans claimed a mission to spread civilization, commerce, and Christianity\n• Presented in Kipling's poem 'The White Man's Burden' (1899)\n• Proposed that white people should rule over non-white people until they could take their place by adopting Western ways\n\nPROBLEMS:\n1) RACIST — presented Africans as 'half-devil and half child' (Kipling)\n2) Paternalistic — treated Africans as children needing European guidance\n3) HYPOCRITICAL — 'civilization' was accompanied by exploitation and violence\n4) SELF-SERVING — used to justify economic and political domination\n5) BIASED — assumed European culture was superior\n\nCONCLUSION: The civilizing mission was a RATIONALE (excuse), not a genuine justification. Economic and political interests were the real motives.", explanation: "Rationale not justification; racist and hypocritical." },
    { id: "q114", type: "short", difficulty: "hard", stem: "Compare the British and French colonial policies in Africa.", answer: "SIMILARITIES:\n• Both were UNDEMOCRATIC\n• Both imposed without African consent\n• Both used 'DIVIDE AND RULE'\n• Both exploited African resources\n• Both were racist in practice\n\nDIFFERENCES:\n• BRITAIN — INDIRECT RULE (Frederick Lugard)\n  - Used African chiefs and customary law\n  - Cheaper and reduced resistance\n  - Aggravated ethnic differences\n\n• FRANCE — DIRECT RULE and ASSIMILATION (Albert Sarraut)\n  - Replaced African rulers with Europeans\n  - Aimed to 'make Africans French' through education\n  - Considered colonies part of France\n  - Practiced 'association' in some contexts\n\nKEY CONTRAST: Britain = indirect (using African structures); France = direct (replacing African structures).", explanation: "Similarities: undemocratic, divide and rule. Differences: indirect vs direct." },
    { id: "q115", type: "short", difficulty: "hard", stem: "Explain why colonial boundaries still cause conflicts in Africa today.", answer: "COLONIAL BOUNDARIES WERE ARTIFICIAL:\n\n1) Created WITHOUT African approval — Europeans drew lines on maps\n\n2) GROUPED TOGETHER people who had never been united under the same government before (e.g., different ethnic groups in one colony)\n\n3) DIVIDED existing groups of people (e.g., same ethnic group split between two colonies)\n\nCONSEQUENCES:\n• After independence, these boundaries remained\n• Ethnic groups that were divided sought to reunite\n• Ethnic groups that were forced together sought to separate\n• Boundary disputes between neighboring states\n• Examples: Nigeria (Biafra), Sudan (South Sudan), Rwanda, Somalia\n\nCONCLUSION: Colonial boundaries created by Europeans for European convenience have been a source of conflict for over 60 years.", explanation: "Artificial boundaries; group and split; ongoing conflicts." },
    { id: "q116", type: "short", difficulty: "hard", stem: "Which single factor do you think most contributed to European success in colonizing Africa? Explain.", answer: "MILITARY SUPERIORITY was the most critical factor.\n\nREASONS:\n1) European armies were PROFESSIONAL and well-trained\n2) Superior WEAPONS — machine guns vs spears and old rifles\n3) Access to advanced technology\n4) Could recruit Africans to fight other Africans\n\nOTHER FACTORS:\n• Lack of African unity\n• Fake treaties (e.g., Wuchale)\n• Divide and rule\n• Missionaries as advance agents\n\nCOUNTERARGUMENT: Without African disunity, even superior weapons might not have been enough to conquer all of Africa so quickly.\n\nCONCLUSION: The combination of military superiority and African disunity was the most decisive factor. Africans were not weak — they were DIVIDED.", explanation: "Military superiority + African disunity." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Analyze the statement: 'Colonialism benefited Africa.'", answer: "This statement is PARTIALLY TRUE but overall MISLEADING.\n\nARGUMENTS FOR (limited positives):\n• Tribal warfare ended\n• Railways and roads were built\n• Some modern ideas and education introduced\n• Some modern medicine brought\n\nARGUMENTS AGAINST (more significant):\n• Africa was UNDER-DEVELOPED — kept as raw material supplier\n• Africans LOST INDEPENDENCE\n• ARTIFICIAL BOUNDARIES caused ongoing conflicts\n• NATURAL RESOURCES EXPLOITED\n• Indigenous cultures DISRUPTED\n• DISEASES brought (Rinderpest)\n• Colonial education displaced indigenous skills\n• Railways built for EXTRACTION, not African development\n• HUGE loss of life (e.g., Congo under Leopold II — estimated 10 million)\n\nCONCLUSION: The negative impacts FAR OUTWEIGH the limited positive outcomes. Colonialism was primarily exploitative. The 'benefits' were often by-products of exploitation.", explanation: "Mostly negative; limited positives often by-products of exploitation." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Why did some African leaders choose diplomacy while others chose armed resistance?", answer: "FACTORS INFLUENCING THE CHOICE:\n\nDIPLOMACY:\n• Initial approach for some (e.g., Ahmadu Seku)\n• Tried peaceful negotiation when possible\n• When Europeans broke promises, diplomacy failed\n• Some leaders believed accommodation was safer\n\nARMED RESISTANCE:\n• When diplomacy failed (broken treaties)\n• When land or sovereignty was directly threatened\n• When leaders had strong military traditions\n• Examples: Samori Ture (30,000 army), Maji Maji, Herero/Nama\n\nMIXED:\n• Some tried diplomacy first, then resorted to arms\n• Others attempted both simultaneously\n\nPATTERN:\n1) Initial diplomacy\n2) Broken promises\n3) Armed resistance\n4) Defeat (due to military inferiority)\n\nCONCLUSION: The choice depended on circumstances, leadership, and European demands. Most eventually turned to arms when diplomacy failed.", explanation: "Diplomacy first, then arms when betrayed." },
    { id: "q119", type: "short", difficulty: "hard", stem: "Explain the significance of Berlin Conference in the history of modern Africa.", answer: "BERLIN CONFERENCE SIGNIFICANCE:\n\n1) MARKED THE REAL BEGINNING OF COLONIZATION in Africa\n\n2) DIVIDED AFRICA among European powers — without African representation\n\n3) ESTABLISHED RULES for colonization (effective occupation, sphere of influence)\n\n4) LEGITIMIZED SCRAMBLE FOR AFRICA — accelerated European expansion\n\n5) CREATED ARTIFICIAL BOUNDARIES — which remain today\n\n6) IGNORED AFRICAN SOVEREIGNTY — African rulers had no voice\n\n7) LEGACY OF CONFLICT — boundary disputes, ethnic divisions\n\n8) DEMOGRAPHIC IMPACT — eventual massive population disruption\n\n9) 38 ARTICLES became international law for colonization\n\n10) CONGO — confirmed as Leopold II's personal property, leading to horrific abuses\n\nCONCLUSION: Berlin Conference was one of the most consequential events in modern African history — its impact continues today.", explanation: "Beginning of colonization; division; ongoing impact." },
    { id: "q120", type: "short", difficulty: "hard", stem: "What role did missionaries play in European colonization of Africa?", answer: "MISSIONARIES PLAYED A COMPLEX ROLE:\n\nPOSITIVE ASPECTS (claimed):\n• Genuine intention to evangelize\n• Introduced some education and literacy\n• Some provided medicine\n\nNEGATIVE/CONTROVERSIAL ASPECTS:\n1) CAME ALONGSIDE colonial administrators and traders\n2) COOPERATED with colonial powers — depended on them for security\n3) PREACHED 'Christianity, commerce and civilization' — legitimizing European control\n4) SOME SUPPORTED COLONIZATION — believed European control would facilitate missionary activities\n5) LOW SUCCESS — converted <1% of non-Muslim Africans outside Ethiopia\n6) When failing, APPEALED TO GOVERNMENTS FOR HELP — contributing to colonization\n7) CULTURAL DESTRUCTION — devalued African traditions\n\nPARADOX: Missionaries came with 'good intentions' but their presence and appeals to governments helped enable colonization.\n\nCONCLUSION: Missionaries were AMBIGUOUS — not the primary colonizers, but their cooperation with colonial powers contributed to conquest and control.", explanation: "Cooperation, appeal to governments, less than 1% success." },
  ],
};