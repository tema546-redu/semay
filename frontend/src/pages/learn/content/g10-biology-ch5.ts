import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 BIOLOGY — UNIT 5
// HUMAN BIOLOGY
// Source: Grade 10 Biology Student Textbook (pp. 94–151)
// For: Abenezer (Abatu) — Grade 10
// ============================================================

export const g10BiologyCh5: Chapter = {
  id: "ch5",
  number: 5,
  title: "Human Biology",
  titleAm: "የሰው ባዮሎጂ",

  notes: [
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, Unit 5 is HUMAN BIOLOGY — the biggest unit. It covers FIVE major body systems:\n" +
        "1) DIGESTIVE SYSTEM (teeth, alimentary canal, enzymes, absorption)\n" +
        "2) CIRCULATORY SYSTEM (heart, blood, blood vessels, blood groups)\n" +
        "3) RESPIRATORY SYSTEM (nose, larynx, trachea, lungs, breathing)\n" +
        "4) EXCRETORY SYSTEM (kidney, nephron, urine formation)\n" +
        "5) LYMPHATIC + IMMUNE SYSTEM (lymph, white blood cells, immunity, vaccines)\n\n" +
        "The WHOLE chapter reduces to these must-know items:\n" +
        "• Complete digestive path: mouth → esophagus → stomach → small intestine → large intestine → anus\n" +
        "• Digestive enzymes (amylase, pepsin, lipase, trypsin) + substrates + products\n" +
        "• Teeth types + structure + dental care\n" +
        "• Heart structure (4 chambers, 4 valves) + blood circulation (pulmonary vs systemic)\n" +
        "• Blood components (RBC, WBC, platelets, plasma) + functions\n" +
        "• Blood groups (A, B, AB, O + Rh) + transfusions\n" +
        "• Respiratory path: nose → pharynx → larynx → trachea → bronchi → bronchioles → alveoli\n" +
        "• Breathing mechanism (inhale/exhale, diaphragm, intercostals)\n" +
        "• Kidney structure (nephron: glomerulus, Bowman's capsule, tubules)\n" +
        "• Urine formation stages (filtration, reabsorption, secretion)\n" +
        "• Lymphatic system + types of immunity (active, passive, natural, artificial)\n" +
        "• Cardiovascular diseases, cancer, diabetes, vaccines\n\n" +
        "Mastery rule: MEMORIZE the tables (enzymes, blood cells, ions, blood groups) and the pathways. This unit has the MOST content.",
      bodyAm:
        "አባቱ፣ ክፍል 5 ትልቁ ክፍል ነው። አምስት ሥርዓቶች፡\n" +
        "1) ምግብ መፍጨት\n" +
        "2) የደም ዝውውር\n" +
        "3) መተንፈስ\n" +
        "4) መጣል\n" +
        "5) ሊምፍ + ተከላካይ ሥርዓት",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 — Digestive system",
          titleAm: "ደረጃ 1 — ምግብ መፍጨት",
          body:
            "PATH OF FOOD: Mouth → Esophagus → Stomach → Small intestine → Large intestine → Rectum → Anus.\n\n" +
            "MECHANICAL DIGESTION (physical):\n" +
            "• Teeth — chewing (mastication)\n" +
            "• Stomach — churning\n" +
            "• Bile — emulsifies fats\n\n" +
            "CHEMICAL DIGESTION (enzymes):\n" +
            "• Mouth — salivary AMYLASE: starch → maltose\n" +
            "• Stomach — PEPSIN: proteins → peptides\n" +
            "• Small intestine — TRYPSIN: proteins; LIPASE: fats; MALTASE: maltose → glucose\n" +
            "• Bile (liver) — emulsifies fats\n\n" +
            "ABSORPTION in small intestine (villi).",
          bodyAm:
            "መንገድ: አፍ → esophagus → ሆድ → ትንሽ አንጀት → ትልቅ አንጀት → አንስ።\n" +
            "አሚላዝ: starch → maltose።\n" +
            "ፔፕሲን: protein → peptides።\n" +
            "ትራይፕሲን, ላይፓዝ, ማልታዝ።",
        },
        {
          id: "n0-2",
          title: "Pass 2 — Circulatory system",
          titleAm: "ደረጃ 2 — የደም ዝውውር",
          body:
            "HEART STRUCTURE:\n" +
            "• 4 CHAMBERS: Right atrium, right ventricle, left atrium, left ventricle\n" +
            "• 4 VALVES: Tricuspid (RA→RV), pulmonary (RV→PA), bicuspid/mitral (LA→LV), aortic (LV→Aorta)\n\n" +
            "CIRCULATION:\n" +
            "• PULMONARY: heart → lungs → heart (right side)\n" +
            "• SYSTEMIC: heart → body → heart (left side)\n\n" +
            "BLOOD VESSELS:\n" +
            "• ARTERIES — away from heart; thick walls; high pressure\n" +
            "• VEINS — toward heart; thin walls; valves\n" +
            "• CAPILLARIES — one cell thick; exchange\n\n" +
            "BLOOD COMPONENTS:\n" +
            "• PLASMA — liquid (55%); carries nutrients, hormones, wastes\n" +
            "• RBC — no nucleus; hemoglobin; carries O₂\n" +
            "• WBC — nucleus; immunity\n" +
            "• PLATELETS — clotting",
          bodyAm:
            "4 ክፍሎች: RA, RV, LA, LV።\n" +
            "4 ቫልቮች: tricuspid, pulmonary, bicuspid, aortic።\n" +
            "Pulmonary: ወደ ሳንባ።\n" +
            "Systemic: ወደ ሰውነት።\n" +
            "RBC = O₂; WBC = immunity; platelets = clotting።",
        },
        {
          id: "n0-3",
          title: "Pass 3 — Respiratory system",
          titleAm: "ደረጃ 3 — መተንፈስ",
          body:
            "PATH OF AIR: Nose → Pharynx → Larynx → Trachea → Bronchi → Bronchioles → Alveoli.\n\n" +
            "KEY STRUCTURES:\n" +
            "• Nose — warms, moistens, filters air\n" +
            "• Epiglottis — covers trachea during swallowing (prevents choking)\n" +
            "• Larynx — voice box (vocal cords)\n" +
            "• Trachea — windpipe; cartilage rings; cilia + mucus\n" +
            "• Alveoli — GAS EXCHANGE site (O₂ in, CO₂ out); thin walls, moist, many, capillaries\n\n" +
            "BREATHING MECHANISM:\n" +
            "• INHALE: diaphragm contracts + flattens; intercostals lift ribs; volume ↑; pressure ↓; air in\n" +
            "• EXHALE: diaphragm relaxes; ribs drop; volume ↓; pressure ↑; air out\n\n" +
            "Aerobic respiration: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy",
          bodyAm:
            "መንገድ: አፍንጫ → pharynx → larynx → trachea → bronchi → alveoli።\n" +
            "Alveoli = ጋዝ ልውውጥ።\n" +
            "Inhale: diaphragm ይቀነሳል።\n" +
            "Exhale: diaphragm ይዘረጋል።",
        },
        {
          id: "n0-4",
          title: "Pass 4 — Excretory system",
          titleAm: "ደረጃ 4 — መጣል",
          body:
            "EXCRETORY SYSTEM = kidneys + ureters + bladder + urethra.\n\n" +
            "KIDNEY structure:\n" +
            "• CORTEX — outer; contains glomeruli + Bowman's capsules\n" +
            "• MEDULLA — middle; loops of Henle + collecting ducts\n" +
            "• PELVIS — inner; collects urine\n\n" +
            "NEPHRON (functional unit):\n" +
            "• GLOMERULUS — capillary tuft\n" +
            "• BOWMAN'S CAPSULE — surrounds glomerulus\n" +
            "• Proximal tubule → Loop of Henle → Distal tubule → Collecting duct\n\n" +
            "URINE FORMATION:\n" +
            "1) FILTRATION — in glomerulus → water, ions, glucose, urea filtered\n" +
            "2) REABSORPTION — in tubules → water, glucose, ions back to blood\n" +
            "3) SECRETION — wastes added\n\n" +
            "FUNCTIONS OF KIDNEY: filter blood, balance water/ions, regulate pH, make urine, regulate RBC production (erythropoietin).",
          bodyAm:
            "ኩላሊት: cortex, medulla, pelvis።\n" +
            "Nephron = glomerulus + Bowman's + tubules።\n" +
            "3 ደረጃዎች: filtration, reabsorption, secretion።",
        },
        {
          id: "n0-5",
          title: "Pass 5 — Lymphatic + immune system",
          titleAm: "ደረጃ 5 — ሊምፍ + ተከላካይ",
          body:
            "LYMPHATIC SYSTEM:\n" +
            "• Lymph (clear fluid) + lymphatic vessels + lymph nodes + spleen + thymus + tonsils\n" +
            "• Returns excess tissue fluid to blood\n" +
            "• Contains white blood cells (lymphocytes) → immunity\n" +
            "• Open system (lymph vessels empty into veins)\n\n" +
            "IMMUNITY types:\n" +
            "• ACTIVE — body makes antibodies (from infection or vaccine); long-lasting\n" +
            "• PASSIVE — antibodies given (breast milk, antiserum); short-lasting\n" +
            "• NATURAL — from normal life (infection, breastfeeding)\n" +
            "• ARTIFICIAL — from medical intervention (vaccine, antiserum)\n\n" +
            "VACCINES: give weak/dead pathogens → body makes antibodies → memory cells → protection.",
          bodyAm:
            "ሊምፍ: lymph + vessels + nodes + spleen + thymus + tonsils።\n" +
            "Active = ራሱ ያመርታል።\n" +
            "Passive = ተሰጥቶ።\n" +
            "ቫክሲን: memory cells።",
        },
        {
          id: "n0-6",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Know the ENTIRE food path in order.\n" +
            "• Know the enzyme + substrate + product.\n" +
            "• Know 4 types of teeth (incisors, canines, premolars, molars).\n" +
            "• Know 4 heart chambers + 4 valves.\n" +
            "• Know pulmonary vs systemic circulation.\n" +
            "• Know blood components and functions.\n" +
            "• Know ABO + Rh blood types + compatible transfusions.\n" +
            "• Know breathing mechanism (diaphragm up/down).\n" +
            "• Know kidney + nephron structure.\n" +
            "• Know 3 stages of urine formation.\n" +
            "• Know 4 types of immunity.\n" +
            "• Know the major body diseases (cardiovascular, cancer, diabetes).",
          bodyAm:
            "ምግብ መንገድ፣ ኢንዛይሞች፣ ጥርሶች፣ ልብ፣ ደም፣ ሳንባ፣ ኩላሊት፣ ሊምፍ፣ ስለ በሽታዎች አወቅ።",
        },
      ],
    },

    {
      id: "n1",
      title: "5.1 The Digestive System",
      titleAm: "5.1 የምግብ መፍጫ ሥርዓት",
      body:
        "Abatu, the DIGESTIVE SYSTEM breaks down food into small molecules that can be absorbed into the blood. It has TWO parts: the ALIMENTARY CANAL (tube) and ACCESSORY ORGANS.",
      bodyAm:
        "ምግብ መፍጫ ሥርዓት: ምግብን ወደ ትንሽ ሞለኪዩሎች ይከፍላል።",
      children: [
        {
          id: "n1-1",
          title: "The alimentary canal — path of food",
          titleAm: "የምግብ መንገድ",
          body:
            "PATH OF FOOD (in order):\n" +
            "1) MOUTH (oral cavity) — chewing + salivary amylase\n" +
            "2) PHARYNX — throat\n" +
            "3) ESOPHAGUS — food tube; peristalsis moves food down\n" +
            "4) STOMACH — churns; pepsin + HCl\n" +
            "5) SMALL INTESTINE — main digestion + absorption (duodenum, jejunum, ileum)\n" +
            "6) LARGE INTESTINE (colon) — water absorption; feces formation\n" +
            "7) RECTUM — stores feces\n" +
            "8) ANUS — exit\n\n" +
            "Accessory organs: SALIVARY GLANDS, LIVER, GALLBLADDER, PANCREAS.",
          bodyAm:
            "1) አፍ 2) pharynx 3) esophagus 4) ሆድ 5) ትንሽ አንጀት 6) ትልቅ አንጀት 7) rectum 8) anus።\n" +
            "Accessory: ትርፍ እጢ፣ ጉበት፣ ጋለብላደር፣ ቆሽት።",
        },
        {
          id: "n1-2",
          title: "Types of teeth & their functions",
          titleAm: "የጥርስ ዓይነቶች",
          body:
            "FOUR TYPES OF TEETH:\n" +
            "• INCISORS — front; CUTTING\n" +
            "• CANINES — pointed; TEARING\n" +
            "• PREMOLARS — two cusps; GRINDING\n" +
            "• MOLARS — flat; CRUSHING/grinding\n\n" +
            "HUMAN DENTITION:\n" +
            "• Deciduous (baby) teeth = 20\n" +
            "• Permanent teeth = 32 (including 4 wisdom teeth)\n\n" +
            "TOOTH STRUCTURE:\n" +
            "• ENAMEL — hardest; outer covering\n" +
            "• DENTIN — beneath enamel\n" +
            "• PULP — contains nerves + blood vessels\n" +
            "• CEMENTUM — covers root\n" +
            "• ROOT — anchors in jaw\n\n" +
            "DENTAL CARE: brush 2× daily, floss, limit sugar, regular dentist.",
          bodyAm:
            "Incisors = መቁረጥ።\n" +
            "Canines = መቀደድ።\n" +
            "Premolars = መፍጨት።\n" +
            "Molars = መፍጨት።\n" +
            "20 የልጅ፤ 32 የጎልማሳ።\n" +
            "Enamel, dentin, pulp, cementum, root።",
        },
        {
          id: "n1-3",
          title: "Digestion in the mouth",
          titleAm: "በአፍ ውስጥ መፍጨት",
          body:
            "Mechanical: chewing (mastication) by teeth + tongue\n" +
            "Chemical: SALIVARY AMYLASE\n" +
            "• Starch + H₂O → MALTOSE\n" +
            "• Saliva also contains mucus (lubricant) + lysozyme (antibacterial)\n\n" +
            "Food mixed with saliva = BOLUS.\n" +
            "Bolus is swallowed → esophagus (peristalsis moves it) → stomach.",
          bodyAm:
            "ጥርስ = መንከስ።\n" +
            "ሳላይቫሪ አሚላዝ: starch → maltose።\n" +
            "Bolus → esophagus → ሆድ።",
        },
        {
          id: "n1-4",
          title: "Digestion in the stomach",
          titleAm: "በሆድ ውስጥ መፍጨት",
          body:
            "STOMACH JUICE contains:\n" +
            "• HYDROCHLORIC ACID (HCl) — kills bacteria; provides acidic pH (~2)\n" +
            "• PEPSIN — enzyme; PROTEIN → PEPTIDES\n" +
            "• MUCUS — protects stomach lining\n\n" +
            "• Churning (mechanical) mixes food with enzymes\n" +
            "• Sphincters control movement: cardiac (top), pyloric (bottom)\n" +
            "• Partially digested food = CHYME\n" +
            "• Chyme released into small intestine in small amounts\n\n" +
            "Why doesn't stomach digest itself?\n" +
            "• Mucus coat protects lining\n" +
            "• Cells replaced quickly\n" +
            "• Pepsin only active at low pH (parietal cells produce HCl separately)",
          bodyAm:
            "HCl = ባክቴሪያ ይገድላል።\n" +
            "ፔፕሲን: protein → peptides።\n" +
            "Mucus = መከላከያ።\n" +
            "Chyme = ከፊል የፈጨ።",
        },
        {
          id: "n1-5",
          title: "Small intestine & accessory organs",
          titleAm: "ትንሽ አንጀት",
          body:
            "SMALL INTESTINE — main digestion + absorption\n" +
            "3 sections: DUODENUM, JEJUNUM, ILEUM\n" +
            "Villi + microvilli increase surface area for absorption\n\n" +
            "ACCESSORY ORGANS:\n" +
            "• LIVER — makes BILE; stores glycogen; detoxifies\n" +
            "• GALLBLADDER — stores/concentrates bile\n" +
            "• PANCREAS — makes digestive enzymes + insulin\n\n" +
            "ENZYMES in small intestine:\n" +
            "• TRYPSIN (pancreas) — proteins → peptides\n" +
            "• LIPASE (pancreas) — fats → fatty acids + glycerol\n" +
            "• AMYLASE (pancreas) — starch → maltose\n" +
            "• MALTASE — maltose → glucose\n\n" +
            "BILE (not an enzyme!) — EMULSIFIES fats (breaks into droplets) — helps lipase work.",
          bodyAm:
            "Duodenum, jejunum, ileum።\n" +
            "Villi = መሳብ።\n" +
            "ትራይፕሲን: protein።\n" +
            "ላይፓዝ: fat።\n" +
            "ቢል = emulsify።",
        },
        {
          id: "n1-6",
          title: "Large intestine & absorption",
          titleAm: "ትልቅ አንጀት",
          body:
            "LARGE INTESTINE:\n" +
            "• Absorbs WATER + remaining ions\n" +
            "• Contains bacteria (gut flora) that make vitamin K + some B vitamins\n" +
            "• Forms FECES from undigested material\n" +
            "• Stores feces in RECTUM until defecation\n\n" +
            "ABSORPTION SUMMARY:\n" +
            "• Glucose, amino acids, vitamins, minerals → blood capillaries in villi\n" +
            "• Fatty acids + glycerol → lacteals (lymph vessels in villi)\n" +
            "• Water → small + large intestine",
          bodyAm:
            "ትልቅ አንጀት: ውሃ ይስባል።\n" +
            "ፌሴስ ይፈጠራል።\n" +
            "Fat → lacteals።",
        },
        {
          id: "n1-7",
          title: "⚠ Remember trap — Digestive",
          titleAm: "⚠ አትርሳ — መፍጨት",
          body:
            "• Food path: MOUTH → ESOPHAGUS → STOMACH → SMALL → LARGE → ANUS.\n" +
            "• Salivary AMYLASE = starch → maltose.\n" +
            "• PEPSIN = protein digestion (stomach).\n" +
            "• TRYPSIN = protein (small intestine).\n" +
            "• LIPASE = fats.\n" +
            "• BILE (not enzyme) = emulsifies fats.\n" +
            "• HCL = kills bacteria in stomach.\n" +
            "• VILLI = absorption (small intestine).\n" +
            "• 4 types of teeth: incisors, canines, premolars, molars.\n" +
            "• 32 permanent teeth (20 baby teeth).",
          bodyAm:
            "መንገድ፣ ኢንዛይሞች፣ ቢል፣ villi፣ ጥርሶች።",
        },
      ],
    },

    {
      id: "n2",
      title: "5.2 The Circulatory System",
      titleAm: "5.2 የደም ዝውውር ሥርዓት",
      body:
        "Abatu, the CIRCULATORY SYSTEM = heart + blood vessels + blood. It transports oxygen, nutrients, hormones, and wastes.",
      bodyAm:
        "የደም ዝውውር: ልብ + የደም ቧንቧዎች + ደም።",
      children: [
        {
          id: "n2-1",
          title: "The heart — 4 chambers",
          titleAm: "ልብ — 4 ክፍሎች",
          body:
            "HEART has 4 CHAMBERS:\n" +
            "• RIGHT ATRIUM (RA) — receives deoxygenated blood from body (via vena cava)\n" +
            "• RIGHT VENTRICLE (RV) — pumps deoxygenated blood to lungs (via pulmonary artery)\n" +
            "• LEFT ATRIUM (LA) — receives oxygenated blood from lungs (via pulmonary vein)\n" +
            "• LEFT VENTRICLE (LV) — pumps oxygenated blood to body (via aorta) — THICKEST wall\n\n" +
            "SEPTUM — muscular wall separating left and right sides (prevents mixing).\n\n" +
            "4 VALVES:\n" +
            "• TRICUSPID — RA → RV\n" +
            "• PULMONARY — RV → pulmonary artery\n" +
            "• BICUSPID/MITRAL — LA → LV\n" +
            "• AORTIC — LV → aorta\n\n" +
            "Valves prevent BACKFLOW.",
          bodyAm:
            "RA, RV, LA, LV።\n" +
            "Septum = መለያ።\n" +
            "Tricuspid, pulmonary, bicuspid, aortic።",
        },
        {
          id: "n2-2",
          title: "Blood circulation — pulmonary vs systemic",
          titleAm: "የደም ዑደት",
          body:
            "PULMONARY CIRCULATION (right side):\n" +
            "• Heart (RV) → pulmonary artery → LUNGS (gas exchange) → pulmonary vein → Heart (LA)\n" +
            "• Purpose: oxygenate blood\n\n" +
            "SYSTEMIC CIRCULATION (left side):\n" +
            "• Heart (LV) → aorta → BODY → vena cava → Heart (RA)\n" +
            "• Purpose: deliver O₂ + nutrients; remove CO₂ + wastes\n\n" +
            "KEY:\n" +
            "• Pulmonary artery carries DEOXYGENATED blood (unusual for artery)\n" +
            "• Pulmonary vein carries OXYGENATED blood (unusual for vein)\n" +
            "• Heart has its own blood supply via CORONARY arteries",
          bodyAm:
            "Pulmonary: ወደ ሳንባ።\n" +
            "Systemic: ወደ ሰውነት።\n" +
            "Pulmonary artery = deoxy።\n" +
            "Pulmonary vein = oxy።",
        },
        {
          id: "n2-3",
          title: "Blood vessels",
          titleAm: "የደም ቧንቧዎች",
          body:
            "ARTERIES:\n" +
            "• Carry blood AWAY from heart\n" +
            "• Thick, muscular walls\n" +
            "• No valves\n" +
            "• HIGH pressure\n" +
            "• Example: aorta, pulmonary artery\n\n" +
            "VEINS:\n" +
            "• Carry blood TOWARD heart\n" +
            "• Thin walls\n" +
            "• Have VALVES (prevent backflow)\n" +
            "• LOW pressure\n" +
            "• Example: vena cava, pulmonary vein\n\n" +
            "CAPILLARIES:\n" +
            "• ONE CELL THICK walls\n" +
            "• Connect arteries to veins\n" +
            "• Site of EXCHANGE (O₂, nutrients, wastes)\n" +
            "• Slow blood flow",
          bodyAm:
            "Artery = ከልብ ወደ ውጭ።\n" +
            "Vein = ወደ ልብ።\n" +
            "Capillary = 1 ሴል ውፍረት, exchange።",
        },
        {
          id: "n2-4",
          title: "Blood — components",
          titleAm: "ደም — ክፍሎች",
          body:
            "BLOOD = ~55% PLASMA + ~45% cells.\n\n" +
            "PLASMA (liquid):\n" +
            "• ~90% water\n" +
            "• Dissolved: nutrients, hormones, ions, wastes (urea), proteins (albumin, antibodies, fibrinogen)\n\n" +
            "RED BLOOD CELLS (RBC / erythrocytes):\n" +
            "• NO nucleus (in mammals)\n" +
            "• Biconcave shape → high surface area\n" +
            "• Contain HEMOGLOBIN (iron) → carries O₂\n" +
            "• Lifespan ~120 days\n" +
            "• Made in bone marrow\n" +
            "• 25 million million (25 trillion) in body\n\n" +
            "WHITE BLOOD CELLS (WBC / leukocytes):\n" +
            "• HAVE nucleus\n" +
            "• Defend body (immunity)\n" +
            "• Types: neutrophils, lymphocytes, monocytes, eosinophils, basophils\n" +
            "• High count = infection\n\n" +
            "PLATELETS:\n" +
            "• Cell fragments (not whole cells)\n" +
            "• Help BLOOD CLOTTING\n" +
            "• 250,000–400,000/mm³",
          bodyAm:
            "RBC: ኒውክሊየስ የለም፣ hemoglobin፣ O₂።\n" +
            "WBC: ኒውክሊየስ አለው፣ immunity።\n" +
            "Platelets: clotting።",
        },
        {
          id: "n2-5",
          title: "Blood groups (ABO + Rh)",
          titleAm: "የደም ዓይነቶች",
          body:
            "ABO SYSTEM — 4 groups:\n" +
            "• A — has A antigen on RBC; anti-B antibody\n" +
            "• B — has B antigen; anti-A antibody\n" +
            "• AB — both A and B antigens; no antibodies (UNIVERSAL RECIPIENT)\n" +
            "• O — no antigens; both anti-A and anti-B antibodies (UNIVERSAL DONOR)\n\n" +
            "Rh FACTOR:\n" +
            "• Rh+ = has Rh antigen (most people)\n" +
            "• Rh− = no Rh antigen\n" +
            "• Rh incompatibility in pregnancy → erythroblastosis fetalis (baby's RBCs destroyed)\n\n" +
            "TRANSFUSION COMPATIBILITY:\n" +
            "• O− → gives to everyone\n" +
            "• AB+ → receives from everyone",
          bodyAm:
            "A, B, AB, O።\n" +
            "AB = universal recipient።\n" +
            "O = universal donor።\n" +
            "Rh+ vs Rh−።",
        },
        {
          id: "n2-6",
          title: "Cardiovascular diseases",
          titleAm: "የልብና የደም ቧንቧ በሽታዎች",
          body:
            "MAJOR CARDIOVASCULAR DISEASES:\n" +
            "• HYPERTENSION — high blood pressure\n" +
            "• ATHEROSCLEROSIS — plaque buildup in arteries\n" +
            "• HEART ATTACK (myocardial infarction) — blocked coronary artery; heart tissue dies\n" +
            "• STROKE — blocked/burst vessel in brain\n" +
            "• VARICOSE VEINS — faulty valves in veins\n" +
            "• LEUKEMIA — cancer of blood-forming cells\n\n" +
            "RISK FACTORS:\n" +
            "• Smoking\n" +
            "• High salt/fat diet\n" +
            "• Lack of exercise\n" +
            "• Obesity\n" +
            "• Stress\n" +
            "• Genetics\n" +
            "• Age",
          bodyAm:
            "Hypertension, atherosclerosis, heart attack, stroke, leukemia።\n" +
            "Risk: smoking, salt, obesity, stress።",
        },
        {
          id: "n2-7",
          title: "⚠ Remember trap — Circulatory",
          titleAm: "⚠ አትርሳ — የደም ዝውውር",
          body:
            "• Heart = 4 chambers, 4 valves.\n" +
            "• Left ventricle = THICKEST wall (pumps to whole body).\n" +
            "• Pulmonary artery = DEOXYGENATED blood.\n" +
            "• Pulmonary vein = OXYGENATED blood.\n" +
            "• Artery = away from heart; vein = toward heart.\n" +
            "• Capillaries = exchange site.\n" +
            "• RBC = no nucleus, hemoglobin, O₂.\n" +
            "• WBC = nucleus, immunity.\n" +
            "• Platelets = clotting.\n" +
            "• O = universal donor; AB = universal recipient.\n" +
            "• Rh− mother + Rh+ baby → erythroblastosis fetalis.",
          bodyAm:
            "4 chambers, 4 valves።\n" +
            "Pulmonary artery = deoxy።\n" +
            "RBC = O₂።\n" +
            "WBC = immunity።\n" +
            "Platelets = clotting።",
        },
      ],
    },

    {
      id: "n3",
      title: "5.3 The Respiratory System",
      titleAm: "5.3 የመተንፈስ ሥርዓት",
      body:
        "Abatu, the RESPIRATORY SYSTEM brings oxygen INTO the body and removes carbon dioxide OUT. It works closely with the circulatory system.",
      bodyAm:
        "መተንፈስ: O₂ ወደ ውስጥ, CO₂ ወደ ውጭ።",
      children: [
        {
          id: "n3-1",
          title: "Path of air",
          titleAm: "የአየር መንገድ",
          body:
            "PATH OF AIR:\n" +
            "1) NOSE (nasal cavity) — warms, moistens, filters air\n" +
            "2) PHARYNX — throat\n" +
            "3) LARYNX — voice box (vocal cords); epiglottis covers during swallowing\n" +
            "4) TRACHEA — windpipe; cartilage rings; cilia + mucus\n" +
            "5) BRONCHI — 2 branches (left + right)\n" +
            "6) BRONCHIOLES — smaller branches\n" +
            "7) ALVEOLI — tiny air sacs; GAS EXCHANGE site\n\n" +
            "ALVEOLI are adapted for gas exchange:\n" +
            "• Millions of them (huge surface area)\n" +
            "• Thin walls (one cell thick)\n" +
            "• Moist\n" +
            "• Surrounded by capillaries\n" +
            "• Elastic (expand and recoil)",
          bodyAm:
            "መንገድ: አፍንጫ → pharynx → larynx → trachea → bronchi → bronchioles → alveoli።\n" +
            "Alveoli = exchange site።",
        },
        {
          id: "n3-2",
          title: "Breathing mechanism",
          titleAm: "የመተንፈስ ሂደት",
          body:
            "INHALATION (breathing IN):\n" +
            "• DIAPHRAGM CONTRACTS → flattens (moves DOWN)\n" +
            "• INTERCOSTAL MUSCLES contract → ribs lift UP and OUT\n" +
            "• Volume of chest INCREASES\n" +
            "• Pressure inside chest DECREASES\n" +
            "• Air RUSHES IN\n\n" +
            "EXHALATION (breathing OUT):\n" +
            "• DIAPHRAGM RELAXES → dome shape (moves UP)\n" +
            "• INTERCOSTAL MUSCLES relax → ribs drop DOWN\n" +
            "• Volume DECREASES\n" +
            "• Pressure INCREASES\n" +
            "• Air PUSHED OUT\n\n" +
            "EXCHANGE:\n" +
            "• Alveoli → blood: O₂ diffuses INTO blood\n" +
            "• Blood → alveoli: CO₂ diffuses INTO lungs\n" +
            "• Driven by CONCENTRATION GRADIENTS",
          bodyAm:
            "Inhale: diaphragm ወደ ታች, ribs ወደ ላይ, volume ↑, pressure ↓, አየር ወደ ውስጥ።\n" +
            "Exhale: diaphragm ወደ ላይ, ribs ወደ ታች, volume ↓, pressure ↑, አየር ወደ ውጭ።",
        },
        {
          id: "n3-3",
          title: "Cell respiration",
          titleAm: "የሴል መተንፈስ",
          body:
            "CELL RESPIRATION:\n" +
            "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ENERGY (ATP)\n\n" +
            "• Happens in MITOCHONDRIA\n" +
            "• Uses O₂ from lungs, glucose from food\n" +
            "• Releases CO₂ (exhaled) + H₂O + energy\n" +
            "• Energy powers all cell activities\n\n" +
            "Comparison:\n" +
            "• INHALED air: ~21% O₂, ~0.04% CO₂\n" +
            "• EXHALED air: ~16% O₂, ~4% CO₂\n" +
            "• Exhaled air is warmer and contains more water vapour",
          bodyAm:
            "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + energy።\n" +
            "ሚቶኮንድሪያ።\n" +
            "Inhaled: 21% O₂።\n" +
            "Exhaled: 16% O₂, 4% CO₂።",
        },
        {
          id: "n3-4",
          title: "Disorders of respiratory system",
          titleAm: "የመተንፈስ ጉድለቶች",
          body:
            "• ASTHMA — narrowed bronchioles; wheezing\n" +
            "• BRONCHITIS — inflammation of bronchi\n" +
            "• PNEUMONIA — infection of alveoli\n" +
            "• TUBERCULOSIS (TB) — bacterial infection of lungs\n" +
            "• EMPHYSEMA — alveoli damaged (smoking)\n" +
            "• LUNG CANCER — smoking is main cause",
          bodyAm:
            "Asthma, bronchitis, pneumonia, TB, emphysema, lung cancer።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap — Respiratory",
          titleAm: "⚠ አትርሳ — መተንፈስ",
          body:
            "• Air path: nose → pharynx → larynx → trachea → bronchi → bronchioles → alveoli.\n" +
            "• ALVEOLI = gas exchange site.\n" +
            "• Inhale: diaphragm DOWN, ribs UP, volume ↑, air in.\n" +
            "• Exhale: diaphragm UP, ribs DOWN, volume ↓, air out.\n" +
            "• O₂ diffuses INTO blood; CO₂ diffuses OUT.\n" +
            "• Epiglottis prevents choking.\n" +
            "• Cellular respiration in MITOCHONDRIA.\n" +
            "• Exhaled air: less O₂, more CO₂ than inhaled.",
          bodyAm:
            "Alveoli = exchange።\n" +
            "Inhale: diaphragm down።\n" +
            "Exhale: diaphragm up።\n" +
            "Epiglottis = choking መከላከያ።",
        },
      ],
    },

    {
      id: "n4",
      title: "5.4 The Excretory System",
      titleAm: "5.4 የመጣል ሥርዓት",
      body:
        "Abatu, the EXCRETORY SYSTEM removes wastes (urea, excess water, salts) from the body. The main organ is the KIDNEY.",
      bodyAm:
        "መጣል: ቆሻሻ (urea, ውሃ, ጨው) ማስወገድ። ኩላሊት ዋና አካል ነው።",
      children: [
        {
          id: "n4-1",
          title: "Excretory organs",
          titleAm: "የመጣል አካላት",
          body:
            "EXCRETORY ORGANS:\n" +
            "• KIDNEYS (2) — main excretory organ; produce urine\n" +
            "• URETERS (2) — carry urine from kidney to bladder\n" +
            "• URINARY BLADDER — stores urine\n" +
            "• URETHRA — carries urine out of body\n\n" +
            "OTHER EXCRETORY ORGANS:\n" +
            "• LUNGS — excrete CO₂ + water vapour\n" +
            "• SKIN — excretes sweat (water + salts + urea)\n" +
            "• LIVER — breaks down toxins, makes urea",
          bodyAm:
            "ኩላሊት, ureters, bladder, urethra።\n" +
            "ሳንባ = CO₂።\n" +
            "ቆዳ = ላብ።",
        },
        {
          id: "n4-2",
          title: "Kidney structure",
          titleAm: "የኩላሊት አወቃቀር",
          body:
            "KIDNEY has 3 main regions:\n" +
            "• CORTEX (outer) — contains glomeruli + Bowman's capsules\n" +
            "• MEDULLA (middle) — loops of Henle + collecting ducts\n" +
            "• PELVIS (inner) — collects urine → ureter\n\n" +
            "NEPHRON — functional unit (~1 million per kidney):\n" +
            "• GLOMERULUS — tuft of capillaries\n" +
            "• BOWMAN'S CAPSULE — surrounds glomerulus; site of FILTRATION\n" +
            "• PROXIMAL TUBULE — reabsorption\n" +
            "• LOOP OF HENLE — water/ion balance\n" +
            "• DISTAL TUBULE — more reabsorption\n" +
            "• COLLECTING DUCT — collects urine → renal pelvis",
          bodyAm:
            "Cortex, medulla, pelvis።\n" +
            "Nephron: glomerulus + Bowman's + tubules።",
        },
        {
          id: "n4-3",
          title: "Urine formation — 3 stages",
          titleAm: "የሽንት ምስረታ — 3 ደረጃዎች",
          body:
            "1) FILTRATION (in glomerulus + Bowman's capsule):\n" +
            "• Blood pressure forces small molecules OUT of blood\n" +
            "• Filtered: water, glucose, amino acids, ions, urea\n" +
            "• NOT filtered: proteins, blood cells (too large)\n\n" +
            "2) REABSORPTION (in proximal tubule, loop of Henle, distal tubule):\n" +
            "• Useful substances returned to blood\n" +
            "• Reabsorbed: ALL glucose, amino acids, most water, needed ions\n" +
            "• NOT reabsorbed: excess water, urea, excess ions → stay in urine\n\n" +
            "3) SECRETION (in tubules):\n" +
            "• Additional wastes from blood → added to filtrate\n" +
            "• Includes H+, K+, drugs\n\n" +
            "RESULT: URINE (water + urea + excess ions)",
          bodyAm:
            "1) Filtration — glomerulus።\n" +
            "2) Reabsorption — glucose, amino acids, ውሃ።\n" +
            "3) Secretion — H+, K+።\n" +
            "ውጤት: ሽንት።",
        },
        {
          id: "n4-4",
          title: "Functions of the kidney",
          titleAm: "የኩላሊት ተግባራት",
          body:
            "• FILTER blood → remove urea + toxins\n" +
            "• BALANCE water (osmoregulation)\n" +
            "• REGULATE ions (Na⁺, K⁺, Cl⁻, H⁺)\n" +
            "• REGULATE blood pH\n" +
            "• REGULATE blood pressure (renin)\n" +
            "• PRODUCE erythropoietin (stimulates RBC production)\n" +
            "• ACTIVATE vitamin D\n" +
            "• PRODUCE urine",
          bodyAm:
            "ማጣራት, ውሃ, አዮኖች, pH, BP, erythropoietin, vitamin D, ሽንት።",
        },
        {
          id: "n4-5",
          title: "Kidney diseases & dialysis",
          titleAm: "የኩላሊት በሽታዎች",
          body:
            "• KIDNEY STONES — mineral crystals in kidney\n" +
            "• NEPHRITIS — inflammation of nephrons\n" +
            "• KIDNEY FAILURE — loss of kidney function\n" +
            "• URINARY TRACT INFECTION (UTI) — bacterial infection\n\n" +
            "DIALYSIS — artificial filtering of blood when kidneys fail:\n" +
            "• Blood pumped through a machine with semipermeable membrane\n" +
            "• Wastes removed; clean blood returned\n" +
            "• Needed multiple times per week",
          bodyAm:
            "Stones, nephritis, failure, UTI።\n" +
            "Dialysis = ሰው ሠራሽ ማጣሪያ።",
        },
        {
          id: "n4-6",
          title: "⚠ Remember trap — Excretory",
          titleAm: "⚠ አትርሳ — መጣል",
          body:
            "• Kidney = main excretory organ.\n" +
            "• NEPHRON = functional unit.\n" +
            "• Filtration in GLOMERULUS/Bowman's capsule.\n" +
            "• Reabsorption in TUBULES (glucose, amino acids, water).\n" +
            "• Secretion adds wastes.\n" +
            "• Urine = water + urea + excess ions.\n" +
            "• Kidneys also regulate blood pressure + RBC production.\n" +
            "• Dialysis = artificial filtering.",
          bodyAm:
            "Nephron = አሃድ።\n" +
            "Filtration: glomerulus።\n" +
            "Reabsorption: tubules።\n" +
            "Urine = ውሃ + urea።",
        },
      ],
    },

    {
      id: "n5",
      title: "5.5 Lymphatic and Immune System",
      titleAm: "5.5 ሊምፍና ተከላካይ ሥርዓት",
      body:
        "Abatu, the LYMPHATIC SYSTEM returns excess fluid to blood and helps fight infection. The IMMUNE SYSTEM defends against disease.",
      bodyAm:
        "ሊምፍ = ፈሳሽ ማስተላለፍ። ተከላካይ = በሽታ መከላከል።",
      children: [
        {
          id: "n5-1",
          title: "Lymphatic system components",
          titleAm: "የሊምፍ ሥርዓት ክፍሎች",
          body:
            "COMPONENTS:\n" +
            "• LYMPH — clear fluid; similar to plasma but fewer proteins\n" +
            "• LYMPHATIC VESSELS — carry lymph; empty into veins (open system)\n" +
            "• LYMPH NODES — filter lymph; contain white blood cells\n" +
            "• SPLEEN — filters blood; recycles RBCs; immune role\n" +
            "• THYMUS — where T-lymphocytes mature\n" +
            "• TONSILS — trap pathogens at throat\n" +
            "• BONE MARROW — produces blood cells\n\n" +
            "FUNCTIONS:\n" +
            "• Return tissue fluid to blood\n" +
            "• Absorb fats from small intestine (lacteals)\n" +
            "• Defend against pathogens (WBCs)",
          bodyAm:
            "Lymph, vessels, nodes, spleen, thymus, tonsils, marrow።\n" +
            "ተግባር: ፈሳሽ መመለስ፣ fat መሳብ፣ መከላከል።",
        },
        {
          id: "n5-2",
          title: "Types of immunity",
          titleAm: "የተከላካይ ዓይነቶች",
          body:
            "IMMUNITY = ability to resist infection.\n\n" +
            "INNATE (NON-SPECIFIC) IMMUNITY:\n" +
            "• Present from birth\n" +
            "• Same response to any pathogen\n" +
            "• Examples: skin, mucus, cilia, stomach acid, phagocytes\n\n" +
            "ADAPTIVE (SPECIFIC) IMMUNITY:\n" +
            "• Targeted to specific pathogens\n" +
            "• Involves lymphocytes (B + T cells)\n" +
            "• Creates MEMORY\n\n" +
            "ACTIVE IMMUNITY:\n" +
            "• Body MAKES its own antibodies\n" +
            "• From infection OR vaccination\n" +
            "• LONG-LASTING\n\n" +
            "PASSIVE IMMUNITY:\n" +
            "• Antibodies GIVEN from outside\n" +
            "• From mother (breast milk, placenta) OR antiserum\n" +
            "• SHORT-LASTING\n\n" +
            "NATURAL vs ARTIFICIAL:\n" +
            "• NATURAL = from normal life (infection, breastfeeding)\n" +
            "• ARTIFICIAL = medical (vaccines, antiserum)",
          bodyAm:
            "Innate vs adaptive።\n" +
            "Active = ራሱ ያመርታል።\n" +
            "Passive = ተሰጥቶ።\n" +
            "Natural = ተፈጥሯዊ።\n" +
            "Artificial = ሰው ሠራሽ።",
        },
        {
          id: "n5-3",
          title: "Vaccines",
          titleAm: "ክትባቶች",
          body:
            "VACCINE = a preparation that gives ACTIVE immunity without causing disease.\n\n" +
            "HOW IT WORKS:\n" +
            "• Contains WEAKENED or DEAD pathogens (or their antigens)\n" +
            "• Body mounts immune response\n" +
            "• MEMORY CELLS formed\n" +
            "• On future exposure → rapid response → protection\n\n" +
            "EXAMPLES:\n" +
            "• BCG (TB)\n" +
            "• Polio\n" +
            "• Measles, mumps, rubella (MMR)\n" +
            "• COVID-19\n" +
            "• Tetanus\n\n" +
            "HERD IMMUNITY: widespread vaccination protects even unvaccinated people.",
          bodyAm:
            "ቫክሲን = የዷከ/የሞተ ተህዋስ።\n" +
            "Memory cells ይፈጠራሉ።\n" +
            "Herd immunity።",
        },
        {
          id: "n5-4",
          title: "⚠ Remember trap — Immune",
          titleAm: "⚠ አትርሳ — ተከላካይ",
          body:
            "• Lymphatic = OPEN system (empties into veins).\n" +
            "• Spleen = filters blood; thymus = T-cell maturation.\n" +
            "• Innate = from birth, nonspecific.\n" +
            "• Adaptive = specific, memory.\n" +
            "• Active = body makes antibodies; long-lasting.\n" +
            "• Passive = antibodies given; short-lasting.\n" +
            "• Natural = from life; artificial = medical.\n" +
            "• Vaccine = active, artificial immunity.\n" +
            "• Breast milk gives passive, natural immunity.",
          bodyAm:
            "Active vs passive።\n" +
            "Natural vs artificial።\n" +
            "ቫክሲን = active+artificial።",
        },
      ],
    },

    {
      id: "nRef",
      title: "Reference Sheet — Unit 5",
      titleAm: "የማጣቀሻ ሉህ — ክፍል 5",
      body:
        "FOOD PATH: Mouth → Esophagus → Stomach → Small intestine → Large intestine → Anus.\n\n" +
        "ENZYMES:\n" +
        "• Salivary amylase = starch → maltose\n" +
        "• Pepsin = protein → peptides (stomach)\n" +
        "• Trypsin = protein → peptides\n" +
        "• Lipase = fats → fatty acids + glycerol\n" +
        "• Maltase = maltose → glucose\n" +
        "• Bile (not enzyme) = emulsifies fats\n\n" +
        "HEART: 4 chambers (RA, RV, LA, LV) + 4 valves (tricuspid, pulmonary, bicuspid, aortic).\n\n" +
        "BLOOD VESSELS: arteries (away), veins (toward), capillaries (exchange).\n\n" +
        "BLOOD: plasma, RBC (O₂), WBC (immunity), platelets (clotting).\n\n" +
        "BLOOD GROUPS: A, B, AB (universal recipient), O (universal donor). Rh+ / Rh−.\n\n" +
        "RESPIRATORY PATH: nose → pharynx → larynx → trachea → bronchi → bronchioles → alveoli.\n\n" +
        "BREATHING: inhale = diaphragm down; exhale = diaphragm up.\n\n" +
        "KIDNEY: cortex, medulla, pelvis; nephron = glomerulus + Bowman's + tubules.\n\n" +
        "URINE FORMATION: filtration → reabsorption → secretion.\n\n" +
        "IMMUNITY: active (long), passive (short); natural vs artificial.",
      bodyAm:
        "ሰንጠረዡን አስታውስ።",
    },

    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 5",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1) Food path order: mouth → esophagus → stomach → small → large → anus.\n" +
        "2) Salivary amylase = starch → maltose.\n" +
        "3) Pepsin = protein in stomach.\n" +
        "4) Bile is NOT an enzyme; emulsifies fats.\n" +
        "5) Small intestine = main absorption via villi.\n" +
        "6) 4 types of teeth: incisors, canines, premolars, molars.\n" +
        "7) Heart = 4 chambers + 4 valves.\n" +
        "8) Left ventricle = thickest wall.\n" +
        "9) Pulmonary artery = deoxygenated blood.\n" +
        "10) Pulmonary vein = oxygenated blood.\n" +
        "11) Arteries = away from heart; veins = toward heart.\n" +
        "12) RBC = no nucleus, hemoglobin.\n" +
        "13) WBC = nucleus, immunity.\n" +
        "14) Platelets = clotting.\n" +
        "15) O− = universal donor; AB+ = universal recipient.\n" +
        "16) Air path: nose → pharynx → larynx → trachea → bronchi → bronchioles → alveoli.\n" +
        "17) Alveoli = gas exchange.\n" +
        "18) Inhale: diaphragm DOWN; exhale: diaphragm UP.\n" +
        "19) Nephron = functional unit of kidney.\n" +
        "20) Urine formation: filtration → reabsorption → secretion.\n" +
        "21) Lymphatic = open system.\n" +
        "22) Active immunity = long; passive = short.\n" +
        "23) Vaccine = active + artificial immunity.\n" +
        "24) Breast milk = passive + natural.",
      bodyAm:
        "ወጥመዶቹን ሁሉ አስታውስ።",
    },
  ],

  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "The main function of the digestive system is:", options: ["To breathe", "To break down food + absorb nutrients", "To pump blood", "To filter blood"], answer: "1", explanation: "Break down food + absorb nutrients." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "The path of food starts at the:", options: ["Stomach", "Mouth", "Esophagus", "Small intestine"], answer: "1", explanation: "Mouth." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Salivary amylase digests:", options: ["Protein", "Fat", "Starch", "Vitamins"], answer: "2", explanation: "Starch → maltose." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Which enzyme digests protein in the stomach?", options: ["Amylase", "Lipase", "Pepsin", "Maltase"], answer: "2", explanation: "Pepsin." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Bile is produced by the:", options: ["Stomach", "Liver", "Pancreas", "Small intestine"], answer: "1", explanation: "Liver." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Most absorption happens in the:", options: ["Stomach", "Small intestine", "Large intestine", "Esophagus"], answer: "1", explanation: "Small intestine." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Teeth that CUT food are:", options: ["Incisors", "Canines", "Premolars", "Molars"], answer: "0", explanation: "Incisors = cutting." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Teeth that TEAR food are:", options: ["Incisors", "Canines", "Premolars", "Molars"], answer: "1", explanation: "Canines = tearing." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "How many permanent teeth does an adult have?", options: ["20", "28", "32", "36"], answer: "2", explanation: "32." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "How many chambers does the human heart have?", options: ["2", "3", "4", "5"], answer: "2", explanation: "4 chambers." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Which chamber pumps blood to the whole body?", options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"], answer: "3", explanation: "Left ventricle (thickest wall)." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Arteries carry blood:", options: ["Toward the heart", "Away from the heart", "Only to the lungs", "Only to the brain"], answer: "1", explanation: "Away from heart." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Veins carry blood:", options: ["Toward the heart", "Away from the heart", "Only to the lungs", "Only to the brain"], answer: "0", explanation: "Toward heart." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "The liquid part of blood is:", options: ["Plasma", "RBC", "WBC", "Platelets"], answer: "0", explanation: "Plasma." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Red blood cells carry:", options: ["Antibodies", "Oxygen", "Clotting factors", "Hormones only"], answer: "1", explanation: "Oxygen (via hemoglobin)." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "White blood cells are responsible for:", options: ["Oxygen transport", "Clotting", "Immunity", "Nutrient transport"], answer: "2", explanation: "Immunity." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Platelets are important for:", options: ["Oxygen transport", "Blood clotting", "Immunity", "Digestion"], answer: "1", explanation: "Clotting." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Universal donor blood group is:", options: ["A", "B", "AB", "O"], answer: "3", explanation: "O (no antigens)." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "Universal recipient blood group is:", options: ["A", "B", "AB", "O"], answer: "2", explanation: "AB (no antibodies)." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "The path of air starts at the:", options: ["Trachea", "Nose", "Alveoli", "Larynx"], answer: "1", explanation: "Nose." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Gas exchange in lungs happens in the:", options: ["Trachea", "Bronchi", "Alveoli", "Larynx"], answer: "2", explanation: "Alveoli." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "During inhalation, the diaphragm:", options: ["Rises up", "Flattens down", "Stays still", "Disappears"], answer: "1", explanation: "Diaphragm contracts → flattens down." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "During exhalation, the diaphragm:", options: ["Flattens", "Rises (dome shape)", "Stays still", "Disappears"], answer: "1", explanation: "Diaphragm relaxes → rises." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "The voice box is called the:", options: ["Pharynx", "Larynx", "Trachea", "Bronchus"], answer: "1", explanation: "Larynx." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "The main excretory organ is the:", options: ["Liver", "Kidney", "Lung", "Skin"], answer: "1", explanation: "Kidney." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "The functional unit of kidney is the:", options: ["Glomerulus", "Nephron", "Neuron", "Alveolus"], answer: "1", explanation: "Nephron." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Urine is stored in the:", options: ["Kidney", "Ureter", "Bladder", "Urethra"], answer: "2", explanation: "Bladder." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Filtration in kidney happens in the:", options: ["Glomerulus + Bowman's capsule", "Loop of Henle", "Distal tubule", "Collecting duct"], answer: "0", explanation: "Glomerulus + Bowman's capsule." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "What is the main fluid in the lymphatic system?", options: ["Blood", "Lymph", "Urine", "Bile"], answer: "1", explanation: "Lymph." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "Antibodies are produced by:", options: ["RBCs", "WBCs", "Platelets", "Plasma"], answer: "1", explanation: "WBCs (lymphocytes)." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "Vaccines create:", options: ["Passive immunity", "Active immunity", "No immunity", "Natural immunity only"], answer: "1", explanation: "Active immunity." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "Breast milk provides which kind of immunity?", options: ["Active", "Passive", "Neither", "Both equally"], answer: "1", explanation: "Passive immunity (antibodies given)." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "The spleen is part of the:", options: ["Digestive system", "Respiratory system", "Lymphatic system", "Excretory system"], answer: "2", explanation: "Lymphatic system." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "Which does NOT belong to the excretory system?", options: ["Kidney", "Bladder", "Urethra", "Heart"], answer: "3", explanation: "Heart = circulatory." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "The epiglottis prevents:", options: ["Breathing", "Choking (food into trachea)", "Digestion", "Heart beat"], answer: "1", explanation: "Prevents choking." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "Pulmonary circulation goes:", options: ["Heart → body", "Heart → lungs → heart", "Lungs → body", "Body → brain"], answer: "1", explanation: "Heart → lungs → heart." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "Systemic circulation goes:", options: ["Heart → lungs", "Heart → body → heart", "Lungs → body", "Lungs → brain"], answer: "1", explanation: "Heart → body → heart." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "Hemoglobin contains which element?", options: ["Calcium", "Iron", "Iodine", "Sodium"], answer: "1", explanation: "Iron." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "Emphysema mainly affects the:", options: ["Heart", "Liver", "Alveoli", "Kidney"], answer: "2", explanation: "Alveoli (damaged)." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "Anemia is caused by deficiency of:", options: ["Iron", "Iodine", "Calcium", "Sodium"], answer: "0", explanation: "Iron deficiency → anemia." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Which enzyme digests fats?", options: ["Amylase", "Pepsin", "Lipase", "Maltase"], answer: "2", explanation: "Lipase." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "The correct sequence of the alimentary canal is:", options: ["Mouth, esophagus, stomach, small intestine, large intestine, anus", "Mouth, stomach, esophagus, small intestine, large intestine, anus", "Mouth, small intestine, stomach, large intestine, anus", "Mouth, esophagus, stomach, large intestine, small intestine, anus"], answer: "0", explanation: "Correct sequence." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "The most acidic part of the digestive tract is the:", options: ["Mouth", "Stomach", "Small intestine", "Large intestine"], answer: "1", explanation: "Stomach (HCl, pH~2)." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "Which is NOT a function of liver?", options: ["Produces bile", "Detoxifies chemicals", "Stores glycogen", "Absorbs water"], answer: "3", explanation: "Water absorption = large intestine." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "Villi in the small intestine are important because they:", options: ["Absorb water", "Increase surface area for absorption", "Store fats", "Produce enzymes"], answer: "1", explanation: "Increase surface area." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "Which is NOT a type of tooth?", options: ["Incisor", "Canine", "Premolar", "Villus"], answer: "3", explanation: "Villus is not a tooth." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "Peristalsis moves food through the:", options: ["Trachea", "Esophagus", "Blood vessels", "Lungs"], answer: "1", explanation: "Esophagus (also other parts of GI)." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "The function of HCL in the stomach is:", options: ["Digest fats", "Kill bacteria + activate pepsin", "Absorb nutrients", "Neutralize stomach acid"], answer: "1", explanation: "Kills bacteria + activates pepsin." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "Which side of the heart pumps to the body?", options: ["Right side", "Left side", "Both equally", "Neither"], answer: "1", explanation: "Left side → body." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Which valve prevents backflow from LV to LA?", options: ["Tricuspid", "Pulmonary", "Bicuspid (mitral)", "Aortic"], answer: "2", explanation: "Bicuspid/mitral." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "The largest artery in the body is:", options: ["Pulmonary", "Aorta", "Vena cava", "Coronary"], answer: "1", explanation: "Aorta." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "Which blood vessel type has valves to prevent backflow?", options: ["Arteries", "Veins", "Capillaries", "Aorta"], answer: "1", explanation: "Veins." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "Which blood vessel type is one cell thick?", options: ["Arteries", "Veins", "Capillaries", "Aorta"], answer: "2", explanation: "Capillaries." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "RBCs have no nucleus because:", options: ["They are dead", "They need more space for hemoglobin", "They are bacteria", "They are not real cells"], answer: "1", explanation: "More space for hemoglobin = more O₂." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "Which blood cell has a nucleus?", options: ["RBC", "WBC", "Platelet", "None"], answer: "1", explanation: "WBC has nucleus." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "The Rh factor is important in:", options: ["Digestion", "Pregnancy (Rh incompatibility)", "Breathing", "Vision"], answer: "1", explanation: "Rh incompatibility in pregnancy." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "A person with type A blood has which antibody?", options: ["Anti-A", "Anti-B", "Both", "Neither"], answer: "1", explanation: "Type A → anti-B antibody." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Which pathogen is TB caused by?", options: ["Virus", "Bacterium", "Fungus", "Protozoan"], answer: "1", explanation: "Bacterium (Mycobacterium tuberculosis)." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Alveoli are efficient at gas exchange because:", options: ["Thick walls", "One cell thick walls", "Small surface area", "Dry surface"], answer: "1", explanation: "Thin walls → fast diffusion." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "Which does NOT cause respiratory disorders?", options: ["Smoking", "Air pollution", "Exercise", "Bacteria"], answer: "2", explanation: "Exercise strengthens lungs." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "Inhaled air contains more of which gas than exhaled?", options: ["CO₂", "O₂", "Water vapour", "Nitrogen"], answer: "1", explanation: "Inhaled O₂ ~21%; exhaled ~16%." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Kidney stones are:", options: ["Muscle growths", "Mineral crystals in the kidney", "Blood clots", "Lymph nodes"], answer: "1", explanation: "Mineral crystals." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "Which structure carries urine from kidney to bladder?", options: ["Urethra", "Ureter", "Uterus", "Vas deferens"], answer: "1", explanation: "Ureter." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "The kidney regulates all EXCEPT:", options: ["Water balance", "Ion balance", "Blood pH", "Vision"], answer: "3", explanation: "Vision = eyes." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Which is NOT a function of the lymphatic system?", options: ["Return tissue fluid to blood", "Absorb fats", "Produce urine", "Defend against pathogens"], answer: "2", explanation: "Produce urine = kidneys." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "Which is an example of ACTIVE natural immunity?", options: ["Vaccine", "Breast milk", "Having had an infection", "Antiserum injection"], answer: "2", explanation: "Natural infection = active natural." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "Which is an example of PASSIVE natural immunity?", options: ["Vaccine", "Breast milk", "Infection", "Antiserum"], answer: "1", explanation: "Breast milk = passive natural." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "Which is an example of ACTIVE artificial immunity?", options: ["Vaccine", "Breast milk", "Infection", "Antiserum"], answer: "0", explanation: "Vaccine = active artificial." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "Which is an example of PASSIVE artificial immunity?", options: ["Vaccine", "Breast milk", "Infection", "Antiserum injection"], answer: "3", explanation: "Antiserum = passive artificial." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "The thymus is important for:", options: ["B cell maturation", "T cell maturation", "Red blood cell production", "Platelet formation"], answer: "1", explanation: "T cell maturation." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Vaccines contain:", options: ["Living pathogens only", "Weakened or dead pathogens", "Only water", "Antibiotics"], answer: "1", explanation: "Weakened or dead pathogens." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "Mucus in the nose helps by:", options: ["Cooling air", "Trapping particles + moistening air", "Increasing gas exchange", "Producing enzymes"], answer: "1", explanation: "Traps + moistens." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "Which type of blood cell lacks nucleus?", options: ["RBC", "WBC", "Platelet", "All have nucleus"], answer: "0", explanation: "RBC (mammalian)." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "Stroke is caused by:", options: ["Blocked lung vessels", "Blocked or burst blood vessel in brain", "Damaged heart valve", "Kidney failure"], answer: "1", explanation: "Brain vessel blockage." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Most common risk factor for lung cancer is:", options: ["Exercise", "Smoking", "Drinking water", "Sunlight"], answer: "1", explanation: "Smoking." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "Which structure is the site of FERTILIZATION for the Rh factor issue?", options: ["Heart", "Placenta (mother-baby)", "Lungs", "Kidney"], answer: "1", explanation: "Placenta (Rh incompatibility between mother and fetus)." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "If both parents are Rh- and baby is Rh-, the baby:", options: ["Has erythroblastosis fetalis", "Is normal (no incompatibility)", "Has Down syndrome", "Has leukemia"], answer: "1", explanation: "No incompatibility." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "The exchange of gases in the alveoli occurs by:", options: ["Active transport", "Diffusion", "Osmosis", "Endocytosis"], answer: "1", explanation: "Diffusion (concentration gradient)." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "Which body part is NOT part of the digestive tract?", options: ["Stomach", "Small intestine", "Liver", "Large intestine"], answer: "2", explanation: "Liver = accessory organ." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "Which is the MAIN function of the large intestine?", options: ["Protein digestion", "Fat digestion", "Water absorption", "Bile production"], answer: "2", explanation: "Water absorption." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Which structure does NOT belong to the digestive system?", options: ["Pancreas", "Liver", "Kidney", "Gallbladder"], answer: "2", explanation: "Kidney = excretory." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "Which is NOT true about enzymes?", options: ["They are proteins", "They are biological catalysts", "They are consumed in reactions", "They are specific"], answer: "2", explanation: "Enzymes are NOT consumed." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "A person with blood type O has:", options: ["A and B antigens", "A antigen only", "No antigens, both antibodies", "B antigen only"], answer: "2", explanation: "No antigens; both antibodies." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Which statement about AB blood type is TRUE?", options: ["Has both antibodies", "Has both A and B antigens", "Universal donor", "No antigens"], answer: "1", explanation: "AB = both A and B antigens (universal recipient)." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "Which is TRUE about RBC lifespan?", options: ["A few hours", "~120 days", "~10 years", "Entire lifespan"], answer: "1", explanation: "~120 days." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "If mother is Rh- and fetus is Rh+, mother's immune system will:", options: ["Attack her own RBCs", "Produce anti-Rh antibodies that may affect fetus", "Have no response", "Produce only anti-A antibodies"], answer: "1", explanation: "Mother produces anti-Rh antibodies (affects future pregnancies)." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "Most gas exchange happens in:", options: ["Trachea", "Bronchi", "Alveoli", "Larynx"], answer: "2", explanation: "Alveoli." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "The kidney helps in RBC production by producing:", options: ["Insulin", "Erythropoietin", "Bile", "Renin"], answer: "1", explanation: "Erythropoietin stimulates RBC production." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "Dialysis is needed when:", options: ["Heart fails", "Kidneys fail", "Lungs fail", "Liver fails"], answer: "1", explanation: "Kidney failure." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "Which is NOT a function of lymphatic system?", options: ["Return fluid", "Absorb fats", "Defend body", "Digest starch"], answer: "3", explanation: "Starch digestion = amylase." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "The correct order of urine formation is:", options: ["Reabsorption, filtration, secretion", "Filtration, reabsorption, secretion", "Secretion, reabsorption, filtration", "Filtration, secretion, reabsorption"], answer: "1", explanation: "Filtration → reabsorption → secretion." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "During REABSORPTION in kidney tubules, which is NOT reabsorbed?", options: ["Glucose", "Amino acids", "Most water", "Urea"], answer: "3", explanation: "Urea stays in urine (waste)." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Which blood cell fights infection most directly?", options: ["RBC", "WBC", "Platelet", "Plasma"], answer: "1", explanation: "WBC." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Hemoglobin is found in:", options: ["Plasma", "RBC", "WBC", "Platelets"], answer: "1", explanation: "RBC." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "If a cell in a villus absorbs a fatty acid, where does it go first?", options: ["Blood capillary", "Lacteal (lymph vessel)", "Aorta", "Stomach"], answer: "1", explanation: "Lacteal → lymphatic system." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "Which of these is a FALSE statement?", options: ["Villi increase absorption surface", "Saliva contains mucus", "Bile is an enzyme", "Amylase breaks down starch"], answer: "2", explanation: "Bile is NOT an enzyme; it emulsifies fats." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "The main difference between inhaled and exhaled air is:", options: ["Exhaled has more O₂", "Exhaled has less O₂ and more CO₂", "Both are the same", "Exhaled has no water"], answer: "1", explanation: "Exhaled: less O₂, more CO₂, more water vapour." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "Which of these is a NON-specific defense?", options: ["Antibodies against measles", "Skin as a barrier", "Memory B cells", "Vaccine-induced immunity"], answer: "1", explanation: "Skin = innate nonspecific defense." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "A patient with severe kidney disease might show:", options: ["High RBC count", "Anemia (low RBC)", "Stronger bones", "Improved eyesight"], answer: "1", explanation: "Low erythropoietin → anemia." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "Herd immunity means:", options: ["Only one person immune", "Widespread immunity protects unvaccinated people", "No immunity in population", "Immunity only in animals"], answer: "1", explanation: "Widespread immunity protects the whole population." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "easy", stem: "List the path of food through the digestive system.", answer: "Mouth → Esophagus → Stomach → Small intestine → Large intestine → Rectum → Anus.\n\nAccessory organs: salivary glands, liver, gallbladder, pancreas.", explanation: "8 main organs." },
    { id: "q102", type: "short", difficulty: "easy", stem: "Name the 4 types of teeth and their functions.", answer: "1) INCISORS — cutting\n2) CANINES — tearing\n3) PREMOLARS — grinding\n4) MOLARS — crushing/grinding\n\nAdults have 32 permanent teeth; children have 20 baby teeth.", explanation: "Incisors, canines, premolars, molars." },
    { id: "q103", type: "short", difficulty: "easy", stem: "List the 4 chambers of the heart.", answer: "1) RIGHT ATRIUM — receives deoxygenated blood from body\n2) RIGHT VENTRICLE — pumps blood to lungs\n3) LEFT ATRIUM — receives oxygenated blood from lungs\n4) LEFT VENTRICLE — pumps oxygenated blood to body (thickest wall)", explanation: "RA, RV, LA, LV." },
    { id: "q104", type: "short", difficulty: "easy", stem: "List the 4 valves of the heart.", answer: "1) TRICUSPID — RA → RV\n2) PULMONARY — RV → pulmonary artery\n3) BICUSPID/MITRAL — LA → LV\n4) AORTIC — LV → aorta", explanation: "4 valves." },
    { id: "q105", type: "short", difficulty: "medium", stem: "Describe the digestive enzymes and their functions.", answer: "• SALIVARY AMYLASE (mouth) — starch → maltose\n• PEPSIN (stomach) — protein → peptides\n• TRYPSIN (small intestine) — protein → peptides\n• LIPASE (small intestine) — fats → fatty acids + glycerol\n• MALTASE (small intestine) — maltose → glucose\n\nBile (not enzyme) — emulsifies fats.", explanation: "Know at least 4 enzymes." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Describe the two types of blood circulation.", answer: "PULMONARY circulation (right side):\n• Heart → lungs → heart\n• Oxygenates blood\n\nSYSTEMIC circulation (left side):\n• Heart → body → heart\n• Delivers O₂ to cells, removes wastes\n\nBoth are needed for oxygen transport.", explanation: "Pulmonary = to lungs; systemic = to body." },
    { id: "q107", type: "short", difficulty: "medium", stem: "List the 4 blood components and their functions.", answer: "1) PLASMA — liquid; carries nutrients, hormones, wastes\n2) RBC — contains hemoglobin; carries O₂\n3) WBC — immunity; fights pathogens\n4) PLATELETS — blood clotting", explanation: "Plasma, RBC, WBC, platelets." },
    { id: "q108", type: "short", difficulty: "medium", stem: "Describe the ABO + Rh blood types.", answer: "ABO system:\n• A — A antigen, anti-B antibody\n• B — B antigen, anti-A antibody\n• AB — A + B antigens, NO antibodies (universal recipient)\n• O — NO antigens, both antibodies (universal donor)\n\nRh factor:\n• Rh+ = has Rh antigen\n• Rh− = no Rh antigen\n• Rh incompatibility in pregnancy → erythroblastosis fetalis", explanation: "A, B, AB, O + Rh." },
    { id: "q109", type: "short", difficulty: "medium", stem: "Describe the path of air and where gas exchange happens.", answer: "Path of air:\n1) Nose — warms, moistens, filters\n2) Pharynx\n3) Larynx (voice box)\n4) Trachea (windpipe)\n5) Bronchi (2 branches)\n6) Bronchioles\n7) Alveoli — GAS EXCHANGE\n\nIn alveoli:\n• O₂ diffuses INTO blood\n• CO₂ diffuses OUT into lungs\nExchange by DIFFUSION (concentration gradient).", explanation: "Alveoli = exchange site." },
    { id: "q110", type: "short", difficulty: "medium", stem: "Describe the mechanism of inhalation and exhalation.", answer: "INHALATION:\n• Diaphragm CONTRACTS → flattens down\n• Intercostal muscles contract → ribs lift up + out\n• Volume increases → pressure decreases\n• Air rushes in\n\nEXHALATION:\n• Diaphragm RELAXES → dome shape, moves up\n• Intercostals relax → ribs drop\n• Volume decreases → pressure increases\n• Air pushed out", explanation: "In: diaphragm down; Out: diaphragm up." },
    { id: "q111", type: "short", difficulty: "medium", stem: "Describe the 3 stages of urine formation.", answer: "1) FILTRATION (glomerulus + Bowman's capsule):\n• Blood pressure forces small molecules out\n• Filtered: water, glucose, amino acids, ions, urea\n• NOT filtered: proteins, blood cells\n\n2) REABSORPTION (tubules):\n• Useful substances back to blood\n• Reabsorbed: all glucose, amino acids, most water, needed ions\n\n3) SECRETION (tubules):\n• Extra wastes (H+, K+, drugs) added to urine\n\nRESULT: URINE (water + urea + excess ions)", explanation: "Filtration → reabsorption → secretion." },
    { id: "q112", type: "short", difficulty: "medium", stem: "List functions of the kidney.", answer: "1) Filter blood (remove urea + toxins)\n2) Balance water (osmoregulation)\n3) Regulate ions (Na⁺, K⁺, Cl⁻, H⁺)\n4) Regulate blood pH\n5) Regulate blood pressure (renin)\n6) Produce erythropoietin (stimulates RBC production)\n7) Activate vitamin D\n8) Produce urine", explanation: "Filter, balance, regulate, produce." },
    { id: "q113", type: "short", difficulty: "medium", stem: "List components and functions of the lymphatic system.", answer: "COMPONENTS:\n• Lymph (fluid)\n• Lymphatic vessels\n• Lymph nodes\n• Spleen\n• Thymus\n• Tonsils\n• Bone marrow\n\nFUNCTIONS:\n• Return tissue fluid to blood\n• Absorb fats from intestine (lacteals)\n• Defend against pathogens (WBCs)\n• Produce lymphocytes", explanation: "Return fluid, absorb fat, defend." },
    { id: "q114", type: "short", difficulty: "medium", stem: "Explain the four types of immunity with examples.", answer: "1) ACTIVE NATURAL — body makes antibodies from infection; long-lasting. Example: having had measles.\n\n2) ACTIVE ARTIFICIAL — body makes antibodies from a VACCINE; long-lasting. Example: COVID vaccine.\n\n3) PASSIVE NATURAL — antibodies GIVEN naturally; short-lasting. Example: breast milk.\n\n4) PASSIVE ARTIFICIAL — antibodies GIVEN medically; short-lasting. Example: antiserum injection.", explanation: "Active vs passive; natural vs artificial." },
    { id: "q115", type: "short", difficulty: "medium", stem: "Explain how vaccines work.", answer: "1) Vaccine contains WEAKENED or DEAD pathogens (or their antigens)\n2) Body's immune system responds as if infected\n3) B cells produce ANTIBODIES\n4) MEMORY B and T cells form\n5) On future exposure to real pathogen: rapid immune response\n6) Person does NOT get sick\n\nTypes: BCG (TB), polio, MMR, COVID-19, tetanus.\n\nHerd immunity: widespread vaccination protects unvaccinated.", explanation: "Vaccine = active artificial immunity via memory cells." },
    { id: "q116", type: "short", difficulty: "hard", stem: "Explain the role of the small intestine in digestion and absorption.", answer: "DIGESTION:\n• Receives chyme from stomach\n• Bile (from liver) emulsifies fats\n• Pancreatic enzymes: trypsin, lipase, amylase\n• Intestinal enzymes: maltase, etc.\n• Final breakdown of proteins, fats, carbohydrates\n\nABSORPTION:\n• Villi + microvilli increase surface area\n• Glucose, amino acids, vitamins, minerals → blood capillaries\n• Fatty acids + glycerol → lacteals (lymph)\n• Water + remaining ions → absorbed here and in large intestine", explanation: "Main digestion + absorption organ." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Explain Rh incompatibility and erythroblastosis fetalis.", answer: "Rh INCOMPATIBILITY happens when:\n• Mother is Rh−\n• Fetus is Rh+ (inherited from father)\n\nFirst pregnancy:\n• Fetal Rh+ cells enter mother's blood\n• Mother's immune system produces anti-Rh antibodies\n• Baby usually fine\n\nSubsequent pregnancies (Rh+ fetus):\n• Mother's anti-Rh antibodies cross placenta\n• Attack fetal RBCs → erythroblastosis fetalis (hemolytic disease of newborn)\n• Baby develops anemia, jaundice\n\nPREVENTION: Anti-Rh (RhoGAM) injection to mother during/after pregnancy.", explanation: "Rh− mother + Rh+ fetus → antibody attack on future pregnancies." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Explain the main cardiovascular diseases and their risk factors.", answer: "MAJOR CARDIOVASCULAR DISEASES:\n• HYPERTENSION — high blood pressure\n• ATHEROSCLEROSIS — plaque buildup in arteries\n• HEART ATTACK — blocked coronary artery\n• STROKE — blocked/burst vessel in brain\n• VARICOSE VEINS — faulty valves\n• LEUKEMIA — blood cancer\n\nRISK FACTORS:\n• Smoking\n• High salt/fat diet\n• Lack of exercise\n• Obesity\n• Stress\n• Genetics\n• Age\n\nPREVENTION: healthy diet, exercise, no smoking.", explanation: "Know 4 diseases + 4 risk factors." },
    { id: "q119", type: "short", difficulty: "hard", stem: "Explain the structure and function of a nephron.", answer: "NEPHRON = functional unit of kidney (~1 million per kidney).\n\nSTRUCTURE:\n• GLOMERULUS — capillary tuft\n• BOWMAN'S CAPSULE — surrounds glomerulus\n• PROXIMAL TUBULE\n• LOOP OF HENLE\n• DISTAL TUBULE\n• COLLECTING DUCT\n\nFUNCTION:\n• FILTRATION (glomerulus/Bowman's)\n• REABSORPTION (tubules)\n• SECRETION (tubules)\n• Produces urine", explanation: "Nephron = kidney functional unit." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Explain the importance of clean water, sanitation, and vaccination in preventing disease.", answer: "CLEAN WATER:\n• Prevents waterborne diseases (cholera, typhoid, dysentery)\n• Reduces diarrhea (major child killer)\n• Prevents parasite infections\n\nSANITATION:\n• Proper sewage prevents contamination\n• Handwashing reduces spread of infections\n• Reduces disease vector breeding\n\nVACCINATION:\n• Prevents diseases (measles, polio, TB, COVID-19)\n• Creates herd immunity\n• Saves lives + reduces healthcare cost\n\nTogether these are the MOST cost-effective public health measures.", explanation: "Clean water + sanitation + vaccines = disease prevention." },
  ],
};