import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 HISTORY — UNIT 6
// ETHIOPIA: INTERNAL DEVELOPMENTS & EXTERNAL INFLUENCES 1941–1991
// Source: Grade 10 History Student Textbook (pp. 144–end)
// For: Abenezer (Abatu) — Grade 10
// Style: mastery-lab (Date Ladder, Name→Role, Acronym Decoder,
// Treaty tables, Cause→Event→Result, exam traps, model short answers)
// ============================================================

export const g10HistoryCh6: Chapter = {
  id: "ch6",
  number: 6,
  title: "Ethiopia: Internal Developments & External Influences from 1941 to 1991",
  titleAm: "ኢትዮጵያ፡ ውስጣዊ እድገቶችና ውጫዊ ተጽዕኖዎች ከ1941 እስከ 1991",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS UNIT
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Unit (Your Route to 100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this unit is DETAIL-HEAVY (treaties, constitutions, revolts, acronyms). Exams love mixing up British vs American periods, 1931 vs 1955 Constitution, and Imperial vs Derg land policy.\n\n" +
        "FOUR big parts:\n" +
        "1) Post-liberation (British era 1941–mid-1950s + American era + 1955 Constitution + land tenure)\n" +
        "2) Early opposition (peasant revolts, 1960 coup, student movement)\n" +
        "3) 1974 Revolution + Derg reforms + Red Terror\n" +
        "4) Ethio-Somali War, Eritrea question, fall of the Derg (1991)\n\n" +
        "Master these FIVE must-know items:\n" +
        "• 1942 & 1944 Anglo-Ethiopian treaties (British control then gradual restoration)\n" +
        "• 1955 Revised Constitution strengthened the Emperor’s absolute power\n" +
        "• Land: rist/gult → qalad measurement → widespread tenancy (chisegna) in the South\n" +
        "• 1974 Revolution → Derg (PMAC) → nationalisation of land 1975 → Red Terror\n" +
        "• 1991 = fall of Derg; EPRDF takes power",
      bodyAm:
        "አባቱ፣ ይህ ክፍል ዝርዝር የበዛ ነው።\n" +
        "አራት ትላልቅ ክፍሎች፦ ከነጻነት በኋላ፣ ቀደምት ተቃውሞ፣ 1974 አብዮት + ደርግ፣ የደርግ ውድቀት።",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Date Ladder (memorise this = half the exam)",
          titleAm: "ደረጃ 1 · የቀን መሰላል",
          body:
            "5 May 1941 – Haile Selassie returns to Addis Ababa\n" +
            "31 Jan 1942 – First Anglo-Ethiopian Treaty\n" +
            "Dec 1944 – Second Anglo-Ethiopian Treaty\n" +
            "1941–1952 – British administration of Eritrea\n" +
            "1950 – UN Resolution 390 V (Eritrea federated with Ethiopia)\n" +
            "1952 – Federation of Eritrea with Ethiopia; Point Four Agreement with USA\n" +
            "1953 – Ethio-American Treaty (Kagnew Station + MAAG)\n" +
            "1954 – Ogaden returned to Ethiopia\n" +
            "1955 – Revised Constitution of Ethiopia\n" +
            "Dec 1960 – Abortive coup by Imperial Bodyguard\n" +
            "1962 – Eritrea’s federal status abolished → annexed as province\n" +
            "1974 – Ethiopian Revolution; Haile Selassie deposed (12 Sept)\n" +
            "1975 – Land nationalisation (Proclamation 31)\n" +
            "1977–78 – Red Terror; Ogaden War (Ethio-Somali War)\n" +
            "1991 – Fall of the Derg; EPRDF enters Addis Ababa",
          bodyAm:
            "1941 መመለስ። 1942 + 1944 የእንግሊዝ ስምምነቶች። 1955 ሕገ መንግሥት። 1974 አብዮት። 1975 መሬት ብሔራዊ። 1991 ደርግ ወደቀ።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Name → Role table",
          titleAm: "ደረጃ 2 · ስም → ሚና",
          body:
            "• Haile Selassie – Emperor; returned 1941; ruled until 1974\n" +
            "• British Military Mission to Ethiopia (BMME) – trained Ethiopian army after 1944\n" +
            "• Point Four – US technical assistance programme (1952)\n" +
            "• Kagnew Station – US communication base in Asmara (named after Ethiopian Korean War battalion)\n" +
            "• MAAG – Military Assistance Advisory Group (US)\n" +
            "• Mengistu Haile Mariam – dominant figure in the Derg; later Head of State\n" +
            "• Derg / PMAC – Provisional Military Administrative Council (took power 1974)\n" +
            "• Waqo Gutu – leader of Bale peasant revolt (surrendered 1970)\n" +
            "• EPRDF – Ethiopian People’s Revolutionary Democratic Front (took power 1991)\n" +
            "• EPLF – Eritrean People’s Liberation Front\n" +
            "• TPLF – Tigray People’s Liberation Front (core of EPRDF)",
          bodyAm:
            "Haile Selassie = ንጉሠ ነገሥት። Derg = ወታደራዊ ምክር ቤት። Mengistu = ዋና መሪ። 1991 EPRDF።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Acronym Decoder",
          titleAm: "ደረጃ 3 · አክሮኒም",
          body:
            "OETA = Occupied Enemy Territory Administration (British, over Ogaden & Eritrea)\n" +
            "BMME = British Military Mission to Ethiopia\n" +
            "MAAG = Military Assistance Advisory Group (USA)\n" +
            "PMAC = Provisional Military Administrative Council (= Derg)\n" +
            "WPE = Workers’ Party of Ethiopia (Derg’s party)\n" +
            "PDRE = People’s Democratic Republic of Ethiopia (1987 constitution)\n" +
            "EPLF = Eritrean People’s Liberation Front\n" +
            "TPLF = Tigray People’s Liberation Front\n" +
            "OLF = Oromo Liberation Front\n" +
            "EPRDF = Ethiopian People’s Revolutionary Democratic Front",
          bodyAm:
            "Derg = PMAC። MAAG = የUSA ወታደራዊ እርዳታ። EPRDF = 1991 ሥልጣን ያዘ።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Key Treaty / Agreement table",
          titleAm: "ደረጃ 4 · ስምምነቶች",
          body:
            "• 31 Jan 1942 Anglo-Ethiopian Treaty – recognised independence but kept heavy British control (army training, advisors, Ogaden, radio, railway, currency)\n" +
            "• Dec 1944 Anglo-Ethiopian Treaty – reduced British privileges; promised return of Ogaden; set up BMME\n" +
            "• 1950 UN Resolution 390 V – Eritrea federated with Ethiopia\n" +
            "• 15 May 1952 Point Four Agreement – US technical aid (agriculture, health, education, administration)\n" +
            "• 1953 Ethio-American Treaty – USA allowed to run Kagnew Station; promised military aid (MAAG)",
          bodyAm:
            "1942 = ጠንካራ የእንግሊዝ ቁጥጥር። 1944 = ቅናሽ። 1952 Point Four። 1953 Kagnew + MAAG።",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard — before you submit",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Haile Selassie returned 5 May 1941\n" +
            "• 1942 treaty = more restrictive; 1944 treaty = more favourable to Ethiopia\n" +
            "• Ogaden fully returned only in 1954\n" +
            "• Eritrea federated 1952; annexed as province 1962\n" +
            "• 1955 Constitution strengthened (did not limit) the Emperor’s power\n" +
            "• 1931 = first written constitution; 1955 = revised\n" +
            "• Land nationalisation = March 1975 (Proclamation 31)\n" +
            "• Red Terror peak = 1977–78\n" +
            "• Derg fell May 1991",
          bodyAm:
            "1942 vs 1944። 1955 ሕገ መንግሥት ንጉሡን አጠናከረ። 1975 መሬት። 1991 ደርግ ወደቀ።",
        },
      ],
    },

    // ============================================================
    // 6.1 POST-LIBERATION PERIOD
    // ============================================================
    {
      id: "n1",
      title: "6.1 Major Administrative Reforms and Socio-Economic Conditions in the Post-Liberation Period",
      titleAm: "6.1 ከነጻነት በኋላ ያሉ አስተዳደራዊ ማሻሻያዎችና ማኅበረ-ኢኮኖሚያዊ ሁኔታዎች",
      body:
        "After the defeat of Fascist Italy, Haile Selassie returned on 5 May 1941. Ethiopia was formally independent but remained under strong British (then American) influence while the Emperor worked to centralise power.",
      bodyAm:
        "5 ሜይ 1941 ንጉሠ ነገሥቱ ተመለሱ። ነጻነት ነበር ግን የእንግሊዝ (ከዚያ የአሜሪካ) ተጽዕኖ ጠንካራ ነበር።",
      children: [
        {
          id: "n1-1",
          title: "🇬🇧 The British Era (1941 – mid-1950s)",
          titleAm: "🇬🇧 የእንግሊዝ ዘመን",
          body:
            "British forces helped liberate Ethiopia. They set up the Occupied Enemy Territory Administration (OETA) over the Ogaden and Eritrea.\n\n" +
            "First Anglo-Ethiopian Treaty (31 January 1942):\n" +
            "• Recognised Ethiopia as independent\n" +
            "• But restricted sovereignty heavily:\n" +
            "  – Ethiopian army trained by British\n" +
            "  – British minister had diplomatic precedence\n" +
            "  – British advisors in every ministry\n" +
            "  – British could use former Italian state property free of charge\n" +
            "  – British kept control of Haud & Reserved Area (Ogaden border)\n" +
            "  – Radio, telephone and railway under British control\n" +
            "  – British East African Shilling = official currency\n\n" +
            "Second Anglo-Ethiopian Treaty (December 1944):\n" +
            "• Reduced British privileges\n" +
            "• Promised restoration of Ogaden\n" +
            "• Allowed use of Djibouti–Addis Ababa railway\n" +
            "• Lifted diplomatic precedence of British minister\n" +
            "• Established British Military Mission to Ethiopia (BMME) to train and modernise the army\n\n" +
            "Ogaden stayed under British control until 1954.\n" +
            "Eritrea remained under British administration 1941–1952.",
          bodyAm:
            "1942 ስምምነት = ጠንካራ ቁጥጥር። 1944 = ቅናሽ + BMME። ኦጋዴን እስከ 1954። ኤርትራ እስከ 1952።",
        },
        {
          id: "n1-2",
          title: "🇪🇷 The Eritrea Question (1941–1962)",
          titleAm: "🇪🇷 የኤርትራ ጥያቄ",
          body:
            "Political groups in Eritrea after 1941:\n" +
            "1. Unionist Party – largest; mainly Orthodox Christian & Tigrinya-speaking; wanted union with Ethiopia\n" +
            "2. Independence bloc – opposed union:\n" +
            "   • Muslim League (lowlands)\n" +
            "   • Liberal Progressive Party (wanted independence or union with Tigray; British-influenced)\n" +
            "   • Pro-Italian party (settlers, ex-askaris, mixed-race)\n\n" +
            "Four Powers (Britain, France, USSR, USA) could not agree → handed to UN.\n" +
            "UN Resolution 390 V (2 December 1950) → Eritrea federated with Ethiopia under the sovereignty of the Ethiopian Crown.\n" +
            "Federation implemented 1952.\n" +
            "1962 – federal status abolished; Eritrea became an ordinary province of Ethiopia.",
          bodyAm:
            "Unionist = ከኢትዮጵያ ጋር። 1950 UN Resolution 390 V = ፌዴሬሽን። 1962 = ግዛት ሆነ።",
        },
        {
          id: "n1-3",
          title: "🇺🇸 The American Era",
          titleAm: "🇺🇸 የአሜሪካ ዘመን",
          body:
            "Point Four Agreement (15 May 1952):\n" +
            "• US technical assistance in locust control, agriculture, public health, education, public administration, scholarships\n\n" +
            "1953 Ethio-American Treaty:\n" +
            "• Context: after 1952 Egyptian Free Officers’ revolt, USA looked for new Middle-East partner\n" +
            "• USA allowed to operate Kagnew Station (former Italian Radio Marina in Asmara)\n" +
            "• Named after the Ethiopian battalion that fought in the Korean War on the American side\n" +
            "• In return USA promised military assistance → created Military Assistance Advisory Group (MAAG)\n" +
            "• Strong American influence in military training, communications and education\n\n" +
            "Decline of Ethio-US relations (1960s–70s):\n" +
            "• Satellite communication reduced the strategic value of Kagnew\n" +
            "• Growing student opposition to ‘American imperialism’\n" +
            "• By 1974 the special relationship was already weakening",
          bodyAm:
            "1952 Point Four። 1953 Kagnew + MAAG። 1960ዎቹ ግንኙነት ደከመ።",
        },
        {
          id: "n1-4",
          title: "🏛 Administrative Reforms & 1955 Constitution",
          titleAm: "🏛 አስተዳደራዊ ማሻሻያና 1955 ሕገ መንግሥት",
          body:
            "• 1942 – Ethiopia reorganised into 12 teqlaygezats (governorate-generals)\n" +
            "• Each divided into awrajas → weredas → mikitil weredas\n" +
            "• Head of teqlaygezat = enderase (appointed by the Emperor)\n\n" +
            "Revised Constitution of 1955:\n" +
            "• Reasons: strengthen centralisation; attract educated elite; respond to Eritrea’s more modern federal institutions\n" +
            "• Strengthened the absolute power of the Emperor\n" +
            "• Emperor remained head of executive, legislative and judiciary\n" +
            "• Did NOT introduce popular sovereignty, rule of law or genuine separation of powers\n" +
            "• Focused on centralisation rather than cultural diversity or democratic rights\n\n" +
            "Comparison:\n" +
            "• 1931 = first written constitution (still absolute)\n" +
            "• 1955 = revised version that further consolidated imperial power",
          bodyAm:
            "12 ተቅላይ ገዛት። 1955 ሕገ መንግሥት ንጉሡን አጠናከረ (አላዳከመም)።",
        },
        {
          id: "n1-5",
          title: "🌾 Agriculture, Land Tenure and Tenancy",
          titleAm: "🌾 ግብርና፣ የመሬት ይዞታና ተከራይነት",
          body:
            "Traditional systems:\n" +
            "• Rist – hereditary land rights based on lineage\n" +
            "• Gult – right to collect tribute (gibir) granted by the Emperor to nobles, officials, church\n\n" +
            "Qalad (land measurement):\n" +
            "• Expanded under Menilek and continued after liberation\n" +
            "• Land classified as lem (fertile), lem-tef (semi-fertile), tef (unfertile)\n" +
            "• Facilitated taxation and private ownership / sale of land\n\n" +
            "Consequences:\n" +
            "• Rapid growth of private tenure and land sales (especially last 15 years before 1974)\n" +
            "• Widespread tenancy (chisegna), especially in the South (50–65 % of holdings)\n" +
            "• Most peasants remained subsistence farmers living in poverty\n" +
            "• Land was the basis of political power as well as the economy",
          bodyAm:
            "Rist + Gult። Qalad = መለካት። በደቡብ chisegna (ተከራይነት) በጣም ተስፋፍቶ ነበር።",
        },
        {
          id: "n1-6",
          title: "⚠ EXAM TRAP — Post-liberation",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• 1942 treaty more restrictive than 1944 treaty\n" +
            "• Ogaden returned 1954 (not immediately in 1944)\n" +
            "• Eritrea federated 1952, annexed 1962\n" +
            "• 1955 Constitution strengthened (did not weaken) imperial power\n" +
            "• Unionist Party wanted union with Ethiopia; Muslim League & others wanted independence\n" +
            "• Kagnew named after Ethiopian Korean War battalion\n" +
            "• Point Four = 1952; Kagnew/MAAG treaty = 1953",
          bodyAm:
            "1942 > 1944 ቁጥጥር። 1955 አጠናከረ። 1952 ፌዴሬሽን፣ 1962 ግዛት።",
        },
      ],
    },

    // ============================================================
    // 6.2 EARLY OPPOSITION
    // ============================================================
    {
      id: "n2",
      title: "6.2 Early Opposition Movements against the Imperial Regime",
      titleAm: "6.2 ቀደምት ተቃውሞዎች",
      body:
        "Opposition came from peasants, the 1960 coup attempt, and especially the student movement of the 1960s–70s.",
      bodyAm:
        "ገበሬዎች፣ 1960 መፈንቅለ መንግሥት፣ የተማሪዎች ንቅናቄ።",
      children: [
        {
          id: "n2-1",
          title: "Peasant Revolts",
          titleAm: "የገበሬዎች አመጾች",
          body:
            "• Several regional peasant uprisings caused by land alienation, heavy taxation and maladministration\n" +
            "• Most famous: Bale revolt led by Waqo Gutu (ended with his surrender in 1970)\n" +
            "• Showed deep rural discontent that the 1974 Revolution later channelled",
          bodyAm:
            "ባሌ አመጽ (Waqo Gutu) እስከ 1970።",
        },
        {
          id: "n2-2",
          title: "The 1960 Abortive Coup",
          titleAm: "የ1960 የተሳካ አለመሆን መፈንቅለ መንግሥት",
          body:
            "• December 1960 – led by commanders of the Imperial Bodyguard while the Emperor was abroad\n" +
            "• Aimed to reform or replace the regime\n" +
            "• Crushed within a few days\n" +
            "• Revealed cracks inside the military and elite; shocked the palace",
          bodyAm:
            "ታህሳስ 1960። የንጉሡ አካል ጥበቃ። በፍጥነት ተሰበረ።",
        },
        {
          id: "n2-3",
          title: "The Student Movement",
          titleAm: "የተማሪዎች ንቅናቄ",
          body:
            "• Grew strongly in the 1960s and early 1970s\n" +
            "• Demanded land reform (‘Land to the Tiller’), democracy, end of imperial absolutism, and later opposed American influence\n" +
            "• Became the most organised and ideologically radical opposition force\n" +
            "• Many future Derg and leftist leaders came from this generation",
          bodyAm:
            "‘መሬት ለአራሹ’። ዲሞክራሲ። የአሜሪካ ተጽዕኖ ተቃውሞ።",
        },
        {
          id: "n2-4",
          title: "⚠ EXAM TRAP — Opposition",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• 1960 coup = abortive (failed)\n" +
            "• Waqo Gutu = Bale peasant leader\n" +
            "• Student movement = main urban radical force before 1974",
          bodyAm:
            "1960 = አልተሳካም። Waqo Gutu = ባሌ።",
        },
      ],
    },

    // ============================================================
    // 6.3 1974 REVOLUTION AND THE DERG
    // ============================================================
    {
      id: "n3",
      title: "6.3 The Ethiopian Revolution of 1974, the Derg and the Red Terror",
      titleAm: "6.3 የ1974 አብዮት፣ ደርግ እና ቀይ ሽብር",
      body:
        "A combination of famine, economic crisis, military mutinies and popular protest brought down the imperial regime in 1974. Power was seized by a military committee known as the Derg.",
      bodyAm:
        "1974 አብዮት → ደርግ ሥልጣን ያዘ።",
      children: [
        {
          id: "n3-1",
          title: "Causes of the 1974 Revolution",
          titleAm: "የ1974 አብዮት ምክንያቶች",
          body:
            "• Long-term: feudal land system, absolute monarchy, lack of political rights, regional inequalities\n" +
            "• Immediate: 1973–74 famine (especially Wollo), rising oil prices, urban inflation, mutinies in the armed forces, student and teacher strikes, taxi strikes\n" +
            "• Slogan that captured the mood: ‘Land to the Tiller’",
          bodyAm:
            "የረጅም ጊዜ = የመሬት ሥርዓት + አምባገነንነት። ቀጥታ = ረሃብ + ወታደራዊ አመጽ።",
        },
        {
          id: "n3-2",
          title: "The Derg Takes Power",
          titleAm: "ደርግ ሥልጣን መያዝ",
          body:
            "• Derg = Coordinating Committee of the Armed Forces, Police and Territorial Army (later PMAC – Provisional Military Administrative Council)\n" +
            "• 12 September 1974 – Haile Selassie deposed\n" +
            "• Initially promised reform; soon moved to radical socialist policies\n" +
            "• Mengistu Haile Mariam emerged as the dominant figure",
          bodyAm:
            "12 መስከረም 1974 ንጉሠ ነገሥቱ ተወገዱ። Mengistu ጎልቶ ወጣ።",
        },
        {
          id: "n3-3",
          title: "Major Derg Reforms",
          titleAm: "የደርግ ማሻሻያዎች",
          body:
            "• March 1975 – Proclamation 31: rural land nationalised; tenancy abolished; land given to peasants’ associations\n" +
            "• Urban land and extra houses also nationalised\n" +
            "• Major industries, banks and insurance nationalised\n" +
            "• Literacy campaign, expansion of education and health services\n" +
            "• 1987 – Constitution of the People’s Democratic Republic of Ethiopia (PDRE); Workers’ Party of Ethiopia (WPE) as vanguard party",
          bodyAm:
            "1975 መሬት ብሔራዊ ተደረገ። ኪራይ ተሰረዘ።",
        },
        {
          id: "n3-4",
          title: "The Red Terror (1977–78)",
          titleAm: "ቀይ ሽብር",
          body:
            "• Campaign of urban violence launched by the Derg against opposition groups (especially EPRP and other leftists)\n" +
            "• Mass arrests, executions, public display of bodies\n" +
            "• Thousands killed; created deep trauma and fear\n" +
            "• Consolidated Mengistu’s personal power",
          bodyAm:
            "1977–78። በሺዎች የሚቆጠሩ ተገደሉ።",
        },
        {
          id: "n3-5",
          title: "⚠ EXAM TRAP — Revolution & Derg",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• Haile Selassie deposed 12 September 1974\n" +
            "• Land nationalisation = 1975 (not 1974)\n" +
            "• Red Terror peak = 1977–78\n" +
            "• Derg = military committee (PMAC)\n" +
            "• Imperial land policy = private / tenancy; Derg = nationalisation / peasant associations",
          bodyAm:
            "1974 = አብዮት። 1975 = መሬት። 1977–78 = ቀይ ሽብር።",
        },
      ],
    },

    // ============================================================
    // 6.4 WARS, ERITREA, FALL OF DERG
    // ============================================================
    {
      id: "n4",
      title: "6.4 Ethio-Somali War, the Eritrean Question and the Fall of the Derg",
      titleAm: "6.4 የኢትዮ-ሶማሌ ጦርነት፣ የኤርትራ ጥያቄና የደርግ ውድቀት",
      body:
        "The Derg faced major military challenges on two fronts and eventually collapsed in 1991 under the combined pressure of internal rebellion and economic failure.",
      bodyAm:
        "ሁለት ግንባር + ኢኮኖሚያዊ ችግር → 1991 ደርግ ወደቀ።",
      children: [
        {
          id: "n4-1",
          title: "The Ogaden / Ethio-Somali War (1977–78)",
          titleAm: "የኦጋዴን ጦርነት",
          body:
            "• Somalia invaded the Ogaden in 1977 hoping to annex it\n" +
            "• Derg received massive military support from the Soviet Union and Cuba\n" +
            "• Ethiopian forces (with Cuban troops) pushed the Somalis out in 1978\n" +
            "• Strengthened the Derg’s alliance with the Eastern Bloc but drained resources",
          bodyAm:
            "1977 ሶማሌ ወረረች። 1978 በሶቪየትና ኩባ እርዳታ ተመለሰች።",
        },
        {
          id: "n4-2",
          title: "The Eritrean Struggle",
          titleAm: "የኤርትራ ትግል",
          body:
            "• After the 1962 annexation, armed struggle intensified\n" +
            "• Main organisation: Eritrean People’s Liberation Front (EPLF)\n" +
            "• By the late 1980s EPLF controlled most of the countryside\n" +
            "• Combined with TPLF and other fronts to form a strong anti-Derg alliance",
          bodyAm:
            "EPLF ዋና ኃይል። በ1980ዎቹ መጨረሻ ብዙ ግዛት ያዘ።",
        },
        {
          id: "n4-3",
          title: "Fall of the Derg (1991)",
          titleAm: "የደርግ ውድቀት",
          body:
            "• Causes: endless wars (Eritrea, Tigray, Oromo areas), economic collapse, loss of Soviet support after 1989, internal demoralisation\n" +
            "• May 1991 – EPRDF forces entered Addis Ababa; Mengistu fled\n" +
            "• EPRDF (dominated by TPLF) took power and established a transitional government\n" +
            "• Eritrea gained de-facto independence (formal referendum 1993)",
          bodyAm:
            "ሜይ 1991 EPRDF አዲስ አበባ ገባ። Mengistu ሸሸ።",
        },
        {
          id: "n4-4",
          title: "⚠ EXAM TRAP — Final years",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• Ogaden War 1977–78 (Derg victory with Soviet/Cuban help)\n" +
            "• Derg fell May 1991 (not 1989 or 1993)\n" +
            "• EPRDF = the coalition that took power\n" +
            "• EPLF = Eritrean front; TPLF = Tigrayan front (core of EPRDF)",
          bodyAm:
            "1977–78 ኦጋዴን። 1991 ደርግ ወደቀ። EPRDF ሥልጣን ያዘ።",
        },
      ],
    },

    // ============================================================
    // UNIT SUMMARY + COMMON EXAM TRAPS
    // ============================================================
    {
      id: "nSummary",
      title: "Unit Summary — The Big Picture",
      titleAm: "የክፍሉ ማጠቃለያ",
      body:
        "1. 1941–mid-1950s: British influence (1942 & 1944 treaties, OETA, BMME); gradual restoration of sovereignty; Ogaden returned 1954.\n" +
        "2. 1950s–60s: American influence (Point Four, Kagnew, MAAG); 1955 Constitution strengthened the Emperor; land privatisation and tenancy grew.\n" +
        "3. Eritrea federated 1952, annexed 1962 → long armed struggle.\n" +
        "4. Opposition: peasant revolts, 1960 coup, radical student movement.\n" +
        "5. 1974 Revolution → Derg → 1975 land nationalisation → Red Terror 1977–78.\n" +
        "6. Ogaden War 1977–78 (Derg victory); prolonged Eritrean and other wars.\n" +
        "7. 1991: Derg collapsed; EPRDF took power; Eritrea moved to independence.",
      bodyAm:
        "1941–54 እንግሊዝ። 1950ዎቹ አሜሪካ። 1955 ሕገ መንግሥት። 1974 አብዮት። 1975 መሬት። 1991 ደርግ ወደቀ።",
    },
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 6",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1. Haile Selassie returned 5 May 1941.\n" +
        "2. 1942 treaty more restrictive than 1944.\n" +
        "3. Ogaden fully Ethiopian again only in 1954.\n" +
        "4. Eritrea: UN Resolution 390 V (1950) → federation 1952 → annexation 1962.\n" +
        "5. 1955 Constitution strengthened imperial power.\n" +
        "6. Point Four = 1952; Kagnew/MAAG = 1953.\n" +
        "7. 1960 coup = failed.\n" +
        "8. Land nationalisation = March 1975.\n" +
        "9. Red Terror = 1977–78.\n" +
        "10. Derg fell May 1991; EPRDF took power.\n" +
        "11. Imperial land = rist/gult + tenancy; Derg = nationalisation + peasant associations.\n" +
        "12. Waqo Gutu = Bale revolt.",
      bodyAm:
        "12 ወጥመዶች። ቀኖችንና ስሞችን በጥንቃቄ።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Haile Selassie returned to Addis Ababa on:", options: ["5 May 1941", "31 January 1942", "12 September 1974", "5 May 1945"], answer: "0", explanation: "He returned on 5 May 1941 after the defeat of the Italians." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "The first Anglo-Ethiopian Treaty after liberation was signed on:", options: ["5 May 1941", "31 January 1942", "December 1944", "15 May 1952"], answer: "1", explanation: "The first treaty was signed on 31 January 1942." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Which treaty reduced British privileges and established the BMME?", options: ["1942 Treaty", "1944 Treaty", "1953 Treaty", "Point Four"], answer: "1", explanation: "The December 1944 treaty reduced privileges and set up the British Military Mission to Ethiopia." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Ogaden was fully returned to Ethiopia in:", options: ["1941", "1944", "1952", "1954"], answer: "3", explanation: "Although promised earlier, Ogaden remained under British control until 1954." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "UN Resolution 390 V (1950) decided that Eritrea should be:", options: ["Independent", "Given to Sudan", "Federated with Ethiopia", "Returned to Italy"], answer: "2", explanation: "The resolution decided on federation with Ethiopia under the Ethiopian Crown." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Eritrea was federated with Ethiopia in:", options: ["1950", "1952", "1962", "1993"], answer: "1", explanation: "Federation was implemented in 1952." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Eritrea’s federal status was abolished and it became a province in:", options: ["1952", "1960", "1962", "1974"], answer: "2", explanation: "In 1962 the federation was ended and Eritrea was annexed as a province." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The Point Four Agreement with the USA was signed in:", options: ["1944", "1952", "1953", "1960"], answer: "1", explanation: "Point Four was signed on 15 May 1952." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Kagnew Station was a US facility located in:", options: ["Addis Ababa", "Asmara", "Dire Dawa", "Harar"], answer: "1", explanation: "Kagnew Station was in Asmara (former Italian Radio Marina)." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "The 1955 Constitution of Ethiopia:", options: ["Introduced multi-party democracy", "Strengthened the absolute power of the Emperor", "Abolished the monarchy", "Gave full power to parliament"], answer: "1", explanation: "The Revised Constitution of 1955 further consolidated the Emperor’s power." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The traditional hereditary land-right system based on lineage is called:", options: ["Gult", "Rist", "Qalad", "Chisegna"], answer: "1", explanation: "Rist refers to land owned on the basis of lineage." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "The right to collect tribute granted by the Emperor was known as:", options: ["Rist", "Gult", "Qalad", "Lem"], answer: "1", explanation: "Gult was the right to collect tribute (gibir)." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Widespread tenancy in the southern half of Ethiopia was locally called:", options: ["Rist", "Gult", "Chisegna", "Qalad"], answer: "2", explanation: "Chisegna refers to the tenancy system." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "The abortive coup by the Imperial Bodyguard took place in:", options: ["1955", "1960", "1962", "1974"], answer: "1", explanation: "The coup attempt occurred in December 1960." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Haile Selassie was deposed on:", options: ["5 May 1941", "12 September 1974", "March 1975", "May 1991"], answer: "1", explanation: "He was deposed on 12 September 1974." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "The military committee that took power in 1974 was known as the:", options: ["EPRDF", "Derg (PMAC)", "EPLF", "WPE"], answer: "1", explanation: "It was called the Derg (later Provisional Military Administrative Council)." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Rural land was nationalised by the Derg in:", options: ["1974", "1975", "1977", "1987"], answer: "1", explanation: "Proclamation 31 of March 1975 nationalised rural land." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "The Red Terror reached its peak in:", options: ["1974–75", "1977–78", "1984–85", "1990–91"], answer: "1", explanation: "The Red Terror was most intense in 1977–78." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "The Ethio-Somali (Ogaden) War took place in:", options: ["1960–62", "1974–75", "1977–78", "1989–91"], answer: "2", explanation: "Somalia invaded in 1977 and was pushed back in 1978." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "The Derg regime finally fell in:", options: ["1987", "1989", "1991", "1993"], answer: "2", explanation: "EPRDF forces entered Addis Ababa in May 1991." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "The coalition that took power in 1991 was the:", options: ["Derg", "EPLF", "EPRDF", "OLF"], answer: "2", explanation: "The Ethiopian People’s Revolutionary Democratic Front (EPRDF) took power." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "BMME stands for:", options: ["British Military Mission to Ethiopia", "British Monetary Mission to Ethiopia", "Basic Military and Medical Education", "British Ministry of Ethiopian Affairs"], answer: "0", explanation: "British Military Mission to Ethiopia." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "MAAG stands for:", options: ["Military Assistance Advisory Group", "Modern Army Advisory Group", "Ministry of Agriculture and Agrarian Growth", "Mutual Aid and Assistance Group"], answer: "0", explanation: "Military Assistance Advisory Group (USA)." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "The largest political group in Eritrea that wanted union with Ethiopia was the:", options: ["Muslim League", "Liberal Progressive Party", "Unionist Party", "Pro-Italian party"], answer: "2", explanation: "The Unionist Party was the single largest group and demanded unification." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "Kagnew Station was named after:", options: ["An American general", "An Ethiopian battalion that fought in the Korean War", "A British officer", "The Emperor’s horse"], answer: "1", explanation: "It was named after the Ethiopian Kagnew battalion that served in Korea." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "The first written constitution of Ethiopia was issued in:", options: ["1931", "1955", "1974", "1987"], answer: "0", explanation: "The first written constitution was that of 1931; 1955 was a revision." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Which of the following was a major slogan of the student movement?", options: ["Long live the Emperor", "Land to the Tiller", "Dollar Imperialism forever", "Support the 1955 Constitution"], answer: "1", explanation: "‘Land to the Tiller’ was the central demand of the radical students." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Waqo Gutu is associated with the:", options: ["1960 coup", "Bale peasant revolt", "Red Terror", "Ogaden War"], answer: "1", explanation: "He was the leader of the Bale revolt and surrendered in 1970." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "The Derg’s party, established later, was called the:", options: ["EPRDF", "WPE (Workers’ Party of Ethiopia)", "EPLF", "OLF"], answer: "1", explanation: "The Workers’ Party of Ethiopia (WPE) was the vanguard party." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "Which country provided major military help to the Derg during the Ogaden War?", options: ["USA", "Britain", "Soviet Union (and Cuba)", "China"], answer: "2", explanation: "The Soviet Union and Cuba gave decisive support." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "OETA stands for:", options: ["Organisation of Ethiopian Territorial Army", "Occupied Enemy Territory Administration", "Office of Ethiopian Trade Affairs", "Ogaden Ethiopian Transitional Authority"], answer: "1", explanation: "Occupied Enemy Territory Administration (British)." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "The head of each teqlaygezat appointed by the Emperor was called:", options: ["Awraja", "Enderase", "Woreda", "Gult holder"], answer: "1", explanation: "Enderase means ‘on my behalf’." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "Which of the following is correct about the 1955 Constitution?", options: ["It introduced popular sovereignty", "It made the Emperor a ceremonial figure", "It strengthened the Emperor’s control over all branches of government", "It created a federal system for the whole country"], answer: "2", explanation: "It reinforced the Emperor’s position as head of the executive, legislative and judiciary." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "The main export crop of imperial Ethiopia was:", options: ["Cotton", "Coffee", "Wheat", "Sugar"], answer: "1", explanation: "Coffee was by far the leading export." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "The Red Terror was directed mainly against:", options: ["Somali invaders", "Urban opposition groups (especially EPRP)", "British advisors", "The Unionist Party"], answer: "1", explanation: "It targeted leftist urban opponents of the Derg." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "Which front was the main Eritrean liberation organisation by the 1980s?", options: ["TPLF", "EPLF", "OLF", "EPRDF"], answer: "1", explanation: "The Eritrean People’s Liberation Front (EPLF)." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "Mengistu Haile Mariam was the dominant leader of the:", options: ["Imperial regime", "Derg", "EPRDF", "Unionist Party"], answer: "1", explanation: "He emerged as the strongman of the Derg." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "The 1987 constitution created the:", options: ["Federal Democratic Republic", "People’s Democratic Republic of Ethiopia (PDRE)", "Ethiopian Empire", "Transitional Government"], answer: "1", explanation: "It established the PDRE." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "Which of the following correctly describes the British position after 1941?", options: ["They immediately left all Ethiopian affairs", "They recognised independence but kept strong control through the 1942 treaty", "They annexed Ethiopia as a colony", "They handed power only to the Americans"], answer: "1", explanation: "Independence was recognised but the 1942 treaty left extensive British powers." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "The student movement of the 1960s–70s mainly demanded:", options: ["More power for the nobility", "Land reform and democracy", "Return of the Italians", "Abolition of education"], answer: "1", explanation: "Land to the Tiller and democratic rights were central demands." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Which statement about the 1942 Anglo-Ethiopian Treaty is correct?", options: ["It completely restored Ethiopian sovereignty", "It recognised independence but imposed many restrictions on Ethiopia", "It gave Eritrea to Ethiopia immediately", "It ended all British military presence"], answer: "1", explanation: "Independence was recognised, yet the British retained wide powers over the army, advisors, Ogaden, communications and currency." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Compared with the 1942 treaty, the 1944 treaty:", options: ["Increased British control", "Reduced British privileges and set up the BMME", "Handed Ogaden to Somalia", "Abolished the Ethiopian monarchy"], answer: "1", explanation: "The 1944 treaty was more favourable to Ethiopia and established the British Military Mission." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "Why did the USA become more interested in Ethiopia in the early 1950s?", options: ["Because of oil discoveries", "After the Egyptian Free Officers’ revolt, the USA sought a new regional partner; Kagnew Station was strategically valuable", "Because Britain asked them to take over", "Because of the 1960 coup"], answer: "1", explanation: "The change of regime in Egypt and the value of the Asmara communication station drew the USA closer." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "Which Eritrean group was created with British encouragement and favoured partition or link with Tigray?", options: ["Unionist Party", "Muslim League", "Liberal Progressive Party", "Pro-Italian party"], answer: "2", explanation: "The Liberal Progressive Party reflected British ideas of partitioning Eritrea." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "The main reason for the promulgation of the 1955 Revised Constitution was:", options: ["To introduce multi-party democracy", "To strengthen centralisation and respond to the more modern institutions of federated Eritrea", "To abolish the monarchy", "To give land to the tillers"], answer: "1", explanation: "The Emperor wanted a formal basis for centralisation and to match the appearance of modernity coming from Eritrea." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "Which of the following was a major consequence of the qalad (land measurement) system?", options: ["It ended all private ownership", "It facilitated taxation, private ownership and the growth of tenancy", "It restored the rist system everywhere", "It was abolished in 1941"], answer: "1", explanation: "Measurement enabled clearer taxation and accelerated the shift toward private tenure and tenancy." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "In the southern half of Ethiopia before 1974, approximately what percentage of holdings were under tenancy?", options: ["10–15 %", "20–30 %", "50–65 %", "Almost 100 %"], answer: "2", explanation: "Estimates put tenancy at 50–65 % of holdings in the South." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "The 1960 coup attempt was significant because it:", options: ["Succeeded and brought democracy", "Revealed serious cracks inside the military and the elite", "Was led by students only", "Had the support of the Emperor"], answer: "1", explanation: "Although it failed quickly, it showed that even the Imperial Bodyguard contained opposition." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "Which of the following best describes the land policy difference between the Imperial and Derg regimes?", options: ["Both kept the same feudal system", "Imperial = private ownership and tenancy; Derg = nationalisation and peasant associations", "Derg restored gult rights", "Imperial nationalised all land in 1955"], answer: "1", explanation: "The 1975 proclamation abolished tenancy and transferred land to peasant associations." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "The immediate triggers of the 1974 Revolution included all EXCEPT:", options: ["The 1973–74 famine", "Military mutinies", "The successful 1960 coup", "Urban strikes and inflation"], answer: "2", explanation: "The 1960 coup had failed; the 1974 crisis was driven by famine, mutinies and urban protest." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "Proclamation 31 of 1975 is remembered mainly for:", options: ["Creating the WPE", "Nationalising rural land and abolishing tenancy", "Starting the Red Terror", "Federating Eritrea"], answer: "1", explanation: "It was the landmark land reform proclamation." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "The Red Terror was used by the Derg to:", options: ["Fight Somalia", "Eliminate urban opposition and consolidate Mengistu’s power", "Implement the Marshall Plan", "Restore the Emperor"], answer: "1", explanation: "It was a campaign of violence against domestic leftist opponents." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "Why did Ethio-American relations decline in the 1960s and 1970s?", options: ["The USA stopped all aid in 1955", "Satellite technology reduced the value of Kagnew and student opposition to American influence grew", "Ethiopia joined the Warsaw Pact", "The USA supported Somalia"], answer: "1", explanation: "Kagnew lost strategic importance and anti-imperialist sentiment rose among students." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "Which of the following is true about the Ogaden War?", options: ["Somalia won and kept the Ogaden", "The Derg, helped by the Soviet Union and Cuba, defeated the Somali invasion", "It was fought only in 1960", "The USA gave the Derg its main support"], answer: "1", explanation: "With Soviet and Cuban assistance the Ethiopian army expelled the Somali forces in 1978." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "The fall of the Derg in 1991 was caused by a combination of:", options: ["Only the Ogaden War", "Endless internal wars, economic collapse, loss of Soviet support and the advance of EPRDF forces", "A new British invasion", "The return of Haile Selassie"], answer: "1", explanation: "Multiple military, economic and international factors brought the regime down." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "Which organisation was the core of the EPRDF?", options: ["EPLF", "TPLF", "OLF", "WPE"], answer: "1", explanation: "The Tigray People’s Liberation Front was the dominant component of the EPRDF." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "The British East African Shilling was made the official currency of Ethiopia by which agreement?", options: ["1953 American Treaty", "1942 Anglo-Ethiopian Treaty", "Point Four", "1955 Constitution"], answer: "1", explanation: "The 1942 treaty imposed the British East African Shilling." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Which of the following groups opposed union with Ethiopia in the late 1940s?", options: ["Only the Unionist Party", "Muslim League, Liberal Progressive Party and Pro-Italian party", "Only the Orthodox Church", "The entire population of Eritrea"], answer: "1", explanation: "These groups formed the Independence bloc." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "The enderase was:", options: ["A type of land tax", "The governor of a teqlaygezat appointed by the Emperor", "A student organisation", "A British advisor"], answer: "1", explanation: "Enderase means the person who rules ‘on my behalf’." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "Which statement correctly compares the 1931 and 1955 constitutions?", options: ["1955 introduced democracy while 1931 was absolute", "Both kept the Emperor’s absolute power; 1955 further strengthened central control", "1931 was more democratic", "1955 abolished the nobility"], answer: "1", explanation: "Neither constitution limited the Emperor’s ultimate authority; 1955 reinforced it." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "The main purpose of the qalad system was to:", options: ["Give land free to all peasants", "Facilitate taxation and clarify ownership", "Abolish gult", "Create collective farms"], answer: "1", explanation: "Measurement made tax assessment and private transfers easier." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Which of the following was NOT a feature of the post-liberation imperial economy?", options: ["Coffee as the leading export", "Growing private land ownership and tenancy", "Complete industrial self-sufficiency", "Continued dependence on agriculture"], answer: "2", explanation: "Industry remained very limited; the economy stayed largely agricultural." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "The student movement is considered important because:", options: ["It supported the 1955 Constitution unchanged", "It provided the radical ideology and many cadres that influenced the 1974 Revolution", "It was only interested in sports", "It restored the Emperor in 1991"], answer: "1", explanation: "Its demands and activists shaped the revolutionary atmosphere of 1974." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "Which sequence is chronologically correct?", options: ["Land nationalisation → deposition of the Emperor → Red Terror", "Deposition of the Emperor (1974) → land nationalisation (1975) → Red Terror (1977–78)", "Red Terror → 1960 coup → Point Four", "EPRDF victory → 1955 Constitution → Kagnew Station"], answer: "1", explanation: "September 1974 → March 1975 → 1977–78." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "The Derg’s literacy campaign and expansion of education are examples of:", options: ["Its complete failure in social policy", "Positive social measures alongside political repression", "Return to imperial policy", "American Point Four programmes"], answer: "1", explanation: "The regime combined radical social programmes with severe political violence." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "Which factor most directly linked the Eritrean struggle to the fall of the Derg?", options: ["Eritrea’s support for the Emperor", "The long war drained resources and the EPLF allied with other fronts against the Derg", "Eritrea joined NATO", "The UN forced the Derg to surrender"], answer: "1", explanation: "The prolonged Eritrean war and the cooperation of EPLF with TPLF and others exhausted the regime." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "The term ‘Restoration’ in Ethiopian history of this period usually refers to:", options: ["The return of Haile Selassie and the imperial regime after 1941", "The fall of the Derg", "The 1955 Constitution", "The creation of the EPRDF"], answer: "0", explanation: "It refers to the restoration of the Emperor after the Italian occupation." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "Which of the following best describes the position of the British minister under the 1942 treaty?", options: ["He had no special rights", "He enjoyed precedence over other diplomatic representatives", "He was expelled", "He became the Emperor’s prime minister"], answer: "1", explanation: "The treaty gave the British minister diplomatic precedence." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "The main reason the Derg received Soviet support in 1977–78 was:", options: ["Shared democratic values", "The need for weapons to repel the Somali invasion and the shift of the regime toward Marxism-Leninism", "American recommendation", "The 1953 Kagnew agreement"], answer: "1", explanation: "Ideological alignment and the urgent military need against Somalia brought massive Soviet (and Cuban) aid." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "Which of the following is an accurate Cause → Event → Result chain?", options: ["1955 Constitution → immediate democracy → end of monarchy", "Land alienation and heavy taxation → peasant revolts (e.g. Bale) → contribution to the 1974 revolutionary atmosphere", "Point Four → immediate industrialisation → Ethiopia became richer than the USA", "1960 coup success → Haile Selassie fled → EPRDF formed"], answer: "1", explanation: "Rural grievances fuelled revolts that weakened the legitimacy of the imperial system." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "The PDRE constitution of 1987:", options: ["Restored the monarchy", "Formalised the one-party socialist state under the WPE", "Created ethnic federalism", "Handed power to the EPLF"], answer: "1", explanation: "It established the People’s Democratic Republic with the Workers’ Party as the leading force." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "Which statement about American influence is correct?", options: ["It began only after 1974", "It was strong in the 1950s–60s through Point Four, Kagnew and MAAG, then declined", "It replaced the British completely in 1942", "It never involved military training"], answer: "1", explanation: "The special relationship peaked in the 1950s and early 1960s and then weakened." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "The Independence bloc in Eritrea was united mainly by:", options: ["Support for the Emperor", "Opposition to union with Ethiopia", "Desire to join the Soviet Union", "Support for the 1955 Constitution"], answer: "1", explanation: "Despite internal differences, they all opposed simple union with Ethiopia." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "Which of the following was a result of the 1975 land reform?", options: ["Tenancy increased", "Gult rights were restored", "Tenancy was abolished and land was distributed through peasant associations", "All land was given to foreign investors"], answer: "2", explanation: "Proclamation 31 ended tenancy and placed land under peasant associations." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "The Red Terror is best described as:", options: ["A war against Somalia", "A campaign of urban political violence by the Derg against its opponents", "A British policy", "A peaceful literacy programme"], answer: "1", explanation: "It was internal repression, not an external war." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "Which factor did NOT contribute significantly to the fall of the Derg?", options: ["Military victories of the EPRDF and EPLF", "Economic exhaustion from prolonged wars", "Strong continuing Soviet support in 1991", "Loss of legitimacy and morale"], answer: "2", explanation: "By 1991 Soviet support had largely disappeared after the changes in the USSR." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "The 12 teqlaygezats created in 1942 were intended to:", options: ["Strengthen regional nobilities", "Centralise administration under the Emperor", "Prepare for federation with Eritrea only", "Hand power to the British"], answer: "1", explanation: "They replaced older regional power centres with centrally appointed governors." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "Which of the following correctly links a person to an event?", options: ["Waqo Gutu – 1960 coup", "Mengistu – dominant Derg leader", "Haile Selassie – leader of the EPRDF", "Nasser – signed the 1942 treaty"], answer: "1", explanation: "Mengistu Haile Mariam became the leading figure of the Derg." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "The main difference between rist and gult is:", options: ["Rist is tribute right; gult is hereditary lineage land", "Rist is hereditary lineage land; gult is the right to collect tribute", "They are exactly the same", "Both were invented by the Derg"], answer: "1", explanation: "Rist = lineage land; gult = tribute-collecting right." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "Which sequence correctly describes Eritrea’s status?", options: ["Province → federation → independence in 1952", "British administration → UN federation (1952) → annexation as province (1962) → struggle → independence after 1991", "Always a province of Ethiopia since 1941", "Independent from 1941 to 1991"], answer: "1", explanation: "That is the accurate historical sequence." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Which of the following best explains why the 1942 treaty is often described as making Ethiopia ‘dependent’?", options: ["It gave Eritrea to Italy", "Although independence was recognised, key instruments of state power (army, advisors, communications, currency, parts of the territory) remained under British control", "It abolished the monarchy", "It forced Ethiopia to join the Commonwealth"], answer: "1", explanation: "Formal independence existed alongside extensive practical British control." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "The shift from British to American influence in the 1950s can best be explained by:", options: ["British voluntary withdrawal only", "Changing global strategy after WWII, the value of Kagnew, and the search for new Middle-East partners after the Egyptian revolution", "The personal friendship of Haile Selassie with Truman only", "The success of the 1960 coup"], answer: "1", explanation: "Geopolitical and technological factors, not merely personal ties, drove the change." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Why did the existence of the Eritrean federation push Haile Selassie toward the 1955 Constitution?", options: ["Eritrea had an elected parliament and more modern institutions that contrasted with the absolute system in the rest of Ethiopia", "Eritrea demanded the restoration of the 1931 constitution", "The UN required a new constitution", "Students forced him"], answer: "0", explanation: "The contrast with Eritrea’s relatively modern political forms was one motive for constitutional revision." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Which statement most accurately captures the social impact of land measurement and privatisation before 1974?", options: ["It created equality among all peasants", "It accelerated private ownership and tenancy, especially in the South, increasing rural inequality and discontent", "It restored the pure rist system", "It had no effect on tenancy"], answer: "1", explanation: "The growth of private tenure and chisegna tenancy deepened rural grievances." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "The 1960 coup and the later student movement together showed that:", options: ["The imperial regime had no internal critics", "Opposition existed both inside the military/elite and among the educated youth", "Only peasants opposed the regime", "The British were still in control"], answer: "1", explanation: "Both the Bodyguard coup and the radical students revealed multiple sources of opposition." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "Which of the following is the most accurate description of the Derg’s early land reform?", options: ["It was a minor tax adjustment", "It was a radical structural change that abolished landlordism and tenancy and tried to empower peasants through associations", "It returned all land to the nobility", "It applied only to Addis Ababa"], answer: "1", explanation: "Proclamation 31 was a fundamental transformation of rural property relations." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "The Red Terror can be understood as:", options: ["A necessary defence against Somalia", "The violent elimination of domestic rivals that allowed Mengistu to consolidate personal dictatorship", "A programme of economic development", "Support for the student movement"], answer: "1", explanation: "It was primarily an internal power struggle settled by mass violence." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "Why was Soviet and Cuban support decisive in the Ogaden War?", options: ["Ethiopia already had superior weapons", "The Derg’s army needed modern heavy weapons, aircraft and advisors that only the Eastern Bloc was willing to supply in large quantities at that moment", "The USA was also supporting the Derg", "Somalia had no army"], answer: "1", explanation: "The scale and sophistication of Soviet/Cuban aid tipped the military balance." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "The relationship between the Eritrean struggle and the Tigrayan struggle in the late 1980s is best described as:", options: ["Complete hostility", "Tactical military and political cooperation against the common Derg enemy", "EPLF subordination to the Derg", "No contact at all"], answer: "1", explanation: "Although they had different ultimate goals, they coordinated against the Derg." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "Which of the following best explains the timing of the Derg’s collapse in 1991?", options: ["It was caused only by the 1984–85 famine", "The combination of military defeats, economic ruin, the end of Soviet support after the changes in the USSR, and the coordinated advance of the EPRDF made the regime unsustainable", "Haile Selassie returned from exile", "The UN ordered new elections"], answer: "1", explanation: "Multiple reinforcing crises converged in 1991." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "A student who confuses the 1942 and 1944 treaties is most likely to get which question wrong?", options: ["The date of the Emperor’s return", "Which treaty imposed the heavier restrictions on Ethiopian sovereignty", "The name of the American station in Asmara", "The year of the Red Terror"], answer: "1", explanation: "1942 was the more restrictive; 1944 reduced British privileges." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "Which of the following pairs is correctly matched?", options: ["Point Four – military base rights", "Kagnew / MAAG – technical assistance only", "Point Four – technical assistance; 1953 treaty – Kagnew Station and military aid", "BMME – American military mission"], answer: "2", explanation: "Point Four was civilian technical aid; the 1953 treaty covered the base and MAAG." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "The continuation of the rist-gult system together with expanding private tenure created a contradiction because:", options: ["Rist and private ownership are identical", "Traditional hereditary and tribute rights coexisted with market-based ownership and tenancy, producing both old and new forms of exploitation", "The Emperor abolished all traditional rights in 1942", "Peasants preferred gult"], answer: "1", explanation: "The hybrid system generated complex rural tensions that later exploded." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Which statement about the 1955 Constitution is most accurate for exam purposes?", options: ["It was Ethiopia’s first step to genuine parliamentary democracy", "It modernised the form of government while preserving and even strengthening the Emperor’s absolute authority", "It was copied unchanged from the American constitution", "It gave veto power to the nobility"], answer: "1", explanation: "Form changed; the reality of absolute power remained." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "The fact that the Derg both nationalised land and launched the Red Terror illustrates:", options: ["That social reform and political repression were kept completely separate", "That radical social and economic change was accompanied by extreme political violence against opponents", "That the Derg was a liberal democratic government", "That land reform was never implemented"], answer: "1", explanation: "The regime pursued transformative policies while ruthlessly suppressing dissent." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "Which of the following is the most complete explanation for the decline of American influence before 1974?", options: ["Only the personal dislike of the Emperor", "Technological change (satellites) reduced Kagnew’s value, while domestic radicalisation turned against ‘American imperialism’", "The USA was expelled by the British", "Point Four was a failure from the first day"], answer: "1", explanation: "Both strategic and political factors eroded the special relationship." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "Looking at the whole period 1941–1991, the most persistent structural problem of the Ethiopian state was:", options: ["Lack of any written constitution", "The difficulty of reconciling centralised imperial (later military) power with regional, ethnic and social demands", "Complete absence of foreign influence", "Over-industrialisation"], answer: "1", explanation: "Centre–periphery and social tensions remained unresolved under both systems." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "Which Cause → Event → Result chain is correct?", options: ["UN Resolution 390 V → immediate independence of Eritrea → no further conflict", "1973–74 famine + military mutinies + urban protest → 1974 Revolution → fall of the imperial regime", "1955 Constitution → immediate multi-party elections → stable democracy", "Ogaden War victory → permanent solution of all ethnic questions"], answer: "1", explanation: "The combination of famine, mutiny and protest produced the revolutionary crisis of 1974." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "A question that asks ‘which treaty allowed the USA to operate a communication station in Asmara?’ is testing knowledge of:", options: ["The 1942 Anglo-Ethiopian Treaty", "The 1953 Ethio-American Treaty", "Point Four only", "The 1955 Constitution"], answer: "1", explanation: "Kagnew Station was established under the 1953 agreement." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "The ultimate significance of the 1991 change of power is that it:", options: ["Restored the 1955 Constitution unchanged", "Ended the Derg’s military-Marxist rule and opened a new chapter under the EPRDF, while Eritrea moved toward independence", "Returned Haile Selassie to the throne", "Made Ethiopia a member of NATO"], answer: "1", explanation: "It marked the end of the Derg era and the beginning of a different political order." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "hard", stem: "Compare the 1942 and 1944 Anglo-Ethiopian treaties.", answer: "The 1942 treaty recognised Ethiopian independence but left the British in control of the army training, ministerial advisors, Ogaden areas, communications, railway and currency. The 1944 treaty reduced these privileges, promised the return of the Ogaden, lifted the British minister’s precedence, and established the BMME to help modernise the Ethiopian army. Thus 1944 marked a step toward greater Ethiopian sovereignty.", explanation: "Show the movement from heavy restriction to partial restoration." },
    { id: "q102", type: "short", difficulty: "hard", stem: "Explain how Eritrea’s status changed between 1941 and 1962.", answer: "From 1941 to 1952 Eritrea was under British administration. In 1950 the UN decided on federation with Ethiopia (Resolution 390 V); federation began in 1952. In 1962 the Ethiopian government abolished the federal arrangement and made Eritrea an ordinary province. This annexation intensified the armed struggle for independence.", explanation: "British → federation → annexation sequence." },
    { id: "q103", type: "short", difficulty: "hard", stem: "What were the main features of American involvement in Ethiopia in the 1950s?", answer: "The Point Four Agreement (1952) brought technical assistance in agriculture, health, education and administration. The 1953 treaty allowed the USA to operate Kagnew Station in Asmara and created MAAG for military training and aid. American influence was therefore strong in both civilian development and the military until it declined in the 1960s–70s.", explanation: "Point Four + Kagnew/MAAG." },
    { id: "q104", type: "short", difficulty: "hard", stem: "Describe the 1955 Revised Constitution and its purpose.", answer: "The 1955 Constitution revised the 1931 document. It kept the Emperor as the head of the executive, legislative and judicial powers and actually strengthened central control. Its purposes were to provide a modern-looking legal basis for the Emperor’s centralisation policy and to respond to the more advanced institutions that existed in federated Eritrea. It did not introduce popular sovereignty or genuine democracy.", explanation: "Content + motives." },
    { id: "q105", type: "short", difficulty: "hard", stem: "Explain the traditional land systems and the impact of land measurement.", answer: "Rist was hereditary land based on lineage; gult was the right to collect tribute granted by the Emperor. The qalad (measurement) system classified land by fertility and made taxation and private sale easier. As a result private ownership and tenancy (chisegna), especially in the South, expanded rapidly, increasing rural inequality and discontent.", explanation: "Definitions + consequences." },
    { id: "q106", type: "short", difficulty: "hard", stem: "What forms of opposition appeared against the imperial regime before 1974?", answer: "Peasant revolts (for example the Bale revolt led by Waqo Gutu), the abortive 1960 coup by the Imperial Bodyguard, and the radical student movement of the 1960s and early 1970s that demanded ‘Land to the Tiller’ and democracy. Together they showed that the regime faced challenges from the countryside, the military and the educated youth.", explanation: "Three main streams." },
    { id: "q107", type: "short", difficulty: "hard", stem: "Outline the main causes of the 1974 Revolution.", answer: "Long-term causes included the feudal land system, absolute monarchy and lack of political rights. Immediate causes were the 1973–74 famine, rising prices, military mutinies, and strikes by students, teachers and taxi drivers. The combination produced a revolutionary crisis that the imperial government could not control.", explanation: "Long-term + immediate." },
    { id: "q108", type: "short", difficulty: "hard", stem: "Describe the Derg’s land reform of 1975 and its significance.", answer: "Proclamation 31 of March 1975 nationalised all rural land, abolished tenancy and landlordism, and distributed use-rights through peasant associations. It was the most radical social measure of the revolution and destroyed the economic base of the old nobility, while also creating new structures of control in the countryside.", explanation: "Content + historical importance." },
    { id: "q109", type: "short", difficulty: "hard", stem: "What was the Red Terror and what were its results?", answer: "The Red Terror (especially 1977–78) was a campaign of mass arrest, execution and public intimidation directed by the Derg against urban opposition groups, particularly the EPRP. Thousands were killed. It eliminated organised leftist rivals and allowed Mengistu to consolidate personal power, but it also created lasting trauma and hatred.", explanation: "Definition + human and political consequences." },
    { id: "q110", type: "short", difficulty: "hard", stem: "Explain the course and outcome of the Ogaden War (1977–78).", answer: "Somalia invaded the Ogaden in 1977 to annex it. The Derg, after shifting toward the Soviet Union, received large-scale Soviet weapons and Cuban troops. By 1978 the Ethiopian forces had driven the Somalis out. The victory saved the territorial integrity of Ethiopia but tied the Derg more tightly to the Eastern Bloc and consumed huge resources.", explanation: "Invasion → foreign aid → Ethiopian victory." },
    { id: "q111", type: "short", difficulty: "hard", stem: "How did the Eritrean question evolve from 1962 to 1991?", answer: "After the 1962 annexation, armed resistance grew, led mainly by the EPLF. By the late 1980s the EPLF controlled most of the Eritrean countryside and cooperated with other anti-Derg fronts. When the Derg collapsed in 1991, Eritrea achieved de-facto independence (confirmed by referendum in 1993).", explanation: "Annexation → armed struggle → independence." },
    { id: "q112", type: "short", difficulty: "hard", stem: "Why did the Derg regime collapse in 1991?", answer: "It was exhausted by simultaneous wars in Eritrea, Tigray and other regions, suffered severe economic failure, lost the support of the Soviet Union after 1989, and faced a coordinated military offensive by the EPRDF. In May 1991 EPRDF forces entered Addis Ababa and Mengistu fled, ending the Derg era.", explanation: "Military + economic + international factors." },
    { id: "q113", type: "short", difficulty: "hard", stem: "Compare imperial and Derg land policies.", answer: "Under the Empire, land was held under rist and gult rights and, increasingly, as private property; tenancy was widespread, especially in the South. The Derg nationalised all rural land in 1975, abolished tenancy and landlords, and gave use-rights to peasants organised in associations. One system rested on hierarchy and private rights; the other on state ownership and collective institutions.", explanation: "Clear contrast of the two systems." },
    { id: "q114", type: "short", difficulty: "hard", stem: "What role did foreign powers play in Ethiopia between 1941 and 1974?", answer: "Britain dominated the early post-liberation years through the 1942 and 1944 treaties, OETA and the BMME. From the early 1950s the United States became the main partner via Point Four, Kagnew Station and MAAG, supplying economic and military assistance. Both relationships helped the imperial regime consolidate power while also creating dependence and later nationalist resentment.", explanation: "British phase then American phase." },
    { id: "q115", type: "short", difficulty: "hard", stem: "Explain the significance of the student movement.", answer: "From the 1960s the student movement became the most radical and organised opposition force. It popularised the slogan ‘Land to the Tiller’, criticised absolutism and American influence, and produced many of the cadres who later joined leftist parties or the Derg itself. It prepared the ideological ground for the 1974 Revolution.", explanation: "Demands + historical role." },
    { id: "q116", type: "short", difficulty: "hard", stem: "What was the relationship between the 1955 Constitution and the centralisation policy of Haile Selassie?", answer: "The Emperor’s main political goal after 1941 was to weaken regional nobilities and concentrate power in Addis Ababa. The 1955 Constitution gave this policy a modern legal form: it confirmed the Emperor as the source of all authority and did not create independent centres of power. Constitutional revision therefore served centralisation rather than democratisation.", explanation: "Link constitution to the political project." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Describe the main administrative reform of the early 1940s.", answer: "In 1942 Ethiopia was divided into twelve teqlaygezats (governorate-generals). Each was headed by an enderase appointed by the Emperor and further subdivided into awrajas, weredas and mikitil weredas. The reform replaced older regional power structures with a more uniform, centrally controlled administration.", explanation: "Structure + purpose." },
    { id: "q118", type: "short", difficulty: "hard", stem: "How did the Cold War affect Ethiopia in the Derg period?", answer: "After 1974 the Derg turned to the Soviet Union for ideological and military support. During the Ogaden War (1977–78) massive Soviet and Cuban assistance enabled Ethiopia to defeat Somalia. The alliance supplied weapons and training but also tied Ethiopia to a declining superpower and contributed to the regime’s isolation when the Soviet bloc itself collapsed.", explanation: "Shift of alliance + consequences." },
    { id: "q119", type: "short", difficulty: "hard", stem: "Summarise the main stages of Ethiopia’s political history from 1941 to 1991.", answer: "1941–74: restored imperial rule under Haile Selassie, first under British then American influence, marked by centralisation, the 1955 Constitution, growing opposition and finally revolution. 1974–91: military-Marxist rule of the Derg, radical land reform, Red Terror, wars in the Ogaden and Eritrea, and ultimate collapse in 1991 when the EPRDF took power.", explanation: "Two clear periods with key features." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Why is the period 1941–1991 crucial for understanding modern Ethiopia?", answer: "It covers the restoration of the monarchy, the attempt to build a centralised modern state, the failure of that project in 1974, the radical social experiments and violence of the Derg, and the final transition to a new political order in 1991. Almost all the major issues of contemporary Ethiopia — land, centre–periphery relations, the role of the military, and the place of Eritrea — have their roots in these fifty years.", explanation: "Long-term significance." },
  ],
};