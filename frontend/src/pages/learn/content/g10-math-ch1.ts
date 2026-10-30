import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 MATHEMATICS — UNIT 1
// RELATIONS AND FUNCTIONS
// For: Abatu (Abenezer) — Grade 10
// Target: 100% understanding + solving any problem
// Style: mastery-lab (clear definitions, step-by-step methods,
// vertical line test, domain-range tricks, exam traps)
// ============================================================

export const g10MathCh1: Chapter = {
  id: "ch1",
  number: 1,
  title: "Relations and Functions",
  titleAm: "ግንኙነቶች እና ተግባራት",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS UNIT (Abatu's Route to 100%)
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Unit (Abatu's 100% Route)",
      titleAm: "0. ይህን ክፍል እንዴት 100% መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this is the foundation of all Grade 10 Math. If you master Relations and Functions perfectly, Units 2–7 become much easier.\n\n" +
        "Four big ideas you must own:\n" +
        "1. What is a Relation? (any set of ordered pairs)\n" +
        "2. What is a Function? (special relation – each x has only one y)\n" +
        "3. Domain and Range (what can go in, what comes out)\n" +
        "4. How to combine functions and test with Vertical Line Test\n\n" +
        "Master these and you will solve every exam question in this unit.",
      bodyAm:
        "አባቱ፣ ይህ የሁሉም የ10ኛ ክፍል ሂሳብ መሠረት ነው። ግንኙነትና ተግባር በደንብ ከተቆጣጠርክ ቀሪዎቹ ክፍሎች ቀላል ይሆናሉ።",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Must-know definitions (memorise exactly)",
          titleAm: "ደረጃ 1 · መሠረታዊ ትርጉሞች",
          body:
            "• Relation = any set of ordered pairs (x, y)\n" +
            "• Function = a relation in which no two different ordered pairs have the same first element (same x)\n" +
            "• Domain = set of all possible x-values (inputs)\n" +
            "• Range = set of all possible y-values (outputs)\n" +
            "• Vertical Line Test = if any vertical line crosses the graph more than once → NOT a function",
          bodyAm:
            "ግንኙነት = የትኛውም ordered pairs ስብስብ። ተግባር = እያንዳንዱ x አንድ ብቻ y አለው።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Domain & Range quick rules",
          titleAm: "ደረጃ 2 · Domain እና Range ፈጣን ህጎች",
          body:
            "• For √(expression) → expression ≥ 0\n" +
            "• For 1 / expression → expression ≠ 0\n" +
            "• For even roots → inside ≥ 0\n" +
            "• Linear functions (mx + c) → domain and range = all real numbers\n" +
            "• Always write domain and range in set notation or interval notation",
          bodyAm:
            "√ → ≥ 0። ክፍልፋይ → denominator ≠ 0።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Combination of functions",
          titleAm: "ደረጃ 3 · የተግባሮች ጥምረት",
          body:
            "(f + g)(x) = f(x) + g(x)\n" +
            "(f – g)(x) = f(x) – g(x)\n" +
            "(f · g)(x) = f(x) · g(x)\n" +
            "(f / g)(x) = f(x) / g(x)   (g(x) ≠ 0)\n\n" +
            "Domain of combination = common domain of f and g (and g ≠ 0 for division).",
          bodyAm:
            "ድምር፣ ልዩነት፣ ውጤት፣ ክፍልፋይ። ለክፍልፋይ g(x) ≠ 0 መሆን አለበት።",
        },
        {
          id: "n0-4",
          title: "⚠ Exam traps Abatu must never fall into",
          titleAm: "⚠ የፈተና ወጥመዶች",
          body:
            "1. A relation can have the same y for different x (still a function).\n" +
            "2. Same x with different y → NOT a function.\n" +
            "3. Vertical line test is the fastest way to check a graph.\n" +
            "4. Domain of √(x – 2) is x ≥ 2 (not x > 2).\n" +
            "5. When combining, always find the intersection of domains first.",
          bodyAm:
            "ተመሳሳይ x የተለያየ y ካለው → ተግባር አይደለም። Vertical line test ተጠቀም።",
        },
      ],
    },

    // ============================================================
    // 1.1 RELATIONS
    // ============================================================
    {
      id: "n1",
      title: "1.1 Relations",
      titleAm: "1.1 ግንኙነቶች",
      body:
        "A relation is simply a set of ordered pairs. Any pairing of numbers or objects can form a relation.",
      bodyAm:
        "ግንኙነት ማለት የትኛውም የተደራረቡ ጥንዶች (ordered pairs) ስብስብ ነው።",
      children: [
        {
          id: "n1-1",
          title: "Definition of Relation",
          titleAm: "የግንኙነት ትርጉም",
          body:
            "Definition: A relation R is a set of ordered pairs (x, y).\n\n" +
            "Example:\n" +
            "R = {(1, 2), (3, 4), (5, 6), (1, 8)}\n" +
            "This is a relation (it has ordered pairs). Notice that x = 1 appears twice with different y-values. That is allowed for a relation, but it will NOT be a function.",
          bodyAm:
            "ግንኙነት = የተደራረቡ ጥንዶች ስብስብ።",
        },
        {
          id: "n1-2",
          title: "Domain and Range of a Relation",
          titleAm: "Domain እና Range",
          body:
            "• Domain = the set of all first components (all x-values)\n" +
            "• Range = the set of all second components (all y-values)\n\n" +
            "Example:\n" +
            "R = {(–2, 1), (–1, 0), (0, 0), (4, 2), (3, 5)}\n" +
            "Domain = {–2, –1, 0, 4, 3}\n" +
            "Range = {1, 0, 2, 5}",
          bodyAm:
            "Domain = ሁሉም x። Range = ሁሉም y።",
        },
        {
          id: "n1-3",
          title: "Graphs of Relations (including inequalities)",
          titleAm: "የግንኙነት ግራፍ",
          body:
            "To graph a relation that is an inequality:\n" +
            "1. Draw the boundary line (solid if ≤ or ≥, broken if < or >).\n" +
            "2. Test a point (usually (0,0) if not on the line).\n" +
            "3. Shade the side that satisfies the inequality.\n\n" +
            "Example: y > x\n" +
            "• Draw the line y = x with a broken line.\n" +
            "• Test (0, 3): 3 > 0 → true → shade above the line.",
          bodyAm:
            "≤ ወይም ≥ → ጠንካራ መስመር። < ወይም > → የተሰበረ መስመር።",
        },
      ],
    },

    // ============================================================
    // 1.2 FUNCTIONS
    // ============================================================
    {
      id: "n2",
      title: "1.2 Functions",
      titleAm: "1.2 ተግባራት",
      body:
        "A function is a special relation. Every x is paired with exactly one y.",
      bodyAm:
        "ተግባር = ልዩ ግንኙነት። እያንዳንዱ x አንድ ብቻ y አለው።",
      children: [
        {
          id: "n2-1",
          title: "Definition of Function (most important!)",
          titleAm: "የተግባር ትርጉም",
          body:
            "A function f is a relation in which no two different ordered pairs have the same first element.\n\n" +
            "In simple words: each x has only one y.\n\n" +
            "Vertical Line Test (fastest method):\n" +
            "If any vertical line intersects the graph more than once → the graph is NOT a function.",
          bodyAm:
            "እያንዳንዱ x አንድ ብቻ y ካለው → ተግባር ነው። Vertical line test ተጠቀም።",
        },
        {
          id: "n2-2",
          title: "Domain, Codomain and Range of a Function",
          titleAm: "Domain, Codomain እና Range",
          body:
            "• Domain = all possible input values (x)\n" +
            "• Range = all actual output values (y) that the function produces\n" +
            "• Codomain = the set we say the outputs live in (range is a subset of codomain)\n\n" +
            "Notation: f(x) means “the value of the function at x”.\n" +
            "Example: if f(x) = 2x + 3, then f(4) = 2(4) + 3 = 11.",
          bodyAm:
            "f(x) ማለት ተግባሩ በ x ላይ ያለው እሴት ነው።",
        },
        {
          id: "n2-3",
          title: "Finding Domain – Common Cases",
          titleAm: "Domain ማግኘት",
          body:
            "1. Polynomial / linear → domain = all real numbers ℝ\n" +
            "2. √g(x) → g(x) ≥ 0\n" +
            "3. 1 / g(x) → g(x) ≠ 0\n" +
            "4. √g(x) in denominator → g(x) > 0\n\n" +
            "Example: f(x) = √(x – 2)\n" +
            "x – 2 ≥ 0 → x ≥ 2\n" +
            "Domain = [2, ∞)",
          bodyAm:
            "√ → ≥ 0። ክፍልፋይ → ≠ 0።",
        },
        {
          id: "n2-4",
          title: "Combination of Functions",
          titleAm: "የተግባሮች ጥምረት",
          body:
            "(f + g)(x) = f(x) + g(x)\n" +
            "(f – g)(x) = f(x) – g(x)\n" +
            "(f · g)(x) = f(x) · g(x)\n" +
            "(f / g)(x) = f(x) / g(x) , provided g(x) ≠ 0\n\n" +
            "Domain of any combination = intersection of the two domains (and exclude points where denominator is zero).",
          bodyAm:
            "ድምር፣ ልዩነት፣ ውጤት፣ ክፍልፋይ። Domain = የሁለቱም የጋራ ክፍል።",
        },
        {
          id: "n2-5",
          title: "Types of Functions (One-to-one, Onto, Bijective)",
          titleAm: "የተግባር ዓይነቶች",
          body:
            "• One-to-one (Injective): different x give different y\n" +
            "  Test: if f(a) = f(b) then a = b\n" +
            "• Onto (Surjective): every element in the codomain is hit\n" +
            "• Bijective: both one-to-one and onto (one-to-one correspondence)",
          bodyAm:
            "One-to-one = የተለያየ x የተለያየ y። Onto = ሁሉም y ተደርሷል።",
        },
      ],
    },

    // ============================================================
    // UNIT SUMMARY + EXAM TRAPS
    // ============================================================
    {
      id: "nSummary",
      title: "Unit Summary — Abatu’s 100% Checklist",
      titleAm: "የክፍሉ ማጠቃለያ",
      body:
        "1. Relation = any set of ordered pairs.\n" +
        "2. Function = each x has exactly one y (Vertical Line Test).\n" +
        "3. Domain = possible x; Range = possible y.\n" +
        "4. Always check restrictions (√, denominator).\n" +
        "5. Combinations: +, –, ×, ÷ with common domain.\n" +
        "6. One-to-one, Onto, Bijective for classification questions.",
      bodyAm:
        "ግንኙነት → ተግባር → Domain/Range → ጥምረት → ዓይነቶች።",
    },
    {
      id: "nTraps",
      title: "Common Exam Traps — Never Lose Marks Here",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1. Same y for different x is still a function.\n" +
        "2. Same x for different y is NOT a function.\n" +
        "3. Domain of √(x–a) is x ≥ a (include equality).\n" +
        "4. For division, exclude where denominator = 0.\n" +
        "5. Vertical line test is the fastest graph check.\n" +
        "6. When asked for (f + g)(x), first write the expression, then evaluate if a number is given.",
      bodyAm:
        "ተመሳሳይ x የተለያየ y → ተግባር አይደለም። √ የእኩልነትን አካትት።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120 (Easy → Medium → Hard + Short)
  // ============================================================
  questions: [
    // ==================== EASY (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "A relation is defined as:", options: ["A set of ordered pairs", "Only a function", "A single number", "A graph only"], answer: "0", explanation: "By definition a relation is any set of ordered pairs." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Which of the following is a function?", options: ["{(1,2), (1,3), (2,4)}", "{(1,2), (2,3), (3,4)}", "{(1,2), (2,2), (1,5)}", "{(3,1), (3,2), (4,1)}"], answer: "1", explanation: "No repeated first elements." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "The Vertical Line Test is used to check if a graph represents a:", options: ["Relation only", "Function", "Domain", "Range"], answer: "1", explanation: "If a vertical line crosses more than once, it is not a function." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Domain of a relation is the set of all:", options: ["y-values", "x-values", "Both x and y", "Ordered pairs"], answer: "1", explanation: "Domain = all first components (x-values)." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Range of a relation is the set of all:", options: ["x-values", "y-values", "Both", "Inputs only"], answer: "1", explanation: "Range = all second components (y-values)." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "If f(x) = 2x + 5, then f(3) =", options: ["11", "6", "16", "1"], answer: "0", explanation: "2(3) + 5 = 11." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Which relation is NOT a function?", options: ["{(1,1), (2,2), (3,3)}", "{(1,4), (2,4), (3,4)}", "{(1,2), (1,3), (2,4)}", "{(0,0), (1,1), (2,4)}"], answer: "2", explanation: "x = 1 has two different y-values." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The domain of f(x) = √x is:", options: ["All real numbers", "x ≥ 0", "x > 0", "x ≤ 0"], answer: "1", explanation: "Square root is defined for non-negative numbers." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "(f + g)(x) means:", options: ["f(x) × g(x)", "f(x) + g(x)", "f(x) – g(x)", "f(x) / g(x)"], answer: "1", explanation: "Sum of the two functions." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "For (f / g)(x) to be defined, we need:", options: ["f(x) ≠ 0", "g(x) ≠ 0", "Both zero", "x ≠ 0"], answer: "1", explanation: "Denominator cannot be zero." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "A function that is both one-to-one and onto is called:", options: ["Injective only", "Surjective only", "Bijective", "Constant"], answer: "2", explanation: "Bijective = one-to-one correspondence." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "If a vertical line intersects a graph at two points, the graph is:", options: ["A function", "Not a function", "One-to-one", "Onto"], answer: "1", explanation: "Vertical Line Test fails." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Domain of f(x) = 1/(x – 3) is:", options: ["All real numbers", "x ≠ 3", "x > 3", "x < 3"], answer: "1", explanation: "Denominator cannot be zero." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "f(x) = 5 is a:", options: ["Linear function", "Constant function", "Quadratic", "None"], answer: "1", explanation: "Output is always 5." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Which ordered pair belongs to the relation y > x?", options: ["(2, 1)", "(3, 3)", "(1, 4)", "(5, 2)"], answer: "2", explanation: "4 > 1 is true." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "The set of all possible outputs of a function is called:", options: ["Domain", "Range", "Codomain only", "Relation"], answer: "1", explanation: "Range = actual outputs." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "If f(x) = x², then f(–3) =", options: ["–9", "9", "6", "–6"], answer: "1", explanation: "(–3)² = 9." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "A relation can have the same y-value for different x-values and still be a function. True or False?", options: ["True", "False"], answer: "0", explanation: "True – many-to-one is allowed." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "Domain of f(x) = √(x + 4) is:", options: ["x ≥ –4", "x > –4", "x ≤ –4", "All reals"], answer: "0", explanation: "x + 4 ≥ 0 → x ≥ –4." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "(f · g)(x) means:", options: ["f(x) + g(x)", "f(x) × g(x)", "f(x) – g(x)", "f(g(x))"], answer: "1", explanation: "Product of the functions." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Which is the correct definition of a function?", options: ["Every y has one x", "Every x has exactly one y", "x and y are always equal", "Only positive numbers"], answer: "1", explanation: "Each input has exactly one output." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "The graph of y = x is a:", options: ["Relation only", "Function", "Not a relation", "Circle"], answer: "1", explanation: "It passes the vertical line test." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "If R = {(1,2), (3,4), (5,6)}, domain is:", options: ["{2,4,6}", "{1,3,5}", "{1,2,3,4,5,6}", "{ }"], answer: "1", explanation: "First components." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "Range of R = {(1,2), (3,4), (5,6)} is:", options: ["{1,3,5}", "{2,4,6}", "{1,2,3}", "All reals"], answer: "1", explanation: "Second components." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "f(x) = 3x – 1, f(0) =", options: ["3", "–1", "0", "1"], answer: "1", explanation: "3(0) – 1 = –1." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "Which of the following fails the vertical line test?", options: ["A straight non-vertical line", "A circle", "y = x²", "y = |x|"], answer: "1", explanation: "A circle is crossed twice by many vertical lines." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Domain of a linear function mx + c is:", options: ["Positive reals", "All real numbers", "Integers only", "x ≠ 0"], answer: "1", explanation: "Defined for every real x." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "One-to-one function means:", options: ["Same x different y", "Different x different y", "All y the same", "No domain"], answer: "1", explanation: "Injective: different inputs give different outputs." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "If f(x) = 2x and g(x) = x + 1, then (f + g)(x) =", options: ["2x + 1", "2x + x + 1", "3x + 1", "2(x + 1)"], answer: "2", explanation: "2x + (x + 1) = 3x + 1." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "The notation f: A → B means:", options: ["f is from A to B", "A is range", "B is domain", "f is not a function"], answer: "0", explanation: "Domain A, codomain B." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "Which is true for a function?", options: ["One x can have two y", "One y can have two x", "No ordered pairs", "Only one ordered pair"], answer: "1", explanation: "Many-to-one is allowed; one-to-many is not." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "Domain of f(x) = 1/√(x – 1) is:", options: ["x ≥ 1", "x > 1", "x ≤ 1", "All reals"], answer: "1", explanation: "Inside square root > 0 (cannot be zero because of denominator)." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "If f(x) = x² – 4, f(2) =", options: ["0", "4", "–4", "8"], answer: "0", explanation: "4 – 4 = 0." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "A constant function has:", options: ["Changing outputs", "Same output for every input", "No domain", "Only one input"], answer: "1", explanation: "f(x) = c for all x." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "The first component of an ordered pair is called:", options: ["Range", "Abscissa (x)", "Ordinate (y)", "Function"], answer: "1", explanation: "x is the abscissa." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "Which relation is a function?", options: ["y² = x", "x² + y² = 1", "y = x³", "x = y²"], answer: "2", explanation: "y = x³ passes the vertical line test." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "(f – g)(x) =", options: ["f(x) + g(x)", "f(x) – g(x)", "f(x) × g(x)", "g(x) – f(x)"], answer: "1", explanation: "Difference." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "If two ordered pairs have the same first element but different second elements, the relation is:", options: ["A function", "Not a function", "One-to-one", "Onto"], answer: "1", explanation: "Violates the definition of function." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "Domain of f(x) = |x| is:", options: ["x ≥ 0", "All real numbers", "x > 0", "Integers"], answer: "1", explanation: "Absolute value is defined for all reals." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "The set of all possible inputs is called:", options: ["Range", "Domain", "Codomain", "Image"], answer: "1", explanation: "Domain = inputs." },

    // ==================== MEDIUM (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Which of the following is a function?", options: ["{(2,3), (2,5), (3,7)}", "{(1,4), (2,4), (3,4), (4,4)}", "{(5,1), (5,2), (6,3)}", "{(0,0), (0,1), (1,2)}"], answer: "1", explanation: "No repeated x-values with different y." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Domain of f(x) = √(4 – x²) is:", options: ["[–2, 2]", "(–2, 2)", "All reals", "x ≥ 2"], answer: "0", explanation: "4 – x² ≥ 0 → x² ≤ 4 → –2 ≤ x ≤ 2." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "If f(x) = 2x + 1 and g(x) = x – 3, then (f · g)(2) =", options: ["–5", "5", "–1", "1"], answer: "0", explanation: "f(2)=5, g(2)=–1, product = –5." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "Which graph represents a function?", options: ["A circle centred at origin", "A vertical line", "y = x² + 1", "x = y²"], answer: "2", explanation: "Parabola opening up passes vertical line test." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "Domain of (f/g)(x) where f(x)=x+1, g(x)=x–2 is:", options: ["All reals", "x ≠ 2", "x ≠ –1", "x > 2"], answer: "1", explanation: "g(x) ≠ 0 → x ≠ 2." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "If f(x) = √(x – 3), the domain is:", options: ["x ≥ 3", "x > 3", "x ≤ 3", "All reals"], answer: "0", explanation: "x – 3 ≥ 0." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "f is one-to-one if:", options: ["f(a) = f(b) implies a = b", "f(a) = f(b) implies a ≠ b", "Every y is hit", "Domain is empty"], answer: "0", explanation: "Definition of injective." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "If f(x) = 3x – 2 and g(x) = x + 4, (f – g)(x) =", options: ["2x – 6", "4x + 2", "2x + 2", "3x + 4"], answer: "0", explanation: "(3x–2) – (x+4) = 2x – 6." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "The range of f(x) = x² for real x is:", options: ["All reals", "[0, ∞)", "(–∞, 0]", "Only positive"], answer: "1", explanation: "Squares are never negative." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Which is true?", options: ["Every relation is a function", "Every function is a relation", "Functions cannot have repeated y", "Domain is always positive"], answer: "1", explanation: "Function is a special type of relation." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "Domain of f(x) = 1/(x² – 9) is:", options: ["x ≠ ±3", "x ≠ 3", "x ≠ –3", "All reals"], answer: "0", explanation: "x² – 9 ≠ 0 → x ≠ 3 and x ≠ –3." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "If f(x) = 2x and g(x) = x², (f + g)(3) =", options: ["15", "9", "6", "12"], answer: "0", explanation: "f(3)=6, g(3)=9, sum=15." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "A function f: ℝ → ℝ, f(x) = 5 is:", options: ["One-to-one", "Onto", "Neither one-to-one nor onto", "Bijective"], answer: "2", explanation: "Constant function is neither injective nor surjective onto ℝ." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "Which ordered pairs make a function?", options: ["(1,2), (1,3), (2,4)", "(2,5), (3,5), (4,5)", "(7,1), (7,2)", "(0,0), (0,1)"], answer: "1", explanation: "No repeated x." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "Domain of √(2x – 6) is:", options: ["x ≥ 3", "x > 3", "x ≤ 3", "x ≥ 6"], answer: "0", explanation: "2x – 6 ≥ 0 → x ≥ 3." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "If f(x) = x – 1 and g(x) = 2x + 3, (f/g)(1) =", options: ["0", "1", "5", "Undefined"], answer: "0", explanation: "f(1)=0, g(1)=5, 0/5=0." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "The vertical line test fails for:", options: ["y = 2x + 1", "y = |x|", "x² + y² = 4", "y = x³"], answer: "2", explanation: "Circle fails the test." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Range of f(x) = √(x – 1) is:", options: ["[0, ∞)", "[1, ∞)", "All reals", "(0, ∞)"], answer: "0", explanation: "Square root outputs are ≥ 0." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "If f is one-to-one and f(2) = 5, then f(–2) cannot be:", options: ["5", "0", "10", "–5"], answer: "0", explanation: "Different inputs cannot give the same output." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "(f · g)(x) when f(x)=x+2, g(x)=x–2 is:", options: ["x² – 4", "x² + 4", "2x", "x²"], answer: "0", explanation: "(x+2)(x–2) = x² – 4." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "Domain of f(x) = √x / (x – 4) is:", options: ["x ≥ 0, x ≠ 4", "x > 0, x ≠ 4", "x ≥ 0", "All reals except 4"], answer: "0", explanation: "√x needs x ≥ 0 and denominator ≠ 0." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Which function is bijective from ℝ to ℝ?", options: ["f(x) = x²", "f(x) = |x|", "f(x) = 2x + 3", "f(x) = 5"], answer: "2", explanation: "Linear with non-zero slope is bijective." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "If f(x) = 3 – 2x, f(–1) =", options: ["5", "1", "–5", "3"], answer: "0", explanation: "3 – 2(–1) = 5." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "The relation y ≤ x + 1 is graphed by:", options: ["Broken line and shade above", "Solid line and shade below", "Broken line and shade below", "Solid line only"], answer: "1", explanation: "≤ uses solid line; test point shows below." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Domain of f(x) = √(9 – x²) is:", options: ["[–3, 3]", "(–3, 3)", "x ≥ 3", "All reals"], answer: "0", explanation: "9 – x² ≥ 0 → |x| ≤ 3." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "If f(x)=x² and g(x)=√x, domain of f + g is:", options: ["All reals", "[0, ∞)", "x > 0", "(–∞, 0]"], answer: "1", explanation: "Common domain is domain of √x." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "Which is NOT a function?", options: ["y = 3", "x = 5", "y = x", "y = |x|"], answer: "1", explanation: "x = 5 is a vertical line." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "If f(x) = 1 – x and g(x) = x + 1, (f/g)(x) is undefined at:", options: ["x = 1", "x = –1", "x = 0", "Never"], answer: "1", explanation: "g(x) = 0 when x = –1." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "Range of the constant function f(x) = 7 is:", options: ["{7}", "All reals", "[0, 7]", "Empty"], answer: "0", explanation: "Only output is 7." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "A function is onto if:", options: ["It is one-to-one", "Every element of codomain is an image", "Domain equals range", "It is constant"], answer: "1", explanation: "Surjective definition." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Domain of f(x) = √(x² – 4) is:", options: ["|x| ≥ 2", "|x| ≤ 2", "x ≥ 2 only", "All reals"], answer: "0", explanation: "x² – 4 ≥ 0 → x ≤ –2 or x ≥ 2." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "(f – g)(x) when f(x)=5x, g(x)=x–2 is:", options: ["4x + 2", "6x – 2", "4x – 2", "5x – x + 2"], answer: "0", explanation: "5x – (x – 2) = 4x + 2." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "Which pair shows a one-to-one function?", options: ["{(1,2), (2,2), (3,2)}", "{(1,5), (2,6), (3,7)}", "{(1,3), (2,3), (4,3)}", "{(0,0), (1,0)}"], answer: "1", explanation: "All y-values different." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "If f(x) = 2x + 3, the inverse idea (one-to-one) works because:", options: ["It is constant", "Different x give different y", "It is quadratic", "Domain is limited"], answer: "1", explanation: "Linear with slope ≠ 0 is one-to-one." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Domain of 1/√(x + 5) is:", options: ["x ≥ –5", "x > –5", "x ≤ –5", "All reals"], answer: "1", explanation: "Inside > 0." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "f(x) = x³ is:", options: ["One-to-one and onto ℝ", "One-to-one but not onto", "Onto but not one-to-one", "Neither"], answer: "0", explanation: "Cubic is bijective from ℝ to ℝ." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "If R = {(x, y) | y = 2x + 1}, this relation is:", options: ["Not a function", "A function", "Only a relation", "Empty"], answer: "1", explanation: "Each x has exactly one y." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "The point (0,0) is usually used as a test point because:", options: ["It is always on the line", "It is easy to calculate", "It is the only point", "It is never in the region"], answer: "1", explanation: "Simple arithmetic." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "Domain of f(x) = √(x – 2) / (x – 5) is:", options: ["x ≥ 2, x ≠ 5", "x > 2, x ≠ 5", "x ≥ 2", "x ≠ 5"], answer: "0", explanation: "Both conditions together." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "Which statement is correct?", options: ["All functions are one-to-one", "All one-to-one functions are onto", "A bijective function is both one-to-one and onto", "Constant functions are bijective"], answer: "2", explanation: "Definition of bijective." },

    // ==================== HARD (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Domain of f(x) = √(x² – 5x + 6) is:", options: ["(–∞, 2] ∪ [3, ∞)", "[2, 3]", "(2, 3)", "All reals"], answer: "0", explanation: "x² – 5x + 6 = (x–2)(x–3) ≥ 0 → x ≤ 2 or x ≥ 3." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "If f(x) = 2x – 1 and g(x) = x² + 1, then (f/g)(x) is undefined when:", options: ["x = 0", "Never (g never zero)", "x = 1", "x = –1"], answer: "1", explanation: "x² + 1 ≥ 1 > 0 always." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Which of the following is one-to-one?", options: ["f(x) = x² – 4", "f(x) = |x – 3|", "f(x) = 5 – 3x", "f(x) = x² + 2x"], answer: "2", explanation: "Linear with non-zero slope." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Domain of √(4 – x) / √(x – 1) is:", options: ["[1, 4]", "(1, 4]", "[1, 4)", "(1, 4)"], answer: "1", explanation: "4 – x ≥ 0 and x – 1 > 0 → 1 < x ≤ 4." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "If f(x) = x + 2 and g(x) = √(x – 3), domain of f · g is:", options: ["[3, ∞)", "(3, ∞)", "All reals", "[0, ∞)"], answer: "0", explanation: "Only restriction comes from √(x – 3)." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "The relation R = {(x, y) | x² + y² = 1} is:", options: ["A function", "Not a function", "One-to-one", "Constant"], answer: "1", explanation: "Circle fails vertical line test." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "f(x) = 1/(x – 2) + √(x + 1). Domain is:", options: ["x ≥ –1, x ≠ 2", "x > –1, x ≠ 2", "x ≥ –1", "All reals except 2"], answer: "0", explanation: "Both conditions." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "Which function is bijective from ℝ to ℝ?", options: ["f(x) = eˣ", "f(x) = x³ – x", "f(x) = 2x + 7", "f(x) = x²"], answer: "2", explanation: "Strictly increasing linear functions are bijective on ℝ." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "If (f + g)(x) = 5x and (f – g)(x) = x, then f(x) =", options: ["3x", "2x", "4x", "6x"], answer: "0", explanation: "Add the two equations: 2f = 6x → f = 3x." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "Domain of f(x) = √(x – 1) + 1/√(4 – x) is:", options: ["[1, 4)", "(1, 4]", "[1, 4]", "(1, 4)"], answer: "0", explanation: "x ≥ 1 and 4 – x > 0." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "The function f(x) = x / |x| (x ≠ 0) has range:", options: ["{–1, 1}", "All reals", "[–1, 1]", "{0}"], answer: "0", explanation: "It is –1 for x < 0 and +1 for x > 0." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "If f is one-to-one, then f(a) = f(b) implies:", options: ["a ≠ b", "a = b", "a + b = 0", "Nothing"], answer: "1", explanation: "Definition." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Domain of √(x² – 9) / (x – 4) is:", options: ["(–∞, –3] ∪ [3, ∞) except 4", "[–3, 3] except 4", "x ≥ 3, x ≠ 4", "All reals except 4"], answer: "0", explanation: "x² ≥ 9 and x ≠ 4." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Which of the following is true for f(x) = x³?", options: ["Not one-to-one", "Not onto ℝ", "Bijective from ℝ to ℝ", "Constant"], answer: "2", explanation: "Odd degree polynomials with positive leading coefficient are bijective on ℝ." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "If g(x) = x – 5 and (f/g)(x) = x + 3, then f(x) =", options: ["(x + 3)(x – 5)", "x + 3", "x – 5", "x² – 2"], answer: "0", explanation: "f = (f/g) · g." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "The graph of a function can never be:", options: ["A straight line", "A parabola opening sideways", "A V shape", "A horizontal line"], answer: "1", explanation: "Sideways parabola fails vertical line test." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "Domain of f(x) = √(2 – x) / √(x + 3) is:", options: ["[–3, 2]", "(–3, 2]", "[–3, 2)", "(–3, 2)"], answer: "1", explanation: "2 – x ≥ 0 and x + 3 > 0." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "If f(x) = 2x + 1 and f is one-to-one, which is true?", options: ["f(3) = f(5)", "f(a) = f(b) ⇒ a = b", "It is not onto", "Range is only positive"], answer: "1", explanation: "Property of one-to-one." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "The relation “y is a square root of x” is a function if we take:", options: ["Both positive and negative roots", "Only the principal (non-negative) root", "Only negative root", "No restriction"], answer: "1", explanation: "Principal square root makes it a function." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "For f(x) = √(x – a) / (x – b) to be defined, the necessary conditions are:", options: ["x ≥ a and x ≠ b", "x > a and x ≠ b", "x ≥ a only", "x ≠ b only"], answer: "0", explanation: "Both the radical and the denominator conditions." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "hard", stem: "Define a relation and give one example.", answer: "A relation is a set of ordered pairs. Example: R = {(1,2), (3,4), (5,6)}.", explanation: "Basic definition." },
    { id: "q102", type: "short", difficulty: "hard", stem: "Define a function. How is it different from a relation?", answer: "A function is a relation in which each first element (x) appears in exactly one ordered pair. A relation can have the same x with different y-values; a function cannot.", explanation: "Key distinction." },
    { id: "q103", type: "short", difficulty: "hard", stem: "State the Vertical Line Test and explain why it works.", answer: "If any vertical line intersects the graph more than once, the graph does not represent a function. It works because a vertical line has constant x; intersecting twice means the same x has two y-values.", explanation: "Conceptual understanding." },
    { id: "q104", type: "short", difficulty: "hard", stem: "Find the domain of f(x) = √(x – 4).", answer: "x – 4 ≥ 0 ⇒ x ≥ 4. Domain = [4, ∞).", explanation: "Radical condition." },
    { id: "q105", type: "short", difficulty: "hard", stem: "Find the domain of f(x) = 1/(x² – 9).", answer: "x² – 9 ≠ 0 ⇒ x ≠ ±3. Domain = ℝ \\ {–3, 3}.", explanation: "Denominator ≠ 0." },
    { id: "q106", type: "short", difficulty: "hard", stem: "If f(x) = 2x + 3 and g(x) = x – 1, find (f + g)(x) and (f · g)(x).", answer: "(f + g)(x) = 3x + 2; (f · g)(x) = (2x + 3)(x – 1) = 2x² + x – 3.", explanation: "Direct application." },
    { id: "q107", type: "short", difficulty: "hard", stem: "Determine whether the relation {(1,2), (2,3), (1,4), (3,5)} is a function. Give reason.", answer: "No, because x = 1 is paired with both 2 and 4.", explanation: "Repeated first element." },
    { id: "q108", type: "short", difficulty: "hard", stem: "Find the domain and range of f(x) = √(9 – x²).", answer: "Domain: [–3, 3]. Range: [0, 3].", explanation: "Semicircle upper half." },
    { id: "q109", type: "short", difficulty: "hard", stem: "Explain what a one-to-one function is and give an example.", answer: "A function is one-to-one (injective) if different inputs give different outputs (f(a)=f(b) ⇒ a=b). Example: f(x) = 2x + 1.", explanation: "Definition + example." },
    { id: "q110", type: "short", difficulty: "hard", stem: "If f(x) = x + 5 and g(x) = √(x – 2), find the domain of (f/g)(x).", answer: "Domain of g is x ≥ 2, and g(x) ≠ 0 ⇒ x ≠ 2. Therefore domain = (2, ∞).", explanation: "Intersection plus restriction." },
    { id: "q111", type: "short", difficulty: "hard", stem: "Why is y = x² a function but x = y² not a function?", answer: "y = x² passes the vertical line test (each x has one y). x = y² fails it (each positive x has two y-values).", explanation: "Vertical line test application." },
    { id: "q112", type: "short", difficulty: "hard", stem: "Find (f – g)(3) if f(x) = x² and g(x) = 2x + 1.", answer: "f(3)=9, g(3)=7, (f – g)(3) = 9 – 7 = 2.", explanation: "Evaluate then subtract." },
    { id: "q113", type: "short", difficulty: "hard", stem: "State the domain of f(x) = √(x – 1) + 1/(x – 3).", answer: "x ≥ 1 and x ≠ 3. Domain = [1, 3) ∪ (3, ∞).", explanation: "Both conditions." },
    { id: "q114", type: "short", difficulty: "hard", stem: "What is the range of the constant function f(x) = –4?", answer: "Range = {–4}.", explanation: "Only one output value." },
    { id: "q115", type: "short", difficulty: "hard", stem: "Show that f(x) = 3x – 7 is one-to-one.", answer: "Assume f(a) = f(b) ⇒ 3a – 7 = 3b – 7 ⇒ 3a = 3b ⇒ a = b. Therefore one-to-one.", explanation: "Standard proof method." },
    { id: "q116", type: "short", difficulty: "hard", stem: "Find the domain of √(x² – 4x – 5).", answer: "x² – 4x – 5 = (x – 5)(x + 1) ≥ 0 ⇒ x ≤ –1 or x ≥ 5. Domain = (–∞, –1] ∪ [5, ∞).", explanation: "Sign chart of quadratic." },
    { id: "q117", type: "short", difficulty: "hard", stem: "If f(x) = 2x and g(x) = x + 3, express (f/g)(x) and state its domain.", answer: "(f/g)(x) = 2x / (x + 3), domain = ℝ \\ {–3}.", explanation: "Division and restriction." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Explain the difference between domain and range.", answer: "Domain is the set of all possible input values (x). Range is the set of all actual output values (y) produced by the function.", explanation: "Clear distinction." },
    { id: "q119", type: "short", difficulty: "hard", stem: "Why do we use a solid line for ≤ and a broken line for < when graphing relations?", answer: "Solid line includes the boundary points (equality holds). Broken line excludes the boundary points (strict inequality).", explanation: "Graphical convention." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Abatu, write a short plan of how you will revise this unit to score 100%.", answer: "1. Memorise the definitions of relation and function. 2. Practise Vertical Line Test on many graphs. 3. Master domain rules for radicals and fractions. 4. Do all combination problems. 5. Solve the 120 questions and check every mistake.", explanation: "Personal mastery plan." },
  ],
};