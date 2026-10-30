import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 CITIZENSHIP (CIVICS) — UNIT 5
// HUMAN RIGHTS
// Source: AAEB Grade 8 Citizenship Education Student Textbook (pp. 149–175)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8CivicsCh5: Chapter = {
  id: "ch5",
  number: 5,
  title: "Human Rights",
  titleAm: "ሰብዓዊ መብቶች",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. What Are Human Rights?",
      titleAm: "1. ሰብዓዊ መብቶች ምንድን ናቸው?",
      body:
        "Banchi, HUMAN RIGHTS are rights enjoyed solely by humans simply BECAUSE THEY ARE HUMANS — with NO other conditions attached. They are UNIVERSAL, NATURAL, ETERNAL, INALIENABLE, and INVIOLABLE.",
      bodyAm:
        "ባንቺ፣ ሰብዓዊ መብቶች ሰው በመሆን ብቻ የሚያገኛቸው መብቶች ናቸው። ሁለንተናዊ፣ ተፈጥሯዊ፣ ዘላቂ፣ የማይነጠቁና የማይጣሱ ናቸው።",
      children: [
        {
          id: "n1-1",
          title: "Why Human Rights Are Universal",
          titleAm: "ሰብዓዊ መብቶች ለምን ሁለንተናዊ ናቸው",
          body:
            "Human rights are UNIVERSAL because they are founded on the DIGNITY of every human being — regardless of race, colour, sex, ethnic or social origin, religion, language, nationality, age, sexual orientation, disability, or any other distinguishing characteristics. They apply EQUALLY and UNIFORMLY to every person and are the same for everyone everywhere because they are accepted by all States and peoples.",
          bodyAm:
            "ሰብዓዊ መብቶች በሁሉም ሰው ክብር ላይ የተመሠረቱ ስለሆኑ ሁለንተናዊ ናቸው — በዘር፣ በቀለም፣ በጾታ፣ በሃይማኖት፣ በቋንቋ ልዩነት ሳይለዩ።",
        },
        {
          id: "n1-2",
          title: "Key Characteristics",
          titleAm: "ቁልፍ ባህሪያት",
          body:
            "• UNIVERSAL — apply to ALL humans everywhere.\n" +
            "• NATURAL — belong to humans by nature, not by grant.\n" +
            "• ETERNAL — not bound by time.\n" +
            "• INALIENABLE — cannot be taken away or given up.\n" +
            "• INVIOLABLE — cannot be violated.",
          bodyAm:
            "• ሁለንተናዊ — ለሁሉም ሰው ይመለከታል።\n• ተፈጥሯዊ — በተፈጥሮ የተገኘ።\n• ዘላቂ — በጊዜ ያልተገደበ።\n• የማይነጠቅ — ሊወሰድ የማይችል።\n• የማይጣስ — ሊጣስ የማይችል።",
        },
        {
          id: "n1-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: Human rights are NOT granted by any government. They belong to humans BY BIRTH. Governments only RECOGNIZE and PROTECT them. If a government grants them, it can also take them away — but human rights cannot be taken away.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ሰብዓዊ መብቶች በመንግሥት አይሰጡም። በተወለዱበት ጊዜ ይገኛሉ። መንግሥት የሚያደርገው ማወቅና መጠበቅ ብቻ ነው።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Classification of Human Rights",
      titleAm: "2. የሰብዓዊ መብቶች ምድቦች",
      body:
        "Banchi, human rights are classified into THREE generations based on the Universal Declaration of Human Rights (UDHR, 1948). You must know all three for Grade 8.",
      bodyAm:
        "ባንቺ፣ ሰብዓዊ መብቶች በሁለንተናዊ የሰብዓዊ መብቶች መግለጫ (1948) መሠረት በሦስት ትውልዶች ይከፈላሉ።",
      children: [
        {
          id: "n2-1",
          title: "A) Civil and Political Rights (First Generation)",
          titleAm: "ሀ) ሲቪልና ፖለቲካዊ መብቶች",
          body:
            "Established by ARTICLES 2–21 of the UDHR. Also called LIBERTY RIGHTS or FIRST GENERATION rights. In FDRE constitution, they are in articles 14–40. They include:\n" +
            "• Right to LIFE\n" +
            "• Right to SECURITY\n" +
            "• Protection against SLAVERY\n" +
            "• Right to PRIVACY\n" +
            "• Right to DUE and FAIR process of law\n" +
            "• Right to LIBERTY of thought and expression\n" +
            "• Right to RELIGIOUS freedom\n" +
            "• Right to ASSOCIATION\n" +
            "• Right to PROPERTY",
          bodyAm:
            "በ UDHR አንቀጽ 2–21 የተመሠረቱ። የነፃነት መብቶች ወይም የመጀመሪያ ትውልድ ይባላሉ።\n• የመኖር መብት\n• የደህንነት መብት\n• ከባርነት መጠበቅ\n• የግላዊነት መብት\n• የፍትሐዊ ሂደት መብት\n• የሐሳብና አገላለጽ ነፃነት\n• የሃይማኖት ነፃነት\n• የማህበር መብት\n• የባለቤትነት መብት",
        },
        {
          id: "n2-2",
          title: "B) Economic, Social and Cultural Rights (Second Generation)",
          titleAm: "ለ) ኢኮኖሚያዊ፣ ማህበራዊና ባህላዊ መብቶች",
          body:
            "Established by ARTICLES 22–27 of the UDHR. Also called EQUALITY RIGHTS or SECOND GENERATION rights. In FDRE constitution, they are in articles 41 and 42. They include:\n" +
            "• Right to WORK\n" +
            "• Right to SOCIAL SECURITY\n" +
            "• Right to protection against UNEMPLOYMENT\n" +
            "• Right to GOOD LIVING\n" +
            "• Right against SLAVERY and EXPLOITATION\n" +
            "• Right to EDUCATION\n" +
            "• Right to HEALTH services\n\n" +
            "PLUS consumer protection rights:\n" +
            "• Right to SAFETY\n" +
            "• Right to be INFORMED\n" +
            "• Right to CHOOSE\n" +
            "• Right to REDRESS (compensation)\n" +
            "• Right to be RESPECTED",
          bodyAm:
            "በ UDHR አንቀጽ 22–27 የተመሠረቱ። የእኩልነት መብቶች ወይም የሁለተኛ ትውልድ ይባላሉ።\n• የሥራ መብት\n• የማህበራዊ ዋስትና መብት\n• ከሥራ አጥነት መጠበቅ\n• የመልካም ኑሮ መብት\n• ከባርነትና ብዝበዛ መጠበቅ\n• የትምህርት መብት\n• የጤና አገልግሎት መብት",
        },
        {
          id: "n2-3",
          title: "C) Solidarity Rights (Third Generation)",
          titleAm: "ሐ) የጋራ መብቶች",
          body:
            "Established by ARTICLE 28 of the UDHR. Also called FRATERNITY RIGHTS or THIRD GENERATION rights. In FDRE constitution, they are in articles 43 and 44. They include:\n" +
            "• Rights to POWER\n" +
            "• Right to JUST distribution of wealth\n" +
            "• Right to ECONOMIC and SOCIAL development\n" +
            "• Right to a CLEAN and HEALTHY environment\n" +
            "• Right to PARTICIPATE in the process of development\n" +
            "• Right to PEACE\n\n" +
            "Article 44 of FDRE: 'All persons have the right to live in a clean and healthy environment.' This right pertains to EXISTING AND FUTURE generations.",
          bodyAm:
            "በ UDHR አንቀጽ 28 የተመሠረቱ። የወንድማማችነት መብቶች ወይም የሦስተኛ ትውልድ ይባላሉ።\n• የሥልጣን መብት\n• የፍትሐዊ ሀብት ክፍፍል መብት\n• የኢኮኖሚና ማህበራዊ ልማት መብት\n• የንጹሕና ጤናማ አካባቢ መብት\n• በልማት ሂደት የመሳተፍ መብት\n• የሰላም መብት",
        },
        {
          id: "n2-4",
          title: "The Right to Life — The Foundation",
          titleAm: "የመኖር መብት — መሠረቱ",
          body:
            "Banchi, the UDHR considers ALL human rights EQUALLY IMPORTANT. However, the RIGHT TO LIFE is fundamental because it serves as the FOUNDATION for ALL other rights. Article 15: everyone has the right to life, and no one may be deprived of it EXCEPT as a punishment for a serious criminal offense determined by law.",
          bodyAm:
            "ሁሉም ሰብዓዊ መብቶች እኩል አስፈላጊ ናቸው። ግን የመኖር መብት የሁሉም መሠረት ነው። አንቀጽ 15፡ ሁሉም የመኖር መብት አለው።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: MEMORIZE the generations:\n" +
            "1st = Civil & Political (Articles 2–21 UDHR) → 'LIBERTY'\n" +
            "2nd = Economic, Social & Cultural (Articles 22–27) → 'EQUALITY'\n" +
            "3rd = Solidarity (Article 28) → 'FRATERNITY'\n" +
            "The RIGHT TO LIFE is the FOUNDATION of all rights.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡\n1ኛ = ሲቪልና ፖለቲካዊ → 'ነፃነት'\n2ኛ = ኢኮኖሚያዊ፣ ማህበራዊና ባህላዊ → 'እኩልነት'\n3ኛ = የጋራ → 'ወንድማማችነት'\nየመኖር መብት የሁሉም መሠረት ነው።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. The Right to Equality",
      titleAm: "3. የእኩልነት መብት",
      body:
        "Banchi, the RIGHT TO EQUALITY means everyone has the right to receive EQUAL TREATMENT and service from their government or non-governmental institutions. NO ONE should be treated differently from another.",
      bodyAm:
        "ባንቺ፣ የእኩልነት መብት ማለት ሁሉም ከመንግሥትና ከመንግሥታዊ ያልሆኑ ተቋማት እኩል አያያዝና አገልግሎት የማግኘት መብት አለው ማለት ነው።",
      children: [
        {
          id: "n3-1",
          title: "Meaning of Right to Equality",
          titleAm: "የእኩልነት መብት ትርጉም",
          body:
            "Equality is the right to ensure that EVERY INDIVIDUAL has an EQUAL OPPORTUNITY to make the most of their lives and talents. It is the belief that NO ONE should have fewer opportunities in life because of:\n" +
            "• how they were born\n" +
            "• where they came from\n" +
            "• what they believe\n" +
            "• whether they have a disability\n\n" +
            "In a nutshell: the right to equality is the right to live in a society with EQUAL OPPORTUNITIES. No one can be given a special advantage that would dishonour any individual or group.",
          bodyAm:
            "እኩልነት ማለት ሁሉም ሰው በሕይወቱና በችሎታው ሙሉ ተጠቃሚ የሚሆንበት እኩል ዕድል ማግኘት ማለት ነው። ማንም በተወለደበት፣ በመጣበት ቦታ፣ በሚያምነው ወይም በአካል ጉዳቱ ምክንያት ያነሰ ዕድል ማግኘት የለበትም።",
        },
        {
          id: "n3-2",
          title: "FDRE Article 25 — Equality Before the Law",
          titleAm: "የፌዴራል ሕገ-መንግሥት አንቀጽ 25",
          body:
            "Article 25: ALL PERSONS are EQUAL BEFORE THE LAW and are entitled to EQUAL PROTECTION under the law WITHOUT DISCRIMINATION. The law must provide EQUAL and EFFECTIVE protection to ALL people. Equality is guaranteed REGARDLESS of:\n" +
            "• Gender\n" +
            "• Skin colour\n" +
            "• Creed or belief\n" +
            "• Social status\n" +
            "• Parentage\n" +
            "• Nationality\n" +
            "• Race\n" +
            "• Language\n" +
            "• Religion",
          bodyAm:
            "አንቀጽ 25፡ ሁሉም ሰዎች በሕግ ፊት እኩል ናቸው። ያለ አድልዎ እኩል ጥበቃ ያገኛሉ። እኩልነት በጾታ፣ በቀለም፣ በእምነት፣ በማህበራዊ ደረጃ፣ በዘር፣ በቋንቋ፣ በሃይማኖት ልዩነት ሳይለይ የተረጋገጠ ነው።",
        },
        {
          id: "n3-3",
          title: "Special Considerations",
          titleAm: "ልዩ ትኩረቶች",
          body:
            "Two things stand out:\n" +
            "1) WOMEN'S RIGHT TO EQUALITY — Article 35/2: 'women must be given special consideration in order for them to COMPETE and PARTICIPATE on an equal footing with men in political, social, and economic life, as well as in public and private institutions.'\n\n" +
            "2) LEAST FAVOURED REGIONS — Article 89/4: the government shall provide SPECIAL ASSISTANCE to Nations, Nationalities, and Peoples who are LEAST FAVOURED in economic and social development.",
          bodyAm:
            "ሁለት ነጥቦች፡\n1) የሴቶች እኩልነት መብት — አንቀጽ 35/2፡ ሴቶች ከወንዶች ጋር በእኩል እንዲወዳደሩና እንዲሳተፉ ልዩ ትኩረት መሰጠት አለበት።\n2) በጣም ያልተመቻቹ ክልሎች — አንቀጽ 89/4፡ መንግሥት ለኢኮኖሚያዊና ማህበራዊ ልማት ለተጎዱ ብሔር ብሔረሰቦችና ሕዝቦች ልዩ ድጋፍ ያደርጋል።",
        },
        {
          id: "n3-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: The Right to Equality does NOT mean everyone gets the EXACT SAME thing. It means EQUAL OPPORTUNITY and equal treatment under the law. Special assistance for women and least-favoured regions is a FORM of equality — it creates fair conditions.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ የእኩልነት መብት ሁሉም ተመሳሳይ ነገር ማግኘት ማለት አይደለም። እኩል ዕድልና በሕግ ፊት እኩል አያያዝ ማለት ነው።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Human Rights under Regional Constitutions of Ethiopia",
      titleAm: "4. በኢትዮጵያ የክልል ሕገ-መንግሥታት ስር ያሉ ሰብዓዊ መብቶች",
      body:
        "Banchi, Article 52/2b of the FDRE constitution EMPOWERS regional states to enact and enforce STATE CONSTITUTIONS and other laws. As a result, regional constitutions were adopted: Oromia, Tigray, SNNPRS, Somalia, Harar, and Amhara in 1995; Benishangul-Gumuz and Gambella in 1996; Afar in 1998; Sidama in 2020.",
      bodyAm:
        "ባንቺ፣ የፌዴራል ሕገ-መንግሥት አንቀጽ 52/2ለ ክልሎች የራሳቸውን ሕገ-መንግሥት እንዲያወጡና እንዲያስፈጽሙ ሥልጣን ይሰጣል።",
      children: [
        {
          id: "n4-1",
          title: "Key Facts about Regional Constitutions",
          titleAm: "ስለ ክልል ሕገ-መንግሥታት ቁልፍ እውነታዎች",
          body:
            "• The HUMAN RIGHTS statements in the FDRE constitution were DIRECTLY COPIED by all regions.\n" +
            "• Article 9(1) requires regional constitutions to ADHERE to the federal constitution.\n" +
            "• Human rights articles are in CHAPTER THREE of all regional constitutions — under 'fundamental rights and freedoms'.\n" +
            "• Regardless of article number, they all say the same thing.\n" +
            "• Regional constitutions CANNOT violate human rights stated in the federal constitution by providing a LOWER level of protection.",
          bodyAm:
            "• የፌዴራል ሕገ-መንግሥት የሰብዓዊ መብት ዓንቀጾች በሁሉም ክልሎች በቀጥታ ተቀድተዋል።\n• አንቀጽ 9(1) ክልሎች ለፌዴራል ሕገ-መንግሥት እንዲገዙ ይጠይቃል።\n• በሁሉም ክልሎች የሰብዓዊ መብት ዓንቀጾች በምዕራፍ ሦስት ናቸው።",
        },
        {
          id: "n4-2",
          title: "Human Rights in Regional Constitutions",
          titleAm: "በክልል ሕገ-መንግሥታት ውስጥ ያሉ ሰብዓዊ መብቶች",
          body:
            "• Right to LIFE\n" +
            "• Right of SECURITY of person\n" +
            "• Right of LIBERTY\n" +
            "• Prohibition against INHUMAN TREATMENTS\n" +
            "• Rights of ARRESTED person\n" +
            "• Right of ACCUSED person\n" +
            "• Rights of person HELD IN CUSTODY and CONVICTED PRISONER\n" +
            "• NON-RETROACTIVITY of criminal law\n" +
            "• Prohibition of DOUBLE JEOPARDY\n" +
            "• Right to HONOUR and REPUTATION\n" +
            "• Rights of EQUALITY\n" +
            "• Right of PRIVACY\n" +
            "• Freedom of RELIGION, CONSCIENCE, and BELIEF\n" +
            "• CRIMES AGAINST HUMANITY",
          bodyAm:
            "• የመኖር መብት\n• የደህንነት መብት\n• የነፃነት መብት\n• ኢሰብዓዊ አያያዝን መከልከል\n• የተያዘ ሰው መብት\n• የተከሰሰ ሰው መብት\n• የታሰረና የተፈረደበት ሰው መብት\n• የወንጀል ሕግ ወደ ኋላ አለመመለስ\n• ድርብ ክስ መከልከል\n• የክብርና ዝና መብት\n• የእኩልነት መብት\n• የግላዊነት መብት\n• የሃይማኖት፣ የህሊናና የእምነት ነፃነት\n• በሰው ላይ የሚፈጸሙ ወንጀሎች",
        },
        {
          id: "n4-3",
          title: "Special Features of Regional Constitutions",
          titleAm: "የክልል ሕገ-መንግሥታት ልዩ ባህሪያት",
          body:
            "• ALL regional constitutions guarantee civil and political rights, PLUS social, economic, cultural rights, and solidarity rights.\n" +
            "• Some regional constitutions provide BETTER protection than the federal constitution in terms of FREEDOM OF MOVEMENT (Article 32 of FDRE).\n" +
            "• Apart from AFAR and SOMALI constitutions, ALL regional constitutions list — right after freedom of movement — the RIGHT OF EVERY ETHIOPIAN RESIDENT to be elected to or employed by any public office in the region.\n" +
            "• Most regional constitutions have social, economic, cultural rights provisions nearly IDENTICAL to Article 41 of the federal constitution.\n" +
            "• AFAR and SOMALI constitutions used their constitutional space to REFLECT regional socioeconomic characteristics and policy preferences.",
          bodyAm:
            "• ሁሉም የክልል ሕገ-መንግሥታት ሲቪል፣ ፖለቲካዊ፣ ማህበራዊ፣ ኢኮኖሚያዊና ባህላዊ መብቶችን ያረጋግጣሉ።\n• አንዳንድ ክልሎች በነፃነት ከፌዴራሉ የተሻለ ጥበቃ ይሰጣሉ።\n• ከአፋርና ከሶማሌ በስተቀር ሁሉም ክልሎች ለሁሉም ኢትዮጵያዊ ነዋሪ በክልሉ ውስጥ የመመረጥና የመቀጠር መብት ይሰጣሉ።\n• አፋርና ሶማሌ የክልላዊ ልዩ ሁኔታዎችን ያንጸባርቃሉ።",
        },
        {
          id: "n4-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: Regional constitutions are NOT carbon copies of the federal one — they can provide BETTER protection but NOT LOWER protection. AFAR and SOMALI are the two regions with PARTIALLY DIFFERENT provisions on social, economic, and cultural rights.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ የክልል ሕገ-መንግሥታት የፌዴራሉ ቅጂ አይደሉም። የተሻለ ጥበቃ መስጠት ይችላሉ፣ ግን ያነሰ አይደለም። አፋርና ሶማሌ ልዩ ድንጋጌ ያላቸው ሁለት ክልሎች ናቸው።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Challenges of Protecting Human Rights in Ethiopia",
      titleAm: "5. በኢትዮጵያ ሰብዓዊ መብቶችን የመጠበቅ ችግሮች",
      body:
        "Banchi, Ethiopia faces SIX major challenges in protecting human rights. Memorize all six for Grade 8.",
      bodyAm:
        "ባንቺ፣ ኢትዮጵያ ሰብዓዊ መብቶችን በመጠበቅ ስድስት ዋና ችግሮች አሏት።",
      children: [
        {
          id: "n5-1",
          title: "1) Traditional Harmful Practices",
          titleAm: "1) ባህላዊ ጎጂ ልማዶች",
          body:
            "A) Practices against WOMEN — FEMALE GENITAL MUTILATION (FGM), EARLY MARRIAGE, MARRIAGE BY ABDUCTION, FORCED MARRIAGE, WIFE INHERITANCE, POLYGAMY.\n\n" +
            "B) UVULOTOMY — surgical removal of the uvula.\n\n" +
            "C) MILK TEETH EXTRACTION — removal of a child's primary teeth.\n\n" +
            "D) FOOD TABOOS — forbidding pregnant/lactating women and children from eating WHITE-COLORED foods (milk, fatty meat, porridge, potato, banana, clean vegetables, colostrum, fruits).\n\n" +
            "E) INCISION OF EYELID — treatment for eye disease, common in northern Ethiopia.\n\n" +
            "F) CAUTERIZATION ('TATTATE') — burning with hot material for conjunctivitis, headaches, ear infections, TB, bone fractures.",
          bodyAm:
            "ሀ) በሴቶች ላይ የሚፈጸሙ — የሴት ልጅ ግርዛት፣ ጊዜ ያልደረሰ ጋብቻ፣ በግፍ ጋብቻ፣ የግዴታ ጋብቻ፣ የሟች ባል ውርስ፣ ብዙ ሚስት ማግባት።\nለ) የኡቩላ መቁረጥ።\nሐ) የሕፃን የወተት ጥርስ ማውጣት።\nመ) የምግብ እቀባ — ለነፍሰ ጡር ሴቶችና ለልጆች ነጭ ቀለም ያላቸውን ምግቦች መከልከል።\nሠ) የዓይን ሽፋን መቁረጥ።\nረ) ታታቴ (ማቃጠል)።",
        },
        {
          id: "n5-2",
          title: "2) Poverty and Inequality",
          titleAm: "2) ድህነትና አለመመጣጠን",
          body:
            "A country's PERSISTENT POVERTY makes achieving citizens' human rights DIFFICULT. HUNGER is a violation of human rights in itself — a hungry person cannot respect the rights of others. INEQUALITIES discourage full mobilization of the people for development. Example: women have been UNFAIRLY assigned inferior positions, impeding the country's development and endangering women's rights. Article 35/8 of FDRE: women have the right to EQUALITY in employment, promotion, pay, and transfer of pension entitlements.",
          bodyAm:
            "የሀገር ዘላቂ ድህነት የዜጎችን ሰብዓዊ መብት ማሳካት ያስቸግራል። ረሃብ በራሱ የሰብዓዊ መብት ጥሰት ነው። አለመመጣጠን ህዝቡን ለልማት ሙሉ በሙሉ እንዳይሰበሰብ ያደርጋል። ሴቶች በተከበረ ቦታ አልተሰጣቸውም።",
        },
        {
          id: "n5-3",
          title: "3) Child Labor Abuse",
          titleAm: "3) የሕፃናት ጉልበት ብዝበዛ",
          body:
            "Child labor causes SEVERE physical and mental harm, as well as DEATH. It can lead to SLAVERY and SEXUAL or ECONOMIC EXPLOITATION. It DENIES children access to education and healthcare. Article 36d of FDRE: children shall NOT be subjected to exploitative practices, nor required to perform work HAZARDOUS or HARMFUL to their education, health, or well-being.",
          bodyAm:
            "የሕፃናት ጉልበት ብዝበዛ ከባድ አካላዊና አእምሯዊ ጉዳትና ሞት ያስከትላል። ወደ ባርነትና ወደ ወሲባዊ ወይም ኢኮኖሚያዊ ብዝበዛ ይመራል። ልጆች ትምህርትና ጤና እንዳያገኙ ያደርጋል።",
        },
        {
          id: "n5-4",
          title: "4) Conflict and Displacement",
          titleAm: "4) ግጭትና መፈናቀል",
          body:
            "Conflicts are caused by GOAL INCOMPATIBILITIES. Displacement can be caused by ETHNIC, RELIGIOUS, IDEOLOGICAL, or other conflicts. Individuals and communities are FORCED to flee or leave their homes as a result of events such as ARMED CONFLICT, GENERALIZED VIOLENCE, HUMAN RIGHTS VIOLATIONS, NATURAL or MAN-MADE DISASTERS, and/or DEVELOPMENT PROJECTS. As a result, HUMAN RIGHTS ARE VIOLATED.",
          bodyAm:
            "ግጭቶች በግብ አለመጣጣም ይነሳሉ። መፈናቀል በብሔር፣ በሃይማኖት፣ በአስተሳሰብ ወይም በሌሎች ግጭቶች ይከሰታል። ሰዎች ከቤታቸው ተገደው ይሸሻሉ — የሰብዓዊ መብት ጥሰት ይከሰታል።",
        },
        {
          id: "n5-5",
          title: "5) Weak Institutions",
          titleAm: "5) ደካማ ተቋማት",
          body:
            "Even though human rights are NATURAL rights, INSTITUTIONS are critical for EFFECTIVE IMPLEMENTATION. The ability to INVESTIGATE human rights issues and/or individual complaints is critical. Key institutions:\n" +
            "• Civil Rights Defender\n" +
            "• Human Rights Commission\n" +
            "• Human Rights Institute\n" +
            "• Ombudsperson\n" +
            "• Public Defender/Protector\n" +
            "• Parliamentary Advocate\n\n" +
            "The LACK of such institutions results in VIOLATIONS of human rights.",
          bodyAm:
            "ሰብዓዊ መብቶች ተፈጥሯዊ ቢሆኑም፣ ለተግባራዊነት ተቋማት ወሳኝ ናቸው። የሰብዓዊ መብት ችግሮችን የመመርመር ችሎታ ወሳኝ ነው። ተቋማት፡ የሲቪል መብት ተከላካይ፣ የሰብዓዊ መብት ኮሚሽን፣ የሰብዓዊ መብት ኢንስቲትዩት፣ ኦምቡድስፐርሰን፣ የህዝብ ተከላካይ፣ የፓርላማ ጠበቃ።",
        },
        {
          id: "n5-6",
          title: "6) Democracy Deficit",
          titleAm: "6) የዲሞክራሲ እጥረት",
          body:
            "DEMOCRACY and HUMAN RIGHTS are INTERDEPENDENT, COMPLEX, MUTUALLY SUPPORTIVE, SYMBIOTIC, and 'MUTUALLY CONSTITUTIVE.' Human rights are INEXTRICABLY LINKED to democracy. Only in a DEMOCRATIC STATE can human rights be EFFECTIVELY PROTECTED. A functional democracy that accommodates diversity, promotes equality, and protects individual liberties is the best hedge against the concentration of power and abuse of human rights. Ethiopia's LACK OF DEMOCRACY creates significant barriers to the day-to-day implementation of human rights.",
          bodyAm:
            "ዲሞክራሲና ሰብዓዊ መብቶች እርስ በርስ የተያያዙ ናቸው። ሰብዓዊ መብቶች በዲሞክራሲያዊ መንግሥት ውስጥ ብቻ በተግባር ሊጠበቁ ይችላሉ። የኢትዮጵያ የዲሞክራሲ እጥረት ለሰብዓዊ መብት ትግበራ ትልቅ እንቅፋት ነው።",
        },
        {
          id: "n5-7",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: MEMORIZE the SIX challenges:\n" +
            "1) Traditional harmful practices\n" +
            "2) Poverty and inequality\n" +
            "3) Child labor abuse\n" +
            "4) Conflict and displacement\n" +
            "5) Weak institutions\n" +
            "6) Democracy deficit\n" +
            "These are commonly tested.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ስድስቱን ችግሮች ማስታወስ፡\n1) ባህላዊ ጎጂ ልማዶች\n2) ድህነትና አለመመጣጠን\n3) የሕፃናት ጉልበት ብዝበዛ\n4) ግጭትና መፈናቀል\n5) ደካማ ተቋማት\n6) የዲሞክራሲ እጥረት",
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
      stem: "What are human rights?",
      options: [
        "Rights given by the government",
        "Rights enjoyed by humans simply because they are humans",
        "Rights for the rich only",
        "Rights for one ethnic group",
      ],
      answer: "1",
      explanation:
        "Banchi, HUMAN RIGHTS are rights enjoyed SOLELY by humans SIMPLY BECAUSE they are HUMAN.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes human rights?",
      options: [
        "Universal, natural, eternal, inalienable, inviolable",
        "Only for citizens",
        "Only for adults",
        "Only for the educated",
      ],
      answer: "0",
      explanation:
        "Human rights are UNIVERSAL, NATURAL, ETERNAL, INALIENABLE, and INVIOLABLE.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "How many categories (generations) of human rights are there?",
      options: ["Two", "Three", "Four", "Five"],
      answer: "1",
      explanation:
        "THREE generations: Civil & Political, Economic/Social/Cultural, Solidarity.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a CIVIL and POLITICAL right?",
      options: [
        "Right to work",
        "Right to life",
        "Right to peace",
        "Right to clean environment",
      ],
      answer: "1",
      explanation:
        "The RIGHT TO LIFE is a CIVIL and POLITICAL right.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is an ECONOMIC, SOCIAL and CULTURAL right?",
      options: [
        "Right to life",
        "Right to privacy",
        "Right to work",
        "Right to peace",
      ],
      answer: "2",
      explanation:
        "The RIGHT TO WORK is an ECONOMIC, SOCIAL and CULTURAL right.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a SOLIDARITY right?",
      options: [
        "Right to life",
        "Right to work",
        "Right to peace",
        "Right to privacy",
      ],
      answer: "2",
      explanation:
        "The RIGHT TO PEACE is a SOLIDARITY right.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "Which UDHR articles established Civil and Political Rights?",
      options: ["Articles 2–21", "Articles 22–27", "Article 28", "Article 15"],
      answer: "0",
      explanation:
        "ARTICLES 2–21 of the UDHR established CIVIL AND POLITICAL RIGHTS.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "Which UDHR articles address Economic, Social and Cultural Rights?",
      options: ["Articles 2–21", "Articles 22–27", "Article 28", "Article 15"],
      answer: "1",
      explanation:
        "ARTICLES 22–27 address ECONOMIC, SOCIAL and CULTURAL rights.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "Which UDHR article addresses Solidarity Rights?",
      options: ["Article 2", "Article 15", "Article 22", "Article 28"],
      answer: "3",
      explanation:
        "ARTICLE 28 addresses SOLIDARITY rights (fraternity / third generation).",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "In the FDRE constitution, which articles contain Civil and Political Rights?",
      options: ["Articles 14–40", "Articles 41–42", "Articles 43–44", "Articles 51–52"],
      answer: "0",
      explanation:
        "ARTICLES 14–40 of FDRE contain CIVIL and POLITICAL rights.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "Which FDRE articles contain Economic, Social and Cultural rights?",
      options: ["Articles 14–40", "Articles 41–42", "Articles 43–44", "Articles 51–52"],
      answer: "1",
      explanation:
        "FDRE ARTICLES 41–42 contain ECONOMIC, SOCIAL and CULTURAL rights.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "Which FDRE articles contain Solidarity rights?",
      options: ["Articles 14–40", "Articles 41–42", "Articles 43–44", "Articles 51–52"],
      answer: "2",
      explanation:
        "FDRE ARTICLES 43–44 contain SOLIDARITY rights.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "Which right is the FOUNDATION of all other rights?",
      options: ["Right to work", "Right to life", "Right to peace", "Right to privacy"],
      answer: "1",
      explanation:
        "The RIGHT TO LIFE is the FOUNDATION — all other rights depend on it.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "Which FDRE article states the right to live in a clean and healthy environment?",
      options: ["Article 25", "Article 35", "Article 44", "Article 89"],
      answer: "2",
      explanation:
        "ARTICLE 44: 'All persons have the right to live in a clean and healthy environment.'",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "The Right to Equality means:",
      options: [
        "Everyone is identical",
        "Everyone has equal treatment and service from institutions",
        "Everyone has the same job",
        "Only the rich are equal",
      ],
      answer: "1",
      explanation:
        "RIGHT TO EQUALITY = equal treatment and service from government and non-government institutions.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "Which FDRE article states equality before the law?",
      options: ["Article 25", "Article 35", "Article 44", "Article 89"],
      answer: "0",
      explanation:
        "FDRE ARTICLE 25 — equality before the law and equal protection.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "Which FDRE article is about women's right to equality?",
      options: ["Article 25", "Article 35", "Article 44", "Article 89"],
      answer: "1",
      explanation:
        "FDRE ARTICLE 35/2 — women must be given SPECIAL CONSIDERATION.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "Which FDRE article addresses assistance to least-favoured regions?",
      options: ["Article 25", "Article 35", "Article 44", "Article 89/4"],
      answer: "3",
      explanation:
        "FDRE ARTICLE 89/4 — government shall provide SPECIAL ASSISTANCE to least-favoured Nations, Nationalities, and Peoples.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "Article 52/2b of the FDRE constitution empowers regional states to:",
      options: [
        "Print money",
        "Enact and enforce state constitutions",
        "Conduct foreign policy",
        "Declare war",
      ],
      answer: "1",
      explanation:
        "ARTICLE 52/2b empowers regional states to ENACT and ENFORCE STATE CONSTITUTIONS and other laws.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "Which regions adopted their constitutions in 1995?",
      options: [
        "Oromia, Tigray, SNNPRS, Somalia, Harar, Amhara",
        "Afar and Somali only",
        "Benishangul-Gumuz and Gambella",
        "Sidama only",
      ],
      answer: "0",
      explanation:
        "Oromia, Tigray, SNNPRS, Somalia, Harar, and Amhara adopted constitutions in 1995.",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "Which regions adopted their constitutions in 1996?",
      options: [
        "Amhara and Oromia",
        "Benishangul-Gumuz and Gambella",
        "Afar and Somali",
        "Sidama",
      ],
      answer: "1",
      explanation:
        "Benishangul-Gumuz and Gambella adopted constitutions in 1996.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "Which region adopted its constitution in 1998?",
      options: ["Afar", "Oromia", "Tigray", "Sidama"],
      answer: "0",
      explanation:
        "AFAR adopted its constitution in 1998.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "Which region adopted its constitution in 2020?",
      options: ["Amhara", "Sidama", "Gambella", "Somali"],
      answer: "1",
      explanation:
        "SIDAMA adopted its constitution in 2020, after emerging as a new region.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a challenge for human rights in Ethiopia?",
      options: [
        "Poverty and inequality",
        "Rapid education expansion",
        "Strong institutions",
        "Free press",
      ],
      answer: "0",
      explanation:
        "POVERTY and INEQUALITY is one of the six main challenges.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a challenge for human rights in Ethiopia?",
      options: [
        "Traditional harmful practices",
        "Child labor abuse",
        "Strong institutions",
        "Democracy deficit",
      ],
      answer: "2",
      explanation:
        "STRONG INSTITUTIONS are NOT a challenge — WEAK institutions are.",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why human rights are UNIVERSAL?",
      options: [
        "Because they only apply in one country",
        "Because they are founded on the DIGNITY of every human being regardless of any distinguishing characteristics",
        "Because they are only for the rich",
        "Because governments give them",
      ],
      answer: "1",
      explanation:
        "Human rights are UNIVERSAL — founded on the DIGNITY of EVERY HUMAN BEING regardless of race, colour, sex, religion, language, etc.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes INALIENABLE rights?",
      options: [
        "Rights that can be taken away",
        "Rights that CANNOT be taken away or given up",
        "Rights that are temporary",
        "Rights given by parliament",
      ],
      answer: "1",
      explanation:
        "INALIENABLE = CANNOT be TAKEN AWAY or GIVEN UP.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why human rights CANNOT be granted by a government?",
      options: [
        "Because governments have no power",
        "Because they BELONG to humans BY BIRTH — governments only RECOGNIZE and PROTECT them",
        "Because governments are elected",
        "Because citizens are not human",
      ],
      answer: "1",
      explanation:
        "Human rights BELONG to humans BY BIRTH — governments only RECOGNIZE and PROTECT them.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the SECOND GENERATION rights?",
      options: [
        "Civil and political rights",
        "Economic, social and cultural rights — also called 'equality rights'",
        "Solidarity rights",
        "Natural rights only",
      ],
      answer: "1",
      explanation:
        "SECOND GENERATION = ECONOMIC, SOCIAL and CULTURAL rights — also called EQUALITY rights.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the FIRST GENERATION rights?",
      options: [
        "Civil and political rights — also called 'liberty rights'",
        "Economic and social rights",
        "Solidarity rights",
        "Environmental rights",
      ],
      answer: "0",
      explanation:
        "FIRST GENERATION = CIVIL and POLITICAL rights — also called LIBERTY rights.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the THIRD GENERATION rights?",
      options: [
        "Civil and political rights",
        "Economic rights",
        "Solidarity (fraternity) rights",
        "Property rights",
      ],
      answer: "2",
      explanation:
        "THIRD GENERATION = SOLIDARITY (fraternity) rights.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes CONSUMER PROTECTION rights?",
      options: [
        "Only right to safety",
        "Right to safety, to be informed, to choose, to redress, and to be respected",
        "Only right to choose",
        "Only right to be informed",
      ],
      answer: "1",
      explanation:
        "Consumer protection rights = safety, informed, choose, redress, respected.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the Right to Equality?",
      options: [
        "Treating everyone exactly the same in every situation",
        "Equal treatment and service from institutions; equal opportunity to make the most of life",
        "Favouring the rich",
        "Favouring the majority",
      ],
      answer: "1",
      explanation:
        "RIGHT TO EQUALITY = equal treatment and service; equal OPPORTUNITY to make the most of life and talents.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why special assistance to women and least-favoured regions is compatible with equality?",
      options: [
        "Because it favours women over men unfairly",
        "Because it creates FAIR CONDITIONS for equal competition and participation",
        "Because it discriminates against men",
        "Because it violates equality",
      ],
      answer: "1",
      explanation:
        "SPECIAL ASSISTANCE creates FAIR CONDITIONS for EQUAL COMPETITION and PARTICIPATION — this is a FORM of equality, not a violation.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the relationship between regional and federal constitutions?",
      options: [
        "Regional constitutions can provide LOWER protection",
        "Regional constitutions must ADHERE to the federal constitution and CANNOT provide LOWER protection",
        "Regional constitutions are independent",
        "Regional constitutions replace the federal one",
      ],
      answer: "1",
      explanation:
        "Regional constitutions must ADHERE to the federal constitution — CANNOT provide LOWER protection but CAN provide BETTER protection.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why all regional constitutions have similar human rights provisions?",
      options: [
        "Because they were directly copied from the federal constitution",
        "Because they were written by foreign lawyers",
        "Because they were all written in 1991",
        "Because they ignore the federal constitution",
      ],
      answer: "0",
      explanation:
        "The HUMAN RIGHTS statements in the FDRE constitution were DIRECTLY COPIED by all regions.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the region with PARTIALLY DIFFERENT provisions on social, economic, and cultural rights?",
      options: ["Amhara and Tigray", "Afar and Somali", "Oromia and Sidama", "Harar and Gambella"],
      answer: "1",
      explanation:
        "AFAR and SOMALI constitutions have PARTIALLY DIFFERENT provisions on social, economic, and cultural rights — reflecting REGIONAL SOCIOECONOMIC characteristics.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the region with the most recent constitution?",
      options: ["Amhara (1995)", "Sidama (2020)", "Afar (1998)", "Gambella (1996)"],
      answer: "1",
      explanation:
        "SIDAMA adopted its constitution in 2020 — the most recent.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes FEMALE GENITAL MUTILATION (FGM)?",
      options: [
        "A beneficial practice",
        "A harmful traditional practice that violates women's rights",
        "A medical treatment",
        "A religious ritual",
      ],
      answer: "1",
      explanation:
        "FGM is a HARMFUL TRADITIONAL practice that VIOLATES women's rights.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes UVULOTOMY?",
      options: [
        "Removal of the tonsils",
        "Surgical removal of the uvula",
        "Removal of the eyelid",
        "Removal of milk teeth",
      ],
      answer: "1",
      explanation:
        "UVULOTOMY = surgical REMOVAL of the UVULA (sometimes nearby structures like tonsils).",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes MILK TEETH EXTRACTION?",
      options: [
        "Extraction of adult teeth",
        "Extraction of a child's PRIMARY (milk) teeth",
        "Removal of the uvula",
        "Burning of tissue",
      ],
      answer: "1",
      explanation:
        "MILK TEETH EXTRACTION = removal of a CHILD'S PRIMARY teeth.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes FOOD TABOOS?",
      options: [
        "Eating more white foods",
        "Forbidding pregnant/lactating women and children from eating white-coloured foods like milk, fatty meat, porridge",
        "Drinking only water",
        "Eating only vegetables",
      ],
      answer: "1",
      explanation:
        "FOOD TABOOS forbid pregnant/lactating women and children from eating WHITE-COLORED foods (milk, fatty meat, porridge, potato, banana, clean vegetables, colostrum, fruits).",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes CAUTERIZATION ('Tattate')?",
      options: [
        "Cooling with cold water",
        "Burning with hot material for conditions like conjunctivitis, headaches, and TB",
        "Taking medicine",
        "Massaging the body",
      ],
      answer: "1",
      explanation:
        "CAUTERIZATION = BURNING with HOT MATERIAL for conditions like conjunctivitis, headaches, ear infections, TB, and bone fractures.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes INCISION OF EYELID?",
      options: [
        "Removal of the eyelid",
        "Treatment for eye disease (usually infections) common in northern Ethiopia",
        "A type of eye test",
        "Removal of the eyeball",
      ],
      answer: "1",
      explanation:
        "INCISION OF EYELID = common treatment for EYE DISEASE (usually infections) in the NORTHERN part of Ethiopia.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the FDRE constitution article 36d?",
      options: [
        "Children shall be subjected to exploitative practices",
        "Children shall NOT be subjected to exploitative practices or hazardous work",
        "Children may work in factories",
        "Children shall work full-time",
      ],
      answer: "1",
      explanation:
        "FDRE Article 36d: children shall NOT be subjected to EXPLOITATIVE practices, nor required to perform HAZARDOUS or HARMFUL work.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why child labor is a violation of human rights?",
      options: [
        "Because it makes children rich",
        "Because it causes severe physical and mental harm, denies education, and can lead to slavery",
        "Because children enjoy working",
        "Because it teaches skills",
      ],
      answer: "1",
      explanation:
        "Child labor causes SEVERE harm, DENIES education, and can lead to SLAVERY and EXPLOITATION.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why poverty is a challenge for human rights?",
      options: [
        "Because poverty strengthens rights",
        "Because hunger is itself a violation of human rights and a hungry person cannot respect others' rights",
        "Because poverty is optional",
        "Because poverty has no effect",
      ],
      answer: "1",
      explanation:
        "HUNGER is itself a violation of human rights — a hungry person CANNOT RESPECT the rights of others.",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the relationship between democracy and human rights?",
      options: [
        "They are unrelated",
        "They are MUTUALLY CONSTITUTIVE — democracy needs human rights and human rights need democracy",
        "Democracy replaces human rights",
        "They are opposites",
      ],
      answer: "1",
      explanation:
        "Democracy and human rights are MUTUALLY CONSTITUTIVE — INTERDEPENDENT, SYMBIOTIC, and MUTUALLY SUPPORTIVE.",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes why weak institutions are a challenge for human rights?",
      options: [
        "Because institutions are unnecessary",
        "Because without institutions, human rights violations cannot be investigated and addressed",
        "Because institutions are too strong",
        "Because institutions replace laws",
      ],
      answer: "1",
      explanation:
        "WITHOUT institutions, human rights issues and complaints CANNOT be investigated and addressed — leading to VIOLATIONS.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the relationship between conflict and human rights?",
      options: [
        "Conflicts have no effect",
        "Conflicts and displacement VIOLATE human rights",
        "Conflicts strengthen rights",
        "Conflicts are required for rights",
      ],
      answer: "1",
      explanation:
        "Conflicts and DISPLACEMENT VIOLATE human rights — people are FORCED to flee their homes.",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why the RIGHT TO LIFE is the foundation of all rights?",
      options: [
        "Because it is the most recent right",
        "Because all other rights depend on being ALIVE to enjoy them",
        "Because it is written first",
        "Because it is optional",
      ],
      answer: "1",
      explanation:
        "The RIGHT TO LIFE is the FOUNDATION — ALL other rights DEPEND on being ALIVE to ENJOY them.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why human rights are INDIVISIBLE?",
      options: [
        "Because they can be separated",
        "Because they are ALL EQUALLY IMPORTANT and cannot be divided — no right is more important than another",
        "Because only civil rights matter",
        "Because only economic rights matter",
      ],
      answer: "1",
      explanation:
        "Human rights are INDIVISIBLE — ALL are EQUALLY IMPORTANT and CANNOT be DIVIDED.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why human rights are INVIOLABLE?",
      options: [
        "Because they can be violated",
        "Because they CANNOT be violated without serious wrong — they are absolute in principle",
        "Because they are temporary",
        "Because they apply only in courts",
      ],
      answer: "1",
      explanation:
        "INVIOLABLE = CANNOT be VIOLATED without serious wrong — they are ABSOLUTE in principle.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why regional constitutions CANNOT provide LOWER protection of human rights?",
      options: [
        "Because regional constitutions are independent",
        "Because the FEDERAL constitution is SUPREME, and regional constitutions must ADHERE to it — providing BETTER protection is allowed but NOT LOWER",
        "Because regional governments have no power",
        "Because they are written in Amharic",
      ],
      answer: "1",
      explanation:
        "FEDERAL constitution is SUPREME; regional constitutions must ADHERE — BETTER protection is allowed but NOT LOWER.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why harmful traditional practices continue despite violating international human rights laws?",
      options: [
        "Because they are legally required",
        "Because they are not challenged and LOOK MORAL in the eyes of those who engage in them",
        "Because they benefit everyone",
        "Because the government promotes them",
      ],
      answer: "1",
      explanation:
        "Harmful practices CONTINUE because they are NOT CHALLENGED and LOOK MORAL in the eyes of those who engage in them.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why STRONG institutions are important for human rights even though rights are NATURAL?",
      options: [
        "Because natural rights do not need institutions",
        "Because institutions are critical for EFFECTIVE IMPLEMENTATION — investigating violations and providing redress",
        "Because institutions replace rights",
        "Because natural rights are weak",
      ],
      answer: "1",
      explanation:
        "Even though rights are NATURAL, INSTITUTIONS are critical for EFFECTIVE IMPLEMENTATION — investigating violations and providing REDRESS.",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Define human rights and list their five key characteristics.",
      answer:
        "HUMAN RIGHTS = rights enjoyed by humans SIMPLY BECAUSE they are humans — with no other conditions attached.\n\n" +
        "Five key characteristics:\n" +
        "1) UNIVERSAL — apply to all humans everywhere.\n" +
        "2) NATURAL — belong to humans by nature, not by grant.\n" +
        "3) ETERNAL — not bound by time.\n" +
        "4) INALIENABLE — cannot be taken away or given up.\n" +
        "5) INVIOLABLE — cannot be violated without serious wrong.",
      explanation: "Banchi, memorize the five characteristics.",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "Explain the THREE generations of human rights with examples and UDHR article numbers.",
      answer:
        "1) FIRST GENERATION — CIVIL AND POLITICAL RIGHTS (Articles 2–21 UDHR; FDRE articles 14–40). Also called LIBERTY rights.\n" +
        "Examples: right to life, security, privacy, liberty of thought and expression, religious freedom, association, property, protection against slavery.\n\n" +
        "2) SECOND GENERATION — ECONOMIC, SOCIAL AND CULTURAL RIGHTS (Articles 22–27 UDHR; FDRE articles 41–42). Also called EQUALITY rights.\n" +
        "Examples: right to work, social security, good living, education, health services.\n" +
        "Consumer protection rights are also included.\n\n" +
        "3) THIRD GENERATION — SOLIDARITY (FRATERNITY) RIGHTS (Article 28 UDHR; FDRE articles 43–44).\n" +
        "Examples: right to power, just distribution of wealth, development, clean and healthy environment, participation in development, peace.",
      explanation: "Banchi, memorize: 1st = liberty; 2nd = equality; 3rd = fraternity.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "Describe the human rights found in regional constitutions of Ethiopia.",
      answer:
        "Article 52/2b of FDRE empowers regional states to enact and enforce state constitutions.\n\n" +
        "The human rights statements in the FDRE constitution were DIRECTLY COPIED by all regions.\n\n" +
        "Human rights articles are in CHAPTER THREE of all regional constitutions:\n" +
        "• Right to Life\n• Right of Security of Person\n• Right of Liberty\n• Prohibition against Inhuman Treatments\n• Rights of Arrested Person\n• Right of Accused Person\n• Rights of Person Held in Custody and Convicted Prisoner\n• Non-retroactivity of Criminal Law\n• Prohibition of Double Jeopardy\n• Right to Honour and Reputation\n• Rights of Equality\n• Right of Privacy\n• Freedom of Religion, Conscience and Belief\n• Crimes against Humanity\n\n" +
        "Regional constitutions CANNOT provide LOWER protection — but CAN provide BETTER protection (e.g., freedom of movement).",
      explanation: "Banchi, memorise at least TEN rights from the regional constitutions.",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "Analyze the CHALLENGES of protecting human rights in Ethiopia.",
      answer:
        "There are SIX major challenges:\n\n" +
        "1) TRADITIONAL HARMFUL PRACTICES:\n" +
        "• Against women — FGM, early marriage, marriage by abduction, forced marriage, wife inheritance, polygamy.\n" +
        "• Uvulotomy (removal of uvula).\n" +
        "• Milk teeth extraction.\n" +
        "• Food taboos (white foods for pregnant/lactating women).\n" +
        "• Incision of eyelid.\n" +
        "• Cauterization ('Tattate') — burning with hot material.\n\n" +
        "2) POVERTY AND INEQUALITY — hunger is a violation; inequality impedes development.\n\n" +
        "3) CHILD LABOR ABUSE — severe harm, denies education, leads to exploitation.\n\n" +
        "4) CONFLICT AND DISPLACEMENT — people forced to flee, violating rights.\n\n" +
        "5) WEAK INSTITUTIONS — lack of Human Rights Commission, Ombudsperson, etc. means violations cannot be addressed.\n\n" +
        "6) DEMOCRACY DEFICIT — democracy and human rights are MUTUALLY CONSTITUTIVE; without democracy, rights cannot be effectively protected.",
      explanation: "Banchi, memorize all six — this is a common exam question.",
    },

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the nature of human rights?",
      options: [
        "Granted by government",
        "Belong to humans by birth — government only recognizes and protects them",
        "Only for citizens",
        "Temporary",
      ],
      answer: "1",
      explanation:
        "Human rights BELONG to humans by BIRTH — governments only RECOGNIZE and PROTECT.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes why human rights apply EQUALLY to everyone?",
      options: [
        "Because everyone is the same",
        "Because they are founded on the DIGNITY of every human being regardless of differences",
        "Because only some deserve them",
        "Because governments decide",
      ],
      answer: "1",
      explanation:
        "Human rights are founded on the DIGNITY of EVERY human being REGARDLESS of differences.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Which right is NOT in the FIRST generation (civil and political)?",
      options: [
        "Right to life",
        "Right to privacy",
        "Right to work",
        "Right to religious freedom",
      ],
      answer: "2",
      explanation:
        "RIGHT TO WORK is a SECOND generation (economic, social, cultural) right.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "Which right is NOT a SECOND generation right?",
      options: [
        "Right to work",
        "Right to education",
        "Right to health services",
        "Right to privacy",
      ],
      answer: "3",
      explanation:
        "RIGHT TO PRIVACY is a FIRST generation (civil and political) right.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "Which right is NOT a THIRD generation right?",
      options: [
        "Right to peace",
        "Right to clean environment",
        "Right to development",
        "Right to work",
      ],
      answer: "3",
      explanation:
        "RIGHT TO WORK is a SECOND generation right. THIRD generation = solidarity.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the RIGHT TO EQUALITY?",
      options: [
        "Treating everyone the same in all situations",
        "Equal opportunity to make the most of life and talents; equal treatment by institutions",
        "Only for the rich",
        "Only for men",
      ],
      answer: "1",
      explanation:
        "RIGHT TO EQUALITY = equal OPPORTUNITY to make the most of life and talents; equal treatment by institutions.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes how FDRE Article 25 handles equality?",
      options: [
        "Only citizens are equal",
        "ALL PERSONS are equal before the law and entitled to equal protection without discrimination",
        "Only the rich are equal",
        "Only men are equal",
      ],
      answer: "1",
      explanation:
        "FDRE ARTICLE 25: ALL PERSONS are equal before the law — equal protection WITHOUT DISCRIMINATION.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes how FDRE Article 35/2 handles women's equality?",
      options: [
        "Women should be restricted",
        "Women must be given SPECIAL CONSIDERATION to compete and participate on equal footing with men",
        "Women should work at home only",
        "Women should not vote",
      ],
      answer: "1",
      explanation:
        "FDRE Article 35/2: women must be given SPECIAL CONSIDERATION to COMPETE and PARTICIPATE on EQUAL FOOTING with men.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes how FDRE Article 89/4 handles least-favoured regions?",
      options: [
        "Ignoring them",
        "Government shall provide SPECIAL ASSISTANCE to Nations, Nationalities, and Peoples least favoured in economic and social development",
        "Removing them from the federation",
        "Taxing them more",
      ],
      answer: "1",
      explanation:
        "FDRE Article 89/4: government shall provide SPECIAL ASSISTANCE to LEAST-FAVOURED Nations, Nationalities, and Peoples.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes why regional constitutions contain human rights articles?",
      options: [
        "To replace federal rights",
        "To ensure regional human rights protection consistent with the federal constitution",
        "To limit human rights",
        "To ignore federal laws",
      ],
      answer: "1",
      explanation:
        "Regional constitutions ensure human rights protection CONSISTENT with the FEDERAL constitution.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes how regional constitutions relate to the federal constitution?",
      options: [
        "Regional constitutions are independent",
        "Regional constitutions must ADHERE to the federal constitution",
        "Regional constitutions replace the federal one",
        "Regional constitutions are written in different languages",
      ],
      answer: "1",
      explanation:
        "FDRE Article 9(1): regional constitutions must ADHERE to the FEDERAL constitution.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the relationship between human rights and the environment?",
      options: [
        "Rights ignore the environment",
        "The right to a clean and healthy environment is a THIRD generation right",
        "The environment replaces rights",
        "Environmental rights are not human rights",
      ],
      answer: "1",
      explanation:
        "RIGHT TO CLEAN AND HEALTHY ENVIRONMENT is a THIRD generation (solidarity) right — FDRE Article 44.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes why the right to a healthy environment is for FUTURE generations too?",
      options: [
        "Because only the current generation matters",
        "Because it is an inalienable right attached to human dignity for all generations",
        "Because the environment is temporary",
        "Because it is only for adults",
      ],
      answer: "1",
      explanation:
        "The RIGHT to a HEALTHY ENVIRONMENT is an INALIENABLE right attached to HUMAN DIGNITY for EXISTING AND FUTURE generations.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes why HUNGER is a human rights violation?",
      options: [
        "Because hunger is not important",
        "Because hunger deprives a person of basic needs and dignity — a hungry person cannot respect others' rights",
        "Because hunger is optional",
        "Because hunger affects only the poor",
      ],
      answer: "1",
      explanation:
        "HUNGER deprives basic NEEDS and DIGNITY — a HUNGRY person CANNOT RESPECT others' rights.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the relationship between conflict and displacement?",
      options: [
        "They are unrelated",
        "Conflict causes displacement, which violates human rights",
        "Displacement causes conflict",
        "Both are beneficial",
      ],
      answer: "1",
      explanation:
        "Conflict causes DISPLACEMENT — people are FORCED to flee their homes, VIOLATING their rights.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the Human Rights Commission?",
      options: [
        "It produces food",
        "It is a key institution for protecting and promoting human rights",
        "It runs the army",
        "It collects taxes",
      ],
      answer: "1",
      explanation:
        "HUMAN RIGHTS COMMISSION — a KEY institution for PROTECTING and PROMOTING human rights.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the OMBUDSPERSON?",
      options: [
        "A judge",
        "An official who investigates complaints against government",
        "A police officer",
        "A politician",
      ],
      answer: "1",
      explanation:
        "The OMBUDSPERSON investigates COMPLAINTS against government — a key human rights institution.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the relationship between democracy and human rights?",
      options: [
        "They are unrelated",
        "They are mutually supportive and mutually constitutive",
        "Democracy replaces human rights",
        "Human rights replace democracy",
      ],
      answer: "1",
      explanation:
        "DEMOCRACY and HUMAN RIGHTS are MUTUALLY SUPPORTIVE and MUTUALLY CONSTITUTIVE.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes why the right to life is FUNDAMENTAL?",
      options: [
        "Because it is optional",
        "Because it is the FOUNDATION of all other rights — no other right matters without it",
        "Because it is a second generation right",
        "Because it is only for citizens",
      ],
      answer: "1",
      explanation:
        "The RIGHT TO LIFE is the FOUNDATION of ALL other rights.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes why ALL human rights are EQUALLY IMPORTANT?",
      options: [
        "Because civil rights are more important",
        "Because the UDHR considers all rights EQUALLY IMPORTANT — rights are INDIVISIBLE",
        "Because economic rights matter most",
        "Because only some rights matter",
      ],
      answer: "1",
      explanation:
        "The UDHR considers ALL HUMAN RIGHTS EQUALLY IMPORTANT — rights are INDIVISIBLE.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the right to participate in development?",
      options: [
        "A first generation right",
        "A second generation right",
        "A third generation (solidarity) right",
        "Not a human right",
      ],
      answer: "2",
      explanation:
        "RIGHT TO PARTICIPATE IN DEVELOPMENT is a THIRD generation (solidarity) right.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the right to social security?",
      options: [
        "A first generation right",
        "A second generation right",
        "A third generation right",
        "Not a human right",
      ],
      answer: "1",
      explanation:
        "RIGHT TO SOCIAL SECURITY is a SECOND generation right.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the right to association?",
      options: [
        "A first generation right",
        "A second generation right",
        "A third generation right",
        "Not a human right",
      ],
      answer: "0",
      explanation:
        "RIGHT TO ASSOCIATION is a FIRST generation (civil and political) right.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the right to religious freedom?",
      options: [
        "A first generation right",
        "A second generation right",
        "A third generation right",
        "Not a human right",
      ],
      answer: "0",
      explanation:
        "RIGHT TO RELIGIOUS FREEDOM is a FIRST generation right.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the right to health services?",
      options: [
        "A first generation right",
        "A second generation right",
        "A third generation right",
        "Not a human right",
      ],
      answer: "1",
      explanation:
        "RIGHT TO HEALTH SERVICES is a SECOND generation (economic, social, cultural) right.",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why traditional harmful practices continue in Ethiopia?",
      options: [
        "Because they are legally required",
        "Because they are NOT CHALLENGED and LOOK MORAL in the eyes of those who engage in them",
        "Because they benefit everyone",
        "Because the government promotes them",
      ],
      answer: "1",
      explanation:
        "Harmful practices CONTINUE because they are NOT CHALLENGED and LOOK MORAL in the eyes of those who engage in them.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes MARRIAGE BY ABDUCTION?",
      options: [
        "A beneficial practice",
        "A harmful traditional practice affecting women's rights",
        "A legal practice",
        "A religious ritual",
      ],
      answer: "1",
      explanation:
        "MARRIAGE BY ABDUCTION is a HARMFUL traditional practice affecting WOMEN'S rights.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes WIFE INHERITANCE?",
      options: [
        "A modern practice",
        "A cultural and social practice where a widow is required to marry a male relative of her late husband",
        "A legal right",
        "A beneficial practice",
      ],
      answer: "1",
      explanation:
        "WIFE INHERITANCE = a cultural practice where a WIDOW is required to MARRY a male relative (often brother) of her late husband.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes POLYGAMY?",
      options: [
        "Having one spouse",
        "A harmful traditional practice involving multiple spouses",
        "A modern practice",
        "A beneficial practice",
      ],
      answer: "1",
      explanation:
        "POLYGAMY is a HARMFUL TRADITIONAL PRACTICE involving MULTIPLE spouses — affecting women's rights.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why CHILD LABOR is damaging?",
      options: [
        "Because it provides income",
        "Because it causes severe physical and mental harm, denies education and health care",
        "Because children enjoy working",
        "Because it teaches responsibility",
      ],
      answer: "1",
      explanation:
        "Child labor causes SEVERE PHYSICAL AND MENTAL HARM, DENIES education and health care, and can lead to slavery and exploitation.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why POVERTY affects human rights?",
      options: [
        "Because poverty is optional",
        "Because a country's persistent poverty makes it difficult to achieve citizens' human rights — hunger itself is a violation",
        "Because poverty has no effect",
        "Because poverty affects only the government",
      ],
      answer: "1",
      explanation:
        "PERSISTENT POVERTY makes achieving human rights DIFFICULT — hunger itself is a VIOLATION of human rights.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why inequality affects human rights?",
      options: [
        "Because inequality is beneficial",
        "Because inequality discourages mobilization for development and endangers women's rights",
        "Because inequality has no effect",
        "Because inequality is legally required",
      ],
      answer: "1",
      explanation:
        "INEQUALITY discourages FULL MOBILIZATION and ENDANGERS women's rights.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the relationship between human rights and dignity?",
      options: [
        "They are unrelated",
        "Human rights are founded on and protect the DIGNITY of every human being",
        "Dignity comes from wealth",
        "Dignity is optional",
      ],
      answer: "1",
      explanation:
        "Human rights are founded on the DIGNITY of every human being.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why armed conflict affects human rights?",
      options: [
        "Because it strengthens rights",
        "Because it causes displacement, violence, and loss of life and property",
        "Because it has no effect",
        "Because it protects rights",
      ],
      answer: "1",
      explanation:
        "Armed conflict causes DISPLACEMENT, VIOLENCE, and LOSS of LIFE and PROPERTY — violating human rights.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes GENERALIZED VIOLENCE?",
      options: [
        "Organized sporting event",
        "A situation causing displacement and human rights violations",
        "A peaceful protest",
        "A cultural festival",
      ],
      answer: "1",
      explanation:
        "GENERALIZED VIOLENCE causes DISPLACEMENT and HUMAN RIGHTS VIOLATIONS.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why the FDRE constitution is the SUPREME law?",
      options: [
        "Because it is the shortest",
        "Because ALL other laws must conform to it, and conflicting laws are null and void",
        "Because it is written in Amharic",
        "Because the president wrote it",
      ],
      answer: "1",
      explanation:
        "The FDRE constitution is SUPREME — ALL other laws must CONFORM; conflicting laws are NULL AND VOID (Article 9/1).",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes why AFAR and SOMALI regions have PARTIALLY DIFFERENT constitutional provisions?",
      options: [
        "Because they copied the federal constitution directly",
        "Because they used their constitutional space to reflect REGIONAL SOCIOECONOMIC CHARACTERISTICS and policy preferences",
        "Because they ignore the constitution",
        "Because they are the oldest regions",
      ],
      answer: "1",
      explanation:
        "AFAR and SOMALI used their CONSTITUTIONAL SPACE to REFLECT REGIONAL SOCIOECONOMIC CHARACTERISTICS and POLICY preferences.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the RIGHT OF EVERY ETHIOPIAN RESIDENT to be elected or employed in a regional public office?",
      options: [
        "Included only in federal constitution",
        "Included in ALL regional constitutions EXCEPT Afar and Somali",
        "Not a right",
        "Only for the rich",
      ],
      answer: "1",
      explanation:
        "The RIGHT OF EVERY ETHIOPIAN RESIDENT to be ELECTED or EMPLOYED in a regional public office is in ALL REGIONAL CONSTITUTIONS EXCEPT AFAR and SOMALI.",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the CONSUMER PROTECTION right to REDRESS?",
      options: [
        "Right to choose",
        "Right to get compensation for defective goods/services",
        "Right to safety",
        "Right to be respected",
      ],
      answer: "1",
      explanation:
        "Right to REDRESS = right to GET COMPENSATION for complaints.",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the relationship between human rights and the state?",
      options: [
        "The state grants human rights",
        "The state RECOGNIZES and PROTECTS human rights — it does NOT grant them",
        "The state can take human rights away",
        "The state replaces human rights",
      ],
      answer: "1",
      explanation:
        "The STATE RECOGNIZES and PROTECTS human rights — it does NOT GRANT them.",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes why human rights are ETERNAL?",
      options: [
        "Because they change with time",
        "Because they are NOT bound by time — they apply always",
        "Because they are temporary",
        "Because they are modern",
      ],
      answer: "1",
      explanation:
        "ETERNAL = NOT BOUND by time — they apply ALWAYS.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how the FDRE constitution handles human rights?",
      options: [
        "It ignores human rights",
        "It incorporates human rights in Chapter Three and throughout the constitution",
        "It lists only some rights",
        "It leaves rights to regional governments",
      ],
      answer: "1",
      explanation:
        "The FDRE constitution INCORPORATES human rights in CHAPTER THREE and throughout.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why child labor is a violation of Article 36d?",
      options: [
        "Because children should work",
        "Because children shall NOT be subjected to exploitative practices or hazardous work",
        "Because Article 36d is only about education",
        "Because children enjoy labor",
      ],
      answer: "1",
      explanation:
        "Article 36d: children shall NOT be subjected to EXPLOITATIVE practices, nor HAZARDOUS work.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how poverty and inequality interact to affect human rights?",
      options: [
        "They have no effect",
        "Poverty makes basic rights difficult to achieve, while inequality marginalizes groups like women",
        "They strengthen rights",
        "They are required",
      ],
      answer: "1",
      explanation:
        "POVERTY makes basic RIGHTS DIFFICULT; INEQUALITY MARGINALIZES groups like WOMEN — both violate rights.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how the FDRE constitution guarantees the right to equality?",
      options: [
        "Only for men",
        "For ALL persons regardless of gender, colour, creed, social status, parentage, nationality, race, language, or religion",
        "Only for the rich",
        "Only for citizens",
      ],
      answer: "1",
      explanation:
        "FDRE ARTICLE 25 guarantees equality for ALL PERSONS regardless of GENDER, COLOUR, CREED, SOCIAL STATUS, PARENTAGE, NATIONALITY, RACE, LANGUAGE, or RELIGION.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why regional constitutions were adopted at different times?",
      options: [
        "Because of regional differences and evolving federal structure",
        "Because the federal government forgot",
        "Because regions are unequal",
        "Because regions decided randomly",
      ],
      answer: "0",
      explanation:
        "Regional constitutions were adopted at DIFFERENT times due to REGIONAL DIFFERENCES and the EVOLVING FEDERAL STRUCTURE — e.g., Sidama became a region in 2020.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why human rights and democracy are 'mutually constitutive'?",
      options: [
        "Because they are the same",
        "Because each creates and supports the other — democracy needs rights, and rights need democracy",
        "Because they oppose",
        "Because they are unrelated",
      ],
      answer: "1",
      explanation:
        "MUTUALLY CONSTITUTIVE = each CREATES and SUPPORTS the other — democracy NEEDS rights, and rights NEED democracy.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how a functional democracy supports human rights?",
      options: [
        "By suppressing rights",
        "By accommodating diversity, promoting equality, and protecting individual liberties",
        "By concentrating power",
        "By restricting freedom",
      ],
      answer: "1",
      explanation:
        "FUNCTIONAL DEMOCRACY accommodates DIVERSITY, promotes EQUALITY, and protects INDIVIDUAL LIBERTIES.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the right to be informed as a CONSUMER right?",
      options: [
        "Being informed about irrelevant things",
        "Being provided accurate information about products and services",
        "Being misled",
        "Being denied information",
      ],
      answer: "1",
      explanation:
        "CONSUMER right to be INFORMED = being provided ACCURATE information about products and services.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the CONSUMER right to safety?",
      options: [
        "Right to risky products",
        "Right to protection from products that could cause harm",
        "Right to ignore warnings",
        "Right to buy anything",
      ],
      answer: "1",
      explanation:
        "CONSUMER right to SAFETY = protection from products that could cause HARM.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why human rights are INDIVISIBLE?",
      options: [
        "Because they can be divided",
        "Because ALL rights are EQUALLY IMPORTANT — no right is more important than another",
        "Because only civil rights matter",
        "Because only economic rights matter",
      ],
      answer: "1",
      explanation:
        "INDIVISIBLE = ALL rights are EQUALLY IMPORTANT — no right is MORE important than another.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why the right to a healthy environment applies to FUTURE generations?",
      options: [
        "Because only the current generation matters",
        "Because it is an inalienable right attached to human dignity for all generations — existing AND future",
        "Because the environment is optional",
        "Because it only applies to children",
      ],
      answer: "1",
      explanation:
        "The right to a healthy environment is an INALIENABLE right attached to HUMAN DIGNITY — for EXISTING AND FUTURE generations.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why the POVERTY-INEQUALITY-HUMAN RIGHTS relationship is complex?",
      options: [
        "Because poverty is optional",
        "Because persistent poverty makes rights difficult to achieve, and inequality marginalizes groups — creating a cycle of rights violations",
        "Because poverty strengthens rights",
        "Because inequality is beneficial",
      ],
      answer: "1",
      explanation:
        "POVERTY makes rights DIFFICULT; INEQUALITY marginalizes groups — creating a CYCLE of human rights violations.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why 'special consideration' for women is EQUALITY, not discrimination?",
      options: [
        "Because it favours women over men unfairly",
        "Because it CREATES FAIR CONDITIONS so women can COMPETE on equal footing — correcting historical disadvantage",
        "Because it violates men's rights",
        "Because it is temporary",
      ],
      answer: "1",
      explanation:
        "SPECIAL CONSIDERATION CREATES FAIR CONDITIONS for women to COMPETE on EQUAL FOOTING — correcting HISTORICAL DISADVANTAGE.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why democracy is essential for human rights protection?",
      options: [
        "Because democracies have no problems",
        "Because democracy provides mechanisms for accountability, participation, and limiting power — essential for protecting rights",
        "Because authoritarian states protect rights better",
        "Because democracy ignores rights",
      ],
      answer: "1",
      explanation:
        "DEMOCRACY provides ACCOUNTABILITY, PARTICIPATION, and LIMITS on power — ESSENTIAL for PROTECTING rights.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why traditional harmful practices are difficult to eliminate?",
      options: [
        "Because they are legally required",
        "Because they are DEEPLY EMBEDDED in culture and LOOK MORAL to those who engage in them — requiring education and long-term change",
        "Because the government promotes them",
        "Because nobody knows them",
      ],
      answer: "1",
      explanation:
        "Harmful practices are DIFFICULT to eliminate because they are DEEPLY EMBEDDED in culture and LOOK MORAL — requiring EDUCATION and LONG-TERM change.",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "Define human rights and explain their five key characteristics.",
      answer:
        "HUMAN RIGHTS = rights enjoyed by humans simply because they are HUMANS — with no other conditions attached.\n\n" +
        "1) UNIVERSAL — apply to ALL humans everywhere, regardless of race, colour, sex, religion, language, etc.\n" +
        "2) NATURAL — belong to humans BY NATURE, not by grant from any authority.\n" +
        "3) ETERNAL — not bound by time; apply always.\n" +
        "4) INALIENABLE — CANNOT be taken away or given up.\n" +
        "5) INVIOLABLE — CANNOT be violated without serious wrong.",
      explanation: "Banchi, remember the five characteristics.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "Describe the THREE generations of human rights with examples.",
      answer:
        "1) FIRST GENERATION — CIVIL AND POLITICAL RIGHTS:\n" +
        "• Articles 2–21 UDHR; FDRE articles 14–40.\n" +
        "• Also called LIBERTY RIGHTS.\n" +
        "• Examples: right to life, security, privacy, thought and expression, religious freedom, association, property, protection against slavery.\n\n" +
        "2) SECOND GENERATION — ECONOMIC, SOCIAL AND CULTURAL RIGHTS:\n" +
        "• Articles 22–27 UDHR; FDRE articles 41–42.\n" +
        "• Also called EQUALITY RIGHTS.\n" +
        "• Examples: right to work, social security, good living, education, health services.\n" +
        "• Plus consumer protection rights (safety, informed, choose, redress, respected).\n\n" +
        "3) THIRD GENERATION — SOLIDARITY (FRATERNITY) RIGHTS:\n" +
        "• Article 28 UDHR; FDRE articles 43–44.\n" +
        "• Examples: right to power, just distribution of wealth, development, clean and healthy environment, participation in development, peace.",
      explanation: "Banchi, memorize the three generations with their article numbers.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "Explain the Right to Equality with reference to FDRE articles 25, 35, and 89.",
      answer:
        "The RIGHT TO EQUALITY means everyone has the right to EQUAL TREATMENT and service from government and non-governmental institutions. It ensures EQUAL OPPORTUNITY for all to make the most of their lives and talents.\n\n" +
        "FDRE ARTICLE 25: ALL PERSONS are EQUAL BEFORE THE LAW and entitled to EQUAL PROTECTION without discrimination — regardless of gender, colour, creed, social status, parentage, nationality, race, language, or religion.\n\n" +
        "FDRE ARTICLE 35/2: WOMEN must be given SPECIAL CONSIDERATION to COMPETE and PARTICIPATE on equal footing with men in political, social, and economic life.\n\n" +
        "FDRE ARTICLE 89/4: The government shall provide SPECIAL ASSISTANCE to Nations, Nationalities, and Peoples who are LEAST FAVOURED in economic and social development.",
      explanation:
        "Banchi, remember: Article 25 = general equality; 35 = women; 89/4 = least-favoured regions.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Analyze the relationship between democracy and human rights, and describe the SIX challenges of protecting human rights in Ethiopia.",
      answer:
        "RELATIONSHIP BETWEEN DEMOCRACY AND HUMAN RIGHTS:\n" +
        "• Democracy and human rights are INTERDEPENDENT, COMPLEX, MUTUALLY SUPPORTIVE, SYMBIOTIC, and 'MUTUALLY CONSTITUTIVE.'\n" +
        "• Human rights are INEXTRICABLY LINKED to democracy.\n" +
        "• Only in a DEMOCRATIC state can human rights be EFFECTIVELY PROTECTED.\n" +
        "• A functional democracy that accommodates diversity, promotes equality, and protects individual liberties is the best hedge against concentration of power and abuse of human rights.\n\n" +
        "SIX CHALLENGES OF PROTECTING HUMAN RIGHTS IN ETHIOPIA:\n" +
        "1) TRADITIONAL HARMFUL PRACTICES — FGM, early marriage, marriage by abduction, forced marriage, wife inheritance, polygamy, uvulotomy, milk teeth extraction, food taboos, incision of eyelid, cauterization.\n" +
        "2) POVERTY AND INEQUALITY — hunger is a violation; inequality impedes development and endangers women's rights.\n" +
        "3) CHILD LABOR ABUSE — severe harm, denies education, leads to exploitation.\n" +
        "4) CONFLICT AND DISPLACEMENT — people forced to flee homes.\n" +
        "5) WEAK INSTITUTIONS — lack of Human Rights Commission, Ombudsperson, etc.\n" +
        "6) DEMOCRACY DEFICIT — without democracy, rights cannot be effectively protected.",
      explanation:
        "Banchi, memorize the relationship + all six challenges.",
    },
  ],
};