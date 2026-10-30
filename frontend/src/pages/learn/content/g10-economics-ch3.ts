import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 ECONOMICS — UNIT 3
// THEORIES OF PRODUCTION AND COST
// Source: Grade 10 Economics Student Textbook (pp. 48–68)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, formula boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10EconomicsCh3: Chapter = {
  id: "ch3",
  number: 3,
  title: "Theories of Production and Cost",
  titleAm: "የምርትና የወጪ ጽንሰ-ሐሳቦች",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter has TWO halves:\n" +
        "1) PRODUCTION — how inputs become outputs (TP, AP, MP, stages, isoquants, returns to scale).\n" +
        "2) COST — how production costs behave (TC, TFC, TVC, AC, MC, short run vs long run).\n\n" +
        "The WHOLE chapter reduces to FOUR sets of formulas:\n" +
        "• Production: TP, AP = TP/L, MP = ΔTP/ΔL\n" +
        "• Cost: TC = TFC + TVC, AC = TC/Q, MC = ΔTC/ΔQ\n" +
        "• Returns to scale: increasing, constant, decreasing\n" +
        "• Mirror rule: AP/MP curves mirror AC/MC curves.\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ ሁለት ክፍሎች፡\n" +
        "1) ምርት: TP, AP, MP።\n" +
        "2) ወጪ: TC, TFC, TVC, AC, MC።\n\n" +
        "አራቱ ቀመሮች፡\n" +
        "• AP = TP/L፣ MP = ΔTP/ΔL\n" +
        "• TC = TFC + TVC፣ AC = TC/Q፣ MC = ΔTC/ΔQ",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the two halves",
          titleAm: "ደረጃ 1 · ሁለቱን ክፍሎች መረዳት",
          body:
            "PRODUCTION (short run vs long run):\n" +
            "• Short run: at least one input is FIXED.\n" +
            "• Long run: ALL inputs variable.\n" +
            "• TP, AP, MP are the core production quantities.\n" +
            "• Three STAGES of production: increasing, diminishing, negative returns.\n\n" +
            "COST (short run vs long run):\n" +
            "• Short run: TFC + TVC = TC.\n" +
            "• Long run: all inputs variable → no fixed cost.\n" +
            "• AC and MC curves are U-shaped.",
          bodyAm:
            "ምርት: ቢያንስ አንድ ግብዓት ቋሚ።\n" +
            "ወጪ: TFC + TVC = TC።\n" +
            "AC, MC U-ቅርጽ።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the FIVE formulas",
          titleAm: "ደረጃ 2 · አምስቱን ቀመሮች አስታውስ",
          body:
            "1) Average product: AP = TP / L\n" +
            "2) Marginal product: MP = ΔTP / ΔL\n" +
            "3) Total cost: TC = TFC + TVC\n" +
            "4) Average total cost: ATC = TC / Q = AFC + AVC\n" +
            "5) Marginal cost: MC = ΔTC / ΔQ",
          bodyAm:
            "1) AP = TP/L\n" +
            "2) MP = ΔTP/ΔL\n" +
            "3) TC = TFC + TVC\n" +
            "4) ATC = TC/Q = AFC + AVC\n" +
            "5) MC = ΔTC/ΔQ",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master the curves",
          titleAm: "ደረጃ 3 · ኩርባዎቹን ተቆጣጥር",
          body:
            "PRODUCTION CURVES:\n" +
            "• TP first rises at increasing rate, then decreasing rate, reaches max, then falls.\n" +
            "• AP and MP are inverted-U shaped.\n" +
            "• MP cuts AP at AP's maximum.\n" +
            "• When MP = 0 → TP maximum.\n" +
            "• When MP < 0 → TP falls (Stage III).\n\n" +
            "COST CURVES:\n" +
            "• TFC is horizontal; TVC rises.\n" +
            "• AFC falls continuously (never U-shaped).\n" +
            "• AVC, ATC, MC are U-shaped.\n" +
            "• MC cuts AVC and ATC at their MINIMUM points.",
          bodyAm:
            "MP = 0 → TP ከፍተኛ።\n" +
            "MP, AP በከፍተኛው ይገናኛሉ።\n" +
            "MC, AVC/ATC ዝቅተኛ ቦታ ይገናኛሉ።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Did you use ΔTP/ΔL for MP (not TP/L)?\n" +
            "2) Did you compute MP = TR_n − TR_(n−1) when tabular?\n" +
            "3) Did you separate fixed from variable costs?\n" +
            "4) Did you check MC = ΔTC/ΔQ?\n" +
            "5) Did you remember AFC ≠ U-shaped (only falls)?",
          bodyAm:
            "1) MP = ΔTP/ΔL።\n" +
            "2) TFC vs TVC ተለያዩ?\n" +
            "3) MC = ΔTC/ΔQ።",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Production ≠ profitability. Production creates output; profit involves cost.\n" +
            "• Short run → at least one input fixed. Long run → all variable.\n" +
            "• Stage I: MP rises; Stage II: MP positive but falling; Stage III: MP negative.\n" +
            "• Rational firm produces in Stage II — that's where AP is max & MP is positive.\n" +
            "• Returns to scale apply only when ALL inputs change by same proportion.\n" +
            "• AFC never U-shaped (always falls).\n" +
            "• ATC = AFC + AVC always.\n" +
            "• MC is the slope of TC, or ΔTC/ΔQ.",
          bodyAm:
            "• ምርት ≠ ትርፍ።\n" +
            "• ረጅም ጊዜ → ሁሉም ተለዋዋጭ።\n" +
            "• ምክንያታዊ ድርጅት Stage II ውስጥ ይሠራል።\n" +
            "• AFC በጭራሽ U-ቅርጽ አይደለም።",
        },
      ],
    },

    // ============================================================
    // 3.1 THEORY OF PRODUCTION
    // ============================================================
    {
      id: "n1",
      title: "3.1 Theory of Production",
      titleAm: "3.1 የምርት ጽንሰ-ሐሳብ",
      body:
        "Abatu, PRODUCTION is the transformation of inputs (raw materials, labor, capital) into outputs (goods and services) by adding economic value.",
      bodyAm:
        "አባቱ፣ ምርት = ግብዓቶችን ወደ ውጤቶች መለወጥ።",
      children: [
        {
          id: "n1-1",
          title: "Production function",
          titleAm: "የምርት ተግባር",
          body:
            "PRODUCTION FUNCTION: shows the highest output a firm can produce from each specified combination of inputs.\n\n" +
            "Formula (L = labor, K = capital):\n" +
            "Q = f(L, K)\n\n" +
            "Meaning: for given quantities of inputs, it tells us the maximum output.",
          bodyAm:
            "Q = f(L, K)\n" +
            "ከግብዓቶች → ከፍተኛ ውጤት።",
        },
        {
          id: "n1-2",
          title: "Short run vs long run",
          titleAm: "አጭር vs ረጅም ጊዜ",
          body:
            "SHORT RUN: at least ONE factor is FIXED (usually capital, land, plant).\n" +
            "• Formula: Q = F(L, L̄ₐ, K̄, T̄)\n" +
            "• Bar (¯) means constant.\n\n" +
            "LONG RUN: ALL factors are VARIABLE.\n" +
            "• Firm can change plant size, all inputs.\n" +
            "• No fixed costs in the long run.",
          bodyAm:
            "አጭር: ቢያንስ አንድ ቋሚ።\n" +
            "ረጅም: ሁሉም ተለዋዋጭ።",
        },
        {
          id: "n1-3",
          title: "TP, AP, and MP",
          titleAm: "TP, AP, እና MP",
          body:
            "TOTAL PRODUCT (TP): total output produced by a given amount of variable input.\n\n" +
            "AVERAGE PRODUCT (AP): output per unit of variable input.\n" +
            "AP_L = TP / L\n\n" +
            "MARGINAL PRODUCT (MP): additional output from one more unit of variable input.\n" +
            "MP_L = ΔTP / ΔL\n\n" +
            "KEY: MP = slope of TP.",
          bodyAm:
            "TP = ጠቅላላ ውጤት።\n" +
            "AP = TP/L።\n" +
            "MP = ΔTP/ΔL።\n" +
            "MP = slope of TP።",
        },
        {
          id: "n1-4",
          title: "Law of Diminishing Marginal Productivity",
          titleAm: "የህዳግ ምርት መቀነስ ሕግ",
          body:
            "LDMU (diminishing returns): as more of the variable input is added to a FIXED input, the marginal contribution of each extra unit eventually DECLINES.\n\n" +
            "Phases:\n" +
            "• Initially MP rises (specialization gains).\n" +
            "• Then MP falls (fixed input becomes congested).\n" +
            "• Eventually MP turns negative (too many workers, negative returns).\n\n" +
            "This drives the short-run TP, AP, and MP shapes.",
          bodyAm:
            "ተለዋዋጭ ግብዓት ሲጨመር → MP በመጨረሻ ይቀንሳል።\n" +
            "ከዚያ አሉታዊ ይሆናል።",
        },
        {
          id: "n1-5",
          title: "Stages of production",
          titleAm: "የምርት ደረጃዎች",
          body:
            "STAGE I — Increasing Returns:\n" +
            "• MP rises to its maximum.\n" +
            "• AP is rising.\n" +
            "• Range: L = 0 up to where MP = AP.\n\n" +
            "STAGE II — Diminishing Returns:\n" +
            "• MP is positive but falling.\n" +
            "• Range: from MP = AP to MP = 0.\n" +
            "• A RATIONAL firm operates in Stage II.\n\n" +
            "STAGE III — Negative Returns:\n" +
            "• MP is NEGATIVE.\n" +
            "• TP actually falls.\n" +
            "• Firm would NEVER operate here.",
          bodyAm:
            "Stage I: MP ↑\n" +
            "Stage II: MP > 0 ግን ↓ (ምክንያታዊ ድርጅት እዚህ ይሠራል)\n" +
            "Stage III: MP < 0",
        },
        {
          id: "n1-6",
          title: "Relationship between AP and MP",
          titleAm: "የAP እና MP ግንኙነት",
          body:
            "• When MP > AP → AP is RISING.\n" +
            "• When MP = AP → AP is at its MAXIMUM.\n" +
            "• When MP < AP → AP is FALLING.\n\n" +
            "MP cuts AP at the HIGHEST point of AP.\n\n" +
            "TP relationship:\n" +
            "• MP = 0 → TP at MAXIMUM.\n" +
            "• MP < 0 → TP falling.\n" +
            "• MP rising → TP rising at increasing rate.\n" +
            "• MP falling but > 0 → TP rising at decreasing rate.",
          bodyAm:
            "MP > AP → AP ↑\n" +
            "MP = AP → AP ከፍተኛ\n" +
            "MP < AP → AP ↓\n" +
            "MP = 0 → TP ከፍተኛ",
        },
        {
          id: "n1-7",
          title: "Isoquants and MRTS",
          titleAm: "ኢሶኳንት እና MRTS",
          body:
            "ISOQUANT: curve showing all combinations of inputs that yield the SAME output.\n\n" +
            "Properties:\n" +
            "1) Downward sloping.\n" +
            "2) Further from origin → higher output.\n" +
            "3) Never cross each other.\n" +
            "4) Convex to origin.\n\n" +
            "MRTS (Marginal Rate of Technical Substitution):\n" +
            "MRTS_L,K = ΔK / ΔL (with output constant)\n" +
            "= rate at which K can be reduced when L increases by one unit, holding Q constant.\n\n" +
            "DIMINISHING MRTS: as you add more L, you give up less K → isoquants convex.",
          bodyAm:
            "ኢሶኳንት = ተመሳሳይ ውጤት።\n" +
            "MRTS = ΔK/ΔL።\n" +
            "ቅርጽ: convex (ወደ ውስጥ ያጠጣጥፋል)።",
        },
        {
          id: "n1-8",
          title: "Returns to scale",
          titleAm: "ወደ መጠን ተመላሾች",
          body:
            "All inputs increase by same proportion 'm':\n\n" +
            "• INCREASING returns to scale: output increases by MORE than m.\n" +
            "• CONSTANT returns to scale: output increases by EXACTLY m.\n" +
            "• DECREASING returns to scale: output increases by LESS than m.\n\n" +
            "Returns to scale are a LONG-RUN concept (all inputs variable).",
          bodyAm:
            "ግብዓት ሁሉ በ m ቢጨምር:\n" +
            "• ውጤት > m: እየጨመረ\n" +
            "• ውጤት = m: ቋሚ\n" +
            "• ውጤት < m: እየቀነሰ",
        },
        {
          id: "n1-9",
          title: "Technology change",
          titleAm: "የቴክኖሎጂ ለውጥ",
          body:
            "TECHNICAL PROGRESS: new methods that increase efficiency.\n" +
            "Effect: production function shifts UP.\n" +
            "• Same inputs → more output.\n" +
            "• Same output → fewer inputs.\n" +
            "• Isoquants shift inward.\n\n" +
            "Three types (by effect on MRTS):\n" +
            "• Capital-side (capital-saving, labor-using): MRTS falls.\n" +
            "• Labor-side (labor-saving, capital-using): MRTS rises.\n" +
            "• Neutral: MRTS unchanged.",
          bodyAm:
            "ቴክኖሎጂ ማሻሻያ → PF ወደላይ።\n" +
            "ኢሶኳንት ወደ ውስጥ።",
        },
        {
          id: "n1-10",
          title: "⚠ Remember trap — Production",
          titleAm: "⚠ አትርሳ — ምርት",
          body:
            "• MP = ΔTP/ΔL, NOT TP/L (that's AP).\n" +
            "• MP = 0 when TP is MAXIMUM — most tested fact.\n" +
            "• AP is maximum when MP = AP (MP cuts AP).\n" +
            "• Stage II is where rational firms operate.\n" +
            "• In Stage III, MP is NEGATIVE and TP is FALLING.\n" +
            "• Isoquants NEVER cross.\n" +
            "• MRTS = ΔK/ΔL, NOT ΔL/ΔK.\n" +
            "• Returns to scale require ALL inputs to change.",
          bodyAm:
            "• MP = ΔTP/ΔL።\n" +
            "• MP = 0 → TP ከፍተኛ።\n" +
            "• Stage II: ምክንያታዊ።\n" +
            "• MRTS = ΔK/ΔL።",
        },
      ],
    },

    // ============================================================
    // 3.2 THEORY OF COST
    // ============================================================
    {
      id: "n2",
      title: "3.2 Theory of Cost",
      titleAm: "3.2 የወጪ ጽንሰ-ሐሳብ",
      body:
        "Abatu, COST OF PRODUCTION = expenditure on inputs. Cost functions are DERIVED from production functions.",
      bodyAm:
        "አባቱ፣ ወጪ = በግብዓቶች ላይ የሚወጣ ወጪ።",
      children: [
        {
          id: "n2-1",
          title: "Short-run costs: TFC, TVC, TC",
          titleAm: "የአጭር ጊዜ ወጪዎች",
          body:
            "TOTAL FIXED COST (TFC): costs that don't change with output.\n" +
            "• Salaries of admin staff, depreciation, rent.\n" +
            "• Constant at all output levels.\n" +
            "• Horizontal line on graph.\n\n" +
            "TOTAL VARIABLE COST (TVC): costs that vary with output.\n" +
            "• Raw materials, wages.\n" +
            "• Rises as output rises.\n\n" +
            "TOTAL COST (TC):\n" +
            "TC = TFC + TVC",
          bodyAm:
            "TFC = ቋሚ ወጪ።\n" +
            "TVC = ተለዋዋጭ ወጪ።\n" +
            "TC = TFC + TVC።",
        },
        {
          id: "n2-2",
          title: "Average and marginal costs",
          titleAm: "አማካይና ህዳግ ወጪዎች",
          body:
            "AVERAGE FIXED COST (AFC):\n" +
            "AFC = TFC / Q\n" +
            "• Always FALLS as Q rises (TFC is constant).\n" +
            "• Never U-shaped.\n\n" +
            "AVERAGE VARIABLE COST (AVC):\n" +
            "AVC = TVC / Q\n" +
            "• U-shaped.\n\n" +
            "AVERAGE TOTAL COST (ATC or AC):\n" +
            "ATC = TC / Q = AFC + AVC\n" +
            "• U-shaped.\n\n" +
            "MARGINAL COST (MC):\n" +
            "MC = ΔTC / ΔQ\n" +
            "• In short run, ΔTFC = 0 → MC = ΔTVC / ΔQ.\n" +
            "• U-shaped.",
          bodyAm:
            "AFC = TFC/Q (ሁልጊዜ ↓)\n" +
            "AVC = TVC/Q (U)\n" +
            "ATC = TC/Q = AFC + AVC\n" +
            "MC = ΔTC/ΔQ",
        },
        {
          id: "n2-3",
          title: "Worked Example — TC, AC, MC table",
          titleAm: "ሠርተ ምሳሌ — TC, AC, MC",
          body:
            "Using textbook Table 3.4 (TFC = 100):\n" +
            "Q   TFC   TVC   TC    AFC   AVC   ATC   MC\n" +
            "0   100   0     100   -     -     -     -\n" +
            "1   100   30    130   100   30    130   30\n" +
            "2   100   56    156   50    28    78    26\n" +
            "3   100   75    175   33.33 25    58.33 19\n" +
            "4   100   85    185   25    21.25 46.25 10\n" +
            "5   100   90    190   20    18    38    5\n" +
            "6   100   100   200   16.67 16.67 33.33 10\n" +
            "7   100   130   230   14.28 18.57 32.86 30\n\n" +
            "Check MC at Q=5: ΔTC = 190 − 185 = 5; MC = 5.",
          bodyAm:
            "MC(5) = 190 − 185 = 5።\n" +
            "AFC = TFC/Q።\n" +
            "ATC = AFC + AVC።",
        },
        {
          id: "n2-4",
          title: "Relationship between cost curves",
          titleAm: "የወጪ ኩርባዎች ግንኙነት",
          body:
            "• TFC is horizontal.\n" +
            "• TVC rises at increasing rate eventually.\n" +
            "• AFC falls continuously → approaches x-axis.\n" +
            "• AVC is U-shaped (min point at optimum capacity).\n" +
            "• ATC is U-shaped, lies ABOVE AVC (distance = AFC).\n" +
            "• MC is U-shaped.\n" +
            "• MC cuts AVC and ATC at their MINIMUM points.",
          bodyAm:
            "MC ከ AVC እና ATC በዝቅተኛ ቦታ ያቋርጣል።\n" +
            "ATC ከ AVC በላይ (ልዩነቱ = AFC)።",
        },
        {
          id: "n2-5",
          title: "Long-run costs",
          titleAm: "የረጅም ጊዜ ወጪዎች",
          body:
            "In the long run, all inputs are variable → NO fixed costs.\n\n" +
            "Long-run curves:\n" +
            "• LTC — Long-run Total Cost\n" +
            "• LAC — Long-run Average Cost\n" +
            "• LMC — Long-run Marginal Cost\n\n" +
            "LAC is U-shaped but FLATTER than short-run ATC.\n\n" +
            "Economies of scale: LAC falls as Q rises (left side of U).\n" +
            "Diseconomies of scale: LAC rises as Q rises (right side of U).\n" +
            "Minimum of LAC = optimal scale.",
          bodyAm:
            "ረጅም ጊዜ: TFC = 0።\n" +
            "LAC, LMC U-shaped ግን ጠፍጣፋ።\n" +
            "Economies of scale → LAC ↓።\n" +
            "Diseconomies → LAC ↑።",
        },
        {
          id: "n2-6",
          title: "Relationship between production and cost curves",
          titleAm: "የምርትና ወጪ ኩርባዎች ግንኙነት",
          body:
            "Cost curves are the MIRROR IMAGE of product curves:\n\n" +
            "• When AP rises → AC falls.\n" +
            "• When AP falls → AC rises.\n" +
            "• When AP is maximum → AC is minimum.\n" +
            "• When MP rises → MC falls.\n" +
            "• When MP falls → MC rises.\n" +
            "• When MP is maximum → MC is minimum.\n\n" +
            "Why? Because cost curves are derived from production curves.",
          bodyAm:
            "AP ↑ → AC ↓\n" +
            "AP ↓ → AC ↑\n" +
            "AP max → AC min\n" +
            "MP ↑ → MC ↓\n" +
            "MP ↓ → MC ↑\n" +
            "MP max → MC min",
        },
        {
          id: "n2-7",
          title: "⚠ Remember trap — Cost",
          titleAm: "⚠ አትርሳ — ወጪ",
          body:
            "• TFC is CONSTANT at all Q — not 'fixed to one value only at some Q'.\n" +
            "• AFC always falls — NEVER U-shaped.\n" +
            "• AFC ≠ AVC. AFC = TFC/Q; AVC = TVC/Q.\n" +
            "• ATC = AFC + AVC always.\n" +
            "• MC cuts ATC and AVC at their MINIMUM points.\n" +
            "• MC = ΔTC/ΔQ, not TC/Q (that's ATC).\n" +
            "• In long run, TFC = 0.\n" +
            "• LAC is FLATTER than short-run ATC.",
          bodyAm:
            "• TFC ቋሚ ነው።\n" +
            "• AFC ሁልጊዜ ↓።\n" +
            "• ATC = AFC + AVC።\n" +
            "• MC = ΔTC/ΔQ።",
        },
      ],
    },

    // ============================================================
    // FORMULA SHEET
    // ============================================================
    {
      id: "nFormula",
      title: "Formula Sheet — Unit 3",
      titleAm: "የቀመር ሉህ — ክፍል 3",
      body:
        "| Quantity                   | Formula                       |\n" +
        "|----------------------------|-------------------------------|\n" +
        "| Production function        | Q = f(L, K)                   |\n" +
        "| Average product            | AP = TP / L                   |\n" +
        "| Marginal product           | MP = ΔTP / ΔL                 |\n" +
        "| MRTS                       | MRTS_L,K = ΔK / ΔL            |\n" +
        "| Total cost                 | TC = TFC + TVC                |\n" +
        "| Average fixed cost         | AFC = TFC / Q                 |\n" +
        "| Average variable cost      | AVC = TVC / Q                 |\n" +
        "| Average total cost         | ATC = TC / Q = AFC + AVC      |\n" +
        "| Marginal cost              | MC = ΔTC / ΔQ                 |\n" +
        "| Returns to scale           | output %Δ vs input %Δ (m)     |",
      bodyAm:
        "| መጠን           | ቀመር                  |\n" +
        "|----------------|----------------------|\n" +
        "| AP             | TP / L                |\n" +
        "| MP             | ΔTP / ΔL              |\n" +
        "| TC             | TFC + TVC             |\n" +
        "| AFC            | TFC / Q               |\n" +
        "| AVC            | TVC / Q               |\n" +
        "| ATC            | TC / Q                |\n" +
        "| MC             | ΔTC / ΔQ              |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 3",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 3",
      body:
        "1) MP = ΔTP/ΔL, NOT TP/L (that's AP).\n" +
        "2) MP = 0 → TP is MAXIMUM.\n" +
        "3) AP is max when MP = AP.\n" +
        "4) Stage II is where rational firms operate.\n" +
        "5) Stage III: MP negative → TP falling.\n" +
        "6) Returns to scale is a LONG-RUN concept.\n" +
        "7) MRTS = ΔK/ΔL, NOT ΔL/ΔK.\n" +
        "8) AFC ALWAYS falls — never U-shaped.\n" +
        "9) ATC = AFC + AVC always.\n" +
        "10) MC cuts ATC and AVC at their minima.\n" +
        "11) LAC is flatter than short-run ATC.\n" +
        "12) Cost curves mirror product curves: AP↑ → AC↓; MP↑ → MC↓.",
      bodyAm:
        "1) MP = ΔTP/ΔL።\n" +
        "2) MP = 0 → TP max።\n" +
        "3) AFC ሁልጊዜ ↓።\n" +
        "4) MC = ΔTC/ΔQ።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Production is best defined as:", options: ["Buying goods", "Transformation of inputs into outputs by adding value", "Selling goods", "Consuming goods"], answer: "1", explanation: "Production = transforming inputs into outputs." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "The production function Q = f(L, K) shows:", options: ["Profit from labor and capital", "Maximum output for given inputs", "Total cost of production", "Market price"], answer: "1", explanation: "Production function = maximum output from given inputs." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "In the SHORT run, at least one input is:", options: ["Variable", "Fixed", "Zero", "Infinite"], answer: "1", explanation: "Short run = at least one fixed input." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "In the LONG run, all inputs are:", options: ["Fixed", "Variable", "Zero", "Equal"], answer: "1", explanation: "Long run = all inputs variable." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Total Product (TP) is:", options: ["Output per worker", "Total output for a given variable input", "Extra output from one more worker", "Fixed cost"], answer: "1", explanation: "TP = total output." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Average Product (AP) equals:", options: ["TP × L", "TP / L", "ΔTP / ΔL", "TP − L"], answer: "1", explanation: "AP = TP / L." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Marginal Product (MP) equals:", options: ["TP / L", "ΔTP / ΔL", "TP × L", "TP − L"], answer: "1", explanation: "MP = ΔTP / ΔL." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "When MP = 0, Total Product (TP) is:", options: ["Zero", "Maximum", "Falling", "Minimum"], answer: "1", explanation: "MP = 0 → TP maximum (saturation)." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Which stage of production does a rational firm prefer?", options: ["Stage I", "Stage II", "Stage III", "None"], answer: "1", explanation: "Rational firms operate in Stage II." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "In Stage III of production, MP is:", options: ["Positive and rising", "Positive and falling", "Zero", "Negative"], answer: "3", explanation: "Stage III → MP negative." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Total Fixed Cost (TFC) is:", options: ["Constant at all output levels", "Rising with output", "Falling with output", "Zero always"], answer: "0", explanation: "TFC is constant (horizontal)." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Total Cost (TC) equals:", options: ["TFC − TVC", "TFC + TVC", "TFC × TVC", "TFC / TVC"], answer: "1", explanation: "TC = TFC + TVC." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Average Fixed Cost (AFC) is:", options: ["U-shaped", "Always falling", "Horizontal", "Always rising"], answer: "1", explanation: "AFC = TFC/Q → falls continuously." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Average Variable Cost (AVC) is:", options: ["U-shaped", "Falling always", "Horizontal", "Rising always"], answer: "0", explanation: "AVC is U-shaped." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "ATC (Average Total Cost) equals:", options: ["AFC + AVC", "AFC − AVC", "AFC × AVC", "MC + AFC"], answer: "0", explanation: "ATC = AFC + AVC." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Marginal Cost (MC) equals:", options: ["TC / Q", "ΔTC / ΔQ", "TFC / Q", "TVC / Q"], answer: "1", explanation: "MC = ΔTC / ΔQ." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Isoquants show:", options: ["Equal cost combinations", "Equal output combinations of inputs", "Equal profit levels", "Fixed costs"], answer: "1", explanation: "Isoquants = equal output from different input combinations." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "The slope of an isoquant is called:", options: ["MC", "MRTS", "AP", "MP"], answer: "1", explanation: "Slope of isoquant = MRTS." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "Using Table 3.1: when L = 4, TP = 30. When L = 5, TP = 40. MP of 5th worker:", options: ["6", "8", "10", "40"], answer: "2", explanation: "MP = 40 − 30 = 10." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "When L = 5 and TP = 40, AP equals:", options: ["5", "8", "10", "40"], answer: "1", explanation: "AP = TP/L = 40/5 = 8." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "If AP is maximum, then:", options: ["MP > AP", "MP = AP", "MP < AP", "MP = 0"], answer: "1", explanation: "AP is max when MP = AP." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "When MP < AP, AP is:", options: ["Rising", "Constant", "Falling", "Maximum"], answer: "2", explanation: "MP < AP → AP falling." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "If TFC = 100, TVC = 30, then TC equals:", options: ["70", "100", "130", "30"], answer: "2", explanation: "TC = 100 + 30 = 130." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "If TFC = 100 and Q = 5, AFC equals:", options: ["10", "20", "25", "500"], answer: "1", explanation: "AFC = 100/5 = 20." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "If TVC = 75 and Q = 3, AVC equals:", options: ["15", "20", "25", "75"], answer: "2", explanation: "AVC = 75/3 = 25." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "If TC at Q=4 is 185 and at Q=5 is 190, MC of 5th unit is:", options: ["1", "5", "10", "190"], answer: "1", explanation: "MC = 190 − 185 = 5." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "In the short run, when all inputs cannot be varied, production occurs with:", options: ["All variable inputs", "At least one fixed input", "No fixed costs", "Zero output"], answer: "1", explanation: "Short run → at least one fixed input." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "Increasing returns to scale mean:", options: ["Output increases by same % as inputs", "Output increases by more % than inputs", "Output increases by less % than inputs", "Output is fixed"], answer: "1", explanation: "Increasing returns: %Δoutput > %Δinputs." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "Constant returns to scale mean:", options: ["Output increases by more %", "Output increases by same %", "Output increases by less %", "Output is zero"], answer: "1", explanation: "Constant returns: %Δoutput = %Δinputs." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "Decreasing returns to scale mean:", options: ["Output increases by more %", "Output increases by same %", "Output increases by less %", "Output is zero"], answer: "2", explanation: "Decreasing returns: %Δoutput < %Δinputs." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Returns to scale is a concept of:", options: ["Short run", "Long run", "Stage I only", "Stage III only"], answer: "1", explanation: "Returns to scale requires ALL inputs to change → LONG run." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "In the long run, fixed costs are:", options: ["High", "Zero", "Constant", "Increasing"], answer: "1", explanation: "Long run: all inputs variable → no fixed costs." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "MC cuts ATC at:", options: ["ATC maximum", "ATC minimum", "Zero", "Anywhere"], answer: "1", explanation: "MC cuts ATC at its minimum point." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "MC cuts AVC at:", options: ["AVC maximum", "AVC minimum", "Zero", "Anywhere"], answer: "1", explanation: "MC cuts AVC at its minimum point." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Economies of scale occur when:", options: ["LAC is rising", "LAC is falling", "LAC is constant", "LAC is zero"], answer: "1", explanation: "Economies of scale → LAC falls as output rises." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Given TFC = 100, TVC at Q=6 is 100, TVC at Q=7 is 130. MC of 7th unit is:", options: ["10", "20", "30", "100"], answer: "2", explanation: "MC = ΔTC = ΔTVC = 130 − 100 = 30." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "If TC = 200 at Q = 6, ATC equals:", options: ["16.67", "33.33", "100", "200"], answer: "1", explanation: "ATC = 200/6 ≈ 33.33." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "If ATC = 46.25 and AFC = 25, AVC equals:", options: ["18.75", "21.25", "25", "71.25"], answer: "1", explanation: "AVC = ATC − AFC = 46.25 − 25 = 21.25." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "Product curve MP is maximum where:", options: ["TP is maximum", "TP's inflection point", "AP is maximum", "TP is zero"], answer: "1", explanation: "MP is max where TP increases fastest — the inflection point." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "The mirror image rule says when AP is maximum:", options: ["AC is maximum", "AC is minimum", "AC is falling", "AC is rising"], answer: "1", explanation: "AP max → AC min (mirror image)." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "If a firm doubles all inputs and output triples, this is:", options: ["Constant returns to scale", "Increasing returns to scale", "Decreasing returns to scale", "Diminishing returns"], answer: "1", explanation: "Output triples > input doubling → INCREASING returns to scale." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "If a firm triples all inputs and output doubles, this is:", options: ["Increasing returns to scale", "Constant returns to scale", "Decreasing returns to scale", "Diminishing returns"], answer: "2", explanation: "Output doubles < input tripling → DECREASING returns to scale." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "When MP is negative, which stage is the firm in?", options: ["Stage I", "Stage II", "Stage III", "Any stage"], answer: "2", explanation: "MP negative → Stage III." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Define production and production function.", answer: "PRODUCTION is the transformation of inputs (raw materials, labor, capital) into outputs (goods and services) by adding economic value.\n\nPRODUCTION FUNCTION: shows the maximum output a firm can produce from each specified combination of inputs. Formula: Q = f(L, K).", explanation: "Production = transformation; PF = max output from inputs." },
    { id: "q45", type: "short", difficulty: "easy", stem: "State the law of diminishing marginal productivity.", answer: "As more units of a variable input (e.g., labor) are added to a FIXED input (e.g., capital), the marginal product of the variable input eventually DECLINES, provided technology stays constant. This creates the downward-sloping portion of the MP curve and drives the short-run production stages.", explanation: "More variable input on fixed input → MP declines eventually." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Explain the three stages of production.", answer: "STAGE I (Increasing returns): MP rises to its maximum, AP is rising. Range: up to MP = AP.\n\nSTAGE II (Diminishing returns): MP positive but falling. Range: from MP = AP to MP = 0. A rational firm operates here.\n\nSTAGE III (Negative returns): MP is NEGATIVE and TP actually falls. No rational firm operates here.", explanation: "Stage I: MP↑; Stage II: MP>0↓; Stage III: MP<0." },
    { id: "q47", type: "short", difficulty: "medium", stem: "State the assumptions of production function.", answer: "1) Technology is given and constant.\n2) Inputs are homogeneous.\n3) Firm produces efficiently (max output for inputs).\n4) Inputs can be combined in different proportions.\n5) In the short run, at least one input is fixed.\n6) In the long run, all inputs are variable.\n7) Output is measurable and divisible.", explanation: "Technology fixed, inputs homogeneous, efficient production." },
    { id: "q48", type: "short", difficulty: "medium", stem: "State the relationship between AP and MP.", answer: "• When MP > AP → AP is RISING.\n• When MP = AP → AP is at its MAXIMUM.\n• When MP < AP → AP is FALLING.\n\nMP cuts AP at AP's highest point. This reflects that adding a unit with MP above the current average raises the average, while adding one below it lowers the average.", explanation: "MP cuts AP at AP's maximum." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Explain the difference between short-run and long-run costs.", answer: "SHORT-RUN costs (some inputs fixed):\n• TC = TFC + TVC.\n• Has fixed costs (TFC) that don't change with output.\n• ATC, AVC, MC curves are U-shaped.\n\nLONG-RUN costs (all inputs variable):\n• No fixed costs (TFC = 0).\n• Only LTC, LAC, LMC curves.\n• LAC is U-shaped but flatter than short-run ATC.\n• LAC shape reflects economies and diseconomies of scale.", explanation: "Short run has TFC; long run has none." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Explain the relationship between product and cost curves.", answer: "Cost curves are mirror images of product curves:\n\n• When AP rises → AC falls.\n• When AP falls → AC rises.\n• When AP is maximum → AC is minimum.\n• When MP rises → MC falls.\n• When MP falls → MC rises.\n• When MP is maximum → MC is minimum.\n\nThis relationship exists because cost curves are derived from production functions — higher productivity means lower costs per unit.", explanation: "AP mirrors AC; MP mirrors MC." },
  ],
};