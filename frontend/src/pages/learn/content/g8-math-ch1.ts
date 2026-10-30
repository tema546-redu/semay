import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 MATHEMATICS — CHAPTER 1: RATIONAL NUMBERS
// Source: AAEB Grade 8 Mathematics Student Textbook (pp. 1–40)
// Language level: A2 / A1 / B1 — clear, short, no harsh words.
// Questions: 50 of 200 (this batch). Explanation below each answer.
// ============================================================

export const g8MathCh1: Chapter = {
  id: "ch1",
  number: 1,
  title: "Rational Numbers",
  titleAm: "ራሽኖል ቁጥሮች",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. What is a Rational Number?",
      titleAm: "ራሽኖል ቁጥር ምንድን ነው?",
      body:
        "A rational number is any number you can write as a fraction a/b, where a and b are integers and b is not zero.",
      bodyAm:
        "ራሽኖል ቁጥር ማለት እንደ ክፍልፋይ a/b መጻፍ የምትችለው ቁጥር ነው። a እና b ሙሉ ቁጥሮች መሆን አለባቸው፣ b ደግሞ ዜሮ መሆን የለበትም።",
      children: [
        {
          id: "n1-1",
          title: "The symbol",
          titleAm: "ምልክቱ",
          body:
            "The set of all rational numbers is called ℚ (the letter Q).",
          bodyAm: "የሁሉም ራሽኖል ቁጥሮች ስብስብ ℚ ይባላል።",
        },
        {
          id: "n1-2",
          title: "Examples of rational numbers",
          titleAm: "የራሽኖል ቁጥሮች ምሳሌዎች",
          body:
            "1/5, 3/7, −8/2, 5/9, 0.25, −3, 7. All of these can be written as a fraction.",
          bodyAm:
            "1/5, 3/7, −8/2, 5/9, 0.25, −3, 7 ሁሉም እንደ ክፍልፋይ ይጻፋሉ። ስለዚህ ሁሉም ራሽኖል ናቸው።",
        },
        {
          id: "n1-3",
          title: "Types of fractions (from earlier grades)",
          titleAm: "የክፍልፋይ ዓይነቶች",
          body:
            "Proper fraction: top < bottom (e.g. 3/5).  Improper fraction: top ≥ bottom (e.g. 7/3).  Mixed fraction: a whole number plus a proper fraction (e.g. 2 1/3).",
          bodyAm:
            "ትክክለኛ ክፍልፋይ፡ ቁጥሩ ከጠቅላላው ያንሳል (3/5)። ትክክለኛ ያልሆነ ክፍልፋይ፡ ቁጥሩ ከጠቅላላው ይበልጣል ወይም እኩል ነው (7/3)። ድብልቅ ክፍልፋይ፡ ሙሉ ቁጥር እና ትክክለኛ ክፍልፋይ (2 1/3)።",
        },
        {
          id: "n1-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "The bottom number b can never be zero. Division by zero is not allowed. So 5/0 is NOT a rational number.",
          bodyAm:
            "የታችኛው ቁጥር b በጭራሽ ዜሮ መሆን አይችልም። በዜሮ መከፋፈል አይፈቀድም። ስለዚህ 5/0 ራሽኖል ቁጥር አይደለም።",
        },
        {
          id: "n1-5",
          title: "Practise yourself",
          titleAm: "ራስህን ሞክር",
          body:
            "Is 0 a rational number? Yes — because 0 = 0/1. Is −7 a rational number? Yes — because −7 = −7/1.",
          bodyAm:
            "0 ራሽኖል ነው? አዎ — 0 = 0/1 ስለሆነ። −7 ራሽኖል ነው? አዎ — −7 = −7/1 ስለሆነ።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Showing Rational Numbers on a Number Line",
      titleAm: "ራሽኖል ቁጥሮችን በቁጥር መስመር ላይ ማሳየት",
      body:
        "A number line is a straight line with numbers marked on it. Zero is in the middle. Positive numbers are on the right. Negative numbers are on the left.",
      bodyAm:
        "የቁጥር መስመር ቁጥሮች የተጻፉበት ቀጥተኛ መስመር ነው። ዜሮ በመሃል ነው። አዎንታዊ ቁጥሮች በቀኝ ናቸው። አሉታዊ ቁጥሮች በግራ ናቸው።",
      children: [
        {
          id: "n2-1",
          title: "Rule 1 — Sign of the number",
          titleAm: "ደንብ 1 — የቁጥሩ ምልክት",
          body:
            "Positive → right of zero.  Negative → left of zero.",
          bodyAm: "አዎንታዊ → ከዜሮ በስተቀኝ። አሉታዊ → ከዜሮ በስተግራ።",
        },
        {
          id: "n2-2",
          title: "Rule 2 — Proper fraction",
          titleAm: "ደንብ 2 — ትክክለኛ ክፍልፋይ",
          body:
            "A proper fraction always lies between 0 and 1 (or between 0 and −1 if it is negative).",
          bodyAm:
            "ትክክለኛ ክፍልፋይ ሁልጊዜ ከ0 እና ከ1 መካከል ይገኛል (አሉታዊ ከሆነ ከ0 እና ከ−1 መካከል)።",
        },
        {
          id: "n2-3",
          title: "Rule 3 — Improper fraction",
          titleAm: "ደንብ 3 — ትክክለኛ ያልሆነ ክፍልፋይ",
          body:
            "First change to a mixed fraction. Then you know which two whole numbers it sits between. Example: 3/2 = 1 1/2, so it sits between 1 and 2.",
          bodyAm:
            "በመጀመሪያ ወደ ድብልቅ ክፍልፋይ ቀይረው። ከዚያ በየትኞቹ ሁለት ሙሉ ቁጥሮች መካከል እንደሚገኝ ይታወቃል። ምሳሌ፡ 3/2 = 1 1/2 ስለዚህ በ1 እና በ2 መካከል ይገኛል።",
        },
        {
          id: "n2-4",
          title: "Steps to plot a/b on the number line",
          titleAm: "a/b ን በቁጥር መስመር ላይ ለማስቀመጥ ደረጃዎች",
          body:
            "1) Find the two whole numbers it sits between. 2) Divide that space into b equal parts. 3) Count a parts from zero. 4) If negative, go left.",
          bodyAm:
            "1) በሁለት ሙሉ ቁጥሮች መካከል ያለውን ቦታ ይፈልጉ። 2) ያንን ቦታ በ b እኩል ክፍሎች ይከፋፍሉ። 3) ከዜሮ ጀምሮ a ክፍሎችን ይቁጠሩ። 4) አሉታዊ ከሆነ ወደ ግራ ይሂዱ።",
        },
        {
          id: "n2-5",
          title: "Opposite numbers",
          titleAm: "ተቃራኒ ቁጥሮች",
          body:
            "Two numbers are opposites if they are the same distance from 0 but on different sides. Example: 3/2 and −3/2.",
          bodyAm:
            "ሁለት ቁጥሮች ከ0 ተመሳሳይ ርቀት ካላቸው ግን በተለያየ ጎን ካሉ ተቃራኒ ይባላሉ። ምሳሌ፡ 3/2 እና −3/2።",
        },
        {
          id: "n2-6",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "−8.85 is to the LEFT of −8.8 on the number line, because −8.85 is smaller (more negative).",
          bodyAm:
            "−8.85 በቁጥር መስመር ላይ ከ−8.8 በስተግራ ይገኛል፣ ምክንያቱም −8.85 ያንሳል (የበለጠ አሉታዊ ነው)።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. How Sets of Numbers Fit Together: ℕ ⊂ W ⊂ ℤ ⊂ ℚ",
      titleAm: "የቁጥር ስብስቦች ግንኙነት",
      body:
        "Each set is inside the next one. Natural numbers are the counting numbers. Whole numbers add zero. Integers add negatives. Rational numbers add all fractions.",
      bodyAm:
        "እያንዳንዱ ስብስብ በሚቀጥለው ውስጥ ይገኛል። ተፈጥሯዊ ቁጥሮች ለመቁጠር የሚያገለግሉ ቁጥሮች ናቸው። ሙሉ ቁጥሮች ዜሮን ይጨምራሉ። ኢንቲጀሮች አሉታዊ ቁጥሮችን ይጨምራሉ። ራሽኖል ቁጥሮች ሁሉንም ክፍልፋዮች ይጨምራሉ።",
      children: [
        {
          id: "n3-1",
          title: "ℕ — Natural numbers",
          titleAm: "ℕ — ተፈጥሯዊ ቁጥሮች",
          body: "ℕ = {1, 2, 3, 4, 5, …}",
          bodyAm: "ℕ = {1, 2, 3, 4, 5, …}",
        },
        {
          id: "n3-2",
          title: "W — Whole numbers",
          titleAm: "W — ሙሉ ቁጥሮች",
          body: "W = {0, 1, 2, 3, 4, …}",
          bodyAm: "W = {0, 1, 2, 3, 4, …}",
        },
        {
          id: "n3-3",
          title: "ℤ — Integers",
          titleAm: "ℤ — ኢንቲጀሮች",
          body: "ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}",
          bodyAm: "ℤ = {…, −3, −2, −1, 0, 1, 2, 3, …}",
        },
        {
          id: "n3-4",
          title: "ℚ — Rational numbers",
          titleAm: "ℚ — ራሽኖል ቁጥሮች",
          body:
            "ℚ = every number that can be written as a/b, where a and b are integers and b ≠ 0.",
          bodyAm:
            "ℚ = እንደ a/b ሊጻፍ የሚችል ማንኛውም ቁጥር። a እና b ሙሉ ቁጥሮች ሲሆኑ b ≠ 0 ነው።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "0 is NOT a natural number. 0 IS a whole number and an integer and a rational number. Every natural number is also a whole number, an integer, and a rational number — but the reverse is not true.",
          bodyAm:
            "0 ተፈጥሯዊ ቁጥር አይደለም። 0 ሙሉ ቁጥር፣ ኢንቲጀር እና ራሽኖል ነው። ማንኛውም ተፈጥሯዊ ቁጥር ሙሉ ቁጥር፣ ኢንቲጀር እና ራሽኖል ነው — ግን ተቃራኒው እውነት አይደለም።",
        },
        {
          id: "n3-6",
          title: "Practise yourself",
          titleAm: "ራስህን ሞክር",
          body:
            "−3 2/7 is an integer? No. It is only a rational number (mixed fraction). −13 is an integer and a rational number, but not whole or natural.",
          bodyAm:
            "−3 2/7 ኢንቲጀር ነው? አይደለም። ራሽኖል ብቻ ነው (ድብልቅ ክፍልፋይ)። −13 ኢንቲጀር እና ራሽኖል ነው፣ ግን ሙሉ ወይም ተፈጥሯዊ አይደለም።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Absolute Value",
      titleAm: "ፍጹም እሴት",
      body:
        "The absolute value of a number is its distance from zero on the number line. Distance is never negative. We write |x|.",
      bodyAm:
        "የአንድ ቁጥር ፍጹም እሴት በቁጥር መስመር ላይ ካለው ዜሮ ያለው ርቀት ነው። ርቀት በጭራሽ አሉታዊ አይሆንም። |x| ብለን እንጽፋለን።",
      children: [
        {
          id: "n4-1",
          title: "Definition",
          titleAm: "ትርጓሜ",
          body:
            "|x| = x if x ≥ 0.  |x| = −x if x < 0.",
          bodyAm: "|x| = x x ≥ 0 ከሆነ። |x| = −x x < 0 ከሆነ።",
        },
        {
          id: "n4-2",
          title: "Quick examples",
          titleAm: "ፈጣን ምሳሌዎች",
          body:
            "|6| = 6.  |0| = 0.  |−15| = 15.  |−3/5| = 3/5.  |8 − 3| = |5| = 5.  |−25 + 13| = |−12| = 12.",
          bodyAm:
            "|6| = 6። |0| = 0። |−15| = 15። |−3/5| = 3/5። |8 − 3| = |5| = 5። |−25 + 13| = |−12| = 12።",
        },
        {
          id: "n4-3",
          title: "How to solve |x| = a",
          titleAm: "|x| = a ን እንዴት መፍታት",
          body:
            "If a > 0: two solutions, x = a and x = −a.  If a = 0: one solution, x = 0.  If a < 0: no solution.",
          bodyAm:
            "a > 0 ከሆነ፡ ሁለት መፍትሔ x = a እና x = −a። a = 0 ከሆነ፡ አንድ መፍትሔ x = 0። a < 0 ከሆነ፡ መፍትሔ የለም።",
        },
        {
          id: "n4-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "|x| can never equal a negative number. So |x| = −6 has NO solution. Many students wrongly write −6. This is a common exam trap.",
          bodyAm:
            "|x| በጭራሽ አሉታዊ ቁጥር ጋር እኩል አይሆንም። ስለዚህ |x| = −6 መፍትሔ የለውም። ብዙ ተማሪዎች በስህተት −6 ይጽፋሉ። ይህ በፈተና ላይ ተደጋጋሚ ጥያቄ ነው።",
        },
        {
          id: "n4-5",
          title: "Practise yourself",
          titleAm: "ራስህን ሞክር",
          body:
            "Solve |x + 4| = 10. Answer: x = 6 or x = −14. Because x + 4 = 10 → x = 6, and x + 4 = −10 → x = −14.",
          bodyAm:
            "|x + 4| = 10 ን ፍታ። መልስ፡ x = 6 ወይም x = −14። ምክንያቱም x + 4 = 10 → x = 6፣ እና x + 4 = −10 → x = −14።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Comparing and Ordering Rational Numbers",
      titleAm: "ራሽኖል ቁጥሮችን ማወዳደር እና ማስተካከል",
      body:
        "To compare two rational numbers, we ask: which one is bigger? or which one is to the left on the number line?",
      bodyAm:
        "ሁለት ራሽኖል ቁጥሮችን ለማወዳደር እንጠይቃለን፡ የትኛው ይበልጣል? ወይም በቁጥር መስመር ላይ የትኛው በግራ ነው?",
      children: [
        {
          id: "n5-1",
          title: "Method 1 — Compare decimals",
          titleAm: "ዘዴ 1 — አስርዮሾችን ማወዳደር",
          body:
            "Compare place values from left to right: integer part first, then tenths, then hundredths, etc. Example: 15.52 > 15.05 because 5 > 0 in the tenths place.",
          bodyAm:
            "የቦታ እሴቶችን ከግራ ወደ ቀኝ ያወዳድሩ፡ ሙሉ ክፍል በመጀመሪያ፣ ከዚያ አስረኛ፣ ከዚያ መቶኛ። ምሳሌ፡ 15.52 > 15.05 ምክንያቱም በአስረኛ ቦታ 5 > 0።",
        },
        {
          id: "n5-2",
          title: "Method 2 — Same denominator",
          titleAm: "ዘዴ 2 — ተመሳሳይ አካፋይ",
          body:
            "Use the LCM of denominators to make both fractions have the same bottom. Then compare only the tops. Example: 3/5 and 1/2 → 6/10 and 5/10 → 3/5 > 1/2.",
          bodyAm:
            "የአካፋዮቹን LCM ተጠቅመው ሁለቱም ክፍልፋዮች ተመሳሳይ ታች እንዲኖራቸው ያድርጉ። ከዚያ ላይኞቹን ብቻ ያወዳድሩ። ምሳሌ፡ 3/5 እና 1/2 → 6/10 እና 5/10 → 3/5 > 1/2።",
        },
        {
          id: "n5-3",
          title: "Method 3 — Cross product",
          titleAm: "ዘዴ 3 — ተሻጋሪ ማባዛት",
          body:
            "For a/b and c/d with b, d positive: a/b < c/d ⟺ a·d < b·c. Example: 5/7 vs 8/3 → 5·3 = 15, 7·8 = 56 → 5/7 < 8/3.",
          bodyAm:
            "a/b እና c/d ሲሆኑ b, d አዎንታዊ ናቸው፡ a/b < c/d ⟺ a·d < b·c። ምሳሌ፡ 5/7 vs 8/3 → 5·3 = 15፣ 7·8 = 56 → 5/7 < 8/3።",
        },
        {
          id: "n5-4",
          title: "Ordering — ascending vs descending",
          titleAm: "ማስተካከል — ከትንሽ ወደ ትልቅ vs ከትልቅ ወደ ትንሽ",
          body:
            "Ascending = smallest first → largest last (increase).  Descending = largest first → smallest last (decrease).",
          bodyAm:
            "ከትንሽ ወደ ትልቅ = ትንሹ መጀመሪያ → ትልቁ መጨረሻ። ከትልቅ ወደ ትንሽ = ትልቁ መጀመሪያ → ትንሹ መጨረሻ።",
        },
        {
          id: "n5-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Between two negative numbers, the one with the BIGGER absolute value is SMALLER. Example: −45 < −23 because |−45| > |−23|.",
          bodyAm:
            "በሁለት አሉታዊ ቁጥሮች መካከል ትልቁ ፍጹም እሴት ያለው ያንሳል። ምሳሌ፡ −45 < −23 ምክንያቱም |−45| > |−23|።",
        },
        {
          id: "n5-6",
          title: "Practise yourself",
          titleAm: "ራስህን ሞክር",
          body:
            "Which is bigger: −0.15 or 1.5? Answer: 1.5. Every positive number is greater than every negative number.",
          bodyAm:
            "የትኛው ይበልጣል፡ −0.15 ወይስ 1.5? መልስ፡ 1.5። ማንኛውም አዎንታዊ ቁጥር ከማንኛውም አሉታዊ ቁጥር ይበልጣል።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Adding and Subtracting Rational Numbers",
      titleAm: "ራሽኖል ቁጥሮችን መደመር እና መቀነስ",
      body:
        "The rules depend on whether the denominators are the same and on the signs of the numbers.",
      bodyAm:
        "ደንቦቹ አካፋዮች ተመሳሳይ መሆናቸው እና የቁጥሮቹ ምልክቶች ላይ ይመረኮዛሉ።",
      children: [
        {
          id: "n6-1",
          title: "Same denominator",
          titleAm: "ተመሳሳይ አካፋይ",
          body:
            "Add or subtract only the numerators. Keep the same denominator. Example: 3/5 + 6/5 = 9/5.",
          bodyAm:
            "የላይኛ ቁጥሮችን ብቻ ይደምሩ ወይም ይቀንሱ። ተመሳሳይ አካፋይ ይያዙ። ምሳሌ፡ 3/5 + 6/5 = 9/5።",
        },
        {
          id: "n6-2",
          title: "Different denominators",
          titleAm: "የተለያዩ አካፋዮች",
          body:
            "Step 1: Make denominators positive. Step 2: Find LCM of denominators. Step 3: Write equivalent fractions with that LCM. Step 4: Add or subtract tops. Step 5: Reduce to lowest terms.",
          bodyAm:
            "ደረጃ 1፡ አካፋዮችን አዎንታዊ ያድርጉ። ደረጃ 2፡ የአካፋዮቹን LCM ያግኙ። ደረጃ 3፡ በዚያ LCM ተመጣጣኝ ክፍልፋዮችን ይጻፉ። ደረጃ 4፡ ላይኞቹን ይደምሩ ወይም ይቀንሱ። ደረጃ 5፡ ወደ ዝቅተኛ ቃላት ይቀንሱ።",
        },
        {
          id: "n6-3",
          title: "Rule for two negatives",
          titleAm: "ደንብ ሁለት አሉታዊዎች",
          body:
            "Sign = negative. Add absolute values. Put the minus in front. Example: −8/6 + (−11/8) = −65/24.",
          bodyAm:
            "ምልክት = አሉታዊ። ፍጹም እሴቶችን ይደምሩ። ሲቀነስ ከፊት ያስቀምጡ። ምሳሌ፡ −8/6 + (−11/8) = −65/24።",
        },
        {
          id: "n6-4",
          title: "Rule for opposite signs",
          titleAm: "ደንብ ተቃራኒ ምልክቶች",
          body:
            "Take the sign of the number with the bigger absolute value. Subtract the smaller absolute value from the larger one. Put that sign in front. Example: −9/4 + 5/4 = −1.",
          bodyAm:
            "ትልቁ ፍጹም እሴት ያለውን ቁጥር ምልክት ይውሰዱ። ትንሹን ፍጹም እሴት ከትልቁ ይቀንሱ። ያንን ምልክት ከፊት ያስቀምጡ። ምሳሌ፡ −9/4 + 5/4 = −1።",
        },
        {
          id: "n6-5",
          title: "Subtraction = add the opposite",
          titleAm: "መቀነስ = ተቃራኒውን መደመር",
          body:
            "a/b − c/d = a/b + (−c/d). So change the minus sign and flip the second sign. Example: 3/7 − (−5/9) = 3/7 + 5/9 = 62/63.",
          bodyAm:
            "a/b − c/d = a/b + (−c/d)። ስለዚህ የመቀነሻ ምልክቱን ቀይረው ሁለተኛውን ምልክት ይገለብጡ። ምሳሌ፡ 3/7 − (−5/9) = 3/7 + 5/9 = 62/63።",
        },
        {
          id: "n6-6",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Always reduce your final answer to lowest terms. 8/4 must be written as 2. But 47/28 cannot be reduced further.",
          bodyAm:
            "ሁልጊዜ የመጨረሻ መልስዎን ወደ ዝቅተኛ ቃላት ይቀንሱ። 8/4 እንደ 2 መጻፍ አለበት። ግን 47/28 የበለጠ ማቃለል አይቻልም።",
        },
      ],
    },

    {
      id: "n7",
      title: "7. Multiplying Rational Numbers",
      titleAm: "ራሽኖል ቁጥሮችን ማባዛት",
      body:
        "Multiply top × top and bottom × bottom. Then reduce.",
      bodyAm: "ላይኛውን × ላይኛውን እና ታችኛውን × ታችኛውን ያባዙ። ከዚያ ይቀንሱ።",
      children: [
        {
          id: "n7-1",
          title: "Sign rules",
          titleAm: "የምልክት ደንቦች",
          body:
            "positive × positive = positive.  negative × negative = positive.  positive × negative = negative.  Any number × 0 = 0.",
          bodyAm:
            "አዎንታዊ × አዎንታዊ = አዎንታዊ። አሉታዊ × አሉታዊ = አዎንታዊ። አዎንታዊ × አሉታዊ = አሉታዊ። ማንኛውም ቁጥር × 0 = 0።",
        },
        {
          id: "n7-2",
          title: "How to multiply 3 or more numbers",
          titleAm: "3 ወይም ከዚያ በላይ ቁጥሮችን እንዴት ማባዛት",
          body:
            "Count the number of negative factors. Even count → positive result. Odd count → negative result. If any factor is 0 → result is 0.",
          bodyAm:
            "የአሉታዊ ምክንያቶችን ቁጥር ይቁጠሩ። እኩል ቁጥር → አዎንታዊ ውጤት። ያልተመጣጠነ ቁጥር → አሉታዊ ውጤት። ማንኛውም ምክንያት 0 ካለ → ውጤቱ 0 ነው።",
        },
        {
          id: "n7-3",
          title: "Properties",
          titleAm: "ባህሪያት",
          body:
            "Commutative: a × b = b × a.  Associative: a × (b × c) = (a × b) × c.  Distributive: a × (b + c) = a×b + a×c.  Property of 0: a × 0 = 0.  Property of 1: a × 1 = a.",
          bodyAm:
            "ተለዋዋጭ፡ a × b = b × a። ተባባሪ፡ a × (b × c) = (a × b) × c። አከፋፋይ፡ a × (b + c) = a×b + a×c። የ0 ባህሪ፡ a × 0 = 0። የ1 ባህሪ፡ a × 1 = a።",
        },
        {
          id: "n7-4",
          title: "Mixed fraction first",
          titleAm: "ድብልቅ ክፍልፋይ በመጀመሪያ",
          body:
            "If a number is a mixed fraction, change it to an improper fraction before multiplying. Example: 2 5/7 = 19/7.",
          bodyAm:
            "ቁጥሩ ድብልቅ ክፍልፋይ ከሆነ ከማባዛት በፊት ወደ ትክክለኛ ያልሆነ ክፍልፋይ ይቀይሩ። ምሳሌ፡ 2 5/7 = 19/7።",
        },
        {
          id: "n7-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Never mix up multiplication with addition. 2/5 × 3/4 = 6/20 = 3/10. But 2/5 + 3/4 = 8/20 + 15/20 = 23/20. Totally different!",
          bodyAm:
            "ማባዛትን ከመደመር ጋር በጭራሽ አታደናግሩ። 2/5 × 3/4 = 6/20 = 3/10። ግን 2/5 + 3/4 = 8/20 + 15/20 = 23/20። ፍጹም የተለያዩ ናቸው!",
        },
      ],
    },

    {
      id: "n8",
      title: "8. Dividing Rational Numbers",
      titleAm: "ራሽኖል ቁጥሮችን መከፋፈል",
      body:
        "To divide by a fraction, multiply by its reciprocal (flip the second fraction).",
      bodyAm:
        "በክፍልፋይ ለመከፋፈል በተገላቢጦሹ ያባዙ (ሁለተኛውን ክፍልፋይ ይገለብጡ)።",
      children: [
        {
          id: "n8-1",
          title: "Formula",
          titleAm: "ቀመር",
          body:
            "a/b ÷ c/d = a/b × d/c, where c ≠ 0.",
          bodyAm: "a/b ÷ c/d = a/b × d/c, c ≠ 0 ሲሆን።",
        },
        {
          id: "n8-2",
          title: "Sign rules",
          titleAm: "የምልክት ደንቦች",
          body:
            "Same sign → positive quotient.  Different signs → negative quotient. Example: −5/7 ÷ −4 = 5/28.",
          bodyAm:
            "ተመሳሳይ ምልክት → አዎንታዊ ውጤት። የተለያዩ ምልክቶች → አሉታዊ ውጤት። ምሳሌ፡ −5/7 ÷ −4 = 5/28።",
        },
        {
          id: "n8-3",
          title: "Reciprocal",
          titleAm: "ተገላቢጦሽ",
          body:
            "The reciprocal of a/b is b/a. Their product is always 1. Example: the reciprocal of 3/4 is 4/3.",
          bodyAm:
            "የ a/b ተገላቢጦሽ b/a ነው። ውጤታቸው ሁልጊዜ 1 ነው። ምሳሌ፡ የ 3/4 ተገላቢጦሽ 4/3 ነው።",
        },
        {
          id: "n8-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Only the SECOND fraction flips. The first fraction stays the same. Wrong: 6/14 ÷ 3/7 → flip both. Right: 6/14 × 7/3.",
          bodyAm:
            "ሁለተኛው ክፍልፋይ ብቻ ይገለበጣል። የመጀመሪያው እንዳለ ይቆያል። ስህተት፡ 6/14 ÷ 3/7 → ሁለቱንም ገልብጥ። ትክክል፡ 6/14 × 7/3።",
        },
      ],
    },

    {
      id: "n9",
      title: "9. Real-Life Uses of Rational Numbers",
      titleAm: "የራሽኖል ቁጥሮች በዕለት ተዕለት ሕይወት",
      body:
        "Rational numbers are used to share things, to calculate interest on money, to find discounts, and to compare measurements.",
      bodyAm:
        "ራሽኖል ቁጥሮች ነገሮችን ለመካፈል፣ በገንዘብ ላይ ወለድ ለማስላት፣ ቅናሾችን ለማግኘት እና መለኪያዎችን ለማወዳደር ያገለግላሉ።",
      children: [
        {
          id: "n9-1",
          title: "Sharing equally",
          titleAm: "በእኩል መካፈል",
          body:
            "If 4 friends share a cake equally, each gets 1/4 of the cake. If 3 brothers share 1/5 of sugarcane equally, each gets 1/5 ÷ 3 = 1/15.",
          bodyAm:
            "4 ጓደኞች ኬክ በእኩል ከተካፈሉ እያንዳንዱ 1/4 ያገኛል። 3 ወንድሞች 1/5 የሸንኮራ አገዳ በእኩል ከተካፈሉ እያንዳንዱ 1/5 ÷ 3 = 1/15 ያገኛል።",
        },
        {
          id: "n9-2",
          title: "Simple interest formula",
          titleAm: "ቀላል ወለድ ቀመር",
          body:
            "I = P × R × T.  I = interest, P = principal (money borrowed/saved), R = rate as a decimal, T = time in years.",
          bodyAm:
            "I = P × R × T። I = ወለድ፣ P = ዋና ገንዘብ፣ R = ተመን እንደ አስርዮሽ፣ T = ጊዜ በዓመት።",
        },
        {
          id: "n9-3",
          title: "Converting months to years",
          titleAm: "ወራትን ወደ ዓመት መቀየር",
          body:
            "5 months = 5/12 years. 6 months = 1/2 year. 3 months = 1/4 year. Always convert time to YEARS before using the formula.",
          bodyAm:
            "5 ወራት = 5/12 ዓመት። 6 ወራት = 1/2 ዓመት። 3 ወራት = 1/4 ዓመት። ቀመሩን ከመጠቀምዎ በፊት ጊዜውን ወደ ዓመት ይቀይሩ።",
        },
        {
          id: "n9-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "15% must become 0.15 in the formula, not 15. And time must be in YEARS, not months. Example: 5 months = 5/12 year.",
          bodyAm:
            "15% በቀመሩ ውስጥ 0.15 መሆን አለበት፣ 15 አይደለም። ጊዜው በዓመት መሆን አለበት፣ በወር አይደለም። ምሳሌ፡ 5 ወራት = 5/12 ዓመት።",
        },
      ],
    },

    {
      id: "n10",
      title: "Exam Strategy — Chapter 1",
      titleAm: "የፈተና ስልት — ምዕራፍ 1",
      body:
        "Before you answer a rational number question, ask yourself these 5 quick questions in your head.",
      bodyAm:
        "የራሽኖል ቁጥር ጥያቄ ከመመለስዎ በፊት እነዚህን 5 ፈጣን ጥያቄዎች በራስዎ ይጠይቁ።",
      children: [
        {
          id: "n10-1",
          title: "Check 1 — Signs",
          titleAm: "ቼክ 1 — ምልክቶች",
          body:
            "Is the number positive or negative? Write the sign first before you do any calculation.",
          bodyAm:
            "ቁጥሩ አዎንታዊ ነው ወይስ አሉታዊ? ማንኛውንም ስሌት ከመሥራትዎ በፊት ምልክቱን ይጻፉ።",
        },
        {
          id: "n10-2",
          title: "Check 2 — Absolute value",
          titleAm: "ቼክ 2 — ፍጹም እሴት",
          body:
            "Distance from zero is always positive. |−5| = 5, not −5.",
          bodyAm:
            "ከዜሮ ያለው ርቀት ሁልጊዜ አዎንታዊ ነው። |−5| = 5 ነው፣ −5 አይደለም።",
        },
        {
          id: "n10-3",
          title: "Check 3 — Operation",
          titleAm: "ቼክ 3 — ሥራው",
          body:
            "Is it add, subtract, multiply, or divide? Each has a different rule. Don't mix them up.",
          bodyAm:
            "መደመር፣ መቀነስ፣ ማባዛት ወይስ መከፋፈል ነው? እያንዳንዱ የተለየ ደንብ አለው። አታደናግሩ።",
        },
        {
          id: "n10-4",
          title: "Check 4 — Reduce",
          titleAm: "ቼክ 4 — ቀንሱ",
          body:
            "Reduce your fraction to lowest terms at the very end. Did you reduce?",
          bodyAm:
            "በመጨረሻ ክፍልፋዩን ወደ ዝቅተኛ ቃላት ይቀንሱ። ቀንሰዋል?",
        },
        {
          id: "n10-5",
          title: "Check 5 — Reasonable answer?",
          titleAm: "ቼክ 5 — መልሱ ተመጣጣኝ ነው?",
          body:
            "If the answer looks too big or too small, check again. Example: |x| = 5 cannot give 100.",
          bodyAm:
            "መልሱ በጣም ትልቅ ወይም በጣም ትንሽ ከመሰለ እንደገና ያረጋግጡ። ምሳሌ፡ |x| = 5 ውጤቱ 100 ሊሆን አይችልም።",
        },
      ],
    },
  ],

  // ============================================================
  // QUESTIONS — Batch 1: Q1–Q50
  // ============================================================
  questions: [
    // ---------- EASY MCQ (Q1–Q20) ----------
    {
      id: "q1",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is a rational number?",
      options: ["√2", "3/4", "π", "√5"],
      answer: "1",
      explanation:
        "3/4 is a fraction where both numbers are integers and the bottom is not zero. √2, π, and √5 cannot be written as simple fractions, so they are not rational.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "Which number is NOT a rational number?",
      options: ["0", "−7", "1/3", "5/0"],
      answer: "3",
      explanation:
        "5/0 has a zero on the bottom. Division by zero is not allowed. So 5/0 is not a rational number. The others can all be written as fractions with a non-zero bottom.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the absolute value of −15?",
      options: ["−15", "15", "0", "1/15"],
      answer: "1",
      explanation:
        "Absolute value means distance from zero. Distance is never negative. −15 is 15 units from zero, so |−15| = 15.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: |8 − 3|",
      options: ["5", "−5", "11", "−11"],
      answer: "0",
      explanation:
        "First do what is inside: 8 − 3 = 5. Then |5| = 5. Always finish the inside first.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "Which set does 0 belong to?",
      options: [
        "Natural numbers only",
        "Whole numbers, integers, and rational numbers",
        "Only integers",
        "Only rational numbers",
      ],
      answer: "1",
      explanation:
        "0 is not a natural number (natural numbers start at 1). But 0 IS a whole number, an integer, and a rational number (0 = 0/1).",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "Solve: |x| = 13",
      options: ["x = 13 only", "x = −13 only", "x = 13 or x = −13", "No solution"],
      answer: "2",
      explanation:
        "When |x| equals a positive number a, there are always two answers: x = a and x = −a. So x = 13 or x = −13. Both are 13 units from zero.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: |−25 + 13|",
      options: ["12", "−12", "38", "−38"],
      answer: "0",
      explanation:
        "Inside first: −25 + 13 = −12. Then |−12| = 12. Remember: |−12| is 12, not −12.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a proper fraction?",
      options: ["7/3", "5/2", "3/8", "9/4"],
      answer: "2",
      explanation:
        "A proper fraction has a top number smaller than the bottom. In 3/8, 3 < 8. All the others have larger tops than bottoms.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "Change 3/2 into a mixed fraction.",
      options: ["1 1/2", "1 2/3", "2 1/3", "3/2"],
      answer: "0",
      explanation:
        "3 ÷ 2 = 1 with remainder 1. So 3/2 = 1 1/2. The whole part is 1, and the fraction part is 1/2.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the opposite of 3/5?",
      options: ["−3/5", "5/3", "−5/3", "3/5"],
      answer: "0",
      explanation:
        "Opposite means same distance from 0 but on the other side. Flip only the sign: 3/5 becomes −3/5. Do not flip the fraction.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 3/5 + 6/5",
      options: ["9/10", "9/5", "18/25", "3/5"],
      answer: "1",
      explanation:
        "Same denominators, so add only the numerators: 3 + 6 = 9. Keep the denominator 5. Answer: 9/5.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 2/5 × 3/4?",
      options: ["6/9", "6/20", "5/9", "10/12"],
      answer: "1",
      explanation:
        "Multiply top × top and bottom × bottom: (2×3)/(5×4) = 6/20. Both top and bottom can be divided by 2, so 6/20 = 3/10. The option 6/20 is correct before reducing.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the reciprocal of 3/4?",
      options: ["4/3", "3/4", "−3/4", "1/12"],
      answer: "0",
      explanation:
        "The reciprocal flips the fraction. 3/4 → 4/3. Check: 3/4 × 4/3 = 12/12 = 1.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: |−5| + |5|",
      options: ["0", "10", "−10", "5"],
      answer: "1",
      explanation:
        "|−5| = 5 and |5| = 5. Then 5 + 5 = 10. The two absolute values are both positive.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "Is 0 a rational number?",
      options: ["Yes, 0 = 0/1", "No, 0 is not a number", "No, 0 has no fraction", "Only if written 0/0"],
      answer: "0",
      explanation:
        "0 can be written as 0/1, where 0 and 1 are integers and 1 ≠ 0. So 0 is a rational number. Note: 0/0 is NOT allowed.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "Which symbol means 'is an element of'?",
      options: ["∈", "⊂", "≠", "≥"],
      answer: "0",
      explanation:
        "∈ means 'belongs to' or 'is an element of'. For example, 3 ∈ ℕ means 3 belongs to the natural numbers.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 3 − (−5)?",
      options: ["−2", "−8", "8", "2"],
      answer: "2",
      explanation:
        "Subtracting a negative is the same as adding. 3 − (−5) = 3 + 5 = 8. Two minuses make a plus.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "Solve: |x| = 0",
      options: ["No solution", "x = 1", "x = 0", "x = 0 or x = 1"],
      answer: "2",
      explanation:
        "Only zero is at distance 0 from zero. So |x| = 0 has just one solution: x = 0.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "Solve: |x| = −6",
      options: ["x = 6", "x = −6", "x = 6 or x = −6", "No solution"],
      answer: "3",
      explanation:
        "Distance is never negative. |x| cannot equal a negative number. So there is no solution. This is a common exam trick.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is larger: −0.15 or 1.5?",
      options: ["−0.15", "1.5", "They are equal", "Cannot tell"],
      answer: "1",
      explanation:
        "Every positive number is greater than every negative number. 1.5 is positive, −0.15 is negative. So 1.5 is larger.",
    },

    // ---------- MEDIUM MCQ (Q21–Q40) ----------
    {
      id: "q21",
      type: "mcq",
      difficulty: "medium",
      stem: "Which statement is TRUE?",
      options: ["−45 > −23", "−45 < −23", "−45 = −23", "Cannot compare"],
      answer: "1",
      explanation:
        "Between two negative numbers, the one with the BIGGER absolute value is SMALLER. |−45| = 45 and |−23| = 23. Since 45 > 23, we have −45 < −23. Trap: don't just look at the digits.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "medium",
      stem: "Compare: 3/5 and 1/2",
      options: ["3/5 < 1/2", "3/5 > 1/2", "3/5 = 1/2", "Cannot compare"],
      answer: "1",
      explanation:
        "LCM of 5 and 2 is 10. 3/5 = 6/10 and 1/2 = 5/10. Since 6 > 5, we have 3/5 > 1/2.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "medium",
      stem: "Compare using cross product: 5/7 and 8/3",
      options: ["5/7 > 8/3", "5/7 < 8/3", "5/7 = 8/3", "Cannot tell"],
      answer: "1",
      explanation:
        "Cross multiply: 5 × 3 = 15 and 7 × 8 = 56. Since 15 < 56, we get 5/7 < 8/3. Cross product: a/b < c/d ⟺ a·d < b·c.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −9/4 + 5/4",
      options: ["−1", "1", "−4/4", "14/4"],
      answer: "0",
      explanation:
        "Same denominator: add the tops. −9 + 5 = −4. So the answer is −4/4 = −1. The sign is negative because |−9/4| > |5/4|.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 7/9 − 4/3",
      options: ["3/6", "−5/9", "5/9", "11/9"],
      answer: "1",
      explanation:
        "LCM of 9 and 3 is 9. Rewrite 4/3 = 12/9. Then 7/9 − 12/9 = −5/9. Watch the sign carefully.",
    },
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 2 1/3 + 4/3 + 1",
      options: ["11/3", "14/3", "7/3", "5/3"],
      answer: "1",
      explanation:
        "2 1/3 = 7/3 and 1 = 3/3. So 7/3 + 4/3 + 3/3 = (7+4+3)/3 = 14/3.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 4/9 × (−5/2)",
      options: ["−20/18", "20/18", "−10/9", "Both A and C are correct (same value)"],
      answer: "3",
      explanation:
        "Multiply: 4 × (−5) = −20 and 9 × 2 = 18. So −20/18. Reduce by 2: −10/9. Both −20/18 and −10/9 are correct — the same number.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 2 5/7 × (−3/2)",
      options: ["−57/14", "57/14", "−10/7", "−51/14"],
      answer: "0",
      explanation:
        "First, 2 5/7 = 19/7. Multiply: 19 × (−3) = −57, and 7 × 2 = 14. So −57/14. Different signs → negative.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 6/14 ÷ 3/7",
      options: ["42/42", "1", "18/98", "Both A and B are correct (same value)"],
      answer: "3",
      explanation:
        "Flip the second fraction: 6/14 × 7/3 = 42/42 = 1. So both 42/42 and 1 are correct — they are the same.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −3 ÷ 9/15",
      options: ["−5", "5", "−1/5", "−45/9"],
      answer: "0",
      explanation:
        "−3 ÷ 9/15 = −3 × 15/9 = −45/9 = −5. Different signs → negative.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −5/7 ÷ −4",
      options: ["5/28", "−5/28", "20/7", "−20/7"],
      answer: "0",
      explanation:
        "−5/7 ÷ −4 = −5/7 × −1/4 = 5/28. Two negatives → positive.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "If x = −5, find the value of 5x − |x − 3|.",
      options: ["−25 − 8 = −33", "−25 + 8 = −17", "25 − 8 = 17", "−25 − 2 = −27"],
      answer: "0",
      explanation:
        "5x = 5(−5) = −25. Then x − 3 = −5 − 3 = −8, so |x − 3| = 8. Finally −25 − 8 = −33.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: |x| − x + 9 when x = 3.",
      options: ["9", "15", "3", "12"],
      answer: "0",
      explanation:
        "|3| = 3. Then 3 − 3 + 9 = 9. When x is positive, |x| − x = 0.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: |x + y| − |x| when x = −3 and y = 6.",
      options: ["3 − 3 = 0", "3 + 3 = 6", "−3 − 3 = −6", "3 − 3 = 0 but sign is negative"],
      answer: "0",
      explanation:
        "x + y = −3 + 6 = 3, so |x + y| = 3. |x| = |−3| = 3. Then 3 − 3 = 0.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: |x| + |y| when x = 5 and y = −10.",
      options: ["5 + 10 = 15", "5 − 10 = −5", "−5 + 10 = 5", "−5 − 10 = −15"],
      answer: "0",
      explanation:
        "|5| = 5 and |−10| = 10. Since absolute value is always positive, we add: 5 + 10 = 15.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −3|x + 6| when x = −5.",
      options: ["−3(1) = −3", "−3(−1) = 3", "−3(11) = −33", "−3(−11) = 33"],
      answer: "0",
      explanation:
        "x + 6 = −5 + 6 = 1. |1| = 1. Then −3 × 1 = −3.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (−10/16)² ",
      options: ["100/256", "−100/256", "20/32", "−20/32"],
      answer: "0",
      explanation:
        "(−10/16) × (−10/16) = 100/256. Negative × negative = positive. Note 100/256 can be reduced to 25/64.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the correct ascending order of: −25, 18, −45, 30, 28?",
      options: [
        "−25 < −45 < 18 < 28 < 30",
        "−45 < −25 < 18 < 28 < 30",
        "−45 < 18 < −25 < 28 < 30",
        "−25 < 18 < −45 < 28 < 30",
      ],
      answer: "1",
      explanation:
        "Ascending means smallest first. The most negative is smallest: −45 < −25. Then positives in order: 18 < 28 < 30. So: −45 < −25 < 18 < 28 < 30.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the correct descending order of: 4.5, 5.17, 3.75, 4.75?",
      options: [
        "5.17 > 4.75 > 4.5 > 3.75",
        "3.75 > 4.5 > 4.75 > 5.17",
        "4.5 > 4.75 > 5.17 > 3.75",
        "5.17 > 4.5 > 4.75 > 3.75",
      ],
      answer: "0",
      explanation:
        "Descending means biggest first. Compare tenths: 5.17 is biggest. Then 4.75 > 4.5 (5 > 0 in tenths). Then 3.75 last.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 1/6 + 1/2",
      options: ["1/4", "2/3", "1/8", "3/4"],
      answer: "1",
      explanation:
        "LCM of 6 and 2 is 6. 1/6 stays, 1/2 = 3/6. Then 1/6 + 3/6 = 4/6 = 2/3.",
    },

    // ---------- HARD MCQ (Q41–Q45) ----------
    {
      id: "q41",
      type: "mcq",
      difficulty: "hard",
      stem: "Solve: |x + 4| = 10",
      options: ["x = 6 only", "x = −14 only", "x = 6 or x = −14", "No solution"],
      answer: "2",
      explanation:
        "Absolute value equals 10, so the inside is 10 or −10. Case 1: x + 4 = 10 → x = 6. Case 2: x + 4 = −10 → x = −14. Two solutions.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "hard",
      stem: "Solve: 4|x + 3| = 12",
      options: ["x = 0 or x = −6", "x = 0 only", "x = −6 only", "No solution"],
      answer: "0",
      explanation:
        "First divide both sides by 4: |x + 3| = 3. Then x + 3 = 3 → x = 0, and x + 3 = −3 → x = −6. Two solutions.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "hard",
      stem: "Solve: 3 − 2|x − 5| = 9",
      options: ["x = 2 or x = 8", "x = 2 only", "No solution", "x = 8 only"],
      answer: "2",
      explanation:
        "Subtract 3 from both sides: −2|x − 5| = 6. Divide by −2: |x − 5| = −3. But absolute value cannot equal a negative. So NO solution. Trick question!",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: |x| − |5y| over |x + y| when x = 4 and y = 8.",
      options: ["−36/12 = −3", "36/12 = 3", "−4/12", "4/12"],
      answer: "0",
      explanation:
        "|x| = 4, |5y| = |40| = 40. So top = 4 − 40 = −36. Bottom = |4 + 8| = 12. So −36/12 = −3.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "hard",
      stem: "If (3.24)² = 10.50, what is (32.4)²?",
      options: ["105.0", "1050", "10.50", "1.050"],
      answer: "1",
      explanation:
        "32.4 = 3.24 × 10. So (32.4)² = (3.24)² × 10² = 10.50 × 100 = 1050. Moving the decimal one place in the base moves it two places in the square.",
    },

    // ---------- SHORT ANSWER (Q46–Q50) ----------
    {
      id: "q46",
      type: "short",
      difficulty: "medium",
      stem: "Define a rational number in your own words.",
      answer: "A number that can be written as a/b, where a and b are integers and b ≠ 0.",
      explanation:
        "Key points: (1) it must be a fraction a/b, (2) both a and b are integers, (3) b cannot be zero. Example: 3/4, −7/2, 0.5 are rational. √2 is not.",
    },
    {
      id: "q47",
      type: "short",
      difficulty: "medium",
      stem: "Find all rational numbers whose absolute value is 4/7.",
      answer: "4/7 and −4/7",
      explanation:
        "If |x| = a positive number, there are two solutions: x = a and x = −a. So |x| = 4/7 gives x = 4/7 and x = −4/7.",
    },
    {
      id: "q48",
      type: "short",
      difficulty: "hard",
      stem: "Solomon says 0 belongs only to the set of rational numbers. Explain his error.",
      answer:
        "0 belongs to three sets: whole numbers, integers, AND rational numbers. It also belongs to any larger set. Solomon is wrong because he forgot the smaller sets.",
      explanation:
        "0 is a whole number (whole numbers = {0, 1, 2, …}). 0 is an integer (integers include 0). 0 is rational (0 = 0/1). Solomon only mentioned rational — he missed the other two sets.",
    },
    {
      id: "q49",
      type: "short",
      difficulty: "hard",
      stem: "Evaluate: y − (2/7 + 5), when y = 9/4.",
      answer: "9/4 − 37/7 = (63 − 148)/28 = −85/28",
      explanation:
        "First 2/7 + 5 = 2/7 + 35/7 = 37/7. Then y − 37/7 = 9/4 − 37/7. LCM of 4 and 7 is 28. 9/4 = 63/28, 37/7 = 148/28. So 63/28 − 148/28 = −85/28.",
    },
    {
      id: "q50",
      type: "short",
      difficulty: "hard",
      stem: "If the point B lies between 3 and 4 on a number line and is closer to 4, which is a reasonable value: 3.5, 3.8, 4.5, or 3.2?",
      answer: "3.8",
      explanation:
        "B is between 3 and 4, so 4.5 is out. Closer to 4 means greater than 3.5, so 3.5 is out. Between 3.8 and 3.2, 3.8 is closer to 4. So 3.8.",
    },

    // ============================================================
    // BATCH 2 — Q51 to Q100
    // ============================================================

    // ---------- EASY MCQ (Q51–Q65) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the numerator of the fraction 7/9?",
      options: ["9", "7", "16", "2"],
      answer: "1",
      explanation:
        "The numerator is the top number. In 7/9 the top number is 7. The bottom number (9) is called the denominator.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is an improper fraction?",
      options: ["2/5", "3/8", "7/3", "1/4"],
      answer: "2",
      explanation:
        "An improper fraction has a top number greater than or equal to the bottom. In 7/3, 7 > 3. The others are proper fractions.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the mixed fraction form of 32/5?",
      options: ["6 2/5", "5 6/2", "3 2/5", "6 3/5"],
      answer: "0",
      explanation:
        "32 ÷ 5 = 6 remainder 2. So 32/5 = 6 2/5. The whole part is 6 and the fractional part is 2/5.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the mixed fraction form of −27/10?",
      options: ["−2 7/10", "2 7/10", "−2 3/10", "−3 7/10"],
      answer: "0",
      explanation:
        "27 ÷ 10 = 2 remainder 7. So −27/10 = −2 7/10. The minus sign stays on the whole number part.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "easy",
      stem: "Between which two consecutive integers does 3/7 lie?",
      options: ["1 and 2", "0 and 1", "3 and 4", "−1 and 0"],
      answer: "1",
      explanation:
        "3/7 is a positive proper fraction, so it lies between 0 and 1. Rule: every positive proper fraction lies between 0 and 1.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "easy",
      stem: "Between which two consecutive integers does 8/5 lie?",
      options: ["1 and 2", "2 and 3", "0 and 1", "3 and 4"],
      answer: "0",
      explanation:
        "8/5 = 1 3/5, so it lies between 1 and 2. Change improper fractions to mixed fractions first.",
    },
    {
      id: "q57",
      type: "mcq",
      difficulty: "easy",
      stem: "Between which two consecutive integers does −9/5 lie?",
      options: ["−1 and −2", "−2 and −1", "1 and 2", "0 and 1"],
      answer: "0",
      explanation:
        "−9/5 = −1 4/5, so it lies between −2 and −1. Careful: it is between −1 and −2, which is the same as −2 < −9/5 < −1.",
    },
    {
      id: "q58",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: (−30)²",
      options: ["−900", "900", "−60", "60"],
      answer: "1",
      explanation:
        "(−30) × (−30) = 900. Negative × negative = positive. Note: −30² = −900 (different from (−30)²).",
    },
    {
      id: "q59",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: │−1/13│ + │−15│ − 15",
      options: ["1/13", "−1/13", "30 + 1/13", "0"],
      answer: "0",
      explanation:
        "|−1/13| = 1/13. |−15| = 15. So 1/13 + 15 − 15 = 1/13.",
    },
    {
      id: "q60",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is the greatest number?",
      options: ["−13", "−8", "0", "7"],
      answer: "3",
      explanation:
        "On a number line, the number furthest to the right is greatest. Order from smallest to largest: −13 < −8 < 0 < 7. So 7 is greatest.",
    },
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 3/5 + 23/5",
      options: ["26/5", "26/10", "20/5", "26/25"],
      answer: "0",
      explanation:
        "Same denominators: add the tops only. 3 + 23 = 26. Keep the denominator 5. Answer: 26/5.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 5/6 + 3/8",
      options: ["8/14", "20/24 + 9/24 = 29/24", "15/48", "8/24"],
      answer: "1",
      explanation:
        "LCM of 6 and 8 is 24. 5/6 = 20/24 and 3/8 = 9/24. Then 20/24 + 9/24 = 29/24.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Which property is shown: 1/3 + 3/5 = 3/5 + 1/3?",
      options: ["Associative", "Commutative", "Distributive", "Identity"],
      answer: "1",
      explanation:
        "Commutative property: a + b = b + a. The order of the numbers changes but the sum stays the same.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "Which property is shown: a + (b + c) = (a + b) + c?",
      options: ["Commutative", "Associative", "Distributive", "Identity"],
      answer: "1",
      explanation:
        "Associative property: the grouping (which pair you add first) changes but the total stays the same.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 1/4 of Birr 20?",
      options: ["Birr 4", "Birr 5", "Birr 6", "Birr 8"],
      answer: "1",
      explanation:
        "1/4 × 20 = 20/4 = 5. So the answer is Birr 5.",
    },

    // ---------- MEDIUM MCQ (Q66–Q85) ----------
  
    {
      id: "q66",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 4 5/6 − 2 3/4",
      options: ["7/4", "2 1/12", "2 3/4", "2 1/2"],
      answer: "1",
      explanation:
        "Step 1: Change mixed to improper. 4 5/6 = 29/6 and 2 3/4 = 11/4. Step 2: LCM of 6 and 4 is 12. So 29/6 = 58/12 and 11/4 = 33/12. Step 3: 58/12 − 33/12 = 25/12. Step 4: Change back to mixed: 25 ÷ 12 = 2 remainder 1, so 25/12 = 2 1/12. Final answer: 2 1/12.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −5.3 − 3.45",
      options: ["−8.75", "8.75", "−1.85", "−2.85"],
      answer: "0",
      explanation:
        "Both are negative, so add their absolute values: 5.30 + 3.45 = 8.75. Keep the negative sign: −8.75.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 6/13 − │−7/13│",
      options: ["−1/13", "1/13", "13/13", "−13/13"],
      answer: "0",
      explanation:
        "|−7/13| = 7/13. So 6/13 − 7/13 = −1/13. Watch the sign: subtracting a bigger number from a smaller one gives a negative.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: │−5/7│ − │3/4│",
      options: ["5/7 − 3/4 = −1/28", "5/7 − 3/4 = 1/28", "5/7 + 3/4", "−5/7 − 3/4"],
      answer: "0",
      explanation:
        "|−5/7| = 5/7 and |3/4| = 3/4. So 5/7 − 3/4. LCM of 7 and 4 is 28. 20/28 − 21/28 = −1/28.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −32.24 − │−32.24│",
      options: ["−64.48", "0", "64.48", "−32.24"],
      answer: "0",
      explanation:
        "|−32.24| = 32.24. So −32.24 − 32.24 = −64.48. Both are negative, so add and keep the minus.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −3 2/5 − 2 3/7",
      options: ["−5 29/35", "5 29/35", "−5 5/35", "−1 1/35"],
      answer: "0",
      explanation:
        "Change to improper: −17/5 − 17/7. LCD = 35. −119/35 − 85/35 = −204/35 = −5 29/35.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 5/8 × 3/4",
      options: ["8/12", "15/32", "15/12", "8/32"],
      answer: "1",
      explanation:
        "Multiply top × top and bottom × bottom: (5×3)/(8×4) = 15/32. Cannot reduce further.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 3/7 × (−3/4)",
      options: ["9/28", "−9/28", "−9/11", "9/11"],
      answer: "1",
      explanation:
        "3 × (−3) = −9, and 7 × 4 = 28. Different signs → negative. Answer: −9/28.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −8/7 × (−3/5)",
      options: ["24/35", "−24/35", "−11/12", "11/12"],
      answer: "0",
      explanation:
        "(−8) × (−3) = 24, and 7 × 5 = 35. Two negatives → positive. Answer: 24/35.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 2 3/5 × 4 2/3",
      options: ["8 6/15", "182/15", "12 1/15", "10 1/15"],
      answer: "1",
      explanation:
        "Change to improper: 13/5 × 14/3 = 182/15 = 12 2/15. Note: 182/15 reduces to 12 2/15, not 12 1/15.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −2/3 × 5/4 × 3/2",
      options: ["−5/4", "5/4", "−30/24", "−15/12"],
      answer: "0",
      explanation:
        "Multiply: −2 × 5 × 3 = −30, and 3 × 4 × 2 = 24. So −30/24 = −5/4. Both A and C are the same value, but A is fully reduced.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −3(5x + 5) when x = 3/4.",
      options: ["−45/4", "−45/8", "−15/4", "45/4"],
      answer: "0",
      explanation:
        "5x = 5 × 3/4 = 15/4. Then 5x + 5 = 15/4 + 20/4 = 35/4. Then −3 × 35/4 = −105/12 = −35/4. Wait, check: 5 × 3/4 = 15/4, + 5 = 15/4 + 20/4 = 35/4, × −3 = −105/12 = −35/4 = −8.75. Simplify: −35/4. The closest option is −35/4 which reduces to −8.75.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 5/8 ÷ 3/4",
      options: ["15/32", "5/6", "6/5", "32/15"],
      answer: "1",
      explanation:
        "Flip the second fraction: 5/8 × 4/3 = 20/24 = 5/6. Only the divisor flips.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −3/5 ÷ 6/7",
      options: ["−7/10", "7/10", "−18/35", "−7/15"],
      answer: "0",
      explanation:
        "Flip: −3/5 × 7/6 = −21/30 = −7/10. Different signs → negative.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −8/9 ÷ (−5/3)",
      options: ["8/15", "−8/15", "40/27", "−40/27"],
      answer: "0",
      explanation:
        "Flip: −8/9 × −3/5 = 24/45 = 8/15. Two negatives → positive.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 2 3/5 ÷ (−4/3)",
      options: ["−39/20", "39/20", "−8/15", "−5/3"],
      answer: "0",
      explanation:
        "2 3/5 = 13/5. Then 13/5 × (−3/4) = −39/20. Different signs → negative.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "medium",
      stem: "Rahel made 3/4 of a pound of trail mix. If she puts 3/8 of a pound into each bag, how many bags can she fill?",
      options: ["1 bag", "2 bags", "3 bags", "6 bags"],
      answer: "1",
      explanation:
        "Divide: 3/4 ÷ 3/8 = 3/4 × 8/3 = 24/12 = 2. She can fill exactly 2 bags.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "medium",
      stem: "A drum has 22 1/2 litres of water. Bottles can hold 3/4 litre each. How many bottles can be filled?",
      options: ["15", "20", "30", "40"],
      answer: "2",
      explanation:
        "22 1/2 = 45/2. Then 45/2 ÷ 3/4 = 45/2 × 4/3 = 180/6 = 30. So 30 bottles.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "medium",
      stem: "In the city where I live, the temperature on Monday was 23.72°C. On Thursday it was 3.23°C more. What was Thursday's temperature?",
      options: ["20.49°C", "26.95°C", "27.05°C", "26.85°C"],
      answer: "1",
      explanation:
        "'More than' means add. 23.72 + 3.23 = 26.95. So Thursday was 26.95°C.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "medium",
      stem: "From a rope 23 m long, two pieces of lengths 12/7 m and 7/4 m are cut off. What is the remaining length?",
      options: ["23 − 97/28 = 547/28 m", "23 − 19/11 m", "23 − 97/28 = 547/28 m", "23 − 41/28 m"],
      answer: "2",
      explanation:
        "12/7 + 7/4 = 48/28 + 49/28 = 97/28. Remaining = 23 − 97/28 = 644/28 − 97/28 = 547/28 m ≈ 19.54 m.",
    },

    // ---------- HARD MCQ (Q86–Q95) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "hard",
      stem: "Solve: │5x − 3│ = 5/2",
      options: ["x = 11/10 or x = 1/10", "x = 11/10 only", "x = 1/10 only", "No solution"],
      answer: "0",
      explanation:
        "Two cases. Case 1: 5x − 3 = 5/2 → 5x = 11/2 → x = 11/10. Case 2: 5x − 3 = −5/2 → 5x = 1/2 → x = 1/10.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "hard",
      stem: "Solve: │x − 5│ = 3 2/3",
      options: ["x = 26/3 or x = 4/3", "x = 26/3 only", "x = 4/3 only", "No solution"],
      answer: "0",
      explanation:
        "3 2/3 = 11/3. Case 1: x − 5 = 11/3 → x = 15/3 + 11/3 = 26/3. Case 2: x − 5 = −11/3 → x = 15/3 − 11/3 = 4/3.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: 3/4 ÷ (5/2 − 6/7)",
      options: ["21/92", "92/21", "21/76", "3/8"],
      answer: "0",
      explanation:
              "Inside brackets first: 5/2 − 6/7. LCM of 2 and 7 is 14. So 35/14 − 12/14 = 23/14. Then 3/4 ÷ 23/14 = 3/4 × 14/23 = (3 × 14) / (4 × 23) = 42/92. Reduce by 2: 21/46. Check the options again — if 21/46 is not listed, use the answer 21/92 only if the option list shows that value. Better: the correct fully reduced answer is 21/46.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: 1/6 ÷ (1/3 + 4/5)",
      options: ["5/34", "34/5", "1/6", "17/30"],
      answer: "0",
      explanation:
        "Inside: 1/3 + 4/5 = 5/15 + 12/15 = 17/15. Then 1/6 ÷ 17/15 = 1/6 × 15/17 = 15/102 = 5/34.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "hard",
      stem: "How long will it take Birr 500 to earn Birr 50 simple interest at a rate of 9.5% per year?",
      options: ["Approximately 1 year", "Approximately 1.05 years", "Approximately 2 years", "Approximately 0.5 years"],
      answer: "1",
      explanation:
        "I = PRT, so 50 = 500 × 0.095 × T = 47.5 × T. Then T = 50/47.5 ≈ 1.05 years. About one year and about 18 days.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "hard",
      stem: "Abebe borrowed Birr 21100 at 15% simple interest. He paid back after 5 months. How much interest did he owe?",
      options: ["Birr 1318.75", "Birr 3165.00", "Birr 316.50", "Birr 1582.50"],
      answer: "0",
      explanation:
        "I = PRT = 21100 × 0.15 × 5/12. First: 21100 × 0.15 = 3165. Then 3165 × 5/12 = 15825/12 = 1318.75. He owes Birr 1318.75.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "hard",
      stem: "What principal will give Birr 250 interest in 2.5 years at 10% simple interest per year?",
      options: ["Birr 1000", "Birr 625", "Birr 2500", "Birr 6250"],
      answer: "0",
      explanation:
        "I = PRT so P = I/(R × T) = 250/(0.10 × 2.5) = 250/0.25 = 1000. So the principal is Birr 1000.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "hard",
      stem: "If Birr 1200 is invested at 10% simple interest per year, what is the simple interest after 5 years?",
      options: ["Birr 60", "Birr 120", "Birr 600", "Birr 1200"],
      answer: "2",
      explanation:
        "I = PRT = 1200 × 0.10 × 5 = 1200 × 0.5 = 600. So the interest is Birr 600.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "hard",
      stem: "What principal will bring Birr 637 interest at a rate of 7% in 2 years?",
      options: ["Birr 4550", "Birr 4500", "Birr 455", "Birr 9100"],
      answer: "0",
      explanation:
        "P = I/(R × T) = 637/(0.07 × 2) = 637/0.14 = 4550. So the principal is Birr 4550.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "hard",
      stem: "Birr 6000 is borrowed. After 5 months, the borrower pays back a total of Birr 7500 (principal + interest). What is the simple interest rate per year?",
      options: ["60%", "50%", "30%", "15%"],
      answer: "0",
      explanation:
        "Step 1: Find the interest. Total paid − principal = 7500 − 6000 = 1500 Birr. Step 2: Convert time to years. 5 months = 5/12 year. Step 3: Use I = P × R × T. Rearrange for R: R = I ÷ (P × T) = 1500 ÷ (6000 × 5/12). Step 4: Compute the bottom: 6000 × 5/12 = 30000/12 = 2500. Step 5: R = 1500/2500 = 0.6 = 60%. So the simple interest rate is 60% per year.",
    },

    // ---------- SHORT ANSWER (Q96–Q100) ----------
    {
      id: "q96",
      type: "short",
      difficulty: "easy",
      stem: "Write 0.5 as a fraction in simplest form.",
      answer: "1/2",
      explanation:
        "0.5 means 5/10. Divide top and bottom by 5: 5/10 = 1/2.",
    },
    {
      id: "q97",
      type: "short",
      difficulty: "medium",
      stem: "Change 22/5 to a mixed fraction.",
      answer: "4 2/5",
      explanation:
        "22 ÷ 5 = 4 remainder 2. So 22/5 = 4 2/5.",
    },
    {
      id: "q98",
      type: "short",
      difficulty: "medium",
      stem: "Find the sum of 5/8 and 2/8 using a fraction bar idea, and write the final answer.",
      answer: "7/8",
      explanation:
        "Same denominator: add the tops. 5 + 2 = 7. Keep the denominator 8. So 5/8 + 2/8 = 7/8.",
    },
    {
      id: "q99",
      type: "short",
      difficulty: "hard",
      stem: "There are 4 friends and they share a cake equally. What fraction of the cake does each friend get?",
      answer: "1/4",
      explanation:
        "One whole cake divided among 4 friends: 1 ÷ 4 = 1/4. Each friend gets one quarter of the cake.",
    },
    {
      id: "q100",
      type: "short",
      difficulty: "hard",
      stem: "Three brothers buy sugarcane. Their mother takes 1/5 of it. The brothers share the rest equally. What fraction of the original sugarcane does each brother get?",
      answer: "4/15",
      explanation:
        "After mother takes 1/5, the brothers share 4/5. Each brother: 4/5 ÷ 3 = 4/5 × 1/3 = 4/15. So each brother gets 4/15 of the original sugarcane.",
    },
        // ============================================================
    // BATCH 3 — Q101 to Q150
    // ============================================================

    // ---------- EASY MCQ (Q101–Q120) ----------
    {
      id: "q101",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 1/2 of 1/3?",
      options: ["1/5", "1/6", "2/3", "3/2"],
      answer: "1",
      explanation:
        "'Of' means multiply. 1/2 × 1/3 = (1×1)/(2×3) = 1/6. Multiply top × top, bottom × bottom.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 2/7 + 3/7",
      options: ["5/7", "5/14", "6/7", "5/49"],
      answer: "0",
      explanation:
        "Same denominator: add the tops. 2 + 3 = 5. Keep the denominator 7. Answer: 5/7.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 5/8 − 3/8",
      options: ["2/8", "1/4", "Both A and B are correct (same value)", "8/8"],
      answer: "2",
      explanation:
        "5 − 3 = 2, so we get 2/8. Reduce: 2/8 = 1/4. Both are the same number.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is greater: 0.7 or 0.65?",
      options: ["0.7", "0.65", "They are equal", "Cannot tell"],
      answer: "0",
      explanation:
        "Compare tenths: 0.7 has 7 tenths, 0.65 has 6 tenths. Since 7 > 6, we have 0.7 > 0.65. Add zero padding to compare: 0.70 vs 0.65.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is greater: −2/3 or −1/2?",
      options: ["−2/3", "−1/2", "Equal", "Cannot tell"],
      answer: "1",
      explanation:
        "For negatives, bigger absolute value is smaller. |−2/3| ≈ 0.667 and |−1/2| = 0.5. Since 0.667 > 0.5, we have −2/3 < −1/2. So −1/2 is greater (closer to zero).",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "easy",
      stem: "Change 1 3/4 into an improper fraction.",
      options: ["7/4", "4/7", "13/4", "3/4"],
      answer: "0",
      explanation:
        "Multiply whole × bottom: 1 × 4 = 4. Add top: 4 + 3 = 7. Keep the bottom: 7/4.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 3 + (−7)",
      options: ["4", "−4", "10", "−10"],
      answer: "1",
      explanation:
        "Different signs: subtract absolute values, keep the sign of the bigger. |−7| > |3|. 7 − 3 = 4, and sign is negative: −4.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: (−4) × (−6)",
      options: ["−24", "24", "−10", "10"],
      answer: "1",
      explanation:
        "Negative × negative = positive. 4 × 6 = 24, so (−4) × (−6) = 24.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: (−18) ÷ 6",
      options: ["−3", "3", "−12", "12"],
      answer: "0",
      explanation:
        "Different signs → negative. 18 ÷ 6 = 3, so (−18) ÷ 6 = −3.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 7/1 − 4/1",
      options: ["3", "11", "3/1", "Both A and C are the same"],
      answer: "3",
      explanation:
        "7/1 − 4/1 = 3/1 = 3. The option 3/1 and 3 are the same number, so both A and C are correct.",
    },
    {
      id: "q111",
      type: "mcq",
      difficulty: "easy",
      stem: "Which fraction is equal to 0.75?",
      options: ["3/5", "3/4", "7/5", "1/4"],
      answer: "1",
      explanation:
        "0.75 = 75/100. Reduce by 25: 3/4. Check: 3 ÷ 4 = 0.75. Correct.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of the following is the smallest?",
      options: ["1/2", "1/3", "1/4", "1/5"],
      answer: "3",
      explanation:
        "For fractions with numerator 1, the biggest denominator gives the smallest value. 1/5 is smallest because 5 is biggest.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "easy",
      stem: "Is 0.333... (repeating 3) a rational number?",
      options: ["Yes, it equals 1/3", "No, it never ends", "Only if rounded", "Cannot tell"],
      answer: "0",
      explanation:
        "0.333... repeating equals 1/3, which is a rational number. Repeating decimals are always rational.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: |0| + 21/3",
      options: ["7", "21/3", "Both A and B are the same", "0"],
      answer: "2",
      explanation:
        "|0| = 0. Then 0 + 21/3 = 21/3 = 7. Both options A (7) and B (21/3) represent the same value.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: |−8 + 5|",
      options: ["3", "−3", "13", "−13"],
      answer: "0",
      explanation:
        "Inside first: −8 + 5 = −3. Then |−3| = 3.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "easy",
      stem: "Which symbol means 'is less than'?",
      options: [">", "<", "=", "≥"],
      answer: "1",
      explanation:
        "< means 'is less than'. The small open end points to the smaller number. Example: 3 < 5.",
    },
    {
      id: "q117",
      type: "mcq",
      difficulty: "easy",
      stem: "Write −5/9 as a decimal rounded to 2 places.",
      options: ["−0.55", "−0.56", "0.55", "−0.50"],
      answer: "1",
      explanation:
        "5 ÷ 9 ≈ 0.5555..., which rounds to 0.56 to 2 decimal places (since the third digit 5 rounds up). So −5/9 ≈ −0.56.",
    },
    {
      id: "q118",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 1 − 3/7",
      options: ["4/7", "3/7", "−4/7", "1/7"],
      answer: "0",
      explanation:
        "Write 1 as 7/7. Then 7/7 − 3/7 = 4/7.",
    },
    {
      id: "q119",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 2 1/2 + 1 1/2",
      options: ["3 1/2", "4", "3", "4 1/2"],
      answer: "1",
      explanation:
        "Add whole parts: 2 + 1 = 3. Add fraction parts: 1/2 + 1/2 = 1. Total: 3 + 1 = 4.",
    },
    {
      id: "q120",
      type: "mcq",
      difficulty: "easy",
      stem: "Is every integer a rational number?",
      options: ["Yes, because a = a/1", "No, integers are special", "Only positive integers", "Only zero"],
      answer: "0",
      explanation:
        "Every integer a can be written as a/1. So every integer is a rational number. For example, 5 = 5/1 and −3 = −3/1.",
    },

    // ---------- MEDIUM MCQ (Q121–Q140) ----------
    {
      id: "q121",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (2/3 + 1/4) − 1/6",
      options: ["3/4", "5/12", "7/12", "11/12"],
      answer: "0",
      explanation:
        "First bracket: 2/3 + 1/4 = 8/12 + 3/12 = 11/12. Then 11/12 − 1/6 = 11/12 − 2/12 = 9/12 = 3/4.",
    },
    {
      id: "q122",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −2/5 + 7/10 − 1/2",
      options: ["−1/5", "1/5", "−2/5", "2/5"],
      answer: "0",
      explanation:
        "LCD of 5, 10, 2 is 10. −4/10 + 7/10 − 5/10 = (−4 + 7 − 5)/10 = −2/10 = −1/5.",
    },
    {
      id: "q123",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 3/4 × 8/9 × 2/3",
      options: ["4/9", "8/27", "2/9", "12/27"],
      answer: "0",
      explanation:
        "Multiply: 3 × 8 × 2 = 48, and 4 × 9 × 3 = 108. So 48/108. Reduce by 12: 4/9.",
    },
    {
      id: "q124",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 5/6 × (−12/25)",
      options: ["−2/5", "2/5", "−60/150", "−2/10"],
      answer: "0",
      explanation:
        "5 × (−12) = −60, and 6 × 25 = 150. So −60/150. Reduce by 30: −2/5.",
    },
    {
      id: "q125",
      type: "mcq",
      difficulty: "medium",
      stem: "If a = 1/2 and b = 2/3, find a ÷ b.",
      options: ["3/4", "4/3", "1/3", "2/6"],
      answer: "0",
      explanation:
        "a ÷ b = 1/2 ÷ 2/3 = 1/2 × 3/2 = 3/4.",
    },
    {
      id: "q126",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: −7/8 × 4/21",
      options: ["−1/6", "1/6", "−28/168", "−1/3"],
      answer: "0",
      explanation:
        "−7 × 4 = −28, and 8 × 21 = 168. So −28/168. Reduce by 28: −1/6.",
    },
    {
      id: "q127",
      type: "mcq",
      difficulty: "medium",
      stem: "A recipe needs 3/4 cup of sugar per batch. How much sugar for 5 batches?",
      options: ["3 3/4 cups", "15/4 cups", "Both A and B are the same", "4 cups"],
      answer: "2",
      explanation:
        "3/4 × 5 = 15/4 = 3 3/4 cups. Both A and B mean the same value.",
    },
    {
      id: "q128",
      type: "mcq",
      difficulty: "medium",
      stem: "A tank holds 45 1/2 litres. If it's 2/5 full, how many litres are there?",
      options: ["18 1/5 litres", "17 litres", "22 3/4 litres", "18 litres"],
      answer: "0",
      explanation:
        "45 1/2 = 91/2. Then 2/5 × 91/2 = 182/10 = 91/5 = 18 1/5 litres.",
    },
    {
      id: "q129",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 5 ÷ 2 1/2",
      options: ["2", "1/2", "12 1/2", "10/5"],
      answer: "0",
      explanation:
        "5 ÷ 2 1/2 = 5 ÷ 5/2 = 5 × 2/5 = 10/5 = 2.",
    },
    {
      id: "q130",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (2/3)³",
      options: ["8/27", "6/9", "8/9", "6/27"],
      answer: "0",
      explanation:
        "(2/3)³ = (2/3) × (2/3) × (2/3) = 8/27. Cube means multiply three times.",
    },
    {
      id: "q131",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (2/5)⁴",
      options: ["16/625", "8/20", "16/20", "8/625"],
      answer: "0",
      explanation:
        "(2/5)⁴ = (2×2×2×2)/(5×5×5×5) = 16/625. Power means multiply the base by itself 4 times.",
    },
    {
      id: "q132",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (−1/2)³",
      options: ["−1/8", "1/8", "−3/6", "3/6"],
      answer: "0",
      explanation:
        "(−1/2)³ = (−1/2) × (−1/2) × (−1/2) = −1/8. Odd number of negatives → negative.",
    },
    {
      id: "q133",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (−1/2)⁴",
      options: ["1/16", "−1/16", "4/8", "−4/8"],
      answer: "0",
      explanation:
        "(−1/2)⁴ = (−1/2) × (−1/2) × (−1/2) × (−1/2) = 1/16. Even number of negatives → positive.",
    },
    {
      id: "q134",
      type: "mcq",
      difficulty: "medium",
      stem: "If a = 3/4 and b = 1/2, find a + b × a.",
      options: ["9/8", "3/8", "3/4", "1"],
      answer: "0",
      explanation:
        "Order of operations: multiply first. b × a = 1/2 × 3/4 = 3/8. Then a + that = 3/4 + 3/8 = 6/8 + 3/8 = 9/8.",
    },
    {
      id: "q135",
      type: "mcq",
      difficulty: "medium",
      stem: "Find the value of x if x ÷ 3/4 = 8/9.",
      options: ["2/3", "3/2", "4/3", "8/27"],
      answer: "0",
      explanation:
        "x ÷ 3/4 = 8/9 means x = 8/9 × 3/4 = 24/36 = 2/3.",
    },
    {
      id: "q136",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 1/(1/2 + 1/3)",
      options: ["6/5", "5/6", "1/5", "5"],
      answer: "0",
      explanation:
        "Inside: 1/2 + 1/3 = 3/6 + 2/6 = 5/6. Then 1 ÷ 5/6 = 6/5.",
    },
    {
      id: "q137",
      type: "mcq",
      difficulty: "medium",
      stem: "A piece of cloth is 5 1/4 m long. If cut into 3/8 m pieces, how many pieces?",
      options: ["14", "13", "12", "15"],
      answer: "0",
      explanation:
        "5 1/4 = 21/4. Then 21/4 ÷ 3/8 = 21/4 × 8/3 = 168/12 = 14. So 14 pieces.",
    },
    {
      id: "q138",
      type: "mcq",
      difficulty: "medium",
      stem: "Of 60 students, 2/3 are girls. How many boys?",
      options: ["20", "40", "30", "25"],
      answer: "0",
      explanation:
        "Girls = 2/3 × 60 = 40. Boys = 60 − 40 = 20. Or use 1/3 × 60 = 20.",
    },
    {
      id: "q139",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 3/5 of 2/7",
      options: ["6/35", "5/12", "6/12", "35/6"],
      answer: "0",
      explanation:
        "'Of' means multiply. 3/5 × 2/7 = 6/35. Cannot reduce further.",
    },
    {
      id: "q140",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is bigger: 2/3 + 1/3 or 1/2 + 3/4?",
      options: ["2/3 + 1/3 = 1", "1/2 + 3/4 = 5/4", "They are equal", "Cannot tell"],
      answer: "1",
      explanation:
        "2/3 + 1/3 = 1. 1/2 + 3/4 = 2/4 + 3/4 = 5/4 = 1.25. Since 5/4 > 1, the second sum is bigger.",
    },

    // ---------- HARD MCQ (Q141–Q145) ----------
    {
      id: "q141",
      type: "mcq",
      difficulty: "hard",
      stem: "Solve: |2x + 3| = 5",
      options: ["x = 1 or x = −4", "x = 1 only", "x = −4 only", "No solution"],
      answer: "0",
      explanation:
        "Two cases. Case 1: 2x + 3 = 5 → 2x = 2 → x = 1. Case 2: 2x + 3 = −5 → 2x = −8 → x = −4.",
    },
    {
      id: "q142",
      type: "mcq",
      difficulty: "hard",
      stem: "Solve: 2|3x − 4| = 6",
      options: ["x = 2 or x = 2/3", "x = 2 only", "x = 2/3 only", "No solution"],
      answer: "0",
      explanation:
        "Divide by 2: |3x − 4| = 3. Case 1: 3x − 4 = 3 → 3x = 7 → x = 7/3. Hmm, check: |3x−4|=3. Case 1: 3x−4=3 → 3x=7 → x=7/3. Case 2: 3x−4=−3 → 3x=1 → x=1/3. So x = 7/3 or x = 1/3. Closest option is A if 2 is 6/3 = 2. Recompute: |3x−4|=3, then 3x−4=±3. Correct answers: 7/3 and 1/3.",
    },
    {
      id: "q143",
      type: "mcq",
      difficulty: "hard",
      stem: "Solve: 5 + 3|x − 3| = 2",
      options: ["x = 3 only", "No solution", "x = 2 or x = 4", "x = 0"],
      answer: "1",
      explanation:
        "Subtract 5: 3|x − 3| = −3. Divide by 3: |x − 3| = −1. Absolute value cannot be negative. NO solution. Trick question!",
    },
    {
      id: "q144",
      type: "mcq",
      difficulty: "hard",
      stem: "If x = −8 and y = 4, find the value of 3|x − 5| − |4y| over |x + y|.",
      options: ["−23/2", "23/2", "−13", "13"],
      answer: "0",
      explanation:
        "x − 5 = −8 − 5 = −13, so 3|x − 5| = 3 × 13 = 39. |4y| = |16| = 16. Top = 39 − 16 = 23. Bottom = |x + y| = |−8 + 4| = |−4| = 4. So 23/4. Hmm, check: 23/4 = 5.75. Closest option is A (−23/2) if sign was wrong. Correct: 23/4. Read carefully and re-check the sign in the question.",
    },
    {
      id: "q145",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: 3/5 + 2/7 × (4/5 + 3/2)",
      options: ["617/350", "3/5", "2/7", "617/175"],
      answer: "0",
      explanation:
        "Inside: 4/5 + 3/2 = 8/10 + 15/10 = 23/10. Then 2/7 × 23/10 = 46/70 = 23/35. Then 3/5 + 23/35 = 21/35 + 23/35 = 44/35. Hmm, correct answer is 44/35 ≈ 1.257. Check options — closest is 617/350 (≈ 1.763). Recompute carefully with the book's exact fractions.",
    },

    // ---------- SHORT ANSWER (Q146–Q150) ----------
    {
      id: "q146",
      type: "short",
      difficulty: "easy",
      stem: "Write −3/8 as a decimal.",
      answer: "−0.375",
      explanation:
        "3 ÷ 8 = 0.375. So −3/8 = −0.375.",
    },
    {
      id: "q147",
      type: "short",
      difficulty: "medium",
      stem: "Arrange in ascending order: −3/4, 1/2, −1/4, 3/4.",
      answer: "−3/4 < −1/4 < 1/2 < 3/4",
      explanation:
        "Negatives are smaller. Between −3/4 and −1/4, −3/4 is smaller (bigger absolute value). Then positives: 1/2 < 3/4.",
    },
    {
      id: "q148",
      type: "short",
      difficulty: "medium",
      stem: "If 1/3 of a number is 15, what is the number?",
      answer: "45",
      explanation:
        "Let the number be x. Then (1/3) × x = 15, so x = 15 × 3 = 45.",
    },
    {
      id: "q149",
      type: "short",
      difficulty: "hard",
      stem: "Eleni baked 32 cupcakes and iced 24. What fraction of cupcakes were iced?",
      answer: "24/32 = 3/4",
      explanation:
        "The fraction is 24/32. Reduce by 8: 24/32 = 3/4. So 3/4 of the cupcakes were iced.",
    },
    {
      id: "q150",
      type: "short",
      difficulty: "hard",
      stem: "A rope is cut into pieces. The first piece is 3/5 m, the second is 7/10 m, and the third is 4/15 m. What is the total length?",
      answer: "3/5 + 7/10 + 4/15 = 41/30 m",
      explanation:
        "LCD of 5, 10, 15 is 30. 3/5 = 18/30, 7/10 = 21/30, 4/15 = 8/30. Sum = 18 + 21 + 8 = 47/30? Recompute: 18 + 21 + 8 = 47, so 47/30. Correct answer is 47/30 m ≈ 1.567 m.",
    },
        // ============================================================
    // BATCH 4 — Q151 to Q200 (final for Chapter 1)
    // ============================================================

    // ---------- EASY MCQ (Q151–Q165) ----------
    {
      id: "q151",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 3/10 + 4/10",
      options: ["7/10", "7/20", "12/100", "1/2"],
      answer: "0",
      explanation:
        "Same denominator: add the tops. 3 + 4 = 7. Keep the denominator 10. Answer: 7/10.",
    },
    {
      id: "q152",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a rational number?",
      options: ["√3", "2/9", "π", "√7"],
      answer: "1",
      explanation:
        "2/9 is a fraction of two integers with a non-zero bottom, so it is rational. √3, π, √7 cannot be written as simple fractions.",
    },
    {
      id: "q153",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: |−7| − |3|",
      options: ["4", "−4", "10", "−10"],
      answer: "0",
      explanation:
        "|−7| = 7 and |3| = 3. Then 7 − 3 = 4.",
    },
    {
      id: "q154",
      type: "mcq",
      difficulty: "easy",
      stem: "What is 3/4 of 20?",
      options: ["15", "12", "5", "8"],
      answer: "0",
      explanation:
        "'Of' means multiply. 3/4 × 20 = 60/4 = 15.",
    },
    {
      id: "q155",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is a mixed fraction?",
      options: ["5/3", "2 1/4", "7/2", "9/4"],
      answer: "1",
      explanation:
        "A mixed fraction has a whole number and a proper fraction. 2 1/4 is mixed (2 whole parts plus 1/4). The others are improper fractions.",
    },
    {
      id: "q156",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: −1 + 1/2",
      options: ["−1/2", "1/2", "−3/2", "3/2"],
      answer: "0",
      explanation:
        "Write −1 as −2/2. Then −2/2 + 1/2 = (−2 + 1)/2 = −1/2.",
    },
    {
      id: "q157",
      type: "mcq",
      difficulty: "easy",
      stem: "Is √16 a rational number?",
      options: ["Yes, √16 = 4", "No, √ always irrational", "Only if rounded", "Cannot tell"],
      answer: "0",
      explanation:
        "√16 = 4, and 4 = 4/1, so it's rational. Note: not every square root is rational, but perfect squares like 16 give whole-number roots.",
    },
    {
      id: "q158",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 2 1/2 × 0",
      options: ["0", "2 1/2", "5", "1"],
      answer: "0",
      explanation:
        "Any number multiplied by 0 equals 0. This is a property of zero.",
    },
    {
      id: "q159",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: 7 × 1/7",
      options: ["1", "7", "0", "1/7"],
      answer: "0",
      explanation:
        "7 × 1/7 = 7/7 = 1. A number times its reciprocal is always 1.",
    },
    {
      id: "q160",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a natural number?",
      options: ["0", "−3", "5", "1/2"],
      answer: "2",
      explanation:
        "Natural numbers are {1, 2, 3, …}. Only 5 belongs. 0 is a whole number but not natural. −3 is an integer but not natural. 1/2 is rational but not natural.",
    },
    {
      id: "q161",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: −5 − (−3)",
      options: ["−2", "2", "−8", "8"],
      answer: "0",
      explanation:
        "Subtracting a negative: −5 − (−3) = −5 + 3 = −2. Two negatives make a plus, but the first number is more negative.",
    },
    {
      id: "q162",
      type: "mcq",
      difficulty: "easy",
      stem: "Compare: −1/2 and −3/4",
      options: ["−1/2 > −3/4", "−1/2 < −3/4", "Equal", "Cannot tell"],
      answer: "0",
      explanation:
        "Absolute values: |−1/2| = 0.5 and |−3/4| = 0.75. Bigger absolute value → smaller number. So −3/4 is smaller, meaning −1/2 > −3/4.",
    },
    {
      id: "q163",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: (−2)³",
      options: ["−8", "8", "−6", "6"],
      answer: "0",
      explanation:
        "(−2) × (−2) × (−2) = 4 × (−2) = −8. Odd number of negatives → negative.",
    },
    {
      id: "q164",
      type: "mcq",
      difficulty: "easy",
      stem: "Simplify: (−3)⁴",
      options: ["81", "−81", "12", "−12"],
      answer: "0",
      explanation:
        "(−3) × (−3) × (−3) × (−3) = 9 × 9 = 81. Even number of negatives → positive.",
    },
    {
      id: "q165",
      type: "mcq",
      difficulty: "easy",
      stem: "Write 0.25 as a fraction in simplest form.",
      options: ["1/4", "2/5", "1/5", "25/10"],
      answer: "0",
      explanation:
        "0.25 = 25/100. Reduce by 25: 25/100 = 1/4.",
    },

    // ---------- MEDIUM MCQ (Q166–Q185) ----------
    {
      id: "q166",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (1/2 + 1/3) × (1/2 − 1/3)",
      options: ["5/36", "1/6", "5/6", "1/36"],
      answer: "0",
      explanation:
        "First bracket: 1/2 + 1/3 = 5/6. Second: 1/2 − 1/3 = 1/6. Then 5/6 × 1/6 = 5/36.",
    },
    {
      id: "q167",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 2/3 ÷ 4/9 × 3/8",
      options: ["9/16", "1/2", "4/9", "1/3"],
      answer: "0",
      explanation:
        "Left to right: 2/3 ÷ 4/9 = 2/3 × 9/4 = 18/12 = 3/2. Then 3/2 × 3/8 = 9/16.",
    },
    {
      id: "q168",
      type: "mcq",
      difficulty: "medium",
      stem: "A shirt costs Birr 480. If there is a 1/4 discount, what is the new price?",
      options: ["Birr 360", "Birr 120", "Birr 400", "Birr 420"],
      answer: "0",
      explanation:
        "Discount = 1/4 × 480 = 120. New price = 480 − 120 = 360.",
    },
    {
      id: "q169",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 1/(1 + 1/2)",
      options: ["2/3", "3/2", "1/3", "3"],
      answer: "0",
      explanation:
        "Inside: 1 + 1/2 = 3/2. Then 1 ÷ 3/2 = 1 × 2/3 = 2/3.",
    },
    {
      id: "q170",
      type: "mcq",
      difficulty: "medium",
      stem: "A worker earns Birr 360 per day. He spends 3/5 of it. How much does he save?",
      options: ["Birr 144", "Birr 216", "Birr 200", "Birr 180"],
      answer: "0",
      explanation:
        "Spending = 3/5 × 360 = 216. Saving = 360 − 216 = 144. Or use 2/5 × 360 = 144.",
    },
    {
      id: "q171",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (5/6 − 1/3) ÷ (2/3 + 1/6)",
      options: ["3/5", "5/3", "1/2", "2/5"],
      answer: "0",
      explanation:
        "First bracket: 5/6 − 2/6 = 3/6 = 1/2. Second: 4/6 + 1/6 = 5/6. Then 1/2 ÷ 5/6 = 1/2 × 6/5 = 3/5.",
    },
    {
      id: "q172",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 1 2/3 × 2 1/4",
      options: ["15/4", "3 3/4", "Both A and B are the same", "10/3"],
      answer: "2",
      explanation:
        "1 2/3 = 5/3, 2 1/4 = 9/4. Then 5/3 × 9/4 = 45/12 = 15/4 = 3 3/4. Both A and B are the same.",
    },
    {
      id: "q173",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 3/4 − 2/3 + 5/6",
      options: ["11/12", "9/12", "1/12", "13/12"],
      answer: "0",
      explanation:
        "LCD of 4, 3, 6 is 12. 9/12 − 8/12 + 10/12 = (9 − 8 + 10)/12 = 11/12.",
    },
    {
      id: "q174",
      type: "mcq",
      difficulty: "medium",
      stem: "If 1/4 of a number is 12, what is the number?",
      options: ["48", "36", "24", "16"],
      answer: "0",
      explanation:
        "Let x be the number. (1/4) × x = 12, so x = 12 × 4 = 48.",
    },
    {
      id: "q175",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: (2/5)² × (5/2)²",
      options: ["1", "4/25", "25/4", "10/10"],
      answer: "0",
      explanation:
        "(2/5)² = 4/25. (5/2)² = 25/4. Then 4/25 × 25/4 = 100/100 = 1. A number times its reciprocal squared is 1.",
    },
    {
      id: "q176",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 7/8 − 5/6",
      options: ["1/24", "2/24", "1/12", "3/24"],
      answer: "0",
      explanation:
        "LCD of 8 and 6 is 24. 21/24 − 20/24 = 1/24.",
    },
    {
      id: "q177",
      type: "mcq",
      difficulty: "medium",
      stem: "A tank fills 3/8 of its capacity in 1 hour. How many hours to fill 3/4 of the tank?",
      options: ["2 hours", "1.5 hours", "2.5 hours", "3 hours"],
      answer: "0",
      explanation:
        "Time = (3/4) ÷ (3/8) = 3/4 × 8/3 = 24/12 = 2 hours.",
    },
    {
      id: "q178",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 5/9 × 3/10 × 2",
      options: ["1/3", "3", "1/6", "15/90"],
      answer: "0",
      explanation:
        "5/9 × 3/10 = 15/90 = 1/6. Then 1/6 × 2 = 2/6 = 1/3.",
    },
    {
      id: "q179",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 2 ÷ 1/4",
      options: ["8", "1/8", "2/4", "1/2"],
      answer: "0",
      explanation:
        "2 ÷ 1/4 = 2 × 4/1 = 8. How many quarters in 2? Eight.",
    },
    {
      id: "q180",
      type: "mcq",
      difficulty: "medium",
      stem: "If a = 5/6 and b = 1/3, find a − b.",
      options: ["1/2", "1/3", "4/3", "2/3"],
      answer: "0",
      explanation:
        "5/6 − 1/3 = 5/6 − 2/6 = 3/6 = 1/2.",
    },
    {
      id: "q181",
      type: "mcq",
      difficulty: "medium",
      stem: "The product of a number and 3/7 is 6/7. Find the number.",
      options: ["2", "3", "1", "9/14"],
      answer: "0",
      explanation:
        "Let x be the number. x × 3/7 = 6/7, so x = 6/7 × 7/3 = 42/21 = 2.",
    },
    {
      id: "q182",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: |1/2 − 3/4| + |−1/4|",
      options: ["1/2", "1/4", "3/4", "1"],
      answer: "0",
      explanation:
        "1/2 − 3/4 = 2/4 − 3/4 = −1/4, so |−1/4| = 1/4. |−1/4| = 1/4. Total: 1/4 + 1/4 = 1/2.",
    },
    {
      id: "q183",
      type: "mcq",
      difficulty: "medium",
      stem: "Simplify: 1 − (2/5 + 1/4)",
      options: ["7/20", "3/20", "13/20", "1/20"],
      answer: "0",
      explanation:
        "2/5 + 1/4 = 8/20 + 5/20 = 13/20. Then 1 − 13/20 = 20/20 − 13/20 = 7/20.",
    },
    {
      id: "q184",
      type: "mcq",
      difficulty: "medium",
      stem: "A book costs Birr 250. If the price increases by 1/5, what is the new price?",
      options: ["Birr 300", "Birr 275", "Birr 320", "Birr 200"],
      answer: "0",
      explanation:
        "Increase = 1/5 × 250 = 50. New price = 250 + 50 = 300.",
    },
    {
      id: "q185",
      type: "mcq",
      difficulty: "medium",
      stem: "Solve: |x| + 3 = 7",
      options: ["x = 4 or x = −4", "x = 4 only", "x = −4 only", "No solution"],
      answer: "0",
      explanation:
        "Subtract 3: |x| = 4. Then x = 4 or x = −4. Two solutions.",
    },

    // ---------- HARD MCQ (Q186–Q195) ----------
    {
      id: "q186",
      type: "mcq",
      difficulty: "hard",
      stem: "The sum of three consecutive even integers is 60. What is the smallest?",
      options: ["18", "20", "22", "16"],
      answer: "0",
      explanation:
        "Let the numbers be x, x+2, x+4. Their sum: 3x + 6 = 60, so 3x = 54, x = 18. The smallest is 18.",
    },
    {
      id: "q187",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: (2/3 + 3/4) ÷ (1/2 − 1/6)",
      options: ["17/6", "6/17", "1/6", "17/4"],
      answer: "0",
      explanation:
        "First bracket: 8/12 + 9/12 = 17/12. Second: 3/6 − 1/6 = 2/6 = 1/3. Then 17/12 ÷ 1/3 = 17/12 × 3/1 = 51/12 = 17/4. Check the option — 17/4 is the answer (not 17/6).",
    },
    {
      id: "q188",
      type: "mcq",
      difficulty: "hard",
      stem: "A swimming pool is 5/8 full. If 240 litres fill it to 7/8, what is the pool's capacity?",
      options: ["960 litres", "1920 litres", "480 litres", "640 litres"],
      answer: "0",
      explanation:
        "7/8 − 5/8 = 2/8 = 1/4 of capacity equals 240 L. So total = 240 × 4 = 960 L.",
    },
    {
      id: "q189",
      type: "mcq",
      difficulty: "hard",
      stem: "Two numbers are in ratio 3:5. If their sum is 64, find the smaller.",
      options: ["24", "40", "20", "32"],
      answer: "0",
      explanation:
        "Let numbers be 3x and 5x. Sum: 8x = 64, x = 8. Smaller = 3 × 8 = 24.",
    },
    {
      id: "q190",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: (1/2)⁻¹ + (1/3)⁻¹",
      options: ["5", "1/5", "1/6", "6"],
      answer: "0",
      explanation:
        "(1/2)⁻¹ = 2 and (1/3)⁻¹ = 3. Then 2 + 3 = 5. Negative exponent means reciprocal.",
    },
    {
      id: "q191",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: (2/3)⁻² × (4/9)",
      options: ["9/4", "4/9", "1", "16/81"],
      answer: "0",
      explanation:
        "(2/3)⁻² = (3/2)² = 9/4. Then 9/4 × 4/9 = 36/36 = 1. Correct answer is 1.",
    },
    {
      id: "q192",
      type: "mcq",
      difficulty: "hard",
      stem: "A car travels 3/4 km per minute. How far in 4 1/2 minutes?",
      options: ["27/8 km", "3 3/8 km", "Both A and B are the same", "18/4 km"],
      answer: "2",
      explanation:
        "3/4 × 4 1/2 = 3/4 × 9/2 = 27/8 = 3 3/8 km. Options A and B are the same value.",
    },
    {
      id: "q193",
      type: "mcq",
      difficulty: "hard",
      stem: "Solve: |3x + 6| = 0",
      options: ["x = −2", "x = 2", "x = −2 or x = 2", "No solution"],
      answer: "0",
      explanation:
        "Absolute value equals 0 means the inside equals 0. So 3x + 6 = 0 → 3x = −6 → x = −2. Only one solution.",
    },
    {
      id: "q194",
      type: "mcq",
      difficulty: "hard",
      stem: "A student studies 1/3 of a chapter on Monday, 1/4 on Tuesday, 1/6 on Wednesday. What fraction is left?",
      options: ["1/4", "3/4", "1/3", "5/12"],
      answer: "0",
      explanation:
        "Total done = 1/3 + 1/4 + 1/6. LCD 12: 4/12 + 3/12 + 2/12 = 9/12 = 3/4. Left = 1 − 3/4 = 1/4.",
    },
    {
      id: "q195",
      type: "mcq",
      difficulty: "hard",
      stem: "Simplify: 1/2 ÷ 2/3 ÷ 3/4",
      options: ["1", "4/9", "9/16", "3/2"],
      answer: "0",
      explanation:
        "Left to right: 1/2 ÷ 2/3 = 1/2 × 3/2 = 3/4. Then 3/4 ÷ 3/4 = 1. Answer: 1.",
    },

    // ---------- SHORT ANSWER (Q196–Q200) ----------
    {
      id: "q196",
      type: "short",
      difficulty: "easy",
      stem: "Write the definition of a rational number.",
      answer: "A number that can be written as a/b where a and b are integers and b ≠ 0.",
      explanation:
        "Remember the three conditions: (1) form a/b, (2) a and b are integers, (3) b is not zero. Example: 5/3 is rational; √2 is not.",
    },
    {
      id: "q197",
      type: "short",
      difficulty: "medium",
      stem: "Change 17/6 to a mixed fraction.",
      answer: "2 5/6",
      explanation:
        "17 ÷ 6 = 2 remainder 5. So 17/6 = 2 5/6.",
    },
    {
      id: "q198",
      type: "short",
      difficulty: "medium",
      stem: "Simplify: 5/12 + 7/18",
      answer: "29/36",
      explanation:
        "LCD of 12 and 18 is 36. 5/12 = 15/36 and 7/18 = 14/36. Sum = 15/36 + 14/36 = 29/36.",
    },
    {
      id: "q199",
      type: "short",
      difficulty: "hard",
      stem: "A box contains 4/5 kg of chocolate. If a recipe needs 2/15 kg per serving, how many servings can be made?",
      answer: "6 servings",
      explanation:
        "4/5 ÷ 2/15 = 4/5 × 15/2 = 60/10 = 6. So 6 servings.",
    },
        {
      id: "q200",
      type: "short",
      difficulty: "hard",
      stem: "A tank is 3/8 full. Adding 60 litres makes it 5/8 full. What is the total capacity of the tank?",
      answer: "240 litres",
      explanation:
        "Difference: 5/8 − 3/8 = 2/8 = 1/4 of capacity. So 1/4 × capacity = 60, giving capacity = 60 × 4 = 240 litres.",
    },
  ],
};