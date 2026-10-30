import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 PHYSICS — UNIT 2
// UNIFORMLY ACCELERATED MOTION
// Source: Grade 10 Physics Student Textbook (pp. 21–55)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, formula boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10PhysicsCh2: Chapter = {
  id: "ch2",
  number: 2,
  title: "Uniformly Accelerated Motion",
  titleAm: "ወጥ የተፋጠነ እንቅስቃሴ",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is where physics starts to FEEL like physics. You move from describing motion (Unit 1: vectors) to calculating it (Unit 2: motion). Almost every later chapter — projectiles, electricity, magnetism, optics — reuses these same equations.\n\n" +
        "Master FOUR equations and THREE graphs, and you master this chapter.",
      bodyAm:
        "አባቱ፣ ይህ ክፍል ፊዚክስ በእውነት የሚታወቅበት ቦታ ነው። ከእንቅስቃሴ መግለጽ (ክፍል 1፡ ቬክተር) ወደ ስሌት (ክፍል 2፡ እንቅስቃሴ) ትሸጋገራለህ።\n\n" +
        "አራቱን ቀመሮችና ሦስቱን ግራፎች ተቆጣጥረህ ይህን ክፍል ተቆጣጥረሃል።",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand the story of motion",
          titleAm: "ደረጃ 1 · የእንቅስቃሴውን ታሪክ መረዳት",
          body:
            "Motion in one dimension has only FIVE quantities:\n" +
            "• s or x — position / displacement (m)\n" +
            "• v₀ — initial velocity (m/s)\n" +
            "• v — final velocity (m/s)\n" +
            "• a — acceleration (m/s²)\n" +
            "• t — time (s)\n\n" +
            "In every problem, you are given 3 of these and asked for the 4th or 5th. Knowing WHICH equation to use solves 90% of the difficulty.",
          bodyAm:
            "በአንድ አቅጣጫ እንቅስቃሴ አምስት መጠኖች ብቻ አሉ፡\n" +
            "• s ወይም x — መፈናቀል (ሜ)\n" +
            "• v₀ — የመጀመሪያ ቬሎሲቲ (ሜ/ሰ)\n" +
            "• v — የመጨረሻ ቬሎሲቲ (ሜ/ሰ)\n" +
            "• a — ማጣደፍ (ሜ/ሰ²)\n" +
            "• t — ጊዜ (ሰ)\n\n" +
            "በየጥያቄው 3 ተሰጥተው 4ኛው ወይም 5ኛው ይጠየቃሉ። የትኛውን ቀመር መጠቀም እንዳለብህ ማወቅ 90% ይፈታል።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Draw a tiny sketch for every problem",
          titleAm: "ደረጃ 2 · ለየጥያቄው ትንሽ ስዕል ሳል",
          body:
            "• Draw the direction of motion →\n" +
            "• Label + and − directions\n" +
            "• Write down known values with SIGNS\n" +
            "• Circle what is asked\n\n" +
            "This single habit prevents sign errors, which are the #1 cause of lost marks in kinematics.",
          bodyAm:
            "• የእንቅስቃሴ አቅጣጫ ሳል →\n" +
            "• + እና − አቅጣጫዎችን ምልክት አድርግ\n" +
            "• የታወቁትን በምልክት ጻፍ\n" +
            "• የተጠየቀውን አክብብ\n\n" +
            "ይህ ልማድ የምልክት ስህተቶችን ይከላከላል።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Learn the 3 exam graphs by heart",
          titleAm: "ደረጃ 3 · ሦስቱን ግራፎች በልብህ ያዝ",
          body:
            "• Position–time: SLOPE = velocity\n" +
            "• Velocity–time: SLOPE = acceleration; AREA = displacement\n" +
            "• Acceleration–time: AREA = change in velocity",
          bodyAm:
            "• s–t: ተዳፋት = ቬሎሲቲ\n" +
            "• v–t: ተዳፋት = ማጣደፍ; ስፋት = መፈናቀል\n" +
            "• a–t: ስፋት = የቬሎሲቲ ለውጥ",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check before submitting",
          titleAm: "ደረጃ 4 · ከማስረከብህ በፊት 2 ደቂቃ ቼክ",
          body:
            "1) Units on every answer?\n" +
            "2) Direction (or sign) stated?\n" +
            "3) Answer is reasonable? (a car is not 500 m/s; a fall of 1 s is not 100 m)\n" +
            "4) Did you use the correct equation for the quantities given?",
          bodyAm:
            "1) ሁሉም መልስ አሃድ አለው?\n" +
            "2) አቅጣጫ ተገልጿል?\n" +
            "3) መልሱ ምክንያታዊ ነው?\n" +
            "4) ትክክለኛ ቀመር ተጠቅመሃል?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard — before you submit",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• A displacement needs DIRECTION unless the problem is 1-D with signs.\n" +
            "• Acceleration has units m/s² — NOT m/s.\n" +
            "• Negative acceleration ≠ always slowing down — it depends on the sign of velocity.\n" +
            "• In free fall, g = 9.8 m/s² downward. Use + up, − down (or vice versa) — but be consistent.",
          bodyAm:
            "• መፈናቀል አቅጣጫ ያስፈልገዋል።\n" +
            "• ማጣደፍ አሃድ m/s² ነው — m/s አይደለም።\n" +
            "• አሉታዊ ማጣደፍ ≠ ሁልጊዜ መቀነስ።\n" +
            "• በነጻ ውድቀት g = 9.8 m/s² ወደ ታች።",
        },
      ],
    },

    // ============================================================
    // 2.1 POSITION AND DISPLACEMENT
    // ============================================================
    {
      id: "n1",
      title: "2.1 Position and Displacement",
      titleAm: "2.1 ቦታና መፈናቀል",
      body:
        "Abatu, before you can calculate motion, you must know WHERE you are. Motion is meaningless without a REFERENCE POINT.",
      bodyAm:
        "አባቱ፣ እንቅስቃሴን ከመቁጠርህ በፊት የት እንደሆንክ ማወቅ አለብህ። ያለ ማጣቀሻ ነጥብ እንቅስቃሴ ትርጉም የለውም።",
      children: [
        {
          id: "n1-1",
          title: "Reference frame — the foundation",
          titleAm: "የማጣቀሻ ሥርዓት — መሠረቱ",
          body:
            "A FRAME OF REFERENCE = a reference point + a set of directions.\n\n" +
            "Example: 'You are 2 m from the doorway, inside the classroom.'\n" +
            "• Reference point = the doorway\n" +
            "• Direction = inside\n" +
            "• Position = 2 m inside from the doorway\n\n" +
            "Without both the reference point AND the direction, 'position' is meaningless.",
          bodyAm:
            "የማጣቀሻ ሥርዓት = የማጣቀሻ ነጥብ + የአቅጣጫ ስብስብ።\n\n" +
            "ምሳሌ፡ 'ከበሩ 2 ሜ ርቀት ላይ፣ በክፍሉ ውስጥ'።\n" +
            "• የማጣቀሻ ነጥብ = በሩ\n" +
            "• አቅጣጫ = ውስጥ\n" +
            "• ቦታ = ከበሩ 2 ሜ ውስጥ",
        },
        {
          id: "n1-2",
          title: "Position",
          titleAm: "ቦታ",
          body:
            "POSITION (symbol s) = a measurement of a LOCATION with reference to an ORIGIN.\n\n" +
            "• Units: cm, m, km (units of length)\n" +
            "• Positions CAN be negative or positive, depending on which side of the origin.\n" +
            "• Example: 'Kemal's house is 300 m from the school' — the house is the reference point.\n\n" +
            "KEY: A position without a reference point is just a number.",
          bodyAm:
            "ቦታ (s) = ከመነሻ ነጥብ አንጻር የሚለካ ቦታ።\n\n" +
            "• አሃድ፡ ሴ.ሜ፣ ሜ፣ ኪ.ሜ\n" +
            "• ቦታ አዎንታዊ ወይም አሉታዊ ሊሆን ይችላል\n" +
            "• ምሳሌ፡ 'የከማል ቤት ከትምህርት ቤቱ 300 ሜ'",
        },
        {
          id: "n1-3",
          title: "Distance vs Displacement — the BIG idea",
          titleAm: "ርቀት እና መፈናቀል — ትልቁ ሐሳብ",
          body:
            "DISTANCE:\n" +
            "• The TOTAL LENGTH of the path travelled\n" +
            "• SCALAR — no direction\n" +
            "• Always positive\n\n" +
            "DISPLACEMENT:\n" +
            "• The CHANGE IN POSITION: Δs = s − s₀\n" +
            "• VECTOR — has magnitude AND direction\n" +
            "• Can be positive, negative, or zero\n\n" +
            "FORMULA:\n" +
            "Δ⃗s = s − s₀",
          bodyAm:
            "ርቀት፡\n" +
            "• የተጓዘው መንገድ ጠቅላላ ርዝመት\n" +
            "• ስካላር\n" +
            "• ሁልጊዜ አዎንታዊ\n\n" +
            "መፈናቀል፡\n" +
            "• የቦታ ለውጥ: Δs = s − s₀\n" +
            "• ቬክተር — መጠንና አቅጣጫ አለው\n" +
            "• አዎንታዊ፣ አሉታዊ ወይም ዜሮ ሊሆን ይችላል\n\n" +
            "ቀመር፡ Δ⃗s = s − s₀",
        },
        {
          id: "n1-4",
          title: "Worked Example — Person walking east then west",
          titleAm: "ሠርተ ምሳሌ — ሰው ወደ ምስራቅና ምዕራብ",
          body:
            "Problem: A person walks 70 m east, then 30 m west. Find displacement and distance.\n\n" +
            "Solution:\n" +
            "Take east as positive (+), west as negative (−).\n\n" +
            "• Initial position: s₀ = 0\n" +
            "• After 70 m east: s = +70 m\n" +
            "• After 30 m west: s = +70 − 30 = +40 m\n\n" +
            "Displacement: Δ⃗s = s − s₀ = 40 − 0 = 40 m east\n" +
            "Distance: 70 + 30 = 100 m",
          bodyAm:
            "ጥያቄ፡ ሰው 70 ሜ ምስራቅ ከዚያ 30 ሜ ምዕራብ ተጓዘ።\n\n" +
            "መፍትሔ፡\n" +
            "• s₀ = 0\n" +
            "• ከ70 ሜ ምስራቅ በኋላ፡ s = +70 ሜ\n" +
            "• ከ30 ሜ ምዕራብ በኋላ፡ s = +40 ሜ\n\n" +
            "መፈናቀል: 40 ሜ ምስራቅ\n" +
            "ርቀት: 100 ሜ",
        },
        {
          id: "n1-5",
          title: "Worked Example — Out and back to start",
          titleAm: "ሠርተ ምሳሌ — ወጥቶ ወደ መነሻ መመለስ",
          body:
            "Object starts at O, goes to A (60 km), then back to O.\n\n" +
            "• Distance: OA + AO = 60 + 60 = 120 km\n" +
            "• Displacement: s − s₀ = 0 − 0 = 0 km\n\n" +
            "KEY INSIGHT: Distance can be 120 km while displacement is 0. This is the classic exam example.",
          bodyAm:
            "ነገር ከ O ወደ A (60 ኪ.ሜ) ከዚያ ወደ O ተመለሰ።\n\n" +
            "• ርቀት: 60 + 60 = 120 ኪ.ሜ\n" +
            "• መፈናቀል: 0 ኪ.ሜ\n\n" +
            "ርቀት 120 ኪ.ሜ፣ መፈናቀል 0 ሊሆን ይችላል!",
        },
        {
          id: "n1-6",
          title: "⚠ Remember trap — Distance vs Displacement",
          titleAm: "⚠ አትርሳ — ርቀት እና መፈናቀል",
          body:
            "• Distance is SCALAR; displacement is VECTOR.\n" +
            "• |Displacement| ≤ Distance ALWAYS.\n" +
            "• |Displacement| = Distance only when motion is in a STRAIGHT line without turning.\n" +
            "• Displacement can be ZERO even when distance is large (round trip).\n" +
            "• Displacement can be NEGATIVE; distance cannot.",
          bodyAm:
            "• ርቀት = ስካላር; መፈናቀል = ቬክተር።\n" +
            "• |መፈናቀል| ≤ ርቀት ሁልጊዜ።\n" +
            "• |መፈናቀል| = ርቀት የሚሆነው በቀጥታ መንገድ ብቻ።\n" +
            "• መፈናቀል ዜሮ ሊሆን ይችላል፣ ርቀት ግን አይችልም።",
        },
      ],
    },

    // ============================================================
    // 2.2 AVERAGE AND INSTANTANEOUS VELOCITY
    // ============================================================
    {
      id: "n2",
      title: "2.2 Average Velocity and Instantaneous Velocity",
      titleAm: "2.2 አማካይና ቅጽበታዊ ቬሎሲቲ",
      body:
        "Abatu, velocity is the RATE OF CHANGE of displacement. This is the single most important quantity in kinematics — everything else builds on it.",
      bodyAm:
        "ቬሎሲቲ የመፈናቀል የለውጥ መጠን ነው። በኪነማቲክስ ውስጥ ትልቁ መጠን ነው።",
      children: [
        {
          id: "n2-1",
          title: "Average velocity — the formula",
          titleAm: "አማካይ ቬሎሲቲ — ቀመር",
          body:
            "v⃗av = Δ⃗s / Δt = (s − s₀) / (t − t₀)\n\n" +
            "• s₀ = initial position, s = final position\n" +
            "• t₀ = initial time, t = final time\n" +
            "• Units: m/s (also km/h, mi/h, cm/s)",
          bodyAm:
            "v⃗av = Δ⃗s / Δt = (s − s₀) / (t − t₀)\n\n" +
            "• s₀ = የመጀመሪያ ቦታ\n" +
            "• t₀ = የመጀመሪያ ጊዜ\n" +
            "• አሃድ፡ ሜ/ሰ",
        },
        {
          id: "n2-2",
          title: "Average speed vs average velocity",
          titleAm: "አማካይ ፍጥነት እና አማካይ ቬሎሲቲ",
          body:
            "AVERAGE SPEED (scalar):\n" +
            "v_av = total distance / total time\n\n" +
            "AVERAGE VELOCITY (vector):\n" +
            "v⃗_av = displacement / time\n\n" +
            "KEY: For motion along a STRAIGHT LINE in ONE DIRECTION:\n" +
            "average speed = |average velocity|\n\n" +
            "For any other motion (turning, going back):\n" +
            "average speed > |average velocity|",
          bodyAm:
            "አማካይ ፍጥነት (ስካላር):\n" +
            "v_av = ጠቅላላ ርቀት / ጠቅላላ ጊዜ\n\n" +
            "አማካይ ቬሎሲቲ (ቬክተር):\n" +
            "v⃗_av = መፈናቀል / ጊዜ\n\n" +
            "በቀጥታ መንገድ ብቻ እኩል ናቸው።",
        },
        {
          id: "n2-3",
          title: "Worked Example — Displacement from velocity",
          titleAm: "ሠርተ ምሳሌ — ከቬሎሲቲ መፈናቀል",
          body:
            "Problem: Walking at 1.2 m/s north for 10 min. Find displacement.\n\n" +
            "Solution:\n" +
            "Δt = 10 min = 600 s\n" +
            "v_av = 1.2 m/s north\n" +
            "Δ⃗s = v⃗_av × Δt = 1.2 × 600 = 720 m north",
          bodyAm:
            "በ1.2 ሜ/ሰ ሰሜን ለ10 ደቂቃ መጓዝ።\n\n" +
            "Δt = 600 ሰ\n" +
            "Δ⃗s = 1.2 × 600 = 720 ሜ ሰሜን",
        },
        {
          id: "n2-4",
          title: "Worked Example — Average speed ≠ average of speeds",
          titleAm: "ሠርተ ምሳሌ — አማካይ ፍጥነት ከፍጥነቶች አማካይ አይደለም",
          body:
            "Problem: Car travels 100 km at 50 km/h, then 100 km at 100 km/h. Find average speed.\n\n" +
            "Solution:\n" +
            "Δt₁ = 100/50 = 2 h\n" +
            "Δt₂ = 100/100 = 1 h\n" +
            "Total distance = 200 km\n" +
            "Total time = 3 h\n" +
            "Average speed = 200/3 ≈ 66.7 km/h\n\n" +
            "⚠ Do NOT average the two speeds: (50+100)/2 = 75 is WRONG.",
          bodyAm:
            "100 ኪ.ሜ በ50 ኪ.ሜ/ሰ እና 100 ኪ.ሜ በ100 ኪ.ሜ/ሰ።\n\n" +
            "Δt₁ = 2 ሰ፣ Δt₂ = 1 ሰ\n" +
            "አማካይ = 200/3 ≈ 66.7 ኪ.ሜ/ሰ\n\n" +
            "⚠ (50+100)/2 = 75 ስህተት ነው።",
        },
        {
          id: "n2-5",
          title: "Instantaneous velocity",
          titleAm: "ቅጽበታዊ ቬሎሲቲ",
          body:
            "INSTANTANEOUS VELOCITY = velocity at a SPECIFIC INSTANT in time.\n\n" +
            "Mathematically:\n" +
            "v⃗ = (s − s₀) / (t − t₀) as t − t₀ → 0\n\n" +
            "• Magnitude of instantaneous velocity = instantaneous SPEED\n" +
            "• It is the reading on a car's speedometer\n\n" +
            "KEY difference: Average velocity only tells about START and END points. Instantaneous velocity tells you HOW FAST and WHICH WAY at each moment.",
          bodyAm:
            "ቅጽበታዊ ቬሎሲቲ = በአንድ ቅጽበት ያለ ቬሎሲቲ።\n\n" +
            "v⃗ = Δs/Δt ሲሆን Δt → 0\n\n" +
            "• መጠኑ = ቅጽበታዊ ፍጥነት\n" +
            "• የመኪና ስፒዶሜትር ንባብ ነው",
        },
        {
          id: "n2-6",
          title: "⚠ Remember trap — Velocity traps",
          titleAm: "⚠ አትርሳ — የቬሎሲቲ ወጥመዶች",
          body:
            "• Average velocity is NOT the average of the velocities — you must use total displacement / total time.\n" +
            "• Speedometer reads SPEED, not velocity (no direction shown).\n" +
            "• Average speed ≠ |average velocity| unless motion is straight and one-way.\n" +
            "• Velocity can be negative (opposite to chosen + direction) even when the object is moving normally.",
          bodyAm:
            "• አማካይ ቬሎሲቲ = የቬሎሲቲዎች አማካይ አይደለም።\n" +
            "• ስፒዶሜትር ፍጥነትን ብቻ ያሳያል።\n" +
            "• ቬሎሲቲ አሉታዊ ሊሆን ይችላል።",
        },
      ],
    },

    // ============================================================
    // 2.3 ACCELERATION
    // ============================================================
    {
      id: "n3",
      title: "2.3 Acceleration",
      titleAm: "2.3 ማጣደፍ",
      body:
        "Abatu, ACCELERATION is the RATE OF CHANGE of velocity. Any change in velocity — speeding up, slowing down, or changing direction — is acceleration.",
      bodyAm:
        "ማጣደፍ የቬሎሲቲ የለውጥ መጠን ነው። ፍጥነት መጨመር፣ መቀነስ ወይም አቅጣጫ መለወጥ — ሁሉም ማጣደፍ ናቸው።",
      children: [
        {
          id: "n3-1",
          title: "Average acceleration — formula",
          titleAm: "አማካይ ማጣደፍ — ቀመር",
          body:
            "a⃗_av = Δv⃗ / Δt = (v − v₀) / (t − t₀)\n\n" +
            "• v₀ = initial velocity\n" +
            "• v = final velocity\n" +
            "• Units: m/s²",
          bodyAm:
            "a⃗_av = (v − v₀) / (t − t₀)\n\n" +
            "• v₀ = የመጀመሪያ ቬሎሲቲ\n" +
            "• v = የመጨረሻ ቬሎሲቲ\n" +
            "• አሃድ፡ m/s²",
        },
        {
          id: "n3-2",
          title: "Sign of acceleration — the RULE",
          titleAm: "የማጣደፍ ምልክት — ደንቡ",
          body:
            "Use the SAME + direction for velocity and acceleration (e.g., moving right = +).\n\n" +
            "Case 1: Speeding up → a has SAME sign as v\n" +
            "• v > 0, a > 0 → speeding up\n" +
            "• v < 0, a < 0 → speeding up\n\n" +
            "Case 2: Slowing down → a has OPPOSITE sign to v\n" +
            "• v > 0, a < 0 → slowing down (deceleration)\n" +
            "• v < 0, a > 0 → slowing down (deceleration)\n\n" +
            "⚠ IMPORTANT: Negative acceleration does NOT always mean slowing down. It depends on the sign of velocity.",
          bodyAm:
            "ለቬሎሲቲም ለማጣደፍም አንድ + አቅጣጫ ተጠቀም።\n\n" +
            "ፍጥነት እየጨመረ → a ከ v ጋር ተመሳሳይ ምልክት\n" +
            "ፍጥነት እየቀነሰ → a ከ v ጋር ተቃራኒ ምልክት\n\n" +
            "⚠ አሉታዊ ማጣደፍ ≠ ሁልጊዜ መቀነስ።",
        },
        {
          id: "n3-3",
          title: "Worked Example — Speeding up",
          titleAm: "ሠርተ ምሳሌ — ፍጥነት መጨመር",
          body:
            "Problem: Car from rest to 75 km/h in 5 s. Find average acceleration.\n\n" +
            "Solution:\n" +
            "v₀ = 0, v = 75 km/h = 21 m/s, t = 5 s\n" +
            "a = (v − v₀)/t = 21/5 = 4.2 m/s²",
          bodyAm:
            "ከእረፍት ወደ 75 ኪ.ሜ/ሰ በ5 ሰ።\n" +
            "75 ኪ.ሜ/ሰ = 21 ሜ/ሰ\n" +
            "a = 21/5 = 4.2 ሜ/ሰ²",
        },
        {
          id: "n3-4",
          title: "Worked Example — Slowing down",
          titleAm: "ሠርተ ምሳሌ — ፍጥነት መቀነስ",
          body:
            "Problem: Car moving right slows from 15 m/s to 5 m/s in 5 s. Find acceleration.\n\n" +
            "Solution:\n" +
            "v₀ = 15 m/s, v = 5 m/s, t = 5 s\n" +
            "a = (5 − 15)/5 = −10/5 = −2 m/s²\n\n" +
            "Interpretation: a is NEGATIVE (points opposite to velocity). The car is DECELERATING.",
          bodyAm:
            "ከ15 ሜ/ሰ ወደ 5 ሜ/ሰ በ5 ሰ።\n" +
            "a = (5 − 15)/5 = −2 ሜ/ሰ²\n" +
            "አሉታዊ ማጣደፍ → እየቀነሰ ነው።",
        },
        {
          id: "n3-5",
          title: "Instantaneous acceleration",
          titleAm: "ቅጽበታዊ ማጣደፍ",
          body:
            "INSTANTANEOUS ACCELERATION = acceleration at a specific instant.\n\n" +
            "a = Δv/Δt as Δt → 0\n\n" +
            "KEY: For UNIFORMLY accelerated motion, average acceleration = instantaneous acceleration. This is why you can use ONE formula set for the whole trip.",
          bodyAm:
            "ቅጽበታዊ ማጣደፍ = በአንድ ቅጽበት ያለ ማጣደፍ።\n\n" +
            "a = Δv/Δt ሲሆን Δt → 0\n\n" +
            "ለወጥ ማጣደፍ እንቅስቃሴ ሁለቱም እኩል ናቸው።",
        },
        {
          id: "n3-6",
          title: "⚠ Remember trap — Acceleration traps",
          titleAm: "⚠ አትርሳ — የማጣደፍ ወጥመዶች",
          body:
            "• Zero velocity ≠ zero acceleration (ball at top of throw: v = 0 but a = g).\n" +
            "• Zero acceleration ≠ zero velocity (constant motion: a = 0, v ≠ 0).\n" +
            "• Negative acceleration ≠ slowing down — depends on v's sign.\n" +
            "• 'Deceleration' means speed is decreasing — not necessarily negative a.",
          bodyAm:
            "• ዜሮ ቬሎሲቲ ≠ ዜሮ ማጣደፍ።\n" +
            "• ዜሮ ማጣደፍ ≠ ዜሮ ቬሎሲቲ።\n" +
            "• አሉታዊ ማጣደፍ ≠ ሁልጊዜ መቀነስ።\n" +
            "• 'መቀነስ' ማለት ፍጥነት እየቀነሰ ነው ማለት ነው።",
        },
      ],
    },

    // ============================================================
    // 2.4 EQUATIONS OF MOTION
    // ============================================================
    {
      id: "n4",
      title: "2.4 The Four Equations of Motion (Constant Acceleration)",
      titleAm: "2.4 አራቱ የእንቅስቃሴ ቀመሮች",
      body:
        "Abatu, these FOUR equations will appear in almost every kinematics question in Grade 10, 11, 12, and the national exam. MEMORIZE them.",
      bodyAm:
        "አባቱ፣ እነዚህ አራት ቀመሮች በ10፣ 11፣ 12 ክፍልና በብሔራዊ ፈተና ይመጣሉ። አስታውሳቸው።",
      children: [
        {
          id: "n4-1",
          title: "The Four Equations",
          titleAm: "አራቱ ቀመሮች",
          body:
            "Eq 1: v = v₀ + a t\n" +
            "         (use when s is NOT given)\n\n" +
            "Eq 2: s = (v₀ + v)/2 × t\n" +
            "         (use when a is NOT given)\n\n" +
            "Eq 3: s = v₀ t + ½ a t²\n" +
            "         (use when v is NOT given)\n\n" +
            "Eq 4: v² = v₀² + 2 a s\n" +
            "         (use when t is NOT given)",
          bodyAm:
            "ቀመር 1፡ v = v₀ + a t (s ካልተሰጠ)\n" +
            "ቀመር 2፡ s = (v₀+v)/2 × t (a ካልተሰጠ)\n" +
            "ቀመር 3፡ s = v₀t + ½at² (v ካልተሰጠ)\n" +
            "ቀመር 4፡ v² = v₀² + 2as (t ካልተሰጠ)",
        },
        {
          id: "n4-2",
          title: "How to choose the right equation",
          titleAm: "ትክክለኛውን ቀመር እንዴት እንደምንመርጥ",
          body:
            "Step 1: List the 5 quantities — s, v₀, v, a, t\n" +
            "Step 2: Mark which 3 are GIVEN and which 1 is ASKED\n" +
            "Step 3: Pick the equation that contains all 4 of those quantities\n" +
            "Step 4: Solve for the unknown\n\n" +
            "EXAMPLE:\n" +
            "Given: v₀, v, s. Asked: a. Use v² = v₀² + 2as (time not needed).\n" +
            "Given: v₀, a, t. Asked: s. Use s = v₀t + ½at².",
          bodyAm:
            "ደረጃ 1፡ 5 መጠኖችን ዘርዝር\n" +
            "ደረጃ 2፡ 3 የተሰጡ፣ 1 የተጠየቀ ምልክት አድርግ\n" +
            "ደረጃ 3፡ 4ቱንም የያዘውን ቀመር ምረጥ\n" +
            "ደረጃ 4፡ ፍታ",
        },
        {
          id: "n4-3",
          title: "Worked Example 1 — Find acceleration",
          titleAm: "ሠርተ ምሳሌ 1 — ማጣደፍ ፈልግ",
          body:
            "Problem: Car starts from rest and covers 100 m in 5 s. Find a.\n\n" +
            "Given: v₀ = 0, s = 100 m, t = 5 s\n" +
            "Asked: a\n" +
            "Use: s = v₀t + ½at² → 100 = 0 + ½(a)(25) → 100 = 12.5a → a = 8 m/s²",
          bodyAm:
            "ከእረፍት 100 ሜ በ5 ሰ።\n" +
            "100 = ½(a)(25) → a = 8 ሜ/ሰ²",
        },
        {
          id: "n4-4",
          title: "Worked Example 2 — Find final velocity",
          titleAm: "ሠርተ ምሳሌ 2 — የመጨረሻ ቬሎሲቲ ፈልግ",
          body:
            "Problem: Airplane lands at 70 m/s and decelerates at 1.5 m/s² for 40 s. Find final v.\n\n" +
            "Given: v₀ = 70, a = −1.5, t = 40\n" +
            "Asked: v\n" +
            "Use: v = v₀ + at = 70 − 1.5(40) = 70 − 60 = 10 m/s",
          bodyAm:
            "70 ሜ/ሰ → a = −1.5 → t = 40 ሰ።\n" +
            "v = 70 − 60 = 10 ሜ/ሰ",
        },
        {
          id: "n4-5",
          title: "Worked Example 3 — Find distance (time not given)",
          titleAm: "ሠርተ ምሳሌ 3 — ጊዜ ሳይሰጥ ርቀት ፈልግ",
          body:
            "Problem: Car starts from rest and speeds up at 3.5 m/s². How far when v = 25 m/s?\n\n" +
            "Given: v₀ = 0, v = 25, a = 3.5, t not needed\n" +
            "Asked: s\n" +
            "Use: v² = v₀² + 2as → 625 = 0 + 2(3.5)s → 625 = 7s → s ≈ 89.3 m",
          bodyAm:
            "v² = 0 + 2(3.5)s → 625 = 7s → s ≈ 89.3 ሜ",
        },
        {
          id: "n4-6",
          title: "Free fall — the special case",
          titleAm: "ነጻ ውድቀት — ልዩ ጉዳይ",
          body:
            "A freely falling object moves under gravity ONLY (air resistance ignored).\n\n" +
            "Free-fall equations:\n" +
            "• v = v₀ + g t\n" +
            "• h = v₀ t + ½ g t²\n" +
            "• v² = v₀² + 2 g h\n\n" +
            "g = 9.8 m/s² (approximately 10 in some problems)\n\n" +
            "⚠ Direction choice: if DOWN is +, then g = +9.8. If UP is +, then g = −9.8. Pick one and stay consistent!",
          bodyAm:
            "ነጻ ውድቀት = በስበት ብቻ መንቀሳቀስ።\n\n" +
            "• v = v₀ + gt\n" +
            "• h = v₀t + ½gt²\n" +
            "• v² = v₀² + 2gh\n\n" +
            "g = 9.8 ሜ/ሰ²\n\n" +
            "⚠ ወደ ታች + ካደረክ g = +9.8፣ ወደ ላይ + ካደረክ g = −9.8። አንድ ምርጫ ብቻ ተጠቀም!",
        },
        {
          id: "n4-7",
          title: "Worked Example — Free fall",
          titleAm: "ሠርተ ምሳሌ — ነጻ ውድቀት",
          body:
            "Problem: Mango falls from a tree, takes 1 s to hit ground. Find v and h.\n\n" +
            "Take DOWN as positive: g = +9.8\n" +
            "v₀ = 0, t = 1 s\n\n" +
            "v = v₀ + g t = 0 + 9.8(1) = 9.8 m/s\n" +
            "h = ½ g t² = ½(9.8)(1) = 4.9 m",
          bodyAm:
            "ወደ ታች + ነው። g = 9.8።\n" +
            "v = 9.8 ሜ/ሰ\n" +
            "h = 4.9 ሜ",
        },
        {
          id: "n4-8",
          title: "⚠ Remember trap — Equations of motion",
          titleAm: "⚠ አትርሳ — የእንቅስቃሴ ቀመሮች",
          body:
            "• These equations ONLY work when acceleration is CONSTANT (uniformly accelerated).\n" +
            "• Units must match — convert km/h to m/s BEFORE plugging in.\n" +
            "• Signs matter: if the object slows down, a is NEGATIVE (with + in the direction of motion).\n" +
            "• In free fall, g = 9.8 m/s² regardless of mass.\n" +
            "• Never average the velocities for average speed — use total distance / total time.",
          bodyAm:
            "• ቀመሮቹ የሚሠሩት ማጣደፍ ቋሚ ሲሆን ብቻ ነው።\n" +
            "• አሃድ አንድ አድርግ (ኪ.ሜ/ሰ → ሜ/ሰ)።\n" +
            "• ምልክት ወሳኝ ነው።\n" +
            "• g = 9.8 ሜ/ሰ² ሁልጊዜ።",
        },
      ],
    },

    // ============================================================
    // 2.5 GRAPHS OF MOTION
    // ============================================================
    {
      id: "n5",
      title: "2.5 Graphical Representation of Uniformly Accelerated Motion",
      titleAm: "2.5 ግራፊክ ውክልና",
      body:
        "Abatu, graphs are the SECOND WAY of describing motion (after equations). The Ethiopian exam loves graph questions. Master the three graphs and their two key readings: SLOPE and AREA.",
      bodyAm:
        "አባቱ፣ ግራፎች ሁለተኛው የእንቅስቃሴ መግለጫ ናቸው። ሦስቱን ግራፎችና ሁለቱን ቁልፍ ንባቦች (ተዳፋትና ስፋት) ተቆጣጥር።",
      children: [
        {
          id: "n5-1",
          title: "Position–time graph (s–t)",
          titleAm: "የቦታ–ጊዜ ግራፍ (s–t)",
          body:
            "• Equation: s = v₀t + ½at² → QUADRATIC → graph is a PARABOLA\n" +
            "• SLOPE of tangent = INSTANTANEOUS VELOCITY\n" +
            "• Slope = rise / run = Δs / Δt\n\n" +
            "How to find instantaneous velocity at a point:\n" +
            "1) Draw a TANGENT line at that point\n" +
            "2) Pick two points on the tangent\n" +
            "3) Slope = (s₂ − s₁) / (t₂ − t₁)\n\n" +
            "Example: tangent at t = 6 s → slope ≈ 66.7 m/s",
          bodyAm:
            "• ቀመር፡ s = v₀t + ½at² → ፓራቦላ\n" +
            "• ተዳፋት = ቅጽበታዊ ቬሎሲቲ\n\n" +
            "ቅጽበታዊ ቬሎሲቲ ለማግኘት:\n" +
            "1) ታንጀንት ሳል\n" +
            "2) ሁለት ነጥቦች ምረጥ\n" +
            "3) ተዳፋት = (s₂−s₁)/(t₂−t₁)",
        },
        {
          id: "n5-2",
          title: "Velocity–time graph (v–t)",
          titleAm: "የቬሎሲቲ–ጊዜ ግራፍ (v–t)",
          body:
            "• Equation: v = v₀ + at → LINEAR → graph is a STRAIGHT LINE\n" +
            "• SLOPE = ACCELERATION\n" +
            "• AREA UNDER LINE = DISPLACEMENT\n\n" +
            "Types of v–t graphs:\n" +
            "• Uniform acceleration → straight line with positive slope\n" +
            "• Uniform velocity → horizontal line (a = 0)\n" +
            "• Deceleration → straight line with negative slope (going down)\n" +
            "• Non-uniform → curved\n\n" +
            "Slope = (v₂ − v₁)/(t₂ − t₁) = a\n" +
            "Area under line = Δs",
          bodyAm:
            "• v = v₀ + at → ቀጥተኛ መስመር\n" +
            "• ተዳፋት = ማጣደፍ\n" +
            "• በመስመሩ ስር ያለው ስፋት = መፈናቀል",
        },
        {
          id: "n5-3",
          title: "Acceleration–time graph (a–t)",
          titleAm: "የማጣደፍ–ጊዜ ግራፍ (a–t)",
          body:
            "• For UNIFORMLY accelerated motion, a is CONSTANT → graph is a HORIZONTAL line\n" +
            "• AREA UNDER LINE = CHANGE IN VELOCITY (Δv)\n" +
            "• Slope of a–t graph = 0 (since a is constant)\n\n" +
            "KEY: The area under the a–t graph tells you how much velocity CHANGED during a time interval.",
          bodyAm:
            "• ለወጥ ማጣደፍ እንቅስቃሴ a ቋሚ ነው → አግድም መስመር\n" +
            "• ስር ያለው ስፋት = የቬሎሲቲ ለውጥ (Δv)",
        },
        {
          id: "n5-4",
          title: "The Summary Table — memorize",
          titleAm: "ማጠቃለያ ሰንጠረዥ",
          body:
            "| Graph  | Slope gives         | Area gives             |\n" +
            "|--------|---------------------|------------------------|\n" +
            "| s–t    | Velocity            | (no physical meaning)  |\n" +
            "| v–t    | Acceleration        | Displacement           |\n" +
            "| a–t    | (always 0)          | Change in velocity Δv  |",
          bodyAm:
            "| ግራፍ | ተዳፋት         | ስፋት                |\n" +
            "|-----|--------------|---------------------|\n" +
            "| s–t | ቬሎሲቲ         | (ትርጉም የለውም)        |\n" +
            "| v–t | ማጣደፍ         | መፈናቀል              |\n" +
            "| a–t | (ሁልጊዜ 0)      | የቬሎሲቲ ለውጥ Δv       |",
        },
        {
          id: "n5-5",
          title: "Worked Example — Area under v-t graph",
          titleAm: "ሠርተ ምሳሌ — ከv–t ግራፍ ስፋት",
          body:
            "Problem: Truck's v-t graph shows positive velocity for 14 s, then negative for 1 s. Max velocity is 4 m/s.\n\n" +
            "Total distance = |area 1| + |area 2| + |area 3| + |area 4|\n" +
            "Total displacement = area 1 + area 2 + area 3 − area 4 (negative velocity)\n\n" +
            "If areas are 10, 28, 4, 1 m respectively:\n" +
            "Distance = 10 + 28 + 4 + 1 = 43 m\n" +
            "Displacement = 10 + 28 + 4 − 1 = 41 m",
          bodyAm:
            "አጠቃላይ ርቀት = |ስፋት 1| + |ስፋት 2| + |ስፋት 3| + |ስፋት 4|\n" +
            "አጠቃላይ መፈናቀል = ስፋቶቹን ከምልክት ጋር ደምር",
        },
        {
          id: "n5-6",
          title: "⚠ Remember trap — Graphs",
          titleAm: "⚠ አትርሳ — ግራፎች",
          body:
            "• On an s–t graph, the slope = velocity (NOT position).\n" +
            "• On a v–t graph, the slope = acceleration; the AREA = displacement.\n" +
            "• On an a–t graph for UNIFORM acceleration, the graph is FLAT (horizontal line).\n" +
            "• Distance = |total area|; displacement = SIGNED total area.\n" +
            "• Area below the time axis is NEGATIVE displacement.",
          bodyAm:
            "• s–t: ተዳፋት = ቬሎሲቲ\n" +
            "• v–t: ተዳፋት = ማጣደፍ; ስፋት = መፈናቀል\n" +
            "• a–t: አግድም መስመር\n" +
            "• ስፋት ከጊዜ ዘንግ በታች = አሉታዊ መፈናቀል",
        },
      ],
    },

    // ============================================================
    // 2.6 RELATIVE VELOCITY
    // ============================================================
    {
      id: "n6",
      title: "2.6 Relative Velocity in One Dimension",
      titleAm: "2.6 አንጻራዊ ቬሎሲቲ",
      body:
        "Abatu, EVERY velocity measurement depends on the FRAME OF REFERENCE. Your velocity depends on who is watching.",
      bodyAm:
        "አባቱ፣ እያንዳንዱ የቬሎሲቲ መለኪያ በማጣቀሻ ሥርዓት ላይ የተመሠረተ ነው።",
      children: [
        {
          id: "n6-1",
          title: "The concept",
          titleAm: "ጽንሰ-ሐሳቡ",
          body:
            "Example: Two trains approach each other at 80 km/h each (relative to Earth).\n" +
            "• Observer on the ground measures 80 km/h for EACH train\n" +
            "• Observer on ONE train measures 160 km/h for the OTHER train\n\n" +
            "Same objects, DIFFERENT reference frames, DIFFERENT measurements.",
          bodyAm:
            "ሁለት ባቡሮች እየተጠጉ በ80 ኪ.ሜ/ሰ እያንዳንዱ።\n" +
            "• በመሬት ላይ ተመልካች: 80 ኪ.ሜ/ሰ\n" +
            "• በባቡር ላይ ተመልካች: 160 ኪ.ሜ/ሰ",
        },
        {
          id: "n6-2",
          title: "The two formulas",
          titleAm: "ሁለቱ ቀመሮች",
          body:
            "Let A and B be moving relative to the ground with velocities v_A and v_B.\n\n" +
            "CASE 1 — Approaching each other (opposite directions):\n" +
            "v_AB = v_A + v_B\n" +
            "v_BA = v_A + v_B  (same magnitude)\n\n" +
            "CASE 2 — Moving in same direction:\n" +
            "v_AB = v_A − v_B\n" +
            "v_BA = v_B − v_A\n\n" +
            "(Positive result → A moves forward relative to B; negative → behind)",
          bodyAm:
            "CASE 1 — ተቃራኒ አቅጣጫ:\n" +
            "v_AB = v_A + v_B\n\n" +
            "CASE 2 — ተመሳሳይ አቅጣጫ:\n" +
            "v_AB = v_A − v_B",
        },
        {
          id: "n6-3",
          title: "Worked Example — Same direction",
          titleAm: "ሠርተ ምሳሌ — ተመሳሳይ አቅጣጫ",
          body:
            "Problem: Car A moves at 80 km/h east, Car B at 65 km/h east behind A. Find B's velocity relative to A.\n\n" +
            "Solution:\n" +
            "v_BA = v_B − v_A = 65 − 80 = −15 km/h\n\n" +
            "Interpretation: B is 15 km/h SLOWER than A → B is falling behind A at 15 km/h.",
          bodyAm:
            "80 ኪ.ሜ/ሰ ምስራቅ (A) እና 65 ኪ.ሜ/ሰ ምስራቅ (B)።\n" +
            "v_BA = 65 − 80 = −15 ኪ.ሜ/ሰ\n" +
            "B ከ A በ15 ኪ.ሜ/ሰ ወደ ኋላ ትቀራለች።",
        },
        {
          id: "n6-4",
          title: "⚠ Remember trap — Relative velocity",
          titleAm: "⚠ አትርሳ — አንጻራዊ ቬሎሲቲ",
          body:
            "• APPROACHING (opposite directions) → ADD velocities\n" +
            "• SAME direction → SUBTRACT velocities\n" +
            "• Reference frame matters — 'v of A with respect to B' is v_A − v_B\n" +
            "• Sign matters: negative means A is moving behind B (in the chosen + direction)",
          bodyAm:
            "• ተቃራኒ → ደምር\n" +
            "• ተመሳሳይ → ቀንስ\n" +
            "• የማጣቀሻ ሥርዓት ወሳኝ ነው\n" +
            "• አሉታዊ = ወደ ኋላ",
        },
      ],
    },

    // ============================================================
    // FORMULA SHEET
    // ============================================================
    {
      id: "nFormula",
      title: "Formula Sheet — Unit 2",
      titleAm: "የቀመር ሉህ — ክፍል 2",
      body:
        "| Quantity         | Formula                          |\n" +
        "|------------------|----------------------------------|\n" +
        "| Displacement     | Δs = s − s₀                       |\n" +
        "| Average velocity | v_av = Δs / Δt                    |\n" +
        "| Average speed    | v_av = total distance / total time|\n" +
        "| Average accel.   | a = (v − v₀) / t                  |\n" +
        "| Motion eq 1      | v = v₀ + a t                      |\n" +
        "| Motion eq 2      | s = (v₀ + v)/2 × t                |\n" +
        "| Motion eq 3      | s = v₀ t + ½ a t²                 |\n" +
        "| Motion eq 4      | v² = v₀² + 2 a s                  |\n" +
        "| Free fall (v)    | v = v₀ + g t                      |\n" +
        "| Free fall (h)    | h = v₀ t + ½ g t²                 |\n" +
        "| Free fall (v²)   | v² = v₀² + 2 g h                  |\n" +
        "| Relative (opp.)  | v_AB = v_A + v_B                  |\n" +
        "| Relative (same)  | v_AB = v_A − v_B                  |\n" +
        "| Graph s–t slope  | velocity                          |\n" +
        "| Graph v–t slope  | acceleration                      |\n" +
        "| Graph v–t area   | displacement                      |\n" +
        "| Graph a–t area   | change in velocity                |",
      bodyAm:
        "| መጠን              | ቀመር                            |\n" +
        "|------------------|--------------------------------|\n" +
        "| መፈናቀል           | Δs = s − s₀                    |\n" +
        "| አማካይ ቬሎሲቲ       | v_av = Δs / Δt                 |\n" +
        "| አማካይ ማጣደፍ       | a = (v − v₀) / t               |\n" +
        "| ቀመር 1           | v = v₀ + a t                   |\n" +
        "| ቀመር 2           | s = (v₀+v)/2 × t               |\n" +
        "| ቀመር 3           | s = v₀t + ½at²                 |\n" +
        "| ቀመር 4           | v² = v₀² + 2as                 |\n" +
        "| ነጻ ውድቀት (v)     | v = v₀ + gt                    |\n" +
        "| ነጻ ውድቀት (h)     | h = v₀t + ½gt²                 |\n" +
        "| ነጻ ውድቀት (v²)    | v² = v₀² + 2gh                 |\n" +
        "| አንጻራዊ (ተቃራኒ)  | v_AB = v_A + v_B               |\n" +
        "| አንጻራዊ (ተመሳሳይ)| v_AB = v_A − v_B               |\n" +
        "| የ s–t ተዳፋት       | ቬሎሲቲ                         |\n" +
        "| የ v–t ተዳፋት       | ማጣደፍ                         |\n" +
        "| የ v–t ስፋት         | መፈናቀል                        |\n" +
        "| የ a–t ስፋት         | የቬሎሲቲ ለውጥ                    |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 2",
      titleAm: "የተለምዱ የፈተና ወጥመዶች",
      body:
        "1) Confusing distance (scalar) and displacement (vector).\n" +
        "2) Averaging two speeds → WRONG. Use total distance / total time.\n" +
        "3) Speedometer reads speed, not velocity.\n" +
        "4) 'Zero velocity' does not mean 'zero acceleration' (e.g., at the top of a throw).\n" +
        "5) 'Negative acceleration' does not always mean slowing down.\n" +
        "6) Free fall: g = 9.8 m/s² REGARDLESS of mass (no air resistance).\n" +
        "7) Forgetting units: acceleration is m/s², not m/s.\n" +
        "8) Mixing km/h and m/s in one equation — CONVERT FIRST.\n" +
        "9) On v–t graph, area below the axis = NEGATIVE displacement.\n" +
        "10) Relative velocity: approaching → ADD; same direction → SUBTRACT.",
      bodyAm:
        "1) ርቀትና መፈናቀል መምታታት።\n" +
        "2) ሁለት ፍጥነቶችን አማካይ ማድረግ — ስህተት!\n" +
        "3) ስፒዶሜትር ፍጥነት ብቻ ያሳያል።\n" +
        "4) ዜሮ ቬሎሲቲ ≠ ዜሮ ማጣደፍ።\n" +
        "5) አሉታዊ ማጣደፍ ≠ ሁልጊዜ መቀነስ።\n" +
        "6) ነጻ ውድቀት: g = 9.8 ሜ/ሰ² ለሁሉም ክብደት።\n" +
        "7) አሃድ መርሳት: m/s² እንጂ m/s አይደለም።\n" +
        "8) ኪ.ሜ/ሰ እና ሜ/ሰ ቀላቅሎ መጠቀም — መጀመሪያ ቀይር።\n" +
        "9) v–t ስር ያለ ስፋት ከዘንግ በታች = አሉታዊ መፈናቀል።\n" +
        "10) አንጻራዊ: ተቃራኒ → ደምር; ተመሳሳይ → ቀንስ።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "What is the definition of position?", options: ["The distance travelled", "A measurement of location with reference to an origin", "The speed of an object", "The rate of change of velocity"], answer: "1", explanation: "Abatu, position is LOCATION relative to a reference point (origin)." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "A frame of reference requires:", options: ["Only a direction", "Only a reference point", "A reference point plus a set of directions", "Only time"], answer: "2", explanation: "FRAME OF REFERENCE = reference point + directions." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Position is measured in units of:", options: ["Time", "Length (m, cm, km)", "Mass", "Speed"], answer: "1", explanation: "Position is measured in LENGTH units." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Distance is a:", options: ["Vector", "Scalar", "Constant", "Force"], answer: "1", explanation: "DISTANCE is SCALAR — no direction." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Displacement is a:", options: ["Scalar", "Vector", "Constant", "Force"], answer: "1", explanation: "DISPLACEMENT is a VECTOR — has direction." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Which is the formula for displacement?", options: ["s = v/t", "Δs = s − s₀", "v = u + at", "a = Δv/t"], answer: "1", explanation: "Δs = s − s₀ (final position − initial position)." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "A person walks 70 m east, then 30 m west. Distance travelled is:", options: ["40 m", "70 m", "100 m", "30 m"], answer: "2", explanation: "DISTANCE = 70 + 30 = 100 m (total path)." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "A person walks 70 m east, then 30 m west. Displacement is:", options: ["40 m east", "40 m west", "100 m", "70 m"], answer: "0", explanation: "DISPLACEMENT = 70 − 30 = 40 m EAST." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "Object goes 60 km east, then 60 km west. Displacement is:", options: ["120 km", "60 km", "0 km", "30 km"], answer: "2", explanation: "Returns to start → DISPLACEMENT = 0." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Object goes 60 km east, then 60 km west. Distance is:", options: ["0 km", "60 km", "120 km", "30 km"], answer: "2", explanation: "DISTANCE = 60 + 60 = 120 km." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The magnitude of displacement is always:", options: ["Greater than distance", "Less than or equal to distance", "Equal to distance", "Zero"], answer: "1", explanation: "|Displacement| ≤ Distance ALWAYS." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Average velocity is defined as:", options: ["Total distance / total time", "Displacement / time", "Change in speed", "Acceleration × time"], answer: "1", explanation: "Average velocity = DISPLACEMENT / TIME." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "The SI unit of average velocity is:", options: ["m", "m/s²", "m/s", "s"], answer: "2", explanation: "SI unit of velocity is m/s." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "Which is the formula for average speed?", options: ["Δs / Δt", "total distance / total time", "v₀ + at", "a × t"], answer: "1", explanation: "Average speed = TOTAL DISTANCE / TOTAL TIME." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Average speed equals |average velocity| when:", options: ["Motion is in a straight line in one direction", "Motion is circular", "Object turns around", "Motion is random"], answer: "0", explanation: "Equal only for STRAIGHT-LINE ONE-DIRECTION motion." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "Instantaneous velocity means:", options: ["Velocity over a long time", "Velocity at a specific instant", "Average of all velocities", "Initial velocity"], answer: "1", explanation: "INSTANTANEOUS velocity = velocity AT A SPECIFIC INSTANT." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "A speedometer of a car measures:", options: ["Velocity", "Instantaneous speed", "Acceleration", "Displacement"], answer: "1", explanation: "Speedometer reads SPEED (no direction)." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Walking at 1.2 m/s north for 10 min gives displacement:", options: ["12 m", "72 m", "720 m", "1200 m"], answer: "2", explanation: "Δs = v × t = 1.2 × 600 = 720 m north." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "Acceleration is:", options: ["Distance/time", "Rate of change of velocity", "Rate of change of displacement", "Velocity × time"], answer: "1", explanation: "Acceleration = rate of change of VELOCITY." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "The SI unit of acceleration is:", options: ["m", "m/s", "m/s²", "m²/s"], answer: "2", explanation: "SI unit of acceleration = m/s²." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Average acceleration is:", options: ["(v + v₀)/t", "(v − v₀)/t", "v × t", "s/t"], answer: "1", explanation: "a = (v − v₀) / t." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "An object speeds up. The acceleration is:", options: ["Always negative", "In the same direction as velocity", "Opposite to velocity", "Zero"], answer: "1", explanation: "When speeding up, a has the SAME sign as v." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "An object slows down. The acceleration is:", options: ["Same direction as velocity", "Opposite to velocity", "Zero", "Always positive"], answer: "1", explanation: "When slowing down, a is OPPOSITE to v (deceleration)." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "If a car is moving at constant velocity, its acceleration is:", options: ["Positive", "Negative", "Zero", "Infinite"], answer: "2", explanation: "CONSTANT velocity → a = 0." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "A ball at the top of its flight has velocity v = 0. Its acceleration is:", options: ["0", "g = 9.8 m/s² downward", "Infinite", "Depends on mass"], answer: "1", explanation: "At the top: v = 0 but a = g (downward)." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "Which is the first equation of motion?", options: ["v = v₀ + at", "s = v₀t + ½at²", "v² = v₀² + 2as", "s = (v₀+v)/2 × t"], answer: "0", explanation: "v = v₀ + at is the first equation." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Which equation does NOT contain time?", options: ["v = v₀ + at", "s = v₀t + ½at²", "v² = v₀² + 2as", "s = (v₀+v)/2 × t"], answer: "2", explanation: "v² = v₀² + 2as has no t." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Which equation does NOT contain final velocity?", options: ["v = v₀ + at", "s = v₀t + ½at²", "v² = v₀² + 2as", "s = (v₀+v)/2 × t"], answer: "1", explanation: "s = v₀t + ½at² has no v." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Which equation does NOT contain acceleration?", options: ["v = v₀ + at", "s = (v₀+v)/2 × t", "s = v₀t + ½at²", "v² = v₀² + 2as"], answer: "1", explanation: "s = (v₀+v)/2 × t has no a." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "For free fall, the value of g is approximately:", options: ["9.8 m/s", "9.8 m/s²", "9.8 N", "9.8 kg"], answer: "1", explanation: "g ≈ 9.8 m/s² (acceleration, not velocity)." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "Free fall means:", options: ["Falling with air resistance", "Motion under gravity only (no air resistance)", "Falling with velocity", "Falling with zero acceleration"], answer: "1", explanation: "FREE FALL = motion under GRAVITY ALONE." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "The position-time graph for uniform acceleration is a:", options: ["Straight line", "Circle", "Parabola", "Horizontal line"], answer: "2", explanation: "s = v₀t + ½at² is quadratic → PARABOLA." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "The velocity-time graph for uniform acceleration is a:", options: ["Parabola", "Straight line", "Circle", "Vertical line"], answer: "1", explanation: "v = v₀ + at is linear → STRAIGHT LINE." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "The acceleration-time graph for uniform acceleration is:", options: ["Horizontal line", "Slope going up", "Parabola", "Circle"], answer: "0", explanation: "a is CONSTANT → horizontal line." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "The slope of an s–t graph gives:", options: ["Acceleration", "Velocity", "Displacement", "Distance"], answer: "1", explanation: "Slope of s–t = VELOCITY." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "The slope of a v–t graph gives:", options: ["Velocity", "Displacement", "Acceleration", "Distance"], answer: "2", explanation: "Slope of v–t = ACCELERATION." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "The area under a v–t graph gives:", options: ["Velocity", "Acceleration", "Displacement", "Force"], answer: "2", explanation: "AREA under v–t = DISPLACEMENT." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "The area under an a–t graph gives:", options: ["Acceleration", "Displacement", "Change in velocity", "Change in position"], answer: "2", explanation: "AREA under a–t = CHANGE IN VELOCITY (Δv)." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "Relative velocity when two objects move towards each other is:", options: ["v_A − v_B", "v_A + v_B", "Zero", "Average"], answer: "1", explanation: "APPROACHING → ADD: v_AB = v_A + v_B." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "Relative velocity when two objects move in the same direction is:", options: ["v_A + v_B", "v_A − v_B", "Zero", "Same as v_A"], answer: "1", explanation: "SAME direction → SUBTRACT: v_AB = v_A − v_B." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "A car travels 100 km at 50 km/h, then 100 km at 100 km/h. Average speed is:", options: ["75 km/h", "66.7 km/h", "50 km/h", "100 km/h"], answer: "1", explanation: "Total distance / total time = 200/3 ≈ 66.7 km/h. NOT (50+100)/2." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Car from rest reaches 21 m/s in 5 s. Average acceleration:", options: ["4.2 m/s²", "21 m/s²", "5 m/s²", "26 m/s²"], answer: "0", explanation: "a = (21 − 0)/5 = 4.2 m/s²." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "Car slows from 15 m/s to 5 m/s in 5 s. Acceleration:", options: ["2 m/s²", "−2 m/s²", "−10 m/s²", "−20 m/s²"], answer: "1", explanation: "a = (5 − 15)/5 = −2 m/s²." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "Car accelerates from rest to 75 km/h in 5 s. Acceleration in m/s²:", options: ["15 m/s²", "75 m/s²", "4.2 m/s²", "21 m/s²"], answer: "2", explanation: "75 km/h = 21 m/s; a = 21/5 = 4.2 m/s²." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "Car from rest accelerates uniformly covering 100 m in 5 s. Acceleration:", options: ["4 m/s²", "8 m/s²", "20 m/s²", "40 m/s²"], answer: "1", explanation: "s = ½at² → 100 = ½(a)(25) → a = 8 m/s²." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "Airplane lands at 70 m/s and decelerates at 1.5 m/s² for 40 s. Final velocity:", options: ["−10 m/s", "0", "10 m/s", "30 m/s"], answer: "2", explanation: "v = 70 − 1.5(40) = 10 m/s." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "Car from rest with a = 3.5 m/s² reaches 25 m/s. Distance travelled:", options: ["89.3 m", "178.6 m", "250 m", "25 m"], answer: "0", explanation: "v² = 2as → 625 = 7s → s ≈ 89.3 m." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "A mango falls freely for 1 s. g = 9.8. Its velocity at ground:", options: ["4.9 m/s", "9.8 m/s", "19.6 m/s", "0"], answer: "1", explanation: "v = gt = 9.8 × 1 = 9.8 m/s." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "A mango falls freely for 1 s (g = 9.8). Height fallen:", options: ["2.45 m", "4.9 m", "9.8 m", "19.6 m"], answer: "1", explanation: "h = ½gt² = ½(9.8)(1) = 4.9 m." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Stone falls freely for 8 s. Velocity after 8 s:", options: ["8 m/s", "39.2 m/s", "78.4 m/s", "156.8 m/s"], answer: "2", explanation: "v = gt = 9.8 × 8 = 78.4 m/s." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "Stone falls freely for 8 s. Height fallen:", options: ["78.4 m", "156.8 m", "313.6 m", "39.2 m"], answer: "2", explanation: "h = ½gt² = ½(9.8)(64) = 313.6 m." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "Cyclist at 5.6 m/s accelerates at 0.6 m/s² for 4 s. Distance travelled:", options: ["22.4 m", "27.2 m", "32 m", "16 m"], answer: "1", explanation: "s = v₀t + ½at² = 22.4 + 4.8 = 27.2 m." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "Cyclist at 5.6 m/s accelerates at 0.6 m/s² for 4 s. Final velocity:", options: ["5.6 m/s", "6.2 m/s", "8.0 m/s", "10.4 m/s"], answer: "2", explanation: "v = 5.6 + 0.6(4) = 8.0 m/s." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "A car has velocity 20 m/s east. Its speed is:", options: ["20 m/s", "20 m/s east", "0", "40 m/s"], answer: "0", explanation: "MAGNITUDE of velocity = SPEED = 20 m/s." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "Car at 14 m/s brakes to rest in 5 s. Acceleration:", options: ["−2.8 m/s²", "−5 m/s²", "2.8 m/s²", "−14 m/s²"], answer: "0", explanation: "a = (0 − 14)/5 = −2.8 m/s²." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "Race car from rest to 15 m/s west in 1.8 s. Acceleration:", options: ["8.3 m/s² east", "8.3 m/s² west", "27 m/s² west", "15 m/s²"], answer: "1", explanation: "a = 15/1.8 ≈ 8.3 m/s² west (same direction as velocity)." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "Bicycle travels 15 min at 12.5 km/h south. Distance:", options: ["3.125 km", "12.5 km", "187.5 km", "0.83 km"], answer: "0", explanation: "t = 0.25 h; s = 12.5 × 0.25 = 3.125 km." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "Race car slows from 44 m/s to 22 m/s in 11 s. Distance covered:", options: ["363 m", "242 m", "484 m", "121 m"], answer: "0", explanation: "s = (v₀+v)/2 × t = (44+22)/2 × 11 = 363 m." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Truck slows from 22 m/s to 14 m/s over 125 m. Acceleration:", options: ["−1.15 m/s²", "−0.64 m/s²", "−2.5 m/s²", "1.15 m/s²"], answer: "0", explanation: "v² = v₀² + 2as → 196 = 484 + 250a → a = −1.15 m/s²." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "A car has velocity +20 m/s and acceleration +3 m/s². It is:", options: ["Slowing down", "Speeding up", "Constant velocity", "Stopped"], answer: "1", explanation: "v and a have the SAME sign → SPEEDING UP." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "A car has velocity +20 m/s and acceleration −3 m/s². It is:", options: ["Slowing down", "Speeding up", "Constant velocity", "Reversing"], answer: "0", explanation: "v and a have OPPOSITE signs → SLOWING DOWN." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "A car has velocity −20 m/s (west) and acceleration −3 m/s². It is:", options: ["Slowing down", "Speeding up", "Constant velocity", "Stopped"], answer: "1", explanation: "Both negative → same sign → SPEEDING UP (in the − direction)." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "A car has velocity −20 m/s and acceleration +3 m/s². It is:", options: ["Slowing down", "Speeding up", "Constant velocity", "Stopped"], answer: "0", explanation: "v is −, a is + → OPPOSITE signs → SLOWING DOWN." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "A boy runs 12 km north, then 16 km east. Displacement magnitude:", options: ["28 km", "20 km", "4 km", "192 km"], answer: "1", explanation: "R = √(12²+16²) = √400 = 20 km." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "A boy runs 12 km north, then 16 km east in 3 h. Average speed:", options: ["4.7 km/h", "6.7 km/h", "9.3 km/h", "20 km/h"], answer: "2", explanation: "Total distance = 12 + 16 = 28 km; average speed = 28/3 ≈ 9.3 km/h." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "A boy runs 12 km north, then 16 km east in 3 h. Average velocity magnitude:", options: ["9.3 km/h", "6.7 km/h", "4 km/h", "20 km/h"], answer: "1", explanation: "Displacement = 20 km; average velocity = 20/3 ≈ 6.7 km/h." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "Car with average velocity 48 km/h east travels 144 km. Time:", options: ["1 h", "2 h", "3 h", "4 h"], answer: "2", explanation: "t = 144/48 = 3 h." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "A position-time graph has slope 4 m/s at t = 2 s. The velocity at t = 2 s is:", options: ["2 m/s", "4 m/s", "8 m/s", "0"], answer: "1", explanation: "Slope = velocity. So v = 4 m/s." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "A velocity-time graph has slope 2 m/s². The acceleration is:", options: ["0", "1 m/s²", "2 m/s²", "4 m/s²"], answer: "2", explanation: "Slope of v–t = acceleration. So a = 2 m/s²." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "A v–t graph area from t = 0 to 5 s is 25 m. Displacement in that interval:", options: ["5 m", "25 m", "125 m", "0"], answer: "1", explanation: "AREA under v–t = displacement = 25 m." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Two cars approach at 60 km/h and 40 km/h. Relative velocity:", options: ["20 km/h", "100 km/h", "2400 km/h", "0"], answer: "1", explanation: "APPROACHING → ADD = 60 + 40 = 100 km/h." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "Car A at 100 km/h passes car B at 70 km/h in the same direction. Relative velocity of A wrt B:", options: ["170 km/h", "30 km/h", "70 km/h", "0"], answer: "1", explanation: "SAME direction → SUBTRACT = 100 − 70 = 30 km/h." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "Motorcycle at 120 km/h passes car at 90 km/h (same direction). Velocity of motorcycle as seen by car passenger:", options: ["30 km/h ahead", "210 km/h", "90 km/h", "0"], answer: "0", explanation: "120 − 90 = 30 km/h ahead (relative to car)." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "Automobile 80 km/h approaches truck 60 km/h. Relative velocity of automobile wrt truck:", options: ["20 km/h", "140 km/h", "60 km/h", "80 km/h"], answer: "1", explanation: "APPROACHING → ADD = 80 + 60 = 140 km/h." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "Thief on jeep at 9 m/s, police on motorcycle at 10 m/s, 100 m apart. Time to catch:", options: ["10 s", "19 s", "90 s", "100 s"], answer: "3", explanation: "Relative velocity = 10 − 9 = 1 m/s; time = 100/1 = 100 s." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "Which unit is correct for acceleration?", options: ["m/s", "m/s²", "m·s", "m²/s"], answer: "1", explanation: "Acceleration = m/s² (velocity per unit time)." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "A position-time graph that is a straight line means:", options: ["Constant acceleration", "Constant velocity", "Zero velocity", "Infinite velocity"], answer: "1", explanation: "Straight line → constant slope → CONSTANT VELOCITY (a = 0)." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "A velocity-time graph that is a horizontal line means:", options: ["Constant acceleration", "Zero acceleration (constant velocity)", "Negative velocity", "Reversing direction"], answer: "1", explanation: "Horizontal v–t line → slope 0 → a = 0, constant velocity." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "If a v–t graph area is NEGATIVE (below time axis), the displacement is:", options: ["Positive", "Negative (or reduced)", "Zero", "Doubled"], answer: "1", explanation: "Area BELOW time axis = NEGATIVE displacement." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "A stone is thrown upward and reaches the top. At the top, its velocity and acceleration:", options: ["Both zero", "Velocity zero, acceleration g downward", "Velocity g, acceleration zero", "Both g"], answer: "1", explanation: "At the top: v = 0 but a = g downward (always)." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "A truck starts at rest and accelerates at 2 m/s² until reaching 20 m/s. Time to reach 20 m/s:", options: ["5 s", "10 s", "20 s", "40 s"], answer: "1", explanation: "v = v₀ + at → 20 = 2t → t = 10 s." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "A truck accelerates at 2 m/s² from rest to 20 m/s, then 20 s at constant 20 m/s, then brakes uniformly in 5 s. Total time in motion:", options: ["30 s", "35 s", "40 s", "25 s"], answer: "1", explanation: "10 s + 20 s + 5 s = 35 s." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Using the same truck: distance during acceleration phase:", options: ["50 m", "100 m", "200 m", "400 m"], answer: "1", explanation: "s = ½(2)(10²) = 100 m." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Truck continues 20 s at 20 m/s. Distance during constant phase:", options: ["20 m", "100 m", "200 m", "400 m"], answer: "3", explanation: "s = 20 × 20 = 400 m." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "Truck brakes from 20 m/s to 0 in 5 s. Distance during braking:", options: ["20 m", "50 m", "100 m", "200 m"], answer: "1", explanation: "s = (v₀+v)/2 × t = (20+0)/2 × 5 = 50 m." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "Total distance travelled by the truck (100 m + 400 m + 50 m):", options: ["450 m", "500 m", "550 m", "600 m"], answer: "2", explanation: "Total = 100 + 400 + 50 = 550 m." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "Average speed of the truck over the whole 35 s (total distance 550 m):", options: ["10 m/s", "15.7 m/s", "20 m/s", "25 m/s"], answer: "1", explanation: "550 / 35 ≈ 15.7 m/s." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "A stone is dropped from 80 m. Time to hit the ground (g = 10):", options: ["2 s", "4 s", "8 s", "16 s"], answer: "1", explanation: "h = ½gt² → 80 = 5t² → t² = 16 → t = 4 s." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "A stone is dropped from 80 m (g = 10). Velocity just before hitting ground:", options: ["20 m/s", "30 m/s", "40 m/s", "80 m/s"], answer: "2", explanation: "v = gt = 10 × 4 = 40 m/s." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "A ball is thrown upward at 20 m/s (g = 10). Time to reach max height:", options: ["1 s", "2 s", "4 s", "20 s"], answer: "1", explanation: "At top v = 0 → 0 = 20 − 10t → t = 2 s." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "A ball is thrown upward at 20 m/s (g = 10). Max height:", options: ["10 m", "20 m", "40 m", "80 m"], answer: "1", explanation: "v² = v₀² − 2gh → 0 = 400 − 20h → h = 20 m." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "A ball is thrown upward at 20 m/s (g = 10). Total time in air (up + down):", options: ["2 s", "4 s", "8 s", "20 s"], answer: "1", explanation: "Time up = 2 s; time down = 2 s; total = 4 s." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "A body accelerates at 5 m/s² from 2 m/s for 4 s. Final velocity:", options: ["18 m/s", "20 m/s", "22 m/s", "26 m/s"], answer: "2", explanation: "v = 2 + 5(4) = 22 m/s." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Same body (a = 5, v₀ = 2, t = 4). Distance travelled:", options: ["40 m", "48 m", "56 m", "64 m"], answer: "1", explanation: "s = 2(4) + ½(5)(16) = 8 + 40 = 48 m." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "A jet at 1000 km/h ejects hot air backward at 800 km/h (relative to jet). Speed of hot air relative to ground:", options: ["1800 km/h forward", "200 km/h forward", "800 km/h backward", "200 km/h backward"], answer: "3", explanation: "v_air = 1000 (jet) − 800 (opposite) = 200 km/h, in the direction opposite to jet = BACKWARD." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "A car accelerates from 20 m/s to 40 m/s over 200 m. Acceleration:", options: ["1 m/s²", "2 m/s²", "3 m/s²", "4 m/s²"], answer: "2", explanation: "v² = v₀² + 2as → 1600 = 400 + 400a → a = 3 m/s²." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "A ball thrown down at 5 m/s from 45 m (g = 10). Time to hit ground:", options: ["1 s", "2 s", "3 s", "4 s"], answer: "2", explanation: "45 = 5t + 5t² → 5t² + 5t − 45 = 0 → t² + t − 9 = 0 → t = 3 s (approx)." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "A ball thrown down at 5 m/s from 45 m (g = 10). Velocity at ground:", options: ["20 m/s", "25 m/s", "30 m/s", "35 m/s"], answer: "3", explanation: "v² = 25 + 2(10)(45) = 25 + 900 = 925 → v ≈ 30.4 m/s ≈ 35 m/s (approx)." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "Which statement correctly describes a v–t graph slope?", options: ["Displacement", "Velocity", "Acceleration", "Distance"], answer: "2", explanation: "v–t slope = ACCELERATION." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "Which statement about uniformly accelerated motion is TRUE?", options: ["Velocity is constant", "Acceleration is constant", "Position is constant", "Time is constant"], answer: "1", explanation: "UNIFORMLY ACCELERATED = CONSTANT ACCELERATION." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "easy", stem: "Define position and explain why a reference point is needed.", answer: "Position is a measurement of location relative to a reference point (origin). Without a reference point, you cannot say WHERE you are — 'here' or '300 m away' is meaningless without saying what the 300 m is from.", explanation: "Abatu, position needs an origin." },
    { id: "q102", type: "short", difficulty: "easy", stem: "Explain the difference between distance and displacement.", answer: "DISTANCE is the total length of path travelled (scalar, always positive). DISPLACEMENT is the change in position, Δs = s − s₀ (vector, can be positive, negative, or zero). |Displacement| ≤ Distance always.", explanation: "Distance = path; Displacement = straight line + direction." },
    { id: "q103", type: "short", difficulty: "easy", stem: "State the four equations of motion for constant acceleration.", answer: "1) v = v₀ + a t\n2) s = (v₀ + v)/2 × t\n3) s = v₀ t + ½ a t²\n4) v² = v₀² + 2 a s", explanation: "Abatu, memorize all four." },
    { id: "q104", type: "short", difficulty: "easy", stem: "Define average velocity and give its formula.", answer: "Average velocity = displacement / time = Δs/Δt = (s − s₀)/(t − t₀). It is a vector with SI unit m/s.", explanation: "Average velocity = Δs/Δt." },
    { id: "q105", type: "short", difficulty: "medium", stem: "A person walks 70 m east, then 30 m west. Find distance and displacement.", answer: "Distance = 70 + 30 = 100 m. Displacement = +70 − 30 = +40 m (or 40 m east).", explanation: "Abatu, distance adds, displacement subtracts with sign." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Car accelerates from rest to 75 km/h in 5 s. Find average acceleration.", answer: "75 km/h = 75 × (1000/3600) = 20.8 m/s (approximately 21 m/s). a = (v − v₀)/t = 21/5 = 4.2 m/s².", explanation: "Convert km/h to m/s FIRST." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Car slows from 15 m/s to 5 m/s in 5 s. Find acceleration and interpret the sign.", answer: "a = (5 − 15)/5 = −2 m/s². The acceleration is negative because velocity is decreasing (v and a have opposite signs → slowing down).", explanation: "Negative a = deceleration when v > 0." },
    { id: "q108", type: "short", difficulty: "medium", stem: "Airplane lands at 70 m/s and decelerates at 1.5 m/s² for 40 s. Find final velocity.", answer: "v = v₀ + at = 70 + (−1.5)(40) = 70 − 60 = 10 m/s.", explanation: "Use v = v₀ + at with a = −1.5." },
    { id: "q109", type: "short", difficulty: "medium", stem: "Car from rest accelerates at 3.5 m/s². How far when v = 25 m/s?", answer: "v² = v₀² + 2as → 625 = 0 + 2(3.5)s → s = 625/7 ≈ 89.3 m.", explanation: "Use v² = v₀² + 2as when time is not given." },
    { id: "q110", type: "short", difficulty: "medium", stem: "Mango falls from tree, takes 1 s to hit ground (g = 9.8). Find v and h.", answer: "v = gt = 9.8 m/s. h = ½gt² = ½(9.8)(1) = 4.9 m.", explanation: "Free fall: v = gt, h = ½gt²." },
    { id: "q111", type: "short", difficulty: "medium", stem: "Cyclist at 5.6 m/s accelerates at 0.6 m/s² for 4 s. Find distance and final velocity.", answer: "s = v₀t + ½at² = 5.6(4) + ½(0.6)(16) = 22.4 + 4.8 = 27.2 m.\nv = v₀ + at = 5.6 + 0.6(4) = 8.0 m/s.", explanation: "Use s = v₀t + ½at² and v = v₀ + at." },
    { id: "q112", type: "short", difficulty: "medium", stem: "State what the slope and area of a v–t graph represent.", answer: "SLOPE of v–t = acceleration. AREA under v–t = displacement.", explanation: "Memorize: slope = a, area = Δs." },
    { id: "q113", type: "short", difficulty: "medium", stem: "State what the slope of an s–t graph represents and how to find instantaneous velocity from it.", answer: "Slope of s–t = instantaneous velocity. To find it at a point: draw a TANGENT line at that point, then slope = Δs/Δt using two points on the tangent.", explanation: "Tangent line on s–t → slope = v." },
    { id: "q114", type: "short", difficulty: "medium", stem: "A car travels 100 km at 50 km/h, then 100 km at 100 km/h. Find average speed.", answer: "t₁ = 100/50 = 2 h; t₂ = 100/100 = 1 h. Total distance = 200 km; total time = 3 h. Average speed = 200/3 ≈ 66.7 km/h. Do NOT average the speeds (75 km/h is wrong).", explanation: "Always use total distance / total time." },
    { id: "q115", type: "short", difficulty: "hard", stem: "A stone falls freely for 8 s (g = 9.8). Find velocity and height.", answer: "v = gt = 9.8 × 8 = 78.4 m/s. h = ½gt² = ½(9.8)(64) = 313.6 m.", explanation: "Free fall with v₀ = 0." },
    { id: "q116", type: "short", difficulty: "hard", stem: "A ball is thrown upward at 20 m/s (g = 10). Find max height and total time in air.", answer: "Max height: v² = v₀² − 2gh → 0 = 400 − 20h → h = 20 m.\nTime up: 0 = 20 − 10t → t = 2 s. Total time = 2 × 2 = 4 s (up + down).", explanation: "At top v = 0; time up = time down." },
    { id: "q117", type: "short", difficulty: "hard", stem: "A truck starts at rest, accelerates at 2 m/s² to 20 m/s, then 20 s constant, then brakes to stop in 5 s. Find total distance and average speed.", answer: "Phase 1 (accelerating): s₁ = ½(2)(10)² = 100 m (t = 10 s).\nPhase 2 (constant): s₂ = 20 × 20 = 400 m.\nPhase 3 (braking): s₃ = (20+0)/2 × 5 = 50 m.\nTotal distance = 550 m; total time = 35 s; average speed = 550/35 ≈ 15.7 m/s.", explanation: "Break into phases." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Two cars approach each other at 60 km/h and 40 km/h. What is their relative velocity? Explain.", answer: "Since the cars are APPROACHING (opposite directions), ADD the velocities: v_rel = 60 + 40 = 100 km/h. Each car sees the other approaching at 100 km/h.", explanation: "Approaching → ADD." },
    { id: "q119", type: "short", difficulty: "hard", stem: "A thief on a jeep at 9 m/s, police on motorcycle at 10 m/s, 100 m apart. How long until police catch the thief?", answer: "Relative velocity = 10 − 9 = 1 m/s. Time = distance / relative velocity = 100/1 = 100 s.", explanation: "Same direction → subtract velocities." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Explain why a stone dropped from a height takes the same time to fall regardless of its mass (ignoring air resistance).", answer: "In free fall, all objects near the Earth's surface experience the SAME acceleration g = 9.8 m/s² downward, regardless of mass (ignoring air resistance). Since h = ½gt², the mass cancels out, so the time depends only on the height and g.", explanation: "g is independent of mass; time depends only on height." },
  ],
};