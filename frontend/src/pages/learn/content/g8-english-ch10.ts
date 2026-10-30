import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 ENGLISH — UNIT 10
// COMPUTER TECHNOLOGY
// Source: English for Ethiopia Grade 8 Student Textbook (pp. 131–148)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8EnglishCh10: Chapter = {
  id: "ch10",
  number: 10,
  title: "Computer Technology",
  titleAm: "የኮምፒውተር ቴክኖሎጂ",

  notes: [
    {
      id: "n1",
      title: "1. Listening — The Evolution of Computers",
      titleAm: "1. ማዳመጥ — የኮምፒውተሮች ዝግመተ ለውጥ",
      body:
        "Banchi, computers have EVOLVED dramatically over time. Sixty years ago, a computer was AS BIG AS A HOUSE and VERY EXPENSIVE. Today, computers are small, cheap, and common.",
      bodyAm:
        "ባንቺ፣ ኮምፒውተሮች በጊዜ ሂደት በከፍተኛ ሁኔታ ተለውጠዋል። ከስድስት አሥርት ዓመታት በፊት አንድ ኮምፒውተር እንደ ቤት ያህል ትልቅና በጣም ውድ ነበር።",
      children: [
        {
          id: "n1-1",
          title: "Key Vocabulary",
          titleAm: "ቁልፍ ቃላት",
          body:
            "• REVOLUTIONARY — causing great change.\n" +
            "• TEMPORARY — lasting a short time.\n" +
            "• PERMANENT — lasting forever or a long time.\n" +
            "• ALTER — change.\n" +
            "• DISPLAYED — shown on a screen.\n" +
            "• KEY IN — type in information using a keyboard.\n" +
            "• SEQUENCE — an ordered arrangement.\n" +
            "• PROGRAM — a set of instructions for a computer.",
          bodyAm:
            "• አብዮታዊ — ትልቅ ለውጥ የሚያመጣ።\n• ጊዜያዊ — ለአጭር ጊዜ የሚቆይ።\n• ቋሚ — ለዘላለም ወይም ለረጅም ጊዜ የሚቆይ።\n• መለወጥ — ማሻሻል።\n• ማሳያ — በስክሪን ላይ የሚታይ።\n• ማስገባት — በቁልፍ ሰሌዳ መረጃ ማስገባት።\n• ቅደም ተከተል — በተደራጀ ቅደም ተከተል።",
        },
        {
          id: "n1-2",
          title: "Computer Evolution Timeline",
          titleAm: "የኮምፒውተር ዝግመተ ለውጥ የጊዜ መስመር",
          body:
            "• 1940s — computers were AS BIG AS SMALL APARTMENTS.\n" +
            "• 1950s and 1960s — companies wanted computers; the size and cost were gradually reduced; IBM played a major role.\n" +
            "• 1970s and 1980s — the PERSONAL COMPUTER (PC) was introduced.\n" +
            "• Today — computers are small, cheap, and common; individuals own them.",
          bodyAm:
            "• 1940ዎቹ — ኮምፒውተሮች እንደ ትንሽ አፓርታማ ያህል ትልቅ ነበሩ።\n• 1950ዎቹና 1960ዎቹ — ኩባንያዎች ኮምፒውተር ፈለጉ፤ መጠኑና ወጪው ቀስ በቀስ ቀነሰ፤ IBM ትልቅ ሚና ተጫወተ።\n• 1970ዎቹና 1980ዎቹ — የግል ኮምፒውተር (PC) ተጀመረ።\n• ዛሬ — ኮምፒውተሮች ትንሽ፣ ትንሽ ወጪና የተለመዱ ናቸው።",
        },
        {
          id: "n1-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: 60 years ago = computer as BIG AS A HOUSE. In 1950s/1960s = companies wanted computers. IBM played a major role. PC = PERSONAL COMPUTER. PC changed everything we do today.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ከ60 ዓመታት በፊት = ኮምፒውተር እንደ ቤት ያህል ትልቅ። PC = የግል ኮምፒውተር።",
        },
      ],
    },
    {
      id: "n2",
      title: "2. Reading — Machines with Memories",
      titleAm: "2. ንባብ — ትውስታ ያላቸው ማሽኖች",
      body:
        "Banchi, computers and calculators are a REVOLUTIONARY DEVELOPMENT in the history of technology. They are fundamentally different from all other machines because they have a MEMORY.",
      bodyAm:
        "ባንቺ፣ ኮምፒውተሮችና ካልኩሌተሮች በቴክኖሎጂ ታሪክ ውስጥ አብዮታዊ እድገት ናቸው። ከሌሎች ማሽኖች የሚለዩት ትውስታ ስላላቸው ነው።",
      children: [
        {
          id: "n2-1",
          title: "Four Elements of a Calculator",
          titleAm: "የካልኩሌተር አራቱ አካላት",
          body:
            "1) INPUT UNIT — to feed in numbers (keys).\n" +
            "2) PROCESSING UNIT — to make calculations.\n" +
            "3) MEMORY UNIT — to store arithmetic instructions and temporary results.\n" +
            "4) OUTPUT UNIT — to display the result.",
          bodyAm:
            "1) የመግቢያ አካል — ቁጥሮችን ለማስገባት።\n2) የማቀነባበሪያ አካል — ስሌት ለማካሄድ።\n3) የትውስታ አካል — የሂሳብ መመሪያዎችንና ጊዜያዊ ውጤቶችን ለማከማቸት።\n4) የውጤት አካል — ውጤቱን ለማሳየት።",
        },
        {
          id: "n2-2",
          title: "How a Calculator Works",
          titleAm: "ካልኩሌተር እንዴት እንደሚሠራ",
          body:
            "• Input unit has keys for numbers and operations.\n" +
            "• Pressing a key CLOSES the contacts and sends a SIGNAL along a PAIR OF LINES in the circuit board to the processing unit.\n" +
            "• The processing unit stores the BINARY CODE for that key in the memory.\n" +
            "• The processing unit also SENDS THE CODE to the display.\n" +
            "• Each key is connected by a DIFFERENT pair of lines to the processing unit.\n" +
            "• The processing unit REPEATEDLY CHECKS the lines to find out when a pair is linked by a key.\n" +
            "• The MEMORY UNIT stores the arithmetic instructions.\n" +
            "• STORAGE CELLS in the memory unit hold the BINARY CODES for the keys that have been pressed.",
          bodyAm:
            "• የመግቢያ አካል ለቁጥሮችና ለሥራዎች ቁልፎች አሉት።\n• ቁልፍ ሲጫን ግንኙነቱን ይዘጋል፣ በወረዳው ሰሌዳ ላይ በጥንድ መስመሮች በኩል ምልክት ይልካል።\n• የማቀነባበሪያ አካል የዚያን ቁልፍ ሁለትዮሽ ኮድ በትውስታ ያከማቻል።\n• የትውስታ አካል የሂሳብ መመሪያዎችን ያከማቻል።",
        },
        {
          id: "n2-3",
          title: "How a Computer Differs from a Calculator",
          titleAm: "ኮምፒውተር ከካልኩሌተር እንዴት እንደሚለይ",
          body:
            "• A computer contains the SAME FOUR BASIC ELEMENTS as a calculator.\n" +
            "• BUT its memory can be given a DIFFERENT SET OF INSTRUCTIONS called a COMPUTER PROGRAM for different tasks.\n" +
            "• A program can turn a computer into: a GAME PLAYER, a WORD PROCESSOR, a PAINT BOX, or a MUSICAL INSTRUMENT.\n" +
            "• The program instructs the processing unit how to perform various tasks, and STORES scores, words, pictures, or music.",
          bodyAm:
            "• ኮምፒውተር እንደ ካልኩሌተር አራቱም መሠረታዊ አካላት አሉት።\n• ግን ትውስታው ለተለያዩ ሥራዎች የተለያዩ መመሪያዎችን (ፕሮግራም) መቀበል ይችላል።\n• ፕሮግራም ኮምፒውተሩን ወደ ጨዋታ ተጫዋች፣ የቃላት ማቀነባበሪያ፣ የሥዕል ሳጥን ወይም የሙዚቃ መሣሪያ ሊለውጠው ይችላል።",
        },
        {
          id: "n2-4",
          title: "Computer Programs and Speed",
          titleAm: "የኮምፒውተር ፕሮግራሞችና ፍጥነት",
          body:
            "• Computer programs consist of LONG SEQUENCES of instructions that individually are VERY SIMPLE.\n" +
            "• A computer knows BECAUSE YOU TELL IT what to do.\n" +
            "• It is also told HOW TO MULTIPLY — which it does by ADDING the first number to itself by the second number of times.\n" +
            "• Computers can perform MILLIONS of instructions in a MATTER OF SECONDS.",
          bodyAm:
            "• የኮምፒውተር ፕሮግራሞች ረጅም ቅደም ተከተሎች ናቸው፤ እያንዳንዱ በጣም ቀላል ነው።\n• ኮምፒውተር ምን ማድረግ እንዳለበት ስለምትነግረው ያውቃል።\n• ኮምፒውተሮች በሰከንዶች ውስጥ ሚሊዮኖችን መመሪያዎች ማከናወን ይችላሉ።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: Computers and calculators are FUNDAMENTALLY DIFFERENT from ALL other machines because they have a MEMORY. Both contain FOUR elements: INPUT, PROCESSING, MEMORY, OUTPUT. A COMPUTER differs from a calculator because its memory can be given DIFFERENT PROGRAMS for different tasks. A computer does NOTHING on its own — it must be told.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ኮምፒውተሮችና ካልኩሌተሮች ትውስታ ስላላቸው ከሌሎች ማሽኖች ይለያሉ። አራቱ አካላት፡ መግቢያ፣ ማቀነባበሪያ፣ ትውስታ፣ ውጤት። ኮምፒውተር በራሱ ምንም አያደርግም — መንገር ያስፈልጋል።",
        },
      ],
    },
    {
      id: "n3",
      title: "3. Grammar — Adjectives and Adverbs",
      titleAm: "3. ሰዋሰው — ቅጽልና ተውላጠ ግስ",
      body:
        "Banchi, ADJECTIVES describe NOUNS. ADVERBS describe VERBS, adjectives, or other adverbs.",
      bodyAm:
        "ባንቺ፣ ቅጽል ስሞችን ይገልጻል። ተውላጠ ግስ ግሶችን፣ ቅጽሎችን ወይም ሌሎች ተውላጠ ግሶችን ይገልጻል።",
      children: [
        {
          id: "n3-1",
          title: "Adjectives",
          titleAm: "ቅጽሎች",
          body:
            "• Tell us about a NOUN (somebody or something).\n" +
            "• Used BEFORE nouns.\n" +
            "• Examples: Mamo is a CAREFUL driver. We didn't go out because of the HEAVY rain.\n\n" +
            "Common adjectives: quick, serious, careful, bad, heavy, terrible, friendly, lovely, elderly, lonely.",
          bodyAm:
            "• ስለ ስም (ሰው ወይም ነገር) ይነግሩናል።\n• ከስሞች በፊት ይውላሉ።\n• ምሳሌ፡ ማሞ ጥንቁቅ ሹፌር ነው።",
        },
        {
          id: "n3-2",
          title: "Adverbs",
          titleAm: "ተውላጠ ግሶች",
          body:
            "• Tell us about a VERB — how somebody does something or how something happens.\n" +
            "• Many adverbs are FORMED by adjective + -LY.\n" +
            "• Examples: quick → quickly; serious → seriously; careful → carefully; heavy → heavily; terrible → terribly.\n\n" +
            "USAGE:\n" +
            "• Mamo drove CAREFULLY along the narrow road. (not 'drove careful')\n" +
            "• We didn't go out because it was raining HEAVILY. (not 'raining heavy')\n\n" +
            "COMPARE:\n" +
            "• Million speaks PERFECT English. (adjective + noun)\n" +
            "• Million speaks English PERFECTLY. (verb + noun + adverb)",
          bodyAm:
            "• ስለ ግስ ይነግሩናል — አንድ ሰው እንዴት እንደሚሠራ።\n• ብዙ ተውላጠ ግሶች ከቅጽል + -LY ይፈጠራሉ።\n• ምሳሌ፡ ማሞ በጥንቃቄ ነዳ።",
        },
        {
          id: "n3-3",
          title: "Special Rules and Traps",
          titleAm: "ልዩ ደንቦችና ወጥመዶች",
          body:
            "• Adverbs can be used BEFORE ADJECTIVES and other ADVERBS.\n" +
            "  Examples: REASONABLY cheap; INCREDIBLY quickly; SURPRISINGLY easy.\n\n" +
            "• Adverbs can be used before a PAST PARTICIPLE.\n" +
            "  Example: Two people were SERIOUSLY injured in the accident.\n\n" +
            "• FAST, LATE, HARD, EARLY are BOTH adjectives AND adverbs.\n" +
            "  Example: He is a FAST runner (adj). He can run FAST (adv).\n\n" +
            "• HARDLY has a NEGATIVE meaning.\n" +
            "  Example: We HARDLY know each other. (= We don't really know each other.)\n\n" +
            "• GOOD (adjective) vs WELL (adverb/also adjective for health).\n" +
            "  Examples: Your English is very GOOD (adj). You speak English very WELL (adv). I am very WELL, thank you (adj).\n\n" +
            "• Not all words ending in -ly are adverbs. FRIENDLY, LOVELY, ELDERLY, LONELY are ADJECTIVES.\n" +
            "  Example: Our boss is a FRIENDLY person.",
          bodyAm:
            "• ተውላጠ ግሶች ከቅጽሎችና ከሌሎች ተውላጠ ግሶች በፊት ሊሆኑ ይችላሉ።\n• ከቀድሞ ተግባር ቅርጽ በፊትም ሊሆኑ ይችላሉ።\n• FAST, LATE, HARD, EARLY ቅጽልም ተውላጠ ግስም ናቸው።\n• HARDLY አሉታዊ ትርጉም አለው።\n• GOOD (ቅጽል) እና WELL (ተውላጠ ግስ)።\n• FRIENDLY, LOVELY, ELDERLY, LONELY ቅጽሎች ናቸው (ተውላጠ ግሶች አይደሉም)።",
        },
        {
          id: "n3-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: ADJECTIVE + NOUN (careful driver). VERB + ADVERB (drove carefully). NOT all -ly words are adverbs (friendly, lovely, elderly, lonely = adjectives). GOOD = adjective; WELL = adverb (and adjective for health). HARDLY ≠ HARD (hardly = almost not).",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ቅጽል + ስም። ግስ + ተውላጠ ግስ። ሁሉም -ly ቃላት ተውላጠ ግሶች አይደሉም። HARDLY ≠ HARD።",
        },
      ],
    },
  ],

  questions: [
    // EASY MCQ Q1–Q30
    { id: "q1", type: "mcq", difficulty: "easy", stem: "How big was a computer sixty years ago?", options: ["As big as a phone", "As big as a house", "As big as a book", "As big as a car"], answer: "1", explanation: "Banchi, 60 years ago, a computer was AS BIG AS A HOUSE." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "How were computers in the old days described?", options: ["Cheap and small", "Very expensive", "Free", "Simple"], answer: "1", explanation: "Old computers were VERY EXPENSIVE." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Which company played a major role in early computers?", options: ["IBM", "Microsoft", "Apple", "Google"], answer: "0", explanation: "IBM played a major role." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "What does PC stand for?", options: ["Personal Calculator", "Personal Computer", "Public Computer", "Program Computer"], answer: "1", explanation: "PC = PERSONAL COMPUTER." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "What is a revolutionary development?", options: ["A small change", "A major change in history", "A temporary change", "No change"], answer: "1", explanation: "REVOLUTIONARY = causing GREAT CHANGE." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "What does 'temporary' mean?", options: ["Permanent", "Lasting a short time", "Forever", "Long"], answer: "1", explanation: "TEMPORARY = LASTING A SHORT TIME." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "What does 'permanent' mean?", options: ["Temporary", "Lasting forever or a long time", "Short", "Brief"], answer: "1", explanation: "PERMANENT = LASTING FOREVER or a LONG TIME." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "What does 'alter' mean?", options: ["Keep", "Change", "Destroy", "Ignore"], answer: "1", explanation: "ALTER = CHANGE." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "What does 'displayed' mean?", options: ["Hidden", "Shown on a screen", "Broken", "Lost"], answer: "1", explanation: "DISPLAYED = SHOWN on a SCREEN." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "What does 'key in' mean?", options: ["To type in information using a keyboard", "To lock", "To open", "To close"], answer: "0", explanation: "KEY IN = to TYPE IN information using a KEYBOARD." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "What does 'sequence' mean?", options: ["Random order", "Ordered arrangement", "Chaos", "Nothing"], answer: "1", explanation: "SEQUENCE = ORDERED ARRANGEMENT." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "What makes computers and calculators fundamentally different from other machines?", options: ["They are bigger", "They have a memory", "They are faster", "They have screens"], answer: "1", explanation: "They have a MEMORY that stores instructions and information." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "How many basic elements does a calculator have?", options: ["Two", "Three", "Four", "Five"], answer: "2", explanation: "FOUR: input, processing, memory, output." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "What is the purpose of the INPUT unit?", options: ["To display results", "To feed in numbers", "To store memory", "To make calculations"], answer: "1", explanation: "INPUT UNIT = to FEED IN NUMBERS." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "What is the purpose of the PROCESSING unit?", options: ["To display results", "To feed numbers", "To make calculations", "To store memory"], answer: "2", explanation: "PROCESSING UNIT = to MAKE CALCULATIONS." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "What is the purpose of the MEMORY unit?", options: ["To display results", "To feed numbers", "To make calculations", "To store arithmetic instructions and temporary results"], answer: "3", explanation: "MEMORY UNIT = to STORE instructions AND TEMPORARY RESULTS." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "What is the purpose of the OUTPUT unit?", options: ["To display the result", "To feed numbers", "To make calculations", "To store memory"], answer: "0", explanation: "OUTPUT UNIT = to DISPLAY the RESULT." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Where does the input unit have keys?", options: ["For numbers only", "For operations only", "For numbers and operations", "For display only"], answer: "2", explanation: "Input unit has keys for NUMBERS AND OPERATIONS." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "What happens when you press a key?", options: ["The screen turns off", "It closes the contacts and sends a signal", "The memory erases", "The computer restarts"], answer: "1", explanation: "Pressing a key CLOSES the CONTACTS and SENDS a SIGNAL." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "Where does the signal go?", options: ["To the display", "Along lines in the circuit board to the processing unit", "To the memory only", "To the keyboard"], answer: "1", explanation: "Signal goes along a PAIR OF LINES in the CIRCUIT BOARD to the PROCESSING UNIT." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "What does the processing unit store in memory?", options: ["Nothing", "The binary code for that key", "Colors", "Music"], answer: "1", explanation: "The processing unit stores the BINARY CODE for that key." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "How is each key connected to the processing unit?", options: ["By one line", "By a different pair of lines", "Wirelessly", "By radio"], answer: "1", explanation: "Each key is connected by a DIFFERENT PAIR of LINES." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "What does the processing unit do repeatedly?", options: ["Sleeps", "Checks the lines to find when a pair is linked by a key", "Erases memory", "Displays colors"], answer: "1", explanation: "The processing unit REPEATEDLY CHECKS the lines." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "What does the memory unit store?", options: ["Colors", "Arithmetic instructions", "Music", "Pictures"], answer: "1", explanation: "MEMORY UNIT stores ARITHMETIC INSTRUCTIONS." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "What do storage cells hold?", options: ["Colors", "Binary codes for pressed keys", "Music", "Photographs"], answer: "1", explanation: "Storage cells hold the BINARY CODES for keys pressed." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "What is the difference between a computer and a calculator?", options: ["A computer has no memory", "A computer can be given different programs for different tasks", "A calculator is faster", "A computer is simpler"], answer: "1", explanation: "A computer can be given DIFFERENT PROGRAMS for DIFFERENT TASKS." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "What can a program turn a computer into?", options: ["Only a calculator", "A game player, word processor, paint box, or musical instrument", "Only a phone", "Only a camera"], answer: "1", explanation: "A program can turn a computer into a GAME PLAYER, WORD PROCESSOR, PAINT BOX, or MUSICAL INSTRUMENT." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "How many instructions can computers perform in seconds?", options: ["Dozens", "Hundreds", "Thousands", "Millions"], answer: "3", explanation: "Computers can perform MILLIONS of instructions in seconds." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "How does a computer know what to do?", options: ["On its own", "By luck", "You tell it", "It guesses"], answer: "2", explanation: "A computer knows BECAUSE YOU TELL IT what to do." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "How does a computer multiply?", options: ["By magic", "By adding the first number to itself the second number of times", "By guessing", "By dividing"], answer: "1", explanation: "Computer multiplies by ADDING the first number to itself." },

    // MEDIUM MCQ Q31–Q80
    { id: "q31", type: "mcq", difficulty: "medium", stem: "Which is the correct order of computer sizes?", options: ["House → small apartment → small device", "Small device → house → apartment", "Apartment → small → house", "House → small → nothing"], answer: "0", explanation: "Computers have SHRUNK from HOUSE SIZE to SMALL DEVICES." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "Which correctly describes the 1970s and 1980s?", options: ["IBM was founded", "The PC (personal computer) was introduced", "Computers were big as houses", "No one owned computers"], answer: "1", explanation: "PC introduced in the 1970s and 1980s." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "Which is TRUE about today's computers?", options: ["They are rare", "They are common and individuals own them", "Only companies own them", "They are extremely expensive"], answer: "1", explanation: "Today, computers are COMMON and individuals own them." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Which correctly explains why computers are 'revolutionary'?", options: ["They are old", "They have caused great change in the history of technology", "They are simple", "They are decorative"], answer: "1", explanation: "REVOLUTIONARY = caused GREAT CHANGE in technology." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Which correctly describes a computer's memory?", options: ["It cannot be changed", "It stores instructions AND information", "It has no function", "It only stores numbers"], answer: "1", explanation: "A computer's memory stores INSTRUCTIONS and INFORMATION." },
    { id: "q36", type: "mcq", difficulty: "medium", stem: "Which is TRUE about a calculator's instructions?", options: ["They can be changed", "They are permanently remembered and cannot be altered or added to", "They are optional", "They are temporary"], answer: "1", explanation: "Calculator instructions are PERMANENTLY REMEMBERED and CANNOT BE ALTERED." },
    { id: "q37", type: "mcq", difficulty: "medium", stem: "Which correctly describes the difference between calculator and computer memory?", options: ["They are the same", "Calculator memory is fixed; computer memory can be given different programs", "Computer memory is fixed", "Both are fixed"], answer: "1", explanation: "Calculator memory is FIXED; computer memory can be given DIFFERENT PROGRAMS." },
    { id: "q38", type: "mcq", difficulty: "medium", stem: "Which correctly lists the FOUR elements of a computer/calculator?", options: ["Input, processing, memory, output", "Screen, keyboard, mouse, printer", "Hardware, software, network, internet", "RAM, ROM, CPU, GPU"], answer: "0", explanation: "INPUT, PROCESSING, MEMORY, OUTPUT." },
    { id: "q39", type: "mcq", difficulty: "medium", stem: "Which element displays the result?", options: ["Input unit", "Processing unit", "Memory unit", "Output unit"], answer: "3", explanation: "OUTPUT UNIT displays the result." },
    { id: "q40", type: "mcq", difficulty: "medium", stem: "Which element makes calculations?", options: ["Input unit", "Processing unit", "Memory unit", "Output unit"], answer: "1", explanation: "PROCESSING UNIT makes calculations." },
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Which element holds temporary results during calculation?", options: ["Input unit", "Processing unit", "Memory unit", "Output unit"], answer: "2", explanation: "MEMORY UNIT holds TEMPORARY RESULTS." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Which correctly describes how a key works?", options: ["Closes contacts and sends a signal", "Opens the memory", "Turns off the display", "Restarts the computer"], answer: "0", explanation: "Pressing a key CLOSES contacts and SENDS a signal." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "Which correctly describes the processing unit's role in pressing a key?", options: ["Stores binary code and sends code to display", "Only receives signal", "Only displays", "Only stores"], answer: "0", explanation: "Processing unit STORES BINARY CODE and SENDS CODE to DISPLAY." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "Which correctly describes STORAGE CELLS?", options: ["They hold colors", "They hold binary codes for pressed keys", "They hold music", "They hold sounds"], answer: "1", explanation: "STORAGE CELLS hold BINARY CODES for keys PRESSED." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "Which correctly describes computer programs?", options: ["Long sequences of instructions that individually are very simple", "Short and complex", "Random", "Simple and short"], answer: "0", explanation: "Programs = LONG SEQUENCES of INDIVIDUALLY SIMPLE instructions." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "Which correctly describes a computer's speed?", options: ["Slow", "Millions of instructions in seconds", "Only a few instructions", "Never finishes"], answer: "1", explanation: "MILLIONS of instructions in SECONDS." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "What does 'key in' mean?", options: ["Lock the door", "Type in information using a keyboard", "Open the window", "Close a book"], answer: "1", explanation: "KEY IN = TYPE IN using a KEYBOARD." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "What is an example of a keyboard instrument?", options: ["Only a piano", "Any instrument with keys", "Only a computer", "Only a phone"], answer: "1", explanation: "ANY instrument with KEYS (piano, computer keyboard, calculator keypad)." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "What does 'sequence' mean in 'a sequence of instructions'?", options: ["Random", "Ordered arrangement", "No order", "Chaos"], answer: "1", explanation: "SEQUENCE = ORDERED arrangement." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Which is a comparison phrase?", options: ["One similarity", "One difference", "Both", "All of the above"], answer: "3", explanation: "Comparison: 'one similarity', 'another similarity', 'both', 'like', 'likewise', 'similarly'." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "Which is a CONTRAST phrase?", options: ["One difference", "Conversely", "In contrast", "All of the above"], answer: "3", explanation: "Contrast: 'one difference', 'conversely', 'in contrast', 'unlike', 'while', 'whereas'." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "Which is a comparison word?", options: ["Unlike", "Whereas", "Similarly", "However"], answer: "2", explanation: "'SIMILARLY' = comparison." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "Which is a contrast word?", options: ["Like", "Likewise", "Similarly", "Unlike"], answer: "3", explanation: "'UNLIKE' = contrast." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "Which is an adjective?", options: ["Quickly", "Careful", "Carefully", "Seriously"], answer: "1", explanation: "CAREFUL = adjective. The others end in -ly and are adverbs." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "Which is an adverb?", options: ["Quick", "Careful", "Heavy", "Quickly"], answer: "3", explanation: "QUICKLY = adverb." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "Which correctly uses adjective + noun?", options: ["Mamo is a careful driver", "Mamo is a carefully driver", "Mamo drives careful", "Mamo drives carefully"], answer: "0", explanation: "ADJECTIVE + NOUN: 'careful driver'." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "Which correctly uses verb + adverb?", options: ["Mamo drove carefully", "Mamo drove careful", "Mamo is careful driver", "Mamo drives careful"], answer: "0", explanation: "VERB + ADVERB: 'drove carefully'." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Which sentence is CORRECT?", options: ["We didn't go out because of the heavy rain", "We didn't go out because of the heavily rain", "We didn't go out because of rain heavy", "We didn't go out because of raining heavy"], answer: "0", explanation: "ADJECTIVE + NOUN: 'heavy rain'." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Which sentence is CORRECT?", options: ["It was raining heavily", "It was raining heavy", "It was heavy raining", "It was rain heavily"], answer: "0", explanation: "VERB + ADVERB: 'raining heavily'." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "Which is CORRECT?", options: ["Million speaks perfect English", "Million speaks perfectly English", "Million speaks English perfect", "Million speaks English heavy"], answer: "0", explanation: "ADJECTIVE + NOUN: 'perfect English'." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "Which is CORRECT?", options: ["Million speaks English perfectly", "Million speaks perfectly English", "Million speaks perfect English", "Million speaks English perfect"], answer: "0", explanation: "VERB + NOUN + ADVERB: 'speaks English perfectly'." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Which correctly uses an adverb before an adjective?", options: ["It is a reasonably cheap restaurant", "It is a cheap reasonably restaurant", "It is a restaurant reasonably cheap", "It is a reasonably restaurant cheap"], answer: "0", explanation: "ADVERB + ADJECTIVE: 'reasonably cheap'." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "Which correctly uses an adverb before another adverb?", options: ["Hawa learns languages incredibly quickly", "Hawa learns languages quickly incredibly", "Hawa incredibly learns quickly languages", "Hawa learns incredibly languages quickly"], answer: "0", explanation: "ADVERB + ADVERB: 'incredibly quickly'." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "Which correctly uses an adverb before a past participle?", options: ["Two people were seriously injured in the accident", "Two people were serious injured", "Two people were injured serious", "Two people serious were injured"], answer: "0", explanation: "ADVERB + PAST PARTICIPLE: 'seriously injured'." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Which word is BOTH adjective AND adverb?", options: ["Careful", "Fast", "Quickly", "Heavily"], answer: "1", explanation: "FAST is BOTH adjective AND adverb." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "Which correctly uses 'fast'?", options: ["He is a fast runner", "He is a fastly runner", "He runs fastly", "He fast runs"], answer: "0", explanation: "FAST as ADJECTIVE: 'a fast runner'." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "Which correctly uses 'fast' as an adverb?", options: ["He can run fast", "He can run fastly", "He can fast run", "He can run very fastly"], answer: "0", explanation: "FAST as ADVERB: 'run fast'." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "What does 'hardly' mean?", options: ["Very hard", "Almost not", "Difficult", "Strongly"], answer: "1", explanation: "HARDLY = ALMOST NOT (negative meaning)." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "Which correctly uses 'hardly'?", options: ["We hardly know each other", "We hardly knows each other", "We hard know each other", "We hardly knowing each other"], answer: "0", explanation: "'We HARDLY know each other' = we almost don't know each other." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "Which correctly uses 'good'?", options: ["Your English is very good", "Your English is very well", "Your English speaks good", "Your English is very goodly"], answer: "0", explanation: "GOOD = ADJECTIVE: 'English is good'." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Which correctly uses 'well' as an adverb?", options: ["You speak English very well", "You speak English very good", "You speak well English", "You well speak English"], answer: "0", explanation: "WELL = ADVERB: 'speak English well'." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "Which uses 'well' as an adjective for health?", options: ["I am very well, thank you", "I am very good, thank you", "I very well am", "I am very goodly, thank you"], answer: "0", explanation: "WELL as ADJECTIVE = NOT ILL / IN GOOD HEALTH." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "Which is NOT an adverb despite ending in -ly?", options: ["Quickly", "Friendly", "Carefully", "Seriously"], answer: "1", explanation: "FRIENDLY is an ADJECTIVE." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "Which is NOT an adjective ending in -ly?", options: ["Lovely", "Elderly", "Lonely", "Carefully"], answer: "3", explanation: "CAREFULLY is an ADVERB. LOVELY, ELDERLY, LONELY = adjectives." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Which is CORRECT?", options: ["Our boss is a friendly person", "Our boss is a friendlyly person", "Our boss speaks friendly", "Our boss friendly speaks"], answer: "0", explanation: "FRIENDLY = ADJECTIVE: 'friendly person'." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "Which is CORRECT?", options: ["It was a lovely day", "It was a lovelyly day", "It lovely was a day", "It was a day lovely"], answer: "0", explanation: "LOVELY = ADJECTIVE: 'lovely day'." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "Which is CORRECT?", options: ["Kenenisa drove carefully along the narrow road", "Kenenisa drove careful along the narrow road", "Kenenisa drove carefuly along the narrow road", "Kenenisa careful drove along the narrow road"], answer: "0", explanation: "VERB + ADVERB: 'drove carefully'." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "Which is CORRECT?", options: ["I think you behaved very selfishly", "I think you behaved very selfish", "I think you very selfish behaved", "I think you selfishly behaved"], answer: "0", explanation: "VERB + ADVERB: 'behaved selfishly'." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "Which is CORRECT?", options: ["The weather changed suddenly", "The weather changed sudden", "The weather sudden changed", "The weather is sudden changing"], answer: "0", explanation: "VERB + ADVERB: 'changed suddenly'." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "Which is CORRECT?", options: ["There was a sudden change in the weather", "There was a suddenly change in the weather", "There was a change sudden in the weather", "There sudden was a change in the weather"], answer: "0", explanation: "ADJECTIVE + NOUN: 'sudden change'." },

    // HARD MCQ Q81–Q100
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Which best explains why computers are revolutionary?", options: ["They are old", "They have caused major change in how we work, learn, and communicate", "They are expensive", "They are small"], answer: "1", explanation: "Computers are REVOLUTIONARY because they caused MAJOR CHANGE in work, learning, and communication." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "Which best explains why computers are different from all other machines?", options: ["They are bigger", "They have a MEMORY that stores instructions and information", "They are smaller", "They are older"], answer: "1", explanation: "The MEMORY that stores INSTRUCTIONS and INFORMATION distinguishes them." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Which best explains the difference between a computer and calculator?", options: ["They are the same", "A computer's memory can be given DIFFERENT PROGRAMS for different tasks; a calculator's instructions are FIXED", "Calculators are faster", "Computers have no memory"], answer: "1", explanation: "Computer = DIFFERENT PROGRAMS. Calculator = FIXED instructions." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Which best explains why a program is powerful?", options: ["It makes a computer slower", "It can turn a computer into a game player, word processor, paint box, or musical instrument", "It has no function", "It only processes numbers"], answer: "1", explanation: "Programs make computers MULTI-PURPOSE: game player, word processor, paint box, musical instrument." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "Which best explains why a computer 'does nothing on its own'?", options: ["Because it is broken", "Because it must be told what to do through a program", "Because it is old", "Because it has no power"], answer: "1", explanation: "A computer KNOWS because YOU TELL IT — programs give instructions." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "Which best explains why computers are powerful despite simple instructions?", options: ["Because they have complex instructions", "Because they combine millions of simple instructions at incredible speed", "Because they have no instructions", "Because they are slow"], answer: "1", explanation: "MILLIONS of INDIVIDUALLY SIMPLE instructions combined at INCREDIBLE SPEED." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "Which best explains the relationship between binary code and keys?", options: ["They are unrelated", "Each key has a UNIQUE BINARY CODE stored in the memory when pressed", "Only letters have binary codes", "Binary codes are temporary"], answer: "1", explanation: "Each key has a UNIQUE BINARY CODE stored in the MEMORY." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "Which best explains how the processing unit knows a key has been pressed?", options: ["It guesses", "It REPEATEDLY CHECKS the lines to find when a pair is linked by a key", "It hears a sound", "It sees the display"], answer: "1", explanation: "It REPEATEDLY CHECKS the LINES." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "Which best explains the writer's attitude toward computers?", options: ["Fearful", "Appreciative — computers are revolutionary tools", "Dismissive", "Indifferent"], answer: "1", explanation: "The writer is APPRECIATIVE — computers are REVOLUTIONARY." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "Which best explains the relationship between comparison and contrast?", options: ["They are the same", "Comparison shows SIMILARITIES; Contrast shows DIFFERENCES", "Contrast = similarities", "Both show only differences"], answer: "1", explanation: "COMPARISON = similarities. CONTRAST = differences." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "Which best explains why 'friendly' is not an adverb?", options: ["Because it ends in -ly but describes a NOUN (person), not a verb", "Because it is short", "Because it is old", "Because it is modern"], answer: "0", explanation: "'FRIENDLY' ends in -ly but describes a NOUN: 'friendly person' = ADJECTIVE." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "Which best explains why 'well' can be an adjective AND an adverb?", options: ["It can't", "It means 'in good health' (adjective) and 'in a good way' (adverb)", "It only means 'good'", "It is only an adverb"], answer: "1", explanation: "'WELL' = 'in good health' (ADJ) AND 'in a good way' (ADV)." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Which best explains why 'hardly' is different from 'hard'?", options: ["They are the same", "'Hard' means 'with effort' (adverb); 'hardly' means 'almost not' (negative)", "'Hard' is negative", "'Hardly' is positive"], answer: "1", explanation: "'HARD' = with effort. 'HARDLY' = almost not." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Which best explains why we should not say 'drove careful'?", options: ["Because 'careful' is a verb", "'Careful' is an ADJECTIVE — after a verb we need an ADVERB ('carefully')", "Because it is short", "Because it is modern"], answer: "1", explanation: "After a VERB, use an ADVERB: 'drove CAREFULLY'." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "Which best explains why 'heavy rain' and 'raining heavily' are both correct?", options: ["They are the same", "ADJECTIVE + NOUN = 'heavy rain'; VERB + ADVERB = 'raining heavily'", "'Heavy rain' is wrong", "'Raining heavily' is wrong"], answer: "1", explanation: "Different structures — both correct." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "Which best explains the difference between adverbs and adjectives?", options: ["They are the same", "Adjectives describe NOUNS; Adverbs describe VERBS (and adjectives/adverbs)", "Adjectives describe verbs", "Adverbs describe nouns"], answer: "1", explanation: "ADJECTIVES → NOUNS. ADVERBS → VERBS/adjectives/adverbs." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "Which is the best summary of the unit?", options: ["Computers have evolved dramatically; they have memory and are programmable; adjectives describe nouns, adverbs describe verbs", "Computers are useless", "Only calculators matter", "Grammar is unimportant"], answer: "0", explanation: "Summary covers computer evolution, components, and grammar rules." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "Which sentence is grammatically CORRECT?", options: ["The tiger was hunting for the gazelle, but it caught the zebra", "The tiger was hunting for the gazelle, but caught the zebra it", "The tiger hunted for the gazelle, but it was catching the zebra", "The tiger hunting for the gazelle, but it caught the zebra"], answer: "0", explanation: "Past continuous + past simple with contrast: 'was hunting ... but caught'." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "Which sentence is grammatically CORRECT?", options: ["The computer program instructs the processing unit how to perform various tasks", "The computer program instructs how to perform the processing unit various tasks", "The computer program how to perform instructs the processing unit tasks", "The computer program performs the processing unit various tasks"], answer: "0", explanation: "CORRECT: 'instructs the processing unit how to perform various tasks'." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "Which correctly identifies the difference between 'good' and 'well'?", options: ["They are the same", "'Good' is an ADJECTIVE; 'well' is an ADVERB (or ADJECTIVE for health)", "'Good' is an adverb", "'Well' is only a noun"], answer: "1", explanation: "'GOOD' = adjective. 'WELL' = adverb (or adjective for health)." },

    // SHORT ANSWER Q101–Q120
    { id: "q101", type: "short", difficulty: "easy", stem: "Describe how big and expensive computers were sixty years ago.", answer: "Sixty years ago, a computer was as big as a house and very expensive.", explanation: "Big as a house; very expensive." },
    { id: "q102", type: "short", difficulty: "easy", stem: "What does PC stand for?", answer: "PC stands for Personal Computer.", explanation: "Personal Computer." },
    { id: "q103", type: "short", difficulty: "easy", stem: "What is a revolutionary development?", answer: "A revolutionary development is a major change in the history of technology — like computers and calculators.", explanation: "Major change." },
    { id: "q104", type: "short", difficulty: "easy", stem: "What distinguishes computers and calculators from all other machines?", answer: "They are fundamentally different from all other machines because they have a MEMORY that stores instructions and information.", explanation: "They have memory." },
    { id: "q105", type: "short", difficulty: "medium", stem: "List the FOUR basic elements of a calculator.", answer: "1) Input unit — feeds in numbers. 2) Processing unit — makes calculations. 3) Memory unit — stores arithmetic instructions and temporary results. 4) Output unit — displays the result.", explanation: "Input, processing, memory, output." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Describe how a calculator works when you press a key.", answer: "Pressing a key closes the contacts and sends a signal along a pair of lines in the circuit board to the processing unit, in which the binary code for that key is stored in the memory. The processing unit also sends the code to the display.", explanation: "Key → signal → processing → memory → display." },
    { id: "q107", type: "short", difficulty: "medium", stem: "How does a computer differ from a calculator?", answer: "A computer contains the same four basic elements as a calculator, but its memory can be given a different set of instructions called a computer program for different tasks. A program can turn a computer into a game player, word processor, paint box, or musical instrument.", explanation: "Different programs." },
    { id: "q108", type: "short", difficulty: "medium", stem: "What are computer programs made of?", answer: "Computer programs consist of long sequences of instructions that individually are very simple.", explanation: "Long sequences of simple instructions." },
    { id: "q109", type: "short", difficulty: "medium", stem: "How fast can computers perform instructions?", answer: "Computers can perform millions of instructions in a matter of seconds.", explanation: "Millions in seconds." },
    { id: "q110", type: "short", difficulty: "medium", stem: "What does 'key in' mean?", answer: "'Key in' means to type in new information into a computer by pressing keys with numbers, letters, and other symbols, arranged on a keyboard or keypad.", explanation: "To type in information." },
    { id: "q111", type: "short", difficulty: "medium", stem: "What does 'sequence' mean?", answer: "Sequence means an ordered arrangement — for example, months of a calendar arranged from January to December.", explanation: "Ordered arrangement." },
    { id: "q112", type: "short", difficulty: "medium", stem: "What is an adjective?", answer: "An adjective describes a NOUN (somebody or something). Adjectives are usually used before nouns. Example: Mamo is a CAREFUL driver.", explanation: "Describes a noun." },
    { id: "q113", type: "short", difficulty: "medium", stem: "What is an adverb?", answer: "An adverb describes a VERB (how somebody does something or how something happens). Many adverbs are formed by adjective + -ly. Example: Mamo drove CAREFULLY.", explanation: "Describes a verb." },
    { id: "q114", type: "short", difficulty: "medium", stem: "Convert these adjectives to adverbs: quick, serious, careful, heavy, terrible.", answer: "quick → quickly; serious → seriously; careful → carefully; heavy → heavily; terrible → terribly.", explanation: "Add -ly." },
    { id: "q115", type: "short", difficulty: "hard", stem: "Give TWO examples of adverbs used before adjectives.", answer: "1) REASONABLY cheap (adverb + adjective). 2) SURPRISINGLY easy (adverb + adjective).", explanation: "Adverb + adjective." },
    { id: "q116", type: "short", difficulty: "hard", stem: "Give an example of an adverb used before a past participle.", answer: "Two people were SERIOUSLY injured in the accident.", explanation: "Adverb + past participle." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Which words are both adjectives and adverbs? Give examples.", answer: "FAST, LATE, HARD, EARLY are both adjectives and adverbs. Example: He is a fast runner (adj). He can run fast (adv).", explanation: "Both adjective and adverb." },
    { id: "q118", type: "short", difficulty: "hard", stem: "What is the difference between 'hard' and 'hardly'?", answer: "'Hard' means 'with effort' and is both adjective and adverb. 'Hardly' is an adverb with a NEGATIVE meaning — 'almost not'. Example: We hardly know each other.", explanation: "Hard ≠ hardly." },
    { id: "q119", type: "short", difficulty: "hard", stem: "Explain the difference between 'good' and 'well' with examples.", answer: "'Good' is an ADJECTIVE: 'Your English is very good.' 'Well' is an ADVERB: 'You speak English very well.' 'Well' is also an ADJECTIVE meaning 'in good health': 'I am very well, thank you.'", explanation: "Good = adjective; Well = adverb/adjective." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Write a short paragraph about computers and their importance.", answer: "Computers are a revolutionary development in the history of technology. They differ from all other machines because they have a memory that stores instructions and information. Like calculators, they contain four basic elements: input, processing, memory, and output. However, computers are more powerful because their memory can be given different programs for different tasks — turning them into game players, word processors, paint boxes, or musical instruments. Computers can perform millions of instructions in a matter of seconds, making them essential tools in our modern world.", explanation: "Topic + supporting + conclusion." },
  ],
};