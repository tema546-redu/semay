import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 MATHEMATICS — CHAPTER 4
// SIMILARITY OF FIGURES
// Source: AAEB Grade 8 Mathematics Student Textbook (pp. 103–128)
// For: Banchi (ባንቺ) — Grade 8
// Language level: A2 / A1 / B1 — clear, short, no harsh words.
// ============================================================

export const g8MathCh4: Chapter = {
  id: "ch4",
  number: 4,
  title: "Similarity of Figures",
  titleAm: "የምስሎች ተመሳሳይነት",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. What Does 'Similar' Mean?",
      titleAm: "'ተመሳሳይ' ማለት ምን ማለት ነው?",
      body:
        "Banchi, in everyday English 'similar' means 'almost the same'. But in mathematics, 'similar' has a very exact meaning. Two figures are similar if they have the SAME SHAPE but not necessarily the SAME SIZE. One is like a photocopy that has been enlarged or shrunk — the shape looks the same, but the size is different.",
      bodyAm:
        "ባንቺ፣ በዕለት ተዕለት እንግሊዝኛ 'similar' ማለት 'ወደ አንድ የሚቀርብ' ማለት ነው። ግን በሂሳብ ውስጥ 'similar' በጣም ትክክለኛ ትርጉም አለው። ሁለት ምስሎች ተመሳሳይ ቅርጽ ካላቸው ግን ተመሳሳይ መጠን የላቸውም ከሆነ 'similar' ይባላሉ። አንዱ የተስፋፋ ወይም የተጠበበ የፎቶ ኮፒ ይመስላል — ቅርጹ አንድ ነው፣ ግን መጠኑ የተለየ ነው።",
      children: [
        {
          id: "n1-1",
          title: "Symbol",
          titleAm: "ምልክቱ",
          body:
            "We write '∼' to mean 'is similar to'. Example: △ABC ∼ △DEF.",
          bodyAm:
            "'∼' ማለት 'ተመሳሳይ ነው' ማለት ነው። ምሳሌ፡ △ABC ∼ △DEF።",
        },
        {
          id: "n1-2",
          title: "Congruent vs Similar",
          titleAm: "እኩል እና ተመሳሳይ",
          body:
            "Congruent (≅) means same shape AND same size. Similar (∼) means same shape, but size may differ. Every congruent figure is similar, but not every similar figure is congruent.",
          bodyAm:
            "ተመሳሳይ መጠን ያላቸው (≅) ማለት ተመሳሳይ ቅርጽ እና ተመሳሳይ መጠን። ተመሳሳይ (∼) ማለት ተመሳሳይ ቅርጽ ግን የተለያየ መጠን። ማንኛውም ተመሳሳይ መጠን ያለው ምስል ተመሳሳይ ነው፣ ግን ሁሉም ተመሳሳይ ምስል ተመሳሳይ መጠን የለውም።",
        },
        {
          id: "n1-3",
          title: "Real-life examples",
          titleAm: "የዕለት ተዕለት ምሳሌዎች",
          body:
            "A tree and its shadow are similar. Two photographs of the same person at different ages are NOT similar (the shape changed). An overhead projector image and the transparency are similar.",
          bodyAm:
            "ዛፍ እና ጥላው ተመሳሳይ ናቸው። የአንድ ሰው ሁለት ፎቶዎች በተለያየ ዕድሜ ተመሳሳይ አይደሉም (ቅርጹ ተለውጧል)።",
        },
        {
          id: "n1-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, similar does NOT mean 'same size'. It means 'same shape'. If the sizes are also equal, we call them congruent. Two similar figures may have very different sizes.",
          bodyAm:
            "ባንቺ፣ 'similar' ማለት 'ተመሳሳይ መጠን' ማለት አይደለም። 'ተመሳሳይ ቅርጽ' ማለት ነው። መጠኖቹም እኩል ከሆኑ 'congruent' እንላቸዋለን። ሁለት ተመሳሳይ ምስሎች በጣም የተለያየ መጠን ሊኖራቸው ይችላል።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Similar Polygons — The Two Conditions",
      titleAm: "ተመሳሳይ ፖሊጎኖች — ሁለቱ ቅድመ ሁኔታዎች",
      body:
        "Banchi, two polygons are similar if and only if BOTH of these are true:\n\nCondition 1: All pairs of corresponding angles are congruent (equal).\nCondition 2: The ratios of all pairs of corresponding sides are equal.",
      bodyAm:
        "ባንቺ፣ ሁለት ፖሊጎኖች ተመሳሳይ ይሆናሉ ሁለቱም እውነት ከሆኑ ብቻ፡\n\nቅድመ ሁኔታ 1፡ ሁሉም ተዛማጅ ማዕዘኖች እኩል መሆን አለባቸው።\nቅድመ ሁኔታ 2፡ የሁሉም ተዛማጅ ጎኖች ጥምርታ እኩል መሆን አለበት።",
      children: [
        {
          id: "n2-1",
          title: "Correspondence — matching vertices",
          titleAm: "ተዛማጅነት — ጫፎችን ማገናኘት",
          body:
            "When we say △ABC ∼ △DEF, the order matters!\n\nA ↔ D,   B ↔ E,   C ↔ F\n\n∠A = ∠D,   ∠B = ∠E,   ∠C = ∠F\nAB/DE = BC/EF = AC/DF = k",
          bodyAm:
            "△ABC ∼ △DEF ስንል ቅደም ተከተሉ ወሳኝ ነው!\n\nA ↔ D,   B ↔ E,   C ↔ F\n\n∠A = ∠D,   ∠B = ∠E,   ∠C = ∠F\nAB/DE = BC/EF = AC/DF = k",
        },
        {
          id: "n2-2",
          title: "Example 1 — Similar rectangles",
          titleAm: "ምሳሌ 1 — ተመሳሳይ አራት ማዕዘናት",
          body:
            "Rectangle 1: 2 cm × 4 cm. Rectangle 2: 3 cm × 6 cm.\n\nAngles: all 90° in both → Condition 1 ✓.\nSides: 2/3 = 4/6 = 2/3 → Condition 2 ✓.\nSo the rectangles are similar with scale factor k = 2/3.",
          bodyAm:
            "አራት ማዕዘን 1፡ 2 ሴሜ × 4 ሴሜ። አራት ማዕዘን 2፡ 3 ሴሜ × 6 ሴሜ።\nማዕዘኖች፡ ሁለቱም 90° → ቅድመ ሁኔታ 1 ✓።\nጎኖች፡ 2/3 = 4/6 = 2/3 → ቅድመ ሁኔታ 2 ✓።",
        },
        {
          id: "n2-3",
          title: "Example 2 — Square vs rectangle (NOT similar)",
          titleAm: "ምሳሌ 2 — ካሬ እና አራት ማዕዘን (ተመሳሳይ አይደሉም)",
          body:
            "A square 4 × 4 and a rectangle 4 × 6 are NOT similar.\nAngles: all 90° in both → Condition 1 ✓.\nSides: 4/4 = 1 but 4/6 = 2/3. Not equal → Condition 2 ✗.\nSo NOT similar.",
          bodyAm:
            "ካሬ 4 × 4 እና አራት ማዕዘን 4 × 6 ተመሳሳይ አይደሉም።\nማዕዘኖች፡ ሁለቱም 90° → ቅድመ ሁኔታ 1 ✓።\nጎኖች፡ 4/4 = 1 ግን 4/6 = 2/3። እኩል አይደሉም → ቅድመ ሁኔታ 2 ✗።",
        },
        {
          id: "n2-4",
          title: "Scale factor",
          titleAm: "የመጠን ቅንጅት",
          body:
            "The ratio of two corresponding sides of similar polygons is called the scale factor (k) or constant of proportionality. Example: if k = 2, the second figure is twice as big.",
          bodyAm:
            "የሁለት ተዛማጅ ጎኖች ጥምርታ የመጠን ቅንጅት (k) ወይም የተመጣጠነ ቋሚ ይባላል። ምሳሌ፡ k = 2 ከሆነ ሁለተኛው ምስል ሁለት እጥፍ ይበልጣል።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, for a rectangle to be similar to another rectangle, the ratio length/width must be the same for both. A square is similar to another square, but a square is NOT similar to a non-square rectangle.",
          bodyAm:
            "ባንቺ፣ አንድ አራት ማዕዘን ከሌላ ጋር ተመሳሳይ ለመሆን የርዝመት/ስፋት ጥምርታ ለሁለቱም ተመሳሳይ መሆን አለበት። ካሬ ከሌላ ካሬ ጋር ተመሳሳይ ነው፣ ግን ካሬ ከካሬ ካልሆነ አራት ማዕዘን ጋር ተመሳሳይ አይደለም።",
        },
        {
          id: "n2-6",
          title: "Practise yourself, Banchi",
          titleAm: "ራስሽን ሞክሪ ባንቺ",
          body:
            "Sides of quadrilateral 1: 2, 5, 6, 8. Shortest side of a similar quadrilateral 2: 3. Find the other sides.\nAnswer: Use k = 3/2. Sides: 3, 7.5, 9, 12.",
          bodyAm:
            "የአራት ማዕዘን 1 ጎኖች፡ 2, 5, 6, 8። የተመሳሳዩ አራት ማዕዘን 2 አጭሩ ጎን፡ 3። ሌሎቹን ጎኖች ፈልጊ።\nመልስ፡ k = 3/2። ጎኖች፡ 3, 7.5, 9, 12።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Similar Triangles",
      titleAm: "ተመሳሳይ ትሪያንግሎች",
      body:
        "Banchi, triangles are the most important similar figures in the exam. Two triangles are similar if their corresponding angles are equal AND their corresponding sides are proportional.",
      bodyAm:
        "ባንቺ፣ ትሪያንግሎች በፈተና ውስጥ በጣም አስፈላጊ ተመሳሳይ ምስሎች ናቸው። ሁለት ትሪያንግሎች ተዛማጅ ማዕዘኖቻቸው እኩል እና ተዛማጅ ጎኖቻቸው የተመጣጠኑ ከሆኑ ተመሳሳይ ናቸው።",
      children: [
        {
          id: "n3-1",
          title: "How to write it",
          titleAm: "እንዴት መጻፍ",
          body:
            "If △ABC ∼ △DEF, then:\n∠A = ∠D, ∠B = ∠E, ∠C = ∠F\nAB/DE = BC/EF = AC/DF\n\nBanchi, the order of letters tells you which angles match. A matches D, B matches E, C matches F.",
          bodyAm:
            "△ABC ∼ △DEF ከሆነ፡\n∠A = ∠D, ∠B = ∠E, ∠C = ∠F\nAB/DE = BC/EF = AC/DF\n\nባንቺ፣ የፊደሎቹ ቅደም ተከተል የትኞቹ ማዕዘኖች እንደሚመሳሰሉ ይነግርሻል። A ከ D ጋር፣ B ከ E ጋር፣ C ከ F ጋር።",
        },
        {
          id: "n3-2",
          title: "Example — Find the missing angle",
          titleAm: "ምሳሌ — የጎደለውን ማዕዘን ፈልጊ",
          body:
            "In △LMN: ∠L = 105°, ∠M = 29°. Find ∠N.\nSum of angles in a triangle = 180°.\n∠N = 180° − 105° − 29° = 46°.\n\nNow in △PQR: ∠Q = 29°, ∠R = 46°. Find ∠P.\n∠P = 180° − 29° − 46° = 105°.\n\nSo ∠L = ∠P = 105°, ∠M = ∠Q = 29°, ∠N = ∠R = 46°. This means △LMN ∼ △PQR (if the sides are also proportional).",
          bodyAm:
            "△LMN ውስጥ፡ ∠L = 105°, ∠M = 29°። ∠N ፈልጊ።\nየትሪያንግል ማዕዘኖች ድምር = 180°።\n∠N = 180° − 105° − 29° = 46°።",
        },
        {
          id: "n3-3",
          title: "Example — Find missing sides",
          titleAm: "ምሳሌ — የጎደሉ ጎኖችን ፈልጊ",
          body:
            "Given △ABC ∼ △DEF with:\nAB = 15, DE = 10, BC = 20, EF = y, AC = x − 2, DF = 6.\n\nSet up ratios: 15/10 = 20/y = (x − 2)/6.\n15/10 = 3/2.\n20/y = 3/2 → y = 40/3.\n(x − 2)/6 = 3/2 → x − 2 = 9 → x = 11.",
          bodyAm:
            "△ABC ∼ △DEF ሲሆኑ AB = 15, DE = 10, BC = 20, EF = y, AC = x − 2, DF = 6።\n15/10 = 20/y = (x − 2)/6.\n15/10 = 3/2. 20/y = 3/2 → y = 40/3. (x − 2)/6 = 3/2 → x = 11።",
        },
        {
          id: "n3-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, be careful which side matches which. The correspondence depends on the ORDER of letters. If you write △ABC ∼ △DEF, then AB matches DE (not EF or FD). Read the problem carefully and match by position.",
          bodyAm:
            "ባንቺ፣ የትኛው ጎን ከየትኛው ጋር እንደሚመሳሰል ተጠንቀቂ። ተዛማጅነቱ በፊደሎቹ ቅደም ተከተል ላይ ይመረኮዛል። △ABC ∼ △DEF ብለሽ ከጻፍሽ AB ከ DE ጋር ይመሳሰላል (ከ EF ወይም FD አይደለም)።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Three Tests for Similarity of Triangles",
      titleAm: "ሦስቱ የትሪያንግል ተመሳሳይነት ምርመራዎች",
      body:
        "Banchi, to prove two triangles are similar, you don't need to check BOTH angles and ALL three sides. You only need ONE of these three shortcuts.",
      bodyAm:
        "ባንቺ፣ ሁለት ትሪያንግሎች ተመሳሳይ መሆናቸውን ለማረጋገጥ ሁሉንም ማዕዘኖች እና ሁሉንም ጎኖች ማረጋገጥ አያስፈልግም። ከእነዚህ ሦስት አቋራጮች አንዱ ብቻ በቂ ነው።",
      children: [
        {
          id: "n4-1",
          title: "Test 1 — AA (Angle-Angle)",
          titleAm: "ምርመራ 1 — AA (ማዕዘን-ማዕዘን)",
          body:
            "If two angles of one triangle equal two angles of another triangle, then the triangles are similar.\n\nWhy does this work? Because the third angle is automatically determined (180° − sum of two angles).\n\nExample:\n     A                    D\n     /\\                   /\\\n    /  \\                 /  \\\n   /40° \\               /40° \\\n  B─────C              E─────F\n     ∠B = ∠E (both 60°)\n     Then △ABC ∼ △DEF.",
          bodyAm:
            "የአንድ ትሪያንግል ሁለት ማዕዘኖች ከሌላው ትሪያንግል ሁለት ማዕዘኖች ጋር እኩል ከሆኑ ትሪያንግሎቹ ተመሳሳይ ናቸው።",
        },
        {
          id: "n4-2",
          title: "Test 2 — SAS (Side-Angle-Side)",
          titleAm: "ምርመራ 2 — SAS (ጎን-ማዕዘን-ጎን)",
          body:
            "If one angle of a triangle equals one angle of another triangle AND the two sides forming that angle are proportional, then the triangles are similar.\n\nExample:\n△ABC has AB = 4, AC = 6, ∠A = 50°.\n△DEF has DE = 6, DF = 9, ∠D = 50°.\nAB/DE = 4/6 = 2/3.\nAC/DF = 6/9 = 2/3.  ✓ proportional\n∠A = ∠D.  ✓ equal angle between the two sides\nSo △ABC ∼ △DEF by SAS.",
          bodyAm:
            "የአንድ ትሪያንግል አንድ ማዕዘን ከሌላው ማዕዘን ጋር እኩል ከሆነ እና ያንን ማዕዘን የሚሠሩት ሁለት ጎኖች የተመጣጠኑ ከሆኑ ትሪያንግሎቹ ተመሳሳይ ናቸው።",
        },
        {
          id: "n4-3",
          title: "Test 3 — SSS (Side-Side-Side)",
          titleAm: "ምርመራ 3 — SSS (ጎን-ጎን-ጎን)",
          body:
            "If all three sides of one triangle are proportional to all three sides of another triangle, then the triangles are similar.\n\nExample:\n△ABC: sides 8, 10, 16.\n△DEF: sides 4, 5, 8.\n8/4 = 2, 10/5 = 2, 16/8 = 2. All equal → △ABC ∼ △DEF by SSS.",
          bodyAm:
            "የአንድ ትሪያንግል ሦስቱም ጎኖች ከሌላው ትሪያንግል ሦስቱም ጎኖች ጋር የተመጣጠኑ ከሆኑ ትሪያንግሎቹ ተመሳሳይ ናቸው።",
        },
        {
          id: "n4-4",
          title: "Which test to use?",
          titleAm: "የትኛውን ምርመራ መጠቀም?",
          body:
            "Banchi, choose based on what the question gives you:\n• Given 2 angles? → Use AA.\n• Given 2 sides + the angle between them? → Use SAS.\n• Given all 3 sides? → Use SSS.\n\nIf the problem gives you different information, use the definition: check both angles and sides.",
          bodyAm:
            "ባንቺ፣ ጥያቄው በሚሰጥሽው መረጃ ላይ ተመስርተሽ ምረጪ፡\n• 2 ማዕዘኖች ከተሰጡ? → AA ተጠቀሚ።\n• 2 ጎኖች + በመካከላቸው ያለው ማዕዘን? → SAS ተጠቀሚ።\n• ሦስቱም ጎኖች? → SSS ተጠቀሚ።",
        },
        {
          id: "n4-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, SSA (Side-Side-Angle) is NOT a valid test for similarity. The angle must be BETWEEN the two sides. This is the most common trap in the exam.",
          bodyAm:
            "ባንቺ፣ SSA (ጎን-ጎን-ማዕዘን) ትክክለኛ የተመሳሳይነት ምርመራ አይደለም። ማዕዘኑ በሁለቱ ጎኖች መካከል መሆን አለበት። ይህ በፈተና በጣም ተደጋጋሚ ወጥመድ ነው።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Perimeter and Area of Similar Triangles",
      titleAm: "የተመሳሳይ ትሪያንግሎች ዙሪያ እና ስፋት",
      body:
        "Banchi, when two triangles are similar with scale factor k, there are two beautiful rules for perimeter and area.",
      bodyAm:
        "ባንቺ፣ ሁለት ትሪያንግሎች በ k መጠን ቅንጅት ተመሳሳይ ሲሆኑ ለዙሪያ እና ስፋት ሁለት ውብ ደንቦች አሉ።",
      children: [
        {
          id: "n5-1",
          title: "Perimeter rule",
          titleAm: "የዙሪያ ደንብ",
          body:
            "If △ABC ∼ △DEF with scale factor k, then:\nPerimeter(△ABC) / Perimeter(△DEF) = k.\n\nThe perimeter ratio is the SAME as the side ratio.",
          bodyAm:
            "△ABC ∼ △DEF በ k መጠን ቅንጅት ከሆነ፡\nየ△ABC ዙሪያ / የ△DEF ዙሪያ = k።\nየዙሪያ ጥምርታ ከጎን ጥምርታ ጋር ተመሳሳይ ነው።",
        },
        {
          id: "n5-2",
          title: "Area rule (very important!)",
          titleAm: "የስፋት ደንብ (በጣም አስፈላጊ!)",
          body:
            "If △ABC ∼ △DEF with scale factor k, then:\nArea(△ABC) / Area(△DEF) = k².\n\nThe area ratio is the SQUARE of the side ratio.\n\nExample: if sides are in ratio 2:3, then areas are in ratio 4:9.",
          bodyAm:
            "△ABC ∼ △DEF በ k መጠን ቅንጅት ከሆነ፡\nየ△ABC ስፋት / የ△DEF ስፋት = k²።\nየስፋት ጥምርታ የጎን ጥምርታ ካሬ ነው።\nምሳሌ፡ ጎኖች በ 2:3 ጥምርታ ከሆኑ ስፋቶች በ 4:9 ጥምርታ ናቸው።",
        },
        {
          id: "n5-3",
          title: "Altitude rule",
          titleAm: "የከፍታ ደንብ",
          body:
            "The ratio of corresponding altitudes of similar triangles is also k. So altitudes follow the same rule as sides and perimeter.",
          bodyAm:
            "የተመሳሳይ ትሪያንግሎች ተዛማጅ ከፍታዎች ጥምርታም k ነው። ስለዚህ ከፍታዎች እንደ ጎኖች እና ዙሪያ ተመሳሳይ ደንብ ይከተላሉ።",
        },
        {
          id: "n5-4",
          title: "Examples",
          titleAm: "ምሳሌዎች",
          body:
            "Example 1: Sides are 8 cm and 6 cm. Ratio = 8/6 = 4/3. Perimeter ratio = 4/3. Area ratio = 16/9.\n\nExample 2: Areas are 64 cm² and 100 cm². If a side of the smaller is 4 cm, find the side of the larger.\n(4/x)² = 64/100 → 4/x = 8/10 → x = 5 cm.",
          bodyAm:
            "ምሳሌ 1፡ ጎኖች 8 ሴሜ እና 6 ሴሜ። ጥምርታ = 4/3። የዙሪያ ጥምርታ = 4/3። የስፋት ጥምርታ = 16/9።\nምሳሌ 2፡ ስፋቶች 64 እና 100 ሴሜ²። የትንሹ ጎን 4 ሴሜ ከሆነ የትልቁን ጎን ፈልጊ። x = 5 ሴሜ።",
        },
        {
          id: "n5-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, the number one trap: students double the area when the side doubles. WRONG! If side doubles (k = 2), area becomes 4 times as big (k² = 4). If side triples, area becomes 9 times as big. Area ratio is always k², not k.",
          bodyAm:
            "ባንቺ፣ ቁጥር አንድ ወጥመድ፡ ተማሪዎች ጎን ሲጨምር ስፋቱን በእጥፍ ያደርጋሉ። ስህተት! ጎን እጥፍ ከሆነ (k = 2) ስፋት 4 እጥፍ ይሆናል (k² = 4)። ጎን ሦስት እጥፍ ከሆነ ስፋት 9 እጥፍ ይሆናል። የስፋት ጥምርታ ሁልጊዜ k² ነው፣ k አይደለም።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Real-Life Applications",
      titleAm: "የዕለት ተዕለት አጠቃቀሞች",
      body:
        "Banchi, similar triangles are used to measure things that are too tall or too far to measure directly. This is one of the most useful ideas in real life.",
      bodyAm:
        "ባንቺ፣ ተመሳሳይ ትሪያንግሎች በቀጥታ ለመለካት በጣም ረጅም ወይም በጣም ሩቅ የሆኑ ነገሮችን ለመለካት ያገለግላሉ። ይህ በእውነተኛ ሕይወት ውስጥ ከሚጠቅሙ ሐሳቦች አንዱ ነው።",
      children: [
        {
          id: "n6-1",
          title: "Measuring a tree or building",
          titleAm: "ዛፍ ወይም ሕንፃ መለካት",
          body:
            "If you know your height and your shadow, and you measure the shadow of a tree, you can find the tree's height.\n\nExample: A man 1.80 m tall casts a shadow of 4.2 m. The same building casts a shadow of 28 m. How tall is the building?\n\nh/28 = 1.80/4.2 → h = 28 × 1.80 / 4.2 = 12 m.",
          bodyAm:
            "ቁመትሽን እና ጥላሽን ካወቅሽ እና የዛፉን ጥላ ከለካሽ የዛፉን ቁመት ማግኘት ትችያለሽ።\nምሳሌ፡ አንድ ሰው 1.80 ሜትር ቁመት ያለው 4.2 ሜትር ጥላ ይፈጥራል። ሕንፃው 28 ሜትር ጥላ ይፈጥራል። ቁመቱ ስንት ነው? h = 12 ሜትር።",
        },
        {
          id: "n6-2",
          title: "⚙ Remember the setup",
          titleAm: "⚙ አዘጋገቡን አስታውሺ",
          body:
            "Draw two similar right triangles — one for the small object, one for the large. Set up the ratio: (height of object) / (its shadow) = (height of big object) / (its shadow). Then solve.",
          bodyAm:
            "ሁለት ተመሳሳይ ቀኝ-ማዕዘን ትሪያንግሎች ሳሊ — አንዱ ለትንሹ ነገር፣ ሌላው ለትልቁ። ጥምርታ አዘጋጂ፡ (ቁመት)/(ጥላ) = (የትልቁ ቁመት)/(ጥላው)። ከዚያ ፍቺ።",
        },
      ],
    },

    {
      id: "n7",
      title: "7. Exam Strategy — Chapter 4",
      titleAm: "የፈተና ስልት — ምዕራፍ 4",
      body:
        "Banchi, before answering any similarity question, run through these checks.",
      bodyAm:
        "ባንቺ፣ ማንኛውንም የተመሳሳይነት ጥያቄ ከመመለስሽ በፊት እነዚህን ቼኮች አካሂጂ።",
      children: [
        {
          id: "n7-1",
          title: "Check 1 — Match the letters",
          titleAm: "ቼክ 1 — ፊደሎቹን አዛምደሽ",
          body:
            "When you see △ABC ∼ △DEF, immediately write down: A↔D, B↔E, C↔F. This tells you which angles match and which sides match.",
          bodyAm:
            "△ABC ∼ △DEF ስታይ ወዲያውኑ ጻፊ፡ A↔D, B↔E, C↔F። ይህ የትኞቹ ማዕዘኖች እና ጎኖች እንደሚመሳሰሉ ይነግርሻል።",
        },
        {
          id: "n7-2",
          title: "Check 2 — Which test?",
          titleAm: "ቼክ 2 — የትኛው ምርመራ?",
          body:
            "2 angles → AA. 2 sides + angle between → SAS. 3 sides → SSS. Then write the reason next to your answer.",
          bodyAm:
            "2 ማዕዘኖች → AA። 2 ጎኖች + በመካከላቸው ማዕዘን → SAS። 3 ጎኖች → SSS። ከዚያ ምክንያቱን ከመልስሽ ጎን ጻፊ።",
        },
        {
          id: "n7-3",
          title: "Check 3 — Perimeter or area?",
          titleAm: "ቼክ 3 — ዙሪያ ወይስ ስፋት?",
          body:
            "Perimeter uses k. Area uses k². Banchi, the answer you give must match the question. If the question asks for area ratio, give k², not k.",
          bodyAm:
            "ዙሪያ k ይጠቀማል። ስፋት k² ይጠቀማል። ባንቺ፣ የምትሰጪው መልስ ከጥያቄው ጋር መመሳሰል አለበት። ጥያቄው የስፋት ጥምርታ ከጠየቀ k² ስጪ፣ k አይደለም።",
        },
        {
          id: "n7-4",
          title: "Check 4 — Does the answer make sense?",
          titleAm: "ቼክ 4 — መልሱ ትርጉም አለው?",
          body:
            "If a side ratio is 2:3, then the area ratio must be 4:9 (larger). If your answer is smaller for a larger triangle, you made a mistake.",
          bodyAm:
            "የጎን ጥምርታ 2:3 ከሆነ የስፋት ጥምርታ 4:9 መሆን አለበት (የበለጠ)። ለትልቁ ትሪያንግል መልስሽ ትንሽ ከሆነ ስህተት ሠርተሻል።",
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
      stem: "Two figures are similar if they have the same:",
      options: ["Size", "Shape", "Area", "Perimeter"],
      answer: "1",
      explanation:
        "Similar means SAME SHAPE, not necessarily same size. Banchi, this is the most basic definition — memorize it.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "Which symbol means 'is similar to'?",
      options: ["≅", "∼", "=", "≈"],
      answer: "1",
      explanation:
        "∼ means 'is similar to'. ≅ means 'is congruent to' (same shape AND size).",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "Every congruent figure is also:",
      options: ["Similar", "Different", "Larger", "Smaller"],
      answer: "0",
      explanation:
        "Congruent means same shape AND same size. That also satisfies 'same shape'. So every congruent figure is similar. But not every similar figure is congruent.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "Are all squares similar to each other?",
      options: ["Yes", "No", "Only if same size", "Only if both are large"],
      answer: "0",
      explanation:
        "All squares have four equal sides and four 90° angles. Their ratios are always equal. So any two squares are similar.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "Are all rectangles similar to each other?",
      options: ["Yes", "No", "Only if same size", "Only if both are large"],
      answer: "1",
      explanation:
        "Not all rectangles. A 2 × 4 rectangle and a 4 × 6 rectangle have different length/width ratios. They are NOT similar. Banchi, only if the length/width ratio is the same are they similar.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "Are all equilateral triangles similar?",
      options: ["Yes", "No", "Only if same side", "Only if both are large"],
      answer: "0",
      explanation:
        "All equilateral triangles have three 60° angles. So their corresponding angles are equal. So yes, all equilateral triangles are similar.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "Two polygons are similar if their corresponding angles are equal AND their corresponding sides are:",
      options: ["Equal", "Proportional", "Parallel", "Perpendicular"],
      answer: "1",
      explanation:
        "Corresponding sides must be proportional (same ratio). If they were equal in length, the figures would be congruent, not just similar.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "If △ABC ∼ △DEF, which angle matches ∠A?",
      options: ["∠D", "∠E", "∠F", "None"],
      answer: "0",
      explanation:
        "Order matters. A matches D, B matches E, C matches F. So ∠A corresponds to ∠D.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "If △ABC ∼ △DEF, which side matches AB?",
      options: ["DE", "EF", "DF", "BC"],
      answer: "0",
      explanation:
        "A matches D and B matches E, so AB matches DE.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "The ratio of two corresponding sides of similar polygons is called:",
      options: ["Perimeter", "Area", "Scale factor", "Diagonal"],
      answer: "2",
      explanation:
        "The scale factor (k) is the ratio of corresponding sides of similar figures.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "The three similarity tests for triangles are:",
      options: ["ASA, AAS, SSA", "AA, SAS, SSS", "SSA, SAS, SSS", "AAA, SSA, SAS"],
      answer: "1",
      explanation:
        "The valid tests are AA, SAS, and SSS. SSA and AAA are NOT valid tests for similarity (AAA means same shape but doesn't guarantee — wait, actually AAA does give similarity; but it's covered by AA). Banchi, memorize AA, SAS, SSS.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "If two triangles have two equal angles, they are similar by which test?",
      options: ["AA", "SAS", "SSS", "SSA"],
      answer: "0",
      explanation:
        "Two equal angles → AA similarity. The third angle is automatically equal.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "If all three sides of one triangle are proportional to all three sides of another, they are similar by:",
      options: ["AA", "SAS", "SSS", "SSA"],
      answer: "2",
      explanation:
        "All three sides proportional → SSS similarity.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "If one angle is equal and the two sides forming it are proportional, they are similar by:",
      options: ["AA", "SAS", "SSS", "SSA"],
      answer: "1",
      explanation:
        "One angle + proportional sides AROUND it → SAS similarity. Banchi, the angle must be BETWEEN the two sides.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "If two similar triangles have side ratio k, what is the ratio of their perimeters?",
      options: ["k", "k²", "2k", "1/k"],
      answer: "0",
      explanation:
        "Perimeter ratio = side ratio = k. The perimeter is just a sum of sides, so it follows the same ratio.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "If two similar triangles have side ratio k, what is the ratio of their areas?",
      options: ["k", "k²", "2k", "1/k"],
      answer: "1",
      explanation:
        "Area ratio = (side ratio)² = k². Banchi, this is the most important formula in section 4.2.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "Sides of two similar triangles are 8 cm and 6 cm. Ratio of their perimeters?",
      options: ["8/6 = 4/3", "64/36 = 16/9", "8/6 = 2/3", "6/8 = 3/4"],
      answer: "0",
      explanation:
        "Perimeter ratio = side ratio = 8/6 = 4/3.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "Sides of two similar triangles are 8 cm and 6 cm. Ratio of their areas?",
      options: ["8/6 = 4/3", "(8/6)² = 16/9", "8/6 = 8/6", "6/8"],
      answer: "1",
      explanation:
        "Area ratio = (side ratio)² = (8/6)² = (4/3)² = 16/9.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "If two similar triangles have a scale factor of 1, they are:",
      options: ["Congruent", "Only similar", "Different", "Impossible"],
      answer: "0",
      explanation:
        "Scale factor 1 means same size AND same shape. So they are congruent. Every congruent figure is similar with k = 1.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "Are a 3 × 5 rectangle and a 6 × 10 rectangle similar?",
      options: ["Yes, k = 2", "No, ratios differ", "Only if rotated", "Cannot tell"],
      answer: "0",
      explanation:
        "Ratio 1: 3/5. Ratio 2: 6/10 = 3/5. Same ratio. So they ARE similar with k = 2. All angles are 90° too.",
    },

    // ---------- MEDIUM MCQ (Q21–Q40) ----------
    {
      id: "q21",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. If AB = 12, DE = 8, BC = 9, find EF.",
      options: ["6", "7", "8", "10"],
      answer: "0",
      explanation:
        "AB/DE = BC/EF → 12/8 = 9/EF → 3/2 = 9/EF → EF = 9 × 2/3 = 6.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. If AB = 15, DE = 10, BC = 20, find EF.",
      options: ["40/3", "30", "15", "25"],
      answer: "0",
      explanation:
        "AB/DE = BC/EF → 15/10 = 20/EF → 3/2 = 20/EF → EF = 40/3.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "medium",
      stem: "In △LMN, ∠L = 105° and ∠M = 29°. Find ∠N.",
      options: ["46°", "56°", "66°", "76°"],
      answer: "0",
      explanation:
        "Sum of angles in a triangle = 180°. ∠N = 180 − 105 − 29 = 46°.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. AB = 4, DE = 6, AC = 6, DF = 9, ∠A = ∠D = 50°. Which test proves similarity?",
      options: ["AA", "SAS", "SSS", "SSA"],
      answer: "1",
      explanation:
        "We have 1 angle equal and 2 sides (forming that angle) proportional (4/6 = 6/9 = 2/3). So SAS.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC has sides 8, 10, 16. △DEF has sides 4, 5, 8. Are they similar?",
      options: ["Yes, by SSS", "Yes, by AA", "No", "Cannot tell"],
      answer: "0",
      explanation:
        "8/4 = 2, 10/5 = 2, 16/8 = 2. All ratios equal → SSS similarity.",
    },
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "The sides of one quadrilateral are 12 cm, 9 cm, 16 cm, and 20 cm. The longest side of a similar quadrilateral is 8 cm. Find the shortest side of the new quadrilateral.",
      options: ["3.6 cm", "4.8 cm", "5 cm", "6 cm"],
      answer: "0",
      explanation:
        "Step 1: Find the scale factor. The longest side of the first = 20 cm. The longest side of the new = 8 cm. So k = 8/20 = 2/5. Step 2: Find the shortest side of the first quadrilateral. Among 12, 9, 16, 20 — the smallest is 9 cm. Step 3: Apply the scale factor: 9 × 2/5 = 18/5 = 3.6 cm. So the shortest side of the new quadrilateral is 3.6 cm.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "The sides of a quadrilateral are 2, 5, 6, 8 cm. Shortest side of a similar quadrilateral is 3 cm. Find the longest side.",
      options: ["12 cm", "10 cm", "15 cm", "9 cm"],
      answer: "0",
      explanation:
        "k = 3/2. Longest side of similar = 8 × 3/2 = 12 cm.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "In a triangle, a line parallel to one side cuts the other two sides. The small triangle formed is:",
      options: ["Congruent to the large", "Similar to the large", "Unrelated", "A rectangle"],
      answer: "1",
      explanation:
        "By AA similarity: the common angle + corresponding angles from parallel lines. So the small triangle is similar to the large one.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Areas of two similar triangles are 64 cm² and 100 cm². If one side of the smaller is 4 cm, find the corresponding side of the larger.",
      options: ["5 cm", "6 cm", "7 cm", "8 cm"],
      answer: "0",
      explanation:
        "(4/x)² = 64/100 → 4/x = 8/10 → x = 5 cm.",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "The ratio of the sides of two similar triangles is 2:3. Smaller area is 36 cm². Find larger area.",
      options: ["81 cm²", "54 cm²", "72 cm²", "100 cm²"],
      answer: "0",
      explanation:
        "Area ratio = (2/3)² = 4/9. So 36 / larger = 4/9 → larger = 36 × 9/4 = 81 cm².",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "A man 1.80 m tall casts a 4.2 m shadow. A tree casts a 28 m shadow. How tall is the tree?",
      options: ["12 m", "10 m", "14 m", "15 m"],
      answer: "0",
      explanation:
        "h/28 = 1.80/4.2 → h = 28 × 1.80 / 4.2 = 12 m.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. ∠A = 40°, ∠B = 60°. Find ∠F.",
      options: ["80°", "60°", "40°", "100°"],
      answer: "0",
      explanation:
        "∠C = 180 − 40 − 60 = 80°. Since C matches F, ∠F = 80°.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "A photograph is enlarged to twice its size. The two photographs are:",
      options: ["Congruent", "Similar", "Neither", "Both"],
      answer: "1",
      explanation:
        "Enlarging gives the same shape but different size, so they are similar with k = 2, not congruent.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with k = 3. If perimeter of △ABC is 12 cm, what is the perimeter of △DEF?",
      options: ["4 cm", "36 cm", "9 cm", "15 cm"],
      answer: "0",
      explanation:
        "Perimeter ratio = side ratio = k. So P(ABC)/P(DEF) = 3 → 12 / P(DEF) = 3 → P(DEF) = 4 cm.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with k = 2. Area of △ABC is 20 cm². Find area of △DEF.",
      options: ["5 cm²", "10 cm²", "40 cm²", "80 cm²"],
      answer: "0",
      explanation:
        "Area ratio = k² = 4. So A(ABC)/A(DEF) = 4 → 20 / A(DEF) = 4 → A(DEF) = 5 cm².",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. If AB = 3, DE = 5, and BC = 6, find EF.",
      options: ["10", "8", "12", "15"],
      answer: "0",
      explanation:
        "3/5 = 6/EF → 3·EF = 30 → EF = 10.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Two similar triangles have perimeters 24 cm and 36 cm. Find the ratio of their areas.",
      options: ["4/9", "2/3", "16/81", "24/36"],
      answer: "0",
      explanation:
        "Perimeter ratio = 24/36 = 2/3 = k. Area ratio = k² = 4/9.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "A square 4 cm × 4 cm and a square 6 cm × 6 cm are similar with what scale factor?",
      options: ["2/3", "3/2", "1", "4/6"],
      answer: "1",
      explanation:
        "k = 6/4 = 3/2. Banchi, always write k as (larger)/(smaller) or as directed by the question.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with AB = x + 2, DE = 6, BC = 15, EF = 10. Find x.",
      options: ["7", "8", "9", "10"],
      answer: "0",
      explanation:
        "(x + 2)/6 = 15/10 → (x + 2)/6 = 3/2 → x + 2 = 9 → x = 7.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with ∠A = 80°, ∠B = 60° and ∠E = 2b + 10. Find b.",
      options: ["25", "30", "35", "40"],
      answer: "0",
      explanation:
        "∠B = ∠E → 60 = 2b + 10 → 50 = 2b → b = 25.",
    },

    // ---------- HARD MCQ (Q41–Q45) ----------
    {
      id: "q41",
      type: "mcq",
      difficulty: "hard",
      stem: "△ABC ∼ △DEF. The length of altitude from A is x + 3. The length of corresponding altitude from D is x. If AB/DE = 5/4, find x.",
      options: ["12", "15", "10", "20"],
      answer: "0",
      explanation:
        "Altitude ratio = side ratio. (x + 3)/x = 5/4 → 4(x + 3) = 5x → 4x + 12 = 5x → x = 12.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "hard",
      stem: "The areas of two similar triangles are 64 cm² and 144 cm². Find the ratio of their corresponding altitudes.",
      options: ["2/3", "8/12", "Both A and B are the same", "16/36"],
      answer: "2",
      explanation:
        "Area ratio = 64/144 = 4/9. Altitude ratio = √(4/9) = 2/3. Note 8/12 reduces to 2/3, so both are the same. Banchi, altitude ratio = √(area ratio).",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "hard",
      stem: "A 12 cm tall book with width 8 cm makes an 18 cm tall, 12 cm wide shadow. What is the scale factor?",
      options: ["3/2", "2/3", "12/18", "8/12"],
      answer: "0",
      explanation:
        "18/12 = 3/2 = k. Also 12/8 = 3/2. Same ratio. So k = 3/2.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "hard",
      stem: "△ABC has sides 16, 23, 31 cm. Perimeter of a similar triangle is 280 cm. Find the longest side of the second triangle.",
      options: ["124 cm", "140 cm", "150 cm", "160 cm"],
      answer: "0",
      explanation:
        "Perimeter of first = 70 cm. k = 280/70 = 4. Longest side = 31 × 4 = 124 cm.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "hard",
      stem: "△ABC ∼ △DEF with side ratio 2/3. If the area of the smaller triangle is 36 cm², what is the area of the larger?",
      options: ["81 cm²", "54 cm²", "24 cm²", "18 cm²"],
      answer: "0",
      explanation:
        "Area ratio = (2/3)² = 4/9. So 36 / A(larger) = 4/9 → A(larger) = 36 × 9/4 = 81 cm².",
    },

    // ---------- SHORT ANSWER (Q46–Q50) ----------
    {
      id: "q46",
      type: "short",
      difficulty: "easy",
      stem: "What does it mean for two figures to be similar?",
      answer: "They have the same shape but not necessarily the same size.",
      explanation:
        "Similarity: same shape. Congruence: same shape AND same size. Every congruent figure is similar, but not vice versa.",
    },
    {
      id: "q47",
      type: "short",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with AB = 6, DE = 9, BC = 8. Find EF.",
      answer: "12",
      explanation:
        "6/9 = 8/EF → 6·EF = 72 → EF = 12.",
    },
    {
      id: "q48",
      type: "short",
      difficulty: "medium",
      stem: "Two similar triangles have side ratio 5:7. Find the ratio of their perimeters and areas.",
      answer: "Perimeter ratio = 5:7. Area ratio = 25:49.",
      explanation:
        "Perimeter follows the side ratio. Area = side ratio squared.",
    },
    {
      id: "q49",
      type: "short",
      difficulty: "hard",
      stem: "A man 1.80 m tall makes a 9 m shadow. A palm tree makes a 26 m shadow. Find the height of the tree.",
      answer: "5.2 m",
      explanation:
        "h/26 = 1.80/9 → h = 26 × 1.80 / 9 = 26 × 0.2 = 5.2 m.",
    },
    {
      id: "q50",
      type: "short",
      difficulty: "hard",
      stem: "ABCD is a trapezium with parallel sides BC and AD. Its diagonals BD and AC meet at E. Prove △BEC ∼ △AED.",
      answer: "They are similar by AA.",
      explanation:
        "∠BEC = ∠AED (vertically opposite angles). ∠BCE = ∠DAE (alternate angles since BC ∥ AD). So two pairs of angles equal → AA similarity.",
    },
    // ============================================================
    // BATCH 2 — Q51 to Q100
    // ============================================================

    // ---------- EASY MCQ (Q51–Q70) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "easy",
      stem: "Are two circles always similar?",
      options: ["Yes", "No", "Only if same radius", "Only if overlapping"],
      answer: "0",
      explanation:
        "All circles have the same shape (perfectly round). Only their sizes differ. So any two circles are similar.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "easy",
      stem: "Are a circle and an oval (ellipse) similar?",
      options: ["Yes", "No", "Only if rotated", "Only if same area"],
      answer: "1",
      explanation:
        "A circle is perfectly round. An oval is stretched. Their shapes differ, so they are NOT similar.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "easy",
      stem: "Are two isosceles triangles always similar?",
      options: ["Yes", "No", "Only if same base", "Only if both are large"],
      answer: "1",
      explanation:
        "Not always. Isosceles just means two sides equal. The apex angles can differ. So NOT all isosceles triangles are similar.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these pairs is ALWAYS similar?",
      options: ["Two rectangles", "Two squares", "Two rhombuses", "Two triangles"],
      answer: "1",
      explanation:
        "Two squares always have the same shape (four 90° angles and equal sides). The others do NOT always have the same shape.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is NOT a similarity test?",
      options: ["AA", "SAS", "SSS", "SSA"],
      answer: "3",
      explanation:
        "SSA (Side-Side-Angle) is NOT a valid similarity test. The angle must be BETWEEN the two sides, which is SAS. Banchi, this is a common trap.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "easy",
      stem: "The ratio of corresponding sides of two similar triangles is 2:5. The ratio of their perimeters is:",
      options: ["2:5", "4:25", "5:2", "1:1"],
      answer: "0",
      explanation:
        "Perimeter ratio = side ratio = 2:5.",
    },
    {
      id: "q57",
      type: "mcq",
      difficulty: "easy",
      stem: "The ratio of corresponding sides of two similar triangles is 2:5. The ratio of their areas is:",
      options: ["2:5", "4:25", "5:2", "1:1"],
      answer: "1",
      explanation:
        "Area ratio = (side ratio)² = (2/5)² = 4/25.",
    },
    {
      id: "q58",
      type: "mcq",
      difficulty: "easy",
      stem: "If the scale factor between two similar figures is 3, the larger figure has sides:",
      options: ["3 times the smaller", "9 times the smaller", "1/3 of the smaller", "Same as the smaller"],
      answer: "0",
      explanation:
        "Scale factor = side ratio. k = 3 means each side is 3 times longer.",
    },
    {
      id: "q59",
      type: "mcq",
      difficulty: "easy",
      stem: "If the scale factor is 3, the larger figure has area:",
      options: ["3 times the smaller", "9 times the smaller", "1/3 of the smaller", "Same as the smaller"],
      answer: "1",
      explanation:
        "Area = k² times the smaller. k = 3 → 3² = 9.",
    },
    {
      id: "q60",
      type: "mcq",
      difficulty: "easy",
      stem: "Similar triangles have the same:",
      options: ["Area", "Perimeter", "Shape", "All of the above"],
      answer: "2",
      explanation:
        "Similar figures share SHAPE, not size. So area and perimeter can differ.",
    },
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "The corresponding angles of two similar triangles are:",
      options: ["Different", "Equal", "Supplementary", "Complementary"],
      answer: "1",
      explanation:
        "Similar figures have EQUAL corresponding angles. That is one of the two conditions for similarity.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "The corresponding sides of two similar triangles are:",
      options: ["Equal", "Proportional", "Parallel", "Perpendicular"],
      answer: "1",
      explanation:
        "Corresponding sides are PROPORTIONAL (same ratio), not necessarily equal.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Two triangles are similar with k = 1. They are also:",
      options: ["Impossible", "Congruent", "Different shapes", "Unequal areas"],
      answer: "1",
      explanation:
        "k = 1 means same size AND same shape → congruent.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "If △ABC ∼ △PQR, which is true?",
      options: ["∠A = ∠P", "AB = PQ", "AC = PR", "All of the above"],
      answer: "0",
      explanation:
        "Corresponding angles are equal: ∠A = ∠P. Sides are proportional, not necessarily equal. So only A is always true.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "A line parallel to one side of a triangle cuts the other two sides. The small triangle is:",
      options: ["Congruent", "Similar", "Larger", "Not related"],
      answer: "1",
      explanation:
        "By AA similarity: the common angle at the top + two corresponding angles from parallel lines. So the small triangle is similar to the large.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these shapes is NOT always similar to another of the same type?",
      options: ["Circle", "Square", "Equilateral triangle", "Rectangle"],
      answer: "3",
      explanation:
        "Not all rectangles are similar (a 2×4 and a 4×6 rectangle differ). Circles, squares, and equilateral triangles are always similar to others of the same type.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "If two similar triangles have area ratio 25:36, then their side ratio is:",
      options: ["5:6", "25:36", "36:25", "6:5"],
      answer: "0",
      explanation:
        "Side ratio = √(area ratio) = √(25/36) = 5/6.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "If two similar triangles have area ratio 25:36, then their perimeter ratio is:",
      options: ["5:6", "25:36", "36:25", "6:5"],
      answer: "0",
      explanation:
        "Perimeter ratio = side ratio = √(area ratio) = 5/6. Same as the side ratio.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "The symbol ∼ is read as:",
      options: ["Is equal to", "Is congruent to", "Is similar to", "Is greater than"],
      answer: "2",
      explanation:
        "∼ = is similar to. ≅ = is congruent to.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Congruent triangles are always similar. True or false?",
      options: ["True", "False", "Only if equal sides", "Only if same angles"],
      answer: "0",
      explanation:
        "Congruent means same shape AND same size. Same shape is enough for similarity. So yes, always similar.",
    },

    // ---------- MEDIUM MCQ (Q71–Q90) ----------
    {
      id: "q71",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with AB = 8, BC = 12, DE = 6. Find EF.",
      options: ["9", "8", "10", "16"],
      answer: "0",
      explanation:
        "8/6 = 12/EF → 8·EF = 72 → EF = 9.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with AB = 5, BC = 7, AC = 9, DE = 10. Find EF and DF.",
      options: ["EF = 14, DF = 18", "EF = 14, DF = 20", "EF = 7, DF = 9", "EF = 10, DF = 14"],
      answer: "0",
      explanation:
        "k = 10/5 = 2. EF = 7 × 2 = 14. DF = 9 × 2 = 18.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with ∠A = 60°, ∠B = 70°. Find ∠F.",
      options: ["50°", "60°", "70°", "80°"],
      answer: "0",
      explanation:
        "∠C = 180 − 60 − 70 = 50°. Since C matches F, ∠F = 50°.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with ∠A = 45° and ∠D = (3x)°. Find x.",
      options: ["15", "45", "135", "5"],
      answer: "0",
      explanation:
        "∠A = ∠D → 45 = 3x → x = 15.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "medium",
      stem: "In △ABC, ∠A = 80° and ∠B = (a − 23)°. In △DEF, ∠D = 40° and ∠E = 80°. If △ABC ∼ △DEF with ∠A matching ∠E and ∠B matching ∠D, find a.",
      options: ["63", "40", "57", "80"],
      answer: "0",
      explanation:
        "The correspondence tells us ∠A = ∠E and ∠B = ∠D. Step 1: Check ∠A = ∠E: 80 = 80 ✓. Step 2: Use ∠B = ∠D: a − 23 = 40. Step 3: Add 23: a = 63. So a = 63.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "medium",
      stem: "In similar triangles, if the ratio of perimeters is 3:4, the ratio of areas is:",
      options: ["3:4", "9:16", "4:3", "16:9"],
      answer: "1",
      explanation:
        "Side ratio = perimeter ratio = 3:4. Area ratio = (3/4)² = 9:16.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "medium",
      stem: "Two similar triangles have areas 16 cm² and 25 cm². Find the side ratio.",
      options: ["4:5", "16:25", "5:4", "8:10"],
      answer: "0",
      explanation:
        "Side ratio = √(16/25) = 4/5 = 4:5.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "medium",
      stem: "Two similar triangles have perimeters 20 cm and 30 cm. Their areas are in ratio:",
      options: ["2:3", "4:9", "3:2", "9:4"],
      answer: "1",
      explanation:
        "Side ratio = 20/30 = 2/3. Area ratio = (2/3)² = 4/9 = 4:9.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "medium",
      stem: "A map has scale 1:10000. A distance on the map is 5 cm. What is the actual distance?",
      options: ["500 m", "50 m", "5000 m", "5 km"],
      answer: "0",
      explanation:
        "Actual = 5 cm × 10000 = 50000 cm = 500 m. Banchi, watch units — 100 cm = 1 m.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "medium",
      stem: "A model car is built at scale 1:20. If the model is 15 cm long, the real car is:",
      options: ["3 m", "30 m", "1.5 m", "300 cm"],
      answer: "0",
      explanation:
        "Actual = 15 cm × 20 = 300 cm = 3 m.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. If AB/DE = 3/4 and perimeter of △ABC = 24 cm, find perimeter of △DEF.",
      options: ["32 cm", "18 cm", "28 cm", "36 cm"],
      answer: "0",
      explanation:
        "P(ABC)/P(DEF) = 3/4 → 24 / P(DEF) = 3/4 → P(DEF) = 24 × 4/3 = 32 cm.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with side ratio 5/3. Area of △ABC = 75 cm². Area of △DEF is:",
      options: ["27 cm²", "45 cm²", "125 cm²", "135 cm²"],
      answer: "0",
      explanation:
        "Area ratio = (5/3)² = 25/9. So 75 / A(DEF) = 25/9 → A(DEF) = 75 × 9/25 = 27 cm².",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "medium",
      stem: "In similar triangles with side ratio 4:5, if the smaller has area 48 cm², the larger has area:",
      options: ["75 cm²", "60 cm²", "100 cm²", "80 cm²"],
      answer: "0",
      explanation:
        "Area ratio = 16:25. So 48/A(larger) = 16/25 → A(larger) = 48 × 25/16 = 75 cm².",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "medium",
      stem: "△PQR ∼ △LMN. If PQ = 12, LM = 8, and QR = 9, find MN.",
      options: ["6", "7", "5", "8"],
      answer: "0",
      explanation:
        "12/8 = 9/MN → 12·MN = 72 → MN = 6.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "medium",
      stem: "A tree casts a shadow of 24 m. A 1.5 m pole casts a shadow of 3 m. How tall is the tree?",
      options: ["12 m", "16 m", "20 m", "8 m"],
      answer: "0",
      explanation:
        "h/24 = 1.5/3 → h = 24 × 1.5 / 3 = 12 m.",
    },
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. If AB = 6 cm, BC = 8 cm, AC = 10 cm, and DE = 9 cm, find EF + DF.",
      options: ["27 cm", "12 cm", "18 cm", "24 cm"],
      answer: "0",
      explanation:
        "k = 9/6 = 3/2. EF = 8 × 3/2 = 12. DF = 10 × 3/2 = 15. Sum = 27 cm.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "The shadow of a 2 m tall man is 5 m. At the same time, a building casts a 30 m shadow. How tall is the building?",
      options: ["12 m", "15 m", "10 m", "20 m"],
      answer: "0",
      explanation:
        "h/30 = 2/5 → h = 30 × 2/5 = 12 m.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Two similar triangles have areas 100 cm² and 144 cm². If one side of the larger is 12 cm, find the corresponding side of the smaller.",
      options: ["10 cm", "9 cm", "8 cm", "11 cm"],
      answer: "0",
      explanation:
        "Side ratio = √(100/144) = 10/12. So smaller side/12 = 10/12 → smaller side = 10 cm.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △ADE with DE ∥ BC. AB = 6, AD = 2, BC = 9. Find DE.",
      options: ["3", "4.5", "6", "1.5"],
      answer: "0",
      explanation:
        "AD/AB = DE/BC → 2/6 = DE/9 → DE = 3.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. The altitude from A is 4 cm; corresponding altitude from D is 6 cm. If area of △ABC = 20 cm², find area of △DEF.",
      options: ["45 cm²", "30 cm²", "40 cm²", "60 cm²"],
      answer: "0",
      explanation:
        "Altitude ratio = 4/6 = 2/3. Area ratio = (2/3)² = 4/9. So 20/A(DEF) = 4/9 → A(DEF) = 45 cm².",
    },

    // ---------- HARD MCQ (Q91–Q95) ----------
       {
      id: "q91",
      type: "mcq",
      difficulty: "hard",
      stem: "△ABC ∼ △DEF. Their perimeters are (8 + y) and (3y − 12). Their side ratio is 4 : 3. Find the perimeter of △DEF.",
      options: ["12", "24", "36", "48"],
      answer: "0",
      explanation:
        "Step 1: Perimeter ratio = side ratio = 4/3. So (8 + y) / (3y − 12) = 4/3. Step 2: Cross-multiply: 3(8 + y) = 4(3y − 12). Step 3: Expand: 24 + 3y = 12y − 48. Step 4: Rearrange: 24 + 48 = 12y − 3y → 72 = 9y → y = 8. Step 5: P(DEF) = 3(8) − 12 = 24 − 12 = 12. Verify: P(ABC) = 8 + 8 = 16. Ratio 16/12 = 4/3 ✓. So P(DEF) = 12.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "hard",
      stem: "In △ABC, D is on AB and E is on AC with DE ∥ BC. AD = 3, DB = 5, AE = 4. Find EC.",
      options: ["20/3", "15/4", "6", "8"],
      answer: "0",
      explanation:
        "AD/DB = AE/EC → 3/5 = 4/EC → 3·EC = 20 → EC = 20/3.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "hard",
      stem: "In △ABC, D is the midpoint of AB and E is the midpoint of AC. The ratio of areas of △ADE to △ABC is:",
      options: ["1:4", "1:2", "1:3", "2:3"],
      answer: "0",
      explanation:
        "Side ratio = AD/AB = 1/2. Area ratio = (1/2)² = 1/4 = 1:4. Banchi, midpoint triangle is always 1/4 of the original area.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "hard",
      stem: "△ABC has an area of 100 cm². D, E, F are midpoints of AB, BC, AC. Find the area of △DEF.",
      options: ["25 cm²", "50 cm²", "75 cm²", "20 cm²"],
      answer: "0",
      explanation:
        "Midpoint triangle: side ratio = 1/2. Area ratio = 1/4. So A(DEF) = 100 × 1/4 = 25 cm².",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "hard",
      stem: "In △ABC, DE ∥ BC. Area(△ADE)/Area(△ABC) = 9/25. If AD = 6, find AB.",
      options: ["10", "12", "15", "18"],
      answer: "0",
      explanation:
        "Side ratio = √(9/25) = 3/5. So AD/AB = 3/5 → 6/AB = 3/5 → AB = 10.",
    },

    // ---------- SHORT ANSWER (Q96–Q100) ----------
    {
      id: "q96",
      type: "short",
      difficulty: "easy",
      stem: "State the two conditions for two polygons to be similar.",
      answer:
        "1) Corresponding angles are equal. 2) Corresponding sides are proportional.",
      explanation:
        "Both conditions must hold. If only angles are equal, shape is same but size may differ in a specific way — still similar. But if sides are not proportional, they are NOT similar.",
    },
    {
      id: "q97",
      type: "short",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with AB = 4, DE = 6, BC = 6, EF = 9, ∠B = ∠E = 40°. Which similarity test applies?",
      answer: "SAS",
      explanation:
        "We have one equal angle (∠B = ∠E) and two proportional sides around it (4/6 = 6/9 = 2/3). So SAS similarity.",
    },
    {
      id: "q98",
      type: "short",
      difficulty: "medium",
      stem: "The sides of a triangle are 4 cm, 9 cm, 11 cm. A similar triangle has its shortest side 12 cm. Find the other two sides.",
      answer: "27 cm and 33 cm",
      explanation:
        "k = 12/4 = 3. Other sides: 9 × 3 = 27 cm, 11 × 3 = 33 cm.",
    },
    {
      id: "q99",
      type: "short",
      difficulty: "hard",
      stem: "In △ABC, D is on AB, E is on AC with DE ∥ BC. If AD = 4 cm, DB = 6 cm, AE = 5 cm, find EC.",
      answer: "7.5 cm",
      explanation:
        "AD/DB = AE/EC → 4/6 = 5/EC → 4·EC = 30 → EC = 7.5 cm.",
    },
    {
      id: "q100",
      type: "short",
      difficulty: "hard",
      stem: "A building casts a shadow of 45 m. At the same time, a 3 m pole casts a shadow of 5 m. Find the height of the building.",
      answer: "27 m",
      explanation:
        "h/45 = 3/5 → h = 45 × 3/5 = 27 m.",
    },
        // ============================================================
    // BATCH 3 — Q101 to Q150
    // ============================================================

    // ---------- EASY MCQ (Q101–Q120) ----------
    {
      id: "q101",
      type: "mcq",
      difficulty: "easy",
      stem: "Two triangles are similar with side ratio 3 : 7. Perimeter ratio is:",
      options: ["3 : 7", "9 : 49", "7 : 3", "1 : 1"],
      answer: "0",
      explanation:
        "Perimeter ratio equals side ratio. So 3 : 7.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "easy",
      stem: "Two triangles are similar with side ratio 3 : 7. Area ratio is:",
      options: ["3 : 7", "9 : 49", "7 : 3", "1 : 1"],
      answer: "1",
      explanation:
        "Area ratio = (side ratio)² = (3/7)² = 9/49 = 9 : 49.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "easy",
      stem: "If two similar triangles have area ratio 1 : 4, the side ratio is:",
      options: ["1 : 2", "1 : 4", "1 : 16", "2 : 1"],
      answer: "0",
      explanation:
        "Side ratio = √(area ratio) = √(1/4) = 1/2 = 1 : 2.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "easy",
      stem: "If two similar triangles have perimeter ratio 5 : 8, their side ratio is:",
      options: ["5 : 8", "25 : 64", "8 : 5", "1 : 1"],
      answer: "0",
      explanation:
        "Perimeter ratio = side ratio. So 5 : 8.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "easy",
      stem: "If two similar triangles have perimeter ratio 5 : 8, their area ratio is:",
      options: ["5 : 8", "25 : 64", "8 : 5", "1 : 1"],
      answer: "1",
      explanation:
        "Side ratio = 5/8. Area ratio = (5/8)² = 25/64 = 25 : 64.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these pairs of figures is NOT necessarily similar?",
      options: ["Two circles", "Two squares", "Two rhombuses", "Two equilateral triangles"],
      answer: "2",
      explanation:
        "Rhombuses have four equal sides but the angles can vary. So NOT all rhombuses are similar. The others (circles, squares, equilateral triangles) are always similar to others of the same type.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "easy",
      stem: "If the scale factor between two similar figures is 5, side ratio is:",
      options: ["5 : 1", "1 : 5", "25 : 1", "1 : 25"],
      answer: "0",
      explanation:
        "Scale factor k = 5 means each side of the larger is 5 times the smaller. So ratio = 5 : 1.",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "easy",
      stem: "If the scale factor between two similar figures is 5, area ratio is:",
      options: ["5 : 1", "1 : 5", "25 : 1", "1 : 25"],
      answer: "2",
      explanation:
        "Area ratio = k² = 5² = 25. So 25 : 1.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "easy",
      stem: "A 3 × 4 rectangle and a 6 × 8 rectangle are:",
      options: ["Congruent", "Similar", "Neither", "Both"],
      answer: "1",
      explanation:
        "Both have ratio 3:4 (3/4 = 6/8). All angles are 90°. So they are similar with k = 2. Not congruent (different size).",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "easy",
      stem: "Which statement is TRUE about similar triangles?",
      options: ["Sides are equal", "Areas are equal", "Corresponding angles are equal", "Perimeters are equal"],
      answer: "2",
      explanation:
        "Only angles are guaranteed equal. Sides, areas, perimeters can all differ.",
    },
    {
      id: "q111",
      type: "mcq",
      difficulty: "easy",
      stem: "△ABC ∼ △PQR with ∠A = 30° and ∠P = (2x)°. Find x.",
      options: ["15", "30", "60", "45"],
      answer: "0",
      explanation:
        "∠A = ∠P → 30 = 2x → x = 15.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "easy",
      stem: "Two triangles are similar. Corresponding sides are 6 and 9. If the smaller perimeter is 20, the larger perimeter is:",
      options: ["30", "26", "40", "15"],
      answer: "0",
      explanation:
        "k = 9/6 = 3/2. Larger P = 20 × 3/2 = 30.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "easy",
      stem: "Two triangles are similar. Corresponding sides are 4 and 5. Smaller area is 32 cm². Larger area is:",
      options: ["50 cm²", "40 cm²", "64 cm²", "80 cm²"],
      answer: "0",
      explanation:
        "Area ratio = (4/5)² = 16/25. So 32/A = 16/25 → A = 32 × 25/16 = 50 cm².",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "easy",
      stem: "The symbol ≅ means:",
      options: ["Similar", "Congruent", "Equal", "Approximately"],
      answer: "1",
      explanation:
        "≅ = congruent (same shape AND same size). ∼ = similar (same shape only).",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "easy",
      stem: "If two similar triangles have side ratio 1:1, then they are:",
      options: ["Different", "Congruent", "Unrelated", "Impossible"],
      answer: "1",
      explanation:
        "Ratio 1:1 means same side lengths → congruent.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "easy",
      stem: "In △ABC ∼ △XYZ, the angle corresponding to ∠B is:",
      options: ["∠X", "∠Y", "∠Z", "None"],
      answer: "1",
      explanation:
        "Position 2 in both triangles: B matches Y. So ∠B corresponds to ∠Y.",
    },
    {
      id: "q117",
      type: "mcq",
      difficulty: "easy",
      stem: "In △ABC ∼ △XYZ, the side corresponding to AC is:",
      options: ["XY", "YZ", "XZ", "None"],
      answer: "2",
      explanation:
        "A ↔ X and C ↔ Z. So AC corresponds to XZ.",
    },
    {
      id: "q118",
      type: "mcq",
      difficulty: "easy",
      stem: "Similar triangles have equal:",
      options: ["Perimeter", "Area", "Angles", "Side lengths"],
      answer: "2",
      explanation:
        "Only angles are guaranteed equal in similar figures.",
    },
    {
      id: "q119",
      type: "mcq",
      difficulty: "easy",
      stem: "If two similar triangles have area ratio 4 : 9, side ratio is:",
      options: ["2 : 3", "4 : 9", "16 : 81", "3 : 2"],
      answer: "0",
      explanation:
        "Side ratio = √(4/9) = 2/3 = 2 : 3.",
    },
    {
      id: "q120",
      type: "mcq",
      difficulty: "easy",
      stem: "If two similar triangles have side ratio 5 : 6, the ratio of their altitudes is:",
      options: ["5 : 6", "25 : 36", "6 : 5", "1 : 1"],
      answer: "0",
      explanation:
        "Altitude ratio = side ratio = 5 : 6.",
    },

    // ---------- MEDIUM MCQ (Q121–Q140) ----------
    {
      id: "q121",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with AB = 3x, DE = 12, BC = 15, EF = 20. Find x.",
      options: ["3", "4", "5", "6"],
      answer: "0",
      explanation:
        "Step 1: Use the similarity ratio for the sides we know: BC/EF = 15/20 = 3/4. Step 2: Use this same ratio for AB and DE: AB/DE = 3/4 → 3x/12 = 3/4. Step 3: Multiply both sides by 12: 3x = 9. Step 4: Divide by 3: x = 3. Check: AB = 3(3) = 9, and 9/12 = 3/4 ✓. So x = 3.",
    },
    {
      id: "q122",
      type: "mcq",
      difficulty: "medium",
      stem: "In △ABC, DE ∥ BC. AD = 4 cm, DB = 6 cm, AE = x, EC = 9 cm. Find x.",
      options: ["6", "5", "4", "8"],
      answer: "0",
      explanation:
        "AD/DB = AE/EC → 4/6 = x/9 → 6x = 36 → x = 6.",
    },
    {
      id: "q123",
      type: "mcq",
      difficulty: "medium",
      stem: "A 1.5 m stick casts a 2 m shadow. A nearby tower casts a 30 m shadow. Height of tower?",
      options: ["22.5 m", "20 m", "25 m", "40 m"],
      answer: "0",
      explanation:
        "h/30 = 1.5/2 → h = 30 × 1.5/2 = 22.5 m.",
    },
    {
      id: "q124",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. AB = 8 cm, BC = 10 cm, AC = 12 cm, DE = 4 cm. Find the perimeter of △DEF.",
      options: ["15 cm", "12 cm", "20 cm", "30 cm"],
      answer: "0",
      explanation:
        "P(ABC) = 8 + 10 + 12 = 30 cm. k = 4/8 = 1/2. P(DEF) = 30 × 1/2 = 15 cm.",
    },
    {
      id: "q125",
      type: "mcq",
      difficulty: "medium",
      stem: "In similar triangles, if the ratio of areas is 49 : 64, the ratio of corresponding sides is:",
      options: ["7 : 8", "49 : 64", "8 : 7", "14 : 16"],
      answer: "0",
      explanation:
        "Side ratio = √(49/64) = 7/8 = 7 : 8.",
    },
    {
      id: "q126",
      type: "mcq",
      difficulty: "medium",
      stem: "Two similar triangles have areas 36 cm² and 81 cm². If the smaller side is 4 cm, the corresponding larger side is:",
      options: ["6 cm", "9 cm", "12 cm", "5 cm"],
      answer: "0",
      explanation:
        "Side ratio = √(36/81) = 6/9 = 2/3. So 4/larger = 2/3 → larger = 6 cm.",
    },
    {
      id: "q127",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. Area(ABC) = 25 cm², Area(DEF) = 100 cm². If BC = 5, EF is:",
      options: ["10", "15", "20", "25"],
      answer: "0",
      explanation:
        "Side ratio = √(25/100) = 1/2. So 5/EF = 1/2 → EF = 10.",
    },
    {
      id: "q128",
      type: "mcq",
      difficulty: "medium",
      stem: "In △ABC, D is midpoint of AB, E is midpoint of AC. If DE = 5 cm, BC is:",
      options: ["10 cm", "5 cm", "15 cm", "20 cm"],
      answer: "0",
      explanation:
        "Midpoint segment: DE = BC/2. So BC = 10 cm. Banchi, the segment joining midpoints is half the third side.",
    },
    {
      id: "q129",
      type: "mcq",
      difficulty: "medium",
      stem: "In a right triangle with sides 6 and 8, the hypotenuse is 10. A similar triangle has hypotenuse 20. Its shorter leg is:",
      options: ["12", "16", "10", "6"],
      answer: "0",
      explanation:
        "k = 20/10 = 2. Shorter leg = 6 × 2 = 12.",
    },
    {
      id: "q130",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. ∠A = 30°, ∠B = 60°, ∠D = 30°. Find ∠E.",
      options: ["60°", "90°", "30°", "45°"],
      answer: "0",
      explanation:
        "∠B = ∠E. So ∠E = 60°.",
    },
    {
      id: "q131",
      type: "mcq",
      difficulty: "medium",
      stem: "A model of a building uses scale 1:200. A wall on the model is 15 cm. Real length is:",
      options: ["30 m", "3 m", "300 m", "15 m"],
      answer: "0",
      explanation:
        "15 cm × 200 = 3000 cm = 30 m. Banchi, 100 cm = 1 m.",
    },
    {
      id: "q132",
      type: "mcq",
      difficulty: "medium",
      stem: "On a map, 3 cm represents 12 km. What distance does 5 cm represent?",
      options: ["20 km", "15 km", "18 km", "24 km"],
      answer: "0",
      explanation:
        "k = 12/3 = 4 km/cm. So 5 cm × 4 = 20 km.",
    },
    {
      id: "q133",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. AB = 6, DE = 10, and area(ABC) = 36 cm². Find area(DEF).",
      options: ["100 cm²", "60 cm²", "90 cm²", "120 cm²"],
      answer: "0",
      explanation:
        "Area ratio = (6/10)² = 36/100. So 36/A(DEF) = 36/100 → A(DEF) = 100 cm².",
    },
    {
      id: "q134",
      type: "mcq",
      difficulty: "medium",
      stem: "A photograph is enlarged 3 times. Its area becomes how many times the original?",
      options: ["3", "6", "9", "12"],
      answer: "2",
      explanation:
        "Area scales by k² = 3² = 9.",
    },
    {
      id: "q135",
      type: "mcq",
      difficulty: "medium",
      stem: "Two similar triangles have altitudes 4 cm and 6 cm. If the smaller area is 20 cm², larger area is:",
      options: ["45 cm²", "30 cm²", "60 cm²", "15 cm²"],
      answer: "0",
      explanation:
        "Altitude ratio = 4/6 = 2/3. Area ratio = (2/3)² = 4/9. So 20/A = 4/9 → A = 45 cm².",
    },
    {
      id: "q136",
      type: "mcq",
      difficulty: "medium",
      stem: "Two similar triangles have side ratio 7:9. If the larger has perimeter 45 cm, the smaller has perimeter:",
      options: ["35 cm", "30 cm", "40 cm", "25 cm"],
      answer: "0",
      explanation:
        "P(small)/45 = 7/9 → P(small) = 45 × 7/9 = 35 cm.",
    },
    {
      id: "q137",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with AB:DE = 2:3. If the perimeter of △ABC = 18 cm, find the perimeter of △DEF.",
      options: ["27 cm", "24 cm", "12 cm", "30 cm"],
      answer: "0",
      explanation:
        "18/P(DEF) = 2/3 → 2·P(DEF) = 54 → P(DEF) = 27 cm.",
    },
    {
      id: "q138",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC has sides 5, 7, 9 cm. Perimeter of similar triangle is 42 cm. Find the shortest side of the new triangle.",
      options: ["10 cm", "8 cm", "12 cm", "14 cm"],
      answer: "0",
      explanation:
        "k = 42/21 = 2. Shortest side = 5 × 2 = 10 cm.",
    },
    {
      id: "q139",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. Ratio of sides = 3:5. If the area of △DEF = 100 cm², find the area of △ABC.",
      options: ["36 cm²", "60 cm²", "48 cm²", "64 cm²"],
      answer: "0",
      explanation:
        "Area ratio = (3/5)² = 9/25. So A(ABC)/100 = 9/25 → A(ABC) = 100 × 9/25 = 36 cm².",
    },
    {
      id: "q140",
      type: "mcq",
      difficulty: "medium",
      stem: "Two similar triangles have perimeters 40 cm and 60 cm. If the smaller area is 80 cm², larger is:",
      options: ["180 cm²", "160 cm²", "120 cm²", "200 cm²"],
      answer: "0",
      explanation:
        "Side ratio = 40/60 = 2/3. Area ratio = (2/3)² = 4/9. So 80/A(large) = 4/9 → A(large) = 80 × 9/4 = 180 cm².",
    },

    // ---------- HARD MCQ (Q141–Q145) ----------
    {
      id: "q141",
      type: "mcq",
      difficulty: "hard",
      stem: "In △ABC, D on AB, E on AC, DE ∥ BC. If AD = 3, DB = 4, AE = 6, EC = x. Find x.",
      options: ["8", "7", "9", "12"],
      answer: "0",
      explanation:
        "AD/DB = AE/EC → 3/4 = 6/x → 3x = 24 → x = 8.",
    },
    {
      id: "q142",
      type: "mcq",
      difficulty: "hard",
      stem: "△ABC ∼ △ADE with DE ∥ BC. AB = 12, AD = 4. Area(△ADE) = 8 cm². Find area(△ABC).",
      options: ["72 cm²", "48 cm²", "24 cm²", "96 cm²"],
      answer: "0",
      explanation:
        "Side ratio = AD/AB = 4/12 = 1/3. Area ratio = (1/3)² = 1/9. So 8/A(ABC) = 1/9 → A(ABC) = 72 cm².",
    },
    {
      id: "q143",
      type: "mcq",
      difficulty: "hard",
      stem: "A 6 m ladder leans against a wall. A 2 m stick parallel to the wall reaches 1.5 m up. What height does the ladder reach?",
      options: ["4.5 m", "5 m", "3 m", "6 m"],
      answer: "0",
      explanation:
        "Similar triangles: stick/ladder = 1.5/h = 2/6 → 1.5/h = 1/3 → h = 4.5 m.",
    },
    {
      id: "q144",
      type: "mcq",
      difficulty: "hard",
      stem: "Two similar triangles have areas in ratio 4 : 25. If the smaller side is 6 cm, the corresponding larger side is:",
      options: ["15 cm", "10 cm", "12 cm", "20 cm"],
      answer: "0",
      explanation:
        "Side ratio = √(4/25) = 2/5. So 6/x = 2/5 → x = 15 cm.",
    },
    {
      id: "q145",
      type: "mcq",
      difficulty: "hard",
      stem: "In △ABC, D on AB, E on AC, DE ∥ BC. AB = 15, AD = 5, BC = 12. Find DE.",
      options: ["4 cm", "6 cm", "8 cm", "10 cm"],
      answer: "0",
      explanation:
        "AD/AB = DE/BC → 5/15 = DE/12 → 1/3 = DE/12 → DE = 4 cm.",
    },

    // ---------- SHORT ANSWER (Q146–Q150) ----------
    {
      id: "q146",
      type: "short",
      difficulty: "easy",
      stem: "Define the scale factor of two similar polygons.",
      answer: "It is the ratio of the lengths of two corresponding sides.",
      explanation:
        "For example, if side AB in one polygon is 6 cm and corresponding side DE in a similar polygon is 9 cm, the scale factor is 6/9 = 2/3 (or 9/6 = 3/2 depending on which direction).",
    },
    {
      id: "q147",
      type: "short",
      difficulty: "medium",
      stem: "Two similar triangles have side ratio 4 : 5. If the smaller area is 48 cm², find the larger area.",
      answer: "75 cm²",
      explanation:
        "Area ratio = (4/5)² = 16/25. So 48/A = 16/25 → A = 48 × 25/16 = 75 cm².",
    },
    {
      id: "q148",
      type: "short",
      difficulty: "medium",
      stem: "In △ABC, D is on AB and E is on AC with DE ∥ BC. If AD/DB = 3/5 and AE = 6 cm, find EC.",
      answer: "10 cm",
      explanation:
        "AD/DB = AE/EC → 3/5 = 6/EC → 3·EC = 30 → EC = 10 cm.",
    },
    {
      id: "q149",
      type: "short",
      difficulty: "hard",
      stem: "A flagpole casts a 12 m shadow. At the same time, a 1.8 m person casts a 2.4 m shadow. How tall is the flagpole?",
      answer: "9 m",
      explanation:
        "h/12 = 1.8/2.4 → h = 12 × 1.8/2.4 = 12 × 0.75 = 9 m.",
    },
    {
      id: "q150",
      type: "short",
      difficulty: "hard",
      stem: "△ABC ∼ △DEF with side ratio 5:8. If the sum of their perimeters is 78 cm, find each perimeter.",
      answer: "P(ABC) = 30 cm, P(DEF) = 48 cm",
      explanation:
        "Let P(ABC) = 5x and P(DEF) = 8x. Sum: 13x = 78 → x = 6. So P(ABC) = 30 cm, P(DEF) = 48 cm.",
    },
        // ============================================================
    // BATCH 4 — Q151 to Q200 (final for Chapter 4 and for the book!)
    // ============================================================

    // ---------- EASY MCQ (Q151–Q170) ----------
    {
      id: "q151",
      type: "mcq",
      difficulty: "easy",
      stem: "Are two regular hexagons always similar?",
      options: ["Yes", "No", "Only if same size", "Only if rotated"],
      answer: "0",
      explanation:
        "Regular hexagons all have six equal sides and six equal 120° angles. So they are always similar.",
    },
    {
      id: "q152",
      type: "mcq",
      difficulty: "easy",
      stem: "Two triangles with all three angles equal (AAA) are:",
      options: ["Not similar", "Similar by AA", "Congruent", "Unrelated"],
      answer: "1",
      explanation:
        "If all three angles are equal, then at least two are equal, which is enough for AA similarity. So they are similar.",
    },
    {
      id: "q153",
      type: "mcq",
      difficulty: "easy",
      stem: "If △PQR ∼ △XYZ with side ratio 3:4, and PQ = 9, find XY.",
      options: ["12", "10", "8", "15"],
      answer: "0",
      explanation:
        "3/4 = 9/XY → 3·XY = 36 → XY = 12.",
    },
    {
      id: "q154",
      type: "mcq",
      difficulty: "easy",
      stem: "The ratio of two corresponding sides in similar triangles is 7:3. Which side is longer?",
      options: ["First (7)", "Second (3)", "Equal", "Cannot tell"],
      answer: "0",
      explanation:
        "7 > 3, so the first side is longer. The ratio tells you which is bigger.",
    },
    {
      id: "q155",
      type: "mcq",
      difficulty: "easy",
      stem: "Two triangles are similar with k = 4. The larger perimeter is how many times the smaller?",
      options: ["4", "16", "8", "2"],
      answer: "0",
      explanation:
        "Perimeter scales by k = 4, not k². Only AREA scales by k².",
    },
    {
      id: "q156",
      type: "mcq",
      difficulty: "easy",
      stem: "Two triangles are similar with k = 4. The larger area is how many times the smaller?",
      options: ["4", "16", "8", "2"],
      answer: "1",
      explanation:
        "Area scales by k² = 4² = 16.",
    },
    {
      id: "q157",
      type: "mcq",
      difficulty: "easy",
      stem: "If the side ratio of two similar triangles is 1:3, area ratio is:",
      options: ["1:3", "1:6", "1:9", "1:12"],
      answer: "2",
      explanation:
        "Area ratio = (1/3)² = 1/9 = 1:9.",
    },
    {
      id: "q158",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these shows similar triangles?",
      options: ["△ABC ∼ △DEF", "△ABC ≅ △DEF", "△ABC = △DEF", "△ABC > △DEF"],
      answer: "0",
      explanation:
        "∼ means similar. ≅ means congruent.",
    },
    {
      id: "q159",
      type: "mcq",
      difficulty: "easy",
      stem: "If △ABC ∼ △DEF, the ratio AB/DE equals:",
      options: ["BC/EF", "DE/EF", "AB/BC", "None"],
      answer: "0",
      explanation:
        "In similar triangles, all corresponding side ratios are equal. So AB/DE = BC/EF = AC/DF.",
    },
    {
      id: "q160",
      type: "mcq",
      difficulty: "easy",
      stem: "A triangle with sides 6, 8, 10 is similar to one with sides 3, 4, 5. What is the scale factor?",
      options: ["2", "1/2", "1.5", "Both A and B are correct (depending on direction)"],
      answer: "3",
      explanation:
        "Going from smaller to larger, k = 2. From larger to smaller, k = 1/2. Both are correct depending on which direction you compare.",
    },
    {
      id: "q161",
      type: "mcq",
      difficulty: "easy",
      stem: "The shadow method works because the sun's rays create:",
      options: ["Parallel lines", "Similar triangles", "Perpendicular lines", "Circles"],
      answer: "1",
      explanation:
        "The sun's rays hit both objects at the same angle, so the two triangles (object + shadow) are similar by AA.",
    },
    {
      id: "q162",
      type: "mcq",
      difficulty: "easy",
      stem: "If △ABC ∼ △DEF and ∠A = ∠D, ∠B = ∠E, then ∠C = ?",
      options: ["∠F", "∠D", "∠E", "180°"],
      answer: "0",
      explanation:
        "In similar triangles, corresponding angles are equal. C matches F, so ∠C = ∠F.",
    },
    {
      id: "q163",
      type: "mcq",
      difficulty: "easy",
      stem: "Two similar rectangles have sides 4 × 6 and 6 × 9. Are they similar?",
      options: ["Yes, k = 3/2", "No", "Only if square", "Cannot tell"],
      answer: "0",
      explanation:
        "4/6 = 6/9 = 2/3. Same ratio, all angles 90°. So similar with k = 3/2 (larger/smaller).",
    },
    {
      id: "q164",
      type: "mcq",
      difficulty: "easy",
      stem: "A 2 × 3 rectangle and a 3 × 4 rectangle: similar?",
      options: ["Yes", "No", "Only if rotated", "Cannot tell"],
      answer: "1",
      explanation:
        "2/3 ≈ 0.67 and 3/4 = 0.75. Ratios differ → NOT similar.",
    },
    {
      id: "q165",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a similarity test?",
      options: ["SSA", "ASA", "SSS", "AAS"],
      answer: "2",
      explanation:
        "For similarity: AA, SAS, SSS are valid. SSA and AAS are NOT tests for similarity (they are for congruence).",
    },
    {
      id: "q166",
      type: "mcq",
      difficulty: "easy",
      stem: "If the ratio of perimeters of two similar triangles is 3:5, then the ratio of their areas is:",
      options: ["3:5", "9:25", "5:3", "25:9"],
      answer: "1",
      explanation:
        "Side ratio = 3/5. Area ratio = (3/5)² = 9/25 = 9:25.",
    },
    {
      id: "q167",
      type: "mcq",
      difficulty: "easy",
      stem: "Are two right triangles with one acute angle equal always similar?",
      options: ["Yes, by AA", "No", "Only if same hypotenuse", "Only if same area"],
      answer: "0",
      explanation:
        "Both have a 90° angle. Plus the given acute angle. So two pairs of equal angles → AA similarity.",
    },
    {
      id: "q168",
      type: "mcq",
      difficulty: "easy",
      stem: "Triangle 1 has angles 30°, 60°, 90°. Triangle 2 has angles 30°, 60°, 90°. They are:",
      options: ["Similar by AA", "Not similar", "Congruent", "Cannot tell"],
      answer: "0",
      explanation:
        "Two equal angles (30° and 60°) → AA similarity.",
    },
    {
      id: "q169",
      type: "mcq",
      difficulty: "easy",
      stem: "The symbol for congruent is:",
      options: ["∼", "≅", "=", "≈"],
      answer: "1",
      explanation:
        "≅ = congruent. ∼ = similar. = equal. ≈ approximately equal.",
    },
    {
      id: "q170",
      type: "mcq",
      difficulty: "easy",
      stem: "Two triangles have all three side ratios equal. They are similar by:",
      options: ["AA", "SAS", "SSS", "SSA"],
      answer: "2",
      explanation:
        "All three side ratios equal → SSS similarity.",
    },

    // ---------- MEDIUM MCQ (Q171–Q190) ----------
    {
      id: "q171",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. AB = 2x + 1, DE = 6, BC = 5, EF = 4. Find x.",
      options: ["13/4", "3", "4", "5"],
      answer: "0",
      explanation:
        "BC/EF = 5/4. So AB/DE = 5/4 → (2x + 1)/6 = 5/4 → 4(2x + 1) = 30 → 8x + 4 = 30 → 8x = 26 → x = 26/8 = 13/4.",
    },
    {
      id: "q172",
      type: "mcq",
      difficulty: "medium",
      stem: "Two similar triangles have areas 121 cm² and 64 cm². Side ratio is:",
      options: ["11 : 8", "121 : 64", "8 : 11", "11 : 64"],
      answer: "0",
      explanation:
        "Side ratio = √(121/64) = 11/8 = 11 : 8.",
    },
    {
      id: "q173",
      type: "mcq",
      difficulty: "medium",
      stem: "In similar triangles with side ratio 2:3, if the smaller altitude is 8 cm, the larger altitude is:",
      options: ["12 cm", "16 cm", "10 cm", "14 cm"],
      answer: "0",
      explanation:
        "Altitude ratio = side ratio = 2/3. So 8/h = 2/3 → h = 12 cm.",
    },
    {
      id: "q174",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with area ratio 9 : 25. If BC = 6 cm, EF is:",
      options: ["10 cm", "8 cm", "12 cm", "15 cm"],
      answer: "0",
      explanation:
        "Side ratio = √(9/25) = 3/5. So 6/EF = 3/5 → EF = 10 cm.",
    },
    {
      id: "q175",
      type: "mcq",
      difficulty: "medium",
      stem: "A tower casts a 40 m shadow. A 1.6 m person casts a 2 m shadow. Find the tower's height.",
      options: ["32 m", "30 m", "40 m", "25 m"],
      answer: "0",
      explanation:
        "h/40 = 1.6/2 → h = 40 × 0.8 = 32 m.",
    },
    {
      id: "q176",
      type: "mcq",
      difficulty: "medium",
      stem: "In △ABC, D is on AB and E is on AC with DE ∥ BC. AB = 10, AD = 4, BC = 15. Find DE.",
      options: ["6", "8", "10", "12"],
      answer: "0",
      explanation:
        "AD/AB = DE/BC → 4/10 = DE/15 → DE = 15 × 4/10 = 6.",
    },
    {
      id: "q177",
      type: "mcq",
      difficulty: "medium",
      stem: "Two similar triangles have side ratio 5 : 8. If the smaller perimeter is 30 cm, larger perimeter is:",
      options: ["48 cm", "40 cm", "45 cm", "50 cm"],
      answer: "0",
      explanation:
        "30/P = 5/8 → P = 48 cm.",
    },
    {
      id: "q178",
      type: "mcq",
      difficulty: "medium",
      stem: "The areas of two similar triangles are 25 cm² and 100 cm². Ratio of their corresponding sides is:",
      options: ["1:2", "1:4", "2:1", "1:8"],
      answer: "0",
      explanation:
        "Side ratio = √(25/100) = 5/10 = 1/2 = 1 : 2.",
    },
    {
      id: "q179",
      type: "mcq",
      difficulty: "medium",
      stem: "If two similar triangles have area ratio 16:49, their perimeter ratio is:",
      options: ["4:7", "16:49", "7:4", "8:14"],
      answer: "0",
      explanation:
        "Perimeter ratio = side ratio = √(16/49) = 4/7 = 4 : 7.",
    },
    {
      id: "q180",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. If AB/DE = 3/4 and BC = 12 cm, find EF.",
      options: ["16 cm", "9 cm", "15 cm", "18 cm"],
      answer: "0",
      explanation:
        "3/4 = 12/EF → EF = 16 cm.",
    },
    {
      id: "q181",
      type: "mcq",
      difficulty: "medium",
      stem: "In a right triangle, the altitude to the hypotenuse creates two smaller triangles. These two smaller triangles are similar to:",
      options: ["The big triangle", "Each other", "Both", "Neither"],
      answer: "2",
      explanation:
        "This is a famous result: the altitude creates three similar triangles — the two small ones and the original big one. All three are similar to each other.",
    },
    {
      id: "q182",
      type: "mcq",
      difficulty: "medium",
      stem: "Two similar triangles have altitudes 3 cm and 5 cm. If the smaller altitude's triangle has area 18 cm², larger area is:",
      options: ["50 cm²", "30 cm²", "40 cm²", "60 cm²"],
      answer: "0",
      explanation:
        "Altitude ratio = 3/5. Area ratio = (3/5)² = 9/25. So 18/A = 9/25 → A = 18 × 25/9 = 50 cm².",
    },
    {
      id: "q183",
      type: "mcq",
      difficulty: "medium",
      stem: "On a map with scale 1:50000, two towns are 4 cm apart. Real distance is:",
      options: ["2 km", "20 km", "200 m", "5 km"],
      answer: "0",
      explanation:
        "4 cm × 50000 = 200000 cm = 2000 m = 2 km.",
    },
    {
      id: "q184",
      type: "mcq",
      difficulty: "medium",
      stem: "A 1.5 m model of a car represents a car 4.5 m long. Scale is:",
      options: ["1:3", "3:1", "1:4.5", "1.5:4.5"],
      answer: "0",
      explanation:
        "Scale = 1.5/4.5 = 1/3 = 1 : 3.",
    },
    {
      id: "q185",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with side ratio 7:2. If area of △DEF = 8 cm², find area of △ABC.",
      options: ["98 cm²", "56 cm²", "28 cm²", "112 cm²"],
      answer: "0",
      explanation:
        "Area ratio = (7/2)² = 49/4. So A(ABC)/8 = 49/4 → A(ABC) = 8 × 49/4 = 98 cm².",
    },
    {
      id: "q186",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. If the side ratio is 6:11 and the sum of their perimeters is 85 cm, find the smaller perimeter.",
      options: ["30 cm", "55 cm", "40 cm", "45 cm"],
      answer: "0",
      explanation:
        "Let P₁ = 6x, P₂ = 11x. Sum: 17x = 85 → x = 5. Small = 6 × 5 = 30 cm.",
    },
    {
      id: "q187",
      type: "mcq",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF with area ratio 16:25. If the larger side is 20 cm, smaller side is:",
      options: ["16 cm", "12 cm", "15 cm", "18 cm"],
      answer: "0",
      explanation:
        "Side ratio = √(16/25) = 4/5. So small/large = 4/5 → small/20 = 4/5 → small = 16 cm.",
    },
    {
      id: "q188",
      type: "mcq",
      difficulty: "medium",
      stem: "In △ABC, D is the midpoint of AB, E is the midpoint of AC, and BC = 14 cm. Find DE.",
      options: ["7 cm", "14 cm", "28 cm", "10 cm"],
      answer: "0",
      explanation:
        "Midpoint segment = half of the parallel side. DE = 14/2 = 7 cm.",
    },
    {
      id: "q189",
      type: "mcq",
      difficulty: "medium",
      stem: "Two similar triangles have perimeters 24 cm and 36 cm. If the smaller has an altitude of 8 cm, larger altitude is:",
      options: ["12 cm", "10 cm", "16 cm", "14 cm"],
      answer: "0",
      explanation:
        "Altitude ratio = perimeter ratio = 24/36 = 2/3. So 8/h = 2/3 → h = 12 cm.",
    },
    {
      id: "q190",
      type: "mcq",
      difficulty: "medium",
      stem: "Two triangles have sides (6, 8, 10) and (9, 12, 15). Are they similar?",
      options: ["Yes, by SSS", "No", "Only by AA", "Cannot tell"],
      answer: "0",
      explanation:
        "6/9 = 8/12 = 10/15 = 2/3. All ratios equal → SSS similarity.",
    },

    // ---------- HARD MCQ (Q191–Q195) ----------
    {
      id: "q191",
      type: "mcq",
      difficulty: "hard",
      stem: "△ABC has sides 5, 12, 13 (right triangle). A similar triangle has hypotenuse 26. Find its area.",
      options: ["120 cm²", "60 cm²", "240 cm²", "90 cm²"],
      answer: "0",
      explanation:
        "k = 26/13 = 2. Sides become 10, 24, 26. This is a right triangle with legs 10 and 24. Area = (1/2)(10)(24) = 120 cm².",
    },
    {
      id: "q192",
      type: "mcq",
      difficulty: "hard",
      stem: "In △ABC, DE ∥ BC. Area(△ADE) = 36 cm², Area(△ABC) = 100 cm². If AB = 15 cm, find AD.",
      options: ["9 cm", "6 cm", "12 cm", "10 cm"],
      answer: "0",
      explanation:
        "Side ratio = √(36/100) = 6/10 = 3/5. So AD/15 = 3/5 → AD = 9 cm.",
    },
    {
      id: "q193",
      type: "mcq",
      difficulty: "hard",
      stem: "Two similar triangles have side ratio 4:5. Their areas differ by 81 cm². Find the larger area.",
      options: ["225 cm²", "144 cm²", "180 cm²", "250 cm²"],
      answer: "0",
      explanation:
        "Area ratio = 16/25. Let smaller = 16x, larger = 25x. Difference = 9x = 81 → x = 9. Larger = 25 × 9 = 225 cm².",
    },
    {
      id: "q194",
      type: "mcq",
      difficulty: "hard",
      stem: "The shadow of a 1.5 m pole is 4 m. A building's shadow is 32 m. Find the building's height.",
      options: ["12 m", "10 m", "14 m", "15 m"],
      answer: "0",
      explanation:
        "h/32 = 1.5/4 → h = 32 × 1.5/4 = 12 m.",
    },
    {
      id: "q195",
      type: "mcq",
      difficulty: "hard",
      stem: "△ABC ∼ △DEF with side ratio 3:4. If the perimeter of △ABC is 24 cm, and the ratio of altitudes is the same as sides, find the smaller altitude if the larger is 16 cm.",
      options: ["12 cm", "10 cm", "15 cm", "14 cm"],
      answer: "0",
      explanation:
        "Altitude ratio = side ratio = 3/4. So smaller/16 = 3/4 → smaller = 12 cm.",
    },

    // ---------- SHORT ANSWER (Q196–Q200) ----------
    {
      id: "q196",
      type: "short",
      difficulty: "easy",
      stem: "State the AA similarity test.",
      answer:
        "If two angles of one triangle are equal to two corresponding angles of another triangle, then the two triangles are similar.",
      explanation:
        "This works because the third angle is automatically determined. Two equal angles are enough.",
    },
    {
      id: "q197",
      type: "short",
      difficulty: "medium",
      stem: "△ABC ∼ △DEF. If AB = 8 cm, BC = 10 cm, AC = 12 cm and DE = 4 cm, find EF + DF.",
      answer: "11 cm",
      explanation:
        "k = 4/8 = 1/2. EF = 10 × 1/2 = 5 cm. DF = 12 × 1/2 = 6 cm. Sum = 11 cm.",
    },
    {
      id: "q198",
      type: "short",
      difficulty: "medium",
      stem: "Two similar triangles have side ratio 3:7. The sum of their perimeters is 80 cm. Find each perimeter.",
      answer: "P₁ = 24 cm, P₂ = 56 cm",
      explanation:
        "Let P₁ = 3x, P₂ = 7x. Sum: 10x = 80 → x = 8. P₁ = 24, P₂ = 56.",
    },
    {
      id: "q199",
      type: "short",
      difficulty: "hard",
      stem: "A 12 m tall building casts a 15 m shadow. At the same time, a nearby tree casts a 20 m shadow. How tall is the tree?",
      answer: "16 m",
      explanation:
        "h/20 = 12/15 → h = 20 × 12/15 = 20 × 0.8 = 16 m.",
    },
    {
      id: "q200",
      type: "short",
      difficulty: "hard",
      stem: "In △ABC, D is on AB and E is on AC with DE ∥ BC. If AD/DB = 2/3 and BC = 15 cm, find DE.",
      answer: "6 cm",
      explanation:
        "Since DE ∥ BC, triangles ADE and ABC are similar. Total AB corresponds to AD + DB = 2 + 3 = 5 parts. So AD/AB = 2/5. Then DE/BC = 2/5 → DE/15 = 2/5 → DE = 15 × 2/5 = 6 cm.",
    },
         ],
};