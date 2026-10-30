import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 PHYSICS — UNIT 4
// STATIC AND CURRENT ELECTRICITY
// Source: Grade 10 Physics Student Textbook (pp. 89–148)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, formula boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10PhysicsCh4: Chapter = {
  id: "ch4",
  number: 4,
  title: "Static and Current Electricity",
  titleAm: "ስታቲክና የጅረት ኤሌክትሪክ",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter has TWO halves that look different but share the same logic:\n" +
        "1) STATIC electricity — charges at REST (charging, Coulomb's law, electric field).\n" +
        "2) CURRENT electricity — charges MOVING (circuits, Ohm's law, series/parallel).\n\n" +
        "The WHOLE chapter reduces to FOUR formulas and THREE key ideas:\n" +
        "• Coulomb: F = kq₁q₂/r²\n" +
        "• Field: E = F/q = kq/r²\n" +
        "• Ohm: V = IR\n" +
        "• Power of circuits: series adds R, parallel reciprocals.\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ ይህ ክፍል ሁለት ክፍሎች አሉት፡\n" +
        "1) ስታቲክ — በእረፍት ላይ ያሉ ቻርጆች።\n" +
        "2) የጅረት — የሚንቀሳቀሱ ቻርጆች።\n\n" +
        "አራቱ ቀመሮች፡\n" +
        "• ኩሎም፡ F = kq₁q₂/r²\n" +
        "• መስክ፡ E = F/q = kq/r²\n" +
        "• ኦም፡ V = IR\n" +
        "• ተከታታይ R ይደመራል፤ ትይዩ ተገላቢጦሽ ይደመራል።",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the two halves",
          titleAm: "ደረጃ 1 · ሁለቱን ክፍሎች መረዳት",
          body:
            "STATIC (at rest):\n" +
            "• Charges come in + and −.\n" +
            "• Same sign → REPEL. Opposite → ATTRACT.\n" +
            "• Force given by Coulomb's law.\n" +
            "• Electric field = force per unit charge.\n\n" +
            "CURRENT (moving):\n" +
            "• Current I = ΔQ/Δt (rate of flow of charge).\n" +
            "• Voltage V = work per charge (drives the current).\n" +
            "• Resistance R = opposition to flow.\n" +
            "• Ohm's law: V = IR.",
          bodyAm:
            "ስታቲክ: በእረፍት ላይ ያሉ ቻርጆች።\n" +
            "የጅረት: የሚንቀሳቀሱ ቻርጆች።\n" +
            "• I = ΔQ/Δt\n" +
            "• V = W/Q\n" +
            "• R = V/I\n" +
            "• V = IR",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the FIVE formulas",
          titleAm: "ደረጃ 2 · አምስቱን ቀመሮች አስታውስ",
          body:
            "1) Coulomb: F = kq₁q₂/r²  (k = 9×10⁹ N·m²/C²)\n" +
            "2) Electric field: E = F/q  or  E = kq/r²\n" +
            "3) Current: I = ΔQ/Δt\n" +
            "4) Ohm: V = IR\n" +
            "5) Resistance of a wire: R = ρL/A",
          bodyAm:
            "1) ኩሎም፡ F = kq₁q₂/r²\n" +
            "2) መስክ፡ E = F/q = kq/r²\n" +
            "3) ጅረት፡ I = ΔQ/Δt\n" +
            "4) ኦም፡ V = IR\n" +
            "5) ሽቦ ተቃውሞ፡ R = ρL/A",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master the two circuit rules",
          titleAm: "ደረጃ 3 · ሁለቱን የወረዳ ደንቦች ተቆጣጥር",
          body:
            "SERIES: current is the same; voltages add; R_eq = R₁ + R₂ + ...\n" +
            "PARALLEL: voltage is the same; currents add; 1/R_eq = 1/R₁ + 1/R₂ + ...\n\n" +
            "Quick checks:\n" +
            "• R_eq in SERIES > each individual R.\n" +
            "• R_eq in PARALLEL < smallest individual R.",
          bodyAm:
            "ተከታታይ: I አንድ ነው፤ V ይደመራል፤ R_eq = R₁ + R₂ + ...\n" +
            "ትይዩ: V አንድ ነው፤ I ይደመራል፤ 1/R_eq = 1/R₁ + 1/R₂ + ...",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Units on every answer?\n" +
            "2) Coulomb answers in N, field in N/C, current in A, voltage in V, resistance in Ω?\n" +
            "3) Charge in COULOMBS — convert µC (×10⁻⁶), nC (×10⁻⁹), mC (×10⁻³) FIRST.\n" +
            "4) Distance in METERS — convert cm, mm BEFORE using r².\n" +
            "5) Did you apply the correct series/parallel rule?",
          bodyAm:
            "1) ሁሉም አሃድ አለው?\n" +
            "2) ኩሎም → N፤ E → N/C፤ I → A፤ V → V፤ R → Ω?\n" +
            "3) ቻርጅ በኩሎም — µC/nC/mC መጀመሪያ ቀይር!\n" +
            "4) ርቀት በሜትር — ሴ.ሜ/mm መጀመሪያ ቀይር!",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Coulomb's law: only the MAGNITUDES of q₁ and q₂ matter for size. Direction comes from signs.\n" +
            "• Electric field direction is defined as the direction of force on a POSITIVE test charge.\n" +
            "• Ohm's law only valid for ohmic materials at constant temperature.\n" +
            "• Series current is same, parallel voltage is same — memorize this.\n" +
            "• In a circuit, never connect an ammeter in parallel (it would short-circuit).\n" +
            "• Never connect a voltmeter in series (it would block current).",
          bodyAm:
            "• ኩሎም: መጠኖች ብቻ ለመጠን፤ ምልክቶች ለአቅጣጫ።\n" +
            "• መስክ አቅጣጫ = በአዎንታዊ ቻርጅ ላይ ያለ ኃይል አቅጣጫ።\n" +
            "• ኦም ለቋሚ ሙቀት ብቻ።\n" +
            "• ተከታታይ I አንድ; ትይዩ V አንድ።\n" +
            "• Ammeter በትይዩ አታገናኝ።\n" +
            "• Voltmeter በተከታታይ አታገናኝ።",
        },
      ],
    },

    // ============================================================
    // 4.1 CHARGES IN NATURE
    // ============================================================
    {
      id: "n1",
      title: "4.1 Charges in Nature",
      titleAm: "4.1 በተፈጥሮ ውስጥ ያሉ ቻርጆች",
      body:
        "Abatu, EVERY object around you contains huge amounts of electric charge. There are TWO kinds: POSITIVE and NEGATIVE.",
      bodyAm:
        "አባቱ፣ በዙሪያህ ያለው ነገር ሁሉ እጅግ ብዙ ቻርጅ አለው። ሁለት ዓይነት አሉ፡ አዎንታዊና አሉታዊ።",
      children: [
        {
          id: "n1-1",
          title: "Two types of charge",
          titleAm: "ሁለቱ የቻርጅ ዓይነቶች",
          body:
            "• POSITIVE charge — carried by PROTONS.\n" +
            "• NEGATIVE charge — carried by ELECTRONS.\n\n" +
            "KEY RULE:\n" +
            "• Same sign → REPEL (+,+ or −,−)\n" +
            "• Opposite sign → ATTRACT (+,−)\n\n" +
            "NEUTRAL object: equal numbers of + and − charges. If an object has MORE of one kind, it is CHARGED.",
          bodyAm:
            "• አዎንታዊ = በፕሮቶን ይወሰዳል።\n" +
            "• አሉታዊ = በኤሌክትሮን ይወሰዳል።\n\n" +
            "ተመሳሳይ → ይገፋፋሉ።\n" +
            "ተቃራኒ → ይሳሳባሉ።",
        },
        {
          id: "n1-2",
          title: "The unit of charge",
          titleAm: "የቻርጅ አሃድ",
          body:
            "SI unit of charge: COULOMB (C).\n\n" +
            "Charge of ONE electron: e = 1.6×10⁻¹⁹ C (magnitude)\n" +
            "Number of electrons in 1 C: 6.25×10¹⁸ electrons\n\n" +
            "Common sub-units:\n" +
            "• 1 µC = 1×10⁻⁶ C (microcoulomb)\n" +
            "• 1 nC = 1×10⁻⁹ C (nanocoulomb)\n" +
            "• 1 mC = 1×10⁻³ C (millicoulomb)",
          bodyAm:
            "የቻርጅ አሃድ: ኩሎም (C)።\n\n" +
            "e = 1.6×10⁻¹⁹ C\n" +
            "1 C = 6.25×10¹⁸ ኤሌክትሮኖች\n\n" +
            "µC = 10⁻⁶፣ nC = 10⁻⁹፣ mC = 10⁻³",
        },
        {
          id: "n1-3",
          title: "Conservation of charge",
          titleAm: "የቻርጅ ጥበቃ",
          body:
            "LAW OF CONSERVATION OF CHARGE:\n" +
            "Electric charges are NEITHER CREATED NOR DESTROYED — they are only TRANSFERRED from one material to another.\n\n" +
            "Total charge in an ISOLATED system never changes.\n\n" +
            "Examples:\n" +
            "• Comb + hair: electrons transfer from hair to comb.\n" +
            "• Rubbing a balloon on your sweater: electrons move between them.\n\n" +
            "After charging:\n" +
            "• Object that GAINS electrons → NEGATIVE\n" +
            "• Object that LOSES electrons → POSITIVE",
          bodyAm:
            "ሕግ: ቻርጅ አይፈጠርም፣ አይጠፋም — ይተላለፋል ብቻ።\n\n" +
            "በገለልተኛ ሥርዓት ውስጥ ጠቅላላ ቻርጅ አይለወጥም።",
        },
        {
          id: "n1-4",
          title: "Quantization of charge",
          titleAm: "የቻርጅ ብዛት",
          body:
            "QUANTIZATION: charge occurs only in DISCRETE amounts — integer multiples of e.\n\n" +
            "q = ne\n\n" +
            "• q = total charge (C)\n" +
            "• n = integer (number of electrons)\n" +
            "• e = 1.6×10⁻¹⁹ C\n\n" +
            "Example: A charge of 3.2×10⁻¹⁹ C = 2e → 2 electrons deficit.",
          bodyAm:
            "q = ne\n\n" +
            "• n = ኢንቲጀር\n" +
            "• e = 1.6×10⁻¹⁹ C",
        },
        {
          id: "n1-5",
          title: "⚠ Remember trap — Charge basics",
          titleAm: "⚠ አትርሳ — የቻርጅ መሠረታዊ ወጥመዶች",
          body:
            "• Only ELECTRONS move in charging — protons are fixed in place.\n" +
            "• Object LOSES electrons → POSITIVE (net charge).\n" +
            "• Object GAINS electrons → NEGATIVE.\n" +
            "• 1 C is a HUGE amount of charge — usually you work with µC or nC.\n" +
            "• n in q = ne is an INTEGER (never 1.5 electrons — only whole numbers).\n" +
            "• Charge is conserved — total never changes, only distribution.",
          bodyAm:
            "• ኤሌክትሮኖች ብቻ ይንቀሳቀሳሉ።\n" +
            "• ኤሌክትሮን ማጣት → አዎንታዊ።\n" +
            "• ኤሌክትሮን ማግኘት → አሉታዊ።\n" +
            "• 1 C በጣም ትልቅ ነው።\n" +
            "• n ኢንቲጀር ብቻ ነው።",
        },
      ],
    },

    // ============================================================
    // 4.2 METHODS OF CHARGING
    // ============================================================
    {
      id: "n2",
      title: "4.2 Methods of Charging a Body",
      titleAm: "4.2 የቻርጅ ዘዴዎች",
      body:
        "Abatu, CHARGING is the process of adding or removing charges from a body. There are THREE methods — memorize each one and what charge it leaves behind.",
      bodyAm:
        "አባቱ፣ ቻርጅ ማድረግ = ቻርጅ መጨመር ወይም ማስወገድ። ሦስት ዘዴዎች አሉ።",
      children: [
        {
          id: "n2-1",
          title: "1) Charging by RUBBING (friction)",
          titleAm: "1) በማሻሸት (ግጭት) መሙላት",
          body:
            "Two DIFFERENT neutral materials rubbed together → electrons transfer from one to the other.\n\n" +
            "RESULT: two objects end with OPPOSITE signs.\n\n" +
            "Example (comb + hair):\n" +
            "• Comb gains electrons → NEGATIVE\n" +
            "• Hair loses electrons → POSITIVE\n\n" +
            "Why do some materials gain electrons? Atoms in some materials pull electrons more strongly than others (electron affinity).",
          bodyAm:
            "ሁለት የተለያዩ ገለልተኛ ቁሶች ሲሻሸቁ → ኤሌክትሮኖች ይተላለፋሉ።\n\n" +
            "ውጤት: ሁለቱም ተቃራኒ ምልክት ያገኛሉ።\n\n" +
            "ምሳሌ: ማበጠሪያ + ፀጉር\n" +
            "• ማበጠሪያ: ኤሌክትሮን አገኘ → አሉታዊ\n" +
            "• ፀጉር: ኤሌክትሮን አጣ → አዎንታዊ",
        },
        {
          id: "n2-2",
          title: "2) Charging by CONDUCTION (contact)",
          titleAm: "2) በግንኙነት መሙላት",
          body:
            "A CHARGED object TOUCHES a NEUTRAL object → some charge transfers.\n\n" +
            "RESULT: both objects end with the SAME sign.\n" +
            "The originally charged object loses some charge (weaker); the neutral object becomes charged with the SAME sign.\n\n" +
            "Example: (−) charged rod touches neutral sphere → sphere becomes (−); rod becomes less (−).",
          bodyAm:
            "የተሞላ ነገር ገለልተኛ ነገርን ይነካል → ቻርጅ ይተላለፋል።\n\n" +
            "ውጤት: ሁለቱም ተመሳሳይ ምልክት።\n" +
            "የተሞላው ነገር ቻርጁ ይቀንሳል።",
        },
        {
          id: "n2-3",
          title: "3) Charging by INDUCTION",
          titleAm: "3) በኢንዳክሽን መሙላት",
          body:
            "Charged object brought NEAR (but not touching) a neutral conductor that is GROUNDED → free electrons redistribute.\n\n" +
            "STEPS:\n" +
            "1) Bring charged rod NEAR neutral sphere (no touch).\n" +
            "2) Sphere's near side becomes OPPOSITE charge; far side becomes SAME charge.\n" +
            "3) GROUND the sphere (or far side): charges of the same sign escape to earth.\n" +
            "4) Remove ground, then remove rod.\n\n" +
            "RESULT: sphere ends with the OPPOSITE sign to the rod.",
          bodyAm:
            "የተሞላ ነገር በገለልተኛ ማስተላለፊያ አጠገብ (ሳይነካ) → ኤሌክትሮኖች ይለያያሉ።\n\n" +
            "ደረጃዎች:\n" +
            "1) የተሞላ ዘንግ አቅራቢ አስቀምጥ\n" +
            "2) ቅርብ ጎን ተቃራኒ፣ ሩቅ ጎን ተመሳሳይ\n" +
            "3) ምድር አገናኝ\n" +
            "4) ምድር አንሳ፣ ከዚያ ዘንጉን አንሳ\n\n" +
            "ውጤት: ሉሉ ከዘንጉ ተቃራኒ ምልክት ያገኛል።",
        },
        {
          id: "n2-4",
          title: "⚠ Remember trap — The THREE results",
          titleAm: "⚠ አትርሳ — ሦስቱ ውጤቶች",
          body:
            "MEMORIZE THIS TABLE:\n\n" +
            "| Method       | Result                              |\n" +
            "|--------------|-------------------------------------|\n" +
            "| Rubbing      | OPPOSITE signs on the two objects   |\n" +
            "| Conduction   | SAME sign on both                   |\n" +
            "| Induction    | OPPOSITE sign (only on the conductor)|\n\n" +
            "• Rubbing and Conduction need CONTACT (or rubbing).\n" +
            "• Induction does NOT need contact — only proximity + grounding.\n" +
            "• Induction requires a GROUNDED or long neutral conductor.",
          bodyAm:
            "በማሻሸት = ተቃራኒ\n" +
            "በግንኙነት = ተመሳሳይ\n" +
            "በኢንዳክሽን = ተቃራኒ (ማስተላለፊያው ላይ ብቻ)",
        },
      ],
    },

    // ============================================================
    // 4.3 THE ELECTROSCOPE
    // ============================================================
    {
      id: "n3",
      title: "4.3 The Electroscope",
      titleAm: "4.3 ኤሌክትሮስኮፕ",
      body:
        "Abatu, the ELECTROSCOPE is a simple device that DETECTS charge. Master its behavior and the exam questions become easy.",
      bodyAm:
        "አባቱ፣ ኤሌክትሮስኮፕ ቻርጅ የሚለይ መሣሪያ ነው።",
      children: [
        {
          id: "n3-1",
          title: "Structure",
          titleAm: "አወቃቀር",
          body:
            "Parts:\n" +
            "• Glass container\n" +
            "• Metal rod (inside)\n" +
            "• Two thin GOLD LEAVES at the bottom of the rod\n" +
            "• Metal plate (or cap) at the top of the rod\n\n" +
            "How it works: When a charge is present on the plate, the leaves REPEL (like charges). The amount of divergence (spread) shows the size of the charge.",
          bodyAm:
            "ክፍሎች:\n" +
            "• የመስታወት ማሰሮ\n" +
            "• የብረት ዘንግ\n" +
            "• ሁለት ቀጭን የወርቅ ቅጠሎች\n" +
            "• የብረት ጠፍጣፋ (ከላይ)",
        },
        {
          id: "n3-2",
          title: "How it detects charge",
          titleAm: "ቻርጅ እንዴት እንደሚለይ",
          body:
            "Step 1: Bring a CHARGED object near the metal plate (WITHOUT touching it).\n" +
            "Step 2: This INDUCES a charge on the plate.\n" +
            "Step 3: Opposite charge moves down to the leaves.\n" +
            "Step 4: The two leaves have the SAME charge → they REPEL.\n" +
            "Step 5: Leaves DIVERGE (spread apart).\n\n" +
            "More charge → bigger divergence.\n" +
            "If the charge is removed → leaves fall back (return to normal).",
          bodyAm:
            "1) የተሞላ ነገር ወደ ጠፍጣፋ አቅርብ (ሳትነካ)\n" +
            "2) በጠፍጣፋ ላይ ቻርጅ ይነሳሳል\n" +
            "3) ተቃራኒ ቻርጅ ወደ ቅጠሎች ይወርዳል\n" +
            "4) ሁለቱ ቅጠሎች ተመሳሳይ ቻርጅ → ይገፋፋሉ\n" +
            "5) ቅጠሎቹ ይለያያሉ",
        },
        {
          id: "n3-3",
          title: "⚠ Remember trap — Electroscope",
          titleAm: "⚠ አትርሳ — ኤሌክትሮስኮፕ",
          body:
            "• The electroscope NEVER shows the SIZE of the charge in coulombs — only the PRESENCE and (roughly) the magnitude.\n" +
            "• Divergence = charge present. No divergence = neutral or no charge.\n" +
            "• To test if a rod is charged, bring it near the plate — if leaves diverge, it's charged.\n" +
            "• Leave the rod there → leaves stay apart.\n" +
            "• Remove the rod → leaves fall (back to neutral).\n" +
            "• TOUCHING the rod to the plate (conduction) also charges the leaves PERMANENTLY.",
          bodyAm:
            "• ኤሌክትሮስኮፕ የቻርጁን መጠን በኩሎም አያሳይም — መኖሩን ብቻ።\n" +
            "• ቅጠሎቹ መለያየታቸው = ቻርጅ አለ።\n" +
            "• ዘንጉን ሳትነካ ማቅረብ → ቻርጅ መኖሩን ታውቃለህ።\n" +
            "• መንካት → በቋሚነት ይሞላል።",
        },
      ],
    },

    // ============================================================
    // 4.4 ELECTRICAL DISCHARGE
    // ============================================================
    {
      id: "n4",
      title: "4.4 Electrical Discharge",
      titleAm: "4.4 የኤሌክትሪክ ፈሳሽ",
      body:
        "Abatu, DISCHARGE = the process of REMOVING excess charges from a charged body. The rapid transfer of charges creates a SPARK.",
      bodyAm:
        "አባቱ፣ ፈሳሽ = ቻርጅ ማስወገድ። ፈጣን ሽግግር ብልጭታ ይፈጥራል።",
      children: [
        {
          id: "n4-1",
          title: "What is discharge?",
          titleAm: "ፈሳሽ ምንድን ነው?",
          body:
            "DISCHARGE = removing excess electric charges from a charged body.\n\n" +
            "How: Touch the charged body with a CONDUCTOR (usually the earth).\n" +
            "Result: Body becomes NEUTRAL again.\n\n" +
            "Example: Touching a charged metal sphere with your hand (you and the earth are conductors) → sphere discharges.",
          bodyAm:
            "ፈሳሽ = ተጨማሪ ቻርጅ ማስወገድ።\n\n" +
            "መንካት በማስተላለፊያ → ገለልተኛ ይሆናል።",
        },
        {
          id: "n4-2",
          title: "Lightning — the giant discharge",
          titleAm: "መብረቅ — ትልቁ ፈሳሽ",
          body:
            "LIGHTNING = very large electrical discharge caused by induction in thunderstorms.\n\n" +
            "How lightning forms:\n" +
            "1) In a thunderstorm, a NEGATIVE charge builds up at the base of a cloud.\n" +
            "2) This negative charge INDUCES a POSITIVE charge on the ground below.\n" +
            "3) When enough charge builds up, air (normally an insulator) BREAKS DOWN and becomes a conductor.\n" +
            "4) The cloud discharges excess electrons to the ground → SPARK = LIGHTNING.\n" +
            "5) Rapid expansion of air → THUNDER.",
          bodyAm:
            "መብረቅ = በነጎድጓድ ውስጥ የሚፈጠር ትልቅ ፈሳሽ።\n\n" +
            "1) ከደመና ታች አሉታዊ ቻርጅ ይከማቻል\n" +
            "2) መሬት ላይ አዎንታዊ ቻርጅ ይነሳሳል\n" +
            "3) አየር ማስተላለፊያ ይሆናል\n" +
            "4) ብልጭታ\n" +
            "5) ነጎድጓድ",
        },
        {
          id: "n4-3",
          title: "Grounding — the safety technique",
          titleAm: "ማገናኘት — የደህንነት ዘዴ",
          body:
            "GROUNDING = providing a safe path for excess charges to flow into the earth.\n\n" +
            "Why earth is a good ground:\n" +
            "• The earth is HUGE — it can absorb or donate enormous amounts of charge without affecting its overall neutral state.\n" +
            "• Ground is always considered NEUTRAL.\n\n" +
            "LIGHTNING RODS:\n" +
            "• Fitted on top of buildings.\n" +
            "• Made of metal, connected to a metal cable leading into the ground.\n" +
            "• Purpose: the rod gets struck FIRST and safely conducts the surge to earth — protecting the building.",
          bodyAm:
            "ማገናኘት = ተጨማሪ ቻርጅ ወደ መሬት የሚፈስበት ደህንነቱ የተጠበቀ መንገድ።\n\n" +
            "መሬት ትልቅ ነው → ሁሉንም ቻርጅ ይወስዳል።\n\n" +
            "የመብረቅ ዘንግ: በህንፃ ላይ ተጭኖ ወደ መሬት ያስተላልፋል።",
        },
        {
          id: "n4-4",
          title: "⚠ Remember trap — Discharge & Lightning",
          titleAm: "⚠ አትርሳ — ፈሳሽና መብረቅ",
          body:
            "• Lightning = electrical discharge, NOT 'electricity falling from sky'.\n" +
            "• Lightning can strike BETWEEN clouds OR from cloud to ground.\n" +
            "• A car protects you from lightning because the METAL SHELL conducts the charge AROUND you, not because of the rubber tires.\n" +
            "• Lightning rods DO NOT prevent lightning — they REDIRECT it safely.\n" +
            "• During thunderstorm, avoid: high places, open fields, tall objects, water, metal fences, metal bleachers.",
          bodyAm:
            "• መብረቅ = ፈሳሽ ነው።\n" +
            "• መኪና ሽፋኑ ብረት ስለሆነ ይጠብቃል (ጎማ አይደለም)።\n" +
            "• የመብረቅ ዘንግ መብረቅን አያቆምም — ያስተላልፋል።\n" +
            "• ከፍተኛ ቦታ፣ ክፍት መስክ፣ ውሃ፣ ብረት አስወግድ።",
        },
      ],
    },

    // ============================================================
    // 4.5 COULOMB'S LAW
    // ============================================================
    {
      id: "n5",
      title: "4.5 Coulomb's Law",
      titleAm: "4.5 የኩሎም ሕግ",
      body:
        "Abatu, this is THE most tested formula in electrostatics. Memorize it PERFECTLY — the exam loves Coulomb questions.",
      bodyAm:
        "አባቱ፣ ይህ በኤሌክትሮስታቲክስ ውስጥ በጣም የሚፈተን ቀመር ነው።",
      children: [
        {
          id: "n5-1",
          title: "The formula",
          titleAm: "ቀመሩ",
          body:
            "F = k × |q₁ q₂| / r²\n\n" +
            "• F = electric force (N)\n" +
            "• q₁, q₂ = charges (C) — use MAGNITUDES for size\n" +
            "• r = distance between charges (m)\n" +
            "• k = 9×10⁹ N·m²/C² (Coulomb constant)\n\n" +
            "KEY RELATIONSHIPS:\n" +
            "• F ∝ q₁q₂ → double one charge → double the force\n" +
            "• F ∝ 1/r² → double the distance → force ÷ 4",
          bodyAm:
            "F = k|q₁q₂|/r²\n\n" +
            "• k = 9×10⁹ N·m²/C²\n" +
            "• F ∝ q₁q₂\n" +
            "• F ∝ 1/r²",
        },
        {
          id: "n5-2",
          title: "Direction of force",
          titleAm: "የኃይል አቅጣጫ",
          body:
            "Force direction depends on SIGNS:\n" +
            "• LIKE charges (+,+ or −,−) → REPULSIVE (push apart)\n" +
            "• OPPOSITE charges (+,−) → ATTRACTIVE (pull together)\n\n" +
            "Force is always along the LINE joining the two charges.",
          bodyAm:
            "• ተመሳሳይ ምልክት → ይገፋፋሉ\n" +
            "• ተቃራኒ → ይሳሳባሉ",
        },
        {
          id: "n5-3",
          title: "Worked Example — Two point charges",
          titleAm: "ሠርተ ምሳሌ — ሁለት ቻርጆች",
          body:
            "Problem: q₁ = 5.0 µC, q₂ = −12.0 µC, separated by r = 30 cm. Find the force.\n\n" +
            "Solution:\n" +
            "Convert: q₁ = 5×10⁻⁶ C, q₂ = 12×10⁻⁶ C, r = 0.30 m\n" +
            "F = (9×10⁹)(5×10⁻⁶)(12×10⁻⁶) / (0.30)²\n" +
            "  = (9×10⁹)(60×10⁻¹²) / 0.09\n" +
            "  = 540×10⁻³ / 0.09\n" +
            "  = 6.0 N\n\n" +
            "Direction: OPPOSITE signs → ATTRACTIVE (force pulls the charges together).",
          bodyAm:
            "q₁ = 5×10⁻⁶ C, q₂ = 12×10⁻⁶ C, r = 0.30 ሜ\n" +
            "F = 6.0 N\n" +
            "ተቃራኒ ምልክት → ይሳሳባሉ",
        },
        {
          id: "n5-4",
          title: "Worked Example — Force changes",
          titleAm: "ሠርተ ምሳሌ — የኃይል ለውጥ",
          body:
            "Problem: Two charges 2 µC and −4 µC, 20 cm apart.\n\n" +
            "Solution:\n" +
            "Convert: q₁ = 2×10⁻⁶, q₂ = 4×10⁻⁶, r = 0.20 m\n" +
            "F = (9×10⁹)(2×10⁻⁶)(4×10⁻⁶) / (0.20)²\n" +
            "  = (9×10⁹)(8×10⁻¹²) / 0.04\n" +
            "  = 72×10⁻³ / 0.04\n" +
            "  = 1.8 N\n\n" +
            "Direction: opposite signs → ATTRACTIVE.",
          bodyAm:
            "q₁ = 2×10⁻⁶, q₂ = 4×10⁻⁶, r = 0.20 ሜ\n" +
            "F = 1.8 N, ተቃራኒ → ይሳሳባሉ",
        },
        {
          id: "n5-5",
          title: "⚠ Remember trap — Coulomb's law",
          titleAm: "⚠ አትርሳ — የኩሎም ሕግ",
          body:
            "• Use MAGNITUDES of charges in the formula (|q₁| |q₂|). Signs only tell you ATTRACT vs REPEL.\n" +
            "• Convert ALL µC, nC, mC to COULOMBS first!\n" +
            "• Convert ALL cm, mm to METERS first!\n" +
            "• r is SQUARED — this means doubling r divides force by 4, not 2.\n" +
            "• F ∝ q₁q₂: if you HALVE q₁, force halves.\n" +
            "• Force between CHARGES at rest is ALWAYS along the line joining them.\n" +
            "• Force is NOT affected by intervening medium in this chapter (assumed air/vacuum).",
          bodyAm:
            "• መጠኖች ብቻ ተጠቀም።\n" +
            "• ሁሉንም µC/nC/mC ወደ C ቀይር።\n" +
            "• ሁሉንም ሴ.ሜ/mm ወደ ሜትር ቀይር።\n" +
            "• r ስኩዌር ነው — r ድርብ → F/4።\n" +
            "• ኃይሉ በቻርጆች መስመር ላይ ነው።",
        },
      ],
    },

    // ============================================================
    // 4.6 THE ELECTRIC FIELD
    // ============================================================
    {
      id: "n6",
      title: "4.6 The Electric Field",
      titleAm: "4.6 የኤሌክትሪክ መስክ",
      body:
        "Abatu, the ELECTRIC FIELD is the region around a charge where another charge would FEEL A FORCE. It is a VECTOR — has both magnitude and direction.",
      bodyAm:
        "አባቱ፣ መስክ = በአንድ ቻርጅ ዙሪያ ሌላ ቻርጅ ኃይል የሚሰማበት ክልል ነው።",
      children: [
        {
          id: "n6-1",
          title: "Two formulas for E",
          titleAm: "ሁለቱ ቀመሮች",
          body:
            "1) From force and charge:\n" +
            "E = F / q\n" +
            "• E = electric field (N/C)\n" +
            "• F = force (N)\n" +
            "• q = test charge (C)\n\n" +
            "2) From a point charge:\n" +
            "E = k q / r²\n" +
            "• q = source charge (C)\n" +
            "• r = distance from q (m)\n\n" +
            "Direction: away from + charge; toward − charge.",
          bodyAm:
            "1) E = F/q\n" +
            "2) E = kq/r²\n\n" +
            "አቅጣጫ: ከ + ወደ ውጭ; ወደ − ውስጥ",
        },
        {
          id: "n6-2",
          title: "Worked Example — Field from a point charge",
          titleAm: "ሠርተ ምሳሌ — ከአንድ ቻርጅ መስክ",
          body:
            "Problem: Point charge q = 2.0 nC. Find E at r = 5.0 mm from it.\n\n" +
            "Solution:\n" +
            "q = 2×10⁻⁹ C, r = 5×10⁻³ m\n" +
            "E = kq/r² = (9×10⁹)(2×10⁻⁹) / (5×10⁻³)²\n" +
            "  = 18 / (25×10⁻⁶)\n" +
            "  = 7.2×10⁵ N/C\n\n" +
            "Direction: positive charge → E points AWAY from q.",
          bodyAm:
            "q = 2×10⁻⁹ C, r = 5×10⁻³ ሜ\n" +
            "E = 7.2×10⁵ N/C\n" +
            "ከ + ወደ ውጭ",
        },
        {
          id: "n6-3",
          title: "Field lines — the rules",
          titleAm: "የመስክ መስመሮች — ደንቦች",
          body:
            "• Field lines NEVER CROSS each other.\n" +
            "• Lines are PERPENDICULAR to the surface of a charged conductor.\n" +
            "• More lines = stronger field (denser field lines).\n" +
            "• Field lines START at + charges and END at − charges.\n" +
            "• Between two like charges → lines BEND AWAY from each other.\n" +
            "• Between two opposite charges → lines BEND TOWARD each other.",
          bodyAm:
            "• መስመሮች አይቋረጡም።\n" +
            "• ወደ ገጽታ ቀጥ ያሉ ናቸው።\n" +
            "• የበዙ መስመሮች = ጠንካራ መስክ።\n" +
            "• ከ + ይጀምራሉ፣ በ − ያበቃሉ።",
        },
        {
          id: "n6-4",
          title: "⚠ Remember trap — Electric field",
          titleAm: "⚠ አትርሳ — የኤሌክትሪክ መስክ",
          body:
            "• E is a VECTOR (has direction), NOT a scalar.\n" +
            "• E direction is the direction of force on a POSITIVE test charge.\n" +
            "• For a NEGATIVE source charge, E points TOWARD the charge.\n" +
            "• E is defined at EVERY point in space around the charge — not just where another charge is.\n" +
            "• F = qE — force on a charge q in an existing field E.\n" +
            "• E from a point charge DECREASES as r INCREASES (1/r²).",
          bodyAm:
            "• E ቬክተር ነው።\n" +
            "• አቅጣጫ = በአዎንታዊ ቻርጅ ላይ ያለ ኃይል አቅጣጫ።\n" +
            "• አሉታዊ ምንጭ → ወደ ውስጥ።\n" +
            "• F = qE።\n" +
            "• E ∝ 1/r²።",
        },
      ],
    },

    // ============================================================
    // 4.7 ELECTRIC CIRCUITS
    // ============================================================
    {
      id: "n7",
      title: "4.7 Electric Circuits",
      titleAm: "4.7 የኤሌክትሪክ ወረዳዎች",
      body:
        "Abatu, a CIRCUIT is a path through which charges can FLOW. Without a complete (closed) path, no current flows.",
      bodyAm:
        "አባቱ፣ ወረዳ = ቻርጅ የሚፈስበት መንገድ።",
      children: [
        {
          id: "n7-1",
          title: "Components of a simple circuit",
          titleAm: "የቀላል ወረዳ ክፍሎች",
          body:
            "• BATTERY — source of electrical energy (drives charges).\n" +
            "• WIRES — conductors that carry current.\n" +
            "• SWITCH — opens or closes the circuit.\n" +
            "• LOAD (bulb/resistor) — dissipates energy as light/heat.\n" +
            "• (Optional) METERS — ammeter and voltmeter.",
          bodyAm:
            "• ባትሪ\n• ሽቦ\n• ስዊች\n• ጭነት (አምፑል)\n• መለኪያዎች",
        },
        {
          id: "n7-2",
          title: "Open vs Closed circuit",
          titleAm: "የተከፈተ እና የተዘጋ ወረዳ",
          body:
            "CLOSED circuit: the path is COMPLETE — current FLOWS, bulb LIGHTS.\n\n" +
            "OPEN circuit: the path is BROKEN — NO current, bulb OFF.\n\n" +
            "Common reasons for open circuit:\n" +
            "• Switch is OFF\n" +
            "• Bulb is burnt out\n" +
            "• Wire is broken",
          bodyAm:
            "የተዘጋ: ሙሉ መንገድ → I ይፈሳል → አምፑል ያበራል።\n" +
            "የተከፈተ: የተሰበረ → I አይፈሳም → አምባሩል ጠፍቷል።",
        },
        {
          id: "n7-3",
          title: "⚠ Remember trap — Circuits",
          titleAm: "⚠ አትርሳ — ወረዳዎች",
          body:
            "• Current needs a CLOSED path — open means NO current.\n" +
            "• Current flows from − terminal to + terminal INSIDE the battery (electron flow); OUTSIDE, conventional current flows + to −.\n" +
            "• Electrical energy comes from the BATTERY (source).\n" +
            "• The bulb's filament RESISTS current, converting electrical energy to light and heat.\n" +
            "• Wires are assumed to have NEGLIGIBLE resistance unless stated.",
          bodyAm:
            "• ወረዳ የተዘጋ መሆን አለበት።\n" +
            "• ጅረት በባትሪ ውስጥ − ወደ +፣ ውጭ + ወደ −።\n" +
            "• ኃይል ከባትሪ።\n" +
            "• ሽቦ ተቃውሞ የለውም ተብሎ ይታሰባል።",
        },
      ],
    },

    // ============================================================
    // 4.8 CURRENT, VOLTAGE, OHM'S LAW
    // ============================================================
    {
      id: "n8",
      title: "4.8 Current, Voltage and Ohm's Law",
      titleAm: "4.8 ጅረት፣ ቮልቴጅና የኦም ሕግ",
      body:
        "Abatu, this section has the THREE quantities the rest of the chapter builds on: current (I), voltage (V), resistance (R). MASTER their definitions and their relationship.",
      bodyAm:
        "አባቱ፣ ሦስቱ መጠኖች፡ ጅረት (I)፣ ቮልቴጅ (V)፣ ተቃውሞ (R)።",
      children: [
        {
          id: "n8-1",
          title: "Current — definition and formula",
          titleAm: "ጅረት — ትርጉምና ቀመር",
          body:
            "CURRENT (I) = rate of flow of electric charge.\n\n" +
            "I = ΔQ / Δt\n\n" +
            "• I = current (A)\n" +
            "• ΔQ = charge (C)\n" +
            "• Δt = time (s)\n\n" +
            "1 A = 1 C/s.\n\n" +
            "Conventional current: from + to − (outside battery).\n" +
            "Electron current: from − to + (actual electron flow).\n" +
            "By convention, we use CONVENTIONAL current direction.",
          bodyAm:
            "I = ΔQ/Δt\n\n" +
            "• አሃድ: አምፔር (A)\n" +
            "• 1 A = 1 C/s",
        },
        {
          id: "n8-2",
          title: "Voltage (potential difference)",
          titleAm: "ቮልቴጅ",
          body:
            "VOLTAGE (V) = work done per unit charge to move charge between two points.\n\n" +
            "V = W / Q\n\n" +
            "• V = voltage (V)\n" +
            "• W = work (J)\n" +
            "• Q = charge (C)\n\n" +
            "1 V = 1 J/C.\n\n" +
            "A BATTERY supplies voltage by converting chemical energy into electrical energy.",
          bodyAm:
            "V = W/Q\n\n" +
            "• 1 V = 1 J/C\n" +
            "• ባትሪ ኬሚካል ጉልበትን ወደ ኤሌክትሪክ ይለውጣል።",
        },
        {
          id: "n8-3",
          title: "Resistance — definition and formula",
          titleAm: "ተቃውሞ",
          body:
            "RESISTANCE (R) = opposition to the flow of charge.\n\n" +
            "R = V / I\n\n" +
            "• R = resistance (Ω)\n" +
            "• V = voltage (V)\n" +
            "• I = current (A)\n\n" +
            "1 Ω = 1 V/A.\n\n" +
            "RESISTANCE OF A WIRE:\n" +
            "R = ρL / A\n\n" +
            "• ρ = resistivity of material (Ω·m)\n" +
            "• L = length of wire (m)\n" +
            "• A = cross-sectional area (m²)\n\n" +
            "Key: R ∝ L (longer = more resistance); R ∝ 1/A (thicker = less resistance).",
          bodyAm:
            "R = V/I\n\n" +
            "1 Ω = 1 V/A\n\n" +
            "R = ρL/A\n\n" +
            "R ∝ L; R ∝ 1/A",
        },
        {
          id: "n8-4",
          title: "Ohm's Law",
          titleAm: "የኦም ሕግ",
          body:
            "OHM'S LAW: for an ohmic material at constant temperature,\n" +
            "V = I R\n\n" +
            "• V ∝ I at constant R\n" +
            "• If V increases, I increases proportionally\n\n" +
            "OHMIC vs NON-OHMIC:\n" +
            "• Ohmic: constant R for all V — V-I graph is a straight line through origin (metals like copper, aluminum, silver).\n" +
            "• Non-ohmic: R changes with V or I — V-I graph is curved (diodes, bulbs at high temp).",
          bodyAm:
            "V = IR\n\n" +
            "Ohmic: R ቋሚ ነው።\n" +
            "Non-ohmic: R ይለወጣል።",
        },
        {
          id: "n8-5",
          title: "Worked Example — Current from charge",
          titleAm: "ሠርተ ምሳሌ — ከቻርጅ ጅረት",
          body:
            "Problem: 0.5 A flows for 10 minutes. Find the charge.\n\n" +
            "Solution:\n" +
            "t = 10 min = 600 s\n" +
            "ΔQ = I × t = 0.5 × 600 = 300 C",
          bodyAm:
            "t = 600 ሰ\n" +
            "ΔQ = 0.5 × 600 = 300 C",
        },
        {
          id: "n8-6",
          title: "Worked Example — Ohm's law",
          titleAm: "ሠርተ ምሳሌ — የኦም ሕግ",
          body:
            "Problem: Bulb filament has 1200 Ω resistance at 220 V. Find current.\n\n" +
            "Solution:\n" +
            "I = V/R = 220/1200 = 0.183 A",
          bodyAm:
            "I = 220/1200 ≈ 0.183 A",
        },
        {
          id: "n8-7",
          title: "Worked Example — Voltage from work",
          titleAm: "ሠርተ ምሳሌ — ከሥራ ቮልቴጅ",
          body:
            "Problem: 2 C moves across 12 V. Find work done.\n\n" +
            "Solution:\n" +
            "W = V × Q = 12 × 2 = 24 J",
          bodyAm:
            "W = 12 × 2 = 24 J",
        },
        {
          id: "n8-8",
          title: "⚠ Remember trap — I, V, R",
          titleAm: "⚠ አትርሳ — I, V, R",
          body:
            "• Current = C/s (NOT V/s).\n" +
            "• Voltage = J/C (NOT J·C).\n" +
            "• Resistance = V/A = Ω.\n" +
            "• Ohm's law V = IR only for OHMIC materials at CONSTANT TEMPERATURE.\n" +
            "• If temperature changes, R changes → Ohm's law fails.\n" +
            "• Thicker wire → LESS resistance (larger A).\n" +
            "• Longer wire → MORE resistance.\n" +
            "• Bird on power line: NO shock because both feet on SAME wire (no voltage difference) — NOT because birds are insulators.",
          bodyAm:
            "• I = C/s\n" +
            "• V = J/C\n" +
            "• R = V/A\n" +
            "• ኦም ለቋሚ ሙቀት ብቻ።\n" +
            "• ወፍ በሽቦ ላይ: ቮልቴጅ ልዩነት የለም።",
        },
      ],
    },

    // ============================================================
    // 4.9 COMBINATION OF RESISTORS
    // ============================================================
    {
      id: "n9",
      title: "4.9 Combination of Resistors",
      titleAm: "4.9 የተቃውሞዎች ጥምረት",
      body:
        "Abatu, series and parallel are THE most tested ideas in this chapter. Memorize the four rules and you'll solve every circuit question.",
      bodyAm:
        "አባቱ፣ ተከታታይና ትይዩ በጣም የሚፈተኑ ናቸው።",
      children: [
        {
          id: "n9-1",
          title: "SERIES — four rules",
          titleAm: "ተከታታይ — አራቱ ደንቦች",
          body:
            "1) ONE path for current.\n" +
            "2) Current is the SAME through every resistor: I = I₁ = I₂ = I₃\n" +
            "3) Voltages ADD: V_total = V₁ + V₂ + V₃\n" +
            "4) R_eq = R₁ + R₂ + R₃ + ...\n\n" +
            "KEY: In series, R_eq is GREATER than the largest resistor.",
          bodyAm:
            "1) አንድ መንገድ\n" +
            "2) I አንድ ነው\n" +
            "3) V ይደመራል\n" +
            "4) R_eq = R₁ + R₂ + ...\n" +
            "R_eq > ትልቁ ተቃውሞ",
        },
        {
          id: "n9-2",
          title: "PARALLEL — four rules",
          titleAm: "ትይዩ — አራቱ ደንቦች",
          body:
            "1) MULTIPLE paths for current.\n" +
            "2) Voltage is the SAME across every resistor: V = V₁ = V₂ = V₃\n" +
            "3) Currents ADD: I_total = I₁ + I₂ + I₃\n" +
            "4) 1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ...\n\n" +
            "KEY: In parallel, R_eq is LESS than the smallest resistor.",
          bodyAm:
            "1) ብዙ መንገዶች\n" +
            "2) V አንድ ነው\n" +
            "3) I ይደመራል\n" +
            "4) 1/R_eq = 1/R₁ + 1/R₂ + ...\n" +
            "R_eq < ትንሹ ተቃውሞ",
        },
        {
          id: "n9-3",
          title: "Two-resistor shortcut (parallel)",
          titleAm: "የሁለት ተቃውሞ አቋራጭ (ትይዩ)",
          body:
            "For TWO resistors in parallel only:\n\n" +
            "R_eq = (R₁ × R₂) / (R₁ + R₂)\n\n" +
            "Example: 6 Ω and 3 Ω in parallel\n" +
            "R_eq = (6 × 3) / (6 + 3) = 18/9 = 2 Ω\n\n" +
            "Fast — memorize it!",
          bodyAm:
            "R_eq = R₁R₂/(R₁+R₂)\n\n" +
            "6 Ω ∥ 3 Ω = 2 Ω",
        },
        {
          id: "n9-4",
          title: "Worked Example — Series",
          titleAm: "ሠርተ ምሳሌ — ተከታታይ",
          body:
            "Problem: R₁ = 12 Ω, R₂ = 3 Ω, R₃ = 4 Ω, R₄ = 5 Ω in series with 12 V battery.\n\n" +
            "Solution:\n" +
            "R_eq = 12 + 3 + 4 + 5 = 24 Ω\n" +
            "I = V/R_eq = 12/24 = 0.5 A (same through all)\n" +
            "Voltage across each: V₁ = 0.5 × 12 = 6 V, V₂ = 0.5 × 3 = 1.5 V, etc.",
          bodyAm:
            "R_eq = 24 Ω\n" +
            "I = 0.5 A",
        },
        {
          id: "n9-5",
          title: "Worked Example — Parallel",
          titleAm: "ሠርተ ምሳሌ — ትይዩ",
          body:
            "Problem: R₁ = 12 Ω, R₂ = 12 Ω, R₃ = 6 Ω in parallel with 12 V battery.\n\n" +
            "Solution:\n" +
            "1/R_eq = 1/12 + 1/12 + 1/6 = 1/12 + 1/12 + 2/12 = 4/12 = 1/3\n" +
            "R_eq = 3 Ω\n" +
            "I_total = V/R_eq = 12/3 = 4 A\n" +
            "Each branch: I₁ = 12/12 = 1 A; I₂ = 1 A; I₃ = 12/6 = 2 A\n" +
            "Check: 1 + 1 + 2 = 4 A ✓",
          bodyAm:
            "R_eq = 3 Ω\n" +
            "I_total = 4 A",
        },
        {
          id: "n9-6",
          title: "⚠ Remember trap — Series/Parallel",
          titleAm: "⚠ አትርሳ — ተከታታይ/ትይዩ",
          body:
            "• SERIES: current SAME, voltage ADDS, R_eq ADDS.\n" +
            "• PARALLEL: voltage SAME, current ADDS, 1/R_eq ADDS.\n" +
            "• Common mistake: mixing up when current is same vs voltage is same.\n" +
            "• In a parallel circuit, R_eq is ALWAYS smaller than the smallest resistor.\n" +
            "• In a series circuit, R_eq is ALWAYS larger than the largest resistor.\n" +
            "• If one bulb in SERIES burns out → ALL go out (circuit open).\n" +
            "• If one bulb in PARALLEL burns out → OTHERS stay on (separate paths).\n" +
            "• Houses use PARALLEL — so each device gets full voltage and can operate independently.",
          bodyAm:
            "ተከታታይ: I አንድ፤ V ይደመራል፤ R ይደመራል።\n" +
            "ትይዩ: V አንድ፤ I ይደመራል፤ 1/R ይደመራል።\n" +
            "ቤት ትይዩ ይጠቀማል።",
        },
      ],
    },

    // ============================================================
    // 4.10 VOLTMETER AND AMMETER
    // ============================================================
    {
      id: "n10",
      title: "4.10 Voltmeter and Ammeter",
      titleAm: "4.10 ቮልትሜትርና አሜትር",
      body:
        "Abatu, remember the TWO rules — they show up on EVERY exam:",
      bodyAm:
        "ሁለቱ ደንቦች በሁሉም ፈተና ይመጣሉ፡",
      children: [
        {
          id: "n10-1",
          title: "Voltmeter — parallel",
          titleAm: "ቮልትሜትር — ትይዩ",
          body:
            "Measures: VOLTAGE (potential difference).\n" +
            "Connection: PARALLEL to the component.\n" +
            "Resistance: HIGH (nearly infinite) — draws almost NO current.\n\n" +
            "Why parallel? Because objects in parallel share the SAME voltage — that's what we want to measure.\n\n" +
            "Why high R? To avoid changing the circuit — if it draws current, it changes the voltage being measured.",
          bodyAm:
            "ቮልትሜትር → ትይዩ\n" +
            "ከፍተኛ R → ጅረት አይወስድም",
        },
        {
          id: "n10-2",
          title: "Ammeter — series",
          titleAm: "አሜትር — ተከታታይ",
          body:
            "Measures: CURRENT.\n" +
            "Connection: SERIES with the component.\n" +
            "Resistance: LOW (nearly zero) — changes circuit minimally.\n\n" +
            "Why series? Because in series, the SAME current flows through everything — including the meter.\n\n" +
            "Why low R? To avoid reducing the current being measured.",
          bodyAm:
            "አሜትር → ተከታታይ\n" +
            "ዝቅተኛ R → ጅረት አይቀንስም",
        },
        {
          id: "n10-3",
          title: "⚠ Remember trap — Meters",
          titleAm: "⚠ አትርሳ — መለኪያዎች",
          body:
            "• Voltmeter in SERIES → breaks the circuit → no current.\n" +
            "• Ammeter in PARALLEL → short circuit → ammeter damaged.\n" +
            "• Voltmeter resistance = INFINITE (ideal).\n" +
            "• Ammeter resistance = ZERO (ideal).\n" +
            "• Multimeter can measure V, I, R in one device.",
          bodyAm:
            "• ቮልትሜትር በተከታታይ → ወረዳ ይቋረጣል።\n" +
            "• አሜትር በትይዩ → አደጋ።\n" +
            "• ቮልትሜትር R = ∞\n" +
            "• አሜትር R = 0",
        },
      ],
    },

    // ============================================================
    // 4.11 ELECTRICAL SAFETY
    // ============================================================
    {
      id: "n11",
      title: "4.11 Electrical Safety",
      titleAm: "4.11 የኤሌክትሪክ ደህንነት",
      body:
        "Abatu, this section is about PREVENTING electrical accidents. Memorize the key numbers and rules.",
      bodyAm:
        "አባቱ፣ የኤሌክትሪክ አደጋዎችን መከላከል።",
      children: [
        {
          id: "n11-1",
          title: "How shock happens",
          titleAm: "ሾክ እንዴት ይከሰታል",
          body:
            "• Body fluids are CONDUCTORS.\n" +
            "• Dry skin has HIGH resistance — protects us somewhat.\n" +
            "• Wet skin → LOW resistance → HIGH current → DANGER.\n" +
            "• Current enters through one contact point, flows through body, exits at another (usually ground).\n\n" +
            "DAMAGE depends on:\n" +
            "• Size of current (bigger = worse)\n" +
            "• Duration (longer = worse)\n" +
            "• Path through body (heart = worst)",
          bodyAm:
            "• የሰውነት ፈሳሽ አስተላላፊ ነው።\n" +
            "• ደረቅ ቆዳ = ከፍተኛ R = ደህንነት።\n" +
            "• እርጥብ ቆዳ = ዝቅተኛ R = አደጋ።\n" +
            "ጉዳቱ የተመሠረተው በጅረት መጠን፣ ጊዜና መንገድ ነው።",
        },
        {
          id: "n11-2",
          title: "Danger thresholds",
          titleAm: "የአደጋ ገደቦች",
          body:
            "• < 5 mA → sensation, no damage\n" +
            "• 10 mA → muscle contraction; can't let go\n" +
            "• 100 mA → few seconds → FATAL (respiratory paralysis)\n" +
            "• ~1 A → serious burns\n\n" +
            "MEMORIZE: 100 mA for a few seconds = LETHAL.",
          bodyAm:
            "5 mA → ስሜት\n" +
            "10 mA → ጡንቻ መጨናነቅ\n" +
            "100 mA → ሞት\n" +
            "1 A → ከባድ ቃጠሎ",
        },
        {
          id: "n11-3",
          title: "Fuses — the cheap protection",
          titleAm: "ፊውዝ",
          body:
            "FUSE: a thin metal wire with LOW MELTING POINT placed in a circuit.\n\n" +
            "How it works:\n" +
            "• Normal current → fuse fine\n" +
            "• Too much current (short circuit or overload) → fuse HEATS UP, MELTS, breaks → circuit cut\n\n" +
            "PURPOSE: protect equipment from excessive current.\n\n" +
            "RULE: use a fuse rated for the circuit. Too high a rating → won't blow → equipment damaged.",
          bodyAm:
            "ፊውዝ = ቀጭን ሽቦ፣ ዝቅተኛ የሚቀልጥበት ነጥብ።\n\n" +
            "ብዙ ጅረት → ይቀልጣል → ወረዳ ይቋረጣል።",
        },
        {
          id: "n11-4",
          title: "Grounding and safety devices",
          titleAm: "ማገናኘትና የደህንነት መሣሪያዎች",
          body:
            "THREE-PRONG PLUG (grounded plug):\n" +
            "• Phase (live) — carries current\n" +
            "• Neutral — returns current\n" +
            "• Ground — safety, connects case to earth\n\n" +
            "If a fault sends current to the case, it flows through GROUND wire (not through you).\n\n" +
            "GFCI / RCD (Ground-Fault Circuit Interrupter):\n" +
            "• Detects small leakage currents (~5 mA)\n" +
            "• Shuts off in <1 millisecond\n\n" +
            "Wire colors (Ethiopia): phase = red/yellow/blue; neutral = black; ground = green-yellow.",
          bodyAm:
            "ሶስት ሽቦ: phase, neutral, ground\n\n" +
            "GFCI: ትንሽ ፍሳሽ ሲለይ → በፍጥነት ይቆርጣል።",
        },
        {
          id: "n11-5",
          title: "⚠ Remember trap — Safety",
          titleAm: "⚠ አትርሳ — ደህንነት",
          body:
            "• WET skin → LOW resistance → MORE dangerous.\n" +
            "• NEVER throw water on an electrical fire — water conducts.\n" +
            "• NEVER flick a switch with wet hands.\n" +
            "• Fuse ≠ circuit breaker (fuse melts; breaker trips and can be reset).\n" +
            "• Bird on power line → SAFE because both feet on same wire (no voltage difference) — NOT because bird is insulator.\n" +
            "• 30 A fuse in a 15 A circuit → does NOT protect → danger.\n" +
            "• Electric shock damage depends on current, time, and path — NOT on voltage alone.",
          bodyAm:
            "• እርጥብ ቆዳ = አደጋ።\n" +
            "• በኤሌክትሪክ እሳት ላይ ውሃ አትጣይ።\n" +
            "• እርጥብ እጅ ስዊች አትንካ።\n" +
            "• ወፍ በሽቦ ላይ: ቮልቴጅ ልዩነት የለም።",
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
        "| Quantity                  | Formula                                | Units        |\n" +
        "|---------------------------|----------------------------------------|--------------|\n" +
        "| Coulomb's law             | F = k|q₁q₂|/r² (k = 9×10⁹)             | N            |\n" +
        "| Electric field (force)    | E = F/q                                | N/C          |\n" +
        "| Electric field (point)    | E = kq/r²                              | N/C          |\n" +
        "| Electric current          | I = ΔQ/Δt                              | A            |\n" +
        "| Voltage (potential diff.) | V = W/Q                                | V            |\n" +
        "| Ohm's law                 | V = IR                                 | V, A, Ω      |\n" +
        "| Resistance of a wire      | R = ρL/A                               | Ω            |\n" +
        "| Series resistors          | R_eq = R₁ + R₂ + ...                   | Ω            |\n" +
        "| Parallel resistors        | 1/R_eq = 1/R₁ + 1/R₂ + ...             | Ω            |\n" +
        "| Two parallel shortcut     | R_eq = R₁R₂ / (R₁ + R₂)                | Ω            |\n" +
        "| Power (bonus)             | P = VI = I²R = V²/R                    | W            |\n" +
        "| Charge quantization       | q = ne (e = 1.6×10⁻¹⁹ C)               | C            |",
      bodyAm:
        "| መጠን                     | ቀመር                          | አሃድ        |\n" +
        "|--------------------------|------------------------------|-------------|\n" +
        "| ኩሎም                     | F = k|q₁q₂|/r²              | N           |\n" +
        "| መስክ (ኃይል)               | E = F/q                      | N/C         |\n" +
        "| መስክ (ነጥብ)               | E = kq/r²                    | N/C         |\n" +
        "| ጅረት                     | I = ΔQ/Δt                    | A           |\n" +
        "| ቮልቴጅ                    | V = W/Q                      | V           |\n" +
        "| ኦም                      | V = IR                       | V, A, Ω     |\n" +
        "| ሽቦ ተቃውሞ                | R = ρL/A                     | Ω           |\n" +
        "| ተከታታይ                   | R_eq = R₁ + R₂ + ...         | Ω           |\n" +
        "| ትይዩ                     | 1/R_eq = 1/R₁ + 1/R₂ + ...   | Ω           |\n" +
        "| የሁለት ትይዩ አቋራጭ          | R_eq = R₁R₂/(R₁+R₂)          | Ω           |\n" +
        "| ኃይል                     | P = VI = I²R = V²/R          | W           |\n" +
        "| ቻርጅ ብዛት                | q = ne                        | C           |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 4",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1) Charges in COULOMBS — convert µC, nC, mC first!\n" +
        "2) Distances in METERS — convert cm, mm first!\n" +
        "3) Coulomb formula uses |q₁q₂| for magnitude — signs only tell attraction/repulsion.\n" +
        "4) r² — doubling distance ÷4 force, not ÷2.\n" +
        "5) Electric field direction = force on POSITIVE test charge.\n" +
        "6) Series: current SAME; parallel: voltage SAME.\n" +
        "7) R_eq in series > largest; R_eq in parallel < smallest.\n" +
        "8) Ohmic materials only obey V = IR at constant temperature.\n" +
        "9) Voltmeter = parallel + high R. Ammeter = series + low R.\n" +
        "10) Wet skin → LOWER resistance → MORE dangerous.\n" +
        "11) Bird on wire safe because NO voltage difference — not because bird is insulator.\n" +
        "12) Fuse of too high rating = dangerous (won't blow when needed).",
      bodyAm:
        "1) ቻርጅ ወደ C ቀይር!\n" +
        "2) ርቀት ወደ ሜ ቀይር!\n" +
        "3) መጠኖች ብቻ፣ ምልክት ለአቅጣጫ።\n" +
        "4) r² ድርብ → F/4።\n" +
        "5) E አቅጣጫ = በ + ሙከራ ቻርጅ።\n" +
        "6) ተከታታይ I አንድ; ትይዩ V አንድ።\n" +
        "7) ተከታታይ R_eq > ትልቁ; ትይዩ R_eq < ትንሹ።\n" +
        "8) ኦም ለቋሚ ሙቀት ብቻ።\n" +
        "9) ቮልትሜትር ትይዩ + ከፍተኛ R፣ አሜትር ተከታታይ + ዝቅተኛ R።\n" +
        "10) እርጥብ ቆዳ = ዝቅተኛ R = አደጋ።\n" +
        "11) ወፍ: ቮልቴጅ ልዩነት የለም።\n" +
        "12) ከፍተኛ ፊውዝ አደገኛ ነው።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "How many types of electric charge are there?", options: ["One", "Two", "Three", "Four"], answer: "1", explanation: "Abatu, there are TWO types: positive and negative." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Protons carry which type of charge?", options: ["Positive", "Negative", "Neutral", "Both"], answer: "0", explanation: "Protons are POSITIVE; electrons are NEGATIVE." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Electrons carry which type of charge?", options: ["Positive", "Negative", "Neutral", "Both"], answer: "1", explanation: "Electrons are NEGATIVE." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Two positive charges:", options: ["Attract", "Repel", "Have no force", "Neutralize"], answer: "1", explanation: "LIKE charges REPEL (+,+ or −,−)." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "A positive and a negative charge:", options: ["Attract", "Repel", "Have no force", "Neutralize"], answer: "0", explanation: "OPPOSITE charges ATTRACT." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "An object becomes POSITIVELY charged when it:", options: ["Gains electrons", "Loses electrons", "Gains protons", "Loses protons"], answer: "1", explanation: "Losing electrons → POSITIVE." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "An object becomes NEGATIVELY charged when it:", options: ["Gains electrons", "Loses electrons", "Gains protons", "Loses protons"], answer: "0", explanation: "Gaining electrons → NEGATIVE." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The SI unit of charge is:", options: ["Ampere", "Volt", "Coulomb", "Ohm"], answer: "2", explanation: "Charge unit = COULOMB (C)." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "The charge on one electron has magnitude:", options: ["1.6×10⁻¹⁹ C", "1.6×10¹⁹ C", "9×10⁹ C", "1 C"], answer: "0", explanation: "e = 1.6×10⁻¹⁹ C." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "The law of conservation of charge states that:", options: ["Charges can be created", "Charges are destroyed in a circuit", "Charges are neither created nor destroyed, only transferred", "Charge is always negative"], answer: "2", explanation: "CHARGE IS CONSERVED — only transferred." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The formula q = ne represents:", options: ["Conservation of charge", "Quantization of charge", "Ohm's law", "Coulomb's law"], answer: "1", explanation: "QUANTIZATION: q = integer × e." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Which method of charging requires rubbing two objects together?", options: ["Induction", "Conduction", "Rubbing (friction)", "Grounding"], answer: "2", explanation: "RUBBING = friction transfers electrons." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Charging by rubbing leaves two objects with:", options: ["Same sign", "Opposite signs", "No charge", "Neutral"], answer: "1", explanation: "RUBBING → OPPOSITE signs." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Charging by CONDUCTION leaves both objects with:", options: ["Opposite signs", "Same sign", "Neutral", "No charge"], answer: "1", explanation: "CONDUCTION → SAME sign." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Charging by INDUCTION leaves the conductor with:", options: ["Same sign as the rod", "Opposite sign to the rod", "Neutral", "Zero charge"], answer: "1", explanation: "INDUCTION → OPPOSITE sign." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "What does an electroscope detect?", options: ["Current", "Voltage", "Presence of electric charge", "Resistance"], answer: "2", explanation: "Electroscope detects PRESENCE of charge." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "The leaves of an electroscope REPEL each other because:", options: ["They have opposite charges", "They have the same charges", "They are neutral", "They are magnetic"], answer: "1", explanation: "SAME charge → REPEL → leaves diverge." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Discharge means:", options: ["Adding charge", "Removing excess charge", "Creating charge", "Neutralizing protons"], answer: "1", explanation: "DISCHARGE = REMOVING excess charge." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "Lightning is:", options: ["Electricity falling from sky", "A very large electrical discharge", "Sunlight", "A type of wind"], answer: "1", explanation: "LIGHTNING = LARGE electrical discharge." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "Grounding works because:", options: ["The earth is small", "The earth is a good insulator", "The earth is a huge conductor that can absorb charge", "The earth has no electrons"], answer: "2", explanation: "Earth is HUGE and conducts — absorbs excess charge safely." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Coulomb's law formula is:", options: ["F = kq₁q₂/r", "F = kq₁q₂/r²", "F = ma", "F = qvB"], answer: "1", explanation: "F = kq₁q₂/r²." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "The Coulomb constant k is approximately:", options: ["9×10⁹ N·m²/C²", "1.6×10⁻¹⁹ N·m²/C²", "3×10⁸ m/s", "6.6×10⁻¹¹ N·m²/kg²"], answer: "0", explanation: "k ≈ 9×10⁹ N·m²/C²." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "If the distance between two charges is doubled, the electric force becomes:", options: ["Twice as large", "Four times as large", "Half", "One quarter"], answer: "3", explanation: "F ∝ 1/r² → double r → F ÷ 4." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "If one charge is doubled, the electric force:", options: ["Halves", "Doubles", "Quadruples", "Stays the same"], answer: "1", explanation: "F ∝ q₁q₂ → double q₁ → F doubles." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "The electric field E is defined as:", options: ["F × q", "F / q", "q / F", "F + q"], answer: "1", explanation: "E = F/q." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "The SI unit of electric field is:", options: ["N", "N/C", "C/N", "V"], answer: "1", explanation: "E = N/C." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Electric field lines from a positive charge point:", options: ["Toward the charge", "Away from the charge", "Parallel to it", "Randomly"], answer: "1", explanation: "From positive charge → OUTWARD." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Electric field lines from a negative charge point:", options: ["Away from the charge", "Toward the charge", "Parallel", "Randomly"], answer: "1", explanation: "Toward negative → INWARD." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Electric field lines never:", options: ["Start at +", "End at −", "Cross each other", "Exist near charges"], answer: "2", explanation: "Field lines NEVER CROSS." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "An electric circuit is:", options: ["A path through which charges can flow", "A type of battery", "A metal", "A resistor"], answer: "0", explanation: "Circuit = path for charge flow." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "In a CLOSED circuit:", options: ["Current does not flow", "Current flows", "Bulb does not light", "Wire is broken"], answer: "1", explanation: "Closed → current flows → bulb lights." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "In an OPEN circuit:", options: ["Current flows", "Current does not flow", "Bulb lights", "Voltage is zero"], answer: "1", explanation: "Open → NO current." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "Electric current is defined as:", options: ["Rate of flow of charge", "Resistance to flow", "Voltage", "Work done"], answer: "0", explanation: "I = ΔQ/Δt (charge per time)." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "The SI unit of current is:", options: ["Volt", "Ohm", "Ampere", "Coulomb"], answer: "2", explanation: "Current unit = AMPERE (A)." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "The SI unit of voltage is:", options: ["Ampere", "Volt", "Ohm", "Coulomb"], answer: "1", explanation: "Voltage unit = VOLT (V)." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "The SI unit of resistance is:", options: ["Ampere", "Volt", "Ohm", "Coulomb"], answer: "2", explanation: "Resistance unit = OHM (Ω)." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "Ohm's law states that:", options: ["V = IR", "V = I/R", "V = I+R", "V = R/I"], answer: "0", explanation: "Ohm's law: V = IR." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "In a SERIES circuit, the current is:", options: ["Different at each resistor", "The same everywhere", "Zero", "Infinite"], answer: "1", explanation: "Series → current SAME." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "In a PARALLEL circuit, the voltage is:", options: ["Different at each resistor", "The same across each branch", "Zero", "Infinite"], answer: "1", explanation: "Parallel → voltage SAME." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "A voltmeter is connected:", options: ["In series", "In parallel", "Either way", "Not at all"], answer: "1", explanation: "Voltmeter → PARALLEL." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "An ammeter is connected:", options: ["In series", "In parallel", "Either way", "Not at all"], answer: "0", explanation: "Ammeter → SERIES." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "In a series circuit, R_eq is:", options: ["Smaller than the smallest R", "Larger than the largest R", "Equal to the smallest", "Zero"], answer: "1", explanation: "Series: R_eq > largest R." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "In a parallel circuit, R_eq is:", options: ["Larger than the largest R", "Smaller than the smallest R", "Zero", "Equal to the average"], answer: "1", explanation: "Parallel: R_eq < smallest R." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "Two resistors of 6 Ω and 3 Ω in SERIES have R_eq of:", options: ["2 Ω", "4 Ω", "9 Ω", "18 Ω"], answer: "2", explanation: "R_eq = 6 + 3 = 9 Ω." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "Two resistors of 6 Ω and 3 Ω in PARALLEL have R_eq of:", options: ["2 Ω", "4 Ω", "9 Ω", "18 Ω"], answer: "0", explanation: "R_eq = (6×3)/(6+3) = 2 Ω." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "A current of 0.5 A flows for 10 minutes. Find charge.", options: ["5 C", "50 C", "300 C", "600 C"], answer: "2", explanation: "Q = It = 0.5 × 600 = 300 C." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "A bulb has 1200 Ω resistance at 220 V. Find current.", options: ["0.18 A", "1.8 A", "18 A", "0.018 A"], answer: "0", explanation: "I = V/R = 220/1200 ≈ 0.183 A." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "How much work in moving 2 C across 12 V?", options: ["6 J", "12 J", "24 J", "120 J"], answer: "2", explanation: "W = QV = 2 × 12 = 24 J." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "Two charges 5 µC and −12 µC are 30 cm apart. Force magnitude:", options: ["1.5 N", "6.0 N", "60 N", "600 N"], answer: "1", explanation: "F = 9×10⁹ × 5×10⁻⁶ × 12×10⁻⁶ / 0.09 = 6.0 N." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Two charges 2 µC and 4 µC are 20 cm apart. Force magnitude:", options: ["0.9 N", "1.8 N", "18 N", "180 N"], answer: "1", explanation: "F = 9×10⁹ × 2×10⁻⁶ × 4×10⁻⁶ / 0.04 = 1.8 N." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "Two 10 Ω resistors in series with 20 V battery. Current:", options: ["0.5 A", "1 A", "2 A", "4 A"], answer: "1", explanation: "R_eq = 20 Ω; I = 20/20 = 1 A." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "Two 10 Ω resistors in parallel with 20 V battery. Current through each:", options: ["0.5 A", "1 A", "2 A", "4 A"], answer: "2", explanation: "Each branch sees 20 V; I = 20/10 = 2 A." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "The equation V = IR is Ohm's law, valid only for:", options: ["All materials", "Ohmic materials at constant temperature", "Non-ohmic materials", "All temperatures"], answer: "1", explanation: "Ohm's law applies only to OHMIC materials at CONSTANT temperature." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "The resistance of a wire increases with:", options: ["Shorter length", "Larger area", "Longer length and smaller area", "Lower temperature"], answer: "2", explanation: "R = ρL/A → longer L or smaller A → more R." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "A wire's resistance is 10 Ω. If we double its length (same area), new R:", options: ["5 Ω", "10 Ω", "20 Ω", "100 Ω"], answer: "2", explanation: "R ∝ L → double L → double R = 20 Ω." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "A wire's resistance is 10 Ω. If we double its area (same length), new R:", options: ["5 Ω", "10 Ω", "20 Ω", "100 Ω"], answer: "0", explanation: "R ∝ 1/A → double A → half R = 5 Ω." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "Charging a body by INDUCTION requires:", options: ["Direct contact only", "Proximity and usually a ground connection", "Only rubbing", "A battery"], answer: "1", explanation: "Induction: no contact, but usually a ground connection." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "An electroscope's leaves fall when:", options: ["Charge is added", "Charge is removed", "The rod is brought closer", "The room is hot"], answer: "1", explanation: "Leaves fall when charge is removed (back to neutral)." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "A comb attracts small pieces of paper because:", options: ["The comb is magnetic", "The paper is magnetic", "The comb is charged and induces opposite charge on paper", "The comb is hot"], answer: "2", explanation: "Charged comb INDUCES opposite charge on paper → attraction." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "A bird on a single high-voltage wire is safe because:", options: ["Bird is an insulator", "No voltage difference along the single wire", "The wire is thin", "The bird is small"], answer: "1", explanation: "No voltage difference along the wire → no current through bird." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "If a bird touches TWO wires at different voltages:", options: ["Still safe", "Gets shocked (voltage difference drives current)", "The wires melt", "Nothing happens"], answer: "1", explanation: "Voltage DIFFERENCE → current flows through bird." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "A metal car protects you from lightning because:", options: ["Rubber tires insulate", "The metal shell conducts charge around you", "The windows block it", "The engine runs"], answer: "1", explanation: "METAL SHELL conducts charge AROUND you." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "In a parallel circuit with 3 equal resistors of 6 Ω, R_eq:", options: ["18 Ω", "6 Ω", "3 Ω", "2 Ω"], answer: "3", explanation: "1/R = 1/6 + 1/6 + 1/6 = 3/6 → R = 2 Ω." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "In a series circuit with 3 equal resistors of 6 Ω, R_eq:", options: ["2 Ω", "6 Ω", "12 Ω", "18 Ω"], answer: "3", explanation: "R_eq = 6 + 6 + 6 = 18 Ω." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "3 Ω and 6 Ω in parallel with 12 V battery. Total current:", options: ["1.33 A", "2 A", "4 A", "6 A"], answer: "3", explanation: "R_eq = 2 Ω; I = 12/2 = 6 A." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "3 Ω and 6 Ω in series with 12 V battery. Current:", options: ["1.33 A", "2 A", "4 A", "6 A"], answer: "0", explanation: "R_eq = 9 Ω; I = 12/9 ≈ 1.33 A." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "Which is safer for homes?", options: ["Series circuit", "Parallel circuit", "Both equal", "No circuit"], answer: "1", explanation: "Parallel — devices operate independently at full voltage." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "If a fuse rated 30 A is used in a 15 A circuit:", options: ["Safer than 15 A fuse", "It won't blow at the correct current → dangerous", "Same as 15 A fuse", "Better protection"], answer: "1", explanation: "30 A fuse won't blow at 15 A → protection FAILS." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "The damage from an electric shock depends on:", options: ["Only voltage", "Current, time, and path through body", "Only resistance", "Only frequency"], answer: "1", explanation: "Damage depends on CURRENT, TIME, PATH." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "A current of 100 mA through the body for a few seconds is:", options: ["Harmless", "Painful but safe", "Potentially fatal", "Not felt"], answer: "2", explanation: "100 mA can be FATAL (respiratory paralysis)." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Wet skin is MORE dangerous than dry because:", options: ["Water adds charge", "Wet skin has LOWER resistance → MORE current flows", "Water is magnetic", "Nothing changes"], answer: "1", explanation: "Wet skin → LOWER R → HIGHER current → DANGER." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "The electrostatic constant k in Coulomb's law is:", options: ["1.6×10⁻¹⁹", "6.6×10⁻¹¹", "9×10⁹", "3×10⁸"], answer: "2", explanation: "k = 9×10⁹ N·m²/C²." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "The electric field at distance r from a point charge q is:", options: ["kq/r", "kq/r²", "kq·r", "kqr²"], answer: "1", explanation: "E = kq/r²." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "The formula V = W/Q defines:", options: ["Current", "Voltage", "Resistance", "Charge"], answer: "1", explanation: "Voltage = work per charge." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "In a parallel circuit, total current is:", options: ["Same as each branch", "Sum of branch currents", "Zero", "Half of each branch"], answer: "1", explanation: "I_total = I₁ + I₂ + ..." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "In a series circuit, total voltage is:", options: ["Same as each resistor", "Sum of voltages across resistors", "Zero", "Half of each"], answer: "1", explanation: "V_total = V₁ + V₂ + ..." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "The resistance of a material per unit length and per unit cross-sectional area is called:", options: ["Conductivity", "Resistivity", "Current", "Voltage"], answer: "1", explanation: "RESISTIVITY (ρ) is a material property." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "The SI unit of resistivity is:", options: ["Ω", "Ω·m", "Ω/m", "1/Ω"], answer: "1", explanation: "Resistivity unit = Ω·m." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "Copper is a good conductor because:", options: ["It has high resistivity", "It has low resistivity", "It has high resistance", "It is magnetic"], answer: "1", explanation: "Copper → LOW resistivity → good conductor." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "In a series circuit with a burnt-out bulb:", options: ["Other bulbs still work", "All bulbs stop working", "Brightness increases", "Current increases"], answer: "1", explanation: "Series: one break → all stop." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Two charges q₁ = 3 µC and q₂ = 6 µC are 0.3 m apart. Force is:", options: ["0.6 N", "1.8 N", "6 N", "18 N"], answer: "1", explanation: "F = 9×10⁹ × 3×10⁻⁶ × 6×10⁻⁶ / 0.09 = 1.8 N." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "If both charges in Coulomb's law are doubled and distance halved, F becomes:", options: ["Same", "2× original", "4× original", "16× original"], answer: "3", explanation: "F ∝ q₁q₂/r². Double both → ×4; halve r → ×4; total 16×." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Electric field 2 m from a 5 mC point charge (k = 9×10⁹):", options: ["1.1×10⁷ N/C", "2.25×10⁷ N/C", "4.5×10⁷ N/C", "9×10⁷ N/C"], answer: "0", explanation: "E = 9×10⁹ × 5×10⁻³ / 4 = 1.125×10⁷ N/C." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "A 3.5 µC charge in a 250 N/C field due east. Force is:", options: ["8.75×10⁻⁴ N west", "8.75×10⁻⁴ N east", "7.1×10⁷ N east", "0"], answer: "1", explanation: "F = qE = 3.5×10⁻⁶ × 250 = 8.75×10⁻⁴ N; positive charge → same direction as E → EAST." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "A copper wire has d = 0.5 mm, ρ = 1.6×10⁻⁸ Ω·m. Length for R = 10 Ω:", options: ["≈ 12 m", "≈ 122 m", "≈ 1220 m", "≈ 12 cm"], answer: "1", explanation: "A = π(0.25×10⁻³)² ≈ 1.96×10⁻⁷ m². L = RA/ρ = 10×1.96×10⁻⁷/1.6×10⁻⁸ ≈ 122.7 m." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "If the diameter of a wire is doubled (same length, same material), resistance becomes:", options: ["Same", "2× larger", "Half", "One quarter"], answer: "3", explanation: "A ∝ d² → double d → 4× A → R ÷ 4." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "Aluminum vs copper same length, same R. Which has larger diameter?", options: ["Copper", "Aluminum", "Same", "Impossible to say"], answer: "1", explanation: "ρ_Al > ρ_Cu. For same R: ρL/A → A_Al > A_Cu → larger diameter for ALUMINUM." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "12 V across unknown resistor, current 2.5 mA. R:", options: ["4.8 Ω", "48 Ω", "480 Ω", "4800 Ω"], answer: "3", explanation: "R = V/I = 12/0.0025 = 4800 Ω." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "9 V battery in series with 0.2 + 0.3 + 0.4 + 0.5 + 12 Ω. Current through 12 Ω:", options: ["0.6 A", "0.67 A", "0.72 A", "0.75 A"], answer: "2", explanation: "R_total = 13.4 Ω; I = 9/13.4 ≈ 0.67 A." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "How many 176 Ω resistors in parallel to carry 5 A on 220 V?", options: ["2", "3", "4", "5"], answer: "2", explanation: "R_needed = V/I = 44 Ω. 176/n = 44 → n = 4." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "Three 6 Ω resistors — how to get 9 Ω total?", options: ["All parallel", "All series", "Two series + one parallel", "Two parallel + one series"], answer: "3", explanation: "Two in parallel = 3 Ω; + one 6 Ω in series = 9 Ω." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "Three 6 Ω resistors — how to get 4 Ω total?", options: ["All series", "All parallel", "Two parallel + one series", "Series-parallel"], answer: "3", explanation: "Two in series = 12 Ω; with third in parallel: (12×6)/(12+6) = 4 Ω." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Three equal charges at corners of equilateral triangle. Net force on each:", options: ["Zero", "Points away from center", "Points toward center", "Infinite"], answer: "0", explanation: "By symmetry, forces cancel → net zero." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Two equal charges 4 cm apart attract with force 1.2×10⁹ N. If one is twice the other, smaller charge:", options: ["q ≈ 3.3×10⁻² C", "q ≈ 1.6×10⁻² C", "q ≈ 2.1×10⁻¹⁰ C", "q ≈ 1.1×10⁻¹⁰ C"], answer: "3", explanation: "Set q, 2q opposite signs: F = k(2q²)/r² = 1.2×10⁹ → q² = F·r²/(2k) → q ≈ 1.1×10⁻¹⁰ C." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "Two equal 1.1×10⁻⁷ C charges, force 4.2×10⁴ N. Distance:", options: ["≈ 0.05 m", "≈ 0.16 m", "≈ 0.5 m", "≈ 5 m"], answer: "1", explanation: "r² = kq²/F = 9×10⁹ × 1.21×10⁻¹⁴ / 4.2×10⁴ ≈ 2.6×10⁻⁹ → r ≈ 0.16 m." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "A heater at 60 V draws 4 A. If voltage becomes 120 V, current:", options: ["4 A", "6 A", "8 A", "16 A"], answer: "2", explanation: "R = 60/4 = 15 Ω. I = 120/15 = 8 A." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "In a series circuit, R₁ = 4 Ω, R₂ = 8 Ω, R₃ = 12 Ω, 24 V battery. Current:", options: ["0.5 A", "1 A", "2 A", "4 A"], answer: "1", explanation: "R_eq = 24 Ω; I = 24/24 = 1 A." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "A length of wire cut into 5 equal pieces, joined in parallel. R_eq = 2 Ω. Original R:", options: ["0.4 Ω", "2 Ω", "10 Ω", "50 Ω"], answer: "3", explanation: "Each piece = R/5. 5 in parallel each R/5 → R_eq = (R/5)/5 = R/25. R/25 = 2 → R = 50 Ω." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "Why is a series arrangement NOT used for domestic wiring?", options: ["More expensive", "One failure would turn off all devices; devices would share voltage", "Too little current", "Too much voltage"], answer: "1", explanation: "Series → one fail all fail; voltage divides; NOT suitable for homes." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "Copper and aluminum are used for transmission because:", options: ["High resistivity", "Low resistivity", "Magnetic", "Insulating"], answer: "1", explanation: "LOW RESISTIVITY → low power loss during transmission." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "easy", stem: "State the law of conservation of charge.", answer: "Electric charges can neither be created nor destroyed — they are only transferred from one object to another. The total charge in an isolated system remains constant.", explanation: "Abatu, charge is CONSERVED — only transferred." },
    { id: "q102", type: "short", difficulty: "easy", stem: "What is the quantization of charge?", answer: "Charge is quantized: it occurs only in DISCRETE amounts that are integer multiples of the elementary charge e (e = 1.6×10⁻¹⁹ C). Formula: q = ne, where n is an integer (positive or negative).", explanation: "q = ne — n must be an integer." },
    { id: "q103", type: "short", difficulty: "easy", stem: "Define electric current and give its formula and unit.", answer: "Electric current is the rate of flow of electric charge. I = ΔQ/Δt. SI unit: Ampere (A), where 1 A = 1 C/s.", explanation: "Current = charge per time." },
    { id: "q104", type: "short", difficulty: "easy", stem: "State Ohm's law and give the formula.", answer: "Ohm's law: at constant temperature, the current through a conductor is directly proportional to the potential difference across it. Formula: V = IR, where R is the resistance.", explanation: "V = IR — only for ohmic materials." },
    { id: "q105", type: "short", difficulty: "medium", stem: "Describe the THREE methods of charging.", answer: "1) RUBBING: two different neutral materials rubbed together → electrons transfer → OPPOSITE signs on each.\n2) CONDUCTION: charged object touches neutral object → some charge transfers → SAME sign on both.\n3) INDUCTION: charged object brought near a grounded conductor without touching → conductor ends with OPPOSITE sign to the rod.", explanation: "Rubbing → opposite; Conduction → same; Induction → opposite." },
    { id: "q106", type: "short", difficulty: "medium", stem: "State Coulomb's law and give its formula.", answer: "Coulomb's law: the electrostatic force between two point charges is DIRECTLY proportional to the product of their charges and INVERSELY proportional to the square of the distance between them. Formula: F = k|q₁q₂|/r², where k = 9×10⁹ N·m²/C².", explanation: "F ∝ q₁q₂ and F ∝ 1/r²." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Two charges q₁ = 2 µC and q₂ = −4 µC are 20 cm apart. Find the force (magnitude and direction).", answer: "Convert: q₁ = 2×10⁻⁶ C, q₂ = 4×10⁻⁶ C, r = 0.20 m.\nF = (9×10⁹)(2×10⁻⁶)(4×10⁻⁶)/(0.20)² = 1.8 N.\nDirection: OPPOSITE signs → ATTRACTIVE (charges pull toward each other).", explanation: "Use magnitudes in formula; signs give direction." },
    { id: "q108", type: "short", difficulty: "medium", stem: "Define electric field and give its two formulas.", answer: "Electric field is a region where a charge experiences a force.\n\n1) From force and charge: E = F/q (N/C)\n2) From a point charge: E = kq/r² (N/C)\n\nDirection: away from + charge; toward − charge.", explanation: "E = F/q or E = kq/r²." },
    { id: "q109", type: "short", difficulty: "medium", stem: "Calculate E 5 mm from a 2 nC charge.", answer: "q = 2×10⁻⁹ C, r = 5×10⁻³ m.\nE = kq/r² = (9×10⁹)(2×10⁻⁹)/(5×10⁻³)² = 18/(25×10⁻⁶) = 7.2×10⁵ N/C.\nDirection: away from charge (positive source).", explanation: "Convert nC and mm first." },
    { id: "q110", type: "short", difficulty: "medium", stem: "Explain why a voltmeter is connected in parallel and an ammeter in series.", answer: "VOLTMETER: to measure the potential difference across a component, it must be connected ACROSS the component (parallel). Objects in parallel share the same voltage. It has HIGH resistance so it draws almost no current.\n\nAMMETER: to measure the current through a component, it must be in the SAME path (series) so the same current flows through it. It has LOW resistance so it doesn't change the current.", explanation: "Volt = parallel/high R; Amp = series/low R." },
    { id: "q111", type: "short", difficulty: "medium", stem: "Two 10 Ω resistors in parallel with 20 V battery. Find R_eq, total current, and current through each.", answer: "R_eq = (10×10)/(10+10) = 5 Ω.\nI_total = V/R_eq = 20/5 = 4 A.\nEach branch: I = 20/10 = 2 A (voltage is same across parallel).\nCheck: 2 + 2 = 4 A ✓", explanation: "Parallel: same V, currents add." },
    { id: "q112", type: "short", difficulty: "medium", stem: "How does lightning form?", answer: "1) A NEGATIVE charge builds up at the base of a cloud.\n2) This induces a POSITIVE charge on the ground below.\n3) When enough charge builds up, AIR (normally an insulator) breaks down and becomes a conductor.\n4) The cloud discharges excess electrons to the ground → LIGHTNING (giant spark).\n5) Rapid expansion of air → THUNDER.", explanation: "Charge buildup → air breakdown → discharge." },
    { id: "q113", type: "short", difficulty: "medium", stem: "Why is a bird on a high-voltage wire not electrocuted?", answer: "A bird touches only ONE wire. There is NO voltage difference along a single wire, so no current flows through the bird. For current to flow, there must be a potential difference (e.g., if the bird touched two wires with different voltages, or touched the ground).", explanation: "Single wire → no voltage difference → no current." },
    { id: "q114", type: "short", difficulty: "medium", stem: "Why is wet skin more dangerous than dry skin in an electric shock?", answer: "Dry skin has HIGH resistance → small current flows → less danger. Wet skin has LOW resistance (water and salts conduct) → MUCH MORE current flows for the same voltage → danger of serious injury or death. Since damage depends on current, wet skin dramatically increases the hazard.", explanation: "Wet skin → lower R → more current." },
    { id: "q115", type: "short", difficulty: "hard", stem: "A copper wire of diameter 0.5 mm has ρ = 1.6×10⁻⁸ Ω·m. Find the length needed for R = 10 Ω.", answer: "A = π(0.25×10⁻³)² ≈ 1.96×10⁻⁷ m².\nL = RA/ρ = (10)(1.96×10⁻⁷)/(1.6×10⁻⁸) ≈ 122.7 m.", explanation: "R = ρL/A → L = RA/ρ." },
    { id: "q116", type: "short", difficulty: "hard", stem: "Find current through 12 Ω resistor when a 9 V battery is in series with 0.2 + 0.3 + 0.4 + 0.5 + 12 Ω.", answer: "R_total = 0.2 + 0.3 + 0.4 + 0.5 + 12 = 13.4 Ω.\nI = V/R_total = 9/13.4 ≈ 0.67 A.\nSeries → current through 12 Ω resistor = 0.67 A.", explanation: "Series current is same everywhere." },
    { id: "q117", type: "short", difficulty: "hard", stem: "A length of wire is cut into 5 equal pieces, then joined in parallel. If R_eq = 2 Ω, what was original R?", answer: "Each piece = R/5. 5 in parallel: 1/R_eq = 5/(R/5) = 25/R → R_eq = R/25.\nR/25 = 2 → R = 50 Ω.", explanation: "Parallel reciprocals add; pieces are R/5 each." },
    { id: "q118", type: "short", difficulty: "hard", stem: "How can you connect three 6 Ω resistors to get total 9 Ω?", answer: "Connect TWO in parallel first: R_p = (6×6)/(6+6) = 3 Ω. Then connect this parallel pair in SERIES with the third 6 Ω resistor: R_total = 3 + 6 = 9 Ω.", explanation: "Two parallel + one series = 9 Ω." },
    { id: "q119", type: "short", difficulty: "hard", stem: "How can you connect three 6 Ω resistors to get total 4 Ω?", answer: "Connect TWO in series first: R_s = 6 + 6 = 12 Ω. Then connect this series pair in PARALLEL with the third 6 Ω resistor: R_total = (12×6)/(12+6) = 72/18 = 4 Ω.", explanation: "Two series + one parallel = 4 Ω." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Two equal charges of 1.1×10⁻⁷ C experience force 4.2×10⁴ N. How far apart are they?", answer: "r² = kq²/F = (9×10⁹)(1.1×10⁻⁷)² / (4.2×10⁴)\n   = (9×10⁹)(1.21×10⁻¹⁴) / (4.2×10⁴)\n   = 1.089×10⁻⁴ / 4.2×10⁴\n   ≈ 2.6×10⁻⁹\nr ≈ 5.1×10⁻⁵ m ≈ 0.051 mm.\n\nNote: the problem's given values are unusual — the actual numerical answer is very small. Conceptually: r = √(kq²/F).", explanation: "Solve F = kq²/r² for r." },
  ],
};