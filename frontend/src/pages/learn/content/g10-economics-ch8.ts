import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 ECONOMICS — UNIT 8
// BUSINESS STARTUPS AND INNOVATION
// Source: Grade 10 Economics Student Textbook (pp. 155–178)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, formula boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10EconomicsCh8: Chapter = {
  id: "ch8",
  number: 8,
  title: "Business Startups and Innovation",
  titleAm: "የቢዝነስ ጅምሮችና ፈጠራ",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about INNOVATION and STARTUPS:\n" +
        "1) Innovation — definition, types, and Schumpeter's creative destruction.\n" +
        "2) Business startups vs small businesses.\n" +
        "3) Business organization types — sole proprietorship, partnership, corporation.\n" +
        "4) Feasibility studies vs business plans.\n" +
        "5) Cost-benefit analysis (CBA) and SWOT.\n\n" +
        "The WHOLE chapter reduces to FIVE key ideas:\n" +
        "• Innovation = creativity + implementation.\n" +
        "• Five types of innovation (Oslo Manual 2018): organizational, process, product, marketing, eco.\n" +
        "• Startup = seeks rapid growth; Small business = small but stable.\n" +
        "• Sole = 1 owner; Partnership = 2+; Corporation = separate legal entity.\n" +
        "• CBA: Benefits vs Costs → b/c ratio.\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ አምስቱ ዋና ሐሳቦች፡\n" +
        "• ፈጠራ = ፍጥረት + ትግበራ።\n" +
        "• 5 የፈጠራ ዓይነቶች።\n" +
        "• Startup vs Small business።\n" +
        "• Sole vs Partnership vs Corporation።\n" +
        "• CBA = ጥቅም vs ወጪ።",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand innovation",
          titleAm: "ደረጃ 1 · ፈጠራን መረዳት",
          body:
            "INNOVATION = something new, improved, or introduced that creates value.\n\n" +
            "TWO key elements:\n" +
            "• CREATIVITY — generating new ideas.\n" +
            "• IMPLEMENTATION — putting them into practice.\n\n" +
            "FIVE types (Oslo Manual 2018):\n" +
            "1) Organizational\n" +
            "2) Process\n" +
            "3) Product\n" +
            "4) Marketing\n" +
            "5) Eco-innovation",
          bodyAm:
            "ፈጠራ = ፍጥረት + ትግበራ።\n" +
            "5 ዓይነቶች፡\n" +
            "1) Organizational\n2) Process\n3) Product\n4) Marketing\n5) Eco",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Distinguish startups from small businesses",
          titleAm: "ደረጃ 2 · Startup vs Small business",
          body:
            "STARTUP:\n" +
            "• In INITIAL stages of operations.\n" +
            "• EXPECTS significant growth in the near future.\n" +
            "• Focus on TOP-END revenue and growth potential.\n" +
            "• No restrictions on growth.\n" +
            "• NOT profitable initially (grow fast → no profit at first).\n" +
            "• Funded by angel investors, venture capital, seed funding.\n\n" +
            "SMALL BUSINESS:\n" +
            "• Limited number of employees.\n" +
            "• Content operating in a small portion of a large market.\n" +
            "• Stable, no huge growth expectations.",
          bodyAm:
            "Startup: ፈጣን እድገት፤ ትርፍ አይኖርም መጀመሪያ።\n" +
            "Small: የተወሰነ መጠን፤ የተረጋጋ።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master business organization types",
          titleAm: "ደረጃ 3 · የቢዝነስ ዓይነቶች",
          body:
            "SOLE PROPRIETORSHIP:\n" +
            "• 1 owner.\n" +
            "• Unlimited liability.\n" +
            "• Easy to start.\n" +
            "• No separate legal entity.\n\n" +
            "PARTNERSHIP:\n" +
            "• 2+ partners.\n" +
            "• Unlimited liability (in general partnerships).\n" +
            "• Max 10 for banking, 20 for other businesses.\n" +
            "• Shared profits, shared risks.\n\n" +
            "CORPORATION:\n" +
            "• Separate legal entity.\n" +
            "• Limited liability for owners (stockholders).\n" +
            "• Board of directors.\n" +
            "• Shares of stock.",
          bodyAm:
            "Sole: 1 ባለቤት፤ unlimited liability።\n" +
            "Partnership: 2+፤ unlimited (በአጠቃላይ)።\n" +
            "Corporation: separate entity፤ limited liability።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Did you identify the correct type of innovation?\n" +
            "2) Did you distinguish startup vs small business?\n" +
            "3) Did you know sole = unlimited liability?\n" +
            "4) Did you know corporation = limited liability?\n" +
            "5) Did you identify feasibility study BEFORE business plan?",
          bodyAm:
            "1) ፈጠራ ዓይነት ✓\n" +
            "2) Startup vs Small ✓\n" +
            "3) Sole = unlimited ✓\n" +
            "4) Corporation = limited ✓",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Innovation = creativity + IMPLEMENTATION (not just ideas).\n" +
            "• FIVE types of innovation (Oslo Manual 2018).\n" +
            "• Startups = rapid growth focus; NOT profitable initially.\n" +
            "• Sole proprietorship = UNLIMITED liability.\n" +
            "• Partnership max: 10 (banking) or 20 (others).\n" +
            "• Corporation = LIMITED liability + separate legal entity.\n" +
            "• FEASIBILITY study FIRST, then business plan.\n" +
            "• CBA = Benefits vs Costs; positive b/c → proceed.",
          bodyAm:
            "• ፈጠራ = ፍጥረት + ትግበራ።\n" +
            "• 5 ዓይነቶች።\n" +
            "• Sole = unlimited።\n" +
            "• Corporation = limited።\n" +
            "• Feasibility → Business plan።",
        },
      ],
    },

    // ============================================================
    // 8.1 INNOVATION
    // ============================================================
    {
      id: "n1",
      title: "8.1 Innovation",
      titleAm: "8.1 ፈጠራ",
      body:
        "Abatu, INNOVATION is something new, improved, or introduced that CREATES VALUE. It has two key elements: CREATIVITY and IMPLEMENTATION.",
      bodyAm:
        "አባቱ፣ ፈጠራ = አዲስ ወይም የተሻሻለ ነገር ዋጋ የሚፈጥር።",
      children: [
        {
          id: "n1-1",
          title: "Definition (Oslo Manual)",
          titleAm: "ትርጉም (Oslo Manual)",
          body:
            "Oslo Manual (OECD) definition:\n" +
            "'A new or improved product or process (or combination thereof) that differs significantly from the unit's previous products or processes and that has been made available to potential users (product) or brought into use by the unit (process).'\n\n" +
            "Simpler definition:\n" +
            "INNOVATION = something NEW, IMPROVED, or INTRODUCED that creates value.\n\n" +
            "Two key elements:\n" +
            "1) CREATIVITY — generating ideas.\n" +
            "2) IMPLEMENTATION — putting ideas into use.",
          bodyAm:
            "አዲስ/የተሻሻለ ምርት/ሂደት።\n" +
            "ፍጥረት + ትግበራ።",
        },
        {
          id: "n1-2",
          title: "Type 1 — Organizational innovation",
          titleAm: "ዓይነት 1 — Organizational",
          body:
            "ORGANIZATIONAL INNOVATION: new organizational strategy that changes business practices, workplace organization, or external relationships.\n\n" +
            "Examples:\n" +
            "• First companies adopting a 4-day work week.\n" +
            "• First companies allowing employees to work from home using digital tools.",
          bodyAm:
            "አዲስ ድርጅታዊ ስትራቴጂ።\n" +
            "ምሳሌ: 4 ቀን ሥራ፣ ከቤት መስራት።",
        },
        {
          id: "n1-3",
          title: "Type 2 — Process innovation",
          titleAm: "ዓይነት 2 — Process",
          body:
            "PROCESS INNOVATION: new or improved production or delivery approach — changes in operational methods, techniques, equipment, or software.\n\n" +
            "Examples:\n" +
            "• First firms using SaaS (Software as a Service) / cloud contact centers.\n" +
            "• First hotels using big data for decisions.",
          bodyAm:
            "አዲስ የምርት/አቅርቦት ዘዴ።\n" +
            "ምሳሌ: SaaS፣ big data።",
        },
        {
          id: "n1-4",
          title: "Type 3 — Product innovation",
          titleAm: "ዓይነት 3 — Product",
          body:
            "PRODUCT INNOVATION: introduction of a new or improved GOOD or SERVICE.\n\n" +
            "Includes:\n" +
            "• Improved technical specifications.\n" +
            "• New materials or software.\n" +
            "• Better UX (user experience).\n\n" +
            "NOT counted:\n" +
            "• Routine updates (correcting errors, seasonal changes).\n\n" +
            "Examples:\n" +
            "• Lego switching to biodegradable oil-based plastics.\n" +
            "• First electric vehicles; new batteries with longer range.",
          bodyAm:
            "አዲስ/የተሻሻለ ምርት/አገልግሎት።\n" +
            "ምሳሌ: Lego biodegradable፣ ኤሌክትሪክ መኪና።",
        },
        {
          id: "n1-5",
          title: "Type 4 — Marketing innovation",
          titleAm: "ዓይነት 4 — Marketing",
          body:
            "MARKETING INNOVATION: new marketing strategy — changes in how a product is designed, packed, priced, or promoted.\n\n" +
            "Example:\n" +
            "• Haagen Dazs' new waste-free container.",
          bodyAm:
            "አዲስ የግብይት ስትራቴጂ።\n" +
            "ምሳሌ: Haagen Dazs waste-free container።",
        },
        {
          id: "n1-6",
          title: "Type 5 — Eco-innovation",
          titleAm: "ዓይነት 5 — Eco",
          body:
            "ECO-INNOVATION: innovation producing significant progress toward UN 2030 sustainable development goals.\n\n" +
            "Benefits:\n" +
            "• Reduces environmental impact.\n" +
            "• Improves nature's resilience.\n" +
            "• Efficient use of resources.\n" +
            "• Can boost company performance and competitiveness.\n\n" +
            "Examples:\n" +
            "• P&G cold-water detergents (product).\n" +
            "• IKEA electric fleet (process).\n" +
            "• Nestlé paper straws (marketing).\n" +
            "• Companies changing to sustainable suppliers (organizational).",
          bodyAm:
            "ለ UN 2030 ዘላቂ ልማት የሚያግዝ።\n" +
            "ምሳሌ: P&G cold-water፣ IKEA electric fleet።",
        },
        {
          id: "n1-7",
          title: "Creative destruction (Schumpeter)",
          titleAm: "የፈጣሪ ጥፋት (Schumpeter)",
          body:
            "Schumpeter (1934): capitalism is a DYNAMIC and INNOVATIVE market system that is CONSTANTLY CHANGING.\n\n" +
            "CREATIVE DESTRUCTION: new ideas and processes take over the current paradigm (status quo) and create NEW ways of producing — sometimes obliterating old industries.\n\n" +
            "Consequences:\n" +
            "• Products become obsolete.\n" +
            "• Companies close.\n" +
            "• People get unemployed.\n" +
            "• BUT new solutions increase quality of life.\n\n" +
            "Examples:\n" +
            "• Nokia and Kodak failed to adapt.\n" +
            "• First industrial revolution → petroleum boom → information age.",
          bodyAm:
            "አዲስ ሀሳብ አሮጌውን ያጠፋል።\n" +
            "ናኪያ/ኮዳክ አልተላመዱም።",
        },
        {
          id: "n1-8",
          title: "⚠ Remember trap — Innovation",
          titleAm: "⚠ አትርሳ — ፈጠራ",
          body:
            "• Innovation ≠ creativity. Innovation = creativity + IMPLEMENTATION.\n" +
            "• FIVE types of innovation: organizational, process, product, marketing, eco.\n" +
            "• Product innovation ≠ routine updates.\n" +
            "• Product innovation must be made available to users but NOT necessarily generate sales.\n" +
            "• Eco-innovation relates to sustainability goals.\n" +
            "• CREATIVE DESTRUCTION = Schumpeter's concept.\n" +
            "• Creative destruction is BOTH creative and destructive.",
          bodyAm:
            "• ፈጠራ = ፍጥረት + ትግበራ።\n" +
            "• 5 ዓይነቶች።\n" +
            "• Creative destruction = Schumpeter።",
        },
      ],
    },

    // ============================================================
    // 8.2 BUSINESS STARTUPS
    // ============================================================
    {
      id: "n2",
      title: "8.2 Business Startups",
      titleAm: "8.2 የቢዝነስ ጅምሮች",
      body:
        "Abatu, STARTUPS and SMALL BUSINESSES are different. Startups seek RAPID growth; small businesses are content with limited market share.",
      bodyAm:
        "አባቱ፣ Startup = ፈጣን እድገት፤ Small business = የተረጋጋ።",
      children: [
        {
          id: "n2-1",
          title: "Startup definition",
          titleAm: "የStartup ትርጉም",
          body:
            "STARTUP: any company that's in the INITIAL stages of operations but EXPECTS SIGNIFICANT GROWTH in the near future.\n\n" +
            "Key features:\n" +
            "• Focus on TOP-END revenue and growth potential.\n" +
            "• Temporary business model focused on RAPID growth.\n" +
            "• NO restrictions on growth.\n" +
            "• Wants to obtain as much market share as possible.\n" +
            "• NOT profitable in initial stages (may take years).\n" +
            "• Funded by angel investors, venture capital, seed funding.",
          bodyAm:
            "ፈጣን እድገት የሚፈልግ አዲስ ኩባንያ።\n" +
            "ትርፍ መጀመሪያ አይኖርም።",
        },
        {
          id: "n2-2",
          title: "Small business definition",
          titleAm: "የSmall business ትርጉም",
          body:
            "SMALL BUSINESS: any business that only has a CERTAIN NUMBER OF EMPLOYEES (maximum differs by industry).\n\n" +
            "Key features:\n" +
            "• Content operating in a SMALL PORTION of a LARGE market.\n" +
            "• Stable, limited growth ambition.\n" +
            "• No major investor funding typically needed.",
          bodyAm:
            "የተወሰነ የሰራተኛ ቁጥር።\n" +
            "በትንሽ ገበያ ክፍል ይረካል።",
        },
        {
          id: "n2-3",
          title: "Startup funding",
          titleAm: "የStartup ፋይናንስ",
          body:
            "Startups need significant CAPITAL for product development → usually via:\n\n" +
            "• ANGEL INVESTORS: individuals investing in promising startups → get 5–10% share.\n" +
            "• VENTURE CAPITAL FIRMS.\n" +
            "• SEED FUNDING: initial funding round from angel investors.\n\n" +
            "Example: UBER — one of the most successful startups — market value $50 billion.",
          bodyAm:
            "Angel investors (5-10%)።\n" +
            "Venture capital።\n" +
            "Seed funding።\n" +
            "Uber = $50B።",
        },
        {
          id: "n2-4",
          title: "⚠ Remember trap — Startups",
          titleAm: "⚠ አትርሳ — Startup",
          body:
            "• Startups seek RAPID growth; small businesses are content with small share.\n" +
            "• Startups NOT profitable initially (may take years).\n" +
            "• Startup has NO growth restrictions.\n" +
            "• Seed funding from angel investors → 5–10% share.\n" +
            "• Uber = most successful startup example ($50B).\n" +
            "• Big businesses look to startups for disruptive ideas.",
          bodyAm:
            "• Startup = ፈጣን እድገት።\n" +
            "• Seed funding = 5-10%።\n" +
            "• Uber = $50B።",
        },
      ],
    },

    // ============================================================
    // 8.3 BUSINESS ORGANIZATIONS
    // ============================================================
    {
      id: "n3",
      title: "8.3 Types of Business Organizations",
      titleAm: "8.3 የቢዝነስ ድርጅቶች ዓይነቶች",
      body:
        "Abatu, there are THREE main forms: SOLE PROPRIETORSHIP, PARTNERSHIP, and CORPORATION.",
      bodyAm:
        "ሦስቱ ዓይነቶች: Sole፣ Partnership፣ Corporation።",
      children: [
        {
          id: "n3-1",
          title: "Sole proprietorship — characteristics",
          titleAm: "Sole proprietorship ባህሪያት",
          body:
            "SOLE PROPRIETORSHIP: one person owns and manages the business, takes profits, and bears losses.\n\n" +
            "Characteristics:\n" +
            "a) Single ownership.\n" +
            "b) NO separation of ownership and management.\n" +
            "c) Less legal formalities.\n" +
            "d) NO separate entity.\n" +
            "e) NO sharing of profit and loss.\n" +
            "f) UNLIMITED LIABILITY — personal property can be used to pay business debts.\n" +
            "g) One-man control.",
          bodyAm:
            "1 ባለቤት።\n" +
            "UNLIMITED LIABILITY — የግል ንብረት ሊወሰድ ይችላል።",
        },
        {
          id: "n3-2",
          title: "Sole proprietorship — pros and cons",
          titleAm: "Sole — ጥቅሞችና ጉዳቶች",
          body:
            "ADVANTAGES:\n" +
            "• Easiest to start.\n" +
            "• Greatest freedom of action / flexibility.\n" +
            "• Maximum authority.\n" +
            "• Income tax advantages in very small firms.\n" +
            "• Business secrets maintained.\n" +
            "• Quick decisions.\n" +
            "• Personal touch.\n\n" +
            "DISADVANTAGES:\n" +
            "• Limited resources.\n" +
            "• Lack of continuity.\n" +
            "• UNLIMITED liability.\n" +
            "• Not suitable for large-scale operations.\n" +
            "• Limited managerial expertise.",
          bodyAm:
            "ጥቅም: ቀላል፣ ፈጣን፣ ሚስጥር።\n" +
            "ጉዳት: unlimited liability፣ የተወሰነ ሀብት።",
        },
        {
          id: "n3-3",
          title: "Partnership — characteristics",
          titleAm: "Partnership ባህሪያት",
          body:
            "PARTNERSHIP: business owned by TWO OR MORE persons who contribute resources and share profits.\n\n" +
            "Characteristics:\n" +
            "a) Two or more persons — max 10 (banking) or 20 (others).\n" +
            "b) Contractual relationship.\n" +
            "c) Sharing profits and business.\n" +
            "d) Existence of lawful business.\n" +
            "e) Principal-agent relationship between partners.\n" +
            "f) UNLIMITED LIABILITY (in general partnerships).\n" +
            "g) Voluntary registration (but unregistered suffers limitations).\n\n" +
            "LIMITED PARTNERSHIPS: limited partners have limited liability.",
          bodyAm:
            "2+ አጋሮች።\n" +
            "ቢያንስ 2፤ ቢበዛ 10 (ባንክ) / 20 (ሌላ)።\n" +
            "UNLIMITED liability (በአጠቃላይ)።",
        },
        {
          id: "n3-4",
          title: "Partnership — pros and cons",
          titleAm: "Partnership — ጥቅሞችና ጉዳቶች",
          body:
            "ADVANTAGES:\n" +
            "• Easy to form.\n" +
            "• Larger resources.\n" +
            "• Better decisions.\n" +
            "• Flexibility.\n" +
            "• Sharing of risks.\n" +
            "• Benefits of specialization.\n" +
            "• Protection of interest.\n" +
            "• Secrecy.\n\n" +
            "LIMITATIONS:\n" +
            "• Unlimited liability.\n" +
            "• Instability.\n" +
            "• Limited capital.\n" +
            "• Non-transferability of share.\n" +
            "• Possibility of conflicts.",
          bodyAm:
            "ጥቅም: ተጨማሪ ሀብት፣ የተሻሉ ውሳኔዎች።\n" +
            "ጉዳት: unlimited liability፣ ግጭት።",
        },
        {
          id: "n3-5",
          title: "Corporation — characteristics",
          titleAm: "Corporation ባህሪያት",
          body:
            "CORPORATION: business with a SEPARATE LEGAL PERSONALITY from its owners.\n\n" +
            "Characteristics:\n" +
            "• Ownership represented by SHARES OF STOCK.\n" +
            "• Stockholders have LIMITED LIABILITY.\n" +
            "• Limited involvement in operations.\n" +
            "• BOARD OF DIRECTORS (elected from stockholders) controls activities.\n" +
            "• Has all legal rights of an individual (except right to vote and certain limitations).\n" +
            "• Given right to exist by the state (charter).",
          bodyAm:
            "የተለየ ሕጋዊ አካል።\n" +
            "LIMITED liability።\n" +
            "Board of directors።",
        },
        {
          id: "n3-6",
          title: "⚠ Remember trap — Business organizations",
          titleAm: "⚠ አትርሳ — ቢዝነስ ዓይነቶች",
          body:
            "• SOLE = UNLIMITED liability; 1 owner.\n" +
            "• PARTNERSHIP = 2+ partners; UNLIMITED liability (general); max 10/20.\n" +
            "• CORPORATION = LIMITED liability; separate legal entity.\n" +
            "• Corporation ownership = shares of stock.\n" +
            "• Partnership: minors, lunatics, insolvent persons can't be partners (though a minor may share profits).\n" +
            "• Sole proprietorship = easiest to start.",
          bodyAm:
            "• Sole = unlimited liability።\n" +
            "• Corporation = limited liability።\n" +
            "• Partnership max = 10/20።",
        },
      ],
    },

    // ============================================================
    // 8.4 BUSINESS FEASIBILITY ANALYSIS
    // ============================================================
    {
      id: "n4",
      title: "8.4 Business Feasibility Analysis",
      titleAm: "8.4 የቢዝነስ የአዋጪነት ትንተና",
      body:
        "Abatu, before a business plan, you need a FEASIBILITY STUDY — a quick test of whether the idea works.",
      bodyAm:
        "አባቱ፣ መጀመሪያ feasibility study፣ ከዚያ business plan።",
      children: [
        {
          id: "n4-1",
          title: "Feasibility study vs business plan",
          titleAm: "Feasibility vs Business plan",
          body:
            "FEASIBILITY STUDY (proof of business concept):\n" +
            "• Tests whether a business is FEASIBLE (will it work?).\n" +
            "• <20% of the cost of a business plan.\n" +
            "• Written FIRST, before business plan.\n" +
            "• Answers 5 questions (see next node).\n\n" +
            "BUSINESS PLAN:\n" +
            "• Detailed ROAD MAP for building the company.\n" +
            "• Includes everything the feasibility study has PLUS timelines, detailed budgets, resumes, appendices.\n" +
            "• Commissioned for: reorganization, investment/funding, or management blueprint.",
          bodyAm:
            "Feasibility: ይሰራል? (ቀድሞ)።\n" +
            "Business plan: እንዴት? (በኋላ)።",
        },
        {
          id: "n4-2",
          title: "Five feasibility questions",
          titleAm: "አምስቱ የFeasibility ጥያቄዎች",
          body:
            "1) Will it work or not?\n" +
            "2) Is it profitable or not?\n" +
            "3) What will it basically cost to fund or start?\n" +
            "4) Is it worth doing?\n" +
            "5) Is it worth commissioning a business plan?",
          bodyAm:
            "1) ይሰራል?\n" +
            "2) ትርፋሪ ነው?\n" +
            "3) ወጪው ስንት?\n" +
            "4) ዋጋ አለው?\n" +
            "5) Business plan ያስፈልጋል?",
        },
        {
          id: "n4-3",
          title: "SME feasibility study content",
          titleAm: "የSME Feasibility ይዘት",
          body:
            "SME feasibility study should include:\n\n" +
            "1) THE BUSINESS IDEA — what is it? Will it work? Who buys? How different?\n" +
            "2) KEY PEOPLE / PROFILES — who implements it? Their skills and strengths.\n" +
            "3) PERSONAL OBJECTIVES — why go into business? (Wealth creation.)\n" +
            "4) THE MARKET — customers, segments, products/services, suppliers, competition, map.\n" +
            "5) BUSINESS OVERVIEW — location (rented, owned, home?), advantages.",
          bodyAm:
            "1) ሀሳብ\n2) ሰዎች\n3) ግላዊ ግቦች\n4) ገበያ\n5) ቢዝነስ አጠቃላይ እይታ",
        },
        {
          id: "n4-4",
          title: "Cost-benefit analysis (CBA)",
          titleAm: "Cost-Benefit Analysis (CBA)",
          body:
            "COST-BENEFIT ANALYSIS (CBA): process that weighs BENEFITS against COSTS of an action.\n\n" +
            "Steps:\n" +
            "1) Compile lists of all costs and benefits.\n" +
            "2) Give each a MONETARY value (including intangibles, opportunity cost).\n" +
            "3) Set up the equation: b/c ratio.\n\n" +
            "Formula (simplified):\n" +
            "Benefit/cost = b/c\n\n" +
            "If BENEFITS > COSTS → proceed with decision.\n" +
            "If COSTS > BENEFITS → reconsider.\n\n" +
            "Related to NET PRESENT VALUE (NPV): future benefits/costs in present value terms.\n" +
            "• NPV > 0 → good investment.\n" +
            "• NPV < 0 → bad investment.",
          bodyAm:
            "CBA = ጥቅም vs ወጪ።\n" +
            "b/c > 1 → ቀጥል።\n" +
            "NPV > 0 → ጥሩ ኢንቨስትመንት።",
        },
        {
          id: "n4-5",
          title: "SWOT analysis",
          titleAm: "SWOT ትንተና",
          body:
            "SWOT analysis is a standard business planning tool:\n" +
            "• STRENGTHS — internal positives.\n" +
            "• WEAKNESSES — internal negatives.\n" +
            "• OPPORTUNITIES — external positives.\n" +
            "• THREATS — external negatives.\n\n" +
            "Used in feasibility and business plan to evaluate business position.",
          bodyAm:
            "S — Strengths (ውስጣዊ +)\n" +
            "W — Weaknesses (ውስጣዊ −)\n" +
            "O — Opportunities (ውጫዊ +)\n" +
            "T — Threats (ዋጫዊ −)",
        },
        {
          id: "n4-6",
          title: "⚠ Remember trap — Feasibility",
          titleAm: "⚠ አትርሳ — Feasibility",
          body:
            "• FEASIBILITY study comes FIRST; business plan SECOND.\n" +
            "• Feasibility = proof of business concept (<20% cost of business plan).\n" +
            "• CBA: if b/c ratio > 1 → proceed.\n" +
            "• NPV > 0 = good investment; NPV < 0 = bad.\n" +
            "• Business plan includes: timelines, detailed budgets, resumes, appendices.\n" +
            "• Feasibility plan is NOT a formal document — it's a structured report.\n" +
            "• SWOT = Strengths, Weaknesses, Opportunities, Threats.",
          bodyAm:
            "• Feasibility → Business plan።\n" +
            "• b/c > 1 → ቀጥል።\n" +
            "• NPV > 0 → ጥሩ።",
        },
      ],
    },

    // ============================================================
    // FORMULA SHEET
    // ============================================================
    {
      id: "nFormula",
      title: "Formula Sheet — Unit 8",
      titleAm: "የቀመር ሉህ — ክፍል 8",
      body:
        "| Quantity                     | Formula / Definition                              |\n" +
        "|------------------------------|---------------------------------------------------|\n" +
        "| Innovation                   | Creativity + Implementation                       |\n" +
        "| Startup                      | Initial stage + expects significant growth        |\n" +
        "| Sole proprietorship          | 1 owner; unlimited liability                      |\n" +
        "| Partnership                  | 2+ partners; max 10 (banking) or 20 (others)      |\n" +
        "| Corporation                  | Separate legal entity; limited liability          |\n" +
        "| Cost-Benefit Ratio           | b/c = Total Benefits / Total Costs                |\n" +
        "| Net Present Value            | Future benefits/costs in present value terms      |\n" +
        "| SWOT                         | Strengths, Weaknesses, Opportunities, Threats     |",
      bodyAm:
        "| መጠን             | ቀመር                                  |\n" +
        "|------------------|--------------------------------------|\n" +
        "| ፈጠራ             | ፍጥረት + ትግበራ                         |\n" +
        "| b/c              | ጠቅላላ ጥቅም / ጠቅላላ ወጪ                   |\n" +
        "| SWOT             | Strengths, Weaknesses, Opportunities, Threats |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 8",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 8",
      body:
        "1) Innovation = creativity + IMPLEMENTATION (not just ideas).\n" +
        "2) FIVE types of innovation (organizational, process, product, marketing, eco).\n" +
        "3) Startups want RAPID growth; small businesses are content.\n" +
        "4) Startups NOT profitable initially.\n" +
        "5) Seed funding → angel investors get 5–10% share.\n" +
        "6) Sole proprietorship = UNLIMITED liability.\n" +
        "7) Corporation = LIMITED liability.\n" +
        "8) Partnership max = 10 (banking) or 20 (others).\n" +
        "9) FEASIBILITY study FIRST; business plan SECOND.\n" +
        "10) CBA: if b/c > 1 → proceed.\n" +
        "11) NPV > 0 → good investment.\n" +
        "12) Creative destruction = Schumpeter.",
      bodyAm:
        "1) ፈጠራ = ፍጥረት + ትግበራ።\n" +
        "2) 5 ዓይነቶች።\n" +
        "3) Sole = unlimited liability።\n" +
        "4) Feasibility → Business plan።\n" +
        "5) b/c > 1 → ቀጥል።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Innovation is best defined as:", options: ["Something new, improved, or introduced that creates value", "Only creating brand-new products", "Copying competitors", "Reducing price"], answer: "0", explanation: "Innovation = new/improved/introduced that creates value." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Innovation has two key elements:", options: ["Money and profit", "Creativity and implementation", "Planning and management", "Product and price"], answer: "1", explanation: "Creativity + Implementation." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "How many main types of innovation does the Oslo Manual (2018) identify?", options: ["Two", "Three", "Four", "Five"], answer: "3", explanation: "Organizational, process, product, marketing, eco." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "A new 4-day work week adopted by a company is:", options: ["Product innovation", "Process innovation", "Organizational innovation", "Marketing innovation"], answer: "2", explanation: "New organizational strategy = ORGANIZATIONAL innovation." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Introduction of a new or improved good or service is:", options: ["Product innovation", "Process innovation", "Marketing innovation", "Organizational innovation"], answer: "0", explanation: "Product innovation = new/improved good or service." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "A startup is characterized by:", options: ["Slow growth", "Rapid growth potential", "Zero growth", "No innovation"], answer: "1", explanation: "Startups expect SIGNIFICANT GROWTH." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Compared to small businesses, startups:", options: ["Are less ambitious", "Want maximum market share", "Want a small share only", "Are always profitable"], answer: "1", explanation: "Startups want as much market share as possible." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Sole proprietorship has:", options: ["Limited liability", "Unlimited liability", "No liability", "Government liability"], answer: "1", explanation: "Sole proprietorship = UNLIMITED liability." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "A partnership must have at least:", options: ["1 person", "2 persons", "5 persons", "10 persons"], answer: "1", explanation: "Partnership = 2+ persons minimum." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Maximum partners in a banking partnership is:", options: ["5", "10", "15", "20"], answer: "1", explanation: "Banking partnership max = 10." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Maximum partners in a non-banking partnership is:", options: ["5", "10", "20", "50"], answer: "2", explanation: "Non-banking partnership max = 20." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "A corporation has:", options: ["Unlimited liability", "Limited liability", "No liability", "Government liability"], answer: "1", explanation: "Corporation = LIMITED liability." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "In a corporation, ownership is represented by:", options: ["A single owner", "Partnership agreement", "Shares of stock", "Government certificate"], answer: "2", explanation: "Corporation ownership = SHARES OF STOCK." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "A feasibility study should be done:", options: ["After business plan", "Before business plan", "At the same time", "Never"], answer: "1", explanation: "Feasibility FIRST, then business plan." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "CBA stands for:", options: ["Cost Business Accounting", "Cost-Benefit Analysis", "Capital Business Analysis", "Cash Balance Account"], answer: "1", explanation: "CBA = Cost-Benefit Analysis." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "SWOT stands for:", options: ["Strategy, Work, Objectives, Tactics", "Strengths, Weaknesses, Opportunities, Threats", "Sales, Wages, Operations, Tax", "Stock, Withdrawal, Output, Trade"], answer: "1", explanation: "SWOT = Strengths, Weaknesses, Opportunities, Threats." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Creative destruction is a concept by:", options: ["Adam Smith", "Karl Marx", "Joseph Schumpeter", "Muhammad Yunus"], answer: "2", explanation: "CREATIVE DESTRUCTION = Schumpeter's concept." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Eco-innovation is primarily about:", options: ["Profit maximization", "Sustainability and reducing environmental impact", "Cost cutting", "Tax reduction"], answer: "1", explanation: "Eco-innovation = sustainability, environmental progress." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "Which is NOT a type of innovation according to Oslo Manual?", options: ["Product innovation", "Process innovation", "Financial innovation", "Marketing innovation"], answer: "2", explanation: "Financial innovation is not in the Oslo Manual's list of five." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "A hotel chain using big data for decisions is an example of:", options: ["Product innovation", "Process innovation", "Marketing innovation", "Organizational innovation"], answer: "1", explanation: "Process innovation = new methods for decisions." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "Nestlé's paper straws replacing plastic straws is:", options: ["Product innovation", "Marketing innovation", "Process innovation", "Eco innovation"], answer: "3", explanation: "Eco-innovation (sustainability)." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "Routine updates or corrections are:", options: ["Product innovation", "NOT product innovation", "Always innovation", "Marketing innovation"], answer: "1", explanation: "Routine updates are NOT innovation." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "Startups typically fund initial operations from:", options: ["Bank loans", "Angel investors, venture capital, seed funding", "Government only", "Personal savings only"], answer: "1", explanation: "Angel investors, venture capital, seed funding." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "Angel investors typically get what % of the business for their money?", options: ["1–2%", "5–10%", "20–30%", "50%+"], answer: "1", explanation: "Angel investors get 5–10% share." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "Which is NOT an advantage of sole proprietorship?", options: ["Easy to start", "Quick decisions", "Unlimited liability", "Business secrets maintained"], answer: "2", explanation: "Unlimited liability is a DISADVANTAGE." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "Which can become a partner in a partnership firm?", options: ["Minor", "Lunatic", "Insolvent person", "Competent person who contracts"], answer: "3", explanation: "Only competent persons; minors may share profits but not be partners." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "A corporation's board of directors is elected by:", options: ["Government", "Stockholders", "Employees", "Banks"], answer: "1", explanation: "Board elected by STOCKHOLDERS." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "A feasibility study is typically what % of the cost of a business plan?", options: ["<20%", "50%", "100%", ">200%"], answer: "0", explanation: "Feasibility <20% of business plan cost." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "Which is NOT one of the 5 feasibility questions?", options: ["Will it work?", "Is it profitable?", "What will it cost?", "Who is the competitor's CEO?"], answer: "3", explanation: "The 5 questions are about viability, profitability, cost, worth, business plan need." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "If benefits total 100,000 Birr and costs total 80,000 Birr, the business should:", options: ["Not proceed", "Proceed (benefits > costs)", "Double the costs", "Take a loan"], answer: "1", explanation: "b/c > 1 → proceed." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "If Net Present Value (NPV) is negative:", options: ["Good investment", "Bad investment", "No effect", "Same as CBA"], answer: "1", explanation: "NPV < 0 → bad investment." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "The 'creative' in creative destruction refers to:", options: ["New products/industries emerging", "Destroying ideas", "Losing money", "Copying competitors"], answer: "0", explanation: "Creative = new solutions replacing old ones." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "Which company failed to adapt to creative destruction?", options: ["Apple", "Nokia", "Uber", "Tesla"], answer: "1", explanation: "Nokia and Kodak failed to adapt." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "A sole proprietorship's liability is:", options: ["Limited to capital", "Limited to 1 year", "Unlimited (personal property used)", "Government covered"], answer: "2", explanation: "Sole proprietorship = UNLIMITED liability." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Unlimited liability means:", options: ["Owner can lose only invested capital", "Owner can lose personal property if business assets insufficient", "No risk for owner", "Partners are covered by insurance"], answer: "1", explanation: "Unlimited = personal property can pay business debts." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Lego switching to biodegradable plastics is a:", options: ["Product innovation", "Process innovation", "Marketing innovation", "Organizational innovation"], answer: "0", explanation: "New material in the product = PRODUCT innovation." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Haagen Dazs' new waste-free container is:", options: ["Product innovation", "Process innovation", "Marketing innovation", "Eco innovation"], answer: "2", explanation: "Marketing innovation (new packaging strategy)." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "A company funding its startup with initial round from angel investors is called:", options: ["Series A", "IPO", "Seed funding", "Bond issuance"], answer: "2", explanation: "SEED funding = initial round from angel investors." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "Which is a correct pair?", options: ["Sole proprietorship — limited liability", "Corporation — unlimited liability", "Partnership — max 10 in banking", "Corporation — no separate entity"], answer: "2", explanation: "Banking partnership max = 10; corporation has separate entity + limited liability." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "If cost-benefit ratio is less than 1, the business should:", options: ["Proceed", "Reconsider (costs > benefits)", "Expand immediately", "Borrow more"], answer: "1", explanation: "b/c < 1 → costs > benefits → reconsider." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Which distinguishes a startup from a small business?", options: ["Number of employees", "Location", "Growth ambition (startup expects rapid growth)", "Product type"], answer: "2", explanation: "Startups expect RAPID growth; small businesses don't." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "Uber's market value is about:", options: ["$5 billion", "$10 billion", "$50 billion", "$500 billion"], answer: "2", explanation: "Uber ≈ $50 billion." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "Partnership registration in Ethiopia is:", options: ["Compulsory in all cases", "Voluntary (but unregistered firms face limitations)", "Illegal", "Only for banks"], answer: "1", explanation: "Registration is voluntary but unregistered firms suffer limitations." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Define innovation and state its two key elements.", answer: "INNOVATION: something new, improved, or introduced that creates value. It is a new or improved product or process that differs significantly from previous products/processes and has been made available to users or brought into use.\n\nTwo key elements:\n1) CREATIVITY — generating new ideas.\n2) IMPLEMENTATION — putting ideas into use.", explanation: "Innovation = creativity + implementation." },
    { id: "q45", type: "short", difficulty: "easy", stem: "List the five types of innovation.", answer: "1) ORGANIZATIONAL: new organizational strategy (e.g., 4-day work week, remote work).\n2) PROCESS: new or improved production/delivery approach (e.g., SaaS, big data).\n3) PRODUCT: new or improved good or service (e.g., electric vehicles).\n4) MARKETING: new marketing strategy (e.g., Haagen Dazs waste-free container).\n5) ECO-INNOVATION: innovation toward UN 2030 sustainable development goals (e.g., P&G cold-water detergents).", explanation: "Organizational, process, product, marketing, eco." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Differentiate startups from small businesses.", answer: "STARTUPS:\n• Initial stage of operations.\n• Expect SIGNIFICANT growth.\n• Focus on TOP-END revenue and growth potential.\n• No growth restrictions.\n• NOT profitable initially (may take years).\n• Funded by angel investors/venture capital/seed funding.\n\nSMALL BUSINESSES:\n• Limited number of employees (max differs by industry).\n• Content with a SMALL PORTION of a large market.\n• Stable, limited growth ambition.\n• Typically profitable sooner.", explanation: "Startup = rapid growth; Small = stable." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Explain creative destruction (Schumpeter).", answer: "CREATIVE DESTRUCTION (Schumpeter, 1934): capitalism is a DYNAMIC and INNOVATIVE system that constantly changes.\n\nNew ideas and processes take over the current paradigm (status quo) and create NEW ways of producing goods, services, or entirely new industries.\n\nCONSEQUENCES:\n• Old products become obsolete.\n• Companies close.\n• People get unemployed.\n• BUT new solutions increase quality of life.\n\nExamples: Nokia and Kodak failed to adapt. First industrial revolution → petroleum boom → information age.", explanation: "New replaces old — both creative and destructive." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Compare sole proprietorship, partnership, and corporation.", answer: "SOLE PROPRIETORSHIP:\n• 1 owner.\n• Unlimited liability.\n• Easy to start; no legal formalities.\n• No separate entity.\n• No sharing of profit/loss.\n\nPARTNERSHIP:\n• 2+ partners (max 10 banking, 20 others).\n• Unlimited liability in general partnerships.\n• Sharing of profits and risks.\n• Voluntary registration.\n\nCORPORATION:\n• Separate legal entity.\n• LIMITED liability.\n• Ownership via shares of stock.\n• Board of directors elected by stockholders.", explanation: "Sole = 1 owner + unlimited; Partnership = 2+ + unlimited; Corporation = separate + limited." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Differentiate a feasibility study from a business plan.", answer: "FEASIBILITY STUDY (proof of business concept):\n• Tests whether the idea is FEASIBLE.\n• Written FIRST.\n• <20% of the cost of a business plan.\n• Answers 5 questions: will it work, is it profitable, what will it cost, is it worth doing, is it worth a business plan.\n• Not a formal document — a structured report.\n\nBUSINESS PLAN:\n• Detailed ROAD MAP for building the company.\n• Written AFTER feasibility study.\n• More detailed — includes timelines, budgets, resumes, appendices.\n• Used for: reorganization, investment, or management blueprint.", explanation: "Feasibility = will it work? (first); Business plan = how? (second)." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Explain cost-benefit analysis (CBA) and how it relates to NPV.", answer: "COST-BENEFIT ANALYSIS (CBA): a process that weighs BENEFITS against COSTS of an action.\n\nSTEPS:\n1) Compile lists of all costs and benefits.\n2) Assign MONETARY values (including intangibles, opportunity cost).\n3) Set up ratio: b/c = Total Benefits / Total Costs.\n\nDECISION RULE:\n• If benefits > costs (b/c > 1) → proceed.\n• If costs > benefits (b/c < 1) → reconsider.\n\nRELATION TO NPV (Net Present Value):\n• NPV = future benefits/costs in present value terms.\n• NPV > 0 → good investment.\n• NPV < 0 → bad investment.\n• CBA often uses NPV for long-term decisions because money loses value over time due to inflation.", explanation: "b/c > 1 → proceed; NPV > 0 → good investment." },
  ],
};