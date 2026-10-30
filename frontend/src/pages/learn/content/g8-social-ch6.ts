import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 SOCIAL STUDIES — UNIT 6
// MODERN HISTORY OF ETHIOPIA
// Source: AAEB Grade 8 Social Studies Student Textbook (pp. 147–185)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8SocialCh6: Chapter = {
  id: "ch6",
  number: 6,
  title: "Modern History of Ethiopia",
  titleAm: "የኢትዮጵያ ዘመናዊ ታሪክ",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. Formation of the Modern Ethiopian Empire",
      titleAm: "ዘመናዊው የኢትዮጵያ ግዛት ምስረታ",
      body:
        "Banchi, after the Era of Princes (Zemene Mesafint), Ethiopia was divided. Three emperors reunited it: Tewodros II, Yohannes IV, and Menilek II.",
      bodyAm:
        "ባንቺ፣ ከመሳፍንት ዘመን በኋላ ኢትዮጵያ ተከፋፍላ ነበር። ሦስት ነገሥታት አንድ አደረጉዋት፡ ዓፄ ቴዎድሮስ ዳግማዊ፣ ዓፄ ዮሐንስ ራብዓዊ እና ዓፄ ምኒልክ ዳግማዊ።",
      children: [
        {
          id: "n1-1",
          title: "Emperor Tewodros II (1855–1868)",
          titleAm: "ዓፄ ቴዎድሮስ ዳግማዊ (1855–1868)",
          body:
            "• Born as Kassa Hailu.\n" +
            "• Defeated regional lords in a series of battles:\n" +
            "   - 1852 Battle of Guramba (defeated Goshu Zewude of Gojjam)\n" +
            "   - 1853 Battle of Gorgora Bichen\n" +
            "   - 1853 Battle of Ayshal (defeated Ras Ali II — end of Era of Princes)\n" +
            "   - 1855 Battle of Darasge (defeated Ras Wube)\n" +
            "• Crowned Emperor Tewodros II on Feb 8, 1855 at Darasge Mariam church.\n" +
            "• Wanted to unite Ethiopia under one king, but rebellions covered the whole kingdom.\n" +
            "• Committed suicide at Maqdala in 1868 (refused to be captured by the British).",
          bodyAm:
            "• ቀድሞ ካሳ ኃይሉ ይባል ነበር።\n• በተከታታይ ጦርነቶች የክልል መኳንንትን አሸነፈ።\n• በ1855 ዓፄ ቴዎድሮስ ዳግማዊ ተብሎ ተቀደሰ።\n• በ1868 በመቅደላ ራሱን አጠፋ (በእንግሊዞች ላለመያዝ)።",
        },
        {
          id: "n1-2",
          title: "Emperor Yohannes IV (1872–1889)",
          titleAm: "ዓፄ ዮሐንስ ራብዓዊ (1872–1889)",
          body:
            "• Born as Kassa Mercha.\n" +
            "• 1871 Battle of Assam (defeated Takla-Giyorgis — Wag Shum Gobeze).\n" +
            "• Crowned Emperor Yohannes IV on January 21, 1872.\n" +
            "• Used a policy of EQUILIBRIUM (balance) between regional governors.\n" +
            "• Key events:\n" +
            "   - 1875–1876 Battles of Gundat and Gura (defeated Egypt)\n" +
            "   - 1878 Leche Agreement with Menilek (Menilek accepted Yohannes as overlord)\n" +
            "   - 1884 Hewett (Adwa) Treaty with Britain\n" +
            "   - 1885 Battle of Kufit (defeated Mahdists)\n" +
            "   - Killed at Battle of Matamma, March 9, 1889, fighting Mahdists.",
          bodyAm:
            "• ቀድሞ ካሳ መርጫ ይባል ነበር።\n• በ1872 ዓፄ ዮሐንስ ራብዓዊ ሆነ።\n• በክልል ገዥዎች መካከል የተመጣጠነ ፖሊሲ ተጠቀመ።\n• በ1875–76 ግንዳት እና ጉራ ጦርነቶችን አሸነፈ።\n• በመጋቢት 9, 1889 በመጣማ ጦርነት ላይ ተገደለ።",
        },
        {
          id: "n1-3",
          title: "Emperor Menilek II (1889–1913)",
          titleAm: "ዓፄ ምኒልክ ዳግማዊ (1889–1913)",
          body:
            "Used TWO methods to unite Ethiopia: peaceful submission and armed resistance.\n\n" +
            "• 1875–76: campaigns to Gurage and Oromo areas\n" +
            "• Northern Gurage (Kestane) submitted peacefully\n" +
            "• Western Gurage (led by Hasan Enjamo of Qabena) resisted until 1888\n" +
            "• 1882–1886: Gibe Oromo states submitted peacefully (Kumsa Moreda, Joti Tullu, Abba Jifar II of Jimma)\n" +
            "• Arsi resisted fiercely — defeated at Battle of Azule, September 1886\n" +
            "• Harar: captured at Battle of Chalanqo, January 6, 1887\n" +
            "• Walayta resisted until 1894 (Kawo Tona captured)\n" +
            "• Kaffa resisted until 1897 (Tato Gaki Sherocho captured)\n" +
            "• Belashangul: 1897 (Ras Makonnen + Sheikh Khojale helped)\n" +
            "• By 1900 Ethiopia ended its modern empire formation",
          bodyAm:
            "ሁለት ዘዴዎችን ተጠቀመ፡ ሰላማዊ መገዛት እና በጦር መቃወም።\n• ሰሜን ጉራጌ ሰላማዊ፣ ምዕራብ ጉራጌ ተቃወመ (1888)\n• አርሲ በአዙሌ ጦርነት (1886) ተሸነፈ\n• ሐረር በቻላንቆ (1887) ተያዘ\n• ወላይታ እስከ 1894፣ ካፋ እስከ 1897\n• በ1900 ኢትዮጵያ የዘመናዊውን ግዛት ምስረታ ጨረሰች።",
        },
        {
          id: "n1-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, BIG exam trap: Tewodros = Kassa Hailu (1855–1868), died at Maqdala. Yohannes = Kassa Mercha (1872–1889), died at Matamma. Menilek = (1889–1913), won Adwa. Do NOT swap their birth names or death places.",
          bodyAm:
            "ባንቺ፣ ትልቅ ወጥመድ፡ ቴዎድሮስ = ካሳ ኃይሉ (1855–1868)፣ በመቅደላ ሞተ። ዮሐንስ = ካሳ መርጫ (1872–1889)፣ በመጣማ ሞተ። ምኒልክ = (1889–1913)፣ በአድዋ አሸነፈ።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Long Distance Trade",
      titleAm: "የረጅም ርቀት ንግድ",
      body:
        "Banchi, after land, long distance trade was the most important source of income for Ethiopia's economy. The rulers paid great attention to controlling trade routes and sources.",
      bodyAm:
        "ባንቺ፣ ከመሬት ቀጥሎ የረጅም ርቀት ንግድ ለኢትዮጵያ ኢኮኖሚ በጣም አስፈላጊ የገቢ ምንጭ ነበር።",
      children: [
        {
          id: "n2-1",
          title: "Why trade direction changed (19th–20th century)",
          titleAm: "የንግድ አቅጣጫ ለምን ተቀየረ",
          body:
            "Changed from NORTH to SOUTH and EASTWARD because:\n" +
            "• Shawan victory over Gojjam at Battle of Embabo (1882)\n" +
            "• Decline of Gondar and Matamma (Ethio-Mahdist hostilities)\n" +
            "• Foundation and growth of Addis Ababa as political center\n" +
            "• Opening of Djibouti-Addis Ababa railway\n" +
            "• Establishment of Gambella as a major outlet\n" +
            "• Decline of Massawa and Assab ports due to Italo-Ethiopian conflict",
          bodyAm:
            "ከሰሜን ወደ ደቡብና ምስራቅ ተቀየረ፡\n• የኤምባቦ ጦርነት (1882)\n• የጎንደርና መጣማ ውድቀት\n• አዲስ አበባ መመስረት\n• የጅቡቲ-አዲስ አበባ ባቡር መከፈት\n• ጋምቤላ እንደ ዋና መውጫ\n• የመሳዋና አሰብ ወደቦች ውድቀት",
        },
        {
          id: "n2-2",
          title: "Change of trade items",
          titleAm: "የንግድ ዕቃዎች ለውጥ",
          body:
            "BEFORE (early 19th c.): ivory, civet musk dominated.\n" +
            "AFTER: COFFEE became the principal export. COTTON SHEETING (abujedie) became a major import.\n\n" +
            "The traders who controlled Ethiopia's long distance trade were mostly: Indian, Greek, Armenian, Jewish, Yemeni, and Syrian immigrants.",
          bodyAm:
            "ቀድሞ፡ የዝሆን ጥርስ እና ሲቬት ሙሽክ ዋና ነበሩ።\nበኋላ፡ ቡና ዋና ወደ ውጭ የሚላክ ሆነ። የጥጥ ጨርቅ (አቡጀዲ) ዋና ገቢ ሆነ።\nተቆጣጣሪዎቹ፡ ሕንዳውያን፣ ግሪኮች፣ አርመኖች፣ አይሁዶች፣ የመናውያን እና ሶሪያውያን ስደተኞች ነበሩ።",
        },
        {
          id: "n2-3",
          title: "Medium of exchange",
          titleAm: "የልውውጥ መንገድ",
          body:
            "The Bank of Abyssinia (opened March 1905, capital $100,000) played a great role in minting coins and issuing notes as a medium of exchange.",
          bodyAm:
            "የአቢሲኒያ ባንክ (መጋቢት 1905፣ ካፒታል 100,000 ዶላር) ሳንቲም በመቅረጽ እና ኖት በማውጣት ትልቅ ሚና ተጫውቷል።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Ethiopia and the Outside World",
      titleAm: "ኢትዮጵያ እና የውጭው ዓለም",
      body:
        "Banchi, each emperor had different relations with foreign powers. The pattern matters for exams.",
      bodyAm:
        "ባንቺ፣ እያንዳንዱ ንጉሠ ነገሥት ከውጭ ኃያላን ጋር የተለያየ ግንኙነት ነበረው።",
      children: [
        {
          id: "n3-1",
          title: "Tewodros II and Britain",
          titleAm: "ቴዎድሮስ ዳግማዊ እና ብሪታንያ",
          body:
            "Tewodros wanted BRITISH help to build an arms industry. He set up an arms foundry at Gafat (near Dabra Tabor) with European missionaries. Produced a small mortar and cannon called 'Sebastopol'.\n" +
            "Britain refused to help. Tewodros imprisoned the Europeans. Britain sent an expeditionary force (32,000 troops under Sir Robert Napier) in 1867. Battle at Aroge (April 10, 1868). Tewodros committed suicide at Maqdala.",
          bodyAm:
            "ቴዎድሮስ ብሪታንያ የጦር መሣሪያ ኢንዱስትሪ እንድትረዳው ፈለገ። በጋፋት (ደብረ ታቦር አጠገብ) የጦር መሣሪያ ፋብሪካ ከፈተ። 'ሰባስቶፖል' የተባለ መድፍ ሠራ።\nብሪታንያ ለመርዳት ፈቃደኛ አልሆነችም። ቴዎድሮስ አውሮፓውያንን አሰረ። ብሪታንያ በ1867 ጦር ላከች። ቴዎድሮስ በመቅደላ ራሱን አጠፋ።",
        },
        {
          id: "n3-2",
          title: "Yohannes IV and Europe",
          titleAm: "ዮሐንስ ራብዓዊ እና አውሮፓ",
          body:
            "After the Egyptian invasion, Yohannes sent J.C. Kirkham as special envoy to Queen Victoria (Britain), President of France, and Emperors of Austria, Germany, and Russia. But the diplomatic mission FAILED — only Russia responded somewhat; the others ignored or sent vague letters.",
          bodyAm:
            "ከግብጽ ወረራ በኋላ ዮሐንስ ጄ.ሲ. ኪርካምን ልዩ መልእክተኛ አድርጎ ወደ ንግሥት ቪክቶሪያ እና ሌሎች ላከ። ግን ልዑካኑ አልተሳካም።",
        },
        {
          id: "n3-3",
          title: "Menilek II and Italy — 3 treaties",
          titleAm: "ምኒልክ ዳግማዊ እና ጣሊያን — 3 ስምምነቶች",
          body:
            "1) 1883 Treaty with Count Pietro Antonelli: consular exchange, free movement, free trade, free religion.\n" +
            "2) 1887 Treaty (after Italian defeat at Dogali): Italy got Menilek's neutrality; Menilek promised 5,000 rifles.\n" +
            "3) 1889 Treaty of WUCHALE: written in Amharic AND Italian. Articles III and XVII were controversial. Italian version said Ethiopia consented to Italian protectorate. Amharic version said Ethiopia could use Italy as a channel for foreign affairs (optional, not obligatory).\n\n" +
            "Result: Italian protectorate claim accepted by 12 European countries + USA. Russia protested. Led to Battle of Adwa (1896).",
          bodyAm:
            "1) 1883፡ ከኮንቴ ፒዬትሮ አንቶኔሊ ጋር።\n2) 1887፡ ከዶጋሊ ሽንፈት በኋላ።\n3) 1889፡ የውጫሌ ስምምነት። በአማርኛና በጣሊያንኛ ተጻፈ። አንቀጽ III እና XVII አከራካሪ ነበሩ።\nጣሊያን ፕሮቴክቶሬት አወጀች። 12 የአውሮፓ አገሮችና አሜሪካ ተቀበሉ። ሩሲያ ተቃወመች። ወደ አድዋ ጦርነት (1896) መራ።",
        },
        {
          id: "n3-4",
          title: "Lej Iyyasu (1913–1916)",
          titleAm: "ልጅ ኢያሱ (1913–1916)",
          body:
            "• Supported Sayyid Muhammad Abdille Hasan (Somali leader fighting British and Italian colonial rule).\n" +
            "• Made relations with GERMANY and TURKEY (both tried to recruit him against Britain, France, Italy).\n" +
            "• This alarmed Britain, France, Italy — a factor for his removal.",
          bodyAm:
            "• ሰይድ መሐመድ አብዲለ ሐሰንን ደገፈ።\n• ከጀርመንና ከቱርክ ጋር ተቀራረበ።\n• ብሪታንያ፣ ፈረንሳይና ጣሊያን ተጨነቁ። ይህ ለውድቀቱ ምክንያት ሆነ።",
        },
        {
          id: "n3-5",
          title: "Empress Zewditu (1916–1930) and Haile Selassie I (1930–1974)",
          titleAm: "እቴጌ ዘውዲቱ እና ዓፄ ኃይለ ሥላሴ",
          body:
            "• 1920s: Ras Teferi Mekonnen sent ~200 Ethiopians abroad for education (France and Egypt mainly).\n" +
            "• Italy supported Ethiopia's entry to the League of Nations (1923), and welcomed Ras Teferi in Rome (1924). Signed Treaty of Peace and Friendship (1928).\n" +
            "• Haile Selassie sought US assistance after restoration. Ethio-US relations began in 1903 (Skinner Mission). In 1943, Yilma Deresa visited USA — first official contact.\n" +
            "• US Aid: military, airlines, roads, telegraph, education.",
          bodyAm:
            "• በ1920ዎቹ ራስ ተፈሪ መኮንን ~200 ኢትዮጵያውያንን ወደ ውጭ ለትምህርት ላከ።\n• ጣሊያን ኢትዮጵያ ወደ መንግሥታት ማኅበር እንድትገባ ደገፈች (1923)።\n• ኃይለ ሥላሴ ከአሜሪካ እርዳታ ፈለጉ። በ1943 ይልማ ደሬሳ አሜሪካን ጎበኙ — የመጀመሪያ ይፋዊ ግንኙነት።",
        },
        {
          id: "n3-6",
          title: "Derg (1974–1991) and the USSR",
          titleAm: "ደርግ እና ሶቭየት ሕብረት",
          body:
            "• After 1974 uprising, Ethiopia turned to the Soviet Union.\n" +
            "• USSR (with Cuba and Yemen) gave military support during the Ethio-Somali War (1977).\n" +
            "• Late 1980s: Gorbachev's reforms, USSR refused further aid. By late 1990 the alliance ended.",
          bodyAm:
            "• ከ1974 አብዮት በኋላ ኢትዮጵያ ወደ ሶቭየት ሕብረት ዞረች።\n• በ1977 በኢትዮ-ሶማሊ ጦርነት ወቅት ሶቭየት እና ኩባ ወታደራዊ ድጋፍ ሰጡ።\n• በ1990 መጨረሻ ጥምረቱ አበቃ።",
        },
        {
          id: "n3-7",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: THREE Wuchale-related points — Amharic vs Italian versions differed. Italy used the ITALIAN version to claim protectorate. Menilek used the AMHARIC version to refuse. Result: Battle of Adwa.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ የውጫሌ ስምምነት በአማርኛና በጣሊያንኛ ተለያይቷል። ጣሊያን የጣሊያንኛውን ተጠቅማ ፕሮቴክቶሬት አወጀች። ምኒልክ የአማርኛውን ተጠቅሞ ተቃወመ። ውጤቱ፡ የአድዋ ጦርነት።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Unity of Ethiopians in Defense of Sovereignty",
      titleAm: "የኢትዮጵያውያን አንድነት ሉዓላዊነትን ለመከላከል",
      body:
        "Banchi, Ethiopia faced MANY invaders over centuries: Ottoman Turks, Egyptians, Mahdists, Italians, and later Somalia. Each time, Ethiopians united to defend their country.",
      bodyAm:
        "ባንቺ፣ ኢትዮጵያ በብዙ ዘመናት ውስጥ ብዙ ወራሪዎችን ገጠመች፡ ኦቶማን ቱርኮች፣ ግብጻውያን፣ መህዲስቶች፣ ጣሊያኖች፣ በኋላ ሶማሊያ። ሁሉም ጊዜ ኢትዮጵያውያን አንድ ሆነው ተከላከሉ።",
      children: [
        {
          id: "n4-1",
          title: "Ottoman Turks",
          titleAm: "ኦቶማን ቱርኮች",
          body:
            "• 16th century: Portuguese occupied Massawa and allied with Christian highland kingdom.\n" +
            "• Ottomans replied by occupying Suakin and Zeila, allying with Muslim lowland sultanate.\n" +
            "• 1557: Ottomans controlled Red Sea coast and Massawa.\n" +
            "• 1579: Sarsa Dingil crushed Bahr Negash Yeshaq's rebellion (who allied with Turks) but did not remove Turks from Massawa.",
          bodyAm:
            "• 16ኛው ክፍለ ዘመን፡ ፖርቹጋሎች መሳዋን ተቆጣጠሩ።\n• ኦቶማኖች ሱዋኪንና ዘይላን ተቆጣጠሩ።\n• 1557፡ ቀይ ባሕር አካባቢና መሳዋ ተቆጣጠሩ።\n• 1579፡ ሳርሳ ድንግል የባሕር ነጋሽ የሻቅን አመጽ አጠፋ።",
        },
        {
          id: "n4-2",
          title: "Egyptian expansion (1869–1876)",
          titleAm: "የግብጽ መስፋፋት",
          body:
            "Fundamental causes: Khedive Ismail's empire-building plan to control the Nile headwaters, and financial recovery needs.\n" +
            "Immediate cause: Colonel Arendrup's army crossed Mereb River, reaching Gundat on Nov 6, 1875.\n\n" +
            "Three Egyptian columns:\n" +
            "1) From Massawa — led by Arendrup (Danish colonel).\n" +
            "2) From Tajura — led by Werner Munzinger (killed by Afar people Nov 14, 1875).\n" +
            "3) From Zeila — led by Muhammad Ra'uf Pasha (captured Harar Oct 11, 1875).\n\n" +
            "Battles: GUNDAT (Nov 16, 1875) and GURA (March 7–9, 1876) — BOTH Ethiopian victories.",
          bodyAm:
            "መሠረታዊ ምክንያት፡ የኬዲቭ እስማኤል ግዛት መገንባት ፕላን።\nቀጥተኛ ምክንያት፡ አረንድሩፕ መርብ ወንዝ ተሻግሮ ግንዳት ደረሰ (ህዳር 6, 1875)።\nሦስት የግብጽ ሰልፎች፡ ከመሳዋ (አረንድሩፕ)፣ ከታጁራ (ሙንዚንገር)፣ ከዘይላ (ራኡፍ ፓሻ)።\nጦርነቶች፡ ግንዳት (1875) እና ጉራ (1876) — ሁለቱም የኢትዮጵያ ድሎች።",
        },
        {
          id: "n4-3",
          title: "Hewett (Adwa) Treaty, 1884",
          titleAm: "የሒዌት (አድዋ) ስምምነት (1884)",
          body:
            "• British negotiator: Rear Admiral Sir William Hewett.\n" +
            "• Signed June 3, 1884.\n" +
            "• Key articles: Free transit through Massawa; Bogos restored to Ethiopia; Yohannes to help evacuate Egyptian troops.\n\n" +
            "Aftermath: Yohannes fulfilled his duties, but Egypt refused to give Kasala, Karan; and Massawa transit was blocked. Britain helped ITALY control Massawa.",
          bodyAm:
            "• የብሪታንያ ተደራዳሪ፡ ሰር ዊሊያም ሒዌት።\n• ሰኔ 3, 1884።\n• ዋና አንቀጾች፡ በመሳዋ ነፃ ማለፍ፤ ቦጎስ ለኢትዮጵያ ተመለሰ፤ ዮሐንስ የግብጽን ጦር እንዲያስወጣ ረዳ።\nውጤት፡ ግብጽ ቃሉን አልጠበቀችም። ብሪታንያ ጣሊያን መሳዋን እንድትቆጣጠር ረዳች።",
        },
        {
          id: "n4-4",
          title: "Mahdist Sudan aggression",
          titleAm: "የመህዲስት ሱዳን ወረራ",
          body:
            "Cause: Yohannes's faithful implementation of Hewett Treaty.\n\n" +
            "Battles:\n" +
            "• 1885 Kufit — Ethiopian forces (Ras Alula) defeated Mahdists (Uthman Diqna).\n" +
            "• 1888 Gute Dili — Ras Gobena Dache (Menilek's general) defeated Mahdists.\n" +
            "• 1887 Sar Wuha — Mahdists (Abu Anja) defeated Takla Haymanot's troops, then sacked Gondar.\n" +
            "• 1889 Matamma — Yohannes defeated Mahdists but was KILLED in the battle (March 9, 1889).",
          bodyAm:
            "ምክንያት፡ ዮሐንስ የሒዌት ስምምነትን በታማኝነት መፈጸሙ።\nጦርነቶች፡ ኩፊት (1885)፣ ጉተ ዲሊ (1888)፣ ሳር ውሃ (1887)፣ መጣማ (1889)።\nዮሐንስ በመጣማ ጦርነት ተገደለ።",
        },
        {
          id: "n4-5",
          title: "Italian aggression and Battle of Adwa (1896)",
          titleAm: "የጣሊያን ወረራ እና የአድዋ ጦርነት",
          body:
            "• Italy unified 1871.\n" +
            "• 1869: Italy acquired Assab port.\n" +
            "• 1885: Italy landed at Massawa.\n" +
            "• 1887: Battle of Dogali — Ras Alula destroyed Italian force.\n" +
            "• 1889: Treaty of Wuchale signed.\n" +
            "• Italy misinterpreted Article XVII (Italian version) and claimed protectorate.\n" +
            "• 1893: Menilek denounced the treaty.\n" +
            "• October 1895: Italy crossed Mereb River, occupied Adigrat.\n" +
            "• March 1, 1896: BATTLE OF ADWA — Ethiopians defeated Italians.\n\n" +
            "Ethiopian leaders: Menilek (commander-in-chief), Empress Taytu, Ras Makonnen, Ras Mangasha Yohannes, Negus Takla Haimanot.\n" +
            "Italian leaders: Generals Baratieri (commander), Dabormida, Arimondi, Albertone.\n\n" +
            "Result: Treaty of Addis Ababa (Oct 26, 1896) — Wuchale abrogated, Italy recognized Ethiopia's independence.",
          bodyAm:
            "• ጣሊያን በ1871 አንድ ሆነች።\n• 1869፡ አሰብ ወደብ ያዘች።\n• 1885፡ መሳዋ ደረሰች።\n• 1887፡ ዶጋሊ — ራስ አሉላ አጠፋ።\n• 1889፡ የውጫሌ ስምምነት።\n• 1893፡ ምኒልክ ስምምነቱን ጣለ።\n• መጋቢት 1, 1896፡ የአድዋ ጦርነት — ኢትዮጵያውያን አሸነፉ።\nመሪዎች፡ ምኒልክ፣ እቴጌ ጣይቱ፣ ራስ መኮንን፣ ራስ መንገሻ፣ ንጉሥ ተክለ ኃይማኖት።\nጣሊያን፡ ባራቲየሪ፣ ዳቦርሚዳ፣ አሪሞንዲ፣ አልቤርቶኔ።\nውጤት፡ የአዲስ አበባ ስምምነት (ጥቅምት 26, 1896)።",
        },
        {
          id: "n4-6",
          title: "Italo-Ethiopian War 1935–1936",
          titleAm: "የኢትዮ-ጣሊያን ጦርነት (1935–1936)",
          body:
            "Fundamental causes: Mussolini's revenge for Adwa + economic needs (raw materials, markets, settlement areas).\n\n" +
            "Immediate cause: Wal Wal incident (Dec 5, 1934). Italy demanded apology and compensation. Ethiopia appealed to League of Nations.\n\n" +
            "Northern Front: De Bono invaded Oct 3, 1935. Occupied Adigrat (Oct 5), Adwa (Oct 6). Replaced by Badoglio (Nov 12).\n\n" +
            "Key battles:\n" +
            "• First Battle of Temben (Italian win)\n" +
            "• Battle of Amba Aradom (Ras Mulugeta killed)\n" +
            "• Second Battle of Tembien\n" +
            "• Battle of Shire\n" +
            "• Battle of Maichew (March 31, 1936, Emperor participated)\n\n" +
            "May 5, 1936: Italian forces marched into Addis Ababa.\n" +
            "June 30, 1936: Emperor addressed League of Nations in Geneva. League voted to end sanctions July 4.\n\n" +
            "Factors for Ethiopian defeat: lack of coordination, rivalry among leaders, Italian heavy artillery and air bombardment (including mustard gas), Italian fortifications, Italian technical superiority.",
          bodyAm:
            "መሠረታዊ ምክንያት፡ የሙሶሊኒ የአድዋ በቀል + የኢኮኖሚ ፍላጎት።\nቀጥተኛ ምክንያት፡ የወልወል ክስተት (ታህሳስ 5, 1934)።\nደቡባዊ ግንባር፡ ደ ቦኖ ጥቅምት 3, 1935 ወረረ።\nግንቦት 5, 1936፡ ጣሊያን አዲስ አበባ ገባች።\nሰኔ 30, 1936፡ ንጉሠ ነገሥቱ በጄኔቫ ለመንግሥታት ማኅበር ንግግር አደረጉ።\nየሽንፈት ምክንያቶች፡ የትብብር እጦት፣ የመሪዎች ሽኩቻ፣ የጣሊያን ከባድ መድፍ እና የአየር ጥቃት።",
        },
        {
          id: "n4-7",
          title: "Patriotic resistance (1936–1941)",
          titleAm: "የአርበኞች ተቃውሞ (1936–1941)",
          body:
            "First Phase (Summer 1936):\n" +
            "• Ras Emeru Haile Sellassie (Black Lion at Gore)\n" +
            "• Ras Desta Damtew (southern front; executed at Butajira Feb 1937)\n" +
            "• Dejjazmach Gebre Mariam Gari\n" +
            "• Attack on Addis Ababa from 4 directions\n" +
            "• Abuna Petros — executed publicly\n\n" +
            "Second Phase (Feb 1937):\n" +
            "• Abraha Deboch and Moges Asgdom threw a bomb at Marshal Graziani (Feb 19, 1937) → Graziani Massacre (3 days, ~30,000 killed, 499 monks at Debra Libanos).\n" +
            "• New resistance leaders: Ras Abebe Aregay, Belay Zeleke, Jagama Kelo, Abuna Petros.\n\n" +
            "Liberation (1941):\n" +
            "• Northern front: General Platt (Battle of Keren).\n" +
            "• Western front: Colonel Sanford + Major Wingate (Gideon Force) — Emperor entered Addis Ababa May 5, 1941 (Victory Day).\n" +
            "• Southern front: General Cunningham (from Kenya, entered Addis April 6, 1941).",
          bodyAm:
            "የመጀመሪያ ደረጃ (1936)፡ ራስ እመሩ፣ ራስ ደስታ፣ ደጃዝማች ገብረ ማርያም።\nሁለተኛ ደረጃ (1937)፡ አብርሃ ደቦች እና ሞገስ አስግዶም በግራዚያኒ ላይ ቦምብ ጣሉ። የግራዚያኒ እልቂት (~30,000 ሰዎች ተገደሉ)።\nነጻነት (1941)፡ ሰሜን (ፕላት)፣ ምዕራብ (ሳንፎርድ + ዊንጌት)፣ ደቡብ (ካኒንግሃም)። ግንቦት 5, 1941 ንጉሠ ነገሥቱ አዲስ አበባ ገቡ።",
        },
        {
          id: "n4-8",
          title: "Somalia aggression (1977)",
          titleAm: "የሶማሊያ ወረራ (1977)",
          body:
            "Fundamental cause: Somalia's 'Greater Somalia' ambition — a five-pointed star flag symbolizing Italian Somaliland, British Somaliland, French Somaliland, Ogaden, and Northern Frontier District (Kenya).\n" +
            "Immediate cause: Election of Siyad Barre and his attempt to control the Ogaden.\n\n" +
            "Course: Clashes since 1964. Ended by Khartoum Declaration. Siyad Barre's 1977 war — Somalia seized Ogaden. USSR opposed and supported Ethiopia. Cuban and Yemeni troops helped Ethiopia at the Ogaden front. Somalia defeated at Battle of Kara Mara.\n\n" +
            "Result: Somalia defeated; Greater Somalia plan terminated.",
          bodyAm:
            "መሠረታዊ ምክንያት፡ የሶማሊያ 'ታላቁ ሶማሊያ' ሕልም — ባለ አምስት ነጥብ ኮከብ ባንዲራ።\nቀጥተኛ ምክንያት፡ ሲያድ ባሬ መመረጥ።\nውጤት፡ ሶማሊያ ተሸነፈች። 'ታላቁ ሶማሊያ' ሕልም ተቋረጠ።",
        },
        {
          id: "n4-9",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: The three Ethiopian victories — GUNDAT (1875), GURA (1876), ADWA (1896). The two battles where Yohannes fought: Gundat/Gura (Egypt) and Matamma (Mahdists — died there). Battle of Adwa was under Menilek II. Do not swap.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ሦስቱ የኢትዮጵያ ድሎች — ግንዳት (1875)፣ ጉራ (1876)፣ አድዋ (1896)። ዮሐንስ የተዋጋባቸው ጦርነቶች፡ ግንዳት/ጉራ (ግብጽ) እና መጣማ (መህዲስቶች — እዚያ ሞተ)። አድዋ በምኒልክ ዘመን ነበር።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Exam Strategy — Unit 6",
      titleAm: "የፈተና ስልት — ክፍል 6",
      body:
        "Banchi, five quick checks before answering Unit 6 questions.",
      bodyAm:
        "ባንቺ፣ የክፍል 6 ጥያቄዎችን ከመመለስሽ በፊት አምስት ፈጣን ቼኮች።",
      children: [
        {
          id: "n5-1",
          title: "Check 1 — Which emperor?",
          titleAm: "ቼክ 1 — የትኛው ንጉሠ ነገሥት?",
          body:
            "Tewodros = Kassa Hailu (1855–1868), died at Maqdala. Yohannes = Kassa Mercha (1872–1889), died at Matamma. Menilek (1889–1913), won Adwa.",
          bodyAm:
            "ቴዎድሮስ = ካሳ ኃይሉ (1855–1868)፣ መቅደላ። ዮሐንስ = ካሳ መርጫ (1872–1889)፣ መጣማ። ምኒልክ (1889–1913)፣ አድዋ።",
        },
        {
          id: "n5-2",
          title: "Check 2 — Which treaty?",
          titleAm: "ቼክ 2 — የትኛው ስምምነት?",
          body:
            "Hewett (Adwa) Treaty = 1884 with Britain (Massawa transit, Bogos). Wuchale = 1889 with Italy (protectorate dispute). Addis Ababa = 1896 (after Adwa).",
          bodyAm:
            "ሒዌት (አድዋ) = 1884 ከብሪታንያ። ውጫሌ = 1889 ከጣሊያን። አዲስ አበባ = 1896 ከአድዋ በኋላ።",
        },
        {
          id: "n5-3",
          title: "Check 3 — Which battle?",
          titleAm: "ቼክ 3 — የትኛው ጦርነት?",
          body:
            "Gundat (1875) — vs Egypt. Gura (1876) — vs Egypt. Kufit (1885) — vs Mahdists. Sar Wuha (1887) — vs Mahdists. Matamma (1889) — vs Mahdists, Yohannes died. Adwa (1896) — vs Italy. Maichew (1936) — vs Italy.",
          bodyAm:
            "ግንዳት (1875) — ግብጽ። ጉራ (1876) — ግብጽ። ኩፊት (1885) — መህዲስት። ሳር ውሃ (1887) — መህዲስት። መጣማ (1889) — መህዲስት። አድዋ (1896) — ጣሊያን። ማይጨው (1936) — ጣሊያን።",
        },
        {
          id: "n5-4",
          title: "Check 4 — Which country?",
          titleAm: "ቼክ 4 — የትኛው አገር?",
          body:
            "Tewodros wanted BRITISH help. Yohannes sent letters to Britain, France, Austria, Germany, Russia. Menilek dealt with Italy. Lej Iyyasu with Germany and Turkey. Haile Selassie with USA. Derg with USSR.",
          bodyAm:
            "ቴዎድሮስ ብሪታንያ። ዮሐንስ ብሪታንያ፣ ፈረንሳይ፣ ኦስትሪያ፣ ጀርመን፣ ሩሲያ። ምኒልክ ጣሊያን። ልጅ ኢያሱ ጀርመንና ቱርክ። ኃይለ ሥላሴ አሜሪካ። ደርግ ሶቭየት።",
        },
        {
          id: "n5-5",
          title: "Check 5 — Which article of Wuchale?",
          titleAm: "ቼክ 5 — የውጫሌ አንቀጽ?",
          body:
            "Article XVII was the controversial one. Italian version = protectorate. Amharic version = optional use of Italy as a channel.",
          bodyAm:
            "አንቀጽ XVII አከራካሪ ነበር። ጣሊያንኛ = ፕሮቴክቶሬት። አማርኛ = አማራጭ።",
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
      stem: "Emperor Tewodros II was born as:",
      options: ["Kassa Mercha", "Kassa Hailu", "Sahle Selassie", "Takla Haymanot"],
      answer: "1",
      explanation:
        "Tewodros II was born as Kassa Hailu. Yohannes IV was Kassa Mercha.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "Which battle ended the Era of Princes (Zemene Mesafint)?",
      options: [
        "Battle of Guramba",
        "Battle of Ayshal (1853) — Kassa defeated Ras Ali II",
        "Battle of Darasge",
        "Battle of Gorgora Bichen",
      ],
      answer: "1",
      explanation:
        "The Battle of Ayshal (1853) — Kassa's victory over Ras Ali II symbolized the end of the Era of Princes.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "Emperor Tewodros II committed suicide at:",
      options: ["Gondar", "Adwa", "Maqdala", "Dabra Tabor"],
      answer: "2",
      explanation:
        "Tewodros committed suicide at Maqdala in 1868 rather than be captured by the British.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "Emperor Yohannes IV was born as:",
      options: ["Kassa Hailu", "Kassa Mercha", "Menilek", "Takla-Giyorgis"],
      answer: "1",
      explanation:
        "Yohannes IV was born as Kassa Mercha.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "Emperor Yohannes IV died at the Battle of:",
      options: ["Gura", "Gundat", "Matamma", "Adwa"],
      answer: "2",
      explanation:
        "Yohannes was killed at the Battle of Matamma (March 9, 1889) while fighting Mahdists.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "Emperor Menilek II ruled from:",
      options: ["1855–1868", "1872–1889", "1889–1913", "1913–1916"],
      answer: "2",
      explanation:
        "Menilek II ruled 1889–1913.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "Which emperor used BOTH peaceful submission and armed resistance to unite Ethiopia?",
      options: ["Tewodros II", "Yohannes IV", "Menilek II", "Haile Selassie"],
      answer: "2",
      explanation:
        "Menilek II used peaceful submission (Gibe Oromo, some Gurage) and armed resistance (Arsi, Kaffa, Walayta).",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "The Battle of Adwa took place on:",
      options: ["March 1, 1896", "March 9, 1889", "May 5, 1936", "August 4, 1914"],
      answer: "0",
      explanation:
        "Battle of Adwa: March 1, 1896.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "Who commanded the Ethiopian forces at the Battle of Adwa?",
      options: ["Ras Alula", "Menilek II", "Yohannes IV", "Ras Makonnen"],
      answer: "1",
      explanation:
        "Emperor Menilek II was the commander-in-chief. Empress Taytu, Ras Makonnen, Ras Mangasha, and Negus Takla Haimanot led armies.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "Who commanded the Italian forces at Adwa?",
      options: ["Pietro Badoglio", "Emilio De Bono", "Oreste Baratieri", "Rodolfo Graziani"],
      answer: "2",
      explanation:
        "General Oreste Baratieri commanded the Italian forces. He was brought to court for his poor command afterward.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "Which treaty ended the Italo-Ethiopian War of 1896?",
      options: [
        "Treaty of Wuchale",
        "Treaty of Addis Ababa (October 26, 1896)",
        "Hewett Treaty",
        "Treaty of Versailles",
      ],
      answer: "1",
      explanation:
        "The Treaty of Addis Ababa (Oct 26, 1896) ended the war — Wuchale was abrogated, Italy recognized Ethiopia's independence.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "Which emperor signed the Treaty of Wuchale with Italy?",
      options: ["Tewodros II", "Yohannes IV", "Menilek II", "Haile Selassie I"],
      answer: "2",
      explanation:
        "Menilek II signed the Treaty of Wuchale on May 2, 1889.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "Which article of the Wuchale Treaty was controversial?",
      options: ["Article I", "Article III", "Article XVII", "Article XX"],
      answer: "2",
      explanation:
        "Article XVII was the controversial one — the Italian version claimed a protectorate; the Amharic version only allowed optional use of Italy as a channel.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "Ethiopia's oldest long distance trade item was:",
      options: ["Coffee", "Ivory and civet musk", "Cotton sheeting", "Gold"],
      answer: "1",
      explanation:
        "Ivory and civet musk dominated trade in the early 19th century. Coffee replaced them later.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "Which became Ethiopia's principal export in the late 19th/early 20th century?",
      options: ["Ivory", "Coffee", "Salt", "Gold"],
      answer: "1",
      explanation:
        "Coffee became the principal export. Cotton sheeting (abujedie) became a major import.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "The first bank of Ethiopia was:",
      options: ["Commercial Bank of Ethiopia", "Bank of Abyssinia (1905)", "Development Bank", "Dashen Bank"],
      answer: "1",
      explanation:
        "The Bank of Abyssinia opened in March 1905 with $100,000 capital.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "Which two countries occupied Massawa at different times?",
      options: [
        "Portugal and Ottoman Turks",
        "Britain and France",
        "Germany and Italy",
        "Egypt and Greece",
      ],
      answer: "0",
      explanation:
        "Portuguese occupied Massawa first (16th century), then Ottomans controlled it (1557). Later Italy landed at Massawa (1885).",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "Which battle established Ras Alula as a hero against Italy?",
      options: ["Dogali (1887)", "Adwa (1896)", "Gundat (1875)", "Matamma (1889)"],
      answer: "0",
      explanation:
        "At Dogali (Jan 26, 1887), Ras Alula's forces destroyed an Italian column.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "Which Ethiopian leader addressed the League of Nations in 1936?",
      options: ["Menilek II", "Ras Alula", "Emperor Haile Selassie I", "Ras Emeru"],
      answer: "2",
      explanation:
        "Emperor Haile Selassie I addressed the League of Nations on June 30, 1936 in Geneva.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "When did Italy occupy Addis Ababa?",
      options: ["May 5, 1936", "May 5, 1941", "March 31, 1936", "October 3, 1935"],
      answer: "0",
      explanation:
        "Italian forces under Marshal Badoglio marched into Addis Ababa on May 5, 1936.",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "When did Emperor Haile Selassie I return to Addis Ababa?",
      options: ["May 5, 1936", "May 5, 1941", "April 6, 1941", "June 30, 1936"],
      answer: "1",
      explanation:
        "May 5, 1941 — Victory Day. The Emperor entered Addis Ababa with the Gideon Force.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "Which two patriots attempted to kill Marshal Graziani in 1937?",
      options: [
        "Abraha Deboch and Moges Asgdom",
        "Ras Emeru and Ras Desta",
        "Belay Zeleke and Jagama Kelo",
        "Abuna Petros and Gebre Mariam",
      ],
      answer: "0",
      explanation:
        "On February 19, 1937, Abraha Deboch and Moges Asgdom threw a bomb at Marshal Graziani at the Genete Le'ul palace.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "How many people were killed in the Graziani Massacre?",
      options: ["About 3,000", "About 10,000", "About 30,000 plus 499 monks", "About 100,000"],
      answer: "2",
      explanation:
        "About 30,000 people and 499 monks at Debra Libanos were killed over 3 days.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country invaded Ethiopia in 1977?",
      options: ["Italy", "Egypt", "Somalia", "Sudan"],
      answer: "2",
      explanation:
        "Somalia, under Siyad Barre, invaded Ethiopia in 1977, attempting to take the Ogaden region.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "Which two countries helped Ethiopia during the 1977 Somali aggression?",
      options: [
        "USA and Britain",
        "USSR and Cuba",
        "China and North Korea",
        "France and Egypt",
      ],
      answer: "1",
      explanation:
        "USSR, Cuba, and Yemen supported Ethiopia. Somalia was defeated at Battle of Kara Mara.",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Which best describes the policy used by Yohannes IV with regional governors?",
      options: [
        "Total submission only",
        "A policy of EQUILIBRIUM (balance) between regional governors",
        "Only military conquest",
        "Complete decentralization",
      ],
      answer: "1",
      explanation:
        "Yohannes tolerated strong regional governors with autonomy as long as they recognized his authority — this was a policy of equilibrium.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "The Leche Agreement (1878) was between:",
      options: [
        "Menilek and Yohannes IV",
        "Menilek and Italy",
        "Yohannes and Britain",
        "Menilek and Egypt",
      ],
      answer: "0",
      explanation:
        "At Leche (March 20, 1878), Menilek accepted Yohannes's overlordship, agreed to pay tribute, and renounced the title of king of kings.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Which battle gave Menilek mastery of the southwest region?",
      options: ["Embabo (1882)", "Azule (1886)", "Chalanqo (1887)", "Metemma (1889)"],
      answer: "0",
      explanation:
        "Menilek defeated Takla Haymanot at the Battle of Embabo (June 6, 1882), giving him control of the southwest.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Which group in Gurage resisted Menilek's expansion?",
      options: ["Northern Gurage", "Western Gurage (led by Hasan Enjamo of Qabena)", "Eastern Gurage", "Southern Gurage"],
      answer: "1",
      explanation:
        "Northern Gurage (Kestane) submitted peacefully. Western Gurage resisted under Hasan Enjamo until 1888.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Which leader resisted Menilek longest in Walayta?",
      options: ["Kawo Tona", "Tato Gaki Sherocho", "Abba Jifar II", "Joti Tullu"],
      answer: "0",
      explanation:
        "Kawo Tona of Walayta resisted Menilek's army; the resistance collapsed in 1894 when Tona was wounded and captured.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Which Kaffa king resisted Menilek's forces?",
      options: ["Kawo Tona", "Tato Gaki Sherocho", "Abba Jifar II", "Hasan Enjamo"],
      answer: "1",
      explanation:
        "Tato Gaki Sherocho resisted until 1897 but was finally captured and taken to Addis Ababa. Ras Walda Giyorgis became governor of Kaffa.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "Why did Ethiopia's trade direction change from north to south and east?",
      options: [
        "All of these reasons",
        "Shawan victory at Embabo",
        "Foundation of Addis Ababa",
        "Opening of Djibouti-Addis Ababa railway",
      ],
      answer: "0",
      explanation:
        "All of these plus the decline of Gondar, Matamma, Massawa, and Assab ports.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "Who controlled Ethiopia's long distance trade?",
      options: [
        "Only Ethiopian traders",
        "Mostly foreign immigrants (Indian, Greek, Armenian, Jewish, Yemeni, Syrian)",
        "Only Europeans",
        "Only Arabs",
      ],
      answer: "1",
      explanation:
        "Mostly immigrants controlled Ethiopia's long distance trade. Ethiopian traders were limited to internal and local trade.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Which treaty did Britain sign with Yohannes IV?",
      options: [
        "Treaty of Wuchale",
        "Hewett (Adwa) Treaty (1884)",
        "Treaty of Addis Ababa",
        "Treaty of Versailles",
      ],
      answer: "1",
      explanation:
        "The Hewett (Adwa) Treaty, June 3, 1884, negotiated by Rear Admiral Sir William Hewett.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "What were the key articles of the Hewett Treaty?",
      options: [
        "Free transit through Massawa, Bogos restored, Yohannes helps evacuate Egyptian troops",
        "Only trade rights",
        "Only military alliance",
        "Only missionary rights",
      ],
      answer: "0",
      explanation:
        "Key articles: Free transit through Massawa; Bogos restored to Ethiopia; Yohannes facilitates Egyptian troop withdrawal to Massawa.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "What did Yohannes get from the Hewett Treaty?",
      options: [
        "All benefits fully delivered",
        "Nothing — Britain and Egypt didn't deliver; Massawa went to Italy",
        "Only money",
        "Only weapons",
      ],
      answer: "1",
      explanation:
        "Yohannes fulfilled his duties, but Egypt refused to give Kasala and Karan, Massawa transit was blocked, and Britain helped Italy control Massawa.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Which Egyptian leader was killed by Afar people in 1875?",
      options: ["Colonel Arendrup", "Werner Munzinger", "Muhammad Ra'uf Pasha", "Khedive Ismail"],
      answer: "1",
      explanation:
        "Werner Munzinger, leading the Egyptian force from Tajura, was killed by Afar people on November 14, 1875.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Who captured Harar for Egypt in 1875?",
      options: [
        "Colonel Arendrup",
        "Werner Munzinger",
        "Muhammad Ra'uf Pasha",
        "Khedive Ismail",
      ],
      answer: "2",
      explanation:
        "Muhammad Ra'uf Pasha captured Harar on October 11, 1875.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Which two battles were Ethiopian victories over Egypt?",
      options: [
        "Dogali and Adwa",
        "Gundat and Gura",
        "Kufit and Matamma",
        "Shire and Maichew",
      ],
      answer: "1",
      explanation:
        "Gundat (Nov 16, 1875) and Gura (March 7–9, 1876) — both decisive Ethiopian victories over Egypt.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Which battle did Ras Alula win against Mahdists in 1885?",
      options: ["Gute Dili", "Sar Wuha", "Kufit", "Matamma"],
      answer: "2",
      explanation:
        "Ras Alula defeated Mahdists (Uthman Diqna) at Kufit on September 23, 1885.",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "Which battle did Ras Gobena win against Mahdists?",
      options: ["Kufit", "Sar Wuha", "Gute Dili (1888)", "Matamma"],
      answer: "2",
      explanation:
        "Ras Gobena Dache defeated Mahdists at Gute Dili (October 14, 1888).",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "Which battle saw the Mahdists sack Gondar?",
      options: [
        "After Sar Wuha (1887)",
        "After Kufit",
        "After Gura",
        "After Matamma",
      ],
      answer: "0",
      explanation:
        "Mahdists (led by Abu Anja) defeated Takla Haymanot's troops at Sar Wuha (January 1887), then sacked Gondar.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "What happened at the Battle of Matamma (1889)?",
      options: [
        "Ethiopians defeated Egypt",
        "Yohannes IV was killed while fighting Mahdists",
        "Menilek defeated Italy",
        "Ras Alula was captured",
      ],
      answer: "1",
      explanation:
        "Yohannes defeated the Mahdists at Matamma but was killed in the battle on March 9, 1889.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "Where did Italy first acquire an African port in 1869?",
      options: ["Massawa", "Assab", "Zeila", "Berbera"],
      answer: "1",
      explanation:
        "Italy acquired Assab port in 1869. It later landed at Massawa in 1885.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "How many European countries recognized Italian protectorate over Ethiopia (before Adwa)?",
      options: ["3", "5", "12 plus the USA", "20"],
      answer: "2",
      explanation:
        "Twelve European governments plus the USA accepted Italy's claim. Russia was the ONLY country that openly protested.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "Who advised Menilek to inform European governments about the Wuchale dispute?",
      options: ["Ras Alula", "Alfred Ilg", "Empress Taytu", "King Umberto"],
      answer: "1",
      explanation:
        "Alfred Ilg, a Swiss advisor, advised Menilek to inform European governments about the Italian misinterpretation.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "Who succeeded De Bono as Italian commander in Ethiopia?",
      options: ["Baratieri", "Graziani", "Marshal Pietro Badoglio", "General Arimondi"],
      answer: "2",
      explanation:
        "Mussolini replaced Emilio De Bono with Marshal Pietro Badoglio on November 12, 1935.",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "Which Ethiopian general died at the Battle of Amba Aradom?",
      options: ["Ras Kassa", "Ras Emeru", "Ras Mulugeta Yigezu", "Ras Seyum"],
      answer: "2",
      explanation:
        "Ras Mulugeta Yigezu led the Eastern column and was killed at the Battle of Amba Aradom.",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "Why did Britain help Ethiopia in 1941?",
      options: [
        "To stop Italy's entry into WWII on Hitler's side",
        "To colonize Ethiopia",
        "To get Ethiopian gold",
        "To protect the Suez Canal only",
      ],
      answer: "0",
      explanation:
        "Italy entered WWII on the side of Hitler, threatening British interests in East Africa. Britain then supported Ethiopia's liberation.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "Which three directions did the 1941 liberation mission come from?",
      options: [
        "North (Platt), West (Sanford/Wingate), South (Cunningham)",
        "Only from the north",
        "Only from the south",
        "Only from the west",
      ],
      answer: "0",
      explanation:
        "North — General Platt. West — Colonel Sanford + Major Wingate (Gideon Force). South — General Cunningham.",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about the Wuchale Treaty is FALSE?",
      options: [
        "It was signed May 2, 1889",
        "It had a controversial Article XVII",
        "The Amharic and Italian versions agreed exactly",
        "It was ratified September 29, 1889 by King Umberto I",
      ],
      answer: "2",
      explanation:
        "The Amharic and Italian versions DIFFERED — this was the source of the dispute. The Italian version claimed a protectorate; the Amharic version only allowed optional use of Italy as a channel.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "Which is TRUE about Italy after Adwa?",
      options: [
        "Italy kept its colonies and continued to rule Ethiopia",
        "Italy recognized Ethiopia's independence and repatriated prisoners",
        "Italy gave up all its African colonies",
        "Italy declared war on Britain",
      ],
      answer: "1",
      explanation:
        "After Adwa, Italy signed the Treaty of Addis Ababa (1896): Wuchale abrogated, Ethiopia's independence recognized, prisoners repatriated, Eritrea deferred to future negotiation.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Which factor was NOT a reason for Ethiopian defeat in 1936?",
      options: [
        "Italian air bombardment including mustard gas",
        "Lack of coordination among Ethiopian leaders",
        "Italian fortifications",
        "Ethiopian air superiority",
      ],
      answer: "3",
      explanation:
        "Ethiopia did NOT have air superiority. Italy had technical superiority, artillery, and air force. Ethiopia's defeats were due to lack of coordination, rivalry, and Italian heavy weapons.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Which patriotic leader died at the Battle of Dolo Odo and Genale Dorya?",
      options: ["Ras Emeru", "Ras Desta Damtew", "Dejjazmach Balcha", "Abuna Petros"],
      answer: "1",
      explanation:
        "Ras Desta Damtew was defeated at Dolo Odo and Genale Dorya, caught at Gogeti, and executed at Butajira in February 1937.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "Which is TRUE about the Somali aggression?",
      options: [
        "Somalia sought to build 'Greater Somalia' with a five-pointed star flag",
        "Somalia's goal was to colonize Ethiopia",
        "Somalia had no territorial claims",
        "Somalia was supported by Britain",
      ],
      answer: "0",
      explanation:
        "Somalia's flag had a five-pointed star symbolizing the five territories of 'Greater Somalia': Italian Somaliland, British Somaliland, French Somaliland, the Ogaden, and Northern Frontier District (Kenya).",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "Which one is the correct chronological order of these events?",
      options: [
        "Gundat → Gura → Dogali → Adwa",
        "Adwa → Dogali → Gura → Gundat",
        "Dogali → Adwa → Gura → Gundat",
        "Gura → Gundat → Adwa → Dogali",
      ],
      answer: "0",
      explanation:
        "Gundat (1875) → Gura (1876) → Dogali (1887) → Adwa (1896).",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Name the three emperors who formed the modern Ethiopian empire and their birth names.",
      answer:
        "Tewodros II (born Kassa Hailu, 1855–1868), Yohannes IV (born Kassa Mercha, 1872–1889), Menilek II (1889–1913).",
      explanation:
        "Banchi, both Tewodros and Yohannes were born 'Kassa' but with different second names (Hailu vs Mercha).",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "Explain the Wuchale Treaty dispute.",
      answer:
        "The Treaty of Wuchale (1889) was signed in Amharic and Italian. Article XVII differed: the Italian version said Ethiopia consented to an Italian protectorate over its foreign affairs, while the Amharic version said Ethiopia could optionally use Italy as a channel. Italy used the Italian version to claim a protectorate and informed other European governments. Menilek protested, wrote to Italy and Europe, and when Italy refused to correct the error, war broke out — leading to Adwa (1896).",
      explanation:
        "The core issue: two versions, one meaning. Different interpretations led to war.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "Name five invaders Ethiopia fought against in the 19th and 20th centuries.",
      answer:
        "Egyptian forces (Gundat, Gura), Mahdist Sudan (Kufit, Sar Wuha, Matamma), Italy (Dogali, Adwa, 1935–1936 war), Ottoman Turks (16th century), Somalia (1977).",
      explanation:
        "Banchi, remember each battle belongs to a specific invader — the exam loves to test this.",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "Describe the main causes of the Italo-Ethiopian War of 1935–1936.",
      answer:
        "Fundamental causes: Mussolini's desire to revenge the humiliating defeat at Adwa (1896), and economic needs (raw materials, markets, and settlement areas for Italian citizens). Immediate cause: the Wal Wal incident (December 5, 1934), when Ethiopian and Italian troops clashed in Ogaden. Italy demanded apology and compensation; Ethiopia appealed to the League of Nations.",
      explanation:
        "Banchi, always separate fundamental from immediate causes in these answers.",
    },
        // ============================================================
    // BATCH 2 — Q61 to Q120 (final for Unit 6)
    // ============================================================

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "At which battle did Kassa Hailu defeat Ras Ali II, ending the Era of Princes?",
      options: ["Guramba", "Gorgora Bichen", "Ayshal", "Darasge"],
      answer: "2",
      explanation:
        "The Battle of Ayshal (June 29, 1853) — Kassa defeated Ras Ali II, symbolizing the end of the Era of Princes.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Tewodros II set up his arms foundry at:",
      options: ["Maqdala", "Gafat (near Dabra Tabor)", "Adwa", "Gondar"],
      answer: "1",
      explanation:
        "Tewodros set up an arms foundry at Gafat, near Dabra Tabor. He produced the cannon called 'Sebastopol'.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Who was the British commander of the 1868 Maqdala expedition?",
      options: ["Sir Robert Napier", "Sir William Hewett", "General Platt", "Alfred Ilg"],
      answer: "0",
      explanation:
        "Sir Robert Napier led 32,000 British troops. Kassa Mercha of Tigray helped them with guides, food, and transport animals.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "At which battle was Tewodros II's army defeated before he committed suicide?",
      options: ["Aroge (April 10, 1868)", "Gura", "Ayshal", "Darasge"],
      answer: "0",
      explanation:
        "The Battle of Aroge, between Maqdala and Bashilo, on April 10, 1868. Tewodros then committed suicide at Maqdala.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "Which emperor used the policy of balance (equilibrium) between regional governors?",
      options: ["Tewodros II", "Yohannes IV", "Menilek II", "Haile Selassie I"],
      answer: "1",
      explanation:
        "Yohannes IV tolerated strong regional governors as long as they recognized his supremacy. He balanced Adal Tessema against Menilek.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Emperor Yohannes IV made Takla Haymanot King of Gojjam and Kaffa in:",
      options: ["1875", "1878", "1881", "1884"],
      answer: "2",
      explanation:
        "In 1881, Yohannes made Takla Haymanot King of Gojjam and Kaffa to counterbalance Menilek's expansion in the southwest.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Which emperor led the campaign to capture Harar in 1887?",
      options: ["Tewodros II", "Yohannes IV", "Menilek II", "Haile Selassie"],
      answer: "2",
      explanation:
        "Menilek II's general Dajjach Walda Gabriel first failed; the resistance was broken at the Battle of Chalanqo (January 6, 1887).",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "Which kingdom resisted Menilek's forces until 1894?",
      options: ["Walayta", "Kaffa", "Belashangul", "Gibe Oromo"],
      answer: "0",
      explanation:
        "Walayta resisted until 1894, when Kawo Tona was wounded and captured.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Who captured Kaffa's king Tato Gaki Sherocho?",
      options: ["Ras Makonnen", "Ras Walda Giyorgis", "Ras Gobena", "Ras Alula"],
      answer: "1",
      explanation:
        "Ras Walda Giyorgis's army entered Andaracha, and Tato Gaki Sherocho was captured after about nine months and taken to Addis Ababa.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Which region was reunified in 1897 with Sheikh Khojale's help?",
      options: ["Belashangul (Benishangul)", "Walayta", "Kaffa", "Arsi"],
      answer: "0",
      explanation:
        "In 1897, Ras Makonnen, with Dajjach Jote Tullu and Dajjach Kumsa Morada, reunified the sheikhdoms of Belashangul. Sheikh Khojale secretly helped.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "Which emperor's reign saw the Battle of Embabo (1882)?",
      options: ["Tewodros II", "Yohannes IV", "Menilek II", "Haile Selassie"],
      answer: "1",
      explanation:
        "The Battle of Embabo (June 6, 1882) happened during Yohannes IV's reign, but Menilek was the victor against Takla Haymanot.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "By what year had Ethiopia ended the formation of the Modern Empire State?",
      options: ["1886", "1889", "1896", "1900"],
      answer: "3",
      explanation:
        "By 1900 Ethiopia ended the formation of the Modern Empire State.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "The main feature of the change in Ethiopia's long distance trade was:",
      options: [
        "Moving from north to south and east",
        "Moving from south to north",
        "Staying in the same direction",
        "Stopping completely",
      ],
      answer: "0",
      explanation:
        "Trade direction moved from north (Gondar, Matamma, Massawa) to south and east (Addis Ababa, Djibouti, Gambella).",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "Which port city became the most important outlet for Ethiopia's trade after Addis Ababa became the capital?",
      options: ["Massawa", "Assab", "Djibouti", "Zeila"],
      answer: "2",
      explanation:
        "Djibouti became the most important outlet, followed by Gambella after the railway opened.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which cities grew because of the railway?",
      options: ["Gondar, Matamma", "Dire Dawa, Nazareth (Adama), Mojo", "Massawa, Assab", "Adwa, Aksum"],
      answer: "1",
      explanation:
        "The railway gave rise to Dire Dawa, Nazareth (Adama), and Mojo as new towns.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "Which emperor wanted to produce arms in Ethiopia but was refused by Britain?",
      options: ["Tewodros II", "Yohannes IV", "Menilek II", "Haile Selassie"],
      answer: "0",
      explanation:
        "Tewodros II wanted British help to build arms production. Britain refused. This eventually led to the 1868 British expedition.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "Which emperor sent an envoy named J.C. Kirkham to European countries?",
      options: ["Tewodros II", "Yohannes IV", "Menilek II", "Haile Selassie"],
      answer: "1",
      explanation:
        "After the Egyptian invasion, Yohannes IV sent J.C. Kirkham to Britain, France, Austria, Germany, and Russia. The mission failed.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "How many treaties did Menilek II sign with Italy?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation:
        "Three: 1883 (Count Antonelli), 1887 (after Dogali), and 1889 (Treaty of Wuchale).",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "Which emperor sent about 200 Ethiopians abroad for education?",
      options: ["Tewodros II", "Yohannes IV", "Menilek II (via Ras Teferi)", "None"],
      answer: "2",
      explanation:
        "In the 1920s, Ras Teferi Mekonnen (later Haile Selassie) sent about 200 Ethiopians to France and Egypt mainly for education.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country supported Ethiopia's entry into the League of Nations in 1923?",
      options: ["Britain", "France", "Italy", "USA"],
      answer: "2",
      explanation:
        "Italy supported Ethiopia's entry to the League of Nations (1923) as part of its friendly diplomatic policy. Italy also hosted Ras Teferi in Rome (1924).",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "When did Ethiopia and USA first establish diplomatic contact?",
      options: ["1903", "1943", "1923", "1960"],
      answer: "0",
      explanation:
        "The Skinner Mission arrived in 1903, initiating Ethio-US relations under Menilek II.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "Which nation emerged as Ethiopia's main Cold War ally under the Derg?",
      options: ["USA", "USSR", "Britain", "China"],
      answer: "1",
      explanation:
        "After the 1974 uprising, Ethiopia turned to the Soviet Union. USSR (with Cuba and Yemen) supported Ethiopia during the 1977 Somali war.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "Who was the Derg's main leader?",
      options: ["Emperor Haile Selassie", "Mengistu Haile Mariam", "Lej Iyyasu", "Empress Zewditu"],
      answer: "1",
      explanation:
        "Mengistu Haile Mariam led the Derg (1974–1991).",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "When did Italy formally land at Massawa?",
      options: ["1869", "1885", "1887", "1889"],
      answer: "1",
      explanation:
        "Italy formally landed at Massawa on February 5, 1885.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "When was Ras Alula's ultimatum to Italy to evacuate Wia and Zula?",
      options: ["1885", "1886", "1887", "1889"],
      answer: "2",
      explanation:
        "Ras Alula sent an ultimatum in late 1886 / January 1887. When Italy refused, he attacked Saati (Jan 25, 1887) and defeated them at Dogali the next day.",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Which statement about Tewodros II's reign is TRUE?",
      options: [
        "He brought complete unity to Ethiopia",
        "He did not completely destroy all local dynasties but appointed some",
        "He had no interest in arms production",
        "He ruled from Addis Ababa",
      ],
      answer: "1",
      explanation:
        "Tewodros appointed Dajjach Kassa Subagadis in Tigray, Dajjach Liban Amade and Amade Ali in Wollo, Hayla-Mikael Sahla-Sellassie in Shawa. He was NOT successful in bringing complete unity.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Why did Yohannes IV tolerate strong regional governors?",
      options: [
        "Because he was weak",
        "Because they recognized his superiority, giving him stability",
        "Because Italy demanded it",
        "Because he had no army",
      ],
      answer: "1",
      explanation:
        "Yohannes used a policy of equilibrium — tolerating strong governors as long as they acknowledged his authority. Menilek and Adal Tessema were his most important regional figures.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "What did Menilek accept in the 1878 Leche Agreement?",
      options: [
        "Yohannes as overlord, annual tribute, military supplies, and dropping 'king of kings' title",
        "Complete independence from Yohannes",
        "An alliance with Italy against Yohannes",
        "Giving up Shawa",
      ],
      answer: "0",
      explanation:
        "At Leche (March 20, 1878), Menilek accepted Yohannes's overlordship, agreed to pay annual tribute, provide army supplies, and renounce the title 'king of kings' (but kept the title 'king').",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Why did Menilek turn south after Leche?",
      options: [
        "Frustration over blocked northward expansion",
        "Italy asked him to",
        "Yohannes ordered him to",
        "The south was rich in oil",
      ],
      answer: "0",
      explanation:
        "Frustration over blocked northward expansion opened Menilek's eyes to the south. He began campaigns in Gurage, Oromo, Arsi, Harar, Walayta, and Kaffa.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Which group resisted Menilek's forces until 1888?",
      options: [
        "Northern Gurage",
        "Western Gurage (led by Hasan Enjamo)",
        "Kestane",
        "Kaffa",
      ],
      answer: "1",
      explanation:
        "Western Gurage (led by Hasan Enjamo of Qabena) resisted until 1888, when Ras Gobena broke the resistance.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Which Gibe Oromo king submitted to Menilek peacefully?",
      options: ["Abba Jifar II of Jimma", "Kawo Tona", "Tato Gaki Sherocho", "Hasan Enjamo"],
      answer: "0",
      explanation:
        "Abba Jifar II of Jimma, along with Kumsa Moreda of Leqa Naqamite and Joti Tullu of Leqa Qellam, submitted peacefully between 1882 and 1886.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Why did Menilek personally lead the Walayta campaign?",
      options: [
        "Walayta was especially strong and required large forces",
        "Walayta was weak",
        "Walayta had gold",
        "Italy demanded it",
      ],
      answer: "0",
      explanation:
        "Walayta resisted strongly, so Menilek personally led the campaign with Ras Mikael, Fitawurari Gabayyahu, Dajjach Balcha, and others. Kawo Tona's refusal to surrender made the cost very high.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "Which battle defeated Arsi resistance to Menilek?",
      options: ["Azule (September 1886)", "Chalanqo (1887)", "Embabo (1882)", "Darasge (1855)"],
      answer: "0",
      explanation:
        "Arsi forces were defeated at the Battle of Azule in September 1886. Menilek personally participated in many battles against Arsi.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "How did Harar come under Menilek's control?",
      options: [
        "It was already under Menilek",
        "Egyptians withdrew, Emir Abdulahi ruled briefly, then Menilek defeated at Chalanqo (1887)",
        "Menilek bought it",
        "Britain gave it to him",
      ],
      answer: "1",
      explanation:
        "Harar was under Egypt (1875), returned to Emir Abdulahi after Egypt's withdrawal, then Menilek's general Dajjach Walda Gabriel captured it at Chalanqo (Jan 6, 1887).",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "What were the main causes of the Egyptian expansion into Ethiopia (1869–1876)?",
      options: [
        "Khedive Ismail's plan to control Nile headwaters + financial recovery",
        "Spreading Christianity",
        "Colonizing Africa for Italy",
        "Protecting Ethiopian Christians",
      ],
      answer: "0",
      explanation:
        "Khedive Ismail wanted to control all the Nile headwaters and gain resources to recover from financial collapse.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these was NOT one of the three Egyptian columns in 1875?",
      options: [
        "From Massawa — Arendrup",
        "From Tajura — Munzinger",
        "From Zeila — Ra'uf Pasha",
        "From Khartoum — Charles Gordon",
      ],
      answer: "3",
      explanation:
        "The three columns were Massawa (Arendrup), Tajura (Munzinger), and Zeila (Ra'uf Pasha). Charles Gordon was not part of this 1875 campaign.",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "Why did Yohannes IV send a diplomatic letter to European governments after the Egyptian invasion?",
      options: [
        "To ask for their help against Egypt",
        "To ask for their help against Italy",
        "To complain about Britain",
        "To invite them to Ethiopia",
      ],
      answer: "0",
      explanation:
        "Yohannes accused Khedive Ismail and hoped European powers would help Ethiopia recover lost lands. Kirkham's mission failed — the responses were unhelpful.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "What was the fundamental cause of the Battle of Gundat and Gura?",
      options: [
        "Egyptian refusal to solve the problem peacefully",
        "Ottoman attack",
        "Britain's refusal",
        "Italian alliance",
      ],
      answer: "0",
      explanation:
        "Fundamental cause: Egypt's refusal to solve problems peacefully. Immediate cause: Colonel Arendrup's army crossing the Mereb River and reaching Gundat (Nov 6, 1875).",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "What were the consequences of the Battle of Gura?",
      options: [
        "Hastened Ismail's downfall and enhanced Yohannes's prestige",
        "Egypt conquered Ethiopia",
        "Italy got control",
        "Ethiopia lost the coast",
      ],
      answer: "0",
      explanation:
        "Consequences: large number of Ethiopians killed but no prisoners; Egyptian losses; capture of cannons and rifles; hastened Ismail's downfall; enhanced Yohannes's prestige; but no peace for 8 years.",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which two events caused the Hewett Treaty of 1884?",
      options: [
        "Rise of Mahdist movement in Sudan + British occupation of Egypt (1882)",
        "Italian invasion + French pressure",
        "Ottoman occupation + Russian pressure",
        "Egypt's attack + Britain's request",
      ],
      answer: "0",
      explanation:
        "(1) Rise of Mahdist Movement in Sudan (1881). (2) Britain occupied Egypt (1882) and wanted to evacuate Egyptian troops to Massawa via Ethiopia.",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "What was the aftermath of the Hewett Treaty?",
      options: [
        "Yohannes exchanged one weak enemy (Egypt) for two strong ones (Italy and Mahdist Sudan)",
        "Ethiopia got full access to Massawa",
        "Egypt gave up all territories",
        "Ethiopia conquered Sudan",
      ],
      answer: "0",
      explanation:
        "Egypt broke the treaty terms. Britain helped Italy control Massawa. Yohannes ended up with two stronger enemies: Italy and Mahdist Sudan.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "Why did Italy have an interest in Ethiopia?",
      options: [
        "Supported by Britain to guard against France",
        "Italy wanted to spread Christianity",
        "Italy wanted to help Ethiopia",
        "Italy wanted trade with Ethiopia",
      ],
      answer: "0",
      explanation:
        "Italy's interest was supported by Britain, which wanted Italy to guard against its strongest rival in the region — France.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "Which battle did Ras Alula win in 1887, creating anger in Rome?",
      options: ["Dogali", "Adwa", "Saati", "Kufit"],
      answer: "0",
      explanation:
        "The Battle of Dogali (January 26, 1887) — Ras Alula destroyed an Italian force. This created anger in Rome and prompted revenge preparations.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "What made Yohannes withdraw from Saati in 1888?",
      options: [
        "Supply shortage, Mahdist sacking of Gondar, and rumors of Menilek's conspiracy",
        "Italian victory",
        "British pressure",
        "French threats",
      ],
      answer: "0",
      explanation:
        "Yohannes withdrew from Saati because of: shortage of supplies, arrival of news of the Mahdist sacking of Gondar, and rumors that Menilek and Takla Haymanot were conspiring against him.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "Which battle did the Mahdists defeat Takla Haymanot's troops in 1887?",
      options: ["Sar Wuha", "Kufit", "Matamma", "Gute Dili"],
      answer: "0",
      explanation:
        "At Sar Wuha (January 1887), Mahdists led by Abu Anja defeated Takla Haymanot's troops, then sacked Gondar.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "Why did Yohannes decide to attack the Mahdists instead of Menilek?",
      options: [
        "Attacking Menilek would weaken Ethiopia against external enemies",
        "The Mahdists were closer",
        "Italy demanded it",
        "Menilek had no army",
      ],
      answer: "0",
      explanation:
        "Yohannes knew Italy was arming Menilek. Attacking Menilek would weaken Ethiopia and expose it to two external enemies on the borders.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "Which Italian general was removed for slow advance in 1935?",
      options: ["Badoglio", "De Bono", "Graziani", "Baratieri"],
      answer: "1",
      explanation:
        "Mussolini replaced Emilio De Bono with Marshal Pietro Badoglio on November 12, 1935, because De Bono's advance was too slow.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "What was the significance of the Battle of Maichew?",
      options: [
        "Emperor Haile Selassie I personally participated",
        "It ended Italian occupation",
        "It was an Ethiopian victory",
        "It had no significance",
      ],
      answer: "0",
      explanation:
        "The Battle of Maichew (March 31, 1936) was symbolic because the Emperor personally participated. He saw horrors, mainly from mustard gas. Ethiopian forces were smashed.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "Which Ethiopian patriot was publicly executed by the Italians?",
      options: ["Abuna Petros", "Ras Emeru", "Ras Desta", "Dejjazmach Balcha"],
      answer: "0",
      explanation:
        "Abuna Petros, an outspoken anti-fascist patriot, was caught and publicly executed after the abortive attack on Addis Ababa.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "Which patriot leader died fighting Fascists in the southern part of Addis Ababa?",
      options: ["Dejjazmach Balcha Safo", "Ras Abebe Aregay", "Belay Zeleke", "Jagama Kelo"],
      answer: "0",
      explanation:
        "Dejjazmach Balcha Safo, an old Adwa hero, was killed while fighting the Fascists in the southern part of Addis Ababa. A memorial hospital was built at the site.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about the Ethiopian patriotic resistance is FALSE?",
      options: [
        "Ras Emeru led the Black Lion at Gore",
        "Ras Desta Damtew was executed at Butajira",
        "The attack on Addis Ababa was successful",
        "Abuna Petros was executed",
      ],
      answer: "2",
      explanation:
        "The attack on Addis Ababa was UNSUCCESSFUL — it was poorly planned and lacked coordination.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which countries helped Ethiopia in 1941 to expel Italy?",
      options: [
        "Britain (via three fronts)",
        "USA only",
        "France only",
        "USSR and Cuba",
      ],
      answer: "0",
      explanation:
        "Britain helped Ethiopia liberate itself in 1941 through three fronts: North (Platt), West (Sanford/Wingate + Gideon Force), South (Cunningham).",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "What was the fundamental cause of Somali aggression?",
      options: [
        "Somalia's ambition to build 'Greater Somalia' with a five-pointed star flag",
        "Ethiopia attacked Somalia",
        "Kenya attacked Somalia",
        "Britain encouraged it",
      ],
      answer: "0",
      explanation:
        "Somalia wanted to unite five territories into 'Greater Somalia': Italian Somaliland, British Somaliland, French Somaliland, the Ogaden, and the Northern Frontier District (Kenya). Its flag had a five-pointed star.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "What was the result of the 1977 Somali war?",
      options: [
        "Somalia defeated; Greater Somalia plan terminated",
        "Somalia won",
        "Ogaden joined Somalia",
        "The war had no outcome",
      ],
      answer: "0",
      explanation:
        "Somalia was defeated with the help of USSR, Cuba, and Yemen. The Ogaden remained Ethiopian. The Greater Somalia plan ended.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Which is the correct order of Ethiopian emperors?",
      options: [
        "Tewodros II → Yohannes IV → Menilek II",
        "Menilek II → Tewodros II → Yohannes IV",
        "Yohannes IV → Tewodros II → Menilek II",
        "Tewodros II → Menilek II → Yohannes IV",
      ],
      answer: "0",
      explanation:
        "Tewodros II (1855–1868) → Yohannes IV (1872–1889) → Menilek II (1889–1913).",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about Ethiopia-Italy relations is FALSE?",
      options: [
        "Italy supported Ethiopia's entry to the League of Nations",
        "Italy signed the 1928 Treaty of Peace and Friendship",
        "Italy's protectorate claim after Wuchale was recognized by all European countries including Russia",
        "Italy invaded Ethiopia in 1935",
      ],
      answer: "2",
      explanation:
        "Russia was the ONLY country that openly protested Italy's protectorate claim after Wuchale. Twelve European countries + the USA accepted it, but NOT Russia.",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "Name the three Emperors of modern Ethiopian unification and one key achievement of each.",
      answer:
        "Tewodros II (defeated regional lords to end the Era of Princes). Yohannes IV (defeated Egypt at Gundat and Gura; died at Matamma). Menilek II (won Adwa 1896; formed modern Ethiopian empire by 1900).",
      explanation:
        "Each emperor's reign is defined by a signature achievement.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "Describe the key features of Ethiopia's long distance trade.",
      answer:
        "Direction changed from north to south and east. Items: ivory and civet musk (early 19th c.) → coffee (principal export) and cotton sheeting (abujedie, major import). Traders: mostly foreign immigrants (Indian, Greek, Armenian, Jewish, Yemeni, Syrian). Medium of exchange: Bank of Abyssinia (1905) minted coins and issued notes. Railway from Djibouti gave Addis Ababa centrality and created new towns (Dire Dawa, Nazareth, Mojo).",
      explanation:
        "Banchi, cover direction, items, traders, and medium of exchange.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "Describe Ethiopia's diplomatic relations with the outside world from Tewodros II to Haile Selassie I.",
      answer:
        "Tewodros II → Britain (wanted arms production; ended badly at Maqdala). Yohannes IV → Britain, France, Austria, Germany, Russia (Kirkham mission failed). Menilek II → Italy (three treaties; Wuchale dispute → Adwa). Lej Iyyasu → Germany and Turkey. Empress Zewditu and Haile Selassie → League of Nations, Italy (1928 treaty), USA (1943 Yilma Deresa visit).",
      explanation:
        "Banchi, remember which emperor dealt with which country.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Describe the main battles Ethiopia fought against foreign invaders and their outcomes.",
      answer:
        "Against Egypt: Gundat (1875) and Gura (1876) — Ethiopian victories. Against Mahdist Sudan: Kufit (1885) — victory; Sar Wuha (1887) — defeat; Matamma (1889) — victory but Yohannes killed. Against Italy: Dogali (1887) — victory; Adwa (1896) — victory; Maichew (1936) — defeat; Liberation (1941) — victory with British help. Against Somalia (1977) — Ethiopian victory with USSR/Cuban help.",
      explanation:
        "Banchi, match each battle to the invader. This often appears as a matching question.",
    },
  ],
};