import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 CITIZENSHIP (CIVICS) — UNIT 7
// CRITICAL THINKING AND PROBLEM-SOLVING SKILLS
// Source: AAEB Grade 8 Citizenship Education Student Textbook (pp. 209–241)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8CivicsCh7: Chapter = {
  id: "ch7",
  number: 7,
  title: "Critical Thinking and Problem-Solving Skills",
  titleAm: "ወሳኝ አስተሳሰብና የችግር አፈታት ክህሎቶች",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. The Meaning of Problem Solving",
      titleAm: "1. የችግር አፈታት ትርጉም",
      body:
        "Banchi, PROBLEM-SOLVING is a MENTAL ACTIVITY that aims to achieve a goal when solutions are elusive to the problem solver. It is the act of RECOGNIZING a problem, IDENTIFYING its causes, SELECTING and PRIORITIZING alternatives, and IMPLEMENTING a solution. It is a way of thinking WITHIN REASON and acting on EVIDENCE.",
      bodyAm:
        "ባንቺ፣ የችግር አፈታት ግብ ለማሳካት የሚደረግ አእምሯዊ ተግባር ነው። ችግርን መለየት፣ መንስኤውን ማወቅ፣ አማራጮችን መምረጥና መፍትሔ መተግበር ነው።",
      children: [
        {
          id: "n1-1",
          title: "Definition",
          titleAm: "ትርጉም",
          body:
            "Problem-solving is defined as the process by which an individual applies PREVIOUSLY ACQUIRED KNOWLEDGE, SKILLS, and UNDERSTANDING to meet the demands of a NEW SITUATION.",
          bodyAm:
            "የችግር አፈታት ማለት ግለሰብ ቀደም ሲል ያገኘውን ዕውቀት፣ ክህሎትና ግንዛቤ ለአዲስ ሁኔታ ፍላጎት ለማሟላት የሚጠቀምበት ሂደት ነው።",
        },
        {
          id: "n1-2",
          title: "Three Basic Functions of Problem Solving",
          titleAm: "ሦስቱ መሠረታዊ ተግባራት",
          body:
            "1) GATHERING INFORMATION.\n" +
            "2) CREATING NEW KNOWLEDGE.\n" +
            "3) MAKING DECISIONS based on that knowledge.",
          bodyAm:
            "1) መረጃ መሰብሰብ።\n2) አዲስ ዕውቀት መፍጠር።\n3) በዚያ ዕውቀት ላይ ተመስርቶ ውሳኔ ማድረግ።",
        },
        {
          id: "n1-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: Problem-solving is a MENTAL ACTIVITY based on REASON and EVIDENCE — NOT on emotion or guesswork. It involves using PRIOR knowledge to solve NEW problems.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ የችግር አፈታት በአእምሮና በማስረጃ ላይ የተመሠረተ ነው። በስሜት ወይም በግምት ላይ አይደለም።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Six Steps of Problem Solving",
      titleAm: "2. ስድስቱ የችግር አፈታት ደረጃዎች",
      body:
        "Banchi, problem solving is a STEP-BY-STEP process. You must know all SIX steps in order.",
      bodyAm:
        "ባንቺ፣ የችግር አፈታት ደረጃ በደረጃ የሚከናወን ሂደት ነው። ስድስቱን ደረጃዎች በቅደም ተከተል ማወቅ አለብሽ።",
      children: [
        {
          id: "n2-1",
          title: "Step 1 — Define the Problem",
          titleAm: "ደረጃ 1 — ችግሩን መግለጽ",
          body:
            "Recognizing the problem is the FIRST STEP. It involves identifying the problem, including the CONTEXT, BACKGROUND, and INDICATORS. After a clear understanding, you can investigate the broader symptom to discover the problem's implications.",
          bodyAm:
            "ችግሩን ማወቅ የመጀመሪያው ደረጃ ነው። አውዱን፣ ዳራውንና አመልካቾችን ያካትታል።",
        },
        {
          id: "n2-2",
          title: "Step 2 — Determine the Root Cause(s) of the Problem",
          titleAm: "ደረጃ 2 — የችግሩን ሥር መንስኤ መወሰን",
          body:
            "Once the problem is identified, attempt to determine the ROOT CAUSE. Exploring the problem is CRITICAL. Understanding the SOURCE of the problem at this stage is essential. It is critical to hold a PUBLIC DISCUSSION to identify the root cause.",
          bodyAm:
            "ችግሩ ከታወቀ በኋላ ሥር መንስኤውን መወሰን ይጀመራል። ምንጩን መረዳት ወሳኝ ነው። ለሥሩ መንስኤ ለይቶ ለማወቅ የህዝብ ውይይት ማድረግ ወሳኝ ነው።",
        },
        {
          id: "n2-3",
          title: "Step 3 — Develop Alternative Solutions",
          titleAm: "ደረጃ 3 — አማራጭ መፍትሔዎችን ማዘጋጀት",
          body:
            "After analyzing the problem, look for DIFFERENT SOLUTIONS. There could be SEVERAL solutions. Weigh them to determine the BEST. Even if finding the best solution is difficult, reducing less effective options is important. Concentrate on the NEGATIVES and POSITIVES — the benefits and drawbacks of various solutions.",
          bodyAm:
            "ችግሩን ከመረመርክ በኋላ የተለያዩ መፍትሔዎችን ፈልጊ። ብዙ መፍትሔዎች ሊኖሩ ይችላሉ። ጥቅሞችንና ጉዳቶችን መመዘን ያስፈልጋል።",
        },
        {
          id: "n2-4",
          title: "Step 4 — Select a Solution",
          titleAm: "ደረጃ 4 — መፍትሔ መምረጥ",
          body:
            "All potential solutions must be THOROUGHLY EVALUATED before making a final decision. Weigh BENEFITS and DRAWBACKS. Choose the option that BEST FITS the problem. The one with MORE BENEFITS than drawbacks is likely the BEST OPTION.",
          bodyAm:
            "ሁሉም አማራጭ መፍትሔዎች በደንብ መገምገም አለባቸው። ጥቅሞችንና ጉዳቶችን መመዘን አለብሽ። ከጉዳት በላይ ጥቅም ያለው አማራጭ ምርጡ ነው።",
        },
        {
          id: "n2-5",
          title: "Step 5 — Implement the Solution",
          titleAm: "ደረጃ 5 — መፍትሔውን መተግበር",
          body:
            "Putting a solution into action means putting a DECISION INTO ACTION. This step necessitates ACTION. It is MORE than sitting and thinking — it is a PRACTICAL STAGE where a decision, plan, or agreement is put into action.",
          bodyAm:
            "መፍትሔ ተግባራዊ ማድረግ ማለት ውሳኔን ወደ ተግባር መለወጥ ነው። ይህ ደረጃ ተግባር ይፈልጋል።",
        },
        {
          id: "n2-6",
          title: "Step 6 — Evaluate the Outcome",
          titleAm: "ደረጃ 6 — ውጤቱን መገምገም",
          body:
            "What we put in place MUST be EVALUATED. Assessing the solution entails a THOROUGH EXAMINATION. It must be MONITORED to ensure recommendations are followed. This means determining whether the solution was EFFECTIVE. This stage aids in the IMPROVEMENT of the solution or the RESOLUTION of the problem.\n\n" +
            "Taking steps in problem solving is critical to:\n" +
            "• Eliminate BIAS and PRECONCEPTIONS.\n" +
            "• Achieve greater OBJECTIVITY.\n" +
            "• Facilitate DECISION-MAKING.\n" +
            "• Ensure CONSISTENCY.\n" +
            "• Eliminate CONFUSION when different techniques are used.\n" +
            "• Offer a JUSTIFIABLE solution.",
          bodyAm:
            "ያስቀመጥነው መገምገም አለበት። መፍትሔው ውጤታማ ስለመሆኑ መወሰን ያስፈልጋል። ደረጃዎችን መከተል አድልዎን ለማስወገድ፣ ተጨባጭነትን ለማግኘት፣ ውሳኔ ለማፋጠንና ወጥ የሆነ አቀራረብን ለማረጋገጥ ወሳኝ ነው።",
        },
        {
          id: "n2-7",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, MEMORIZE the order:\n" +
            "1) DEFINE the problem\n" +
            "2) DETERMINE the root cause\n" +
            "3) DEVELOP alternative solutions\n" +
            "4) SELECT a solution\n" +
            "5) IMPLEMENT the solution\n" +
            "6) EVALUATE the outcome",
          bodyAm:
            "ባንቺ፣ ቅደም ተከተሉን አስታውሺ፡\n1) ችግሩን መግለጽ\n2) ሥር መንስኤ መወሰን\n3) አማራጭ መፍትሔዎችን ማዘጋጀት\n4) መፍትሔ መምረጥ\n5) መፍትሔውን መተግበር\n6) ውጤቱን መገምገም",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Critical Thinking in Decision Making — Seven Steps",
      titleAm: "3. በውሳኔ አሰጣጥ ውስጥ ወሳኝ አስተሳሰብ — ሰባት ደረጃዎች",
      body:
        "Banchi, DECISION-MAKING is mental processing that leads to some action CONSCIOUSLY or UNCONSCIOUSLY. Critical thinking helps with CONSCIOUS decision making. No decision should be made HAPHAZARDLY or EMOTIONALLY. There are SEVEN steps of critical thinking in decision making.",
      bodyAm:
        "ባንቺ፣ ውሳኔ ማሰጠት በንቃት ወይም ያለ ንቃት ወደ አንድ ተግባር የሚወስድ አእምሯዊ ሂደት ነው። ወሳኝ አስተሳሰብ ለንቃት ውሳኔ ይረዳል። ውሳኔ በዘፈቀደ ወይም በስሜት መሆን የለበትም።",
      children: [
        {
          id: "n3-1",
          title: "Step 1 — Identify the Decision",
          titleAm: "ደረጃ 1 — ውሳኔውን መለየት",
          body:
            "When it is necessary to make a decision, DEFINE the NATURE of the decision that must be made. It is critical that the decision be DEFINED. Without it, all other steps are IMPOSSIBLE to take.",
          bodyAm:
            "ውሳኔ ማድረግ ሲያስፈልግ የውሳኔውን ተፈጥሮ መግለጽ ያስፈልጋል። ይህ የሌለ ከሆነ ሌሎቹ ደረጃዎች ሁሉ የማይቻሉ ናቸው።",
        },
        {
          id: "n3-2",
          title: "Step 2 — Gather Relevant Information",
          titleAm: "ደረጃ 2 — ተዛማጅ መረጃ መሰብሰብ",
          body:
            "Before making a decision, GATHER relevant information. Determining the TYPE, SOURCE, and METHOD of obtaining relevant information determines the DECISION'S VALIDITY.\n\n" +
            "Some data is INTERNAL (self-evaluation). Others come from SOMEWHERE ELSE (external sources).",
          bodyAm:
            "ውሳኔ ከማድረግህ በፊት ተዛማጅ መረጃ መሰብሰብ ያስፈልጋል። የመረጃው ዓይነት፣ ምንጭና የማግኛ ዘዴ የውሳኔውን ትክክለኛነት ይወስናሉ።",
        },
        {
          id: "n3-3",
          title: "Step 3 — Identify the Alternatives",
          titleAm: "ደረጃ 3 — አማራጮችን መለየት",
          body:
            "Gathering information allows you to identify SEVERAL POSSIBLE COURSES OF ACTION, or alternatives. It is also possible to create NEW alternatives using your IMAGINATION and ADDITIONAL INFORMATION. This step will include a list of ALL POSSIBLE and DESIRABLE alternatives.",
          bodyAm:
            "መረጃ መሰብሰብ በርካታ አማራጮችን ለይቶ ለማወቅ ያስችላል። በምናብና በተጨማሪ መረጃ አዲስ አማራጮችን መፍጠርም ይቻላል።",
        },
        {
          id: "n3-4",
          title: "Step 4 — Weigh the Evidence",
          titleAm: "ደረጃ 4 — ማስረጃውን መመዘን",
          body:
            "Weigh until those who appear to have a HIGHER CHANCE of reaching the goal are distinguished from the rest. Consider whether the NEED discovered during decision-making can be met by using EACH ALTERNATIVE. It is NOT a simple process. When you go through these difficult internal processes, you end up FAVOURING certain options. Finally, PRIORITIZE alternatives based on your PERSONAL VALUE SYSTEM.",
          bodyAm:
            "ግብ የማሳካት ዕድላቸው ከፍተኛ የሆኑትን ከሌሎቹ እስኪለዩ ድረስ መመዘን ያስፈልጋል። ቀላል ሂደት አይደለም። በመጨረሻ አማራጮችን በግል እሴት ሥርዓት ቅደም ተከተል ማስያዝ ያስፈልጋል።",
        },
        {
          id: "n3-5",
          title: "Step 5 — Choose Among Alternatives",
          titleAm: "ደረጃ 5 — ከአማራጮች መካከል መምረጥ",
          body:
            "Once all the evidence has been weighed, it is simple to select the alternative that appears to be the BEST from the alternatives that have been prioritized.",
          bodyAm:
            "ሁሉም ማስረጃ ከተመዘነ በኋላ ቅደም ተከተል ከተሰጣቸው አማራጮች መካከል ምርጡን መምረጥ ቀላል ነው።",
        },
        {
          id: "n3-6",
          title: "Step 6 — Take Action",
          titleAm: "ደረጃ 6 — እርምጃ መውሰድ",
          body:
            "This is the ACTUALIZATION STAGE. You can now take some POSITIVE ACTION by starting to IMPLEMENT the alternative you chose.",
          bodyAm:
            "ይህ የተግባራዊ ደረጃ ነው። የመረጥከውን አማራጭ በመተግበር አዎንታዊ እርምጃ መውሰድ ትችላለህ።",
        },
        {
          id: "n3-7",
          title: "Step 7 — Review Your Decision & Its Consequences",
          titleAm: "ደረጃ 7 — ውሳኔውንና ውጤቱን መገምገም",
          body:
            "It is critical to REVIEW the outcomes of decisions and determine whether or not they ADDRESSED the need identified for decision making.\n\n" +
            "If the decision does NOT address the identified need, CERTAIN STEPS of the process must be REPEATED to make a NEW decision.",
          bodyAm:
            "የውሳኔዎችን ውጤት መገምገምና የተለየውን ፍላጎት ማሟላታቸውን ማረጋገጥ ወሳኝ ነው። ውሳኔው ፍላጎቱን ካላሟላ አንዳንድ ደረጃዎች ለአዲስ ውሳኔ መደገም አለባቸው።",
        },
        {
          id: "n3-8",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, MEMORIZE the SEVEN steps:\n" +
            "1) IDENTIFY the decision\n" +
            "2) GATHER relevant information\n" +
            "3) IDENTIFY alternatives\n" +
            "4) WEIGH the evidence\n" +
            "5) CHOOSE among alternatives\n" +
            "6) TAKE action\n" +
            "7) REVIEW decision & consequences",
          bodyAm:
            "ባንቺ፣ ሰባቱን ደረጃዎች አስታውሺ፡\n1) ውሳኔውን መለየት\n2) ተዛማጅ መረጃ መሰብሰብ\n3) አማራጮችን መለየት\n4) ማስረጃውን መመዘን\n5) ከአማራጮች መምረጥ\n6) እርምጃ መውሰድ\n7) ውሳኔውንና ውጤቱን መገምገም",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Skills of Critical Thinking and Problem Solving",
      titleAm: "4. የወሳኝ አስተሳሰብና የችግር አፈታት ክህሎቶች",
      body:
        "Banchi, SKILLS are actions that people take on a daily basis. When we talk about thinking as a SKILL, we mean activities like ANALYZING, EVALUATING, and EXPLAINING, as well as challenges like PROBLEM SOLVING and evaluating complex arguments. Skills are COGNITIVE SETS that can be developed, refined, and applied to achieve a goal.",
      bodyAm:
        "ባንቺ፣ ክህሎቶች ሰዎች በዕለት ተዕለት የሚሠሯቸው ተግባራት ናቸው። አስተሳሰብን እንደ ክህሎት ስንናገር ማለት መተንተን፣ መገምገምና ማብራራት ማለት ነው።",
      children: [
        {
          id: "n4-1",
          title: "Six Critical Thinking Skills",
          titleAm: "ስድስቱ የወሳኝ አስተሳሰብ ክህሎቶች",
          body:
            "1) COMPREHENDING AND EXPRESSING — understanding and expressing the significance of a wide range of experiences, situations, events, judgments, and beliefs.\n\n" +
            "2) IDENTIFYING THE RELATIONSHIPS — recognizing intended and actual INFERENTIAL RELATIONSHIPS between statements or representations.\n\n" +
            "3) ASSESSING THE CREDIBILITY — judging the VERACITY of statements or representations (accounts or descriptions of a person's perception, experience, situation, or belief).\n\n" +
            "4) DRAWING REASONABLE CONCLUSIONS — identifying and securing elements required to reach reasonable conclusions; forming speculation and suggestions; considering relevant information.\n\n" +
            "5) EXPLANATION — stating the outcomes of one's reasoning; justifying that reasoning in terms of EVIDENTIAL, CONCEPTUAL, METHODOLOGICAL, and CONTEXTUAL considerations; presenting reasoning as logical arguments.\n\n" +
            "6) SELF-REGULATION — consciously MONITORING one's cognitive activities, the elements used, and the results — particularly by applying ANALYTICAL and EVALUATIVE skills to one's own inferential judgments, with the goal of QUESTIONING, CONFIRMING, VALIDATING, or CORRECTING one's reasoning or results.",
          bodyAm:
            "1) መረዳትና መግለጽ — የተለያዩ ተሞክሮዎችን፣ ሁኔታዎችንና እምነቶችን ትርጉም መረዳትና መግለጽ።\n2) ግንኙነቶችን መለየት — በመግለጫዎች መካከል ያለውን ግንኙነት ማወቅ።\n3) አስተማማኝነትን መገምገም — የመግለጫዎችን እውነተኝነት መመዘን።\n4) ምክንያታዊ ድምዳሜ ማውጣት — ለድምዳሜ የሚያስፈልጉ ክፍሎችን መለየት።\n5) ማብራራት — የራስን አስተሳሰብ ውጤት መግለጽና ማመካከር።\n6) ራስን መቆጣጠር — የራስን የአስተሳሰብ እንቅስቃሴ በንቃት መከታተልና መገምገም።",
        },
        {
          id: "n4-2",
          title: "Habits of Critical Thinking and Problem Solving",
          titleAm: "የወሳኝ አስተሳሰብና የችግር አፈታት ልማዶች",
          body:
            "A HABIT is a ROUTINE behaviour repeated on a regular basis, usually performed SUBCONSCIOUSLY. Habits of critical thinkers:\n" +
            "• Uses EVIDENCE skillfully and impartially.\n" +
            "• ORGANIZES thoughts and articulates them concisely and coherently.\n" +
            "• SUSPENDS judgment in the absence of sufficient evidence.\n" +
            "• ACKNOWLEDGES what they don't know — regards problems and controversial issues as EXCITING CHALLENGES.\n" +
            "• STRIVES for understanding, keeps CURIOSITY alive, ready to INVEST TIME to overcome confusion.\n" +
            "• Makes JUDGMENTS based on EVIDENCE rather than personal preferences.\n" +
            "• Habitually QUESTIONS one's OWN VIEWS.\n" +
            "• Recognizes the IMPERFECTION of one's own opinions and the probability of BIAS.\n" +
            "• SEEKS and OFFERS CLEAR REASONS.\n" +
            "• Tries to be WELL-INFORMED and OPEN-MINDED.\n" +
            "• SEEKS THE TRUTH when it makes sense.",
          bodyAm:
            "ልማድ በመደበኛነት የሚደጋገም፣ ብዙ ጊዜ ያለ ንቃት የሚሠራ ባህሪ ነው።\n• ማስረጃን በክህሎትና ያለ አድልዎ ይጠቀማል።\n• ሐሳቦችን በተደራጀ መንገድ ያቀርባል።\n• በቂ ማስረጃ ከሌለ ውሳኔ ያቆማል።\n• የማያውቀውን ይቀበላል — ችግሮችን እንደ አስደሳች ፈተና ይመለከታል።\n• ለመረዳት ይጥራል፣ ጉጉትን ሕያው ያደርጋል።\n• ውሳኔዎችን በማስረጃ ላይ ይመሠርታል እንጂ በግል ምርጫ ላይ አይደለም።\n• የራሱን አመለካከቶች ይጠይቃል።\n• የራሱን አስተያየቶች ፍጹም አለመሆን ይገነዘባል።\n• ግልጽ ምክንያቶችን ይፈልጋልና ይሰጣል።\n• በደንብ የተማረና ክፍት አስተሳሰብ ይኖረዋል።",
        },
        {
          id: "n4-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: KNOW the SIX skills: Comprehending & Expressing, Identifying Relationships, Assessing Credibility, Drawing Reasonable Conclusions, Explanation, Self-Regulation. Also KNOW that HABITS are subconscious, while SKILLS are consciously developed.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ስድስቱን ክህሎቶች አውቂ፡ መረዳትና መግለጽ፣ ግንኙነቶችን መለየት፣ አስተማማኝነትን መገምገም፣ ምክንያታዊ ድምዳሜ ማውጣት፣ ማብራራት፣ ራስን መቆጣጠር።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Strategies for Improving Critical Thinking in Students",
      titleAm: "5. በተማሪዎች ውስጥ ወሳኝ አስተሳሰብን ለማሻሻል የሚያገለግሉ ስልቶች",
      body:
        "Banchi, children are NOT BORN with the ability to think critically, nor do they naturally develop this ability beyond survival-level thinking. Critical thinking is a SKILL THAT MUST BE TAUGHT. The majority of people never learn it. Here are strategies for improving students' critical thinking.",
      bodyAm:
        "ባንቺ፣ ልጆች በተወለዱበት ጊዜ ወሳኝ አስተሳሰብ የላቸውም። ወሳኝ አስተሳሰብ ማስተማር ያስፈልገዋል። አብዛኞቹ ሰዎች አይማሩትም።",
      children: [
        {
          id: "n5-1",
          title: "Ten Strategies",
          titleAm: "አሥሩ ስልቶች",
          body:
            "1) TRIAL-AND-ERROR METHODS — allows students to engage in repeated attempts at problem-solving.\n\n" +
            "2) BEING A LIFELONG LEARNER — learners are naturally curious; they READ and CONVERSE with others; they EDUCATE THEMSELVES without being told to. Obtained through READING, speaking with EXPERTS, listening to TEACHERS, or attending CONFERENCES.\n\n" +
            "3) UNDERSTANDING THE BARRIERS — encourage students to EXPRESS their obstacles; they must be aware of CONSTRAINTS impeding progress.\n\n" +
            "4) CREATING MENTAL IMAGES — useful for problem solvers who face the 'VISUAL IMAGES' problem; enables them to map out and clearly see MANY DIMENSIONS of a problem.\n\n" +
            "5) SEEKING A PATTERN — a pattern is a REGULAR, SYSTEMATIC REPETITION that can be numerical, visual, or behavioral. Many problems are similar and follow PREDICTABLE PATTERNS.\n\n" +
            "6) MANIPULATIVE — moving OBJECTS around to develop patterns and organize problem elements into recognizable components.\n\n" +
            "7) CONSIDERING UNUSUAL VIEWPOINTS — critical thinkers do NOT want to proceed in the usual way; they have a proclivity for looking for NEW SOLUTIONS to OLD PROBLEMS.\n\n" +
            "8) AVOIDING THE TRAP OF TOO MUCH INFORMATION — look at the BIG PICTURE as well as the details; avoid becoming trapped in the decision-making process.\n\n" +
            "9) IDENTIFYING MULTIPLE SOLUTIONS — there is NO SINGLE SOLUTION; there are BETTER OPTIONS. Students must understand they have MANY STRATEGIES at their disposal and NO SINGLE STRATEGY will solve all problems.\n\n" +
            "10) MONITORING A SOLUTION — although students may want to rush through, encourage them to CAREFULLY ASSESS the steps taken and MONITOR their progress.",
          bodyAm:
            "1) የመሞከርና የመሳሳት ዘዴ — ተማሪዎች ተደጋግመው እንዲሞክሩ ያስችላል።\n2) የዕድሜ ልክ ተማሪ መሆን — በተፈጥሮ ጉጉ ናቸው፤ ያነባሉ፣ ይወያያሉ።\n3) እንቅፋቶችን መረዳት — ተማሪዎች እንቅፋቶቻቸውን እንዲገልጹ ማበረታታት።\n4) አእምሯዊ ምስሎችን መፍጠር — የችግሩን ልኬቶች በግልጽ ማየት።\n5) ስርዓተ-ጥለት መፈለግ — ብዙ ችግሮች ተመሳሳይና የሚገመቱ ናቸው።\n6) በእጅ መጠቀሚያ — ነገሮችን በማንቀሳቀስ ስርዓተ-ጥለት መፍጠር።\n7) ያልተለመዱ አመለካከቶችን ማጤን — ለብረት ችግሮች አዲስ መፍትሔ መፈለግ።\n8) ከመጠን በላይ መረጃ ወጥመድን ማስወገድ — ትልቁን ምስልና ዝርዝሮችን ማየት።\n9) በርካታ መፍትሔዎችን መለየት — አንድ ብቻ መፍትሔ የለም።\n10) መፍትሔን መከታተል — የተወሰዱትን እርምጃዎች በጥንቃቄ መገምገም።",
        },
        {
          id: "n5-2",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: Critical thinking MUST BE TAUGHT. It is NOT natural. Also: students have a NATURAL proclivity to develop it — but teachers and the school community often FORCE students to behave in PREDICTABLE ways. We must CREATE SPACES for students to think and take action.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ወሳኝ አስተሳሰብ ማስተማር ያስፈልገዋል። በተፈጥሮ አይመጣም።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Importance of Critical Thinking Skills in Problem Solving",
      titleAm: "6. በችግር አፈታት ውስጥ የወሳኝ አስተሳሰብ ክህሎቶች ጠቀሜታ",
      body:
        "Banchi, it is NECESSARY to be a CRITICAL THINKER to make SOUND DECISIONS in both personal and public matters. It ensures the use of one's mind and the ability to be governed by REASON. REASON takes precedence over EMOTION. Information alone cannot sway critical thinkers. FALSE BELIEFS and MYTHS cannot rule them because they lack OBJECTIVE EVIDENCE. A critical thinker cannot switch positions arbitrarily, but CAN do so if and only if there is COMPELLING EVIDENCE.",
      bodyAm:
        "ባንቺ፣ በግልም በሕዝብም ጉዳዮች ጤናማ ውሳኔ ለማድረግ ወሳኝ አሳቢ መሆን ያስፈልጋል። አእምሮን መጠቀምንና በምክንያት መመራትን ያረጋግጣል። ምክንያት ከስሜት ይቀድማል።",
      children: [
        {
          id: "n6-1",
          title: "What Critical Thinking Enables",
          titleAm: "ወሳኝ አስተሳሰብ ምን ያስችላል",
          body:
            "Critical thinking enables people to:\n\n" +
            "• DISCOVER and OVERCOME personal preconceptions and biases.\n" +
            "• FORMULATE and PRESENT convincing reasons in support of conclusions.\n" +
            "• Make REASONABLE, INTELLIGENT decisions about what to believe and what to do.\n" +
            "• Become INDEPENDENT, SELF-DIRECTED thinkers and learners.\n" +
            "• DEFEND an argument against charges such as bias, lack of supporting evidence, or incompleteness.\n" +
            "• ASSESS the evidence in what you are reading and identify FAKE or ILLOGICAL reasoning.\n" +
            "• CREATE STRONG ARGUMENTS of your own — present and justify claims based on evaluated evidence.\n" +
            "• ANALYZE, EVALUATE, COMPARE and CONTRAST the value of materials — theories, methods, concepts, debates.\n" +
            "• DEVELOP more reasoned arguments for assignments, projects, and exams.\n" +
            "• USE AND DRAW ON EVIDENCE to justify your own arguments and ideas.\n" +
            "• SYNTHESIZE your own thoughts, the thoughts of differing theorists/researchers, and those of course materials.",
          bodyAm:
            "ወሳኝ አስተሳሰብ የሚያስችላቸው፡\n• የግል ጭፍን ጥላቻንና አድልዎን ማወቅና ማሸነፍ።\n• ለድምዳሜ አሳማኝ ምክንያቶችን ማቅረብ።\n• ምክንያታዊና አስተዋይ ውሳኔ ማድረግ።\n• ራስን የሚመራ አሳቢና ተማሪ መሆን።\n• ክርክርን ከአድልዎ፣ ከማስረጃ እጥረት መከላከል።\n• የተቀበልከውን ማስረጃ መገምገምና ሐሰተኛ ወይም ሥነ-ምክንያታዊ ያልሆነ አስተሳሰብን ማወቅ።\n• የራስህን ጠንካራ ክርክሮች መፍጠር።\n• የቁሳቁሶችን ዋጋ መተንተን፣ መገምገም፣ ማወዳደር።\n• በተግባሮች፣ ፕሮጀክቶችና ፈተናዎች የተሻሉ ምክንያቶችን ማዘጋጀት።\n• ማስረጃን ተጠቅመህ የራስህን ክርክሮችና ሐሳቦች ማመካከር።\n• የራስህን፣ የተለያዩ ተመራማሪዎችንና የኮርስ ቁሳቁሶችን ሐሳቦች ማዋሃድ።",
        },
        {
          id: "n6-2",
          title: "Why Critical Thinking Matters",
          titleAm: "ወሳኝ አስተሳሰብ ለምን አስፈለገ",
          body:
            "Critical thinking is critical because it allows humans to FULLY DEVELOP as humans. HUMANS ARE DISTINGUISHED from other animals by their ability to THINK. This ability should NOT be relegated to a lower level where we simply absorb what is told to us.\n\n" +
            "Critical thinking enables us to ANALYZE, SYNTHESIZE, and WEIGH the benefits and drawbacks of claims. These processes ULTIMATELY result in SOUND DECISIONS. As a result, EVERY DECISION must be supported by critical thinking.",
          bodyAm:
            "ወሳኝ አስተሳሰብ ሰዎች ሙሉ በሙሉ እንዲያድጉ ያስችላል። ሰዎች ከሌሎች እንስሳት የሚለዩት በማሰብ ችሎታቸው ነው። ይህ ችሎታ ዝቅተኛ ደረጃ ላይ መቀመጥ የለበትም። ወሳኝ አስተሳሰብ ማስረጃዎችን እንድንመዝንና ጤናማ ውሳኔ እንድናደርግ ያስችለናል።",
        },
        {
          id: "n6-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: Critical thinking is what DISTINGUISHES humans from other animals. REASON takes precedence over EMOTION. A critical thinker changes position ONLY when there is COMPELLING EVIDENCE.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ወሳኝ አስተሳሰብ ሰዎችን ከእንስሳት የሚለይ ነው። ምክንያት ከስሜት ይቀድማል።",
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
      stem: "What is problem-solving?",
      options: [
        "Ignoring problems",
        "A mental activity that aims to achieve a goal when solutions are elusive",
        "Making problems worse",
        "Avoiding challenges",
      ],
      answer: "1",
      explanation:
        "Banchi, PROBLEM-SOLVING = a MENTAL ACTIVITY aiming to achieve a goal when solutions are elusive.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "Problem-solving involves thinking within reason and acting on:",
      options: ["Emotion", "Evidence", "Guesswork", "Superstition"],
      answer: "1",
      explanation:
        "Problem-solving = thinking WITHIN REASON and acting on EVIDENCE.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "How many basic functions are involved in problem solving?",
      options: ["Two", "Three", "Four", "Five"],
      answer: "1",
      explanation:
        "THREE functions: GATHERING INFORMATION, CREATING NEW KNOWLEDGE, MAKING DECISIONS.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "How many steps are there in problem solving?",
      options: ["Four", "Five", "Six", "Seven"],
      answer: "2",
      explanation:
        "SIX steps in problem solving.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the FIRST step in problem solving?",
      options: [
        "Develop alternative solutions",
        "Define the problem",
        "Implement the solution",
        "Evaluate the outcome",
      ],
      answer: "1",
      explanation:
        "FIRST step = DEFINE THE PROBLEM.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the LAST step in problem solving?",
      options: [
        "Define the problem",
        "Develop alternatives",
        "Select a solution",
        "Evaluate the outcome",
      ],
      answer: "3",
      explanation:
        "LAST step = EVALUATE THE OUTCOME.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the SECOND step in problem solving?",
      options: [
        "Determine the root cause(s) of the problem",
        "Select a solution",
        "Take action",
        "Define the problem",
      ],
      answer: "0",
      explanation:
        "SECOND step = DETERMINE THE ROOT CAUSE(S) of the problem.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the FOURTH step in problem solving?",
      options: [
        "Define the problem",
        "Determine the root cause",
        "Select a solution",
        "Evaluate the outcome",
      ],
      answer: "2",
      explanation:
        "FOURTH step = SELECT A SOLUTION.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "What is decision-making?",
      options: [
        "Randomly choosing",
        "Mental processing that leads to some action consciously or unconsciously",
        "Refusing to decide",
        "Copying others",
      ],
      answer: "1",
      explanation:
        "DECISION-MAKING = MENTAL PROCESSING that leads to some action CONSCIOUSLY or UNCONSCIOUSLY.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "How many steps are there in critical thinking for decision making?",
      options: ["Four", "Five", "Six", "Seven"],
      answer: "3",
      explanation:
        "SEVEN steps in critical thinking for decision making.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the FIRST step in critical thinking for decision making?",
      options: [
        "Take action",
        "Identify the decision",
        "Weigh the evidence",
        "Review consequences",
      ],
      answer: "1",
      explanation:
        "FIRST step = IDENTIFY THE DECISION.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the LAST step in critical thinking for decision making?",
      options: [
        "Review your decision & its consequences",
        "Take action",
        "Choose among alternatives",
        "Gather information",
      ],
      answer: "0",
      explanation:
        "LAST step = REVIEW YOUR DECISION & ITS CONSEQUENCES.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "What is a HABIT?",
      options: [
        "A one-time action",
        "A routine behaviour repeated on a regular basis, usually performed subconsciously",
        "A random choice",
        "A type of skill only",
      ],
      answer: "1",
      explanation:
        "HABIT = a ROUTINE behaviour repeated REGULARLY, usually SUBCONSCIOUSLY.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "How many critical thinking SKILLS are described?",
      options: ["Four", "Five", "Six", "Seven"],
      answer: "2",
      explanation:
        "SIX skills: Comprehending & Expressing, Identifying Relationships, Assessing Credibility, Drawing Reasonable Conclusions, Explanation, Self-Regulation.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "Which skill involves understanding and expressing the significance of experiences?",
      options: [
        "Explanation",
        "Comprehending and expressing",
        "Self-regulation",
        "Identifying relationships",
      ],
      answer: "1",
      explanation:
        "COMPREHENDING AND EXPRESSING = understanding and expressing the significance of experiences.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "Which skill involves judging the VERACITY of statements?",
      options: [
        "Assessing credibility",
        "Explanation",
        "Self-regulation",
        "Comprehending",
      ],
      answer: "0",
      explanation:
        "ASSESSING CREDIBILITY = judging the VERACITY of statements.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "Which skill involves monitoring one's own cognitive activities?",
      options: [
        "Explanation",
        "Identifying relationships",
        "Self-regulation",
        "Assessing credibility",
      ],
      answer: "2",
      explanation:
        "SELF-REGULATION = consciously MONITORING one's OWN cognitive activities.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "Is critical thinking a natural ability?",
      options: [
        "Yes, everyone is born with it",
        "No, it must be taught",
        "Only for adults",
        "Only for scientists",
      ],
      answer: "1",
      explanation:
        "Critical thinking MUST BE TAUGHT — children are NOT born with it.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "What does 'being a lifelong learner' mean?",
      options: [
        "Learning only in school",
        "Naturally curious; educating oneself through reading, conversation, experts, conferences",
        "Stopping learning after school",
        "Learning only from teachers",
      ],
      answer: "1",
      explanation:
        "LIFELONG LEARNER = naturally curious; educates themselves through reading, conversations, experts, conferences.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 'seeking a pattern'?",
      options: [
        "Looking for a regular, systematic repetition (numerical, visual, or behavioral)",
        "Looking for the strongest person",
        "Looking for the leader",
        "Looking for conflict",
      ],
      answer: "0",
      explanation:
        "SEEKING A PATTERN = looking for REGULAR, SYSTEMATIC REPETITION — numerical, visual, or behavioral.",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "Which strategy involves moving objects to develop patterns?",
      options: [
        "Manipulative",
        "Trial-and-error",
        "Seeking a pattern",
        "Being a lifelong learner",
      ],
      answer: "0",
      explanation:
        "MANIPULATIVE = moving OBJECTS to develop PATTERNS.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "Which strategy involves looking for NEW SOLUTIONS to OLD problems?",
      options: [
        "Seeking a pattern",
        "Considering unusual viewpoints",
        "Being a lifelong learner",
        "Manipulative",
      ],
      answer: "1",
      explanation:
        "CONSIDERING UNUSUAL VIEWPOINTS = looking for NEW SOLUTIONS to OLD problems.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "Which strategy involves looking at the BIG PICTURE as well as details?",
      options: [
        "Avoiding the trap of too much information",
        "Manipulative",
        "Seeking a pattern",
        "Trial-and-error",
      ],
      answer: "0",
      explanation:
        "AVOIDING THE TRAP OF TOO MUCH INFORMATION = looking at the BIG PICTURE and DETAILS.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is TRUE about solutions?",
      options: [
        "There is only one solution",
        "There is NO SINGLE solution — there are BETTER options",
        "All solutions are equal",
        "Solutions don't exist",
      ],
      answer: "1",
      explanation:
        "There is NO SINGLE solution — there are BETTER options. Students must understand they have MANY strategies.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "In critical thinking, which takes precedence?",
      options: ["Emotion", "Reason", "Guesswork", "Superstition"],
      answer: "1",
      explanation:
        "REASON takes precedence over EMOTION in critical thinking.",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the definition of problem-solving?",
      options: [
        "The process by which an individual applies previously acquired knowledge, skills, and understanding to meet new demands",
        "Ignoring problems",
        "Avoiding challenges",
        "Making random guesses",
      ],
      answer: "0",
      explanation:
        "Problem-solving = applying PREVIOUSLY ACQUIRED knowledge, skills, and understanding to meet NEW SITUATIONS.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why problem-solving is a MENTAL ACTIVITY?",
      options: [
        "Because it involves physical action only",
        "Because it involves thinking within reason and acting on evidence",
        "Because it involves intuition only",
        "Because it involves emotions",
      ],
      answer: "1",
      explanation:
        "Problem-solving is a MENTAL ACTIVITY — thinking WITHIN REASON and acting on EVIDENCE.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the purpose of Step 1 (Define the Problem)?",
      options: [
        "To skip understanding",
        "To identify the problem, including context, background, and indicators",
        "To select a solution",
        "To evaluate",
      ],
      answer: "1",
      explanation:
        "Step 1 = IDENTIFY the problem, including CONTEXT, BACKGROUND, and INDICATORS.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the purpose of Step 2 (Determine Root Cause)?",
      options: [
        "To pick a solution immediately",
        "To understand the SOURCE of the problem — critical for effective solution",
        "To ignore the problem",
        "To celebrate the problem",
      ],
      answer: "1",
      explanation:
        "Step 2 = determine the ROOT CAUSE — understanding the SOURCE is CRITICAL.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes Step 3 (Develop Alternative Solutions)?",
      options: [
        "There is only one solution",
        "There could be SEVERAL solutions — weigh them to determine the BEST",
        "Ignore all but one",
        "Use the first idea",
      ],
      answer: "1",
      explanation:
        "Step 3 = SEVERAL possible solutions; weigh BENEFITS and DRAWBACKS.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes Step 4 (Select a Solution)?",
      options: [
        "Choose the first option",
        "Thoroughly evaluate all options — choose the one with MORE benefits than drawbacks",
        "Choose randomly",
        "Choose the easiest",
      ],
      answer: "1",
      explanation:
        "Step 4 = THOROUGHLY EVALUATE all options; choose the one with MORE BENEFITS than drawbacks.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes Step 5 (Implement the Solution)?",
      options: [
        "It is only thinking",
        "It is a PRACTICAL stage — putting a decision, plan, or agreement into action",
        "It is optional",
        "It is the same as Step 4",
      ],
      answer: "1",
      explanation:
        "Step 5 = PRACTICAL STAGE — putting a DECISION INTO ACTION.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes Step 6 (Evaluate the Outcome)?",
      options: [
        "Skip evaluation",
        "Assess whether the solution was EFFECTIVE and IMPROVE it if needed",
        "Ignore results",
        "Start over",
      ],
      answer: "1",
      explanation:
        "Step 6 = assess whether the solution was EFFECTIVE — aids in IMPROVEMENT or RESOLUTION.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why following problem-solving steps is important?",
      options: [
        "To complicate things",
        "To eliminate bias, achieve greater objectivity, facilitate decision-making, ensure consistency",
        "To waste time",
        "To confuse",
      ],
      answer: "1",
      explanation:
        "Problem-solving steps ELIMINATE BIAS, achieve greater OBJECTIVITY, facilitate DECISION-MAKING, and ensure CONSISTENCY.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes Step 1 of critical thinking in decision making?",
      options: [
        "Weighing evidence",
        "Identifying the decision — defining the nature of the decision",
        "Taking action",
        "Gathering information",
      ],
      answer: "1",
      explanation:
        "Step 1 = IDENTIFY THE DECISION — define the NATURE of the decision.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes Step 2 of critical thinking in decision making?",
      options: [
        "Choose among alternatives",
        "Gather relevant information — determining type, source, and method",
        "Take action",
        "Review consequences",
      ],
      answer: "1",
      explanation:
        "Step 2 = GATHER RELEVANT INFORMATION — type, source, and method of obtaining it determine the DECISION'S VALIDITY.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes Step 3 of critical thinking in decision making?",
      options: [
        "Identify alternatives — identify SEVERAL possible courses of action",
        "Take action",
        "Weigh evidence",
        "Review consequences",
      ],
      answer: "0",
      explanation:
        "Step 3 = IDENTIFY THE ALTERNATIVES — possible courses of action; can create NEW alternatives using imagination.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes Step 4 of critical thinking in decision making?",
      options: [
        "Identify the decision",
        "Gather information",
        "Weigh the evidence — prioritize alternatives based on personal value system",
        "Take action",
      ],
      answer: "2",
      explanation:
        "Step 4 = WEIGH THE EVIDENCE — prioritize alternatives based on PERSONAL VALUE SYSTEM.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes Step 5 of critical thinking in decision making?",
      options: [
        "Choose among alternatives — select the BEST from prioritized options",
        "Take action",
        "Review consequences",
        "Identify the decision",
      ],
      answer: "0",
      explanation:
        "Step 5 = CHOOSE AMONG ALTERNATIVES — select the BEST from prioritized options.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes Step 6 of critical thinking in decision making?",
      options: [
        "Identify the decision",
        "Take action — the ACTUALIZATION STAGE",
        "Weigh evidence",
        "Gather information",
      ],
      answer: "1",
      explanation:
        "Step 6 = TAKE ACTION — the ACTUALIZATION STAGE.",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes Step 7 of critical thinking in decision making?",
      options: [
        "Identify the decision",
        "Review your decision & its consequences — determine if the decision addressed the need",
        "Take action",
        "Gather information",
      ],
      answer: "1",
      explanation:
        "Step 7 = REVIEW YOUR DECISION & ITS CONSEQUENCES — determine if the decision addressed the identified need.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the relationship between skills and habits?",
      options: [
        "They are the same",
        "Skills are conscious, developable abilities; habits are routine behaviours performed subconsciously",
        "Habits are more important",
        "Skills are subconscious",
      ],
      answer: "1",
      explanation:
        "SKILLS = conscious, developable abilities. HABITS = routine behaviours performed SUBCONSCIOUSLY.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the habit 'uses evidence skillfully and impartially'?",
      options: [
        "Ignoring evidence",
        "Considering evidence fairly without bias",
        "Using only personal opinion",
        "Using evidence selectively",
      ],
      answer: "1",
      explanation:
        "USES EVIDENCE SKILLFULLY AND IMPARTIALLY = considering evidence FAIRLY without BIAS.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the habit 'suspends judgment in the absence of sufficient evidence'?",
      options: [
        "Judging immediately",
        "Waiting for adequate evidence before making a judgment",
        "Ignoring evidence",
        "Using only emotion",
      ],
      answer: "1",
      explanation:
        "SUSPENDS JUDGMENT = WAITING for ADEQUATE EVIDENCE before deciding.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the habit 'acknowledges what they don't know'?",
      options: [
        "Pretending to know everything",
        "Admitting gaps in knowledge and seeing problems as exciting challenges",
        "Hiding ignorance",
        "Avoiding challenges",
      ],
      answer: "1",
      explanation:
        "ACKNOWLEDGES what they DON'T KNOW and REGARDS problems as EXCITING CHALLENGES.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the habit 'habitually questions one's own views'?",
      options: [
        "Never questioning yourself",
        "Regularly examining and questioning one's OWN views and assumptions",
        "Always agreeing with yourself",
        "Ignoring others",
      ],
      answer: "1",
      explanation:
        "HABITUALLY QUESTIONS ONE'S OWN VIEWS = regularly examining your OWN views and assumptions.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the habit 'recognizes the imperfection of one's own opinions'?",
      options: [
        "Believing opinions are perfect",
        "Understanding the probability of bias in one's own opinions and the danger of weighting evidence by preference",
        "Refusing to consider alternatives",
        "Rejecting all opinions",
      ],
      answer: "1",
      explanation:
        "RECOGNIZES IMPERFECTION = understanding PROBABILITY of BIAS and the DANGER of weighting evidence by PREFERENCE.",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why critical thinking is important in personal AND public matters?",
      options: [
        "Because it's only for personal matters",
        "Because it ensures SOUND DECISIONS — reason takes precedence over emotion",
        "Because it's only for government",
        "Because it's optional",
      ],
      answer: "1",
      explanation:
        "Critical thinking ensures SOUND DECISIONS in BOTH personal and public matters — reason over emotion.",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why critical thinkers cannot be swayed by false beliefs and myths?",
      options: [
        "Because they don't care",
        "Because false beliefs and myths LACK OBJECTIVE EVIDENCE",
        "Because they are stubborn",
        "Because they ignore everything",
      ],
      answer: "1",
      explanation:
        "False beliefs and myths CANNOT rule critical thinkers because they LACK OBJECTIVE EVIDENCE.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains when a critical thinker can switch positions?",
      options: [
        "Randomly",
        "Only when there is COMPELLING EVIDENCE",
        "Whenever they want",
        "Never",
      ],
      answer: "1",
      explanation:
        "A critical thinker CAN switch positions IF AND ONLY IF there is COMPELLING EVIDENCE.",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why problem solving requires STEP-BY-STEP following?",
      options: [
        "Because steps are optional",
        "Because it eliminates bias, ensures consistency, and offers a JUSTIFIABLE solution",
        "Because it takes longer",
        "Because it confuses",
      ],
      answer: "1",
      explanation:
        "Following steps ELIMINATES BIAS, ensures CONSISTENCY, and OFFERS a JUSTIFIABLE solution.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why reason must take precedence over emotion in decision making?",
      options: [
        "Because emotion is useless",
        "Because decisions based on emotion are often HAPHAZARD and can lead to poor outcomes",
        "Because reason is faster",
        "Because emotion is illegal",
      ],
      answer: "1",
      explanation:
        "Decisions based on EMOTION are often HAPHAZARD — leading to POOR OUTCOMES. REASON ensures SOUND decisions.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why students should NOT be forced to behave in PREDICTABLE ways?",
      options: [
        "Because predictability is bad",
        "Because FORCING predictability LIMITS students' natural proclivity to develop critical thinking — spaces for thinking and action are needed",
        "Because teachers know nothing",
        "Because rules are bad",
      ],
      answer: "1",
      explanation:
        "Forcing PREDICTABILITY LIMITS students' natural proclivity to develop CRITICAL THINKING — spaces for thinking and action are needed.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why MONITORING a solution is important?",
      options: [
        "Because rushing is better",
        "Because CAREFUL ASSESSMENT of steps and MONITORING of progress ensures the solution is EFFECTIVE",
        "Because monitoring is optional",
        "Because solutions always work",
      ],
      answer: "1",
      explanation:
        "MONITORING ensures the solution is EFFECTIVE — CAREFUL ASSESSMENT of steps and progress.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why critical thinking distinguishes humans from other animals?",
      options: [
        "Because animals can think critically",
        "Because humans have the ability to THINK — analyze, synthesize, and weigh benefits and drawbacks",
        "Because animals are stronger",
        "Because humans are larger",
      ],
      answer: "1",
      explanation:
        "CRITICAL THINKING — analyzing, synthesizing, and weighing benefits — DISTINGUISHES HUMANS from OTHER ANIMALS.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains the relationship between information and critical thinking?",
      options: [
        "Information alone determines decisions",
        "Information ALONE cannot sway critical thinkers — they need EVIDENCE and REASON",
        "Information is unnecessary",
        "Critical thinkers ignore information",
      ],
      answer: "1",
      explanation:
        "Information ALONE cannot sway critical thinkers — they require EVIDENCE and REASON.",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Define problem-solving and explain its three basic functions.",
      answer:
        "PROBLEM-SOLVING = a MENTAL ACTIVITY that aims to achieve a goal when solutions are elusive to the problem solver. It is the act of RECOGNIZING a problem, IDENTIFYING its causes, SELECTING and PRIORITIZING alternatives, and IMPLEMENTING a solution. It is thinking within REASON and acting on EVIDENCE.\n\n" +
        "Three basic functions:\n" +
        "1) GATHERING INFORMATION.\n" +
        "2) CREATING NEW KNOWLEDGE.\n" +
        "3) MAKING DECISIONS based on that knowledge.",
      explanation:
        "Banchi, remember the three functions.",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "List and explain the SIX steps of problem solving.",
      answer:
        "1) DEFINE THE PROBLEM — identify it, including context, background, and indicators.\n\n" +
        "2) DETERMINE THE ROOT CAUSE(S) — understand the source of the problem; hold public discussion if needed.\n\n" +
        "3) DEVELOP ALTERNATIVE SOLUTIONS — look for different solutions; weigh benefits and drawbacks.\n\n" +
        "4) SELECT A SOLUTION — thoroughly evaluate all options; choose the one with MORE benefits than drawbacks.\n\n" +
        "5) IMPLEMENT THE SOLUTION — put the decision into action.\n\n" +
        "6) EVALUATE THE OUTCOME — assess whether the solution was effective; improve if needed.\n\n" +
        "Following these steps helps ELIMINATE BIAS, achieve OBJECTIVITY, facilitate DECISION-MAKING, and ensure CONSISTENCY.",
      explanation:
        "Banchi, memorize the six steps in order.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "List and explain the SEVEN steps of critical thinking in decision making.",
      answer:
        "1) IDENTIFY THE DECISION — define the nature of the decision.\n\n" +
        "2) GATHER RELEVANT INFORMATION — determine type, source, and method; both internal (self-evaluation) and external.\n\n" +
        "3) IDENTIFY THE ALTERNATIVES — list all possible and desirable alternatives; can create new ones using imagination.\n\n" +
        "4) WEIGH THE EVIDENCE — distinguish which alternatives have a higher chance of reaching the goal; prioritize based on personal value system.\n\n" +
        "5) CHOOSE AMONG ALTERNATIVES — select the BEST from prioritized alternatives.\n\n" +
        "6) TAKE ACTION — actualization stage; implement the chosen alternative.\n\n" +
        "7) REVIEW DECISION & CONSEQUENCES — determine whether the decision addressed the need; if not, repeat certain steps.",
      explanation:
        "Banchi, memorize the seven steps.",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "Explain the SKILLS and HABITS of critical thinking, and describe the importance of critical thinking in problem solving.",
      answer:
        "SKILLS OF CRITICAL THINKING (6):\n" +
        "1) COMPREHENDING AND EXPRESSING — understanding and expressing significance of experiences, situations, events, judgments, beliefs.\n" +
        "2) IDENTIFYING RELATIONSHIPS — recognizing inferential relationships between statements.\n" +
        "3) ASSESSING CREDIBILITY — judging veracity of statements.\n" +
        "4) DRAWING REASONABLE CONCLUSIONS — forming speculation, considering relevant info.\n" +
        "5) EXPLANATION — stating outcomes of reasoning; justifying with evidential, conceptual, methodological, contextual considerations.\n" +
        "6) SELF-REGULATION — consciously monitoring cognitive activities and results.\n\n" +
        "HABITS OF CRITICAL THINKERS:\n" +
        "• Uses evidence skillfully and impartially.\n" +
        "• Organizes thoughts concisely.\n" +
        "• Suspends judgment without sufficient evidence.\n" +
        "• Acknowledges what they don't know.\n" +
        "• Strives for understanding; keeps curiosity alive.\n" +
        "• Judges based on evidence, not preference.\n" +
        "• Questions one's own views.\n" +
        "• Recognizes imperfection and bias in opinions.\n" +
        "• Seeks and offers clear reasons.\n" +
        "• Tries to be well-informed and open-minded.\n\n" +
        "IMPORTANCE OF CRITICAL THINKING IN PROBLEM SOLVING:\n" +
        "Critical thinking enables people to:\n" +
        "• DISCOVER and OVERCOME personal preconceptions and biases.\n" +
        "• FORMULATE and PRESENT convincing reasons for conclusions.\n" +
        "• Make REASONABLE, INTELLIGENT decisions about what to believe and do.\n" +
        "• Become INDEPENDENT, SELF-DIRECTED thinkers and learners.\n" +
        "• DEFEND arguments against charges of bias or incompleteness.\n" +
        "• ASSESS evidence and identify fake/illogical reasoning.\n" +
        "• CREATE STRONG ARGUMENTS of their own.\n" +
        "• ANALYZE, EVALUATE, COMPARE, and CONTRAST value of materials.\n" +
        "• SYNTHESIZE their own thoughts with others'.\n\n" +
        "REASON takes precedence over EMOTION. False beliefs and myths cannot rule critical thinkers because they LACK OBJECTIVE EVIDENCE.",
      explanation:
        "Banchi, memorize the skills, habits, and importance of critical thinking.",
    },

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a basic function of problem solving?",
      options: [
        "Gathering information",
        "Creating new knowledge",
        "Making decisions",
        "Ignoring the problem",
      ],
      answer: "3",
      explanation:
        "IGNORING the problem is NOT a basic function of problem solving.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a step of problem solving?",
      options: [
        "Define the problem",
        "Determine root cause",
        "Select a solution",
        "Give up",
      ],
      answer: "3",
      explanation:
        "GIVING UP is NOT a step of problem solving.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a step of critical thinking in decision making?",
      options: [
        "Identify the decision",
        "Take action",
        "Review consequences",
        "Act on emotion",
      ],
      answer: "3",
      explanation:
        "ACTING ON EMOTION is NOT a step of critical thinking in decision making.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a critical thinking skill?",
      options: [
        "Comprehending and expressing",
        "Assessing credibility",
        "Self-regulation",
        "Ignoring evidence",
      ],
      answer: "3",
      explanation:
        "IGNORING EVIDENCE is NOT a critical thinking skill.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a habit of critical thinkers?",
      options: [
        "Uses evidence impartially",
        "Suspends judgment without evidence",
        "Questions own views",
        "Acts rashly on emotions",
      ],
      answer: "3",
      explanation:
        "ACTING RASHLY on EMOTIONS is NOT a habit of critical thinkers.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Which strategy allows students to engage in repeated attempts at problem-solving?",
      options: [
        "Trial-and-error",
        "Being a lifelong learner",
        "Seeking a pattern",
        "Avoiding the trap of too much information",
      ],
      answer: "0",
      explanation:
        "TRIAL-AND-ERROR allows REPEATED ATTEMPTS at problem-solving.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Which strategy involves encouraging students to express their obstacles?",
      options: [
        "Understanding the barriers",
        "Trial-and-error",
        "Seeking a pattern",
        "Being a lifelong learner",
      ],
      answer: "0",
      explanation:
        "UNDERSTANDING THE BARRIERS = encouraging students to EXPRESS their obstacles.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "Which strategy involves mapping out and clearly seeing many dimensions of a problem?",
      options: [
        "Creating mental images",
        "Seeking a pattern",
        "Manipulative",
        "Trial-and-error",
      ],
      answer: "0",
      explanation:
        "CREATING MENTAL IMAGES = mapping out and seeing MANY DIMENSIONS of a problem.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Which strategy involves NO SINGLE solution but BETTER options?",
      options: [
        "Identifying multiple solutions",
        "Trial-and-error",
        "Seeking a pattern",
        "Understanding the barriers",
      ],
      answer: "0",
      explanation:
        "IDENTIFYING MULTIPLE SOLUTIONS = there is NO SINGLE solution — there are BETTER options.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "What does 'taking action' in decision making mean?",
      options: [
        "Sitting and thinking",
        "Actually implementing the chosen alternative",
        "Avoiding the decision",
        "Repeating analysis",
      ],
      answer: "1",
      explanation:
        "TAKING ACTION = IMPLEMENTING the chosen alternative — the ACTUALIZATION STAGE.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "Why is REVIEWING a decision important?",
      options: [
        "To make things complicated",
        "To determine if the decision addressed the identified need",
        "To confuse",
        "To waste time",
      ],
      answer: "1",
      explanation:
        "REVIEWING determines whether the decision ADDRESSED the IDENTIFIED NEED.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is TRUE about critical thinking?",
      options: [
        "It is only for scientists",
        "It is necessary for making SOUND DECISIONS in personal and public matters",
        "It is not important",
        "It can be ignored",
      ],
      answer: "1",
      explanation:
        "Critical thinking is NECESSARY for SOUND DECISIONS in personal and public matters.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is TRUE about applying problem-solving steps?",
      options: [
        "The order doesn't matter",
        "The order matters — you must not skip or jump steps",
        "Only the first step matters",
        "Only the last step matters",
      ],
      answer: "1",
      explanation:
        "The ORDER matters — do NOT skip or jump steps.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "Which type of information is described as 'internal'?",
      options: [
        "Information from the internet",
        "Self-evaluation",
        "Information from a friend",
        "Information from a book",
      ],
      answer: "1",
      explanation:
        "INTERNAL information = SELF-EVALUATION. External = from sources outside.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is TRUE about critical thinking and emotion?",
      options: [
        "Emotion is more important",
        "REASON takes precedence over EMOTION",
        "They are equally important",
        "Emotion should rule decisions",
      ],
      answer: "1",
      explanation:
        "REASON takes PRECEDENCE over EMOTION in critical thinking.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "Why must critical thinking skills be TAUGHT?",
      options: [
        "Because children are naturally critical thinkers",
        "Because children are NOT born with the ability to think critically beyond survival level",
        "Because it's easy",
        "Because it's optional",
      ],
      answer: "1",
      explanation:
        "Children are NOT born with CRITICAL THINKING beyond SURVIVAL-LEVEL thinking. It must be TAUGHT.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "Why do MOST people never learn critical thinking?",
      options: [
        "Because it's impossible",
        "Because it must be taught and is often not taught",
        "Because they don't want to",
        "Because it's not important",
      ],
      answer: "1",
      explanation:
        "Critical thinking MUST BE TAUGHT — the MAJORITY of people never learn it because it is NOT TAUGHT.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is TRUE about the relationship between critical thinking and quality of life?",
      options: [
        "They are unrelated",
        "Critical thinking leads to SOUND decisions and higher quality of life",
        "Critical thinking lowers quality",
        "They are the same",
      ],
      answer: "1",
      explanation:
        "Critical thinking leads to SOUND DECISIONS and IMPROVED quality of life.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes how critical thinking helps with reading?",
      options: [
        "By accepting everything written",
        "By assessing evidence and identifying fake or illogical reasoning",
        "By reading faster",
        "By ignoring arguments",
      ],
      answer: "1",
      explanation:
        "Critical thinking helps ASSESS EVIDENCE and IDENTIFY FAKE or ILLOGICAL reasoning when READING.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes how critical thinking helps with writing?",
      options: [
        "By copying others",
        "By helping to formulate stronger arguments, present them clearly, and justify claims based on evaluated evidence",
        "By ignoring evidence",
        "By writing less",
      ],
      answer: "1",
      explanation:
        "Critical thinking helps CREATE STRONG ARGUMENTS, PRESENT them clearly, and JUSTIFY claims based on EVALUATED EVIDENCE.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is TRUE about critical thinkers and changing positions?",
      options: [
        "They change randomly",
        "They NEVER change positions",
        "They change ONLY when there is COMPELLING EVIDENCE",
        "They change when others insist",
      ],
      answer: "2",
      explanation:
        "Critical thinkers change positions ONLY when there is COMPELLING EVIDENCE.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "What is a key difference between skills and habits?",
      options: [
        "Skills are subconscious; habits are conscious",
        "Skills are conscious; habits are performed subconsciously",
        "They are the same",
        "Habits cannot be changed",
      ],
      answer: "1",
      explanation:
        "SKILLS are conscious; HABITS are performed SUBCONSCIOUSLY.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is TRUE about problem-solving techniques?",
      options: [
        "Only one technique works for all problems",
        "NO SINGLE strategy will solve ALL problems — many strategies exist",
        "No strategy works",
        "All strategies are equally good",
      ],
      answer: "1",
      explanation:
        "NO SINGLE STRATEGY will solve ALL problems — students must have MANY strategies.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "Why should students NOT rush through problem-solving strategies?",
      options: [
        "Because it's fun",
        "Because CAREFUL ASSESSMENT of steps and MONITORING ensures effectiveness",
        "Because it's slow",
        "Because it's optional",
      ],
      answer: "1",
      explanation:
        "CAREFUL ASSESSMENT and MONITORING ensure the solution is EFFECTIVE.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is TRUE about the ability to think?",
      options: [
        "Animals and humans have equal thinking ability",
        "Humans are distinguished from other animals by their ability to think",
        "Thinking is not important",
        "Thinking is only for adults",
      ],
      answer: "1",
      explanation:
        "HUMANS are DISTINGUISHED from OTHER ANIMALS by their ability to THINK.",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why Step 3 (Develop Alternatives) requires weighing benefits and drawbacks?",
      options: [
        "To complicate",
        "To determine the BEST solution — reducing LESS EFFECTIVE options",
        "To ignore",
        "To slow down",
      ],
      answer: "1",
      explanation:
        "Weighing BENEFITS and DRAWBACKS determines the BEST solution and reduces LESS EFFECTIVE options.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why Step 6 (Evaluate) is important in problem solving?",
      options: [
        "It's optional",
        "It determines whether the solution was EFFECTIVE and aids in IMPROVEMENT",
        "It confuses",
        "It wastes time",
      ],
      answer: "1",
      explanation:
        "Evaluating determines whether the solution was EFFECTIVE and aids in IMPROVEMENT or RESOLUTION.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why identifying MULTIPLE SOLUTIONS is important?",
      options: [
        "Because there's only one solution",
        "Because different strategies work for different problems — no single strategy solves ALL",
        "Because it's faster",
        "Because it's required",
      ],
      answer: "1",
      explanation:
        "Because different strategies work for DIFFERENT problems — NO SINGLE strategy solves ALL.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why students have a NATURAL proclivity to develop critical thinking?",
      options: [
        "Because everyone is born with it",
        "Because they encounter opportunities — but the school community often FORCES predictability",
        "Because it's easy",
        "Because it's optional",
      ],
      answer: "1",
      explanation:
        "Students have a NATURAL proclivity when OPPORTUNITIES present themselves — but schools often FORCE PREDICTABILITY.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why 'creating mental images' helps problem solvers?",
      options: [
        "Because it's fun",
        "Because it enables them to MAP OUT and CLEARLY SEE MANY DIMENSIONS of a problem",
        "Because it's required",
        "Because it's fast",
      ],
      answer: "1",
      explanation:
        "CREATING MENTAL IMAGES enables problem solvers to MAP OUT and CLEARLY SEE MANY DIMENSIONS of a problem.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why LOOKING FOR PATTERNS helps problem solving?",
      options: [
        "Because patterns are irrelevant",
        "Because many problems are SIMILAR and follow PREDICTABLE PATTERNS",
        "Because patterns are confusing",
        "Because patterns are rare",
      ],
      answer: "1",
      explanation:
        "Many problems are SIMILAR and follow PREDICTABLE PATTERNS — looking for patterns helps solving.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why critical thinkers CONSIDER UNUSUAL VIEWPOINTS?",
      options: [
        "Because they want attention",
        "Because they look for NEW SOLUTIONS to OLD problems",
        "Because they are contrarians",
        "Because they're rebels",
      ],
      answer: "1",
      explanation:
        "Critical thinkers look for NEW SOLUTIONS to OLD problems — considering unusual viewpoints.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why 'avoiding the trap of too much information' is important?",
      options: [
        "Because information is useless",
        "Because looking at the BIG PICTURE as well as details prevents becoming trapped in decision-making",
        "Because less is always better",
        "Because information causes confusion always",
      ],
      answer: "1",
      explanation:
        "Looking at the BIG PICTURE AND details prevents becoming TRAPPED in the decision-making process.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why COMPREHENDING AND EXPRESSING is a key skill?",
      options: [
        "Because it's easy",
        "Because understanding and expressing significance of experiences, events, judgments, and beliefs is essential for critical thinking",
        "Because it's optional",
        "Because it's only for reading",
      ],
      answer: "1",
      explanation:
        "COMPREHENDING AND EXPRESSING = understanding and expressing significance of experiences, situations, events, judgments, and beliefs.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why ASSESSING CREDIBILITY is important?",
      options: [
        "Because everyone lies",
        "Because judging VERACITY of statements is essential for critical thinking",
        "Because it's fun",
        "Because it's easy",
      ],
      answer: "1",
      explanation:
        "ASSESSING CREDIBILITY = judging VERACITY of statements — essential for critical thinking.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why SELF-REGULATION is important?",
      options: [
        "Because it's easy",
        "Because it involves consciously monitoring and correcting one's OWN reasoning and results",
        "Because it's optional",
        "Because others do it for you",
      ],
      answer: "1",
      explanation:
        "SELF-REGULATION = MONITORING and CORRECTING one's OWN reasoning and results.",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains the relationship between evidence and judgments for critical thinkers?",
      options: [
        "Judgments are based on personal preferences",
        "Judgments are based on EVIDENCE rather than personal preferences",
        "Judgments are made without evidence",
        "Judgments are always emotional",
      ],
      answer: "1",
      explanation:
        "Critical thinkers base JUDGMENTS on EVIDENCE — NOT personal preferences.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why critical thinkers SEEK and OFFER clear reasons?",
      options: [
        "Because it's required by law",
        "Because clear reasons help clarify relationships between statements and conclusions",
        "Because it's polite",
        "Because it's easy",
      ],
      answer: "1",
      explanation:
        "SEEKING and OFFERING CLEAR REASONS helps CLARIFY relationships between statements and CONCLUSIONS.",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how critical thinking supports LEARNING?",
      options: [
        "By memorizing everything",
        "By enabling analysis, synthesis, and evaluation of the value of materials",
        "By ignoring materials",
        "By copying",
      ],
      answer: "1",
      explanation:
        "Critical thinking enables ANALYSIS, SYNTHESIS, and EVALUATION of materials.",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why PROBLEM SOLVING is considered a way of THINKING within REASON?",
      options: [
        "Because it uses emotion",
        "Because it applies PRIOR knowledge, SKILLS, and UNDERSTANDING to solve NEW problems based on EVIDENCE",
        "Because it ignores facts",
        "Because it is intuitive",
      ],
      answer: "1",
      explanation:
        "PROBLEM-SOLVING applies PRIOR knowledge, SKILLS, and UNDERSTANDING to solve NEW problems BASED on EVIDENCE.",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why analyzing arguments is part of critical thinking?",
      options: [
        "Because arguments are fun",
        "Because critical thinking involves evaluating complex arguments and identifying logical strengths and weaknesses",
        "Because it's easy",
        "Because it's required",
      ],
      answer: "1",
      explanation:
        "Critical thinking involves EVALUATING complex arguments and identifying LOGICAL STRENGTHS and WEAKNESSES.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why SUSPENDING judgment is a good habit?",
      options: [
        "Because it delays forever",
        "Because sufficient EVIDENCE should support judgments — lack of evidence means waiting",
        "Because it's lazy",
        "Because it's indecisive",
      ],
      answer: "1",
      explanation:
        "SUSPENDING JUDGMENT when there's NO SUFFICIENT EVIDENCE — good habit for critical thinkers.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why CURIOSITY is important for critical thinking?",
      options: [
        "Because curiosity is optional",
        "Because critical thinkers KEEP CURIOSITY ALIVE, STRIVE for understanding, and are READY to INVEST TIME to overcome confusion",
        "Because curiosity is bad",
        "Because curiosity is rare",
      ],
      answer: "1",
      explanation:
        "Critical thinkers KEEP CURIOSITY ALIVE, STRIVE for UNDERSTANDING, and are READY to INVEST TIME to overcome confusion.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why USING EVIDENCE IMPARTIALLY is important?",
      options: [
        "Because evidence is optional",
        "Because using evidence FAIRLY without BIAS ensures sound reasoning and just conclusions",
        "Because evidence is rare",
        "Because evidence is confusing",
      ],
      answer: "1",
      explanation:
        "Using evidence IMPARTIALLY ensures SOUND reasoning and JUST conclusions.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why critical thinkers try to be WELL-INFORMED and OPEN-MINDED?",
      options: [
        "Because it's polite",
        "Because being well-informed and open-minded enables better analysis and understanding of diverse perspectives",
        "Because it's required",
        "Because it's easy",
      ],
      answer: "1",
      explanation:
        "Being WELL-INFORMED and OPEN-MINDED enables BETTER ANALYSIS and UNDERSTANDING of DIVERSE perspectives.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the relationship between critical thinking and ARGUMENTS?",
      options: [
        "They are unrelated",
        "Critical thinking ENABLES analyzing, creating, and defending STRONG ARGUMENTS",
        "Arguments replace critical thinking",
        "Critical thinking avoids arguments",
      ],
      answer: "1",
      explanation:
        "Critical thinking ENABLES analyzing, creating, and defending STRONG ARGUMENTS.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how critical thinking helps with ACADEMIC WORK?",
      options: [
        "By memorizing everything",
        "By developing reasoned arguments for assignments, projects, and exams",
        "By copying others",
        "By avoiding work",
      ],
      answer: "1",
      explanation:
        "Critical thinking helps DEVELOP reasoned arguments for ASSIGNMENTS, PROJECTS, and EXAMS.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how critical thinking supports RESEARCH?",
      options: [
        "By accepting all claims",
        "By assessing evidence, evaluating sources, and synthesizing diverse viewpoints",
        "By ignoring evidence",
        "By copying",
      ],
      answer: "1",
      explanation:
        "Critical thinking supports research by ASSESSING EVIDENCE, EVALUATING SOURCES, and SYNTHESIZING DIVERSE viewpoints.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how critical thinking helps with the INFORMATION AGE?",
      options: [
        "By accepting all information",
        "By distinguishing fake from real, evaluating sources, and not being swayed by false beliefs",
        "By ignoring information",
        "By avoiding the internet",
      ],
      answer: "1",
      explanation:
        "Critical thinking helps DISTINGUISH FAKE from REAL, EVALUATE sources, and NOT be swayed by false beliefs.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the relationship between critical thinking and LIFE-LONG LEARNING?",
      options: [
        "They are unrelated",
        "Critical thinking supports life-long learning — a natural curiosity and desire to understand",
        "Life-long learning replaces critical thinking",
        "Critical thinking ends after school",
      ],
      answer: "1",
      explanation:
        "Critical thinking supports LIFE-LONG LEARNING through NATURAL CURIOSITY and DESIRE to UNDERSTAND.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why critical thinking is ESSENTIAL for CITIZENSHIP in a democracy?",
      options: [
        "Because citizens must accept everything the government says",
        "Because citizens must evaluate policies, hold leaders accountable, and make informed decisions",
        "Because it's not important",
        "Because citizens must be silent",
      ],
      answer: "1",
      explanation:
        "CRITICAL THINKING is ESSENTIAL for CITIZENSHIP because citizens must EVALUATE policies, HOLD leaders ACCOUNTABLE, and make INFORMED DECISIONS.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why the SIX skills of critical thinking form a coherent set?",
      options: [
        "They are unrelated",
        "They form a coherent set — understanding and expressing (input), identifying and assessing (processing), drawing conclusions and explaining (output), and self-regulation (monitoring)",
        "They overlap randomly",
        "Only one matters",
      ],
      answer: "1",
      explanation:
        "The six skills form a COHERENT SET — INPUT, PROCESSING, OUTPUT, and MONITORING.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why problem solving and critical thinking are INTERDEPENDENT?",
      options: [
        "They are unrelated",
        "Problem solving requires critical thinking to evaluate alternatives, weigh evidence, and make sound decisions",
        "Critical thinking replaces problem solving",
        "Problem solving ignores critical thinking",
      ],
      answer: "1",
      explanation:
        "PROBLEM SOLVING and CRITICAL THINKING are INTERDEPENDENT — critical thinking is needed to evaluate alternatives, weigh evidence, and make sound decisions.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why critical thinking skills are transferable ACROSS domains?",
      options: [
        "Because they are specific to one subject",
        "Because analyzing, evaluating, and reasoning are APPLICABLE to all subjects and life situations",
        "Because they only apply in science",
        "Because they only apply in math",
      ],
      answer: "1",
      explanation:
        "Critical thinking skills are TRANSFERABLE — analyzing, evaluating, and reasoning apply to ALL SUBJECTS and LIFE situations.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why INDEPENDENT THINKING is crucial in a democracy?",
      options: [
        "Because everyone should agree with the government",
        "Because citizens must think for themselves — not be swayed by propaganda or false beliefs",
        "Because it's required by law",
        "Because it's optional",
      ],
      answer: "1",
      explanation:
        "INDEPENDENT THINKING is crucial because citizens must think for THEMSELVES — NOT be SWAYED by PROPAGANDA or FALSE BELIEFS.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why critical thinking is a DEFENSE against MANIPULATION?",
      options: [
        "Because manipulators are honest",
        "Because critical thinkers evaluate evidence, demand reasons, and are not swayed by emotions or false claims",
        "Because critical thinkers are immune to everything",
        "Because manipulation doesn't exist",
      ],
      answer: "1",
      explanation:
        "Critical thinkers EVALUATE EVIDENCE, DEMAND REASONS, and are NOT SWAYED by EMOTIONS or FALSE CLAIMS.",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "Define critical thinking and explain why it is important.",
      answer:
        "CRITICAL THINKING = logical reasoning and questioning to check the VALIDITY of statements; a critical evaluation of arguments; the ability to ANALYZE information objectively and make a REASONED judgment.\n\n" +
        "IMPORTANCE:\n" +
        "1) Helps discover and overcome personal preconceptions and biases.\n" +
        "2) Helps formulate and present convincing reasons in support of conclusions.\n" +
        "3) Enables reasonable, intelligent decisions about what to believe and do.\n" +
        "4) Helps become independent, self-directed thinkers and learners.\n" +
        "5) Helps defend arguments against bias, lack of evidence, or incompleteness.\n" +
        "6) Enables assessment of evidence and identification of fake or illogical reasoning.\n" +
        "7) Helps create strong arguments.\n" +
        "8) Enables analysis, evaluation, comparison, and contrast of materials.\n" +
        "9) Allows synthesizing own thoughts with others'.",
      explanation:
        "Banchi, memorize the importance of critical thinking.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "Describe the SKILLS and HABITS of critical thinking with examples.",
      answer:
        "SIX SKILLS OF CRITICAL THINKING:\n" +
        "1) COMPREHENDING AND EXPRESSING — understanding and expressing significance of experiences, situations, events, judgments, beliefs.\n" +
        "2) IDENTIFYING RELATIONSHIPS — recognizing intended and actual inferential relationships between statements.\n" +
        "3) ASSESSING CREDIBILITY — judging veracity of statements or representations.\n" +
        "4) DRAWING REASONABLE CONCLUSIONS — identifying and securing elements required to reach reasonable conclusions.\n" +
        "5) EXPLANATION — stating outcomes of reasoning; justifying with evidential, conceptual, methodological, and contextual considerations.\n" +
        "6) SELF-REGULATION — consciously monitoring cognitive activities and results.\n\n" +
        "HABITS OF CRITICAL THINKERS:\n" +
        "• Uses evidence skillfully and impartially.\n" +
        "• Organizes thoughts and articulates them concisely.\n" +
        "• Suspends judgment in absence of sufficient evidence.\n" +
        "• Acknowledges what they don't know; regards problems as exciting challenges.\n" +
        "• Strives for understanding; keeps curiosity alive.\n" +
        "• Judges based on evidence, not preference.\n" +
        "• Habitually questions own views.\n" +
        "• Recognizes imperfection and bias in own opinions.\n" +
        "• Seeks and offers clear reasons.\n" +
        "• Tries to be well-informed and open-minded.\n" +
        "• Seeks the truth when it makes sense.",
      explanation:
        "Banchi, memorize at least SIX skills and FIVE habits.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "Describe the TEN strategies for improving critical thinking in students.",
      answer:
        "TEN strategies:\n" +
        "1) TRIAL-AND-ERROR METHODS — repeated attempts at problem-solving.\n" +
        "2) BEING A LIFELONG LEARNER — naturally curious; reading, conversing, attending conferences.\n" +
        "3) UNDERSTANDING THE BARRIERS — encourage students to express obstacles.\n" +
        "4) CREATING MENTAL IMAGES — map out and see many dimensions of a problem.\n" +
        "5) SEEKING A PATTERN — looking for regular, systematic repetition (numerical, visual, behavioral).\n" +
        "6) MANIPULATIVE — moving objects to develop patterns.\n" +
        "7) CONSIDERING UNUSUAL VIEWPOINTS — new solutions to old problems.\n" +
        "8) AVOIDING THE TRAP OF TOO MUCH INFORMATION — big picture + details.\n" +
        "9) IDENTIFYING MULTIPLE SOLUTIONS — no single solution; many strategies.\n" +
        "10) MONITORING A SOLUTION — careful assessment of steps and progress.",
      explanation:
        "Banchi, memorize at least SEVEN strategies.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Analyze how critical thinking enables people to overcome personal biases and make SOUND decisions.",
      answer:
        "CRITICAL THINKING ENABLES PEOPLE TO OVERCOME PERSONAL BIASES AND MAKE SOUND DECISIONS IN THE FOLLOWING WAYS:\n\n" +
        "1) DISCOVERING BIASES:\n" +
        "• Critical thinkers habitually question their OWN views and assumptions.\n" +
        "• They recognize the IMPERFECTION of their OWN opinions and the probability of BIAS in those opinions.\n" +
        "• They recognize the DANGER of weighting evidence according to PERSONAL PREFERENCES.\n\n" +
        "2) USING EVIDENCE:\n" +
        "• They use evidence SKILLFULLY and IMPARTIALLY.\n" +
        "• They suspend judgment in the absence of SUFFICIENT EVIDENCE.\n" +
        "• Judgments are based on EVIDENCE, not personal preferences.\n\n" +
        "3) DEMANDING REASONS:\n" +
        "• They seek and offer CLEAR REASONS.\n" +
        "• They are clear about relationships between statements and conclusions.\n" +
        "• They try to be well-informed and open-minded.\n\n" +
        "4) MAKING SOUND DECISIONS:\n" +
        "• REASON takes precedence over EMOTION.\n" +
        "• False beliefs and MYTHS cannot rule them because they LACK OBJECTIVE EVIDENCE.\n" +
        "• Critical thinkers change positions ONLY when there is COMPELLING EVIDENCE.\n" +
        "• They make REASONABLE, INTELLIGENT decisions about what to believe and what to do.\n\n" +
        "5) DISTINGUISHING HUMANS:\n" +
        "• Critical thinking distinguishes humans from other animals — the ability to ANALYZE, SYNTHESIZE, and WEIGH benefits and drawbacks of claims.\n" +
        "• This ability should NOT be relegated to simply absorbing what is told to us.\n\n" +
        "CONCLUSION:\n" +
        "Every decision must be supported by critical thinking because critical thinking enables humans to fully develop — leading to sound decisions that benefit the individual and society.",
      explanation:
        "Banchi, memorize the key elements of critical thinking and how it overcomes bias.",
    },
  ],
};