import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 ECONOMICS — UNIT 5
// BANKING AND FINANCE
// Source: Grade 10 Economics Student Textbook (pp. 89–112)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, formula boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10EconomicsCh5: Chapter = {
  id: "ch5",
  number: 5,
  title: "Banking and Finance",
  titleAm: "ባንክና ፋይናንስ",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about MONEY FLOWING through institutions:\n" +
        "1) Financial intermediaries — middlemen between savers and borrowers.\n" +
        "2) Financial markets — money market (short term) vs capital market (long term).\n" +
        "3) Financial institutions — banks, NBFIs, microfinances.\n" +
        "4) Ethiopian banking history — 1905 to today.\n" +
        "5) E-banking — ATMs, direct deposit, debit cards, mobile banking.\n" +
        "6) Indigenous institutions — iqqub, iddir, SACCOs.\n\n" +
        "The WHOLE chapter reduces to FOUR key ideas:\n" +
        "• Financial intermediary = middleman between savers and borrowers.\n" +
        "• Money market = ≤1 year maturity; Capital market = >1 year.\n" +
        "• NBE = central bank (regulator); CBE = largest commercial bank; DBE = development bank.\n" +
        "• Indigenous institutions = iqqub (saving club), iddir (funeral/social), SACCOs.\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ ይህ ክፍል ስለ ገንዘብ ፍሰት ነው፡\n" +
        "1) ፋይናንሺያል አማላጆች\n" +
        "2) ፋይናንሺያል ገበያዎች\n" +
        "3) ፋይናንሺያል ተቋማት\n" +
        "4) የኢትዮጵያ ባንክ ታሪክ\n" +
        "5) ኢ-ባንኪንግ\n" +
        "6) ባህላዊ ተቋማት — እቁብ፣ እድር",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the money flow",
          titleAm: "ደረጃ 1 · የገንዘብ ፍሰት መረዳት",
          body:
            "SAVERS (excess money) → Banks → BORROWERS (shortage of money)\n\n" +
            "This is FINANCIAL INTERMEDIATION.\n\n" +
            "Key institutions:\n" +
            "• Banks (accept deposits, give loans).\n" +
            "• Microfinance (small loans, no collateral, group lending).\n" +
            "• Indigenous institutions (iqqub, iddir).\n" +
            "• NBE (regulator, central bank).",
          bodyAm:
            "ቆጣቢዎች → ባንኮች → ተበዳሪዎች።\n" +
            "ይህ ፋይናንሺያል አማላጅነት ነው።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the key distinctions",
          titleAm: "ደረጃ 2 · ዋና ልዩነቶችን አስታውስ",
          body:
            "MONEY MARKET vs CAPITAL MARKET:\n" +
            "• Money market: maturity ≤ 1 year. (T-bills, commercial paper, CDs, repos, bankers' acceptances)\n" +
            "• Capital market: maturity > 1 year. (Equity, debt securities, bank loans)\n\n" +
            "CENTRAL BANK vs COMMERCIAL BANK:\n" +
            "• NBE = regulator, issues currency, controls money supply.\n" +
            "• CBE = largest commercial bank, profit-making, accepts deposits.\n\n" +
            "MICROFINANCE vs MONEYLENDER:\n" +
            "• MFI = formal, group lending, low interest.\n" +
            "• Moneylender = informal, high interest, no protection.",
          bodyAm:
            "Money market: ≤1 ዓመት።\n" +
            "Capital market: >1 ዓመት።\n" +
            "NBE = ተቆጣጣሪ፤ CBE = ትልቁ የንግድ ባንክ።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master the Ethiopian banking timeline",
          titleAm: "ደረጃ 3 · የኢትዮጵያ ባንክ ታሪክ",
          body:
            "1905 — Agreement with Anglo-Egyptian National Bank\n" +
            "1906 — Bank of Abyssinia founded (first modern bank)\n" +
            "1931 — Bank of Abyssinia liquidated → Bank of Ethiopia\n" +
            "1936 — Bank of Ethiopia liquidated under Italian occupation\n" +
            "1936–41 — Italian banks (Banca d'Italia, Banco di Roma, etc.)\n" +
            "1941 — Barclays Bank (British)\n" +
            "1943 — State Bank of Ethiopia (central + commercial)\n" +
            "1963 — NBE and CBE split (Proclamation 206/1963)\n" +
            "1974 — Socialist government nationalizes banks\n" +
            "1980 — Addis Bank merged with CBE → single commercial bank\n" +
            "1991 — Liberal economy; private banks return\n" +
            "1994 — Monetary and Banking Proclamation No. 83/1994 (private banking allowed)",
          bodyAm:
            "1906: Bank of Abyssinia (የመጀመሪያ)።\n" +
            "1943: State Bank of Ethiopia።\n" +
            "1963: NBE + CBE ተለያዩ።\n" +
            "1994: የግል ባንኮች ተፈቀዱ።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Did you distinguish money market vs capital market?\n" +
            "2) Did you identify the central bank correctly (NBE)?\n" +
            "3) Did you distinguish microfinance from moneylenders?\n" +
            "4) Did you remember iqqub vs iddir?\n" +
            "5) Did you check the year of Ethiopian banking milestones?",
          bodyAm:
            "1) Money vs Capital market?\n" +
            "2) NBE = central bank?\n" +
            "3) MFI vs moneylender?\n" +
            "4) እቁብ vs እድር?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Bank = financial intermediary (NOT a financial market, NOT an instrument).\n" +
            "• Money market = maturity ≤ 1 year. Capital market = maturity > 1 year.\n" +
            "• NBE is NOT profit-making — it regulates. CBE and other commercial banks ARE profit-making.\n" +
            "• Microfinance targets the 'economically active poor' — NOT the 'poorest of the poor'.\n" +
            "• Group lending replaces physical collateral.\n" +
            "• Iqqub = saving club (rotating). Iddir = funeral/social insurance.\n" +
            "• Modern banking in Ethiopia started in 1905 (agreement) / 1906 (bank founded).",
          bodyAm:
            "• ባንክ = ፋይናንሺያል አማላጅ።\n" +
            "• Money market ≤ 1 ዓመት።\n" +
            "• NBE ትርፍ አያመነጭም።\n" +
            "• MFI = economically active poor።",
        },
      ],
    },

    // ============================================================
    // 5.1 INTRODUCTION TO FINANCIAL INTERMEDIARIES
    // ============================================================
    {
      id: "n1",
      title: "5.1 Introduction to Financial Intermediaries",
      titleAm: "5.1 የፋይናንሺያል አማላጆች መግቢያ",
      body:
        "Abatu, a FINANCIAL INTERMEDIARY is a middleman between two parties in a financial transaction — for example, Commercial Bank of Ethiopia.",
      bodyAm:
        "አባቱ፣ ፋይናንሺያል አማላጅ = በሁለት ወገኖች መካከል ያለ አማላጅ።",
      children: [
        {
          id: "n1-1",
          title: "Definition",
          titleAm: "ትርጉም",
          body:
            "FINANCIAL INTERMEDIARY: an entity that acts as the middleman between two parties in a financial transaction.\n\n" +
            "It mediates between:\n" +
            "• PROVIDERS of financial capital (people with excess money = savers).\n" +
            "• USERS of financial capital (people with shortage of money = borrowers).\n\n" +
            "Example: Commercial Bank of Ethiopia (CBE).",
          bodyAm:
            "ፋይናንሺያል አማላጅ = በቆጣቢና ተበዳሪ መካከል ያለ አማላጅ።",
        },
        {
          id: "n1-2",
          title: "Financial intermediation",
          titleAm: "ፋይናንሺያል አማላጅነት",
          body:
            "FINANCIAL INTERMEDIATION: the transfer of funds from surplus spending units (savers) to deficit spending units (borrowers) through financial intermediaries.\n\n" +
            "Flow:\n" +
            "Surplus units → Intermediaries → Deficit units",
          bodyAm:
            "ከትርፍ ወደ ጉድለት በአማላጅ በኩል የገንዘብ ሽግግር።",
        },
        {
          id: "n1-3",
          title: "Benefits for depositors",
          titleAm: "ለቆጣቢዎች ጥቅሞች",
          body:
            "• SAFETY: money free from risk of loss.\n" +
            "• INTEREST EARNING: banks pay interest on savings.\n" +
            "• LIQUIDITY: access to money when needed.\n" +
            "• ECONOMIES OF SCALE in banking and asset management.",
          bodyAm:
            "• ደህንነት\n• ወለድ\n• ሊኩዊዲቲ",
        },
        {
          id: "n1-4",
          title: "Benefits for borrowers",
          titleAm: "ለተበዳሪዎች ጥቅሞች",
          body:
            "• Access to finance for INVESTMENT (production).\n" +
            "• Banks charge annual interest on loans.\n" +
            "• More borrowing → more investment → more production → more economic growth.\n\n" +
            "Money (finance) is like the blood circulating in the body — an economy cannot function well without it.",
          bodyAm:
            "• ለኢንቨስትመንት ፋይናንስ ማግኘት\n" +
            "• ወለድ ይከፈላል\n" +
            "• ገንዘብ = የኢኮኖሚ ደም",
        },
        {
          id: "n1-5",
          title: "⚠ Remember trap — Intermediaries",
          titleAm: "⚠ አትርሳ — አማላጆች",
          body:
            "• A bank is a FINANCIAL INTERMEDIARY — NOT a financial market or financial instrument.\n" +
            "• Financial intermediation = transfer from SURPLUS to DEFICIT units.\n" +
            "• Both depositors AND borrowers benefit.\n" +
            "• Banks don't just store money — they lend it out.",
          bodyAm:
            "• ባንክ = አማላጅ።\n" +
            "• ከትርፍ ወደ ጉድለት ሽግግር።",
        },
      ],
    },

    // ============================================================
    // 5.2 INTRODUCTION TO FINANCIAL MARKETS
    // ============================================================
    {
      id: "n2",
      title: "5.2 Introduction to Financial Markets",
      titleAm: "5.2 የፋይናንሺያል ገበያዎች መግቢያ",
      body:
        "Abatu, FINANCIAL MARKETS provide channels for allocation of savings to investment. They have TWO components: money market and capital market.",
      bodyAm:
        "አባቱ፣ ፋይናንሺያል ገበያዎች = ቁጠባን ወደ ኢንቨስትመንት የሚያስተላልፉ መንገዶች።",
      children: [
        {
          id: "n2-1",
          title: "Definition and purpose",
          titleAm: "ትርጉምና ዓላማ",
          body:
            "FINANCIAL MARKETS: markets that provide channels for allocation of savings to investment.\n\n" +
            "They:\n" +
            "• Provide assets to savers.\n" +
            "• Provide ways for investors to raise funds.\n" +
            "• Decouple saving from investment.\n" +
            "• Contribute to economic development by channeling savings into investment.",
          bodyAm:
            "ቁጠባን ወደ ኢንቨስትመንት የሚያስተላልፍ ገበያ።",
        },
        {
          id: "n2-2",
          title: "Money market (≤ 1 year)",
          titleAm: "የገንዘብ ገበያ (≤ 1 ዓመት)",
          body:
            "MONEY MARKET: sector of the financial market that includes financial instruments with a maturity of ONE YEAR OR LESS at the time of issuance.\n\n" +
            "Instruments:\n" +
            "• Treasury bills (T-bills) — government, 3 weeks to 6 months.\n" +
            "• Commercial papers — corporate promissory notes, 1 day to 270 days.\n" +
            "• Negotiable certificates of deposit (CDs) — bank-issued, 1 month to 1 year.\n" +
            "• Repurchase agreements (repos).\n" +
            "• Bankers' acceptances.",
          bodyAm:
            "≤ 1 ዓመት ጊዜ ያላቸው መሣሪያዎች።\n" +
            "T-bills፣ Commercial papers፣ CDs፣ Repos፣ Bankers' acceptances።",
        },
        {
          id: "n2-3",
          title: "Capital market (> 1 year)",
          titleAm: "የካፒታል ገበያ (> 1 ዓመት)",
          body:
            "CAPITAL MARKET: sector where LONG-TERM financial instruments are issued by corporations and governments — original maturity GREATER THAN ONE YEAR (plus perpetual securities).\n\n" +
            "Two types:\n" +
            "1) EQUITY: common stock, preferred stock (ownership).\n" +
            "2) DEBT OBLIGATIONS: bank loans, debt securities (notes ≤10 years, bonds >10 years).",
          bodyAm:
            "> 1 ዓመት ጊዜ ያላቸው መሣሪያዎች።\n" +
            "Equity + Debt።",
        },
        {
          id: "n2-4",
          title: "⚠ Remember trap — Markets",
          titleAm: "⚠ አትርሳ — ገበያዎች",
          body:
            "• MONEY market: ≤ 1 year maturity. SHORT-term.\n" +
            "• CAPITAL market: > 1 year maturity. LONG-term.\n" +
            "• T-bills = money market (not capital!).\n" +
            "• Stocks (equity) = capital market.\n" +
            "• Bonds with >10 years = capital market.\n" +
            "• Certificates of deposit (CDs) = money market.",
          bodyAm:
            "• Money market: ≤ 1 ዓመት።\n" +
            "• Capital market: > 1 ዓመት።\n" +
            "• T-bills = money market።",
        },
      ],
    },

    // ============================================================
    // 5.3 INTRODUCTION TO FINANCIAL INSTITUTIONS
    // ============================================================
    {
      id: "n3",
      title: "5.3 Introduction to Financial Institutions",
      titleAm: "5.3 የፋይናንሺያል ተቋማት መግቢያ",
      body:
        "Abatu, INSTITUTIONS are 'rules of the game' in society. FINANCIAL INSTITUTIONS are institutions that serve as financial intermediaries.",
      bodyAm:
        "አባቱ፣ ፋይናንሺያል ተቋማት = ፋይናንሺያል አማላጅ ሆነው የሚያገለግሉ ተቋማት።",
      children: [
        {
          id: "n3-1",
          title: "Formal vs Informal institutions",
          titleAm: "መደበኛ vs መደበኛ ያልሆነ",
          body:
            "INSTITUTIONS: norms that organize social, political, and economic relations — 'rules of the game'.\n\n" +
            "Two forms:\n" +
            "• FORMAL: written constitution, laws, policies, regulations.\n" +
            "• INFORMAL: unwritten social norms, customs, traditions.",
          bodyAm:
            "መደበኛ: የተጻፈ።\n" +
            "መደበኛ ያልሆነ: ያልተጻፈ።",
        },
        {
          id: "n3-2",
          title: "Three types of financial institutions",
          titleAm: "ሦስቱ ዓይነቶች",
          body:
            "1) DEPOSITARY INSTITUTIONS: banks and credit unions (accept deposits, make loans).\n" +
            "2) CONTRACTUAL INSTITUTIONS: insurance companies, pension funds.\n" +
            "3) INVESTMENT INSTITUTES: investment banks, underwriters, brokerage firms.",
          bodyAm:
            "1) ተቀማጭ ተቋማት (ባንኮች)\n" +
            "2) ውላዊ ተቋማት (መድን፣ ጡረታ)\n" +
            "3) ኢንቨስትመንት ተቋማት",
        },
        {
          id: "n3-3",
          title: "Banking financial institutions",
          titleAm: "የባንክ ተቋማት",
          body:
            "BANK: financial intermediary that accepts deposits and gives loans.\n\n" +
            "Roles in the economy:\n" +
            "• Mobilizing saving.\n" +
            "• Identifying good investments.\n" +
            "• Exerting sound corporate control.\n" +
            "• Acquiring information about firms (improving capital allocation).\n" +
            "• Managing cross-sectional, inter-temporal, and liquidity risk.\n\n" +
            "Bank efficiency depends on:\n" +
            "1) Degree of competition among banks.\n" +
            "2) Nature of regulation.",
          bodyAm:
            "ባንክ = ተቀማጭ + ብድር።\n" +
            "ብቃቱ የተመሠረተው በውድድርና በሕግ ላይ ነው።",
        },
        {
          id: "n3-4",
          title: "Non-banking financial institutions (NBFIs)",
          titleAm: "ባንክ ያልሆኑ ተቋማት",
          body:
            "NBFI: financial institution that does NOT have a full banking license or is NOT supervised by a banking regulator.\n\n" +
            "They facilitate bank-related services:\n" +
            "• Investment, insurance, risk pooling, contractual savings, market brokering.\n\n" +
            "Examples: insurance companies, pawn shops, cashier's check issuers, check cashing locations, payday lending, currency exchanges, microloan organizations.",
          bodyAm:
            "ባንክ ፈቃድ የሌለው ተቋም።\n" +
            "ምሳሌ: መድን፣ ፓውን ሾፕ፣ ማይክሮ ሎን።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap — Institutions",
          titleAm: "⚠ አትርሳ — ተቋማት",
          body:
            "• Bank = DEPOSITARY institution (accepts deposits + makes loans).\n" +
            "• Insurance company = CONTRACTUAL institution (not depositary).\n" +
            "• NBFI does NOT have full banking license.\n" +
            "• Formal = written; Informal = unwritten.\n" +
            "• Competition among banks → lower borrower rates, higher depositor rates.",
          bodyAm:
            "• ባንክ = ተቀማጭ ተቋም።\n" +
            "• መድን = ውላዊ።\n" +
            "• NBFI = ሙሉ ፈቃድ የለውም።",
        },
      ],
    },

    // ============================================================
    // 5.4 HISTORICAL DEVELOPMENT OF BANKS IN ETHIOPIA
    // ============================================================
    {
      id: "n4",
      title: "5.4 Historical Development of Banks in Ethiopia",
      titleAm: "5.4 የኢትዮጵያ ባንክ ታሪካዊ እድገት",
      body:
        "Abatu, modern banking in Ethiopia started in 1905 with an agreement between Emperor Menelik II and the Anglo-Egyptian National Bank. The Bank of Abyssinia was founded in 1906.",
      bodyAm:
        "አባቱ፣ ዘመናዊ ባንክ በ1905 ተጀመረ። Bank of Abyssinia በ1906 ተመሠረተ።",
      children: [
        {
          id: "n4-1",
          title: "1905–1931: Bank of Abyssinia",
          titleAm: "1905–1931: Bank of Abyssinia",
          body:
            "• 1905: Agreement signed between Emperor Menelik II and the British-owned National Bank of Egypt.\n" +
            "• 1906: Bank of Abyssinia founded — first modern bank in Ethiopia.\n" +
            "• Managed by Egyptian National Bank (foreign).\n" +
            "• 50-year concession; issued notes, collected deposits, granted loans.\n" +
            "• Clients: mostly foreign businessmen and wealthy Ethiopians.\n" +
            "• Branches: Harar (1906), Dire Dawa (1908), Gore (1912), Dessie & Djibouti (1920).\n" +
            "• 1931: Liquidated.",
          bodyAm:
            "1906: የመጀመሪያው ዘመናዊ ባንክ።\n" +
            "ቅርንጫፎች: ሐረር፣ ድሬዳዋ፣ ጎሬ፣ ደሴ።\n" +
            "1931: ተዘጋ።",
        },
        {
          id: "n4-2",
          title: "1931–1936: Bank of Ethiopia",
          titleAm: "1931–1936: Bank of Ethiopia",
          body:
            "• 1931: Bank of Abyssinia liquidated and replaced by Bank of Ethiopia (shortly after Haile Selassie came to power).\n" +
            "• First INDEPENDENT bank — totally under Ethiopian government control.\n" +
            "• Took over commercial activities of Bank of Abyssinia.\n" +
            "• Authorized to issue notes and coins.\n" +
            "• Added agency in Gambella and transit office in Djibouti.\n" +
            "• 1936: Liquidated during Italian occupation.",
          bodyAm:
            "1931: የመጀመሪያው ገለልተኛ ባንክ።\n" +
            "1936: በጣሊያን ወረራ ተዘጋ።",
        },
        {
          id: "n4-3",
          title: "1936–1941: Italian banks",
          titleAm: "1936–1941: የጣሊያን ባንኮች",
          body:
            "Italian banks introduced during occupation:\n" +
            "• Banca d'Italia\n" +
            "• Banco di Roma\n" +
            "• Banco di Napoli\n" +
            "• Banca Nazionale del Lavoro\n\n" +
            "Only Banco di Roma and Banco di Napoli (operating in Asmara) continued after 1941.",
          bodyAm:
            "4 የጣሊያን ባንኮች።\n" +
            "ከ1941 በኋላ 2 ብቻ ቀጠሉ።",
        },
        {
          id: "n4-4",
          title: "1941–1963: State Bank of Ethiopia",
          titleAm: "1941–1963: State Bank of Ethiopia",
          body:
            "• 1941: Barclays Bank (British) — with British troops; withdrew 1943.\n" +
            "• 1943: State Bank of Ethiopia established as the CENTRAL BANK and the principal commercial bank.\n" +
            "• Issued bank notes and coins as agent of Ministry of Finance.\n" +
            "• Marked REBIRTH of independent Ethiopian banking.\n" +
            "• 21 branches including Khartoum (Sudan) and transit office in Djibouti.\n" +
            "• 1963: Split into two banks by Proclamation No. 206/1963.",
          bodyAm:
            "1943: State Bank of Ethiopia (ማዕከላዊ + ንግድ)።\n" +
            "1963: ተከፈለ።",
        },
        {
          id: "n4-5",
          title: "1963–1974: NBE and CBE",
          titleAm: "1963–1974: NBE እና CBE",
          body:
            "• 1963: Proclamation No. 206/1963 split State Bank of Ethiopia into:\n" +
            "   – National Bank of Ethiopia (NBE) — Central Bank.\n" +
            "   – Commercial Bank of Ethiopia (CBE).\n" +
            "• 1980: Addis Bank merged with CBE → CBE becomes sole commercial bank.\n" +
            "• Addis Ababa Bank (40% National & Grindlays) had 26 branches at nationalization.",
          bodyAm:
            "1963: NBE + CBE ተለያዩ።\n" +
            "1980: Addis Bank + CBE ተዋሃዱ።",
        },
        {
          id: "n4-6",
          title: "1974–1991: Socialist period",
          titleAm: "1974–1991: የሶሻሊስት ዘመን",
          body:
            "• 1974: Socialism declared; government nationalized all large corporations.\n" +
            "• 1976: Addis Ababa Bank, Banco di Roma, Banco di Napoli merged → ADIS BANK.\n" +
            "• 1980: Addis Bank + CBE → sole commercial bank (CBE).\n" +
            "• CBE started 1980 with Birr 65 million capital, 128 branches, 3,633 employees.\n" +
            "• Agricultural and Industrial Bank (1970) → renamed AIDB in 1979.\n\n" +
            "THREE banks during 1974–1991:\n" +
            "1) NBE (National Bank of Ethiopia)\n" +
            "2) CBE (Commercial Bank of Ethiopia)\n" +
            "3) AIDB (Agricultural and Industrial Development Bank)",
          bodyAm:
            "3 ባንኮች ብቻ: NBE, CBE, AIDB።\n" +
            "እያንዳንዱ በየክልሉ ሞኖፖሊ ነበረው።",
        },
        {
          id: "n4-7",
          title: "1991–present: Liberal economy",
          titleAm: "1991–አሁን: ሊበራል ኢኮኖሚ",
          body:
            "• 1991: Ethiopia became a LIBERAL economy.\n" +
            "• NBE separated from total government control.\n" +
            "• 1994: Monetary and Banking Proclamation No. 83/1994 — legal basis for private investment in banking.\n" +
            "• Private commercial banks began operating after 1994.",
          bodyAm:
            "1991: ሊበራል።\n" +
            "1994: የግል ባንኮች ተፈቀዱ (Proclamation 83/1994)።",
        },
        {
          id: "n4-8",
          title: "Roles of NBE, CBE, DBE",
          titleAm: "የNBE, CBE, DBE ሚናዎች",
          body:
            "NATIONAL BANK OF ETHIOPIA (NBE):\n" +
            "• Central bank; NOT profit-making.\n" +
            "• Prints currency, mints coins.\n" +
            "• Issues bonds, T-bills, promissory notes.\n" +
            "• Controls money supply, interest rates.\n" +
            "• Authorizes financial institutions.\n" +
            "• Manages international reserves.\n" +
            "• Formulates monetary policy.\n\n" +
            "COMMERCIAL BANK OF ETHIOPIA (CBE):\n" +
            "• Largest commercial bank, profit-making.\n" +
            "• Accepts deposits, gives loans.\n" +
            "• Provides safe custody, sells foreign currency.\n" +
            "• Issues letters of credit (LC), traveler's cheques.\n\n" +
            "DEVELOPMENT BANK OF ETHIOPIA (DBE):\n" +
            "• Provides short, medium, long-term development credits.\n" +
            "• Project-based lending (agriculture, industry).",
          bodyAm:
            "NBE: ማዕከላዊ ባንክ (ትርፍ አያመነጭም)።\n" +
            "CBE: ትልቁ የንግድ ባንክ።\n" +
            "DBE: የልማት ባንክ።",
        },
        {
          id: "n4-9",
          title: "⚠ Remember trap — History",
          titleAm: "⚠ አትርሳ — ታሪክ",
          body:
            "• 1905 = agreement signed; 1906 = Bank of Abyssinia FOUNDED.\n" +
            "• 1931 = Bank of Abyssinia liquidated → Bank of Ethiopia.\n" +
            "• 1943 = State Bank of Ethiopia (rebirth).\n" +
            "• 1963 = NBE and CBE split (Proclamation 206).\n" +
            "• 1994 = Monetary and Banking Proclamation No. 83/1994 (private banking).\n" +
            "• NBE ≠ profit-making; CBE, DBE are profit-oriented.\n" +
            "• CBE became sole commercial bank in 1980.",
          bodyAm:
            "1906: Bank of Abyssinia።\n" +
            "1963: NBE+CBE ተለያዩ።\n" +
            "1994: የግል ባንክ ፈቃድ።",
        },
      ],
    },

    // ============================================================
    // 5.5 MICRO-FINANCE INSTITUTIONS
    // ============================================================
    {
      id: "n5",
      title: "5.5 Micro-finance Institutions",
      titleAm: "5.5 ጥቃቅን ፋይናንስ ተቋማት",
      body:
        "Abatu, MICROFINANCE provides small loans (microcredit) to the poor WITHOUT traditional collateral — using GROUP lending instead.",
      bodyAm:
        "አባቱ፣ ማይክሮፋይናንስ = ያለ ተጨማሪ ዋስትና ጥቃቅን ብድር።",
      children: [
        {
          id: "n5-1",
          title: "History — Muhammad Yunus and Grameen Bank",
          titleAm: "ታሪክ — ሙሐመድ ዩኑስ እና ግራሚን ባንክ",
          body:
            "• State-run banks in many countries tried lending to the poor but failed — inefficiency, corruption, wasted subsidies.\n" +
            "• Muhammad Yunus (Bangladeshi, born 1940) — NOBEL PEACE PRIZE winner.\n" +
            "• Started making SMALL loans to poor villagers with NO collateral.\n" +
            "• Founded GRAMEEN BANK.\n" +
            "• His idea → revolution in poverty reduction.",
          bodyAm:
            "ሙሐመድ ዩኑስ (1940) → ግራሚን ባንክ።\n" +
            "ትንሽ ብድር፣ ያለ ዋስትና።",
        },
        {
          id: "n5-2",
          title: "Microfinance and microcredit",
          titleAm: "ማይክሮፋይናንስና ማይክሮክሬዲት",
          body:
            "MICROFINANCE INSTITUTIONS (MFIs): financial institutions that give access to savings, credit, insurance, money transfer — to people UNSERVED by traditional banks (no collateral).\n\n" +
            "MICROCREDIT: a SMALL credit given by an MFI.\n" +
            "• Often WITHOUT collateral.\n" +
            "• Provided through GROUP LENDING.\n\n" +
            "GROUP LENDING: mechanism where individuals get loans through a group.\n" +
            "• GROUP is the collateral.\n" +
            "• Repayment relies on PEER PRESSURE.\n" +
            "• If one defaults, others must make up the payment.",
          bodyAm:
            "MFI = ጥቃቅን ፋይናንስ ተቋም።\n" +
            "ማይክሮክሬዲት = ትንሽ ብድር።\n" +
            "ቡድን = ዋስትና።\n" +
            "Peer pressure ለክፍያ።",
        },
        {
          id: "n5-3",
          title: "Clients of microfinance",
          titleAm: "የማይክሮፋይናንስ ደንበኞች",
          body:
            "CLIENTS = 'ECONOMICALLY ACTIVE POOR' — low-income persons WITHOUT access to formal financial institutions.\n\n" +
            "Requirements:\n" +
            "• Economic opportunities.\n" +
            "• Entrepreneurial skills.\n" +
            "• Money used for PRODUCTIVE purposes (not consumption).\n\n" +
            "EXCLUDED: the 'poorest of the poor' / 'destitute' — no economic opportunities or skills; targeted by other programs.",
          bodyAm:
            "ደንበኞች = economically active poor።\n" +
            "ገንዘቡ ለምርት ነው (ለፍጆታ አይደለም)።\n" +
            "በጣም ድሆች አይካተቱም።",
        },
        {
          id: "n5-4",
          title: "Microfinance vs moneylenders",
          titleAm: "ማይክሮፋይናንስ vs አራጆች",
          body:
            "INFORMAL MONEYLENDERS:\n" +
            "• Direct competitors of MFIs.\n" +
            "• Charge MUCH HIGHER interest than MFIs.\n" +
            "• Borrowers have NO protection from abusive behavior.\n\n" +
            "Positive features (closeness to the poor):\n" +
            "• Simple procedures.\n" +
            "• Clear terms.\n" +
            "• Timely disbursement.\n" +
            "• Loans backed by borrower's CHARACTER, not group collaterals.\n\n" +
            "MFIs adopted these positive features.",
          bodyAm:
            "አራጆች: ከፍተኛ ወለድ፣ ጥበቃ የለም።\n" +
            "MFIs ጥሩ ባህሪያቸውን ተቀብለዋል።",
        },
        {
          id: "n5-5",
          title: "MFIs in Ethiopia (2020/21)",
          titleAm: "በኢትዮጵያ ያሉ MFIs (2020/21)",
          body:
            "By 2020/21 (Gregorian):\n" +
            "• 41 Microfinance Institutions (MFIs) operating in Ethiopia.\n" +
            "• Total savings mobilized: ~Birr 47 billion.\n" +
            "• Total loans provided: ~Birr 64.6 billion.",
          bodyAm:
            "41 MFIs።\n" +
            "ቁጠባ: ~47 ቢሊዮን ብር።\n" +
            "ብድር: ~64.6 ቢሊዮን ብር።",
        },
        {
          id: "n5-6",
          title: "⚠ Remember trap — Microfinance",
          titleAm: "⚠ አትርሳ — ማይክሮፋይናንስ",
          body:
            "• MFIs target the ECONOMICALLY ACTIVE POOR — NOT the poorest of the poor.\n" +
            "• Group lending is used BECAUSE the poor lack physical collateral.\n" +
            "• Peer pressure is the enforcement mechanism.\n" +
            "• MFI interest is LOWER than moneylender interest.\n" +
            "• Muhammad Yunus founded Grameen Bank (Bangladesh) — Nobel laureate.\n" +
            "• Money from microcredit must be for PRODUCTIVE use, not consumption.",
          bodyAm:
            "• MFI = economically active poor።\n" +
            "• Group lending = ዋስትና ምትክ።\n" +
            "• ዩኑስ = Grameen።",
        },
      ],
    },

    // ============================================================
    // 5.6 ELECTRONIC BANKING
    // ============================================================
    {
      id: "n6",
      title: "5.6 Electronic Banking (E-banking)",
      titleAm: "5.6 ኤሌክትሮኒክ ባንኪንግ",
      body:
        "Abatu, E-BANKING (Electronic Fund Transfer / EFT) refers to the transfer of funds from one account to another through electronic methods.",
      bodyAm:
        "አባቱ፣ ኢ-ባንኪንግ = በኤሌክትሮኒክ ዘዴ የገንዘብ ሽግግር።",
      children: [
        {
          id: "n6-1",
          title: "Three key aspects",
          titleAm: "ሦስቱ ዋና ገጽታዎች",
          body:
            "1) AUTOMATED TELLER MACHINES (ATMs)\n" +
            "2) DIRECT DEPOSITS\n" +
            "3) DEBIT CARD PURCHASES\n\n" +
            "Plus: MOBILE BANKING (transactions on mobile devices).",
          bodyAm:
            "1) ATM\n2) Direct deposit\n3) Debit card\n+ Mobile banking።",
        },
        {
          id: "n6-2",
          title: "ATMs",
          titleAm: "ATM",
          body:
            "• Withdraw cash quickly.\n" +
            "• Transfer funds between accounts.\n" +
            "• Make deposits.\n" +
            "• Pay bills.\n" +
            "• Exchange currencies.\n" +
            "• No teller needed.\n" +
            "• Fees commonly charged for cash withdrawals.",
          bodyAm:
            "ጥሬ ገንዘብ ማውጣት፣ ማስተላለፍ፣ ማስቀመጥ፣ ሂሳብ መክፈል።",
        },
        {
          id: "n6-3",
          title: "Direct deposit",
          titleAm: "ቀጥታ ተቀማጭ",
          body:
            "• Employer deposits salary directly into bank account.\n" +
            "• Tax refunds, investment redemptions, government benefits.\n" +
            "• Uses AUTOMATED CLEARING HOUSE (ACH) network.\n" +
            "• Accounts credited automatically.",
          bodyAm:
            "ደመወዝ በቀጥታ ወደ ሂሳብ።\n" +
            "በACH ኔትወርክ።",
        },
        {
          id: "n6-4",
          title: "Debit card vs credit card",
          titleAm: "ዴቢት vs ክሬዲት ካርድ",
          body:
            "DEBIT CARD:\n" +
            "• Money taken DIRECTLY from your account.\n" +
            "• Can't spend more than you have.\n\n" +
            "CREDIT CARD:\n" +
            "• Essentially BORROWING money from the card company.\n" +
            "• Pay back when monthly statement arrives.\n" +
            "• If not fully paid → INTEREST on remaining portion.",
          bodyAm:
            "ዴቢት: ከሂሳብህ በቀጥታ።\n" +
            "ክሬዲት: ብድር ነው።",
        },
        {
          id: "n6-5",
          title: "Mobile banking",
          titleAm: "ሞባይል ባንኪንግ",
          body:
            "• Making financial transactions on a mobile device.\n" +
            "• ADVANTAGES: bank anywhere, any time.\n" +
            "• DISADVANTAGES: security concerns, limited capabilities compared to in-person or computer banking.",
          bodyAm:
            "በሞባይል ስልክ ግብይት።\n" +
            "ጥቅም: በማንኛውም ቦታ/ጊዜ።\n" +
            "ጉዳት: ደህንነት።",
        },
        {
          id: "n6-6",
          title: "⚠ Remember trap — E-banking",
          titleAm: "⚠ አትርሳ — ኢ-ባንኪንግ",
          body:
            "• Debit card = your own money (direct withdrawal).\n" +
            "• Credit card = borrowed money (pay later with interest).\n" +
            "• Direct deposit uses ACH network.\n" +
            "• Mobile banking = on mobile device.\n" +
            "• E-banking = EFT (Electronic Fund Transfer).",
          bodyAm:
            "ዴቢት = የራስህ ገንዘብ።\n" +
            "ክሬዲት = ብድር።\n" +
            "Direct deposit = ACH።",
        },
      ],
    },

    // ============================================================
    // 5.7 INDIGENOUS FINANCIAL INSTITUTIONS
    // ============================================================
    {
      id: "n7",
      title: "5.7 Indigenous Financial Institutions",
      titleAm: "5.7 ባህላዊ ፋይናንሺያል ተቋማት",
      body:
        "Abatu, Ethiopia has traditional indigenous financial institutions: IQUB (saving club), IDDIR (funeral/social), and SACCOs (savings and credit cooperatives).",
      bodyAm:
        "አባቱ፣ ባህላዊ ተቋማት: እቁብ፣ እድር፣ SACCOs።",
      children: [
        {
          id: "n7-1",
          title: "Iqqub (saving club)",
          titleAm: "እቁብ",
          body:
            "IQQUP: a traditional saving club in Ethiopia.\n\n" +
            "• Members contribute money regularly (weekly, monthly, or daily).\n" +
            "• Amount ranges from 100 birr to 10,000 birr.\n" +
            "• Money circulates among members — each gets their turn.\n" +
            "• Used for: weddings, funerals, sickness, building a house, etc.\n" +
            "• Membership based on PRE-ESTABLISHED SOCIAL TIES (same workplace, same ethnic background, same trade, same school, same neighborhood).\n\n" +
            "Reasons people prefer iqqub:\n" +
            "• Strengthens social ties.\n" +
            "• Forced savings.\n" +
            "• Flexibility and adaptability.\n" +
            "• Low risk of default.\n" +
            "• Low/non-existent administration costs.\n" +
            "• No minimum investment threshold.\n" +
            "• Lottery-like attraction.",
          bodyAm:
            "እቁብ = የቁጠባ ክለብ።\n" +
            "አባላት በየጊዜው ያስቀምጣሉ።\n" +
            "ገንዘቡ በአባላት መካከል ይዞራል።",
        },
        {
          id: "n7-2",
          title: "Iddir (funeral/social institution)",
          titleAm: "እድር",
          body:
            "IDDIR: indigenous financial and SOCIAL institution — exists almost everywhere in Ethiopia.\n\n" +
            "Services:\n" +
            "• Funeral expenses.\n" +
            "• Financial assistance to families of the deceased.\n" +
            "• Medical expenses, losses from fire/theft.\n" +
            "• Entertainment in some cases.\n\n" +
            "Features:\n" +
            "• Monthly contributions.\n" +
            "• Membership mostly based on LOCALITY.\n" +
            "• Has its own BY-LAWS.\n" +
            "• Social ties VERY important — attendance at meetings, funerals, visiting sick.\n" +
            "• Social sanctions and fines enforce bylaws.\n" +
            "• Most funds deposited in bank; small sum kept for emergencies.\n" +
            "• Owns tents, benches, chairs, utensils for use at funerals.",
          bodyAm:
            "እድር = የቀብርና ማህበራዊ ተቋም።\n" +
            "ወርሃዊ መዋጮ።\n" +
            "በአካባቢ ላይ የተመሠረተ።",
        },
        {
          id: "n7-3",
          title: "SACCOs (Savings and Credit Cooperatives)",
          titleAm: "SACCOs",
          body:
            "SACCOs: SEMI-FORMAL financial institutions.\n\n" +
            "• Outside central authority's control (ownership of assets, management).\n" +
            "• Oldest established in LATE 1960s.\n" +
            "• Slow growth until 1978 (political instability after 1974 uprising).\n" +
            "• Fast growth since 1978.\n" +
            "• Potential: financing SHORT-TERM loans for agricultural production technologies and off-farm income-generating activities.",
          bodyAm:
            "SACCOs = ከፊል መደበኛ ተቋማት።\n" +
            "በ1960ዎቹ መጨረሻ ተመሠረቱ።\n" +
            "ከ1978 ጀምሮ ፈጣን እድገት።",
        },
        {
          id: "n7-4",
          title: "⚠ Remember trap — Indigenous",
          titleAm: "⚠ አትርሳ — ባህላዊ",
          body:
            "• IQQUP = saving club (rotating funds).\n" +
            "• IDDIR = funeral/social insurance.\n" +
            "• SACCOs = savings and credit cooperatives (semi-formal).\n" +
            "• Iqqub membership = social ties (workplace, ethnic, neighborhood).\n" +
            "• Iddir membership = LOCALITY.\n" +
            "• Iddir has by-laws and social sanctions.\n" +
            "• SACCOs oldest = 1960s; fast growth since 1978.",
          bodyAm:
            "እቁብ = ቁጠባ።\n" +
            "እድር = ቀብር።\n" +
            "SACCOs = ቁጠባ+ብድር ህብረት።",
        },
      ],
    },

    // ============================================================
    // FORMULA SHEET
    // ============================================================
    {
      id: "nFormula",
      title: "Formula Sheet — Unit 5",
      titleAm: "የቀመር ሉህ — ክፍል 5",
      body:
        "| Concept                       | Definition / Formula                                      |\n" +
        "|-------------------------------|-----------------------------------------------------------|\n" +
        "| Financial intermediary        | Middleman between savers and borrowers                    |\n" +
        "| Financial intermediation      | Transfer from surplus to deficit units                    |\n" +
        "| Money market                  | Instruments with maturity ≤ 1 year                        |\n" +
        "| Capital market                | Instruments with maturity > 1 year                        |\n" +
        "| Depositary institutions       | Banks, credit unions                                      |\n" +
        "| Contractual institutions      | Insurance companies, pension funds                        |\n" +
        "| Investment institutes         | Investment banks, underwriters, brokers                   |\n" +
        "| Microcredit                   | Small loan, often without collateral, via group lending   |\n" +
        "| Group lending                 | Group acts as collateral; peer pressure enforces repayment|\n" +
        "| E-banking (EFT)               | Electronic transfer of funds                              |",
      bodyAm:
        "| ጽንሰ-ሐሳብ              | ትርጉም                          |\n" +
        "|------------------------|--------------------------------|\n" +
        "| ፋይናንሺያል አማላጅ         | በቆጣቢና ተበዳሪ መካከል            |\n" +
        "| Money market           | ≤ 1 ዓመት                       |\n" +
        "| Capital market         | > 1 ዓመት                       |\n" +
        "| MFI                    | ጥቃቅን ብድር ያለ ዋስትና           |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 5",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 5",
      body:
        "1) Bank = financial INTERMEDIARY (not market, not instrument).\n" +
        "2) Money market = ≤ 1 year; capital market = > 1 year.\n" +
        "3) T-bills → money market (NOT capital market).\n" +
        "4) NBE = central bank, NOT profit-making.\n" +
        "5) CBE = largest commercial bank, profit-making.\n" +
        "6) Modern banking in Ethiopia started 1905 (agreement) / 1906 (bank founded).\n" +
        "7) Bank of Abyssinia (1906) → Bank of Ethiopia (1931) → State Bank of Ethiopia (1943) → NBE + CBE (1963).\n" +
        "8) 1994 Monetary and Banking Proclamation No. 83/1994 allowed private banks.\n" +
        "9) MFIs target ECONOMICALLY ACTIVE POOR — NOT the destitute.\n" +
        "10) Group lending uses PEER PRESSURE; group = collateral.\n" +
        "11) Iqqub = saving club; Iddir = funeral/social; SACCO = savings+credit cooperative.\n" +
        "12) Debit card = own money; credit card = borrowed money.",
      bodyAm:
        "1) ባንክ = አማላጅ።\n" +
        "2) Money vs Capital market ልዩነት።\n" +
        "3) NBE = ማዕከላዊ።\n" +
        "4) 1905/1906።\n" +
        "5) MFI = economically active poor።\n" +
        "6) እቁብ vs እድር።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "A financial intermediary is:", options: ["A financial market", "A middleman between two parties in a financial transaction", "A type of tax", "A currency"], answer: "1", explanation: "Financial intermediary = middleman between savers and borrowers." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Financial intermediation involves transfer of funds from:", options: ["Rich to poor countries", "Surplus spending units to deficit spending units", "Banks to government", "One currency to another"], answer: "1", explanation: "From surplus (savers) to deficit (borrowers) units." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Which is an example of a financial intermediary?", options: ["Commercial Bank of Ethiopia", "A market", "A house", "A car"], answer: "0", explanation: "CBE is a financial intermediary." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Money market instruments have maturity of:", options: ["More than 10 years", "One year or less", "More than 1 year", "Exactly 5 years"], answer: "1", explanation: "Money market: ≤ 1 year." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Capital market instruments have maturity of:", options: ["Less than 1 month", "One year or less", "More than one year", "Exactly 1 year"], answer: "2", explanation: "Capital market: > 1 year." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Treasury bills are instruments of:", options: ["Capital market", "Money market", "Labour market", "Real estate market"], answer: "1", explanation: "T-bills (3 weeks to 6 months) → money market." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "A bank is a:", options: ["Financial instrument", "Financial market", "Financial institution", "Non-financial entity"], answer: "2", explanation: "Bank = financial INSTITUTION." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Which is a DEPOSITARY financial institution?", options: ["Insurance company", "Commercial bank", "Investment bank", "Underwriter"], answer: "1", explanation: "Banks accept deposits → depositary institutions." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Insurance companies and pension funds are:", options: ["Depositary institutions", "Contractual institutions", "Investment institutes", "Money markets"], answer: "1", explanation: "Insurance, pension → CONTRACTUAL institutions." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Modern banking in Ethiopia started in:", options: ["1931", "1943", "1905", "1991"], answer: "2", explanation: "1905 = agreement signed; 1906 = Bank of Abyssinia founded." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The first modern bank in Ethiopia was:", options: ["Bank of Ethiopia", "Bank of Abyssinia", "National Bank of Ethiopia", "Commercial Bank of Ethiopia"], answer: "1", explanation: "Bank of Abyssinia (1906) — first modern bank." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "The central bank of Ethiopia is:", options: ["Commercial Bank of Ethiopia", "Development Bank of Ethiopia", "National Bank of Ethiopia", "Bank of Abyssinia"], answer: "2", explanation: "NBE = central bank." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "The National Bank of Ethiopia was established in:", options: ["1943", "1963", "1974", "1991"], answer: "1", explanation: "NBE established 1963 by Proclamation 206/1963." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Microfinance institutions (MFIs) mainly provide:", options: ["Large loans to corporations", "Small loans to the poor", "Government bonds", "Corporate stock"], answer: "1", explanation: "MFIs → small loans to poor without collateral." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Microcredit is often provided through:", options: ["Physical collateral", "Group lending", "Stock exchange", "Government subsidy"], answer: "1", explanation: "Group lending replaces physical collateral." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "E-banking stands for:", options: ["Easy banking", "Electronic banking", "Ethiopian banking", "Emergency banking"], answer: "1", explanation: "E-banking = electronic banking (EFT)." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Iqqub is a traditional Ethiopian:", options: ["Bank", "Saving club", "Insurance company", "Stock exchange"], answer: "1", explanation: "Iqqub = saving club (rotating)." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Iddir is mainly for:", options: ["Saving money", "Funeral and social services", "Stock trading", "Foreign exchange"], answer: "1", explanation: "Iddir = funeral and social services." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "Which is NOT a money market instrument?", options: ["Treasury bills", "Commercial papers", "Common stock", "Certificates of deposit"], answer: "2", explanation: "Common stock → CAPITAL market (equity)." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "Commercial papers have maturity of:", options: ["1 day to 270 days", "Over 10 years", "Exactly 1 year", "Over 1 year"], answer: "0", explanation: "Commercial papers: 1 day to 270 days." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "Certificates of deposit (CDs) are issued by:", options: ["Government only", "Large commercial banks", "Individuals", "Stock exchanges"], answer: "1", explanation: "CDs issued by large commercial banks, 1 month to 1 year." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "Which bank was the FIRST independent bank controlled by Ethiopians?", options: ["Bank of Abyssinia", "Bank of Ethiopia", "State Bank of Ethiopia", "NBE"], answer: "1", explanation: "Bank of Ethiopia (1931) — first under Ethiopian government control." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "The State Bank of Ethiopia was established in:", options: ["1931", "1941", "1943", "1963"], answer: "2", explanation: "1943 = State Bank of Ethiopia established." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "In 1963, the State Bank of Ethiopia was split into:", options: ["CBE and DBE", "NBE and CBE", "NBE and DBE", "CBE and AIDB"], answer: "1", explanation: "1963: NBE (central) + CBE (commercial)." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "The 1994 Monetary and Banking Proclamation:", options: ["Created NBE", "Allowed private banks to operate", "Created the Bank of Abyssinia", "Nationalized banks"], answer: "1", explanation: "Proclamation No. 83/1994 allowed private investment in banking." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "NBE's role does NOT include:", options: ["Printing currency", "Regulating money supply", "Accepting deposits from the public", "Managing international reserves"], answer: "2", explanation: "NBE doesn't accept retail deposits — that's commercial banks." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "CBE is:", options: ["Central bank", "Largest commercial bank in Ethiopia", "Development bank", "Non-bank"], answer: "1", explanation: "CBE = largest commercial bank in Ethiopia." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "DBE mainly provides:", options: ["Consumer loans", "Development credits (short/medium/long)", "Currency exchange only", "Insurance"], answer: "1", explanation: "DBE = Development Bank of Ethiopia, provides development credits." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "MFIs target clients called:", options: ["Destitute", "Economically active poor", "Millionaires", "Government only"], answer: "1", explanation: "MFIs → economically active poor." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "Group lending relies on:", options: ["Physical collateral", "Peer pressure", "Government guarantees", "High interest"], answer: "1", explanation: "Group lending uses PEER PRESSURE." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Who founded Grameen Bank?", options: ["Adam Smith", "Muhammad Yunus", "John Keynes", "Simon Kuznets"], answer: "1", explanation: "Muhammad Yunus founded Grameen Bank." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "Direct deposit uses the:", options: ["ATM network", "ACH network", "SWIFT network", "POS network"], answer: "1", explanation: "Direct deposit uses the Automated Clearing House (ACH) network." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "A debit card purchase is different from credit card because:", options: ["You borrow money", "Money is taken directly from your account", "You pay interest immediately", "It's only for businesses"], answer: "1", explanation: "Debit = money from your account; credit = borrowed." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Iqqub membership is based on:", options: ["Locality", "Social ties (work, ethnic, school, neighborhood)", "Government permit", "Bank account"], answer: "1", explanation: "Iqqub = social ties." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Iddir membership is mostly based on:", options: ["Locality", "Ethnicity", "Occupation", "Income"], answer: "0", explanation: "Iddir = mostly LOCALITY-based." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "If X > M, the country has:", options: ["Trade deficit", "Trade surplus", "Balanced trade", "No trade"], answer: "1", explanation: "Exports > Imports → trade SURPLUS." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Which statement is TRUE?", options: ["T-bills are capital market instruments", "Commercial papers are money market instruments", "Common stock is money market", "Bonds with >10 years are money market"], answer: "1", explanation: "Commercial papers → money market (1 day to 270 days)." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "NBE is NOT profit-making because:", options: ["It has no capital", "Its goal is to control the financial sector and bring price stability", "It is privately owned", "It doesn't lend"], answer: "1", explanation: "NBE's goal is regulation, not profit." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "In 2020/21, the number of MFIs in Ethiopia was:", options: ["14", "24", "41", "64"], answer: "2", explanation: "41 MFIs operating in Ethiopia." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "The 'poorest of the poor' are typically EXCLUDED from microfinance because:", options: ["They are too rich", "They lack economic opportunities or entrepreneurial skills", "They live in cities", "They refuse to work"], answer: "1", explanation: "No economic opportunities or skills → not target of MFIs." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Banco di Roma and Banco di Napoli were Italian banks that continued after 1941 because:", options: ["They were Ethiopian", "They operated in Asmara", "They had government backing", "They moved to Addis Ababa"], answer: "1", explanation: "They operated in Asmara." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "Addis Bank merged with CBE in:", options: ["1963", "1974", "1980", "1994"], answer: "2", explanation: "1980: Addis Bank + CBE → sole commercial bank." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "The advantage of MFIs over moneylenders is that MFIs:", options: ["Charge higher interest", "Offer no protection", "Charge lower interest and offer protection", "Don't require any repayment"], answer: "2", explanation: "MFIs: lower interest + protection; moneylenders: higher interest + no protection." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Define financial intermediary and financial intermediation.", answer: "FINANCIAL INTERMEDIARY: an entity that acts as the middleman between two parties in a financial transaction (e.g., Commercial Bank of Ethiopia).\n\nFINANCIAL INTERMEDIATION: the transfer of funds from SURPLUS spending units (savers) to DEFICIT spending units (borrowers) through financial intermediaries.", explanation: "Middleman; surplus→deficit transfer." },
    { id: "q45", type: "short", difficulty: "easy", stem: "Distinguish between money market and capital market.", answer: "MONEY MARKET:\n• Instruments with maturity ≤ 1 year.\n• Examples: T-bills, commercial papers, CDs, repos, bankers' acceptances.\n• Short-term.\n\nCAPITAL MARKET:\n• Instruments with maturity > 1 year (plus perpetual securities).\n• Examples: equity (common/preferred stock), debt obligations (bank loans, notes ≤10 yrs, bonds >10 yrs).\n• Long-term.", explanation: "Money ≤ 1 yr; Capital > 1 yr." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Explain the main roles of the National Bank of Ethiopia (NBE).", answer: "NBE's roles:\n1) Prints currency and mints coins.\n2) Issues bonds, T-bills, promissory notes.\n3) Maintains low inflation.\n4) Authorizes and controls financial institutions.\n5) Deposits government money and provides direct advances.\n6) Lends money to commercial banks.\n7) Regulates money supply, interest rates.\n8) Formulates monetary policy.\n9) Manages international reserves.\n10) Regulates foreign exchange.\n\nNBE is NOT profit-making — it regulates.", explanation: "Central bank: regulator, NOT profit-making." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Explain microfinance and how group lending works.", answer: "MICROFINANCE INSTITUTIONS (MFIs): financial institutions that provide savings, credit, insurance, and money transfer to people who otherwise wouldn't be served by traditional banks.\n\nGROUP LENDING:\n• A group of individuals jointly obtains a loan.\n• The GROUP acts as COLLATERAL.\n• Repayment relies on PEER PRESSURE.\n• If one member defaults, other members must make up the payment.\n• Effective when social ties are strong.", explanation: "MFI = financial services to poor; group lending = peer pressure collateral." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Distinguish between Iqqub and Iddir.", answer: "IQQUP (SAVING CLUB):\n• Members contribute money regularly.\n• Money circulates among members until each gets their turn.\n• Membership based on social ties (workplace, ethnic, school, neighborhood).\n• Used for weddings, funerals, business, building houses.\n\nIDDIR (FUNERAL/SOCIAL INSTITUTION):\n• Monthly contributions.\n• Provides financial assistance for funerals, medical expenses, fire/theft losses.\n• Membership mostly based on LOCALITY.\n• Has by-laws and social sanctions.", explanation: "Iqqub = rotating savings; Iddir = funeral/social insurance." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Describe the historical development of banking in Ethiopia (1905–1994).", answer: "1905: Agreement between Emperor Menelik II and Anglo-Egyptian National Bank.\n1906: Bank of Abyssinia founded (first modern bank, foreign-managed).\n1931: Bank of Abyssinia liquidated → Bank of Ethiopia (first independent bank under Ethiopian government).\n1936–41: Italian banks (Banca d'Italia, Banco di Roma, Banco di Napoli, Banca Nazionale del Lavoro) during occupation.\n1941: Barclays Bank (British).\n1943: State Bank of Ethiopia (central + commercial, rebirth of independent banking).\n1963: Proclamation 206/1963 split State Bank into NBE and CBE.\n1974: Socialist government nationalized banks.\n1980: Addis Bank + CBE → single commercial bank.\n1991: Liberal economy returns.\n1994: Monetary and Banking Proclamation No. 83/1994 allowed private banks.", explanation: "1906 → 1931 → 1943 → 1963 → 1994 milestones." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Explain the three key aspects of e-banking and the difference between debit and credit cards.", answer: "THREE KEY ASPECTS OF E-BANKING:\n1) ATMs: withdraw cash, transfer funds, make deposits, pay bills.\n2) Direct deposits: employer deposits salary directly into account (uses ACH network).\n3) Debit card purchases: money taken directly from account.\n\nPlus: Mobile banking — financial transactions on mobile device.\n\nDEBIT vs CREDIT:\n• DEBIT card: money taken DIRECTLY from your account; can't spend more than you have.\n• CREDIT card: BORROWING money from card company; pay back monthly; interest on unpaid balance.", explanation: "ATM, direct deposit, debit card; debit = own money, credit = borrowed." },
  ],
};