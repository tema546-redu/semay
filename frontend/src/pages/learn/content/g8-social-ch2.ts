import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 SOCIAL STUDIES — UNIT 2
// PEOPLE AND SOCIOECONOMIC ACTIVITIES
// Source: AAEB Grade 8 Social Studies Student Textbook (pp. 33–60)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8SocialCh2: Chapter = {
  id: "ch2",
  number: 2,
  title: "People and Socioeconomic Activities",
  titleAm: "ሕዝብ እና ማህበረ-ኢኮኖሚያዊ እንቅስቃሴዎች",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. What is Culture?",
      titleAm: "ባህል ምንድን ነው?",
      body:
        "Banchi, culture is everything a society believes, does, and makes. It is the symbols, language, religion, beliefs, norms, values, and artifacts that are part of any society. Culture is passed from one generation to the next through teaching, imitation, and communication.",
      bodyAm:
        "ባንቺ፣ ባህል አንድ ማህበረሰብ የሚያምነው፣ የሚሠራው እና የሚሠራው ሁሉ ነው። ምልክቶች፣ ቋንቋ፣ ሃይማኖት፣ እምነቶች፣ ሥርዓቶች፣ እሴቶች እና ቅርሶች የማንኛውም ማህበረሰብ አካል ናቸው። ባህል ከትውልድ ወደ ትውልድ በማስተማር፣ በመኮረጅ እና በመግባባት ይተላለፋል።",
      children: [
        {
          id: "n1-1",
          title: "Two big categories of culture",
          titleAm: "ሁለት ትላልቅ የባህል ምድቦች",
          body:
            "1) MATERIAL culture — physical things people make:\n" +
            "  • Tools and technology\n" +
            "  • Houses, factories\n" +
            "  • Raw materials, clothing\n" +
            "  • Eating utensils, transportation\n\n" +
            "2) NON-MATERIAL culture (symbolic culture) — ideas and beliefs:\n" +
            "  • Values, beliefs\n" +
            "  • Symbols, language\n" +
            "  • Religion, norms",
          bodyAm:
            "1) ቁሳዊ ባህል — ሰዎች የሚሠሯቸው አካላዊ ነገሮች፡ መሣሪያዎች፣ ቴክኖሎጂ፣ ቤቶች፣ ፋብሪካዎች፣ ልብሶች።\n2) ቁሳዊ ያልሆነ ባህል (ምሳሌያዊ ባህል) — ሐሳቦች እና እምነቶች፡ እሴቶች፣ እምነቶች፣ ምልክቶች፣ ቋንቋ፣ ሃይማኖት።",
        },
        {
          id: "n1-2",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, the exam LOVES to swap these. Material = THINGS you can touch (house, car, tools). Non-material = IDEAS (beliefs, values, language). If a question mentions 'values, beliefs, and language' → non-material. If it mentions 'tools and clothing' → material.",
          bodyAm:
            "ባንቺ፣ ፈተናው እነዚህን መቀያየር ይወዳል። ቁሳዊ = መን tabbing የምትችል ነገር (ቤት፣ መኪና፣ መሣሪያ)። ቁሳዊ ያልሆነ = ሐሳብ (እምነት፣ እሴት፣ ቋንቋ)።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Cultural Diversity in Ethiopia",
      titleAm: "የኢትዮጵያ የባህል ብዝሃነት",
      body:
        "Banchi, Ethiopia is a country of MANY cultures — multi-cultural and multi-ethnic. Cultural diversity (also called multiculturalism) means a group of diverse individuals from different cultures or societies living together.",
      bodyAm:
        "ባንቺ፣ ኢትዮጵያ ብዙ ባህሎች ያሏት አገር ነች — ባህላዊ እና ብሔራዊ ብዝሃነት። የባህል ብዝሃነት (ባህላዊ ብዝሃነት) ማለት ከተለያዩ ባህሎች ወይም ማህበረሰቦች የመጡ የተለያዩ ግለሰቦች በአንድ ላይ መኖር ማለት ነው።",
      children: [
        {
          id: "n2-1",
          title: "Common things Ethiopians share",
          titleAm: "ኢትዮጵያውያን የሚጋሩዋቸው የተለመዱ ነገሮች",
          body:
            "• Hospitality\n" +
            "• Respecting elders\n" +
            "• Standing together for their country's sovereignty\n" +
            "• Tolerance\n" +
            "• Patriotism\n" +
            "• Celebrating cultures together",
          bodyAm:
            "• እንግዳ ተቀባይነት\n• ሽማግሌዎችን ማክበር\n• ለሀገራቸው ሉዓላዊነት አንድ ሆነው መቆም\n• መቻቻል\n• አርበኝነት\n• ባህሎችን አንድ ላይ ማክበር",
        },
        {
          id: "n2-2",
          title: "Differences between Ethiopians",
          titleAm: "በኢትዮጵያውያን መካከል ያሉ ልዩነቶች",
          body:
            "• Religion\n" +
            "• Language\n" +
            "• Race\n" +
            "• Marriage ceremonies\n" +
            "• Funeral ceremonies\n" +
            "• Way of dancing\n" +
            "• Dressing style\n" +
            "• Greeting style",
          bodyAm:
            "• ሃይማኖት\n• ቋንቋ\n• ዘር\n• የጋብቻ ሥርዓቶች\n• የቀብር ሥርዓቶች\n• የዳንስ መንገድ\n• የአለባበስ ዘይቤ\n• የሰላምታ ዘይቤ",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Language — Ethiopia's Four Major Families",
      titleAm: "ቋንቋ — የኢትዮጵያ አራት ዋና ቤተሰቦች",
      body:
        "Banchi, most Ethiopian languages belong to the Afro-Asiatic family. But they are divided into FOUR major language groups. You MUST memorize these four names.",
      bodyAm:
        "ባንቺ፣ አብዛኞቹ የኢትዮጵያ ቋንቋዎች የአፍሮ-ኤሺያቲክ ቤተሰብ ናቸው። ግን ወደ አራት ዋና የቋንቋ ቡድኖች ተከፍለዋል። እነዚህን አራት ስሞች ማስታወስ አለብሽ።",
      children: [
        {
          id: "n3-1",
          title: "Semitic languages",
          titleAm: "ሴማዊ ቋንቋዎች",
          body:
            "Spoken in NORTHERN, CENTRAL, and EASTERN Ethiopia (mainly Tigray, Amhara, Harar, northern Southern Peoples).\n\n" +
            "Examples: Amharic, Ge'ez, Guragigna, Tigrigna.",
          bodyAm:
            "በሰሜን፣ መካከለኛ እና ምስራቅ ኢትዮጵያ ይነገራሉ (ትግራይ፣ አማራ፣ ሐረር)።\nምሳሌዎች፡ አማርኛ፣ ግዕዝ፣ ጉራግኛ፣ ትግርኛ።",
        },
        {
          id: "n3-2",
          title: "Cushitic languages",
          titleAm: "ኩሻዊ ቋንቋዎች",
          body:
            "Spoken in CENTRAL, SOUTHERN, and EASTERN Ethiopia (mainly Afar, Oromia, Somali).\n\n" +
            "Examples: Afarigna, Agewigna, Afan Oromo, Sidamigna, Somaligna.",
          bodyAm:
            "በመካከለኛ፣ ደቡብ እና ምስራቅ ኢትዮጵያ ይነገራሉ (አፋር፣ ኦሮሚያ፣ ሶማሊ)።\nምሳሌዎች፡ አፋርኛ፣ አገውኛ፣ አፋን ኦሮሞ፣ ሲዳምኛ፣ ሶማልኛ።",
        },
        {
          id: "n3-3",
          title: "Omotic languages",
          titleAm: "ኦሞቲክ ቋንቋዎች",
          body:
            "Spoken between the LAKES of the southern Rift Valley and the OMO RIVER.\n\n" +
            "Examples: Basketto, Gamo-Gofa, Welaytta.",
          bodyAm:
            "በደቡባዊ ስምጥ ሸለቆ ሐይቆች እና በኦሞ ወንዝ መካከል ይነገራሉ።\nምሳሌዎች፡ ባስኬቶ፣ ጋሞ-ጎፋ፣ ወላይታ።",
        },
        {
          id: "n3-4",
          title: "Nilo-Saharan languages",
          titleAm: "ናይሎ-ሳህራን ቋንቋዎች",
          body:
            "Spoken in the WESTERN part (mainly Gambella and Benishangul).\n\n" +
            "Examples: Agnuak, Berta, Gumuz.",
          bodyAm:
            "በምዕራብ ክፍል ይነገራሉ (በዋናነት ጋምቤላ እና በንሻንጉል)።\nምሳሌዎች፡ አኝዋክ፣ በርታ፣ ጉሙዝ።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, the four families start with: Semitic, Cushitic, Omotic, Nilo-Saharan. Memory trick: 'SCOM-N'. Semitic = North. Cushitic = Central/South/East. Omotic = Omo River. Nilo-Saharan = West.",
          bodyAm:
            "ባንቺ፣ አራቱ ቤተሰቦች፡ ሴማዊ፣ ኩሻዊ፣ ኦሞቲክ፣ ናይሎ-ሳህራን። ሴማዊ = ሰሜን። ኩሻዊ = መካከለኛ/ደቡብ/ምስራቅ። ኦሞቲክ = ኦሞ ወንዝ። ናይሎ-ሳህራን = ምዕራብ።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Religion and Human Race",
      titleAm: "ሃይማኖት እና የሰው ዘር",
      body:
        "Banchi, religion and race are also cultural elements. Let's look at each.",
      bodyAm:
        "ባንቺ፣ ሃይማኖት እና ዘር የባህል አካላት ናቸው።",
      children: [
        {
          id: "n4-1",
          title: "Religion — definition and importance",
          titleAm: "ሃይማኖት — ትርጉም እና ጠቀሜታ",
          body:
            "Religion = a set of organized beliefs, practices, and systems related to the worship of God or a supernatural being.\n\n" +
            "Two important roles:\n" +
            "1) Cultural identity — ceremonies, traditions, heritage\n" +
            "2) Values and ethics — love, empathy, respect, harmony, character building",
          bodyAm:
            "ሃይማኖት = ከእግዚአብሔር ወይም ከተፈጥሮ በላይ ካለ ፍጡር አምልኮ ጋር የተያያዙ የተደራጁ እምነቶች፣ ልማዶች እና ሥርዓቶች።\nሁለት ጠቃሚ ሚናዎች፡ (1) የባህል ማንነት (2) እሴቶች እና ሥነ-ምግባር።",
        },
        {
          id: "n4-2",
          title: "Human race — definition",
          titleAm: "የሰው ዘር — ትርጉም",
          body:
            "Human race = a category of people that is SOCIALLY constructed, sharing certain distinctive PHYSICAL characteristics such as skin color, facial features, and stature.",
          bodyAm:
            "የሰው ዘር = በማህበራዊ መንገድ የተገነባ እና የተወሰኑ አካላዊ ባህሪያትን (የቆዳ ቀለም፣ የፊት ገጽታ፣ ቁመት) የሚጋራ የሰዎች ምድብ።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Globalization and Cultural Change",
      titleAm: "ግሎባላይዜሽን እና የባህል ለውጥ",
      body:
        "Banchi, globalization means the growing interconnectedness among people and nations around the world. It has both opportunities (sharing knowledge, technology) and challenges (loss of local identity).",
      bodyAm:
        "ባንቺ፣ ግሎባላይዜሽን ማለት በዓለም ዙሪያ ባሉ ሰዎች እና አገሮች መካከል እያደገ ያለ ግንኙነት ማለት ነው። ሁለቱም ዕድሎችና ችግሮች አሉት።",
      children: [
        {
          id: "n5-1",
          title: "Four factors that cause cultural change",
          titleAm: "ባህላዊ ለውጥ የሚያመጡ አራት ምክንያቶች",
          body:
            "1) Globalization — interconnections grow\n" +
            "2) Environment — using natural resources in new ways\n" +
            "3) Technology — cars, computers, internet\n" +
            "4) Contact with other cultures — sharing cultures",
          bodyAm:
            "1) ግሎባላይዜሽን — ግንኙነቶች ያድጋሉ\n2) አካባቢ — የተፈጥሮ ሀብቶችን በአዲስ መንገድ መጠቀም\n3) ቴክኖሎጂ — መኪኖች፣ ኮምፒውተሮች፣ ኢንተርኔት\n4) ከሌሎች ባህሎች ጋር መገናኘት",
        },
        {
          id: "n5-2",
          title: "Cultural imperialism — the biggest threat",
          titleAm: "የባህል ኢምፔሪያሊዝም — ትልቁ ስጋት",
          body:
            "Cultural imperialism = the practice of promoting and imposing a culture of a POLITICALLY POWERFUL nation over a LESS POWERFUL society, and alienating people from their indigenous culture.\n\n" +
            "Example: Western satellite TV programs can negatively affect indigenous Ethiopian cultures.",
          bodyAm:
            "የባህል ኢምፔሪያሊዝም = የአንድ ፖለቲካዊ ኃያል አገር ባህል በደካማ ማህበረሰብ ላይ መጫን እና ሰዎችን ከአገር በቀል ባህላቸው ማራቅ።\nምሳሌ፡ የምዕራባውያን የሳተላይት ቲቪ ፕሮግራሞች በኢትዮጵያ ባህል ላይ አሉታዊ ተጽዕኖ ያሳድራሉ።",
        },
        {
          id: "n5-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: globalization has BOTH positive (ideas, technology, trade) AND negative (loss of indigenous culture, cultural imperialism) effects. If asked 'Is globalization always good?' — answer: No, it has both sides.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ግሎባላይዜሽን ሁለቱም አዎንታዊ እና አሉታዊ ተጽዕኖ አለው።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Economic Activities — Three Big Families",
      titleAm: "የኢኮኖሚ እንቅስቃሴዎች — ሦስት ትላልቅ ቤተሰቦች",
      body:
        "Banchi, all economic activities in the world fall into one of three families. Memorize the difference — it's the #1 test topic in this unit.",
      bodyAm:
        "ባንቺ፣ በዓለም ያሉ ሁሉም የኢኮኖሚ እንቅስቃሴዎች በሦስት ቤተሰቦች ውስጥ ይገባሉ። ልዩነቱን አስታውሺ።",
      children: [
        {
          id: "n6-1",
          title: "Primary — Extraction from Nature",
          titleAm: "ዋና (Primary) — ከተፈጥሮ ማውጣት",
          body:
            "Primary activities focus DIRECTLY on extracting resources from the environment. They produce food and raw materials.\n\n" +
            "Main types:\n" +
            "• Agriculture (crop + livestock)\n" +
            "• Forestry\n" +
            "• Fishery\n" +
            "• Mining",
          bodyAm:
            "የዋና እንቅስቃሴዎች በቀጥታ ከአካባቢው ሀብቶችን ማውጣት ላይ ያተኩራሉ። ምግብ እና ጥሬ ዕቃ ያመርታሉ።\nዋና ዓይነቶች፡ ግብርና፣ ደን፣ ዓሳ፣ ማዕድን።",
        },
        {
          id: "n6-2",
          title: "Secondary — Manufacturing and Building",
          titleAm: "ሁለተኛ (Secondary) — ማምረት እና መገንባት",
          body:
            "Secondary activities ADD VALUE to already-existing products by changing their form.\n\n" +
            "Includes:\n" +
            "• Manufacturing (raw materials → finished goods)\n" +
            "• Construction\n" +
            "• Power production",
          bodyAm:
            "ሁለተኛ እንቅስቃሴዎች ቅርጻቸውን በመቀየር ለነባር ምርቶች ዋጋ ይጨምራሉ።\nማካተት፡ ማምረት (ጥሬ ዕቃ → የተጠናቀቁ ዕቃዎች)፣ ግንባታ፣ ኃይል ማመንጨት።",
        },
        {
          id: "n6-3",
          title: "Tertiary — Services",
          titleAm: "ሦስተኛ (Tertiary) — አገልግሎቶች",
          body:
            "Tertiary activities SUPPORT the primary and secondary sectors. They do NOT produce goods — they provide services.\n\n" +
            "Includes:\n" +
            "• Transportation\n" +
            "• Communication\n" +
            "• Trade\n" +
            "• Tourism\n" +
            "• Health\n" +
            "• Education\n" +
            "• Administration",
          bodyAm:
            "ሦስተኛ እንቅስቃሴዎች የዋናውን እና ሁለተኛውን ዘርፍ ይደግፋሉ። ዕቃዎችን አያመርቱም — አገልግሎት ይሰጣሉ።\nማካተት፡ ትራንስፖርት፣ ተግባቦት፣ ንግድ፣ ቱሪዝም፣ ጤና፣ ትምህርት፣ አስተዳደር።",
        },
        {
          id: "n6-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, the biggest trap in this unit: which family does it belong to?\n" +
            "• Farming, mining, fishing, forestry → PRIMARY\n" +
            "• Factory, construction, power plant → SECONDARY\n" +
            "• School, hospital, bank, taxi, hotel → TERTIARY\n\n" +
            "Memory trick: 'Primary = from the Earth. Secondary = made in a factory. Tertiary = a service.'",
          bodyAm:
            "ባንቺ፣ ትልቁ ወጥመድ፡ የትኛው ቤተሰብ ነው?\n• እርሻ፣ ማዕድን፣ ዓሳ፣ ደን → ዋና\n• ፋብሪካ፣ ግንባታ፣ ኃይል → ሁለተኛ\n• ትምህርት ቤት፣ ሆስፒታል፣ ባንክ፣ ታክሲ፣ ሆቴል → ሦስተኛ",
        },
      ],
    },

    {
      id: "n7",
      title: "7. Manufacturing vs Industry",
      titleAm: "ማምረት እና ኢንዱስትሪ",
      body:
        "Banchi, these two words are often confused. Learn the difference.",
      bodyAm:
        "ባንቺ፣ እነዚህ ሁለት ቃላት ብዙ ጊዜ ይምታታሉ። ልዩነቱን ተማሪ።",
      children: [
        {
          id: "n7-1",
          title: "The difference",
          titleAm: "ልዩነቱ",
          body:
            "Manufacturing = the ACTIVITY of turning raw materials into products using labor, energy, and equipment.\n\n" +
            "Industry = the PLACE where manufacturing takes place (the factory).\n\n" +
            "Memory trick: 'Manufacturing is the DOING. Industry is the PLACE.'",
          bodyAm:
            "ማምረት = ጥሬ ዕቃን ወደ ምርቶች የመቀየር እንቅስቃሴ።\nኢንዱስትሪ = ማምረት የሚካሄድበት ቦታ (ፋብሪካ)።",
        },
        {
          id: "n7-2",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, if a question says 'turning raw materials into finished goods', that is manufacturing. If it says 'a factory', that is industry.",
          bodyAm:
            "ባንቺ፣ 'ጥሬ ዕቃን ወደ የተጠናቀቁ ዕቃዎች መቀየር' ከተባለ ያ ማምረት ነው። 'ፋብሪካ' ከተባለ ያ ኢንዱስትሪ ነው።",
        },
      ],
    },

    {
      id: "n8",
      title: "8. Trade — Internal and External",
      titleAm: "ንግድ — የውስጥ እና የውጭ",
      body:
        "Banchi, trade = buying, selling, or exchanging goods. Two big categories: internal (within one country) and external (between countries).",
      bodyAm:
        "ባንቺ፣ ንግድ = ዕቃዎችን መግዛት፣ መሸጥ ወይም መለዋወጥ። ሁለት ትላልቅ ምድቦች፡ የውስጥ እና የውጭ።",
      children: [
        {
          id: "n8-1",
          title: "Internal trade — two types",
          titleAm: "የውስጥ ንግድ — ሁለት ዓይነቶች",
          body:
            "1) Wholesale — buying and selling in LARGE quantities.\n" +
            "2) Retail — selling goods DIRECTLY to consumers.",
          bodyAm:
            "1) ጅምላ — በብዛት መግዛት እና መሸጥ።\n2) ችርቻሮ — ለተጠቃሚዎች በቀጥታ መሸጥ።",
        },
        {
          id: "n8-2",
          title: "External trade — three types",
          titleAm: "የውጭ ንግድ — ሦስት ዓይነቶች",
          body:
            "1) Import trade — buying goods FROM foreign countries.\n" +
            "2) Export trade — selling domestic goods TO another country.\n" +
            "3) Entrepot trade — importing foreign goods and RE-EXPORTING them.",
          bodyAm:
            "1) አስገቢ ንግድ — ከውጭ አገሮች ዕቃዎችን መግዛት።\n2) ወደ ውጭ የመላክ ንግድ — የአገር ውስጥ ዕቃዎችን ወደ ሌላ አገር መሸጥ።\n3) ኤንትሬፖ — የውጭ ዕቃዎችን አስገብቶ እንደገና ወደ ውጭ መላክ።",
        },
        {
          id: "n8-3",
          title: "Ethiopia's main exports",
          titleAm: "የኢትዮጵያ ዋና ወደ ውጭ የሚላኩ",
          body:
            "Ethiopia's export is dominated by agricultural products:\n" +
            "• Coffee (the #1 export)\n" +
            "• Livestock products (leather, live animals, meat)\n" +
            "• Oil seeds and pulses\n" +
            "• Fruits, vegetables, flowers\n" +
            "• Textiles\n" +
            "• Natural gum, spices, minerals",
          bodyAm:
            "የኢትዮጵያ ወደ ውጭ የሚላኩ በግብርና ምርቶች ይመራሉ፡\n• ቡና (ቁጥር 1)\n• የእንስሳት ምርቶች (ቆዳ፣ ሕያዋን እንስሳት፣ ሥጋ)\n• የዘይት ዘሮች እና ጥራጥሬዎች\n• ፍራፍሬዎች፣ አትክልቶች፣ አበቦች\n• ጨርቃ ጨርቅ\n• ተፈጥሯዊ ሙጫ፣ ቅመማ ቅመም፣ ማዕድኖች",
        },
      ],
    },

    {
      id: "n9",
      title: "9. Supply, Demand, and Market Equilibrium",
      titleAm: "አቅርቦት፣ ፍላጎት እና የገበያ ሚዛን",
      body:
        "Banchi, three words you must know for any economics question.",
      bodyAm:
        "ባንቺ፣ ለማንኛውም የኢኮኖሚክስ ጥያቄ ማወቅ ያለብሽ ሦስት ቃላት።",
      children: [
        {
          id: "n9-1",
          title: "The three key terms",
          titleAm: "ሦስቱ ቁልፍ ቃላት",
          body:
            "DEMAND = amount of a good that BUYERS are willing and able to buy.\n" +
            "SUPPLY = amount of a good that SELLERS are willing and able to sell.\n" +
            "MARKET EQUILIBRIUM = the point where supply and demand curves INTERSECT.\n\n" +
            "At equilibrium, quantity demanded = quantity supplied.",
          bodyAm:
            "ፍላጎት = ገዢዎች ለመግዛት ፈቃደኛ እና ችሎታ ያላቸው መጠን።\nአቅርቦት = ሻጮች ለመሸጥ ፈቃደኛ እና ችሎታ ያላቸው መጠን።\nየገበያ ሚዛን = የአቅርቦት እና የፍላጎት ኩርባዎች የሚገናኙበት ነጥብ።",
        },
        {
          id: "n9-2",
          title: "Shortage vs Surplus",
          titleAm: "እጥረት እና ትርፍ",
          body:
            "SHORTAGE (excess demand) = quantity demanded > quantity supplied.\n" +
            "SURPLUS (excess supply) = quantity supplied > quantity demanded.",
          bodyAm:
            "እጥረት = የሚፈለገው > የሚቀርበው።\nትርፍ = የሚቀርበው > የሚፈለገው።",
        },
        {
          id: "n9-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, easy mix-up: SHORTAGE means buyers want more than sellers have (prices go UP). SURPLUS means sellers have more than buyers want (prices go DOWN).",
          bodyAm:
            "ባንቺ፣ ቀላል ማምታታት፡ እጥረት ማለት ገዢዎች ከሻጮች በላይ ይፈልጋሉ (ዋጋ ይወጣል)። ትርፍ ማለት ሻጮች ከገዢዎች በላይ አላቸው (ዋጋ ይወርዳል)።",
        },
      ],
    },

    {
      id: "n10",
      title: "10. Competitive Market and Consumers' Rights",
      titleAm: "ተወዳዳሪ ገበያ እና የተጠቃሚዎች መብቶች",
      body:
        "Banchi, a competitive market has many buyers and many sellers, each with very little influence on price. Learn the conditions and the consumer rights.",
      bodyAm:
        "ባንቺ፣ ተወዳዳሪ ገበያ ብዙ ገዢዎች እና ብዙ ሻጮች ያሉት ሲሆን እያንዳንዱ በዋጋ ላይ ትንሽ ተጽዕኖ ብቻ አለው።",
      children: [
        {
          id: "n10-1",
          title: "Five conditions for perfect competition",
          titleAm: "ለፍጹም ውድድር አምስት ቅድመ ሁኔታዎች",
          body:
            "1) Each buyer knows there are several sellers.\n" +
            "2) Sellers know each buyer purchases only a small amount.\n" +
            "3) Goods are exactly the same (uniform price).\n" +
            "4) Buyers and sellers are so numerous that no single one can influence price.\n" +
            "5) Buyers and sellers are free to enter or leave the market.",
          bodyAm:
            "1) እያንዳንዱ ገዢ ብዙ ሻጮች እንዳሉ ያውቃል።\n2) ሻጮች እያንዳንዱ ገዢ ትንሽ መጠን ብቻ እንደሚገዛ ያውቃሉ።\n3) ዕቃዎቹ በትክክል አንድ ናቸው (አንድ ወጥ ዋጋ)።\n4) ገዢዎችና ሻጮች በጣም ብዙ ናቸው — ማንም በዋጋ ላይ ተጽዕኖ ማድረግ አይችልም።\n5) ገዢዎችና ሻጮች ገበያውን ለመተው ወይም ለመቀላቀል ነፃ ናቸው።",
        },
        {
          id: "n10-2",
          title: "Ethiopian consumer rights (Proclamation 685/2010)",
          titleAm: "የኢትዮጵያ ተጠቃሚ መብቶች",
          body:
            "1) Get accurate information about goods and services.\n" +
            "2) Buy selectively.\n" +
            "3) Not be obliged to buy.\n" +
            "4) Be received humbly and respectfully.\n" +
            "5) Submit complaints to the Trade Practice and Consumers' Protection Authority.\n" +
            "6) Be compensated for damages.",
          bodyAm:
            "1) ስለ ዕቃዎች እና አገልግሎቶች ትክክለኛ መረጃ ማግኘት።\n2) በመምረጥ መግዛት።\n3) ለመግዛት አለመገደድ።\n4) በትሕትና እና በአክብሮት መቀበል።\n5) ቅሬታን ለንግድ ሥርዓት እና የተጠቃሚዎች መከላከያ ባለሥልጣን ማቅረብ።\n6) ለደረሰበት ጉዳት ካሳ ማግኘት።",
        },
      ],
    },

    {
      id: "n11",
      title: "11. Government Revenue and Tax",
      titleAm: "የመንግሥት ገቢ እና ታክስ",
      body:
        "Banchi, government revenue = all income the government collects (from taxes AND non-tax sources). It pays for roads, schools, hospitals, and defense.",
      bodyAm:
        "ባንቺ፣ የመንግሥት ገቢ = መንግሥት የሚሰበስበው ገቢ (ከታክስ እና ከታክስ ካልሆኑ ምንጮች)። ለመንገዶች፣ ለትምህርት ቤቶች፣ ለሆስፒታሎች እና ለመከላከያ ያገለግላል።",
      children: [
        {
          id: "n11-1",
          title: "Tax — definition",
          titleAm: "ታክስ — ትርጉም",
          body:
            "Tax = a mandatory fee or financial charge levied by a government on an individual or organization to collect revenue for public works, facilities, and infrastructure.",
          bodyAm:
            "ታክስ = መንግሥት ለሕዝባዊ ሥራዎች፣ ለተቋማት እና ለመሠረተ ልማት ገቢ ለመሰብሰብ በግለሰብ ወይም በድርጅት ላይ የሚጥለው የግዴታ ክፍያ ነው።",
        },
        {
          id: "n11-2",
          title: "Benefits of tax",
          titleAm: "የታክስ ጥቅሞች",
          body:
            "• Removal of income and wealth inequalities\n" +
            "• Ensuring economic stability\n" +
            "• Reduction of regional imbalances\n" +
            "• Capital accumulation\n" +
            "• Creation of employment opportunities\n" +
            "• Beneficial diversion of resources\n" +
            "• Encouragement of export",
          bodyAm:
            "• የገቢ እና የሀብት ልዩነትን ማስወገድ\n• የኢኮኖሚ መረጋጋትን ማረጋገጥ\n• የክልል ሚዛን ማስተካከል\n• የካፒታል ክምችት\n• የሥራ ዕድሎችን መፍጠር\n• ጠቃሚ የሀብት ማስተላለፍ\n• ወደ ውጭ የመላክ ማበረታቻ",
        },
        {
          id: "n11-3",
          title: "Historical development of tax in Ethiopia",
          titleAm: "በኢትዮጵያ የታክስ ታሪካዊ እድገት",
          body:
            "• Traditional taxes: crops, livestock, wool, butter, milk. Hunting tax (ivory) on elephant hunters.\n" +
            "• Axumite Kingdom: traditional taxation existed.\n" +
            "• King Zera Yacob (1434–1468): first formal tax system introduced.\n" +
            "• Emperor Menelik II (late 19th c.): first big reform, fixed tithe.\n" +
            "• Haile Selassie regime (1942–1974): personal income tax, business income tax, land tax, etc.\n" +
            "• Derg regime (1975–1991): abolished land taxes and tithe. Income tax proclamations 77/1976 and 152/1978.\n" +
            "• Transitional government (1991–1995): proclamation 30/1992, then amended by 107/1994 (exemption rose from Birr 105 to Birr 120).",
          bodyAm:
            "• ባህላዊ ታክሶች፡ ሰብሎች፣ እንስሳት፣ ሱፍ፣ ቅቤ፣ ወተት። የዝሆን አደን ታክስ (የዝሆን ጥርስ)።\n• የአክሱም መንግሥት፡ ባህላዊ ታክስ ነበር።\n• ዓፄ ዘርዐ ያዕቆብ (1434–1468)፡ የመጀመሪያውን መደበኛ የታክስ ሥርዓት አስተዋወቀ።\n• ዓፄ ምኒልክ ዳግማዊ (በ19ኛው ክፍለ ዘመን መጨረሻ)፡ የመጀመሪያው ትልቅ ሪፎርም — ቋሚ ዐሥራት።\n• የኃይለ ሥላሴ አገዛዝ (1942–1974)፡ የግል ገቢ ታክስ፣ የንግድ ገቢ ታክስ፣ የመሬት ታክስ።\n• ደርግ (1975–1991)፡ የመሬት ታክስ እና ዐሥራት አስወገደ። አዋጅ 77/1976 እና 152/1978።\n• ሽግግር መንግሥት (1991–1995)፡ አዋጅ 30/1992፣ በ107/1994 ተሻሽሏል።",
        },
        {
          id: "n11-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: taxes can be DIRECT (income tax) or INDIRECT (VAT, customs, salt tax). The question may ask which type — check whether it is on income (direct) or on goods/services (indirect).",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ታክሶች ቀጥተኛ (የገቢ ታክስ) ወይም ቀጥተኛ ያልሆኑ (ተ.እ.ታ፣ ጉምሩክ፣ የጨው ታክስ) ሊሆኑ ይችላሉ።",
        },
      ],
    },

    {
      id: "n12",
      title: "12. Exam Strategy — Unit 2",
      titleAm: "የፈተና ስልት — ክፍል 2",
      body:
        "Banchi, before answering Unit 2 questions, use these five quick checks.",
      bodyAm:
        "ባንቺ፣ የክፍል 2 ጥያቄዎችን ከመመለስሽ በፊት እነዚህን አምስት ፈጣን ቼኮች ተጠቀሚ።",
      children: [
        {
          id: "n12-1",
          title: "Check 1 — Material or non-material?",
          titleAm: "ቼክ 1 — ቁሳዊ ወይስ ቁሳዊ ያልሆነ?",
          body:
            "Touchable → material. Beliefs/values → non-material.",
          bodyAm:
            "የሚነካ → ቁሳዊ። እምነት/እሴት → ቁሳዊ ያልሆነ።",
        },
        {
          id: "n12-2",
          title: "Check 2 — Which economic activity?",
          titleAm: "ቼክ 2 — የትኛው የኢኮኖሚ እንቅስቃሴ?",
          body:
            "From nature → primary. From a factory → secondary. A service → tertiary.",
          bodyAm:
            "ከተፈጥሮ → ዋና። ከፋብሪካ → ሁለተኛ። አገልግሎት → ሦስተኛ።",
        },
        {
          id: "n12-3",
          title: "Check 3 — Which trade type?",
          titleAm: "ቼክ 3 — የትኛው የንግድ ዓይነት?",
          body:
            "Within the country → internal (wholesale/retail). Across borders → external (import/export/entrepot).",
          bodyAm:
            "በሀገር ውስጥ → የውስጥ (ጅምላ/ችርቻሮ)። ከድንበር ማዶ → የውጭ (አስገቢ/ወደ ውጭ/ኤንትሬፖ)።",
        },
        {
          id: "n12-4",
          title: "Check 4 — Demand or supply?",
          titleAm: "ቼክ 4 — ፍላጎት ወይስ አቅርቦት?",
          body:
            "BUYERS → demand. SELLERS → supply. Intersection → equilibrium.",
          bodyAm:
            "ገዢዎች → ፍላጎት። ሻጮች → አቅርቦት። መገናኛ → ሚዛን።",
        },
        {
          id: "n12-5",
          title: "Check 5 — Ethiopia's language family?",
          titleAm: "ቼክ 5 — የትኛው የኢትዮጵያ ቋንቋ ቤተሰብ?",
          body:
            "North → Semitic. Central/South/East → Cushitic. Omo River → Omotic. West → Nilo-Saharan.",
          bodyAm:
            "ሰሜን → ሴማዊ። መካከለኛ/ደቡብ/ምስራቅ → ኩሻዊ። ኦሞ ወንዝ → ኦሞቲክ። ምዕራብ → ናይሎ-ሳህራን።",
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
      stem: "Culture is best defined as:",
      options: [
        "Only the food people eat",
        "The symbols, language, religion, beliefs, and artifacts of a society",
        "Only the clothes people wear",
        "Only the music people listen to",
      ],
      answer: "1",
      explanation:
        "Culture includes ALL of these: symbols, language, religion, beliefs, norms, values, and artifacts.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is an example of MATERIAL culture?",
      options: ["Beliefs", "Values", "Language", "Clothing"],
      answer: "3",
      explanation:
        "Material culture = physical things you can touch (tools, houses, clothing). Beliefs, values, and language are non-material.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is an example of NON-MATERIAL culture?",
      options: ["Tools", "Houses", "Values", "Eating utensils"],
      answer: "2",
      explanation:
        "Non-material culture = ideas and beliefs (values, beliefs, language, symbols). Tools, houses, utensils are material.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "Cultural diversity is also known as:",
      options: ["Multiculturalism", "Materialism", "Globalization", "Imperialism"],
      answer: "0",
      explanation:
        "Cultural diversity = multiculturalism = a group of diverse individuals from different cultures or societies.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "Which language family is spoken in NORTHERN Ethiopia?",
      options: ["Cushitic", "Omotic", "Semitic", "Nilo-Saharan"],
      answer: "2",
      explanation:
        "Semitic languages are spoken in northern, central, and eastern Ethiopia. Examples: Amharic, Tigrigna.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "Afan Oromo belongs to which language family?",
      options: ["Semitic", "Cushitic", "Omotic", "Nilo-Saharan"],
      answer: "1",
      explanation:
        "Afan Oromo is a Cushitic language. Cushitic languages are spoken in central, southern, and eastern Ethiopia.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "Which language family is spoken between the southern Rift Valley lakes and the Omo River?",
      options: ["Semitic", "Cushitic", "Omotic", "Nilo-Saharan"],
      answer: "2",
      explanation:
        "Omotic languages (Basketto, Gamo-Gofa, Welaytta) are spoken between the southern Rift Valley lakes and the Omo River.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "Which language family is spoken in WESTERN Ethiopia (Gambella, Benishangul)?",
      options: ["Nilo-Saharan", "Cushitic", "Omotic", "Semitic"],
      answer: "0",
      explanation:
        "Nilo-Saharan (Agnuak, Berta, Gumuz) is spoken in western Ethiopia.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "How many major language families does Ethiopia have?",
      options: ["2", "3", "4", "5"],
      answer: "2",
      explanation:
        "Four: Semitic, Cushitic, Omotic, Nilo-Saharan.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one of these is a PRIMARY economic activity?",
      options: ["Manufacturing", "Farming", "Transportation", "Banking"],
      answer: "1",
      explanation:
        "Farming is primary (extraction from nature). Manufacturing is secondary. Transportation and banking are tertiary.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is a SECONDARY economic activity?",
      options: ["Mining", "Fishing", "Manufacturing", "Tourism"],
      answer: "2",
      explanation:
        "Manufacturing is secondary. Mining and fishing are primary. Tourism is tertiary.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is a TERTIARY economic activity?",
      options: ["Forestry", "Construction", "Banking", "Mining"],
      answer: "2",
      explanation:
        "Banking is a service = tertiary. Forestry and mining are primary. Construction is secondary.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a primary economic activity?",
      options: ["Agriculture", "Manufacturing", "Communication", "Construction"],
      answer: "0",
      explanation:
        "Agriculture is primary. Manufacturing and construction are secondary. Communication is tertiary.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "Industry refers to:",
      options: [
        "The activity of making things",
        "The place where manufacturing takes place",
        "Buying goods",
        "Selling goods",
      ],
      answer: "1",
      explanation:
        "Industry = the PLACE (factory) where manufacturing happens. Manufacturing = the ACTIVITY of making things.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "Manufacturing refers to:",
      options: [
        "The place where goods are made",
        "The activity of turning raw materials into finished goods",
        "Selling goods to consumers",
        "Extracting minerals",
      ],
      answer: "1",
      explanation:
        "Manufacturing = the ACTIVITY. It uses labor, energy, and equipment to turn raw materials into products.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "Tourism is known as the:",
      options: ["Smokeless industry", "Heavy industry", "Primary industry", "Extractive industry"],
      answer: "0",
      explanation:
        "Tourism is called the 'smokeless industry' because it doesn't pollute like factories do.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "Internal trade occurs:",
      options: [
        "Between two different countries",
        "Within the same country",
        "Only in cities",
        "Only in rural areas",
      ],
      answer: "1",
      explanation:
        "Internal (domestic) trade = within the same country. External (international) trade = between two countries.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "External trade includes all EXCEPT:",
      options: ["Import trade", "Export trade", "Entrepot trade", "Retail trade"],
      answer: "3",
      explanation:
        "Retail trade is INTERNAL (selling directly to consumers). The other three are external.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "Buying goods from a foreign country is called:",
      options: ["Export trade", "Import trade", "Entrepot trade", "Retail trade"],
      answer: "1",
      explanation:
        "Import = buying FROM foreign countries. Export = selling TO another country.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "Selling domestic goods to another country is called:",
      options: ["Import trade", "Export trade", "Wholesale trade", "Retail trade"],
      answer: "1",
      explanation:
        "Export = selling TO another country.",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "Importing foreign goods to RE-EXPORT them is called:",
      options: ["Import trade", "Export trade", "Entrepot trade", "Retail trade"],
      answer: "2",
      explanation:
        "Entrepot trade = importing goods to re-export them to other countries.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "The amount of a good that SELLERS are willing to sell is:",
      options: ["Demand", "Supply", "Surplus", "Shortage"],
      answer: "1",
      explanation:
        "Supply = sellers' willingness to sell. Demand = buyers' willingness to buy.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "The amount of a good that BUYERS are willing to buy is:",
      options: ["Demand", "Supply", "Surplus", "Shortage"],
      answer: "0",
      explanation:
        "Demand = buyers' willingness to buy.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "The point where supply and demand curves intersect is called:",
      options: ["Surplus point", "Shortage point", "Market equilibrium", "Trade point"],
      answer: "2",
      explanation:
        "Market equilibrium = the point where supply = demand. This gives the equilibrium price.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "Ethiopia's main export product is:",
      options: ["Tea", "Textile", "Coffee", "Gold"],
      answer: "2",
      explanation:
        "Coffee is Ethiopia's #1 export product. It dominates the export trade.",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT a factor causing cultural change?",
      options: ["Globalization", "Technology", "Contact with other cultures", "Exfoliation"],
      answer: "3",
      explanation:
        "Exfoliation is a physical weathering process (geography), NOT a factor for cultural change. The other three are cultural change factors.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Cultural imperialism means:",
      options: [
        "Spreading your own culture peacefully",
        "Promoting one powerful nation's culture over a weaker society",
        "Mixing two cultures equally",
        "Learning another language",
      ],
      answer: "1",
      explanation:
        "Cultural imperialism = promoting and imposing a POWERFUL nation's culture over a LESS POWERFUL society, alienating people from their indigenous culture.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is an OPPORTUNITY of globalization?",
      options: [
        "Loss of local identity",
        "Sharing of information and technology",
        "Cultural imperialism",
        "Dependence on Western culture",
      ],
      answer: "1",
      explanation:
        "Globalization has opportunities (sharing of information, technology, economic resources) AND challenges (loss of local identity, cultural imperialism).",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a CHALLENGE of globalization?",
      options: [
        "Sharing of technology",
        "Stronger interdependence",
        "Cultural imperialism and loss of local identity",
        "Growth of global trade",
      ],
      answer: "2",
      explanation:
        "Cultural imperialism and loss of indigenous culture are challenges of globalization.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Religion plays which role in society?",
      options: [
        "Only political",
        "Cultural identity and moral values",
        "Only economic",
        "No role",
      ],
      answer: "1",
      explanation:
        "Religion gives cultural identity (ceremonies, traditions) and values/ethics (love, empathy, respect, harmony).",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Human race is a category based on:",
      options: [
        "Language only",
        "Physical characteristics like skin color and facial features",
        "Religion only",
        "Economic status only",
      ],
      answer: "1",
      explanation:
        "Human race = socially constructed category sharing physical characteristics (skin color, facial features, stature).",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "Ethiopia's agriculture is mainly characterized as:",
      options: ["Industrial and mechanized", "Subsistence and small-scale", "Fully commercial", "Fully export-based"],
      answer: "1",
      explanation:
        "Ethiopian agriculture is mostly subsistence and small-scale. The majority of people work in it, but production per person is low.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "In DEVELOPED countries, most people work in:",
      options: [
        "Primary activities",
        "Secondary and tertiary activities",
        "Only primary activities",
        "Only agriculture",
      ],
      answer: "1",
      explanation:
        "In developed countries, most people work in secondary (manufacturing) and tertiary (service) activities. Only a few work in primary.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "In DEVELOPING countries, most people work in:",
      options: ["Primary activities (agriculture)", "Tertiary activities", "Manufacturing", "Technology"],
      answer: "0",
      explanation:
        "In developing countries, the great majority work in agriculture (primary). Production is low but the number of workers is high.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "Which sector produces food and raw materials?",
      options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
      answer: "0",
      explanation:
        "Primary activities produce food and raw materials by extracting from the environment.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "Which sector adds value to raw materials?",
      options: ["Primary", "Secondary", "Tertiary", "None"],
      answer: "1",
      explanation:
        "Secondary activities (manufacturing, construction, power) add value by changing the form of raw materials.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Which sector supports primary and secondary without producing goods?",
      options: ["Primary", "Secondary", "Tertiary", "Extractive"],
      answer: "2",
      explanation:
        "Tertiary = support services (transportation, communication, trade, tourism). They provide services, not goods.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the difference between a market and trade?",
      options: [
        "They are the same",
        "Market is a place; trade is the activity of exchanging goods",
        "Trade is a place; market is the activity",
        "Neither exists in Ethiopia",
      ],
      answer: "1",
      explanation:
        "Market = a PLACE where buyers and sellers meet. Trade = the ACTIVITY of buying/selling/exchanging.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Which type of market has so many buyers and sellers that no one controls the price?",
      options: ["Monopoly", "Perfect competition", "Oligopoly", "Black market"],
      answer: "1",
      explanation:
        "Perfect competition has so many buyers and sellers that no single one can influence the price. They are 'price takers'.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "A situation where quantity demanded is GREATER than quantity supplied is called:",
      options: ["Surplus", "Shortage", "Equilibrium", "Trade"],
      answer: "1",
      explanation:
        "Shortage (excess demand) = quantity demanded > quantity supplied. Prices go UP.",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "A situation where quantity supplied is GREATER than quantity demanded is called:",
      options: ["Surplus", "Shortage", "Equilibrium", "Trade"],
      answer: "0",
      explanation:
        "Surplus (excess supply) = quantity supplied > quantity demanded. Prices go DOWN.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a major supply problem for Ethiopian consumers?",
      options: [
        "Illegal practices like black marketing and hoarding",
        "Too many products",
        "Too many sellers",
        "Too low prices",
      ],
      answer: "0",
      explanation:
        "Supply problems include malpractices by suppliers (black marketing, hoarding, profiteering), wrong weights, duplicate goods, health hazards, etc.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "According to Ethiopian law, consumers have the right to:",
      options: [
        "Buy only from one seller",
        "Get accurate information about goods and services",
        "Not complain",
        "Pay any price asked",
      ],
      answer: "1",
      explanation:
        "Consumers have the right to accurate information, selective buying, respectful treatment, complaint, and compensation.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "Government revenue refers to:",
      options: [
        "Only taxes",
        "All income from taxes AND non-tax sources",
        "Only foreign aid",
        "Only donations",
      ],
      answer: "1",
      explanation:
        "Government revenue = ALL income (tax + non-tax). It pays for roads, schools, hospitals, and defense.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "Tax is best defined as:",
      options: [
        "A voluntary donation",
        "A mandatory financial charge levied by government",
        "A loan from citizens",
        "A private payment",
      ],
      answer: "1",
      explanation:
        "Tax = a MANDATORY fee or charge imposed by the government to finance public works.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a benefit of government tax?",
      options: [
        "Removal of income and wealth inequalities",
        "Increasing pollution",
        "Reducing jobs",
        "Weakening the economy",
      ],
      answer: "0",
      explanation:
        "Tax benefits: reduces inequality, ensures economic stability, reduces regional imbalances, accumulates capital, creates jobs, diverts resources, encourages exports.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "Who introduced the FIRST formal tax system in Ethiopia?",
      options: ["Emperor Menelik II", "King Zera Yacob (1434–1468)", "Emperor Haile Selassie", "The Derg"],
      answer: "1",
      explanation:
        "King Zera Yacob (1434–1468) introduced the first formal tax system. Emperor Menelik II carried out the first big reform (fixed tithe) later.",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "Which emperor carried out the FIRST BIG TAX REFORM, establishing a fixed tithe?",
      options: ["Tewodros II", "Yohannes IV", "Menelik II", "Haile Selassie I"],
      answer: "2",
      explanation:
        "Emperor Menelik II (late 19th century) established a FIXED TITHE, replacing the arbitrary system.",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "Under which regime were land taxes and tithe ABOLISHED?",
      options: ["Haile Selassie", "Derg (1975–1991)", "Menelik II", "Transitional Government"],
      answer: "1",
      explanation:
        "The Derg (1975) abolished the feudal land tenure system, land taxes, and tithe. Health and education taxes were also cancelled.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "Which income tax proclamations were issued during the Derg regime?",
      options: ["30/1992 and 107/1994", "77/1976 and 152/1978", "685/2010", "1/1942"],
      answer: "1",
      explanation:
        "Proclamations 77/1976 and 152/1978 were issued during the Derg regime, aimed at changing income tax on agriculture.",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about manufacturing and industry is CORRECT?",
      options: [
        "They mean the same thing",
        "Manufacturing is the activity; industry is the place",
        "Industry is the activity; manufacturing is the place",
        "Neither involves raw materials",
      ],
      answer: "1",
      explanation:
        "Manufacturing = the ACTIVITY of turning raw materials into finished goods. Industry = the PLACE (factory) where manufacturing happens.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly matches economic sectors to development level?",
      options: [
        "Developed countries → mostly primary; developing → mostly tertiary",
        "Developed → mostly secondary/tertiary; developing → mostly primary",
        "Both have the same distribution",
        "Neither has secondary activities",
      ],
      answer: "1",
      explanation:
        "Developed countries have most workers in secondary/tertiary. Developing countries have most workers in primary (agriculture).",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Which one is NOT a condition for perfect competition?",
      options: [
        "Many buyers and sellers",
        "Identical goods",
        "Freedom to enter and leave the market",
        "Government sets the price",
      ],
      answer: "3",
      explanation:
        "Perfect competition means NO single buyer or seller sets the price — the market does. Government does NOT set the price.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Which feature of globalization MOST DIRECTLY threatens Ethiopian indigenous culture?",
      options: [
        "Increase in exports",
        "Western satellite TV and mass media",
        "Growth of domestic trade",
        "Improvement in roads",
      ],
      answer: "1",
      explanation:
        "Western satellite TV programs and mass media deliver cultural products that can alienate people (especially youth) from their indigenous culture.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about Ethiopia's languages is FALSE?",
      options: [
        "Most belong to the Afro-Asiatic family",
        "Amharic is a Semitic language",
        "Afan Oromo is a Semitic language",
        "Gumuz is a Nilo-Saharan language",
      ],
      answer: "2",
      explanation:
        "Afan Oromo is CUSHITIC, not Semitic. Banchi, this is a common exam trap.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes entrepot trade?",
      options: [
        "Selling goods to consumers in the same country",
        "Importing foreign goods to re-export them",
        "Buying domestic goods for local use",
        "Only trading with neighboring countries",
      ],
      answer: "1",
      explanation:
        "Entrepot = import foreign goods → re-export them to other countries. The trader acts as a middleman.",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Define culture in your own words.",
      answer:
        "Culture is the symbols, language, religion, beliefs, norms, values, and artifacts that are part of any society. It is passed from one generation to the next.",
      explanation:
        "Culture has both material (things) and non-material (ideas) parts.",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "Name the four major language families of Ethiopia.",
      answer: "Semitic, Cushitic, Omotic, Nilo-Saharan.",
      explanation:
        "Semitic → northern/central/eastern. Cushitic → central/south/east. Omotic → Omo River area. Nilo-Saharan → western.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "What is the difference between primary, secondary, and tertiary economic activities? Give one example of each.",
      answer:
        "Primary extracts resources from nature (farming). Secondary adds value by changing form (manufacturing). Tertiary provides services (banking).",
      explanation:
        "Memory: 'Primary = from the Earth. Secondary = made in a factory. Tertiary = a service.'",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "List the four major benefits of government tax.",
      answer:
        "Removal of income and wealth inequalities; ensuring economic stability; reduction of regional imbalances; capital accumulation; creation of employment opportunities; beneficial diversion of resources; encouragement of exports. (Any four.)",
      explanation:
        "Tax revenues fund roads, schools, hospitals, and defense — all public goods.",
    },
        // ============================================================
    // BATCH 2 — Q61 to Q120 (final for Unit 2)
    // ============================================================

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which language is an example of a Semitic language?",
      options: ["Afan Oromo", "Amharic", "Welaytta", "Gumuz"],
      answer: "1",
      explanation:
        "Amharic is Semitic. Afan Oromo is Cushitic. Welaytta is Omotic. Gumuz is Nilo-Saharan.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Which language is an example of a Cushitic language?",
      options: ["Amharic", "Tigrigna", "Somaligna", "Berta"],
      answer: "2",
      explanation:
        "Somaligna is Cushitic. Amharic and Tigrigna are Semitic. Berta is Nilo-Saharan.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Which language is an example of an Omotic language?",
      options: ["Welaytta", "Tigrigna", "Gumuz", "Afarigna"],
      answer: "0",
      explanation:
        "Welaytta is Omotic. Others: Basketto, Gamo-Gofa. Tigrigna is Semitic, Gumuz is Nilo-Saharan, Afarigna is Cushitic.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "Which language is an example of a Nilo-Saharan language?",
      options: ["Gumuz", "Amharic", "Sidamigna", "Gamo-Gofa"],
      answer: "0",
      explanation:
        "Gumuz is Nilo-Saharan. Also Agnuak, Berta. Amharic is Semitic, Sidamigna is Cushitic, Gamo-Gofa is Omotic.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is NOT a factor for cultural change?",
      options: ["Globalization", "Technology", "Contact with other cultures", "Perpendicular bisector"],
      answer: "3",
      explanation:
        "Perpendicular bisector is a math term. The other three are factors of cultural change.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is an example of cultural imperialism?",
      options: [
        "Ethiopians sharing their coffee ceremony with visitors",
        "Foreign satellite TV replacing local culture",
        "Learning a new language",
        "Visiting another country",
      ],
      answer: "1",
      explanation:
        "Cultural imperialism = a powerful culture dominates a weaker one, pushing out local traditions. Foreign TV shows replacing indigenous culture is a classic example.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these activities happens FIRST in the production chain?",
      options: ["Manufacturing a shoe", "Mining iron ore", "Selling the shoe", "Transporting the shoe"],
      answer: "1",
      explanation:
        "Mining is primary (extraction). Manufacturing is secondary. Selling and transporting are tertiary. Production always begins with primary activities.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a service activity?",
      options: ["Fishing", "Farming", "Teaching", "Mining"],
      answer: "2",
      explanation:
        "Teaching is a service (tertiary). Fishing, farming, and mining are primary.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is a WHOLESALE activity?",
      options: [
        "A supermarket selling to families",
        "A businessman selling 1000 boxes of soap to a shop",
        "A child buying candy",
        "A farmer selling one chicken",
      ],
      answer: "1",
      explanation:
        "Wholesale = buying and selling in LARGE quantities. Retail = selling directly to consumers.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a RETAIL activity?",
      options: [
        "A factory selling 5,000 shirts to a store",
        "A shop selling one shirt to a customer",
        "A wholesaler selling to another wholesaler",
        "Importing goods",
      ],
      answer: "1",
      explanation:
        "Retail = selling directly to consumers in small quantities.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these goods is a major Ethiopian export?",
      options: ["Coffee", "Cars", "Computers", "Airplanes"],
      answer: "0",
      explanation:
        "Coffee is Ethiopia's #1 export. Ethiopia is the birthplace of coffee (Kaffa region).",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "Market equilibrium happens when:",
      options: [
        "Supply is greater than demand",
        "Demand is greater than supply",
        "Supply equals demand",
        "There is no trade",
      ],
      answer: "2",
      explanation:
        "Market equilibrium = quantity supplied equals quantity demanded. The intersection of the two curves.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a consumer RIGHT?",
      options: [
        "To pay any price asked",
        "To receive accurate information about goods",
        "To buy only from one seller",
        "To never complain",
      ],
      answer: "1",
      explanation:
        "Consumers have the right to accurate information, selective buying, respectful treatment, complaint, and compensation.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "Government uses tax revenue to:",
      options: [
        "Fund public works and services",
        "Buy personal gifts for officials",
        "Reduce citizens' income",
        "Increase inequality",
      ],
      answer: "0",
      explanation:
        "Tax revenue funds public works (roads, schools, hospitals) and services (defense, police).",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is a direct tax?",
      options: ["Income tax", "VAT", "Customs duty", "Sales tax"],
      answer: "0",
      explanation:
        "Direct tax = charged directly on income or wealth (income tax, land tax). Indirect taxes = VAT, customs, sales tax.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is an indirect tax?",
      options: ["Income tax", "Business income tax", "Value Added Tax (VAT)", "Land tax"],
      answer: "2",
      explanation:
        "VAT is indirect (charged on goods/services). Income tax and land tax are direct.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "Ethiopian traditional taxation included tax on:",
      options: ["Crops and livestock", "Internet usage", "Computer sales", "Mobile phones"],
      answer: "0",
      explanation:
        "Traditional taxes: crops, livestock, wool, butter, milk, and hunting (ivory). Modern taxes came later.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "Which region of Ethiopia speaks Nilo-Saharan languages?",
      options: ["Tigray", "Gambella and Benishangul", "Afar", "Sidama"],
      answer: "1",
      explanation:
        "Nilo-Saharan languages (Agnuak, Berta, Gumuz) are spoken in western Ethiopia — Gambella and Benishangul regions.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "Which sector of an economy provides services like transportation, health, and education?",
      options: ["Primary", "Secondary", "Tertiary", "None"],
      answer: "2",
      explanation:
        "Tertiary = services (transportation, health, education, banking, tourism).",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a service industry?",
      options: ["Banking", "Tourism", "Education", "Farming"],
      answer: "3",
      explanation:
        "Farming is primary (extraction). The others are tertiary (services).",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "Trade is best described as:",
      options: [
        "The process of buying, selling, or exchanging commodities",
        "The place where goods are stored",
        "Only international transactions",
        "Only local transactions",
      ],
      answer: "0",
      explanation:
        "Trade = buying, selling, or exchanging goods and services. It can be internal or external.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "A market is:",
      options: [
        "Only a physical building",
        "A place (physical or virtual) where buyers and sellers meet",
        "Only a digital platform",
        "A government office",
      ],
      answer: "1",
      explanation:
        "A market can be physical (a shop) or virtual (online marketplace). What matters is that buyers and sellers meet to exchange.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "Ethiopia's export trade is dominated by:",
      options: ["Manufactured goods", "Agricultural products", "Technology exports", "Machinery exports"],
      answer: "1",
      explanation:
        "Ethiopia's exports are dominated by AGRICULTURAL products (coffee, oil seeds, livestock products, flowers).",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a benefit of trade?",
      options: [
        "Bigger variety of products",
        "Higher prices only",
        "Reduced competition",
        "Reduced technology",
      ],
      answer: "0",
      explanation:
        "Trade benefits: variety of products, higher competition, lower prices, technological progress, specialization, higher tax revenue, cooperation between nations.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "Which problem affects consumers in Ethiopia?",
      options: ["Wrong weights and measures", "Excess supply", "Too many choices", "Too many sellers"],
      answer: "0",
      explanation:
        "Supply problems include wrong weights, malpractices (hoarding, black market), duplicate goods, health hazards, poor storage, and irregular supply.",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about Ethiopia's economy compared to developed countries?",
      options: [
        "Ethiopia has more workers in manufacturing than in agriculture",
        "Ethiopia has more workers in agriculture with low output per worker",
        "Ethiopia has no primary economic activity",
        "Ethiopia's economy is fully industrial",
      ],
      answer: "1",
      explanation:
        "Ethiopia has many workers in agriculture (primary) but low productivity. Developed countries have few in agriculture but very high productivity.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Which factor does NOT influence economic development level of a country?",
      options: ["Level of industrialization", "Skilled workforce", "Type of climate only", "Investment in education"],
      answer: "2",
      explanation:
        "Climate alone does not determine development. Industrialization, workforce skills, and education investment are key factors.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a way Ethiopian youth can help preserve indigenous culture against globalization?",
      options: [
        "Copy only Western styles",
        "Learn, practice, and teach local traditions",
        "Reject all technology",
        "Stop speaking any Ethiopian language",
      ],
      answer: "1",
      explanation:
        "Youth can preserve culture by learning, practicing, and teaching indigenous traditions, wearing local fashion, and supporting local arts.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Ethiopia's main tourist attractions include:",
      options: [
        "Only man-made sites",
        "Both natural and human-made features",
        "Only beaches",
        "Only historical churches",
      ],
      answer: "1",
      explanation:
        "Ethiopia's tourism includes BOTH natural attractions (Simien Mountains, Rift Valley lakes) and human-made attractions (Lalibela, Axum).",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Which Ethiopian region receives 'little rains' (Belg)?",
      options: ["Northern highlands", "Southern and southeastern lowlands", "Western areas", "Central plateau only"],
      answer: "1",
      explanation:
        "Belg (little rains) in autumn and spring benefit southern and southeastern lowlands. Summer rains (Kiremt) fall in the highlands.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a source of government revenue OTHER than tax?",
      options: ["Income tax", "Business tax", "Land rent and state enterprise profits", "VAT"],
      answer: "2",
      explanation:
        "Non-tax revenue includes land rent, state enterprise profits, fees, and foreign aid. Income tax, business tax, and VAT are tax revenues.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Which tax reform introduced the first exemption threshold for personal income tax in Ethiopia?",
      options: ["Proclamation 30/1992", "Proclamation 77/1976", "Proclamation 685/2010", "Proclamation 1/1942"],
      answer: "0",
      explanation:
        "Proclamation 30/1992 (transitional government) exempted the first Birr 105 from monthly personal income tax, then amended by 107/1994 to Birr 120.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "What type of tax does the Ethiopian Trade Practice and Consumers' Protection Authority NOT cover?",
      options: [
        "Consumer complaint handling",
        "Compensation for damages",
        "Setting income tax rates",
        "Protection from insults and threats",
      ],
      answer: "2",
      explanation:
        "The Trade Practice and Consumers' Protection Authority (Proclamation 685/2010) handles consumer complaints and rights, NOT income tax rates. Income tax is set by tax proclamations.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "Which statement about market actors is correct?",
      options: [
        "Buyers are producers, sellers are consumers",
        "Buyers are consumers, sellers are producers",
        "Only buyers exist in a market",
        "Only sellers exist in a market",
      ],
      answer: "1",
      explanation:
        "Buyers = consumers (buy for personal/family use). Sellers = producers (convert raw materials into products and supply them).",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these is NOT a type of internal trade?",
      options: ["Wholesale", "Retail", "Import", "None of the above"],
      answer: "2",
      explanation:
        "Import is EXTERNAL trade (buying from foreign countries). Wholesale and retail are internal.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Which one is an example of entrepot trade?",
      options: [
        "Ethiopia exporting coffee to Germany",
        "Dubai importing goods and re-exporting them to Africa",
        "A local shop selling to a farmer",
        "A factory selling to employees",
      ],
      answer: "1",
      explanation:
        "Entrepot = importing goods to re-export them. Dubai is famous for this. Ethiopia's coffee exports are simple exports (not entrepot).",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "If quantity demanded is 500 and quantity supplied is 300, what is the situation?",
      options: ["Surplus", "Shortage", "Equilibrium", "Trade"],
      answer: "1",
      explanation:
        "Demand (500) > Supply (300) → shortage (excess demand). Prices will rise.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "If quantity supplied is 800 and quantity demanded is 500, what is the situation?",
      options: ["Surplus", "Shortage", "Equilibrium", "Trade"],
      answer: "0",
      explanation:
        "Supply (800) > Demand (500) → surplus (excess supply). Prices will fall.",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "In a perfectly competitive market, buyers and sellers are called:",
      options: ["Price makers", "Price takers", "Price setters", "Price controllers"],
      answer: "1",
      explanation:
        "In perfect competition, no single buyer or seller can influence price. They must accept the market price — they are PRICE TAKERS.",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a benefit of tax to a country?",
      options: [
        "Reduction of regional imbalances",
        "Increase in income inequality",
        "Decrease in jobs",
        "Reduction of exports",
      ],
      answer: "0",
      explanation:
        "Tax benefits include reduction of regional imbalances, economic stability, capital accumulation, job creation, and encouragement of exports.",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "Which proclamation abolished land taxes and tithe in Ethiopia?",
      options: [
        "The Derg's reforms after 1975",
        "Proclamation 30/1992",
        "Proclamation 77/1976",
        "Proclamation 685/2010",
      ],
      answer: "0",
      explanation:
        "The Derg (1975) abolished the feudal land tenure system, land taxes, and tithe as part of its reforms.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about Ethiopia's cultural identity?",
      options: [
        "Ethiopia has only one culture",
        "Ethiopia is multi-cultural and multi-ethnic",
        "Ethiopia has no diversity",
        "All Ethiopians speak the same language",
      ],
      answer: "1",
      explanation:
        "Ethiopia is multi-cultural and multi-ethnic, with many languages, religions, and traditions.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these is a reason why Ethiopia's consumers face supply problems?",
      options: [
        "Too many goods",
        "Low level of market infrastructure",
        "Too many sellers",
        "Low prices",
      ],
      answer: "1",
      explanation:
        "Supply problems include malpractices, wrong weights, poor market infrastructure, poor storage, and irregular supply.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "The 'smokeless industry' refers to:",
      options: ["Banking", "Tourism", "Agriculture", "Mining"],
      answer: "1",
      explanation:
        "Tourism is called the 'smokeless industry' because it generates income without polluting like factories.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these is NOT a tertiary activity?",
      options: ["Transportation", "Communication", "Tourism", "Mining"],
      answer: "3",
      explanation:
        "Mining is primary. Transportation, communication, and tourism are tertiary.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "Ethiopia's major export destinations include:",
      options: ["Only African countries", "Europe, Asia, and neighboring countries", "Only the USA", "Only Middle East"],
      answer: "1",
      explanation:
        "Ethiopia exports to multiple destinations, mainly Europe, Asia, Djibouti, Somalia, and other African countries.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a factor that affects cultural change in Ethiopia?",
      options: [
        "Contact with other cultures through trade and media",
        "Only internal changes",
        "No external influences",
        "Isolation from the world",
      ],
      answer: "0",
      explanation:
        "Contact with other cultures (through trade, media, education abroad) brings change. Globalization also brings new ideas and practices.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "Which statement about the informal/parallel market is TRUE?",
      options: [
        "It is regulated by the government",
        "It operates outside official rules and can harm consumers",
        "It is always cheaper for consumers",
        "It does not exist in Ethiopia",
      ],
      answer: "1",
      explanation:
        "Black market, hoarding, and illegal trade harm consumers by creating shortages, wrong weights, and unsafe products. These are 'malpractices by suppliers'.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these was NOT a tax in the Haile Selassie regime (1942–1974)?",
      options: ["Personal income tax", "Land tax", "Education tax", "Internet tax"],
      answer: "3",
      explanation:
        "The internet did not exist in 1942–1974. Taxes of that era: personal income, business income, agricultural income, land, education, health, road, salt, tobacco, alcohol, cattle, stamp duties, customs.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "Why is trade important for global interdependence?",
      options: [
        "Countries can produce everything themselves",
        "Countries specialize and depend on each other for goods",
        "Trade reduces cooperation",
        "Trade eliminates competition",
      ],
      answer: "1",
      explanation:
        "Trade encourages specialization and division of labor, which leads to interdependence and cooperation among trade partners.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about globalization is FALSE?",
      options: [
        "It increases interconnections among nations",
        "It can spread both ideas and cultural dominance",
        "It has only negative effects",
        "It affects culture, economy, and technology",
      ],
      answer: "2",
      explanation:
        "Globalization has BOTH positive effects (sharing ideas, technology, trade) and negative effects (cultural imperialism, loss of local identity). It is NOT only negative.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly matches Ethiopian language family with region?",
      options: [
        "Omotic — northern Ethiopia",
        "Nilo-Saharan — western Ethiopia",
        "Semitic — western Ethiopia",
        "Cushitic — southern Rift Valley lakes",
      ],
      answer: "1",
      explanation:
        "Nilo-Saharan is spoken in western Ethiopia (Gambella, Benishangul). Omotic is spoken near Omo River. Semitic is northern/central/eastern. Cushitic is central/south/east.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "Which of these is NOT a source of government revenue?",
      options: [
        "Taxes",
        "Land rent",
        "Profits from state enterprises",
        "Donations to private charities",
      ],
      answer: "3",
      explanation:
        "Donations to private charities are not government revenue. Government revenue = taxes + non-tax sources (land rent, state enterprise profits, fees, foreign aid).",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about the informal economy is TRUE?",
      options: [
        "It is always legal and regulated",
        "It can include unregistered trade and cause consumer harm",
        "It is measured by official statistics",
        "It has no impact on the poor",
      ],
      answer: "1",
      explanation:
        "The informal economy includes unregistered trade. It can harm consumers through black markets, hoarding, wrong weights, and unsafe products.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Which is the most accurate description of cultural change?",
      options: [
        "It happens instantly and completely",
        "It happens over time through contact, technology, and environment",
        "It never happens",
        "It only happens in cities",
      ],
      answer: "1",
      explanation:
        "Cultural change happens gradually over time through globalization, technology, environment, and contact with other cultures.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "Why did Emperor Menelik II establish a FIXED tithe?",
      options: [
        "To collect more tax",
        "To replace the arbitrary agricultural tax system",
        "To weaken the church",
        "To fund the military only",
      ],
      answer: "1",
      explanation:
        "Before Menelik II, agricultural taxes were undefined and arbitrary. A FIXED tithe made taxation fairer and more predictable.",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "Name the two categories of culture with an example for each.",
      answer:
        "Material culture (clothing, tools, houses) and Non-material culture (beliefs, values, language).",
      explanation:
        "Material = touchable objects. Non-material = ideas and beliefs.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "Explain why Ethiopia is called multi-cultural and multi-ethnic.",
      answer:
        "Ethiopia has many ethnic groups, over 80 languages, several religions, and diverse traditions — living together with shared values like hospitality, respect for elders, and patriotism.",
      explanation:
        "Ethiopia's diversity is visible in language families (4), religions, marriage and funeral ceremonies, dance, dress, and greeting styles.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "Describe the three types of economic activities with one example each.",
      answer:
        "Primary: extraction from nature (farming). Secondary: processing raw materials into finished goods (manufacturing). Tertiary: providing services (transportation, banking).",
      explanation:
        "Memory: 'Primary = from the Earth. Secondary = from the factory. Tertiary = a service.'",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Explain the historical development of tax in Ethiopia from traditional times to the transitional government.",
      answer:
        "Traditional taxes on crops, livestock, wool, butter, milk; hunting tax on ivory. King Zera Yacob (1434–1468) introduced the first formal system. Menelik II (late 19th c.) established a fixed tithe. Haile Selassie (1942–1974) introduced personal and business income taxes. The Derg (1975) abolished land taxes and tithe. Proclamations 77/1976 and 152/1978 restructured income tax. Transitional government (Proclamation 30/1992, amended by 107/1994) exempted the first Birr 105 (later 120) of monthly income.",
      explanation:
        "Key names and years to memorize: Zera Yacob 1434–1468; Menelik II late 1800s; Haile Selassie 1942–1974; Derg 1975–1991; Transitional 1991–1995.",
    },
  ],
};