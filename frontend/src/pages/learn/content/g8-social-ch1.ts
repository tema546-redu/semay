import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 SOCIAL STUDIES — UNIT 1
// PHYSICAL CHARACTERISTICS OF THE EARTH
// Source: AAEB Grade 8 Social Studies Student Textbook (pp. 1–32)
// For: Banchi (ባንቺ) — Grade 8
// Language level: A2 / A1 / B1 — clear, short, no harsh words.
// ============================================================

export const g8SocialCh1: Chapter = {
  id: "ch1",
  number: 1,
  title: "Physical Characteristics of the Earth",
  titleAm: "የምድር አካላዊ ባህሪያት",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. Forces Shaping the Earth's Surface",
      titleAm: "የምድርን ገጽታ የሚቀርጹ ኃይሎች",
      body:
        "Banchi, the Earth's surface is not flat. It has mountains, valleys, plains, and oceans. Two big families of forces shape it: INSIDE forces (from deep within the Earth) and OUTSIDE forces (from the atmosphere, water, and living things). Together they build up and wear down the land.",
      bodyAm:
        "ባንቺ፣ የምድር ገጽታ ጠፍጣፋ አይደለም። ተራሮች፣ ሸለቆዎች፣ ሜዳዎች እና ውቅያኖሶች አሉት። ሁለት ትላልቅ የኃይል ቤተሰቦች ይቀርጹታል፡ ከውስጥ የሚመጡ ኃይሎች እና ከውጭ የሚመጡ ኃይሎች።",
      children: [
        {
          id: "n1-1",
          title: "Internal forces (also called tectonic forces)",
          titleAm: "የውስጥ ኃይሎች (ቴክቶኒክ ኃይሎች)",
          body:
            "Internal forces come from INSIDE the Earth. They BUILD UP the land — they create mountains, valleys, and volcanoes. Four main internal forces:\n" +
            "1) Folding\n" +
            "2) Faulting\n" +
            "3) Volcanism\n" +
            "4) Earthquakes",
          bodyAm:
            "የውስጥ ኃይሎች ከምድር ውስጥ ይመጣሉ። መሬቱን ይገነባሉ — ተራሮችን፣ ሸለቆዎችን እና እሳተ ገሞራዎችን ይፈጥራሉ። አራት ዋና የውስጥ ኃይሎች፡ ማጠፍ፣ መሰንጠቅ፣ እሳተ ገሞራነት እና የመሬት መንቀጥቀጥ።",
        },
        {
          id: "n1-2",
          title: "External forces (also called gradational forces)",
          titleAm: "የውጭ ኃይሎች (ግሬዴሽናል ኃይሎች)",
          body:
            "External forces come from OUTSIDE the Earth (wind, water, ice, living things). They WEAR DOWN the land and move material around. Two main processes:\n" +
            "1) Denudation (wearing away)\n" +
            "2) Deposition (dropping material)",
          bodyAm:
            "የውጭ ኃይሎች ከምድር ውጭ ይመጣሉ (ነፋስ፣ ውሃ፣ በረዶ፣ ሕያዋን ፍጥረታት)። መሬቱን ይሸረሽራሉ እና ቁሳቁስን ያንቀሳቅሳሉ። ሁለት ዋና ሂደቶች፡ መሸርሸር እና መቀመጥ።",
        },
        {
          id: "n1-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, this is the #1 trap in Unit 1: Internal forces BUILD UP the surface. External forces WEAR DOWN the surface. If an exam question asks 'which force created this mountain' — check whether the mountain was built by pressure from inside (folding/faulting/volcanism) or shaped by erosion from outside (weathering/erosion).",
          bodyAm:
            "ባንቺ፣ ይህ በክፍል 1 ውስጥ ቁጥር 1 ወጥመድ ነው፡ የውስጥ ኃይሎች ገጽታውን ይገነባሉ። የውጭ ኃይሎች ገጽታውን ይሸረሽራሉ።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Folding — Bending of Rock Layers",
      titleAm: "ማጠፍ — የሮክ ንጣፎችን መታጠፍ",
      body:
        "Banchi, imagine pushing two ends of a soft notebook from both sides. The pages in the middle bend up and down. That is folding — the bending of rock layers because of squeezing (compressional force).",
      bodyAm:
        "ባንቺ፣ ሁለት የማስታወሻ ደብተር ጫፎችን ከሁለቱም ጎን እየገፋሽ አስቢ። በመካከል ያሉት ገጾች ወደ ላይና ወደ ታች ይታጠፋሉ። ያ ማጠፍ ነው — በመጨቀጨቅ ምክንያት የሮክ ንጣፎች መታጠፍ።",
      children: [
        {
          id: "n2-1",
          title: "Key words you must know",
          titleAm: "ማወቅ ያለብሽ ቁልፍ ቃላት",
          body:
            "Anticline: layers bend UP (like the top of a hill).\n" +
            "Syncline: layers bend DOWN (like the bottom of a valley).\n" +
            "Monocline: all layers bend the SAME direction.\n\n" +
            "Picture:\n" +
            "        /\\            ← anticline (up)\n" +
            "       /  \\\n" +
            "      /    \\\n" +
            "     /      \\\n" +
            "    /        \\\n" +
            "   /          \\\n" +
            "  /____________\\\n" +
            "  \\            /     ← syncline (down)\n" +
            "   \\          /\n" +
            "    \\________/",
          bodyAm:
            "አንቲክላይን፡ ንጣፎች ወደ ላይ ይታጠፋሉ።\nሲንክላይን፡ ንጣፎች ወደ ታች ይታጠፋሉ።\nሞኖክላይን፡ ሁሉም ንጣፎች ወደ አንድ አቅጣጫ ይታጠፋሉ።",
        },
        {
          id: "n2-2",
          title: "Fold Mountains",
          titleAm: "የታጠፉ ተራሮች",
          body:
            "Fold mountains form when sedimentary rock layers are squeezed and uplifted into large folds. They are usually found along the EDGES of continents where thick sediment piles up.\n\n" +
            "The 7 major fold mountains you MUST memorize:\n" +
            "1) Andes (South America)\n" +
            "2) Rockies (North America)\n" +
            "3) Alps (Europe)\n" +
            "4) Himalayas (Asia)\n" +
            "5) Atlas (North Africa)\n" +
            "6) Cape Ranges (South Africa)\n" +
            "7) Australian Alps (Australia)",
          bodyAm:
            "የታጠፉ ተራሮች የሴዲመንታሪ ሮክ ንጣፎች ሲጨቀጨቁ እና ሲነሱ ይፈጠራሉ።\nማስታወስ ያለብሽ 7 ዋና የታጠፉ ተራሮች፡\n1) አንዲስ (ደቡብ አሜሪካ)\n2) ሮኪ (ሰሜን አሜሪካ)\n3) አልፕስ (አውሮፓ)\n4) ሂማላያ (እስያ)\n5) አትላስ (ሰሜን አፍሪካ)\n6) ኬፕ ሬንጅስ (ደቡብ አፍሪካ)\n7) የአውስትራሊያ አልፕስ",
        },
        {
          id: "n2-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, huge memory trick: 'ARAHACA' — Andes, Rockies, Alps, Himalayas, Atlas, Cape Ranges, Australian Alps. Also, fold mountains are made from SEDIMENTARY rock, NOT metamorphic rock. Exams love to swap those two words.",
          bodyAm:
            "ባንቺ፣ ትልቅ የማስታወሻ ዘዴ፡ 'ARAHACA' — አንዲስ፣ ሮኪ፣ አልፕስ፣ ሂማላያ፣ አትላስ፣ ኬፕ ሬንጅስ፣ አውስትራሊያ አልፕስ። ደግሞ የታጠፉ ተራሮች ከሴዲመንታሪ ሮክ ናቸው፣ ከሜታሞርፊክ አይደሉም። ፈተናዎች እነዚህን ሁለት ቃላት መቀያየር ይወዳሉ።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Faulting — Cracking of Rock Layers",
      titleAm: "መሰንጠቅ — የሮክ ንጣፎችን መሰንጠቅ",
      body:
        "Banchi, sometimes the rock is not soft enough to bend. Instead, it CRACKS. A crack in the Earth's crust is called a fault. Two kinds of force cause faults: pulling (tension) and pushing (compression).",
      bodyAm:
        "ባንቺ፣ አንዳንድ ጊዜ ሮኩ ለመታጠፍ ለስላሳ አይሆንም። በምትኩ ይሰነጠቃል። በምድር ቅርፊት ውስጥ ያለ ስንጥቅ ፋውልት ይባላል። ሁለት ዓይነት ኃይሎች ፋውልት ይፈጥራሉ፡ መሳብ እና መግፋት።",
      children: [
        {
          id: "n3-1",
          title: "Two types of faults",
          titleAm: "ሁለት ዓይነት ፋውልቶች",
          body:
            "Normal fault: caused by TENSION (pulling apart).\n" +
            "Reverse fault: caused by COMPRESSION (pushing together).\n\n" +
            "Memory trick: 'Normal = pulling = going down'. 'Reverse = pushing = going up'.",
          bodyAm:
            "መደበኛ ፋውልት፡ በመሳብ ይፈጠራል።\nተቃራኒ ፋውልት፡ በመጨቀጨቅ ይፈጠራል።",
        },
        {
          id: "n3-2",
          title: "Two landforms created by faulting",
          titleAm: "በፋውልቲንግ የሚፈጠሩ ሁለት የመሬት ቅርጾች",
          body:
            "1) Rift Valley: when the land BETWEEN two parallel faults SINKS down.\n" +
            "2) Block (Horst) Mountain: when the land BETWEEN two parallel faults is UPLIFTED.\n\n" +
            "Picture:\n" +
            "  Block Mtn        Rift Valley       Block Mtn\n" +
            "  ████████     ╲___________╱     ████████\n" +
            "  ████████      ╲_________╱      ████████\n" +
            "  ████████       (sunken)        ████████",
          bodyAm:
            "1) ስምጥ ሸለቆ፡ በሁለት ትይዩ ፋውልቶች መካከል ያለው መሬት ሲሰመጥ።\n2) ብሎክ ተራራ፡ በሁለት ትይዩ ፋውልቶች መካከል ያለው መሬት ሲነሳ።",
        },
        {
          id: "n3-3",
          title: "East African Rift Valley — must memorize",
          titleAm: "የምስራቅ አፍሪካ ስምጥ ሸለቆ — ማስታወስ ያለብሽ",
          body:
            "The LARGEST rift valley in the world.\n" +
            "Length: 7,200 km total (5,600 km in Africa).\n" +
            "Extends from SYRIA to MOZAMBIQUE.\n" +
            "Countries it passes through: Eritrea, Ethiopia, Kenya, Tanzania, DRC, Rwanda, Burundi.\n\n" +
            "The Ethiopian Rift Valley is PART of it — it runs from northeast to southwest.",
          bodyAm:
            "በዓለም ትልቁ ስምጥ ሸለቆ።\nርዝመት፡ 7,200 ኪ.ሜ (5,600 ኪ.ሜ በአፍሪካ)።\nከሶሪያ እስከ ሞዛምቢክ ይዘልቃል።\nየሚያልፍባቸው አገሮች፡ ኤርትራ፣ ኢትዮጵያ፣ ኬንያ፣ ታንዛኒያ፣ ዲአርሲ፣ ሩዋንዳ፣ ቡሩንዲ።\nየኢትዮጵያ ስምጥ ሸለቆ የዚህ አካል ነው።",
        },
        {
          id: "n3-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, BIG trap: A rift valley is formed when land SINKS between two faults. A block mountain is formed when land RISES between two faults. If the question asks about a sunken piece of land → rift valley. If it asks about a raised piece → block mountain.",
          bodyAm:
            "ባንቺ፣ ትልቅ ወጥመድ፡ ስምጥ ሸለቆ የሚፈጠረው በሁለት ፋውልቶች መካከል ያለው መሬት ሲሰመጥ ነው። ብሎክ ተራራ የሚፈጠረው መሬቱ ሲነሳ ነው።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Volcanism — When Magma Comes Up",
      titleAm: "እሳተ ገሞራነት — ማግማ ሲወጣ",
      body:
        "Banchi, deep inside the Earth it is extremely hot. Some rocks melt into a thick liquid called MAGMA. When magma rises and reaches the surface, we call it LAVA. This process is volcanism.",
      bodyAm:
        "ባንቺ፣ በምድር ውስጥ በጣም ሞቃት ነው። አንዳንድ ሮኮች ወደ ማግማ የሚባል ወፍራም ፈሳሽ ይቀልጣሉ። ማግማ ወደ ላይ ወጥቶ ገጽታው ላይ ሲደርስ ላቫ እንለዋለን። ይህ ሂደት እሳተ ገሞራነት ይባላል።",
      children: [
        {
          id: "n4-1",
          title: "Magma vs Lava (very important!)",
          titleAm: "ማግማ እና ላቫ (በጣም አስፈላጊ!)",
          body:
            "Magma = molten rock UNDERGROUND (still inside the Earth).\n" +
            "Lava = magma that has REACHED the surface.\n\n" +
            "Memory trick: 'Magma stays inside. Lava leaves.'",
          bodyAm:
            "ማግማ = ከመሬት በታች ያለ የቀለጠ ሮክ።\nላቫ = ወደ ላይ የደረሰ ማግማ።\nየማስታወሻ ዘዴ፡ 'ማግማ ውስጥ ይቆያል። ላቫ ይወጣል።'",
        },
        {
          id: "n4-2",
          title: "Two families of volcanic landforms",
          titleAm: "ሁለት የእሳተ ገሞራ ቅርጽ ቤተሰቦች",
          body:
            "A. Extrusive landforms (ON the surface):\n" +
            "  • Volcano\n" +
            "  • Crater\n" +
            "  • Caldera\n" +
            "  • Lava flows\n\n" +
            "B. Intrusive landforms (UNDERGROUND, formed before reaching surface):\n" +
            "  • Batholith — very LARGE mass of magma in crust\n" +
            "  • Laccolith — MUSHROOM-shaped, smaller than batholith\n" +
            "  • Dyke — magma in a VERTICAL crack\n" +
            "  • Sill — magma in a HORIZONTAL crack (between rock layers)",
          bodyAm:
            "A. የውጭ ቅርጾች (ገጽታው ላይ)፡ እሳተ ገሞራ፣ ክሬተር፣ ካልዴራ፣ ላቫ ፍሰት።\nB. የውስጥ ቅርጾች (ከመሬት በታች)፡\n• ባቶሊት — በጣም ትልቅ የማግማ ክምር\n• ላኮሊት — እንደ እንጉዳይ ቅርጽ\n• ዳይክ — በቀጥ ያለ ስንጥቅ ውስጥ\n• ሲል — በአግድም ስንጥቅ ውስጥ",
        },
        {
          id: "n4-3",
          title: "Crater vs Caldera",
          titleAm: "ክሬተር እና ካልዴራ",
          body:
            "Crater = hole at the TOP of a volcano (small).\n" +
            "Caldera = VERY WIDE hole (bigger than crater).\n" +
            "Crater lake = a lake formed inside a caldera.\n\n" +
            "Example in Ethiopia: Mount Zuquala — a cone-shaped volcano with a crater lake.",
          bodyAm:
            "ክሬተር = በእሳተ ገሞራ ጫፍ ላይ ያለ ጉድጓድ (ትንሽ)።\nካልዴራ = በጣም ሰፊ ጉድጓድ (ከክሬተር ትልቅ)።\nየክሬተር ሐይቅ = በካልዴራ ውስጥ የተፈጠረ ሐይቅ።\nበኢትዮጵያ ምሳሌ፡ ዝቋላ ተራራ።",
        },
        {
          id: "n4-4",
          title: "Three types of volcanoes",
          titleAm: "ሦስት ዓይነት እሳተ ገሞራዎች",
          body:
            "1) Active — currently erupting or likely to erupt soon. Examples: Erta'li, Fentale, Dubbi, Damailai (Ethiopia).\n" +
            "2) Dormant — not erupted for a long time but might again. Examples: Tatali, Dabbahu (Ethiopia).\n" +
            "3) Extinct — dead, will not erupt again. Examples: Mt Ras Dejen, Mt Batu, Mt Zuquala (Ethiopia).",
          bodyAm:
            "1) ንቁ — አሁን የሚፈነዳ ወይም ሊፈነዳ የሚችል። ምሳሌ፡ ኤርታሌ፣ ፈንታሌ፣ ዱቢ፣ ዳማሊሌ።\n2) እንቅልፍ ያለበት — ለረጅም ጊዜ ያልፈነዳ ግን ሊፈነዳ የሚችል። ምሳሌ፡ ታታሊ፣ ዳባሁ።\n3) የጠፋ — ሙት፣ ከእንግዲህ አይፈነዳም። ምሳሌ፡ ራስ ዳሸን፣ ባቱ፣ ዝቋላ።",
        },
        {
          id: "n4-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, two traps:\n" +
            "(1) Magma is UNDERGROUND, lava is ON the surface. Don't swap them.\n" +
            "(2) Dyke = vertical crack. Sill = horizontal crack. Memory trick: 'Dyke goes straight up (like a tower). Sill lies flat (like a windowsill).'",
          bodyAm:
            "ባንቺ፣ ሁለት ወጥመዶች፡\n(1) ማግማ ከመሬት በታች ነው፣ ላቫ በላይ ነው። አትቀያይሪ።\n(2) ዳይክ = ቀጥ ያለ ስንጥቅ። ሲል = አግድም ስንጥቅ። 'ዳይክ ቀጥ ብሎ ይወጣል። ሲል ጠፍጣፋ ነው።'",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Earthquakes — Sudden Shaking of the Crust",
      titleAm: "የመሬት መንቀጥቀጥ — ድንገተኛ የቅርፊት መንቀጥቀጥ",
      body:
        "Banchi, an earthquake is a sudden shaking of the Earth's crust. It happens when rocks break or slip along a fault line. The vibrations travel outward as waves.",
      bodyAm:
        "ባንቺ፣ የመሬት መንቀጥቀጥ ድንገተኛ የምድር ቅርፊት መንቀጥቀጥ ነው። ሮኮች በፋውልት መስመር ላይ ሲሰበሩ ወይም ሲንሸራተቱ ይከሰታል።",
      children: [
        {
          id: "n5-1",
          title: "Focus vs Epicenter (very important!)",
          titleAm: "ፎከስ እና ኤፒሴንተር (በጣም አስፈላጊ!)",
          body:
            "Focus = the point UNDERGROUND where the earthquake starts (origin).\n" +
            "Epicenter = the point on the SURFACE directly above the focus.\n\n" +
            "Picture:\n" +
            "  ═════════════════  ← surface\n" +
            "         ✖  ← epicenter (on surface)\n" +
            "         │\n" +
            "         │\n" +
            "         ●  ← focus (underground)",
          bodyAm:
            "ፎከስ = የመሬት መንቀጥቀጡ የሚጀምርበት ከመሬት በታች ያለ ነጥብ።\nኤፒሴንተር = በቀጥታ ከፎከስ በላይ ያለ በላይኛው ገጽታ ላይ ያለ ነጥብ።",
        },
        {
          id: "n5-2",
          title: "Measuring earthquakes",
          titleAm: "የመሬት መንቀጥቀጥን መለካት",
          body:
            "Seismometer = the instrument that MEASURES earthquakes.\n" +
            "Seismograph = the machine that RECORDS them on paper.\n" +
            "Richter scale = the scale that shows the MAGNITUDE (strength). Range: 0 to 9.\n\n" +
            "Richter scale meaning:\n" +
            "• 0 to 5 → minor or light\n" +
            "• 5 to 7 → moderate to strong\n" +
            "• 7 to 8 → major\n" +
            "• Above 8 → great",
          bodyAm:
            "ሲስሞሜተር = የመሬት መንቀጥቀጥን የሚለካ መሣሪያ።\nሲስሞግራፍ = በወረቀት ላይ የሚመዘግብ።\nሪክተር ስኬል = ጥንካሬውን የሚያሳይ ስኬል። ከ0 እስከ 9።",
        },
        {
          id: "n5-3",
          title: "Ring of Fire",
          titleAm: "የእሳት ቀለበት",
          body:
            "Banchi, the Ring of Fire is a horseshoe-shaped path around the PACIFIC Ocean where most earthquakes and volcanoes happen.\n" +
            "• 75% of the world's volcanoes\n" +
            "• 90% of the world's earthquakes\n\n" +
            "Also called the Circum-Pacific Belt.",
          bodyAm:
            "ባንቺ፣ የእሳት ቀለበት በፓሲፊክ ውቅያኖስ ዙሪያ ያለ የፈረስ ጫማ ቅርጽ መንገድ ነው። በዓለም ላይ፡ የ75% እሳተ ገሞራዎች እና የ90% የመሬት መንቀጥቀጦች ይከሰታሉ።",
        },
        {
          id: "n5-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, the most common exam trap: Focus vs Epicenter. Focus is BELOW the ground. Epicenter is ON the ground (directly above focus). Memory trick: 'Epicenter is above — like an epi-pen is above the skin'.",
          bodyAm:
            "ባንቺ፣ በጣም ተደጋጋሚ የፈተና ወጥመድ፡ ፎከስ ከመሬት በታች ነው። ኤፒሴንተር በቀጥታ ከፎከስ በላይ በመሬት ላይ ነው።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. External Forces — Weathering and Erosion",
      titleAm: "የውጭ ኃይሎች — መበስበስ እና መሸርሸር",
      body:
        "Banchi, external forces come from outside the Earth. They work in two ways: DENUDATION (wearing away) and DEPOSITION (dropping material). Denudation has two parts: weathering and erosion.",
      bodyAm:
        "ባንቺ፣ የውጭ ኃይሎች ከምድር ውጭ ይመጣሉ። በሁለት መንገድ ይሠራሉ፡ ዲኑዴሽን (መሸርሸር) እና ዲፖዚሽን (መቀመጥ)።",
      children: [
        {
          id: "n6-1",
          title: "Weathering vs Erosion (very important!)",
          titleAm: "የተፈጥሮ መበስበስ እና መሸርሸር",
          body:
            "Weathering = BREAKING DOWN rock INTO SMALLER PIECES (in place, no movement).\n" +
            "Erosion = MOVING the broken rock and soil FROM ONE PLACE TO ANOTHER.\n\n" +
            "Memory trick: 'Weathering breaks. Erosion takes.'",
          bodyAm:
            "ዌዘሪንግ = ሮክን ወደ ትንንሽ ቁራጮች መስበር (በቦታው ላይ፣ አይንቀሳቀስም)።\nኢሮዥን = የተሰበረውን ሮክ ከአንድ ቦታ ወደ ሌላ ማንቀሳቀስ።\n'ዌዘሪንግ ይሰብራል። ኢሮዥን ይወስዳል።'",
        },
        {
          id: "n6-2",
          title: "Two types of weathering",
          titleAm: "ሁለት ዓይነት የተፈጥሮ መበስበስ",
          body:
            "1) Physical (mechanical) weathering — breaks rock into pieces WITHOUT changing its chemical makeup.\n" +
            "Agents: temperature change (exfoliation), frost action, plant and animal action.\n\n" +
            "2) Chemical weathering — changes the rock's chemical structure.\n" +
            "Agents: rain action (carbonic acid dissolves limestone), plant and animal action.",
          bodyAm:
            "1) አካላዊ ዌዘሪንግ — የኬሚካል ስብጥሩን ሳይቀይር ሮክን ወደ ቁራጮች ይሰብራል። ወኪሎች፡ የሙቀት ለውጥ (ኤክስፎሊዬሽን)፣ የበረዶ እርምጃ፣ የዕፅዋት እና የእንስሳት እርምጃ።\n2) ኬሚካላዊ ዌዘሪንግ — የሮክን ኬሚካላዊ ስብጥር ይለውጣል። ወኪሎች፡ የዝናብ እርምጃ (ካርቦኒክ አሲድ ላይምስቶን ይቀልጣል)፣ የዕፅዋት እና የእንስሳት እርምጃ።",
        },
        {
          id: "n6-3",
          title: "Exfoliation — onion-skin weathering",
          titleAm: "ኤክስፎሊዬሽን — የሽንኩርት ቅርፊት ዌዘሪንግ",
          body:
            "Daytime: rock heats up and EXPANDS.\n" +
            "Nighttime: rock cools down and CONTRACTS.\n" +
            "This repeated expansion and contraction causes outer layers to PEEL OFF — like the layers of an onion.\n\n" +
            "That peeling is called exfoliation (onion-skin weathering).",
          bodyAm:
            "ቀን፡ ሮክ ሞቆ ይሰፋል።\nሌሊት፡ ሮክ ቀዝቅዞ ይጠበበሳል።\nይህ ተደጋጋሚ መስፋፋት እና መጠበብሰሳ የውጭ ንጣፎች እንዲላቀቁ ያደርጋል — እንደ ሽንኩርት ንጣፎች።",
        },
        {
          id: "n6-4",
          title: "Erosion — three types by running water",
          titleAm: "ኢሮዥን — በሚፈሰስ ውሃ ሦስት ዓይነቶች",
          body:
            "1) Sheet erosion — water moves in a WIDE flow (thin layer).\n" +
            "2) Rill erosion — water cuts SMALL channels.\n" +
            "3) Gully erosion — floods cut DEEP, WIDE gorges.\n\n" +
            "Memory trick: 'Sheet wide. Rill small. Gully deep.'",
          bodyAm:
            "1) ሺት ኢሮዥን — ውሃ ሰፊ ፍሰት ሆኖ ይንቀሳቀሳል።\n2) ሪል ኢሮዥን — ውሃ ትንሽ ቦዮችን ይቆርጣል።\n3) ገሊ ኢሮዥን — ጎርፍ ጥልቅ ሰፊ ሸለቆዎችን ይቆርጣል።",
        },
        {
          id: "n6-5",
          title: "Wind erosion and its landforms",
          titleAm: "የነፋስ ኢሮዥን እና ቅርጾቹ",
          body:
            "Wind is the STRONGEST erosion force in DESERTS.\n" +
            "Landforms it creates:\n" +
            "• Sand dune — small hill of sand\n" +
            "• Barchan — crescent-MOON-shaped sand hill\n" +
            "• Loess — a deposit of FERTILE soil by wind",
          bodyAm:
            "ነፋስ በበረሃ በጣም ጠንካራ የኢሮዥን ኃይል ነው።\n• ሳንድ ዲዩን — ትንሽ የአሸዋ ኮረብታ።\n• ባርካን — የጨረቃ ቅርጽ ያለው የአሸዋ ኮረብታ።\n• ሎየስ — በነፋስ የተቀመጠ ለም አፈር።",
        },
        {
          id: "n6-6",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, three traps here:\n" +
            "(1) Exfoliation = onion-skin weathering (TEMPERATURE change), not chemical.\n" +
            "(2) Stalactite grows DOWN from the roof. Stalagmite grows UP from the floor. Memory: 'StalacTIGHT hangs down (with a C for Celling). StalagMIGHT stand up (with a G for Ground).'\n" +
            "(3) Barchan is a MOON shape — the crescent moon looks like a 'C' — remember 'Barchan = C-shape'.",
          bodyAm:
            "ባንቺ፣ ሦስት ወጥመዶች፡\n(1) ኤክስፎሊዬሽን = የሽንኩርት ቅርፊት ዌዘሪንግ (የሙቀት ለውጥ)፣ ኬሚካላዊ አይደለም።\n(2) ስታላክታይት ከጣሪያ ወደ ታች ያድጋል። ስታላግማይት ከወለል ወደ ላይ ያድጋል።\n(3) ባርካን የጨረቃ ቅርጽ ነው — 'C' ቅርጽ።",
        },
      ],
    },

    {
      id: "n7",
      title: "7. The Atmosphere — Layers and Composition",
      titleAm: "ከባቢ አየር — ንጣፎች እና ስብጥር",
      body:
        "Banchi, the atmosphere is the envelope of air around the Earth. It is made of gases, dust particles, and water droplets. Together these suspended particles are called AEROSOLS.",
      bodyAm:
        "ባንቺ፣ ከባቢ አየር በምድር ዙሪያ ያለ የአየር ኤንቨሎፕ ነው። ጋዞች፣ የአቧራ ቅንጣቶች እና የውሃ ጠብታዎችን ያቀፈ ነው።",
      children: [
        {
          id: "n7-1",
          title: "Two most abundant gases",
          titleAm: "ሁለቱ በጣም የተትረፈረፉ ጋዞች",
          body:
            "1) NITROGEN (N₂) — 78% of the atmosphere. Most abundant.\n" +
            "2) OXYGEN (O₂) — 21% of the atmosphere. Second most abundant.\n" +
            "Others (argon, CO₂, trace gases) = about 1%.",
          bodyAm:
            "1) ናይትሮጅን — 78%። በጣም የተትረፈረፈ።\n2) ኦክሲጅን — 21%። ሁለተኛ።\nሌሎች (አርጎን፣ CO₂፣ ዱካ ጋዞች) ≈ 1%።",
        },
        {
          id: "n7-2",
          title: "Four layers from BOTTOM to TOP",
          titleAm: "አራቱ ንጣፎች ከታች ወደ ላይ",
          body:
            "1) TROPOSPHERE — lowest layer (0–8/16 km). 75% of atmospheric mass. All weather happens here. Top = tropopause.\n\n" +
            "2) STRATOSPHERE — 8/16 to ~50 km. Contains the OZONE LAYER (absorbs UV radiation). Temperature rises with altitude. Top = stratopause.\n\n" +
            "3) MESOSPHERE — ~50 to ~85 km. COLDEST layer. Temperature drops to about −100°C. Strongest winds (≈300 km/hr). Most meteors burn here. Top = mesopause.\n\n" +
            "4) THERMOSPHERE — above ~85 km. Very low density. Temperature rises to 725–1,225°C. Contains the ionosphere (reflects radio waves) and the exosphere (outermost).",
          bodyAm:
            "1) ትሮፖስፌር — በጣም ዝቅተኛ ንጣፍ (0–8/16 ኪ.ሜ)። 75% የከባቢ አየር ብዛት። ሁሉም የአየር ሁኔታ ለውጥ እዚህ ይከሰታል።\n2) ስትራቶስፌር — 8/16 እስከ ~50 ኪ.ሜ። ኦዞን ንጣፍ አለው (UV ጨረር ያጠፋል)። ሙቀት በከፍታ ይጨምራል።\n3) ሜዞስፌር — ~50 እስከ ~85 ኪ.ሜ። በጣም ቀዝቃዛ ንጣፍ (≈−100°C)። በጣም ጠንካራ ነፋሶች (≈300 ኪ.ሜ/ሰዓት)። ሜቲዮራዎች እዚህ ይቃጠላሉ።\n4) ቴርሞስፌር — ከ~85 ኪ.ሜ በላይ። በጣም ዝቅተኛ ጥግግት። ሙቀት 725–1,225°C። አዮኖስፌር (የሬዲዮ ሞገዶችን ያንጸባርቃል) እና ኤግዞስፌር አሉበት።",
        },
        {
          id: "n7-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, three traps:\n" +
            "(1) Ozone is in the STRATOSPHERE, not troposphere.\n" +
            "(2) Weather happens in the TROPOSPHERE, not stratosphere.\n" +
            "(3) COLDEST layer is the MESOSPHERE, not thermosphere. Thermosphere is very HOT but very thin.",
          bodyAm:
            "ባንቺ፣ ሦስት ወጥመዶች፡\n(1) ኦዞን በስትራቶስፌር ውስጥ ነው፣ በትሮፖስፌር አይደለም።\n(2) የአየር ሁኔታ ለውጥ በትሮፖስፌር ውስጥ ይከሰታል።\n(3) በጣም ቀዝቃዛ ንጣፍ ሜዞስፌር ነው፣ ቴርሞስፌር አይደለም።",
        },
      ],
    },

    {
      id: "n8",
      title: "8. Weather vs Climate",
      titleAm: "የአየር ሁኔታ እና የአየር ንብረት",
      body:
        "Banchi, these two words sound similar but mean very different things. Students lose easy marks by confusing them.",
      bodyAm:
        "ባንቺ፣ እነዚህ ሁለት ቃላት ተመሳሳይ ይመስላሉ ግን በጣም የተለያየ ትርጉም አላቸው። ተማሪዎች በማምታታት ቀላል ነጥቦችን ያጣሉ።",
      children: [
        {
          id: "n8-1",
          title: "The key difference",
          titleAm: "ዋናው ልዩነት",
          body:
            "WEATHER = condition of the atmosphere over a SHORT time (hours, days). Changes quickly.\n" +
            "CLIMATE = AVERAGE weather over a LONG time (30 years or more). Changes slowly.\n\n" +
            "Memory trick: 'Weather is what you wear today. Climate is what you keep in your closet for the season.'",
          bodyAm:
            "ዌዘር = የአየር ሁኔታ በአጭር ጊዜ (ሰዓታት፣ ቀናት)። በፍጥነት ይለወጣል።\nክላይመት = አማካይ የአየር ሁኔታ በረጅም ጊዜ (30 ዓመት ወይም ከዚያ በላይ)። በቀስታ ይለወጣል።",
        },
        {
          id: "n8-2",
          title: "Elements of weather and climate",
          titleAm: "የአየር ሁኔታ እና የአየር ንብረት ንጥረ ነገሮች",
          body:
            "The major ELEMENTS (ingredients) of weather and climate:\n" +
            "• Temperature\n" +
            "• Rainfall\n" +
            "• Air pressure\n" +
            "• Wind\n" +
            "• Cloud cover\n" +
            "• Sunshine\n" +
            "• Humidity",
          bodyAm:
            "ዋና ንጥረ ነገሮች፡ ሙቀት፣ ዝናብ፣ የአየር ግፊት፣ ነፋስ፣ ደመና፣ የፀሐይ ብርሃን፣ እርጥበት።",
        },
        {
          id: "n8-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, 'It rained in Addis Ababa yesterday' — that's WEATHER. 'Addis Ababa has a rainy summer every year' — that's CLIMATE. Time frame decides.",
          bodyAm:
            "ባንቺ፣ 'ትናንት በአዲስ አበባ ዘነበ' — ዌዘር ነው። 'አዲስ አበባ በየዓመቱ በበጋ ዝናብ አለው' — ክላይመት ነው። የጊዜ ርዝመት ይወስናል።",
        },
      ],
    },

    {
      id: "n9",
      title: "9. Controls of Weather and Climate",
      titleAm: "የአየር ሁኔታ እና የአየር ንብረት ተቆጣጣሪዎች",
      body:
        "Banchi, elements are the INGREDIENTS. Controls are the CHEFS that decide how much of each ingredient a place gets. There are five big controls.",
      bodyAm:
        "ባንቺ፣ ንጥረ ነገሮች ንጥረ ነገሮች ናቸው። ተቆጣጣሪዎች የትኛውን ንጥረ ነገር ምን ያህል እንደሚያገኝ የሚወስኑ ናቸው። አምስት ትላልቅ ተቆጣጣሪዎች አሉ።",
      children: [
        {
          id: "n9-1",
          title: "1) Latitude",
          titleAm: "1) ኬክሮስ",
          body:
            "The MOST IMPORTANT control of temperature on a global scale.\n" +
            "At the EQUATOR: sun's rays are DIRECT (high intensity) → HOT.\n" +
            "At the POLES: sun's rays are SLANTED (oblique) → COLD.\n\n" +
            "Sun is directly overhead:\n" +
            "• At Tropic of Cancer → June 21\n" +
            "• At Tropic of Capricorn → December 21\n" +
            "• At Equator → March 21 and September 23 (equinoxes)",
          bodyAm:
            "በዓለም አቀፍ ደረጃ የሙቀት በጣም አስፈላጊ ተቆጣጣሪ።\nበኢኳተር ላይ፡ የፀሐይ ጨረሮች ቀጥ ያሉ ናቸው → ሞቃት።\nበፖሎች ላይ፡ የፀሐይ ጨረሮች ዘንበል ናቸው → ቀዝቃዛ።",
        },
        {
          id: "n9-2",
          title: "2) Altitude",
          titleAm: "2) ከፍታ",
          body:
            "Temperature DECREASES with altitude (going up = getting colder).\n" +
            "Normal lapse rate = 6.4°C per 1000 m (temperature drops about 6.4°C for each 1000 m you climb).\n\n" +
            "Example in Ethiopia: Highlands (Dega, Wurch) are cool. Lowlands (Qolla, Bereha) are hot.",
          bodyAm:
            "ሙቀት ከከፍታ ጋር ይቀንሳል (ወደ ላይ መውጣት = መቀዝቀዝ)።\nመደበኛ የሙቀት መቀነስ መጠን = 6.4°C በ1000 ሜትር።\nምሳሌ በኢትዮጵያ፡ ደጋ እና ወርች ቀዝቃዛ ናቸው። ቆላ እና በረሃ ሞቃት ናቸው።",
        },
        {
          id: "n9-3",
          title: "3) Distance from the Sea",
          titleAm: "3) ከባሕር ያለው ርቀት",
          body:
            "Coastal areas are COOLER and WETTER than inland areas.\n" +
            "Inland (center of continents) has a LARGE range of temperatures — very hot summers, very cold winters.\n\n" +
            "Water heats up and cools down more SLOWLY than land.",
          bodyAm:
            "የባሕር ዳርቻ አካባቢዎች ከውስጥ አካባቢዎች የበለጠ ቀዝቃዛ እና እርጥብ ናቸው።\nየውስጥ አካባቢዎች ሰፊ የሙቀት ልዩነት አላቸው።",
        },
        {
          id: "n9-4",
          title: "4) Cloud Cover",
          titleAm: "4) የደመና ሽፋን",
          body:
            "Clouds REDUCE the amount of solar radiation reaching the surface.\n" +
            "Clouds also TRAP outgoing radiation (keeping some heat in).\n" +
            "When there are no clouds: both incoming and outgoing radiation are at maximum.",
          bodyAm:
            "ደመናዎች ወደ ገጽታው የሚደርሰውን የፀሐይ ጨረር መጠን ይቀንሳሉ።\nደመናዎች የሚወጣውን ጨረርም ይይዛሉ።",
        },
        {
          id: "n9-5",
          title: "5) Ocean Currents",
          titleAm: "5) የውቅያኖስ ፍሰቶች",
          body:
            "Ocean current = horizontal movement of ocean water caused by wind and temperature differences.\n\n" +
            "Two types:\n" +
            "• WARM current — high temperature, high moisture. Makes coasts WARMER and WETTER.\n" +
            "• COLD current — low temperature, low moisture. Makes coasts COOLER and DRIER.",
          bodyAm:
            "የውቅያኖስ ፍሰት = በነፋስ እና በሙቀት ልዩነት የሚነሳ አግድም የውሃ እንቅስቃሴ።\n• ሙቅ ፍሰት — ከፍተኛ ሙቀት፣ ከፍተኛ እርጥበት። ዳርቻዎችን የበለጠ ሞቃት እና እርጥብ ያደርጋል።\n• ቀዝቃዛ ፍሰት — ዝቅተኛ ሙቀት፣ ዝቅተኛ እርጥበት። ዳርቻዎችን የበለጠ ቀዝቃዛ እና ደረቅ ያደርጋል።",
        },
        {
          id: "n9-6",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, altitude trap: temperature DECREASES as you go HIGHER. Do not reverse this. 'Higher = colder' for the atmosphere near the surface. (Only the stratosphere and thermosphere behave differently, but for the troposphere, higher = colder.)",
          bodyAm:
            "ባንቺ፣ የከፍታ ወጥመድ፡ ሙቀት ወደ ላይ ሲወጣ ይቀንሳል። 'ከፍ ብሎ = ቀዝቅዟል።'",
        },
      ],
    },

    {
      id: "n10",
      title: "10. Ethiopia's Five Agro-Climatic Zones",
      titleAm: "የኢትዮጵያ አምስት የግብርና-አየር ንብረት ዞኖች",
      body:
        "Banchi, based on altitude and temperature, Ethiopia has five agro-climatic zones. Memorize the table — it always appears in exams.",
      bodyAm:
        "ባንቺ፣ በከፍታ እና በሙቀት ላይ ተመስርቶ ኢትዮጵያ አምስት የግብርና-አየር ንብረት ዞኖች አላት። ሠንጠረዡን አስታውሺ።",
      children: [
        {
          id: "n10-1",
          title: "The 5 zones (from hottest to coldest)",
          titleAm: "5ቱ ዞኖች (ከሞቃት ወደ ቀዝቃዛ)",
          body:
            "1) BEREHA — below 500 m; above 30°C; DESERT\n" +
            "2) QOLLA — 500–1500 m; 20–30°C; TROPICAL\n" +
            "3) WOINA DEGA — 1500–2300 m; 15–20°C; SUB-TROPICAL\n" +
            "4) DEGA — 2300–3300 m; 10–15°C; TEMPERATE\n" +
            "5) WURCH (Kur) — above 3300 m; below 10°C; ALPINE\n\n" +
            "Memory trick (from bottom up): 'BQ-WDW' or 'Bereha, Qolla, Woina, Dega, Wurch'.",
          bodyAm:
            "1) በረሃ — ከ500 ሜ በታች፤ ከ30°C በላይ፤ በረሃ\n" +
            "2) ቆላ — 500–1500 ሜ፤ 20–30°C፤ ሞቃታማ\n" +
            "3) ወይና ደጋ — 1500–2300 ሜ፤ 15–20°C፤ ከፊል ሞቃታማ\n" +
            "4) ደጋ — 2300–3300 ሜ፤ 10–15°C፤ ወቅታዊ\n" +
            "5) ወርች — ከ3300 ሜ በላይ፤ ከ10°C በታች፤ አልፓይን",
        },
        {
          id: "n10-2",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, the exam often asks: 'Which zone is the coldest?' → WURCH. 'Which is the hottest?' → BEREHA. 'Which is the middle/moderate zone?' → WOINA DEGA. Write them in order from BOTTOM (Bereha) to TOP (Wurch).",
          bodyAm:
            "ባንቺ፣ ፈተናው ብዙ ጊዜ ይጠይቃል፡ 'የትኛው ዞን በጣም ቀዝቃዛ ነው?' → ወርች። 'የትኛው በጣም ሞቃት?' → በረሃ። 'መካከለኛው?' → ወይና ደጋ።",
        },
      ],
    },

    {
      id: "n11",
      title: "11. Exam Strategy — Unit 1",
      titleAm: "የፈተና ስልት — ክፍል 1",
      body:
        "Banchi, before answering Unit 1 questions, run these five checks in your head.",
      bodyAm:
        "ባንቺ፣ የክፍል 1 ጥያቄዎችን ከመመለስሽ በፊት እነዚህን አምስት ቼኮች በራስሽ ውስጥ አካሂጂ።",
      children: [
        {
          id: "n11-1",
          title: "Check 1 — Internal or external?",
          titleAm: "ቼክ 1 — ውስጥ ወይስ ውጭ?",
          body:
            "Is the force from inside the Earth (folding, faulting, volcanism, earthquake)? Or outside (weathering, erosion)? Internal BUILDS, external WEARS DOWN.",
          bodyAm:
            "ኃይሉ ከምድር ውስጥ ነው (ማጠፍ፣ ፋውልቲንግ፣ እሳተ ገሞራ፣ የመሬት መንቀጥቀጥ)? ወይስ ከውጭ (ዌዘሪንግ፣ ኢሮዥን)? የውስጥ ይገነባል፣ የውጭ ይሸረሽራል።",
        },
        {
          id: "n11-2",
          title: "Check 2 — Which layer?",
          titleAm: "ቼክ 2 — የትኛው ንጣፍ?",
          body:
            "For atmosphere questions: is it about weather (troposphere), ozone (stratosphere), coldest (mesosphere), or radio waves (ionosphere/thermosphere)?",
          bodyAm:
            "ለከባቢ አየር ጥያቄዎች፡ ስለ የአየር ሁኔታ (ትሮፖስፌር)፣ ስለ ኦዞን (ስትራቶስፌር)፣ ስለ ቀዝቃዛ (ሜዞስፌር)፣ ወይስ ስለ ሬዲዮ ሞገዶች (አዮኖስፌር/ቴርሞስፌር)?",
        },
        {
          id: "n11-3",
          title: "Check 3 — Weather or climate?",
          titleAm: "ቼክ 3 — ዌዘር ወይስ ክላይመት?",
          body:
            "Short time (hours, days) → weather. Long time (30 years+) → climate.",
          bodyAm:
            "አጭር ጊዜ (ሰዓታት፣ ቀናት) → ዌዘር። ረጅም ጊዜ (30 ዓመት+) → ክላይመት።",
        },
        {
          id: "n11-4",
          title: "Check 4 — Focus or epicenter?",
          titleAm: "ቼክ 4 — ፎከስ ወይስ ኤፒሴንተር?",
          body:
            "Below the ground → focus. On the surface (directly above focus) → epicenter.",
          bodyAm:
            "ከመሬት በታች → ፎከስ። በገጽታው ላይ → ኤፒሴንተር።",
        },
        {
          id: "n11-5",
          title: "Check 5 — Ethiopia's zones in order",
          titleAm: "ቼክ 5 — የኢትዮጵያ ዞኖች በቅደም",
          body:
            "From hottest to coldest: Bereha → Qolla → Woina Dega → Dega → Wurch.",
          bodyAm:
            "ከሞቃት ወደ ቀዝቃዛ፡ በረሃ → ቆላ → ወይና ደጋ → ደጋ → ወርች።",
        },
      ],
    },
  ],

  // ============================================================
  // QUESTIONS — Batch 1: Q1–Q50
  // ============================================================
  questions: [
    // ---------- EASY MCQ (Q1–Q20) ----------
    {
      id: "q1",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is an INTERNAL force shaping the Earth's surface?",
      options: ["Weathering", "Faulting", "Erosion", "Deposition"],
      answer: "1",
      explanation:
        "Faulting is an internal (tectonic) force — it comes from inside the Earth. Weathering, erosion, and deposition are external forces.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is an EXTERNAL force?",
      options: ["Folding", "Volcanism", "Weathering", "Earthquake"],
      answer: "2",
      explanation:
        "Weathering is an external force — it comes from outside (temperature, water, wind). Folding, volcanism, and earthquakes are internal.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "When rock layers bend UPWARD, the fold is called:",
      options: ["Syncline", "Anticline", "Monocline", "Fault"],
      answer: "1",
      explanation:
        "Anticline = upward bend. Syncline = downward bend. Monocline = all layers bend the same direction. Banchi, memorize: 'Anti = up'.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "When rock layers bend DOWNWARD, the fold is called:",
      options: ["Anticline", "Syncline", "Monocline", "Fault"],
      answer: "1",
      explanation:
        "Syncline = downward bend (like a valley). Anticline is the opposite (upward).",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "A crack in the Earth's crust is called:",
      options: ["A fold", "A fault", "A crater", "An epicenter"],
      answer: "1",
      explanation:
        "A fault is a crack in the crust. Folding is bending; faulting is cracking.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "Which force causes a NORMAL fault?",
      options: ["Compression (pushing)", "Tension (pulling)", "Volcanism", "Weathering"],
      answer: "1",
      explanation:
        "Tension (pulling apart) causes a normal fault. Compression (pushing together) causes a reverse fault.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "A rift valley is formed when land between two parallel faults:",
      options: ["Rises up", "Sinks down", "Stays flat", "Dissolves"],
      answer: "1",
      explanation:
        "Rift valley = land SINKS between two parallel faults. If it RISES, we get a block (horst) mountain.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "The largest rift valley in the world is:",
      options: ["The Ethiopian Rift Valley", "The East African Rift Valley", "The Rhine Rift", "The Dead Sea Rift"],
      answer: "1",
      explanation:
        "The East African Rift Valley. It extends 7,200 km from Syria to Mozambique. The Ethiopian Rift Valley is PART of it.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "Molten rock UNDERGROUND is called:",
      options: ["Lava", "Magma", "Basalt", "Ash"],
      answer: "1",
      explanation:
        "Magma = molten rock UNDERGROUND. When it reaches the surface, it becomes LAVA. Banchi, memorise: 'Magma inside, lava outside.'",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "Molten rock that has reached the surface is called:",
      options: ["Magma", "Lava", "Batholith", "Crater"],
      answer: "1",
      explanation:
        "Lava = magma that has reached the surface. Magma is still underground.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "The hole at the TOP of a volcano is called a:",
      options: ["Caldera", "Crater", "Sill", "Dyke"],
      answer: "1",
      explanation:
        "A crater is the hole at the top of a volcano. If it is very wide, it is called a caldera.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "A very wide crater is called a:",
      options: ["Vent", "Caldera", "Fissure", "Fault"],
      answer: "1",
      explanation:
        "Caldera = a very wide basin-shaped depression at the top of a volcano. Sometimes it contains a crater lake.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "Which volcano type is likely to erupt again?",
      options: ["Extinct", "Dormant", "Active", "Sleeping"],
      answer: "2",
      explanation:
        "Active volcanoes are currently erupting or likely to erupt. Dormant may erupt in the future. Extinct will never erupt.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "The point UNDERGROUND where an earthquake starts is called:",
      options: ["Epicenter", "Focus", "Richter", "Seismometer"],
      answer: "1",
      explanation:
        "Focus = underground origin point. Epicenter = on the surface directly above the focus.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "The point on the surface directly above the focus is called:",
      options: ["Epicenter", "Focus", "Hypocenter", "Vent"],
      answer: "0",
      explanation:
        "Epicenter = surface point directly above the focus. Banchi, 'epi' means 'above'.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "The instrument that MEASURES earthquakes is a:",
      options: ["Barometer", "Seismometer", "Thermometer", "Anemometer"],
      answer: "1",
      explanation:
        "Seismometer measures earthquakes. Seismograph records them. Richter scale shows magnitude.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "The scale that measures the magnitude of an earthquake is:",
      options: ["Celsius", "Richter", "Mercalli", "Kelvin"],
      answer: "1",
      explanation:
        "The Richter scale ranges from 0 to 9. Larger numbers = stronger earthquakes.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "Which gas makes up MOST of the atmosphere?",
      options: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
      answer: "1",
      explanation:
        "Nitrogen is the most abundant gas (78%). Oxygen is second (21%).",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "Which layer of the atmosphere contains all of our weather?",
      options: ["Stratosphere", "Mesosphere", "Troposphere", "Thermosphere"],
      answer: "2",
      explanation:
        "The troposphere is the lowest layer — all weather happens here. It contains 75% of the atmosphere's mass.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "Which layer contains the ozone that protects us from UV radiation?",
      options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      answer: "1",
      explanation:
        "The stratosphere contains the ozone layer. Ozone absorbs harmful UV radiation from the sun.",
    },

    // ---------- MEDIUM MCQ (Q21–Q40) ----------
    {
      id: "q21",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following is NOT a fold mountain?",
      options: ["Andes", "Rockies", "Kilimanjaro (volcanic)", "Alps"],
      answer: "2",
      explanation:
        "Kilimanjaro is a VOLCANIC mountain, not a fold mountain. Fold mountains are the 7 you memorized: Andes, Rockies, Alps, Himalayas, Atlas, Cape Ranges, Australian Alps.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "medium",
      stem: "The Cape Ranges are located in:",
      options: ["North America", "South America", "South Africa", "Australia"],
      answer: "2",
      explanation:
        "The Cape Ranges are in South Africa. Banchi, do not mix up 'Cape Ranges' (South Africa) with 'Australian Alps' (Australia).",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "medium",
      stem: "The Himalayas are located in:",
      options: ["Europe", "Asia", "Africa", "South America"],
      answer: "1",
      explanation:
        "Himalayas = Asia. Alps = Europe. Andes = South America. Rockies = North America.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "medium",
      stem: "The East African Rift Valley extends from:",
      options: ["Egypt to Kenya", "Syria to Mozambique", "Morocco to Ethiopia", "Sudan to Tanzania"],
      answer: "1",
      explanation:
        "The East African Rift Valley extends 7,200 km from SYRIA (in the Middle East) to MOZAMBIQUE (in southern Africa).",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following is an INTRUSIVE volcanic feature?",
      options: ["Crater", "Caldera", "Lava flow", "Batholith"],
      answer: "3",
      explanation:
        "Batholith is intrusive (formed underground). Crater, caldera, and lava flow are extrusive (surface features).",
    },
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "A mushroom-shaped intrusive igneous rock body smaller than a batholith is called:",
      options: ["Laccolith", "Dyke", "Sill", "Crater"],
      answer: "0",
      explanation:
        "Laccolith = mushroom-shaped, smaller than batholith. Dyke = vertical crack. Sill = horizontal crack.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Magma that solidifies in a vertical crack forms a:",
      options: ["Sill", "Dyke", "Laccolith", "Batholith"],
      answer: "1",
      explanation:
        "Dyke = vertical crack. Sill = horizontal crack. Memory: 'Dyke goes straight up (like a tower). Sill lies flat (like a windowsill).'",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Mount Zuquala in Ethiopia is an example of:",
      options: ["An active volcano", "A dormant volcano", "An extinct volcano with a crater lake", "A fault mountain"],
      answer: "2",
      explanation:
        "Mt Zuquala is an EXTINCT volcano with a crater lake. Active examples: Erta'li, Fentale. Dormant: Tatali, Dabbahu.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "The Ring of Fire is associated with which ocean?",
      options: ["Atlantic", "Indian", "Pacific", "Arctic"],
      answer: "2",
      explanation:
        "The Ring of Fire is a horseshoe-shaped path around the PACIFIC Ocean. It has 75% of the world's volcanoes and 90% of earthquakes.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following is a PHYSICAL weathering process?",
      options: ["Rain dissolving limestone", "Exfoliation", "Acid rain forming caves", "Rusting of iron"],
      answer: "1",
      explanation:
        "Exfoliation (onion-skin weathering) is physical — it breaks rock without changing its chemical makeup. Rain action and acid rain are chemical.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "The process by which rock layers peel off like an onion is called:",
      options: ["Frost action", "Exfoliation", "Erosion", "Deposition"],
      answer: "1",
      explanation:
        "Exfoliation = onion-skin weathering. Caused by repeated expansion (day) and contraction (night) from temperature changes.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "Which type of erosion involves water cutting DEEP, WIDE gorges?",
      options: ["Sheet erosion", "Rill erosion", "Gully erosion", "Wind erosion"],
      answer: "2",
      explanation:
        "Gully erosion = deep wide gorges. Sheet = wide thin layer. Rill = small channels.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "A crescent-moon-shaped sand hill formed by wind is called:",
      options: ["Dune", "Barchan", "Loess", "Screes"],
      answer: "1",
      explanation:
        "Barchan = crescent-moon-shaped sand hill. Regular sand dunes are simple hills of sand. Loess = fertile soil deposit.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Which gas is the SECOND most abundant in the atmosphere?",
      options: ["Nitrogen", "Oxygen", "Argon", "Carbon dioxide"],
      answer: "1",
      explanation:
        "Oxygen is second (21%). Nitrogen is first (78%).",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "The coldest layer of the atmosphere is:",
      options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      answer: "2",
      explanation:
        "The mesosphere is the coldest layer, with temperatures reaching about −100°C. It is also where most meteors burn up.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "Weather is BEST described as:",
      options: [
        "Average conditions over 30 years",
        "Condition of the atmosphere over a short time",
        "Climate in a specific region",
        "Wind direction over the year",
      ],
      answer: "1",
      explanation:
        "Weather = SHORT time (hours, days). Climate = LONG time (30 years or more).",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "The normal lapse rate is approximately:",
      options: ["3.2°C per 1000 m", "6.4°C per 1000 m", "10°C per 1000 m", "1°C per 1000 m"],
      answer: "1",
      explanation:
        "The normal lapse rate = 6.4°C per 1000 m. Temperature drops by 6.4°C for each 1000 m you climb.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "The MOST IMPORTANT control of temperature on a global scale is:",
      options: ["Altitude", "Latitude", "Cloud cover", "Ocean current"],
      answer: "1",
      explanation:
        "Latitude is the most important global control of temperature. Altitude, cloud cover, and ocean currents matter locally too.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "A warm ocean current makes the nearby coast:",
      options: ["Cooler and drier", "Warmer and wetter", "Cooler and wetter", "Warmer and drier"],
      answer: "1",
      explanation:
        "Warm ocean currents have high temperature and high moisture. They make coasts warmer and wetter. Cold currents do the opposite.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Which zone in Ethiopia is the COLDEST with the highest altitude?",
      options: ["Bereha", "Qolla", "Dega", "Wurch"],
      answer: "3",
      explanation:
        "Wurch (also called Kur) is the coldest zone, above 3,300 m, with temperatures below 10°C.",
    },

    // ---------- HARD MCQ (Q41–Q45) ----------
    {
      id: "q41",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about the East African Rift Valley is FALSE?",
      options: [
        "It is the largest rift valley in the world",
        "It extends 7,200 km from Syria to Mozambique",
        "It passes through Ethiopia, Kenya, and Tanzania",
        "It was formed by upwarping of land between two faults",
      ],
      answer: "3",
      explanation:
        "The rift valley forms from DOWNWARPING (SINKING) of land between two faults, NOT upwarping. Upwarping creates block mountains.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "hard",
      stem: "Which pair correctly matches an intrusive feature with its shape?",
      options: [
        "Laccolith — vertical",
        "Dyke — vertical",
        "Sill — vertical",
        "Batholith — mushroom",
      ],
      answer: "1",
      explanation:
        "Dyke = vertical crack. Laccolith = mushroom-shaped. Sill = horizontal. Batholith = very large mass (not mushroom).",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "hard",
      stem: "In the troposphere, as altitude INCREASES, temperature:",
      options: ["Increases", "Decreases", "Stays the same", "First increases, then decreases"],
      answer: "1",
      explanation:
        "In the troposphere, temperature DECREASES as altitude increases. This is the normal lapse rate (6.4°C per 1000 m). Note: in the stratosphere, temperature rises with altitude — a common trick question!",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "hard",
      stem: "Ethiopia has how many traditional agro-climatic zones?",
      options: ["3", "4", "5", "6"],
      answer: "2",
      explanation:
        "Ethiopia has 5 traditional agro-climatic zones: Bereha, Qolla, Woina Dega, Dega, Wurch. Memorize them in order.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "hard",
      stem: "Which zone in Ethiopia is the HOTTEST with mean temperature above 30°C?",
      options: ["Qolla", "Bereha", "Woina Dega", "Dega"],
      answer: "1",
      explanation:
        "Bereha is the hottest zone (below 500 m, above 30°C). It's a desert area. Banchi, Bereha = hot desert.",
    },

    // ---------- SHORT ANSWER (Q46–Q50) ----------
    {
      id: "q46",
      type: "short",
      difficulty: "easy",
      stem: "Define internal forces in your own words.",
      answer:
        "Internal forces are forces that come from INSIDE the Earth. They build up the surface and create landforms like mountains, rift valleys, and volcanoes.",
      explanation:
        "Four main internal forces: folding, faulting, volcanism, earthquakes.",
    },
    {
      id: "q47",
      type: "short",
      difficulty: "medium",
      stem: "What is the difference between magma and lava?",
      answer:
        "Magma is molten rock UNDERGROUND. Lava is magma that has reached the surface of the Earth.",
      explanation:
        "Memory trick: 'Magma inside, lava outside.' Once magma exits the volcano, it becomes lava.",
    },
    {
      id: "q48",
      type: "short",
      difficulty: "medium",
      stem: "Name the four layers of the atmosphere from bottom to top.",
      answer: "Troposphere, Stratosphere, Mesosphere, Thermosphere.",
      explanation:
        "Banchi, order matters: TROPO → STRATO → MESO → THERMO. If asked 'from top to bottom', reverse it.",
    },
    {
      id: "q49",
      type: "short",
      difficulty: "hard",
      stem: "List the five agro-climatic zones of Ethiopia from hottest to coldest.",
      answer: "Bereha, Qolla, Woina Dega, Dega, Wurch.",
      explanation:
        "From hottest (Bereha, <500 m) to coldest (Wurch, >3,300 m).",
    },
    {
      id: "q50",
      type: "short",
      difficulty: "hard",
      stem: "Explain the difference between focus and epicenter of an earthquake.",
      answer:
        "Focus = underground point where the earthquake starts. Epicenter = point on the surface directly above the focus.",
      explanation:
        "Memory trick: 'Epi = above'. Epicenter is the surface point you hear about on the news.",
    },
        // ============================================================
    // BATCH 2 — Q51 to Q120 (final for Unit 1)
    // ============================================================

    // ---------- EASY MCQ (Q51–Q70) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a fold mountain in Asia?",
      options: ["Andes", "Himalayas", "Rockies", "Alps"],
      answer: "1",
      explanation:
        "Himalayas = Asia. Andes = South America. Rockies = North America. Alps = Europe.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "easy",
      stem: "Block (Horst) Mountains are formed when land between two parallel faults:",
      options: ["Sinks down", "Rises up", "Stays flat", "Dissolves"],
      answer: "1",
      explanation:
        "Block mountains form when land RISES between two parallel faults. Rift valleys form when land sinks.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is NOT an internal force?",
      options: ["Folding", "Volcanism", "Erosion", "Faulting"],
      answer: "2",
      explanation:
        "Erosion is an EXTERNAL force. The others are internal.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "easy",
      stem: "Which force causes a REVERSE fault?",
      options: ["Tension", "Compression", "Volcanism", "Weathering"],
      answer: "1",
      explanation:
        "Compression (pushing together) causes reverse faults. Tension (pulling apart) causes normal faults.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country is NOT passed by the East African Rift Valley?",
      options: ["Ethiopia", "Kenya", "Nigeria", "Tanzania"],
      answer: "2",
      explanation:
        "Nigeria is in West Africa — the rift valley does NOT pass through it. It passes through Eritrea, Ethiopia, Kenya, Tanzania, DRC, Rwanda, and Burundi.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "easy",
      stem: "A crater lake is found in:",
      options: ["A rift valley", "A caldera", "A dyke", "A sill"],
      answer: "1",
      explanation:
        "A caldera (a very wide crater) can fill with water to form a crater lake.",
    },
    {
      id: "q57",
      type: "mcq",
      difficulty: "easy",
      stem: "Which Ethiopian volcano is ACTIVE?",
      options: ["Mt Ras Dejen", "Mt Zuquala", "Erta'li", "Mt Batu"],
      answer: "2",
      explanation:
        "Erta'li is active. Mt Ras Dejen, Mt Zuquala, and Mt Batu are extinct.",
    },
    {
      id: "q58",
      type: "mcq",
      difficulty: "easy",
      stem: "Which instrument is used to measure air pressure?",
      options: ["Thermometer", "Barometer", "Anemometer", "Raingauge"],
      answer: "1",
      explanation:
        "Barometer measures air pressure. Thermometer measures temperature. Anemometer measures wind speed. Raingauge measures rainfall.",
    },
    {
      id: "q59",
      type: "mcq",
      difficulty: "easy",
      stem: "Wind blows from:",
      options: ["Low pressure to high pressure", "High pressure to low pressure", "Hot to cold", "Cold to hot"],
      answer: "1",
      explanation:
        "Wind blows from HIGH pressure areas to LOW pressure areas. Banchi, memorize this direction.",
    },
    {
      id: "q60",
      type: "mcq",
      difficulty: "easy",
      stem: "The instrument used to measure wind speed is:",
      options: ["Barometer", "Wind vane", "Anemometer", "Raingauge"],
      answer: "2",
      explanation:
        "Anemometer = wind SPEED. Wind vane = wind DIRECTION.",
    },
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "The instrument used to measure wind DIRECTION is:",
      options: ["Anemometer", "Wind vane", "Barometer", "Thermometer"],
      answer: "1",
      explanation:
        "Wind vane = direction. Anemometer = speed. Do not confuse.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Rainfall is measured with a:",
      options: ["Barometer", "Thermometer", "Raingauge", "Seismometer"],
      answer: "2",
      explanation:
        "Raingauge measures rainfall (mm). Barometer = pressure. Thermometer = temperature.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Temperature is measured with a:",
      options: ["Thermometer", "Barometer", "Raingauge", "Anemometer"],
      answer: "0",
      explanation:
        "Thermometer measures temperature.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "The process by which liquid water becomes water vapour is:",
      options: ["Condensation", "Evaporation", "Sublimation", "Deposition"],
      answer: "1",
      explanation:
        "Evaporation = liquid → gas. Condensation = gas → liquid. Sublimation = solid → gas. Deposition = gas → solid.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "The process by which water vapour becomes liquid water is:",
      options: ["Evaporation", "Condensation", "Sublimation", "Transpiration"],
      answer: "1",
      explanation:
        "Condensation = gas → liquid. It's the opposite of evaporation.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "The process in which ice changes DIRECTLY into water vapour is:",
      options: ["Evaporation", "Condensation", "Sublimation", "Deposition"],
      answer: "2",
      explanation:
        "Sublimation = solid (ice) → gas (vapour), skipping the liquid stage.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "The combined loss of water through evaporation and transpiration is:",
      options: ["Condensation", "Evapotranspiration", "Precipitation", "Sublimation"],
      answer: "1",
      explanation:
        "Evapotranspiration = evaporation + transpiration combined.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "Which type of rainfall occurs when moist air is forced to rise over mountains?",
      options: ["Convectional", "Frontal", "Relief (orographic)", "Cyclonic"],
      answer: "2",
      explanation:
        "Relief (orographic) rainfall = caused by mountains forcing air up. Convectional = from heating. Frontal = from two air masses meeting.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Which type of rainfall is common in humid areas where temperature is high throughout the year?",
      options: ["Relief", "Convectional", "Frontal", "Cyclonic"],
      answer: "1",
      explanation:
        "Convectional rainfall = from intense sun heating the surface, common in humid, hot areas.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Frontal (cyclonic) rainfall occurs when:",
      options: [
        "Mountains force air up",
        "Sun heats the surface",
        "Two air masses meet (warm and cold)",
        "Wind blows over the ocean",
      ],
      answer: "2",
      explanation:
        "Frontal rainfall = when warm and cold air masses meet. Common in middle and high latitudes.",
    },

    // ---------- MEDIUM MCQ (Q71–Q100) ----------
    {
      id: "q71",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following correctly describes the order of atmospheric layers from bottom to top?",
      options: [
        "Troposphere → Stratosphere → Mesosphere → Thermosphere",
        "Stratosphere → Troposphere → Mesosphere → Thermosphere",
        "Thermosphere → Mesosphere → Stratosphere → Troposphere",
        "Troposphere → Mesosphere → Stratosphere → Thermosphere",
      ],
      answer: "0",
      explanation:
        "Correct order from surface up: Troposphere → Stratosphere → Mesosphere → Thermosphere. Memory trick: 'TROPical STRATosphere MESOsphere THERMOsphere' — TSMT.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "medium",
      stem: "Which gas is the MOST important for living things to exist?",
      options: ["Nitrogen", "Oxygen", "Argon", "CO₂"],
      answer: "1",
      explanation:
        "Oxygen is the most important for living things. Nitrogen is more abundant, but living things need oxygen.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "medium",
      stem: "Which layer contains the ozone and shields us from UV radiation?",
      options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      answer: "1",
      explanation:
        "Stratosphere contains the ozone layer. It absorbs harmful UV radiation.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "medium",
      stem: "Most meteors burn up in which layer?",
      options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      answer: "2",
      explanation:
        "Meteors burn and disintegrate in the MESOSPHERE due to friction with air particles.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "medium",
      stem: "Which layer reflects radio waves and helps communication?",
      options: ["Troposphere", "Stratosphere", "Ionosphere (part of thermosphere)", "Mesosphere"],
      answer: "2",
      explanation:
        "The ionosphere (part of thermosphere) has electrically charged particles that reflect radio waves.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "medium",
      stem: "Which layer is the COLDEST?",
      options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
      answer: "2",
      explanation:
        "Mesosphere is the coldest, reaching −100°C at the top.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "medium",
      stem: "Which layer has a DIRECT relationship between temperature and altitude (temperature rises with altitude)?",
      options: ["Troposphere", "Stratosphere only", "Mesosphere only", "Thermosphere and lower stratosphere"],
      answer: "3",
      explanation:
        "Temperature rises with altitude in the thermosphere (very hot) and in the upper stratosphere (due to ozone absorption). The troposphere and mesosphere cool with altitude.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "medium",
      stem: "The layer where all weather changes happen is:",
      options: ["Stratosphere", "Troposphere", "Mesosphere", "Thermosphere"],
      answer: "1",
      explanation:
        "Troposphere = all weather happens here (clouds, rain, snow, wind). It contains 75% of the atmosphere's mass.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "medium",
      stem: "Which weather element is measured in millibars?",
      options: ["Temperature", "Rainfall", "Air pressure", "Wind speed"],
      answer: "2",
      explanation:
        "Air pressure is measured in millibars (mb). Standard pressure at sea level = 1,013 mb.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "medium",
      stem: "Air pressure at sea level is approximately:",
      options: ["760 mb", "1,013 mb", "1,500 mb", "500 mb"],
      answer: "1",
      explanation:
        "Sea level pressure = 1,013 millibars (or 760 mm of mercury). Banchi, memorize this value.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "medium",
      stem: "Air pressure DECREASES with:",
      options: [
        "Increase in altitude",
        "Decrease in altitude",
        "Increase in temperature",
        "Both A and C",
      ],
      answer: "3",
      explanation:
        "Air pressure decreases with increasing altitude AND decreasing temperature. Wait — re-check: pressure decreases with INCREASING altitude and INCREASING temperature. So A and C are correct.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "medium",
      stem: "Which one is a seasonal change caused by the apparent movement of the sun?",
      options: ["Hourly temperature change", "Diurnal range", "Annual temperature range", "Wind direction change"],
      answer: "2",
      explanation:
        "Annual (seasonal) temperature range reflects the apparent movement of the sun across the sky through the year.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "medium",
      stem: "The difference between the maximum and minimum temperatures in a single day is called:",
      options: ["Annual range", "Monthly range", "Diurnal range", "Mean temperature"],
      answer: "2",
      explanation:
        "Diurnal (daily) range = difference between max and min temperature in one day.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "medium",
      stem: "Daily average temperature is calculated as:",
      options: [
        "Maximum temperature only",
        "Minimum temperature only",
        "(Maximum + Minimum) ÷ 2",
        "Maximum × Minimum",
      ],
      answer: "2",
      explanation:
        "Daily average = (max + min) ÷ 2.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "medium",
      stem: "Which Ethiopian season has clear skies and high diurnal temperature range?",
      options: ["Kiremt (summer rains)", "Bega (dry)", "Belg (spring)", "Tsedey (autumn)"],
      answer: "1",
      explanation:
        "Bega is the dry season. Clear skies during the day (heat) and at night (rapid cooling) create a HIGH diurnal range.",
    },
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Ethiopia's summer rains fall mainly in:",
      options: ["Lowlands", "Highlands", "Deserts", "Coastal areas"],
      answer: "1",
      explanation:
        "Ethiopia's summer (Kiremt) rains fall mainly in the HIGHLANDS. The lowlands do not get summer rains.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Which part of Ethiopia receives all-year rainfall?",
      options: ["Southern lowlands", "Western part", "North-eastern fringes", "Central highlands"],
      answer: "1",
      explanation:
        "The WESTERN part of Ethiopia gets rainfall all year round.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "In which season do Ethiopia's southern and southeastern lowlands get 'little rains'?",
      options: ["Summer", "Winter", "Autumn and spring", "Bega"],
      answer: "2",
      explanation:
        "The 'little rains' (Belg) come in autumn and spring. They benefit southern and southeastern lowlands.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "The zone with moderate climate in Ethiopia is:",
      options: ["Bereha", "Qolla", "Woina Dega", "Wurch"],
      answer: "2",
      explanation:
        "Woina Dega = moderate climate, 1,500–2,300 m, 15–20°C.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "The zone with the HIGHEST altitude in Ethiopia is:",
      options: ["Dega", "Woina Dega", "Wurch", "Qolla"],
      answer: "2",
      explanation:
        "Wurch (also called Kur) is the highest zone, above 3,300 m.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Qolla zone altitude range is:",
      options: ["Below 500 m", "500–1,500 m", "1,500–2,300 m", "2,300–3,300 m"],
      answer: "1",
      explanation:
        "Qolla = 500–1,500 m. Bereha = below 500 m. Woina Dega = 1,500–2,300 m. Dega = 2,300–3,300 m.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Dega zone mean annual temperature is:",
      options: ["Below 10°C", "10–15°C", "15–20°C", "20–30°C"],
      answer: "1",
      explanation:
        "Dega = 2,300–3,300 m, temperature 10–15°C.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "Which word means 'the moment the center of the sun is directly above the equator'?",
      options: ["Solstice", "Equinox", "Precipitation", "Insolation"],
      answer: "1",
      explanation:
        "Equinox = sun directly above the equator. Occurs March 21 and September 23. Solstice = sun at greatest distance from equator.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "The sun is directly above the Tropic of Cancer on:",
      options: ["March 21", "June 21", "September 23", "December 21"],
      answer: "1",
      explanation:
        "June 21 = sun above Tropic of Cancer (June solstice). December 21 = Tropic of Capricorn. March 21 and Sept 23 = equator.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "The sun is directly above the Tropic of Capricorn on:",
      options: ["March 21", "June 21", "September 23", "December 21"],
      answer: "3",
      explanation:
        "December 21 = December solstice, sun above Tropic of Capricorn.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Heat transfer in the atmosphere happens by:",
      options: ["Radiation, conduction, convection", "Only radiation", "Only conduction", "Only convection"],
      answer: "0",
      explanation:
        "Three ways: radiation (electromagnetic waves), conduction (molecular contact), convection (density differences).",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "Which heat transfer method is most important in solids?",
      options: ["Radiation", "Conduction", "Convection", "Sublimation"],
      answer: "1",
      explanation:
        "Conduction = transfer of heat through molecular contact, most important in solids. Air and water are poor conductors.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "Which heat transfer method works through gases and liquids due to density differences?",
      options: ["Radiation", "Conduction", "Convection", "Evaporation"],
      answer: "2",
      explanation:
        "Convection = heat moves through gases or liquids because of density differences.",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "The sun warms the Earth by which method?",
      options: ["Conduction", "Convection", "Radiation", "Evaporation"],
      answer: "2",
      explanation:
        "Radiation = energy transfer via electromagnetic waves. The sun's energy reaches Earth through space via radiation.",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which country's coastal areas are cooler and wetter than inland areas?",
      options: ["Any inland country", "Countries near the sea", "Desert countries", "Mountain countries"],
      answer: "1",
      explanation:
        "Coastal areas (near the sea) are cooler and wetter than inland. Distance from sea is a control of climate.",
    },

    // ---------- HARD MCQ (Q101–Q110) ----------
    {
      id: "q101",
      type: "mcq",
      difficulty: "hard",
      stem: "Which of the following is an effect of an earthquake?",
      options: [
        "Rise or fall of the sea floor",
        "Formation of new stars",
        "Increase in oxygen",
        "Formation of diamonds",
      ],
      answer: "0",
      explanation:
        "Earthquakes can raise or lower the sea floor. Other effects: loss of life, destruction of property, landslides, fires, disease.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about the Ring of Fire is FALSE?",
      options: [
        "It surrounds the Pacific Ocean",
        "75% of the world's volcanoes are there",
        "90% of the world's earthquakes occur there",
        "It surrounds the Atlantic Ocean",
      ],
      answer: "3",
      explanation:
        "The Ring of Fire surrounds the PACIFIC Ocean, not the Atlantic.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "hard",
      stem: "The Richter scale value of 7–8 indicates:",
      options: ["Minor earthquake", "Moderate earthquake", "Major earthquake", "No earthquake"],
      answer: "2",
      explanation:
        "Richter scale: 0–5 = minor/light; 5–7 = moderate to strong; 7–8 = major; above 8 = great.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "hard",
      stem: "Which is a POSITIVE effect of volcanic eruption?",
      options: [
        "Provides fertile soil for farming",
        "Destroys cities",
        "Releases toxic gases",
        "Causes mudslides",
      ],
      answer: "0",
      explanation:
        "Volcanic ash provides fertile soil. Other positives: hot water for bathing, geothermal energy, tourism, minerals, hard rocks for building.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "hard",
      stem: "Which is a NEGATIVE effect of volcanic eruption?",
      options: [
        "Provides geothermal energy",
        "Creates dramatic scenery",
        "Releases toxic gases and ash",
        "Forms fertile soils",
      ],
      answer: "2",
      explanation:
        "Volcanoes emit hot dangerous gases, ash, lava, and rock. These can cause floods, mudslides, drinking water contamination, and health problems.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "hard",
      stem: "A lake formed in a caldera is called:",
      options: ["Rift lake", "Crater lake", "Oxbow lake", "Glacial lake"],
      answer: "1",
      explanation:
        "Crater lake = lake formed inside a crater or caldera. Mt Zuquala in Ethiopia has one.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "hard",
      stem: "Which of the following correctly describes the shape of a laccolith?",
      options: ["Vertical", "Horizontal", "Mushroom-shaped", "Spherical"],
      answer: "2",
      explanation:
        "Laccolith = mushroom-shaped intrusive rock body, smaller than a batholith.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "hard",
      stem: "In the stratosphere, temperature:",
      options: ["Decreases with altitude", "Increases with altitude", "Stays the same", "Fluctuates randomly"],
      answer: "1",
      explanation:
        "In the stratosphere, temperature INCREASES with altitude because the ozone layer absorbs UV radiation. This is OPPOSITE to the troposphere.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "hard",
      stem: "In the mesosphere, temperature:",
      options: ["Increases with altitude", "Decreases with altitude", "Stays the same", "Fluctuates"],
      answer: "1",
      explanation:
        "In the mesosphere, temperature DECREASES with altitude, reaching about −100°C at the top.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "hard",
      stem: "The earth's atmosphere extends outward for approximately:",
      options: ["100 km", "500 km", "1,000 km", "Several thousand kilometers"],
      answer: "3",
      explanation:
        "The atmosphere extends outward several thousand kilometers, gradually fading into the vacuum of space.",
    },

    // ---------- SHORT ANSWER (Q111–Q120) ----------
    {
      id: "q111",
      type: "short",
      difficulty: "easy",
      stem: "Define a fault.",
      answer:
        "A fault is a crack in the Earth's crust caused by tensional or compressional forces.",
      explanation:
        "Normal fault = tension (pulling). Reverse fault = compression (pushing).",
    },
    {
      id: "q112",
      type: "short",
      difficulty: "easy",
      stem: "Name the four main gases that make up the atmosphere.",
      answer: "Nitrogen (78%), Oxygen (21%), Argon (~0.9%), Carbon dioxide (~0.04%).",
      explanation:
        "Nitrogen and oxygen are the major gases. Argon and CO₂ are minor. Others are trace gases.",
    },
    {
      id: "q113",
      type: "short",
      difficulty: "medium",
      stem: "Differentiate between weather and climate.",
      answer:
        "Weather is the condition of the atmosphere over a SHORT time (hours, days). Climate is the AVERAGE weather over a LONG period (30 years or more).",
      explanation:
        "Memory: 'Weather is what you wear today. Climate is what you keep in your closet.'",
    },
    {
      id: "q114",
      type: "short",
      difficulty: "medium",
      stem: "List the five controls of weather and climate.",
      answer: "Latitude, altitude, distance from the sea, cloud cover, ocean currents.",
      explanation:
        "Additional controls sometimes listed: wind, air pressure.",
    },
    {
      id: "q115",
      type: "short",
      difficulty: "medium",
      stem: "What is the normal lapse rate?",
      answer:
        "The normal lapse rate is the rate at which air temperature decreases with altitude, approximately 6.4°C per 1,000 m.",
      explanation:
        "This rate applies in the troposphere. Temperatures get cooler as you climb higher.",
    },
    {
      id: "q116",
      type: "short",
      difficulty: "medium",
      stem: "Explain the three types of rainfall.",
      answer:
        "Relief (orographic) = moist air forced over mountains. Convectional = sun heats surface, air rises. Frontal (cyclonic) = warm and cold air masses meet.",
      explanation:
        "Banchi, remember: Relief = mountain. Convectional = heating. Frontal = collision.",
    },
    {
      id: "q117",
      type: "short",
      difficulty: "hard",
      stem: "Explain the difference between exfoliation and frost action.",
      answer:
        "Exfoliation = rocks peel off in layers due to repeated expansion (day) and contraction (night) from temperature changes. Frost action = water in cracks freezes, expands, and breaks rocks apart.",
      explanation:
        "Both are types of physical (mechanical) weathering.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "hard",
      stem: "Name the two largest fold mountain systems in the world and their locations.",
      answer:
        "The Himalayas (Asia) and the Andes (South America) are the two largest. Also major: Rockies (N. America), Alps (Europe), Atlas (N. Africa), Cape Ranges (S. Africa), Australian Alps (Australia).",
      explanation:
        "Banchi, memorize all 7 with their continents. This often appears as a matching question.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "hard",
      stem: "Describe the composition and structure of the atmosphere in your own words.",
      answer:
        "The atmosphere is a layer of gases surrounding Earth, made mostly of nitrogen (78%) and oxygen (21%) plus dust and water droplets. It has four temperature-based layers: troposphere (weather), stratosphere (ozone), mesosphere (coldest, meteors burn), thermosphere (ionosphere/exosphere, radio reflection).",
      explanation:
        "Key: state composition (gases) and structure (layers). Use clear, correct vocabulary.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Explain how volcanic activity can be both helpful and harmful to humans.",
      answer:
        "Helpful: fertile soils, hot water for bathing, geothermal energy, tourism, valuable minerals, hard rocks for building. Harmful: hot dangerous gases, ash, lava, wildfires, mudslides, water contamination, health problems, injuries, and destruction of property.",
      explanation:
        "Balanced answer: give at least two advantages and two disadvantages.",
    },
  ],
};