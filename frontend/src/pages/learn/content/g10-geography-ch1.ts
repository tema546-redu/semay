import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 GEOGRAPHY — UNIT 1
// LANDFORMS OF AFRICA
// Source: Grade 10 Geography Student Textbook (pp. 1–24)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, definition boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10GeographyCh1: Chapter = {
  id: "ch1",
  number: 1,
  title: "Landforms of Africa",
  titleAm: "የአፍሪካ መልከዓ ምድሮች",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about LANDFORMS — the physical shapes of the Earth's surface, focusing on Africa.\n\n" +
        "It has THREE parts:\n" +
        "1) World's major landforms — mountains, plateaus, plains.\n" +
        "2) Africa's location and size.\n" +
        "3) Africa's FOUR major landform regions and their features.\n\n" +
        "The WHOLE chapter reduces to THREE key ideas:\n" +
        "• Landforms = results of INTERNAL (tectonic, volcanic) + EXTERNAL (erosion) processes.\n" +
        "• Africa's 4 landform regions: Alpine System, African Massif, East African Highlands & Rift, Southern Africa Platform.\n" +
        "• Each region has unique features — Atlas, Sahara, Rift Valley, Drakensberg, etc.\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ ይህ ክፍል ስለ መልከዓ ምድር ነው — የምድር ገጽታ ቅርጾች።\n\n" +
        "ሦስት ክፍሎች፡\n" +
        "1) የዓለም ዋና መልከዓ ምድሮች\n" +
        "2) የአፍሪካ አቀማመጥና መጠን\n" +
        "3) የአፍሪካ 4 ዋና መልከዓ ምድር ክልሎች",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the internal vs external processes",
          titleAm: "ደረጃ 1 · ውስጣዊ vs ውጫዊ ሂደቶች",
          body:
            "INTERNAL processes (build landforms):\n" +
            "• Tectonic plate movement.\n" +
            "• Volcanic activity.\n" +
            "• Push up mountains, plateaus, hills.\n\n" +
            "EXTERNAL processes (break down landforms):\n" +
            "• Erosion by water and wind.\n" +
            "• Create gullies, river valleys, gorges.\n\n" +
            "Both happen over MILLIONS of years.",
          bodyAm:
            "ውስጣዊ: ተክቶኒክ፣ እሳተ ገሞራ።\n" +
            "ውጫዊ: የውሃ/ንፋስ መሸርሸር።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the four major African regions",
          titleAm: "ደረጃ 2 · አራቱን ዋና የአፍሪካ ክልሎች አስታውስ",
          body:
            "1) AFRICAN ALPINE SYSTEM:\n" +
            "• Atlas Mountains (Morocco → Tunisia).\n\n" +
            "2) AFRICAN MASSIF:\n" +
            "• Sahara Desert (largest hot desert, 9.2M km²).\n" +
            "• Sahel (semi-arid transition zone).\n" +
            "• Savanna (tropical grassland).\n" +
            "• Tropical Rainforest (Congo Basin).\n\n" +
            "3) EAST AFRICAN HIGHLANDS AND RIFT SYSTEM:\n" +
            "• Rift Valley (5,600 km long, graben).\n" +
            "• Great Lakes (Lake Victoria — largest in Africa).\n" +
            "• Ethiopian and Eritrean Highlands.\n\n" +
            "4) SOUTHERN AFRICA PLATFORM:\n" +
            "• Drakensberg (Ukhahlamba) escarpment.\n" +
            "• Kalahari Desert.\n" +
            "• Namib Desert.\n" +
            "• Highveld + Great Karoo.",
          bodyAm:
            "1) አትላስ ተራሮች\n" +
            "2) ሳሃራ፣ ሳሄል፣ ሳቫና፣ የዝናብ ደን\n" +
            "3) ስምጥ ሸለቆ፣ ታላቁ ሐይቆች፣ የኢትዮጵያ ደጋማ\n" +
            "4) ድራከንስበርግ፣ ካላሃሪ፣ ናሚብ",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master the continent facts",
          titleAm: "ደረጃ 3 · የአህጉሪቱ እውነታዎች",
          body:
            "AFRICA'S SIZE:\n" +
            "• 30.37 million km² — 2nd largest continent after Asia.\n" +
            "• 6% of Earth's total surface area, 20% of land area.\n" +
            "• ~1.3 billion population (2020) — 16% of world.\n" +
            "• 54 recognized sovereign states.\n\n" +
            "BOUNDARIES:\n" +
            "• North: Mediterranean Sea.\n" +
            "• Northeast: Red Sea, Gulf of Aden.\n" +
            "• East: Indian Ocean.\n" +
            "• West: Atlantic Ocean.\n" +
            "• Equator divides Africa almost in half.\n\n" +
            "MIRROR EFFECT: North and South of the equator have near-identical climates (Kalahari ≈ Sahara; Karoo ≈ Maghreb).",
          bodyAm:
            "30.37 ሚሊዮን ኪ.ሜ.² (2ኛ ትልቅ)።\n" +
            "1.3 ቢሊዮን ህዝብ።\n" +
            "54 አገሮች።\n" +
            "ምድር መስመር ሁለት ከፍሏታል።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Did you distinguish erg vs reg?\n" +
            "2) Did you know the Rift Valley is formed by NORMAL FAULTING?\n" +
            "3) Did you know Lake Victoria is NOT in the rift valley?\n" +
            "4) Did you distinguish woodland vs thorn-tree tall grass savanna?\n" +
            "5) Did you know the Namib is affected by the COLD Benguela Current?",
          bodyAm:
            "1) Erg vs Reg?\n" +
            "2) Rift Valley = normal faulting?\n" +
            "3) ቪክቶሪያ በስምጥ ሸለቆ ውስጥ አይደለም።\n" +
            "4) ናሚብ = Benguela የቀዝቃዛ ፍሰት።",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Landforms = internal + external processes.\n" +
            "• 7 continents (largest → smallest): Asia, Africa, N. America, S. America, Antarctica, Europe, Oceania.\n" +
            "• 5 oceans: Arctic, Atlantic, Indian, Pacific, Southern.\n" +
            "• Mt. Everest = highest (8,849 m); Mariana Trench = deepest.\n" +
            "• Greenland = largest island; Australia = continent.\n" +
            "• Atlas Mountains = Maghrib region (Morocco, Algeria, Tunisia).\n" +
            "• Sahara = largest hot desert (9.2M km²).\n" +
            "• Erg = sand sea; Reg = pebble desert pavement.\n" +
            "• Rift Valley = formed by NORMAL FAULTING → graben.\n" +
            "• Lake Victoria = largest lake (68,800 km²) — NOT in rift valley.\n" +
            "• Namib Desert = shaped by COLD Benguela Current.\n" +
            "• Drakensberg = Ukhahlamba escarpment; Highveld = SA inland plateau.",
          bodyAm:
            "• Everest = ከፍተኛ፤ Mariana = ጥልቅ።\n" +
            "• Erg = አሸዋ፤ Reg = ጠጠር።\n" +
            "• Rift Valley = graben።\n" +
            "• ቪክቶሪያ = ትልቁ ሐይቅ።",
        },
      ],
    },

    // ============================================================
    // 1.1 OVERVIEW OF WORLD'S MAJOR LANDFORMS
    // ============================================================
    {
      id: "n1",
      title: "1.1 Overview of the World's Major Landforms",
      titleAm: "1.1 የዓለም ዋና መልከዓ ምድሮች አጠቃላይ እይታ",
      body:
        "Abatu, LANDFORMS are physical features on the Earth's surface that form the terrain of an area. The THREE major types are MOUNTAINS, PLATEAUS, and PLAINS. Minor landforms include hills, gorges, valleys, and basins.",
      bodyAm:
        "አባቱ፣ መልከዓ ምድር = የምድር ገጽታ ቅርጾች።\n" +
        "ሦስቱ ዋና ዓይነቶች: ተራሮች፣ አምባዎች፣ ሜዳዎች።",
      children: [
        {
          id: "n1-1",
          title: "Formation processes",
          titleAm: "የቅርጽ ሂደቶች",
          body:
            "INTERNAL PROCESSES:\n" +
            "• Tectonic plate movement.\n" +
            "• Volcanic activity.\n" +
            "• Push up mountains, plateaus, hills.\n\n" +
            "EXTERNAL PROCESSES:\n" +
            "• Erosion by water and wind.\n" +
            "• Create gullies, river valleys, gorges.\n\n" +
            "Example: Abbay Gorge (Ethiopia) — cut ~1,000 m deep over millions of years between Goha Tsiyon (North Shewa) and Dejen (East Gojam).",
          bodyAm:
            "ውስጣዊ: ተክቶኒክ + እሳተ ገሞራ።\n" +
            "ውጫዊ: መሸርሸር።\n" +
            "ምሳሌ: የዓባይ ገደል ~1000 ሜ ጥልቀት።",
        },
        {
          id: "n1-2",
          title: "Continents and oceans",
          titleAm: "አህጉራትና ውቅያኖሶች",
          body:
            "SEVEN CONTINENTS (largest to smallest):\n" +
            "1) Asia\n" +
            "2) Africa\n" +
            "3) North America\n" +
            "4) South America\n" +
            "5) Antarctica\n" +
            "6) Europe\n" +
            "7) Oceania (Australia)\n\n" +
            "FIVE OCEANS:\n" +
            "• Arctic, Atlantic, Indian, Pacific, Southern.\n" +
            "• Cover 71% of Earth.\n" +
            "• Pacific = largest + deepest (1/3 of Earth's surface).",
          bodyAm:
            "7 አህጉራት፡ እስያ፣ አፍሪካ፣ ሰ.አሜሪካ፣ ደ.አሜሪካ፣ አንታርክቲካ፣ አውሮፓ፣ ኦሺኒያ።\n" +
            "5 ውቅያኖሶች፡ አርክቲክ፣ አትላንቲክ፣ ህንድ፣ ፓሲፊክ፣ ደቡባዊ።\n" +
            "ፓሲፊክ = ትልቁ + ጥልቁ።",
        },
        {
          id: "n1-3",
          title: "Coastal features: islands, peninsulas, isthmuses",
          titleAm: "የባህር ጠረፍ ቅርጾች",
          body:
            "ISLAND: piece of land completely surrounded by water.\n" +
            "• Largest = Greenland.\n" +
            "• Australia is bigger but is a continent, not an island.\n\n" +
            "PENINSULA: piece of land with water on THREE sides and connected on the fourth side to the mainland.\n" +
            "• Examples: Italy, Florida.\n\n" +
            "ISTHMUS: narrow strip of land with water on BOTH sides connecting two larger land areas.\n" +
            "• Example: Isthmus of Panama (connects N. America to S. America).",
          bodyAm:
            "ደሴት: በውሃ የተከበበች። ትልቋ = ግሪንላንድ።\n" +
            "ልሳነ ምድር: በ3 ጎን ውሃ፣ በ1 ጎን ዋና መሬት።\n" +
            "የመሬት ድልድይ: በ2 ጎን ውሃ፣ ሁለት መሬቶችን የሚያገናኝ።",
        },
        {
          id: "n1-4",
          title: "The three major landform types",
          titleAm: "ሦስቱ ዋና የመልከዓ ምድር ዓይነቶች",
          body:
            "MOUNTAINS:\n" +
            "• Largest elevated landforms.\n" +
            "• Steep sides, high peaks.\n" +
            "• Formed when rock layers are pushed together → center rises.\n" +
            "• Mt. Everest = highest (8,849 m).\n" +
            "• Himalaya range (India-Eurasia collision 40–50 million years ago).\n\n" +
            "PLAINS:\n" +
            "• Large flat low areas with no hills/mountains.\n" +
            "• Example: Great Plains (USA).\n" +
            "• Important for crop cultivation and animal husbandry.\n\n" +
            "PLATEAUS:\n" +
            "• Large raised land flat on top.\n" +
            "• Formed by volcanic activity — magma pressure pushes land up without breaking through.",
          bodyAm:
            "ተራሮች: ከፍተኛ፣ ገደላማ።\n" +
            "ሜዳዎች: ሰፊ፣ ለስላሳ፣ ለእርሻ።\n" +
            "አምባዎች: ከፍተኛ ግን ላዩን ስርግጥርጥ",
        },
        {
          id: "n1-5",
          title: "⚠ Remember trap — World landforms",
          titleAm: "⚠ አትርሳ — የዓለም መልከዓ ምድር",
          body:
            "• Mt. Everest = HIGHEST (8,849 m); Mariana Trench = DEEPEST.\n" +
            "• Everest is between Nepal and Tibet.\n" +
            "• Himalayas formed when Indian plate collided with Eurasian plate (~40–50 million years ago).\n" +
            "• Greenland = LARGEST ISLAND; Australia = continent (not island).\n" +
            "• Isthmus connects two larger lands; peninsula is connected on one side.\n" +
            "• Plains = flat + good for agriculture.",
          bodyAm:
            "• Everest = ከፍተኛ፤ Mariana = ጥልቅ።\n" +
            "• ግሪንላንድ = ትልቋ ደሴት።\n" +
            "• ሜዳ = ለእርሻ።",
        },
      ],
    },

    // ============================================================
    // 1.2 LOCATION AND FEATURES OF AFRICA
    // ============================================================
    {
      id: "n2",
      title: "1.2 Location and Related Features of Africa",
      titleAm: "1.2 የአፍሪካ አቀማመጥና ተዛማጅ ባህሪያት",
      body:
        "Abatu, Africa is the SECOND largest and SECOND most populous continent after Asia. It covers 30.37 million km².",
      bodyAm:
        "አባቱ፣ አፍሪካ = 2ኛ ትልቅ + 2ኛ ብዙ ህዝብ። 30.37 ሚሊዮን ኪ.ሜ.²።",
      children: [
        {
          id: "n2-1",
          title: "Location and boundaries",
          titleAm: "አቀማመጥና ወሰኖች",
          body:
            "AFRICA'S BOUNDARIES:\n" +
            "• North: Mediterranean Sea.\n" +
            "• Northeast: Red Sea + Gulf of Aden.\n" +
            "• East: Indian Ocean.\n" +
            "• West: Atlantic Ocean.\n\n" +
            "Equator divides Africa almost in HALF.",
          bodyAm:
            "ሰሜን: ሜዲትራኒያን ባህር።\n" +
            "ሰሜን ምስራቅ: ቀይ ባህር + የኤደን ባህረ ሰላጤ።\n" +
            "ምስራቅ: ህንድ ውቅያኖስ።\n" +
            "ምዕራብ: አትላንቲክ ውቅያኖስ።",
        },
        {
          id: "n2-2",
          title: "Size and population",
          titleAm: "መጠንና ህዝብ",
          body:
            "AREA: 30.37 million km²\n" +
            "• 6% of Earth's total surface area.\n" +
            "• 20% of Earth's land area.\n\n" +
            "POPULATION (2020): ~1.3 billion\n" +
            "• ~16% of world population.\n\n" +
            "SOVEREIGN STATES: 54 recognized.",
          bodyAm:
            "30.37 ሚሊዮን ኪ.ሜ.²።\n" +
            "6% የምድር ገጽታ፣ 20% የመሬት።\n" +
            "1.3 ቢሊዮን ህዝብ።\n" +
            "54 አገሮች።",
        },
        {
          id: "n2-3",
          title: "The mirror-image effect",
          titleAm: "የመስታወት ምስል ውጤት",
          body:
            "Because Africa is divided almost equally across the equator:\n" +
            "• Climatic and physical conditions in the north REPEAT in the south.\n\n" +
            "Examples:\n" +
            "• Kalahari Desert (S) ≈ Sahara (N).\n" +
            "• Karoo (S) ≈ Maghreb (N).\n" +
            "• Cape area ≈ Mediterranean region.",
          bodyAm:
            "ሰሜን እና ደቡብ ተመሳሳይ የአየር ንብረት አላቸው።\n" +
            "ካላሃሪ ≈ ሳሃራ።\n" +
            "ካሩ ≈ ማግሪብ።",
        },
        {
          id: "n2-4",
          title: "⚠ Remember trap — Africa's location",
          titleAm: "⚠ አትርሳ — የአፍሪካ አቀማመጥ",
          body:
            "• Africa = 2nd largest continent (after Asia).\n" +
            "• Africa = 2nd most populous (after Asia).\n" +
            "• Area = 30.37 million km².\n" +
            "• 6% of Earth's surface, 20% of land area.\n" +
            "• 1.3 billion people (2020), ~16% of world.\n" +
            "• 54 sovereign states.\n" +
            "• Equator divides Africa almost in half.",
          bodyAm:
            "2ኛ ትልቅ፣ 2ኛ ብዙ ህዝብ።\n" +
            "30.37M ኪ.ሜ.²።\n" +
            "54 አገሮች።",
        },
      ],
    },

    // ============================================================
    // 1.3 MAJOR LANDFORMS OF AFRICA
    // ============================================================
    {
      id: "n3",
      title: "1.3 Major Landforms of Africa (Four Regions)",
      titleAm: "1.3 የአፍሪካ ዋና መልከዓ ምድሮች",
      body:
        "Abatu, Africa has FOUR major landform regions:\n" +
        "1) African Alpine System (Atlas Mountains).\n" +
        "2) African Massif (Sahara, Sahel, Savanna, Rainforest).\n" +
        "3) East African Highlands & Rift System (Rift Valley, Great Lakes, Ethiopian/Eritrean Highlands).\n" +
        "4) Southern Africa Platform (Drakensberg, Kalahari, Namib, Highveld).",
      bodyAm:
        "4 ክልሎች፡\n" +
        "1) አትላስ\n2) ሳሃራ/ሳሄል/ሳቫና/ደን\n" +
        "3) ስምጥ ሸለቆ/ሐይቆች/ደጋማ\n" +
        "4) ድራከንስበርግ/ካላሃሪ/ናሚብ",
      children: [
        {
          id: "n3-1",
          title: "Region 1 — Atlas Mountains (African Alpine System)",
          titleAm: "ክልል 1 — አትላስ ተራሮች",
          body:
            "ATLAS MOUNTAINS:\n" +
            "• Range in North Africa.\n" +
            "• Extends Morocco → Tunisia.\n" +
            "• Over 2,000 km long (Agadir → Tunis).\n" +
            "• Makes up the MAGHRIB region ('west' in Arabic).\n" +
            "• High divide between Mediterranean Sea (N) and Sahara Desert (S).\n\n" +
            "Sub-ranges:\n" +
            "• Anti-Atlas\n" +
            "• High Atlas\n" +
            "• Middle Atlas\n" +
            "• Rif Mountains\n" +
            "• Tell Atlas\n" +
            "• Sahara Atlas",
          bodyAm:
            "ሞሮኮ → ቱኒዚያ።\n" +
            "2,000+ ኪ.ሜ።\n" +
            "ማግሪብ = ምዕራብ።\n" +
            "6 ንዑስ ተራሮች።",
        },
        {
          id: "n3-2",
          title: "Region 2 — Sahara Desert (largest hot desert)",
          titleAm: "ክልል 2 — ሳሃራ በረሃ",
          body:
            "SAHARA:\n" +
            "• Largest HOT DESERT in the world.\n" +
            "• Area: 9,200,000 km².\n" +
            "• Covers entire North Africa — Atlantic to Red Sea.\n" +
            "• Borders Mediterranean Sea + Atlas Mountains (N), extends into Sudan + Sahel (S).\n" +
            "• 10 countries: Algeria, Chad, Egypt, Libya, Mali, Mauritania, Morocco, Niger, Sudan, Tunisia.\n\n" +
            "TWO surface types:\n" +
            "• ERG: reddish sand dune 'sand sea' (from weathered sandstone).\n" +
            "• REG: desert pavement of pebbles on flat sand sheets.",
          bodyAm:
            "9.2 ሚሊዮን ኪ.ሜ.²።\n" +
            "10 አገሮች።\n" +
            "Erg = አሸዋ፤ Reg = ጠጠር።",
        },
        {
          id: "n3-3",
          title: "Region 2 (cont.) — The Sahel",
          titleAm: "ክልል 2 — ሳሄል",
          body:
            "SAHEL:\n" +
            "• Semiarid region south of the Sahara.\n" +
            "• Transitional zone at the southern edge of the desert.\n" +
            "• Arabic 'sahil' = 'shore' → the 'shore' of the Sahara.\n" +
            "• 5,000 km stretch of savanna.\n" +
            "• Spreads west to east: Mauritania + Senegal → Somalia.\n\n" +
            "Countries: Mauritania, Senegal, Mali, Niger, Nigeria, Burkina Faso, Chad, Sudan, Eritrea.\n\n" +
            "Vegetation: grasslands, savannahs, scrub to the north, acacia trees to the south. Natural pasture for camels, pack oxen, cattle, sheep.",
          bodyAm:
            "ከሳሃራ በስተደቡብ ያለ ንፍት-ደረቅ ክልል።\n" +
            "'ሳሂል' = የሳሃራ 'የባህር ዳርቻ'።\n" +
            "5,000 ኪ.ሜ።\n" +
            "ከ9 አገሮች ጋር።",
        },
        {
          id: "n3-4",
          title: "Region 2 (cont.) — The Savanna",
          titleAm: "ክልል 2 — ሳቫና",
          body:
            "SAVANNA:\n" +
            "• Transitional region between rainforest and Sahel grassland.\n" +
            "• Tropical grassland with few trees + shrubs.\n" +
            "• Trees are DROUGHT-RESISTANT.\n" +
            "• Trees SHED LEAVES during dry season (adaptation to reduce water loss).\n\n" +
            "TWO vegetation types:\n" +
            "1) SAVANNA WOODLAND:\n" +
            "   • Widely spaced trees (insufficient soil moisture).\n" +
            "   • Dense grass layer underneath.\n" +
            "   • Park-like appearance.\n" +
            "   • Umbrella-shaped crowns, thick bark.\n" +
            "   • Some xerophytic (dry-adapted) species — small leaves + thorns.\n" +
            "   • Fire-resistant species.\n\n" +
            "2) THORN-TREE TALL GRASS SAVANNA.",
          bodyAm:
            "የሳቫና ዛፎች ደረቅ ተቋቋሚ ናቸው።\n" +
            "1) Woodland — ሰፊ ክፍተት፣ ጥላ ቅርጽ\n" +
            "2) Thorn-tree tall grass",
        },
        {
          id: "n3-5",
          title: "Region 2 (cont.) — Tropical Rainforest (Congo Basin)",
          titleAm: "ክልል 2 — የዝናብ ደን (የኮንጎ ተፋሰስ)",
          body:
            "TROPICAL RAINFOREST:\n" +
            "• Occurs north AND south of the equator.\n" +
            "• Near equator → EQUATORIAL RAINFOREST.\n" +
            "• Very DIVERSE — up to 100 tree species per km² (vs 3–4 in temperate zone).\n" +
            "• Broadleaf EVERGREEN trees dominate.\n\n" +
            "Congo Basin countries (6):\n" +
            "• Cameroon, Central African Republic, Republic of the Congo, Democratic Republic of the Congo, Gabon, Equatorial Guinea.\n\n" +
            "Other areas: Ghana, Ivory Coast, Madagascar.\n\n" +
            "Structure:\n" +
            "• Continuous canopy 25–35 m tall.\n" +
            "• Some trees up to 40 m with BUTTRESSED bases.\n" +
            "• Epiphytes, herbaceous plants, vines (lianas), ferns.\n\n" +
            "Climate: >2,000–2,250 mm rain/year, evenly distributed, high temp + humidity. Rapid decomposition. Acidic, nutrient-poor soils.",
          bodyAm:
            "6 የኮንጎ ተፋሰስ አገሮች።\n" +
            "100 የዛፍ ዝርያ/ኪ.ሜ.²።\n" +
            "Canopy 25–35 ሜ።\n" +
            "ዝናብ >2,000 ሚ.ሜ።",
        },
        {
          id: "n3-6",
          title: "Region 3 — Rift Valley & African Great Lakes",
          titleAm: "ክልል 3 — ስምጥ ሸለቆና ታላቁ ሐይቆች",
          body:
            "RIFT VALLEY:\n" +
            "• Formed by NORMAL FAULTING.\n" +
            "• Forces moving in opposite directions stretch and split the land.\n" +
            "• Creates a GRABEN = elongated block displaced downward between two faults.\n\n" +
            "Extent:\n" +
            "• Starts from Red Sea.\n" +
            "• Through Ethiopian landmass.\n" +
            "• To Lake Victoria region.\n" +
            "• Splits into EAST and WEST segments.\n" +
            "• Through Lake Malawi to Mozambique.\n" +
            "• Total length: 5,600 km.\n" +
            "• Average width: 32–80 km.\n\n" +
            "GREAT LAKES:\n" +
            "• Lake Victoria — largest in Africa (68,800 km², elev. 1,134 m).\n" +
            "• NOT in the rift valley — lies in depression between the two rifts.\n" +
            "• Many rift lakes are freshwater with great biodiversity; others are alkaline/salty.",
          bodyAm:
            "Graben = በ2 ስንጥቆች መካከል የወረደ ረዥም ብሎክ።\n" +
            "5,600 ኪ.ሜ ርዝመት።\n" +
            "ቪክቶሪያ = 68,800 ኪ.ሜ.²።\n" +
            "ቪክቶሪያ በስምጥ ሸለቆ ውስጥ አይደለም።",
        },
        {
          id: "n3-7",
          title: "Region 3 (cont.) — Ethiopian and Eritrean Highlands",
          titleAm: "ክልል 3 — የኢትዮጵያና ኤርትራ ደጋማ",
          body:
            "ETHIOPIAN AND ERITREAN HIGHLANDS:\n" +
            "• Ethiopia sits on a HIGH PLATEAU.\n" +
            "• Massive central highland complex.\n" +
            "• Divided by the deep GREAT RIFT VALLEY.\n" +
            "• Lowlands along the periphery (edges).\n\n" +
            "Ethiopia's northwestern highlands extend into ERITREA:\n" +
            "• Elevations >2,000 m.\n" +
            "• Eritrea shares NE section of the Ethiopian high plateau.\n" +
            "• Looks like rugged uneven mountains.\n" +
            "• Rises on the western scarp of the Great Rift Valley.\n" +
            "• Extends northward from Addis Ababa to the Red Sea coast.\n" +
            "• Descends to Red Sea in series of hills.\n\n" +
            "Diversity produces regional variations in climate, vegetation, soils, settlement.",
          bodyAm:
            "ኢትዮጵያ በከፍተኛ ደጋማ ላይ ናት።\n" +
            "በታላቁ ስምጥ ሸለቆ ተከፍላለች።\n" +
            "ሰሜን-ምዕራብ ደጋማ ወደ ኤርትራ ይዘልቃል (>2,000 ሜ)።",
        },
        {
          id: "n3-8",
          title: "Region 4 — Southern Africa Platform",
          titleAm: "ክልል 4 — የደቡባዊ አፍሪካ መድረክ",
          body:
            "SOUTHERN AFRICA PLATFORM (south of Congo + Tanzania):\n\n" +
            "DRAKENSBERG (Ukhahlamba) ESCARPMENT:\n" +
            "• Most recognizable landscape.\n" +
            "• Average altitude ~3,000 m above sea level.\n" +
            "• Forms boundary between KwaZulu-Natal and Lesotho.\n\n" +
            "KALAHARI DESERT:\n" +
            "• Mainly in Botswana.\n" +
            "• Arid mixture of grasslands + sand.\n" +
            "• Provides excellent grazing when rain comes.\n" +
            "• Home to game reserves + national parks.\n\n" +
            "NAMIB DESERT:\n" +
            "• Along west coast of Namibia.\n" +
            "• Shaped by COLD BENGUELA CURRENT.\n\n" +
            "HIGHVELD:\n" +
            "• Portion of South African inland plateau.\n" +
            "• Bounded by Great Karoo (S), Kalahari (W), Bushveld (N).\n" +
            "• Home to major commercial farming + Gauteng (1/3 of SA population).\n\n" +
            "Tropic of Capricorn runs through the middle of the region.",
          bodyAm:
            "ድራከንስበርግ ~3,000 ሜ።\n" +
            "ካላሃሪ = ቦትስዋና።\n" +
            "ናሚብ = ቀዝቃዛ ቤንጌላ ፍሰት።\n" +
            "Highveld = ደቡብ አፍሪካ ደጋማ።",
        },
        {
          id: "n3-9",
          title: "⚠ Remember trap — Africa's regions",
          titleAm: "⚠ አትርሳ — የአፍሪካ ክልሎች",
          body:
            "• ATLAS = Maghrib (Morocco, Algeria, Tunisia); 2,000+ km.\n" +
            "• SAHARA = largest hot desert (9.2M km²) + 10 countries.\n" +
            "• ERG = sand; REG = pebble pavement.\n" +
            "• SAHEL = 'shore' of Sahara; semiarid transition; 9 countries.\n" +
            "• SAVANNA = drought-resistant trees; sheds leaves in dry season.\n" +
            "• RAINFOREST = Congo Basin (6 countries); 100 tree species/km².\n" +
            "• RIFT VALLEY = normal faulting → graben; 5,600 km.\n" +
            "• LAKE VICTORIA = largest lake — NOT in rift valley.\n" +
            "• NAMIB = shaped by COLD Benguela Current.\n" +
            "• DRAKENSBERG = ~3,000 m; boundary KwaZulu-Natal/Lesotho.",
          bodyAm:
            "• Erg/Reg ልዩነት።\n" +
            "• ሳሄል = 'shore'።\n" +
            "• ስምጥ = graben።\n" +
            "• ቪክቶሪያ በስምጥ ውስጥ አይደለም።",
        },
      ],
    },

    // ============================================================
    // KEY DEFINITIONS & RELATIONSHIPS
    // ============================================================
    {
      id: "nFormula",
      title: "Key Definitions & Relationships — Unit 1",
      titleAm: "ዋና ትርጓሜዎችና ግንኙነቶች — ክፍል 1",
      body:
        "| Concept                     | Definition / Key Fact                              |\n" +
        "|-----------------------------|----------------------------------------------------|\n" +
        "| Landforms                   | Physical features on Earth's surface               |\n" +
        "| Major landforms             | Mountains, plateaus, plains                        |\n" +
        "| Minor landforms             | Hills, gorges, valleys, basins                     |\n" +
        "| Internal processes          | Tectonic + volcanic; build up landforms            |\n" +
        "| External processes          | Erosion by water/wind; break down landforms        |\n" +
        "| Continent (largest)         | Asia                                               |\n" +
        "| Continent (2nd largest)     | Africa                                             |\n" +
        "| Ocean (largest/deepest)     | Pacific                                            |\n" +
        "| Highest point               | Mt. Everest (8,849 m)                              |\n" +
        "| Deepest point               | Mariana Trench                                     |\n" +
        "| Largest island              | Greenland                                          |\n" +
        "| Peninsula                   | Water on 3 sides; e.g., Italy, Florida             |\n" +
        "| Isthmus                     | Narrow land with water on both sides; e.g., Panama |\n" +
        "| Africa area                 | 30.37 million km²                                  |\n" +
        "| Africa population           | ~1.3 billion (2020)                                |\n" +
        "| African sovereign states    | 54                                                 |\n" +
        "| Atlas Mountains             | Maghrib; Morocco-Algeria-Tunisia; 2,000+ km        |\n" +
        "| Sahara Desert               | Largest hot desert; 9.2M km²; 10 countries         |\n" +
        "| Erg                         | Sand sea                                           |\n" +
        "| Reg                         | Desert pavement of pebbles                         |\n" +
        "| Sahel                       | Semiarid 'shore' of Sahara; 5,000 km; 9 countries  |\n" +
        "| Savanna                     | Tropical grassland with drought-resistant trees    |\n" +
        "| Congo Basin                 | 6 countries of equatorial rainforest               |\n" +
        "| Rift Valley                 | Normal faulting → graben; 5,600 km                 |\n" +
        "| Lake Victoria               | Largest African lake; NOT in rift valley           |\n" +
        "| Namib Desert                | Shaped by cold Benguela Current                    |\n" +
        "| Drakensberg                 | Ukhahlamba escarpment; ~3,000 m                    |",
      bodyAm:
        "| ጽንሰ-ሐሳብ          | ትርጉም/እውነታ                            |\n" +
        "|-------------------|------------------------------------------|\n" +
        "| መልከዓ ምድር         | የምድር ገጽታ ቅርጾች                          |\n" +
        "| ዋና ዓይነቶች         | ተራራ፣ አምባ፣ ሜዳ                          |\n" +
        "| ከፍተኛ ነጥብ         | ኤቨረስት (8,849 ሜ)                       |\n" +
        "| ጥልቅ ነጥብ          | ማሪያና ትሬንች                          |\n" +
        "| ትልቋ ደሴት         | ግሪንላንድ                              |\n" +
        "| አፍሪካ ስፋት          | 30.37 ሚሊዮን ኪ.ሜ.²                   |\n" +
        "| ሳሃራ               | ትልቁ ሞቃት በረሃ                         |\n" +
        "| Erg / Reg          | አሸዋ / ጠጠር                             |\n" +
        "| ስምጥ ሸለቆ          | 5,600 ኪ.ሜ                             |\n" +
        "| ቪክቶሪያ           | ትልቁ ሐይቅ                             |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 1",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 1",
      body:
        "1) Landforms = internal + external processes.\n" +
        "2) 7 continents; 5 oceans.\n" +
        "3) Everest = highest; Mariana = deepest.\n" +
        "4) Greenland = largest island (NOT Australia).\n" +
        "5) Africa = 2nd largest; 2nd most populous.\n" +
        "6) 54 sovereign states in Africa.\n" +
        "7) Atlas = Maghrib (3 countries).\n" +
        "8) Sahara = largest hot desert; 10 countries.\n" +
        "9) Erg = sand; Reg = pebbles.\n" +
        "10) Sahel = 'shore' of Sahara.\n" +
        "11) Savanna trees = drought-resistant, shed leaves in dry season.\n" +
        "12) Congo Basin = 6 countries.\n" +
        "13) Rift Valley = normal faulting → graben.\n" +
        "14) Lake Victoria = largest lake but NOT in rift valley.\n" +
        "15) Namib = cold Benguela Current.\n" +
        "16) Drakensberg = boundary between KwaZulu-Natal + Lesotho.",
      bodyAm:
        "1) ውስጣዊ+ውጫዊ ሂደቶች።\n" +
        "2) 7 አህጉራት፣ 5 ውቅያኖሶች።\n" +
        "3) Erg ≠ Reg።\n" +
        "4) Rift = graben።\n" +
        "5) ቪክቶሪያ በስምጥ አይደለም።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Which is the largest continent?", options: ["Africa", "Asia", "Europe", "North America"], answer: "1", explanation: "Asia is the largest continent." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Which is the 2nd largest continent?", options: ["Africa", "Asia", "Europe", "South America"], answer: "0", explanation: "Africa is 2nd largest after Asia." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "How many continents are there?", options: ["Five", "Six", "Seven", "Eight"], answer: "2", explanation: "SEVEN continents." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Which is the largest and deepest ocean?", options: ["Atlantic", "Indian", "Pacific", "Arctic"], answer: "2", explanation: "Pacific = largest + deepest." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "What are the THREE major landforms of the world?", options: ["Hills, valleys, plateaus", "Mountains, plateaus, plains", "Gorges, basins, hills", "Islands, peninsulas, isthmuses"], answer: "1", explanation: "Mountains, plateaus, plains." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Landforms are formed by:", options: ["Only internal processes", "Only external processes", "Internal and external processes", "Only wind"], answer: "2", explanation: "Internal + external processes." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "The HIGHEST point on Earth is:", options: ["Mt. Kilimanjaro", "Mt. Everest", "Mariana Trench", "Mt. Kenya"], answer: "1", explanation: "Mt. Everest (8,849 m)." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The largest island in the world is:", options: ["Australia", "Greenland", "Madagascar", "Borneo"], answer: "1", explanation: "Greenland = largest island. Australia is a continent." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "A piece of land surrounded completely by water is:", options: ["Peninsula", "Isthmus", "Island", "Strait"], answer: "2", explanation: "Island = completely surrounded by water." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "A piece of land with water on three sides is:", options: ["Island", "Peninsula", "Isthmus", "Continent"], answer: "1", explanation: "Peninsula = water on 3 sides." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "A narrow strip of land connecting two larger lands is:", options: ["Peninsula", "Isthmus", "Island", "Strait"], answer: "1", explanation: "Isthmus connects two larger lands." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Africa's total area is:", options: ["10 million km²", "20 million km²", "30.37 million km²", "50 million km²"], answer: "2", explanation: "30.37 million km²." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Africa has how many recognized sovereign states?", options: ["30", "44", "54", "64"], answer: "2", explanation: "54 recognized sovereign states." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "The largest hot desert in the world is:", options: ["Kalahari", "Namib", "Sahara", "Gobi"], answer: "2", explanation: "Sahara = largest hot desert." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "The transition zone south of the Sahara is:", options: ["Sahel", "Savanna", "Rainforest", "Namib"], answer: "0", explanation: "Sahel = 'shore' of the Sahara." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "The largest lake in Africa is:", options: ["Lake Tanganyika", "Lake Victoria", "Lake Malawi", "Lake Tana"], answer: "1", explanation: "Lake Victoria (68,800 km²)." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "The Atlas Mountains are in:", options: ["Southern Africa", "West Africa", "North Africa", "East Africa"], answer: "2", explanation: "Atlas = North Africa (Morocco-Algeria-Tunisia)." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Which landform is the most recognizable landscape of Southern Africa?", options: ["Sahara", "Atlas Mountains", "Drakensberg escarpment", "Rift Valley"], answer: "2", explanation: "Drakensberg (Ukhahlamba) escarpment." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "Africa covers what percentage of Earth's total surface area?", options: ["3%", "6%", "20%", "30%"], answer: "1", explanation: "6% of Earth's total surface area (20% of land)." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "Africa's population (2020) was about:", options: ["500 million", "1.3 billion", "3 billion", "5 billion"], answer: "1", explanation: "~1.3 billion people (16% of world)." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "The Sahara Desert covers approximately:", options: ["4.5 million km²", "9.2 million km²", "15 million km²", "30 million km²"], answer: "1", explanation: "9,200,000 km²." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "'Erg' in the Sahara refers to:", options: ["Rocky plateau", "Reddish sand dune 'sand sea'", "Pebble desert pavement", "Oasis"], answer: "1", explanation: "ERG = sand sea." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "'Reg' in the Sahara refers to:", options: ["Sand dune", "Pebble desert pavement", "Grassland", "Salt lake"], answer: "1", explanation: "REG = desert pavement of pebbles." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "'Sahel' in Arabic means:", options: ["Desert", "Mountain", "Shore", "Rain"], answer: "2", explanation: "Sahel = 'shore' of the Sahara." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "The Congo Basin rainforest includes:", options: ["6 countries", "10 countries", "15 countries", "20 countries"], answer: "0", explanation: "Cameroon, CAR, Rep. Congo, DRC, Gabon, Equatorial Guinea = 6." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "The Rift Valley was formed by:", options: ["Volcanic eruption", "Normal faulting", "Erosion", "Wind deposition"], answer: "1", explanation: "Rift Valley = NORMAL FAULTING." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "A graben is:", options: ["Volcanic peak", "Down-dropped block between two faults", "Sand dune", "Pebble pavement"], answer: "1", explanation: "Graben = elongated block displaced downward." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "The total length of the Rift Valley System is about:", options: ["1,600 km", "3,500 km", "5,600 km", "8,000 km"], answer: "2", explanation: "5,600 km." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "Lake Victoria is:", options: ["Inside the rift valley", "Outside the rift valley (in depression between rifts)", "Salty lake", "Underground lake"], answer: "1", explanation: "Lake Victoria is NOT in the rift valley." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "Savanna trees shed their leaves in the dry season to:", options: ["Attract insects", "Reduce water loss", "Grow faster", "Increase photosynthesis"], answer: "1", explanation: "Leaf shedding = adaptation to REDUCE WATER LOSS." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Tropical rainforest can have up to how many tree species per km²?", options: ["3–4", "10", "50", "100"], answer: "3", explanation: "Up to 100 species/km² (vs 3–4 in temperate)." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "The Namib Desert was formed partly because of:", options: ["Warm Mozambique Current", "Cold Benguela Current", "Warm Guinea Current", "Equatorial rainforest"], answer: "1", explanation: "Namib = cold BENGUELA current." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "The Drakensberg escarpment's average altitude is:", options: ["500 m", "1,500 m", "3,000 m", "6,000 m"], answer: "2", explanation: "~3,000 m above sea level." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "The Kalahari Desert is mainly in:", options: ["Namibia", "Botswana", "South Africa", "Mozambique"], answer: "1", explanation: "Kalahari is mainly in BOTSWANA." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Highveld is bounded by:", options: ["Sahara, Sahel, Atlas", "Great Karoo, Kalahari, Bushveld", "Namib, Kalahari, Sahel", "Rift Valley, Drakensberg, Congo"], answer: "1", explanation: "Highveld: bounded by Great Karoo (S), Kalahari (W), Bushveld (N)." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Which statement about the mirror-image effect is FALSE?", options: ["Kalahari ≈ Sahara", "Karoo ≈ Maghreb", "Cape ≈ Mediterranean", "Atlas ≈ Drakensberg"], answer: "3", explanation: "Atlas ≈ Drakensberg is not a mirror-image pair." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Which statement is TRUE?", options: ["Lake Victoria is in the rift valley", "Lake Victoria lies in depression between two rifts", "Lake Victoria is a salt lake", "Lake Victoria is in Asia"], answer: "1", explanation: "Lake Victoria = depression between eastern and western rifts." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "The Maghrib region ('west' in Arabic) includes:", options: ["Egypt, Sudan, Ethiopia", "Morocco, Algeria, Tunisia", "Kenya, Tanzania, Uganda", "Nigeria, Ghana, Senegal"], answer: "1", explanation: "Maghrib = Morocco, Algeria, Tunisia." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "Which is the correct order of African landform regions from NORTH to SOUTH?", options: ["Atlas → Sahara → Sahel → Savanna → Rainforest → Rift Valley → Southern Platform", "Atlas → Sahel → Sahara → Rift → Southern Platform → Rainforest", "Southern Platform → Rift → Rainforest → Sahara → Atlas", "Random order"], answer: "0", explanation: "North→South: Atlas → Sahara → Sahel → Savanna → Rainforest → Rift → South." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "Which African lake is NOT in the rift valley?", options: ["Lake Tanganyika", "Lake Malawi", "Lake Victoria", "Lake Turkana"], answer: "2", explanation: "Lake Victoria is NOT in the rift valley." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Which is the boundary between KwaZulu-Natal and Lesotho?", options: ["Sahara", "Rift Valley", "Drakensberg (Ukhahlamba)", "Atlas Mountains"], answer: "2", explanation: "SE portion of Great Escarpment (Drakensberg)." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "Which is NOT one of the 6 Congo Basin countries?", options: ["Cameroon", "Gabon", "Kenya", "DRC"], answer: "2", explanation: "Kenya is NOT in the Congo Basin." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "The Niger, Mali, Chad, Sudan are all in:", options: ["Atlas", "Sahara (and Sahel)", "Rift Valley", "Namib"], answer: "1", explanation: "These are Sahara/Sahel countries." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Define landforms and list the three major types.", answer: "LANDFORMS are physical features on the Earth's surface that form the terrain of an area.\n\nThe THREE major types are:\n1) Mountains\n2) Plateaus\n3) Plains\n\nMinor landforms include hills, gorges, valleys, and basins.", explanation: "Major: mountains, plateaus, plains." },
    { id: "q45", type: "short", difficulty: "easy", stem: "Explain how internal and external processes form landforms.", answer: "INTERNAL PROCESSES (inside Earth):\n• Tectonic plate movement + volcanic activity.\n• PUSH UP mountains, plateaus, hills.\n\nEXTERNAL PROCESSES (on Earth's surface):\n• Erosion by water and wind.\n• BREAK DOWN and create minor features (gullies, valleys, gorges).\n\nBoth occur over millions of years. Example: Abbay Gorge (~1,000 m deep) cut over millions of years.", explanation: "Internal = build; External = break down." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Describe Africa's location and size.", answer: "LOCATION:\n• 2nd largest continent (after Asia).\n• 2nd most populous.\n• Bounded by Mediterranean Sea (N), Red Sea + Gulf of Aden (NE), Indian Ocean (E), Atlantic Ocean (W).\n• Equator divides Africa almost in half.\n\nSIZE:\n• Area = 30.37 million km².\n• 6% of Earth's surface; 20% of land area.\n• Population ~1.3 billion (2020) = ~16% of world.\n• 54 sovereign states.", explanation: "2nd largest, 30.37M km², 54 states." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Name the four major landform regions of Africa and list one key feature each.", answer: "1) AFRICAN ALPINE SYSTEM — Atlas Mountains (Morocco-Algeria-Tunisia, 2,000+ km).\n\n2) AFRICAN MASSIF — Sahara Desert (largest hot desert, 9.2M km²); also Sahel, Savanna, and Congo Rainforest.\n\n3) EAST AFRICAN HIGHLANDS AND RIFT SYSTEM — Rift Valley (5,600 km, normal faulting), Great Lakes, Ethiopian/Eritrean Highlands.\n\n4) SOUTHERN AFRICA PLATFORM — Drakensberg escarpment (~3,000 m), Kalahari, Namib, Highveld.", explanation: "Atlas, Sahara/Massif, Rift/Highlands, Southern Platform." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Differentiate erg and reg in the Sahara Desert.", answer: "ERG:\n• Reddish sand dune 'sand sea'.\n• Weathered from sandstone.\n• Occurs in enormous quantities.\n\nREG:\n• Desert pavement of pebbles.\n• On top of vast flat-surfaced sheets of sand.\n• Stony surface, not sandy dune.\n\nBOTH: Located in the Sahara Desert; both are surface features of the desert landscape.", explanation: "Erg = sand; Reg = pebbles." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Explain how the Rift Valley was formed and describe Lake Victoria's position.", answer: "FORMATION OF THE RIFT VALLEY:\n1) NORMAL FAULTING — forces move in OPPOSITE directions.\n2) Land is STRETCHED and SPLITS apart.\n3) The block between two faults drops DOWN → GRABEN.\n4) Results in an elongated depression — the RIFT VALLEY.\n\nEXTENT: 5,600 km; from Red Sea through Ethiopia to Mozambique; average width 32–80 km.\n\nLAKE VICTORIA:\n• Largest lake in Africa (68,800 km²; 1,134 m elevation).\n• NOT located INSIDE the rift valley.\n• Lies in a DEPRESSION between the eastern and western rifts (formed by uplift of rifts on either side).", explanation: "Normal faulting → graben; Victoria between rifts, not in." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Describe the main features of the Southern Africa Platform region.", answer: "SOUTHERN AFRICA PLATFORM (south of Congo + Tanzania):\n\n1) DRAKENSBERG (Ukhahlamba) ESCARPMENT:\n• Most recognizable landscape.\n• Average altitude ~3,000 m.\n• Boundary between KwaZulu-Natal + Lesotho.\n\n2) KALAHARI DESERT:\n• Mainly in Botswana.\n• Arid mixture of grasslands + sand.\n• Excellent grazing when it rains.\n• Game reserves + national parks.\n\n3) NAMIB DESERT:\n• West coast of Namibia.\n• Shaped by cold BENGUELA Current.\n\n4) HIGHVELD:\n• South African inland plateau.\n• Bounded by Great Karoo (S), Kalahari (W), Bushveld (N).\n• Major commercial farming + Gauteng (1/3 of SA population).\n\nTropic of Capricorn runs through the middle.", explanation: "Drakensberg, Kalahari, Namib, Highveld." },
  ],
};