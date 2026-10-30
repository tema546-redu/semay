import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 ECONOMICS — UNIT 1
// THEORY OF CONSUMER BEHAVIOUR
// Source: Grade 10 Economics Student Textbook (pp. 1–16)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, formula boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10EconomicsCh1: Chapter = {
  id: "ch1",
  number: 1,
  title: "Theory of Consumer Behaviour",
  titleAm: "የሸማች ባህሪ ጽንሰ-ሐሳብ",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter answers ONE question: how does a consumer choose what to buy to get the most satisfaction from a limited income?\n\n" +
        "The chapter has TWO approaches:\n" +
        "1) CARDINAL utility — utility is MEASURABLE in 'utils' (numbers).\n" +
        "2) ORDINAL utility — utility is only RANKABLE (1st, 2nd, 3rd...).\n\n" +
        "The WHOLE chapter reduces to FOUR ideas:\n" +
        "• Utility = satisfaction from a good (relativity matters).\n" +
        "• MU = ΔTU/ΔQ; LDMU: MU falls as Q rises.\n" +
        "• Consumer equilibrium (one good): MUx = Px.\n" +
        "• Consumer equilibrium (many goods): MUx/Px = MUy/Py = … = MUm.\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ ይህ ክፍል አንድ ጥያቄ ይመልሳል፡ ሸማች በተወሰነ ገቢ ከፍተኛ እርካታ ለማግኘት እንዴት ይመርጣል?\n\n" +
        "ሁለት አቀራረቦች፡\n" +
        "1) ካርዲናል — ጠቃሚነት በ'ዩቲል' ይለካል።\n" +
        "2) ኦርዲናል — ጠቃሚነት ደረጃ ብቻ ይሰጣል።\n\n" +
        "አራቱ ዋና ሐሳቦች፡\n" +
        "• MU = ΔTU/ΔQ\n" +
        "• LDMU\n" +
        "• MUx = Px (አንድ ሸቀጥ)\n" +
        "• MUx/Px = MUy/Py (ብዙ ሸቀጦች)",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the two approaches",
          titleAm: "ደረጃ 1 · ሁለቱን አቀራረቦች መረዳት",
          body:
            "CARDINAL (measurable):\n" +
            "• Utility measured in utils or money.\n" +
            "• Uses TU and MU tables.\n" +
            "• Consumer equilibrium from MU = P ratios.\n\n" +
            "ORDINAL (rankable):\n" +
            "• Utility cannot be measured absolutely.\n" +
            "• Consumer RANKS baskets (1st, 2nd, 3rd...).\n" +
            "• Uses indifference curves (mentioned, not deeply tested here).\n" +
            "• Key concept: Diminishing Marginal Rate of Substitution (DMRS).",
          bodyAm:
            "ካርዲናል: ይለካል።\n" +
            "ኦርዲናል: ደረጃ ብቻ ይሰጣል።\n" +
            "ዋና ሐሳብ: DMRS።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the FIVE formulas",
          titleAm: "ደረጃ 2 · አምስቱን ቀመሮች አስታውስ",
          body:
            "1) Total utility: TU = ΣMU (sum of marginal utilities)\n" +
            "2) Marginal utility: MU = ΔTU/ΔQ\n" +
            "3) One-good equilibrium: MUx = Px\n" +
            "4) Multi-good equilibrium: MUx/Px = MUy/Py = … = MUm\n" +
            "5) Budget equation: PxX + PyY = I (income)",
          bodyAm:
            "1) TU = ΣMU\n" +
            "2) MU = ΔTU/ΔQ\n" +
            "3) MUx = Px\n" +
            "4) MUx/Px = MUy/Py = … = MUm\n" +
            "5) PxX + PyY = I",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master the MU–TU relationship",
          titleAm: "ደረጃ 3 · የMU–TU ግንኙነት ተቆጣጥር",
          body:
            "KEY RULES:\n" +
            "• If MU > 0 → TU is RISING.\n" +
            "• If MU = 0 → TU is at its MAXIMUM (saturation point).\n" +
            "• If MU < 0 → TU is FALLING (dissatisfaction).\n\n" +
            "Quick checks:\n" +
            "• TU always starts at 0 when Q = 0.\n" +
            "• At Q = 1, TU = MU (first unit).\n" +
            "• Maximum TU occurs where MU = 0.",
          bodyAm:
            "MU > 0 → TU ይጨምራል።\n" +
            "MU = 0 → TU ከፍተኛ።\n" +
            "MU < 0 → TU ይቀንሳል።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Did you compute MU correctly = ΔTU/ΔQ?\n" +
            "2) Did you compare MU/P ratios, not just MU?\n" +
            "3) Did you verify the budget: PxX + PyY = I?\n" +
            "4) Did you check that total expenditure equals income?\n" +
            "5) Did you state units (utils) where needed?",
          bodyAm:
            "1) MU = ΔTU/ΔQ?\n" +
            "2) MU/P አወዳደርክ?\n" +
            "3) PxX + PyY = I?\n" +
            "4) ወጪ = ገቢ?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Utility ≠ usefulness. Utility is satisfaction; usefulness is about the product.\n" +
            "• Utility is SUBJECTIVE — same good gives different utils to different consumers.\n" +
            "• MU = 0 at maximum TU. This is THE most tested point.\n" +
            "• Equilibrium requires MU/P equal across all goods AND budget fully spent.\n" +
            "• Cardinal: measurable. Ordinal: rankable. Do not mix them up.\n" +
            "• Common assumption of BOTH approaches: consumer is RATIONAL.",
          bodyAm:
            "• ጠቃሚነት ≠ ጠቀሜታ።\n" +
            "• ጠቃሚነት ተጨባጭ ነው።\n" +
            "• MU = 0 በTU ከፍተኛ።\n" +
            "• ሁለቱም: ሸማች ምክንያታዊ ነው።",
        },
      ],
    },

    // ============================================================
    // 1.1 THE CONCEPT OF UTILITY
    // ============================================================
    {
      id: "n1",
      title: "1.1 The Concept of Utility",
      titleAm: "1.1 የጠቃሚነት ጽንሰ-ሐሳብ",
      body:
        "Abatu, UTILITY is the level of satisfaction or pleasure derived from consuming a good or service. It is the power of a commodity to satisfy human wants.",
      bodyAm:
        "አባቱ፣ ጠቃሚነት = ከሸቀጥ ወይም አገልግሎት የሚገኝ እርካታ።",
      children: [
        {
          id: "n1-1",
          title: "Definition and examples",
          titleAm: "ትርጉምና ምሳሌዎች",
          body:
            "UTILITY = satisfaction or pleasure from consumption.\n\n" +
            "Examples:\n" +
            "• Bread has the power to satisfy hunger.\n" +
            "• Water quenches thirst.\n\n" +
            "Utility is about SATISFACTION, not about whether the good is 'useful' in an objective sense.",
          bodyAm:
            "ጠቃሚነት = እርካታ።\n" +
            "ምሳሌ: ዳቦ ረሃብን ያረካል፤ ውሃ ጥማትን ያረካል።",
        },
        {
          id: "n1-2",
          title: "Relativity of utility",
          titleAm: "የጠቃሚነት አንጻራዊነት",
          body:
            "Utility is SUBJECTIVE — it depends on the person, place, and time:\n\n" +
            "• Different people → different utility from same good. (Non-smokers get NO utility from cigarettes.)\n" +
            "• Different places → different utility. (Jacket in cold vs hot place.)\n" +
            "• Different times → different utility. (Tea in morning vs lunch.)\n" +
            "• Different units → utility falls with more units (link to LDMU).\n\n" +
            "Utility is NOT absolute (objectively fixed).",
          bodyAm:
            "ጠቃሚነት ተጨባጭ ነው፡\n" +
            "• ሰው → ሰው ይለያያል\n" +
            "• ቦታ → ቦታ\n" +
            "• ጊዜ → ጊዜ",
        },
        {
          id: "n1-3",
          title: "Utility vs usefulness",
          titleAm: "ጠቃሚነት እና ጠቀሜታ",
          body:
            "IMPORTANT DISTINCTION:\n" +
            "• USEFULNESS = property of the PRODUCT (objective).\n" +
            "• UTILITY = satisfaction felt by the CONSUMER (subjective).\n\n" +
            "A good may be useful but give zero utility to a particular person (e.g., a cigarette to a non-smoker).\n" +
            "A good may be 'useless' objectively but give high utility to someone (e.g., a lucky charm).",
          bodyAm:
            "ጠቀሜታ = የምርቱ ባህሪ።\n" +
            "ጠቃሚነት = የሸማቹ ስሜት።",
        },
        {
          id: "n1-4",
          title: "Two approaches to measuring utility",
          titleAm: "ሁለቱ የመለኪያ አቀራረቦች",
          body:
            "Since utility is qualitative, economists measure it in TWO ways:\n\n" +
            "1) CARDINAL utility — utility is measurable in numbers ('utils' or money).\n" +
            "2) ORDINAL utility — utility is only rankable (1st, 2nd, 3rd...).\n\n" +
            "This chapter studies BOTH, focusing on cardinal.",
          bodyAm:
            "1) ካርዲናል — ይለካል።\n" +
            "2) ኦርዲናል — ደረጃ ብቻ።",
        },
        {
          id: "n1-5",
          title: "⚠ Remember trap — Utility basics",
          titleAm: "⚠ አትርሳ — የጠቃሚነት መሠረታዊ ወጥመዶች",
          body:
            "• Utility ≠ usefulness. NEVER say 'utility means usefulness'.\n" +
            "• Utility is SUBJECTIVE — not the same for everyone.\n" +
            "• Utility can be the same at different places/times for the SAME good.\n" +
            "• Utility can even be ZERO or NEGATIVE (overeating).\n" +
            "• 'Util' is a subjective unit — no universal size.",
          bodyAm:
            "• ጠቃሚነት ≠ ጠቀሜታ።\n" +
            "• ተጨባጭ ነው።\n" +
            "• ዜሮ ወይም አሉታዊ ሊሆን ይችላል።",
        },
      ],
    },

    // ============================================================
    // 1.2 THE CARDINAL UTILITY THEORY
    // ============================================================
    {
      id: "n2",
      title: "1.2 The Cardinal Utility Theory",
      titleAm: "1.2 የካርዲናል ጠቃሚነት ጽንሰ-ሐሳብ",
      body:
        "Abatu, the CARDINAL school says utility is MEASURABLE — like weight, height, or temperature. The unit of satisfaction is the 'UTIL'.",
      bodyAm:
        "አባቱ፣ ካርዲናል ትምህርት ቤት ጠቃሚነት ይለካል ይላል። አሃዱ 'ዩቲል' ነው።",
      children: [
        {
          id: "n2-1",
          title: "The five assumptions",
          titleAm: "አምስቱ ግምቶች",
          body:
            "I. RATIONALITY — consumer maximizes satisfaction given budget.\n" +
            "II. CARDINAL UTILITY — utility is measurable (money or utils).\n" +
            "III. CONSTANT MARGINAL UTILITY OF MONEY — each extra birr gives the same utility.\n" +
            "IV. DIMINISHING MARGINAL UTILITY — extra units give less extra satisfaction.\n" +
            "V. TOTAL UTILITY depends on quantities: TU = f(X₁, X₂, …, Xₙ).",
          bodyAm:
            "I. ምክንያታዊነት\n" +
            "II. መለካት ይችላል\n" +
            "III. የገንዘብ MU ቋሚ\n" +
            "IV. LDMU\n" +
            "V. TU = f(X₁, ..., Xₙ)",
        },
        {
          id: "n2-2",
          title: "Total Utility (TU) and Marginal Utility (MU)",
          titleAm: "ጠቅላላ ጠቃሚነት (TU) እና ህዳግ ጠቃሚነት (MU)",
          body:
            "TOTAL UTILITY (TU): total satisfaction from consuming a specific quantity of a good in a given time.\n\n" +
            "MARGINAL UTILITY (MU): additional satisfaction from consuming ONE MORE unit.\n\n" +
            "FORMULA:\n" +
            "MU = ΔTU / ΔQ\n" +
            "where ΔTU = change in total utility, ΔQ = change in quantity.\n\n" +
            "RELATIONSHIP:\n" +
            "• TU = ΣMU (total = sum of marginals)\n" +
            "• At Q = 1: TU = MU (the first unit's MU equals TU).",
          bodyAm:
            "TU = ጠቅላላ እርካታ።\n" +
            "MU = ΔTU/ΔQ።\n" +
            "TU = ΣMU።",
        },
        {
          id: "n2-3",
          title: "Worked Example — MU from TU table",
          titleAm: "ሠርተ ምሳሌ — ከTU ሠንጠረዥ MU",
          body:
            "Using the textbook banana table:\n" +
            "Q:  0  1   2   3   4   5   6   7   8   9   10\n" +
            "TU: 0  12  22  29  34  36  37  37  36  34  30\n" +
            "MU: -  12  10  7   5   2   1   0   -1  -2  -4\n\n" +
            "Check: MU at Q=3 = TU(3) − TU(2) = 29 − 22 = 7 ✓\n\n" +
            "Saturation point: Q = 7 (TU = 37, MU = 0).\n" +
            "After Q = 7: MU negative → TU falls.",
          bodyAm:
            "MU(3) = 29 − 22 = 7።\n" +
            "ሙሉ ነጥብ: Q=7 (MU=0)።\n" +
            "ከQ=7 በኋላ MU አሉታዊ → TU ይቀንሳል።",
        },
        {
          id: "n2-4",
          title: "Law of Diminishing Marginal Utility (LDMU)",
          titleAm: "የህዳግ ጠቃሚነት መቀነስ ሕግ",
          body:
            "LDMU: as the consumer consumes MORE units of a commodity in a given time, the MU of each successive unit DECREASES — assuming consumption of other goods stays constant.\n\n" +
            "Meaning:\n" +
            "• First glass of water → high MU.\n" +
            "• Second glass → lower MU.\n" +
            "• Eventually MU = 0 (saturation).\n" +
            "• Beyond that → MU negative (dissatisfaction).\n\n" +
            "This law is CENTRAL to cardinal analysis and explains the downward-sloping demand curve.",
          bodyAm:
            "LDMU: ብዙ ሲወሰድ MU ይቀንሳል።\n" +
            "የመጀመሪያው ውሃ ከፍተኛ MU፤ ሁለተኛው ያነሰ።\n" +
            "በመጨረሻ MU = 0።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap — Cardinal utility",
          titleAm: "⚠ አትርሳ — ካርዲናል ጠቃሚነት",
          body:
            "• MU = ΔTU/ΔQ — NOT TU/Q. MU is the CHANGE in TU.\n" +
            "• When MU = 0, TU is at MAXIMUM — not zero.\n" +
            "• TU starts at 0 when Q = 0.\n" +
            "• At Q = 1: MU = TU.\n" +
            "• Negative MU → TU DECREASES.\n" +
            "• LDMU holds ONLY when other goods' consumption is held CONSTANT.\n" +
            "• 'Constant marginal utility of MONEY' is a DIFFERENT assumption from LDMU.",
          bodyAm:
            "• MU = ΔTU/ΔQ (ማካካሻ)።\n" +
            "• MU = 0 → TU ከፍተኛ።\n" +
            "• MU < 0 → TU ይቀንሳል።",
        },
      ],
    },

    // ============================================================
    // 1.3 THE CONSUMER MAXIMIZATION PROBLEM
    // ============================================================
    {
      id: "n3",
      title: "1.3 The Consumer Maximization Problem",
      titleAm: "1.3 የሸማች ከፍተኛ እርካታ ችግር",
      body:
        "Abatu, the consumer reaches EQUILIBRIUM when spending is allocated so that the LAST birr on each good gives the SAME utility. This is where the exam LOVES to test.",
      bodyAm:
        "አባቱ፣ ሸማች ሚዛኑ ላይ ይደርሳል ሁሉም ሸቀጦች ላይ የመጨረሻው ብር ተመሳሳይ ጠቃሚነት ሲሰጥ።",
      children: [
        {
          id: "n3-1",
          title: "Assumptions of consumer equilibrium",
          titleAm: "የሸማች ሚዛን ግምቶች",
          body:
            "• Consumer is RATIONAL (maximizes utility).\n" +
            "• Utility is CARDINALLY measurable.\n" +
            "• Marginal utility of money is CONSTANT.\n" +
            "• LDMU operates.\n" +
            "• Consumer income is GIVEN and constant.\n" +
            "• Commodity prices are GIVEN and constant.",
          bodyAm:
            "• ምክንያታዊ\n" +
            "• ይለካል\n" +
            "• የገንዘብ MU ቋሚ\n" +
            "• LDMU\n" +
            "• ገቢ/ዋጋ ቋሚ",
        },
        {
          id: "n3-2",
          title: "One-commodity equilibrium",
          titleAm: "የአንድ ሸቀጥ ሚዛን",
          body:
            "CONDITION: MUx = Px\n\n" +
            "• If MUx > Px → consumer gains by buying MORE of X.\n" +
            "• If MUx < Px → consumer gains by buying LESS of X.\n" +
            "• If MUx = Px → EQUILIBRIUM (no reason to change).\n\n" +
            "In money terms: MUx/Px = MUm (marginal utility of money).",
          bodyAm:
            "MUx = Px (ሚዛን)።\n" +
            "MUx > Px → የበለጠ ግዛ።\n" +
            "MUx < Px → ያነሰ ግዛ።",
        },
        {
          id: "n3-3",
          title: "Multi-commodity equilibrium",
          titleAm: "የብዙ ሸቀጦች ሚዛን",
          body:
            "CONDITION:\n" +
            "MUx/Px = MUy/Py = … = MUn/Pn = MUm\n\n" +
            "Meaning: the utility per BIRR spent on each good must be EQUAL.\n\n" +
            "BUDGET EQUATION:\n" +
            "Px·X + Py·Y + … + Pn·N = I (consumer income)\n\n" +
            "BOTH conditions must hold for equilibrium:\n" +
            "1) MU/P ratios equal across all goods.\n" +
            "2) Total expenditure exactly equals income.",
          bodyAm:
            "MUx/Px = MUy/Py = … = MUm\n" +
            "PxX + PyY = I\n" +
            "ሁለቱም መሟላት አለባቸው።",
        },
        {
          id: "n3-4",
          title: "Worked Example — One good (bread, P = 2 Birr)",
          titleAm: "ሠርተ ምሳሌ — አንድ ሸቀጥ",
          body:
            "Table (textbook 1.4), P_bread = 2 Birr:\n" +
            "Q:      0   1   2   3   4   5\n" +
            "TU:     0   4   6   7   7   6\n" +
            "MU:     -   4   2   1   0   -1\n" +
            "MU/P:   -   2   1   0.5 0  -0.5\n\n" +
            "Equilibrium: MU = P → 2 = 2 at Q = 2.\n" +
            "At Q = 2: MU/P = 2/2 = 1 = MUm ✓\n\n" +
            "Consumer buys 2 units of bread.",
          bodyAm:
            "በQ = 2: MU = 2 = P ✓\n" +
            "MU/P = 1 = MUm",
        },
        {
          id: "n3-5",
          title: "Worked Example — Two goods (bread X, injera Y)",
          titleAm: "ሠርተ ምሳሌ — ሁለት ሸቀጦች",
          body:
            "Textbook 1.5: Income I = 22, Px = 2, Py = 4.\n\n" +
            "Utility table:\n" +
            "Qx  TUx  MUx  MUx/Px   |  Qy  TUy  MUy  MUy/Py\n" +
            "0   0    -    -        |  0   0    -    -\n" +
            "1   6    6    3        |  1   12   12   3\n" +
            "2   10   4    2        |  2   19   7    1.75\n" +
            "3   12   2    1        |  3   24   5    1.5\n" +
            "4   12   0    0        |  4   28   4    1\n" +
            "5   11  -1   -0.5      |  5   28   0    0\n" +
            "6   9   -3   -1.5      |  6   26  -2   -0.5\n\n" +
            "EQUILIBRIUM: equalize MU/P at the highest common value.\n" +
            "Best common ratio with budget = 22:\n" +
            "• X = 3 → MUx/Px = 2/2 = 1\n" +
            "• Y = 4 → MUy/Py = 4/4 = 1\n" +
            "MU/P = 1 = 1 ✓\n\n" +
            "Check budget: 2(3) + 4(4) = 6 + 16 = 22 = I ✓\n\n" +
            "Maximum TU = (6+4+2) + (12+7+5+4) = 12 + 28 = 40 utils.",
          bodyAm:
            "X = 3, Y = 4።\n" +
            "MUx/Px = MUy/Py = 1።\n" +
            "2(3) + 4(4) = 22 ✓\n" +
            "TU = 40 utils።",
        },
        {
          id: "n3-6",
          title: "⚠ Remember trap — Equilibrium",
          titleAm: "⚠ አትርሳ — ሚዛን",
          body:
            "• The condition is NOT 'MUx = MUy' — it's MUx/Px = MUy/Py.\n" +
            "• You MUST check the budget: PxX + PyY = I.\n" +
            "• If you only satisfy MU/P = 1 but spend only 18 of 22 Birr, you're NOT at equilibrium.\n" +
            "• Larger ratio → buy MORE of that good.\n" +
            "• Common mistake: forgetting to compute MUx/Px AND MUy/Py separately.\n" +
            "• MUm (marginal utility of money) is treated as CONSTANT.",
          bodyAm:
            "• MUx = MUy አይደለም — MUx/Px = MUy/Py ነው።\n" +
            "• በጀቱን አረጋግጥ: PxX + PyY = I።\n" +
            "• ትልቅ ሬሾ → የበለጠ ግዛ።",
        },
      ],
    },

    // ============================================================
    // 1.4 INTRODUCTION TO ORDINAL UTILITY THEORY
    // ============================================================
    {
      id: "n4",
      title: "1.4 Introduction to the Ordinal Utility Theory",
      titleAm: "1.4 የኦርዲናል ጠቃሚነት ጽንሰ-ሐሳብ መግቢያ",
      body:
        "Abatu, ORDINAL utility says utility cannot be measured absolutely — but consumers CAN RANK baskets by preference. This is the modern approach.",
      bodyAm:
        "አባቱ፣ ኦርዲናል ጠቃሚነት በፍጹም አይለካም — ግን ሸማች ደረጃ መስጠት ይችላል።",
      children: [
        {
          id: "n4-1",
          title: "Core idea",
          titleAm: "ዋና ሐሳብ",
          body:
            "ORDINAL view:\n" +
            "• Consumers CANNOT say 'this gives 5 utils'.\n" +
            "• But they CAN say 'I prefer A over B' or 'B over C'.\n" +
            "• Utility is RANKED (1st, 2nd, 3rd...), not measured.\n\n" +
            "Example: You can say you liked the orange MORE than the banana — but you can't say by how MANY utils.",
          bodyAm:
            "በደረጃ መልክ ብቻ።\n" +
            "A > B > C.",
        },
        {
          id: "n4-2",
          title: "Assumptions of ordinal utility",
          titleAm: "የኦርዲናል ጠቃሚነት ግምቶች",
          body:
            "1) RATIONALITY — consumer maximizes satisfaction given income and prices.\n" +
            "2) ORDINALITY — utility is rankable, not measurable.\n" +
            "3) DIMINISHING MARGINAL RATE OF SUBSTITUTION (DMRS) — as you get more Y, you'll give up less X for one more Y.\n" +
            "4) TOTAL UTILITY depends on quantities consumed.\n" +
            "5) CONSISTENCY — if A > B now, you won't say B > A later under same conditions.\n" +
            "6) TRANSITIVITY — if A > B and B > C, then A > C.",
          bodyAm:
            "1) ምክንያታዊ\n" +
            "2) ደረጃ ብቻ\n" +
            "3) DMRS\n" +
            "4) TU በመጠን ላይ የተመሠረተ\n" +
            "5) ወጥነት\n" +
            "6) ተሻጋሪነት",
        },
        {
          id: "n4-3",
          title: "DMRS explained",
          titleAm: "DMRS ማብራሪያ",
          body:
            "MARGINAL RATE OF SUBSTITUTION (MRS): rate at which consumer is willing to give up one good for another while keeping satisfaction the SAME.\n\n" +
            "DIMINISHING MRS: as you get MORE of Y, you'll give up LESS X for each additional unit of Y.\n\n" +
            "Example:\n" +
            "• Start: give up 4 X for 1 more Y.\n" +
            "• Then: give up 3 X for 1 more Y.\n" +
            "• Then: give up 2 X for 1 more Y.\n" +
            "• Then: give up 1 X for 1 more Y.\n\n" +
            "Why? Because as you get more Y, Y becomes LESS valuable to you.",
          bodyAm:
            "MRS = ተቀያያሪ መጠን።\n" +
            "DMRS: ብዙ Y ሲኖርህ → Y ጠቀሜታ ይቀንሳል → X ትንሽ ትሰጣለህ።",
        },
        {
          id: "n4-4",
          title: "Consistency and transitivity",
          titleAm: "ወጥነትና ተሻጋሪነት",
          body:
            "CONSISTENCY: if A > B in one period, you won't switch to B > A later under identical conditions.\n" +
            "Symbol: If A > B, then NOT (B > A).\n\n" +
            "TRANSITIVITY: if A > B and B > C, then A > C.\n" +
            "Symbol: If A > B and B > C, then A > C.\n\n" +
            "These assumptions make consumer choices LOGICAL and PREDICTABLE.",
          bodyAm:
            "ወጥነት: A > B → በኋላ B > A አይሆንም።\n" +
            "ተሻጋሪነት: A > B, B > C → A > C።",
        },
        {
          id: "n4-5",
          title: "⚠ Remember trap — Ordinal theory",
          titleAm: "⚠ አትርሳ — ኦርዲናል",
          body:
            "• Ordinal CANNOT say 'X gives 5 utils'. It only ranks.\n" +
            "• 'Diminishing marginal utility' is CARDINAL; 'diminishing MRS' is ORDINAL — don't confuse them.\n" +
            "• Consistency + transitivity are about CHOICE, not measurement.\n" +
            "• Common to BOTH approaches: consumer is RATIONAL.",
          bodyAm:
            "• ኦርዲናል ቁጥር አይሰጥም።\n" +
            "• LDMU = ካርዲናል፤ DMRS = ኦርዲናል።\n" +
            "• ሁለቱም: ምክንያታዊ።",
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
        "| Quantity                    | Formula                              | Units   |\n" +
        "|-----------------------------|--------------------------------------|---------|\n" +
        "| Marginal utility            | MU = ΔTU/ΔQ                          | utils   |\n" +
        "| Total utility               | TU = ΣMU                             | utils   |\n" +
        "| One-good equilibrium        | MUx = Px                             | utils, Birr |\n" +
        "| Multi-good equilibrium      | MUx/Px = MUy/Py = … = MUm            | utils/Birr |\n" +
        "| Budget equation             | Px·X + Py·Y + … + Pn·N = I           | Birr    |\n" +
        "| MRS (ordinal)               | MRS = ΔY/ΔX (along indifference)     | ratio   |",
      bodyAm:
        "| መጠን             | ቀመር                                  |\n" +
        "|------------------|---------------------------------------|\n" +
        "| MU               | MU = ΔTU/ΔQ                           |\n" +
        "| TU               | TU = ΣMU                              |\n" +
        "| ሚዛን (አንድ)       | MUx = Px                              |\n" +
        "| ሚዛን (ብዙ)        | MUx/Px = MUy/Py = … = MUm            |\n" +
        "| በጀት            | PxX + PyY = I                         |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 1",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 1",
      body:
        "1) Utility ≠ usefulness.\n" +
        "2) MU = ΔTU/ΔQ, NOT TU/Q.\n" +
        "3) MU = 0 → TU is MAXIMUM, not zero.\n" +
        "4) At Q = 1, MU = TU.\n" +
        "5) Equilibrium formula is MUx/Px = MUy/Py, NOT MUx = MUy.\n" +
        "6) Always check the budget: PxX + PyY = I.\n" +
        "7) LDMU (cardinal) ≠ DMRS (ordinal).\n" +
        "8) Constant MU of money is an ASSUMPTION, not always true.\n" +
        "9) Cardinal can assign numbers; ordinal CANNOT.\n" +
        "10) Common assumption of both approaches: consumer is RATIONAL.",
      bodyAm:
        "1) ጠቃሚነት ≠ ጠቀሜታ።\n" +
        "2) MU = ΔTU/ΔQ።\n" +
        "3) MU=0 → TU ከፍተኛ።\n" +
        "4) MUx/Px = MUy/Py።\n" +
        "5) በጀቱን አረጋግጥ።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Utility is best defined as:", options: ["The price of a good", "The satisfaction derived from consuming a good or service", "The amount of money spent", "The usefulness of a product"], answer: "1", explanation: "Utility = satisfaction, not usefulness." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Utility is NOT synonymous with:", options: ["Satisfaction", "Pleasure", "Usefulness", "Enjoyment"], answer: "2", explanation: "Usefulness is about the product; utility is about the consumer's satisfaction." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "The utility of the same commodity is different for different people because utility is:", options: ["Constant", "Objective", "Subjective", "Zero"], answer: "2", explanation: "Utility is SUBJECTIVE (relative to each person)." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Utility is measured in:", options: ["Meters", "Utils", "Coulombs", "Joules"], answer: "1", explanation: "Cardinal utility uses the unit 'util'." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Which approach says utility is measurable in numbers?", options: ["Ordinal utility", "Cardinal utility", "Both", "Neither"], answer: "1", explanation: "Cardinal = measurable in utils/money." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Which approach ranks consumption bundles (1st, 2nd, 3rd)?", options: ["Cardinal", "Ordinal", "Neither", "Both"], answer: "1", explanation: "Ordinal = ranking." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Total Utility (TU) is defined as:", options: ["The extra satisfaction from one more unit", "Total satisfaction from consuming a specific quantity", "The price paid", "The marginal change in quantity"], answer: "1", explanation: "TU = total satisfaction for a given quantity." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Marginal Utility (MU) is defined as:", options: ["Total satisfaction from all units", "The additional satisfaction from consuming one more unit", "The price of the good", "The change in price"], answer: "1", explanation: "MU = extra satisfaction from one more unit." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "The formula for MU is:", options: ["MU = TU/Q", "MU = ΔTU/ΔQ", "MU = Q/TU", "MU = P·Q"], answer: "1", explanation: "MU = ΔTU/ΔQ." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "If MU = 0, total utility is:", options: ["Zero", "Decreasing", "Maximum", "Negative"], answer: "2", explanation: "MU = 0 → TU at MAXIMUM (saturation)." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "When MU becomes negative, TU:", options: ["Increases", "Decreases", "Stays the same", "Becomes zero"], answer: "1", explanation: "MU < 0 → TU falls." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "The Law of Diminishing Marginal Utility states that as consumption of a good increases:", options: ["TU increases at a constant rate", "MU of each additional unit decreases", "TU becomes negative", "Price falls"], answer: "1", explanation: "LDMU: MU falls as Q rises." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "The saturation point of TU occurs where:", options: ["MU is maximum", "MU = 0", "MU is negative", "TU = 0"], answer: "1", explanation: "Saturation = MU = 0." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Which is an assumption of cardinal utility theory?", options: ["Utility is ordinal", "Marginal utility of money is constant", "MRS is diminishing", "Utility is rankable"], answer: "1", explanation: "Cardinal assumes constant MU of money." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "The consumer equilibrium condition for ONE commodity X is:", options: ["MUx = Px", "MUx = 0", "MUx > Px", "Px = 0"], answer: "0", explanation: "One-good equilibrium: MUx = Px." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "The equilibrium condition for TWO goods X and Y is:", options: ["MUx = MUy", "Px = Py", "MUx/Px = MUy/Py", "MUx + MUy = Px + Py"], answer: "2", explanation: "Equal MU/P ratios." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "The consumer's budget equation for two goods is:", options: ["PxX + PyY = I", "MUx + MUy = I", "Px + Py = I", "X + Y = P"], answer: "0", explanation: "Total spending on goods equals income." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Which is a common assumption of BOTH cardinal and ordinal utility theories?", options: ["Utility is measurable", "MU of money is constant", "Consumer is rational", "MRS is diminishing"], answer: "2", explanation: "BOTH assume the consumer is RATIONAL." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "From the table: Q = 3 with TU = 29 and Q = 2 with TU = 22. MU of the 3rd unit is:", options: ["5", "7", "10", "12"], answer: "1", explanation: "MU = 29 − 22 = 7 utils." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "If TU at Q = 4 is 34 and TU at Q = 5 is 36, the MU of the 5th unit is:", options: ["1", "2", "4", "36"], answer: "1", explanation: "MU = 36 − 34 = 2." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "A consumer has MU of tea = 20 utils and price of tea = 4 Birr. MU/P for tea is:", options: ["2", "4", "5", "20"], answer: "2", explanation: "MU/P = 20/4 = 5 utils per Birr." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "If MUx/Px = 4 and MUy/Py = 2, the consumer should:", options: ["Buy more Y and less X", "Buy more X and less Y", "Stop buying both", "No change"], answer: "1", explanation: "Higher ratio → buy MORE of that good. Ratio for X is higher → buy more X." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "If a consumer's income is 22 Birr, Px = 2 Birr, X = 3, Py = 4 Birr, Y = 4, budget holds?", options: ["Yes, expenditure = 22", "No, expenditure = 20", "No, expenditure = 24", "Cannot be determined"], answer: "0", explanation: "2(3) + 4(4) = 6 + 16 = 22 ✓" },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "In the two-good equilibrium (Px = 2, Py = 4), if X = 3, the equilibrium requires MUx/Px = MUy/Py = 1. What is MUx?", options: ["1", "2", "4", "6"], answer: "1", explanation: "MUx/Px = 1 → MUx = 2 × 1 = 2." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "The maximum total utility in the textbook two-good example (X = 3, Y = 4) is:", options: ["28", "38", "40", "50"], answer: "2", explanation: "TU = (6+4+2) + (12+7+5+4) = 12 + 28 = 40." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "The principle that MRS diminishes as more of one good is consumed is an assumption of:", options: ["Cardinal utility theory", "Ordinal utility theory", "Both theories", "Neither theory"], answer: "1", explanation: "DMRS is an assumption of ORDINAL utility." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "In ordinal utility, if bundle A > B and B > C, then A > C. This is called:", options: ["Consistency", "Transitivity", "Rationality", "Cardinality"], answer: "1", explanation: "Transitivity: A > B and B > C → A > C." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "Which best describes marginal rate of substitution (MRS)?", options: ["Rate of exchanging money for goods", "Rate of giving up one good for another keeping satisfaction constant", "Rate of increasing income", "Rate of change of price"], answer: "1", explanation: "MRS = rate of substituting goods while keeping utility constant." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "Which pair of statements is TRUE?", options: ["LDMU is ordinal, DMRS is cardinal", "LDMU is cardinal, DMRS is ordinal", "Both are cardinal", "Both are ordinal"], answer: "1", explanation: "LDMU belongs to cardinal theory; DMRS belongs to ordinal theory." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "A consumer can get more utility by buying less X if:", options: ["MUx > Px", "MUx < Px", "MUx = Px", "Px = 0"], answer: "1", explanation: "If MUx < Px, the marginal birr spent on X yields less than its price → buy LESS X." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "If MU of bread is 2 and the price of bread is 2 Birr, the consumer:", options: ["Buys more bread", "Buys less bread", "Is in equilibrium for bread", "Should switch to other goods"], answer: "2", explanation: "MUx = Px → equilibrium for one good." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "The law of diminishing marginal utility helps explain:", options: ["Why supply curves slope upward", "Why demand curves slope downward", "Why prices are constant", "Why income is limited"], answer: "1", explanation: "LDMU → consumers buy more only at lower prices → downward-sloping demand." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "If total utility starts to decrease, marginal utility is:", options: ["Positive", "Zero", "Negative", "Increasing"], answer: "2", explanation: "Negative MU → TU falls." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Which is NOT an assumption of cardinal utility?", options: ["Rationality", "Cardinal measurement", "Constant MU of money", "Diminishing MRS"], answer: "3", explanation: "Diminishing MRS belongs to ORDINAL theory." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "A consumer spends all income on X and Y. If Px = 2, Py = 4, I = 22, and Y = 4, how many X can be bought?", options: ["2", "3", "4", "5"], answer: "1", explanation: "PxX + PyY = I → 2X + 4(4) = 22 → 2X = 6 → X = 3." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Given the table MUx/Px = 3 at Qx=1, 2 at Qx=2, 1 at Qx=3; MUy/Py = 3 at Qy=1, 1.75 at Qy=2, 1.5 at Qy=3, 1 at Qy=4. Income = 22, Px = 2, Py = 4. Which combination maximizes utility?", options: ["X=1, Y=1", "X=2, Y=2", "X=3, Y=4", "X=4, Y=4"], answer: "2", explanation: "X=3 (MU/P=1) and Y=4 (MU/P=1); spending = 2(3)+4(4)=22 ✓; ratios equal ✓." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "If MUx/Px = 4, MUy/Py = 2, and the consumer cannot increase total utility without violating the budget, the current allocation is:", options: ["Equilibrium", "Not equilibrium — buy more X", "Not equilibrium — buy more Y", "Impossible"], answer: "1", explanation: "Higher MU/P for X → shift spending toward X until ratios equalize." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "MUx/Px = 2, MUy/Py = 2, MUz/Pz = 5. Consumer is:", options: ["In equilibrium", "Should buy more Z", "Should buy less Z", "Should buy more X and Y"], answer: "1", explanation: "Z has highest MU/P → shift to Z until all equalize." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "Total utility is maximum when:", options: ["Average utility is maximum", "Marginal utility is zero", "Marginal utility is maximum", "Price is minimum"], answer: "1", explanation: "TU is max when MU = 0." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "In ordinal theory, MRS along an indifference curve equals the ratio:", options: ["MUx / MUy", "Px / Py", "TUx / TUy", "Qx / Qy"], answer: "0", explanation: "MRS = MUx / MUy (ratio of marginal utilities)." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Suppose X=4, Y=4 with Px=2, Py=4, I=22. This allocation:", options: ["Satisfies budget exactly", "Exceeds budget (24 > 22)", "Falls below budget", "Cannot be determined"], answer: "1", explanation: "2(4)+4(4)=8+16=24 > 22 → exceeds budget." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "If price of X rises, the MUx/Px ratio:", options: ["Stays the same", "Falls → consumer buys less X", "Rises → consumer buys more X", "Becomes zero"], answer: "1", explanation: "Rising Px → lower MU/P ratio → buy LESS X (law of demand)." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "Which statement is FALSE?", options: ["Utility is subjective", "MU can be negative", "Ordinal utility assigns cardinal numbers", "Consistency is an ordinal assumption"], answer: "2", explanation: "Ordinal utility does NOT assign cardinal numbers — only ranks." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Define utility and state whether it is subjective or objective.", answer: "Utility is the satisfaction or pleasure derived from consuming a good or service — it is the power of a commodity to satisfy human wants. It is SUBJECTIVE: the same good gives different utility to different people, at different times, and in different places.", explanation: "Utility = satisfaction; subjective." },
    { id: "q45", type: "short", difficulty: "easy", stem: "State the Law of Diminishing Marginal Utility (LDMU).", answer: "LDMU: as a consumer consumes more units of a commodity over a period of time, the marginal utility (additional satisfaction) from each successive unit DECREASES, assuming consumption of other goods remains constant.", explanation: "MU falls as Q rises." },
    { id: "q46", type: "short", difficulty: "medium", stem: "List the main assumptions of cardinal utility theory.", answer: "1) Consumer is RATIONAL.\n2) Utility is CARDINALLY measurable.\n3) Marginal utility of money is CONSTANT.\n4) Law of Diminishing Marginal Utility operates.\n5) Total utility depends on quantities of commodities: TU = f(X₁, X₂, …, Xₙ).", explanation: "Five assumptions of cardinal theory." },
    { id: "q47", type: "short", difficulty: "medium", stem: "State the consumer equilibrium condition for (a) one commodity and (b) more than one commodity.", answer: "(a) ONE commodity: MUx = Px.\n(b) MANY commodities: MUx/Px = MUy/Py = … = MUn/Pn = MUm, AND the budget PxX + PyY + … = I must be satisfied. The marginal utility per Birr must be equal across all goods.", explanation: "Both conditions must hold for multi-good equilibrium." },
    { id: "q48", type: "short", difficulty: "medium", stem: "A consumer has income 22 Birr, Px = 2, Py = 4. At equilibrium MUx/Px = MUy/Py = 1 and X = 3, Y = 4. Verify the budget and the equilibrium.", answer: "Budget: 2(3) + 4(4) = 6 + 16 = 22 = I ✓\nMU/P: 1 = 1 ✓\nTotal utility = (6+4+2) + (12+7+5+4) = 40 utils.", explanation: "Confirm budget and equal MU/P ratios." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Explain the assumptions of ordinal utility theory.", answer: "1) RATIONALITY — consumer maximizes satisfaction.\n2) ORDINALITY — utility is ranked, not measured.\n3) DIMINISHING MARGINAL RATE OF SUBSTITUTION — as more Y is consumed, less X is given up for additional Y.\n4) TOTAL UTILITY depends on quantities consumed.\n5) CONSISTENCY — if A > B now, then B > A will not occur later under same conditions.\n6) TRANSITIVITY — if A > B and B > C, then A > C.", explanation: "Six assumptions of ordinal theory." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Explain the relationship between Total Utility (TU) and Marginal Utility (MU).", answer: "TU = ΣMU (TU is the sum of marginals). Rules:\n• If MU > 0 → TU is INCREASING.\n• If MU = 0 → TU is at its MAXIMUM (saturation point).\n• If MU < 0 → TU is DECREASING.\nAt Q = 0, TU = 0. At Q = 1, TU = MU of the first unit.", explanation: "MU is the slope of TU; MU=0 marks TU maximum." },
  ],
};