import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 GENERAL SCIENCE — UNIT 4
// HUMAN BODY SYSTEMS AND HEALTH
// Source: AAEB Grade 8 General Science Student Textbook (pp. 74–126)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8ScienceCh4: Chapter = {
  id: "ch4",
  number: 4,
  title: "Human Body Systems and Health",
  titleAm: "የሰው ልጅ የሰውነት ሥርዓቶች እና ጤና",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. Integumentary System — The Skin System",
      titleAm: "የቆዳ ሥርዓት",
      body:
        "Banchi, the integumentary system is the body's outer barrier. It includes the SKIN, HAIR, NAILS, and GLANDS. The skin is the LARGEST organ — it covers about 1.5–2 m² and weighs about 15% of body weight.",
      bodyAm:
        "ባንቺ፣ የቆዳ ሥርዓት የሰውነት ውጫዊ ጋሻ ነው። ቆዳን፣ ፀጉርን፣ ጥፍርን እና እጢዎችን ያካትታል። ቆዳ ትልቁ አካል ነው።",
      children: [
        {
          id: "n1-1",
          title: "Three layers of the skin",
          titleAm: "ሦስቱ የቆዳ ንጣፎች",
          body:
            "1) EPIDERMIS (upper layer) — outer layer made of DEAD cells. Protects from water loss, UV light, and microorganisms.\n" +
            "2) DERMIS (middle layer) — contains blood vessels (for thermoregulation), lymph vessels, sweat glands, sensory receptors, and hair follicles.\n" +
            "3) HYPODERMIS (lower layer) — contains FAT tissue for energy storage and insulation.",
          bodyAm:
            "1) ኤፒደርሚስ (የላይኛው ንጣፍ) — ከሞቱ ሴሎች የተሠራ። ከውሃ መጥፋት፣ ከUV ብርሃን እና ከተህዋሲያን ይከላከላል።\n2) ደርሚስ (መካከለኛው) — የደም ሥሮች፣ የላብ እጢዎች፣ የስሜት ተቀባዮች።\n3) ሃይፖደርሚስ (ታችኛው) — ስብ ሕብረ ሕዋስ ለጉልበት ማከማቻና ለመከላከያ።",
        },
        {
          id: "n1-2",
          title: "Hair and nails",
          titleAm: "ፀጉር እና ጥፍር",
          body:
            "HAIR comes from follicles — 3 layers:\n" +
            "• Medulla — deepest layer (only in thick hair)\n" +
            "• Cortex — middle layer (color, strength, texture)\n" +
            "• Cuticle — outer layer (thin, colorless, protects cortex)\n\n" +
            "NAILS protect the tips of fingers and toes.",
          bodyAm:
            "ፀጉር ከቀበቶዎች ይወጣል — 3 ንጣፎች፡\n• ሜዱላ — በጣም ጥልቅ\n• ኮርቴክስ — መካከለኛ (ቀለም፣ ጥንካሬ)\n• ኩቲክል — ውጫዊ\nጥፍር የጣት ጫፎችን ይከላከላል።",
        },
        {
          id: "n1-3",
          title: "Four exocrine glands",
          titleAm: "አራቱ ኤክሶክራይን እጢዎች",
          body:
            "1) Sudoriferous (sweat) glands — release sweat to cool the body.\n" +
            "2) Sebaceous (oil) glands — release oil into hair follicles to lubricate hair.\n" +
            "3) Ceruminous glands — in the ear canal; produce EAR WAX (cerumen).\n" +
            "4) Mammary glands — in females; produce breast milk.",
          bodyAm:
            "1) ሱዶሪፈረስ (ላብ) — ሰውነትን ለማቀዝቀዝ።\n2) ሴባሲየስ (ዘይት) — ፀጉርን ለማቅለጥ።\n3) ሴሩሚነስ — የጆሮ ሰም ያመነጫል።\n4) ማሚላሪ — ጡት ወተት ያመነጫል።",
        },
        {
          id: "n1-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: EPIDERMIS = outer, DEAD cells. DERMIS = middle, LIVE (blood vessels, glands). HYPODERMIS = inner, FAT. Students often swap epidermis and hypodermis.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ኤፒደርሚስ = ውጫዊ፣ ሞቱ ሴሎች። ደርሚስ = መካከለኛ፣ ሕያው። ሃይፖደርሚስ = ውስጣዊ፣ ስብ።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Muscular System — Movement and More",
      titleAm: "የጡንቻ ሥርዓት",
      body:
        "Banchi, muscles are tissues made of cells called MUSCLE FIBERS. Three types: skeletal, smooth, and cardiac.",
      bodyAm:
        "ባንቺ፣ ጡንቻዎች የጡንቻ ፋይበር ከሚባሉ ሴሎች የተሠሩ ሕብረ ሕዋሶች ናቸው። ሦስት ዓይነቶች፡ የአጥንት፣ ለስላሳ እና የልብ።",
      children: [
        {
          id: "n2-1",
          title: "Three types of muscles",
          titleAm: "ሦስቱ የጡንቻ ዓይነቶች",
          body:
            "1) SKELETAL muscle — attached to bones. VOLUNTARY (you control it). Chewing, talking, walking.\n" +
            "2) SMOOTH muscle — lines inside organs (stomach, blood vessels, airways). INVOLUNTARY (you cannot control it).\n" +
            "3) CARDIAC muscle — ONLY in the heart. INVOLUNTARY and AUTO-RHYTHMIC (contracts on its own).",
          bodyAm:
            "1) የአጥንት ጡንቻ — ከአጥንት ጋር ተጣብቋል። በፈቃድ ቁጥጥር ይደረጋል።\n2) ለስላሳ ጡንቻ — በአካል ውስጥ ይገኛል። በፈቃድ አይቆጣጠርም።\n3) የልብ ጡንቻ — በልብ ውስጥ ብቻ። ራሱን ይገዛል።",
        },
        {
          id: "n2-2",
          title: "Four properties of muscle cells",
          titleAm: "አራቱ የጡንቻ ሴል ባህሪያት",
          body:
            "1) Contractility — ability to forcefully SHORTEN.\n" +
            "2) Extensibility — ability to be STRETCHED.\n" +
            "3) Excitability — ability to RESPOND to stimuli.\n" +
            "4) Elasticity — ability to RECOVER shape after being stretched.",
          bodyAm:
            "1) መቀነስ — በኃይል መቀነስ።\n2) መለጠጥ — መለጠጥ።\n3) መቀስቀስ — ለተቀስቃሽ ምላሽ መስጠት።\n4) መለጠጥ ተመልሶ መመለስ።",
        },
        {
          id: "n2-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: SKELETAL = voluntary (you control it). SMOOTH & CARDIAC = involuntary (automatic). Also, cardiac muscle is AUTO-RHYTHMIC — it beats on its own without a signal from the brain.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ የአጥንት ጡንቻ = በፈቃድ። ለስላሳና የልብ = በፈቃድ ያልሆነ።",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Skeletal System — Bones and Joints",
      titleAm: "የአጥንት ሥርዓት",
      body:
        "Banchi, an adult human has 206 BONES. Bones are LIVING organs — they contain cells, blood vessels, and nerves.",
      bodyAm:
        "ባንቺ፣ አዋቂ ሰው 206 አጥንቶች አሉት። አጥንቶች ሕያዋን አካላት ናቸው።",
      children: [
        {
          id: "n3-1",
          title: "Four types of bones by shape",
          titleAm: "አራቱ የአጥንት ዓይነቶች በቅርጽ",
          body:
            "1) LONG bones — hard, tubular, contain yellow marrow. Examples: arm, leg, finger, thigh.\n" +
            "2) SHORT bones — compact, no marrow. Examples: wrist, finger, toes, ankle.\n" +
            "3) FLAT bones — thin, flat, curved, no cavity. Examples: ribs, sternum, cranial bones, scapula.\n" +
            "4) IRREGULAR bones — thin membranes with nerves and blood vessels. Examples: hip bones, facial bones, vertebrae.",
          bodyAm:
            "1) ረዣዥም አጥንቶች — ቢጫ ማሮ አላቸው። ክንድ፣ እግር፣ ጣት።\n2) አጭር አጥንቶች — ማሮ የለም። አንጓ፣ ጣት።\n3) ጠፍጣፋ አጥንቶች — ስስ፣ ጠፍጣፋ። የጎድን አጥንቶች፣ ደረት አጥንት።\n4) መደበኛ ያልሆኑ — የዳሌ አጥንቶች፣ የፊት አጥንቶች።",
        },
        {
          id: "n3-2",
          title: "Two major skeletal divisions",
          titleAm: "ሁለቱ ዋና የአጥንት ክፍሎች",
          body:
            "1) AXIAL skeleton — the central axis:\n" +
            "  • Skull (cranium, face, ear bones)\n" +
            "  • Hyoid (U-shaped bone in neck)\n" +
            "  • Vertebral column (spine)\n" +
            "  • Thoracic cage (ribs + sternum)\n\n" +
            "2) APPENDICULAR skeleton — limbs and their attachments:\n" +
            "  • Pectoral girdle (shoulder: clavicle + scapula)\n" +
            "  • Upper limbs (arm, forearm, hand)\n" +
            "  • Pelvic girdle (hip bones)\n" +
            "  • Lower limbs (thigh, leg, foot)",
          bodyAm:
            "1) አክሲያል — ማዕከላዊ ዘንግ፡ የራስ ቅል፣ ሃዮይድ፣ የጀርባ አጥንት፣ የደረት ቅርፊት።\n2) አፔንዲኩላር — እጆችና እግሮች፡ የትከሻ ቀበቶ፣ የላይኛው እጅ፣ የዳሌ ቀበቶ፣ የታችኛው እግር።",
        },
        {
          id: "n3-3",
          title: "Connective tissues",
          titleAm: "አገናኝ ሕብረ ሕዋሶች",
          body:
            "• Cartilage — flexible support (nose, trachea, ears).\n" +
            "• Tendon — connects MUSCLE to BONE.\n" +
            "• Ligament — connects BONE to BONE at joints.\n" +
            "• Joint — site where two or more bones meet.",
          bodyAm:
            "• ካርቲሌጅ — ተጣጣፊ ድጋፍ (አፍንጫ፣ የመተንፈሻ ቧንቧ፣ ጆሮ)።\n• ጅማት (ቴንደን) — ጡንቻን ከአጥንት ጋር ያገናኛል።\n• ጅማት (ሊጋመንት) — አጥንትን ከአጥንት ጋር ያገናኛል።\n• መገጣጠሚያ (ጆይንት) — ሁለት ወይም ከዚያ በላይ አጥንቶች የሚገናኙበት ቦታ።",
        },
        {
          id: "n3-4",
          title: "Two types of joints",
          titleAm: "ሁለቱ የመገጣጠሚያ ዓይነቶች",
          body:
            "1) Immovable joints — fixed, don't move. Example: skull.\n" +
            "2) Movable joints — can move. Two examples:\n" +
            "   • Hinge joint — moves back-and-forth in ONE direction (elbow, knee, fingers).\n" +
            "   • Ball-and-socket joint — moves in ALL directions (shoulder, hip).",
          bodyAm:
            "1) የማይንቀሳቀስ — በቦታው ተስተካክሏል። ምሳሌ፡ የራስ ቅል።\n2) የሚንቀሳቀስ — ሁለት ምሳሌዎች፡\n• ሂንጅ መገጣጠሚያ — ወደ አንድ አቅጣጫ (ክርን፣ ጉልበት)።\n• ኳስና ጉድጓድ — ወደ ሁሉም አቅጣጫ (ትከሻ፣ ዳሌ)።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: TENDON connects MUSCLE to BONE. LIGAMENT connects BONE to BONE. Students swap them. Memory trick: 'Tendons TIE muscle to bone. Ligaments LINK bone to bone.'",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ጅማት (ቴንደን) = ጡንቻ → አጥንት። ሊጋመንት = አጥንት → አጥንት።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Digestive System — Breaking Down Food",
      titleAm: "የምግብ መፍጫ ሥርዓት",
      body:
        "Banchi, digestion is the process in which large, complex, insoluble food molecules are changed into smaller, simpler, soluble forms that cells can use.",
      bodyAm:
        "ባንቺ፣ ምግብ መፍጨት ማለት ትላልቅ፣ ውስብስብ፣ የማይሟሟ ምግብ ሞለኪዩሎች ወደ ትንንሽ፣ ቀላል፣ የሚሟሟ ቅርጾች የሚቀየሩበት ሂደት ነው።",
      children: [
        {
          id: "n4-1",
          title: "Two types of digestion",
          titleAm: "ሁለቱ የመፍጨት ዓይነቶች",
          body:
            "1) PHYSICAL (mechanical) — chewing and grinding food with teeth.\n" +
            "2) CHEMICAL — breaking down food with digestive enzymes and acids.",
          bodyAm:
            "1) አካላዊ — በጥርስ መንከስ።\n2) ኬሚካላዊ — በኢንዛይሞች እና አሲዶች መፍጨት።",
        },
        {
          id: "n4-2",
          title: "Alimentary canal (mouth to anus)",
          titleAm: "የምግብ መጓጓዣ ቱቦ",
          body:
            "The alimentary canal = mouth → esophagus → stomach → small intestine → large intestine → anus.\n\n" +
            "Associated glands: salivary glands, liver, pancreas.",
          bodyAm:
            "የምግብ ቱቦ = አፍ → የምግብ ቧንቧ → ሆድ → ትንሽ አንጀት → ትልቅ አንጀት → ፊንጢጣ።",
        },
        {
          id: "n4-3",
          title: "Types of teeth — dental formula",
          titleAm: "የጥርስ ዓይነቶች",
          body:
            "Four types:\n" +
            "• Incisors (I) — cutting, chisel-shaped. 2 per jaw (in each half).\n" +
            "• Canines (C) — tearing, pointed. 1 per jaw.\n" +
            "• Premolars (P) — grinding. 2 per jaw.\n" +
            "• Molars (M) — crushing. 3 per jaw.\n\n" +
            "Dental formula: I = 2/2, C = 1/1, P = 2/2, M = 3/3 → 32 teeth total in adults.",
          bodyAm:
            "አራት ዓይነቶች፡ ኢንሳይዘርስ (መቁረጥ)፣ ካኒንስ (መቅደድ)፣ ፕሪሞላርስ (መፍጨት)፣ ሞላርስ (መፍጨት)።\nየጥርስ ቀመር፡ I = 2/2, C = 1/1, P = 2/2, M = 3/3 → 32 ጥርሶች።",
        },
        {
          id: "n4-4",
          title: "Key digestive organs",
          titleAm: "ዋና የመፍጫ አካላት",
          body:
            "• MOUTH — both physical and chemical digestion begin here.\n" +
            "• STOMACH — produces pepsin (for protein) and HCl (acid).\n" +
            "• SMALL INTESTINE — first part = duodenum; receives bile + pancreatic enzymes. Villi absorb nutrients.\n" +
            "• LARGE INTESTINE — absorbs water; forms feces.\n" +
            "• LIVER — makes bile; GALL BLADDER stores it.",
          bodyAm:
            "• አፍ — ሁለቱም ዓይነት መፍጨት ይጀመራሉ።\n• ሆድ — ፔፕሲን እና HCl ያመነጫል።\n• ትንሽ አንጀት — ቪላይ አለው።\n• ትልቅ አንጀት — ውሃ ይስባል።\n• ጉበት — ሐምራዊ ፈሳሽ (bile) ያመነጫል።",
        },
        {
          id: "n4-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: BILE is made by the LIVER but STORED in the GALL BLADDER. Two jobs of bile: (1) neutralize stomach acid, (2) emulsify fats. Also: adult has 32 teeth, not 28.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ bile በጉበት ይሠራል ግን በሐምራዊ ፊኛ ይከማቻል። አዋቂ 32 ጥርሶች አሉት።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Respiratory System — Breathing and Gas Exchange",
      titleAm: "የመተንፈሻ ሥርዓት",
      body:
        "Banchi, respiration has TWO parts: BREATHING (inhale + exhale) and CELLULAR RESPIRATION (using oxygen to release energy from food).",
      bodyAm:
        "ባንቺ፣ መተንፈስ ሁለት ክፍሎች አሉት፡ መተንፈስ (መተንፈስ + መተንፈስ) እና ሴሉላር ሪስፓይሬሽን (ኦክሲጅን ተጠቅሞ ከምግብ ጉልበት ማውጣት)።",
      children: [
        {
          id: "n5-1",
          title: "The breathing pathway",
          titleAm: "የመተንፈሻ መንገድ",
          body:
            "Nose → Pharynx → Larynx → Trachea → Bronchi → Bronchioles → Alveoli (in the lungs)\n\n" +
            "• ALVEOLI = tiny air sacs where gas exchange happens (O₂ in, CO₂ out).\n" +
            "• TRACHEA has C-shaped cartilage rings to hold it open.\n" +
            "• DIAPHRAGM and intercostal muscles control lung shape.",
          bodyAm:
            "አፍንጫ → ፋሪንክስ → ላሪንክስ → ትራኪያ → ብሮንካይ → ብሮንኪዮልስ → አልቪዮላይ\n• አልቪዮላይ = የጋዝ ልውውጥ የሚከሰትበት ትንሽ የአየር ከረጢት።",
        },
        {
          id: "n5-2",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: alveoli are in the LUNGS — not the trachea. And the diaphragm is the MAIN muscle for breathing (not the heart). Also, breathing through the NOSE is better than through the mouth because the nose filters, warms, and moistens air.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ አልቪዮላይ በሳንቆች ውስጥ ናቸው። ዳያፍራም ዋናው የመተንፈሻ ጡንቻ ነው። በአፍንጫ መተንፈስ ከአፍ ይሻላል።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Circulatory System — Heart, Blood, and Vessels",
      titleAm: "የደም ዝውውር ሥርዓት",
      body:
        "Banchi, the circulatory system has THREE elements: HEART, BLOOD VESSELS, and BLOOD. It transports air, food, minerals, vitamins, waste, and other substances.",
      bodyAm:
        "ባንቺ፣ የደም ዝውውር ሥርዓት ሦስት አካላት አሉት፡ ልብ፣ የደም ሥሮች እና ደም።",
      children: [
        {
          id: "n6-1",
          title: "Two circulations",
          titleAm: "ሁለቱ ዝውውሮች",
          body:
            "1) PULMONARY circulation — blood flows between HEART and LUNGS only.\n" +
            "2) SYSTEMIC circulation — blood flows between HEART and the REST OF THE BODY.",
          bodyAm:
            "1) የሳንቆች ዝውውር — በልብ እና በሳንቆች መካከል ብቻ።\n2) ሲስተሚክ ዝውውር — በልብ እና በቀሪ ሰውነት መካከል።",
        },
        {
          id: "n6-2",
          title: "The heart — 4 chambers",
          titleAm: "ልብ — 4 ክፍሎች",
          body:
            "• Right atrium — receives deoxygenated blood from body.\n" +
            "• Right ventricle — pumps deoxygenated blood to lungs.\n" +
            "• Left atrium — receives oxygenated blood from lungs.\n" +
            "• Left ventricle — pumps oxygenated blood to body. Has THICKEST wall.\n\n" +
            "VALVES prevent backflow of blood.",
          bodyAm:
            "• ቀኝ አትሪየም — ከሰውነት የደረሰ ደም ይቀበላል።\n• ቀኝ ቬንትሪክል — ወደ ሳንቆች ይልካል።\n• ግራ አትሪየም — ከሳንቆች ኦክሲጅን ያለው ደም ይቀበላል።\n• ግራ ቬንትሪክል — ወደ ሰውነት ይልካል። ወፍራም ግድግዳ አለው።",
        },
        {
          id: "n6-3",
          title: "Three types of blood vessels",
          titleAm: "ሦስቱ የደም ሥር ዓይነቶች",
          body:
            "1) ARTERY — carries blood AWAY from the heart. Thick, elastic wall. Carries OXYGENATED blood — EXCEPT pulmonary artery and umbilical artery.\n" +
            "2) VEIN — returns blood TO the heart. Carries DEOXYGENATED blood — EXCEPT pulmonary vein and umbilical vein.\n" +
            "3) CAPILLARY — connects artery and vein; site of exchange with tissues.",
          bodyAm:
            "1) አርተሪ — ከልብ ይወስዳል። ወፍራም ግድግዳ። ኦክሲጅን ያለው ደም — ከፐልሞናሪ አርተሪ እና ከኡምቢሊካል አርተሪ በስተቀር።\n2) ቬይን — ወደ ልብ ይመልሳል። ኦክሲጅን የሌለው ደም — ከፐልሞናሪ ቬይን እና ከኡምቢሊካል ቬይን በስተቀር።\n3) ካፒላሪ — አርተሪንና ቬይንን ያገናኛል።",
        },
        {
          id: "n6-4",
          title: "Blood — 45% solid, 55% plasma",
          titleAm: "ደም",
          body:
            "Blood = 55% PLASMA (90% water + 10% dissolved substances) + 45% SOLID cells.\n\n" +
            "Three blood cell types:\n" +
            "• Red blood cells (erythrocytes) — disc-shaped, no nucleus, carry O₂ using HEMOGLOBIN.\n" +
            "• White blood cells (leucocytes) — colorless, irregular, nucleated, fight pathogens.\n" +
            "• Platelets (thrombocytes) — colorless, small, help BLOOD CLOTTING.",
          bodyAm:
            "ደም = 55% ፕላዝማ + 45% ሕያዋን ሴሎች።\n• ቀይ የደም ሴሎች — ኦክሲጅን የሚሸከሙ (ሄሞግሎቢን)።\n• ነጭ የደም ሴሎች — ተህዋሲያንን ይዋጋሉ።\n• ፕሌትሌትስ — ደም እንዲሠራ ያግዛሉ።",
        },
        {
          id: "n6-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, HUGE trap: Pulmonary ARTERY carries DEOXYGENATED blood (exception!). Pulmonary VEIN carries OXYGENATED blood (exception!). This is opposite to normal arteries/veins. Also, the LEFT ventricle has the thickest wall because it pumps blood to the whole body.",
          bodyAm:
            "ባንቺ፣ ትልቅ ወጥመድ፡ ፐልሞናሪ አርተሪ ኦክሲጅን የሌለው ደም ይይዛል። ፐልሞናሪ ቬይን ኦክሲጅን ያለው ደም ይይዛል።",
        },
      ],
    },

    {
      id: "n7",
      title: "7. Reproductive System",
      titleAm: "የመራቢያ ሥርዓት",
      body:
        "Banchi, the reproductive system produces reproductive cells. Male = sperm. Female = egg (ovum). They unite during sexual intercourse to produce offspring.",
      bodyAm:
        "ባንቺ፣ የመራቢያ ሥርዓት የመራቢያ ሴሎችን ያመነጫል። ወንድ = የዘር ፈሳሽ። ሴት = እንቁላል።",
      children: [
        {
          id: "n7-1",
          title: "Male reproductive organs",
          titleAm: "የወንድ የመራቢያ አካላት",
          body:
            "• Testes — produce sperm and the hormone TESTOSTERONE.\n" +
            "• Penis — for sexual intercourse.\n" +
            "• Scrotum — sac that holds the testes.\n" +
            "• Epididymis — stores sperm for maturation.\n" +
            "• Vas deferens — tube that carries sperm to the urethra.",
          bodyAm:
            "• ፍሬ (ቴስቲስ) — የዘር ፈሳሽ እና ቴስቶስትሮን ያመነጫል።\n• ቁላ — ለወሲብ።\n• ስክሮተም — ፍሬን ይይዛል።\n• ኤፒዲዲሚስ — የዘር ፈሳሽ ያከማቻል።",
        },
        {
          id: "n7-2",
          title: "Female reproductive organs",
          titleAm: "የሴት የመራቢያ አካላት",
          body:
            "• Ovaries — produce eggs (ova) and the hormones ESTROGEN and PROGESTERONE.\n" +
            "• Fallopian tube (oviduct) — site of FERTILIZATION.\n" +
            "• Uterus (womb) — site of PREGNANCY.\n" +
            "• Cervix — opening of the uterus.\n" +
            "• Vagina — birth canal.\n" +
            "• Vulva — external genital.",
          bodyAm:
            "• ኦቫሪ — እንቁላል እና ኢስትሮጅን/ፕሮጄስትሮን ያመነጫል።\n• ፋሎፒያን ቲዩብ — የመራባት ቦታ።\n• ማሕፀን — የእርግዝና ቦታ።\n• ሴርቪክስ — የማሕፀን መግቢያ።\n• ቫጂና — የወሊድ መንገድ።",
        },
        {
          id: "n7-3",
          title: "Menstruation cycle",
          titleAm: "የወር አበባ ዑደት",
          body:
            "• About every 28 days.\n" +
            "• OVULATION = release of egg from ovary (around day 14).\n" +
            "• If no pregnancy, the uterus lining is discharged through the vagina = MENSTRUATION.\n" +
            "• MENOPAUSE = stopping of ovulation and menstruation (~age 50).",
          bodyAm:
            "• በየ28 ቀናት አካባቢ።\n• ኦቩሌሽን = እንቁላል ከኦቫሪ መለቀቅ (ቀን 14 አካባቢ)።\n• እርግዝና ካልተፈጠረ የማሕፀን ሽፋን በወር አበባ ይወጣል።\n• ማኖፖዝ = ~50 ዓመት ላይ የወር አበባ ማቆም።",
        },
        {
          id: "n7-4",
          title: "Sexually Transmitted Diseases (STDs)",
          titleAm: "በወሲብ የሚተላለፉ በሽታዎች",
          body:
            "• HIV/AIDS — caused by Human Immunodeficiency Virus. Attacks T-cells of the immune system.\n" +
            "• Gonorrhea — caused by Neisseria gonorrhea bacteria.\n" +
            "• Syphilis — caused by Treponema pallidum bacteria.\n" +
            "• Chancroid — caused by Hemophilus ducreyi bacteria.\n\n" +
            "Prevention — ABC rule:\n" +
            "A = Abstain from sex\n" +
            "B = Be faithful to one partner\n" +
            "C = Condomise (use condoms)",
          bodyAm:
            "• HIV/AIDS — በሰው ኢሚዩኖዲፊሸንሲ ቫይረስ። የቲ-ሴሎችን ያጠቃል።\n• ጨብጦ (ጎኖሪያ) — በኒሴሪያ ጎኖሪያ ባክቴሪያ።\n• ቂጥኝ (ሲፊሊስ) — በትሬፖኔማ ፓሊደም።\n• ሻንክሮይድ — በሄሞፊለስ ዱክሬይ።\nABC ሕግ፡ A = ከወሲብ መቆጠብ. B = ለአንድ አጋር ታማኝ መሆን. C = ኮንዶም መጠቀም።",
        },
        {
          id: "n7-5",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: Fertilization happens in the FALLOPIAN TUBE, not the uterus. Implantation and pregnancy happen in the UTERUS. Do not swap. Also, the first president of an independent country, and the ABC rule for STDs, are common exam questions.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ መራባት (fertilization) በፋሎፒያን ቲዩብ ይከሰታል። እርግዝና በማሕፀን ይከሰታል።",
        },
      ],
    },

    {
      id: "n8",
      title: "8. Exam Strategy — Unit 4",
      titleAm: "የፈተና ስልት — ክፍል 4",
      body:
        "Banchi, five quick checks before answering Unit 4 questions.",
      bodyAm:
        "ባንቺ፣ የክፍል 4 ጥያቄዎችን ከመመለስሽ በፊት አምስት ፈጣን ቼኮች።",
      children: [
        {
          id: "n8-1",
          title: "Check 1 — Which layer or which tissue?",
          titleAm: "ቼክ 1 — የትኛው ንጣፍ?",
          body:
            "Epidermis = outer. Dermis = middle. Hypodermis = inner (fat). Tendon = muscle to bone. Ligament = bone to bone.",
          bodyAm:
            "ኤፒደርሚስ = ውጫዊ. ደርሚስ = መካከለኛ. ሃይፖደርሚስ = ውስጣዊ. ጅማት = ጡንቻ → አጥንት. ሊጋመንት = አጥንት → አጥንት.",
        },
        {
          id: "n8-2",
          title: "Check 2 — Voluntary or involuntary?",
          titleAm: "ቼክ 2 — በፈቃድ ወይስ ያለ ፈቃድ?",
          body:
            "Skeletal muscle = voluntary. Smooth and cardiac = involuntary. Cardiac is auto-rhythmic.",
          bodyAm:
            "የአጥንት ጡንቻ = በፈቃድ. ለስላሳና የልብ = በፈቃድ ያልሆነ.",
        },
        {
          id: "n8-3",
          title: "Check 3 — Which chamber or vessel?",
          titleAm: "ቼክ 3 — የትኛው ክፍል?",
          body:
            "Left ventricle = thickest wall. Pulmonary artery = carries deoxygenated blood. Pulmonary vein = carries oxygenated blood.",
          bodyAm:
            "ግራ ቬንትሪክል = ወፍራም ግድግዳ. ፐልሞናሪ አርተሪ = ኦክሲጅን የሌለው ደም. ፐልሞናሪ ቬይን = ኦክሲጅን ያለው ደም.",
        },
        {
          id: "n8-4",
          title: "Check 4 — Fertilization vs pregnancy",
          titleAm: "ቼክ 4 — መራባት እና እርግዝና",
          body:
            "Fertilization = Fallopian tube. Pregnancy = Uterus.",
          bodyAm:
            "መራባት = ፋሎፒያን ቲዩብ. እርግዝና = ማሕፀን.",
        },
        {
          id: "n8-5",
          title: "Check 5 — Which STD?",
          titleAm: "ቼክ 5 — የትኛው STD?",
          body:
            "HIV = virus. Others (gonorrhea, syphilis, chancroid) = bacteria. ABC rule for prevention.",
          bodyAm:
            "HIV = ቫይረስ. ጎኖሪያ፣ ሲፊሊስ፣ ሻንክሮይድ = ባክቴሪያ. ABC ሕግ ለመከላከል.",
        },
      ],
    },
  ],

  // ============================================================
  // QUESTIONS — Batch 1: Q1–Q60
  // ============================================================
  questions: [
    // ---------- EASY MCQ (Q1–Q25) ----------
    {
      id: "q1",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the LARGEST organ of the human body?",
      options: ["Liver", "Skin", "Heart", "Brain"],
      answer: "1",
      explanation:
        "The skin is the body's largest organ — covers 1.5–2 m² and weighs about 15% of body weight.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "Which organs make up the integumentary system?",
      options: [
        "Skin, hair, nails, glands",
        "Skin, muscles, bones",
        "Stomach, liver, pancreas",
        "Heart, blood, vessels",
      ],
      answer: "0",
      explanation:
        "The integumentary system includes the SKIN, HAIR, NAILS, and GLANDS.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "How many layers does human skin have?",
      options: ["2", "3", "4", "5"],
      answer: "1",
      explanation:
        "Human skin has 3 layers: epidermis (outer), dermis (middle), hypodermis (inner).",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "The OUTER layer of the skin is called:",
      options: ["Dermis", "Hypodermis", "Epidermis", "Endodermis"],
      answer: "2",
      explanation:
        "The epidermis is the OUTER layer, made of dead cells.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "The MIDDLE layer of the skin is called:",
      options: ["Dermis", "Hypodermis", "Epidermis", "Endodermis"],
      answer: "0",
      explanation:
        "The dermis is the middle layer — contains blood vessels, glands, and sensory receptors.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "The INNER layer of the skin is called:",
      options: ["Dermis", "Hypodermis", "Epidermis", "Endodermis"],
      answer: "1",
      explanation:
        "The hypodermis is the inner layer — contains fat for energy storage and insulation.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "Which gland produces sweat?",
      options: ["Sebaceous", "Sudoriferous", "Ceruminous", "Mammary"],
      answer: "1",
      explanation:
        "Sudoriferous glands = SWEAT glands. They cool the body.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "Which gland produces ear wax?",
      options: ["Sebaceous", "Sudoriferous", "Ceruminous", "Mammary"],
      answer: "2",
      explanation:
        "Ceruminous glands produce EAR WAX (cerumen) in the ear canal.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "Which gland produces oil for the hair?",
      options: ["Sebaceous", "Sudoriferous", "Ceruminous", "Mammary"],
      answer: "0",
      explanation:
        "Sebaceous glands produce OIL that lubricates the hair.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "How many types of muscles are there in the human body?",
      options: ["1", "2", "3", "4"],
      answer: "2",
      explanation:
        "Three types: skeletal, smooth, and cardiac.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "Which muscle type is VOLUNTARY (you control it)?",
      options: ["Skeletal", "Smooth", "Cardiac", "All"],
      answer: "0",
      explanation:
        "Skeletal muscle is voluntary. Smooth and cardiac are involuntary.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "Which muscle type is found in the heart?",
      options: ["Skeletal", "Smooth", "Cardiac", "None"],
      answer: "2",
      explanation:
        "Cardiac muscle is found ONLY in the heart.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "How many bones does an adult human have?",
      options: ["126", "180", "206", "306"],
      answer: "2",
      explanation:
        "An adult human skeleton has 206 bones.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "Which type of bone is the femur (thigh bone)?",
      options: ["Long", "Short", "Flat", "Irregular"],
      answer: "0",
      explanation:
        "The femur is a LONG bone — hard, tubular, with yellow marrow.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "The ribs and sternum are examples of:",
      options: ["Long bones", "Short bones", "Flat bones", "Irregular bones"],
      answer: "2",
      explanation:
        "Ribs and sternum are FLAT bones — thin, flat, curved, no cavity.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "Which tissue connects MUSCLE to BONE?",
      options: ["Cartilage", "Tendon", "Ligament", "Joint"],
      answer: "1",
      explanation:
        "TENDON connects muscle to bone. LIGAMENT connects bone to bone.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "Which tissue connects BONE to BONE at joints?",
      options: ["Cartilage", "Tendon", "Ligament", "Muscle"],
      answer: "2",
      explanation:
        "LIGAMENT connects bone to bone.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "Which type of joint is in the SKULL?",
      options: ["Hinge", "Ball and socket", "Immovable", "Movable"],
      answer: "2",
      explanation:
        "Skull bones are connected by IMMOVABLE (fixed) joints.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "Where does digestion START?",
      options: ["Stomach", "Small intestine", "Mouth", "Esophagus"],
      answer: "2",
      explanation:
        "Digestion begins in the MOUTH, where both physical (chewing) and chemical (saliva) digestion begin.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "How many teeth does an adult human have?",
      options: ["20", "28", "32", "36"],
      answer: "2",
      explanation:
        "An adult has 32 teeth (including 4 wisdom teeth).",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "How many milk (baby) teeth does a child have?",
      options: ["16", "20", "24", "28"],
      answer: "1",
      explanation:
        "Children have 20 milk teeth, which are replaced by permanent teeth around age 6.",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "Which organ is the MAIN site for gas exchange in the lungs?",
      options: ["Bronchi", "Trachea", "Alveoli", "Larynx"],
      answer: "2",
      explanation:
        "ALVEOLI are tiny air sacs where oxygen enters blood and carbon dioxide leaves.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the correct pathway of air?",
      options: [
        "Nose → Pharynx → Larynx → Trachea → Bronchi → Alveoli",
        "Nose → Bronchi → Trachea → Lungs",
        "Mouth → Stomach → Lungs",
        "Nose → Alveoli → Trachea → Bronchi",
      ],
      answer: "0",
      explanation:
        "Air pathway: Nose → Pharynx → Larynx → Trachea → Bronchi → Bronchioles → Alveoli.",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "How many chambers does the human heart have?",
      options: ["2", "3", "4", "5"],
      answer: "2",
      explanation:
        "The human heart has 4 chambers: right atrium, right ventricle, left atrium, left ventricle.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "Which blood vessel carries blood AWAY from the heart?",
      options: ["Vein", "Artery", "Capillary", "Ventricle"],
      answer: "1",
      explanation:
        "ARTERY carries blood AWAY from the heart. VEIN returns blood TO the heart.",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Which layer of skin contains blood vessels for temperature control?",
      options: ["Epidermis", "Dermis", "Hypodermis", "Endodermis"],
      answer: "1",
      explanation:
        "The DERMIS contains blood vessels responsible for thermoregulation (temperature control).",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Which layer of skin stores fat?",
      options: ["Epidermis", "Dermis", "Hypodermis", "None"],
      answer: "2",
      explanation:
        "The HYPODERMIS (inner layer) contains fat tissue for energy storage and insulation.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT a function of the integumentary system?",
      options: [
        "Protection from environment",
        "Temperature regulation",
        "Producing vitamin D",
        "Pumping blood"],
      answer: "3",
      explanation:
        "Pumping blood is the heart's job (circulatory system). The skin protects, regulates temperature, produces vitamin D, senses, and maintains homeostasis.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "The three layers of a hair shaft from outer to inner are:",
      options: [
        "Cuticle, cortex, medulla",
        "Medulla, cortex, cuticle",
        "Cortex, cuticle, medulla",
        "Epidermis, dermis, hypodermis",
      ],
      answer: "0",
      explanation:
        "Outer to inner: CUTICLE (outer, protective) → CORTEX (middle, color) → MEDULLA (inner, thick hair only).",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Which muscle type is AUTO-RHYTHMIC?",
      options: ["Skeletal", "Smooth", "Cardiac", "Voluntary"],
      answer: "2",
      explanation:
        "CARDIAC muscle is auto-rhythmic — it contracts on its own without a brain signal.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Which property of muscles allows them to shorten?",
      options: ["Extensibility", "Elasticity", "Contractility", "Excitability"],
      answer: "2",
      explanation:
        "CONTRACTILITY = ability to forcefully SHORTEN.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "Which property of muscles allows them to be stretched?",
      options: ["Extensibility", "Elasticity", "Contractility", "Excitability"],
      answer: "0",
      explanation:
        "EXTENSIBILITY = ability to be STRETCHED.",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "Which type of joint allows movement in ALL directions?",
      options: ["Hinge joint", "Ball-and-socket joint", "Immovable joint", "Suture joint"],
      answer: "1",
      explanation:
        "BALL-AND-SOCKET joints (shoulder, hip) allow movement in every direction.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "Which type of joint is in the elbow and knee?",
      options: ["Ball-and-socket", "Hinge", "Immovable", "Pivot"],
      answer: "1",
      explanation:
        "HINGE joints allow movement in one direction (like a door hinge). Found in elbow, knee, fingers.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly lists an AXIAL skeleton bone?",
      options: ["Femur", "Humerus", "Skull", "Clavicle"],
      answer: "2",
      explanation:
        "Axial skeleton = skull, hyoid, vertebral column, thoracic cage. Femur, humerus, clavicle are appendicular.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT an appendicular skeleton bone?",
      options: ["Shoulder bone", "Hip bone", "Femur", "Vertebral column"],
      answer: "3",
      explanation:
        "The vertebral column is part of the AXIAL skeleton, not appendicular.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "The shoulder girdle is composed of:",
      options: [
        "Clavicle and scapula",
        "Humerus and radius",
        "Femur and tibia",
        "Ribs and sternum",
      ],
      answer: "0",
      explanation:
        "The shoulder (pectoral) girdle = CLAVICLE (collar bone) + SCAPULA (shoulder blade).",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly matches the type of teeth with its function?",
      options: [
        "Incisors — tearing",
        "Canines — cutting",
        "Molars — crushing/grinding",
        "Premolars — tearing",
      ],
      answer: "2",
      explanation:
        "Incisors = cutting. Canines = tearing. Premolars + Molars = crushing/grinding.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "The first section of the small intestine is called:",
      options: ["Ileum", "Jejunum", "Duodenum", "Cecum"],
      answer: "2",
      explanation:
        "The DUODENUM is the first part of the small intestine. It receives bile and pancreatic enzymes.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Where is bile made?",
      options: ["Pancreas", "Stomach", "Liver", "Gall bladder"],
      answer: "2",
      explanation:
        "Bile is MADE in the LIVER, then STORED in the gall bladder.",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "Where is bile stored?",
      options: ["Liver", "Pancreas", "Gall bladder", "Stomach"],
      answer: "2",
      explanation:
        "Bile is stored in the GALL BLADDER until needed for digestion.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "What are the two jobs of bile?",
      options: [
        "Neutralize stomach acid and emulsify fats",
        "Produce enzymes and absorb water",
        "Produce HCl and break down protein",
        "Absorb glucose and store vitamins",
      ],
      answer: "0",
      explanation:
        "Bile (1) neutralizes acid from the stomach, and (2) EMULSIFIES fats (breaks them into smaller droplets).",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "Which organ produces hydrochloric acid?",
      options: ["Liver", "Small intestine", "Stomach", "Pancreas"],
      answer: "2",
      explanation:
        "The STOMACH produces HCl (to kill bacteria and activate pepsin) and the enzyme pepsin (for protein digestion).",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the large intestine?",
      options: [
        "Produces digestive enzymes",
        "Absorbs water and forms feces",
        "Produces bile",
        "Absorbs most nutrients",
      ],
      answer: "1",
      explanation:
        "The large intestine ABSORBS WATER and forms feces. Most nutrients are absorbed in the small intestine.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "Which type of digestion happens in the mouth?",
      options: ["Only physical", "Only chemical", "Both physical and chemical", "Neither"],
      answer: "2",
      explanation:
        "In the mouth, BOTH physical (teeth grinding) and chemical (saliva enzymes) digestion happen.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "The trachea is held open by:",
      options: [
        "Bones",
        "Cartilage rings (C-shaped)",
        "Muscles",
        "Air pressure",
      ],
      answer: "1",
      explanation:
        "The trachea has C-SHAPED CARTILAGE rings that hold it open. They are incomplete so you can swallow food.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "Which chamber of the heart has the THICKEST wall?",
      options: ["Right atrium", "Left atrium", "Right ventricle", "Left ventricle"],
      answer: "3",
      explanation:
        "The LEFT VENTRICLE has the thickest wall because it pumps blood to the entire body.",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "Which blood vessel carries blood TOWARD the heart?",
      options: ["Artery", "Vein", "Capillary", "Ventricle"],
      answer: "1",
      explanation:
        "VEINS return blood TO the heart.",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "Which blood vessel carries OXYGENATED blood from the heart to the body?",
      options: ["Artery", "Vein", "Capillary", "Pulmonary vein"],
      answer: "0",
      explanation:
        "ARTERIES carry oxygenated blood AWAY from the heart — except the pulmonary artery and umbilical artery.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is the ONLY vein that carries oxygenated blood?",
      options: ["Vena cava", "Pulmonary vein", "Renal vein", "Jugular vein"],
      answer: "1",
      explanation:
        "The PULMONARY VEIN carries OXYGENATED blood from the lungs to the heart — exception to the usual rule.",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly lists red blood cell characteristics?",
      options: [
        "Nucleated, irregular, carry oxygen",
        "Disc-shaped, no nucleus, carry oxygen via hemoglobin",
        "Colourless, no nucleus, clot blood",
        "Nucleated, colourless, fight infection",
      ],
      answer: "1",
      explanation:
        "RBCs are disc-shaped, have NO NUCLEUS, and carry OXYGEN using HEMOGLOBIN.",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes a WHITE blood cell?",
      options: [
        "Disc-shaped, no nucleus, carry O₂",
        "Colourless, irregular, nucleated, fight pathogens",
        "Colourless, no nucleus, clot blood",
        "Nucleated, red, carry CO₂",
      ],
      answer: "1",
      explanation:
        "White blood cells (leucocytes) are colourless, irregular, NUCLEATED, and defend against pathogens.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Platelets are important for:",
      options: ["Carrying oxygen", "Fighting infection", "Blood clotting", "Producing hormones"],
      answer: "2",
      explanation:
        "PLATELETS (thrombocytes) help blood CLOT when a vessel is damaged.",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Where does FERTILIZATION normally occur?",
      options: ["Uterus", "Vagina", "Fallopian tube", "Ovary"],
      answer: "2",
      explanation:
        "FERTILIZATION happens in the FALLOPIAN TUBE (oviduct). IMPLANTATION happens in the uterus.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes the site of pregnancy?",
      options: ["Fallopian tube", "Ovary", "Uterus", "Vagina"],
      answer: "2",
      explanation:
        "Pregnancy occurs in the UTERUS (womb) — where the fertilized egg implants and the embryo develops.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly lists the ABC rule for STD prevention?",
      options: [
        "Abstain, Be faithful, Condomise",
        "Avoid, Balance, Care",
        "Aid, Boost, Cure",
        "Analyze, Balance, Consult",
      ],
      answer: "0",
      explanation:
        "ABC = Abstain from sex, Be faithful to one partner, Condomise (use condoms).",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Name the three layers of the skin and one function of each.",
      answer:
        "1) Epidermis (outer) — protects from water loss, UV, and pathogens. 2) Dermis (middle) — contains blood vessels for temperature control, glands, sensory receptors. 3) Hypodermis (inner) — stores fat for energy and insulation.",
      explanation:
        "Banchi, remember the order: EPI (outer) → DERMIS (middle) → HYPO (inner).",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "Name three types of muscles and state whether each is voluntary or involuntary.",
      answer:
        "1) Skeletal — voluntary (you control it). 2) Smooth — involuntary (inside organs). 3) Cardiac — involuntary and auto-rhythmic (heart only).",
      explanation:
        "Only skeletal muscle is under voluntary control.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "Define tendon, ligament, and joint.",
      answer:
        "Tendon: fibrous band that connects MUSCLE to BONE. Ligament: stretchy band that connects BONE to BONE at joints. Joint: site where two or more bones meet.",
      explanation:
        "Memory trick: 'Tendons TIE muscle to bone. Ligaments LINK bone to bone.'",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "Explain the difference between pulmonary and systemic circulation and describe the pathway of blood through the heart.",
      answer:
        "Pulmonary circulation = blood flows between the heart and lungs. Systemic circulation = blood flows between the heart and the rest of the body. Pathway of oxygenated blood: Lungs → Pulmonary vein → Left atrium → Left ventricle → Aorta → Body. Pathway of deoxygenated blood: Body → Vena cava → Right atrium → Right ventricle → Pulmonary artery → Lungs.",
      explanation:
        "Valves prevent backflow of blood. The left ventricle has the thickest wall because it pumps to the whole body.",
    },
        // ============================================================
    // BATCH 2 — Q61 to Q120 (final for Unit 4)
    // ============================================================

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which layer of skin is made of DEAD cells?",
      options: ["Epidermis", "Dermis", "Hypodermis", "Dermis and hypodermis"],
      answer: "0",
      explanation:
        "The EPIDERMIS is the outer layer, made of dead cells. It protects from water loss, UV, and pathogens.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Which layer contains fat for insulation?",
      options: ["Epidermis", "Dermis", "Hypodermis", "Endodermis"],
      answer: "2",
      explanation:
        "The HYPODERMIS (inner layer) contains fat for energy storage and insulation.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "The function of the sweat gland is to:",
      options: [
        "Produce oil for hair",
        "Cool the body",
        "Produce ear wax",
        "Produce milk",
      ],
      answer: "1",
      explanation:
        "Sweat glands (sudoriferous glands) release sweat, which cools the body.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "The function of the nail is to:",
      options: [
        "Warm the body",
        "Protect fingertips and toes",
        "Produce hormones",
        "Store fat",
      ],
      answer: "1",
      explanation:
        "Nails protect the tips of fingers and toes from injury and help with sensation (touch).",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "The largest bone in the human body is the:",
      options: ["Skull", "Femur", "Rib", "Vertebra"],
      answer: "1",
      explanation:
        "The femur (thigh bone) is the largest bone in the human body.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Which type of bone is a vertebra?",
      options: ["Long", "Short", "Flat", "Irregular"],
      answer: "3",
      explanation:
        "Vertebrae are IRREGULAR bones — thin, with nerves and blood vessels.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "The hinge joint allows movement in:",
      options: [
        "All directions",
        "Only one direction",
        "No directions",
        "Two directions only",
      ],
      answer: "1",
      explanation:
        "Hinge joints (elbow, knee) allow movement in ONE direction (like a door hinge).",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "Which joint allows movement in all directions?",
      options: ["Hinge", "Ball-and-socket", "Immovable", "Suture"],
      answer: "1",
      explanation:
        "Ball-and-socket joints (shoulder, hip) allow movement in all directions.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the site of pregnancy?",
      options: ["Fallopian tube", "Ovary", "Uterus", "Vagina"],
      answer: "2",
      explanation:
        "The uterus (womb) is the site of pregnancy — where the embryo implants and develops.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "How many days does a typical menstrual cycle last?",
      options: ["About 14 days", "About 21 days", "About 28 days", "About 40 days"],
      answer: "2",
      explanation:
        "A typical menstrual cycle is about 28 days. Ovulation occurs around day 14.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "Ovulation refers to:",
      options: [
        "Release of an egg from the ovary",
        "Fertilization in the fallopian tube",
        "Implantation in the uterus",
        "Discharge of blood from the vagina",
      ],
      answer: "0",
      explanation:
        "Ovulation = release of a mature egg from the ovary, around day 14 of the menstrual cycle.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "Menstruation is:",
      options: [
        "Release of an egg",
        "Discharge of blood through the vagina",
        "Implantation of an embryo",
        "Stopping of ovulation",
      ],
      answer: "1",
      explanation:
        "Menstruation = discharge of blood and tissue from the uterus through the vagina when pregnancy does not occur.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "Menopause is:",
      options: [
        "Start of menstruation",
        "Release of an egg",
        "Stopping of ovulation and menstruation",
        "Development of a baby",
      ],
      answer: "2",
      explanation:
        "Menopause = stopping of ovulation and menstruation in women, usually around age 50.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the male sex hormone?",
      options: ["Estrogen", "Progesterone", "Testosterone", "Insulin"],
      answer: "2",
      explanation:
        "TESTOSTERONE is the male sex hormone, produced by the testes.",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which are the female sex hormones?",
      options: [
        "Testosterone and insulin",
        "Estrogen and progesterone",
        "Adrenaline and cortisol",
        "Thyroxine and glucagon",
      ],
      answer: "1",
      explanation:
        "Estrogen and progesterone are the female sex hormones, produced by the ovaries.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the male reproductive cell?",
      options: ["Egg", "Sperm", "Ovum", "Zygote"],
      answer: "1",
      explanation:
        "SPERM is the male reproductive cell. The EGG (ovum) is the female reproductive cell.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is caused by a VIRUS?",
      options: ["Gonorrhea", "Syphilis", "HIV/AIDS", "Chancroid"],
      answer: "2",
      explanation:
        "HIV/AIDS is caused by a VIRUS (Human Immunodeficiency Virus). The other three are caused by bacteria.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is caused by BACTERIA?",
      options: ["HIV/AIDS", "Gonorrhea", "Chickenpox", "Flu"],
      answer: "1",
      explanation:
        "Gonorrhea is caused by the bacterium Neisseria gonorrhea.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "The ABC rule for STD prevention stands for:",
      options: [
        "Abstain, Be faithful, Condomise",
        "Avoid, Balance, Cure",
        "Analyze, Boost, Care",
        "Ask, Balance, Consult",
      ],
      answer: "0",
      explanation:
        "A = Abstain from sex. B = Be faithful to one partner. C = Condomise (use condoms).",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "Which disease is caused by bacteria and transmitted through sexual contact?",
      options: ["Malaria", "Typhoid", "Syphilis", "Measles"],
      answer: "2",
      explanation:
        "Syphilis is an STD caused by the bacterium Treponema pallidum.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "Which method can prevent STDs?",
      options: [
        "Sharing needles",
        "Using condoms",
        "Drinking dirty water",
        "Skipping meals",
      ],
      answer: "1",
      explanation:
        "Using condoms is one of the most effective ways to prevent STDs (along with abstinence and faithfulness).",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is a skin disease?",
      options: ["Diabetes", "Acne", "Asthma", "Anemia"],
      answer: "1",
      explanation:
        "ACNE is a skin disease — blocked pores with oil, dead skin, or bacteria.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is a disease of the respiratory system?",
      options: ["Asthma", "Diabetes", "Hepatitis", "Anemia"],
      answer: "0",
      explanation:
        "ASTHMA is a respiratory disease — chronic airway obstruction with wheezing and coughing.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is a disease of the circulatory system?",
      options: ["Asthma", "Diabetes", "Hypertension", "Osteoporosis"],
      answer: "2",
      explanation:
        "HYPERTENSION (high blood pressure) is a circulatory disease.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is a disease of the skeletal system?",
      options: ["Asthma", "Osteoporosis", "Diabetes", "Gastritis"],
      answer: "1",
      explanation:
        "OSTEOPOROSIS is a skeletal disease — bones become thin and lose strength.",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the alimentary canal?",
      options: [
        "The entire passage from mouth to anus",
        "Only the stomach",
        "The lungs",
        "The kidneys",
      ],
      answer: "0",
      explanation:
        "Alimentary canal = the whole passage food travels through from MOUTH to ANUS.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the dental formula for adult humans?",
      options: [
        "I=2/2, C=1/1, P=2/2, M=3/3",
        "I=3/3, C=2/2, P=1/1, M=2/2",
        "I=2/2, C=2/2, P=2/2, M=2/2",
        "I=1/1, C=1/1, P=1/1, M=1/1",
      ],
      answer: "0",
      explanation:
        "Adult dental formula: I=2/2, C=1/1, P=2/2, M=3/3 → total 32 teeth.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the function of the small intestine?",
      options: [
        "Absorbs water and forms feces",
        "Absorbs nutrients through villi",
        "Produces bile",
        "Secretes HCl",
      ],
      answer: "1",
      explanation:
        "The small intestine absorbs NUTRIENTS through finger-like projections called VILLI.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the main function of the large intestine?",
      options: [
        "Absorb nutrients",
        "Absorb water and form feces",
        "Produce digestive enzymes",
        "Absorb oxygen",
      ],
      answer: "1",
      explanation:
        "The large intestine ABSORBS WATER and forms feces (undigested material).",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why we should eat fiber-rich food?",
      options: [
        "To prevent constipation",
        "To increase stomach acid",
        "To dry out the food",
        "To make teeth sharper",
      ],
      answer: "0",
      explanation:
        "Fiber (roughage) prevents CONSTIPATION by helping food and waste move through the gut.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes 'diarrhea'?",
      options: [
        "Watery feces caused by gut infection",
        "Swollen veins in the rectum",
        "Inflammation of the stomach",
        "Sores in the stomach lining",
      ],
      answer: "0",
      explanation:
        "Diarrhea = watery feces, usually caused by infection. It can cause dehydration.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes 'gastritis'?",
      options: [
        "Inflammation of the stomach lining",
        "Cancer of the blood",
        "Inflammation of the lungs",
        "Sores in the small intestine",
      ],
      answer: "0",
      explanation:
        "GASTRITIS = inflammation, irritation, or erosion of the stomach lining.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "Which organ is the site of gas exchange?",
      options: ["Trachea", "Bronchi", "Alveoli", "Diaphragm"],
      answer: "2",
      explanation:
        "ALVEOLI (tiny air sacs in the lungs) are the site of gas exchange — O₂ in, CO₂ out.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the role of the diaphragm?",
      options: [
        "It produces sound",
        "It helps in breathing by changing lung shape",
        "It produces enzymes",
        "It filters blood",
      ],
      answer: "1",
      explanation:
        "The DIAPHRAGM is a muscle that helps breathing — it contracts and relaxes to change lung shape.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes asthma?",
      options: [
        "Chronic lung disease with airway obstruction and wheezing",
        "Cancer of the blood",
        "Inflammation of the bones",
        "Infection of the intestine",
      ],
      answer: "0",
      explanation:
        "ASTHMA = chronic lung disease with recurring airway obstruction, wheezing, and cough.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the main function of red blood cells?",
      options: [
        "Fight infection",
        "Carry oxygen via hemoglobin",
        "Clot blood",
        "Produce hormones",
      ],
      answer: "1",
      explanation:
        "Red blood cells carry oxygen using HEMOGLOBIN.",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the main function of white blood cells?",
      options: [
        "Carry oxygen",
        "Defend against pathogens",
        "Clot blood",
        "Store fat",
      ],
      answer: "1",
      explanation:
        "White blood cells defend against disease-causing pathogens.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the main function of platelets?",
      options: [
        "Carry oxygen",
        "Fight infection",
        "Initiate blood clotting",
        "Produce energy",
      ],
      answer: "2",
      explanation:
        "Platelets (thrombocytes) initiate BLOOD CLOTTING when a blood vessel is damaged.",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is TRUE about blood composition?",
      options: [
        "55% solid cells, 45% plasma",
        "45% solid cells, 55% plasma",
        "100% plasma",
        "100% red blood cells",
      ],
      answer: "1",
      explanation:
        "Blood = 55% PLASMA + 45% SOLID cells (RBC, WBC, platelets).",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the plasma in blood?",
      options: [
        "90% water + 10% dissolved substances",
        "100% water",
        "100% cells",
        "50% water",
      ],
      answer: "0",
      explanation:
        "Plasma is 90% water and 10% dissolved substances (amino acids, glucose, etc.).",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes hypertension?",
      options: [
        "Low blood pressure",
        "High blood pressure",
        "Infection of the heart",
        "Heart attack",
      ],
      answer: "1",
      explanation:
        "Hypertension = HIGH BLOOD PRESSURE. Caused by age, obesity, high salt, stress, etc.",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "A heart attack happens when:",
      options: [
        "Blood stops flowing to part of the heart",
        "The heart beats too slowly",
        "The heart valves open",
        "Blood pressure is low",
      ],
      answer: "0",
      explanation:
        "A heart attack occurs when blood stops flowing to part of the heart, damaging the heart muscle.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "A stroke happens when:",
      options: [
        "The heart stops",
        "Blood supply to part of the brain is interrupted",
        "The lungs collapse",
        "The kidneys fail",
      ],
      answer: "1",
      explanation:
        "A STROKE occurs when blood supply to part of the brain is interrupted, preventing brain tissue from getting oxygen.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the male gonad?",
      options: ["Ovary", "Testes", "Uterus", "Vagina"],
      answer: "1",
      explanation:
        "The male gonad is the TESTES — it produces sperm and testosterone.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the female gonad?",
      options: ["Ovary", "Testes", "Penis", "Vas deferens"],
      answer: "0",
      explanation:
        "The female gonad is the OVARY — it produces eggs and hormones (estrogen, progesterone).",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "Where are sperm cells produced?",
      options: ["Prostate gland", "Testes", "Vas deferens", "Epididymis"],
      answer: "1",
      explanation:
        "Sperm cells are produced in the TESTES (male gonads).",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "Where are eggs (ova) produced?",
      options: ["Uterus", "Fallopian tube", "Ovary", "Vagina"],
      answer: "2",
      explanation:
        "Eggs (ova) are produced in the OVARIES (female gonads).",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "Which STDs are caused by bacteria?",
      options: [
        "HIV and chickenpox",
        "Gonorrhea and syphilis",
        "Chickenpox and flu",
        "HIV and measles",
      ],
      answer: "1",
      explanation:
        "Gonorrhea (Neisseria gonorrhea) and syphilis (Treponema pallidum) are caused by bacteria.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "Which one is NOT an STD?",
      options: ["HIV/AIDS", "Gonorrhea", "Syphilis", "Malaria"],
      answer: "3",
      explanation:
        "Malaria is transmitted by mosquito bites, not sexual contact.",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a secondary sexual characteristic in males?",
      options: [
        "Widening of hips",
        "Deepening of voice",
        "Breast development",
        "Start of menstruation",
      ],
      answer: "1",
      explanation:
        "Deepening of voice is a male secondary sexual characteristic. Widening of hips and breast development are female characteristics.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "Which is TRUE about the relationship between the skin and the circulatory system?",
      options: [
        "Skin has no blood vessels",
        "Dermis blood vessels help regulate body temperature",
        "Epidermis contains all blood vessels",
        "Blood vessels are only in the hypodermis",
      ],
      answer: "1",
      explanation:
        "Blood vessels in the DERMIS help regulate body temperature (thermoregulation) — when you're hot, they dilate to release heat; when you're cold, they constrict to save heat.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes how skeletal and muscular systems work together?",
      options: [
        "Muscles attach to bones via tendons and pull to move the body",
        "Bones pull muscles",
        "Muscles are only in the bones",
        "They work independently",
      ],
      answer: "0",
      explanation:
        "Muscles attach to bones via TENDONS. When muscles contract, they pull on bones to create movement. Muscles can PULL but never PUSH.",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes the relationship between the respiratory and circulatory systems?",
      options: [
        "The lungs exchange gases with the blood in the alveoli",
        "The heart makes oxygen",
        "The circulatory system produces CO₂",
        "The respiratory system pumps blood",
      ],
      answer: "0",
      explanation:
        "In the alveoli, oxygen from air enters the blood and CO₂ from blood enters the air. The two systems work together to deliver O₂ to the body.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why the SMALL intestine has villi?",
      options: [
        "To increase surface area for nutrient absorption",
        "To make food dry",
        "To produce more HCl",
        "To slow down digestion",
      ],
      answer: "0",
      explanation:
        "Villi are finger-like projections that INCREASE SURFACE AREA for faster and more efficient absorption of nutrients.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly lists the pathway of oxygenated blood?",
      options: [
        "Lungs → Pulmonary vein → Left atrium → Left ventricle → Aorta → Body",
        "Lungs → Pulmonary artery → Right atrium → Right ventricle → Aorta → Body",
        "Body → Vena cava → Left atrium → Left ventricle → Aorta → Body",
        "Lungs → Aorta → Left atrium → Left ventricle → Body",
      ],
      answer: "0",
      explanation:
        "Correct pathway: Lungs → Pulmonary VEIN (exception: carries oxygenated blood) → Left atrium → Left ventricle → Aorta → Body.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why pregnancy cannot begin without ovulation?",
      options: [
        "Ovulation releases the egg needed for fertilization",
        "Ovulation is not important",
        "Pregnancy can happen without an egg",
        "Fertilization happens without sperm",
      ],
      answer: "0",
      explanation:
        "Ovulation releases a mature egg from the ovary. Without an egg, there is nothing for the sperm to fertilize — no pregnancy.",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "Name the three types of muscles and give one location for each.",
      answer:
        "1) Skeletal muscle — attached to bones (example: biceps). 2) Smooth muscle — inside organs (example: stomach walls). 3) Cardiac muscle — only in the heart.",
      explanation:
        "Skeletal = voluntary. Smooth + cardiac = involuntary.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "Describe the pathway of food through the alimentary canal.",
      answer:
        "Mouth → Esophagus → Stomach → Small intestine → Large intestine → Anus. Associated glands (salivary glands, liver, pancreas) add enzymes and fluids along the way.",
      explanation:
        "Banchi, remember this order — it's the classic exam question.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "Explain how the respiratory and circulatory systems work together.",
      answer:
        "The respiratory system brings oxygen into the lungs. In the alveoli, oxygen enters the blood and carbon dioxide leaves. The circulatory system then carries oxygen-rich blood to every cell in the body and carries carbon dioxide back to the lungs to be exhaled.",
      explanation:
        "The two systems work together to deliver oxygen and remove carbon dioxide.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Name the four major STDs and describe one prevention method.",
      answer:
        "1) HIV/AIDS (virus). 2) Gonorrhea (bacteria). 3) Syphilis (bacteria). 4) Chancroid (bacteria). Prevention: follow the ABC rule — Abstain from sex, Be faithful to one partner, Condomise (use condoms).",
      explanation:
        "HIV is viral; the other three are bacterial. The ABC rule works for all STDs.",
    },
  ],
};