import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 CHEMISTRY — UNIT 4
// ENERGY CHANGES AND ELECTROCHEMISTRY
// Source: Grade 10 Chemistry Student Textbook (pp. 166–197)
// For: Abenezer (Abatu) — Grade 10
// ============================================================

export const g10ChemistryCh4: Chapter = {
  id: "ch4",
  number: 4,
  title: "Energy Changes and Electrochemistry",
  titleAm: "የኃይል ለውጦችና ኤሌክትሮኬሚስትሪ",

  notes: [
    {
      id: "n0",
      title: "0. How to Master This Unit (Your Route to 100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, Unit 4 is ENERGY CHANGES AND ELECTROCHEMISTRY. It has FOUR big halves:\n" +
        "1) ENERGY CHANGES IN REACTIONS (exothermic, endothermic, enthalpy)\n" +
        "2) ELECTRICAL CONDUCTIVITY (metallic vs electrolytic)\n" +
        "3) GALVANIC/VOLTAIC CELLS (primary and secondary)\n" +
        "4) ELECTROLYSIS (electrolytic cells, molten electrolytes)\n\n" +
        "The WHOLE unit reduces to these must-know items:\n" +
        "• System vs surrounding; ΔE = Efinal − Einitial\n" +
        "• Exothermic (ΔH < 0) vs endothermic (ΔH > 0)\n" +
        "• Enthalpy diagrams\n" +
        "• q = mcΔT (calorimetry)\n" +
        "• Heat capacity vs specific heat capacity\n" +
        "• Metallic conductivity (electrons) vs electrolytic (ions)\n" +
        "• Strong vs weak electrolytes\n" +
        "• Galvanic cell: chemical → electrical\n" +
        "• Electrolytic cell: electrical → chemical\n" +
        "• Anode = oxidation; cathode = reduction (ALWAYS)\n" +
        "• Galvanic: anode negative, cathode positive\n" +
        "• Electrolytic: anode positive, cathode negative\n" +
        "• Daniell cell: Zn anode, Cu cathode\n" +
        "• Leclanché (dry) cell: Zn + MnO₂ + NH₄Cl\n" +
        "• Lead-storage battery: Pb + PbO₂ + H₂SO₄\n" +
        "• Electrolysis of molten NaCl, PbBr₂, etc.",
      bodyAm:
        "አባቱ፣ ክፍል 4 የኃይል ለውጦችና ኤሌክትሮኬሚስትሪ ነው። አራት ትላልቅ ክፍሎች፡\n" +
        "1) የኃይል ለውጥ\n" +
        "2) የኤሌክትሪክ ምርመራ\n" +
        "3) ጋልቫኒክ ሴሎች\n" +
        "4) ኤሌክትሮላይሲስ",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 — Energy & enthalpy",
          titleAm: "ደረጃ 1 — ኃይልና enthalpy",
          body:
            "SYSTEM = part being studied (reaction mixture)\n" +
            "SURROUNDING = everything else\n" +
            "UNIVERSE = system + surrounding\n\n" +
            "INTERNAL ENERGY (E) = sum of potential + kinetic energy of particles\n" +
            "ΔE = E_final − E_initial = E_products − E_reactants\n\n" +
            "ENERGY EXCHANGE: heat (q) or work (w)\n" +
            "ΔE = q + w\n\n" +
            "EXOTHERMIC (ΔH < 0):\n" +
            "• Releases heat to surroundings\n" +
            "• Products have lower enthalpy\n" +
            "• Temperature of surroundings rises\n" +
            "• Examples: combustion, NaOH dissolves, CaCl₂ dissolves\n\n" +
            "ENDOTHERMIC (ΔH > 0):\n" +
            "• Absorbs heat from surroundings\n" +
            "• Products have higher enthalpy\n" +
            "• Temperature of surroundings drops\n" +
            "• Examples: NH₄NO₃ dissolves, photosynthesis, cooking",
          bodyAm:
            "ΔH < 0 = exothermic (ሙቀት ይሰጣል)።\n" +
            "ΔH > 0 = endothermic (ሙቀት ይወስዳል)።\n" +
            "NaOH, CaCl₂ = exothermic።\n" +
            "NH₄NO₃ = endothermic.",
        },
        {
          id: "n0-2",
          title: "Pass 2 — Calorimetry",
          titleAm: "ደረጃ 2 — ካሎሪሜትሪ",
          body:
            "CALORIMETER = device to measure heat exchange.\n\n" +
            "HEAT CAPACITY = q / ΔT (J/K)\n" +
            "SPECIFIC HEAT CAPACITY (c) = q / (m × ΔT) (J/g·K)\n" +
            "• For water: c = 4.184 J/g·K (very high!)\n" +
            "• Metals have low c (heat quickly)\n" +
            "• Water has high c (heats/cools slowly)\n\n" +
            "q = m × c × ΔT\n" +
            "• q = heat (J)\n" +
            "• m = mass (g)\n" +
            "• c = specific heat (J/g·K)\n" +
            "• ΔT = temperature change (K or °C)\n\n" +
            "WHY WATER IS GOOD COOLANT: high c → absorbs lots of heat with small temp change.",
          bodyAm:
            "q = mcΔT።\n" +
            "c_water = 4.18 J/g·K።\n" +
            "ውሃ = ጥሩ coolant (high c)።",
        },
        {
          id: "n0-3",
          title: "Pass 3 — Conductivity",
          titleAm: "ደረጃ 3 — ምርመራ",
          body:
            "METALLIC CONDUCTION:\n" +
            "• Charge carriers = ELECTRONS (free electrons)\n" +
            "• Solid or liquid metals\n" +
            "• No chemical change\n" +
            "• Conductivity decreases with ↑temperature\n" +
            "• Examples: Cu, Ag, Au, graphite\n\n" +
            "ELECTROLYTIC CONDUCTION:\n" +
            "• Charge carriers = IONS (cations + anions)\n" +
            "• Solutions or molten salts\n" +
            "• Causes chemical decomposition\n" +
            "• Conductivity increases with ↑temperature\n" +
            "• Examples: NaCl(aq), HCl(aq), molten PbBr₂\n\n" +
            "ELECTROLYTE = conducts in solution/molten state\n" +
            "• Strong: complete dissociation (NaCl, HCl)\n" +
            "• Weak: partial (CH₃COOH, NH₃)\n" +
            "• Non-electrolyte: no ions (sugar, ethanol)",
          bodyAm:
            "Metallic: electrons።\n" +
            "Electrolytic: ions።\n" +
            "Strong: NaCl, HCl።\n" +
            "Weak: CH₃COOH, NH₃።",
        },
        {
          id: "n0-4",
          title: "Pass 4 — Galvanic cells",
          titleAm: "ደረጃ 4 — ጋልቫኒክ",
          body:
            "GALVANIC (VOLTAIC) CELL = converts CHEMICAL → ELECTRICAL via spontaneous redox.\n\n" +
            "PRIMARY (non-rechargeable):\n" +
            "• Daniell cell: Zn anode (ZnSO₄), Cu cathode (CuSO₄), salt bridge\n" +
            "• Leclanché (dry) cell: Zn + MnO₂ + NH₄Cl paste\n" +
            "  Voltage: ~1.5 V\n\n" +
            "SECONDARY (rechargeable):\n" +
            "• Lead-storage battery: Pb anode, PbO₂ cathode, H₂SO₄ electrolyte\n" +
            "  Each cell: ~2 V; 12 V battery = 6 cells in series\n" +
            "• Used in cars\n\n" +
            "GALVANIC CELL RULES:\n" +
            "• ANODE = oxidation = NEGATIVE electrode\n" +
            "• CATHODE = reduction = POSITIVE electrode\n" +
            "• Electrons flow anode → cathode (external wire)\n" +
            "• Salt bridge maintains electrical neutrality",
          bodyAm:
            "Galvanic: chemical → electrical።\n" +
            "Anode = oxidation = negative።\n" +
            "Cathode = reduction = positive።\n" +
            "Daniell, Leclanché, lead-storage።",
        },
        {
          id: "n0-5",
          title: "Pass 5 — Electrolysis",
          titleAm: "ደረጃ 5 — ኤሌክትሮላይሲስ",
          body:
            "ELECTROLYSIS = uses ELECTRICAL energy to drive NONSPONTANEOUS reaction.\n\n" +
            "ELECTROLYTIC CELL:\n" +
            "• Converts ELECTRICAL → CHEMICAL\n" +
            "• External power source (battery)\n" +
            "• Uses: plating, purification, extracting metals\n\n" +
            "ELECTROLYTIC CELL RULES:\n" +
            "• ANODE = oxidation = POSITIVE electrode (connected to + terminal)\n" +
            "• CATHODE = reduction = NEGATIVE electrode (connected to − terminal)\n" +
            "• Anions move to anode; cations to cathode\n\n" +
            "MOLTEN ELECTROLYSIS:\n" +
            "• NaCl(l) → Na(l) + ½Cl₂(g)\n" +
            "  Cathode: Na⁺ + e⁻ → Na\n" +
            "  Anode: Cl⁻ → ½Cl₂ + e⁻\n\n" +
            "• PbBr₂(l) → Pb(l) + Br₂(g)\n" +
            "  Cathode: Pb²⁺ + 2e⁻ → Pb\n" +
            "  Anode: 2Br⁻ → Br₂ + 2e⁻\n\n" +
            "INDUSTRIAL: Al, Li, Mg, Ca, Na are extracted by electrolysis.",
          bodyAm:
            "Electrolysis: electrical → chemical።\n" +
            "Anode = oxidation = positive።\n" +
            "Cathode = reduction = negative።\n" +
            "Anions → anode; cations → cathode።",
        },
        {
          id: "n0-6",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Exothermic: ΔH < 0, releases heat.\n" +
            "• Endothermic: ΔH > 0, absorbs heat.\n" +
            "• Enthalpy diagram: exothermic products below, endothermic above.\n" +
            "• q = mcΔT.\n" +
            "• Metallic = electrons; electrolytic = ions.\n" +
            "• Galvanic: chemical → electrical (SPONTANEOUS)\n" +
            "• Electrolytic: electrical → chemical (NONSPONTANEOUS)\n" +
            "• BOTH cells: anode = oxidation; cathode = reduction.\n" +
            "• Galvanic: anode = −, cathode = +.\n" +
            "• Electrolytic: anode = +, cathode = −.\n" +
            "• Daniell cell: Zn anode, Cu cathode.\n" +
            "• Leclanché: Zn + MnO₂ + NH₄Cl.\n" +
            "• Lead battery: Pb + PbO₂ + H₂SO₄, 2 V/cell.\n" +
            "• Electrolysis of molten NaCl: Na at cathode, Cl₂ at anode.",
          bodyAm:
            "ወሳኝ ልዩነቶችን አስታውስ።",
        },
      ],
    },

    {
      id: "n1",
      title: "4.1 Introduction — Energy Changes",
      titleAm: "4.1 መግቢያ — የኃይል ለውጦች",
      body:
        "Abatu, chemical reactions ALWAYS involve energy change. Some release energy (exothermic), some absorb (endothermic).",
      bodyAm:
        "ሁልጊዜ የኃይል ለውጥ አለ።",
      children: [
        {
          id: "n1-1",
          title: "System and surrounding",
          titleAm: "ሥርዓትና አካባቢ",
          body:
            "SYSTEM = the part being studied (reaction mixture)\n" +
            "SURROUNDING = everything else\n" +
            "UNIVERSE = system + surrounding\n\n" +
            "Internal energy (E):\n" +
            "• Sum of potential + kinetic energy of all particles\n\n" +
            "ΔE = E_final − E_initial = E_products − E_reactants\n\n" +
            "CONSERVATION OF ENERGY:\n" +
            "Total energy of universe is constant. Energy lost by system = energy gained by surrounding.",
          bodyAm:
            "ሥርዓት + አካባቢ = ዓለም።\n" +
            "ኃይል አይጠፋም፣ አይፈጠርም።",
        },
        {
          id: "n1-2",
          title: "Heat vs work",
          titleAm: "ሙቀትና ሥራ",
          body:
            "Energy exchange between system and surrounding happens as:\n" +
            "• HEAT (q) — thermal energy transfer\n" +
            "• WORK (w) — mechanical energy\n\n" +
            "ΔE = q + w\n\n" +
            "In constant pressure: ΔH = q (enthalpy = heat transfer)\n\n" +
            "Example: combustion of gasoline\n" +
            "• Releases energy as heat (engine gets hot)\n" +
            "• Does work (moves car)",
          bodyAm:
            "ሙቀት (q) + ሥራ (w) = ΔE።\n" +
            "በቋሚ ግፊት: ΔH = q።",
        },
        {
          id: "n1-3",
          title: "Exothermic reactions",
          titleAm: "ኤግዞተርሚክ",
          body:
            "EXOTHERMIC = releases heat to surroundings.\n\n" +
            "• ΔH < 0 (negative)\n" +
            "• Products have LOWER enthalpy than reactants\n" +
            "• Surrounding gets WARMER\n" +
            "• Energy converted from potential to kinetic\n\n" +
            "EXAMPLES:\n" +
            "• Combustion: C + O₂ → CO₂ + heat\n" +
            "• NaOH dissolves: NaOH(s) → Na⁺ + OH⁻ + heat\n" +
            "• CaCl₂ dissolves\n" +
            "• Acid-base neutralization\n" +
            "• Respiration (glucose breakdown)\n\n" +
            "ENERGY DIAGRAM: products below reactants",
          bodyAm:
            "ΔH < 0።\n" +
            "ሙቀት ይሰጣል።\n" +
            "Combustion, NaOH, CaCl₂።\n" +
            "Products ከ reactants በታች።",
        },
        {
          id: "n1-4",
          title: "Endothermic reactions",
          titleAm: "ኤንዶተርሚክ",
          body:
            "ENDOTHERMIC = absorbs heat from surroundings.\n\n" +
            "• ΔH > 0 (positive)\n" +
            "• Products have HIGHER enthalpy than reactants\n" +
            "• Surrounding gets COLDER\n" +
            "• Energy absorbed from surroundings\n\n" +
            "EXAMPLES:\n" +
            "• Photosynthesis\n" +
            "• NH₄NO₃ dissolves (cold pack)\n" +
            "• NH₄Cl dissolves\n" +
            "• Baking bread\n" +
            "• Cooking (external heat)\n" +
            "• Melting ice\n" +
            "• Boiling water\n\n" +
            "ENERGY DIAGRAM: products above reactants",
          bodyAm:
            "ΔH > 0።\n" +
            "ሙቀት ይወስዳል።\n" +
            "Photosynthesis, NH₄NO₃።\n" +
            "Products ከ reactants በላይ።",
        },
        {
          id: "n1-5",
          title: "Calorimetry — measuring heat",
          titleAm: "ካሎሪሜትሪ",
          body:
            "CALORIMETER = device to measure heat exchange (e.g., insulated foam cup).\n\n" +
            "HEAT CAPACITY (C) = q / ΔT (J/K)\n" +
            "• Amount of heat to raise temp of object by 1 K\n" +
            "• Depends on mass and material\n\n" +
            "SPECIFIC HEAT CAPACITY (c) = q / (m × ΔT) (J/g·K)\n" +
            "• Heat to raise 1 g by 1 K\n" +
            "• For water: c = 4.184 J/g·K\n" +
            "• Metals have low c (heat fast)\n" +
            "• Water has very high c (heats slowly)\n\n" +
            "HEAT FORMULA:\n" +
            "q = m × c × ΔT\n" +
            "q = heat (J)\n" +
            "m = mass (g)\n" +
            "c = specific heat (J/g·K)\n" +
            "ΔT = T_final − T_initial (°C or K)\n\n" +
            "WHY WATER IS USED AS COOLANT:\n" +
            "• High specific heat (4.184 J/g·K)\n" +
            "• Absorbs lots of heat with small temperature rise\n" +
            "• Car radiators, industrial cooling",
          bodyAm:
            "q = mcΔT።\n" +
            "c_water = 4.18 J/g·K።\n" +
            "ውሃ = ጥሩ coolant።",
        },
        {
          id: "n1-6",
          title: "⚠ Remember trap — Energy",
          titleAm: "⚠ አትርሳ — ኃይል",
          body:
            "• Exothermic = ΔH < 0; surroundings get hot.\n" +
            "• Endothermic = ΔH > 0; surroundings get cold.\n" +
            "• Enthalpy diagram: exothermic products BELOW; endothermic ABOVE.\n" +
            "• q = mcΔT; use MASS OF SOLUTION (not just solvent).\n" +
            "• Water has HIGH c = 4.18 J/g·K.\n" +
            "• ΔH = H_products − H_reactants.\n" +
            "• In reaction diagrams: ΔH = final − initial.\n" +
            "• Photosynthesis = endothermic.\n" +
            "• Combustion = exothermic.",
          bodyAm:
            "ΔH < 0 = exothermic።\n" +
            "ΔH > 0 = endothermic።\n" +
            "q = mcΔT።",
        },
      ],
    },

    {
      id: "n2",
      title: "4.2 Energy Changes in Electrochemistry",
      titleAm: "4.2 ኤሌክትሮኬሚስትሪ የኃይል ለውጥ",
      body:
        "Abatu, ELECTROCHEMISTRY deals with the interconversion of electrical and chemical energy.",
      bodyAm:
        "ኤሌክትሮኬሚስትሪ = electrical ↔ chemical energy።",
      children: [
        {
          id: "n2-1",
          title: "What is electrochemistry?",
          titleAm: "ኤሌክትሮኬሚስትሪ ምንድን ነው?",
          body:
            "ELECTROCHEMISTRY = field of chemistry that studies:\n" +
            "• How chemical reactions produce electricity\n" +
            "• How electricity causes chemical reactions\n\n" +
            "TWO directions:\n" +
            "• Chemical → Electrical (Galvanic/Voltaic cells)\n" +
            "• Electrical → Chemical (Electrolytic cells)",
          bodyAm:
            "ኬሚካል → ኤሌክትሪክ (galvanic)።\n" +
            "ኤሌክትሪክ → ኬሚካል (electrolytic)።",
        },
        {
          id: "n2-2",
          title: "Metallic conductivity",
          titleAm: "ሜታሊክ ምርመራ",
          body:
            "METALLIC CONDUCTION = electricity through METALS via FREE ELECTRONS.\n\n" +
            "• Metal atoms have VALENCE electrons in outer shell\n" +
            "• These electrons are FREE to move\n" +
            "• 'Sea of electrons' around positive ions\n" +
            "• Electrons flow when potential applied\n\n" +
            "PROPERTIES:\n" +
            "• No chemical change in metal\n" +
            "• No transfer of matter\n" +
            "• Decreases with ↑temperature (ions vibrate more)\n" +
            "• Best conductors: Ag, Cu, Au, Al\n\n" +
            "GRAPHITE is a nonmetal that conducts (delocalized electrons between layers).",
          bodyAm:
            "Electrons ይንቀሳቀሳሉ።\n" +
            "ኬሚካል ለውጥ የለም።\n" +
            "Ag, Cu, Au = ምርጥ።",
        },
        {
          id: "n2-3",
          title: "Electrolytic conductivity",
          titleAm: "ኤሌክትሮላይቲክ ምርመራ",
          body:
            "ELECTROLYTIC CONDUCTION = electricity through SOLUTIONS or MOLTEN SALTS via IONS.\n\n" +
            "• Cations (+) and anions (−) move in solution\n" +
            "• Cations → cathode\n" +
            "• Anions → anode\n" +
            "• Conductivity depends on ion concentration\n\n" +
            "PROPERTIES:\n" +
            "• CAUSES chemical decomposition\n" +
            "• Transfer of matter (ions move)\n" +
            "• INCREASES with ↑temperature (more ionization)\n" +
            "• Depends on concentration of ions\n\n" +
            "STRONG ELECTROLYTES: complete dissociation\n" +
            "• NaCl, HCl, H₂SO₄, NaOH, KOH\n\n" +
            "WEAK ELECTROLYTES: partial dissociation\n" +
            "• CH₃COOH, NH₃, H₂CO₃\n\n" +
            "NON-ELECTROLYTES: no ions formed\n" +
            "• Sugar, ethanol, glucose",
          bodyAm:
            "Ions ይንቀሳቀሳሉ።\n" +
            "ኬሚካል ለውጥ አለ።\n" +
            "Strong, weak, non።",
        },
        {
          id: "n2-4",
          title: "Comparison table",
          titleAm: "የንጽጽር ሰንጠረዥ",
          body:
            "| Feature | Metallic | Electrolytic |\n" +
            "|---------|----------|--------------|\n" +
            "| Charge carrier | Electrons | Ions |\n" +
            "| Material | Metals | Solutions/molten salts |\n" +
            "| Chemical change | No | Yes |\n" +
            "| Matter transfer | No | Yes (ions move) |\n" +
            "| Temperature effect | ↓ with ↑T | ↑ with ↑T |\n" +
            "| Example | Cu wire | NaCl solution |",
          bodyAm:
            "Electrons vs ions።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap — Conductivity",
          titleAm: "⚠ አትርሳ — ምርመራ",
          body:
            "• Metallic = electrons (metals).\n" +
            "• Electrolytic = ions (solutions/molten).\n" +
            "• Metallic: NO chemical change.\n" +
            "• Electrolytic: HAS chemical change.\n" +
            "• Metallic conductivity ↓ with ↑T.\n" +
            "• Electrolytic conductivity ↑ with ↑T.\n" +
            "• Solid NaCl does NOT conduct (ions locked).\n" +
            "• Molten NaCl DOES conduct (ions free).\n" +
            "• Graphite (nonmetal) conducts (delocalized electrons).",
          bodyAm:
            "Metallic = electrons።\n" +
            "Electrolytic = ions።\n" +
            "Solid NaCl = no conduct።\n" +
            "Molten NaCl = conduct።",
        },
      ],
    },

    {
      id: "n3",
      title: "4.3 Electrochemical Cells — Galvanic Cells",
      titleAm: "4.3 ኤሌክትሮኬሚካል ሴሎች — ጋልቫኒክ",
      body:
        "Abatu, an ELECTROCHEMICAL CELL uses a redox reaction to convert between chemical and electrical energy.",
      bodyAm:
        "ኤሌክትሮኬሚካል ሴል = redox + electricity።",
      children: [
        {
          id: "n3-1",
          title: "Galvanic (Voltaic) cells overview",
          titleAm: "ጋልቫኒክ ሴሎች",
          body:
            "GALVANIC CELL = converts CHEMICAL energy → ELECTRICAL energy.\n\n" +
            "• Uses SPONTANEOUS redox reaction\n" +
            "• Reaction proceeds on its own\n" +
            "• Two electrodes in electrolyte\n" +
            "• Electrons flow through external wire\n\n" +
            "TWO TYPES:\n" +
            "1) PRIMARY cells — not rechargeable\n" +
            "   • Daniell cell (wet)\n" +
            "   • Leclanché (zinc-carbon) dry cell\n" +
            "2) SECONDARY cells — rechargeable\n" +
            "   • Lead-storage battery (car battery)\n" +
            "   • Lithium-ion (phones)\n" +
            "   • Nickel-cadmium",
          bodyAm:
            "Galvanic = chemical → electrical።\n" +
            "Primary = not rechargeable።\n" +
            "Secondary = rechargeable።",
        },
        {
          id: "n3-2",
          title: "Daniell cell (wet primary)",
          titleAm: "ዳንኤል ሴል",
          body:
            "DANIELL CELL — a WET primary cell.\n\n" +
            "STRUCTURE:\n" +
            "• Zn electrode in ZnSO₄ solution (anode compartment)\n" +
            "• Cu electrode in CuSO₄ solution (cathode compartment)\n" +
            "• Salt bridge (KCl + agar) connects solutions\n\n" +
            "HALF-REACTIONS:\n" +
            "Anode (Zn): Zn → Zn²⁺ + 2e⁻ (oxidation)\n" +
            "Cathode (Cu): Cu²⁺ + 2e⁻ → Cu (reduction)\n" +
            "Overall: Zn + Cu²⁺ → Zn²⁺ + Cu\n\n" +
            "OBSERVATIONS:\n" +
            "• Zn electrode LOSES mass\n" +
            "• Cu electrode GAINS mass (Cu deposits)\n" +
            "• Electrons flow from Zn → Cu in wire\n" +
            "• Zn is NEGATIVE electrode (anode)\n" +
            "• Cu is POSITIVE electrode (cathode)\n\n" +
            "PURPOSE OF SALT BRIDGE:\n" +
            "• Maintains electrical neutrality\n" +
            "• Allows ions to flow between compartments",
          bodyAm:
            "Zn anode (−), Cu cathode (+)።\n" +
            "Zn → Zn²⁺ + 2e⁻።\n" +
            "Cu²⁺ + 2e⁻ → Cu።\n" +
            "Salt bridge = neutrality።",
        },
        {
          id: "n3-3",
          title: "Leclanché (zinc-carbon) dry cell",
          titleAm: "ለቅላንሼ ሴል",
          body:
            "LECLANCHÉ DRY CELL — a PRIMARY dry cell.\n\n" +
            "STRUCTURE:\n" +
            "• Zinc can (anode)\n" +
            "• Graphite rod (cathode)\n" +
            "• Paste of MnO₂ + NH₄Cl + ZnCl₂ + carbon\n\n" +
            "HALF-REACTIONS:\n" +
            "Anode: Zn → Zn²⁺ + 2e⁻\n" +
            "Cathode: 2NH₄⁺ + 2MnO₂ + 2e⁻ → Mn₂O₃ + H₂O + 2NH₃\n" +
            "Overall: Zn + 2NH₄⁺ + 2MnO₂ → Zn²⁺ + Mn₂O₃ + H₂O + 2NH₃\n\n" +
            "VOLTAGE: ~1.5 V\n" +
            "USES: flashlights, radios, clocks, remote controls\n\n" +
            "DISADVANTAGE:\n" +
            "• Voltage decreases as used\n" +
            "• Worse in cold weather\n" +
            "• Not rechargeable",
          bodyAm:
            "Zn anode, graphite cathode።\n" +
            "1.5 V።\n" +
            "Not rechargeable።",
        },
        {
          id: "n3-4",
          title: "Lead-storage battery (secondary)",
          titleAm: "የእርሳስ ባትሪ",
          body:
            "LEAD-STORAGE BATTERY — SECONDARY (rechargeable) cell.\n" +
            "Used in cars.\n\n" +
            "STRUCTURE:\n" +
            "• Anode: spongy Pb\n" +
            "• Cathode: PbO₂\n" +
            "• Electrolyte: 35% H₂SO₄\n" +
            "• 6 cells in series → 12 V (2 V each)\n\n" +
            "DISCHARGE (produces electricity):\n" +
            "Anode: Pb + SO₄²⁻ → PbSO₄ + 2e⁻\n" +
            "Cathode: PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O\n" +
            "Overall: Pb + PbO₂ + 4H⁺ + 2SO₄²⁻ → 2PbSO₄ + 2H₂O\n\n" +
            "CHARGE (recharge):\n" +
            "Reverse reaction: 2PbSO₄ + 2H₂O → Pb + PbO₂ + 2H₂SO₄\n" +
            "Apply external voltage to reverse\n\n" +
            "KEY: During discharge, BOTH electrodes become PbSO₄.\n" +
            "Recharging restores them.",
          bodyAm:
            "Pb anode, PbO₂ cathode።\n" +
            "2 V per cell, 6 = 12 V።\n" +
            "Discharge: PbSO₄ at both።\n" +
            "Recharge: reverse።",
        },
        {
          id: "n3-5",
          title: "Anode vs cathode comparison",
          titleAm: "Anode vs cathode",
          body:
            "| Feature | Galvanic Cell | Electrolytic Cell |\n" +
            "|---------|---------------|-------------------|\n" +
            "| Anode charge | NEGATIVE | POSITIVE |\n" +
            "| Cathode charge | POSITIVE | NEGATIVE |\n" +
            "| Anode reaction | Oxidation | Oxidation |\n" +
            "| Cathode reaction | Reduction | Reduction |\n" +
            "| Electron flow | Anode → Cathode | Anode → Cathode |\n" +
            "| Energy | Chemical → Electrical | Electrical → Chemical |\n" +
            "| Example | Daniell cell | Electrolysis of NaCl |\n\n" +
            "REMEMBER: Anode = oxidation ALWAYS (both cells).\n" +
            "Cathode = reduction ALWAYS (both cells).\n" +
            "Only CHARGES differ.",
          bodyAm:
            "Anode = oxidation (ሁልጊዜ)።\n" +
            "Cathode = reduction (ሁልጊዜ)።\n" +
            "Charges ብቻ ይለያያሉ።",
        },
        {
          id: "n3-6",
          title: "⚠ Remember trap — Cells",
          titleAm: "⚠ አትርሳ — ሴሎች",
          body:
            "• GALVANIC: chemical → electrical (SPONTANEOUS).\n" +
            "• ELECTROLYTIC: electrical → chemical (NONSPONTANEOUS).\n" +
            "• Anode = oxidation in BOTH.\n" +
            "• Cathode = reduction in BOTH.\n" +
            "• Galvanic: anode NEGATIVE, cathode POSITIVE.\n" +
            "• Electrolytic: anode POSITIVE, cathode NEGATIVE.\n" +
            "• Daniell: Zn anode, Cu cathode.\n" +
            "• Leclanché: Zn anode, graphite cathode, 1.5 V.\n" +
            "• Lead battery: Pb anode, PbO₂ cathode, 2 V/cell.\n" +
            "• 12 V battery = 6 cells in series.",
          bodyAm:
            "Galvanic = spontaneous።\n" +
            "Electrolytic = nonspontaneous።\n" +
            "Anode = oxidation።",
        },
      ],
    },

    {
      id: "n4",
      title: "4.4 Electrolysis & Electrolytic Cells",
      titleAm: "4.4 ኤሌክትሮላይሲስ",
      body:
        "Abatu, ELECTROLYSIS uses electrical energy to force a NONSPONTANEOUS chemical reaction.",
      bodyAm:
        "ኤሌክትሮላይሲስ = electrical drives chemical reaction።",
      children: [
        {
          id: "n4-1",
          title: "What is electrolysis?",
          titleAm: "ኤሌክትሮላይሲስ ምንድን ነው?",
          body:
            "ELECTROLYSIS = 'electro' (electricity) + 'lysis' (breaking apart).\n\n" +
            "• Uses ELECTRICAL ENERGY to drive NONSPONTANEOUS reaction\n" +
            "• Opposite of galvanic cell\n" +
            "• Anions migrate to ANODE (positive)\n" +
            "• Cations migrate to CATHODE (negative)\n\n" +
            "APPLICATIONS:\n" +
            "• Extracting reactive metals (Na, Al, Mg)\n" +
            "• Purifying metals (Cu)\n" +
            "• Electroplating (chrome, gold, silver)\n" +
            "• Producing Cl₂, H₂, NaOH\n" +
            "• Refining aluminum",
          bodyAm:
            "ማፍረስ በኤሌክትሪክ።\n" +
            "Extract metals, plate metals።",
        },
        {
          id: "n4-2",
          title: "Electrolytic cell structure",
          titleAm: "የኤሌክትሮላይቲክ ሴል አወቃቀር",
          body:
            "ELECTROLYTIC CELL:\n" +
            "• TWO electrodes (anode + cathode)\n" +
            "• One electrolyte (solution or molten)\n" +
            "• External POWER SOURCE (battery)\n\n" +
            "ELECTRODE CHARGES:\n" +
            "• Anode = POSITIVE (connected to + terminal)\n" +
            "• Cathode = NEGATIVE (connected to − terminal)\n\n" +
            "ION MOVEMENT:\n" +
            "• Anions (−) → anode (+, attract)\n" +
            "• Cations (+) → cathode (−, attract)\n\n" +
            "REACTIONS:\n" +
            "• Anode: oxidation (loss of e⁻)\n" +
            "• Cathode: reduction (gain of e⁻)\n" +
            "• Electrons flow anode → cathode (external circuit)",
          bodyAm:
            "Anode = +, oxidation።\n" +
            "Cathode = −, reduction።\n" +
            "Anions → anode።\n" +
            "Cations → cathode።",
        },
        {
          id: "n4-3",
          title: "Electrolysis of molten NaCl",
          titleAm: "የ NaCl(l) ኤሌክትሮላይሲስ",
          body:
            "ELECTROLYSIS OF MOLTEN (FUSED) NaCl:\n\n" +
            "NaCl(l) → Na⁺(l) + Cl⁻(l)\n\n" +
            "CATHODE (−): Na⁺ + e⁻ → Na(l)\n" +
            "ANODE (+): 2Cl⁻ → Cl₂(g) + 2e⁻\n\n" +
            "OVERALL: 2NaCl(l) → 2Na(l) + Cl₂(g)\n\n" +
            "PRODUCTS:\n" +
            "• Sodium metal (silvery, at cathode)\n" +
            "• Chlorine gas (yellow-green, at anode)\n\n" +
            "INDUSTRIAL USE: This is how sodium metal is produced commercially (Downs process).\n\n" +
            "Similar electrolysis used for:\n" +
            "• Li, Mg, Ca from their molten chlorides\n" +
            "• Al from molten Al₂O₃ (Hall–Héroult process)",
          bodyAm:
            "Na at cathode።\n" +
            "Cl₂ at anode።\n" +
            "2NaCl → 2Na + Cl₂።",
        },
        {
          id: "n4-4",
          title: "Electrolysis of molten PbBr₂",
          titleAm: "የ PbBr₂(l) ኤሌክትሮላይሲስ",
          body:
            "ELECTROLYSIS OF MOLTEN PbBr₂ (m.p. 373°C):\n\n" +
            "PbBr₂(l) → Pb²⁺(l) + 2Br⁻(l)\n\n" +
            "CATHODE (−): Pb²⁺ + 2e⁻ → Pb(l)\n" +
            "ANODE (+): 2Br⁻ → Br₂(g) + 2e⁻\n\n" +
            "OVERALL: PbBr₂(l) → Pb(l) + Br₂(g)\n\n" +
            "PRODUCTS:\n" +
            "• Lead metal (at cathode)\n" +
            "• Bromine gas (reddish-brown, at anode)\n\n" +
            "PRECAUTION: Bromine is very corrosive and dangerous.",
          bodyAm:
            "Pb at cathode።\n" +
            "Br₂ at anode።\n" +
            "Pb²⁺ + 2e⁻ → Pb።\n" +
            "2Br⁻ → Br₂ + 2e⁻።",
        },
        {
          id: "n4-5",
          title: "Applications of electrolysis",
          titleAm: "አጠቃቀሞች",
          body:
            "1) EXTRACTION OF METALS:\n" +
            "• Na from molten NaCl\n" +
            "• Al from molten Al₂O₃\n" +
            "• Mg from molten MgCl₂\n" +
            "• Ca from molten CaCl₂\n" +
            "• Li from molten LiCl\n\n" +
            "2) PURIFICATION OF METALS:\n" +
            "• Electrolytic refining of Cu, Zn\n" +
            "• Impure metal at anode; pure metal deposits at cathode\n\n" +
            "3) ELECTROPLATING:\n" +
            "• Coating object with metal\n" +
            "• Object = cathode; plating metal = anode\n" +
            "• Chrome, silver, gold, nickel plating\n\n" +
            "4) PRODUCTION OF CHEMICALS:\n" +
            "• Cl₂ and NaOH from brine (NaCl solution)\n" +
            "• H₂ from water electrolysis\n" +
            "• O₂ from water",
          bodyAm:
            "Extract Na, Al, Mg።\n" +
            "Purify Cu።\n" +
            "Electroplate gold, silver።\n" +
            "Make Cl₂, NaOH።",
        },
        {
          id: "n4-6",
          title: "⚠ Remember trap — Electrolysis",
          titleAm: "⚠ አትርሳ — ኤሌክትሮላይሲስ",
          body:
            "• Electrolytic: electrical → chemical (NONSPONTANEOUS).\n" +
            "• Anode = POSITIVE; oxidation.\n" +
            "• Cathode = NEGATIVE; reduction.\n" +
            "• Anions → anode.\n" +
            "• Cations → cathode.\n" +
            "• Na⁺ → cathode → Na.\n" +
            "• Cl⁻ → anode → Cl₂.\n" +
            "• For molten salts: only ions of the salt present.\n" +
            "• For aqueous solutions: also water — more complex.\n" +
            "• Electroplating: object = cathode.",
          bodyAm:
            "Anode = +, oxidation።\n" +
            "Cathode = −, reduction።\n" +
            "Na⁺ → cathode።\n" +
            "Cl⁻ → anode።",
        },
      ],
    },

    {
      id: "nRef",
      title: "Reference Sheet — Unit 4",
      titleAm: "የማጣቀሻ ሉህ",
      body:
        "ENERGY:\n" +
        "• ΔH < 0 = exothermic (releases heat)\n" +
        "• ΔH > 0 = endothermic (absorbs heat)\n" +
        "• ΔH = H_products − H_reactants\n" +
        "• q = mcΔT\n" +
        "• c_water = 4.184 J/g·K\n\n" +
        "CONDUCTIVITY:\n" +
        "• Metallic = electrons (metals); ↓ with ↑T\n" +
        "• Electrolytic = ions (solutions); ↑ with ↑T\n" +
        "• Strong electrolyte = complete ionization\n" +
        "• Weak = partial\n\n" +
        "GALVANIC CELL:\n" +
        "• Chemical → electrical (spontaneous)\n" +
        "• Anode = oxidation = NEGATIVE\n" +
        "• Cathode = reduction = POSITIVE\n" +
        "• Electrons flow anode → cathode\n\n" +
        "ELECTROLYTIC CELL:\n" +
        "• Electrical → chemical (nonspontaneous)\n" +
        "• Anode = oxidation = POSITIVE\n" +
        "• Cathode = reduction = NEGATIVE\n\n" +
        "CELLS:\n" +
        "• Daniell: Zn anode, Cu cathode, salt bridge\n" +
        "• Leclanché: Zn anode, graphite cathode, ~1.5 V\n" +
        "• Lead-storage: Pb anode, PbO₂ cathode, 2 V/cell\n" +
        "• 12 V car battery = 6 cells in series\n\n" +
        "ELECTROLYSIS:\n" +
        "• Molten NaCl → Na (cathode) + Cl₂ (anode)\n" +
        "• Molten PbBr₂ → Pb (cathode) + Br₂ (anode)",
      bodyAm:
        "ሰንጠረዡን አስታውስ።",
    },

    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 4",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1) Exothermic ΔH < 0; endothermic ΔH > 0.\n" +
        "2) Products of exothermic have lower enthalpy.\n" +
        "3) q = mcΔT.\n" +
        "4) c of water = 4.18 J/g·K.\n" +
        "5) Metallic = electrons; electrolytic = ions.\n" +
        "6) Metallic ↓ with ↑T; electrolytic ↑ with ↑T.\n" +
        "7) Galvanic: anode = −; cathode = +.\n" +
        "8) Electrolytic: anode = +; cathode = −.\n" +
        "9) Anode = oxidation (BOTH cells).\n" +
        "10) Cathode = reduction (BOTH cells).\n" +
        "11) Galvanic = spontaneous.\n" +
        "12) Electrolytic = nonspontaneous.\n" +
        "13) Daniell: Zn anode, Cu cathode.\n" +
        "14) Leclanché: Zn + MnO₂ + NH₄Cl, 1.5 V.\n" +
        "15) Lead-storage: Pb + PbO₂ + H₂SO₄, 2 V/cell.\n" +
        "16) 12 V car battery = 6 cells.\n" +
        "17) Salt bridge maintains electrical neutrality.\n" +
        "18) Electrolysis: extract Na, Al, Mg.\n" +
        "19) Electroplating: object = cathode.\n" +
        "20) Molten NaCl: Na at cathode, Cl₂ at anode.\n" +
        "21) Solid NaCl does NOT conduct; molten/solution DOES.\n" +
        "22) Graphite conducts (delocalized electrons).",
      bodyAm:
        "ወጥመዶቹን ሁሉ አስታውስ።",
    },
  ],

  questions: [
    // EASY MCQ Q1-Q40
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Exothermic reaction releases:", options: ["Electrons", "Protons", "Heat", "Water"], answer: "2", explanation: "Releases heat." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Endothermic reaction absorbs:", options: ["Electrons", "Heat", "Water", "Gas"], answer: "1", explanation: "Absorbs heat." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "ΔH < 0 means:", options: ["Endothermic", "Exothermic", "Neutral", "Spontaneous"], answer: "1", explanation: "ΔH < 0 = exothermic." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "ΔH > 0 means:", options: ["Exothermic", "Endothermic", "Neutral", "Not possible"], answer: "1", explanation: "Endothermic." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Combustion of wood is:", options: ["Endothermic", "Exothermic", "Neutral", "Reversible"], answer: "1", explanation: "Releases heat." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Photosynthesis is:", options: ["Exothermic", "Endothermic", "Neutral", "Not a reaction"], answer: "1", explanation: "Absorbs light energy." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "NH₄NO₃ dissolving in water feels:", options: ["Hot", "Cold", "No change", "Freezing"], answer: "1", explanation: "Endothermic = cold." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "NaOH dissolving in water feels:", options: ["Hot", "Cold", "Neutral", "Freezing"], answer: "0", explanation: "Exothermic = hot." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Which phase gives metallic conductivity?", options: ["Solid metal", "Solid ionic", "Aqueous solution", "Molten salt"], answer: "0", explanation: "Metals = electrons." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Charge carriers in metallic conductivity are:", options: ["Ions", "Electrons", "Protons", "Neutrons"], answer: "1", explanation: "Electrons." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Charge carriers in electrolytic conductivity are:", options: ["Electrons", "Ions", "Protons", "Neutrons"], answer: "1", explanation: "Ions." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Which conducts electricity in solution?", options: ["Sugar", "Ethanol", "NaCl", "Glucose"], answer: "2", explanation: "NaCl ionizes." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Which is a non-electrolyte?", options: ["NaCl", "HCl", "Sugar", "NaOH"], answer: "2", explanation: "Sugar doesn't ionize." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "A galvanic cell converts:", options: ["Chemical → electrical", "Electrical → chemical", "Heat → light", "Light → heat"], answer: "0", explanation: "Chemical → electrical." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "An electrolytic cell converts:", options: ["Chemical → electrical", "Electrical → chemical", "Heat → light", "Light → heat"], answer: "1", explanation: "Electrical → chemical." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "In BOTH cells, oxidation occurs at:", options: ["Anode", "Cathode", "Salt bridge", "Electrolyte"], answer: "0", explanation: "Anode = oxidation." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "In BOTH cells, reduction occurs at:", options: ["Anode", "Cathode", "Salt bridge", "Solution"], answer: "1", explanation: "Cathode = reduction." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "In galvanic cell, anode is:", options: ["Positive", "Negative", "Neutral", "Varies"], answer: "1", explanation: "Galvanic anode = negative." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "In galvanic cell, cathode is:", options: ["Positive", "Negative", "Neutral", "Varies"], answer: "0", explanation: "Galvanic cathode = positive." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "In electrolytic cell, anode is:", options: ["Positive", "Negative", "Neutral", "Varies"], answer: "0", explanation: "Electrolytic anode = positive." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "In electrolytic cell, cathode is:", options: ["Positive", "Negative", "Neutral", "Varies"], answer: "1", explanation: "Electrolytic cathode = negative." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "Daniell cell contains:", options: ["Zn and Cu", "Pb and PbO₂", "Cu and Ag", "Na and Cl"], answer: "0", explanation: "Zn anode + Cu cathode." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "Leclanché cell uses:", options: ["Pb and PbO₂", "Zn and MnO₂", "Cu and Ag", "Li and CoO₂"], answer: "1", explanation: "Zn + MnO₂ + NH₄Cl." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "Lead-storage battery uses:", options: ["Zn and Cu", "Pb and PbO₂", "Li and CoO₂", "Ag and Zn"], answer: "1", explanation: "Pb + PbO₂ + H₂SO₄." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "Lead-storage cell delivers about:", options: ["1.5 V", "2 V", "5 V", "12 V"], answer: "1", explanation: "2 V per cell." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "12 V car battery has how many cells?", options: ["2", "4", "6", "12"], answer: "2", explanation: "6 × 2 V = 12 V." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Leclanché cell voltage:", options: ["1.5 V", "2 V", "5 V", "9 V"], answer: "0", explanation: "~1.5 V." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Salt bridge in Daniell cell:", options: ["Generates electricity", "Maintains neutrality", "Stores energy", "Produces ions"], answer: "1", explanation: "Maintains electrical neutrality." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Primary cell is:", options: ["Rechargeable", "Non-rechargeable", "Both", "Not a cell"], answer: "1", explanation: "Primary = NOT rechargeable." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "Secondary cell is:", options: ["Non-rechargeable", "Rechargeable", "Never used", "Obsolete"], answer: "1", explanation: "Secondary = rechargeable." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "Electrolysis uses electricity to drive:", options: ["Spontaneous reaction", "Nonspontaneous reaction", "No reaction", "Only heating"], answer: "1", explanation: "Nonspontaneous." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "Electrolysis of molten NaCl produces Na at:", options: ["Anode", "Cathode", "Both", "Neither"], answer: "1", explanation: "Na⁺ + e⁻ → Na at cathode." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "Electrolysis of molten NaCl produces Cl₂ at:", options: ["Anode", "Cathode", "Both", "Neither"], answer: "0", explanation: "Cl⁻ → Cl₂ at anode." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "Which metal is extracted by electrolysis of molten salt?", options: ["Cu", "Fe", "Na", "Au"], answer: "2", explanation: "Na, Al, Mg, Ca, Li." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "Electroplating places the object being plated at the:", options: ["Anode", "Cathode", "Middle", "Outside cell"], answer: "1", explanation: "Object = cathode." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "Solid NaCl conducts electricity?", options: ["Yes", "No", "Sometimes", "Only if heated"], answer: "1", explanation: "Ions locked in lattice." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "Molten NaCl conducts electricity?", options: ["Yes", "No", "Only if cooled", "Never"], answer: "0", explanation: "Ions free to move." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "Graphite conducts electricity because:", options: ["It has ions", "It has delocalized electrons", "It is nonmetal", "It melts"], answer: "1", explanation: "Delocalized electrons." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "Which is the strongest metallic conductor?", options: ["Cu", "Ag", "Al", "Fe"], answer: "1", explanation: "Ag = best conductor." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "ΔH = ?", options: ["H_reactants − H_products", "H_products − H_reactants", "H_products + H_reactants", "H_products × H_reactants"], answer: "1", explanation: "ΔH = H_products − H_reactants." },

    // MEDIUM MCQ Q41-Q80
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Which is exothermic?", options: ["Photosynthesis", "Melting ice", "Combustion", "Boiling water"], answer: "2", explanation: "Combustion releases heat." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Which is endothermic?", options: ["NaOH dissolves", "CaCl₂ dissolves", "NH₄NO₃ dissolves", "Combustion"], answer: "2", explanation: "NH₄NO₃ = endothermic." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "Heat capacity is:", options: ["q/ΔT", "mcΔT", "q × ΔT", "q/m"], answer: "0", explanation: "C = q/ΔT." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "Specific heat capacity (c) =", options: ["q/ΔT", "q/(m×ΔT)", "m×ΔT", "q×m×ΔT"], answer: "1", explanation: "c = q/(m×ΔT)." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "To raise 100 g water by 10°C (c = 4.18), heat needed =", options: ["418 J", "4180 J", "41800 J", "41.8 J"], answer: "1", explanation: "q = 100×4.18×10 = 4180 J." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "Enthalpy diagram for exothermic has:", options: ["Products above reactants", "Products below reactants", "Both at same level", "No products"], answer: "1", explanation: "Products lower → released heat." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "Enthalpy diagram for endothermic has:", options: ["Products above reactants", "Products below", "Same", "No products"], answer: "0", explanation: "Products higher → absorbed heat." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "Metallic conductivity with ↑T:", options: ["Increases", "Decreases", "Same", "Doubles"], answer: "1", explanation: "Ions vibrate more → less conductivity." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "Electrolytic conductivity with ↑T:", options: ["Increases", "Decreases", "Same", "Zero"], answer: "0", explanation: "More ionization." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Which is a WEAK electrolyte?", options: ["NaCl", "HCl", "CH₃COOH", "NaOH"], answer: "2", explanation: "Acetic acid weak." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "Which is a STRONG electrolyte?", options: ["NH₃", "CH₃COOH", "NaOH", "H₂CO₃"], answer: "2", explanation: "NaOH strong." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "In Daniell cell, oxidation occurs at:", options: ["Cu", "Zn", "Salt bridge", "Solution"], answer: "1", explanation: "Zn → Zn²⁺ + 2e⁻." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "In Daniell cell, reduction occurs at:", options: ["Zn", "Cu", "Salt bridge", "Solution"], answer: "1", explanation: "Cu²⁺ + 2e⁻ → Cu." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "During Daniell cell discharge, Zn mass:", options: ["Increases", "Decreases", "Same", "Doubles"], answer: "1", explanation: "Zn → Zn²⁺ → loses mass." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "During Daniell cell discharge, Cu mass:", options: ["Increases", "Decreases", "Same", "Doubles"], answer: "0", explanation: "Cu²⁺ → Cu deposits → gains mass." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "Electrons flow in external wire from:", options: ["Cathode to anode", "Anode to cathode", "Both directions", "No flow"], answer: "1", explanation: "Anode → cathode." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "Leclanché cell anode is:", options: ["C", "Zn", "MnO₂", "NH₄Cl"], answer: "1", explanation: "Zn can = anode." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Lead battery electrolyte is:", options: ["NaCl", "H₂SO₄", "HCl", "KOH"], answer: "1", explanation: "35% H₂SO₄." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Lead battery anode is:", options: ["PbO₂", "Pb", "PbSO₄", "C"], answer: "1", explanation: "Spongy Pb = anode." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "Lead battery cathode is:", options: ["Pb", "PbO₂", "PbSO₄", "C"], answer: "1", explanation: "PbO₂ = cathode." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "During lead-battery discharge, both electrodes become:", options: ["Pb", "PbO₂", "PbSO₄", "H₂SO₄"], answer: "2", explanation: "Both → PbSO₄." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Which is rechargeable?", options: ["Daniell cell", "Leclanché cell", "Lead-storage battery", "Zn-C dry cell"], answer: "2", explanation: "Lead-storage = rechargeable." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "Electrolysis is used for:", options: ["Generating electricity", "Extracting metals", "Storing heat", "Cooling"], answer: "1", explanation: "Extracting Na, Al, Mg." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "Electrolysis of molten NaCl produces:", options: ["Na + Cl₂", "NaOH + Cl₂", "NaCl + H₂", "HCl + Na"], answer: "0", explanation: "2NaCl → 2Na + Cl₂." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Electrolysis of molten PbBr₂ produces:", options: ["Pb + Br₂", "PbBr + Br", "PbO + Br₂", "PbH₂ + Br"], answer: "0", explanation: "PbBr₂ → Pb + Br₂." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "During electrolysis of molten PbBr₂, Pb²⁺ goes to:", options: ["Anode", "Cathode", "Both", "Neither"], answer: "1", explanation: "Cations → cathode." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "During electrolysis of molten PbBr₂, Br⁻ goes to:", options: ["Anode", "Cathode", "Both", "Neither"], answer: "0", explanation: "Anions → anode." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "During electrolysis of molten PbBr₂, Br⁻ at anode is:", options: ["Reduced", "Oxidized", "Unchanged", "Neutralized"], answer: "1", explanation: "2Br⁻ → Br₂ + 2e⁻ (oxidation)." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "During electrolysis of molten PbBr₂, Pb²⁺ at cathode is:", options: ["Reduced", "Oxidized", "Unchanged", "Neutralized"], answer: "0", explanation: "Pb²⁺ + 2e⁻ → Pb (reduction)." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "Half-reaction at cathode in molten NaCl:", options: ["Na⁺ + e⁻ → Na", "2Cl⁻ → Cl₂ + 2e⁻", "Na → Na⁺ + e⁻", "Cl₂ → 2Cl⁻"], answer: "0", explanation: "Cathode = reduction." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Half-reaction at anode in molten NaCl:", options: ["Na⁺ + e⁻ → Na", "2Cl⁻ → Cl₂ + 2e⁻", "Na → Na⁺ + e⁻", "Cl₂ → 2Cl⁻"], answer: "1", explanation: "Anode = oxidation." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "Which metal is NOT extracted by electrolysis?", options: ["Na", "Al", "Fe", "Mg"], answer: "2", explanation: "Fe from blast furnace (reduction with C)." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "In electroplating, the plating metal is at:", options: ["Anode", "Cathode", "Both", "Neither"], answer: "0", explanation: "Plating metal = anode." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "Which is used to purify metals?", options: ["Galvanic cell", "Electrolytic cell", "Calorimeter", "Barometer"], answer: "1", explanation: "Electrolytic refining." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Which is a source of high specific heat?", options: ["Metals", "Water", "Air", "Salts"], answer: "1", explanation: "Water c = 4.18 J/g·K." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "Which cools a car engine?", options: ["Oil", "Water", "Air only", "Acid"], answer: "1", explanation: "Water high c = coolant." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "Photosynthesis requires energy in form of:", options: ["Heat", "Light", "Sound", "Electricity"], answer: "1", explanation: "Light energy." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "Combustion of methane is:", options: ["Endothermic", "Exothermic", "Neutral", "Not possible"], answer: "1", explanation: "Releases heat/light." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "ΔH for exothermic is:", options: ["Positive", "Negative", "Zero", "Variable"], answer: "1", explanation: "ΔH < 0." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "Total energy of universe is:", options: ["Increasing", "Decreasing", "Constant", "Zero"], answer: "2", explanation: "Conservation of energy." },

    // HARD MCQ Q81-Q100
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Which is a spontaneous process?", options: ["Electrolysis of water", "Zn + Cu²⁺ → Zn²⁺ + Cu", "Charging battery", "Electroplating"], answer: "1", explanation: "Zn displaces Cu spontaneously." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "Charge carriers in molten NaCl are:", options: ["Electrons", "Na⁺ and Cl⁻", "H⁺ and OH⁻", "Only Na⁺"], answer: "1", explanation: "Na⁺ and Cl⁻ ions." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "During charging of lead battery, reactions:", options: ["Same as discharge", "Reverse of discharge", "No reaction", "Side reaction"], answer: "1", explanation: "Reverse of discharge." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Charge is supplied to recharging battery from:", options: ["Internal reaction", "External source", "Water", "Air"], answer: "1", explanation: "External DC source." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "Which conducts electricity by ions?", options: ["Cu wire", "Molten NaCl", "Solid NaCl", "Graphite"], answer: "1", explanation: "Molten NaCl = ions." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "If both electrodes in electrolysis are same metal, product depends on:", options: ["Nothing", "Electrolyte", "Only anode", "Only cathode"], answer: "1", explanation: "Electrolyte determines products." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "In electrolysis of aqueous NaCl (brine), the products are:", options: ["Na + Cl₂", "H₂ + Cl₂ + NaOH", "Only H₂", "Only Cl₂"], answer: "1", explanation: "H₂ at cathode, Cl₂ at anode, NaOH in solution." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "Which statement is TRUE?", options: ["All metals are electrolytes", "All electrolytes are metals", "Non-electrolytes do not form ions", "Only acids are electrolytes"], answer: "2", explanation: "Non-electrolytes don't form ions." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "Cu cannot displace Zn from ZnSO₄ because:", options: ["Cu is more reactive", "Cu is less reactive", "Zn is nonmetal", "Both react"], answer: "1", explanation: "Cu less reactive." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "During charging lead battery, PbSO₄ at anode becomes:", options: ["Pb", "PbO₂", "PbSO₃", "PbCl₂"], answer: "0", explanation: "Recharge: PbSO₄ → Pb at former anode." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "If you place a zinc and copper strip in CuSO₄ solution (no salt bridge), what happens?", options: ["Electricity flows", "Zn dissolves but no current", "No reaction", "Cu deposits on Zn"], answer: "3", explanation: "Direct reaction: Cu deposits on Zn, no external circuit." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "Battery + bulb: bulb glows because:", options: ["Heat conducts", "Electrons flow through wire", "Ions flow through wire", "Light reflects"], answer: "1", explanation: "Electrons flow → bulb glows." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Adding salt to water increases conductivity because:", options: ["Salt generates heat", "Salt forms ions", "Water becomes acidic", "Nothing"], answer: "1", explanation: "Ions conduct." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Which aqueous solution conducts best?", options: ["0.1 M CH₃COOH", "0.1 M NaCl", "0.1 M glucose", "Pure water"], answer: "1", explanation: "0.1 M NaCl (strong electrolyte)." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "Which is NOT an application of electrolysis?", options: ["Purifying copper", "Electroplating", "Extracting Na", "Generating electricity"], answer: "3", explanation: "Generating = galvanic cell." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "ΔE = q + w; if q = −200 J, w = +50 J, ΔE =", options: ["−150 J", "+150 J", "−250 J", "+250 J"], answer: "0", explanation: "−200 + 50 = −150 J." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "When 10 g of water is heated from 20°C to 30°C, q =", options: ["418 J", "4180 J", "41.8 J", "4.18 J"], answer: "0", explanation: "q = 10 × 4.18 × 10 = 418 J." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "Cell notation Zn | Zn²⁺ || Cu²⁺ | Cu. Anode:", options: ["Zn", "Cu", "Salt bridge", "Nothing"], answer: "0", explanation: "Zn = left = anode." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "Which ion migrates to cathode in electrolysis of CuSO₄?", options: ["Cu²⁺", "SO₄²⁻", "Both", "Neither"], answer: "0", explanation: "Cations → cathode." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "Which is TRUE about salt bridge?", options: ["Provides electrons", "Maintains electrical neutrality", "Provides ions to electrodes", "Not needed"], answer: "1", explanation: "Neutrality maintenance." },

    // SHORT ANSWER Q101-Q120
    { id: "q101", type: "short", difficulty: "easy", stem: "Define exothermic and endothermic reaction.", answer: "EXOTHERMIC:\n• Releases heat to surroundings\n• ΔH < 0\n• Surroundings get HOT\n• Example: combustion, NaOH dissolving\n\nENDOTHERMIC:\n• Absorbs heat from surroundings\n• ΔH > 0\n• Surroundings get COLD\n• Example: photosynthesis, NH₄NO₃ dissolving", explanation: "Heat out vs heat in." },
    { id: "q102", type: "short", difficulty: "easy", stem: "What is the formula for heat? What is specific heat of water?", answer: "HEAT FORMULA:\nq = m × c × ΔT\n• q = heat (J)\n• m = mass (g)\n• c = specific heat (J/g·K)\n• ΔT = temperature change (K or °C)\n\nSPECIFIC HEAT OF WATER:\nc = 4.184 J/g·K (high)\n\nWater's high c makes it a good coolant.", explanation: "q = mcΔT; c_water = 4.18." },
    { id: "q103", type: "short", difficulty: "easy", stem: "Differentiate metallic and electrolytic conductivity.", answer: "METALLIC:\n• Charge carrier: ELECTRONS\n• Metals (solid)\n• No chemical change\n• ↓ with ↑T\n\nELECTROLYTIC:\n• Charge carrier: IONS\n• Solutions or molten salts\n• Has chemical change\n• ↑ with ↑T\n\nExample: Cu wire (metallic); NaCl solution (electrolytic).", explanation: "Electrons vs ions." },
    { id: "q104", type: "short", difficulty: "easy", stem: "Define electrolysis and its two uses.", answer: "ELECTROLYSIS = process using electrical energy to drive a NONSPONTANEOUS chemical reaction.\n\n• 'Electro' = electricity; 'lysis' = break apart\n• Occurs in electrolytic cells\n\nUSES:\n1) Extracting metals (Na, Al, Mg)\n2) Purifying metals (Cu refining)\n3) Electroplating\n4) Producing Cl₂, H₂, NaOH", explanation: "Electrical → chemical." },
    { id: "q105", type: "short", difficulty: "medium", stem: "Explain why NH₄NO₃ dissolving is endothermic.", answer: "NH₄NO₃ (ammonium nitrate) dissolving:\n\nNH₄NO₃(s) + heat → NH₄⁺(aq) + NO₃⁻(aq)\n\n• Energy required to break ionic lattice + hydrate ions\n• Absorbed from surroundings\n• ΔH > 0 (endothermic)\n• Solution gets COLD\n• Used in instant cold packs\n\nCompare: NaOH dissolving releases heat (exothermic).", explanation: "Absorbs heat → cold." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Describe the Daniell cell with half-reactions.", answer: "DANIELL CELL:\n• WET primary galvanic cell\n• Zn electrode in ZnSO₄ (anode compartment)\n• Cu electrode in CuSO₄ (cathode compartment)\n• Salt bridge (KCl + agar)\n\nHALF-REACTIONS:\nAnode (Zn): Zn(s) → Zn²⁺(aq) + 2e⁻\nCathode (Cu): Cu²⁺(aq) + 2e⁻ → Cu(s)\nOverall: Zn(s) + Cu²⁺(aq) → Zn²⁺(aq) + Cu(s)\n\nOBSERVATIONS:\n• Zn loses mass (dissolves)\n• Cu gains mass (deposits)", explanation: "Zn anode, Cu cathode." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Describe the Leclanché cell with reactions.", answer: "LECLANCHÉ (ZINC-CARBON) DRY CELL:\n• Primary (non-rechargeable)\n• Zn can (anode) + graphite rod (cathode) + paste (MnO₂ + NH₄Cl + ZnCl₂ + C)\n• Voltage: ~1.5 V\n\nHALF-REACTIONS:\nAnode: Zn → Zn²⁺ + 2e⁻\nCathode: 2NH₄⁺ + 2MnO₂ + 2e⁻ → Mn₂O₃ + H₂O + 2NH₃\nOverall: Zn + 2NH₄⁺ + 2MnO₂ → Zn²⁺ + Mn₂O₃ + H₂O + 2NH₃\n\nUSES: flashlights, radios, remote controls.", explanation: "Zn + MnO₂ + NH₄Cl, 1.5 V." },
    { id: "q108", type: "short", difficulty: "medium", stem: "Describe lead-storage battery discharge reactions.", answer: "LEAD-STORAGE BATTERY (during discharge):\n\nSTRUCTURE:\n• Anode: spongy Pb\n• Cathode: PbO₂\n• Electrolyte: 35% H₂SO₄\n\nDISCHARGE HALF-REACTIONS:\nAnode: Pb + SO₄²⁻ → PbSO₄ + 2e⁻\nCathode: PbO₂ + 4H⁺ + SO₄²⁻ + 2e⁻ → PbSO₄ + 2H₂O\nOverall: Pb + PbO₂ + 4H⁺ + 2SO₄²⁻ → 2PbSO₄ + 2H₂O\n\nKEY:\n• Both electrodes → PbSO₄\n• 2 V per cell\n• 12 V battery = 6 cells in series\n\nRECHARGE: reverse reaction applied externally", explanation: "Pb + PbO₂ + H₂SO₄ → PbSO₄ at both." },
    { id: "q109", type: "short", difficulty: "medium", stem: "Compare anode and cathode in galvanic vs electrolytic cells.", answer: "GALVANIC CELL:\n• Anode = NEGATIVE (oxidation)\n• Cathode = POSITIVE (reduction)\n• Electrons flow anode → cathode\n• Spontaneous reaction\n\nELECTROLYTIC CELL:\n• Anode = POSITIVE (oxidation)\n• Cathode = NEGATIVE (reduction)\n• Electrons flow anode → cathode\n• Nonspontaneous (external power)\n\nKEY: Anode = oxidation in BOTH. Cathode = reduction in BOTH. Only charges differ.", explanation: "Anode/cathode reactions same; charges differ." },
    { id: "q110", type: "short", difficulty: "medium", stem: "Describe electrolysis of molten NaCl.", answer: "MOLTEN (FUSED) NaCl ELECTROLYSIS:\n\nNaCl(l) → Na⁺(l) + Cl⁻(l)\n\nCATHODE (−): Na⁺ + e⁻ → Na(l)\nANODE (+): 2Cl⁻ → Cl₂(g) + 2e⁻\nOVERALL: 2NaCl(l) → 2Na(l) + Cl₂(g)\n\nPRODUCTS:\n• Na metal at cathode (silvery)\n• Cl₂ gas at anode (yellow-green)\n\nINDUSTRIAL: Downs process for Na metal.\nSame approach for Li, Mg, Ca from molten chlorides.", explanation: "Na at cathode; Cl₂ at anode." },
    { id: "q111", type: "short", difficulty: "medium", stem: "Describe electrolysis of molten PbBr₂.", answer: "MOLTEN PbBr₂ ELECTROLYSIS:\n\nPbBr₂(l) → Pb²⁺(l) + 2Br⁻(l)\n\nCATHODE (−): Pb²⁺ + 2e⁻ → Pb(l)\nANODE (+): 2Br⁻ → Br₂(g) + 2e⁻\nOVERALL: PbBr₂(l) → Pb(l) + Br₂(g)\n\nPRODUCTS:\n• Pb metal at cathode\n• Br₂ gas (reddish-brown, corrosive)\n\nPRECAUTION: Bromine very dangerous.", explanation: "Pb at cathode; Br₂ at anode." },
    { id: "q112", type: "short", difficulty: "medium", stem: "Explain purpose of salt bridge.", answer: "PURPOSE OF SALT BRIDGE:\n• Maintains ELECTRICAL NEUTRALITY between the two half-cell solutions\n• Allows ions to flow without mixing solutions\n• Prevents charge buildup\n\nHOW:\n• At anode side: Zn²⁺ builds up (positive)\n• At cathode side: Cu²⁺ depletes (negative sulfate builds up)\n• Salt bridge ions (K⁺, Cl⁻) flow to balance charge\n\nWITHOUT salt bridge: charge buildup STOPS current immediately.", explanation: "Maintains electrical neutrality." },
    { id: "q113", type: "short", difficulty: "medium", stem: "What are three applications of electrolysis?", answer: "1) EXTRACTION OF METALS:\n• Na from molten NaCl\n• Al from molten Al₂O₃\n• Mg from MgCl₂\n\n2) PURIFICATION OF METALS:\n• Electrolytic refining of Cu\n• Impure at anode; pure at cathode\n\n3) ELECTROPLATING:\n• Coating object with metal\n• Object = cathode\n• Plating metal = anode\n• Examples: chrome, silver, gold", explanation: "Extract, purify, plate." },
    { id: "q114", type: "short", difficulty: "medium", stem: "Why does solid NaCl not conduct but molten NaCl does?", answer: "SOLID NaCl:\n• Ions (Na⁺, Cl⁻) are FIXED in crystal lattice\n• Cannot move → NO conductivity\n\nMOLTEN NaCl:\n• Heat breaks lattice\n• Ions become FREE to move\n• Conducts electricity\n\nAlso aqueous NaCl conducts because ions free in solution.\n\nCONDUCTIVITY REQUIRES: mobile charge carriers.", explanation: "Solid = ions locked; molten/solution = ions free." },
    { id: "q115", type: "short", difficulty: "medium", stem: "Explain why water is a good coolant.", answer: "WHY WATER IS A GOOD COOLANT:\n\n1) HIGH SPECIFIC HEAT:\n• c = 4.184 J/g·K\n• Very high compared to metals\n• Absorbs LOTS of heat with SMALL temperature rise\n\n2) THERMAL STABILITY:\n• Doesn't heat up quickly\n• Stays liquid over wide range\n\n3) WIDELY AVAILABLE and CHEAP\n\n4) NON-TOXIC\n\nUSES:\n• Car radiators\n• Industrial cooling systems\n• Power plant cooling", explanation: "High c (4.18 J/g·K)." },
    { id: "q116", type: "short", difficulty: "hard", stem: "Predict if reaction is exothermic or endothermic and explain why.", answer: "RULE OF THUMB:\n• Combination reactions → usually EXOTHERMIC (bonds formed)\n• Decomposition reactions → usually ENDOTHERMIC (bonds broken)\n\nREASONING:\n• Bond formation RELEASES energy\n• Bond breaking REQUIRES energy\n• Combustion: forms CO₂ + H₂O → releases lots of energy\n• Photosynthesis: breaks CO₂ + H₂O → absorbs light energy\n\nEXAMPLES:\n• C + O₂ → CO₂ (exothermic)\n• CaCO₃ → CaO + CO₂ (endothermic)", explanation: "Bond formation releases; bond breaking absorbs." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Write the equation for lead battery recharge and explain.", answer: "LEAD-STORAGE BATTERY RECHARGE:\n\nApplying external voltage reverses the discharge reaction:\n\n2PbSO₄(s) + 2H₂O(l) → Pb(s) + PbO₂(s) + 2H₂SO₄(aq)\n\nWHAT HAPPENS:\n• PbSO₄ at former anode → Pb (regenerated)\n• PbSO₄ at former cathode → PbO₂\n• H₂SO₄ regenerated (electrolyte restored)\n\nROLE REVERSAL:\n• During discharge: Pb was anode, PbO₂ was cathode\n• During charge: PbO₂ acts as anode, Pb acts as cathode\n\nOXIDATION still at anode, REDUCTION still at cathode.", explanation: "Reverse reaction restores electrodes + electrolyte." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Explain why electrolysis is used to extract Na and Al but not Fe.", answer: "ELECTROLYSIS for Na and Al:\n• Both are VERY reactive metals\n• Forms stable compounds (NaCl, Al₂O₃)\n• Cannot be reduced by carbon easily\n• Extraction requires very strong reducing environment\n• Only electrolysis provides enough energy\n\nBLAST FURNACE for Fe:\n• Fe is LESS reactive\n• Fe₂O₃ + 3CO → 2Fe + 3CO₂\n• Fe can be reduced by carbon monoxide\n• Cheaper and more efficient\n\nRULE: Most reactive metals (K, Na, Ca, Mg, Al) require electrolysis. Less reactive (Fe, Zn, Pb, Cu) can be reduced with carbon.", explanation: "Reactivity determines extraction method." },
    { id: "q119", type: "short", difficulty: "hard", stem: "Calculate q and ΔH for dissolving 4 g of NaOH in 100 g water if temp rises by 10°C.", answer: "MASS of solution = 4 + 100 = 104 g\nSpecific heat of solution ≈ 4.18 J/g·K\nΔT = +10°C (rose)\n\nq = m × c × ΔT\nq = 104 × 4.18 × 10\nq = 4347 J (heat RELEASED, so q = −4347 J)\n\nMOLES NaOH = 4/40 = 0.1 mol\n\nΔH = q/n = −4347/0.1 = −43,470 J/mol\nΔH = −43.5 kJ/mol\n\nAnswer: ΔH ≈ −43.5 kJ/mol (exothermic, heats surroundings)", explanation: "ΔH ≈ −43.5 kJ/mol." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Explain why NH₄NO₃ cold pack works and NaOH hot pack works.", answer: "NH₄NO₃ COLD PACK:\n• Dissolution ABSORBS heat\n• ΔH > 0 (endothermic)\n• Heat drawn from surroundings (skin)\n• Feels COLD\n• Used for sprains/injuries\n\nNaOH HOT PACK:\n• Dissolution RELEASES heat\n• ΔH < 0 (exothermic)\n• Heat transferred to surroundings (skin)\n• Feels HOT\n• Used for muscle pain\n\nMECHANISM:\n• Both in sealed bag; break barrier → mixing\n• Instant temperature change", explanation: "NH₄NO₃ = endothermic (cold); NaOH = exothermic (hot)." },
  ],
};