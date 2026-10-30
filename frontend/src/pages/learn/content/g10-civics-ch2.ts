import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 CITIZENSHIP EDUCATION — UNIT 2
// CITIZENS IN THE DIGITAL TECHNOLOGY AGE
// Source: Grade 10 Citizenship Education Student Textbook (pp. 24–56)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, definition boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10CivicsCh2: Chapter = {
  id: "ch2",
  number: 2,
  title: "Citizens in the Digital Technology Age",
  titleAm: "ዜጎች በዲጂታል ቴክኖሎጂ ዘመን",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about DIGITAL TECHNOLOGY and its impact on citizens.\n\n" +
        "It has FOUR parts:\n" +
        "1) Implications on EMOTIONS, SOCIAL LIFE, and ETHICAL VALUES.\n" +
        "2) ETHICS of using digital technology.\n" +
        "3) OPPORTUNITIES for young citizens.\n" +
        "4) IMPACTS of unethical use.\n\n" +
        "The WHOLE chapter reduces to FIVE key ideas:\n" +
        "• Digital technology = positive + negative effects (depends on use).\n" +
        "• Moderate use → positive; excessive/addictive use → negative.\n" +
        "• Ethical principles: etiquette, responsibility, safety, security, confidentiality, accuracy.\n" +
        "• Opportunities: information access, social connectivity, learning, work, innovation.\n" +
        "• Unethical use: academic dishonesty, piracy, identity theft, harmful content.\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ አምስቱ ዋና ሐሳቦች፡\n" +
        "• ዲጂታል ቴክኖሎጂ = አዎንታዊ + አሉታዊ ተጽእኖ።\n" +
        "• መጠናዊ አጠቃቀም → አዎንታዊ።\n" +
        "• 6 ሥነ-ምግባራዊ መርሆች።\n" +
        "• 5 ዕድሎች።\n" +
        "• ሥነ-ምግባር ያልተጠበቀ አጠቃቀም = አደጋ።",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the three implication areas",
          titleAm: "ደረጃ 1 · ሦስቱ የተጽእኖ ዘርፎች",
          body:
            "THREE IMPLICATION AREAS:\n\n" +
            "1) EMOTIONS:\n" +
            "• Positive: self-control, socialization, emotional balance, happiness, regulation, security, satisfaction.\n" +
            "• Negative: isolation, secondhand living, depression, anonymity, addiction.\n\n" +
            "2) SOCIAL LIFE:\n" +
            "• Positive: connectivity, speedy communication, education, transport, banking, health care, economic growth.\n" +
            "• Negative: alienation, eroding privacy, job insecurity, data insecurity, crime + terrorism, physical health issues.\n\n" +
            "3) ETHICAL VALUES:\n" +
            "• Positive: critical thinking, universal moral values, self-learning of good habits.\n" +
            "• Negative: ethical dilemma, uncertainty, unhappiness, untruthfulness, eroding freedom, negative emotions.",
          bodyAm:
            "ስሜት፣ ማህበራዊ ህይወት፣ ሥነ-ምግባር።\n" +
            "ሁለቱም አዎንታዊ + አሉታዊ።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Memorize the six ethical principles",
          titleAm: "ደረጃ 2 · ስድስቱ ሥነ-ምግባራዊ መርሆች",
          body:
            "SIX ETHICAL PRINCIPLES:\n" +
            "1) ETIQUETTE: understand how digital behavior affects others.\n" +
            "2) RESPONSIBILITY: think before downloading/copying.\n" +
            "3) SAFETY: be aware of physical dangers (eyestrain, posture).\n" +
            "4) SECURITY: protect electronic data (virus, firewall).\n" +
            "5) CONFIDENTIALITY: protect private info + passwords.\n" +
            "6) ACCURACY / TRUSTWORTHINESS: verify information — no agency monitors truth online.",
          bodyAm:
            "Etiquette፣ Responsibility፣ Safety፣ Security፣ Confidentiality፣ Accuracy።\n" +
            "ERSS CA።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master opportunities vs unethical impacts",
          titleAm: "ደረጃ 3 · ዕድሎች vs ሥነ-ምግባር ያልተጠበቀ",
          body:
            "OPPORTUNITIES FOR YOUNG CITIZENS:\n" +
            "• Information access.\n" +
            "• Social connectivity.\n" +
            "• Learning opportunities.\n" +
            "• Versatile working opportunities.\n" +
            "• Innovation + creative opportunities.\n\n" +
            "UNETHICAL USE IMPACTS:\n" +
            "• Academic dishonesty (cheating + plagiarism).\n" +
            "• Digital media piracy.\n" +
            "• Identity theft.\n" +
            "• Unfriendly + revenge sex.",
          bodyAm:
            "ዕድሎች: መረጃ፣ ግንኙነት፣ ትምህርት፣ ሥራ፣ ፈጠራ።\n" +
            "ሥነ-ምግባር ያልተጠበቀ: ማጭበርበር፣ ዘረፋ፣ ማንነት ስርቆት።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Do you know 6 ethical principles?\n" +
            "2) Do you know 'plagiarism' vs 'piracy'?\n" +
            "3) Do you know 5 opportunities?\n" +
            "4) Do you know 4 unethical use impacts?\n" +
            "5) Do you know the difference between cheating + plagiarism?",
          bodyAm:
            "1) 6 መርሆች?\n" +
            "2) Plagiarism vs Piracy?\n" +
            "3) 5 ዕድሎች?\n" +
            "4) 4 ተጽእኖዎች?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፋርት",
          body:
            "• Digital tech → positive OR negative (depends on USE).\n" +
            "• MODERATE use = positive; EXCESSIVE/ADDICTIVE = negative.\n" +
            "• 6 ethical principles: Etiquette, Responsibility, Safety, Security, Confidentiality, Accuracy.\n" +
            "• PLAGIARISM = presenting others' ideas as own.\n" +
            "• PIRACY = illegal circulation of copyrighted content.\n" +
            "• IDENTITY THEFT = fraudulent use of another's personality.\n" +
            "• 5 opportunities: info access, connectivity, learning, work, innovation.\n" +
            "• 4 unethical impacts: academic dishonesty, piracy, identity theft, revenge sex.",
          bodyAm:
            "• መጠናዊ = ጥሩ።\n" +
            "• 6 መርሆች።\n" +
            "• Plagiarism ≠ Piracy።\n" +
            "• Identity theft = ማንነት ስርቆት።",
        },
      ],
    },

    // ============================================================
    // 2.1 IMPLICATIONS OF DIGITAL TECHNOLOGY
    // ============================================================
    {
      id: "n1",
      title: "2.1 Implications of Digital Technology on Citizens",
      titleAm: "2.1 የዲጂታል ቴክኖሎጂ ተጽእኖ",
      body:
        "Abatu, digital technologies have advanced faster than ever before. They create positive AND negative impacts on citizens' EMOTIONS, SOCIAL LIFE, and ETHICAL VALUES. Moderate use = positive; excessive/addictive use = negative.",
      bodyAm:
        "አባቱ፣ መጠናዊ = አዎንታዊ፤ ከመጠን በላይ = አሉታዊ።",
      children: [
        {
          id: "n1-1",
          title: "Emotions — POSITIVE implications",
          titleAm: "ስሜት — አዎንታዊ",
          body:
            "SEVEN POSITIVE EMOTIONAL EFFECTS:\n\n" +
            "1) SELF-CONTROL:\n" +
            "• Digital tech helps manage emotions.\n" +
            "• Internet arrangements (work from home, mobile office) reduce face-to-face emotional aggression.\n\n" +
            "2) FOSTERING SOCIALIZATION:\n" +
            "• Communicate + foster interpersonal relationships.\n" +
            "• Stay closer to loved ones physically far away.\n\n" +
            "3) MAINTAINING EMOTIONAL BALANCE:\n" +
            "• Negotiate family rules around use.\n" +
            "• Cope with daily stress + coordinate activities.\n\n" +
            "4) SUPPORTING HAPPINESS + WELLBEING:\n" +
            "• Video calls give sense of purpose + joy.\n" +
            "• Social media boosts health + wellbeing.\n" +
            "• Helps depressed young people express creatively.\n\n" +
            "5) REGULATING EMOTIONS:\n" +
            "• Health + wellness resources.\n" +
            "• Computer-based training in emotion regulation.\n\n" +
            "6) PROVIDING SENSE OF SECURITY:\n" +
            "• Mobile phones give security in public spaces.\n" +
            "• Access to police + known others.\n\n" +
            "7) INCREASED EMOTIONAL SATISFACTION (self-conception):\n" +
            "• More connected → more satisfied.\n" +
            "• Sense of pride + feeling known.",
          bodyAm:
            "7 አዎንታዊ ተጽእኖዎች፡\n" +
            "ራስ መቆጣጠር፣ ማህበራዊነት፣ ስሜት ማመጣጠን፣ ደስታ፣ ስሜት ማስተካከል፣ ደህንነት፣ እርካታ።",
        },
        {
          id: "n1-2",
          title: "Emotions — NEGATIVE implications",
          titleAm: "ስሜት — አሉታዊ",
          body:
            "FIVE NEGATIVE EMOTIONAL EFFECTS:\n\n" +
            "1) ISOLATION:\n" +
            "• Social media may have OPPOSITE effects.\n" +
            "• Heavy users more likely to feel socially isolated.\n\n" +
            "2) SECONDHAND LIVING:\n" +
            "• Imaginary identities in virtual worlds.\n" +
            "• Blurred boundaries between on-lives + off-lives.\n" +
            "• Life experienced through digital media (not firsthand).\n\n" +
            "3) DEPRESSION + ANXIETY:\n" +
            "• Link between social network + mental health issues.\n" +
            "• Restricted social interactions + high online involvement → higher depression/anxiety.\n\n" +
            "4) ANONYMITY + FAKE PERSONALITY:\n" +
            "• Wide scope to hide identities.\n" +
            "• Anti-social behavior increases (bullying, trolling, stalking, threatening).\n" +
            "• Fake personas for scamming + defrauding.\n\n" +
            "5) ADDICTION:\n" +
            "• Social media, games, messaging, dating sites can be addictive.\n" +
            "• Users waste time + money for low return.",
          bodyAm:
            "5 አሉታዊ ተጽእኖዎች፡\n" +
            "መነጠል፣ ሁለተኛ ኑሮ፣ ጭንቀት፣ ማንነት መደበቅ፣ ሱሰኝነት።",
        },
        {
          id: "n1-3",
          title: "Social life — POSITIVE implications",
          titleAm: "ማህበራዊ ህይወት — አዎንታዊ",
          body:
            "SEVEN POSITIVE SOCIAL EFFECTS:\n\n" +
            "1) INCREASED SOCIAL CONNECTIVITY:\n" +
            "• Facebook, YouTube, Twitter, mobile phones.\n" +
            "• Make new connections + strengthen relations.\n\n" +
            "2) SPEEDY COMMUNICATION:\n" +
            "• Faster broadband → large info transfer.\n" +
            "• Video + audio in real time.\n\n" +
            "3) ADVANCING EDUCATION:\n" +
            "• Share academic info.\n" +
            "• Virtual online labs.\n" +
            "• Improve logical reasoning + communication.\n\n" +
            "4) FACILITATING TRANSPORTATION:\n" +
            "• Trains, ships, airplanes rely on digital tech.\n" +
            "• Online booking + digital passport chips.\n\n" +
            "5) ADVANCING BANKING + FINANCE:\n" +
            "• Online banking via laptop/phone.\n" +
            "• Money transfers locally + internationally.\n\n" +
            "6) IMPROVING HEALTH CARE:\n" +
            "• Access to best diagnostic tools.\n" +
            "• Track appointments + get reminders.\n" +
            "• Remote specialist consultations.\n\n" +
            "7) PROMOTING ECONOMIC GROWTH:\n" +
            "• New innovations + infrastructure.\n" +
            "• Boost agricultural productivity.\n" +
            "• Automation of business operations.",
          bodyAm:
            "7 አዎንታዊ ተጽእኖዎች፡\n" +
            "ግንኙነት፣ ፈጣን ኮሙኒኬሽን፣ ትምህርት፣ ትራንስፖርት፣ ባንክ፣ ጤና፣ ኢኮኖሚ።",
        },
        {
          id: "n1-4",
          title: "Social life — NEGATIVE implications",
          titleAm: "ማህበራዊ ህይወት — አሉታዊ",
          body:
            "SIX NEGATIVE SOCIAL EFFECTS:\n\n" +
            "1) SOCIAL ALIENATION:\n" +
            "• Increasing tendency to socialize via devices.\n" +
            "• Impersonal + disconnected.\n" +
            "• Social media can reinforce prejudices + spread hate speech + misinformation.\n\n" +
            "2) ERODING PRIVACY:\n" +
            "• Harder to keep data safe.\n" +
            "• Personal data can be stolen or sold.\n" +
            "• Cameras record public movements.\n\n" +
            "3) JOB INSECURITY:\n" +
            "• Many tasks done remotely.\n" +
            "• Poor country workers can undercut others.\n" +
            "• Computers replace humans (driving, delivery).\n\n" +
            "4) DATA INSECURITY:\n" +
            "• Huge amounts of data collected + stored.\n" +
            "• Single breach → info in wrong hands.\n\n" +
            "5) AGGRAVATE CRIME + TERRORISM:\n" +
            "• Terrorists use social media.\n" +
            "• Drug dealers use dark web.\n\n" +
            "6) EFFECTS ON PHYSICAL HEALTH:\n" +
            "• Eyestrain (blurred vision, dry eyes).\n" +
            "• Head, neck, shoulder pain.\n" +
            "• Incorrect posture → musculoskeletal problems.",
          bodyAm:
            "6 አሉታዊ ተጽእኖዎች፡\n" +
            "መነጠል፣ ግላዊነት መጥፋት፣ የሥራ አለመረጋጋት፣ ዳታ አለመረጋጋት፣ ወንጀል፣ ጤና።",
        },
        {
          id: "n1-5",
          title: "Ethical values — POSITIVE implications",
          titleAm: "ሥነ-ምግባር — አዎንታዊ",
          body:
            "THREE POSITIVE ETHICAL EFFECTS:\n\n" +
            "1) DEVELOPING CRITICAL THINKING:\n" +
            "• Proper tech use = powerful tool.\n" +
            "• Access diversified sources → analyze, check facts, challenge info.\n" +
            "• Identify fact vs opinion.\n" +
            "• Develop capacity to monitor, evaluate, control thinking.\n\n" +
            "2) DEVELOPING UNIVERSAL MORAL VALUES:\n" +
            "• Diversified society + philosophical debates.\n" +
            "• Compare + contrast norms.\n" +
            "• Good moral norms become universal.\n\n" +
            "3) SELF-LEARNING OF GOOD HABITS:\n" +
            "• Good character not always from family.\n" +
            "• Learn from others' experiences (e.g., philosophers' lives).\n" +
            "• Reconsider what is good/bad, right/wrong, just/unjust.",
          bodyAm:
            "3 አዎንታዊ ተጽእኖዎች፡\n" +
            "ሂሳዊ አስተሳሰብ፣ ሁለንተናዊ ሥነ-ምግባር፣ መልካም ልማዶች መማር።",
        },
        {
          id: "n1-6",
          title: "Ethical values — NEGATIVE implications",
          titleAm: "ሥነ-ምግባር — አሉታዊ",
          body:
            "SIX NEGATIVE ETHICAL EFFECTS:\n\n" +
            "1) ETHICAL DILEMMA:\n" +
            "• Access to different thoughts → conflicts with personal ethics.\n" +
            "• Choose between honest/dishonest, right/wrong.\n" +
            "• May lose or change norms.\n\n" +
            "2) INCREASING UNCERTAINTY:\n" +
            "• Many ethical issues raised + discussed online.\n" +
            "• Philosophers have no clear answers.\n" +
            "• Confusion + uncertainty of future.\n\n" +
            "3) CREATING UNHAPPINESS:\n" +
            "• Social media can reflect vulgar + offensive messages.\n" +
            "• Perpetrators offend → aggression.\n\n" +
            "4) UNTRUTHFULNESS:\n" +
            "• Fake info + news norm for some.\n" +
            "• Young citizens affected to get likes, subscribes, shares.\n\n" +
            "5) ERODING PEOPLE'S NORMS OF FREEDOM:\n" +
            "• Users express hate against opponents.\n" +
            "• Fear of insult restricts freedom of writing/speech.\n\n" +
            "6) INDUCTION OF NEGATIVE EMOTIONS:\n" +
            "• Fear, disgust, anger become routine.\n" +
            "• Disrupt thinking + attention.",
          bodyAm:
            "6 አሉታዊ ተጽእኖዎች፡\n" +
            "ሥነ-ምግባራዊ ችግር፣ እርግጠኛ አለመሆን፣ ሀዘን፣ ሐሰት፣ ነፃነት መጥፋት፣ አሉታዊ ስሜቶች።",
        },
        {
          id: "n1-7",
          title: "⚠ Remember trap — Implications",
          titleAm: "⚠ አትርሳ — ተጽእኖዎች",
          body:
            "• Moderate use = POSITIVE; Excessive/addictive = NEGATIVE.\n" +
            "• EMOTIONS positive (7): self-control, socialization, emotional balance, happiness, regulation, security, satisfaction.\n" +
            "• EMOTIONS negative (5): isolation, secondhand living, depression/anxiety, anonymity/fake personality, addiction.\n" +
            "• SOCIAL positive (7): connectivity, speedy communication, education, transport, banking, health care, economic growth.\n" +
            "• SOCIAL negative (6): alienation, privacy erosion, job insecurity, data insecurity, crime/terrorism, physical health.\n" +
            "• ETHICAL positive (3): critical thinking, universal moral values, self-learning good habits.\n" +
            "• ETHICAL negative (6): dilemma, uncertainty, unhappiness, untruthfulness, eroding freedom, negative emotions.",
          bodyAm:
            "ስሜት: 7+/5-።\n" +
            "ማህበራዊ: 7+/6-።\n" +
            "ሥነ-ምግባር: 3+/6-።",
        },
      ],
    },

    // ============================================================
    // 2.2 ETHICS OF USING DIGITAL TECHNOLOGY
    // ============================================================
    {
      id: "n2",
      title: "2.2 The Ethics of Using Digital Technology",
      titleAm: "2.2 የዲጂታል ቴክኖሎጂ አጠቃቀም ሥነ-ምግባር",
      body:
        "Abatu, ethical codes of conduct guide appropriate behavior when using digital technologies. SIX principles: Etiquette, Responsibility, Safety, Security, Confidentiality, Accuracy.",
      bodyAm:
        "አባቱ፣ 6 ሥነ-ምግባራዊ መርሆች።",
      children: [
        {
          id: "n2-1",
          title: "Etiquette",
          titleAm: "Etiquette",
          body:
            "ETIQUETTE:\n" +
            "• Understand how digital behavior affects others.\n" +
            "• Digital behavior makes everyone a role model.\n" +
            "• New technologies emerge faster than users can 'catch up'.\n" +
            "• Inappropriate tech behavior can become the norm.\n\n" +
            "EXAMPLE OF INAPPROPRIATE ETIQUETTE:\n" +
            "• Students use cell phones to send non-class messages in class.",
          bodyAm:
            "የዲጂታል ባህሪ ተጽእኖ።\n" +
            "ክፍል ውስጥ ስልክ ማጫወት = መጥፎ።",
        },
        {
          id: "n2-2",
          title: "Responsibility",
          titleAm: "Responsibility",
          body:
            "RESPONSIBILITY:\n" +
            "• Think twice about what is appropriate, ethical, + legal to download.\n\n" +
            "EXAMPLES OF INAPPROPRIATE RESPONSIBILITY:\n" +
            "• Students copy internet material for projects WITHOUT credit.\n" +
            "• Students download illegal materials.",
          bodyAm:
            "ማውረድ ከመውሰድህ በፊት አስብ።\n" +
            "ምንጭ ሳይጠቅሱ መቅዳት = መጥፎ።",
        },
        {
          id: "n2-3",
          title: "Safety",
          titleAm: "Safety",
          body:
            "SAFETY:\n" +
            "• Be aware of PHYSICAL dangers in tech use.\n" +
            "• Carpal tunnel syndrome.\n" +
            "• Eyestrain + poor posture.\n" +
            "• Use tech responsibly to prevent injuries.\n\n" +
            "EXAMPLE:\n" +
            "• Using tech in poorly lit rooms.",
          bodyAm:
            "የአካላዊ አደጋዎች ግንዛቤ።\n" +
            "በደካማ ብርሃን መጠቀም = መጥፎ።",
        },
        {
          id: "n2-4",
          title: "Security",
          titleAm: "Security",
          body:
            "SECURITY:\n" +
            "• Sensitive info stored electronically → must be protected.\n" +
            "• Virus protection, firewall, offsite storage.\n" +
            "• Personal responsibility + community protection.\n" +
            "• Keep virus software up to date.\n" +
            "• Protect yourself + others from outside harm.\n\n" +
            "EXAMPLES OF INAPPROPRIATE SECURITY:\n" +
            "• Failure to protect identity on e-mail/chat/instant messaging.\n" +
            "• Failure to protect electronic data.\n" +
            "• Failure to maintain current software updates.",
          bodyAm:
            "Virus protection፣ firewall።\n" +
            "ማንነት መጠበቅ።",
        },
        {
          id: "n2-5",
          title: "Confidentiality",
          titleAm: "Confidentiality",
          body:
            "CONFIDENTIALITY:\n" +
            "• Privacy + security important issues.\n" +
            "• Many users unaware personal info may be revealed online.\n\n" +
            "EXAMPLE OF INAPPROPRIATE CONFIDENTIALITY:\n" +
            "• Sharing email, Facebook, + other passwords with others.",
          bodyAm:
            "የግል መረጃ ጥበቃ።\n" +
            "ፓስዎርድ ለሌሎች አትንገር።",
        },
        {
          id: "n2-6",
          title: "Accuracy / Trustworthiness",
          titleAm: "Accuracy",
          body:
            "ACCURACY / TRUSTWORTHINESS:\n" +
            "• Wide realm of info on internet.\n" +
            "• NO agency monitors truth or accuracy.\n" +
            "• NO restriction on false info.\n" +
            "• Teachers must inform students to protect from incorrect info.\n" +
            "• Inaccurate info → confusion in society, medical + legal issues.",
          bodyAm:
            "ማንም እውነትን አያረጋግጥም።\n" +
            "ሐሰተኛ መረጃ አደገኛ ነው።",
        },
        {
          id: "n2-7",
          title: "⚠ Remember trap — Ethics",
          titleAm: "⚠ አትርሳ — ሥነ-ምግባር",
          body:
            "• SIX ethical principles: Etiquette, Responsibility, Safety, Security, Confidentiality, Accuracy.\n" +
            "• ETIQUETTE = behavior affects others.\n" +
            "• RESPONSIBILITY = think before downloading.\n" +
            "• SAFETY = physical dangers.\n" +
            "• SECURITY = protect data (virus, firewall).\n" +
            "• CONFIDENTIALITY = protect private info + passwords.\n" +
            "• ACCURACY = no agency monitors truth online.",
          bodyAm:
            "ERSS CA።\n" +
            "Etiquette, Responsibility, Safety, Security, Confidentiality, Accuracy።",
        },
      ],
    },

    // ============================================================
    // 2.3 OPPORTUNITIES FOR YOUNG CITIZENS
    // ============================================================
    {
      id: "n3",
      title: "2.3 Opportunities of Digital Technology for Young Citizens",
      titleAm: "2.3 ለወጣቶች ዕድሎች",
      body:
        "Abatu, digital technology opens FIVE opportunities for young citizens: information access, social connectivity, learning, versatile working, innovation + creativity.",
      bodyAm:
        "አባቱ፣ 5 ዕድሎች።",
      children: [
        {
          id: "n3-1",
          title: "Information access",
          titleAm: "የመረጃ ተደራሽነት",
          body:
            "INFORMATION ACCESS:\n" +
            "• Window of opportunity to access information about own country + world.\n" +
            "• Open access to information.\n" +
            "• Engage in collaborative activities.\n" +
            "• Become part of world people.",
          bodyAm:
            "ስለ ሀገርና ዓለም መረጃ።",
        },
        {
          id: "n3-2",
          title: "Social connectivity",
          titleAm: "ማህበራዊ ግንኙነት",
          body:
            "SOCIAL CONNECTIVITY:\n" +
            "• Connect socially in spite of time + space.\n" +
            "• Empower young generation to fully participate in digital world.\n" +
            "• Advantage: become informed citizens.",
          bodyAm:
            "ያለ ጊዜ/ቦታ ገደብ መገናኘት።",
        },
        {
          id: "n3-3",
          title: "Learning opportunities",
          titleAm: "የመማሪያ ዕድሎች",
          body:
            "LEARNING OPPORTUNITIES:\n" +
            "• Access to huge proportion of world's knowledge.\n" +
            "• Lessons + courses delivered virtually online.\n" +
            "• Communicate + learn directly from sources.\n" +
            "• No face-to-face contact needed.\n" +
            "• Learn languages, foreign events.\n" +
            "• Short-term trainings on various disciplines.\n" +
            "• Develop skills by watching videos + listening to audios.",
          bodyAm:
            "ኦንላይን ትምህርት።\n" +
            "ቪዲዮ/ኦዲዮ መማር።",
        },
        {
          id: "n3-4",
          title: "Versatile working opportunities",
          titleAm: "የሥራ ዕድሎች",
          body:
            "VERSATILE WORKING OPPORTUNITIES:\n" +
            "• Nature of work transformed.\n" +
            "• Remote working increasingly common.\n" +
            "• Jobs done from thousands of miles away.\n" +
            "• Online job search + application.",
          bodyAm:
            "ከቤት መስራት።\n" +
            "ኦንላይን ሥራ ፍለጋ።",
        },
        {
          id: "n3-5",
          title: "Innovation and creative opportunities",
          titleAm: "የፈጠራ ዕድሎች",
          body:
            "INNOVATION + CREATIVE OPPORTUNITIES:\n" +
            "• Fertile ground for creativity + innovation.\n" +
            "• Information access, connectivity, digital learning are enabling factors.\n" +
            "• Exposure to new ideas + technologies.\n" +
            "• Contributes to creativity + innovation.",
          bodyAm:
            "አዲስ ሀሳቦች + ቴክኖሎጂዎች።",
        },
        {
          id: "n3-6",
          title: "⚠ Remember trap — Opportunities",
          titleAm: "⚠ አትርሳ — ዕድሎች",
          body:
            "• FIVE opportunities: information access, social connectivity, learning, versatile working, innovation.\n" +
            "• INFORMATION = open access to world knowledge.\n" +
            "• CONNECTIVITY = across time + space.\n" +
            "• LEARNING = online courses, virtual labs.\n" +
            "• WORKING = remote jobs.\n" +
            "• INNOVATION = new ideas + technologies.",
          bodyAm:
            "5 ዕድሎች፡ መረጃ፣ ግንኙነት፣ ትምህርት፣ ሥራ፣ ፈጠራ።",
        },
      ],
    },

    // ============================================================
    // 2.4 IMPACTS OF UNETHICAL USE
    // ============================================================
    {
      id: "n4",
      title: "2.4 Impacts of Unethical Use of Digital Technology",
      titleAm: "2.4 ሥነ-ምግባር ያልተጠበቀ አጠቃቀም ተጽእኖዎች",
      body:
        "Abatu, unethical use of digital technology impacts young citizens through academic dishonesty, piracy, identity theft, and harmful content.",
      bodyAm:
        "አባቱ፣ 4 ዋና ተጽእኖዎች።",
      children: [
        {
          id: "n4-1",
          title: "Academic dishonesty",
          titleAm: "የትምህርት ማጭበርበር",
          body:
            "ACADEMIC DISHONESTY:\n" +
            "• Cheating + plagiarism = serious impacts.\n\n" +
            "CHEATING:\n" +
            "• Copying another's work.\n" +
            "• Allowing own work to be copied.\n" +
            "• Submitting another's work as own.\n" +
            "• Fabrication of data.\n" +
            "• Consulting unauthorized persons during exam.\n" +
            "• Using unauthorized aids.\n\n" +
            "PLAGIARISM:\n" +
            "• Presenting ideas, words, or intellectual property of others as one's own.\n" +
            "• Leads to dependence on others' work.\n" +
            "• Becomes dependent + unanalytical.\n" +
            "• Affects both copier + original author.\n" +
            "• Erodes authors' morality.\n" +
            "• Affects future generations who could benefit from work.",
          bodyAm:
            "Cheating = መቅዳት።\n" +
            "Plagiarism = የሌላን ሀሳብ እንደ ራስ ማቅረብ።",
        },
        {
          id: "n4-2",
          title: "Digital media piracy",
          titleAm: "ዲጂታል ሚዲያ ዘረፋ",
          body:
            "DIGITAL MEDIA PIRACY:\n" +
            "• Leading unethical practice.\n" +
            "• ILLEGAL circulation + distribution of music, movies, books, + other intellectual property.\n\n" +
            "IMPACTS:\n" +
            "1) Violates PROPERTY RIGHTS of creators.\n" +
            "2) Affects production industries.\n" +
            "3) Hinders young generation from hardworking commitment.\n" +
            "4) Musicians, academicians, filmmakers lose property rights.\n" +
            "5) Properties stolen + distributed without payment.",
          bodyAm:
            "ሙዚቃ፣ ፊልም፣ መጽሐፍ ህገ-ወጥ ስርጭት።\n" +
            "የባለቤትነት መብት ይጣሳል።",
        },
        {
          id: "n4-3",
          title: "Identity theft",
          titleAm: "የማንነት ስርቆት",
          body:
            "IDENTITY THEFT:\n" +
            "• Wide scope to hide identities online.\n" +
            "• People behave anti-socially if they think there are no consequences.\n\n" +
            "DEFINITION: fraudulent practice of using another person's identity to obtain credit, loans, etc.",
          bodyAm:
            "የሌላን ማንነት በማጭበርበር መጠቀም።",
        },
        {
          id: "n4-4",
          title: "Unfriendly and revenge sex",
          titleAm: "ጠላትነትና የበቀል ወሲብ",
          body:
            "UNFRIENDLY + REVENGE SEX:\n" +
            "• Irresponsible + unethical use of digital tech.\n" +
            "• Poses risks in relationships.\n" +
            "• Young people share, create, + forward suggestive aggressive sex videos.\n" +
            "• Practicing what they watch → separation from friends or addiction.\n" +
            "• Early sexual experiences → many problems:\n" +
            "   – Effects on education.\n" +
            "   – Engaging in sexual relationships early.\n" +
            "   – Family crisis.",
          bodyAm:
            "የተንኮል ወሲባዊ ቪዲዮዎች።\n" +
            "ቀደምት ወሲባዊ ልምድ = ችግር።",
        },
        {
          id: "n4-5",
          title: "⚠ Remember trap — Unethical use",
          titleAm: "⚠ አትርሳ — ሥነ-ምግባር ያልተጠበቀ",
          body:
            "• FOUR unethical impacts: academic dishonesty, piracy, identity theft, unfriendly/revenge sex.\n" +
            "• CHEATING = copying, fabrication, unauthorized aids.\n" +
            "• PLAGIARISM = presenting others' ideas as own.\n" +
            "• PIRACY = illegal circulation of copyrighted content.\n" +
            "• IDENTITY THEFT = fraudulent use of another's personality.\n" +
            "• REVENGE SEX = harmful sexual content.",
          bodyAm:
            "4 ተጽእኖዎች፡ ማጭበርበር፣ ዘረፋ፣ ማንነት ስርቆት፣ ወሲባዊ ጉዳት።",
        },
      ],
    },

    // ============================================================
    // KEY DEFINITIONS & RELATIONSHIPS
    // ============================================================
    {
      id: "nFormula",
      title: "Key Definitions & Relationships — Unit 2",
      titleAm: "ዋና ትርጓሜዎች — ክፍል 2",
      body:
        "| Concept                       | Definition / Key Fact                              |\n" +
        "|-------------------------------|----------------------------------------------------|\n" +
        "| Digital citizen               | Person with knowledge + skills to use digital tech effectively |\n" +
        "| Digital citizenship           | Norms of behavior regarding technology use         |\n" +
        "| Digital literacy              | Teaching + learning about technology + use         |\n" +
        "| Digital piracy                | Downloading/distributing copyrighted content without permission |\n" +
        "| Digital security              | Electronic precautions to guarantee safety         |\n" +
        "| Digital technology            | Electronic tools/systems/devices that generate, store, process data |\n" +
        "| Ethical dilemma               | Problem with two options, neither absolutely acceptable |\n" +
        "| Etiquette                     | Electronic standard of conduct/procedure           |\n" +
        "| Identity theft                | Fraudulent use of another's personality            |\n" +
        "| Plagiarism                    | Taking someone else's work/ideas as own            |\n" +
        "| Social alienation             | Feeling separated from community/work/conduct/self |\n" +
        "| Social media                  | Interactive tech for sharing ideas/messages/info   |\n" +
        "| Socialization                 | Adapting behavior to norms/cultures/society        |\n" +
        "| Cyber security                | Protection of computer systems from info disclosure, theft, damage |",
      bodyAm:
        "| ጽንሰ-ሐሳብ         | ትርጉም                          |\n" +
        "|------------------|--------------------------------|\n" +
        "| Plagiarism       | የሌላን ሥራ እንደ ራስ ማቅረብ        |\n" +
        "| Piracy           | ህገ-ወጥ ስርጭት                  |\n" +
        "| Identity theft   | ማንነት ስርቆት                    |\n" +
        "| Cyber security   | የኮምፒውተር ጥበቃ                |\n" +
        "| Ethical dilemma  | ሥነ-ምግባራዊ ችግር                |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 2",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 2",
      body:
        "1) Moderate use = POSITIVE; excessive/addictive = NEGATIVE.\n" +
        "2) Emotions positive (7) vs negative (5).\n" +
        "3) Social positive (7) vs negative (6).\n" +
        "4) Ethical positive (3) vs negative (6).\n" +
        "5) 6 ethical principles: Etiquette, Responsibility, Safety, Security, Confidentiality, Accuracy.\n" +
        "6) PLAGIARISM ≠ PIRACY.\n" +
        "7) IDENTITY THEFT = fraudulent use of another's identity.\n" +
        "8) 5 opportunities: info access, connectivity, learning, working, innovation.\n" +
        "9) 4 unethical impacts: academic dishonesty, piracy, identity theft, revenge sex.\n" +
        "10) CHEATING ≠ PLAGIARISM (cheating = copying in exams; plagiarism = presenting others' ideas as own).\n" +
        "11) Heavy social media use → MORE social isolation (not less).\n" +
        "12) Secondhand living = life experienced through digital media, not firsthand.",
      bodyAm:
        "1) መጠናዊ = ጥሩ።\n" +
        "2) 6 መርሆች።\n" +
        "3) Plagiarism ≠ Piracy።\n" +
        "4) 5 ዕድሎች።\n" +
        "5) 4 ተጽእኖዎች።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Digital technology has:", options: ["Only positive impacts", "Only negative impacts", "Both positive and negative impacts", "No impacts"], answer: "2", explanation: "Both positive and negative impacts." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Moderate use of digital technology generally produces:", options: ["Negative effects", "Positive effects", "No effects", "Only addiction"], answer: "1", explanation: "Moderate use = positive." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Excessive/addictive use of digital technology typically leads to:", options: ["Positive effects", "Negative effects", "No effects", "Only productivity"], answer: "1", explanation: "Excessive use = negative." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Which is an ethical principle of digital use?", options: ["Isolation", "Etiquette", "Addiction", "Piracy"], answer: "1", explanation: "Etiquette = ethical principle." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "How many ethical principles are there?", options: ["Three", "Four", "Five", "Six"], answer: "3", explanation: "Six: Etiquette, Responsibility, Safety, Security, Confidentiality, Accuracy." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Plagiarism is:", options: ["Selling content", "Taking someone else's work/ideas as your own", "Sharing passwords", "Using antivirus"], answer: "1", explanation: "Plagiarism = taking others' work/ideas as own." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Digital piracy is:", options: ["Legal sharing", "Illegal distribution of copyrighted content", "Antivirus update", "Email password"], answer: "1", explanation: "Illegal distribution of copyrighted content." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Identity theft is:", options: ["Creating a new email", "Fraudulent use of another's identity", "Using antivirus", "Downloading legally"], answer: "1", explanation: "Fraudulent use of another's identity." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "A digital citizen is a person who:", options: ["Uses technology without skills", "Has the knowledge + skills to use digital tech effectively", "Avoids tech completely", "Only uses paper"], answer: "1", explanation: "Has knowledge + skills to use digital tech effectively." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Social media platforms can cause which emotional issue?", options: ["Self-control", "Isolation", "Emotional balance", "Security"], answer: "1", explanation: "Isolation." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Secondhand living means:", options: ["Reading books", "Life experienced through digital media, not firsthand", "Physical exercise", "Sleeping well"], answer: "1", explanation: "Life experienced via digital media." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Which is a positive social implication of digital tech?", options: ["Speedy communication", "Job insecurity", "Data insecurity", "Alienation"], answer: "0", explanation: "Speedy communication = positive." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Which is a NEGATIVE social implication of digital tech?", options: ["Advancing education", "Improving health care", "Social alienation", "Promoting economic growth"], answer: "2", explanation: "Social alienation = negative." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "An ethical dilemma occurs when:", options: ["Two options are equally good", "Two options are both acceptable", "Neither option is absolutely acceptable ethically", "Only one option exists"], answer: "2", explanation: "Neither option absolutely acceptable ethically." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Digital literacy is the process of:", options: ["Only watching videos", "Teaching + learning about technology + use", "Only piracy", "Only hacking"], answer: "1", explanation: "Teaching + learning about technology + use." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Digital piracy violates:", options: ["Property rights", "Free speech", "Religious freedom", "Voting rights"], answer: "0", explanation: "Property rights of creators." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Which is a positive opportunity of digital tech for young citizens?", options: ["Job insecurity", "Social connectivity", "Depression", "Addiction"], answer: "1", explanation: "Social connectivity = opportunity." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Cyber security is the protection of:", options: ["Buildings", "Computer systems + networks from digital threats", "Roads", "Houses"], answer: "1", explanation: "Computer systems + networks." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "Which is a NEGATIVE emotional implication of digital technology?", options: ["Self-control", "Isolation", "Emotional balance", "Increased satisfaction"], answer: "1", explanation: "Isolation = negative." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "People with higher social media use are more likely to feel:", options: ["More connected", "More socially isolated", "More productive", "More secure"], answer: "1", explanation: "More socially isolated." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "Which is a POSITIVE ethical implication of digital tech?", options: ["Ethical dilemma", "Untruthfulness", "Developing critical thinking", "Eroding freedom"], answer: "2", explanation: "Developing critical thinking = positive." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "Which is a NEGATIVE ethical implication of digital tech?", options: ["Developing universal moral values", "Self-learning of good habits", "Ethical dilemma", "Critical thinking"], answer: "2", explanation: "Ethical dilemma = negative." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "How many opportunities does digital technology provide for young citizens (per textbook)?", options: ["Three", "Four", "Five", "Six"], answer: "2", explanation: "Five: info access, connectivity, learning, working, innovation." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "How many ethical principles of digital use are there?", options: ["Four", "Five", "Six", "Seven"], answer: "2", explanation: "Six." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "Which ethical principle involves protecting electronic data (virus protection, firewall)?", options: ["Etiquette", "Security", "Confidentiality", "Accuracy"], answer: "1", explanation: "Security = protect data." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "Which ethical principle involves not sharing passwords?", options: ["Etiquette", "Confidentiality", "Safety", "Accuracy"], answer: "1", explanation: "Confidentiality = passwords, private info." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "Which ethical principle involves physical dangers like eyestrain?", options: ["Etiquette", "Safety", "Security", "Responsibility"], answer: "1", explanation: "Safety = physical dangers." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "Which ethical principle involves verifying information because no agency monitors truth?", options: ["Confidentiality", "Accuracy/Trustworthiness", "Security", "Safety"], answer: "1", explanation: "Accuracy = verify info." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "Copying materials from the internet without giving credit is:", options: ["Etiquette issue", "Responsibility issue", "Safety issue", "Security issue"], answer: "1", explanation: "Responsibility issue." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "Which is NOT an unethical use impact?", options: ["Academic dishonesty", "Digital piracy", "Identity theft", "Learning online"], answer: "3", explanation: "Learning online = opportunity, NOT unethical use." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Plagiarism leads to:", options: ["Better academic skills", "Dependence on others' work", "Improved critical thinking", "Deeper understanding"], answer: "1", explanation: "Dependence on others' work." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "Which is a positive emotional effect of digital tech?", options: ["Isolation", "Self-control", "Depression", "Addiction"], answer: "1", explanation: "Self-control = positive." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "Anonymity + fake personality online can lead to:", options: ["Better behavior", "Anti-social behavior", "Improved ethics", "Increased honesty"], answer: "1", explanation: "Anti-social behavior." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Which is a NEGATIVE health effect of digital technology?", options: ["Improved eyesight", "Eyestrain", "Better posture", "Improved sleep"], answer: "1", explanation: "Eyestrain = negative health effect." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Which statement about ethical principles is FALSE?", options: ["Etiquette = behavior affects others", "Security = protect data", "Confidentiality = share passwords", "Accuracy = verify information"], answer: "2", explanation: "Confidentiality means DO NOT share passwords." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Which statement about digital technology impacts is TRUE?", options: ["It has only positive impacts", "It has only negative impacts", "It has both positive + negative impacts depending on use", "It has no impacts"], answer: "2", explanation: "Both positive + negative depending on use." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Heavy social media use is linked to:", options: ["Decreased depression", "Increased depression + anxiety", "Improved mental health always", "No mental health effect"], answer: "1", explanation: "Increased depression + anxiety." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "Which statement about ethical principles is FALSE?", options: ["Etiquette helps understand impacts on others", "Responsibility involves thinking before downloading", "Confidentiality means sharing passwords freely", "Accuracy means verifying information"], answer: "2", explanation: "Confidentiality = protect info, NOT share freely." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "Why is 'accuracy' difficult online?", options: ["Everything online is true", "No agency monitors truth or accuracy of information", "All information is academic", "Users always check facts"], answer: "1", explanation: "No agency monitors truth/accuracy." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "Which is TRUE about digital piracy?", options: ["It's legal sharing", "It violates property rights + harms production industries", "It helps creators", "It's recommended for students"], answer: "1", explanation: "Violates property rights + harms industries." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Secondhand living is characterized by:", options: ["Direct firsthand experiences", "Living through digital media rather than firsthand experience", "Physical outdoor activities", "Face-to-face communication only"], answer: "1", explanation: "Living through digital media, not firsthand." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "Which statement about opportunities of digital tech is FALSE?", options: ["Provides learning opportunities", "Enables remote work", "Facilitates social isolation only", "Enables innovation"], answer: "2", explanation: "It does NOT facilitate isolation ONLY — it also enables connectivity." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "Which is the biggest difference between digital citizen and digital piracy?", options: ["Both are the same", "Digital citizen = ethical user; piracy = unethical distribution", "Piracy = ethical", "Digital citizen = hacker"], answer: "1", explanation: "Citizen = ethical; piracy = unethical." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Define digital technology and digital citizenship.", answer: "DIGITAL TECHNOLOGY:\n• Electronic tools, systems, devices, + resources that generate, store, or process data.\n\nDIGITAL CITIZEN:\n• A person who has the knowledge + skills to effectively use digital technologies to communicate with others, participate in society, + consume technology.\n\nDIGITAL CITIZENSHIP:\n• The norms of behavior with regard to technology use.\n\nDIGITAL LITERACY:\n• The process of teaching + learning about technology + the use of technology.", explanation: "Digital tech = electronic tools; citizenship = norms of behavior." },
    { id: "q45", type: "short", difficulty: "easy", stem: "List the six ethical principles of using digital technology.", answer: "SIX ETHICAL PRINCIPLES:\n\n1) ETIQUETTE:\n• Understand how digital behavior affects others.\n• Digital behavior makes everyone a role model.\n\n2) RESPONSIBILITY:\n• Think twice about what is appropriate, ethical, legal to download.\n\n3) SAFETY:\n• Be aware of physical dangers (carpal tunnel, eyestrain, poor posture).\n\n4) SECURITY:\n• Protect electronic data (virus protection, firewall, offsite storage).\n\n5) CONFIDENTIALITY:\n• Protect private information + passwords.\n\n6) ACCURACY / TRUSTWORTHINESS:\n• Verify information — no agency monitors truth online.", explanation: "Etiquette, Responsibility, Safety, Security, Confidentiality, Accuracy." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Explain the POSITIVE implications of digital technology on emotions.", answer: "SEVEN POSITIVE EMOTIONAL IMPLICATIONS:\n\n1) SELF-CONTROL:\n• Manage emotions; internet arrangements (work from home) reduce emotional aggression.\n\n2) FOSTERING SOCIALIZATION:\n• Communicate + foster interpersonal relationships; stay closer to loved ones.\n\n3) MAINTAINING EMOTIONAL BALANCE:\n• Negotiate family rules; cope with stress + coordinate activities.\n\n4) SUPPORTING HAPPINESS + WELLBEING:\n• Video calls give sense of purpose; social media boosts health.\n\n5) REGULATING EMOTIONS:\n• Health + wellness resources; computer-based training in emotion regulation.\n\n6) PROVIDING SENSE OF SECURITY:\n• Mobile phones give security in public spaces; access to police + known others.\n\n7) INCREASED EMOTIONAL SATISFACTION (self-conception):\n• More connected → more satisfied; sense of pride + feeling known.", explanation: "7 positive emotional effects." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Explain the NEGATIVE implications of digital technology on emotions.", answer: "FIVE NEGATIVE EMOTIONAL IMPLICATIONS:\n\n1) ISOLATION:\n• Social media may have OPPOSITE effects — heavy users more likely to feel isolated.\n\n2) SECONDHAND LIVING:\n• Imaginary identities in virtual worlds.\n• Blurred boundaries between on-lives + off-lives.\n• Life experienced through digital media (not firsthand).\n\n3) DEPRESSION + ANXIETY:\n• Link between social network + mental health issues.\n• Restricted social interaction + high online involvement → higher depression/anxiety.\n\n4) ANONYMITY + FAKE PERSONALITY:\n• Wide scope to hide identities.\n• Anti-social behavior increases (bullying, trolling, stalking).\n• Fake personas for scamming + defrauding.\n\n5) ADDICTION:\n• Social media, games, messaging, dating sites can be addictive.\n• Users waste time + money for low return.", explanation: "5 negative emotional effects." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Explain the FIVE opportunities of digital technology for young citizens.", answer: "FIVE OPPORTUNITIES:\n\n1) INFORMATION ACCESS:\n• Window to access information about own country + world.\n• Engage in collaborative activities.\n• Become part of world people.\n\n2) SOCIAL CONNECTIVITY:\n• Connect across time + space.\n• Empowers young generation to participate in digital world.\n\n3) LEARNING OPPORTUNITIES:\n• Access to huge world knowledge.\n• Online courses + virtual labs.\n• Learn languages + foreign events.\n• Develop skills via videos + audios.\n\n4) VERSATILE WORKING OPPORTUNITIES:\n• Nature of work transformed.\n• Remote working increasingly common.\n• Jobs from thousands of miles away.\n\n5) INNOVATION + CREATIVE OPPORTUNITIES:\n• Fertile ground for creativity.\n• Exposure to new ideas + technologies.", explanation: "Info, connectivity, learning, working, innovation." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Explain the impact of unethical use of digital technology on young citizens.", answer: "FOUR MAJOR UNETHICAL IMPACTS:\n\n1) ACADEMIC DISHONESTY:\n• CHEATING = copying, fabrication of data, unauthorized aids, consulting unauthorized persons.\n• PLAGIARISM = presenting others' ideas/words/intellectual property as one's own.\n• Leads to dependence + unanalytical thinking.\n• Affects original authors (erodes morality).\n• Affects future generations.\n\n2) DIGITAL MEDIA PIRACY:\n• Illegal circulation + distribution of music, movies, books, intellectual property.\n• Violates PROPERTY RIGHTS.\n• Harms production industries.\n• Hinders hardworking commitment.\n\n3) IDENTITY THEFT:\n• Fraudulent practice of using another person's identity.\n• Wide scope online to hide identities.\n• Used for credit, loans, defrauding.\n\n4) UNFRIENDLY + REVENGE SEX:\n• Irresponsible use of digital tech.\n• Sharing/creating aggressive sexual content.\n• Practicing what they watch → addiction + separation.\n• Early sexual experiences → education, family crisis problems.", explanation: "Academic dishonesty, piracy, identity theft, revenge sex." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Explain the difference between cheating and plagiarism, and between piracy and identity theft.", answer: "CHEATING vs PLAGIARISM:\n\nCHEATING:\n• Copying another's work.\n• Allowing own work to be copied.\n• Submitting another's work as own.\n• Fabrication of data.\n• Consulting unauthorized persons during exams.\n• Using unauthorized aids.\n• Focus: academic dishonesty in exams/assignments.\n\nPLAGIARISM:\n• Presenting ideas, words, or intellectual property of others as one's own.\n• Focus: intellectual theft of ideas/writing.\n• Without attribution/credit.\n\nPIRACY vs IDENTITY THEFT:\n\nPIRACY:\n• Illegal circulation + distribution of copyrighted content (music, movies, books).\n• Violates PROPERTY rights.\n• Focus: unauthorized copying + distribution.\n\nIDENTITY THEFT:\n• Fraudulent use of another person's identity.\n• Used to obtain credit, loans, etc.\n• Focus: impersonation + fraud.\n\nKEY: Cheating = exam dishonesty; Plagiarism = idea theft; Piracy = content theft; Identity theft = identity fraud.", explanation: "Cheating (exam) ≠ Plagiarism (ideas); Piracy (content) ≠ Identity theft (identity)." },
  ],
};