import type { Chapter } from "../learnData";

// ============================================================
// GRADE 8 GENERAL SCIENCE — UNIT 7
// PHYSICAL PHENOMENA IN THE SURROUNDING
// Source: AAEB Grade 8 General Science Student Textbook (pp. 187–224)
// For: Banchi (ባንቺ) — Grade 8
// ============================================================

export const g8ScienceCh7: Chapter = {
  id: "ch7",
  number: 7,
  title: "Physical Phenomena in the Surrounding",
  titleAm: "በዙሪያችን ያሉ አካላዊ ክስተቶች",

  // ============================================================
  // NOTES — semantic tree
  // ============================================================
  notes: [
    {
      id: "n1",
      title: "1. Light — Sources and Properties",
      titleAm: "ብርሃን — ምንጮችና ባህሪያት",
      body:
        "Banchi, light is a form of ENERGY that enables us to see objects. We see an object when light from a source or a reflecting body enters our eyes.",
      bodyAm:
        "ባንቺ፣ ብርሃን ነገሮችን እንድናይ የሚያስችለን የጉልበት ዓይነት ነው።",
      children: [
        {
          id: "n1-1",
          title: "Two types of light sources",
          titleAm: "ሁለቱ የብርሃን ምንጮች",
          body:
            "NATURAL light sources — produce light naturally:\n" +
            "• Sun (main source for Earth)\n" +
            "• Stars\n" +
            "• Lightning\n" +
            "• Some living organisms (fireflies, glowworms)\n\n" +
            "ARTIFICIAL (man-made) light sources:\n" +
            "• Candle\n" +
            "• Electric bulb\n" +
            "• Burning wood\n" +
            "• Torch/lamp",
          bodyAm:
            "ተፈጥሯዊ ምንጮች፡ ፀሐይ፣ ኮከቦች፣ መብረቅ፣ አንዳንድ ሕያዋን (ጥንዚዛ)።\nሰው ሠራሽ ምንጮች፡ ሻማ፣ ኤሌክትሪክ አምፑል፣ የሚቃጠል እንጨት።",
        },
        {
          id: "n1-2",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam trap: the Moon is NOT a source of light. It only REFLECTS sunlight. Mirrors are also NOT sources — they reflect light. A source must EMIT its own light (luminous object).",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመድ፡ ጨረቃ የብርሃን ምንጭ አይደለችም። የፀሐይን ብርሃን ብቻ ታንጸባርቃለች።",
        },
      ],
    },

    {
      id: "n2",
      title: "2. Three Properties of Light",
      titleAm: "ሦስቱ የብርሃን ባህሪያት",
      body:
        "Banchi, light has many properties, but for Grade 8 you must know THREE: reflection, refraction, and dispersion.",
      bodyAm:
        "ባንቺ፣ ብርሃን ብዙ ባህሪያት አሉት፣ ግን ለ8ኛ ክፍል ሦስቱን ማወቅ አለብሽ፡ አንጸባራቂ፣ አንቀሳቃሽ፣ መበታተል።",
      children: [
        {
          id: "n2-1",
          title: "Reflection — light bounces back",
          titleAm: "አንጸባራቂ",
          body:
            "REFLECTION = light traveling in one medium hits a surface and returns back to the same medium.\n\n" +
            "Two types:\n" +
            "1) REGULAR (specular) — light reflects from SMOOTH, shiny surfaces (mirror). Forms a CLEAR image.\n" +
            "2) DIFFUSED — light reflects from ROUGH surfaces (wall, wood, paper). Forms a BLURRY or no image.",
          bodyAm:
            "አንጸባራቂ = ብርሃን ገጽታ ላይ ደርሶ ወደ ተመሳሳይ ሚዲያ ይመለሳል።\n1) መደበኛ — ከለስላሳ ገጽታ (መስታወት)። ግልጽ ምስል።\n2) ተበታትኖ — ከጠርዝ ገጽታ (ግድግዳ)። ደብዘዝ ያለ ምስል።",
        },
        {
          id: "n2-2",
          title: "Refraction — light bends",
          titleAm: "አንቀሳቃሽ",
          body:
            "REFRACTION = BENDING of light as it travels from one medium to another.\n\n" +
            "Example: A pencil in a glass of water looks BROKEN at the water surface — because light bends when going from air to water.",
          bodyAm:
            "አንቀሳቃሽ = ብርሃን ከአንድ ሚዲያ ወደ ሌላ ሲጓዝ መታጠፍ።\nምሳሌ፡ በውሃ ውስጥ ያለ እርሳስ የተሰበረ ይመስላል።",
        },
        {
          id: "n2-3",
          title: "Dispersion — white light splits into colors",
          titleAm: "መበታተል",
          body:
            "DISPERSION = splitting of WHITE light into its component colors (using a PRISM).\n\n" +
            "The 7 colors in order: RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, VIOLET.\n\n" +
            "Important: RED bends the LEAST; VIOLET bends the MOST.\n\n" +
            "A RAINBOW is caused by reflection, refraction, and dispersion of light in water droplets.",
          bodyAm:
            "መበታተል = ነጭ ብርሃን በፕሪዝም ወደ ቀለሞቹ መከፋፈል።\n7 ቀለሞች፡ ቀይ፣ ብርቱካን፣ ቢጫ፣ አረንጓዴ፣ ሰማያዊ፣ ኒል፣ ወይንጠጅ።\nቀይ በትንሹ፣ ወይንጠጅ በብዛት ይታጠፋል።\nቀስተ ደመና በአንጸባራቂ፣ አንቀሳቃሽ እና መበታተል ይከሰታል።",
        },
        {
          id: "n2-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam traps:\n" +
            "• Reflection = bounce back. Refraction = bend. Dispersion = split into colors.\n" +
            "• Red bends LEAST, violet bends MOST (not the other way).\n" +
            "• A rainbow shows the 7 colors in order: ROYGBIV.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመዶች፡\n• አንጸባራቂ = መመለስ. አንቀሳቃሽ = መታጠፍ. መበታተል = ወደ ቀለሞች መከፋፈል.\n• ቀይ በትንሹ፣ ወይንጠጅ በብዛት ይታጠፋል.",
        },
      ],
    },

    {
      id: "n3",
      title: "3. Vision and Imaging",
      titleAm: "ራዕይ እና ምስል ማውጣት",
      body:
        "Banchi, to have vision you need BOTH a source of light AND a working EYE. Without either, you cannot see.",
      bodyAm:
        "ባንቺ፣ ለማየት ሁለቱም የብርሃን ምንጭ እና የሚሠራ ዓይን ያስፈልጋሉ።",
      children: [
        {
          id: "n3-1",
          title: "Image formed by a human eye",
          titleAm: "በሰው ዓይን የሚፈጠር ምስል",
          body:
            "• The eye is an imaging tool.\n" +
            "• The image forms on the RETINA (inverted).\n" +
            "• The brain corrects the image so we see it upright.\n" +
            "• For clear vision, the image must form EXACTLY on the retina.",
          bodyAm:
            "• ዓይን የምስል ማውጫ መሣሪያ ነው።\n• ምስሉ በሬቲና ላይ ይፈጠራል (የተገለበጠ)።\n• አንጎል ምስሉን ያስተካክለዋል።",
        },
        {
          id: "n3-2",
          title: "Imaging tools in medicine",
          titleAm: "በመድኃኒት ውስጥ የምስል ማውጫ መሣሪያዎች",
          body:
            "• X-rays\n" +
            "• CT scans (Computed Tomography)\n" +
            "• Ultrasound\n" +
            "• MRI (Magnetic Resonance Imaging)\n\n" +
            "These produce images of internal body structures for diagnosis.",
          bodyAm:
            "• ኤክስ-ሬይ\n• ሲቲ ስካን\n• አልትራሳውንድ\n• ኤምአርአይ\nእነዚህ የውስጥ አካላትን ምስል ያመነጫሉ።",
        },
        {
          id: "n3-3",
          title: "Image formed by a plane mirror",
          titleAm: "በጠፍጣፋ መስታወት የሚፈጠር ምስል",
          body:
            "A PLANE mirror forms a VIRTUAL image with these properties:\n" +
            "1) VIRTUAL (cannot be placed on a screen) and ERECT (upright)\n" +
            "2) SAME SIZE as the object\n" +
            "3) LATERALLY INVERTED (right appears left, left appears right)\n" +
            "4) As FAR BEHIND the mirror as the object is in front",
          bodyAm:
            "ጠፍጣፋ መስታወት ምናባዊ ምስል ይፈጥራል፡\n1) ምናባዊና ቀጥ ያለ\n2) ከዕቃው ጋር ተመሳሳይ መጠን\n3) በጎን የተገለበጠ\n4) ከመስታወቱ ጀርባ ተመሳሳይ ርቀት",
        },
        {
          id: "n3-4",
          title: "Real vs Virtual Images",
          titleAm: "እውነተኛ እና ምናባዊ ምስሎች",
          body:
            "REAL image — can be placed on a screen; always INVERTED.\n" +
            "VIRTUAL image — cannot be placed on a screen; always ERECT.",
          bodyAm:
            "እውነተኛ ምስል — በስክሪን ላይ ይቀመጣል፤ ሁልጊዜ የተገለበጠ።\nምናባዊ ምስል — በስክሪን ላይ አይቀመጥም፤ ሁልጊዜ ቀጥ ያለ።",
        },
        {
          id: "n3-5",
          title: "Transmission of light through materials",
          titleAm: "ብርሃን በቁሶች ውስጥ ማለፍ",
          body:
            "• TRANSPARENT — light passes COMPLETELY. You see through clearly. Examples: glass, clean water, clear plastic, air.\n" +
            "• TRANSLUCENT — light passes PARTIALLY. You see unclearly. Examples: oiled paper, waxed paper, frosted glass.\n" +
            "• OPAQUE — light does NOT pass. You cannot see through. Examples: metal sheet, wood, wall, stone.",
          bodyAm:
            "• ግልጽ — ብርሃን ሙሉ በሙሉ ያልፋል። ምሳሌ፡ ብርጭቆ፣ ንጹሕ ውሃ።\n• ከፊል ግልጽ — በከፊል ያልፋል። ምሳሌ፡ ዘይት የተቀባበት ወረቀት።\n• ጨለማ — ብርሃን አያልፍም። ምሳሌ፡ ብረት፣ እንጨት፣ ግድግዳ።",
        },
        {
          id: "n3-6",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam traps:\n" +
            "• Plane mirror image = VIRTUAL, ERECT, SAME SIZE, LATERALLY INVERTED.\n" +
            "• TRANSPARENT = see through clearly. TRANSLUCENT = see through partially. OPAQUE = cannot see through.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመዶች፡\n• የጠፍጣፋ መስታወት ምስል = ምናባዊ፣ ቀጥ፣ ተመሳሳይ መጠን፣ በጎን የተገለበጠ።",
        },
      ],
    },

    {
      id: "n4",
      title: "4. Sound — A Form of Energy",
      titleAm: "ድምፅ — የጉልበት ዓይነት",
      body:
        "Banchi, sound is a form of ENERGY that produces the sensation of hearing. It is produced by VIBRATING objects.",
      bodyAm:
        "ባንቺ፣ ድምፅ የመስማት ስሜት የሚፈጥር የጉልበት ዓይነት ነው። በሚንቀጠቀጡ ነገሮች ይመነጫል።",
      children: [
        {
          id: "n4-1",
          title: "How sound is produced",
          titleAm: "ድምፅ እንዴት ይመነጫል",
          body:
            "Sound is produced by VIBRATION — a back-and-forth motion of an object.\n\n" +
            "Examples:\n" +
            "• Drum: skin vibrates when struck.\n" +
            "• Guitar: strings vibrate.\n" +
            "• Flute: air vibrates.\n" +
            "• Our voice: vocal cords vibrate.",
          bodyAm:
            "ድምፅ በመንቀጥቀጥ ይመነጫል።\nምሳሌዎች፡ ከበሮ፣ ጊታር፣ ዋሽንት፣ ድምፃችን (የድምፅ አውታሮች)።",
        },
        {
          id: "n4-2",
          title: "Propagation of sound",
          titleAm: "የድምፅ ስርጭት",
          body:
            "Sound needs a MEDIUM — a material or substance to travel through. Three states:\n" +
            "• SOLIDS — fastest (molecules closest together)\n" +
            "• LIQUIDS — medium speed\n" +
            "• GASES — slowest (molecules farthest apart)\n\n" +
            "Speed order: SOLID > LIQUID > GAS.\n\n" +
            "Sound CANNOT travel through VACUUM (empty space).",
          bodyAm:
            "ድምፅ ሚዲያ ያስፈልገዋል።\n• ጠጣር — በጣም ፈጣን\n• ፈሳሽ — መካከለኛ\n• ጋዝ — በጣም ቀርፋፋ\nቅደም ተከተል፡ ጠጣር > ፈሳሽ > ጋዝ።\nድምፅ በባዶ ቦታ ማለፍ አይችልም።",
        },
        {
          id: "n4-3",
          title: "Hearing",
          titleAm: "መስማት",
          body:
            "Sound waves enter the EAR and cause the EARDRUM to vibrate. The vibration is sent to the brain, which we experience as hearing.",
          bodyAm:
            "የድምፅ ሞገዶች ወደ ጆሮ ገብተው የጆሮ ክራንች ያራምዳሉ። ማወዛወዙ ወደ አንጎል ይላካል።",
        },
        {
          id: "n4-4",
          title: "Noise and music",
          titleAm: "ጫጫታ እና ሙዚቃ",
          body:
            "• MUSIC — sound that is pleasant to hear.\n" +
            "• NOISE — sound that is unpleasant to hear.",
          bodyAm:
            "• ሙዚቃ — የሚያስደስት ድምፅ።\n• ጫጫታ — የማያስደስት ድምፅ።",
        },
        {
          id: "n4-5",
          title: "Sound pollution — causes and effects",
          titleAm: "የድምፅ ብክለት",
          body:
            "CAUSES: vehicles, explosions, machines, loudspeakers, TV/radio at high volume.\n\n" +
            "MEASURED in DECIBELS (dB):\n" +
            "• Whisper: 30 dB\n" +
            "• Normal conversation: 60 dB\n" +
            "• Heavy traffic: 80–89 dB\n" +
            "• Loud radio/TV: 105–110 dB\n" +
            "• Standing near sirens: 120 dB\n" +
            "• Gun shot / jet engine: 140 dB\n\n" +
            "Above 120 dB → immediate harm to ears.\n" +
            "Long-term exposure to 80 dB → hearing problems.\n\n" +
            "EFFECTS: irritation, stress, headache, sleep problems, hearing loss, heart attack, lack of concentration.\n\n" +
            "CONTROL: strict rules for loudspeakers, silencers on vehicles, minimize horn use, low volume for communication, ear plugs in noisy factories, tree plantation along roads.",
          bodyAm:
            "ምንጮች፡ ተሽከርካሪዎች፣ ፍንዳታዎች፣ ማሽኖች፣ ድምፅ ማጉያዎች።\nዲሲቤል (dB)፡ ሹክሹክታ 30፣ ውይይት 60፣ ጫጫታ ያለበት መንገድ 80-89፣ ጠመንጃ 140።\nከ120 dB በላይ → ወዲያውኑ ጉዳት።\nውጤቶች፡ ብስጭት፣ ጭንቀት፣ ራስ ምታት፣ የመስማት ችግር።",
        },
        {
          id: "n4-6",
          title: "Echo — reflection of sound",
          titleAm: "ኢኮ — የድምፅ አንጸባራቂ",
          body:
            "ECHO = a repeated sound caused by the REFLECTION of sound waves from a surface.\n\n" +
            "Hard, flat surfaces (walls, mountains, buildings) reflect sound well.\n" +
            "Soft surfaces (clothes, paper, curtains, carpet) absorb sound.\n\n" +
            "Applications:\n" +
            "• Hearing aid — reflects sound into a narrow area\n" +
            "• Sound boards in auditoriums — spread sound uniformly\n" +
            "• Stethoscope — multiple reflections of heartbeat sounds",
          bodyAm:
            "ኢኮ = የድምፅ ሞገዶች ከገጽታ ተመልሰው የሚፈጥሩ ተደጋጋሚ ድምፅ።\nጠንካራ ገጽታዎች ድምፅን ያንጸባርቃሉ። ለስላሳ ገጽታዎች ይስባሉ።\nተግባራዊ ጥቅሞች፡ የመስሚያ መርጃ፣ የድምፅ ቦርዶች፣ ስቴቶስኮፕ።",
        },
        {
          id: "n4-7",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam traps:\n" +
            "• Sound needs a MEDIUM — it CANNOT travel through vacuum.\n" +
            "• Sound travels FASTEST in solids, SLOWEST in gases (opposite of light).\n" +
            "• Sound pollution is measured in DECIBELS (dB), not Hz.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመዶች፡\n• ድምፅ ሚዲያ ያስፈልገዋል — በባዶ ቦታ አያልፍም።\n• ድምፅ በጠጣር በጣም ፈጣን፣ በጋዝ በጣም ቀርፋፋ ነው።",
        },
      ],
    },

    {
      id: "n5",
      title: "5. Heat — Energy in Motion",
      titleAm: "ሙቀት — የሚንቀሳቀስ ጉልበት",
      body:
        "Banchi, heat is a form of ENERGY that flows from a body at HIGHER temperature to a body at LOWER temperature. It continues until both reach the same temperature.",
      bodyAm:
        "ባንቺ፣ ሙቀት ከከፍተኛ ሙቀት ካለው አካል ወደ ዝቅተኛ ሙቀት ካለው አካል የሚፈስ የጉልበት ዓይነት ነው።",
      children: [
        {
          id: "n5-1",
          title: "Three mechanisms of heat transfer",
          titleAm: "ሦስቱ የሙቀት ማስተላለፊያ ዘዴዎች",
          body:
            "1) CONDUCTION — transfer through DIRECT CONTACT (particles collide). Happens mostly in SOLIDS. Example: metal spoon in hot tea.\n\n" +
            "2) CONVECTION — transfer by the MOVEMENT of a fluid (liquid or gas). Warm fluid rises, cold fluid sinks. Example: boiling water.\n\n" +
            "3) RADIATION — transfer WITHOUT any material medium. Works through vacuum. Example: heat from the Sun reaching Earth.",
          bodyAm:
            "1) ኮንዳክሽን — በቀጥታ ግንኙነት። በዋናነት በጠጣር።\n2) ኮንቬክሽን — በፈሳሽ እንቅስቃሴ። ሙቅ ፈሳሽ ይወጣል፣ ቀዝቃዛ ይወርዳል።\n3) ራዲዬሽን — ያለ ሚዲያ። በባዶ ቦታ ያልፋል። ምሳሌ፡ የፀሐይ ሙቀት።",
        },
        {
          id: "n5-2",
          title: "Conductors vs Insulators",
          titleAm: "አስተላላፊዎች እና አግዳሚዎች",
          body:
            "CONDUCTORS — allow heat to pass through easily. Examples: metals (copper, aluminum, iron).\n\n" +
            "INSULATORS (poor conductors) — do NOT allow heat to pass easily. Examples: wood, plastic, rubber, air, wool, cloth.\n\n" +
            "Real-life: Cooking pans have METAL bodies (conductor) but WOODEN or PLASTIC handles (insulator) so we don't burn our hands.",
          bodyAm:
            "አስተላላፊዎች — ሙቀት በቀላሉ ያልፋል። ምሳሌ፡ ብረቶች።\nአግዳሚዎች — ሙቀት አያልፍም። ምሳሌ፡ እንጨት፣ ፕላስቲክ፣ ጎማ።\nየምግብ ማብሰያ ድስት የብረት አካልና የእንጨት ወይም ፕላስቲክ መያዣ አለው።",
        },
        {
          id: "n5-3",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam traps:\n" +
            "• CONDUCTION = solids (contact). CONVECTION = fluids (movement). RADIATION = no medium needed.\n" +
            "• Metals are CONDUCTORS. Wood, plastic, air are INSULATORS.\n" +
            "• Heat flows from HOT to COLD, not the other way.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመዶች፡\n• ኮንዳክሽን = ጠጣር. ኮንቬክሽን = ፈሳሽ. ራዲዬሽን = ያለ ሚዲያ.\n• ሙቀት ከሞቀ ወደ ቀዝቃዛ ይፈሳል።",
        },
      ],
    },

    {
      id: "n6",
      title: "6. Simple Electric Circuit",
      titleAm: "ቀላል የኤሌክትሪክ ዑደት",
      body:
        "Banchi, a CIRCUIT is a complete path through which electricity flows. To build one, you need several components.",
      bodyAm:
        "ባንቺ፣ ዑደት = ኤሌክትሪክ የሚፈስበት ሙሉ መንገድ ነው።",
      children: [
        {
          id: "n6-1",
          title: "Components of a simple circuit",
          titleAm: "የቀላል ዑደት አካላት",
          body:
            "• CELL / BATTERY — source of electricity. A battery = two or more cells.\n" +
            "• BULB — glows and emits light when current passes through.\n" +
            "• CONDUCTOR (WIRE) — allows current to flow (copper wire).\n" +
            "• SWITCH — opens or closes the circuit.\n" +
            "• RESISTOR — any device that produces light or heat.",
          bodyAm:
            "• ባትሪ — የኤሌክትሪክ ምንጭ።\n• አምፑል — ሲያልፍ ያበራል።\n• ሽቦ — ጅረት እንዲፈስ ያስችላል።\n• ስዊች — ዑደቱን ይከፍታል ወይም ይዘጋል።\n• ሬዚስተር — ብርሃን ወይም ሙቀት የሚያመነጭ።",
        },
        {
          id: "n6-2",
          title: "Open vs Closed Circuit",
          titleAm: "የተከፈተ እና የተዘጋ ዑደት",
          body:
            "CLOSED circuit — complete path. Current flows. Bulb lights up.\n" +
            "OPEN circuit — has a GAP. Current does not flow. Bulb does NOT light up.",
          bodyAm:
            "የተዘጋ ዑደት — ሙሉ መንገድ። ጅረት ይፈሳል። አምፑሉ ያበራል።\nየተከፈተ ዑደት — ክፍተት አለው። ጅረት አይፈሳም። አምፑሉ አያበራም።",
        },
        {
          id: "n6-3",
          title: "Electrical safety",
          titleAm: "የኤሌክትሪክ ደህንነት",
          body:
            "• NEVER play with electrical wires or sockets.\n" +
            "• Do NOT connect the two terminals of a cell directly with a wire (short circuit).",
          bodyAm:
            "• በኤሌክትሪክ ሽቦዎች ወይም ሶኬቶች አትጫወቱ።\n• የባትሪውን ሁለት ተርሚናሎች በሽቦ በቀጥታ አታገናኙ።",
        },
        {
          id: "n6-4",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam traps:\n" +
            "• A CIRCUIT must be CLOSED for current to flow.\n" +
            "• A BATTERY is two or more CELLS combined.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመዶች፡\n• ጅረት ለመፍሰስ ዑደቱ የተዘጋ መሆን አለበት።\n• ባትሪ = ሁለት ወይም ከዚያ በላይ ሴሎች።",
        },
      ],
    },

    {
      id: "n7",
      title: "7. Magnetism",
      titleAm: "መግነጢሳዊነት",
      body:
        "Banchi, magnetism is the branch of physics that deals with the property of magnets. Magnets ATTRACT metals like IRON, COBALT, and NICKEL.",
      bodyAm:
        "ባንቺ፣ መግነጢሳዊነት የማግኔትን ባህሪ የሚያጠና የፊዚክስ ክፍል ነው። ማግኔቶች ብረት፣ ኮባልት እና ኒኬልን ይስባሉ።",
      children: [
        {
          id: "n7-1",
          title: "Two types of magnets",
          titleAm: "ሁለቱ የማግኔት ዓይነቶች",
          body:
            "NATURAL magnets — found in nature. Example: LODESTONE (first discovered, permanent).\n\n" +
            "ARTIFICIAL (man-made) magnets — made in labs/factories. Shapes: bar, U-shaped, horseshoe, cylindrical, disc, ring. Made from iron, nickel, cobalt, steel.",
          bodyAm:
            "ተፈጥሯዊ — በተፈጥሮ የሚገኙ። ምሳሌ፡ ሎድስቶን።\nሰው ሠራሽ — በላብራቶሪ/ፋብሪካ የሚሠሩ። ቅርጾች፡ ባር፣ በU ቅርጽ፣ ሆርስሹ፣ ሲሊንደራዊ፣ ዲስክ፣ ቀለበት።",
        },
        {
          id: "n7-2",
          title: "Magnetic materials vs non-magnetic",
          titleAm: "መግነጢሳዊ እና መግነጢሳዊ ያልሆኑ ቁሶች",
          body:
            "MAGNETIC materials — attracted by a magnet: iron, cobalt, nickel, steel.\n\n" +
            "NON-MAGNETIC materials — NOT attracted by a magnet: copper, aluminum, wood, plastic, glass.",
          bodyAm:
            "መግነጢሳዊ — በማግኔት ይሳባሉ፡ ብረት፣ ኮባልት፣ ኒኬል።\nመግነጢሳዊ ያልሆኑ — አይሳቡም፡ መዳብ፣ አሉሚኒየም፣ እንጨት፣ ፕላስቲክ።",
        },
        {
          id: "n7-3",
          title: "Magnetic field and field lines",
          titleAm: "መግነጢሳዊ መስክ",
          body:
            "MAGNETIC FIELD = the region around a magnet where its influence is felt.\n" +
            "Shown using MAGNETIC FIELD LINES (curves around the magnet).\n\n" +
            "Properties of field lines:\n" +
            "1) Arrow shows direction of field.\n" +
            "2) Field lines do NOT cross each other.\n" +
            "3) Outside the magnet: N → S. Inside: S → N.\n" +
            "4) Where lines are CLOSEST together, the field is STRONGEST.",
          bodyAm:
            "መግነጢሳዊ መስክ = በማግኔቱ ዙሪያ ተጽዕኖው የሚታወቅበት ክልል።\n1) አርሮው አቅጣጫ ያሳያል።\n2) የመስክ መስመሮች አይቋረጡም።\n3) ከማግኔት ውጭ N → S። ውስጥ S → N።\n4) መስመሮቹ በተቀራረቡበት ቦታ መስኩ በጣም ጠንካራ ነው።",
        },
        {
          id: "n7-4",
          title: "Magnetic force — attract or repel",
          titleAm: "የማግኔት ኃይል",
          body:
            "LIKE poles (N–N or S–S) REPEL each other.\n" +
            "UNLIKE poles (N–S) ATTRACT each other.\n\n" +
            "Also: Two poles of a magnet always exist in PAIRS. You cannot have an isolated N or S pole.",
          bodyAm:
            "ተመሳሳይ ዋልታዎች (N–N ወይም S–S) ይገፋፋሉ።\nተቃራኒ ዋልታዎች (N–S) ይሳሳባሉ።\nየማግኔት ዋልታዎች ሁልጊዜ በጥንድ አሉ።",
        },
        {
          id: "n7-5",
          title: "Uses of magnets",
          titleAm: "የማግኔት አጠቃቀሞች",
          body:
            "• Holding objects (refrigerator doors, stickers)\n" +
            "• Separating magnetic from non-magnetic materials\n" +
            "• Compasses\n" +
            "• Storing data in computers (hard drives)\n" +
            "• MRI scanning\n" +
            "• Electric motors and generators\n" +
            "• Speakers, headphones\n" +
            "• Debit/credit cards\n" +
            "• MAGLEV trains (float on magnetic tracks; speed ~500 km/h)\n" +
            "• Lifting heavy metal objects",
          bodyAm:
            "• ነገሮችን መያዝ\n• መግነጢሳዊ እና መግነጢሳዊ ያልሆኑ ቁሶችን መለየት\n• ኮምፓስ\n• በኮምፒውተር ውስጥ መረጃ ማከማቸት\n• MRI\n• ኤሌክትሪክ ሞተሮች\n• ድምፅ ማጉያዎች\n• MAGLEV ባቡሮች (~500 ኪ.ሜ/ሰዓት)",
        },
        {
          id: "n7-6",
          title: "⚠ Remember trap",
          titleAm: "⚠ አትርሳ",
          body:
            "Banchi, exam traps:\n" +
            "• Like poles → REPEL. Unlike poles → ATTRACT.\n" +
            "• Magnetic field lines NEVER cross.\n" +
            "• LODESTONE = first natural magnet discovered.\n" +
            "• Field lines outside the magnet point N → S.",
          bodyAm:
            "ባንቺ፣ የፈተና ወጥመዶች፡\n• ተመሳሳይ → ይገፋፋሉ. ተቃራኒ → ይሳሳባሉ.\n• መስክ መስመሮች አይቋረጡም.\n• ሎድስቶን = የመጀመሪያው ተፈጥሯዊ ማግኔት.",
        },
      ],
    },

    {
      id: "n8",
      title: "8. Exam Strategy — Unit 7",
      titleAm: "የፈተና ስልት — ክፍል 7",
      body:
        "Banchi, five quick checks before answering Unit 7 questions.",
      bodyAm:
        "ባንቺ፣ የክፍል 7 ጥያቄዎችን ከመመለስሽ በፊት አምስት ፈጣን ቼኮች።",
      children: [
        {
          id: "n8-1",
          title: "Check 1 — Reflection, refraction, or dispersion?",
          titleAm: "ቼክ 1 — አንጸባራቂ፣ አንቀሳቃሽ ወይስ መበታተል?",
          body:
            "Bounce back → reflection. Bend → refraction. Split into colors → dispersion.",
          bodyAm:
            "መመለስ → አንጸባራቂ. መታጠፍ → አንቀሳቃሽ. ወደ ቀለሞች መከፋፈል → መበታተል.",
        },
        {
          id: "n8-2",
          title: "Check 2 — Which material?",
          titleAm: "ቼክ 2 — የትኛው ቁስ?",
          body:
            "See through clearly → transparent. See through partly → translucent. Cannot see → opaque.",
          bodyAm:
            "ግልጽ → transparent. ከፊል → translucent. ጨለማ → opaque.",
        },
        {
          id: "n8-3",
          title: "Check 3 — Which state of matter for sound?",
          titleAm: "ቼክ 3 — ድምፅ በየትኛው ሁኔታ?",
          body:
            "Sound fastest in SOLID → medium in LIQUID → slowest in GAS. Cannot travel in vacuum.",
          bodyAm:
            "ድምፅ በጠጣር ፈጣን → ፈሳሽ መካከለኛ → ጋዝ ቀርፋፋ. በባዶ አያልፍም.",
        },
        {
          id: "n8-4",
          title: "Check 4 — Which heat transfer?",
          titleAm: "ቼክ 4 — የትኛው ሙቀት ማስተላለፊያ?",
          body:
            "Solids contact → conduction. Fluid movement → convection. Through vacuum → radiation.",
          bodyAm:
            "ጠጣር ግንኙነት → ኮንዳክሽን. ፈሳሽ እንቅስቃሴ → ኮንቬክሽን. በባዶ → ራዲዬሽን.",
        },
        {
          id: "n8-5",
          title: "Check 5 — Which magnet rule?",
          titleAm: "ቼክ 5 — የትኛው ማግኔት ደንብ?",
          body:
            "Like poles → repel. Unlike poles → attract. Field lines never cross.",
          bodyAm:
            "ተመሳሳይ → ይገፋፋሉ. ተቃራኒ → ይሳሳባሉ. መስክ መስመሮች አይቋረጡም.",
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
      stem: "What is light?",
      options: [
        "A type of matter",
        "A form of energy that enables us to see objects",
        "A type of sound",
        "A form of electricity",
      ],
      answer: "1",
      explanation:
        "Light is a FORM OF ENERGY that enables us to see objects around us.",
    },
    {
      id: "q2",
      type: "mcq",
      difficulty: "easy",
      stem: "The main natural source of light for Earth is:",
      options: ["The Moon", "The Sun", "Stars", "Lightning"],
      answer: "1",
      explanation:
        "The SUN is the main natural source of light for Earth.",
    },
    {
      id: "q3",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is an ARTIFICIAL source of light?",
      options: ["Sun", "Stars", "Lightning", "Electric bulb"],
      answer: "3",
      explanation:
        "An ELECTRIC BULB is an artificial (man-made) light source. Sun, stars, and lightning are natural.",
    },
    {
      id: "q4",
      type: "mcq",
      difficulty: "easy",
      stem: "Is the Moon a source of light?",
      options: [
        "Yes — it produces its own light",
        "No — it only reflects sunlight",
        "Yes — but only at night",
        "No — it is invisible",
      ],
      answer: "1",
      explanation:
        "The Moon does NOT produce its own light. It REFLECTS sunlight.",
    },
    {
      id: "q5",
      type: "mcq",
      difficulty: "easy",
      stem: "The phenomenon where light bounces back from a surface is called:",
      options: ["Refraction", "Reflection", "Dispersion", "Absorption"],
      answer: "1",
      explanation:
        "REFLECTION = light bounces back from a surface.",
    },
    {
      id: "q6",
      type: "mcq",
      difficulty: "easy",
      stem: "The bending of light as it passes from one medium to another is called:",
      options: ["Reflection", "Refraction", "Dispersion", "Scattering"],
      answer: "1",
      explanation:
        "REFRACTION = bending of light as it moves from one medium to another.",
    },
    {
      id: "q7",
      type: "mcq",
      difficulty: "easy",
      stem: "The splitting of white light into its component colors is called:",
      options: ["Reflection", "Refraction", "Dispersion", "Absorption"],
      answer: "2",
      explanation:
        "DISPERSION = splitting of white light into its 7 component colors, usually by a prism.",
    },
    {
      id: "q8",
      type: "mcq",
      difficulty: "easy",
      stem: "How many colors are in the visible spectrum of white light?",
      options: ["3", "5", "7", "9"],
      answer: "2",
      explanation:
        "There are 7 colors: Red, Orange, Yellow, Green, Blue, Indigo, Violet.",
    },
    {
      id: "q9",
      type: "mcq",
      difficulty: "easy",
      stem: "Which color of light bends the LEAST when passing through a prism?",
      options: ["Violet", "Blue", "Red", "Green"],
      answer: "2",
      explanation:
        "RED bends the LEAST. VIOLET bends the MOST.",
    },
    {
      id: "q10",
      type: "mcq",
      difficulty: "easy",
      stem: "Which color of light bends the MOST when passing through a prism?",
      options: ["Red", "Orange", "Green", "Violet"],
      answer: "3",
      explanation:
        "VIOLET bends the MOST of all visible colors.",
    },
    {
      id: "q11",
      type: "mcq",
      difficulty: "easy",
      stem: "A rainbow is caused by:",
      options: [
        "Only reflection",
        "Only refraction",
        "Reflection, refraction, and dispersion of light in water droplets",
        "Only dispersion",
      ],
      answer: "2",
      explanation:
        "A rainbow involves ALL three: reflection, refraction, and dispersion of light in water droplets.",
    },
    {
      id: "q12",
      type: "mcq",
      difficulty: "easy",
      stem: "What is needed for vision?",
      options: [
        "Only light",
        "Only the eye",
        "Both light and the eye",
        "Neither",
      ],
      answer: "2",
      explanation:
        "Both LIGHT and the EYE are needed for vision.",
    },
    {
      id: "q13",
      type: "mcq",
      difficulty: "easy",
      stem: "The image on the retina of the eye is:",
      options: ["Upright", "Inverted", "Sideways", "Invisible"],
      answer: "1",
      explanation:
        "The image on the retina is INVERTED. The brain corrects it so we see objects upright.",
    },
    {
      id: "q14",
      type: "mcq",
      difficulty: "easy",
      stem: "Materials that allow light to pass through COMPLETELY are called:",
      options: ["Opaque", "Translucent", "Transparent", "Reflective"],
      answer: "2",
      explanation:
        "TRANSPARENT materials allow light to pass completely. Examples: glass, clear water, air.",
    },
    {
      id: "q15",
      type: "mcq",
      difficulty: "easy",
      stem: "Materials that allow light to pass through PARTIALLY are called:",
      options: ["Opaque", "Translucent", "Transparent", "Reflective"],
      answer: "1",
      explanation:
        "TRANSLUCENT materials allow light to pass partially. Examples: oiled paper, waxed paper, frosted glass.",
    },
    {
      id: "q16",
      type: "mcq",
      difficulty: "easy",
      stem: "Materials that do NOT allow light to pass through are called:",
      options: ["Opaque", "Translucent", "Transparent", "Clear"],
      answer: "0",
      explanation:
        "OPAQUE materials block light completely. Examples: metal, wood, wall.",
    },
    {
      id: "q17",
      type: "mcq",
      difficulty: "easy",
      stem: "The image formed by a plane mirror is:",
      options: [
        "Real and inverted",
        "Virtual and erect",
        "Virtual and inverted",
        "Real and erect",
      ],
      answer: "1",
      explanation:
        "A plane mirror forms a VIRTUAL and ERECT image.",
    },
    {
      id: "q18",
      type: "mcq",
      difficulty: "easy",
      stem: "The image formed by a plane mirror is:",
      options: [
        "Larger than the object",
        "Smaller than the object",
        "The same size as the object",
        "Impossible to see",
      ],
      answer: "2",
      explanation:
        "The image in a plane mirror is the SAME SIZE as the object.",
    },
    {
      id: "q19",
      type: "mcq",
      difficulty: "easy",
      stem: "The left-right reversal of an image in a plane mirror is called:",
      options: ["Reflection", "Refraction", "Lateral inversion", "Dispersion"],
      answer: "2",
      explanation:
        "LATERAL INVERSION: the right side appears left and the left side appears right.",
    },
    {
      id: "q20",
      type: "mcq",
      difficulty: "easy",
      stem: "Sound is produced by:",
      options: [
        "Static objects",
        "Vibrating objects",
        "Light",
        "Heat",
      ],
      answer: "1",
      explanation:
        "Sound is produced by VIBRATING objects — a back-and-forth motion.",
    },
    {
      id: "q21",
      type: "mcq",
      difficulty: "easy",
      stem: "Sound CANNOT travel through:",
      options: ["Solids", "Liquids", "Gases", "Vacuum"],
      answer: "3",
      explanation:
        "Sound needs a MEDIUM (material). It CANNOT travel through vacuum (empty space).",
    },
    {
      id: "q22",
      type: "mcq",
      difficulty: "easy",
      stem: "Sound travels FASTEST in:",
      options: ["Solids", "Liquids", "Gases", "Vacuum"],
      answer: "0",
      explanation:
        "Sound travels FASTEST in SOLIDS (molecules closest together), then liquids, then gases.",
    },
    {
      id: "q23",
      type: "mcq",
      difficulty: "easy",
      stem: "Sound travels SLOWEST in:",
      options: ["Solids", "Liquids", "Gases", "It's the same everywhere"],
      answer: "2",
      explanation:
        "Sound travels SLOWEST in GASES (molecules farthest apart).",
    },
    {
      id: "q24",
      type: "mcq",
      difficulty: "easy",
      stem: "A repeated sound caused by reflection from a surface is called:",
      options: ["Echo", "Music", "Noise", "Pitch"],
      answer: "0",
      explanation:
        "ECHO = a repeated sound caused by REFLECTION of sound waves from a surface.",
    },
    {
      id: "q25",
      type: "mcq",
      difficulty: "easy",
      stem: "Heat is a form of:",
      options: ["Light", "Sound", "Energy", "Matter"],
      answer: "2",
      explanation:
        "Heat is a form of ENERGY that flows from a higher to a lower temperature.",
    },

    // ---------- MEDIUM MCQ (Q26–Q50) ----------
    {
      id: "q26",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes regular reflection?",
      options: [
        "Reflection from a rough surface",
        "Reflection from a smooth, shiny surface forming a clear image",
        "Reflection from a wall",
        "No reflection at all",
      ],
      answer: "1",
      explanation:
        "REGULAR (specular) reflection happens from smooth, shiny surfaces (mirrors) and produces a CLEAR image.",
    },
    {
      id: "q27",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes diffused reflection?",
      options: [
        "Reflection from a smooth surface",
        "Reflection from a rough surface forming a blurry image",
        "Reflection from a mirror",
        "Total absorption",
      ],
      answer: "1",
      explanation:
        "DIFFUSED reflection happens from rough, unpolished surfaces and produces a blurry or no image.",
    },
    {
      id: "q28",
      type: "mcq",
      difficulty: "medium",
      stem: "A pencil in a glass of water appears broken. This is because of:",
      options: ["Reflection", "Refraction", "Dispersion", "Absorption"],
      answer: "1",
      explanation:
        "Light bends (refracts) when going from air to water, making the pencil look broken.",
    },
    {
      id: "q29",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the difference between real and virtual images?",
      options: [
        "Real images can be placed on a screen; virtual cannot",
        "Virtual images can be placed on a screen; real cannot",
        "Both can be placed on a screen",
        "Neither can be placed on a screen",
      ],
      answer: "0",
      explanation:
        "REAL images can be placed on a screen (always inverted). VIRTUAL images cannot be placed on a screen (always erect).",
    },
    {
      id: "q30",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes a stethoscope?",
      options: [
        "Based on light reflection",
        "Based on sound reflection",
        "Based on heat conduction",
        "Based on magnetism",
      ],
      answer: "1",
      explanation:
        "A STETHOSCOPE works by the REFLECTION of sound. The heartbeat sound reaches the doctor's ears through multiple reflections.",
    },
    {
      id: "q31",
      type: "mcq",
      difficulty: "medium",
      stem: "Why are hard, flat surfaces good reflectors of sound?",
      options: [
        "They absorb sound",
        "They reflect sound well, producing echo",
        "They transmit sound",
        "They destroy sound",
      ],
      answer: "1",
      explanation:
        "Hard, flat surfaces (walls, mountains, buildings) REFLECT sound well, producing echoes.",
    },
    {
      id: "q32",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the measurement of sound pollution?",
      options: [
        "In meters",
        "In kilograms",
        "In decibels (dB)",
        "In liters",
      ],
      answer: "2",
      explanation:
        "Sound pollution is measured in DECIBELS (dB).",
    },
    {
      id: "q33",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the approximate decibel level of normal conversation?",
      options: ["30 dB", "60 dB", "100 dB", "140 dB"],
      answer: "1",
      explanation:
        "Normal conversation is about 60 dB. A whisper is about 30 dB.",
    },
    {
      id: "q34",
      type: "mcq",
      difficulty: "medium",
      stem: "At what decibel level does sound become immediately painful and cause hearing damage?",
      options: ["60 dB", "80 dB", "100 dB", "120 dB"],
      answer: "3",
      explanation:
        "Loud noise above 120 dB can cause IMMEDIATE harm to your ears.",
    },
    {
      id: "q35",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT a cause of sound pollution?",
      options: [
        "Vehicles",
        "Loudspeakers",
        "Explosions",
        "Planting trees",
      ],
      answer: "3",
      explanation:
        "Planting trees HELPS reduce sound pollution. Vehicles, loudspeakers, and explosions cause it.",
    },
    {
      id: "q36",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is NOT an effect of sound pollution?",
      options: [
        "Irritation and stress",
        "Sleeping problems",
        "Hearing loss",
        "Improved concentration",
      ],
      answer: "3",
      explanation:
        "Sound pollution CAUSES lack of concentration, not improved concentration. It also causes stress, sleeping problems, and hearing loss.",
    },
    {
      id: "q37",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes CONDUCTION of heat?",
      options: [
        "Transfer of heat through direct contact of particles",
        "Transfer of heat by fluid movement",
        "Transfer of heat through empty space",
        "Transfer of heat by radiation",
      ],
      answer: "0",
      explanation:
        "CONDUCTION = transfer of heat by DIRECT CONTACT — particles collide and pass energy. Happens mainly in solids.",
    },
    {
      id: "q38",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes CONVECTION of heat?",
      options: [
        "Transfer through direct contact",
        "Transfer by the movement of a fluid (liquid or gas)",
        "Transfer through vacuum",
        "Transfer by radiation",
      ],
      answer: "1",
      explanation:
        "CONVECTION = transfer of heat by the MOVEMENT of a fluid (liquid or gas). Warm fluid rises; cold fluid sinks.",
    },
    {
      id: "q39",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes RADIATION of heat?",
      options: [
        "Transfer through direct contact",
        "Transfer by fluid movement",
        "Transfer without any material medium",
        "Transfer only through solids",
      ],
      answer: "2",
      explanation:
        "RADIATION = transfer of heat WITHOUT any material medium. It works through vacuum — e.g., heat from the Sun reaching Earth.",
    },
    {
      id: "q40",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these is a CONDUCTOR of heat?",
      options: ["Wood", "Plastic", "Copper", "Rubber"],
      answer: "2",
      explanation:
        "COPPER is a metal — a good conductor of heat. Wood, plastic, and rubber are insulators.",
    },
    {
      id: "q41",
      type: "mcq",
      difficulty: "medium",
      stem: "Which of these is an INSULATOR of heat?",
      options: ["Aluminum", "Iron", "Wood", "Copper"],
      answer: "2",
      explanation:
        "WOOD is an insulator (poor conductor of heat). Aluminum, iron, and copper are metals — good conductors.",
    },
    {
      id: "q42",
      type: "mcq",
      difficulty: "medium",
      stem: "Why do cooking pans have wooden or plastic handles?",
      options: [
        "Because wood and plastic are conductors",
        "Because wood and plastic are insulators, protecting hands from heat",
        "Because they look nice",
        "Because they are cheap",
      ],
      answer: "1",
      explanation:
        "Wood and plastic are INSULATORS — they prevent heat from reaching your hands.",
    },
    {
      id: "q43",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes a simple electric circuit?",
      options: [
        "A closed path through which electric current flows",
        "An open path",
        "A single wire",
        "A kind of magnet",
      ],
      answer: "0",
      explanation:
        "A CIRCUIT is a COMPLETE (closed) path through which electric current flows.",
    },
    {
      id: "q44",
      type: "mcq",
      difficulty: "medium",
      stem: "A component of a circuit that opens or closes the path is called:",
      options: ["Bulb", "Wire", "Switch", "Battery"],
      answer: "2",
      explanation:
        "A SWITCH opens or closes the circuit — controlling the flow of current.",
    },
    {
      id: "q45",
      type: "mcq",
      difficulty: "medium",
      stem: "What is the difference between a cell and a battery?",
      options: [
        "They are the same thing",
        "A battery is one cell",
        "A battery is two or more cells combined",
        "A cell is two or more batteries",
      ],
      answer: "2",
      explanation:
        "A CELL is a single source of electricity. A BATTERY is a combination of two or more cells.",
    },
    {
      id: "q46",
      type: "mcq",
      difficulty: "medium",
      stem: "For current to flow in a circuit, the circuit must be:",
      options: ["Open", "Closed", "Broken", "Ground"],
      answer: "1",
      explanation:
        "The circuit must be CLOSED (complete) for current to flow. If there is a gap, current does not flow.",
    },
    {
      id: "q47",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes a magnetic material?",
      options: [
        "Iron, cobalt, nickel",
        "Copper, aluminum, wood",
        "Plastic, rubber, glass",
        "Water, oil, air",
      ],
      answer: "0",
      explanation:
        "MAGNETIC materials (attracted by magnets): iron, cobalt, nickel (also steel).",
    },
    {
      id: "q48",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the interaction between poles of two magnets?",
      options: [
        "Like poles attract; unlike poles repel",
        "Like poles repel; unlike poles attract",
        "All poles attract",
        "All poles repel",
      ],
      answer: "1",
      explanation:
        "LIKE poles (N-N or S-S) REPEL. UNLIKE poles (N-S) ATTRACT.",
    },
    {
      id: "q49",
      type: "mcq",
      difficulty: "medium",
      stem: "The first natural magnet discovered was:",
      options: ["Iron", "Steel", "Lodestone", "Cobalt"],
      answer: "2",
      explanation:
        "LODESTONE was the first natural magnet discovered.",
    },
    {
      id: "q50",
      type: "mcq",
      difficulty: "medium",
      stem: "Magnetic field lines:",
      options: [
        "Can cross each other",
        "Do not cross each other",
        "Are straight lines only",
        "Are invisible",
      ],
      answer: "1",
      explanation:
        "Magnetic field lines do NOT cross each other. Outside the magnet, they go from N to S; inside, from S to N.",
    },

    // ---------- HARD MCQ (Q51–Q56) ----------
    {
      id: "q51",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why light bends when entering water from air?",
      options: [
        "Because light speeds up in water",
        "Because the speed of light changes when moving between different media",
        "Because light reflects off water",
        "Because water is transparent",
      ],
      answer: "1",
      explanation:
        "Light refracts (bends) because its SPEED changes when it moves from one medium to another (air → water).",
    },
    {
      id: "q52",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why a red filter appears red?",
      options: [
        "It absorbs red light",
        "It allows only red light to pass through and absorbs other colors",
        "It reflects all colors",
        "It produces red light",
      ],
      answer: "1",
      explanation:
        "A red filter allows only RED light to pass through and absorbs the other colors. That's why we see red.",
    },
    {
      id: "q53",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes the difference between conduction and convection?",
      options: [
        "Conduction = fluid movement; convection = contact",
        "Conduction = direct contact of particles; convection = fluid movement",
        "Both are the same",
        "Both require vacuum",
      ],
      answer: "1",
      explanation:
        "CONDUCTION = transfer by direct contact of particles (mostly in solids). CONVECTION = transfer by the MOVEMENT of a fluid (liquid or gas).",
    },
    {
      id: "q54",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains how the Sun's heat reaches Earth?",
      options: [
        "By conduction",
        "By convection",
        "By radiation (through space, which is a vacuum)",
        "By magnetism",
      ],
      answer: "2",
      explanation:
        "The Sun's heat reaches Earth by RADIATION — it travels through space (a vacuum) without needing a medium.",
    },
    {
      id: "q55",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains how Maglev trains work?",
      options: [
        "Using wheels and rails",
        "Using magnets under the cars to float above magnetic tracks",
        "Using water pressure",
        "Using air pressure only",
      ],
      answer: "1",
      explanation:
        "MAGLEV trains use MAGNETS under the cars to FLOAT above magnetic tracks. They can reach speeds of about 500 km/h.",
    },
    {
      id: "q56",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why sound travels faster in solids than in gases?",
      options: [
        "Solids have molecules closer together, so vibrations pass faster",
        "Solids have bigger molecules",
        "Solids are hotter",
        "Solids have no molecules",
      ],
      answer: "0",
      explanation:
        "In SOLIDS, molecules are CLOSER together, so vibrations (energy) can be passed faster. In gases, molecules are farther apart, so sound travels slower.",
    },

    // ---------- SHORT ANSWER (Q57–Q60) ----------
    {
      id: "q57",
      type: "short",
      difficulty: "easy",
      stem: "Define reflection, refraction, and dispersion of light.",
      answer:
        "Reflection = light bounces back from a surface (e.g., mirror). Refraction = light bends when it travels from one medium to another (e.g., pencil in water). Dispersion = splitting of white light into its component colors (e.g., prism producing a rainbow).",
      explanation:
        "Banchi, memorize these three properties with examples.",
    },
    {
      id: "q58",
      type: "short",
      difficulty: "medium",
      stem: "Describe the properties of the image formed by a plane mirror.",
      answer:
        "1) Virtual and erect (upright). 2) Same size as the object. 3) Laterally inverted (right appears left, left appears right). 4) As far behind the mirror as the object is in front of it.",
      explanation:
        "Banchi, memorize all four properties — exams love this question.",
    },
    {
      id: "q59",
      type: "short",
      difficulty: "medium",
      stem: "Explain the difference between conductors and insulators of heat, with examples.",
      answer:
        "Conductors allow heat to pass through easily. Examples: metals (copper, aluminum, iron). Insulators do NOT allow heat to pass easily. Examples: wood, plastic, rubber, air, wool.",
      explanation:
        "Banchi, use the example of a cooking pan with a metal body (conductor) and wooden handle (insulator).",
    },
    {
      id: "q60",
      type: "short",
      difficulty: "hard",
      stem: "Describe the parts of a simple electric circuit and explain what happens when the circuit is open vs closed.",
      answer:
        "Parts of a circuit: (1) cell or battery — source of electricity; (2) bulb — glows when current passes; (3) wire (conductor) — path for current; (4) switch — opens or closes the circuit; (5) resistor — any device producing light or heat. When the circuit is CLOSED (complete), current flows and the bulb lights up. When OPEN (gap), current does not flow and the bulb does not light up.",
      explanation:
        "Banchi, remember: current needs a CLOSED path to flow.",
    },
        // ============================================================
    // BATCH 2 — Q61 to Q120 (FINAL for Unit 7 and for the book!)
    // ============================================================

    // ---------- EASY MCQ (Q61–Q85) ----------
    {
      id: "q61",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is the correct order of colors in the spectrum from first to last?",
      options: [
        "Red, Orange, Yellow, Green, Blue, Indigo, Violet",
        "Violet, Indigo, Blue, Green, Yellow, Orange, Red",
        "Red, Yellow, Green, Blue, Orange, Violet, Indigo",
        "Blue, Red, Green, Yellow, Violet, Indigo, Orange",
      ],
      answer: "0",
      explanation:
        "The correct order is RED, ORANGE, YELLOW, GREEN, BLUE, INDIGO, VIOLET. Memory trick: ROYGBIV.",
    },
    {
      id: "q62",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one is a natural source of light?",
      options: ["Candle", "Electric bulb", "Firefly", "Torch"],
      answer: "2",
      explanation:
        "A FIREFLY is a natural source of light (a living organism that produces light). The others are artificial.",
    },
    {
      id: "q63",
      type: "mcq",
      difficulty: "easy",
      stem: "Which one of these is NOT a source of light?",
      options: ["Sun", "Candle", "Mirror", "Firefly"],
      answer: "2",
      explanation:
        "A MIRROR is NOT a source — it only REFLECTS light. Sources emit their own light.",
    },
    {
      id: "q64",
      type: "mcq",
      difficulty: "easy",
      stem: "Which color of an object results from it reflecting ALL colors of light?",
      options: ["Black", "White", "Red", "Green"],
      answer: "1",
      explanation:
        "An object appears WHITE if it reflects ALL colors of light. It appears BLACK if it absorbs all colors.",
    },
    {
      id: "q65",
      type: "mcq",
      difficulty: "easy",
      stem: "Which color of an object results from it absorbing ALL colors of light?",
      options: ["Black", "White", "Red", "Blue"],
      answer: "0",
      explanation:
        "An object appears BLACK if it absorbs all colors of light.",
    },
    {
      id: "q66",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a TRANSPARENT material?",
      options: ["Wood", "Metal sheet", "Clear window glass", "Oiled paper"],
      answer: "2",
      explanation:
        "CLEAR WINDOW GLASS is transparent — you can see through it clearly.",
    },
    {
      id: "q67",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a TRANSLUCENT material?",
      options: ["Clean water", "Oiled paper", "Iron sheet", "Air"],
      answer: "1",
      explanation:
        "OILED PAPER is translucent — light passes through partially.",
    },
    {
      id: "q68",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is an OPAQUE material?",
      options: ["Glass", "Clean water", "Wooden sheet", "Air"],
      answer: "2",
      explanation:
        "WOODEN SHEET is opaque — light does not pass through.",
    },
    {
      id: "q69",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is NOT a use of echo?",
      options: ["Hearing aid", "Stethoscope", "Sound boards in auditoriums", "Making sound"],
      answer: "3",
      explanation:
        "Echo has practical uses in hearing aids, stethoscopes, and sound boards. It is not used for 'making sound'.",
    },
    {
      id: "q70",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes a hearing aid?",
      options: [
        "Based on reflection of sound waves",
        "Based on refraction of light",
        "Based on magnetism",
        "Based on heat",
      ],
      answer: "0",
      explanation:
        "A hearing aid uses REFLECTION of sound waves to direct sound into a narrower area leading to the ear.",
    },
    {
      id: "q71",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the approximate decibel level of a whisper?",
      options: ["10 dB", "30 dB", "60 dB", "90 dB"],
      answer: "1",
      explanation:
        "A whisper is about 30 dB.",
    },
    {
      id: "q72",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the approximate decibel level of a gun shot or jet engine?",
      options: ["60 dB", "100 dB", "120 dB", "140 dB"],
      answer: "3",
      explanation:
        "A gun shot or jet engine is about 140 dB — extremely dangerous to hearing.",
    },
    {
      id: "q73",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a way to REDUCE sound pollution?",
      options: [
        "Increasing loudspeaker volume",
        "Using silencers on vehicles",
        "Blowing horns more often",
        "Living near airports",
      ],
      answer: "1",
      explanation:
        "Using SILENCERS on vehicles reduces sound pollution. The other options increase it.",
    },
    {
      id: "q74",
      type: "mcq",
      difficulty: "easy",
      stem: "Sound is transmitted through a medium. What is a 'medium'?",
      options: [
        "A type of sound",
        "A material or substance through which sound passes",
        "A musical note",
        "A type of light",
      ],
      answer: "1",
      explanation:
        "A MEDIUM is the material or substance through which sound is transmitted (solid, liquid, or gas).",
    },
    {
      id: "q75",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes how the eardrum works?",
      options: [
        "It produces sound",
        "It senses the vibrations produced by vibrating objects",
        "It sends light to the brain",
        "It detects heat",
      ],
      answer: "1",
      explanation:
        "The EARDRUM senses the vibrations produced by a vibrating object and sends them to the brain.",
    },
    {
      id: "q76",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a good CONDUCTOR of heat?",
      options: ["Wood", "Plastic", "Aluminum", "Rubber"],
      answer: "2",
      explanation:
        "ALUMINUM is a metal — a good CONDUCTOR of heat.",
    },
    {
      id: "q77",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a good INSULATOR of heat?",
      options: ["Copper", "Iron", "Aluminum", "Air"],
      answer: "3",
      explanation:
        "AIR is a good INSULATOR. It doesn't conduct heat well — that's why wool, foam, and double-glazed windows work.",
    },
    {
      id: "q78",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes heat transfer from hot soup to a metal spoon?",
      options: ["Conduction", "Convection", "Radiation", "Magnetism"],
      answer: "0",
      explanation:
        "The metal spoon in hot soup gets warm by CONDUCTION — heat passes through direct contact of particles.",
    },
    {
      id: "q79",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes how water boils (heating in a pot)?",
      options: [
        "Mainly by conduction",
        "Mainly by convection",
        "Mainly by radiation",
        "Mainly by magnetism",
      ],
      answer: "1",
      explanation:
        "When heating water, heat is transferred mainly by CONVECTION — hot water rises, cool water sinks, creating circulation.",
    },
    {
      id: "q80",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes how heat from a fire reaches you when you sit beside it?",
      options: ["Conduction", "Convection only", "Radiation", "Magnetism"],
      answer: "2",
      explanation:
        "Heat from a fire reaches you mainly by RADIATION — it travels through the air without needing a solid or fluid medium.",
    },
    {
      id: "q81",
      type: "mcq",
      difficulty: "easy",
      stem: "What is the purpose of a switch in a circuit?",
      options: [
        "To make light",
        "To provide electricity",
        "To open or close the circuit",
        "To store electricity",
      ],
      answer: "2",
      explanation:
        "A SWITCH opens or closes the circuit — it controls whether current flows.",
    },
    {
      id: "q82",
      type: "mcq",
      difficulty: "easy",
      stem: "Which is NOT a necessary component of a simple circuit?",
      options: ["Cell or battery", "Wire", "Bulb", "Magnet"],
      answer: "3",
      explanation:
        "A MAGNET is not needed for a simple circuit. A circuit needs a source (cell), wire, bulb, and switch.",
    },
    {
      id: "q83",
      type: "mcq",
      difficulty: "easy",
      stem: "Which correctly describes the poles of a magnet?",
      options: [
        "North and South",
        "East and West",
        "Up and Down",
        "Positive and Negative",
      ],
      answer: "0",
      explanation:
        "Magnets have NORTH and SOUTH poles.",
    },
    {
      id: "q84",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is a MAGNETIC material?",
      options: ["Copper", "Aluminum", "Iron", "Wood"],
      answer: "2",
      explanation:
        "IRON is a magnetic material — attracted by magnets. Copper, aluminum, and wood are non-magnetic.",
    },
    {
      id: "q85",
      type: "mcq",
      difficulty: "easy",
      stem: "Which of these is NOT a magnetic material?",
      options: ["Iron", "Nickel", "Cobalt", "Copper"],
      answer: "3",
      explanation:
        "COPPER is NOT magnetic. Iron, nickel, and cobalt are magnetic.",
    },

    // ---------- MEDIUM MCQ (Q86–Q110) ----------
    {
      id: "q86",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why a rainbow appears?",
      options: [
        "Only reflection",
        "Only refraction",
        "Reflection, refraction, and dispersion in water droplets",
        "Only dispersion",
      ],
      answer: "2",
      explanation:
        "A rainbow appears because of reflection, refraction, and dispersion of light in water droplets.",
    },
    {
      id: "q87",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes why the sky appears blue?",
      options: [
        "Because of reflection",
        "Because blue light scatters more than other colors in the atmosphere",
        "Because the Sun is blue",
        "Because of dispersion",
      ],
      answer: "1",
      explanation:
        "Blue light scatters more than other colors in the atmosphere, causing the sky to appear blue.",
    },
    {
      id: "q88",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains how mirrors help us see around corners?",
      options: [
        "Mirrors produce light",
        "Mirrors reflect light, allowing us to see objects at angles",
        "Mirrors absorb light",
        "Mirrors refract light",
      ],
      answer: "1",
      explanation:
        "Mirrors REFLECT light. By arranging mirrors at angles, we can see objects not directly in our line of sight.",
    },
    {
      id: "q89",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes why soft materials absorb sound?",
      options: [
        "Soft materials reflect sound well",
        "Soft materials absorb sound waves, reducing echo",
        "Soft materials produce sound",
        "Soft materials refract sound",
      ],
      answer: "1",
      explanation:
        "Soft materials (clothes, paper, curtains, carpet) ABSORB sound waves, reducing echo. Hard materials reflect sound.",
    },
    {
      id: "q90",
      type: "mcq",
      difficulty: "medium",
      stem: "Which is a reason why sound pollution is a serious problem?",
      options: [
        "It makes people happy",
        "It causes hearing damage, stress, and health problems",
        "It helps people sleep",
        "It has no effect",
      ],
      answer: "1",
      explanation:
        "Sound pollution causes hearing damage, stress, sleeping problems, and even heart attacks.",
    },
    {
      id: "q91",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains how a stethoscope works?",
      options: [
        "By reflecting the sound of the patient's heartbeat to the doctor's ears",
        "By producing light",
        "By generating electricity",
        "By absorbing sound",
      ],
      answer: "0",
      explanation:
        "A stethoscope works through multiple REFLECTIONS of the sound of the heartbeat, delivering it clearly to the doctor's ears.",
    },
    {
      id: "q92",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains how the metal body of a cooking pan works?",
      options: [
        "As an insulator to keep food cold",
        "As a conductor to heat food evenly",
        "As a reflector",
        "As a magnet",
      ],
      answer: "1",
      explanation:
        "The metal body is a CONDUCTOR — it transfers heat from the stove to the food evenly.",
    },
    {
      id: "q93",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why we wear woolen clothes like 'Gabi' in cold weather?",
      options: [
        "Wool is a conductor, so it cools us",
        "Wool is an insulator, trapping heat and keeping us warm",
        "Wool produces heat",
        "Wool reflects the Sun",
      ],
      answer: "1",
      explanation:
        "Wool is an INSULATOR — it traps air and prevents body heat from escaping.",
    },
    {
      id: "q94",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why we double-glaze windows?",
      options: [
        "To make them heavier",
        "To trap air between glass layers, reducing heat loss",
        "To make them brighter",
        "To make them magnetic",
      ],
      answer: "1",
      explanation:
        "Double-glazed windows trap a layer of AIR (an insulator) between two panes of glass, reducing heat loss from the building.",
    },
    {
      id: "q95",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the difference between heat and temperature?",
      options: [
        "They are the same",
        "Heat is energy in motion; temperature is the measure of how hot or cold something is",
        "Heat is temperature",
        "Temperature is always higher than heat",
      ],
      answer: "1",
      explanation:
        "HEAT = energy that flows from hot to cold. TEMPERATURE = measure of the hotness or coldness of an object.",
    },
    {
      id: "q96",
      type: "mcq",
      difficulty: "medium",
      stem: "Why is it safe to touch a wooden spoon used to stir hot soup, but not the metal spoon?",
      options: [
        "Wood is a better conductor than metal",
        "Wood is an insulator; metal is a conductor",
        "Wood produces heat; metal does not",
        "Wood is magnetic; metal is not",
      ],
      answer: "1",
      explanation:
        "Wood is an INSULATOR — heat does not travel through it easily, so the handle stays cool. Metal is a CONDUCTOR — the handle becomes hot quickly.",
    },
    {
      id: "q97",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how a bulb lights up in a circuit?",
      options: [
        "When current flows through it in a closed circuit",
        "When the circuit is open",
        "When the switch is off",
        "When there is no battery",
      ],
      answer: "0",
      explanation:
        "A bulb lights up when CURRENT flows through it in a CLOSED circuit. If the switch is off (open), no current flows and the bulb stays dark.",
    },
    {
      id: "q98",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the role of a wire in a circuit?",
      options: [
        "Produces light",
        "Provides the path through which current flows",
        "Provides the current",
        "Stops current",
      ],
      answer: "1",
      explanation:
        "A WIRE (conductor) provides the PATH through which current flows from the cell to the bulb and back.",
    },
    {
      id: "q99",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why a wire used in circuits is usually made of COPPER?",
      options: [
        "Because copper is magnetic",
        "Because copper is a good conductor of electricity",
        "Because copper is opaque",
        "Because copper is transparent",
      ],
      answer: "1",
      explanation:
        "Copper is a GOOD CONDUCTOR of electricity — so it is used as the wire in circuits.",
    },
    {
      id: "q100",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes why a freely suspended magnet points North-South?",
      options: [
        "Because of gravity",
        "Because of the Earth's magnetic field",
        "Because of light",
        "Because of sound",
      ],
      answer: "1",
      explanation:
        "A freely suspended magnet aligns itself along the Earth's MAGNETIC FIELD — pointing to the geographic North and South.",
    },
    {
      id: "q101",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the use of magnets in hard drives?",
      options: [
        "To store data magnetically",
        "To produce light",
        "To generate sound only",
        "To conduct heat",
      ],
      answer: "0",
      explanation:
        "Magnets in computer HARD DRIVES store data MAGNETICALLY (as patterns of magnetization).",
    },
    {
      id: "q102",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how MRI works?",
      options: [
        "Using sound waves",
        "Using magnetic fields and radio waves to look inside the body",
        "Using X-rays",
        "Using heat",
      ],
      answer: "1",
      explanation:
        "MRI (Magnetic Resonance Imaging) uses strong magnetic fields and radio waves to produce detailed images of the inside of the body.",
    },
    {
      id: "q103",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why trees are planted along roads to reduce sound pollution?",
      options: [
        "Trees produce sound",
        "Trees absorb and block sound waves, reducing noise reaching nearby homes",
        "Trees produce magnets",
        "Trees reflect light",
      ],
      answer: "1",
      explanation:
        "Trees ABSORB and BLOCK sound waves, reducing the noise that reaches people living near the road.",
    },
    {
      id: "q104",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the effect of too much light pollution at night?",
      options: [
        "It helps people sleep",
        "It disturbs sleep, affects wildlife, and blocks starlight",
        "It improves vision",
        "It produces oxygen",
      ],
      answer: "1",
      explanation:
        "Light pollution disturbs human sleep, disrupts wildlife (like bird migration and turtle nesting), and blocks views of stars.",
    },
    {
      id: "q105",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how a compound microscope uses lenses?",
      options: [
        "Only reflection",
        "Refraction of light through multiple lenses to magnify objects",
        "Only dispersion",
        "Only absorption",
      ],
      answer: "1",
      explanation:
        "Compound microscopes use REFRACTION of light through multiple lenses to magnify small objects.",
    },
    {
      id: "q106",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes why we see lightning before hearing thunder?",
      options: [
        "Light travels faster than sound",
        "Sound travels faster than light",
        "They happen at different times",
        "Both travel at the same speed",
      ],
      answer: "0",
      explanation:
        "LIGHT travels much FASTER than sound, so we see lightning before we hear the thunder.",
    },
    {
      id: "q107",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes how a periscope works?",
      options: [
        "Uses refraction in lenses",
        "Uses reflection in two mirrors to see objects over or around obstacles",
        "Uses magnets",
        "Uses sound waves",
      ],
      answer: "1",
      explanation:
        "A periscope uses TWO MIRRORS arranged to reflect light, allowing you to see objects above or around obstacles (like from a submarine).",
    },
    {
      id: "q108",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why the image in a plane mirror appears laterally inverted?",
      options: [
        "Because light is refracted",
        "Because the mirror reflects the front-back axis but not the left-right or top-bottom",
        "Because of dispersion",
        "Because of magnetism",
      ],
      answer: "1",
      explanation:
        "A plane mirror reflects the FRONT-BACK axis. So when you raise your right hand, the image appears to raise its LEFT hand.",
    },
    {
      id: "q109",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly describes the difference between translucent and transparent materials?",
      options: [
        "Translucent allows ALL light through; transparent allows some",
        "Transparent allows ALL light through clearly; translucent allows some through, but the image is unclear",
        "They are the same",
        "Both block light",
      ],
      answer: "1",
      explanation:
        "TRANSPARENT = light passes completely (clear vision). TRANSLUCENT = light passes partially (blurry vision).",
    },
    {
      id: "q110",
      type: "mcq",
      difficulty: "medium",
      stem: "Which correctly explains why we see objects around us?",
      options: [
        "Because our eyes emit light",
        "Because light from a source reflects off the object into our eyes",
        "Because the objects produce light",
        "Because of magnetism",
      ],
      answer: "1",
      explanation:
        "We see objects because light from a source BOUNCES OFF the object and enters our eyes.",
    },

    // ---------- HARD MCQ (Q111–Q116) ----------
    {
      id: "q111",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why a concave mirror is used in a dentist's mirror?",
      options: [
        "It forms an enlarged virtual image of the teeth",
        "It produces light",
        "It absorbs light",
        "It filters colors",
      ],
      answer: "0",
      explanation:
        "A concave mirror can form an ENLARGED virtual image when the object is close — useful for dentists to see teeth clearly.",
    },
    {
      id: "q112",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why light travels in a straight line?",
      options: [
        "Because light is a stream of particles (photons) moving in a straight path in a uniform medium",
        "Because light is pushed by magnets",
        "Because light is pulled by gravity",
        "Because of dispersion",
      ],
      answer: "0",
      explanation:
        "In a UNIFORM medium, light travels in a STRAIGHT LINE because it moves as a stream of photons. It bends only when it enters a different medium (refraction).",
    },
    {
      id: "q113",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why sound is not heard in space (between stars)?",
      options: [
        "Because space is too cold",
        "Because space is a vacuum — there is no medium for sound to travel through",
        "Because there is no light",
        "Because there is no air pressure",
      ],
      answer: "1",
      explanation:
        "Space is a VACUUM — there is no medium. Sound NEEDS a medium (solid, liquid, or gas) to travel. In a vacuum, sound cannot propagate.",
    },
    {
      id: "q114",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes why a metal spoon feels colder than a wooden spoon at the same room temperature?",
      options: [
        "Metal is actually colder",
        "Metal conducts heat away from your hand faster, making it feel colder",
        "Wood is warm",
        "Metal has no heat",
      ],
      answer: "1",
      explanation:
        "Metal CONDUCTS heat away from your hand MUCH faster than wood, so it feels colder — even though both are the same temperature.",
    },
    {
      id: "q115",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly describes why a thermos (vacuum flask) keeps drinks hot or cold?",
      options: [
        "It has a vacuum between two walls, preventing conduction and convection",
        "It has a magnet inside",
        "It uses electricity",
        "It uses sound waves",
      ],
      answer: "0",
      explanation:
        "A thermos has a VACUUM between two walls. This prevents CONDUCTION and CONVECTION. Silvered walls also reduce RADIATION.",
    },
    {
      id: "q116",
      type: "mcq",
      difficulty: "hard",
      stem: "Which correctly explains why the Earth's magnetic field protects us?",
      options: [
        "It deflects harmful charged particles (solar wind) from the Sun",
        "It produces oxygen",
        "It creates gravity",
        "It filters light",
      ],
      answer: "0",
      explanation:
        "Earth's magnetic field DEFLECTS harmful charged particles (solar wind) from the Sun, protecting our atmosphere and life.",
    },

    // ---------- SHORT ANSWER (Q117–Q120) ----------
    {
      id: "q117",
      type: "short",
      difficulty: "easy",
      stem: "Describe three properties of light with one example of each.",
      answer:
        "1) Reflection — light bounces back from a surface (example: mirror). 2) Refraction — light bends when passing between media (example: pencil in water). 3) Dispersion — white light splits into colors (example: prism, rainbow).",
      explanation:
        "Banchi, remember the difference between the three: bounce, bend, split.",
    },
    {
      id: "q118",
      type: "short",
      difficulty: "medium",
      stem: "Explain how sound propagates through different states of matter and why it cannot travel in a vacuum.",
      answer:
        "Sound needs a MEDIUM. It travels fastest in SOLIDS (molecules closest together), medium speed in LIQUIDS, and slowest in GASES (molecules farthest apart). Sound cannot travel in a VACUUM because there are no particles to carry the vibrations.",
      explanation:
        "Banchi, key formula: solid > liquid > gas. No medium → no sound.",
    },
    {
      id: "q119",
      type: "short",
      difficulty: "medium",
      stem: "Compare and contrast the three mechanisms of heat transfer.",
      answer:
        "1) CONDUCTION — transfer by DIRECT CONTACT (particle collisions). Happens mainly in SOLIDS. Example: metal spoon in hot tea. 2) CONVECTION — transfer by MOVEMENT of a fluid (liquid or gas). Warm fluid rises, cold sinks. Example: boiling water. 3) RADIATION — transfer WITHOUT any material medium. Works through VACUUM. Example: heat from the Sun.",
      explanation:
        "Memory trick: Conduction = contact. Convection = flow. Radiation = rays.",
    },
    {
      id: "q120",
      type: "short",
      difficulty: "hard",
      stem: "Describe the parts of a simple electric circuit, how they work together, and give one real-life use.",
      answer:
        "Parts: (1) CELL or BATTERY — provides electrical energy. (2) WIRE (conductor) — path for current. (3) SWITCH — opens or closes the circuit. (4) BULB — lights up when current flows. (5) RESISTOR — produces light or heat. When the circuit is CLOSED, current flows from the cell, through the switch, through the bulb, and back. The bulb lights up. When the switch is OFF (open circuit), current stops and the bulb goes dark. Real-life use: any electrical device — a torch, lamp, or household light.",
      explanation:
        "Banchi, remember: the circuit must be CLOSED for current to flow. A battery is two or more cells combined.",
    },
  ],
};