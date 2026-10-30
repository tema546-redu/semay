import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 GENERAL SCIENCE — UNIT 2
// COMPOSITION OF MATTER
// Source: AAEB Grade 8 General Science Student Textbook (pp. 25–37)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8ScienceCh2: Chapter = {
  id: "ch2",
  number: 2,
  title: "Composition of Matter",
  titleAm: "የንጥረ ነገር ስብጥር",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. Early Thinking about Matter (Ancient Greek Philosophers)",
      titleAm: "ስለ ንጥረ ነገር ጥንታዊ ሐሳብ",
      body:
        "Banchi, before modern science, ancient Greek philosophers asked: what is matter made of? Two thinkers gave VERY DIFFERENT answers. The exam loves to test them because they are exact opposites.",
      bodyAm:
        "ባንቺ፣ ከዘመናዊ ሳይንስ በፊት ጥንታዊ ግሪካውያን ፈላስፋዎች፡ ንጥረ ነገር ከምን የተሠራ ነው? ብለው ጠየቁ። ሁለት አሳቢዎች ፍጹም የተለያዩ መልሶችን ሰጡ።",
      children: [
        {
          id: "n1-1",
          title: "Democritus (460–370 BC) — Discreteness Theory",
          titleAm: "ዲሞክሪተስ — የተከፋፈለ ንጥረ ነገር ንድፈ ሐሳብ",
          body:
            "• Said matter CANNOT be divided forever.\n" +
            "• There is a LIMIT — the smallest particle is called ATOMOS (meaning 'uncuttable' or 'indivisible').\n" +
            "• Atoms move and differ in shape and size.\n" +
            "• Atoms can join together to form other things.\n\n" +
            "Key word: 'atom' comes from Democritus's 'atomos'.",
          bodyAm:
            "• ንጥረ ነገር ለዘላለም ሊከፋፈል አይችልም አለ።\n• ገደብ አለው — ትንሹ ቅንጣት አቶሞስ ይባላል ('የማይቆረጥ')።\n• አቶሞች ይንቀሳቀሳሉ፣ በቅርጽና በመጠን ይለያያሉ።\n• 'አቶም' የሚለው ቃል ከዲሞክሪተስ 'አቶሞስ' የመጣ ነው።",
        },
        {
          id: "n1-2",
          title: "Aristotle (384–322 BC) — Continuous Theory",
          titleAm: "አሪስቶትል — ቀጣይ ንጥረ ነገር ንድፈ ሐሳብ",
          body:
            "• Said matter CAN be divided forever — without any limit.\n" +
            "• Did NOT believe in tiny building particles (atoms).\n" +
            "• Said matter is a combination of FOUR elements: fire, earth, air, water.\n\n" +
            "Banchi, notice: Aristotle REJECTED the idea of atoms.",
          bodyAm:
            "• ንጥረ ነገር ለዘላለም ሊከፋፈል ይችላል አለ።\n• በትንንሽ ቅንጣቶች (አቶሞች) አላመነም።\n• ንጥረ ነገር አራት ንጥረ ነገሮች ጥምረት ነው አለ፡ እሳት፣ መሬት፣ አየር፣ ውሃ።",
        },
        {
          id: "n1-3",
          title: "Comparison table",
          titleAm: "የንጽጽር ሠንጠረዥ",
          body:
            "Discreteness (Democritus)   |   Continuous (Aristotle)\n" +
            "• Matter has a limit           |   • Matter is infinitely divisible\n" +
            "• Atoms exist                  |   • No atoms\n" +
            "• Smallest = atomos            |   • Combination of fire, earth, air, water",
          bodyAm:
            "የተከፋፈለ (ዲሞክሪተስ) | ቀጣይ (አሪስቶትል)\n• ንጥረ ነገር ገደብ አለው | • ንጥረ ነገር ማለቂያ የለውም\n• አቶሞች አሉ | • አቶሞች የሉም\n• ትንሹ = አቶሞስ | • ከእሳት፣ መሬት፣ አየር፣ ውሃ ጥምረት",
        },
        {
          id: "n1-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: Democritus = ATOMS (discreteness). Aristotle = NO ATOMS (continuous). Students often swap them. Memory trick: 'Democritus sounds like ATOM — both start with 'D'-like sound. Aristotle believed in FOUR elements, not atoms.'",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ዲሞክሪተስ = አቶሞች። አሪስቶትል = አቶሞች የሉም።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Inside of an Atom — The Structure",
      titleAm: "የአቶም ውስጣዊ አወቃቀር",
      body:
        "Banchi, an atom has TWO main parts: a tiny dense NUCLEUS at the center, surrounded by fast-moving ELECTRONS in shells (energy levels).",
      bodyAm:
        "ባንቺ፣ አቶም ሁለት ዋና ክፍሎች አሉት፡ በመሃል ላይ ትንሽ ጥቅጥቅ ያለ ኑክሊየስ እና በሼሎች ውስጥ በፍጥነት የሚንቀሳቀሱ ኤሌክትሮኖች።",
      children: [
        {
          id: "n2-1",
          title: "The nucleus",
          titleAm: "ኑክሊየስ",
          body:
            "The nucleus is at the CENTER of the atom. It contains:\n" +
            "• Protons (positively charged, +1)\n" +
            "• Neutrons (no charge, 0)\n\n" +
            "So the nucleus is POSITIVELY charged overall.\n" +
            "Almost ALL the mass of the atom is in the nucleus.",
          bodyAm:
            "ኑክሊየስ በአቶም መሃል ነው። ይዟል፡\n• ፕሮቶኖች (አዎንታዊ ቻርጅ፣ +1)\n• ኒውትሮኖች (ቻርጅ የላቸውም፣ 0)\nስለዚህ ኑክሊየስ በአጠቃላይ አዎንታዊ ነው።\nየአቶሙ ሙሉ ክብደት በኑክሊየስ ውስጥ ነው።",
        },
        {
          id: "n2-2",
          title: "The electron shells",
          titleAm: "የኤሌክትሮን ሼሎች",
          body:
            "Electrons move AROUND the nucleus in shells (energy levels).\n\n" +
            "• Electrons are NEGATIVELY charged (−1).\n" +
            "• The mass of an electron is very small — about 1/2000 of a proton.\n" +
            "• A neutral atom has EQUAL number of protons and electrons.",
          bodyAm:
            "ኤሌክትሮኖች በሼሎች ውስጥ በኑክሊየስ ዙሪያ ይንቀሳቀሳሉ።\n• ኤሌክትሮኖች አሉታዊ ቻርጅ አላቸው (−1)።\n• የኤሌክትሮን ክብደት በጣም ትንሽ ነው።\n• ገለልተኛ አቶም እኩል ፕሮቶኖችና ኤሌክትሮኖች አሉት።",
        },
        {
          id: "n2-3",
          title: "Subatomic particles table",
          titleAm: "የንዑስ-አቶማዊ ቅንጣቶች ሠንጠረዥ",
          body:
            "Particle   | Location        | Relative Charge | Relative Mass\n" +
            "Proton     | Nucleus         | +1              | 1 amu\n" +
            "Neutron    | Nucleus         | 0               | 1 amu\n" +
            "Electron   | Outside nucleus | −1              | ~0 (negligible)",
          bodyAm:
            "ፕሮቶን | ኑክሊየስ | +1 | 1\nኒውትሮን | ኑክሊየስ | 0 | 1\nኤሌክትሮን | ከኑክሊየስ ውጭ | −1 | ≈0",
        },
        {
          id: "n2-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: ONLY protons and neutrons are in the nucleus. Electrons are OUTSIDE. Students often wrongly put electrons in the nucleus. Also: protons and neutrons have approximately the SAME mass (about 1 amu), but an electron is ~2000 times LIGHTER.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ፕሮቶኖችና ኒውትሮኖች ብቻ በኑክሊየስ ውስጥ ናቸው። ኤሌክትሮኖች ውጭ ናቸው።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Atomic Number (Z)",
      titleAm: "አቶማዊ ቁጥር (Z)",
      body:
        "Banchi, the atomic number (Z) is the NUMBER OF PROTONS in the nucleus. It identifies the element. Every carbon atom has 6 protons — that's why its Z = 6.",
      bodyAm:
        "ባንቺ፣ አቶማዊ ቁጥር (Z) በኑክሊየስ ውስጥ ያለው የፕሮቶን ቁጥር ነው። ንጥረ ነገሩን ይለያል።",
      children: [
        {
          id: "n3-1",
          title: "The key rule",
          titleAm: "ቁልፍ ደንብ",
          body:
            "Atomic Number (Z) = Number of protons = Number of electrons (in a NEUTRAL atom)\n\n" +
            "Why are protons = electrons? Because the atom is NEUTRAL overall — positive charges must equal negative charges.",
          bodyAm:
            "አቶማዊ ቁጥር (Z) = የፕሮቶን ቁጥር = የኤሌክትሮን ቁጥር (በገለልተኛ አቶም)\nለምን? ምክንያቱም አቶሙ በአጠቃላይ ገለልተኛ ነው።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Mass Number (A)",
      titleAm: "የክብደት ቁጥር (A)",
      body:
        "Banchi, the mass number (A) is the SUM of protons AND neutrons in the nucleus. It is NOT on the periodic table — you compute it.",
      bodyAm:
        "ባንቺ፣ የክብደት ቁጥር (A) በኑክሊየስ ውስጥ ያሉት የፕሮቶንና የኒውትሮን ድምር ነው።",
      children: [
        {
          id: "n4-1",
          title: "The formulas",
          titleAm: "ቀመሮቹ",
          body:
            "Mass Number (A) = Number of protons + Number of neutrons\n" +
            "A = Z + N\n\n" +
            "So: Number of neutrons (N) = A − Z = Mass number − Atomic number",
          bodyAm:
            "የክብደት ቁጥር (A) = የፕሮቶን ቁጥር + የኒውትሮን ቁጥር\nA = Z + N\nN = A − Z",
        },
        {
          id: "n4-2",
          title: "Standard notation",
          titleAm: "መደበኛ ምልክት",
          body:
            "We write an atom as:\n\n" +
            "  A  → mass number (top)\n" +
            "  Z  → atomic number (bottom)\n" +
            "  X  → element symbol\n\n" +
            "Example: ¹²₆C means:\n" +
            "• Mass number A = 12\n" +
            "• Atomic number Z = 6\n" +
            "• Symbol: C (carbon)",
          bodyAm:
            "A = የክብደት ቁጥር (ከላይ)\nZ = አቶማዊ ቁጥር (ከታች)\nX = የንጥረ ነገር ምልክት\nምሳሌ፡ ¹²₆C ማለት A = 12, Z = 6, C = ካርቦን።",
        },
        {
          id: "n4-3",
          title: "Worked example (must know!)",
          titleAm: "የሠራት ምሳሌ",
          body:
            "For ¹⁴₇N (nitrogen-14):\n" +
            "• Z = 7 → protons = 7\n" +
            "• Electrons = protons = 7 (neutral atom)\n" +
            "• A = 14\n" +
            "• Neutrons = A − Z = 14 − 7 = 7\n\n" +
            "Answer: 7 protons, 7 electrons, 7 neutrons.",
          bodyAm:
            "ለ ¹⁴₇N፡\nZ = 7 → ፕሮቶኖች = 7\nኤሌክትሮኖች = 7\nA = 14\nኒውትሮኖች = 14 − 7 = 7",
        },
        {
          id: "n4-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, this is the biggest trap in Unit 2. Two very different words: MASS NUMBER (protons + neutrons) vs ATOMIC MASS (average mass in amu from periodic table). They are NOT the same. Also, HYDROGEN (¹H) is the ONLY atom with NO neutrons.",
          bodyAm:
            "ባንቺ፣ ይህ በክፍል 2 ውስጥ ትልቁ ወጥመድ ነው። ሁለት ቃላት፡ 'የክብደት ቁጥር' (ፕሮቶኖች + ኒውትሮኖች) እና 'አቶማዊ ክብደት' (ከሠንጠረዡ አማካይ)። ሃይድሮጅን ብቻ ኒውትሮን የለውም።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Molecules — Elements vs Compounds",
      titleAm: "ሞለኪዩሎች — ንጥረ ነገር እና ውህድ",
      body:
        "Banchi, a MOLECULE is the smallest particle of an element or compound that can exist freely. When two or more atoms join, we get a molecule. Two families: molecules of ELEMENTS and molecules of COMPOUNDS.",
      bodyAm:
        "ባንቺ፣ ሞለኪዩል በነፃ ሊኖር የሚችል ትንሹ የንጥረ ነገር ወይም የውህድ ቅንጣት ነው። ሁለት ወይም ከዚያ በላይ አቶሞች ሲጣመሩ ሞለኪዩል ይሆናል።",
      children: [
        {
          id: "n5-1",
          title: "Molecules of elements — 3 types",
          titleAm: "የንጥረ ነገር ሞለኪዩሎች — 3 ዓይነቶች",
          body:
            "Molecules of elements contain ONLY ONE TYPE of atom. Three sub-types:\n\n" +
            "1) Monoatomic — 1 atom. Examples: He, Ne, Ar, Kr, Xe, Rn (noble gases).\n" +
            "2) Diatomic — 2 atoms. Examples: O₂, H₂, N₂, F₂, Cl₂, Br₂, I₂.\n" +
            "3) Polyatomic — 3 or more atoms. Examples: O₃ (ozone), P₄, S₈.",
          bodyAm:
            "የንጥረ ነገር ሞለኪዩሎች አንድ ዓይነት አቶም ብቻ ይይዛሉ።\n1) ሞኖአቶሚክ (1)፡ He, Ne, Ar, Kr, Xe, Rn።\n2) ዳያቶሚክ (2)፡ O₂, H₂, N₂, F₂, Cl₂, Br₂, I₂።\n3) ፖሊአቶሚክ (3+)፡ O₃, P₄, S₈።",
        },
        {
          id: "n5-2",
          title: "Molecules of compounds",
          titleAm: "የውህድ ሞለኪዩሎች",
          body:
            "Molecules of compounds contain TWO OR MORE DIFFERENT types of atoms combined chemically.\n\n" +
            "Examples: H₂O (water), NH₃ (ammonia), CO₂ (carbon dioxide), HCl (hydrogen chloride), NaCl (table salt).",
          bodyAm:
            "የውህድ ሞለኪዩሎች ሁለት ወይም ከዚያ በላይ የተለያዩ አቶሞች ይይዛሉ።\nምሳሌዎች፡ H₂O, NH₃, CO₂, HCl, NaCl።",
        },
        {
          id: "n5-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, HUGE trap: molecule of ELEMENT = one type of atom (O₂, H₂). Molecule of COMPOUND = different types of atoms (H₂O, CO₂). Quick test: does it have more than one capital letter in the formula? Yes → compound molecule. No → element molecule. Exception: O₃ has only one letter but is still an element molecule.",
          bodyAm:
            "ባንቺ፣ ትልቅ ወጥመድ፡ የንጥረ ነገር ሞለኪዩል = አንድ ዓይነት አቶም (O₂, H₂)። የውህድ ሞለኪዩል = የተለያዩ አቶሞች (H₂O, CO₂)።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Exam Strategy — Unit 2",
      titleAm: "የፈተና ስልት — ክፍል 2",
      body:
        "Banchi, five quick checks before answering Unit 2 questions.",
      bodyAm:
        "ባንቺ፣ የክፍል 2 ጥያቄዎችን ከመመለስሽ በፊት አምስት ፈጣን ቼኮች።",
      children: [
        {
          id: "n6-1",
          title: "Check 1 — Democritus or Aristotle?",
          titleAm: "ቼክ 1 — ዲሞክሪተስ ወይስ አሪስቶትል?",
          body:
            "Atoms exist → Democritus. No atoms, only fire/earth/air/water → Aristotle.",
          bodyAm:
            "አቶሞች አሉ → ዲሞክሪተስ። አቶሞች የሉም → አሪስቶትል።",
        },
        {
          id: "n6-2",
          title: "Check 2 — In the nucleus?",
          titleAm: "ቼክ 2 — በኑክሊየስ ውስጥ?",
          body:
            "Protons and neutrons → YES. Electrons → NO (outside in shells).",
          bodyAm:
            "ፕሮቶኖችና ኒውትሮኖች → አዎ። ኤሌክትሮኖች → አይደሉም (ውጭ)።",
        },
        {
          id: "n6-3",
          title: "Check 3 — Atomic or mass number?",
          titleAm: "ቼክ 3 — አቶማዊ ወይስ የክብደት ቁጥር?",
          body:
            "Number of protons → atomic number (Z). Protons + neutrons → mass number (A).",
          bodyAm:
            "የፕሮቶን ቁጥር → Z. ፕሮቶኖች + ኒውትሮኖች → A.",
        },
        {
          id: "n6-4",
          title: "Check 4 — Element or compound molecule?",
          titleAm: "ቼክ 4 — የንጥረ ነገር ወይስ የውህድ ሞለኪዩል?",
          body:
            "Only one type of atom → element molecule (H₂, O₂, O₃). More than one type → compound molecule (H₂O, CO₂, NH₃).",
          bodyAm:
            "አንድ ዓይነት አቶም ብቻ → የንጥረ ነገር ሞለኪዩል። ብዙ ዓይነት → የውህድ ሞለኪዩል።",
        },
        {
          id: "n6-5",
          title: "Check 5 — Which particle is smallest?",
          titleAm: "ቼክ 5 — የትኛው ቅንጣት ትንሽ ነው?",
          body:
            "Electron is ~2000 times lighter than proton or neutron. Almost all atomic mass is in the nucleus.",
          bodyAm:
            "ኤሌክትሮን ~2000 እጥፍ ቀላል ነው። ሁሉም የአቶም ክብደት በኑክሊየስ ውስጥ ነው።",
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
      stem: "Who first proposed the idea of 'atoms'?",
      options: ["Aristotle", "Democritus", "Plato", "Socrates"],
      answer: "1",
      explanation:
        "Democritus (460–370 BC) proposed that matter consists of tiny indivisible particles called 'atomos'.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "Who argued that matter is 'continuous' and can be divided forever?",
      options: ["Democritus", "Aristotle", "Newton", "Dalton"],
      answer: "1",
      explanation:
        "Aristotle (384–322 BC) believed matter is continuous — divided forever with no limit. He rejected atoms.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "According to Aristotle, matter is made of which four elements?",
      options: [
        "Fire, air, water, metal",
        "Fire, earth, air, water",
        "Earth, wind, fire, stone",
        "Fire, air, water, gold",
      ],
      answer: "1",
      explanation:
        "Aristotle said matter is a combination of FOUR elements: fire, earth, air, and water.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "The word 'atom' comes from the Greek word 'atomos', meaning:",
      options: ["Small", "Uncuttable or indivisible", "Round", "Invisible"],
      answer: "1",
      explanation:
        "'Atomos' means uncuttable or indivisible — Democritus's name for the smallest particle.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "What are the TWO main parts of an atom?",
      options: [
        "Protons and electrons",
        "Nucleus and electron shells",
        "Neutrons and shells",
        "Nucleus and protons",
      ],
      answer: "1",
      explanation:
        "An atom has a NUCLEUS in the center and ELECTRON SHELLS outside.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "Where is the nucleus located in an atom?",
      options: ["On the edge", "Outside the atom", "At the center", "In the electron shells"],
      answer: "2",
      explanation:
        "The nucleus is at the CENTER of the atom.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "Which particle has a POSITIVE charge?",
      options: ["Proton", "Neutron", "Electron", "Atom"],
      answer: "0",
      explanation:
        "Proton has a positive charge (+1). Neutron has no charge. Electron is negative.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "Which particle has a NEGATIVE charge?",
      options: ["Proton", "Neutron", "Electron", "Nucleus"],
      answer: "2",
      explanation:
        "Electron has a negative charge (−1).",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "Which particle has NO charge?",
      options: ["Proton", "Neutron", "Electron", "Ion"],
      answer: "1",
      explanation:
        "Neutron has zero (0) charge — it is neutral.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "Which particles are found IN the nucleus?",
      options: [
        "Protons and electrons",
        "Neutrons and electrons",
        "Protons and neutrons",
        "Only protons",
      ],
      answer: "2",
      explanation:
        "The nucleus contains PROTONS and NEUTRONS. Electrons are outside in shells.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "Which particle is found OUTSIDE the nucleus?",
      options: ["Proton", "Neutron", "Electron", "Atom"],
      answer: "2",
      explanation:
        "Electrons are found OUTSIDE the nucleus, in shells (energy levels).",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "Which particle has the SMALLEST mass?",
      options: ["Proton", "Neutron", "Electron", "All equal"],
      answer: "2",
      explanation:
        "Electron is about 2000 times lighter than a proton or neutron — its mass is often considered negligible.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "The atomic number (Z) of an atom equals the number of:",
      options: ["Neutrons", "Protons", "Electrons + neutrons", "Nucleons"],
      answer: "1",
      explanation:
        "Atomic number (Z) = number of PROTONS in the nucleus.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "In a NEUTRAL atom, the number of protons equals the number of:",
      options: ["Neutrons", "Electrons", "Nucleons", "Atomic mass units"],
      answer: "1",
      explanation:
        "A neutral atom has equal numbers of protons (positive) and electrons (negative).",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "The mass number (A) equals:",
      options: [
        "Number of protons only",
        "Number of neutrons only",
        "Number of protons + number of neutrons",
        "Number of electrons",
      ],
      answer: "2",
      explanation:
        "Mass number (A) = protons + neutrons in the nucleus.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "How many neutrons are there in an atom with mass number 14 and atomic number 6?",
      options: ["6", "8", "14", "20"],
      answer: "1",
      explanation:
        "Neutrons = A − Z = 14 − 6 = 8.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "For the notation ¹²₆C, what does '12' represent?",
      options: ["Atomic number", "Mass number", "Number of electrons", "Number of neutrons"],
      answer: "1",
      explanation:
        "The top number (12) is the MASS NUMBER. The bottom number (6) is the ATOMIC number.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "For the notation ¹²₆C, what does '6' represent?",
      options: ["Atomic number", "Mass number", "Number of neutrons", "Nucleus"],
      answer: "0",
      explanation:
        "The bottom number (6) is the ATOMIC number — the number of protons.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is a molecule of an ELEMENT?",
      options: ["H₂O", "CO₂", "O₂", "NaCl"],
      answer: "2",
      explanation:
        "O₂ contains only one type of atom (oxygen). It's a molecule of an element.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is a molecule of a COMPOUND?",
      options: ["O₂", "H₂", "N₂", "H₂O"],
      answer: "3",
      explanation:
        "H₂O (water) contains TWO different types of atoms — hydrogen and oxygen. It's a compound.",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a MONOATOMIC molecule?",
      options: ["H₂", "O₂", "He", "H₂O"],
      answer: "2",
      explanation:
        "Monoatomic = 1 atom. Helium (He) is a monoatomic molecule. H₂ and O₂ are diatomic.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a DIATOMIC molecule?",
      options: ["He", "O₂", "O₃", "S₈"],
      answer: "1",
      explanation:
        "Diatomic = 2 atoms. O₂ has 2 oxygen atoms. He = 1 atom. O₃ = 3 atoms. S₈ = 8 atoms.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a POLYATOMIC molecule?",
      options: ["He", "N₂", "O₃", "Ar"],
      answer: "2",
      explanation:
        "Polyatomic = 3 or more atoms. O₃ (ozone) has 3 oxygen atoms. He, N₂, Ar are mono or diatomic.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "Which statement about Democritus is TRUE?",
      options: [
        "He believed matter is continuous",
        "He believed in atoms — matter is discrete",
        "He believed in only 4 elements",
        "He had no opinion on matter",
      ],
      answer: "1",
      explanation:
        "Democritus believed in DISCRETENESS — matter has a limit and consists of atoms.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "Which statement about Aristotle is TRUE?",
      options: [
        "He believed in atoms",
        "He believed matter can be divided forever",
        "He discovered protons",
        "He was a chemist",
      ],
      answer: "1",
      explanation:
        "Aristotle believed matter is CONTINUOUS — divided forever. He rejected the idea of atoms.",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "How many protons, neutrons, and electrons are in ¹⁴₇N?",
      options: [
        "7 protons, 14 neutrons, 7 electrons",
        "7 protons, 7 neutrons, 7 electrons",
        "14 protons, 14 neutrons, 14 electrons",
        "7 protons, 7 neutrons, 14 electrons",
      ],
      answer: "1",
      explanation:
        "Z = 7 → protons = 7. A = 14 → neutrons = 14 − 7 = 7. Electrons = protons = 7.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "An atom has 9 protons and 10 neutrons. What is its mass number?",
      options: ["9", "10", "19", "11"],
      answer: "2",
      explanation:
        "Mass number A = protons + neutrons = 9 + 10 = 19.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "An atom has 9 protons and 10 neutrons. What is the element?",
      options: ["Oxygen", "Fluorine", "Neon", "Carbon"],
      answer: "1",
      explanation:
        "The element with atomic number 9 is FLUORINE (F).",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "How many neutrons are in ²⁴₁₂Mg?",
      options: ["12", "24", "11", "13"],
      answer: "0",
      explanation:
        "Neutrons = A − Z = 24 − 12 = 12.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about the nucleus of an atom?",
      options: [
        "Contains only electrons",
        "Contains all protons and all electrons",
        "Is always positively charged",
        "Accounts for most of the total volume",
      ],
      answer: "2",
      explanation:
        "The nucleus contains protons (+) and neutrons (0) — so it's positively charged. Electrons are outside. It accounts for most MASS, not most volume.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Which particle is found in the nucleus and has NO charge?",
      options: ["Proton", "Electron", "Neutron", "Ion"],
      answer: "2",
      explanation:
        "Neutron is in the nucleus and has zero charge.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why an atom is NEUTRAL overall?",
      options: [
        "Number of protons equals number of neutrons",
        "Number of protons equals number of electrons",
        "Number of neutrons equals number of electrons",
        "Atoms are always positive",
      ],
      answer: "1",
      explanation:
        "Neutral atoms have EQUAL protons (+) and electrons (−). The charges cancel out.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "How many electrons does a neutral atom of ⁵⁶₂₆Fe have?",
      options: ["56", "26", "30", "82"],
      answer: "1",
      explanation:
        "In a neutral atom, electrons = protons = atomic number Z = 26.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Which one is NOT true about the electron?",
      options: [
        "It has a negative charge",
        "It is found in shells around the nucleus",
        "Its mass is about the same as a proton",
        "It is 2000 times lighter than a proton",
      ],
      answer: "2",
      explanation:
        "The electron's mass is NOT the same as a proton — it is about 2000 times LIGHTER (negligible).",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these molecules contains ONLY oxygen atoms?",
      options: ["H₂O", "CO₂", "O₃", "H₂O₂"],
      answer: "2",
      explanation:
        "O₃ (ozone) has only oxygen atoms. All the others contain at least one non-oxygen atom.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "Classify NH₃:",
      options: [
        "Monoatomic molecule of element",
        "Diatomic molecule of element",
        "Polyatomic molecule of element",
        "Molecule of a compound",
      ],
      answer: "3",
      explanation:
        "NH₃ has TWO different atoms (nitrogen + hydrogen) — so it's a molecule of a COMPOUND.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Classify S₈:",
      options: [
        "Monoatomic molecule",
        "Diatomic molecule",
        "Polyatomic molecule of an element",
        "Molecule of a compound",
      ],
      answer: "2",
      explanation:
        "S₈ = 8 sulfur atoms of the SAME element → polyatomic molecule of an element.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Classify Br₂:",
      options: [
        "Monoatomic molecule",
        "Diatomic molecule of an element",
        "Polyatomic molecule",
        "Molecule of a compound",
      ],
      answer: "1",
      explanation:
        "Br₂ = 2 bromine atoms → diatomic molecule of an element.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Classify HCl:",
      options: [
        "Monoatomic",
        "Diatomic molecule of an element",
        "Molecule of a compound",
        "Polyatomic",
      ],
      answer: "2",
      explanation:
        "HCl has two DIFFERENT atoms (hydrogen + chlorine) → molecule of a compound.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these is a molecule of an ELEMENT?",
      options: ["H₂O", "NH₃", "HCl", "O₂"],
      answer: "3",
      explanation:
        "O₂ contains only oxygen atoms → molecule of an element.",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "An atom has 15 protons and 16 neutrons. What is its mass number and element?",
      options: [
        "15; phosphorus",
        "16; sulfur",
        "31; phosphorus",
        "31; sulfur",
      ],
      answer: "2",
      explanation:
        "A = 15 + 16 = 31. Z = 15 → phosphorus (P).",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "Which statement about electrons in an atom is TRUE?",
      options: [
        "They are located in the nucleus",
        "They have a positive charge",
        "They move around the nucleus in shells",
        "They are larger than protons",
      ],
      answer: "2",
      explanation:
        "Electrons move around the nucleus in shells (energy levels) and have a negative charge.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly compares the mass of a proton and a neutron?",
      options: [
        "Protons are much heavier",
        "Neutrons are much heavier",
        "They have approximately the SAME mass",
        "One has no mass",
      ],
      answer: "2",
      explanation:
        "Protons and neutrons have approximately the SAME mass (about 1 amu).",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about the mass of an electron?",
      options: [
        "It is larger than the proton",
        "It is approximately equal to the neutron",
        "It is about 2000 times lighter than a proton",
        "It is the heaviest particle",
      ],
      answer: "2",
      explanation:
        "An electron is ~2000 times LIGHTER than a proton or neutron. Its mass is often treated as negligible.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "In a neutral atom of ⁸⁸₃₈Sr, how many protons, neutrons, and electrons are present?",
      options: [
        "38, 50, 38",
        "38, 88, 38",
        "88, 38, 38",
        "38, 38, 50",
      ],
      answer: "0",
      explanation:
        "Z = 38 → protons = 38. A = 88 → neutrons = 88 − 38 = 50. Electrons = 38.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "Which molecule has THREE atoms?",
      options: ["H₂", "CO₂", "O₂", "He"],
      answer: "1",
      explanation:
        "CO₂ (carbon dioxide) = 1 carbon + 2 oxygen = 3 atoms.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the mass number of an atom with 6 protons and 8 neutrons?",
      options: ["6", "8", "14", "2"],
      answer: "2",
      explanation:
        "Mass number = protons + neutrons = 6 + 8 = 14.",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these represents hydrogen-1 (the ONLY atom with no neutrons)?",
      options: ["¹H", "²H", "³H", "⁴H"],
      answer: "0",
      explanation:
        "¹H has 1 proton and 0 neutrons. It's the only common atom with NO neutrons.",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these is TRUE about molecules of compounds?",
      options: [
        "They contain only one type of atom",
        "They contain two or more different types of atoms",
        "They cannot exist freely",
        "They are all gases",
      ],
      answer: "1",
      explanation:
        "Molecules of compounds contain TWO OR MORE DIFFERENT types of atoms combined chemically.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "Which one is an INVALID statement about atoms?",
      options: [
        "All atoms of the same element have the same number of protons",
        "Different elements have different numbers of protons",
        "Atoms of the same element can have different numbers of neutrons",
        "Atoms of different elements always have the same number of electrons",
      ],
      answer: "3",
      explanation:
        "Different elements have DIFFERENT numbers of electrons. That's why they behave differently in chemistry.",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement about the historical development of atomic theory is CORRECT?",
      options: [
        "Democritus's theory was accepted immediately",
        "Aristotle's view dominated for about 2000 years before the modern atomic theory",
        "No philosopher ever questioned matter's structure",
        "Both Democritus and Aristotle were chemists",
      ],
      answer: "1",
      explanation:
        "Aristotle's continuous view dominated Western thinking for nearly 2000 years until modern atomic theory (Dalton) revived Democritus's idea.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly compares the volume and mass distribution in an atom?",
      options: [
        "Most mass in nucleus; most volume also in nucleus",
        "Most mass in nucleus; most volume in electron shells",
        "Most mass in electrons; most volume in nucleus",
        "Mass and volume are equally distributed",
      ],
      answer: "1",
      explanation:
        "Most of the atom's MASS is in the tiny nucleus, but most of the atom's VOLUME is the space occupied by electron shells. This is the key 'atom is mostly empty space' idea.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Which of these pairs is NOT correctly matched?",
      options: [
        "Proton — positive — nucleus",
        "Neutron — neutral — nucleus",
        "Electron — negative — nucleus",
        "Electron — negative — shell",
      ],
      answer: "2",
      explanation:
        "Electrons are NEGATIVE, but they are found in SHELLS, not the nucleus. Option C is wrong.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Two atoms have the same atomic number but different mass numbers. They are:",
      options: [
        "Different elements",
        "Isotopes of the same element",
        "The same atom",
        "Always neutral",
      ],
      answer: "1",
      explanation:
        "Same Z (same protons) = same element. Different A (different neutrons) = isotopes. Example: ¹²C and ¹⁴C.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes a 'molecule'?",
      options: [
        "A positively charged particle",
        "The smallest particle of an element or compound that can exist freely",
        "Only a single atom",
        "A type of atom",
      ],
      answer: "1",
      explanation:
        "A molecule is the smallest particle of an element OR compound that can exist freely in nature.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "Which is TRUE about the number ¹⁶₈O and ¹⁷₈O?",
      options: [
        "They are different elements",
        "They are isotopes of oxygen",
        "They have different atomic numbers",
        "They have the same mass number",
      ],
      answer: "1",
      explanation:
        "Both have Z = 8 (oxygen). Different mass numbers (16 vs 17) → different neutrons → they are ISOTOPES of oxygen.",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Compare and contrast the discreteness theory and the continuous theory of matter.",
      answer:
        "Discreteness theory (Democritus): matter has a limit — it consists of tiny indivisible particles called atoms. Continuous theory (Aristotle): matter can be divided forever with no limit and has no atoms; it consists of fire, earth, air, and water.",
      explanation:
        "Banchi, this is a classic comparison question. Learn both theories with their proposers.",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "State the three fundamental subatomic particles and give the location, charge, and relative mass of each.",
      answer:
        "1) Proton — in nucleus — charge +1 — mass 1 amu. 2) Neutron — in nucleus — charge 0 — mass 1 amu. 3) Electron — outside nucleus in shells — charge −1 — mass ~0 (negligible, 2000× lighter than proton).",
      explanation:
        "Memorize: protons and neutrons in nucleus; electrons in shells. Proton and neutron ~same mass; electron much lighter.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "Determine the number of protons, neutrons, and electrons for ¹⁶₈O.",
      answer:
        "Z = 8 → protons = 8. A = 16 → neutrons = 16 − 8 = 8. Electrons = 8 (neutral atom). So 8 protons, 8 neutrons, 8 electrons.",
      explanation:
        "Formula: protons = Z; electrons = Z (neutral); neutrons = A − Z.",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "Classify each of the following as monoatomic, diatomic, or polyatomic molecule of an element OR as a molecule of a compound: Ar, O₃, N₂, H₂O, CH₄, S₈.",
      answer:
        "Ar — monoatomic element. O₃ — polyatomic element. N₂ — diatomic element. H₂O — compound molecule. CH₄ — compound molecule. S₈ — polyatomic element.",
      explanation:
        "Rule: If only ONE type of atom → element molecule. If more than one → compound molecule.",
    },
        // ============================================================
    // BATCH 2 — Q61 to Q120 (final for Unit 2)
    // ============================================================

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which ancient philosopher believed that matter is made of only 4 elements?",
      options: ["Democritus", "Aristotle", "Dalton", "Newton"],
      answer: "1",
      explanation:
        "Aristotle believed matter is a combination of fire, earth, air, and water.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "The three fundamental subatomic particles are:",
      options: [
        "Atoms, molecules, ions",
        "Protons, neutrons, electrons",
        "Electrons, ions, protons",
        "Nucleus, shells, orbitals",
      ],
      answer: "1",
      explanation:
        "The three subatomic particles are protons, neutrons, and electrons.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Which particle determines the identity of an element?",
      options: ["Electron", "Neutron", "Proton", "Ion"],
      answer: "2",
      explanation:
        "The number of PROTONS (atomic number) determines the element. Different elements have different numbers of protons.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "How many electrons does a neutral carbon atom (Z = 6) have?",
      options: ["4", "6", "12", "14"],
      answer: "1",
      explanation:
        "In a neutral atom, electrons = protons = Z. So carbon has 6 electrons.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the atomic number of an atom with 11 protons?",
      options: ["9", "10", "11", "12"],
      answer: "2",
      explanation:
        "Atomic number = number of protons = 11.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "An atom has 15 electrons. What is its atomic number (if neutral)?",
      options: ["10", "12", "15", "18"],
      answer: "2",
      explanation:
        "In a neutral atom, electrons = protons = Z. So Z = 15.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "How many protons does ⁴⁰₂₀Ca have?",
      options: ["10", "20", "40", "60"],
      answer: "1",
      explanation:
        "The atomic number Z = 20 = number of protons.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "How many neutrons does ⁴⁰₂₀Ca have?",
      options: ["20", "40", "60", "12"],
      answer: "0",
      explanation:
        "Neutrons = A − Z = 40 − 20 = 20.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Which element has atomic number 1?",
      options: ["Helium", "Hydrogen", "Lithium", "Carbon"],
      answer: "1",
      explanation:
        "Atomic number 1 = hydrogen (H).",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a noble gas with a MONOATOMIC molecule?",
      options: ["O₂", "Ne", "H₂", "O₃"],
      answer: "1",
      explanation:
        "Neon (Ne) is a noble gas and exists as a single atom — a monoatomic molecule.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "How many atoms are in one molecule of CO₂?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation:
        "CO₂ = 1 carbon + 2 oxygens = 3 atoms.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "How many atoms are in one molecule of CH₄?",
      options: ["2", "3", "4", "5"],
      answer: "3",
      explanation:
        "CH₄ = 1 carbon + 4 hydrogens = 5 atoms.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "Which molecule has ONLY one type of atom?",
      options: ["H₂O", "CO₂", "O₃", "NaCl"],
      answer: "2",
      explanation:
        "O₃ (ozone) has only oxygen atoms. It's a molecule of an element.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these has ONLY two atoms per molecule?",
      options: ["He", "O₂", "O₃", "S₈"],
      answer: "1",
      explanation:
        "O₂ is diatomic — 2 oxygen atoms per molecule.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a molecule of a compound?",
      options: ["H₂", "O₂", "H₂O", "O₃"],
      answer: "2",
      explanation:
        "H₂O has two different atoms (H and O) — a compound molecule.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "Which noble gas is often used in advertising signs because it glows?",
      options: ["Helium", "Neon", "Argon", "Krypton"],
      answer: "1",
      explanation:
        "Neon glows with a distinctive orange-red color when electricity passes through it.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a subatomic particle?",
      options: ["Proton", "Neutron", "Electron", "Molecule"],
      answer: "3",
      explanation:
        "A molecule is NOT a subatomic particle — it's made of atoms. The three subatomic particles are proton, neutron, and electron.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "In standard notation ⁵⁶₂₆Fe, what is the mass number?",
      options: ["26", "30", "56", "82"],
      answer: "2",
      explanation:
        "Mass number (A) = 56 (top number). The bottom number 26 is the atomic number.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes an electron shell?",
      options: [
        "A region inside the nucleus",
        "A region outside the nucleus where electrons are found",
        "A type of particle",
        "The same as a proton",
      ],
      answer: "1",
      explanation:
        "Electron shells (energy levels) are regions OUTSIDE the nucleus where electrons move.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is TRUE about the mass of an atom?",
      options: [
        "Most mass is in the electrons",
        "Most mass is in the nucleus",
        "Mass is equally distributed",
        "Atoms have no mass",
      ],
      answer: "1",
      explanation:
        "Protons and neutrons (in the nucleus) carry almost all the atomic mass. Electrons are much lighter.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly represents hydrogen gas?",
      options: ["H", "H₂", "H₂O", "He"],
      answer: "1",
      explanation:
        "Hydrogen gas exists as a diatomic molecule: H₂.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these has 8 atoms per molecule?",
      options: ["O₂", "O₃", "P₄", "S₈"],
      answer: "3",
      explanation:
        "S₈ = 8 sulfur atoms per molecule.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these has 4 atoms per molecule?",
      options: ["O₂", "O₃", "P₄", "S₈"],
      answer: "2",
      explanation:
        "P₄ = 4 phosphorus atoms per molecule.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "How many protons does a neutral atom of ¹⁶₈O have?",
      options: ["4", "8", "16", "24"],
      answer: "1",
      explanation:
        "Atomic number Z = 8 → 8 protons.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "How many electrons does a neutral atom of ²³₁₁Na have?",
      options: ["10", "11", "12", "23"],
      answer: "1",
      explanation:
        "Electrons = protons = Z = 11.",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "How many protons, neutrons, and electrons are in ³²₁₆S?",
      options: [
        "16, 32, 16",
        "16, 16, 16",
        "32, 16, 16",
        "16, 16, 32",
      ],
      answer: "1",
      explanation:
        "Z = 16 → protons = 16. A = 32 → neutrons = 32 − 16 = 16. Electrons = 16.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "How many protons, neutrons, and electrons are in ²³₁₁Na?",
      options: [
        "11, 12, 11",
        "11, 11, 12",
        "12, 11, 11",
        "11, 23, 11",
      ],
      answer: "0",
      explanation:
        "Z = 11 → protons = 11. A = 23 → neutrons = 23 − 11 = 12. Electrons = 11.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "How many protons, neutrons, and electrons are in ⁶⁵₂₉Cu?",
      options: [
        "29, 36, 29",
        "29, 65, 29",
        "65, 29, 65",
        "29, 29, 36",
      ],
      answer: "0",
      explanation:
        "Z = 29 → protons = 29. A = 65 → neutrons = 65 − 29 = 36. Electrons = 29.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "An atom has 17 protons and 18 neutrons. What is its atomic number and mass number?",
      options: [
        "17, 35",
        "18, 35",
        "35, 17",
        "17, 18",
      ],
      answer: "0",
      explanation:
        "Z = protons = 17. A = protons + neutrons = 17 + 18 = 35.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Which element has Z = 17?",
      options: ["Sulfur", "Chlorine", "Argon", "Fluorine"],
      answer: "1",
      explanation:
        "Chlorine (Cl) has atomic number 17.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about isotopes?",
      options: [
        "They have the same number of neutrons but different protons",
        "They have the same number of protons but different neutrons",
        "They have no protons",
        "They are different elements",
      ],
      answer: "1",
      explanation:
        "Isotopes = same element (same protons) but different neutrons (different mass numbers).",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Which pair represents isotopes?",
      options: [
        "¹²C and ¹⁴C",
        "¹²C and ¹⁴N",
        "H₂O and H₂O₂",
        "Na and Mg",
      ],
      answer: "0",
      explanation:
        "¹²C and ¹⁴C both have Z = 6 (carbon) but different mass numbers → isotopes.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following is a molecule of an element?",
      options: ["H₂O", "NH₃", "CH₄", "Cl₂"],
      answer: "3",
      explanation:
        "Cl₂ has only chlorine atoms → molecule of an element.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following is a molecule of a compound?",
      options: ["N₂", "O₃", "H₂O₂", "Cl₂"],
      answer: "2",
      explanation:
        "H₂O₂ has two different elements (H and O) → compound molecule.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "Which molecule contains 2 hydrogen atoms and 1 oxygen atom?",
      options: ["H₂O", "H₂O₂", "OH", "O₂"],
      answer: "0",
      explanation:
        "H₂O (water) has 2 hydrogen atoms and 1 oxygen atom.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these is monoatomic?",
      options: ["H₂", "O₂", "He", "Cl₂"],
      answer: "2",
      explanation:
        "He (helium) is monoatomic — it exists as single atoms.",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these elements exists as a diatomic molecule in nature?",
      options: ["He", "Ne", "N₂", "Ar"],
      answer: "2",
      explanation:
        "Nitrogen gas exists as N₂ — a diatomic molecule.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "Which one is NOT a diatomic molecule?",
      options: ["H₂", "N₂", "Cl₂", "O₃"],
      answer: "3",
      explanation:
        "O₃ (ozone) has 3 atoms — it's polyatomic, not diatomic.",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the difference between protons and neutrons?",
      options: [
        "Protons have a positive charge; neutrons have no charge",
        "Protons have no charge; neutrons are positive",
        "Protons are negative; neutrons are positive",
        "They are identical",
      ],
      answer: "0",
      explanation:
        "Protons (+) vs neutrons (0). They have the same mass but different charges.",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the size of the nucleus compared to the whole atom?",
      options: [
        "The nucleus occupies most of the atom's volume",
        "The nucleus is tiny but contains almost all the mass",
        "The nucleus and shells are the same size",
        "The nucleus is smaller than an electron",
      ],
      answer: "1",
      explanation:
        "The nucleus is TINY (compared to the whole atom) but contains almost ALL the atomic mass. Most of the atom is empty space.",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these is a molecule of an element?",
      options: ["HCl", "H₂O", "F₂", "CO₂"],
      answer: "2",
      explanation:
        "F₂ has only fluorine atoms → molecule of an element.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "How many atoms are there in a molecule of H₂SO₄?",
      options: ["4", "6", "7", "8"],
      answer: "2",
      explanation:
        "H₂SO₄ = 2 H + 1 S + 4 O = 7 atoms.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "How many different types of atoms are there in C₆H₁₂O₆ (glucose)?",
      options: ["2", "3", "4", "6"],
      answer: "1",
      explanation:
        "C₆H₁₂O₆ contains 3 types of atoms: carbon, hydrogen, oxygen.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these correctly describes a molecule of an element?",
      options: [
        "Contains only one type of atom",
        "Contains two or more different types of atoms",
        "Contains no atoms",
        "Contains only ions",
      ],
      answer: "0",
      explanation:
        "Molecule of an element contains only ONE type of atom (e.g., O₂, H₂, O₃).",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly lists the subatomic particles from smallest to largest mass?",
      options: [
        "Electron < Proton ≈ Neutron",
        "Proton < Neutron < Electron",
        "Neutron < Electron < Proton",
        "All are the same",
      ],
      answer: "0",
      explanation:
        "Electron is smallest. Proton and neutron have approximately the same mass (both ~1 amu).",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these is NOT a correct comparison of an atom's particles?",
      options: [
        "Proton and neutron have similar mass",
        "Electron is much lighter than proton",
        "Proton is negative, neutron is positive",
        "Proton is positive, electron is negative",
      ],
      answer: "2",
      explanation:
        "Protons are POSITIVE, neutrons are NEUTRAL. Option C is wrong.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "For a sodium atom ²³₁₁Na, which correctly lists its particles?",
      options: [
        "11 p, 12 n, 11 e",
        "11 p, 11 n, 12 e",
        "23 p, 11 n, 23 e",
        "11 p, 23 n, 11 e",
      ],
      answer: "0",
      explanation:
        "Z = 11 → 11 protons. A = 23 → 12 neutrons. Electrons = 11.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about the formula H₂?",
      options: [
        "It represents two different atoms",
        "It represents two atoms of the same element",
        "It represents hydrogen and helium",
        "It represents a compound",
      ],
      answer: "1",
      explanation:
        "H₂ = two hydrogen atoms — molecule of an element.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about the formula HCl?",
      options: [
        "It represents two atoms of the same element",
        "It represents two DIFFERENT atoms — a compound",
        "It represents a metal",
        "It represents hydrogen and helium",
      ],
      answer: "1",
      explanation:
        "HCl = hydrogen (H) + chlorine (Cl) — two different elements → compound.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why the atomic number determines the element?",
      options: [
        "Because the number of protons is unique for each element",
        "Because the number of electrons changes",
        "Because neutrons vary",
        "Because the atom is small",
      ],
      answer: "0",
      explanation:
        "Each element has a UNIQUE number of protons. If the number of protons changes, it's a different element.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "An atom of element X has Z = 19 and A = 39. Which is TRUE?",
      options: [
        "X has 19 protons, 19 neutrons, 19 electrons",
        "X has 19 protons, 20 neutrons, 19 electrons",
        "X has 39 protons, 19 neutrons, 39 electrons",
        "X has 19 protons, 39 neutrons, 19 electrons",
      ],
      answer: "1",
      explanation:
        "Z = 19 → protons = 19. Neutrons = A − Z = 39 − 19 = 20. Electrons = 19.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly identifies the number of different elements in CH₃COOH (acetic acid)?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation:
        "CH₃COOH contains 3 elements: carbon (C), hydrogen (H), oxygen (O).",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "Which statement is FALSE about the modern atomic model?",
      options: [
        "The nucleus contains protons and neutrons",
        "Electrons occupy shells around the nucleus",
        "Most of the atom's volume is filled with solid matter",
        "Most of the atom's mass is in the nucleus",
      ],
      answer: "2",
      explanation:
        "Most of the atom's volume is EMPTY SPACE — the nucleus is tiny compared to the whole atom.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why isotopes have the same chemical properties?",
      options: [
        "Because they have the same number of electrons (same Z)",
        "Because they have the same number of neutrons",
        "Because they have the same mass number",
        "Because isotopes are different elements",
      ],
      answer: "0",
      explanation:
        "Chemical behavior is determined by electrons. Isotopes have the same Z → same electrons → same chemistry.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why the mass number is NOT on the periodic table?",
      options: [
        "Because mass number is not a fixed value for an element (varies by isotope)",
        "Because mass number is not a real quantity",
        "Because the periodic table doesn't have numbers",
        "Because mass number = atomic number",
      ],
      answer: "0",
      explanation:
        "Mass number varies for different isotopes of the same element. The periodic table shows ATOMIC MASS (average over isotopes), not mass number of a specific isotope.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly compares the properties of atoms and molecules?",
      options: [
        "A molecule is always a single atom",
        "A molecule may contain one or more atoms bonded together",
        "A molecule is bigger than a cell",
        "A molecule cannot exist freely",
      ],
      answer: "1",
      explanation:
        "A molecule can be a single atom (He, Ne) OR multiple atoms (O₂, H₂O). It's the smallest particle that can exist freely.",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "Who was Democritus? What did he propose?",
      answer:
        "Democritus (460–370 BC) was an ancient Greek philosopher. He proposed that all matter consists of tiny indivisible particles called 'atomos' (atoms). This is the discreteness theory of matter.",
      explanation:
        "The word 'atom' comes from his Greek term 'atomos' meaning uncuttable.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "Determine the number of protons, neutrons, and electrons for ⁴⁰₂₀Ca.",
      answer:
        "Z = 20 → protons = 20. A = 40 → neutrons = 40 − 20 = 20. Electrons = 20 (neutral atom).",
      explanation:
        "Formula: protons = Z; electrons = Z (neutral); neutrons = A − Z.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "Classify each as monoatomic, diatomic, or polyatomic: O₂, He, O₃, S₈, N₂.",
      answer:
        "O₂ — diatomic. He — monoatomic. O₃ — polyatomic. S₈ — polyatomic. N₂ — diatomic.",
      explanation:
        "Monoatomic = 1 atom. Diatomic = 2 atoms. Polyatomic = 3 or more atoms.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Explain the difference between a molecule of an element and a molecule of a compound, with examples.",
      answer:
        "A molecule of an ELEMENT contains only ONE type of atom (examples: O₂, H₂, O₃, N₂, S₈). A molecule of a COMPOUND contains TWO OR MORE DIFFERENT types of atoms chemically combined (examples: H₂O, CO₂, NH₃, HCl, CH₄).",
      explanation:
        "Quick test: does the formula have more than one capital letter? If yes → compound molecule. If no → element molecule.",
    },
  ],
};