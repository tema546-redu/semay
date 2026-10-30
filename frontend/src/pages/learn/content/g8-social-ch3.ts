import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 SOCIAL STUDIES — UNIT 3
// NATURAL RESOURCES AND SOCIOECONOMIC DEVELOPMENT
// Source: AAEB Grade 8 Social Studies Student Textbook (pp. 61–82)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8SocialCh3: Chapter = {
  id: "ch3",
  number: 3,
  title: "Natural Resources and Socioeconomic Development",
  titleAm: "የተፈጥሮ ሀብቶች እና ማህበረ-ኢኮኖሚያዊ ልማት",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. What are Natural Resources?",
      titleAm: "የተፈጥሮ ሀብቶች ምንድን ናቸው?",
      body:
        "Banchi, natural resources are things that exist in nature WITHOUT any human action. Examples: water, coal, iron, sunlight, atmosphere, soil, minerals, vegetation, and animal life.",
      bodyAm:
        "ባንቺ፣ የተፈጥሮ ሀብቶች ያለ ሰው እርምጃ በተፈጥሮ ውስጥ ያሉ ነገሮች ናቸው። ምሳሌዎች፡ ውሃ፣ የድንጋይ ከሰል፣ ብረት፣ የፀሐይ ብርሃን፣ ከባቢ አየር፣ አፈር፣ ማዕድኖች፣ ዕፅዋት እና የእንስሳት ሕይወት።",
      children: [
        {
          id: "n1-1",
          title: "Two families: Renewable and Non-renewable",
          titleAm: "ሁለት ቤተሰቦች፡ ታዳሽ እና ታዳሽ ያልሆኑ",
          body:
            "1) RENEWABLE — can be generated again after use:\n" +
            "   • Sunlight\n" +
            "   • Water\n" +
            "   • Soil\n" +
            "   • Plants\n" +
            "   • Air\n" +
            "   • Wild animals\n\n" +
            "2) NON-RENEWABLE — exhaust after use, take a very long time to regenerate:\n" +
            "   • Natural gas\n" +
            "   • Coal\n" +
            "   • Iron\n" +
            "   • Copper\n" +
            "   • Petroleum",
          bodyAm:
            "1) ታዳሽ — ከተጠቀሙ በኋላ እንደገና ሊፈጠሩ ይችላሉ፡ የፀሐይ ብርሃን፣ ውሃ፣ አፈር፣ ዕፅዋት፣ አየር፣ የዱር እንስሳት።\n2) ታዳሽ ያልሆኑ — ከተጠቀሙ በኋላ ያልቃሉ፣ ለመታደስ በጣም ረጅም ጊዜ ይወስዳል፡ ተፈጥሯዊ ጋዝ፣ የድንጋይ ከሰል፣ ብረት፣ መዳብ፣ ነዳጅ።",
        },
        {
          id: "n1-2",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: if the resource can come back naturally (sun, wind, water), it's RENEWABLE. If it takes millions of years to form (coal, oil, minerals), it's NON-RENEWABLE. Do not confuse.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ በተፈጥሮ መመለስ የሚችል (ፀሐይ፣ ነፋስ፣ ውሃ) ታዳሽ ነው። ሚሊዮኖች ዓመታት የሚወስድ (ከሰል፣ ነዳጅ፣ ማዕድን) ታዳሽ ያልሆነ ነው።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Economic Benefits of Natural Resources",
      titleAm: "የተፈጥሮ ሀብቶች ኢኮኖሚያዊ ጥቅሞች",
      body:
        "Banchi, natural resources are the base of every economy. Without them, no country can develop.",
      bodyAm:
        "ባንቺ፣ የተፈጥሮ ሀብቶች የማንኛውም ኢኮኖሚ መሠረት ናቸው። ያለ እነርሱ ማንኛዋም አገር ማደግ አትችልም።",
      children: [
        {
          id: "n2-1",
          title: "Four big economic benefits",
          titleAm: "አራት ትላልቅ ኢኮኖሚያዊ ጥቅሞች",
          body:
            "1) Provide raw materials for industries (coal + iron → steel industry)\n" +
            "2) Source of fiscal revenue and income (taxes from mining, oil)\n" +
            "3) Create job opportunities\n" +
            "4) Lead to poverty reduction",
          bodyAm:
            "1) ለኢንዱስትሪዎች ጥሬ ዕቃ ይሰጣሉ (ከሰል + ብረት → የብረት ኢንዱስትሪ)\n2) የፋይናንስ ገቢ ምንጭ (ከማዕድን፣ ከነዳጅ የሚገኝ ታክስ)\n3) የሥራ ዕድሎችን ይፈጥራሉ\n4) ወደ ድህነት ቅነሳ ይመራሉ",
        },
        {
          id: "n2-2",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, natural resources alone do not create wealth. They need capital, skill, and technology to be transformed into development. This is why some resource-rich countries are still poor.",
          bodyAm:
            "ባንቺ፣ የተፈጥሮ ሀብቶች ብቻቸውን ሀብት አይፈጥሩም። ወደ ልማት ለመለወጥ ካፒታል፣ ክህሎት እና ቴክኖሎጂ ያስፈልጋሉ።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Factors Affecting Natural Resource Utilization",
      titleAm: "የተፈጥሮ ሀብት አጠቃቀምን የሚነኩ ምክንያቶች",
      body:
        "Banchi, even if a country HAS resources, it may not use them well. Five factors decide how well a country uses its resources.",
      bodyAm:
        "ባንቺ፣ አንድ አገር ሀብት ቢኖራትም በደንብ ላይጠቀምበት ይችላል። አምስት ምክንያቶች አንድ አገር ሀብቷን ምን ያህል በደንብ እንደምትጠቀምበት ይወስናሉ።",
      children: [
        {
          id: "n3-1",
          title: "The five factors",
          titleAm: "አምስቱ ምክንያቶች",
          body:
            "1) Availability of the resource itself\n" +
            "2) Skill of manpower (trained workers)\n" +
            "3) Availability of capital (money for investment)\n" +
            "4) Advancement in technology (machines, tools)\n" +
            "5) Availability of transport and communication",
          bodyAm:
            "1) የሀብቱ መገኘት\n2) የሠራተኛ ክህሎት\n3) የካፒታል መገኘት\n4) የቴክኖሎጂ እድገት\n5) የትራንስፖርት እና ተግባቦት መገኘት",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Changing Importance of Resources Over Time",
      titleAm: "የሀብቶች ጠቀሜታ በጊዜ ሂደት መለወጥ",
      body:
        "Banchi, some resources that were important 100 years ago are not important today. And new resources become important every year. Example: oil was not important before cars were invented.",
      bodyAm:
        "ባንቺ፣ ከ100 ዓመታት በፊት ጠቃሚ የነበሩ አንዳንድ ሀብቶች ዛሬ ጠቃሚ አይደሉም። ደግሞ በየዓመቱ አዲስ ሀብቶች ጠቃሚ ይሆናሉ። ምሳሌ፡ መኪኖች ከመፈጠራቸው በፊት ነዳጅ ጠቃሚ አልነበረም።",
      children: [
        {
          id: "n4-1",
          title: "Why consumption changes",
          titleAm: "የፍጆታ ለውጥ ምክንያቶች",
          body:
            "• Population growth → more demand\n" +
            "• Technology advance → new uses for resources\n" +
            "• Lifestyle change → new products needed\n" +
            "• Globalization → new markets and tastes",
          bodyAm:
            "• የሕዝብ ቁጥር እድገት → ተጨማሪ ፍላጎት\n• የቴክኖሎጂ እድገት → አዲስ አጠቃቀሞች\n• የአኗኗር ለውጥ → አዲስ ምርቶች\n• ግሎባላይዜሽን → አዲስ ገበያዎች",
        },
        {
          id: "n4-2",
          title: "Environmental impacts of high consumption",
          titleAm: "የከፍተኛ ፍጆታ አካባቢያዊ ተጽዕኖዎች",
          body:
            "• Air pollution\n" +
            "• Water pollution\n" +
            "• Waste\n" +
            "• Global warming (from CO₂)",
          bodyAm:
            "• የአየር ብክለት\n• የውሃ ብክለት\n• ቆሻሻ\n• ዓለም አቀፍ ሙቀት መጨመር (ከCO₂)",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Conservation — Soil, Water, Forest, Wildlife",
      titleAm: "ጥበቃ — አፈር፣ ውሃ፣ ደን፣ የዱር እንስሳት",
      body:
        "Banchi, conservation means careful, efficient, wise use of natural resources. It helps secure resources for the future. Let's look at each type.",
      bodyAm:
        "ባንቺ፣ ጥበቃ ማለት የተፈጥሮ ሀብቶችን በጥንቃቄ፣ በብቃት እና በጥበብ መጠቀም ማለት ነው። ለወደፊት ሀብቶችን ለማረጋገጥ ይረዳል።",
      children: [
        {
          id: "n5-1",
          title: "Soil conservation — 8 methods",
          titleAm: "የአፈር ጥበቃ — 8 ዘዴዎች",
          body:
            "1) Terracing — stair-like structures along hillsides to slow water flow\n" +
            "2) Afforestation — planting trees where there were none\n" +
            "3) Crop rotation — planting different crops on the same field over years\n" +
            "4) Reforestation — replacing cut trees\n" +
            "5) Shelter belts — trees at farmland edges to stop wind erosion\n" +
            "6) Check dams — small dams to trap silt\n" +
            "7) Strip cropping — planting two or more crops in the same field\n" +
            "8) Contour ploughing — ploughing across slopes (not up-down)",
          bodyAm:
            "1) ቴራሲንግ — የውሃ ፍሰትን ለመቀነስ በኮረብታ ላይ ደረጃ መሠራት\n2) አፎረስቴሽን — በነበረበት ቦታ ዛፍ መትከል\n3) ሰብል ማሽከርከር — በየዓመቱ የተለያዩ ሰብሎችን መዝራት\n4) ደጋግሞ መትከል — የተቆረጡ ዛፎችን መተካት\n5) ሼልተር ቤልት — በእርሻ ዳርቻ ላይ ዛፎች\n6) ቼክ ዳምስ — ደለል የሚይዙ ትናንሽ ግድቦች\n7) ስትሪፕ ክሮፒንግ — በአንድ እርሻ ሁለት ወይም ከዚያ በላይ ሰብሎች\n8) ኮንቱር እርሻ — በኮረብታዎች ላይ በአግድም ማረስ",
        },
        {
          id: "n5-2",
          title: "Water conservation — 7 methods",
          titleAm: "የውሃ ጥበቃ — 7 ዘዴዎች",
          body:
            "1) Protection of water from pollution\n" +
            "2) Rational use of groundwater\n" +
            "3) Renovation of traditional water harvesting methods\n" +
            "4) Use of modern irrigation (sprinkler, drip)\n" +
            "5) Increasing forest cover\n" +
            "6) Conserving water in industries (treat + reuse)\n" +
            "7) Water conservation by municipal bodies",
          bodyAm:
            "1) ውሃን ከብክለት መጠበቅ\n2) የከርሰ ምድር ውሃን በምክንያታዊነት መጠቀም\n3) ባህላዊ የውሃ ማጠራቀሚያ ዘዴዎችን ማደስ\n4) ዘመናዊ መስኖ (ስፕሪንክለር፣ ጠብታ) መጠቀም\n5) የደን ሽፋን መጨመር\n6) በኢንዱስትሪ ውስጥ ውሃን መጠበቅ (ማከም + እንደገና መጠቀም)\n7) በማዘጋጃ ቤቶች ውሃን መጠበቅ",
        },
        {
          id: "n5-3",
          title: "Benefits of water conservation",
          titleAm: "የውሃ ጥበቃ ጥቅሞች",
          body:
            "• Minimizes drought and water shortages\n" +
            "• Reduces political conflict\n" +
            "• Preserves the environment\n" +
            "• Provides water for recreation\n" +
            "• Builds safe and beautiful communities",
          bodyAm:
            "• ድርቅን እና የውሃ እጥረትን ይቀንሳል\n• የፖለቲካ ግጭትን ይቀንሳል\n• አካባቢን ይጠብቃል\n• ለመዝናኛ ውሃ ይሰጣል\n• ደህንነቱ የተጠበቀ እና ውብ ማህበረሰብ ይገነባል",
        },
        {
          id: "n5-4",
          title: "Forest conservation — importance",
          titleAm: "የደን ጥበቃ — ጠቀሜታ",
          body:
            "Forests are important for:\n" +
            "1) Environmental quality (absorb greenhouse gases)\n" +
            "2) Maintaining ecological balance (increase oxygen)\n" +
            "3) Supply of raw materials (wood, paper, furniture)",
          bodyAm:
            "ደኖች ለሚከተሉት ጠቃሚ ናቸው፡\n1) የአካባቢ ጥራት (የግሪንሃውስ ጋዞችን ይስባሉ)\n2) ሥነ ምህዳራዊ ሚዛን መጠበቅ (ኦክሲጅን ይጨምራሉ)\n3) ጥሬ ዕቃ ማቅረብ (እንጨት፣ ወረቀት፣ ፈርኒቸር)",
        },
        {
          id: "n5-5",
          title: "Wildlife conservation — 5 threats",
          titleAm: "የዱር እንስሳት ጥበቃ — 5 ስጋቶች",
          body:
            "Five factors that harm wildlife:\n" +
            "1) Deforestation (destroys habitat)\n" +
            "2) Illegal hunting (for meat, skin, ivory)\n" +
            "3) Overgrazing (too many domestic animals)\n" +
            "4) Burning of forests\n" +
            "5) Drought and famine",
          bodyAm:
            "የዱር እንስሳትን የሚጎዱ አምስት ምክንያቶች፡\n1) የደን መጨፍጨፍ (መኖሪያ ያጠፋል)\n2) ሕገ-ወጥ አደን (ለሥጋ፣ ለቆዳ፣ ለዝሆን ጥርስ)\n3) ከመጠን በላይ ግጦሽ\n4) ደኖችን ማቃጠል\n5) ድርቅ እና ረሃብ",
        },
        {
          id: "n5-6",
          title: "Wildlife conservation — 4 measures",
          titleAm: "የዱር እንስሳት ጥበቃ — 4 እርምጃዎች",
          body:
            "1) Educate people about wildlife and ecological conservation\n" +
            "2) Laws to punish those who kill wild animals illegally\n" +
            "3) Establish national parks, game reserves, and sanctuaries\n" +
            "4) Conserve endangered species",
          bodyAm:
            "1) ሰዎችን ስለ የዱር እንስሳት እና ሥነ ምህዳር ጥበቃ ማስተማር\n2) ሕገ-ወጥ አዳኞችን የሚቀጣ ሕግ ማውጣት\n3) ብሔራዊ ፓርኮች፣ የዱር እንስሳት ማጠሪያዎች እና መጠጊያዎች ማቋቋም\n4) ለመጥፋት የተቃረቡ ዝርያዎችን መጠበቅ",
        },
        {
          id: "n5-7",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, huge trap: AFFORESTATION vs REFORESTATION. 'Afforestation' = planting trees where there were NONE before. 'Reforestation' = replacing trees that were CUT. Exam loves to swap these.",
          bodyAm:
            "ባንቺ፣ ትልቅ ወጥመድ፡ አፎረስቴሽን እና ሪፎረስቴሽን። 'አፎረስቴሽን' = ቀድሞ በነበረበት ቦታ ዛፍ መትከል። 'ሪፎረስቴሽን' = የተቆረጡ ዛፎችን መተካት።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Consequences of Unwise Utilization",
      titleAm: "የጥበብ ያልተላበሰ አጠቃቀም ውጤቶች",
      body:
        "Banchi, if we use natural resources carelessly, we damage the environment for the future. Four main consequences:",
      bodyAm:
        "ባንቺ፣ የተፈጥሮ ሀብቶችን በጥንቃቄ ካልተጠቀምን ለወደፊት አካባቢውን እናጠፋለን። አራት ዋና ውጤቶች፡",
      children: [
        {
          id: "n6-1",
          title: "The four consequences",
          titleAm: "አራቱ ውጤቶች",
          body:
            "1) WATER SHORTAGES — from poor farming, deforestation, pollution\n" +
            "2) LOSS OF FOREST COVER — soil erosion, greenhouse gases, biodiversity loss, desertification\n" +
            "3) DEPLETION OF MINERALS — over-exploitation of phosphorus, copper, iron, zinc\n" +
            "4) EXTINCTION OF SPECIES — habitat destruction kills animals and plants",
          bodyAm:
            "1) የውሃ እጥረት — ከመጥፎ እርሻ፣ ከደን መጨፍጨፍ፣ ከብክለት\n2) የደን ሽፋን መጥፋት — የአፈር መሸርሸር፣ የግሪንሃውስ ጋዞች፣ የብዝሃ ሕይወት መጥፋት\n3) የማዕድን መሟጠጥ — ፎስፎረስ፣ መዳብ፣ ብረት፣ ዚንክ\n4) የዝርያ መጥፋት — የመኖሪያ መጥፋት እንስሳትን እና ዕፅዋትን ይገድላል",
        },
      ],
    },

    {
      id: "n7",
      title: "7. Resource-Based Conflicts — The Nile / Abay",
      titleAm: "በሀብት ላይ የተመሠረቱ ግጭቶች — አባይ ወንዝ",
      body:
        "Banchi, when countries share a resource like a river, disputes can arise. This is called hydro-politics. The Nile is the most politically significant river in Africa.",
      bodyAm:
        "ባንቺ፣ አገሮች እንደ ወንዝ ያለ ሀብት ሲጋሩ አለመግባባት ሊነሳ ይችላል። ይህ ሃይድሮ-ፖለቲክስ ይባላል። አባይ በአፍሪካ ውስጥ በጣም ፖለቲካዊ ጠቀሜታ ያለው ወንዝ ነው።",
      children: [
        {
          id: "n7-1",
          title: "Upper course vs Lower course",
          titleAm: "የላይኛው አካል እና የታችኛው አካል",
          body:
            "UPPER course countries — contribute water, higher altitude, source of tributaries:\n" +
            "Ethiopia, Kenya, Uganda, Rwanda, Burundi, DRC, Eritrea, Tanzania, South Sudan.\n\n" +
            "LOWER course countries — lower elevation, water flows gently:\n" +
            "Sudan and Egypt.\n\n" +
            "Historically, Egypt and Sudan have benefited most. Upper course countries (like Ethiopia) have benefited least — this is unfair.",
          bodyAm:
            "የላይኛው አካል አገሮች — ውሃ የሚያበረክቱ፣ ከፍተኛ ከፍታ ያላቸው፣ የወንዞች ምንጭ፡ ኢትዮጵያ፣ ኬንያ፣ ዩጋንዳ፣ ሩዋንዳ፣ ቡሩንዲ፣ ዲአርሲ፣ ኤርትራ፣ ታንዛኒያ፣ ደቡብ ሱዳን።\nየታችኛው አካል አገሮች — ዝቅተኛ ከፍታ፣ ውሃው በቀስታ የሚፈስባቸው፡ ሱዳን እና ግብፅ።\nበታሪክ ግብፅ እና ሱዳን በጣም ተጠቃሚ ሆነዋል።",
        },
        {
          id: "n7-2",
          title: "Hydro-politics — definition",
          titleAm: "ሃይድሮ-ፖለቲክስ — ትርጉም",
          body:
            "Hydro-politics = the study of inter-state politics regarding the management of SHARED water resources.",
          bodyAm:
            "ሃይድሮ-ፖለቲክስ = የተጋሩ የውሃ ሀብቶችን አስተዳደር በተመለከተ በመንግሥታት መካከል ያለ ፖለቲካ ጥናት።",
        },
        {
          id: "n7-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: 'upper course' countries are NOT more powerful — they are just at higher altitude and the source. Egypt and Sudan (lower course) historically used MORE water. Ethiopia is upper course and wants fair use.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ 'የላይኛው አካል' አገሮች የበለጠ ኃያል አይደሉም — በከፍተኛ ከፍታ ላይ ብቻ ናቸው። ግብፅ እና ሱዳን (የታችኛው አካል) በታሪክ ብዙ ውሃ ተጠቅመዋል። ኢትዮጵያ የላይኛው አካል ናት እና ፍትሐዊ አጠቃቀም ትፈልጋለች።",
        },
      ],
    },

    {
      id: "n8",
      title: "8. Exam Strategy — Unit 3",
      titleAm: "የፈተና ስልት — ክፍል 3",
      body:
        "Banchi, five quick checks before answering Unit 3 questions.",
      bodyAm:
        "ባንቺ፣ የክፍል 3 ጥያቄዎችን ከመመለስሽ በፊት አምስት ፈጣን ቼኮች።",
      children: [
        {
          id: "n8-1",
          title: "Check 1 — Renewable or non-renewable?",
          titleAm: "ቼክ 1 — ታዳሽ ወይስ ታዳሽ ያልሆነ?",
          body:
            "Can it come back naturally? Yes → renewable. Takes millions of years? → non-renewable.",
          bodyAm:
            "በተፈጥሮ መመለስ ይችላል? አዎ → ታዳሽ። ሚሊዮኖች ዓመታት ይወስዳል? → ታዳሽ ያልሆነ።",
        },
        {
          id: "n8-2",
          title: "Check 2 — Which conservation type?",
          titleAm: "ቼክ 2 — የትኛው የጥበቃ ዓይነት?",
          body:
            "Terracing, crop rotation → SOIL. Drip irrigation → WATER. Afforestation → FOREST. National park → WILDLIFE.",
          bodyAm:
            "ቴራሲንግ፣ ሰብል ማሽከርከር → አፈር። ጠብታ መስኖ → ውሃ። አፎረስቴሽን → ደን። ብሔራዊ ፓርክ → የዱር እንስሳት።",
        },
        {
          id: "n8-3",
          title: "Check 3 — Which threat to wildlife?",
          titleAm: "ቼክ 3 — ለዱር እንስሳት ስጋት?",
          body:
            "Deforestation, illegal hunting, overgrazing, burning, drought. Do not include LEGAL hunting — the question asks about harm.",
          bodyAm:
            "የደን መጨፍጨፍ፣ ሕገ-ወጥ አደን፣ ከመጠን በላይ ግጦሽ፣ ማቃጠል፣ ድርቅ። ሕጋዊ አደንን አታካትቺ።",
        },
        {
          id: "n8-4",
          title: "Check 4 — Upper course or lower course?",
          titleAm: "ቼክ 4 — የላይኛው ወይስ የታችኛው አካል?",
          body:
            "Ethiopia = upper course (source, higher altitude). Egypt and Sudan = lower course.",
          bodyAm:
            "ኢትዮጵያ = የላይኛው አካል (ምንጭ፣ ከፍተኛ ከፍታ)። ግብፅ እና ሱዳን = የታችኛው አካል።",
        },
        {
          id: "n8-5",
          title: "Check 5 — Which consequence?",
          titleAm: "ቼክ 5 — የትኛው ውጤት?",
          body:
            "Water shortage, forest loss, mineral depletion, species extinction. Match the cause to the consequence.",
          bodyAm:
            "የውሃ እጥረት፣ የደን መጥፋት፣ የማዕድን መሟጠጥ፣ የዝርያ መጥፋት።",
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
      stem: "What is a natural resource?",
      options: [
        "Something made by humans",
        "Something that exists in nature without human action",
        "Something imported from other countries",
        "Something that is always non-renewable",
      ],
      answer: "1",
      explanation:
        "Natural resources exist in nature without human action. Examples: water, coal, iron, sunlight, soil, minerals.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a RENEWABLE natural resource?",
      options: ["Coal", "Petroleum", "Sunlight", "Natural gas"],
      answer: "2",
      explanation:
        "Sunlight is renewable — it comes back every day. Coal, petroleum, and natural gas are non-renewable.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a NON-RENEWABLE resource?",
      options: ["Water", "Soil", "Coal", "Sunlight"],
      answer: "2",
      explanation:
        "Coal is non-renewable — it took millions of years to form and cannot be replaced quickly.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "Natural resources are classified into:",
      options: [
        "Two categories: renewable and non-renewable",
        "Three categories",
        "Four categories",
        "Only one category",
      ],
      answer: "0",
      explanation:
        "Two categories: RENEWABLE (can come back) and NON-RENEWABLE (cannot come back quickly).",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is an ECONOMIC benefit of natural resources?",
      options: [
        "Providing raw materials for industries",
        "Increasing pollution",
        "Reducing jobs",
        "Creating waste",
      ],
      answer: "0",
      explanation:
        "Natural resources provide raw materials for industries, generate fiscal revenue, create jobs, and reduce poverty.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "Conservation of natural resources means:",
      options: [
        "Using them as fast as possible",
        "Careful, efficient, and wise use",
        "Never using them",
        "Only exporting them",
      ],
      answer: "1",
      explanation:
        "Conservation = careful, efficient, and wise use. It ensures resources are available for future generations.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a renewable resource?",
      options: ["Wild animals", "Copper", "Natural gas", "Iron"],
      answer: "0",
      explanation:
        "Wild animals are renewable (they reproduce). Copper, natural gas, and iron are non-renewable.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a method of SOIL conservation?",
      options: ["Terracing", "Drip irrigation", "Building national parks", "Water treatment"],
      answer: "0",
      explanation:
        "Terracing = soil conservation (stair-like structures on hillsides). Drip irrigation = water. National parks = wildlife.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "Which method conserves WATER?",
      options: ["Terracing", "Crop rotation", "Drip irrigation", "Shelter belts"],
      answer: "2",
      explanation:
        "Drip irrigation is a modern method that saves water. The others are soil conservation.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "Which method conserves FORESTS by planting trees where none existed before?",
      options: ["Reforestation", "Afforestation", "Terracing", "Crop rotation"],
      answer: "1",
      explanation:
        "Afforestation = planting trees where there were NONE. Reforestation = replacing CUT trees.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "Which method replaces cut trees?",
      options: ["Afforestation", "Reforestation", "Contour ploughing", "Strip cropping"],
      answer: "1",
      explanation:
        "Reforestation = replacing CUT trees. Afforestation = planting where there were NONE.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "Shelter belts are planted to:",
      options: [
        "Protect soil from wind erosion",
        "Protect water from pollution",
        "Protect wildlife",
        "Protect forests from cutting",
      ],
      answer: "0",
      explanation:
        "Shelter belts are trees planted at the edge of farmlands to protect soil from WIND erosion.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is NOT a method of soil conservation?",
      options: ["Terracing", "Crop rotation", "Contour ploughing", "Building dams"],
      answer: "3",
      explanation:
        "Building dams is water conservation, not soil conservation. Terracing, crop rotation, contour ploughing are soil conservation.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "Which benefit is NOT from water conservation?",
      options: [
        "Minimizes drought",
        "Reduces political conflict",
        "Increases pollution",
        "Provides water for recreation",
      ],
      answer: "2",
      explanation:
        "Water conservation REDUCES pollution, not increases it. Benefits include minimizing drought, reducing conflicts, preserving environment, and providing recreation.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "Forests help the environment by:",
      options: [
        "Absorbing greenhouse gases",
        "Releasing CO₂",
        "Increasing pollution",
        "Killing wildlife",
      ],
      answer: "0",
      explanation:
        "Forests absorb greenhouse gases and increase oxygen content of the air.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "Which factor threatens wildlife?",
      options: ["Reforestation", "Illegal hunting", "National parks", "Education"],
      answer: "1",
      explanation:
        "Illegal hunting kills animals for meat, skin, fur, horn, ivory. It is a major threat.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "Which factor harms wildlife?",
      options: ["Education", "Laws against poaching", "Deforestation", "National parks"],
      answer: "2",
      explanation:
        "Deforestation removes habitat and destroys wildlife homes. The others HELP wildlife.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "Which measure helps conserve wildlife?",
      options: [
        "Increasing illegal hunting",
        "Establishing national parks and sanctuaries",
        "Burning forests",
        "Overgrazing",
      ],
      answer: "1",
      explanation:
        "National parks, game reserves, and sanctuaries protect wildlife from hunting and habitat loss.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "Hydro-politics is the study of:",
      options: [
        "Water chemistry",
        "Inter-state politics about shared water resources",
        "Ocean waves",
        "Rainfall patterns",
      ],
      answer: "1",
      explanation:
        "Hydro-politics = study of inter-state politics about shared water resources (like the Nile).",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "Which river is the most politically significant in Africa?",
      options: ["Congo", "Niger", "Nile (Abay)", "Zambezi"],
      answer: "2",
      explanation:
        "The Nile (Abay) is the most politically significant river in Africa. It involves 11 countries.",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "Ethiopia is a ___ course country of the Nile.",
      options: ["Lower", "Upper", "Middle", "None"],
      answer: "1",
      explanation:
        "Ethiopia is an UPPER course country — it contributes water and has higher altitude. Egypt and Sudan are lower course countries.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country benefits MOST historically from the Nile?",
      options: ["Ethiopia", "Kenya", "Egypt", "Uganda"],
      answer: "2",
      explanation:
        "Egypt and Sudan (lower course) have historically benefited most. Ethiopia and other upper course countries were least benefited.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 'sustainable use' of a resource?",
      options: [
        "Using it as fast as possible",
        "Using it at a rate that does not exceed its capacity for renewal",
        "Never using it",
        "Only using it for export",
      ],
      answer: "1",
      explanation:
        "Sustainable use = using the resource at a rate that allows it to renew for future generations.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is a consequence of unwise resource utilization?",
      options: ["Water shortages", "More forests", "More wildlife", "Better soil"],
      answer: "0",
      explanation:
        "Consequences: water shortages, loss of forest cover, depletion of minerals, extinction of species.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is a NON-renewable resource?",
      options: ["Trees", "Water", "Petroleum", "Air"],
      answer: "2",
      explanation:
        "Petroleum is non-renewable. Trees, water, and air are renewable.",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT a factor affecting natural resource utilization?",
      options: [
        "Skill of manpower",
        "Availability of capital",
        "Technology",
        "Type of government flag",
      ],
      answer: "3",
      explanation:
        "Five factors: availability of resource, skill of manpower, capital, technology, transport and communication. Flag type has no role.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Why does resource utilization change over time?",
      options: [
        "Because resources get tired",
        "Because of population growth, technology, and lifestyle changes",
        "Because the sun moves",
        "Because of geography",
      ],
      answer: "1",
      explanation:
        "Consumption patterns change with population growth, technology advancement, lifestyle changes, and globalization.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is an environmental impact of high consumption?",
      options: [
        "Clean air",
        "Global warming from increased CO₂",
        "More forests",
        "More wildlife",
      ],
      answer: "1",
      explanation:
        "High consumption causes air and water pollution, waste, and global warming from CO₂.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Crop rotation is important for:",
      options: [
        "Increasing soil fertility",
        "Decreasing soil fertility",
        "Increasing pollution",
        "Killing wildlife",
      ],
      answer: "0",
      explanation:
        "Crop rotation increases soil fertility by alternating crops that use different nutrients.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Check dams are built to:",
      options: [
        "Trap silt washed from hills",
        "Generate electricity",
        "Kill fish",
        "Increase pollution",
      ],
      answer: "0",
      explanation:
        "Check dams are small dams that trap silt from hillsides, preventing soil loss.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about wildlife resources?",
      options: [
        "They grow naturally without human interference",
        "They are always domesticated",
        "They are only found in Ethiopia",
        "They do not help the ecosystem",
      ],
      answer: "0",
      explanation:
        "Wildlife resources are animals and birds that grow naturally WITHOUT human interference. They live in the wild.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "Wildlife is important for:",
      options: [
        "Balancing the ecosystem only",
        "Tourism only",
        "Food only",
        "Balancing ecosystem, food, tourism, medicine, recreation, and economy",
      ],
      answer: "3",
      explanation:
        "Wildlife balances the ecosystem and provides food, tourism, medicine, recreation, and supports the economy.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "Overgrazing harms wildlife because:",
      options: [
        "It keeps domestic animals beyond the carrying capacity",
        "It plants more grass",
        "It increases wildlife food",
        "It creates national parks",
      ],
      answer: "0",
      explanation:
        "Overgrazing = keeping domestic animals over the carrying capacity of the grazing land. It destroys vegetation that wildlife needs.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a renewable resource?",
      options: ["Iron", "Copper", "Natural gas", "Soil"],
      answer: "3",
      explanation:
        "Soil is renewable (it can be regenerated slowly). Iron, copper, natural gas are non-renewable.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "The main aim of sustainable development is to:",
      options: [
        "Provide resources for present generations without compromising the future",
        "Use all resources immediately",
        "Ignore future generations",
        "Increase pollution",
      ],
      answer: "0",
      explanation:
        "Sustainable development = meeting present needs without compromising future generations' ability to meet their needs.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT an economic benefit of natural resources?",
      options: [
        "Fiscal revenue",
        "Job creation",
        "Poverty reduction",
        "Increasing political conflict",
      ],
      answer: "3",
      explanation:
        "Economic benefits: fiscal revenue, income, jobs, poverty reduction. Political conflict is not a benefit — it's a problem.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Water conservation method 'rational use of groundwater' means:",
      options: [
        "Using groundwater without limit",
        "Using groundwater only in proportion to its recharging capacity",
        "Never using groundwater",
        "Drilling new wells",
      ],
      answer: "1",
      explanation:
        "Rational use = using groundwater at a rate that doesn't exceed its natural recharging capacity.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "The Konso Cultural Landscape is important because:",
      options: [
        "It shows 400+ years of stone terracing",
        "It has no agriculture",
        "It is in northern Ethiopia",
        "It was abandoned long ago",
      ],
      answer: "0",
      explanation:
        "The Konso Cultural Landscape is a UNESCO World Heritage site — 400+ years of stone-walled terraces showing sustainable farming in a dry environment.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a benefit of forest conservation?",
      options: [
        "Mitigating climate change",
        "Increasing CO₂",
        "Increasing soil erosion",
        "Decreasing biodiversity",
      ],
      answer: "0",
      explanation:
        "Forests mitigate climate change by absorbing CO₂ and reducing greenhouse gases.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about upper course countries of the Nile?",
      options: [
        "They contribute water at higher altitude",
        "They benefit most historically",
        "They have no interest in the Nile",
        "They are the same as lower course",
      ],
      answer: "0",
      explanation:
        "Upper course countries (Ethiopia, Kenya, Uganda, etc.) contribute water at higher altitude where the tributaries originate.",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "The Nile basin includes how many countries?",
      options: ["3", "5", "8", "11 (including all listed)"],
      answer: "3",
      explanation:
        "Nile basin includes 11 countries: Ethiopia, Egypt, Kenya, Sudan, Uganda, Rwanda, Burundi, DRC, Eritrea, Tanzania, South Sudan.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "Which activity reduces soil fertility?",
      options: [
        "Crop rotation",
        "Overgrazing",
        "Terracing",
        "Contour ploughing",
      ],
      answer: "1",
      explanation:
        "Overgrazing reduces soil fertility by removing vegetation and compacting soil. The others preserve soil.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "Which one is a method of water conservation?",
      options: [
        "Crop rotation",
        "Shelter belts",
        "Sprinkler and drip irrigation",
        "Strip cropping",
      ],
      answer: "2",
      explanation:
        "Modern irrigation methods (sprinkler, drip) save water. The others are soil conservation.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "Which consequence comes from mineral depletion?",
      options: [
        "Over-exploitation of phosphorus, copper, iron, zinc",
        "More mineral formation",
        "More wildlife",
        "More forests",
      ],
      answer: "0",
      explanation:
        "Mineral depletion comes from over-exploitation of minerals like phosphorus, copper, iron, and zinc. These take millions of years to form.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a renewable resource that can be regenerated?",
      options: ["Coal", "Petroleum", "Plants", "Iron"],
      answer: "2",
      explanation:
        "Plants are renewable — they reproduce and regrow. The others are non-renewable.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT a benefit of water conservation?",
      options: [
        "Reduces effects of drought",
        "Reduces political conflicts",
        "Increases water shortages",
        "Preserves the environment",
      ],
      answer: "2",
      explanation:
        "Water conservation REDUCES water shortages. It does not increase them.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "Reforestation and afforestation are useful for:",
      options: [
        "Recharging water sources",
        "Drying water sources",
        "Increasing pollution",
        "Destroying wildlife",
      ],
      answer: "0",
      explanation:
        "More trees help water infiltrate the soil, recharging water sources.",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "Which statement about the Nile is FALSE?",
      options: [
        "It is politically significant in Africa",
        "Egypt and Sudan benefit most historically",
        "Ethiopia is an upper course country",
        "Sudan is an upper course country",
      ],
      answer: "3",
      explanation:
        "Sudan is a LOWER course country, along with Egypt. Ethiopia is upper course.",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "Which type of resource is air?",
      options: ["Non-renewable", "Renewable", "Mined", "Cannot be classified"],
      answer: "1",
      explanation:
        "Air is renewable — it can be regenerated and cleaned naturally by plants and the environment.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT a wildlife conservation measure?",
      options: [
        "Educating people about wildlife",
        "Making laws against illegal hunting",
        "Establishing national parks",
        "Increasing deforestation",
      ],
      answer: "3",
      explanation:
        "Deforestation DESTROYS wildlife habitat. Conservation measures protect wildlife.",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "Which is the correct order of the three R's in resource conservation?",
      options: [
        "Reduce, Reuse, Recycle",
        "Recycle, Reduce, Reuse",
        "Reuse, Recycle, Reduce",
        "Reduce, Recycle, Reuse",
      ],
      answer: "0",
      explanation:
        "Reduce first (use less), then Reuse (use again), then Recycle (process into new products). This order saves the most energy and resources.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "Which pairing correctly matches the resource with its type?",
      options: [
        "Coal — renewable",
        "Sunlight — non-renewable",
        "Wild animals — renewable",
        "Petroleum — renewable",
      ],
      answer: "2",
      explanation:
        "Wild animals are renewable (they reproduce). Coal and petroleum are non-renewable. Sunlight is renewable.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Which is the STRONGEST reason natural resources need conservation?",
      options: [
        "To make them last longer for future generations",
        "To increase prices",
        "To reduce wildlife",
        "To increase pollution",
      ],
      answer: "0",
      explanation:
        "The main reason for conservation is to ensure resources are available for future generations — sustainable use.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about the hydro-politics of the Nile is FALSE?",
      options: [
        "Upper course countries contribute water",
        "Egypt and Sudan historically benefited more",
        "Ethiopia has no interest in the Nile",
        "The Nile is one of Africa's most politically significant rivers",
      ],
      answer: "2",
      explanation:
        "Ethiopia is a MAJOR upper course country and has significant interest in the Nile (Abay). The statement is FALSE.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "Which factor most directly leads to wildlife extinction?",
      options: [
        "Reforestation",
        "Habitat destruction and over-exploitation",
        "Clean water",
        "National parks",
      ],
      answer: "1",
      explanation:
        "Habitat destruction (through deforestation) and over-exploitation are the main drivers of species extinction.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "Why is natural resource utilization often LOW in developing countries?",
      options: [
        "Lack of technology, capital, and skilled manpower",
        "Too many resources",
        "Too much technology",
        "No resources at all",
      ],
      answer: "0",
      explanation:
        "Developing countries often lack the capital, technology, and skilled workforce needed to fully utilize their natural resources.",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Define a natural resource and give three examples.",
      answer:
        "A natural resource is something that exists in nature without human action. Examples: water, soil, sunlight (also: coal, minerals, forests).",
      explanation:
        "Natural resources can be renewable (sunlight, water) or non-renewable (coal, petroleum).",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "List the five factors that affect natural resource utilization.",
      answer:
        "Availability of resource, skill of manpower, capital, technology, transport and communication.",
      explanation:
        "Even resource-rich countries may fail to develop if they lack capital, skills, or technology.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "Name four methods of soil conservation and explain one.",
      answer:
        "Terracing (stair-like structures on hillsides to slow water flow), afforestation, crop rotation, reforestation, shelter belts, check dams, strip cropping, contour ploughing.",
      explanation:
        "Terracing is especially important in Ethiopia (e.g., Konso Cultural Landscape).",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "Explain what hydro-politics is and give an example.",
      answer:
        "Hydro-politics is the study of inter-state politics regarding the management of shared water resources. Example: The Nile/Abay — Egypt, Sudan (lower course) and Ethiopia, Kenya, Uganda (upper course) have significant interest in the river's water.",
      explanation:
        "The Nile is one of the most politically significant rivers in Africa. The key tension: upper vs lower course use.",
    },
        // ============================================================
    // BATCH 2 — Q61 to Q120 (final for Unit 3)
    // ============================================================

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is an example of a renewable resource?",
      options: ["Petroleum", "Natural gas", "Trees", "Coal"],
      answer: "2",
      explanation:
        "Trees are renewable — they grow back. Petroleum, natural gas, and coal are non-renewable.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Why should we conserve non-renewable resources?",
      options: [
        "Because they form quickly",
        "Because they take a very long time to form",
        "Because they are unlimited",
        "Because they are cheap",
      ],
      answer: "1",
      explanation:
        "Non-renewable resources (coal, oil, minerals) took millions of years to form. Once used, they cannot be replaced quickly.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Sustainable use of a resource means:",
      options: [
        "Using it very fast",
        "Using it at a rate that does not exceed its capacity for renewal",
        "Not using it at all",
        "Exporting all of it",
      ],
      answer: "1",
      explanation:
        "Sustainable use = use at a rate that allows the resource to renew itself for future generations.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a benefit of water conservation?",
      options: [
        "Reduces the effects of drought",
        "Increases pollution",
        "Increases water shortage",
        "Reduces rainfall",
      ],
      answer: "0",
      explanation:
        "Water conservation reduces the effects of drought and water shortages.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT an environmental impact of high consumption?",
      options: ["Air pollution", "Water pollution", "Waste", "Cleaner air"],
      answer: "3",
      explanation:
        "High consumption causes air and water pollution, waste, and global warming. It does NOT make air cleaner.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is a renewable resource?",
      options: ["Sunlight", "Iron", "Copper", "Petroleum"],
      answer: "0",
      explanation:
        "Sunlight is renewable — it comes every day. Iron, copper, and petroleum are non-renewable.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Which group contains ALL non-renewable resources?",
      options: [
        "Coal, petroleum, natural gas",
        "Water, sunlight, air",
        "Trees, wild animals, plants",
        "Soil, water, plants",
      ],
      answer: "0",
      explanation:
        "Coal, petroleum, and natural gas are ALL non-renewable. The others contain renewables.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is a renewable resource that regenerates quickly?",
      options: ["Sunlight", "Coal", "Copper", "Petroleum"],
      answer: "0",
      explanation:
        "Sunlight regenerates every day. The others take millions of years.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Crop rotation helps to:",
      options: [
        "Conserve soil and increase its fertility",
        "Destroy soil",
        "Increase pollution",
        "Kill wildlife",
      ],
      answer: "0",
      explanation:
        "Crop rotation = planting different crops on the same field over years. It preserves and improves soil fertility.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Which term means 'planting trees at the edge of farmlands to reduce wind erosion'?",
      options: ["Shelter belts", "Terracing", "Check dams", "Contour ploughing"],
      answer: "0",
      explanation:
        "Shelter belts are trees planted at farmland edges to protect soil from wind erosion.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a benefit of forest conservation?",
      options: [
        "Reduces greenhouse gases",
        "Increases soil erosion",
        "Increases pollution",
        "Destroys habitat",
      ],
      answer: "0",
      explanation:
        "Forests absorb greenhouse gases, reducing climate change. They also prevent soil erosion.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "Which natural resource provides raw materials for the steel industry?",
      options: ["Coal and iron", "Sunlight and air", "Water and soil", "Trees and plants"],
      answer: "0",
      explanation:
        "Coal and iron are essential raw materials for the iron and steel industry — vital for industrial development.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "The 'carrying capacity' of grazing land refers to:",
      options: [
        "The maximum number of animals the land can support",
        "The weight of the animals",
        "The age of animals",
        "The color of animals",
      ],
      answer: "0",
      explanation:
        "Carrying capacity = the maximum number of animals the land can support without damage. Overgrazing goes beyond this.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a threat to wildlife?",
      options: ["Burning of forests", "Reforestation", "Education", "Conservation laws"],
      answer: "0",
      explanation:
        "Burning forests destroys habitat and kills wildlife. It is a major threat.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a wildlife conservation measure?",
      options: [
        "Establishing national parks and sanctuaries",
        "Increasing illegal hunting",
        "Burning forests",
        "Overgrazing",
      ],
      answer: "0",
      explanation:
        "National parks, game reserves, and sanctuaries protect wildlife from hunting and habitat loss.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "Afforestation means:",
      options: [
        "Planting trees where none existed before",
        "Cutting down trees",
        "Replacing cut trees",
        "Burning trees",
      ],
      answer: "0",
      explanation:
        "Afforestation = planting trees where NONE existed. Reforestation = replacing CUT trees.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "Contour ploughing is a method of:",
      options: ["Soil conservation", "Water conservation", "Wildlife conservation", "Forest conservation"],
      answer: "0",
      explanation:
        "Contour ploughing = tilling land ACROSS slopes (not up-down), creating barriers to runoff. It's a soil conservation method.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "Which natural resource is described as 'the study of inter-state politics regarding shared water'?",
      options: ["Mineral resources", "Water", "Forests", "Wildlife"],
      answer: "1",
      explanation:
        "Hydro-politics = study of shared WATER resources. The Nile is a famous example.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "Which two countries historically benefit MOST from the Nile?",
      options: ["Ethiopia and Kenya", "Egypt and Sudan", "Uganda and Rwanda", "Eritrea and Burundi"],
      answer: "1",
      explanation:
        "Egypt and Sudan (lower course) have historically benefited most. Upper course countries were least benefited.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "Which natural resource conservation is MOST important for Ethiopia?",
      options: [
        "Soil conservation (because of erosion in highlands)",
        "Coal conservation",
        "Petroleum conservation",
        "Gold conservation",
      ],
      answer: "0",
      explanation:
        "Soil conservation is critical for Ethiopia — the highlands suffer from serious soil erosion. Terracing, contour ploughing, and afforestation are widely practiced.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "Natural resources are important for a country's:",
      options: [
        "Industrial development only",
        "Fiscal revenue only",
        "Job creation only",
        "All of the above",
      ],
      answer: "3",
      explanation:
        "Natural resources support industrial development, provide fiscal revenue, create jobs, and reduce poverty.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country is NOT an upper course country of the Nile?",
      options: ["Ethiopia", "Kenya", "Egypt", "Uganda"],
      answer: "2",
      explanation:
        "Egypt is a LOWER course country. Ethiopia, Kenya, and Uganda are upper course countries.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the BEST description of soil conservation?",
      options: [
        "Protecting soil from erosion and degradation",
        "Removing all soil",
        "Polluting soil",
        "Covering soil with concrete",
      ],
      answer: "0",
      explanation:
        "Soil conservation = protecting soil from erosion and degradation so it maintains fertility and productivity.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "Water pollution is dangerous because:",
      options: [
        "It creates water scarcity and conflicts",
        "It improves water quality",
        "It helps wildlife",
        "It reduces disease",
      ],
      answer: "0",
      explanation:
        "Water pollution creates scarcity, harms health, and can lead to conflicts between users.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "The largest share of Ethiopia's water comes from:",
      options: [
        "Highland rainfall and rivers",
        "Desert rainfall",
        "Ocean water",
        "Groundwater only",
      ],
      answer: "0",
      explanation:
        "Ethiopia's water comes mainly from highland rainfall, feeding major rivers like Abay (Blue Nile).",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about Ethiopian water resources?",
      options: [
        "Ethiopia has abundant water but has not fully developed it",
        "Ethiopia has no water resources",
        "Ethiopia exports all of its water",
        "Ethiopia uses all of its water for irrigation",
      ],
      answer: "0",
      explanation:
        "Ethiopia has substantial water resources (rivers, lakes) but has not fully developed them for irrigation, hydropower, or industry.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT a renewable resource?",
      options: ["Soil", "Water", "Wild animals", "Natural gas"],
      answer: "3",
      explanation:
        "Natural gas is non-renewable. Soil, water, and wild animals are renewable.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Which human activity most damages soil?",
      options: [
        "Crop rotation",
        "Terracing",
        "Deforestation",
        "Contour ploughing",
      ],
      answer: "2",
      explanation:
        "Deforestation removes tree roots that hold soil, causing serious erosion and degradation.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the correct ORDER of the three R's in waste management?",
      options: [
        "Reduce → Reuse → Recycle",
        "Recycle → Reduce → Reuse",
        "Reuse → Recycle → Reduce",
        "Reduce → Recycle → Reuse",
      ],
      answer: "0",
      explanation:
        "Reduce (use less) → Reuse (use again) → Recycle (process into new). This order saves the most resources.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Ethiopia's forest cover has been REDUCED mainly because of:",
      options: [
        "Reforestation",
        "Deforestation for farming and fuel",
        "Afforestation",
        "Government protection",
      ],
      answer: "1",
      explanation:
        "Ethiopia's forest cover declined due to deforestation for farming, fuel wood, and settlement.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "The main benefit of terracing for Ethiopian farmers is:",
      options: [
        "It reduces soil erosion on hillsides",
        "It increases water pollution",
        "It kills wildlife",
        "It dries the soil",
      ],
      answer: "0",
      explanation:
        "Terracing creates stair-like structures that slow water flow, reducing soil erosion. Ethiopian highlands use this widely.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Which resource is MOST threatened by over-exploitation?",
      options: ["Sunlight", "Non-renewable minerals", "Water", "Wind"],
      answer: "1",
      explanation:
        "Non-renewable minerals like copper, iron, zinc, and phosphorus are most threatened by over-exploitation.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "The main problem in the Nile hydro-politics is:",
      options: [
        "Unbalanced and unfair utilization between upper and lower course countries",
        "Too much water",
        "No one uses the Nile",
        "Rainfall is too high",
      ],
      answer: "0",
      explanation:
        "Egypt and Sudan have historically used most of the Nile water, while upper course countries (like Ethiopia) have benefited least. This is the core dispute.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "Which activity directly reduces soil fertility?",
      options: ["Terracing", "Overgrazing", "Crop rotation", "Contour ploughing"],
      answer: "1",
      explanation:
        "Overgrazing removes vegetation and compacts the soil, reducing fertility. The other three improve or maintain soil.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "Ethiopia's agricultural productivity can improve by using:",
      options: [
        "Modern irrigation methods like drip and sprinkler",
        "Only traditional methods",
        "More deforestation",
        "More pollution",
      ],
      answer: "0",
      explanation:
        "Modern irrigation methods (drip, sprinkler) conserve water and increase productivity.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Which resource is regenerated slowly and is thus still classified as non-renewable for practical purposes?",
      options: ["Sunlight", "Wind", "Coal", "Rain"],
      answer: "2",
      explanation:
        "Coal takes millions of years to form. Though technically a fossil fuel, it is treated as non-renewable because we can't wait millions of years.",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these is NOT a benefit of forest resources?",
      options: [
        "Providing oxygen",
        "Absorbing CO₂",
        "Increasing desertification",
        "Providing habitats for wildlife",
      ],
      answer: "2",
      explanation:
        "Forests REDUCE desertification, not increase it. Benefits: oxygen, CO₂ absorption, wildlife habitat, wood, fuel.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "The main purpose of a national park is:",
      options: [
        "Protecting wildlife and ecosystems",
        "Building factories",
        "Increasing pollution",
        "Encouraging deforestation",
      ],
      answer: "0",
      explanation:
        "National parks protect wildlife and natural ecosystems for the enjoyment and benefit of current and future generations.",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following is a renewable resource of Ethiopia?",
      options: [
        "Water from highland rivers",
        "Coal reserves",
        "Natural gas deposits",
        "Gold mines",
      ],
      answer: "0",
      explanation:
        "Ethiopia's water from highland rivers is renewable. Coal, natural gas, and gold are non-renewable.",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which practice in Konso is famous for conserving soil?",
      options: [
        "Stone terracing on hillsides",
        "Cutting down all trees",
        "Burning forests",
        "Using only chemical fertilizers",
      ],
      answer: "0",
      explanation:
        "The Konso Cultural Landscape (UNESCO) is famous for 400+ years of stone-walled terraces that retain soil, collect water, and discharge excess water.",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "Which problem is caused by improper waste disposal?",
      options: [
        "Water and soil pollution",
        "Cleaner rivers",
        "More wildlife",
        "Fertile soil only",
      ],
      answer: "0",
      explanation:
        "Improper waste disposal causes water and soil pollution, harming health and ecosystems.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the correct match of a wildlife threat to its cause?",
      options: [
        "Deforestation — removes habitat",
        "Reforestation — kills wildlife",
        "Education — destroys habitat",
        "Conservation — harms animals",
      ],
      answer: "0",
      explanation:
        "Deforestation removes habitat and kills wildlife. The other options are wrong because those measures HELP wildlife.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "Why is soil conservation especially important in Ethiopia?",
      options: [
        "Because of steep highland slopes and erosion",
        "Because soil does not exist in Ethiopia",
        "Because Ethiopia has no farmers",
        "Because it always rains",
      ],
      answer: "0",
      explanation:
        "Ethiopia's steep highland slopes are prone to serious soil erosion. Terracing and contour ploughing help preserve soil.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about the Nile basin?",
      options: [
        "It includes Egypt, Sudan, Ethiopia, Kenya, Uganda and others",
        "It only includes Egypt",
        "It is not politically significant",
        "Ethiopia is not part of it",
      ],
      answer: "0",
      explanation:
        "The Nile basin includes 11 countries. It is one of Africa's most politically significant rivers.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "Which action would REDUCE soil erosion?",
      options: [
        "Planting trees on slopes",
        "Burning vegetation",
        "Overgrazing",
        "Removing natural vegetation",
      ],
      answer: "0",
      explanation:
        "Planting trees on slopes stabilizes the soil, reducing erosion. The other actions increase erosion.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "Which resource-based conflict is MOST relevant to Ethiopia?",
      options: [
        "The Nile / Abay River hydro-politics",
        "The Amazon river dispute",
        "The Mississippi river conflict",
        "The Rhine river dispute",
      ],
      answer: "0",
      explanation:
        "Ethiopia is at the center of the Nile (Abay) hydro-politics as an upper course country.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these methods is BOTH soil and water conservation?",
      options: [
        "Afforestation and reforestation",
        "Burning forests",
        "Overgrazing",
        "Mining",
      ],
      answer: "0",
      explanation:
        "Trees help conserve soil (roots hold soil) and water (roots help water infiltrate). This makes afforestation and reforestation great for both.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "Which best explains why resources must be conserved?",
      options: [
        "So future generations can also meet their needs",
        "So they disappear quickly",
        "So we can waste them",
        "So prices go up",
      ],
      answer: "0",
      explanation:
        "The core of sustainable development: meet present needs WITHOUT compromising future generations' ability to meet their own needs.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these is a WISE use of natural resources?",
      options: [
        "Recycling and reusing materials",
        "Cutting all forests",
        "Mining without limit",
        "Wasting water",
      ],
      answer: "0",
      explanation:
        "Recycling and reusing reduce the consumption of new raw materials and are examples of wise, sustainable use.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "Ethiopia can best develop its water resources by:",
      options: [
        "Investing in irrigation and hydropower",
        "Wasting water",
        "Cutting all trees",
        "Ignoring water resources",
      ],
      answer: "0",
      explanation:
        "Investing in irrigation, hydropower (like GERD), and water management helps Ethiopia develop its water resources for growth.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about natural resource development is TRUE?",
      options: [
        "Resources alone don't create wealth — you also need capital, skill, and technology",
        "Resources automatically create wealth",
        "Only wealthy countries have resources",
        "Technology is not needed for resource development",
      ],
      answer: "0",
      explanation:
        "Many resource-rich countries remain poor because they lack capital, skilled labor, and technology to convert resources into wealth.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which set correctly lists a renewable AND a non-renewable resource?",
      options: [
        "Sunlight (renewable), coal (non-renewable)",
        "Coal (renewable), sunlight (non-renewable)",
        "Petroleum (renewable), coal (renewable)",
        "Sunlight (non-renewable), water (non-renewable)",
      ],
      answer: "0",
      explanation:
        "Sunlight is renewable. Coal is non-renewable. The other options have wrong classifications.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "Which is the BEST explanation of 'resource-based conflict'?",
      options: [
        "Conflict over the access, control, or sharing of a natural resource",
        "Conflict over trade only",
        "Conflict over language",
        "Conflict over religion",
      ],
      answer: "0",
      explanation:
        "Resource-based conflict arises from disputes over access, control, or sharing of a natural resource like water, land, or minerals.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about the consequences of unwise resource utilization is FALSE?",
      options: [
        "It leads to water shortages",
        "It causes loss of forest cover",
        "It increases biodiversity",
        "It depletes minerals",
      ],
      answer: "2",
      explanation:
        "Unwise utilization REDUCES biodiversity (extinction of species), not increases it. The other three are true consequences.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Which hydro-politics statement about the Nile is CORRECT?",
      options: [
        "Egypt and Sudan have historically used most of the Nile water",
        "Ethiopia has historically used most of the Nile water",
        "No country uses the Nile water",
        "The Nile is not shared between countries",
      ],
      answer: "0",
      explanation:
        "Egypt and Sudan (lower course) have historically used most of the Nile water. Upper course countries like Ethiopia want fair use.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "Why is Ethiopian highland soil under great threat?",
      options: [
        "Steep slopes, heavy rain, and deforestation",
        "Too much flat land",
        "No rainfall",
        "Too few farmers",
      ],
      answer: "0",
      explanation:
        "Steep slopes, heavy highland rainfall, and deforestation combine to cause serious soil erosion in the Ethiopian highlands.",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "Explain the difference between renewable and non-renewable resources with examples.",
      answer:
        "Renewable resources can be regenerated naturally (sunlight, water, soil, plants, air, wild animals). Non-renewable resources cannot be replaced quickly and take millions of years to form (coal, petroleum, natural gas, iron, copper).",
      explanation:
        "The key question: can the resource regenerate naturally in a reasonable time?",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "List five methods of soil conservation.",
      answer:
        "Terracing, afforestation, crop rotation, reforestation, shelter belts, check dams, strip cropping, contour ploughing. (Any five.)",
      explanation:
        "Banchi, remember at least five. Terracing and crop rotation are the most tested.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "Describe the benefits of water conservation.",
      answer:
        "Minimizes drought and water shortages, reduces political conflicts, preserves the environment, provides water for recreation, builds safe and beautiful communities.",
      explanation:
        "Water conservation benefits extend to health, peace, and environment.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Explain the hydro-politics of the Abay (Nile) River and the tension between upper and lower course countries.",
      answer:
        "The Nile is Africa's most politically significant river, shared by 11 countries. Upper course countries (Ethiopia, Kenya, Uganda, Rwanda, Burundi, DRC, Eritrea, Tanzania, South Sudan) contribute water from high altitudes. Lower course countries (Egypt and Sudan) are at lower elevations and have historically benefited most. The tension is over the unfair distribution of the river's water. Ethiopia and other upper course countries want fair and equitable utilization for their own development (irrigation, hydropower).",
      explanation:
        "Key terms: hydro-politics, upper course, lower course, equitable utilization. Include both sides of the issue.",
    },
  ],
};