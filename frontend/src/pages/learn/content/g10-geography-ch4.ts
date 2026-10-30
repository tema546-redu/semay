import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 GEOGRAPHY — UNIT 4
// POPULATION OF AFRICA
// Source: Grade 10 Geography Student Textbook (pp. 87–118)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, definition boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10GeographyCh4: Chapter = {
  id: "ch4",
  number: 4,
  title: "Population of Africa",
  titleAm: "የአፍሪካ ህዝብ",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about POPULATION — its size, growth, structure, distribution, and settlement in Africa.\n\n" +
        "It has FIVE parts:\n" +
        "1) World population growth — regional shares.\n" +
        "2) Africa's demographic trends — fertility, mortality, life expectancy.\n" +
        "3) Population structure — age, sex, pyramids.\n" +
        "4) Distribution and density.\n" +
        "5) Urban and rural settlement patterns.\n\n" +
        "The WHOLE chapter reduces to FOUR formulas + FIVE key ideas:\n" +
        "• CBR = (Births / Mid-year population) × 1,000\n" +
        "• CDR = (Deaths / Mid-year population) × 1,000\n" +
        "• IMR = (Infant deaths / Live births) × 1,000\n" +
        "• Doubling time = 70 / r (Rule of 70)\n" +
        "• Sex ratio = (Males / Females) × 100\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ አራቱ ቀመሮች፡\n" +
        "CBR = (ልደት / ህዝብ) × 1000\n" +
        "CDR = (ሞት / ህዝብ) × 1000\n" +
        "IMR = (የጨቅላ ሞት / ልደት) × 1000\n" +
        "Dt = 70 / r\n" +
        "Sex ratio = (ወንድ / ሴት) × 100",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand demographic components",
          titleAm: "ደረጃ 1 · የህዝብ ለውጥ አካላት",
          body:
            "POPULATION CHANGE depends on THREE variables:\n" +
            "1) FERTILITY (births).\n" +
            "2) MORTALITY (deaths).\n" +
            "3) MIGRATION (immigration + emigration).\n\n" +
            "BALANCING EQUATION:\n" +
            "Pt − Po = (B − D) + (I − O)\n" +
            "= Natural Increase (NI) + Net Migration (NM)",
          bodyAm:
            "3 ተለዋዋጮች: ልደት፣ ሞት፣ ፍልሰት።\n" +
            "Pt − Po = (B−D) + (I−O)",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the key formulas",
          titleAm: "ደረጃ 2 · ቀመሮችን አስታውስ",
          body:
            "CBR = (Births / Mid-year population) × 1,000\n" +
            "CDR = (Deaths / Mid-year population) × 1,000\n" +
            "IMR = (Infant deaths / Live births) × 1,000\n" +
            "MMR = (Maternal deaths / Live births) × 100,000\n" +
            "Sex ratio = (Males / Females) × 100\n" +
            "Doubling time (dt) = 70 / r\n" +
            "Age Dependency Ratio = ((Young + Old) / Working) × 100",
          bodyAm:
            "CBR, CDR, IMR, MMR።\n" +
            "Sex ratio = (ወንድ/ሴት) × 100።\n" +
            "dt = 70/r።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master Africa's key facts",
          titleAm: "ደረጃ 3 · የአፍሪካ ዋና እውነታዎች",
          body:
            "AFRICA'S POPULATION (2020):\n" +
            "• ~1.3 billion = 17.5% of world (2nd most populous after Asia).\n" +
            "• Growth rate ~2.5% per year (highest in world).\n" +
            "• Doubling time ~28 years.\n" +
            "• CBR = 33/1000 (highest in world).\n" +
            "• CDR = 8/1000.\n" +
            "• IMR = 47/1000 (highest in world).\n" +
            "• Life expectancy = 64 years.\n" +
            "• Median age = 19.7 years (youngest continent).\n" +
            "• Density = 44 persons/km².\n" +
            "• Urban population ~41%.\n\n" +
            "KEY EXTREMES:\n" +
            "• Highest CBR: Somalia (49/1000).\n" +
            "• Lowest CBR: Mauritius (11/1000).\n" +
            "• Highest TFR: Central Africa (~6 children/woman).\n" +
            "• Lowest TFR: Southern Africa (2.4).\n" +
            "• Highest IMR: Central Africa (62/1000).\n" +
            "• Lowest IMR: Northern Africa (22/1000).\n" +
            "• Highest life expectancy: Northern Africa (74 years).\n" +
            "• Lowest life expectancy: Western Africa (59 years).",
          bodyAm:
            "1.3 ቢሊዮን (17.5%)።\n" +
            "2.5% እድገት።\n" +
            "33/1000 CBR።\n" +
            "47/1000 IMR።\n" +
            "64 ዓመት ቆይታ።\n" +
            "19.7 ሚዲያን ዕድሜ።\n" +
            "44 ሰው/ኪ.ሜ.²።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Did you compute CBR correctly (per 1,000)?\n" +
            "2) Did you compute IMR per 1,000 LIVE BIRTHS (not population)?\n" +
            "3) Did you compute MMR per 100,000?\n" +
            "4) Did you apply Rule of 70 (70 ÷ r)?\n" +
            "5) Did you identify pyramid type correctly?",
          bodyAm:
            "1) CBR በ1000? ✓\n" +
            "2) IMR በ1000 ልደቶች? ✓\n" +
            "3) MMR በ100,000? ✓\n" +
            "4) dt = 70/r? ✓",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Africa = 2nd most populous (after Asia).\n" +
            "• Africa = YOUNGEST continent (median 19.7 years).\n" +
            "• Africa = shortest doubling time (~28 years).\n" +
            "• CBR & IMR = HIGHEST in world (Africa).\n" +
            "• Somalia = highest CBR (49/1000); Mauritius = lowest (11/1000).\n" +
            "• Expansive pyramid = developing countries (broad base).\n" +
            "• Constructive pyramid = aging population (narrow base).\n" +
            "• Stationary pyramid = B = D (zero growth).\n" +
            "• Density: Eastern + Western (65/km²) highest; Southern (25/km²) lowest.\n" +
            "• Most populous: Nigeria, Ethiopia, Egypt, DRC, RSA.\n" +
            "• Most DENSELY populated: Mauritius, Rwanda, Burundi, Comoros, Seychelles.\n" +
            "• Urbanization: Southern most urbanized (62%); Eastern least (26%).",
          bodyAm:
            "• 2ኛ ብዙ ህዝብ።\n" +
            "• 19.7 ሚዲያን።\n" +
            "• 49 ሶማሊያ፣ 11 ሞሪሸስ።\n" +
            "• Southern 62% ከተማ።\n" +
            "• Eastern 26% ከተማ።",
        },
      ],
    },

    // ============================================================
    // 4.1 WORLD POPULATION GROWTH
    // ============================================================
    {
      id: "n1",
      title: "4.1 Overview of World Population Growth and Size",
      titleAm: "4.1 የዓለም ህዝብ እድገት",
      body:
        "Abatu, world population grew from 1.65 billion (1900) to 7.875 billion (2021). Asia = 59.4%; Africa = 17.5%.",
      bodyAm:
        "አባቱ፣ በ1900 1.65 ቢሊዮን → በ2021 7.875 ቢሊዮን።",
      children: [
        {
          id: "n1-1",
          title: "World population milestones",
          titleAm: "የዓለም ህዝብ ምዕራፎች",
          body:
            "WORLD POPULATION GROWTH:\n" +
            "• 1900: 1.65 billion.\n" +
            "• 1950: 2.52 billion.\n" +
            "• 1999: 5.98 billion.\n" +
            "• 2020: 7.8 billion.\n" +
            "• 2021: 7.875 billion.\n\n" +
            "Acceleration:\n" +
            "• After World War II — less developed countries' populations grew dramatically.\n" +
            "• 1 billion added 1960–1975; 1 billion 1975–1987.\n" +
            "• Entered 20th century with 1.6 billion; left with 6.1 billion.",
          bodyAm:
            "1900: 1.65B።\n" +
            "2021: 7.875B።\n" +
            "ከ1950 ጀምሮ ፈጣን።",
        },
        {
          id: "n1-2",
          title: "Regional shares of world population",
          titleAm: "የክልሎች ድርሻ",
          body:
            "SHARE OF WORLD POPULATION (2020, %):\n" +
            "• Asia: 59.4% (4.6 billion).\n" +
            "• Africa: 17.5% (1.3 billion).\n" +
            "• Europe: 9.4%.\n" +
            "• Latin America + Caribbean: 8.4%.\n" +
            "• North America: 4.8%.\n" +
            "• Oceania: 0.5% (43 million) — LEAST populous.\n\n" +
            "Trends (1970–2021):\n" +
            "• Asia rose from 58% to 61% (before falling to 59.4%).\n" +
            "• Africa rose from 10% to 13% (and 17.5% by 2020).\n" +
            "• Europe fell from 18% to 12%.\n" +
            "• North America fell from 6% to 5%.",
          bodyAm:
            "Asia 59.4%።\n" +
            "Africa 17.5%።\n" +
            "Europe 9.4%።\n" +
            "Oceania 0.5%።",
        },
        {
          id: "n1-3",
          title: "Fertility and life expectancy trends",
          titleAm: "የልደትና ቆይታ አዝማሚያዎች",
          body:
            "FERTILITY:\n" +
            "• 1970s: 4.5 children per woman.\n" +
            "• 2015: below 2.5 children per woman.\n\n" +
            "LIFE EXPECTANCY:\n" +
            "• Early 1990s: 64.6 years.\n" +
            "• 2020: 70.8 years.\n\n" +
            "WHY WORLD POPULATION GROWS RAPIDLY:\n" +
            "• Advances in modern medicine.\n" +
            "• Improved living standards.\n" +
            "• Reduced infant, child, maternal mortality.\n" +
            "• Increased life expectancy.",
          bodyAm:
            "ልደት 4.5 → 2.5።\n" +
            "ቆይታ 64.6 → 70.8።\n" +
            "ምክንያት: ሕክምና፣ ኑሮ።",
        },
        {
          id: "n1-4",
          title: "Africa's population size",
          titleAm: "የአፍሪካ ህዝብ መጠን",
          body:
            "AFRICA'S POPULATION (2020):\n" +
            "• 1.3 billion = 17.5% of world.\n" +
            "• 2nd most populous continent (after Asia).\n" +
            "• Nearly 1/3 of Asia; 32× Oceania.\n\n" +
            "SUB-SAHARAN AFRICA (SSA):\n" +
            "• Highest natural increase in world (~3%/year).\n" +
            "• TFR ~6.0 children per woman (2× world average).\n" +
            "• Projected: 700 million (1995) → 1.6 billion (2030).\n\n" +
            "POPULATION PROJECTIONS:\n" +
            "• Africa 2050: ~2.5 billion (25% of world).\n" +
            "• 2100: ~39.4% of world population (per UN projection).",
          bodyAm:
            "1.3B (17.5%)።\n" +
            "SSA ~3% እድገት።\n" +
            "TFR ~6።\n" +
            "2050: 2.5B።",
        },
        {
          id: "n1-5",
          title: "⚠ Remember trap — World population",
          titleAm: "⚠ አትርሳ — የዓለም ህዝብ",
          body:
            "• Asia = most populous (59.4%).\n" +
            "• Africa = 2nd (17.5%).\n" +
            "• Oceania = least (0.5%).\n" +
            "• World population 2021 = 7.875 billion.\n" +
            "• Africa SSA TFR ~6 children (2× world average).\n" +
            "• Africa projected 25% of world by 2050.\n" +
            "• Global TFR fell from 4.5 (1970s) to <2.5 (2015).\n" +
            "• Global life expectancy 64.6 (1990s) → 70.8 (2020).",
          bodyAm:
            "• Asia 59.4%።\n" +
            "• Africa 17.5%።\n" +
            "• Oceania 0.5%።\n" +
            "• TFR 6 በSSA።",
        },
      ],
    },

    // ============================================================
    // 4.2 AFRICA'S DEMOGRAPHIC TRENDS
    // ============================================================
    {
      id: "n2",
      title: "4.2 Africa's Major Demographic Trends",
      titleAm: "4.2 የአፍሪካ ዋና የህዝብ አዝማሚያዎች",
      body:
        "Abatu, Africa's fertility, mortality, and life expectancy are all UNIQUE — high birth rates, declining death rates, short doubling time.",
      bodyAm:
        "አባቱ፣ ከፍተኛ ልደት፣ እየቀነሰ ሞት፣ አጭር ድርብ ጊዜ።",
      children: [
        {
          id: "n2-1",
          title: "Fertility measures",
          titleAm: "የልደት መለኪያዎች",
          body:
            "TOTAL FERTILITY RATE (TFR): average number of children a woman would give birth to during her lifetime (15–49 years) at present-day age-specific rates.\n\n" +
            "CRUDE BIRTH RATE (CBR): number of live births per 1,000 mid-year population per year.\n\n" +
            "FORMULA:\n" +
            "CBR = (Total annual live births / Total mid-year population) × 1,000\n\n" +
            "Example: 2,407,500 live births with 53,500,000 population → CBR = (2,407,500 / 53,500,000) × 1000 = 45/1000.",
          bodyAm:
            "TFR = ሴት በህይወቷ የምትወልዳቸው ልጆች።\n" +
            "CBR = (ልደት/ህዝብ) × 1000።",
        },
        {
          id: "n2-2",
          title: "Africa's fertility trends",
          titleAm: "የአፍሪካ ልደት አዝማሚያዎች",
          body:
            "AFRICA'S TFR:\n" +
            "• 1980: 6.6 children/woman.\n" +
            "• 2004: 5.1.\n" +
            "• 2016: 4.7.\n" +
            "• 2020: ~4.5.\n\n" +
            "REGIONAL TFR (2020):\n" +
            "• Central Africa: 5.8 (HIGHEST).\n" +
            "• Western Africa: 5.1.\n" +
            "• Eastern Africa: 4.3.\n" +
            "• Northern Africa: 2.9.\n" +
            "• Southern Africa: 2.4 (LOWEST).\n\n" +
            "AFRICA'S CBR = 33/1000 (2020).\n" +
            "• Highest CBR: Somalia (49/1000).\n" +
            "• Lowest CBR: Mauritius (11/1000).\n" +
            "• Ethiopia: 32/1000.\n\n" +
            "REASONS FOR HIGH CBR:\n" +
            "• Less access to contraceptives.\n" +
            "• High poverty.\n" +
            "• Low status of women.\n" +
            "• Need for large labor force.\n" +
            "• Children as symbol of virility.\n" +
            "• Low educational background.\n" +
            "• Influence of traditions + culture.",
          bodyAm:
            "1980: 6.6 → 2020: ~4.5።\n" +
            "Central 5.8 (ከፍተኛ)።\n" +
            "Southern 2.4 (ዝቅተኛ)።\n" +
            "ሶማሊያ 49።\n" +
            "ሞሪሸስ 11።",
        },
        {
          id: "n2-3",
          title: "Mortality measures",
          titleAm: "የሞት መለኪያዎች",
          body:
            "CRUDE DEATH RATE (CDR): number of deaths per 1,000 mid-year population per year.\n" +
            "CDR = (Deaths / Mid-year population) × 1,000\n\n" +
            "INFANT MORTALITY RATE (IMR): deaths of infants before age 1 per 1,000 live births.\n" +
            "IMR = (Infant deaths / Live births) × 1,000\n\n" +
            "MATERNAL MORTALITY RATIO (MMR): maternal deaths per 100,000 live births.\n" +
            "MMR = (Maternal deaths / Live births) × 100,000\n\n" +
            "LIFE EXPECTANCY: average years a newborn can expect to live under current mortality levels.",
          bodyAm:
            "CDR = (ሞት/ህዝብ) × 1000።\n" +
            "IMR = (የጨቅላ ሞት/ልደት) × 1000።\n" +
            "MMR = (የእናት ሞት/ልደት) × 100,000።\n" +
            "Life expectancy = ቆይታ።",
        },
        {
          id: "n2-4",
          title: "Africa's mortality trends",
          titleAm: "የአፍሪካ ሞት አዝማሚያ",
          body:
            "AFRICA'S CDR:\n" +
            "• 2007: 14/1000.\n" +
            "• 2016: 10/1000.\n" +
            "• 2020: 8/1000.\n\n" +
            "REGIONAL CDR (2020):\n" +
            "• Northern Africa: 6/1000 (lowest).\n" +
            "• Eastern Africa: 6/1000.\n" +
            "• Central Africa: 9/1000.\n" +
            "• Western Africa: 10/1000.\n" +
            "• Southern Africa: 11/1000 (highest).\n\n" +
            "AFRICA'S IMR = 47/1000 (highest in world).\n" +
            "• Central Africa: 62/1000 (highest).\n" +
            "• Western Africa: 55/1000.\n" +
            "• SSA: 50/1000.\n" +
            "• Eastern Africa: 42/1000.\n" +
            "• Southern Africa: 26/1000.\n" +
            "• Northern Africa: 22/1000 (lowest).\n\n" +
            "REASONS FOR HIGH DEATH RATE:\n" +
            "• Low standard of living.\n" +
            "• Low access to health facilities.\n" +
            "• Poor sanitary practices.\n" +
            "• Civil war + political instability.\n" +
            "• Famine from drought.\n" +
            "• Poor nutrition.\n" +
            "• High incidence of disease.",
          bodyAm:
            "CDR: 14→8።\n" +
            "IMR = 47።\n" +
            "Central 62 (ከፍተኛ)።\n" +
            "Northern 22 (ዝቅተኛ)።",
        },
        {
          id: "n2-5",
          title: "Life expectancy and population change",
          titleAm: "ቆይታና የህዝብ ለውጥ",
          body:
            "LIFE EXPECTANCY (2020):\n" +
            "• World: 73 years.\n" +
            "• Africa: 64 years.\n" +
            "• SSA: 62 years.\n" +
            "• Northern Africa: 74 (highest).\n" +
            "• Western Africa: 59 (lowest).\n" +
            "• Eastern Africa: 66.\n" +
            "• Central Africa: 61.\n" +
            "• Southern Africa: 62.\n\n" +
            "POPULATION CHANGE COMPONENTS:\n" +
            "• Births (fertility).\n" +
            "• Deaths (mortality).\n" +
            "• Migration (immigration/emigration).\n\n" +
            "BALANCING EQUATION:\n" +
            "Pt − Po = (B − D) + (I − O) = NI + NM",
          bodyAm:
            "Africa 64።\n" +
            "Northern 74።\n" +
            "Western 59።\n" +
            "Pt − Po = (B−D) + (I−O)",
        },
        {
          id: "n2-6",
          title: "Rule of 70 — doubling time",
          titleAm: "የ70 ደንብ",
          body:
            "POPULATION DOUBLING TIME: time it takes for a population to double.\n\n" +
            "FORMULA (Rule of 70):\n" +
            "dt = 70 / r\n\n" +
            "Where:\n" +
            "• dt = doubling time (years).\n" +
            "• r = growth rate (%).\n\n" +
            "EXAMPLE:\n" +
            "Ethiopia population 110 million (2020), growth rate 2.5%:\n" +
            "dt = 70/2.5 = 28 years.\n\n" +
            "AFRICA:\n" +
            "• Growth rate ~2.5%/year.\n" +
            "• Doubling time ~28 years.\n" +
            "• SHORTEST doubling time in world.",
          bodyAm:
            "dt = 70/r።\n" +
            "ኢትዮጵያ: 70/2.5 = 28 ዓመት።\n" +
            "አፍሪካ = አጭሩ ድርብ ጊዜ።",
        },
        {
          id: "n2-7",
          title: "⚠ Remember trap — Demographic trends",
          titleAm: "⚠ አትርሳ — የህዝብ አዝማሚያ",
          body:
            "• TFR = children per woman (lifetime).\n" +
            "• CBR = per 1,000 population.\n" +
            "• IMR = per 1,000 LIVE BIRTHS.\n" +
            "• MMR = per 100,000 live births.\n" +
            "• dt = 70/r (Rule of 70).\n" +
            "• Africa CBR = 33/1000; IMR = 47/1000; CDR = 8/1000.\n" +
            "• Somalia = highest CBR (49); Mauritius = lowest (11).\n" +
            "• Central Africa = highest IMR (62); Northern = lowest (22).\n" +
            "• Northern Africa = highest life expectancy (74); Western = lowest (59).\n" +
            "• Africa = shortest doubling time (~28 years).",
          bodyAm:
            "• CBR, IMR በ1000።\n" +
            "• MMR በ100,000።\n" +
            "• dt = 70/r።\n" +
            "• 33, 47, 8።",
        },
      ],
    },

    // ============================================================
    // 4.3 POPULATION STRUCTURE
    // ============================================================
    {
      id: "n3",
      title: "4.3 Population Structure",
      titleAm: "4.3 የህዝብ አወቃቀር",
      body:
        "Abatu, Africa has a YOUNG population — median age 19.7 years, broad base on pyramid, high age dependency ratio.",
      bodyAm:
        "አባቱ፣ አፍሪካ = ወጣት ህዝብ። ሚዲያን 19.7 ዓመት።",
      children: [
        {
          id: "n3-1",
          title: "Age structure",
          titleAm: "የዕድሜ አወቃቀር",
          body:
            "AGE STRUCTURE = distribution of population into young, working, and old groups.\n\n" +
            "AFRICA'S AGE STRUCTURE (2020):\n" +
            "• Young (0–14): 41%\n" +
            "• Working (15–64): 56%\n" +
            "• Old (65+): 3%\n\n" +
            "MEDIAN AGE:\n" +
            "• Africa: 19.7 years (young).\n" +
            "• Europe: 42.5 years (old).\n\n" +
            "HIGH young population → high demand for food, education, health, employment, housing.\n" +
            "Persistent growth DWARFS economic achievements.",
          bodyAm:
            "0–14: 41%።\n" +
            "15–64: 56%።\n" +
            "65+: 3%።\n" +
            "ሚዲያን 19.7።",
        },
        {
          id: "n3-2",
          title: "Age dependency ratio",
          titleAm: "የዕድሜ ጥገኝነት ሬሾ",
          body:
            "AGE DEPENDENCY RATIO (ADR):\n" +
            "ADR = [(Young + Old) / Working] × 100\n\n" +
            "AFRICA (2020): ADR = 78.6\n" +
            "• Sub-Saharan: 85.2\n" +
            "• Northern: 61.3\n" +
            "• Western: 88.7\n" +
            "• Eastern: 81.8\n" +
            "• Central: 96.1 (highest)\n" +
            "• Southern: 53.8 (lowest)",
          bodyAm:
            "ADR = ((ወጣት + አሮጌ) / ሰራተኛ) × 100።\n" +
            "Central 96.1።\n" +
            "Southern 53.8።",
        },
        {
          id: "n3-3",
          title: "Sex structure and sex ratio",
          titleAm: "የጾታ አወቃቀር",
          body:
            "SEX STRUCTURE = proportion of males to females.\n\n" +
            "SEX RATIO = (Males / Females) × 100\n\n" +
            "Example: 3.6 million males, 4 million females:\n" +
            "Sex ratio = (3.6/4) × 100 = 90.\n" +
            "Meaning: 90 males per 100 females.\n\n" +
            "IMPORTANCE:\n" +
            "• Affects marriage rate.\n" +
            "• Affects fertility.\n" +
            "• Affects occupational structure.\n" +
            "• Affects population growth.",
          bodyAm:
            "Sex ratio = (ወንድ/ሴት) × 100።\n" +
            "90 = 90 ወንድ / 100 ሴት።",
        },
        {
          id: "n3-4",
          title: "Population pyramids — three types",
          titleAm: "የህዝብ ፒራሚዶች",
          body:
            "POPULATION PYRAMID = graphical depiction of age-sex composition.\n\n" +
            "FORMAT:\n" +
            "• Bars stacked vertically for age groups (usually 5-year).\n" +
            "• Males on LEFT, females on RIGHT of central axis.\n" +
            "• Length = number in age group.\n\n" +
            "THREE TYPES:\n\n" +
            "1) EXPANSIVE:\n" +
            "• Broad base → high proportion of children.\n" +
            "• Rapid growth, low older population.\n" +
            "• High birth + death rates; short life expectancy.\n" +
            "• Typical of LESS DEVELOPED countries.\n\n" +
            "2) CONSTRUCTIVE:\n" +
            "• Narrow base (few young, ages 1–14 <30%).\n" +
            "• Large elderly population (ages 75+ >6%).\n" +
            "• AGING POPULATION.\n" +
            "• Typical of DEVELOPED countries.\n\n" +
            "3) STATIONARY:\n" +
            "• Unchanging fertility + mortality (B = D).\n" +
            "• Zero population growth.\n" +
            "• Column-like shape.",
          bodyAm:
            "Expansive: ሰፊ መሠረት (ታዳጊ አገሮች)።\n" +
            "Constructive: ጠባብ መሠረት (ያደጉ)።\n" +
            "Stationary: B = D።",
        },
        {
          id: "n3-5",
          title: "Africa's pyramid + characteristics",
          titleAm: "የአፍሪካ ፒራሚድ",
          body:
            "AFRICA'S PYRAMID = EXPANSIVE (triangular shape).\n" +
            "• Broad base (high fertility).\n" +
            "• Tapering apex (low life expectancy).\n\n" +
            "CHARACTERISTICS OF AFRICAN POPULATION:\n" +
            "• High fertility + mortality rates.\n" +
            "• Generally young population.\n" +
            "• Triangular pyramid.\n" +
            "• High age + youth dependency.\n" +
            "• Low old dependency.\n" +
            "• Low life expectancy.\n" +
            "• High population growth rate.",
          bodyAm:
            "ሰፊ መሠረት፣ ጠባብ ጫፍ።\n" +
            "ወጣት ህዝብ።",
        },
        {
          id: "n3-6",
          title: "⚠ Remember trap — Population structure",
          titleAm: "⚠ አትርሳ — የህዝብ አወቃቀር",
          body:
            "• Africa's median age = 19.7 years (youngest continent).\n" +
            "• Europe's median age = 42.5 years.\n" +
            "• Africa: Young 41%, Working 56%, Old 3%.\n" +
            "• ADR Africa = 78.6 (Central highest at 96.1; Southern lowest at 53.8).\n" +
            "• Sex ratio = (Males/Females) × 100.\n" +
            "• Expansive = developing; Constructive = developed; Stationary = B=D.\n" +
            "• Africa = EXPANSIVE pyramid (triangular).\n" +
            "• Males on LEFT of pyramid axis; females on RIGHT.",
          bodyAm:
            "19.7 ዓመት።\n" +
            "41%, 56%, 3%።\n" +
            "Expansive = ታዳጊ።",
        },
      ],
    },

    // ============================================================
    // 4.4-4.5 DISTRIBUTION AND SETTLEMENT
    // ============================================================
    {
      id: "n4",
      title: "4.4–4.5 Distribution, Density, and Settlement",
      titleAm: "4.4–4.5 ስርጭት፣ ጥግግትና መንደሮች",
      body:
        "Abatu, Africa's population is UNEVENLY distributed — some areas are among the world's most densely populated, while others (Sahara) have few residents.",
      bodyAm:
        "አባቱ፣ ስርጭት እኩል አይደለም።",
      children: [
        {
          id: "n4-1",
          title: "Population distribution",
          titleAm: "የህዝብ ስርጭት",
          body:
            "POPULATION DISTRIBUTION = way people inhabit + occupy Earth's surface.\n\n" +
            "AFRICA'S DENSITY (2019): ~44 persons/km².\n\n" +
            "HIGH DENSITY AREAS:\n" +
            "• Nile Valley (Egypt).\n" +
            "• Mauritius, Rwanda, Burundi.\n\n" +
            "LOW DENSITY AREAS:\n" +
            "• Sahara (few permanent residents).\n\n" +
            "PHYSICAL FACTORS:\n" +
            "• Climate.\n" +
            "• Relief.\n" +
            "• Water availability.\n" +
            "• Soil fertility.\n" +
            "• Mineral distribution.\n\n" +
            "HUMAN FACTORS:\n" +
            "• Economic conditions.\n" +
            "• Political situations.\n" +
            "• Social factors.",
          bodyAm:
            "44 ሰው/ኪ.ሜ.²።\n" +
            "ከፍተኛ: ማውሪሺየስ፣ ሩዋንዳ፣ ቡሩንዲ።\n" +
            "ዝቅተኛ: ሳሃራ።",
        },
        {
          id: "n4-2",
          title: "Regional density",
          titleAm: "የክልል ጥግግት",
          body:
            "AFRICA DENSITY BY REGION (2019, persons/km²):\n" +
            "• Eastern Africa: 65 (highest, tied).\n" +
            "• Western Africa: 65 (highest, tied).\n" +
            "• Sub-Saharan Africa: 49.\n" +
            "• Africa: 44.\n" +
            "• Northern Africa: 31.\n" +
            "• Central Africa: 27.\n" +
            "• Southern Africa: 25 (lowest).\n\n" +
            "MOST POPULOUS COUNTRIES:\n" +
            "• Nigeria, Ethiopia, Egypt, DRC, South Africa.\n\n" +
            "MOST DENSELY POPULATED:\n" +
            "• Mauritius, Rwanda, Burundi, Comoros, Seychelles.\n" +
            "(Being populous ≠ densely populated!)",
          bodyAm:
            "Eastern 65 (ከፍተኛ)።\n" +
            "Southern 25 (ዝቅተኛ)።\n" +
            "ብዙ ህዝብ: ናይጄሪያ፣ ኢትዮጵያ።\n" +
            "ጥግግት: ማውሪሺየስ።",
        },
        {
          id: "n4-3",
          title: "Urban-rural settlement",
          titleAm: "የከተማ-ገጠር ሰፈራ",
          body:
            "URBANIZATION:\n" +
            "• Africa's urban population ~41% of total.\n" +
            "• Projected to exceed rural in ~2 decades.\n\n" +
            "HIGHEST URBANIZED COUNTRIES:\n" +
            "• Gabon: ~90% urban.\n" +
            "• Western Sahara, Libya, Djibouti, Algeria, Tunisia, São Tomé, Cape Verde, Congo, South Africa, Angola, Morocco.\n\n" +
            "LOWEST URBANIZED:\n" +
            "• Burundi: 12% (least urbanized).\n" +
            "• Also: Kenya, Eritrea, Chad, Niger, Swaziland, Ethiopia, Uganda, South Sudan, Malawi.\n\n" +
            "REGIONAL URBAN % (2016):\n" +
            "• Southern Africa: 62% (highest).\n" +
            "• Northern Africa: 51%.\n" +
            "• Central Africa: 47%.\n" +
            "• Western Africa: 45%.\n" +
            "• Eastern Africa: 26% (lowest).",
          bodyAm:
            "41% ከተማ።\n" +
            "Gabon 90%።\n" +
            "Burundi 12%።\n" +
            "Southern 62%።\n" +
            "Eastern 26%።",
        },
        {
          id: "n4-4",
          title: "⚠ Remember trap — Distribution",
          titleAm: "⚠ አትርሳ — ስርጭት",
          body:
            "• Africa density = 44/km².\n" +
            "• Eastern + Western = 65/km² (highest).\n" +
            "• Southern = 25/km² (lowest).\n" +
            "• MOST POPULOUS ≠ MOST DENSELY POPULATED.\n" +
            "• Nigeria is most populous; Mauritius is most DENSELY.\n" +
            "• Gabon ~90% urban; Burundi 12% urban.\n" +
            "• Southern most urbanized (62%); Eastern least (26%).\n" +
            "• Sahara = low population.",
          bodyAm:
            "44/km²።\n" +
            "65/km² Eastern+Western።\n" +
            "25/km² Southern።\n" +
            "Gabon 90%።",
        },
      ],
    },

    // ============================================================
    // FORMULA SHEET
    // ============================================================
    {
      id: "nFormula",
      title: "Formula Sheet — Unit 4",
      titleAm: "የቀመር ሉህ — ክፍል 4",
      body:
        "| Quantity                     | Formula / Definition                              |\n" +
        "|------------------------------|----------------------------------------------------|\n" +
        "| Crude Birth Rate             | CBR = (Births / Population) × 1,000                |\n" +
        "| Crude Death Rate             | CDR = (Deaths / Population) × 1,000                |\n" +
        "| Infant Mortality Rate        | IMR = (Infant deaths / Live births) × 1,000        |\n" +
        "| Maternal Mortality Ratio     | MMR = (Maternal deaths / Live births) × 100,000    |\n" +
        "| Total Fertility Rate         | Average children per woman (lifetime)              |\n" +
        "| Doubling Time                | dt = 70 / r                                        |\n" +
        "| Sex Ratio                    | (Males / Females) × 100                            |\n" +
        "| Age Dependency Ratio         | ((Young + Old) / Working) × 100                    |\n" +
        "| Balancing Equation           | Pt − Po = (B − D) + (I − O)                        |\n" +
        "| Natural Increase             | NI = Births − Deaths                               |\n" +
        "| Net Migration                | NM = Immigrants − Emigrants                        |",
      bodyAm:
        "| መጠን             | ቀመር                                |\n" +
        "|------------------|--------------------------------------|\n" +
        "| CBR              | (ልደት/ህዝብ) × 1000                    |\n" +
        "| CDR              | (ሞት/ህዝብ) × 1000                     |\n" +
        "| IMR              | (ጨቅላ ሞት/ልደት) × 1000               |\n" +
        "| dt               | 70/r                                  |\n" +
        "| Sex ratio        | (ወንድ/ሴት) × 100                       |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 4",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 4",
      body:
        "1) CBR = per 1,000 population; IMR = per 1,000 LIVE BIRTHS; MMR = per 100,000 live births.\n" +
        "2) dt = 70/r (Rule of 70).\n" +
        "3) Sex ratio = (Males / Females) × 100.\n" +
        "4) Africa = 2nd most populous (after Asia) = 17.5% of world.\n" +
        "5) Africa = YOUNGEST continent (median 19.7).\n" +
        "6) Africa TFR = 4.5; CBR = 33; IMR = 47; CDR = 8.\n" +
        "7) Somalia = highest CBR (49); Mauritius = lowest (11).\n" +
        "8) Central Africa = highest TFR + IMR; Southern = lowest TFR.\n" +
        "9) Northern Africa = highest life expectancy (74); Western = lowest (59).\n" +
        "10) Africa = EXPANSIVE pyramid (triangular; broad base).\n" +
        "11) Most populous ≠ most densely populated.\n" +
        "12) Eastern + Western = highest density (65); Southern = lowest (25).\n" +
        "13) Gabon ~90% urban; Burundi 12% urban.\n" +
        "14) Southern = most urbanized (62%); Eastern = least (26%).\n" +
        "15) Balancing equation: Pt − Po = (B − D) + (I − O).",
      bodyAm:
        "1) CBR, IMR, MMR የተለያዩ መሠረቶች።\n" +
        "2) dt = 70/r።\n" +
        "3) 19.7 ሚዲያን።\n" +
        "4) 33, 47, 8።\n" +
        "5) Expansive pyramid።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Africa's population (2020) was about:", options: ["500 million", "1.3 billion", "2.5 billion", "5 billion"], answer: "1", explanation: "~1.3 billion (17.5% of world)." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Africa is the world's ___ most populous continent:", options: ["1st", "2nd", "3rd", "4th"], answer: "1", explanation: "2nd after Asia." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "World population in 2021 was about:", options: ["5 billion", "7.875 billion", "10 billion", "15 billion"], answer: "1", explanation: "7.875 billion (UN 2021)." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Which continent is MOST populous?", options: ["Africa", "Asia", "Europe", "North America"], answer: "1", explanation: "Asia = 59.4% of world." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Which continent is LEAST populous?", options: ["Africa", "Oceania", "Europe", "Antarctica"], answer: "1", explanation: "Oceania = 0.5% (43 million)." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Africa's population growth rate is about:", options: ["0.5%", "1%", "2.5%", "5%"], answer: "2", explanation: "~2.5% per year (highest in world)." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Africa's median age is:", options: ["10", "19.7", "30", "40"], answer: "1", explanation: "19.7 years (youngest continent)." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The three components of population change are:", options: ["Births, deaths, migration", "Males, females, children", "Young, working, old", "Urban, rural, suburban"], answer: "0", explanation: "Fertility, mortality, migration." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Crude Birth Rate measures:", options: ["Births per 1,000 population", "Births per 1,000 women", "Births per 100,000 people", "Births per family"], answer: "0", explanation: "CBR = per 1,000 population." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Infant Mortality Rate measures deaths per:", options: ["1,000 population", "1,000 live births", "1,000 women", "100,000 births"], answer: "1", explanation: "IMR = per 1,000 LIVE BIRTHS." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The Rule of 70 is used to compute:", options: ["Fertility rate", "Doubling time", "Death rate", "Sex ratio"], answer: "1", explanation: "dt = 70/r → doubling time." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Africa's CBR (2020) was approximately:", options: ["20/1000", "33/1000", "50/1000", "80/1000"], answer: "1", explanation: "33/1000." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Africa's IMR (2020) was approximately:", options: ["22/1000", "47/1000", "62/1000", "100/1000"], answer: "1", explanation: "47/1000 (highest in world)." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Africa's life expectancy (2020) was:", options: ["44", "54", "64", "74"], answer: "2", explanation: "64 years." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Africa's average population density (2019) was:", options: ["14/km²", "25/km²", "44/km²", "70/km²"], answer: "2", explanation: "~44 persons/km²." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Which pyramid type has a broad base?", options: ["Expansive", "Constructive", "Stationary", "Bell"], answer: "0", explanation: "Expansive = broad base (developing countries)." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Which pyramid type shows B = D?", options: ["Expansive", "Constructive", "Stationary", "Bell"], answer: "2", explanation: "Stationary = fertility = mortality." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Africa's most populous country is:", options: ["Ethiopia", "Egypt", "Nigeria", "South Africa"], answer: "2", explanation: "Nigeria is the most populous in Africa." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "Africa's shortest doubling time is mainly due to:", options: ["Low fertility", "Very high fertility + declining mortality", "High emigration", "Low natural increase"], answer: "1", explanation: "High fertility + declining mortality → short doubling time." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "Ethiopia's population is 110 million with 2.5% growth rate. Doubling time is:", options: ["14 years", "20 years", "28 years", "40 years"], answer: "2", explanation: "dt = 70/2.5 = 28 years." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "If a country has 2,407,500 live births and 53,500,000 population, CBR =", options: ["33/1000", "45/1000", "50/1000", "80/1000"], answer: "1", explanation: "(2,407,500/53,500,000) × 1000 = 45/1000." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "If Country Y has 40,000 infant deaths and 5,000 live births, IMR =", options: ["125/1000", "80/1000", "40/1000", "8/1000"], answer: "0", explanation: "(40,000/5,000) × 1000 = 125/1000." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "The country with the HIGHEST CBR in Africa (2020) was:", options: ["Ethiopia", "Somalia", "Nigeria", "Chad"], answer: "1", explanation: "Somalia = 49/1000." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "The country with the LOWEST CBR in Africa (2020) was:", options: ["South Africa", "Mauritius", "Tunisia", "Egypt"], answer: "1", explanation: "Mauritius = 11/1000." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "Africa's TFR (2020) was approximately:", options: ["2.5", "3.5", "4.5", "6.5"], answer: "2", explanation: "~4.5 children per woman." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "Which African region has the HIGHEST TFR (2020)?", options: ["Northern", "Western", "Central", "Southern"], answer: "2", explanation: "Central Africa = 5.8 (highest)." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "Which region has the LOWEST IMR in Africa (2020)?", options: ["Northern", "Western", "Central", "Southern"], answer: "0", explanation: "Northern Africa = 22/1000 (lowest)." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "Which region has the HIGHEST life expectancy (2020)?", options: ["Northern", "Western", "Eastern", "Central"], answer: "0", explanation: "Northern Africa = 74 years." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "Africa's Age Dependency Ratio (ADR) in 2020 was:", options: ["50", "78.6", "100", "150"], answer: "1", explanation: "78.6%." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "The region with HIGHEST ADR in Africa (2020):", options: ["Northern", "Central", "Southern", "Western"], answer: "1", explanation: "Central Africa = 96.1." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "The country with the LOWEST crude density in 2019 is:", options: ["Nigeria", "Ethiopia", "South Africa", "Mauritius"], answer: "2", explanation: "South Africa (Southern Africa = lowest region)." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "The most densely populated countries include:", options: ["Nigeria, Egypt", "Mauritius, Rwanda", "DRC, Sudan", "Libya, Algeria"], answer: "1", explanation: "Mauritius, Rwanda, Burundi, Comoros, Seychelles." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "Which region is most urbanized (2016)?", options: ["Eastern", "Western", "Northern", "Southern"], answer: "3", explanation: "Southern Africa = 62%." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Which country has the LOWEST urbanization rate?", options: ["Kenya", "Burundi", "Ethiopia", "Chad"], answer: "1", explanation: "Burundi = 12% (least urbanized)." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "The balancing equation for population change is:", options: ["Pt − Po = (B + D) + (I + O)", "Pt − Po = (B − D) + (I − O)", "Pt + Po = B + D", "Pt − Po = (B × D) / (I − O)"], answer: "1", explanation: "Pt − Po = (B − D) + (I − O)." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Which is TRUE about Africa's population pyramid?", options: ["Narrow base, wide top", "Broad base, tapering apex", "Rectangular shape", "B = D"], answer: "1", explanation: "Africa = EXPANSIVE (broad base, tapering apex)." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Which statement about Egypt's population is FALSE?", options: ["Nile Valley is densely populated", "Egypt is in Nile Basin", "Egypt is NOT in Nile Basin", "Egypt is in Northern Africa"], answer: "2", explanation: "Egypt IS in Nile Basin." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "If a country has 3.6M males and 4M females, sex ratio is:", options: ["90", "100", "111", "180"], answer: "0", explanation: "(3.6/4) × 100 = 90." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "The most significant POPULATION challenge in Africa is:", options: ["Aging population", "High youth dependency + rapid growth", "Low fertility", "High emigration only"], answer: "1", explanation: "High youth dependency + rapid growth = major challenge." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "Africa's shortest doubling time results from:", options: ["Low birth + high death", "High birth + high death", "High birth + declining death", "Low birth + low death"], answer: "2", explanation: "High fertility + declining mortality." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Which is a valid CAUSE of high CBR in Africa?", options: ["High contraceptive use", "Low poverty", "Need for large labor force", "Low cultural influence"], answer: "2", explanation: "Need for large labor force = high CBR cause." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "Which statement about population distribution is TRUE?", options: ["Africa's population is evenly distributed", "Sahara is densely populated", "Africa's distribution is uneven", "All regions have same density"], answer: "2", explanation: "Africa's population distribution is UNEVEN." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "Which is NOT a reason for Africa's high death rate?", options: ["Low standard of living", "Civil war + instability", "Famine from drought", "Strong health facilities"], answer: "3", explanation: "Strong health facilities is NOT a reason for high death rate." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "State the components of population change and the balancing equation.", answer: "THREE components of population change:\n1) FERTILITY (births) — positive natural factor.\n2) MORTALITY (deaths) — negative natural factor.\n3) MIGRATION (immigration + emigration).\n\nBALANCING EQUATION:\nPt − Po = (B − D) + (I − O)\n\nWhere:\n• Pt = population at end of period.\n• Po = population at beginning.\n• B = births; D = deaths.\n• I = in-migration; O = out-migration.\n\nOr simplified: Pt − Po = Natural Increase + Net Migration.", explanation: "Fertility, mortality, migration; Pt − Po = (B−D) + (I−O)." },
    { id: "q45", type: "short", difficulty: "easy", stem: "Define CBR and IMR with their formulas.", answer: "CRUDE BIRTH RATE (CBR): number of live births per 1,000 mid-year population in a given year.\nCBR = (Total annual live births / Mid-year population) × 1,000\n\nINFANT MORTALITY RATE (IMR): annual deaths of infants before age 1 per 1,000 live births.\nIMR = (Infant deaths / Live births) × 1,000\n\nIMR is the most widely used indicator of a country's general health situation.", explanation: "CBR per 1,000 population; IMR per 1,000 live births." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Describe Africa's fertility and mortality trends.", answer: "FERTILITY:\n• TFR declined from 6.6 (1980) to ~4.5 (2020).\n• Africa's CBR = 33/1000 (highest in world).\n• Highest TFR: Central Africa (~5.8); lowest: Southern Africa (2.4).\n• Highest CBR: Somalia (49/1000); lowest: Mauritius (11/1000).\n\nMORTALITY:\n• CDR declined from 14 (2007) to 8/1000 (2020).\n• Africa's IMR = 47/1000 (highest in world).\n• Highest IMR: Central Africa (62/1000); lowest: Northern Africa (22/1000).\n\nLIFE EXPECTANCY:\n• Africa = 64 years.\n• Highest: Northern Africa (74); lowest: Western Africa (59).\n\nCAUSES: Decline due to improved medicine, sanitation, vaccines.", explanation: "TFR 4.5; CBR 33; IMR 47; life expectancy 64." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Explain the Rule of 70 with an example.", answer: "RULE OF 70: formula to estimate population doubling time.\n\ndt = 70 / r\n\nWhere:\n• dt = doubling time (years).\n• r = annual growth rate (%).\n\nEXAMPLE: Ethiopia's population is 110 million (2020) with 2.5% growth rate:\ndt = 70 / 2.5 = 28 years.\n\nInterpretation: At current growth rate, Ethiopia's population will double to 220 million in 28 years.\n\nAPPLICATION TO AFRICA:\n• Growth rate ~2.5% → doubling time ~28 years.\n• AFRICA has the world's SHORTEST doubling time.", explanation: "dt = 70/r; Ethiopia example = 28 years." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Describe the three types of population pyramids.", answer: "1) EXPANSIVE PYRAMID:\n• Broad base — high proportion of children.\n• Rapid population growth + low older population.\n• High birth + death rates; short life expectancy.\n• Typical of DEVELOPING countries (including Africa).\n\n2) CONSTRUCTIVE PYRAMID:\n• Narrow base (ages 1–14 <30%).\n• Large elderly population (ages 75+ >6%).\n• Aging population.\n• Typical of DEVELOPED countries.\n\n3) STATIONARY PYRAMID:\n• Unchanging fertility + mortality (B = D).\n• Zero population growth.\n• Column-like shape.", explanation: "Expansive (developing), Constructive (aging), Stationary (B=D)." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Explain Africa's population structure and dependency.", answer: "AGE STRUCTURE (2020):\n• Young (0–14): 41%.\n• Working (15–64): 56%.\n• Old (65+): 3%.\n\nMEDIAN AGE: 19.7 years (youngest continent).\nEurope's median: 42.5 years.\n\nAGE DEPENDENCY RATIO (ADR) = ((Young + Old) / Working) × 100.\n• Africa: 78.6.\n• Highest: Central Africa (96.1).\n• Lowest: Southern Africa (53.8).\n\nIMPLICATIONS:\n• High demand for food, education, health, employment, housing.\n• Persistent growth dwarfs economic achievements.\n• High youth dependency → pressure on resources.\n\nSEX RATIO = (Males / Females) × 100.\nExample: 3.6M males / 4M females = 90 (90 males per 100 females).\n\nPOPULATION PYRAMID: EXPANSIVE (triangular, broad base).", explanation: "41-56-3; median 19.7; ADR 78.6; expansive pyramid." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Describe Africa's population distribution, density, and settlement.", answer: "DISTRIBUTION: UNEVEN — Sahara has few residents; Nile Valley, Mauritius, Rwanda, Burundi are among the world's most densely populated.\n\nAVERAGE DENSITY (2019): ~44 persons/km².\n\nREGIONAL DENSITY:\n• Eastern + Western: 65/km² (highest).\n• SSA: 49/km².\n• Northern: 31/km².\n• Central: 27/km².\n• Southern: 25/km² (lowest).\n\nMOST POPULOUS: Nigeria, Ethiopia, Egypt, DRC, RSA.\nMOST DENSELY: Mauritius, Rwanda, Burundi, Comoros, Seychelles.\n\nFACTORS:\n• Physical: climate, relief, water, soil, minerals.\n• Human: economic, political, social.\n\nURBANIZATION:\n• ~41% urban in Africa.\n• Highest: Gabon (~90%); Burundi (12% — least urbanized).\n• Southern most urbanized (62%); Eastern least (26%).\n\nCHALLENGES:\n• Rapid urban growth → need for land, infrastructure, services.\n• Health care stretched.\n• Poverty in both rural + urban areas.", explanation: "44/km² avg; Eastern+Western 65; Southern 25; 41% urban; Southern most urbanized (62%)." },
  ],
};