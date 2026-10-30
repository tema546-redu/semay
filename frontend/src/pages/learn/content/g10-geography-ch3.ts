import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 GEOGRAPHY — UNIT 3
// NATURAL RESOURCE BASE OF AFRICA
// Source: Grade 10 Geography Student Textbook (pp. 51–86)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, definition boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10GeographyCh3: Chapter = {
  id: "ch3",
  number: 3,
  title: "Natural Resource Base of Africa",
  titleAm: "የአፍሪካ የተፈጥሮ ሀብት መሠረት",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about AFRICA'S NATURAL RESOURCES:\n" +
        "1) Overview of world's natural resources — renewable vs nonrenewable.\n" +
        "2) Drainage basins and water resources — six major basins.\n" +
        "3) Soils and mineral resources.\n" +
        "4) Vegetation and wildlife.\n\n" +
        "The WHOLE chapter reduces to FOUR key ideas:\n" +
        "• Renewable vs nonrenewable resources + sustainable use.\n" +
        "• Six major drainage basins: Nile, Congo, Niger, Zambezi, Orange, Chad.\n" +
        "• Five major soils: Arenosols, Leptosols, Cambisols, Ferralsols, Calcisols.\n" +
        "• Africa = most diverse wildlife + many national parks.\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ አራት ዋና ሐሳቦች፡\n" +
        "1) ታዳሽ vs የማይታደስ ሀብት\n" +
        "2) 6 ተፋሰሶች\n" +
        "3) 5 ዋና አፈሮች\n" +
        "4) የተለያዩ የዱር እንስሳት/ፓርኮች",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand resource types",
          titleAm: "ደረጃ 1 · የሀብት ዓይነቶች",
          body:
            "RENEWABLE resources:\n" +
            "• Can be replenished by natural processes as quickly as humans use them.\n" +
            "• Examples: sunlight, wind, water (technically).\n\n" +
            "NONRENEWABLE resources:\n" +
            "• Exist in fixed amounts; can be used up.\n" +
            "• Examples: fossil fuels (petroleum, coal), minerals.\n\n" +
            "SUSTAINABLE USE:\n" +
            "• Use in a way that does NOT lead to long-term degradation.\n" +
            "• Preserves resources for future generations.",
          bodyAm:
            "ታዳሽ: ፀሐይ፣ ንፋስ።\n" +
            "የማይታደስ: ነዳጅ፣ ማዕድን።\n" +
            "ዘላቂ አጠቃቀም = ለትውልድ ማስቀመጥ።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the six drainage basins",
          titleAm: "ደረጃ 2 · ስድስቱን ተፋሰሶች",
          body:
            "1) NILE — longest river in world (6,650 km); 86% water from Ethiopia; 11 countries.\n" +
            "2) CONGO — 2nd largest by volume; 2nd longest in Africa (4,660 km); navigable all seasons.\n" +
            "3) NIGER — 3rd longest in Africa (4,200 km); largest basin in West Africa.\n" +
            "4) ZAMBEZI — 3,540 km; Victoria Falls; Kariba Gorge.\n" +
            "5) ORANGE — longest in South Africa; Vaal tributary.\n" +
            "6) CHAD — largest INLAND drainage area; Lake Chad (shallow, seasonal).",
          bodyAm:
            "ናይል = ትረዥሙ።\n" +
            "ኮንጎ = 2ኛ በድምጽ።\n" +
            "ኒጀር = 3ኛ ርዝመት።\n" +
            "ዛምቤዚ = ቪክቶሪያ ፏፏቴ።\n" +
            "ቻድ = የውስጥ ተፋሰስ።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master the five soils",
          titleAm: "ደረጃ 3 · አምስቱን አፈሮች",
          body:
            "1) ARENOSOLS (22%) — sandy, low water/nutrient holding; from Latin 'arena' = sand.\n" +
            "2) LEPTOSOLS (17%) — shallow over hard rock; Greek 'leptos' = thin.\n" +
            "3) CAMBISOLS (11%) — young, moderately developed; Latin 'cambiare' = change.\n" +
            "4) FERRALSOLS (10%) — strongly weathered, red/yellow; Latin 'ferrum' = iron.\n" +
            "5) CALCISOLS (6%) — calcium carbonate accumulation; Latin 'calcarius' = lime-rich.",
          bodyAm:
            "Arenosols: አሸዋማ (22%)።\n" +
            "Leptosols: ጥልቀት የለውም (17%)።\n" +
            "Cambisols: ወጣት (11%)።\n" +
            "Ferralsols: ቀይ/ቢጫ (10%)።\n" +
            "Calcisols: ኖራ (6%)።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Do you know 86% of Nile water comes from Ethiopia?\n" +
            "2) Do you know Congo is navigable ALL seasons?\n" +
            "3) Do you know Lake Chad is shallow + seasonal?\n" +
            "4) Do you know the world's largest sand body (Kalahari Sands)?\n" +
            "5) Do you know Ethiopia is a leading Tantalum producer (rank 6)?",
          bodyAm:
            "1) 86% ከኢትዮጵያ?\n" +
            "2) ኮንጎ በሁሉም ወቅት?\n" +
            "3) ቻድ ጥልቀት የለውም?\n" +
            "4) ካላሃሪ አሸዋ?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Natural resources = extract + exploit from environment.\n" +
            "• 2.5% of Earth's water is FRESH.\n" +
            "• ~96.5% of Earth's water is in oceans.\n" +
            "• Nile = longest; Congo = 2nd by volume.\n" +
            "• 86% of Nile water comes from Ethiopia.\n" +
            "• 11 Nile Basin countries.\n" +
            "• Lake Chad = shallow (1.2 m mean depth).\n" +
            "• Arenosols = dominant soil (22%).\n" +
            "• Kalahari Sands = largest sand body on Earth.\n" +
            "• DRC = 1st in cobalt (51.43%); South Africa = 1st in platinum (91.3%), chromium (35.1%), manganese (32.1%).\n" +
            "• Kruger National Park (South Africa) = oldest park.",
          bodyAm:
            "• 2.5% ንጹህ ውሃ።\n" +
            "• ናይል = ትረዥም።\n" +
            "• 86% ከኢትዮጵያ።\n" +
            "• አሬኖሶልስ = 22%።\n" +
            "• ደ.ኮንጎ = ኮባልት 1ኛ።",
        },
      ],
    },

    // ============================================================
    // 3.1 OVERVIEW OF NATURAL RESOURCES
    // ============================================================
    {
      id: "n1",
      title: "3.1 Overview of Major Natural Resources of the World",
      titleAm: "3.1 የዓለም ዋና የተፈጥሮ ሀብቶች",
      body:
        "Abatu, NATURAL RESOURCES are parts of the environment that people can extract and exploit. They are divided into RENEWABLE and NONRENEWABLE.",
      bodyAm:
        "አባቱ፣ የተፈጥሮ ሀብት = ከተፈጥሮ የሚወጣ ሀብት። ታዳሽ + የማይታደስ።",
      children: [
        {
          id: "n1-1",
          title: "Renewable vs nonrenewable",
          titleAm: "ታዳሽ vs የማይታደስ",
          body:
            "RENEWABLE:\n" +
            "• Replenished by natural processes as quickly as used.\n" +
            "• Examples: sunlight, wind, water (technically renewable).\n\n" +
            "NONRENEWABLE:\n" +
            "• Exist in FIXED amounts.\n" +
            "• Can be used up.\n" +
            "• Examples: fossil fuels (petroleum, coal), minerals.",
          bodyAm:
            "ታዳሽ: ፀሐይ፣ ንፋስ።\n" +
            "የማይታደስ: ነዳጅ፣ ማዕድን።",
        },
        {
          id: "n1-2",
          title: "Sustainable use and NRM",
          titleAm: "ዘላቂ አጠቃቀም",
          body:
            "SUSTAINABLE USE:\n" +
            "• Use resources in a way + at a rate that does NOT lead to long-term degradation.\n" +
            "• Maintains potential to meet current + future generations' needs.\n\n" +
            "NATURAL RESOURCE MANAGEMENT (NRM):\n" +
            "• Sustainable utilization of land, water, air, minerals, forests, fisheries, wild flora + fauna.\n" +
            "• Provides ecosystem services.\n\n" +
            "KEY STRATEGIES:\n" +
            "• Sustainable land management.\n" +
            "• Maintaining water resources.\n" +
            "• Conserving biodiversity.\n" +
            "• Enhancing skills + capacity.\n" +
            "• Protecting marine + coastal environment.\n" +
            "• High-quality planning.",
          bodyAm:
            "ዘላቂ = ያለ መበላሸት።\n" +
            "NRM = ሁሉንም ሀብቶች በአንድነት ማስተዳደር።",
        },
        {
          id: "n1-3",
          title: "Water — the most important resource",
          titleAm: "ውሃ — በጣም አስፈላጊው ሀብት",
          body:
            "WATER:\n" +
            "• 71% of Earth's surface is water.\n" +
            "• 96.5% of water is in OCEANS (saline).\n" +
            "• Only 2.5% is FRESHWATER.\n" +
            "• Most freshwater is inaccessible (underground, ice/snow in remote areas).\n\n" +
            "KEY FRESHWATER SOURCES:\n" +
            "• Glaciers + permanent snow (68.7% of freshwater).\n" +
            "• Groundwater (30.1% of freshwater).\n" +
            "• Other (lakes, rivers, atmosphere, etc.).\n\n" +
            "Climate change → reducing freshwater availability.",
          bodyAm:
            "71% ውሃ።\n" +
            "96.5% ውቅያኖሶች።\n" +
            "2.5% ንጹህ።\n" +
            "68.7% በበረዶ።",
        },
        {
          id: "n1-4",
          title: "Other key resources — air, soil, forest, minerals, oil",
          titleAm: "ሌሎች ሀብቶች",
          body:
            "AIR:\n" +
            "• Every living thing needs oxygen.\n" +
            "• Regulates temperature; atmosphere holds gases.\n" +
            "• Air pollution → cancer, respiratory illness.\n\n" +
            "SOIL:\n" +
            "• Holds minerals + nutrients for plants.\n" +
            "• Agent of nitrogen cycle.\n" +
            "• Soil pollution → desertification + low crop production.\n\n" +
            "FOREST:\n" +
            "• Produces oxygen; absorbs CO₂.\n" +
            "• 80% of world's species in tropical rainforests.\n" +
            "• Medicinal drugs from rainforest plants.\n" +
            "• Threatened by DEFORESTATION.\n\n" +
            "MINERALS:\n" +
            "• Important for industrialization.\n" +
            "• Metallic (iron) vs nonmetallic.\n" +
            "• Nonrenewable → reuse + recycle.\n\n" +
            "OIL:\n" +
            "• Scarce nonrenewable resource.\n" +
            "• Powers transportation + manufacturing.\n" +
            "• Cause of pollution, wars, conflicts.\n" +
            "• Shift to renewables (solar, wind, water) needed.",
          bodyAm:
            "አየር: ኦክስጅን።\n" +
            "አፈር: ንጥረ ነገር።\n" +
            "ደን: 80% ዝርያ።\n" +
            "ማዕድን: ኢንዱስትሪ።\n" +
            "ነዳጅ: ብክለት + ጦርነት።",
        },
        {
          id: "n1-5",
          title: "⚠ Remember trap — Resources",
          titleAm: "⚠ አትርሳ — ሀብቶች",
          body:
            "• RENEWABLE: sun, wind, water.\n" +
            "• NONRENEWABLE: oil, coal, minerals.\n" +
            "• Water = 71% Earth's surface; 96.5% oceanic; 2.5% freshwater.\n" +
            "• 68.7% of freshwater is in glaciers + snow.\n" +
            "• 80% of world species in tropical rainforests.\n" +
            "• Sustainable use = preserves for FUTURE generations.\n" +
            "• Air pollution → cancer.\n" +
            "• Soil pollution → desertification.",
          bodyAm:
            "• 71% ውሃ።\n" +
            "• 2.5% ንጹህ።\n" +
            "• 80% ዝርያ በደን።",
        },
      ],
    },

    // ============================================================
    // 3.2 DRAINAGE AND WATER RESOURCES
    // ============================================================
    {
      id: "n2",
      title: "3.2 Major Drainage and Water Resources in Africa",
      titleAm: "3.2 የአፍሪካ ተፋሰሶችና የውሃ ሀብቶች",
      body:
        "Abatu, Africa has SIX major drainage basins: Nile, Congo, Niger, Zambezi, Orange, and Chad.",
      bodyAm:
        "አባቱ፣ 6 ተፋሰሶች፡ ናይል፣ ኮንጎ፣ ኒጀር፣ ዛምቤዚ፣ ኦራንጅ፣ ቻድ።",
      children: [
        {
          id: "n2-1",
          title: "Drainage basin and watershed",
          titleAm: "ተፋሰስና ወሰን",
          body:
            "DRAINAGE BASIN: area of land where surface water from rain converges to a single point at lower elevation.\n" +
            "• Exit point where main river joins another water body (lake, sea, ocean, etc.).\n" +
            "• Also called: catchment, drainage area, river basin, water basin.\n\n" +
            "WATERSHED: divide that separates one drainage area from another.\n\n" +
            "Parts of a drainage basin:\n" +
            "• Tributaries.\n" +
            "• Confluences.\n" +
            "• Outlet.",
          bodyAm:
            "ተፋሰስ = ውሃ የሚሰበሰብበት መሬት።\n" +
            "ወሰን = ሁለት ተፋሰሶችን የሚለይ።",
        },
        {
          id: "n2-2",
          title: "The Nile Basin",
          titleAm: "የናይል ተፋሰስ",
          body:
            "NILE RIVER:\n" +
            "• 6,650 km long — LONGEST in the world.\n" +
            "• White Nile from Lake Victoria (Tanzania/Uganda).\n" +
            "• Blue Nile (Abbay) from Ethiopia — 86% of Nile water.\n" +
            "• Main right-bank tributaries: Baro, Abbay (Blue Nile), Tekeze.\n" +
            "• Meets in Sudan → flows to Egypt → Mediterranean Sea.\n\n" +
            "Countries (11): Ethiopia, Sudan, South Sudan, Egypt, Rwanda, Tanzania, Uganda, Burundi, DRC, Eritrea, Kenya.\n\n" +
            "Economic potential: HEP in Ethiopia, Congo, Tanzania, Uganda; irrigation for Sudan + Egypt.\n\n" +
            "Navigation: limited in lower course (Sudan + South Sudan); upper course NOT navigable (rapids + waterfalls).\n\n" +
            "Sudd: largest swamp — interrupts river's course in South Sudan.",
          bodyAm:
            "6,650 ኪ.ሜ።\n" +
            "86% ከኢትዮጵያ።\n" +
            "11 አገሮች።\n" +
            "Sudd = ትልቁ ረግረግ።",
        },
        {
          id: "n2-3",
          title: "The Congo Basin",
          titleAm: "የኮንጎ ተፋሰስ",
          body:
            "CONGO RIVER:\n" +
            "• 2nd largest by VOLUME in world (after Amazon).\n" +
            "• 2nd longest in Africa (4,660 km).\n" +
            "• Drains 3.7 million km².\n" +
            "• Empties into Atlantic Ocean.\n\n" +
            "Features:\n" +
            "• Vast shallow depression with giant steps.\n" +
            "• Boyoma Falls (Kisangani) = best-known.\n" +
            "• Joined by Ubangi (right) + Kasai (left).\n" +
            "• Swampy estuary ~10 km wide at mouth.\n\n" +
            "Navigation:\n" +
            "• 14,000 km of navigable waterways in DRC alone.\n" +
            "• NAVIGABLE ALL SEASONS (unlike other African rivers).\n" +
            "• Stable flow — basin lies above and below the equator.\n\n" +
            "HEP potential:\n" +
            "• 100,000 MW total; 44,000 MW from Inga site alone.\n" +
            "• ~1/6 of known world resources.\n" +
            "• Only a fraction used so far.",
          bodyAm:
            "2ኛ በድምጽ።\n" +
            "4,660 ኪ.ሜ።\n" +
            "3.7M ኪ.ሜ.²።\n" +
            "በሁሉም ወቅት የሚንቀሳቀስ።\n" +
            "Inga = 44,000 MW።",
        },
        {
          id: "n2-4",
          title: "The Niger Basin",
          titleAm: "የኒጀር ተፋሰስ",
          body:
            "NIGER RIVER:\n" +
            "• Largest basin in WESTERN Africa.\n" +
            "• 4,200 km — 3rd longest in Africa.\n" +
            "• Rises in Futa Jalon highlands (Guinea).\n" +
            "• Empties through delta in southern Nigeria.\n\n" +
            "Tributaries:\n" +
            "• Largest: Benue (from left bank in Nigeria).\n\n" +
            "Inland Niger Delta:\n" +
            "• Formed from dried-up inland lake.\n" +
            "• Remnants of Benue trough.\n\n" +
            "Uses:\n" +
            "• Fishing (disrupted by oil pollution).\n" +
            "• Irrigation (rice, cotton, sugarcane, vegetables).\n" +
            "• HEP: Kainji Dam (Nigeria, 1960s).\n" +
            "• Navigation: >3/4 of length used by commercial shipping.",
          bodyAm:
            "ምዕራብ አፍሪካ ትልቁ።\n" +
            "4,200 ኪ.ሜ (3ኛ)።\n" +
            "Futa Jalon (Guinea)።\n" +
            "Benue = ትልቁ ገባር።\n" +
            "Kainji Dam።",
        },
        {
          id: "n2-5",
          title: "The Zambezi Basin",
          titleAm: "የዛምቤዚ ተፋሰስ",
          body:
            "ZAMBEZI RIVER:\n" +
            "• 3,540 km length.\n" +
            "• Basin area ~1,199,164 km².\n" +
            "• Numerous waterfalls — most spectacular is VICTORIA FALLS.\n" +
            "• Flows through deep gorges cut from basalt.\n" +
            "• Enters Kariba Gorge (>28 km long).\n\n" +
            "Tributaries:\n" +
            "• Kafue + Luangwa (both from left bank downstream of Kariba).\n\n" +
            "Delta: ~60 km wide at mouth.\n\n" +
            "Navigation:\n" +
            "• LITTLE importance — sandbars, shallowness, rapids, cataracts.\n" +
            "• ~2,600 km navigable by small boats.\n\n" +
            "HEP:\n" +
            "• Kariba Dam — on Zambia-Zimbabwe border.",
          bodyAm:
            "3,540 ኪ.ሜ።\n" +
            "ቪክቶሪያ ፏፏቴ።\n" +
            "Kariba Dam (Zambia-Zimbabwe)።",
        },
        {
          id: "n2-6",
          title: "The Orange Basin",
          titleAm: "የኦራንጅ ተፋሰስ",
          body:
            "ORANGE RIVER:\n" +
            "• LONGEST in South Africa.\n" +
            "• Rises in eastern highlands → Kalahari depression → South Atlantic Ocean.\n" +
            "• Major tributary: Vaal River (northern headwater).\n" +
            "• Combined length with Vaal ~2,092 km.\n\n" +
            "Navigation: IMPOSSIBLE (irregular flow, falls, rapids, silting).\n\n" +
            "HEP + irrigation: hampered by enormous waterborne SILT that clogs reservoirs.",
          bodyAm:
            "በደቡብ አፍሪካ ትረዥሙ።\n" +
            "Vaal = ገባር።\n" +
            "የመርከብ አስቸጋሪ።",
        },
        {
          id: "n2-7",
          title: "The Chad Basin",
          titleAm: "የቻድ ተፋሰስ",
          body:
            "CHAD BASIN:\n" +
            "• Largest INLAND drainage area in Africa.\n" +
            "• Main water body: Lake Chad.\n" +
            "• Shallow lake on borders of Chad, Niger, Nigeria.\n" +
            "• Size varies seasonally: ~10,360 km² to ~25,900 km².\n" +
            "• Mean depth ~1.2 meters.\n" +
            "• Located in SAHEL (semiarid strip between Sahara + savanna).\n\n" +
            "Fed by:\n" +
            "• Komadugu, Yobe, Logone, Chari rivers.\n\n" +
            "Economy:\n" +
            "• Cattle + livestock (Fulani + Hausa pastoralists).\n" +
            "• Fishing, subsistence + commercial agriculture, animal husbandry.\n" +
            "• Crops: sorghum, corn, millet, beans, vegetables.\n" +
            "• Forest products: gum arabic, honey, beeswax, firewood.\n\n" +
            "Navigation: little used (intermittent boat traffic).",
          bodyAm:
            "ትልቁ የውስጥ ተፋሰስ።\n" +
            "ሐይቁ ~1.2 ሜ ጥልቀት።\n" +
            "10,360 → 25,900 ኪ.ሜ.²።",
        },
        {
          id: "n2-8",
          title: "Problems and solutions",
          titleAm: "ችግሮችና መፍትሔዎች",
          body:
            "PROBLEMS:\n" +
            "• Seasonal fluctuations (low + irregular rainfall).\n" +
            "• Excess flow → swamps + periodic flooding.\n" +
            "• Climate variation + change (main cause).\n\n" +
            "SOLUTIONS:\n" +
            "• Sustainable use of water resources.\n" +
            "• Efficient water use.\n" +
            "• Recycling waste water.\n" +
            "• Reducing water loss in irrigation.\n" +
            "• Storing water in dams + ponds.",
          bodyAm:
            "ችግር: ወቅታዊ ለውጥ፣ ጎርፍ።\n" +
            "መፍትሔ: ዘላቂ አጠቃቀም፣ ማከማቸት።",
        },
        {
          id: "n2-9",
          title: "⚠ Remember trap — Basins",
          titleAm: "⚠ አትርሳ — ተፋሰሶች",
          body:
            "• NILE = longest world (6,650 km); 86% water from Ethiopia; 11 countries.\n" +
            "• CONGO = 2nd by volume; navigable ALL seasons; 2nd longest in Africa.\n" +
            "• NIGER = 3rd longest in Africa; Futa Jalon; Kainji Dam.\n" +
            "• ZAMBEZI = Victoria Falls; Kariba Dam.\n" +
            "• ORANGE = longest in South Africa; Vaal.\n" +
            "• CHAD = largest INLAND drainage area; Lake Chad shallow.",
          bodyAm:
            "ናይል = ትረዥም።\n" +
            "ኮንጎ = 2ኛ።\n" +
            "ዛምቤዚ = ቪክቶሪያ።\n" +
            "ቻድ = ውስጣዊ።",
        },
      ],
    },

    // ============================================================
    // 3.3 SOILS AND MINERAL RESOURCES
    // ============================================================
    {
      id: "n3",
      title: "3.3 Main Types of Soils and Mineral Resources",
      titleAm: "3.3 አፈሮችና ማዕድናት",
      body:
        "Abatu, Africa has FIVE major soil types and abundant mineral resources.",
      bodyAm:
        "አባቱ፣ 5 ዋና አፈሮች + ማዕድናት።",
      children: [
        {
          id: "n3-1",
          title: "Definition of soil",
          titleAm: "የአፈር ትርጉም",
          body:
            "SOIL: complex mixture of weathered minerals, organic + inorganic compounds, living organisms, air, water.\n\n" +
            "Key facts:\n" +
            "• Soil processes act up to 1–2 meters deep.\n" +
            "• Below that = PARENT MATERIAL.\n" +
            "• Supplies water + nutrients to plants.\n" +
            "• Protects water supplies by storing, buffering, transforming pollutants.\n" +
            "• Enables food, natural fiber, timber growth.\n" +
            "• Habitat for wildlife; reduces flood risk.",
          bodyAm:
            "አፈር = ማዕድን + ኦርጋኒክ + ህያው ነገር + አየር + ውሃ።\n" +
            "1–2 ሜ ጥልቀት።",
        },
        {
          id: "n3-2",
          title: "Five soil types",
          titleAm: "አምስቱ አፈር ዓይነቶች",
          body:
            "1) ARENOSOLS — 22% of Africa:\n" +
            "• Easily erodible sandy soil.\n" +
            "• Low water + nutrient holding capacity.\n" +
            "• Latin 'arena' = sand.\n" +
            "• Dominant soil of Africa.\n" +
            "• Kalahari Sands = largest sand body on Earth.\n\n" +
            "2) LEPTOSOLS — 17%:\n" +
            "• Shallow soil over hard rock / gravelly material.\n" +
            "• Greek 'leptos' = thin.\n" +
            "• Common in mountainous + desert regions.\n\n" +
            "3) CAMBISOLS — 11%:\n" +
            "• Young, moderately developed soils.\n" +
            "• Latin 'cambiare' = change.\n" +
            "• Lack distinct horizons.\n\n" +
            "4) FERRALSOLS — 10%:\n" +
            "• Strongly weathered, low nutrient-holding capacity.\n" +
            "• Latin 'ferrum' (iron) + 'alumen' (alum).\n" +
            "• Central, Eastern, Southern Africa.\n" +
            "• Red + yellow colors (iron oxides).\n" +
            "• 'Pseudo-sand' feel due to iron binding.\n\n" +
            "5) CALCISOLS — 6%:\n" +
            "• Significant calcium carbonate accumulation.\n" +
            "• Latin 'calcarius' = lime-rich.\n" +
            "• Found in DRY areas.\n" +
            "• Can form hardpan (calcrete) impenetrable to roots.",
          bodyAm:
            "Arenosols (22%)።\n" +
            "Leptosols (17%)።\n" +
            "Cambisols (11%)።\n" +
            "Ferralsols (10%)።\n" +
            "Calcisols (6%)።",
        },
        {
          id: "n3-3",
          title: "Mineral resources",
          titleAm: "የማዕድን ሀብቶች",
          body:
            "AFRICA'S MINERAL WEALTH (from long geological history):\n\n" +
            "KEY PRODUCERS:\n" +
            "• DRC + Zambia → >half of world's cobalt + significant copper.\n" +
            "• Guinea → bauxite (aluminum ore) — 2nd producer.\n" +
            "• South Africa + Gabon → manganese.\n" +
            "• South Africa → platinum (91.3% of reserves), chromium, manganese.\n" +
            "• Algeria + Libya → ~3% of world's petroleum reserves.\n" +
            "• Nigeria → largest petroleum producer in Africa.\n" +
            "• Coal: Mozambique, Malawi, Tanzania, Zimbabwe, South Africa.\n" +
            "• Rwanda → tantalum (2nd).\n" +
            "• Ethiopia → tantalum (6th).",
          bodyAm:
            "ደ.ኮንጎ = ኮባልት (51.43%)።\n" +
            "ደ.አፍሪካ = ፕላቲኒየም (91.3%)።\n" +
            "ጊኒ = ቦክሳይት።\n" +
            "ናይጄሪያ = ነዳጅ 1ኛ።",
        },
        {
          id: "n3-4",
          title: "Problems facing mineral resource utilization",
          titleAm: "የማዕድን ችግሮች",
          body:
            "• COLONIAL LEGACY: Europeans raced to exploit African minerals (copper 1854, diamonds 1867, gold 1880s).\n" +
            "• Railroads built to move minerals to ports, NOT to link cities.\n" +
            "• Post-independence: poor management, lack of investment, low prices, political turmoil, outdated machinery.\n" +
            "• Debt to World Bank + IMF → pressured to sell mines.\n" +
            "• Raw ores exported cheaply → high-value goods imported.\n" +
            "• Changes in world industrial demand → reduced demand for copper, iron ore.\n" +
            "• Poor links to other industries + transportation.\n" +
            "• DIAMOND SMUGGLING → lost tax revenue.\n" +
            "• Large-scale mines dominate; small companies struggle.",
          bodyAm:
            "ቅኝ ግዛት።\n" +
            "ደካማ አስተዳደር።\n" +
            "ጥሬ ማዕድን ወደ ውጭ።\n" +
            "አልማዝ ህገወጥ ንግድ።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap — Soils & minerals",
          titleAm: "⚠ አትርሳ — አፈርና ማዕድን",
          body:
            "• Arenosols = dominant (22%) + Kalahari Sands = largest sand body.\n" +
            "• Leptosols = shallow (17%); from 'leptos' = thin.\n" +
            "• Cambisols = young (11%).\n" +
            "• Ferralsols = red/yellow, iron-rich (10%).\n" +
            "• Calcisols = calcium carbonate (6%).\n" +
            "• DRC = 1st in cobalt (51.43%); South Africa = 1st in platinum (91.3%).\n" +
            "• Guinea = 2nd in bauxite (24.7%).\n" +
            "• Nigeria = largest petroleum producer in Africa.\n" +
            "• Ethiopia = 6th in tantalum (40 tons).",
          bodyAm:
            "22% Arenosols።\n" +
            "17% Leptosols።\n" +
            "11% Cambisols።\n" +
            "10% Ferralsols።\n" +
            "6% Calcisols።",
        },
      ],
    },

    // ============================================================
    // 3.4 VEGETATION AND WILDLIFE
    // ============================================================
    {
      id: "n4",
      title: "3.4 Major Vegetation and Wildlife of Africa",
      titleAm: "3.4 የአፍሪካ እፅዋትና የዱር እንስሳት",
      body:
        "Abatu, Africa has the most DIVERSE wildlife of any continent — from cheetah (fastest land animal) to ostrich (biggest bird) to elephant (largest land animal).",
      bodyAm:
        "አባቱ፣ አፍሪካ = በጣም የተለያዩ የዱር እንስሳት።",
      children: [
        {
          id: "n4-1",
          title: "Vegetation definition and factors",
          titleAm: "የእፅዋት ትርጉም",
          body:
            "VEGETATION = general term for living plants (trees, grasses) covering Earth's surface. Biologically known as FLORA.\n\n" +
            "FACTORS AFFECTING VEGETATION:\n" +
            "a) CLIMATE: temperature, precipitation, humidity, light, wind.\n" +
            "b) LANDFORM: elevation, slope orientation, degree of slope, rock type.\n" +
            "c) SOILS: chemical composition, reaction, water-holding capacity.\n" +
            "d) BIOTIC FACTORS: living organisms — competition, shading, soil fertility.",
          bodyAm:
            "እፅዋት = ተክሎች።\n" +
            "4 ወሳኝ ምክንያቶች: አየር ንብረት፣ መልከዓ ምድር፣ አፈር፣ ህያው ነገሮች።",
        },
        {
          id: "n4-2",
          title: "Tropical vegetation types",
          titleAm: "ሞቃታማ እፅዋቶች",
          body:
            "1) TROPICAL RAINFOREST (13.5% of land):\n" +
            "• Central Africa + Eastern Madagascar.\n" +
            "• Rainfall 1,000 – >2,000 mm/year.\n" +
            "• Congo Basin (Guineo-Congolian lowland).\n" +
            "• Tall dense forest >30 m; emergents 50–60 m.\n" +
            "• Multiple strata; epiphytes common.\n\n" +
            "2) TROPICAL MOIST DECIDUOUS FOREST (15.6%):\n" +
            "• Around Guineo-Congolian basin + SE coast.\n" +
            "• Dry season up to 6 months.\n" +
            "• Annual rainfall 800–1,500 mm (locally 2,000).\n\n" +
            "3) TROPICAL DRY FOREST (12.3%):\n" +
            "• Further from equator.\n" +
            "• Dry season 6–7 months.\n" +
            "• Rainfall 500–1,000 mm.\n" +
            "• Dominant vegetation = woodland.\n\n" +
            "4) TROPICAL SHRUBLAND (20.0%):\n" +
            "• Sahel + Kalahari + SW Madagascar + Somalia.\n" +
            "• Rainfall <1,000 mm (as low as 200 mm).\n" +
            "• Dominated by deciduous shrubland + Acacia.\n\n" +
            "5) TROPICAL DESERT (29.3% — LARGEST):\n" +
            "• Sahara + Karoo-Namib + Somalia coast.\n" +
            "• Rainfall <200 mm.\n" +
            "• Only xerophytes; woody vegetation in wadis.\n\n" +
            "6) TROPICAL MOUNTAIN FOREST (4.9%):\n" +
            "• Highlands above 800–1,200 m.\n" +
            "• Submontane, montane, high-elevation vegetation.\n" +
            "• Cameroon highlands, Kenya, Kivu, Ethiopian highlands.\n" +
            "• Ericaceous belt above 1,500–2,000 m.\n" +
            "• Afro-alpine shrublands above 3,000 m.",
          bodyAm:
            "Tropical rainforest 13.5%።\n" +
            "Moist deciduous 15.6%።\n" +
            "Dry forest 12.3%።\n" +
            "Shrubland 20%።\n" +
            "Desert 29.3%።\n" +
            "Mountain 4.9%።",
        },
        {
          id: "n4-3",
          title: "Subtropical vegetation",
          titleAm: "ንዑስ ሞቃታማ እፅዋቶች",
          body:
            "1) SUBTROPICAL HUMID FOREST (0.3%):\n" +
            "• Eastern coast of Southern Africa (25°–34°S).\n" +
            "• Rainfall 800–1,200 mm/year.\n" +
            "• Evergreen or semi-evergreen forest.\n\n" +
            "2) SUBTROPICAL DRY FOREST (1.1%):\n" +
            "• Mediterranean climates of North + South Africa.\n" +
            "• Long dry summer (3–6 months).\n" +
            "• Most rain in winter (400–1,000 mm).\n\n" +
            "3) SUBTROPICAL STEPPE (1.5%):\n" +
            "• Transition between dry forest + Sahara.\n" +
            "• Rainfall 200–500 mm.\n" +
            "• Long dry hot season (6–11 months).\n" +
            "• Dominated by Acacia.\n\n" +
            "4) SUBTROPICAL MOUNTAIN SYSTEMS (1.4%):\n" +
            "• Atlas Mountains (N) + Highveld/Drakensberg (S).\n" +
            "• Atlas reaches 4,165 m in Morocco.\n" +
            "• Drakensberg >3,000 m.",
          bodyAm:
            "Humid forest 0.3%።\n" +
            "Dry forest 1.1%።\n" +
            "Steppe 1.5%።\n" +
            "Mountain 1.4%።",
        },
        {
          id: "n4-4",
          title: "Wildlife — mammals, birds, reptiles, insects, marine",
          titleAm: "የዱር እንስሳት",
          body:
            "MAMMALS:\n" +
            "• Herbivores: elephants, rhinos, hippos, giraffe, buffalo.\n" +
            "• Grazers: zebras, wildebeests.\n" +
            "• Antelopes: hartebeest, gnu, dik-dik, gazelle, impala, springbok, oryx, reedbuck, eland (largest).\n" +
            "• Big cats: lions, leopards, cheetahs.\n" +
            "• Other predators: wild dogs, jackals, foxes, hyenas, civets, weasels.\n" +
            "• Primates: monkeys, chimpanzee, gorilla.\n" +
            "• Lemurs: mostly Madagascar.\n" +
            "• Endemic: Walia ibex, Nyala, giraffes, hippos, jumping hares, tenrecs, aardvark.\n\n" +
            "BIRDS:\n" +
            "• ~2,000 species.\n" +
            "• Ostrich (largest bird), hamerkop, touracos, honey guides.\n\n" +
            "REPTILES:\n" +
            "• Lizards, tortoises, crocodiles, snakes.\n" +
            "• Venomous: mamba, Egyptian cobra.\n" +
            "• Madagascar only: boa constrictors, iguanas.\n" +
            "• Amphibians: hairy frog (Cameroon).\n\n" +
            "INSECTS:\n" +
            "• Locusts (crop pests).\n" +
            "• Mosquitoes (malaria).\n" +
            "• Tsetse flies (sleeping sickness).\n" +
            "• Butterflies, dung beetles, stick insects, driver ants, termites.\n\n" +
            "MARINE LIFE:\n" +
            "• ~2,000 freshwater fish species (most of any continent).\n" +
            "• Ancient fish: lungfish, lobefins, reedfish (breathe air).\n" +
            "• Lake Nyasa: ~160 endemic fish species.",
          bodyAm:
            "2,000 የወፍ ዝርያ።\n" +
            "2,000 የንጹህ ውሃ ዓሳ።\n" +
            "ቼታ = ፈጣኑ።\n" +
            "ኦስትሪች = ትልቁ ወፍ።",
        },
        {
          id: "n4-5",
          title: "National Parks",
          titleAm: "ብሔራዊ ፓርኮች",
          body:
            "NATIONAL PARKS:\n" +
            "• Established to protect wildlife from human impact.\n" +
            "• For scientific study, education, recreation.\n" +
            "• Oldest: KRUGER NATIONAL PARK (South Africa).\n" +
            "• Eastern + Southern Africa = famous wildlife parks.\n" +
            "• West Africa = few significant parks.\n\n" +
            "MAJOR PARKS (largest):\n" +
            "• Selous Game Reserve (Tanzania) — 55,000 km².\n" +
            "• Central Kalahari Game Reserve (Botswana) — 52,000 km².\n" +
            "• Namib-Naukluft Park (Namibia) — 49,768 km².\n" +
            "• Niassa Reserve (Mozambique) — 42,000 km².\n" +
            "• Kafue (Zambia) — 22,400 km².\n" +
            "• Etosha (Namibia) — 22,270 km².\n" +
            "• Kruger (South Africa) — 19,455 km².\n" +
            "• Serengeti (Tanzania) — 14,763 km².\n" +
            "• Hwange (Zimbabwe) — 14,651 km².",
          bodyAm:
            "Kruger = ጥንታዊ።\n" +
            "Selous (Tanzania) = ትልቁ።\n" +
            "Serengeti + Tsavo = ታዋቂ።",
        },
        {
          id: "n4-6",
          title: "⚠ Remember trap — Vegetation & wildlife",
          titleAm: "⚠ አትርሳ — እፅዋትና እንስሳት",
          body:
            "• TROPICAL DESERT = LARGEST vegetation type (29.3%).\n" +
            "• TROPICAL RAINFOREST = 13.5%; Congo Basin.\n" +
            "• TROPICAL SHRUBLAND = 20%; Acacia dominant.\n" +
            "• AFRICA = most diverse wildlife.\n" +
            "• CHEETAH = fastest land animal.\n" +
            "• OSTRICH = biggest bird.\n" +
            "• ELEPHANT = largest land animal.\n" +
            "• ~2,000 bird species; ~2,000 freshwater fish species.\n" +
            "• Lake Nyasa = ~160 endemic fish.\n" +
            "• KRUGER = oldest park (South Africa).\n" +
            "• SELOUS (Tanzania) = largest park (55,000 km²).\n" +
            "• SERENGETI (Tanzania) + TSAVO (Kenya) = most famous.",
          bodyAm:
            "29.3% = ትልቁ (desert)።\n" +
            "13.5% = rainforest።\n" +
            "Kruger = ጥንታዊ።\n" +
            "Selous = ትልቁ።",
        },
      ],
    },

    // ============================================================
    // KEY DEFINITIONS & RELATIONSHIPS
    // ============================================================
    {
      id: "nFormula",
      title: "Key Definitions & Relationships — Unit 3",
      titleAm: "ዋና ትርጓሜዎችና ግንኙነቶች — ክፍል 3",
      body:
        "| Concept                       | Definition / Key Fact                                  |\n" +
        "|-------------------------------|--------------------------------------------------------|\n" +
        "| Natural resources             | Extract + exploit from environment                     |\n" +
        "| Renewable                     | Sun, wind, water                                       |\n" +
        "| Nonrenewable                  | Fossil fuels, minerals                                 |\n" +
        "| Sustainable use               | Use without long-term degradation                      |\n" +
        "| Fresh water %                 | 2.5% of Earth's water                                  |\n" +
        "| Ocean water %                 | 96.5%                                                  |\n" +
        "| Drainage basin                | Land where rain converges to single point              |\n" +
        "| Watershed                     | Divide between drainage basins                         |\n" +
        "| Nile                          | 6,650 km; longest; 86% water from Ethiopia; 11 countries |\n" +
        "| Congo                         | 2nd by volume; 4,660 km; navigable all seasons         |\n" +
        "| Niger                         | 4,200 km; 3rd longest; Kainji Dam                      |\n" +
        "| Zambezi                       | 3,540 km; Victoria Falls; Kariba Dam                   |\n" +
        "| Orange                        | Longest in SA; Vaal tributary                          |\n" +
        "| Chad                          | Largest inland basin; Lake Chad 1.2 m deep             |\n" +
        "| Arenosols                     | 22%; sandy; Kalahari Sands                             |\n" +
        "| Leptosols                     | 17%; shallow over rock                                 |\n" +
        "| Cambisols                     | 11%; young soils                                       |\n" +
        "| Ferralsols                    | 10%; red/yellow iron-rich                              |\n" +
        "| Calcisols                     | 6%; calcium carbonate                                  |\n" +
        "| DRC cobalt                    | 51.43% of world reserves                               |\n" +
        "| South Africa platinum         | 91.3% of world reserves                                |\n" +
        "| Tropical desert               | 29.3% of African vegetation (largest)                  |\n" +
        "| Tropical rainforest           | 13.5% of African vegetation                            |\n" +
        "| Kruger NP                     | Oldest park (South Africa)                             |\n" +
        "| Selous GR                     | Largest park (Tanzania, 55,000 km²)                    |",
      bodyAm:
        "| ጽንሰ-ሐሳብ         | ትርጉም                            |\n" +
        "|------------------|----------------------------------|\n" +
        "| ታዳሽ/የማይታደስ     | ፀሐይ, ንፋስ / ነዳጅ, ማዕድን        |\n" +
        "| 2.5%              | ንጹህ ውሃ                          |\n" +
        "| ናይል              | 6,650 ኪ.ሜ                       |\n" +
        "| ኮንጎ              | 2ኛ በድምጽ                        |\n" +
        "| 22% Arenosols     | ዋና አፈር                          |\n" +
        "| 29.3% desert      | ትልቁ እፅዋት                        |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 3",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 3",
      body:
        "1) Natural resources = extractable from environment.\n" +
        "2) Renewable ≠ nonrenewable.\n" +
        "3) Freshwater = 2.5% of Earth's water.\n" +
        "4) Nile = longest; Congo = 2nd by volume.\n" +
        "5) 86% of Nile water from Ethiopia; 11 countries.\n" +
        "6) Lake Chad = 1.2 m deep (shallow).\n" +
        "7) Arenosols = 22% (dominant soil).\n" +
        "8) Ferralsols = red/yellow (iron).\n" +
        "9) Kalahari Sands = largest sand body.\n" +
        "10) DRC = 1st in cobalt; South Africa = 1st in platinum.\n" +
        "11) Nigeria = largest petroleum producer in Africa.\n" +
        "12) Tropical desert = largest vegetation type (29.3%).\n" +
        "13) Congo = navigable all seasons.\n" +
        "14) Kruger = oldest park; Selous = largest.",
      bodyAm:
        "1) 2.5% ንጹህ።\n" +
        "2) ናይል = ትረዥም።\n" +
        "3) 22% Arenosols።\n" +
        "4) Kruger = ጥንታዊ።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Natural resources are:", options: ["Made by people", "Parts of environment people can extract and exploit", "Only minerals", "Only water"], answer: "1", explanation: "Natural resources = extractable parts of environment." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Renewable resources are:", options: ["Fixed amount", "Replenished as quickly as used", "Always fossil fuels", "Only minerals"], answer: "1", explanation: "Renewable = replenished by natural processes." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Which is a NONRENEWABLE resource?", options: ["Sunlight", "Wind", "Petroleum", "Water"], answer: "2", explanation: "Petroleum = nonrenewable (fossil fuel)." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "What % of Earth's water is FRESH?", options: ["10%", "5%", "2.5%", "1%"], answer: "2", explanation: "2.5% freshwater." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "What % of Earth's surface is covered by water?", options: ["50%", "60%", "71%", "80%"], answer: "2", explanation: "71% of Earth's surface." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "The longest river in the world is:", options: ["Amazon", "Nile", "Congo", "Yangtze"], answer: "1", explanation: "Nile = 6,650 km, longest." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "The longest river in Africa is:", options: ["Congo", "Niger", "Nile", "Zambezi"], answer: "2", explanation: "Nile = longest in Africa and world." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The 2nd largest river by volume in the world is:", options: ["Nile", "Congo", "Amazon", "Niger"], answer: "1", explanation: "Congo = 2nd by volume (after Amazon)." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Lake Chad is located in:", options: ["Southern Africa", "East Africa", "North Central Africa", "West Africa only"], answer: "2", explanation: "Lake Chad = borders Chad, Niger, Nigeria (North Central Africa)." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "The largest INLAND drainage area in Africa is:", options: ["Nile Basin", "Congo Basin", "Chad Basin", "Niger Basin"], answer: "2", explanation: "Chad = largest inland drainage area." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The dominant soil of Africa (22%) is:", options: ["Leptosols", "Arenosols", "Cambisols", "Ferralsols"], answer: "1", explanation: "Arenosols = 22%." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "'Arenosols' comes from Latin 'arena' meaning:", options: ["Rock", "Sand", "Clay", "Iron"], answer: "1", explanation: "Arena = sand." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Which soil is shallow over hard rock?", options: ["Arenosols", "Leptosols", "Ferralsols", "Calcisols"], answer: "1", explanation: "Leptosols = shallow (Greek 'leptos' = thin)." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Strongly weathered red/yellow soils are:", options: ["Calcisols", "Cambisols", "Ferralsols", "Leptosols"], answer: "2", explanation: "Ferralsols = red/yellow iron-rich soils." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Which country is the world's leading cobalt producer?", options: ["South Africa", "DRC", "Zambia", "Guinea"], answer: "1", explanation: "DRC = 51.43% of world cobalt." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Which country has 91.3% of world's platinum reserves?", options: ["DRC", "Guinea", "South Africa", "Nigeria"], answer: "2", explanation: "South Africa = 91.3% platinum." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "The oldest national park in Africa is:", options: ["Serengeti", "Kruger", "Selous", "Tsavo"], answer: "1", explanation: "Kruger (South Africa) = oldest." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "The largest national park in Africa is:", options: ["Kruger", "Serengeti", "Selous", "Tsavo"], answer: "2", explanation: "Selous (Tanzania) = 55,000 km²." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "The Nile is approximately how long?", options: ["4,200 km", "5,500 km", "6,650 km", "8,000 km"], answer: "2", explanation: "6,650 km." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "What % of Nile water originates in Ethiopia?", options: ["50%", "70%", "86%", "100%"], answer: "2", explanation: "86% of Nile water comes from Ethiopia." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "How many countries share the Nile Basin?", options: ["5", "8", "11", "15"], answer: "2", explanation: "11 countries." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "The largest swamp in the Nile Basin is:", options: ["Sudd", "Okavango", "Niger Delta", "Bahr el Ghazal"], answer: "0", explanation: "Sudd = largest swamp (South Sudan)." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "The Congo is unique among African rivers because:", options: ["It's the shortest", "It's navigable all seasons", "It has no tributaries", "It dries up completely in summer"], answer: "1", explanation: "Congo is navigable ALL SEASONS due to stable flow." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "The Niger River rises in:", options: ["Ethiopian highlands", "Futa Jalon highlands (Guinea)", "Mount Kenya", "Drakensberg"], answer: "1", explanation: "Niger rises in Futa Jalon highlands, Guinea." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "The most spectacular waterfall on the Zambezi is:", options: ["Boyoma Falls", "Victoria Falls", "Kariba Falls", "Inga Falls"], answer: "1", explanation: "Victoria Falls on Zambezi." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "The Kariba Dam is on the border of:", options: ["Zambia + Zimbabwe", "Ethiopia + Sudan", "Kenya + Tanzania", "Egypt + Sudan"], answer: "0", explanation: "Kariba Dam = Zambia-Zimbabwe border." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "The longest river in South Africa is:", options: ["Limpopo", "Orange", "Vaal", "Zambezi"], answer: "1", explanation: "Orange = longest in South Africa." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "Lake Chad's mean depth is approximately:", options: ["1.2 m", "5 m", "10 m", "50 m"], answer: "0", explanation: "Lake Chad = 1.2 m mean depth (very shallow)." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "Leptosols cover what % of Africa's soils?", options: ["10%", "17%", "22%", "30%"], answer: "1", explanation: "Leptosols = 17%." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "Cambisols cover what % of Africa's soils?", options: ["6%", "10%", "11%", "17%"], answer: "2", explanation: "Cambisols = 11%." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Ferralsols are common in which regions?", options: ["North Africa", "Central, Eastern, Southern Africa", "West Africa only", "Sahel only"], answer: "1", explanation: "Ferralsols = Central, Eastern, Southern Africa (10%)." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "Which natural resource produces 80% of world's species?", options: ["Oil", "Forest (tropical rainforests)", "Minerals", "Water"], answer: "1", explanation: "Tropical rainforests contain 80% of world's species." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "The tropical vegetation type covering LARGEST area in Africa is:", options: ["Tropical rainforest", "Tropical desert (29.3%)", "Tropical shrubland", "Subtropical steppe"], answer: "1", explanation: "Tropical desert = 29.3% (largest)." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Tropical rainforest covers what % of Africa's land area?", options: ["5%", "13.5%", "20%", "30%"], answer: "1", explanation: "Tropical rainforest = 13.5%." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Which African country is the leading producer of tantalum (rank 6)?", options: ["Rwanda", "DRC", "Ethiopia", "Nigeria"], answer: "2", explanation: "Ethiopia = rank 6, 40 tons." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Which statement about water resources is FALSE?", options: ["71% of Earth is water", "96.5% is in oceans", "2.5% is freshwater", "All freshwater is easily accessible"], answer: "3", explanation: "Most freshwater is NOT easily accessible (in glaciers + underground)." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "The Congo Basin is unique because:", options: ["It lies entirely north of the equator", "It has no waterfalls", "Basin lies above and below equator → stable flow", "It has no tributaries"], answer: "2", explanation: "Congo's basin spans equator → flow is stable year-round." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "Which is TRUE about the Orange River?", options: ["Easily navigable", "Waterborne silt clogs reservoirs", "Flows into Indian Ocean", "No tributaries"], answer: "1", explanation: "Orange's huge silt hampers HEP + irrigation." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "Colonial exploitation of African minerals resulted in:", options: ["Equal benefit to Africans", "Railroads linking major cities", "Raw ores exported + profits to Europe", "No mining activity"], answer: "2", explanation: "Railroads built to ports, not cities; profits went to Europe." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "Calcisols can form a hardpan (calcrete) that is:", options: ["Good for agriculture", "Impenetrable to plant roots", "Always wet", "Found only in rainforests"], answer: "1", explanation: "Calcrete = hardpan impenetrable to roots." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "The largest body of sand on Earth is:", options: ["Sahara Erg", "Kalahari Sands", "Namib Dunes", "Arabian Desert"], answer: "1", explanation: "Kalahari Sands = largest body of sand." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "Which country produces more than half the world's cobalt?", options: ["South Africa", "DRC", "Zambia", "Guinea"], answer: "1", explanation: "DRC = 51.43% of world cobalt." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "Lake Nyasa has about how many endemic fish species?", options: ["16", "60", "160", "1,600"], answer: "2", explanation: "~160 endemic fish species." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Differentiate renewable and nonrenewable resources.", answer: "RENEWABLE: resources that can be replenished by natural processes as quickly as humans use them. Examples: sunlight, wind, water (technically).\n\nNONRENEWABLE: natural resources that exist in FIXED amounts and can be used up in the future. Examples: fossil fuels (petroleum, coal) and minerals.\n\nSUSTAINABLE USE: using resources without destroying the environment, preserving for future generations.", explanation: "Renewable = replenished; Nonrenewable = fixed amount." },
    { id: "q45", type: "short", difficulty: "easy", stem: "Define drainage basin and watershed.", answer: "DRAINAGE BASIN: an area of land where surface water from rain converges to a single point at lower elevation. Usually exits where the main river joins another water body (lake, sea, ocean).\n\nWATERSHED: a divide that separates one drainage area from another.\n\nParts of a drainage basin:\n• Tributaries (smaller rivers feeding the main one).\n• Confluences (where rivers meet).\n• Outlet (exit point).", explanation: "Drainage basin = water collection area; watershed = divide." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Describe the Nile Basin.", answer: "NILE RIVER:\n• 6,650 km — LONGEST river in world.\n• White Nile from Lake Victoria.\n• Blue Nile (Abbay) from Ethiopia — 86% of water.\n• Right-bank tributaries: Baro, Abbay, Tekeze.\n• Meets in Sudan → Egypt → Mediterranean Sea.\n\nCOUNTRIES (11): Ethiopia, Sudan, South Sudan, Egypt, Rwanda, Tanzania, Uganda, Burundi, DRC, Eritrea, Kenya.\n\nECONOMIC POTENTIAL:\n• HEP in Ethiopia, Congo, Tanzania, Uganda.\n• Irrigation for Sudan + Egypt.\n• Navigation limited by rapids + waterfalls.\n\nLARGEST SWAMP: Sudd (South Sudan).", explanation: "Longest; 86% from Ethiopia; 11 countries." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Explain the five major soils of Africa.", answer: "1) ARENOSOLS (22%): sandy, low water/nutrient retention; from Latin 'arena' = sand; dominant soil of Africa; Kalahari Sands = largest sand body.\n\n2) LEPTOSOLS (17%): shallow over hard rock or gravel; Greek 'leptos' = thin; common in mountains + deserts.\n\n3) CAMBISOLS (11%): young, moderately developed; lack distinct horizons; Latin 'cambiare' = change.\n\n4) FERRALSOLS (10%): strongly weathered, low nutrient-holding capacity; Latin 'ferrum' (iron); red/yellow; in Central, Eastern, Southern Africa.\n\n5) CALCISOLS (6%): significant calcium carbonate accumulation; Latin 'calcarius' = lime-rich; in dry areas; form hardpan (calcrete).", explanation: "Arenosols, Leptosols, Cambisols, Ferralsols, Calcisols." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Explain the six major drainage basins of Africa.", answer: "1) NILE — 6,650 km; longest; 86% from Ethiopia; 11 countries.\n\n2) CONGO — 2nd by volume; 4,660 km; navigable all seasons; Inga Falls (44,000 MW potential).\n\n3) NIGER — 4,200 km; 3rd longest; Futa Jalon (Guinea); Kainji Dam.\n\n4) ZAMBEZI — 3,540 km; Victoria Falls; Kariba Dam (Zambia-Zimbabwe).\n\n5) ORANGE — longest in South Africa; Vaal tributary.\n\n6) CHAD — largest inland drainage area; Lake Chad (1.2 m deep).", explanation: "Nile, Congo, Niger, Zambezi, Orange, Chad." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Describe Africa's mineral wealth and the problems facing its utilization.", answer: "MINERAL WEALTH:\n• DRC + Zambia → >half of world's cobalt + significant copper.\n• Guinea → bauxite (2nd).\n• South Africa → platinum (91.3%), chromium, manganese.\n• Algeria + Libya → ~3% of world's petroleum.\n• Nigeria → largest petroleum producer in Africa.\n• Coal: Mozambique, Malawi, Tanzania, Zimbabwe, South Africa.\n• Ethiopia → tantalum (6th).\n\nPROBLEMS:\n• Colonial legacy (mines built for export, not local development).\n• Poor management, lack of investment, political turmoil.\n• Low selling prices for raw ores.\n• Debt → pressure to privatize mines.\n• Changes in world industrial demand.\n• Poor links to other industries + transport.\n• Diamond smuggling.\n• Large-scale mines dominate; small competitors struggle.", explanation: "Rich minerals; colonial legacy + poor management + smuggling." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Describe Africa's vegetation types and wildlife.", answer: "VEGETATION TYPES:\n• Tropical rainforest (13.5%) — Congo Basin; >2,000 mm rain; tall trees, epiphytes.\n• Tropical moist deciduous (15.6%) — up to 6 months dry.\n• Tropical dry forest (12.3%) — 6–7 months dry.\n• Tropical shrubland (20%) — Sahel, Kalahari, Somalia; Acacia.\n• Tropical desert (29.3% — largest) — Sahara, Namib, Karoo.\n• Tropical mountain forest (4.9%) — highlands >800–1,200 m.\n• Subtropical humid/dry/steppe/mountain.\n\nWILDLIFE:\n• Africa = MOST DIVERSE wildlife.\n• Cheetah (fastest land animal), ostrich (biggest bird), elephant (largest land animal).\n• ~2,000 bird species; ~2,000 freshwater fish species.\n• Endemic: Walia ibex, Nyala, lemurs (Madagascar), aardvark, tenrecs.\n\nNATIONAL PARKS:\n• Kruger (South Africa) = oldest.\n• Selous (Tanzania) = largest (55,000 km²).\n• Serengeti (Tanzania) + Tsavo (Kenya) = most famous.", explanation: "Tropical desert largest; most diverse wildlife; Kruger oldest." },
  ],
};