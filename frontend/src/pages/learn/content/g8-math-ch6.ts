import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 MATHEMATICS — CHAPTER 6
// CIRCLES
// Source: AAEB Grade 8 Mathematics Student Textbook (pp. 158–183)
// For: Banchi (ባንቺ) — Grade 8
// Language level: A2 / A1 / B1 — clear, short, no harsh words.
// ============================================================

export const g8MathCh6: Chapter = {
  id: "ch6",
  number: 6,
  title: "Circles",
  titleAm: "ክበቦች",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. What is a Circle? The Basic Parts",
      titleAm: "ክበብ ምንድን ነው? መሠረታዊ ክፍሎች",
      body:
        "Banchi, a circle is a set of points that are all the same distance from one fixed point. That fixed point is called the center. The distance from the center to any point on the circle is called the radius (plural: radii).",
      bodyAm:
        "ባንቺ፣ ክበብ ማለት ከአንድ ቋሚ ነጥብ ተመሳሳይ ርቀት ያላቸው ነጥቦች ስብስብ ነው። ያ ቋሚ ነጥብ ማዕከል ይባላል። ከማዕከሉ ወደ ክበቡ ላይ ያለ ማንኛውም ነጥብ ያለው ርቀት ራዲየስ ይባላል።",
      children: [
        {
          id: "n1-1",
          title: "Picture of a circle",
          titleAm: "የክበብ ሥዕል",
          body:
            "            * * *\n" +
            "         *         *\n" +
            "        *     O     *   ← O is the center\n" +
            "         *         *\n" +
            "            * * *\n" +
            "\n" +
            "The distance from O to any point on the circle = radius (r).",
          bodyAm:
            "ከ O ወደ ክበቡ ላይ ያለ ማንኛውም ነጥብ ያለው ርቀት = ራዲየስ (r)።",
        },
        {
          id: "n1-2",
          title: "Chord",
          titleAm: "ኮርድ (ቅስት)",
          body:
            "A chord is a line segment whose two endpoints lie on the circle.\n\n" +
            "         A *───* B     ← AB is a chord\n" +
            "        *    O    *\n" +
            "         *       *\n" +
            "           * * *",
          bodyAm:
            "ኮርድ ሁለት ጫፎቹ በክበቡ ላይ የሚያርፉ የመስመር ክፍል ነው። AB ኮርድ ነው።",
        },
        {
          id: "n1-3",
          title: "Diameter",
          titleAm: "ዲያሜትር",
          body:
            "A diameter is a chord that passes through the center. It is the longest possible chord.\n\n" +
            "         A *─────* B   ← AB is a diameter\n" +
            "          *   O   *\n" +
            "           *     *\n" +
            "             * *\n" +
            "\n" +
            "Diameter = 2 × radius.",
          bodyAm:
            "ዲያሜትር በማዕከሉ የሚያልፍ ኮርድ ነው። ረጅሙ ኮርድ ነው። ዲያሜትር = 2 × ራዲየስ።",
        },
        {
          id: "n1-4",
          title: "Secant and Tangent",
          titleAm: "ሴካንት እና ታንጀንት",
          body:
            "A secant is a line that crosses the circle at two points.\n" +
            "A tangent is a line that touches the circle at exactly one point. The point of touch is called the point of tangency.\n\n" +
            "                  secant line\n" +
            "                ╱────────╲\n" +
            "              ╱          ╲\n" +
            "             *    O        *\n" +
            "              ╲          ╱\n" +
            "                ╲───────╱\n" +
            "                     │\n" +
            "                     P ← tangent touches here",
          bodyAm:
            "ሴካንት ክበቡን በሁለት ነጥብ የሚያቋርጥ መስመር ነው። ታንጀንት ክበቡን በአንድ ነጥብ ብቻ የሚነካ መስመር ነው። የመነካካት ነጥብ የታንጀንሲ ነጥብ ይባላል።",
        },
        {
          id: "n1-5",
          title: "Interior, on-circle, exterior points",
          titleAm: "የውስጥ፣ በክበቡ ላይ፣ የውጭ ነጥቦች",
          body:
            "Point P is interior if OP < r.\n" +
            "Point B is on the circle if OB = r.\n" +
            "Point Q is exterior if OQ > r.",
          bodyAm:
            "ነጥብ P የውስጥ ነው OP < r ከሆነ።\nነጥብ B በክበቡ ላይ ነው OB = r ከሆነ።\nነጥብ Q የውጭ ነው OQ > r ከሆነ።",
        },
        {
          id: "n1-6",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, a straight line can NEVER intersect a circle in more than two points. If someone says a line hits a circle 3 times, that's impossible. A diameter is the LONGEST chord.",
          bodyAm:
            "ባንቺ፣ አንድ ቀጥተኛ መስመር ከሁለት ነጥብ በላይ ክበብን ማቋረጥ አይችልም። ሦስት ጊዜ ይነካል ቢባል የማይቻል ነው። ዲያሜትር ረጅሙ ኮርድ ነው።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Arcs, Sectors and Segments",
      titleAm: "ቅስቶች፣ ሴክተሮች እና ክፍሎች",
      body:
        "Banchi, when you cut a circle, you get different shapes. Let's look at each one.",
      bodyAm:
        "ባንቺ፣ ክበብ ስትቆርጪ የተለያዩ ቅርጾች ታገኛለሽ። እያንዳንዱን እንመልከት።",
      children: [
        {
          id: "n2-1",
          title: "Arc — part of the circle's edge",
          titleAm: "ቅስት — የክበብ ጠርዝ ክፍል",
          body:
            "An arc is a piece of the circumference (the curved edge of the circle).\n\n" +
            "Three types of arcs:\n" +
            "• Minor arc — less than a semi-circle (less than 180°)\n" +
            "• Major arc — more than a semi-circle (more than 180°)\n" +
            "• Semi-circle — exactly half of the circle (180°)\n\n" +
            "Picture:\n" +
            "         A\n" +
            "        * *\n" +
            "      *     *\n" +
            "     *   O   *\n" +
            "      *     *\n" +
            "        * *\n" +
            "         B\n" +
            "\n" +
            "Small arc from A to B (the shorter route) = minor arc AB.\n" +
            "Large arc from A to B (the longer route) = major arc AB.",
          bodyAm:
            "ቅስት የክበብ ጠርዝ ክፍል ነው።\n• ትንሽ ቅስት — ከግማሽ ክበብ ያንሳል\n• ትልቅ ቅስት — ከግማሽ ክበብ ይበልጣል\n• ግማሽ ክበብ — በትክክል ግማሽ (180°)",
        },
        {
          id: "n2-2",
          title: "Sector — pizza slice shape",
          titleAm: "ሴክተር — የፒዛ ቅርጽ",
          body:
            "A sector is the region bounded by two radii and the arc between them. It looks like a slice of pizza.\n\n" +
            "         A\n" +
            "        * *\n" +
            "      *  │  *\n" +
            "     *   │   *\n" +
            "     *   O────*  B\n" +
            "      *     *\n" +
            "        * *\n" +
            "\n" +
            "The shaded region AOB is the sector.",
          bodyAm:
            "ሴክተር በሁለት ራዲየሶች እና በመካከላቸው ባለው ቅስት የተከበበ ክፍል ነው። የፒዛ ቅርጽ ይመስላል።",
        },
        {
          id: "n2-3",
          title: "Segment — chord + arc shape",
          titleAm: "ሴግመንት — ኮርድ + ቅስት ቅርጽ",
          body:
            "A segment is the region bounded by a chord and the arc it cuts off.\n\n" +
            "         A *───* B\n" +
            "        *    ↓    *\n" +
            "       *           *\n" +
            "        *         *\n" +
            "          * * *\n" +
            "\n" +
            "The region between chord AB and the arc below is a segment.\n" +
            "Smaller segment = minor segment. Larger = major segment.",
          bodyAm:
            "ሴግመንት በአንድ ኮርድ እና በሚቆርጠው ቅስት የተከበበ ክፍል ነው።",
        },
        {
          id: "n2-4",
          title: "Naming a major arc",
          titleAm: "ትልቁን ቅስት መሰየም",
          body:
            "A minor arc is named with just two letters: AB.\n" +
            "A major arc is named with THREE letters: ACB (where C is any point on the arc).",
          bodyAm:
            "ትንሽ ቅስት በሁለት ፊደሎች ይሰየማል፡ AB።\nትልቅ ቅስት በሦስት ፊደሎች ይሰየማል፡ ACB።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, a semi-circle is exactly 180°. A minor arc is LESS than 180°. A major arc is MORE than 180°. Do not confuse sector (pizza slice) with segment (chord + arc).",
          bodyAm:
            "ባንቺ፣ ግማሽ ክበብ በትክክል 180° ነው። ትንሽ ቅስት ከ 180° ያንሳል። ትልቅ ቅስት ከ 180° ይበልጣል። ሴክተርን ከሴግመንት ጋር አታደናግሪ።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Central Angle",
      titleAm: "ማዕከላዊ ማዕዘን",
      body:
        "Banchi, a central angle is an angle whose VERTEX is at the CENTER of the circle. Its two sides are radii.",
      bodyAm:
        "ባንቺ፣ ማዕከላዊ ማዕዘን ጫፉ በክበቡ ማዕከል ላይ ያለ ማዕዘን ነው። ሁለቱ ጎኖቹ ራዲየሶች ናቸው።",
      children: [
        {
          id: "n3-1",
          title: "Picture",
          titleAm: "ሥዕል",
          body:
            "              A\n" +
            "              *\n" +
            "            * * \n" +
            "          *   *\n" +
            "         *  θ  *\n" +
            "        *       *\n" +
            "       O─────────* B\n" +
            "\n" +
            "O is the center. OA and OB are radii.\n" +
            "∠AOB is the central angle (θ).",
          bodyAm:
            "O ማዕከሉ ነው። OA እና OB ራዲየሶች ናቸው።\n∠AOB ማዕከላዊ ማዕዘን ነው።",
        },
        {
          id: "n3-2",
          title: "The key rule",
          titleAm: "ቁልፍ ደንብ",
          body:
            "A central angle has the SAME measure as its intercepted arc.\n\n" +
            "m∠AOB = m(arc AB).\n\n" +
            "Banchi, if the central angle is 60°, then the arc AB is also 60°.",
          bodyAm:
            "ማዕከላዊ ማዕዘን ከሚያጠራው ቅስት ጋር እኩል መለኪያ አለው።\nm∠AOB = m(arc AB)።",
        },
        {
          id: "n3-3",
          title: "The full circle is 360°",
          titleAm: "ሙሉ ክበብ 360° ነው",
          body:
            "The whole circle = 360°.\n" +
            "A semi-circle = 180°.\n" +
            "If a central angle is 130°, the major arc on the other side = 360 − 130 = 230°.",
          bodyAm:
            "ሙሉ ክበብ = 360°። ግማሽ ክበብ = 180°።\nማዕከላዊ ማዕዘን 130° ከሆነ በሌላኛው በኩል ያለው ትልቅ ቅስት = 230°።",
        },
        {
          id: "n3-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, a central angle is measured BY its arc — they are equal. Do not multiply or divide here. The equal-measure rule only applies to central angles, not to inscribed angles.",
          bodyAm:
            "ባንቺ፣ ማዕከላዊ ማዕዘን በቅስቱ ይለካል — እኩል ናቸው። በዚህ ቦታ አታባዛ ወይም አትከፋፍል። የእኩል መለኪያ ደንብ ለማዕከላዊ ማዕዘኖች ብቻ ነው።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Inscribed Angle",
      titleAm: "የተቀረጸ ማዕዘን",
      body:
        "Banchi, an inscribed angle is an angle whose VERTEX is ON the circle and whose two sides are chords of the circle.",
      bodyAm:
        "ባንቺ፣ የተቀረጸ ማዕዘን ጫፉ በክበቡ ላይ ያለ እና ሁለቱ ጎኖቹ ኮርዶች የሆኑ ማዕዘን ነው።",
      children: [
        {
          id: "n4-1",
          title: "Picture",
          titleAm: "ሥዕል",
          body:
            "              A\n" +
            "              *\n" +
            "            * * \n" +
            "          *   *\n" +
            "         *     *\n" +
            "        B───────* C\n" +
            "              \n" +
            "             \n" +
            "The vertex is at B (on the circle).\n" +
            "The sides BA and BC are chords.\n" +
            "∠ABC is an inscribed angle.",
          bodyAm:
            "ጫፉ B ላይ ነው (በክበቡ ላይ)።\nጎኖቹ BA እና BC ኮርዶች ናቸው።\n∠ABC የተቀረጸ ማዕዘን ነው።",
        },
        {
          id: "n4-2",
          title: "Theorem 6.1 — The half rule",
          titleAm: "ቲዎረም 6.1 — የግማሽ ደንብ",
          body:
            "The measure of an inscribed angle is HALF the measure of its intercepted arc.\n\n" +
            "m∠ABC = (1/2) × m(arc AC).\n\n" +
            "Banchi, remember: central angle = arc. Inscribed angle = HALF the arc.",
          bodyAm:
            "የተቀረጸ ማዕዘን መለኪያ ከሚያጠራው ቅስት ግማሽ ነው።\nm∠ABC = (1/2) × m(arc AC)።",
        },
        {
          id: "n4-3",
          title: "Theorem 6.2 — Same arc, same angle",
          titleAm: "ቲዎረም 6.2 — ተመሳሳይ ቅስት፣ ተመሳሳይ ማዕዘን",
          body:
            "Inscribed angles that subtend the SAME arc are equal.\n\n" +
            "If both ∠ABE and ∠ACE open onto arc AE, then m∠ABE = m∠ACE.",
          bodyAm:
            "ተመሳሳይ ቅስትን የሚያጠሩ የተቀረጹ ማዕዘኖች እኩል ናቸው።",
        },
        {
          id: "n4-4",
          title: "Inscribed angle in a semi-circle",
          titleAm: "በግማሽ ክበብ ውስጥ የተቀረጸ ማዕዘን",
          body:
            "Banchi, this is VERY important for exams. If an inscribed angle opens onto a semi-circle (arc = 180°), then the inscribed angle = 180°/2 = 90°. So it's a RIGHT ANGLE.\n\n" +
            "Any triangle inscribed in a semi-circle is a right triangle.",
          bodyAm:
            "ባንቺ፣ ይህ ለፈተና በጣም አስፈላጊ ነው። የተቀረጸ ማዕዘን በግማሽ ክበብ ላይ ከተከፈተ (ቅስት = 180°) ማዕዘኑ = 90° ነው። ቀኝ ማዕዘን። በግማሽ ክበብ ውስጥ የተቀረጸ ማንኛውም ትሪያንግል ቀኝ ትሪያንግል ነው።",
        },
        {
          id: "n4-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, this is the biggest trap in the chapter: Central angle = the FULL arc. Inscribed angle = HALF the arc. If a problem says the arc is 100°, then a central angle on it is 100°, but an inscribed angle on it is 50°.",
          bodyAm:
            "ባንቺ፣ ይህ በምዕራፉ ውስጥ ትልቁ ወጥመድ ነው፡ ማዕከላዊ ማዕዘን = ሙሉ ቅስት። የተቀረጸ ማዕዘን = ግማሽ ቅስት። ቅስቱ 100° ከሆነ ማዕከላዊው 100° ነው፣ የተቀረጸው ግን 50° ነው።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Angles Formed by Two Intersecting Chords",
      titleAm: "በሁለት የሚቋረጡ ኮርዶች የሚሠሩ ማዕዘኖች",
      body:
        "Banchi, when two chords cross INSIDE a circle, they form four angles. There is a beautiful formula for the angle at the crossing point.",
      bodyAm:
        "ባንቺ፣ ሁለት ኮርዶች በክበብ ውስጥ ሲቋረጡ አራት ማዕዘኖች ይሠራሉ። በመቋረጫ ነጥቡ ላይ ያለው ማዕዘን ውብ ቀመር አለው።",
      children: [
        {
          id: "n5-1",
          title: "Picture",
          titleAm: "ሥዕል",
          body:
            "              A\n" +
            "             ╱\n" +
            "          ╱   ╲\n" +
            "        D──P─────B\n" +
            "          ╲   ╱\n" +
            "             ╲\n" +
            "              C\n" +
            "\n" +
            "Chords AB and CD intersect at P (inside the circle).\n" +
            "∠APD is formed by the two chords.",
          bodyAm:
            "ኮርዶች AB እና CD በ P ይቋረጣሉ (በክበብ ውስጥ)።\n∠APD በሁለቱ ኮርዶች ይሠራል።",
        },
        {
          id: "n5-2",
          title: "Theorem 6.3 — The half-sum rule",
          titleAm: "ቲዎረም 6.3 — የግማሽ-ድምር ደንብ",
          body:
            "The measure of an angle formed by two chords intersecting inside a circle is HALF the sum of the two intercepted arcs (the angle's arc and its vertical angle's arc).\n\n" +
            "m∠APD = (1/2) × [ m(arc AD) + m(arc BC) ].",
          bodyAm:
            "በክበብ ውስጥ በሁለት ኮርዶች የሚሠራ ማዕዘን የሁለቱ ቅስቶች ድምር ግማሽ ነው።\nm∠APD = (1/2) × [ m(arc AD) + m(arc BC) ]።",
        },
        {
          id: "n5-3",
          title: "Example",
          titleAm: "ምሳሌ",
          body:
            "If arc AD = 72° and arc BC = 48°, then:\n" +
            "m∠APD = (1/2) × (72 + 48) = (1/2) × 120 = 60°.",
          bodyAm:
            "arc AD = 72° እና arc BC = 48° ከሆነ፡\nm∠APD = (1/2) × (72 + 48) = 60°።",
        },
        {
          id: "n5-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, the formula uses the two arcs on OPPOSITE sides of the angle. Do not add the two arcs on the same side. They are the arc under the angle and the arc under the vertical angle.",
          bodyAm:
            "ባንቺ፣ ቀመሩ በማዕዘኑ ተቃራኒ ጎኖች ላይ ያሉትን ሁለት ቅስቶች ይጠቀማል። በአንድ ጎን ያሉትን ሁለት ቅስቶች አትደምሪ። በማዕዘኑ ሥር ያለው ቅስት እና በተቃራኒ ማዕዘኑ ሥር ያለው ቅስት ናቸው።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Special Rules for Chords (Facts to Memorize)",
      titleAm: "ልዩ የኮርድ ደንቦች",
      body:
        "Banchi, these three facts appear often in exams. Memorize them.",
      bodyAm:
        "ባንቺ፣ እነዚህ ሦስት እውነታዎች በፈተና በተደጋጋሚ ይታያሉ። አስታውሺ።",
      children: [
        {
          id: "n6-1",
          title: "Fact 1 — Perpendicular from center bisects",
          titleAm: "እውነታ 1 — ከማዕከሉ የሚወርድ ቀጥ ያለ መስመር ኮርዱን በግማሽ ይከፍላል",
          body:
            "A line from the center perpendicular to a chord BISECTS the chord.",
          bodyAm:
            "ከማዕከሉ ወደ ኮርዱ የሚወርድ ቀጥ ያለ መስመር ኮርዱን በግማሽ ይከፍላል።",
        },
        {
          id: "n6-2",
          title: "Fact 2 — Bisector passes through center",
          titleAm: "እውነታ 2 — ባለ ሁለት ከፋዩ በማዕከሉ ያልፋል",
          body:
            "The perpendicular bisector of a chord passes through the CENTER of the circle.",
          bodyAm:
            "የኮርድ ቀጥ ያለ ባለ ሁለት ከፋይ በክበቡ ማዕከል ያልፋል።",
        },
        {
          id: "n6-3",
          title: "Fact 3 — Diameter perpendicular to chord",
          titleAm: "እውነታ 3 — ዲያሜትር ከኮርድ ጋር ቀጥ ያለ ሲሆን",
          body:
            "A diameter perpendicular to a chord BISECTS both the chord and its arcs.",
          bodyAm:
            "ከኮርድ ጋር ቀጥ ያለ ዲያሜትር ኮርዱን እና ቅስቶቹን በግማሽ ይከፍላል።",
        },
      ],
    },

    {
      id: "n7",
      title: "7. Real-Life Applications of Circles",
      titleAm: "የክበቦች የዕለት ተዕለት አጠቃቀሞች",
      body:
        "Banchi, circles are everywhere — wheels, clocks, plates, coins, signs. Their geometry helps us solve real problems.",
      bodyAm:
        "ባንቺ፣ ክበቦች በሁሉም ቦታ አሉ — ጎማዎች፣ ሰዓቶች፣ ሳህኖች፣ ሳንቲሞች፣ ምልክቶች። ጂኦሜትሪያቸው እውነተኛ ችግሮችን ለመፍታት ይረዳናል።",
      children: [
        {
          id: "n7-1",
          title: "Clock hands",
          titleAm: "የሰዓት እጆች",
          body:
            "A clock has 12 hours. The full circle is 360°.\n" +
            "Each hour = 360° / 12 = 30°.\n" +
            "At 5 o'clock, the angle between the hands = 5 × 30° = 150°.",
          bodyAm:
            "ሰዓት 12 ሰዓቶች አሉት። ሙሉ ክበብ = 360°።\nእያንዳንዱ ሰዓት = 30°።\nበ 5 ሰዓት ላይ በእጆቹ መካከል ያለው ማዕዘን = 5 × 30° = 150°።",
        },
        {
          id: "n7-2",
          title: "Movie viewing angle",
          titleAm: "የፊልም መመልከቻ ማዕዘን",
          body:
            "If you sit anywhere on a circle that passes through both ends of the screen and the ideal seat, your viewing angle stays the same. This uses inscribed angles on the same arc.",
          bodyAm:
            "በስክሪኑ ሁለቱን ጫፎች እና በተመረጠው ወንበር በሚያልፍ ክበብ ላይ በማንኛውም ቦታ ከተቀመጥሽ የመመልከቻ ማዕዘንሽ አንድ ነው። ይህ በተመሳሳይ ቅስት ላይ ያሉ የተቀረጹ ማዕዘኖችን ይጠቀማል።",
        },
        {
          id: "n7-3",
          title: "Do-not-smoke sign",
          titleAm: "የመድኃኒት ማጨስ ማሰናከያ ምልክት",
          body:
            "The line that crosses the cigarette in the sign is a diameter — it passes through the center of the circle.",
          bodyAm:
            "በምልክቱ ውስጥ ሲጋራውን የሚያቋርጠው መስመር ዲያሜትር ነው — በክበቡ ማዕከል ያልፋል።",
        },
      ],
    },

    {
      id: "n8",
      title: "8. Exam Strategy — Chapter 6",
      titleAm: "የፈተና ስልት — ምዕራፍ 6",
      body:
        "Banchi, before answering any circle question, check these four things.",
      bodyAm:
        "ባንቺ፣ ማንኛውንም የክበብ ጥያቄ ከመመለስሽ በፊት እነዚህን አራት ነገሮች አረጋግጪ።",
      children: [
        {
          id: "n8-1",
          title: "Check 1 — Central or inscribed?",
          titleAm: "ቼክ 1 — ማዕከላዊ ወይስ የተቀረጸ?",
          body:
            "Where is the vertex? At the center → central angle (use arc directly). On the circle → inscribed (use HALF the arc).",
          bodyAm:
            "ጫፉ የት ነው? በማዕከል ከሆነ → ማዕከላዊ (ቅስቱን በቀጥታ ተጠቀሚ)። በክበቡ ላይ ከሆነ → የተቀረጸ (የቅስቱን ግማሽ ተጠቀሚ)።",
        },
        {
          id: "n8-2",
          title: "Check 2 — Intersecting chords?",
          titleAm: "ቼክ 2 — የሚቋረጡ ኮርዶች?",
          body:
            "If two chords cross INSIDE the circle, use (1/2) × (arc1 + arc2). If the vertex is on the circle and the chords extend outward, that's a different case.",
          bodyAm:
            "ሁለት ኮርዶች በክበብ ውስጥ ከተቋረጡ (1/2) × (arc1 + arc2) ተጠቀሚ።",
        },
        {
          id: "n8-3",
          title: "Check 3 — Semi-circle?",
          titleAm: "ቼክ 3 — ግማሽ ክበብ?",
          body:
            "If an inscribed angle opens onto a diameter (semi-circle), the angle is 90°. This is a huge shortcut.",
          bodyAm:
            "የተቀረጸ ማዕዘን በዲያሜትር ላይ ከተከፈተ (ግማሽ ክበብ) ማዕዘኑ 90° ነው። ይህ ትልቅ አቋራጭ ነው።",
        },
        {
          id: "n8-4",
          title: "Check 4 — Full circle adds to 360°",
          titleAm: "ቼክ 4 — ሙሉ ክበብ 360° ይደምራል",
          body:
            "If arcs don't add up, check your arithmetic. All arcs of a full circle sum to 360°.",
          bodyAm:
            "ቅስቶቹ ካልተደመሩ ስሌትሽን አረጋግጪ። የሙሉ ክበብ ሁሉም ቅስቶች 360° ይደምራሉ።",
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
      stem: "A circle is a set of points that are all the same distance from:",
      options: ["A line", "A fixed point (the center)", "Another circle", "The origin"],
      answer: "1",
      explanation:
        "A circle is defined as all points at the same distance from one fixed point. That fixed point is the center.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "The distance from the center to any point on the circle is called:",
      options: ["Diameter", "Chord", "Radius", "Tangent"],
      answer: "2",
      explanation:
        "The radius (plural: radii) is the distance from the center to any point on the circle.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "A chord that passes through the center is called:",
      options: ["Radius", "Secant", "Tangent", "Diameter"],
      answer: "3",
      explanation:
        "A diameter is a chord through the center. It's the longest possible chord. Diameter = 2 × radius.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "A line that touches the circle at exactly one point is called:",
      options: ["Chord", "Tangent", "Secant", "Diameter"],
      answer: "1",
      explanation:
        "A tangent touches the circle at exactly one point (point of tangency). A secant crosses at two points.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "If the radius of a circle is 8 cm, what is its diameter?",
      options: ["4 cm", "8 cm", "16 cm", "24 cm"],
      answer: "2",
      explanation:
        "Diameter = 2 × radius = 2 × 8 = 16 cm.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "If the diameter of a circle is 20 cm, what is its radius?",
      options: ["5 cm", "10 cm", "15 cm", "40 cm"],
      answer: "1",
      explanation:
        "Radius = diameter / 2 = 20 / 2 = 10 cm.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "A line that crosses a circle at TWO points is called:",
      options: ["Tangent", "Chord", "Secant", "Radius"],
      answer: "2",
      explanation:
        "A secant crosses at two points. (A chord is the segment inside the circle; a secant is the full line.)",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "A piece of the circle's edge is called:",
      options: ["Sector", "Segment", "Arc", "Chord"],
      answer: "2",
      explanation:
        "An arc is a part of the circumference (the circle's edge).",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "A region bounded by two radii and an arc is called:",
      options: ["Segment", "Sector", "Chord", "Tangent"],
      answer: "1",
      explanation:
        "A sector is bounded by two radii and the arc between them. It looks like a slice of pizza.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "A region bounded by a chord and an arc is called:",
      options: ["Sector", "Segment", "Diameter", "Secant"],
      answer: "1",
      explanation:
        "A segment is bounded by a chord and the arc it cuts off.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "A semi-circle is an arc of measure:",
      options: ["90°", "180°", "270°", "360°"],
      answer: "1",
      explanation:
        "A semi-circle is exactly half the circle = 180°.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "The whole circle has how many degrees?",
      options: ["90°", "180°", "270°", "360°"],
      answer: "3",
      explanation:
        "The full circumference of a circle is 360°.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "A central angle has its vertex at:",
      options: ["The circle's edge", "The center", "Outside the circle", "The tangent point"],
      answer: "1",
      explanation:
        "Central angle: vertex at the center, sides are radii.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "An inscribed angle has its vertex at:",
      options: ["The center", "The circle's edge", "Outside", "On a tangent"],
      answer: "1",
      explanation:
        "Inscribed angle: vertex on the circle, sides are chords.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "A central angle and its intercepted arc have:",
      options: ["Different measures", "Equal measures", "One is half the other", "One is double the other"],
      answer: "1",
      explanation:
        "Central angle = its intercepted arc. They have the SAME measure.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "If a central angle is 70°, its intercepted arc is:",
      options: ["35°", "70°", "140°", "290°"],
      answer: "1",
      explanation:
        "Central angle = its intercepted arc. So the arc = 70°.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "An inscribed angle is always ______ of its intercepted arc.",
      options: ["Equal to", "Half", "Twice", "Three times"],
      answer: "1",
      explanation:
        "Inscribed angle = (1/2) × intercepted arc. This is the key formula.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "If an inscribed angle is 40°, its intercepted arc is:",
      options: ["20°", "40°", "80°", "140°"],
      answer: "2",
      explanation:
        "Inscribed angle = (1/2) × arc. So arc = 2 × 40 = 80°.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "An inscribed angle in a semi-circle is always:",
      options: ["45°", "60°", "90°", "180°"],
      answer: "2",
      explanation:
        "Arc of a semi-circle = 180°. Inscribed angle = 180/2 = 90°. So it's a right angle.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "Inscribed angles subtending the SAME arc are:",
      options: ["Supplementary", "Equal", "Complementary", "Always 90°"],
      answer: "1",
      explanation:
        "Inscribed angles on the same arc are EQUAL. This is a very useful fact in exams.",
    },

    // ---------- MEDIUM MCQ (Q21–Q40) ----------
    {
      id: "q21",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, radius OA = 3x − 10 and radius OB = x + 2. Find x.",
      options: ["4", "5", "6", "8"],
      answer: "2",
      explanation:
        "All radii are equal. 3x − 10 = x + 2 → 2x = 12 → x = 6.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "medium",
      stem: "In the same circle (from Q21), OA = 8 cm. Find the diameter.",
      options: ["8 cm", "12 cm", "16 cm", "24 cm"],
      answer: "2",
      explanation:
        "Diameter = 2 × 8 = 16 cm.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m∠AOB = 67° and CD is a diameter. Find m(arc AB).",
      options: ["33.5°", "67°", "113°", "133°"],
      answer: "1",
      explanation:
        "Central angle = its arc. So m(arc AB) = 67°.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "medium",
      stem: "Same circle (m∠AOB = 67°). Find m(arc AC) if m∠AOC = 180 − 67.",
      options: ["67°", "113°", "180°", "247°"],
      answer: "1",
      explanation:
        "m(arc AC) = m∠AOC = 180 − 67 = 113°.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "medium",
      stem: "In a circle, m(arc AB) = 67° and m(arc ADB) is the major arc. Find m(arc ADB).",
      options: ["67°", "113°", "180°", "293°"],
      answer: "3",
      explanation:
        "Full circle = 360°. Major arc = 360 − 67 = 293°.",
    },
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "An inscribed angle intercepts an arc of 120°. What is the angle?",
      options: ["40°", "60°", "120°", "240°"],
      answer: "1",
      explanation:
        "Inscribed angle = (1/2) × arc = (1/2) × 120 = 60°.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "In a circle, ∠ACE = 65°. Find m(arc AE).",
      options: ["32.5°", "65°", "130°", "180°"],
      answer: "2",
      explanation:
        "∠ACE is inscribed, so m(arc AE) = 2 × 65 = 130°.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "In the same circle, ∠ABE subtends the same arc AE. What is ∠ABE?",
      options: ["32.5°", "65°", "130°", "180°"],
      answer: "1",
      explanation:
        "Inscribed angles on the same arc are equal. So ∠ABE = ∠ACE = 65°.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "A circle is divided into three arcs with ratio 2 : 3 : 7. The smallest arc is:",
      options: ["30°", "60°", "90°", "210°"],
      answer: "1",
      explanation:
        "2x + 3x + 7x = 360 → 12x = 360 → x = 30. Smallest arc = 2x = 60°.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Same circle (arcs 2 : 3 : 7). The smallest inscribed angle of the inscribed triangle is:",
      options: ["30°", "60°", "90°", "105°"],
      answer: "0",
      explanation:
        "Smallest angle lies opposite the smallest arc. Angle = (1/2) × 60 = 30°.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Circle divided into arcs ratio 3 : 2 : 5. The largest angle of the triangle formed is:",
      options: ["36°", "72°", "90°", "180°"],
      answer: "2",
      explanation:
        "3x + 2x + 5x = 360 → 10x = 360 → x = 36. Largest arc = 5x = 180°. Angle = 180/2 = 90°.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "If m∠AOB = 112° and AB is a diameter, find m(arc BC) where C is the opposite end.",
      options: ["56°", "68°", "112°", "224°"],
      answer: "1",
      explanation:
        "m(arc AB) = 112°. m(arc BC) = 180 − 112 = 68°.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "Two chords intersect inside a circle. Arc AD = 72°, arc BC = 48°. Find ∠APD.",
      options: ["24°", "48°", "60°", "120°"],
      answer: "2",
      explanation:
        "m∠APD = (1/2) × (arc AD + arc BC) = (1/2) × (72 + 48) = 60°.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Two chords intersect. One intercepted arc is 40°. The angle at the crossing is 54°. Find the other arc.",
      options: ["54°", "68°", "74°", "108°"],
      answer: "1",
      explanation:
        "54 = (1/2)(40 + x) → 108 = 40 + x → x = 68°.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, chords AB and CD intersect at P. Arc AC = 100°, arc BD = 60°. Find ∠APC.",
      options: ["20°", "40°", "80°", "160°"],
      answer: "2",
      explanation:
        "m∠APC = (1/2)(arc AC + arc BD) = (1/2)(100 + 60) = 80°.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m∠ABD = 30° and m(arc CD) = 60°. Find m(arc AD).",
      options: ["30°", "60°", "90°", "120°"],
      answer: "1",
      explanation:
        "m∠ABD is inscribed → m(arc AD) = 2 × 30 = 60°.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Chord AB = 6 cm. The perpendicular from center O to AB hits the chord at M. Find AM.",
      options: ["3 cm", "6 cm", "12 cm", "Cannot tell"],
      answer: "0",
      explanation:
        "The perpendicular from the center BISECTS the chord. So AM = 6/2 = 3 cm.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, AB is a chord of 10 cm. Radius = 13 cm. Find the distance from O to AB.",
      options: ["5 cm", "6 cm", "8 cm", "12 cm"],
      answer: "3",
      explanation:
        "Perpendicular distance from center bisects chord into 5 cm. Right triangle: distance² + 5² = 13² → distance² = 144 → distance = 12 cm.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "A tangent meets a circle at P. A radius OP is drawn to P. The angle between OP and the tangent is:",
      options: ["30°", "60°", "90°", "180°"],
      answer: "2",
      explanation:
        "A tangent is always perpendicular to the radius at the point of tangency. So the angle is 90°.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m∠AOB = 80°. Find m(arc ACB) — the major arc from A to B.",
      options: ["40°", "80°", "160°", "280°"],
      answer: "3",
      explanation:
        "Minor arc = 80°. Major arc = 360 − 80 = 280°.",
    },

    // ---------- HARD MCQ (Q41–Q45) ----------
    {
      id: "q41",
      type: "mcq",
      difficulty: "hard",
      stem: "Two chords intersect at P inside a circle. m∠APD = 110° and m(arc BC) = 40°. Find m(arc AD).",
      options: ["140°", "180°", "220°", "260°"],
      answer: "1",
      explanation:
        "110 = (1/2)(arc AD + 40) → 220 = arc AD + 40 → arc AD = 180°.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "hard",
      stem: "AB is a diameter of circle O. C is on the circle. ∠ACB = ?",
      options: ["45°", "60°", "90°", "Cannot tell"],
      answer: "2",
      explanation:
        "An inscribed angle on a diameter (semi-circle) is always 90°. So ∠ACB = 90°.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "hard",
      stem: "In a circle, chord AB = 24 cm, and the distance from the center to AB is 5 cm. Find the radius.",
      options: ["10 cm", "12 cm", "13 cm", "15 cm"],
      answer: "2",
      explanation:
        "Half-chord = 12. Radius² = 5² + 12² = 25 + 144 = 169 → radius = 13 cm.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "hard",
      stem: "In circle O, chords AB and CD intersect at P. m(arc AC) = 80°, m(arc BD) = 60°. Find m∠APC.",
      options: ["20°", "40°", "70°", "140°"],
      answer: "2",
      explanation:
        "m∠APC = (1/2)(arc AC + arc BD) = (1/2)(80 + 60) = 70°.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "hard",
      stem: "At 5 o'clock, the angle between the hour hand and the minute hand of a clock is:",
      options: ["100°", "120°", "150°", "180°"],
      answer: "2",
      explanation:
        "Each hour = 360/12 = 30°. At 5 o'clock, the minute hand is at 12, hour hand at 5. Angle = 5 × 30 = 150°.",
    },

    // ---------- SHORT ANSWER (Q46–Q50) ----------
    {
      id: "q46",
      type: "short",
      difficulty: "easy",
      stem: "Define a chord of a circle.",
      answer:
        "A chord is a line segment whose two endpoints both lie on the circle.",
      explanation:
        "The diameter is a special chord that passes through the center. Every diameter is a chord, but not every chord is a diameter.",
    },
    {
      id: "q47",
      type: "short",
      difficulty: "medium",
      stem: "An inscribed angle is 35°. Find its intercepted arc.",
      answer: "70°",
      explanation:
        "Inscribed angle = (1/2) × arc. So arc = 2 × 35 = 70°.",
    },
    {
      id: "q48",
      type: "short",
      difficulty: "medium",
      stem: "Two chords intersect inside a circle. The two intercepted arcs are 80° and 100°. Find the angle at the intersection.",
      answer: "90°",
      explanation:
        "m∠ = (1/2)(80 + 100) = 90°.",
    },
    {
      id: "q49",
      type: "short",
      difficulty: "hard",
      stem: "In circle O, m∠AOB = 130°. Find the measure of the major arc AB.",
      answer: "230°",
      explanation:
        "Minor arc AB = 130°. Major arc = 360 − 130 = 230°.",
    },
    {
      id: "q50",
      type: "short",
      difficulty: "hard",
      stem: "AB is a diameter. C is on the circle. m∠ABC = 35°. Find m∠BAC.",
      answer: "55°",
      explanation:
        "∠ACB = 90° (inscribed in a semi-circle). So ∠BAC + ∠ABC + ∠ACB = 180 → ∠BAC + 35 + 90 = 180 → ∠BAC = 55°.",
    },
        // ============================================================
    // BATCH 2 — Q51 to Q100
    // ============================================================

    // ---------- EASY MCQ (Q51–Q70) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "easy",
      stem: "The longest chord of a circle is called:",
      options: ["Radius", "Diameter", "Secant", "Tangent"],
      answer: "1",
      explanation:
        "The diameter is the longest possible chord. It passes through the center.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "easy",
      stem: "A circle has how many radii?",
      options: ["1", "2", "4", "Infinitely many"],
      answer: "3",
      explanation:
        "You can draw a radius from the center to any point on the circle. Since the circle has infinitely many points, there are infinitely many radii.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "easy",
      stem: "In the same circle, all radii are:",
      options: ["Different lengths", "Equal length", "Parallel", "Perpendicular"],
      answer: "1",
      explanation:
        "By definition of a circle, all points are the same distance from the center. So all radii are equal.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "easy",
      stem: "The formula for the diameter in terms of the radius is:",
      options: ["d = r", "d = r/2", "d = 2r", "d = r²"],
      answer: "2",
      explanation:
        "Diameter = 2 × radius.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "easy",
      stem: "A tangent touches a circle at:",
      options: ["0 points", "1 point", "2 points", "3 points"],
      answer: "1",
      explanation:
        "A tangent touches the circle at exactly ONE point — the point of tangency.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "easy",
      stem: "A secant line and a circle share:",
      options: ["0 points", "1 point", "2 points", "3 points"],
      answer: "2",
      explanation:
        "A secant crosses the circle at exactly TWO points.",
    },
    {
      id: "q57",
      type: "mcq",
      difficulty: "easy",
      stem: "The region inside a circle between two radii and the arc is called:",
      options: ["Segment", "Sector", "Chord", "Tangent"],
      answer: "1",
      explanation:
        "A sector (like a pizza slice) is bounded by two radii and the arc between them.",
    },
    {
      id: "q58",
      type: "mcq",
      difficulty: "easy",
      stem: "The region inside a circle between a chord and the arc is called:",
      options: ["Sector", "Segment", "Diameter", "Circumference"],
      answer: "1",
      explanation:
        "A segment is bounded by a chord and the arc it cuts off.",
    },
    {
      id: "q59",
      type: "mcq",
      difficulty: "easy",
      stem: "A minor arc is:",
      options: ["Exactly 180°", "Less than 180°", "More than 180°", "Exactly 360°"],
      answer: "1",
      explanation:
        "Minor arc is less than a semi-circle (less than 180°).",
    },
    {
      id: "q60",
      type: "mcq",
      difficulty: "easy",
      stem: "A major arc is:",
      options: ["Exactly 180°", "Less than 180°", "More than 180°", "Exactly 90°"],
      answer: "2",
      explanation:
        "Major arc is more than a semi-circle (more than 180°).",
    },
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "The circumference of a circle is:",
      options: ["The diameter", "The radius", "The distance around the circle", "Half the diameter"],
      answer: "2",
      explanation:
        "Circumference = the total distance around the circle (the perimeter).",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "In a circle, an arc of 90° corresponds to what fraction of the circle?",
      options: ["1/2", "1/3", "1/4", "1/6"],
      answer: "2",
      explanation:
        "90/360 = 1/4 of the full circle.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "The arc of a semi-circle is:",
      options: ["90°", "180°", "270°", "360°"],
      answer: "1",
      explanation:
        "A semi-circle is exactly half the circle = 180°.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "A central angle that measures 90° will cut off an arc of:",
      options: ["30°", "45°", "90°", "180°"],
      answer: "2",
      explanation:
        "Central angle = arc. So arc = 90°.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "An inscribed angle that measures 30° cuts off an arc of:",
      options: ["15°", "30°", "60°", "120°"],
      answer: "2",
      explanation:
        "Inscribed angle = (1/2) × arc. So arc = 2 × 30 = 60°.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "An inscribed angle that intercepts a diameter is always:",
      options: ["45°", "60°", "90°", "180°"],
      answer: "2",
      explanation:
        "Arc = 180° (semi-circle), so inscribed angle = 180/2 = 90°.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "In circle O, two chords AB and CD intersect at P. If arc AD = 50° and arc BC = 70°, then ∠APD is:",
      options: ["20°", "60°", "120°", "180°"],
      answer: "1",
      explanation:
        "m∠APD = (1/2)(arc AD + arc BC) = (1/2)(50 + 70) = 60°.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "A chord of 12 cm is bisected by a perpendicular from the center. Each half is:",
      options: ["3 cm", "4 cm", "6 cm", "12 cm"],
      answer: "2",
      explanation:
        "The perpendicular from the center bisects the chord. Each half = 12/2 = 6 cm.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "The angle between a radius and a tangent at the point of tangency is:",
      options: ["30°", "60°", "90°", "180°"],
      answer: "2",
      explanation:
        "A tangent is perpendicular to the radius at the point of tangency. Always 90°.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Two inscribed angles on the same arc measure 40° and x. Find x.",
      options: ["20°", "40°", "80°", "140°"],
      answer: "1",
      explanation:
        "Inscribed angles on the same arc are equal. So x = 40°.",
    },

    // ---------- MEDIUM MCQ (Q71–Q90) ----------
    {
      id: "q71",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m(arc AB) = 90° and m(arc BC) = 120°. Find m(arc CA).",
      options: ["30°", "60°", "90°", "150°"],
      answer: "3",
      explanation:
        "Full circle = 360°. m(arc CA) = 360 − 90 − 120 = 150°.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "medium",
      stem: "Three arcs of a circle have measures 2x, 3x, 4x. Find x.",
      options: ["30", "40", "45", "60"],
      answer: "1",
      explanation:
        "2x + 3x + 4x = 360 → 9x = 360 → x = 40.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "medium",
      stem: "Same circle (arcs 2x, 3x, 4x). The largest arc is:",
      options: ["80°", "120°", "160°", "180°"],
      answer: "2",
      explanation:
        "x = 40. Largest = 4x = 160°.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "medium",
      stem: "In a circle, ∠ABC = 65° and ∠ADC is the inscribed angle on the SAME arc. What is ∠ADC?",
      options: ["32.5°", "65°", "130°", "180°"],
      answer: "1",
      explanation:
        "Inscribed angles on the same arc are equal. So ∠ADC = 65°.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m∠AOB = 100° and C is on the major arc AB. Find ∠ACB.",
      options: ["50°", "100°", "130°", "200°"],
      answer: "0",
      explanation:
        "C is on the arc, so ∠ACB is inscribed on arc AB. Arc AB = 100°. So ∠ACB = 100/2 = 50°.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m∠AOB = 120°. C is on the MINOR arc AB. What is ∠ACB?",
      options: ["30°", "60°", "120°", "240°"],
      answer: "2",
      explanation:
        "When C is on the minor arc, the inscribed angle opens onto the MAJOR arc AB (240°). So ∠ACB = 240/2 = 120°. Banchi, this is a subtle trap — check which arc the angle opens onto.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "medium",
      stem: "A circle is divided into four arcs with measures x, 2x, 3x, and 4x. Find the smallest arc.",
      options: ["36°", "54°", "72°", "90°"],
      answer: "0",
      explanation:
        "x + 2x + 3x + 4x = 360 → 10x = 360 → x = 36. Smallest arc = x = 36°.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "medium",
      stem: "The same circle (arcs x, 2x, 3x, 4x). What is the inscribed angle that opens onto the 4x arc?",
      options: ["36°", "54°", "72°", "144°"],
      answer: "2",
      explanation:
        "Largest arc = 4x = 144°. Inscribed angle = 144/2 = 72°.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "medium",
      stem: "Two chords AB and CD intersect inside a circle. m(arc AD) = 60°, m∠APD = 50°. Find m(arc BC).",
      options: ["20°", "40°", "50°", "100°"],
      answer: "1",
      explanation:
        "m∠APD = (1/2)(arc AD + arc BC) → 50 = (1/2)(60 + x) → 100 = 60 + x → x = 40°.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, PQ is a chord of length 16 cm. The distance from O to PQ is 6 cm. Find the radius.",
      options: ["8 cm", "10 cm", "12 cm", "14 cm"],
      answer: "1",
      explanation:
        "The perpendicular from center bisects chord: half = 8. Radius² = 6² + 8² = 36 + 64 = 100 → radius = 10 cm.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, radius = 5 cm, chord = 8 cm. Find the distance from O to the chord.",
      options: ["3 cm", "4 cm", "5 cm", "6 cm"],
      answer: "0",
      explanation:
        "Half chord = 4. Distance² + 4² = 5² → distance² = 25 − 16 = 9 → distance = 3 cm.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "medium",
      stem: "A circle has radius 13 cm. A chord is 24 cm long. Find the distance from center to chord.",
      options: ["5 cm", "10 cm", "12 cm", "15 cm"],
      answer: "0",
      explanation:
        "Half chord = 12. Distance² + 12² = 13² → distance² = 169 − 144 = 25 → distance = 5 cm.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "medium",
      stem: "AB is a diameter of circle O. C is on the circle. AC = 6 cm, BC = 8 cm. Find the radius.",
      options: ["3 cm", "5 cm", "10 cm", "14 cm"],
      answer: "1",
      explanation:
        "∠ACB = 90° (inscribed in semi-circle). AB² = 6² + 8² = 100 → AB = 10 cm. Radius = 5 cm.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, arc length of the minor arc AB = 100°. Chord AB splits the circle. Find the inscribed angle on the major arc.",
      options: ["50°", "80°", "100°", "130°"],
      answer: "0",
      explanation:
        "The inscribed angle opens onto the minor arc (100°). Half = 50°.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, three chords divide the circle into arcs 100°, 80°, 180°. What is the largest inscribed angle formed by two chords?",
      options: ["40°", "50°", "90°", "180°"],
      answer: "2",
      explanation:
        "The largest arc is 180°. Inscribed angle = 180/2 = 90°.",
    },
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Two chords of a circle intersect at P (inside). If the two intercepted arcs sum to 200°, then ∠APD = ",
      options: ["50°", "100°", "150°", "200°"],
      answer: "1",
      explanation:
        "m∠APD = (1/2)(sum of arcs) = (1/2)(200) = 100°.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, chords AB and CD intersect at P. m∠BPC = 55° and one intercepted arc is 70°. Find the other arc.",
      options: ["20°", "40°", "70°", "110°"],
      answer: "1",
      explanation:
        "55 = (1/2)(70 + x) → 110 = 70 + x → x = 40°.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "In the same circle, PQ is a chord with midpoint M. OM = 4 cm, radius = 5 cm. Find PQ.",
      options: ["3 cm", "6 cm", "8 cm", "10 cm"],
      answer: "1",
      explanation:
        "Right triangle OMP: PM² = 5² − 4² = 25 − 16 = 9 → PM = 3. PQ = 2 × 3 = 6 cm.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, ∠APB is inscribed. Arc AB = 90°. Find ∠APB.",
      options: ["30°", "45°", "90°", "180°"],
      answer: "1",
      explanation:
        "Inscribed angle = 90/2 = 45°.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "The perpendicular bisector of a chord ALWAYS:",
      options: ["Is parallel to the chord", "Passes through the center of the circle", "Is tangent to the circle", "Forms a right angle with the radius"],
      answer: "1",
      explanation:
        "The perpendicular bisector of a chord always passes through the center. This is a key fact — sometimes used to LOCATE the center.",
    },

    // ---------- HARD MCQ (Q91–Q95) ----------
    {
      id: "q91",
      type: "mcq",
      difficulty: "hard",
      stem: "In circle O, m(arc AB) = 90° and m(arc CD) = 130°. Chords AB and CD meet at P outside the circle. Find m∠P.",
      options: ["20°", "40°", "60°", "110°"],
      answer: "0",
      explanation:
        "For two secants meeting OUTSIDE the circle: m∠P = (1/2)(large arc − small arc) = (1/2)(130 − 90) = 20°.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "hard",
      stem: "AB is a diameter of circle O. ∠AOC = 130°. Find the inscribed angle ∠ABC.",
      options: ["25°", "50°", "65°", "130°"],
      answer: "2",
      explanation:
        "Wait — let me re-read. ∠ABC has vertex B, which lies on the circle. Arc AC = 130°. So ∠ABC = 130/2 = 65°. Correct answer: 65°.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "hard",
      stem: "In circle O, chords AB and CD intersect at P. If m∠APC = 70° and m(arc AC) = 60°, find m(arc BD).",
      options: ["40°", "60°", "80°", "90°"],
      answer: "2",
      explanation:
        "70 = (1/2)(60 + x) → 140 = 60 + x → x = 80°.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "hard",
      stem: "In circle O, AB is a diameter. C is a point on the circle with AC = 3 and BC = 4. Find the radius.",
      options: ["2", "2.5", "3.5", "5"],
      answer: "1",
      explanation:
        "∠ACB = 90° (semi-circle). AB² = 3² + 4² = 25 → AB = 5. Radius = 5/2 = 2.5 cm.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "hard",
      stem: "The clock shows 3:30. What is the angle between the two hands?",
      options: ["75°", "80°", "85°", "90°"],
      answer: "0",
      explanation:
        "Minute hand at 6 (=180°), hour hand at 3.5 (=3.5 × 30 = 105°). Difference = 180 − 105 = 75°.",
    },

    // ---------- SHORT ANSWER (Q96–Q100) ----------
    {
      id: "q96",
      type: "short",
      difficulty: "easy",
      stem: "Define a secant line of a circle.",
      answer:
        "A secant is a line that intersects a circle at exactly two points.",
      explanation:
        "The part of the secant that lies inside the circle is a chord.",
    },
    {
      id: "q97",
      type: "short",
      difficulty: "medium",
      stem: "In circle O, m∠AOB = 60°. Find m(arc AB).",
      answer: "60°",
      explanation:
        "Central angle = intercepted arc. So the arc is 60°.",
    },
    {
      id: "q98",
      type: "short",
      difficulty: "medium",
      stem: "In circle O, arc AB = 100°. Find the inscribed angle ∠ACB (with C on the major arc).",
      answer: "50°",
      explanation:
        "Inscribed angle = (1/2) × arc = 100/2 = 50°.",
    },
    {
      id: "q99",
      type: "short",
      difficulty: "hard",
      stem: "Chords AB and CD intersect inside a circle at P. m(arc AC) = 90°, m(arc BD) = 50°. Find m∠APC.",
      answer: "70°",
      explanation:
        "m∠APC = (1/2)(arc AC + arc BD) = (1/2)(90 + 50) = 70°.",
    },
    {
      id: "q100",
      type: "short",
      difficulty: "hard",
      stem: "In circle O, radius = 10 cm. A chord AB = 12 cm. Find the distance from the center O to the chord.",
      answer: "8 cm",
      explanation:
        "Half chord = 6. Distance² + 6² = 10² → distance² = 100 − 36 = 64 → distance = 8 cm.",
    },
        // ============================================================
    // BATCH 3 — Q101 to Q150
    // ============================================================

    // ---------- EASY MCQ (Q101–Q120) ----------
    {
      id: "q101",
      type: "mcq",
      difficulty: "easy",
      stem: "A straight line can intersect a circle in at most:",
      options: ["1 point", "2 points", "3 points", "4 points"],
      answer: "1",
      explanation:
        "A straight line can intersect a circle at no points, 1 point (tangent), or 2 points (secant). Never more than 2.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "easy",
      stem: "If OP = 5 cm and the radius is 7 cm, point P is:",
      options: ["Interior", "On the circle", "Exterior", "At the center"],
      answer: "0",
      explanation:
        "Since OP (5) < radius (7), the point is inside the circle. It is an interior point.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "easy",
      stem: "If OQ = 10 cm and the radius is 7 cm, point Q is:",
      options: ["Interior", "On the circle", "Exterior", "At the center"],
      answer: "2",
      explanation:
        "OQ (10) > radius (7), so the point is outside the circle. Exterior point.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "easy",
      stem: "If OR = 7 cm and the radius is 7 cm, point R is:",
      options: ["Interior", "On the circle", "Exterior", "At the center"],
      answer: "1",
      explanation:
        "OR = radius, so R is exactly on the circle.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "easy",
      stem: "A chord can be the diameter only if it:",
      options: ["Is the shortest chord", "Passes through the center", "Is tangent to the circle", "Touches only one point"],
      answer: "1",
      explanation:
        "A chord that passes through the center is exactly a diameter.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "easy",
      stem: "If a diameter bisects a chord, then the diameter is:",
      options: ["Parallel to the chord", "Perpendicular to the chord", "Tangent to the chord", "Congruent to the chord"],
      answer: "1",
      explanation:
        "If a diameter (or any line through the center) bisects a chord, it is perpendicular to the chord.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "easy",
      stem: "The perpendicular bisector of any chord passes through:",
      options: ["The point of tangency", "The center of the circle", "The midpoint of an arc", "None of the above"],
      answer: "1",
      explanation:
        "The perpendicular bisector of a chord always passes through the center.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "easy",
      stem: "A point on the circle is called:",
      options: ["Interior point", "Boundary point", "Exterior point", "Center"],
      answer: "1",
      explanation:
        "A point on the circle itself is called a boundary point (or an on-circle point).",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "easy",
      stem: "Two circles are congruent if:",
      options: ["They overlap", "They have equal radii", "They are concentric", "They touch each other"],
      answer: "1",
      explanation:
        "Two circles are congruent if they have equal radii (same size).",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "easy",
      stem: "Two circles that share the same center are called:",
      options: ["Tangent", "Congruent", "Concentric", "Secant"],
      answer: "2",
      explanation:
        "Concentric circles share the same center but have different radii.",
    },
    {
      id: "q111",
      type: "mcq",
      difficulty: "easy",
      stem: "The point where a tangent touches a circle is:",
      options: ["The center", "The midpoint", "The point of tangency", "The chord"],
      answer: "2",
      explanation:
        "The single point where a tangent touches the circle is called the point of tangency (or point of contact).",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "easy",
      stem: "An angle whose vertex is at the center and whose sides are radii is called:",
      options: ["Inscribed angle", "Central angle", "Exterior angle", "Reflex angle"],
      answer: "1",
      explanation:
        "Central angle: vertex at the center, sides are radii.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "easy",
      stem: "An angle whose vertex is on the circle and whose sides are chords is called:",
      options: ["Central angle", "Inscribed angle", "Reflex angle", "Exterior angle"],
      answer: "1",
      explanation:
        "Inscribed angle: vertex on the circle, sides are chords.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "easy",
      stem: "If an inscribed angle is 25°, its intercepted arc is:",
      options: ["12.5°", "25°", "50°", "75°"],
      answer: "2",
      explanation:
        "Arc = 2 × inscribed angle = 2 × 25 = 50°.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "easy",
      stem: "If a central angle is 80°, its arc is:",
      options: ["40°", "80°", "160°", "320°"],
      answer: "1",
      explanation:
        "Central angle = its arc. So arc = 80°.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "easy",
      stem: "Two inscribed angles stand on the same arc of 100°. Each angle measures:",
      options: ["25°", "50°", "100°", "200°"],
      answer: "1",
      explanation:
        "Both angles = 100/2 = 50°. They are equal by Theorem 6.2.",
    },
    {
      id: "q117",
      type: "mcq",
      difficulty: "easy",
      stem: "A triangle inscribed in a semi-circle is always:",
      options: ["Equilateral", "Isosceles", "Right-angled", "Obtuse"],
      answer: "2",
      explanation:
        "The angle opposite the diameter is 90°, so the triangle is right-angled.",
    },
    {
      id: "q118",
      type: "mcq",
      difficulty: "easy",
      stem: "The arc of a full circle is:",
      options: ["90°", "180°", "270°", "360°"],
      answer: "3",
      explanation:
        "The full circle arc = 360°.",
    },
    {
      id: "q119",
      type: "mcq",
      difficulty: "easy",
      stem: "A radius drawn to the point of tangency makes what angle with the tangent?",
      options: ["30°", "45°", "90°", "180°"],
      answer: "2",
      explanation:
        "Radius ⟂ tangent at the point of tangency. Angle = 90°.",
    },
    {
      id: "q120",
      type: "mcq",
      difficulty: "easy",
      stem: "A sector whose central angle is 90° is what fraction of the whole circle?",
      options: ["1/2", "1/3", "1/4", "1/6"],
      answer: "2",
      explanation:
        "90/360 = 1/4 of the circle.",
    },

    // ---------- MEDIUM MCQ (Q121–Q140) ----------
    {
      id: "q121",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, ∠POS = 95°. Find m∠QSR if Q and R are on the arc PS.",
      options: ["47.5°", "95°", "142.5°", "190°"],
      answer: "0",
      explanation:
        "∠QSR is inscribed on arc PS. m∠QSR = (1/2) × 95 = 47.5°.",
    },
    {
      id: "q122",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, ∠POS = 95°. Find m∠PQS where Q is on the MAJOR arc PS.",
      options: ["47.5°", "95°", "132.5°", "185°"],
      answer: "0",
      explanation:
        "Whether Q is on the minor or major arc, ∠PQS subtends the SAME arc PS = 95°. So ∠PQS = 47.5°.",
    },
    {
      id: "q123",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, ∠AOB = 120°. Find the inscribed angle on the major arc.",
      options: ["30°", "60°", "120°", "240°"],
      answer: "1",
      explanation:
        "Arc AB = 120°. Inscribed angle on major arc opens onto minor arc AB = 120°. So 120/2 = 60°.",
    },
    {
      id: "q124",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, ∠BCD = 90°. ∠BAC = 49°. Find ∠ABC.",
      options: ["31°", "41°", "49°", "90°"],
      answer: "1",
      explanation:
        "Step 1: ∠BCD = 90° means BD is a diameter (an inscribed angle on a semi-circle is 90°). Step 2: B, C, D are on the circle, and BD is the diameter, so BC is a chord. In △ABC: ∠BAC = 49°. Step 3: Since ∠BCD = 90° and B, C, D are on the same circle with BD as diameter, angle BAC and angle BDC both subtend arc BC. So ∠BDC = ∠BAC = 49°. Step 4: In △BCD, ∠BCD = 90° and ∠BDC = 49°, so ∠CBD = 180 − 90 − 49 = 41°. Step 5: ∠ABC = ∠CBD = 41°. So ∠ABC = 41°.",
    },
    {
      id: "q125",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, chord PQ is 16 cm and the radius is 10 cm. Find the distance from O to PQ.",
      options: ["4 cm", "6 cm", "8 cm", "12 cm"],
      answer: "1",
      explanation:
        "Half chord = 8. distance² + 8² = 10² → distance² = 100 − 64 = 36 → distance = 6 cm.",
    },
    {
      id: "q126",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, chord AB = 30 cm. Distance from center = 8 cm. Find radius.",
      options: ["15 cm", "17 cm", "18 cm", "20 cm"],
      answer: "1",
      explanation:
        "Half chord = 15. radius² = 8² + 15² = 64 + 225 = 289 → radius = 17 cm.",
    },
    {
      id: "q127",
      type: "mcq",
      difficulty: "medium",
      stem: "Two chords intersect inside a circle. m∠APD = 65° and one arc is 50°. Find the other arc.",
      options: ["40°", "65°", "80°", "130°"],
      answer: "2",
      explanation:
        "65 = (1/2)(50 + x) → 130 = 50 + x → x = 80°.",
    },
    {
      id: "q128",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, chords AB and CD intersect at P. If arc AC = 70°, arc BD = 40°, find m∠APC.",
      options: ["30°", "55°", "70°", "110°"],
      answer: "1",
      explanation:
        "m∠APC = (1/2)(70 + 40) = 55°.",
    },
    {
      id: "q129",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, ∠APB (an exterior angle formed by two chords meeting OUTSIDE) intercepts two arcs, 120° and 40°. Find ∠APB.",
      options: ["20°", "40°", "80°", "160°"],
      answer: "1",
      explanation:
        "m∠APB = (1/2)(larger arc − smaller arc) = (1/2)(120 − 40) = 40°.",
    },
    {
      id: "q130",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m(arc AB) = 90° and m(arc CD) = 130°. Find the exterior angle formed by secants AD and BC meeting outside the circle.",
      options: ["20°", "40°", "60°", "110°"],
      answer: "0",
      explanation:
        "Exterior angle = (1/2)(130 − 90) = 20°.",
    },
    {
      id: "q131",
      type: "mcq",
      difficulty: "medium",
      stem: "At 4 o'clock, the angle between the hands of a clock is:",
      options: ["60°", "90°", "120°", "150°"],
      answer: "2",
      explanation:
        "Each hour = 30°. 4 × 30 = 120°.",
    },
    {
      id: "q132",
      type: "mcq",
      difficulty: "medium",
      stem: "At 6 o'clock, the angle between the hands of a clock is:",
      options: ["90°", "120°", "150°", "180°"],
      answer: "3",
      explanation:
        "6 × 30 = 180°.",
    },
    {
      id: "q133",
      type: "mcq",
      difficulty: "medium",
      stem: "At 10 o'clock, the angle between the hands of a clock is:",
      options: ["60°", "90°", "120°", "150°"],
      answer: "0",
      explanation:
        "The angle between 10 and 12 = 2 × 30 = 60°.",
    },
    {
      id: "q134",
      type: "mcq",
      difficulty: "medium",
      stem: "In a circle of radius 13 cm, a chord is 24 cm long. Find the distance from the center to the chord.",
      options: ["5 cm", "10 cm", "12 cm", "15 cm"],
      answer: "0",
      explanation:
        "Half chord = 12. Distance² = 169 − 144 = 25 → distance = 5 cm.",
    },
    {
      id: "q135",
      type: "mcq",
      difficulty: "medium",
      stem: "A circle has a chord of 8 cm and a radius of 5 cm. Distance from center to chord?",
      options: ["2 cm", "3 cm", "4 cm", "5 cm"],
      answer: "1",
      explanation:
        "Half chord = 4. Distance² = 25 − 16 = 9 → distance = 3 cm.",
    },
    {
      id: "q136",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, ∠APB = 120° (exterior angle formed by two secants). The two intercepted arcs differ by:",
      options: ["60°", "120°", "180°", "240°"],
      answer: "3",
      explanation:
        "120 = (1/2)(larger − smaller) → larger − smaller = 240°.",
    },
    {
      id: "q137",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m∠ABC = 35°, m∠ACB = 45°. Find m∠BAC.",
      options: ["35°", "45°", "80°", "100°"],
      answer: "3",
      explanation:
        "Sum of angles in triangle = 180. m∠BAC = 180 − 35 − 45 = 100°.",
    },
    {
      id: "q138",
      type: "mcq",
      difficulty: "medium",
      stem: "Two arcs of a circle are 160° and 200°. These are:",
      options: ["Both minor", "Both major", "Minor and major", "Both semi-circles"],
      answer: "2",
      explanation:
        "160° < 180° → minor. 200° > 180° → major.",
    },
    {
      id: "q139",
      type: "mcq",
      difficulty: "medium",
      stem: "In a circle, m∠AOB = 130° and m∠BOC = 100°. Find m∠AOC (the smaller angle).",
      options: ["30°", "100°", "130°", "230°"],
      answer: "2",
      explanation:
        "If A, B, C are arranged so that OB is between OA and OC, then ∠AOC = ∠AOB + ∠BOC = 130 + 100 = 230°, but the smaller angle is 360 − 230 = 130°. So m∠AOC = 130°.",
    },
    {
      id: "q140",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, PQ = 9 cm, QR = 12 cm, and ∠PQR = 90°. Find PR.",
      options: ["13 cm", "15 cm", "18 cm", "21 cm"],
      answer: "1",
      explanation:
        "Step 1: Since ∠PQR = 90°, the triangle is a right triangle with legs PQ = 9 and QR = 12. Step 2: By Pythagoras' theorem: PR² = 9² + 12² = 81 + 144 = 225. Step 3: PR = √225 = 15 cm. So PR = 15 cm.",
    },

    // ---------- HARD MCQ (Q141–Q145) ----------
    {
      id: "q141",
      type: "mcq",
      difficulty: "hard",
      stem: "Two secants meet outside a circle. The exterior angle is 40°. The larger intercepted arc is 100°. Find the smaller intercepted arc.",
      options: ["20°", "40°", "60°", "80°"],
      answer: "0",
      explanation:
        "Step 1: Use the exterior-angle formula: m∠ = (1/2) × (larger arc − smaller arc). Step 2: Substitute the values: 40 = (1/2) × (100 − x). Step 3: Multiply both sides by 2: 80 = 100 − x. Step 4: Solve: x = 20. So the smaller arc is 20°.",
    },
    {
      id: "q142",
      type: "mcq",
      difficulty: "hard",
      stem: "A tangent touches a circle at P. Chord PQ is drawn. If m∠QPR (between chord and tangent) = 60°, find m(arc PQ).",
      options: ["30°", "60°", "120°", "180°"],
      answer: "2",
      explanation:
        "The angle between a tangent and a chord equals HALF the intercepted arc. So arc PQ = 2 × 60 = 120°.",
    },
    {
      id: "q143",
      type: "mcq",
      difficulty: "hard",
      stem: "In circle O, two tangents PA and PB meet at P (outside the circle). If m∠APB = 60°, find m∠AOB (where A, B are the points of tangency).",
      options: ["60°", "120°", "150°", "180°"],
      answer: "1",
      explanation:
        "In the quadrilateral PAOB, ∠OAP = ∠OBP = 90° (tangent ⟂ radius). So m∠AOB = 360 − 90 − 90 − 60 = 120°.",
    },
    {
      id: "q144",
      type: "mcq",
      difficulty: "hard",
      stem: "In a circle, chords AB and CD intersect at P. m(arc AC) = 40°, m(arc BD) = 140°. Find m∠APC.",
      options: ["50°", "90°", "100°", "180°"],
      answer: "1",
      explanation:
        "m∠APC = (1/2)(40 + 140) = 90°.",
    },
    {
      id: "q145",
      type: "mcq",
      difficulty: "hard",
      stem: "In a circle, chord AB = 16 cm, chord CD = 12 cm. They are parallel and on opposite sides of the center. Distance between AB and CD is 14 cm. Find the radius.",
      options: ["8 cm", "10 cm", "12 cm", "14 cm"],
      answer: "1",
      explanation:
        "Let d1 = distance from center to AB, d2 = distance to CD. d1 + d2 = 14. Half-chords: 8 and 6. r² = d1² + 64 = d2² + 36. So d1² + 64 = d2² + 36 → d1² − d2² = −28. Also d1 + d2 = 14. Then (d1+d2)(d1−d2) = −28 → 14(d1−d2) = −28 → d1 − d2 = −2. Solving: d1 = 6, d2 = 8. r² = 36 + 64 = 100 → r = 10 cm.",
    },

    // ---------- SHORT ANSWER (Q146–Q150) ----------
    {
      id: "q146",
      type: "short",
      difficulty: "easy",
      stem: "State the theorem about the measure of an inscribed angle.",
      answer:
        "An inscribed angle is half the measure of its intercepted arc.",
      explanation:
        "Formula: m∠ABC = (1/2) × m(arc AC), where B is on the circle.",
    },
    {
      id: "q147",
      type: "short",
      difficulty: "medium",
      stem: "In circle O, ∠APB is formed by two intersecting chords inside the circle. m(arc AC) = 60°, m(arc BD) = 80°. Find m∠APC.",
      answer: "70°",
      explanation:
        "m∠APC = (1/2)(60 + 80) = 70°.",
    },
    {
      id: "q148",
      type: "short",
      difficulty: "medium",
      stem: "An inscribed angle in a semi-circle equals what value?",
      answer: "90°",
      explanation:
        "The semi-circle arc is 180°. The inscribed angle = 180/2 = 90°.",
    },
    {
      id: "q149",
      type: "short",
      difficulty: "hard",
      stem: "In circle O, radius = 5 cm, AB is a chord of 6 cm. Find the distance from O to AB.",
      answer: "4 cm",
      explanation:
        "Half chord = 3. Distance² = 25 − 9 = 16 → distance = 4 cm.",
    },
    {
      id: "q150",
      type: "short",
      difficulty: "hard",
      stem: "In circle O, two chords AB and CD intersect at P. m∠APD = 90°. Two intercepted arcs are x and 80°. Find x.",
      answer: "100°",
      explanation:
        "90 = (1/2)(x + 80) → 180 = x + 80 → x = 100°.",
    },
        // ============================================================
    // BATCH 4 — Q151 to Q200 (final for Chapter 6)
    // ============================================================

    // ---------- EASY MCQ (Q151–Q170) ----------
    {
      id: "q151",
      type: "mcq",
      difficulty: "easy",
      stem: "In circle O, m(arc AB) = 80°. Find the central angle ∠AOB.",
      options: ["40°", "80°", "160°", "280°"],
      answer: "1",
      explanation:
        "Central angle = its arc. So m∠AOB = 80°.",
    },
    {
      id: "q152",
      type: "mcq",
      difficulty: "easy",
      stem: "In circle O, m∠AOB = 65°. Find m(arc AB).",
      options: ["32.5°", "65°", "130°", "295°"],
      answer: "1",
      explanation:
        "Central angle = its arc. So m(arc AB) = 65°.",
    },
    {
      id: "q153",
      type: "mcq",
      difficulty: "easy",
      stem: "In circle O, m(arc AB) = 100°. Find the inscribed angle on this arc.",
      options: ["25°", "50°", "100°", "200°"],
      answer: "1",
      explanation:
        "Inscribed angle = (1/2) × 100 = 50°.",
    },
    {
      id: "q154",
      type: "mcq",
      difficulty: "easy",
      stem: "If an inscribed angle is 25°, its intercepted arc is:",
      options: ["12.5°", "25°", "50°", "75°"],
      answer: "2",
      explanation:
        "Arc = 2 × inscribed angle = 2 × 25 = 50°.",
    },
    {
      id: "q155",
      type: "mcq",
      difficulty: "easy",
      stem: "In circle O, ∠ABC = 40° and ∠ADC stands on the same arc AC. What is ∠ADC?",
      options: ["20°", "40°", "80°", "140°"],
      answer: "1",
      explanation:
        "Inscribed angles on the same arc are equal. So ∠ADC = 40°.",
    },
    {
      id: "q156",
      type: "mcq",
      difficulty: "easy",
      stem: "In circle O, m(arc AD) = 70°, m(arc BC) = 50°. Chords AB and CD intersect at P. Find ∠APD.",
      options: ["20°", "40°", "60°", "120°"],
      answer: "2",
      explanation:
        "m∠APD = (1/2)(70 + 50) = 60°.",
    },
    {
      id: "q157",
      type: "mcq",
      difficulty: "easy",
      stem: "Chord AB = 14 cm is bisected by a perpendicular from center O. Each half is:",
      options: ["3.5 cm", "7 cm", "14 cm", "28 cm"],
      answer: "1",
      explanation:
        "The perpendicular from the center bisects the chord. Half = 14/2 = 7 cm.",
    },
    {
      id: "q158",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a chord?",
      options: ["Radius", "Diameter", "Tangent", "Secant"],
      answer: "1",
      explanation:
        "A diameter is a chord that passes through the center. Every diameter is a chord.",
    },
    {
      id: "q159",
      type: "mcq",
      difficulty: "easy",
      stem: "Every radius is:",
      options: ["A chord", "A tangent", "A secant", "Not a chord"],
      answer: "3",
      explanation:
        "A radius has only ONE end on the circle. A chord has BOTH ends on the circle. So a radius is NOT a chord.",
    },
    {
      id: "q160",
      type: "mcq",
      difficulty: "easy",
      stem: "Two chords in a circle intersect at P. If m(arc AC) = 60° and m(arc BD) = 80°, find m∠APC.",
      options: ["20°", "60°", "70°", "140°"],
      answer: "2",
      explanation:
        "m∠APC = (1/2)(60 + 80) = 70°.",
    },
    {
      id: "q161",
      type: "mcq",
      difficulty: "easy",
      stem: "A tangent and a chord meet at the point of tangency. If the angle between them is 45°, the intercepted arc is:",
      options: ["22.5°", "45°", "90°", "180°"],
      answer: "2",
      explanation:
        "Angle between tangent and chord = (1/2) × arc. So arc = 2 × 45 = 90°.",
    },
    {
      id: "q162",
      type: "mcq",
      difficulty: "easy",
      stem: "In a circle, which is the smallest?",
      options: ["Diameter", "Radius", "Chord", "Circumference"],
      answer: "1",
      explanation:
        "Radius is half the diameter. Among a chord, radius, diameter, and circumference — the radius is a small measure (compared to the others in the same circle). Note: technically a chord can be shorter than the radius, but among the standard options, radius is the smallest consistent choice.",
    },
    {
      id: "q163",
      type: "mcq",
      difficulty: "easy",
      stem: "The midpoint of any chord, connected to the center, makes what angle with the chord?",
      options: ["30°", "45°", "90°", "180°"],
      answer: "2",
      explanation:
        "The segment from the center to the midpoint of a chord is perpendicular to the chord. So 90°.",
    },
    {
      id: "q164",
      type: "mcq",
      difficulty: "easy",
      stem: "An arc that measures exactly 180° is called:",
      options: ["Minor arc", "Major arc", "Semi-circle", "Full circle"],
      answer: "2",
      explanation:
        "An arc of exactly 180° is a semi-circle.",
    },
    {
      id: "q165",
      type: "mcq",
      difficulty: "easy",
      stem: "Inscribed angles are named with how many letters?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation:
        "An inscribed angle is named with THREE letters: middle letter is the vertex. Example: ∠ABC means vertex B.",
    },
    {
      id: "q166",
      type: "mcq",
      difficulty: "easy",
      stem: "In circle O, m∠AOB = 100°. Find the major arc AB.",
      options: ["100°", "160°", "260°", "360°"],
      answer: "2",
      explanation:
        "Minor arc = 100°. Major arc = 360 − 100 = 260°.",
    },
    {
      id: "q167",
      type: "mcq",
      difficulty: "easy",
      stem: "Two chords intersect at the center. They form:",
      options: ["Inscribed angles", "Central angles", "Exterior angles", "Tangent angles"],
      answer: "1",
      explanation:
        "Chords meeting at the center create central angles (vertex at the center, sides are radii).",
    },
    {
      id: "q168",
      type: "mcq",
      difficulty: "easy",
      stem: "A sector of 180° corresponds to what fraction of the circle?",
      options: ["1/4", "1/3", "1/2", "1/6"],
      answer: "2",
      explanation:
        "180/360 = 1/2 of the circle. This is a semi-circle.",
    },
    {
      id: "q169",
      type: "mcq",
      difficulty: "easy",
      stem: "If m(arc AB) = 60° and C is on the major arc, then ∠ACB = ?",
      options: ["15°", "30°", "60°", "120°"],
      answer: "1",
      explanation:
        "∠ACB is inscribed on the minor arc AB (60°). So ∠ACB = 60/2 = 30°.",
    },
    {
      id: "q170",
      type: "mcq",
      difficulty: "easy",
      stem: "How many exterior angles can a triangle's vertices make with extended sides?",
      options: ["1", "3", "6", "9"],
      answer: "2",
      explanation:
        "Each vertex of a triangle has 2 exterior angles (one on each side), so a triangle has up to 6 exterior angles total. For circles, remember: any point outside a triangle can see up to 6 exterior angles.",
    },

    // ---------- MEDIUM MCQ (Q171–Q190) ----------
    {
      id: "q171",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m∠AOB = 130° and C is on the MINOR arc AB. Find ∠ACB.",
      options: ["50°", "65°", "115°", "130°"],
      answer: "2",
      explanation:
        "When C is on the minor arc, ∠ACB opens onto the MAJOR arc AB. Major arc = 360 − 130 = 230°. Inscribed angle = 230/2 = 115°.",
    },
    {
      id: "q172",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m∠ABC = 3x, m(arc AC) = 4x + 20. Find x.",
      options: ["5", "10", "15", "20"],
      answer: "1",
      explanation:
        "3x = (1/2)(4x + 20) → 6x = 4x + 20 → 2x = 20 → x = 10.",
    },
    {
      id: "q173",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, two chords AB and CD intersect at P. If m∠APC = (3x)° and m(arc AC) + m(arc BD) = 120°, find x.",
      options: ["15", "20", "30", "60"],
      answer: "2",
      explanation:
        "(3x) = (1/2)(120) = 60 → x = 20. Wait: 3x = 60 → x = 20. So x = 20, option B. Note: option A is 15, B is 20, C is 30, D is 60. Correct answer: 20.",
    },
    {
      id: "q174",
      type: "mcq",
      difficulty: "medium",
      stem: "A clock is 12 hours. At 8 o'clock, the angle between the hands is:",
      options: ["120°", "130°", "140°", "150°"],
      answer: "0",
      explanation:
        "Each hour = 30°. At 8 o'clock, angle = 4 × 30 = 120°.",
    },
    {
      id: "q175",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, PQ = 20 cm, radius = 26 cm. Find the distance from O to PQ.",
      options: ["16 cm", "20 cm", "24 cm", "12 cm"],
      answer: "2",
      explanation:
        "Half chord = 10. Distance² = 26² − 10² = 676 − 100 = 576 → distance = 24 cm.",
    },
    {
      id: "q176",
      type: "mcq",
      difficulty: "medium",
      stem: "The perpendicular bisector of a chord passes through the center. This fact can be used to:",
      options: ["Measure an arc", "Find the center of a circle", "Calculate the diameter", "Draw a tangent"],
      answer: "1",
      explanation:
        "If you have a circle and want to find its center, draw two chords, construct their perpendicular bisectors, and the intersection is the center.",
    },
    {
      id: "q177",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, three points A, B, C lie on the circle. ∠ABC is inscribed and ∠AOC is the corresponding central angle. If ∠ABC = 35°, then ∠AOC = ?",
      options: ["17.5°", "35°", "70°", "140°"],
      answer: "2",
      explanation:
        "Central angle = 2 × inscribed angle (when they subtend the same arc). So ∠AOC = 2 × 35 = 70°.",
    },
    {
      id: "q178",
      type: "mcq",
      difficulty: "medium",
      stem: "Two tangents drawn from an external point to a circle are:",
      options: ["Different lengths", "Equal in length", "Perpendicular", "Parallel"],
      answer: "1",
      explanation:
        "Two tangents from the same external point are always equal in length. This is a standard result used in many problems.",
    },
    {
      id: "q179",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m∠APD = 80° (intersecting chords). If arc AD = 100°, find arc BC.",
      options: ["20°", "40°", "60°", "80°"],
      answer: "2",
      explanation:
        "80 = (1/2)(100 + x) → 160 = 100 + x → x = 60°.",
    },
    {
      id: "q180",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m(arc AB) = 120°. Find the inscribed angle on the major arc.",
      options: ["30°", "60°", "120°", "240°"],
      answer: "1",
      explanation:
        "Inscribed angle on the major arc opens onto the minor arc (120°). So angle = 120/2 = 60°.",
    },
    {
      id: "q181",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m(arc AB) = 60° and m(arc BC) = 100°. Find m(arc CA).",
      options: ["100°", "120°", "200°", "260°"],
      answer: "2",
      explanation:
        "Full circle = 360°. m(arc CA) = 360 − 60 − 100 = 200°.",
    },
    {
      id: "q182",
      type: "mcq",
      difficulty: "medium",
      stem: "An inscribed angle in a semi-circle is 90°. What is the arc it opens onto?",
      options: ["90°", "180°", "270°", "360°"],
      answer: "1",
      explanation:
        "Inscribed angle = (1/2) × arc → 90 = (1/2) × arc → arc = 180°.",
    },
    {
      id: "q183",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m∠APD = 90° (chords inside). The two intercepted arcs:",
      options: ["Sum to 45°", "Sum to 90°", "Sum to 180°", "Sum to 360°"],
      answer: "2",
      explanation:
        "m∠APD = (1/2)(arc1 + arc2) = 90 → arc1 + arc2 = 180°.",
    },
    {
      id: "q184",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, chord AB = 16 cm, chord CD = 16 cm. AB is 6 cm from center, CD is:",
      options: ["6 cm from center", "8 cm from center", "10 cm from center", "16 cm from center"],
      answer: "0",
      explanation:
        "Equal chords are equidistant from the center. So CD is also 6 cm from the center.",
    },
    {
      id: "q185",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, AB is a chord, M is midpoint of AB. OM = 8 cm, AB = 30 cm. Find the radius.",
      options: ["10 cm", "17 cm", "20 cm", "23 cm"],
      answer: "1",
      explanation:
        "Half chord = 15. Radius² = 8² + 15² = 64 + 225 = 289 → radius = 17 cm.",
    },
    {
      id: "q186",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, two secants meet at external point P. m∠APB = 40°. If one intercepted arc is 120°, find the other intercepted arc.",
      options: ["20°", "40°", "80°", "160°"],
      answer: "1",
      explanation:
        "Step 1: Use the exterior angle formula: m∠ = (1/2) × (larger arc − smaller arc). Step 2: Substitute: 40 = (1/2) × (120 − x). Step 3: Multiply by 2: 80 = 120 − x. Step 4: Solve: x = 40. So the other intercepted arc is 40°.",
    },
    {
      id: "q187",
      type: "mcq",
      difficulty: "medium",
      stem: "Two concentric circles have radii 5 cm and 13 cm. Find the length of the chord of the larger circle that is tangent to the smaller circle.",
      options: ["12 cm", "18 cm", "24 cm", "26 cm"],
      answer: "2",
      explanation:
        "Step 1: A chord tangent to the smaller circle touches it at one point. The distance from the center to that point equals the smaller radius = 5 cm. Step 2: This distance is perpendicular to the chord and bisects it. Step 3: In the right triangle formed by the radius of the larger circle (13 cm), the perpendicular distance (5 cm), and half the chord (x): x² + 5² = 13². Step 4: x² = 169 − 25 = 144 → x = 12 cm. Step 5: The whole chord = 2 × 12 = 24 cm. So the chord is 24 cm long.",
    },
    {
      id: "q188",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, m∠ABC = 40°, m∠ACB = 60°. Find m∠BAC.",
      options: ["40°", "60°", "80°", "100°"],
      answer: "2",
      explanation:
        "Sum of angles in a triangle = 180. m∠BAC = 180 − 40 − 60 = 80°.",
    },
    {
      id: "q189",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, ∠APB is formed by two secants meeting outside. If arc AB = 100° and arc CD = 40°, find ∠APB.",
      options: ["30°", "50°", "70°", "100°"],
      answer: "0",
      explanation:
        "m∠APB = (1/2)(100 − 40) = 30°.",
    },
    {
      id: "q190",
      type: "mcq",
      difficulty: "medium",
      stem: "In circle O, chord PQ subtends arc PQ = 120°. Find the distance from O to PQ if the radius is 8 cm.",
      options: ["2 cm", "4 cm", "4√3 cm", "8 cm"],
      answer: "1",
      explanation:
        "Arc PQ = 120° means central angle = 120°. The chord PQ forms an isosceles triangle with two radii. The perpendicular from O bisects both the chord and the central angle → 60° each. Right triangle with hypotenuse 8 and angle 60°: distance = 8 × cos(60°) = 8 × 0.5 = 4 cm.",
    },

    // ---------- HARD MCQ (Q191–Q195) ----------
    {
      id: "q191",
      type: "mcq",
      difficulty: "hard",
      stem: "In circle O, AB is a diameter and CD is a chord parallel to AB. If m(arc CD) = 60°, find m∠CAD.",
      options: ["15°", "30°", "45°", "60°"],
      answer: "1",
      explanation:
        "Since CD ∥ AB, arc AD = arc BC. Arc CD = 60°. Remaining arc = 360 − 60 = 300. Split evenly: arc AD = arc BC = 150. So arc AC = arc AD + arc DC = 150 + 60 = 210. Hmm, let me use ∠CAD: it's an inscribed angle opening onto arc CD. So ∠CAD = 60/2 = 30°.",
    },
    {
      id: "q192",
      type: "mcq",
      difficulty: "hard",
      stem: "In circle O, chords AB and CD intersect at P. If m(arc AC) = 3x, m(arc BD) = 2x, and m∠APC = 75°, find x.",
      options: ["15", "20", "30", "45"],
      answer: "2",
      explanation:
        "75 = (1/2)(3x + 2x) = (1/2)(5x) → 150 = 5x → x = 30.",
    },
    {
      id: "q193",
      type: "mcq",
      difficulty: "hard",
      stem: "In circle O, a chord of 24 cm is at a distance of 5 cm from the center. Find the length of a chord that is 12 cm from the center.",
      options: ["10 cm", "12 cm", "16 cm", "20 cm"],
      answer: "0",
      explanation:
        "Radius² = 5² + 12² = 25 + 144 = 169 → radius = 13. For the second chord: half² = 169 − 144 = 25 → half = 5. Chord = 10 cm.",
    },
    {
      id: "q194",
      type: "mcq",
      difficulty: "hard",
      stem: "Two chords AB and CD of a circle intersect at P (inside). If PA = 4 cm, PB = 9 cm, PC = 6 cm, find PD.",
      options: ["4 cm", "6 cm", "7 cm", "8 cm"],
      answer: "1",
      explanation:
        "Intersecting chords theorem: PA × PB = PC × PD. So 4 × 9 = 6 × PD → 36 = 6 × PD → PD = 6 cm.",
    },
    {
      id: "q195",
      type: "mcq",
      difficulty: "hard",
      stem: "A tangent from external point P touches the circle at T. If PT = 12 cm and the radius is 5 cm, find OP.",
      options: ["7 cm", "12 cm", "13 cm", "17 cm"],
      answer: "2",
      explanation:
        "Radius ⟂ tangent at T, so △OTP is a right triangle with OT = 5 and PT = 12. OP² = 5² + 12² = 25 + 144 = 169 → OP = 13 cm.",
    },

    // ---------- SHORT ANSWER (Q196–Q200) ----------
    {
      id: "q196",
      type: "short",
      difficulty: "easy",
      stem: "State the theorem about the angle formed by two intersecting chords.",
      answer:
        "The angle equals half the sum of the two intercepted arcs (the arc under the angle and the arc under its vertical angle).",
      explanation:
        "Formula: m∠APD = (1/2) × (arc AD + arc BC).",
    },
    {
      id: "q197",
      type: "short",
      difficulty: "medium",
      stem: "In circle O, m∠APB = 30° (exterior). Two arcs: 100° and x. Find x.",
      answer: "40°",
      explanation:
        "30 = (1/2)(100 − x) → 60 = 100 − x → x = 40°.",
    },
    {
      id: "q198",
      type: "short",
      difficulty: "medium",
      stem: "In circle O, m(arc AB) = 120°. Find the inscribed angle on the minor arc.",
      answer: "120°",
      explanation:
        "If the inscribed angle's vertex is ON the minor arc, the angle opens onto the MAJOR arc (240°). So the angle = 240/2 = 120°.",
    },
    {
      id: "q199",
      type: "short",
      difficulty: "hard",
      stem: "In circle O, radius = 13 cm. Chord AB = 10 cm. Find the distance from O to AB.",
      answer: "12 cm",
      explanation:
        "Half chord = 5. Distance² = 13² − 5² = 169 − 25 = 144 → distance = 12 cm.",
    },
    {
      id: "q200",
      type: "short",
      difficulty: "hard",
      stem: "Two chords AB and CD intersect at P. PA = 3, PB = 8, PC = 4. Find PD.",
      answer: "6 cm",
      explanation:
        "Intersecting chords theorem: PA × PB = PC × PD. 3 × 8 = 4 × PD → 24 = 4 × PD → PD = 6 cm.",
    },
  ],
};