import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 CHEMISTRY — UNIT 2
// SOLUTIONS
// Source: Grade 10 Chemistry Student Textbook (pp. 51–108)
// For: Abenezer (Abatu) — Grade 10
// ============================================================

export const g10ChemistryCh2: Chapter = {
  id: "ch2",
  number: 2,
  title: "Solutions",
  titleAm: "መፍትሄዎች",

  notes: [
    {
      id: "n0",
      title: "0. How to Master This Unit (Your Route to 100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, Unit 2 is SOLUTIONS. It has SEVEN big halves:\n" +
        "1) MIXTURES (homogeneous vs heterogeneous) + suspension, colloid, solution\n" +
        "2) SOLUTION PROCESS + inter-particle forces + 'like dissolves like'\n" +
        "3) SOLUBILITY RULES + temperature/pressure effects + Henry's law\n" +
        "4) HEAT OF SOLUTION (exothermic vs endothermic) + calorimetry\n" +
        "5) CONCENTRATION UNITS (%, ppm, ppb, mole fraction, molarity, molality, normality)\n" +
        "6) PREPARATION + DILUTION (M₁V₁ = M₂V₂)\n" +
        "7) SOLUTION STOICHIOMETRY + NET IONIC EQUATIONS\n\n" +
        "The WHOLE unit reduces to these must-know items:\n" +
        "• Difference between solution, colloid, suspension\n" +
        "• Tyndall effect\n" +
        "• 'Like dissolves like' rule\n" +
        "• Solubility rules (which salts soluble/insoluble)\n" +
        "• Henry's law: C = kP\n" +
        "• Heat of solution: q = mcΔT; ΔH = q/n\n" +
        "• Molarity: M = n/V(L)\n" +
        "• Molality: m = n/kg solvent\n" +
        "• Normality: N = M × z\n" +
        "• % w/w, % w/v, % v/v\n" +
        "• ppm and ppb\n" +
        "• Dilution: M₁V₁ = M₂V₂\n" +
        "• Net ionic equations (cancel spectator ions)",
      bodyAm:
        "አባቱ፣ ክፍል 2 መፍትሄዎች ነው። ሰባት ትላልቅ ክፍሎች።\n" +
        "ዋና ዋና ፅንሰ-ሀሳቦች:\n" +
        "• መፍትሄ, ኮሎይድ, ስስፔንሽን\n" +
        "• 'Like dissolves like'\n" +
        "• Henry's law\n" +
        "• Molarity, molality, normality\n" +
        "• Dilution\n" +
        "• Net ionic equations",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 — Mixtures & types",
          titleAm: "ደረጃ 1 — ድብልቆች",
          body:
            "HOMOGENEOUS MIXTURE:\n" +
            "• Uniform composition throughout\n" +
            "• No visible boundaries\n" +
            "• Example: salt water, air\n\n" +
            "HETEROGENEOUS MIXTURE:\n" +
            "• Non-uniform composition\n" +
            "• Visible phases\n" +
            "• Example: sand + water, oil + water\n\n" +
            "THREE SUBTYPES:\n" +
            "• SUSPENSION: large particles; settle on standing; heterogeneous; filterable\n" +
            "• COLLOID: 1–100 nm particles; do not settle; scatter light (Tyndall effect); heterogeneous but looks homogeneous\n" +
            "• SOLUTION: < 1 nm particles; homogeneous; transparent; do not settle\n\n" +
            "KEY: All solutions are homogeneous, but NOT all homogeneous mixtures are solutions.",
          bodyAm:
            "Homogeneous = አንድ ዓይነት።\n" +
            "Heterogeneous = የተለያየ።\n" +
            "Suspension (settle), colloid (Tyndall), solution (clear)።",
        },
        {
          id: "n0-2",
          title: "Pass 2 — Solution process & forces",
          titleAm: "ደረጃ 2 — መሟሟት",
          body:
            "SOLUTION PROCESS (3 steps):\n" +
            "1) Break solute-solute forces (endothermic, +ΔH)\n" +
            "2) Break solvent-solvent forces (endothermic, +ΔH)\n" +
            "3) Form solute-solvent forces (exothermic, −ΔH)\n\n" +
            "ΔH_solution = ΔH_solute + ΔH_solvent + ΔH_mix\n\n" +
            "LIKE DISSOLVES LIKE:\n" +
            "• Polar dissolves in polar (salt in water)\n" +
            "• Nonpolar dissolves in nonpolar (oil in hexane)\n" +
            "• Polar and nonpolar don't mix (oil + water = immiscible)\n\n" +
            "INTERMOLECULAR FORCES (weak to strong):\n" +
            "Dispersion < dipole-induced dipole < dipole-dipole < H-bond < ion-dipole",
          bodyAm:
            "3 ደረጃዎች።\n" +
            "Like dissolves like።\n" +
            "Polar → polar; nonpolar → nonpolar።",
        },
        {
          id: "n0-3",
          title: "Pass 3 — Solubility & Henry's law",
          titleAm: "ደረጃ 3 — መሟሟትና Henry",
          body:
            "SOLUBILITY = max amount of solute in given amount of solvent at a given temperature.\n\n" +
            "FACTORS:\n" +
            "• Temperature: solids ↑ solubility with ↑T; gases ↓ solubility with ↑T\n" +
            "• Pressure: significant effect on GAS solubility only\n\n" +
            "HENRY'S LAW:\n" +
            "C = kP\n" +
            "• C = concentration (solubility)\n" +
            "• k = Henry's law constant\n" +
            "• P = partial pressure of gas\n\n" +
            "SOLUBILITY RULES (common):\n" +
            "• Group 1A + NH₄⁺ salts = soluble\n" +
            "• Nitrates (NO₃⁻), acetates = soluble\n" +
            "• Chlorides = soluble (except Ag⁺, Pb²⁺, Hg₂²⁺)\n" +
            "• Sulfates = soluble (except Ba²⁺, Sr²⁺, Pb²⁺, Ca²⁺)\n" +
            "• Carbonates, phosphates, hydroxides = mostly INSOLUBLE",
          bodyAm:
            "Solubility ማለት ከፍተኛ መጠን።\n" +
            "Gas: ↑T = ↓solubility።\n" +
            "Henry: C = kP።\n" +
            "Group 1A soluble።",
        },
        {
          id: "n0-4",
          title: "Pass 4 — Heat of solution",
          titleAm: "ደረጃ 4 — የመሟሟት ሙቀት",
          body:
            "HEAT OF SOLUTION = heat released or absorbed when solute dissolves.\n\n" +
            "q = m × c × ΔT\n" +
            "• q = heat (J)\n" +
            "• m = mass of solution (g)\n" +
            "• c = specific heat (~4.18 J/g°C for water)\n" +
            "• ΔT = temperature change (°C)\n\n" +
            "MOLAR HEAT OF SOLUTION:\n" +
            "ΔH = q / n\n" +
            "• n = moles of solute\n" +
            "• Unit: kJ/mol\n\n" +
            "EXOTHERMIC (releases heat):\n" +
            "• ΔH negative\n" +
            "• Solution gets HOT\n" +
            "• Example: NaOH, CaCl₂, H₂SO₄\n\n" +
            "ENDOTHERMIC (absorbs heat):\n" +
            "• ΔH positive\n" +
            "• Solution gets COLD\n" +
            "• Example: NH₄NO₃, NH₄Cl",
          bodyAm:
            "q = mcΔT።\n" +
            "ΔH = q/n።\n" +
            "Exothermic: ሙቀት ይሰጣል፣ ΔH < 0።\n" +
            "Endothermic: ሙቀት ይወስዳል፣ ΔH > 0።",
        },
        {
          id: "n0-5",
          title: "Pass 5 — Concentration units",
          titleAm: "ደረጃ 5 — ትኩረት",
          body:
            "PERCENT BY MASS: %(w/w) = (mass solute/mass solution) × 100\n" +
            "PERCENT BY VOLUME: %(v/v) = (vol solute/vol solution) × 100\n" +
            "PERCENT BY MASS/VOLUME: %(w/v) = (mass solute/vol solution) × 100\n\n" +
            "PPM = (mass solute/mass solution) × 10⁶\n" +
            "PPB = (mass solute/mass solution) × 10⁹\n\n" +
            "MOLE FRACTION (X):\n" +
            "X_A = moles A / total moles\n" +
            "X_solute + X_solvent = 1\n\n" +
            "MOLARITY (M): M = n / V(L)\n" +
            "MOLALITY (m): m = n / kg solvent\n" +
            "NORMALITY (N): N = M × z\n" +
            "  z = H⁺ or OH⁻ transferable; or ion charge; or electrons",
          bodyAm:
            "%(w/w), %(v/v), %(w/v)።\n" +
            "ppm = ×10⁶; ppb = ×10⁹።\n" +
            "X_A = mol A / total።\n" +
            "M = n/V; m = n/kg; N = M×z።",
        },
        {
          id: "n0-6",
          title: "Pass 6 — Preparation & dilution",
          titleAm: "ደረጃ 6 — ማዘጋጀትና ማጥበቅ",
          body:
            "PREPARING A SOLUTION from solid:\n" +
            "1) Weigh solid\n" +
            "2) Dissolve in some solvent\n" +
            "3) Transfer to volumetric flask\n" +
            "4) Fill to the mark with solvent\n\n" +
            "DILUTION:\n" +
            "M₁V₁ = M₂V₂\n" +
            "• M₁ = concentrated (stock) molarity\n" +
            "• V₁ = volume taken from stock\n" +
            "• M₂ = diluted molarity\n" +
            "• V₂ = final volume\n\n" +
            "CAUTION: When diluting acid, ALWAYS add ACID to WATER, not water to acid.\n\n" +
            "Conversion between units: use density and molar mass.",
          bodyAm:
            "M₁V₁ = M₂V₂።\n" +
            "አሲድ ወደ ውሃ ጨምር — ውሃ ወደ አሲድ አይደለም።",
        },
        {
          id: "n0-7",
          title: "Pass 7 — Net ionic equations",
          titleAm: "ደረጃ 7 — Net ionic",
          body:
            "MOLECULAR EQUATION: AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)\n\n" +
            "COMPLETE IONIC: Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl(s) + Na⁺ + NO₃⁻\n\n" +
            "SPECTATOR IONS = ions that appear unchanged on both sides (Na⁺, NO₃⁻)\n\n" +
            "NET IONIC = cancel spectators:\n" +
            "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)\n\n" +
            "STEPS:\n" +
            "1) Balance molecular equation\n" +
            "2) Write complete ionic (soluble = ions; insoluble = solid)\n" +
            "3) Cancel spectator ions\n" +
            "4) Write net ionic equation",
          bodyAm:
            "Molecular → Complete ionic → Net ionic።\n" +
            "Spectator ions ይሰረዛሉ።",
        },
        {
          id: "n0-8",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• Solution vs colloid vs suspension differences.\n" +
            "• Tyndall effect = colloid.\n" +
            "• 'Like dissolves like' principle.\n" +
            "• Henry's law: C = kP.\n" +
            "• Heat of solution: q = mcΔT; ΔH = q/n.\n" +
            "• Exothermic vs endothermic salts.\n" +
            "• Molarity formula: M = n/V(L).\n" +
            "• Molality: m = n/kg solvent.\n" +
            "• Normality: N = M × z.\n" +
            "• Dilution: M₁V₁ = M₂V₂.\n" +
            "• ppm/ppb calculations.\n" +
            "• Mole fraction: X = mol A / total mol.\n" +
            "• Net ionic equations: cancel spectator ions.\n" +
            "• Solubility rules.",
          bodyAm:
            "ቀመሮችንና ደንቦችን አስታውስ።",
        },
      ],
    },

    {
      id: "n1",
      title: "2.1 Mixtures — Solution, Colloid, Suspension",
      titleAm: "2.1 ድብልቆች",
      body:
        "Abatu, a MIXTURE is a combination of two or more substances that keep their own properties. Mixtures are either HOMOGENEOUS or HETEROGENEOUS.",
      bodyAm:
        "ድብልቅ = ሁለት ወይም ከዚያ በላይ ንጥረ ነገሮች።",
      children: [
        {
          id: "n1-1",
          title: "Homogeneous vs heterogeneous",
          titleAm: "Homogeneous እና heterogeneous",
          body:
            "HOMOGENEOUS MIXTURE:\n" +
            "• Uniform composition throughout\n" +
            "• No visible boundaries\n" +
            "• Example: salt water, air, brass (alloy), sugar water\n\n" +
            "HETEROGENEOUS MIXTURE:\n" +
            "• Non-uniform composition\n" +
            "• Two or more visible phases\n" +
            "• Example: oil + water, sand + water, pizza",
          bodyAm:
            "Homogeneous = አንድ ዓይነት።\n" +
            "Heterogeneous = የተለያየ።",
        },
        {
          id: "n1-2",
          title: "Suspensions",
          titleAm: "ስስፔንሽን",
          body:
            "SUSPENSION:\n" +
            "• HETEROGENEOUS mixture\n" +
            "• LARGE solid particles spread through liquid\n" +
            "• Particles SETTLE on standing\n" +
            "• Can be separated by FILTRATION\n" +
            "• Example: sand + water, chalk + water, muddy water\n\n" +
            "Particle size: > 1000 nm",
          bodyAm:
            "ስስፔንሽን: ትልቅ ቅንጣት።\n" +
            "ይሰመጣል።\n" +
            "በማጣሪያ ይለያል።",
        },
        {
          id: "n1-3",
          title: "Solutions",
          titleAm: "መፍትሄ",
          body:
            "SOLUTION:\n" +
            "• HOMOGENEOUS mixture of solute + solvent\n" +
            "• Particle size: < 1 nm (atoms, ions, molecules)\n" +
            "• Particles do NOT settle\n" +
            "• Cannot be separated by filtration\n" +
            "• Transparent\n" +
            "• Example: salt water, sugar water, air, brass\n\n" +
            "SOLUTE = minor component\n" +
            "SOLVENT = major component",
          bodyAm:
            "መፍትሄ: homogeneous።\n" +
            "Solute = ትንሽ።\n" +
            "Solvent = ትልቅ።",
        },
        {
          id: "n1-4",
          title: "Colloids",
          titleAm: "ኮሎይድ",
          body:
            "COLLOID:\n" +
            "• HETEROGENEOUS but appears homogeneous\n" +
            "• Particle size: 1–100 nm\n" +
            "• Particles do NOT settle\n" +
            "• Cannot be separated by filtration\n" +
            "• Scatter light → TYNDALL EFFECT\n" +
            "• Two phases: dispersed phase + dispersion medium\n\n" +
            "Examples:\n" +
            "• Aerosol (fog, smoke)\n" +
            "• Foam (shaving cream)\n" +
            "• Emulsion (milk, cream)\n" +
            "• Sol (milk of magnesia)\n" +
            "• Gel (jelly, cheese)\n\n" +
            "TYNDALL EFFECT = scattering of light by colloidal particles.",
          bodyAm:
            "ኮሎይድ: 1–100 nm።\n" +
            "Tyndall effect ያሳያል።\n" +
            "Aerosol, foam, emulsion, sol, gel።",
        },
        {
          id: "n1-5",
          title: "Comparison table",
          titleAm: "የንጽጽር ሰንጠረዥ",
          body:
            "| Property | Solution | Colloid | Suspension |\n" +
            "|----------|----------|---------|------------|\n" +
            "| Particle size | < 1 nm | 1–100 nm | > 1000 nm |\n" +
            "| Appearance | Clear | Looks clear | Cloudy |\n" +
            "| Homogeneous? | Yes | No (but looks) | No |\n" +
            "| Settles? | No | No | Yes |\n" +
            "| Filters? | No | No | Yes |\n" +
            "| Tyndall? | No | Yes | Sometimes |\n" +
            "| Example | Salt water | Milk | Sand water |",
          bodyAm:
            "ሰንጠረዡን አስታውስ።",
        },
        {
          id: "n1-6",
          title: "Types of solutions by state",
          titleAm: "የመፍትሄ ዓይነቶች",
          body:
            "GASEOUS solutions:\n" +
            "• Gas in gas: air (N₂ + O₂)\n\n" +
            "LIQUID solutions:\n" +
            "• Gas in liquid: soda water (CO₂ in H₂O)\n" +
            "• Liquid in liquid: ethanol in water\n" +
            "• Solid in liquid: salt water\n\n" +
            "SOLID solutions:\n" +
            "• Solid in solid: brass (Cu + Zn)\n" +
            "• Gas in solid: H₂ in Pd\n" +
            "• Liquid in solid: dental amalgam",
          bodyAm:
            "Gas, liquid, solid መፍትሄዎች።\n" +
            "Brass = solid solution።",
        },
        {
          id: "n1-7",
          title: "⚠ Remember trap — Mixtures",
          titleAm: "⚠ አትርሳ — ድብልቆች",
          body:
            "• All SOLUTIONS are homogeneous; NOT all homogeneous mixtures are solutions.\n" +
            "• COLLOID: 1–100 nm; Tyndall effect.\n" +
            "• SUSPENSION: settles; filterable.\n" +
            "• Tyndall effect = light scattered by colloids.\n" +
            "• Milk is a COLLOID (emulsion), not a solution.\n" +
            "• Blood is a colloid/suspension mixture.\n" +
            "• Aerosol = colloid of liquid or solid in gas.",
          bodyAm:
            "Solution homogeneous።\n" +
            "Colloid = Tyndall።\n" +
            "Suspension = settle።",
        },
      ],
    },

    {
      id: "n2",
      title: "2.2 The Solution Process",
      titleAm: "2.2 የመሟሟት ሂደት",
      body:
        "Abatu, dissolving happens in THREE steps. The whole process is governed by INTERMOLECULAR FORCES.",
      bodyAm:
        "መሟሟት = 3 ደረጃዎች።",
      children: [
        {
          id: "n2-1",
          title: "Three steps of solution",
          titleAm: "ሦስቱ ደረጃዎች",
          body:
            "1) BREAK SOLUTE-SOLUTE forces (endothermic, requires energy)\n" +
            "2) BREAK SOLVENT-SOLVENT forces (endothermic, requires energy)\n" +
            "3) FORM SOLUTE-SOLVENT forces (exothermic, releases energy)\n\n" +
            "ΔH_solution = ΔH_solute + ΔH_solvent + ΔH_mix\n\n" +
            "Depends on relative strengths:\n" +
            "• Strong solute-solvent → EXOTHERMIC (ΔH < 0)\n" +
            "• Weak solute-solvent → ENDOTHERMIC (ΔH > 0)\n" +
            "• Same strengths → IDEAL (ΔH = 0)",
          bodyAm:
            "1) ማፍረስ solute\n" +
            "2) ማፍረስ solvent\n" +
            "3) መፍጠር solute-solvent።\n" +
            "ΔH = sum.",
        },
        {
          id: "n2-2",
          title: "'Like dissolves like' rule",
          titleAm: "ደንብ 'Like dissolves like'",
          body:
            "SUBSTANCES with SIMILAR intermolecular forces dissolve in each other.\n\n" +
            "• Polar solute → polar solvent (e.g., NaCl in H₂O, ethanol in H₂O)\n" +
            "• Nonpolar solute → nonpolar solvent (e.g., oil in hexane, I₂ in CCl₄)\n" +
            "• Polar and nonpolar → DO NOT MIX (oil + water = immiscible)\n\n" +
            "MISCIBLE = liquids that mix (ethanol + water)\n" +
            "IMMISCIBLE = liquids that DON'T mix (oil + water)",
          bodyAm:
            "ፖላር → ፖላር።\n" +
            "ኖንፖላር → ኖንፖላር።\n" +
            "Miscible = ይቀላቀላሉ።\n" +
            "Immiscible = አይቀላቀሉም።",
        },
        {
          id: "n2-3",
          title: "Intermolecular forces",
          titleAm: "የመካከለኛ ኃይሎች",
          body:
            "WEAK to STRONG:\n" +
            "1) DISPERSION (London) — between all molecules; weakest\n" +
            "2) DIPOLE-INDUCED DIPOLE — polar + nonpolar\n" +
            "3) DIPOLE-DIPOLE — polar + polar\n" +
            "4) HYDROGEN BONDING — H on N, O, F\n" +
            "5) ION-DIPOLE — ion + polar (e.g., NaCl in water); strongest\n\n" +
            "VAN DER WAALS forces = dispersion + dipole-dipole + dipole-induced\n" +
            "(Not ion-dipole, not H-bond)",
          bodyAm:
            "Dispersion < dipole-induced < dipole-dipole < H-bond < ion-dipole።\n" +
            "Van der Waals = የመጀመሪያዎቹ 3።",
        },
        {
          id: "n2-4",
          title: "Solubility rules (for ionic solids)",
          titleAm: "የመሟሟት ደንቦች",
          body:
            "SOLUBLE (in water):\n" +
            "• Group 1A salts (Na⁺, K⁺, Li⁺)\n" +
            "• NH₄⁺ (ammonium) salts\n" +
            "• Nitrates (NO₃⁻)\n" +
            "• Acetates (CH₃COO⁻)\n" +
            "• Chlorides, bromides, iodides (EXCEPT Ag⁺, Pb²⁺, Hg₂²⁺)\n" +
            "• Sulfates (EXCEPT Ba²⁺, Sr²⁺, Pb²⁺, Ca²⁺)\n\n" +
            "INSOLUBLE (mostly):\n" +
            "• Carbonates (CO₃²⁻)\n" +
            "• Phosphates (PO₄³⁻)\n" +
            "• Hydroxides (OH⁻) (except Group 1A and Ba²⁺)\n" +
            "• Sulfides (S²⁻)",
          bodyAm:
            "Group 1A + NH₄ + NO₃ = soluble።\n" +
            "AgCl, BaSO₄ = insoluble።\n" +
            "Carbonates, phosphates = insoluble።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap — Solution process",
          titleAm: "⚠ አትርሳ — መሟሟት",
          body:
            "• 'Like dissolves like' — polar with polar, nonpolar with nonpolar.\n" +
            "• Ion-dipole strongest — for ionic compounds in water.\n" +
            "• H-bond: H bonded to N, O, or F.\n" +
            "• Miscible = mixes; immiscible = doesn't mix.\n" +
            "• Oil + water = immiscible (oil is nonpolar).\n" +
            "• Group 1A + NH₄⁺ + nitrates = soluble.",
          bodyAm:
            "Like dissolves like።\n" +
            "Miscible vs immiscible።\n" +
            "Group 1A soluble።",
        },
      ],
    },

    {
      id: "n3",
      title: "2.3 Solubility — Equilibrium & Factors",
      titleAm: "2.3 መሟሟት — ሚዛንና ምክንያቶች",
      body:
        "Abatu, SOLUBILITY is the maximum amount of solute that dissolves in a given amount of solvent at a given temperature.",
      bodyAm:
        "መሟሟት = ከፍተኛ መጠን።",
      children: [
        {
          id: "n3-1",
          title: "Unsaturated, saturated, supersaturated",
          titleAm: "ሦስቱ ዓይነቶች",
          body:
            "UNSATURATED solution:\n" +
            "• Can dissolve MORE solute\n" +
            "• Below saturation point\n\n" +
            "SATURATED solution:\n" +
            "• Contains MAXIMUM dissolved solute\n" +
            "• At equilibrium: dissolving rate = recrystallization rate\n" +
            "• More solute will NOT dissolve\n\n" +
            "SUPERSATURATED solution:\n" +
            "• Contains MORE solute than saturation point\n" +
            "• Usually created by heating then cooling slowly\n" +
            "• UNSTABLE — adding a seed crystal causes precipitation\n\n" +
            "DYNAMIC EQUILIBRIUM: rate of dissolving = rate of crystallization.",
          bodyAm:
            "Unsaturated = ጨምር ይችላል።\n" +
            "Saturated = ከፍተኛ።\n" +
            "Supersaturated = ከከፍተኛ በላይ (unstable)።",
        },
        {
          id: "n3-2",
          title: "Temperature effects",
          titleAm: "የሙቀት ተጽዕኖ",
          body:
            "SOLIDS in liquids:\n" +
            "• ↑Temperature → ↑solubility (usually)\n" +
            "• Example: sugar dissolves more in hot tea\n\n" +
            "GASES in liquids:\n" +
            "• ↑Temperature → ↓solubility\n" +
            "• Warm soda goes flat faster (CO₂ escapes)\n" +
            "• Thermal pollution kills fish (less O₂ dissolved)",
          bodyAm:
            "ሙቀት ጨምር → solids ይሟሟሉ።\n" +
            "ሙቀት ጨምር → gases solubility ይቀንሳል።",
        },
        {
          id: "n3-3",
          title: "Pressure — Henry's law",
          titleAm: "ግፊት — Henry",
          body:
            "Pressure affects GAS solubility only (solids/liquids incompressible).\n\n" +
            "HENRY'S LAW:\n" +
            "C = kP\n" +
            "• C = solubility (concentration of dissolved gas)\n" +
            "• k = Henry's law constant (varies with gas, solvent, temperature)\n" +
            "• P = partial pressure of gas above solution\n\n" +
            "Alternative form (comparing two conditions):\n" +
            "C₁/P₁ = C₂/P₂\n\n" +
            "APPLICATIONS:\n" +
            "• Carbonated beverages sealed under pressure\n" +
            "• Deep-sea divers: high pressure → more N₂ dissolves in blood\n" +
            "• When cap opens: pressure drops → gas escapes (fizz)",
          bodyAm:
            "Henry: C = kP።\n" +
            "C₁/P₁ = C₂/P₂።\n" +
            "ግፊት ↑ → solubility ↑ (gas)።",
        },
        {
          id: "n3-4",
          title: "Worked Example — Henry's law",
          titleAm: "ምሳሌ — Henry",
          body:
            "Problem: CO₂ has Henry's constant k = 3.3 × 10⁻² mol/(L·atm). Find solubility at P = 4 atm.\n\n" +
            "Solution:\n" +
            "C = kP = (3.3 × 10⁻²)(4) = 0.132 mol/L\n\n" +
            "Problem 2: Solubility of N₂ at 1 atm = 6.8 × 10⁻⁴ M. Find solubility when P_N₂ = 0.78 atm.\n\n" +
            "Solution:\n" +
            "C₁/P₁ = C₂/P₂\n" +
            "C₂ = C₁ × P₂/P₁ = (6.8 × 10⁻⁴)(0.78/1)\n" +
            "C₂ = 5.3 × 10⁻⁴ M",
          bodyAm:
            "C = kP → C₁/P₁ = C₂/P₂።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap — Solubility",
          titleAm: "⚠ አትርስ — መሟሟት",
          body:
            "• Saturation = maximum; equilibrium reached.\n" +
            "• ↑T for GASES → ↓solubility.\n" +
            "• ↑P for GASES → ↑solubility.\n" +
            "• Henry: C = kP; only for GASES.\n" +
            "• Supersaturated = unstable; crystallizes easily.\n" +
            "• Saturated is dynamic equilibrium, not static.",
          bodyAm:
            "Gas: ↑P ↑solubility, ↑T ↓solubility።\n" +
            "Henry = ለጋዞች ብቻ።",
        },
      ],
    },

    {
      id: "n4",
      title: "2.4 Energy Changes in Solution",
      titleAm: "2.4 የመሟሟት ኃይል ለውጦች",
      body:
        "Abatu, dissolving can RELEASE or ABSORB heat. The energy involved is called the HEAT OF SOLUTION.",
      bodyAm:
        "ሙቀት ይሰጣል ወይም ይወስዳል።",
      children: [
        {
          id: "n4-1",
          title: "Heat of solution formula",
          titleAm: "የሙቀት ቀመር",
          body:
            "q = m × c × ΔT\n" +
            "• q = heat (Joules)\n" +
            "• m = mass of SOLUTION (g)\n" +
            "• c = specific heat (J/g°C) — for water, 4.18\n" +
            "• ΔT = temperature change (°C)\n\n" +
            "MOLAR HEAT OF SOLUTION:\n" +
            "ΔH_solution = q / n\n" +
            "• n = moles of solute\n" +
            "• Unit: J/mol or kJ/mol\n" +
            "• Negative ΔH = exothermic\n" +
            "• Positive ΔH = endothermic",
          bodyAm:
            "q = mcΔT።\n" +
            "ΔH = q/n።",
        },
        {
          id: "n4-2",
          title: "Exothermic vs endothermic dissolution",
          titleAm: "Exothermic እና endothermic",
          body:
            "EXOTHERMIC (releases heat, ΔH < 0):\n" +
            "• Solution gets HOT\n" +
            "• ΔH_mix more negative than ΔH_breaking\n" +
            "• Examples: NaOH, CaCl₂, H₂SO₄, MgSO₄\n" +
            "• Used in HOT PACKS\n\n" +
            "ENDOTHERMIC (absorbs heat, ΔH > 0):\n" +
            "• Solution gets COLD\n" +
            "• ΔH_mix less negative than ΔH_breaking\n" +
            "• Examples: NH₄NO₃, NH₄Cl\n" +
            "• Used in COLD PACKS",
          bodyAm:
            "Exothermic: ሙቀት ይሰጣል።\n" +
            "Endothermic: ሙቀት ይወስዳል።\n" +
            "NaOH = ሞቃት።\n" +
            "NH₄NO₃ = ቀዝቃዛ።",
        },
        {
          id: "n4-3",
          title: "Worked Example — Heat of solution",
          titleAm: "ምሳሌ — heat of solution",
          body:
            "Problem: 5.19 g Na₂CO₃ dissolved in 75 g water. Temp rose from T to T+3.8°C. Calculate ΔH.\n\n" +
            "Solution:\n" +
            "Mass solution = 5.19 + 75 = 80.19 g\n" +
            "ΔT = 3.8°C (temperature rise)\n" +
            "c = 3.82 J/g°C\n" +
            "q = mcΔT = 80.19 × 3.82 × 3.8 = 1164 J\n\n" +
            "Since temperature ROSE, heat released → q = −1164 J\n" +
            "Moles Na₂CO₃ = 5.19/106 = 0.049 mol\n" +
            "ΔH = q/n = −1164 / 0.049 = −23,800 J/mol\n" +
            "ΔH = −23.8 kJ/mol (exothermic)",
          bodyAm:
            "q = mcΔT።\n" +
            "ΔH = −23.8 kJ/mol።",
        },
        {
          id: "n4-4",
          title: "⚠ Remember trap — Heat of solution",
          titleAm: "⚠ አትርሳ — ሙቀት",
          body:
            "• Heat RISES → EXOTHERMIC (ΔH < 0)\n" +
            "• Heat DROPS → ENDOTHERMIC (ΔH > 0)\n" +
            "• q = mcΔT; use MASS OF SOLUTION.\n" +
            "• NH₄NO₃ = cold pack (endothermic).\n" +
            "• NaOH, CaCl₂ = hot pack (exothermic).\n" +
            "• ΔH = q/n (per mole).",
          bodyAm:
            "Heat ↑ = exothermic።\n" +
            "Heat ↓ = endothermic።\n" +
            "q = mcΔT።",
        },
      ],
    },

    {
      id: "n5",
      title: "2.5 Ways of Expressing Concentration",
      titleAm: "2.5 የትኩረት መግለጫዎች",
      body:
        "Abatu, CONCENTRATION is the amount of solute in a given amount of solution or solvent. There are MANY ways to express it.",
      bodyAm:
        "ትኩረት = የ solute መጠን።",
      children: [
        {
          id: "n5-1",
          title: "Percent by mass, volume, and mass/volume",
          titleAm: "መቶኛ በማስ/ቮልዩም",
          body:
            "%(w/w) mass percent:\n" +
            "%(w/w) = (mass solute / mass solution) × 100%\n" +
            "• Example: 13.5 g glucose in 100 g water → 13.5/113.5 × 100 = 11.9%\n\n" +
            "%(v/v) volume percent:\n" +
            "%(v/v) = (volume solute / volume solution) × 100%\n" +
            "• Example: 70 mL isopropanol in 100 mL → 70%\n\n" +
            "%(w/v) mass/volume percent:\n" +
            "%(w/v) = (mass solute / volume solution) × 100%\n" +
            "• Example: 0.9 g NaCl in 100 mL → 0.9% (isotonic saline)",
          bodyAm:
            "%(w/w) = mass/mass።\n" +
            "%(v/v) = vol/vol።\n" +
            "%(w/v) = mass/vol።",
        },
        {
          id: "n5-2",
          title: "ppm and ppb",
          titleAm: "ppm እና ppb",
          body:
            "PPM = parts per million:\n" +
            "ppm = (mass solute / mass solution) × 10⁶\n" +
            "• For dilute aqueous: 1 ppm ≈ 1 mg/L\n\n" +
            "PPB = parts per billion:\n" +
            "ppb = (mass solute / mass solution) × 10⁹\n" +
            "• 1 ppb ≈ 1 μg/L\n\n" +
            "USED FOR:\n" +
            "• Trace pollutants in environment\n" +
            "• Contaminants in water (Pb, Hg)\n" +
            "• Air quality",
          bodyAm:
            "ppm = ×10⁶።\n" +
            "ppb = ×10⁹።\n" +
            "1 ppm ≈ 1 mg/L።",
        },
        {
          id: "n5-3",
          title: "Mole fraction",
          titleAm: "Mole fraction",
          body:
            "MOLE FRACTION (X):\n" +
            "X_A = moles A / total moles of solution\n\n" +
            "• X_solute + X_solvent = 1\n" +
            "• Unitless\n\n" +
            "Example: 30 g I₂ (M=254) in 400 g CCl₄ (M=154)\n" +
            "Moles I₂ = 30/254 = 0.118 mol\n" +
            "Moles CCl₄ = 400/154 = 2.60 mol\n" +
            "Total = 2.718 mol\n" +
            "X_I₂ = 0.118/2.718 = 0.043\n" +
            "X_CCl₄ = 1 − 0.043 = 0.957",
          bodyAm:
            "X_A = n_A / n_total።\n" +
            "X_solute + X_solvent = 1።",
        },
        {
          id: "n5-4",
          title: "Molarity (M)",
          titleAm: "Molarity (M)",
          body:
            "MOLARITY = moles of solute per LITER of solution.\n\n" +
            "M = n / V(L)\n" +
            "• n = moles of solute\n" +
            "• V = volume of SOLUTION in liters\n\n" +
            "Also: M = (mass/M) / V(L)\n\n" +
            "Example: 16 g CH₃OH (M=32) in 200 mL solution\n" +
            "n = 16/32 = 0.5 mol\n" +
            "V = 0.2 L\n" +
            "M = 0.5/0.2 = 2.5 M\n\n" +
            "Note: M depends on temperature (volume changes with T).",
          bodyAm:
            "M = n/V።\n" +
            "V = በ ሊትር።\n" +
            "Volume solution ብቻ።",
        },
        {
          id: "n5-5",
          title: "Molality (m)",
          titleAm: "Molality (m)",
          body:
            "MOLALITY = moles of solute per KILOGRAM of SOLVENT.\n\n" +
            "m = n / kg solvent\n" +
            "• n = moles of solute\n" +
            "• kg solvent = mass of SOLVENT in kilograms\n\n" +
            "Example: 32 g CaCl₂ (M=111) in 271 g water\n" +
            "n = 32/111 = 0.288 mol\n" +
            "kg solvent = 0.271 kg\n" +
            "m = 0.288/0.271 = 1.06 mol/kg\n\n" +
            "Note: m does NOT depend on temperature (mass doesn't change).",
          bodyAm:
            "m = n/kg solvent።\n" +
            "Solvent ብቻ።\n" +
            "Temperature አይነካውም።",
        },
        {
          id: "n5-6",
          title: "Normality (N)",
          titleAm: "Normality (N)",
          body:
            "NORMALITY = gram-equivalents of solute per LITER of solution.\n\n" +
            "N = equivalents / V(L)\n" +
            "equivalents = (mass/M) × z = n × z\n\n" +
            "where z = number of H⁺ or OH⁻ (acids/bases), OR total charge (salts), OR electrons (redox)\n\n" +
            "RELATIONSHIP with molarity:\n" +
            "N = M × z\n\n" +
            "Examples:\n" +
            "• HCl: z = 1 → N = M\n" +
            "• H₂SO₄: z = 2 → N = 2M\n" +
            "• H₃PO₄ (complete): z = 3 → N = 3M\n" +
            "• Ca(OH)₂: z = 2\n" +
            "• Al₂(SO₄)₃: z = 6",
          bodyAm:
            "N = M × z።\n" +
            "HCl: z=1.\n" +
            "H₂SO₄: z=2.\n" +
            "H₃PO₄: z=3.",
        },
        {
          id: "n5-7",
          title: "Unit conversions",
          titleAm: "አሃድ መቀየር",
          body:
            "TO CONVERT between units:\n" +
            "• %(w/w) → M: need density\n" +
            "  M = (%(w/w) × density × 10) / molar mass\n" +
            "• M → m: need density of solution\n" +
            "• M → N: use z\n\n" +
            "Example: 36.5% w/w HCl, density = 1.20 g/mL, M=36.5\n" +
            "M = (36.5 × 1.20 × 10) / 36.5 = 12 M",
          bodyAm:
            "% → M: use density።\n" +
            "M = (% × density × 10) / M።",
        },
        {
          id: "n5-8",
          title: "⚠ Remember trap — Concentration",
          titleAm: "⚠ አትርሳ — ትኩረት",
          body:
            "• Molarity: volume of SOLUTION (L).\n" +
            "• Molality: mass of SOLVENT (kg).\n" +
            "• Molarity changes with temperature (V changes).\n" +
            "• Molality does NOT change with temperature.\n" +
            "• Normality: N = M × z.\n" +
            "• ppm = ×10⁶, ppb = ×10⁹.\n" +
            "• X_solute + X_solvent = 1.\n" +
            "• For dilute aqueous: 1 ppm ≈ 1 mg/L.",
          bodyAm:
            "M: solution volume.\n" +
            "m: solvent mass.\n" +
            "N = M×z።",
        },
      ],
    },

    {
      id: "n6",
      title: "2.6 Preparation & Dilution of Solutions",
      titleAm: "2.6 ማዘጋጀትና ማጥበቅ",
      body:
        "Abatu, you must know HOW to prepare solutions and how to DILUTE them.",
      bodyAm:
        "ማዘጋጀትና ማጥበቅ።",
      children: [
        {
          id: "n6-1",
          title: "Preparing a solution from solid",
          titleAm: "ከጠጣር ማዘጋጀት",
          body:
            "STEPS:\n" +
            "1) Calculate mass needed: m = M × V × molar mass\n" +
            "2) Weigh the solid on balance\n" +
            "3) Transfer to beaker; dissolve in distilled water\n" +
            "4) Transfer to VOLUMETRIC FLASK of correct size\n" +
            "5) Rinse beaker; transfer rinsings to flask\n" +
            "6) Add water to the CALIBRATION MARK\n" +
            "7) Stopper and invert to mix",
          bodyAm:
            "Calculate mass → weigh → dissolve → volumetric flask → dilute to mark።",
        },
        {
          id: "n6-2",
          title: "Preparing a solution from stock (dilution)",
          titleAm: "ከስቶክ ማዘጋጀት",
          body:
            "DILUTION: adding solvent to reduce concentration.\n\n" +
            "Key: MOLES of solute stay the SAME\n" +
            "n₁ = n₂\n" +
            "M₁V₁ = M₂V₂\n\n" +
            "• M₁ = concentrated (stock) molarity\n" +
            "• V₁ = volume of stock needed\n" +
            "• M₂ = diluted molarity\n" +
            "• V₂ = final volume after dilution\n\n" +
            "Solve for V₁ = M₂V₂ / M₁",
          bodyAm:
            "M₁V₁ = M₂V₂።\n" +
            "V₁ = M₂V₂/M₁።",
        },
        {
          id: "n6-3",
          title: "Worked Example — Dilution",
          titleAm: "ምሳሌ — dilution",
          body:
            "Problem: Prepare 250 mL of 2.25 M H₂SO₄ from 7.41 M stock.\n\n" +
            "Solution:\n" +
            "M₁ = 7.41 M; V₁ = ?\n" +
            "M₂ = 2.25 M; V₂ = 250 mL\n\n" +
            "V₁ = M₂V₂/M₁ = (2.25 × 250) / 7.41\n" +
            "V₁ = 562.5/7.41 = 75.9 mL\n\n" +
            "Method:\n" +
            "1) Measure 75.9 mL of 7.41 M stock\n" +
            "2) Add to ~half-filled 250 mL volumetric flask with water\n" +
            "3) Fill to mark with distilled water",
          bodyAm:
            "V₁ = 75.9 mL።",
        },
        {
          id: "n6-4",
          title: "Safety — adding acid to water",
          titleAm: "ደህንነት",
          body:
            "ALWAYS add ACID to WATER (not water to acid).\n\n" +
            "Reason:\n" +
            "• Adding water to concentrated acid releases a LOT of heat at the surface\n" +
            "• Water can boil and splatter acid on you\n" +
            "• Adding acid slowly to water allows heat to dissipate\n\n" +
            "RULE: 'Do as you oughta, add acid to water.'",
          bodyAm:
            "ACID → WATER።\n" +
            "ውሃ ወደ አሲድ አይደለም።",
        },
        {
          id: "n6-5",
          title: "⚠ Remember trap — Prep & dilution",
          titleAm: "⚠ አትርሳ — ማዘጋጀት",
          body:
            "• Dilution: M₁V₁ = M₂V₂ (moles conserved).\n" +
            "• ALWAYS add acid to water (not water to acid).\n" +
            "• Volumetric flask used for accurate volumes.\n" +
            "• DILUTE ≠ unsaturated; CONCENTRATED ≠ saturated.\n" +
            "• 'Dilute' = few moles per volume; 'concentrated' = many.\n" +
            "• Dilute/concentrated are RELATIVE qualitative terms.",
          bodyAm:
            "M₁V₁ = M₂V₂።\n" +
            "Acid → water።\n" +
            "Dilute ≠ unsaturated።",
        },
      ],
    },

    {
      id: "n7",
      title: "2.7 Solution Stoichiometry & Net Ionic Equations",
      titleAm: "2.7 ስቶይኪዮሜትሪና ኔት ionic",
      body:
        "Abatu, in solution reactions, you can use MOLARITY × VOLUME to find moles, then use mole ratios.",
      bodyAm:
        "M×V = moles።",
      children: [
        {
          id: "n7-1",
          title: "Steps for solution stoichiometry",
          titleAm: "ደረጃዎች",
          body:
            "STEPS:\n" +
            "1) Balance equation\n" +
            "2) Find moles using n = M × V (for solutions) or n = m/M (for solids)\n" +
            "3) Use mole ratio from equation\n" +
            "4) Convert to desired units (concentration, volume, mass)\n\n" +
            "Example: How many L of 0.35 M AgNO₃ react with 55 mL of 0.24 M NaCl?\n" +
            "AgNO₃ + NaCl → AgCl + NaNO₃\n" +
            "Mole ratio = 1:1\n" +
            "n_NaCl = 0.24 × 0.055 = 0.0132 mol\n" +
            "n_AgNO₃ = 0.0132 mol\n" +
            "V_AgNO₃ = n/M = 0.0132/0.35 = 0.0377 L = 37.7 mL",
          bodyAm:
            "n = M×V።\n" +
            "Mole ratio።\n" +
            "V = n/M።",
        },
        {
          id: "n7-2",
          title: "Molecular, ionic, net ionic equations",
          titleAm: "ሦስቱ ቀመሮች",
          body:
            "MOLECULAR EQUATION:\n" +
            "AgNO₃(aq) + NaCl(aq) → AgCl(s) + NaNO₃(aq)\n" +
            "(shown as if all were molecules)\n\n" +
            "COMPLETE IONIC EQUATION:\n" +
            "Ag⁺ + NO₃⁻ + Na⁺ + Cl⁻ → AgCl(s) + Na⁺ + NO₃⁻\n" +
            "(strong electrolytes shown as ions)\n\n" +
            "SPECTATOR IONS = Na⁺, NO₃⁻ (unchanged on both sides)\n\n" +
            "NET IONIC EQUATION:\n" +
            "Ag⁺(aq) + Cl⁻(aq) → AgCl(s)\n" +
            "(cancel spectators)",
          bodyAm:
            "Molecular → complete ionic → net ionic።\n" +
            "Spectators ይሰረዛሉ።",
        },
        {
          id: "n7-3",
          title: "Steps for net ionic equations",
          titleAm: "ደረጃዎች",
          body:
            "1) Write balanced MOLECULAR equation\n" +
            "2) Write COMPLETE IONIC equation:\n" +
            "   - Soluble strong electrolytes → ions\n" +
            "   - Insoluble solids, gases, weak electrolytes → molecules/formula\n" +
            "3) Cancel SPECTATOR ions (appear unchanged on both sides)\n" +
            "4) Write NET IONIC equation\n\n" +
            "Example:\n" +
            "Na₂CO₃(aq) + CaCl₂(aq) → CaCO₃(s) + 2NaCl(aq)\n" +
            "2Na⁺ + CO₃²⁻ + Ca²⁺ + 2Cl⁻ → CaCO₃(s) + 2Na⁺ + 2Cl⁻\n" +
            "Net: Ca²⁺(aq) + CO₃²⁻(aq) → CaCO₃(s)",
          bodyAm:
            "1) Molecular\n" +
            "2) Complete ionic\n" +
            "3) Cancel\n" +
            "4) Net ionic",
        },
        {
          id: "n7-4",
          title: "⚠ Remember trap — Stoichiometry",
          titleAm: "⚠ አትርሳ — ስቶይኪዮሜትሪ",
          body:
            "• n = M × V (use L, not mL).\n" +
            "• Spectator ions appear unchanged on both sides.\n" +
            "• Soluble → ions in complete ionic.\n" +
            "• Insoluble (solid) → keep as formula.\n" +
            "• Net ionic = cancel spectators.\n" +
            "• ALL strong electrolytes (HCl, NaOH, NaCl) → ions in solution.",
          bodyAm:
            "n = M×V (በሊትር)።\n" +
            "Spectators ይሰረዛሉ።",
        },
      ],
    },

    {
      id: "nRef",
      title: "Formula Sheet — Unit 2",
      titleAm: "የቀመር ሉህ — ክፍል 2",
      body:
        "| Quantity | Formula |\n" +
        "|----------|---------|\n" +
        "| Percent mass | %(w/w) = (m_solute/m_solution) × 100 |\n" +
        "| Percent volume | %(v/v) = (V_solute/V_solution) × 100 |\n" +
        "| Percent mass/vol | %(w/v) = (m_solute/V_solution) × 100 |\n" +
        "| ppm | (m_solute/m_solution) × 10⁶ |\n" +
        "| ppb | (m_solute/m_solution) × 10⁹ |\n" +
        "| Mole fraction | X_A = n_A / n_total |\n" +
        "| Molarity | M = n/V(L) |\n" +
        "| Molality | m = n/kg solvent |\n" +
        "| Normality | N = M × z |\n" +
        "| Equivalents | eq = (m/M) × z |\n" +
        "| Dilution | M₁V₁ = M₂V₂ |\n" +
        "| Moles | n = m/M |\n" +
        "| Heat of solution | q = mcΔT |\n" +
        "| Molar heat | ΔH = q/n |\n" +
        "| Henry's law | C = kP |\n" +
        "| Henry comparison | C₁/P₁ = C₂/P₂ |\n" +
        "| %(w/w) → M | M = (% × density × 10)/M_molar |",
      bodyAm:
        "ሰንጠረዡን አስታውስ።",
    },

    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 2",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1) Solution homogeneous; colloid Tyndall; suspension settles.\n" +
        "2) 'Like dissolves like' — polar with polar.\n" +
        "3) Miscible vs immiscible.\n" +
        "4) Saturated = maximum (dynamic equilibrium).\n" +
        "5) ↑T → ↓gas solubility.\n" +
        "6) Henry's law only for gases: C = kP.\n" +
        "7) Heat of solution: q = mcΔT.\n" +
        "8) Exothermic = hot; endothermic = cold.\n" +
        "9) Molarity = n/V(SOLUTION, L).\n" +
        "10) Molality = n/kg SOLVENT.\n" +
        "11) Normality N = M × z.\n" +
        "12) Dilution M₁V₁ = M₂V₂.\n" +
        "13) ALWAYS add acid to water.\n" +
        "14) ppm = ×10⁶; ppb = ×10⁹.\n" +
        "15) Spectator ions = unchanged both sides.\n" +
        "16) Soluble salts → ions in ionic equation.\n" +
        "17) Insoluble → keep as formula.\n" +
        "18) Group 1A, NH₄⁺, NO₃⁻ salts = soluble.\n" +
        "19) AgCl, BaSO₄ = insoluble.\n" +
        "20) For dilute aqueous: 1 ppm ≈ 1 mg/L.",
      bodyAm:
        "ወጥመዶቹን ሁሉ አስታውስ።",
    },
  ],

  questions: [
    // EASY MCQ Q1-Q40
    { id: "q1", type: "mcq", difficulty: "easy", stem: "A solution is a:", options: ["Heterogeneous mixture", "Homogeneous mixture", "Pure substance", "Compound"], answer: "1", explanation: "Solution = homogeneous." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "The minor component in a solution is:", options: ["Solvent", "Solute", "Precipitate", "Colloid"], answer: "1", explanation: "Solute = minor." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "The major component in a solution is:", options: ["Solvent", "Solute", "Precipitate", "Colloid"], answer: "0", explanation: "Solvent = major." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Which is a homogeneous mixture?", options: ["Sand + water", "Salt water", "Oil + water", "Muddy water"], answer: "1", explanation: "Salt water is homogeneous." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Which is a heterogeneous mixture?", options: ["Salt water", "Air", "Oil + water", "Brass"], answer: "2", explanation: "Oil + water is heterogeneous." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "A suspension will:", options: ["Not settle", "Settle on standing", "Have Tyndall effect only", "Be homogeneous"], answer: "1", explanation: "Suspension settles." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "A colloid has particle size:", options: ["< 1 nm", "1–100 nm", "> 1000 nm", "Any size"], answer: "1", explanation: "1–100 nm." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The Tyndall effect is shown by:", options: ["Solutions", "Colloids", "Pure substances", "None"], answer: "1", explanation: "Colloids scatter light." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Which is a colloid?", options: ["Salt water", "Milk", "Sand + water", "Sugar water"], answer: "1", explanation: "Milk = colloid (emulsion)." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "'Like dissolves like' means:", options: ["Polar dissolves in nonpolar", "Similar forces dissolve in each other", "Polar and nonpolar mix", "All dissolve in water"], answer: "1", explanation: "Similar intermolecular forces." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Salt dissolves in water because:", options: ["Salt is nonpolar", "Water is nonpolar", "Both are polar (ion-dipole)", "Random"], answer: "2", explanation: "Ion-dipole interaction." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Oil and water are:", options: ["Miscible", "Immiscible", "Same", "Both polar"], answer: "1", explanation: "Oil nonpolar → immiscible." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "Saturated solution contains:", options: ["Fewer solute than max", "Maximum dissolved solute", "No solute", "Only solvent"], answer: "1", explanation: "Saturated = maximum." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "A supersaturated solution is:", options: ["Stable", "Unstable", "Common", "Always cold"], answer: "1", explanation: "Unstable — precipitates easily." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "When temperature increases, gas solubility usually:", options: ["Increases", "Decreases", "Same", "Doubles"], answer: "1", explanation: "↑T = ↓gas solubility." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Henry's law relates:", options: ["Solubility & temperature", "Solubility & pressure (gas)", "Molarity & molality", "Volume & mass"], answer: "1", explanation: "Gas solubility & pressure." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "Henry's law equation:", options: ["C = kT", "C = kP", "P = kC", "C = P/T"], answer: "1", explanation: "C = kP." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Molarity is defined as:", options: ["moles/L solution", "moles/kg solvent", "mass/L", "volume/L"], answer: "0", explanation: "M = n/V (L)." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "Molality uses:", options: ["Volume of solution", "Mass of solvent (kg)", "Volume of solvent", "Mass of solution"], answer: "1", explanation: "Molality = n/kg solvent." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "Normality equals:", options: ["M × z", "M × V", "M / z", "M + z"], answer: "0", explanation: "N = M × z." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Dilution formula:", options: ["M₁V₁ = M₂V₂", "M₁ + V₁ = M₂ + V₂", "M₁/M₂ = V₁V₂", "M₁V₂ = M₂V₁"], answer: "0", explanation: "M₁V₁ = M₂V₂." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "1 ppm is:", options: ["×10³", "×10⁶", "×10⁹", "×10"], answer: "1", explanation: "ppm = ×10⁶." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "1 ppb is:", options: ["×10⁶", "×10⁹", "×10³", "×10"], answer: "1", explanation: "ppb = ×10⁹." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "Mole fraction sum of solute + solvent =", options: ["0", "1", "100", "Variable"], answer: "1", explanation: "X_solute + X_solvent = 1." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "Heat of solution is measured by:", options: ["q = mcΔT", "q = M × V", "q = kP", "q = N × z"], answer: "0", explanation: "q = mcΔT." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "Which gives COLD pack?", options: ["NaOH", "CaCl₂", "NH₄NO₃", "H₂SO₄"], answer: "2", explanation: "NH₄NO₃ = endothermic = cold." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Which gives HOT pack?", options: ["NH₄NO₃", "CaCl₂", "NH₄Cl", "KNO₃"], answer: "1", explanation: "CaCl₂ = exothermic." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Which is a strong electrolyte?", options: ["Sugar", "NaCl", "Ethanol", "Glucose"], answer: "1", explanation: "NaCl fully dissociates." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Which salt is INSOLUBLE?", options: ["NaCl", "KNO₃", "AgCl", "NH₄Cl"], answer: "2", explanation: "AgCl is insoluble." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "Which salt is SOLUBLE?", options: ["AgCl", "BaSO₄", "NaCl", "PbCO₃"], answer: "2", explanation: "NaCl soluble." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "Spectator ions are:", options: ["React on both sides", "Unchanged on both sides", "Precipitate", "Always metal ions"], answer: "1", explanation: "Unchanged on both sides." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "For the reaction AgNO₃ + NaCl → AgCl + NaNO₃, the net ionic is:", options: ["Ag⁺ + NO₃⁻ → AgNO₃", "Na⁺ + Cl⁻ → NaCl", "Ag⁺ + Cl⁻ → AgCl", "AgCl + Na⁺ → AgNaCl"], answer: "2", explanation: "Ag⁺ + Cl⁻ → AgCl." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "Adding water to concentrated acid:", options: ["Safe", "Dangerous (splatter)", "Same as acid to water", "Does nothing"], answer: "1", explanation: "Dangerous — always add acid to water." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "Which is a solid solution?", options: ["Air", "Brass", "Salt water", "Soda water"], answer: "1", explanation: "Brass = Cu + Zn solid solution." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "Soda water is which type?", options: ["Gas in liquid", "Liquid in liquid", "Solid in liquid", "Gas in gas"], answer: "0", explanation: "CO₂ in water." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "Air is which type?", options: ["Gas in gas", "Liquid in gas", "Solid in gas", "Gas in liquid"], answer: "0", explanation: "Mixture of gases." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "Molality uses:", options: ["L of solution", "kg of solvent", "L of solvent", "kg of solution"], answer: "1", explanation: "kg of SOLVENT." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "Molarity changes with:", options: ["Temperature", "Pressure only", "Mass", "Volume only"], answer: "0", explanation: "Volume changes with T." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "Molality does NOT change with:", options: ["Mass", "Temperature", "Moles", "Solvent"], answer: "1", explanation: "Mass doesn't change with T." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "Which is NOT a concentration unit?", options: ["Molarity", "Molality", "Normality", "Temperature"], answer: "3", explanation: "Temperature is not a concentration." },

    // MEDIUM MCQ Q41-Q80
    { id: "q41", type: "mcq", difficulty: "medium", stem: "5 g salt dissolved in 95 g water. %(w/w) salt =", options: ["5%", "5.26%", "95%", "50%"], answer: "0", explanation: "5/100 × 100 = 5%." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "10 g salt in 90 g water. %(w/w) =", options: ["10%", "9%", "90%", "11%"], answer: "0", explanation: "10/(10+90) × 100 = 10%." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "20 mL ethanol in 100 mL solution. %(v/v) =", options: ["20%", "80%", "5%", "40%"], answer: "0", explanation: "20/100 = 20%." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "1 ppm equals approximately:", options: ["1 g/L", "1 mg/L", "1 μg/L", "1 kg/L"], answer: "1", explanation: "For dilute aqueous, 1 ppm ≈ 1 mg/L." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "4 mg Pb in 1 kg water. Concentration in ppm =", options: ["4 ppm", "0.4 ppm", "40 ppm", "400 ppm"], answer: "0", explanation: "4 mg/kg = 4 ppm." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "0.5 mol NaCl in 1 L solution. Molarity =", options: ["0.5 M", "1 M", "2 M", "0.25 M"], answer: "0", explanation: "M = 0.5/1 = 0.5 M." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "2 mol NaOH in 500 mL solution. Molarity =", options: ["0.5 M", "1 M", "2 M", "4 M"], answer: "3", explanation: "M = 2/0.5 = 4 M." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "58.5 g NaCl (M=58.5) in 1 L solution. M =", options: ["0.5", "1", "2", "10"], answer: "1", explanation: "1 mol/1 L = 1 M." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "If 0.5 mol in 250 mL, M =", options: ["0.5 M", "1 M", "2 M", "4 M"], answer: "2", explanation: "0.5/0.25 = 2 M." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Molality of 0.5 mol solute in 500 g solvent =", options: ["0.5 m", "1 m", "2 m", "5 m"], answer: "1", explanation: "0.5/0.5 = 1 m." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "Molality of 2 mol solute in 4 kg solvent =", options: ["0.5 m", "1 m", "2 m", "4 m"], answer: "0", explanation: "2/4 = 0.5 m." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "Normality of 0.5 M H₂SO₄ =", options: ["0.5 N", "1 N", "2 N", "4 N"], answer: "1", explanation: "z = 2 → N = 1 N." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "Normality of 0.1 M HCl =", options: ["0.1 N", "0.2 N", "1 N", "10 N"], answer: "0", explanation: "z = 1 → N = 0.1 N." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "Normality of 0.2 M H₃PO₄ (complete dissociation) =", options: ["0.2 N", "0.4 N", "0.6 N", "2 N"], answer: "2", explanation: "z = 3 → N = 0.6 N." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "To make 500 mL of 0.1 M from 1 M stock, volume needed =", options: ["50 mL", "100 mL", "200 mL", "500 mL"], answer: "0", explanation: "V₁ = 0.1×500/1 = 50 mL." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "To make 1 L of 0.5 M from 2 M stock, V₁ =", options: ["100 mL", "250 mL", "500 mL", "1000 mL"], answer: "1", explanation: "V₁ = 0.5×1000/2 = 250 mL." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "Heat required to raise 100 g water by 10°C (c = 4.18):", options: ["4180 J", "418 J", "41800 J", "4.18 J"], answer: "0", explanation: "q = 100×4.18×10 = 4180 J." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "If dissolving salt RAISES temp, the process is:", options: ["Endothermic", "Exothermic", "Neutral", "Reversible only"], answer: "1", explanation: "Heat released = exothermic." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "If dissolving salt LOWERS temp, the process is:", options: ["Exothermic", "Endothermic", "Neutral", "Catalytic"], answer: "1", explanation: "Heat absorbed = endothermic." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "Which has stronger intermolecular force?", options: ["Dispersion", "Dipole-dipole", "Ion-dipole", "Dipole-induced"], answer: "2", explanation: "Ion-dipole is strongest." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "Which is a dipole-dipole interaction example?", options: ["HCl + HCl", "Na⁺ + H₂O", "Oil + oil", "I₂ + I₂"], answer: "0", explanation: "Polar-polar." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Hydrogen bonding occurs when H is bonded to:", options: ["C", "S", "N, O, or F", "Na"], answer: "2", explanation: "N, O, F only." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "Which is a common H-bonding molecule?", options: ["CH₄", "H₂O", "CO₂", "CCl₄"], answer: "1", explanation: "H₂O — H bonded to O." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "Which salt is soluble?", options: ["AgCl", "BaSO₄", "PbCO₃", "KNO₃"], answer: "3", explanation: "KNO₃ (Group 1A + nitrate) = soluble." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Which salt is insoluble?", options: ["NaCl", "KBr", "BaSO₄", "NH₄Cl"], answer: "2", explanation: "BaSO₄ is insoluble." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "Which solution conducts electricity?", options: ["Sugar water", "Ethanol", "NaCl solution", "Pure water"], answer: "2", explanation: "NaCl → ions conduct." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "Which is a strong electrolyte?", options: ["Acetic acid", "HCl", "Sugar", "Ethanol"], answer: "1", explanation: "HCl ionizes completely." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "The net ionic equation for HCl + NaOH → NaCl + H₂O is:", options: ["H⁺ + Cl⁻ → HCl", "Na⁺ + OH⁻ → NaOH", "H⁺ + OH⁻ → H₂O", "HCl → H⁺ + Cl⁻"], answer: "2", explanation: "H⁺ + OH⁻ → H₂O." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "Spectator ions in AgNO₃ + NaCl → AgCl + NaNO₃ are:", options: ["Ag⁺, Cl⁻", "Na⁺, NO₃⁻", "Ag⁺, Na⁺", "Cl⁻, NO₃⁻"], answer: "1", explanation: "Na⁺ and NO₃⁻ unchanged." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "For dilute aqueous solutions, 1 mg/L equals:", options: ["1 ppm", "1 ppb", "100 ppm", "1000 ppm"], answer: "0", explanation: "1 mg/L = 1 ppm." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "A solution with 2 mol solute and 3 mol solvent has X_solute =", options: ["0.4", "0.6", "0.667", "1"], answer: "0", explanation: "2/(2+3) = 0.4." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "X_solvent for the above (X_solute = 0.4):", options: ["0.4", "0.6", "1", "0.5"], answer: "1", explanation: "1 − 0.4 = 0.6." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "Which is miscible?", options: ["Oil + water", "Ethanol + water", "Hexane + water", "CCl₄ + water"], answer: "1", explanation: "Both polar." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "In a saturated solution:", options: ["No solute dissolved", "Max solute dissolved, dynamic equilibrium", "All solute undissolved", "Only pure solvent"], answer: "1", explanation: "Equilibrium at saturation." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Adding a seed crystal to a supersaturated solution causes:", options: ["Nothing", "Crystallization", "More dissolving", "Evaporation"], answer: "1", explanation: "Crystallization (precipitation)." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "When a soda bottle is opened, pressure drops and:", options: ["More CO₂ dissolves", "Less CO₂ dissolved (escapes)", "Nothing changes", "Water forms"], answer: "1", explanation: "CO₂ escapes → less solubility." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "Carbonated drinks are sealed under pressure because:", options: ["To make bubbles", "To keep CO₂ dissolved", "To cool", "To sweeten"], answer: "1", explanation: "High pressure keeps CO₂ dissolved." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "Specific heat of water ≈", options: ["1 J/g°C", "4.18 J/g°C", "10 J/g°C", "100 J/g°C"], answer: "1", explanation: "4.18 J/g°C." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "ΔH = q/n gives:", options: ["Heat per gram", "Molar heat of solution", "Heat per L", "Heat per mole solvent"], answer: "1", explanation: "Molar heat (per mole solute)." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "1 kg of 4 ppm solution contains how much solute?", options: ["4 mg", "4 g", "4 kg", "40 mg"], answer: "0", explanation: "4 ppm = 4 mg/kg." },

    // HARD MCQ Q81-Q100
    { id: "q81", type: "mcq", difficulty: "hard", stem: "36.5 g HCl (M=36.5) in 1 L water. Density 1.2. M =", options: ["1 M", "10 M", "12 M", "24 M"], answer: "2", explanation: "36.5 g in 100 g soln, V = 100/1.2 = 83.3 mL; M = 1/0.0833 = 12 M." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "Molality of 0.5 mol solute in 500 g water =", options: ["0.5 m", "1 m", "2 m", "5 m"], answer: "1", explanation: "0.5/0.5 = 1 m." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "If 5.19 g Na₂CO₃ (M=106) dissolves in 75 g water, raising temp by 3.8°C, q =", options: ["1000 J", "1164 J", "2000 J", "5000 J"], answer: "1", explanation: "q = 80.19 × 3.82 × 3.8 ≈ 1164 J." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Molar heat of solution from q=1164 J, n=0.049 mol =", options: ["−23.8 kJ/mol", "−5 kJ/mol", "+23.8 kJ/mol", "+5 kJ/mol"], answer: "0", explanation: "ΔH = −1164/0.049 ≈ −23.8 kJ/mol (exothermic)." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "To prepare 250 mL of 0.1 M NaCl (M=58.5), mass NaCl =", options: ["0.585 g", "1.46 g", "5.85 g", "14.6 g"], answer: "1", explanation: "0.1 × 0.25 × 58.5 = 1.46 g." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "18 g H₂O (M=18) in 500 mL solution. M =", options: ["0.5", "1", "2", "4"], answer: "2", explanation: "1 mol in 0.5 L = 2 M." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "Convert 0.5 M H₂SO₄ to normality:", options: ["0.5 N", "1 N", "2 N", "4 N"], answer: "1", explanation: "z=2 → N = 1 N." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "0.1 N NaOH is same as which M?", options: ["0.05 M", "0.1 M", "0.2 M", "1 M"], answer: "1", explanation: "z=1 → M = N = 0.1." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "0.05 M CaCl₂ (Z=2). What is N?", options: ["0.05 N", "0.1 N", "0.2 N", "0.5 N"], answer: "1", explanation: "z=2 → N = 0.1." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "100 mL of 0.5 M HCl (V₂=500 mL). M₂ =", options: ["0.05 M", "0.1 M", "0.2 M", "0.5 M"], answer: "1", explanation: "M₂ = M₁V₁/V₂ = 0.5×100/500 = 0.1 M." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "How much 5 M NaOH to make 500 mL of 0.5 M?", options: ["5 mL", "50 mL", "100 mL", "500 mL"], answer: "1", explanation: "V₁ = 0.5×500/5 = 50 mL." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "Adding 8.0 g NaOH to 100 g water. If ΔT = 10°C, q =", options: ["~4200 J", "~8400 J", "~42000 J", "~420 J"], answer: "0", explanation: "q = 108 × 4.18 × 10 ≈ 4514 J." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Net ionic for BaCl₂ + Na₂SO₄ → BaSO₄ + 2NaCl:", options: ["Ba²⁺ + SO₄²⁻ → BaSO₄", "Ba²⁺ + 2Cl⁻ → BaCl₂", "Na⁺ + SO₄²⁻ → Na₂SO₄", "BaSO₄ + 2NaCl → BaCl₂ + Na₂SO₄"], answer: "0", explanation: "Ba²⁺ + SO₄²⁻ → BaSO₄." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Which is a NON-electrolyte?", options: ["HCl", "NaOH", "Sugar", "NaCl"], answer: "2", explanation: "Sugar doesn't ionize." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "Which increases the rate of dissolution?", options: ["Cooling", "Smaller surface area", "Stirring", "Less solvent"], answer: "2", explanation: "Stirring increases rate." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "Which is miscible?", options: ["Ethanol + water", "Oil + water", "Hexane + water", "CCl₄ + water"], answer: "0", explanation: "Ethanol + water miscible." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "100 mL of 2 M HCl + 100 mL of 2 M NaOH → pH of mixture?", options: ["Strongly acidic", "Strongly basic", "Neutral ~7", "pH 1"], answer: "2", explanation: "Moles equal → neutralization → neutral." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "0.1 mol NaCl in 100 mL water. M =", options: ["0.1 M", "1 M", "2 M", "10 M"], answer: "1", explanation: "0.1/0.1 = 1 M." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "Molarity of 25 mL solution containing 0.005 mol solute:", options: ["0.1 M", "0.2 M", "0.05 M", "5 M"], answer: "1", explanation: "0.005/0.025 = 0.2 M." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "When solid dissolves in water, ΔH = ΔH_solute + ΔH_solvent + ΔH_mix. If ΔH_solute+ΔH_solvent > |ΔH_mix|, the process is:", options: ["Exothermic", "Endothermic", "Ideal", "Neutral"], answer: "1", explanation: "Net energy absorbed → endothermic." },

    // SHORT ANSWER Q101-Q120
    { id: "q101", type: "short", difficulty: "easy", stem: "Differentiate between solution, colloid, and suspension.", answer: "SOLUTION:\n• Homogeneous\n• Particle size < 1 nm\n• Does not settle; cannot be filtered\n• No Tyndall effect\n• Example: salt water\n\nCOLLOID:\n• Heterogeneous but appears homogeneous\n• Particle size 1–100 nm\n• Does not settle; cannot be filtered\n• Shows Tyndall effect\n• Example: milk\n\nSUSPENSION:\n• Heterogeneous\n• Particle size > 1000 nm\n• Settles on standing\n• Can be filtered\n• Example: sand + water", explanation: "Size, settling, and Tyndall effect." },
    { id: "q102", type: "short", difficulty: "easy", stem: "What is the Tyndall effect?", answer: "TYNDALL EFFECT = the scattering of a beam of light by particles in a COLLOID.\n\n• Colloidal particles (1–100 nm) are large enough to scatter light\n• The beam becomes visible as it passes through the colloid\n• Solutions (< 1 nm) do NOT show Tyndall effect\n• Example: headlights in fog, sunbeam through dusty air\n\nThis effect distinguishes colloids from true solutions.", explanation: "Colloids scatter light; solutions do not." },
    { id: "q103", type: "short", difficulty: "easy", stem: "What does 'like dissolves like' mean? Give 2 examples.", answer: "'LIKE DISSOLVES LIKE' — substances with SIMILAR intermolecular forces dissolve in each other.\n\n• POLAR dissolves in POLAR\n• NONPOLAR dissolves in NONPOLAR\n\nExamples:\n1) NaCl (ionic/polar) dissolves in H₂O (polar)\n2) I₂ (nonpolar) dissolves in CCl₄ (nonpolar)\n3) Oil (nonpolar) does NOT dissolve in water (polar)", explanation: "Similar forces dissolve; polar with polar." },
    { id: "q104", type: "short", difficulty: "easy", stem: "What are the four common concentration units and their formulas?", answer: "1) MOLARITY: M = n/V(L solution)\n2) MOLALITY: m = n/kg solvent\n3) NORMALITY: N = M × z\n4) MOLE FRACTION: X_A = n_A/n_total\n\nAlso:\n• %(w/w) = (m_solute/m_solution)×100\n• ppm = (m_solute/m_solution)×10⁶", explanation: "M, m, N, X." },
    { id: "q105", type: "short", difficulty: "medium", stem: "State Henry's law. Give one application.", answer: "HENRY'S LAW: The solubility of a GAS in a liquid is DIRECTLY PROPORTIONAL to the partial pressure of that gas above the liquid, at constant temperature.\n\nC = kP\n\n• C = concentration of dissolved gas\n• k = Henry's law constant\n• P = partial pressure of gas\n\nAPPLICATIONS:\n1) Carbonated beverages (high P keeps CO₂ dissolved)\n2) Deep-sea divers (high pressure → more N₂ in blood; decompression sickness)\n3) When soda cap opens → pressure drops → gas escapes (fizz)", explanation: "Gas solubility ∝ pressure." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Calculate the molarity of 5.85 g NaCl (M=58.5) in 250 mL solution.", answer: "n = m/M = 5.85/58.5 = 0.1 mol\nV = 250 mL = 0.25 L\nM = n/V = 0.1/0.25 = 0.4 M\n\nAnswer: 0.4 M NaCl", explanation: "0.4 M." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Calculate molality of 32 g CaCl₂ (M=111) in 271 g water.", answer: "n = 32/111 = 0.288 mol\nkg solvent = 271/1000 = 0.271 kg\n\nm = n/kg = 0.288/0.271 = 1.06 mol/kg = 1.06 m\n\nAnswer: 1.06 m CaCl₂", explanation: "1.06 m." },
    { id: "q108", type: "short", difficulty: "medium", stem: "How would you prepare 250 mL of 0.5 M NaCl from a 2 M stock?", answer: "Use dilution formula: M₁V₁ = M₂V₂\n\nM₁ = 2 M (stock)\nV₁ = ?\nM₂ = 0.5 M (target)\nV₂ = 250 mL\n\nV₁ = M₂V₂/M₁ = (0.5 × 250)/2 = 62.5 mL\n\nMethod:\n1) Measure 62.5 mL of 2 M NaCl\n2) Transfer to 250 mL volumetric flask\n3) Fill to mark with distilled water\n4) Mix well", explanation: "62.5 mL stock." },
    { id: "q109", type: "short", difficulty: "medium", stem: "Differentiate saturated, unsaturated, and supersaturated solutions.", answer: "UNSATURATED:\n• Can dissolve MORE solute\n• Below saturation point\n• More solute will dissolve\n\nSATURATED:\n• Contains MAXIMUM dissolved solute\n• At dynamic equilibrium: dissolving rate = recrystallization rate\n• More solute will NOT dissolve\n\nSUPERSATURATED:\n• Contains MORE solute than saturation point\n• Created by heating then cooling slowly\n• UNSTABLE\n• Adding a seed crystal causes crystallization", explanation: "Below/at/above saturation." },
    { id: "q110", type: "short", difficulty: "medium", stem: "Which salt is insoluble: AgCl, NaCl, KNO₃, NH₄Cl? Explain.", answer: "AgCl (silver chloride) is INSOLUBLE.\n\nReason (solubility rules):\n• Group 1A salts (Na⁺, K⁺) — soluble\n• Ammonium (NH₄⁺) salts — soluble\n• Nitrates (NO₃⁻) — soluble\n• Chlorides (Cl⁻) — soluble EXCEPT Ag⁺, Pb²⁺, Hg₂²⁺\n\nSo NaCl, KNO₃, NH₄Cl are soluble. AgCl is the exception → insoluble.", explanation: "AgCl is insoluble." },
    { id: "q111", type: "short", difficulty: "medium", stem: "Explain why NH₄NO₃ produces a cold pack while NaOH produces a hot pack.", answer: "NH₄NO₃ (cold pack):\n• Dissolution absorbs MORE energy than it releases\n• ΔH_solution > 0 (endothermic)\n• Solution gets COLD\n• Used in instant cold packs\n\nNaOH (hot pack):\n• Dissolution releases MORE energy than it absorbs\n• ΔH_solution < 0 (exothermic)\n• Solution gets HOT\n• Used in instant hot packs\n\nDifference = energy required to break forces vs energy released forming new forces.", explanation: "NH₄NO₃ = endothermic (cold); NaOH = exothermic (hot)." },
    { id: "q112", type: "short", difficulty: "medium", stem: "Convert 36.5% (w/w) HCl (density 1.20 g/mL, M=36.5) to molarity.", answer: "M = (%(w/w) × density × 10) / molar mass\n\nM = (36.5 × 1.20 × 10) / 36.5\nM = 438 / 36.5 = 12 M\n\nAnswer: 12 M HCl", explanation: "12 M." },
    { id: "q113", type: "short", difficulty: "medium", stem: "Write molecular, complete ionic, and net ionic equations for BaCl₂ + Na₂SO₄.", answer: "MOLECULAR:\nBaCl₂(aq) + Na₂SO₄(aq) → BaSO₄(s) + 2NaCl(aq)\n\nCOMPLETE IONIC:\nBa²⁺ + 2Cl⁻ + 2Na⁺ + SO₄²⁻ → BaSO₄(s) + 2Na⁺ + 2Cl⁻\n\nSpectator ions: Na⁺, Cl⁻\n\nNET IONIC:\nBa²⁺(aq) + SO₄²⁻(aq) → BaSO₄(s)", explanation: "Cancel Na⁺, Cl⁻." },
    { id: "q114", type: "short", difficulty: "medium", stem: "If dissolving 5 g KOH in 50 g water raises temp by 5°C, calculate q (c = 4.18 J/g°C).", answer: "Mass solution = 5 + 50 = 55 g\nΔT = 5°C\nc = 4.18 J/g°C\n\nq = mcΔT = 55 × 4.18 × 5 = 1149.5 J ≈ 1150 J\n\nSince temperature rose → heat released → q = −1150 J\n\nExothermic.", explanation: "q ≈ 1150 J." },
    { id: "q115", type: "short", difficulty: "hard", stem: "Calculate normality of 0.2 M H₂SO₄ and 0.5 M Ca(OH)₂.", answer: "H₂SO₄: z = 2 (2 H⁺ released)\nN = M × z = 0.2 × 2 = 0.4 N\n\nCa(OH)₂: z = 2 (2 OH⁻ released)\nN = M × z = 0.5 × 2 = 1.0 N\n\nAnswer: H₂SO₄ = 0.4 N; Ca(OH)₂ = 1.0 N", explanation: "0.4 N; 1.0 N." },
    { id: "q116", type: "short", difficulty: "hard", stem: "For the reaction H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O, what volume of 0.5 M H₂SO₄ exactly neutralizes 100 mL of 1 M NaOH?", answer: "Moles NaOH = M × V = 1 × 0.100 = 0.100 mol\n\nMole ratio H₂SO₄:NaOH = 1:2\nMoles H₂SO₄ needed = 0.100/2 = 0.050 mol\n\nV H₂SO₄ = n/M = 0.050/0.5 = 0.100 L = 100 mL\n\nAnswer: 100 mL of 0.5 M H₂SO₄", explanation: "100 mL." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Calculate ppm of 25 mg lead in 500 g water.", answer: "ppm = (mass solute/mass solution) × 10⁶\n\nmass solute = 25 mg = 25 × 10⁻³ g = 0.025 g\nmass solution ≈ 500 g (mass of Pb is negligible)\n\nppm = (0.025/500) × 10⁶ = 50 ppm\n\nAnswer: 50 ppm", explanation: "50 ppm." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Explain why supersaturated solutions are unstable.", answer: "SUPERSATURATED solutions contain MORE dissolved solute than normally possible at that temperature.\n\nWHY UNSTABLE:\n• The system is NOT at equilibrium — it holds excess solute\n• The excess is ready to precipitate\n• ANY disturbance (seed crystal, stirring, dust) triggers crystallization\n• Excess solute crystallizes out rapidly\n\nEXAMPLE: Hot saturated sodium acetate solution cooled slowly — stays supersaturated until a seed crystal is added → rapid crystallization releases heat.\n\nUSED IN: hand warmers, rock candy crystals.", explanation: "Not at equilibrium — excess solute crystallizes easily." },
    { id: "q119", type: "short", difficulty: "hard", stem: "A 250 mL solution contains 5 g NaOH (M=40). Find molarity, %(w/v), and normality (assume z=1).", answer: "Moles NaOH = 5/40 = 0.125 mol\n\nMOLARITY: M = 0.125/0.250 = 0.5 M\n\n%(w/v): (5 g / 250 mL) × 100 = 2% (w/v)\n\nNORMALITY: z = 1 (one OH⁻)\nN = M × z = 0.5 × 1 = 0.5 N\n\nAnswer: 0.5 M; 2% (w/v); 0.5 N", explanation: "0.5 M, 2% w/v, 0.5 N." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Explain why solutions do not settle and cannot be separated by filtration.", answer: "SOLUTIONS do not settle because:\n1) Particle size is very small (< 1 nm)\n2) Particles are individual atoms, ions, or small molecules\n3) Brownian motion keeps them dispersed\n4) Solute-solvent forces keep solute in solution\n5) No gravity settling possible for such small particles\n\nCannot be filtered because:\n• Filter paper pores are much larger than solution particles\n• Particles pass right through\n\nBUT: can be separated by other means:\n• Evaporation (remove solvent)\n• Distillation (boiling point difference)\n• Crystallization (solubility difference)", explanation: "Particles < 1 nm — too small to settle or filter." },
  ],
};