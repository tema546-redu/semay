import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 BIOLOGY — UNIT 3
// BIOCHEMICAL MOLECULES
// Source: Grade 10 Biology Student Textbook (pp. 50–80)
// For: Abenezer (Abatu) — Grade 10
// ============================================================

export const g10BiologyCh3: Chapter = {
  id: "ch3",
  number: 3,
  title: "Biochemical Molecules",
  titleAm: "ባዮኬሚካላዊ ሞለኪዩሎች",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, Unit 3 is CHEMISTRY OF LIFE. It has FIVE big halves:\n" +
        "1) WATER & INORGANIC IONS (properties + body needs)\n" +
        "2) CARBOHYDRATES (mono-, di-, polysaccharides + tests)\n" +
        "3) LIPIDS (fats, phospholipids, steroids)\n" +
        "4) PROTEINS (amino acids, peptide bonds, tests)\n" +
        "5) NUCLEIC ACIDS (DNA, RNA, nucleotides)\n\n" +
        "The WHOLE chapter reduces to these must-know items:\n" +
        "• Water properties (cohesion, adhesion, surface tension, high specific heat)\n" +
        "• Major inorganic ions and their functions (Na, K, Ca, Fe, P, Cl, I, Cu)\n" +
        "• Monomer → polymer for each organic molecule\n" +
        "• Food tests: Benedict's (reducing sugar), iodine (starch), Biuret (protein), Xanthoproteic (protein), emulsion (lipid)\n" +
        "• Amino acid general formula + peptide bond\n" +
        "• DNA vs RNA comparison\n\n" +
        "Mastery rule: Memorize the MONOMER→POLYMER table and the FOOD TESTS table. This unit is heavy on recall + applied lab questions.",
      bodyAm:
        "አባቱ፣ ክፍል 3 የሕይወት ኬሚስትሪ ነው። አምስት ትላልቅ ክፍሎች፡\n" +
        "1) ውሃና ኢንኦርጋኒክ አዮኖች\n" +
        "2) ካርቦሃይድሬቶች\n" +
        "3) ሊፒዶች\n" +
        "4) ፕሮቲኖች\n" +
        "5) ኑክሌይክ አሲዶች",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 — Water & ions",
          titleAm: "ደረጃ 1 — ውሃና አዮኖች",
          body:
            "WATER (H₂O) is the MOST abundant molecule in living things (~70% of cell).\n\n" +
            "Key properties:\n" +
            "• COHESION — water molecules stick to each other (helps water rise in xylem)\n" +
            "• ADHESION — water sticks to other surfaces (helps capillary action)\n" +
            "• HIGH SURFACE TENSION — allows insects to walk on water\n" +
            "• HIGH SPECIFIC HEAT — resists temperature change\n" +
            "• HIGH LATENT HEAT OF VAPORIZATION — sweating cools us\n" +
            "• UNIVERSAL SOLVENT — dissolves most substances\n\n" +
            "INORGANIC IONS:\n" +
            "• Na⁺ — nerve impulses, water balance\n" +
            "• K⁺ — nerve impulses, muscle contraction\n" +
            "• Ca²⁺ — bones, teeth, blood clotting, muscle contraction\n" +
            "• Fe²⁺/Fe³⁺ — hemoglobin (oxygen transport)\n" +
            "• PO₄³⁻ — bones, teeth, DNA, ATP\n" +
            "• Cl⁻ — water balance, stomach acid\n" +
            "• I⁻ — thyroid hormones\n" +
            "• Cu²⁺ — enzyme cofactor",
          bodyAm:
            "ውሃ: cohesion, adhesion, surface tension, high specific heat።\n" +
            "Na = ነርቭ; K = ነርቭ/ጡንቻ; Ca = አጥንት; Fe = ሄሞግሎቢን; P = አጥንት/DNA; Cl = ውሃ; I = ታይሮይድ; Cu = ኢንዛይም።",
        },
        {
          id: "n0-2",
          title: "Pass 2 — Carbohydrates",
          titleAm: "ደረጃ 2 — ካርቦሃይድሬቶች",
          body:
            "CARBOHYDRATES = C, H, O (ratio H:O = 2:1).\n\n" +
            "MONOMER: MONOSACCHARIDE (glucose, fructose, galactose)\n" +
            "POLYMER: POLYSACCHARIDE (starch, glycogen, cellulose)\n\n" +
            "• MONOSACCHARIDE = 1 sugar unit (glucose C₆H₁₂O₆)\n" +
            "• DISACCHARIDE = 2 sugars (maltose = glucose+glucose; sucrose = glucose+fructose; lactose = glucose+galactose)\n" +
            "• POLYSACCHARIDE = many sugars (starch = plant storage; glycogen = animal storage; cellulose = plant cell wall)\n\n" +
            "TESTS:\n" +
            "• BENEDICT'S test — reducing sugars (glucose, fructose, maltose) → brick-red precipitate on heating\n" +
            "• IODINE test — starch → blue-black colour",
          bodyAm:
            "ካርቦሃይድሬት = C, H, O።\n" +
            "ሞኖመር = monosaccharide።\n" +
            "ፖሊመር = polysaccharide።\n" +
            "Benedict's = reducing sugar → brick-red።\n" +
            "Iodine = starch → blue-black።",
        },
        {
          id: "n0-3",
          title: "Pass 3 — Lipids",
          titleAm: "ደረጃ 3 — ሊፒዶች",
          body:
            "LIPIDS = C, H, O (less O than carbohydrates). Insoluble in water; soluble in organic solvents (ethanol, ether).\n\n" +
            "TYPES:\n" +
            "• FATS & OILS (triglycerides) = glycerol + 3 fatty acids\n" +
            "• PHOSPHOLIPIDS = glycerol + 2 fatty acids + phosphate group (main component of cell membrane)\n" +
            "• STEROIDS = 4 fused rings (cholesterol, testosterone, estrogen)\n\n" +
            "FUNCTIONS:\n" +
            "• Energy storage (more energy per gram than carbs)\n" +
            "• Insulation\n" +
            "• Protection of organs\n" +
            "• Cell membrane (phospholipid bilayer)\n" +
            "• Hormones (steroids)\n\n" +
            "TEST: EMULSION TEST — lipid + water + ethanol → milky white emulsion.",
          bodyAm:
            "ሊፒድ = C, H, O። በውሃ አይሟሟም።\n" +
            "ትሪግሊሰራይድ = glycerol + 3 fatty acids።\n" +
            "ፎስፎሊፒድ = ሴል ሽፋን።\n" +
            "ስቴሮይድ = ሆርሞን።\n" +
            "Emulsion test = milky white።",
        },
        {
          id: "n0-4",
          title: "Pass 4 — Proteins",
          titleAm: "ደረጃ 4 — ፕሮቲኖች",
          body:
            "PROTEINS = C, H, O, N (some also S).\n\n" +
            "MONOMER: AMINO ACID (20 types)\n" +
            "POLYMER: POLYPEPTIDE / PROTEIN\n\n" +
            "AMINO ACID general formula:\n" +
            "NH₂–CHR–COOH\n" +
            "• Amino group (NH₂) + carboxyl group (COOH) + R group (side chain) + H\n" +
            "• R group gives each amino acid its identity (20 different R groups)\n\n" +
            "PEPTIDE BOND: formed between amino group of one AA and carboxyl group of next AA, with loss of WATER (condensation).\n" +
            "• 2 AA → dipeptide\n" +
            "• Many AA → polypeptide → protein\n\n" +
            "FUNCTIONS:\n" +
            "• Enzymes (catalysts)\n" +
            "• Structural (collagen, keratin)\n" +
            "• Transport (hemoglobin)\n" +
            "• Hormones (insulin)\n" +
            "• Antibodies (immunity)\n" +
            "• Muscle (actin, myosin)\n\n" +
            "TESTS:\n" +
            "• BIURET test — protein → violet/purple colour\n" +
            "• XANTHOPROTEIC test — protein + nitric acid + heat → yellow; + ammonia → orange",
          bodyAm:
            "ፕሮቲን = C, H, O, N።\n" +
            "ሞኖመር = amino acid።\n" +
            "ፖሊመር = polypeptide።\n" +
            "Peptide bond = ውሃ በመቀነስ።\n" +
            "Biuret = violet።\n" +
            "Xanthoproteic = yellow→orange።",
        },
        {
          id: "n0-5",
          title: "Pass 5 — Nucleic acids",
          titleAm: "ደረጃ 5 — ኑክሌይክ አሲዶች",
          body:
            "NUCLEIC ACIDS = C, H, O, N, P.\n\n" +
            "MONOMER: NUCLEOTIDE (sugar + phosphate + nitrogenous base)\n" +
            "POLYMER: DNA or RNA\n\n" +
            "NUCLEOTIDE parts:\n" +
            "• 5-carbon sugar (deoxyribose in DNA; ribose in RNA)\n" +
            "• Phosphate group\n" +
            "• Nitrogenous base (A, T, G, C in DNA; A, U, G, C in RNA)\n\n" +
            "DNA:\n" +
            "• Double helix\n" +
            "• Deoxyribose sugar\n" +
            "• Bases: A, T, G, C\n" +
            "• Stores genetic information\n" +
            "• Found in nucleus\n\n" +
            "RNA:\n" +
            "• Single strand\n" +
            "• Ribose sugar\n" +
            "• Bases: A, U, G, C\n" +
            "• Makes proteins (mRNA, tRNA, rRNA)\n" +
            "• Found in nucleus + cytoplasm",
          bodyAm:
            "ኑክሌይክ አሲድ = C, H, O, N, P።\n" +
            "ሞኖመር = nucleotide።\n" +
            "DNA: double helix, deoxyribose, A-T-G-C።\n" +
            "RNA: single strand, ribose, A-U-G-C።",
        },
        {
          id: "n0-6",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Know water properties + which property does what.\n" +
            "• Know the function of each major ion.\n" +
            "• Know monomer → polymer for ALL four organic molecules.\n" +
            "• Know the food tests + colour results.\n" +
            "• Know amino acid formula + peptide bond formation.\n" +
            "• Know DNA vs RNA differences.\n" +
            "• Know which elements each organic molecule contains.",
          bodyAm:
            "ውሃ ባህሪያት፣ አዮኖች ተግባር፣ ሞኖመር→ፖሊመር፣ የምግብ ምርመራ፣ amino acid፣ DNA vs RNA።",
        },
      ],
    },

    // ============================================================
    // 3.1 WATER
    // ============================================================
    {
      id: "n1",
      title: "3.1 Water — The Most Important Molecule",
      titleAm: "3.1 ውሃ — በጣም አስፈላጊው ሞለኪዩል",
      body:
        "Abatu, WATER makes up about 70% of a cell. It is the medium where ALL life reactions happen. This section is heavily tested.",
      bodyAm:
        "ውሃ ~70% ሴል ነው። ሁሉም ምላሾች በውሃ ውስጥ ይካሄዳሉ።",
      children: [
        {
          id: "n1-1",
          title: "Structure of water molecule",
          titleAm: "የውሃ ሞለኪዩል አወቃቀር",
          body:
            "Water = H₂O\n" +
            "• One oxygen atom + two hydrogen atoms\n" +
            "• Shape: bent (angular), not linear\n" +
            "• POLAR molecule — oxygen side is slightly negative (δ⁻); hydrogen side is slightly positive (δ⁺)\n" +
            "• Because it is polar, water forms HYDROGEN BONDS between molecules\n\n" +
            "Hydrogen bonds give water its special properties.",
          bodyAm:
            "H₂O = ፖላር።\n" +
            "ኦክሲጅን δ⁻, ሃይድሮጅን δ⁺።\n" +
            "Hydrogen bonds = ልዩ ባህሪያት።",
        },
        {
          id: "n1-2",
          title: "Properties of water (MUST MEMORIZE)",
          titleAm: "የውሃ ባህሪያት",
          body:
            "1) COHESION — water molecules attract each other (via H-bonds) → water flows as continuous column in xylem → helps water rise in plants\n\n" +
            "2) ADHESION — water sticks to other surfaces (e.g., xylem walls) → helps capillary action\n\n" +
            "3) HIGH SURFACE TENSION — surface of water acts like a stretched skin → insects can walk on water\n\n" +
            "4) HIGH SPECIFIC HEAT CAPACITY — takes a lot of heat to change temperature → water stabilizes body temperature (why oceans don't boil in summer)\n\n" +
            "5) HIGH LATENT HEAT OF VAPORIZATION — takes a lot of energy to turn water into vapour → sweating cools us\n\n" +
            "6) UNIVERSAL SOLVENT — dissolves more substances than any other liquid (because it's polar) → most reactions happen in water\n\n" +
            "7) DENSITY: ice is LESS dense than liquid water → ice floats → life survives under frozen lakes",
          bodyAm:
            "1) cohesion — ውሃ ወደ ላይ\n" +
            "2) adhesion — ከግድግዳ ጋር\n" +
            "3) surface tension — ነፍሳት በውሃ ላይ\n" +
            "4) high specific heat — ሙቀት መቆጣጠር\n" +
            "5) latent heat — ላብ ማቀዝቀዝ\n" +
            "6) universal solvent — ማሟሟት\n" +
            "7) ice floats — ሕይወት በበረዶ ስር",
        },
        {
          id: "n1-3",
          title: "Why water is a biochemical molecule",
          titleAm: "ውሃ ለምን ባዮኬሚካል ነው",
          body:
            "Water is considered a biochemical molecule because:\n" +
            "• It is the MAIN component of all living cells (~70%)\n" +
            "• It is the SOLVENT where all metabolic reactions occur\n" +
            "• It is a REACTANT in photosynthesis and respiration\n" +
            "• It TRANSPORTS substances (blood plasma, xylem sap)\n" +
            "• It REGULATES temperature (sweating, transpiration)\n" +
            "• It provides HABITAT for aquatic organisms",
          bodyAm:
            "ውሃ ባዮኬሚካል ነው፡\n" +
            "70% ሴል፣ ማሟሟት፣ ፎቶሲንተሲስ/መተንፈስ፣ መጓጓዣ፣ ሙቀት፣ መኖሪያ።",
        },
        {
          id: "n1-4",
          title: "⚠ Remember trap — Water",
          titleAm: "⚠ አትርሳ — ውሃ",
          body:
            "• Water is a POLAR molecule.\n" +
            "• COHESION = water sticks to water.\n" +
            "• ADHESION = water sticks to other things.\n" +
            "• SURFACE TENSION = insects can walk on water.\n" +
            "• HIGH SPECIFIC HEAT = stabilizes temperature.\n" +
            "• LATENT HEAT OF VAPORIZATION = sweating cools.\n" +
            "• Ice floats because it is LESS dense than liquid water.\n" +
            "• Universal solvent because it is POLAR.",
          bodyAm:
            "ፖላር።\n" +
            "cohesion = ውሃ-ውሃ።\n" +
            "adhesion = ውሃ-ሌላ።\n" +
            "በረዶ ይንሳፈፋል።\n" +
            "polar = universal solvent።",
        },
      ],
    },

    // ============================================================
    // 3.2 INORGANIC IONS
    // ============================================================
    {
      id: "n2",
      title: "3.2 Inorganic Ions",
      titleAm: "3.2 ኢንኦርጋኒክ አዮኖች",
      body:
        "Abatu, inorganic ions are charged atoms that the body needs in small amounts. They are NOT made of carbon chains. This table is heavily tested.",
      bodyAm:
        "ኢንኦርጋኒክ አዮኖች ትንሽ መጠን የሚያስፈልጉ ናቸው።",
      children: [
        {
          id: "n2-1",
          title: "Macronutrients vs Micronutrients",
          titleAm: "ማክሮ እና ማይክሮ",
          body:
            "MACRONUTRIENTS — needed in LARGE amounts:\n" +
            "• Na, K, Ca, Mg, P, Cl, S\n\n" +
            "MICRONUTRIENTS — needed in SMALL (trace) amounts:\n" +
            "• Fe, I, Cu, Zn, Mn, Se, F\n\n" +
            "Both are essential — deficiency of either causes disease.",
          bodyAm:
            "ማክሮ = ትልቅ መጠን (Na, K, Ca, P, Cl)።\n" +
            "ማይክሮ = ትንሽ መጠን (Fe, I, Cu, Zn)።",
        },
        {
          id: "n2-2",
          title: "Major ions and their functions (MEMORIZE)",
          titleAm: "ዋና አዮኖችና ተግባራት",
          body:
            "| Ion | Main functions | Deficiency |\n" +
            "|-----|----------------|------------|\n" +
            "| Na⁺ (sodium) | Nerve impulses, water balance, muscle contraction | Muscle cramps, low BP |\n" +
            "| K⁺ (potassium) | Nerve impulses, heart rhythm, muscle contraction | Weakness, irregular heartbeat |\n" +
            "| Ca²⁺ (calcium) | Bones, teeth, blood clotting, muscle contraction | Rickets, weak bones |\n" +
            "| Fe²⁺/Fe³⁺ (iron) | Hemoglobin (O₂ transport) | Anemia (fatigue, pale) |\n" +
            "| PO₄³⁻ (phosphate) | Bones, teeth, DNA, RNA, ATP | Weak bones, fatigue |\n" +
            "| Cl⁻ (chloride) | Water balance, stomach acid (HCl) | Muscle cramps, low acid |\n" +
            "| I⁻ (iodide) | Thyroid hormones (thyroxine) | Goiter, cretinism |\n" +
            "| Cu²⁺ (copper) | Enzyme cofactor, iron metabolism | Anemia, weak bones |\n" +
            "| Mg²⁺ (magnesium) | Enzyme cofactor, chlorophyll | Muscle cramps, weakness |",
          bodyAm:
            "Na = ነርቭ።\n" +
            "K = ነርቭ/ልብ።\n" +
            "Ca = አጥንት።\n" +
            "Fe = ሄሞግሎቢን።\n" +
            "P = አጥንት/DNA።\n" +
            "Cl = ሆድ አሲድ።\n" +
            "I = ታይሮይድ።\n" +
            "Cu = ኢንዛይም።\n" +
            "Mg = ክሎሮፊል።",
        },
        {
          id: "n2-3",
          title: "Sodium (Na⁺) — special notes",
          titleAm: "ሶዲየም ልዩ ማስታወሻ",
          body:
            "• Main EXTRACELLULAR cation (outside cells)\n" +
            "• Body requirement: ~2,300 mg/day (about 1 teaspoon salt)\n" +
            "• Sources: table salt, processed foods\n" +
            "• TOO MUCH sodium → high blood pressure (hypertension), heart disease\n" +
            "• TOO LITTLE sodium → muscle cramps, weakness, confusion\n" +
            "• Works with K⁺ to maintain nerve impulses",
          bodyAm:
            "ከሴል ውጭ።\n" +
            "~2,300 mg/ቀን።\n" +
            "ብዙ → የደም ግፊት።\n" +
            "ከ K ጋር ነርቭ።",
        },
        {
          id: "n2-4",
          title: "Potassium (K⁺), Calcium (Ca²⁺), Iron (Fe)",
          titleAm: "K, Ca, Fe",
          body:
            "POTASSIUM (K⁺):\n" +
            "• Main INTRACELLULAR cation (inside cells)\n" +
            "• Nerve impulses, heart rhythm\n" +
            "• Sources: bananas, potatoes, beans\n\n" +
            "CALCIUM (Ca²⁺):\n" +
            "• 99% in bones and teeth\n" +
            "• Blood clotting, muscle contraction, nerve function\n" +
            "• Sources: milk, cheese, leafy greens\n" +
            "• Deficiency → rickets in children, osteoporosis in adults\n\n" +
            "IRON (Fe):\n" +
            "• Central atom in HEMOGLOBIN → carries O₂ in blood\n" +
            "• Also in myoglobin (muscle)\n" +
            "• Sources: red meat, liver, spinach, beans\n" +
            "• Deficiency → ANEMIA (fatigue, pale skin, shortness of breath)",
          bodyAm:
            "K: በሴል ውስጥ፣ ልብ።\n" +
            "Ca: አጥንት፣ ደም መርጋት።\n" +
            "Fe: ሄሞግሎቢን → የደም ማነስ።",
        },
        {
          id: "n2-5",
          title: "Iodine, Phosphate, Chloride, Copper",
          titleAm: "I, P, Cl, Cu",
          body:
            "IODINE (I⁻):\n" +
            "• Needed for THYROID HORMONES (thyroxine)\n" +
            "• Deficiency → GOITER (swollen thyroid), CRETINISM (stunted mental/physical development in children)\n" +
            "• Source: iodized salt, seafood\n\n" +
            "PHOSPHATE (PO₄³⁻):\n" +
            "• Bones, teeth\n" +
            "• DNA, RNA, ATP\n" +
            "• Phospholipids\n\n" +
            "CHLORIDE (Cl⁻):\n" +
            "• Water balance\n" +
            "• Stomach acid (HCl)\n" +
            "• Nerve function\n\n" +
            "COPPER (Cu²⁺):\n" +
            "• Enzyme cofactor\n" +
            "• Helps absorb iron\n" +
            "• Deficiency → anemia, weak bones",
          bodyAm:
            "I = ታይሮይድ → ጎይተር።\n" +
            "P = አጥንት/DNA/ATP።\n" +
            "Cl = ሆድ አሲድ።\n" +
            "Cu = ኢንዛይም።",
        },
        {
          id: "n2-6",
          title: "⚠ Remember trap — Ions",
          titleAm: "⚠ አትርሳ — አዮኖች",
          body:
            "• Na = OUTSIDE cells; K = INSIDE cells.\n" +
            "• Ca = bones, teeth, clotting.\n" +
            "• Fe = hemoglobin → anemia if lacking.\n" +
            "• I = thyroid → goiter if lacking.\n" +
            "• P = bones + DNA + ATP.\n" +
            "• Cl = stomach acid.\n" +
            "• Cu = enzyme cofactor.\n" +
            "• Mg = chlorophyll.\n" +
            "• TOO MUCH sodium → hypertension.",
          bodyAm:
            "Na=ውጭ; K=ውስጥ።\n" +
            "Ca=አጥንት።\n" +
            "Fe=ሄሞግሎቢን።\n" +
            "I=ታይሮይድ።\n" +
            "P=DNA።\n" +
            "Cl=ሆድ።",
        },
      ],
    },

    // ============================================================
    // 3.3 CARBOHYDRATES
    // ============================================================
    {
      id: "n3",
      title: "3.3 Carbohydrates",
      titleAm: "3.3 ካርቦሃይድሬቶች",
      body:
        "Abatu, CARBOHYDRATES are the body's MAIN source of quick energy. They are made of C, H, O.",
      bodyAm:
        "ካርቦሃይድሬት = C, H, O። ዋና የጉልበት ምንጭ።",
      children: [
        {
          id: "n3-1",
          title: "Elements & general formula",
          titleAm: "ንጥረ ነገሮች",
          body:
            "Elements: CARBON (C), HYDROGEN (H), OXYGEN (O)\n" +
            "Ratio: H:O = 2:1 (same as water)\n" +
            "General formula: (CH₂O)ₙ\n\n" +
            "• Glucose = C₆H₁₂O₆\n" +
            "• Sucrose = C₁₂H₂₂O₁₁\n" +
            "• Starch = (C₆H₁₀O₅)ₙ",
          bodyAm:
            "C, H, O።\n" +
            "H:O = 2:1።\n" +
            "(CH₂O)ₙ።\n" +
            "ግሉኮስ = C₆H₁₂O₆።",
        },
        {
          id: "n3-2",
          title: "Three classes of carbohydrates",
          titleAm: "ሦስቱ ዓይነቶች",
          body:
            "1) MONOSACCHARIDES (simple sugars, 1 unit):\n" +
            "• GLUCOSE — main energy source for cells\n" +
            "• FRUCTOSE — fruit sugar\n" +
            "• GALACTOSE — in milk\n" +
            "• All are C₆H₁₂O₆ (isomers)\n" +
            "• Sweet, soluble, crystalline\n\n" +
            "2) DISACCHARIDES (2 units joined):\n" +
            "• MALTOSE = glucose + glucose (malt sugar)\n" +
            "• SUCROSE = glucose + fructose (table sugar)\n" +
            "• LACTOSE = glucose + galactose (milk sugar)\n" +
            "• Formed by CONDENSATION (water removed)\n" +
            "• Broken by HYDROLYSIS (water added)\n\n" +
            "3) POLYSACCHARIDES (many units):\n" +
            "• STARCH — plant energy storage (in roots, seeds)\n" +
            "• GLYCOGEN — animal energy storage (in liver, muscles)\n" +
            "• CELLULOSE — plant cell wall (structural; fiber in diet)\n" +
            "• CHITIN — fungal cell wall, insect exoskeleton",
          bodyAm:
            "ሞኖ = glucose, fructose, galactose።\n" +
            "ዳይ = maltose, sucrose, lactose።\n" +
            "ፖሊ = starch, glycogen, cellulose, chitin።",
        },
        {
          id: "n3-3",
          title: "Functions of carbohydrates",
          titleAm: "ተግባራት",
          body:
            "• IMMEDIATE ENERGY — glucose is fuel for respiration (~4 kcal/g)\n" +
            "• ENERGY STORAGE — starch (plants), glycogen (animals)\n" +
            "• STRUCTURAL — cellulose (plant cell wall), chitin (fungi, insects)\n" +
            "• CELL RECOGNITION — glycoproteins on cell surface\n" +
            "• DNA/RNA backbone — ribose & deoxyribose\n" +
            "• Dietary fiber — cellulose aids digestion",
          bodyAm:
            "ጉልበት፣ ማከማቸት፣ አወቃቀር፣ ሴል መለያ፣ DNA/RNA፣ ፋይበር።",
        },
        {
          id: "n3-4",
          title: "Food tests for carbohydrates",
          titleAm: "የምግብ ምርመራ",
          body:
            "BENEDICT'S TEST (reducing sugars):\n" +
            "• Add Benedict's solution to food sample\n" +
            "• Heat in water bath (5 min)\n" +
            "• POSITIVE = brick-red precipitate\n" +
            "• Detects: glucose, fructose, maltose (reducing sugars)\n" +
            "• Does NOT detect: sucrose (non-reducing), starch\n\n" +
            "IODINE TEST (starch):\n" +
            "• Add iodine solution to food sample\n" +
            "• POSITIVE = BLUE-BLACK colour\n" +
            "• Detects: starch only\n" +
            "• No heating needed",
          bodyAm:
            "Benedict's = brick-red = reducing sugar።\n" +
            "Iodine = blue-black = starch።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap — Carbohydrates",
          titleAm: "⚠ አትርሳ — ካርቦሃይድሬት",
          body:
            "• Monosaccharide = 1 sugar; disaccharide = 2; polysaccharide = many.\n" +
            "• GLUCOSE = main energy source.\n" +
            "• STARCH = plant storage; GLYCOGEN = animal storage.\n" +
            "• CELLULOSE = plant cell wall (cannot be digested by humans).\n" +
            "• Benedict's = reducing sugar = brick-red.\n" +
            "• Iodine = starch = blue-black.\n" +
            "• SUCROSE is NOT a reducing sugar (Benedict's negative).\n" +
            "• Condensation JOINS; hydrolysis BREAKS.",
          bodyAm:
            "ሞኖ=1, ዳይ=2, ፖሊ=ብዙ።\n" +
            "ቅባት = starch፣ እንስሳ = glycogen።\n" +
            "Benedict's = brick-red።\n" +
            "Iodine = blue-black።\n" +
            "Sucrose = non-reducing።",
        },
      ],
    },

    // ============================================================
    // 3.4 LIPIDS
    // ============================================================
    {
      id: "n4",
      title: "3.4 Lipids",
      titleAm: "3.4 ሊፒዶች",
      body:
        "Abatu, LIPIDS include FATS, OILS, PHOSPHOLIPIDS, and STEROIDS. They are insoluble in water (hydrophobic) — this makes them great for membranes and energy storage.",
      bodyAm:
        "ሊፒድ = ቅባት፣ ዘይት፣ ፎስፎሊፒድ፣ ስቴሮይድ። በውሃ አይሟሟም።",
      children: [
        {
          id: "n4-1",
          title: "Elements & properties",
          titleAm: "ንጥረ ነገሮች",
          body:
            "Elements: C, H, O (but LESS oxygen than carbohydrates)\n\n" +
            "Properties:\n" +
            "• INSOLUBLE in water (hydrophobic)\n" +
            "• SOLUBLE in organic solvents (ethanol, ether, chloroform)\n" +
            "• Oily or greasy to touch\n" +
            "• Contain MORE energy per gram than carbs or proteins (~9 kcal/g)",
          bodyAm:
            "C, H, O (O ያነሰ)።\n" +
            "በውሃ አይሟሟም።\n" +
            "በ ethanol ይሟሟል።\n" +
            "9 kcal/g።",
        },
        {
          id: "n4-2",
          title: "Three main types of lipids",
          titleAm: "ሦስቱ ዓይነቶች",
          body:
            "1) TRIGLYCERIDES (fats & oils):\n" +
            "• GLYCEROL + 3 FATTY ACIDS\n" +
            "• Fats = solid at room temp (animal); Oils = liquid (plant)\n" +
            "• Main form of energy storage\n" +
            "• Saturated = no double bonds (butter); Unsaturated = double bonds (olive oil)\n\n" +
            "2) PHOSPHOLIPIDS:\n" +
            "• GLYCEROL + 2 FATTY ACIDS + PHOSPHATE group\n" +
            "• Hydrophilic head + hydrophobic tails\n" +
            "• MAIN component of CELL MEMBRANE (phospholipid bilayer)\n\n" +
            "3) STEROIDS:\n" +
            "• 4 fused carbon rings\n" +
            "• Examples: CHOLESTEROL, TESTOSTERONE, ESTROGEN, CORTISOL\n" +
            "• Include some hormones\n" +
            "• Cholesterol is needed for cell membranes",
          bodyAm:
            "ትሪግሊሰራይድ = glycerol + 3 FA።\n" +
            "ፎስፎሊፒድ = ሴል ሽፋን።\n" +
            "ስቴሮይድ = ሆርሞን (cholesterol, testosterone)።",
        },
        {
          id: "n4-3",
          title: "Functions of lipids",
          titleAm: "ተግባራት",
          body:
            "• ENERGY STORAGE (more than twice carbs per gram)\n" +
            "• INSULATION (subcutaneous fat prevents heat loss)\n" +
            "• PROTECTION (cushions organs — kidney, heart)\n" +
            "• CELL MEMBRANE (phospholipid bilayer)\n" +
            "• HORMONES (steroid hormones — sex hormones, cortisol)\n" +
            "• VITAMIN ABSORPTION (fat-soluble vitamins A, D, E, K)\n" +
            "• WATERPROOFING (skin oils, waxy leaf cuticle)",
          bodyAm:
            "ጉልበት፣ ሙቀት፣ ጥበቃ፣ ሴል ሽፋን፣ ሆርሞን፣ ቫይታሚን፣ waterproof።",
        },
        {
          id: "n4-4",
          title: "Emulsion test for lipids",
          titleAm: "የሊፒድ ምርመራ",
          body:
            "EMULSION TEST:\n" +
            "1) Add food sample to test tube\n" +
            "2) Add ethanol; shake (dissolves lipid)\n" +
            "3) Pour into water\n" +
            "4) POSITIVE = MILKY WHITE EMULSION forms\n" +
            "• Detects: fats and oils",
          bodyAm:
            "ናሙና + ethanol + ውሃ = ነጭ emulsion።",
        },
        {
          id: "n4-5",
          title: "⚠ Remember trap — Lipids",
          titleAm: "⚠ አትርሳ — ሊፒድ",
          body:
            "• Lipids = C, H, O (LESS oxygen than carbs).\n" +
            "• Triglyceride = glycerol + 3 fatty acids.\n" +
            "• Phospholipid = glycerol + 2 fatty acids + phosphate.\n" +
            "• Phospholipids form the CELL MEMBRANE.\n" +
            "• Steroids = 4 rings; include hormones.\n" +
            "• Lipids give MORE energy per gram (9 kcal/g) than carbs or proteins (~4).\n" +
            "• Lipids are INSOLUBLE in water.\n" +
            "• Emulsion test = milky white.",
          bodyAm:
            "ትሪ = glycerol + 3 FA።\n" +
            "ፎስፎ = ሴል ሽፋን።\n" +
            "ስቴሮይድ = ሆርሞን።\n" +
            "9 kcal/g።\n" +
            "emulsion = ነጭ።",
        },
      ],
    },

    // ============================================================
    // 3.5 PROTEINS
    // ============================================================
    {
      id: "n5",
      title: "3.5 Proteins",
      titleAm: "3.5 ፕሮቲኖች",
      body:
        "Abatu, PROTEINS are the most VERSATILE molecules of life — enzymes, hormones, antibodies, structure. They contain NITROGEN (unlike carbs and lipids).",
      bodyAm:
        "ፕሮቲን በጣም ብዙ ተግባር አለው። ናይትሮጅን ይዟል።",
      children: [
        {
          id: "n5-1",
          title: "Elements & building blocks",
          titleAm: "ንጥረ ነገሮች",
          body:
            "Elements: C, H, O, N (some also have SULFUR, S)\n\n" +
            "MONOMER: AMINO ACID (20 different types)\n" +
            "POLYMER: POLYPEPTIDE → PROTEIN\n\n" +
            "KEY: Amino acids contain NITROGEN — that's why proteins are the main source of nitrogen in the body.",
          bodyAm:
            "C, H, O, N (+S)።\n" +
            "ሞኖመር = amino acid (20)።\n" +
            "ፖሊመር = protein።",
        },
        {
          id: "n5-2",
          title: "General structure of an amino acid",
          titleAm: "የ amino acid አወቃቀር",
          body:
            "Every amino acid has FOUR groups attached to a central carbon:\n\n" +
            "         H\n" +
            "         |\n" +
            "  NH₂ — C — COOH\n" +
            "         |\n" +
            "         R\n\n" +
            "• AMINO GROUP (NH₂) — basic\n" +
            "• CARBOXYL GROUP (COOH) — acidic\n" +
            "• HYDROGEN (H)\n" +
            "• R GROUP (side chain) — DIFFERENT in each of the 20 amino acids → determines its properties\n\n" +
            "Examples:\n" +
            "• Glycine (R = H)\n" +
            "• Alanine (R = CH₃)",
          bodyAm:
            "ማዕከላዊ C ዙሪያ 4 ቡድኖች: NH₂, COOH, H, R።\n" +
            "R = ልዩ ለእያንዳንዱ amino acid።",
        },
        {
          id: "n5-3",
          title: "Peptide bond formation",
          titleAm: "Peptide bond",
          body:
            "A PEPTIDE BOND forms between the AMINO GROUP of one amino acid and the CARBOXYL GROUP of the next.\n\n" +
            "REACTION: CONDENSATION — one molecule of WATER is REMOVED.\n\n" +
            "• 2 amino acids → dipeptide + H₂O\n" +
            "• 3 → tripeptide\n" +
            "• Many → polypeptide\n" +
            "• One or more polypeptides → protein\n\n" +
            "BREAKING the bond: HYDROLYSIS — add water back.",
          bodyAm:
            "Peptide bond = NH₂ + COOH → ውሃ ተወግዶ።\n" +
            "2 = dipeptide።\n" +
            "ብዙ = polypeptide።\n" +
            "ማፍረስ = hydrolysis (ውሃ ተጨምሮ)።",
        },
        {
          id: "n5-4",
          title: "Functions of proteins",
          titleAm: "ተግባራት",
          body:
            "• ENZYMES — biological catalysts (amylase, protease)\n" +
            "• STRUCTURAL — collagen (skin, bone), keratin (hair, nails)\n" +
            "• TRANSPORT — hemoglobin (O₂), membrane channels\n" +
            "• HORMONES — insulin, growth hormone\n" +
            "• ANTIBODIES — immunity (immunoglobulins)\n" +
            "• MUSCLE CONTRACTION — actin, myosin\n" +
            "• STORAGE — casein in milk, ovalbumin in egg white\n" +
            "• RECEPTORS — on cell membranes",
          bodyAm:
            "ኢንዛይም፣ አወቃቀር፣ መጓጓዣ፣ ሆርሞን፣ ፀረ አካል፣ ጡንቻ፣ ማከማቻ፣ ተቀባይ።",
        },
        {
          id: "n5-5",
          title: "Food tests for proteins",
          titleAm: "የፕሮቲን ምርመራ",
          body:
            "BIURET TEST:\n" +
            "1) Add Biuret solution (NaOH + CuSO₄) to sample\n" +
            "2) NO heating needed\n" +
            "3) POSITIVE = VIOLET / PURPLE colour\n" +
            "• Detects: proteins and peptides (peptide bonds)\n\n" +
            "XANTHOPROTEIC TEST:\n" +
            "1) Add concentrated nitric acid to sample\n" +
            "2) Heat\n" +
            "3) POSITIVE = YELLOW colour\n" +
            "4) Add ammonia → turns ORANGE\n" +
            "• Detects: proteins with aromatic amino acids (phenylalanine, tyrosine)",
          bodyAm:
            "Biuret = violet።\n" +
            "Xanthoproteic = yellow→orange።",
        },
        {
          id: "n5-6",
          title: "⚠ Remember trap — Proteins",
          titleAm: "⚠ አትርሳ — ፕሮቲን",
          body:
            "• Proteins = C, H, O, N (+S) — contain NITROGEN.\n" +
            "• Monomer = amino acid (20 types).\n" +
            "• Amino acid = NH₂ + COOH + H + R.\n" +
            "• R group differs among amino acids.\n" +
            "• Peptide bond forms by CONDENSATION (water removed).\n" +
            "• Biuret test = violet = peptide bonds.\n" +
            "• Xanthoproteic = yellow→orange.\n" +
            "• Only proteins contain nitrogen among macromolecules.",
          bodyAm:
            "C, H, O, N።\n" +
            "amino acid።\n" +
            "peptide bond = condensation።\n" +
            "Biuret = violet።\n" +
            "Xanthoproteic = yellow።",
        },
      ],
    },

    // ============================================================
    // 3.6 NUCLEIC ACIDS
    // ============================================================
    {
      id: "n6",
      title: "3.6 Nucleic Acids",
      titleAm: "3.6 ኑክሌይክ አሲዶች",
      body:
        "Abatu, NUCLEIC ACIDS store and transmit GENETIC INFORMATION. There are two types: DNA and RNA.",
      bodyAm:
        "ኑክሌይክ አሲድ የዘር መረጃ ያከማቻል። DNA እና RNA።",
      children: [
        {
          id: "n6-1",
          title: "Elements & monomer",
          titleAm: "ንጥረ ነገሮች",
          body:
            "Elements: C, H, O, N, P (contain PHOSPHORUS)\n\n" +
            "MONOMER: NUCLEOTIDE\n" +
            "POLYMER: DNA or RNA\n\n" +
            "A NUCLEOTIDE has 3 parts:\n" +
            "1) 5-CARBON SUGAR (deoxyribose or ribose)\n" +
            "2) PHOSPHATE GROUP\n" +
            "3) NITROGENOUS BASE (A, T/U, G, C)",
          bodyAm:
            "C, H, O, N, P።\n" +
            "ሞኖመር = nucleotide።\n" +
            "ሦስት ክፍሎች: ስኳር, ፎስፌት, ቤዝ።",
        },
        {
          id: "n6-2",
          title: "Nitrogenous bases",
          titleAm: "ናይትሮጅን ቤዞች",
          body:
            "FIVE main bases:\n" +
            "• ADENINE (A)\n" +
            "• THYMINE (T) — in DNA only\n" +
            "• URACIL (U) — in RNA only\n" +
            "• GUANINE (G)\n" +
            "• CYTOSINE (C)\n\n" +
            "PAIRING RULES (Chargaff's rules):\n" +
            "• A pairs with T (in DNA)\n" +
            "• A pairs with U (in RNA)\n" +
            "• G pairs with C",
          bodyAm:
            "A, T, U, G, C።\n" +
            "A-T (DNA)።\n" +
            "A-U (RNA)።\n" +
            "G-C።",
        },
        {
          id: "n6-3",
          title: "DNA vs RNA — comparison",
          titleAm: "DNA እና RNA ንጽጽር",
          body:
            "| Feature | DNA | RNA |\n" +
            "|---------|-----|-----|\n" +
            "| Full name | Deoxyribonucleic acid | Ribonucleic acid |\n" +
            "| Sugar | Deoxyribose | Ribose |\n" +
            "| Strands | Double helix | Single strand |\n" +
            "| Bases | A, T, G, C | A, U, G, C |\n" +
            "| Function | Stores genetic info | Makes proteins |\n" +
            "| Location | Nucleus | Nucleus + cytoplasm |\n" +
            "| Stability | Stable | Less stable |\n" +
            "| Length | Very long | Shorter |",
          bodyAm:
            "DNA: double, deoxyribose, A-T-G-C, መረጃ።\n" +
            "RNA: single, ribose, A-U-G-C, ፕሮቲን።",
        },
        {
          id: "n6-4",
          title: "DNA structure",
          titleAm: "የDNA አወቃቀር",
          body:
            "• Discovered by WATSON & CRICK (1953)\n" +
            "• Shape = DOUBLE HELIX (twisted ladder)\n" +
            "• Sides of ladder = sugar-phosphate backbone\n" +
            "• Rungs of ladder = base pairs (A-T, G-C)\n" +
            "• Bases joined by HYDROGEN BONDS\n" +
            "• A-T = 2 hydrogen bonds; G-C = 3 hydrogen bonds\n" +
            "• Two strands are ANTIPARALLEL (run opposite directions)",
          bodyAm:
            "Watson & Crick (1953)።\n" +
            "Double helix።\n" +
            "A-T (2), G-C (3)።\n" +
            "Antiparallel።",
        },
        {
          id: "n6-5",
          title: "Three types of RNA",
          titleAm: "ሦስቱ የRNA ዓይነቶች",
          body:
            "• mRNA (messenger RNA) — carries genetic message from DNA to ribosome\n" +
            "• tRNA (transfer RNA) — brings amino acids to ribosome\n" +
            "• rRNA (ribosomal RNA) — part of the ribosome (site of protein synthesis)",
          bodyAm:
            "mRNA — መልእክት።\n" +
            "tRNA — amino acid።\n" +
            "rRNA — ribosome።",
        },
        {
          id: "n6-6",
          title: "Functions of nucleic acids",
          titleAm: "ተግባራት",
          body:
            "• STORE genetic information (DNA)\n" +
            "• TRANSMIT information to next generation (DNA replication)\n" +
            "• EXPRESS genetic information (transcription → translation)\n" +
            "• Make PROTEINS (via RNA)\n" +
            "• Provide energy carrier ATP (adenosine triphosphate — a nucleotide derivative)",
          bodyAm:
            "ማከማቻ፣ ማስተላለፍ፣ መግለጽ፣ ፕሮቲን፣ ATP።",
        },
        {
          id: "n6-7",
          title: "⚠ Remember trap — Nucleic acids",
          titleAm: "⚠ አትርሳ — ኑክሌይክ አሲድ",
          body:
            "• Nucleic acids = C, H, O, N, P.\n" +
            "• Monomer = nucleotide (sugar + phosphate + base).\n" +
            "• DNA = deoxyribose + A,T,G,C + double helix.\n" +
            "• RNA = ribose + A,U,G,C + single strand.\n" +
            "• A-T in DNA; A-U in RNA; G-C always.\n" +
            "• DNA stores info; RNA makes protein.\n" +
            "• Watson & Crick discovered DNA structure.\n" +
            "• Three RNAs = mRNA, tRNA, rRNA.",
          bodyAm:
            "C, H, O, N, P።\n" +
            "nucleotide።\n" +
            "DNA: A-T።\n" +
            "RNA: A-U።\n" +
            "Watson & Crick።",
        },
      ],
    },

    // ============================================================
    // FORMULA / REFERENCE SHEET
    // ============================================================
    {
      id: "nRef",
      title: "Reference Sheet — Unit 3",
      titleAm: "የማጣቀሻ ሉህ — ክፍል 3",
      body:
        "| Molecule | Elements | Monomer | Polymer | Test | Positive result |\n" +
        "|----------|----------|---------|---------|------|-----------------|\n" +
        "| Carbohydrate | C, H, O | Monosaccharide | Polysaccharide | Benedict's (reducing sugar) | Brick-red |\n" +
        "| Carbohydrate | C, H, O | Monosaccharide | Starch | Iodine | Blue-black |\n" +
        "| Lipid | C, H, O | Glycerol + fatty acids | Triglyceride | Emulsion | Milky white |\n" +
        "| Protein | C, H, O, N (S) | Amino acid | Polypeptide | Biuret | Violet/purple |\n" +
        "| Protein | C, H, O, N | Amino acid | Polypeptide | Xanthoproteic | Yellow→orange |\n" +
        "| Nucleic acid | C, H, O, N, P | Nucleotide | DNA/RNA | — | — |\n\n" +
        "IONS:\n" +
        "• Na — nerve, water balance\n" +
        "• K — nerve, heart\n" +
        "• Ca — bones, teeth, clotting\n" +
        "• Fe — hemoglobin\n" +
        "• P — bones, DNA, ATP\n" +
        "• Cl — stomach acid\n" +
        "• I — thyroid\n" +
        "• Cu — enzyme cofactor\n" +
        "• Mg — chlorophyll\n\n" +
        "WATER PROPERTIES: cohesion, adhesion, surface tension, high specific heat, latent heat, universal solvent, ice floats.",
      bodyAm:
        "ሰንጠረዡን አስታውስ።",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 3",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1) Water is POLAR — that's why it's the universal solvent.\n" +
        "2) Cohesion = water-water; adhesion = water-other.\n" +
        "3) Ice is LESS dense than water → floats.\n" +
        "4) Na = outside cells; K = inside cells.\n" +
        "5) Fe deficiency = anemia; I deficiency = goiter.\n" +
        "6) Monosaccharide = 1 sugar; polysaccharide = many.\n" +
        "7) Starch = plant storage; glycogen = animal storage.\n" +
        "8) Cellulose = plant cell wall (undigestible by humans).\n" +
        "9) Benedict's = brick-red for reducing sugars.\n" +
        "10) Iodine = blue-black for starch.\n" +
        "11) Sucrose is NOT reducing (Benedict's negative).\n" +
        "12) Biuret = violet (peptide bonds).\n" +
        "13) Xanthoproteic = yellow→orange (aromatic AAs).\n" +
        "14) Proteins contain NITROGEN.\n" +
        "15) Nucleic acids contain PHOSPHORUS.\n" +
        "16) Peptide bond = condensation (water removed).\n" +
        "17) DNA = A-T-G-C; RNA = A-U-G-C.\n" +
        "18) DNA = double helix; RNA = single strand.\n" +
        "19) Phospholipids form the cell membrane.\n" +
        "20) Lipids = 9 kcal/g (more than carbs/proteins).",
      bodyAm:
        "ወጥመዶቹን ሁሉ አስታውስ።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Which elements make up carbohydrates?", options: ["C, H, O", "C, H, O, N", "C, H, O, N, P", "C, H, O, N, S"], answer: "0", explanation: "Carbohydrates = C, H, O." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Which elements make up proteins?", options: ["C, H, O", "C, H, O, N", "C, H, O, N, P", "C, H, O, N, S only"], answer: "1", explanation: "Proteins = C, H, O, N (some S)." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Which elements make up nucleic acids?", options: ["C, H, O", "C, H, O, N", "C, H, O, N, P", "C, H, O, S"], answer: "2", explanation: "Nucleic acids = C, H, O, N, P." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Which elements make up lipids?", options: ["C, H, O", "C, H, O, N", "C, H, O, N, P", "C, H, O, N, S"], answer: "0", explanation: "Lipids = C, H, O (less O)." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "The monomer of carbohydrates is:", options: ["Amino acid", "Monosaccharide", "Nucleotide", "Fatty acid"], answer: "1", explanation: "Monosaccharide = sugar monomer." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "The monomer of proteins is:", options: ["Amino acid", "Monosaccharide", "Nucleotide", "Glycerol"], answer: "0", explanation: "Amino acid = protein monomer." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "The monomer of nucleic acids is:", options: ["Amino acid", "Monosaccharide", "Nucleotide", "Fatty acid"], answer: "2", explanation: "Nucleotide = nucleic acid monomer." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Which is a monosaccharide?", options: ["Starch", "Sucrose", "Glucose", "Glycogen"], answer: "2", explanation: "Glucose = monosaccharide." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Which is a polysaccharide?", options: ["Glucose", "Fructose", "Maltose", "Starch"], answer: "3", explanation: "Starch = polysaccharide." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Which is a disaccharide?", options: ["Glucose", "Sucrose", "Starch", "Cellulose"], answer: "1", explanation: "Sucrose = disaccharide." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The main energy source for cells is:", options: ["Starch", "Glycogen", "Glucose", "Cellulose"], answer: "2", explanation: "Glucose = direct energy source." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Plant energy storage carbohydrate is:", options: ["Glycogen", "Starch", "Cellulose", "Chitin"], answer: "1", explanation: "Starch = plant storage." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Animal energy storage carbohydrate is:", options: ["Glycogen", "Starch", "Cellulose", "Chitin"], answer: "0", explanation: "Glycogen = animal storage." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "The structural carbohydrate in plant cell walls is:", options: ["Starch", "Glycogen", "Cellulose", "Chitin"], answer: "2", explanation: "Cellulose = plant cell wall." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Benedict's test detects:", options: ["Starch", "Reducing sugars", "Protein", "Lipids"], answer: "1", explanation: "Benedict's = reducing sugars." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Benedict's test positive result is:", options: ["Blue-black", "Brick-red", "Violet", "Milky white"], answer: "1", explanation: "Brick-red = reducing sugar." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Iodine test detects:", options: ["Sugar", "Starch", "Protein", "Lipid"], answer: "1", explanation: "Iodine = starch." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Iodine test positive result is:", options: ["Blue-black", "Brick-red", "Violet", "Yellow"], answer: "0", explanation: "Blue-black = starch." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "Biuret test detects:", options: ["Sugar", "Starch", "Protein", "Lipid"], answer: "2", explanation: "Biuret = protein." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "Biuret test positive result is:", options: ["Brick-red", "Blue-black", "Violet", "Orange"], answer: "2", explanation: "Violet = protein." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Emulsion test detects:", options: ["Sugar", "Starch", "Protein", "Lipid"], answer: "3", explanation: "Emulsion test = lipid." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "Emulsion test positive result is:", options: ["Brick-red", "Blue-black", "Violet", "Milky white"], answer: "3", explanation: "Milky white = lipid." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "The building block of DNA and RNA is:", options: ["Amino acid", "Monosaccharide", "Nucleotide", "Fatty acid"], answer: "2", explanation: "Nucleotide." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "DNA has which shape?", options: ["Single strand", "Double helix", "Branched", "Spiral"], answer: "1", explanation: "DNA = double helix." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "RNA has which shape?", options: ["Single strand", "Double helix", "Branched", "Spiral"], answer: "0", explanation: "RNA = single strand." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "Which sugar is in DNA?", options: ["Ribose", "Deoxyribose", "Glucose", "Fructose"], answer: "1", explanation: "DNA = deoxyribose." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Which sugar is in RNA?", options: ["Ribose", "Deoxyribose", "Glucose", "Fructose"], answer: "0", explanation: "RNA = ribose." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Which base is found ONLY in DNA?", options: ["Adenine", "Guanine", "Uracil", "Thymine"], answer: "3", explanation: "Thymine = DNA only." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Which base is found ONLY in RNA?", options: ["Adenine", "Guanine", "Uracil", "Thymine"], answer: "2", explanation: "Uracil = RNA only." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "In DNA, adenine pairs with:", options: ["Guanine", "Cytosine", "Thymine", "Uracil"], answer: "2", explanation: "A-T in DNA." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "In RNA, adenine pairs with:", options: ["Guanine", "Cytosine", "Thymine", "Uracil"], answer: "3", explanation: "A-U in RNA." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "Guanine pairs with:", options: ["Adenine", "Cytosine", "Thymine", "Uracil"], answer: "1", explanation: "G-C." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "Water makes up about what % of a cell?", options: ["10%", "30%", "50%", "70%"], answer: "3", explanation: "Water ~70% of cell." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "Which property allows insects to walk on water?", options: ["Cohesion", "Adhesion", "Surface tension", "High specific heat"], answer: "2", explanation: "Surface tension." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "Why does ice float on water?", options: ["It is heavier", "It is less dense", "It is colder", "It has no oxygen"], answer: "1", explanation: "Ice is less dense." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "Water is called the universal solvent because it:", options: ["Is cheap", "Is polar", "Is blue", "Is cold"], answer: "1", explanation: "Polar → dissolves most things." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "Which ion is central to hemoglobin?", options: ["Sodium", "Calcium", "Iron", "Iodine"], answer: "2", explanation: "Iron = hemoglobin." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "Which ion is needed for thyroid hormones?", options: ["Iron", "Calcium", "Iodine", "Sodium"], answer: "2", explanation: "Iodine = thyroid." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "Which ion is the main component of bones and teeth?", options: ["Sodium", "Calcium", "Iron", "Iodine"], answer: "1", explanation: "Calcium = bones." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "Which is the main cation INSIDE cells?", options: ["Sodium", "Potassium", "Calcium", "Iron"], answer: "1", explanation: "Potassium = inside." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Which sugar is NOT a reducing sugar?", options: ["Glucose", "Fructose", "Sucrose", "Maltose"], answer: "2", explanation: "Sucrose is non-reducing." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Sucrose is made of:", options: ["Glucose + glucose", "Glucose + fructose", "Glucose + galactose", "Fructose + galactose"], answer: "1", explanation: "Sucrose = glucose + fructose." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "Lactose is made of:", options: ["Glucose + glucose", "Glucose + fructose", "Glucose + galactose", "Fructose + galactose"], answer: "2", explanation: "Lactose = glucose + galactose." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "Maltose is made of:", options: ["Glucose + glucose", "Glucose + fructose", "Glucose + galactose", "Fructose + galactose"], answer: "0", explanation: "Maltose = 2 glucose." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "Which structure in plants is made of cellulose?", options: ["Nucleus", "Cell membrane", "Cell wall", "Vacuole"], answer: "2", explanation: "Cellulose = plant cell wall." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "Which polysaccharide is found in fungi cell walls and insect exoskeletons?", options: ["Starch", "Glycogen", "Cellulose", "Chitin"], answer: "3", explanation: "Chitin = fungi + insects." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "Which test needs heating in a water bath?", options: ["Iodine", "Benedict's", "Biuret", "Emulsion"], answer: "1", explanation: "Benedict's needs heating." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "Which test does NOT need heating?", options: ["Benedict's", "Iodine", "Xanthoproteic", "Emulsion"], answer: "1", explanation: "Iodine needs no heating." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "Triglycerides are made of:", options: ["Glycerol + 3 fatty acids", "Glycerol + 2 fatty acids + phosphate", "Amino acids", "Sugars"], answer: "0", explanation: "Triglyceride = glycerol + 3 FA." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Phospholipids are made of:", options: ["Glycerol + 3 fatty acids", "Glycerol + 2 fatty acids + phosphate", "Sugars", "Amino acids"], answer: "1", explanation: "Phospholipid = glycerol + 2 FA + phosphate." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "Phospholipids form which structure?", options: ["Cell wall", "Cell membrane", "Nucleus", "Ribosome"], answer: "1", explanation: "Phospholipid bilayer = cell membrane." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "Which lipid group includes hormones like testosterone?", options: ["Triglycerides", "Phospholipids", "Steroids", "Waxes"], answer: "2", explanation: "Steroids = hormones." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "How many kilocalories per gram do lipids provide?", options: ["2", "4", "9", "20"], answer: "2", explanation: "Lipids = 9 kcal/g." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "How many kilocalories per gram do carbs provide?", options: ["2", "4", "9", "20"], answer: "1", explanation: "Carbs = 4 kcal/g." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "Saturated fats are usually:", options: ["Liquid at room temp", "Solid at room temp", "Gaseous", "Always unhealthy"], answer: "1", explanation: "Saturated = solid (e.g., butter)." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "The four groups on a central carbon of an amino acid are:", options: ["NH₂, COOH, H, R", "OH, COOH, H, R", "NH₂, OH, H, R", "NH₂, COOH, O, R"], answer: "0", explanation: "NH₂ + COOH + H + R." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "The R group of an amino acid determines:", options: ["Its colour", "Its identity and properties", "Its size only", "Its mass"], answer: "1", explanation: "R group = identity." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "How many different amino acids are used to build proteins?", options: ["4", "10", "20", "64"], answer: "2", explanation: "20 amino acids." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Peptide bonds form by:", options: ["Hydrolysis", "Condensation", "Oxidation", "Reduction"], answer: "1", explanation: "Condensation removes water." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "Breaking a peptide bond requires:", options: ["Condensation", "Hydrolysis", "Oxidation", "Reduction"], answer: "1", explanation: "Hydrolysis adds water." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "Which molecule carries oxygen in blood?", options: ["Insulin", "Collagen", "Hemoglobin", "Keratin"], answer: "2", explanation: "Hemoglobin = O₂ transport." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Which protein is structural in hair and nails?", options: ["Hemoglobin", "Collagen", "Keratin", "Insulin"], answer: "2", explanation: "Keratin = hair/nails." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "Enzymes are made of:", options: ["Carbohydrates", "Lipids", "Proteins", "Nucleic acids"], answer: "2", explanation: "Enzymes = proteins." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "Which antibody type is a protein?", options: ["IgG", "Starch", "Cellulose", "Cholesterol"], answer: "0", explanation: "Antibodies (IgG) = proteins." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "The Xanthoproteic test uses which acid?", options: ["Hydrochloric acid", "Nitric acid", "Sulfuric acid", "Acetic acid"], answer: "1", explanation: "Nitric acid (HNO₃)." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "Biuret test needs which two chemicals?", options: ["NaOH + CuSO₄", "HCl + NaOH", "Ethanol + water", "Iodine + water"], answer: "0", explanation: "Biuret = NaOH + CuSO₄." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "Which nucleic acid stores genetic information?", options: ["DNA", "RNA", "ATP", "Protein"], answer: "0", explanation: "DNA = storage." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "Which nucleic acid is involved in protein synthesis?", options: ["DNA", "RNA", "ATP", "Lipid"], answer: "1", explanation: "RNA = protein synthesis." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "The three parts of a nucleotide are:", options: ["Sugar + phosphate + base", "Sugar + amino + base", "Phosphate + lipid + base", "Sugar + phosphate + lipid"], answer: "0", explanation: "Sugar + phosphate + base." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "Which base is found in both DNA and RNA?", options: ["Thymine", "Uracil", "Adenine", "Only guanine"], answer: "2", explanation: "Adenine is in both." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Which mRNA carries?", options: ["Amino acids", "Genetic message", "Ribosomes", "Oxygen"], answer: "1", explanation: "mRNA = message." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "Which RNA brings amino acids to the ribosome?", options: ["mRNA", "tRNA", "rRNA", "DNA"], answer: "1", explanation: "tRNA = amino acid carrier." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "Which is NOT a function of water?", options: ["Solvent", "Transport", "Temperature regulation", "Genetic information"], answer: "3", explanation: "Genetic info = nucleic acids." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "Which ion deficiency causes anemia?", options: ["Sodium", "Iron", "Iodine", "Calcium"], answer: "1", explanation: "Iron deficiency → anemia." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Which ion deficiency causes goiter?", options: ["Sodium", "Iron", "Iodine", "Calcium"], answer: "2", explanation: "Iodine deficiency → goiter." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "Too much sodium in diet causes:", options: ["Anemia", "Goiter", "Hypertension", "Rickets"], answer: "2", explanation: "High sodium → high BP." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "Which mineral is in chlorophyll?", options: ["Iron", "Magnesium", "Calcium", "Sodium"], answer: "1", explanation: "Magnesium = chlorophyll." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "Which mineral helps with blood clotting?", options: ["Sodium", "Potassium", "Calcium", "Iodine"], answer: "2", explanation: "Calcium = clotting." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "Which mineral is in stomach acid?", options: ["Chloride", "Calcium", "Iron", "Sodium"], answer: "0", explanation: "Chloride (HCl)." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "Which best describes cohesion?", options: ["Water sticks to other things", "Water sticks to itself", "Water becomes ice", "Water evaporates"], answer: "1", explanation: "Cohesion = water to water." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Which of these is a monosaccharide?", options: ["Lactose", "Fructose", "Sucrose", "Glycogen"], answer: "1", explanation: "Fructose = monosaccharide." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "Why is water the universal solvent?", options: ["It is cheap", "It is polar", "It is colourless", "It is cold"], answer: "1", explanation: "Polar → dissolves most substances." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "What causes sweating to cool the body?", options: ["Cohesion", "Latent heat of vaporization", "Surface tension", "Adhesion"], answer: "1", explanation: "Evaporation removes heat." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Water moving up in xylem is helped mainly by:", options: ["Adhesion only", "Cohesion + adhesion + transpiration pull", "Gravity", "Only root pressure"], answer: "1", explanation: "All three forces." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "Which test would you use to distinguish starch from protein?", options: ["Biuret vs Xanthoproteic", "Benedict's vs emulsion", "Iodine vs Biuret", "Only Benedict's"], answer: "2", explanation: "Iodine for starch; Biuret for protein." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "A food sample gives a brick-red colour with Benedict's and a violet colour with Biuret. The sample likely contains:", options: ["Starch + lipid", "Reducing sugar + protein", "Protein + lipid", "Only starch"], answer: "1", explanation: "Brick-red = reducing sugar; violet = protein." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "A triglyceride contains:", options: ["1 glycerol + 3 fatty acids", "1 glycerol + 2 fatty acids + phosphate", "2 glycerol + 1 fatty acid", "4 fatty acids"], answer: "0", explanation: "Triglyceride." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "Which feature distinguishes proteins from carbohydrates?", options: ["Presence of nitrogen", "Presence of carbon", "Presence of hydrogen", "Presence of oxygen"], answer: "0", explanation: "Proteins contain N; carbs do not." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "When 2 amino acids join to form a dipeptide, what is released?", options: ["CO₂", "O₂", "H₂O", "NH₃"], answer: "2", explanation: "Water released (condensation)." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "Xanthoproteic test is positive for proteins with:", options: ["Only peptide bonds", "Aromatic amino acids (phenylalanine, tyrosine)", "Nitrogen", "All proteins equally"], answer: "1", explanation: "Aromatic AAs give yellow." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "A deficiency of iron would most directly affect:", options: ["Bone strength", "Blood oxygen transport", "Thyroid hormone", "Nerve impulses"], answer: "1", explanation: "Iron needed for hemoglobin." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "A deficiency of iodine would most likely cause:", options: ["Anemia", "Goiter", "Rickets", "Hypertension"], answer: "1", explanation: "Iodine → thyroid." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Which of these has the correct pairing?", options: ["DNA — ribose", "RNA — uracil", "DNA — single strand", "RNA — thymine"], answer: "1", explanation: "RNA = uracil." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Which of these is NOT a nucleic acid?", options: ["DNA", "RNA", "ATP", "Cellulose"], answer: "3", explanation: "Cellulose = carbohydrate." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "A nucleotide consists of:", options: ["Sugar + phosphate + base", "Sugar + amino + base", "Phosphate + lipid + base", "Sugar + phosphate + lipid"], answer: "0", explanation: "Sugar + phosphate + base." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "DNA and RNA differ in which of the following?", options: ["Number of strands", "Type of sugar", "Nitrogenous bases", "All of the above"], answer: "3", explanation: "Strands, sugar, and bases all differ." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "In DNA, A pairs with T through:", options: ["Ionic bond", "Hydrogen bond", "Covalent bond", "Disulfide bond"], answer: "1", explanation: "Hydrogen bonds between bases." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "Which of these would denature a protein (change its shape)?", options: ["Cooling", "High temperature", "Adding water", "Removing salt"], answer: "1", explanation: "Heat denatures proteins." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "A food sample dissolved in ethanol, then poured into water, gives a milky white emulsion. The sample contains:", options: ["Protein", "Starch", "Lipid", "Reducing sugar"], answer: "2", explanation: "Emulsion test = lipid." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "Which statement about water is FALSE?", options: ["Water is a polar molecule", "Water is less dense as ice than as liquid", "Water has low specific heat capacity", "Water is a good solvent"], answer: "2", explanation: "Water has HIGH specific heat." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "easy", stem: "List the properties of water and state the importance of each.", answer: "1) Cohesion — water sticks to water → water rises in xylem\n2) Adhesion — water sticks to other surfaces → capillary action\n3) High surface tension — insects walk on water\n4) High specific heat — stabilizes temperature\n5) High latent heat of vaporization — sweating cools\n6) Universal solvent — dissolves most substances\n7) Ice floats — life survives under frozen lakes", explanation: "Know at least five." },
    { id: "q102", type: "short", difficulty: "easy", stem: "Why is water considered a biochemical molecule?", answer: "• It is the MAIN component of all living cells (~70%)\n• It is the SOLVENT for all metabolic reactions\n• It is a REACTANT in photosynthesis and respiration\n• It TRANSPORTS substances (blood plasma, xylem sap)\n• It REGULATES temperature (sweating, transpiration)\n• It provides HABITAT for aquatic organisms", explanation: "Water is essential for all life." },
    { id: "q103", type: "short", difficulty: "easy", stem: "State the main functions of Na⁺ and K⁺ in the body.", answer: "Na⁺ (sodium):\n• Nerve impulses\n• Water balance (outside cells)\n• Muscle contraction\n\nK⁺ (potassium):\n• Nerve impulses\n• Heart rhythm\n• Muscle contraction (inside cells)\n\nThey work together — Na⁺ is OUTSIDE cells; K⁺ is INSIDE cells.", explanation: "Na = outside; K = inside." },
    { id: "q104", type: "short", difficulty: "easy", stem: "State the main functions of Ca²⁺ and Fe.", answer: "Ca²⁺ (calcium):\n• Bones and teeth\n• Blood clotting\n• Muscle contraction\n\nFe (iron):\n• Central atom in HEMOGLOBIN (carries oxygen in blood)\n• Also in myoglobin (muscle)\n• Deficiency → anemia", explanation: "Ca = bones; Fe = hemoglobin." },
    { id: "q105", type: "short", difficulty: "medium", stem: "List the three classes of carbohydrates with examples.", answer: "1) MONOSACCHARIDES (1 sugar):\n• Glucose, fructose, galactose\n\n2) DISACCHARIDES (2 sugars):\n• Maltose (glucose+glucose)\n• Sucrose (glucose+fructose)\n• Lactose (glucose+galactose)\n\n3) POLYSACCHARIDES (many sugars):\n• Starch (plant storage)\n• Glycogen (animal storage)\n• Cellulose (plant cell wall)\n• Chitin (fungi, insects)", explanation: "Mono, di, poly." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Describe the Benedict's test for reducing sugars.", answer: "1) Add Benedict's solution to food sample\n2) Heat in water bath for 5 minutes\n3) POSITIVE = brick-red precipitate\n4) Detects: glucose, fructose, maltose\n\nNote: Sucrose is NON-reducing → Benedict's negative.", explanation: "Brick-red = reducing sugar." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Describe the iodine test for starch.", answer: "1) Add a few drops of iodine solution to food sample\n2) No heating needed\n3) POSITIVE = BLUE-BLACK colour\n4) Detects: starch only", explanation: "Blue-black = starch." },
    { id: "q108", type: "short", difficulty: "medium", stem: "Describe the Biuret test for proteins.", answer: "1) Add Biuret solution (NaOH + CuSO₄) to food sample\n2) No heating needed\n3) POSITIVE = VIOLET/purple colour\n4) Detects: proteins and peptides (peptide bonds)", explanation: "Violet = protein." },
    { id: "q109", type: "short", difficulty: "medium", stem: "Describe the emulsion test for lipids.", answer: "1) Add food sample to test tube\n2) Add ethanol; shake (dissolves lipid)\n3) Pour into water\n4) POSITIVE = MILKY WHITE emulsion forms\n5) Detects: fats and oils", explanation: "Milky white = lipid." },
    { id: "q110", type: "short", difficulty: "medium", stem: "List the main functions of lipids.", answer: "• Energy storage (9 kcal/g — more than carbs)\n• Insulation (prevents heat loss)\n• Protection (cushions organs)\n• Cell membrane (phospholipid bilayer)\n• Hormones (steroid hormones)\n• Vitamin absorption (A, D, E, K)\n• Waterproofing (skin oils, leaf cuticle)", explanation: "Know at least five." },
    { id: "q111", type: "short", difficulty: "medium", stem: "Draw/describe the general structure of an amino acid.", answer: "A central carbon is bonded to:\n1) AMINO group (NH₂)\n2) CARBOXYL group (COOH)\n3) HYDROGEN atom (H)\n4) R GROUP (side chain)\n\nThe R GROUP differs in each of the 20 amino acids and determines its properties.\n\nFormula: NH₂–CHR–COOH", explanation: "NH₂, COOH, H, R." },
    { id: "q112", type: "short", difficulty: "medium", stem: "Explain how a peptide bond forms.", answer: "A PEPTIDE BOND forms between the AMINO group (NH₂) of one amino acid and the CARBOXYL group (COOH) of the next amino acid.\n\nREACTION: CONDENSATION — one molecule of WATER is removed.\n\n• 2 amino acids → dipeptide + H₂O\n• Many amino acids → polypeptide → protein\n\nBREAKING the bond requires HYDROLYSIS (adding water).", explanation: "Condensation removes water." },
    { id: "q113", type: "short", difficulty: "medium", stem: "List the main functions of proteins.", answer: "• Enzymes (catalysts)\n• Structural (collagen, keratin)\n• Transport (hemoglobin)\n• Hormones (insulin, growth hormone)\n• Antibodies (immunity)\n• Muscle contraction (actin, myosin)\n• Storage (casein, ovalbumin)\n• Receptors (cell membrane)", explanation: "Know at least five." },
    { id: "q114", type: "short", difficulty: "medium", stem: "Compare DNA and RNA in a table.", answer: "| Feature | DNA | RNA |\n|---------|-----|-----|\n| Full name | Deoxyribonucleic acid | Ribonucleic acid |\n| Sugar | Deoxyribose | Ribose |\n| Strands | Double helix | Single strand |\n| Bases | A, T, G, C | A, U, G, C |\n| Function | Stores genetic info | Makes proteins |\n| Location | Nucleus | Nucleus + cytoplasm |\n| Stability | Stable | Less stable |", explanation: "Sugar, strands, bases, function." },
    { id: "q115", type: "short", difficulty: "hard", stem: "Describe the structure of DNA.", answer: "• Shape: DOUBLE HELIX (twisted ladder)\n• Discovered by Watson & Crick (1953)\n• Sides of ladder = sugar-phosphate backbone\n• Rungs of ladder = base pairs (A-T, G-C)\n• Bases joined by HYDROGEN BONDS\n• A-T: 2 hydrogen bonds; G-C: 3 hydrogen bonds\n• Two strands are ANTIPARALLEL (run in opposite directions)\n• Sugar = deoxyribose", explanation: "Double helix, A-T, G-C." },
    { id: "q116", type: "short", difficulty: "hard", stem: "List the three types of RNA and their functions.", answer: "1) mRNA (messenger RNA) — carries genetic message from DNA (nucleus) to ribosome\n2) tRNA (transfer RNA) — brings amino acids to ribosome\n3) rRNA (ribosomal RNA) — part of the ribosome (site of protein synthesis)", explanation: "mRNA, tRNA, rRNA." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Explain the role of iron, iodine, and calcium in human health.", answer: "IRON (Fe):\n• Central atom in hemoglobin → carries O₂ in blood\n• Deficiency → anemia (fatigue, pale skin)\n\nIODINE (I):\n• Needed for thyroid hormones (thyroxine)\n• Deficiency → goiter (swollen thyroid), cretinism in children\n\nCALCIUM (Ca):\n• Bones and teeth (99% of body Ca)\n• Blood clotting, muscle contraction, nerve function\n• Deficiency → rickets in children, osteoporosis in adults", explanation: "Fe = hemoglobin; I = thyroid; Ca = bones." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Why is cellulose important in the human diet even though we cannot digest it?", answer: "CELLULOSE is a polysaccharide in plant cell walls. Humans cannot digest cellulose because we lack the enzyme cellulase.\n\nHowever, cellulose is important as DIETARY FIBER (roughage):\n1) Adds BULK to food → helps food move through the gut\n2) Prevents CONSTIPATION\n3) Reduces risk of colon cancer\n4) Helps control blood sugar and cholesterol\n5) Feeds beneficial gut bacteria", explanation: "Cellulose = fiber for digestion." },
    { id: "q119", type: "short", difficulty: "hard", stem: "A food sample is tested. It gives a brick-red colour with Benedict's, violet with Biuret, and a milky white emulsion with the emulsion test. What does it contain?", answer: "The sample contains:\n1) BENEDICT'S → brick-red = REDUCING SUGAR (e.g., glucose, fructose, maltose)\n2) BIURET → violet = PROTEIN\n3) EMULSION → milky white = LIPID (fat/oil)\n\nThe sample is a mixed food — e.g., a food like milk (contains lactose = reducing sugar, casein = protein, butterfat = lipid).", explanation: "Reducing sugar + protein + lipid." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Explain how a protein is denatured and why this matters in cooking.", answer: "DENATURATION = loss of a protein's shape (3D structure) due to:\n• HIGH TEMPERATURE (heat)\n• EXTREME pH (acid or base)\n• Heavy metals\n• Organic solvents\n\nWhen denatured, the protein loses its function because shape = function (e.g., enzymes stop working).\n\nCOOKING examples:\n• Boiling an egg → egg white changes from clear liquid to white solid (albumin denatured)\n• Frying meat → browns and firms up\n• Curdling milk (adding acid) → casein denatures\n\nIn digestion, stomach acid denatures dietary proteins so enzymes can break them down.", explanation: "Heat/pH changes shape → function lost." },
  ],
};