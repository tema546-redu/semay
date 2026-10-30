import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 MATHEMATICS — CHAPTER 2
// SQUARES, SQUARE ROOTS, CUBES AND CUBE ROOTS
// Source: AAEB Grade 8 Mathematics Student Textbook (pp. 41–66)
// For: Banchi (ባንቺ) — Grade 8
// Language level: A2 / A1 / B1 — clear, short, no harsh words.
// ============================================================

export const g8MathCh2: Chapter = {
  id: "ch2",
  number: 2,
  title: "Squares, Square Roots, Cubes and Cube Roots",
  titleAm: "ካሬዎች፣ የካሬ ሥሮች፣ ኪዩቦች እና የኪዩብ ሥሮች",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. What is a Square of a Number?",
      titleAm: "የቁጥር ካሬ ምንድን ነው?",
      body:
        "Banchi, a square means you multiply a number by itself. We write it as a² (read 'a squared').",
      bodyAm:
        "ባንቺ፣ ካሬ ማለት አንድን ቁጥር በራሱ ማባዛት ነው። እንደ a² እንጽፋለን ('a ካሬ' ተብሎ ይነበባል)።",
      children: [
        {
          id: "n1-1",
          title: "Definition",
          titleAm: "ትርጓሜ",
          body:
            "a² = a × a. The small 2 is called the exponent. The letter a is called the base.",
          bodyAm:
            "a² = a × a። ትንሹ 2 ኤክስፖኔንት ይባላል። ፊደሉ a ቤዝ (መሠረት) ይባላል።",
        },
        {
          id: "n1-2",
          title: "Quick examples",
          titleAm: "ፈጣን ምሳሌዎች",
          body:
            "1² = 1.  2² = 4.  3² = 9.  4² = 16.  5² = 25.  10² = 100.",
          bodyAm:
            "1² = 1። 2² = 4። 3² = 9። 4² = 16። 5² = 25። 10² = 100።",
        },
        {
          id: "n1-3",
          title: "Square of a fraction",
          titleAm: "የክፍልፋይ ካሬ",
          body:
            "Square the top and square the bottom. Example: (4/3)² = 16/9. And (−10/16)² = 100/256.",
          bodyAm:
            "የላይኛውን እና የታችኛውን ሁለቱንም አራት አድርጉ። ምሳሌ፡ (4/3)² = 16/9። እና (−10/16)² = 100/256።",
        },
        {
          id: "n1-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, a² is NOT the same as 2a.  a² = a × a (multiply twice). 2a = a + a (add twice). Example: 10² = 100, but 10 × 2 = 20. Always check which one is asked.",
          bodyAm:
            "ባንቺ፣ a² ከ 2a ጋር ተመሳሳይ አይደለም። a² = a × a (ሁለት ጊዜ ማባዛት)። 2a = a + a (ሁለት ጊዜ መደመር)። ምሳሌ፡ 10² = 100፣ ግን 10 × 2 = 20። ሁልጊዜ የሚጠየቀውን ያረጋግጡ።",
        },
        {
          id: "n1-5",
          title: "Perfect square",
          titleAm: "ፍጹም ካሬ",
          body:
            "A number is a perfect square if it equals m² for some rational m. Examples: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.",
          bodyAm:
            "አንድ ቁጥር ከ m² ጋር እኩል ከሆነ ፍጹም ካሬ ይባላል። ምሳሌዎች፡ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100።",
        },
        {
          id: "n1-6",
          title: "Practise yourself, Banchi",
          titleAm: "ራስሽን ሞክሪ ባንቺ",
          body:
            "Compute: 6², 7², 8², 9², (−30)², (1/5)².  Answers: 36, 49, 64, 81, 900, 1/25.",
          bodyAm:
            "አስሉ፡ 6², 7², 8², 9², (−30)², (1/5)²። መልሶች፡ 36, 49, 64, 81, 900, 1/25።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Using Tables and Calculator to Find Squares",
      titleAm: "ካሬ ለማግኘት ሠንጠረዥ እና ካልኩሌተር መጠቀም",
      body:
        "Banchi, for numbers like 3.24, doing multiplication by hand takes time. Your book has a table of squares at the back. You can also use a scientific calculator for exact answers.",
      bodyAm:
        "ባንቺ፣ እንደ 3.24 ላሉ ቁጥሮች በእጅ ማባዛት ጊዜ ይወስዳል። በመጽሐፍሽ መጨረሻ ላይ የካሬ ሠንጠረዥ አለ። ትክክለኛ መልስ ለማግኘት ሳይንሳዊ ካልኩሌተርም መጠቀም ትችያለሽ።",
      children: [
        {
          id: "n2-1",
          title: "How to use the table",
          titleAm: "ሠንጠረዡን እንዴት መጠቀም",
          body:
            "Step 1: Find the row that starts with the first two digits (e.g. 3.2). Step 2: Move right to the column of the third digit (e.g. 4). Step 3: Read the value where they meet. Example: (3.24)² ≈ 10.50.",
          bodyAm:
            "ደረጃ 1፡ በመጀመሪያዎቹ ሁለት አሃዞች የሚጀምረውን ረድፍ ያግኙ (3.2)። ደረጃ 2፡ ወደ ሦስተኛው አሃዝ አምድ ይሂዱ (4)። ደረጃ 3፡ የሚገናኙበትን ዋጋ ያንብቡ። ምሳሌ፡ (3.24)² ≈ 10.50።",
        },
        {
          id: "n2-2",
          title: "Scaling trick (very important!)",
          titleAm: "የመጠን ማስተካከያ (በጣም ጠቃሚ!)",
          body:
            "If you know (3.52)² = 12.39, then (35.2)² = 12.39 × 100 = 1239. And (0.365)² = 13.32 × 0.01 = 0.1332. Moving the decimal point 1 place in the base moves it 2 places in the square.",
          bodyAm:
            "(3.52)² = 12.39 ካወቅሽ፣ (35.2)² = 12.39 × 100 = 1239። እና (0.365)² = 13.32 × 0.01 = 0.1332። በቤዙ ውስጥ የአስርዮሽ ነጥብ 1 ቦታ መንቀሳቀሱ በካሬው ውስጥ 2 ቦታ ያንቀሳቅሳል።",
        },
        {
          id: "n2-3",
          title: "Three ways to find a square",
          titleAm: "ካሬ ለማግኘት ሦስት መንገዶች",
          body:
            "1) Rough calculation (round and multiply). 2) Table value (approximate). 3) Scientific calculator (exact). Example: (6.75)². Rough: 7² = 49. Table: 45.56. Calculator: 45.5625.",
          bodyAm:
            "1) ሻጋታ ስሌት (አጠጋግ አድርገሽ አባዢ)። 2) የሠንጠረዥ ዋጋ (ግምታዊ)። 3) ሳይንሳዊ ካልኩሌተር (ትክክለኛ)። ምሳሌ፡ (6.75)²። ሻጋታ፡ 7² = 49። ሠንጠረዥ፡ 45.56። ካልኩሌተር፡ 45.5625።",
        },
        {
          id: "n2-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, the table value is approximate — it is not the exact answer. When the exam asks for the exact value, use a calculator or multiply by hand.",
          bodyAm:
            "ባንቺ፣ የሠንጠረዡ ዋጋ ግምታዊ ነው — ትክክለኛው መልስ አይደለም። ፈተናው ትክክለኛ ዋጋ ከጠየቀ ካልኩሌተር ወይም በእጅ ማባዛት ይጠቀሙ።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Square Roots",
      titleAm: "የካሬ ሥሮች",
      body:
        "The square root of a number is the number that, when squared, gives back the original. If a² = b, then a is the square root of b.",
      bodyAm:
        "የቁጥር ካሬ ሥር ማለት በካሬ ሲባዛ ዋናውን ቁጥር የሚመልስ ቁጥር ነው። a² = b ከሆነ a የ b ካሬ ሥር ነው።",
      children: [
        {
          id: "n3-1",
          title: "The symbol √",
          titleAm: "ምልክቱ √",
          body:
            "√ is called the radical sign. √16 = 4. The number under the sign (16) is called the radicand. The positive root is called the principal square root.",
          bodyAm:
            "√ ራዲካል ምልክት ይባላል። √16 = 4። በምልክቱ ሥር ያለው ቁጥር (16) ራዲካንድ ይባላል። አዎንታዊው ሥር ዋና የካሬ ሥር ይባላል።",
        },
        {
          id: "n3-2",
          title: "Square and square root are opposites",
          titleAm: "ካሬ እና የካሬ ሥር ተቃራኒዎች ናቸው",
          body:
            "Squaring and finding the square root undo each other. √(4²) = 4. And (√16)² = 16.",
          bodyAm:
            "ካሬ ማድረግ እና የካሬ ሥር ማግኘት አንዱ ሌላውን ይሽራል። √(4²) = 4። እና (√16)² = 16።",
        },
        {
          id: "n3-3",
          title: "Using prime factorization",
          titleAm: "የፕራይም ፋክተር መጠቀም",
          body:
            "Example: √64. Break 64 into prime factors: 2 × 2 × 2 × 2 × 2 × 2. Group into two equal halves: (2 × 2 × 2) × (2 × 2 × 2) = 8 × 8. So √64 = 8.",
          bodyAm:
            "ምሳሌ፡ √64። 64ን ወደ ፕራይም ፋክተሮች ክፈል፡ 2 × 2 × 2 × 2 × 2 × 2። ወደ ሁለት እኩል ቡድኖች ከፍል፡ (2 × 2 × 2) × (2 × 2 × 2) = 8 × 8። ስለዚህ √64 = 8።",
        },
        {
          id: "n3-4",
          title: "Which numbers have square roots?",
          titleAm: "የትኞቹ ቁጥሮች የካሬ ሥር አላቸው?",
          body:
            "Only numbers ≥ 0 have real square roots. Negative numbers have no square root in the rational set. √0 = 0.",
          bodyAm:
            "≥ 0 የሆኑ ቁጥሮች ብቻ ትክክለኛ የካሬ ሥር አላቸው። አሉታዊ ቁጥሮች በራሽኖል ስብስብ ውስጥ የካሬ ሥር የላቸውም። √0 = 0።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, √16 = 4 only. Do not write 4 and −4 as two answers. The symbol √ always gives the positive (principal) root. If the question wants both, it will ask for 'square roots' (plural) or write ±√16.",
          bodyAm:
            "ባንቺ፣ √16 = 4 ብቻ ነው። 4 እና −4 ብለሽ ሁለት መልስ አትጻፊ። ምልክቱ √ ሁልጊዜ አዎንታዊውን (ዋና) ሥር ይሰጣል። ጥያቄው ሁለቱንም ከፈለገ 'square roots' (ብዙ ቁጥር) ይላል ወይም ±√16 ይጽፋል።",
        },
        {
          id: "n3-6",
          title: "Practise yourself, Banchi",
          titleAm: "ራስሽን ሞክሪ ባንቺ",
          body:
            "Find: √0, √169, √576, √0.25, √0.0016. Answers: 0, 13, 24, 0.5, 0.04.",
          bodyAm:
            "አግኚ፡ √0, √169, √576, √0.25, √0.0016። መልሶች፡ 0, 13, 24, 0.5, 0.04።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Square Roots from Tables",
      titleAm: "የካሬ ሥሮችን ከሠንጠረዥ ማግኘት",
      body:
        "Banchi, when the number is not a perfect square (like 16.40 or 71.80), use the table of square roots.",
      bodyAm:
        "ባንቺ፣ ቁጥሩ ፍጹም ካሬ ካልሆነ (እንደ 16.40 ወይም 71.80) የካሬ ሥሮችን ሠንጠረዥ ተጠቀሚ።",
      children: [
        {
          id: "n4-1",
          title: "How to read the table for square roots",
          titleAm: "ለካሬ ሥሮች ሠንጠረዡን እንዴት ማንበብ",
          body:
            "Step 1: Find the number in the body of the table. Step 2: Move left to read the first two digits under x. Step 3: Move up to read the third digit. Example: √16.40 ≈ 4.05.",
          bodyAm:
            "ደረጃ 1፡ ቁጥሩን በሠንጠረዡ አካል ውስጥ ያግኙ። ደረጃ 2፡ ወደ ግራ ተንቀሳቅሰው የመጀመሪያዎቹን ሁለት አሃዞች ከ x ሥር ያንብቡ። ደረጃ 3፡ ወደ ላይ ተንቀሳቅሰው ሦስተኛውን አሃዝ ያንብቡ። ምሳሌ፡ √16.40 ≈ 4.05።",
        },
        {
          id: "n4-2",
          title: "If the number is not in the table",
          titleAm: "ቁጥሩ በሠንጠረዡ ከሌለ",
          body:
            "Pick the nearest number in the table. Example: √71.80 is not there. The nearest value is √71.74 = 8.47. So √71.80 ≈ 8.47.",
          bodyAm:
            "በሠንጠረዡ ውስጥ የቅርብ ቁጥር ምረጪ። ምሳሌ፡ √71.80 በሠንጠረዡ የለም። የቅርቡ ዋጋ √71.74 = 8.47 ነው። ስለዚህ √71.80 ≈ 8.47።",
        },
        {
          id: "n4-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Table answers are approximate. In an exam, if the question says 'approximately' use the table. If it says 'exact', use prime factorization or a calculator.",
          bodyAm:
            "የሠንጠረዥ መልሶች ግምታዊ ናቸው። በፈተና ላይ 'approximately' ካለ ሠንጠረዡን ተጠቀሚ። 'exact' ካለ የፕራይም ፋክተር ወይም ካልኩሌተር ተጠቀሚ።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Cubes of Numbers",
      titleAm: "የቁጥሮች ኪዩቦች",
      body:
        "A cube means you multiply a number by itself three times. We write it as a³ (read 'a cubed').",
      bodyAm:
        "ኪዩብ ማለት አንድን ቁጥር በራሱ ሦስት ጊዜ ማባዛት ነው። እንደ a³ እንጽፋለን ('a ኪዩብ' ተብሎ ይነበባል)።",
      children: [
        {
          id: "n5-1",
          title: "Definition",
          titleAm: "ትርጓሜ",
          body:
            "a³ = a × a × a.",
          bodyAm: "a³ = a × a × a።",
        },
        {
          id: "n5-2",
          title: "Quick examples",
          titleAm: "ፈጣን ምሳሌዎች",
          body:
            "1³ = 1.  2³ = 8.  3³ = 27.  4³ = 64.  5³ = 125.  (−4)³ = −64.  (2/3)³ = 8/27.",
          bodyAm:
            "1³ = 1። 2³ = 8። 3³ = 27። 4³ = 64። 5³ = 125። (−4)³ = −64። (2/3)³ = 8/27።",
        },
        {
          id: "n5-3",
          title: "Sign rules",
          titleAm: "የምልክት ደንቦች",
          body:
            "Positive number cubed → positive. Negative number cubed → negative. (Only odd powers keep the sign.)",
          bodyAm:
            "አዎንታዊ ቁጥር ኪዩብ → አዎንታዊ። አሉታዊ ቁጥር ኪዩብ → አሉታዊ። (ያልተመጣጠነ ኃይል ብቻ ምልክቱን ይይዛል።)",
        },
        {
          id: "n5-4",
          title: "Perfect cube",
          titleAm: "ፍጹም ኪዩብ",
          body:
            "A number is a perfect cube if it equals m³ for some rational m. Examples: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000.",
          bodyAm:
            "አንድ ቁጥር ከ m³ ጋር እኩል ከሆነ ፍጹም ኪዩብ ይባላል። ምሳሌዎች፡ 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000።",
        },
        {
          id: "n5-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, a³ is not 3a. a³ = a × a × a. 3a = a + a + a. Example: 2³ = 8, but 3 × 2 = 6. Also, (−3)³ = −27 but (−3)² = 9. Odd power keeps the minus; even power loses it.",
          bodyAm:
            "ባንቺ፣ a³ ከ 3a ጋር ተመሳሳይ አይደለም። a³ = a × a × a። 3a = a + a + a። ምሳሌ፡ 2³ = 8፣ ግን 3 × 2 = 6። ደግሞ (−3)³ = −27 ግን (−3)² = 9። ያልተመጣጠነ ኃይል ሲቀነስ ይይዛል፤ እኩል ኃይል ያጠፋዋል።",
        },
        {
          id: "n5-6",
          title: "Practise yourself, Banchi",
          titleAm: "ራስሽን ሞክሪ ባንቺ",
          body:
            "Compute: 6³, 7³, (−5)³, (1/4)³, (−1/2)³. Answers: 216, 343, −125, 1/64, −1/8.",
          bodyAm:
            "አስሊ፡ 6³, 7³, (−5)³, (1/4)³, (−1/2)³። መልሶች፡ 216, 343, −125, 1/64, −1/8።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Cube Roots",
      titleAm: "የኪዩብ ሥሮች",
      body:
        "The cube root of a number is the number that, when cubed, gives back the original. If a³ = b, then a is the cube root of b. We write ∛b.",
      bodyAm:
        "የቁጥር ኪዩብ ሥር ማለት በኪዩብ ሲባዛ ዋናውን ቁጥር የሚመልስ ቁጥር ነው። a³ = b ከሆነ a የ b ኪዩብ ሥር ነው። ∛b ብለን እንጽፋለን።",
      children: [
        {
          id: "n6-1",
          title: "Examples",
          titleAm: "ምሳሌዎች",
          body:
            "∛1 = 1.  ∛8 = 2.  ∛27 = 3.  ∛64 = 4.  ∛125 = 5.  ∛216 = 6.  ∛1000 = 10.",
          bodyAm:
            "∛1 = 1። ∛8 = 2። ∛27 = 3። ∛64 = 4። ∛125 = 5። ∛216 = 6። ∛1000 = 10።",
        },
        {
          id: "n6-2",
          title: "Every rational number has exactly one cube root",
          titleAm: "ማንኛውም ራሽኖል ቁጥር በትክክል አንድ የኪዩብ ሥር አለው",
          body:
            "Unlike square roots (which have ± answers), cube roots have only ONE answer. ∛−8 = −2, not −2 and 2.",
          bodyAm:
            "ከካሬ ሥሮች በተለየ (± መልሶች ያሉት) የኪዩብ ሥሮች አንድ ብቻ መልስ አላቸው። ∛−8 = −2፣ −2 እና 2 አይደለም።",
        },
        {
          id: "n6-3",
          title: "Radical parts",
          titleAm: "የራዲካል ክፍሎች",
          body:
            "∛ is the radical sign. The small 3 is the index (it means cube root). The number inside is the radicand. If no index is written, it means square root.",
          bodyAm:
            "∛ ራዲካል ምልክት ነው። ትንሹ 3 ኢንዴክስ ይባላል (የኪዩብ ሥር ማለት ነው)። ውስጥ ያለው ቁጥር ራዲካንድ ነው። ኢንዴክስ ካልተጻፈ የካሬ ሥር ማለት ነው።",
        },
        {
          id: "n6-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, you CAN take the cube root of a negative number. ∛−27 = −3 works because (−3)³ = −27. But you CANNOT take the square root of a negative. √−9 has no answer in real numbers.",
          bodyAm:
            "ባንቺ፣ የአሉታዊ ቁጥር ኪዩብ ሥር ማውጣት ትችያለሽ። ∛−27 = −3 ይሠራል ምክንያቱም (−3)³ = −27። ግን የአሉታዊ ቁጥር ካሬ ሥር ማውጣት አትችልም። √−9 በእውነተኛ ቁጥሮች ውስጥ መልስ የለውም።",
        },
      ],
    },

    {
      id: "n7",
      title: "7. Real-Life Uses",
      titleAm: "የዕለት ተዕለት አጠቃቀሞች",
      body:
        "Squares and square roots help find the side of a square when you know its area. Cubes and cube roots help find the side of a cube when you know its volume.",
      bodyAm:
        "ካሬዎች እና የካሬ ሥሮች የካሬ ስፋት ሲያውቁ ጎኑን ለማግኘት ያገዛሉ። ኪዩቦች እና የኪዩብ ሥሮች የኪዩብ መጠን ሲያውቁ ጎኑን ለማግኘት ያገዛሉ።",
      children: [
        {
          id: "n7-1",
          title: "Square area formula",
          titleAm: "የካሬ ስፋት ቀመር",
          body:
            "If the side of a square is s, then Area = s². If you know the area, s = √Area. Example: Area 400 m² → s = √400 = 20 m.",
          bodyAm:
            "የካሬው ጎን s ከሆነ ስፋቱ = s²። ስፋቱን ካወቅሽ s = √Area። ምሳሌ፡ ስፋት 400 m² → s = √400 = 20 m።",
        },
        {
          id: "n7-2",
          title: "Cube volume formula",
          titleAm: "የኪዩብ መጠን ቀመር",
          body:
            "If the side of a cube is s, then Volume = s³. If you know the volume, s = ∛Volume. Example: Volume 512 cm³ → s = ∛512 = 8 cm.",
          bodyAm:
            "የኪዩብ ጎን s ከሆነ መጠኑ = s³። መጠኑን ካወቅሽ s = ∛Volume። ምሳሌ፡ መጠን 512 cm³ → s = ∛512 = 8 cm።",
        },
        {
          id: "n7-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, area uses s². Volume uses s³. Do not mix them up. If a problem says 'area', use the square root. If it says 'volume', use the cube root.",
          bodyAm:
            "ባንቺ፣ ስፋት s² ይጠቀማል። መጠን s³ ይጠቀማል። አታደናግሪያቸው። ጥያቄው 'area' ካለ የካሬ ሥር ተጠቀሚ። 'volume' ካለ የኪዩብ ሥር ተጠቀሚ።",
        },
      ],
    },

    {
      id: "n8",
      title: "8. Exam Strategy — Chapter 2",
      titleAm: "የፈተና ስልት — ምዕራፍ 2",
      body:
        "Banchi, before you answer a squares/cubes question, run through these 4 quick checks.",
      bodyAm:
        "ባንቺ፣ የካሬ/ኪዩብ ጥያቄ ከመመለስሽ በፊት እነዚህን 4 ፈጣን ቼኮች አካሂጂ።",
      children: [
        {
          id: "n8-1",
          title: "Check 1 — Is it square (²) or cube (³)?",
          titleAm: "ቼክ 1 — ካሬ (²) ወይስ ኪዩብ (³)?",
          body:
            "Look at the exponent. 2 means multiply twice, 3 means multiply three times.",
          bodyAm:
            "ኤክስፖኔንቱን ተመልከቺ። 2 ማለት ሁለት ጊዜ ማባዛት፣ 3 ማለት ሦስት ጊዜ ማባዛት ነው።",
        },
        {
          id: "n8-2",
          title: "Check 2 — Is the base positive or negative?",
          titleAm: "ቼክ 2 — ቤዙ አዎንታዊ ወይስ አሉታዊ?",
          body:
            "Negative base with even power → positive. Negative base with odd power → negative.",
          bodyAm:
            "አሉታዊ ቤዝ ከእኩል ኃይል ጋር → አዎንታዊ። አሉታዊ ቤዝ ከያልተመጣጠነ ኃይል ጋር → አሉታዊ።",
        },
        {
          id: "n8-3",
          title: "Check 3 — Square root or cube root?",
          titleAm: "ቼክ 3 — ካሬ ሥር ወይስ ኪዩብ ሥር?",
          body:
            "√ has no index (or an invisible 2) → square root. ∛ has a small 3 → cube root. Square root of negative has no answer. Cube root of negative IS allowed.",
          bodyAm:
            "√ ኢንዴክስ የለውም (ወይም የማይታይ 2) → ካሬ ሥር። ∛ ትንሽ 3 አለው → ኪዩብ ሥር። የአሉታዊ ካሬ ሥር መልስ የለውም። የአሉታዊ ኪዩብ ሥር ይፈቀዳል።",
        },
        {
          id: "n8-4",
          title: "Check 4 — Perfect square or not?",
          titleAm: "ቼክ 4 — ፍጹም ካሬ ወይስ አይደለም?",
          body:
            "Memorize: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225. And for cubes: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000. Recognizing them instantly saves time.",
          bodyAm:
            "አስታውሺ፡ 1, 4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 169, 196, 225። ለኪዩቦችም፡ 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000። ወዲያውኑ ማወቅ ጊዜ ይቆጥባል።",
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
      stem: "What is 7²?",
      options: ["14", "49", "77", "7"],
      answer: "1",
      explanation:
        "7² means 7 × 7 = 49. Banchi, be careful: 7² is NOT 7 × 2 = 14. Squaring means multiplying by itself, not by 2.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 9²?",
      options: ["18", "72", "81", "99"],
      answer: "2",
      explanation:
        "9² = 9 × 9 = 81. Do not confuse with 9 × 2 = 18. The ² means multiply by itself.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 10²?",
      options: ["20", "100", "1000", "10"],
      answer: "1",
      explanation:
        "10² = 10 × 10 = 100. When you square a number ending in zero, the answer ends in two zeros.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "What is (−4)²?",
      options: ["−16", "16", "−8", "8"],
      answer: "1",
      explanation:
        "(−4)² = (−4) × (−4) = 16. Negative × negative = positive. Banchi, this is a common exam trap: (−4)² is 16, NOT −16.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 2³?",
      options: ["6", "8", "9", "23"],
      answer: "1",
      explanation:
        "2³ = 2 × 2 × 2 = 8. Do not confuse with 2 × 3 = 6. The ³ means multiply by itself three times.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 5³?",
      options: ["15", "125", "25", "75"],
      answer: "1",
      explanation:
        "5³ = 5 × 5 × 5 = 25 × 5 = 125. First square (25), then multiply by 5 again.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "What is ∛8?",
      options: ["2", "4", "3", "8"],
      answer: "0",
      explanation:
        "∛8 means: what number times itself three times gives 8? 2 × 2 × 2 = 8. So ∛8 = 2.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "What is √25?",
      options: ["5", "−5", "5 or −5", "50"],
      answer: "0",
      explanation:
        "√25 = 5 (the principal square root, which is positive). Banchi, if the question wanted both, it would write ±√25 = ±5.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "What is √0?",
      options: ["0", "1", "No solution", "Undefined"],
      answer: "0",
      explanation:
        "√0 = 0. Because 0 × 0 = 0. The square root of zero is always zero.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a perfect square?",
      options: ["20", "24", "36", "50"],
      answer: "2",
      explanation:
        "36 = 6². So it's a perfect square. The others: 20 (not 4²=16 or 5²=25), 24 (not), 50 (not).",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a perfect cube?",
      options: ["9", "16", "27", "50"],
      answer: "2",
      explanation:
        "27 = 3³. So it's a perfect cube. 9 = 3² (square, not cube). 16 = 4² (square). 50 is neither.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "What is (−5)³?",
      options: ["−125", "125", "−15", "15"],
      answer: "0",
      explanation:
        "(−5)³ = (−5) × (−5) × (−5) = 25 × (−5) = −125. An odd number of negatives gives a negative result.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "What is (1/3)²?",
      options: ["1/9", "1/6", "2/3", "1/3"],
      answer: "0",
      explanation:
        "(1/3)² = (1/3) × (1/3) = 1/9. Square the top and square the bottom.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "What is ∛27?",
      options: ["3", "9", "3 or −3", "13"],
      answer: "0",
      explanation:
        "∛27 = 3 because 3 × 3 × 3 = 27. Cube roots have only one answer. Banchi, unlike square roots, no ± here.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "Is √−9 possible?",
      options: ["Yes, √−9 = −3", "Yes, √−9 = 3", "No, negative numbers have no real square root", "√−9 = 9"],
      answer: "2",
      explanation:
        "You cannot square any real number and get a negative. So √−9 has no real answer. But ∛−27 IS allowed: ∛−27 = −3.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "What is √100?",
      options: ["10", "−10", "10 or −10", "50"],
      answer: "0",
      explanation:
        "√100 = 10 (positive). Because 10 × 10 = 100. The symbol √ gives only the positive root.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "What is ∛125?",
      options: ["5", "25", "5 or −5", "15"],
      answer: "0",
      explanation:
        "∛125 = 5 because 5 × 5 × 5 = 125. Only one answer.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 12²?",
      options: ["24", "144", "124", "122"],
      answer: "1",
      explanation:
        "12² = 12 × 12 = 144. Memorize this — 12² = 144 is used often in exams.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 0²?",
      options: ["0", "1", "2", "Undefined"],
      answer: "0",
      explanation:
        "0² = 0 × 0 = 0. Zero squared is zero.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "The area of a square is 64 cm². What is the length of one side?",
      options: ["8 cm", "16 cm", "32 cm", "4 cm"],
      answer: "0",
      explanation:
        "Area of a square = s². So s = √64 = 8 cm. Banchi, remember: side = √Area.",
    },

    // ---------- MEDIUM MCQ (Q21–Q40) ----------
    {
      id: "q21",
      type: "mcq",
      difficulty: "medium",
      stem: "What is (−3)⁴?",
      options: ["−81", "81", "−12", "12"],
      answer: "1",
      explanation:
        "(−3)⁴ = (−3) × (−3) × (−3) × (−3) = 9 × 9 = 81. Even number of negatives → positive.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √144",
      options: ["12", "14", "24", "72"],
      answer: "0",
      explanation:
        "12 × 12 = 144, so √144 = 12. Memorize: 12² = 144.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √0.25",
      options: ["0.5", "0.05", "5", "2.5"],
      answer: "0",
      explanation:
        "0.5 × 0.5 = 0.25. So √0.25 = 0.5. The answer to a square root of a decimal less than 1 will be larger than the radicand.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √(25/100)",
      options: ["1/2", "1/4", "5/10", "Both A and C are the same"],
      answer: "3",
      explanation:
        "√(25/100) = √25 / √100 = 5/10 = 1/2. So options A (1/2) and C (5/10) are the same value.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "medium",
      stem: "Find the square root of 324 using prime factorization.",
      options: ["16", "18", "20", "24"],
      answer: "1",
      explanation:
        "324 = 2 × 2 × 3 × 3 × 3 × 3 = (2 × 3 × 3) × (2 × 3 × 3) = 18 × 18. So √324 = 18.",
    },
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Find the square root of 1225.",
      options: ["25", "35", "45", "55"],
      answer: "1",
      explanation:
        "1225 = 5 × 5 × 7 × 7 = (5 × 7) × (5 × 7) = 35 × 35. So √1225 = 35.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Find ∛216.",
      options: ["4", "5", "6", "7"],
      answer: "2",
      explanation:
        "6 × 6 × 6 = 216. So ∛216 = 6. Memorize: 1, 8, 27, 64, 125, 216 — first six perfect cubes.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Find ∛1000.",
      options: ["10", "100", "50", "20"],
      answer: "0",
      explanation:
        "10 × 10 × 10 = 1000. So ∛1000 = 10. Banchi, cube roots of numbers ending in three zeros are easy.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Find ∛(−343).",
      options: ["7", "−7", "±7", "No solution"],
      answer: "1",
      explanation:
        "(−7) × (−7) × (−7) = 49 × (−7) = −343. So ∛(−343) = −7. Cube roots of negatives ARE allowed.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "If (3.24)² = 10.50, what is (32.4)²?",
      options: ["105.0", "1050", "10.50", "1.050"],
      answer: "1",
      explanation:
        "32.4 = 3.24 × 10. So (32.4)² = (3.24)² × 10² = 10.50 × 100 = 1050. Banchi, this scaling trick is very useful!",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "If (3.67)² = 13.47, what is (0.367)²?",
      options: ["1.347", "0.1347", "0.01347", "13.47"],
      answer: "1",
      explanation:
        "0.367 = 3.67 × 0.1. So (0.367)² = (3.67)² × (0.1)² = 13.47 × 0.01 = 0.1347.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "If (4.63)² = 21.44, what is √2144?",
      options: ["46.3", "463", "4.63", "0.463"],
      answer: "0",
      explanation:
        "2144 = 21.44 × 100 = (4.63)² × 10². So √2144 = 4.63 × 10 = 46.3.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the sum of the first 10 odd numbers?",
      options: ["10", "55", "100", "110"],
      answer: "2",
      explanation:
        "Pattern: 1 + 3 + 5 + 7 + 9 + 11 + 13 + 15 + 17 + 19 = 100 = 10². The sum of the first n odd numbers is n².",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the sum of the first 15 odd numbers?",
      options: ["30", "150", "225", "300"],
      answer: "2",
      explanation:
        "Sum of first n odd numbers = n². So for n = 15: 15² = 225.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "The volume of a cube is 512 cm³. What is the side length?",
      options: ["6 cm", "7 cm", "8 cm", "9 cm"],
      answer: "2",
      explanation:
        "Volume = s³. So s = ∛512 = 8 cm. Check: 8 × 8 × 8 = 512.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is bigger: 4² or 2⁴?",
      options: ["4²", "2⁴", "They are equal", "Cannot tell"],
      answer: "2",
      explanation:
        "4² = 16 and 2⁴ = 16. They are equal. Banchi, careful — different bases and different exponents can give the same value.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is bigger: (−2)³ or (−3)²?",
      options: ["(−2)³", "(−3)²", "Equal", "Cannot tell"],
      answer: "1",
      explanation:
        "(−2)³ = −8. (−3)² = 9. Since 9 > −8, (−3)² is bigger. Any positive > any negative.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 8² − 7²",
      options: ["1", "15", "56", "113"],
      answer: "1",
      explanation:
        "8² = 64 and 7² = 49. Then 64 − 49 = 15. Banchi, note the pattern: n² − (n−1)² = 2n − 1 = 15 here.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 105² − 104²",
      options: ["1", "109", "209", "20900"],
      answer: "2",
      explanation:
        "105² = 11025 and 104² = 10816. Difference = 209. Or use the shortcut: 105² − 104² = 105 + 104 = 209.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √576",
      options: ["24", "26", "28", "36"],
      answer: "0",
      explanation:
        "24 × 24 = 576. So √576 = 24. Memorize common squares: 24² = 576.",
    },

    // ---------- HARD MCQ (Q41–Q45) ----------
    {
      id: "q41",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: √(16.40) using the numeral table (approximate).",
      options: ["4.0", "4.05", "4.1", "4.5"],
      answer: "1",
      explanation:
        "Find 16.40 in the body of the square root table. Move left to read 4.0 (first two digits). Move up to read the third digit 5. So √16.40 ≈ 4.05.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "hard",
      stem: "The sum of the first n odd numbers is 441. What is n?",
      options: ["19", "20", "21", "22"],
      answer: "2",
      explanation:
        "Sum of first n odd numbers = n². We need n² = 441. Since 21 × 21 = 441, n = 21.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: (√64)² + ∛(−27)",
      options: ["61", "67", "37", "43"],
      answer: "0",
      explanation:
        "(√64)² = 64 (square and root undo each other). ∛(−27) = −3. Sum: 64 + (−3) = 61.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "hard",
      stem: "The area of a square is 400 m². If you enlarge it so each side is doubled, what is the new area?",
      options: ["800 m²", "1200 m²", "1600 m²", "400 m²"],
      answer: "2",
      explanation:
        "Original side = √400 = 20 m. New side = 40 m. New area = 40² = 1600 m². Banchi, note: doubling the side multiplies the area by 4 (2²).",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "hard",
      stem: "Alemu makes a square patio with area 400 m². What is the side length?",
      options: ["20 m", "40 m", "100 m", "200 m"],
      answer: "0",
      explanation:
        "Side = √400 = 20 m. Check: 20 × 20 = 400 m².",
    },

    // ---------- SHORT ANSWER (Q46–Q50) ----------
    {
      id: "q46",
      type: "short",
      difficulty: "easy",
      stem: "Compute 11² and 13².",
      answer: "121 and 169",
      explanation:
        "11² = 11 × 11 = 121. 13² = 13 × 13 = 169. Banchi, memorize these — they appear in exams often.",
    },
    {
      id: "q47",
      type: "short",
      difficulty: "medium",
      stem: "Find the square root of 169.",
      answer: "13",
      explanation:
        "13 × 13 = 169. So √169 = 13. Check: 13² = 169.",
    },
    {
      id: "q48",
      type: "short",
      difficulty: "medium",
      stem: "Find ∛(−1728).",
      answer: "−12",
      explanation:
        "(−12) × (−12) × (−12) = 144 × (−12) = −1728. So ∛(−1728) = −12.",
    },
    {
      id: "q49",
      type: "short",
      difficulty: "hard",
      stem: "A cube has volume 729 cm³. Find its side length.",
      answer: "9 cm",
      explanation:
        "s = ∛729. Since 9 × 9 × 9 = 729, s = 9 cm.",
    },
    {
      id: "q50",
      type: "short",
      difficulty: "hard",
      stem: "Getaneh's square garden has area 64 m². He increases the width by 1 m and the length by 3 m. The new area is 19 m² more than the original. What was the original side length?",
      answer: "8 m (Check: original area 64, new area 83? Actually solve: s² + 4s + 3 = s² + 19 → 4s = 16 → s = 4 m)",
      explanation:
        "Banchi, let's solve step by step. Original side s, area s². New dimensions: width (s + 1) and length (s + 3). New area = (s + 1)(s + 3) = s² + 4s + 3. Given: new area = original + 19, so s² + 4s + 3 = s² + 19 → 4s = 16 → s = 4. Check: original area = 16, new = 5 × 7 = 35, difference = 19 ✓.",
    },
    // ============================================================
    // BATCH 2 — Q51 to Q100
    // ============================================================

    // ---------- EASY MCQ (Q51–Q70) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 14²?",
      options: ["28", "196", "144", "184"],
      answer: "1",
      explanation:
        "14² = 14 × 14 = 196. Do not confuse with 14 × 2 = 28. Banchi, memorize 14² = 196 — it appears in exams.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 15²?",
      options: ["30", "225", "215", "125"],
      answer: "1",
      explanation:
        "15² = 15 × 15 = 225. Memorize this. Trick: for numbers ending in 5, the answer ends in 25 and the rest is n(n+1). Here 1×2 = 2, so 225.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 16²?",
      options: ["256", "32", "236", "156"],
      answer: "0",
      explanation:
        "16² = 16 × 16 = 256. Banchi, memorizing 1² through 20² is very useful for the exam.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 20²?",
      options: ["40", "200", "400", "220"],
      answer: "2",
      explanation:
        "20² = 20 × 20 = 400. Squaring a number ending in 0 doubles the zeros: 2² = 4 and add two zeros → 400.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "easy",
      stem: "What is (−6)²?",
      options: ["−36", "36", "−12", "12"],
      answer: "1",
      explanation:
        "(−6)² = (−6) × (−6) = 36. Negative × negative = positive. Even powers make negatives positive.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "easy",
      stem: "What is (−6)³?",
      options: ["−216", "216", "−18", "18"],
      answer: "0",
      explanation:
        "(−6)³ = (−6) × (−6) × (−6) = 36 × (−6) = −216. Odd powers keep the minus sign.",
    },
    {
      id: "q57",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 4³?",
      options: ["12", "64", "16", "44"],
      answer: "1",
      explanation:
        "4³ = 4 × 4 × 4 = 16 × 4 = 64. Not 4 × 3 = 12.",
    },
    {
      id: "q58",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 6³?",
      options: ["18", "216", "36", "636"],
      answer: "1",
      explanation:
        "6³ = 6 × 6 × 6 = 36 × 6 = 216. Memorize the first six cubes: 1, 8, 27, 64, 125, 216.",
    },
    {
      id: "q59",
      type: "mcq",
      difficulty: "easy",
      stem: "What is ∛64?",
      options: ["4", "8", "16", "32"],
      answer: "0",
      explanation:
        "∛64 = 4 because 4 × 4 × 4 = 64. Banchi, check: is it 4³ or 8²? Both give 64. But ∛64 asks for the cube root → 4. √64 would be 8.",
    },
    {
      id: "q60",
      type: "mcq",
      difficulty: "easy",
      stem: "What is ∛1000?",
      options: ["100", "10", "1000", "50"],
      answer: "1",
      explanation:
        "10 × 10 × 10 = 1000. So ∛1000 = 10. For numbers ending in three zeros, the cube root ends in one zero.",
    },
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a perfect square?",
      options: ["50", "81", "90", "120"],
      answer: "1",
      explanation:
        "81 = 9². So it's a perfect square. 50, 90, 120 are not perfect squares.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a perfect cube?",
      options: ["64", "70", "100", "200"],
      answer: "0",
      explanation:
        "64 = 4³. So it's a perfect cube. Note: 64 is ALSO a perfect square (8²), because 64 = 8² = 4³. Both are true.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: √49",
      options: ["7", "−7", "±7", "24"],
      answer: "0",
      explanation:
        "7 × 7 = 49. So √49 = 7 (positive root). The symbol √ always gives the positive answer.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: √121",
      options: ["11", "12", "21", "60"],
      answer: "0",
      explanation:
        "11 × 11 = 121. So √121 = 11. Memorize: 11² = 121.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: √(1/4)",
      options: ["1/2", "1/4", "1/16", "2"],
      answer: "0",
      explanation:
        "√(1/4) = √1 / √4 = 1/2. Take the square root of the top and the bottom separately.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: √(9/25)",
      options: ["3/5", "9/5", "3/25", "1/3"],
      answer: "0",
      explanation:
        "√9 = 3 and √25 = 5. So √(9/25) = 3/5.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Is √50 a perfect square?",
      options: ["Yes, √50 = 25", "Yes, √50 = 5", "No, 50 is not a perfect square", "Yes, √50 = 50"],
      answer: "2",
      explanation:
        "There is no whole number that squares to 50 (7² = 49, 8² = 64). So 50 is not a perfect square. √50 ≈ 7.07.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the area of a square with side 7 cm?",
      options: ["14 cm²", "28 cm²", "49 cm²", "21 cm²"],
      answer: "2",
      explanation:
        "Area = side² = 7² = 49 cm². Do not confuse area with perimeter (4 × side = 28).",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the volume of a cube with side 3 cm?",
      options: ["9 cm³", "27 cm³", "6 cm³", "18 cm³"],
      answer: "1",
      explanation:
        "Volume = side³ = 3³ = 27 cm³. Not 3 × 3 = 9 (that's the area of one face).",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 3² + 4²",
      options: ["7", "25", "49", "12"],
      answer: "1",
      explanation:
        "3² = 9 and 4² = 16. Then 9 + 16 = 25. Banchi, note that 3² + 4² = 5² = 25 — a famous Pythagorean triple!",
    },

    // ---------- MEDIUM MCQ (Q71–Q90) ----------
    {
      id: "q71",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 12² − 11²",
      options: ["1", "23", "121", "144"],
      answer: "1",
      explanation:
        "12² = 144 and 11² = 121. Difference = 144 − 121 = 23. Or use shortcut: a² − b² = (a+b)(a−b) = 23 × 1 = 23.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 25² − 24²",
      options: ["1", "49", "576", "625"],
      answer: "1",
      explanation:
        "25² = 625 and 24² = 576. Difference = 49. Shortcut: 25² − 24² = 25 + 24 = 49. Banchi, memorize: n² − (n−1)² = 2n − 1.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √(169 + 0)",
      options: ["13", "14", "12", "23"],
      answer: "0",
      explanation:
        "169 + 0 = 169. √169 = 13. Adding zero changes nothing.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (√81)² ",
      options: ["9", "81", "18", "40.5"],
      answer: "1",
      explanation:
        "(√81)² = 81. Squaring and square-rooting are opposite operations, so they undo each other. Banchi, be careful: √(81²) is also 81.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: ∛(−64) + ∛27",
      options: ["−1", "1", "−7", "7"],
      answer: "0",
      explanation:
        "∛(−64) = −4 (since (−4)³ = −64). ∛27 = 3 (since 3³ = 27). Then −4 + 3 = −1.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is larger: √50 or 7?",
      options: ["√50", "7", "They are equal", "Cannot tell"],
      answer: "1",
      explanation:
        "7² = 49. Since 50 > 49, √50 > 7. But √50 ≈ 7.07, and 7 is exact. Wait — check again: 7² = 49, so √50 is slightly more than 7. So √50 is larger.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is larger: ∛30 or 3?",
      options: ["∛30", "3", "They are equal", "Cannot tell"],
      answer: "0",
      explanation:
        "3³ = 27. Since 30 > 27, ∛30 > 3. So ∛30 is larger.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "medium",
      stem: "Find the value of √(2² + 2² + 2² + 2²)",
      options: ["2", "4", "8", "16"],
      answer: "1",
      explanation:
        "Inside: 4 + 4 + 4 + 4 = 16. Then √16 = 4. Banchi, do the inside first before taking the root.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √(100) − ∛(27)",
      options: ["7", "10", "3", "13"],
      answer: "0",
      explanation:
        "√100 = 10. ∛27 = 3. So 10 − 3 = 7.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "medium",
      stem: "If x² = 49, what is x?",
      options: ["7 only", "−7 only", "7 or −7", "24.5"],
      answer: "2",
      explanation:
        "If x² = 49, x can be 7 or −7 because (7)² = 49 and (−7)² = 49. Note: √49 = 7 (only positive), but x² = 49 gives BOTH answers.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "medium",
      stem: "If x³ = 27, what is x?",
      options: ["3 only", "−3 only", "3 or −3", "9"],
      answer: "0",
      explanation:
        "If x³ = 27, then x = ∛27 = 3 ONLY. Unlike squares, cube equations have one answer. Check: (−3)³ = −27, not 27.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √144 + √25",
      options: ["17", "13", "169", "12.5"],
      answer: "0",
      explanation:
        "√144 = 12 and √25 = 5. Then 12 + 5 = 17. Banchi, do the roots separately, then add.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √225 − √169",
      options: ["2", "4", "6", "8"],
      answer: "0",
      explanation:
        "√225 = 15 (15² = 225) and √169 = 13 (13² = 169). Then 15 − 13 = 2.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is greater: 2⁵ or 5²?",
      options: ["2⁵", "5²", "They are equal", "Cannot tell"],
      answer: "0",
      explanation:
        "2⁵ = 32 and 5² = 25. Since 32 > 25, 2⁵ is greater. Banchi, high powers of small bases can be larger than low powers of larger bases.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (2/5)² + (1/5)²",
      options: ["5/25", "1/5", "3/25", "2/25"],
      answer: "1",
      explanation:
        "(2/5)² = 4/25. (1/5)² = 1/25. Sum = 5/25 = 1/5. Reduce at the end.",
    },
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "The side of a square is doubled. What happens to the area?",
      options: ["Doubles", "Triples", "Multiplies by 4", "Stays the same"],
      answer: "2",
      explanation:
        "Original side s → area s². New side 2s → area (2s)² = 4s². So area multiplies by 4. Banchi, this is a very common exam trick!",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "The side of a cube is tripled. What happens to the volume?",
      options: ["Triples", "Multiplies by 9", "Multiplies by 27", "Stays the same"],
      answer: "2",
      explanation:
        "Original side s → volume s³. New side 3s → volume (3s)³ = 27s³. So volume multiplies by 27. Banchi, scaling factor is cubed for volume.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: ∛(8/27)",
      options: ["2/3", "8/27", "2/9", "4/9"],
      answer: "0",
      explanation:
        "∛8 = 2 and ∛27 = 3. So ∛(8/27) = 2/3.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √0.0001",
      options: ["0.1", "0.01", "0.001", "0.0001"],
      answer: "1",
      explanation:
        "0.01 × 0.01 = 0.0001. So √0.0001 = 0.01. The number of decimal places in the answer is half of the number in the radicand.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "If (4.63)² = 21.44, what is (46.3)²?",
      options: ["214.4", "2144", "21.44", "21440"],
      answer: "1",
      explanation:
        "46.3 = 4.63 × 10. So (46.3)² = (4.63)² × 100 = 21.44 × 100 = 2144. Banchi, moving the decimal point 1 place in the base moves it 2 places in the square.",
    },

    // ---------- HARD MCQ (Q91–Q95) ----------
    {
      id: "q91",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: √(16) × √(9) − ∛(125)",
      options: ["−1", "7", "17", "1"],
      answer: "1",
      explanation:
        "√16 = 4, √9 = 3, so 4 × 3 = 12. ∛125 = 5. Then 12 − 5 = 7.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: (√49 + ∛27)²",
      options: ["100", "10", "58", "81"],
      answer: "0",
      explanation:
        "√49 = 7 and ∛27 = 3. Sum = 10. Then 10² = 100. Banchi, do the inside first!",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "hard",
      stem: "A cube has surface area 96 cm². What is its side length?",
      options: ["4 cm", "6 cm", "8 cm", "16 cm"],
      answer: "0",
      explanation:
        "Surface area of a cube = 6 × s². So 6s² = 96, then s² = 16, s = 4 cm. Banchi, note this uses the square root of the per-face area.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "hard",
      stem: "The sum of the first 20 odd numbers is what?",
      options: ["100", "200", "400", "40"],
      answer: "2",
      explanation:
        "Sum of first n odd numbers = n². For n = 20, sum = 20² = 400. Memorize this pattern — it saves time.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: √(13² − 12²)",
      options: ["5", "25", "1", "12"],
      answer: "0",
      explanation:
        "Inside first: 13² − 12² = 169 − 144 = 25. Then √25 = 5. Banchi, always finish inside the radical before taking the root.",
    },

    // ---------- SHORT ANSWER (Q96–Q100) ----------
    {
      id: "q96",
      type: "short",
      difficulty: "easy",
      stem: "Compute 8² and 9².",
      answer: "64 and 81",
      explanation:
        "8² = 8 × 8 = 64. 9² = 9 × 9 = 81. Memorize these — they're used often.",
    },
    {
      id: "q97",
      type: "short",
      difficulty: "medium",
      stem: "Find ∛(−125).",
      answer: "−5",
      explanation:
        "(−5) × (−5) × (−5) = 25 × (−5) = −125. So ∛(−125) = −5.",
    },
    {
      id: "q98",
      type: "short",
      difficulty: "medium",
      stem: "Find √(169/289).",
      answer: "13/17",
      explanation:
        "√169 = 13 and √289 = 17 (since 17² = 289). So √(169/289) = 13/17.",
    },
    {
      id: "q99",
      type: "short",
      difficulty: "hard",
      stem: "The volume of a cube is 343 cm³. Find its side length.",
      answer: "7 cm",
      explanation:
        "s = ∛343. Since 7 × 7 × 7 = 343, s = 7 cm.",
    },
    {
      id: "q100",
      type: "short",
      difficulty: "hard",
      stem: "If x² + 5 = 30, what are the possible values of x?",
      answer: "x = 5 or x = −5",
      explanation:
        "x² + 5 = 30 → x² = 25 → x = 5 or x = −5. Banchi, remember: equations with x² always give TWO answers (unless one is rejected by the problem).",
    },
        // ============================================================
    // BATCH 3 — Q101 to Q150
    // ============================================================

    // ---------- EASY MCQ (Q101–Q120) ----------
    {
      id: "q101",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 17²?",
      options: ["34", "289", "279", "189"],
      answer: "1",
      explanation:
        "17² = 17 × 17 = 289. Banchi, memorize 15² = 225, 16² = 256, 17² = 289, 18² = 324, 19² = 361, 20² = 400.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 18²?",
      options: ["36", "324", "314", "224"],
      answer: "1",
      explanation:
        "18² = 18 × 18 = 324.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 19²?",
      options: ["38", "361", "371", "281"],
      answer: "1",
      explanation:
        "19² = 19 × 19 = 361.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 25²?",
      options: ["50", "625", "525", "125"],
      answer: "1",
      explanation:
        "25² = 25 × 25 = 625. Banchi, shortcut for numbers ending in 5: n(n+1) then append 25. For 25: 2 × 3 = 6, so 625.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 30²?",
      options: ["60", "900", "600", "90"],
      answer: "1",
      explanation:
        "30² = 30 × 30 = 900. Square 3, then add two zeros.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "easy",
      stem: "What is (1/2)³?",
      options: ["1/6", "1/8", "3/2", "1/2"],
      answer: "1",
      explanation:
        "(1/2)³ = (1/2) × (1/2) × (1/2) = 1/8.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "easy",
      stem: "What is (−2)⁴?",
      options: ["−16", "16", "−8", "8"],
      answer: "1",
      explanation:
        "(−2)⁴ = (−2) × (−2) × (−2) × (−2) = 4 × 4 = 16. Even power → positive.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "easy",
      stem: "What is (−3)³?",
      options: ["−27", "27", "−9", "9"],
      answer: "0",
      explanation:
        "(−3)³ = (−3) × (−3) × (−3) = 9 × (−3) = −27. Odd power → negative.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: √36",
      options: ["6", "−6", "±6", "18"],
      answer: "0",
      explanation:
        "√36 = 6 (positive only). 6 × 6 = 36.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: √196",
      options: ["14", "16", "18", "12"],
      answer: "0",
      explanation:
        "14² = 196. So √196 = 14.",
    },
    {
      id: "q111",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: ∛8 × ∛27",
      options: ["6", "36", "18", "24"],
      answer: "0",
      explanation:
        "∛8 = 2 and ∛27 = 3. Then 2 × 3 = 6.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: ∛125 + ∛64",
      options: ["9", "10", "11", "13"],
      answer: "0",
      explanation:
        "∛125 = 5 and ∛64 = 4. Then 5 + 4 = 9.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a perfect square?",
      options: ["121", "150", "180", "200"],
      answer: "0",
      explanation:
        "11² = 121. So 121 is a perfect square. The others are not.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a perfect cube?",
      options: ["8", "12", "20", "30"],
      answer: "0",
      explanation:
        "2³ = 8. So 8 is a perfect cube.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the area of a square with side 9 cm?",
      options: ["18 cm²", "36 cm²", "81 cm²", "27 cm²"],
      answer: "2",
      explanation:
        "Area = side² = 9² = 81 cm².",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the volume of a cube with side 4 cm?",
      options: ["12 cm³", "16 cm³", "64 cm³", "24 cm³"],
      answer: "2",
      explanation:
        "Volume = side³ = 4³ = 64 cm³.",
    },
    {
      id: "q117",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 5² + 5",
      options: ["10", "25", "30", "35"],
      answer: "2",
      explanation:
        "5² = 25, then 25 + 5 = 30. Banchi, do the power first, then add.",
    },
    {
      id: "q118",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 10² − 10",
      options: ["0", "90", "100", "99"],
      answer: "1",
      explanation:
        "10² = 100, then 100 − 10 = 90.",
    },
    {
      id: "q119",
      type: "mcq",
      difficulty: "easy",
      stem: "Is 1 a perfect square AND a perfect cube?",
      options: ["Yes, 1 = 1² = 1³", "Only perfect square", "Only perfect cube", "Neither"],
      answer: "0",
      explanation:
        "1 = 1² and 1 = 1³. So 1 is both. It is the smallest positive perfect square and cube.",
    },
    {
      id: "q120",
      type: "mcq",
      difficulty: "easy",
      stem: "What is √256?",
      options: ["14", "16", "18", "12"],
      answer: "1",
      explanation:
        "16² = 256. So √256 = 16.",
    },

    // ---------- MEDIUM MCQ (Q121–Q140) ----------
    {
      id: "q121",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √(0.04)",
      options: ["0.2", "0.02", "0.4", "2"],
      answer: "0",
      explanation:
        "0.2 × 0.2 = 0.04. So √0.04 = 0.2. Banchi, the square root of a decimal less than 1 is larger than the radicand.",
    },
    {
      id: "q122",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √(1/36)",
      options: ["1/6", "1/18", "1/3", "6"],
      answer: "0",
      explanation:
        "√1 = 1 and √36 = 6. So √(1/36) = 1/6.",
    },
    {
      id: "q123",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √(81/100)",
      options: ["9/10", "81/10", "9/100", "3/10"],
      answer: "0",
      explanation:
        "√81 = 9 and √100 = 10. So √(81/100) = 9/10 = 0.9.",
    },
    {
      id: "q124",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √(2² × 3²)",
      options: ["5", "6", "12", "36"],
      answer: "1",
      explanation:
        "2² × 3² = 4 × 9 = 36. √36 = 6. Or shortcut: √(2² × 3²) = 2 × 3 = 6.",
    },
    {
      id: "q125",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: ∛(8 × 27)",
      options: ["6", "36", "24", "12"],
      answer: "0",
      explanation:
        "∛8 = 2, ∛27 = 3. So ∛(8 × 27) = 2 × 3 = 6. Or ∛216 = 6.",
    },
    {
      id: "q126",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is bigger: 2³ or 3²?",
      options: ["2³", "3²", "Equal", "Cannot tell"],
      answer: "1",
      explanation:
        "2³ = 8 and 3² = 9. Since 9 > 8, 3² is bigger. Banchi, different bases and exponents can be close in value — always compute!",
    },
    {
      id: "q127",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: x² = 100",
      options: ["x = 10", "x = −10", "x = 10 or x = −10", "x = 50"],
      answer: "2",
      explanation:
        "Both 10² and (−10)² equal 100. So x = 10 or x = −10. Square equations give TWO answers.",
    },
    {
      id: "q128",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: x³ = −8",
      options: ["x = −2", "x = 2", "x = ±2", "No solution"],
      answer: "0",
      explanation:
        "x = ∛(−8) = −2. Only one answer for cube roots. Check: (−2)³ = −8.",
    },
    {
      id: "q129",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (√100)² + √(64)",
      options: ["108", "100", "14", "8"],
      answer: "0",
      explanation:
        "(√100)² = 100 and √64 = 8. Then 100 + 8 = 108.",
    },
    {
      id: "q130",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √(25 + 144)",
      options: ["13", "17", "15", "29"],
      answer: "0",
      explanation:
        "Inside first: 25 + 144 = 169. Then √169 = 13. Banchi, this is the famous 5-12-13 Pythagorean triple!",
    },
    {
      id: "q131",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √(9 + 16)",
      options: ["5", "7", "25", "12"],
      answer: "0",
      explanation:
        "Inside: 9 + 16 = 25. √25 = 5. Banchi, remember the 3-4-5 Pythagorean triple!",
    },
    {
      id: "q132",
      type: "mcq",
      difficulty: "medium",
      stem: "The square of what number is 400?",
      options: ["20", "40", "200", "10"],
      answer: "0",
      explanation:
        "20 × 20 = 400. So the square of 20 is 400. The question is the same as 'what is √400?'",
    },
    {
      id: "q133",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: ∛(−1)",
      options: ["−1", "1", "±1", "No solution"],
      answer: "0",
      explanation:
        "(−1)³ = −1. So ∛(−1) = −1. Cube roots of negatives are allowed.",
    },
    {
      id: "q134",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: ∛(0.008)",
      options: ["0.2", "0.02", "0.8", "0.08"],
      answer: "0",
      explanation:
        "0.2 × 0.2 × 0.2 = 0.008. So ∛0.008 = 0.2.",
    },
    {
      id: "q135",
      type: "mcq",
      difficulty: "medium",
      stem: "If a = 5 and b = 12, find √(a² + b²).",
      options: ["13", "17", "15", "119"],
      answer: "0",
      explanation:
        "a² = 25 and b² = 144. Sum = 169. √169 = 13. Banchi, this is the 5-12-13 Pythagorean triple!",
    },
    {
      id: "q136",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 2 × ∛27 + √25",
      options: ["11", "10", "13", "12"],
      answer: "0",
      explanation:
        "∛27 = 3, so 2 × 3 = 6. √25 = 5. Then 6 + 5 = 11.",
    },
    {
      id: "q137",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the square of the cube root of 64?",
      options: ["4", "16", "8", "64"],
      answer: "1",
      explanation:
        "∛64 = 4. Then 4² = 16. So (∛64)² = 16. Banchi, always find the cube root first.",
    },
    {
      id: "q138",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (2.5)²",
      options: ["5", "6.25", "5.5", "4.25"],
      answer: "1",
      explanation:
        "2.5 × 2.5 = 6.25. Banchi, 2.5² is a common exam value. Memorize it.",
    },
    {
      id: "q139",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (0.5)³",
      options: ["1.5", "0.125", "0.15", "0.25"],
      answer: "1",
      explanation:
        "0.5 × 0.5 × 0.5 = 0.125. Banchi, 0.5³ = 1/8 = 0.125.",
    },
    {
      id: "q140",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: ∛(−1000)",
      options: ["−10", "10", "±10", "No solution"],
      answer: "0",
      explanation:
        "(−10)³ = −1000. So ∛(−1000) = −10.",
    },

    // ---------- HARD MCQ (Q141–Q145) ----------
    {
      id: "q141",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: √(48 + 1)",
      options: ["7", "8", "6", "9"],
      answer: "0",
      explanation:
        "48 + 1 = 49. √49 = 7.",
    },
    {
      id: "q142",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: ∛(27) × √(16) − ∛(8)",
      options: ["10", "12", "16", "8"],
      answer: "0",
      explanation:
        "∛27 = 3, √16 = 4, ∛8 = 2. So 3 × 4 − 2 = 12 − 2 = 10.",
    },
    {
      id: "q143",
      type: "mcq",
      difficulty: "hard",
      stem: "The area of a square is 144 cm². If each side is increased by 2 cm, what is the new area?",
      options: ["144 cm²", "169 cm²", "196 cm²", "256 cm²"],
      answer: "2",
      explanation:
        "Original side = √144 = 12 cm. New side = 12 + 2 = 14 cm. New area = 14² = 196 cm².",
    },
    {
      id: "q144",
      type: "mcq",
      difficulty: "hard",
      stem: "The volume of a cube is 216 cm³. What is its surface area?",
      options: ["144 cm²", "180 cm²", "216 cm²", "256 cm²"],
      answer: "2",
      explanation:
        "Side = ∛216 = 6 cm. Surface area = 6 × s² = 6 × 36 = 216 cm². Banchi, surface area formula is 6s² for a cube.",
    },
    {
      id: "q145",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: √(14² − 10²)",
      options: ["4", "24", "√96", "Both √96 and 4√6 are the same"],
      answer: "2",
      explanation:
        "14² = 196, 10² = 100. Inside: 196 − 100 = 96. So √96 ≈ 9.8. Not a perfect square. Cannot be reduced further except √96 = 4√6. The cleanest is option C (√96).",
    },

    // ---------- SHORT ANSWER (Q146–Q150) ----------
    {
      id: "q146",
      type: "short",
      difficulty: "easy",
      stem: "Compute 21² and 22².",
      answer: "441 and 484",
      explanation:
        "21² = 441. 22² = 484. Banchi, patterns: 20² = 400, 21² = 441, 22² = 484, 23² = 529, 24² = 576, 25² = 625.",
    },
    {
      id: "q147",
      type: "short",
      difficulty: "medium",
      stem: "Find √625 and √1024.",
      answer: "25 and 32",
      explanation:
        "25² = 625, so √625 = 25. 32² = 1024, so √1024 = 32. Banchi, powers of 2 are useful: 2¹⁰ = 1024.",
    },
    {
      id: "q148",
      type: "short",
      difficulty: "medium",
      stem: "Find ∛(−512) and ∛343.",
      answer: "−8 and 7",
      explanation:
        "(−8)³ = −512, so ∛(−512) = −8. 7³ = 343, so ∛343 = 7.",
    },
    {
      id: "q149",
      type: "short",
      difficulty: "hard",
      stem: "A square garden has area 225 m². How much fencing is needed to go all around it?",
      answer: "60 m",
      explanation:
        "Side = √225 = 15 m. Perimeter = 4 × side = 4 × 15 = 60 m. Banchi, this is a fencing/area problem — first find the side from area, then find perimeter.",
    },
    {
      id: "q150",
      type: "short",
      difficulty: "hard",
      stem: "A cube box has volume 729 cm³. What is its surface area?",
      answer: "486 cm²",
      explanation:
        "Side = ∛729 = 9 cm. Surface area = 6 × s² = 6 × 81 = 486 cm². Banchi, remember: cube surface area = 6s².",
    },
      // ============================================================
    // BATCH 4 — Q151 to Q200 (final for Chapter 2)
    // ============================================================

    // ---------- EASY MCQ (Q151–Q170) ----------
    {
      id: "q151",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 13²?",
      options: ["26", "169", "159", "196"],
      answer: "1",
      explanation:
        "13² = 13 × 13 = 169. Banchi, memorize 11² = 121, 12² = 144, 13² = 169, 14² = 196, 15² = 225.",
    },
    {
      id: "q152",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: √64",
      options: ["8", "6", "4", "16"],
      answer: "0",
      explanation:
        "8 × 8 = 64. So √64 = 8. Banchi, careful: ∛64 = 4. The symbol tells you which root to take.",
    },
    {
      id: "q153",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: ∛64",
      options: ["8", "4", "6", "2"],
      answer: "1",
      explanation:
        "4 × 4 × 4 = 64. So ∛64 = 4. Note: √64 = 8 and ∛64 = 4 — do not mix them up.",
    },
    {
      id: "q154",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: √1",
      options: ["0", "1", "2", "No solution"],
      answer: "1",
      explanation:
        "1 × 1 = 1. So √1 = 1.",
    },
    {
      id: "q155",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: ∛1",
      options: ["0", "1", "3", "No solution"],
      answer: "1",
      explanation:
        "1 × 1 × 1 = 1. So ∛1 = 1.",
    },
    {
      id: "q156",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 4² + 3²?",
      options: ["7", "25", "49", "12"],
      answer: "1",
      explanation:
        "4² = 16 and 3² = 9. Sum = 25. Banchi, 3-4-5 triple: 3² + 4² = 5² = 25.",
    },
    {
      id: "q157",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 5² − 4²?",
      options: ["1", "9", "16", "41"],
      answer: "1",
      explanation:
        "5² = 25 and 4² = 16. Difference = 9. Banchi, shortcut: n² − (n−1)² = 2n − 1 = 9.",
    },
    {
      id: "q158",
      type: "mcq",
      difficulty: "easy",
      stem: "The perimeter of a square is 24 cm. What is its area?",
      options: ["16 cm²", "36 cm²", "24 cm²", "48 cm²"],
      answer: "1",
      explanation:
        "Side = 24 ÷ 4 = 6 cm. Area = 6² = 36 cm². Banchi, first find the side, then square it.",
    },
    {
      id: "q159",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 7² + 7",
      options: ["14", "49", "56", "63"],
      answer: "2",
      explanation:
        "7² = 49. Then 49 + 7 = 56.",
    },
    {
      id: "q160",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is NOT a perfect square?",
      options: ["144", "121", "100", "90"],
      answer: "3",
      explanation:
        "90 is not a perfect square. 12² = 144, 11² = 121, 10² = 100. But no whole number squared gives 90.",
    },
    {
      id: "q161",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is NOT a perfect cube?",
      options: ["27", "64", "125", "100"],
      answer: "3",
      explanation:
        "100 is not a perfect cube. 3³ = 27, 4³ = 64, 5³ = 125. But no whole number cubed gives 100.",
    },
    {
      id: "q162",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: √(100 + 44)",
      options: ["12", "14", "10", "22"],
      answer: "0",
      explanation:
        "100 + 44 = 144. √144 = 12.",
    },
    {
      id: "q163",
      type: "mcq",
      difficulty: "easy",
      stem: "What is (−7)² + 5?",
      options: ["−44", "54", "44", "−54"],
      answer: "1",
      explanation:
        "(−7)² = 49. Then 49 + 5 = 54. Negative × negative = positive.",
    },
    {
      id: "q164",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 2 × 3²?",
      options: ["36", "18", "12", "6"],
      answer: "1",
      explanation:
        "3² = 9 first (power before multiplication). Then 2 × 9 = 18. Banchi, do the exponent first!",
    },
    {
      id: "q165",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: ∛(−27) + ∛27",
      options: ["−6", "0", "6", "54"],
      answer: "1",
      explanation:
        "∛(−27) = −3 and ∛27 = 3. Sum = 0. A number plus its opposite gives zero.",
    },
    {
      id: "q166",
      type: "mcq",
      difficulty: "easy",
      stem: "The volume of a cube is 8 cm³. What is the side length?",
      options: ["2 cm", "4 cm", "1 cm", "8 cm"],
      answer: "0",
      explanation:
        "s = ∛8 = 2 cm.",
    },
    {
      id: "q167",
      type: "mcq",
      difficulty: "easy",
      stem: "The area of a square is 49 cm². What is its perimeter?",
      options: ["7 cm", "28 cm", "14 cm", "49 cm"],
      answer: "1",
      explanation:
        "Side = √49 = 7 cm. Perimeter = 4 × 7 = 28 cm. Banchi, area → side → perimeter.",
    },
    {
      id: "q168",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: √225",
      options: ["13", "14", "15", "25"],
      answer: "2",
      explanation:
        "15 × 15 = 225. So √225 = 15.",
    },
    {
      id: "q169",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 0² + 0³",
      options: ["0", "1", "2", "No solution"],
      answer: "0",
      explanation:
        "0² = 0 and 0³ = 0. Sum = 0.",
    },
    {
      id: "q170",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 1² + 1³ + 1⁴",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation:
        "1² = 1, 1³ = 1, 1⁴ = 1. Sum = 3. Any power of 1 equals 1.",
    },

    // ---------- MEDIUM MCQ (Q171–Q190) ----------
    {
      id: "q171",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √(6² + 8²)",
      options: ["10", "14", "12", "48"],
      answer: "0",
      explanation:
        "6² = 36 and 8² = 64. Sum = 100. √100 = 10. Banchi, this is the 6-8-10 triple (a scaled 3-4-5).",
    },
    {
      id: "q172",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: ∛(27 × 8)",
      options: ["6", "24", "216", "12"],
      answer: "0",
      explanation:
        "∛(27 × 8) = ∛216 = 6. Or ∛27 × ∛8 = 3 × 2 = 6.",
    },
    {
      id: "q173",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (√81)² − (∛27)²",
      options: ["72", "75", "81", "60"],
      answer: "0",
      explanation:
        "(√81)² = 81. ∛27 = 3, so (∛27)² = 9. Then 81 − 9 = 72.",
    },
    {
      id: "q174",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is bigger: √200 or 14?",
      options: ["√200", "14", "Equal", "Cannot tell"],
      answer: "0",
      explanation:
        "14² = 196. Since 200 > 196, √200 > 14. So √200 is bigger. (√200 ≈ 14.14)",
    },
    {
      id: "q175",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is bigger: ∛100 or 4?",
      options: ["∛100", "4", "They are equal", "Cannot tell without a calculator"],
      answer: "0",
      explanation:
        "Banchi, compare them by cubing the whole number. 4³ = 64. Since 100 > 64, the cube root of 100 is bigger than 4. In fact 5³ = 125, so ∛100 is between 4 and 5 (about 4.64). So ∛100 is bigger than 4. The correct answer is option A.",
    },
    {
      id: "q176",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √(a²) if a = −9.",
      options: ["−9", "9", "±9", "81"],
      answer: "1",
      explanation:
        "a² = (−9)² = 81. √81 = 9 (positive). Banchi, √(a²) always equals |a|, which is always non-negative.",
    },
    {
      id: "q177",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: ∛(a³) if a = −5.",
      options: ["−5", "5", "±5", "−125"],
      answer: "0",
      explanation:
        "a³ = (−5)³ = −125. ∛(−125) = −5. Banchi, cube and cube root undo each other, keeping the sign.",
    },
    {
      id: "q178",
      type: "mcq",
      difficulty: "medium",
      stem: "If a² = 169, what are the possible values of a?",
      options: ["13 only", "−13 only", "13 or −13", "169"],
      answer: "2",
      explanation:
        "a² = 169 gives a = 13 or a = −13. Both square to 169. Two answers!",
    },
    {
      id: "q179",
      type: "mcq",
      difficulty: "medium",
      stem: "If b³ = 125, what are the possible values of b?",
      options: ["5 only", "−5 only", "5 or −5", "125"],
      answer: "0",
      explanation:
        "b³ = 125 gives b = ∛125 = 5 ONLY. Cube equations have one answer. Check: (−5)³ = −125, not 125.",
    },
    {
      id: "q180",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √(2² × 5² × 3²)",
      options: ["10", "30", "60", "900"],
      answer: "1",
      explanation:
        "2 × 5 × 3 = 30. Or: 4 × 25 × 9 = 900, √900 = 30. Both methods give 30.",
    },
    {
      id: "q181",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: ∛(1000) + √(400)",
      options: ["30", "20", "40", "50"],
      answer: "0",
      explanation:
        "∛1000 = 10 and √400 = 20. Sum = 30.",
    },
    {
      id: "q182",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (√169) × (∛8)",
      options: ["26", "13", "18", "34"],
      answer: "0",
      explanation:
        "√169 = 13 and ∛8 = 2. Then 13 × 2 = 26.",
    },
    {
      id: "q183",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the square of an even number: 196, 225, 289, 361?",
      options: ["196", "225", "289", "361"],
      answer: "0",
      explanation:
        "196 = 14². 14 is even. 225 = 15², 289 = 17², 361 = 19² — all odd. Banchi, even² is always even.",
    },
    {
      id: "q184",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the square of an odd number: 400, 484, 529, 576?",
      options: ["400", "484", "529", "576"],
      answer: "2",
      explanation:
        "529 = 23². 23 is odd. 400 = 20², 484 = 22², 576 = 24² — all even. Odd² is always odd.",
    },
    {
      id: "q185",
      type: "mcq",
      difficulty: "medium",
      stem: "If the sum of the first n odd natural numbers is 196, what is n?",
      options: ["12", "13", "14", "15"],
      answer: "2",
      explanation:
        "Sum of first n odd numbers = n². We need n² = 196. Since 14² = 196, n = 14.",
    },
    {
      id: "q186",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √(0.09)",
      options: ["0.3", "0.03", "0.9", "3"],
      answer: "0",
      explanation:
        "0.3 × 0.3 = 0.09. So √0.09 = 0.3.",
    },
    {
      id: "q187",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (0.3)³",
      options: ["0.9", "0.027", "0.27", "0.009"],
      answer: "1",
      explanation:
        "0.3 × 0.3 × 0.3 = 0.09 × 0.3 = 0.027.",
    },
    {
      id: "q188",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: √(1/81)",
      options: ["1/9", "1/3", "1/81", "9"],
      answer: "0",
      explanation:
        "√1 = 1 and √81 = 9. So √(1/81) = 1/9.",
    },
    {
      id: "q189",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: ∛(1/8)",
      options: ["1/2", "1/8", "1/4", "2"],
      answer: "0",
      explanation:
        "∛1 = 1 and ∛8 = 2. So ∛(1/8) = 1/2.",
    },
    {
      id: "q190",
      type: "mcq",
      difficulty: "medium",
      stem: "The side of a square is √50 cm. What is its area?",
      options: ["50 cm²", "25 cm²", "100 cm²", "√50 cm²"],
      answer: "0",
      explanation:
        "Area = side² = (√50)² = 50 cm². Squaring undoes the root.",
    },

    // ---------- HARD MCQ (Q191–Q195) ----------
    {
      id: "q191",
      type: "mcq",
      difficulty: "hard",
      stem: "The surface area of a cube is 150 cm². What is the volume?",
      options: ["125 cm³", "216 cm³", "100 cm³", "150 cm³"],
      answer: "0",
      explanation:
        "Surface area = 6s². So 6s² = 150 → s² = 25 → s = 5 cm. Volume = s³ = 5³ = 125 cm³. Banchi, three steps: area → side → volume.",
    },
    {
      id: "q192",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: √(3² + 4²) + √(5² + 12²)",
      options: ["18", "17", "16", "20"],
      answer: "0",
      explanation:
        "√(9 + 16) = √25 = 5. √(25 + 144) = √169 = 13. Sum = 5 + 13 = 18.",
    },
    {
      id: "q193",
      type: "mcq",
      difficulty: "hard",
      stem: "A square's area is 625 m². If each side is increased by 5 m, what is the new area?",
      options: ["625 m²", "900 m²", "841 m²", "1200 m²"],
      answer: "1",
      explanation:
        "Original side = √625 = 25 m. New side = 25 + 5 = 30 m. New area = 30² = 900 m².",
    },
    {
      id: "q194",
      type: "mcq",
      difficulty: "hard",
      stem: "The volume of a cube is 1000 cm³. What is the side length? What is the area of one face?",
      options: ["10 cm and 100 cm²", "100 cm and 10 cm²", "10 cm and 10 cm²", "100 cm and 100 cm²"],
      answer: "0",
      explanation:
        "Side = ∛1000 = 10 cm. Area of one face = s² = 10² = 100 cm².",
    },
    {
      id: "q195",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: (∛27 + √16)² − √(81)",
      options: ["40", "49", "58", "81"],
      answer: "0",
      explanation:
        "∛27 = 3, √16 = 4. Inside: 3 + 4 = 7. Then 7² = 49. √81 = 9. Then 49 − 9 = 40.",
    },

    // ---------- SHORT ANSWER (Q196–Q200) ----------
    {
      id: "q196",
      type: "short",
      difficulty: "easy",
      stem: "State the definition of a perfect square.",
      answer: "A number that can be written as m² for some rational number m.",
      explanation:
        "For example: 1, 4, 9, 16, 25 are perfect squares because they equal 1², 2², 3², 4², 5².",
    },
    {
      id: "q197",
      type: "short",
      difficulty: "medium",
      stem: "Write the first 8 perfect cubes.",
      answer: "1, 8, 27, 64, 125, 216, 343, 512",
      explanation:
        "1³ = 1, 2³ = 8, 3³ = 27, 4³ = 64, 5³ = 125, 6³ = 216, 7³ = 343, 8³ = 512. Banchi, memorize these.",
    },
    {
      id: "q198",
      type: "short",
      difficulty: "medium",
      stem: "Find √1296 using prime factorization.",
      answer: "36",
      explanation:
        "1296 = 6⁴ = (6²)² = 36². Or factor: 1296 = 2⁴ × 3⁴. √(2⁴ × 3⁴) = 2² × 3² = 4 × 9 = 36.",
    },
    {
      id: "q199",
      type: "short",
      difficulty: "hard",
      stem: "A cubical water tank holds 8000 litres. What is the length of each side in metres? (Hint: 1 m³ = 1000 L)",
      answer: "2 m",
      explanation:
        "Volume = 8000 L = 8 m³. Side = ∛8 = 2 m. Banchi, first convert litres to m³ by dividing by 1000.",
    },
    {
      id: "q200",
      type: "short",
      difficulty: "hard",
      stem: "A square playground has area 1225 m². It is surrounded by a fence. How many metres of fence are needed?",
      answer: "140 m",
      explanation:
        "Side = √1225 = 35 m. Fence = perimeter = 4 × 35 = 140 m. Banchi, area → side → perimeter.",
    },
      ],
};