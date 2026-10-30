import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 ECONOMICS — UNIT 4
// MARKET STRUCTURES
// Source: Grade 10 Economics Student Textbook (pp. 69–87)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, formula boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10EconomicsCh4: Chapter = {
  id: "ch4",
  number: 4,
  title: "Market Structures",
  titleAm: "የገበያ አወቃቀሮች",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about FOUR market structures and how each differs:\n" +
        "1) PERFECT COMPETITION — many sellers, identical products, price TAKERS.\n" +
        "2) PURE MONOPOLY — one seller, price MAKER, blocked entry.\n" +
        "3) MONOPOLISTIC COMPETITION — many sellers, DIFFERENTIATED products.\n" +
        "4) OLIGOPOLY — few dominant sellers, MUTUALLY INTERDEPENDENT.\n\n" +
        "The WHOLE chapter reduces to FIVE formulas + FOUR comparison tables:\n" +
        "• TR = P × Q\n" +
        "• AR = TR / Q = P\n" +
        "• MR = ΔTR / ΔQ\n" +
        "• Perfect competition: AR = MR = P, horizontal demand.\n" +
        "• Monopoly: downward-sloping demand, MR < AR.\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ አራት የገበያ አወቃቀሮች፡\n" +
        "1) ፍጹም ውድድር\n" +
        "2) ሞኖፖሊ\n" +
        "3) ሞኖፖሊስቲክ ውድድር\n" +
        "4) ኦሊጎፖሊ\n\n" +
        "ቀመሮች:\n" +
        "TR = P×Q\n" +
        "AR = TR/Q = P\n" +
        "MR = ΔTR/ΔQ",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the four structures",
          titleAm: "ደረጃ 1 · አራቱን አወቃቀሮች መረዳት",
          body:
            "PERFECT COMPETITION:\n" +
            "• Many buyers/sellers.\n" +
            "• Homogeneous products.\n" +
            "• Free entry/exit.\n" +
            "• Perfect information.\n" +
            "• PRICE TAKER.\n\n" +
            "MONOPOLY:\n" +
            "• One seller.\n" +
            "• No close substitutes.\n" +
            "• Blocked entry.\n" +
            "• PRICE MAKER.\n\n" +
            "MONOPOLISTIC COMPETITION:\n" +
            "• Many sellers.\n" +
            "• Differentiated products.\n" +
            "• Free entry/exit.\n\n" +
            "OLIGOPOLY:\n" +
            "• Few dominant sellers.\n" +
            "• Interdependence.\n" +
            "• Barriers to entry.",
          bodyAm:
            "ፍጹም: ብዙ፣ ተመሳሳይ፣ price taker።\n" +
            "ሞኖፖሊ: አንድ፣ price maker።\n" +
            "ሞኖፖሊስቲክ: ብዙ፣ ልዩ ምርቶች።\n" +
            "ኦሊጎፖሊ: ጥቂት፣ ጥገኛ።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the revenue formulas",
          titleAm: "ደረጃ 2 · የገቢ ቀመሮች",
          body:
            "TR = P × Q\n" +
            "AR = TR / Q = P\n" +
            "MR = ΔTR / ΔQ\n\n" +
            "PERFECT COMPETITION: AR = MR = P = Dfirm (all equal).\n" +
            "MONOPOLY: AR > MR (MR falls faster).\n" +
            "MONOPOLISTIC: AR > MR.\n" +
            "OLIGOPOLY: AR > MR.",
          bodyAm:
            "TR = P×Q\n" +
            "AR = P\n" +
            "MR = ΔTR/ΔQ\n" +
            "ፍጹም: AR=MR=P።\n" +
            "ሞኖፖሊ: AR>MR።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master the demand curve shapes",
          titleAm: "ደረጃ 3 · የፍላጎት ኩርባ ቅርጾች",
          body:
            "PERFECT COMPETITION: HORIZONTAL (perfectly elastic).\n" +
            "MONOPOLY: downward-sloping (steepest — market demand).\n" +
            "MONOPOLISTIC COMPETITION: downward-sloping but FLATTER than monopoly.\n" +
            "OLIGOPOLY: downward-sloping (keeps shifting due to interdependence).",
          bodyAm:
            "ፍጹም: አግድም።\n" +
            "ሞኖፖሊ: ወደታች (ቁልቁል)።\n" +
            "ሞኖፖሊስቲክ: ወደታች ግን ጠፍጣፋ።\n" +
            "ኦሊጎፖሊ: ወደታች።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Did you compute TR = P × Q?\n" +
            "2) Did you compute AR = TR/Q (equal to P)?\n" +
            "3) Did you compute MR = TR_n − TR_(n−1)?\n" +
            "4) Did you check that AR = MR = P only in perfect competition?\n" +
            "5) Did you distinguish homogeneous vs differentiated products?",
          bodyAm:
            "1) TR = P×Q።\n" +
            "2) AR = P።\n" +
            "3) MR = ΔTR።\n" +
            "4) AR=MR=P በፍጹም ውድድር ብቻ።",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• PERFECT COMPETITION → firm is a PRICE TAKER; demand curve is horizontal.\n" +
            "• MONOPOLY → firm is a PRICE MAKER; demand curve is downward-sloping (market demand).\n" +
            "• In perfect competition: AR = MR = P — this is THE most tested point.\n" +
            "• Monopolist: MR < AR (because to sell more, must lower price on all units).\n" +
            "• Barriers to entry → source of monopoly power.\n" +
            "• Monopolistic competition: product differentiation, free entry, many sellers.\n" +
            "• Oligopoly: FEW dominant firms, MUTUAL INTERDEPENDENCE — that's the key.\n" +
            "• Duopoly = two firms = simplest oligopoly.",
          bodyAm:
            "• ፍጹም = price taker።\n" +
            "• ሞኖፖሊ = price maker።\n" +
            "• AR=MR=P በፍጹም ውድድር።\n" +
            "• ኦሊጎፖሊ = ጥቂት ድርጅቶች።",
        },
      ],
    },

    // ============================================================
    // 4.1 PERFECTLY COMPETITIVE MARKETS
    // ============================================================
    {
      id: "n1",
      title: "4.1 Perfectly Competitive Markets",
      titleAm: "4.1 ፍጹም ውድድር ገበያ",
      body:
        "Abatu, PERFECT COMPETITION is a market where no buyer or seller has any influence on price — they are all PRICE TAKERS.",
      bodyAm:
        "አባቱ፣ ፍጹም ውድድር = ማንም ዋጋ ላይ ተጽእኖ የለውም — price taker።",
      children: [
        {
          id: "n1-1",
          title: "Definition",
          titleAm: "ትርጉም",
          body:
            "PERFECT COMPETITION: a market structure where:\n" +
            "• No single firm can influence the price.\n" +
            "• All buyers and sellers are PRICE TAKERS.\n" +
            "• Individual firm is TOO SMALL relative to the market to affect price.\n\n" +
            "Example: Farmers' market — each seller sells the same maize at the same price.",
          bodyAm:
            "ፍጹም ውድድር: ሁሉም price taker።\n" +
            "ምሳሌ: የገበሬዎች ገበያ።",
        },
        {
          id: "n1-2",
          title: "Characteristics (five features)",
          titleAm: "አምስቱ ባህሪያት",
          body:
            "1) LARGE NUMBER of buyers and sellers — no single one affects price.\n" +
            "2) HOMOGENEOUS products — identical across firms.\n" +
            "3) FREE ENTRY AND EXIT — no barriers.\n" +
            "4) PERFECT INFORMATION — everyone knows prices and quality.\n" +
            "5) PROFIT MAXIMIZATION — firms aim to maximize profit.",
          bodyAm:
            "1) ብዙ ገዢዎች/ሻጮች\n" +
            "2) ተመሳሳይ ምርቶች\n" +
            "3) ነፃ መግቢያ/መውጫ\n" +
            "4) ሙሉ መረጃ\n" +
            "5) ትርፍ ማስቀደም",
        },
        {
          id: "n1-3",
          title: "Demand curve of a perfectly competitive firm",
          titleAm: "የፍጹም ውድድር ድርጅት ፍላጎት",
          body:
            "Since the firm is a price taker:\n" +
            "• It faces a HORIZONTAL demand curve.\n" +
            "• At market price P*, it can sell ANY quantity.\n" +
            "• It CANNOT charge above P* (nobody would buy).\n" +
            "• It does NOT want to sell below P* (no reason to).\n\n" +
            "So demand curve = horizontal line at P*.",
          bodyAm:
            "አግድም የፍላጎት ኩርባ።\n" +
            "በP* ማንኛውንም መጠን መሸጥ ይችላል።",
        },
        {
          id: "n1-4",
          title: "Revenue functions (TR, AR, MR)",
          titleAm: "የገቢ ተግባራት",
          body:
            "TOTAL REVENUE (TR):\n" +
            "TR = P × Q\n\n" +
            "AVERAGE REVENUE (AR):\n" +
            "AR = TR / Q = P\n\n" +
            "MARGINAL REVENUE (MR):\n" +
            "MR = ΔTR / ΔQ\n" +
            "or MR = TR_n − TR_(n−1)\n\n" +
            "In perfect competition:\n" +
            "AR = MR = P = Dfirm\n" +
            "(all equal — THE most tested point!)",
          bodyAm:
            "TR = P×Q\n" +
            "AR = P\n" +
            "MR = ΔTR/ΔQ\n" +
            "AR = MR = P = Dfirm",
        },
        {
          id: "n1-5",
          title: "Worked Example — TR, AR, MR",
          titleAm: "ሠርተ ምሳሌ — TR, AR, MR",
          body:
            "Problem: A farmer sells 100 kg coffee at Birr 200/kg. Calculate TR and AR. What is MR at an additional sale at Birr 190?\n\n" +
            "Solution:\n" +
            "TR = 100 × 200 = 20,000 Birr\n" +
            "AR = TR/Q = 20,000/100 = 200 Birr/kg = P ✓\n" +
            "Note: the additional sale at 190 — since the firm is a price taker and market price is 200, that 'sale at 190' violates the assumption. In perfect competition, price remains 200. MR = 200 Birr.",
          bodyAm:
            "TR = 20,000 Birr።\n" +
            "AR = 200 Birr/kg = P።\n" +
            "MR = P = 200 (price taker)።",
        },
        {
          id: "n1-6",
          title: "⚠ Remember trap — Perfect competition",
          titleAm: "⚠ አትርሳ — ፍጹም ውድድር",
          body:
            "• Firm is PRICE TAKER — NOT price maker.\n" +
            "• Demand curve is HORIZONTAL — NOT downward-sloping.\n" +
            "• AR = MR = P — ALL equal.\n" +
            "• Products are HOMOGENEOUS — identical.\n" +
            "• Free entry AND free exit.\n" +
            "• Firm does NOT set price — market does.\n" +
            "• The firm can sell any amount at market price — that's why demand is horizontal.",
          bodyAm:
            "• Price taker።\n" +
            "• አግድም ፍላጎት።\n" +
            "• AR=MR=P።\n" +
            "• ተመሳሳይ ምርት።",
        },
      ],
    },

    // ============================================================
    // 4.2 PURE MONOPOLY MARKET
    // ============================================================
    {
      id: "n2",
      title: "4.2 Pure Monopoly Market",
      titleAm: "4.2 ንጹህ ሞኖፖሊ ገበያ",
      body:
        "Abatu, MONOPOLY (from Greek 'monos' = single, 'polus' = seller) is a market with only ONE supplier and NO close substitutes.",
      bodyAm:
        "አባቱ፣ ሞኖፖሊ = አንድ አቅራቢ፣ ተተኪ የለም።",
      children: [
        {
          id: "n2-1",
          title: "Definition",
          titleAm: "ትርጉም",
          body:
            "PURE MONOPOLY: a market structure where:\n" +
            "• There is a SINGLE supplier of a commodity.\n" +
            "• The commodity has NO CLOSE SUBSTITUTES.\n" +
            "• Barriers prevent other firms from entering.\n\n" +
            "Firm = industry (they are the same).\n" +
            "Example: ELPA (electric power in Ethiopia), Ambo Mineral Water, MOHA.",
          bodyAm:
            "አንድ አቅራቢ።\n" +
            "ተተኪ የለም።\n" +
            "መግቢያ ተከልክሏል።\n" +
            "ምሳሌ: ኤልፒኤ፣ አምቦ ሚንራል ውሃ።",
        },
        {
          id: "n2-2",
          title: "Characteristics",
          titleAm: "ባህሪያት",
          body:
            "1) SINGLE SELLER, many buyers.\n" +
            "2) NO close substitutes.\n" +
            "3) PRICE MAKER — the firm sets its own price.\n" +
            "4) PRICE DISCRIMINATION possible (sell at different prices to different customers).\n" +
            "5) RESTRICTIONS on entry — barriers prevent new firms.\n" +
            "6) Firm = industry.",
          bodyAm:
            "1) አንድ ሻጭ\n" +
            "2) ተተኪ የለም\n" +
            "3) Price maker\n" +
            "4) የዋጋ አድልዎ ይቻላል\n" +
            "5) መግቢያ ክልክል",
        },
        {
          id: "n2-3",
          title: "Sources of monopoly power",
          titleAm: "የሞኖፖሊ ምንጮች",
          body:
            "• ABSENCE OF CLOSE SUBSTITUTES.\n" +
            "• ECONOMIES OF SCALE — large firms have lower unit cost; small firms can't compete.\n" +
            "• OWNERSHIP OF STRATEGIC INPUTS — e.g., Ambo natural water source.\n" +
            "• PATENT RIGHTS and COPYRIGHTS — legal monopoly.\n" +
            "• GOVERNMENT LICENCES and trade restrictions (quotas).\n" +
            "• UNIQUE PRODUCT or exclusive knowledge (e.g., Coca-Cola's secret formula).",
          bodyAm:
            "• ተተኪ አለመኖር\n" +
            "• Economies of scale\n" +
            "• ስልታዊ ግብዓት ባለቤትነት\n" +
            "• ፓተንት/ኮፒራይት\n" +
            "• የመንግስት ፈቃድ",
        },
        {
          id: "n2-4",
          title: "Demand curve of monopolist",
          titleAm: "የሞኖፖሊስት ፍላጎት ኩርባ",
          body:
            "Because the monopolist is the ONLY seller:\n" +
            "• Faces the ENTIRE market demand curve.\n" +
            "• Demand is DOWNWARD-SLOPING.\n" +
            "• To sell more, must lower the price.\n" +
            "• To charge higher price, must sell less.\n\n" +
            "Formula: P = a − bQ\n" +
            "(linear demand)",
          bodyAm:
            "ወደታች የሚያዘነብል ፍላጎት።\n" +
            "ብዙ ለመሸጥ → ዋጋ መቀነስ አለበት።\n" +
            "P = a − bQ",
        },
        {
          id: "n2-5",
          title: "Revenue functions",
          titleAm: "የገቢ ተግባራት",
          body:
            "TR = P × Q\n" +
            "If P = a − bQ:\n" +
            "TR = (a − bQ) × Q = aQ − bQ²\n\n" +
            "AR = TR / Q = P = a − bQ\n\n" +
            "MR = ΔTR / ΔQ\n" +
            "For linear demand: MR = a − 2bQ\n" +
            "(MR has TWICE the slope of AR, and lies BELOW AR)",
          bodyAm:
            "TR = aQ − bQ²\n" +
            "AR = a − bQ\n" +
            "MR = a − 2bQ\n" +
            "MR < AR።",
        },
        {
          id: "n2-6",
          title: "Worked Example — Monopoly TR, AR, MR",
          titleAm: "ሠርተ ምሳሌ — ሞኖፖሊ TR, AR, MR",
          body:
            "Using textbook Table 4.1:\n" +
            "Q   P   TR    AR   MR\n" +
            "0   11  0     -    -\n" +
            "1   10  10    10   10\n" +
            "2   9   18    9    8\n" +
            "3   8   24    8    6\n" +
            "4   7   28    7    4\n" +
            "5   6   30    6    2\n" +
            "6   5   30    5    0\n" +
            "7   4   28    4    -2\n" +
            "8   3   24    3    -4\n\n" +
            "Notice:\n" +
            "• TR is inverted U (max at Q = 5.5, TR = 30.25).\n" +
            "• AR = P (same as demand).\n" +
            "• MR < AR always (because to sell more, must lower price on ALL units).",
          bodyAm:
            "TR ቀስ በቀስ ይጨምራል፣ ከዚያ ይቀንሳል።\n" +
            "MR < AR።\n" +
            "MR = 0 በTR ከፍተኛ።",
        },
        {
          id: "n2-7",
          title: "⚠ Remember trap — Monopoly",
          titleAm: "⚠ አትርሳ — ሞኖፖሊ",
          body:
            "• Monopolist is PRICE MAKER, not price taker.\n" +
            "• Demand curve is DOWNWARD-SLOPING (whole market demand).\n" +
            "• MR < AR (never equal except at Q = 0).\n" +
            "• MR falls at TWICE the rate of AR (linear demand).\n" +
            "• Firm = industry.\n" +
            "• NO close substitutes exist.\n" +
            "• Barriers to entry define monopoly.\n" +
            "• TR is maximum when MR = 0 — NOT at maximum price.",
          bodyAm:
            "• Price maker።\n" +
            "• ወደታች ፍላጎት።\n" +
            "• MR < AR።\n" +
            "• TR max በ MR=0።",
        },
      ],
    },

    // ============================================================
    // 4.3 MONOPOLISTICALLY COMPETITIVE MARKET
    // ============================================================
    {
      id: "n3",
      title: "4.3 Monopolistically Competitive Market",
      titleAm: "4.3 ሞኖፖሊስቲክ ውድድር ገበያ",
      body:
        "Abatu, MONOPOLISTIC COMPETITION has features of BOTH perfect competition AND monopoly — many sellers, differentiated products, free entry.",
      bodyAm:
        "አባቱ፣ ሞኖፖሊስቲክ = ብዙ ሻጮች + ልዩ ምርቶች + ነፃ መግቢያ።",
      children: [
        {
          id: "n3-1",
          title: "Definition",
          titleAm: "ትርጉም",
          body:
            "MONOPOLISTIC COMPETITION: a market structure where:\n" +
            "• There are RELATIVELY LARGE numbers of sellers and buyers.\n" +
            "• Free entry and exit.\n" +
            "• Products are DIFFERENTIATED (heterogeneous).\n\n" +
            "A seller has LIMITED monopoly power over customers who prefer their product.\n" +
            "Realistic — between perfect competition and monopoly.",
          bodyAm:
            "ብዙ ሻጮች/ገዢዎች።\n" +
            "ልዩ ምርቶች።\n" +
            "ነፃ መግቢያ/መውጫ።",
        },
        {
          id: "n3-2",
          title: "Characteristics",
          titleAm: "ባህሪያት",
          body:
            "1) PRODUCT DIFFERENTIATION — each firm's product differs slightly (style, brand, quality).\n" +
            "2) MANY SELLERS AND BUYERS (but less than perfect competition).\n" +
            "3) FREE ENTRY AND EXIT.\n" +
            "4) NON-PRICE COMPETITION — advertising, branding, customer service.\n\n" +
            "Examples: pens, biscuits, soap, clothing, restaurants, beer brands.",
          bodyAm:
            "1) ልዩ ምርት\n" +
            "2) ብዙ ሻጮች/ገዢዎች\n" +
            "3) ነፃ መግቢያ\n" +
            "4) የዋጋ ያልሆነ ውድድር",
        },
        {
          id: "n3-3",
          title: "Demand curve",
          titleAm: "ፍላጎት ኩርባ",
          body:
            "Because products are DIFFERENTIATED:\n" +
            "• Firm has SOME price-setting power.\n" +
            "• Demand curve slopes DOWNWARD.\n" +
            "• But FLATTER than monopoly (more competition).\n" +
            "• NOT horizontal (unlike perfect competition).\n\n" +
            "So it's between perfect competition (horizontal) and monopoly (steep).",
          bodyAm:
            "ወደታች ግን ከሞኖፖሊ የበለጠ ጠፍጣፋ።\n" +
            "ከፍጹም ውድድር (አግድም) እና ሞኖፖሊ (ቁልቁል) መካከል።",
        },
        {
          id: "n3-4",
          title: "Revenue functions",
          titleAm: "የገቢ ተግባራት",
          body:
            "TR = P × Q\n" +
            "AR = TR / Q = P (same as demand)\n" +
            "MR = ΔTR / ΔQ\n\n" +
            "Because demand slopes downward:\n" +
            "• AR is downward-sloping.\n" +
            "• MR < AR (MR below AR).\n" +
            "• Same structure as monopoly, just flatter curves.",
          bodyAm:
            "TR = P×Q\n" +
            "AR = P\n" +
            "MR < AR",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap — Monopolistic competition",
          titleAm: "⚠ አትርሳ — ሞኖፖሊስቲክ",
          body:
            "• Product DIFFERENTIATION is the defining feature.\n" +
            "• FREE ENTRY/EXIT — unlike monopoly, oligopoly.\n" +
            "• MANY sellers — unlike oligopoly (few).\n" +
            "• Demand is downward-sloping BUT flatter than monopoly.\n" +
            "• Non-price competition is KEY (advertising, branding).\n" +
            "• In between perfect competition and monopoly.\n" +
            "• AR > MR (because demand slopes down).",
          bodyAm:
            "• ልዩ ምርት።\n" +
            "• ነፃ መግቢያ።\n" +
            "• ብዙ ሻጮች።\n" +
            "• ወደታች ፍላጎት (ጠፍጣፋ)።\n" +
            "• Non-price competition።",
        },
      ],
    },

    // ============================================================
    // 4.4 OLIGOPOLY MARKET
    // ============================================================
    {
      id: "n4",
      title: "4.4 Oligopoly Market",
      titleAm: "4.4 ኦሊጎፖሊ ገበያ",
      body:
        "Abatu, OLIGOPOLY is a market with FEW dominant firms whose decisions INTERDEPEND on each other.",
      bodyAm:
        "አባቱ፣ ኦሊጎፖሊ = ጥቂት ድርጅቶች፣ እርስ በርስ ጥገኛ።",
      children: [
        {
          id: "n4-1",
          title: "Definition",
          titleAm: "ትርጉም",
          body:
            "OLIGOPOLY: a market structure with:\n" +
            "• FEW firms producing identical OR differentiated products.\n" +
            "• More than one seller, but so few that each firm's decisions AFFECT others.\n" +
            "• Firms are MUTUALLY INTERDEPENDENT.\n\n" +
            "Examples: world crude oil market, cement and sugar factories in Ethiopia.\n\n" +
            "DUOPOLY = two firms = simplest oligopoly (e.g., Ethio-Telecom and Safaricom).",
          bodyAm:
            "ጥቂት ድርጅቶች።\n" +
            "እርስ በርስ ጥገኛ።\n" +
            "ምሳሌ: ነዳጅ፣ ሲሚንቶ፣ ስኳር።\n" +
            "ዱዖፖሊ = ሁለት ድርጅቶች።",
        },
        {
          id: "n4-2",
          title: "Characteristics",
          titleAm: "ባህሪያት",
          body:
            "1) FEW DOMINANT FIRMS — each recognizes others' actions.\n" +
            "2) ENTRY BARRIERS — hard for new firms to enter.\n" +
            "3) PRODUCTS may be homogeneous OR differentiated.\n" +
            "4) MUTUAL INTERDEPENDENCE — one firm's decision affects all.\n" +
            "5) Strategic behavior (pricing, advertising) is common.",
          bodyAm:
            "1) ጥቂት ድርጅቶች\n" +
            "2) መግቢያ እንቅፋት\n" +
            "3) ተመሳሳይ/ልዩ ምርቶች\n" +
            "4) እርስ በርስ ጥገኝነት",
        },
        {
          id: "n4-3",
          title: "Demand and revenue",
          titleAm: "ፍላጎትና ገቢ",
          body:
            "Demand:\n" +
            "• Downward-sloping.\n" +
            "• Keeps SHIFTING because rival reactions change demand.\n\n" +
            "Revenue:\n" +
            "• TR = P × Q\n" +
            "• AR = P (downward-sloping, same as demand).\n" +
            "• MR < AR.",
          bodyAm:
            "ፍላጎት: ወደታች፣ ይለዋወጣል።\n" +
            "AR = P።\n" +
            "MR < AR።",
        },
        {
          id: "n4-4",
          title: "⚠ Remember trap — Oligopoly",
          titleAm: "⚠ አትርሳ — ኦሊጎፖሊ",
          body:
            "• FEW firms — NOT one (that's monopoly).\n" +
            "• MUTUAL INTERDEPENDENCE is the KEY feature.\n" +
            "• Products can be homogeneous OR differentiated.\n" +
            "• Duopoly = exactly TWO firms.\n" +
            "• Barriers to entry — unlike perfect competition.\n" +
            "• Demand curve KEEPS SHIFTING due to rival reactions.\n" +
            "• AR > MR (demand slopes down).",
          bodyAm:
            "• ጥቂት ድርጅቶች።\n" +
            "• እርስ በርስ ጥገኝነት ዋና ነው።\n" +
            "• ዱዖፖሊ = 2።",
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
        "| Quantity                     | Formula                            |\n" +
        "|------------------------------|------------------------------------|\n" +
        "| Total revenue                | TR = P × Q                         |\n" +
        "| Average revenue              | AR = TR / Q = P                    |\n" +
        "| Marginal revenue             | MR = ΔTR / ΔQ = TRₙ − TRₙ₋₁        |\n" +
        "| Perfect competition          | AR = MR = P; horizontal demand     |\n" +
        "| Monopoly (linear demand)     | P = a − bQ; TR = aQ − bQ²; MR = a − 2bQ |\n" +
        "| Monopolistic competition     | AR > MR; downward sloping, flat    |\n" +
        "| Oligopoly                    | AR > MR; demand keeps shifting     |",
      bodyAm:
        "| መጠን          | ቀመር                  |\n" +
        "|---------------|----------------------|\n" +
        "| TR            | P × Q                |\n" +
        "| AR            | TR/Q = P             |\n" +
        "| MR            | ΔTR/ΔQ               |\n" +
        "| ፍጹም ውድድር    | AR=MR=P              |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 4",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 4",
      body:
        "1) PERFECT COMPETITION → price TAKER; horizontal demand.\n" +
        "2) MONOPOLY → price MAKER; downward-sloping demand.\n" +
        "3) In perfect competition: AR = MR = P.\n" +
        "4) In monopoly/monopolistic/oligopoly: AR > MR.\n" +
        "5) Monopolist's MR falls TWICE as fast as AR (linear demand).\n" +
        "6) Barriers to entry → source of monopoly power.\n" +
        "7) Monopolistic competition = product DIFFERENTIATION.\n" +
        "8) Oligopoly = MUTUAL INTERDEPENDENCE.\n" +
        "9) Duopoly = exactly TWO firms.\n" +
        "10) Monopolistic competition demand is FLATTER than monopoly.\n" +
        "11) Firm = industry ONLY in monopoly.\n" +
        "12) TR is maximum when MR = 0 (not at max price).",
      bodyAm:
        "1) ፍጹም: price taker።\n" +
        "2) ሞኖፖሊ: price maker።\n" +
        "3) ፍጹም: AR=MR=P።\n" +
        "4) ሌሎች: AR>MR።\n" +
        "5) ኦሊጎፖሊ: interdependence።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "In perfect competition, a firm is a:", options: ["Price maker", "Price taker", "Price setter", "Monopolist"], answer: "1", explanation: "Perfect competition → price TAKER." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "In perfect competition, the demand curve faced by a firm is:", options: ["Downward-sloping", "Upward-sloping", "Horizontal", "Vertical"], answer: "2", explanation: "Firm faces HORIZONTAL demand at market price." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "In perfect competition, AR equals:", options: ["0", "P", "MR only", "MC"], answer: "1", explanation: "AR = P in perfect competition." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "In perfect competition, AR, MR, and P are:", options: ["All different", "All equal", "Only AR = MR", "Only MR = P"], answer: "1", explanation: "AR = MR = P in perfect competition." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "A monopoly is a market with:", options: ["Many sellers", "One seller", "Two sellers", "Few sellers"], answer: "1", explanation: "Monopoly = ONE seller." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "A monopolist is a:", options: ["Price taker", "Price maker", "Price follower", "Price equalizer"], answer: "1", explanation: "Monopolist = PRICE MAKER." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "The demand curve faced by a monopolist is:", options: ["Horizontal", "Vertical", "Downward-sloping", "Upward-sloping"], answer: "2", explanation: "Monopolist faces downward-sloping market demand." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Total Revenue (TR) equals:", options: ["P + Q", "P × Q", "P / Q", "P − Q"], answer: "1", explanation: "TR = P × Q." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Average Revenue (AR) equals:", options: ["TR × Q", "TR / Q = P", "TR − Q", "MR + Q"], answer: "1", explanation: "AR = TR/Q = P." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Marginal Revenue (MR) equals:", options: ["TR / Q", "ΔTR / ΔQ", "TR × Q", "P × Q"], answer: "1", explanation: "MR = ΔTR/ΔQ." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "In perfect competition, products are:", options: ["Differentiated", "Homogeneous", "Mixed", "Unique"], answer: "1", explanation: "Perfect competition → HOMOGENEOUS products." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "In perfect competition, entry and exit is:", options: ["Blocked", "Free", "Impossible", "Restricted"], answer: "1", explanation: "Free entry and exit." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "A monopolistically competitive market has:", options: ["Identical products", "Differentiated products", "One seller", "Few sellers"], answer: "1", explanation: "Monopolistic competition → DIFFERENTIATED products." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Oligopoly market is characterized by:", options: ["Many sellers", "One seller", "Few dominant sellers", "Two buyers"], answer: "2", explanation: "Oligopoly = FEW dominant sellers." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "A duopoly has:", options: ["One firm", "Two firms", "Three firms", "Many firms"], answer: "1", explanation: "Duopoly = TWO firms (simplest oligopoly)." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "In monopoly, AR is:", options: ["Equal to MR", "Greater than MR", "Less than MR", "Zero"], answer: "1", explanation: "In monopoly, AR > MR." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "In perfect competition, MR equals:", options: ["TR / Q", "P", "0", "MC"], answer: "1", explanation: "MR = P in perfect competition." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Which market structure has the STEEPEST demand curve?", options: ["Perfect competition", "Monopoly", "Monopolistic competition", "Oligopoly"], answer: "1", explanation: "Monopoly faces the whole market demand — steepest." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "If a firm sells 100 units at Birr 200/unit, TR is:", options: ["200", "2000", "20,000", "100"], answer: "2", explanation: "TR = 100 × 200 = 20,000." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "If TR = 20,000 and Q = 100, AR equals:", options: ["2", "20", "200", "2000"], answer: "2", explanation: "AR = 20,000/100 = 200." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "Using Table 4.1: at Q = 3, TR = 24, AR = 8. At Q = 4, TR = 28. MR of 4th unit is:", options: ["2", "4", "7", "8"], answer: "1", explanation: "MR = 28 − 24 = 4." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "Monopolist's AR at Q = 4 is:", options: ["4", "7", "28", "8"], answer: "1", explanation: "AR = TR/Q = 28/4 = 7." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "Monopolist's TR reaches maximum when MR equals:", options: ["P", "0", "AR", "Negative"], answer: "1", explanation: "TR max when MR = 0." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "If demand is P = 10 − 2Q, AR equals:", options: ["10 − 2Q", "10 − 4Q", "10Q − 2Q²", "2Q"], answer: "0", explanation: "AR = P = 10 − 2Q." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "If P = 10 − 2Q, MR equals:", options: ["10 − 2Q", "10 − 4Q", "10Q", "2Q"], answer: "1", explanation: "MR = a − 2bQ = 10 − 4Q." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "In perfect competition, if price rises from 5 to 10, the firm's demand curve:", options: ["Shifts", "Becomes steeper", "Is now horizontal at 10", "Becomes vertical"], answer: "2", explanation: "Firm faces horizontal at new market price 10." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "Which is a source of monopoly power?", options: ["Many close substitutes", "Easy entry", "Patent rights", "Low prices"], answer: "2", explanation: "Patent rights = legal monopoly source." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "Product differentiation is the key feature of:", options: ["Perfect competition", "Monopoly", "Monopolistic competition", "Oligopoly"], answer: "2", explanation: "Monopolistic competition → product differentiation." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "Mutual interdependence is the key feature of:", options: ["Perfect competition", "Monopoly", "Monopolistic competition", "Oligopoly"], answer: "3", explanation: "Oligopoly → mutual interdependence." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "In which market is firm = industry?", options: ["Perfect competition", "Monopoly", "Monopolistic competition", "Oligopoly"], answer: "1", explanation: "In monopoly, the firm IS the industry." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Non-price competition is a feature of:", options: ["Perfect competition", "Monopoly", "Monopolistic competition", "All markets"], answer: "2", explanation: "Monopolistic competition emphasizes non-price competition (advertising, branding)." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "In which market are products HOMOGENEOUS?", options: ["Perfect competition AND monopoly", "Only perfect competition", "Only monopolistic competition", "Only oligopoly"], answer: "0", explanation: "Both perfect competition and pure monopoly deal with homogeneous products (monopoly has just one supplier, so its product is by definition unique)." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "A monopolist's MR is less than AR because:", options: ["Costs increase", "To sell more, must lower price on all units", "Taxes reduce revenue", "Demand is horizontal"], answer: "1", explanation: "To sell extra unit, must lower price on ALL units → MR < AR." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Under perfect competition, a firm can sell:", options: ["Only at fixed quantity", "Any amount at market price", "Only above market price", "Only below market price"], answer: "1", explanation: "Price taker → can sell any amount at market price." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "In monopolistic competition, AR is:", options: ["Equal to MR", "Greater than MR", "Less than MR", "Zero"], answer: "1", explanation: "AR > MR (demand slopes down)." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Perfect competition demand curve is horizontal because:", options: ["Consumers have limited income", "Firm can sell any quantity at market price", "Products are differentiated", "Government sets prices"], answer: "1", explanation: "At market price, firm can sell any quantity → horizontal demand." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Which statement is TRUE?", options: ["Monopolist faces horizontal demand", "Perfectly competitive firm is price maker", "Monopolist faces downward-sloping demand", "Oligopoly has one firm"], answer: "2", explanation: "Monopolist faces downward-sloping market demand." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "Given Table 4.1: MR becomes negative when:", options: ["Q = 0", "Q = 5", "Q = 6", "Q = 7"], answer: "3", explanation: "At Q = 7, MR = −2 (negative)." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "In Table 4.1, TR is maximized at:", options: ["Q = 4", "Q = 5", "Q = 6", "Q = 7"], answer: "2", explanation: "At Q = 6, MR = 0 → TR is maximum (30)." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "A monopolist producing where MR = 0 is:", options: ["Maximizing profit", "Maximizing revenue", "Minimizing cost", "Shutting down"], answer: "1", explanation: "MR = 0 → TR is MAXIMIZED (revenue, not necessarily profit)." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Compared to monopoly, a monopolistically competitive firm faces:", options: ["Steeper demand", "Flatter demand", "Horizontal demand", "Vertical demand"], answer: "1", explanation: "Monopolistic competition demand is FLATTER (more substitutes)." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "If all firms in an oligopoly produce identical products, this is called:", options: ["Differentiated oligopoly", "Pure (homogeneous) oligopoly", "Perfect competition", "Monopoly"], answer: "1", explanation: "Homogeneous products → PURE oligopoly." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "In which two market structures is free entry AND exit possible?", options: ["Monopoly and oligopoly", "Perfect competition and monopolistic competition", "Monopoly and monopolistic competition", "Oligopoly and perfect competition"], answer: "1", explanation: "Perfect competition and monopolistic competition both have free entry/exit." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Define perfect competition and state its main characteristics.", answer: "PERFECT COMPETITION is a market structure where no buyer or seller has any influence on price — all are PRICE TAKERS.\n\nMain characteristics:\n1) Large number of buyers and sellers.\n2) Homogeneous (identical) products.\n3) Free entry and exit.\n4) Perfect information for all participants.\n5) Firms aim to maximize profit.\n\nIn this market, the firm faces a HORIZONTAL demand curve, and AR = MR = P.", explanation: "Five characteristics + AR=MR=P." },
    { id: "q45", type: "short", difficulty: "easy", stem: "Define a pure monopoly and state its characteristics.", answer: "PURE MONOPOLY: a market with a SINGLE supplier of a product that has NO close substitutes, with barriers preventing entry.\n\nCharacteristics:\n1) Single seller, many buyers.\n2) No close substitutes.\n3) Price maker (sets own price).\n4) Price discrimination possible.\n5) Restrictions on entry (barriers).\n6) Firm = industry.", explanation: "One seller, price maker, blocked entry." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Distinguish between perfect competition and monopoly.", answer: "| Feature | Perfect Competition | Monopoly |\n|---|---|---|\n| Number of sellers | Many | One |\n| Products | Homogeneous | Unique (no close substitutes) |\n| Entry/exit | Free | Blocked |\n| Price role | Price taker | Price maker |\n| Demand curve | Horizontal | Downward-sloping |\n| AR vs MR | AR = MR = P | AR > MR |", explanation: "Many vs one; price taker vs price maker." },
    { id: "q47", type: "short", difficulty: "medium", stem: "List the sources of monopoly power.", answer: "1) Absence of close substitutes.\n2) Economies of scale (natural monopoly).\n3) Ownership of strategic/key inputs (e.g., Ambo mineral water source).\n4) Patent rights and copyrights.\n5) Government licences and trade restrictions (quotas).\n6) Unique product or exclusive technical knowledge (e.g., Coca-Cola formula).", explanation: "Six sources of monopoly power." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Explain the characteristics of monopolistic competition.", answer: "1) PRODUCT DIFFERENTIATION — each firm's product differs slightly (style, brand, quality).\n2) MANY SELLERS AND BUYERS (more than oligopoly, fewer than perfect competition).\n3) FREE ENTRY AND EXIT — no barriers.\n4) NON-PRICE COMPETITION — advertising, branding, customer service.\n\nDemand curve is downward-sloping but FLATTER than monopoly. AR > MR. Examples: pens, soap, restaurants, beer brands.", explanation: "Product differentiation + free entry + many sellers + non-price competition." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Explain the characteristics of oligopoly and the concept of duopoly.", answer: "OLIGOPOLY characteristics:\n1) FEW dominant firms — each firm recognizes rivals' actions.\n2) MUTUAL INTERDEPENDENCE — one firm's decision affects all firms.\n3) ENTRY BARRIERS — hard for new firms.\n4) Products may be homogeneous OR differentiated.\n5) Strategic behavior (pricing, advertising) is common.\n\nDUOPOLY: the simplest form of oligopoly with exactly TWO firms in the industry. Example: Ethio-Telecom and Safaricom Ethiopia.", explanation: "Few firms, interdependence; duopoly = 2 firms." },
    { id: "q50", type: "short", difficulty: "hard", stem: "If P = 10 − 2Q, find TR, AR, and MR.", answer: "Demand: P = 10 − 2Q\n\nTR = P × Q = (10 − 2Q)Q = 10Q − 2Q²\n\nAR = TR/Q = 10 − 2Q = P\n\nMR = ΔTR/ΔQ = 10 − 4Q\n\nNotice: MR has TWICE the slope of AR (because b = 2 → MR slope = 2b = 4). MR is below AR everywhere, confirming monopoly-style downward-sloping demand.", explanation: "TR = 10Q − 2Q²; AR = 10 − 2Q; MR = 10 − 4Q." },
  ],
};