import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 PHYSICS — UNIT 1
// VECTOR QUANTITIES
// Source: Grade 10 Physics Student Textbook (pp. 1–19)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, formula boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10PhysicsCh1: Chapter = {
  id: "ch1",
  number: 1,
  title: "Vector Quantities",
  titleAm: "የቬክተር መጠኖች",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is not about memorising words. It is about learning to THINK in vectors — magnitude + direction — and to write answers that show units, direction, and reasoning. Follow these four passes for every section.",
      bodyAm:
        "አባቱ፣ ይህ ክፍል ቃላትን መያዝ ብቻ አይደለም። በቬክተር ማሰብ መማር ነው — መጠንና አቅጣጫ — እና አሃድ፣ አቅጣጫና ምክንያት የሚያሳይ መልስ መጻፍ።",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand",
          titleAm: "ደረጃ 1 · መረዳት",
          body:
            "Read each section and explain the key idea aloud without looking. Draw vectors rather than memorising words alone. If you cannot explain it out loud, you have not understood it yet.",
          bodyAm:
            "እያንዳንዱን ክፍል አንብብና ዋናውን ሐሳብ ያለ ማስታወሻ በአፍ አስረዳ። ቬክተሮችን ሳል።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Practise",
          titleAm: "ደረጃ 2 · መለማመድ",
          body:
            "Work examples on paper. Always include (1) units, (2) direction, (3) a diagram when useful, and (4) a final reasonableness check.",
          bodyAm:
            "ምሳሌዎችን በወረቀት ሥራ። ሁልጊዜ (1) አሃድ፣ (2) አቅጣጫ፣ (3) ስዕል፣ (4) የመጨረሻ ቼክ አካትት።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Retrieve",
          titleAm: "ደረጃ 3 · ማስታወስ",
          body:
            "Close the notes and reproduce from memory: definitions of scalar and vector, the three addition rules, the component formulas, and the magnitude/direction formulas.",
          bodyAm:
            "ማስታወሻዎቹን ዘግተህ ከትውስታ አውጣ፡ ስካላርና ቬክተር ትርጓሜ፣ ሦስቱ የመደመር ደንቦች፣ የክፍል ቀመሮች።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Diagnose",
          titleAm: "ደረጃ 4 · መመርመር",
          body:
            "Take the quiz, review every mistake, and repeat missed questions until you can explain WHY the correct option is correct — not just recognise it.",
          bodyAm:
            "ፈተናውን ውሰድ፣ ስህተት ሁሉንም ገምግም፣ ትክክለኛው ምርጫ ለምን ትክክል እንደሆነ እስክትገልጽ ድረግ ድገም።",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard — before you submit",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• A numerical answer WITHOUT direction is incomplete for a vector question.\n" +
            "• A direction WITHOUT a reference axis ('30° from what?') is ambiguous.\n" +
            "• ALWAYS include units.\n" +
            "• State which axis the angle is measured from.",
          bodyAm:
            "• ያለ አቅጣጫ የቁጥር መልስ ለቬክተር ጥያቄ ያልተሟላ ነው።\n" +
            "• ያለ ማጣቀሻ ዘንግ አቅጣጫ አሻሚ ነው።\n" +
            "• ሁልጊዜ አሃድ አካትት።\n" +
            "• አንግሉ ከየትኛው ዘንግ እንደሚለካ ግለጽ።",
        },
      ],
    },

    // ============================================================
    // 1.1 SCALARS AND VECTORS
    // ============================================================
    {
      id: "n1",
      title: "1.1 Scalars and Vectors",
      titleAm: "1.1 ስካላርና ቬክተር",
      body:
        "A PHYSICAL QUANTITY is a measurable property expressed with a number and a unit. In this chapter, physical quantities are grouped into SCALARS and VECTORS.",
      bodyAm:
        "የፊዚክስ መጠን በቁጥርና በአሃድ የሚገለጽ ልኬት ነው። በዚህ ክፍል ወደ ስካላርና ቬክተር ይከፈላሉ።",
      children: [
        {
          id: "n1-1",
          title: "Scalar — the one-number idea",
          titleAm: "ስካላር — አንድ ቁጥር ብቻ",
          body:
            "Has MAGNITUDE only. Its complete description does not require a direction.\n\n" +
            "Examples: mass, time, distance, speed, length, volume, temperature, energy, power, density.\n\n" +
            "Test: 'The mass of a ball is 50 g' — that is COMPLETE. Nothing to add.",
          bodyAm:
            "መጠን ብቻ አለው። ሙሉ መግለጫው አቅጣጫ አይፈልግም።\n" +
            "ምሳሌ፡ ክብደት፣ ጊዜ፣ ርቀት፣ ፍጥነት፣ ርዝመት፣ መጠን፣ ሙቀት፣ ጉልበት፣ ኃይል፣ ጥግግት።\n\n" +
            "ፈተና፡ 'የኳሱ ክብደት 50 ግራም ነው' — ሙሉ ነው።",
        },
        {
          id: "n1-2",
          title: "Vector — the magnitude-plus-direction idea",
          titleAm: "ቬክተር — መጠንና አቅጣጫ",
          body:
            "Has BOTH magnitude AND direction.\n\n" +
            "Examples: displacement, velocity, acceleration, force, momentum, impulse, weight, electric-field strength.\n\n" +
            "Test: 'The velocity of a train is 100 km/h' — INCOMPLETE. You must say '100 km/h NORTH'.",
          bodyAm:
            "መጠንም አቅጣጫም አለው።\n" +
            "ምሳሌ፡ መፈናቀል፣ ቬሎሲቲ፣ ማጣደፍ፣ ኃይል፣ ሞመንተም፣ ምት፣ ክብደት፣ የኤሌክትሪክ መስክ።\n\n" +
            "ፈተና፡ 'የባቡሩ ፍጥነት 100 ኪ.ሜ/ሰ ነው' — ያልተሟላ ነው።",
        },
        {
          id: "n1-3",
          title: "Quick classification table",
          titleAm: "ፈጣን ምድብ ሰንጠረዥ",
          body:
            "| Quantity    | Example         | Type   | Why                                     |\n" +
            "|-------------|-----------------|--------|-----------------------------------------|\n" +
            "| Distance    | 12 m            | Scalar | Total path length; no direction.        |\n" +
            "| Displacement| 12 m east       | Vector | Change in position includes direction.  |\n" +
            "| Speed       | 8 m/s           | Scalar | Rate of distance travelled.             |\n" +
            "| Velocity    | 8 m/s east      | Vector | Rate of displacement with direction.    |\n" +
            "| Mass        | 5 kg            | Scalar | Magnitude and unit suffice.             |\n" +
            "| Weight      | 49 N downward   | Vector | Gravitational force has direction.      |",
          bodyAm:
            "| መጠን        | ምሳሌ           | ዓይነት  | ለምን                                   |\n" +
            "|-------------|---------------|-------|---------------------------------------|\n" +
            "| ርቀት        | 12 ሜ          | ስካላር | አቅጣጫ አያስፈልግም።                    |\n" +
            "| መፈናቀል      | 12 ሜ ምስራቅ    | ቬክተር | አቅጣጫ ያካትታል።                     |\n" +
            "| ፍጥነት       | 8 ሜ/ሰ         | ስካላር | የርቀት መጠን።                          |\n" +
            "| ቬሎሲቲ       | 8 ሜ/ሰ ምስራቅ   | ቬክተር | አቅጣጫ ያካትታል።                     |\n" +
            "| ክብደት(mass)  | 5 ኪግ         | ስካላር | መጠንና አሃድ በቂ ነው።                    |\n" +
            "| ክብደት(weight)| 49 ኒ ወደ ታች   | ቬክተር | የስበት ኃይል አቅጣጫ አለው።              |",
        },
        {
          id: "n1-4",
          title: "⚠ Remember trap — Scalar vs Vector",
          titleAm: "⚠ አትርሳ — ስካላር እና ቬክተር",
          body:
            "Abatu, the TOP 8 TRAPS:\n" +
            "1) DISTANCE is scalar; DISPLACEMENT is vector.\n" +
            "2) SPEED is scalar; VELOCITY is vector.\n" +
            "3) MASS is scalar; WEIGHT is vector.\n" +
            "4) TIME is scalar — always.\n" +
            "5) ELECTRIC CURRENT is scalar by convention (even though it flows).\n" +
            "6) DENSITY is scalar — often mistaken for vector.\n" +
            "7) WORK, ENERGY, POWER, CHARGE, PRESSURE are ALL SCALARS.\n" +
            "8) ACCELERATION and MOMENTUM are VECTORS — often forgotten.\n\n" +
            "Important wording: 'Scalars and vectors can never be added' is too broad. In the chapter's vector-addition context, you cannot add UNLIKE kinds (force + velocity). You CAN add scalars of the same kind, and vectors of the same kind.",
          bodyAm:
            "የፈተና ወጥመዶች፡\n" +
            "1) ርቀት = ስካላር; መፈናቀል = ቬክተር።\n" +
            "2) ፍጥነት = ስካላር; ቬሎሲቲ = ቬክተር።\n" +
            "3) ክብደት(mass) = ስካላር; ክብደት(weight) = ቬክተር።\n" +
            "4) ጊዜ = ስካላር።\n" +
            "5) የኤሌክትሪክ ጅረት = ስካላር።\n" +
            "6) ጥግግት = ስካላር።\n" +
            "7) ሥራ፣ ጉልበት፣ ኃይል፣ ቻርጅ፣ ግፊት = ስካላር።\n" +
            "8) ማጣደፍና ሞመንተም = ቬክተር።\n\n" +
            "ወሳኝ አገላለጽ፡ 'ስካላርና ቬክተር ፈጽሞ ሊደመሩ አይችሉም' ማለት ሰፊ ነው። የተለያዩ ዓይነቶችን ማዋሃድ አይቻልም። ተመሳሳይ ዓይነት ብቻ ይደመራል።",
        },
      ],
    },

    // ============================================================
    // 1.2 VECTOR REPRESENTATIONS
    // ============================================================
    {
      id: "n2",
      title: "1.2 Vector Representations",
      titleAm: "1.2 የቬክተር ውክልና",
      body:
        "Algebraically a vector is written in BOLD (A) or with an arrow (⃗A). Geometrically it is drawn as an ARROW at a stated scale.",
      bodyAm:
        "በፊደል ቬክተር በደማቅ ፊደል (A) ወይም በቀስት (⃗A) ይጻፋል። በስዕል ደግሞ በተገለጸ ሚዛን በቀስት ይሳላል።",
      children: [
        {
          id: "n2-1",
          title: "Algebraic notation",
          titleAm: "የፊደል ማስታወሻ",
          body:
            "• Bold letter: A (typed)\n" +
            "• Letter with arrow: ⃗A (handwritten)\n" +
            "• Magnitude only: |A| or A (no arrow)\n\n" +
            "Example:\n" +
            "• Vector: ⃗S (displacement of 2 km north)\n" +
            "• Scalar: S = 2.0 km (distance)\n" +
            "• Magnitude: |⃗S| = 2.0 km",
          bodyAm:
            "• ደማቅ ፊደል: A\n" +
            "• በቀስት: ⃗A\n" +
            "• መጠን: |A|\n\n" +
            "ምሳሌ፡ ⃗S = 2 ኪ.ሜ ሰሜን፣ S = 2.0 ኪ.ሜ፣ |⃗S| = 2.0 ኪ.ሜ።",
        },
        {
          id: "n2-2",
          title: "Geometric notation (arrow at scale)",
          titleAm: "የስዕል ማስታወሻ",
          body:
            "An arrow drawn at a stated SCALE represents a vector:\n" +
            "• TAIL = initial point\n" +
            "• HEAD = final point (arrowhead)\n" +
            "• LENGTH of arrow = MAGNITUDE (based on the scale)\n" +
            "• DIRECTION of arrowhead = VECTOR DIRECTION\n\n" +
            "Example: Scale 1 cm = 5 N → a 20 N force EAST is drawn 4 cm long, pointing east.",
          bodyAm:
            "በተገለጸ ሚዛን የተሳለ ቀስት ቬክተርን ይወክላል፡\n" +
            "• ጅራት = መጀመሪያ ነጥብ\n" +
            "• ራስ = መጨረሻ ነጥብ\n" +
            "• የቀስቱ ርዝመት = መጠን\n" +
            "• የቀስቱ አቅጣጫ = የቬክተሩ አቅጣጫ",
        },
        {
          id: "n2-3",
          title: "Equal and negative vectors",
          titleAm: "እኩልና አሉታዊ ቬክተሮች",
          body:
            "EQUAL vectors: two vectors are equal if they have SAME MAGNITUDE AND SAME DIRECTION — regardless of where they start. A vector can be translated parallel to itself and remain equal.\n\n" +
            "NEGATIVE vector (−⃗A): same magnitude as ⃗A, opposite direction. Example: ⃗A = 5 m east → −⃗A = 5 m west.\n\n" +
            "Magnitude notation: |A| ≥ 0 always.",
          bodyAm:
            "እኩል ቬክተሮች፡ ተመሳሳይ መጠንና ተመሳሳይ አቅጣጫ ካላቸው — የትም ቢጀምሩ እኩል ናቸው።\n\n" +
            "አሉታዊ ቬክተር (−⃗A)፡ ተመሳሳይ መጠን፣ ተቃራኒ አቅጣጫ።\n\n" +
            "የመጠን ማስታወሻ፡ |A| ≥ 0።",
        },
        {
          id: "n2-4",
          title: "⚠ Angle language",
          titleAm: "⚠ የአንግል ቋንቋ",
          body:
            "'30° north of east' = start facing EAST and turn 30° toward NORTH.\n" +
            "'30° east of north' = start facing NORTH and turn 30° toward EAST.\n\n" +
            "These are DIFFERENT angles — the components come out with sin/cos swapped. Always read which way the question is worded.",
          bodyAm:
            "'30° ከምስራቅ ወደ ሰሜን' — ከምስራቅ ተነስቶ 30° ወደ ሰሜን።\n" +
            "'30° ከሰሜን ወደ ምስራቅ' — ከሰሜን ተነስቶ 30° ወደ ምስራቅ።\n\n" +
            "እነዚህ የተለያዩ ናቸው — sin/cos ይቀያየራሉ።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap — Equal vectors",
          titleAm: "⚠ አትርሳ — እኩል ቬክተሮች",
          body:
            "THE BIG TRAP: two vectors are EQUAL even if they start at DIFFERENT points, AS LONG AS magnitude and direction match. Position on the page does not matter — only magnitude + direction.",
          bodyAm:
            "ትልቁ ወጥመድ፡ ሁለት ቬክተሮች የተለያዩ ቦታዎች ቢጀምሩም እኩል ናቸው — መጠንና አቅጣጫ ብቻ ካስተካከሉ።",
        },
      ],
    },

    // ============================================================
    // 1.3 VECTOR ADDITION AND SUBTRACTION
    // ============================================================
    {
      id: "n3",
      title: "1.3 Vector Addition and Subtraction",
      titleAm: "1.3 የቬክተር መደመርና መቀነስ",
      body:
        "The RESULTANT is the single vector with the same overall effect as the vectors combined. Adding vectors combines both magnitude and direction — simply adding the numbers is NOT always correct.",
      bodyAm:
        "ውጤት (resultant) ከተዋሃዱት ቬክተሮች ጋር አንድ አይነት ውጤት ያለው ነጠላ ቬክተር ነው።",
      children: [
        {
          id: "n3-1",
          title: "Only same kind can be added",
          titleAm: "ተመሳሳይ ዓይነት ብቻ ይደመራል",
          body:
            "• Two FORCES can be added (same kind).\n" +
            "• Two VELOCITIES can be added (same kind).\n" +
            "• Force + Velocity CANNOT be added (different kinds).\n" +
            "• Vector + Scalar is NOT allowed.",
          bodyAm:
            "• ሁለት ኃይሎች ይደመራሉ።\n" +
            "• ሁለት ቬሎሲቲዎች ይደመራሉ።\n" +
            "• ኃይል + ቬሎሲቲ አይደመሩም።\n" +
            "• ቬክተር + ስካላር አይፈቀድም።",
        },
        {
          id: "n3-2",
          title: "Case A · Same direction",
          titleAm: "ጉዳይ A · ተመሳሳይ አቅጣጫ",
          body:
            "Formula: R = A + B (magnitudes add)\n" +
            "Direction of R = same as A and B.\n\n" +
            "Example: 6 N east + 3 N east = 9 N east.",
          bodyAm:
            "ቀመር: R = A + B\n" +
            "አቅጣጫ = እንደ A እና B።\n\n" +
            "ምሳሌ: 6 ኒ ምስራቅ + 3 ኒ ምስራቅ = 9 ኒ ምስራቅ።",
        },
        {
          id: "n3-3",
          title: "Case B · Opposite directions",
          titleAm: "ጉዳይ B · ተቃራኒ አቅጣጫ",
          body:
            "Formula: R = |A − B| (magnitudes subtract)\n" +
            "Direction of R = direction of the LARGER vector.\n\n" +
            "Example: 6 N east and 3 N west → R = |6 − 3| = 3 N east (larger is east).",
          bodyAm:
            "ቀመር: R = |A − B|\n" +
            "አቅጣጫ = የትልቁ ቬክተር አቅጣጫ።\n\n" +
            "ምሳሌ: 6 ኒ ምስራቅ እና 3 ኒ ምዕራብ → R = 3 ኒ ምስራቅ።",
        },
        {
          id: "n3-4",
          title: "Case C · Perpendicular vectors",
          titleAm: "ጉዳይ C · ቀጥ ያሉ",
          body:
            "Pythagoras: R = √(A² + B²)\n" +
            "Direction from A toward B: θ = tan⁻¹(B/A)\n\n" +
            "Worked example: 6 units east and 3 units north.\n" +
            "R = √(6² + 3²) = √45 ≈ 6.71 units\n" +
            "θ = tan⁻¹(3/6) ≈ 26.6° north of east.",
          bodyAm:
            "R = √(A² + B²)\n" +
            "አቅጣጫ: θ = tan⁻¹(B/A)\n\n" +
            "ምሳሌ፡ 6 ምስራቅ እና 3 ሰሜን → R = √45 ≈ 6.71\n" +
            "θ = tan⁻¹(3/6) ≈ 26.6° ከምስራቅ ወደ ሰሜን።",
        },
        {
          id: "n3-5",
          title: "Max and min resultant",
          titleAm: "ከፍተኛና ዝቅተኛ ውጤት",
          body:
            "• MAXIMUM: Rmax = A + B (same direction)\n" +
            "• MINIMUM: Rmin = |A − B| (opposite direction)\n\n" +
            "For equal magnitudes A:\n" +
            "• Maximum sum = 2A\n" +
            "• Minimum sum = 0 (exactly opposite)\n\n" +
            "BOUNDED RANGE RULE:\n" +
            "|A − B| ≤ R ≤ A + B\n" +
            "Any value outside this range is IMPOSSIBLE.",
          bodyAm:
            "• ከፍተኛ: Rmax = A + B\n" +
            "• ዝቅተኛ: Rmin = |A − B|\n\n" +
            "ለእኩል መጠን A:\n" +
            "• ከፍተኛ = 2A\n" +
            "• ዝቅተኛ = 0\n\n" +
            "የተወሰነ ክልል፡\n" +
            "|A − B| ≤ R ≤ A + B",
        },
        {
          id: "n3-6",
          title: "Vector subtraction",
          titleAm: "የቬክተር መቀነስ",
          body:
            "Formula: A − B = A + (−B)\n\n" +
            "Reverse B to get −B, then add.\n\n" +
            "Example 1: A = 6 east, B = 2 east → A − B = 6 east + 2 west = 4 east.\n" +
            "Example 2: A = 4 east, B = 7 east → A − B = 4 east + 7 west = 3 west.",
          bodyAm:
            "ቀመር: A − B = A + (−B)\n\n" +
            "B ን ቀይረህ ወደ −B አድርገህ ደምር።\n\n" +
            "ምሳሌ 1: 6 ምስራቅ − 2 ምስራቅ = 4 ምስራቅ።\n" +
            "ምሳሌ 2: 4 ምስራቅ − 7 ምስራቅ = 3 ምዕራብ።",
        },
        {
          id: "n3-7",
          title: "Properties to know",
          titleAm: "የሚያወቋቸው ባህሪያት",
          body:
            "• COMMUTATIVE: A + B = B + A\n" +
            "• ASSOCIATIVE: (A + B) + C = A + (B + C)\n" +
            "• Order of addition does not change the resultant (for same-kind vectors).\n" +
            "• Three unequal vectors CAN sum to zero if they form a closed head-to-tail polygon.",
          bodyAm:
            "• ተለዋዋጭ: A + B = B + A\n" +
            "• ተያያዥ: (A + B) + C = A + (B + C)\n" +
            "• ቅደም ተከተል ውጤቱን አይለውጥም።\n" +
            "• ሦስት የተለያዩ ቬክተሮች የተዘጋ ፖሊጎን ከሠሩ ድምራቸው ዜሮ ሊሆን ይችላል።",
        },
        {
          id: "n3-8",
          title: "⚠ Remember trap — Addition rules",
          titleAm: "⚠ አትርሳ — የመደመር ደንቦች",
          body:
            "• NEVER use R = A + B for perpendicular vectors — use R = √(A² + B²).\n" +
            "• NEVER use R = A + B for opposite vectors — use R = |A − B|.\n" +
            "• R = A + B is only correct for SAME-direction vectors.\n" +
            "• Always check: is the answer within |A − B| ≤ R ≤ A + B?",
          bodyAm:
            "• ለቀጥ ያሉ: R = √(A² + B²) ተጠቀም።\n" +
            "• ለተቃራኒ: R = |A − B| ተጠቀም።\n" +
            "• R = A + B ለተመሳሳይ አቅጣጫ ብቻ።\n" +
            "• መልሱ በ |A − B| ≤ R ≤ A + B ውስጥ መሆኑን አረጋግጥ።",
        },
      ],
    },

    // ============================================================
    // 1.4 GRAPHICAL METHODS
    // ============================================================
    {
      id: "n4",
      title: "1.4 Graphical Methods of Vector Addition",
      titleAm: "1.4 ስዕላዊ የቬክተር መደመር ዘዴዎች",
      body:
        "Graphical addition draws each vector to SCALE, then measures the resultant. Three methods: TRIANGLE, PARALLELOGRAM, POLYGON.",
      bodyAm:
        "ስዕላዊ ዘዴ ቬክተሮችን በሚዛን ሳሎ ውጤቱን ይለካል። ሦስት ዘዴዎች፡ ትሪያንግል፣ ፓራሌሎግራም፣ ፖሊጎን።",
      children: [
        {
          id: "n4-1",
          title: "Triangle method (head-to-tail)",
          titleAm: "የትሪያንግል ዘዴ",
          body:
            "FOR TWO VECTORS ONLY.\n\n" +
            "Steps:\n" +
            "1) Draw A to scale.\n" +
            "2) Place B's TAIL at A's HEAD, keeping B's direction and length.\n" +
            "3) Draw R from A's TAIL to B's HEAD.\n\n" +
            "Result: R = A + B.",
          bodyAm:
            "ለሁለት ቬክተሮች ብቻ።\n\n" +
            "1) A ሳል።\n" +
            "2) የ B ጅራት በ A ራስ ላይ አስቀምጥ።\n" +
            "3) R ከ A ጅራት ወደ B ራስ ሳል።",
        },
        {
          id: "n4-2",
          title: "Parallelogram method",
          titleAm: "የፓራሌሎግራም ዘዴ",
          body:
            "FOR TWO VECTORS ONLY.\n\n" +
            "Steps:\n" +
            "1) Draw A and B from the SAME starting point (tails together).\n" +
            "2) Through each arrowhead, draw a line parallel to the other vector.\n" +
            "3) The DIAGONAL from the common tail is R = A + B.",
          bodyAm:
            "ለሁለት ቬክተሮች ብቻ።\n\n" +
            "1) A እና B ከአንድ መነሻ ነጥብ።\n" +
            "2) ትይዩ መስመሮችን ሳል።\n" +
            "3) ሰያፉ R = A + B ነው።",
        },
        {
          id: "n4-3",
          title: "Polygon method",
          titleAm: "የፖሊጎን ዘዴ",
          body:
            "FOR MORE THAN TWO VECTORS.\n\n" +
            "Steps:\n" +
            "1) Place all vectors HEAD-TO-TAIL in any order.\n" +
            "2) Draw R from the FIRST tail to the LAST head.\n" +
            "3) If the polygon closes, R = 0.",
          bodyAm:
            "ከሁለት በላይ ቬክተሮች።\n\n" +
            "1) ሁሉንም በራስ-ለጅራት።\n" +
            "2) R ከመጀመሪያው ጅራት ወደ መጨረሻው ራስ።\n" +
            "3) የተዘጋ ፖሊጎን → R = 0።",
        },
        {
          id: "n4-4",
          title: "Measurement steps",
          titleAm: "የመለካት ደረጃዎች",
          body:
            "1) State the SCALE clearly.\n" +
            "2) Measure resultant length with a ruler.\n" +
            "3) Convert back using the scale to get magnitude.\n" +
            "4) Measure direction with a protractor.\n" +
            "5) State the reference axis for the angle.",
          bodyAm:
            "1) ሚዛን ግለጽ።\n" +
            "2) ርዝመቱን በመስመር ለካ።\n" +
            "3) በሚዛን ቀይረህ መጠን አግኝ።\n" +
            "4) አቅጣጫውን በፕሮትራክተር ለካ።\n" +
            "5) የማጣቀሻ ዘንጉን ግለጽ።",
        },
        {
          id: "n4-5",
          title: "⚠ Remember trap — Graphical accuracy",
          titleAm: "⚠ አትርሳ — ስዕላዊ ትክክለኛነት",
          body:
            "A drawing gives an APPROXIMATE result because of line thickness, ruler precision, and protractor reading. Use the analytical COMPONENT method when an accurate numerical answer is needed.\n\n" +
            "• Triangle/parallelogram = for TWO vectors only.\n" +
            "• Polygon = for MORE than two vectors.\n" +
            "• For a CLOSED polygon, R = 0.",
          bodyAm:
            "ስዕል ግምታዊ ውጤት ይሰጣል። ትክክለኛ መልስ ለማግኘት የክፍል ዘዴን ተጠቀም።\n\n" +
            "• ትሪያንግል/ፓራሌሎግራም = ለሁለት።\n" +
            "• ፖሊጎን = ከሁለት በላይ።\n" +
            "• የተዘጋ ፖሊጎን → R = 0።",
        },
      ],
    },

    // ============================================================
    // 1.5 VECTOR RESOLUTION
    // ============================================================
    {
      id: "n5",
      title: "1.5 Vector Resolution",
      titleAm: "1.5 የቬክተር መከፋፈል",
      body:
        "RESOLUTION means splitting ONE vector into components whose vector sum equals the original vector. In a rectangular coordinate system, the horizontal and vertical components are perpendicular.",
      bodyAm:
        "መከፋፈል ማለት አንድን ቬክተር ወደ ክፍሎች መከፋፈል ነው። በተጋጠረ ዘንግ ሥርዓት አግድሙና ቁመታዊው ክፍሎች ቀጥ ያሉ ናቸው።",
      children: [
        {
          id: "n5-1",
          title: "The three key formulas",
          titleAm: "ሦስቱ ቁልፍ ቀመሮች",
          body:
            "For θ measured from +x (horizontal):\n" +
            "• Ax = A cos θ\n" +
            "• Ay = A sin θ\n\n" +
            "From components:\n" +
            "• A = √(Ax² + Ay²)\n" +
            "• θ = tan⁻¹(Ay/Ax)   (check quadrant!)",
          bodyAm:
            "θ ከ +x (አግድም) ሲለካ:\n" +
            "• Ax = A cos θ\n" +
            "• Ay = A sin θ\n\n" +
            "ከክፍሎች:\n" +
            "• A = √(Ax² + Ay²)\n" +
            "• θ = tan⁻¹(Ay/Ax) (ኳድራንት አረጋግጥ!)",
        },
        {
          id: "n5-2",
          title: "Worked Example 1 · Resolving a vector",
          titleAm: "ሠርተ ምሳሌ 1 · ቬክተር መከፋፈል",
          body:
            "A displacement is 250 km at 30° north of east.\n" +
            "East is horizontal; north is vertical.\n\n" +
            "East component = 250 cos 30° ≈ 216.5 km\n" +
            "North component = 250 sin 30° = 125 km\n\n" +
            "Answer: 216.5 km East + 125 km North.",
          bodyAm:
            "250 ኪ.ሜ በ30° ከምስራቅ ወደ ሰሜን።\n" +
            "ምስራቅ = 250 cos 30° ≈ 216.5 ኪ.ሜ\n" +
            "ሰሜን = 250 sin 30° = 125 ኪ.ሜ",
        },
        {
          id: "n5-3",
          title: "Worked Example 2 · Combining components",
          titleAm: "ሠርተ ምሳሌ 2 · ክፍሎችን ማዋሃድ",
          body:
            "A person walks 3 km east and 2 km north.\n\n" +
            "R = √(3² + 2²) = √13 ≈ 3.61 km\n" +
            "θ = tan⁻¹(2/3) ≈ 33.7° north of east.",
          bodyAm:
            "3 ኪ.ሜ ምስራቅ እና 2 ኪ.ሜ ሰሜን።\n" +
            "R = √13 ≈ 3.61 ኪ.ሜ\n" +
            "θ = tan⁻¹(2/3) ≈ 33.7°",
        },
        {
          id: "n5-4",
          title: "Adding multiple vectors by components",
          titleAm: "ብዙ ቬክተሮችን በክፍል መደመር",
          body:
            "1) Choose positive x and y directions.\n" +
            "2) Resolve every vector into x and y components, keeping SIGNS.\n" +
            "3) Sum all x-components: Rx = ΣAx.\n" +
            "4) Sum all y-components: Ry = ΣAy.\n" +
            "5) R = √(Rx² + Ry²).\n" +
            "6) Direction = tan⁻¹(Ry/Rx) — check the quadrant.",
          bodyAm:
            "1) አዎንታዊ x እና y ምረጥ።\n" +
            "2) ሁሉንም ወደ x እና y ክፍሎች ከምልክት ጋር ከፋፍል።\n" +
            "3) ሁሉንም x ደምር: Rx = ΣAx።\n" +
            "4) ሁሉንም y ደምር: Ry = ΣAy።\n" +
            "5) R = √(Rx² + Ry²)።\n" +
            "6) አቅጣጫ = tan⁻¹(Ry/Rx)።",
        },
        {
          id: "n5-5",
          title: "Common angles — memorize",
          titleAm: "የተለመዱ አንግሎች",
          body:
            "| θ   | sin θ | cos θ | tan θ |\n" +
            "|-----|-------|-------|-------|\n" +
            "| 0°  | 0     | 1     | 0     |\n" +
            "| 30° | 0.5   | 0.866 | 0.577 |\n" +
            "| 37° | 0.6   | 0.8   | 0.75  |\n" +
            "| 45° | 0.707 | 0.707 | 1     |\n" +
            "| 53° | 0.8   | 0.6   | 1.333 |\n" +
            "| 60° | 0.866 | 0.5   | 1.732 |\n" +
            "| 90° | 1     | 0     | ∞     |",
          bodyAm:
            "| θ | sin | cos | tan |\n" +
            "| 0° | 0 | 1 | 0 |\n" +
            "| 30° | 0.5 | 0.866 | 0.577 |\n" +
            "| 37° | 0.6 | 0.8 | 0.75 |\n" +
            "| 45° | 0.707 | 0.707 | 1 |\n" +
            "| 53° | 0.8 | 0.6 | 1.333 |\n" +
            "| 60° | 0.866 | 0.5 | 1.732 |\n" +
            "| 90° | 1 | 0 | ∞ |",
        },
        {
          id: "n5-6",
          title: "⚠ Remember trap — Resolution",
          titleAm: "⚠ አትርሳ — መከፋፈል",
          body:
            "• ALWAYS check the angle: θ is measured from HORIZONTAL unless stated otherwise.\n" +
            "• If θ is from VERTICAL, swap sin/cos: Ax = A sin θ, Ay = A cos θ.\n" +
            "• A COMPONENT can NEVER be greater than the vector itself.\n" +
            "• θ = 0° → Ax = A, Ay = 0.\n" +
            "• θ = 90° → Ax = 0, Ay = A.\n" +
            "• tan⁻¹ gives a REFERENCE angle — you must still assign the quadrant from the signs.",
          bodyAm:
            "• θ ሁልጊዜ ከአግድም ይለካል (ካልተነገረ)።\n" +
            "• ከቁመታዊ ከሆነ sin/cos ተቀያይሩ።\n" +
            "• ክፍል ከቬክተሩ መብለጥ አይችልም።\n" +
            "• θ = 0° → Ax = A, Ay = 0።\n" +
            "• θ = 90° → Ax = 0, Ay = A።\n" +
            "• tan⁻¹ ማጣቀሻ አንግል ብቻ ይሰጣል።",
        },
      ],
    },

    // ============================================================
    // FORMULA SHEET
    // ============================================================
    {
      id: "nFormula",
      title: "Formula Sheet — Unit 1",
      titleAm: "የቀመር ሉህ — ክፍል 1",
      body:
        "| Situation                | Formula                  | Notes                                |\n" +
        "|--------------------------|--------------------------|--------------------------------------|\n" +
        "| Same direction           | R = A + B                | Resultant points along both.         |\n" +
        "| Opposite directions      | R = |A − B|              | Direction of the larger vector.      |\n" +
        "| Perpendicular            | R = √(A² + B²)           | Pythagorean theorem.                 |\n" +
        "| Angle from A toward B    | θ = tan⁻¹(B/A)           | For perpendicular vectors.           |\n" +
        "| Horizontal component     | Ax = A cos θ             | θ from +x (horizontal).              |\n" +
        "| Vertical component       | Ay = A sin θ             | θ from +x (horizontal).              |\n" +
        "| Magnitude from components| A = √(Ax² + Ay²)         | Components must be perpendicular.    |\n" +
        "| Direction from components| θ = tan⁻¹(Ay/Ax)         | Check quadrant/signs.                |\n" +
        "| Subtraction              | A − B = A + (−B)         | Reverse B then add.                  |\n" +
        "| Bounded range            | |A − B| ≤ R ≤ A + B      | Any value outside is impossible.     |\n" +
        "| Cosine rule (oblique)    | R = √(A²+B²+2AB cos θ)   | θ = angle BETWEEN A and B.           |",
      bodyAm:
        "| ሁኔታ                | ቀመር                  | ማስታወሻ                            |\n" +
        "|----------------------|----------------------|-----------------------------------|\n" +
        "| ተመሳሳይ አቅጣጫ        | R = A + B            | በሁለቱም አቅጣጫ                     |\n" +
        "| ተቃራኒ አቅጣጫ        | R = |A − B|          | የትልቁ አቅጣጫ                     |\n" +
        "| ቀጥ ያለ            | R = √(A² + B²)       | ፓይታጎራስ                          |\n" +
        "| አንግል ከ A ወደ B     | θ = tan⁻¹(B/A)       | ለቀጥ ያሉ ቬክተሮች                 |\n" +
        "| አግድም ክፍል          | Ax = A cos θ         | θ ከ +x                           |\n" +
        "| ቁመታዊ ክፍል          | Ay = A sin θ         | θ ከ +x                           |\n" +
        "| መጠን ከክፍሎች         | A = √(Ax² + Ay²)     | ቀጥ ያሉ ክፍሎች                    |\n" +
        "| አቅጣጫ ከክፍሎች       | θ = tan⁻¹(Ay/Ax)     | ኳድራንት አረጋግጥ                  |\n" +
        "| መቀነስ               | A − B = A + (−B)     | B ን ቀይር                         |\n" +
        "| የተወሰነ ክልል         | |A − B| ≤ R ≤ A + B  | ከዚህ ውጭ የማይቻል                 |\n" +
        "| የኮሳይን ደንብ          | R = √(A²+B²+2AB cos θ)| θ = በ A እና B መካከል            |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 1",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1) Confusing SPEED (scalar) with VELOCITY (vector).\n" +
        "2) Adding magnitudes automatically — only valid for same-direction vectors.\n" +
        "3) Forgetting DIRECTION in a vector answer.\n" +
        "4) Using the wrong angle — 'north of east' vs 'east of north'.\n" +
        "5) Swapping sin/cos — always draw the right triangle and label θ first.\n" +
        "6) Using tan⁻¹ alone without checking quadrant.\n" +
        "7) Thinking position on the page matters for equal vectors — it does NOT.\n" +
        "8) Thinking zero resultant means no vectors acted — nonzero vectors can cancel.\n" +
        "9) Confusing PATH length with RESULTANT — resultant connects start to end, not the path.\n" +
        "10) Mixing physical kinds — force + velocity is not a valid vector sum.",
      bodyAm:
        "1) ፍጥነት (ስካላር) ከቬሎሲቲ (ቬክተር) መምታታት።\n" +
        "2) መጠኖችን በቀጥታ መደመር — ለተመሳሳይ አቅጣጫ ብቻ።\n" +
        "3) አቅጣጫ መዘንጋት።\n" +
        "4) የተሳሳተ አንግል መጠቀም።\n" +
        "5) sin/cos መቀያየር — ሁልጊዜ ስዕል ሳል።\n" +
        "6) tan⁻¹ ብቻ መጠቀም።\n" +
        "7) ቦታ ያስፈልጋል ብሎ ማሰብ — አያስፈልግም።\n" +
        "8) ዜሮ ውጤት = ምንም ቬክተር የለም ብሎ ማሰብ።\n" +
        "9) መንገድ ከውጤት መምታታት።\n" +
        "10) የተለያዩ ዓይነቶችን መደመር።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120 exactly as the mastery-lab HTML
  // ============================================================
  questions: [
    // ---------- EASY (Q1–Q40) ----------
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Which statement defines a scalar quantity?", options: ["It has magnitude only", "It has direction only", "It has magnitude and direction", "It has no unit"], answer: "0", explanation: "A scalar is completely described by magnitude and an appropriate unit." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Which of these is a vector quantity?", options: ["Time", "Temperature", "Force", "Volume"], answer: "2", explanation: "Force has magnitude and direction." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Which of these is a scalar quantity?", options: ["Displacement", "Velocity", "Acceleration", "Distance"], answer: "3", explanation: "Distance is the total path length and has no direction." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Which pair contains only vectors?", options: ["Mass and time", "Speed and distance", "Force and weight", "Energy and power"], answer: "2", explanation: "Force and weight are both forces and therefore vectors." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "A complete description of a vector needs…", options: ["a number only", "a unit only", "magnitude and direction", "direction but no magnitude"], answer: "2", explanation: "Both magnitude and direction are required." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "What does the length of a scale-drawn vector represent?", options: ["Its unit", "Its magnitude", "Its mass", "Its starting time"], answer: "1", explanation: "The arrow length represents magnitude when drawn to scale." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "What does the arrowhead of a vector represent?", options: ["Magnitude", "Direction", "Unit", "Scale factor"], answer: "1", explanation: "The arrowhead shows the direction." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The starting end of a vector arrow is called the…", options: ["head", "tail", "resultant", "component"], answer: "1", explanation: "The tail is the initial point; the head is the final point." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Two vectors are equal when they have…", options: ["same length only", "same direction only", "same magnitude and same direction", "same tail position"], answer: "2", explanation: "Their positions on the page do not need to be the same." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "The negative of vector A has…", options: ["opposite magnitude", "same magnitude and opposite direction", "same direction and zero magnitude", "double the magnitude"], answer: "1", explanation: "A and −A have equal magnitudes but opposite directions." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Which is the SI unit of force?", options: ["kg", "m/s", "N", "J/s²"], answer: "2", explanation: "Force is measured in newtons (N)." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Which quantity is a scalar?", options: ["Weight", "Momentum", "Impulse", "Energy"], answer: "3", explanation: "Energy has magnitude but no direction." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Which statement about speed and velocity is correct?", options: ["Both are scalars", "Speed is scalar; velocity is vector", "Speed is vector; velocity is scalar", "Both are vectors"], answer: "1", explanation: "Velocity includes direction; speed does not." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "A vector is 5 m east. Its magnitude is…", options: ["5 m east", "east", "5 m", "zero"], answer: "2", explanation: "Magnitude is the size only, 5 m." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "A distance of 2.0 km is best described as…", options: ["2.0 km north", "2.0 km", "a vector arrow", "a negative vector"], answer: "1", explanation: "Distance is scalar; no direction is required." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "A displacement of 2.0 km must include…", options: ["temperature", "direction", "density", "power"], answer: "1", explanation: "Displacement is a vector." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Which is not a vector?", options: ["Acceleration", "Electric field strength", "Temperature", "Displacement"], answer: "2", explanation: "Temperature is scalar." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Which symbol commonly represents the magnitude of vector A?", options: ["|A|", "−A only", "A + B", "θA"], answer: "0", explanation: "Absolute-value bars indicate magnitude." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "If 1 cm represents 4 km, how long should a 12 km vector be drawn?", options: ["2 cm", "3 cm", "4 cm", "48 cm"], answer: "1", explanation: "12 ÷ 4 = 3 cm." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "If 1 cm represents 10 N, a 30 N vector is drawn…", options: ["1 cm long", "2 cm long", "3 cm long", "10 cm long"], answer: "2", explanation: "30 N ÷ (10 N/cm) = 3 cm." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Two vectors point east and have magnitudes 4 N and 6 N. Their resultant magnitude is…", options: ["2 N", "4 N", "6 N", "10 N"], answer: "3", explanation: "Same-direction magnitudes add: 4 + 6 = 10 N." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "Two vectors point in opposite directions with magnitudes 9 m and 4 m. The resultant magnitude is…", options: ["13 m", "9 m", "5 m", "4 m"], answer: "2", explanation: "Opposite-direction magnitudes subtract: 9 − 4 = 5 m." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "Two equal vectors point in exactly opposite directions. Their resultant is…", options: ["twice either vector", "zero", "one vector", "undefined"], answer: "1", explanation: "They cancel exactly." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "The resultant of 7 N east and 2 N west is…", options: ["9 N east", "5 N east", "5 N west", "14 N"], answer: "1", explanation: "The larger vector points east; 7 − 2 = 5 N." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "Which is the correct expression for subtracting B from A?", options: ["A − B = A + B", "A − B = A + (−B)", "A − B = −A + B always", "A − B = AB"], answer: "1", explanation: "Subtraction means adding the negative of B." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "The maximum resultant of two vectors of magnitudes A and B is…", options: ["|A − B|", "√(A²+B²) always", "A + B", "zero"], answer: "2", explanation: "The maximum occurs when both point in the same direction." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "The minimum possible resultant magnitude of two vectors A and B is…", options: ["A + B", "|A − B|", "AB", "A/B"], answer: "1", explanation: "The minimum occurs when they point in opposite directions." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "The triangle method is also called the…", options: ["tail-to-tail method", "head-to-tail method", "unit method", "component-only method"], answer: "1", explanation: "The head of the first vector meets the tail of the second." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "In the parallelogram method, both vectors begin…", options: ["at different ends of a line", "at the same point", "at the resultant head", "at right angles only"], answer: "1", explanation: "The vectors form adjacent sides from a common tail." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "For three or more vectors, the graphical method usually used is the…", options: ["polygon method", "temperature method", "mass method", "inverse method"], answer: "0", explanation: "Place all vectors head-to-tail; the resultant joins first tail to last head." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "If a head-to-tail polygon closes, the resultant is…", options: ["the longest vector", "zero", "equal to the first vector", "always north"], answer: "1", explanation: "The start and end points coincide." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "Which theorem finds the magnitude of perpendicular vector components?", options: ["Newton's law", "Pythagorean theorem", "Ohm's law", "Hooke's law"], answer: "1", explanation: "For perpendicular sides, R = √(A²+B²)." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "A 3-unit east vector and a 4-unit north vector have resultant magnitude…", options: ["1 unit", "5 units", "7 units", "12 units"], answer: "1", explanation: "√(3²+4²) = 5 units." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "When θ is measured from the positive x-axis, the horizontal component is…", options: ["A sin θ", "A cos θ", "A tan θ", "A/θ"], answer: "1", explanation: "The horizontal side is adjacent to θ." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "When θ is measured from the positive x-axis, the vertical component is…", options: ["A cos θ", "A sin θ", "A tan θ", "A² sin θ"], answer: "1", explanation: "The vertical side is opposite θ." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "A vector with magnitude 10 and θ = 0° from +x has components…", options: ["Ax=0, Ay=10", "Ax=10, Ay=0", "Ax=10, Ay=10", "Ax=−10, Ay=0"], answer: "1", explanation: "cos 0° = 1 and sin 0° = 0." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "A vector with magnitude 8 at 90° from +x has components…", options: ["Ax=8, Ay=0", "Ax=0, Ay=8", "Ax=8, Ay=8", "Ax=−8, Ay=0"], answer: "1", explanation: "cos 90° = 0 and sin 90° = 1." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "Which formula gives magnitude from perpendicular components?", options: ["A=Ax+Ay", "A=√(Ax²+Ay²)", "A=Ax/Ay", "A=Ax−Ay always"], answer: "1", explanation: "Use the Pythagorean theorem." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "If Ax=6 and Ay=8, the magnitude is…", options: ["2", "7", "10", "14"], answer: "2", explanation: "√(36 + 64) = 10." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "If a vector is 20 units at 30° north of east, its north component is…", options: ["20 cos 30°", "20 sin 30°", "20 tan 30°", "20 / sin 30°"], answer: "1", explanation: "North is opposite the 30° angle measured from east." },

    // ---------- MEDIUM (Q41–Q80) ----------
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Vectors A=8 N east and B=6 N north are perpendicular. What is |R|?", options: ["2 N", "10 N", "14 N", "48 N"], answer: "1", explanation: "R=√(8²+6²)=√100=10 N." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "For A=8 N east and B=6 N north, the angle north of east is approximately…", options: ["20.0°", "36.9°", "53.1°", "90°"], answer: "1", explanation: "θ=tan⁻¹(6/8)≈36.9°." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "A 250 km displacement is 30° north of east. Its east component is approximately…", options: ["125 km", "216.5 km", "250 km", "433 km"], answer: "1", explanation: "East = 250 cos30° ≈ 216.5 km." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "For the same 250 km displacement at 30° north of east, the north component is…", options: ["125 km", "216.5 km", "250 km", "500 km"], answer: "0", explanation: "North = 250 sin30° = 125 km." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "A person walks 3 km east then 2 km north. Displacement magnitude is…", options: ["1 km", "5 km", "√13 km ≈ 3.61 km", "6 km"], answer: "2", explanation: "The legs are perpendicular: √(9+4)=√13." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "For the 3 km east, 2 km north walk, direction is…", options: ["33.7° north of east", "56.3° north of east", "33.7° south of east", "east only"], answer: "0", explanation: "θ=tan⁻¹(2/3)≈33.7° north of east." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "A vector has components Ax=−3 and Ay=4. Its magnitude is…", options: ["1", "5", "7", "−5"], answer: "1", explanation: "√(9+16)=5." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "A vector has Ax=−3 and Ay=4. It lies in which quadrant?", options: ["I", "II", "III", "IV"], answer: "1", explanation: "Negative x and positive y means quadrant II." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "A vector is 10 N at 60° above +x. Its x-component is…", options: ["5 N", "8.66 N", "10 N", "20 N"], answer: "0", explanation: "10 cos60° = 5 N." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "A vector is 10 N at 60° above +x. Its y-component is…", options: ["5 N", "8.66 N", "10 N", "17.3 N"], answer: "1", explanation: "10 sin60° ≈ 8.66 N." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "Two perpendicular vectors have magnitudes 5 and 12. Resultant magnitude is…", options: ["7", "13", "17", "60"], answer: "1", explanation: "√(25+144)=13." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "A=12 units east and B=5 units west. Resultant is…", options: ["17 east", "7 east", "7 west", "60 east"], answer: "1", explanation: "12 − 5 = 7 units east." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "A=5 units east and B=12 units west. Resultant is…", options: ["17 west", "7 west", "7 east", "60 west"], answer: "1", explanation: "12 − 5 = 7 units west." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "Two 10 N vectors are separated by 90°. Resultant magnitude is…", options: ["0 N", "10 N", "14.1 N", "20 N"], answer: "2", explanation: "√(100+100)=√200≈14.1 N." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "Two 10 N vectors are separated by 120°. What is the resultant magnitude?", options: ["20 N", "0 N", "10 N", "5 N"], answer: "2", explanation: "R=√(100+100+200cos120°)=√100=10 N." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "A 6-unit vector points east and a 6-unit vector points west. Which is true?", options: ["Sum is 12 east", "Sum is zero", "Sum is 6 north", "Difference is always zero"], answer: "1", explanation: "Equal opposite vectors cancel in the sum." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "A 6-unit east vector minus a 2-unit east vector equals…", options: ["8 east", "4 east", "4 west", "12 east"], answer: "1", explanation: "A−B = 6 east + 2 west = 4 east." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "A 4-unit east vector minus a 7-unit east vector equals…", options: ["3 east", "11 east", "3 west", "11 west"], answer: "2", explanation: "4 east + 7 west = 3 west." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "A vector of 15 m at 120° from +x has x-component…", options: ["+7.5 m", "−7.5 m", "+13.0 m", "−15 m"], answer: "1", explanation: "15 cos120° = −7.5 m." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "A vector of 15 m at 120° from +x has y-component approximately…", options: ["−13.0 m", "−7.5 m", "+7.5 m", "+13.0 m"], answer: "3", explanation: "15 sin120° ≈ 13.0 m." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "A vector has components Ax=9, Ay=12. The direction angle from +x is…", options: ["36.9°", "53.1°", "90°", "120°"], answer: "1", explanation: "tanθ=12/9; θ≈53.1°." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "If 2 cm represents 8 m, a 28 m vector should be drawn…", options: ["3.5 cm", "7 cm", "14 cm", "56 cm"], answer: "1", explanation: "Scale is 1 cm = 4 m, so 28 m = 7 cm." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "In a scale drawing, the measured resultant is 4.5 cm and 1 cm represents 2 km. Its magnitude is…", options: ["2.25 km", "4.5 km", "6.5 km", "9 km"], answer: "3", explanation: "4.5 × 2 = 9 km." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "The head-to-tail method gives the resultant from…", options: ["first head to last head", "first tail to final head", "last tail to first tail", "the longest arrow only"], answer: "1", explanation: "Join the original starting tail to the final endpoint." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Why does vector addition obey A+B=B+A?", options: ["Vectors have no direction", "Vector addition is commutative", "Magnitudes always add", "All vectors are perpendicular"], answer: "1", explanation: "Commutativity means the order of addition does not affect the resultant." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "Which set can have a zero resultant?", options: ["Three vectors forming a closed triangle head-to-tail", "Only vectors with zero magnitude", "Only two vectors pointing north", "Any three vectors, regardless of directions"], answer: "0", explanation: "A closed polygon returns to its starting point." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "A nonzero vector can have a zero x-component when it points…", options: ["along the x-axis", "vertically along the y-axis", "at 45° only", "in every direction"], answer: "1", explanation: "A vertical vector has no horizontal component." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "If two vectors are equal, their x- and y-components are…", options: ["always different", "equal respectively", "opposites always", "both zero"], answer: "1", explanation: "Equal vectors have the same components in the same coordinate system." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "A vector has magnitude 13 and Ax=5, with Ay positive. Ay equals…", options: ["8", "12", "18", "√194"], answer: "1", explanation: "Ay=√(13²−5²)=√144=12." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "A vector has magnitude 17 and Ay=8, with Ax positive. Ax equals…", options: ["9", "15", "25", "√353"], answer: "1", explanation: "Ax=√(17²−8²)=√225=15." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "A displacement is 40 km at 60° above east. Its east component is…", options: ["20 km", "34.6 km", "40 km", "80 km"], answer: "0", explanation: "40 cos60°=20 km." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "A displacement is 40 km at 60° above east. Its north component is…", options: ["20 km", "34.6 km", "40 km", "69.3 km"], answer: "1", explanation: "40 sin60°≈34.6 km." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "A=10 units at 30° north of east. Approximate components are…", options: ["Ax=5, Ay=8.66", "Ax=8.66, Ay=5", "Ax=10, Ay=10", "Ax=−8.66, Ay=−5"], answer: "1", explanation: "East=10cos30°≈8.66; north=10sin30°=5." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "A 10 m vector at 210° from +x has components…", options: ["Ax≈−8.66, Ay=−5", "Ax=+8.66, Ay=−5", "Ax=−5, Ay=+8.66", "Ax=+5, Ay=+8.66"], answer: "0", explanation: "cos210°≈−0.866 and sin210°=−0.5." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Two vectors have magnitudes 7 and 24 and are perpendicular. Their resultant is…", options: ["17", "25", "31", "168"], answer: "1", explanation: "√(49+576)=25." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "The resultant of perpendicular 9-unit east and 12-unit north vectors makes angle…", options: ["36.9° north of east", "53.1° north of east", "90° north of east", "12° north of east"], answer: "1", explanation: "tanθ=12/9, so θ≈53.1°." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "A force of 20 N acts at 0° from east. Which is true?", options: ["Fx=0, Fy=20 N", "Fx=20 N, Fy=0", "Fx=Fy=20 N", "Fx=−20 N, Fy=0"], answer: "1", explanation: "At 0°, the vector lies along +x." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "A 20 N force acts at 180° from +x. Which is true?", options: ["Fx=+20 N", "Fx=−20 N, Fy=0", "Fx=0, Fy=−20 N", "Fx=+20 N, Fy=+20 N"], answer: "1", explanation: "At 180°, the vector points along negative x." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "A vector is directed southwest. Under east-positive and north-positive signs, its components are…", options: ["both positive", "x negative and y positive", "x positive and y negative", "both negative"], answer: "3", explanation: "West is negative x and south is negative y." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "A vector is directed northwest. Under east-positive and north-positive signs, its components are…", options: ["both positive", "x negative and y positive", "x positive and y negative", "both negative"], answer: "1", explanation: "West is negative x; north is positive y." },

    // ---------- HARD (Q81–Q120) ----------
    { id: "q81", type: "mcq", difficulty: "hard", stem: "A=12 N east and B=5 N north. A third vector C=13 N west. Resultant of A+B+C has magnitude…", options: ["0 N", "5.1 N", "10 N", "18 N"], answer: "1", explanation: "The net components are Rx=12−13=−1 N and Ry=5 N. Thus R=√(1²+5²)=√26≈5.1 N." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "Vectors A=(4,−3) and B=(−4,3) are added. Resultant is…", options: ["(8,−6)", "(0,0)", "(0,6)", "(−8,6)"], answer: "1", explanation: "B is exactly −A, so the components cancel." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "A vector has components Ax=−8 and Ay=−6. Its magnitude and quadrant are…", options: ["10, quadrant I", "10, quadrant II", "10, quadrant III", "14, quadrant IV"], answer: "2", explanation: "Magnitude √(64+36)=10; both components are negative, so quadrant III." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "A=10 units at 30° north of east; B=10 units at 30° south of east. Their resultant is…", options: ["20 east", "10 east", "17.3 east", "zero"], answer: "2", explanation: "Vertical components cancel; horizontal components add: 2×10cos30°≈17.3 east." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "Two equal vectors of magnitude A make angle 60°. Resultant magnitude is…", options: ["A", "√2A", "√3A", "2A"], answer: "2", explanation: "R=√(A²+A²+2A²cos60°)=√3 A." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "Two equal vectors of magnitude A make angle 120°. Resultant magnitude is…", options: ["0", "A", "√3A", "2A"], answer: "1", explanation: "R²=2A²+2A²cos120°=A², so R=A." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "Two vectors of magnitudes 8 and 15 have resultant magnitude 17. The angle between them is…", options: ["0°", "60°", "90°", "180°"], answer: "2", explanation: "8²+15²=17², so they are perpendicular for this resultant magnitude." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "Vectors A and B have magnitudes 5 and 7. Which resultant magnitude is impossible?", options: ["2", "5", "10", "13"], answer: "3", explanation: "The resultant must lie between |7−5|=2 and 7+5=12; 13 is impossible." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "Two vectors have magnitudes 9 and 4. Which value can be the magnitude of their sum?", options: ["3", "4", "14", "−5"], answer: "1", explanation: "A resultant can range from 5 to 13, so 4 is impossible." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "A 10 N vector is 37° north of east. Approximate components are (use cos37°≈0.8, sin37°≈0.6)…", options: ["(6,8) N", "(8,6) N", "(−8,6) N", "(8,−6) N"], answer: "1", explanation: "East component is 10×0.8=8 N; north is 10×0.6=6 N." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "A= (6 east, 8 north) and B=(−2 east, 1 south). Resultant components are…", options: ["(8,7)", "(4,9)", "(4,7)", "(−4,9)"], answer: "2", explanation: "Add components: x=6−2=4; y=8−1=7." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "For resultant components Rx=4 and Ry=7, the magnitude is approximately…", options: ["3", "8.06", "11", "√3"], answer: "1", explanation: "R=√(16+49)=√65≈8.06." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "For Rx=4 east and Ry=7 north, direction from east is approximately…", options: ["29.7°", "60.3°", "45°", "75°"], answer: "1", explanation: "tanθ=7/4; θ≈60.3°." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "A vector A has magnitude 10 at 150° from +x. Its components are…", options: ["(8.66,5)", "(−8.66,5)", "(−5,8.66)", "(5,−8.66)"], answer: "1", explanation: "10cos150°=−8.66; 10sin150°=5." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "A vector has Ax=−6 and Ay=−8. The reference angle is…", options: ["36.9°", "53.1°", "126.9°", "233.1°"], answer: "1", explanation: "tan(reference)=|−8/−6|=8/6, so 53.1°. Its actual direction from +x is 233.1°." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "A 15 km displacement is 40° east of north. Its north component is…", options: ["15 sin40°", "15 cos40°", "15 tan40°", "15 / cos40°"], answer: "1", explanation: "The angle is measured from north, so north is adjacent: 15cos40°." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "A 15 km displacement is 40° east of north. Its east component is…", options: ["15 cos40°", "15 sin40°", "15 tan40°", "15 / sin40°"], answer: "1", explanation: "East is opposite the 40° angle: 15sin40°." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "A person moves 8 m east, 6 m north, then 8 m west. Final displacement is…", options: ["22 m east", "6 m north", "14 m northeast", "zero"], answer: "1", explanation: "The east and west components cancel; 6 m north remains." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "A person moves 5 m north, 12 m east, then 5 m south. Final displacement magnitude is…", options: ["0 m", "5 m", "12 m", "22 m"], answer: "2", explanation: "North and south cancel, leaving 12 m east." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "A vector is 25 units and has horizontal component 7 units, with vertical component positive. Vertical component is…", options: ["18", "24", "32", "√674"], answer: "1", explanation: "Ay=√(25²−7²)=√576=24." },
    { id: "q101", type: "mcq", difficulty: "hard", stem: "Two perpendicular displacements are 20 m east and 21 m north. Resultant magnitude is…", options: ["1 m", "29 m", "41 m", "420 m"], answer: "1", explanation: "√(400+441)=√841=29 m." },
    { id: "q102", type: "mcq", difficulty: "hard", stem: "A 10-unit vector has Ax=−6. If Ay is positive, Ay equals…", options: ["4", "8", "12", "16"], answer: "1", explanation: "Ay=√(100−36)=8." },
    { id: "q103", type: "mcq", difficulty: "hard", stem: "A vector has magnitude 10 and components (−6,8). Its direction from +x is…", options: ["53.1°", "126.9°", "233.1°", "306.9°"], answer: "1", explanation: "Quadrant II; reference angle tan⁻¹(8/6)=53.1°, so direction 180−53.1=126.9°." },
    { id: "q104", type: "mcq", difficulty: "hard", stem: "A=14 N east, B=10 N west, C=6 N north. Resultant magnitude is…", options: ["2 N", "√52 N ≈7.21 N", "10 N", "30 N"], answer: "1", explanation: "Net x=4 east and y=6 north; R=√(16+36)=√52≈7.21 N." },
    { id: "q105", type: "mcq", difficulty: "hard", stem: "For A=14 east, B=10 west, C=6 north, direction is…", options: ["56.3° north of east", "33.7° north of east", "56.3° south of east", "north"], answer: "0", explanation: "tanθ=6/4=1.5; θ≈56.3° north of east." },
    { id: "q106", type: "mcq", difficulty: "hard", stem: "A=9 N east, B=12 N north, C=9 N west, D=12 N south. Resultant is…", options: ["21 N", "3 N", "zero", "12 N south"], answer: "2", explanation: "East-west and north-south pairs each cancel." },
    { id: "q107", type: "mcq", difficulty: "hard", stem: "A vector A has magnitude 8 and direction 60° from +x. Vector B has magnitude 8 at 240°. A+B is…", options: ["16 units at 60°", "8 units at 240°", "zero", "8 units north"], answer: "2", explanation: "The vectors have equal magnitudes and opposite directions." },
    { id: "q108", type: "mcq", difficulty: "hard", stem: "A 10-unit vector points 30° north of east. Another 10-unit vector points 30° south of west. Their sum is…", options: ["10√3 east", "10 north", "zero", "20 east"], answer: "2", explanation: "30° south of west is direction 210°, exactly opposite the first. Equal vectors cancel." },
    { id: "q109", type: "mcq", difficulty: "hard", stem: "A 10-unit vector at 30° north of east and a 10-unit vector at 30° south of east sum to…", options: ["10 east", "10√3 east", "20 east", "zero"], answer: "1", explanation: "Their vertical components cancel and horizontal components add: 20cos30°=10√3 east." },
    { id: "q110", type: "mcq", difficulty: "hard", stem: "A vector's x-component is 0 and y-component is −12. The vector points…", options: ["east", "west", "north", "south"], answer: "3", explanation: "Zero x and negative y means straight south." },
    { id: "q111", type: "mcq", difficulty: "hard", stem: "If the magnitude of a vector is 5 and Ax=3, then |Ay| is…", options: ["2", "4", "8", "√34"], answer: "1", explanation: "Ay²=25−9=16, so |Ay|=4. The sign needs directional information." },
    { id: "q112", type: "mcq", difficulty: "hard", stem: "A=5 east and B=12 north. The magnitude of A−B is…", options: ["7", "13", "17", "60"], answer: "1", explanation: "A−B=(5,−12), magnitude √(25+144)=13." },
    { id: "q113", type: "mcq", difficulty: "hard", stem: "A=5 east and B=12 north. The direction of A−B is…", options: ["67.4° south of east", "67.4° north of east", "22.6° south of east", "west"], answer: "0", explanation: "A−B=(5 east, 12 south), so θ=tan⁻¹(12/5)≈67.4° south of east." },
    { id: "q114", type: "mcq", difficulty: "hard", stem: "Three vectors 21 units north, 16 units east, and 26 units south have resultant…", options: ["5 units north and 16 east", "5 units south and 16 east", "63 units south", "11 units east"], answer: "1", explanation: "Vertical net=21−26=−5 (south); horizontal net=16 east. Magnitude √(16²+5²)≈16.8 units, direction about 17.4° south of east." },
    { id: "q115", type: "mcq", difficulty: "hard", stem: "For the previous resultant, the magnitude is approximately…", options: ["11 units", "16.8 units", "21 units", "42 units"], answer: "1", explanation: "R=√(16²+5²)=√281≈16.8 units." },
    { id: "q116", type: "mcq", difficulty: "hard", stem: "A car travels 10 km north then 5 km west. The displacement magnitude and direction are…", options: ["15 km NW", "√125≈11.18 km, 26.6° west of north", "5 km west", "√75 km, 60° north of west"], answer: "1", explanation: "Magnitude √(10²+5²)=√125≈11.18 km; angle from north=tan⁻¹(5/10)=26.6° west of north." },
    { id: "q117", type: "mcq", difficulty: "hard", stem: "A 40 N vector is 30° above the horizontal. Its components are…", options: ["20 N horizontal, 34.6 N vertical", "34.6 N horizontal, 20 N vertical", "40 N horizontal, 30 N vertical", "20 N each"], answer: "1", explanation: "Horizontal=40cos30°≈34.6 N; vertical=40sin30°=20 N." },
    { id: "q118", type: "mcq", difficulty: "hard", stem: "A vector has components Ax=9.8 m/s and Ay=6.4 m/s. Magnitude is approximately…", options: ["3.4 m/s", "11.7 m/s", "16.2 m/s", "62.7 m/s"], answer: "1", explanation: "√(9.8²+6.4²)=√137≈11.7 m/s." },
    { id: "q119", type: "mcq", difficulty: "hard", stem: "For Ax=9.8 m/s and Ay=6.4 m/s, direction above +x is approximately…", options: ["33.2°", "56.8°", "90°", "23.4°"], answer: "0", explanation: "tanθ=6.4/9.8≈0.653, so θ≈33.2°." },
    { id: "q120", type: "mcq", difficulty: "hard", stem: "Which statement about a vector component is always true for rectangular components?", options: ["Each component is greater than the vector", "A component's magnitude cannot exceed the vector magnitude", "Both components must equal the vector", "Components have to point in the same direction"], answer: "1", explanation: "For A²=Ax²+Ay², each absolute component is at most |A|." },
  ],
};