import type { Chapter } from "../learnData";

export const g10MathCh2: Chapter = {
  id: "ch2",
  number: 2,
  title: "Polynomial Functions",
  titleAm: "የፖሊኖሚያል ተግባራት",
  notes: [
    {
      id: "n0",
      title: "0. How to Master This Unit (Abatu's 100% Route)",
      titleAm: "0. ይህን ክፍል እንዴት 100% መቆጣጠር",
      body: "Abatu, polynomials are the backbone of algebra. Master these completely:\n1. Definition, degree, leading coefficient, constant term\n2. Operations (+ − × ÷)\n3. Remainder Theorem & Factor Theorem (most tested in exams)\n4. Zeros / roots and Rational Root Test\n5. End behaviour from degree + leading coefficient\n6. Graphing using zeros and multiplicity\n\nDo 4 passes: Understand → Practise → Retrieve → Diagnose.",
      bodyAm: "ፖሊኖሚያል የአልጀብራ መሠረት ነው። Remainder እና Factor Theorem በጣም ይፈተናሉ።",
      children: [
        {
          id: "n0-1",
          title: "Key definitions",
          titleAm: "መሠረታዊ ትርጉሞች",
          body: "p(x) = aₙxⁿ + aₙ₋₁xⁿ⁻¹ + … + a₁x + a₀ (aₙ ≠ 0)\n• Degree = n (highest power)\n• Leading coefficient = aₙ\n• Constant term = a₀\n• Domain of any polynomial = all real numbers ℝ",
          bodyAm: "ዲግሪ = ከፍተኛው ኃይል። Leading coefficient = aₙ።"
        },
        {
          id: "n0-2",
          title: "⚠ EXAM TRAPS",
          titleAm: "የፈተና ወጥመዶች",
          body: "1. Zero polynomial has undefined degree.\n2. Constant non-zero has degree 0.\n3. Remainder Theorem: when dividing by (x−c) remainder = f(c).\n4. Factor Theorem: (x−c) is a factor ⇔ f(c)=0.\n5. Degree of product = sum of degrees.\n6. Degree of sum can be lower if leading terms cancel.",
          bodyAm: "Remainder = f(c)። Factor ⇔ f(c)=0።"
        }
      ]
    },
    {
      id: "n1",
      title: "2.1 Definition of Polynomial Function",
      titleAm: "2.1 ትርጉም",
      body: "A polynomial function has only non-negative integer powers of x and real coefficients. No roots, no fractions with x in denominator, no absolute values that change form.",
      bodyAm: "ፖሊኖሚያል = አዎንታዊ ኢንቲጀር ኃይሎች ብቻ።",
      children: [
        {
          id: "n1-1",
          title: "Examples of non-polynomials",
          titleAm: "ፖሊኖሚያል ያልሆኑ",
          body: "• 1/x , √x , 2ˣ , |x| , x^(1/2) , x⁻² are NOT polynomials.",
          bodyAm: "1/x፣ √x፣ 2ˣ ፖሊኖሚያል አይደሉም።"
        }
      ]
    },
    {
      id: "n2",
      title: "2.2 Operations on Polynomials",
      titleAm: "2.2 ስራዎች",
      body: "Add/Subtract: combine like terms.\nMultiply: distribute every term (or vertical method).\nDivide: long division → f(x) = d(x)·q(x) + r(x) with deg(r) < deg(d).",
      bodyAm: "ድምር/ልዩነት = like terms። ማባዛት = distribute። ክፍፍል = long division።"
    },
    {
      id: "n3",
      title: "2.3 Theorems (Most Important for Exams)",
      titleAm: "2.3 ቲዎረሞች",
      body: "Polynomial Division Theorem: f(x) = d(x)q(x) + r(x)\nRemainder Theorem: remainder when divided by (x−c) is f(c)\nFactor Theorem: (x−c) is a factor ⇔ f(c) = 0",
      bodyAm: "Remainder Theorem እና Factor Theorem በጣም አስፈላጊ ናቸው።",
      children: [
        {
          id: "n3-1",
          title: "How to use Factor Theorem quickly",
          titleAm: "Factor Theorem ፈጣን አጠቃቀም",
          body: "To test if (x−c) is a factor, just compute f(c). If zero → yes, it is a factor. Then you can factor and continue.",
          bodyAm: "f(c)=0 ከሆነ (x−c) factor ነው።"
        }
      ]
    },
    {
      id: "n4",
      title: "2.4 Zeros of Polynomial Functions",
      titleAm: "2.4 ዜሮዎች",
      body: "A zero (root) of p(x) is a number c such that p(c)=0.\nRational Root Test: possible rational roots are ±(factors of constant)/(factors of leading coefficient).\nMultiplicity: how many times a factor appears. Odd multiplicity → crosses x-axis; even → touches and turns.",
      bodyAm: "ዜሮ = p(c)=0። Rational Root Test ተጠቀም።"
    },
    {
      id: "n5",
      title: "2.5 Graphs of Polynomial Functions",
      titleAm: "2.5 ግራፎች",
      body: "End behaviour is determined by degree and leading coefficient:\n• Even degree + positive leading → both ends up\n• Even degree + negative leading → both ends down\n• Odd degree + positive leading → left down, right up\n• Odd degree + negative leading → left up, right down\nUse zeros, multiplicity and y-intercept to sketch.",
      bodyAm: "End behaviour በዲግሪ እና leading coefficient ይወሰናል።"
    },
    {
      id: "nSummary",
      title: "Unit Summary — Abatu’s 100% Checklist",
      titleAm: "ማጠቃለያ",
      body: "1. Identify degree, leading coeff, constant term\n2. Perform +, −, ×, ÷ correctly\n3. Apply Remainder & Factor Theorems instantly\n4. Find possible rational roots and test them\n5. Sketch using zeros + end behaviour",
      bodyAm: "ዲግሪ → ስራዎች → Theorems → ዜሮዎች → ግራፍ"
    }
  ],
  questions: [
    // Easy 1-40
    { id: "q1", type: "mcq", difficulty: "easy", stem: "The degree of 5x³ − 2x + 7 is:", options: ["3", "5", "1", "0"], answer: "0", explanation: "Highest power is 3." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Leading coefficient of −4x⁵ + 3x² − 1 is:", options: ["−4", "3", "−1", "5"], answer: "0", explanation: "Coefficient of highest power." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Constant term of 2x⁴ − 5x + 9 is:", options: ["2", "−5", "9", "0"], answer: "2", explanation: "Term without x." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Domain of any polynomial is:", options: ["Positive reals", "All real numbers", "Integers", "Non-zero"], answer: "1", explanation: "Polynomials are defined everywhere." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Which is NOT a polynomial?", options: ["x² + 3", "√x + 1", "5", "x³ − x"], answer: "1", explanation: "√x is not integer power." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Degree of a non-zero constant is:", options: ["0", "1", "Undefined", "∞"], answer: "0", explanation: "Constant non-zero has degree 0." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "By Remainder Theorem, remainder when f(x) is divided by (x−c) is:", options: ["f(0)", "f(c)", "f(1)", "0"], answer: "1", explanation: "Remainder Theorem." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "If f(c)=0 then (x−c) is a:", options: ["Remainder", "Factor", "Quotient", "Leading term"], answer: "1", explanation: "Factor Theorem." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Degree of product of degree 3 and degree 2 is:", options: ["5", "6", "1", "0"], answer: "0", explanation: "Degrees add." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "f(x)=x² − 4 has zeros:", options: ["2 only", "−2 only", "±2", "0"], answer: "2", explanation: "x=2 and x=−2." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The zero polynomial has degree:", options: ["0", "1", "Undefined", "−1"], answer: "2", explanation: "No degree is assigned to the zero polynomial." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Which is a polynomial?", options: ["1/x", "x² + √2", "√x", "2ˣ"], answer: "1", explanation: "√2 is a constant coefficient." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Degree of 7 is:", options: ["0", "1", "7", "Undefined"], answer: "0", explanation: "Non-zero constant." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Leading term of 3x⁴ − 5x² + 2 is:", options: ["3x⁴", "−5x²", "2", "3"], answer: "0", explanation: "Highest power term." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "f(x)=0 is:", options: ["Degree 0", "Degree 1", "Zero polynomial", "Linear"], answer: "2", explanation: "Zero polynomial." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "If (x−2) is a factor of f(x), then f(2)=", options: ["0", "2", "1", "−2"], answer: "0", explanation: "Factor Theorem." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Degree of (x+1)(x−3) is:", options: ["1", "2", "0", "3"], answer: "1", explanation: "Product of two degree 1." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "A linear polynomial has degree:", options: ["0", "1", "2", "3"], answer: "1", explanation: "Degree 1." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "A quadratic polynomial has degree:", options: ["1", "2", "3", "0"], answer: "1", explanation: "Degree 2." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "f(x)=x³ − 8 has a zero at:", options: ["2", "−2", "8", "0"], answer: "0", explanation: "2³=8." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "The graph of a degree 1 polynomial is a:", options: ["Parabola", "Straight line", "Cubic curve", "Circle"], answer: "1", explanation: "Linear." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "If f(3)=0 then a factor is:", options: ["(x−3)", "(x+3)", "(3−x)", "x"], answer: "0", explanation: "Factor Theorem." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "Degree of 2x⁵ + x is:", options: ["5", "1", "6", "0"], answer: "0", explanation: "Highest power 5." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "Constant term of −x³ + 4x − 7 is:", options: ["−7", "4", "−1", "0"], answer: "0", explanation: "Term without x." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "Which has degree 0?", options: ["0", "5", "x", "x⁰ + x"], answer: "1", explanation: "Non-zero constant." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "f(x)=x² + 1 has how many real zeros?", options: ["0", "1", "2", "3"], answer: "0", explanation: "Always positive." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Remainder when f(x) divided by (x−1) is f(1). True or False?", options: ["True", "False"], answer: "0", explanation: "Remainder Theorem." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "A cubic polynomial has degree:", options: ["2", "3", "4", "1"], answer: "1", explanation: "Degree 3." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Leading coefficient of 6 − 2x³ is:", options: ["−2", "6", "2", "−6"], answer: "0", explanation: "Coefficient of x³." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "f(x)=5x is a:", options: ["Constant", "Linear", "Quadratic", "Cubic"], answer: "1", explanation: "Degree 1." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "If degree of p is 4 and degree of q is 2, degree of p·q is:", options: ["6", "8", "2", "4"], answer: "0", explanation: "4+2=6." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "Zeros of f(x)=(x−1)(x+2) are:", options: ["1 and −2", "−1 and 2", "1 and 2", "−1 and −2"], answer: "0", explanation: "Set each factor to zero." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "The y-intercept of a polynomial is the:", options: ["Leading coefficient", "Constant term", "Degree", "Zero"], answer: "1", explanation: "f(0)=constant term." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "Which is not a polynomial?", options: ["x³ + 2x", "3", "1/x + x", "x"], answer: "2", explanation: "1/x is not allowed." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "Degree of (3x² + 1) + (−3x² + 5) is:", options: ["2", "0", "1", "Undefined"], answer: "1", explanation: "Leading terms cancel, result is constant 6." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "f(x)=x has zero at:", options: ["0", "1", "−1", "None"], answer: "0", explanation: "x=0." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "A polynomial of degree n can have at most how many real zeros?", options: ["n", "n+1", "2n", "Unlimited"], answer: "0", explanation: "Fundamental theorem of algebra (counting multiplicity)." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "If f(−1)=0 then a factor is:", options: ["(x+1)", "(x−1)", "(−1−x)", "x"], answer: "0", explanation: "Factor Theorem." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "The graph of an even-degree polynomial with positive leading coefficient goes:", options: ["Both ends up", "Both ends down", "Left down right up", "Left up right down"], answer: "0", explanation: "End behaviour." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "f(x)=x² − 9 factors as:", options: ["(x−3)(x+3)", "(x−9)(x+1)", "(x−3)²", "(x+3)²"], answer: "0", explanation: "Difference of squares." },

    // Medium 41-80
    { id: "q41", type: "mcq", difficulty: "medium", stem: "When f(x)=x³−1 is divided by (x−1) remainder is:", options: ["0", "1", "−1", "2"], answer: "0", explanation: "f(1)=0." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Is (x+2) a factor of x²+5x+6?", options: ["Yes", "No"], answer: "0", explanation: "f(−2)=4−10+6=0." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "Possible rational roots of 2x³ − 3x + 1 include:", options: ["±1, ±1/2", "±2 only", "±3", "None"], answer: "0", explanation: "Factors of 1 over factors of 2." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "End behaviour of −x⁴ + … is:", options: ["Both ends up", "Both ends down", "Left down right up", "Left up right down"], answer: "1", explanation: "Even degree, negative leading." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "If multiplicity of a zero is even, the graph:", options: ["Crosses x-axis", "Touches and turns", "Is undefined", "Goes to infinity"], answer: "1", explanation: "Even multiplicity touches." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "f(x)=3x² − 12, zeros are:", options: ["±2", "±√2", "±4", "0"], answer: "0", explanation: "3(x²−4)=0 → x=±2." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "Degree of (2x³+1)+(−2x³+x) is:", options: ["3", "1", "0", "Undefined"], answer: "1", explanation: "Leading terms cancel." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "Remainder when x³+2x+1 divided by (x−1) is:", options: ["4", "3", "1", "0"], answer: "0", explanation: "f(1)=1+2+1=4." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "f(x)=(x−1)²(x+3), zero at x=1 has multiplicity:", options: ["1", "2", "3", "0"], answer: "1", explanation: "Squared factor." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Possible rational roots of x³ − 6x² + 11x − 6 are:", options: ["±1,2,3,6", "±1 only", "±11", "None"], answer: "0", explanation: "Factors of 6 over 1." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "If f(x)=x³ − 3x + 2 and f(1)=0, then (x−1) is a factor. True/False?", options: ["True", "False"], answer: "0", explanation: "Factor Theorem." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "End behaviour of 5x⁵ − 3x² + 1 is:", options: ["Left down, right up", "Left up, right down", "Both up", "Both down"], answer: "0", explanation: "Odd degree, positive leading." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "When 2x³ − x + 5 is divided by (x+1) remainder is:", options: ["4", "6", "2", "8"], answer: "0", explanation: "f(−1)=−2 +1 +5=4." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "If (x−2) is a factor of x³ + ax² − 4, then a=", options: ["−1", "2", "0", "4"], answer: "0", explanation: "f(2)=8+4a−4=0 → 4+4a=0 → a=−1." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "f(x)=x⁴ − 5x² + 4, zeros include:", options: ["±1, ±2", "±1 only", "0", "±√2 only"], answer: "0", explanation: "Let u=x², (u−1)(u−4)=0 → x=±1,±2." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "The graph of (x−1)³ at x=1:", options: ["Touches", "Crosses", "Neither", "Undefined"], answer: "1", explanation: "Odd multiplicity → crosses." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "Leading coefficient of −x⁷ + 4x³ − 9 is:", options: ["−1", "4", "−9", "7"], answer: "0", explanation: "−1." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Sum of degrees of (3x²+1) and (2x³−x) is 5, degree of product is:", options: ["5", "6", "1", "0"], answer: "0", explanation: "2+3=5." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "If f(x)=(x+2)(x−3)(x+5), zeros are:", options: ["−2,3,−5", "2,−3,5", "−2,−3,−5", "2,3,5"], answer: "0", explanation: "Set factors to zero." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "A polynomial of even degree with negative leading coefficient has end behaviour:", options: ["Both ends up", "Both ends down", "Left down right up", "Left up right down"], answer: "1", explanation: "Both ends down." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "Remainder when x⁴ − 1 is divided by (x−1) is:", options: ["0", "1", "−1", "2"], answer: "0", explanation: "f(1)=0." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Possible rational roots of 3x³ − 2x + 6 include:", options: ["±1,2,3,6,1/3,2/3", "±1 only", "±3", "None"], answer: "0", explanation: "p/q factors." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "If multiplicity of zero is 3, the graph:", options: ["Touches", "Crosses (flattens)", "Is undefined", "Goes vertical"], answer: "1", explanation: "Odd multiplicity greater than 1 flattens while crossing." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "f(x)=x³ − x has zeros:", options: ["0, ±1", "0 only", "±1 only", "None"], answer: "0", explanation: "x(x−1)(x+1)=0." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Degree of the zero polynomial is:", options: ["0", "1", "Undefined", "−∞"], answer: "2", explanation: "Undefined." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "If f(x)=2x³ − 5x + 1, f(1)=", options: ["−2", "−1", "1", "2"], answer: "0", explanation: "2−5+1=−2." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "End behaviour of −3x³ + 2x − 1 is:", options: ["Left up, right down", "Left down, right up", "Both up", "Both down"], answer: "0", explanation: "Odd degree, negative leading." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "A factor of x³ − 8 is:", options: ["(x−2)", "(x+2)", "(x−4)", "(x−8)"], answer: "0", explanation: "2³=8." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "If f(x)=x² − 4x + 4, multiplicity of zero x=2 is:", options: ["1", "2", "0", "4"], answer: "1", explanation: "(x−2)²." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "Which has both ends going up?", options: ["x⁴ − 3x", "−x⁴ + 1", "x³ − 2", "−x³ + 5"], answer: "0", explanation: "Even degree, positive leading." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Rational Root Test for x³ + 2x² − x − 2 possible roots include:", options: ["±1,2", "±1 only", "±2 only", "None"], answer: "0", explanation: "Factors of 2." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "f(x)=(x−1)(x−2)(x−3), the constant term is:", options: ["−6", "6", "−1", "1"], answer: "0", explanation: "(−1)(−2)(−3)=−6." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "If a polynomial has a zero of multiplicity 4, the graph at that zero:", options: ["Crosses", "Touches and turns", "Is vertical", "Undefined"], answer: "1", explanation: "Even multiplicity." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "Remainder when 3x² − 2x + 5 is divided by (x−2) is:", options: ["13", "11", "9", "15"], answer: "0", explanation: "f(2)=12−4+5=13." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Degree of (x² + 1)(x³ − x) is:", options: ["5", "6", "3", "2"], answer: "0", explanation: "2+3=5." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "f(x)=x⁴ + 1 has how many real zeros?", options: ["0", "2", "4", "1"], answer: "0", explanation: "Always positive." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "If (x+3) is a factor of x³ + ax² + bx + 6 and f(−3)=0, then:", options: ["−27 −9a −3b +6=0", "27+9a+3b+6=0", "Other", "None"], answer: "0", explanation: "Plug x=−3." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "The polynomial x³ − 3x² + 2x has zeros:", options: ["0,1,2", "0 only", "1,2", "−1,0,1"], answer: "0", explanation: "x(x−1)(x−2)=0." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "End behaviour of x²(x−1) is the same as:", options: ["x³", "−x³", "x²", "−x²"], answer: "0", explanation: "Leading term x³." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "A cubic always has at least one real zero. True or False?", options: ["True", "False"], answer: "0", explanation: "Odd degree polynomials always cross the x-axis." },

    // Hard 81-100
    { id: "q81", type: "mcq", difficulty: "hard", stem: "When 2x³ − x + 5 is divided by (x+1) remainder is:", options: ["4", "6", "2", "8"], answer: "0", explanation: "f(−1)=−2+1+5=4." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "If (x−2) is a factor of x³ + ax² − 4, then a=", options: ["−1", "2", "0", "4"], answer: "0", explanation: "f(2)=8+4a−4=0 → a=−1." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "End behaviour of 5x⁵ − 3x² + 1 is:", options: ["Left down, right up", "Left up, right down", "Both up", "Both down"], answer: "0", explanation: "Odd degree, positive leading." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Possible rational roots of x³ − 6x² + 11x − 6 are factors of:", options: ["6 over 1", "1 over 6", "11", "None"], answer: "0", explanation: "±1,2,3,6." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "If f(x)=x⁴ − 5x² + 4, zeros include:", options: ["±1, ±2", "±1 only", "0", "±√2 only"], answer: "0", explanation: "Let u=x², (u−1)(u−4)=0." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "The graph of (x−1)³ touches or crosses at x=1?", options: ["Touches", "Crosses", "Neither", "Undefined"], answer: "1", explanation: "Odd multiplicity → crosses." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "Degree of zero polynomial is:", options: ["0", "1", "Undefined", "−1"], answer: "2", explanation: "No degree assigned." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "f(x)=x³ − 3x + 2, (x−1) is a factor. True/False?", options: ["True", "False"], answer: "0", explanation: "f(1)=1−3+2=0." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "Leading coefficient of −x⁷ + 4x³ − 9 is:", options: ["−1", "4", "−9", "7"], answer: "0", explanation: "−1." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "Sum of degrees of (3x²+1) and (2x³−x) is 5, degree of product is:", options: ["5", "6", "1", "0"], answer: "0", explanation: "2+3=5." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "If f(x)=x³ − 6x² + 11x − 6 and f(1)=0, f(2)=0, f(3)=0, then f(x)=", options: ["(x−1)(x−2)(x−3)", "(x+1)(x+2)(x+3)", "x³ − 6", "None"], answer: "0", explanation: "All three are zeros." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "A polynomial of degree 4 can cross the x-axis at most:", options: ["4 times", "5 times", "3 times", "Unlimited"], answer: "0", explanation: "At most degree many real zeros." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "If the graph of a polynomial touches the x-axis at x=2 and crosses at x=−1, possible factors include:", options: ["(x−2)²(x+1)", "(x−2)(x+1)", "(x−2)³(x+1)", "(x−2)(x+1)²"], answer: "0", explanation: "Even multiplicity at 2, odd at −1." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Remainder when x⁵ − 2x³ + x − 7 is divided by (x+1) is:", options: ["−5", "−7", "5", "9"], answer: "0", explanation: "f(−1)=−1 +2 −1 −7=−7? Recalc: (−1)⁵=−1; −2(−1)³=−2(−1)=2; + (−1) −7 → −1+2−1−7=−7." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "Which of the following is a factor of x³ − 7x − 6?", options: ["(x−3)", "(x+3)", "(x−2)", "(x+1)"], answer: "0", explanation: "f(3)=27−21−6=0." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "End behaviour of −2x⁶ + 5x³ − 1 is:", options: ["Both ends down", "Both ends up", "Left down right up", "Left up right down"], answer: "0", explanation: "Even degree, negative leading." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "If f(x)=(x−1)²(x+2)³, the multiplicity of x=−2 is:", options: ["2", "3", "1", "5"], answer: "1", explanation: "Cubed factor." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "Possible rational zeros of 2x³ + 3x² − 8x + 3 are:", options: ["±1,3,1/2,3/2", "±1,2,3", "±1 only", "None"], answer: "0", explanation: "p/q." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "A polynomial with zeros at 0 (multiplicity 2) and 4 (multiplicity 1) and leading coefficient 1 is:", options: ["x²(x−4)", "x(x−4)²", "x²(x+4)", "(x−4)³"], answer: "0", explanation: "x²(x−4)." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "If the degree is odd and leading coefficient is negative, end behaviour is:", options: ["Left up, right down", "Left down, right up", "Both up", "Both down"], answer: "0", explanation: "Standard end behaviour." },

    // Short 101-120
    { id: "q101", type: "short", difficulty: "hard", stem: "State the Remainder Theorem.", answer: "When a polynomial f(x) is divided by (x−c), the remainder is f(c).", explanation: "Core theorem." },
    { id: "q102", type: "short", difficulty: "hard", stem: "State the Factor Theorem.", answer: "(x−c) is a factor of f(x) if and only if f(c)=0.", explanation: "Core theorem." },
    { id: "q103", type: "short", difficulty: "hard", stem: "Find degree, leading coefficient and constant term of 4x⁵ − 3x² + 7.", answer: "Degree 5, leading coefficient 4, constant term 7.", explanation: "Direct reading." },
    { id: "q104", type: "short", difficulty: "hard", stem: "Is √x + x² a polynomial? Why?", answer: "No, because √x = x^(1/2) is not a non-negative integer power.", explanation: "Definition." },
    { id: "q105", type: "short", difficulty: "hard", stem: "Find the remainder when x³ − 2x + 5 is divided by (x−2).", answer: "f(2)=8−4+5=9.", explanation: "Remainder Theorem." },
    { id: "q106", type: "short", difficulty: "hard", stem: "Show that (x+1) is a factor of x³ + x² − x − 1.", answer: "f(−1)=−1+1+1−1=0. By Factor Theorem it is a factor.", explanation: "Apply Factor Theorem." },
    { id: "q107", type: "short", difficulty: "hard", stem: "Describe the end behaviour of −2x⁴ + 5x − 1.", answer: "Both ends go down (even degree, negative leading coefficient).", explanation: "End behaviour rule." },
    { id: "q108", type: "short", difficulty: "hard", stem: "List possible rational roots of 2x³ − 5x + 3.", answer: "±1, 3, 1/2, 3/2.", explanation: "p/q factors." },
    { id: "q109", type: "short", difficulty: "hard", stem: "If a zero has multiplicity 2, what does the graph do at that zero?", answer: "It touches the x-axis and turns back (does not cross).", explanation: "Even multiplicity." },
    { id: "q110", type: "short", difficulty: "hard", stem: "Abatu, write the three most important theorems of this unit.", answer: "1. Polynomial Division Theorem 2. Remainder Theorem 3. Factor Theorem.", explanation: "Core tools for exams." },
    { id: "q111", type: "short", difficulty: "hard", stem: "Find all zeros of f(x)=x³ − 4x.", answer: "x=0, x=2, x=−2.", explanation: "x(x−2)(x+2)=0." },
    { id: "q112", type: "short", difficulty: "hard", stem: "What is the degree of the product of a cubic and a quadratic polynomial?", answer: "5 (3+2).", explanation: "Degrees add." },
    { id: "q113", type: "short", difficulty: "hard", stem: "Explain why a cubic polynomial always has at least one real zero.", answer: "Odd-degree polynomials have opposite end behaviours, so the continuous graph must cross the x-axis at least once.", explanation: "End behaviour + Intermediate Value Theorem." },
    { id: "q114", type: "short", difficulty: "hard", stem: "Write the end behaviour for a polynomial of degree 5 with negative leading coefficient.", answer: "As x → −∞, y → +∞; as x → +∞, y → −∞ (left up, right down).", explanation: "Odd degree, negative leading." },
    { id: "q115", type: "short", difficulty: "hard", stem: "If f(x)=(x−3)²(x+1), describe the graph at x=3 and at x=−1.", answer: "At x=3 (even multiplicity) the graph touches and turns. At x=−1 (odd multiplicity) the graph crosses the x-axis.", explanation: "Multiplicity effect." },
    { id: "q116", type: "short", difficulty: "hard", stem: "Use the Rational Root Test to list possible rational zeros of x³ − 2x² − 5x + 6.", answer: "±1, 2, 3, 6.", explanation: "Factors of 6 over factors of 1." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Find the remainder when 4x³ − 3x + 7 is divided by (x−1).", answer: "f(1)=4−3+7=8.", explanation: "Remainder Theorem." },
    { id: "q118", type: "short", difficulty: "hard", stem: "What happens to the degree when two polynomials of the same degree are added and their leading coefficients cancel?", answer: "The degree of the sum is less than the original degree (or the sum may be the zero polynomial).", explanation: "Cancellation." },
    { id: "q119", type: "short", difficulty: "hard", stem: "Write a polynomial of degree 3 that has zeros at −2, 0 and 5.", answer: "f(x)=x(x+2)(x−5) (or any non-zero constant multiple).", explanation: "From zeros." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Abatu, list the steps you will follow to fully factor a cubic polynomial in an exam.", answer: "1. Use Rational Root Test to find possible zeros. 2. Test them with Factor Theorem (or synthetic division). 3. Factor out the linear factor. 4. Factor the remaining quadratic. 5. Write the complete factorisation.", explanation: "Exam strategy for Abatu." }
  ]
};
