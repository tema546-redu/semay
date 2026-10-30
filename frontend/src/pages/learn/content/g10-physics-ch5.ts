import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 PHYSICS — UNIT 5
// MAGNETISM
// Source: Grade 10 Physics Student Textbook (pp. 151–176)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, formula boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10PhysicsCh5: Chapter = {
  id: "ch5",
  number: 5,
  title: "Magnetism",
  titleAm: "መግነጢሳዊነት",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, magnetism is the SAME physics as electricity, just from a different angle. Charges moving in a wire create a magnetic field; a magnetic field pushes on moving charges. So this chapter BUILDS on Unit 4.\n\n" +
        "The whole chapter reduces to THREE formulas:\n" +
        "1) Field from a straight wire: B = μ₀I / (2πr)\n" +
        "2) Force on a moving charge: F = qvB sinθ\n" +
        "3) Force on a current-carrying wire: F = ILB sinθ\n\n" +
        "Plus two key ideas:\n" +
        "• Like poles repel, unlike poles attract.\n" +
        "• Right-hand rule gives DIRECTION of field and force.",
      bodyAm:
        "አባቱ፣ መግነጢሳዊነት እና ኤሌክትሪክ አንድ ናቸው። በሚንቀሳቀሱ ቻርጆች መግነጢሳዊ መስክ ይፈጠራል፤ መስክም በሚንቀሳቀሱ ቻርጆች ላይ ኃይል ይሠራል።\n\n" +
        "ሦስቱ ቀመሮች፡\n" +
        "1) B = μ₀I/(2πr)\n" +
        "2) F = qvB sinθ\n" +
        "3) F = ILB sinθ",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 — Two poles, two rules",
          titleAm: "ደረጃ 1 — ሁለት ዋልታዎች፣ ሁለት ደንቦች",
          body:
            "Every magnet has a NORTH pole and a SOUTH pole.\n" +
            "• Like poles REPEL (N–N or S–S)\n" +
            "• Unlike poles ATTRACT (N–S)\n\n" +
            "Magnetic poles are INSEPARABLE — cut a magnet in half and each half has both poles.",
          bodyAm:
            "ሁለት ዋልታዎች: ሰሜንና ደቡብ።\n" +
            "• ተመሳሳይ ይገፋፋሉ\n" +
            "• ተቃራኒ ይሳሳባሉ\n" +
            "ዋልታዎች ሊለያዩ አይችሉም።",
        },
        {
          id: "n0-2",
          title: "Pass 2 — Field lines and B",
          titleAm: "ደረጃ 2 — የመስክ መስመሮችና B",
          body:
            "• Field lines go N → S OUTSIDE magnet, S → N INSIDE.\n" +
            "• Field lines NEVER cross; they form CLOSED loops.\n" +
            "• Denser lines = STRONGER field (strongest at poles).\n" +
            "• B unit = Tesla (T).",
          bodyAm:
            "• መስመሮች ከ N → S ከውጭ፣ S → N ከውስጥ።\n" +
            "• አይቋረጡም።\n" +
            "• የበዙ = ጠንካራ።\n" +
            "• አሃድ: ቴስላ (T)።",
        },
        {
          id: "n0-3",
          title: "Pass 3 — Right-hand rule",
          titleAm: "ደረጃ 3 — የቀኝ እጅ ደንብ",
          body:
            "For a straight wire with current I:\n" +
            "• Thumb → current direction\n" +
            "• Curled fingers → magnetic field direction\n\n" +
            "For force on moving charge:\n" +
            "• Thumb → velocity\n" +
            "• Fingers → B\n" +
            "• Palm faces → force F\n\n" +
            "For force on a wire:\n" +
            "• Thumb → current\n" +
            "• Fingers → B\n" +
            "• Palm faces → force F",
          bodyAm:
            "ሽቦ፡ አውራ ጣት → ጅረት፤ ጣቶች → መስክ።\n" +
            "ቻርጅ፡ አውራ ጣት → ፍጥነት፤ ጣቶች → B፤ መዳፍ → F።",
        },
        {
          id: "n0-4",
          title: "Pass 4 — Two-minute self-check",
          titleAm: "ደረጃ 4 — የ2 ደቂቃ ቼክ",
          body:
            "1) Units on every answer?\n" +
            "2) r in METERS, not cm?\n" +
            "3) I in AMPERES?\n" +
            "4) B in TESLAS?\n" +
            "5) Angle θ — 0°, 90°, 180° — used correctly?\n" +
            "6) sin(90°) = 1, sin(0°) = 0 — applied correctly?",
          bodyAm:
            "1) ሁሉም አሃድ አለው?\n" +
            "2) r በሜትር?\n" +
            "3) I በአምፔር?\n" +
            "4) B በቴስላ?\n" +
            "5) θ በትክክል?\n" +
            "6) sin 90° = 1, sin 0° = 0?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Magnetic field is a VECTOR — direction matters.\n" +
            "• μ₀ = 4π×10⁻⁷ T·m/A — memorize it.\n" +
            "• 1 T = 10⁴ G (gauss).\n" +
            "• Earth's field is only ~5×10⁻⁵ T (0.5 G).\n" +
            "• Field is STRONGEST at poles.\n" +
            "• Monopoles DO NOT exist — cut a magnet, get two dipoles.",
          bodyAm:
            "• B ቬክተር ነው።\n" +
            "• μ₀ = 4π×10⁻⁷ T·m/A።\n" +
            "• 1 T = 10⁴ G።\n" +
            "• ሞኖፖል የለም።",
        },
      ],
    },

    // ============================================================
    // 5.1 MAGNETS
    // ============================================================
    {
      id: "n1",
      title: "5.1 Magnet — Types and Properties",
      titleAm: "5.1 ማግኔት — ዓይነቶችና ባህሪያት",
      body:
        "Abatu, a MAGNET is a material or object that produces a magnetic field, which is responsible for a force that pulls or attracts on other materials. The natural magnet LODESTONE was discovered by the ancient Greeks.",
      bodyAm:
        "አባቱ፣ ማግኔት መግነጢሳዊ መስክ የሚያመነጭ ቁስ ነው። የተፈጥሮ ማግኔት ሎድስቶን በጥንት ግሪኮች ተገኘ።",
      children: [
        {
          id: "n1-1",
          title: "What magnets attract",
          titleAm: "ማግኔቶች ምን ይስባሉ",
          body:
            "Magnets attract materials made of:\n" +
            "• IRON\n" +
            "• STEEL\n" +
            "• NICKEL\n" +
            "• COBALT\n\n" +
            "These are called MAGNETIC MATERIALS.\n\n" +
            "Magnets CANNOT attract: copper, aluminum, wood, plastic, glass.\n\n" +
            "Magnets also can attract or repel OTHER MAGNETS.",
          bodyAm:
            "ማግኔቶች ይስባሉ: ብረት፣ ብረት ብረት፣ ኒኬል፣ ኮባልት።\n" +
            "አይስቡም: መዳብ፣ አሉሚኒየም፣ እንጨት።",
        },
        {
          id: "n1-2",
          title: "THREE types of magnets",
          titleAm: "ሦስቱ የማግኔት ዓይነቶች",
          body:
            "1) PERMANENT magnet:\n" +
            "• Made of steel or magnetic material that is permanently magnetized.\n" +
            "• Does NOT lose its magnetism once magnetized.\n" +
            "• Used in speakers, mobile phones, cars, generators, TVs, sensors.\n\n" +
            "2) TEMPORARY magnet:\n" +
            "• Can be magnetized in the presence of a magnetic field.\n" +
            "• LOSES its magnetism when the field is removed.\n" +
            "• Examples: iron nails, paper clips.\n\n" +
            "3) ELECTROMAGNET:\n" +
            "• A coil of wire wrapped around a metal (iron) core.\n" +
            "• When current flows, it becomes a magnet.\n" +
            "• Strength can be CONTROLLED by changing the current.\n" +
            "• Used in generators, motors, transformers, speakers, MRI, magnetic locks.",
          bodyAm:
            "1) ቋሚ ማግኔት፡ ሁልጊዜ መግነጢሳዊነቱን ይይዛል።\n" +
            "2) ጊዜያዊ ማግኔት፡ መስክ ሲወገድ ያጣዋል።\n" +
            "3) ኤሌክትሮማግኔት፡ በኤሌክትሪክ ጅረት የሚሠራ፤ ጥንካሬው ይቀየራል።",
        },
        {
          id: "n1-3",
          title: "How to DEMAGNETIZE a permanent magnet",
          titleAm: "ቋሚ ማግኔትን እንዴት ማጥፋት",
          body:
            "Three ways to demagnetize:\n" +
            "1) EXPOSE to extreme temperatures (heating).\n" +
            "2) HAMMER it — atoms lose magnetic alignment.\n" +
            "3) STROKE with another magnet in the wrong direction.\n\n" +
            "KEY: All three disrupt the ALIGNMENT of atoms inside the magnet.",
          bodyAm:
            "1) በጣም ሙቀት ማጋለጥ\n" +
            "2) መምታት\n" +
            "3) በስህተት አቅጣጫ በሌላ ማግኔት መሳብ",
        },
        {
          id: "n1-4",
          title: "FIVE properties of magnets",
          titleAm: "አምስቱ የማግኔት ባህሪያት",
          body:
            "1) MAGNETIC POLES: The ends of a magnet where attraction is STRONGEST. Called North Pole and South Pole.\n\n" +
            "2) POLES ALWAYS IN PAIRS: Cut a magnet → each piece has BOTH North and South. Monopoles DO NOT exist.\n\n" +
            "3) FREE SUSPENSION: A freely suspended magnet always points N–S. North pole = points to geographic north.\n\n" +
            "4) LIKE POLES REPEL, UNLIKE POLES ATTRACT.\n\n" +
            "5) FORCE decreases with distance: Magnetic force is STRONGER when magnets are CLOSER.",
          bodyAm:
            "1) ዋልታዎች: መግነጢሳዊ ኃይል በጣም ጠንካራ የሆነባቸው ጫፎች።\n" +
            "2) ዋልታዎች ሁልጊዜ ጥንድ ናቸው።\n" +
            "3) ነፃ ማግኔት ወደ N–S ይመራል።\n" +
            "4) ተመሳሳይ ይገፋፋሉ፤ ተቃራኒ ይሳሳባሉ።\n" +
            "5) ኃይል በርቀት ይቀንሳል።",
        },
        {
          id: "n1-5",
          title: "⚠ Remember trap — Magnets",
          titleAm: "⚠ አትርሳ — ማግኔቶች",
          body:
            "• Magnets NEVER have only ONE pole — cut one, get TWO magnets.\n" +
            "• 'Lodestone' is the FIRST natural magnet ever found.\n" +
            "• Steel is PERMANENT; iron is TEMPORARY (iron loses magnetism faster).\n" +
            "• Electromagnet STRENGTH depends on current, coil turns, and core.\n" +
            "• Magnetic force gets WEAKER with distance — magnets don't attract from far.\n" +
            "• COPPER and ALUMINUM are NOT magnetic (despite being metals).",
          bodyAm:
            "• አንድ ዋልታ ብቻ ያለው ማግኔት የለም።\n" +
            "• ሎድስቶን = የመጀመሪያው ተፈጥሯዊ ማግኔት።\n" +
            "• ብረት = ቋሚ; ማስታወሻ ብረት = ጊዜያዊ።\n" +
            "• ኤሌክትሮማግኔት ጥንካሬ በጅረት ይቀየራል።\n" +
            "• መዳብና አሉሚኒየም መግነጢሳዊ አይደሉም።",
        },
      ],
    },

    // ============================================================
    // 5.2 MAGNETIC FIELD
    // ============================================================
    {
      id: "n2",
      title: "5.2 Magnetic Field",
      titleAm: "5.2 መግነጢሳዊ መስክ",
      body:
        "Abatu, a MAGNETIC FIELD is the region around a magnet or moving charge where the force of magnetism acts. It is a VECTOR — has both magnitude and direction at every point.",
      bodyAm:
        "አባቱ፣ መግነጢሳዊ መስክ በማግኔት ወይም በሚንቀሳቀስ ቻርጅ ዙሪያ መግነጢሳዊ ኃይል የሚሠራበት ክልል ነው።",
      children: [
        {
          id: "n2-1",
          title: "Field lines — how to draw them",
          titleAm: "የመስክ መስመሮች",
          body:
            "Magnetic field lines are IMAGINARY lines used to visualize the field.\n\n" +
            "How to draw them with a compass:\n" +
            "1) Place compass near magnet\n" +
            "2) Mark the direction the needle points\n" +
            "3) Move compass to different spots, mark again\n" +
            "4) Join the marks → field lines",
          bodyAm:
            "የመስክ መስመሮች ምናባዊ ናቸው።\n" +
            "በኮምፓስ እንዴት እንደሚሳሉ ተማር።",
        },
        {
          id: "n2-2",
          title: "SEVEN properties of magnetic field lines",
          titleAm: "ሰባቱ የመስክ መስመር ባህሪያት",
          body:
            "1) They NEVER intersect (cross).\n" +
            "2) They form CLOSED LOOPS.\n" +
            "3) They START at N pole and END at S pole (OUTSIDE magnet).\n" +
            "4) Inside magnet, they go S → N.\n" +
            "5) DENSER lines = STRONGER field.\n" +
            "6) Strongest at POLES (where lines are densest).\n" +
            "7) Magnetic field is a VECTOR (has direction + magnitude).",
          bodyAm:
            "1) አይቋረጡም።\n" +
            "2) የተዘጉ ዑደቶች።\n" +
            "3) ከ N → S ከውጭ።\n" +
            "4) ከውስጥ S → N።\n" +
            "5) የበዙ = ጠንካራ።\n" +
            "6) በዋልታዎች ጠንካራ።\n" +
            "7) ቬክተር ነው።",
        },
        {
          id: "n2-3",
          title: "Field between two magnets",
          titleAm: "በሁለት ማግኔቶች መካከል",
          body:
            "OPPOSITE poles facing each other:\n" +
            "• Field lines CONVERGE (come together)\n" +
            "• This indicates ATTRACTION\n\n" +
            "LIKE poles facing each other:\n" +
            "• Field lines DIVERGE (bend outward)\n" +
            "• This indicates REPULSION",
          bodyAm:
            "ተቃራኒ ዋልታዎች: መስመሮች ይገናኛሉ → ይሳሳባሉ።\n" +
            "ተመሳሳይ ዋልታዎች: መስመሮች ይለያያሉ → ይገፋፋሉ።",
        },
        {
          id: "n2-4",
          title: "⚠ Remember trap — Field lines",
          titleAm: "⚠ አትርሳ — የመስክ መስመሮች",
          body:
            "• Field lines are IMAGINARY — you cannot SEE them; you draw them.\n" +
            "• They NEVER cross (if they did, field would have two directions at one point — impossible).\n" +
            "• They form CLOSED loops — no start or end in nature.\n" +
            "• Density = strength. Close = strong. Far = weak.\n" +
            "• Strongest at poles — not at the middle of the magnet.\n" +
            "• Earth's field ~5×10⁻⁵ T is the SAME shape as a bar magnet's field.",
          bodyAm:
            "• መስመሮች ምናባዊ ናቸው።\n" +
            "• አይቋረጡም።\n" +
            "• የተዘጉ ዑደቶች ናቸው።\n" +
            "• የበዙ = ጠንካራ።\n" +
            "• በዋልታዎች ጠንካራ።",
        },
      ],
    },

    // ============================================================
    // 5.3 EARTH'S MAGNETIC FIELD
    // ============================================================
    {
      id: "n3",
      title: "5.3 Earth's Magnetic Field and the Compass",
      titleAm: "5.3 የምድር መግነጢሳዊ መስክና ኮምፓስ",
      body:
        "Abatu, Earth is a giant magnet. Its field is like a bar magnet tilted about 11° from the geographic axis.",
      bodyAm:
        "አባቱ፣ ምድር ትልቅ ማግኔት ነች። ዘንጉ ከጂኦግራፊያዊ ዘንግ 11° ያህል ዘንበል ይላል።",
      children: [
        {
          id: "n3-1",
          title: "Origin of Earth's field",
          titleAm: "የምድር መስክ ምንጭ",
          body:
            "• Earth's magnetic field originates in the OUTER CORE.\n" +
            "• Thought to be caused by MOVING MOLTEN IRON in the outer core.\n" +
            "• The shape of the field is like a HUGE BAR MAGNET tilted about 11° from Earth's geographic poles.\n" +
            "• Strength at surface ~5×10⁻⁵ T = 0.5 G.",
          bodyAm:
            "• ከውጭ ኮር ይመነጫል።\n" +
            "• በሚንቀሳቀስ የቀለጠ ብረት ምክንያት።\n" +
            "• እንደ ትልቅ ባር ማግኔት ቅርጽ።\n" +
            "• 5×10⁻⁵ ቲ በምድር ገጽ ላይ።",
        },
        {
          id: "n3-2",
          title: "Geographic vs Magnetic poles",
          titleAm: "ጂኦግራፊያዊና መግነጢሳዊ ዋልታዎች",
          body:
            "Earth has TWO sets of poles:\n\n" +
            "1) GEOGRAPHIC poles — where the axis of rotation is (true north/south).\n\n" +
            "2) MAGNETIC poles — where the magnetic field points vertically.\n\n" +
            "KEY INSIGHT:\n" +
            "The magnetic pole near geographic NORTH is actually a magnetic SOUTH pole (because the north end of a compass needle is attracted to it!).",
          bodyAm:
            "ሁለት የዋልታ ስብስቦች፡\n" +
            "1) ጂኦግራፊያዊ — የመሽከርከሪያ ዘንግ\n" +
            "2) መግነጢሳዊ — መስኩ ቀጥ ብሎ የሚወጣበት\n\n" +
            "ወሳኝ: ከጂኦግራፊያዊ ሰሜን አጠገብ ያለው መግነጢሳዊ ዋልታ በእውነት መግነጢሳዊ ደቡብ ነው!",
        },
        {
          id: "n3-3",
          title: "The compass",
          titleAm: "ኮምፓስ",
          body:
            "COMPASS = instrument used to find the direction of a magnetic field.\n\n" +
            "How it works:\n" +
            "• Contains a SMALL MAGNETIZED NEEDLE\n" +
            "• Needle can turn freely\n" +
            "• In a magnetic field, the needle ALIGNS with the field direction\n\n" +
            "Uses:\n" +
            "• Navigation on Earth\n" +
            "• The north end of the needle points toward Earth's magnetic pole in the north\n" +
            "• Once you know north, you can find any other direction",
          bodyAm:
            "ኮምፓስ = የመስክ አቅጣጫ የሚያገኝ መሣሪያ።\n\n" +
            "• ትንሽ መግነጢሳዊ መርፌ\n" +
            "• በነፃነት ይሽከረከራል\n" +
            "• ከመስኩ ጋር ይስማማል",
        },
        {
          id: "n3-4",
          title: "Animals that detect magnetic fields",
          titleAm: "መስኩን የሚለዩ እንስሳት",
          body:
            "Some animals can detect magnetic fields to navigate:\n" +
            "• Pigeons\n" +
            "• Bees\n" +
            "• Monarch butterflies\n" +
            "• Sea turtles\n" +
            "• Fish",
          bodyAm:
            "• ርግቦች\n• ንቦች\n• ሞናርክ ቢራቢሮዎች\n• የባህር ኤሊዎች\n• ዓሦች",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap — Earth & compass",
          titleAm: "⚠ አትርሳ — ምድርና ኮምፓስ",
          body:
            "• The magnetic pole near the geographic NORTH is a MAGNETIC SOUTH pole — this is the classic trap.\n" +
            "• Geographic poles = axis of rotation. Magnetic poles = where field is vertical.\n" +
            "• A compass needle's NORTH end points to Earth's magnetic NORTH pole (which is a magnetic south pole).\n" +
            "• Earth's magnetic field protects life by deflecting harmful charged particles (solar wind).\n" +
            "• Without Earth's magnetic field, life on the surface would be exposed to radiation.",
          bodyAm:
            "• ከሰሜን አጠገብ ያለው መግነጢሳዊ ዋልታ በእውነት ደቡብ ነው!\n" +
            "• ጂኦግራፊያዊ = የመሽከርከሪያ ዘንግ።\n" +
            "• መግነጢሳዊ = ቀጥ ብሎ የሚወጣበት።\n" +
            "• መስኩ ሕይወትን ከጨረር ይጠብቃል።",
        },
      ],
    },

    // ============================================================
    // 5.4 MAGNETIC FIELD OF A CURRENT-CARRYING CONDUCTOR
    // ============================================================
    {
      id: "n4",
      title: "5.4 Magnetic Field of a Current-Carrying Conductor",
      titleAm: "5.4 የጅረት ተሸካሚ ሽቦ መግነጢሳዊ መስክ",
      body:
        "Abatu, this is where electricity and magnetism UNITE. A current-carrying wire creates a magnetic field — this is the Biot-Savart law.",
      bodyAm:
        "አባቱ፣ እዚህ ነው ኤሌክትሪክና መግነጢሳዊነት የሚገናኙት።",
      children: [
        {
          id: "n4-1",
          title: "Biot-Savart law — the formula",
          titleAm: "የቢዮ-ሳቫር ሕግ",
          body:
            "B = μ₀I / (2πr)\n\n" +
            "• B = magnetic field strength (T)\n" +
            "• μ₀ = 4π×10⁻⁷ T·m/A (permeability of free space)\n" +
            "• I = current (A)\n" +
            "• r = distance from wire (m)\n\n" +
            "KEY RELATIONSHIPS:\n" +
            "• B ∝ I → more current → stronger field\n" +
            "• B ∝ 1/r → farther away → weaker field",
          bodyAm:
            "B = μ₀I/(2πr)\n\n" +
            "• μ₀ = 4π×10⁻⁷ T·m/A\n" +
            "• B ∝ I\n" +
            "• B ∝ 1/r",
        },
        {
          id: "n4-2",
          title: "Right-hand rule for the field",
          titleAm: "የቀኝ እጅ ደንብ",
          body:
            "To find the DIRECTION of the magnetic field around a wire:\n\n" +
            "1) Point your RIGHT THUMB in the direction of current.\n" +
            "2) Your CURLED FINGERS curl in the direction of the magnetic field.\n\n" +
            "The field lines form CONCENTRIC CIRCLES around the wire, perpendicular to the wire.",
          bodyAm:
            "1) አውራ ጣት → ጅረት\n" +
            "2) ጣቶች → መስክ\n\n" +
            "መስመሮቹ በሽቦው ዙሪያ ክብ ናቸው።",
        },
        {
          id: "n4-3",
          title: "Worked Example — Field from a long wire",
          titleAm: "ሠርተ ምሳሌ — ከረጅም ሽቦ መስክ",
          body:
            "Problem: Infinitely long wire carries 3 A. Find B at 2 cm.\n\n" +
            "Solution:\n" +
            "I = 3 A, r = 0.02 m\n" +
            "B = μ₀I/(2πr)\n" +
            "  = (4π×10⁻⁷)(3)/(2π × 0.02)\n" +
            "  = (2×10⁻⁷)(3)/0.02\n" +
            "  = 6×10⁻⁷ / 0.02\n" +
            "  = 3×10⁻⁵ T",
          bodyAm:
            "B = 3×10⁻⁵ ቲ",
        },
        {
          id: "n4-4",
          title: "⚠ Remember trap — Field from wire",
          titleAm: "⚠ አትርሳ — ከሽቦ መስክ",
          body:
            "• B ∝ I and B ∝ 1/r — both matter.\n" +
            "• Field lines are CONCENTRIC CIRCLES — not straight lines.\n" +
            "• Field is PERPENDICULAR to the wire, not parallel.\n" +
            "• Reverse the current → field reverses direction.\n" +
            "• r in METERS — convert cm first.\n" +
            "• If r → ∞, B → 0 (field fades far away).\n" +
            "• Earth's field 5×10⁻⁵ T is comparable to a wire carrying ~few amps at a few cm.",
          bodyAm:
            "• B ∝ I, B ∝ 1/r።\n" +
            "• መስመሮች ክብ ናቸው።\n" +
            "• ወደ ሽቦ ቀጥ ያለ።\n" +
            "• ጅረት ሲቀያየር → መስኩ ይቀያየራል።\n" +
            "• r → ∞ → B → 0።",
        },
      ],
    },

    // ============================================================
    // 5.5 MAGNETIC FORCE ON A MOVING CHARGE
    // ============================================================
    {
      id: "n5",
      title: "5.5 Magnetic Force on a Moving Charge",
      titleAm: "5.5 በሚንቀሳቀስ ቻርጅ ላይ መግነጢሳዊ ኃይል",
      body:
        "Abatu, this is the CORE relation: a magnetic field exerts a force on MOVING charges. If the charge is at rest, no magnetic force acts on it.",
      bodyAm:
        "አባቱ፣ መስክ በሚንቀሳቀሱ ቻርጆች ላይ ኃይል ይሠራል። በእረፍት ላይ ያለ ቻርጅ ኃይል አይሰማውም።",
      children: [
        {
          id: "n5-1",
          title: "The formula — Lorentz force",
          titleAm: "የሎሬንትዝ ኃይል",
          body:
            "F = q v B sin θ\n\n" +
            "• F = magnetic force (N)\n" +
            "• q = charge (C)\n" +
            "• v = velocity (m/s)\n" +
            "• B = magnetic field (T)\n" +
            "• θ = angle between v and B\n\n" +
            "SPECIAL CASES:\n" +
            "• θ = 0° (v parallel B) → sin 0° = 0 → F = 0\n" +
            "• θ = 180° (v anti-parallel B) → sin 180° = 0 → F = 0\n" +
            "• θ = 90° (v perpendicular B) → sin 90° = 1 → F = qvB (MAXIMUM)",
          bodyAm:
            "F = qvB sinθ\n\n" +
            "• θ = 0° → F = 0\n" +
            "• θ = 90° → F = qvB (ከፍተኛ)",
        },
        {
          id: "n5-2",
          title: "Right-hand rule for the force",
          titleAm: "የቀኝ እጅ ደንብ ለኃይል",
          body:
            "To find the DIRECTION of F on a POSITIVE charge:\n\n" +
            "1) POINT your RIGHT THUMB in the direction of velocity v.\n" +
            "2) POINT your FINGERS in the direction of B.\n" +
            "3) PALM faces the direction of F.\n\n" +
            "The force is PERPENDICULAR to BOTH v and B — it lies in a plane perpendicular to the plane of v and B.",
          bodyAm:
            "1) አውራ ጣት → v\n" +
            "2) ጣቶች → B\n" +
            "3) መዳፍ → F\n\n" +
            "ኃይሉ ለሁለቱም ቀጥ ያለ ነው።",
        },
        {
          id: "n5-3",
          title: "Worked Example — Parallel motion",
          titleAm: "ሠርተ ምሳሌ — ትይዩ እንቅስቃሴ",
          body:
            "Problem: Charge q = 50 C, v = 3 m/s, B = 1 T, θ = 0°. Find F.\n\n" +
            "Solution:\n" +
            "F = q v B sin 0° = 50 × 3 × 1 × 0 = 0 N\n\n" +
            "When v and B are parallel, the magnetic force is ZERO.",
          bodyAm:
            "F = 50 × 3 × 1 × 0 = 0 N",
        },
        {
          id: "n5-4",
          title: "Worked Example — Perpendicular motion",
          titleAm: "ሠርተ ምሳሌ — ቀጥ ያለ እንቅስቃሴ",
          body:
            "Problem: Electron v = 7.5×10⁶ m/s, B = 1.0×10⁻⁵ T, θ = 90°. Find F.\n\n" +
            "Solution:\n" +
            "q = 1.6×10⁻¹⁹ C (magnitude)\n" +
            "F = qvB sin 90° = (1.6×10⁻¹⁹)(7.5×10⁶)(1.0×10⁻⁵)(1)\n" +
            "  = 1.2×10⁻¹⁷ N",
          bodyAm:
            "F = 1.2×10⁻¹⁷ N",
        },
        {
          id: "n5-5",
          title: "⚠ Remember trap — Magnetic force on charge",
          titleAm: "⚠ አትርሳ — ኃይል በቻርጅ",
          body:
            "• F = 0 if charge is at REST (v = 0).\n" +
            "• F = 0 if v is PARALLEL or anti-parallel to B (sin 0° = 0).\n" +
            "• F is MAXIMUM when v is PERPENDICULAR to B (sin 90° = 1).\n" +
            "• F is ALWAYS perpendicular to v and B — never along v.\n" +
            "• Because F is perpendicular to v, magnetic force does NO WORK on the charge.\n" +
            "• Electron has NEGATIVE charge — right-hand rule reverses for electrons.",
          bodyAm:
            "• v = 0 → F = 0\n" +
            "• v ∥ B → F = 0\n" +
            "• v ⊥ B → F = qvB\n" +
            "• F ⊥ v → ሥራ አይሠራም",
        },
      ],
    },

    // ============================================================
    // 5.6 MAGNETIC FORCE ON CURRENT-CARRYING CONDUCTOR
    // ============================================================
    {
      id: "n6",
      title: "5.6 Magnetic Force on a Current-Carrying Conductor",
      titleAm: "5.6 በጅረት ተሸካሚ ሽቦ ላይ ኃይል",
      body:
        "Abatu, this builds directly on 5.5. A current-carrying wire is a collection of moving charges — so it feels the SAME force logic. The formula uses CURRENT, LENGTH, and B.",
      bodyAm:
        "አባቱ፣ ጅረት ተሸካሚ ሽቦ የሚንቀሳቀሱ ቻርጆች ስብስብ ነው።",
      children: [
        {
          id: "n6-1",
          title: "The formula",
          titleAm: "ቀመሩ",
          body:
            "F = I L B sin θ\n\n" +
            "• F = magnetic force (N)\n" +
            "• I = current (A)\n" +
            "• L = length of wire IN the field (m)\n" +
            "• B = magnetic field (T)\n" +
            "• θ = angle between the wire and B\n\n" +
            "SPECIAL CASES:\n" +
            "• Wire PARALLEL to B → F = 0\n" +
            "• Wire PERPENDICULAR to B → F = ILB (MAXIMUM)",
          bodyAm:
            "F = ILB sinθ\n\n" +
            "• Wire ∥ B → F = 0\n" +
            "• Wire ⊥ B → F = ILB",
        },
        {
          id: "n6-2",
          title: "Right-hand rule for wire",
          titleAm: "የቀኝ እጅ ደንብ ለሽቦ",
          body:
            "To find direction of F:\n\n" +
            "1) FINGERS point in direction of B.\n" +
            "2) THUMB points in direction of CURRENT (conventional).\n" +
            "3) PALM faces the direction of F.\n\n" +
            "KEY: Force is ALWAYS perpendicular to BOTH the wire AND the field.",
          bodyAm:
            "1) ጣቶች → B\n" +
            "2) አውራ ጣት → I\n" +
            "3) መዳፍ → F",
        },
        {
          id: "n6-3",
          title: "Worked Example — Wire perpendicular to field",
          titleAm: "ሠርተ ምሳሌ — ቀጥ ያለ ሽቦ",
          body:
            "Problem: L = 25 cm, B = 0.30 T, I = 6.0 A, wire perpendicular to B.\n\n" +
            "Solution:\n" +
            "L = 0.25 m\n" +
            "F = I L B sin 90° = 6 × 0.25 × 0.30 × 1\n" +
            "  = 0.45 N",
          bodyAm:
            "F = 0.45 N",
        },
        {
          id: "n6-4",
          title: "⚠ Remember trap — Wire force",
          titleAm: "⚠ አትርሳ — የሽቦ ኃይል",
          body:
            "• If the wire is PARALLEL to B → F = 0.\n" +
            "• Force is greatest when wire is PERPENDICULAR to B.\n" +
            "• Force is PERPENDICULAR to both B and wire — this is why motors rotate.\n" +
            "• Use the length IN the field (not the full wire length if only part is in).\n" +
            "• Convention: current direction is CONVENTIONAL current (+ to −).",
          bodyAm:
            "• ሽቦ ∥ B → F = 0\n" +
            "• ሽቦ ⊥ B → F ከፍተኛ\n" +
            "• F ለሁለቱም ቀጥ ያለ",
        },
      ],
    },

    // ============================================================
    // 5.7 FORCE BETWEEN TWO PARALLEL CONDUCTORS
    // ============================================================
    {
      id: "n7",
      title: "5.7 Force Between Two Parallel Current-Carrying Conductors",
      titleAm: "5.7 በሁለት ትይዩ ሽቦዎች መካከል ኃይል",
      body:
        "Abatu, this is a beautiful consequence: two wires carrying currents create magnetic fields, and each field pushes on the OTHER wire's current.",
      bodyAm:
        "አባቱ፣ ሁለት ሽቦዎች መግነጢሳዊ መስክ ይፈጥራሉ፤ እያንዳንዱም በሌላው ላይ ኃይል ይሠራል።",
      children: [
        {
          id: "n7-1",
          title: "The two cases",
          titleAm: "ሁለቱ ጉዳዮች",
          body:
            "CASE 1 — SAME DIRECTION:\n" +
            "• Currents I₁ and I₂ flow the SAME way\n" +
            "• Force is ATTRACTIVE\n" +
            "• Wires pull toward each other\n\n" +
            "CASE 2 — OPPOSITE DIRECTIONS:\n" +
            "• Currents flow in OPPOSITE ways\n" +
            "• Force is REPULSIVE\n" +
            "• Wires push apart",
          bodyAm:
            "ተመሳሳይ አቅጣጫ: ይሳሳባሉ።\n" +
            "ተቃራኒ አቅጣጫ: ይገፋፋሉ።",
        },
        {
          id: "n7-2",
          title: "Magnitudes",
          titleAm: "መጠኖች",
          body:
            "• Forces on BOTH wires are EQUAL in magnitude.\n" +
            "• Directions are OPPOSITE (Newton's third law).\n" +
            "• Force increases with: current (I₁, I₂), and DECREASING distance d.\n" +
            "• Force formula (for full derivation in higher grade):\n" +
            "F/L = μ₀I₁I₂ / (2πd)",
          bodyAm:
            "• ኃይሎቹ እኩል ናቸው\n" +
            "• አቅጣጫቸው ተቃራኒ ነው\n" +
            "• F/L = μ₀I₁I₂/(2πd)",
        },
        {
          id: "n7-3",
          title: "⚠ Remember trap — Parallel wires",
          titleAm: "⚠ አትርሳ — ትይዩ ሽቦዎች",
          body:
            "• SAME direction → ATTRACT — this is the OPPOSITE of charge rules (same charge repels, same current attracts).\n" +
            "• OPPOSITE direction → REPEL — again opposite of charge rules.\n" +
            "• The forces are ALWAYS equal in magnitude (Newton's 3rd law) — regardless of I₁ and I₂.\n" +
            "• The forces are OPPOSITE in direction.",
          bodyAm:
            "• ተመሳሳይ I → ይሳሳባሉ (ቻርጅ ተቃራኒ!)\n" +
            "• ተቃራኒ I → ይገፋፋሉ\n" +
            "• ኃይሎቹ እኩል ናቸው",
        },
      ],
    },

    // ============================================================
    // 5.8 APPLICATIONS
    // ============================================================
    {
      id: "n8",
      title: "5.8 Applications of Magnetism",
      titleAm: "5.8 የመግነጢሳዊነት አገልግሎቶች",
      body:
        "Abatu, magnetism is EVERYWHERE around you. Memorize these five areas — they love to ask these in the exam.",
      bodyAm:
        "አባቱ፣ መግነጢሳዊነት በዙሪያህ በሁሉም ቦታ ነው።",
      children: [
        {
          id: "n8-1",
          title: "Health and Medicine",
          titleAm: "ጤናና መድኃኒት",
          body:
            "• MRI (Magnetic Resonance Imaging) — powerful magnetic fields produce detailed images of bones, organs, tissues.\n" +
            "• MRI magnets are THOUSANDS of times more powerful than common magnets.\n" +
            "• Cancer treatment — magnetically-sensitive fluid injected, strong magnet generates heat to kill cancer cells.",
          bodyAm:
            "• MRI — ጠንካራ መግነጢሳዊ መስክ ምስል ይሠራል።\n" +
            "• ለካንሰር ሕክምና ሙቀት ይፈጥራል።",
        },
        {
          id: "n8-2",
          title: "Home",
          titleAm: "በቤት ውስጥ",
          body:
            "• Refrigerator magnets (hold papers)\n" +
            "• Compass\n" +
            "• Credit cards (magnetic strip stores data)\n" +
            "• Vacuum cleaners, blenders, washing machines (motors)\n" +
            "• Phones, doorbells, shower weights, toys",
          bodyAm:
            "• የማቀዝቀዣ ማግኔቶች\n" +
            "• ኮምፓስ\n" +
            "• ክሬዲት ካርድ\n" +
            "• ሞተሮች (ማሽኖች)",
        },
        {
          id: "n8-3",
          title: "Computers and Electronics",
          titleAm: "ኮምፒውተርና ኤሌክትሮኒክስ",
          body:
            "• Hard drives store data magnetically\n" +
            "• Speakers use coil + magnet to convert electrical signals to sound\n" +
            "• Microphones reverse the process",
          bodyAm:
            "• ሃርድ ድራይቭ\n" +
            "• ስፒከር\n" +
            "• ማይክሮፎን",
        },
        {
          id: "n8-4",
          title: "Electric Power and Industry",
          titleAm: "ኤሌክትሪክ ኃይልና ኢንዱስትሪ",
          body:
            "• Generators — turn MECHANICAL energy to ELECTRICITY\n" +
            "• Motors — turn ELECTRICITY to MECHANICAL energy\n" +
            "• Recycling cranes (magnetic lifters)\n" +
            "• Magnetic sorting in mines\n" +
            "• Food processing — removing metal bits\n" +
            "• Farmers use magnets to trap metal pieces swallowed by cows",
          bodyAm:
            "• ጄኔሬተር\n" +
            "• ሞተር\n" +
            "• ማግኔቲክ ማንሻ\n" +
            "• ማዕድን መለያ\n" +
            "• ምግብ ማጣሪያ",
        },
        {
          id: "n8-5",
          title: "Navigation",
          titleAm: "አቅጣጫ ማውጣት",
          body:
            "• Early Chinese used magnetic compasses with lodestone\n" +
            "• Compass needle aligns N-S\n" +
            "• Modern magnets (neodymium) are much stronger than lodestone",
          bodyAm:
            "• ጥንታዊ ቻይናውያን ኮምፓስ ተጠቅመዋል።",
        },
        {
          id: "n8-6",
          title: "⚠ Remember trap — Applications",
          titleAm: "⚠ አትርሳ — አገልግሎቶች",
          body:
            "• MRI uses MAGNETIC fields, not X-rays.\n" +
            "• Generators: mechanical → electrical.\n" +
            "• Motors: electrical → mechanical.\n" +
            "• Hard drives store data MAGNETICALLY.\n" +
            "• Lodestone (magnetite) is the first natural magnet — weaker than modern neodymium.",
          bodyAm:
            "• MRI = መግነጢሳዊ መስክ\n" +
            "• ጄኔሬተር: ሜካኒካል → ኤሌክትሪክ\n" +
            "• ሞተር: ኤሌክትሪክ → ሜካኒካል\n" +
            "• ሎድስቶን = የመጀመሪያው ተፈጥሯዊ ማግኔት",
        },
      ],
    },

    // ============================================================
    // FORMULA SHEET
    // ============================================================
    {
      id: "nFormula",
      title: "Formula Sheet — Unit 5",
      titleAm: "የቀመር ሉህ — ክፍል 5",
      body:
        "| Quantity                          | Formula                       | Units   |\n" +
        "|-----------------------------------|-------------------------------|---------|\n" +
        "| Field from a straight wire        | B = μ₀I/(2πr)                 | T       |\n" +
        "| Force on a moving charge          | F = qvB sinθ                  | N       |\n" +
        "| Force on a current-carrying wire  | F = ILB sinθ                  | N       |\n" +
        "| Force between parallel wires      | F/L = μ₀I₁I₂/(2πd)            | N/m     |\n" +
        "| Permeability of free space        | μ₀ = 4π×10⁻⁷ T·m/A            | T·m/A   |\n" +
        "| Earth's field at surface          | ~5×10⁻⁵ T = 0.5 G             | T       |\n" +
        "| Gauss conversion                  | 1 T = 10⁴ G                   | —       |",
      bodyAm:
        "| መጠን                          | ቀመር                          | አሃድ   |\n" +
        "|-------------------------------|------------------------------|--------|\n" +
        "| ከቀጥታ ሽቦ መስክ                  | B = μ₀I/(2πr)                | ቲ     |\n" +
        "| በሚንቀሳቀስ ቻርጅ ኃይል            | F = qvB sinθ                 | ኒ     |\n" +
        "| በሽቦ ኃይል                     | F = ILB sinθ                 | ኒ     |\n" +
        "| በትይዩ ሽቦዎች መካከል ኃይል        | F/L = μ₀I₁I₂/(2πd)          | ኒ/ሜ   |\n" +
        "| μ₀                            | 4π×10⁻⁷ T·m/A                | —      |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 5",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1) Magnetic poles are INSEPARABLE — no monopoles.\n" +
        "2) Earth's magnetic pole near geographic NORTH is a magnetic SOUTH pole.\n" +
        "3) Field lines NEVER cross; they form CLOSED loops.\n" +
        "4) Field is STRONGEST at poles — density of lines shows strength.\n" +
        "5) B ∝ I and B ∝ 1/r — both matter.\n" +
        "6) F = qvB sinθ → F = 0 if v ∥ B (sin 0° = 0).\n" +
        "7) F = ILB sinθ → F = 0 if wire ∥ B.\n" +
        "8) Magnetic force is PERPENDICULAR to v and B — never along v.\n" +
        "9) Magnetic force does NO WORK (perpendicular to motion).\n" +
        "10) Parallel currents: SAME → attract, OPPOSITE → repel (OPPOSITE of charge rules).\n" +
        "11) Convert cm to m, mA to A BEFORE plugging in.\n" +
        "12) μ₀ = 4π×10⁻⁷ — memorize this value.\n" +
        "13) MRI uses MAGNETIC fields, not X-rays.\n" +
        "14) Generator: mechanical → electrical; Motor: electrical → mechanical.",
      bodyAm:
        "1) ዋልታዎች ሊለያዩ አይችሉም።\n" +
        "2) ከሰሜን አጠገብ ያለው መግነጢሳዊ ዋልታ ደቡብ ነው።\n" +
        "3) መስመሮች አይቋረጡም።\n" +
        "4) በዋልታዎች ጠንካራ።\n" +
        "5) B ∝ I, B ∝ 1/r።\n" +
        "6) v ∥ B → F = 0።\n" +
        "7) Wire ∥ B → F = 0።\n" +
        "8) F ለ v, B ቀጥ ያለ።\n" +
        "9) F ሥራ አይሠራም።\n" +
        "10) ትይዩ I: ተመሳሳይ → ይሳሳባሉ; ተቃራኒ → ይገፋፋሉ።\n" +
        "11) አሃድ መጀመሪያ ቀይር።\n" +
        "12) μ₀ = 4π×10⁻⁷።\n" +
        "13) MRI = መግነጢሳዊ መስክ።\n" +
        "14) ጄኔሬተር: ሜካኒካል → ኤሌክትሪክ።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "A material that produces a magnetic field is called:", options: ["A conductor", "A magnet", "An insulator", "A resistor"], answer: "1", explanation: "Abatu, a MAGNET produces a magnetic field." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "The first naturally occurring magnet discovered was:", options: ["Iron", "Lodestone", "Copper", "Steel"], answer: "1", explanation: "LODESTONE was discovered by ancient Greeks." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Lodestone is a magnetized form of:", options: ["Iron oxide (magnetite)", "Copper oxide", "Aluminum", "Silver"], answer: "0", explanation: "Lodestone = magnetized IRON OXIDE (magnetite)." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Which of these materials is NOT attracted by a magnet?", options: ["Iron", "Nickel", "Copper", "Cobalt"], answer: "2", explanation: "COPPER is not magnetic." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Every magnet has:", options: ["One pole", "Two poles", "Three poles", "No poles"], answer: "1", explanation: "TWO poles: North and South." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Like poles of two magnets:", options: ["Attract", "Repel", "Have no force", "Neutralize"], answer: "1", explanation: "LIKE poles REPEL (N–N or S–S)." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Unlike poles of two magnets:", options: ["Attract", "Repel", "Have no force", "Neutralize"], answer: "0", explanation: "UNLIKE poles ATTRACT (N–S)." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "If a magnet is cut into two pieces, each piece:", options: ["Has only a North pole", "Has only a South pole", "Has both North and South poles", "Loses all magnetism"], answer: "2", explanation: "Magnetic poles ALWAYS exist in pairs." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "A freely suspended magnet always points:", options: ["East–West", "North–South", "Up–Down", "Randomly"], answer: "1", explanation: "It aligns with Earth's field — North–South." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "The pole of a magnet that points toward geographic north is called:", options: ["South pole", "North pole", "East pole", "West pole"], answer: "1", explanation: "By definition, the North pole points to geographic north." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Which is a PERMANENT magnet?", options: ["Soft iron nail", "Steel magnet", "Paper clip", "Copper wire"], answer: "1", explanation: "STEEL is used in permanent magnets — it keeps its magnetism." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Which is a TEMPORARY magnet?", options: ["Steel bar", "Iron nail", "Neodymium magnet", "Ceramic magnet"], answer: "1", explanation: "IRON NAIL is temporary — loses magnetism when field is removed." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "An electromagnet consists of:", options: ["A permanent magnet only", "A coil of wire around a metal core", "A single atom", "Water"], answer: "1", explanation: "COIL + METAL CORE → becomes magnet when current flows." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "The strength of an electromagnet can be controlled by:", options: ["Sunlight", "Temperature", "Current", "Gravity"], answer: "2", explanation: "CURRENT controls the strength of an electromagnet." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Which way can a permanent magnet LOSE its magnetism?", options: ["Cooling it", "Heating it strongly", "Cleaning it", "Painting it"], answer: "1", explanation: "EXTREME HEAT demagnetizes a magnet." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "A magnetic field is the region where:", options: ["Electric charge is zero", "Magnetic force acts", "Only gravity exists", "There is no force"], answer: "1", explanation: "Magnetic field = region where magnetic force acts." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "The unit of magnetic field strength is:", options: ["Newton", "Volt", "Tesla", "Ampere"], answer: "2", explanation: "SI unit of B = TESLA (T)." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Magnetic field lines around a bar magnet emerge from:", options: ["South pole", "North pole", "Middle", "Randomly"], answer: "1", explanation: "Field lines START at N pole (outside magnet)." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "Magnetic field lines inside a magnet go:", options: ["North to South", "South to North", "Randomly", "Nowhere"], answer: "1", explanation: "Inside the magnet, S → N (to complete the loop)." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "Two magnetic field lines:", options: ["Can cross", "Never cross", "Are parallel", "Are perpendicular"], answer: "1", explanation: "Field lines NEVER CROSS each other." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Magnetic field is STRONGEST at:", options: ["The middle of the magnet", "The poles", "Far away", "Inside the magnet"], answer: "1", explanation: "STRONGEST at POLES — lines are densest." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "Denser field lines indicate:", options: ["Weaker field", "Stronger field", "No field", "Negative field"], answer: "1", explanation: "More lines = STRONGER field." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "Earth's magnetic field originates in:", options: ["The crust", "The mantle", "The outer core", "The atmosphere"], answer: "2", explanation: "OUTER CORE — moving molten iron." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "A compass is used to:", options: ["Measure voltage", "Find direction", "Measure mass", "Make light"], answer: "1", explanation: "Compass finds DIRECTION of magnetic field." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "Earth's magnetic field near surface is about:", options: ["5×10⁻⁵ T", "5 T", "50 T", "5×10⁵ T"], answer: "0", explanation: "≈ 5×10⁻⁵ T = 0.5 G." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "A wire carrying current produces a magnetic field with field lines that are:", options: ["Straight lines", "Concentric circles around the wire", "Parallel to the wire", "Random"], answer: "1", explanation: "CONCENTRIC CIRCLES around the wire." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "The Biot-Savart law gives the field from a straight wire as:", options: ["B = μ₀I × r", "B = μ₀I/(2πr)", "B = I/(μ₀r)", "B = 2πrI"], answer: "1", explanation: "B = μ₀I/(2πr)." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "The value of μ₀ is:", options: ["4π×10⁻⁷ T·m/A", "9×10⁹ N·m²/C²", "1.6×10⁻¹⁹ C", "6.6×10⁻¹¹ N·m²/kg²"], answer: "0", explanation: "μ₀ = 4π×10⁻⁷ T·m/A." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "When current in a straight wire increases, the magnetic field:", options: ["Decreases", "Increases", "Stays the same", "Disappears"], answer: "1", explanation: "B ∝ I → more current → stronger field." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "When distance from a straight wire increases, the magnetic field:", options: ["Increases", "Decreases", "Stays the same", "Becomes zero"], answer: "1", explanation: "B ∝ 1/r → farther → weaker." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "The force on a moving charge in a magnetic field is given by:", options: ["F = ma", "F = qvB sinθ", "F = ILB sinθ", "F = kq/r²"], answer: "1", explanation: "F = qvB sinθ." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "If velocity and B are PARALLEL (θ = 0°), the magnetic force is:", options: ["Maximum", "Zero", "Half maximum", "Infinite"], answer: "1", explanation: "sin 0° = 0 → F = 0." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "If velocity and B are PERPENDICULAR (θ = 90°), the magnetic force is:", options: ["Zero", "Maximum", "Half", "Negative"], answer: "1", explanation: "sin 90° = 1 → F = qvB (maximum)." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "The force on a current-carrying wire in a magnetic field is:", options: ["F = ILB sinθ", "F = IR", "F = qvB sinθ", "F = ma"], answer: "0", explanation: "F = ILB sinθ." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "If the wire is PARALLEL to the field, the magnetic force on it is:", options: ["Maximum", "Zero", "Half", "Negative"], answer: "1", explanation: "Wire ∥ B → sin 0° = 0 → F = 0." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "Two parallel wires with SAME direction current:", options: ["Attract", "Repel", "Have no force", "Neutralize"], answer: "0", explanation: "SAME direction → ATTRACT (opposite of charge rule)." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "Two parallel wires with OPPOSITE direction current:", options: ["Attract", "Repel", "Have no force", "Neutralize"], answer: "1", explanation: "OPPOSITE direction → REPEL." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "MRI uses which technology?", options: ["X-rays", "Ultrasound", "Magnetic fields", "Ultraviolet light"], answer: "2", explanation: "MRI uses POWERFUL MAGNETIC FIELDS." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "A generator converts:", options: ["Electrical energy to mechanical", "Mechanical energy to electrical", "Heat to light", "Light to heat"], answer: "1", explanation: "GENERATOR: mechanical → electrical." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "A motor converts:", options: ["Electrical energy to mechanical", "Mechanical to electrical", "Light to heat", "Heat to light"], answer: "0", explanation: "MOTOR: electrical → mechanical." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "A wire carries 3 A. Field at 2 cm from it is:", options: ["1×10⁻⁵ T", "3×10⁻⁵ T", "6×10⁻⁵ T", "9×10⁻⁵ T"], answer: "1", explanation: "B = μ₀I/(2πr) = (4π×10⁻⁷)(3)/(2π × 0.02) = 3×10⁻⁵ T." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "A wire carries 5 A. Field at 10 cm is:", options: ["1×10⁻⁵ T", "5×10⁻⁵ T", "1×10⁻⁴ T", "5×10⁻⁴ T"], answer: "0", explanation: "B = (4π×10⁻⁷)(5)/(2π × 0.1) = 1×10⁻⁵ T." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "A wire 25 cm long, I = 6 A, B = 0.30 T, wire perpendicular to B. Force:", options: ["0.15 N", "0.45 N", "0.75 N", "1.5 N"], answer: "1", explanation: "F = ILB = 6 × 0.25 × 0.30 = 0.45 N." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "A wire 0.50 m, I = 8 A, at right angle to B. Force = 0.40 N. B:", options: ["0.05 T", "0.10 T", "0.40 T", "0.80 T"], answer: "1", explanation: "B = F/(IL) = 0.40/(8×0.50) = 0.10 T." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "A wire 0.80 m, I = 5 A, B = 0.60 T, perpendicular. Force:", options: ["1.2 N", "2.4 N", "3.0 N", "4.8 N"], answer: "1", explanation: "F = ILB = 5 × 0.80 × 0.60 = 2.4 N." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "A 25 A current flows vertically upward. Field 10 cm away:", options: ["2.5×10⁻⁵ T", "5.0×10⁻⁵ T", "1.0×10⁻⁴ T", "5.0×10⁻⁴ T"], answer: "1", explanation: "B = μ₀I/(2πr) = (4π×10⁻⁷ × 25)/(2π × 0.10) = 5.0×10⁻⁵ T." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "Charge q = 50 C moving at 3 m/s parallel to B = 1 T. Force:", options: ["0 N", "150 N", "50 N", "3 N"], answer: "0", explanation: "θ = 0° → sin 0° = 0 → F = 0." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "Charge 1.6×10⁻¹⁹ C, v = 10⁶ m/s, B = 0.5 T, θ = 90°. Force:", options: ["8×10⁻¹⁴ N", "1.6×10⁻¹³ N", "3.2×10⁻¹³ N", "8×10⁻¹⁹ N"], answer: "0", explanation: "F = qvB = (1.6×10⁻¹⁹)(10⁶)(0.5) = 8×10⁻¹⁴ N." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "An electron has NEGATIVE charge. If its velocity is right and B is up, the magnetic force is:", options: ["Same as positive charge", "Opposite to a positive charge", "Zero", "Along v"], answer: "1", explanation: "Negative charge reverses the force direction compared to positive." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "The magnetic force on a moving charge is PERPENDICULAR to:", options: ["Only v", "Only B", "Both v and B", "Neither"], answer: "2", explanation: "F ⊥ v AND F ⊥ B — perpendicular to both." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "The magnetic force on a moving charge does:", options: ["Positive work", "Negative work", "No work (perpendicular to v)", "Infinite work"], answer: "2", explanation: "F ⊥ v → NO WORK." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "A particle at REST in a magnetic field experiences force:", options: ["qvB", "Zero", "Infinite", "Depends on charge"], answer: "1", explanation: "v = 0 → F = 0." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "Magnetic force is MAXIMUM when the angle between v and B is:", options: ["0°", "30°", "90°", "180°"], answer: "2", explanation: "θ = 90° → sin 90° = 1 → maximum." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "Earth's magnetic pole NEAR the geographic north pole is actually:", options: ["A magnetic north pole", "A magnetic south pole", "Neutral", "Non-magnetic"], answer: "1", explanation: "It's a magnetic SOUTH pole — this is why compass north end points to it." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "Magnetic field lines are IMAGINARY because:", options: ["They don't exist as real lines", "They are visible only at night", "They only form at poles", "They are infinite"], answer: "0", explanation: "Field LINES are a visual tool — not physical objects." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "The field lines between TWO OPPOSITE poles:", options: ["Diverge", "Converge", "Cross", "Form circles"], answer: "1", explanation: "OPPOSITE poles: lines CONVERGE (indicate attraction)." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "The field lines between TWO LIKE poles:", options: ["Converge", "Diverge", "Cross", "Form a straight line"], answer: "1", explanation: "LIKE poles: lines DIVERGE (indicate repulsion)." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Permanent magnets are used in:", options: ["Speakers only", "MRI only", "Speakers, phones, cars, generators", "Only generators"], answer: "2", explanation: "Permanent magnets in speakers, phones, cars, generators, TVs, sensors." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Electromagnets are used in:", options: ["Only toys", "Generators, motors, transformers, MRI", "Only loudspeakers", "Only compasses"], answer: "1", explanation: "Electromagnets in generators, motors, transformers, speakers, MRI, locks." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "Stroking a magnet with another in the WRONG direction will:", options: ["Increase its strength", "Reduce its strength", "Do nothing", "Make it stronger permanently"], answer: "1", explanation: "Improper stroking DEMAGNETIZES the magnet." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "Hammering a magnet will:", options: ["Strengthen it", "Weaken it (demagnetize)", "Do nothing", "Reverse polarity"], answer: "1", explanation: "HAMMERING disrupts atomic alignment → demagnetizes." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Which two animals can detect magnetic fields for navigation?", options: ["Pigeons and bees", "Cats and dogs", "Cows and sheep", "Crocodiles and snakes"], answer: "0", explanation: "Pigeons, bees, Monarch butterflies, sea turtles, fish." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "1 Tesla equals how many gauss?", options: ["10² G", "10³ G", "10⁴ G", "10⁵ G"], answer: "2", explanation: "1 T = 10⁴ G." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "A wire has B = 5×10⁻⁵ T at 2 cm. What is B at 4 cm (same current)?", options: ["Same", "2× larger", "Half (2.5×10⁻⁵ T)", "Zero"], answer: "2", explanation: "B ∝ 1/r → double r → half B." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "A wire with 2 A current. If current doubles, B becomes:", options: ["Half", "Same", "Double", "Quadruple"], answer: "2", explanation: "B ∝ I → double I → double B." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "A straight wire carrying current has field lines in the shape of:", options: ["Straight lines", "Concentric circles", "Squares", "Parabolas"], answer: "1", explanation: "CONCENTRIC CIRCLES around the wire." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "Reversing the current direction in a wire will:", options: ["Increase field", "Decrease field", "Reverse field direction", "Have no effect"], answer: "2", explanation: "Reversing current REVERSES the field direction." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "Magnetic field lines from a bar magnet are CLOSED LOOPS because:", options: ["They are real physical loops", "Magnetic field has no source or sink (monopoles don't exist)", "Of gravitational effects", "Of wind"], answer: "1", explanation: "No magnetic monopoles → field lines are closed loops." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "A compass needle's NORTH end points to:", options: ["Geographic north only", "Earth's magnetic north pole", "East", "The user"], answer: "1", explanation: "Compass north end points toward Earth's magnetic north pole." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "Which magnetic field is comparable to Earth's (~5×10⁻⁵ T)?", options: ["MRI field", "Field of a wire carrying a few amps at a few cm", "Superconducting magnet", "Neodymium magnet at surface"], answer: "1", explanation: "Wire field at cm distances with few amps ≈ Earth's field." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "The formula F = qvB sinθ is called:", options: ["Coulomb's law", "Lorentz force", "Ohm's law", "Faraday's law"], answer: "1", explanation: "LORENTZ FORCE — magnetic force on moving charge." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "The magnetic force on a current-carrying wire is ZERO when:", options: ["Current is high", "Wire is parallel to field", "Wire is perpendicular to field", "Magnetic field is strong"], answer: "1", explanation: "Wire ∥ B → F = 0." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "The force between parallel wires with OPPOSITE currents:", options: ["Attractive", "Repulsive", "Zero", "Depends on current direction"], answer: "1", explanation: "OPPOSITE currents REPEL." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "For two parallel wires, the forces on each wire are:", options: ["Different in magnitude", "Equal in magnitude, opposite in direction", "Equal in magnitude, same direction", "Both zero"], answer: "1", explanation: "Equal magnitude, opposite direction (Newton's 3rd law)." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Credit cards store data using:", options: ["Optical code", "Magnetic strip", "Electronic chip only", "Paper ink"], answer: "1", explanation: "MAGNETIC STRIP stores data." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "Hard drives store data:", options: ["Optically", "Electrically", "Magnetically", "Chemically"], answer: "2", explanation: "MAGNETICALLY — magnetic domains on disk." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "Which is NOT a magnetic material?", options: ["Iron", "Nickel", "Cobalt", "Copper"], answer: "3", explanation: "COPPER is not magnetic." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "Compared to lodestone, modern neodymium magnets are:", options: ["Weaker", "Same strength", "Much stronger", "Non-magnetic"], answer: "2", explanation: "MODERN neodymium magnets are MUCH stronger than lodestone." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "Which is the correct right-hand rule for field direction around a wire?", options: ["Thumb = current; fingers curl = field", "Thumb = field; fingers curl = current", "Fingers = current; palm = field", "Palm = current"], answer: "0", explanation: "THUMB = current; curled FINGERS = field." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "A wire carrying current perpendicular to B = 0.5 T with L = 0.4 m and I = 2 A. Force:", options: ["0.4 N", "0.8 N", "1.2 N", "2.0 N"], answer: "0", explanation: "F = ILB = 2 × 0.4 × 0.5 = 0.4 N." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "An electron moves at 7.5×10⁶ m/s perpendicular to Earth's field 1.0×10⁻⁵ T. Force:", options: ["1.2×10⁻¹⁷ N", "1.2×10⁻¹⁸ N", "1.2×10⁻¹⁶ N", "1.2×10⁻¹⁵ N"], answer: "0", explanation: "F = (1.6×10⁻¹⁹)(7.5×10⁶)(1.0×10⁻⁵) = 1.2×10⁻¹⁷ N." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "A wire 400 m long in 0.20 T field experiences 2.5 N force. Current:", options: ["0.025 A", "0.031 A", "0.1 A", "0.25 A"], answer: "1", explanation: "F = ILB → I = F/(LB) = 2.5/(400 × 0.20) = 0.031 A." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "If charge moves PARALLEL to B, magnetic force is zero because:", options: ["Charge is neutral", "sin θ = 0", "B is zero", "There's no field"], answer: "1", explanation: "sin 0° = 0 → F = 0." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Charge of 2 µC moves at 4×10⁵ m/s perpendicular to 0.4 T. Force:", options: ["1.6×10⁻¹ N", "3.2×10⁻¹ N", "1.6×10⁻⁶ N", "3.2×10⁻⁶ N"], answer: "1", explanation: "F = qvB = 2×10⁻⁶ × 4×10⁵ × 0.4 = 3.2×10⁻¹ N." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "A proton and electron enter a magnetic field with SAME velocity. Their magnetic forces are:", options: ["Same direction, same magnitude", "Opposite direction, same magnitude", "Same direction, different magnitude", "Zero"], answer: "1", explanation: "Same |q| → same magnitude; opposite sign → OPPOSITE force." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "Field from 10 A wire at 5 cm:", options: ["2×10⁻⁵ T", "4×10⁻⁵ T", "5×10⁻⁵ T", "8×10⁻⁵ T"], answer: "1", explanation: "B = μ₀I/(2πr) = (4π×10⁻⁷)(10)/(2π × 0.05) = 4×10⁻⁵ T." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "Two parallel wires both carry 10 A in SAME direction, 5 cm apart. They:", options: ["Attract each other", "Repel each other", "Have no force", "Cancel fields"], answer: "0", explanation: "Same direction → ATTRACT." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "Two parallel wires carry SAME current in OPPOSITE directions. They:", options: ["Attract", "Repel", "Neutralize", "Melt"], answer: "1", explanation: "Opposite direction → REPEL." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "The force on a charge moving in a magnetic field does NO WORK because:", options: ["Force is zero", "Force is perpendicular to velocity", "Charge is neutral", "Field is zero"], answer: "1", explanation: "F ⊥ v → W = F·d·cos 90° = 0." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "A wire is bent into a LOOP in a magnetic field. Net force on the LOOP is:", options: ["Same as straight wire", "Zero (forces cancel)", "Maximum", "Infinite"], answer: "1", explanation: "Forces on opposite sides cancel → net zero on closed loop." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "A charged particle moves in a circle in a uniform magnetic field. This is because:", options: ["Force is parallel to velocity", "Force is perpendicular to velocity — acts as centripetal force", "Field is non-uniform", "Charge is neutral"], answer: "1", explanation: "PERPENDICULAR force → circular motion (centripetal)." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "Two equal charges move SAME velocity into same B field. Forces are:", options: ["Same magnitude and direction", "Same magnitude, opposite direction", "Different magnitude", "Zero"], answer: "0", explanation: "Same charge, same v, same B → same force vector." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Which statement about magnetic field lines from two LIKE poles is TRUE?", options: ["They cross", "They converge and cross", "They diverge, forming a neutral point in the middle", "They form straight lines"], answer: "2", explanation: "LIKE poles: lines DIVERGE; field lines cancel at a neutral point between them." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "For a straight wire, if BOTH current and distance are doubled, the field becomes:", options: ["Same", "Double", "Half", "Quarter"], answer: "0", explanation: "B ∝ I/r → both double → SAME." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "Which of the following is TRUE about magnetic poles?", options: ["Monopoles exist", "Cutting a magnet gives separate N and S poles", "Cutting a magnet gives two smaller magnets each with both poles", "There is only N pole"], answer: "2", explanation: "Cutting gives TWO magnets, each with N and S." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "A compass placed near a bar magnet will:", options: ["Point to geographic north", "Align with the local magnetic field", "Stop working", "Melt"], answer: "1", explanation: "Compass aligns with LOCAL field — which may not be north if near another magnet." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "A proton moves horizontally to the EAST in Earth's field which points NORTH. The magnetic force on it:", options: ["Up", "Down", "North", "East"], answer: "0", explanation: "Right-hand rule: v = east, B = north → F = UP (perpendicular to both)." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "Which application converts electrical energy to mechanical energy?", options: ["Generator", "Motor", "Transformer", "Battery"], answer: "1", explanation: "MOTOR: electrical → mechanical." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "Which application uses MAGNETIC fields to produce detailed images of the body?", options: ["X-ray", "MRI", "Ultrasound", "CT scan"], answer: "1", explanation: "MRI = MAGNETIC RESONANCE IMAGING." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "If the field is 2 T, this is approximately how many gauss?", options: ["2 G", "200 G", "20,000 G", "200,000 G"], answer: "2", explanation: "1 T = 10⁴ G → 2 T = 2×10⁴ G." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "easy", stem: "Define a magnet and list its basic properties.", answer: "A magnet is a material or object that produces a magnetic field, which exerts forces on other magnets and magnetic materials (iron, steel, nickel, cobalt).\n\nProperties:\n1) Has two poles (North and South) — poles cannot be separated.\n2) Like poles repel; unlike poles attract.\n3) Freely suspended magnet points N-S.\n4) Magnetic force is strongest at the poles.\n5) Magnetic force decreases with distance.", explanation: "Abatu, memorize at least 4 properties." },
    { id: "q102", type: "short", difficulty: "easy", stem: "What are the THREE types of magnets?", answer: "1) PERMANENT magnet — keeps its magnetism permanently (steel).\n2) TEMPORARY magnet — only magnetized while in a magnetic field (iron nail).\n3) ELECTROMAGNET — a coil around an iron core; becomes magnetic when current flows; strength controlled by current.", explanation: "Permanent, temporary, electromagnet." },
    { id: "q103", type: "short", difficulty: "easy", stem: "List THREE ways to demagnetize a permanent magnet.", answer: "1) Expose to extreme temperatures (heating).\n2) Hammer it (disrupts atomic alignment).\n3) Stroke with another magnet in the wrong direction.", explanation: "Heat, hammer, wrong stroking." },
    { id: "q104", type: "short", difficulty: "easy", stem: "State the properties of magnetic field lines (at least FIVE).", answer: "1) Never cross each other.\n2) Form closed loops.\n3) Start at N pole and end at S pole (outside magnet).\n4) Inside the magnet, go S → N.\n5) Denser lines = stronger field.\n6) Strongest at poles.\n7) Field is a vector (has direction + magnitude).", explanation: "Field lines never cross, closed loops, N→S outside." },
    { id: "q105", type: "short", difficulty: "medium", stem: "What is a magnetic field? Where is it strongest?", answer: "A magnetic field is the region around a magnet or moving electric charge within which magnetic force acts. It is a vector (has direction + magnitude). It is STRONGEST at the POLES where field lines are densest.", explanation: "Field = region of magnetic force; strongest at poles." },
    { id: "q106", type: "short", difficulty: "medium", stem: "How does Earth's magnetic field originate and why is it important?", answer: "Origin: moving MOLTEN IRON in Earth's OUTER CORE generates the field. Shape: like a huge bar magnet tilted about 11° from geographic poles.\n\nImportance: it deflects harmful charged particles (solar wind) from the Sun — protecting the atmosphere and life on Earth. Also used for navigation (compasses).", explanation: "Outer core → molten iron motion. Protects from solar radiation." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Explain how a compass works.", answer: "A compass contains a small magnetized needle free to rotate. In a magnetic field, the needle aligns with the field. Earth's magnetic field makes the north end of the needle point toward Earth's magnetic north pole (which is actually a magnetic south pole). Once you know north, you can find any other direction.", explanation: "Compass aligns with local magnetic field." },
    { id: "q108", type: "short", difficulty: "medium", stem: "State the formula for the magnetic field from a straight current-carrying wire and name its symbols.", answer: "B = μ₀I/(2πr)\n\n• B = magnetic field strength (T)\n• μ₀ = 4π×10⁻⁷ T·m/A (permeability of free space)\n• I = current (A)\n• r = distance from wire (m)\n\nB ∝ I (more current → stronger field); B ∝ 1/r (farther → weaker).", explanation: "Biot-Savart law for straight wire." },
    { id: "q109", type: "short", difficulty: "medium", stem: "A wire carries 3 A. Find B at 2 cm from the wire.", answer: "B = μ₀I/(2πr)\n = (4π×10⁻⁷)(3)/(2π × 0.02)\n = (2×10⁻⁷ × 3)/0.02\n = 6×10⁻⁷/0.02\n = 3×10⁻⁵ T", explanation: "Convert cm to m first." },
    { id: "q110", type: "short", difficulty: "medium", stem: "State the formula for magnetic force on a moving charge. When is it maximum? When zero?", answer: "F = qvB sinθ\n\n• MAXIMUM when θ = 90° (v ⊥ B): F = qvB\n• ZERO when θ = 0° or 180° (v parallel/anti-parallel to B): F = 0\n• ZERO when v = 0 (charge at rest)", explanation: "F = qvB sinθ." },
    { id: "q111", type: "short", difficulty: "medium", stem: "A charge of 50 C moves at 3 m/s parallel to B = 1 T. Find F.", answer: "θ = 0° → sin 0° = 0\nF = qvB sin 0° = 50 × 3 × 1 × 0 = 0 N", explanation: "Parallel motion → no magnetic force." },
    { id: "q112", type: "short", difficulty: "medium", stem: "State the formula for magnetic force on a current-carrying wire. When is it maximum?", answer: "F = ILB sinθ\n\n• I = current (A)\n• L = length of wire IN the field (m)\n• B = field (T)\n• θ = angle between wire and B\n\nMAXIMUM when θ = 90° (wire ⊥ B): F = ILB\nZERO when θ = 0° (wire ∥ B).", explanation: "F = ILB sinθ." },
    { id: "q113", type: "short", difficulty: "medium", stem: "A wire 25 cm long with 6 A current is perpendicular to 0.30 T field. Find F.", answer: "L = 0.25 m, θ = 90°\nF = ILB sin 90° = 6 × 0.25 × 0.30 = 0.45 N", explanation: "Perpendicular → sin 90° = 1." },
    { id: "q114", type: "short", difficulty: "medium", stem: "Explain the force between two parallel current-carrying wires (both cases).", answer: "SAME direction → ATTRACT. Each wire's magnetic field pushes the other's current toward it.\n\nOPPOSITE direction → REPEL. Each wire's field pushes the other's current away.\n\nNote: this is OPPOSITE of charge rules (where like charges repel). Forces are equal in magnitude (Newton's 3rd law), opposite in direction.", explanation: "Same I → attract; Opposite I → repel." },
    { id: "q115", type: "short", difficulty: "hard", stem: "A wire 0.50 m carries 8 A at right angles to a field. Force is 0.40 N. Find B.", answer: "F = ILB sin 90° = ILB\nB = F/(IL) = 0.40/(8 × 0.50) = 0.40/4.0 = 0.10 T", explanation: "B = F/(IL) at 90°." },
    { id: "q116", type: "short", difficulty: "hard", stem: "A wire 0.80 m carries 5 A perpendicular to 0.60 T. Find force.", answer: "F = ILB sin 90° = 5 × 0.80 × 0.60 = 2.4 N", explanation: "Perpendicular force = ILB." },
    { id: "q117", type: "short", difficulty: "hard", stem: "25 A current flows vertically upward in a wall. Find B at 10 cm to the side.", answer: "r = 0.10 m\nB = μ₀I/(2πr) = (4π×10⁻⁷ × 25)/(2π × 0.10)\n = (2×10⁻⁷ × 25)/0.10\n = 5×10⁻⁶/0.10\n = 5×10⁻⁵ T\n\nDirection: by right-hand rule, curling fingers around the wire.", explanation: "5×10⁻⁵ T — same order as Earth's field." },
    { id: "q118", type: "short", difficulty: "hard", stem: "An electron moves at 7.5×10⁶ m/s perpendicular to Earth's field 1.0×10⁻⁵ T. Find F.", answer: "F = qvB sin 90° = (1.6×10⁻¹⁹)(7.5×10⁶)(1.0×10⁻⁵)(1)\n = 1.6 × 7.5 × 10⁻¹⁹ × 10⁶ × 10⁻⁵\n = 12 × 10⁻¹⁸\n = 1.2×10⁻¹⁷ N", explanation: "Use magnitude of charge." },
    { id: "q119", type: "short", difficulty: "hard", stem: "Explain why the magnetic force does no work on a moving charge.", answer: "Work = Force × distance × cos(angle between force and displacement). The magnetic force F is ALWAYS PERPENDICULAR to the velocity v (and therefore to the displacement). So cos 90° = 0 → W = 0. This means magnetic force changes DIRECTION of motion, but not SPEED (kinetic energy stays constant).", explanation: "F ⊥ v → cos 90° = 0 → W = 0." },
    { id: "q120", type: "short", difficulty: "hard", stem: "List FOUR applications of magnetism and explain each briefly.", answer: "1) MRI — uses powerful magnetic fields to produce detailed images of body organs.\n2) Generators — convert MECHANICAL energy to ELECTRICAL energy (magnetic induction).\n3) Hard drives — store computer data magnetically on a disk.\n4) Speakers — a coil + magnet convert electrical signals into sound vibrations.\n\nOther uses: motors (electrical → mechanical), credit cards, compasses, magnetic sorting, food processing.", explanation: "MRI, generators, hard drives, speakers." },
  ],
};