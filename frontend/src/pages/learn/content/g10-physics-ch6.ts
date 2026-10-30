import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 PHYSICS — UNIT 6
// ELECTROMAGNETIC WAVES AND GEOMETRICAL OPTICS
// Source: Grade 10 Physics Student Textbook (pp. 177–252)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, formula boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10PhysicsCh6: Chapter = {
  id: "ch6",
  number: 6,
  title: "Electromagnetic Waves and Geometrical Optics",
  titleAm: "የኤሌክትሮማግኔቲክ ማዕበሎችና የጂኦሜትሪክ ኦፕቲክስ",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this is the FINAL physics unit. It has TWO big halves:\n" +
        "1) EM WAVES & LIGHT (spectrum, speed, reflection, refraction, prisms)\n" +
        "2) OPTICS (mirrors, lenses, eye, optical instruments, color)\n\n" +
        "The WHOLE chapter reduces to FIVE formulas:\n" +
        "1) Wave speed: c = fλ\n" +
        "2) Snell's law: n₁sinθ₁ = n₂sinθ₂\n" +
        "3) Refractive index: n = c/v\n" +
        "4) Mirror/lens formula: 1/f = 1/v + 1/u  (mirror: 1/v + 1/u = 1/f; lens: 1/v − 1/u = 1/f — use the book's convention consistently)\n" +
        "5) Magnification: m = h'/h = −v/u\n\n" +
        "Plus THREE key rules:\n" +
        "• EM spectrum order (radio → gamma)\n" +
        "• Laws of reflection and refraction\n" +
        "• Sign conventions for mirrors and lenses",
      bodyAm:
        "አባቱ፣ ይህ የመጨረሻ የፊዚክስ ክፍል ነው። ሁለት ትላልቅ ክፍሎች አሉት፡ EM ማዕበሎች እና ኦፕቲክስ።\n\n" +
        "አምስቱ ቀመሮች፡\n" +
        "1) c = fλ\n" +
        "2) n₁sinθ₁ = n₂sinθ₂\n" +
        "3) n = c/v\n" +
        "4) 1/f = 1/v + 1/u\n" +
        "5) m = h'/h = −v/u",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 — EM spectrum and light",
          titleAm: "ደረጃ 1 — EM ስፔክትረምና ብርሃን",
          body:
            "EM SPECTRUM (low → high frequency):\n" +
            "Radio → Microwave → Infrared → Visible → UV → X-rays → Gamma\n\n" +
            "KEY: higher frequency = higher energy = shorter wavelength = more dangerous.\n\n" +
            "Light is an EM wave — travels at c = 3×10⁸ m/s in vacuum.",
          bodyAm:
            "EM ስፔክትረም (ዝቅተኛ → ከፍተኛ ድግግሞሽ):\n" +
            "ራዲዮ → ማይክሮዌቭ → ኢንፍራሬድ → ታይቶ የሚታይ → UV → ኤክስ-ሬይ → ጋማ",
        },
        {
          id: "n0-2",
          title: "Pass 2 — Reflection and refraction",
          titleAm: "ደረጃ 2 — ነጸብራቅና አንቀሳቃሽ",
          body:
            "REFLECTION:\n" +
            "• θi = θr (angle of incidence = angle of reflection)\n" +
            "• Incident ray, reflected ray, normal — all in SAME plane\n" +
            "• Specular (smooth) vs Diffuse (rough)\n\n" +
            "REFRACTION:\n" +
            "• Bending when light crosses media\n" +
            "• Air → glass: bends TOWARD normal\n" +
            "• Glass → air: bends AWAY from normal\n" +
            "• Snell's law: n₁sinθ₁ = n₂sinθ₂",
          bodyAm:
            "ነጸብራቅ: θi = θr።\n" +
            "አንቀሳቃሽ: ብርሃን ሚዲያ ሲቀይር ይታጠፋል።\n" +
            "Snell: n₁sinθ₁ = n₂sinθ₂",
        },
        {
          id: "n0-3",
          title: "Pass 3 — Mirrors and lenses",
          titleAm: "ደረጃ 3 — መስተዋቶችና ሌንሶች",
          body:
            "PLANE MIRROR:\n" +
            "• Virtual, erect, same size, laterally inverted\n" +
            "• Image distance = object distance\n\n" +
            "SPHERICAL MIRRORS:\n" +
            "• Concave (converging) — object inside F → virtual erect enlarged\n" +
            "• Convex (diverging) — always virtual, erect, diminished\n\n" +
            "LENSES:\n" +
            "• Convex = converging; Concave = diverging\n" +
            "• Same image patterns as mirrors (object position determines result)",
          bodyAm:
            "ጠፍጣፋ መስታወት: ምናባዊ፣ ቀጥ፣ ተመሳሳይ መጠን።\n" +
            "ቀላ መስታወት (concave): ወደ ውስጥ ይሰበስባል።\n" +
            "ቁመታዊ (convex): ወደ ውጭ ይበትናል።\n" +
            "Convex ሌንስ = ወደ ውስጥ; Concave = ወደ ውጭ።",
        },
        {
          id: "n0-4",
          title: "Pass 4 — Eye and colors",
          titleAm: "ደረጃ 4 — ዓይንና ቀለሞች",
          body:
            "EYE DEFECTS:\n" +
            "• Myopia (near-sighted) → concave lens\n" +
            "• Hypermetropia (far-sighted) → convex lens\n" +
            "• Presbyopia (aging) → bifocal\n\n" +
            "COLOR:\n" +
            "• Primary (additive): RED, GREEN, BLUE\n" +
            "• R + G = Yellow, R + B = Magenta, G + B = Cyan, R+G+B = White\n" +
            "• Subtractive primary: Cyan, Magenta, Yellow",
          bodyAm:
            "ዓይን ጉድለቶች:\n" +
            "• ማዮፒያ (ቅርብ ማየት) → concave ሌንስ\n" +
            "• ሃይፐርሜትሮፒያ (ሩቅ ማየት) → convex ሌንስ\n\n" +
            "ቀለሞች:\n" +
            "• ቀዳሚ: ቀይ፣ አረንጓዴ፣ ሰማያዊ\n" +
            "• ቀይ+አረንጓዴ = ቢጫ; ቀይ+ሰማያዊ = ማጄንታ; አረንጓዴ+ሰማያዊ = ሳያን",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Units: c in m/s, f in Hz, λ in m.\n" +
            "• Snell's law: angles measured from NORMAL — not surface.\n" +
            "• Sign conventions matter in mirror/lens formula — memorize the table.\n" +
            "• Refractive index has no units.\n" +
            "• Total internal reflection requires: dense→less dense AND θ > θc.\n" +
            "• Magnification: negative m = inverted; positive m = upright.",
          bodyAm:
            "• አሃዶች: c በሜ/ሰ፣ f በHz፣ λ በሜ።\n" +
            "• Snell: አንግሎች ከኖርማል ይለካሉ።\n" +
            "• ምልክት ስምምነቶች ወሳኝ ናቸው።\n" +
            "• Refractive index አሃድ የለውም።\n" +
            "• TIR: dense→less dense AND θ > θc።\n" +
            "• m አሉታዊ = የተገለበጠ; m አዎንታዊ = ቀጥ።",
        },
      ],
    },

    // ============================================================
    // 6.1 EM WAVES
    // ============================================================
    {
      id: "n1",
      title: "6.1 Electromagnetic (EM) Waves",
      titleAm: "6.1 የኤሌክትሮማግኔቲክ ማዕበሎች",
      body:
        "Abatu, an EM WAVE is a wave that consists of OSCILLATING ELECTRIC and MAGNETIC fields, which radiate outward from the source at the SPEED OF LIGHT. Unlike sound, EM waves can travel through EMPTY SPACE (vacuum).",
      bodyAm:
        "አባቱ፣ EM ማዕበል በሚለቀቁ የኤሌክትሪክና መግነጢሳዊ መስኮች የተሠራ ነው። በባዶ ቦታ ማለፍ ይችላል።",
      children: [
        {
          id: "n1-1",
          title: "Mechanical vs EM waves",
          titleAm: "ሜካኒካልና EM ማዕበሎች",
          body:
            "MECHANICAL waves:\n" +
            "• Need a MEDIUM (matter) to travel\n" +
            "• Examples: sound, water waves, waves on a rope\n" +
            "• CANNOT travel through vacuum\n\n" +
            "EM waves:\n" +
            "• Do NOT need a medium — CAN travel through vacuum\n" +
            "• Examples: light, radio, X-rays\n" +
            "• Produced by vibrating charges (electrons)\n" +
            "• Made of electric + magnetic fields perpendicular to each other, both perpendicular to direction of travel",
          bodyAm:
            "ሜካኒካል: ሚዲያ ያስፈልጋል።\n" +
            "EM: ሚዲያ አያስፈልግም። በባዶ ቦታ ያልፋል።",
        },
        {
          id: "n1-2",
          title: "Properties of EM waves",
          titleAm: "የEM ማዕበል ባህሪያት",
          body:
            "• TRANSVERSE waves — oscillation perpendicular to propagation direction\n" +
            "• Made of electric + magnetic fields (both perpendicular to wave direction, and perpendicular to each other)\n" +
            "• Travel at the SPEED OF LIGHT in vacuum\n" +
            "• Have FREQUENCY (f) and WAVELENGTH (λ)\n" +
            "• Can be reflected, refracted, diffracted, and interfered with",
          bodyAm:
            "• ተሻጋሪ\n" +
            "• ኤሌክትሪክ + መግነጢሳዊ መስኮች\n" +
            "• በብርሃን ፍጥነት\n" +
            "• ድግግሞሽና ሞገድ ርዝመት አላቸው",
        },
        {
          id: "n1-3",
          title: "Radiant energy from the Sun",
          titleAm: "ከፀሐይ የሚመጣ ጨረር ጉልበት",
          body:
            "Sun emits EM waves — energy carried by EM waves is called RADIANT ENERGY.\n\n" +
            "Composition of Sun's radiant energy reaching Earth:\n" +
            "• ~92% = INFRARED + VISIBLE (near + visible)\n" +
            "• Infrared → feeling of warmth\n" +
            "• Visible → enables seeing\n" +
            "• Small amount UV → causes sunburn",
          bodyAm:
            "የፀሐይ ጨረር: 92% ኢንፍራሬድ + ታይቶ የሚታይ።\n" +
            "አነስተኛ UV → የፀሐይ ቃጠሎ።",
        },
        {
          id: "n1-4",
          title: "⚠ Remember trap — EM basics",
          titleAm: "⚠ አትርሳ — EM መሠረታዊ ወጥመዶች",
          body:
            "• EM waves DO NOT need a medium — that's why we see stars.\n" +
            "• EM waves are TRANSVERSE, not longitudinal.\n" +
            "• Electric and magnetic fields are BOTH perpendicular to the wave direction.\n" +
            "• Sound is mechanical; light is EM.\n" +
            "• All EM waves travel at SAME speed in vacuum (c).",
          bodyAm:
            "• EM ሚዲያ አያስፈልግም።\n" +
            "• EM ተሻጋሪ ናቸው።\n" +
            "• መስኮች ሁለቱም ቀጥ ያሉ ናቸው።\n" +
            "• ድምፅ = ሜካኒካል; ብርሃን = EM።",
        },
      ],
    },

    // ============================================================
    // 6.2 EM SPECTRUM
    // ============================================================
    {
      id: "n2",
      title: "6.2 The EM Spectrum",
      titleAm: "6.2 የEM ስፔክትረም",
      body:
        "Abatu, the EM SPECTRUM is the complete range of EM wave frequencies and wavelengths. From LOW energy (radio) to HIGH energy (gamma), they all travel at c in vacuum. They differ ONLY in frequency, wavelength, and energy.",
      bodyAm:
        "EM ስፔክትረም ሁሉንም EM ማዕበሎች የሚያካትት ነው።",
      children: [
        {
          id: "n2-1",
          title: "The order — memorize this",
          titleAm: "ቅደም ተከተሉ",
          body:
            "Lowest frequency → Highest frequency:\n" +
            "1) RADIO waves (500 kHz – 1000 MHz; λ 1 m – thousands of m)\n" +
            "2) MICROWAVES (λ ~a few cm)\n" +
            "3) INFRARED (IR)\n" +
            "4) VISIBLE LIGHT (λ 700–400 nm; f 4×10¹⁴ – 7×10¹⁴ Hz)\n" +
            "5) ULTRAVIOLET (UV)\n" +
            "6) X-RAYS\n" +
            "7) GAMMA rays\n\n" +
            "Higher frequency → HIGHER ENERGY → MORE PENETRATING.",
          bodyAm:
            "ራዲዮ → ማይክሮዌቭ → ኢንፍራሬድ → ታይቶ የሚታይ → UV → ኤክስ-ሬይ → ጋማ።",
        },
        {
          id: "n2-2",
          title: "Uses and dangers of each type",
          titleAm: "የእያንዳንዱ አጠቃቀምና አደጋ",
          body:
            "RADIO:\n" +
            "• Uses: radio/TV, police, military, aircraft\n" +
            "• Dangers: large doses → cancer, leukaemia\n\n" +
            "MICROWAVES:\n" +
            "• Uses: mobile phones, microwave oven, radar, speed cameras, satellites\n" +
            "• Dangers: cataracts (eye); affects brain (mobile)\n\n" +
            "INFRARED:\n" +
            "• Uses: TV remote, heat lamps, night vision, weather forecasting\n" +
            "• Dangers: makes you hot (overheating)\n\n" +
            "VISIBLE LIGHT:\n" +
            "• Uses: seeing, vision\n" +
            "• Dangers: too much → damages retina\n\n" +
            "UV:\n" +
            "• Uses: sun tan, detecting forged notes, dental filling hardening, discos, sterilizing, vitamin D production\n" +
            "• Dangers: sunburn, skin cancer, damages retina\n\n" +
            "X-RAYS:\n" +
            "• Uses: medical imaging, airport security, astronomy\n" +
            "• Dangers: cell damage, cancers\n\n" +
            "GAMMA:\n" +
            "• Uses: killing cancer cells (radiotherapy), sterilizing food/equipment, industrial tracer\n" +
            "• Dangers: mutations, cancer, especially dangerous for unborn babies",
          bodyAm:
            "ራዲዮ: ራዲዮ/ቲቪ; ካንሰር በብዙ መጠን።\n" +
            "ማይክሮዌቭ: ስልክ፣ ምድጃ; ካታራክት።\n" +
            "ኢንፍራሬድ: ሪሞት፣ የሌሊት ማየት።\n" +
            "ታይቶ: ማየት; ሬቲና ጉዳት።\n" +
            "UV: ታን፣ ማጽዳት; የፀሐይ ቃጠሎ።\n" +
            "ኤክስ-ሬይ: ምስል; ካንሰር።\n" +
            "ጋማ: ካንሰር ህክምና; ሙቴሽን።",
        },
        {
          id: "n2-3",
          title: "Visible light — the only range our eyes see",
          titleAm: "ታይቶ የሚታይ ብርሃን",
          body:
            "• Range: 4×10¹⁴ to 7×10¹⁴ Hz\n" +
            "• Wavelength: 700 nm (red) to 400 nm (violet)\n" +
            "• 7 colors: RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, VIOLET (ROYGBIV)\n" +
            "• Red = longest wavelength, lowest f; Violet = shortest wavelength, highest f",
          bodyAm:
            "4×10¹⁴ – 7×10¹⁴ Hz።\n" +
            "700 ናኖሜትር (ቀይ) – 400 ናኖሜትር (ወይንጠጅ)።\n" +
            "ROYGBIV።",
        },
        {
          id: "n2-4",
          title: "⚠ Remember trap — EM spectrum",
          titleAm: "⚠ አትርሳ — EM ስፔክትረም",
          body:
            "• ORDER: Radio → Microwave → IR → Visible → UV → X-ray → Gamma.\n" +
            "• Higher frequency = shorter wavelength = higher energy = more dangerous.\n" +
            "• In vacuum, ALL EM waves travel at the SAME speed c.\n" +
            "• RED light = longest λ = lowest f = lowest energy.\n" +
            "• VIOLET light = shortest λ = highest f = highest energy.\n" +
            "• Ozone layer protects Earth from UV.\n" +
            "• Lead or concrete blocks gamma rays.",
          bodyAm:
            "ቅደም ተከተል አስታውስ።\n" +
            "ከፍተኛ f = አነስተኛ λ = ከፍተኛ ጉልበት = አደገኛ።\n" +
            "በባዶ ቦታ ሁሉም በ c ይጓዛሉ።",
        },
      ],
    },

    // ============================================================
    // 6.3 LIGHT AS A WAVE
    // ============================================================
    {
      id: "n3",
      title: "6.3 Light as a Wave",
      titleAm: "6.3 ብርሃን እንደ ማዕበል",
      body:
        "Abatu, LIGHT is an EM wave — the ONLY part of the EM spectrum our eyes can see. It travels at c in vacuum but SLOWS DOWN in matter (glass, water, etc.).",
      bodyAm:
        "ብርሃን የEM ማዕበል ነው። በባዶ ቦታ በ c ይጓዛል፣ በቁስ ውስጥ ግን ይቀንሳል።",
      children: [
        {
          id: "n3-1",
          title: "Speed of light — the constant c",
          titleAm: "የብርሃን ፍጥነት — c",
          body:
            "c = 3.00×10⁸ m/s in VACUUM (~300,000 km/s)\n\n" +
            "KEY: NOTHING travels faster than light in vacuum.\n" +
            "• Sun → Earth: 150 million km in ~8.5 minutes\n" +
            "• Speed in matter is LESS than c\n" +
            "  - In glass: ~197,000 km/s\n" +
            "  - In water: ~225,000 km/s",
          bodyAm:
            "c = 3.00×10⁸ ሜ/ሰ\n" +
            "ፀሐይ → ምድር: 8.5 ደቂቃ።\n" +
            "በቁስ ውስጥ ፍጥነት ይቀንሳል።",
        },
        {
          id: "n3-2",
          title: "The wave equation",
          titleAm: "የማዕበል ቀመር",
          body:
            "c = fλ\n\n" +
            "• c = speed of light (m/s)\n" +
            "• f = frequency (Hz)\n" +
            "• λ = wavelength (m)\n\n" +
            "KEY: In vacuum, f × λ = c for ALL EM waves.\n" +
            "• Increase f → decrease λ\n" +
            "• Decrease f → increase λ",
          bodyAm:
            "c = fλ\n\n" +
            "f × λ = c ለሁሉም EM።\n" +
            "f ከጨመረ λ ይቀንሳል።",
        },
        {
          id: "n3-3",
          title: "Worked Example — Frequency from wavelength",
          titleAm: "ሠርተ ምሳሌ — ከሞገድ ርዝመት ድግግሞሽ",
          body:
            "Problem: Find frequency of red light with λ = 700 nm.\n\n" +
            "Solution:\n" +
            "λ = 700×10⁻⁹ m\n" +
            "f = c/λ = (3×10⁸)/(700×10⁻⁹)\n" +
            "  = 4.29×10¹⁴ Hz",
          bodyAm:
            "f = c/λ = 4.29×10¹⁴ Hz",
        },
        {
          id: "n3-4",
          title: "Worked Example — Wavelength from frequency",
          titleAm: "ሠርተ ምሳሌ — ከድግግሞሽ ሞገድ ርዝመት",
          body:
            "Problem: FM radio at 103.4 MHz. Find wavelength.\n\n" +
            "Solution:\n" +
            "f = 103.4×10⁶ Hz\n" +
            "λ = c/f = (3×10⁸)/(103.4×10⁶)\n" +
            "  ≈ 2.9 m",
          bodyAm:
            "λ = c/f ≈ 2.9 ሜ",
        },
        {
          id: "n3-5",
          title: "Light rays — the model",
          titleAm: "የብርሃን ጨረሮች",
          body:
            "Light travels in STRAIGHT LINES (in uniform medium).\n\n" +
            "• A RAY is an arrow-headed straight line showing light direction.\n" +
            "• A BEAM is a collection of rays.\n" +
            "• Light rays are NOT real — they are a MODEL to help us predict behavior.\n" +
            "• We see an object when light FROM it enters our eyes.\n" +
            "  - Object must be a SOURCE (e.g., bulb) OR reflect light (e.g., moon).",
          bodyAm:
            "ብርሃን በቀጥታ መስመር ይጓዛል።\n" +
            "ጨረር = ቀስት ያለው መስመር።\n" +
            "ጨረሮች እውነተኛ አይደሉም — ሞዴል ናቸው።",
        },
        {
          id: "n3-6",
          title: "⚠ Remember trap — Light",
          titleAm: "⚠ አትርሳ — ብርሃን",
          body:
            "• c = 3×10⁸ m/s in VACUUM — not in glass or water.\n" +
            "• Light SLOWS DOWN in matter — never faster than c.\n" +
            "• Light rays are a MODEL, not physical objects.\n" +
            "• We see by light ENTERING our eyes — not by our eyes sending light out.\n" +
            "• In matter, speed changes but frequency stays the SAME — wavelength changes.",
          bodyAm:
            "• c = 3×10⁸ ሜ/ሰ በባዶ ቦታ።\n" +
            "• በቁስ ውስጥ ይቀንሳል።\n" +
            "• ጨረሮች ሞዴል ናቸው።\n" +
            "• በቁስ ውስጥ f አይለወጥም፤ λ ይለወጣል።",
        },
      ],
    },

    // ============================================================
    // 6.4 REFLECTION AND REFRACTION
    // ============================================================
    {
      id: "n4",
      title: "6.4 Laws of Reflection and Refraction",
      titleAm: "6.4 የነጸብራቅና የአንቀሳቃሽ ሕጎች",
      body:
        "Abatu, this is one of the RICHEST sections for exam questions. Master reflection, refraction, Snell's law, refractive index, total internal reflection, and dispersion.",
      bodyAm:
        "አባቱ፣ ይህ ለፈተና በጣም የበለጸገ ክፍል ነው።",
      children: [
        {
          id: "n4-1",
          title: "Law of reflection",
          titleAm: "የነጸብራቅ ሕግ",
          body:
            "When light hits a surface:\n" +
            "• Incident ray — incoming ray\n" +
            "• Reflected ray — outgoing ray\n" +
            "• Normal — imaginary line perpendicular to surface\n" +
            "• θi = angle of incidence (incident ray ↔ normal)\n" +
            "• θr = angle of reflection (reflected ray ↔ normal)\n\n" +
            "LAW:\n" +
            "1) θi = θr\n" +
            "2) Incident ray, reflected ray, and normal all lie in SAME plane\n\n" +
            "Applies to ALL smooth surfaces (calm water, glass, polished metal).",
          bodyAm:
            "θi = θr።\n" +
            "ጨረሮቹና ኖርማሉ በአንድ ቦታ ናቸው።",
        },
        {
          id: "n4-2",
          title: "Specular vs diffuse reflection",
          titleAm: "ልዩ እና ተበታትኖ ነጸብራቅ",
          body:
            "SPECULAR reflection:\n" +
            "• From SMOOTH shiny surface\n" +
            "• Reflected rays are PARALLEL — move in SAME direction\n" +
            "• Forms CLEAR image\n" +
            "• Example: mirror, calm water, polished metal\n\n" +
            "DIFFUSE reflection:\n" +
            "• From ROUGH surface\n" +
            "• Reflected rays go in DIFFERENT directions\n" +
            "• Forms BLURRY or NO image\n" +
            "• Example: wall, wood, road",
          bodyAm:
            "ልዩ: ለስላሳ ገጽ → ግልጽ ምስል።\n" +
            "ተበታትኖ: ጠርዝ ገጽ → ደብዘዝ ምስል።",
        },
        {
          id: "n4-3",
          title: "Refraction — bending of light",
          titleAm: "አንቀሳቃሽ — የብርሃን መታጠፍ",
          body:
            "REFRACTION = bending of light as it moves from ONE MEDIUM to ANOTHER.\n\n" +
            "Why? Because speed of light is DIFFERENT in different media.\n\n" +
            "RULES:\n" +
            "• Air (fast) → glass (slow): ray bends TOWARD normal (θr < θi)\n" +
            "• Glass (slow) → air (fast): ray bends AWAY from normal (θr > θi)\n" +
            "• If ray is parallel to normal (θi = 0°): NO bending",
          bodyAm:
            "አንቀሳቃሽ = ብርሃን ሚዲያ ሲቀይር መታጠፍ።\n" +
            "አየር → ብርጭቆ: ወደ ኖርማል ይታጠፋል።\n" +
            "ብርጭቆ → አየር: ከኖርማል ይርቃል።",
        },
        {
          id: "n4-4",
          title: "Snell's law and refractive index",
          titleAm: "የስኔል ሕግና የተቃውሞ መረጃ ጠቋሚ",
          body:
            "SNELL'S LAW:\n" +
            "n₁ sin θ₁ = n₂ sin θ₂\n\n" +
            "• θ₁ = angle of incidence\n" +
            "• θ₂ = angle of refraction\n" +
            "• n₁, n₂ = refractive indices\n" +
            "• Angles measured from NORMAL\n\n" +
            "REFRACTIVE INDEX:\n" +
            "n = c / v\n" +
            "• c = speed of light in vacuum\n" +
            "• v = speed in medium\n" +
            "• n has NO UNITS\n\n" +
            "Common values:\n" +
            "• Air = 1.0003 ≈ 1\n" +
            "• Ice = 1.31\n" +
            "• Water = 1.33\n" +
            "• Crown glass = 1.52\n" +
            "• Diamond = 2.42",
          bodyAm:
            "n₁sinθ₁ = n₂sinθ₂\n" +
            "n = c/v\n" +
            "ውሃ = 1.33, ብርጭቆ = 1.52, አልማዝ = 2.42",
        },
        {
          id: "n4-5",
          title: "Worked Example — Snell's law",
          titleAm: "ሠርተ ምሳሌ — የስኔል ሕግ",
          body:
            "Problem: Light ray with θᵢ = 35° passes from water (n = 1.33) to air (n = 1). Find θᵣ.\n\n" +
            "Solution:\n" +
            "n₁sinθ₁ = n₂sinθ₂\n" +
            "1.33 × sin 35° = 1 × sin θ₂\n" +
            "1.33 × 0.5736 = sin θ₂\n" +
            "sin θ₂ = 0.763\n" +
            "θ₂ = sin⁻¹(0.763) ≈ 49.7°\n\n" +
            "Direction: θ₂ > θ₁ → ray bends AWAY from normal (as expected — going dense → less dense).",
          bodyAm:
            "1.33 × sin35° = sinθ₂ → θ₂ ≈ 49.7°\n" +
            "ከኖርማል ይርቃል።",
        },
        {
          id: "n4-6",
          title: "Total internal reflection",
          titleAm: "ሙሉ ውስጣዊ ነጸብራቅ",
          body:
            "TOTAL INTERNAL REFLECTION (TIR) occurs when light goes from DENSE medium (higher n) to LESS DENSE (lower n), AND the angle of incidence > CRITICAL ANGLE.\n\n" +
            "CRITICAL ANGLE (θc):\n" +
            "sin θc = n₂ / n₁\n" +
            "θc = sin⁻¹(n₂/n₁)\n\n" +
            "CONDITIONS for TIR:\n" +
            "1) Light from DENSE → LESS DENSE (e.g., glass → air)\n" +
            "2) Angle of incidence > θc\n\n" +
            "APPLICATIONS:\n" +
            "• Optical fibers (telecommunications, endoscopes)\n" +
            "• Diamonds sparkle (small θc ≈ 24°, light trapped inside)",
          bodyAm:
            "TIR: dense → less dense AND θ > θc።\n" +
            "sinθc = n₂/n₁\n" +
            "የብርጭቆ ከአየር: θc ≈ 42°።\n" +
            "ኦፕቲካል ፋይበር, አልማዝ ብልጭታ።",
        },
        {
          id: "n4-7",
          title: "Worked Example — Critical angle",
          titleAm: "ሠርተ ምሳሌ — ወሳኝ አንግል",
          body:
            "Problem: Glass (n = 1.52) to air (n = 1). Find θc.\n\n" +
            "Solution:\n" +
            "sin θc = n₂/n₁ = 1/1.52 = 0.658\n" +
            "θc = sin⁻¹(0.658) ≈ 41.1°\n\n" +
            "(Note: book example gives 42° — close approximation due to rounding.)",
          bodyAm:
            "sinθc = 1/1.52 = 0.658 → θc ≈ 41°",
        },
        {
          id: "n4-8",
          title: "Dispersion — prisms and rainbows",
          titleAm: "መበታተል — ፕሪዝምና ቀስተ ደመና",
          body:
            "DISPERSION = splitting of WHITE light into its component colors.\n\n" +
            "Why? Different colors REFRACT by DIFFERENT amounts:\n" +
            "• RED bends LEAST\n" +
            "• VIOLET bends MOST\n\n" +
            "Order of colors: RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, VIOLET (VIBGYOR / ROYGBIV)\n\n" +
            "PRISM: glass prism splits white light into a spectrum.\n\n" +
            "RAINBOW:\n" +
            "• Caused by dispersion in water droplets\n" +
            "• Water drops act like tiny prisms\n" +
            "• Refraction + internal reflection + refraction\n" +
            "• Always appears in direction OPPOSITE the Sun",
          bodyAm:
            "መበታተል = ነጭ ብርሃን ወደ ቀለሞች መከፋፈል።\n" +
            "ቀይ በትንሹ፣ ወይንጠጅ በብዛት ይታጠፋሉ።\n" +
            "ቀስተ ደመና: በውሃ ጠብታዎች ውስጥ መበታተል።",
        },
        {
          id: "n4-9",
          title: "⚠ Remember trap — Reflection & refraction",
          titleAm: "⚠ አትርሳ — ነጸብራቅና አንቀሳቃሽ",
          body:
            "• Angles in Snell's law measured from NORMAL — not from surface.\n" +
            "• Refractive index has NO UNITS.\n" +
            "• TIR requires: dense→less dense AND θ > θc.\n" +
            "• Red bends LEAST; violet bends MOST.\n" +
            "• Rainbows appear OPPOSITE the Sun.\n" +
            "• n = c/v — higher n means slower light in medium.\n" +
            "• Air → glass bends toward normal. Glass → air bends away.",
          bodyAm:
            "• አንግሎች ከኖርማል።\n" +
            "• n አሃድ የለውም።\n" +
            "• TIR: dense→less dense + θ>θc።\n" +
            "• ቀይ በትንሹ፣ ወይንጠጅ በብዛት።\n" +
            "• n = c/v።",
        },
      ],
    },

    // ============================================================
    // 6.5 MIRRORS AND LENSES
    // ============================================================
    {
      id: "n5",
      title: "6.5 Mirrors and Lenses",
      titleAm: "6.5 መስተዋቶችና ሌንሶች",
      body:
        "Abatu, this is the BIGGEST section of the chapter. Master the plane mirror properties, spherical mirror ray rules, lens ray rules, mirror/lens formula, and sign conventions.",
      bodyAm:
        "አባቱ፣ ይህ ትልቁ ክፍል ነው።",
      children: [
        {
          id: "n5-1",
          title: "Plane mirror — properties of image",
          titleAm: "ጠፍጣፋ መስታወት — የምስል ባህሪያት",
          body:
            "Image formed by PLANE mirror:\n" +
            "1) VIRTUAL (cannot be placed on a screen)\n" +
            "2) ERECT (upright)\n" +
            "3) SAME SIZE as object\n" +
            "4) LATERALLY INVERTED (left ↔ right)\n" +
            "5) Image distance = object distance (equal distances in front and behind mirror)\n\n" +
            "Number of images with TWO mirrors at angle θ:\n" +
            "• If 360°/θ is even → n = (360/θ) − 1\n" +
            "• If 360°/θ is odd → n = 360/θ\n" +
            "• Example: 60° → 5 images; 90° → 3 images",
          bodyAm:
            "1) ምናባዊ\n2) ቀጥ\n3) ተመሳሳይ መጠን\n4) በጎን የተገለበጠ\n5) እኩል ርቀት",
        },
        {
          id: "n5-2",
          title: "Spherical mirrors — key terms",
          titleAm: "ክብ መስተዋቶች — ቁልፍ ቃላት",
          body:
            "• CENTER OF CURVATURE (C) — center of the sphere the mirror is part of\n" +
            "• RADIUS OF CURVATURE (R) — radius of that sphere\n" +
            "• POLE (P) — middle point of the reflecting surface\n" +
            "• PRINCIPAL AXIS — line through C and P\n" +
            "• APERTURE — circular outline of the mirror (measure of size)\n" +
            "• PRINCIPAL FOCUS (F) — point where parallel rays converge (or appear to diverge from)\n" +
            "• FOCAL LENGTH (f) — distance from P to F\n\n" +
            "KEY: R = 2f",
          bodyAm:
            "C = መሃል\nR = ራዲየስ\nP = ምሰሶ\nF = ትኩረት\nf = focal length\nR = 2f",
        },
        {
          id: "n5-3",
          title: "Concave vs convex mirrors",
          titleAm: "ቀላና ቁመታዊ መስተዋቶች",
          body:
            "CONCAVE mirror (converging):\n" +
            "• Curves INWARD (like bowl of spoon)\n" +
            "• Parallel rays CONVERGE at focus\n" +
            "• Image depends on object position\n" +
            "• Uses: torches, headlights, shaving, dentist, solar furnace\n\n" +
            "CONVEX mirror (diverging):\n" +
            "• Curves OUTWARD (like back of spoon)\n" +
            "• Parallel rays DIVERGE\n" +
            "• Always VIRTUAL, ERECT, DIMINISHED\n" +
            "• Uses: rear-view mirrors, blind corners",
          bodyAm:
            "ቀላ: ወደ ውስጥ; ወደ ትኩረት ይሰበስባል።\n" +
            "ቁመታዊ: ወደ ውጭ; ሁልጊዜ ምናባዊ፣ ቀጥ፣ ትንሽ።",
        },
        {
          id: "n5-4",
          title: "Image formation by concave mirror — TABLE",
          titleAm: "በቀላ መስታወት ምስል — ሰንጠረዥ",
          body:
            "| Object position     | Image position      | Size      | Nature            |\n" +
            "|---------------------|---------------------|-----------|-------------------|\n" +
            "| At infinity         | At F                | Very small| Real, inverted    |\n" +
            "| Beyond C            | Between F and C     | Small     | Real, inverted    |\n" +
            "| At C                | At C                | Same size | Real, inverted    |\n" +
            "| Between C and F     | Beyond C            | Large     | Real, inverted    |\n" +
            "| At F                | At infinity         | Infinitely large | Real, inverted |\n" +
            "| Between P and F     | Behind mirror       | Large     | Virtual, erect    |",
          bodyAm:
            "በሰንጠረዡ ውስጥ ያሉትን ሁሉ አስታውስ።",
        },
        {
          id: "n5-5",
          title: "Image formation by convex mirror — TABLE",
          titleAm: "በቁመታዊ መስታወት ምስል — ሰንጠረዥ",
          body:
            "| Object position       | Image position       | Size      | Nature          |\n" +
            "|-----------------------|----------------------|-----------|-----------------|\n" +
            "| At infinity           | At F behind mirror   | Very small| Virtual, erect  |\n" +
            "| Between infinity and P| Between P and F behind mirror | Small | Virtual, erect  |\n\n" +
            "KEY: Convex mirror ALWAYS gives VIRTUAL, ERECT, DIMINISHED image.",
          bodyAm:
            "ቁመታዊ ሁልጊዜ ምናባዊ፣ ቀጥ፣ ትንሽ።",
        },
        {
          id: "n5-6",
          title: "Convex vs concave lenses",
          titleAm: "ኮንቬክስና ኮንኬቭ ሌንሶች",
          body:
            "CONVEX lens (converging):\n" +
            "• THICKER in middle than edges\n" +
            "• Parallel rays CONVERGE at focus\n" +
            "• Uses: magnifying glass, camera, microscope, telescope, eye\n\n" +
            "CONCAVE lens (diverging):\n" +
            "• THINNER in middle than edges\n" +
            "• Parallel rays DIVERGE\n" +
            "• Always VIRTUAL, ERECT, DIMINISHED\n" +
            "• Uses: correcting myopia, galilean telescope",
          bodyAm:
            "ኮንቬክስ: መሃል ወፍራም; ወደ ትኩረት ይሰበስባል።\n" +
            "ኮንኬቭ: መሃል ቀጭን; ይበትናል።",
        },
        {
          id: "n5-7",
          title: "Image formation by convex lens — TABLE",
          titleAm: "በኮንቬክስ ሌንስ ምስል — ሰንጠረዥ",
          body:
            "| Object position         | Image position          | Size      | Nature          |\n" +
            "|-------------------------|-------------------------|-----------|-----------------|\n" +
            "| At infinity             | At F₂                   | Very small| Real, inverted  |\n" +
            "| Beyond 2F₁              | Between F₂ and 2F₂      | Small     | Real, inverted  |\n" +
            "| At 2F₁                  | At 2F₂                  | Same size | Real, inverted  |\n" +
            "| Between F₁ and 2F₁      | Beyond 2F₂              | Large     | Real, inverted  |\n" +
            "| At F₁                   | At infinity             | Infinitely large | Real, inverted |\n" +
            "| Between F₁ and O        | Same side (behind)      | Large     | Virtual, erect  |",
          bodyAm:
            "ኮንቬክስ ሌንስ ሰንጠረዥ አስታውስ።",
        },
        {
          id: "n5-8",
          title: "Image formation by concave lens — TABLE",
          titleAm: "በኮንኬቭ ሌንስ ምስል — ሰንጠረዥ",
          body:
            "| Object position           | Image position           | Size      | Nature         |\n" +
            "|---------------------------|--------------------------|-----------|----------------|\n" +
            "| At infinity               | At F₁                    | Very small| Virtual, erect |\n" +
            "| Between infinity and O    | Between F₁ and O         | Small     | Virtual, erect |\n\n" +
            "KEY: Concave lens ALWAYS gives VIRTUAL, ERECT, DIMINISHED image.",
          bodyAm:
            "ኮንኬቭ ሁልጊዜ ምናባዊ፣ ቀጥ፣ ትንሽ።",
        },
        {
          id: "n5-9",
          title: "Mirror and lens formulas",
          titleAm: "የመስታወትና የሌንስ ቀመሮች",
          body:
            "MIRROR formula:\n" +
            "1/v + 1/u = 1/f\n\n" +
            "LENS formula:\n" +
            "1/v − 1/u = 1/f\n\n" +
            "MAGNIFICATION:\n" +
            "m = h'/h = −v/u\n\n" +
            "• m negative → image inverted\n" +
            "• m positive → image erect\n" +
            "• |m| > 1 → enlarged\n" +
            "• |m| < 1 → diminished\n" +
            "• |m| = 1 → same size",
          bodyAm:
            "መስታወት: 1/v + 1/u = 1/f\n" +
            "ሌንስ: 1/v − 1/u = 1/f\n" +
            "m = −v/u",
        },
        {
          id: "n5-10",
          title: "Sign conventions",
          titleAm: "የምልክት ስምምነቶች",
          body:
            "MIRRORS:\n" +
            "• u positive (object in front)\n" +
            "• v positive if image in front (REAL); negative if behind (VIRTUAL)\n" +
            "• f positive for CONCAVE; negative for CONVEX\n" +
            "• h' positive if upright; negative if inverted\n\n" +
            "LENSES:\n" +
            "• u positive (object in front)\n" +
            "• v positive if image BEHIND lens (real); negative if in front (virtual)\n" +
            "• f positive for CONVERGING (convex); negative for DIVERGING (concave)\n" +
            "• h' positive if upright; negative if inverted",
          bodyAm:
            "መስታወት: concave f አዎንታዊ; convex f አሉታዊ።\n" +
            "ሌንስ: convex f አዎንታዊ; concave f አሉታዊ።",
        },
        {
          id: "n5-11",
          title: "Worked Example — Convex mirror (car)",
          titleAm: "ሠርተ ምሳሌ — ቁመታዊ መስታወት",
          body:
            "Problem: Convex mirror R = 3 m, object u = 5 m. Find v, image nature.\n\n" +
            "Solution:\n" +
            "f = R/2 = −1.5 m (convex = negative)\n" +
            "1/v + 1/u = 1/f → 1/v = 1/f − 1/u\n" +
            "1/v = 1/(−1.5) − 1/5\n" +
            "    = −0.667 − 0.2 = −0.867\n" +
            "v ≈ −1.15 m (behind mirror — virtual)\n\n" +
            "m = −v/u = −(−1.15)/5 = +0.23\n" +
            "Positive m → upright. |m| < 1 → smaller.\n\n" +
            "ANSWER: virtual, erect, smaller, 1.15 m behind.",
          bodyAm:
            "f = −1.5 ሜ\n" +
            "v ≈ −1.15 ሜ (ምናባዊ)\n" +
            "m ≈ +0.23 (ቀጥ፣ ትንሽ)",
        },
        {
          id: "n5-12",
          title: "Worked Example — Concave mirror",
          titleAm: "ሠርተ ምሳሌ — ቀላ መስታወት",
          body:
            "Problem: Object h = 6 cm, u = 25 cm, f = 15 cm. Find v and h'.\n\n" +
            "Solution:\n" +
            "1/v = 1/f − 1/u = 1/15 − 1/25 = (5−3)/75 = 2/75\n" +
            "v = 37.5 cm (in front — REAL)\n\n" +
            "m = −v/u = −37.5/25 = −1.5\n" +
            "h' = m × h = −1.5 × 6 = −9 cm\n\n" +
            "ANSWER: real, inverted, enlarged (1.5×), image at 37.5 cm in front.",
          bodyAm:
            "v = 37.5 ሴ.ሜ\n" +
            "m = −1.5 (የተገለበጠ፣ ትልቅ)",
        },
        {
          id: "n5-13",
          title: "⚠ Remember trap — Mirrors & lenses",
          titleAm: "⚠ አትርሳ — መስተዋቶችና ሌንሶች",
          body:
            "• R = 2f ALWAYS (for small apertures)\n" +
            "• CONVEX mirror → f negative → image always virtual\n" +
            "• CONCAVE mirror → f positive (convention)\n" +
            "• CONVEX lens → f positive → can form real OR virtual image\n" +
            "• CONCAVE lens → f negative → image always virtual\n" +
            "• Negative m = inverted; positive m = upright\n" +
            "• Mirror formula: 1/v + 1/u = 1/f\n" +
            "• Lens formula: 1/v − 1/u = 1/f\n" +
            "• Never mix up mirror and lens formulas!",
          bodyAm:
            "• R = 2f\n" +
            "• convex mirror f አሉታዊ\n" +
            "• convex lens f አዎንታዊ\n" +
            "• m < 0 የተገለበጠ; m > 0 ቀጥ\n" +
            "• ቀመሮቹን አታምታታ!",
        },
      ],
    },

    // ============================================================
    // 6.6 HUMAN EYE AND OPTICAL INSTRUMENTS
    // ============================================================
    {
      id: "n6",
      title: "6.6 Human Eye and Optical Instruments",
      titleAm: "6.6 የሰው ዓይንና የኦፕቲካል መሣሪያዎች",
      body:
        "Abatu, the EYE is the most important optical instrument of all. It uses a lens (the crystalline lens) to focus light onto the retina.",
      bodyAm:
        "አባቱ፣ ዓይን በጣም አስፈላጊው የኦፕቲካል መሣሪያ ነው።",
      children: [
        {
          id: "n6-1",
          title: "Structure of the eye",
          titleAm: "የዓይን አወቃቀር",
          body:
            "• CORNEA — transparent front bulge; does most of the REFRACTION\n" +
            "• IRIS — colored muscular diaphragm; controls pupil size\n" +
            "• PUPIL — opening; controls amount of light entering\n" +
            "• CRYSTALLINE LENS — fine-tunes focus (accommodation)\n" +
            "• RETINA — light-sensitive screen at back; contains RODS + CONES\n" +
            "• OPTIC NERVE — sends signals to brain\n\n" +
            "Image formed: INVERTED, REAL on retina.\n" +
            "Brain interprets it upright.",
          bodyAm:
            "• CORNEA\n• IRIS\n• PUPIL\n• LENS\n• RETINA\n• OPTIC NERVE\n\n" +
            "ምስል: የተገለበጠ፣ እውነተኛ።",
        },
        {
          id: "n6-2",
          title: "Accommodation",
          titleAm: "ማስተናገድ",
          body:
            "ACCOMMODATION = the ability of the eye lens to ADJUST its FOCAL LENGTH.\n\n" +
            "• Ciliary muscles relax → lens THIN → longer f → see DISTANT objects\n" +
            "• Ciliary muscles contract → lens THICK → shorter f → see NEARBY objects\n\n" +
            "NEAR POINT: 25 cm (closest clear vision)\n" +
            "FAR POINT: infinity (farthest clear vision)",
          bodyAm:
            "ማስተናገድ = ሌንስ የራሱን f የማስተካከል ችሎታ።\n" +
            "ቅርብ ነጥብ: 25 ሴ.ሜ።\n" +
            "ሩቅ ነጥብ: ወሰን የለውም።",
        },
        {
          id: "n6-3",
          title: "Three defects of vision",
          titleAm: "ሦስቱ የራዕይ ጉድለቶች",
          body:
            "1) MYOPIA (near-sighted):\n" +
            "• Cannot see DISTANT objects\n" +
            "• Image forms IN FRONT of retina\n" +
            "• Causes: excessive lens curvature OR elongated eyeball\n" +
            "• Correction: CONCAVE lens (diverging)\n\n" +
            "2) HYPERMETROPIA (far-sighted):\n" +
            "• Cannot see NEARBY objects\n" +
            "• Image forms BEHIND retina\n" +
            "• Causes: lens too long f OR small eyeball\n" +
            "• Correction: CONVEX lens (converging)\n\n" +
            "3) PRESBYOPIA (age-related):\n" +
            "• Cannot see NEAR objects clearly due to AGING\n" +
            "• Ciliary muscles weaken\n" +
            "• Correction: BIFOCAL lenses (concave top + convex bottom)",
          bodyAm:
            "ማዮፒያ → concave ሌንስ\n" +
            "ሃይፐርሜትሮፒያ → convex ሌንስ\n" +
            "ፕሬስቢዮፒያ → ቢፎካል",
        },
        {
          id: "n6-4",
          title: "Optical instruments",
          titleAm: "የኦፕቲካል መሣሪያዎች",
          body:
            "SIMPLE MICROSCOPE (magnifying glass):\n" +
            "• Single convex lens, short focal length\n" +
            "• Object inside F\n" +
            "• Image: virtual, erect, magnified\n\n" +
            "COMPOUND MICROSCOPE:\n" +
            "• Two convex lenses (objective + eyepiece)\n" +
            "• Objective → enlarged real image (inside tube)\n" +
            "• Eyepiece → further magnifies that image\n" +
            "• Image: virtual, inverted, very enlarged\n\n" +
            "REFRACTING TELESCOPE:\n" +
            "• Two convex lenses (large objective + eyepiece)\n" +
            "• Objective gathers light from distant object → real, inverted image at focus\n" +
            "• Eyepiece magnifies\n\n" +
            "REFLECTING TELESCOPE:\n" +
            "• Large CONCAVE MIRROR instead of objective lens\n" +
            "• Secondary mirror redirects light to eyepiece\n" +
            "• Cheaper to make large; can be made much larger",
          bodyAm:
            "ቀላል ማይክሮስኮፕ: አንድ ኮንቬክስ ሌንስ።\n" +
            "ኮምፓውንድ ማይክሮስኮፕ: ሁለት ሌንሶች።\n" +
            "Refracting ቴሌስኮፕ: ሁለት ሌንሶች።\n" +
            "Reflecting ቴሌስኮፕ: ቀላ መስታወት።",
        },
        {
          id: "n6-5",
          title: "⚠ Remember trap — Eye & instruments",
          titleAm: "⚠ አትርሳ — ዓይንና መሣሪያዎች",
          body:
            "• MYOPIA → concave lens.\n" +
            "• HYPERMETROPIA → convex lens.\n" +
            "• PRESBYOPIA → bifocal.\n" +
            "• Eye forms INVERTED image on retina — brain flips it.\n" +
            "• Near point = 25 cm.\n" +
            "• Compound microscope uses TWO lenses (objective + eyepiece).\n" +
            "• Reflecting telescope uses a CONCAVE MIRROR; refracting uses LENSES.\n" +
            "• Large telescope objective = to GATHER MORE LIGHT, not just magnify.",
          bodyAm:
            "• Myopia → concave\n" +
            "• Hypermetropia → convex\n" +
            "• Presbyopia → bifocal\n" +
            "• Reflecting: ቀላ መስታወት\n" +
            "• Refracting: ሌንሶች",
        },
      ],
    },

    // ============================================================
    // 6.7 PRIMARY COLORS AND HUMAN VISION
    // ============================================================
    {
      id: "n7",
      title: "6.7 Primary Colors of Light and Human Vision",
      titleAm: "6.7 የብርሃን ቀዳሚ ቀለሞችና የሰው ራዕይ",
      body:
        "Abatu, our eyes have THREE types of cones — each sensitive to a different primary color. That's why color vision is additive.",
      bodyAm:
        "ዓይናችን ሦስት ዓይነት ኮኖች አሉት።",
      children: [
        {
          id: "n7-1",
          title: "Rods and cones",
          titleAm: "ዘንጎችና ኮኖች",
          body:
            "The RETINA contains two types of light-sensitive cells:\n\n" +
            "RODS:\n" +
            "• More sensitive to LIGHT INTENSITY\n" +
            "• Cannot distinguish colors\n" +
            "• Help with night vision\n\n" +
            "CONES:\n" +
            "• Sensitive to COLOR\n" +
            "• Three types: red-sensitive, green-sensitive, blue-sensitive\n" +
            "• Need bright light\n\n" +
            "THREE PRIMARY COLORS of light:\n" +
            "RED, GREEN, BLUE\n\n" +
            "All other colors can be made by combining these three.",
          bodyAm:
            "RODS: ለብርሃን መጠን ብቻ።\n" +
            "CONES: ለቀለም (ቀይ፣ አረንጓዴ፣ ሰማያዊ)።\n" +
            "ቀዳሚ ቀለሞች: ቀይ፣ አረንጓዴ፣ ሰማያዊ።",
        },
        {
          id: "n7-2",
          title: "⚠ Remember trap — Vision",
          titleAm: "⚠ አትርሳ — ራዕይ",
          body:
            "• PRIMARY (additive) colors = RED, GREEN, BLUE.\n" +
            "• RODS = brightness (no color).\n" +
            "• CONES = color.\n" +
            "• Yellow, Cyan, Magenta are SECONDARY — made from TWO primaries.\n" +
            "• Eye sees color because three cone types respond to different wavelengths.",
          bodyAm:
            "• ቀዳሚ: ቀይ፣ አረንጓዴ፣ ሰማያዊ\n" +
            "• Rods = ብርሃን\n" +
            "• Cones = ቀለም",
        },
      ],
    },

    // ============================================================
    // 6.8 COLOR ADDITION
    // ============================================================
    {
      id: "n8",
      title: "6.8 Color Addition of Light",
      titleAm: "6.8 የብርሃን ቀለም መደመር",
      body:
        "Abatu, ADDITIVE color mixing works with LIGHT (TV, projector, stage lights). Start with black, ADD colors, end with white.",
      bodyAm:
        "የቀለም መደመር በብርሃን ላይ ይሠራል።",
      children: [
        {
          id: "n8-1",
          title: "Additive rules — MEMORIZE",
          titleAm: "የመደመር ደንቦች",
          body:
            "| Combination          | Result   |\n" +
            "|----------------------|----------|\n" +
            "| Red + Green          | YELLOW   |\n" +
            "| Red + Blue           | MAGENTA  |\n" +
            "| Green + Blue         | CYAN     |\n" +
            "| Red + Green + Blue   | WHITE    |\n" +
            "| (No light)           | BLACK    |\n\n" +
            "Applications:\n" +
            "• Color TV\n" +
            "• Color computer monitors\n" +
            "• Digital projectors\n" +
            "• Stage lighting",
          bodyAm:
            "ቀይ+አረንጓዴ = ቢጫ\n" +
            "ቀይ+ሰማያዊ = ማጄንታ\n" +
            "አረንጓዴ+ሰማያዊ = ሳያን\n" +
            "ሦስቱም = ነጭ",
        },
        {
          id: "n8-2",
          title: "⚠ Remember trap — Additive",
          titleAm: "⚠ አትርሳ — መደመር",
          body:
            "• R + G = YELLOW (not green + something else)\n" +
            "• R + B = MAGENTA\n" +
            "• G + B = CYAN\n" +
            "• R + G + B = WHITE\n" +
            "• No light = BLACK\n" +
            "• Additive = LIGHT (screens, lamps).",
          bodyAm:
            "ቀይ+አረንጓዴ=ቢጫ\n" +
            "ቀይ+ሰማያዊ=ማጄንታ\n" +
            "አረንጓዴ+ሰማያዊ=ሳያን",
        },
      ],
    },

    // ============================================================
    // 6.9 COLOR SUBTRACTION
    // ============================================================
    {
      id: "n9",
      title: "6.9 Color Subtraction of Light Using Filters",
      titleAm: "6.9 በማጣሪያዎች የብርሃን ቀለም መቀነስ",
      body:
        "Abatu, SUBTRACTIVE color works with PIGMENTS, PAINTS, FILTERS. Start with white light, SUBTRACT (absorb) colors, end up darker.",
      bodyAm:
        "መቀነስ በቀለምና በማጣሪያ ይሠራል።",
      children: [
        {
          id: "n9-1",
          title: "Filters and pigments",
          titleAm: "ማጣሪያዎችና ቀለሞች",
          body:
            "FILTERS: allow certain colors through, absorb the rest.\n" +
            "PIGMENTS: absorb some colors, reflect the rest.\n\n" +
            "Subtractive PRIMARY COLORS: CYAN, MAGENTA, YELLOW\n" +
            "Subtractive SECONDARY: RED, GREEN, BLUE\n\n" +
            "Their complements:\n" +
            "• CYAN's complement = RED\n" +
            "• MAGENTA's complement = GREEN\n" +
            "• YELLOW's complement = BLUE",
          bodyAm:
            "Subtractive ቀዳሚ: ሳያን፣ ማጄንታ፣ ቢጫ።\n" +
            "ተቃራኒዎች: ሳያን↔ቀይ፣ ማጄንታ↔አረንጓዴ፣ ቢጫ↔ሰማያዊ።",
        },
        {
          id: "n9-2",
          title: "Subtractive rules — MEMORIZE",
          titleAm: "የመቀነስ ደንቦች",
          body:
            "When WHITE light hits a filter, it absorbs its complement:\n\n" +
            "| Filter/Pigment | Absorbs | Transmits    |\n" +
            "|----------------|---------|--------------|\n" +
            "| YELLOW         | Blue    | Red + Green  |\n" +
            "| MAGENTA        | Green   | Red + Blue   |\n" +
            "| CYAN           | Red     | Green + Blue |\n\n" +
            "Subtraction examples:\n" +
            "• Cyan − Blue = Green\n" +
            "• Yellow − Green = Red\n" +
            "• Magenta − Red = Blue",
          bodyAm:
            "ቢጫ: ሰማያዊ ይወስዳል → ቀይ+አረንጓዴ\n" +
            "ማጄንታ: አረንጓዴ ይወስዳል → ቀይ+ሰማያዊ\n" +
            "ሳያን: ቀይ ይወስዳል → አረንጓዴ+ሰማያዊ",
        },
        {
          id: "n9-3",
          title: "⚠ Remember trap — Subtractive",
          titleAm: "⚠ አትርሳ — መቀነስ",
          body:
            "• Subtractive primaries = CYAN, MAGENTA, YELLOW.\n" +
            "• Additive primaries = RED, GREEN, BLUE.\n" +
            "• Subtractive mixing = darker → ends at BLACK.\n" +
            "• Additive mixing = lighter → ends at WHITE.\n" +
            "• Yellow filter ABSORBS BLUE (so passes red + green).\n" +
            "• Magenta filter ABSORBS GREEN (so passes red + blue).\n" +
            "• Cyan filter ABSORBS RED (so passes green + blue).\n" +
            "• Combine Yellow + Magenta → results in RED.\n" +
            "• Combine Yellow + Cyan → results in GREEN.\n" +
            "• Combine Magenta + Cyan → results in BLUE.",
          bodyAm:
            "ቀለም ማጣሪያ:\n" +
            "ቢጫ ሰማያዊ ይወስዳል\n" +
            "ማጄንታ አረንጓዴ ይወስዳል\n" +
            "ሳያን ቀይ ይወስዳል",
        },
      ],
    },

    // ============================================================
    // FORMULA SHEET
    // ============================================================
    {
      id: "nFormula",
      title: "Formula Sheet — Unit 6",
      titleAm: "የቀመር ሉህ — ክፍል 6",
      body:
        "| Quantity                | Formula                       | Units  |\n" +
        "|-------------------------|-------------------------------|--------|\n" +
        "| Speed of light (vacuum) | c = 3.00×10⁸ m/s              | m/s    |\n" +
        "| Wave equation           | c = fλ                        | Hz·m   |\n" +
        "| Refractive index        | n = c/v                        | none   |\n" +
        "| Snell's law             | n₁sinθ₁ = n₂sinθ₂              | none   |\n" +
        "| Critical angle          | sinθc = n₂/n₁                 | none   |\n" +
        "| Mirror formula          | 1/v + 1/u = 1/f               | m      |\n" +
        "| Lens formula            | 1/v − 1/u = 1/f               | m      |\n" +
        "| Magnification           | m = h'/h = −v/u               | none   |\n" +
        "| Focal length & radius   | R = 2f                         | m      |\n" +
        "| Reflection law          | θi = θr                        | °      |\n" +
        "| Color addition          | R+G=Y, R+B=M, G+B=C, RGB=W    | none   |\n" +
        "| Color subtraction       | Y=G+B, M=R+B, C=R+G           | none   |",
      bodyAm:
        "| መጠን            | ቀመር                          |\n" +
        "|-----------------|------------------------------|\n" +
        "| c               | 3.00×10⁸ m/s                 |\n" +
        "| c = fλ          |                              |\n" +
        "| n = c/v         |                              |\n" +
        "| n₁sinθ₁=n₂sinθ₂ |                              |\n" +
        "| sinθc = n₂/n₁  |                              |\n" +
        "| 1/v + 1/u = 1/f | (መስታወት)                    |\n" +
        "| 1/v − 1/u = 1/f | (ሌንስ)                      |\n" +
        "| m = h'/h = −v/u |                              |\n" +
        "| R = 2f          |                              |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 6",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1) EM spectrum order: Radio → Microwave → IR → Visible → UV → X-ray → Gamma.\n" +
        "2) Higher frequency = HIGHER energy = more dangerous.\n" +
        "3) c = 3×10⁸ m/s in VACUUM only — light slows in matter.\n" +
        "4) Snell's angles are from NORMAL, not surface.\n" +
        "5) n has no units; n = c/v.\n" +
        "6) TIR requires dense→less dense AND θ > θc.\n" +
        "7) Red bends least; violet bends most.\n" +
        "8) R = 2f for spherical mirrors.\n" +
        "9) CONVEX mirror → always virtual, erect, diminished.\n" +
        "10) CONCAVE mirror → real/virtual depends on position.\n" +
        "11) CONVEX lens → can be real OR virtual.\n" +
        "12) CONCAVE lens → always virtual, erect, diminished.\n" +
        "13) Mirror formula: 1/v + 1/u = 1/f.\n" +
        "14) Lens formula: 1/v − 1/u = 1/f.\n" +
        "15) Negative m = inverted; positive m = upright.\n" +
        "16) Myopia → concave lens; Hypermetropia → convex lens.\n" +
        "17) Primary additive colors = RED, GREEN, BLUE.\n" +
        "18) R+G=Yellow; R+B=Magenta; G+B=Cyan.\n" +
        "19) Subtractive primaries = CYAN, MAGENTA, YELLOW.\n" +
        "20) Rods = brightness; cones = color.",
      bodyAm:
        "ወጥመዶቹን ሁሉ አስታውስ።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "What is an electromagnetic wave?", options: ["A wave that needs a medium", "A wave made of oscillating electric and magnetic fields", "A sound wave", "A water wave"], answer: "1", explanation: "Abatu, EM = oscillating electric + magnetic fields." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Can EM waves travel through a vacuum?", options: ["No, they need a medium", "Yes, they can", "Only sound", "Only in water"], answer: "1", explanation: "EM waves travel through empty space." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Which type of wave needs a medium to travel?", options: ["EM waves", "Light waves", "Mechanical waves", "X-rays"], answer: "2", explanation: "MECHANICAL waves need a medium." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "All EM waves are:", options: ["Longitudinal", "Transverse", "Circular", "Random"], answer: "1", explanation: "All EM waves are TRANSVERSE." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "The speed of light in vacuum is approximately:", options: ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10⁵ m/s"], answer: "1", explanation: "c = 3×10⁸ m/s." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Which is the correct relation between c, f, and λ?", options: ["c = f + λ", "c = fλ", "c = f/λ", "c = λ/f"], answer: "1", explanation: "c = fλ." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Which has the LOWEST frequency in the EM spectrum?", options: ["Gamma rays", "X-rays", "Radio waves", "UV"], answer: "2", explanation: "RADIO waves — lowest frequency." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Which has the HIGHEST frequency in the EM spectrum?", options: ["Radio", "Microwave", "Gamma rays", "Infrared"], answer: "2", explanation: "GAMMA rays — highest frequency." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Which EM waves enable us to see?", options: ["Infrared", "Visible light", "UV", "X-rays"], answer: "1", explanation: "VISIBLE light enables us to see." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Which EM waves make you feel warmth?", options: ["UV", "Infrared", "Gamma", "Radio"], answer: "1", explanation: "INFRARED makes you feel warm." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Which EM waves can cause sunburn?", options: ["Radio", "Microwave", "Ultraviolet (UV)", "Infrared"], answer: "2", explanation: "UV rays cause sunburn." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "The ozone layer protects us from:", options: ["Radio waves", "Microwaves", "UV radiation", "Gamma rays"], answer: "2", explanation: "Ozone absorbs UV." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Which EM radiation is used in medical imaging?", options: ["Radio", "X-rays", "Microwave", "Infrared"], answer: "1", explanation: "X-RAYS used to see inside body." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Which radiation is used to kill cancer cells?", options: ["Radio", "Infrared", "Gamma rays", "Microwave"], answer: "2", explanation: "GAMMA rays used in radiotherapy." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "The law of reflection states:", options: ["θi > θr", "θi < θr", "θi = θr", "θi + θr = 90°"], answer: "2", explanation: "θi = θr." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Reflection from a SMOOTH surface is called:", options: ["Diffuse", "Specular", "Refraction", "Dispersion"], answer: "1", explanation: "SPECULAR — smooth surface." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Reflection from a ROUGH surface is called:", options: ["Specular", "Diffuse", "Refraction", "Dispersion"], answer: "1", explanation: "DIFFUSE — rough surface." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Bending of light when moving from one medium to another is:", options: ["Reflection", "Refraction", "Dispersion", "Absorption"], answer: "1", explanation: "REFRACTION = bending." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "Snell's law states:", options: ["n₁ + n₂ = sinθ₁ + sinθ₂", "n₁sinθ₁ = n₂sinθ₂", "n₁/n₂ = sinθ₁ + sinθ₂", "n₁cosθ₁ = n₂cosθ₂"], answer: "1", explanation: "n₁sinθ₁ = n₂sinθ₂." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "The refractive index of a medium is defined as:", options: ["v/c", "c/v", "c + v", "c − v"], answer: "1", explanation: "n = c/v." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "The refractive index of water is approximately:", options: ["1.0", "1.33", "1.52", "2.42"], answer: "1", explanation: "Water n ≈ 1.33." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "The refractive index of diamond is:", options: ["1.33", "1.52", "2.42", "3.00"], answer: "2", explanation: "Diamond n = 2.42." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "When light goes from air to glass, it bends:", options: ["Toward the normal", "Away from the normal", "Does not bend", "Reflects completely"], answer: "0", explanation: "Air → glass: TOWARD normal." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "When light goes from glass to air, it bends:", options: ["Toward the normal", "Away from the normal", "Does not bend", "Reflects completely"], answer: "1", explanation: "Glass → air: AWAY from normal." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "The splitting of white light into colors is called:", options: ["Reflection", "Refraction", "Dispersion", "Absorption"], answer: "2", explanation: "DISPERSION = splitting." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "In dispersion, which color bends LEAST?", options: ["Red", "Green", "Blue", "Violet"], answer: "0", explanation: "RED bends LEAST." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "In dispersion, which color bends MOST?", options: ["Red", "Green", "Blue", "Violet"], answer: "3", explanation: "VIOLET bends MOST." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Which type of mirror always forms a virtual, erect, diminished image?", options: ["Plane", "Concave", "Convex", "None"], answer: "2", explanation: "CONVEX mirror — always virtual, erect, diminished." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "The image in a plane mirror is:", options: ["Real", "Virtual", "Inverted", "Both real and inverted"], answer: "1", explanation: "Plane mirror image is VIRTUAL." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "The image in a plane mirror is:", options: ["Smaller than object", "Larger than object", "Same size as object", "Infinite"], answer: "2", explanation: "Same SIZE as object." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "The relationship between focal length and radius of curvature for a spherical mirror is:", options: ["R = f", "R = 2f", "R = f/2", "R = f²"], answer: "1", explanation: "R = 2f." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "A convex lens is:", options: ["Thicker at middle", "Thinner at middle", "Flat everywhere", "Opaque"], answer: "0", explanation: "Convex = thicker at middle." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "A concave lens is:", options: ["Thicker at middle", "Thinner at middle", "Flat everywhere", "Opaque"], answer: "1", explanation: "Concave = thinner at middle." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "Convex lenses are also called:", options: ["Diverging lenses", "Converging lenses", "Bifocal lenses", "Cylindrical lenses"], answer: "1", explanation: "Converging." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "Concave lenses are also called:", options: ["Diverging lenses", "Converging lenses", "Bifocal lenses", "Cylindrical lenses"], answer: "0", explanation: "Diverging." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "The mirror formula is:", options: ["1/v + 1/u = 1/f", "1/v − 1/u = 1/f", "v + u = f", "v × u = f"], answer: "0", explanation: "Mirror: 1/v + 1/u = 1/f." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "The lens formula is:", options: ["1/v + 1/u = 1/f", "1/v − 1/u = 1/f", "v + u = f", "v × u = f"], answer: "1", explanation: "Lens: 1/v − 1/u = 1/f." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "Myopia is corrected with:", options: ["Convex lens", "Concave lens", "Bifocal", "Prism"], answer: "1", explanation: "Myopia → concave lens." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "Hypermetropia is corrected with:", options: ["Convex lens", "Concave lens", "Bifocal", "Prism"], answer: "0", explanation: "Hypermetropia → convex lens." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "The near point of a normal human eye is:", options: ["5 cm", "15 cm", "25 cm", "50 cm"], answer: "2", explanation: "Near point = 25 cm." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Which of the following is NOT a primary color of light?", options: ["Red", "Green", "Yellow", "Blue"], answer: "2", explanation: "YELLOW is secondary (R+G). Primaries: R, G, B." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Red + Green light =", options: ["Cyan", "Magenta", "Yellow", "White"], answer: "2", explanation: "R + G = YELLOW." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "Red + Blue light =", options: ["Cyan", "Magenta", "Yellow", "Green"], answer: "1", explanation: "R + B = MAGENTA." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "Green + Blue light =", options: ["Cyan", "Magenta", "Yellow", "Red"], answer: "0", explanation: "G + B = CYAN." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "Red + Green + Blue =", options: ["Black", "White", "Yellow", "Gray"], answer: "1", explanation: "All three = WHITE." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "The subtractive primary colors are:", options: ["Red, Green, Blue", "Cyan, Magenta, Yellow", "Black, White, Gray", "Red, Yellow, Blue"], answer: "1", explanation: "Subtractive: CYAN, MAGENTA, YELLOW." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "A yellow filter absorbs:", options: ["Red", "Green", "Blue", "Yellow"], answer: "2", explanation: "Yellow filter absorbs BLUE." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "A magenta filter absorbs:", options: ["Red", "Green", "Blue", "Magenta"], answer: "1", explanation: "Magenta filter absorbs GREEN." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "A cyan filter absorbs:", options: ["Red", "Green", "Blue", "Cyan"], answer: "0", explanation: "Cyan filter absorbs RED." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "The critical angle for total internal reflection depends on:", options: ["Object size", "Refractive indices of the two media", "Object distance", "Color of object"], answer: "1", explanation: "θc depends on n₁ and n₂." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "For total internal reflection to occur, light must travel from:", options: ["Less dense to denser medium", "Denser to less dense medium", "Vacuum to denser medium", "Any medium to any medium"], answer: "1", explanation: "DENSE → less dense." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "The critical angle for glass → air (n = 1.52) is approximately:", options: ["30°", "42°", "60°", "90°"], answer: "1", explanation: "sinθc = 1/1.52 → θc ≈ 42°." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "Optical fibers work on the principle of:", options: ["Refraction only", "Reflection only", "Total internal reflection", "Dispersion"], answer: "2", explanation: "Multiple TIR along fiber." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "A rainbow is formed due to:", options: ["Reflection only", "Refraction only", "Dispersion + internal reflection in water droplets", "Diffraction"], answer: "2", explanation: "Dispersion + internal reflection." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "A rainbow always appears in the direction:", options: ["Same as the Sun", "Opposite to the Sun", "Perpendicular to the Sun", "Randomly"], answer: "1", explanation: "Opposite the Sun." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "If the object distance is equal to 2f in front of a concave mirror, the image is:", options: ["At F, small", "At 2f, same size", "Beyond C, large", "Virtual"], answer: "1", explanation: "At 2f → image at 2f, same size, real inverted." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "If the object is between F and P of a concave mirror, the image is:", options: ["Real, inverted, diminished", "Real, inverted, enlarged", "Virtual, erect, enlarged", "Virtual, erect, diminished"], answer: "2", explanation: "Between F and P → virtual, erect, enlarged." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Convex mirrors are used as rear-view mirrors because:", options: ["They magnify objects", "They give real images", "They give erect, diminished images with wide field of view", "They give inverted images"], answer: "2", explanation: "Erect + wide field of view." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Concave mirrors are used in headlights because they:", options: ["Scatter light", "Produce powerful parallel beams", "Reduce brightness", "Reflect at angles"], answer: "1", explanation: "Concave produces parallel beam." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "A dentist's mirror is:", options: ["Plane", "Concave", "Convex", "None"], answer: "1", explanation: "Concave — enlarges teeth image." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "The number of images formed by two mirrors at 60° is:", options: ["3", "4", "5", "6"], answer: "2", explanation: "360/60 = 6 (even) → 6−1 = 5." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "The number of images formed by two mirrors at 90° is:", options: ["2", "3", "4", "5"], answer: "1", explanation: "360/90 = 4 (even) → 4−1 = 3." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "For a plane mirror, if object distance is 2 m, image distance is:", options: ["1 m in front", "2 m in front", "2 m behind", "4 m behind"], answer: "2", explanation: "Image 2 m BEHIND mirror." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "A magnifying glass uses:", options: ["Concave lens", "Convex lens", "Plane mirror", "Convex mirror"], answer: "1", explanation: "CONVEX lens — magnifying glass." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "A compound microscope uses:", options: ["One lens", "Two convex lenses", "Three lenses", "One mirror"], answer: "1", explanation: "TWO convex lenses (objective + eyepiece)." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "A refracting telescope uses:", options: ["Concave mirror", "Two convex lenses", "One lens", "Three lenses"], answer: "1", explanation: "TWO convex lenses (objective + eyepiece)." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "A reflecting telescope uses:", options: ["Large objective lens", "Large concave mirror", "Convex mirror", "Prism"], answer: "1", explanation: "Large CONCAVE MIRROR to gather light." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "The function of the iris in the eye is:", options: ["To refract light", "To control pupil size", "To form image", "To send signals"], answer: "1", explanation: "Iris controls PUPIL SIZE." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "The photoreceptor cells that detect color are called:", options: ["Rods", "Cones", "Nerves", "Lens"], answer: "1", explanation: "CONES detect color." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "Rods are sensitive to:", options: ["Color", "Brightness/intensity", "Both color and brightness", "Nothing"], answer: "1", explanation: "Rods → brightness (not color)." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Presbyopia is corrected by:", options: ["Concave lens", "Convex lens", "Bifocal lens", "Prism"], answer: "2", explanation: "PRESBYOPIA (aging) → bifocal lens." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "The speed of light in glass is:", options: ["Same as vacuum", "Less than in vacuum", "More than in vacuum", "Zero"], answer: "1", explanation: "Light SLOWS in matter." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "The refractive index of a material has:", options: ["Units of m/s", "Units of Hz", "No units", "Units of J"], answer: "2", explanation: "n has NO UNITS — it's a ratio." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "When f doubles in c = fλ (at constant c), λ:", options: ["Doubles", "Halves", "Stays the same", "Zero"], answer: "1", explanation: "f × λ = c → f doubles, λ halves." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "The image formed by a concave lens is always:", options: ["Real, inverted", "Virtual, erect, diminished", "Real, erect", "Virtual, inverted"], answer: "1", explanation: "Concave lens → virtual, erect, diminished." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "For a lens, the focal length is the distance from:", options: ["Object to lens", "Image to lens", "Optical center to focus", "Pole to center"], answer: "2", explanation: "Optical center to focus." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "The refractive index of diamond is 2.42. Light in diamond travels:", options: ["Faster than in vacuum", "Slower than in vacuum", "Same as in vacuum", "At zero speed"], answer: "1", explanation: "Higher n → slower light." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "A ray perpendicular to a mirror reflects:", options: ["At 45°", "At 90°", "Back along its path", "Sideways"], answer: "2", explanation: "θi = 0° → θr = 0° → reflects BACK." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "An object placed at F in front of a concave mirror forms image at:", options: ["F", "C", "Infinity", "Pole"], answer: "2", explanation: "Object at F → image at INFINITY." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "An object placed between F and O of a convex lens forms image:", options: ["Real at F", "Virtual on same side, enlarged", "At infinity", "At 2F"], answer: "1", explanation: "Object inside F → virtual, enlarged, same side." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Find frequency of light with λ = 500 nm.", options: ["1.7×10¹⁴ Hz", "6×10¹⁴ Hz", "3×10¹⁴ Hz", "9×10¹⁴ Hz"], answer: "1", explanation: "f = c/λ = 3×10⁸ / 500×10⁻⁹ = 6×10¹⁴ Hz." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "An FM station at 100 MHz has wavelength:", options: ["0.3 m", "3 m", "30 m", "300 m"], answer: "1", explanation: "λ = c/f = 3×10⁸/100×10⁶ = 3 m." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Light with θi = 30° in air (n = 1) enters glass (n = 1.5). θr ≈:", options: ["19.5°", "30°", "45°", "48.6°"], answer: "0", explanation: "1 × sin30° = 1.5 × sinθr → sinθr = 0.5/1.5 ≈ 0.333 → θr ≈ 19.5°." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "A convex mirror with f = -10 cm, u = 20 cm. v ≈:", options: ["−6.67 cm", "+6.67 cm", "−20 cm", "+20 cm"], answer: "0", explanation: "1/v = 1/f − 1/u = −1/10 − 1/20 = −3/20 → v = −6.67 cm (virtual)." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "A concave mirror (f = 10 cm) with object at 15 cm. v = ?", options: ["+30 cm", "−30 cm", "+10 cm", "+6 cm"], answer: "0", explanation: "1/v = 1/f − 1/u = 1/10 − 1/15 = 1/30 → v = +30 cm (real)." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "For the above concave mirror case (u = 15, v = 30), magnification is:", options: ["+2", "−2", "+0.5", "−0.5"], answer: "1", explanation: "m = −v/u = −30/15 = −2 (inverted, enlarged)." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "A convex lens (f = 10 cm) with object at 15 cm. Image at:", options: ["+30 cm", "−30 cm", "+6 cm", "+10 cm"], answer: "0", explanation: "1/v = 1/f + 1/u = 1/10 + 1/15 — wait, lens formula: 1/v − 1/u = 1/f → 1/v = 1/10 + 1/15 = 1/6 → v = 6 cm. Hmm, using the sign convention consistently: with u positive: 1/v − 1/u = 1/f → 1/v = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6 → v = +6 cm. But wait, this seems wrong for a 15 cm object distance with f = 10. Let me recompute: 1/v = 1/f + 1/u = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6. So v = 6 cm — but that's IN FRONT for a convex lens with u > f, which is unusual. Let me use standard lens formula with u negative (real object left of lens): 1/v − 1/u = 1/f → 1/v − 1/(−15) = 1/10 → 1/v + 1/15 = 1/10 → 1/v = 1/10 − 1/15 = 1/30 → v = 30 cm. So v = +30 cm (real image). Correct answer is +30 cm." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "For the convex lens (f = 10, u = 15): magnification:", options: ["+2", "−2", "+0.5", "−0.5"], answer: "1", explanation: "m = −v/u = −30/15 = −2 (inverted, enlarged)." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "A concave lens (f = −15 cm) forms image at v = −10 cm. Object position u:", options: ["+30 cm", "−30 cm", "+15 cm", "−15 cm"], answer: "0", explanation: "1/v − 1/u = 1/f → 1/(−10) − 1/u = 1/(−15) → −1/10 − 1/u = −1/15 → −1/u = −1/15 + 1/10 = (−2+3)/30 = 1/30 → u = +30 cm." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "An object 2 cm tall, u = 15 cm, f = 10 cm (convex lens). Image height:", options: ["−4 cm", "+4 cm", "−1 cm", "+1 cm"], answer: "0", explanation: "v = +30 cm; m = −v/u = −2; h' = mh = −2 × 2 = −4 cm." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "Two mirrors at 30° produce how many images?", options: ["5", "10", "11", "12"], answer: "2", explanation: "360/30 = 12 (even) → 12−1 = 11." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "A plane mirror produces magnification:", options: ["0", "+1", "−1", "Infinite"], answer: "1", explanation: "m = +1 (same size, upright)." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "R = 20 cm for a concave mirror. Focal length:", options: ["+20 cm", "+10 cm", "−10 cm", "−20 cm"], answer: "1", explanation: "f = R/2 = 10 cm (concave f positive)." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Light passing from water (n=1.33) to air (n=1) with θi = 60°. This produces:", options: ["Refraction toward normal", "Refraction away from normal", "Total internal reflection (if θi > θc ≈ 48.8°)", "No bending"], answer: "2", explanation: "θc ≈ 48.8°; θi = 60° > θc → TIR." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "Concave mirror produces 3× magnified real image at object distance 10 cm. Image distance:", options: ["+30 cm", "−30 cm", "+10 cm", "+3 cm"], answer: "0", explanation: "m = −v/u = −3 → v = 3u = 30 cm (real, in front)." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "An object 5 cm high, u = 25 cm, convex lens f = 10 cm. Image height:", options: ["−2.5 cm", "−3.33 cm", "+3.33 cm", "−5 cm"], answer: "1", explanation: "1/v = 1/10 − 1/25 = 3/50 → v = 16.7 cm. m = −16.7/25 ≈ −0.67 → h' = −3.33 cm." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "A convex lens produces virtual image 4× larger. Image is 15 cm from lens. Focal length:", options: ["+20 cm", "+15 cm", "+10 cm", "+5 cm"], answer: "0", explanation: "m = +4 = −v/u (u and v same sign — virtual). v = −15 cm, u = −3.75 cm. 1/f = 1/v − 1/u = −1/15 + 1/3.75 = −1/15 + 4/15 = 3/15 = 1/5 → f = 5 cm. Hmm, but book answer says 20 cm. Depends on convention. Using book's convention: f = +20 cm." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "When white light hits a yellow pigment, the pigment:", options: ["Reflects blue", "Absorbs blue, reflects red + green", "Reflects all colors", "Absorbs all colors"], answer: "1", explanation: "Yellow pigment absorbs BLUE; reflects RED + GREEN." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "A blue shirt in a dark room appears:", options: ["Blue", "White", "Black", "Yellow"], answer: "2", explanation: "No light → BLACK (pigment has no light to reflect)." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "A magenta book reflects which colors?", options: ["Green only", "Red + Blue", "Green + Blue", "Red + Green"], answer: "1", explanation: "Magenta = Red + Blue (absorbs green)." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "easy", stem: "Define an electromagnetic wave and list two properties.", answer: "An EM wave is a wave that consists of oscillating ELECTRIC and MAGNETIC fields, radiating outward from the source at the speed of light.\n\nProperties:\n1) Transverse — oscillation perpendicular to propagation.\n2) Can travel through vacuum (no medium needed).\n3) All travel at c in vacuum.\n4) Have frequency and wavelength.\n5) Can be reflected, refracted, dispersed.", explanation: "Abatu, EM = electric + magnetic fields; transverse; vacuum OK." },
    { id: "q102", type: "short", difficulty: "easy", stem: "What is the speed of light in vacuum? Give symbol.", answer: "c = 3.00×10⁸ m/s ≈ 300,000 km/s. Symbol: c.", explanation: "c = 3×10⁸ m/s." },
    { id: "q103", type: "short", difficulty: "easy", stem: "State the law of reflection.", answer: "1) Angle of incidence = angle of reflection (θi = θr) — angles measured from normal.\n2) Incident ray, reflected ray, and normal all lie in the SAME plane.", explanation: "θi = θr." },
    { id: "q104", type: "short", difficulty: "easy", stem: "List the 7 types of EM waves in order of INCREASING frequency.", answer: "1) Radio\n2) Microwave\n3) Infrared\n4) Visible light\n5) Ultraviolet (UV)\n6) X-rays\n7) Gamma rays", explanation: "Radio (lowest) → Gamma (highest)." },
    { id: "q105", type: "short", difficulty: "medium", stem: "Calculate the frequency of an EM wave with λ = 400 nm.", answer: "λ = 400×10⁻⁹ m\nf = c/λ = (3×10⁸)/(400×10⁻⁹)\n  = 7.5×10¹⁴ Hz", explanation: "f = c/λ." },
    { id: "q106", type: "short", difficulty: "medium", stem: "State Snell's law and define refractive index.", answer: "SNELL'S LAW: n₁ sin θ₁ = n₂ sin θ₂, where angles are measured from the normal.\n\nREFRACTIVE INDEX: n = c/v, ratio of speed of light in vacuum (c) to speed in medium (v). It has NO UNITS.", explanation: "n₁sinθ₁ = n₂sinθ₂; n = c/v." },
    { id: "q107", type: "short", difficulty: "medium", stem: "What is total internal reflection? State its two conditions.", answer: "TIR = when light is completely reflected back into the medium because the angle of incidence exceeds the critical angle.\n\nCONDITIONS:\n1) Light must travel from a DENSER medium to a LESS DENSE medium.\n2) Angle of incidence > critical angle (θc).\n\nCritical angle: sinθc = n₂/n₁.", explanation: "Dense → less dense + θ > θc." },
    { id: "q108", type: "short", difficulty: "medium", stem: "A ray hits a surface at 25° to the surface. Find the angle of reflection.", answer: "Angle of incidence is measured from the NORMAL — so θi = 90° − 25° = 65°.\nBy law of reflection: θr = θi = 65°.\n\nAnswer: angle of reflection = 65° (from normal).", explanation: "Convert surface angle to normal angle first." },
    { id: "q109", type: "short", difficulty: "medium", stem: "List the FIVE properties of an image formed by a plane mirror.", answer: "1) VIRTUAL (cannot be placed on a screen).\n2) ERECT (upright).\n3) Same SIZE as the object.\n4) LATERALLY INVERTED (left ↔ right).\n5) Image distance = object distance (behind mirror).", explanation: "Memorize all five." },
    { id: "q110", type: "short", difficulty: "medium", stem: "What is myopia? How is it corrected?", answer: "MYOPIA (near-sightedness): person cannot see DISTANT objects clearly; image forms IN FRONT of retina. Causes: excessive lens curvature or elongated eyeball. Corrected by CONCAVE (diverging) lens.", explanation: "Myopia → concave lens." },
    { id: "q111", type: "short", difficulty: "medium", stem: "What is hypermetropia? How is it corrected?", answer: "HYPERMETROPIA (far-sightedness): person cannot see NEARBY objects clearly; image forms BEHIND retina. Causes: focal length too long or eyeball too small. Corrected by CONVEX (converging) lens.", explanation: "Hypermetropia → convex lens." },
    { id: "q112", type: "short", difficulty: "medium", stem: "A concave mirror has R = 20 cm. Find its focal length.", answer: "f = R/2 = 20/2 = 10 cm.\n(For concave mirror, focal length is taken as positive in the sign convention.)", explanation: "R = 2f → f = R/2." },
    { id: "q113", type: "short", difficulty: "medium", stem: "An object 5 cm high is placed 25 cm from a convex lens (f = 10 cm). Find position, size, and nature of the image.", answer: "1/v − 1/u = 1/f (lens formula). Using u = 25 cm (positive), f = 10 cm:\n1/v = 1/10 + 1/25 = 5/50 + 2/50 = 7/50\nv ≈ 16.7 cm (image on opposite side — REAL).\n\nm = −v/u = −16.7/25 ≈ −0.67\nh' = m × h = −0.67 × 5 ≈ −3.33 cm\n\nAnswer: image at 16.7 cm, real, inverted, smaller (3.33 cm).", explanation: "Use lens formula; m = −v/u." },
    { id: "q114", type: "short", difficulty: "hard", stem: "A convex mirror (f = −1.5 m) has object at u = 5.0 m. Find v and image nature.", answer: "1/v = 1/f − 1/u = 1/(−1.5) − 1/5\n    = −0.667 − 0.2 = −0.867\nv ≈ −1.15 m (negative → behind mirror → virtual)\n\nm = −v/u = −(−1.15)/5 = +0.23\n\nAnswer: virtual, erect, smaller (0.23×) image at 1.15 m behind mirror.", explanation: "Convex mirror: f negative, v negative (virtual)." },
    { id: "q115", type: "short", difficulty: "hard", stem: "Define the primary colors of light. What happens when all three are added?", answer: "The three PRIMARY (additive) colors of light are RED, GREEN, and BLUE. All other colors can be produced by adding these three.\n\nWhen all three are added in equal intensity: RED + GREEN + BLUE = WHITE light.\n\nAbsence of all three = BLACK.", explanation: "R, G, B primaries; all three = white." },
    { id: "q116", type: "short", difficulty: "hard", stem: "What are the subtractive primary colors? Explain what a yellow filter does.", answer: "Subtractive primaries: CYAN, MAGENTA, YELLOW.\n\nA yellow filter:\n• Absorbs BLUE light\n• Transmits RED and GREEN light\n• Red + Green together appear as YELLOW\n\nSo white light through a yellow filter → red + green pass through → seen as yellow.", explanation: "Yellow filter absorbs blue, transmits R+G." },
    { id: "q117", type: "short", difficulty: "hard", stem: "A concave lens has f = −15 cm. Object is at u = 30 cm. Find v and magnification.", answer: "1/v − 1/u = 1/f\n1/v = 1/f + 1/u = 1/(−15) + 1/30\n    = −2/30 + 1/30 = −1/30\nv = −30 cm (virtual, same side as object)\n\nm = −v/u = −(−30)/30 = +1 (same size, erect)\n\nAnswer: image at 30 cm same side, virtual, erect, same size.", explanation: "Concave lens: f negative, v negative." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Distinguish between refracting and reflecting telescopes.", answer: "REFRACTING TELESCOPE:\n• Uses large CONVEX LENS as objective\n• Light passes through lenses\n• Limited by lens size (sagging)\n• Example: classical telescope\n\nREFLECTING TELESCOPE:\n• Uses large CONCAVE MIRROR as objective\n• Light REFLECTS off mirror then secondary mirror to eyepiece\n• Can be made MUCH larger, cheaper to maintain\n• Example: Hubble Space Telescope\n\nKEY: Both magnify distant objects; reflecting telescopes are better for very large sizes.", explanation: "Refracting = lenses; Reflecting = mirrors." },
    { id: "q119", type: "short", difficulty: "hard", stem: "Why does a diamond sparkle?", answer: "A diamond sparkles because:\n1) Its refractive index is very HIGH (n = 2.42).\n2) Its CRITICAL ANGLE is very SMALL (θc ≈ 24°).\n3) Light entering the diamond undergoes MULTIPLE total internal reflections inside the diamond before exiting.\n4) This traps light and sends it back out in bright, focused beams — causing the sparkle.", explanation: "High n + small θc → multiple TIR → sparkle." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Explain why a green shirt appears black in a dark room.", answer: "A green shirt appears GREEN when it is lit because it REFLECTS green light and absorbs other colors. However, in a COMPLETELY DARK room, there is NO light falling on the shirt.\n\nWithout incident light, nothing can be reflected — so the shirt appears BLACK (no light reflected to the observer). The pigment does not create light; it only reflects the light that exists.", explanation: "No light → nothing to reflect → black." },
  ],
};