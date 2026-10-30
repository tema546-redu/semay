import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 CHEMISTRY — UNIT 1
// CHEMICAL REACTIONS AND STOICHIOMETRY
// Source: Grade 10 Chemistry Student Textbook (pp. 1–50)
// For: Abenezer (Abatu) — Grade 10
// ============================================================

export const g10ChemistryCh1: Chapter = {
  id: "ch1",
  number: 1,
  title: "Chemical Reactions and Stoichiometry",
  titleAm: "የኬሚካል ምላሾችና ስቶይኪዮሜትሪ",

  notes: [
    {
      id: "n0",
      title: "0. How to Master This Unit (Your Route to 100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, Unit 1 is CHEMICAL REACTIONS AND STOICHIOMETRY. It has SIX big halves:\n" +
        "1) CHEMICAL REACTIONS & PHYSICAL vs CHEMICAL CHANGES\n" +
        "2) CHEMICAL EQUATIONS + BALANCING (Inspection, LCM, Algebraic)\n" +
        "3) TYPES OF REACTIONS (combination, decomposition, single displacement, double displacement)\n" +
        "4) REDOX REACTIONS + OXIDATION NUMBERS + oxidizing/reducing agents\n" +
        "5) MOLE CONCEPT + MOLAR MASS + EMPIRICAL/MOLECULAR FORMULAS\n" +
        "6) STOICHIOMETRY (mass-mass, mass-volume, volume-volume, limiting reactant, % yield)\n\n" +
        "The WHOLE unit reduces to these must-know items:\n" +
        "• Signs of a chemical reaction (new substance, heat/light, color change, temperature change)\n" +
        "• State symbols: (s) solid, (l) liquid, (g) gas, (aq) aqueous\n" +
        "• Law of Conservation of Mass\n" +
        "• 4 reaction types + identification\n" +
        "• Oxidation rules (7 rules) + oxidation number calculation\n" +
        "• Avogadro's number = 6.022 × 10²³\n" +
        "• Mole formulas (n = m/M, N = n·N_A)\n" +
        "• Empirical formula from % composition\n" +
        "• Stoichiometry: mass-mass, mass-volume, volume-volume\n" +
        "• Limiting vs excess reactant\n" +
        "• Theoretical, actual, % yield",
      bodyAm:
        "አባቱ፣ ክፍል 1 የኬሚካል ምላሽና ስቶይኪዮሜትሪ ነው። ስድስት ትላልቅ ክፍሎች፡\n" +
        "1) ምላሽ + አካላዊ/ኬሚካላዊ ለውጥ\n" +
        "2) ቀመር + ማመጣጠን\n" +
        "3) የምላሽ ዓይነቶች\n" +
        "4) ሪዶክስ\n" +
        "5) ሞል\n" +
        "6) ስቶይኪዮሜትሪ",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 — Chemical reactions & equations",
          titleAm: "ደረጃ 1 — ምላሽና ቀመር",
          body:
            "PHYSICAL CHANGE — no new substance formed. Examples: melting ice, boiling water, dissolving salt.\n\n" +
            "CHEMICAL CHANGE — new substance formed. Signs:\n" +
            "• New substance (with new properties)\n" +
            "• Heat or light produced\n" +
            "• Color change\n" +
            "• Temperature change\n" +
            "• Bubbles (gas produced)\n" +
            "• Precipitate (solid formed)\n\n" +
            "CHEMICAL EQUATION:\n" +
            "Reactants → Products\n\n" +
            "STATE SYMBOLS:\n" +
            "• (s) = solid\n" +
            "• (l) = liquid\n" +
            "• (g) = gas\n" +
            "• (aq) = aqueous solution\n\n" +
            "LAW OF CONSERVATION OF MASS:\n" +
            "Mass of reactants = mass of products. So equations must be BALANCED.",
          bodyAm:
            "አካላዊ: አዲስ ንጥረ ነገር የለም።\n" +
            "ኬሚካላዊ: አዲስ ንጥረ ነገር አለ።\n" +
            "ቀመር: ምላሽ ሰጪዎች → ውጤቶች።\n" +
            "(s), (l), (g), (aq)\n" +
            "የግድ ማመጣጠን አለበት።",
        },
        {
          id: "n0-2",
          title: "Pass 2 — Types of reactions",
          titleAm: "ደረጃ 2 — የምላሽ ዓይነቶች",
          body:
            "1) COMBINATION (Synthesis): A + B → AB\n" +
            "   Example: 2Na + Cl₂ → 2NaCl\n\n" +
            "2) DECOMPOSITION: AB → A + B\n" +
            "   Example: 2HgO → 2Hg + O₂ (heat)\n\n" +
            "3) SINGLE DISPLACEMENT: A + BC → AC + B\n" +
            "   Example: Zn + CuSO₄ → ZnSO₄ + Cu\n" +
            "   (more reactive metal displaces less reactive)\n\n" +
            "4) DOUBLE DISPLACEMENT: AB + CD → AD + CB\n" +
            "   Example: AgNO₃ + NaCl → AgCl↓ + NaNO₃",
          bodyAm:
            "1) ማጣመር: A + B → AB\n" +
            "2) መበታተን: AB → A + B\n" +
            "3) ነጠላ መተካት: A + BC → AC + B\n" +
            "4) ድርብ መተካት: AB + CD → AD + CB",
        },
        {
          id: "n0-3",
          title: "Pass 3 — Redox",
          titleAm: "ደረጃ 3 — ሪዶክስ",
          body:
            "OXIDATION = loss of electrons (increase in oxidation number)\n" +
            "REDUCTION = gain of electrons (decrease in oxidation number)\n\n" +
            "OXIDATION NUMBER RULES:\n" +
            "• Free element = 0\n" +
            "• Monatomic ion = its charge\n" +
            "• O = −2 (except peroxides = −1, OF₂ = +2)\n" +
            "• H = +1 (except metal hydrides = −1)\n" +
            "• Sum in neutral compound = 0\n" +
            "• Sum in polyatomic ion = ion charge\n" +
            "• Group 1A = +1; Group 2A = +2\n\n" +
            "REDUCING AGENT = oxidized (loses electrons)\n" +
            "OXIDIZING AGENT = reduced (gains electrons)",
          bodyAm:
            "ኦክሲዴሽን = ኤሌክትሮን ማጣት።\n" +
            "ሪዳክሽን = ኤሌክትሮን ማግኘት።\n" +
            "O = −2; H = +1።",
        },
        {
          id: "n0-4",
          title: "Pass 4 — Mole concept",
          titleAm: "ደረጃ 4 — ሞል",
          body:
            "AVOGADRO'S NUMBER = 6.022 × 10²³\n" +
            "1 mole = 6.022 × 10²³ particles (atoms, molecules, ions)\n\n" +
            "MOLE FORMULAS:\n" +
            "• n = m / M (moles = mass ÷ molar mass)\n" +
            "• N = n × N_A (particles = moles × Avogadro)\n" +
            "• At STP: 1 mole gas = 22.4 L\n\n" +
            "MOLAR MASS = molecular/formula mass in grams.\n\n" +
            "EMPIRICAL FORMULA = simplest ratio of atoms.\n" +
            "MOLECULAR FORMULA = actual number of atoms.\n" +
            "n = molecular mass / empirical mass\n" +
            "Molecular formula = (empirical) × n",
          bodyAm:
            "N_A = 6.022×10²³።\n" +
            "n = m/M።\n" +
            "STP: 22.4 L።\n" +
            "Empirical × n = Molecular።",
        },
        {
          id: "n0-5",
          title: "Pass 5 — Stoichiometry",
          titleAm: "ደረጃ 5 — ስቶይኪዮሜትሪ",
          body:
            "STOICHIOMETRY = quantitative study of reactants and products.\n\n" +
            "STEPS for mass-mass:\n" +
            "1) Balance equation\n" +
            "2) Convert given to moles (if needed)\n" +
            "3) Use mole ratio from coefficients\n" +
            "4) Convert back to desired units\n\n" +
            "LIMITING REACTANT = consumed first; determines max product.\n" +
            "EXCESS = left over after reaction.\n\n" +
            "THEORETICAL YIELD = calculated yield (from limiting reactant).\n" +
            "ACTUAL YIELD = measured in experiment.\n" +
            "% YIELD = (actual / theoretical) × 100%",
          bodyAm:
            "ስቶይኪዮሜትሪ: መጠናዊ ጥናት።\n" +
            "Limiting = መጀመሪያ የሚያልቅ።\n" +
            "% yield = (actual/theoretical)×100።",
        },
        {
          id: "n0-6",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Know the four types of reactions with examples.\n" +
            "• Balancing: coefficients ONLY (never change subscripts).\n" +
            "• Oxidation numbers: practice ALL rules.\n" +
            "• Mole conversions: n = m/M, N = n × 6.022×10²³\n" +
            "• Empirical formula from % composition.\n" +
            "• Stoichiometry: ALWAYS go through moles.\n" +
            "• Limiting reactant = lower product yield.\n" +
            "• % yield = actual / theoretical × 100%.\n" +
            "• STP: 22.4 L per mole of gas.",
          bodyAm:
            "4 ምላሾች፣ ማመጣጠን፣ ኦክሲዴሽን ሕግ፣ ሞል፣ empirical፣ stoichiometry፣ limiting፣ % yield።",
        },
      ],
    },

    {
      id: "n1",
      title: "1.1 Introduction — Chemical Reactions",
      titleAm: "1.1 መግቢያ — የኬሚካል ምላሾች",
      body:
        "Abatu, a CHEMICAL REACTION is a process in which starting substances (REACTANTS) are converted into new substances (PRODUCTS) with different properties.",
      bodyAm:
        "ኬሚካላዊ ምላሽ = ምላሽ ሰጪዎች → ውጤቶች።",
      children: [
        {
          id: "n1-1",
          title: "Physical vs chemical change",
          titleAm: "አካላዊ vs ኬሚካላዊ ለውጥ",
          body:
            "PHYSICAL CHANGE:\n" +
            "• No new substance formed\n" +
            "• Composition stays the same\n" +
            "• Usually reversible\n" +
            "• Examples: melting ice, boiling water, dissolving sugar\n\n" +
            "CHEMICAL CHANGE:\n" +
            "• NEW substance formed\n" +
            "• Composition changes\n" +
            "• Usually irreversible\n" +
            "• Examples: burning wood, rusting iron, cooking food, milk → curd",
          bodyAm:
            "አካላዊ: አዲስ ንጥረ ነገር የለም።\n" +
            "ኬሚካላዊ: አዲስ ንጥረ ነገር አለ።",
        },
        {
          id: "n1-2",
          title: "Signs of chemical reaction",
          titleAm: "የኬሚካል ምላሽ ምልክቶች",
          body:
            "Signs of a CHEMICAL reaction:\n" +
            "1) NEW substance with different properties\n" +
            "2) HEAT or LIGHT produced\n" +
            "3) COLOR change\n" +
            "4) TEMPERATURE change\n" +
            "5) BUBBLES (gas produced)\n" +
            "6) PRECIPITATE (solid formed)\n" +
            "7) Odor change",
          bodyAm:
            "1) አዲስ ንጥረ ነገር\n" +
            "2) ሙቀት/ብርሃን\n" +
            "3) ቀለም\n" +
            "4) ሙቀት\n" +
            "5) አረፋ\n" +
            "6) ዝቃጭ\n" +
            "7) ሽታ",
        },
        {
          id: "n1-3",
          title: "⚠ Remember trap — Reaction basics",
          titleAm: "⚠ አትርሳ — መሠረታዊ",
          body:
            "• Physical change = no new substance.\n" +
            "• Chemical change = new substance formed.\n" +
            "• Signs: heat, light, color, temperature, gas, precipitate.\n" +
            "• Chemical reaction is a process; chemical equation is a shorthand.\n" +
            "• Reactants → Products (left to right).",
          bodyAm:
            "አካላዊ = አዲስ የለም።\n" +
            "ኬሚካላዊ = አዲስ አለ።\n" +
            "ምላሽ ሰጪ → ውጤት።",
        },
      ],
    },

    {
      id: "n2",
      title: "1.2 Chemical Equations & Balancing",
      titleAm: "1.2 የኬሚካል ቀመሮችና ማመጣጠን",
      body:
        "Abatu, a chemical equation is a shorthand representation of a reaction using chemical symbols and formulas. It MUST be balanced to obey the Law of Conservation of Mass.",
      bodyAm:
        "ቀመር = አጭር መግለጫ። ሚዛን ያስፈልጋል።",
      children: [
        {
          id: "n2-1",
          title: "Writing a chemical equation",
          titleAm: "ቀመር መጻፍ",
          body:
            "STEPS:\n" +
            "1) Write WORD equation: Hydrogen + Nitrogen → Ammonia\n" +
            "2) Replace with SYMBOLS: H₂ + N₂ → NH₃\n" +
            "3) BALANCE: 3H₂ + N₂ → 2NH₃\n" +
            "4) Add STATE symbols: (s), (l), (g), (aq)\n\n" +
            "Example:\n" +
            "CaCO₃(s) + H₂SO₄(l) → CaSO₄(s) + H₂O(l) + CO₂(g)",
          bodyAm:
            "1) በቃላት\n" +
            "2) በምልክቶች\n" +
            "3) ማመጣጠን\n" +
            "4) (s), (l), (g), (aq)",
        },
        {
          id: "n2-2",
          title: "State symbols",
          titleAm: "የሁኔታ ምልክቶች",
          body:
            "• (s) = solid\n" +
            "• (l) = liquid\n" +
            "• (g) = gas\n" +
            "• (aq) = aqueous solution (dissolved in water)",
          bodyAm:
            "(s) = ጠጣር\n" +
            "(l) = ፈሳሽ\n" +
            "(g) = ጋዝ\n" +
            "(aq) = በውሃ ውስጥ",
        },
        {
          id: "n2-3",
          title: "Diatomic elements (must memorize)",
          titleAm: "ዳያቶሚክ ንጥረ ነገሮች",
          body:
            "These SEVEN elements exist as DIATOMIC molecules (2 atoms):\n" +
            "H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂\n\n" +
            "Memory: 'BrINClHOF' (Br-In-Cl-H-O-F)\n\n" +
            "IMPORTANT: When writing equations, these MUST be written as diatomic!",
          bodyAm:
            "ሰባት ዳያቶሚክ: H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂።\n" +
            "BrINClHOF።",
        },
        {
          id: "n2-4",
          title: "Three balancing methods",
          titleAm: "ሦስት የማመጣጠን ዘዴዎች",
          body:
            "1) INSPECTION METHOD (trial & error):\n" +
            "• Balance one element at a time\n" +
            "• Adjust coefficients only\n" +
            "• Works for simple equations\n\n" +
            "2) LCM METHOD (Least Common Multiple):\n" +
            "• Use for equations with compound formulas\n" +
            "• Find LCM of total valencies\n" +
            "• Divide LCM by each valency to get coefficients\n\n" +
            "3) ALGEBRAIC METHOD:\n" +
            "• Assign variables a, b, c, d to coefficients\n" +
            "• Write equation for each element\n" +
            "• Solve system (a=1 typically)\n" +
            "• Multiply by denominator if fractional\n\n" +
            "KEY: Balance equations by changing COEFFICIENTS ONLY — NEVER change subscripts!",
          bodyAm:
            "1) Inspection: አንድ በአንድ።\n" +
            "2) LCM: ትንሹ የጋራ ብዜት።\n" +
            "3) Algebraic: ፊደል (a,b,c)።\n" +
            "Coefficients ብቻ ይቀየራሉ።",
        },
        {
          id: "n2-5",
          title: "Worked Example 1 — Balancing by inspection",
          titleAm: "ምሳሌ 1 — Inspection",
          body:
            "Problem: Fe + H₂O → Fe₃O₄ + H₂\n\n" +
            "Solution:\n" +
            "• Fe: 1 on left, 3 on right → put 3 before Fe\n" +
            "  3Fe + H₂O → Fe₃O₄ + H₂\n" +
            "• O: 1 on left, 4 on right → put 4 before H₂O\n" +
            "  3Fe + 4H₂O → Fe₃O₄ + H₂\n" +
            "• H: 8 on left, 2 on right → put 4 before H₂\n" +
            "  3Fe + 4H₂O → Fe₃O₄ + 4H₂ ✓\n\n" +
            "Check: Fe=3=3, O=4=4, H=8=8.",
          bodyAm:
            "3Fe + 4H₂O → Fe₃O₄ + 4H₂።",
        },
        {
          id: "n2-6",
          title: "Worked Example 2 — LCM method",
          titleAm: "ምሳሌ 2 — LCM",
          body:
            "Problem: Al + O₂ → Al₂O₃\n\n" +
            "Solution:\n" +
            "• Total valency of Al = 3 (its charge)\n" +
            "• Total valency of O = 2 × 2 = 4 (in O₂)\n" +
            "• Total valency of Al in Al₂O₃ = 3 × 2 = 6\n" +
            "• Total valency of O in Al₂O₃ = 2 × 3 = 6\n" +
            "• LCM of 3, 4, 6, 6 = 12\n" +
            "• Divide 12 by each: Al = 12/3 = 4; O₂ = 12/4 = 3; Al₂O₃ = 12/6 = 2\n\n" +
            "Answer: 4Al + 3O₂ → 2Al₂O₃",
          bodyAm:
            "4Al + 3O₂ → 2Al₂O₃።",
        },
        {
          id: "n2-7",
          title: "Worked Example 3 — Algebraic method",
          titleAm: "ምሳሌ 3 — Algebraic",
          body:
            "Problem: PCl₅ + H₂O → H₃PO₄ + HCl\n\n" +
            "Solution:\n" +
            "a PCl₅ + b H₂O → c H₃PO₄ + d HCl\n\n" +
            "P: a = c\n" +
            "Cl: 5a = d\n" +
            "H: 2b = 3c + d\n" +
            "O: b = 4c\n\n" +
            "Let a = 1 → c = 1, d = 5, b = 4\n\n" +
            "PCl₅ + 4H₂O → H₃PO₄ + 5HCl ✓",
          bodyAm:
            "PCl₅ + 4H₂O → H₃PO₄ + 5HCl።",
        },
        {
          id: "n2-8",
          title: "⚠ Remember trap — Equations",
          titleAm: "⚠ አትርሳ — ቀመሮች",
          body:
            "• BALANCE by COEFFICIENTS only — never touch subscripts.\n" +
            "• 7 diatomic elements: H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂.\n" +
            "• Reactants = left; products = right.\n" +
            "• (s), (l), (g), (aq) — write these after formulas.\n" +
            "• Law of Conservation of Mass: total mass same, but MOLES may differ on each side.\n" +
            "• Chemical equation is a MODEL of the reaction, not the actual molecules.",
          bodyAm:
            "Coefficients ብቻ።\n" +
            "7 ዳያቶሚክ።\n" +
            "የግድ balance።",
        },
      ],
    },

    {
      id: "n3",
      title: "1.3 Types of Chemical Reactions",
      titleAm: "1.3 የኬሚካል ምላሽ ዓይነቶች",
      body:
        "Abatu, reactions are classified into FOUR main types. Learn to recognize each from its pattern.",
      bodyAm:
        "አራት ዓይነቶች።",
      children: [
        {
          id: "n3-1",
          title: "Combination (synthesis) reactions",
          titleAm: "ማጣመር",
          body:
            "COMBINATION: A + B → AB\n\n" +
            "Two or more reactants combine to form ONE product.\n\n" +
            "Examples:\n" +
            "• 2Na + Cl₂ → 2NaCl (element + element)\n" +
            "• CaO + CO₂ → CaCO₃ (compound + compound)\n" +
            "• 2H₂ + O₂ → 2H₂O\n" +
            "• Fe + S → FeS\n\n" +
            "KEY: ONE product only.",
          bodyAm:
            "A + B → AB።\n" +
            "አንድ ውጤት ብቻ።",
        },
        {
          id: "n3-2",
          title: "Decomposition reactions",
          titleAm: "መበታተን",
          body:
            "DECOMPOSITION: AB → A + B\n\n" +
            "ONE compound breaks into TWO or more simpler substances.\n\n" +
            "Types:\n" +
            "• Thermal (heat, Δ): 2HgO → 2Hg + O₂\n" +
            "• Photo (light): 2AgCl → 2Ag + Cl₂\n" +
            "• Electrical: 2H₂O → 2H₂ + O₂ (electrolysis)\n\n" +
            "Examples:\n" +
            "• 2KClO₃ → 2KCl + 3O₂ (with MnO₂ catalyst)\n" +
            "• CaCO₃ → CaO + CO₂ (heat)\n\n" +
            "KEY: ONE reactant only.",
          bodyAm:
            "AB → A + B።\n" +
            "አንድ reactant።\n" +
            "ሙቀት/ብርሃን/ኤሌክትሪክ።",
        },
        {
          id: "n3-3",
          title: "Single displacement reactions",
          titleAm: "ነጠላ መተካት",
          body:
            "SINGLE DISPLACEMENT: A + BC → AC + B\n\n" +
            "One ELEMENT displaces another element from its compound.\n\n" +
            "Example:\n" +
            "• Zn + CuSO₄ → ZnSO₄ + Cu\n" +
            "• Fe + CuSO₄ → FeSO₄ + Cu\n" +
            "• Zn + 2HCl → ZnCl₂ + H₂\n" +
            "• 2Na + 2H₂O → 2NaOH + H₂\n\n" +
            "RULE: MORE REACTIVE element displaces less reactive one.\n" +
            "• Zn is more reactive than Cu → Zn displaces Cu\n" +
            "• Cu cannot displace Zn → Cu + ZnSO₄ = NO REACTION",
          bodyAm:
            "A + BC → AC + B።\n" +
            "ብዙ ሪአክቲቭ ያሸንፋል።\n" +
            "Zn displaces Cu።\n" +
            "Cu + ZnSO₄ = ምላሽ የለም።",
        },
        {
          id: "n3-4",
          title: "Double displacement reactions",
          titleAm: "ድርብ መተካት",
          body:
            "DOUBLE DISPLACEMENT: AB + CD → AD + CB\n\n" +
            "Two compounds EXCHANGE ions (positive and negative).\n\n" +
            "Examples:\n" +
            "• AgNO₃ + NaCl → AgCl↓ + NaNO₃\n" +
            "• BaCl₂ + Na₂SO₄ → BaSO₄↓ + 2NaCl\n" +
            "• Na₂CO₃ + 2HCl → 2NaCl + H₂O + CO₂\n\n" +
            "Often forms PRECIPITATE (insoluble salt), or gas, or water.\n\n" +
            "Also called METATHESIS reaction.",
          bodyAm:
            "AB + CD → AD + CB።\n" +
            "ion መለዋወጥ።\n" +
            "Precipitate/gas/water ይፈጥራል።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap — Types",
          titleAm: "⚠ አትርሳ — ዓይነቶች",
          body:
            "• Combination = 1 product (A + B → AB).\n" +
            "• Decomposition = 1 reactant (AB → A + B).\n" +
            "• Single displacement = element + compound (A + BC → AC + B).\n" +
            "• Double displacement = 2 compounds (AB + CD → AD + CB).\n" +
            "• Displacement needs reactivity series.\n" +
            "• Double displacement often forms precipitate.",
          bodyAm:
            "1 ውጤት = combination።\n" +
            "1 reactant = decomposition።\n" +
            "ኤለመንት + ሲሆን = single።\n" +
            "2 ሲሆኑ = double።",
        },
      ],
    },

    {
      id: "n4",
      title: "1.4 Oxidation and Reduction (Redox)",
      titleAm: "1.4 ኦክሲዴሽንና ሪዳክሽን",
      body:
        "Abatu, REDOX reactions involve the TRANSFER of electrons. Oxidation and reduction ALWAYS occur together.",
      bodyAm:
        "ሪዶክስ = ኤሌክትሮን ሽግግር።",
      children: [
        {
          id: "n4-1",
          title: "Definitions",
          titleAm: "ትርጓሜዎች",
          body:
            "OXIDATION:\n" +
            "• Loss of electrons\n" +
            "• Increase in oxidation number\n" +
            "• 'LEO' — Loss Electron Oxidation\n\n" +
            "REDUCTION:\n" +
            "• Gain of electrons\n" +
            "• Decrease in oxidation number\n" +
            "• 'GER' — Gain Electron Reduction\n\n" +
            "Memory: 'LEO says GER'\n\n" +
            "Example: Zn + CuSO₄ → ZnSO₄ + Cu\n" +
            "Zn⁰ → Zn²⁺ + 2e⁻ (OXIDIZED)\n" +
            "Cu²⁺ + 2e⁻ → Cu⁰ (REDUCED)",
          bodyAm:
            "LEO = Loss Electron Oxidation።\n" +
            "GER = Gain Electron Reduction።\n" +
            "Zn → Zn²⁺ + 2e⁻ (ወጥቷል)።\n" +
            "Cu²⁺ + 2e⁻ → Cu (ተቀንሷል)።",
        },
        {
          id: "n4-2",
          title: "Oxidation number rules",
          titleAm: "የኦክሲዴሽን ቁጥር ሕጎች",
          body:
            "1) FREE ELEMENT = 0 (Na, O₂, Br₂, S₈, P₄, O₃)\n\n" +
            "2) MONATOMIC ION = its charge\n" +
            "   Na⁺ = +1, Mg²⁺ = +2, S²⁻ = −2\n\n" +
            "3) OXYGEN = −2 (exceptions: peroxides −1, superoxides −1/2, OF₂ = +2)\n\n" +
            "4) HYDROGEN = +1 (exception: metal hydrides like NaH, CaH₂ = −1)\n\n" +
            "5) SUM in neutral compound = 0\n\n" +
            "6) SUM in polyatomic ion = ion charge\n\n" +
            "7) Group 1A = +1; Group 2A = +2\n\n" +
            "8) More electronegative element = negative; less = positive",
          bodyAm:
            "1) ነጻ = 0።\n" +
            "2) ion = charge።\n" +
            "3) O = −2 (peroxide −1)።\n" +
            "4) H = +1 (hydride −1)።\n" +
            "5) ጠቅላላ = 0።\n" +
            "6) ion = charge።\n" +
            "7) Group 1A +1; 2A +2።",
        },
        {
          id: "n4-3",
          title: "Worked Example — Finding oxidation numbers",
          titleAm: "ምሳሌ — ኦክሲዴሽን ቁጥር",
          body:
            "Problem 1: Find N in HNO₃\n" +
            "H = +1, O = −2 (×3 = −6)\n" +
            "Sum = 0 → +1 + x + (−6) = 0 → x = +5\n\n" +
            "Problem 2: Find Cr in Cr₂O₇²⁻\n" +
            "O = −2 (×7 = −14), sum = −2\n" +
            "2x + (−14) = −2 → 2x = 12 → x = +6\n\n" +
            "Problem 3: Find Mn in MnO₄⁻\n" +
            "O = −2 (×4 = −8), sum = −1\n" +
            "x + (−8) = −1 → x = +7\n\n" +
            "Problem 4: Find P in Ca(H₂PO₄)₂\n" +
            "Ca = +2, H = +1, O = −2\n" +
            "+2 + 4(+1) + 2x + 8(−2) = 0\n" +
            "2 + 4 + 2x − 16 = 0 → 2x = 10 → x = +5",
          bodyAm:
            "HNO₃: N = +5።\n" +
            "Cr₂O₇²⁻: Cr = +6።\n" +
            "MnO₄⁻: Mn = +7።\n" +
            "Ca(H₂PO₄)₂: P = +5።",
        },
        {
          id: "n4-4",
          title: "Oxidizing & reducing agents",
          titleAm: "ኦክሲዳይዚንግና ሪዲዩሲንግ",
          body:
            "OXIDIZING AGENT (oxidant):\n" +
            "• GAINS electrons\n" +
            "• Is REDUCED\n" +
            "• Makes the other substance oxidized\n" +
            "• Common: O₂, Cl₂, HNO₃, KMnO₄, K₂Cr₂O₇, H₂O₂\n\n" +
            "REDUCING AGENT (reductant):\n" +
            "• LOSES electrons\n" +
            "• Is OXIDIZED\n" +
            "• Makes the other substance reduced\n" +
            "• Common: H₂, C, CO, metals (Na, Mg, Zn), H₂S\n\n" +
            "Trick: The substance that gets OXIDIZED is the REDUCING agent.\n" +
            "       The substance that gets REDUCED is the OXIDIZING agent.",
          bodyAm:
            "Oxidizing agent = ተቀንሷል (gains e⁻)።\n" +
            "Reducing agent = ወጥቷል (loses e⁻)።\n" +
            "O₂, Cl₂ = oxidizing።\n" +
            "H₂, C, metals = reducing።",
        },
        {
          id: "n4-5",
          title: "Non-redox reactions",
          titleAm: "ሪዶክስ ያልሆኑ",
          body:
            "NON-REDOX reactions — no change in oxidation numbers.\n\n" +
            "Examples:\n" +
            "• Neutralization: NaOH + HCl → NaCl + H₂O\n" +
            "  (Na stays +1, Cl stays −1, H and O stay the same)\n" +
            "• Double displacement: AgNO₃ + NaCl → AgCl + NaNO₃\n" +
            "• Precipitation reactions\n" +
            "• Acid-base reactions",
          bodyAm:
            "ሪዶክስ ያልሆኑ: neutralization, precipitation።\n" +
            "ኦክሲዴሽን ቁጥር አይለወጥም።",
        },
        {
          id: "n4-6",
          title: "⚠ Remember trap — Redox",
          titleAm: "⚠ አትርሳ — ሪዶክስ",
          body:
            "• LEO GER (Loss Electron Oxidation; Gain Electron Reduction).\n" +
            "• Oxidation number INCREASES = oxidation.\n" +
            "• Oxidation number DECREASES = reduction.\n" +
            "• Oxidizing agent is REDUCED.\n" +
            "• Reducing agent is OXIDIZED.\n" +
            "• Free element = 0 oxidation number.\n" +
            "• H₂O₂: O = −1 (peroxide exception).\n" +
            "• Neutralization is typically NON-redox.",
          bodyAm:
            "LEO GER።\n" +
            "Oxidizing agent = ተቀንሷል።\n" +
            "Reducing agent = ወጥቷል።",
        },
      ],
    },

    {
      id: "n5",
      title: "1.5 Mole Concept, Molar Mass, Chemical Formulas",
      titleAm: "1.5 ሞል፣ ሞላር ማስ፣ ቀመሮች",
      body:
        "Abatu, the MOLE is the chemist's counting unit. One mole = 6.022 × 10²³ particles.",
      bodyAm:
        "ሞል = የኬሚስትሪ ቆጣሪ አሃድ። 6.022×10²³።",
      children: [
        {
          id: "n5-1",
          title: "Molecular mass & formula mass",
          titleAm: "ሞለኪዩላርና ፎርሙላ ማስ",
          body:
            "MOLECULAR MASS (MM) = sum of atomic masses in a MOLECULE.\n" +
            "• Used for covalent compounds\n" +
            "• Example: H₂O = 2(1) + 16 = 18 amu\n" +
            "• CO₂ = 12 + 2(16) = 44 amu\n\n" +
            "FORMULA MASS (FM) = sum of atomic masses in a FORMULA UNIT.\n" +
            "• Used for ionic compounds\n" +
            "• Example: NaCl = 23 + 35.5 = 58.5 amu\n" +
            "• Ca(OH)₂ = 40 + 2(16 + 1) = 74 amu",
          bodyAm:
            "MM = ሞለኪዩል።\n" +
            "FM = ionic formula unit።\n" +
            "H₂O = 18; NaCl = 58.5።",
        },
        {
          id: "n5-2",
          title: "The mole & Avogadro's number",
          titleAm: "ሞልና የአቮጋድሮ ቁጥር",
          body:
            "MOLE = amount of substance containing as many particles as there are atoms in exactly 12 g of Carbon-12.\n\n" +
            "AVOGADRO'S NUMBER (N_A) = 6.022 × 10²³ particles/mole\n\n" +
            "1 mole of ANY substance = 6.022 × 10²³ particles\n" +
            "1 mole H₂O = 6.022 × 10²³ molecules\n" +
            "1 mole NaCl = 6.022 × 10²³ formula units\n\n" +
            "MOLAR MASS (M) = mass of 1 mole in grams\n" +
            "• Numerically equal to MM or FM but in grams\n" +
            "• Molar mass of H₂O = 18 g/mol\n" +
            "• Molar mass of NaCl = 58.5 g/mol",
          bodyAm:
            "ሞል = 6.022×10²³።\n" +
            "Molar mass (g/mol) = MM ወይም FM በ ግራም።",
        },
        {
          id: "n5-3",
          title: "Mole conversion formulas",
          titleAm: "የሞል ቀመሮች",
          body:
            "FORMULAS:\n" +
            "• n = m / M          (moles = mass ÷ molar mass)\n" +
            "• m = n × M          (mass = moles × molar mass)\n" +
            "• N = n × N_A        (particles = moles × 6.022×10²³)\n" +
            "• n = N / N_A        (moles = particles ÷ 6.022×10²³)\n" +
            "• At STP: V = n × 22.4 L   (volume of gas at STP)\n" +
            "• n = V / 22.4 L     (moles from gas volume at STP)",
          bodyAm:
            "n = m/M።\n" +
            "N = n × 6.022×10²³።\n" +
            "V = n × 22.4 L (STP)።",
        },
        {
          id: "n5-4",
          title: "Worked Example — Mole calculations",
          titleAm: "ምሳሌ — ሞል",
          body:
            "Problem 1: How many moles in 36 g of H₂O?\n" +
            "n = m/M = 36/18 = 2 moles\n\n" +
            "Problem 2: How many molecules in 2 moles of H₂O?\n" +
            "N = n × N_A = 2 × 6.022×10²³ = 1.2044 × 10²⁴ molecules\n\n" +
            "Problem 3: What is the mass of 0.5 mol NaCl?\n" +
            "m = n × M = 0.5 × 58.5 = 29.25 g\n\n" +
            "Problem 4: How many moles in 44.8 L of O₂ at STP?\n" +
            "n = V/22.4 = 44.8/22.4 = 2 moles",
          bodyAm:
            "36 g H₂O = 2 mol።\n" +
            "2 mol = 1.2×10²⁴ molecules።\n" +
            "0.5 mol NaCl = 29.25 g።\n" +
            "44.8 L = 2 mol።",
        },
        {
          id: "n5-5",
          title: "Empirical vs molecular formula",
          titleAm: "Empirical እና ሞለኪዩላር",
          body:
            "EMPIRICAL FORMULA = simplest whole-number ratio of atoms.\n" +
            "• CH (for benzene)\n" +
            "• CH₂O (for glucose)\n\n" +
            "MOLECULAR FORMULA = actual number of atoms in molecule.\n" +
            "• C₆H₆ (for benzene)\n" +
            "• C₆H₁₂O₆ (for glucose)\n\n" +
            "RELATIONSHIP:\n" +
            "Molecular formula = (Empirical formula) × n\n" +
            "where n = molecular mass ÷ empirical mass",
          bodyAm:
            "Empirical = ቀላሉ ሬሾ።\n" +
            "Molecular = ትክክለኛ ቁጥር።\n" +
            "Molecular = (Empirical) × n።",
        },
        {
          id: "n5-6",
          title: "Steps to find empirical formula from % composition",
          titleAm: "Empirical formula ለማግኘት",
          body:
            "STEPS:\n" +
            "1) Assume 100 g sample → % becomes grams\n" +
            "2) Convert grams to MOLES: n = mass ÷ atomic mass\n" +
            "3) DIVIDE all moles by the SMALLEST mole value\n" +
            "4) If ratios aren't whole numbers, MULTIPLY all by 2 or 3\n" +
            "5) Write the empirical formula\n\n" +
            "Then find n = molecular mass / empirical mass\n" +
            "Molecular formula = (empirical) × n",
          bodyAm:
            "1) 100 g\n" +
            "2) moles\n" +
            "3) በትንሹ አካፍል\n" +
            "4) በ 2/3 አባዛ\n" +
            "5) ፃፍ",
        },
        {
          id: "n5-7",
          title: "Worked Example — Empirical formula",
          titleAm: "ምሳሌ — empirical",
          body:
            "Problem: A compound has 43.6% P and 56.4% O. Find its empirical formula.\n\n" +
            "Solution:\n" +
            "Assume 100 g sample: 43.6 g P + 56.4 g O\n\n" +
            "Moles P = 43.6/31 = 1.41 mol\n" +
            "Moles O = 56.4/16 = 3.53 mol\n\n" +
            "Divide by smallest (1.41):\n" +
            "P: 1.41/1.41 = 1\n" +
            "O: 3.53/1.41 = 2.5\n\n" +
            "Multiply by 2 (to get whole numbers):\n" +
            "P: 1 × 2 = 2\n" +
            "O: 2.5 × 2 = 5\n\n" +
            "Empirical formula = P₂O₅",
          bodyAm:
            "P₂O₅።",
        },
        {
          id: "n5-8",
          title: "Percentage composition",
          titleAm: "የመቶኛ ስብጥር",
          body:
            "% element = (n × atomic mass of element) / molar mass of compound × 100%\n\n" +
            "Example: %H in H₂O\n" +
            "= (2 × 1) / 18 × 100% = 11.1%\n\n" +
            "Example: %O in H₂O\n" +
            "= (1 × 16) / 18 × 100% = 88.9%\n\n" +
            "Check: 11.1 + 88.9 = 100% ✓",
          bodyAm:
            "% element = (n × atomic mass)/molar mass ×100።",
        },
        {
          id: "n5-9",
          title: "⚠ Remember trap — Mole",
          titleAm: "⚠ አትርሳ — ሞል",
          body:
            "• N_A = 6.022 × 10²³.\n" +
            "• n = m/M ALWAYS (not M/m!).\n" +
            "• STP: 22.4 L per mole of any gas.\n" +
            "• Empirical = simplest ratio; Molecular = actual ratio.\n" +
            "• Empirical formula: divide by SMALLEST mole; multiply if not whole.\n" +
            "• Molar mass (g/mol) numerically = MM (amu).\n" +
            "• For ionic compounds, use FORMULA mass, not molecular mass.",
          bodyAm:
            "N_A = 6.022×10²³።\n" +
            "n = m/M።\n" +
            "STP = 22.4 L።\n" +
            "Empirical: በትንሹ አካፍል።",
        },
      ],
    },

    {
      id: "n6",
      title: "1.6 Stoichiometry",
      titleAm: "1.6 ስቶይኪዮሜትሪ",
      body:
        "Abatu, STOICHIOMETRY is the quantitative study of amounts of reactants and products in a reaction. Always work through MOLES.",
      bodyAm:
        "ስቶይኪዮሜትሪ = መጠናዊ ጥናት። ሁልጊዜ በ ሞል በኩል።",
      children: [
        {
          id: "n6-1",
          title: "Mole ratios from balanced equations",
          titleAm: "የሞል ሬሾ",
          body:
            "From a balanced equation, the COEFFICIENTS give MOLE RATIOS.\n\n" +
            "Example: N₂ + 3H₂ → 2NH₃\n" +
            "• 1 mol N₂ reacts with 3 mol H₂\n" +
            "• Produces 2 mol NH₃\n" +
            "• Mole ratio N₂:H₂:NH₃ = 1:3:2\n\n" +
            "This ratio lets us convert moles of one substance to moles of another!",
          bodyAm:
            "Coefficients = ሬሾ።\n" +
            "1 N₂ : 3 H₂ : 2 NH₃።",
        },
        {
          id: "n6-2",
          title: "Mass-mass problems",
          titleAm: "ማስ-ማስ",
          body:
            "STEPS:\n" +
            "1) Balance the equation\n" +
            "2) Convert GIVEN MASS to MOLES (m ÷ M)\n" +
            "3) Use MOLE RATIO from equation\n" +
            "4) Convert RESULT to desired units (× M for mass)\n\n" +
            "Sequence: mass (given) → mol (given) → mol (unknown) → mass (unknown)",
          bodyAm:
            "ማስ → ሞል → ሞል → ማስ።",
        },
        {
          id: "n6-3",
          title: "Worked Example — Mass-mass",
          titleAm: "ምሳሌ — ማስ-ማስ",
          body:
            "Problem: How many grams of Al are needed to produce 20.4 g Al₂O₃?\n" +
            "4Al + 3O₂ → 2Al₂O₃\n\n" +
            "Solution:\n" +
            "1) Molar mass of Al₂O₃ = 2(27) + 3(16) = 102 g/mol\n" +
            "   Molar mass of Al = 27 g/mol\n" +
            "2) Moles Al₂O₃ = 20.4/102 = 0.2 mol\n" +
            "3) Mole ratio Al:Al₂O₃ = 4:2 = 2:1\n" +
            "   Moles Al = 0.2 × 2 = 0.4 mol\n" +
            "4) Mass Al = 0.4 × 27 = 10.8 g\n\n" +
            "Answer: 10.8 g Al",
          bodyAm:
            "10.8 g Al።",
        },
        {
          id: "n6-4",
          title: "Volume-volume problems",
          titleAm: "ቮልዩም-ቮልዩም",
          body:
            "At STP, 1 mole of ANY gas = 22.4 L (MOLAR VOLUME).\n\n" +
            "AVOGADRO'S LAW: Equal volumes of gases at same T & P contain equal numbers of molecules (moles).\n\n" +
            "For gas-only reactions:\n" +
            "VOLUME RATIO = MOLE RATIO (from balanced equation)\n\n" +
            "Example: CH₄ + 2O₂ → CO₂ + 2H₂O\n" +
            "1 L CH₄ reacts with 2 L O₂ → produces 1 L CO₂",
          bodyAm:
            "STP: 22.4 L = 1 mol።\n" +
            "Volume ratio = mole ratio።",
        },
        {
          id: "n6-5",
          title: "Worked Example — Volume-volume",
          titleAm: "ምሳሌ — ቮልዩም",
          body:
            "Problem: What volume of O₂ reacts with CH₄ to produce 44.8 L CO₂ at STP?\n" +
            "CH₄ + 2O₂ → CO₂ + 2H₂O\n\n" +
            "Solution (using volume ratio = mole ratio):\n" +
            "Coefficients: 1 CH₄ : 2 O₂ : 1 CO₂\n" +
            "If CO₂ = 44.8 L, then O₂ = 44.8 L × (2/1) = 89.6 L\n\n" +
            "Answer: 89.6 L of O₂",
          bodyAm:
            "89.6 L O₂።",
        },
        {
          id: "n6-6",
          title: "Mass-volume problems",
          titleAm: "ማስ-ቮልዩም",
          body:
            "STEPS:\n" +
            "1) Balance the equation\n" +
            "2) Convert given mass to moles OR given volume to moles\n" +
            "3) Use mole ratio\n" +
            "4) Convert back to desired units (mass in g OR volume in L)\n\n" +
            "Example: How many grams of Mg react with acid to produce 5.6 L H₂ at STP?\n" +
            "Mg + 2HCl → MgCl₂ + H₂\n\n" +
            "Moles H₂ = 5.6/22.4 = 0.25 mol\n" +
            "Mole ratio Mg:H₂ = 1:1\n" +
            "Moles Mg = 0.25 mol\n" +
            "Mass Mg = 0.25 × 24 = 6 g",
          bodyAm:
            "6 g Mg።",
        },
        {
          id: "n6-7",
          title: "Limiting and excess reactants",
          titleAm: "Limiting እና excess",
          body:
            "LIMITING REACTANT:\n" +
            "• Completely consumed first\n" +
            "• Determines the MAXIMUM product\n" +
            "• Gives LOWER calculated yield\n\n" +
            "EXCESS REACTANT:\n" +
            "• Leftover after reaction\n" +
            "• Present in more than needed amount\n\n" +
            "STEPS to find limiting:\n" +
            "1) Convert BOTH reactants to moles\n" +
            "2) Calculate product yield from EACH\n" +
            "3) The one giving SMALLER yield is the LIMITING reactant",
          bodyAm:
            "Limiting = መጀመሪያ የሚያልቅ።\n" +
            "ያነሰ ውጤት = limiting።",
        },
        {
          id: "n6-8",
          title: "Worked Example — Limiting reactant",
          titleAm: "ምሳሌ — limiting",
          body:
            "Problem: 0.30 mol Mg + 0.52 mol HCl react. Find moles H₂ produced.\n" +
            "Mg + 2HCl → MgCl₂ + H₂\n\n" +
            "From Mg:\n" +
            "Mole ratio Mg:H₂ = 1:1\n" +
            "Moles H₂ from Mg = 0.30 mol\n\n" +
            "From HCl:\n" +
            "Mole ratio HCl:H₂ = 2:1\n" +
            "Moles H₂ from HCl = 0.52 × (1/2) = 0.26 mol\n\n" +
            "Smaller yield: 0.26 mol H₂ (from HCl)\n" +
            "HCl is LIMITING; Mg is EXCESS\n" +
            "H₂ produced = 0.26 mol",
          bodyAm:
            "HCl = limiting።\n" +
            "H₂ = 0.26 mol።",
        },
        {
          id: "n6-9",
          title: "Theoretical, actual, and percentage yield",
          titleAm: "Theoretical, actual, % yield",
          body:
            "THEORETICAL YIELD:\n" +
            "• Amount of product calculated from balanced equation\n" +
            "• Based on LIMITING reactant\n" +
            "• Maximum possible yield\n\n" +
            "ACTUAL YIELD:\n" +
            "• Amount of product MEASURED in experiment\n" +
            "• Usually less than theoretical\n\n" +
            "PERCENTAGE YIELD:\n" +
            "% yield = (Actual yield / Theoretical yield) × 100%\n\n" +
            "Why less than 100%?\n" +
            "• Side reactions\n" +
            "• Incomplete reaction\n" +
            "• Product lost in handling\n" +
            "• Impure reactants",
          bodyAm:
            "Theoretical = ስሌት።\n" +
            "Actual = ልክ።\n" +
            "% yield = (actual/theoretical)×100።",
        },
        {
          id: "n6-10",
          title: "Worked Example — % yield",
          titleAm: "ምሳሌ — % yield",
          body:
            "Problem: 24.8 g CaCO₃ heated → 13.1 g CaO (actual). Find % yield.\n" +
            "CaCO₃ → CaO + CO₂\n" +
            "Molar mass: CaCO₃ = 100; CaO = 56\n\n" +
            "Theoretical yield:\n" +
            "Moles CaCO₃ = 24.8/100 = 0.248 mol\n" +
            "Mole ratio = 1:1\n" +
            "Moles CaO = 0.248 mol\n" +
            "Theoretical mass CaO = 0.248 × 56 = 13.9 g\n\n" +
            "% yield = (13.1 / 13.9) × 100% = 94.2%",
          bodyAm:
            "% yield = 94.2%።",
        },
        {
          id: "n6-11",
          title: "⚠ Remember trap — Stoichiometry",
          titleAm: "⚠ አትርሳ — ስቶይኪዮሜትሪ",
          body:
            "• ALWAYS balance equation FIRST.\n" +
            "• ALWAYS go through MOLES (mass → mol → mol → mass).\n" +
            "• Mole ratio comes from COEFFICIENTS.\n" +
            "• STP: 22.4 L/mol.\n" +
            "• Limiting reactant gives SMALLER product.\n" +
            "• % yield = actual / theoretical × 100%.\n" +
            "• Actual < Theoretical always (practically).\n" +
            "• Never calculate % yield without THEORETICAL first.",
          bodyAm:
            "Balance።\n" +
            "Moles በኩል።\n" +
            "22.4 L።\n" +
            "Limiting = ትንሽ ውጤት።\n" +
            "% yield = actual/theoretical።",
        },
      ],
    },

    {
      id: "nRef",
      title: "Formula Sheet — Unit 1",
      titleAm: "የቀመር ሉህ — ክፍል 1",
      body:
        "| Quantity | Formula |\n" +
        "|----------|---------|\n" +
        "| Moles from mass | n = m / M |\n" +
        "| Mass from moles | m = n × M |\n" +
        "| Particles from moles | N = n × N_A |\n" +
        "| Avogadro's number | N_A = 6.022 × 10²³ |\n" +
        "| Gas volume at STP | V = n × 22.4 L |\n" +
        "| Moles from gas volume | n = V / 22.4 L |\n" +
        "| Empirical formula | (empirical) × n = molecular |\n" +
        "| n (multiplier) | molecular mass / empirical mass |\n" +
        "| % composition | (n × atomic mass) / molar mass × 100 |\n" +
        "| % yield | (actual / theoretical) × 100 |\n" +
        "| Oxidation sum (compound) | = 0 |\n" +
        "| Oxidation sum (ion) | = ion charge |\n\n" +
        "OXIDATION RULES:\n" +
        "• Free element = 0\n" +
        "• O = −2 (peroxides −1, OF₂ +2)\n" +
        "• H = +1 (metal hydrides −1)\n" +
        "• Group 1A = +1; Group 2A = +2",
      bodyAm:
        "ሰንጠረዡን አስታውስ።",
    },

    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 1",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1) Signs of chemical reaction: new substance, heat/light, color, temp, gas, precipitate.\n" +
        "2) Balance with coefficients ONLY — never touch subscripts.\n" +
        "3) 7 diatomic elements: H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂.\n" +
        "4) 4 reaction types: combination, decomposition, single, double.\n" +
        "5) Single displacement requires reactivity series.\n" +
        "6) Double displacement often forms precipitate.\n" +
        "7) LEO GER (Loss Electron Oxidation, Gain Electron Reduction).\n" +
        "8) Oxidizing agent is REDUCED; reducing agent is OXIDIZED.\n" +
        "9) Free element = 0 oxidation state.\n" +
        "10) O = −2 (peroxides −1).\n" +
        "11) H = +1 (metal hydrides −1).\n" +
        "12) N_A = 6.022 × 10²³.\n" +
        "13) n = m/M (not M/m).\n" +
        "14) STP: 22.4 L per mole gas.\n" +
        "15) Empirical = simplest; Molecular = actual.\n" +
        "16) For empirical: divide by smallest mole; multiply if fractional.\n" +
        "17) Stoichiometry: always through MOLES.\n" +
        "18) Mole ratio from coefficients.\n" +
        "19) Limiting reactant = smaller product yield.\n" +
        "20) % yield = actual / theoretical × 100%.",
      bodyAm:
        "ወጥመዶቹን ሁሉ አስታውስ።",
    },
  ],

  questions: [
    // EASY MCQ Q1-Q40
    { id: "q1", type: "mcq", difficulty: "easy", stem: "What is a chemical reaction?", options: ["Physical change", "Process where reactants become new products", "Melting", "Boiling"], answer: "1", explanation: "Reactants → new products." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Which is a SIGN of chemical reaction?", options: ["Melting ice", "New substance formed", "Cutting paper", "Dissolving salt"], answer: "1", explanation: "New substance is key sign." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Which is a PHYSICAL change?", options: ["Burning wood", "Rusting iron", "Melting ice", "Cooking egg"], answer: "2", explanation: "Melting = physical." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "The symbol (aq) means:", options: ["Gas", "Solid", "Liquid", "Aqueous (dissolved in water)"], answer: "3", explanation: "(aq) = aqueous." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "The symbol (s) means:", options: ["Solid", "Solution", "Gas", "Liquid"], answer: "0", explanation: "(s) = solid." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Law of Conservation of Mass says:", options: ["Mass can be created", "Mass of reactants = mass of products", "Mass is lost", "Mass changes"], answer: "1", explanation: "Mass conserved." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Which reaction is A + B → AB?", options: ["Combination", "Decomposition", "Single displacement", "Double displacement"], answer: "0", explanation: "Combination = 1 product." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Which reaction is AB → A + B?", options: ["Combination", "Decomposition", "Single displacement", "Double displacement"], answer: "1", explanation: "Decomposition = 1 reactant." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Which reaction is A + BC → AC + B?", options: ["Combination", "Decomposition", "Single displacement", "Double displacement"], answer: "2", explanation: "Single displacement." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Which reaction is AB + CD → AD + CB?", options: ["Combination", "Decomposition", "Single displacement", "Double displacement"], answer: "3", explanation: "Double displacement." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "2Na + Cl₂ → 2NaCl is which type?", options: ["Combination", "Decomposition", "Single displacement", "Double displacement"], answer: "0", explanation: "Combination." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "2HgO → 2Hg + O₂ is which type?", options: ["Combination", "Decomposition", "Single displacement", "Double displacement"], answer: "1", explanation: "Decomposition." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Zn + CuSO₄ → ZnSO₄ + Cu is which type?", options: ["Combination", "Decomposition", "Single displacement", "Double displacement"], answer: "2", explanation: "Single displacement." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "AgNO₃ + NaCl → AgCl + NaNO₃ is which type?", options: ["Combination", "Decomposition", "Single displacement", "Double displacement"], answer: "3", explanation: "Double displacement." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Oxidation is:", options: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of neutrons"], answer: "1", explanation: "LEO — Loss Electron Oxidation." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Reduction is:", options: ["Gain of electrons", "Loss of electrons", "Gain of protons", "Loss of neutrons"], answer: "0", explanation: "Gain electrons = reduction." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Oxidation number of a free element is:", options: ["+1", "-1", "0", "+2"], answer: "2", explanation: "Free element = 0." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Oxidation number of O in most compounds is:", options: ["-1", "-2", "+1", "+2"], answer: "1", explanation: "O = −2 (except peroxides)." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "Oxidation number of H in most compounds is:", options: ["+1", "-1", "0", "+2"], answer: "0", explanation: "H = +1 (except metal hydrides)." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "Sum of oxidation numbers in a neutral compound is:", options: ["+1", "0", "-1", "2"], answer: "1", explanation: "Sum = 0 for neutral." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Avogadro's number is:", options: ["6.022 × 10²³", "3.14 × 10²³", "1.0 × 10²³", "9.8 × 10²³"], answer: "0", explanation: "6.022 × 10²³." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "Molar mass of H₂O is:", options: ["10 g/mol", "16 g/mol", "18 g/mol", "20 g/mol"], answer: "2", explanation: "18 g/mol." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "Molar mass of CO₂ is:", options: ["28", "44", "16", "32"], answer: "1", explanation: "44 g/mol." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "1 mole of any gas at STP occupies:", options: ["22.4 L", "1 L", "44.8 L", "11.2 L"], answer: "0", explanation: "22.4 L." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "The empirical formula is:", options: ["Actual formula", "Simplest ratio", "Full mass", "Ion charge"], answer: "1", explanation: "Simplest whole number ratio." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "Molecular formula = (empirical) × ?", options: ["2", "n", "3", "atomic mass"], answer: "1", explanation: "× n, where n = molecular mass / empirical mass." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "The limiting reactant is:", options: ["Left over at end", "Consumed first", "Largest amount", "Usually excess"], answer: "1", explanation: "Consumed first." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Theoretical yield is:", options: ["Measured in lab", "Calculated from stoichiometry", "Less than actual", "Unrelated to limiting reactant"], answer: "1", explanation: "Calculated maximum." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Percentage yield = ?", options: ["Theoretical/actual ×100", "Actual/theoretical ×100", "Actual × theoretical", "Theoretical × 100"], answer: "1", explanation: "(actual/theoretical)×100." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "Which is a diatomic element?", options: ["Na", "Fe", "O₂", "C"], answer: "2", explanation: "O₂ is diatomic." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "How many diatomic elements are there?", options: ["3", "5", "7", "9"], answer: "2", explanation: "7: BrINClHOF." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "Which compound is a product in: 2H₂ + O₂ → 2H₂O?", options: ["H₂", "O₂", "H₂O", "All"], answer: "2", explanation: "Product = H₂O." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "Oxidation state of Na in NaCl:", options: ["0", "+1", "-1", "+2"], answer: "1", explanation: "+1." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "Oxidation state of Cl in NaCl:", options: ["0", "+1", "-1", "+2"], answer: "2", explanation: "−1." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "Oxidation state of S in SO₂:", options: ["0", "+2", "+4", "+6"], answer: "2", explanation: "S + (−4) = 0 → S = +4." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "Oxidation state of N in NO₂:", options: ["+2", "+3", "+4", "+5"], answer: "2", explanation: "N + (−4) = 0 → N = +4." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "Which is NOT a chemical reaction sign?", options: ["Color change", "New substance", "Melting ice", "Gas produced"], answer: "2", explanation: "Melting = physical." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "The coefficient in 2H₂O is:", options: ["1", "2", "4", "H"], answer: "1", explanation: "Coefficient = 2." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "In balancing equations, we change:", options: ["Subscripts", "Coefficients", "State symbols", "Elements"], answer: "1", explanation: "Coefficients only." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "Which is the smallest ratio formula?", options: ["Molecular formula", "Empirical formula", "Structural formula", "Ionic formula"], answer: "1", explanation: "Empirical = simplest." },

    // MEDIUM MCQ Q41-Q80
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Balance: __ H₂ + __ O₂ → __ H₂O", options: ["1, 1, 1", "2, 1, 2", "1, 2, 2", "2, 2, 2"], answer: "1", explanation: "2H₂ + O₂ → 2H₂O." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Balance: __ N₂ + __ H₂ → __ NH₃", options: ["1, 3, 2", "1, 2, 3", "2, 3, 1", "1, 1, 1"], answer: "0", explanation: "N₂ + 3H₂ → 2NH₃." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "Balance: __ Al + __ O₂ → __ Al₂O₃", options: ["1, 1, 1", "2, 3, 1", "4, 3, 2", "3, 2, 4"], answer: "2", explanation: "4Al + 3O₂ → 2Al₂O₃." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "Balance: __ Fe + __ H₂O → __ Fe₃O₄ + __ H₂", options: ["3, 4, 1, 4", "3, 4, 1, 3", "1, 4, 3, 4", "4, 3, 1, 4"], answer: "0", explanation: "3Fe + 4H₂O → Fe₃O₄ + 4H₂." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "Balance: __ KClO₃ → __ KCl + __ O₂", options: ["1, 1, 1", "2, 2, 3", "3, 2, 1", "2, 1, 2"], answer: "1", explanation: "2KClO₃ → 2KCl + 3O₂." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "Balance: __ CaCO₃ → __ CaO + __ CO₂", options: ["1, 1, 1", "2, 1, 1", "1, 2, 2", "2, 2, 2"], answer: "0", explanation: "CaCO₃ → CaO + CO₂." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "Balance: __ Zn + __ HCl → __ ZnCl₂ + __ H₂", options: ["1, 1, 1, 1", "1, 2, 1, 1", "2, 2, 1, 1", "1, 2, 2, 2"], answer: "1", explanation: "Zn + 2HCl → ZnCl₂ + H₂." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "Balance: __ Mg + __ HCl → __ MgCl₂ + __ H₂", options: ["1, 1, 1, 1", "1, 2, 1, 1", "2, 2, 1, 1", "1, 2, 2, 2"], answer: "1", explanation: "Mg + 2HCl → MgCl₂ + H₂." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "Balance: __ CH₄ + __ O₂ → __ CO₂ + __ H₂O", options: ["1, 2, 1, 2", "1, 1, 1, 1", "2, 2, 2, 2", "1, 3, 1, 2"], answer: "0", explanation: "CH₄ + 2O₂ → CO₂ + 2H₂O." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Balance: __ NaOH + __ H₂SO₄ → __ Na₂SO₄ + __ H₂O", options: ["1, 1, 1, 1", "2, 1, 1, 2", "1, 2, 1, 2", "2, 2, 2, 2"], answer: "1", explanation: "2NaOH + H₂SO₄ → Na₂SO₄ + 2H₂O." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "Balance: __ Al + __ HCl → __ AlCl₃ + __ H₂", options: ["1, 3, 1, 1", "2, 6, 2, 3", "3, 6, 3, 3", "2, 3, 2, 3"], answer: "1", explanation: "2Al + 6HCl → 2AlCl₃ + 3H₂." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "Zn + CuSO₄ → ZnSO₄ + Cu — what is oxidized?", options: ["Zn", "Cu", "S", "O"], answer: "0", explanation: "Zn⁰ → Zn²⁺." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "Zn + CuSO₄ → ZnSO₄ + Cu — what is the oxidizing agent?", options: ["Zn", "CuSO₄", "ZnSO₄", "Cu"], answer: "1", explanation: "Cu²⁺ is reduced = oxidizing agent." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "In 2Fe + 3O₂ → Fe₂O₃, what is oxidized?", options: ["Fe", "O₂", "Both", "Neither"], answer: "0", explanation: "Fe goes 0 → +3." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "In 2Fe + 3O₂ → Fe₂O₃, what is the reducing agent?", options: ["Fe", "O₂", "Fe₂O₃", "Both"], answer: "0", explanation: "Fe is oxidized = reducing agent." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "Oxidation number of N in HNO₃:", options: ["+3", "+4", "+5", "+6"], answer: "2", explanation: "+1 + N + (−6) = 0 → N = +5." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "Oxidation number of Cr in Cr₂O₇²⁻:", options: ["+3", "+4", "+5", "+6"], answer: "3", explanation: "2x − 14 = −2 → 2x = 12 → x = +6." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Oxidation number of Mn in MnO₄⁻:", options: ["+4", "+5", "+6", "+7"], answer: "3", explanation: "x − 8 = −1 → x = +7." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Oxidation number of S in H₂SO₄:", options: ["+2", "+4", "+6", "+8"], answer: "2", explanation: "2 + S + (−8) = 0 → S = +6." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "How many moles in 44 g CO₂?", options: ["0.5", "1", "2", "4"], answer: "1", explanation: "44/44 = 1 mol." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "How many moles in 36 g H₂O?", options: ["0.5", "1", "2", "4"], answer: "2", explanation: "36/18 = 2 mol." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "What is mass of 2 mol NaCl?", options: ["58.5", "117", "29.25", "100"], answer: "1", explanation: "2 × 58.5 = 117 g." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "How many molecules in 1 mole H₂O?", options: ["6.022 × 10²³", "3.011 × 10²³", "1.2 × 10²⁴", "1.0 × 10²³"], answer: "0", explanation: "1 mol = 6.022 × 10²³." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "Volume of 2 moles O₂ at STP:", options: ["11.2 L", "22.4 L", "44.8 L", "89.6 L"], answer: "2", explanation: "2 × 22.4 = 44.8 L." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Molar mass of CaCO₃:", options: ["50", "80", "100", "120"], answer: "2", explanation: "40 + 12 + 48 = 100 g/mol." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "Molar mass of H₂SO₄:", options: ["80", "98", "100", "120"], answer: "1", explanation: "2 + 32 + 64 = 98 g/mol." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "Molar mass of NaOH:", options: ["40", "50", "60", "30"], answer: "0", explanation: "23 + 16 + 1 = 40 g/mol." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "The empirical formula of C₆H₁₂O₆ is:", options: ["CHO", "CH₂O", "C₂H₄O₂", "C₆H₁₂O₆"], answer: "1", explanation: "CH₂O (divide by 6)." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "The empirical formula of C₆H₆ is:", options: ["C₃H₃", "C₂H₂", "CH", "C₆H₆"], answer: "2", explanation: "CH (divide by 6)." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "A compound has 40% Ca, 12% C, 48% O. Empirical formula?", options: ["CaCO₃", "Ca₂CO₃", "CaC₂O₃", "CaCO₂"], answer: "0", explanation: "40/40=1, 12/12=1, 48/16=3 → CaCO₃." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "A compound has 43.6% P, 56.4% O. Empirical formula?", options: ["PO", "P₂O", "P₂O₅", "PO₅"], answer: "2", explanation: "P₂O₅." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "For N₂ + 3H₂ → 2NH₃, mole ratio N₂:H₂:", options: ["1:1", "1:2", "1:3", "3:1"], answer: "2", explanation: "1:3." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "For 2H₂ + O₂ → 2H₂O, mole ratio H₂:H₂O:", options: ["1:1", "2:1", "1:2", "2:2=1:1"], answer: "3", explanation: "2:2 = 1:1." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "In stoichiometry, the mole ratio comes from:", options: ["Subscripts", "Coefficients", "Atomic masses", "State symbols"], answer: "1", explanation: "Coefficients." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Which is smaller: theoretical or actual yield?", options: ["Theoretical", "Actual", "Same", "Random"], answer: "1", explanation: "Actual is usually less." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "If actual yield = 8 g, theoretical = 10 g, % yield =", options: ["80%", "90%", "100%", "18%"], answer: "0", explanation: "(8/10)×100 = 80%." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "Which is NOT a diatomic element?", options: ["H₂", "O₂", "C", "Cl₂"], answer: "2", explanation: "C (carbon) is not diatomic." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "In a balanced equation, sum of masses of reactants =", options: ["Product mass", "0", "Different", "Unknown"], answer: "0", explanation: "Law of Conservation of Mass." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "How many moles in 11.2 L O₂ at STP?", options: ["0.5", "1", "2", "4"], answer: "0", explanation: "11.2/22.4 = 0.5." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "Which is the correct formula to find moles of gas at STP?", options: ["n = V × 22.4", "n = V / 22.4", "n = 22.4 / V", "n = V + 22.4"], answer: "1", explanation: "n = V/22.4." },

    // HARD MCQ Q81-Q100
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Balance: __ FeS₂ + __ O₂ → __ Fe₂O₃ + __ SO₂", options: ["4, 11, 2, 8", "2, 5, 1, 4", "4, 15, 2, 8", "2, 11, 2, 4"], answer: "0", explanation: "4FeS₂ + 11O₂ → 2Fe₂O₃ + 8SO₂." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "Balance: __ C₃H₈ + __ O₂ → __ CO₂ + __ H₂O", options: ["1, 3, 3, 4", "1, 5, 3, 4", "1, 4, 3, 4", "2, 10, 6, 8"], answer: "1", explanation: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Oxidation state of S in SO₄²⁻:", options: ["+2", "+4", "+6", "+8"], answer: "2", explanation: "S + (−8) = −2 → S = +6." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Oxidation state of Fe in Fe₂O₃:", options: ["+1", "+2", "+3", "+4"], answer: "2", explanation: "2x + (−6) = 0 → x = +3." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "Oxidation state of P in Ca(H₂PO₄)₂:", options: ["+3", "+4", "+5", "+7"], answer: "2", explanation: "2 + 4 + 2x − 16 = 0 → x = +5." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "4Al + 3O₂ → 2Al₂O₃. If 5.4 g Al reacts, how many moles Al₂O₃?", options: ["0.05", "0.1", "0.2", "0.3"], answer: "1", explanation: "5.4/27 = 0.2 mol Al; 0.2 × (2/4) = 0.1 mol Al₂O₃." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "2H₂ + O₂ → 2H₂O. If 4 mol H₂ reacts fully, how many moles H₂O?", options: ["2", "4", "8", "1"], answer: "1", explanation: "4 × (2/2) = 4 mol H₂O." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "N₂ + 3H₂ → 2NH₃. If 1 mol N₂ and 2 mol H₂ react, limiting reactant?", options: ["N₂", "H₂", "NH₃", "Both"], answer: "1", explanation: "H₂ gives 2×(2/3)=1.33 mol NH₃; N₂ gives 1×(2/1)=2 mol NH₃ → H₂ limiting." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "If 32 g CH₄ (M=16) reacts with 32 g O₂ (M=32) in CH₄ + 2O₂ → CO₂ + 2H₂O, limiting reactant?", options: ["CH₄", "O₂", "CO₂", "H₂O"], answer: "1", explanation: "CH₄ = 2 mol; O₂ = 1 mol; CH₄ needs 4 mol O₂ → O₂ limiting." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "CaCO₃ → CaO + CO₂. 50 g CaCO₃ yields how many g CaO? (M: 100, 56)", options: ["14", "28", "50", "100"], answer: "1", explanation: "0.5 mol CaCO₃ → 0.5 mol CaO → 0.5 × 56 = 28 g." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "2Mg + O₂ → 2MgO. 48 g Mg yields how many g MgO? (M: 24, 40)", options: ["40", "80", "120", "160"], answer: "1", explanation: "2 mol Mg → 2 mol MgO → 2 × 40 = 80 g." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "Actual yield = 45 g; theoretical = 50 g; % yield =", options: ["80%", "90%", "95%", "100%"], answer: "1", explanation: "(45/50)×100 = 90%." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Compound has 24.3% C, 4.1% H, 71.6% Cl (M = 99). Molecular formula?", options: ["C₂H₄Cl", "C₂H₄Cl₂", "CH₂Cl", "C₄H₈Cl₄"], answer: "1", explanation: "Empirical = CH₂Cl (M=49.5); n=2 → C₂H₄Cl₂." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "A compound has empirical CH₂ and molecular mass 42. Molecular formula?", options: ["CH₂", "C₂H₄", "C₃H₆", "C₄H₈"], answer: "2", explanation: "n = 42/14 = 3 → C₃H₆." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "Balance: __ NaOH + __ CO₂ → __ Na₂CO₃ + __ H₂O", options: ["1,1,1,1", "2,1,1,1", "1,2,1,2", "2,2,2,2"], answer: "1", explanation: "2NaOH + CO₂ → Na₂CO₃ + H₂O." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "For 2H₂ + O₂ → 2H₂O: what mass H₂ needed to make 90 g H₂O? (M: 2, 18)", options: ["5 g", "10 g", "18 g", "20 g"], answer: "1", explanation: "90/18 = 5 mol H₂O → 5 mol H₂ → 10 g." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "For Mg + 2HCl → MgCl₂ + H₂: 2.4 g Mg gives how many L H₂ at STP?", options: ["1.12 L", "2.24 L", "4.48 L", "22.4 L"], answer: "1", explanation: "2.4/24 = 0.1 mol → 0.1 mol H₂ → 2.24 L." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "How many atoms in 1 mol H₂O?", options: ["6.022 × 10²³", "1.2 × 10²⁴", "3 × 6.022 × 10²³", "6.022 × 10²²"], answer: "2", explanation: "3 atoms per molecule × N_A = 3 × 6.022 × 10²³." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "Which is a redox reaction?", options: ["HCl + NaOH → NaCl + H₂O", "AgNO₃ + NaCl → AgCl + NaNO₃", "Zn + CuSO₄ → ZnSO₄ + Cu", "CaCO₃ + HCl → CaCl₂ + H₂O + CO₂"], answer: "2", explanation: "Zn changes 0 → +2 (oxidized)." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "Compound has 92.3% C, 7.7% H (M = 78). Molecular formula?", options: ["CH", "C₂H₂", "C₆H₆", "C₈H₈"], answer: "2", explanation: "Empirical = CH (M=13); n=6 → C₆H₆." },

    // SHORT ANSWER Q101-Q120
    { id: "q101", type: "short", difficulty: "easy", stem: "Define a chemical reaction and list the main signs.", answer: "CHEMICAL REACTION = process in which reactants are converted into new products with different properties.\n\nSigns:\n1) New substance formed\n2) Heat or light produced\n3) Color change\n4) Temperature change\n5) Gas bubbles\n6) Precipitate (solid)", explanation: "New substances + signs." },
    { id: "q102", type: "short", difficulty: "easy", stem: "What is the Law of Conservation of Mass?", answer: "LAW OF CONSERVATION OF MASS: In any chemical reaction, the total mass of reactants equals the total mass of products. Atoms are neither created nor destroyed — only rearranged.\n\nThis is why chemical equations MUST be balanced.", explanation: "Mass same on both sides." },
    { id: "q103", type: "short", difficulty: "easy", stem: "List the 4 types of chemical reactions with general form.", answer: "1) COMBINATION (synthesis): A + B → AB\n2) DECOMPOSITION: AB → A + B\n3) SINGLE DISPLACEMENT: A + BC → AC + B\n4) DOUBLE DISPLACEMENT: AB + CD → AD + CB", explanation: "Know all 4 patterns." },
    { id: "q104", type: "short", difficulty: "easy", stem: "List the 7 diatomic elements.", answer: "H₂, N₂, O₂, F₂, Cl₂, Br₂, I₂\n\nMemory aid: BrINClHOF", explanation: "7 diatomic elements." },
    { id: "q105", type: "short", difficulty: "medium", stem: "State the oxidation number rules.", answer: "1) Free element = 0\n2) Monatomic ion = its charge\n3) O = −2 (peroxides −1, OF₂ +2)\n4) H = +1 (metal hydrides −1)\n5) Sum in neutral compound = 0\n6) Sum in polyatomic ion = ion charge\n7) Group 1A = +1, Group 2A = +2\n8) More electronegative = negative", explanation: "Memorize all 8." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Balance: N₂ + H₂ → NH₃", answer: "N₂ + 3H₂ → 2NH₃", explanation: "Balance N and H." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Balance: Fe + H₂O → Fe₃O₄ + H₂", answer: "3Fe + 4H₂O → Fe₃O₄ + 4H₂", explanation: "Balance Fe, then O, then H." },
    { id: "q108", type: "short", difficulty: "medium", stem: "Balance: C₃H₈ + O₂ → CO₂ + H₂O", answer: "C₃H₈ + 5O₂ → 3CO₂ + 4H₂O", explanation: "C=3, H=8, then O." },
    { id: "q109", type: "short", difficulty: "medium", stem: "Find oxidation number of N in HNO₃.", answer: "H = +1; O = −2 (×3 = −6)\nSum = 0 → +1 + x + (−6) = 0\nx = +5\n\nN = +5", explanation: "+5." },
    { id: "q110", type: "short", difficulty: "medium", stem: "Find oxidation number of Mn in KMnO₄.", answer: "K = +1; O = −2 (×4 = −8)\nSum = 0 → +1 + x + (−8) = 0\nx = +7\n\nMn = +7", explanation: "+7." },
    { id: "q111", type: "short", difficulty: "medium", stem: "Find oxidation number of Cr in K₂Cr₂O₇.", answer: "K = +1 (×2 = +2); O = −2 (×7 = −14)\nSum = 0 → 2 + 2x − 14 = 0 → 2x = 12 → x = +6\n\nCr = +6", explanation: "+6." },
    { id: "q112", type: "short", difficulty: "medium", stem: "Define oxidation and reduction. Give LEO GER memory aid.", answer: "OXIDATION = loss of electrons (increase in oxidation number).\nREDUCTION = gain of electrons (decrease in oxidation number).\n\nMemory aid:\n• LEO = Loss Electron Oxidation\n• GER = Gain Electron Reduction\n• LEO says GER", explanation: "LEO GER." },
    { id: "q113", type: "short", difficulty: "medium", stem: "How many moles in 90 g of H₂O? How many molecules?", answer: "Molar mass H₂O = 18 g/mol\nMoles = 90/18 = 5 mol\nMolecules = 5 × 6.022×10²³ = 3.011 × 10²⁴ molecules", explanation: "5 mol; 3.011×10²⁴." },
    { id: "q114", type: "short", difficulty: "medium", stem: "What is the mass of 0.25 mol NaCl?", answer: "Molar mass NaCl = 58.5 g/mol\nMass = 0.25 × 58.5 = 14.625 g", explanation: "≈14.6 g." },
    { id: "q115", type: "short", difficulty: "medium", stem: "Find empirical formula: 40% Ca, 12% C, 48% O.", answer: "Assume 100 g:\nCa: 40/40 = 1 mol\nC: 12/12 = 1 mol\nO: 48/16 = 3 mol\n\nRatio Ca:C:O = 1:1:3\n\nEmpirical formula = CaCO₃", explanation: "CaCO₃." },
    { id: "q116", type: "short", difficulty: "hard", stem: "A compound contains 24.3% C, 4.1% H, 71.6% Cl with molecular mass 99. Find molecular formula.", answer: "Moles (assume 100 g):\nC: 24.3/12 = 2.025\nH: 4.1/1 = 4.1\nCl: 71.6/35.5 = 2.017\n\nDivide by smallest (2.017):\nC: 1, H: 2, Cl: 1\nEmpirical formula = CH₂Cl; empirical mass = 12 + 2 + 35.5 = 49.5\n\nn = 99/49.5 = 2\nMolecular formula = (CH₂Cl)₂ = C₂H₄Cl₂", explanation: "C₂H₄Cl₂." },
    { id: "q117", type: "short", difficulty: "hard", stem: "For 4Al + 3O₂ → 2Al₂O₃, how many grams Al₂O₃ form from 10.8 g Al? (M: Al = 27, Al₂O₃ = 102)", answer: "Moles Al = 10.8/27 = 0.4 mol\nMole ratio Al:Al₂O₃ = 4:2 = 2:1\nMoles Al₂O₃ = 0.4 × (2/4) = 0.2 mol\nMass = 0.2 × 102 = 20.4 g\n\nAnswer: 20.4 g Al₂O₃", explanation: "20.4 g." },
    { id: "q118", type: "short", difficulty: "hard", stem: "For Mg + 2HCl → MgCl₂ + H₂, find limiting reactant if 4.8 g Mg + 7.3 g HCl react.", answer: "Moles Mg = 4.8/24 = 0.2 mol\nMoles HCl = 7.3/36.5 = 0.2 mol\n\nFrom Mg: H₂ = 0.2 × (1/1) = 0.2 mol\nFrom HCl: H₂ = 0.2 × (1/2) = 0.1 mol\n\nSmaller yield = 0.1 (from HCl)\nHCl is LIMITING; Mg is EXCESS.", explanation: "HCl limiting." },
    { id: "q119", type: "short", difficulty: "hard", stem: "24.8 g CaCO₃ heated produces 13.1 g CaO. Find % yield. (M: CaCO₃ = 100, CaO = 56)", answer: "Moles CaCO₃ = 24.8/100 = 0.248 mol\nMoles CaO (theoretical) = 0.248 mol\nMass CaO (theoretical) = 0.248 × 56 = 13.9 g\n\n% yield = (13.1/13.9) × 100 = 94.2%", explanation: "94.2%." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Explain why actual yield < theoretical yield.", answer: "Reasons:\n1) SIDE REACTIONS — reactants can form unwanted products\n2) INCOMPLETE REACTION — not all limiting reactant is used\n3) PRODUCT LOSS during handling, filtering, transferring\n4) IMPURE REACTANTS\n5) REVERSIBLE reactions reaching equilibrium (not 100% forward)\n6) SOME reactant lost to evaporation or sticking to vessels\n\n% yield = (actual/theoretical) × 100% measures efficiency.", explanation: "Side reactions, incomplete, product loss, impurities." },
  ],
};