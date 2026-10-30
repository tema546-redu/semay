import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 MATHEMATICS — CHAPTER 5
// THEOREMS ON TRIANGLES
// Source: AAEB Grade 8 Mathematics Student Textbook (pp. 129–157)
// For: Banchi (ባንቺ) — Grade 8
// Language level: A2 / A1 / B1 — clear, short, no harsh words.
// ============================================================

export const g8MathCh5: Chapter = {
  id: "ch5",
  number: 5,
  title: "Theorems on Triangles",
  titleAm: "ስለ ትሪያንግሎች ቲዎረሞች",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. The Angle Sum Theorem — 180° in Every Triangle",
      titleAm: "የማዕዘኖች ድምር ቲዎረም — በየትሪያንግሉ 180°",
      body:
        "Banchi, one of the most beautiful facts in geometry: the three interior angles of ANY triangle always add up to exactly 180°. No matter the size, no matter the shape — always 180°.",
      bodyAm:
        "ባንቺ፣ በጂኦሜትሪ ውስጥ ካሉት በጣም ውብ እውነታዎች አንዱ፡ የማንኛውም ትሪያንግል ሦስቱ የውስጥ ማዕዘኖች ሁልጊዜ በትክክል 180° ይደምራሉ። በመጠንም ይሁን በቅርጽ — ሁልጊዜ 180°።",
      children: [
        {
          id: "n1-1",
          title: "Theorem 5.1 (Angle Sum Theorem)",
          titleAm: "ቲዎረም 5.1 (የማዕዘን ድምር ቲዎረም)",
          body:
            "The sum of the degree measures of the interior angles of a triangle is 180°.\n\nm∠A + m∠B + m∠C = 180°",
          bodyAm:
            "የትሪያንግል የውስጥ ማዕዘኖች ድምር 180° ነው።\nm∠A + m∠B + m∠C = 180°",
        },
        {
          id: "n1-2",
          title: "Picture it",
          titleAm: "ሳሊው",
          body:
            "      A\n" +
            "      /\\\n" +
            "     /  \\\n" +
            "    /    \\\n" +
            "   /      \\\n" +
            "  B────────C\n\n" +
            "m∠A + m∠B + m∠C = 180°\n\n" +
            "Banchi, if you know two angles, you can always find the third by subtracting from 180°.",
          bodyAm:
            "ባንቺ፣ ሁለት ማዕዘኖችን ካወቅሽ ሦስተኛውን ሁልጊዜ ከ 180° በመቀነስ ማግኘት ትችያለሽ።",
        },
        {
          id: "n1-3",
          title: "Proof idea (short version)",
          titleAm: "የማረጋገጫ ሐሳብ (አጭር ቅርጽ)",
          body:
            "Draw a line through vertex A parallel to BC. Then:\n" +
            "• Angle 1 (at A) = angle at B (alternate interior angles)\n" +
            "• Angle 3 (at A) = angle at C (alternate interior angles)\n" +
            "• Angles 1, 2, 3 form a straight line = 180°\n" +
            "So ∠A + ∠B + ∠C = 180°.\n\n" +
            "Picture:\n" +
            "  ─────1───2───3─────  (straight line = 180°)\n" +
            "       \\   |   /\n" +
            "        \\  |  /\n" +
            "         \\ | /\n" +
            "          \\|/\n" +
            "           A\n" +
            "          / \\\n" +
            "         /   \\\n" +
            "        B─────C",
          bodyAm:
            "በ A ጫፍ በኩል ከ BC ጋር ትይዩ መስመር ሳሊ። ከዚያ ማዕዘኖቹ ቀጥተኛ መስመር ይሠራሉ = 180°።",
        },
        {
          id: "n1-4",
          title: "Example — find the missing angle",
          titleAm: "ምሳሌ — የጎደለውን ማዕዘን ፈልጊ",
          body:
            "Triangle with angles 56° and 54°. Find the third.\n" +
            "x + 56 + 54 = 180\n" +
            "x + 110 = 180\n" +
            "x = 70°",
          bodyAm:
            "ማዕዘኖች 56° እና 54° ያለው ትሪያንግል። ሦስተኛውን ፈልጊ።\nx + 56 + 54 = 180 → x = 70°",
        },
        {
          id: "n1-5",
          title: "Example — equilateral triangle",
          titleAm: "ምሳሌ — እኩል ጎን ትሪያንግል",
          body:
            "In an equilateral triangle, all three angles are equal.\n" +
            "x + x + x = 180\n" +
            "3x = 180\n" +
            "x = 60°\n\n" +
            "Banchi, memorize: every equilateral triangle has three 60° angles.",
          bodyAm:
            "በእኩል ጎን ትሪያንግል ሦስቱም ማዕዘኖች እኩል ናቸው።\n3x = 180 → x = 60°።\nባንቺ፣ አስታውሺ፡ ማንኛውም እኩል ጎን ትሪያንግል ሦስት 60° ማዕዘኖች አሉት።",
        },
        {
          id: "n1-6",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, a right triangle has ONE 90° angle. So the two acute angles add to 90°. If one is 45°, the other is 45°. If one is 37°, the other is 53°.",
          bodyAm:
            "ባንቺ፣ የቀኝ ማዕዘን ትሪያንግል አንድ 90° ማዕዘን አለው። ስለዚህ ሁለቱ አጣዳፊ ማዕዘኖች 90° ይደምራሉ። አንዱ 37° ከሆነ ሌላው 53° ነው።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. The Exterior Angle Theorem",
      titleAm: "የውጭ ማዕዘን ቲዎረም",
      body:
        "Banchi, imagine a triangle and extend one side outward. The angle between the extended side and the next side of the triangle is called an exterior angle. It has a beautiful property.",
      bodyAm:
        "ባንቺ፣ አንድ ትሪያንግል አስቢ እና አንድ ጎኑን ወደ ውጭ አስረዝሚ። በተራዘመው ጎን እና በሚቀጥለው ጎን መካከል ያለው ማዕዘን የውጭ ማዕዘን ይባላል። ውብ ባህሪ አለው።",
      children: [
        {
          id: "n2-1",
          title: "Theorem 5.2",
          titleAm: "ቲዎረም 5.2",
          body:
            "The measure of an exterior angle of a triangle equals the sum of the measures of the two remote interior angles.\n\nm∠ACD = m∠A + m∠B\n\n(The 'remote interior angles' are the two angles NOT touching the exterior angle.)",
          bodyAm:
            "የትሪያንግል የውጭ ማዕዘን መለኪያ ከሁለቱ ሩቅ የውስጥ ማዕዘኖች ድምር ጋር እኩል ነው።\nm∠ACD = m∠A + m∠B",
        },
        {
          id: "n2-2",
          title: "Picture it",
          titleAm: "ሳሊው",
          body:
            "         B\n" +
            "        /\\\n" +
            "       /  \\\n" +
            "      /    \\\n" +
            "     /      \\\n" +
            "    A────────C────D\n" +
            "\n" +
            "∠ACD is the exterior angle at C.\n" +
            "Remote interior angles: ∠A and ∠B (they are FAR from C).\n\n" +
            "m∠ACD = m∠A + m∠B",
          bodyAm:
            "∠ACD በ C ላይ ያለው የውጭ ማዕዘን ነው።\nሩቅ የውስጥ ማዕዘኖች፡ ∠A እና ∠B።\nm∠ACD = m∠A + m∠B",
        },
        {
          id: "n2-3",
          title: "Proof idea",
          titleAm: "የማረጋገጫ ሐሳብ",
          body:
            "Step 1: m∠A + m∠B + m∠ACB = 180°  (Angle Sum Theorem)\n" +
            "Step 2: m∠ACD + m∠ACB = 180°  (they form a straight line)\n" +
            "Step 3: Both equal 180°, so m∠A + m∠B + m∠ACB = m∠ACD + m∠ACB\n" +
            "Step 4: Subtract m∠ACB from both sides: m∠A + m∠B = m∠ACD ✓",
          bodyAm:
            "ደረጃ 1፡ m∠A + m∠B + m∠ACB = 180°።\nደረጃ 2፡ m∠ACD + m∠ACB = 180°።\nደረጃ 3፡ ሁለቱም 180° ስለሆኑ እኩል ናቸው።\nደረጃ 4፡ m∠ACB ን ከሁለቱም ወገን ቀንሺ፡ m∠A + m∠B = m∠ACD ✓",
        },
        {
          id: "n2-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, the exterior angle is ALWAYS equal to the sum of the TWO angles that are far away from it. Do not add the angle right next to it — that angle is on the straight line, so exterior + adjacent interior = 180°.",
          bodyAm:
            "ባንቺ፣ የውጭ ማዕዘን ሁልጊዜ ከሱ ሩቅ ካሉት ሁለት ማዕዘኖች ድምር ጋር እኩል ነው። በአጠገቡ ያለውን ማዕዘን አትጨምሪ — ውጭ + ጎረቤት የውስጥ = 180°።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Euclid's Theorem on Right Triangles",
      titleAm: "የዩክሊድ ቲዎረም በቀኝ ትሪያንግሎች ላይ",
      body:
        "Banchi, in a right triangle, the side opposite the right angle is called the hypotenuse (always the longest side). The other two sides are the legs. Euclid found a beautiful relationship when you drop an altitude from the right angle to the hypotenuse.",
      bodyAm:
        "ባንቺ፣ በቀኝ ማዕዘን ትሪያንግል ውስጥ ከቀኝ ማዕዘን ተቃራኒ ያለው ጎን ሃይፖቲኒውስ ይባላል (ሁልጊዜ ረጅሙ ጎን ነው)። ሌሎቹ ሁለቱ እግሮች ይባላሉ። ዩክሊድ ከቀኝ ማዕዘን ወደ ሃይፖቲኒውስ ከፍታ ሲወርድ ውብ ግንኙነት አገኘ።",
      children: [
        {
          id: "n3-1",
          title: "The setup",
          titleAm: "አዘጋገቡ",
          body:
            "        C\n" +
            "        /|\\\n" +
            "       / | \\\n" +
            "      /  |  \\\n" +
            "     /   |   \\\n" +
            "    A────D────B\n" +
            "\n" +
            "• Right angle at C.\n" +
            "• CD is the altitude from C to hypotenuse AB.\n" +
            "• This splits AB into two segments: AD and DB.\n" +
            "• The altitude creates THREE similar triangles: △ABC, △ACD, △CBD.",
          bodyAm:
            "• ቀኝ ማዕዘን በ C።\n• CD ከ C ወደ ሃይፖቲኒውስ AB የሚወርድ ከፍታ ነው።\n• ይህ AB ን ወደ ሁለት ክፍሎች ይከፍለዋል፡ AD እና DB።\n• ከፍታው ሦስት ተመሳሳይ ትሪያንግሎች ይፈጥራል፡ △ABC, △ACD, △CBD።",
        },
        {
          id: "n3-2",
          title: "Theorem 5.3 (Euclid's Theorem)",
          titleAm: "ቲዎረም 5.3 (የዩክሊድ ቲዎረም)",
          body:
            "In a right triangle with an altitude to the hypotenuse, the square of each leg = the hypotenuse × the adjacent segment on the hypotenuse.\n\n" +
            "(AC)² = AB × AD      (square of leg AC)\n" +
            "(BC)² = AB × BD      (square of leg BC)\n\n" +
            "Banchi, notice: each leg squares to hypotenuse × its OWN adjacent segment.",
          bodyAm:
            "በቀኝ ትሪያንግል ወደ ሃይፖቲኒውስ ከፍታ ሲወርድ፡ የእያንዳንዱ እግር ካሬ = ሃይፖቲኒውስ × በአጠገቡ ያለው ክፍል።\n(AC)² = AB × AD።\n(BC)² = AB × BD።",
        },
        {
          id: "n3-3",
          title: "Example — find the legs",
          titleAm: "ምሳሌ — እግሮቹን ፈልጊ",
          body:
            "AD = 4 cm, DB = 12 cm. Then AB = 4 + 12 = 16 cm.\n\n" +
            "AC² = AB × AD = 16 × 4 = 64 → AC = 8 cm.\n" +
            "BC² = AB × BD = 16 × 12 = 192 → BC = √192 = 8√3 cm.",
          bodyAm:
            "AD = 4 ሴሜ፣ DB = 12 ሴሜ። AB = 16 ሴሜ።\nAC² = 16 × 4 = 64 → AC = 8 ሴሜ።\nBC² = 16 × 12 = 192 → BC = 8√3 ሴሜ።",
        },
        {
          id: "n3-4",
          title: "Converse of Euclid's Theorem",
          titleAm: "የዩክሊድ ቲዎረም ተቃራኒ",
          body:
            "If BOTH of these are true for a triangle:\n" +
            "(a)² = c × c₂   and   (b)² = c × c₁\n" +
            "then the triangle IS a right triangle.\n\n" +
            "Banchi, the converse helps you CHECK whether a triangle is right-angled.",
          bodyAm:
            "ሁለቱም እውነት ከሆኑ፡ (a)² = c × c₂ እና (b)² = c × c₁፣ ትሪያንግሉ የቀኝ ማዕዘን ትሪያንግል ነው።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, the segment matched with each leg matters! AC matches the segment AD (the one on AC's side), NOT DB. Do not mix them up.",
          bodyAm:
            "ባንቺ፣ ከየእግሩ ጋር የሚመሳሰለው ክፍል ወሳኝ ነው! AC ከ AD ጋር ይመሳሰላል (ከ AC ጎን ያለው)፣ ከ DB አይደለም።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Pythagoras' Theorem",
      titleAm: "የፓይታጎረስ ቲዎረም",
      body:
        "Banchi, this is the most famous theorem in all of mathematics. In any right triangle, if the legs are a and b and the hypotenuse is c, then:",
      bodyAm:
        "ባንቺ፣ ይህ በሙሉ ሂሳብ ውስጥ በጣም ታዋቂው ቲዎረም ነው። በማንኛውም ቀኝ ትሪያንግል ውስጥ እግሮቹ a እና b ሲሆኑ ሃይፖቲኒውስ c ከሆነ፡",
      children: [
        {
          id: "n4-1",
          title: "Theorem 5.5 (Pythagoras' Theorem)",
          titleAm: "ቲዎረም 5.5 (የፓይታጎረስ ቲዎረም)",
          body:
            "In a right triangle: a² + b² = c²\n" +
            "where c is the hypotenuse, and a, b are the legs.",
          bodyAm:
            "በቀኝ ትሪያንግል ውስጥ፡ a² + b² = c²። c ሃይፖቲኒውስ ነው፣ a እና b እግሮች ናቸው።",
        },
        {
          id: "n4-2",
          title: "Picture it",
          titleAm: "ሳሊው",
          body:
            "         /|\n" +
            "        / |\n" +
            "     c /  | a\n" +
            "      /   |\n" +
            "     /____|\n" +
            "       b\n\n" +
            "a² + b² = c²\n" +
            "The square on the hypotenuse equals the sum of squares on the two legs.",
          bodyAm:
            "a² + b² = c²።\nበሃይፖቲኒውስ ላይ ያለው ካሬ በሁለቱ እግሮች ላይ ካለው ካሬ ድምር ጋር እኩል ነው።",
        },
        {
          id: "n4-3",
          title: "Common Pythagorean triples",
          titleAm: "የተለመዱ የፓይታጎረስ ሶስት ቁጥሮች",
          body:
            "Memorize these — they show up in exams again and again:\n" +
            "• 3, 4, 5\n" +
            "• 5, 12, 13\n" +
            "• 8, 15, 17\n" +
            "• 7, 24, 25\n" +
            "• 20, 21, 29\n\n" +
            "Multiply all three by a positive integer x to get more:\n" +
            "• 6, 8, 10 (= 2 × 3,4,5)\n" +
            "• 9, 12, 15 (= 3 × 3,4,5)",
          bodyAm:
            "እነዚህን አስታውሺ:\n• 3, 4, 5\n• 5, 12, 13\n• 8, 15, 17\n• 7, 24, 25\n• 20, 21, 29\n\nሁሉንም በአዎንታዊ ኢንቲጀር x አባዢ ተጨማሪ ለማግኘት።",
        },
        {
          id: "n4-4",
          title: "Examples",
          titleAm: "ምሳሌዎች",
          body:
            "Example 1: Legs 3 cm and 4 cm. Find hypotenuse.\n" +
            "c² = 3² + 4² = 9 + 16 = 25 → c = 5 cm.\n\n" +
            "Example 2: Hypotenuse 13 cm, one leg 5 cm. Find the other.\n" +
            "b² = 13² − 5² = 169 − 25 = 144 → b = 12 cm.\n\n" +
            "Example 3: Hypotenuse 10 cm, one leg 8 cm. Find the other.\n" +
            "x² = 100 − 64 = 36 → x = 6 cm.",
          bodyAm:
            "ምሳሌ 1፡ እግሮች 3 እና 4። c² = 9 + 16 = 25 → c = 5።\nምሳሌ 2፡ c = 13, a = 5። b² = 169 − 25 = 144 → b = 12።\nምሳሌ 3፡ c = 10, a = 8። x² = 100 − 64 = 36 → x = 6።",
        },
        {
          id: "n4-5",
          title: "Converse of Pythagoras",
          titleAm: "የፓይታጎረስ ተቃራኒ",
          body:
            "If a² + b² = c² for the three sides of a triangle, then the triangle is right-angled, and the right angle is opposite side c.",
          bodyAm:
            "a² + b² = c² ለሦስቱም ጎኖች እውነት ከሆነ ትሪያንግሉ የቀኝ ማዕዘን ነው፣ እና ቀኝ ማዕዘኑ ከ c ጎን ተቃራኒ ነው።",
        },
        {
          id: "n4-6",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, c is ALWAYS the hypotenuse (the longest side, opposite the right angle). Never put the hypotenuse as a leg. And always check: is your answer the longest side? If c is not the largest, you've made an error.",
          bodyAm:
            "ባንቺ፣ c ሁልጊዜ ሃይፖቲኒውስ ነው (ረጅሙ ጎን፣ ከቀኝ ማዕዘን ተቃራኒ)። ሃይፖቲኒውስን እንደ እግር አታስቀምጪ። ሁልጊዜ አረጋግጪ፡ መልስሽ ረጅሙ ጎን ነው?",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Real-Life Applications",
      titleAm: "የዕለት ተዕለት አጠቃቀሞች",
      body:
        "Banchi, Pythagoras is everywhere in real life. If you know any two sides of a right triangle, you can find the third.",
      bodyAm:
        "ባንቺ፣ ፓይታጎረስ በዕለት ተዕለት ሕይወት በሁሉም ቦታ አለ። ማንኛውንም ሁለት ጎኖች ካወቅሽ ሦስተኛውን ማግኘት ትችያለሽ።",
      children: [
        {
          id: "n5-1",
          title: "Ladder problem",
          titleAm: "የመሰላል ችግር",
          body:
            "A 15 m ladder leans against a wall. The base is 9 m from the wall. How high does the ladder reach?\n\n" +
            "The ladder is the hypotenuse (c = 15). The wall height is one leg (a). The base is the other leg (b = 9).\n" +
            "a² + 9² = 15²\n" +
            "a² + 81 = 225\n" +
            "a² = 144 → a = 12 m.",
          bodyAm:
            "የ 15 ሜትር መሰላል ግድግዳ ላይ ደግፏል። መሠረቱ ከግድግዳው 9 ሜትር ነው። ምን ያህል ከፍ ይደርሳል?\na² + 81 = 225 → a² = 144 → a = 12 ሜትር።",
        },
        {
          id: "n5-2",
          title: "Distance problem",
          titleAm: "የርቀት ችግር",
          body:
            "A man travels 24 km west, then 10 km north. How far is he from the start?\n\n" +
            "The two paths are legs. The distance from start is the hypotenuse.\n" +
            "d² = 24² + 10² = 576 + 100 = 676\n" +
            "d = √676 = 26 km.",
          bodyAm:
            "አንድ ሰው 24 ኪ.ሜ ወደ ምዕራብ፣ ከዚያ 10 ኪ.ሜ ወደ ሰሜን ተጓዘ። ከመነሻው ምን ያህል ይርቃል?\nd² = 576 + 100 = 676 → d = 26 ኪ.ሜ።",
        },
        {
          id: "n5-3",
          title: "Broken tree problem",
          titleAm: "የተሰበረ ዛፍ ችግር",
          body:
            "An 18 m tall tree breaks 3 m from the ground. The top falls to the ground. How far from the tree's base does the top land?\n\n" +
            "Height above break = 18 − 3 = 15 m (hypotenuse of the fallen part).\n" +
            "Vertical leg = 3 m. Horizontal distance = x.\n" +
            "3² + x² = 15²\n" +
            "9 + x² = 225\n" +
            "x² = 216 → x = √216 ≈ 14.7 m.",
          bodyAm:
            "የ 18 ሜትር ዛፍ ከመሬት 3 ሜትር ላይ ተሰበረ። ጫፉ ወደ መሬት ወደቀ። ምን ያህል ርቀት ላይ ይወድቃል?\n3² + x² = 15² → x² = 216 → x ≈ 14.7 ሜትር።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Exam Strategy — Chapter 5",
      titleAm: "የፈተና ስልት — ምዕራፍ 5",
      body:
        "Banchi, before answering any triangle question, check these five things.",
      bodyAm:
        "ባንቺ፣ ማንኛውንም የትሪያንግል ጥያቄ ከመመለስሽ በፊት እነዚህን አምስት ነገሮች አረጋግጪ።",
      children: [
        {
          id: "n6-1",
          title: "Check 1 — Three angles sum to 180°",
          titleAm: "ቼክ 1 — ሦስቱ ማዕዘኖች 180° ይደምራሉ",
          body:
            "If you have two angles and need a third, use 180 − (a + b).",
          bodyAm:
            "ሁለት ማዕዘኖች ካሉህ ሦስተኛውን ከፈለግሽ 180 − (a + b) ተጠቀሚ።",
        },
        {
          id: "n6-2",
          title: "Check 2 — Exterior angle",
          titleAm: "ቼክ 2 — የውጭ ማዕዘን",
          body:
            "Exterior angle = sum of two REMOTE interior angles (not the adjacent one).",
          bodyAm:
            "የውጭ ማዕዘን = የሁለቱ ሩቅ የውስጥ ማዕዘኖች ድምር (የጎረቤቱ አይደለም)።",
        },
        {
          id: "n6-3",
          title: "Check 3 — Is it a right triangle?",
          titleAm: "ቼክ 3 — የቀኝ ትሪያንግል ነው?",
          body:
            "Look for a 90° angle or the word 'right triangle'. Then use Euclid or Pythagoras.",
          bodyAm:
            "90° ማዕዘን ወይም 'right triangle' የሚለውን ቃል ፈልጊ። ከዚያ ዩክሊድ ወይም ፓይታጎረስ ተጠቀሚ።",
        },
        {
          id: "n6-4",
          title: "Check 4 — Which side is the hypotenuse?",
          titleAm: "ቼክ 4 — የትኛው ጎን ሃይፖቲኒውስ ነው?",
          body:
            "In Pythagoras, c is always the side opposite the 90° angle — always the longest side.",
          bodyAm:
            "በፓይታጎረስ ውስጥ c ሁልጊዜ ከ 90° ማዕዘን ተቃራኒ ያለው ጎን ነው — ሁልጊዜ ረጅሙ።",
        },
        {
          id: "n6-5",
          title: "Check 5 — Sanity check the answer",
          titleAm: "ቼክ 5 — መልሱን አረጋግጪ",
          body:
            "Banchi, the hypotenuse must be the longest side. If your answer has c smaller than a or b, redo it. If an angle is negative, redo it.",
          bodyAm:
            "ባንቺ፣ ሃይፖቲኒውስ ረጅሙ ጎን መሆን አለበት። መልስሽ c ከ a ወይም b ያንሳ ከሆነ እንደገና ሥሪ። ማዕዘን አሉታዊ ከሆነ እንደገና ሥሪ።",
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
      stem: "Two angles of a triangle are 40° and 60°. What is the third angle?",
      options: ["70°", "80°", "90°", "100°"],
      answer: "1",
      explanation:
        "Angle sum theorem: 40 + 60 + x = 180 → 100 + x = 180 → x = 80°.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "Two angles of a triangle are 90° and 45°. What is the third?",
      options: ["35°", "45°", "55°", "90°"],
      answer: "1",
      explanation:
        "90 + 45 + x = 180 → 135 + x = 180 → x = 45°.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "In an equilateral triangle, each angle is:",
      options: ["30°", "45°", "60°", "90°"],
      answer: "2",
      explanation:
        "3x = 180 → x = 60°. Banchi, memorize this — it appears often.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "The three interior angles of a triangle always sum to:",
      options: ["90°", "180°", "270°", "360°"],
      answer: "1",
      explanation:
        "Angle Sum Theorem: sum of interior angles of any triangle = 180°.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "Two angles of a triangle are 35° and 55°. The third angle is:",
      options: ["80°", "90°", "100°", "70°"],
      answer: "1",
      explanation:
        "35 + 55 + x = 180 → 90 + x = 180 → x = 90°. Banchi, this makes it a right triangle.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "Two angles of a triangle are 72° and 68°. Find the third.",
      options: ["30°", "40°", "50°", "60°"],
      answer: "1",
      explanation:
        "72 + 68 + x = 180 → 140 + x = 180 → x = 40°.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "The exterior angle of a triangle equals:",
      options: ["Sum of adjacent angle", "Sum of the two remote interior angles", "Difference of two angles", "180°"],
      answer: "1",
      explanation:
        "Exterior angle = sum of the two REMOTE interior angles. Banchi, this is the key formula for Chapter 5.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "Two remote interior angles are 50° and 70°. Find the exterior angle.",
      options: ["20°", "60°", "120°", "130°"],
      answer: "2",
      explanation:
        "Exterior angle = 50 + 70 = 120°.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "If a right triangle has one acute angle 40°, the other acute angle is:",
      options: ["40°", "50°", "60°", "90°"],
      answer: "1",
      explanation:
        "In a right triangle: 40 + 90 + x = 180 → x = 50°.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "In a right triangle, hypotenuse is the side:",
      options: ["Shortest", "Opposite the right angle", "Adjacent to right angle", "Equal to a leg"],
      answer: "1",
      explanation:
        "The hypotenuse is always opposite the right angle and is the longest side.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "Pythagoras' Theorem states:",
      options: ["a + b = c", "a² + b² = c²", "a² − b² = c²", "ab = c"],
      answer: "1",
      explanation:
        "For a right triangle: sum of squares of legs equals square of hypotenuse. a² + b² = c².",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "Legs of a right triangle are 3 cm and 4 cm. Find the hypotenuse.",
      options: ["5 cm", "6 cm", "7 cm", "12 cm"],
      answer: "0",
      explanation:
        "c² = 3² + 4² = 9 + 16 = 25 → c = 5 cm. Banchi, memorize 3-4-5.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "Legs are 5 cm and 12 cm. Hypotenuse is:",
      options: ["13 cm", "14 cm", "15 cm", "17 cm"],
      answer: "0",
      explanation:
        "c² = 25 + 144 = 169 → c = 13 cm. Classic 5-12-13 triple.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "Legs are 6 cm and 8 cm. Hypotenuse is:",
      options: ["10 cm", "12 cm", "14 cm", "16 cm"],
      answer: "0",
      explanation:
        "c² = 36 + 64 = 100 → c = 10 cm. This is 2 × (3-4-5).",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "Legs are 8 cm and 15 cm. Hypotenuse is:",
      options: ["16 cm", "17 cm", "18 cm", "23 cm"],
      answer: "1",
      explanation:
        "c² = 64 + 225 = 289 → c = 17 cm. Classic 8-15-17 triple.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "Hypotenuse 13, one leg 12. Find the other leg.",
      options: ["5", "6", "7", "8"],
      answer: "0",
      explanation:
        "b² = 13² − 12² = 169 − 144 = 25 → b = 5. The 5-12-13 triple again.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "Hypotenuse 10, one leg 6. Find the other leg.",
      options: ["7", "8", "9", "4"],
      answer: "1",
      explanation:
        "b² = 100 − 36 = 64 → b = 8 cm.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "In Euclid's theorem, (AC)² equals:",
      options: ["AB × BC", "AB × AD", "AB + AD", "AD × BD"],
      answer: "1",
      explanation:
        "(AC)² = hypotenuse × adjacent segment. If the hypotenuse is AB and the segment near A is AD, then (AC)² = AB × AD.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "A triangle with angles 30°, 60°, 90° is:",
      options: ["Equilateral", "Isosceles", "Right-angled", "Obtuse"],
      answer: "2",
      explanation:
        "It has a 90° angle, so it's a right triangle. All three angles are different, so it's not equilateral or isosceles.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "Two angles of a triangle are 25° and 100°. Find the third angle.",
      options: ["45°", "55°", "65°", "75°"],
      answer: "1",
      explanation:
        "25 + 100 + x = 180 → 125 + x = 180 → x = 55°.",
    },

    // ---------- MEDIUM MCQ (Q21–Q40) ----------
    {
      id: "q21",
      type: "mcq",
      difficulty: "medium",
      stem: "Angles of a triangle are 3x, 4x, 5x. Find x.",
      options: ["10", "15", "20", "25"],
      answer: "1",
      explanation:
        "3x + 4x + 5x = 180 → 12x = 180 → x = 15.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "medium",
      stem: "Angles of a triangle are 3x, 4x, 5x. Find the largest angle.",
      options: ["45°", "60°", "75°", "90°"],
      answer: "2",
      explanation:
        "x = 15, largest = 5 × 15 = 75°.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "medium",
      stem: "In a right triangle, one acute angle is 6 more than twice the other. Find the smaller acute angle.",
      options: ["28°", "30°", "32°", "34°"],
      answer: "0",
      explanation:
        "Let smaller = x. Then larger = 2x + 6. x + (2x + 6) = 90 → 3x = 84 → x = 28°. The other acute angle is 62°.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "medium",
      stem: "Exterior angle is 120°. Remote interior angles are (4x + 40)° and 60°. Find x.",
      options: ["5", "10", "15", "20"],
      answer: "0",
      explanation:
        "(4x + 40) + 60 = 120 → 4x + 100 = 120 → 4x = 20 → x = 5.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "medium",
      stem: "In a triangle, interior angle at C = 80°, interior angle at B = 60°. Exterior angle at A is:",
      options: ["100°", "120°", "140°", "160°"],
      answer: "2",
      explanation:
        "Sum of interior = 180. So angle at A = 180 − 80 − 60 = 40°. Wait — check question: exterior at A means the angle formed by extending a side through A. Actually re-read: exterior angle = sum of remote interiors = 80 + 60 = 140°.",
    },
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Exterior angle is 140°. One remote interior is 80°. Find the other.",
      options: ["40°", "50°", "60°", "70°"],
      answer: "2",
      explanation:
        "80 + x = 140 → x = 60°.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "In right triangle ABC with right angle at C, AD = 4 cm and DB = 12 cm. Find AC.",
      options: ["6 cm", "8 cm", "10 cm", "12 cm"],
      answer: "1",
      explanation:
        "AB = 4 + 12 = 16 cm. (AC)² = AB × AD = 16 × 4 = 64 → AC = 8 cm.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Same triangle: AD = 4, DB = 12. Find BC.",
      options: ["4√3", "8√3", "6√3", "12√3"],
      answer: "1",
      explanation:
        "(BC)² = AB × BD = 16 × 12 = 192 → BC = √192 = 8√3 cm.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "A 15 m ladder leans against a wall. Base is 9 m from wall. How high does it reach?",
      options: ["10 m", "11 m", "12 m", "13 m"],
      answer: "2",
      explanation:
        "a² + 9² = 15² → a² = 225 − 81 = 144 → a = 12 m.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "A man travels 24 km west, then 10 km north. How far from start?",
      options: ["24 km", "26 km", "28 km", "34 km"],
      answer: "1",
      explanation:
        "d² = 24² + 10² = 576 + 100 = 676 → d = 26 km.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Rhombus with diagonals 6 cm and 8 cm. Side length?",
      options: ["3 cm", "4 cm", "5 cm", "7 cm"],
      answer: "2",
      explanation:
        "Diagonals bisect at right angles. Half-diagonals = 3 and 4. Side² = 9 + 16 = 25 → side = 5 cm.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "Diagonal of a square is 12 cm. Side length?",
      options: ["6 cm", "6√2 cm", "12√2 cm", "24 cm"],
      answer: "1",
      explanation:
        "Side s satisfies s² + s² = 12² → 2s² = 144 → s² = 72 → s = √72 = 6√2 cm.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "Sides 11, 60, 61. Is it a right triangle?",
      options: ["Yes", "No", "Only if scaled", "Cannot tell"],
      answer: "0",
      explanation:
        "11² + 60² = 121 + 3600 = 3721. And 61² = 3721. Equal → right triangle.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Sides 16, 48, 50. Is it a right triangle?",
      options: ["Yes", "No", "Only if scaled", "Cannot tell"],
      answer: "1",
      explanation:
        "16² + 48² = 256 + 2304 = 2560. But 50² = 2500. Not equal → NOT a right triangle.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "In △ABC, ∠A = 3x, ∠B = 2x + 10, ∠C = 4x − 10. Find x.",
      options: ["20", "18", "22", "24"],
      answer: "0",
      explanation:
        "Step 1: Use the Angle Sum Theorem: 3x + (2x + 10) + (4x − 10) = 180. Step 2: Combine like terms: 9x + 0 = 180. Step 3: Solve: x = 20. Verify: ∠A = 60°, ∠B = 50°, ∠C = 70°. Sum = 180° ✓. So x = 20.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "A tree 18 m tall breaks 3 m from the ground. How far does the top land?",
      options: ["10 m", "12 m", "15 m", "6√6 ≈ 14.7 m"],
      answer: "3",
      explanation:
        "The fallen part is 15 m (the hypotenuse). Vertical leg = 3 m.\n3² + x² = 15² → 9 + x² = 225 → x² = 216 → x = √216 = 6√6 ≈ 14.7 m.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Rectangle sides 5 cm and 12 cm. Diagonal length?",
      options: ["13 cm", "14 cm", "15 cm", "17 cm"],
      answer: "0",
      explanation:
        "d² = 5² + 12² = 25 + 144 = 169 → d = 13 cm.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Right triangle legs 9 and 12. Hypotenuse?",
      options: ["13", "14", "15", "16"],
      answer: "2",
      explanation:
        "c² = 81 + 144 = 225 → c = 15 cm. This is 3 × (3-4-5).",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "In right triangle ABC, altitude to hypotenuse divides it into 9 and 16. Find the shorter leg.",
      options: ["12", "15", "20", "25"],
      answer: "0",
      explanation:
        "AB = 9 + 16 = 25. Shorter leg² = AB × smaller segment = 25 × 9 = 225 → leg = 15. Longer leg² = 25 × 16 = 400 → leg = 20. The shorter is 15. Hmm, check: shorter leg is opposite smaller angle, not necessarily smaller segment. Both give clean: 15 and 20. The shorter leg is 15.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "In right triangle ABC with right angle at C, AC = 6, BC = 8. Find the hypotenuse AB.",
      options: ["10", "12", "14", "16"],
      answer: "0",
      explanation:
        "c² = 6² + 8² = 36 + 64 = 100 → c = 10 cm.",
    },

    // ---------- HARD MCQ (Q41–Q45) ----------
    {
      id: "q41",
      type: "mcq",
      difficulty: "hard",
      stem: "In a right triangle ABC with altitude CD to hypotenuse AB, AD = 3.2 cm, DB = 1.8 cm, AC = 4 cm, BC = 3 cm. Is ABC a right triangle?",
      options: ["Yes, by converse of Euclid", "No", "Only if scaled", "Cannot tell"],
      answer: "0",
      explanation:
        "Check: (AC)² ? AB × AD. AB = 3.2 + 1.8 = 5 cm. AC² = 16. AB × AD = 5 × 3.2 = 16 ✓. (BC)² ? AB × BD. BC² = 9. AB × BD = 5 × 1.8 = 9 ✓. Both match → YES, right triangle.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "hard",
      stem: "A rectangular box has length 8 cm, width 6 cm, height 10 cm. Find the diagonal (space diagonal).",
      options: ["10√2 ≈ 14.14 cm", "12 cm", "20 cm", "√200 = 10√2 cm"],
      answer: "3",
      explanation:
        "Space diagonal d² = 8² + 6² + 10² = 64 + 36 + 100 = 200 → d = √200 = 10√2 cm. Both A and D represent the same value; pick D as fully simplified.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "hard",
      stem: "In an isosceles right triangle, the hypotenuse is 10√2 cm. Find each leg.",
      options: ["5 cm", "10 cm", "10√2 cm", "20 cm"],
      answer: "1",
      explanation:
        "For isosceles right triangle, hypotenuse = leg × √2. So leg = 10√2 / √2 = 10 cm.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "hard",
      stem: "Altitudes of an equilateral triangle with side 4 cm. Find the altitude.",
      options: ["2 cm", "2√3 cm", "4√3 cm", "4 cm"],
      answer: "1",
      explanation:
        "Altitude splits the triangle into two 30-60-90 triangles with base 2. h² + 2² = 4² → h² = 16 − 4 = 12 → h = 2√3 cm.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "hard",
      stem: "Equilateral triangle side 8 cm. Find the altitude.",
      options: ["4 cm", "4√3 cm", "8√3 cm", "16 cm"],
      answer: "1",
      explanation:
        "h² + 4² = 8² → h² = 64 − 16 = 48 → h = √48 = 4√3 cm.",
    },

    // ---------- SHORT ANSWER (Q46–Q50) ----------
    {
      id: "q46",
      type: "short",
      difficulty: "easy",
      stem: "State the Angle Sum Theorem of a triangle.",
      answer:
        "The sum of the three interior angles of a triangle is 180°.",
      explanation:
        "For any triangle ABC: m∠A + m∠B + m∠C = 180°.",
    },
    {
      id: "q47",
      type: "short",
      difficulty: "medium",
      stem: "Two remote interior angles of a triangle are 55° and 65°. Find the exterior angle.",
      answer: "120°",
      explanation:
        "Exterior angle = 55 + 65 = 120°.",
    },
    {
      id: "q48",
      type: "short",
      difficulty: "medium",
      stem: "In right triangle ABC, AD = 4 cm, DB = 8 cm. Find AC.",
      answer: "4√3 cm",
      explanation:
        "AB = 12. AC² = AB × AD = 12 × 4 = 48 → AC = √48 = 4√3 cm.",
    },
    {
      id: "q49",
      type: "short",
      difficulty: "hard",
      stem: "A rectangle has sides 5 cm and 12 cm. Find the diagonal length.",
      answer: "13 cm",
      explanation:
        "d² = 5² + 12² = 25 + 144 = 169 → d = 13 cm.",
    },
    {
      id: "q50",
      type: "short",
      difficulty: "hard",
      stem: "In a right triangle, the hypotenuse is 17 cm and one leg is 8 cm. Find the other leg.",
      answer: "15 cm",
      explanation:
        "b² = 17² − 8² = 289 − 64 = 225 → b = 15 cm. Classic 8-15-17 triple.",
    },
        // ============================================================
    // BATCH 2 — Q51 to Q100
    // ============================================================

    // ---------- EASY MCQ (Q51–Q70) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "easy",
      stem: "Two angles of a triangle are 30° and 100°. Find the third.",
      options: ["40°", "50°", "60°", "70°"],
      answer: "1",
      explanation:
        "30 + 100 + x = 180 → 130 + x = 180 → x = 50°.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "easy",
      stem: "An equilateral triangle has each angle:",
      options: ["30°", "45°", "60°", "90°"],
      answer: "2",
      explanation:
        "Equilateral → all angles equal → each = 180/3 = 60°.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "easy",
      stem: "Two equal angles of an isosceles triangle are 45° each. Find the third angle.",
      options: ["45°", "60°", "90°", "100°"],
      answer: "2",
      explanation:
        "45 + 45 + x = 180 → 90 + x = 180 → x = 90°.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "easy",
      stem: "The vertex angle of an isosceles triangle is 40°. Find each base angle.",
      options: ["40°", "50°", "60°", "70°"],
      answer: "3",
      explanation:
        "Two base angles are equal. 40 + 2b = 180 → 2b = 140 → b = 70°.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "easy",
      stem: "One exterior angle of a triangle is 130°. The two remote interior angles are:",
      options: ["Sum to 130°", "Sum to 50°", "Sum to 180°", "Sum to 260°"],
      answer: "0",
      explanation:
        "Exterior angle = sum of the two remote interior angles. So they sum to 130°.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "easy",
      stem: "In a right triangle, one acute angle is 25°. Find the other acute angle.",
      options: ["55°", "65°", "75°", "85°"],
      answer: "1",
      explanation:
        "25 + 90 + x = 180 → x = 65°.",
    },
    {
      id: "q57",
      type: "mcq",
      difficulty: "easy",
      stem: "In a 30-60-90 triangle, which angle is the largest?",
      options: ["30°", "60°", "90°", "None"],
      answer: "2",
      explanation:
        "The right angle 90° is the largest.",
    },
    {
      id: "q58",
      type: "mcq",
      difficulty: "easy",
      stem: "Right triangle legs 7 cm and 24 cm. Hypotenuse?",
      options: ["23 cm", "24 cm", "25 cm", "31 cm"],
      answer: "2",
      explanation:
        "c² = 49 + 576 = 625 → c = 25 cm. Classic 7-24-25 triple.",
    },
    {
      id: "q59",
      type: "mcq",
      difficulty: "easy",
      stem: "Right triangle legs 20 cm and 21 cm. Hypotenuse?",
      options: ["25 cm", "27 cm", "29 cm", "31 cm"],
      answer: "2",
      explanation:
        "c² = 400 + 441 = 841 → c = 29 cm. Classic 20-21-29 triple.",
    },
    {
      id: "q60",
      type: "mcq",
      difficulty: "easy",
      stem: "In Pythagoras' theorem, the longest side is:",
      options: ["a", "b", "c (hypotenuse)", "Any side"],
      answer: "2",
      explanation:
        "c is the hypotenuse, always opposite the right angle, always the longest side.",
    },
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Right triangle with legs 9 cm and 12 cm. Hypotenuse?",
      options: ["13 cm", "15 cm", "17 cm", "21 cm"],
      answer: "1",
      explanation:
        "c² = 81 + 144 = 225 → c = 15 cm.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Hypotenuse 25 cm, one leg 24 cm. Find the other leg.",
      options: ["5 cm", "6 cm", "7 cm", "8 cm"],
      answer: "2",
      explanation:
        "b² = 625 − 576 = 49 → b = 7 cm.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "In Euclid's Theorem, (BC)² equals:",
      options: ["AB × AD", "AB × BD", "AD × BD", "AB + BD"],
      answer: "1",
      explanation:
        "(BC)² = hypotenuse × the segment adjacent to the BC leg = AB × BD (B-side segment).",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "If a triangle has a 90° angle, we call it:",
      options: ["Acute", "Obtuse", "Right", "Scalene"],
      answer: "2",
      explanation:
        "A 90° angle makes it a right triangle.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "A triangle has angles 45°, 45°, 90°. It is:",
      options: ["Equilateral", "Isosceles right", "Scalene", "Obtuse"],
      answer: "1",
      explanation:
        "Two equal angles → isosceles. Plus a right angle. So isosceles right triangle.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Which set of numbers is a Pythagorean triple?",
      options: ["1, 2, 3", "3, 4, 5", "2, 3, 4", "4, 5, 6"],
      answer: "1",
      explanation:
        "3² + 4² = 9 + 16 = 25 = 5². Correct triple. Check others: 1+4≠9. 4+9≠16. 16+25≠36.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a Pythagorean triple?",
      options: ["5, 12, 13", "8, 15, 17", "6, 8, 10", "2, 3, 4"],
      answer: "3",
      explanation:
        "2² + 3² = 4 + 9 = 13, but 4² = 16. Not equal → NOT a triple.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "Two angles of a triangle are 60° and 60°. The third is:",
      options: ["30°", "45°", "60°", "90°"],
      answer: "2",
      explanation:
        "60 + 60 + x = 180 → x = 60°. This is an equilateral triangle.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "A rectangle 3 cm × 4 cm has diagonal length:",
      options: ["5 cm", "6 cm", "7 cm", "12 cm"],
      answer: "0",
      explanation:
        "d² = 3² + 4² = 25 → d = 5 cm.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "The measure of the exterior angle of a triangle is:",
      options: ["Equal to the adjacent interior angle", "Sum of two remote interiors", "Difference of two interiors", "Half of the largest angle"],
      answer: "1",
      explanation:
        "Exterior = sum of the two remote interior angles.",
    },

    // ---------- MEDIUM MCQ (Q71–Q90) ----------
    {
      id: "q71",
      type: "mcq",
      difficulty: "medium",
      stem: "Angles in a triangle are in the ratio 2 : 3 : 4. Find the largest angle.",
      options: ["40°", "60°", "80°", "100°"],
      answer: "2",
      explanation:
        "Let angles = 2x, 3x, 4x. Sum: 9x = 180 → x = 20. Largest = 4 × 20 = 80°.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "medium",
      stem: "Angles in a triangle are in the ratio 1 : 2 : 3. The triangle is:",
      options: ["Acute", "Obtuse", "Right", "Equilateral"],
      answer: "2",
      explanation:
        "x + 2x + 3x = 180 → 6x = 180 → x = 30. Angles: 30°, 60°, 90°. Right triangle.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "medium",
      stem: "An exterior angle of a triangle is 110°. One remote interior angle is 45°. Find the other.",
      options: ["55°", "60°", "65°", "70°"],
      answer: "2",
      explanation:
        "45 + x = 110 → x = 65°.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "medium",
      stem: "In △ABC, exterior angle at C is (5x)°. Remote interior angles are 40° and 60°. Find x.",
      options: ["15", "18", "20", "25"],
      answer: "2",
      explanation:
        "5x = 40 + 60 = 100 → x = 20.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "medium",
      stem: "The exterior angle of a triangle is (3x + 20)°. The two remote interior angles are 60° and 80°. Find x.",
      options: ["30", "35", "40", "50"],
      answer: "2",
      explanation:
        "3x + 20 = 60 + 80 = 140 → 3x = 120 → x = 40.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "medium",
      stem: "In △ABC, ∠A = 5x, ∠B = 6x, ∠C = 7x. Find the largest angle.",
      options: ["50°", "60°", "70°", "80°"],
      answer: "2",
      explanation:
        "5x + 6x + 7x = 180 → 18x = 180 → x = 10. Largest = 7 × 10 = 70°.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "medium",
      stem: "A triangle has two equal angles of 65°. Find the third angle.",
      options: ["40°", "50°", "60°", "70°"],
      answer: "1",
      explanation:
        "65 + 65 + x = 180 → 130 + x = 180 → x = 50°.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "medium",
      stem: "In right triangle ABC with altitude CD to hypotenuse AB, AD = 9 and AB = 25. Find AC.",
      options: ["9", "12", "15", "18"],
      answer: "2",
      explanation:
        "AC² = AB × AD = 25 × 9 = 225 → AC = 15 cm.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "medium",
      stem: "Same triangle: AD = 9, AB = 25. Find BC.",
      options: ["20", "16", "18", "24"],
      answer: "0",
      explanation:
        "DB = AB − AD = 25 − 9 = 16. BC² = AB × BD = 25 × 16 = 400 → BC = 20 cm.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "medium",
      stem: "A 10 m ladder leans against a wall. Base is 6 m from the wall. How high?",
      options: ["6 m", "8 m", "9 m", "10 m"],
      answer: "1",
      explanation:
        "a² + 6² = 10² → a² = 100 − 36 = 64 → a = 8 m.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "medium",
      stem: "A man walks 5 km east, then 12 km north. Distance from start?",
      options: ["10 km", "13 km", "15 km", "17 km"],
      answer: "1",
      explanation:
        "d² = 25 + 144 = 169 → d = 13 km.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "medium",
      stem: "In △ABC, ∠A = 40°, ∠B = (2y)°. The exterior angle at C = 100°. Find y.",
      options: ["20", "25", "30", "35"],
      answer: "2",
      explanation:
        "Exterior = A + B → 100 = 40 + 2y → 2y = 60 → y = 30.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "medium",
      stem: "Isosceles triangle with vertex angle 100°. Find each base angle.",
      options: ["30°", "40°", "50°", "60°"],
      answer: "1",
      explanation:
        "100 + 2b = 180 → 2b = 80 → b = 40°.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "medium",
      stem: "Two exterior angles of a triangle are 120° and 130°. Find the third exterior angle.",
      options: ["90°", "100°", "110°", "120°"],
      answer: "2",
      explanation:
        "Sum of exterior angles of any triangle = 360°. So 120 + 130 + x = 360 → x = 110°.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "medium",
      stem: "In a right triangle, one leg is 9 and the hypotenuse is 15. Find the other leg.",
      options: ["6", "10", "12", "14"],
      answer: "2",
      explanation:
        "b² = 15² − 9² = 225 − 81 = 144 → b = 12.",
    },
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "A square has side 10 cm. Diagonal length?",
      options: ["10 cm", "10√2 cm", "20 cm", "20√2 cm"],
      answer: "1",
      explanation:
        "d² = 100 + 100 = 200 → d = √200 = 10√2 cm.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "A rhombus has diagonals 12 cm and 16 cm. Find its side.",
      options: ["8 cm", "10 cm", "14 cm", "20 cm"],
      answer: "1",
      explanation:
        "Half-diagonals = 6 and 8. Side² = 36 + 64 = 100 → side = 10 cm.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Two angles of a triangle are 25° and 35°. The exterior angle formed by extending the side through the third vertex is:",
      options: ["60°", "90°", "120°", "240°"],
      answer: "0",
      explanation:
        "Third interior angle = 180 − 25 − 35 = 120°. So exterior angle = 180 − 120 = 60°. Or simpler: exterior angle = sum of the two remote interiors = 25 + 35 = 60°.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "In △ABC, ∠A = 55°, ∠B = 75°. Find the exterior angle at C.",
      options: ["50°", "110°", "120°", "130°"],
      answer: "3",
      explanation:
        "Exterior at C = A + B = 55 + 75 = 130°.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "In a right triangle, the hypotenuse is 20 cm and one leg is 16 cm. Find the other leg.",
      options: ["8", "10", "12", "14"],
      answer: "2",
      explanation:
        "b² = 400 − 256 = 144 → b = 12 cm.",
    },

    // ---------- HARD MCQ (Q91–Q95) ----------
    {
      id: "q91",
      type: "mcq",
      difficulty: "hard",
      stem: "In a right triangle, the altitude to the hypotenuse divides the hypotenuse into segments of 4 cm and 9 cm. Find the shorter leg of the triangle.",
      options: ["2√13 cm", "6 cm", "√52 cm", "Both A and C are the same value"],
      answer: "3",
      explanation:
        "Step 1: Hypotenuse = 4 + 9 = 13 cm. Step 2: Use Euclid's theorem. Shorter leg² = hypotenuse × smaller segment = 13 × 4 = 52. Step 3: Shorter leg = √52 = √(4 × 13) = 2√13 cm. Note: √52 and 2√13 are the SAME value. So both A and C are correct.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "hard",
      stem: "In right triangle ABC, ∠C = 90°, altitude CD to AB. If AC = 6, BC = 8, find AB and CD.",
      options: ["AB = 10, CD = 4.8", "AB = 14, CD = 4", "AB = 12, CD = 5", "AB = 10, CD = 6"],
      answer: "0",
      explanation:
        "AB² = 36 + 64 = 100 → AB = 10. Area of triangle = (1/2)(6)(8) = 24, but also = (1/2)(AB)(CD) = 5 × CD. So CD = 24/5 = 4.8 cm.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "hard",
      stem: "In right triangle ABC, hypotenuse AB = 20 cm, AD = 4 cm. Find AC.",
      options: ["4√5 cm", "8 cm", "4√20 cm", "16 cm"],
      answer: "0",
      explanation:
        "AC² = AB × AD = 20 × 4 = 80 → AC = √80 = 4√5 cm.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "hard",
      stem: "A rectangular field is 40 m × 30 m. A diagonal path is built. How long is the path?",
      options: ["50 m", "55 m", "60 m", "70 m"],
      answer: "0",
      explanation:
        "d² = 40² + 30² = 1600 + 900 = 2500 → d = 50 m.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "hard",
      stem: "An equilateral triangle has side 12 cm. Its altitude is:",
      options: ["6 cm", "6√3 cm", "12√3 cm", "12 cm"],
      answer: "1",
      explanation:
        "h² + 6² = 12² → h² = 144 − 36 = 108 → h = √108 = 6√3 cm.",
    },

    // ---------- SHORT ANSWER (Q96–Q100) ----------
    {
      id: "q96",
      type: "short",
      difficulty: "easy",
      stem: "Two angles of a triangle are 55° and 65°. Find the third.",
      answer: "60°",
      explanation:
        "55 + 65 + x = 180 → x = 60°.",
    },
    {
      id: "q97",
      type: "short",
      difficulty: "medium",
      stem: "State Pythagoras' theorem in your own words.",
      answer:
        "In a right triangle, the square of the hypotenuse equals the sum of squares of the two legs.",
      explanation:
        "For a right triangle with legs a, b and hypotenuse c: a² + b² = c².",
    },
    {
      id: "q98",
      type: "short",
      difficulty: "medium",
      stem: "Find the exterior angle of a triangle whose two remote interior angles are 45° and 65°.",
      answer: "110°",
      explanation:
        "Exterior angle = 45 + 65 = 110°.",
    },
    {
      id: "q99",
      type: "short",
      difficulty: "hard",
      stem: "A rectangle's diagonal is 25 cm. If one side is 7 cm, find the other side.",
      answer: "24 cm",
      explanation:
        "Other side² = 25² − 7² = 625 − 49 = 576 → other side = 24 cm.",
    },
    {
      id: "q100",
      type: "short",
      difficulty: "hard",
      stem: "In right triangle ABC, AD = 3 cm, DB = 12 cm. Find AC and BC.",
      answer: "AC = √45 = 3√5 cm, BC = √180 = 6√5 cm",
      explanation:
        "AB = 15 cm. AC² = 15 × 3 = 45 → AC = 3√5 cm. BC² = 15 × 12 = 180 → BC = 6√5 cm.",
    },
        // ============================================================
    // BATCH 3 — Q101 to Q150
    // ============================================================

    // ---------- EASY MCQ (Q101–Q120) ----------
    {
      id: "q101",
      type: "mcq",
      difficulty: "easy",
      stem: "Two angles of a triangle are 45° and 45°. Find the third.",
      options: ["45°", "90°", "100°", "180°"],
      answer: "1",
      explanation:
        "45 + 45 + x = 180 → x = 90°.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "easy",
      stem: "In a right triangle, the hypotenuse is always:",
      options: ["Shortest side", "Longest side", "Equal to a leg", "Equal to the base"],
      answer: "1",
      explanation:
        "The hypotenuse is opposite the 90° angle and always the longest side.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "easy",
      stem: "Which set is a Pythagorean triple?",
      options: ["2, 4, 6", "5, 12, 13", "1, 1, 1", "7, 8, 9"],
      answer: "1",
      explanation:
        "5² + 12² = 25 + 144 = 169 = 13². Correct triple.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "easy",
      stem: "Right triangle legs 1 cm and 1 cm. Hypotenuse?",
      options: ["1 cm", "√2 cm", "2 cm", "4 cm"],
      answer: "1",
      explanation:
        "c² = 1 + 1 = 2 → c = √2 cm. Banchi, this appears often.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "easy",
      stem: "Right triangle legs 1, √3. Find the hypotenuse.",
      options: ["1", "2", "√3", "3"],
      answer: "1",
      explanation:
        "c² = 1 + 3 = 4 → c = 2. This is the classic 30-60-90 triangle scaled to 1, √3, 2.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "easy",
      stem: "In a right triangle, the two acute angles always add to:",
      options: ["45°", "90°", "180°", "270°"],
      answer: "1",
      explanation:
        "The third angle is 90°, so the two acute angles sum to 180 − 90 = 90°.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "easy",
      stem: "A triangle has angles 20°, 30°, 130°. It is:",
      options: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "2",
      explanation:
        "One angle (130°) is greater than 90°, so it's obtuse.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "easy",
      stem: "A triangle has angles 60°, 60°, 60°. It is:",
      options: ["Acute", "Right", "Obtuse", "Equilateral"],
      answer: "3",
      explanation:
        "All three angles equal 60° → equilateral triangle. It's also acute.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "easy",
      stem: "Is a triangle with sides 7, 24, 25 a right triangle?",
      options: ["Yes", "No", "Only if scaled", "Cannot tell"],
      answer: "0",
      explanation:
        "7² + 24² = 49 + 576 = 625 = 25². Yes, right triangle.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "easy",
      stem: "Is a triangle with sides 5, 6, 7 a right triangle?",
      options: ["Yes", "No", "Only if scaled", "Cannot tell"],
      answer: "1",
      explanation:
        "5² + 6² = 25 + 36 = 61, but 7² = 49. Not equal → NOT a right triangle.",
    },
    {
      id: "q111",
      type: "mcq",
      difficulty: "easy",
      stem: "Right triangle legs 10 cm and 24 cm. Hypotenuse?",
      options: ["26 cm", "28 cm", "30 cm", "34 cm"],
      answer: "0",
      explanation:
        "c² = 100 + 576 = 676 → c = 26 cm. This is 2 × (5-12-13).",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "easy",
      stem: "The sum of ALL exterior angles of a triangle (one at each vertex) is:",
      options: ["180°", "270°", "360°", "540°"],
      answer: "2",
      explanation:
        "The sum of exterior angles of any convex polygon = 360°.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "easy",
      stem: "In an isosceles right triangle, the two acute angles are each:",
      options: ["30°", "45°", "60°", "90°"],
      answer: "1",
      explanation:
        "90 + 2b = 180 → 2b = 90 → b = 45°. Banchi, memorize this.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "easy",
      stem: "Right triangle legs are both 5 cm. Hypotenuse?",
      options: ["5 cm", "5√2 cm", "10 cm", "25 cm"],
      answer: "1",
      explanation:
        "c² = 25 + 25 = 50 → c = √50 = 5√2 cm.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "easy",
      stem: "Two angles of a triangle are 85° and 85°. Find the third.",
      options: ["5°", "10°", "15°", "20°"],
      answer: "1",
      explanation:
        "85 + 85 + x = 180 → x = 10°.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "easy",
      stem: "How many right angles can a triangle have at most?",
      options: ["0", "1", "2", "3"],
      answer: "1",
      explanation:
        "Two right angles would already sum to 180°, leaving nothing for the third angle. So a triangle can have at most ONE right angle.",
    },
    {
      id: "q117",
      type: "mcq",
      difficulty: "easy",
      stem: "A triangle with a 90° angle and a 45° angle has sides in ratio:",
      options: ["1 : 1 : 2", "1 : 1 : √2", "1 : √2 : 2", "1 : 2 : 3"],
      answer: "1",
      explanation:
        "In an isosceles right triangle (45-45-90), legs are equal and hypotenuse = leg × √2. So ratio = 1 : 1 : √2.",
    },
    {
      id: "q118",
      type: "mcq",
      difficulty: "easy",
      stem: "In a 30-60-90 triangle, the sides are in ratio:",
      options: ["1 : 1 : √2", "1 : √3 : 2", "1 : 2 : 3", "3 : 4 : 5"],
      answer: "1",
      explanation:
        "Short leg : long leg : hypotenuse = 1 : √3 : 2. Banchi, memorize this important pattern.",
    },
    {
      id: "q119",
      type: "mcq",
      difficulty: "easy",
      stem: "In a 30-60-90 triangle, if the short leg is 5 cm, the hypotenuse is:",
      options: ["5 cm", "5√3 cm", "10 cm", "25 cm"],
      answer: "2",
      explanation:
        "Hypotenuse = 2 × short leg = 2 × 5 = 10 cm.",
    },
    {
      id: "q120",
      type: "mcq",
      difficulty: "easy",
      stem: "In a 30-60-90 triangle, if the short leg is 5 cm, the long leg is:",
      options: ["5 cm", "5√3 cm", "10 cm", "25 cm"],
      answer: "1",
      explanation:
        "Long leg = short leg × √3 = 5√3 cm.",
    },

    // ---------- MEDIUM MCQ (Q121–Q140) ----------
    {
      id: "q121",
      type: "mcq",
      difficulty: "medium",
      stem: "In a 30-60-90 triangle, the hypotenuse is 12 cm. Find the shorter leg.",
      options: ["4 cm", "6 cm", "6√3 cm", "12√3 cm"],
      answer: "1",
      explanation:
        "Short leg = hypotenuse / 2 = 12 / 2 = 6 cm.",
    },
    {
      id: "q122",
      type: "mcq",
      difficulty: "medium",
      stem: "In a 30-60-90 triangle, the hypotenuse is 12 cm. Find the longer leg.",
      options: ["6 cm", "6√3 cm", "12√3 cm", "24 cm"],
      answer: "1",
      explanation:
        "Short leg = 6. Long leg = 6√3 cm.",
    },
    {
      id: "q123",
      type: "mcq",
      difficulty: "medium",
      stem: "A 45-45-90 triangle has legs 8 cm each. Hypotenuse?",
      options: ["8 cm", "8√2 cm", "16 cm", "16√2 cm"],
      answer: "1",
      explanation:
        "c = leg × √2 = 8√2 cm.",
    },
    {
      id: "q124",
      type: "mcq",
      difficulty: "medium",
      stem: "A 45-45-90 triangle has hypotenuse 10√2 cm. Find each leg.",
      options: ["5 cm", "10 cm", "10√2 cm", "20 cm"],
      answer: "1",
      explanation:
        "Leg = hypotenuse / √2 = 10√2 / √2 = 10 cm.",
    },
    {
      id: "q125",
      type: "mcq",
      difficulty: "medium",
      stem: "In a right triangle, one leg is 15 and the other is 20. Hypotenuse?",
      options: ["25", "30", "35", "40"],
      answer: "0",
      explanation:
        "c² = 225 + 400 = 625 → c = 25 cm. This is 5 × (3-4-5).",
    },
    {
      id: "q126",
      type: "mcq",
      difficulty: "medium",
      stem: "Is a triangle with sides 6, 8, 10 a right triangle?",
      options: ["Yes", "No", "Only if scaled", "Cannot tell"],
      answer: "0",
      explanation:
        "6² + 8² = 36 + 64 = 100 = 10². Yes. This is 2 × (3-4-5).",
    },
    {
      id: "q127",
      type: "mcq",
      difficulty: "medium",
      stem: "Is a triangle with sides 9, 12, 15 a right triangle?",
      options: ["Yes", "No", "Only if scaled", "Cannot tell"],
      answer: "0",
      explanation:
        "9² + 12² = 81 + 144 = 225 = 15². Yes. This is 3 × (3-4-5).",
    },
    {
      id: "q128",
      type: "mcq",
      difficulty: "medium",
      stem: "In △ABC, ∠A = x, ∠B = x + 20, ∠C = 2x. Find x.",
      options: ["30", "40", "50", "60"],
      answer: "1",
      explanation:
        "x + (x + 20) + 2x = 180 → 4x + 20 = 180 → 4x = 160 → x = 40.",
    },
    {
      id: "q129",
      type: "mcq",
      difficulty: "medium",
      stem: "In △ABC, ∠A = 2x, ∠B = 3x, ∠C = 5x. The largest angle is:",
      options: ["36°", "54°", "90°", "180°"],
      answer: "2",
      explanation:
        "2x + 3x + 5x = 180 → 10x = 180 → x = 18. Largest = 5 × 18 = 90°.",
    },
    {
      id: "q130",
      type: "mcq",
      difficulty: "medium",
      stem: "An exterior angle of a triangle is 100°. One remote interior is (x + 20)°, the other is 40°. Find x.",
      options: ["30", "40", "50", "60"],
      answer: "1",
      explanation:
        "(x + 20) + 40 = 100 → x + 60 = 100 → x = 40.",
    },
    {
      id: "q131",
      type: "mcq",
      difficulty: "medium",
      stem: "In a right triangle, the altitude to the hypotenuse is 6 cm. If one segment is 4 cm, find the other segment.",
      options: ["6", "8", "9", "12"],
      answer: "2",
      explanation:
        "Altitude² = segment1 × segment2 → 36 = 4 × s → s = 9 cm. Banchi, this is a handy formula: (altitude)² = product of the two segments.",
    },
    {
      id: "q132",
      type: "mcq",
      difficulty: "medium",
      stem: "In right triangle ABC with altitude CD, AD = 8 cm, DB = 2 cm. Find CD.",
      options: ["2 cm", "4 cm", "6 cm", "8 cm"],
      answer: "1",
      explanation:
        "CD² = AD × DB = 8 × 2 = 16 → CD = 4 cm.",
    },
    {
      id: "q133",
      type: "mcq",
      difficulty: "medium",
      stem: "In right triangle ABC with altitude CD to hypotenuse AB, AD = 4 cm and DB = 9 cm. Find AC.",
      options: ["2√13 cm", "6 cm", "4√13 cm", "13 cm"],
      answer: "0",
      explanation:
        "Step 1: Find the hypotenuse: AB = AD + DB = 4 + 9 = 13 cm. Step 2: Use Euclid's theorem for leg AC. AC² = AB × AD = 13 × 4 = 52. Step 3: AC = √52 = √(4 × 13) = 2√13 cm. So AC = 2√13 cm.",
    },
    {
      id: "q134",
      type: "mcq",
      difficulty: "medium",
      stem: "A rectangular TV screen is 32 cm by 60 cm. Diagonal is:",
      options: ["60 cm", "68 cm", "72 cm", "92 cm"],
      answer: "1",
      explanation:
        "d² = 32² + 60² = 1024 + 3600 = 4624 → d = 68 cm.",
    },
    {
      id: "q135",
      type: "mcq",
      difficulty: "medium",
      stem: "In a triangle, the exterior angle is 3 times one remote interior. The other remote is 60°. Find the first remote interior.",
      options: ["30°", "45°", "50°", "60°"],
      answer: "0",
      explanation:
        "Let first = x. Exterior = 3x. Then 3x = x + 60 → 2x = 60 → x = 30°.",
    },
    {
      id: "q136",
      type: "mcq",
      difficulty: "medium",
      stem: "Two sides of a right triangle are 5 and 12. Which could be the hypotenuse?",
      options: ["5", "12", "13", "17"],
      answer: "2",
      explanation:
        "The hypotenuse is the longest side. If legs are 5 and 12, then c² = 25 + 144 = 169 → c = 13.",
    },
    {
      id: "q137",
      type: "mcq",
      difficulty: "medium",
      stem: "A square has diagonal 6√2 cm. Side?",
      options: ["3 cm", "6 cm", "6√2 cm", "12 cm"],
      answer: "1",
      explanation:
        "Side = diagonal / √2 = 6√2 / √2 = 6 cm.",
    },
    {
      id: "q138",
      type: "mcq",
      difficulty: "medium",
      stem: "In an isosceles triangle with sides 5, 5, 6, find the altitude to the base.",
      options: ["3 cm", "4 cm", "5 cm", "√11 cm"],
      answer: "1",
      explanation:
        "The altitude splits the base into 3 and 3. So h² + 3² = 5² → h² = 25 − 9 = 16 → h = 4 cm.",
    },
    {
      id: "q139",
      type: "mcq",
      difficulty: "medium",
      stem: "In an isosceles triangle with sides 10, 10, 12, find the altitude to the base.",
      options: ["6 cm", "8 cm", "9 cm", "10 cm"],
      answer: "1",
      explanation:
        "Half-base = 6. h² + 6² = 10² → h² = 100 − 36 = 64 → h = 8 cm.",
    },
    {
      id: "q140",
      type: "mcq",
      difficulty: "medium",
      stem: "A right triangle has hypotenuse 5 and one leg 3. The other leg is:",
      options: ["1", "2", "4", "6"],
      answer: "2",
      explanation:
        "b² = 25 − 9 = 16 → b = 4.",
    },

    // ---------- HARD MCQ (Q141–Q145) ----------
    {
      id: "q141",
      type: "mcq",
      difficulty: "hard",
      stem: "In right triangle ABC, altitude CD to hypotenuse AB. If AD = 9 and BD = 16, find the altitude CD.",
      options: ["6", "10", "12", "14"],
      answer: "2",
      explanation:
        "CD² = AD × BD = 9 × 16 = 144 → CD = 12 cm. Banchi, this is the geometric mean theorem: altitude = √(AD × DB).",
    },
    {
      id: "q142",
      type: "mcq",
      difficulty: "hard",
      stem: "The sides of a triangle are 8 cm, 15 cm, 17 cm. Is it right-angled?",
      options: ["Yes", "No", "Only if scaled", "Cannot tell"],
      answer: "0",
      explanation:
        "8² + 15² = 64 + 225 = 289 = 17². Yes, right-angled.",
    },
    {
      id: "q143",
      type: "mcq",
      difficulty: "hard",
      stem: "A triangle has sides 10 cm, 24 cm, and 26 cm. Its area?",
      options: ["60 cm²", "120 cm²", "240 cm²", "480 cm²"],
      answer: "1",
      explanation:
        "Check: 10² + 24² = 100 + 576 = 676 = 26². So it's a right triangle with legs 10, 24. Area = (1/2)(10)(24) = 120 cm².",
    },
    {
      id: "q144",
      type: "mcq",
      difficulty: "hard",
      stem: "In a right triangle, the altitude to the hypotenuse divides it into segments 7 cm and 28 cm. Find the shorter leg.",
      options: ["7√5 cm", "14 cm", "√245 = 7√5", "35 cm"],
      answer: "2",
      explanation:
        "AB = 35. Shorter leg² = AB × smaller segment = 35 × 7 = 245 → √245 = √(49 × 5) = 7√5 cm.",
    },
    {
      id: "q145",
      type: "mcq",
      difficulty: "hard",
      stem: "An equilateral triangle has area 9√3 cm². What is its side length?",
      options: ["3 cm", "6 cm", "9 cm", "12 cm"],
      answer: "1",
      explanation:
        "Area of equilateral triangle = (√3 / 4) × s². So 9√3 = (√3/4)s² → s² = 36 → s = 6 cm.",
    },

    // ---------- SHORT ANSWER (Q146–Q150) ----------
    {
      id: "q146",
      type: "short",
      difficulty: "easy",
      stem: "Find the third angle of a triangle whose other two angles are 65° and 75°.",
      answer: "40°",
      explanation:
        "65 + 75 + x = 180 → x = 40°.",
    },
    {
      id: "q147",
      type: "short",
      difficulty: "medium",
      stem: "In a right triangle, the legs are 9 cm and 12 cm. Find the hypotenuse.",
      answer: "15 cm",
      explanation:
        "c² = 81 + 144 = 225 → c = 15 cm.",
    },
    {
      id: "q148",
      type: "short",
      difficulty: "medium",
      stem: "The exterior angle of a triangle is 125°. One remote interior is 55°. Find the other remote interior.",
      answer: "70°",
      explanation:
        "55 + x = 125 → x = 70°.",
    },
    {
      id: "q149",
      type: "short",
      difficulty: "hard",
      stem: "The diagonal of a rectangle is 13 cm. One side is 5 cm. Find the other side.",
      answer: "12 cm",
      explanation:
        "Other side² = 13² − 5² = 169 − 25 = 144 → other side = 12 cm.",
    },
    {
      id: "q150",
      type: "short",
      difficulty: "hard",
      stem: "In a right triangle, the altitude to the hypotenuse divides it into segments of 3 cm and 12 cm. Find the altitude and the longer leg.",
      answer: "Altitude = 6 cm, longer leg = 6√5 cm",
      explanation:
        "Step 1: Altitude² = segment1 × segment2 = 3 × 12 = 36 → altitude = 6 cm. Step 2: Hypotenuse = 3 + 12 = 15 cm. Longer leg² = hypotenuse × larger segment = 15 × 12 = 180 → longer leg = √180 = √(36 × 5) = 6√5 cm. So altitude = 6 cm and longer leg = 6√5 cm.",
    },
        // ============================================================
    // BATCH 4 — Q151 to Q200 (final for Chapter 5)
    // ============================================================

    // ---------- EASY MCQ (Q151–Q170) ----------
    {
      id: "q151",
      type: "mcq",
      difficulty: "easy",
      stem: "Two angles of a triangle are 70° and 60°. Find the third.",
      options: ["30°", "40°", "50°", "60°"],
      answer: "2",
      explanation:
        "70 + 60 + x = 180 → x = 50°.",
    },
    {
      id: "q152",
      type: "mcq",
      difficulty: "easy",
      stem: "In a 30-60-90 triangle, the right angle is:",
      options: ["30°", "60°", "90°", "None"],
      answer: "2",
      explanation:
        "The 90° angle is the right angle, opposite the hypotenuse.",
    },
    {
      id: "q153",
      type: "mcq",
      difficulty: "easy",
      stem: "Right triangle legs 3 cm and √7 cm. Hypotenuse?",
      options: ["√10 cm", "4 cm", "5 cm", "√7 cm"],
      answer: "1",
      explanation:
        "c² = 9 + 7 = 16 → c = 4 cm.",
    },
    {
      id: "q154",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a Pythagorean triple?",
      options: ["8, 15, 17", "3, 5, 7", "4, 6, 8", "9, 10, 11"],
      answer: "0",
      explanation:
        "8² + 15² = 64 + 225 = 289 = 17². Correct triple.",
    },
    {
      id: "q155",
      type: "mcq",
      difficulty: "easy",
      stem: "In a right triangle, the altitude to the hypotenuse creates how many similar triangles?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation:
        "Three right triangles: the original big one and the two small ones. All three are similar to each other.",
    },
    {
      id: "q156",
      type: "mcq",
      difficulty: "easy",
      stem: "The hypotenuse of a right triangle is 25 cm and one leg is 7 cm. Find the other leg.",
      options: ["18", "20", "24", "26"],
      answer: "2",
      explanation:
        "b² = 625 − 49 = 576 → b = 24 cm.",
    },
    {
      id: "q157",
      type: "mcq",
      difficulty: "easy",
      stem: "A triangle has angles x, x, 2x. Find x.",
      options: ["30", "45", "60", "90"],
      answer: "1",
      explanation:
        "x + x + 2x = 180 → 4x = 180 → x = 45. Angles: 45, 45, 90 — isosceles right.",
    },
    {
      id: "q158",
      type: "mcq",
      difficulty: "easy",
      stem: "In a 30-60-90 triangle, short leg = 3. Hypotenuse?",
      options: ["3", "6", "3√3", "9"],
      answer: "1",
      explanation:
        "Hypotenuse = 2 × short leg = 6.",
    },
    {
      id: "q159",
      type: "mcq",
      difficulty: "easy",
      stem: "In a 30-60-90 triangle, short leg = 3. Long leg?",
      options: ["3", "6", "3√3", "9"],
      answer: "2",
      explanation:
        "Long leg = short leg × √3 = 3√3.",
    },
    {
      id: "q160",
      type: "mcq",
      difficulty: "easy",
      stem: "Is a triangle with sides 12, 16, 20 a right triangle?",
      options: ["Yes", "No", "Only if scaled", "Cannot tell"],
      answer: "0",
      explanation:
        "12² + 16² = 144 + 256 = 400 = 20². Yes. This is 4 × (3-4-5).",
    },
    {
      id: "q161",
      type: "mcq",
      difficulty: "easy",
      stem: "A triangle has angles 100°, 40°, 40°. It is:",
      options: ["Equilateral", "Isosceles", "Scalene", "Right"],
      answer: "1",
      explanation:
        "Two equal angles → isosceles.",
    },
    {
      id: "q162",
      type: "mcq",
      difficulty: "easy",
      stem: "The exterior angle of a triangle is 80°. The two remote interior angles sum to:",
      options: ["80°", "100°", "180°", "360°"],
      answer: "0",
      explanation:
        "Exterior = sum of the two remote interiors. So they sum to 80°.",
    },
    {
      id: "q163",
      type: "mcq",
      difficulty: "easy",
      stem: "In a right triangle, one acute angle is 40°. The other is:",
      options: ["40°", "50°", "60°", "140°"],
      answer: "1",
      explanation:
        "90 + 40 + x = 180 → x = 50°.",
    },
    {
      id: "q164",
      type: "mcq",
      difficulty: "easy",
      stem: "Two sides of a right triangle are 8 and 15. Hypotenuse?",
      options: ["17", "23", "24", "25"],
      answer: "0",
      explanation:
        "c² = 64 + 225 = 289 → c = 17 cm.",
    },
    {
      id: "q165",
      type: "mcq",
      difficulty: "easy",
      stem: "In a triangle, angles are 2x, 3x, and 4x. Find x.",
      options: ["10", "15", "20", "30"],
      answer: "2",
      explanation:
        "2x + 3x + 4x = 180 → 9x = 180 → x = 20.",
    },
    {
      id: "q166",
      type: "mcq",
      difficulty: "easy",
      stem: "In the same triangle (2x, 3x, 4x), the smallest angle is:",
      options: ["20°", "40°", "60°", "80°"],
      answer: "1",
      explanation:
        "x = 20. Smallest = 2x = 40°.",
    },
    {
      id: "q167",
      type: "mcq",
      difficulty: "easy",
      stem: "The hypotenuse of a right triangle with equal legs of length 6 cm is:",
      options: ["6 cm", "6√2 cm", "12 cm", "36 cm"],
      answer: "1",
      explanation:
        "c² = 36 + 36 = 72 → c = √72 = 6√2 cm.",
    },
    {
      id: "q168",
      type: "mcq",
      difficulty: "easy",
      stem: "A triangle with sides 6, 8, 10 has area:",
      options: ["24 cm²", "30 cm²", "48 cm²", "60 cm²"],
      answer: "0",
      explanation:
        "It's a right triangle (6² + 8² = 100 = 10²). Area = (1/2)(6)(8) = 24 cm².",
    },
    {
      id: "q169",
      type: "mcq",
      difficulty: "easy",
      stem: "In a right triangle, if the two acute angles are equal, the triangle is:",
      options: ["Equilateral", "Isosceles right", "Scalene", "Obtuse"],
      answer: "1",
      explanation:
        "Both acute angles equal → isosceles right triangle (each acute = 45°).",
    },
    {
      id: "q170",
      type: "mcq",
      difficulty: "easy",
      stem: "A triangle has angles 45°, 45°, 90°. If each leg is 5 cm, the hypotenuse is:",
      options: ["5 cm", "5√2 cm", "10 cm", "10√2 cm"],
      answer: "1",
      explanation:
        "Hypotenuse = leg × √2 = 5√2 cm.",
    },

    // ---------- MEDIUM MCQ (Q171–Q190) ----------
    {
      id: "q171",
      type: "mcq",
      difficulty: "medium",
      stem: "In △ABC, ∠A = 70°, ∠B = 60°. Find the exterior angle at C.",
      options: ["110°", "120°", "130°", "140°"],
      answer: "2",
      explanation:
        "Exterior at C = A + B = 70 + 60 = 130°.",
    },
    {
      id: "q172",
      type: "mcq",
      difficulty: "medium",
      stem: "In right triangle ABC (right at C), AC = 5 cm, BC = 12 cm. Find AB.",
      options: ["13 cm", "15 cm", "17 cm", "60 cm"],
      answer: "0",
      explanation:
        "AB² = 25 + 144 = 169 → AB = 13 cm.",
    },
    {
      id: "q173",
      type: "mcq",
      difficulty: "medium",
      stem: "In a rectangle 9 × 12 cm, the diagonal is:",
      options: ["10 cm", "13 cm", "15 cm", "21 cm"],
      answer: "2",
      explanation:
        "d² = 81 + 144 = 225 → d = 15 cm.",
    },
    {
      id: "q174",
      type: "mcq",
      difficulty: "medium",
      stem: "In right triangle ABC with altitude CD, AD = 8, DB = 18. Find CD.",
      options: ["10 cm", "12 cm", "14 cm", "18 cm"],
      answer: "1",
      explanation:
        "CD² = 8 × 18 = 144 → CD = 12 cm.",
    },
    {
      id: "q175",
      type: "mcq",
      difficulty: "medium",
      stem: "In right triangle ABC with altitude CD, AD = 5, DB = 20. Find AC.",
      options: ["5√5 cm", "10 cm", "√125 cm", "Both A and C are the same"],
      answer: "3",
      explanation:
        "AB = 25. AC² = AB × AD = 25 × 5 = 125 → AC = √125 = √(25 × 5) = 5√5 cm. Both A (5√5) and C (√125) are the same value.",
    },
    {
      id: "q176",
      type: "mcq",
      difficulty: "medium",
      stem: "A 13 m ladder is placed against a wall. The base is 5 m from the wall. How high does the ladder reach?",
      options: ["10 m", "12 m", "13 m", "15 m"],
      answer: "1",
      explanation:
        "a² + 5² = 13² → a² = 169 − 25 = 144 → a = 12 m.",
    },
    {
      id: "q177",
      type: "mcq",
      difficulty: "medium",
      stem: "A field is 24 m × 7 m. A person walks along one side and then the other. How far is he from his start?",
      options: ["24 m", "25 m", "31 m", "48 m"],
      answer: "1",
      explanation:
        "d² = 24² + 7² = 576 + 49 = 625 → d = 25 m.",
    },
    {
      id: "q178",
      type: "mcq",
      difficulty: "medium",
      stem: "The area of an equilateral triangle with side 6 cm is:",
      options: ["9√3 cm²", "18√3 cm²", "36√3 cm²", "6√3 cm²"],
      answer: "0",
      explanation:
        "Area = (√3/4) × s² = (√3/4) × 36 = 9√3 cm².",
    },
    {
      id: "q179",
      type: "mcq",
      difficulty: "medium",
      stem: "In △ABC, ∠A = (2x)°, ∠B = (3x + 10)°, ∠C = (5x − 10)°. Find x.",
      options: ["15", "18", "20", "24"],
      answer: "1",
      explanation:
        "2x + (3x + 10) + (5x − 10) = 180 → 10x = 180 → x = 18.",
    },
    {
      id: "q180",
      type: "mcq",
      difficulty: "medium",
      stem: "In the triangle above (Q179), the largest angle is:",
      options: ["36°", "64°", "80°", "90°"],
      answer: "2",
      explanation:
        "x = 18. ∠A = 36°, ∠B = 64°, ∠C = 80°. Largest = 80°.",
    },
    {
      id: "q181",
      type: "mcq",
      difficulty: "medium",
      stem: "An isosceles triangle has base angles of 65°. Find the vertex angle.",
      options: ["40°", "50°", "60°", "70°"],
      answer: "1",
      explanation:
        "65 + 65 + v = 180 → v = 50°.",
    },
    {
      id: "q182",
      type: "mcq",
      difficulty: "medium",
      stem: "A triangle has sides 9, 40, 41. Is it right-angled?",
      options: ["Yes", "No", "Only if scaled", "Cannot tell"],
      answer: "0",
      explanation:
        "9² + 40² = 81 + 1600 = 1681 = 41². Yes, right-angled.",
    },
    {
      id: "q183",
      type: "mcq",
      difficulty: "medium",
      stem: "In a right triangle, the altitude to the hypotenuse is 6 cm. One segment is 3 cm. Find the other segment.",
      options: ["9 cm", "12 cm", "15 cm", "18 cm"],
      answer: "1",
      explanation:
        "Altitude² = s1 × s2 → 36 = 3 × s2 → s2 = 12 cm.",
    },
    {
      id: "q184",
      type: "mcq",
      difficulty: "medium",
      stem: "In right triangle ABC, hypotenuse = 20 cm, one segment (AD) = 5 cm. Find the other segment (DB).",
      options: ["5 cm", "10 cm", "15 cm", "20 cm"],
      answer: "2",
      explanation:
        "DB = AB − AD = 20 − 5 = 15 cm.",
    },
    {
      id: "q185",
      type: "mcq",
      difficulty: "medium",
      stem: "The diagonal of a square is 8 cm. Find its area.",
      options: ["16 cm²", "32 cm²", "64 cm²", "8√2 cm²"],
      answer: "1",
      explanation:
        "Side = 8/√2 = 4√2. Area = (4√2)² = 32 cm². Shortcut: Area = d²/2 = 64/2 = 32 cm².",
    },
    {
      id: "q186",
      type: "mcq",
      difficulty: "medium",
      stem: "A triangle has sides 10 cm, 24 cm, 26 cm. Its area is:",
      options: ["120 cm²", "240 cm²", "130 cm²", "260 cm²"],
      answer: "0",
      explanation:
        "10² + 24² = 676 = 26². Right triangle. Area = (1/2)(10)(24) = 120 cm².",
    },
    {
      id: "q187",
      type: "mcq",
      difficulty: "medium",
      stem: "Two sides of a right triangle are 6 and 8. The third side could be:",
      options: ["2 only", "10 only", "√28 only", "10 or √28"],
      answer: "3",
      explanation:
        "If 6 and 8 are legs: c = 10. If 8 is hypotenuse: other leg = √(64 − 36) = √28. Banchi, careful — sometimes the unknown is the hypotenuse, sometimes a leg.",
    },
    {
      id: "q188",
      type: "mcq",
      difficulty: "medium",
      stem: "A triangle has angles 30°, 60°, 90° and the hypotenuse is 14 cm. Find the short leg.",
      options: ["7 cm", "7√3 cm", "14 cm", "28 cm"],
      answer: "0",
      explanation:
        "Short leg = hypotenuse / 2 = 14 / 2 = 7 cm.",
    },
    {
      id: "q189",
      type: "mcq",
      difficulty: "medium",
      stem: "In the same triangle (hypotenuse 14), the long leg is:",
      options: ["7 cm", "7√3 cm", "14√3 cm", "28 cm"],
      answer: "1",
      explanation:
        "Long leg = short leg × √3 = 7√3 cm.",
    },
    {
      id: "q190",
      type: "mcq",
      difficulty: "medium",
      stem: "In right triangle ABC, ∠C = 90°, altitude CD. If AC = 3 and BC = 4, find CD.",
      options: ["2", "2.4", "3", "5"],
      answer: "1",
      explanation:
        "AB = 5. Area = (1/2)(3)(4) = 6 = (1/2)(5)(CD) → 5·CD = 12 → CD = 2.4 cm.",
    },

    // ---------- HARD MCQ (Q191–Q195) ----------
    {
      id: "q191",
      type: "mcq",
      difficulty: "hard",
      stem: "Two sides of a triangle are 6 cm and 8 cm, and the included angle is 90°. Find the area.",
      options: ["12 cm²", "24 cm²", "48 cm²", "14 cm²"],
      answer: "1",
      explanation:
        "Area = (1/2)(6)(8) = 24 cm².",
    },
    {
      id: "q192",
      type: "mcq",
      difficulty: "hard",
      stem: "In right triangle ABC with right angle at C, altitude CD to AB. If AC = 6, BC = 8, find AD and DB.",
      options: ["AD = 3.6, DB = 6.4", "AD = 4, DB = 6", "AD = 5, DB = 5", "AD = 3, DB = 7"],
      answer: "0",
      explanation:
        "AB = 10. From Euclid: AC² = AB × AD → 36 = 10 × AD → AD = 3.6. And BC² = AB × DB → 64 = 10 × DB → DB = 6.4. Check: 3.6 + 6.4 = 10 ✓.",
    },
    {
      id: "q193",
      type: "mcq",
      difficulty: "hard",
      stem: "A rectangular garden is 15 m × 20 m. A path runs diagonally across it. How long is the path?",
      options: ["25 m", "30 m", "35 m", "40 m"],
      answer: "0",
      explanation:
        "d² = 15² + 20² = 225 + 400 = 625 → d = 25 m.",
    },
    {
      id: "q194",
      type: "mcq",
      difficulty: "hard",
      stem: "In a right triangle, the two legs are 7 cm and 24 cm. Find the altitude to the hypotenuse.",
      options: ["6.72 cm", "8 cm", "10 cm", "12 cm"],
      answer: "0",
      explanation:
        "Hypotenuse = √(49 + 576) = √625 = 25. Area = (1/2)(7)(24) = 84 = (1/2)(25)(h) → 25h = 168 → h = 6.72 cm.",
    },
    {
      id: "q195",
      type: "mcq",
      difficulty: "hard",
      stem: "A right triangle has legs 9 cm and 12 cm. Find the hypotenuse and area.",
      options: ["15 cm and 54 cm²", "15 cm and 108 cm²", "21 cm and 54 cm²", "15 cm and 27 cm²"],
      answer: "0",
      explanation:
        "c² = 81 + 144 = 225 → c = 15 cm. Area = (1/2)(9)(12) = 54 cm².",
    },

    // ---------- SHORT ANSWER (Q196–Q200) ----------
    {
      id: "q196",
      type: "short",
      difficulty: "easy",
      stem: "State Euclid's Theorem in your own words.",
      answer:
        "In a right triangle, when you draw the altitude to the hypotenuse, the square of each leg equals the hypotenuse multiplied by the segment of the hypotenuse adjacent to that leg.",
      explanation:
        "For leg AC with adjacent segment AD on hypotenuse AB: (AC)² = AB × AD. For leg BC with adjacent segment DB: (BC)² = AB × DB.",
    },
    {
      id: "q197",
      type: "short",
      difficulty: "medium",
      stem: "The two legs of a right triangle are 8 cm and 15 cm. Find the hypotenuse.",
      answer: "17 cm",
      explanation:
        "c² = 64 + 225 = 289 → c = 17 cm.",
    },
    {
      id: "q198",
      type: "short",
      difficulty: "medium",
      stem: "In right triangle ABC with altitude CD, AD = 9 cm and DB = 16 cm. Find CD and AC.",
      answer: "CD = 12 cm, AC = 15 cm",
      explanation:
        "CD² = 9 × 16 = 144 → CD = 12 cm. AB = 25. AC² = 25 × 9 = 225 → AC = 15 cm.",
    },
    {
      id: "q199",
      type: "short",
      difficulty: "hard",
      stem: "An 18 m tall tree breaks 3 m from the ground. How far from the tree's base does the top of the tree land?",
      answer: "≈ 14.7 m (exactly 6√6 m)",
      explanation:
        "The fallen portion is 15 m long (18 − 3). The vertical leg is 3 m.\n3² + x² = 15² → 9 + x² = 225 → x² = 216 → x = √216 = 6√6 ≈ 14.7 m.",
    },
    {
      id: "q200",
      type: "short",
      difficulty: "hard",
      stem: "A right triangle has a hypotenuse of 26 cm and one leg of 10 cm. Find the other leg and the area.",
      answer: "Other leg = 24 cm, Area = 120 cm²",
      explanation:
        "b² = 26² − 10² = 676 − 100 = 576 → b = 24 cm. Area = (1/2)(10)(24) = 120 cm².",
    },
  ],
};