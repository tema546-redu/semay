import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 CITIZENSHIP (CIVICS) — UNIT 2
// STATE AND GOVERNMENT
// Source: AAEB Grade 8 Citizenship Education Student Textbook (pp. 44–85)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8CivicsCh2: Chapter = {
  id: "ch2",
  number: 2,
  title: "State and Government",
  titleAm: "መንግሥትና አስተዳደር",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. State Structures — The Big Picture",
      titleAm: "1. የመንግሥት አወቃቀሮች — አጠቃላይ እይታ",
      body:
        "Banchi, a STATE STRUCTURE is the way power is distributed among the parts of a state. It answers: is power held centrally (unitary) or shared with lower units (federal)? There are THREE types of state structures in the world: UNITARY, FEDERAL, and CONFEDERAL.",
      bodyAm:
        "ባንቺ፣ የመንግሥት አወቃቀር ማለት ሥልጣን በመንግሥት ክፍሎች መካከል እንዴት እንደሚከፋፈል ነው። በዓለም ላይ ሦስት ዓይነት አወቃቀሮች አሉ፡ ማእከላዊ፣ ፌዴራላዊና ኮንፌዴራላዊ።",
      children: [
        {
          id: "n1-1",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: NO state structure is inherently democratic or undemocratic. Being federal ≠ democratic. Being unitary ≠ undemocratic. Democratization depends on the COMMITMENT of the government, not the structure itself.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ምንም አወቃቀር በተፈጥሮ ዲሞክራሲያዊ ወይም ዲሞክራሲያዊ ያልሆነ አይደለም።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Unitary State Structure",
      titleAm: "2. ማእከላዊ የመንግሥት አወቃቀር",
      body:
        "Banchi, a UNITARY STATE is a state structure where all executive, legislative, and judicial powers are concentrated at the CENTER. It may separate powers horizontally (executive, legislative, judicial) but NOT vertically (center vs subunits).",
      bodyAm:
        "ባንቺ፣ ማእከላዊ መንግሥት ሁሉም ሥልጣኖች በማዕከል የተከማቹበት ነው።",
      children: [
        {
          id: "n2-1",
          title: "Features of Unitary State",
          titleAm: "የማእከላዊ መንግሥት ባህሪያት",
          body:
            "• Sovereignty lies EXCLUSIVELY within the central state.\n" +
            "• Legislative bodies of sub-units are SUBORDINATE to the center.\n" +
            "• Territorial sub-units are subordinated to the center and CANNOT work autonomously.\n" +
            "• The center is LEGALLY SUPREME over regional/local territories with UNRESTRICTED power.",
          bodyAm:
            "• ሉዓላዊነት ሙሉ በሙሉ በማዕከል ነው።\n• የክፍለ-መንግሥታት የሕግ አውጪ አካላት ለማዕከሉ ተገዢ ናቸው።\n• የግዛት ክፍሎች ራሳቸውን ችለው ማሠራት አይችሉም።",
        },
        {
          id: "n2-2",
          title: "Advantages of Unitary State",
          titleAm: "የማእከላዊ መንግሥት ጥቅሞች",
          body:
            "• Provides UNIFORMITY of administration.\n" +
            "• Equal access to public services.\n" +
            "• AVOIDS conflict of authority (between center and subunits).",
          bodyAm:
            "• አንድ ዓይነት አስተዳደር ይሰጣል።\n• እኩል የህዝብ አገልግሎት ያረጋግጣል።\n• የሥልጣን ግጭትን ያስወግዳል።",
        },
        {
          id: "n2-3",
          title: "Disadvantages of Unitary State",
          titleAm: "የማእከላዊ መንግሥት ጉዳቶች",
          body:
            "• CONCENTRATION of power.\n" +
            "• MISUSE of power.\n" +
            "• NON-RECOGNITION of local diversities.",
          bodyAm:
            "• ሥልጣን መከማቸት።\n• ሥልጣን አላግባብ መጠቀም።\n• የአካባቢ ብዝሃነትን አለማወቅ።",
        },
        {
          id: "n2-4",
          title: "Examples of Unitary States",
          titleAm: "የማእከላዊ መንግሥታት ምሳሌዎች",
          body:
            "China, Sri Lanka, United Kingdom, France, Finland, Italy, Kenya, South Africa, Djibouti. These countries often have HOMOGENEOUS societies that prefer centralized power.",
          bodyAm:
            "ቻይና፣ ስሪላንካ፣ ዩናይትድ ኪንግደም፣ ፈረንሳይ፣ ኬንያ፣ ደቡብ አፍሪካ፣ ጅቡቲ።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: In a unitary state, the center may DELEGATE power, but delegation is NOT based on law — it depends on the WILL of the central state. It can be taken back at any time.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ በማእከላዊ መንግሥት ሥልጣን ማስተላለፍ በሕግ ላይ የተመሠረተ አይደለም — በማዕከሉ ፈቃድ ላይ ነው።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Federal State Structure",
      titleAm: "3. ፌዴራላዊ የመንግሥት አወቃቀር",
      body:
        "Banchi, FEDERALISM is a state structure with at least TWO levels of government: the CENTRAL (federal) level and LOWER (regional/state) levels. Ethiopia, USA, Canada, Australia, Brazil, Nigeria, and Switzerland are federal.",
      bodyAm:
        "ባንቺ፣ ፌዴራሊዝም ቢያንስ ሁለት ደረጃ መንግሥት ያለው አወቃቀር ነው፡ ማዕከላዊና ክልላዊ።",
      children: [
        {
          id: "n3-1",
          title: "Key Features of Federalism",
          titleAm: "የፌዴራሊዝም ቁልፍ ባህሪያት",
          body:
            "• At least TWO levels of government: federal + regional.\n" +
            "• Power is SHARED between the levels — not monopolized.\n" +
            "• Written CONSTITUTION is required.\n" +
            "• The federal government handles nationwide matters: DEFENSE, foreign policy, citizenship, currency, macroeconomic policy, national infrastructure.\n" +
            "• Regional governments handle local matters: education, health, local police, state laws.",
          bodyAm:
            "• ቢያንስ ሁለት ደረጃ መንግሥት።\n• ሥልጣን ይከፋፈላል።\n• የጽሑፍ ሕገ-መንግሥት ያስፈልጋል።\n• ፌዴራል — መከላከያ፣ የውጭ ጉዳይ፣ ዜግነት።\n• ክልል — ትምህርት፣ ጤና፣ የአካባቢ ፖሊስ።",
        },
        {
          id: "n3-2",
          title: "FDRE Constitution Articles 51 & 52",
          titleAm: "የፌዴራል ሕገ-መንግሥት አንቀጽ 51 እና 52",
          body:
            "Banchi, Article 51 lists the FEDERAL government's powers: currency, international relations, citizenship, national defense, trans-boundary infrastructure.\n\n" +
            "Article 52 lists REGIONAL powers: 'all powers NOT expressly delegated to the Federal Government alone, or concurrently, are reserved to the States.'",
          bodyAm:
            "አንቀጽ 51 የፌዴራል መንግሥት ሥልጣኖችን ይዘረዝራል። አንቀጽ 52 የክልሎችን ሥልጣኖች ይዘረዝራል።",
        },
        {
          id: "n3-3",
          title: "Advantages of Federalism",
          titleAm: "የፌዴራሊዝም ጥቅሞች",
          body:
            "1) Handles ineffective administration and complex socioeconomic/political conditions.\n" +
            "2) Matches increased population and territorial size.\n" +
            "3) Accommodates DIVERSITY — ethnic, religious, linguistic differences.\n" +
            "4) Ensures minorities' SELF-GOVERNMENT.",
          bodyAm:
            "1) ውስብስብ ሁኔታዎችን ያስተዳድራል።\n2) ለሰፊ ግዛትና ህዝብ ተስማሚ ነው።\n3) ብዝሃነትን ያስተናግዳል።\n4) የአናሳዎችን ራስን ማስተዳደር ያረጋግጣል።",
        },
        {
          id: "n3-4",
          title: "Disadvantages of Federalism",
          titleAm: "የፌዴራሊዝም ጉዳቶች",
          body:
            "• Deficiency of authority over constituent states and individual citizens.\n" +
            "• Unfit for a state WITHOUT geographic continuity.\n" +
            "• CONFUSION and CONFLICT of laws.\n" +
            "• EXPENSES and DELAYS due to duplicated legislation and administration.\n" +
            "• Affects central power on subjects needing UNIFORM legislation.",
          bodyAm:
            "• በክፍለ-መንግሥታትና በዜጎች ላይ ሥልጣን ማነስ።\n• የግዛት ቀጣይነት ለሌለው መንግሥት አይስማማም።\n• የሕግ ግርግርና ግጭት።\n• የተደጋገሙ ወጪዎችና መዘግየቶች።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: Federalism is NOT a panacea (magic cure). It accommodates diversity but also creates conflicts and duplication. Also: EXCEPT for China, most large countries are federal.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ፌዴራሊዝም ፍጹም መፍትሔ አይደለም። ከቻይና በስተቀር አብዛኞቹ ትላልቅ አገሮች ፌዴራላዊ ናቸው።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Confederation (Confederal Arrangement)",
      titleAm: "4. ኮንፌዴራሽን",
      body:
        "Banchi, a CONFEDERATION is formed when a group of people or nations form an ALLIANCE. Each member retains its SOVEREIGNTY. The central organ is WEAK and depends entirely on what the state units are willing to delegate.",
      bodyAm:
        "ባንቺ፣ ኮንፌዴራሽን የሚፈጠረው ሕዝቦች ወይም ብሔሮች ጥምረት ሲፈጥሩ ነው። እያንዳንዱ አባል ሉዓላዊነቱን ይይዛል።",
      children: [
        {
          id: "n4-1",
          title: "Key Features of Confederation",
          titleAm: "የኮንፌዴራሽን ቁልፍ ባህሪያት",
          body:
            "• Component states RETAIN their sovereignty.\n" +
            "• Central organ is WEAK and depends on member states' willingness.\n" +
            "• Members can CHOOSE whether to follow the central government.\n" +
            "• Arrangement is LOOSE.",
          bodyAm:
            "• አባል መንግሥታት ሉዓላዊነታቸውን ይይዛሉ።\n• ማዕከላዊ አካሉ ደካማ ነው።\n• አባላት መከተል ወይም አለመከተል ይመርጣሉ።",
        },
        {
          id: "n4-2",
          title: "Modern Example",
          titleAm: "ዘመናዊ ምሳሌ",
          body:
            "The EUROPEAN UNION (EU) is the best modern example. A confederation exists today as a form of commonwealth association — not as a full state.",
          bodyAm:
            "የአውሮፓ ህብረት (EU) ምርጥ ዘመናዊ ምሳሌ ነው።",
        },
        {
          id: "n4-3",
          title: "Main Goals of Confederation",
          titleAm: "የኮንፌዴራሽን ዋና ዓላማዎች",
          body:
            "• Common defense\n" +
            "• Common postal services and communication\n" +
            "• Common commercial practices\n" +
            "• Cultural unity measures",
          bodyAm:
            "• የጋራ መከላከያ\n• የጋራ ፖስታና ተግባቦት\n• የጋራ የንግድ ልማዶች\n• የባህል አንድነት እርምጃዎች",
        },
        {
          id: "n4-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: A confederation is DIFFERENT from a federation. In a FEDERATION, the central government has real power. In a CONFEDERATION, the central body is WEAK and members keep their sovereignty.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ኮንፌዴራሽን ከፌዴሬሽን ይለያል። በፌዴሬሽን ማዕከሉ ጠንካራ ነው፤ በኮንፌዴራሽን ደካማ ነው።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Systems of Government",
      titleAm: "5. የመንግሥት ሥርዓቶች",
      body:
        "Banchi, the SYSTEM OF GOVERNMENT describes the relationship between the EXECUTIVE and LEGISLATIVE branches. There are TWO types: PARLIAMENTARY and PRESIDENTIAL.",
      bodyAm:
        "ባንቺ፣ የመንግሥት ሥርዓት በሥራ አስፈጻሚውና በሕግ አውጪው መካከል ያለውን ግንኙነት ይገልጻል። ሁለት ዓይነት ናቸው፡ ፓርላማዊና ፕሬዚዳንታዊ።",
      children: [
        {
          id: "n5-1",
          title: "Parliamentary System",
          titleAm: "ፓርላማዊ ሥርዓት",
          body:
            "• Executive bodies are DISTINCT from and ACCOUNTABLE to the legislature.\n" +
            "• Party with most seats in parliament forms the government.\n" +
            "• The PRIME MINISTER is chosen from parliament — s/he is the REAL executive.\n" +
            "• Head of STATE is a NOMINAL (ceremonial) figure — monarch or president.\n" +
            "• Origin: United Kingdom.\n" +
            "• Examples: Ethiopia, UK, India, Germany, Japan, Canada, Italy, South Africa.",
          bodyAm:
            "• ሥራ አስፈጻሚው ለሕግ አውጪው ተጠያቂ ነው።\n• ብዙ ወንበር ያለው ፓርቲ መንግሥት ይመሠርታል።\n• ጠቅላይ ሚኒስትር ከፓርላማ ይመረጣል።\n• ርዕሰ መንግሥት ሥርዓታዊ ብቻ ነው።\n• መነሻው ዩናይትድ ኪንግደም ነው።",
        },
        {
          id: "n5-2",
          title: "Features of Parliamentary System",
          titleAm: "የፓርላማዊ ሥርዓት ባህሪያት",
          body:
            "A) Leadership of Prime Minister — real executive authority.\n" +
            "B) Nominal head of state — ceremonial role (President/King).\n" +
            "C) Political homogeneity — leader of majority party.\n" +
            "D) Collective responsibility — PM and ministers are jointly accountable.\n" +
            "E) Fusion of power — legislative and executive powers combined.",
          bodyAm:
            "A) የጠቅላይ ሚኒስትር አመራር።\nB) ሥርዓታዊ ርዕሰ መንግሥት።\nC) የፖለቲካ አንድነት።\nD) የጋራ ኃላፊነት።\nE) የሥልጣን ውህደት።",
        },
        {
          id: "n5-3",
          title: "Presidential System",
          titleAm: "ፕሬዚዳንታዊ ሥርዓት",
          body:
            "• President is BOTH head of state AND head of government.\n" +
            "• President and legislature are SEPARATELY elected by the people.\n" +
            "• SEPARATION of powers between executive and legislative.\n" +
            "• President is NOT accountable to the legislature.\n" +
            "• Examples: USA, France, Brazil, Argentina, Mexico, Kenya.",
          bodyAm:
            "• ፕሬዚዳንቱ የርዕሰ መንግሥትም የመንግሥት ርዕስም ናቸው።\n• ፕሬዚዳንቱና ሕግ አውጪው ለብቻቸው ይመረጣሉ።\n• የሥልጣን መለያየት አለ።\n• ፕሬዚዳንቱ ለሕግ አውጪው ተጠያቂ አይደሉም።",
        },
        {
          id: "n5-4",
          title: "Features of Presidential System",
          titleAm: "የፕሬዚዳንታዊ ሥርዓት ባህሪያት",
          body:
            "A) Superior position of president — all executive power concentrated.\n" +
            "B) Separation of powers — three branches separate.\n" +
            "C) Impeachment — legislature can remove president for serious violations.\n" +
            "D) Fixed term — e.g., USA president: 4 years, max 2 terms.",
          bodyAm:
            "A) የፕሬዚዳንቱ ከፍተኛ ደረጃ።\nB) የሥልጣን መለያየት።\nC) ክስ ማቅረብ።\nD) ቋሚ የሥልጣን ጊዜ (የአሜሪካ ፕሬዚዳንት 4 ዓመት፣ ቢበዛ 2 ጊዜ)።",
        },
        {
          id: "n5-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: In PARLIAMENTARY — the executive is FUSED with the legislature. In PRESIDENTIAL — the executive is SEPARATE from the legislature. Also: Ethiopia has a PARLIAMENTARY system (PM is real power; President is ceremonial).",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ፓርላማዊ = ውህደት፤ ፕሬዚዳንታዊ = መለያየት። ኢትዮጵያ ፓርላማዊ ሥርዓት አላት።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. State vs Government — Relationship and Difference",
      titleAm: "6. መንግሥትና አስተዳደር — ግንኙነትና ልዩነት",
      body:
        "Banchi, STATE and GOVERNMENT are often used interchangeably but they are DIFFERENT. The Montevideo Convention (1933) defines a state as having FOUR components: POPULATION, TERRITORY, GOVERNMENT, and SOVEREIGNTY.",
      bodyAm:
        "ባንቺ፣ መንግሥትና አስተዳደር ብዙ ጊዜ በተመሳሳይ ይጠቀሳሉ፣ ግን ይለያያሉ። የሞንቴቪዲዮ ስምምነት መንግሥት አራት አካላት አሉት ይላል፡ ሕዝብ፣ ግዛት፣ አስተዳደር፣ ሉዓላዊነት።",
      children: [
        {
          id: "n6-1",
          title: "Relationship — State and Government",
          titleAm: "ግንኙነት — መንግሥትና አስተዳደር",
          body:
            "• Without government, state CANNOT exist.\n" +
            "• Government is ONE of the four components of the state.\n" +
            "• Government is the MOST IMPORTANT element — the state expresses its will through government.\n" +
            "• Government is called 'the brain of the state.'\n" +
            "• State provides legitimacy to the government; government makes state reality.",
          bodyAm:
            "• ያለ አስተዳደር መንግሥት ሊኖር አይችልም።\n• አስተዳደር ከአራቱ አካላት አንዱ ነው።\n• አስተዳደር የመንግሥት 'አንጎል' ይባላል።",
        },
        {
          id: "n6-2",
          title: "Differences — State vs Government",
          titleAm: "ልዩነቶች — መንግሥትና አስተዳደር",
          body:
            "A) STATE is WIDER than government (state has 4 elements; government is 1).\n" +
            "B) STATE is ABSTRACT; government is CONCRETE (specific people/institutions).\n" +
            "C) STATE is EXTRINSIC to humans; GOVERNMENT is INTRINSIC (every human society has some form of governance).\n" +
            "D) STATE REPRESENTS power; GOVERNMENT MATERIALIZES it.\n" +
            "E) STATE is almost PERMANENT; government is TEMPORARY (changes with elections).",
          bodyAm:
            "A) መንግሥት ሰፊ ነው፤ አስተዳደር ጠባብ ነው።\nB) መንግሥት ረቂቅ ነው፤ አስተዳደር ተጨባጭ ነው።\nC) መንግሥት ውጫዊ ነው፤ አስተዳደር ውስጣዊ ነው።\nD) መንግሥት ሥልጣንን ይወክላል፤ አስተዳደር ተግባራዊ ያደርጋል።\nE) መንግሥት ቋሚ ነው፤ አስተዳደር ጊዜያዊ ነው።",
        },
        {
          id: "n6-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: Ethiopia has EXISTED for thousands of years (state is PERMANENT), but governments have changed many times (imperial → Derg → EPRDF → current). The STATE remains; GOVERNMENTS come and go.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ኢትዮጵያ ሺህ ዓመታት ኖራለች (መንግሥት ቋሚ ነው)፣ ግን አስተዳደሮች ብዙ ጊዜ ተቀይረዋል (ኢምፔሪያል → ደርግ → ኢ.ፕ.ዲ.ኤፍ → አሁን)።",
        },
      ],
    },

    {
      id: "n7",
      title: "7. Forms of Government in Ethiopia",
      titleAm: "7. በኢትዮጵያ የነበሩ የመንግሥት ዓይነቶች",
      body:
        "Banchi, Ethiopia is one of the oldest states in the world. It has been ruled by THREE major forms of government. Memorize each one's key features.",
      bodyAm:
        "ባንቺ፣ ኢትዮጵያ ከዓለማችን ጥንታዊ መንግሥታት አንዷ ናት። ሦስት ዋና የመንግሥት ዓይነቶች አሏት።",
      children: [
        {
          id: "n7-1",
          title: "A) Monarchical Regime (until 1974)",
          titleAm: "ሀ) የንጉሠ-ነገሥት ዘመን (እስከ 1974)",
          body:
            "• Monarchical, ABSOLUTIST, and CENTRALIZED.\n" +
            "• Power passed to DESCENDANTS of the emperor.\n" +
            "• 1931 Constitution Article 4: 'The throne... shall be transmitted to descendents.'\n" +
            "• Sovereign power vested in the EMPEROR.\n" +
            "• Emperor was law-maker, law-enforcer, and partly adjudicator.\n" +
            "• Unitary state structure.\n" +
            "• Two chambers existed (Senate + Chamber of Deputies) but the emperor CONTROLLED law-making.",
          bodyAm:
            "• ፍጹም ሥልጣን ያለው ንጉሠ-ነገሥት።\n• ሥልጣን ለዘሮች ይተላለፍ ነበር።\n• የ1931 ሕገ-መንግሥት አንቀጽ 4።\n• ማእከላዊ አወቃቀር።",
        },
        {
          id: "n7-2",
          title: "B) Military Regime (Derg, 1974–1991)",
          titleAm: "ለ) ደርግ (1974–1991)",
          body:
            "'Derg' is Arabic for COMMITTEE. Features:\n" +
            "• Military and DICTATORIAL.\n" +
            "• UNITARY state structure.\n" +
            "• Replaced feudalism with SOCIALISM and monarchy with PRESIDENTIAL system.\n" +
            "• ENDED ancestral power succession.\n" +
            "• Working class became sovereign — unicameral parliament called 'National Shengo.'\n" +
            "• President was head of state AND commander-in-chief.",
          bodyAm:
            "'ደርግ' በዐረብኛ 'ኮሚቴ' ማለት ነው።\n• ወታደራዊና ገዢ።\n• ማእከላዊ አወቃቀር።\n• ፊውዳሊዝምን በሶሻሊዝም ተካ።\n• የዘር ሥልጣን ሽግግር አቆመ።",
        },
        {
          id: "n7-3",
          title: "C) Post-1991 Republican Government",
          titleAm: "ሐ) ከ1991 በኋላ ሪፐብሊካናዊ መንግሥት",
          body:
            "• Derg was deposed in MAY 1991.\n" +
            "• Ethiopia became a REPUBLIC with a PARLIAMENTARY system.\n" +
            "• REPUBLIC = state ruled by citizens' REPRESENTATIVES.\n" +
            "• Free, fair, and periodic elections.\n" +
            "• Adopted FEDERAL state structure.\n" +
            "• 1995 FDRE Constitution.\n" +
            "• Complaints: one-party dominance, election rigging, corruption.",
          bodyAm:
            "• ደርግ በግንቦት 1991 ተገለበጠ።\n• ኢትዮጵያ ሪፐብሊክ ሆነች።\n• የፓርላማ ሥርዓት።\n• ፌዴራላዊ አወቃቀር ተቀበለች።\n• የ1995 ሕገ-መንግሥት።",
        },
        {
          id: "n7-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: The Derg DID NOT introduce federalism. It ADOPTED a UNITARY state structure. Federalism came AFTER 1991 with the EPRDF-led government.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ደርግ ፌዴራሊዝምን አላስተዋወቀም። ማእከላዊ አወቃቀር ተጠቀመ። ፌዴራሊዝም ከ1991 በኋላ መጣ።",
        },
      ],
    },

    {
      id: "n8",
      title: "8. Strengths and Limitations of Each Ethiopian Government",
      titleAm: "8. የእያንዳንዱ የኢትዮጵያ መንግሥት ጥንካሬና ጉድለት",
      body:
        "Banchi, every government in Ethiopia has BOTH strengths AND limitations. Examiners love asking you to compare them.",
      bodyAm:
        "ባንቺ፣ በኢትዮጵያ ያለው እያንዳንዱ መንግሥት ጥንካሬና ጉድለት አለው።",
      children: [
        {
          id: "n8-1",
          title: "Monarchical System",
          titleAm: "የንጉሠ-ነገሥት ሥርዓት",
          body:
            "STRENGTHS:\n" +
            "• State formation and nation building.\n" +
            "• Modernization and ministerial system.\n" +
            "• Sovereignty and national unity (Adwa victory 1896).\n" +
            "• Diplomatic successes (AU headquarters in Addis Ababa).\n" +
            "• 1931 written constitution foundation.\n\n" +
            "LIMITATIONS:\n" +
            "• Ignored diversity of peoples.\n" +
            "• Ancestral power transfer.\n" +
            "• State religion.\n" +
            "• Absence of a party system.",
          bodyAm:
            "ጥንካሬ፡ መንግሥት መመሥረት፣ ዘመናዊነት፣ የአድዋ ድል፣ ዲፕሎማሲያዊ ስኬቶች።\nጉድለት፡ ብዝሃነትን አለማወቅ፣ የዘር ሥልጣን ሽግግር፣ የመንግሥት ሃይማኖት።",
        },
        {
          id: "n8-2",
          title: "Military Regime (Derg)",
          titleAm: "ደርግ",
          body:
            "STRENGTHS:\n" +
            "• Sovereignty and national unity ('Ethiopia First').\n" +
            "• Land redistribution to tillers.\n" +
            "• Literacy campaigns.\n" +
            "• 'Equality of cultures'.\n" +
            "• Secularism (separation of state and religion).\n\n" +
            "LIMITATIONS:\n" +
            "• Gross human rights violations ('Red Terror').\n" +
            "• Interstate and intrastate wars.\n" +
            "• Mono-party system (anti-democratic).",
          bodyAm:
            "ጥንካሬ፡ ሉዓላዊነት፣ መሬት ማከፋፈል፣ የመረጃ ዘመቻ፣ ሴኩላሪዝም።\nጉድለት፡ የሰብዓዊ መብት ጥሰት፣ ጦርነቶች፣ አንድ ፓርቲ ሥርዓት።",
        },
        {
          id: "n8-3",
          title: "Post-1991 Government (EPRDF-led)",
          titleAm: "ከ1991 በኋላ ያለው መንግሥት",
          body:
            "STRENGTHS:\n" +
            "• Right to self-determination (language, culture).\n" +
            "• Political representation for ethnic groups.\n" +
            "• Infrastructure development (roads, railways, airports).\n" +
            "• Secularism.\n\n" +
            "LIMITATIONS:\n" +
            "• Implementation problems of federalism.\n" +
            "• Heightened extremism, conflicts, displacements.\n" +
            "• Not genuine in implementation of diversity rights.",
          bodyAm:
            "ጥንካሬ፡ ራስን በራስ የማስተዳደር መብት፣ የፖለቲካ ውክልና፣ የመሠረተ ልማት ግንባታ፣ ሴኩላሪዝም።\nጉድለት፡ የፌዴራሊዝም ትግበራ ችግር፣ ጽንፈኝነት፣ ግጭቶች፣ መፈናቀል።",
        },
        {
          id: "n8-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: A common exam question pairs each government with its STRENGTH. Memorize: MONARCHY = state formation + Adwa. DERG = land redistribution + literacy + secularism. POST-1991 = self-determination + federalism + infrastructure.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ንጉሠ-ነገሥት = መንግሥት መመሥረት + አድዋ። ደርግ = መሬት ማከፋፈል + መረጃ + ሴኩላሪዝም። ከ1991 በኋላ = ራስን በራስ ማስተዳደር + ፌዴራሊዝም + መሠረተ ልማት።",
        },
      ],
    },
  ],

  // ============================================================
  // QUESTIONS — Q1 to Q120
  // ============================================================
  questions: [
    // ---------- EASY MCQ (Q1–Q25) ----------
    {
      id: "q1",
      type: "mcq",
      difficulty: "easy",
      stem: "What does 'state structure' refer to?",
      options: [
        "The size of a country's army",
        "The distribution of power among the parts of a state",
        "The number of political parties",
        "The wealth of a nation",
      ],
      answer: "1",
      explanation:
        "Banchi, STATE STRUCTURE is the DISTRIBUTION OF POWER among the constituent parts of a state.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "How many types of state structures exist in the world?",
      options: ["Two", "Three", "Four", "Five"],
      answer: "1",
      explanation: "THREE: Unitary, Federal, and Confederal.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "Which type of state structure concentrates all power at the center?",
      options: ["Federal", "Unitary", "Confederal", "Republican"],
      answer: "1",
      explanation: "UNITARY = all power at the CENTER.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "Which type of state structure has at least TWO levels of government?",
      options: ["Unitary", "Confederal", "Federal", "Monarchical"],
      answer: "2",
      explanation: "FEDERAL has at least two levels: central and regional.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is an example of a UNITARY state?",
      options: ["Ethiopia", "USA", "Kenya", "Nigeria"],
      answer: "2",
      explanation: "KENYA is unitary. Ethiopia, USA, and Nigeria are federal.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is an example of a FEDERAL state?",
      options: ["France", "China", "Ethiopia", "Djibouti"],
      answer: "2",
      explanation: "ETHIOPIA is federal. France, China, and Djibouti are unitary.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the central feature of a confederation?",
      options: [
        "Strong central government",
        "Each member retains its sovereignty",
        "No government at all",
        "One-party rule",
      ],
      answer: "1",
      explanation: "In a CONFEDERATION, each member RETAINS its SOVEREIGNTY; the central organ is WEAK.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "Which modern organization is a good example of a confederation?",
      options: ["United Nations", "European Union", "African Union", "NATO"],
      answer: "1",
      explanation: "The EUROPEAN UNION (EU) is the best modern example of a confederation arrangement.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "What does the system of government describe?",
      options: [
        "The size of government buildings",
        "The relationship between the executive and legislative branches",
        "The number of citizens",
        "The wealth of a nation",
      ],
      answer: "1",
      explanation: "SYSTEM OF GOVERNMENT = the relationship between the EXECUTIVE and LEGISLATIVE branches.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "How many main systems of government are there?",
      options: ["One", "Two", "Three", "Four"],
      answer: "1",
      explanation: "TWO: Parliamentary and Presidential.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "In a PARLIAMENTARY system, the executive is:",
      options: [
        "Separate from the legislature",
        "Distinct from and accountable to the legislature",
        "Above the legislature",
        "The same as the judiciary",
      ],
      answer: "1",
      explanation: "In PARLIAMENTARY, the executive is DISTINCT FROM and ACCOUNTABLE TO the legislature.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "In a PRESIDENTIAL system, the president is:",
      options: [
        "Accountable to the legislature",
        "Elected by the legislature",
        "Both head of state and head of government",
        "Only a ceremonial figure",
      ],
      answer: "2",
      explanation: "In PRESIDENTIAL, the president is BOTH head of state AND head of government.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "Which country originated the PARLIAMENTARY system?",
      options: ["USA", "France", "United Kingdom", "Germany"],
      answer: "2",
      explanation: "The PARLIAMENTARY system ORIGINATED in the UNITED KINGDOM.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is an example of a PRESIDENTIAL system?",
      options: ["Ethiopia", "United Kingdom", "India", "United States"],
      answer: "3",
      explanation: "UNITED STATES uses a PRESIDENTIAL system.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is an example of a PARLIAMENTARY system?",
      options: ["USA", "Brazil", "Ethiopia", "Mexico"],
      answer: "2",
      explanation: "ETHIOPIA uses a PARLIAMENTARY system. USA, Brazil, and Mexico are presidential.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "The Montevideo Convention defines a state as having how many components?",
      options: ["Two", "Three", "Four", "Five"],
      answer: "2",
      explanation: "FOUR: population, territory, government, and sovereignty.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is NOT a component of a state according to the Montevideo Convention?",
      options: ["Population", "Territory", "Government", "Political parties"],
      answer: "3",
      explanation: "POLITICAL PARTIES are NOT one of the four components.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "The state is described as:",
      options: ["Concrete", "Abstract", "Temporary", "Narrow"],
      answer: "1",
      explanation: "The STATE is ABSTRACT — it is a concept, not a physical object.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "The government is described as:",
      options: ["Abstract", "Concrete", "Permanent", "Extrinsic to humans"],
      answer: "1",
      explanation: "The GOVERNMENT is CONCRETE — it consists of specific people and institutions.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "Government is called the:",
      options: ["Heart of the state", "Brain of the state", "Hand of the state", "Foot of the state"],
      answer: "1",
      explanation: "Government is called the 'BRAIN of the state' because it expresses the state's collective will.",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "Ethiopia's imperial system lasted until:",
      options: ["1960", "1974", "1991", "1995"],
      answer: "1",
      explanation: "The imperial system lasted until 1974.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "The word 'Derg' means:",
      options: ["Council", "Committee", "Government", "Assembly"],
      answer: "1",
      explanation: "'DERG' is Arabic for 'COMMITTEE'.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "The Derg came to power in:",
      options: ["1960", "1974", "1991", "1995"],
      answer: "1",
      explanation: "The DERG came to power in 1974.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "The Derg was deposed in:",
      options: ["1989", "1990", "1991", "1995"],
      answer: "2",
      explanation: "The DERG was deposed in MAY 1991.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "Ethiopia adopted a federal system in:",
      options: ["1974", "1991", "1995", "2000"],
      answer: "1",
      explanation: "Ethiopia adopted a FEDERAL system after 1991 (following the Derg's fall).",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the difference between unitary and federal states?",
      options: [
        "Unitary = power shared; Federal = power centralized",
        "Unitary = power centralized; Federal = power shared",
        "Both have the same power structure",
        "Unitary has no government",
      ],
      answer: "1",
      explanation: "UNITARY = power CENTRALIZED. FEDERAL = power SHARED.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT a feature of a unitary state?",
      options: [
        "Sovereignty lies with the central state",
        "Sub-units can work autonomously",
        "Legislative bodies of subunits are subordinate to center",
        "Center is legally supreme",
      ],
      answer: "1",
      explanation: "In a UNITARY state, sub-units CANNOT work autonomously — they are subordinate to the center.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a DISADVANTAGE of a unitary state?",
      options: [
        "Uniformity of administration",
        "Equal access to public service",
        "Concentration and misuse of power",
        "Avoiding conflict of authority",
      ],
      answer: "2",
      explanation: "CONCENTRATION and MISUSE of power are the disadvantages of a unitary state.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is an ADVANTAGE of a unitary state?",
      options: [
        "Concentration of power",
        "Non-recognition of local diversities",
        "Uniformity of administration",
        "Misuse of power",
      ],
      answer: "2",
      explanation: "UNIFORMITY OF ADMINISTRATION is an advantage of a unitary state.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Which FDRE constitution article lists the FEDERAL government's powers?",
      options: ["Article 9", "Article 51", "Article 52", "Article 74"],
      answer: "1",
      explanation: "ARTICLE 51 lists FEDERAL powers and functions.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Which FDRE constitution article lists the REGIONAL governments' powers?",
      options: ["Article 9", "Article 51", "Article 52", "Article 74"],
      answer: "2",
      explanation: "ARTICLE 52 discusses REGIONAL government powers.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "According to Article 52, powers not expressly given to the federal government are:",
      options: [
        "Given to international bodies",
        "Reserved to the States (regions)",
        "Given to the Prime Minister",
        "Given to the President",
      ],
      answer: "1",
      explanation: "Powers NOT EXPRESSLY given to the Federal Government are RESERVED to the STATES.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT a power of the federal government in Ethiopia?",
      options: [
        "Currency and international relations",
        "National defense",
        "Citizenship",
        "Regional police",
      ],
      answer: "3",
      explanation: "REGIONAL POLICE is a power of the REGIONAL government, not the federal government.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a power of regional governments in Ethiopia?",
      options: [
        "Formulating foreign policy",
        "Establishing and administering state police",
        "Determining nationality",
        "Administering national defense",
      ],
      answer: "1",
      explanation: "REGIONAL governments administer STATE POLICE and maintain public order.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is an ADVANTAGE of a federal system?",
      options: [
        "It destroys diversity",
        "It accommodates diversity by sharing power",
        "It makes laws uniform everywhere",
        "It reduces the size of government",
      ],
      answer: "1",
      explanation: "FEDERALISM ACCOMMODATES DIVERSITY by SHARING POWER and ensuring minorities' self-government.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a DISADVANTAGE of a federal system?",
      options: [
        "Accommodation of diversity",
        "Confusion and conflict of laws",
        "Power-sharing",
        "Self-government for minorities",
      ],
      answer: "1",
      explanation: "CONFUSION and CONFLICT OF LAWS is a disadvantage of federalism.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "In a parliamentary system, the TRUE executive power belongs to:",
      options: [
        "The ceremonial head of state",
        "The Prime Minister",
        "The Chief Justice",
        "The Speaker",
      ],
      answer: "1",
      explanation: "In a PARLIAMENTARY system, the PRIME MINISTER holds the TRUE executive power.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "In a parliamentary system, the head of state:",
      options: [
        "Holds real power",
        "Is a nominal, ceremonial figure",
        "Controls the army",
        "Makes all laws",
      ],
      answer: "1",
      explanation: "The head of state is NOMINAL (ceremonial). Real power belongs to the PM.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a feature of the PARLIAMENTARY system?",
      options: [
        "Separation of powers",
        "Fusion of powers (executive + legislative combined)",
        "President as head of government",
        "Fixed term for the executive",
      ],
      answer: "1",
      explanation: "The PARLIAMENTARY system FUSES executive and legislative power.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a feature of the PRESIDENTIAL system?",
      options: [
        "Fusion of powers",
        "Separation of powers",
        "Prime Minister as head of state",
        "No written constitution",
      ],
      answer: "1",
      explanation: "The PRESIDENTIAL system is based on SEPARATION OF POWERS.",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "In a presidential system, the president can be removed by:",
      options: ["Vote of no confidence", "Impeachment", "Prime Minister's order", "The King"],
      answer: "1",
      explanation: "In a PRESIDENTIAL system, the president can be removed through IMPEACHMENT.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "In a parliamentary system, the Prime Minister can be removed by:",
      options: [
        "A vote of no confidence by parliament",
        "A judge's order",
        "A presidential decree",
        "A military coup only",
      ],
      answer: "0",
      explanation: "The PM can be removed by a VOTE OF NO CONFIDENCE in parliament.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "The USA president serves a term of:",
      options: ["3 years", "4 years", "5 years", "6 years"],
      answer: "1",
      explanation: "The USA president serves a FIXED 4-YEAR term, maximum twice.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why state and government are different?",
      options: [
        "State is concrete; government is abstract",
        "State is abstract; government is concrete",
        "Both are the same",
        "Government is permanent; state is temporary",
      ],
      answer: "1",
      explanation: "The STATE is ABSTRACT. The GOVERNMENT is CONCRETE — specific people and institutions.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "The state is almost permanent, but government is:",
      options: ["Also permanent", "Temporary", "Equal", "Invisible"],
      answer: "1",
      explanation: "STATE is nearly PERMANENT. GOVERNMENT is TEMPORARY — it changes with elections.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why government is called 'the brain of the state'?",
      options: [
        "Because it produces food",
        "Because it expresses and implements the state's collective will",
        "Because it is elected",
        "Because it owns all property",
      ],
      answer: "1",
      explanation: "Government is called the BRAIN because it EXPRESSES AND IMPLEMENTS the state's collective will.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why government is INTRINSIC to humans?",
      options: [
        "Because every human society has some form of governance",
        "Because humans are naturally violent",
        "Because governments are always elected",
        "Because kings rule by divine right",
      ],
      answer: "0",
      explanation: "Government is INTRINSIC to humans because EVERY human society has SOME form of governance — even stateless tribal systems.",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "The Derg replaced the monarchical system with which two systems?",
      options: [
        "Democracy and republicanism",
        "Socialism and presidential system",
        "Federalism and democracy",
        "Capitalism and monarchy",
      ],
      answer: "1",
      explanation: "The Derg replaced feudalism with SOCIALISM and monarchy with a PRESIDENTIAL system.",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a strength of the DERG regime?",
      options: [
        "Respecting human rights",
        "Land redistribution to tillers",
        "Multi-party democracy",
        "Introducing federalism",
      ],
      answer: "1",
      explanation: "LAND REDISTRIBUTION to tillers was a strength of the Derg regime.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a strength of the post-1991 government?",
      options: [
        "Self-determination rights",
        "Mono-party rule",
        "Red Terror",
        "Colonialism",
      ],
      answer: "0",
      explanation: "SELF-DETERMINATION (language, cultural rights, political representation) is a strength of the post-1991 government.",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why NO state structure is inherently democratic?",
      options: [
        "Because all structures are democratic",
        "Because democracy depends on the commitment of the government, not the structure itself",
        "Because democracy depends on wealth",
        "Because federal states are always more democratic",
      ],
      answer: "1",
      explanation:
        "Banchi, exam trap: DEMOCRATIZATION depends on the COMMITMENT of the government — NOT on whether the state is unitary or federal.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why a confederation is NOT considered a true state?",
      options: [
        "Because it has too much power",
        "Because it has a WEAK central organ and members retain their sovereignty",
        "Because it has one party",
        "Because it always fails",
      ],
      answer: "1",
      explanation: "A CONFEDERATION has a WEAK central organ and members RETAIN their sovereignty — it is more like a commonwealth association.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Which best explains the relationship between state and government?",
      options: [
        "They are completely unrelated",
        "The state provides legitimacy to government; government makes the state a reality",
        "Government is bigger than state",
        "Both are always democratic",
      ],
      answer: "1",
      explanation: "STATE provides LEGITIMACY to government; GOVERNMENT makes the STATE a reality through law and coercion.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Why is Ethiopia considered a state (permanent) even though governments change?",
      options: [
        "Because governments do not change in Ethiopia",
        "Because Ethiopia has existed for thousands of years, while governments (imperial, Derg, post-1991) come and go",
        "Because the Prime Minister stays",
        "Because of its army",
      ],
      answer: "1",
      explanation: "The STATE (Ethiopia) is PERMANENT. GOVERNMENTS change from time to time.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why the parliamentary system lacks strict separation of powers?",
      options: [
        "Because the executives are appointed from parliament — they are both legislators AND law enforcers",
        "Because the PM is elected directly",
        "Because the monarch rules",
        "Because it has no legislature",
      ],
      answer: "0",
      explanation: "In a PARLIAMENTARY system, executives are appointed FROM parliament — they are BOTH legislators AND enforcers. This is FUSION of powers.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why the 1931 Ethiopian constitution did NOT establish popular sovereignty?",
      options: [
        "Because Article 4 vested sovereign power in the EMPEROR, not the people",
        "Because it established a multi-party system",
        "Because it separated church and state",
        "Because it gave power to regional states",
      ],
      answer: "0",
      explanation: "The 1931 constitution VESTED SOVEREIGN POWER IN THE EMPEROR (Article 4), not the people. It was ABSOLUTIST and CENTRALIZED.",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Define state structure, and name the THREE types of state structures in the world.",
      answer:
        "State structure = the way power is distributed among the constituent parts of a state. The three types are: (1) Unitary — power centralized at the center. (2) Federal — power shared between central and regional levels. (3) Confederal — members retain sovereignty with a weak central organ.",
      explanation: "Banchi, memorize all three with the key feature of each.",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "Compare and contrast the parliamentary and presidential systems of government.",
      answer:
        "PARLIAMENTARY:\n" +
        "• Executive is DISTINCT from but ACCOUNTABLE to the legislature.\n" +
        "• PM is the REAL executive; President/King is ceremonial head of state.\n" +
        "• FUSION of powers (legislative + executive combined).\n" +
        "• PM can be removed by vote of no confidence.\n" +
        "• Example: Ethiopia, UK, India, Germany.\n\n" +
        "PRESIDENTIAL:\n" +
        "• President is BOTH head of state and head of government.\n" +
        "• SEPARATION of powers.\n" +
        "• President is NOT accountable to the legislature.\n" +
        "• President removed only by impeachment.\n" +
        "• Fixed term (e.g., USA = 4 years, max 2 terms).\n" +
        "• Example: USA, France, Brazil, Kenya.",
      explanation:
        "Banchi, key difference: parliamentary = FUSION, presidential = SEPARATION.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "Explain the relationship and differences between state and government.",
      answer:
        "RELATIONSHIP:\n" +
        "• Without government, state cannot exist.\n" +
        "• Government is one of the 4 elements of state (Montevideo Convention: population, territory, government, sovereignty).\n" +
        "• Government is 'the brain of the state' — it expresses and implements the state's will.\n" +
        "• State provides legitimacy to government; government makes state a reality.\n\n" +
        "DIFFERENCES:\n" +
        "• STATE is WIDER; government is NARROWER.\n" +
        "• STATE is ABSTRACT; government is CONCRETE.\n" +
        "• STATE is EXTRINSIC to humans; government is INTRINSIC.\n" +
        "• STATE REPRESENTS power; government MATERIALIZES it.\n" +
        "• STATE is nearly PERMANENT; government is TEMPORARY.",
      explanation:
        "Banchi, memorize the 5 differences — they are very commonly tested.",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "Compare the THREE forms of government in Ethiopia — strengths and limitations.",
      answer:
        "MONARCHICAL (until 1974):\n" +
        "• Strengths: state formation, nation building, modernization, Adwa victory (1896), AU headquarters in Addis Ababa, 1931 written constitution foundation.\n" +
        "• Limitations: ignored diversity, ancestral power transfer, state religion, no party system.\n\n" +
        "MILITARY/DERG (1974–1991):\n" +
        "• Strengths: sovereignty and unity ('Ethiopia First'), land redistribution to tillers, literacy campaigns, 'equality of cultures', secularism.\n" +
        "• Limitations: human rights violations ('Red Terror'), interstate/intrastate wars, mono-party system.\n\n" +
        "POST-1991 (EPRDF-led):\n" +
        "• Strengths: self-determination rights (language, culture), political representation, infrastructure development, secularism.\n" +
        "• Limitations: implementation problems of federalism, extremism, conflicts, displacements — not genuine in implementation.",
      explanation:
        "Banchi, memorize: MONARCHY = state formation + Adwa. DERG = land redistribution + literacy. POST-1991 = self-determination + federalism.",
    },

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which statement about state structures is TRUE?",
      options: [
        "Federal states are always democratic",
        "Unitary states are always undemocratic",
        "No state structure is inherently democratic or undemocratic",
        "Confederations are always the most democratic",
      ],
      answer: "2",
      explanation: "NO state structure is inherently democratic or undemocratic.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a reason countries adopt a unitary state structure?",
      options: [
        "Structural simplicity and administrative effectiveness",
        "To weaken the central government",
        "To give power to regional states",
        "To promote diversity",
      ],
      answer: "0",
      explanation: "Countries adopt unitary states for STRUCTURAL SIMPLICITY and ADMINISTRATIVE EFFECTIVENESS.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a reason for adopting federalism?",
      options: [
        "To accommodate diversity",
        "To handle complex socioeconomic conditions",
        "To match increased population and territorial size",
        "To concentrate all power in the center",
      ],
      answer: "3",
      explanation: "Federalism does NOT aim to CONCENTRATE power — that is a unitary feature.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "The European Union is an example of:",
      options: ["Unitary state", "Federal state", "Confederal arrangement", "Monarchy"],
      answer: "2",
      explanation: "The EU is a CONFEDERAL arrangement — members retain sovereignty.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a main goal of a confederation?",
      options: ["Conquest", "Common defense and commercial practices", "Colonization", "Monarchy"],
      answer: "1",
      explanation: "Common DEFENSE, POSTAL services, COMMERCIAL practices, and CULTURAL unity are goals of a confederation.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "The parliamentary system originated in:",
      options: ["USA", "United Kingdom", "France", "Ethiopia"],
      answer: "1",
      explanation: "The PARLIAMENTARY system ORIGINATED in the UNITED KINGDOM.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a parliamentary country?",
      options: ["Ethiopia", "India", "Germany", "United States"],
      answer: "3",
      explanation: "The UNITED STATES uses a PRESIDENTIAL system.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "In Ethiopia's parliamentary system, the President is:",
      options: [
        "Head of government",
        "Ceremonial head of state",
        "Commander-in-chief",
        "Chief Justice",
      ],
      answer: "1",
      explanation: "In Ethiopia, the PRESIDENT is the CEREMONIAL head of state. The PM is the real executive.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the REAL executive in Ethiopia?",
      options: ["The President", "The Prime Minister", "The Speaker", "The Chief Justice"],
      answer: "1",
      explanation: "The PRIME MINISTER is the real executive in Ethiopia.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the four-element definition of a state?",
      options: [
        "Population, territory, government, sovereignty",
        "Population, army, money, flag",
        "People, cities, roads, laws",
        "King, ministers, parliament, courts",
      ],
      answer: "0",
      explanation: "The Montevideo Convention: population, territory, government, sovereignty.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a power of the federal government in Ethiopia?",
      options: [
        "Managing regional police",
        "Determining nationality",
        "Enacting state constitutions",
        "Administering local schools",
      ],
      answer: "1",
      explanation: "DETERMINING MATTERS RELATING TO NATIONALITY is a power of the FEDERAL government.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a power of regional states in Ethiopia?",
      options: [
        "Formulating foreign policy",
        "Administering national defense",
        "Enacting and enforcing state constitutions",
        "Determining nationality",
      ],
      answer: "2",
      explanation: "REGIONAL states enact and enforce STATE CONSTITUTIONS.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "The 1931 Ethiopian constitution established:",
      options: [
        "Popular sovereignty",
        "Power in the Emperor's hands",
        "A federal system",
        "A republic",
      ],
      answer: "1",
      explanation: "The 1931 constitution VESTED SOVEREIGN POWER IN THE EMPEROR.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "The National Shengo was the parliament of:",
      options: [
        "The imperial regime",
        "The Derg regime",
        "The post-1991 government",
        "The current government",
      ],
      answer: "1",
      explanation: "The NATIONAL SHENGO was the parliament of the DERG regime.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which was a strength of the imperial regime?",
      options: [
        "Human rights",
        "Multi-party democracy",
        "Adwa victory and diplomatic successes",
        "Self-determination",
      ],
      answer: "2",
      explanation: "The ADWA victory (1896) and DIPLOMATIC successes are strengths of the imperial regime.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "Which was a limitation of the imperial regime?",
      options: [
        "National unity",
        "Ignoring the diversity of peoples",
        "State formation",
        "Diplomatic ties",
      ],
      answer: "1",
      explanation: "IGNORING the DIVERSITY of peoples was a major limitation of the imperial regime.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "The 'Red Terror' is associated with:",
      options: [
        "The imperial regime",
        "The Derg regime",
        "The post-1991 government",
        "The current federal system",
      ],
      answer: "1",
      explanation: "The RED TERROR was a gross human rights violation under the DERG regime.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "Which was NOT a strength of the Derg regime?",
      options: [
        "Literacy campaigns",
        "Land redistribution",
        "Multi-party democracy",
        "Secularism",
      ],
      answer: "2",
      explanation: "MULTI-PARTY DEMOCRACY was NOT a strength of the Derg — it used a MONO-PARTY system.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a strength of the post-1991 government?",
      options: [
        "Introducing a federal system and self-determination rights",
        "Introducing the monarchy",
        "Restoring state religion",
        "Ending all elections",
      ],
      answer: "0",
      explanation: "FEDERALISM and SELF-DETERMINATION rights are strengths of the post-1991 government.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a limitation of the post-1991 government?",
      options: [
        "Implementation problems of federalism, extremism, and conflicts",
        "Too much political participation",
        "Ending of all diversity rights",
        "Restoration of monarchy",
      ],
      answer: "0",
      explanation: "Implementation problems of federalism, extremism, conflicts, and displacements are LIMITATIONS of the post-1991 government.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correct pair shows a state structure and its feature?",
      options: [
        "Unitary — power shared between levels",
        "Federal — at least two levels of government",
        "Confederal — strong central government",
        "Unitary — regional autonomy guaranteed",
      ],
      answer: "1",
      explanation: "FEDERAL = at least TWO levels of government.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "In a parliamentary system, ministers come from:",
      options: [
        "The army",
        "The legislature (parliament)",
        "Independent commissions",
        "Foreign countries",
      ],
      answer: "1",
      explanation: "Ministers in a PARLIAMENTARY system come FROM the LEGISLATURE (parliament).",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a fixed-term system of government?",
      options: ["Parliamentary", "Presidential", "Confederal", "Monarchical"],
      answer: "1",
      explanation: "PRESIDENTIAL systems have FIXED TERMS (e.g., USA: 4 years).",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "Which form of government did Ethiopia adopt after 1991?",
      options: [
        "Imperial monarchy",
        "Socialist republic",
        "Republican with parliamentary system and federal structure",
        "Confederation",
      ],
      answer: "2",
      explanation: "After 1991, Ethiopia became a REPUBLIC with a PARLIAMENTARY system and FEDERAL structure.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "The FDRE Constitution was adopted in:",
      options: ["1974", "1987", "1991", "1995"],
      answer: "3",
      explanation: "The FDRE Constitution was adopted in 1995.",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why federalism accommodates diversity?",
      options: [
        "Because it centralizes all power",
        "Because it divides power among territorial units and ensures minority self-government",
        "Because it abolishes local governments",
        "Because it removes group rights",
      ],
      answer: "1",
      explanation: "Federalism DIVIDES power and ensures MINORITY self-government — accommodating diversity.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why the unitary system is used by most countries?",
      options: [
        "Because it is the only democratic system",
        "Because of advantages like uniformity of administration and equal access to public services",
        "Because it accommodates diversity best",
        "Because it prevents central power",
      ],
      answer: "1",
      explanation: "Unitary is common due to UNIFORMITY of administration and EQUAL ACCESS to public services.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Which best explains the relationship between delegation and law in a unitary state?",
      options: [
        "Delegation is based on law",
        "Delegation is based on the will of the central state, NOT law",
        "There is no delegation",
        "Delegation is permanent",
      ],
      answer: "1",
      explanation: "In a UNITARY state, delegation is based on the WILL of the central state, NOT law — and can be taken back.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the difference between a federation and a confederation?",
      options: [
        "Federation = weak center; Confederation = strong center",
        "Federation = central government has real power; Confederation = central body is weak",
        "They are identical",
        "Both have no central body",
      ],
      answer: "1",
      explanation: "FEDERATION = strong central power; CONFEDERATION = weak central body.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the difference between the head of state and head of government in a parliamentary system?",
      options: [
        "They are the same person",
        "The head of state is CEREMONIAL; the head of government (PM) holds REAL executive power",
        "The head of state holds real power",
        "Neither has power",
      ],
      answer: "1",
      explanation: "The HEAD OF STATE is CEREMONIAL; the HEAD OF GOVERNMENT (PM) holds the REAL power.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains 'collective responsibility' in the parliamentary system?",
      options: [
        "Each minister is individually responsible",
        "The PM and ministers are jointly accountable to parliament",
        "Parliament is responsible to ministers",
        "Only the president is responsible",
      ],
      answer: "1",
      explanation: "COLLECTIVE RESPONSIBILITY = the PM and ministers are JOINTLY ACCOUNTABLE to parliament.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the best explanation of the FDRE constitution Article 9/1?",
      options: [
        "The constitution is above all other laws",
        "Parliament is above the constitution",
        "The PM is above the constitution",
        "Laws override the constitution",
      ],
      answer: "0",
      explanation: "Article 9/1 establishes the SUPREMACY of the constitution — any law conflicting with it is null and void.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "Which best describes the strength of the post-1991 government in terms of diversity?",
      options: [
        "It promoted cultural rights and self-determination",
        "It abolished all regional states",
        "It restored state religion",
        "It banned all languages except Amharic",
      ],
      answer: "0",
      explanation: "The post-1991 government PROMOTED cultural rights and self-determination, though implementation was limited.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "Which best describes why federalism is 'not a panacea'?",
      options: [
        "It solves all problems",
        "It has its own challenges — conflicts, duplication, confusion of laws",
        "It is the only democratic system",
        "It prevents development",
      ],
      answer: "1",
      explanation: "Federalism is NOT a PANACEA — it has challenges like CONFLICTS, DUPLICATION, and CONFUSION OF LAWS.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "Why is the United States considered a federal and presidential country?",
      options: [
        "Because it has two levels of government AND a separately elected president",
        "Because the President is chosen from parliament",
        "Because it is unitary",
        "Because it has a monarch",
      ],
      answer: "0",
      explanation: "USA is FEDERAL (two levels of government) AND PRESIDENTIAL (separately elected president).",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why the parliamentary system is said to 'lack separation of powers'?",
      options: [
        "Because ministers come from parliament and are both legislators AND executives",
        "Because the judiciary rules",
        "Because there is no executive",
        "Because the King rules",
      ],
      answer: "0",
      explanation: "In PARLIAMENTARY systems, ministers FROM parliament are BOTH legislators AND executives — meaning FUSION of powers.",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "Which best describes why the Derg regime was considered a change-maker?",
      options: [
        "It introduced democracy",
        "It ended the long feudal system and introduced socialism and secularism",
        "It restored the monarchy",
        "It introduced federalism",
      ],
      answer: "1",
      explanation: "The DERG ended the FEUDAL SYSTEM, introduced SOCIALISM, SECULARISM, and land redistribution.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes 'Ethiopia First' as a motto?",
      options: [
        "It was the Derg's commitment to national sovereignty and unity",
        "It was the imperial regime's motto",
        "It was the post-1991 motto",
        "It was a UN slogan",
      ],
      answer: "0",
      explanation: "'ETHIOPIA FIRST' was the DERG's motto showing commitment to national sovereignty and unity.",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "Which best explains why Addis Ababa is considered Africa's diplomatic capital?",
      options: [
        "Because of the AU headquarters",
        "Because of its army",
        "Because of its gold",
        "Because of its size",
      ],
      answer: "0",
      explanation: "Addis Ababa hosts the AFRICAN UNION (AU) headquarters — a result of imperial regime diplomatic successes.",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes why the state is wider than the government?",
      options: [
        "Because the state includes population, territory, government, and sovereignty",
        "Because the government has more people",
        "Because the state is elected",
        "Because the government is abstract",
      ],
      answer: "0",
      explanation: "The STATE is WIDER — it includes population, territory, government, AND sovereignty.",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly pairs an Ethiopian government with its main strength?",
      options: [
        "Monarchy — literacy campaign",
        "Derg — state formation",
        "Post-1991 — self-determination rights",
        "Derg — Adwa victory",
      ],
      answer: "2",
      explanation: "POST-1991 government introduced SELF-DETERMINATION rights.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly pairs an Ethiopian government with its main limitation?",
      options: [
        "Monarchy — mono-party system",
        "Derg — Red Terror and human rights violations",
        "Post-1991 — no diversity rights",
        "Post-1991 — restored state religion",
      ],
      answer: "1",
      explanation: "The DERG's limitation was HUMAN RIGHTS VIOLATIONS — including the 'RED TERROR'.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "Why is a written constitution especially important in a federal state?",
      options: [
        "To establish the permanent covenant of union and divide power clearly",
        "To give all power to the center",
        "To abolish regional states",
        "To give power to one person",
      ],
      answer: "0",
      explanation: "A WRITTEN CONSTITUTION is needed to establish the PERMANENT COVENANT OF UNION and DIVIDE power clearly.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of the following is the correct list of SUB-UNIT powers in a federal Ethiopia?",
      options: [
        "Currency and foreign policy",
        "Self-government, state constitutions, state police, public order",
        "National defense and citizenship",
        "International agreements",
      ],
      answer: "1",
      explanation: "Regional powers: SELF-GOVERNMENT, STATE CONSTITUTIONS, STATE POLICE, and PUBLIC ORDER.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why Ethiopia adopted federalism after 1991?",
      options: [
        "To accommodate diversity, ensure self-determination, and share power",
        "To concentrate power in one party",
        "To restore monarchy",
        "To abolish local governance",
      ],
      answer: "0",
      explanation: "Federalism was adopted to ACCOMMODATE DIVERSITY, ENSURE SELF-DETERMINATION, and SHARE power.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "Which feature distinguishes a presidential system from a parliamentary system?",
      options: [
        "The president is separately elected and NOT accountable to the legislature",
        "The president is chosen from parliament",
        "The president is a ceremonial figure",
        "The president has no fixed term",
      ],
      answer: "0",
      explanation: "In PRESIDENTIAL systems, the president is SEPARATELY elected and NOT accountable to the legislature.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why impeachment exists in a presidential system?",
      options: [
        "To check the president in case of serious violations",
        "To elect the president",
        "To appoint ministers",
        "To write laws",
      ],
      answer: "0",
      explanation: "IMPEACHMENT exists as a CHECK on the president for SERIOUS VIOLATIONS (checks and balances).",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the strongest reason the state is described as 'nearly permanent'?",
      options: [
        "Because states never change",
        "Because governments change but the state remains — e.g., Ethiopia has existed for thousands of years",
        "Because states are always written",
        "Because armies protect states",
      ],
      answer: "1",
      explanation: "The STATE is nearly permanent — Ethiopia has existed for thousands of years while GOVERNMENTS change.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the key difference between delegation in a unitary system and power division in a federal system?",
      options: [
        "Delegation is based on the will of the center; power division is constitutionally guaranteed",
        "Both are identical",
        "Delegation is permanent; power division is temporary",
        "Delegation is law-based; power division is not",
      ],
      answer: "0",
      explanation: "In UNITARY, delegation is by WILL of the center. In FEDERAL, power division is by CONSTITUTION.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how the post-1991 government changed Ethiopia's state structure?",
      options: [
        "From unitary to federal",
        "From federal to unitary",
        "From monarchy to democracy only",
        "From colony to independence",
      ],
      answer: "0",
      explanation: "Post-1991, Ethiopia changed from a UNITARY structure (under Derg) to a FEDERAL structure.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why federalism can BOTH strengthen and weaken a country?",
      options: [
        "It has no weaknesses",
        "It accommodates diversity BUT can create confusion of laws and conflicts",
        "It always destroys countries",
        "It has only disadvantages",
      ],
      answer: "1",
      explanation: "Federalism STRENGTHENS through diversity accommodation, but can WEAKEN through confusion of laws, duplication, and conflicts.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why the parliamentary system is considered more flexible than the presidential system?",
      options: [
        "The PM can be removed at any time through a vote of no confidence",
        "The PM has a fixed term",
        "The PM is elected directly",
        "The PM is above the law",
      ],
      answer: "0",
      explanation: "In PARLIAMENTARY systems, the PM can be removed AT ANY TIME by a VOTE OF NO CONFIDENCE — making it flexible.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "Which best explains why the United States is a 'checks and balances' system?",
      options: [
        "Because the president is separate from the legislature — each branch can check the other",
        "Because the president rules alone",
        "Because there is no judiciary",
        "Because there is no constitution",
      ],
      answer: "0",
      explanation: "PRESIDENTIAL systems use SEPARATION OF POWERS with CHECKS AND BALANCES — each branch limits the other.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "Which best explains why the state is described as 'extrinsic' to humans?",
      options: [
        "Because stateless societies can exist without a specialized state — humans can live without a state",
        "Because everyone must have a state",
        "Because states are natural",
        "Because states are always democratic",
      ],
      answer: "0",
      explanation: "The STATE is EXTRINSIC because HUMANS CAN LIVE WITHOUT a specialized state (e.g., sedentary tribal systems).",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Which best explains why government is described as 'intrinsic' to humans?",
      options: [
        "Because there is no human society without some form of governance",
        "Because governments are always elected",
        "Because governments always have written constitutions",
        "Because governments are always democratic",
      ],
      answer: "0",
      explanation: "GOVERNMENT is INTRINSIC because there is NO human society without SOME form of governance.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "Which best describes why the Derg's achievements and violations should BOTH be recognized?",
      options: [
        "Because every government has strengths and limitations",
        "Because the Derg was perfect",
        "Because the Derg was the worst",
        "Because the Derg never governed",
      ],
      answer: "0",
      explanation: "EVERY government has BOTH STRENGTHS and LIMITATIONS — the Derg had achievements (literacy, land reform) AND violations (Red Terror).",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "List the THREE types of state structures and give ONE example for each.",
      answer:
        "1) UNITARY — power centralized at the center. Example: KENYA, China, France, United Kingdom.\n" +
        "2) FEDERAL — power shared between central and regional levels. Example: ETHIOPIA, USA, Nigeria, India.\n" +
        "3) CONFEDERAL — members retain sovereignty with a weak central body. Example: EUROPEAN UNION (EU).",
      explanation: "Banchi, memorize ONE example for each — it is often tested.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "Describe the features of the parliamentary system of government.",
      answer:
        "• The executive is distinct from and ACCOUNTABLE to the legislature.\n" +
        "• The party with the most seats in parliament forms the government.\n" +
        "• The PRIME MINISTER (from parliament) is the REAL executive — leader of the majority party.\n" +
        "• The HEAD OF STATE (President/King) is a NOMINAL, ceremonial figure.\n" +
        "• COLLECTIVE RESPONSIBILITY — PM and ministers jointly accountable.\n" +
        "• FUSION OF POWERS — legislative and executive combined.\n" +
        "• The PM can be removed by a VOTE OF NO CONFIDENCE.\n" +
        "• Example: ETHIOPIA, UK, India, Germany, Japan.",
      explanation:
        "Banchi, key features: PM real power, ceremonial head of state, fusion of powers, collective responsibility, no-confidence vote.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "Describe the features of the presidential system of government.",
      answer:
        "• The president is BOTH head of state AND head of government.\n" +
        "• President and legislature are SEPARATELY elected by the people.\n" +
        "• SEPARATION OF POWERS — executive is NOT accountable to the legislature.\n" +
        "• CHECKS AND BALANCES — each branch limits the other.\n" +
        "• IMPEACHMENT — legislature can remove president for serious violations.\n" +
        "• FIXED TERM — e.g., USA president: 4 years, max 2 terms.\n" +
        "• Example: USA, France, Brazil, Mexico, Kenya.",
      explanation:
        "Banchi, key features: president = both roles, separate election, separation of powers, impeachment, fixed term.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Describe Ethiopia's THREE forms of government and list ONE strength and ONE limitation of each.",
      answer:
        "1) MONARCHICAL (until 1974):\n" +
        "• Strength: State formation, nation building, Adwa victory (1896), AU headquarters.\n" +
        "• Limitation: Ignored diversity, ancestral power transfer, state religion.\n\n" +
        "2) MILITARY/DERG (1974–1991):\n" +
        "• Strength: Land redistribution to tillers, literacy campaigns, secularism.\n" +
        "• Limitation: Human rights violations (Red Terror), mono-party system.\n\n" +
        "3) POST-1991 (EPRDF-led):\n" +
        "• Strength: Self-determination rights (language, culture), federalism, infrastructure development.\n" +
        "• Limitation: Implementation problems of federalism, extremism, conflicts, displacements.",
      explanation:
        "Banchi, memorize ONE strength and ONE limitation per government — this is a very common exam format.",
    },
  ],
};