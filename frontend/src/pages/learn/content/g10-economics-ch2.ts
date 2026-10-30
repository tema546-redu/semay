import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 ECONOMICS — UNIT 2
// THEORIES OF DEMAND AND SUPPLY
// Source: Grade 10 Economics Student Textbook (pp. 17–47)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, formula boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10EconomicsCh2: Chapter = {
  id: "ch2",
  number: 2,
  title: "Theories of Demand and Supply",
  titleAm: "የፍላጎትና የአቅርቦት ጽንሰ-ሐሳቦች",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter has FOUR big parts:\n" +
        "1) DEMAND — what buyers want at each price.\n" +
        "2) SUPPLY — what sellers offer at each price.\n" +
        "3) EQUILIBRIUM — where demand = supply (market-clearing price).\n" +
        "4) ELASTICITY — how sensitive quantity is to price/income.\n\n" +
        "The WHOLE chapter reduces to FIVE formulas:\n" +
        "• Demand: Qd = a − bP\n" +
        "• Supply: Qs = a + bP\n" +
        "• Equilibrium: Qd = Qs\n" +
        "• Price elasticity: Ed = %ΔQ / %ΔP\n" +
        "• Income elasticity: Ey = %ΔQ / %ΔI\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ አራት ዋና ክፍሎች፡\n" +
        "1) ፍላጎት\n2) አቅርቦት\n3) ሚዛን\n4) ላስቲክነት\n\n" +
        "አምስቱ ቀመሮች፡\n" +
        "Qd = a − bP\n" +
        "Qs = a + bP\n" +
        "Qd = Qs\n" +
        "Ed = %ΔQ/%ΔP",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the four blocks",
          titleAm: "ደረጃ 1 · አራቱን ክፍሎች መረዳት",
          body:
            "DEMAND:\n" +
            "• Quantity buyers will purchase at each price.\n" +
            "• Price ↑ → Qd ↓ (law of demand).\n" +
            "• Demand curve SLOPES DOWN.\n\n" +
            "SUPPLY:\n" +
            "• Quantity sellers will offer at each price.\n" +
            "• Price ↑ → Qs ↑ (law of supply).\n" +
            "• Supply curve SLOPES UP.\n\n" +
            "EQUILIBRIUM:\n" +
            "• Where Qd = Qs → price has no tendency to change.\n\n" +
            "ELASTICITY:\n" +
            "• %ΔQ / %ΔP → how responsive quantity is to price.",
          bodyAm:
            "ፍላጎት: ዋጋ ↑ → Qd ↓።\n" +
            "አቅርቦት: ዋጋ ↑ → Qs ↑።\n" +
            "ሚዛን: Qd = Qs።\n" +
            "ላስቲክነት: %ΔQ/%ΔP።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the FIVE formulas",
          titleAm: "ደረጃ 2 · አምስቱን ቀመሮች አስታውስ",
          body:
            "1) Demand: Qd = a − bP (negative slope)\n" +
            "2) Supply: Qs = a + bP (positive slope)\n" +
            "3) Equilibrium: set Qd = Qs; solve for P; plug back for Q\n" +
            "4) Price elasticity: Ed = (%ΔQ) / (%ΔP) = (ΔQ/Q) / (ΔP/P)\n" +
            "5) Income elasticity: Ey = (%ΔQ) / (%ΔI)\n\n" +
            "Arc elasticity (midpoint):\n" +
            "Ed = (Q2−Q1)/(Q1+Q2) × (P1+P2)/(P2−P1)",
          bodyAm:
            "Qd = a − bP\n" +
            "Qs = a + bP\n" +
            "Qd = Qs\n" +
            "Ed = %ΔQ/%ΔP\n" +
            "Ey = %ΔQ/%ΔI",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master the movement vs shift distinction",
          titleAm: "ደረጃ 3 · እንቅስቃሴ vs መለወጥ",
          body:
            "MOVEMENT along the curve (change in QUANTITY):\n" +
            "• Caused by CHANGE IN OWN PRICE.\n" +
            "• Same curve, different point.\n\n" +
            "SHIFT of the curve (change in DEMAND/SUPPLY):\n" +
            "• Caused by ANY DETERMINANT OTHER THAN OWN PRICE.\n" +
            "• Entire curve moves.\n\n" +
            "Exam trap: 'increase in demand' vs 'increase in quantity demanded' — NOT the same!",
          bodyAm:
            "እንቅስቃሴ: በዋጋ ለውጥ።\n" +
            "መለወጥ: በሌላ ምክንያት።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Did you convert prices/quantities to the right units?\n" +
            "2) Did you EQUATE Qd and Qs properly?\n" +
            "3) Did you plug the price BACK to get quantity?\n" +
            "4) Did you distinguish shift vs movement?\n" +
            "5) Did you use % changes (not absolute) in elasticity?",
          bodyAm:
            "1) Qd = Qs?\n" +
            "2) ዋጋ ተመልሶ ተተካ?\n" +
            "3) መለወጥ vs እንቅስቃሴ?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Demand = willingness + ability to pay. NOT just 'desire'.\n" +
            "• Demand curve: downward sloping. Supply curve: upward sloping.\n" +
            "• Change in own price → movement along curve (not shift).\n" +
            "• Change in other determinants → SHIFT.\n" +
            "• Equilibrium is where curves intersect.\n" +
            "• Price elasticity of demand is NEGATIVE — often expressed in absolute value.\n" +
            "• Supply elasticity is POSITIVE.\n" +
            "• Cross elasticity > 0 → substitutes; < 0 → complements; = 0 → unrelated.\n" +
            "• Income elasticity > 1 → luxury; 0 < Ey < 1 → necessity; < 0 → inferior.",
          bodyAm:
            "• ፍላጎት = ፈቃድ + አቅም።\n" +
            "• በዋጋ → እንቅስቃሴ።\n" +
            "• በሌላ → መለወጥ።\n" +
            "• Ed አሉታዊ፤ Es አዎንታዊ።\n" +
            "• Cross > 0 = ተተኪ፤ < 0 = ተጨማሪ።",
        },
      ],
    },

    // ============================================================
    // 2.1 THEORY OF DEMAND
    // ============================================================
    {
      id: "n1",
      title: "2.1 Theory of Demand",
      titleAm: "2.1 የፍላጎት ጽንሰ-ሐሳብ",
      body:
        "Abatu, DEMAND is the quantity consumers are ABLE and WILLING to buy at various prices in a given period. Demand = willingness + ability to pay.",
      bodyAm:
        "አባቱ፣ ፍላጎት = ፈቃድ + አቅም።",
      children: [
        {
          id: "n1-1",
          title: "Demand schedule, function, and curve",
          titleAm: "የፍላጎት ሠንጠረዥ፣ ተግባርና ኩርባ",
          body:
            "DEMAND SCHEDULE: table showing quantity demanded at each price.\n\n" +
            "DEMAND FUNCTION: Qd = f(P) = a − bP\n" +
            "• a = intercept (quantity at P = 0)\n" +
            "• b = slope coefficient (negative → downward)\n\n" +
            "DEMAND CURVE: graph with PRICE on vertical axis and QUANTITY on horizontal axis. Slopes DOWNWARD.",
          bodyAm:
            "ሠንጠረዥ: ዋጋ vs መጠን።\n" +
            "ተግባር: Qd = a − bP።\n" +
            "ኩርባ: ወደታች ያዘነብላል።",
        },
        {
          id: "n1-2",
          title: "Law of demand",
          titleAm: "የፍላጎት ሕግ",
          body:
            "LAW OF DEMAND: all other things remaining constant (ceteris paribus), as PRICE rises, QUANTITY DEMANDED falls; as price falls, quantity demanded rises.\n\n" +
            "• Price and quantity are INVERSELY related.\n" +
            "• Demand curve slopes DOWNWARD.\n\n" +
            "Why? Income effect + substitution effect + LDMU from Chapter 1.",
          bodyAm:
            "ዋጋ ↑ → Qd ↓።\n" +
            "ዋጋ ↓ → Qd ↑።\n" +
            "ተገላቢጦሽ ግንኙነት።",
        },
        {
          id: "n1-3",
          title: "Factors affecting demand (determinants)",
          titleAm: "የፍላጎት ወሳኝ ምክንያቶች",
          body:
            "• PRICE of the good (own price).\n" +
            "• PRICE OF RELATED GOODS:\n" +
            "   – Substitutes (tea/coffee): price of sub ↑ → demand for good ↑.\n" +
            "   – Complements (tea/sugar): price of comp ↑ → demand for good ↓.\n" +
            "• CONSUMER INCOME: income ↑ → demand ↑ (normal goods).\n" +
            "• TASTE AND HABITS: change in taste changes demand.\n" +
            "• POPULATION: larger population → greater demand.\n" +
            "• SEASON: woolen clothes in cold seasons.\n" +
            "• FUTURE PRICE EXPECTATION: expect price rise → buy more now.",
          bodyAm:
            "• ዋጋ\n" +
            "• ተተኪ/ተጨማሪ ዋጋ\n" +
            "• ገቢ\n" +
            "• ምርጫ\n" +
            "• ህዝብ\n" +
            "• ወቅት\n" +
            "• ትንበያ",
        },
        {
          id: "n1-4",
          title: "Change in quantity demanded vs change in demand",
          titleAm: "የፍላጎት መጠን ለውጥ vs ፍላጎት ለውጥ",
          body:
            "CHANGE IN QUANTITY DEMANDED:\n" +
            "• Movement ALONG the same demand curve.\n" +
            "• Caused by change in OWN PRICE.\n" +
            "• Downward movement = EXTENSION of demand.\n" +
            "• Upward movement = CONTRACTION of demand.\n\n" +
            "CHANGE IN DEMAND:\n" +
            "• SHIFT of the entire demand curve.\n" +
            "• Caused by any non-price determinant.\n" +
            "• Increase → shift RIGHT (D0 → D1).\n" +
            "• Decrease → shift LEFT (D0 → D2).",
          bodyAm:
            "መጠን ለውጥ: በዋጋ፤ በኩርባ ላይ እንቅስቃሴ።\n" +
            "ፍላጎት ለውጥ: በሌሎች፤ ኩርባ ይለወጣል።",
        },
        {
          id: "n1-5",
          title: "Individual and market demand",
          titleAm: "የግልና የገበያ ፍላጎት",
          body:
            "INDIVIDUAL DEMAND: quantity one consumer is willing and able to buy at each price.\n\n" +
            "MARKET DEMAND: horizontal sum of all individual demands at each price.\n" +
            "Qm = Qa + Qb + Qc + …\n\n" +
            "If n identical consumers each demand Q = f(P):\n" +
            "Qm = n × Q\n\n" +
            "Example: 100 buyers, each Qd = 50 − 5P:\n" +
            "Qm = 100(50 − 5P) = 5000 − 500P",
          bodyAm:
            "የገበያ ፍላጎት = የግል ፍላጎቶች ድምር።\n" +
            "100 ሸማቾች: Qm = 5000 − 500P።",
        },
        {
          id: "n1-6",
          title: "Worked Example — Market demand",
          titleAm: "ሠርተ ምሳሌ — የገበያ ፍላጎት",
          body:
            "Problem: Individual demand QI = 50 − 5P. There are 100 identical buyers. Find market demand function.\n\n" +
            "Solution:\n" +
            "Qm = 100 × (50 − 5P)\n" +
            "   = 5000 − 500P",
          bodyAm:
            "Qm = 100(50 − 5P) = 5000 − 500P",
        },
        {
          id: "n1-7",
          title: "⚠ Remember trap — Demand",
          titleAm: "⚠ አትርሳ — ፍላጎት",
          body:
            "• Demand ≠ desire. Demand = willingness + ability to pay.\n" +
            "• Change in OWN PRICE → movement on curve, NOT shift.\n" +
            "• Change in OTHER determinants → SHIFT.\n" +
            "• Price ↑ for substitute → demand for OUR good ↑.\n" +
            "• Price ↑ for complement → demand for OUR good ↓.\n" +
            "• Market demand curve is FLATTER than individual.\n" +
            "• Demand curve: price on VERTICAL, quantity on HORIZONTAL.",
          bodyAm:
            "• ፍላጎት ≠ ምኞት።\n" +
            "• በዋጋ → እንቅስቃሴ።\n" +
            "• ተተኪ ዋጋ ↑ → ፍላጎታችን ↑።\n" +
            "• ተጨማሪ ዋጋ ↑ → ፍላጎታችን ↓።",
        },
      ],
    },

    // ============================================================
    // 2.2 THEORY OF SUPPLY
    // ============================================================
    {
      id: "n2",
      title: "2.2 Theory of Supply",
      titleAm: "2.2 የአቅርቦት ጽንሰ-ሐሳብ",
      body:
        "Abatu, SUPPLY is the amount producers are willing and able to offer for sale at various prices in a given period.",
      bodyAm:
        "አባቱ፣ አቅርቦት = አምራቾች ለመሸጥ ያቀርቡት መጠን።",
      children: [
        {
          id: "n2-1",
          title: "Supply schedule, function, and curve",
          titleAm: "የአቅርቦት ሠንጠረዥ፣ ተግባርና ኩርባ",
          body:
            "SUPPLY SCHEDULE: table showing quantity supplied at each price.\n\n" +
            "SUPPLY FUNCTION: Qs = a + bP\n" +
            "• a = intercept\n" +
            "• b = positive slope coefficient\n\n" +
            "SUPPLY CURVE: upward sloping (price on vertical, quantity on horizontal).",
          bodyAm:
            "Qs = a + bP።\n" +
            "ኩርባ ወደላይ።",
        },
        {
          id: "n2-2",
          title: "Law of supply",
          titleAm: "የአቅርቦት ሕግ",
          body:
            "LAW OF SUPPLY: all other things constant, as PRICE of a good rises, QUANTITY SUPPLIED rises; as price falls, quantity supplied falls.\n\n" +
            "• Price and quantity are DIRECTLY related.\n" +
            "• Supply curve slopes UPWARD.",
          bodyAm:
            "ዋጋ ↑ → Qs ↑።\n" +
            "ቀጥተኛ ግንኙነት።",
        },
        {
          id: "n2-3",
          title: "Factors affecting supply",
          titleAm: "የአቅርቦት ወሳኝ ምክንያቶች",
          body:
            "• COST OF FACTORS OF PRODUCTION: higher cost → lower supply.\n" +
            "• TECHNOLOGY: better technology → higher supply.\n" +
            "• EXTERNAL FACTORS: floods, weather → affect supply.\n" +
            "• TAXES AND SUBSIDIES: subsidies → higher supply; taxes → lower supply.\n" +
            "• TRANSPORT: better transport → higher supply.\n" +
            "• PRICE OF OTHER GOODS: if price of other goods higher, producers may switch.\n" +
            "• NUMBER OF SELLERS: more sellers → more supply.",
          bodyAm:
            "• ወጪ\n• ቴክኖሎጂ\n• ውጫዊ ሁኔታ\n• ታክስ/ሱብሲዲ\n• ትራንስፖርት\n• የሌላ ሸቀጥ ዋጋ\n• የሻጮች ቁጥር",
        },
        {
          id: "n2-4",
          title: "Change in quantity supplied vs change in supply",
          titleAm: "የአቅርቦት መጠን ለውጥ vs አቅርቦት ለውጥ",
          body:
            "CHANGE IN QUANTITY SUPPLIED:\n" +
            "• Movement ALONG supply curve.\n" +
            "• Caused by change in OWN PRICE.\n\n" +
            "CHANGE IN SUPPLY:\n" +
            "• SHIFT of supply curve.\n" +
            "• Caused by non-price factors.\n" +
            "• Increase → shift RIGHT.\n" +
            "• Decrease → shift LEFT.",
          bodyAm:
            "መጠን ለውጥ: በዋጋ።\n" +
            "አቅርቦት ለውጥ: በሌሎች።",
        },
        {
          id: "n2-5",
          title: "Market supply",
          titleAm: "የገበያ አቅርቦት",
          body:
            "MARKET SUPPLY = horizontal sum of individual supplies at each price.\n\n" +
            "If n identical sellers each supply Qs = f(P):\n" +
            "Qm = n × Qs\n\n" +
            "Example: 120 sellers, each Qs = 20P − 5:\n" +
            "Qm = 120(20P − 5) = 2400P − 600\n" +
            "At P = 4: Qm = 2400(4) − 600 = 9000 tons.",
          bodyAm:
            "Qm = n × Qs።\n" +
            "120 ሻጮች: Qm = 2400P − 600።\n" +
            "በP=4: Qm = 9000።",
        },
        {
          id: "n2-6",
          title: "⚠ Remember trap — Supply",
          titleAm: "⚠ አትርሳ — አቅርቦት",
          body:
            "• Supply curve slopes UPWARD (price and Qs move together).\n" +
            "• Change in own price → movement along curve, NOT shift.\n" +
            "• Technology improvement → supply increases (shift right).\n" +
            "• Cost of production ↑ → supply decreases (shift left).\n" +
            "• Subsidy → supply increases; tax → supply decreases.\n" +
            "• Market supply is flatter than individual supply.",
          bodyAm:
            "• ወደላይ ያዘነብላል።\n" +
            "• ቴክኖሎጂ ↑ → S ↑።\n" +
            "• ወጪ ↑ → S ↓።\n" +
            "• ሱብሲዲ → S ↑፤ ታክስ → S ↓።",
        },
      ],
    },

    // ============================================================
    // 2.3 MARKET EQUILIBRIUM
    // ============================================================
    {
      id: "n3",
      title: "2.3 Market Equilibrium",
      titleAm: "2.3 የገበያ ሚዛን",
      body:
        "Abatu, equilibrium occurs when Qd = Qs. The resulting price is the EQUILIBRIUM PRICE (market-clearing price) and the quantity is the EQUILIBRIUM QUANTITY.",
      bodyAm:
        "አባቱ፣ ሚዛን = Qd = Qs።",
      children: [
        {
          id: "n3-1",
          title: "Definition and meaning",
          titleAm: "ትርጉም",
          body:
            "MARKET EQUILIBRIUM: a state where quantity demanded = quantity supplied. Once reached, it TENDS TO PERSIST — no incentive to change.\n\n" +
            "• EQUILIBRIUM PRICE (P*): price that clears the market.\n" +
            "• EQUILIBRIUM QUANTITY (Q*): quantity bought and sold at P*.\n\n" +
            "Graphically: intersection of demand and supply curves.",
          bodyAm:
            "P* = የሚያጸዳ ዋጋ።\n" +
            "Q* = መጠን።\n" +
            "መገናኛ ነጥብ።",
        },
        {
          id: "n3-2",
          title: "Surplus and shortage",
          titleAm: "ትርፍና ጉድለት",
          body:
            "SURPLUS (excess supply): Qs > Qd. Occurs at prices ABOVE equilibrium. Sellers cut price → surplus falls.\n\n" +
            "SHORTAGE (excess demand): Qd > Qs. Occurs at prices BELOW equilibrium. Buyers bid price up → shortage falls.\n\n" +
            "KEY: The market self-corrects toward equilibrium.",
          bodyAm:
            "ትርፍ: Qs > Qd (ከሚዛን በላይ)።\n" +
            "ጉድለት: Qd > Qs (ከሚዛን በታች)።\n" +
            "ገበያ ወደ ሚዛን ይመለሳል።",
        },
        {
          id: "n3-3",
          title: "Worked Example — Equilibrium computation",
          titleAm: "ሠርተ ምሳሌ — ሚዛን ስሌት",
          body:
            "Problem: Qd = 80 − 3P, Qs = 9P − 40.\n\n" +
            "Solution:\n" +
            "Set Qd = Qs:\n" +
            "80 − 3P = 9P − 40\n" +
            "120 = 12P\n" +
            "P* = 10 Birr\n\n" +
            "Quantity:\n" +
            "Qd = 80 − 3(10) = 50\n" +
            "Q* = 50 units\n\n" +
            "Check: Qs = 9(10) − 40 = 50 ✓",
          bodyAm:
            "80 − 3P = 9P − 40\n" +
            "P* = 10\n" +
            "Q* = 50",
        },
        {
          id: "n3-4",
          title: "Effect of demand shifts (supply constant)",
          titleAm: "የፍላጎት መለወጥ ተጽእኖ",
          body:
            "DEMAND INCREASES (shift right):\n" +
            "• P* ↑ and Q* ↑.\n\n" +
            "DEMAND DECREASES (shift left):\n" +
            "• P* ↓ and Q* ↓.\n\n" +
            "Both price and quantity move in the SAME direction as demand.",
          bodyAm:
            "D ↑: P* ↑, Q* ↑።\n" +
            "D ↓: P* ↓, Q* ↓።",
        },
        {
          id: "n3-5",
          title: "Effect of supply shifts (demand constant)",
          titleAm: "የአቅርቦት መለወጥ ተጽእኖ",
          body:
            "SUPPLY INCREASES (shift right):\n" +
            "• P* ↓ and Q* ↑.\n\n" +
            "SUPPLY DECREASES (shift left):\n" +
            "• P* ↑ and Q* ↓.\n\n" +
            "Price and quantity move in OPPOSITE directions when supply shifts.",
          bodyAm:
            "S ↑: P* ↓, Q* ↑።\n" +
            "S ↓: P* ↑, Q* ↓።",
        },
        {
          id: "n3-6",
          title: "⚠ Remember trap — Equilibrium",
          titleAm: "⚠ አትርሳ — ሚዛን",
          body:
            "• At equilibrium, Qd = Qs AND no tendency to change.\n" +
            "• Price ABOVE equilibrium → SURPLUS.\n" +
            "• Price BELOW equilibrium → SHORTAGE.\n" +
            "• Demand ↑ → BOTH P* and Q* rise.\n" +
            "• Supply ↑ → P* falls, Q* rises.\n" +
            "• If BOTH demand and supply increase, Q* rises but P* change is indeterminate.\n" +
            "• Always solve by setting Qd = Qs.",
          bodyAm:
            "• ከሚዛን በላይ → ትርፍ።\n" +
            "• ከሚዛን በታች → ጉድለት።\n" +
            "• D ↑ → P*, Q* ↑።\n" +
            "• S ↑ → P* ↓, Q* ↑።",
        },
      ],
    },

    // ============================================================
    // 2.4 ELASTICITIES OF DEMAND AND SUPPLY
    // ============================================================
    {
      id: "n4",
      title: "2.4 Elasticities of Demand and Supply",
      titleAm: "2.4 የፍላጎትና አቅርቦት ላስቲክነት",
      body:
        "Abatu, ELASTICITY measures how sensitive one variable is to another — % change in one variable from a 1% change in another.",
      bodyAm:
        "አባቱ፣ ላስቲክነት = ስሜታዊነት መለኪያ።",
      children: [
        {
          id: "n4-1",
          title: "Price elasticity of demand (Ed)",
          titleAm: "የፍላጎት ዋጋ ላስቲክነት",
          body:
            "FORMULA:\n" +
            "Ed = (%ΔQd) / (%ΔP) = (ΔQ/Q) / (ΔP/P)\n\n" +
            "Since Qd and P move in OPPOSITE directions, Ed is NEGATIVE. We usually take the ABSOLUTE value.\n\n" +
            "TYPES:\n" +
            "• |Ed| > 1 → ELASTIC (quantity very responsive)\n" +
            "• |Ed| = 1 → UNITARY ELASTIC\n" +
            "• 0 < |Ed| < 1 → INELASTIC (quantity not very responsive)\n" +
            "• Ed = 0 → PERFECTLY INELASTIC (vertical demand)\n" +
            "• Ed = ∞ → PERFECTLY ELASTIC (horizontal demand)",
          bodyAm:
            "Ed = %ΔQ/%ΔP።\n" +
            "|Ed|>1: elastic፤\n" +
            "|Ed|=1: unitary፤\n" +
            "|Ed|<1: inelastic።",
        },
        {
          id: "n4-2",
          title: "Point vs Arc elasticity",
          titleAm: "የነጥብ vs የአርክ ላስቲክነት",
          body:
            "POINT elasticity: measured at a specific point (very small change).\n" +
            "Ed = (ΔQ/ΔP) × (P/Q)\n\n" +
            "ARC elasticity: measured over a range (average).\n" +
            "Ed = (Q2 − Q1)/(Q1 + Q2) × (P1 + P2)/(P2 − P1)\n\n" +
            "Arc is more accurate when price changes are LARGE.",
          bodyAm:
            "ነጥብ: በአንድ ነጥብ።\n" +
            "አርክ: በክልል።",
        },
        {
          id: "n4-3",
          title: "Worked Example — Arc elasticity",
          titleAm: "ሠርተ ምሳሌ — አርክ ላስቲክነት",
          body:
            "Table 2.10:\n" +
            "Point A: P = 0, Q = 800\n" +
            "Point B: P = 2, Q = 600\n" +
            "Point C: P = 4, Q = 400\n" +
            "Point D: P = 6, Q = 200\n" +
            "Point E: P = 8, Q = 0\n\n" +
            "Find Ed between B (P=2, Q=600) and C (P=4, Q=400):\n\n" +
            "Ed = (Q2 − Q1)/(Q1 + Q2) × (P1 + P2)/(P2 − P1)\n" +
            "   = (400 − 600)/(600 + 400) × (2 + 4)/(4 − 2)\n" +
            "   = (−200/1000) × (6/2)\n" +
            "   = (−0.2) × 3\n" +
            "   = −0.6 → |Ed| = 0.6 (INELASTIC)",
          bodyAm:
            "Ed = (−200/1000) × (6/2) = −0.6።\n" +
            "|Ed| = 0.6 → inelastic።",
        },
        {
          id: "n4-4",
          title: "Determinants of price elasticity of demand",
          titleAm: "የEd ወሳኝ ምክንያቶች",
          body:
            "• NATURE OF COMMODITY: necessities → inelastic; luxuries → elastic.\n" +
            "• AVAILABILITY OF SUBSTITUTES: more substitutes → more elastic.\n" +
            "• INCOME LEVEL: high-income consumers less affected by price.\n" +
            "• PROPORTION OF INCOME SPENT: small share of income → inelastic.\n" +
            "• URGENCY: urgent/medicine → inelastic (can't postpone).\n" +
            "• DURABILITY: durable goods → more elastic.\n" +
            "• FREQUENCY: frequently purchased → more elastic.\n" +
            "• TIME: short run → less elastic; long run → more elastic.",
          bodyAm:
            "• አስፈላጊነት\n" +
            "• ተተኪዎች\n" +
            "• ገቢ\n" +
            "• የገቢ ድርሻ\n" +
            "• አስቸኳይነት\n" +
            "• ጊዜ",
        },
        {
          id: "n4-5",
          title: "Cross elasticity of demand",
          titleAm: "የመስቀል ላስቲክነት",
          body:
            "CROSS ELASTICITY: responsiveness of demand for X to change in PRICE OF Y.\n\n" +
            "Exy = (%ΔQx) / (%ΔPy)\n\n" +
            "INTERPRETATION:\n" +
            "• Exy > 0 → X and Y are SUBSTITUTES (e.g., Coca-Cola & Pepsi).\n" +
            "• Exy < 0 → X and Y are COMPLEMENTS (e.g., tea & sugar).\n" +
            "• Exy = 0 → X and Y are UNRELATED / INDEPENDENT.\n\n" +
            "Larger |Exy| means stronger relationship.",
          bodyAm:
            "Exy = %ΔQx / %ΔPy።\n" +
            "Exy > 0: ተተኪ።\n" +
            "Exy < 0: ተጨማሪ።\n" +
            "Exy = 0: ያልተዛመደ።",
        },
        {
          id: "n4-6",
          title: "Income elasticity of demand",
          titleAm: "የገቢ ላስቲክነት",
          body:
            "INCOME ELASTICITY: responsiveness of demand to change in INCOME.\n\n" +
            "Ey = (%ΔQ) / (%ΔI)\n\n" +
            "INTERPRETATION:\n" +
            "• Ey < 0 → INFERIOR good (income ↑ → demand ↓).\n" +
            "• 0 < Ey < 1 → NECESSITY good.\n" +
            "• Ey > 1 → LUXURY good (income ↑ → demand ↑ more than proportionally).\n" +
            "• Ey = 1 → unit income elastic.",
          bodyAm:
            "Ey = %ΔQ/%ΔI።\n" +
            "Ey < 0: የተናነሰ።\n" +
            "0 < Ey < 1: አስፈላጊ።\n" +
            "Ey > 1: ቅንጦት።",
        },
        {
          id: "n4-7",
          title: "Worked Example — Income elasticity",
          titleAm: "ሠርተ ምሳሌ — የገቢ ላስቲክነት",
          body:
            "Table 2.11:\n" +
            "Income (I): 12,000  16,000  20,000  24,000  28,000\n" +
            "Quantity:   10      15      18      20      19\n\n" +
            "Find Ey at I = 16,000.\n\n" +
            "Point elasticity:\n" +
            "Ey = (ΔQ/ΔI) × (I/Q)\n" +
            "At I = 16,000: use points (12k,10) and (20k,18) for ΔQ/ΔI:\n" +
            "ΔQ = 18 − 10 = 8, ΔI = 20,000 − 12,000 = 8,000\n" +
            "ΔQ/ΔI = 8/8,000 = 0.001\n" +
            "Ey = 0.001 × (16,000/15) ≈ 1.07\n\n" +
            "Ey > 1 → LUXURY good.",
          bodyAm:
            "Ey ≈ 1.07 → ቅንጦት።",
        },
        {
          id: "n4-8",
          title: "Elasticity of supply",
          titleAm: "የአቅርቦት ላስቲክነት",
          body:
            "PRICE ELASTICITY OF SUPPLY (Es) = %ΔQs / %ΔP.\n\n" +
            "• Es > 1 → supply is ELASTIC.\n" +
            "• Es = 1 → UNITARY.\n" +
            "• Es < 1 → INELASTIC.\n\n" +
            "Because price and Qs move together, Es is POSITIVE.\n\n" +
            "DETERMINANTS:\n" +
            "• FUTURE PRICE EXPECTATIONS.\n" +
            "• PRODUCTION PERIOD (time) — long run more elastic.\n" +
            "• FACTOR SUBSTITUTION — easier → more elastic.\n" +
            "• NUMBER OF SELLERS — more → more elastic.",
          bodyAm:
            "Es = %ΔQs/%ΔP።\n" +
            "Es አዎንታዊ ነው።\n" +
            "ጊዜ ረጅም → Es ↑።",
        },
        {
          id: "n4-9",
          title: "Worked Example — Supply elasticity",
          titleAm: "ሠርተ ምሳሌ — የአቅርቦት ላስቲክነት",
          body:
            "Table 2.12:\n" +
            "Price: 60  80  100  120\n" +
            "Qs:    14  16  18   20\n\n" +
            "Point elasticity at P = 80:\n" +
            "Use nearby points (60,14) and (100,18):\n" +
            "ΔQ/ΔP = (18 − 14)/(100 − 60) = 4/40 = 0.1\n" +
            "Es = (ΔQ/ΔP) × (P/Q)\n" +
            "   = 0.1 × (80/16)\n" +
            "   = 0.1 × 5\n" +
            "   = 0.5 (INELASTIC)",
          bodyAm:
            "Es = 0.1 × 5 = 0.5 (inelastic)።",
        },
        {
          id: "n4-10",
          title: "⚠ Remember trap — Elasticity",
          titleAm: "⚠ አትርሳ — ላስቲክነት",
          body:
            "• ALWAYS use % changes, NOT absolute changes.\n" +
            "• Ed is NEGATIVE — often expressed in absolute value.\n" +
            "• Es is POSITIVE.\n" +
            "• Cross elasticity > 0 → substitutes; < 0 → complements.\n" +
            "• Income elasticity > 1 → luxury; < 0 → inferior.\n" +
            "• Arc formula uses AVERAGE midpoint for large price changes.\n" +
            "• Necessities → inelastic. Luxuries → elastic.\n" +
            "• More substitutes → more elastic.\n" +
            "• Time → more elastic in the LONG run.",
          bodyAm:
            "• Ed አሉታዊ።\n" +
            "• Es አዎንታዊ።\n" +
            "• Cross > 0: ተተኪ።\n" +
            "• Ey > 1: ቅንጦት።",
        },
      ],
    },

    // ============================================================
    // FORMULA SHEET
    // ============================================================
    {
      id: "nFormula",
      title: "Formula Sheet — Unit 2",
      titleAm: "የቀመር ሉህ — ክፍል 2",
      body:
        "| Quantity                     | Formula                                    |\n" +
        "|------------------------------|--------------------------------------------|\n" +
        "| Demand function              | Qd = a − bP                                |\n" +
        "| Supply function              | Qs = a + bP                                |\n" +
        "| Market demand (n identical)  | Qm = n·Qd                                  |\n" +
        "| Market supply (n identical)  | Qm = n·Qs                                  |\n" +
        "| Equilibrium                  | Set Qd = Qs → solve P*; plug back for Q*   |\n" +
        "| Price elasticity (point)     | Ed = (ΔQ/ΔP) × (P/Q)                       |\n" +
        "| Price elasticity (arc)       | Ed = (Q₂−Q₁)/(Q₁+Q₂) × (P₁+P₂)/(P₂−P₁)     |\n" +
        "| Cross elasticity             | Exy = (%ΔQx) / (%ΔPy)                      |\n" +
        "| Income elasticity            | Ey = (%ΔQ) / (%ΔI)                         |\n" +
        "| Supply elasticity            | Es = (%ΔQs) / (%ΔP)                        |",
      bodyAm:
        "| መጠን              | ቀመር                                |\n" +
        "|-------------------|--------------------------------------|\n" +
        "| ፍላጎት             | Qd = a − bP                          |\n" +
        "| አቅርቦት             | Qs = a + bP                          |\n" +
        "| ሚዛን              | Qd = Qs                              |\n" +
        "| Ed (ነጥብ)          | Ed = (ΔQ/ΔP)·(P/Q)                   |\n" +
        "| Ed (አርክ)          | (Q₂−Q₁)/(Q₁+Q₂) × (P₁+P₂)/(P₂−P₁)  |\n" +
        "| Exy               | %ΔQx/%ΔPy                            |\n" +
        "| Ey                | %ΔQ/%ΔI                              |\n" +
        "| Es                | %ΔQs/%ΔP                             |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 2",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 2",
      body:
        "1) Demand ≠ desire. Demand = willingness + ability.\n" +
        "2) Change in own price → MOVEMENT along curve.\n" +
        "3) Change in other determinants → SHIFT.\n" +
        "4) Substitute price ↑ → demand for our good ↑.\n" +
        "5) Complement price ↑ → demand for our good ↓.\n" +
        "6) Supply curve slopes UP; demand curve slopes DOWN.\n" +
        "7) Equilibrium: set Qd = Qs; solve P*; plug back for Q*.\n" +
        "8) Demand ↑ → P* ↑, Q* ↑.\n" +
        "9) Supply ↑ → P* ↓, Q* ↑.\n" +
        "10) Ed is negative — usually expressed as absolute value.\n" +
        "11) Cross elasticity > 0 → substitutes; < 0 → complements.\n" +
        "12) Income elasticity > 1 → luxury; < 0 → inferior.\n" +
        "13) Use % changes in elasticity — not absolute changes.\n" +
        "14) Arc elasticity: use midpoint formula for accuracy.",
      bodyAm:
        "1) ፍላጎት ≠ ምኞት።\n" +
        "2) በዋጋ → እንቅስቃሴ።\n" +
        "3) በሌላ → መለወጥ።\n" +
        "4) Qd = Qs።\n" +
        "5) D ↑ → P*, Q* ↑።\n" +
        "6) S ↑ → P* ↓, Q* ↑።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Demand is best defined as:", options: ["The desire to own a good", "The ability and willingness to buy a specific quantity at a given price", "The amount producers offer for sale", "The total satisfaction from a good"], answer: "1", explanation: "Demand = willingness + ability to pay." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "According to the law of demand, as price increases, quantity demanded:", options: ["Increases", "Decreases", "Stays the same", "Becomes zero"], answer: "1", explanation: "Price ↑ → Qd ↓ (inverse relationship)." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "The demand curve normally slopes:", options: ["Upward", "Downward", "Horizontal", "Vertical"], answer: "1", explanation: "Inverse P–Q relationship → downward slope." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "The supply curve normally slopes:", options: ["Upward", "Downward", "Horizontal", "Vertical"], answer: "0", explanation: "Direct P–Q relationship → upward slope." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "The supply function is generally written as:", options: ["Qs = a − bP", "Qs = a + bP", "Qs = a/P", "Qs = a·P²"], answer: "1", explanation: "Positive slope for supply." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Market equilibrium occurs when:", options: ["Qd > Qs", "Qd < Qs", "Qd = Qs", "Price = 0"], answer: "2", explanation: "Equilibrium: Qd = Qs." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "A SURPLUS exists when:", options: ["Qd > Qs", "Qs > Qd", "Qd = Qs", "Price is zero"], answer: "1", explanation: "Surplus = Qs > Qd (price above equilibrium)." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "A SHORTAGE exists when:", options: ["Qd > Qs", "Qs > Qd", "Qd = Qs", "Price is infinity"], answer: "0", explanation: "Shortage = Qd > Qs (price below equilibrium)." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "An increase in demand causes the demand curve to:", options: ["Shift left", "Shift right", "Stay the same", "Become vertical"], answer: "1", explanation: "Increase in demand → shift RIGHT." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "An increase in supply causes the supply curve to:", options: ["Shift left", "Shift right", "Stay the same", "Become horizontal"], answer: "1", explanation: "Increase in supply → shift RIGHT." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "A change in the good's OWN price causes:", options: ["Shift in demand", "Shift in supply", "Movement along the curve", "Equilibrium to break"], answer: "2", explanation: "Own price change → movement ALONG the curve." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Coffee and tea are examples of:", options: ["Complementary goods", "Substitute goods", "Independent goods", "Inferior goods"], answer: "1", explanation: "Coffee & tea are SUBSTITUTES." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Tea and sugar are examples of:", options: ["Substitute goods", "Complementary goods", "Independent goods", "Luxury goods"], answer: "1", explanation: "Tea & sugar are COMPLEMENTS." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Price elasticity of demand measures:", options: ["How much supply changes with income", "How responsive quantity demanded is to a change in price", "How much income changes", "The price of related goods"], answer: "1", explanation: "Ed = %ΔQd / %ΔP." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "If |Ed| > 1, demand is:", options: ["Inelastic", "Unitary", "Elastic", "Perfectly inelastic"], answer: "2", explanation: "|Ed| > 1 → ELASTIC." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "If |Ed| < 1, demand is:", options: ["Elastic", "Unitary", "Inelastic", "Perfectly elastic"], answer: "2", explanation: "|Ed| < 1 → INELASTIC." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "If |Ed| = 1, demand is:", options: ["Elastic", "Inelastic", "Unitary elastic", "Perfectly elastic"], answer: "2", explanation: "|Ed| = 1 → UNITARY." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Market demand is the:", options: ["Sum of all individual supply curves", "Horizontal sum of all individual demand curves", "Average price of goods", "Difference between demand and supply"], answer: "1", explanation: "Market demand = horizontal sum of individual demands." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "If Qd = 80 − 3P and Qs = 9P − 40, equilibrium price is:", options: ["5", "10", "15", "20"], answer: "1", explanation: "80 − 3P = 9P − 40 → 120 = 12P → P = 10." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "With Qd = 80 − 3P and Qs = 9P − 40, equilibrium quantity is:", options: ["30", "40", "50", "60"], answer: "2", explanation: "Q = 80 − 3(10) = 50." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "If there are 100 identical buyers with Qd = 50 − 5P each, market demand is:", options: ["50 − 5P", "500 − 50P", "5000 − 500P", "5000 − 50P"], answer: "2", explanation: "Qm = 100(50 − 5P) = 5000 − 500P." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "At a price ABOVE equilibrium, the market has:", options: ["Shortage", "Surplus", "Equilibrium", "No effect"], answer: "1", explanation: "Above equilibrium → Qs > Qd → surplus." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "At a price BELOW equilibrium, the market has:", options: ["Shortage", "Surplus", "Equilibrium", "No effect"], answer: "0", explanation: "Below equilibrium → Qd > Qs → shortage." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "If demand increases while supply is constant, equilibrium price:", options: ["Rises", "Falls", "Stays the same", "Becomes zero"], answer: "0", explanation: "D ↑ → P* ↑, Q* ↑." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "If supply increases while demand is constant, equilibrium quantity:", options: ["Rises", "Falls", "Stays the same", "Becomes zero"], answer: "0", explanation: "S ↑ → P* ↓, Q* ↑." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "If the price of coffee (a substitute for tea) rises, the demand for tea:", options: ["Increases", "Decreases", "Stays the same", "Becomes zero"], answer: "0", explanation: "Substitute price ↑ → demand for our good ↑." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "If the price of sugar (complement to tea) rises, the demand for tea:", options: ["Increases", "Decreases", "Stays the same", "Doubles"], answer: "1", explanation: "Complement price ↑ → demand for our good ↓." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "If 120 sellers each have Qs = 20P − 5, the market supply function is:", options: ["20P − 5", "2400P − 600", "240P − 60", "120P − 5"], answer: "1", explanation: "Qm = 120(20P − 5) = 2400P − 600." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "At P = 4, with Qm = 2400P − 600, quantity supplied is:", options: ["1000", "6000", "9000", "12000"], answer: "2", explanation: "Qm = 2400(4) − 600 = 9600 − 600 = 9000." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "Arc elasticity between (P=2,Q=600) and (P=4,Q=400):", options: ["0.3", "0.6", "1.0", "2.0"], answer: "1", explanation: "(400−600)/(1000) × (6/2) = (−0.2)(3) = −0.6 → |Ed| = 0.6." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "The price elasticity of demand for necessities is generally:", options: ["Elastic", "Inelastic", "Unitary", "Infinite"], answer: "1", explanation: "Necessities → INELASTIC (few substitutes)." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "Cross elasticity between Coca-Cola and Pepsi is:", options: ["Negative", "Positive", "Zero", "Infinite"], answer: "1", explanation: "Substitutes → POSITIVE cross elasticity." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "Income elasticity greater than 1 implies the good is:", options: ["Inferior", "Necessity", "Luxury", "Unrelated"], answer: "2", explanation: "Ey > 1 → LUXURY." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Income elasticity less than 0 implies the good is:", options: ["Luxury", "Normal", "Necessity", "Inferior"], answer: "3", explanation: "Ey < 0 → INFERIOR good." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Elasticity of supply is:", options: ["Always negative", "Always positive", "Zero always", "Infinite always"], answer: "1", explanation: "Price & Qs move together → Es POSITIVE." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "If demand is Qd = 100 − 4P and supply is Qs = 20 + 2P, equilibrium P and Q are:", options: ["P = 13.33, Q = 46.67", "P = 20, Q = 30", "P = 15, Q = 40", "P = 10, Q = 60"], answer: "0", explanation: "100 − 4P = 20 + 2P → 80 = 6P → P ≈ 13.33; Q = 100 − 4(13.33) ≈ 46.67." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "If demand function is Qd = 250 − 3P and supply is Qs = 2P − 50, equilibrium P is:", options: ["50", "60", "70", "80"], answer: "1", explanation: "250 − 3P = 2P − 50 → 300 = 5P → P = 60." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "Continuing: Qd = 250 − 3P, Qs = 2P − 50, equilibrium quantity is:", options: ["50", "60", "70", "80"], answer: "2", explanation: "Q = 250 − 3(60) = 70; check Qs = 2(60) − 50 = 70 ✓." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "If demand increases AND supply decreases simultaneously, equilibrium price:", options: ["Falls", "Rises", "Stays the same", "Becomes zero"], answer: "1", explanation: "D ↑ (P↑) + S ↓ (P↑) → P* definitely rises; Q* ambiguous." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "If both demand and supply increase, equilibrium quantity:", options: ["Falls", "Rises", "Stays the same", "Becomes zero"], answer: "1", explanation: "D ↑ (Q↑) + S ↑ (Q↑) → Q* definitely rises; P* ambiguous." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "If a good has many close substitutes, its demand is likely:", options: ["Inelastic", "Elastic", "Unitary", "Zero"], answer: "1", explanation: "More substitutes → MORE elastic." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "A point elasticity calculation uses:", options: ["(ΔQ/ΔP) × (P/Q)", "(ΔQ/ΔI) × (I/Q)", "(ΔQx/ΔPy)", "(Q2 − Q1)/(P2 − P1)"], answer: "0", explanation: "Point Ed = (ΔQ/ΔP) × (P/Q)." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "If supply elasticity Es = 0.5 and price rises by 20%, quantity supplied rises by:", options: ["5%", "10%", "20%", "40%"], answer: "1", explanation: "Es = %ΔQs / %ΔP → 0.5 = %ΔQs / 20% → %ΔQs = 10%." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Define demand and state the law of demand.", answer: "DEMAND is the ability and willingness of consumers to buy a specific quantity of a commodity at a given price in a given period.\n\nLAW OF DEMAND: all other things constant, the quantity demanded of a commodity increases when its price decreases and decreases when its price increases. Price and quantity are INVERSELY related — demand curves slope downward.", explanation: "Demand = willingness + ability; price ↑ → Qd ↓." },
    { id: "q45", type: "short", difficulty: "easy", stem: "State the law of supply.", answer: "LAW OF SUPPLY: all other things constant, the quantity supplied of a good rises as its price rises, and falls as its price falls. Price and quantity supplied are DIRECTLY related — supply curves slope upward.", explanation: "Price ↑ → Qs ↑." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Distinguish between 'change in quantity demanded' and 'change in demand'.", answer: "CHANGE IN QUANTITY DEMANDED:\n• Movement ALONG the same demand curve.\n• Caused by a change in the good's OWN PRICE.\n• Downward movement = extension; upward = contraction.\n\nCHANGE IN DEMAND:\n• SHIFT of the entire demand curve.\n• Caused by non-price factors (income, tastes, prices of related goods, etc.).\n• Increase → shift right; decrease → shift left.", explanation: "Price = movement; other factors = shift." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Find the equilibrium price and quantity: Qd = 80 − 3P, Qs = 9P − 40.", answer: "Set Qd = Qs:\n80 − 3P = 9P − 40\n120 = 12P\nP* = 10 Birr.\n\nSubstitute back:\nQ* = 80 − 3(10) = 50 units.\nCheck: Qs = 9(10) − 40 = 50 ✓", explanation: "P* = 10, Q* = 50." },
    { id: "q48", type: "short", difficulty: "medium", stem: "List factors affecting demand.", answer: "1) Price of the good itself.\n2) Price of related goods (substitutes and complements).\n3) Consumer income.\n4) Tastes and habits.\n5) Population size.\n6) Season.\n7) Consumer future price expectations.", explanation: "Seven main determinants of demand." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Explain the three types of elasticity of demand and their interpretation.", answer: "1) PRICE elasticity (Ed): %ΔQd / %ΔP. Measures responsiveness to price.\n• |Ed| > 1 → elastic\n• |Ed| = 1 → unitary\n• |Ed| < 1 → inelastic\n\n2) CROSS elasticity (Exy): %ΔQx / %ΔPy. Measures responsiveness to price of related good.\n• >0 → substitutes\n• <0 → complements\n• =0 → unrelated\n\n3) INCOME elasticity (Ey): %ΔQ / %ΔI. Measures responsiveness to income.\n• Ey > 1 → luxury\n• 0 < Ey < 1 → necessity\n• Ey < 0 → inferior", explanation: "Three demand elasticities: price, cross, income." },
    { id: "q50", type: "short", difficulty: "hard", stem: "A seller's supply function is Qs = 3P − 2 and there are 100 identical sellers. What is the market supply at P = 10?", answer: "Market supply:\nQm = 100 × (3P − 2) = 300P − 200\n\nAt P = 10:\nQm = 300(10) − 200 = 3000 − 200 = 2800 units.", explanation: "Qm = n × Qs = 100(3P − 2); at P=10 → 2800." },
  ],
};