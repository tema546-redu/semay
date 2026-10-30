import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 GENERAL SCIENCE — UNIT 6
// THE SOLAR SYSTEM
// Source: AAEB Grade 8 General Science Student Textbook (pp. 164–186)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8ScienceCh6: Chapter = {
  id: "ch6",
  number: 6,
  title: "The Solar System",
  titleAm: "የፀሐይ ሥርዓት",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. Family of the Solar System — The Sun",
      titleAm: "የፀሐይ ሥርዓት ቤተሰብ — ፀሐይ",
      body:
        "Banchi, the solar system is the Sun and ALL celestial bodies that revolve around it: 8 planets with their moons, dwarf planets, asteroids, comets, and meteors.",
      bodyAm:
        "ባንቺ፣ የፀሐይ ሥርዓት ፀሐይ እና በዙሪያዋ የሚዞሩ ሁሉም ሰማያዊ አካላት ናቸው፡ 8 ፕላኔቶች ከጨረቃዎቻቸው ጋር፣ ድንክ ፕላኔቶች፣ አስትሮይዶች፣ ኮሜቶች እና ሜቲዮሮች።",
      children: [
        {
          id: "n1-1",
          title: "The Sun — key facts",
          titleAm: "ፀሐይ — ቁልፍ እውነታዎች",
          body:
            "• The Sun is a STAR — the closest star to Earth.\n" +
            "• Located at the very CENTER of the solar system.\n" +
            "• Made mostly of HYDROGEN (about 71%) and HELIUM (about 27%). Other gases (2%).\n" +
            "• Surface temperature: about 5,500°C.\n" +
            "• Center temperature: about 15,000,000°C (15 million).\n" +
            "• Makes up 98% of the total mass of the solar system.",
          bodyAm:
            "• ፀሐይ ኮከብ ናት — ለምድር በጣም ቅርብ የሆነች።\n• በሥርዓቱ መሃል ትገኛለች።\n• በዋናነት ሃይድሮጅን (71%) እና ሂሊየም (27%)።\n• የላይኛው ሙቀት፡ ~5,500°C።\n• የመሃል ሙቀት፡ ~15 ሚሊዮን °C።\n• 98% የሥርዓቱ ክብደት ፀሐይ ናት።",
        },
        {
          id: "n1-2",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: the Sun is a STAR, not a planet. It has NO moons. It is the LARGEST and most MASSIVE object in the solar system.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ፀሐይ ኮከብ ናት፣ ፕላኔት አይደለችም።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. The 8 Planets — In Order from the Sun",
      titleAm: "8ቱ ፕላኔቶች",
      body:
        "Banchi, planets revolve around the Sun in well-defined paths called ORBITS. In 2006, the International Astronomical Union (IAU) declared there are 8 planets. Memorize them IN ORDER: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune.",
      bodyAm:
        "ባንቺ፣ ፕላኔቶች ፀሐይን በሚባሉ ምህዋሮች ይዞራሉ። በ2006 IAU 8 ፕላኔቶች እንዳሉ አወጀ። በቅደም ተከተል አስታውሺ፡ ሜርኩሪ፣ ቪነስ፣ ምድር፣ ማርስ፣ ጁፒተር፣ ሳተርን፣ ዩራነስ፣ ኔፕቲዩን።",
      children: [
        {
          id: "n2-1",
          title: "The 8 planets (must memorize)",
          titleAm: "8ቱ ፕላኔቶች",
          body:
            "1) MERCURY — closest to Sun, smallest planet, no moons\n" +
            "2) VENUS — hottest planet, no moon, rotates opposite to other planets\n" +
            "3) EARTH — our home, 1 moon\n" +
            "4) MARS — the RED planet, 2 moons\n" +
            "5) JUPITER — LARGEST planet, 79 moons, faint rings\n" +
            "6) SATURN — MOST moons (82), least dense, famous rings\n" +
            "7) URANUS — blue-green, tilted axis, 27 moons\n" +
            "8) NEPTUNE — farthest and coldest, 14 moons",
          bodyAm:
            "1) ሜርኩሪ — ለፀሐይ በጣም ቅርብ፣ ትንሹ፣ ጨረቃ የለውም።\n2) ቪነስ — በጣም ሞቃት፣ ጨረቃ የለውም።\n3) ምድር — የኛ ቤት፣ 1 ጨረቃ።\n4) ማርስ — ቀይ ፕላኔት፣ 2 ጨረቃዎች።\n5) ጁፒተር — ትልቁ፣ 79 ጨረቃዎች።\n6) ሳተርን — ብዙ ጨረቃዎች (82)፣ ቀላል ጥግግት።\n7) ዩራነስ — ሰማያዊ-አረንጓዴ፣ 27 ጨረቃዎች።\n8) ኔፕቲዩን — በጣም ሩቅና ቀዝቃዛ፣ 14 ጨረቃዎች።",
        },
        {
          id: "n2-2",
          title: "Terrestrial vs Jovian planets",
          titleAm: "ምድራዊ እና ጁቪያን ፕላኔቶች",
          body:
            "TERRESTRIAL (inner, rocky): Mercury, Venus, Earth, Mars.\n" +
            "• Low mass; Earth is heaviest of the four.\n" +
            "• HIGH densities (4000–5500 kg/m³).\n" +
            "• Rock + metallic core.\n" +
            "• Solid surface.\n\n" +
            "JOVIAN (outer, gas giants): Jupiter, Saturn, Uranus, Neptune.\n" +
            "• Large diameters (4–11× Earth).\n" +
            "• HIGH mass (14–318× Earth).\n" +
            "• LOW densities (700–1700 kg/m³).\n" +
            "• Mainly hydrogen + helium.\n" +
            "• NO solid surface.\n" +
            "• Many moons.",
          bodyAm:
            "ምድራዊ (ውስጣዊ፣ ሮኪ)፡ ሜርኩሪ፣ ቪነስ፣ ምድር፣ ማርስ።\n• ከፍተኛ ጥግግት (4000–5500 ኪ.ግ/ሜ³)።\n• ሮክ እና ብረታማ አስኳል።\nጁቪያን (ውጫዊ፣ ጋዛዊ)፡ ጁፒተር፣ ሳተርን፣ ዩራነስ፣ ኔፕቲዩን።\n• ትላልቅ፣ ከባድ ግን ዝቅተኛ ጥግግት (700–1700 ኪ.ግ/ሜ³)።\n• በዋናነት ሃይድሮጅን እና ሂሊየም።",
        },
        {
          id: "n2-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam traps:\n" +
            "• Mercury = CLOSEST and SMALLEST planet, NO moons.\n" +
            "• Venus = HOTTEST planet (thick CO₂ atmosphere traps heat).\n" +
            "• Jupiter = LARGEST planet.\n" +
            "• Saturn = MOST moons (82) AND least dense.\n" +
            "• Neptune = FARTHEST and COLDEST.\n" +
            "• Mars = RED planet, has 2 moons.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመዶች፡\n• ሜርኩሪ = በጣም ቅርብና ትንሹ፣ ጨረቃ የለውም።\n• ቪነስ = በጣም ሞቃት።\n• ጁፒተር = ትልቁ።\n• ሳተርን = ብዙ ጨረቃዎች (82) እና ቀላል ጥግግት።\n• ኔፕቲዩን = በጣም ሩቅና ቀዝቃዛ።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Other Members of the Solar System",
      titleAm: "ሌሎች የፀሐይ ሥርዓት አባላት",
      body:
        "Banchi, besides planets, the solar system has dwarf planets, asteroids, comets, meteors, and satellites.",
      bodyAm:
        "ባንቺ፣ ከፕላኔቶች በተጨማሪ ሥርዓቱ ድንክ ፕላኔቶች፣ አስትሮይዶች፣ ኮሜቶች፣ ሜቲዮሮች እና ሳተላይቶች አሉት።",
      children: [
        {
          id: "n3-1",
          title: "Dwarf planets — 5 recognized",
          titleAm: "ድንክ ፕላኔቶች",
          body:
            "Bodies too small to be full planets but too large to be other categories. The 5 recognized by IAU:\n" +
            "1) PLUTO\n" +
            "2) ERIS\n" +
            "3) CERES\n" +
            "4) HAUMEA\n" +
            "5) MAKEMAKE\n\n" +
            "Note: Pluto USED to be a planet, but was reclassified in 2006.",
          bodyAm:
            "በ IAU የታወቁ 5 ድንክ ፕላኔቶች፡ ፕሉቶ፣ ኤሪስ፣ ሴሬስ፣ ሃውሜያ፣ ማኬማኬ።\nፕሉቶ በ2006 ከፕላኔትነት ተወገደ።",
        },
        {
          id: "n3-2",
          title: "Asteroids",
          titleAm: "አስትሮይዶች",
          body:
            "• Large number of small objects that revolve around the Sun.\n" +
            "• Most are found in the ASTEROID BELT — between the orbits of MARS and JUPITER.\n" +
            "• Asteroids closer to the Sun are mostly METALLIC; those further away are ROCKY.\n" +
            "• Can only be seen with large telescopes.",
          bodyAm:
            "• በፀሐይ ዙሪያ የሚዞሩ ትንንሽ ነገሮች።\n• በዋናነት በአስትሮይድ ቀበቶ ውስጥ — በማርስና በጁፒተር መካከል።",
        },
        {
          id: "n3-3",
          title: "Comets",
          titleAm: "ኮሜቶች",
          body:
            "• Icy and dusty objects that revolve around the Sun in HIGHLY ELLIPTICAL orbits.\n" +
            "• Usually have a bright HEAD and a long TAIL.\n" +
            "• The TAIL always points AWAY from the Sun.\n" +
            "• Most famous: HALLEY'S COMET — appears every ~76 years. Last seen 1986, next predicted 2061.",
          bodyAm:
            "• በከፍተኛ ኤሊፕቲካል ምህዋር የሚዞሩ በረዶና አቧራ።\n• ደማቅ ጭንቅላትና ረጅም ጅራት አላቸው።\n• ጅራቱ ሁልጊዜ ከፀሐይ ይርቃል።\n• ሃሌይ ኮሜት በየ~76 ዓመቱ ይታያል።",
        },
        {
          id: "n3-4",
          title: "Meteors and Meteorites",
          titleAm: "ሜቲዮሮች እና ሜቲዮራይቶች",
          body:
            "• METEORS = 'shooting stars' — small objects that burn up when entering Earth's atmosphere (due to friction).\n" +
            "• METEORITES = meteors that DON'T fully burn up — parts that reach the Earth's surface.",
          bodyAm:
            "• ሜቲዮሮች = 'የሚንቀሳቀሱ ኮከቦች' — ወደ ምድር ከባቢ አየር ሲገቡ የሚቃጠሉ።\n• ሜቲዮራይቶች = ሙሉ በሙሉ ያልተቃጠሉና ወደ ምድር ገጽታ የደረሱ።",
        },
        {
          id: "n3-5",
          title: "Satellites",
          titleAm: "ሳተላይቶች",
          body:
            "• A satellite = a body that revolves around a planet.\n" +
            "• NATURAL satellite = Moon (Earth's only natural satellite).\n" +
            "• ARTIFICIAL satellites = man-made; used for weather forecasting, TV/radio signals, telecommunication, remote sensing.\n\n" +
            "Ethiopia's satellites:\n" +
            "1) ETRSS-1 (Ethiopian Remote Sensing Satellite 1) — launched Dec 20, 2019.\n" +
            "2) ET-SMART-RSS — launched Dec 22, 2020.",
          bodyAm:
            "• ሳተላይት = በፕላኔት ዙሪያ የሚዞር አካል።\n• ተፈጥሯዊ ሳተላይት = ጨረቃ።\n• ሰው ሠራሽ ሳተላይቶች — ለአየር ሁኔታ፣ ለቲቪ፣ ለቴሌኮሙኒኬሽን።\nየኢትዮጵያ ሳተላይቶች፡ ETRSS-1 (2019) እና ET-SMART-RSS (2020)።",
        },
        {
          id: "n3-6",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam traps:\n" +
            "• Asteroid belt = between MARS and JUPITER (not between Earth and Mars).\n" +
            "• COMET tail always points AWAY from Sun.\n" +
            "• METEOR = burns in the atmosphere. METEORITE = reaches the ground.\n" +
            "• Moon = natural satellite; ETRSS-1 = artificial satellite.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመዶች፡\n• የአስትሮይድ ቀበቶ = በማርስና በጁፒተር መካከል።\n• የኮሜት ጅራት ከፀሐይ ይርቃል።\n• ሜቲዮር = በከባቢ አየር ውስጥ ይቃጠላል። ሜቲዮራይት = ወደ መሬት ይደርሳል።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Formation of the Solar System",
      titleAm: "የፀሐይ ሥርዓት ምስረታ",
      body:
        "Banchi, scientists believe the solar system formed about 4.6 BILLION years ago from a cloud of dust and gas (mainly hydrogen and helium). This cloud was slowly rotating in space.",
      bodyAm:
        "ባንቺ፣ ሳይንቲስቶች ሥርዓቱ ከ4.6 ቢሊዮን ዓመታት በፊት ከአቧራና ጋዝ ደመና እንደተፈጠረ ያምናሉ።",
      children: [
        {
          id: "n4-1",
          title: "The formation process",
          titleAm: "የምስረታ ሂደት",
          body:
            "1) A cloud of dust and gas was rotating in space.\n" +
            "2) A nearby SUPERNOVA (star explosion) disturbed the cloud.\n" +
            "3) The cloud started CONTRACTING.\n" +
            "4) Density increased → gravity pulled more gas toward the center → cloud rotated faster.\n" +
            "5) This formed a SOLAR NEBULA — large cloud of gas and dust.\n" +
            "6) At the center, hydrogen gas contracted → formed the SUN (99.8% of total mass).\n" +
            "7) Leftover gas and dust stuck together (clumps) → formed planets, moons, and other bodies.",
          bodyAm:
            "1) የአቧራና ጋዝ ደመና በጠፈር ይሽከረከር ነበር።\n2) በአጠገብ የነበረ ሱፐርኖቫ ደመናውን አናወጠ።\n3) ደመናው መጨንቀቅ ጀመረ።\n4) ጥግግት ጨመረ → ስበት ጋዝ ወደ መሃል ጎተተ።\n5) የፀሐይ ኔቡላ ተፈጠረ።\n6) በመሃል ላይ ሃይድሮጅን ተጨንቆ ፀሐይ ሆነ።\n7) የተረፈው ጋዝና አቧራ ተሰባስቦ ፕላኔቶችን ፈጠረ።",
        },
        {
          id: "n4-2",
          title: "Why inner planets are rocky, outer planets are gas",
          titleAm: "ውስጣዊ ፕላኔቶች ሮኪ ለምን ሆኑ",
          body:
            "• Near the Sun, the temperature was HOT. Easily vaporized elements (like hydrogen and helium) could NOT condense into solids.\n" +
            "• So the inner planets formed from ROCKS and have IRON cores.\n" +
            "• Farther from the Sun, it was COOLER. Lighter gases (H, He) could stay and form GAS GIANTS.",
          bodyAm:
            "• ፀሐይ አጠገብ ሙቀቱ ከፍተኛ ነበር። ሃይድሮጅን እና ሂሊየም ጠጣር መሆን አልቻሉም።\n• ስለዚህ ውስጣዊ ፕላኔቶች ከሮክ እና ከብረት ተሠሩ።\n• ከፀሐይ ርቀው ቀዝቃዛ ነበር። ቀላል ጋዞች ወደ ጋዛዊ ግዙፎች ተለወጡ።",
        },
        {
          id: "n4-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: the Sun contains about 99.8% of the total mass of the solar system — not 50%, not 90%. And the solar system is 4.6 billion years old.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ፀሐይ 99.8% የሥርዓቱን ክብደት ትይዛለች። ሥርዓቱ 4.6 ቢሊዮን ዓመት ነው።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Earth in Comparison with the Solar System",
      titleAm: "ምድር ከሥርዓቱ ጋር",
      body:
        "Banchi, Earth is the THIRD planet from the Sun, and the ONLY planet known to support life. Diameter: about 12,750 km. Earth is the 5th largest planet.",
      bodyAm:
        "ባንቺ፣ ምድር ከፀሐይ ሦስተኛዋ ፕላኔት ናት፣ እና ሕይወት ያለባት ብቸኛዋ ፕላኔት ነች። ዲያሜትር ~12,750 ኪ.ሜ ነው።",
      children: [
        {
          id: "n5-1",
          title: "Distances of planets from Sun (in million km)",
          titleAm: "ርቀቶች (በሚሊዮን ኪ.ሜ)",
          body:
            "Mercury — 57.9\n" +
            "Venus — 108.2\n" +
            "Earth — 149.6\n" +
            "Mars — 227.9\n" +
            "Jupiter — 778.3\n" +
            "Saturn — 1,432\n" +
            "Uranus — 2,871\n" +
            "Neptune — 4,498\n\n" +
            "Banchi, notice how quickly the distances grow.",
          bodyAm:
            "ሜርኩሪ 57.9፣ ቪነስ 108.2፣ ምድር 149.6፣ ማርስ 227.9፣ ጁፒተር 778.3፣ ሳተርን 1,432፣ ዩራነስ 2,871፣ ኔፕቲዩን 4,498 (ሚሊዮን ኪ.ሜ)።",
        },
        {
          id: "n5-2",
          title: "Planet sizes (diameters in km)",
          titleAm: "የፕላኔቶች መጠኖች",
          body:
            "Smallest to largest:\n" +
            "Mercury — 4,880 km\n" +
            "Mars — 6,794 km\n" +
            "Venus — 12,104 km\n" +
            "Earth — 12,750 km\n" +
            "Neptune — 49,528 km\n" +
            "Uranus — 51,118 km\n" +
            "Saturn — 120,536 km\n" +
            "Jupiter — 142,984 km",
          bodyAm:
            "ከትንሽ ወደ ትልቅ፡ ሜርኩሪ (4,880)፣ ማርስ (6,794)፣ ቪነስ (12,104)፣ ምድር (12,750)፣ ኔፕቲዩን (49,528)፣ ዩራነስ (51,118)፣ ሳተርን (120,536)፣ ጁፒተር (142,984) ኪ.ሜ።",
        },
        {
          id: "n5-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam traps:\n" +
            "• Earth is 3rd from the Sun, 5th in size.\n" +
            "• Mars is slightly SMALLER than Venus.\n" +
            "• Jupiter is the LARGEST (142,984 km), Mercury is the SMALLEST (4,880 km).",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመዶች፡\n• ምድር ከፀሐይ 3ኛ፣ በመጠን 5ኛ ናት።\n• ማርስ ከቪነስ ትንሽ ናት።\n• ጁፒተር ትልቁ፣ ሜርኩሪ ትንሹ።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Our Planet's Suitability for Life (Uniqueness)",
      titleAm: "ምድር ለሕይወት ተስማሚ የሆነችበት ምክንያት",
      body:
        "Banchi, Earth is the ONLY planet known to support life. There are many factors that make Earth suitable for life.",
      bodyAm:
        "ባንቺ፣ ምድር ሕይወት ያለባት ብቸኛዋ ፕላኔት ነች። ለሕይወት ተስማሚ የሚያደርጉ ብዙ ምክንያቶች አሉ።",
      children: [
        {
          id: "n6-1",
          title: "The factors (memorize these 8)",
          titleAm: "8ቱ ምክንያቶች",
          body:
            "1) RIGHT amount of LIQUID WATER (71% of surface is water).\n" +
            "2) RIGHT DISTANCE from the Sun — not too hot, not too cold.\n" +
            "3) RIGHT TEMPERATURE (average 15°C).\n" +
            "4) RIGHT MOON — creates seasons by tilting Earth. Without it, days would be ~4 hours.\n" +
            "5) RIGHT SUN — stable, long-lasting.\n" +
            "6) RIGHT CORE — magnetic field deflects solar wind.\n" +
            "7) JUPITER'S protection — Jupiter's gravity pulls asteroids away from Earth.\n" +
            "8) RIGHT ATMOSPHERE — oxygen, nitrogen, CO₂ + OZONE layer blocking UV.",
          bodyAm:
            "1) ትክክለኛ የውሃ መጠን (71% ውሃ)።\n2) ትክክለኛ ርቀት ከፀሐይ።\n3) ትክክለኛ ሙቀት (በአማካይ 15°C)።\n4) ትክክለኛ ጨረቃ — ወቅቶችን ይፈጥራል።\n5) ትክክለኛ ፀሐይ — የተረጋጋ።\n6) ትክክለኛ አስኳል — መግነጢሳዊ መስክ።\n7) የጁፒተር መከላከያ።\n8) ትክክለኛ ከባቢ አየር ከኦዞን ንጣፍ ጋር።",
        },
        {
          id: "n6-2",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: The unique characteristics of Earth are the RIGHT DISTANCE from Sun, the RIGHT temperature, the presence of water, a suitable atmosphere, and an ozone layer. Earth's average temperature is 15°C, NOT 25°C.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ የምድር አማካይ ሙቀት 15°C ነው።",
        },
      ],
    },

    {
      id: "n7",
      title: "7. Exam Strategy — Unit 6",
      titleAm: "የፈተና ስልት — ክፍል 6",
      body:
        "Banchi, five quick checks before answering Unit 6 questions.",
      bodyAm:
        "ባንቺ፣ የክፍል 6 ጥያቄዎችን ከመመለስሽ በፊት አምስት ፈጣን ቼኮች።",
      children: [
        {
          id: "n7-1",
          title: "Check 1 — Which planet is which?",
          titleAm: "ቼክ 1 — የትኛው ፕላኔት?",
          body:
            "Mercury = closest, smallest. Venus = hottest. Earth = our home. Mars = red. Jupiter = largest. Saturn = most moons. Uranus = tilted. Neptune = farthest, coldest.",
          bodyAm:
            "ሜርኩሪ = ቅርብ/ትንሽ. ቪነስ = ሞቃት. ምድር = ቤታችን. ማርስ = ቀይ. ጁፒተር = ትልቅ. ሳተርን = ብዙ ጨረቃ. ዩራነስ = ዘንበል. ኔፕቲዩን = ሩቅ/ቀዝቃዛ.",
        },
        {
          id: "n7-2",
          title: "Check 2 — Inner or outer?",
          titleAm: "ቼክ 2 — ውስጣዊ ወይስ ውጫዊ?",
          body:
            "Inner (rocky) = Mercury, Venus, Earth, Mars. Outer (gas giants) = Jupiter, Saturn, Uranus, Neptune.",
          bodyAm:
            "ውስጣዊ (ሮኪ) = ሜርኩሪ፣ ቪነስ፣ ምድር፣ ማርስ. ውጫዊ = ጁፒተር፣ ሳተርን፣ ዩራነስ፣ ኔፕቲዩን.",
        },
        {
          id: "n7-3",
          title: "Check 3 — Meteor or meteorite?",
          titleAm: "ቼክ 3 — ሜቲዮር ወይስ ሜቲዮራይት?",
          body:
            "Burns in atmosphere = meteor. Reaches ground = meteorite.",
          bodyAm:
            "በከባቢ አየር የሚቃጠል = ሜቲዮር. ወደ መሬት የሚደርስ = ሜቲዮራይት.",
        },
        {
          id: "n7-4",
          title: "Check 4 — Which satellite?",
          titleAm: "ቼክ 4 — የትኛው ሳተላይት?",
          body:
            "Moon = natural. ETRSS-1, ET-SMART-RSS = Ethiopian artificial satellites.",
          bodyAm:
            "ጨረቃ = ተፈጥሯዊ. ETRSS-1, ET-SMART-RSS = የኢትዮጵያ ሰው ሠራሽ.",
        },
        {
          id: "n7-5",
          title: "Check 5 — Why is Earth suitable for life?",
          titleAm: "ቼክ 5 — ምድር ለሕይወት ተስማሚ የሆነችበት ምክንያት?",
          body:
            "Right distance from Sun, right temperature, water, atmosphere with ozone, right moon and Sun.",
          bodyAm:
            "ትክክለኛ ርቀት፣ ትክክለኛ ሙቀት፣ ውሃ፣ ትክክለኛ ከባቢ አየር፣ ትክክለኛ ጨረቃና ፀሐይ.",
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
      stem: "What is the solar system?",
      options: [
        "Only the Sun",
        "The Sun and all celestial bodies that revolve around it",
        "Only the planets",
        "The Moon and the stars",
      ],
      answer: "1",
      explanation:
        "The solar system = the Sun + all celestial bodies that revolve around it (planets, moons, asteroids, comets, meteors).",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "How many planets are in the solar system?",
      options: ["7", "8", "9", "10"],
      answer: "1",
      explanation:
        "In 2006, the IAU declared there are 8 planets. Pluto was reclassified as a dwarf planet.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet is CLOSEST to the Sun?",
      options: ["Venus", "Mercury", "Earth", "Mars"],
      answer: "1",
      explanation:
        "MERCURY is the closest planet to the Sun — 57.9 million km away.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet is the SMALLEST in the solar system?",
      options: ["Venus", "Mars", "Mercury", "Neptune"],
      answer: "2",
      explanation:
        "MERCURY is the smallest planet — 4,880 km in diameter.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet is the LARGEST in the solar system?",
      options: ["Saturn", "Neptune", "Uranus", "Jupiter"],
      answer: "3",
      explanation:
        "JUPITER is the largest planet — 142,984 km in diameter.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet is known as the RED planet?",
      options: ["Venus", "Mars", "Jupiter", "Mercury"],
      answer: "1",
      explanation:
        "MARS is called the RED planet because of its reddish color.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet is the HOTTEST?",
      options: ["Mercury", "Venus", "Mars", "Jupiter"],
      answer: "1",
      explanation:
        "VENUS is the hottest planet (about 464°C) because of its thick CO₂ atmosphere that traps heat.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet is FARTHEST from the Sun?",
      options: ["Uranus", "Saturn", "Neptune", "Pluto"],
      answer: "2",
      explanation:
        "NEPTUNE is the farthest planet — 4,498 million km from the Sun.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet is the COLDEST?",
      options: ["Neptune", "Uranus", "Saturn", "Jupiter"],
      answer: "0",
      explanation:
        "NEPTUNE is the coldest planet (about -200°C) because it's the farthest from the Sun.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet has the MOST moons?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "1",
      explanation:
        "SATURN has 82 moons — the most in the solar system. Jupiter has 79.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "How many moons does Earth have?",
      options: ["0", "1", "2", "3"],
      answer: "1",
      explanation:
        "Earth has exactly ONE natural satellite — the Moon.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "How many moons does Mercury have?",
      options: ["0", "1", "2", "3"],
      answer: "0",
      explanation:
        "Mercury has NO moons.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "How many moons does Venus have?",
      options: ["0", "1", "2", "3"],
      answer: "0",
      explanation:
        "Venus has NO moons.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "How many moons does Mars have?",
      options: ["0", "1", "2", "3"],
      answer: "2",
      explanation:
        "Mars has 2 moons.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "The Sun is a:",
      options: ["Planet", "Star", "Moon", "Comet"],
      answer: "1",
      explanation:
        "The Sun is a STAR — the closest star to Earth.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "The Sun is made mostly of:",
      options: ["Oxygen and nitrogen", "Hydrogen and helium", "Carbon and iron", "Water and dust"],
      answer: "1",
      explanation:
        "The Sun is about 71% hydrogen and 27% helium.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "What percent of the solar system's mass is the Sun?",
      options: ["About 50%", "About 75%", "About 98%", "About 100%"],
      answer: "2",
      explanation:
        "The Sun makes up about 98% of the total mass of the solar system.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planets are the INNER (terrestrial) planets?",
      options: [
        "Jupiter, Saturn, Uranus, Neptune",
        "Mercury, Venus, Earth, Mars",
        "Earth, Mars, Jupiter, Saturn",
        "Venus, Earth, Mars, Jupiter",
      ],
      answer: "1",
      explanation:
        "Inner (terrestrial, rocky) planets: MERCURY, VENUS, EARTH, MARS.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planets are the OUTER (Jovian) planets?",
      options: [
        "Mercury, Venus, Earth, Mars",
        "Jupiter, Saturn, Uranus, Neptune",
        "Earth, Mars, Jupiter, Saturn",
        "Venus, Jupiter, Saturn, Uranus",
      ],
      answer: "1",
      explanation:
        "Outer (Jovian, gas giant) planets: JUPITER, SATURN, URANUS, NEPTUNE.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "The asteroid belt is found between the orbits of:",
      options: ["Earth and Mars", "Mars and Jupiter", "Jupiter and Saturn", "Venus and Earth"],
      answer: "1",
      explanation:
        "The asteroid belt lies between MARS and JUPITER.",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "A comet's tail always points:",
      options: ["Toward the Sun", "Away from the Sun", "Upward", "Downward"],
      answer: "1",
      explanation:
        "A comet's tail always points AWAY from the Sun.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "What is a meteor?",
      options: [
        "A small object that burns up in the atmosphere",
        "A comet",
        "A moon",
        "A planet",
      ],
      answer: "0",
      explanation:
        "A METEOR is a small object that burns up when it enters Earth's atmosphere — a 'shooting star'.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "What is a meteorite?",
      options: [
        "A meteor that burns up completely",
        "The part of a meteor that reaches Earth's surface",
        "A small moon",
        "A type of star",
      ],
      answer: "1",
      explanation:
        "A METEORITE is the part of a meteor that DOESN'T burn up and reaches Earth's surface.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "A body that revolves around a planet is called:",
      options: ["A comet", "A satellite", "A star", "An asteroid"],
      answer: "1",
      explanation:
        "A SATELLITE revolves around a planet. The Moon is Earth's natural satellite.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet has a highly tilted axis?",
      options: ["Mercury", "Venus", "Uranus", "Neptune"],
      answer: "2",
      explanation:
        "URANUS has a highly tilted rotational axis — it seems to 'roll' on its side.",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the difference between inner and outer planets?",
      options: [
        "Inner planets are rocky with high density; outer are gas giants with low density",
        "Inner planets are gas giants; outer are rocky",
        "Both are rocky",
        "Both are gas giants",
      ],
      answer: "0",
      explanation:
        "Inner (terrestrial) planets are ROCKY with HIGH densities. Outer (Jovian) planets are GAS GIANTS with LOW densities.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about Venus's rotation?",
      options: [
        "It rotates the same as all other planets",
        "It rotates in the OPPOSITE direction to all other planets",
        "It does not rotate",
        "It rotates faster than all planets",
      ],
      answer: "1",
      explanation:
        "Venus rotates in the OPPOSITE direction (east to west) compared to most other planets.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Which planet has the LEAST density?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "1",
      explanation:
        "SATURN has the least density — less than water! It would float if there were a large enough ocean.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Which planet is famous for its prominent rings?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "1",
      explanation:
        "SATURN is famous for its prominent rings. (Jupiter, Uranus, and Neptune have faint rings too.)",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes a dwarf planet?",
      options: [
        "A large planet with many moons",
        "A body too small to be a full planet but too large for other categories",
        "A moon",
        "A comet",
      ],
      answer: "1",
      explanation:
        "A DWARF planet is too small to be a full planet but too large to be classified as an asteroid or other small body.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a recognized dwarf planet?",
      options: ["Mars", "Pluto", "Jupiter", "Moon"],
      answer: "1",
      explanation:
        "PLUTO is one of the 5 recognized dwarf planets (along with Eris, Ceres, Haumea, Makemake).",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "How many dwarf planets has the IAU recognized?",
      options: ["1", "3", "5", "9"],
      answer: "2",
      explanation:
        "The IAU has recognized 5 dwarf planets: Pluto, Eris, Ceres, Haumea, Makemake.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "Halley's Comet appears about every:",
      options: ["10 years", "50 years", "76 years", "150 years"],
      answer: "2",
      explanation:
        "Halley's Comet appears about every 76 years. Last seen in 1986; next predicted in 2061.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes asteroids near the Sun?",
      options: [
        "Mostly rocky",
        "Mostly metallic",
        "Mostly ice",
        "Mostly gas",
      ],
      answer: "1",
      explanation:
        "Asteroids CLOSER to the Sun are mostly METALLIC. Those FURTHER away are ROCKY.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how the solar system formed?",
      options: [
        "From a cloud of dust and gas that contracted after a supernova",
        "From the collision of two planets",
        "From the Big Bang directly",
        "From volcanic eruptions on Earth",
      ],
      answer: "0",
      explanation:
        "The solar system formed about 4.6 billion years ago from a cloud of dust and gas, disturbed by a supernova, which contracted into a solar nebula.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "What is a solar nebula?",
      options: [
        "A star",
        "A large cloud of gas and dust from which the Sun and planets formed",
        "A moon",
        "A comet",
      ],
      answer: "1",
      explanation:
        "A SOLAR NEBULA is a large cloud of gas and dust from which the Sun, planets, and other solar system bodies formed.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "How old is the solar system?",
      options: ["460 million years", "4.6 billion years", "46 billion years", "4.6 million years"],
      answer: "1",
      explanation:
        "The solar system is about 4.6 BILLION years old.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Why are the inner planets rocky and the outer planets gas giants?",
      options: [
        "Because the inner planets are older",
        "Because it was hot near the Sun (gas couldn't condense) and cool far away",
        "Because the outer planets are bigger",
        "Random chance",
      ],
      answer: "1",
      explanation:
        "Near the Sun, the temperature was HOT, so gases couldn't condense into solids → inner planets formed from rocks. Farther away it was cooler → gases stayed → outer planets became gas giants.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the diameter of Earth?",
      options: ["6,794 km", "12,750 km", "49,528 km", "142,984 km"],
      answer: "1",
      explanation:
        "Earth's diameter is about 12,750 km.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Earth is the ___ largest planet in the solar system.",
      options: ["First", "Third", "Fifth", "Eighth"],
      answer: "2",
      explanation:
        "Earth is the 5th largest planet (after Jupiter, Saturn, Uranus, Neptune).",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the average temperature of Earth's surface?",
      options: ["5°C", "15°C", "25°C", "35°C"],
      answer: "1",
      explanation:
        "Earth's average surface temperature is about 15°C.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "About what percentage of Earth's surface is covered with water?",
      options: ["30%", "50%", "71%", "90%"],
      answer: "2",
      explanation:
        "About 71% of Earth's surface is covered with water.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "Why is liquid water possible on Earth?",
      options: [
        "Because Earth is close to the Sun",
        "Because Earth is at the right distance from the Sun (not too hot, not too cold)",
        "Because Earth is very big",
        "Because of Jupiter",
      ],
      answer: "1",
      explanation:
        "Earth is at the RIGHT DISTANCE from the Sun — not too hot (which would evaporate water) and not too cold (which would freeze it).",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "What would happen to Earth's day length without the Moon?",
      options: [
        "It would stay the same",
        "It would become ~4 hours long",
        "It would become 100 hours long",
        "There would be no day",
      ],
      answer: "1",
      explanation:
        "Without the Moon, Earth's rotation would speed up, making a day about 4 hours long.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the role of Earth's magnetic field?",
      options: [
        "It creates the tides",
        "It deflects solar wind (charged particles) from the Sun",
        "It causes earthquakes",
        "It makes Earth rotate",
      ],
      answer: "1",
      explanation:
        "Earth's magnetic field DEFLECTS most of the solar wind — charged particles from the Sun. Without it, solar winds would strip away our oceans and atmosphere.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "How does Jupiter help protect Earth?",
      options: [
        "It reflects sunlight",
        "Its gravity pulls many asteroids away from Earth",
        "It blocks the Sun",
        "It reflects solar wind",
      ],
      answer: "1",
      explanation:
        "Because of its huge mass, Jupiter's gravity attracts many asteroids toward itself, shielding Earth from constant asteroid bombardment.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "What does the ozone layer do?",
      options: [
        "Blocks harmful UV rays from the Sun",
        "Produces oxygen",
        "Traps heat",
        "Reflects light",
      ],
      answer: "0",
      explanation:
        "The ozone layer BLOCKS harmful UV radiation from the Sun, protecting life on Earth.",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "Ethiopia's first Earth observation satellite is:",
      options: ["ETRSS-1", "ET-SMART-RSS", "Sputnik", "Sina-1"],
      answer: "0",
      explanation:
        "ETRSS-1 (Ethiopian Remote Sensing Satellite 1) was launched December 20, 2019, in collaboration with China.",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "Ethiopia's second satellite is:",
      options: ["ETRSS-1", "ET-SMART-RSS", "Habesha-1", "NileSat"],
      answer: "1",
      explanation:
        "ET-SMART-RSS was launched December 22, 2020, with higher resolution than ETRSS-1.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "How many total moons does Mars have?",
      options: ["0", "1", "2", "4"],
      answer: "2",
      explanation:
        "Mars has 2 moons.",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly orders the planets from SMALLEST to LARGEST?",
      options: [
        "Mercury, Mars, Venus, Earth, Neptune, Uranus, Saturn, Jupiter",
        "Jupiter, Saturn, Uranus, Neptune, Earth, Venus, Mars, Mercury",
        "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
        "Earth, Mercury, Mars, Venus, Neptune, Uranus, Saturn, Jupiter",
      ],
      answer: "0",
      explanation:
        "Smallest to largest: Mercury (4,880) → Mars (6,794) → Venus (12,104) → Earth (12,750) → Neptune (49,528) → Uranus (51,118) → Saturn (120,536) → Jupiter (142,984).",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes Halley's Comet?",
      options: [
        "It appeared only once",
        "It returns every ~76 years — last seen 1986, next 2061",
        "It is a planet",
        "It is a satellite",
      ],
      answer: "1",
      explanation:
        "Halley's Comet returns every ~76 years. Last seen 1986, next predicted 2061. It is named after Edmund Halley.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why Venus is HOTTER than Mercury even though Mercury is closer to the Sun?",
      options: [
        "Because Venus is bigger",
        "Because Venus has a thick CO₂ atmosphere that traps heat (greenhouse effect)",
        "Because Venus rotates faster",
        "Because Venus has more moons",
      ],
      answer: "1",
      explanation:
        "Venus has a THICK CO₂ atmosphere that traps heat through the greenhouse effect, making it the hottest planet.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly lists the UNIQUE characteristics of Earth that make it suitable for life?",
      options: [
        "Right distance from Sun, right temperature, water, atmosphere with ozone, right moon",
        "Only water",
        "Only ozone",
        "Only the Moon",
      ],
      answer: "0",
      explanation:
        "Earth is unique because of: right distance from Sun, right temperature (~15°C), liquid water, suitable atmosphere, ozone layer, protective magnetic field, and Jupiter's protection.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about the solar system is FALSE?",
      options: [
        "The Sun is the largest object in the solar system",
        "The Sun contains about 98% of the total mass",
        "Pluto is still considered a planet",
        "Neptune is the farthest planet",
      ],
      answer: "2",
      explanation:
        "Pluto was RECLASSIFIED as a DWARF planet in 2006. It is no longer considered a full planet.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes how scientists learned about the solar system?",
      options: [
        "Through the Big Bang theory only",
        "Through study of the solar nebula, supernovas, and the leftover remnants (asteroids, comets, meteorites)",
        "Through ancient books",
        "By traveling to other stars",
      ],
      answer: "1",
      explanation:
        "Scientists study the solar system by studying the SOLAR NEBULA, the role of SUPERNOVA explosions, and the surviving remnants (asteroids, comets, meteorites) from the formation process.",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Name the 8 planets in order from the Sun.",
      answer:
        "1) Mercury. 2) Venus. 3) Earth. 4) Mars. 5) Jupiter. 6) Saturn. 7) Uranus. 8) Neptune.",
      explanation:
        "Banchi, memorize this order — it's the foundation of Unit 6.",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "Describe three main differences between inner and outer planets.",
      answer:
        "1) Inner planets are rocky; outer planets are gas giants. 2) Inner planets have HIGH densities; outer have LOW densities. 3) Inner planets have few or no moons; outer planets have many moons.",
      explanation:
        "Remember: Inner = rocky + high density + few moons. Outer = gas + low density + many moons.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "Describe how the solar system formed.",
      answer:
        "About 4.6 billion years ago, a cloud of dust and gas (hydrogen and helium) was rotating in space. A nearby supernova disturbed it, causing it to contract. As density increased, gravity pulled more gas to the center. Most of the mass formed the SUN (99.8%). The leftover gas and dust stuck together to form planets, moons, and other bodies. The inner planets formed from rock (because it was hot near the Sun); the outer planets formed from gas (because it was cooler far away).",
      explanation:
        "Key steps: supernova → contraction → solar nebula → Sun at center → planets from leftover debris.",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "Explain why Earth is the only planet known to support life.",
      answer:
        "Earth has: (1) the RIGHT distance from the Sun, so liquid water can exist; (2) the right temperature (~15°C average); (3) plenty of water (71% of surface); (4) an atmosphere rich in O₂, N₂, CO₂ with an OZONE layer that blocks harmful UV; (5) a strong magnetic field that deflects solar wind; (6) the right Moon that creates seasons; (7) a stable Sun; (8) protection from Jupiter's gravity that deflects asteroids.",
      explanation:
        "Banchi, memorize at least 5 factors. The key one is the right distance from the Sun — the 'Goldilocks zone'.",
    },
        // ============================================================
    // BATCH 2 — Q61 to Q120 (final for Unit 6)
    // ============================================================

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet has the shortest revolution period around the Sun?",
      options: ["Mercury", "Venus", "Earth", "Mars"],
      answer: "0",
      explanation:
        "Mercury takes only 88 days to orbit the Sun — the shortest revolution period.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet has the longest revolution period?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "3",
      explanation:
        "Neptune takes about 165 years to orbit the Sun — the longest revolution period.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "How long does Earth take to complete one revolution around the Sun?",
      options: ["24 hours", "30 days", "365.25 days", "10 years"],
      answer: "2",
      explanation:
        "Earth completes one revolution around the Sun in 365.25 days — one year.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet rotates fastest on its axis?",
      options: ["Mercury", "Earth", "Jupiter", "Neptune"],
      answer: "2",
      explanation:
        "Jupiter rotates fastest — about 9 hours 50 minutes per rotation.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the largest volcano in the solar system?",
      options: ["Olympus Mons (Mars)", "Mount Everest", "Kilimanjaro", "Vesuvius"],
      answer: "0",
      explanation:
        "Olympus Mons on Mars is the largest volcano in the solar system — three times taller than Mount Everest.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Valles Marineris is on which planet?",
      options: ["Mercury", "Mars", "Jupiter", "Saturn"],
      answer: "1",
      explanation:
        "Valles Marineris is the deepest and longest valley in the solar system, located on MARS.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet looks blue-green from space?",
      options: ["Mars", "Jupiter", "Uranus", "Venus"],
      answer: "2",
      explanation:
        "Uranus appears blue-green because of the methane in its atmosphere.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet was the first to be discovered with a telescope?",
      options: ["Jupiter", "Saturn", "Uranus", "Neptune"],
      answer: "2",
      explanation:
        "Uranus was the first planet discovered with a telescope (by William Herschel in 1781).",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the largest volcano in the solar system?",
      options: ["Olympus Mons", "Valles Marineris", "Mauna Kea", "Etna"],
      answer: "0",
      explanation:
        "Olympus Mons (on Mars) is the largest known volcano in the solar system.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "What are the 4 Galilean moons?",
      options: [
        "The 4 largest moons of Jupiter",
        "The 4 largest moons of Saturn",
        "The 4 largest moons of Mars",
        "The 4 largest moons of Neptune",
      ],
      answer: "0",
      explanation:
        "The 4 Galilean moons are Jupiter's largest moons — Io, Europa, Ganymede, and Callisto — discovered by Galileo.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "Who discovered the moons of Jupiter?",
      options: ["Newton", "Galileo Galilei", "Einstein", "Copernicus"],
      answer: "1",
      explanation:
        "Galileo Galilei discovered the four largest moons of Jupiter in 1610, using his telescope.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "Which planet has a faint ring system AND the largest number of moons?",
      options: ["Saturn", "Jupiter", "Uranus", "Neptune"],
      answer: "0",
      explanation:
        "Saturn has the most prominent ring system AND the largest number of moons (82).",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "The solar system is approximately:",
      options: [
        "460,000 years old",
        "4.6 million years old",
        "4.6 billion years old",
        "46 billion years old",
      ],
      answer: "2",
      explanation:
        "The solar system is about 4.6 BILLION years old.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly matches the planet with its key feature?",
      options: [
        "Venus — hottest",
        "Mercury — coldest",
        "Mars — has rings",
        "Jupiter — smallest",
      ],
      answer: "0",
      explanation:
        "Venus is the hottest planet (about 464°C). Mercury is not coldest (it's very hot during the day). Mars has no rings. Jupiter is the largest.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly matches the planet with its key feature?",
      options: [
        "Neptune — farthest and coldest",
        "Mercury — has many moons",
        "Mars — largest planet",
        "Saturn — smallest planet",
      ],
      answer: "0",
      explanation:
        "Neptune is the farthest and coldest planet. Mercury has NO moons. Mars is not the largest. Saturn is not the smallest.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the symbol figure of Ethiopia's first satellite?",
      options: ["ETRSS-1", "ETRSS-A", "ET-SMART-1", "Ethio-1"],
      answer: "0",
      explanation:
        "Ethiopia's first Earth observation satellite is ETRSS-1, launched December 20, 2019.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "Which was launched more recently?",
      options: ["ETRSS-1", "ET-SMART-RSS", "Sputnik", "Apollo 11"],
      answer: "1",
      explanation:
        "ET-SMART-RSS was launched December 22, 2020 (more recently than ETRSS-1, 2019).",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a use of artificial satellites?",
      options: [
        "Weather forecasting",
        "TV and radio signals",
        "Telecommunication",
        "Creating mountains",
      ],
      answer: "3",
      explanation:
        "Artificial satellites are used for weather forecasting, TV/radio signals, telecommunication, and remote sensing — NOT for creating mountains.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "The main mission of Ethiopia's space satellite is:",
      options: [
        "Entertainment only",
        "Addressing national challenges in resource management, weather, and disasters",
        "Space tourism",
        "Military conquest",
      ],
      answer: "1",
      explanation:
        "Ethiopia's satellites address national challenges: natural resource management, weather forecasting, disaster mitigation, agriculture, and more.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is TRUE about Earth's position?",
      options: [
        "Earth is the closest planet to the Sun",
        "Earth is the third planet from the Sun",
        "Earth is the farthest planet",
        "Earth is the fifth planet from the Sun",
      ],
      answer: "1",
      explanation:
        "Earth is the THIRD planet from the Sun (Mercury, Venus, Earth, Mars...).",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly lists the planets in order from Farthest to Closest to the Sun?",
      options: [
        "Neptune, Uranus, Saturn, Jupiter, Mars, Earth, Venus, Mercury",
        "Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, Neptune",
        "Earth, Mars, Jupiter, Saturn",
        "Neptune, Mercury, Venus, Earth",
      ],
      answer: "0",
      explanation:
        "Farthest to closest: Neptune → Uranus → Saturn → Jupiter → Mars → Earth → Venus → Mercury.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly explains why the Sun is so important?",
      options: [
        "It provides the primary energy for life on Earth",
        "It creates the Moon",
        "It creates the planets",
        "It is a planet",
      ],
      answer: "0",
      explanation:
        "The Sun provides the primary energy for life on Earth — through sunlight and photosynthesis.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the Sun's surface temperature?",
      options: ["500°C", "5,500°C", "50,000°C", "5 million °C"],
      answer: "1",
      explanation:
        "The Sun's surface temperature is about 5,500°C. The core is about 15 million °C.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a member of the solar system?",
      options: ["Planets", "Moons", "Stars other than the Sun", "Asteroids"],
      answer: "2",
      explanation:
        "Other stars (like Proxima Centauri) are NOT part of our solar system. The solar system only contains objects orbiting our Sun.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "The Moon is classified as a:",
      options: [
        "Planet",
        "Natural satellite",
        "Star",
        "Comet",
      ],
      answer: "1",
      explanation:
        "The Moon is Earth's only natural satellite.",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Which planet is known for having the LONGEST day (rotation period)?",
      options: ["Mercury", "Venus", "Earth", "Jupiter"],
      answer: "1",
      explanation:
        "Venus has the longest rotation period — about 243 days to rotate ONCE on its axis.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly orders the inner planets from smallest to largest?",
      options: [
        "Mercury, Mars, Venus, Earth",
        "Mars, Mercury, Earth, Venus",
        "Earth, Venus, Mars, Mercury",
        "Venus, Earth, Mars, Mercury",
      ],
      answer: "0",
      explanation:
        "Inner planets smallest to largest: Mercury (4,880) < Mars (6,794) < Venus (12,104) < Earth (12,750).",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes a moon?",
      options: [
        "A planet that lost its orbit",
        "A natural satellite that revolves around a planet",
        "A type of comet",
        "A type of star",
      ],
      answer: "1",
      explanation:
        "A MOON is a natural satellite that revolves around a planet.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the difference between planets and dwarf planets?",
      options: [
        "Dwarf planets have cleared their orbit; planets have not",
        "Planets have cleared their orbit; dwarf planets have not",
        "They are the same",
        "Dwarf planets are larger than planets",
      ],
      answer: "1",
      explanation:
        "PLANETS have cleared their orbit (no other large bodies nearby). DWARF planets have NOT cleared their orbit.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Which dwarf planet was once considered the 9th planet?",
      options: ["Ceres", "Pluto", "Eris", "Haumea"],
      answer: "1",
      explanation:
        "PLUTO was considered the 9th planet until 2006, when it was reclassified as a dwarf planet.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about the asteroid belt?",
      options: [
        "It is a single large asteroid",
        "It is a region with many asteroids between Mars and Jupiter",
        "It is between Earth and Venus",
        "It is a planet",
      ],
      answer: "1",
      explanation:
        "The asteroid belt is a REGION between Mars and Jupiter that contains many asteroids.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes a comet's structure?",
      options: [
        "Solid rock and metal",
        "Icy and dusty object with a bright head and long tail",
        "Gas only",
        "Liquid water",
      ],
      answer: "1",
      explanation:
        "Comets are ICY and DUSTY. They have a bright HEAD (nucleus + coma) and a long TAIL (pointing away from the Sun).",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about the Sun's composition?",
      options: [
        "Mostly oxygen and nitrogen",
        "Mostly hydrogen and helium",
        "Mostly carbon and iron",
        "Mostly rock",
      ],
      answer: "1",
      explanation:
        "The Sun is about 71% HYDROGEN and 27% HELIUM — the rest is other gases.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the correct order of sizes from smallest to largest?",
      options: [
        "Moon < Mercury < Earth < Jupiter",
        "Jupiter < Earth < Mercury < Moon",
        "Earth < Jupiter < Mercury < Moon",
        "Mercury < Jupiter < Earth < Moon",
      ],
      answer: "0",
      explanation:
        "Moon (3,475 km) < Mercury (4,880 km) < Earth (12,750 km) < Jupiter (142,984 km).",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "Which has the LONGEST day of any planet?",
      options: ["Mercury", "Venus", "Earth", "Neptune"],
      answer: "1",
      explanation:
        "Venus has the longest rotation period — about 243 days to rotate once on its axis.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about Saturn?",
      options: [
        "It has the least density of all planets (would float on water)",
        "It is the smallest planet",
        "It has no moons",
        "It has no rings",
      ],
      answer: "0",
      explanation:
        "Saturn has the LEAST density — less than water. It has 82 moons and famous rings.",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the difference between Venus and Mars?",
      options: [
        "Venus is hotter; Mars is colder and red",
        "Venus is red; Mars is hottest",
        "Both have the same temperature",
        "Both are gas giants",
      ],
      answer: "0",
      explanation:
        "Venus is the HOTTEST planet (thick CO₂ atmosphere). Mars is colder and appears RED (iron oxide).",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes Earth's atmosphere composition?",
      options: [
        "78% O₂, 21% N₂",
        "78% N₂, 21% O₂, plus CO₂ and other gases",
        "50% N₂, 50% O₂",
        "100% O₂",
      ],
      answer: "1",
      explanation:
        "Earth's atmosphere is about 78% NITROGEN, 21% OXYGEN, and the rest CO₂, argon, and other gases.",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the difference between the inner and outer planets in terms of average density?",
      options: [
        "Inner planets have low density; outer have high density",
        "Inner planets have high density; outer have low density",
        "Both have the same density",
        "Only Earth has density",
      ],
      answer: "1",
      explanation:
        "Inner (terrestrial) planets have HIGH densities (4,000–5,500 kg/m³). Outer (Jovian) planets have LOW densities (700–1,700 kg/m³).",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the relationship between a planet's distance from the Sun and its temperature?",
      options: [
        "Farther planets are always hotter",
        "Farther planets are generally colder",
        "Distance has no effect on temperature",
        "Temperature is always the same",
      ],
      answer: "1",
      explanation:
        "Generally, farther planets are COLDER because they receive less solar energy. (Venus is an exception due to its greenhouse effect.)",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the Earth's orbit?",
      options: [
        "A perfect circle",
        "An ellipse that takes 365.25 days to complete",
        "A straight line",
        "A square",
      ],
      answer: "1",
      explanation:
        "Earth's orbit is an ELLIPSE. It takes 365.25 days for one complete revolution around the Sun.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the difference between rotation and revolution?",
      options: [
        "Rotation is spinning on an axis; revolution is orbiting around another body",
        "Rotation is orbiting; revolution is spinning",
        "They are the same",
        "Both mean spinning",
      ],
      answer: "0",
      explanation:
        "ROTATION = spinning on its own axis (Earth: 1 day). REVOLUTION = orbiting around another body (Earth: 1 year).",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "Which planet has an orbit that is nearly a perfect circle?",
      options: ["Mercury", "Venus", "Mars", "Pluto"],
      answer: "1",
      explanation:
        "Venus has the most nearly circular orbit of all planets.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the approximate distance from the Sun to Earth?",
      options: ["57.9 million km", "108.2 million km", "149.6 million km", "227.9 million km"],
      answer: "2",
      explanation:
        "Earth is about 149.6 million km from the Sun. This distance is used to define the Astronomical Unit (AU).",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about the position of Mercury and Venus?",
      options: [
        "Both are closer to the Sun than Earth",
        "Both are farther from the Sun than Earth",
        "Mercury is farther; Venus is closer",
        "They are on opposite sides of Earth",
      ],
      answer: "0",
      explanation:
        "Mercury (1st) and Venus (2nd) are both closer to the Sun than Earth (3rd).",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about the Sun's temperature?",
      options: [
        "Surface ~5,500°C; Core ~15 million °C",
        "Surface ~500°C; Core ~5,500°C",
        "Surface and core are the same temperature",
        "The Sun is not hot",
      ],
      answer: "0",
      explanation:
        "The Sun's surface is about 5,500°C and its core is about 15 million °C.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes Earth's magnetic field?",
      options: [
        "It has no impact on life",
        "It deflects harmful solar wind particles",
        "It creates the Moon",
        "It only affects compasses",
      ],
      answer: "1",
      explanation:
        "Earth's magnetic field deflects harmful SOLAR WIND particles from the Sun. Without it, our oceans and atmosphere would be stripped away.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about the Moon's role in Earth's habitability?",
      options: [
        "The Moon creates seasons by tilting Earth's axis",
        "The Moon heats the Earth",
        "The Moon produces oxygen",
        "The Moon has no role",
      ],
      answer: "0",
      explanation:
        "The Moon helps STABILIZE Earth's axial tilt, which creates the SEASONS. Without it, days would be about 4 hours long.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the difference between Earth's natural and artificial satellites?",
      options: [
        "Natural = Moon; artificial = man-made (e.g., ETRSS-1)",
        "Natural = man-made; artificial = Moon",
        "Both are natural",
        "Both are man-made",
      ],
      answer: "0",
      explanation:
        "Earth's NATURAL satellite is the MOON. ARTIFICIAL satellites (like ETRSS-1, ET-SMART-RSS) are man-made and launched for communication, weather, etc.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes why planets stay in orbit around the Sun?",
      options: [
        "Gravity pulls them toward the Sun; their orbital speed keeps them from falling in",
        "Magnets keep them",
        "They are held by strings",
        "Random chance",
      ],
      answer: "0",
      explanation:
        "The Sun's GRAVITY pulls planets toward it. The planets' sideways (orbital) motion keeps them from falling into the Sun — a balance of gravity and motion.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why the Sun contains 99.8% of the solar system's mass?",
      options: [
        "Because it was the first to form and gravity pulled most of the matter into it",
        "Because it was the largest object",
        "Random chance",
        "Because it exploded",
      ],
      answer: "0",
      explanation:
        "During the formation of the solar system, GRAVITY pulled most of the mass toward the center, forming the Sun. The remaining mass formed the planets and other bodies.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why Mercury has extreme temperature variations (426°C day, −173°C night)?",
      options: [
        "Mercury has no atmosphere to trap heat, so it cools rapidly at night",
        "Mercury is the closest planet",
        "Mercury is the smallest planet",
        "Mercury has no Sun",
      ],
      answer: "0",
      explanation:
        "Mercury has essentially NO ATMOSPHERE to trap heat. During the day, the Sun's rays heat the surface to 426°C. At night, the heat rapidly escapes to space, dropping to −173°C.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly compares the rotation of Jupiter vs Earth?",
      options: [
        "Jupiter rotates much faster (about 10 hours) vs Earth (24 hours)",
        "Jupiter rotates much slower than Earth",
        "They rotate at the same speed",
        "Jupiter doesn't rotate",
      ],
      answer: "0",
      explanation:
        "Jupiter rotates on its axis in only about 9 hours 50 minutes — much FASTER than Earth's 24 hours. Larger planets can rotate fast because they are not solid.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes the difference between meteoroids, meteors, and meteorites?",
      options: [
        "Meteoroid = in space; meteor = burning in atmosphere; meteorite = reaches ground",
        "Meteoroid = on the ground; meteor = in space; meteorite = burning",
        "All three are identical",
        "Only meteorites exist",
      ],
      answer: "0",
      explanation:
        "METEOROID: small object in space. METEOR: burns up in the atmosphere. METEORITE: reaches the ground.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why distant planets (Uranus, Neptune) are visible only through large telescopes?",
      options: [
        "They are very small",
        "They are very far and reflect little sunlight",
        "They are invisible",
        "They have no light",
      ],
      answer: "1",
      explanation:
        "Uranus and Neptune are VERY FAR from the Sun, so they receive and reflect little sunlight. This makes them very dim and only visible through large telescopes.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes the significance of Ethiopia's satellites?",
      options: [
        "They address national challenges in resource management, climate, weather, disasters, and agriculture",
        "They are for entertainment only",
        "They have no use",
        "They replace the Moon",
      ],
      answer: "0",
      explanation:
        "Ethiopia's satellites (ETRSS-1 and ET-SMART-RSS) support national priorities in resource management, climate monitoring, weather forecasting, disaster mitigation, agriculture, and border surveillance.",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "Name the outer planets and give one key fact about each.",
      answer:
        "1) Jupiter — the largest planet, 79 moons, faint rings. 2) Saturn — most moons (82), least dense. 3) Uranus — blue-green, tilted axis, 27 moons. 4) Neptune — farthest and coldest, 14 moons.",
      explanation:
        "Banchi, memorize these key facts — they appear often in exams.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "Explain the difference between asteroids, comets, and meteors.",
      answer:
        "ASTEROIDS = rocky/metallic objects that revolve around the Sun, mostly in the asteroid belt between Mars and Jupiter. COMETS = icy and dusty objects with highly elliptical orbits and a bright head + long tail (pointing away from the Sun). METEORS = small objects that burn up in Earth's atmosphere (shooting stars). If a part reaches the ground, it's a meteorite.",
      explanation:
        "Key differences: composition (rocky vs icy), orbit shape, and location.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "Describe the formation of the solar system in your own words.",
      answer:
        "About 4.6 billion years ago, a cloud of dust and gas (hydrogen and helium) was slowly rotating in space. A nearby supernova (star explosion) disturbed the cloud, causing it to contract. As it contracted, density increased and gravity pulled more gas toward the center. Most of the mass formed the Sun (99.8%). The leftover gas and dust stuck together to form clumps, which collided and grew into planets, moons, and other bodies.",
      explanation:
        "Key steps: supernova → contraction → solar nebula → Sun at center → planets from leftover debris.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Explain at least five factors that make Earth suitable for life.",
      answer:
        "1) Right DISTANCE from the Sun — allows liquid water to exist. 2) Right TEMPERATURE (~15°C average). 3) Plenty of LIQUID WATER (71% of surface). 4) Right ATMOSPHERE with oxygen and an OZONE layer that blocks UV. 5) Strong MAGNETIC FIELD that deflects solar wind. 6) RIGHT MOON — stabilizes Earth's tilt and creates seasons. 7) JUPITER'S gravity protects Earth from asteroids.",
      explanation:
        "Banchi, memorize at least 5 factors. The most important are: right distance from Sun, liquid water, and protective atmosphere.",
    },
  ],
};