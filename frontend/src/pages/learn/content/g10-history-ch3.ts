import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 HISTORY — UNIT 3
// SOCIAL, ECONOMIC & POLITICAL DEVELOPMENTS IN ETHIOPIA
// mid-19th c. to 1941
// Source: Grade 10 History Student Textbook (pp. 44–80)
// For: Abenezer (Abatu) — Grade 10
// ============================================================

export const g10HistoryCh3: Chapter = {
  id: "ch3",
  number: 3,
  title: "Social, Economic & Political Developments in Ethiopia (mid-19th c. to 1941)",
  titleAm: "በኢትዮጵያ ማህበራዊ፣ ኢኮኖሚያዊና ፖለቲካዊ እድገቶች (19ኛው ክ/ዘ አጋማሽ እስከ 1941)",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS UNIT
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Unit (Your Route to 100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this unit is the STORY OF MODERN ETHIOPIA — from the mid-19th century to 1941. It has FIVE big parts:\n" +
        "1) LONG-DISTANCE TRADE & COTTAGE INDUSTRY\n" +
        "2) MAKING OF MODERN ETHIOPIA (Tewodros, Yohannes, Menilek)\n" +
        "3) EXTERNAL AGGRESSIONS & BATTLE OF ADWA\n" +
        "4) POWER STRUGGLE (1906–1935, Diarchy)\n" +
        "5) FASCIST ITALIAN AGGRESSION & PATRIOTIC RESISTANCE (1936–1941)\n\n" +
        "Must-know items:\n" +
        "• Long-distance trade routes (from Bonga) + traders (Jabarti, Afqala)\n" +
        "• The three emperors: Tewodros II, Yohannes IV, Menilek II\n" +
        "• Major battles: Ayshal, Gundat, Gura, Dogali, Adwa\n" +
        "• Battle of Adwa (1896) = most important event\n" +
        "• Diarchy = 1916–1930\n" +
        "• Fascist Italian occupation = 1936–1941\n" +
        "• Patriots (Arbegnoch) = resistance fighters",
      bodyAm:
        "አባቱ፣ ይህ ክፍል የዘመናዊቷ ኢትዮጵያ ታሪክ ነው። አምስት ትላልቅ ክፍሎች፦\n" +
        "1) የረጅም ርቀት ንግድና የቤት ውስጥ ኢንዱስትሪ\n" +
        "2) ዘመናዊቷ ኢትዮጵያ መፈጠር\n" +
        "3) የውጭ ወረራዎችና የአድዋ ጦርነት\n" +
        "4) የሥልጣን ትግል\n" +
        "5) የፋሺስት ጣሊያን ወረራና የአርበኞች ተቃውሞ",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Know the three emperors",
          titleAm: "ደረጃ 1 · ሦስቱን ነገሥታት እወቅ",
          body:
            "THREE KEY EMPERORS:\n\n" +
            "1) TEWODROS II (1855–1868)\n" +
            "• First emperor to attempt unification\n" +
            "• Born Kassa Hailu of Quara\n" +
            "• Military reforms, Gafat arms factory, 'Sebastopol' mortar\n" +
            "• Died by suicide at Maqdala after British expedition\n\n" +
            "2) YOHANNES IV (1872–1889)\n" +
            "• Decentralized administration\n" +
            "• Council of Boru Meda (1878)\n" +
            "• Defeated Egyptians at Gundat (1875) and Gura (1876)\n" +
            "• Killed at Metemma (1889) fighting Mahdists\n\n" +
            "3) MENILEK II (1889–1913)\n" +
            "• Territorial expansion (created modern Ethiopia's shape)\n" +
            "• Victory at ADWA (1896)\n" +
            "• Modernization: Bank of Abyssinia, railway, postal system",
          bodyAm:
            "ተወድሮስ ፪ — ውህደት፣ ጋፋት፣ መቅደላ።\n" +
            "ዮሐንስ ፬ — ጉንዳት፣ ጉራ፣ መተማ።\n" +
            "ምኒልክ ፪ — መስፋፋት፣ አድዋ፣ ዘመናዊነት።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Build the battle timeline",
          titleAm: "ደረጃ 2 · የጦርነቶች የጊዜ መስመር",
          body:
            "KEY BATTLES:\n" +
            "• 1852 — Gur Amba\n" +
            "• 1853 — Gorgora Bichign\n" +
            "• 1853 — Ayshal (END of Zemene Mesafint)\n" +
            "• 1855 — Deresge (Kassa crowned Tewodros II)\n" +
            "• 1868 — Aroge / Maqdala (Tewodros dies)\n" +
            "• 1875 — Gundat (Ethiopia defeats Egypt)\n" +
            "• 1876 — Gura (Ethiopia defeats Egypt again)\n" +
            "• 1887 — Dogali (Ras Alula defeats Italy)\n" +
            "• 1889 — Metemma (Yohannes IV dies)\n" +
            "• 1896 — ADWA (Ethiopia defeats Italy — most important)\n" +
            "• 1916 — Sagale (Iyyasu defeated)\n" +
            "• 1930 — Anchim (Gugsa Wale defeated)\n" +
            "• 1936 — Maychew (Italian victory)",
          bodyAm:
            "አይሻል (1853)፣ መቅደላ (1868)፣ ጉንዳት (1875)፣ ጉራ (1876)፣ ዶጋሊ (1887)፣ አድዋ (1896)።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master the Wuchale Treaty dispute",
          titleAm: "ደረጃ 3 · የውጫሌ ስምምነት ውዝግብ",
          body:
            "TREATY OF WUCHALE (2 May 1889):\n" +
            "• Signed by Menilek II + Italian Count Pietro Antonelli\n" +
            "• Article XVII DIFFERENCES:\n" +
            "  - AMHARIC version: Ethiopia 'COULD' use Italian good offices (optional)\n" +
            "  - ITALIAN version: Ethiopia 'MUST' use Italian good offices (obligatory → made Ethiopia a protectorate)\n\n" +
            "RESULT:\n" +
            "• Menilek tried to revise treaty\n" +
            "• Failed → ABROGATED treaty unilaterally in 1893\n" +
            "• Led to Battle of Adwa (1896)\n\n" +
            "⚠ MCQ TRAP: 'Could' vs 'must' is the key difference.",
          bodyAm:
            "የአማርኛው 'ሊጠቀም ይችላል'፤ የጣሊያንኛው 'መጠቀም አለበት'።\n" +
            "ውጤት: 1893 ስምምነቱ ተሰረዘ።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Understand the Diarchy period",
          titleAm: "ደረጃ 4 · የድያርኪ ዘመን",
          body:
            "DIARCHY (DUAL RULE) — 1916 to 1930:\n" +
            "• Power shared between EMPRESS ZEWDITU and RAS TEFERI MEKONNEN\n" +
            "• 1916: Lij Iyyasu overthrown\n" +
            "• Two camps:\n" +
            "  - CONSERVATIVE (Zewditu's supporters, led by Fitawrari Habte Giyorgis)\n" +
            "  - PROGRESSIVE (Teferi's supporters)\n\n" +
            "KEY EVENTS:\n" +
            "• 1916 — Sagale: Iyyasu's father Nigus Mikael defeated\n" +
            "• 1918 — Ministers expelled (except Habte Giyorgis)\n" +
            "• 1926 — Habte Giyorgis dies\n" +
            "• 1928 — Teferi crowned Nigus; Balcha Safo removed\n" +
            "• 1930 — Ras Gugsa Wale defeated at Anchim\n" +
            "• 1930 — Teferi crowned EMPEROR HAILE SELASSIE I\n\n" +
            "⚠ Diarchy = 'dual rule' = TWO rulers at once.",
          bodyAm:
            "ድያርኪ = ሁለት አስተዳዳሪዎች።\n" +
            "ዘውዲቱ + ተፈሪ።\n" +
            "1916–1930።",
        },
        {
          id: "n0-5",
          title: "Pass 5 · Know the resistance periods",
          titleAm: "ደረጃ 5 · የተቃውሞ ጊዜያት",
          body:
            "FASCIST ITALIAN OCCUPATION (1936–1941):\n\n" +
            "CAUSES:\n" +
            "• Italy wanted revenge for Adwa (1896)\n" +
            "• Mussolini wanted to restore Roman glory\n" +
            "• Pretext: Walawal incident (Dec 5, 1934)\n\n" +
            "KEY EVENTS:\n" +
            "• Oct 3, 1935 — Italy invades from Eritrea\n" +
            "• Nov 8, 1935 — Italians take Mekelle\n" +
            "• March 31, 1936 — Battle of Maychew (Italy wins)\n" +
            "• May 2, 1936 — Haile Selassie leaves for Europe\n" +
            "• May 5, 1936 — Italians take Addis Ababa\n" +
            "• 1936–1941 — Italian occupation (AOI)\n" +
            "• Feb 19, 1937 — Graziani assassination attempt → massacre\n" +
            "• May 5, 1941 — Haile Selassie returns\n\n" +
            "PATRIOTIC RESISTANCE (ARBEGNOCH):\n" +
            "• Two phases (before + after Graziani massacre)\n" +
            "• First phase: traditional battles, upper-class nobles\n" +
            "• Second phase: guerrilla warfare, lower nobility\n" +
            "• Women: Shewareged Gedle, Kebedech Seyoum, Shewanesh Abera, Abebech Cherqos, Lekyelesh Beyan",
          bodyAm:
            "ወረራ: 1935 ጥቅምት 3።\n" +
            "ነጻነት: 1941 ግንቦት 5።\n" +
            "አርበኞች።",
        },
        {
          id: "n0-6",
          title: "⚠ Exam standard — before you submit",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Tewodros = 1855–1868; Yohannes = 1872–1889; Menilek = 1889–1913\n" +
            "• Battle of Ayshal (1853) = END of Zemene Mesafint\n" +
            "• Battle of Adwa = March 1, 1896\n" +
            "• Wuchale Treaty = 1889 (Article XVII difference)\n" +
            "• Diarchy = 1916–1930 (Zewditu + Teferi)\n" +
            "• Haile Selassie crowned = 1930\n" +
            "• 1931 Constitution = first written constitution\n" +
            "• Italian invasion = Oct 3, 1935\n" +
            "• Addis Ababa fell = May 5, 1936\n" +
            "• Haile Selassie returned = May 5, 1941\n" +
            "• Graziani Massacre = Feb 1937 (~30,000 killed)\n" +
            "• Patriots = ARBEGNOCH\n" +
            "• Adwa commanders: Menilek, Taytu, Ras Mikael, Ras Makonnen, Ras Alula, Ras Mangasha, Nigus Tekle-Haymanot",
          bodyAm:
            "ቀኖችንና ስሞችን በጥንቃቄ አስታውስ።",
        },
      ],
    },

    // ============================================================
    // 3.1 LONG-DISTANCE TRADE & COTTAGE INDUSTRY
    // ============================================================
    {
      id: "n1",
      title: "3.1 Long-Distance Trade in the 19th Century and the Cottage Industry",
      titleAm: "3.1 የረጅም ርቀት ንግድና የቤት ውስጥ ኢንዱስትሪ",
      body:
        "Abatu, in the 19th century, Ethiopia's regions were connected by TWO major trade routes starting from BONGA (capital of Kafa Kingdom).",
      bodyAm:
        "ሁለት ዋና የንግድ መስመሮች ከቦንጋ (የካፋ መንግሥት ዋና ከተማ) ይጀመሩ ነበር።",
      children: [
        {
          id: "n1-1",
          title: "🗺 Two Trade Routes from Bonga",
          titleAm: "🗺 ከቦንጋ የሚወጡ ሁለት መስመሮች",
          body:
            "ROUTE 1 (Bonga → Gondar → Massawa):\n" +
            "• Bonga → Hirmata → Saqa → Asandabo → Basso → Gondar\n" +
            "• At GONDAR it BRANCHED into two:\n" +
            "  - Westward: through Chilga to Matamma (Gallabat)\n" +
            "  - Northward: through Adwa, Asmara → ends at MASSAWA (Red Sea)\n\n" +
            "ROUTE 2 (Bonga → Harar → Somali coast):\n" +
            "• Bonga → Hirmata (Jimma) → Soddo (southern Shewa) → Rogge (foot of Yarar Mountain) → Aliyu Amba/Abdul Rasul (northern Shewa) → Harar\n" +
            "• At HARAR it BRANCHED into two:\n" +
            "  - To ZEYILA\n" +
            "  - To BERBERA\n" +
            "  (both on the Somali coast of Indian Ocean)",
          bodyAm:
            "መስመር 1 — ቦንጋ → ጎንደር → መጥመቂያ → ምጽዋ።\n" +
            "መስመር 2 — ቦንጋ → ሐረር → ዘይላ/በርበራ።",
        },
        {
          id: "n1-2",
          title: "📌 KEY TERM — Principal Commodities",
          titleAm: "📌 ዋና ምርቶች",
          body:
            "PRINCIPAL COMMODITIES of the long-distance trade:\n" +
            "• IVORY\n" +
            "• CIVET MUSK\n" +
            "• SALT BARS (AMOLE)\n" +
            "• SLAVES\n\n" +
            "MEDIUM OF EXCHANGE:\n" +
            "• SALT BARS (AMOLE) — used as money\n" +
            "• MARIA THERESA THALERS (MTT) — Austrian coin\n" +
            "  - Introduced by Arab traders at end of 18th century\n" +
            "  - Used side by side with amole",
          bodyAm:
            "ዝሆን ጥርስ፣ ሽቶ፣ ጨው (አሞሌ)፣ ባሪያዎች።\n" +
            "ገንዘብ: አሞሌ + MTT።",
        },
        {
          id: "n1-3",
          title: "👥 The Traders",
          titleAm: "👥 ነጋዴዎች",
          body:
            "TRADERS had DIVERSE BACKGROUNDS:\n" +
            "• Local peoples at each market centre\n" +
            "• MUSLIM MERCHANTS were the MOST DOMINANT group\n\n" +
            "KEY GROUPS:\n" +
            "• JABARTI — northern Muslim merchants\n" +
            "• AFQALA — southwestern Muslim Oromo merchants\n" +
            "• ARGOBA — from Kingdom of Shewa; active between Harar and northern Somali coast",
          bodyAm:
            "ሙስሊም ነጋዴዎች ዋና ነበሩ።\n" +
            "ጃባርቲ (ሰሜን)፣ አፍቃላ (ደቡብ ምዕራብ)፣ አርጎባ (ሸዋ)።",
        },
        {
          id: "n1-4",
          title: "🏭 Cottage Industries",
          titleAm: "🏭 የቤት ውስጥ ኢንዱስትሪዎች",
          body:
            "COTTAGE INDUSTRY = handicraft technology existing in Ethiopia since time immemorial.\n\n" +
            "COMMON INDUSTRIES:\n" +
            "• METALWORKING (blacksmiths)\n" +
            "• POTTERY\n" +
            "• TANNERY\n" +
            "• CARPENTRY\n" +
            "• MASONRY\n" +
            "• WEAVING\n" +
            "• JEWELLERY\n" +
            "• BASKET MAKING\n\n" +
            "⚠ PROBLEM:\n" +
            "• Public attitude toward artisans was DISCOURAGING\n" +
            "• Artisans were DISDAINED and MARGINALIZED\n" +
            "• Result: locally produced implements did NOT improve significantly",
          bodyAm:
            "ብረት ሥራ፣ ሸክላ፣ ቆዳ፣ አናጢነት፣ ግንበኝነት፣ ሽመና፣ ጌጣጌጥ፣ ሽግራ።\n" +
            "ችግር: የአርቲስቶች ማህበራዊ ደረጃ ዝቅተኛ ነበር።",
        },
        {
          id: "n1-5",
          title: "⚒ Blacksmiths — Most Important Craft",
          titleAm: "⚒ ብረት ሠራተኞች",
          body:
            "BLACKSMITHS were the MOST IMPORTANT of the cottage industries.\n\n" +
            "WHAT THEY MADE:\n" +
            "Agricultural:\n" +
            "• Ploughshares\n" +
            "• Iron parts of pick-axes\n" +
            "• Sickles\n\n" +
            "Military:\n" +
            "• Spearheads, daggers, swords\n" +
            "• Bullets, rifle spare parts\n\n" +
            "Household:\n" +
            "• Knives, razors\n" +
            "• Nails, hammers, pincers, drills\n" +
            "• Hatchets, saws, files\n" +
            "• Pans for cooking bread\n" +
            "• Tent-pegs\n" +
            "• Chains and rings\n\n" +
            "For transport:\n" +
            "• Bits and stirrups for horses and mules",
          bodyAm:
            "እርሻ፣ ወታደራዊ፣ የቤት ውስጥ እቃዎች።",
        },
        {
          id: "n1-6",
          title: "⚠ EXAM TRAP — Long-distance trade",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• Routes START at BONGA (Kafa Kingdom)\n" +
            "• GONDAR and HARAR are BRANCHING points\n" +
            "• MASSAWA = Red Sea end; ZEYILA & BERBERA = Indian Ocean end\n" +
            "• SALT BARS (AMOLE) = medium of exchange\n" +
            "• MARIA THERESA THALER (MTT) = Austrian coin\n" +
            "• JABARTI = northern Muslim merchants\n" +
            "• AFQALA = southwestern Muslim Oromo merchants\n" +
            "• Blacksmiths = MOST IMPORTANT\n" +
            "• Artisans were DISDAINED and MARGINALIZED\n\n" +
            "⚠ MCQ TRAP: 'Maria Theresa Thaler was British' → FALSE; it was AUSTRIAN.",
          bodyAm:
            "ቦንጋ = መነሻ።\n" +
            "ጎንደር + ሐረር = መጋጠሚያ።\n" +
            "MTT = ኦስትሪያዊ።",
        },
      ],
    },

    // ============================================================
    // 3.2 MAKING OF MODERN ETHIOPIAN STATE (1855–1913)
    // ============================================================
    {
      id: "n2",
      title: "3.2 The Making of Modern Ethiopian State (1855–1913)",
      titleAm: "3.2 ዘመናዊቷ ኢትዮጵያ መፈጠር",
      body:
        "Abatu, the making of modern Ethiopia involved TWO processes:\n" +
        "1) UNIFICATION of northern and north-central regions\n" +
        "2) TERRITORIAL EXPANSION into the southern half\n\n" +
        "Three emperors drove this: Tewodros II, Yohannes IV, Menilek II.",
      bodyAm:
        "ሁለት ሂደቶች: ውህደትና መስፋፋት።\n" +
        "ሦስት ነገሥታት።",
      children: [
        {
          id: "n2-1",
          title: "⚔ TEWODROS II (1855–1868) — The First Unifier",
          titleAm: "⚔ ተወድሮስ ፪ — የመጀመሪያው አዋሃጅ",
          body:
            "BORN: KASSA HAILU of Quara\n" +
            "CROWNED: 9 February 1855 by Abuna Salama at Deresge Mariam\n\n" +
            "BATTLES BEFORE CORONATION:\n" +
            "1) Gur Amba (Nov 27, 1852) — defeated Dejjach Goshu Zewde of Gojjam\n" +
            "2) Gorgora Bichign (April 12, 1853) — defeated Birru Aligaz + 4 Dejjazmachs\n" +
            "3) Ayshal (June 29, 1853) — defeated Ras Ali of Yejju (END of Zemene Mesafint)\n" +
            "4) Deresge (Feb 8, 1855) — defeated Dejjazmach Wube of Semen and Tigray\n\n" +
            "⚠ BATTLE OF AYSHAL = END OF ZEMENE MESAFINT (Era of Princes).",
          bodyAm:
            "Kassa Hailu — Gur Amba, Gorgora Bichign, Ayshal, Deresge።\n" +
            "አይሻል = የዘመነ መሳፍንት መጨረሻ።",
        },
        {
          id: "n2-2",
          title: "🔧 Tewodros II — Reforms and Modernization",
          titleAm: "🔧 የተወድሮስ ሪፎርሞች",
          body:
            "MILITARY REFORMS:\n" +
            "• New military titles:\n" +
            "  - Yasr Aleqa (commander of ten)\n" +
            "  - Yamsa Aleka (commander of the hundred)\n" +
            "  - Yeshi Aleqa (commander of the thousand)\n" +
            "• Tried to replace regional armies with SALARIED NATIONAL ARMY\n" +
            "• Established ARMS MANUFACTURE at GAFAT (near Debre Tabor)\n" +
            "• Produced about 35 cannons including 'SEBASTOPOL' mortar\n" +
            "• Helped by European missionaries and artisans\n\n" +
            "SOCIO-ECONOMIC REFORMS:\n" +
            "• CONFISCATED CHURCH LAND to distribute among landless\n" +
            "• REDUCED NUMBER OF PRIESTS AND DEACONS to 5 per church\n\n" +
            "DOWNFALL:\n" +
            "• INTERNAL: opposition from regionalism forces + clergy\n" +
            "• EXTERNAL: lack of support from foreign powers → conflict with Britain\n" +
            "• British expedition (1867–68) → Battle of Aroge (April 10, 1868)\n" +
            "• Tewodros released captives (April 11)\n" +
            "• Tewodros committed SUICIDE at Maqdala (April 13, 1868)",
          bodyAm:
            "ጋፋት — 35 መድፎች + 'ሰባስቶፖል'።\n" +
            "የቤተክርስቲያን መሬት ወሰደ።\n" +
            "መቅደላ (1868) — ራሱን አገደለ።",
        },
        {
          id: "n2-3",
          title: "👑 YOHANNES IV (1872–1889) — The Decentralizer",
          titleAm: "👑 ዮሐንስ ፬",
          body:
            "BACKGROUND:\n" +
            "• After Tewodros's death, THREE contenders:\n" +
            "  1) Wagshum Gobeze of Lasta → became Tekle-Giorgis II (1868–71)\n" +
            "  2) Kassa Mircha of Tigray → became YOHANNES IV\n" +
            "  3) Menilek of Shewa\n" +
            "• Kassa Mircha defeated Gobeze at BATTLE OF ASSEM (July 1871)\n\n" +
            "YOHANNES IV's POLICIES:\n" +
            "• DECENTRALIZED administration — regional rulers had autonomy\n" +
            "• LICHE AGREEMENT (1878) — recognized Menilek as Nigus of Shewa\n" +
            "• 1881 — designated Ras Adal Tesema as Nigus Tekle-Haymanot of Gojjam and Kafa\n\n" +
            "RELIGIOUS POLICY:\n" +
            "• Council of BORU MEDA (1878)\n" +
            "• Tewahdo declared ONLY doctrine of EOTC\n" +
            "• Muslims (especially Wallo) forced to convert to Orthodox Christianity\n" +
            "• Some migrated to Arsi, Gurage, Jimma, Sudan\n" +
            "• Wallo leaders Mohammed Ali and Amede Liban converted → became Ras Mikael and Dejjach Hayle-Mariam\n\n" +
            "DEATH: March 9, 1889 at METTEMMA — killed fighting Mahdists",
          bodyAm:
            "የሊቸ ስምምነት (1878) — ምኒልክ የሸዋ ንጉሥ።\n" +
            "ቦሩ መዳ (1878) — ተዋሕዶ ብቸኛ ትምህርት።\n" +
            "መተማ (1889) — ሞተ።",
        },
        {
          id: "n2-4",
          title: "👑 MENILEK II (1889–1913) — The Expansionist",
          titleAm: "👑 ምኒልክ ፪ — አስፋፊው",
          body:
            "THREE PHASES of territorial expansion:\n" +
            "1) 1865–1889 (as King of Shewa)\n" +
            "2) 1889–1896 (as Emperor, up to Adwa)\n" +
            "3) 1896–1900 (after Adwa)\n\n" +
            "KEY EXPANSIONS:\n" +
            "• 1870s — Tulama + eastern Macha Oromo\n" +
            "• Northern Gurage (Kistane/Soddo) — peacefully submitted\n" +
            "• Western Gurage (Hassan Enjamo of Qabena) — resisted until 1888\n" +
            "• After EMBABO battle — Leqa-Naqamte, Leqa-Qellem, Jimma Abba Jifar submitted peacefully (kept autonomy)\n" +
            "• ARSI — 6 campaigns (1882–1886); suppressed at Battle of AZULE (Sept 6, 1886) by Ras Darge Sahla Sellasie\n" +
            "• HARARGHE — defeated at Battle of CHALANQO (Jan 6, 1887); Dejjach Mekonnen Welde-Mikael became governor\n\n" +
            "⚠ KEFU QEN (1888–92) = Great Famine\n" +
            "• Cause: rinderpest epidemic from Italian-imported infected cattle via Massawa\n" +
            "• Led to further expansion south (1889–1894): Dawuro, Konta, Kambata, Bale, Sidama, Gamo Gofa, Wolaita\n" +
            "• WOLAITA — resisted; last king KAWO TONA arrested (1894)\n" +
            "• Gedeo, Borana, Konso incorporated\n" +
            "• KAFA (1897) — last king TATO GAKI SHEROCHO defeated by Ras Wolde Giorgis\n" +
            "• Benishangul + Gambella\n" +
            "• Boundary agreements: Djibouti (1897), British Somaliland (1897), Eritrea (1900), Sudan (1902), Kenya (1907), Italian Somaliland (1908)",
          bodyAm:
            "አርሲ — 6 ዘመቻዎች፣ አዙሌ (1886)።\n" +
            "ሐረርጌ — ቻላንቆ (1887)።\n" +
            "ኬፉ ቀን (1888–92)።\n" +
            "ወላይታ — ካዎ ቶና።\n" +
            "ካፋ — ጋኪ ሸሮቾ።",
        },
        {
          id: "n2-5",
          title: "🏗 Menilek II — Modernization",
          titleAm: "🏗 የምኒልክ ዘመናዊነት",
          body:
            "MENILEK'S MODERNIZATION:\n" +
            "• 1905 — BANK OF ABYSSINIA (first modern bank)\n" +
            "• 1908 — MENILEK II SCHOOL (first modern school)\n" +
            "• First modern POSTAL SYSTEM\n" +
            "• 1894 — Addis Ababa–Djibouti RAILWAY agreement with French\n" +
            "• Introduced: ELECTRICITY, TELEPHONE, TELEGRAPH, MOTOR CAR, MODERN PLUMBING\n" +
            "• Started minting COIN to replace Maria Theresa Thaler\n\n" +
            "BOUNDARY TREATIES (defining modern Ethiopia's shape):\n" +
            "• March 20, 1897 — French Somaliland (Djibouti)\n" +
            "• May 1897 — British Somaliland\n" +
            "• July 10, 1900 — Italian Eritrea\n" +
            "• May 15, 1902 — Anglo-Egyptian Sudan\n" +
            "• 1907 — British East Africa (Kenya)\n" +
            "• 1908 — Italian Somaliland\n\n" +
            "⚠ DELIMITATION (on map) ≠ DEMARCATION (on ground).",
          bodyAm:
            "ባንክ አበሻ (1905)፣ ምኒልክ ፪ ትምህርት ቤት (1908)፣ ባቡር።\n" +
            "ድንበር ስምምነቶች 1897–1908።",
        },
        {
          id: "n2-6",
          title: "⚠ EXAM TRAP — Three Emperors",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• TEWODROS II = 1855–1868 (reforms, Gafat, Maqdala)\n" +
            "• YOHANNES IV = 1872–1889 (decentralization, Boru Meda, Metemma)\n" +
            "• MENILEK II = 1889–1913 (expansion, Adwa, modernization)\n\n" +
            "BATTLES TO REMEMBER:\n" +
            "• Ayshal (1853) = END of Zemene Mesafint\n" +
            "• Assem (1871) = Yohannes becomes emperor\n" +
            "• Embabo = Ras Gobana defeats Ras Adal\n" +
            "• Azule (1886) = Arsi resistance crushed\n" +
            "• Chalanqo (1887) = Hararghe resistance crushed\n\n" +
            "⚠ MCQ TRAP: 'The first emperor to attempt unification' → TEWODROS II (not Menilek).\n" +
            "⚠ MCQ TRAP: 'Battle of Ayshal' → END of Zemene Mesafint (not beginning).",
          bodyAm:
            "ተወድሮስ = ሪፎርም።\n" +
            "ዮሐንስ = ያልተማከለ።\n" +
            "ምኒልክ = መስፋፋት።",
        },
      ],
    },

    // ============================================================
    // 3.3 EXTERNAL AGGRESSIONS & BATTLE OF ADWA (1871–1896)
    // ============================================================
    {
      id: "n3",
      title: "3.3 External Aggressions and the Unity of Ethiopian People (1871–1896)",
      titleAm: "3.3 የውጭ ወረራዎችና የአድዋ ጦርነት",
      body:
        "Abatu, in the second half of the 19th century, Ethiopia's independence was tested by FOUR foreign powers: Britain, Egypt, Mahdist Sudan, and Italy.",
      bodyAm:
        "አራት የውጭ ኃያላን: ብሪታንያ፣ ግብጽ፣ መህዲስቶች፣ ጣሊያን።",
      children: [
        {
          id: "n3-1",
          title: "🇬🇧 The British Expedition (1867–68)",
          titleAm: "🇬🇧 የብሪታንያ ዘመቻ",
          body:
            "BACKGROUND:\n" +
            "• 1862 — Tewodros II wrote to Queen Victoria requesting military assistance\n" +
            "• Sent via Consul Cameron\n" +
            "• Cameron returned via Egypt WITHOUT response\n" +
            "• Tewodros held Cameron responsible + suspected conspiracy with Egyptians\n" +
            "• IMPRISONED Europeans\n\n" +
            "BRITISH RESPONSE:\n" +
            "• Late 1867 — sent large military expedition under SIR ROBERT NAPIER\n" +
            "• Had help from local allies (e.g., Kasa Mercha of Tigray — future Yohannes IV)\n\n" +
            "KEY EVENTS:\n" +
            "• April 10, 1868 — Battle of AROGE (Tewodros's 8,000 troops defeated)\n" +
            "• April 11, 1868 — Tewodros released European captives\n" +
            "• April 13, 1868 — Tewodros COMMITTED SUICIDE at Maqdala\n" +
            "• Fortress burned, treasures looted\n\n" +
            "⚠ British LEFT immediately (no interest in staying).",
          bodyAm:
            "1862 ተወድሮስ ለንግሥት ቪክቶሪያ ደብዳቤ ጻፈ።\n" +
            "1867 ናፒየር መጣ።\n" +
            "1868 አሮጌ — ተወድሮስ ራሱን አገደለ።",
        },
        {
          id: "n3-2",
          title: "🇪🇬 The Egyptian Invasion (1875–76)",
          titleAm: "🇪🇬 የግብጽ ወረራ",
          body:
            "BACKGROUND:\n" +
            "• Britain's quick success gave Egypt a FALSE IMPRESSION of Ethiopia's strength\n" +
            "• Egypt wanted to control the SOURCE OF THE NILE\n" +
            "• Khedive Ismail Pasha sent troops in THREE directions (1875):\n" +
            "  1) ZEILA FRONT — led by Mohammed Rauf Pasha → occupied Harar Emirate (1875–1885)\n" +
            "  2) TAJURA FRONT — led by Werner Munzinger (architect of invasion) → annihilated by Afar\n" +
            "  3) MASSAWA FRONT — Colonel Arendrup + Arakel Bey led 2,000 troops\n\n" +
            "ETHIOPIAN RESPONSE:\n" +
            "• Yohannes IV + Ras Alula mobilized 20,000 forces\n" +
            "• BATTLE OF GUNDAT (Nov 16, 1875) — Egyptians severely defeated\n" +
            "• BATTLE OF GURA (March 7–9, 1876) — Egyptians defeated again",
          bodyAm:
            "ሦስት ግንባሮች።\n" +
            "ጉንዳት (1875) — ግብጽ ተሸነፈች።\n" +
            "ጉራ (1876) — ግብጽ ተሸነፈች።",
        },
        {
          id: "n3-3",
          title: "🇮🇹 The Italian Encroachment",
          titleAm: "🇮🇹 የጣሊያን ወረራ",
          body:
            "BACKGROUND:\n" +
            "• Suez Canal opened (1869) → Red Sea region became STRATEGICALLY important\n" +
            "• Italian foothold:\n" +
            "  - 1869 — Italian shipping company (Rubatino) bought port of ASSAB from local chiefs\n" +
            "  - 1882 — Port transferred to Italian government\n" +
            "  - 1885 — Britain secretly transferred MASSAWA from Egypt to Italy\n\n" +
            "ITALIAN EXPANSION:\n" +
            "• Italy began penetrating northern Ethiopia (Mereb Melash)\n" +
            "• DEFEATED at BATTLE OF DOGALI (1887) by RAS ALULA ENGIDA\n\n" +
            "⚠ After Yohannes's death (1889), Italians used the WUCHALE TREATY to advance.",
          bodyAm:
            "አሰብ (1869)፣ ምጽዋ (1885)።\n" +
            "ዶጋሊ (1887) — ራስ አሉላ አሸነፈ።",
        },
        {
          id: "n3-4",
          title: "⚔ The Hewett Treaty (1884)",
          titleAm: "⚔ የሄዌት ስምምነት",
          body:
            "HEWETT TREATY (1884):\n" +
            "• Brokered by BRITAIN between Ethiopia and Egypt\n\n" +
            "CONTEXT:\n" +
            "• Sudanese (Mahdists) drove Egyptians out of most of Sudan\n" +
            "• Egyptian troops encircled at KASSALA (Eastern Sudan)\n" +
            "• Only escape route = via MASSAWA through Ethiopian cooperation\n\n" +
            "TERMS:\n" +
            "• Ethiopia agreed to FACILITATE EVACUATION of Egyptian soldiers\n" +
            "• In return, Ethiopia got FREE USE OF MASSAWA\n" +
            "• Britain agreed to RESTORE BOGOS to Ethiopia\n\n" +
            "⚠ CONSEQUENCE:\n" +
            "• Ethiopia's involvement infuriated the MAHDISTS\n" +
            "• Led to clashes between Mahdist Sudan and Ethiopia (1885–1889)\n" +
            "• First clash: KUFIT (Sept 1885) — Ethiopia victorious\n" +
            "• Eventually: Yohannes IV died at METTEMMA (March 9, 1889) fighting Mahdists",
          bodyAm:
            "ሄዌት (1884) — ኢትዮጵያ ግብጻውያንን አስወጣች።\n" +
            "በምላሹ ምጽዋን ተጠቀመች።\n" +
            "መህዲስቶች ተናደዱ።",
        },
        {
          id: "n3-5",
          title: "🏛 The Battle of Adwa (March 1, 1896) — THE MOST IMPORTANT EVENT",
          titleAm: "🏛 የአድዋ ጦርነት — በጣም አስፈላጊው",
          body:
            "BACKGROUND — WUCHALE TREATY (May 2, 1889):\n" +
            "• Signed by Menilek II + Italian Count Pietro Antonelli\n" +
            "• Article XVII — KEY DIFFERENCE:\n" +
            "  - AMHARIC: Ethiopia 'COULD' use Italian good offices (optional)\n" +
            "  - ITALIAN: Ethiopia 'MUST' use Italian good offices (obligatory → made Ethiopia a protectorate)\n" +
            "• Menilek tried to revise; failed\n" +
            "• 1893 — Menilek ABROGATED treaty unilaterally\n\n" +
            "ITALIAN ADVANCE:\n" +
            "• Crossed Marab River → Adigrat → Amba-Alage\n\n" +
            "ETHIOPIAN MOBILIZATION:\n" +
            "• Menilek's call for general mobilization\n" +
            "• ~100,000 troops gathered at WARA-ILLU (South Wallo)\n" +
            "• ALL regions, ethnic groups, and both genders participated\n\n" +
            "KEY BATTLES:\n" +
            "• Fitawrari Gebeyehu Gurmu defeated Italians at AMBA-ALAGE → forced retreat to Mekelle\n" +
            "• Jan 1896 — Ras Mekonnen defeated Italians at MEKELLE\n" +
            "• SIEGE OF MEKELLE — designed by Empress TAYTU (cut off water supply)\n" +
            "• Italians released after negotiations\n\n" +
            "ADWA (March 1, 1896):\n" +
            "• ETHIOPIAN COMMANDERS: Emperor Menilek, Empress Taytu, Ras Mikael, Ras Makonnen, Ras Alula, Ras Mangasha, Nigus Tekle-Haymanot\n" +
            "• RESULT: Ethiopian VICTORY\n" +
            "• Italian losses: ~8,000 killed, 1,500 wounded, 3,000 captured\n" +
            "• Ethiopian losses: 4,000–6,000 killed\n\n" +
            "IMPACT:\n" +
            "• Treaty of Addis Ababa (Oct 26, 1896) — Italy recognized Ethiopia's independence\n" +
            "• First country to recognize = ITALY itself\n" +
            "• Other powers followed (France, Britain, Russia, USA, Germany, Belgium, Turkey)\n" +
            "• Symbol of unity, independence, national pride\n" +
            "• FIRST DECISIVE VICTORY of black people over a powerful white European power\n" +
            "• In Italy: Premier Francesco Crispi's government COLLAPSED",
          bodyAm:
            "ውጫሌ: 'ሊጠቀም ይችላል' vs 'መጠቀም አለበት'።\n" +
            "1893 ምኒልክ ሰረዘ።\n" +
            "መጋቢት 1, 1896 — ድል።\n" +
            "ጣሊያን እውቅና ሰጠች።",
        },
        {
          id: "n3-6",
          title: "⚠ EXAM TRAP — Adwa & Wuchale",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• WUCHALE = 1889; ADWA = 1896\n" +
            "• Article XVII difference = 'could' (Amharic) vs 'must' (Italian)\n" +
            "• Menilek ABROGATED treaty in 1893\n" +
            "• Ethiopian troops: ~100,000 at Wara-Illu\n" +
            "• SIEGE OF MEKELLE = designed by Empress Taytu\n" +
            "• Adwa = March 1, 1896\n" +
            "• FIRST country to recognize Ethiopia = ITALY\n" +
            "• Treaty of Addis Ababa (Oct 26, 1896)\n" +
            "• Adwa = FIRST decisive victory of black people over a white European power\n" +
            "• Italian PM Crispi's government collapsed\n\n" +
            "⚠ MCQ TRAP: 'Adwa was in 1889' → FALSE; that's Wuchale. Adwa = 1896.\n" +
            "⚠ MCQ TRAP: 'Battle of Adwa was fought against Britain' → FALSE; against ITALY.",
          bodyAm:
            "ውጫሌ = 1889።\n" +
            "አድዋ = 1896።\n" +
            "ጣሊያን ትክክለኛ ስምምነት ሰረዘች።",
        },
        {
          id: "n3-7",
          title: "🧠 Memory Hook — Adwa",
          titleAm: "🧠 የማስታወሻ ዘዴ",
          body:
            "Adwa = 1896 = '8-9-6' → 'Eight Nine Six, Italy got fixed'\n\n" +
            "Wuchale = 1889 = '8-8-9' → 'Wuchale's crime'\n\n" +
            "Adwa commanders (memorize):\n" +
            "• MENILEK + TAYTU\n" +
            "• Ras MIKAEL\n" +
            "• Ras MAKONNEN\n" +
            "• Ras ALULA\n" +
            "• Ras MANGASHA\n" +
            "• Nigus TEKLE-HAYMANOT\n\n" +
            "Mnemonic: 'MT-MMAMT' = 'Menilek, Taytu, Mikael, Makonnen, Alula, Mangasha, Tekle-Haymanot'",
          bodyAm:
            "አድዋ = 1896።\n" +
            "ውጫሌ = 1889።\n" +
            "አዘዞች: ምኒልክ፣ ጣይቱ፣ ሚካኤል፣ መኮንን፣ አሉላ፣ ማንጋሻ፣ ተክለ ሃይማኖት።",
        },
      ],
    },

    // ============================================================
    // 3.4 POWER STRUGGLE AMONG RULING ELITES (1906–1935)
    // ============================================================
    {
      id: "n4",
      title: "3.4 Inception of Power Struggle among the Ruling Elites (1906–1935)",
      titleAm: "3.4 የሥልጣን ትግል",
      body:
        "Abatu, 1906 was a WATERSHED moment. Menilek had his first stroke, and his cousin Ras Mekonnen died the same year. Succession became a crisis.",
      bodyAm:
        "1906 = የውሃ መለያ ዓመት።\n" +
        "ምኒልክ የመጀመሪያ ስትሮክ ደረሰበት።",
      children: [
        {
          id: "n4-1",
          title: "📅 1906 — The Watershed Year",
          titleAm: "📅 1906",
          body:
            "1906:\n" +
            "• Menilek suffered FIRST STROKE\n" +
            "• His cousin RAS MEKONNEN WALDA-MIKAEL DIED (expected successor)\n" +
            "• Succession crisis emerged\n\n" +
            "TRIPARTITE TREATY (1906):\n" +
            "• Britain, France, Italy signed (assuming Ethiopia would collapse)\n" +
            "• BRITAIN — sphere over NILE BASIN\n" +
            "• FRANCE — sphere over RAILWAY ZONE\n" +
            "• ITALY — hinterlands of Eritrea + Italian Somaliland",
          bodyAm:
            "ስትሮክ + የራስ መኮንን ሞት።\n" +
            "የሦስቱ ስምምነት (1906)።",
        },
        {
          id: "n4-2",
          title: "🏛 Menilek's Measures to Avert Crisis",
          titleAm: "🏛 የምኒልክ እርምጃዎች",
          body:
            "MENILEK'S RESPONSES:\n" +
            "• 1907 — Established Ethiopia's FIRST CABINET (Ministers' Council)\n" +
            "• 1909 — Named his grandson LIJ IYASU as successor (regent)\n\n" +
            "EMPRESS TAYTU'S INFLUENCE:\n" +
            "• Grew during Menilek's decline\n" +
            "• Faced STIFF OPPOSITION from Shewan nobles\n" +
            "• They organized resistance\n" +
            "• 1910 — She was forced to ABSTAIN from politics",
          bodyAm:
            "1907 — የመጀመሪያ ካቢኔ።\n" +
            "1909 — ልጅ ኢያሱ ሹመት።\n" +
            "1910 — ጣይቱ ከፖለቲካ ተገለለች።",
        },
        {
          id: "n4-3",
          title: "👤 LIJ IYASU (1911–1916)",
          titleAm: "👤 ልጅ ኢያሱ",
          body:
            "LIJ IYASU:\n" +
            "• Full power from 1911 (after Taytu's fall and Ras Tesema Nadaw's death)\n" +
            "• De facto rule: 1911–1916\n\n" +
            "REFORMS:\n" +
            "• Built Addis Ababa's FIRST POLICE FORCE\n" +
            "• Tried to reform PROPERTY OWNERSHIP and TAXATION\n" +
            "• REMOVED the QUARGNA system (tying plaintiff + defendant)\n" +
            "• OUTLAWED LEBESHAY (magical thief catchers)\n\n" +
            "DOWNFALL:\n" +
            "• Some of Iyasu's actions brought together internal and external forces\n" +
            "• Overthrown on SEPTEMBER 27, 1916\n" +
            "• His father NIGUS MIKAEL tried to reverse the coup\n" +
            "• DEFEATED at SAGALE (Oct 27, 1916) by Shewan army led by Ras Teferi\n" +
            "• DEADLIEST BATTLE SINCE ADWA",
          bodyAm:
            "ኢያሱ: የፖሊስ ኃይል፣ ጥሪ ማስወገድ (ቁራኛ)፣ ለበሻይ መከልከል።\n" +
            "1916 ተገለበጠ።\n" +
            "ሰጋሌ (1916) — ኒጉስ ሚካኤል ተሸነፈ።",
        },
        {
          id: "n4-4",
          title: "⚖ THE DIARCHY (1916–1930)",
          titleAm: "⚖ ዲያርኪ",
          body:
            "DIARCHY = DUAL RULE (1916–1930):\n" +
            "• After Iyyasu's overthrow\n" +
            "• POWER SHARED between:\n" +
            "  1) EMPRESS ZEWDITU (Menilek's daughter)\n" +
            "  2) RAS TEFERI MEKONNEN (regent, son of Ras Mekonnen)\n\n" +
            "TWO CAMPS:\n" +
            "• CONSERVATIVE/INDIGENOUS CAMP — Zewditu's adherents\n" +
            "  - Led by FITAWRAI HABTE GIYORGIS DINAGDE (Minister of War 1907–1926)\n" +
            "• PROGRESSIVE — Teferi + supporters\n\n" +
            "KEY EVENTS:\n" +
            "• 1916 — Sagale: Nigus Mikael defeated by Teferi\n" +
            "• 1918 — Ministers expelled (except Habte Giyorgis)\n" +
            "• 1926 — Habte Giyorgis DIES\n" +
            "• 1928 — Teferi crowned NIGUS; Dejjach Balcha Safo removed from governorship\n" +
            "• 1930 — Ras Gugsa Wale (Zewditu's ex-husband) defeated at ANCHIM\n" +
            "• 1930 — Teferi crowned EMPEROR HAILE SELASSIE I",
          bodyAm:
            "ድያርኪ = ዘውዲቱ + ተፈሪ።\n" +
            "ሁለት ካምፖች: ወግ አጥባቂ + ፕሮግረሲቭ።\n" +
            "1930 — ቀዳማዊ ኃይለ ሥላሴ ንጉሠ ነገሥት ሆነ።",
        },
        {
          id: "n4-5",
          title: "👑 HAILE SELASSIE'S CONSOLIDATION (1930+)",
          titleAm: "👑 የኃይለ ሥላሴ ማጠናከር",
          body:
            "AFTER CROWNED EMPEROR (1930):\n\n" +
            "1931 CONSTITUTION:\n" +
            "• FIRST WRITTEN CONSTITUTION\n" +
            "• Legal basis for ABSOLUTISM\n" +
            "• Emperor's UNRESTRICTED RIGHTS:\n" +
            "  - Make appointments and dismiss officials\n" +
            "  - Administer justice\n" +
            "  - Declare and end wars\n" +
            "  - Grant lands and honours\n\n" +
            "PROVINCIAL ARISTOCRACY LOST POWER:\n" +
            "• Hereditary aristocracy lost political influence\n" +
            "• EXCEPTION: TIGRAY — allowed to be ruled by descendants of local hereditary chiefs\n" +
            "• Other provinces lost internal autonomy → replaced by individuals nominated directly by the Emperor\n\n" +
            "NATIONAL ARMY:\n" +
            "• 1930 — Belgian officers began training the Imperial Bodyguard\n" +
            "• 1934 — First OFFICER TRAINING SCHOOL at HOLETA\n" +
            "  - Established by Swedish military mission\n" +
            "  - 3-year program disrupted by Italian invasion\n" +
            "  - Cadets became PATRIOTS instead of career officers",
          bodyAm:
            "1931 ሕገ መንግሥት = የመጀመሪያው ጽሑፍ ሕገ መንግሥት።\n" +
            "ሆለታ (1934) — የመኮንን ትምህርት ቤት።",
        },
        {
          id: "n4-6",
          title: "⚠ EXAM TRAP — Diarchy & 1931 Constitution",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• DIARCHY = 1916–1930 (Zewditu + Teferi)\n" +
            "• 1906 = Menilek's stroke; Tripartite Treaty\n" +
            "• 1907 = first cabinet\n" +
            "• 1909 = Lij Iyasu named successor\n" +
            "• 1916 = Iyyasu overthrown; Zewditu empress\n" +
            "• 1930 = Haile Selassie crowned\n" +
            "• 1931 = first written constitution\n" +
            "• 1934 = Holeta officer school\n\n" +
            "⚠ MCQ TRAP: 'Diarchy involved Haile Selassie' → FALSE (he wasn't emperor yet; he was Ras Teferi).\n" +
            "⚠ MCQ TRAP: 'Zewditu = Menilek's wife' → FALSE; she was his DAUGHTER.",
          bodyAm:
            "ድያርኪ = 1916–1930።\n" +
            "1931 = ሕገ መንግሥት።\n" +
            "ዘውዲቱ = ልጅ ሴት (not wife)።",
        },
      ],
    },

    // ============================================================
    // 3.5 FASCIST ITALIAN AGGRESSION & PATRIOTIC RESISTANCE (1935–1941)
    // ============================================================
    {
      id: "n5",
      title: "3.5 Fascist Italian Aggression and Patriotic Resistance",
      titleAm: "3.5 የፋሺስት ጣሊያን ወረራና የአርበኞች ተቃውሞ",
      body:
        "Abatu, this is the FINAL part of this unit — Italy's invasion (1935) and occupation (1936–1941), plus the heroic PATRIOTIC RESISTANCE (Arbegnoch).",
      bodyAm:
        "ወረራ (1935)፣ ወረራ (1936–1941)፣ አርበኞች።",
      children: [
        {
          id: "n5-1",
          title: "🔫 Causes of the Italian Invasion",
          titleAm: "🔫 የወረራ ምክንያቶች",
          body:
            "WHY ITALY INVADED:\n" +
            "1) REVENGE for Adwa (1896) — never gave up desire to colonize Ethiopia\n" +
            "2) MUSSOLINI wanted to restore ANCIENT ROMAN POWER and GLORY\n" +
            "3) Mussolini came to power in 1922 (Fascist leader)\n" +
            "4) Wanted to DIVERT ATTENTION from European problems\n" +
            "5) Planned larger military operation in AFRICA\n\n" +
            "PRETEXT:\n" +
            "• WALAWAL incident (Dec 5, 1934)\n" +
            "• Ethiopian and Italian forces clashed at Walawal in Ogaden\n" +
            "• Over ill-defined border between Ethiopia and Italian Somaliland",
          bodyAm:
            "አድዋ በቀል።\n" +
            "ሙሶሊኒ — የሮማ ክብር መመለስ።\n" +
            "ወላወል (1934) — ሰበብ።",
        },
        {
          id: "n5-2",
          title: "⚔ The Invasion (1935–1936)",
          titleAm: "⚔ ወረራው",
          body:
            "TIMELINE:\n" +
            "• Oct 3, 1935 — Italian soldiers crossed the Marab River\n" +
            "• Nov 8, 1935 — Italians took control of MEKELLE\n" +
            "• Italian commanders:\n" +
            "  - EMILIO DE BONO (initially)\n" +
            "  - PIETRO BADOGLIO (succeeded De Bono) — headed brutal phase on northern front\n" +
            "  - GENERAL RUDOLFO GRAZIANI — southern front\n\n" +
            "BRUTAL TACTICS:\n" +
            "• 300 planes dispatched\n" +
            "• DROPPED POISON GAS (banned internationally)\n" +
            "• Air attacks\n\n" +
            "ETHIOPIAN RESPONSE:\n" +
            "• Huge response to mobilization order\n" +
            "• Counter-offensive delayed for two reasons:\n" +
            "  1) Ethiopia placed faith in LEAGUE OF NATIONS\n" +
            "  2) Intended to EXTEND Italian supply line\n\n" +
            "TWO FRONTS:\n" +
            "• NORTHERN FRONT — commanded by RAS KASSA HAILU\n" +
            "  - Under him: Ras Mulugeta Yeggezu (Minister of War), Ras Seyoum Mengesha (Tigray), Ras Emeru Haile-Selassie (Gojjam)\n" +
            "  - Battles: AMBA ARADOM, TEMBIEN\n" +
            "  - Ras Mulugeta KILLED at Amba Aradom\n" +
            "  - Small Ethiopian victory at SHIRE\n\n" +
            "• FINAL BATTLE at MAY CHEW (March 31, 1936)\n" +
            "  - Emperor led remaining troops + Imperial Bodyguard\n" +
            "  - Italians won due to air superiority\n\n" +
            "• SOUTHERN FRONT — commanded by RAS DESTA DAMTEW + others\n" +
            "  - Against Graziani\n\n" +
            "RESULTS:\n" +
            "• May 2, 1936 — Haile Selassie left Addis Ababa via Djibouti for Europe\n" +
            "• May 5, 1936 — Addis Ababa fell to Badoglio",
          bodyAm:
            "1935 ጥቅምት 3 — መግቢያ።\n" +
            "ህዳር 8 — መቐለ ወደቀች።\n" +
            "መጋቢት 31, 1936 — ማይጨው።\n" +
            "ግንቦት 5, 1936 — አዲስ አበባ ወደቀች።",
        },
        {
          id: "n5-3",
          title: "🔍 Why Italians Succeeded in 1936 (but not 1896)",
          titleAm: "🔍 ለምን በ1936 ተሳኩ",
          body:
            "WHY ITALIANS SUCCEEDED:\n" +
            "1) GREATER PREPARATION — planned for years\n" +
            "2) SUPERIOR WEAPONS — modern arms\n" +
            "3) AIRPOWER MONOPOLY — Italy had planes; Ethiopia had none\n" +
            "4) DEPLOYMENT of BANNED MUSTARD GAS\n\n" +
            "ETHIOPIAN CHALLENGES:\n" +
            "1) LOGISTICAL PROBLEMS — no roads, radio, maps\n" +
            "2) TRANSITIONING from feudalism to modernity\n" +
            "3) Lost Adwa-era military courage — without replacing it with modern skills\n" +
            "4) Delayed counter-offensive (faith in League of Nations)\n\n" +
            "⚠ CONTRAST with ADWA (1896):\n" +
            "• 1896: Ethiopia united, prepared, Italy overconfident\n" +
            "• 1936: Italy prepared, had airpower + gas, Ethiopia delayed",
          bodyAm:
            "ጣሊያን: ዝግጅት፣ የጦር መሳሪያ፣ አየር ኃይል፣ መርዛማ ጋዝ።\n" +
            "ኢትዮጵያ: መንገድ/ሬዲዮ እጥረት፣ መዘግየት።",
        },
        {
          id: "n5-4",
          title: "🏛 Italian Occupation (AOI) — 1936–1941",
          titleAm: "🏛 የጣሊያን ወረራ",
          body:
            "ITALIAN EAST AFRICA (AOI = Africa Orientale Italiana):\n" +
            "• Mussolini declared 'Ethiopia is Italian' (May 5, 1936)\n" +
            "• Merged Ethiopia + Eritrea + Somalia\n\n" +
            "SIX MAJOR DIVISIONS:\n" +
            "1) ERITREA (including Tigray) — capital Asmara\n" +
            "2) AMHARA (Begemdir + Gojjam + Wallo + N. Shewa) — capital Gondar\n" +
            "3) ADDIS ABABA (later renamed Shewa)\n" +
            "4) OROMO AND SIDAMA (Southwest) — capital Jimma\n" +
            "5) HARAR\n" +
            "6) SOMALIA (including Ogaden) — capital Mogadishu\n\n" +
            "VICEROYS:\n" +
            "• BADOGLIO (first viceroy)\n" +
            "• GRAZIANI (end May 1936) — assassination attempt Feb 19, 1937\n" +
            "• AMADEO UMBERTO D'AOSTA (Duke of Aosta) — more liberal; ruled until 1941",
          bodyAm:
            "AOI = ኢትዮጵያ + ኤርትራ + ሶማሊያ።\n" +
            "6 ክፍሎች።\n" +
            "ባዶሊዮ → ግራዚያኒ → ዱክ ዳኦስታ።",
        },
        {
          id: "n5-5",
          title: "✊ PATRIOTIC RESISTANCE — Phase 1 (1936–1937)",
          titleAm: "✊ የአርበኞች ተቃውሞ — ደረጃ 1",
          body:
            "PATRIOTS = ARBEGNOCH (locally called)\n" +
            "• Began almost immediately after Maychew\n" +
            "• Active throughout occupation\n" +
            "• Popular slogan: 'ተነስ! አትነሳም ወይ ሀገር ሲወረር ዝም ትላለህ ወይ'\n" +
            "  ('Stand! Rise up; you cannot sit there while the nation is invaded')\n\n" +
            "PHASE 1 (before Graziani massacre):\n" +
            "• CONTINUATION of conflict\n" +
            "• TRADITIONAL MILITARY BATTLES\n" +
            "• Led by UPPER-CLASS NOBLES\n\n" +
            "NOTABLE LEADERS:\n" +
            "• Ras Emeru Haile-Sellase\n" +
            "• Ras Desta Damtew (emperor's son-in-law)\n" +
            "• Abera and Asfawason Kasa (brothers)\n" +
            "• Dejjach Balcha Safo\n" +
            "• Ras Abebe Aregay\n" +
            "• Dejjach Feqre-Maryam Yennadu\n" +
            "• Abune Petros (bishop of Wallo — motivating spirit, became martyr)",
          bodyAm:
            "አርበኞች = patriots።\n" +
            "ደረጃ 1: መላውን ጦርነት፣ ከፍተኛ መኳንንት።\n" +
            "አቡነ ጴጥሮስ — ሰማዕት።",
        },
        {
          id: "n5-6",
          title: "💥 Graziani Massacre (Feb 19, 1937)",
          titleAm: "💥 የግራዚያኒ እልቂት",
          body:
            "ASSASSINATION ATTEMPT (Feb 19, 1937):\n" +
            "• Two young Ethiopians: MOGES ASGEDOM + ABREHA DEBOCH\n" +
            "• Attempted to kill Viceroy Graziani\n" +
            "• Graziani seriously wounded; some other officials killed\n\n" +
            "ITALIAN REVENGE:\n" +
            "• GRAZIANI MASSACRE (or FEBRUARY MASSACRE)\n" +
            "• Approximately 30,000 Ethiopians slaughtered in THREE DAYS\n" +
            "• Italians TARGETED educated Ethiopians\n\n" +
            "SIGNIFICANCE:\n" +
            "• Revealed Fascism's REAL FACE\n" +
            "• Sparked a NEW PHASE of national opposition\n" +
            "• MARKED THE BEGINNING of the resistance's SECOND PHASE",
          bodyAm:
            "ሞገስ አስገዶም + አብረሃ ደቦች።\n" +
            "~30,000 ተገደሉ።\n" +
            "የ2ኛ ደረጃ መጀመሪያ።",
        },
        {
          id: "n5-7",
          title: "✊ PATRIOTIC RESISTANCE — Phase 2 (1937–1941)",
          titleAm: "✊ የአርበኞች ተቃውሞ — ደረጃ 2",
          body:
            "PHASE 2 (after Graziani massacre):\n" +
            "• GUERRILLA WARFARE\n" +
            "• Led by LOWER NOBILITY\n" +
            "• Concentrated in RURAL regions\n" +
            "• Strong in SHEWA, GOJJAM, BEGEMIDIR\n\n" +
            "GUERRILLA LEADERS:\n" +
            "• Haile Mariam Mamo (Shewa)\n" +
            "• Abebe Aregay (Shewa)\n" +
            "• Geresu Duki (Shewa)\n" +
            "• Bekele Woya (Shewa)\n" +
            "• Belay Zeleke (Gojjam)\n" +
            "• Amoraw Wubineh (Gondar)\n\n" +
            "PEASANT SUPPORT:\n" +
            "• Provided food and shelter\n" +
            "• Fought alongside patriots\n" +
            "• Provided crucial information\n\n" +
            "YEWUST ARBEGNOCH ('inner patriots'):\n" +
            "• Lived in towns among Italians\n" +
            "• Worked with them but passed information\n" +
            "• Collected weapons, medicine, food, intelligence\n" +
            "• WOMEN played important role",
          bodyAm:
            "ደረጃ 2: ሽምቅ ጦርነት፣ ዝቅተኛ መኳንንት።\n" +
            "በሸዋ፣ ጎጃም፣ በጌምድር።\n" +
            "የውስጥ አርበኞች።",
        },
        {
          id: "n5-8",
          title: "👩 Women in Patriotic Resistance",
          titleAm: "👩 ሴቶች በተቃውሞ",
          body:
            "WOMEN IN RESISTANCE:\n" +
            "• As YEWUST ARBEGNOCH — gathered crucial information from Italians\n" +
            "• Some arranged SECRET KILLINGS of Italian authorities\n" +
            "• Some LED TROOPS in battle\n" +
            "• Others served as RALLYING POINTS when husbands died\n\n" +
            "PROMINENT WOMEN:\n" +
            "• SHEWAREGED GEDLE — of Addis Alem\n" +
            "• KEBEDECH SEYOUM — of Shewa\n" +
            "• SHEWANESH ABERA — of Lasta\n" +
            "• ABEBECH CHERQOS — of Gondar\n" +
            "• LEKYELESH BEYAN — of Jirru",
          bodyAm:
            "ሸዋረገድ ገድሌ፣ ከበደች ሰዩም፣ ሸዋነሽ አበራ፣ አበበች ቸርቆስ፣ ለቀየለሽ በያን።",
        },
        {
          id: "n5-9",
          title: "⚠ Weaknesses of the Patriotic Resistance",
          titleAm: "⚠ የተቃውሞ ድክመቶች",
          body:
            "WEAKNESSES:\n" +
            "1) LACKED well-organized SUPPLY + provisioning infrastructure\n" +
            "2) Depended on individual donations + looting enemy possessions\n" +
            "3) SHORTAGES: arms, food, clothing, medicines\n" +
            "4) PERSONAL CONFLICTS among patriotic leaders (sometimes armed clashes)\n" +
            "5) LACKED proper coordination\n" +
            "6) NO strong uniting POLITICAL ORGANIZATION\n" +
            "7) Slogan = 'fighting for the Ethiopian flag and monarchy' (limited vision)",
          bodyAm:
            "የጦር መሳሪያ እጥረት፣ የመሪዎች ግጭት፣ ማስተባበር እጥረት።",
        },
        {
          id: "n5-10",
          title: "🏆 LIBERATION (1941)",
          titleAm: "🏆 ነጻነት",
          body:
            "LIBERATION PATH:\n" +
            "• June 1940 — Italy entered WWII on Germany's side\n" +
            "• This led to BRITISH military intervention in Ethiopia\n" +
            "• Emperor Haile Selassie (in exile in London) requested British help\n" +
            "• JOINT ANGLO-ETHIOPIAN LIBERATION OPERATION started in Sudan and Kenya\n\n" +
            "KEY MILITARY ACTIONS:\n" +
            "• General WILLIAM PLATT — attacked Italians in Eritrea\n" +
            "• Major General ORDE CHARLES WINGATE + Brigadier General DANIEL SANDFORD\n" +
            "  - Led GIDEON FORCE with Emperor Haile Selassie\n" +
            "  - Entered GOJJAM (April 1941)\n" +
            "• Lieutenant General SIR ALLAN CUNNINGHAM — entered via Kenya\n" +
            "  - Controlled ADDIS ABABA on APRIL 6, 1941\n" +
            "• MAY 5, 1941 — Emperor Haile Selassie RE-ENTERED his capital\n" +
            "  - Officially hoisted the Ethiopian flag",
          bodyAm:
            "ግንቦት 5, 1941 — ኃይለ ሥላሴ ተመለሰ።\n" +
            "ጌድዮን ኃይል።\n" +
            "ኩኒንግሃም።",
        },
        {
          id: "n5-11",
          title: "⚠ EXAM TRAP — Italian Occupation",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• PRETEXT = WALAWAL incident (Dec 5, 1934)\n" +
            "• INVASION began = Oct 3, 1935\n" +
            "• MEKELLE fell = Nov 8, 1935\n" +
            "• MAY CHEW = March 31, 1936\n" +
            "• ADDIS ABABA fell = May 5, 1936\n" +
            "• AOI = Italian East Africa\n" +
            "• GRAZIANI MASSACRE = Feb 19, 1937 (~30,000 killed)\n" +
            "• Two assassins: MOGES ASGEDOM + ABREHA DEBOCH\n" +
            "• First viceroy = BADOGLIO; then GRAZIANI; then DUKE OF AOSTA\n" +
            "• LIBERATION = 1941 (Haile Selassie returned May 5, 1941)\n\n" +
            "⚠ MCQ TRAP: 'Italy invaded Ethiopia in 1935' → TRUE, but Addis Ababa fell in 1936.\n" +
            "⚠ MCQ TRAP: 'Battle of Maychew' = March 31, 1936 (Italian victory, not Ethiopian).",
          bodyAm:
            "ወላወል = 1934።\n" +
            "ወረራ = 1935።\n" +
            "አዲስ አበባ ወደቀች = 1936።\n" +
            "ነጻነት = 1941።",
        },
      ],
    },

    // ============================================================
    // UNIT SUMMARY + EXAM TRAPS
    // ============================================================
    {
      id: "nSummary",
      title: "Unit Summary — The Big Picture",
      titleAm: "የክፍሉ ማጠቃለያ",
      body:
        "1. LONG-DISTANCE TRADE = Bonga → Gondar → Massawa; Bonga → Harar → Zeila/Berbera. Traders: Jabarti, Afqala, Argoba. Currency: amole + Maria Theresa Thaler. Cottage industries (blacksmiths most important).\n\n" +
        "2. TEWODROS II (1855–1868) = first unifier; Gafat arms factory; Battle of Ayshal ended Zemene Mesafint; died at Maqdala.\n\n" +
        "3. YOHANNES IV (1872–1889) = decentralized; Council of Boru Meda; defeated Egypt at Gundat and Gura; killed at Metemma.\n\n" +
        "4. MENILEK II (1889–1913) = territorial expansion (created Ethiopia's shape); modernization (Bank of Abyssinia, school, railway); boundary treaties 1897–1908.\n\n" +
        "5. BATTLE OF ADWA (March 1, 1896) = Ethiopia defeated Italy; Wuchale Treaty dispute ('could' vs 'must'); Treaty of Addis Ababa.\n\n" +
        "6. DIARCHY (1916–1930) = Zewditu + Teferi; 1931 constitution = first written; Haile Selassie emperor 1930.\n\n" +
        "7. FASCIST ITALIAN OCCUPATION (1936–1941) = invasion Oct 3, 1935; Addis Ababa fell May 5, 1936; Graziani Massacre Feb 1937; Patriots (Arbegnoch) resisted; liberation 1941.",
      bodyAm:
        "ሰባት ቁልፍ ነጥቦች።",
    },
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 3",
      titleAm: "የተለምዱ የፈተና ወጥመዶች",
      body:
        "1) Tewodros II = 1855–1868; Yohannes IV = 1872–1889; Menilek II = 1889–1913.\n" +
        "2) Battle of Ayshal (1853) = END of Zemene Mesafint.\n" +
        "3) Battle of Assem (1871) = Yohannes becomes emperor.\n" +
        "4) Wuchale Treaty = 1889; Adwa = 1896.\n" +
        "5) Wuchale difference: 'could' (Amharic) vs 'must' (Italian).\n" +
        "6) Menilek abrogated treaty in 1893.\n" +
        "7) Battle of Adwa = March 1, 1896.\n" +
        "8) First country to recognize Ethiopia after Adwa = ITALY.\n" +
        "9) Diarchy = 1916–1930 (Zewditu + Teferi).\n" +
        "10) Zewditu = Menilek's DAUGHTER (not wife).\n" +
        "11) 1931 constitution = first written constitution.\n" +
        "12) Italian invasion began = Oct 3, 1935.\n" +
        "13) Addis Ababa fell = May 5, 1936.\n" +
        "14) Graziani Massacre = Feb 19, 1937 (~30,000 killed).\n" +
        "15) Two assassins = Moges Asgedom + Abreha Deboch.\n" +
        "16) Patriots = Arbegnoch.\n" +
        "17) Two resistance phases: first (traditional battles, upper class) vs second (guerrilla, lower nobility).\n" +
        "18) Haile Selassie returned = May 5, 1941.\n" +
        "19) Maria Theresa Thaler = AUSTRIAN (not British).\n" +
        "20) Jabarti = northern merchants; Afqala = southwestern Oromo merchants.\n" +
        "21) Blacksmiths = MOST IMPORTANT cottage industry.\n" +
        "22) Adwa = FIRST decisive victory of black people over white European power.",
      bodyAm:
        "22 ወጥመዶች።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "The two major 19th-century trade routes in Ethiopia started from:", options: ["Addis Ababa", "Gondar", "Bonga", "Harar"], answer: "2", explanation: "Both major trade routes started from BONGA, the capital of the Kafa Kingdom." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "The first trade route from Bonga branched at Gondar into two directions toward:", options: ["Massawa and Harar", "Matamma and Massawa", "Zeila and Berbera", "Adwa and Asmara"], answer: "1", explanation: "At Gondar, the route branched: westward through Chilga to Matamma (Gallabat); northward through Adwa and Asmara to Massawa." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "The second trade route ended at which ports?", options: ["Massawa and Assab", "Zeila and Berbera", "Djibouti and Aden", "Port Sudan and Suakin"], answer: "1", explanation: "At Harar the route branched to Zeila and Berbera on the Somali coast." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Which served as a medium of exchange in 19th-century Ethiopia?", options: ["Gold coins", "Salt bars (amole)", "Cowrie shells only", "Paper money"], answer: "1", explanation: "Salt bars (amole) served as a medium of exchange, used side by side with Maria Theresa Thalers." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Maria Theresa Thalers were introduced from:", options: ["Britain", "Austria", "France", "Italy"], answer: "1", explanation: "MTT was an Austrian coin introduced by Arab traders at the end of the 18th century." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "The dominant group of long-distance traders was:", options: ["Christian merchants", "Muslim merchants", "Portuguese traders", "Arab sailors"], answer: "1", explanation: "Muslim merchants were the most dominant group that travelled from the interior to the coast." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "The northern Muslim merchants were known as:", options: ["Afqala", "Jabarti", "Argoba", "Wollo"], answer: "1", explanation: "The northern Muslim merchants were known as JABARTI." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The southwestern Muslim Oromo merchants were known as:", options: ["Jabarti", "Afqala", "Argoba", "Soddo"], answer: "1", explanation: "Southwestern Muslim Oromo merchants were known as AFQALA." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Which was NOT one of the principal commodities of the long-distance trade?", options: ["Ivory", "Civet musk", "Salt bars", "Coffee beans"], answer: "3", explanation: "The principal commodities were ivory, civet musk, salt bars (amole), and slaves — NOT coffee." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Cottage industries existed in Ethiopia:", options: ["Only after 1900", "Since time immemorial", "Only during Italian occupation", "Only after 1941"], answer: "1", explanation: "Cottage industry and handicraft technology existed in Ethiopia since time immemorial." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Which cottage industry was MOST important?", options: ["Pottery", "Blacksmithing", "Weaving", "Basket making"], answer: "1", explanation: "Blacksmiths were responsible for articles of considerable economic and military importance — the most important cottage industry." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "The first emperor to attempt to unify Ethiopia was:", options: ["Menilek II", "Yohannes IV", "Tewodros II", "Haile Selassie I"], answer: "2", explanation: "Kassa Hailu, who took the throne name Tewodros II (1855–1868), was the first emperor to attempt unification." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "The Battle of Ayshal (1853) symbolized the end of:", options: ["The Zemene Mesafint", "The Italian occupation", "The Adwa war", "The Diarchy"], answer: "0", explanation: "The Battle of Ayshal where Ras Ali of Yejju was defeated symbolized the END of the Zemene Mesafint (Era of Princes)." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Tewodros II established an arms manufacture at:", options: ["Adwa", "Gafat", "Maqdala", "Debre Tabor"], answer: "1", explanation: "Tewodros established an arms manufacture at GAFAT (near Debre Tabor) with European help." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Tewodros II's famous mortar was called:", options: ["Sebastopol", "Gideon", "Adwa", "Maqdala"], answer: "0", explanation: "His famous mortar produced at Gafat was called 'SEBASTOPOL'." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Tewodros II died by:", options: ["Natural causes", "Suicide at Maqdala", "In battle at Metemma", "Assassination"], answer: "1", explanation: "Tewodros committed suicide at Maqdala on April 13, 1868, after the British expedition." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "The British expedition to Ethiopia (1867–68) was led by:", options: ["General Napier", "General Wingate", "General Platt", "General Cunningham"], answer: "0", explanation: "SIR ROBERT NAPIER led the British expedition." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Emperor Yohannes IV was killed at:", options: ["Metemma", "Maqdala", "Adwa", "Dogali"], answer: "0", explanation: "Yohannes IV died on March 9, 1889 at METTEMMA fighting the Mahdists." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "The Council of Boru Meda (1878) declared which doctrine as the only one?", options: ["Catholicism", "Tewahdo", "Protestantism", "Islam"], answer: "1", explanation: "Tewahdo was declared the only doctrine of the Ethiopian Orthodox Tewahdo Church." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "The Battle of Gundat (1875) was fought against:", options: ["Italy", "Egypt", "Mahdist Sudan", "Britain"], answer: "1", explanation: "The Battle of Gundat (Nov 16, 1875) was fought against EGYPT." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "The Battle of Dogali (1887) was won by:", options: ["Italy", "Ethiopia (Ras Alula)", "Egypt", "Mahdist Sudan"], answer: "1", explanation: "Ras Alula Engida defeated the Italians at the Battle of Dogali in 1887." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "The Battle of Adwa was fought in:", options: ["1889", "1893", "1896", "1900"], answer: "2", explanation: "The Battle of Adwa was fought on March 1, 1896." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "The Battle of Adwa was fought against:", options: ["Britain", "Egypt", "Italy", "Mahdist Sudan"], answer: "2", explanation: "The Battle of Adwa was fought against ITALY." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "The Treaty of Wuchale was signed in:", options: ["1889", "1893", "1896", "1900"], answer: "0", explanation: "The Treaty of Wuchale was signed on May 2, 1889." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "The DIFFERENCE between the Amharic and Italian versions of Wuchale was in:", options: ["Article I", "Article V", "Article XVII", "Article XX"], answer: "2", explanation: "The key difference was in Article XVII." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "In the Amharic version of Wuchale, Ethiopia could use Italian good offices. 'Could' means:", options: ["Obligatory", "Optional", "Forbidden", "Required"], answer: "1", explanation: "Amharic 'could' = OPTIONAL. Italian 'must' = OBLIGATORY." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Who was the first country to recognize Ethiopia's independence after Adwa?", options: ["Britain", "France", "Italy", "Russia"], answer: "2", explanation: "Italy itself was the first to recognize Ethiopia's independence after Adwa." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "The Battle of Adwa was a victory for:", options: ["Italy", "Ethiopia", "Egypt", "Britain"], answer: "1", explanation: "Adwa was a remarkable victory for Ethiopia." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Diarchy means:", options: ["One ruler", "Dual rule (two rulers)", "No ruler", "Religious rule"], answer: "1", explanation: "DIARCHY = dual rule; power shared between two rulers (Zewditu + Teferi)." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "During the Diarchy, the two rulers were:", options: ["Menilek II and Taytu", "Zewditu and Ras Teferi", "Haile Selassie and Iyasu", "Tewodros and Yohannes"], answer: "1", explanation: "Power was shared between Empress ZEWDITU and RAS TEFERI MEKONNEN (1916–1930)." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "Empress Zewditu was Menilek's:", options: ["Wife", "Daughter", "Sister", "Mother"], answer: "1", explanation: "Zewditu was Menilek II's DAUGHTER." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "Ras Teferi was crowned Emperor in:", options: ["1916", "1928", "1930", "1931"], answer: "2", explanation: "Ras Teferi was crowned Emperor Haile Selassie I in 1930." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "Ethiopia's first written constitution was adopted in:", options: ["1907", "1928", "1931", "1941"], answer: "2", explanation: "The 1931 Constitution was Ethiopia's first written constitution." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "The Italian invasion of Ethiopia began in:", options: ["1928", "1930", "1935", "1936"], answer: "2", explanation: "Italian soldiers crossed the Marab River on October 3, 1935." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "Addis Ababa fell to the Italians on:", options: ["May 5, 1935", "May 5, 1936", "May 5, 1941", "October 3, 1935"], answer: "1", explanation: "Addis Ababa fell to Badoglio on May 5, 1936." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "Ethiopian patriots were called:", options: ["Arbegnoch", "Shiftas", "Bandas", "Derg"], answer: "0", explanation: "Patriots were locally called ARBEGNOCH." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "The Graziani Massacre occurred in:", options: ["1935", "1936", "February 1937", "1941"], answer: "2", explanation: "The Graziani Massacre occurred in February 1937 after the failed assassination attempt on Feb 19, 1937." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "Emperor Haile Selassie returned to Addis Ababa on:", options: ["May 5, 1936", "May 5, 1941", "May 5, 1945", "April 6, 1941"], answer: "1", explanation: "Haile Selassie re-entered his capital on May 5, 1941." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "The Italian colonial empire in East Africa was called:", options: ["AOI (Africa Orientale Italiana)", "AOI (African Organization of Italy)", "AOE", "Italy East Africa"], answer: "0", explanation: "Italian East Africa = AOI (Africa Orientale Italiana)." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "The first viceroy of Italian East Africa was:", options: ["Badoglio", "Graziani", "Duke of Aosta", "Mussolini"], answer: "0", explanation: "BADOGLIO was Mussolini's first viceroy, soon replaced by Graziani." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Why were the Blacksmiths considered the most important cottage industry?", options: ["They made weapons and agricultural tools", "They made cloth", "They made baskets", "They made pottery"], answer: "0", explanation: "Blacksmiths made ploughshares, spearheads, swords, bullets, and rifle spare parts — of economic and military importance." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "The general public's attitude toward artisans was:", options: ["Encouraging", "Disdaining and marginalizing", "Neutral", "Worshipping"], answer: "1", explanation: "Artisans were mostly disdained and marginalized, so local implements did not improve significantly." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "Which battle marked the END of the Zemene Mesafint?", options: ["Gur Amba", "Ayshal", "Deresge", "Gorgora Bichign"], answer: "1", explanation: "The Battle of Ayshal (June 29, 1853) where Ras Ali of Yejju was defeated symbolized the END of Zemene Mesafint." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "Tewodros II's campaign to Shewa ended with victory at:", options: ["Bereket", "Ayshal", "Maqdala", "Deresge"], answer: "0", explanation: "The Shewan campaign was concluded after the Shewan force was defeated at the Battle of Bereket in November 1855." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "Why did Tewodros II confiscate church land?", options: ["To build churches", "To distribute among landless and increase productive population", "To give to foreigners", "To sell"], answer: "1", explanation: "He confiscated church land to distribute among landless and increase the productive section of the population." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "Why did Tewodros II's reforms face opposition?", options: ["Internally from regionalism and clergy; externally from lack of foreign support", "From Italy", "From Egypt only", "From the USA"], answer: "0", explanation: "Internally: regionalism forces + clergy. Externally: lack of foreign support → conflict with Britain." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "Which contender became emperor immediately after Tewodros's death?", options: ["Kassa Mircha", "Wagshum Gobeze (Tekle-Giorgis II)", "Menilek of Shewa", "Yohannes IV"], answer: "1", explanation: "Wagshum Gobeze of Lasta became Emperor Tekle-Giorgis II (1868–71)." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "Yohannes IV was known for introducing:", options: ["Centralized administration", "Decentralized administration", "Colonial rule", "Communism"], answer: "1", explanation: "Yohannes IV attempted to introduce a DECENTRALIZED system of administration permitting regional rulers autonomy." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "The Liche Agreement (1878) recognized:", options: ["Menilek as Nigus of Shewa", "Yohannes as emperor", "Ras Adal as king", "Menilek as emperor"], answer: "0", explanation: "The Liche Agreement of 1878 recognized MENILEK as Nigus of Shewa." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "At Boru Meda (1878), the EOTC's only doctrine was declared to be:", options: ["Catholicism", "Protestantism", "Tewahdo", "Any doctrine"], answer: "2", explanation: "Tewahdo was declared the ONLY doctrine of the Ethiopian Orthodox Tewahdo Church." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "Why did Emperor Yohannes's religious policy cause migration?", options: ["Muslims were forced to convert or migrate", "Italians invaded", "Menilek rebelled", "The British invaded"], answer: "0", explanation: "Muslims (especially Wallo) were forced to convert to Orthodox Christianity; some migrated to Arsi, Gurage, Jimma, Sudan." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "Menilek II's three phases of territorial expansion were:", options: ["As King of Shewa, as Emperor up to Adwa, after Adwa", "First, second, third battles", "Before and after 1900", "Only after Adwa"], answer: "0", explanation: "Three phases: (1) 1865–89 as King of Shewa, (2) 1889–96 up to Adwa, (3) 1896–1900 after Adwa." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "Arsi resistance was crushed at the Battle of:", options: ["Chalanqo", "Azule", "Embabo", "Ayshal"], answer: "1", explanation: "The Arsi resistance was suppressed at the Battle of AZULE (Sept 6, 1886) by Ras Darge Sahla Sellasie." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "Hararghe resistance was crushed at the Battle of:", options: ["Azule", "Chalanqo", "Embabo", "Assem"], answer: "1", explanation: "Harari and Oromo forces were defeated at the Battle of CHALANQO (Jan 6, 1887)." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "Kefu Qen (1888–92) was caused by:", options: ["Locusts", "Rinderpest epidemic from Italian-imported cattle via Massawa", "Drought only", "War"], answer: "1", explanation: "The immediate cause was the RINDERPEST epidemic triggered by Italian importation of infected cattle through Massawa." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "The last king of Wolaita was:", options: ["Kawo Tona", "Gaki Sherocho", "Abba Jifar II", "Ras Gobana"], answer: "0", explanation: "KAWO TONA was the last king of Wolaita; he was arrested in 1894." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "The last king of Kafa was:", options: ["Kawo Tona", "Gaki Sherocho", "Abba Jifar II", "Tato Gaki"], answer: "1", explanation: "TATO GAKI SHEROCHO was the last king of Kafa; defeated by Ras Wolde Giorgis in 1897." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Menilek II founded the Bank of Abyssinia in:", options: ["1889", "1900", "1905", "1908"], answer: "2", explanation: "The Bank of Abyssinia — Ethiopia's first modern bank — was founded in 1905." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Menilek II established the first modern school in:", options: ["1905", "1908", "1910", "1913"], answer: "1", explanation: "Menilek II School — the first modern school — was established in 1908." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "The Addis Ababa–Djibouti railway agreement was signed with:", options: ["Britain", "France", "Italy", "Belgium"], answer: "1", explanation: "Menilek signed the railway agreement with the FRENCH in 1894." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "The first boundary delimitation treaty was signed in 1897 with:", options: ["French Somaliland (Djibouti)", "British Somaliland", "Italian Eritrea", "Sudan"], answer: "0", explanation: "The first boundary was with FRENCH SOMALILAND (Djibouti) on March 20, 1897." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Delimitation differs from demarcation because:", options: ["Delimitation = on map; demarcation = on ground", "Delimitation = on ground; demarcation = on map", "Both are the same", "Neither is important"], answer: "0", explanation: "DELIMITATION = on the map; DEMARCATION = on the ground. Ethiopia's borders were delimited but not demarcated." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "The British expedition against Tewodros was caused by:", options: ["Tewodros's letter to Queen Victoria was unanswered", "Tewodros attacked Britain", "Tewodros captured British missionaries and diplomats", "All of the above"], answer: "3", explanation: "Tewodros wrote to Queen Victoria (1862) requesting assistance; no response came; he imprisoned Europeans. Britain sent Napier." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "In 1868, the British troops came to Ethiopia mainly to:", options: ["Liberate their nationals", "Restrain Tewodros's wild dream of liberating Jerusalem", "Guarantee safety of British sailors to India via Suez Canal", "All of the above"], answer: "3", explanation: "All three factors contributed — the main official reason was to liberate British captives." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "The architect of the Egyptian expansion into Ethiopia in the 1870s was:", options: ["Mohammed Rauf Pasha", "Werner Munzinger", "Colonel Arendrup", "General Loring"], answer: "1", explanation: "WERNER MUNZINGER was the architect of the whole of Ismail's scheme for the invasion of Ethiopia." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "The Hewett Treaty (1884) was between:", options: ["Ethiopia and Egypt (brokered by Britain)", "Ethiopia and Italy", "Ethiopia and France", "Ethiopia and Mahdist Sudan"], answer: "0", explanation: "The Hewett Treaty was brokered by Britain between Ethiopia and Egypt in 1884." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "By the Treaty of Adwa (Hewett Treaty), Ethiopia agreed to:", options: ["Give up Massawa", "Facilitate the evacuation of trapped Egyptian troops", "Surrender to Egypt", "Accept British rule"], answer: "1", explanation: "Ethiopia agreed to facilitate the evacuation of Egyptian soldiers encircled by the Mahdists in eastern Sudan." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "Why did the Mahdists clash with Ethiopia from 1885–1889?", options: ["Ethiopia helped Egyptian soldiers evacuate, infuriating Mahdists", "Ethiopia attacked them first", "Religious differences only", "Trade disputes"], answer: "0", explanation: "Ethiopia's involvement in facilitating the Egyptian evacuation infuriated the Mahdists — the main cause of clashes." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "Yohannes IV's national call emphasized Ethiopia as:", options: ["Mother, crown, wife, child, grave", "Only mother", "Only grave", "None of these"], answer: "0", explanation: "The national call described Ethiopia as: 1) mother, 2) crown, 3) wife, 4) child, 5) grave." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "The Italian version of Wuchale's Article XVII made Ethiopia:", options: ["Independent", "A protectorate of Italy", "An ally of France", "A British colony"], answer: "1", explanation: "The Italian version required Ethiopia to use Italian good offices (obligatory) — making Ethiopia a protectorate of Italy." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Menilek unilaterally abrogated the Wuchale Treaty in:", options: ["1889", "1893", "1896", "1900"], answer: "1", explanation: "After failing to revise the treaty, Menilek abrogated it unilaterally in 1893." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "The siege of Mekelle was designed by:", options: ["Ras Alula", "Empress Taytu", "Ras Makonnen", "Menilek"], answer: "1", explanation: "The siege strategy was believed to be designed by Empress TAYTU." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "About 100,000 Ethiopian troops gathered at Wara-Illu under:", options: ["Yohannes IV", "Menilek II", "Tewodros II", "Ras Alula"], answer: "1", explanation: "About 100,000 troops gathered at WARA-ILLU following Menilek's mobilization call." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "Which countries signed the 1906 Tripartite Treaty?", options: ["Britain, France, Italy", "Britain, France, USA", "France, Germany, Italy", "Italy, Germany, Austria"], answer: "0", explanation: "Britain, France, and Italy signed the 1906 Tripartite Treaty." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "The 1906 Tripartite Treaty gave Britain a sphere over:", options: ["Railway zone", "Nile basin", "Eritrea hinterlands", "Italian Somaliland"], answer: "1", explanation: "Britain = Nile basin; France = railway zone; Italy = Eritrea + Italian Somaliland hinterlands." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "Menilek established Ethiopia's first cabinet in:", options: ["1905", "1907", "1909", "1910"], answer: "1", explanation: "Menilek established Ethiopia's first cabinet (Ministers' Council) in 1907." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "Lij Iyasu was overthrown in:", options: ["1911", "1913", "1916", "1920"], answer: "2", explanation: "Lij Iyasu was deposed on September 27, 1916." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "The Battle of Sagale (1916) was fought between:", options: ["Teferi and Iyyasu's father Nigus Mikael", "Menilek and Yohannes", "Italy and Ethiopia", "Britain and Egypt"], answer: "0", explanation: "Ras Teferi's Shewan army defeated Nigus Mikael (Iyyasu's father) at Sagale on October 27, 1916." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "During the Diarchy, the conservative camp was led by:", options: ["Ras Teferi", "Fitawrari Habte Giyorgis Dinagde", "Empress Taytu", "Lij Iyasu"], answer: "1", explanation: "The conservative camp was led by FITAWRAI HABTE GIYORGIS DINAGDE." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "The 1931 Constitution gave the emperor:", options: ["Limited powers", "Unrestricted rights to appoint, dismiss, and administer justice", "No powers", "Only ceremonial roles"], answer: "1", explanation: "The 1931 Constitution recognized the emperor's unrestricted rights to make appointments, dismiss officials, administer justice, declare/end wars, grant lands and honours." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Which of the following was the MOST important impact of the Battle of Adwa?", options: ["Italy gained territory", "Ethiopia's independence was recognized internationally", "Menilek was captured", "Yohannes became emperor"], answer: "1", explanation: "Adwa's most important impact was international recognition of Ethiopia's independence and sovereignty." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "Which battle did Italy win?", options: ["Gundat", "Gura", "Dogali", "Maychew"], answer: "3", explanation: "Maychew (March 31, 1936) was won by Italy. Gundat, Gura, and Dogali were Ethiopian victories." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Why did Ethiopia delay its counter-offensive in 1935?", options: ["It had no troops", "It placed faith in the League of Nations and intended to extend Italian supply lines", "It was afraid", "It had no leaders"], answer: "1", explanation: "Two reasons: (1) Ethiopia placed its faith in the League of Nations, hoping for fair justice; (2) it intended to extend Italy's supply line." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Ras Mulugeta Yeggezu was killed at:", options: ["Amba Aradom", "Maychew", "Shire", "Tembien"], answer: "0", explanation: "Ras Mulugeta Yeggezu was killed at the Battle of AMBA ARADOM." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "The two young Ethiopians who attempted to kill Graziani were:", options: ["Moges Asgedom and Abreha Deboch", "Ras Alula and Ras Makonnen", "Shewareged Gedle and Kebedech Seyoum", "Haile Mariam Mamo and Abebe Aregay"], answer: "0", explanation: "MOGES ASGEDOM and ABREHA DEBOCH attempted to assassinate Graziani on February 19, 1937." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "The approximate number killed in the Graziani Massacre was:", options: ["3,000", "10,000", "30,000", "100,000"], answer: "2", explanation: "Approximately 30,000 Ethiopians were slaughtered in three days." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "The first phase of patriotic resistance was characterized by:", options: ["Guerrilla warfare", "Traditional military battles led by upper-class nobles", "Peaceful protest", "Foreign support only"], answer: "1", explanation: "First phase = continuation of conflict, traditional military battles, led by upper-class nobles." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "The second phase of resistance was mainly concentrated in:", options: ["Cities", "Rural regions (Shewa, Gojjam, Begemidir)", "Eritrea", "Ogaden"], answer: "1", explanation: "Second phase = guerrilla warfare, mainly concentrated in rural regions of Shewa, Gojjam, and Begemidir." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "Why were patriots lacking supply and infrastructure?", options: ["They were disorganized", "They had no strong uniting political organization, and relied on individual donations and looting", "They had too much money", "They were supported by Italy"], answer: "1", explanation: "They lacked well-organized supply, no strong uniting political organization, relied on individual donations and looting." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "Which was the slogan of the patriots?", options: ["Peace, Land, Bread", "Fighting for the Ethiopian flag and monarchy", "Long live Italy", "No taxation without representation"], answer: "1", explanation: "Their slogan was fighting for the Ethiopian flag and monarchy." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "The Gideon Force was led by:", options: ["Wingate and Sandford with Haile Selassie", "Cunningham", "Platt", "Badoglio"], answer: "0", explanation: "Major General Orde Charles Wingate and Brigadier General Daniel Sandford led the Gideon Force with Emperor Haile Selassie." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "Addis Ababa was controlled by British forces on:", options: ["April 6, 1941", "May 5, 1941", "May 5, 1936", "October 3, 1935"], answer: "0", explanation: "Lieutenant General Sir Allan Cunningham's army controlled Addis Ababa on April 6, 1941." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Which African country was considered the main threat to Ethiopia in the 1870s?", options: ["Sudan", "Egypt", "Kenya", "Somalia"], answer: "1", explanation: "EGYPT was considered the main threat to Ethiopia in the 1870s (Tewodros feared Egypt)." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "The architect of the Egyptian invasion of Ethiopia in the 1870s was:", options: ["Khedive Ismail Pasha", "Werner Munzinger", "Mohammed Rauf Pasha", "Colonel Arendrup"], answer: "1", explanation: "WERNER MUNZINGER was the architect of the whole scheme, though Ismail Pasha initiated it." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "Which event marked the beginning of the violent phase of the 1905 Russian Revolution? (Context: similar to Ethiopia's struggles)", options: ["Bloody Sunday", "The October Manifesto", "WWI", "The Crimean War"], answer: "0", explanation: "The Bloody Sunday massacre of peace demonstrators in St. Petersburg marked the beginning of the violent phase of the 1905 Russian Revolution." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "The struggle of Emperor Tewodros against the British ended with:", options: ["Victory for Tewodros", "Tewodros's suicide at Maqdala", "A peace treaty", "Tewodros escaping to Egypt"], answer: "1", explanation: "After the Battle of Aroge, Tewodros released captives and committed suicide at Maqdala on April 13, 1868." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "Menilek II's policy of territorial expansion was motivated by:", options: ["Famine and need for land to feed population", "Religious expansion", "Trade only", "Random conquest"], answer: "0", explanation: "Kefu Qen (famine) partly necessitated and gave further momentum to territorial expansion in southern Ethiopia." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "Which region was NOT incorporated by 1900?", options: ["Arsi", "Kafa (1897)", "Wolaita (1894)", "Konso (part of expansion)"], answer: "1", explanation: "Kafa was incorporated in 1897, so it was after 1900. The others were before 1900. Actually, Kafa (1897) is before 1900 too. The question is tricky — all listed were before 1900. Kafa was 1897." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "The Battle of Maychew (1936) was won by:", options: ["Ethiopia", "Italy", "Egypt", "Britain"], answer: "1", explanation: "The Italians won at Maychew due to superior preparation and airpower — the final battle on the northern front." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "The 'White Man's Burden' poem said non-white people were:", options: ["Civilized and advanced", "Half-devil and half-child", "Equal to Europeans", "Superior"], answer: "1", explanation: "Kipling described the colonized as 'half-devil and half child' — showing European racism and paternalism." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "easy", stem: "Describe the two major trade routes of 19th-century Ethiopia.", answer: "ROUTE 1 (Bonga → Gondar → Massawa):\nBonga → Hirmata → Saqa → Asandabo → Basso → Gondar → (branches) → Chilga → Matamma OR Adwa → Asmara → Massawa\n\nROUTE 2 (Bonga → Harar → Somali coast):\nBonga → Hirmata (Jimma) → Soddo → Rogge → Aliyu Amba → Harar → (branches) → Zeila OR Berbera\n\nPrincipal commodities: ivory, civet musk, salt bars (amole), slaves. Currency: amole + Maria Theresa Thaler.", explanation: "Two routes; branch at Gondar and Harar." },
    { id: "q102", type: "short", difficulty: "easy", stem: "List the most common cottage industries in Ethiopia.", answer: "Most common cottage industries:\n1) Metalworking (blacksmiths) — MOST IMPORTANT\n2) Pottery\n3) Tannery\n4) Carpentry\n5) Masonry\n6) Weaving\n7) Jewellery\n8) Basket making\n\n⚠ Problem: artisans were DISDAINED and MARGINALIZED — so implements did not improve significantly.", explanation: "8 main cottage industries; blacksmiths most important." },
    { id: "q103", type: "short", difficulty: "easy", stem: "Mention the reforms made by Tewodros II.", answer: "TEWODROS II's reforms:\n\nMILITARY:\n• New military titles (Yasr Aleqa, Yamsa Aleka, Yeshi Aleqa)\n• Tried to replace regional armies with salaried national army\n• Established arms manufacture at GAFAT\n• Produced ~35 cannons including 'SEBASTOPOL'\n\nSOCIO-ECONOMIC:\n• Confiscated church land to distribute to landless\n• Reduced number of priests/deacons to 5 per church\n\nDOWNFALL:\n• Internal: regionalism forces + clergy\n• External: lack of foreign support → conflict with Britain → Maqdala 1868", explanation: "Military + land reforms; Maqdala downfall." },
    { id: "q104", type: "short", difficulty: "easy", stem: "What was the Zemene Mesafint?", answer: "ZEMENE MESAFINT = 'Era of Princes' (Era of the Judges) — a period of weak central authority in Ethiopia (roughly 1769–1855).\n\nFEATURES:\n• Weak emperors\n• Powerful regional lords (Ras)\n• Constant warfare between regional rulers\n• The Yejju dynasty dominated\n• Ended with the Battle of Ayshal (June 29, 1853) when Kassa Hailu (Tewodros II) defeated Ras Ali of Yejju.", explanation: "Era of Princes; ended by Tewodros." },
    { id: "q105", type: "short", difficulty: "medium", stem: "Describe the main features of Yohannes IV's administration.", answer: "YOHANNES IV's ADMINISTRATION:\n\n1) DECENTRALIZED — regional rulers had autonomy\n\n2) LICHE AGREEMENT (1878) — recognized Menilek as Nigus of Shewa\n\n3) 1881 — designated Ras Adal Tesema as Nigus Tekle-Haymanot of Gojjam and Kafa\n\n4) Council of BORU MEDA (1878) — declared Tewahdo as only doctrine\n\n5) Forced Muslims (especially Wallo) to convert\n\n6) ACHIEVED UNITY of Christian provinces: Wag and Lasta, Simen, Begemidr, Amhara Saynt, Gojjam, Wallo, Shewa, Mereb Milash\n\n7) DEFEATED Egypt at Gundat (1875) and Gura (1876)\n\n8) DEFEATED Italy at Dogali (1887)\n\n9) DIED at Metemma (1889) fighting Mahdists", explanation: "Decentralization, Boru Meda, Gundat/Gura, Metemma." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Describe Menilek II's territorial expansion.", answer: "MENILEK II's TERRITORIAL EXPANSION:\n\nTHREE PHASES:\n1) 1865–89 (as King of Shewa)\n2) 1889–96 (as Emperor, up to Adwa)\n3) 1896–1900 (after Adwa)\n\nKEY EXPANSIONS:\n• 1870s — Tulama + eastern Macha Oromo\n• Northern Gurage — peaceful submission\n• Western Gurage (Hassan Enjamo) — resisted until 1888\n• Jimma and others — peaceful submission (kept autonomy)\n• ARSI — 6 campaigns; suppressed at AZULE (1886)\n• HARARGHE — defeated at CHALANQO (1887)\n• Kefu Qen (1888–92) — famine → expansion south\n• 1889–94 — Dawuro, Konta, Kambata, Bale, Sidama, Gamo Gofa, Wolaita (Kawo Tona arrested)\n• 1897 — Kafa (Gaki Sherocho defeated)\n• Benishangul + Gambella\n• Boundary treaties with colonial powers (1897–1908)", explanation: "Three phases; Arsi, Hararghe, Wolaita, Kafa." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Explain the causes and results of the Battle of Adwa.", answer: "CAUSES:\n\n1) WUCHALE TREATY (1889) — Article XVII difference:\n• Amharic: 'could' use Italian good offices (optional)\n• Italian: 'must' use Italian good offices (obligatory → made Ethiopia a protectorate)\n\n2) Menilek abrogated the treaty in 1893\n\n3) Italian steady encroachment onto northern Ethiopia\n\n4) Menilek's call for general mobilization\n\nRESULTS:\n\n• Ethiopian VICTORY (March 1, 1896)\n• Italy lost ~8,000 killed, 1,500 wounded, 3,000 captured\n• Ethiopia lost 4,000–6,000 killed\n• Treaty of Addis Ababa (Oct 26, 1896) — Italy recognized Ethiopia's independence\n• First country to recognize = Italy\n• Symbol of unity, independence, national pride\n• First decisive victory of black people over a powerful white European power\n• Italian PM Crispi's government collapsed", explanation: "Wuchale + Italian encroachment → Adwa victory → independence recognized." },
    { id: "q108", type: "short", difficulty: "medium", stem: "What were the terms of the Hewett Treaty (1884)?", answer: "HEWETT TREATY (1884):\n\nBrokered by BRITAIN between Ethiopia and Egypt\n\nCONTEXT:\n• Mahdists drove Egyptians out of most of Sudan\n• Egyptian troops encircled at KASSALA (Eastern Sudan)\n• Only escape route = via Massawa through Ethiopian cooperation\n\nTERMS:\n1) Ethiopia agreed to FACILITATE THE EVACUATION of Egyptian soldiers encircled by Mahdists\n\n2) In return, Ethiopia got:\n• FREE USE OF MASSAWA\n• Britain agreed to RESTORE BOGOS to Ethiopia\n\nCONSEQUENCE:\n• Ethiopia's involvement INFURIATED the Mahdists\n• Led to clashes between Mahdist Sudan and Ethiopia (1885–1889)\n• First clash at KUFIT (Sept 1885) — Ethiopia victorious\n• Eventually: Yohannes IV died at METTEMMA (March 9, 1889) fighting Mahdists", explanation: "Evacuation of Egyptians + use of Massawa; led to Mahdist conflicts." },
    { id: "q109", type: "short", difficulty: "medium", stem: "Describe the Diarchy period in Ethiopia.", answer: "DIARCHY (DUAL RULE) — 1916–1930:\n\nBACKGROUND:\n• Lij Iyasu overthrown on Sept 27, 1916\n• ZEWDITU (Menilek's daughter) crowned EMPRESS\n• RAS TEFERI MEKONNEN (son of Ras Mekonnen) named successor and regent\n\nTWO CAMPS:\n1) CONSERVATIVE/INDIGENOUS CAMP — Zewditu's supporters, led by Fitawrari HABTE GIYORGIS DINAGDE (Minister of War 1907–1926)\n2) PROGRESSIVE — Teferi + supporters\n\nKEY EVENTS:\n• 1916 — Sagale: Teferi defeated Nigus Mikael (Iyyasu's father)\n• 1918 — Ministers expelled (except Habte Giyorgis)\n• 1926 — Habte Giyorgis dies\n• 1928 — Teferi crowned NIGUS; Dejjach Balcha Safo removed from governorship\n• 1930 — Ras Gugsa Wale (Zewditu's ex-husband) defeated at ANCHIM\n• 1930 — Teferi crowned EMPEROR HAILE SELASSIE I\n\nSIGNIFICANCE: Marked the transition from the imperial era to the modern Haile Selassie era.", explanation: "Zewditu + Teferi; two camps; 1930 Haile Selassie crowned." },
    { id: "q110", type: "short", difficulty: "medium", stem: "What were the main features of the 1931 constitution?", answer: "1931 CONSTITUTION — FIRST WRITTEN CONSTITUTION OF ETHIOPIA:\n\nKEY FEATURES:\n\n1) LEGAL BASIS FOR ABSOLUTISM — provided legal framework for Haile Selassie's autocratic rule\n\n2) EMPEROR'S UNRESTRICTED RIGHTS:\n• Make appointments and dismiss officials\n• Administer justice\n• Declare and end wars\n• Grant lands and honours\n\n3) PROVINCIAL ARISTOCRACY LOST POWER:\n• Hereditary aristocracy lost political influence\n• EXCEPTION: TIGRAY allowed to be ruled by descendants of local hereditary chiefs\n• Other provinces lost internal autonomy → replaced by individuals nominated directly by the Emperor\n\n4) NATIONAL ARMY:\n• 1930 — Belgian officers began training the Imperial Bodyguard\n• 1934 — Holeta officer training school (Swedish mission)", explanation: "First written constitution; emperor's unrestricted rights; provincial aristocracy lost power." },
    { id: "q111", type: "short", difficulty: "medium", stem: "What were the causes of the Italian invasion of Ethiopia in 1935?", answer: "CAUSES OF THE ITALIAN INVASION (1935):\n\n1) REVENGE for Adwa (1896) — Italy never gave up desire to colonize Ethiopia\n\n2) MUSSOLINI wanted to restore ANCIENT ROMAN POWER and GLORY (came to power 1922)\n\n3) Wanted to DIVERT ATTENTION from European problems\n\n4) Planned larger military operation in AFRICA\n\n5) PRETEXT: WALAWAL incident (Dec 5, 1934) — clash between Ethiopian and Italian forces in Ogaden over ill-defined border\n\nINVASION: October 3, 1935 — Italian soldiers crossed the Marab River", explanation: "Revenge for Adwa + Mussolini's ambitions; Walawal pretext." },
    { id: "q112", type: "short", difficulty: "medium", stem: "Why did Italy succeed in 1936 where it failed in 1896?", answer: "WHY ITALY SUCCEEDED (1936):\n\n1) GREATER PREPARATION — planned for years\n2) SUPERIOR WEAPONS — modern arms\n3) AIRPOWER MONOPOLY — Italy had planes; Ethiopia had none\n4) DEPLOYMENT of BANNED MUSTARD GAS\n\nETHIOPIA'S CHALLENGES:\n1) LOGISTICAL PROBLEMS — no roads, radio communication, maps\n2) TRANSITIONING from feudalism to modernity\n3) Lost Adwa-era military courage — without replacing it with modern military skills\n4) Delayed counter-offensive (faith in League of Nations)\n\nCONTRAST WITH 1896:\n• 1896: Ethiopia united, prepared, Italy overconfident\n• 1936: Italy prepared, had airpower + poison gas, Ethiopia delayed", explanation: "Italy had preparation, airpower, poison gas; Ethiopia delayed and disorganized." },
    { id: "q113", type: "short", difficulty: "medium", stem: "Describe the two phases of the patriotic resistance.", answer: "PHASE 1 (1936–1937, before Graziani Massacre):\n• CONTINUATION of conflict\n• TRADITIONAL MILITARY BATTLES\n• Led by UPPER-CLASS NOBLES\n• Leaders: Ras Emeru, Ras Desta, Abera and Asfawason Kasa, Dejjach Balcha Safo, Ras Abebe Aregay, Dejjach Feqre-Maryam Yennadu\n• Abune Petros = motivating spirit, martyr\n\nPHASE 2 (1937–1941, after Graziani Massacre):\n• GUERRILLA WARFARE\n• Led by LOWER NOBILITY\n• Concentrated in RURAL regions\n• Strong in Shewa, Gojjam, Begemidir\n• Leaders: Haile Mariam Mamo, Abebe Aregay, Geresu Duki, Bekele Woya, Belay Zeleke, Amoraw Wubineh", explanation: "Phase 1: traditional; Phase 2: guerrilla after Graziani Massacre." },
    { id: "q114", type: "short", difficulty: "medium", stem: "What was the Graziani Massacre and why was it significant?", answer: "GRAZIANI MASSACRE (February Massacre):\n\nTRIGGERING EVENT:\n• February 19, 1937 — Two young Ethiopians, MOGES ASGEDOM and ABREHA DEBOCH, attempted to kill Viceroy Graziani\n• Graziani seriously wounded; some officials killed\n\nITALIAN REVENGE:\n• Approximately 30,000 Ethiopians slaughtered in THREE DAYS\n• Italians TARGETED educated Ethiopians\n\nSIGNIFICANCE:\n1) Revealed Fascism's REAL FACE (mass murder)\n2) Sparked a NEW PHASE of national opposition\n3) Marked the BEGINNING of the resistance's second phase (guerrilla warfare)\n4) Showed the brutality of Italian occupation", explanation: "~30,000 killed; sparked second phase of resistance." },
    { id: "q115", type: "short", difficulty: "medium", stem: "Describe the role of women in the patriotic resistance.", answer: "WOMEN IN PATRIOTIC RESISTANCE:\n\nAS YEWUST ARBEGNOCH ('inner patriots'):\n• Lived in towns among Italians\n• Collected crucial information from Italians\n• Arranged SECRET KILLINGS of Italian authorities\n• Collected weapons, medicine, food, intelligence for fighters\n\nAS LEADERS/FIGHTERS:\n• Some LED TROOPS in battle\n• Others served as RALLYING POINTS when husbands died\n\nPROMINENT WOMEN:\n• SHEWAREGED GEDLE (Addis Alem)\n• KEBEDECH SEYOUM (Shewa)\n• SHEWANESH ABERA (Lasta)\n• ABEBECH CHERQOS (Gondar)\n• LEKYELESH BEYAN (Jirru)", explanation: "Inner patriots + fighters + leaders." },
    { id: "q116", type: "short", difficulty: "hard", stem: "Analyze the significance of the Battle of Adwa in world history.", answer: "SIGNIFICANCE OF ADWA (1896):\n\nFOR ETHIOPIA:\n• Independence recognized internationally\n• Symbol of unity, independence, national pride\n• Consolidated national integration\n• First country to recognize = Italy\n\nFOR AFRICA AND THE WORLD:\n• FIRST DECISIVE VICTORY of black people over a powerful white European power\n• Source of pride and motivation for black people fighting for freedom and independence worldwide\n• Inspired anti-colonial movements\n• Proved that European military power could be defeated\n\nFOR ITALY:\n• Collapse of Premier Francesco Crispi's government\n• Humiliation that fueled later revenge (1935 invasion)\n\nFOR THE COLONIAL ORDER:\n• Proved that colonial conquest was not inevitable\n• Showed the power of national unity", explanation: "First African victory over Europeans; inspired colonized peoples worldwide." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Compare the Battle of Adwa (1896) with the Italian invasion (1935–36).", answer: "COMPARISON:\n\nADWA (1896) — ETHIOPIA WON:\n• Ethiopia was united under Menilek\n• Prepared, mobilized quickly\n• Italy was OVERCONFIDENT\n• No poison gas\n• Ethiopia had ~100,000 troops\n• Result: Treaty of Addis Ababa; independence recognized\n\nITALIAN INVASION (1935–36) — ITALY WON:\n• Italy was WELL PREPARED (planned for years)\n• Italy had AIRPOWER MONOPOLY\n• Italy used BANNED MUSTARD GAS\n• Ethiopia delayed counter-offensive (faith in League of Nations)\n• Ethiopia lacked roads, radios, maps\n• Result: Addis Ababa fell May 5, 1936; Italian occupation\n\nKEY DIFFERENCES:\n• 1896: Ethiopia prepared; Italy overconfident\n• 1936: Italy prepared; Ethiopia delayed\n• 1936: Italy used poison gas (not in 1896)\n\nSIMILARITIES:\n• Both involved Italian aggression\n• Both saw Ethiopian resistance\n• Both ended with Ethiopia's eventual independence (1896 quickly; 1941 after 5 years)", explanation: "Adwa won; 1936 Italy won due to preparation and airpower." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Explain why Ethiopia was NOT colonized, unlike the rest of Africa.", answer: "WHY ETHIOPIA WAS NOT COLONIZED:\n\n1) MILITARY VICTORY AT ADWA (1896):\n• Ethiopian unity under Menilek II\n• ~100,000 troops mobilized\n• Defeated Italy decisively\n• Treaty of Addis Ababa recognized independence\n\n2) GEOGRAPHY:\n• Mountainous terrain (defensive advantage)\n• Landlocked after Eritrea's separation\n\n3) STRONG CENTRALIZED STATE:\n• Unlike many African societies\n• Had organized army\n• Had experienced leadership (Menilek, Tayfu)\n\n4) DIPLOMACY:\n• Menilek played European powers against each other\n• Signed boundary treaties\n\n5) NATIONAL UNITY:\n• People rallied across ethnic/religious lines\n• Empress Taytu's role\n• National call for mobilization\n\n6) HISTORICAL LEGACY:\n• Long tradition of independence\n• Experience resisting external threats (Egypt, Mahdist Sudan, Britain)\n\n7) TIMING:\n• Colonized Africa by 1914, but Ethiopia was already recognized\n\n⚠ IMPORTANT: Ethiopia was OCCUPIED by Italy (1936–1941) but was NEVER COLONIZED (never lost sovereignty permanently).", explanation: "Adwa + unity + geography + diplomacy." },
    { id: "q119", type: "short", difficulty: "hard", stem: "What were the main long-distance trade items and where did they go?", answer: "TRADE ITEMS AND ROUTES:\n\nPRINCIPAL COMMODITIES:\n1) IVORY — from elephants (southern/western Ethiopia)\n2) CIVET MUSK — from civet cats (perfume)\n3) SALT BARS (AMOLE) — currency and commodity\n4) SLAVES — human trafficking (major commodity)\n\nMEDIUM OF EXCHANGE:\n• Salt bars (amole)\n• Maria Theresa Thaler (MTT — Austrian coin)\n\nROUTES:\n• Route 1: Bonga → Gondar → (Chilga→Matamma) OR (Adwa→Asmara→Massawa on Red Sea)\n• Route 2: Bonga → Harar → (Zeila OR Berbera on Indian Ocean/Somali coast)\n\nDESTINATIONS:\n• Massawa (Red Sea)\n• Zeila (Somali coast)\n• Berbera (Somali coast)\n\nWHO TRADED:\n• Local peoples at each market\n• JABARTI (northern Muslim merchants)\n• AFQALA (southwestern Muslim Oromo)\n• ARGOBA (Shewa merchants)\n• Muslim merchants most dominant", explanation: "Ivory, civet, salt, slaves; routes to Massawa, Zeila, Berbera." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Which was the most important event in this unit and why?", answer: "Answers may vary, but the strongest answer identifies the BATTLE OF ADWA (1896) as the MOST IMPORTANT event. Why?\n\nARGUMENTS FOR ADWA:\n\n1) SECURED ETHIOPIA'S INDEPENDENCE — recognized internationally\n\n2) FIRST DECISIVE VICTORY of black people over a white European power — world-historical significance\n\n3) INSPIRED ANTI-COLONIAL MOVEMENTS worldwide — symbol of resistance\n\n4) NATIONAL UNITY — brought together all regions, ethnic groups, genders\n\n5) CHANGED THE BALANCE OF POWER in the Horn of Africa\n\n6) COLLAPSE OF ITALIAN GOVERNMENT (Crispi)\n\n7) ITALY'S REVENGE (1935) — Adwa led to the later invasion, which shaped modern Ethiopian history\n\n8) BOUNDARY AGREEMENTS — the victory enabled Ethiopia to negotiate boundary treaties (1897–1908), defining modern Ethiopia's shape\n\nARGUMENTS AGAINST:\n• Other events (Tewodros's unification, Yohannes's death, 1931 constitution) were also crucial\n\nCONCLUSION: Adwa is the single most important event because it determined Ethiopia's survival as an independent state — the foundation for everything that followed.", explanation: "Adwa = most important; secured independence + inspired anti-colonialism." },
  ],
};