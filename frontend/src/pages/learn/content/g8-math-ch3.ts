import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 MATHEMATICS — CHAPTER 3
// LINEAR EQUATIONS AND INEQUALITIES
// Source: AAEB Grade 8 Mathematics Student Textbook (pp. 67–102)
// For: Banchi (ባንቺ) — Grade 8
// Language level: A2 / A1 / B1 — clear, short, no harsh words.
// ============================================================

export const g8MathCh3: Chapter = {
  id: "ch3",
  number: 3,
  title: "Linear Equations and Inequalities",
  titleAm: "መስመራዊ እኩልታዎች እና ያለ-እኩልነት",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. The Cartesian Coordinate System",
      titleAm: "የካርቴዥያን መጋጠሚያ ሥርዓት",
      body:
        "Banchi, imagine two number lines crossing at zero. One goes left-right (x-axis). One goes up-down (y-axis). Together they form a flat map called the Cartesian plane. Every point on this map has an address (x, y).",
      bodyAm:
        "ባንቺ፣ ሁለት የቁጥር መስመሮች በዜሮ ላይ ሲገናኙ አስቢ። አንዱ ወደ ግራ-ቀኝ ይሄዳል (x-ዘንግ)። ሌላው ወደ ላይ-ታች ይሄዳል (y-ዘንግ)። አንድ ላይ ሆነው ካርቴዥያን አውሮፕላን የሚባል ጠፍጣፋ ካርታ ይሠራሉ። በዚህ ካርታ ላይ ያለ ማንኛውም ነጥብ (x, y) የሚባል አድራሻ አለው።",
      children: [
        {
          id: "n1-1",
          title: "The four quadrants",
          titleAm: "አራቱ ሩብ ክፍሎች",
          body:
            "The two axes divide the plane into four parts called quadrants.\n\n" +
            "         y-axis\n" +
            "            ↑\n" +
            "   II       |       I\n" +
            "  (−, +)    |    (+, +)\n" +
            "  ──────────┼──────────→ x-axis\n" +
            "   III      |      IV\n" +
            "  (−, −)    |    (+, −)\n" +
            "\n" +
            "Banchi, remember the signs: I (+, +), II (−, +), III (−, −), IV (+, −). The quadrants are numbered counter-clockwise starting from top-right.",
          bodyAm:
            "ሁለቱ ዘንጎች አውሮፕላኑን በአራት ክፍሎች ይከፍሉታል። ቁጥራቸው ከላይ ቀኝ ጀምሮ በተቃራኒ ሰዓት አቅጣጫ ይሄዳል። ምልክቶቹ፡ I (+, +), II (−, +), III (−, −), IV (+, −)።",
        },
        {
          id: "n1-2",
          title: "Ordered pair (x, y)",
          titleAm: "የታዘዘ ጥንድ (x, y)",
          body:
            "The first number is the x-coordinate (abscissa) — how far left or right. The second number is the y-coordinate (ordinate) — how far up or down. Example: (3, 5) means 3 units right and 5 units up.",
          bodyAm:
            "የመጀመሪያው ቁጥር x-አስተባባሪ (አብሲሳ) ነው — ወደ ግራ ወይም ቀኝ ምን ያህል። ሁለተኛው ቁጥር y-አስተባባሪ (ኦርዲኔት) ነው — ወደ ላይ ወይም ታች ምን ያህል። ምሳሌ፡ (3, 5) ማለት 3 ክፍል ወደ ቀኝ እና 5 ክፍል ወደ ላይ።",
        },
        {
          id: "n1-3",
          title: "Points on the axes",
          titleAm: "በዘንጎች ላይ ያሉ ነጥቦች",
          body:
            "A point on the x-axis has y = 0. Example: (5, 0). A point on the y-axis has x = 0. Example: (0, 7). The origin is (0, 0) — where the axes cross. Points on axes belong to NO quadrant.",
          bodyAm:
            "በ x-ዘንግ ላይ ያለ ነጥብ y = 0 ነው። ምሳሌ፡ (5, 0)። በ y-ዘንግ ላይ ያለ ነጥብ x = 0 ነው። ምሳሌ፡ (0, 7)። መነሻው (0, 0) ነው — ዘንጎቹ የሚገናኙበት። በዘንጎች ላይ ያሉ ነጥቦች ለማንኛውም ሩብ አይገዙም።",
        },
        {
          id: "n1-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, x comes first, then y. Always (x, y) — never (y, x). A common mistake is reversing them.",
          bodyAm:
            "ባንቺ፣ x መጀመሪያ ይመጣል፣ ከዚያ y። ሁልጊዜ (x, y) — በጭራሽ (y, x) አይደለም። ተደጋጋሚ ስህተት መገልበጥ ነው።",
        },
        {
          id: "n1-5",
          title: "Practise yourself, Banchi",
          titleAm: "ራስሽን ሞክሪ ባንቺ",
          body:
            "Which quadrant does each point lie in? (7, −2), (−3, 5), (−9, −11), (4, 8). Answers: IV, II, III, I.",
          bodyAm:
            "እያንዳንዱ ነጥብ በየትኛው ሩብ ይገኛል? (7, −2), (−3, 5), (−9, −11), (4, 8)። መልሶች፡ IV, II, III, I።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Vertical and Horizontal Lines",
      titleAm: "ቀጥ ያሉ እና አግድም መስመሮች",
      body:
        "Banchi, some lines are simple. A vertical line goes straight up-down. A horizontal line goes straight left-right.",
      bodyAm:
        "ባንቺ፣ አንዳንድ መስመሮች ቀላል ናቸው። ቀጥ ያለ መስመር ወደ ላይ-ታች ይሄዳል። አግድም መስመር ደግሞ ወደ ግራ-ቀኝ ይሄዳል።",
      children: [
        {
          id: "n2-1",
          title: "Vertical line: x = a",
          titleAm: "ቀጥ ያለ መስመር፡ x = a",
          body:
            "Every point on the line has the same x-coordinate. Example: x = 5 is a vertical line at x = 5. It is parallel to the y-axis.\n\n" +
            "         y\n" +
            "         ↑\n" +
            "         |     │\n" +
            "         |     │\n" +
            "         |     │  ← x = 5\n" +
            "  ───────┼─────┼─────→ x\n" +
            "         |     │\n" +
            "         |     │\n" +
            "         0     5",
          bodyAm:
            "በመስመሩ ላይ ያለ ማንኛውም ነጥብ ተመሳሳይ x-አስተባባሪ አለው። ምሳሌ፡ x = 5 በ x = 5 ላይ ያለ ቀጥ ያለ መስመር ነው። ከ y-ዘንግ ጋር ትይዩ ነው።",
        },
        {
          id: "n2-2",
          title: "Horizontal line: y = b",
          titleAm: "አግድም መስመር፡ y = b",
          body:
            "Every point on the line has the same y-coordinate. Example: y = −4 is a horizontal line at y = −4. It is parallel to the x-axis.\n\n" +
            "         y\n" +
            "         ↑\n" +
            "         |\n" +
            "      0  |───────────  ← y = 0 (x-axis)\n" +
            "         |\n" +
            "         |\n" +
            "     −4  |───────────  ← y = −4\n" +
            "         |\n" +
            "         └──────────→ x",
          bodyAm:
            "በመስመሩ ላይ ያለ ማንኛውም ነጥብ ተመሳሳይ y-አስተባባሪ አለው። ምሳሌ፡ y = −4 በ y = −4 ላይ ያለ አግድም መስመር ነው። ከ x-ዘንግ ጋር ትይዩ ነው።",
        },
        {
          id: "n2-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, x = 5 is VERTICAL (up-down). y = 5 is HORIZONTAL (left-right). x = 5 is parallel to the y-axis. y = 5 is parallel to the x-axis. Do not confuse them!",
          bodyAm:
            "ባንቺ፣ x = 5 ቀጥ ያለ (ወደ ላይ-ታች) ነው። y = 5 አግድም (ወደ ግራ-ቀኝ) ነው። x = 5 ከ y-ዘንግ ጋር ትይዩ ነው። y = 5 ከ x-ዘንግ ጋር ትይዩ ነው። አታደናግሪያቸው!",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Graphs of y = mx",
      titleAm: "የ y = mx ግራፎች",
      body:
        "A line of the form y = mx always passes through the origin (0, 0). The letter m tells you the steepness and direction.",
      bodyAm:
        "y = mx ቅርጽ ያለው መስመር ሁልጊዜ በመነሻው (0, 0) ያልፋል። ፊደሉ m ቁልቁለቱን እና አቅጣጫውን ይነግርሃል።",
      children: [
        {
          id: "n3-1",
          title: "How to graph it",
          titleAm: "እንዴት መሳል",
          body:
            "Step 1: Choose 3–5 values for x. Step 2: Compute y for each. Step 3: Write the (x, y) pairs in a table. Step 4: Plot the points. Step 5: Draw a straight line through them.",
          bodyAm:
            "ደረጃ 1፡ 3–5 የ x እሴቶችን ምረጪ። ደረጃ 2፡ ለእያንዳንዱ y አስሊ። ደረጃ 3፡ (x, y) ጥንዶችን በሠንጠረዥ ጻፊ። ደረጃ 4፡ ነጥቦቹን አስቀምጪ። ደረጃ 5፡ ቀጥተኛ መስመር ሳሊባቸው።",
        },
        {
          id: "n3-2",
          title: "Example: y = 3x",
          titleAm: "ምሳሌ፡ y = 3x",
          body:
            "Table:\n" +
            "  x  | −2 | −1 |  0 |  1 |  2\n" +
            "  y  | −6 | −3 |  0 |  3 |  6\n" +
            "  (x,y) | (−2,−6) | (−1,−3) | (0,0) | (1,3) | (2,6)\n\n" +
            "Banchi, plot these five points. They all lie on a straight line through the origin. This line goes up to the right because m = 3 > 0.",
          bodyAm:
            "ሠንጠረዥ፡ ከላይ ያለውን ተመልከቺ። አምስቱም ነጥቦች በመነሻው በሚያልፍ ቀጥተኛ መስመር ላይ ይዋሻሉ። ወደ ቀኝ ወደ ላይ ይወጣል m = 3 > 0 ስለሆነ።",
        },
        {
          id: "n3-3",
          title: "Sign of m decides direction",
          titleAm: "የ m ምልክት አቅጣጫውን ይወስናል",
          body:
            "If m > 0: line goes UP from left to right. It passes through quadrants I and III.\n" +
            "If m < 0: line goes DOWN from left to right. It passes through quadrants II and IV.\n\n" +
            "Picture for m > 0 (e.g. y = 2x):      Picture for m < 0 (e.g. y = −2x):\n" +
            "       /                                    \\\n" +
            "      /                                      \\\n" +
            "     /                                        \\\n" +
            "    /                                          \\\n" +
            "   /                                            \\",
          bodyAm:
            "m > 0 ከሆነ፡ ከግራ ወደ ቀኝ ወደ ላይ ይወጣል። በ I እና III ሩብ ያልፋል።\n" +
            "m < 0 ከሆነ፡ ከግራ ወደ ቀኝ ወደ ታች ይወርዳል። በ II እና IV ሩብ ያልፋል።",
        },
        {
          id: "n3-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, y = mx always passes through (0, 0). If a line does NOT pass through the origin, it is y = mx + c (with c ≠ 0).",
          bodyAm:
            "ባንቺ፣ y = mx ሁልጊዜ በ (0, 0) ያልፋል። መስመር በመነሻው የማያልፍ ከሆነ y = mx + c (c ≠ 0) ነው።",
        },
        {
          id: "n3-5",
          title: "Practise yourself, Banchi",
          titleAm: "ራስሽን ሞክሪ ባንቺ",
          body:
            "Sketch y = −3x. Answer: passes through origin, goes DOWN to the right, passes quadrants II and IV.",
          bodyAm:
            "y = −3x ሳሊ። መልስ፡ በመነሻው ያልፋል፣ ወደ ቀኝ ወደ ታች ይወርዳል፣ በ II እና IV ሩብ ያልፋል።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Graphs of y = mx + c",
      titleAm: "የ y = mx + c ግራፎች",
      body:
        "Banchi, this is the general linear equation. The m tells the slope (steepness). The c tells where the line crosses the y-axis.",
      bodyAm:
        "ባንቺ፣ ይህ አጠቃላይ መስመራዊ እኩልታ ነው። m ቁልቁለቱን ይነግርሃል። c መስመሩ የ y-ዘንግን የሚያቋርጥበትን ቦታ ይነግርሃል።",
      children: [
        {
          id: "n4-1",
          title: "What c means",
          titleAm: "c ምን ማለት ነው",
          body:
            "c is called the y-intercept. It is where the line crosses the y-axis (when x = 0). Example: y = 2x + 1 crosses the y-axis at (0, 1).",
          bodyAm:
            "c የ y-intercept ይባላል። መስመሩ y-ዘንግን የሚያቋርጥበት ነው (x = 0 ሲሆን)። ምሳሌ፡ y = 2x + 1 y-ዘንግን በ (0, 1) ያቋርጣል።",
        },
        {
          id: "n4-2",
          title: "Example: y = 2x + 1",
          titleAm: "ምሳሌ፡ y = 2x + 1",
          body:
            "Table:\n" +
            "  x  | −1 |  0 |  1\n" +
            "  y  | −1 |  1 |  3\n" +
            "  (x,y) | (−1,−1) | (0,1) | (1,3)\n\n" +
            "Graph sketch:\n" +
            "         y\n" +
            "         ↑\n" +
            "         |        /\n" +
            "         |       /\n" +
            "         |      /\n" +
            "         |     /\n" +
            "         |    / (1, 3)\n" +
            "         |  / (0, 1) ← y-intercept\n" +
            "         |/ (−1, −1)\n" +
            "  ───────┼──────────────→ x\n" +
            "        /|\n" +
            "       / |\n\n" +
            "Banchi, notice the line crosses the y-axis at 1 (that's c). It goes UP because m = 2 > 0.",
          bodyAm:
            "ሠንጠረዥን ተመልከቺ። መስመሩ y-ዘንግን በ 1 ያቋርጣል (ይህ c ነው)። m = 2 > 0 ስለሆነ ወደ ላይ ይወጣል።",
        },
        {
          id: "n4-3",
          title: "Example: y = −2x + 1",
          titleAm: "ምሳሌ፡ y = −2x + 1",
          body:
            "Table:\n" +
            "  x  | −1 |  0 |  1\n" +
            "  y  |  3 |  1 | −1\n" +
            "  (x,y) | (−1,3) | (0,1) | (1,−1)\n\n" +
            "Graph sketch:\n" +
            "         y\n" +
            "         ↑\n" +
            "         | (−1, 3)\n" +
            "         |  \\\n" +
            "         |   \\\n" +
            "         |    (0, 1) ← y-intercept\n" +
            "         |     \\\n" +
            "         |      (1, −1)\n" +
            "         |       \\\n" +
            "  ───────┼────────────────→ x\n\n" +
            "Banchi, notice the line still crosses y-axis at 1 (that's c). But it goes DOWN because m = −2 < 0.",
          bodyAm:
            "ሠንጠረዥን ተመልከቺ። መስመሩ y-ዘንግን አሁንም በ 1 ያቋርጣል (ይህ c ነው)። ግን m = −2 < 0 ስለሆነ ወደ ታች ይወርዳል።",
        },
        {
          id: "n4-4",
          title: "Example: 3y − 2x = 1",
          titleAm: "ምሳሌ፡ 3y − 2x = 1",
          body:
            "First solve for y: 3y = 2x + 1, so y = (2x + 1)/3 = (2/3)x + 1/3. Now m = 2/3 and c = 1/3.\n\n" +
            "Table:\n" +
            "  x  | −1 |  0 |  1\n" +
            "  y  | −1/3 | 1/3 | 1",
          bodyAm:
            "መጀመሪያ y ን ፍቺ፡ 3y = 2x + 1, y = (2x + 1)/3 = (2/3)x + 1/3። አሁን m = 2/3 እና c = 1/3።",
        },
        {
          id: "n4-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, always check whether the equation is already in y = mx + c form. If it is 3y − 2x = 1, first solve for y. Do not read m and c directly from the raw equation.",
          bodyAm:
            "ባንቺ፣ ሁልጊዜ እኩልታው በ y = mx + c ቅርጽ መሆኑን አረጋግጪ። 3y − 2x = 1 ከሆነ መጀመሪያ y ን ፍቺ። m እና c ን ከዋናው እኩልታ በቀጥታ አታንብቢ።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Linear Inequalities",
      titleAm: "መስመራዊ ያለ-እኩልነት",
      body:
        "Banchi, an inequality compares two sides with one of these signs: <, >, ≤, ≥, ≠. Example: 2x + 3 > 7.",
      bodyAm:
        "ባንቺ፣ ያለ-እኩልነት ሁለት ወገኖችን በአንዱ ምልክት ያወዳድራል፡ <, >, ≤, ≥, ≠። ምሳሌ፡ 2x + 3 > 7።",
      children: [
        {
          id: "n5-1",
          title: "Meaning of each sign",
          titleAm: "የእያንዳንዱ ምልክት ትርጉም",
          body:
            "<  means 'is less than'. Example: 3 < 5.\n" +
            ">  means 'is greater than'. Example: 5 > 3.\n" +
            "≤  means 'is less than or equal to'. Example: x ≤ 4 means 4 or any number smaller.\n" +
            "≥  means 'is greater than or equal to'. Example: x ≥ 4 means 4 or any number bigger.\n" +
            "≠  means 'is not equal to'. Example: x ≠ 0 means any number except zero.",
          bodyAm:
            "< ማለት 'ያንሳል'። > ማለት 'ይበልጣል'። ≤ ማለት 'ያንሳል ወይም እኩል ነው'። ≥ ማለት 'ይበልጣል ወይም እኩል ነው'። ≠ ማለት 'እኩል አይደለም'።",
        },
        {
          id: "n5-2",
          title: "Rule 1 — Adding or subtracting",
          titleAm: "ደንብ 1 — መደመር ወይም መቀነስ",
          body:
            "If you add or subtract the same number on both sides, the direction of the inequality stays the SAME.\n\nExample: x + 2 < 5. Subtract 2 from both sides: x < 3. Direction unchanged.",
          bodyAm:
            "ሁለቱም ወገኖች ላይ ተመሳሳይ ቁጥር ካከልሽ ወይም ከቀነስሽ የያለ-እኩልነቱ አቅጣጫ አይለወጥም። ምሳሌ፡ x + 2 < 5። ከሁለቱም ወገን 2 ቀንሺ፡ x < 3።",
        },
        {
          id: "n5-3",
          title: "Rule 2 — Multiply or divide by POSITIVE",
          titleAm: "ደንብ 2 — በአዎንታዊ ማባዛት ወይም መከፋፈል",
          body:
            "If you multiply or divide both sides by the same POSITIVE number, the direction stays the SAME.\n\nExample: 2x > 8. Divide by 2: x > 4. Direction unchanged.",
          bodyAm:
            "ሁለቱንም ወገኖች በተመሳሳይ አዎንታዊ ቁጥር ካባዛሽ ወይም ከከፈልሽ አቅጣጫው አይለወጥም። ምሳሌ፡ 2x > 8። በ 2 ከፍለሽ፡ x > 4።",
        },
        {
          id: "n5-4",
          title: "Rule 3 — Multiply or divide by NEGATIVE (REVERSE!)",
          titleAm: "ደንብ 3 — በአሉታዊ ማባዛት ወይም መከፋፈል (ቀይሺ!)",
          body:
            "Banchi, this is the BIGGEST trap in the whole chapter!\n\nIf you multiply or divide both sides by the same NEGATIVE number, you MUST REVERSE the direction of the inequality.\n\n< becomes >\n> becomes <\n≤ becomes ≥\n≥ becomes ≤\n\nExample: −2x > 8. Divide by −2: x < −4 (NOT x > −4!). The sign flipped because we divided by a negative.",
          bodyAm:
            "ባንቺ፣ ይህ በሙሉ ምዕራፉ ውስጥ ትልቁ ወጥመድ ነው!\n\nሁለቱንም ወገኖች በተመሳሳይ አሉታዊ ቁጥር ካባዛሽ ወይም ከከፈልሽ የያለ-እኩልነቱን አቅጣጫ መቀየር አለብሽ።\n\n< ወደ > ይለወጣል\n> ወደ < ይለወጣል\n≤ ወደ ≥ ይለወጣል\n≥ ወደ ≤ ይለወጣል\n\nምሳሌ፡ −2x > 8። በ −2 ከፍለሽ፡ x < −4 (x > −4 አይደለም!)። በአሉታዊ ስለ ከፈልን ምልክቱ ተገለበጠ።",
        },
        {
          id: "n5-5",
          title: "Solving step-by-step",
          titleAm: "ደረጃ በደረጃ መፍታት",
          body:
            "Example: 3x − 7 ≥ 11\n" +
            "Step 1: Add 7 to both sides: 3x ≥ 18.\n" +
            "Step 2: Divide by 3 (positive, no reversal): x ≥ 6.\n\n" +
            "Example: −7(x + 1) < 4(x − 3) + 6\n" +
            "Step 1: Expand both sides: −7x − 7 < 4x − 12 + 6 → −7x − 7 < 4x − 6.\n" +
            "Step 2: Add 7: −7x < 4x + 1.\n" +
            "Step 3: Subtract 4x: −11x < 1.\n" +
            "Step 4: Divide by −11 (negative → REVERSE): x > −1/11.",
          bodyAm:
            "ምሳሌ 1፡ 3x − 7 ≥ 11። ደረጃ 1፡ 7 ከሁለቱም ወገን ጨምሪ፡ 3x ≥ 18። ደረጃ 2፡ በ 3 ክፈሊ (አዎንታዊ፣ ምልክት አይገለበጥም)፡ x ≥ 6።\n\nምሳሌ 2፡ −7(x + 1) < 4(x − 3) + 6። ደረጃ 1፡ ሁለቱንም ወገን አስፋፊ። ደረጃ 2-3፡ ቀለል አድርጊ። ደረጃ 4፡ በ −11 ክፈሊ (አሉታዊ → ቀይሺ)፡ x > −1/11።",
        },
        {
          id: "n5-6",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, the number one mistake students make in this chapter: forgetting to reverse the inequality sign when multiplying or dividing by a negative. Always check: is the number I'm dividing by negative? If yes, flip the sign!",
          bodyAm:
            "ባንቺ፣ በዚህ ምዕራፍ ውስጥ ተማሪዎች የሚሠሩት ቁጥር አንድ ስህተት፡ በአሉታዊ ሲባዙ ወይም ሲካፈሉ ምልክቱን መገልበጥ መርሳት ነው። ሁልጊዜ አረጋግጪ፡ የምከፍለው ቁጥር አሉታዊ ነው? አዎ ከሆነ ምልክቱን ገልብጪ!",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Applications of Linear Equations and Inequalities",
      titleAm: "የመስመራዊ እኩልታዎች እና ያለ-እኩልነት ተግባራዊ አጠቃቀም",
      body:
        "Banchi, word problems are the most common exam question. The trick is to translate English sentences into math, then solve.",
      bodyAm:
        "ባንቺ፣ የቃላት ችግሮች በፈተና በጣም ተደጋጋሚ ናቸው። ዘዴው የእንግሊዝኛ ዓረፍተ ነገሮችን ወደ ሂሳብ መተርጎም ነው፣ ከዚያ መፍታት።",
      children: [
        {
          id: "n6-1",
          title: "Translation table (memorize these!)",
          titleAm: "የትርጉም ሠንጠረዥ (እነዚህን አስታውሺ!)",
          body:
            "'is' → =\n'sum of' → +\n'difference of' → −\n'product of' → ×\n'quotient of' → ÷\n'at least' or 'not less than' → ≥\n'at most' or 'not more than' → ≤\n'more than' → +\n'less than' → −\n'twice' → 2 ×\n'consecutive integers' → n, n + 1, n + 2\n'consecutive even integers' → n, n + 2, n + 4",
          bodyAm:
            "'is' → =\n'сум' → +\n'ልዩነት' → −\n'ምርት' → ×\n'ጥቅል' → ÷\n'ቢያንስ' ወይም 'ያላነሰ' → ≥\n'ቢበዛ' ወይም 'ያልበለጠ' → ≤",
        },
        {
          id: "n6-2",
          title: "Age problem example",
          titleAm: "የዕድሜ ችግር ምሳሌ",
          body:
            "Three years ago the sum of the ages of a man and his son was 52. The man is 18 years older than his son. Find the son's present age.\n\n" +
            "Let S = son's age now, M = man's age now.\n" +
            "(M − 3) + (S − 3) = 52 → M + S = 58.\n" +
            "M = S + 18.\n" +
            "Substitute: (S + 18) + S = 58 → 2S = 40 → S = 20.\n" +
            "Answer: the son is 20 years old.",
          bodyAm:
            "ከሦስት ዓመት በፊት የአባትና የልጅ ዕድሜ ድምር 52 ነበር። አባት ከልጁ 18 ዓመት ይበልጣል። የልጁን የአሁን ዕድሜ ፈልጊ። መልስ፡ 20 ዓመት።",
        },
        {
          id: "n6-3",
          title: "Work problem example",
          titleAm: "የሥራ ችግር ምሳሌ",
          body:
            "Samuel can do a job in 15 days. Saron can do it in 10 days. How long together?\n\n" +
            "In 1 day, Samuel does 1/15 of the job. Saron does 1/10.\n" +
            "Together in 1 day: 1/15 + 1/10 = 2/30 + 3/30 = 5/30 = 1/6 of the job.\n" +
            "So the whole job takes 6 days.",
          bodyAm:
            "ሳሙኤል አንድን ሥራ በ 15 ቀናት ይሠራል። ሳሮን በ 10 ቀናት። አንድ ላይ ስንት ቀናት? በ 1 ቀን ሳሙኤል 1/15 ይሠራል፣ ሳሮን 1/10። አንድ ላይ በ 1 ቀን 1/15 + 1/10 = 1/6። ስለዚህ ሙሉ ሥራው 6 ቀናት ይወስዳል።",
        },
        {
          id: "n6-4",
          title: "Inequality application example",
          titleAm: "የያለ-እኩልነት ተግባራዊ ምሳሌ",
          body:
            "A carnival has two plans.\nPlan A: Birr 15 entrance + Birr 10 per ride.\nPlan B: Birr 10 entrance + Birr 15 per ride.\n\nFor how many rides is Plan A cheaper than Plan B?\n\n" +
            "Cost A = 15 + 10x,  Cost B = 10 + 15x.\n" +
            "Want A < B:  15 + 10x < 10 + 15x.\n" +
            "15 − 10 < 15x − 10x  →  5 < 5x  →  1 < x.\n" +
            "So for 2 or more rides, Plan A is cheaper.",
          bodyAm:
            "ሁለት ዕቅዶች። ዕቅድ A፡ 15 ብር መግቢያ + 10 ብር በየጉዞ። ዕቅድ B፡ 10 ብር መግቢያ + 15 ብር በየጉዞ። ዕቅድ A ለስንት ጉዞ ያነሰ ይሆናል? መልስ፡ ከ 1 ጉዞ በላይ (ማለትም 2 ወይም ከዚያ በላይ)።",
        },
        {
          id: "n6-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, read the problem twice. Write down what is asked. Choose a letter (like x or S) for the unknown. Write the equation. Solve. Then read the problem again — does your answer make sense?",
          bodyAm:
            "ባንቺ፣ ችግሩን ሁለት ጊዜ አንብቢ። የሚጠየቀውን ጻፊ። ለማይታወቀው ፊደል (እንደ x) ምረጪ። እኩልታውን ጻፊ። ፍቺ። ከዚያ ችግሩን እንደገና አንብቢ — መልስሽ ትርጉም አለው?",
        },
      ],
    },

    {
      id: "n7",
      title: "7. Exam Strategy — Chapter 3",
      titleAm: "የፈተና ስልት — ምዕራፍ 3",
      body:
        "Banchi, four quick checks before answering any question from this chapter.",
      bodyAm:
        "ባንቺ፣ ከዚህ ምዕራፍ ማንኛውንም ጥያቄ ከመመለስሽ በፊት አራት ፈጣን ቼኮች።",
      children: [
        {
          id: "n7-1",
          title: "Check 1 — Which form is it?",
          titleAm: "ቼክ 1 — የትኛው ቅርጽ ነው?",
          body:
            "Equation (=) → solve for exact value. Inequality (<, >, ≤, ≥) → solve for a range. Graph question → plot points and connect.",
          bodyAm:
            "እኩልታ (=) → ትክክለኛ እሴት ፈልጊ። ያለ-እኩልነት → ክልል ፈልጊ። የግራፍ ጥያቄ → ነጥቦችን አስቀምጠሽ አገናኚ።",
        },
        {
          id: "n7-2",
          title: "Check 2 — Divided by a negative?",
          titleAm: "ቼክ 2 — በአሉታዊ ተከፍሏል?",
          body:
            "In an inequality, if you divide or multiply by a negative, FLIP the sign. This is the number one trap.",
          bodyAm:
            "በያለ-እኩልነት ውስጥ በአሉታዊ ካባዛሽ ወይም ከከፈልሽ ምልክቱን ገልብጪ። ይህ ቁጥር አንድ ወጥመድ ነው።",
        },
        {
          id: "n7-3",
          title: "Check 3 — Is the equation solved for y?",
          titleAm: "ቼክ 3 — እኩልታው y ተፈትቷል?",
          body:
            "If it's not in y = mx + c form, solve first. Do not guess m and c from the raw equation.",
          bodyAm:
            "በ y = mx + c ቅርጽ ካልሆነ መጀመሪያ ፍቺ። m እና c ን ከዋናው እኩልታ አትገምቺ።",
        },
        {
          id: "n7-4",
          title: "Check 4 — Does the answer make sense?",
          titleAm: "ቼክ 4 — መልሱ ትርጉም አለው?",
          body:
            "If the problem is about ages, the answer must be positive. If it's about time, negative makes no sense. Always sanity-check.",
          bodyAm:
            "ችግሩ ስለ ዕድሜ ከሆነ መልሱ አዎንታዊ መሆን አለበት። ስለ ጊዜ ከሆነ አሉታዊ ትርጉም የለውም። ሁልጊዜ አረጋግጪ።",
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
      stem: "In which quadrant does the point (7, −2) lie?",
      options: ["I", "II", "III", "IV"],
      answer: "3",
      explanation:
        "x = 7 is positive, y = −2 is negative. The quadrant with (+, −) is IV. Banchi, memorize: I (+,+), II (−,+), III (−,−), IV (+,−).",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "In which quadrant does the point (−3, 5) lie?",
      options: ["I", "II", "III", "IV"],
      answer: "1",
      explanation:
        "x = −3 is negative, y = 5 is positive. The quadrant with (−, +) is II.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "In which quadrant does the point (−9, −11) lie?",
      options: ["I", "II", "III", "IV"],
      answer: "2",
      explanation:
        "Both coordinates are negative. That is quadrant III (−, −).",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the equation of the x-axis?",
      options: ["x = 0", "y = 0", "x = y", "y = x + 1"],
      answer: "1",
      explanation:
        "Every point on the x-axis has y = 0. So the x-axis is the line y = 0.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the equation of the y-axis?",
      options: ["x = 0", "y = 0", "x = y", "y = 5"],
      answer: "0",
      explanation:
        "Every point on the y-axis has x = 0. So the y-axis is the line x = 0.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "The line x = 5 is:",
      options: ["Horizontal", "Vertical", "Diagonal", "Through the origin"],
      answer: "1",
      explanation:
        "x = a is always a VERTICAL line (goes up-down). It is parallel to the y-axis. Banchi, do not confuse with y = 5 (horizontal).",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "The line y = −4 is:",
      options: ["Horizontal", "Vertical", "Diagonal", "Through the origin"],
      answer: "0",
      explanation:
        "y = b is always a HORIZONTAL line (goes left-right). It is parallel to the x-axis.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "Which line passes through the origin?",
      options: ["y = 3", "x = 2", "y = 4x", "y = 2x + 1"],
      answer: "2",
      explanation:
        "y = mx always passes through (0, 0). Only y = 4x has this form. y = 2x + 1 does NOT (it has c = 1).",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "If y = 3x, what is y when x = 4?",
      options: ["7", "12", "3", "1"],
      answer: "1",
      explanation:
        "Substitute x = 4: y = 3(4) = 12.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "If y = 2x + 1, what is y when x = 0?",
      options: ["0", "1", "2", "3"],
      answer: "1",
      explanation:
        "y = 2(0) + 1 = 1. Banchi, when x = 0, y equals c. That's why c is the y-intercept.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "Which statement is TRUE?",
      options: ["2 < 5", "2 > 5", "2 = 5", "2 ≥ 5"],
      answer: "0",
      explanation:
        "2 is less than 5, so 2 < 5.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: x + 2 < 7",
      options: ["x < 5", "x > 5", "x < 9", "x > 9"],
      answer: "0",
      explanation:
        "Subtract 2 from both sides: x < 7 − 2 = 5. Direction unchanged (subtraction does not flip the sign).",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 2x > 8",
      options: ["x > 4", "x < 4", "x > 16", "x < 16"],
      answer: "0",
      explanation:
        "Divide both sides by 2 (positive): x > 4. Direction stays the same.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: −2x > 8",
      options: ["x > −4", "x < −4", "x > 4", "x < 4"],
      answer: "1",
      explanation:
        "Divide by −2 (NEGATIVE). REVERSE the sign! −2x > 8 becomes x < −4. Banchi, this is the biggest trap — always check if you're dividing by a negative.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "The point (0, 0) is called:",
      options: ["Axis", "Origin", "Quadrant", "Intercept"],
      answer: "1",
      explanation:
        "The origin is where the two axes cross. Its coordinates are (0, 0).",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "In (5, −3), which number is the x-coordinate?",
      options: ["5", "−3", "Both", "Neither"],
      answer: "0",
      explanation:
        "The first number in an ordered pair is the x-coordinate. So x = 5.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "In (5, −3), which number is the y-coordinate?",
      options: ["5", "−3", "Both", "Neither"],
      answer: "1",
      explanation:
        "The second number in an ordered pair is the y-coordinate. So y = −3.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these inequalities means 'x is at least 5'?",
      options: ["x > 5", "x < 5", "x ≥ 5", "x ≤ 5"],
      answer: "2",
      explanation:
        "'At least' means 'greater than or equal to'. So x ≥ 5. Banchi, watch for these phrase translations.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these means 'x is at most 3'?",
      options: ["x > 3", "x < 3", "x ≥ 3", "x ≤ 3"],
      answer: "3",
      explanation:
        "'At most' means 'less than or equal to'. So x ≤ 3.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "The graph of y = mx passes through which quadrants when m > 0?",
      options: ["I and II", "I and III", "II and IV", "III and IV"],
      answer: "1",
      explanation:
        "When m > 0, the line goes up from left to right, passing through quadrants I and III. Banchi, picture a line going up-right from the origin — it hits top-right (I) and bottom-left (III).",
    },

    // ---------- MEDIUM MCQ (Q21–Q40) ----------
    {
      id: "q21",
      type: "mcq",
      difficulty: "medium",
      stem: "The point (5, 0) lies:",
      options: ["In quadrant I", "In quadrant IV", "On the x-axis", "On the y-axis"],
      answer: "2",
      explanation:
        "When y = 0, the point is on the x-axis. So (5, 0) lies on the x-axis. It is in no quadrant.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "medium",
      stem: "The point (0, −7) lies:",
      options: ["In quadrant II", "In quadrant IV", "On the x-axis", "On the y-axis"],
      answer: "3",
      explanation:
        "When x = 0, the point is on the y-axis. So (0, −7) lies on the y-axis. No quadrant.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "medium",
      stem: "If the point (k, 5) lies on the line y = −3x, what is k?",
      options: ["−5/3", "5/3", "−15", "15"],
      answer: "0",
      explanation:
        "Substitute y = 5: 5 = −3k → k = −5/3. Banchi, when a point lies on a line, its coordinates satisfy the equation.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 3x − 7 ≥ 11",
      options: ["x ≥ 6", "x ≤ 6", "x ≥ 18", "x ≤ 4"],
      answer: "0",
      explanation:
        "Add 7: 3x ≥ 18. Divide by 3 (positive, no flip): x ≥ 6.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: x + 4 ≤ 4x − 3",
      options: ["x ≥ 7/3", "x ≤ 7/3", "x ≥ 7", "x ≤ 1/3"],
      answer: "0",
      explanation:
        "Subtract x from both sides: 4 ≤ 3x − 3. Add 3: 7 ≤ 3x. Divide by 3: 7/3 ≤ x, or x ≥ 7/3. Direction is positive because we divided by +3.",
    },
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 1/2 x > 5/2",
      options: ["x > 5", "x < 5", "x > 1/5", "x < 1/5"],
      answer: "0",
      explanation:
        "Multiply both sides by 2: x > 5. Direction unchanged (multiplied by positive 2).",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 3x < 9x + 4",
      options: ["x > −2/3", "x < −2/3", "x > 2/3", "x < 2/3"],
      answer: "0",
      explanation:
        "Subtract 9x: −6x < 4. Divide by −6 (negative → REVERSE): x > −4/6 = −2/3. So x > −2/3. Banchi, watch the flip!",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve for y: x = 7 − 2y",
      options: ["y = (7 − x)/2", "y = (x − 7)/2", "y = 7 − 2x", "y = 2x − 7"],
      answer: "0",
      explanation:
        "Rearrange: 2y = 7 − x. Divide by 2: y = (7 − x)/2.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Sketch: y = 2x + 3. Where does it cross the y-axis?",
      options: ["(0, 0)", "(0, 3)", "(3, 0)", "(0, 2)"],
      answer: "1",
      explanation:
        "The y-intercept is c. Here c = 3, so the line crosses the y-axis at (0, 3).",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Sketch: y = −x + 1. What is the slope?",
      options: ["1", "−1", "0", "Cannot tell"],
      answer: "1",
      explanation:
        "Comparing to y = mx + c, m = −1. So the slope is −1.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "The relationship between Celsius and Fahrenheit is C = (5/9)(F − 32). Express F in terms of C.",
      options: ["F = (9/5)C + 32", "F = (5/9)C + 32", "F = 32 − (9/5)C", "F = (9/5)(C + 32)"],
      answer: "0",
      explanation:
        "Start: C = (5/9)(F − 32). Multiply both sides by 9/5: (9/5)C = F − 32. Add 32: F = (9/5)C + 32.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "In a class of 42 students, the number of girls is 1.1 times the number of boys. How many boys are there?",
      options: ["20", "22", "21", "24"],
      answer: "0",
      explanation:
        "Let b = number of boys. Girls = 1.1b. Total: b + 1.1b = 42 → 2.1b = 42 → b = 20. So 20 boys and 22 girls.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "The sum of the ages of a mother and her daughter is 68 years. The mother is 22 years older than her daughter. How old is the mother?",
      options: ["23", "45", "43", "35"],
      answer: "1",
      explanation:
        "Let d = daughter's age, m = mother's age. m + d = 68 and m = d + 22. Substitute: (d + 22) + d = 68 → 2d = 46 → d = 23. Then m = 23 + 22 = 45.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Find two consecutive even positive integers whose sum is at most 10.",
      options: ["2 and 4, or 4 and 6", "6 and 8", "4 and 6 only", "1 and 2"],
      answer: "0",
      explanation:
        "Let x = first even integer, x + 2 = second. Sum: 2x + 2 ≤ 10 → 2x ≤ 8 → x ≤ 4. Even positive x: 2 or 4. Pairs: (2, 4) or (4, 6).",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "Hanan's monthly income is Birr 13,926. To rent, it must be at least 3 times the rent. What is the highest rent?",
      options: ["Birr 4642", "Birr 4200", "Birr 5000", "Birr 13926"],
      answer: "0",
      explanation:
        "Income ≥ 3 × rent → 13926 ≥ 3R → R ≤ 13926/3 = 4642. So the highest rent is Birr 4642.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "A ride service charges Birr 50 pickup + Birr 10/km. Maximum travel if cost ≤ Birr 1350?",
      options: ["130 km", "135 km", "100 km", "120 km"],
      answer: "0",
      explanation:
        "Cost = 50 + 10k ≤ 1350 → 10k ≤ 1300 → k ≤ 130 km.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Which pair of inequalities are equivalent?",
      options: [
        "3x − 2 ≤ x + 1 and 2x + 1 ≤ 4",
        "x + 1 > 5 and x > 4",
        "Both A and B are correct",
        "Neither A nor B",
      ],
      answer: "2",
      explanation:
        "Check A: 3x − 2 ≤ x + 1 → 2x ≤ 3 → x ≤ 1.5. 2x + 1 ≤ 4 → 2x ≤ 3 → x ≤ 1.5. Equivalent. Check B: x + 1 > 5 → x > 4. Directly x > 4. Both are correct pairs.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: −4(y − 1) + 3y ≥ 1 − y",
      options: ["All real numbers", "No solution", "y ≥ 1", "y ≤ 1"],
      answer: "0",
      explanation:
        "Expand left: −4y + 4 + 3y = −y + 4. Right: 1 − y. So −y + 4 ≥ 1 − y. Add y: 4 ≥ 1. Always true. So any number works. Banchi, this is a special case: 'always true' → infinite solutions.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: 7(y + 1) − y > 2(3y + 4)",
      options: ["No solution", "All real numbers", "y > 1", "y < 1"],
      answer: "0",
      explanation:
        "Left: 7y + 7 − y = 6y + 7. Right: 6y + 8. So 6y + 7 > 6y + 8 → 7 > 8. False. So no solution. Banchi, when a false statement appears, there is no solution.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Getaneh ploughed land. The 1st ploughed half of the 2nd. The 2nd ploughed 2.4 ha more than the 3rd. Total = 12.4 ha. How much did the 2nd plough?",
      options: ["5.92 ha", "3.52 ha", "2.96 ha", "4 ha"],
      answer: "0",
      explanation:
        "Let 3rd driver = x. Then 2nd = x + 2.4, and 1st = 1/2(x + 2.4). Total: x + (x + 2.4) + 1/2(x + 2.4) = 12.4. Simplify: (5/2)x + 3.6 = 12.4 → (5/2)x = 8.8 → x = 3.52. So the 2nd driver ploughed 3.52 + 2.4 = 5.92 ha.",
    },

    // ---------- HARD MCQ (Q41–Q45) ----------
    {
      id: "q41",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: −7(x + 1) < 4(x − 3) + 6",
      options: ["x > −1/11", "x < −1/11", "x > 1/11", "x < 1/11"],
      answer: "0",
      explanation:
        "Expand: −7x − 7 < 4x − 12 + 6 → −7x − 7 < 4x − 6. Add 7: −7x < 4x + 1. Subtract 4x: −11x < 1. Divide by −11 (NEGATIVE → REVERSE): x > −1/11.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "hard",
      stem: "Solve: 4 − 3x ≤ −(1/2)(2 + 8x)",
      options: ["x ≤ −5", "x ≥ −5", "No solution", "All real numbers"],
      answer: "0",
      explanation:
        "Step 1: Expand the right side. −(1/2)(2 + 8x) = −1 − 4x. So 4 − 3x ≤ −1 − 4x. Step 2: Add 4x to both sides: 4 + x ≤ −1. Step 3: Subtract 4: x ≤ −5. The correct answer is x ≤ −5.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "hard",
      stem: "A father's age exceeded at least 4 times his son's age 3 years ago. Father is 47 now. What is the possible present age of the son?",
      options: ["S < 14", "S > 14", "S = 14", "S ≥ 14"],
      answer: "0",
      explanation:
        "3 years ago: F − 3 > 4(S − 3). Substituting F = 47: 44 > 4S − 12 → 56 > 4S → S < 14.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "hard",
      stem: "Solve: (1/2)x + (1/3)x − x − 1 ≥ 0",
      options: ["x ≤ −6", "x ≥ −6", "No solution", "All real numbers"],
      answer: "0",
      explanation:
        "Combine x terms: (1/2 + 1/3 − 1)x = (3/6 + 2/6 − 6/6)x = (−1/6)x. So (−1/6)x − 1 ≥ 0 → (−1/6)x ≥ 1 → x ≤ −6 (divide by −1/6, negative → flip).",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "hard",
      stem: "Rodas is 25 years old. Her brother is 10. After how many years will Rodas be exactly twice as old as her brother?",
      options: ["5 years", "10 years", "15 years", "20 years"],
      answer: "0",
      explanation:
        "After x years: Rodas = 25 + x, brother = 10 + x. Want 25 + x = 2(10 + x) → 25 + x = 20 + 2x → 25 − 20 = x → x = 5. So after 5 years.",
    },

    // ---------- SHORT ANSWER (Q46–Q50) ----------
    {
      id: "q46",
      type: "short",
      difficulty: "easy",
      stem: "Which quadrant does the point (−4, −5) lie in?",
      answer: "Quadrant III",
      explanation:
        "Both coordinates negative → quadrant III (−, −).",
    },
    {
      id: "q47",
      type: "short",
      difficulty: "medium",
      stem: "Simplify: 5x + 3 > 18",
      answer: "x > 3",
      explanation:
        "Subtract 3: 5x > 15. Divide by 5 (positive): x > 3.",
    },
    {
      id: "q48",
      type: "short",
      difficulty: "medium",
      stem: "Translate into math: '5 less than 7 times a number is 0'.",
      answer: "7x − 5 = 0",
      explanation:
        "'7 times a number' = 7x. '5 less than that' = 7x − 5. 'Is 0' = = 0. So 7x − 5 = 0.",
    },
    {
      id: "q49",
      type: "short",
      difficulty: "hard",
      stem: "A board 2.5 m long is cut so that one piece is 30 cm longer than the other. Find the length of each piece.",
      answer: "110 cm and 140 cm",
      explanation:
        "Let the shorter piece = x cm. Longer = x + 30. Total: x + (x + 30) = 250 (since 2.5 m = 250 cm). So 2x + 30 = 250 → 2x = 220 → x = 110. Shorter = 110 cm, longer = 140 cm.",
    },
    {
      id: "q50",
      type: "short",
      difficulty: "hard",
      stem: "Yoseph's party costs Birr 56.50 per person. Budget is Birr 735. What is the max number of people?",
      answer: "13 people",
      explanation:
        "56.50p ≤ 735 → p ≤ 735 / 56.50 ≈ 13.008. So p = 13 people. Banchi, when the problem says 'people', round DOWN to the nearest whole number.",
    },
    // ============================================================
    // BATCH 2 — Q51 to Q100
    // ============================================================

    // ---------- EASY MCQ (Q51–Q70) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the slope of the line y = 4x + 2?",
      options: ["2", "4", "6", "Cannot tell"],
      answer: "1",
      explanation:
        "In y = mx + c, m is the slope. Here m = 4. c = 2 is the y-intercept.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the y-intercept of y = 4x + 2?",
      options: ["2", "4", "6", "0"],
      answer: "0",
      explanation:
        "In y = mx + c, c is the y-intercept. Here c = 2. So the line crosses the y-axis at (0, 2).",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "easy",
      stem: "The line y = −5x passes through which quadrants?",
      options: ["I and III", "II and IV", "I and II", "III and IV"],
      answer: "1",
      explanation:
        "m = −5 < 0, so the line goes DOWN from left to right, passing through quadrants II and IV. Banchi, negative slope → II and IV.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "easy",
      stem: "Which inequality means '5 is less than x'?",
      options: ["5 < x", "5 > x", "5 ≤ x", "5 ≥ x"],
      answer: "0",
      explanation:
        "'5 is less than x' means 5 < x. The same as x > 5.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: x − 3 > 5",
      options: ["x > 8", "x > 2", "x < 8", "x < 2"],
      answer: "0",
      explanation:
        "Add 3 to both sides: x > 8. Direction unchanged (addition).",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 3x ≥ 12",
      options: ["x ≥ 4", "x ≤ 4", "x ≥ 36", "x ≤ 36"],
      answer: "0",
      explanation:
        "Divide by 3 (positive): x ≥ 4. Direction stays the same.",
    },
    {
      id: "q57",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: −3x ≥ 12",
      options: ["x ≥ −4", "x ≤ −4", "x ≥ 4", "x ≤ 4"],
      answer: "1",
      explanation:
        "Divide by −3 (negative → REVERSE): x ≤ −4. Banchi, watch the flip! ≥ becomes ≤.",
    },
    {
      id: "q58",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: x/4 < 3",
      options: ["x < 12", "x > 12", "x < 3/4", "x > 3/4"],
      answer: "0",
      explanation:
        "Multiply both sides by 4: x < 12. Direction unchanged (positive 4).",
    },
    {
      id: "q59",
      type: "mcq",
      difficulty: "easy",
      stem: "Which ordered pair satisfies y = 2x + 1?",
      options: ["(0, 0)", "(1, 3)", "(2, 3)", "(3, 5)"],
      answer: "1",
      explanation:
        "Substitute x = 1: y = 2(1) + 1 = 3. So (1, 3) works. Check others: (0, 1) not (0, 0). (2, 5) not (2, 3). (3, 7) not (3, 5).",
    },
    {
      id: "q60",
      type: "mcq",
      difficulty: "easy",
      stem: "Which point lies on the line y = 3x − 5?",
      options: ["(0, −5)", "(3, 4)", "(−2, −11)", "All of the above"],
      answer: "3",
      explanation:
        "Check each: (0, −5): 3(0) − 5 = −5 ✓. (3, 4): 3(3) − 5 = 4 ✓. (−2, −11): 3(−2) − 5 = −11 ✓. All three points are on the line.",
    },
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which point does NOT lie on y = 3x − 5?",
      options: ["(−1, −2)", "(0, −5)", "(1, −2)", "(2, 1)"],
      answer: "0",
      explanation:
        "Check (−1, −2): 3(−1) − 5 = −8, not −2. So (−1, −2) is NOT on the line. The others all work.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: x + y > 5 with x = 2. What does y satisfy?",
      options: ["y > 3", "y < 3", "y > 7", "y < 7"],
      answer: "0",
      explanation:
        "2 + y > 5 → y > 3.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "The point (−2, 5) lies in which quadrant?",
      options: ["I", "II", "III", "IV"],
      answer: "1",
      explanation:
        "x = −2 (negative), y = 5 (positive). That's quadrant II.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 5 − 2x < 9",
      options: ["x > −2", "x < −2", "x > 2", "x < 2"],
      answer: "0",
      explanation:
        "Subtract 5: −2x < 4. Divide by −2 (negative → REVERSE): x > −2. Banchi, flip the sign!",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "The graph of y = 2x + 3 crosses the y-axis at which point?",
      options: ["(0, 0)", "(0, 3)", "(3, 0)", "(0, 2)"],
      answer: "1",
      explanation:
        "y-intercept is c = 3, so it crosses at (0, 3).",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: −x + 4 ≤ 1",
      options: ["x ≥ 3", "x ≤ 3", "x ≥ −3", "x ≤ −3"],
      answer: "0",
      explanation:
        "Subtract 4: −x ≤ −3. Divide by −1 (negative → REVERSE): x ≥ 3.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Which line has a bigger slope: y = 5x or y = 2x?",
      options: ["y = 5x", "y = 2x", "Equal", "Cannot tell"],
      answer: "0",
      explanation:
        "Larger |m| means steeper. 5 > 2, so y = 5x is steeper.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "In an ordered pair, which number is written first?",
      options: ["y-coordinate", "x-coordinate", "The bigger one", "The smaller one"],
      answer: "1",
      explanation:
        "The x-coordinate is always first: (x, y).",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 3 < x + 1",
      options: ["x > 2", "x < 2", "x > 4", "x < 4"],
      answer: "0",
      explanation:
        "Subtract 1: 2 < x, which is x > 2. Banchi, read 'smaller than x' carefully — flip the phrase when needed.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: x/3 ≥ 2",
      options: ["x ≥ 6", "x ≤ 6", "x ≥ 2/3", "x ≤ 2/3"],
      answer: "0",
      explanation:
        "Multiply by 3: x ≥ 6. Direction unchanged (positive 3).",
    },

    // ---------- MEDIUM MCQ (Q71–Q90) ----------
    {
      id: "q71",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 2(3x − 4) > 10",
      options: ["x > 3", "x < 3", "x > 2", "x < 2"],
      answer: "0",
      explanation:
        "Expand: 6x − 8 > 10. Add 8: 6x > 18. Divide by 6 (positive): x > 3.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −2(x + 3) ≤ 8",
      options: ["x ≥ −7", "x ≤ −7", "x ≥ 7", "x ≤ 7"],
      answer: "0",
      explanation:
        "Expand: −2x − 6 ≤ 8. Add 6: −2x ≤ 14. Divide by −2 (negative → REVERSE): x ≥ −7.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve for y: 2x + 3y = 12",
      options: ["y = (12 − 2x)/3", "y = (12 + 2x)/3", "y = 12 − 2x", "y = 6 − x"],
      answer: "0",
      explanation:
        "3y = 12 − 2x. Divide by 3: y = (12 − 2x)/3.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve for y: 5x − y = 7",
      options: ["y = 5x − 7", "y = 7 − 5x", "y = 5x + 7", "y = −5x − 7"],
      answer: "0",
      explanation:
        "−y = 7 − 5x. Multiply by −1: y = 5x − 7.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "medium",
      stem: "If the line y = mx + 2 passes through (3, 8), find m.",
      options: ["m = 2", "m = 3", "m = 4", "m = 5"],
      answer: "0",
      explanation:
        "Substitute (3, 8): 8 = m(3) + 2 → 3m = 6 → m = 2.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "medium",
      stem: "If the line y = 2x + c passes through (1, 7), find c.",
      options: ["c = 5", "c = 7", "c = 9", "c = 2"],
      answer: "0",
      explanation:
        "7 = 2(1) + c → c = 5.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "medium",
      stem: "The sum of two consecutive integers is 51. What are they?",
      options: ["25 and 26", "24 and 27", "20 and 31", "26 and 25"],
      answer: "0",
      explanation:
        "Let n and n + 1. Sum: 2n + 1 = 51 → 2n = 50 → n = 25. So 25 and 26.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "medium",
      stem: "The sum of three consecutive even integers is 60. What is the largest?",
      options: ["22", "20", "18", "24"],
      answer: "0",
      explanation:
        "Let x, x+2, x+4. Sum: 3x + 6 = 60 → 3x = 54 → x = 18. Largest = 18 + 4 = 22.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "medium",
      stem: "A rectangle's length is 3 m longer than its width. Perimeter is 26 m. Find the width.",
      options: ["5 m", "6 m", "8 m", "10 m"],
      answer: "0",
      explanation:
        "Let w = width, length = w + 3. Perimeter: 2(w + w + 3) = 26 → 2(2w + 3) = 26 → 4w + 6 = 26 → 4w = 20 → w = 5 m.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "medium",
      stem: "A number increased by 5 equals 3 times the number decreased by 7. Find the number.",
      options: ["6", "8", "10", "12"],
      answer: "0",
      explanation:
        "Let x = the number. x + 5 = 3x − 7 → 12 = 2x → x = 6.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "medium",
      stem: "Temperature: C = (5/9)(F − 32). If F > 50, what is the range for C?",
      options: ["C > 10", "C < 10", "C > 50", "C < 32"],
      answer: "0",
      explanation:
        "F > 50 → F − 32 > 18 → (5/9)(F − 32) > (5/9)(18) = 10. So C > 10.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 2x + 3 > x + 7",
      options: ["x > 4", "x < 4", "x > 10", "x < 10"],
      answer: "0",
      explanation:
        "Subtract x: x + 3 > 7. Subtract 3: x > 4.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 4 − x < 2x + 1",
      options: ["x > 1", "x < 1", "x > 3", "x < 3"],
      answer: "0",
      explanation:
        "Add x: 4 < 3x + 1. Subtract 1: 3 < 3x. Divide by 3: 1 < x, i.e., x > 1.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "medium",
      stem: "A taxi charges Birr 30 + Birr 12 per km. If a passenger paid ≤ Birr 150, how far did they travel at most?",
      options: ["10 km", "12 km", "15 km", "8 km"],
      answer: "0",
      explanation:
        "30 + 12k ≤ 150 → 12k ≤ 120 → k ≤ 10 km.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "medium",
      stem: "The graph of x = 4 is a line:",
      options: ["Vertical, parallel to y-axis", "Horizontal, parallel to x-axis", "Diagonal", "Through origin"],
      answer: "0",
      explanation:
        "x = a is always vertical and parallel to the y-axis.",
    },
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (x/2) + (x/3) > 5",
      options: ["x > 6", "x < 6", "x > 30", "x < 30"],
      answer: "0",
      explanation:
        "LCM of 2 and 3 is 6. (3x + 2x)/6 > 5 → (5x/6) > 5 → 5x > 30 → x > 6.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Three years ago, a father was 4 times as old as his son. The father is now 47. Find the son's age now.",
      options: ["14", "11", "12", "13"],
      answer: "0",
      explanation:
        "Step 1: Three years ago the father was 47 − 3 = 44 years old. Step 2: Let S = son's age now. Three years ago the son was (S − 3). Step 3: 44 = 4(S − 3). Step 4: Divide by 4: 11 = S − 3. Step 5: Add 3: S = 14. The son is 14 years old now.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −5(2x − 1) ≥ 25",
      options: ["x ≤ −2", "x ≥ −2", "x ≤ 2", "x ≥ 2"],
      answer: "0",
      explanation:
        "Expand: −10x + 5 ≥ 25. Subtract 5: −10x ≥ 20. Divide by −10 (negative → REVERSE): x ≤ −2.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Which point is the intersection of y = x + 1 and y = 1 − x?",
      options: ["(0, 1)", "(1, 0)", "(1, 1)", "(0, 0)"],
      answer: "0",
      explanation:
        "Set equal: x + 1 = 1 − x → 2x = 0 → x = 0. Then y = 0 + 1 = 1. Intersection: (0, 1).",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 3(x + 2) − 2(x − 1) < 10",
      options: ["x < 2", "x > 2", "x < 6", "x > 6"],
      answer: "0",
      explanation:
        "Expand: 3x + 6 − 2x + 2 < 10 → x + 8 < 10 → x < 2.",
    },

    // ---------- HARD MCQ (Q91–Q95) ----------
    {
      id: "q91",
      type: "mcq",
      difficulty: "hard",
      stem: "Three tractor drivers ploughed 12.4 ha together. 1st = half of 2nd. 2nd = 2.4 ha more than 3rd. How much did the 3rd plough?",
      options: ["3.52 ha", "5.92 ha", "2.96 ha", "4 ha"],
      answer: "0",
      explanation:
        "Let 3rd = x. 2nd = x + 2.4. 1st = (x + 2.4)/2. Total: x + x + 2.4 + (x + 2.4)/2 = 12.4. Multiply by 2: 2x + 2x + 4.8 + x + 2.4 = 24.8 → 5x + 7.2 = 24.8 → 5x = 17.6 → x = 3.52. So 3rd ploughed 3.52 ha.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "hard",
      stem: "Samuel can do a job in 15 days, Saron in 10. Working together, how many days?",
      options: ["6", "12.5", "5", "7"],
      answer: "0",
      explanation:
        "In 1 day: 1/15 + 1/10 = 2/30 + 3/30 = 5/30 = 1/6. So together they finish in 6 days.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "hard",
      stem: "Carnival: Plan A = 15 + 10x. Plan B = 10 + 15x. For how many rides is A cheaper than B?",
      options: ["x > 1", "x < 1", "x > 5", "x < 5"],
      answer: "0",
      explanation:
        "15 + 10x < 10 + 15x → 5 < 5x → x > 1. So for more than 1 ride, Plan A is cheaper.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: (2x − 1)/3 + (x + 2)/4 ≥ 1",
      options: ["x ≥ 10/11", "x ≤ 10/11", "x ≥ 11/10", "x ≤ 11/10"],
      answer: "0",
      explanation:
        "LCM 12. Multiply every term by 12: 4(2x − 1) + 3(x + 2) ≥ 12. Expand: 8x − 4 + 3x + 6 ≥ 12 → 11x + 2 ≥ 12 → 11x ≥ 10 → x ≥ 10/11.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "hard",
      stem: "A worker's salary of Birr 8000 is increased by at most 15%. What is the maximum new salary?",
      options: ["Birr 9200", "Birr 8500", "Birr 9500", "Birr 12000"],
      answer: "0",
      explanation:
        "Increase ≤ 15% × 8000 = 1200. New ≤ 8000 + 1200 = 9200.",
    },

    // ---------- SHORT ANSWER (Q96–Q100) ----------
    {
      id: "q96",
      type: "short",
      difficulty: "easy",
      stem: "Simplify: 2x + 5 > 11",
      answer: "x > 3",
      explanation:
        "Subtract 5: 2x > 6. Divide by 2 (positive): x > 3.",
    },
    {
      id: "q97",
      type: "short",
      difficulty: "medium",
      stem: "Simplify: −3x + 1 < 10",
      answer: "x > −3",
      explanation:
        "Subtract 1: −3x < 9. Divide by −3 (negative → REVERSE): x > −3.",
    },
    {
      id: "q98",
      type: "short",
      difficulty: "medium",
      stem: "Translate: 'Three times a number decreased by four is at most twenty.'",
      answer: "3x − 4 ≤ 20",
      explanation:
        "'Three times a number' = 3x. 'Decreased by four' = 3x − 4. 'Is at most' = ≤. So 3x − 4 ≤ 20.",
    },
    {
      id: "q99",
      type: "short",
      difficulty: "hard",
      stem: "A father's age exceeded 3 times his son's age 1 year ago. Father is 40 now. Find the possible present age of the son.",
      answer: "S < 14",
      explanation:
        "1 year ago: F − 1 > 3(S − 1). Substitute F = 40: 39 > 3S − 3 → 42 > 3S → S < 14.",
    },
    {
      id: "q100",
      type: "short",
      difficulty: "hard",
      stem: "A rectangle's perimeter is 48 m. Its length is twice its width. Find the dimensions.",
      answer: "Width = 8 m, Length = 16 m",
      explanation:
        "Let w = width, l = 2w. Perimeter: 2(l + w) = 48 → 2(2w + w) = 48 → 6w = 48 → w = 8. Length = 16 m.",
    },
        // ============================================================
    // BATCH 3 — Q101 to Q150
    // ============================================================

    // ---------- EASY MCQ (Q101–Q120) ----------
    {
      id: "q101",
      type: "mcq",
      difficulty: "easy",
      stem: "The point (0, 5) lies:",
      options: ["In quadrant I", "In quadrant II", "On the x-axis", "On the y-axis"],
      answer: "3",
      explanation:
        "x = 0 means the point is on the y-axis. It belongs to no quadrant.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "easy",
      stem: "The point (−3, 0) lies:",
      options: ["In quadrant II", "On the x-axis", "On the y-axis", "In quadrant III"],
      answer: "1",
      explanation:
        "y = 0 means the point is on the x-axis. It belongs to no quadrant.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "easy",
      stem: "In the point (2, −7), what is the abscissa?",
      options: ["2", "−7", "9", "−5"],
      answer: "0",
      explanation:
        "The abscissa is another name for the x-coordinate. So it's 2.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "easy",
      stem: "In the point (2, −7), what is the ordinate?",
      options: ["2", "−7", "9", "−5"],
      answer: "1",
      explanation:
        "The ordinate is another name for the y-coordinate. So it's −7.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 2x + 3 = 9",
      options: ["x = 2", "x = 3", "x = 6", "x = 4"],
      answer: "1",
      explanation:
        "Subtract 3: 2x = 6. Divide by 2: x = 3.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "easy",
      stem: "Solve: x − 5 = 12",
      options: ["x = 7", "x = 17", "x = 5", "x = −7"],
      answer: "1",
      explanation:
        "Add 5: x = 12 + 5 = 17.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "easy",
      stem: "Which inequality symbol means 'greater than or equal to'?",
      options: [">", "<", "≥", "≤"],
      answer: "2",
      explanation:
        "≥ means 'greater than or equal to'. Banchi, the underline means 'or equal to'.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 5 + 3 < 10 − 1",
      options: ["True", "False", "Equal", "Cannot tell"],
      answer: "0",
      explanation:
        "Left: 5 + 3 = 8. Right: 10 − 1 = 9. Since 8 < 9, the statement is true.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 4x = 20",
      options: ["x = 4", "x = 5", "x = 80", "x = 24"],
      answer: "1",
      explanation:
        "Divide by 4: x = 20/4 = 5.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "easy",
      stem: "The origin has coordinates:",
      options: ["(1, 1)", "(0, 1)", "(1, 0)", "(0, 0)"],
      answer: "3",
      explanation:
        "The origin is where the two axes cross. Its coordinates are (0, 0).",
    },
    {
      id: "q111",
      type: "mcq",
      difficulty: "easy",
      stem: "Solve: x/5 = 4",
      options: ["x = 20", "x = 9", "x = 1", "x = 25"],
      answer: "0",
      explanation:
        "Multiply both sides by 5: x = 20.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: x/2 < 6",
      options: ["x < 12", "x > 12", "x < 3", "x > 3"],
      answer: "0",
      explanation:
        "Multiply by 2: x < 12. Direction unchanged (positive).",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 3x = 0",
      options: ["x = 0", "x = 3", "x = 1/3", "No solution"],
      answer: "0",
      explanation:
        "Divide by 3: x = 0/3 = 0.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: x + 7 > 0",
      options: ["x > 7", "x < 7", "x > −7", "x < −7"],
      answer: "2",
      explanation:
        "Subtract 7: x > −7.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 2x ≤ −6",
      options: ["x ≤ −3", "x ≥ −3", "x ≤ 3", "x ≥ 3"],
      answer: "0",
      explanation:
        "Divide by 2 (positive): x ≤ −3. Direction unchanged.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: −x ≤ 4",
      options: ["x ≤ −4", "x ≥ −4", "x ≤ 4", "x ≥ 4"],
      answer: "1",
      explanation:
        "Multiply or divide by −1 (negative → REVERSE): x ≥ −4.",
    },
    {
      id: "q117",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a linear equation in one variable?",
      options: ["3x + 1 = 7", "2x + y = 5", "x² = 4", "xy = 12"],
      answer: "0",
      explanation:
        "3x + 1 = 7 has only one variable (x) and the highest power is 1. The others: (2) has two variables, (3) has x², (4) has two variables multiplied.",
    },
    {
      id: "q118",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a linear equation in TWO variables?",
      options: ["3x + 1 = 7", "2x + 3y = 5", "x² = 4", "x/2 = 8"],
      answer: "1",
      explanation:
        "2x + 3y = 5 has two variables (x and y) and each power is 1.",
    },
    {
      id: "q119",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: x + 2 = 2 + x. What is the solution?",
      options: ["x = 0", "x = 1", "All numbers", "No solution"],
      answer: "2",
      explanation:
        "Both sides are the same expression. This is always true. So any number is a solution. Banchi, watch for the special case 'always true'.",
    },
    {
      id: "q120",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: x + 5 = x + 3. What is the solution?",
      options: ["x = 0", "x = 1", "All numbers", "No solution"],
      answer: "3",
      explanation:
        "Subtract x: 5 = 3. This is FALSE. So there is no solution. Banchi, when a false statement appears, no solution.",
    },

    // ---------- MEDIUM MCQ (Q121–Q140) ----------
    {
      id: "q121",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: 5x − 3 = 2x + 9",
      options: ["x = 2", "x = 4", "x = 6", "x = 3"],
      answer: "1",
      explanation:
        "Subtract 2x: 3x − 3 = 9. Add 3: 3x = 12. Divide by 3: x = 4.",
    },
    {
      id: "q122",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: 4(x − 2) = 2x + 6",
      options: ["x = 5", "x = 7", "x = 3", "x = 6"],
      answer: "1",
      explanation:
        "Expand: 4x − 8 = 2x + 6. Subtract 2x: 2x − 8 = 6. Add 8: 2x = 14. x = 7.",
    },
    {
      id: "q123",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: (x/2) + (x/3) = 5",
      options: ["x = 6", "x = 5", "x = 10", "x = 12"],
      answer: "0",
      explanation:
        "LCM of 2 and 3 is 6. (3x + 2x)/6 = 5 → 5x/6 = 5 → 5x = 30 → x = 6.",
    },
    {
      id: "q124",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: 2(3x + 1) − 5 = 4x + 7",
      options: ["x = 5", "x = 3", "x = 10", "x = 7"],
      answer: "0",
      explanation:
        "Expand: 6x + 2 − 5 = 4x + 7 → 6x − 3 = 4x + 7. Subtract 4x: 2x − 3 = 7. Add 3: 2x = 10. x = 5.",
    },
    {
      id: "q125",
      type: "mcq",
      difficulty: "medium",
      stem: "If x = −2, does it satisfy 3x + 5 > 0?",
      options: ["Yes", "No", "Equal", "Cannot tell"],
      answer: "1",
      explanation:
        "3(−2) + 5 = −6 + 5 = −1. Since −1 > 0 is FALSE, x = −2 does NOT satisfy the inequality.",
    },
    {
      id: "q126",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 3(x − 1) ≥ 2(x + 2)",
      options: ["x ≥ 7", "x ≤ 7", "x ≥ 1", "x ≤ 1"],
      answer: "0",
      explanation:
        "Expand: 3x − 3 ≥ 2x + 4. Subtract 2x: x − 3 ≥ 4. Add 3: x ≥ 7.",
    },
    {
      id: "q127",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 2(x + 5) < 4 + 2x",
      options: ["x > 0", "x < 0", "All numbers", "No solution"],
      answer: "3",
      explanation:
        "Expand: 2x + 10 < 4 + 2x. Subtract 2x: 10 < 4. FALSE. So no solution.",
    },
    {
      id: "q128",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 5x + 3 ≤ 5x + 7",
      options: ["x = 0", "All numbers", "No solution", "x ≤ 4"],
      answer: "1",
      explanation:
        "Subtract 5x: 3 ≤ 7. Always TRUE. So any number works.",
    },
    {
      id: "q129",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve for y: 4x − 2y = 10",
      options: ["y = 2x − 5", "y = 2x + 5", "y = 5 − 2x", "y = 10 − 4x"],
      answer: "0",
      explanation:
        "−2y = 10 − 4x. Multiply by −1: 2y = 4x − 10. Divide by 2: y = 2x − 5.",
    },
    {
      id: "q130",
      type: "mcq",
      difficulty: "medium",
      stem: "The line 3y − 2x = 1 intersects the y-axis at which point?",
      options: ["(0, 1/3)", "(0, 1)", "(1/3, 0)", "(0, −1/3)"],
      answer: "0",
      explanation:
        "Set x = 0: 3y = 1 → y = 1/3. So the point is (0, 1/3). Banchi, y-intercept always has x = 0.",
    },
    {
      id: "q131",
      type: "mcq",
      difficulty: "medium",
      stem: "The line 3y − 2x = 1 intersects the x-axis at which point?",
      options: ["(0, 1/3)", "(−1/2, 0)", "(1/2, 0)", "(1, 0)"],
      answer: "1",
      explanation:
        "Set y = 0: −2x = 1 → x = −1/2. So the point is (−1/2, 0). Banchi, x-intercept always has y = 0.",
    },
    {
      id: "q132",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: |x| = 5",
      options: ["x = 5", "x = −5", "x = 5 or x = −5", "No solution"],
      answer: "2",
      explanation:
        "|x| = 5 means the number is 5 units from 0. Both 5 and −5 qualify. Two solutions.",
    },
    {
      id: "q133",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: |x + 2| = 7",
      options: ["x = 5 or x = −9", "x = 5 only", "x = −9 only", "No solution"],
      answer: "0",
      explanation:
        "Two cases. Case 1: x + 2 = 7 → x = 5. Case 2: x + 2 = −7 → x = −9.",
    },
    {
      id: "q134",
      type: "mcq",
      difficulty: "medium",
      stem: "If 2x + 5 = 13, what is the value of 4x + 10?",
      options: ["16", "26", "20", "36"],
      answer: "1",
      explanation:
        "From 2x + 5 = 13, we get x = 4. Then 4x + 10 = 16 + 10 = 26. Or shortcut: 4x + 10 = 2(2x + 5) = 2 × 13 = 26.",
    },
    {
      id: "q135",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: 0.5x + 0.5 = 0.2x + 2",
      options: ["x = 5", "x = 2", "x = 4", "x = 3"],
      answer: "0",
      explanation:
        "Subtract 0.2x: 0.3x + 0.5 = 2. Subtract 0.5: 0.3x = 1.5. Divide by 0.3: x = 5.",
    },
    {
      id: "q136",
      type: "mcq",
      difficulty: "medium",
      stem: "A shirt costs Birr 480. If the price drops by 25%, what is the new price?",
      options: ["Birr 360", "Birr 455", "Birr 420", "Birr 400"],
      answer: "0",
      explanation:
        "Discount = 25% × 480 = 120. New price = 480 − 120 = 360.",
    },
    {
      id: "q137",
      type: "mcq",
      difficulty: "medium",
      stem: "A rectangle's length is 4 more than twice its width. Perimeter is 32 m. Find the width.",
      options: ["4 m", "5 m", "6 m", "8 m"],
      answer: "0",
      explanation:
        "Let w = width, l = 2w + 4. Perimeter: 2(l + w) = 32 → 2(2w + 4 + w) = 32 → 2(3w + 4) = 32 → 3w + 4 = 16 → 3w = 12 → w = 4.",
    },
    {
      id: "q138",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: (2x + 1)/3 = 5",
      options: ["x = 7", "x = 8", "x = 3", "x = 5"],
      answer: "0",
      explanation:
        "Multiply by 3: 2x + 1 = 15. Subtract 1: 2x = 14. x = 7.",
    },
    {
      id: "q139",
      type: "mcq",
      difficulty: "medium",
      stem: "If the point (a, 3) lies on 12x − 2y = 0, find a.",
      options: ["a = 1/2", "a = 2", "a = 3", "a = 6"],
      answer: "0",
      explanation:
        "Substitute y = 3: 12a − 6 = 0 → 12a = 6 → a = 1/2.",
    },
    {
      id: "q140",
      type: "mcq",
      difficulty: "medium",
      stem: "Which pair of inequalities is equivalent?",
      options: [
        "x + 1 > 5 and x > 4",
        "2x > 6 and x < 3",
        "x + 2 ≤ 7 and x ≥ 5",
        "3x < 9 and x > 3",
      ],
      answer: "0",
      explanation:
        "A: x + 1 > 5 → x > 4 ✓. B: 2x > 6 → x > 3, not x < 3. C: x + 2 ≤ 7 → x ≤ 5, not x ≥ 5. D: 3x < 9 → x < 3, not x > 3. Only A is equivalent.",
    },

    // ---------- HARD MCQ (Q141–Q145) ----------
    {
      id: "q141",
      type: "mcq",
      difficulty: "hard",
      stem: "Solve: (3x − 1) − 4(2x + 1) = 4(4x − 3)",
      options: ["x = 7/21 = 1/3", "x = 1/3", "x = 7", "No solution"],
      answer: "1",
      explanation:
        "Left: 3x − 1 − 8x − 4 = −5x − 5. Right: 16x − 12. So −5x − 5 = 16x − 12. Add 5x: −5 = 21x − 12. Add 12: 7 = 21x. x = 7/21 = 1/3.",
    },
    {
      id: "q142",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: (x/2) − (x/3) + (x/4) < 1",
      options: ["x < 12/5", "x > 12/5", "x < 5/12", "x > 5/12"],
      answer: "0",
      explanation:
        "LCM of 2, 3, 4 is 12. Multiply every term by 12: 6x − 4x + 3x < 12 → 5x < 12 → x < 12/5.",
    },
    {
      id: "q143",
      type: "mcq",
      difficulty: "hard",
      stem: "A man is 5 times as old as his son. In 8 years, he will be 3 times as old. Find the son's age now.",
      options: ["8", "10", "12", "16"],
      answer: "0",
      explanation:
        "Let son = s, man = 5s. In 8 years: 5s + 8 = 3(s + 8) → 5s + 8 = 3s + 24 → 2s = 16 → s = 8.",
    },
    {
      id: "q144",
      type: "mcq",
      difficulty: "hard",
      stem: "Solve for x: a(x + b) = c, where a ≠ 0.",
      options: ["x = (c − ab)/a", "x = (c + ab)/a", "x = c/a − b", "Both A and C are the same"],
      answer: "3",
      explanation:
        "ax + ab = c → ax = c − ab → x = (c − ab)/a. Note: (c − ab)/a = c/a − b. So A and C are the same.",
    },
    {
      id: "q145",
      type: "mcq",
      difficulty: "hard",
      stem: "A square's perimeter is at most 40 cm. What is the maximum side length?",
      options: ["10 cm", "5 cm", "20 cm", "15 cm"],
      answer: "0",
      explanation:
        "Perimeter = 4s ≤ 40 → s ≤ 10. So maximum side = 10 cm.",
    },

    // ---------- SHORT ANSWER (Q146–Q150) ----------
    {
      id: "q146",
      type: "short",
      difficulty: "easy",
      stem: "Solve: 3x − 5 = 10",
      answer: "x = 5",
      explanation:
        "Add 5: 3x = 15. Divide by 3: x = 5.",
    },
    {
      id: "q147",
      type: "short",
      difficulty: "medium",
      stem: "Solve: 2(x − 3) + 4 = 3x − 5",
      answer: "x = 3",
      explanation:
        "Expand: 2x − 6 + 4 = 3x − 5 → 2x − 2 = 3x − 5. Subtract 2x: −2 = x − 5. Add 5: x = 3.",
    },
    {
      id: "q148",
      type: "short",
      difficulty: "medium",
      stem: "Translate to math: 'The ratio of a number to seven is less than ten.'",
      answer: "x/7 < 10",
      explanation:
        "'Ratio of a number to seven' = x/7. 'Is less than ten' = < 10. So x/7 < 10.",
    },
    {
      id: "q149",
      type: "short",
      difficulty: "hard",
      stem: "A rectangle's length is 5 cm more than twice its width. Perimeter = 34 cm. Find both dimensions.",
      answer: "Width = 4 cm, Length = 13 cm",
      explanation:
        "Let w = width, l = 2w + 5. Perimeter: 2(l + w) = 34 → 2(2w + 5 + w) = 34 → 3w + 5 = 17 → 3w = 12 → w = 4. Length = 2(4) + 5 = 13 cm.",
    },
    {
      id: "q150",
      type: "short",
      difficulty: "hard",
      stem: "Five times a natural number, decreased by two times the number, is less than 12. Find the possible values.",
      answer: "1, 2, 3",
      explanation:
        "Let x = the number. 5x − 2x < 12 → 3x < 12 → x < 4. Natural numbers less than 4: 1, 2, 3.",
    },
        // ============================================================
    // BATCH 4 — Q151 to Q200 (final for Chapter 3)
    // ============================================================

    // ---------- EASY MCQ (Q151–Q170) ----------
    {
      id: "q151",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 8x = 32",
      options: ["x = 3", "x = 4", "x = 8", "x = 24"],
      answer: "1",
      explanation:
        "Divide by 8: x = 32/8 = 4.",
    },
    {
      id: "q152",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: x − 9 = −3",
      options: ["x = 6", "x = −6", "x = 12", "x = −12"],
      answer: "0",
      explanation:
        "Add 9: x = −3 + 9 = 6.",
    },
    {
      id: "q153",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 2x + 7 = 15",
      options: ["x = 4", "x = 8", "x = 11", "x = 3"],
      answer: "0",
      explanation:
        "Subtract 7: 2x = 8. Divide by 2: x = 4.",
    },
    {
      id: "q154",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: x/3 = 6",
      options: ["x = 2", "x = 9", "x = 18", "x = 3"],
      answer: "2",
      explanation:
        "Multiply by 3: x = 18.",
    },
    {
      id: "q155",
      type: "mcq",
      difficulty: "easy",
      stem: "Solve: 5 + x = 11",
      options: ["x = 6", "x = 16", "x = 5", "x = −6"],
      answer: "0",
      explanation:
        "Subtract 5: x = 6.",
    },
    {
      id: "q156",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 2x − 3 < 7",
      options: ["x < 5", "x > 5", "x < 2", "x > 2"],
      answer: "0",
      explanation:
        "Add 3: 2x < 10. Divide by 2: x < 5.",
    },
    {
      id: "q157",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 4x > 20",
      options: ["x > 5", "x < 5", "x > 16", "x < 16"],
      answer: "0",
      explanation:
        "Divide by 4 (positive): x > 5.",
    },
    {
      id: "q158",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: −5x > 20",
      options: ["x > −4", "x < −4", "x > 4", "x < 4"],
      answer: "1",
      explanation:
        "Divide by −5 (negative → REVERSE): x < −4.",
    },
    {
      id: "q159",
      type: "mcq",
      difficulty: "easy",
      stem: "Solve: x/4 + 1 = 3",
      options: ["x = 8", "x = 4", "x = 12", "x = 16"],
      answer: "0",
      explanation:
        "Subtract 1: x/4 = 2. Multiply by 4: x = 8.",
    },
    {
      id: "q160",
      type: "mcq",
      difficulty: "easy",
      stem: "The point (7, 3) is in which quadrant?",
      options: ["I", "II", "III", "IV"],
      answer: "0",
      explanation:
        "Both positive → quadrant I.",
    },
    {
      id: "q161",
      type: "mcq",
      difficulty: "easy",
      stem: "The point (−7, 3) is in which quadrant?",
      options: ["I", "II", "III", "IV"],
      answer: "1",
      explanation:
        "(−, +) → quadrant II.",
    },
    {
      id: "q162",
      type: "mcq",
      difficulty: "easy",
      stem: "The point (−7, −3) is in which quadrant?",
      options: ["I", "II", "III", "IV"],
      answer: "2",
      explanation:
        "(−, −) → quadrant III.",
    },
    {
      id: "q163",
      type: "mcq",
      difficulty: "easy",
      stem: "The point (7, −3) is in which quadrant?",
      options: ["I", "II", "III", "IV"],
      answer: "3",
      explanation:
        "(+, −) → quadrant IV.",
    },
    {
      id: "q164",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 3(x + 2) = 12",
      options: ["x = 2", "x = 3", "x = 4", "x = 6"],
      answer: "0",
      explanation:
        "Divide by 3: x + 2 = 4. Subtract 2: x = 2.",
    },
    {
      id: "q165",
      type: "mcq",
      difficulty: "easy",
      stem: "Solve: 2x + 3 = 5x − 9",
      options: ["x = 4", "x = 3", "x = 6", "x = 2"],
      answer: "0",
      explanation:
        "Subtract 2x: 3 = 3x − 9. Add 9: 12 = 3x. Divide by 3: x = 4.",
    },
    {
      id: "q166",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: x/2 − x/4 = 1",
      options: ["x = 4", "x = 2", "x = 1", "x = 6"],
      answer: "0",
      explanation:
        "LCM 4. (2x − x)/4 = 1 → x/4 = 1 → x = 4.",
    },
    {
      id: "q167",
      type: "mcq",
      difficulty: "easy",
      stem: "If y = −3x, what is y when x = −2?",
      options: ["6", "−6", "5", "−5"],
      answer: "0",
      explanation:
        "y = −3(−2) = 6. Negative × negative = positive.",
    },
    {
      id: "q168",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 7x ≤ 0",
      options: ["x ≤ 0", "x ≥ 0", "x = 0", "All numbers"],
      answer: "0",
      explanation:
        "Divide by 7 (positive): x ≤ 0.",
    },
    {
      id: "q169",
      type: "mcq",
      difficulty: "easy",
      stem: "Which point lies on the line x = 4?",
      options: ["(4, 0)", "(0, 4)", "(4, 4)", "Both A and C"],
      answer: "3",
      explanation:
        "Any point with x = 4 lies on the line. So both (4, 0) and (4, 4) work.",
    },
    {
      id: "q170",
      type: "mcq",
      difficulty: "easy",
      stem: "Which point lies on the line y = −2?",
      options: ["(−2, 0)", "(0, −2)", "(−2, −2)", "Both B and C"],
      answer: "3",
      explanation:
        "Any point with y = −2 lies on the line. Both (0, −2) and (−2, −2) work.",
    },

    // ---------- MEDIUM MCQ (Q171–Q190) ----------
    {
      id: "q171",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: (x + 1)/2 + (x − 1)/4 = 3",
      options: ["x = 11/3", "x = 4", "x = 5", "x = 3"],
      answer: "0",
      explanation:
        "Step 1: LCM of 2 and 4 is 4. Step 2: Multiply every term by 4: 2(x + 1) + (x − 1) = 12. Step 3: Expand: 2x + 2 + x − 1 = 12 → 3x + 1 = 12. Step 4: Subtract 1: 3x = 11. Step 5: Divide by 3: x = 11/3. Verify: (11/3 + 1)/2 + (11/3 − 1)/4 = (14/3)/2 + (8/3)/4 = 7/3 + 2/3 = 9/3 = 3 ✓. So x = 11/3. Banchi, not all answers are whole numbers.",
    },
    {
      id: "q172",
      type: "mcq",
      difficulty: "medium",
      stem: "The sum of two numbers is 30. One is twice the other. Find both.",
      options: ["10 and 20", "12 and 18", "15 and 15", "5 and 25"],
      answer: "0",
      explanation:
        "Let the smaller = x, larger = 2x. Sum: 3x = 30 → x = 10. Numbers: 10 and 20.",
    },
    {
      id: "q173",
      type: "mcq",
      difficulty: "medium",
      stem: "A number is doubled and increased by 7. The result is 19. Find the number.",
      options: ["6", "7", "5", "8"],
      answer: "0",
      explanation:
        "2x + 7 = 19 → 2x = 12 → x = 6.",
    },
    {
      id: "q174",
      type: "mcq",
      difficulty: "medium",
      stem: "A father is 4 times as old as his son. Together they are 60. Find the son's age.",
      options: ["12", "15", "10", "20"],
      answer: "0",
      explanation:
        "Let son = s, father = 4s. Sum: 5s = 60 → s = 12. Father = 48.",
    },
    {
      id: "q175",
      type: "mcq",
      difficulty: "medium",
      stem: "Two trains start from the same station in opposite directions. One goes 60 km/h, the other 80 km/h. After how long are they 280 km apart?",
      options: ["2 hours", "3 hours", "4 hours", "1.5 hours"],
      answer: "0",
      explanation:
        "They move apart at 60 + 80 = 140 km/h. Distance = 280. Time = 280/140 = 2 hours.",
    },
    {
      id: "q176",
      type: "mcq",
      difficulty: "medium",
      stem: "A boy has Birr 100. He buys x candies at Birr 4 each and a pen for Birr 20. How many candies can he buy if he has at least Birr 10 left?",
      options: ["17", "18", "20", "22"],
      answer: "0",
      explanation:
        "Cost: 4x + 20 ≤ 100 − 10 → 4x + 20 ≤ 90 → 4x ≤ 70 → x ≤ 17.5. So x = 17 candies max.",
    },
    {
      id: "q177",
      type: "mcq",
      difficulty: "medium",
      stem: "If 3(x − 2) = 2(x + 1), find x.",
      options: ["x = 8", "x = 4", "x = 6", "x = 10"],
      answer: "0",
      explanation:
        "3x − 6 = 2x + 2. Subtract 2x: x − 6 = 2. Add 6: x = 8.",
    },
    {
      id: "q178",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (2x + 1)/5 − x/3 < 1",
      options: ["x < 12", "x > 12", "x < 5", "x > 5"],
      answer: "0",
      explanation:
        "LCM 15. Multiply by 15: 3(2x + 1) − 5x < 15 → 6x + 3 − 5x < 15 → x + 3 < 15 → x < 12.",
    },
    {
      id: "q179",
      type: "mcq",
      difficulty: "medium",
      stem: "A rectangle's length is 3 times its width. If the perimeter is 40 cm, find the length.",
      options: ["15 cm", "10 cm", "12 cm", "18 cm"],
      answer: "0",
      explanation:
        "Let w = width, l = 3w. Perimeter: 2(l + w) = 40 → 2(4w) = 40 → 8w = 40 → w = 5. Length = 15 cm.",
    },
    {
      id: "q180",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 3x − 5 > 2x + 4",
      options: ["x > 9", "x < 9", "x > 1", "x < 1"],
      answer: "0",
      explanation:
        "Subtract 2x: x − 5 > 4. Add 5: x > 9.",
    },
    {
      id: "q181",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: 4(3x − 2) = 2(6x + 4). What happens?",
      options: ["x = 0", "x = 2", "All numbers", "No solution"],
      answer: "3",
      explanation:
        "Left: 12x − 8. Right: 12x + 8. So 12x − 8 = 12x + 8 → −8 = 8, FALSE. No solution.",
    },
    {
      id: "q182",
      type: "mcq",
      difficulty: "medium",
      stem: "A number plus 10 is at least twice the number. What is the maximum value?",
      options: ["x ≤ 10", "x ≥ 10", "x ≤ −10", "x ≥ −10"],
      answer: "0",
      explanation:
        "x + 10 ≥ 2x. Subtract x: 10 ≥ x. So x ≤ 10.",
    },
    {
      id: "q183",
      type: "mcq",
      difficulty: "medium",
      stem: "A rectangular garden's length is 8 m more than its width. Its area is 240 m². Set up the equation but do not solve:",
      options: [
        "w(w + 8) = 240",
        "w + (w + 8) = 240",
        "2w + 2(w + 8) = 240",
        "w² + 8 = 240",
      ],
      answer: "0",
      explanation:
        "Area = width × length = w × (w + 8) = 240. Banchi, this leads to a quadratic, not a linear equation. But the setup is: w(w + 8) = 240.",
    },
    {
      id: "q184",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: 2(x + 3) − (x − 1) = 12",
      options: ["x = 5", "x = 7", "x = 9", "x = 11"],
      answer: "0",
      explanation:
        "Expand: 2x + 6 − x + 1 = 12 → x + 7 = 12 → x = 5.",
    },
    {
      id: "q185",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 5 − 2(x − 3) ≥ 11",
      options: ["x ≤ 0", "x ≥ 0", "x ≤ 5", "x ≥ 5"],
      answer: "0",
      explanation:
        "Expand: 5 − 2x + 6 ≥ 11 → 11 − 2x ≥ 11 → −2x ≥ 0 → x ≤ 0.",
    },
    {
      id: "q186",
      type: "mcq",
      difficulty: "medium",
      stem: "A student's average of 4 tests must be ≥ 80. First three are 75, 82, 85. What is the minimum score on the 4th?",
      options: ["78", "80", "75", "82"],
      answer: "0",
      explanation:
        "Sum ≥ 4 × 80 = 320. Current sum = 75 + 82 + 85 = 242. Minimum 4th = 320 − 242 = 78.",
    },
    {
      id: "q187",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (x + 2)/3 ≤ (x − 1)/2",
      options: ["x ≥ 7", "x ≤ 7", "x ≥ −1", "x ≤ −1"],
      answer: "0",
      explanation:
        "LCM 6. Multiply by 6: 2(x + 2) ≤ 3(x − 1) → 2x + 4 ≤ 3x − 3 → 4 + 3 ≤ 3x − 2x → 7 ≤ x. So x ≥ 7.",
    },
    {
      id: "q188",
      type: "mcq",
      difficulty: "medium",
      stem: "A phone plan: Birr 100 base + Birr 3 per GB. If bill must be under Birr 250, how many GB can be used?",
      options: ["49 GB", "50 GB", "60 GB", "40 GB"],
      answer: "0",
      explanation:
        "100 + 3g < 250 → 3g < 150 → g < 50. So max is 49 GB (since 50 gives exactly 250, which is not under).",
    },
    {
      id: "q189",
      type: "mcq",
      difficulty: "medium",
      stem: "If x + y = 12 and x = 3, what is y?",
      options: ["9", "15", "6", "3"],
      answer: "0",
      explanation:
        "3 + y = 12 → y = 9.",
    },
    {
      id: "q190",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: 3(2x + 1) − 4(x − 2) = 5(x + 3)",
      options: ["x = −4/3", "x = 4/3", "x = −4", "x = 4"],
      answer: "0",
      explanation:
        "Step 1: Expand the left side: 6x + 3 − 4x + 8 = 2x + 11. Step 2: Expand the right side: 5x + 15. Step 3: Set equal: 2x + 11 = 5x + 15. Step 4: Subtract 2x: 11 = 3x + 15. Step 5: Subtract 15: −4 = 3x. Step 6: Divide by 3: x = −4/3. Verify: left = 3(2(−4/3) + 1) − 4(−4/3 − 2) = 3(−8/3 + 1) − 4(−10/3) = 3(−5/3) + 40/3 = −5 + 40/3 = −15/3 + 40/3 = 25/3. Right = 5(−4/3 + 3) = 5(5/3) = 25/3. ✓. So x = −4/3.",
    },

    // ---------- HARD MCQ (Q191–Q195) ----------
    {
      id: "q191",
      type: "mcq",
      difficulty: "hard",
      stem: "A sum of Birr 5000 is invested at 8% simple interest per year. After how many years will the total be at least Birr 6400?",
      options: ["3.5 years", "3 years", "4 years", "2.5 years"],
      answer: "0",
      explanation:
        "Interest = 6400 − 5000 = 1400. I = PRT → 1400 = 5000 × 0.08 × T → 1400 = 400T → T = 3.5 years.",
    },
    {
      id: "q192",
      type: "mcq",
      difficulty: "hard",
      stem: "Two numbers are in ratio 3:5. Their sum is 64. Find the smaller.",
      options: ["24", "40", "20", "32"],
      answer: "0",
      explanation:
        "Let numbers be 3x and 5x. Sum: 8x = 64 → x = 8. Smaller = 3 × 8 = 24.",
    },
    {
      id: "q193",
      type: "mcq",
      difficulty: "hard",
      stem: "Solve: (2x − 5)/(x + 1) = 3 (assume x ≠ −1)",
      options: ["x = −8", "x = 8", "x = −4", "x = 4"],
      answer: "0",
      explanation:
        "Multiply both sides by (x + 1): 2x − 5 = 3(x + 1) → 2x − 5 = 3x + 3 → −8 = x. So x = −8.",
    },
    {
      id: "q194",
      type: "mcq",
      difficulty: "hard",
      stem: "A merchant bought goods for Birr 4000 and wants a profit of at least 25%. What is the minimum selling price?",
      options: ["Birr 5000", "Birr 4500", "Birr 5500", "Birr 6000"],
      answer: "0",
      explanation:
        "Profit ≥ 25% × 4000 = 1000. Selling price ≥ 4000 + 1000 = 5000.",
    },
    {
      id: "q195",
      type: "mcq",
      difficulty: "hard",
      stem: "The sum of three consecutive odd integers is 87. Find the smallest.",
      options: ["27", "29", "31", "25"],
      answer: "0",
      explanation:
        "Let n = first odd, then n + 2, n + 4. Sum: 3n + 6 = 87 → 3n = 81 → n = 27.",
    },

    // ---------- SHORT ANSWER (Q196–Q200) ----------
    {
      id: "q196",
      type: "short",
      difficulty: "easy",
      stem: "Solve: 3x + 4 = 19",
      answer: "x = 5",
      explanation:
        "Subtract 4: 3x = 15. Divide by 3: x = 5.",
    },
    {
      id: "q197",
      type: "short",
      difficulty: "medium",
      stem: "Solve: 5x − 2 > 3x + 8",
      answer: "x > 5",
      explanation:
        "Subtract 3x: 2x − 2 > 8. Add 2: 2x > 10. Divide by 2: x > 5.",
    },
    {
      id: "q198",
      type: "short",
      difficulty: "medium",
      stem: "Translate to math: 'Twice a number decreased by 5 is less than 11.'",
      answer: "2x − 5 < 11",
      explanation:
        "'Twice a number' = 2x. 'Decreased by 5' = 2x − 5. 'Is less than 11' = < 11.",
    },
    {
      id: "q199",
      type: "short",
      difficulty: "hard",
      stem: "A man is 3 times as old as his son. In 12 years, he will be twice as old. Find the son's age now.",
      answer: "12 years",
      explanation:
        "Let son = s, man = 3s. In 12 years: 3s + 12 = 2(s + 12) → 3s + 12 = 2s + 24 → s = 12.",
    },
    {
      id: "q200",
      type: "short",
      difficulty: "hard",
      stem: "The sum of two numbers is 45. The larger is 4 times the smaller. Find both.",
      answer: "9 and 36",
      explanation:
        "Let smaller = x, larger = 4x. Sum: 5x = 45 → x = 9. Numbers: 9 and 36.",
    },
     ],
};