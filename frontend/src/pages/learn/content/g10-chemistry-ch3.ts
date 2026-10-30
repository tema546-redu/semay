import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 CHEMISTRY — UNIT 3
// IMPORTANT INORGANIC COMPOUNDS
// Source: Grade 10 Chemistry Student Textbook (pp. 109–165)
// For: Abenezer (Abatu) — Grade 10
// ============================================================

export const g10ChemistryCh3: Chapter = {
  id: "ch3",
  number: 3,
  title: "Important Inorganic Compounds",
  titleAm: "አስፈላጊ ኢንኦርጋኒክ ውህዶች",

  notes: [
    {
      id: "n0",
      title: "0. How to Master This Unit (Your Route to 100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, Unit 3 is IMPORTANT INORGANIC COMPOUNDS. It has FOUR big halves:\n" +
        "1) OXIDES (acidic, basic, amphoteric, neutral, peroxides)\n" +
        "2) ACIDS (Arrhenius, classification, strong/weak, pH, prep, uses)\n" +
        "3) BASES (Arrhenius, strong/weak, pOH, prep, uses)\n" +
        "4) SALTS (classification, prep, properties, tests, fertilizers)\n\n" +
        "The WHOLE unit reduces to these must-know items:\n" +
        "• Types of oxides + examples + reactions\n" +
        "• Acid + base + salt definitions\n" +
        "• Strong vs weak; concentrated vs dilute\n" +
        "• pH = −log[H⁺]; pOH = −log[OH⁻]; pH + pOH = 14\n" +
        "• Indicator colors\n" +
        "• Preparation methods for acids, bases, salts\n" +
        "• Salt classification (normal, acidic, basic)\n" +
        "• Hygroscopic, deliquescent, efflorescent salts\n" +
        "• Solubility + thermal decomposition of salts\n" +
        "• Flame tests + cation/anion tests\n" +
        "• Fertilizers (NPK) + pesticides + herbicides",
      bodyAm:
        "አባቱ፣ ክፍል 3 አስፈላጊ ኢንኦርጋኒክ ውህዶች ነው። አራት ትላልቅ ክፍሎች፡\n" +
        "1) ኦክሳይዶች\n" +
        "2) አሲዶች\n" +
        "3) ቤዞች\n" +
        "4) ጨዎች",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 — Oxides",
          titleAm: "ደረጃ 1 — ኦክሳይዶች",
          body:
            "OXIDES = binary compounds of oxygen with another element.\n\n" +
            "FIVE types:\n" +
            "1) ACIDIC OXIDES — nonmetal oxides. Form acids with water.\n" +
            "   Examples: CO₂, SO₂, SO₃, N₂O₅, P₄O₁₀\n" +
            "   Reactions: acidic oxide + water → acid; + base → salt + water\n\n" +
            "2) BASIC OXIDES — metal oxides. Form bases with water.\n" +
            "   Examples: Na₂O, K₂O, CaO, MgO, CuO\n" +
            "   Reactions: basic oxide + water → base; + acid → salt + water\n\n" +
            "3) AMPHOTERIC OXIDES — react with BOTH acids and bases.\n" +
            "   Examples: Al₂O₃, ZnO, PbO, SnO₂\n" +
            "   Reactions: + acid → salt + water; + base → salt + water\n\n" +
            "4) NEUTRAL OXIDES — react with NEITHER acids nor bases.\n" +
            "   Examples: CO, NO, N₂O, H₂O\n\n" +
            "5) PEROXIDES — contain O-O (peroxide) link; O = −1.\n" +
            "   Examples: H₂O₂, Na₂O₂, CaO₂, BaO₂",
          bodyAm:
            "1) አሲዳማ: CO₂, SO₂, N₂O₅\n" +
            "2) ቤዛማ: Na₂O, CaO, CuO\n" +
            "3) አምፎተሪክ: Al₂O₃, ZnO\n" +
            "4) ገለልተኛ: CO, NO\n" +
            "5) ፐሮክሳይድ: H₂O₂, Na₂O₂",
        },
        {
          id: "n0-2",
          title: "Pass 2 — Acids",
          titleAm: "ደረጃ 2 — አሲዶች",
          body:
            "ARRHENIUS ACID = produces H⁺ (or H₃O⁺) in water.\n\n" +
            "CLASSIFICATIONS:\n" +
            "• Monoprotic (1 H⁺): HCl, HNO₃, CH₃COOH\n" +
            "• Diprotic (2 H⁺): H₂SO₄, H₂CO₃, H₂S\n" +
            "• Triprotic (3 H⁺): H₃PO₄\n" +
            "• Binary acid (H + nonmetal): HCl, HBr, HF, H₂S\n" +
            "• Ternary acid (H + nonmetal + O): H₂SO₄, HNO₃, H₃PO₄\n\n" +
            "STRONG vs WEAK:\n" +
            "• Strong: complete dissociation → HCl, HNO₃, H₂SO₄, HClO₄, HBr, HI\n" +
            "• Weak: partial dissociation → CH₃COOH, H₂CO₃, H₂S, HF, HNO₂\n\n" +
            "pH SCALE:\n" +
            "• pH = −log[H⁺]\n" +
            "• pH < 7 → acidic\n" +
            "• pH = 7 → neutral\n" +
            "• pH > 7 → basic\n" +
            "• pOH = −log[OH⁻]\n" +
            "• pH + pOH = 14\n" +
            "• Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴",
          bodyAm:
            "Arrhenius: H⁺ ያመነጫል።\n" +
            "Strong: ሙሉ dissociation።\n" +
            "Weak: ከፊል።\n" +
            "pH = −log[H⁺]።\n" +
            "pH + pOH = 14.",
        },
        {
          id: "n0-3",
          title: "Pass 3 — Bases",
          titleAm: "ደረጃ 3 — ቤዞች",
          body:
            "ARRHENIUS BASE = produces OH⁻ in water.\n\n" +
            "EXAMPLES:\n" +
            "• NaOH, KOH, LiOH, Ba(OH)₂ (strong bases)\n" +
            "• NH₃ (weak — doesn't contain OH⁻ but produces it via NH₃ + H₂O ⇌ NH₄⁺ + OH⁻)\n" +
            "• Mg(OH)₂, Ca(OH)₂ (weak)\n\n" +
            "STRONG vs WEAK:\n" +
            "• Strong: complete dissociation → Group 1A hydroxides + Ba(OH)₂\n" +
            "• Weak: partial → Mg(OH)₂, Ca(OH)₂, NH₃\n\n" +
            "pOH = −log[OH⁻]\n" +
            "pH + pOH = 14",
          bodyAm:
            "Base: OH⁻ ያመነጫል።\n" +
            "NaOH, KOH = strong።\n" +
            "NH₃, Mg(OH)₂ = weak።\n" +
            "pOH = −log[OH⁻]።",
        },
        {
          id: "n0-4",
          title: "Pass 4 — Salts",
          titleAm: "ደረጃ 4 — ጨዎች",
          body:
            "SALT = ionic compound from neutralization of acid + base.\n\n" +
            "CLASSIFICATION:\n" +
            "1) NORMAL SALT — complete replacement of H⁺\n" +
            "   Example: NaCl, KNO₃, Na₂SO₄\n" +
            "2) ACIDIC SALT — partial replacement of H⁺\n" +
            "   Example: NaHSO₄, NaH₂PO₄\n" +
            "3) BASIC SALT — contains OH⁻\n" +
            "   Example: Al(OH)₂Cl, Zn(OH)NO₃\n\n" +
            "PREPARATION METHODS:\n" +
            "• Metal + acid → salt + H₂\n" +
            "• Base + acid → salt + H₂O (neutralization)\n" +
            "• Metal oxide + acid → salt + H₂O\n" +
            "• Carbonate + acid → salt + H₂O + CO₂\n" +
            "• Two solutions → precipitate (double displacement)\n\n" +
            "PROPERTIES:\n" +
            "• Soluble salts → ions in water → conduct electricity\n" +
            "• HYGROSCOPIC = absorbs water, stays solid\n" +
            "• DELIQUESCENT = absorbs water → forms solution\n" +
            "• EFFLORESCENT = loses water of crystallization",
          bodyAm:
            "Normal, acidic, basic።\n" +
            "5 የማዘጋጀት ዘዴዎች።\n" +
            "Hygroscopic, deliquescent, efflorescent።",
        },
        {
          id: "n0-5",
          title: "Pass 5 — Tests & fertilizers",
          titleAm: "ደረጃ 5 — ምርመራና ማዳበሪያ",
          body:
            "FLAME TESTS:\n" +
            "• Li⁺ = red\n" +
            "• Na⁺ = yellow\n" +
            "• K⁺ = lilac\n" +
            "• Ca²⁺ = brick-red\n" +
            "• Sr²⁺ = crimson red\n" +
            "• Ba²⁺ = apple green\n\n" +
            "CATION TESTS (with NaOH/NH₃):\n" +
            "• Cu²⁺ → blue precipitate\n" +
            "• Fe²⁺ → green precipitate\n" +
            "• Fe³⁺ → reddish-brown precipitate\n\n" +
            "ANION TESTS:\n" +
            "• SO₄²⁻ → white precipitate with Ba²⁺ (acidified)\n" +
            "• CO₃²⁻ → CO₂ gas with acid (turns limewater milky)\n" +
            "• NO₃⁻ → brown ring test (FeSO₄ + H₂SO₄)\n" +
            "• Cl⁻ → white precipitate with AgNO₃\n\n" +
            "FERTILIZERS:\n" +
            "• Macronutrients: N, P, K, Ca, Mg, S\n" +
            "• Micronutrients: Fe, Mn, Zn, Cu, B, Mo, Cl\n" +
            "• NPK = nitrogen-phosphorus-potassium\n" +
            "• Complete fertilizer = has N + P + K\n" +
            "• Examples: (NH₄)₂SO₄, NH₄NO₃, KNO₃, DAP",
          bodyAm:
            "Flame: Li red, Na yellow, K lilac, Ca brick-red, Ba green።\n" +
            "Cu²⁺ blue, Fe²⁺ green, Fe³⁺ reddish-brown።\n" +
            "SO₄²⁻ Ba²⁺፣ CO₃²⁻ acid፣ NO₃⁻ brown ring።\n" +
            "NPK = N+P+K።",
        },
        {
          id: "n0-6",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Know all FIVE types of oxides with examples.\n" +
            "• Amphoteric oxides react with BOTH acid and base.\n" +
            "• Peroxide: O = −1; contain O-O link.\n" +
            "• Arrhenius acid = H⁺; base = OH⁻.\n" +
            "• Monoprotic vs diprotic vs triprotic.\n" +
            "• Strong vs weak vs concentrated vs dilute.\n" +
            "• pH = −log[H⁺]; pH + pOH = 14.\n" +
            "• Indicator colors (litmus, phenolphthalein, methyl orange).\n" +
            "• 3 preparation methods for acids and bases.\n" +
            "• 5 preparation methods for salts.\n" +
            "• Normal, acidic, basic salts.\n" +
            "• Hygroscopic vs deliquescent vs efflorescent.\n" +
            "• Flame tests + cation/anion tests.\n" +
            "• NPK fertilizer (10:10:10).",
          bodyAm:
            "አምስቱ ኦክሳይዶች፣ አሲድ/ቤዝ፣ pH፣ indicator፣ salts፣ ምርመራ፣ ማዳበሪያ።",
        },
      ],
    },

    {
      id: "n1",
      title: "3.1 Introduction — Inorganic Compounds",
      titleAm: "3.1 መግቢያ",
      body:
        "Abatu, INORGANIC COMPOUNDS are compounds that generally do NOT contain carbon (except simple ones like CO₂, CO₃²⁻, carbides). They are classified into FOUR groups: oxides, acids, bases, salts.",
      bodyAm:
        "ኢንኦርጋኒክ = ካርቦን የሌለው (ከ CO₂, CO₃²⁻ በስተቀር)።\n" +
        "አራት ዓይነቶች: oxides, acids, bases, salts።",
      children: [
        {
          id: "n1-1",
          title: "What is an inorganic compound?",
          titleAm: "ኢንኦርጋኒክ ምንድን ነው?",
          body:
            "INORGANIC COMPOUND:\n" +
            "• Does NOT contain carbon (with few exceptions)\n" +
            "• Exceptions: CO₂ (oxide), CaCO₃ (carbonate), SiC (carbide)\n" +
            "• Found in minerals of the earth\n" +
            "• From non-living things\n\n" +
            "CLASSIFICATION:\n" +
            "1) OXIDES\n" +
            "2) ACIDS\n" +
            "3) BASES\n" +
            "4) SALTS",
          bodyAm:
            "C የለውም።\n" +
            "Oxides, acids, bases, salts።",
        },
        {
          id: "n1-2",
          title: "Common examples in daily life",
          titleAm: "የዕለት ተዕለት ምሳሌዎች",
          body:
            "• CO₂ in fire extinguisher — oxide\n" +
            "• Vinegar's sour taste — acetic acid (CH₃COOH)\n" +
            "• Soap making — NaOH (base)\n" +
            "• Table salt — NaCl (salt)\n" +
            "• Baking soda — NaHCO₃ (salt)\n" +
            "• Limestone — CaCO₃ (salt)\n" +
            "• Stomach acid — HCl\n" +
            "• Antacid — Mg(OH)₂ or Al(OH)₃",
          bodyAm:
            "CO₂ = oxide።\n" +
            "CH₃COOH = acid።\n" +
            "NaOH = base።\n" +
            "NaCl = salt።",
        },
        {
          id: "n1-3",
          title: "⚠ Remember trap — Introduction",
          titleAm: "⚠ አትርሳ — መግቢያ",
          body:
            "• Inorganic = NO carbon (mostly).\n" +
            "• CO₂, CO₃²⁻, CN⁻ are inorganic despite having C.\n" +
            "• 4 groups: oxides, acids, bases, salts.\n" +
            "• Organic compounds = carbon-based (methane, ethanol, sugar).",
          bodyAm:
            "Inorganic: C የለውም።\n" +
            "4 ቡድኖች።",
        },
      ],
    },

    {
      id: "n2",
      title: "3.2 Oxides",
      titleAm: "3.2 ኦክሳይዶች",
      body:
        "Abatu, OXIDES are binary compounds of oxygen with another element. There are FIVE types based on their acid-base behavior.",
      bodyAm:
        "ኦክሳይድ = ኦክሲጅን + ሌላ ንጥረ ነገር።\n" +
        "አምስት ዓይነቶች።",
      children: [
        {
          id: "n2-1",
          title: "Acidic oxides",
          titleAm: "አሲዳማ ኦክሳይዶች",
          body:
            "ACIDIC OXIDES = NONMETAL oxides that form ACIDS with water.\n\n" +
            "EXAMPLES:\n" +
            "• CO₂, SO₂, SO₃, N₂O₅, P₄O₁₀\n\n" +
            "REACTIONS:\n" +
            "1) + Water → Acid\n" +
            "   CO₂ + H₂O → H₂CO₃\n" +
            "   SO₂ + H₂O → H₂SO₃\n" +
            "   SO₃ + H₂O → H₂SO₄\n\n" +
            "2) + Base → Salt + Water\n" +
            "   CO₂ + 2NaOH → Na₂CO₃ + H₂O\n\n" +
            "3) + Basic oxide → Salt\n" +
            "   CO₂ + Na₂O → Na₂CO₃\n\n" +
            "Also called ACID ANHYDRIDES.",
          bodyAm:
            "Nonmetal oxide።\n" +
            "+ ውሃ → አሲድ።\n" +
            "CO₂ → H₂CO₃።\n" +
            "SO₃ → H₂SO₄።",
        },
        {
          id: "n2-2",
          title: "Basic oxides",
          titleAm: "ቤዛማ ኦክሳይዶች",
          body:
            "BASIC OXIDES = METAL oxides that form BASES with water.\n\n" +
            "EXAMPLES:\n" +
            "• Na₂O, K₂O, Li₂O, CaO, MgO, BaO, CuO, FeO\n\n" +
            "REACTIONS:\n" +
            "1) + Water → Base\n" +
            "   Na₂O + H₂O → 2NaOH\n" +
            "   CaO + H₂O → Ca(OH)₂\n\n" +
            "2) + Acid → Salt + Water\n" +
            "   CaO + 2HCl → CaCl₂ + H₂O\n" +
            "   CuO + H₂SO₄ → CuSO₄ + H₂O\n\n" +
            "3) + Acidic oxide → Salt\n" +
            "   Na₂O + CO₂ → Na₂CO₃\n\n" +
            "Also called BASIC ANHYDRIDES.",
          bodyAm:
            "Metal oxide።\n" +
            "+ ውሃ → base።\n" +
            "Na₂O → NaOH።\n" +
            "CaO → Ca(OH)₂።",
        },
        {
          id: "n2-3",
          title: "Amphoteric oxides",
          titleAm: "አምፎተሪክ",
          body:
            "AMPHOTERIC OXIDES = oxides that react with BOTH acids and bases.\n\n" +
            "EXAMPLES:\n" +
            "• Al₂O₃, ZnO, PbO, PbO₂, SnO, SnO₂\n\n" +
            "REACTIONS with Al₂O₃:\n" +
            "1) + Acid → Salt + Water\n" +
            "   Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O\n\n" +
            "2) + Base → Salt + Water\n" +
            "   Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O\n\n" +
            "Same for ZnO:\n" +
            "   ZnO + 2HCl → ZnCl₂ + H₂O\n" +
            "   ZnO + 2NaOH → Na₂ZnO₂ + H₂O\n\n" +
            "Amphoteric hydroxides: Al(OH)₃, Zn(OH)₂",
          bodyAm:
            "ከሁለቱም ጋር ይሠራል።\n" +
            "Al₂O₃, ZnO።\n" +
            "ከ acid + ከ base ጋር።",
        },
        {
          id: "n2-4",
          title: "Neutral oxides",
          titleAm: "ገለልተኛ ኦክሳይዶች",
          body:
            "NEUTRAL OXIDES = oxides that react with NEITHER acids nor bases.\n\n" +
            "EXAMPLES:\n" +
            "• CO (carbon monoxide)\n" +
            "• NO (nitrogen monoxide)\n" +
            "• N₂O (dinitrogen monoxide)\n" +
            "• H₂O (water)\n\n" +
            "Only a FEW oxides are neutral.\n" +
            "They do NOT form salts.",
          bodyAm:
            "ከሁለቱም አይሠራም።\n" +
            "CO, NO, N₂O, H₂O።",
        },
        {
          id: "n2-5",
          title: "Peroxides",
          titleAm: "ፐሮክሳይድ",
          body:
            "PEROXIDES = contain O-O (peroxide) link; oxygen has oxidation number −1.\n\n" +
            "EXAMPLES:\n" +
            "• H₂O₂ (hydrogen peroxide)\n" +
            "• Na₂O₂ (sodium peroxide)\n" +
            "• CaO₂ (calcium peroxide)\n" +
            "• BaO₂ (barium peroxide)\n\n" +
            "REACTIONS:\n" +
            "1) + Acid → Salt + H₂O₂\n" +
            "   Na₂O₂ + 2HCl → 2NaCl + H₂O₂\n\n" +
            "2) Powerful OXIDIZING agents\n" +
            "   PbS + 4H₂O₂ → PbSO₄ + 4H₂O\n\n" +
            "3) H₂O₂ decomposes:\n" +
            "   2H₂O₂ → 2H₂O + O₂ (with MnO₂ catalyst)",
          bodyAm:
            "O-O link።\n" +
            "O = −1።\n" +
            "H₂O₂, Na₂O₂።",
        },
        {
          id: "n2-6",
          title: "⚠ Remember trap — Oxides",
          titleAm: "⚠ አትርሳ — ኦክሳይዶች",
          body:
            "• Acidic = nonmetal oxide (CO₂, SO₂).\n" +
            "• Basic = metal oxide (Na₂O, CaO).\n" +
            "• Amphoteric = BOTH (Al₂O₃, ZnO).\n" +
            "• Neutral = NEITHER (CO, NO).\n" +
            "• Peroxide = O-O link, O = −1 (H₂O₂, Na₂O₂).\n" +
            "• Al₂O₃ and ZnO are amphoteric (not just basic).\n" +
            "• CO is neutral, CO₂ is acidic!",
          bodyAm:
            "Acidic = nonmetal።\n" +
            "Basic = metal።\n" +
            "Amphoteric = Al₂O₃, ZnO።\n" +
            "Neutral = CO, NO።",
        },
      ],
    },

    {
      id: "n3",
      title: "3.3 Acids",
      titleAm: "3.3 አሲዶች",
      body:
        "Abatu, an ACID is a substance that produces H⁺ (H₃O⁺) ions in water (Arrhenius definition). Acids have a sour taste and turn blue litmus red.",
      bodyAm:
        "አሲድ = H⁺ ያመነጫል።\n" +
        "ጣፋጭ ጣዕም።\n" +
        "ሰማያዊ litmus → ቀይ።",
      children: [
        {
          id: "n3-1",
          title: "Arrhenius definition",
          titleAm: "Arrhenius ትርጓሜ",
          body:
            "ARRHENIUS ACID = substance that produces H⁺ ions in aqueous solution.\n\n" +
            "HA(aq) → H⁺(aq) + A⁻(aq)\n\n" +
            "or with water:\n" +
            "HA(aq) + H₂O(l) → H₃O⁺(aq) + A⁻(aq)\n\n" +
            "EXAMPLES:\n" +
            "• HCl → H⁺ + Cl⁻\n" +
            "• HNO₃ → H⁺ + NO₃⁻\n" +
            "• H₂SO₄ → 2H⁺ + SO₄²⁻\n" +
            "• H₃PO₄ → 3H⁺ + PO₄³⁻ (partial)\n\n" +
            "Must contain IONIZABLE hydrogen.",
          bodyAm:
            "H⁺ ያመነጫል።\n" +
            "HCl → H⁺ + Cl⁻።\n" +
            "H₂SO₄ → 2H⁺ + SO₄²⁻።",
        },
        {
          id: "n3-2",
          title: "Classification by H⁺",
          titleAm: "በH⁺ ብዛት",
          body:
            "MONOPROTIC — 1 replaceable H⁺ per molecule:\n" +
            "• HCl, HNO₃, HBr, HI, HF, CH₃COOH\n\n" +
            "DIPROTIC — 2 replaceable H⁺:\n" +
            "• H₂SO₄, H₂CO₃, H₂S, H₂C₂O₄\n\n" +
            "TRIPROTIC — 3 replaceable H⁺:\n" +
            "• H₃PO₄, H₃AsO₄\n\n" +
            "Note: CH₃COOH has 4 H atoms but is MONOPROTIC (only the COOH H is acidic).",
          bodyAm:
            "Monoprotic = 1 H⁺።\n" +
            "Diprotic = 2 H⁺።\n" +
            "Triprotic = 3 H⁺።\n" +
            "CH₃COOH = monoprotic።",
        },
        {
          id: "n3-3",
          title: "Classification by composition",
          titleAm: "በስብጥር",
          body:
            "BINARY ACID = H + one nonmetal:\n" +
            "• HCl, HBr, HI, HF, H₂S\n\n" +
            "TERNARY ACID (OXY-ACID) = H + nonmetal + O:\n" +
            "• H₂SO₄, HNO₃, H₃PO₄, H₂CO₃, HClO₄",
          bodyAm:
            "Binary = H + nonmetal።\n" +
            "Ternary = H + nonmetal + O።",
        },
        {
          id: "n3-4",
          title: "Strong vs weak acids",
          titleAm: "ጠንካራ vs ደካማ",
          body:
            "STRONG ACIDS — dissociate COMPLETELY (→):\n" +
            "• HCl, HBr, HI\n" +
            "• HNO₃\n" +
            "• H₂SO₄\n" +
            "• HClO₄\n\n" +
            "WEAK ACIDS — dissociate PARTIALLY (⇌):\n" +
            "• CH₃COOH (acetic)\n" +
            "• H₂CO₃ (carbonic)\n" +
            "• H₂S (hydrosulfuric)\n" +
            "• HF (hydrofluoric)\n" +
            "• HNO₂ (nitrous)\n" +
            "• H₃PO₄ (phosphoric)\n" +
            "• H₂C₂O₄ (oxalic)\n\n" +
            "Strong → many ions → good conductor\n" +
            "Weak → few ions → poor conductor",
          bodyAm:
            "Strong: ሙሉ dissociation።\n" +
            "Weak: ከፊል።\n" +
            "HCl, HNO₃, H₂SO₄ = strong።\n" +
            "CH₃COOH, H₂CO₃ = weak።",
        },
        {
          id: "n3-5",
          title: "Concentrated vs dilute",
          titleAm: "ትኩረት",
          body:
            "CONCENTRATED vs DILUTE — amount of acid per volume:\n" +
            "• CONCENTRATED: large amount of acid in solution\n" +
            "• DILUTE: small amount of acid in solution\n\n" +
            "IMPORTANT:\n" +
            "• Concentrated/dilute = AMOUNT\n" +
            "• Strong/weak = DEGREE of ionization\n" +
            "• Can have: dilute strong acid, concentrated weak acid, etc.\n\n" +
            "EXAMPLES:\n" +
            "• 0.001 M HCl = dilute strong acid\n" +
            "• 17 M CH₃COOH = concentrated weak acid",
          bodyAm:
            "Concentrated = ብዙ።\n" +
            "Dilute = ጥቂት።\n" +
            "Strong/weak = ionization።",
        },
        {
          id: "n3-6",
          title: "pH scale",
          titleAm: "pH ስኬል",
          body:
            "pH = −log[H⁺]\n" +
            "[H⁺] = 10^(−pH)\n\n" +
            "pH + pOH = 14\n" +
            "Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴ (at 25°C)\n\n" +
            "pH < 7 → ACIDIC\n" +
            "pH = 7 → NEUTRAL\n" +
            "pH > 7 → BASIC\n\n" +
            "EXAMPLES:\n" +
            "• 0.01 M HCl → [H⁺] = 0.01 → pH = 2\n" +
            "• 0.001 M HCl → pH = 3\n" +
            "• pH 3 is 10× more acidic than pH 4\n\n" +
            "Common pH values:\n" +
            "• Stomach acid: 1–3\n" +
            "• Lemon: 2\n" +
            "• Vinegar: 3\n" +
            "• Coffee: 5\n" +
            "• Water: 7\n" +
            "• Blood: 7.4\n" +
            "• Soap: 9–10\n" +
            "• Bleach: 13",
          bodyAm:
            "pH = −log[H⁺]።\n" +
            "pH 7 = ገለልተኛ።\n" +
            "pH<7 = አሲዳማ።\n" +
            "pH>7 = ቤዛማ።",
        },
        {
          id: "n3-7",
          title: "Properties of acids",
          titleAm: "የአሲዶች ባህሪያት",
          body:
            "1) SOUR TASTE (never taste in lab!)\n\n" +
            "2) Change INDICATOR colors:\n" +
            "• Blue litmus → RED\n" +
            "• Methyl orange → RED\n" +
            "• Phenolphthalein → COLORLESS\n" +
            "• Universal → red/orange (acidic)\n\n" +
            "3) React with ACTIVE metals → H₂ gas\n" +
            "• Zn + 2HCl → ZnCl₂ + H₂\n" +
            "• Mg + H₂SO₄ → MgSO₄ + H₂\n" +
            "• Cu does NOT react with HCl\n\n" +
            "4) React with CARBONATES → CO₂\n" +
            "• CaCO₃ + 2HCl → CaCl₂ + H₂O + CO₂\n\n" +
            "5) React with BASES → salt + water (neutralization)\n\n" +
            "6) Conduct electricity (electrolytes)",
          bodyAm:
            "ጣፋጭ።\n" +
            "Blue litmus → red።\n" +
            "Metals → H₂።\n" +
            "Carbonates → CO₂።\n" +
            "Bases → salt + water።",
        },
        {
          id: "n3-8",
          title: "Preparation of acids",
          titleAm: "ማዘጋጀት",
          body:
            "THREE methods:\n\n" +
            "1) Acidic oxide + water → acid:\n" +
            "   SO₃ + H₂O → H₂SO₄\n" +
            "   CO₂ + H₂O → H₂CO₃\n\n" +
            "2) Direct combination of nonmetal + hydrogen:\n" +
            "   H₂ + Cl₂ → 2HCl\n" +
            "   H₂ + S → H₂S\n\n" +
            "3) Non-volatile acid + salt → volatile acid:\n" +
            "   NaCl + H₂SO₄ → NaHSO₄ + HCl↑\n" +
            "   NaNO₃ + H₂SO₄ → NaHSO₄ + HNO₃↑\n" +
            "   (H₂SO₄ is nonvolatile; HCl/HNO₃ are volatile)",
          bodyAm:
            "1) Oxide + ውሃ።\n" +
            "2) ንጥረ + H₂።\n" +
            "3) H₂SO₄ + ጨው።",
        },
        {
          id: "n3-9",
          title: "Uses of common acids",
          titleAm: "አጠቃቀሞች",
          body:
            "SULFURIC ACID (H₂SO₄):\n" +
            "• Fertilizers\n" +
            "• Car batteries\n" +
            "• Petroleum refining\n" +
            "• Making other chemicals\n" +
            "• #1 industrial chemical\n\n" +
            "HYDROCHLORIC ACID (HCl):\n" +
            "• Stomach acid (digestion)\n" +
            "• Cleaning steel (pickling)\n" +
            "• Making PVC plastic\n" +
            "• Dyes, drugs\n\n" +
            "NITRIC ACID (HNO₃):\n" +
            "• Explosives (TNT, nitroglycerine)\n" +
            "• Fertilizers (NH₄NO₃, KNO₃)\n" +
            "• Making dyes, drugs, plastics",
          bodyAm:
            "H₂SO₄ = fertilizer, battery።\n" +
            "HCl = digestion, cleaning።\n" +
            "HNO₃ = explosives, fertilizer።",
        },
        {
          id: "n3-10",
          title: "Safety with acids",
          titleAm: "ደህንነት",
          body:
            "SAFETY:\n" +
            "• Wear goggles, gloves, lab coat\n" +
            "• Add ACID to WATER (not water to acid)\n" +
            "• If acid on skin: wash with water, then Na₂CO₃ (10%)\n" +
            "• If acid in eyes: wash with water, see doctor\n" +
            "• Use pipette bulb (not mouth)\n" +
            "• Never taste acids",
          bodyAm:
            "Acid → ውሃ።\n" +
            "Goggles, gloves።\n" +
            "Never taste።",
        },
        {
          id: "n3-11",
          title: "⚠ Remember trap — Acids",
          titleAm: "⚠ አትርሳ — አሲዶች",
          body:
            "• Arrhenius acid = produces H⁺ in water.\n" +
            "• Monoprotic = 1 H⁺; diprotic = 2; triprotic = 3.\n" +
            "• CH₃COOH is MONOPROTIC (only COOH H is acidic).\n" +
            "• Strong = complete dissociation; weak = partial.\n" +
            "• Concentrated ≠ strong; dilute ≠ weak.\n" +
            "• pH = −log[H⁺]; pH < 7 = acidic.\n" +
            "• pH 3 is 10× more acidic than pH 4.\n" +
            "• Blue litmus → red with acids.",
          bodyAm:
            "H⁺ = acid።\n" +
            "CH₃COOH = monoprotic።\n" +
            "Strong ≠ concentrated።\n" +
            "pH = −log[H⁺]።",
        },
      ],
    },

    {
      id: "n4",
      title: "3.4 Bases",
      titleAm: "3.4 ቤዞች",
      body:
        "Abatu, a BASE is a substance that produces OH⁻ ions in water (Arrhenius). Bases have a bitter taste and feel slippery.",
      bodyAm:
        "ቤዝ = OH⁻ ያመነጫል።\n" +
        "መራራ ጣዕም።\n" +
        "ተንሸራታች።",
      children: [
        {
          id: "n4-1",
          title: "Arrhenius definition",
          titleAm: "Arrhenius ትርጓሜ",
          body:
            "ARRHENIUS BASE = substance that produces OH⁻ ions in aqueous solution.\n\n" +
            "Metal hydroxides:\n" +
            "NaOH → Na⁺ + OH⁻\n" +
            "KOH → K⁺ + OH⁻\n" +
            "Ba(OH)₂ → Ba²⁺ + 2OH⁻\n\n" +
            "Ammonia (not ionic, no OH⁻):\n" +
            "NH₃ + H₂O ⇌ NH₄⁺ + OH⁻\n" +
            "(NH₃ is still a base — produces OH⁻ via reaction with water)",
          bodyAm:
            "OH⁻ ያመነጫል።\n" +
            "NaOH, KOH = base።\n" +
            "NH₃ = base (NH₄⁺ + OH⁻)።",
        },
        {
          id: "n4-2",
          title: "Strong vs weak bases",
          titleAm: "ጠንካራ vs ደካማ",
          body:
            "STRONG BASES — complete dissociation (→):\n" +
            "• Group 1A hydroxides: LiOH, NaOH, KOH\n" +
            "• Ba(OH)₂ (heavier Group 2A)\n\n" +
            "WEAK BASES — partial dissociation (⇌):\n" +
            "• Mg(OH)₂\n" +
            "• Ca(OH)₂\n" +
            "• NH₃ (NH₄OH)\n" +
            "• Most organic bases\n\n" +
            "Conductivity: strong = bright bulb; weak = dim.",
          bodyAm:
            "Strong: NaOH, KOH, Ba(OH)₂።\n" +
            "Weak: NH₃, Mg(OH)₂, Ca(OH)₂።",
        },
        {
          id: "n4-3",
          title: "pOH and relationship",
          titleAm: "pOH",
          body:
            "pOH = −log[OH⁻]\n" +
            "[OH⁻] = 10^(−pOH)\n\n" +
            "pH + pOH = 14\n" +
            "Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴\n\n" +
            "EXAMPLES:\n" +
            "• 0.01 M NaOH → [OH⁻] = 0.01 → pOH = 2 → pH = 12\n" +
            "• 0.001 M NaOH → pOH = 3 → pH = 11\n" +
            "• 0.0001 M NaOH → pOH = 4 → pH = 10",
          bodyAm:
            "pOH = −log[OH⁻]።\n" +
            "pH + pOH = 14።",
        },
        {
          id: "n4-4",
          title: "Properties of bases",
          titleAm: "ባህሪያት",
          body:
            "1) BITTER TASTE (never taste!)\n" +
            "2) SLIPPERY FEEL (like soap)\n\n" +
            "3) Change INDICATORS:\n" +
            "• Red litmus → BLUE\n" +
            "• Phenolphthalein → PINK (in base)\n" +
            "• Methyl orange → YELLOW\n" +
            "• Universal → blue/purple\n\n" +
            "4) React with ACIDS → salt + water\n" +
            "   NaOH + HCl → NaCl + H₂O\n\n" +
            "5) React with ACIDIC OXIDES → salt + water\n" +
            "   CO₂ + 2NaOH → Na₂CO₃ + H₂O\n\n" +
            "6) Conduct electricity (electrolytes)\n" +
            "7) Strong bases CORROSIVE ('caustic')",
          bodyAm:
            "መራራ፣ ተንሸራታች።\n" +
            "Red → blue።\n" +
            "Phenolphthalein → pink።\n" +
            "Neutralization።",
        },
        {
          id: "n4-5",
          title: "Preparation of bases",
          titleAm: "ማዘጋጀት",
          body:
            "THREE methods:\n\n" +
            "1) Active metal + water → base + H₂:\n" +
            "   2Na + 2H₂O → 2NaOH + H₂\n" +
            "   Ca + 2H₂O → Ca(OH)₂ + H₂\n\n" +
            "2) Metal oxide + water → base:\n" +
            "   Na₂O + H₂O → 2NaOH\n" +
            "   CaO + H₂O → Ca(OH)₂\n" +
            "   (Basic oxides that dissolve in water)\n\n" +
            "3) Double displacement:\n" +
            "   Ba(OH)₂ + K₂SO₄ → 2KOH + BaSO₄↓\n" +
            "   Ca(OH)₂ + Na₂CO₃ → 2NaOH + CaCO₃↓\n" +
            "   (soluble base + soluble salt → soluble base + insoluble salt)",
          bodyAm:
            "1) ንጥረ + ውሃ።\n" +
            "2) metal oxide + ውሃ።\n" +
            "3) double displacement።",
        },
        {
          id: "n4-6",
          title: "Uses of common bases",
          titleAm: "አጠቃቀሞች",
          body:
            "SODIUM HYDROXIDE (NaOH):\n" +
            "• Soap + detergent making\n" +
            "• Paper, textile industry\n" +
            "• Drain cleaner\n" +
            "• Oven cleaner\n" +
            "• Also called 'lye' or 'caustic soda'\n\n" +
            "CALCIUM HYDROXIDE (Ca(OH)₂):\n" +
            "• Cement making\n" +
            "• Whitewash\n" +
            "• Limewater test for CO₂\n" +
            "• Neutralize acidic soil\n" +
            "• Also called 'slaked lime'\n\n" +
            "POTASSIUM HYDROXIDE (KOH):\n" +
            "• Soft soap\n" +
            "• Fertilizer\n" +
            "• Alkaline batteries\n\n" +
            "AMMONIA (NH₃):\n" +
            "• Fertilizer (NH₄NO₃, (NH₄)₂SO₄)\n" +
            "• Cleaning products\n" +
            "• Making nitric acid",
          bodyAm:
            "NaOH = soap።\n" +
            "Ca(OH)₂ = cement።\n" +
            "KOH = soft soap።\n" +
            "NH₃ = fertilizer።",
        },
        {
          id: "n4-7",
          title: "Safety with bases",
          titleAm: "ደህንነት",
          body:
            "SAFETY:\n" +
            "• 'CAUSTIC' = burns skin\n" +
            "• Wear goggles, gloves, lab coat\n" +
            "• If base on skin: wash with water, then dilute acetic acid (1%)\n" +
            "• If base in eyes: wash with water, see doctor\n" +
            "• If base swallowed: drink dilute acetic acid or lemon juice\n" +
            "• Even WEAK bases can be corrosive",
          bodyAm:
            "Caustic = ያቃጥላል።\n" +
            "Goggles።\n" +
            "Acetic acid = መጠበቂያ።",
        },
        {
          id: "n4-8",
          title: "⚠ Remember trap — Bases",
          titleAm: "⚠ አትርሳ — ቤዞች",
          body:
            "• Arrhenius base = produces OH⁻ in water.\n" +
            "• NH₃ has no OH⁻ in formula but is a base.\n" +
            "• Strong bases: Group 1A hydroxides + Ba(OH)₂.\n" +
            "• Weak bases: Mg(OH)₂, Ca(OH)₂, NH₃.\n" +
            "• pOH = −log[OH⁻]; pH + pOH = 14.\n" +
            "• pH > 7 = basic.\n" +
            "• Red litmus → blue with bases.\n" +
            "• Phenolphthalein → pink in bases.",
          bodyAm:
            "OH⁻ = base።\n" +
            "NH₃ = base።\n" +
            "pH > 7 = base።\n" +
            "Red → blue።",
        },
      ],
    },

    {
      id: "n5",
      title: "3.5 Salts",
      titleAm: "3.5 ጨዎች",
      body:
        "Abatu, a SALT is an ionic compound formed when the H⁺ of an acid is replaced by a metal ion or NH₄⁺. Salts come from neutralization reactions.",
      bodyAm:
        "ጨው = ከ neutralization።\n" +
        "H⁺ በ metal ወይም NH₄⁺ ተተክቷል።",
      children: [
        {
          id: "n5-1",
          title: "Classification of salts",
          titleAm: "ምድብ",
          body:
            "1) NORMAL (NEUTRAL) SALT:\n" +
            "• ALL H⁺ replaced by metal\n" +
            "• Examples: NaCl, KNO₃, Na₂SO₄, CaCl₂\n" +
            "• Formed from complete neutralization\n\n" +
            "2) ACIDIC SALT:\n" +
            "• PARTIAL replacement of H⁺\n" +
            "• Contains replaceable H\n" +
            "• Examples: NaHSO₄, NaH₂PO₄, NaHCO₃\n" +
            "• Turns blue litmus red\n\n" +
            "3) BASIC SALT:\n" +
            "• Contains replaceable OH⁻\n" +
            "• Partial replacement of base OH⁻\n" +
            "• Examples: Al(OH)₂Cl, Zn(OH)NO₃\n" +
            "• Turns red litmus blue",
          bodyAm:
            "Normal = ሙሉ።\n" +
            "Acidic = H ቀሪ።\n" +
            "Basic = OH ቀሪ።",
        },
        {
          id: "n5-2",
          title: "Preparation of soluble salts",
          titleAm: "ሟሟ ጨዎች ማዘጋጀት",
          body:
            "FOUR methods for SOLUBLE salts:\n\n" +
            "1) Active metal + acid → salt + H₂:\n" +
            "   Mg + 2HCl → MgCl₂ + H₂\n" +
            "   Zn + H₂SO₄ → ZnSO₄ + H₂\n\n" +
            "2) Acid + base (neutralization) → salt + H₂O:\n" +
            "   HCl + NaOH → NaCl + H₂O\n" +
            "   H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O\n\n" +
            "3) Acid + metal oxide → salt + H₂O:\n" +
            "   CuO + H₂SO₄ → CuSO₄ + H₂O\n" +
            "   ZnO + 2HCl → ZnCl₂ + H₂O\n\n" +
            "4) Acid + carbonate/bicarbonate → salt + H₂O + CO₂:\n" +
            "   Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂",
          bodyAm:
            "1) ንጥረ + acid።\n" +
            "2) acid + base።\n" +
            "3) acid + oxide።\n" +
            "4) acid + carbonate።",
        },
        {
          id: "n5-3",
          title: "Preparation of insoluble salts",
          titleAm: "የማይሟሟ ጨዎች",
          body:
            "Method: DOUBLE DECOMPOSITION (precipitation)\n\n" +
            "Two SOLUBLE salts mixed → INSOLUBLE salt precipitates.\n\n" +
            "EXAMPLES:\n" +
            "• AgNO₃ + NaCl → AgCl↓ + NaNO₃\n" +
            "• BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl\n" +
            "• Na₂CO₃ + CuSO₄ → CuCO₃↓ + Na₂SO₄\n" +
            "• CaCl₂ + Na₂CO₃ → CaCO₃↓ + 2NaCl",
          bodyAm:
            "Double decomposition።\n" +
            "Precipitate።\n" +
            "AgCl, BaSO₄ = insoluble።",
        },
        {
          id: "n5-4",
          title: "Properties of salts",
          titleAm: "ባህሪያት",
          body:
            "1) SOLUBILITY:\n" +
            "• Soluble salts → ions in water\n" +
            "• Insoluble salts → precipitate\n" +
            "• Rules for solubility in chapter 2\n\n" +
            "2) WATER ABSORPTION:\n" +
            "• HYGROSCOPIC = absorbs water, stays solid\n" +
            "   Example: CuSO₄ (anhydrous)\n" +
            "• DELIQUESCENT = absorbs water → solution\n" +
            "   Example: CaCl₂, FeCl₃, NaNO₃\n" +
            "• EFFLORESCENT = LOSES water of crystallization\n" +
            "   Example: Na₂CO₃·10H₂O, Na₂SO₄·10H₂O\n\n" +
            "3) CONDUCTIVITY (aqueous):\n" +
            "• Soluble salts → ions → conduct\n" +
            "   NaNO₃ → Na⁺ + NO₃⁻\n\n" +
            "4) THERMAL DECOMPOSITION:\n" +
            "• Carbonates (Group 2A) → MO + CO₂\n" +
            "   CaCO₃ → CaO + CO₂\n" +
            "• Nitrates (Group 2A) → MO + NO₂ + O₂\n" +
            "   2Mg(NO₃)₂ → 2MgO + 4NO₂ + O₂\n" +
            "• Group 1A nitrates (Na, K) → nitrite + O₂\n" +
            "   2NaNO₃ → 2NaNO₂ + O₂",
          bodyAm:
            "Solubility።\n" +
            "Hygroscopic/deliquescent/efflorescent።\n" +
            "Thermal decomposition።",
        },
        {
          id: "n5-5",
          title: "Chemical tests for salts",
          titleAm: "የምርመራ ዘዴዎች",
          body:
            "FLAME TESTS (metal ions):\n" +
            "• Li⁺ = RED\n" +
            "• Na⁺ = YELLOW\n" +
            "• K⁺ = LILAC (pale violet)\n" +
            "• Ca²⁺ = BRICK-RED\n" +
            "• Sr²⁺ = CRIMSON RED\n" +
            "• Ba²⁺ = APPLE GREEN\n\n" +
            "CATION TESTS (with NaOH/NH₃):\n" +
            "• Cu²⁺ → BLUE precipitate\n" +
            "• Fe²⁺ → GREEN precipitate\n" +
            "• Fe³⁺ → REDDISH-BROWN precipitate\n\n" +
            "ANION TESTS:\n" +
            "• SO₄²⁻ → Ba²⁺ → white precipitate (BaSO₄)\n" +
            "• CO₃²⁻ → dilute acid → CO₂ (turns limewater milky)\n" +
            "• NO₃⁻ → Brown ring test (FeSO₄ + conc. H₂SO₄)\n" +
            "• Cl⁻ → AgNO₃ → white precipitate (AgCl)",
          bodyAm:
            "Flame: Li red, Na yellow, K lilac, Ca brick-red, Ba green.\n" +
            "Cu blue, Fe²⁺ green, Fe³⁺ reddish-brown.\n" +
            "SO₄²⁻ Ba²⁺፣ CO₃²⁻ acid, NO₃⁻ brown ring።",
        },
        {
          id: "n5-6",
          title: "Common salts & uses",
          titleAm: "የተለመዱ ጨዎችና አጠቃቀም",
          body:
            "| Salt | Uses |\n" +
            "|------|------|\n" +
            "| NaCl | Food, ORS, soap, Cl₂ |\n" +
            "| NH₄NO₃ | Fertilizer, explosives |\n" +
            "| CuSO₄ | Bordeaux mixture (fungicide), electroplating |\n" +
            "| FeCl₃ | Water treatment, circuit etching |\n" +
            "| KNO₃ | Gunpowder, fertilizer |\n" +
            "| CaSO₄·2H₂O (gypsum) | Plaster, bone casts |\n" +
            "| BaSO₄ | Barium meal (X-ray), white pigment |\n" +
            "| FeSO₄ | Iron supplement (anemia) |",
          bodyAm:
            "NaCl = food።\n" +
            "NH₄NO₃ = fertilizer።\n" +
            "CuSO₄ = fungicide።\n" +
            "BaSO₄ = barium meal።",
        },
        {
          id: "n5-7",
          title: "Fertilizers (NPK)",
          titleAm: "ማዳበሪያ",
          body:
            "PLANT NUTRIENTS:\n" +
            "• MACRONUTRIENTS (large amounts):\n" +
            "  N, P, K, Ca, Mg, S, C, H, O\n" +
            "• MICRONUTRIENTS (trace):\n" +
            "  Fe, Mn, Zn, Cu, B, Mo, Cl, Co\n\n" +
            "PRIMARY NUTRIENTS: N, P, K\n\n" +
            "ROLES:\n" +
            "• N — proteins, chlorophyll (deep green)\n" +
            "• P — DNA, ATP, roots, flowering\n" +
            "• K — enzyme activity, water balance, cell turgidity\n\n" +
            "FERTILIZER TYPES:\n" +
            "• ORGANIC (natural): manure, compost\n" +
            "• SYNTHETIC (artificial): made industrially\n\n" +
            "NPK fertilizers:\n" +
            "• Complete fertilizer = has N+P+K\n" +
            "• Grade 10:10:10 = 10% each of N, P, K\n" +
            "• Examples: NH₄NO₃, (NH₄)₂SO₄, DAP, KNO₃\n\n" +
            "PESTICIDES/HERBICIDES:\n" +
            "• Pesticide kills pests\n" +
            "• Herbicide kills weeds\n" +
            "• Examples: CuSO₄, NaCl, NaAsO₂, NaClO₃",
          bodyAm:
            "NPK = nitrogen, phosphorus, potassium።\n" +
            "N = አረንጓዴ።\n" +
            "P = ሥር፣ አበባ።\n" +
            "K = turgidity።\n" +
            "Grade 10:10:10።",
        },
        {
          id: "n5-8",
          title: "⚠ Remember trap — Salts",
          titleAm: "⚠ አትርሳ — ጨዎች",
          body:
            "• Normal salt = all H⁺ replaced.\n" +
            "• Acidic salt = partial H⁺ replaced (NaHSO₄).\n" +
            "• Basic salt = OH⁻ remains (Al(OH)₂Cl).\n" +
            "• Hygroscopic = stays solid; deliquescent = dissolves; efflorescent = loses water.\n" +
            "• Soluble salts → ions → conduct.\n" +
            "• Nitrates of Na, K → nitrite + O₂ (not oxide).\n" +
            "• Li behaves like Group 2A for carbonates/nitrates.\n" +
            "• Flame: Na yellow, K lilac, Ba green.\n" +
            "• CO₃²⁻ test: CO₂ gas turns limewater milky.\n" +
            "• NO₃⁻ test: brown ring.",
          bodyAm:
            "Normal, acidic, basic።\n" +
            "Hygroscopic/deliquescent/efflorescent።\n" +
            "Flame: Na yellow, K lilac።",
        },
      ],
    },

    {
      id: "nRef",
      title: "Reference Sheet — Unit 3",
      titleAm: "የማጣቀሻ ሉህ",
      body:
        "OXIDE TYPES:\n" +
        "• Acidic: CO₂, SO₂, N₂O₅ (nonmetal → acid)\n" +
        "• Basic: Na₂O, CaO, CuO (metal → base)\n" +
        "• Amphoteric: Al₂O₃, ZnO, PbO (both)\n" +
        "• Neutral: CO, NO, N₂O, H₂O (neither)\n" +
        "• Peroxide: H₂O₂, Na₂O₂ (O-O link, O = −1)\n\n" +
        "ACID STRONG: HCl, HBr, HI, HNO₃, H₂SO₄, HClO₄\n" +
        "ACID WEAK: CH₃COOH, H₂CO₃, H₂S, HF, HNO₂, H₃PO₄\n" +
        "BASE STRONG: NaOH, KOH, LiOH, Ba(OH)₂\n" +
        "BASE WEAK: NH₃, Mg(OH)₂, Ca(OH)₂\n\n" +
        "pH = −log[H⁺]; pH + pOH = 14\n" +
        "Kw = [H⁺][OH⁻] = 1.0 × 10⁻¹⁴\n\n" +
        "INDICATORS:\n" +
        "• Litmus: red in acid, blue in base\n" +
        "• Phenolphthalein: colorless in acid, pink in base\n" +
        "• Methyl orange: red in acid, yellow in base\n\n" +
        "FLAME TESTS:\n" +
        "• Li red, Na yellow, K lilac\n" +
        "• Ca brick-red, Sr crimson, Ba apple green\n\n" +
        "SALT TESTS:\n" +
        "• SO₄²⁻ → Ba²⁺ → white ppt\n" +
        "• CO₃²⁻ → acid → CO₂ (limewater milky)\n" +
        "• NO₃⁻ → brown ring\n" +
        "• Cl⁻ → Ag⁺ → white ppt\n\n" +
        "SALT TYPES:\n" +
        "• Normal: NaCl, KNO₃\n" +
        "• Acidic: NaHSO₄, NaHCO₃\n" +
        "• Basic: Al(OH)₂Cl\n\n" +
        "WATER ABSORPTION:\n" +
        "• Hygroscopic: absorbs, stays solid\n" +
        "• Deliquescent: absorbs, dissolves\n" +
        "• Efflorescent: loses water",
      bodyAm:
        "ሰንጠረዡን አስታውስ።",
    },

    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 3",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1) Acidic = nonmetal oxide; Basic = metal oxide.\n" +
        "2) Al₂O₃ and ZnO are AMPHOTERIC.\n" +
        "3) CO and NO are NEUTRAL; CO₂ is ACIDIC.\n" +
        "4) Peroxide has O-O bond; O = −1.\n" +
        "5) Arrhenius acid = H⁺ in water.\n" +
        "6) Arrhenius base = OH⁻ in water.\n" +
        "7) NH₃ is a BASE even though it has no OH⁻.\n" +
        "8) CH₃COOH is MONOPROTIC (only COOH H).\n" +
        "9) Strong ≠ concentrated (different concepts).\n" +
        "10) pH = −log[H⁺]; pH + pOH = 14.\n" +
        "11) Blue litmus → red (acid).\n" +
        "12) Red litmus → blue (base).\n" +
        "13) Phenolphthalein → pink in base.\n" +
        "14) Add acid to water (not water to acid).\n" +
        "15) NaCl + H₂SO₄ → NaHSO₄ + HCl (HCl volatile).\n" +
        "16) Acidic salt: NaHSO₄, NaHCO₃.\n" +
        "17) Hygroscopic vs deliquescent vs efflorescent.\n" +
        "18) Group 1A nitrates → nitrite + O₂ (not oxide).\n" +
        "19) Flame: Na yellow, K lilac, Ba green.\n" +
        "20) Brown ring test = NO₃⁻.\n" +
        "21) Limewater milky = CO₂ = CO₃²⁻ test.\n" +
        "22) NPK = nitrogen, phosphorus, potassium.\n" +
        "23) Grade 10:10:10 = 10% each.\n" +
        "24) Cu²⁺ + OH⁻ → blue precipitate.",
      bodyAm:
        "ወጥመዶቹን ሁሉ አስታውስ።",
    },
  ],

  questions: [
    // EASY MCQ Q1-Q40
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Which is an inorganic compound?", options: ["Methane (CH₄)", "Ethanol (C₂H₅OH)", "NaCl", "Glucose (C₆H₁₂O₆)"], answer: "2", explanation: "NaCl is inorganic." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Oxides are binary compounds of:", options: ["H and O", "O and another element", "C and O", "N and O"], answer: "1", explanation: "O + another element." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Which is an acidic oxide?", options: ["Na₂O", "CaO", "CO₂", "MgO"], answer: "2", explanation: "CO₂ = acidic (nonmetal)." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Which is a basic oxide?", options: ["CO₂", "SO₂", "CaO", "N₂O₅"], answer: "2", explanation: "CaO = basic (metal)." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Which is an amphoteric oxide?", options: ["Na₂O", "CaO", "Al₂O₃", "CO₂"], answer: "2", explanation: "Al₂O₃ amphoteric." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Which is a neutral oxide?", options: ["CO₂", "SO₂", "CO", "Na₂O"], answer: "2", explanation: "CO neutral." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Which is a peroxide?", options: ["H₂O", "Na₂O", "H₂O₂", "CO₂"], answer: "2", explanation: "H₂O₂ = peroxide (O-O)." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Acidic oxide + water →", options: ["Base", "Salt", "Acid", "Neutral"], answer: "2", explanation: "Forms acid." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Basic oxide + water →", options: ["Acid", "Base", "Salt", "Gas"], answer: "1", explanation: "Forms base." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Arrhenius acid produces which ion in water?", options: ["OH⁻", "H⁺", "Na⁺", "Cl⁻"], answer: "1", explanation: "H⁺ (or H₃O⁺)." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Arrhenius base produces which ion in water?", options: ["H⁺", "OH⁻", "Na⁺", "Cl⁻"], answer: "1", explanation: "OH⁻." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Which is a monoprotic acid?", options: ["H₂SO₄", "H₃PO₄", "HCl", "H₂CO₃"], answer: "2", explanation: "HCl = 1 H⁺." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Which is a diprotic acid?", options: ["HCl", "H₂SO₄", "H₃PO₄", "HNO₃"], answer: "1", explanation: "H₂SO₄ = 2 H⁺." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Which is a triprotic acid?", options: ["HCl", "H₂SO₄", "H₃PO₄", "HNO₃"], answer: "2", explanation: "H₃PO₄ = 3 H⁺." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Which is a strong acid?", options: ["CH₃COOH", "H₂CO₃", "HCl", "H₂S"], answer: "2", explanation: "HCl strong." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Which is a weak acid?", options: ["HCl", "HNO₃", "H₂SO₄", "CH₃COOH"], answer: "3", explanation: "Acetic acid weak." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "pH = −log[H⁺]. pH of 0.01 M HCl =", options: ["1", "2", "3", "4"], answer: "1", explanation: "−log(0.01) = 2." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "pH + pOH =", options: ["7", "10", "14", "1"], answer: "2", explanation: "=14 at 25°C." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "Acid turns blue litmus:", options: ["Blue", "Red", "Green", "No change"], answer: "1", explanation: "Blue → red." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "Base turns red litmus:", options: ["Blue", "Red", "Green", "Yellow"], answer: "0", explanation: "Red → blue." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Phenolphthalein in base is:", options: ["Colorless", "Pink", "Yellow", "Blue"], answer: "1", explanation: "Pink in base." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "Which is a strong base?", options: ["NH₃", "Mg(OH)₂", "NaOH", "Al(OH)₃"], answer: "2", explanation: "NaOH strong." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "Which is a weak base?", options: ["NaOH", "KOH", "LiOH", "NH₃"], answer: "3", explanation: "NH₃ weak." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "pOH = −log[OH⁻]. pOH of 0.001 M NaOH =", options: ["1", "2", "3", "4"], answer: "2", explanation: "−log(0.001) = 3." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "Salt from complete neutralization is:", options: ["Acidic", "Basic", "Normal", "Amphoteric"], answer: "2", explanation: "Normal salt." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "NaHSO₄ is which type of salt?", options: ["Normal", "Acidic", "Basic", "Amphoteric"], answer: "1", explanation: "Acidic salt (partial H⁺)." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Which salt is INSOLUBLE?", options: ["NaCl", "KNO₃", "AgCl", "NH₄Cl"], answer: "2", explanation: "AgCl insoluble." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Which salt is SOLUBLE?", options: ["AgCl", "BaSO₄", "PbCO₃", "NaCl"], answer: "3", explanation: "NaCl soluble." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Hygroscopic salt:", options: ["Dissolves in water it absorbs", "Absorbs water but stays solid", "Loses water", "Reacts with water"], answer: "1", explanation: "Stays solid." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "Deliquescent salt:", options: ["Dissolves in water it absorbs", "Absorbs but stays solid", "Loses water", "Reacts"], answer: "0", explanation: "Forms solution." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "Efflorescent salt:", options: ["Absorbs water", "Dissolves", "Loses water of crystallization", "Reacts"], answer: "2", explanation: "Loses water." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "Na⁺ flame test color:", options: ["Red", "Yellow", "Lilac", "Green"], answer: "1", explanation: "Yellow." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "K⁺ flame test color:", options: ["Red", "Yellow", "Lilac", "Green"], answer: "2", explanation: "Lilac." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "Ba²⁺ flame test color:", options: ["Red", "Yellow", "Lilac", "Apple green"], answer: "3", explanation: "Apple green." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "Cu²⁺ precipitate color with OH⁻:", options: ["Green", "Blue", "Red-brown", "White"], answer: "1", explanation: "Blue." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "SO₄²⁻ test uses which reagent?", options: ["AgNO₃", "Ba²⁺ (BaCl₂)", "H₂SO₄", "Limewater"], answer: "1", explanation: "Ba²⁺ → BaSO₄ white ppt." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "CO₃²⁻ test uses:", options: ["Ba²⁺", "Acid → CO₂ (limewater milky)", "AgNO₃", "NaOH"], answer: "1", explanation: "Acid + CO₃²⁻ → CO₂." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "NO₃⁻ test is called:", options: ["Flame test", "Brown ring test", "Limewater test", "AgCl test"], answer: "1", explanation: "Brown ring." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "NPK fertilizer stands for:", options: ["Nitrogen, Phosphorus, Potassium", "Nitrogen, Potassium, Phosphorus", "Sodium, Phosphorus, Potassium", "Nitrogen, Potassium, Calcium"], answer: "0", explanation: "N, P, K." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "Grade 10:10:10 fertilizer has:", options: ["10% N, 10% P, 10% K", "10% each element", "100% N", "No NPK"], answer: "0", explanation: "10% each N, P, K." },

    // MEDIUM MCQ Q41-Q80
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Reaction CO₂ + H₂O → H₂CO₃ shows CO₂ is:", options: ["Basic", "Acidic", "Amphoteric", "Neutral"], answer: "1", explanation: "Forms acid." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Reaction Na₂O + H₂O → 2NaOH shows Na₂O is:", options: ["Basic", "Acidic", "Amphoteric", "Neutral"], answer: "0", explanation: "Forms base." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O and Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O. Al₂O₃ is:", options: ["Acidic", "Basic", "Amphoteric", "Neutral"], answer: "2", explanation: "Amphoteric (reacts with both)." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "SO₃ + H₂O →", options: ["H₂SO₃", "H₂SO₄", "SO₂", "H₂S"], answer: "1", explanation: "SO₃ + H₂O → H₂SO₄." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "CO₂ + Na₂O →", options: ["NaHCO₃", "Na₂CO₃", "NaOH", "Na"], answer: "1", explanation: "Acidic + basic oxide → salt." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "CaO + 2HCl →", options: ["CaCl₂ + H₂O", "Ca + HClO", "CaCl + H₂", "CaH₂ + Cl₂"], answer: "0", explanation: "Basic oxide + acid → salt + water." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "CH₃COOH is monoprotic because:", options: ["It has one H", "Only the COOH H is ionizable", "It has 4 H but only 1 acidic", "Both b and c"], answer: "3", explanation: "Only COOH H ionizes." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "H₂SO₄ + 2NaOH →", options: ["NaHSO₄ + H₂O", "Na₂SO₄ + 2H₂O", "Na₂S + O₂", "NaOH + H₂"], answer: "1", explanation: "Complete neutralization." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "H₂SO₄ + NaOH →", options: ["NaHSO₄ + H₂O", "Na₂SO₄ + H₂O", "Na₂SO₄ + 2H₂O", "NaOH + H₂"], answer: "0", explanation: "Acidic salt (partial)." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "In NH₃ + H₂O ⇌ NH₄⁺ + OH⁻, NH₃ is:", options: ["Acid", "Base", "Salt", "Neutral"], answer: "1", explanation: "Produces OH⁻ → base." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "Kw = [H⁺][OH⁻] =", options: ["1.0 × 10⁻⁷", "1.0 × 10⁻¹⁴", "1.0 × 10⁻¹⁰", "1.0 × 10⁻⁵"], answer: "1", explanation: "1.0 × 10⁻¹⁴." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "pH of 0.001 M HCl =", options: ["1", "2", "3", "4"], answer: "2", explanation: "−log(0.001) = 3." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "pH of 0.1 M NaOH =", options: ["1", "7", "13", "11"], answer: "2", explanation: "[OH⁻] = 0.1 → pOH = 1 → pH = 13." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "pH of 0.01 M NaOH =", options: ["12", "2", "7", "10"], answer: "0", explanation: "pOH = 2 → pH = 12." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "If pH = 4, [H⁺] =", options: ["10⁻⁴ M", "10⁴ M", "4 M", "10⁻⁷ M"], answer: "0", explanation: "[H⁺] = 10⁻⁴ M." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "If pH = 9, [H⁺] =", options: ["10⁻⁹ M", "9 M", "10⁹ M", "10⁻⁵ M"], answer: "0", explanation: "[H⁺] = 10⁻⁹ M." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "pH 3 vs pH 4 — how much more acidic?", options: ["Same", "2×", "10×", "100×"], answer: "2", explanation: "10× (log scale)." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Which indicator is pink in base?", options: ["Litmus", "Phenolphthalein", "Methyl orange", "Universal"], answer: "1", explanation: "Phenolphthalein." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Which indicator turns yellow in base?", options: ["Litmus", "Phenolphthalein", "Methyl orange", "None"], answer: "2", explanation: "Methyl orange → yellow." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "Acid + active metal →", options: ["Salt + H₂", "Salt + H₂O", "Salt + CO₂", "Salt + OH⁻"], answer: "0", explanation: "Zn + 2HCl → ZnCl₂ + H₂." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "Acid + carbonate →", options: ["Salt + H₂", "Salt + H₂O + CO₂", "Salt + H₂O", "Base"], answer: "1", explanation: "CO₂ evolved." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Acid + base →", options: ["Salt + H₂O", "Salt + H₂", "Salt + CO₂", "Base + H₂O"], answer: "0", explanation: "Neutralization." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "CaCO₃ + 2HCl →", options: ["CaCl₂ + H₂O + CO₂", "CaCl₂ + H₂", "CaHCl + CO₂", "CaO + HCl"], answer: "0", explanation: "CO₂ + H₂O + salt." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "NaCl + H₂SO₄ →", options: ["Na₂SO₄ + HCl", "NaHSO₄ + HCl", "NaOH + SO₂", "Na₂S + HCl"], answer: "1", explanation: "NaHSO₄ + HCl (volatile acid)." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Which salt is acidic?", options: ["NaCl", "KNO₃", "NaHCO₃", "Na₂CO₃"], answer: "2", explanation: "NaHCO₃ acidic salt." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "Which is a basic salt?", options: ["Al(OH)₂Cl", "NaCl", "NaHSO₄", "KNO₃"], answer: "0", explanation: "Contains OH⁻." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "Ca(OH)₂ + Na₂CO₃ →", options: ["NaHCO₃ + CaO", "2NaOH + CaCO₃↓", "CaNa + HCO₃", "CaCO₃ + NaOH"], answer: "1", explanation: "Double displacement, CaCO₃ precipitates." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "BaCl₂ + Na₂SO₄ →", options: ["BaSO₄↓ + 2NaCl", "BaNa + Cl₂", "BaO + NaCl", "BaCl₂ + NaSO₄"], answer: "0", explanation: "BaSO₄ insoluble." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "AgNO₃ + NaCl →", options: ["AgCl↓ + NaNO₃", "AgCl + NaOH", "AgNa + NO₃", "AgNO + NaCl"], answer: "0", explanation: "AgCl precipitates." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "Which salt is deliquescent?", options: ["NaCl", "CaCl₂", "CaCO₃", "BaSO₄"], answer: "1", explanation: "CaCl₂ absorbs water → dissolves." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Which is efflorescent?", options: ["Na₂CO₃·10H₂O", "CaCl₂", "NaCl", "KNO₃"], answer: "0", explanation: "Loses water of crystallization." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "CaCO₃ → CaO + CO₂ is:", options: ["Double displacement", "Thermal decomposition", "Single displacement", "Combination"], answer: "1", explanation: "Decomposition on heating." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "2NaNO₃ → 2NaNO₂ + O₂ is:", options: ["Nitrite + O₂ from nitrate", "Oxide + NO₂", "Nitrogen + O₂", "No reaction"], answer: "0", explanation: "Na/K nitrates → nitrite + O₂." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "2Mg(NO₃)₂ → 2MgO + 4NO₂ + O₂ is:", options: ["Nitrite", "Oxide + NO₂ + O₂", "Nitrogen only", "Mg + O₂"], answer: "1", explanation: "Group 2A nitrates → oxide + NO₂ + O₂." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Li₂CO₃ → Li₂O + CO₂ is like which group?", options: ["Group 1A", "Group 2A", "Group 3A", "Transition"], answer: "1", explanation: "Li behaves like Group 2A for decomposition." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "Fe³⁺ precipitate color with NaOH:", options: ["Green", "Blue", "Reddish-brown", "White"], answer: "2", explanation: "Fe³⁺ → reddish-brown." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "Fe²⁺ precipitate color with NaOH:", options: ["Green", "Blue", "Reddish-brown", "White"], answer: "0", explanation: "Fe²⁺ → green." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "Cl⁻ test uses:", options: ["AgNO₃ → white ppt", "Ba²⁺ → white ppt", "Acid → CO₂", "FeSO₄ → brown ring"], answer: "0", explanation: "AgCl white precipitate." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "Which is NOT a macronutrient for plants?", options: ["N", "P", "K", "Cu"], answer: "3", explanation: "Cu is micronutrient." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "Which element gives plants deep green color?", options: ["N", "P", "K", "Ca"], answer: "0", explanation: "N → chlorophyll." },

    // HARD MCQ Q81-Q100
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Ba²⁺ + SO₄²⁻ → BaSO₄↓ is which type?", options: ["Combination", "Decomposition", "Double displacement", "Redox"], answer: "2", explanation: "Double displacement." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "In the reaction: Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O, Al₂O₃ acts as:", options: ["Acid", "Base", "Amphoteric", "Salt"], answer: "2", explanation: "Amphoteric." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "When Al₂O₃ reacts with HCl, Al₂O₃ acts as:", options: ["Acid", "Base", "Salt", "Neutral"], answer: "1", explanation: "Acts as base with acid." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "For pH = 2 and pH = 5, ratio of [H⁺] is:", options: ["3:1", "10:1", "100:1", "1000:1"], answer: "3", explanation: "10³ = 1000." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "pH 0.001 M H₂SO₄ (assume complete dissociation):", options: ["1", "2", "3", "4"], answer: "1", explanation: "[H⁺] = 0.002 = 2×10⁻³ → pH ≈ 2.7. Closest = 2." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "pH of 0.05 M H₂SO₄ (complete):", options: ["0.5", "1", "2", "3"], answer: "1", explanation: "[H⁺] = 0.1 M → pH = 1." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "Which salt is hygroscopic but NOT deliquescent?", options: ["CaCl₂", "NaCl", "Anhydrous CuSO₄", "FeCl₃"], answer: "2", explanation: "CuSO₄ absorbs water, stays solid." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "Which is exothermic: dissolving of:", options: ["NH₄NO₃", "NaOH", "NH₄Cl", "KNO₃"], answer: "1", explanation: "NaOH releases heat." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "Which is endothermic dissolution?", options: ["NaOH", "CaCl₂", "NH₄NO₃", "MgSO₄"], answer: "2", explanation: "NH₄NO₃ absorbs heat → cold." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "Which is amphoteric hydroxide?", options: ["NaOH", "KOH", "Al(OH)₃", "Ca(OH)₂"], answer: "2", explanation: "Al(OH)₃ amphoteric." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "CuCO₃ → CuO + CO₂ is:", options: ["Combination", "Decomposition", "Single displacement", "Double displacement"], answer: "1", explanation: "Thermal decomposition." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "Which salt produces NH₃ when warmed with NaOH?", options: ["NaCl", "NH₄Cl", "KNO₃", "CuSO₄"], answer: "1", explanation: "NH₄⁺ + OH⁻ → NH₃." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Grade 20:10:10 fertilizer has:", options: ["20% P, 10% N, 10% K", "20% N, 10% P, 10% K", "20% K", "20% each"], answer: "1", explanation: "20% N, 10% P, 10% K." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Which reagent distinguishes CO₃²⁻ from SO₄²⁻?", options: ["Acid (CO₃²⁻ gives CO₂, SO₄²⁻ no gas)", "Ba²⁺ (both give ppt)", "AgNO₃ (both give ppt)", "Water"], answer: "0", explanation: "Acid: CO₃²⁻ → CO₂, SO₄²⁻ → no gas." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "A solution has pH = 10. What is pOH?", options: ["4", "10", "14", "7"], answer: "0", explanation: "14 − 10 = 4." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "A solution has [OH⁻] = 10⁻³ M. pH =", options: ["3", "7", "11", "14"], answer: "2", explanation: "pOH = 3 → pH = 11." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "Neutral solution at 25°C has:", options: ["pH = 0", "pH = 7", "pH = 14", "pH > 7"], answer: "1", explanation: "pH 7." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "Which is a NON-electrolyte?", options: ["NaCl", "HCl", "Sugar", "NaOH"], answer: "2", explanation: "Sugar doesn't ionize." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "If soil is too acidic, farmer adds:", options: ["Lemon juice", "CaO or Ca(OH)₂", "Vinegar", "HCl"], answer: "1", explanation: "Basic oxide neutralizes acid." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "Which salt is used in barium meal for X-ray?", options: ["BaCl₂", "BaSO₄", "BaCO₃", "BaO"], answer: "1", explanation: "BaSO₄ (insoluble, non-toxic)." },

    // SHORT ANSWER Q101-Q120
    { id: "q101", type: "short", difficulty: "easy", stem: "Classify oxides into 5 types with examples.", answer: "1) ACIDIC: CO₂, SO₂, SO₃, N₂O₅\n2) BASIC: Na₂O, CaO, MgO, CuO\n3) AMPHOTERIC: Al₂O₃, ZnO, PbO\n4) NEUTRAL: CO, NO, N₂O, H₂O\n5) PEROXIDES: H₂O₂, Na₂O₂, CaO₂", explanation: "5 types." },
    { id: "q102", type: "short", difficulty: "easy", stem: "Define Arrhenius acid and base.", answer: "ARRHENIUS ACID: substance that produces H⁺ (or H₃O⁺) ions in aqueous solution.\n• Example: HCl → H⁺ + Cl⁻\n\nARRHENIUS BASE: substance that produces OH⁻ ions in aqueous solution.\n• Example: NaOH → Na⁺ + OH⁻", explanation: "H⁺ vs OH⁻." },
    { id: "q103", type: "short", difficulty: "easy", stem: "List the 3 types of acid classification.", answer: "1) BY H⁺ COUNT:\n• Monoprotic (1 H⁺): HCl, HNO₃, CH₃COOH\n• Diprotic (2 H⁺): H₂SO₄, H₂CO₃\n• Triprotic (3 H⁺): H₃PO₄\n\n2) BY COMPOSITION:\n• Binary (H + nonmetal): HCl, H₂S\n• Ternary/oxy-acid (H + nonmetal + O): H₂SO₄, HNO₃\n\n3) BY STRENGTH:\n• Strong: complete dissociation (HCl, HNO₃, H₂SO₄)\n• Weak: partial (CH₃COOH, H₂CO₃)", explanation: "H⁺, composition, strength." },
    { id: "q104", type: "short", difficulty: "easy", stem: "List the 4 common indicators and their colors in acid vs base.", answer: "1) LITMUS: red in acid, blue in base\n2) PHENOLPHTHALEIN: colorless in acid, pink in base\n3) METHYL ORANGE: red in acid, yellow in base\n4) UNIVERSAL: red/orange in acid, blue/purple in base", explanation: "Litmus, phenolphthalein, methyl orange, universal." },
    { id: "q105", type: "short", difficulty: "medium", stem: "Calculate pH of 0.001 M HCl.", answer: "HCl is a strong acid — complete dissociation.\n[H⁺] = 0.001 M = 1 × 10⁻³ M\npH = −log(10⁻³) = 3\n\nAnswer: pH = 3", explanation: "pH = 3." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Calculate pH of 0.01 M NaOH.", answer: "[OH⁻] = 0.01 M = 10⁻² M\npOH = −log(10⁻²) = 2\npH = 14 − 2 = 12\n\nAnswer: pH = 12", explanation: "pH = 12." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Calculate pH of 0.05 M H₂SO₄ (complete).", answer: "H₂SO₄ → 2H⁺ + SO₄²⁻\n[H⁺] = 2 × 0.05 = 0.1 M = 10⁻¹ M\npH = −log(10⁻¹) = 1\n\nAnswer: pH = 1", explanation: "pH = 1." },
    { id: "q108", type: "short", difficulty: "medium", stem: "Classify salts into 3 types with examples.", answer: "1) NORMAL SALT: all H⁺ replaced.\n• NaCl, KNO₃, Na₂SO₄, CaCl₂\n\n2) ACIDIC SALT: partial H⁺ replaced.\n• NaHSO₄, NaHCO₃, NaH₂PO₄\n\n3) BASIC SALT: contains OH⁻.\n• Al(OH)₂Cl, Zn(OH)NO₃", explanation: "3 types." },
    { id: "q109", type: "short", difficulty: "medium", stem: "What are 3 methods to prepare acids?", answer: "1) ACIDIC OXIDE + WATER:\nSO₃ + H₂O → H₂SO₄\nCO₂ + H₂O → H₂CO₃\n\n2) NONMETAL + HYDROGEN:\nH₂ + Cl₂ → 2HCl\nH₂ + S → H₂S\n\n3) NONVOLATILE ACID + SALT (produces volatile acid):\nNaCl + H₂SO₄ → NaHSO₄ + HCl↑\nNaNO₃ + H₂SO₄ → NaHSO₄ + HNO₃↑", explanation: "3 methods." },
    { id: "q110", type: "short", difficulty: "medium", stem: "What are 3 methods to prepare bases?", answer: "1) ACTIVE METAL + WATER:\n2Na + 2H₂O → 2NaOH + H₂\nCa + 2H₂O → Ca(OH)₂ + H₂\n\n2) METAL OXIDE + WATER:\nNa₂O + H₂O → 2NaOH\nCaO + H₂O → Ca(OH)₂\n\n3) DOUBLE DISPLACEMENT:\nBa(OH)₂ + K₂SO₄ → 2KOH + BaSO₄↓\nCa(OH)₂ + Na₂CO₃ → 2NaOH + CaCO₃↓", explanation: "3 methods." },
    { id: "q111", type: "short", difficulty: "medium", stem: "What are 4 methods to prepare soluble salts?", answer: "1) METAL + ACID:\nMg + 2HCl → MgCl₂ + H₂\n\n2) ACID + BASE (neutralization):\nHCl + NaOH → NaCl + H₂O\n\n3) ACID + METAL OXIDE:\nCuO + H₂SO₄ → CuSO₄ + H₂O\n\n4) ACID + CARBONATE:\nNa₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂", explanation: "4 methods." },
    { id: "q112", type: "short", difficulty: "medium", stem: "Differentiate hygroscopic, deliquescent, and efflorescent.", answer: "HYGROSCOPIC:\n• Absorbs water from atmosphere\n• Stays SOLID\n• Example: anhydrous CuSO₄\n\nDELIQUESCENT:\n• Absorbs water from atmosphere\n• DISSOLVES in the absorbed water\n• Example: CaCl₂, FeCl₃\n\nEFFLORESCENT:\n• LOSES water of crystallization to atmosphere\n• Example: Na₂CO₃·10H₂O", explanation: "Absorb stays solid / absorb dissolves / lose water." },
    { id: "q113", type: "short", difficulty: "medium", stem: "Describe flame test colors for Na, K, Ca, Ba.", answer: "• Na⁺ = YELLOW\n• K⁺ = LILAC (pale violet)\n• Ca²⁺ = BRICK-RED\n• Ba²⁺ = APPLE GREEN\n\nOther:\n• Li⁺ = RED\n• Sr²⁺ = CRIMSON RED", explanation: "Na yellow, K lilac, Ca brick-red, Ba green." },
    { id: "q114", type: "short", difficulty: "medium", stem: "Describe tests for SO₄²⁻, CO₃²⁻, and Cl⁻.", answer: "SO₄²⁻ (sulfate):\n• Add BaCl₂ + dilute HCl → WHITE precipitate (BaSO₄)\n\nCO₃²⁻ (carbonate):\n• Add dilute acid → CO₂ gas evolves\n• Bubble CO₂ through limewater → turns MILKY\n\nCl⁻ (chloride):\n• Add AgNO₃ → WHITE precipitate (AgCl)", explanation: "Ba²⁺, acid, Ag⁺." },
    { id: "q115", type: "short", difficulty: "medium", stem: "What is the difference between strong and concentrated acids?", answer: "STRONG ACID:\n• Degree of ionization\n• Dissociates COMPLETELY (HCl, HNO₃, H₂SO₄)\n• Produces many H⁺ ions\n\nCONCENTRATED ACID:\n• Amount of acid per volume\n• LARGE amount of acid in solution\n• Not directly related to strength\n\nEXAMPLE:\n• 0.001 M HCl = dilute but STRONG\n• 17 M CH₃COOH = concentrated but WEAK", explanation: "Strong = ionization; concentrated = amount." },
    { id: "q116", type: "short", difficulty: "hard", stem: "Explain why amphoteric oxides react with both acids and bases.", answer: "AMPHOTERIC OXIDES (Al₂O₃, ZnO):\n• Behave as BASES with acids:\n  Al₂O₃ + 6HCl → 2AlCl₃ + 3H₂O\n• Behave as ACIDS with bases:\n  Al₂O₃ + 2NaOH → 2NaAlO₂ + H₂O\n\nReason:\n• They have intermediate electronegativity\n• Can either donate or accept electron pairs\n• Position in periodic table: between basic metals and acidic nonmetals\n• Aluminum and zinc are on the metal/nonmetal boundary", explanation: "Intermediate character — react both ways." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Calculate pH of 0.0001 M NaOH.", answer: "[OH⁻] = 0.0001 M = 10⁻⁴ M\npOH = −log(10⁻⁴) = 4\npH = 14 − pOH = 14 − 4 = 10\n\nAnswer: pH = 10 (basic)", explanation: "pH = 10." },
    { id: "q118", type: "short", difficulty: "hard", stem: "What is the importance of NPK fertilizers?", answer: "NITROGEN (N):\n• Proteins, nucleic acids, chlorophyll\n• Deep green color\n\nPHOSPHORUS (P):\n• DNA, RNA, ATP\n• Root development, flowering, fruiting\n\nPOTASSIUM (K):\n• Enzyme activity, photosynthesis\n• Water balance, cell turgidity\n• Disease resistance\n\nALL THREE needed for healthy plant growth. Grade 10:10:10 = 10% of each.", explanation: "N = proteins/green; P = DNA/roots; K = enzymes." },
    { id: "q119", type: "short", difficulty: "hard", stem: "Why is NH₃ classified as a base even though it has no OH⁻ in its formula?", answer: "NH₃ reacts with water:\nNH₃ + H₂O ⇌ NH₄⁺ + OH⁻\n\n• Produces OH⁻ in solution\n• Therefore meets Arrhenius definition\n• Only about 1.3% ionizes (weak base)\n• Equilibrium favors unreacted NH₃\n\nOther bases like NaOH contain OH⁻ directly. NH₃ produces it indirectly through reaction with water.", explanation: "Produces OH⁻ via reaction with water." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Describe 3 uses of H₂SO₄, 2 uses of HCl, and 2 uses of HNO₃.", answer: "SULFURIC ACID (H₂SO₄):\n1) Fertilizer production\n2) Car battery electrolyte\n3) Petroleum refining\n(#1 industrial chemical)\n\nHYDROCHLORIC ACID (HCl):\n1) Stomach acid (digestion)\n2) Cleaning steel (pickling)\n\nNITRIC ACID (HNO₃):\n1) Explosives (TNT, nitroglycerine)\n2) Fertilizers (NH₄NO₃, KNO₃)", explanation: "Know at least 3 uses each." },
  ],
};