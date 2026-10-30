import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 GENERAL SCIENCE — UNIT 1
// BASICS OF SCIENTIFIC INVESTIGATION
// Source: AAEB Grade 8 General Science Student Textbook (pp. 1–24)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8ScienceCh1: Chapter = {
  id: "ch1",
  number: 1,
  title: "Basics of Scientific Investigation",
  titleAm: "የሳይንሳዊ ምርመራ መሠረታዊ ነገሮች",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. What is Measurement?",
      titleAm: "መለኪያ ምንድን ነው?",
      body:
        "Banchi, measurement is the process of obtaining the MAGNITUDE of a quantity relative to an agreed standard. Every measurement has TWO parts: a NUMBER and a UNIT. Example: a student has a mass of 32 kg → number = 32, unit = kg.",
      bodyAm:
        "ባንቺ፣ መለኪያ ማለት አንድን መጠን ከተስማሚ መስፈርት አንጻር መጠኑን የማግኘት ሂደት ነው። ማንኛውም መለኪያ ሁለት ክፍሎች አሉት፡ ቁጥር እና አሃድ። ምሳሌ፡ አንድ ተማሪ 32 ኪ.ግ ክብደት አለው → ቁጥር = 32፣ አሃድ = ኪ.ግ።",
      children: [
        {
          id: "n1-1",
          title: "Indigenous (local) methods",
          titleAm: "ባህላዊ (የአካባቢ) ዘዴዎች",
          body:
            "Ethiopians used local methods long before modern science.\n\n" +
            "LENGTH: hand-span, digit, cubit, foot, pace, arm-span (fathom).\n" +
            "MASS: weqet (gold powder), quntal (= 100 kg, grains), feresula (= 17 kg, pepper & coffee).\n" +
            "TIME: shadow of a tree (morning & evening = long shadow; noon = no shadow).\n" +
            "VOLUME: jog (cup), tassa (can), sini (small cup), birchiko (glass), kubaya (mug).",
          bodyAm:
            "ርዝመት፡ ስንዝር፣ ጣት፣ ክርስትና (ኩቢት)፣ እግር፣ እርምጃ፣ የእጅ ስፋት።\nክብደት፡ ወቀት (የወርቅ ዱቄት)፣ ቁንጣል (= 100 ኪ.ግ)፣ ፈረሱላ (= 17 ኪ.ግ)።\nጊዜ፡ የዛፍ ጥላ።\nመጠን፡ ጆግ፣ ታሳ፣ ሲኒ፣ ብርቺኮ፣ ኩባያ።",
        },
        {
          id: "n1-2",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, indigenous measurements are NOT reliable for science because every person's hand-span, cubit, or foot is a DIFFERENT size. That's why the world agreed on SI units (Standard International).",
          bodyAm:
            "ባንቺ፣ ባህላዊ መለኪያዎች ለሳይንስ አስተማማኝ አይደሉም ምክንያቱም የእያንዳንዱ ሰው ስንዝር፣ ኩቢት ወይም እግር የተለያየ መጠን ነው። ለዚህም ነው ዓለም በ SI አሃዶች የተስማማችው።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Fundamental vs Derived Quantities",
      titleAm: "መሠረታዊ እና ተወላጅ መጠኖች",
      body:
        "Banchi, this is the MOST TESTED topic in Unit 1. Every physical quantity is either FUNDAMENTAL (cannot be expressed using others) or DERIVED (built from fundamentals).",
      bodyAm:
        "ባንቺ፣ ይህ በክፍል 1 ውስጥ በጣም የሚፈተን ርዕስ ነው። ማንኛውም አካላዊ መጠን መሠረታዊ (በሌሎች ሊገለጽ የማይችል) ወይም ተወላጅ (ከመሠረታዊዎቹ የተገኘ) ነው።",
      children: [
        {
          id: "n2-1",
          title: "The 7 fundamental quantities",
          titleAm: "7ቱ መሠረታዊ መጠኖች",
          body:
            "1) Length — meter (m)\n" +
            "2) Mass — kilogram (kg)\n" +
            "3) Time — second (s)\n" +
            "4) Temperature — Kelvin (K)\n" +
            "5) Electric current — Ampere (A)\n" +
            "6) Luminous intensity — Candela (cd)\n" +
            "7) Amount of substance — Mole (mol)\n\n" +
            "Your textbook focuses on the first four: length, mass, time, temperature.",
          bodyAm:
            "1) ርዝመት — ሜትር\n2) ክብደት — ኪሎግራም\n3) ጊዜ — ሰከንድ\n4) ሙቀት — ኬልቪን\n5) የኤሌክትሪክ ጅረት — አምፔር\n6) የብርሃን ጥንካሬ — ካንዴላ\n7) የንጥረ ነገር መጠን — ሞል",
        },
        {
          id: "n2-2",
          title: "Common derived quantities and their units",
          titleAm: "የተለመዱ ተወላጅ መጠኖች",
          body:
            "• Area = m × m = m²\n" +
            "• Volume = m × m × m = m³\n" +
            "• Speed = m / s (m/s)\n" +
            "• Density = kg / m³\n" +
            "• Force = kg × m/s² = Newton (N)\n\n" +
            "Banchi, notice: derived units are MADE by combining fundamental units.",
          bodyAm:
            "• ስፋት = m²\n• መጠን = m³\n• ፍጥነት = m/s\n• ጥግግት = kg/m³\n• ኃይል = ኒውተን (N)\n\nባንቺ፣ ተወላጅ አሃዶች መሠረታዊ አሃዶችን በማጣመር ይሠራሉ።",
        },
        {
          id: "n2-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, MEMORIZE this: Fundamental = length, mass, time, temperature, current, luminous intensity, amount of substance. Derived = area, volume, speed, density, force. The exam LOVES to ask 'which one is derived?' — if it's built by multiplying or dividing, it's DERIVED.",
          bodyAm:
            "ባንቺ፣ ይህን አስታውሺ፡ መሠረታዊ = ርዝመት፣ ክብደት፣ ጊዜ፣ ሙቀት፣ ጅረት፣ የብርሃን ጥንካሬ፣ የንጥረ ነገር መጠን። ተወላጅ = ስፋት፣ መጠን፣ ፍጥነት፣ ጥግግት፣ ኃይል።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Prefixes and Unit Conversion",
      titleAm: "ቅድመ ቅጥያዎች እና የአሃድ ለውጥ",
      body:
        "Banchi, in science, quantities are sometimes very LARGE or very small. A prefix is a short-hand way to write these numbers.",
      bodyAm:
        "ባንቺ፣ በሳይንስ ውስጥ መጠኖች አንዳንድ ጊዜ በጣም ትልቅ ወይም በጣም ትንሽ ናቸው። ቅድመ ቅጥያ እነዚህን ቁጥሮች ለመጻፍ አጭር መንገድ ነው።",
      children: [
        {
          id: "n3-1",
          title: "SI prefixes you MUST know",
          titleAm: "ማወቅ ያለብሽ የSI ቅድመ ቅጥያዎች",
          body:
            "• Mega (M) = 1,000,000 = 10⁶\n" +
            "• Kilo (k) = 1,000 = 10³\n" +
            "• Centi (c) = 0.01 = 10⁻²\n" +
            "• Milli (m) = 0.001 = 10⁻³\n" +
            "• Micro (µ) = 0.000001 = 10⁻⁶\n\n" +
            "Memory trick: KHDMDCM → King Henry Died (M)other (D)on't (C)ry (M)uch.",
          bodyAm:
            "• ሜጋ (M) = 1,000,000\n• ኪሎ (k) = 1,000\n• ሴንቲ (c) = 0.01\n• ሚሊ (m) = 0.001\n• ማይክሮ (µ) = 0.000001",
        },
        {
          id: "n3-2",
          title: "Length, mass, time conversions",
          titleAm: "የርዝመት፣ ክብደት፣ ጊዜ ለውጦች",
          body:
            "LENGTH: 1 km = 1000 m; 1 m = 100 cm; 1 cm = 10 mm.\n" +
            "MASS: 1 kg = 1000 g; 1 g = 1000 mg; 1 quintal = 100 kg; 1 ton = 1000 kg.\n" +
            "TIME: 1 hour = 60 min; 1 min = 60 s; 1 day = 24 h; 1 week = 7 days; 1 year = 365 or 366 days.",
          bodyAm:
            "ርዝመት፡ 1 ኪ.ሜ = 1000 ሜትር። 1 ሜትር = 100 ሴ.ሜ። 1 ሴ.ሜ = 10 ሚ.ሜ.\nክብደት፡ 1 ኪ.ግ = 1000 ግ. 1 ግ = 1000 ሚ.ግ. 1 ቁንጣል = 100 ኪ.ግ. 1 ቶን = 1000 ኪ.ግ.\nጊዜ፡ 1 ሰዓት = 60 ደቂቃ. 1 ደቂቃ = 60 ሰከንድ.",
        },
        {
          id: "n3-3",
          title: "Example conversions (from textbook)",
          titleAm: "የምሳሌ ለውጦች",
          body:
            "Example: Convert 6.5 kg to g.\n" +
            "6.5 kg × 1000 = 6500 g.\n\n" +
            "Example: Convert 200 m to km.\n" +
            "200 m ÷ 1000 = 0.2 km.\n\n" +
            "Example: Convert 1 hour to seconds.\n" +
            "1 h × 60 min/h × 60 s/min = 3600 s.",
          bodyAm:
            "ምሳሌ 1፡ 6.5 ኪ.ግ ወደ ግራም። 6.5 × 1000 = 6500 ግ.\nምሳሌ 2፡ 200 ሜትር ወደ ኪ.ሜ. 200 ÷ 1000 = 0.2 ኪ.ሜ.\nምሳሌ 3፡ 1 ሰዓት ወደ ሰከንድ. 60 × 60 = 3600 ሰከንድ.",
        },
        {
          id: "n3-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, when converting, check: am I going from SMALL to BIG (÷) or BIG to SMALL (×)? Example: g → kg means ÷ 1000. kg → g means × 1000. The exam loves to test if you're dividing or multiplying.",
          bodyAm:
            "ባንቺ፣ ስትቀይሪ አረጋግጪ፡ ከትንሽ ወደ ትልቅ (÷) ነው ወይስ ከትልቅ ወደ ትንሽ (×)? ምሳሌ፡ ግራም → ኪ.ግ ማለት ÷ 1000። ኪ.ግ → ግራም ማለት × 1000።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Accuracy vs Precision",
      titleAm: "ትክክለኛነት እና ተመጣጣኝነት",
      body:
        "Banchi, this is the trickiest topic in Unit 1. Students lose easy marks by confusing them. Read carefully.",
      bodyAm:
        "ባንቺ፣ ይህ በክፍል 1 ውስጥ በጣም አስቸጋሪ ርዕስ ነው። ተማሪዎች በማምታታት ቀላል ነጥቦችን ያጣሉ።",
      children: [
        {
          id: "n4-1",
          title: "The definitions",
          titleAm: "ትርጓሜዎች",
          body:
            "ACCURACY = how close a measurement is to the ACCEPTED (true) value.\n" +
            "PRECISION = how close two or more measurements are to EACH OTHER.\n\n" +
            "Memory trick:\n" +
            "Accuracy = close to the TARGET (correct value)\n" +
            "Precision = close to each OTHER (consistent)",
          bodyAm:
            "ትክክለኛነት = አንድ መለኪያ ለተቀበለው (እውነተኛ) እሴት ምን ያህል ቅርብ እንደሆነ።\nተመጣጣኝነት = ሁለት ወይም ከዚያ በላይ መለኪያዎች ለአንዳቸው ለሌላው ምን ያህል ቅርብ እንደሆኑ።",
        },
        {
          id: "n4-2",
          title: "The dart-game example (classic exam question)",
          titleAm: "የዳርት ጨዋታ ምሳሌ",
          body:
            "Think of a dartboard with a bullseye:\n\n" +
            "• All darts in the SAME spot, but far from the bullseye → PRECISE but NOT ACCURATE\n" +
            "• All darts near the bullseye but scattered → ACCURATE but NOT PRECISE\n" +
            "• All darts in the bullseye and close together → BOTH accurate AND precise\n" +
            "• All darts scattered everywhere → NEITHER",
          bodyAm:
            "• ሁሉም ዳርቶች በአንድ ቦታ ላይ ግን ከዒላማው ርቀው → ተመጣጣኝ ግን ትክክለኛ አይደሉም\n• ሁሉም ዳርቶች ወደ ዒላማው ቅርብ ግን ተበታትነው → ትክክለኛ ግን ተመጣጣኝ አይደሉም\n• ሁሉም በዒላማው ላይ እና ቅርብ ሆነው → ሁለቱም ትክክለኛ እና ተመጣጣኝ\n• ሁሉም ተበታትነው → ሁለቱም አይደሉም",
        },
        {
          id: "n4-3",
          title: "Textbook example",
          titleAm: "የመጽሐፉ ምሳሌ",
          body:
            "Known mass = 10 kg.\n\n" +
            "Measurement 1: 8.2 kg → NOT accurate (far from 10).\n" +
            "Measurements 2: 3.2, 3.1, 3.25, 3.3, 3.2 kg → PRECISE (close to each other) but NOT accurate (far from 10).",
          bodyAm:
            "የሚታወቀው ክብደት = 10 ኪ.ግ.\nመለኪያ 1፡ 8.2 ኪ.ግ → ትክክለኛ አይደለም።\nመለኪያ 2፡ 3.2, 3.1, 3.25, 3.3, 3.2 ኪ.ግ → ተመጣጣኝ ግን ትክክለኛ አይደለም።",
        },
        {
          id: "n4-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, the BIGGEST trap: a measurement can be PRECISE but INACCURATE. Precision does NOT mean accurate. Example: if your ruler is wrong, all your measurements are consistent (precise) but wrong (inaccurate).",
          bodyAm:
            "ባንቺ፣ ትልቁ ወጥመድ፡ አንድ መለኪያ ተመጣጣኝ ሆኖ ትክክለኛ ላይሆን ይችላል። ተመጣጣኝነት ትክክለኛነት ማለት አይደለም።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. The Scientific Method (7 Steps)",
      titleAm: "ሳይንሳዊ ዘዴ (7 ደረጃዎች)",
      body:
        "Banchi, the scientific method is the process by which scientists approach their work. It is the SAME process in all sciences — biology, chemistry, physics, even social sciences.",
      bodyAm:
        "ባንቺ፣ ሳይንሳዊ ዘዴ ሳይንቲስቶች ሥራቸውን የሚያከናውኑበት ሂደት ነው። በሁሉም ሳይንሶች ውስጥ አንድ አይነት ነው።",
      children: [
        {
          id: "n5-1",
          title: "The 6 (or 7) steps",
          titleAm: "6ቱ ደረጃዎች",
          body:
            "1) Ask Questions (start with how, what, when, why, where, who, which)\n" +
            "2) Perform Background Research (use books, internet, previous studies)\n" +
            "3) Establish a Hypothesis (a tentative, testable explanation)\n" +
            "4) Test Your Hypothesis (conduct a fair experiment, repeat it)\n" +
            "5) Analyze Results and Draw a Conclusion\n" +
            "6) Communicate Results (share with others — papers, blogs, conferences)\n\n" +
            "Note: Some textbooks count 'Observation' as Step 0.",
          bodyAm:
            "1) ጥያቄ መጠየቅ\n2) የጀርባ ምርምር ማካሄድ\n3) መላምት ማቋቋም\n4) መላምቱን መፈተሽ\n5) ውጤቶችን በመተንተን መደምደሚያ ማውጣት\n6) ውጤቶችን ማሳወቅ",
        },
        {
          id: "n5-2",
          title: "The candle experiment (classic example)",
          titleAm: "የሻማ ሙከራ ምሳሌ",
          body:
            "Question: Is air necessary for burning?\n" +
            "Research: 'Air is necessary for burning' (from books).\n" +
            "Hypothesis: Air is needed for burning.\n" +
            "Experiment: Light a candle. It burns. Cover it with an inverted gas jar.\n" +
            "Result: After a short time, the candle stops burning.\n" +
            "Conclusion: Air is necessary for burning — when the OXYGEN in the jar is used up, the candle goes out.",
          bodyAm:
            "ጥያቄ፡ አየር ለማቃጠል ያስፈልጋል?\nምርምር፡ 'አየር ለማቃጠል ያስፈልጋል።'\nመላምት፡ አየር ለማቃጠል ያስፈልጋል።\nሙከራ፡ ሻማ አብሪ። በተገላበጠ የጋዝ ማሰሮ ሸፍነው።\nውጤት፡ ከጥቂት ጊዜ በኋላ ሻማው ጠፋ።\nድምዳሜ፡ አየር (ኦክሲጅን) ለማቃጠል ያስፈልጋል።",
        },
        {
          id: "n5-3",
          title: "Fair testing — very important",
          titleAm: "ፍትሐዊ ምርመራ",
          body:
            "When you test, CHANGE ONLY ONE factor (the variable). Keep ALL other factors the SAME. Otherwise, you cannot tell which factor caused the result.",
          bodyAm:
            "ስትፈትሽ አንድ ሁኔታ ብቻ (ተለዋዋጩን) ቀይሪ። ሌሎቹን ሁሉ እንዳሉ አቆዪ። ያለበለዚያ የትኛው ሁኔታ ውጤቱን እንዳመጣ ማወቅ አትችልም።",
        },
        {
          id: "n5-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, a HYPOTHESIS is NOT a guess. It is a TESTABLE and LOGICAL explanation based on scientific knowledge. The exam might ask you to identify the hypothesis from a description — look for 'I think X causes Y because…'",
          bodyAm:
            "ባንቺ፣ መላምት ግምት አይደለም። በሳይንሳዊ እውቀት ላይ የተመሠረተ የሚፈተሽ እና ምክንያታዊ ማብራሪያ ነው።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Measuring Instruments",
      titleAm: "የመለኪያ መሣሪያዎች",
      body:
        "Banchi, each physical quantity has its own instrument. You must know which tool measures what.",
      bodyAm:
        "ባንቺ፣ ለእያንዳንዱ አካላዊ መጠን የራሱ መሣሪያ አለው። የትኛው መሣሪያ ምን እንደሚለካ ማወቅ አለብሽ።",
      children: [
        {
          id: "n6-1",
          title: "The main instruments",
          titleAm: "ዋና መሣሪያዎች",
          body:
            "• Mass → Balance (beam balance, spring balance)\n" +
            "• Length → Ruler, tape measure, meter stick\n" +
            "• Time → Stop watch, clock\n" +
            "• Temperature → Thermometer (analog or digital)\n" +
            "• Volume of liquid → Measuring cylinder, beaker",
          bodyAm:
            "• ክብደት → ሚዛን\n• ርዝመት → ገዢ፣ ቴፕ\n• ጊዜ → የጊዜ ሰዓት\n• ሙቀት → ቴርሞሜትር\n• የፈሳሽ መጠን → የመለኪያ ሲሊንደር",
        },
        {
          id: "n6-2",
          title: "Safety note",
          titleAm: "የደህንነት ማስታወሻ",
          body:
            "Banchi, NEVER put a laboratory thermometer into your mouth. Hold it at the TOP, not the bulb. Never let the bulb touch the glass.",
          bodyAm:
            "ባንቺ፣ የላቦራቶሪ ቴርሞሜትርን በአፍሽ ውስጥ አታስገቢ። ከላይ ያዢ፣ ቡልቡን አትንኪ።",
        },
      ],
    },

    {
      id: "n7",
      title: "7. Exam Strategy — Unit 1",
      titleAm: "የፈተና ስልት — ክፍል 1",
      body:
        "Banchi, five quick checks before answering Unit 1 questions.",
      bodyAm:
        "ባንቺ፣ የክፍል 1 ጥያቄዎችን ከመመለስሽ በፊት አምስት ፈጣን ቼኮች።",
      children: [
        {
          id: "n7-1",
          title: "Check 1 — Fundamental or derived?",
          titleAm: "ቼክ 1 — መሠረታዊ ወይስ ተወላጅ?",
          body:
            "Can it be written using other units? Yes → derived. No → fundamental. Length, mass, time, temperature, current are FUNDAMENTAL.",
          bodyAm:
            "በሌሎች አሃዶች ሊጻፍ ይችላል? አዎ → ተወላጅ። አይችልም → መሠረታዊ።",
        },
        {
          id: "n7-2",
          title: "Check 2 — Multiply or divide?",
          titleAm: "ቼክ 2 — ማባዛት ወይስ መከፋፈል?",
          body:
            "Going to a SMALLER unit → MULTIPLY. Going to a BIGGER unit → DIVIDE. (kg → g = × 1000; g → kg = ÷ 1000)",
          bodyAm:
            "ወደ ትንሽ አሃድ → ማባዛት። ወደ ትልቅ አሃድ → መከፋፈል።",
        },
        {
          id: "n7-3",
          title: "Check 3 — Accuracy or precision?",
          titleAm: "ቼክ 3 — ትክክለኛነት ወይስ ተመጣጣኝነት?",
          body:
            "Same as the true value → ACCURACY. Same as each other → PRECISION.",
          bodyAm:
            "ከእውነተኛው እሴት ጋር ተመሳሳይ → ትክክለኛነት። እርስ በርስ ተመሳሳይ → ተመጣጣኝነት።",
        },
        {
          id: "n7-4",
          title: "Check 4 — Which step of scientific method?",
          titleAm: "ቼክ 4 — የትኛው ደረጃ?",
          body:
            "Question → Research → Hypothesis → Test → Analyze → Communicate.",
          bodyAm:
            "ጥያቄ → ምርምር → መላምት → ፈተና → ትንተና → ማሳወቅ።",
        },
        {
          id: "n7-5",
          title: "Check 5 — Which instrument?",
          titleAm: "ቼክ 5 — የትኛው መሣሪያ?",
          body:
            "Mass → balance. Length → ruler. Time → stopwatch. Temperature → thermometer.",
          bodyAm:
            "ክብደት → ሚዛን. ርዝመት → ገዢ. ጊዜ → ሰዓት. ሙቀት → ቴርሞሜትር.",
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
      stem: "What is measurement?",
      options: [
        "Writing down random numbers",
        "Obtaining the magnitude of a quantity relative to an agreed standard",
        "Guessing the size of an object",
        "Only measuring length",
      ],
      answer: "1",
      explanation:
        "Measurement is the process of obtaining the magnitude of a quantity relative to an agreed standard. Every measurement has a number and a unit.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "Every measurement has two parts. What are they?",
      options: [
        "Length and width",
        "A number and a unit",
        "Mass and volume",
        "Accuracy and precision",
      ],
      answer: "1",
      explanation:
        "Every measurement = a NUMBER (magnitude) + a UNIT (standard). Example: 32 kg means 32 (number) and kg (unit).",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT an indigenous Ethiopian unit of length?",
      options: ["Cubit", "Hand-span", "Kilogram", "Pace"],
      answer: "2",
      explanation:
        "Kilogram is a MODERN SI unit of mass, not an indigenous length unit. Cubit, hand-span, and pace are traditional length units.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "The distance from the tip of a person's elbow to the tip of the middle finger is called:",
      options: ["Cubit", "Foot", "Digit", "Pace"],
      answer: "0",
      explanation:
        "Cubit = distance from the elbow to the tip of the middle finger when the arm is extended.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "Which unit is the SI unit of length?",
      options: ["Centimeter", "Kilometer", "Meter", "Millimeter"],
      answer: "2",
      explanation:
        "The SI unit of length is the METER (m). The others are related units (cm, km, mm).",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "Which unit is the SI unit of mass?",
      options: ["Gram", "Kilogram", "Quintal", "Ton"],
      answer: "1",
      explanation:
        "The SI unit of mass is the KILOGRAM (kg).",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "Which unit is the SI unit of time?",
      options: ["Minute", "Hour", "Second", "Day"],
      answer: "2",
      explanation:
        "The SI unit of time is the SECOND (s).",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "Which unit is the SI unit of temperature?",
      options: ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
      answer: "2",
      explanation:
        "The SI unit of temperature is KELVIN (K). Celsius and Fahrenheit are common but not SI.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is a FUNDAMENTAL physical quantity?",
      options: ["Area", "Volume", "Length", "Speed"],
      answer: "2",
      explanation:
        "LENGTH is fundamental. Area, volume, and speed are derived from length and other fundamental quantities.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is a DERIVED physical quantity?",
      options: ["Mass", "Time", "Area", "Temperature"],
      answer: "2",
      explanation:
        "AREA is derived (length × width). Mass, time, and temperature are fundamental.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "How many fundamental quantities are there in total?",
      options: ["3", "5", "7", "10"],
      answer: "2",
      explanation:
        "There are 7 fundamental quantities: length, mass, time, temperature, electric current, luminous intensity, and amount of substance.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "The unit of volume is:",
      options: ["m", "m²", "m³", "m/s"],
      answer: "2",
      explanation:
        "Volume = length × width × height → m × m × m = m³.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "The unit of speed is:",
      options: ["m", "m/s", "m²", "m³"],
      answer: "1",
      explanation:
        "Speed = distance / time → m / s = m/s.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "The SI unit of density is:",
      options: ["kg/m²", "kg/m³", "kg/m", "g/m³"],
      answer: "1",
      explanation:
        "Density = mass / volume → kg / m³ = kg/m³.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "The prefix 'kilo' means:",
      options: ["100", "1,000", "10,000", "1,000,000"],
      answer: "1",
      explanation:
        "Kilo (k) = 1,000.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "The prefix 'centi' means:",
      options: ["0.1", "0.01", "0.001", "0.0001"],
      answer: "1",
      explanation:
        "Centi (c) = 0.01 (one hundredth).",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "The prefix 'milli' means:",
      options: ["0.1", "0.01", "0.001", "0.0001"],
      answer: "2",
      explanation:
        "Milli (m) = 0.001 (one thousandth).",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "How many meters are there in 1 kilometer?",
      options: ["10", "100", "1,000", "10,000"],
      answer: "2",
      explanation:
        "1 km = 1000 m.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "How many grams are there in 1 kilogram?",
      options: ["100", "1,000", "10,000", "100,000"],
      answer: "1",
      explanation:
        "1 kg = 1000 g.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "How many seconds are there in 1 hour?",
      options: ["60", "600", "3,600", "36,000"],
      answer: "2",
      explanation:
        "1 hour = 60 min × 60 s/min = 3600 seconds.",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "Accuracy refers to:",
      options: [
        "How close measurements are to each other",
        "How close a measurement is to the accepted value",
        "The size of the measurement",
        "The unit used",
      ],
      answer: "1",
      explanation:
        "Accuracy = closeness to the ACCEPTED (true) value. Precision = closeness of repeated measurements to each other.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "Precision refers to:",
      options: [
        "How close a measurement is to the true value",
        "How close repeated measurements are to each other",
        "How big the object is",
        "Which unit is used",
      ],
      answer: "1",
      explanation:
        "Precision = how close repeated measurements are to EACH OTHER, regardless of accuracy.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the FIRST step of the scientific method?",
      options: [
        "Drawing a conclusion",
        "Asking a question",
        "Communicating results",
        "Performing background research",
      ],
      answer: "1",
      explanation:
        "The scientific method begins with observation, then asking a question.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "A hypothesis is:",
      options: [
        "A random guess",
        "A tentative and testable explanation",
        "A final answer",
        "A unit of measurement",
      ],
      answer: "1",
      explanation:
        "A hypothesis is a tentative (initial) explanation that must be testable and based on scientific knowledge.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "Which instrument is used to measure mass?",
      options: ["Thermometer", "Ruler", "Balance", "Stopwatch"],
      answer: "2",
      explanation:
        "Mass is measured with a BALANCE. Thermometer = temperature. Ruler = length. Stopwatch = time.",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following is the SI unit of volume?",
      options: ["Liter", "Milliliter", "Cubic meter (m³)", "Cubic centimeter (cm³)"],
      answer: "2",
      explanation:
        "The SI unit of volume is the CUBIC METER (m³). Liter is a common unit but not SI.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Convert 6.5 kg to grams.",
      options: ["65 g", "650 g", "6,500 g", "65,000 g"],
      answer: "2",
      explanation:
        "1 kg = 1000 g. So 6.5 kg × 1000 = 6500 g.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Convert 200 meters to kilometers.",
      options: ["0.02 km", "0.2 km", "2 km", "20 km"],
      answer: "1",
      explanation:
        "1 km = 1000 m. So 200 ÷ 1000 = 0.2 km.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Convert 2.5 kg to grams.",
      options: ["25 g", "250 g", "2,500 g", "25,000 g"],
      answer: "2",
      explanation:
        "2.5 × 1000 = 2500 g.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Convert 0.6 km to centimeters.",
      options: ["6 cm", "600 cm", "6,000 cm", "60,000 cm"],
      answer: "3",
      explanation:
        "1 km = 1000 m, 1 m = 100 cm. So 1 km = 100,000 cm. Then 0.6 × 100,000 = 60,000 cm.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Convert 0.5 hour to seconds.",
      options: ["30 s", "300 s", "1,800 s", "3,000 s"],
      answer: "2",
      explanation:
        "0.5 h = 30 min. 30 × 60 = 1800 seconds.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "The prefix 'mega' means:",
      options: ["1,000", "10,000", "100,000", "1,000,000"],
      answer: "3",
      explanation:
        "Mega (M) = 1,000,000 (one million).",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "The prefix 'micro' means:",
      options: ["0.001", "0.0001", "0.000001", "0.0000001"],
      answer: "2",
      explanation:
        "Micro (µ) = 0.000001 (one millionth).",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "A student takes 5 measurements of a 10 g object and gets 9.98, 9.99, 10.00, 10.01, 10.02. This shows:",
      options: [
        "Accurate but not precise",
        "Precise but not accurate",
        "Both accurate and precise",
        "Neither accurate nor precise",
      ],
      answer: "2",
      explanation:
        "The measurements are close to each other (PRECISE) AND close to the true value of 10 (ACCURATE). Both.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "A student takes 5 measurements of a 10 g object and gets 5.1, 5.2, 5.0, 5.15, 5.05. This shows:",
      options: [
        "Accurate but not precise",
        "Precise but not accurate",
        "Both accurate and precise",
        "Neither accurate nor precise",
      ],
      answer: "1",
      explanation:
        "The measurements are close to each other (PRECISE) but far from 10 (NOT accurate).",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "A student takes 5 measurements of a 10 g object and gets 8, 12, 9, 11, 10. This shows:",
      options: [
        "Accurate but not precise",
        "Precise but not accurate",
        "Both accurate and precise",
        "Neither accurate nor precise",
      ],
      answer: "0",
      explanation:
        "The average is close to 10 (ACCURATE) but the measurements are scattered (NOT precise).",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "In the scientific method, a tentative explanation that can be tested is called a:",
      options: ["Law", "Theory", "Hypothesis", "Fact"],
      answer: "2",
      explanation:
        "A hypothesis is a tentative, testable explanation. A theory is a well-supported explanation (much stronger).",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Which step comes right AFTER establishing a hypothesis?",
      options: [
        "Asking a question",
        "Testing the hypothesis by experiment",
        "Communicating results",
        "Background research",
      ],
      answer: "1",
      explanation:
        "Order: Ask → Research → Hypothesis → TEST → Analyze → Communicate.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Why must scientists keep all factors the same except one?",
      options: [
        "To make the experiment fair and identify the cause",
        "Because it is the law",
        "To save time",
        "Because it looks better",
      ],
      answer: "0",
      explanation:
        "Fair testing: change only ONE factor (variable). Otherwise you cannot tell which factor caused the result.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "The candle experiment proves that:",
      options: [
        "Candles burn forever",
        "Air (oxygen) is necessary for burning",
        "Fire needs no oxygen",
        "Water causes burning",
      ],
      answer: "1",
      explanation:
        "When the candle is covered with an inverted jar, the oxygen inside is used up, and the candle goes out — proving oxygen is necessary for burning.",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following is measured with a stopwatch?",
      options: ["Mass", "Length", "Time", "Temperature"],
      answer: "2",
      explanation:
        "A stopwatch measures TIME. Balance = mass. Ruler = length. Thermometer = temperature.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "The indigenous Ethiopian 'quntal' equals:",
      options: ["1 kg", "10 kg", "100 kg", "1,000 kg"],
      answer: "2",
      explanation:
        "Quntal = 100 kg (used to measure grains).",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "The indigenous Ethiopian 'feresula' equals:",
      options: ["7 kg", "17 kg", "27 kg", "70 kg"],
      answer: "1",
      explanation:
        "Feresula = 17 kg, used for pepper and coffee.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "Which instrument would you use to measure the volume of a liquid?",
      options: ["Balance", "Measuring cylinder", "Thermometer", "Stopwatch"],
      answer: "1",
      explanation:
        "A measuring cylinder (or graduated cylinder) measures the volume of a liquid.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "If a student takes several measurements that are close to each other but far from the true value, the measurements are:",
      options: [
        "Accurate and precise",
        "Precise but not accurate",
        "Accurate but not precise",
        "Neither",
      ],
      answer: "1",
      explanation:
        "Close to each other = PRECISE. Far from true value = NOT accurate. So they are PRECISE but not accurate.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "Which step in the scientific method involves checking the accuracy of your measurement by repeating it?",
      options: [
        "Asking a question",
        "Testing the hypothesis",
        "Communicating results",
        "Drawing a conclusion",
      ],
      answer: "1",
      explanation:
        "During hypothesis testing, you repeat the experiment to make sure results are accurate.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "Density is measured in:",
      options: ["m/s", "kg", "kg/m³", "m³"],
      answer: "2",
      explanation:
        "Density = mass / volume → kg / m³ = kg/m³.",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the SI unit of force?",
      options: ["Joule", "Newton", "Watt", "Pascal"],
      answer: "1",
      explanation:
        "Force is measured in NEWTON (N). Derived from kg × m/s².",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "Convert 5500 meters to kilometers.",
      options: ["0.55 km", "5.5 km", "55 km", "550 km"],
      answer: "1",
      explanation:
        "5500 ÷ 1000 = 5.5 km.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "Convert 8 meters to millimeters.",
      options: ["80 mm", "800 mm", "8,000 mm", "80,000 mm"],
      answer: "2",
      explanation:
        "1 m = 1000 mm. So 8 × 1000 = 8000 mm.",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "How is the unit of speed derived from fundamental units?",
      options: [
        "By multiplying length × length",
        "By dividing length by time (m/s)",
        "By adding mass and length",
        "By multiplying mass × time",
      ],
      answer: "1",
      explanation:
        "Speed = distance / time. Distance is length (m), time is (s). Unit: m/s — derived by division.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "The acceleration due to gravity is known to be 9.81 m/s². A student's measurements are 12.2, 12.3, 12.1, 12.08 m/s². Are they accurate or precise?",
      options: [
        "Accurate but not precise",
        "Precise but not accurate",
        "Both accurate and precise",
        "Neither accurate nor precise",
      ],
      answer: "1",
      explanation:
        "The values are close to each other (PRECISE) but far from 9.81 (NOT accurate). This is a classic textbook example.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why indigenous measurement methods are less reliable than SI units?",
      options: [
        "They are too complicated",
        "They vary from person to person and are not standardized",
        "They are too modern",
        "They take too long",
      ],
      answer: "1",
      explanation:
        "Indigenous units depend on the person's body (hand-span, cubit, foot). Different people get different results. SI units are fixed and universal.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains the relationship between the length of a shadow and time of day?",
      options: [
        "Shadow is longest at noon",
        "Shadow is longest in morning and late afternoon",
        "Shadow length never changes",
        "Shadow is longest at midnight",
      ],
      answer: "1",
      explanation:
        "The sun's position changes through the day. In the morning and late afternoon the sun is low, so shadows are LONG. At noon the sun is overhead, so shadows are SHORT (almost none).",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement is TRUE about the scientific method?",
      options: [
        "Every investigation must follow the same 6 steps exactly",
        "Steps can be modified or skipped depending on the question",
        "It only works in physics",
        "It doesn't need evidence",
      ],
      answer: "1",
      explanation:
        "The steps can be modified or removed depending on the type of question and the science. The scientific method is flexible.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "A student writes: 'The plant will grow taller if I give it more sunlight.' This is an example of:",
      options: ["A conclusion", "A hypothesis", "An observation", "A measurement"],
      answer: "1",
      explanation:
        "A hypothesis is a testable prediction. 'If X, then Y' is a classic hypothesis format.",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Define measurement and give an example.",
      answer:
        "Measurement is the process of obtaining the magnitude of a quantity relative to an agreed standard. Example: 32 kg (number = 32, unit = kg).",
      explanation:
        "Every measurement has two parts: a number and a unit.",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "State the difference between accuracy and precision.",
      answer:
        "Accuracy = how close a measurement is to the accepted/true value. Precision = how close repeated measurements are to each other.",
      explanation:
        "A measurement can be precise but not accurate, or accurate but not precise.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "List the steps of the scientific method.",
      answer:
        "1) Ask a question. 2) Do background research. 3) Establish a hypothesis. 4) Test the hypothesis. 5) Analyze results and draw a conclusion. 6) Communicate results.",
      explanation:
        "Banchi, memorize these six steps in order.",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "Explain how the candle experiment demonstrates the scientific method.",
      answer:
        "Ask: Is air needed for burning? Research: Books say yes. Hypothesis: Air is needed. Test: Light a candle, cover it with an inverted gas jar. Result: The candle goes out. Conclusion: Oxygen in the air is necessary for burning. Communicate: Report the finding.",
      explanation:
        "This classic experiment shows all 6 steps in action.",
    },
        // ============================================================
    // BATCH 2 — Q61 to Q120 (final for Unit 1)
    // ============================================================

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a source of light?",
      options: ["The Moon", "A mirror", "The Sun", "A wall"],
      answer: "2",
      explanation:
        "The Sun produces its own light — it's a source of light. The Moon, mirrors, and walls only REFLECT light.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the SI unit of length?",
      options: ["Foot", "Meter", "Kilogram", "Second"],
      answer: "1",
      explanation:
        "The SI unit of length is the METER (m).",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "The plural of 'radius' is:",
      options: ["Radiuses", "Radii", "Radi", "Radiae"],
      answer: "1",
      explanation:
        "Banchi, this is not from Unit 1 — but it appears in Math. The plural of radius is RADII.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a derived quantity?",
      options: ["Mass", "Time", "Volume", "Length"],
      answer: "2",
      explanation:
        "Volume is derived (length × width × height). Mass, time, and length are fundamental.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "Which instrument measures temperature?",
      options: ["Balance", "Thermometer", "Ruler", "Stopwatch"],
      answer: "1",
      explanation:
        "Thermometer = temperature.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the correct notation for 'kilogram'?",
      options: ["KG", "Kg", "kg", "kG"],
      answer: "2",
      explanation:
        "The symbol for kilogram is 'kg' — all lowercase. The prefix 'k' is lowercase; the base unit is 'g'.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "The base unit of mass in the SI is:",
      options: ["Gram", "Kilogram", "Milligram", "Quintal"],
      answer: "1",
      explanation:
        "The SI base unit of mass is the KILOGRAM (kg), not the gram.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "1 ton equals:",
      options: ["100 kg", "500 kg", "1,000 kg", "10,000 kg"],
      answer: "2",
      explanation:
        "1 ton = 1000 kg.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "1 quintal equals:",
      options: ["10 kg", "100 kg", "1,000 kg", "10,000 kg"],
      answer: "1",
      explanation:
        "1 quintal = 100 kg.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the correctly written symbol for a second?",
      options: ["S", "SEC", "s", "sec"],
      answer: "2",
      explanation:
        "The SI symbol for second is lowercase 's'.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these measures mass?",
      options: ["Ruler", "Thermometer", "Beam balance", "Clock"],
      answer: "2",
      explanation:
        "Beam balance measures MASS.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "Which quantity is measured in Kelvin?",
      options: ["Mass", "Temperature", "Time", "Length"],
      answer: "1",
      explanation:
        "Temperature is measured in Kelvin (K) in the SI system.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is NOT a fundamental quantity?",
      options: ["Length", "Mass", "Force", "Time"],
      answer: "2",
      explanation:
        "Force is DERIVED (mass × acceleration). Length, mass, and time are fundamental.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "A 'hand-span' is measured from:",
      options: [
        "Elbow to middle finger",
        "Tip of little finger to tip of thumb",
        "Heel to toe",
        "Shoulder to wrist",
      ],
      answer: "1",
      explanation:
        "Hand-span = tip of little finger to tip of thumb with hand stretched out.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which indigenous method was used to measure time?",
      options: [
        "Hand-span",
        "Weqet",
        "Shadow of a tree",
        "Ferusula",
      ],
      answer: "2",
      explanation:
        "Indigenous time measurement = shadow of a tree (long in morning/evening, none at noon).",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the correct scientific method order?",
      options: [
        "Test → Ask → Conclude → Research",
        "Ask → Research → Hypothesize → Test → Analyze → Communicate",
        "Hypothesize → Ask → Test → Conclude",
        "Conclude → Ask → Test → Hypothesis",
      ],
      answer: "1",
      explanation:
        "Order: Ask a question → Research → Hypothesis → Test → Analyze → Communicate.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "Which step of the scientific method comes LAST?",
      options: [
        "Asking a question",
        "Forming a hypothesis",
        "Testing the hypothesis",
        "Communicating results",
      ],
      answer: "3",
      explanation:
        "Communicating results is the last step — it allows others to verify your findings.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "The prefixes 'kilo', 'centi', and 'milli' represent:",
      options: [
        "1000, 0.01, 0.001",
        "100, 0.1, 0.01",
        "10, 100, 1000",
        "1000, 100, 10",
      ],
      answer: "0",
      explanation:
        "kilo = 1000, centi = 0.01, milli = 0.001.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "In 'mass = 32 kg', the number is:",
      options: ["32", "kg", "mass", "none"],
      answer: "0",
      explanation:
        "Every measurement has a number (32 = the magnitude) and a unit (kg = the standard).",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "In 'mass = 32 kg', the unit is:",
      options: ["32", "kg", "mass", "none"],
      answer: "1",
      explanation:
        "The unit is 'kg' (kilogram).",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the correct symbol for kilometer?",
      options: ["KM", "Km", "km", "kM"],
      answer: "2",
      explanation:
        "The correct symbol is lowercase 'km'.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one of these is a natural source of light?",
      options: ["Light bulb", "Candle", "Lightning", "Torch"],
      answer: "2",
      explanation:
        "Lightning is natural. The others are artificial (man-made).",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "Which prefix represents the smallest value?",
      options: ["Mega", "Kilo", "Centi", "Milli"],
      answer: "3",
      explanation:
        "Milli = 0.001, which is smaller than centi (0.01), kilo (1000), and mega (1,000,000).",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "In scientific investigations, a fair test means:",
      options: [
        "Changing all factors at once",
        "Changing only one factor while keeping others constant",
        "Not changing any factor",
        "Randomly doing experiments",
      ],
      answer: "1",
      explanation:
        "Fair testing = change only ONE factor (variable) at a time. Keep all other factors the same.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is the correct SI prefix for 'million'?",
      options: ["k", "M", "G", "T"],
      answer: "1",
      explanation:
        "Mega (M) = 1,000,000 = one million.",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "How is the unit of density derived from fundamental units?",
      options: [
        "By adding mass and volume",
        "By dividing mass by volume (kg/m³)",
        "By multiplying mass × volume",
        "By dividing volume by mass",
      ],
      answer: "1",
      explanation:
        "Density = mass / volume → kg / m³ = kg/m³.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Which one is NOT a correct way to derive a unit?",
      options: [
        "Area = length × length = m²",
        "Volume = m³",
        "Speed = m/s",
        "Force = kg + m/s",
      ],
      answer: "3",
      explanation:
        "Force = mass × acceleration = kg × m/s² = N. It uses MULTIPLICATION, not addition. You cannot ADD units of different quantities.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Convert 500 grams to kilograms.",
      options: ["0.05 kg", "0.5 kg", "5 kg", "50 kg"],
      answer: "1",
      explanation:
        "500 g ÷ 1000 = 0.5 kg.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Convert 30 minutes to hours.",
      options: ["0.3 h", "0.5 h", "1.5 h", "3 h"],
      answer: "1",
      explanation:
        "30 ÷ 60 = 0.5 hours.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Convert 1000 cm to kilometers.",
      options: ["0.001 km", "0.01 km", "0.1 km", "1 km"],
      answer: "1",
      explanation:
        "1000 cm = 10 m (since 1 m = 100 cm). 10 m ÷ 1000 = 0.01 km.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Express 3500 m in km using the appropriate prefix.",
      options: ["0.35 km", "3.5 km", "35 km", "350 km"],
      answer: "1",
      explanation:
        "3500 ÷ 1000 = 3.5 km.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Express 0.0012 seconds using the appropriate prefix.",
      options: ["1.2 ms", "12 ms", "0.12 ms", "120 ms"],
      answer: "0",
      explanation:
        "0.0012 s = 1.2 × 10⁻³ s = 1.2 milliseconds (ms).",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "Express 0.01 g using the appropriate prefix.",
      options: ["1 cg", "10 cg", "100 cg", "0.1 cg"],
      answer: "0",
      explanation:
        "0.01 g = 1 centigram (cg), since centi = 0.01.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "Express 0.005 m using the appropriate prefix.",
      options: ["5 mm", "0.5 mm", "50 mm", "500 mm"],
      answer: "0",
      explanation:
        "0.005 m = 5 × 10⁻³ m = 5 mm.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "Which type of prefix is 'M' (mega)?",
      options: [
        "For small numbers",
        "For large numbers",
        "For very small numbers",
        "Not a prefix",
      ],
      answer: "1",
      explanation:
        "Mega (M) is for very LARGE numbers: 1,000,000.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Two students measure the mass of a 100 g object. Student A gets 99, 101, 100, 99, 101 g. Student B gets 95, 96, 94, 95, 96 g. Which statement is TRUE?",
      options: [
        "Both are accurate and precise",
        "Student A is accurate and precise; Student B is precise but not accurate",
        "Student A is precise but not accurate; Student B is accurate",
        "Both are neither",
      ],
      answer: "1",
      explanation:
        "Student A: close to 100 (accurate) AND close to each other (precise). Student B: close to each other (precise) but not close to 100 (not accurate).",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "In the scientific method, why is background research important?",
      options: [
        "To avoid repeating past mistakes",
        "To copy someone else's work",
        "To save time",
        "It is optional",
      ],
      answer: "0",
      explanation:
        "Background research helps you understand what is already known, avoid repeating mistakes, and design better experiments.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "Which statement is TRUE about scientific hypotheses?",
      options: [
        "They must be true",
        "They must be testable and logical",
        "They must be simple",
        "They cannot change",
      ],
      answer: "1",
      explanation:
        "A hypothesis must be TESTABLE and LOGICAL. It may turn out to be false — that's fine. Science is about testing ideas.",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "The main difference between accuracy and precision is:",
      options: [
        "Accuracy is about size, precision is about weight",
        "Accuracy is closeness to true value; precision is closeness of repeated values",
        "They mean the same thing",
        "Accuracy is for temperature only",
      ],
      answer: "1",
      explanation:
        "Banchi, memorize this. Accuracy = close to TRUE value. Precision = close to EACH OTHER.",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which prefixes go from LARGEST to SMALLEST?",
      options: [
        "mega, kilo, centi, milli",
        "milli, centi, kilo, mega",
        "kilo, mega, milli, centi",
        "centi, milli, mega, kilo",
      ],
      answer: "0",
      explanation:
        "Largest to smallest: mega (1,000,000) > kilo (1000) > centi (0.01) > milli (0.001).",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "Why is it important to check that a balance reads zero before measuring?",
      options: [
        "To get accurate measurements — an incorrect zero gives wrong values",
        "Because it is a rule",
        "To save electricity",
        "To look professional",
      ],
      answer: "0",
      explanation:
        "If the balance does not read zero with no load, all your measurements will be off by that amount — accuracy suffers.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "Which statement is TRUE about the relationship between accuracy and precision?",
      options: [
        "Precise measurements are always accurate",
        "Accurate measurements are always precise",
        "You can be precise without being accurate",
        "You cannot be both accurate and precise",
      ],
      answer: "2",
      explanation:
        "You CAN be precise without being accurate (e.g., wrong ruler that's consistent). Precision doesn't guarantee accuracy.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "If a student's experiment result does NOT support the hypothesis, what should they do?",
      options: [
        "Fake the results",
        "Change the hypothesis or the experiment and try again",
        "Give up",
        "Ignore the findings",
      ],
      answer: "1",
      explanation:
        "If the hypothesis is not supported, you can create a NEW hypothesis and test it. This is how science progresses.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT a valid reason for communicating scientific results?",
      options: [
        "Allowing others to verify your findings",
        "Strengthening the hypothesis if repeated",
        "Making you famous",
        "Enabling other scientists to build on your work",
      ],
      answer: "2",
      explanation:
        "Communicating results is about verification and progress, not fame.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "A student's measurement of a 5 g object is 5.001 g. This is:",
      options: [
        "Accurate and precise",
        "Precise but not accurate",
        "Accurate but not precise",
        "Neither",
      ],
      answer: "0",
      explanation:
        "The measurement (5.001 g) is very close to the true value (5 g), so it's ACCURATE. If repeated measurements are similarly close, they are also PRECISE.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "Which step of the scientific method would use 'if...then...' statements?",
      options: [
        "Asking a question",
        "Forming a hypothesis",
        "Communicating results",
        "Analyzing results",
      ],
      answer: "1",
      explanation:
        "Hypotheses are often written in 'If X, then Y' format — a testable prediction.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "You measure the length of a table 5 times and get 2.51 m, 2.52 m, 2.51 m, 2.50 m, 2.52 m. The true length is 2.51 m. This shows:",
      options: [
        "Both accurate and precise",
        "Precise but not accurate",
        "Accurate but not precise",
        "Neither",
      ],
      answer: "0",
      explanation:
        "The values are close to each other (precise) AND close to the true value (accurate). Both.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "Which one is the FIRST step in carrying out a scientific investigation?",
      options: [
        "Hypothesizing",
        "Making an observation",
        "Testing",
        "Concluding",
      ],
      answer: "1",
      explanation:
        "Scientific investigation typically begins with observations, which lead to questions.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "The scientific method can be applied to:",
      options: [
        "Only physics",
        "Only chemistry",
        "Only biology",
        "All sciences, including social sciences",
      ],
      answer: "3",
      explanation:
        "All sciences use variations of the scientific method — physics, chemistry, biology, and even social sciences.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the purpose of the prefix 'micro' in 'micrometer'?",
      options: [
        "To indicate 1,000 m",
        "To indicate 1/100 m",
        "To indicate 1/1,000,000 m",
        "To indicate 100 m",
      ],
      answer: "2",
      explanation:
        "Micro = 0.000001. So 1 micrometer = 1/1,000,000 meter.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about measurements is TRUE?",
      options: [
        "All measurements are perfectly accurate",
        "All measurements have some uncertainty",
        "Only wrong measurements have uncertainty",
        "Uncertainty is not important",
      ],
      answer: "1",
      explanation:
        "All measurements have some uncertainty due to instrument limitations, human error, and environmental factors.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly matches the quantity, unit, and instrument?",
      options: [
        "Mass → second → thermometer",
        "Time → kilogram → ruler",
        "Temperature → Kelvin → thermometer",
        "Length → liter → balance",
      ],
      answer: "2",
      explanation:
        "Temperature (quantity) → Kelvin (unit) → thermometer (instrument). All others have mismatched parts.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "A student carries out an experiment with 5 plants: each gets a different amount of water but the same sunlight, soil, and temperature. This is:",
      options: [
        "Not a fair test",
        "A fair test — only one variable is changed",
        "A random experiment",
        "Not scientific",
      ],
      answer: "1",
      explanation:
        "Only ONE factor (water) is changed. All other factors are constant. This is proper fair testing.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about the scientific method is FALSE?",
      options: [
        "It is a systematic way to investigate",
        "It can only be used by professional scientists",
        "It involves observation, hypothesis, and testing",
        "It requires careful recording of results",
      ],
      answer: "1",
      explanation:
        "The scientific method can be used by ANYONE — students, teachers, farmers. It's a universal thinking process.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Why must scientific results be repeatable by others?",
      options: [
        "To verify the results are reliable",
        "To make the experiment longer",
        "To confuse other scientists",
        "It is just a rule",
      ],
      answer: "0",
      explanation:
        "Repeatability is the foundation of science. If others get the same result, the finding is reliable.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "A class measures the boiling point of water at sea level and gets 100.2°C, 100.1°C, 100.3°C, 100.15°C, 100.25°C. The accepted value is 100.0°C. These results are:",
      options: [
        "Accurate and precise",
        "Precise but not accurate",
        "Accurate but not precise",
        "Neither",
      ],
      answer: "1",
      explanation:
        "All values are close to each other (PRECISE) but all slightly above 100.0 (slightly not accurate — systematic error).",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "Define a fundamental quantity and give 3 examples.",
      answer:
        "A fundamental quantity is one that cannot be expressed in terms of any other quantity. Examples: length, mass, time (also: temperature, electric current, luminous intensity, amount of substance).",
      explanation:
        "There are 7 fundamental quantities in total.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "Explain why prefixes are useful in science.",
      answer:
        "In science we deal with quantities that are very large (like the mass of the sun) or very small (like the size of an atom). Prefixes are short-hand ways of writing these numbers. Example: 1,000,000 m is easier to write as 1 Mm (megameter).",
      explanation:
        "Prefixes make very large or very small numbers easier to write and read.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "Describe the steps of the scientific method and give a brief example of each.",
      answer:
        "1) Ask question — Is air needed for burning? 2) Research — read books. 3) Hypothesis — 'Air is needed for burning.' 4) Test — cover a candle with a jar. 5) Analyze — the candle went out. 6) Communicate — write a report.",
      explanation:
        "The candle experiment demonstrates every step of the scientific method.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Distinguish between accuracy and precision. Give an example showing that a measurement can be precise but not accurate.",
      answer:
        "Accuracy = how close a measurement is to the accepted/true value. Precision = how close repeated measurements are to each other. Example: if the true mass of an object is 10 g, and 5 measurements give 3.1, 3.2, 3.15, 3.2, 3.18 g — the values are close to each other (precise) but all far from 10 (not accurate). This shows precision does NOT guarantee accuracy.",
      explanation:
        "Remember: a student can be very precise with a broken ruler — all measurements consistent, but all wrong.",
    },
  ],
};