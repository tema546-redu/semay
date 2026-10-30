import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 GEOGRAPHY — UNIT 2
// CLIMATE OF AFRICA
// Source: Grade 10 Geography Student Textbook (pp. 25–50)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, definition boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10GeographyCh2: Chapter = {
  id: "ch2",
  number: 2,
  title: "Climate of Africa",
  titleAm: "የአፍሪካ የአየር ንብረት",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about CLIMATE — the long-term average of weather patterns (30+ years).\n\n" +
        "It has FOUR parts:\n" +
        "1) World climate regions and classification schemes (Greek, Köppen).\n" +
        "2) Africa's climate types and zones + factors controlling them.\n" +
        "3) Benefits of climate for African life.\n" +
        "4) Climate change and Africa's development vision.\n\n" +
        "The WHOLE chapter reduces to FIVE key ideas:\n" +
        "• Weather (short-term) ≠ Climate (long-term, 30+ years).\n" +
        "• Köppen classification: A, B, C, D, E, H groups.\n" +
        "• Africa has 8–9 climate regions (Equatorial, Tropical wet-dry, Semi-arid, Desert, Mediterranean, etc.).\n" +
        "• ITCZ, ocean currents, latitude, altitude, distance from sea control Africa's climate.\n" +
        "• Climate change is a serious threat to Africa's development (MDGs, Agenda 2063).\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ የአየር ንብረት = የረጅም ጊዜ (30+ ዓመት) አማካይ።\n\n" +
        "አምስቱ ዋና ሐሳቦች፡\n" +
        "• Weather ≠ Climate።\n" +
        "• Köppen A, B, C, D, E, H።\n" +
        "• 8–9 የአፍሪካ ክልሎች።\n" +
        "• ITCZ, ውቅያኖስ ፍሰቶች, ኬክሮስ, ከፍታ።\n" +
        "• የአየር ንብረት ለውጥ = ለአፍሪካ ስጋት።",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand weather vs climate",
          titleAm: "ደረጃ 1 · Weather vs Climate",
          body:
            "WEATHER (short-term):\n" +
            "• Temperature + precipitation on a certain day.\n" +
            "• State of atmosphere regarding heat/cold, wet/dry, calm/storm, clear/cloudy.\n\n" +
            "CLIMATE (long-term):\n" +
            "• AVERAGE of weather conditions over 30 years or more.\n" +
            "• Includes extreme events and probabilities.\n\n" +
            "CLIMATIC ZONES: spacious areas with climatic similarity (east-west direction around Earth).\n" +
            "CLIMATIC REGIONS: continuous geographic areas with similar climate characteristics.",
          bodyAm:
            "Weather = አጭር ጊዜ።\n" +
            "Climate = 30+ ዓመት አማካይ።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the Köppen classification",
          titleAm: "ደረጃ 2 · Köppen ምደባ",
          body:
            "WLADIMIR KÖPPEN (1846–1940):\n" +
            "• German climatologist + botanist.\n" +
            "• Classified world climates based on TEMPERATURE + PRECIPITATION.\n" +
            "• Believed natural vegetation reflects climate.\n\n" +
            "SIX principal groups (A, B, C, D, E, H):\n" +
            "• A = Humid tropical (temperature)\n" +
            "• B = Dry (precipitation)\n" +
            "• C = Humid middle-latitude, mild winters (temperature)\n" +
            "• D = Humid middle-latitude, severe winters (temperature)\n" +
            "• E = Polar (temperature)\n" +
            "• H = Highland (altitude)",
          bodyAm:
            "A = ሞቃት እርጥብ\n" +
            "B = ደረቅ\n" +
            "C = ሞቃታማ መካከለኛ\n" +
            "D = ቀዝቃዛ መካከለኛ\n" +
            "E = ፖላር\n" +
            "H = ደጋማ",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master Africa's climate types and controls",
          titleAm: "ደረጃ 3 · የአፍሪካ የአየር ንብረት ዓይነቶች",
          body:
            "AFRICA'S 8–9 CLIMATE REGIONS:\n" +
            "1) Equatorial (Tropical Wet)\n" +
            "2) Tropical Wet-and-Dry\n" +
            "3) Semi-arid\n" +
            "4) Hot Desert\n" +
            "5) Humid Subtropical\n" +
            "6) Mediterranean\n" +
            "7) Warm Temperate East Coast\n" +
            "8) Warm Temperate Continental\n" +
            "9) Mountain\n\n" +
            "CONTROLS OF AFRICA'S CLIMATE:\n" +
            "• Latitude (position near equator)\n" +
            "• Pressure systems + ITCZ (Intertropical Convergence Zone)\n" +
            "• Ocean currents (warm vs cool)\n" +
            "• Land vs water (continentality vs maritime)\n" +
            "• Altitude (lapse rate 6.4°C per 1,000 m)",
          bodyAm:
            "8–9 ክልሎች።\n" +
            "5 ወሳኝ ምክንያቶች: ኬክሮስ፣ ITCZ፣ ውቅያኖስ፣ መሬት/ውሃ፣ ከፍታ።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Did you compute lapse rate correctly (6.4°C/1,000 m)?\n" +
            "2) Did you distinguish warm vs cool ocean currents?\n" +
            "3) Did you know ITCZ position (June vs December)?\n" +
            "4) Did you know Cold Benguela → Namib Desert?\n" +
            "5) Did you know Warm Mozambique → rainfall + rich fishing?",
          bodyAm:
            "1) Lapse rate = 6.4°C/1000 ሜ?\n" +
            "2) ቀዝቃዛ vs ሞቃት ፍሰቶች?\n" +
            "3) ITCZ ቦታ?\n" +
            "4) Benguela → ናሚብ?\n" +
            "5) Mozambique → ዝናብ?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Weather = short-term; Climate = long-term (30+ years).\n" +
            "• Köppen: A (tropical), B (dry), C (mild mid-lat), D (severe mid-lat), E (polar), H (highland).\n" +
            "• Africa = MOST TROPICAL continent (equator, Tropic of Cancer, Tropic of Capricorn all pass through).\n" +
            "• Equatorial: ~26°C avg, diurnal range 3°C, convectional rainfall.\n" +
            "• Hot Desert: diurnal range > annual range; Azizia (Libya) 58°C world record.\n" +
            "• ITCZ shifts June (N Africa ~13°N) ↔ December (S, West Africa, Madagascar).\n" +
            "• Warm currents (Guinea, Mozambique) → rainfall.\n" +
            "• Cool currents (Canary, Benguela) → dry + rich fishing.\n" +
            "• Lapse rate = 6.4°C per 1,000 m.\n" +
            "• Mountain regions: relief rainfall on windward side; dry leeward (rain shadow).\n" +
            "• Climate change → threat to MDGs + Africa 2063.",
          bodyAm:
            "• Weather ≠ Climate።\n" +
            "• Köppen A-E + H።\n" +
            "• ITCZ ይንቀሳቀሳል።\n" +
            "• ቀዝቃዛ = ደረቅ + ዓሳ።\n" +
            "• 6.4°C/1000 ሜ።",
        },
      ],
    },

    // ============================================================
    // 2.1 WORLD CLIMATIC REGIONS
    // ============================================================
    {
      id: "n1",
      title: "2.1 Overview of World Climatic Regions and Types",
      titleAm: "2.1 የዓለም የአየር ንብረት ክልሎች",
      body:
        "Abatu, the world has several CLIMATIC ZONES — areas of climatic similarity spreading east-west around the Earth. The most widely used classification is Köppen's.",
      bodyAm:
        "አባቱ፣ Köppen ምደባ በጣም የታወቀ ነው።",
      children: [
        {
          id: "n1-1",
          title: "Climate vs weather",
          titleAm: "Climate vs Weather",
          body:
            "CLIMATE: average of weather conditions in a place over a long period (30+ years). It includes extreme events and probabilities — the sum of all statistical weather information.\n\n" +
            "WEATHER: short-term atmospheric condition (temperature + precipitation on a certain day, state of atmosphere, heat/cold, wet/dry, calm/storm, clear/cloudy).",
          bodyAm:
            "Climate = ረጅም ጊዜ።\n" +
            "Weather = አጭር ጊዜ።",
        },
        {
          id: "n1-2",
          title: "Ancient Greek classification",
          titleAm: "የጥንት ግሪክ ምደባ",
          body:
            "One of the FIRST climate classification systems:\n" +
            "• Ancient Greeks divided each hemisphere into 3 zones:\n" +
            "   1) TORRID (tropical)\n" +
            "   2) TEMPERATE\n" +
            "   3) FRIGID (cold)\n\n" +
            "This early scheme was simple but foundational.",
          bodyAm:
            "3 ዞኖች: ሞቃት፣ መካከለኛ፣ ቀዝቃዛ።",
        },
        {
          id: "n1-3",
          title: "Modern classification criteria",
          titleAm: "ዘመናዊ ምደባ",
          body:
            "Modern climatologists split Earth into approximately FIVE major types:\n" +
            "1) Tropical\n" +
            "2) Dry\n" +
            "3) Temperate\n" +
            "4) Continental\n" +
            "5) Polar\n\n" +
            "Based on factors like altitude, air pressure, wind patterns, latitude, mountains, oceans.",
          bodyAm:
            "5 ዓይነቶች: ሞቃት፣ ደረቅ፣ መካከለኛ፣ አህጉራዊ፣ ፖላር።",
        },
        {
          id: "n1-4",
          title: "Köppen classification (A, B, C, D, E, H)",
          titleAm: "Köppen ምደባ",
          body:
            "Wladimir Köppen (1846–1940) — German climatologist + botanist.\n\n" +
            "Classification based on TEMPERATURE + PRECIPITATION:\n" +
            "• A = Humid tropical (temperature)\n" +
            "• B = Dry (precipitation)\n" +
            "• C = Humid middle-latitude with mild winters (temperature)\n" +
            "• D = Humid middle-latitude with severe winters (temperature)\n" +
            "• E = Polar (temperature)\n" +
            "• H = Highland (altitude)\n\n" +
            "Four groups (A, C, D, E) defined by TEMPERATURE. B by PRECIPITATION. H by ALTITUDE.",
          bodyAm:
            "A = ሞቃት\nB = ደረቅ\nC = ሞቃታማ መካከለኛ\nD = ቀዝቃዛ መካከለኛ\nE = ፖላር\nH = ደጋማ",
        },
        {
          id: "n1-5",
          title: "Four global climate zones",
          titleAm: "አራቱ የዓለም የአየር ንብረት ዞኖች",
          body:
            "1) TROPICAL ZONE (0°–23.5°):\n" +
            "• Near equator; Sun perpendicular at noon; very warm.\n" +
            "• High evaporation → moist air → frequent cloud cover.\n\n" +
            "2) SUBTROPICS (23.5°–40°):\n" +
            "• Highest radiation in summer.\n" +
            "• Most world deserts located here.\n\n" +
            "3) TEMPERATE ZONE (40°–60°):\n" +
            "• Lower sun angle; cooler.\n" +
            "• Significant seasonal + day-length variation.\n" +
            "• Regular precipitation; longer vegetation period.\n\n" +
            "4) COLD ZONE (60°–90°):\n" +
            "• Very low sun angle; polar days in summer.\n" +
            "• Vegetation only a few months per year.",
          bodyAm:
            "Tropical: 0°–23.5°\n" +
            "Subtropics: 23.5°–40°\n" +
            "Temperate: 40°–60°\n" +
            "Cold: 60°–90°",
        },
        {
          id: "n1-6",
          title: "⚠ Remember trap — World climate",
          titleAm: "⚠ አትርሳ — የዓለም አየር ንብረት",
          body:
            "• Climate = 30+ years average; Weather = short-term.\n" +
            "• Ancient Greeks: torrid, temperate, frigid.\n" +
            "• Köppen: A, B, C, D, E, H.\n" +
            "• A, C, D, E = TEMPERATURE; B = PRECIPITATION; H = ALTITUDE.\n" +
            "• Most DESERTS are in subtropics (23.5°–40°).\n" +
            "• Four global zones: tropical, subtropics, temperate, cold.\n" +
            "• Köppen classification remains widely used.",
          bodyAm:
            "• Climate = 30+ ዓመት።\n" +
            "• Köppen A-H።\n" +
            "• በረሃዎች በsubtropics።",
        },
      ],
    },

    // ============================================================
    // 2.2 CLIMATE TYPES AND ZONES OF AFRICA
    // ============================================================
    {
      id: "n2",
      title: "2.2 Climate Types and Zones of Africa",
      titleAm: "2.2 የአፍሪካ የአየር ንብረት ዓይነቶችና ዞኖች",
      body:
        "Abatu, Africa is the MOST TROPICAL of all continents — the equator, Tropic of Cancer, and Tropic of Capricorn all pass through it.",
      bodyAm:
        "አባቱ፣ አፍሪካ = በጣም ሞቃታማ አህጉር።",
      children: [
        {
          id: "n2-1",
          title: "Eight/nine climate regions of Africa",
          titleAm: "8–9 የአፍሪካ ክልሎች",
          body:
            "1) EQUATORIAL (Tropical Wet)\n" +
            "2) TROPICAL WET-AND-DRY\n" +
            "3) SEMI-ARID\n" +
            "4) HOT DESERT\n" +
            "5) HUMID SUBTROPICAL\n" +
            "6) MEDITERRANEAN\n" +
            "7) WARM TEMPERATE EAST COAST\n" +
            "8) WARM TEMPERATE CONTINENTAL\n" +
            "9) MOUNTAIN",
          bodyAm:
            "ሞቃታማ፣ ደረቅ፣ ከፊል ደረቅ፣ በረሃ፣ ሞቃታማ እርጥብ፣ ሜዲትራኒያን፣ ሞቃት ምስራቅ፣ ሞቃት አህጉራዊ፣ ደጋማ።",
        },
        {
          id: "n2-2",
          title: "Equatorial climate",
          titleAm: "ሞቃታማ እርጥብ አየር ንብረት",
          body:
            "EQUATORIAL (Tropical Wet):\n" +
            "• Lowland areas between 5°N and 5°S.\n" +
            "• Central Africa: DRC, Gabon, Cameroon; S. Nigeria, Ghana, Benin, Sierra Leone.\n" +
            "• Modified in highland + coastal East Africa (cooler).\n\n" +
            "Temperature:\n" +
            "• Average ~26°C year-round.\n" +
            "• Hottest months: March + September (Sun overhead).\n" +
            "• Diurnal range = only 3°C.\n\n" +
            "Rainfall:\n" +
            "• CONVECTIONAL.\n" +
            "• Heavy cloud cover, high humidity.\n" +
            "• TWO peak periods (double ITCZ passage).\n" +
            "• Wettest region in Africa.",
          bodyAm:
            "~26°C።\n" +
            "Diurnal range = 3°C።\n" +
            "Convectional ዝናብ።\n" +
            "በጣም እርጥብ።",
        },
        {
          id: "n2-3",
          title: "Tropical wet-and-dry (savanna) climate",
          titleAm: "ሞቃታማ እርጥብ-ደረቅ (ሳቫና)",
          body:
            "TROPICAL WET-AND-DRY:\n" +
            "• Often called 'savanna climate'.\n" +
            "• Covers ~half of Africa's surface.\n" +
            "• Extends toward equator from semi-arid areas.\n\n" +
            "Rainfall:\n" +
            "• SEASONAL — up to 6 months of rain (high-sun period).\n" +
            "• Dry the rest of year.\n\n" +
            "Harmattan:\n" +
            "• Warm, dry, northeasterly/easterly wind.\n" +
            "• Blows out of southern Sahara during low-sun period.\n" +
            "• Carries sand + dust.\n\n" +
            "Regions:\n" +
            "• Eastern Africa: Sudan, Ethiopia, Kenya, Tanzania, Somalia.\n" +
            "• Central Africa: Zambia, Malawi, Angola, Namibia, Botswana, Zimbabwe.",
          bodyAm:
            "6 ወር ዝናብ፣ 6 ወር ደረቅ።\n" +
            "Harmattan = ደረቅ የሰሜን ምስራቅ ንፋስ።",
        },
        {
          id: "n2-4",
          title: "Hot desert climate",
          titleAm: "በረሃ አየር ንብረት",
          body:
            "HOT DESERT:\n" +
            "• Little or no rainfall.\n" +
            "• Sahara + Kalahari = dry continental tropical air.\n" +
            "• Northern Kenya–Somali desert = dry because of stable maritime air over cool offshore water.\n\n" +
            "Temperature:\n" +
            "• Daytime 30–40°C; Sahara sometimes >40°C.\n" +
            "• Highest ever recorded: 58°C in Azizia, Libya (also world record).\n" +
            "• Night <10°C.\n" +
            "• DIURNAL range > ANNUAL range.\n\n" +
            "Skies clear → heat lost quickly at night.",
          bodyAm:
            "58°C = ዓለም ሪከርድ (Azizia, Libya)።\n" +
            "Diurnal range > annual range።",
        },
        {
          id: "n2-5",
          title: "Mediterranean climate",
          titleAm: "ሜዲትራኒያን አየር ንብረት",
          body:
            "MEDITERRANEAN:\n" +
            "• Also called Warm Temperate Western Margin Climate.\n" +
            "• Very small area of Africa.\n" +
            "• Mediterranean Sea shores + southwestern tip of Africa.\n\n" +
            "Temperature:\n" +
            "• ~10°C in winter.\n" +
            "• ~21°C in summer.\n\n" +
            "Rainfall:\n" +
            "• WINTER only (Dec–Jan in North Africa; June–July in South Africa).\n" +
            "• ~500–750 mm/year.\n" +
            "• Brought by WESTERLY winds.\n\n" +
            "Summer: dry winds from land to sea. Winter: moist westerly winds from sea to land.",
          bodyAm:
            "ክረምት ዝናብ (westerlies)።\n" +
            "በጋ ደረቅ።",
        },
        {
          id: "n2-6",
          title: "Other climate regions",
          titleAm: "ሌሎች ክልሎች",
          body:
            "SEMI-ARID:\n" +
            "• Fringes deserts; greater part south of Zambezi.\n" +
            "• More rain than desert (within reach of ITCZ).\n" +
            "• Temperatures similar to desert.\n\n" +
            "HUMID SUBTROPICAL:\n" +
            "• Eastern side of continents, 20°–35° N/S.\n" +
            "• Confined to southeastern coast of South Africa.\n" +
            "• Warm + wet.\n\n" +
            "WARM TEMPERATE EAST COAST:\n" +
            "• 30°–40° N/S.\n" +
            "• Eastern South Africa (Natal, Cape) + Mozambique.\n" +
            "• Influenced by WARM Mozambique current + SE trade winds.\n\n" +
            "WARM TEMPERATE CONTINENTAL:\n" +
            "• Interior of South Africa (between Drakensberg + Kalahari).\n" +
            "• Low rainfall (~700 mm/yr).\n\n" +
            "MOUNTAIN:\n" +
            "• High mountains of Kenya, Ethiopia, Great Lakes region.\n" +
            "• Relief rainfall on windward slopes.\n" +
            "• Rain shadow on leeward slopes.\n" +
            "• Snow on peaks (e.g., Kilimanjaro).",
          bodyAm:
            "Semi-arid: በረሃ ዳርቻ።\n" +
            "Humid subtropical: SE South Africa።\n" +
            "East coast: Mozambique current።\n" +
            "Continental: interior SA።\n" +
            "Mountain: relief rainfall።",
        },
        {
          id: "n2-7",
          title: "ITCZ — the Intertropical Convergence Zone",
          titleAm: "ITCZ",
          body:
            "ITCZ = INTER-TROPICAL CONVERGENCE ZONE.\n\n" +
            "• Located where NE Trade Winds (Harmattan) + SW Trade Winds (Monsoon) converge at equator.\n" +
            "• Moves with the seasonal movement of the Sun.\n\n" +
            "Position:\n" +
            "• June (N summer): ~13°N — southern boundary of Sahara.\n" +
            "• December (N winter): southward — West African coast, Congo basin, Madagascar.\n\n" +
            "Effects:\n" +
            "• Controls rainfall distribution + climate zones.\n" +
            "• Climatic zones symmetrical around equator.",
          bodyAm:
            "ITCZ = የንፋሶች መገናኛ ዞን።\n" +
            "በሰኔ ~13°N።\n" +
            "በታህሳስ ወደ ደቡብ።",
        },
        {
          id: "n2-8",
          title: "Ocean currents",
          titleAm: "የውቅያኖስ ፍሰቶች",
          body:
            "WARM CURRENTS:\n" +
            "• Move from low to high latitudes.\n" +
            "• Supply moisture → RAINFALL on adjacent coasts.\n" +
            "• AFRICA: Warm GUINEA current (West), Warm MOZAMBIQUE current (SE).\n\n" +
            "COOL CURRENTS:\n" +
            "• Cause moisture to condense offshore → dry conditions.\n" +
            "• Create RICH FISHING GROUNDS.\n" +
            "• AFRICA: Cool CANARY (W Sahara coast), Cool BENGUELA (W Kalahari/Namibia).\n\n" +
            "Example: Namib Desert shaped by Cool Benguela.",
          bodyAm:
            "ሞቃት: Guinea, Mozambique።\n" +
            "ቀዝቃዛ: Canary, Benguela (ዓሳ)።\n" +
            "ናሚብ = Benguela።",
        },
        {
          id: "n2-9",
          title: "Continentality and altitude",
          titleAm: "አህጉራዊነትና ከፍታ",
          body:
            "CONTINENTALITY (Land vs Water):\n" +
            "• Interior has no large water bodies → extreme temperature range.\n" +
            "• Land heats/cools faster than water.\n" +
            "• Continental climates: extreme (e.g., Timbuktu, Mali).\n" +
            "• Maritime climates: mild (coastal).\n\n" +
            "ALTITUDE:\n" +
            "• Temperature decreases with altitude.\n" +
            "• LAPSE RATE = 6.4°C per 1,000 m.\n" +
            "• High peaks have permanent snow (Kilimanjaro, on equator).\n" +
            "• Ethiopian highlands: cool temperatures.",
          bodyAm:
            "Interior = extreme።\n" +
            "Coast = mild።\n" +
            "Lapse rate = 6.4°C/1000 ሜ።",
        },
        {
          id: "n2-10",
          title: "⚠ Remember trap — Africa's climate",
          titleAm: "⚠ አትርሳ — የአፍሪካ አየር ንብረት",
          body:
            "• Africa = MOST TROPICAL continent (equator + both tropics pass through).\n" +
            "• Equatorial: ~26°C, diurnal 3°C, convectional rain.\n" +
            "• Hot Desert: diurnal > annual; 58°C world record (Azizia, Libya).\n" +
            "• ITCZ shifts June (N) ↔ December (S).\n" +
            "• Harmattan = dry NE wind from Sahara.\n" +
            "• Warm currents (Guinea, Mozambique) → rainfall.\n" +
            "• Cool currents (Canary, Benguela) → dry + fishing.\n" +
            "• Lapse rate = 6.4°C/1,000 m.\n" +
            "• Mountain: relief rainfall windward; dry leeward.\n" +
            "• Mediterranean: winter rain only (westerlies).",
          bodyAm:
            "• 26°C፣ 3°C diurnal።\n" +
            "• 58°C = ዓለም ሪከርድ።\n" +
            "• Benguela = ደረቅ።\n" +
            "• 6.4°C/1000 ሜ።",
        },
      ],
    },

    // ============================================================
    // 2.3 BENEFITS OF CLIMATE
    // ============================================================
    {
      id: "n3",
      title: "2.3 Benefits of Climate for Life of People of Africa",
      titleAm: "2.3 የአየር ንብረት ጥቅሞች",
      body:
        "Abatu, climate affects nearly EVERY aspect of our lives — food, clothes, health, recreation, settlement, and the future.",
      bodyAm:
        "አባቱ፣ አየር ንብረት ሁሉንም የህይወት ጎን ይነካል።",
      children: [
        {
          id: "n3-1",
          title: "Climate and agriculture",
          titleAm: "አየር ንብረትና እርሻ",
          body:
            "• Agriculture = backbone of Africa's economy.\n" +
            "• ~70% of labor force; >25% of GDP.\n" +
            "• Highly climate-dependent (rain-fed).\n" +
            "• Needs steady mix of sun, warmth, and rains.\n\n" +
            "Africa = highly affected by climate change because:\n" +
            "• Major landmass lies across warming tropics.\n" +
            "• Limited human, social, and economic capacity to adapt.\n" +
            "• Small-scale/subsistence farmers → few financial resources.",
          bodyAm:
            "~70% ሠራተኛ፣ >25% GDP።\n" +
            "የዝናብ ጥገኛ።",
        },
        {
          id: "n3-2",
          title: "Climate and health",
          titleAm: "አየር ንብረትና ጤና",
          body:
            "Climate impacts human health by affecting environmental + social determinants:\n" +
            "• Floods → drownings.\n" +
            "• Drought → crop failure, hunger.\n" +
            "• Temperature extremes → exposure risk.\n" +
            "• Complex processes → disease epidemics, conflicts.\n\n" +
            "Africa = 'climate-vulnerable' continent.\n" +
            "• Rainfall variability + hydrological extremes = significant harm.\n" +
            "• Anthropogenic climate change adds to risk.",
          bodyAm:
            "ጎርፍ → መስመት።\n" +
            "ድርቅ → ረሃብ።\n" +
            "አፍሪካ = 'climate-vulnerable'።",
        },
        {
          id: "n3-3",
          title: "Climate and water resources",
          titleAm: "አየር ንብረትና ውሃ",
          body:
            "• Water = most important natural resource.\n" +
            "• Stream flow, river volume, groundwater depend on climate.\n" +
            "• Persistent climate change → shrinkage in surface water + streams/rivers.\n" +
            "• Water supply in Africa at risk.",
          bodyAm:
            "የወንዞች/የከርሰ ምድር ውሃ በአየር ንብረት ላይ የተመሠረተ።",
        },
        {
          id: "n3-4",
          title: "⚠ Remember trap — Benefits",
          titleAm: "⚠ አትርሳ — ጥቅሞች",
          body:
            "• Agriculture = ~70% of Africa's labor force, >25% of GDP.\n" +
            "• Africa = highly climate-vulnerable.\n" +
            "• Floods → drowning; Drought → hunger.\n" +
            "• Climate change reduces surface water availability.\n" +
            "• Regions with EXTREME climates (deserts, rainforests, polar) have fewer people.\n" +
            "• Regions with moderate climates tend to be OVERPOPULATED.",
          bodyAm:
            "~70% ሠራተኛ፣ >25% GDP።\n" +
            "ጎርፍ → መስመት።\n" +
            "ድርቅ → ረሃብ።",
        },
      ],
    },

    // ============================================================
    // 2.4 CLIMATE CHANGE AND AFRICA'S VISION
    // ============================================================
    {
      id: "n4",
      title: "2.4 Climate Change and Its Challenges to Africa's Development Vision",
      titleAm: "2.4 የአየር ንብረት ለውጥና የአፍሪካ ልማት ራዕይ",
      body:
        "Abatu, CLIMATE CHANGE is a serious threat to Africa's development — affecting agriculture, water, health, and political stability.",
      bodyAm:
        "አባቱ፣ የአየር ንብረት ለውጥ = ለአፍሪካ ልማት ስጋት።",
      children: [
        {
          id: "n4-1",
          title: "Climate variability vs climate change",
          titleAm: "Variability vs Change",
          body:
            "CLIMATE VARIABILITY:\n" +
            "• Natural internal processes OR anthropogenic external forcing.\n" +
            "• Occurs WITH or WITHOUT human action.\n\n" +
            "CLIMATE CHANGE:\n" +
            "• Change in state of climate system.\n" +
            "• Identified by changes in average conditions + variability.\n" +
            "• Persists for extended period (decades or longer).\n" +
            "• Due to natural AND/OR anthropogenic drivers.",
          bodyAm:
            "Variability = ተፈጥሯዊ።\n" +
            "Change = ዘላቂ ለውጥ።",
        },
        {
          id: "n4-2",
          title: "Africa's vulnerability",
          titleAm: "የአፍሪካ ተጋላጭነት",
          body:
            "According to IPCC, Africa's vulnerability is driven by:\n" +
            "• Weak adaptive capacity.\n" +
            "• High dependence on ecosystem goods for livelihoods.\n" +
            "• Less developed agricultural production systems.\n\n" +
            "Predicted impacts:\n" +
            "• Higher temperatures.\n" +
            "• Rising sea levels.\n" +
            "• Changing rainfall patterns.\n" +
            "• Increased climate variability.",
          bodyAm:
            "IPCC: ደካማ የመላመድ አቅም።\n" +
            "ከፍተኛ የስነ-ምህዳር ጥገኝነት።",
        },
        {
          id: "n4-3",
          title: "Consequences for Africa",
          titleAm: "የአፍሪካ ውጤቶች",
          body:
            "Negative impacts:\n" +
            "• Lower agricultural production.\n" +
            "• Food insecurity in Sub-Saharan Africa.\n" +
            "• Higher temperatures.\n" +
            "• Drying soils.\n" +
            "• Increased pests/diseases.\n" +
            "• Desertification.\n" +
            "• Floods + deforestation + erosion.\n\n" +
            "Impacts MDGs + Africa 2063 + development policies.\n" +
            "Pressure on: agriculture, water, health, political stability.",
          bodyAm:
            "የምግብ ዋስትና መጓደል።\n" +
            "በረሃማነት።\n" +
            "MDGs + 2063 ላይ ጫና።",
        },
        {
          id: "n4-4",
          title: "Four reasons Africa is seriously affected",
          titleAm: "አራቱ ምክንያቶች",
          body:
            "1) African society is closely coupled with climate system — 100s of millions depend on rainfall for food.\n\n" +
            "2) African climate system is controlled by an extremely complex mix of large-scale weather systems.\n\n" +
            "3) Degree of expected climate change is LARGE — the two most extensive land-based end-of-century projected decreases in rainfall anywhere on the planet occur over Africa (North + South).\n\n" +
            "4) Capacity for adaptation is LOW.",
          bodyAm:
            "1) ጥልቅ ግንኙነት\n" +
            "2) ውስብስብ የአየር ስርዓት\n" +
            "3) ትልቅ ለውጥ\n" +
            "4) ዝቅተኛ የመላመድ አቅም",
        },
        {
          id: "n4-5",
          title: "⚠ Remember trap — Climate change",
          titleAm: "⚠ አትርሳ — የአየር ንብረት ለውጥ",
          body:
            "• Variability = natural; Change = long-term shift.\n" +
            "• Africa = most vulnerable continent.\n" +
            "• IPCC = Intergovernmental Panel on Climate Change.\n" +
            "• Weak adaptive capacity + ecosystem dependence + less developed agriculture = high vulnerability.\n" +
            "• Impacts: agriculture, food security, water, health.\n" +
            "• Climate change → threat to MDGs + Africa 2063.\n" +
            "• Two projected major rainfall declines: North + South Africa.",
          bodyAm:
            "• Variability ≠ Change።\n" +
            "• IPCC = ዓለም አቀፍ ፓነል።\n" +
            "• MDGs + 2063 ላይ ጫና።",
        },
      ],
    },

    // ============================================================
    // KEY DEFINITIONS & RELATIONSHIPS
    // ============================================================
    {
      id: "nFormula",
      title: "Key Definitions & Relationships — Unit 2",
      titleAm: "ዋና ትርጓሜዎችና ግንኙነቶች — ክፍል 2",
      body:
        "| Concept                       | Definition / Key Fact                                  |\n" +
        "|-------------------------------|--------------------------------------------------------|\n" +
        "| Weather                       | Short-term atmospheric condition                       |\n" +
        "| Climate                       | Long-term (30+ years) average of weather               |\n" +
        "| Köppen groups                 | A (tropical), B (dry), C/D (mid-lat), E (polar), H (highland) |\n" +
        "| Tropical zone                 | 0°–23.5°                                               |\n" +
        "| Subtropics                    | 23.5°–40° (most deserts here)                          |\n" +
        "| Temperate zone                | 40°–60°                                                |\n" +
        "| Cold zone                     | 60°–90°                                                |\n" +
        "| Equatorial avg temp           | ~26°C; diurnal range 3°C                               |\n" +
        "| Convectional rain             | Main rain type in equatorial Africa                    |\n" +
        "| Harmattan                     | Dry NE wind from Sahara                                |\n" +
        "| Azizia (Libya) record         | 58°C (highest ever recorded)                           |\n" +
        "| ITCZ June position            | ~13°N                                                  |\n" +
        "| Warm currents                 | Guinea, Mozambique                                     |\n" +
        "| Cool currents                 | Canary, Benguela (creates rich fishing)                |\n" +
        "| Lapse rate                    | 6.4°C per 1,000 m                                      |\n" +
        "| Relief rainfall               | Caused by air rising over mountains                    |\n" +
        "| Rain shadow                   | Dry leeward side of mountains                          |\n" +
        "| Mediterranean rainfall        | Winter only (westerlies)                               |\n" +
        "| IPCC                          | Intergovernmental Panel on Climate Change              |\n" +
        "| Climate variability           | Natural changes + anthropogenic forcing                |\n" +
        "| Climate change                | Long-term shift (decades+)                             |",
      bodyAm:
        "| ጽንሰ-ሐሳብ          | ትርጉም                                |\n" +
        "|-------------------|--------------------------------------|\n" +
        "| Weather           | አጭር ጊዜ                             |\n" +
        "| Climate           | 30+ ዓመት አማካይ                        |\n" +
        "| Tropical          | 0°–23.5°                             |\n" +
        "| Subtropics        | 23.5°–40°                            |\n" +
        "| Equatorial        | ~26°C, 3°C diurnal                   |\n" +
        "| ITCZ              | የንፋሶች መገናኛ ዞን                      |\n" +
        "| Lapse rate        | 6.4°C/1,000 ሜ                        |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 2",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 2",
      body:
        "1) Climate = 30+ years; Weather = short-term.\n" +
        "2) Köppen: A, B, C, D, E, H.\n" +
        "3) A, C, D, E use TEMPERATURE; B uses PRECIPITATION; H uses ALTITUDE.\n" +
        "4) Most deserts are in subtropics (23.5°–40°).\n" +
        "5) Equatorial: convectional rain, ~26°C, diurnal 3°C.\n" +
        "6) Hot desert: diurnal range > annual.\n" +
        "7) 58°C Azizia (Libya) = world record.\n" +
        "8) ITCZ shifts June ~13°N ↔ December south.\n" +
        "9) Harmattan = dry NE wind from Sahara.\n" +
        "10) Warm currents (Guinea, Mozambique) → rainfall.\n" +
        "11) Cool currents (Canary, Benguela) → dry + fishing.\n" +
        "12) Lapse rate = 6.4°C/1,000 m.\n" +
        "13) Relief rainfall on windward slopes; leeward = dry (rain shadow).\n" +
        "14) Mediterranean: WINTER rain only (westerlies).\n" +
        "15) Africa = ~70% labor in agriculture; >25% GDP.\n" +
        "16) Climate change → threat to MDGs + Agenda 2063.",
      bodyAm:
        "1) Climate = 30+ ዓመት።\n" +
        "2) Köppen A-H።\n" +
        "3) 26°C, 3°C diurnal።\n" +
        "4) 58°C = ሪከርድ።\n" +
        "5) Benguela = ደረቅ።\n" +
        "6) 6.4°C/1000 ሜ።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Climate is best defined as:", options: ["Short-term weather", "Average of weather over 30+ years", "Daily temperature", "Wind direction"], answer: "1", explanation: "Climate = 30+ years average." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Weather refers to:", options: ["Long-term averages", "Short-term atmospheric conditions", "Only rainfall", "Only temperature"], answer: "1", explanation: "Weather = short-term." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Which classification is most widely used globally?", options: ["Ancient Greek", "Köppen", "Aristotle", "Modern Chinese"], answer: "1", explanation: "Köppen classification." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "In Köppen's classification, group B stands for:", options: ["Humid tropical", "Dry", "Polar", "Highland"], answer: "1", explanation: "B = DRY." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Köppen group A stands for:", options: ["Dry", "Humid tropical", "Polar", "Highland"], answer: "1", explanation: "A = HUMID TROPICAL." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Köppen group E is:", options: ["Polar", "Dry", "Humid tropical", "Highland"], answer: "0", explanation: "E = POLAR." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Köppen group H refers to:", options: ["Humid", "Highland", "Hot", "High pressure"], answer: "1", explanation: "H = HIGHLAND (altitude)." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The ancient Greeks divided each hemisphere into how many zones?", options: ["Two", "Three", "Four", "Five"], answer: "1", explanation: "Three: torrid, temperate, frigid." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Africa is the most TROPICAL continent because:", options: ["It has no deserts", "Equator + both tropics pass through it", "It's very hot", "It has many rainforests"], answer: "1", explanation: "Equator + Tropic of Cancer + Tropic of Capricorn pass through Africa." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "The equatorial climate is mainly found between:", options: ["10°N and 10°S", "5°N and 5°S", "23.5°N and 23.5°S", "40°N and 40°S"], answer: "1", explanation: "Equatorial climate: lowland areas between 5°N and 5°S." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The wettest climate region in Africa is:", options: ["Desert", "Equatorial", "Mediterranean", "Sahel"], answer: "1", explanation: "Equatorial = wettest region." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "The main type of rainfall in equatorial Africa is:", options: ["Relief", "Convectional", "Frontal", "Cyclonic"], answer: "1", explanation: "Equatorial Africa: CONVECTIONAL rainfall." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "The harmattan is:", options: ["A hot desert wind", "A dry NE wind from the Sahara", "A tropical storm", "An ocean current"], answer: "1", explanation: "Harmattan = dry NE wind from Sahara." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "The highest recorded temperature (Azizia, Libya) is:", options: ["48°C", "52°C", "58°C", "62°C"], answer: "2", explanation: "58°C in Azizia, Libya." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "The Mediterranean climate receives most of its rain in:", options: ["Summer", "Winter", "Spring", "Autumn"], answer: "1", explanation: "Rain falls in WINTER (westerlies)." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "The ITCZ stands for:", options: ["Intertropical Convergence Zone", "Indian Tropical Climate Zone", "International Tropical Climate Zone", "Intercontinental Tropical Convergence Zone"], answer: "0", explanation: "Intertropical Convergence Zone." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "The lapse rate in the troposphere is about:", options: ["3.4°C per 1,000 m", "6.4°C per 1,000 m", "10°C per 1,000 m", "20°C per 1,000 m"], answer: "1", explanation: "6.4°C per 1,000 m." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "The Benguela Current is:", options: ["Warm current", "Cool current", "Neutral", "Freshwater"], answer: "1", explanation: "Benguela = COOL current (Namib dry + rich fishing)." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "Average annual temperature of equatorial Africa is about:", options: ["18°C", "22°C", "26°C", "35°C"], answer: "2", explanation: "~26°C year-round." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "The diurnal temperature range in equatorial Africa is about:", options: ["1°C", "3°C", "10°C", "20°C"], answer: "1", explanation: "~3°C (very low)." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "Which two months are hottest in equatorial Africa?", options: ["June + July", "March + September", "December + January", "October + November"], answer: "1", explanation: "March + September (Sun overhead)." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "ITCZ in June is located at about:", options: ["13°N in N Africa", "13°S in S Africa", "0°", "40°N"], answer: "0", explanation: "~13°N in North Africa (southern Sahara boundary)." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "Warm currents near Africa include:", options: ["Canary and Benguela", "Guinea and Mozambique", "California and Gulf Stream", "Humboldt and Benguela"], answer: "1", explanation: "Warm: Guinea (W) + Mozambique (SE)." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "The Namib Desert's dry climate is caused by:", options: ["Warm Mozambique current", "Cool Benguela current", "ITCZ position", "High altitude"], answer: "1", explanation: "Cool BENGUELA current causes dry conditions." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "Rich fishing grounds exist along Namibia's coast because of:", options: ["Warm Guinea current", "Cool Benguela current", "ITCZ rains", "Mountain runoff"], answer: "1", explanation: "Cool Benguela → nutrient-rich, fish-rich waters." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "Mediterranean rainfall averages:", options: ["100–200 mm", "300–400 mm", "500–750 mm", "1000+ mm"], answer: "2", explanation: "~500–750 mm per year." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "Humid subtropical climate in Africa is confined to:", options: ["North Africa", "South Africa's SE coast", "East Africa", "West Africa"], answer: "1", explanation: "Confined to SE coast of South Africa." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "The warm Mozambique current influences which climate region?", options: ["Mediterranean", "Warm Temperate East Coast", "Semi-arid", "Desert"], answer: "1", explanation: "Warm Temperate East Coast (Natal, Cape, Mozambique)." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "The snow-capped peak of Kilimanjaro is due to:", options: ["Latitude", "Altitude", "Ocean currents", "Latitude + ocean"], answer: "1", explanation: "ALTITUDE — high elevation → cold even on equator." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "Agriculture accounts for what % of Africa's labor force?", options: ["25%", "50%", "70%", "90%"], answer: "2", explanation: "~70% of Africa's labor force." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Agriculture's share of Africa's GDP:", options: ["<10%", "~15%", ">25%", "50%+"], answer: "2", explanation: ">25% of GDP." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "The IPCC is:", options: ["International Panel on Climate Change", "Intergovernmental Panel on Climate Change", "Independent Panel on Climate Change", "Industrial Panel on Climate Change"], answer: "1", explanation: "Intergovernmental Panel on Climate Change." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "Relief rainfall is caused by:", options: ["Warm air rising over mountains", "Cold air sinking", "Convection", "Frontal activity"], answer: "0", explanation: "Air forced UP over mountains → cools → rain." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "The rain shadow is:", options: ["Windward side of mountains", "Leeward side of mountains", "Coastal strip", "Rainforest"], answer: "1", explanation: "Rain shadow = LEEWARD side (dry)." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "The Sub-tropical High-Pressure Belts are located at approximately:", options: ["0°", "10°N", "30°N and 30°S", "60°N and 60°S"], answer: "2", explanation: "~30°N and 30°S." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Which statement about the ITCZ is TRUE?", options: ["Stays at equator year-round", "Shifts with seasonal Sun movement", "Only affects northern hemisphere", "Never causes rain"], answer: "1", explanation: "ITCZ shifts with the seasonal movement of the Sun." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Which is NOT a reason Africa's climate is dry in the Namib region?", options: ["Cool Benguela current", "Subtropical high pressure", "Low moisture content of stable air", "Warm Mozambique current"], answer: "3", explanation: "Warm Mozambique current affects the EAST coast, not Namib." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "The dry northeastern wind from the Sahara affecting West Africa is called:", options: ["Sirocco", "Mistral", "Harmattan", "Bora"], answer: "2", explanation: "Harmattan = dry NE wind from Sahara." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "Diurnal range > annual range in deserts means:", options: ["Day-night difference is greater than summer-winter difference", "Summer is hotter than winter", "Nights are warmer than days", "No seasons"], answer: "0", explanation: "Daily temperature change > seasonal change in hot deserts." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "Which climate region is described as 'transition between tropical and temperate climates'?", options: ["Desert", "Mediterranean", "Humid Subtropical", "Equatorial"], answer: "2", explanation: "Humid Subtropical = transition between tropical + temperate." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Why are many African deserts in the subtropics?", options: ["Low radiation", "High radiation + thin cloud cover + low moisture", "Polar air dominates", "Ocean currents cool them"], answer: "1", explanation: "Highest radiation in summer; thin cloud cover; less moisture → deserts." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "Africa is described as 'climate-vulnerable' because of:", options: ["Wealth", "Weak adaptive capacity + ecosystem dependence + less developed agriculture", "High technology", "Strong governance"], answer: "1", explanation: "Weak adaptation + ecosystem dependence + less developed agriculture." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "Africa's low adaptive capacity is worsened by:", options: ["High rainfall", "Widespread poverty and limited resources", "Strong institutions", "Cool climates"], answer: "1", explanation: "Widespread poverty + limited resources → low adaptation." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Differentiate between weather and climate.", answer: "WEATHER: short-term atmospheric condition (e.g., today's temperature + precipitation). State of atmosphere regarding heat/cold, wet/dry, calm/storm, clear/cloudy.\n\nCLIMATE: average of weather conditions in a place over a long period — 30 years or more. Includes extreme events and probabilities. Sum of all statistical weather information.\n\nKEY: Weather is what you experience day-to-day; climate is the long-term pattern.", explanation: "Weather = short-term; Climate = 30+ years average." },
    { id: "q45", type: "short", difficulty: "easy", stem: "State the Köppen climate classification groups.", answer: "Wladimir Köppen's classification (German climatologist, 1846–1940) uses TEMPERATURE + PRECIPITATION:\n\n• A = Humid tropical (temperature)\n• B = Dry (precipitation)\n• C = Humid middle-latitude, mild winters (temperature)\n• D = Humid middle-latitude, severe winters (temperature)\n• E = Polar (temperature)\n• H = Highland (altitude)\n\nA, C, D, E = temperature; B = precipitation; H = altitude.", explanation: "A, B, C, D, E, H; with B = precip, H = altitude." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Describe the equatorial climate of Africa.", answer: "LOCATION: Lowlands between 5°N and 5°S — Central Africa (DRC, Gabon, Cameroon) + parts of West Africa (Ghana, Benin, Sierra Leone). Modified in highland + coastal East Africa.\n\nTEMPERATURE: ~26°C average; hottest months March + September (Sun overhead); diurnal range only 3°C; heavy cloud cover, high humidity.\n\nRAINFALL: CONVECTIONAL; two peak periods (double ITCZ passage); wettest region in Africa.\n\nADAPTATIONS: Forest vegetation has broadleaf evergreens, buttresses, lianas; high biodiversity.", explanation: "5°N–5°S; ~26°C; convectional rain; wettest." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Explain the factors controlling Africa's climate.", answer: "1) LATITUDE: Africa lies within tropics (37°N–34°S); high temperatures year-round; Sun nearly perpendicular near equator.\n\n2) PRESSURE SYSTEMS + ITCZ: Sub-tropical Highs at ~30°N/S produce NE (Harmattan) and SW (Monsoon) trade winds; converge at ITCZ, which shifts seasonally.\n\n3) OCEAN CURRENTS: Warm Guinea/Mozambique → rainfall; Cool Canary/Benguela → dry + fishing.\n\n4) CONTINENTALITY: Interior = extreme temperatures; coastal = mild.\n\n5) ALTITUDE: Temperature decreases at 6.4°C/1,000 m; high peaks have snow.", explanation: "Latitude, ITCZ, currents, continentality, altitude." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Differentiate warm and cool ocean currents and give examples from Africa.", answer: "WARM OCEAN CURRENTS:\n• Move from low to high latitudes.\n• Supply moisture to winds → RAINFALL on adjacent coasts.\n• Examples: Warm GUINEA (West Africa), Warm MOZAMBIQUE (Southeast Africa).\n\nCOOL OCEAN CURRENTS:\n• Cause moisture to condense offshore → dry conditions.\n• Create RICH FISHING GROUNDS.\n• Examples: Cool CANARY (Western Sahara), Cool BENGUELA (Namibia/Kalahari).\n\nBoth influence coastal climate and economies.", explanation: "Warm = rainfall; Cool = dry + fishing." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Explain the role of ITCZ in Africa's climate.", answer: "ITCZ = INTER-TROPICAL CONVERGENCE ZONE — where NE trade winds (Harmattan) and SW trade winds (Monsoon) converge.\n\nMECHANISM:\n• ITCZ shifts with the seasonal movement of the Sun.\n• June (N summer): ~13°N — southern boundary of Sahara.\n• December (Northern winter): southward — West African coast, Congo basin, Madagascar.\n\nEFFECTS:\n• Controls rainfall distribution + climate zones.\n• Climatic zones symmetric around the equator.\n• The rainy season occurs when ITCZ is over an area.\n• Dry seasons when ITCZ has moved away.", explanation: "ITCZ = convergence zone; shifts seasonally; controls rainfall." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Explain the challenges of climate change to Africa's development vision.", answer: "CLIMATE CHANGE (long-term shift) is a serious threat to Africa's development because Africa is among the MOST VULNERABLE continents.\n\nAccording to IPCC, vulnerability is driven by:\n• Weak adaptive capacity.\n• High ecosystem dependence for livelihoods.\n• Less developed agricultural systems.\n\nEXPECTED IMPACTS:\n• Higher temperatures; rising sea levels.\n• Changing rainfall; desertification.\n• Floods, deforestation, erosion.\n• Lower agricultural production + food insecurity in Sub-Saharan Africa.\n\nDEVELOPMENT THREATS:\n• Strong impact on achieving MDGs (Millennium Development Goals).\n• Threatens Africa 2063 (Agenda 2063) goals.\n• Increased pressure on agriculture, water, health, political stability.\n\nFOUR reasons Africa is seriously affected:\n1) Close coupling with climate system (rainfall-dependent).\n2) Complex large-scale weather systems.\n3) Largest projected rainfall declines globally (N + S Africa).\n4) Low adaptation capacity.", explanation: "IPCC drivers; impacts MDGs + Agenda 2063; low adaptation." },
  ],
};