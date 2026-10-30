import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 ENGLISH — UNIT 2
// TYPES OF CALENDARS
// Source: English for Ethiopia Grade 8 Student Textbook (pp. 12–23)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8EnglishCh2: Chapter = {
  id: "ch2",
  number: 2,
  title: "Types of Calendars",
  titleAm: "የቀን መቁጠሪያ ዓይነቶች",

  notes: [
    {
      id: "n1",
      title: "1. Listening — Calendars",
      titleAm: "1. ማዳመጥ — የቀን መቁጠሪያዎች",
      body:
        "Banchi, there are SEVERAL types of calendars in the world. Each has a different relationship with the cycles of the MOON and the SUN.",
      bodyAm:
        "ባንቺ፣ በዓለም ላይ በርካታ የቀን መቁጠሪያ ዓይነቶች አሉ።",
      children: [
        {
          id: "n1-1",
          title: "Six Types of Calendars",
          titleAm: "ስድስቱ የቀን መቁጠሪያ ዓይነቶች",
          body:
            "1) PURELY LUNAR — based on the moon's cycle only.\n\n" +
            "2) PURELY SOLAR — based on the sun's cycle only (e.g., Gregorian, Ethiopian).\n\n" +
            "3) LUNISOLAR — combines BOTH moon and sun cycles.\n\n" +
            "4) SOLILUNAR — the sun is primary, moon is secondary.\n\n" +
            "5) LUNISTELLAR — based on moon and stars.\n\n" +
            "6) OTHER CALENDARS — do NOT have relationships with the cycles of the moon and the sun.",
          bodyAm:
            "1) ንጹሕ የጨረቃ — በጨረቃ ዑደት ብቻ የተመሠረተ።\n2) ንጹሕ የፀሐይ — በፀሐይ ዑደት ብቻ።\n3) የጨረቃና የፀሐይ — ሁለቱንም ያጣመረ።\n4) ፀሐይ ቀዳሚ የጨረቃ ሁለተኛ።\n5) የጨረቃና የከዋክብት።\n6) ሌሎች — ከጨረቃና ከፀሐይ ጋር ግንኙነት የሌላቸው።",
        },
        {
          id: "n1-2",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: SOLAR calendars (Gregorian, Ethiopian) track the SUN. LUNAR calendars track the MOON. LUNISOLAR combines both. SOLILUNAR = sun first, moon second. Do not confuse SOLILUNAR with LUNISOLAR — order matters!",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ የፀሐይ ቀን መቁጠሪያ = ፀሐይን ይከታተላል። የጨረቃ = ጨረቃን። የጨረቃና ፀሐይ = ሁለቱንም።",
        },
      ],
    },
    {
      id: "n2",
      title: "2. Reading — History of the Gregorian Calendar",
      titleAm: "2. ንባብ — የግሪጎሪያን ቀን መቁጠሪያ ታሪክ",
      body:
        "Banchi, the GREGORIAN calendar is also known as the SOLAR calendar and is the present-day INTERNATIONAL CIVIL calendar. It regulates the ceremonial cycle of the Roman Catholic and Protestant churches. It was originally aimed for ECCLESIASTICAL purposes.",
      bodyAm:
        "ባንቺ፣ የግሪጎሪያን ቀን መቁጠሪያ የፀሐይ ቀን መቁጠሪያ በመባልም ይታወቃል። የአሁኑ ዓለም አቀፍ ሲቪል ቀን መቁጠሪያ ነው።",
      children: [
        {
          id: "n2-1",
          title: "History Timeline",
          titleAm: "የታሪክ የጊዜ መስመር",
          body:
            "• ROME under ROMULUS — days and months set according to SUN and MOON; 10 months; New Year began March 1, ended December.\n\n" +
            "• NUMA — introduced a new calendar with 12 months, ended in February. Later the New Year changed from March 1 to January 1.\n\n" +
            "• JULIUS CAESAR — introduced the JULIAN calendar on January 1, 45 B.C.\n\n" +
            "• POPE GREGORY XIII — introduced the GREGORIAN calendar in 1582. This evolved into the present-day Gregorian calendar.",
          bodyAm:
            "• ሮም በሮሙሉስ — 10 ወራት፣ አዲስ ዓመት መጋቢት 1 ተጀምሮ ታህሳስ አበቃ።\n• ኑማ — 12 ወራት አስተዋወቀ።\n• ጁሊየስ ቄሳር — በ45 ዓ.ዓ. የጁሊያን ቀን መቁጠሪያ አስተዋወቀ።\n• ርዕሰ ሊቃነ ጳጳሳት ግሪጎሪ ዘመን 13ኛ — በ1582 የግሪጎሪያን ቀን መቁጠሪያ አስተዋወቀ።",
        },
        {
          id: "n2-2",
          title: "Days of the Week — Origins",
          titleAm: "የሳምንት ቀኖች አመጣጥ",
          body:
            "• SUNDAY — named after the SUN.\n" +
            "• MONDAY — originally the MOON.\n" +
            "• TUESDAY — originally after Mars, later Tiu's Day (Teutonic warrior god).\n" +
            "• WEDNESDAY — Wotan's Day → Woden's Day (Teutonic god).\n" +
            "• THURSDAY — Jupiter's Day → Thor's Day (thunder god).\n" +
            "• FRIDAY — Roman goddess of spring → Frigg's Day (Scandinavian goddess of love).\n" +
            "• SATURDAY — Saturn's Day (Roman god of harvest).",
          bodyAm:
            "• እሑድ — ከፀሐይ ተሰየመ።\n• ሰኞ — ከጨረቃ።\n• ማክሰኞ — ከማርስ፣ በኋላ ከቲዩ።\n• ረቡዕ — ከዎታን → ዎደን።\n• ሐሙስ — ከጁፒተር → ከቶር።\n• ዓርብ — ከፍሪግ (የስካንዲኔቪያ የፍቅር አምላክ)።\n• ቅዳሜ — ከሳተርን (የመኸር አምላክ)።",
        },
        {
          id: "n2-3",
          title: "Months — Origins",
          titleAm: "ወራት — አመጣጥ",
          body:
            "• JANUARY — Janus, god of beginnings.\n" +
            "• FEBRUARY — Februa, a big feast.\n" +
            "• MARCH — Mars, god of war.\n" +
            "• APRIL — Aphrodite, Greek goddess.\n" +
            "• MAY — Maia, goddess.\n" +
            "• JUNE — Juno, ancient goddess.\n" +
            "• JULY — Julius Caesar.\n" +
            "• AUGUST — Augustus.\n" +
            "• SEPTEMBER, OCTOBER, NOVEMBER, DECEMBER — named according to NUMERICAL placement (7, 8, 9, 10).",
          bodyAm:
            "• ጃንዋሪ — ጃኑስ (የመጀመሪያ አምላክ)።\n• ፌብሩዋሪ — ፌብሩዋ (ትልቅ በዓል)።\n• ማርች — ማርስ (የጦርነት አምላክ)።\n• ኤፕሪል — አፍሮዳይት።\n• ሜይ — ማያ።\n• ጁን — ጁኖ።\n• ጁላይ — ጁሊየስ ቄሳር።\n• ኦገስት — አውጉስተስ።\n• ሴፕቴምበር፣ ኦክቶበር፣ ኖቬምበር፣ ዲሴምበር — በቁጥር ቅደም ተከተል (7, 8, 9, 10)።",
        },
        {
          id: "n2-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: Gregorian calendar = SOLAR. It was introduced by POPE GREGORY XIII in 1582. It evolved from the JULIAN calendar (Julius Caesar, 45 B.C.). Originally for ECCLESIASTICAL (church) purposes.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ግሪጎሪያን = የፀሐይ ቀን መቁጠሪያ። በርዕሰ ሊቃነ ጳጳሳት ግሪጎሪ ዘመን 13ኛ በ1582 ተጀመረ።",
        },
      ],
    },
    {
      id: "n3",
      title: "3. Grammar — Comparative Adjectives",
      titleAm: "3. ሰዋሰው — አንጻራዊ ቅጽል",
      body:
        "Banchi, COMPARATIVE ADJECTIVES compare TWO nouns or pronouns. Structure: adjective + er + than OR more + adjective + than.",
      bodyAm:
        "ባንቺ፣ አንጻራዊ ቅጽል ሁለት ስሞችን ያነጻጽራል።",
      children: [
        {
          id: "n3-1",
          title: "Rules",
          titleAm: "ደንቦች",
          body:
            "• One-syllable adjectives: add -er. (wide → wider)\n" +
            "• Two-syllable adjectives ending in -y: change y to i, add -er. (happy → happier)\n" +
            "• One-syllable CVC (consonant-vowel-consonant): double the consonant + er. (big → bigger)\n" +
            "• Adjectives ending in -e: just add -r. (fine → finer)\n" +
            "• Long adjectives (2+ syllables): use MORE + adjective.\n" +
            "• Always use THAN after comparatives.",
          bodyAm:
            "• አንድ ፊደል ቃላት: -er ጨምር። (wide → wider)\n• በ -y የሚጨርሱ: y ወደ i ቀይረህ -er ጨምር። (happy → happier)\n• CVC: ተነባቢውን አጥፍተህ + er ጨምር። (big → bigger)\n• በ -e የሚጨርሱ: -r ብቻ ጨምር። (fine → finer)\n• ረዣዥም ቅጽሎች: MORE + ቅጽል።\n• ከአንጻራዊ በኋላ ሁልጊዜ THAN ተጠቀም።",
        },
        {
          id: "n3-2",
          title: "Comparisons with 'as … as' and 'not as … as'",
          titleAm: "ንጽጽር በ 'as … as' እና 'not as … as'",
          body:
            "SIMILARITY: as + adjective + as\n" +
            "Example: The names of the weeks in Ethiopian calendar ARE THE SAME AS the names of weeks in the Gregorian calendar.\n\n" +
            "DIFFERENCE: not as + adjective + as\n" +
            "Example: The months in the Ethiopian calendar ARE NOT AS MANY AS the months in the Gregorian calendar.",
          bodyAm:
            "መመሳሰል: as + ቅጽል + as\nልዩነት: not as + ቅጽል + as",
        },
        {
          id: "n3-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: Use THAN with comparative. Never use 'more' with -er (don't say 'more bigger'). Use 'as...as' for similarity, 'not as...as' for difference.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ከአንጻራዊ ጋር THAN ተጠቀም። 'more bigger' አትበል።",
        },
      ],
    },
    {
      id: "n4",
      title: "4. Writing — Basics of Paragraph Writing",
      titleAm: "4. ጽሑፍ — የአንቀጽ መሠረታዊ ጽሑፍ",
      body:
        "Banchi, a PARAGRAPH is a group of related sentences. The FIRST sentence has the MAIN IDEA. The other sentences SUPPORT this main idea.",
      bodyAm:
        "ባንቺ፣ አንቀጽ ተያያዥ ዓረፍተ ነገሮች ቡድን ነው። የመጀመሪያው ዓረፍተ ነገር ዋናውን ሐሳብ ይይዛል።",
      children: [
        {
          id: "n4-1",
          title: "Paragraph Structure",
          titleAm: "የአንቀጽ አወቃቀር",
          body:
            "1) TOPIC SENTENCE — first sentence; presents the main idea.\n" +
            "2) SUPPORTING SENTENCES — give details, examples, reasons.\n" +
            "3) CONCLUDING SENTENCE (optional) — wraps up the paragraph.\n\n" +
            "Example:\n" +
            "'The warm weather allows me to play outside. I play on the ground with my brother. We run through the water and scream each time. At night, I play hide and seek with my friends. I usually hide behind a big bush. I love it when the weather is warm.'",
          bodyAm:
            "1) የርዕስ ዓረፍተ ነገር — ዋናውን ሐሳብ ያቀርባል።\n2) ደጋፊ ዓረፍተ ነገሮች — ዝርዝር፣ ምሳሌ፣ ምክንያት ይሰጣሉ።\n3) የማጠቃለያ ዓረፍተ ነገር (አማራጭ)።",
        },
        {
          id: "n4-2",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: The FIRST sentence of a paragraph contains the MAIN IDEA. All other sentences SUPPORT it. A paragraph must have UNITY — one main idea only.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ የመጀመሪያው ዓረፍተ ነገር ዋናውን ሐሳብ ይይዛል።",
        },
      ],
    },
  ],

  questions: [
    // EASY MCQ Q1–Q30
    { id: "q1", type: "mcq", difficulty: "easy", stem: "How many types of calendars are mentioned in the listening text?", options: ["Four", "Five", "Six", "Seven"], answer: "2", explanation: "SIX types: purely lunar, purely solar, lunisolar, solilunar, lunistellar, and other." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Which type of calendar is based ONLY on the moon's cycle?", options: ["Solar", "Lunar", "Lunisolar", "Solilunar"], answer: "1", explanation: "PURELY LUNAR = based only on moon's cycle." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Which type of calendar is based ONLY on the sun's cycle?", options: ["Solar", "Lunar", "Lunisolar", "Solilunar"], answer: "0", explanation: "PURELY SOLAR = based only on sun's cycle." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "The Gregorian calendar is also known as the:", options: ["Lunar calendar", "Solar calendar", "Lunisolar calendar", "Lunistellar calendar"], answer: "1", explanation: "Gregorian = SOLAR calendar." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "The Gregorian calendar is the present-day:", options: ["Religious calendar only", "International civil calendar", "Agricultural calendar", "Lunar calendar"], answer: "1", explanation: "Gregorian = present-day INTERNATIONAL CIVIL calendar." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "The Gregorian calendar regulates the ceremonial cycle of which churches?", options: ["Orthodox only", "Roman Catholic and Protestant", "Muslim", "Hindu"], answer: "1", explanation: "Roman Catholic AND Protestant churches." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "What does 'ecclesiastical' mean?", options: ["Political", "Church-related", "Agricultural", "Scientific"], answer: "1", explanation: "ECCLESIASTICAL = CHURCH-related." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The original Roman calendar under Romulus had how many months?", options: ["10", "11", "12", "13"], answer: "0", explanation: "Original Roman calendar had 10 MONTHS." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Under Romulus, the New Year began on:", options: ["January 1", "March 1", "April 1", "December 1"], answer: "1", explanation: "New Year began MARCH 1 and ended December." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Who introduced the 12-month calendar with New Year in January?", options: ["Romulus", "Numa", "Julius Caesar", "Pope Gregory XIII"], answer: "1", explanation: "NUMA introduced a 12-month calendar; New Year later changed to January 1." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Who introduced the Julian calendar?", options: ["Romulus", "Numa", "Julius Caesar", "Pope Gregory XIII"], answer: "2", explanation: "JULIUS CAESAR introduced the Julian calendar in 45 B.C." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "In which year did Julius Caesar introduce the Julian calendar?", options: ["45 B.C.", "1 A.D.", "45 A.D.", "1582 A.D."], answer: "0", explanation: "Julian calendar introduced on January 1, 45 B.C." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Who introduced the Gregorian calendar?", options: ["Julius Caesar", "Pope Gregory XIII", "Romulus", "Numa"], answer: "1", explanation: "POPE GREGORY XIII introduced the Gregorian calendar in 1582." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "In which year was the Gregorian calendar introduced?", options: ["45 B.C.", "1582 A.D.", "1900 A.D.", "2000 A.D."], answer: "1", explanation: "Gregorian calendar introduced in 1582." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Sunday was named after:", options: ["The Moon", "The Sun", "Mars", "Jupiter"], answer: "1", explanation: "SUNDAY = SUN." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Monday was originally named after:", options: ["The Sun", "The Moon", "Mars", "Saturn"], answer: "1", explanation: "MONDAY = MOON." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Tuesday originally referred to:", options: ["Sun", "Moon", "Mars", "Saturn"], answer: "2", explanation: "TUESDAY originally after MARS, later Tiu's Day." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Wednesday refers to which god?", options: ["Mars", "Wotan/Woden", "Jupiter", "Saturn"], answer: "1", explanation: "WEDNESDAY = Wotan's Day → Woden's Day." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "Thursday refers to which god?", options: ["Wotan", "Thor", "Mars", "Janus"], answer: "1", explanation: "THURSDAY = Thor's Day (thunder god)." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "Friday refers to which goddess?", options: ["Frigg", "Juno", "Maia", "Aphrodite"], answer: "0", explanation: "FRIDAY = Frigg's Day (Scandinavian goddess of love)." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Saturday refers to:", options: ["The Sun", "The Moon", "Saturn (Roman god of harvest)", "Mars"], answer: "2", explanation: "SATURDAY = Saturn's Day." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "January is named after:", options: ["Janus, god of beginnings", "Februa, a feast", "Mars, god of war", "Juno"], answer: "0", explanation: "JANUARY = Janus, god of BEGINNINGS." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "February is named after:", options: ["Janus", "Februa (a big feast)", "Mars", "Juno"], answer: "1", explanation: "FEBRUARY = Februa, a big FEAST." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "March is named after:", options: ["Janus", "Februa", "Mars, god of war", "Maia"], answer: "2", explanation: "MARCH = Mars, god of WAR." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "April is named after:", options: ["Aphrodite", "Juno", "Maia", "Mars"], answer: "0", explanation: "APRIL = APHRODITE, Greek goddess." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "May is named after:", options: ["Maia, goddess", "Juno", "Aphrodite", "Janus"], answer: "0", explanation: "MAY = MAIA, goddess." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "June is named after:", options: ["Juno", "Maia", "Aphrodite", "Janus"], answer: "0", explanation: "JUNE = JUNO, ancient goddess." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "July is named after:", options: ["Julius Caesar", "Augustus", "Janus", "Juno"], answer: "0", explanation: "JULY = JULIUS CAESAR." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "August is named after:", options: ["Julius Caesar", "Augustus", "Janus", "Juno"], answer: "1", explanation: "AUGUST = AUGUSTUS." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "The last four months (Sep–Dec) are named after:", options: ["Gods", "Numerical placement", "Emperors", "Festivals"], answer: "1", explanation: "Sept–Dec = NUMERICAL placement (7, 8, 9, 10)." },

    // MEDIUM MCQ Q31–Q80
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Which calendar combines both moon and sun cycles?", options: ["Purely lunar", "Purely solar", "Lunisolar", "Other"], answer: "2", explanation: "LUNISOLAR = combines BOTH moon and sun cycles." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "Which calendar has the sun as primary and the moon as secondary?", options: ["Lunisolar", "Solilunar", "Purely lunar", "Purely solar"], answer: "1", explanation: "SOLILUNAR = SUN primary, MOON secondary." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "Which calendar is based on moon and stars?", options: ["Purely lunar", "Lunistellar", "Lunisolar", "Solilunar"], answer: "1", explanation: "LUNISTELLAR = based on MOON and STARS." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Which calendars do NOT have relationships with moon and sun cycles?", options: ["Lunar", "Solar", "Other calendars", "Lunisolar"], answer: "2", explanation: "OTHER calendars — no relationships with moon or sun cycles." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Which is the main idea of the Gregorian calendar passage?", options: ["History of the Gregorian calendar", "Only about months", "Only about days", "Only about Popes"], answer: "0", explanation: "Main idea = HISTORY of the GREGORIAN CALENDAR." },
    { id: "q36", type: "mcq", difficulty: "medium", stem: "The Gregorian calendar was originally aimed for:", options: ["Agricultural purposes", "Ecclesiastical purposes", "Business purposes", "Military purposes"], answer: "1", explanation: "Originally aimed for ECCLESIASTICAL (CHURCH) purposes." },
    { id: "q37", type: "mcq", difficulty: "medium", stem: "Which Roman ruler introduced the 12-month calendar that ended in February?", options: ["Romulus", "Numa", "Julius Caesar", "Augustus"], answer: "1", explanation: "NUMA introduced the 12-month calendar ending in FEBRUARY." },
    { id: "q38", type: "mcq", difficulty: "medium", stem: "When was the beginning of the year changed from March to January?", options: ["Under Romulus", "After Numa", "Under Julius Caesar", "Under Pope Gregory XIII"], answer: "1", explanation: "After NUMA, New Year changed from March 1 to JANUARY 1." },
    { id: "q39", type: "mcq", difficulty: "medium", stem: "The number of days in the civil year under Numa was:", options: ["355", "360", "365", "366"], answer: "2", explanation: "The civil year had 365 days." },
    { id: "q40", type: "mcq", difficulty: "medium", stem: "Which calendar evolved into the present-day Gregorian calendar?", options: ["Roman", "Julian", "Lunar", "Lunisolar"], answer: "1", explanation: "JULIAN → GREGORIAN." },
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Which month has 28 days (or 29 in a leap year)?", options: ["January", "February", "March", "April"], answer: "1", explanation: "FEBRUARY has 28 days (29 in a leap year)." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Which months have 31 days?", options: ["January, March, May, July, August, October, December", "April, June, September, November", "February only", "All months"], answer: "0", explanation: "31-day months: Jan, Mar, May, Jul, Aug, Oct, Dec." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "Which months have 30 days?", options: ["April, June, September, November", "January, March, May", "February only", "All months"], answer: "0", explanation: "30-day months: April, June, September, November." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "In the poem 'Thirty days has September', which month has 28 days clearly?", options: ["January", "February", "March", "April"], answer: "1", explanation: "FEBRUARY has 28 days (29 in leap year)." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "Which type of calendar does the poem refer to?", options: ["Gregorian", "Ethiopian", "Lunar", "Lunisolar"], answer: "0", explanation: "The poem refers to the GREGORIAN calendar." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "The word 'contemporary' in the reading means:", options: ["Ancient", "Modern/present-day", "Future", "Old-fashioned"], answer: "1", explanation: "CONTEMPORARY = MODERN or PRESENT-DAY." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "The word 'commenced' in Paragraph 2 means:", options: ["Ended", "Started", "Paused", "Continued"], answer: "1", explanation: "COMMENCED = STARTED." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "The word 'evolved' means:", options: ["Stayed the same", "Developed gradually", "Disappeared", "Broke"], answer: "1", explanation: "EVOLVED = DEVELOPED GRADUALLY." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "The word 'ruler' in the passage means:", options: ["Measuring tool", "A leader who governs", "A line", "A law"], answer: "1", explanation: "RULER = a LEADER who GOVERNS." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "The word 'empire' in the passage means:", options: ["A small kingdom", "A group of states ruled by one ruler", "A type of calendar", "A god"], answer: "1", explanation: "EMPIRE = a GROUP of STATES ruled by ONE ruler." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "The word 'version' means:", options: ["Type/form", "Ending", "Beginning", "Loss"], answer: "0", explanation: "VERSION = TYPE or FORM." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "The word 'tracing' in the passage means:", options: ["Erasing", "Finding origin", "Copying", "Hiding"], answer: "1", explanation: "TRACING = FINDING the ORIGIN of something." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "The word 'placement' means:", options: ["Position/order", "Removal", "Ending", "Start"], answer: "0", explanation: "PLACEMENT = POSITION or ORDER." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "The adjective 'wider' in 'used wider than' is:", options: ["Positive", "Comparative", "Superlative", "None"], answer: "1", explanation: "WIDER = COMPARATIVE (comparing two)." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "Which is the comparative form of 'happy'?", options: ["Happyer", "Happier", "More happy", "Most happy"], answer: "1", explanation: "HAPPY → HAPPIER (change y to i, add -er)." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "Which is the comparative form of 'big'?", options: ["Biger", "Bigger", "More big", "Biggest"], answer: "1", explanation: "BIG → BIGGER (double the consonant, add -er)." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "Which is the comparative form of 'fine'?", options: ["Finer", "Finner", "More fine", "Finest"], answer: "0", explanation: "FINE → FINER (just add -r)." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Which is the comparative form of 'beautiful'?", options: ["Beautifuler", "More beautiful", "Beautifulest", "Beautifuller"], answer: "1", explanation: "Long adjective: MORE + BEAUTIFUL." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Which correctly uses 'as … as'?", options: ["The names of weeks are the same as the Gregorian names", "The names of weeks are as same as the Gregorian names", "The names of weeks are more same than the Gregorian names", "The names of weeks are same than the Gregorian names"], answer: "0", explanation: "'The same as' or 'as … as' for similarity." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "Which correctly uses 'not as … as'?", options: ["The Ethiopian months are not as many as Gregorian months", "The Ethiopian months are not as more as Gregorian months", "The Ethiopian months are not many than Gregorian months", "The Ethiopian months are not the same than Gregorian months"], answer: "0", explanation: "'NOT AS + adjective + AS' for difference." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "Which comparative is correct? 'The Gregorian calendar is ___ than the Ethiopian one.'", options: ["old", "older", "more old", "oldest"], answer: "1", explanation: "OLDER (one syllable: add -er)." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Which comparative is correct? 'The Ethiopian calendar is ___ years younger.'", options: ["seven", "more seven", "seventher", "sevenest"], answer: "0", explanation: "Numbers don't change form; 'seven years younger' is correct." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "Which is the correct comparative? 'The Gregorian calendar is used ___ than the Ethiopian.'", options: ["wide", "wider", "more wide", "widest"], answer: "1", explanation: "WIDER (one syllable: add -er)." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "Which is NOT a comparative form?", options: ["Older", "More attractive", "Happier", "Oldest"], answer: "3", explanation: "OLDEST is a SUPERLATIVE, not comparative." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "What is a paragraph?", options: ["A group of related sentences", "A single word", "A single line", "A title"], answer: "0", explanation: "PARAGRAPH = a GROUP of RELATED SENTENCES." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "The first sentence of a paragraph contains the:", options: ["Main idea", "Conclusion", "Introduction of characters", "Nothing"], answer: "0", explanation: "First sentence = MAIN IDEA (topic sentence)." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "What is the purpose of supporting sentences?", options: ["To give details, examples, reasons", "To confuse the reader", "To repeat the main idea", "To conclude"], answer: "0", explanation: "Supporting sentences give DETAILS, EXAMPLES, REASONS." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "How many days does February have in a leap year?", options: ["27", "28", "29", "30"], answer: "2", explanation: "FEBRUARY has 29 days in a LEAP YEAR." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "Which month has 28 days clearly?", options: ["January", "February", "March", "April"], answer: "1", explanation: "FEBRUARY has 28 days (29 in leap year)." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "Which sentence is a topic sentence?", options: ["The warm weather allows me to play outside", "I play with my brother", "I hide behind a bush", "I run through water"], answer: "0", explanation: "'The warm weather allows me to play outside' — topic sentence (main idea)." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "The month of March is named after the god of:", options: ["War", "Peace", "Love", "Harvest"], answer: "0", explanation: "MARCH = Mars, god of WAR." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "The month of May is named after the goddess:", options: ["Maia", "Juno", "Aphrodite", "Frigg"], answer: "0", explanation: "MAY = MAIA." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "The month of June is named after the goddess:", options: ["Maia", "Juno", "Aphrodite", "Frigg"], answer: "1", explanation: "JUNE = JUNO." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "The month of April is named after the Greek goddess:", options: ["Aphrodite", "Juno", "Maia", "Frigg"], answer: "0", explanation: "APRIL = APHRODITE." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Which god is the god of beginnings?", options: ["Mars", "Janus", "Jupiter", "Saturn"], answer: "1", explanation: "JANUS = god of BEGINNINGS." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "Which Roman god is associated with war?", options: ["Janus", "Mars", "Jupiter", "Saturn"], answer: "1", explanation: "MARS = god of WAR." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "Which day was named after Jupiter?", options: ["Sunday", "Monday", "Thursday", "Saturday"], answer: "2", explanation: "THURSDAY = Jupiter's Day → Thor's Day." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "Which day is associated with the sun?", options: ["Sunday", "Monday", "Tuesday", "Friday"], answer: "0", explanation: "SUNDAY = sun." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "Which day is associated with the moon?", options: ["Sunday", "Monday", "Tuesday", "Friday"], answer: "1", explanation: "MONDAY = moon." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "Which month is named after Julius Caesar?", options: ["June", "July", "August", "September"], answer: "1", explanation: "JULY = JULIUS CAESAR." },

    // HARD MCQ Q81–Q100
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Which best explains why the Gregorian calendar replaced the Julian calendar?", options: ["To track the sun more accurately", "Because Julius Caesar died", "Because it was easier to print", "Because it was shorter"], answer: "0", explanation: "Gregorian = more ACCURATE solar tracking; introduced by Pope Gregory XIII in 1582." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "Which best explains why the Gregorian calendar is used internationally?", options: ["Because it is shorter", "Because it accurately tracks the solar year and is accepted worldwide", "Because the Pope ordered it", "Because it is new"], answer: "1", explanation: "ACCURATE SOLAR tracking + worldwide acceptance = INTERNATIONAL use." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Which best explains why the passage mentions 'ecclesiastical purposes'?", options: ["To show the calendar was originally for church use", "To show it was for farming", "To show it was for war", "To show it was for money"], answer: "0", explanation: "ECCLESIASTICAL = original purpose was CHURCH-related." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Which best explains why the passage says the calendar changed 'many times'?", options: ["Because calendars are often wrong", "Because rulers (Romulus, Numa, Julius Caesar, Gregory XIII) revised it over centuries", "Because it is short", "Because it is a myth"], answer: "1", explanation: "Multiple rulers REVISED the calendar — ROMULUS, NUMA, JULIUS CAESAR, GREGORY XIII." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "Which best explains why many months are named after gods?", options: ["Because people were religious", "Because ancient Romans honored their gods through naming", "Because they ran out of names", "Because gods chose"], answer: "1", explanation: "Ancient ROMANS honored their GODS through calendar naming." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "Which best explains why the last four months are numbered?", options: ["They were added last", "They were named by placement (7, 8, 9, 10) in the original calendar", "They were named by gods", "They were forgotten"], answer: "1", explanation: "Sept-Dec = placement 7, 8, 9, 10 in original Roman calendar." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "Which sentence correctly uses THAN after a comparative?", options: ["The Gregorian is older than the Ethiopian", "The Gregorian is older then the Ethiopian", "The Gregorian is more older than the Ethiopian", "The Gregorian is oldest than the Ethiopian"], answer: "0", explanation: "'older THAN' is correct. Never 'more older'." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "Which sentence uses comparison correctly?", options: ["The Gregorian calendar is used wider than the Ethiopian calendar", "The Gregorian calendar is used more wider than the Ethiopian calendar", "The Gregorian calendar is used widest than the Ethiopian calendar", "The Gregorian calendar is used more wide than the Ethiopian calendar"], answer: "0", explanation: "'WIDER THAN' is correct. Never 'more wider'." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "Which best explains why we compare calendars?", options: ["To identify similarities and differences", "To make them shorter", "To confuse", "To rank them"], answer: "0", explanation: "Comparison = identify SIMILARITIES and DIFFERENCES." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "Which sentence contains a comparison?", options: ["Autumn is more attractive than winter", "Autumn is a season", "Autumn comes after summer", "Autumn is short"], answer: "0", explanation: "'MORE ATTRACTIVE THAN' = comparison." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "Which best explains why a paragraph needs supporting sentences?", options: ["To provide details and evidence for the main idea", "To confuse the reader", "To add length", "To change topic"], answer: "0", explanation: "Supporting sentences provide DETAILS and EVIDENCE for the MAIN IDEA." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "Which is TRUE about paragraphs?", options: ["They must have only one main idea", "They must have many main ideas", "They must be exactly 10 sentences", "They must not have a topic sentence"], answer: "0", explanation: "A paragraph must have ONLY ONE main idea (UNITY)." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Which sentence best serves as a topic sentence?", options: ["Helen does many things next week", "She studies English on Monday", "She cleans the house on Tuesday", "She plays with friends on Sunday"], answer: "0", explanation: "'Helen does many things next week' = topic sentence (main idea)." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Which correctly identifies the tense in the text about the Gregorian calendar?", options: ["Simple present", "Simple past", "Present continuous", "Past continuous"], answer: "1", explanation: "The passage uses SIMPLE PAST (ruled, introduced, changed, evolved)." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "Which word best replaces 'contemporary' in the passage?", options: ["Ancient", "Modern", "Future", "Old"], answer: "1", explanation: "CONTEMPORARY = MODERN / PRESENT-DAY." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "Which best explains why the Gregorian calendar regulates church cycles?", options: ["Because it was originally aimed at ecclesiastical purposes", "Because it is short", "Because it is solar", "Because it is new"], answer: "0", explanation: "Originally aimed at ECCLESIASTICAL (church) purposes." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "Which correctly shows comparative structure in the poem?", options: ["Thirty days has September — no comparison", "Thirty days is more longer than February", "September is the best month", "All months are equal"], answer: "0", explanation: "The poem does NOT use comparison; it just lists days." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "Which sentence correctly uses 'as … as'?", options: ["The weeks in both calendars are as the same as each other", "The number of weeks in both calendars is the same as each other", "Both calendars are more same than each other", "Both calendars are same than each other"], answer: "1", explanation: "'THE SAME AS' or 'as … as' — the number of weeks is the same." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "Which best explains the purpose of the writing section?", options: ["To teach paragraph structure", "To teach grammar only", "To teach reading only", "To teach listening only"], answer: "0", explanation: "Writing section = teaches PARAGRAPH STRUCTURE." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "Which sentence uses the simple past correctly?", options: ["Pope Gregory XIII introduced the Gregorian calendar in 1582", "Pope Gregory XIII introduce the Gregorian calendar in 1582", "Pope Gregory XIII is introducing the Gregorian calendar in 1582", "Pope Gregory XIII introduces the Gregorian calendar in 1582"], answer: "0", explanation: "Simple past: INTRODUCED (not introduce)." },

    // SHORT ANSWER Q101–Q120
    { id: "q101", type: "short", difficulty: "easy", stem: "What is a calendar?", answer: "A calendar is a system for organizing days, weeks, and months for social, religious, commercial, or administrative purposes.", explanation: "Banchi, calendar = system for organizing time." },
    { id: "q102", type: "short", difficulty: "easy", stem: "Name three types of calendars.", answer: "1) Purely lunar. 2) Purely solar. 3) Lunisolar. (Also: solilunar, lunistellar, and other calendars.)", explanation: "Six types total." },
    { id: "q103", type: "short", difficulty: "easy", stem: "What is the Gregorian calendar also known as?", answer: "The solar calendar.", explanation: "Also known as the SOLAR calendar." },
    { id: "q104", type: "short", difficulty: "easy", stem: "Who introduced the Gregorian calendar?", answer: "Pope Gregory XIII in 1582.", explanation: "Pope Gregory XIII, 1582." },
    { id: "q105", type: "short", difficulty: "medium", stem: "Who introduced the Julian calendar?", answer: "Julius Caesar, on January 1, 45 B.C.", explanation: "Julius Caesar, 45 B.C." },
    { id: "q106", type: "short", difficulty: "medium", stem: "How many months were in the original Roman calendar under Romulus?", answer: "Ten months.", explanation: "10 months — New Year began March 1." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Who introduced the 12-month calendar ending in February?", answer: "Numa, the ruler who succeeded Romulus.", explanation: "NUMA introduced 12 months." },
    { id: "q108", type: "short", difficulty: "medium", stem: "Explain why Sunday is called Sunday.", answer: "Sunday was originally named after the SUN.", explanation: "Sunday = sun." },
    { id: "q109", type: "short", difficulty: "medium", stem: "Explain why Monday is called Monday.", answer: "Monday was originally called the MOON.", explanation: "Monday = moon." },
    { id: "q110", type: "short", difficulty: "medium", stem: "Explain why March is called March.", answer: "March was named after Mars, the god of war.", explanation: "Mars = god of war." },
    { id: "q111", type: "short", difficulty: "medium", stem: "Explain why July and August are named as they are.", answer: "July was named after Julius Caesar; August was named after Augustus, who succeeded Caesar's throne.", explanation: "July = Julius Caesar, August = Augustus." },
    { id: "q112", type: "short", difficulty: "medium", stem: "What does 'ecclesiastical purposes' mean?", answer: "Purposes related to the church.", explanation: "ECCLESIASTICAL = church-related." },
    { id: "q113", type: "short", difficulty: "medium", stem: "Explain the difference between the calendar under Romulus and under Numa.", answer: "Under Romulus: 10 months, New Year began March 1, ended in December. Under Numa: 12 months, ended in February, New Year later changed from March 1 to January 1.", explanation: "Romulus = 10 months; Numa = 12 months." },
    { id: "q114", type: "short", difficulty: "medium", stem: "Why do you think some months are named after gods?", answer: "Because the ancient Romans honored their gods by naming months after them.", explanation: "Romans honored gods through calendar naming." },
    { id: "q115", type: "short", difficulty: "medium", stem: "What is a paragraph?", answer: "A paragraph is a group of related sentences. The first sentence has the main idea; the other sentences support this main idea.", explanation: "Paragraph = related sentences with one main idea." },
    { id: "q116", type: "short", difficulty: "medium", stem: "Write three sentences about the similarities between the Ethiopian and Gregorian calendars.", answer: "1) The names of the weeks in the Ethiopian calendar are the same as the names of the weeks in the Gregorian calendar. 2) The number of weeks in the Ethiopian calendar is the same as the number in the Gregorian calendar. 3) Both calendars have 12 months.", explanation: "Use 'as … as' for similarities." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Write three sentences about the differences between the Ethiopian and Gregorian calendars.", answer: "1) The festivity dates of Ethiopian Christmas and Easter are not the same as those of European Christmas and Easter. 2) The months in the Ethiopian mainstream calendar are not as many as in the Gregorian calendar. 3) The types of seasons in the Ethiopian calendar are not the same as in the Gregorian calendar.", explanation: "Use 'not as … as' or 'not the same as' for differences." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Write the comparative form of: wide, happy, big, fine, beautiful, attractive.", answer: "wide → wider; happy → happier; big → bigger; fine → finer; beautiful → more beautiful; attractive → more attractive.", explanation: "Banchi, memorize the rules." },
    { id: "q119", type: "short", difficulty: "hard", stem: "Write a complete paragraph about Helen's week using the info: Monday = English, Tuesday = clean the house, Wednesday = study mathematics, Thursday = go shopping, Friday = do assignments, Saturday = wash clothes, Sunday = play with friends.", answer: "Helen does many things next week. She studies English on Monday. On Tuesday, she cleans the house. On Wednesday, she studies mathematics. On Thursday, she goes shopping. She does assignments on Friday. She washes clothes on Saturday. Finally, she plays with her friends on Sunday.", explanation: "Begin with topic sentence + supporting sentences." },
    { id: "q120", type: "short", difficulty: "hard", stem: "What would happen if the calendars of the world disappeared?", answer: "If the calendars of the world disappeared, people would not be able to organize their days, plan events, celebrate religious festivals, or conduct business efficiently. It would be difficult to keep records of history, schedule meetings, or track time consistently across countries.", explanation: "Banchi, calendars organize our lives." },
  ],
};