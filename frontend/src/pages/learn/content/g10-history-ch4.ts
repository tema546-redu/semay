import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 HISTORY — UNIT 4
// SOCIETY AND POLITICS IN THE AGE OF WORLD WARS 1914–1945
// Source: Grade 10 History Student Textbook (pp. 81–110)
// For: Abenezer (Abatu) — Grade 10
// Style: mastery-lab (key terms, timelines, exam traps, memory hooks)
// ============================================================

export const g10HistoryCh4: Chapter = {
  id: "ch4",
  number: 4,
  title: "Society and Politics in the Age of World Wars 1914–1945",
  titleAm: "ማህበረሰብና ፖለቲካ በዓለም ጦርነቶች ዘመን 1914–1945",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS UNIT
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Unit (Your Route to 100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this unit covers the MOST DESTRUCTIVE period in human history — two world wars and the events between them. It has SIX big parts:\n" +
        "1) WWI (1914–1918) — causes, course, consequences\n" +
        "2) RUSSIAN REVOLUTION (1917) — causes, course, results\n" +
        "3) LEAGUE OF NATIONS — formation, successes, failures\n" +
        "4) GREAT DEPRESSION (1929) — causes, impacts\n" +
        "5) RISE OF FASCISM, NAZISM, MILITARISM\n" +
        "6) WWII (1939–1945) — causes, course, effects\n\n" +
        "Master these FIVE must-know items:\n" +
        "• MAIN causes of WWI (MANIA: Militarism, Alliances, Nationalism, Imperialism, Assassination)\n" +
        "• Two military blocs in both wars\n" +
        "• Russian Revolution (Feb vs Oct 1917)\n" +
        "• Why the League of Nations failed\n" +
        "• Differences between Fascism and Nazism",
      bodyAm:
        "አባቱ፣ ይህ ክፍል በሰው ልጅ ታሪክ ውስጥ በጣም አጥፊው ዘመን ነው። ስድስት ትላልቅ ክፍሎች፦\n" +
        "1) የመጀመሪያው የዓለም ጦርነት\n" +
        "2) የሩሲያ አብዮት\n" +
        "3) የመንግሥታት ማህበር\n" +
        "4) ታላቁ የኢኮኖሚ ቀውስ\n" +
        "5) ፋሺዝም፣ ናዚዝም፣ ሚሊታሪዝም\n" +
        "6) ሁለተኛው የዓለም ጦርነት",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Master the causes of WWI",
          titleAm: "ደረጃ 1 · የWWI ምክንያቶችን ተቆጣጥር",
          body:
            "CAUSES OF WWI (remember 'MANIA'):\n" +
            "• M — MILITARISM (arms race)\n" +
            "• A — ALLIANCES (Triple Alliance + Triple Entente)\n" +
            "• N — NATIONALISM (France vs Germany, Balkan)\n" +
            "• I — IMPERIALISM (competition for colonies)\n" +
            "• A — ASSASSINATION of Archduke Franz Ferdinand (June 28, 1914)\n\n" +
            "⚠ The assassination was the IMMEDIATE cause — the others were LONG-TERM causes.",
          bodyAm:
            "MANIA = Militarism, Alliances, Nationalism, Imperialism, Assassination።\n" +
            "ግድያው = ቀጥታ ምክንያት።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Know the two military blocs",
          titleAm: "ደረጃ 2 · ሁለቱን ወታደራዊ ግንባሮች እወቅ",
          body:
            "WWI BLOCS:\n" +
            "• TRIPLE ALLIANCE (Central Powers): Germany, Austria-Hungary, Italy (Italy left 1915)\n" +
            "• TRIPLE ENTENTE (Allied Powers): Britain, France, Russia (+20 others, including USA from 1917)\n\n" +
            "WWII BLOCS:\n" +
            "• AXIS POWERS: Germany, Italy, Japan\n" +
            "• ALLIED POWERS: Britain, France, USSR, USA (from Dec 1941)\n\n" +
            "⚠ Italy switched sides! In WWI, Italy started with Central Powers but joined Allies in 1915.",
          bodyAm:
            "WWI: Central (Germany, Austria-Hungary, Italy) vs Allies (Britain, France, Russia)\n" +
            "WWII: Axis (Germany, Italy, Japan) vs Allies (Britain, France, USSR, USA)",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Understand the Russian Revolution",
          titleAm: "ደረጃ 3 · የሩሲያ አብዮት",
          body:
            "RUSSIAN REVOLUTION (1917) — TWO revolutions:\n\n" +
            "FEBRUARY REVOLUTION:\n" +
            "• Spontaneous protest movement\n" +
            "• Causes: WWI losses, food shortages, inflation\n" +
            "• Result: Tsar Nicholas II deposed; Romanov Dynasty ended\n" +
            "• Provisional Government formed (Lvov, then Kerensky)\n\n" +
            "OCTOBER REVOLUTION:\n" +
            "• Bolsheviks (Lenin) led popular insurrection (Oct 25, 1917)\n" +
            "• Slogans: 'All Power to the Soviets!' and 'Peace, Land and Bread!'\n" +
            "• Provisional Government ended\n" +
            "• Bolsheviks seized power\n" +
            "• Lenin = Premier; Trotsky = War Minister\n\n" +
            "KEY MEASURES:\n" +
            "• Workers took over factories, 8-hour workday\n" +
            "• Land confiscated from landlords → given to peasants\n" +
            "• Russia withdrew from WWI (Treaty of Brest-Litovsk, 1918)\n" +
            "• USSR formed (July 1922)\n" +
            "• NEP (1921) — New Economic Policy",
          bodyAm:
            "የካቲት = የዜጎች ተቃውሞ።\n" +
            "ጥቅምት = ቦልሼቪኮች ሥልጣን ያዙ።\n" +
            "ሌኒን + ትሮትስኪ።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Know why the League of Nations failed",
          titleAm: "ደረጃ 4 · ማህበሩ ለምን አልተሳካም",
          body:
            "LEAGUE OF NATIONS (1920–1946):\n" +
            "• Founded Jan 10, 1920\n" +
            "• Headquartered in GENEVA, Switzerland\n" +
            "• Proposed by Woodrow Wilson (USA)\n" +
            "• USA DID NOT JOIN (Congress refused)\n\n" +
            "WHY THE LEAGUE FAILED:\n" +
            "1) USA (most powerful nation) did NOT join\n" +
            "2) No military force to enforce decisions\n" +
            "3) Members hesitant to condemn aggression (1930s)\n" +
            "4) Failed to stop: Italian invasion of Ethiopia (1935), Spanish Civil War, Second Sino-Japanese War\n" +
            "5) Failed to prevent WWII\n\n" +
            "SUCCESSES:\n" +
            "• 1926 — resolved Iraq-Turkey dispute over Mosul\n" +
            "• Early 1930s — resolved Colombia-Peru border dispute",
          bodyAm:
            "መንግሥታት ማህበር — ዠኔቫ።\n" +
            "USA አልተቀላቀለችም።\n" +
            "ወታደራዊ ኃይል አልነበረውም።",
        },
        {
          id: "n0-5",
          title: "Pass 5 · Compare Fascism, Nazism, Militarism",
          titleAm: "ደረጃ 5 · ፋሺዝም፣ ናዚዝም፣ ሚሊታሪዝም",
          body:
            "FASCISM (ITALY, 1922):\n" +
            "• Leader: BENITO MUSSOLINI\n" +
            "• Far-right authoritarian ideology\n" +
            "• Totalitarian one-party state\n" +
            "• Term from 'fascio' (bundle of rods)\n\n" +
            "NAZISM (GERMANY, 1933):\n" +
            "• Leader: ADOLF HITLER\n" +
            "• National Socialist German Workers' Party (NSDAP)\n" +
            "• Anti-Semitic (Holocaust)\n" +
            "• Wrote 'Mein Kampf' in prison (1923 coup attempt)\n\n" +
            "MILITARISM (JAPAN, 1931–1945):\n" +
            "• Military should dominate political and social life\n" +
            "• Peak period: 1931–1945\n\n" +
            "⚠ ALL THREE led to WWII.",
          bodyAm:
            "ፋሺዝም = ሙሶሊኒ (ጣሊያን, 1922)።\n" +
            "ናዚዝም = ሂትለር (ጀርመን, 1933)።\n" +
            "ሚሊታሪዝም = ጃፓን (1931–1945)።",
        },
        {
          id: "n0-6",
          title: "⚠ Exam standard — before you submit",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• WWI = 1914–1918; WWII = 1939–1945\n" +
            "• WWI immediate cause = assassination of Franz Ferdinand (June 28, 1914)\n" +
            "• Triple Alliance = Germany, Austria-Hungary, Italy\n" +
            "• Triple Entente = Britain, France, Russia\n" +
            "• USA entered WWI = April 6, 1917\n" +
            "• USA entered WWII = December 1941 (after Pearl Harbor)\n" +
            "• Russian Revolution = Feb 1917 + Oct 1917\n" +
            "• Bolsheviks = Lenin\n" +
            "• League of Nations = 1920; USA did NOT join\n" +
            "• Great Depression = began Oct 1929 (Wall Street crash)\n" +
            "• Fascism = Italy; Nazism = Germany; Militarism = Japan\n" +
            "• Treaty of Versailles (1919) punished Germany\n" +
            "• WWII began = September 1, 1939 (Germany invaded Poland)\n" +
            "• Atomic bombs = Hiroshima (Aug 6, 1945) + Nagasaki (Aug 9, 1945)\n" +
            "• Hitler committed suicide = April 30, 1945\n" +
            "• Japan surrendered = September 2, 1945",
          bodyAm:
            "ቀኖችንና ስሞችን በጥንቃቄ አስታውስ።",
        },
      ],
    },

    // ============================================================
    // 4.1 THE FIRST WORLD WAR: CAUSES, COURSE, CONSEQUENCE
    // ============================================================
    {
      id: "n1",
      title: "4.1 The First World War (1914–1918): Causes, Course, Consequences",
      titleAm: "4.1 የመጀመሪያው የዓለም ጦርነት",
      body:
        "Abatu, WWI (1914–18) — also called 'The Great War' — was an international conflict involving most of Europe, Russia, the USA, the Middle East, and other regions.",
      bodyAm:
        "WWI = 'ታላቁ ጦርነት'።",
      children: [
        {
          id: "n1-1",
          title: "🔍 LONG-TERM Causes — MANIA",
          titleAm: "🔍 የረጅም ጊዜ ምክንያቶች",
          body:
            "M — MILITARISM:\n" +
            "• Dangerous European ARMS RACE\n" +
            "• By 1914: Germany had ~100 warships + 2 million trained soldiers\n" +
            "• Britain and Germany both increased navies\n" +
            "• Military establishments began to influence public policy\n\n" +
            "A — ALLIANCES:\n" +
            "• Growing rivalries → military alliances from 1870s\n" +
            "• Designed to keep peace but PUSHED Europe into war\n\n" +
            "N — NATIONALISM:\n" +
            "• France wanted to avenge defeat in Franco-Prussian War (1870–71)\n" +
            "• Wanted to regain ALSACE and LORRAINE\n" +
            "• BALKAN nationalism — struggled to be independent of Ottoman Turks\n\n" +
            "I — IMPERIALISM:\n" +
            "• European nations competed for colonies in Africa and Asia\n" +
            "• Rivalry and mistrust deepened\n\n" +
            "A — ASSASSINATION (immediate cause):\n" +
            "• June 28, 1914\n" +
            "• Archduke FRANZ FERDINAND (heir to Austria-Hungary throne) assassinated\n" +
            "• By GAVRILO PRINCIP (Serbian nationalist)\n" +
            "• At SARAJEVO (capital of Bosnia, part of Austria-Hungary)",
          bodyAm:
            "Militarism + Alliances + Nationalism + Imperialism + Assassination።\n" +
            "የፍራንዝ ፈርዲናንድ ግድያ = ቀጥታ ምክንያት።",
        },
        {
          id: "n1-2",
          title: "⚔ The Two Military Blocs",
          titleAm: "⚔ ሁለቱ ወቅታዊ ግንባሮች",
          body:
            "TRIPLE ALLIANCE (CENTRAL POWERS):\n" +
            "• Originally formed in 1882\n" +
            "• Germany, Austria-Hungary, Italy\n" +
            "• ITALY LEFT in 1915 and joined the Entente\n\n" +
            "TRIPLE ENTENTE (ALLIED POWERS):\n" +
            "• Developed from Franco-Russian Alliance (1894)\n" +
            "• British-French Entente Cordiale (1904)\n" +
            "• Anglo-Russia Agreement (1907)\n" +
            "• MORE THAN 20 COUNTRIES joined: USA, Japan, Union of South Africa, Portugal, Rumania\n\n" +
            "⚠ TRIPLE ALLIANCE = Central Powers\n" +
            "⚠ TRIPLE ENTENTE = Allied Powers",
          bodyAm:
            "Triple Alliance = ማዕከላዊ ኃያላን።\n" +
            "Triple Entente = አሊያንስ።\n" +
            "ጣሊያን በ1915 ተቀየረች።",
        },
        {
          id: "n1-3",
          title: "📅 Course of WWI",
          titleAm: "📅 የጦርነቱ ሂደት",
          body:
            "JULY CRISIS (1914):\n" +
            "• July 23 — Austria-Hungary sent warlike ultimatum to Serbia\n" +
            "• July 28 — Austria-Hungary declared war on Serbia\n" +
            "• Within a week, most of Europe was at war\n\n" +
            "SCHLIEFFEN PLAN:\n" +
            "• Devised by Count Alfred von Schlieffen (German Chief of General Staff)\n" +
            "• Proposed to attack France through Belgium\n" +
            "• Occupy Paris within six weeks\n" +
            "• THEN turn east against Russia\n" +
            "• Avoid a two-front war\n\n" +
            "BATTLE OF THE MARNE (Sept 1914):\n" +
            "• German attack forced back\n" +
            "• Halted German advance\n" +
            "• Both sides dug defensive trenches\n" +
            "• DEADLY STALEMATE on Western Front for 4 years\n\n" +
            "EASTERN FRONT:\n" +
            "• Russians mobilized rapidly (contradicting German expectations)\n" +
            "• Germans forced to fight TWO-FRONT WAR\n" +
            "• Eastern front more MOBILE than Western\n\n" +
            "USA ENTERED (April 6, 1917):\n" +
            "• Germany's unrestricted submarine campaign (Jan 1917)\n" +
            "• ZIMMERMANN TELEGRAM — German foreign minister promised Mexico US territory in return for support\n" +
            "• Wilson felt USA was forced to war",
          bodyAm:
            "ማርን (1914) — የጀርመን ግስጋሴ ቆመ።\n" +
            "ትሬንች = 4 ዓመት።\n" +
            "USA በ1917 ገባች።",
        },
        {
          id: "n1-4",
          title: "📋 Consequences of WWI",
          titleAm: "📋 የጦርነቱ ውጤቶች",
          body:
            "HUMAN LOSSES:\n" +
            "• 8.5 million soldiers killed\n" +
            "• 13 million civilians killed\n\n" +
            "NEW TECHNOLOGIES:\n" +
            "• Machine guns, airplanes, poison gas, U-Boats (submarines)\n\n" +
            "COLLAPSE OF FOUR EMPIRES:\n" +
            "1) HABSBURGS of Austria-Hungary\n" +
            "2) HOHENZOLLERNS of Germany\n" +
            "3) SULTANATE of Ottoman Empire\n" +
            "4) ROMANOVS of Russia\n\n" +
            "SPANISH FLU (1918–19):\n" +
            "• Mass movement of soldiers/refugees helped spread pandemic\n" +
            "• One of world's deadliest influenza pandemics\n\n" +
            "NEW STATES:\n" +
            "• Estonia, Finland, Latvia, Lithuania\n\n" +
            "SOCIAL CHANGES IN USA:\n" +
            "• Women entered economy + politics\n" +
            "• 19th Amendment — Women's Right to Vote (1920)\n" +
            "• African Americans moved to northern cities for factory work\n\n" +
            "RUSSIAN REVOLUTION (1917):\n" +
            "• Discontent with WWI helped bring about it\n\n" +
            "TREATY OF VERSAILLES (June 28, 1919):\n" +
            "• Between Germany and Allied powers\n" +
            "• Adopted Wilson's Fourteen Points\n" +
            "• Created LEAGUE OF NATIONS\n" +
            "• PUNISHED GERMANY:\n" +
            "  - Sole responsibility for war\n" +
            "  - Pay REPARATIONS\n" +
            "  - Severe military restrictions\n" +
            "  - Lost territories (Africa + Pacific became mandates)\n" +
            "• Big Four: Wilson (USA), Clemenceau (France), Lloyd George (Britain), Orlando (Italy)\n" +
            "• Russia NOT represented (civil war); Germany NOT represented",
          bodyAm:
            "8.5 ሚሊዮን ወታደሮች + 13 ሚሊዮን ሲቪሎች ሞቱ።\n" +
            "4 ግዛቶች ወደቁ።\n" +
            "ቨርሳይ = ጀርመን ተቀጣ።",
        },
        {
          id: "n1-5",
          title: "⚠ EXAM TRAP — WWI",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• WWI = 1914–1918\n" +
            "• IMMEDIATE cause = assassination of Franz Ferdinand (June 28, 1914)\n" +
            "• LONG-TERM causes = MANIA\n" +
            "• Triple Alliance = Central Powers (Germany, Austria-Hungary, Italy)\n" +
            "• Triple Entente = Allied Powers (Britain, France, Russia)\n" +
            "• Italy SWITCHED sides in 1915\n" +
            "• USA entered = April 6, 1917\n" +
            "• Zimmermann Telegram = Germany tried to get Mexico to attack USA\n" +
            "• Treaty of Versailles = June 28, 1919\n" +
            "• Four empires collapsed\n" +
            "• Spanish Flu = 1918–19 (not called 'Spanish' because it started there; it was just first reported by Spain)\n" +
            "• 19th Amendment = Women's vote (1920)\n\n" +
            "⚠ MCQ TRAP: 'Balkan peninsula = powder keg' → correct. 'Alsace-Lorraine = French territory lost to Germany in 1871' → correct.",
          bodyAm:
            "MANIA = 5 ምክንያቶች።\n" +
            "ቨርሳይ = ጀርመን ተቀጣች።",
        },
      ],
    },

    // ============================================================
    // 4.2 RUSSIAN REVOLUTION
    // ============================================================
    {
      id: "n2",
      title: "4.2 The October 1917 Russian Revolution: Causes, Course, Results",
      titleAm: "4.2 የጥቅምት 1917 የሩሲያ አብዮት",
      body:
        "Abatu, Russia had TWO revolutions in 1917: FEBRUARY (spontaneous) and OCTOBER (Bolshevik-led).",
      bodyAm:
        "ሁለት አብዮቶች: የካቲት + ጥቅምት።",
      children: [
        {
          id: "n2-1",
          title: "🔍 Background to Revolution",
          titleAm: "🔍 ዳራ",
          body:
            "RUSSIA IN THE 1800s–1900s:\n" +
            "• Autocratic rule of the Czars\n" +
            "• One of the poorest countries in Europe\n" +
            "• SERFDOM (kind of feudalism) — abolished in 1861\n" +
            "• Population increase + difficult growing season + costly wars = FOOD SHORTAGES\n\n" +
            "POLITICAL GROUPS:\n" +
            "• Liberals — wanted democratic parliamentary government\n" +
            "• Social Revolutionaries — peasants should seize landlords' land\n" +
            "• MARXISTS — most radical; followed Karl Marx (1818–1883)\n" +
            "• 1898 — RUSSIAN SOCIAL DEMOCRATIC LABOUR PARTY (RSDLP)\n" +
            "  - Later split into BOLSHEVIKS and MENSHEVIKS\n" +
            "  - Bolsheviks led by LENIN (Vladimir Ilich Ulyanov)\n\n" +
            "1905 REVOLUTION:\n" +
            "• Immediate cause: defeat by Japan in Russo-Japanese War (1904–05)\n" +
            "• BLOODY SUNDAY — Czar's army killed/injured hundreds of peaceful protesters\n" +
            "• October Manifesto — Nicholas II turned Russia from absolute to constitutional monarchy",
          bodyAm:
            "ማርክሲስቶች = RSDLP።\n" +
            "ቦልሼቪክ (ሌኒን) vs ሜንሼቪክ።\n" +
            "1905 = Bloody Sunday።",
        },
        {
          id: "n2-2",
          title: "📅 FEBRUARY REVOLUTION (1917)",
          titleAm: "📅 የካቲት አብዮት",
          body:
            "FEBRUARY REVOLUTION:\n" +
            "• SPONTANEOUS protest movement\n" +
            "• Huge masses of people\n" +
            "• Massive strikes + demonstrations\n" +
            "• Army/police used to stop demonstrations\n" +
            "• Occupation of State Duma in Petrograd\n\n" +
            "CAUSES:\n" +
            "• Russian army lost battle after battle in WWI\n" +
            "• Military losses\n" +
            "• Living conditions worsened (food shortages, inflation)\n" +
            "• Workers went on strike\n" +
            "• Riots became common\n" +
            "• Soldiers joined the people\n\n" +
            "RESULTS:\n" +
            "• Czar Nicholas II deposed\n" +
            "• Romanov Dynasty ended\n" +
            "• PROVISIONAL GOVERNMENT formed (Duma members)\n" +
            "  - Led by GEORGE LVOV, then ALEXANDER KERENSKY\n" +
            "• FAILED to meet people's demands (couldn't stop war, couldn't fix food shortage)\n\n" +
            "DUAL POWER:\n" +
            "• Provisional Government + Petrograd Soviet",
          bodyAm:
            "የካቲት = ስፖንታኒያ።\n" +
            "Tsar ተገለበጠ።\n" +
            "Provisional Government + Soviet።",
        },
        {
          id: "n2-3",
          title: "📅 OCTOBER REVOLUTION (1917)",
          titleAm: "📅 የጥቅምት አብዮት",
          body:
            "BOLSHEVIK RISE:\n" +
            "• Slogans: 'ALL POWER TO THE SOVIETS!' and 'PEACE, LAND AND BREAD!'\n" +
            "• Won popular support through slogans + organizing skills\n" +
            "• September 1917 — General KORNILOV attempted military takeover\n" +
            "• Failed → Bolsheviks strengthened hold in Petrograd and Moscow\n\n" +
            "OCTOBER REVOLUTION (Oct 25, 1917):\n" +
            "• Bolsheviks led popular insurrection\n" +
            "• Provisional Government headquarters fell within 10 days\n" +
            "• Provisional Government ended\n" +
            "• Bolsheviks seized political power\n" +
            "• Regime: Premier LENIN + War Minister TROTSKY\n\n" +
            "IMMEDIATE MEASURES:\n" +
            "1) Workers took over factories; industry nationalized; 8-hour workday\n" +
            "2) Land confiscated from landlords → given to peasants (Oct 1917 decree)\n" +
            "3) Decree on Peace (Oct 1917) — Russia withdrew from WWI\n" +
            "   - Treaty of Brest-Litovsk with Germany (1918)\n\n" +
            "CIVIL WAR (1918–1922):\n" +
            "• 'White Armies' — ex-czarist officers attacked revolutionary government\n" +
            "• 'Red Army' — revolutionary forces crushed rebels\n\n" +
            "NEW ECONOMIC POLICY (NEP, 1921):\n" +
            "• Restored smaller enterprises to owners\n" +
            "• Allowed peasants to sell grain for profit\n" +
            "• Revived commerce\n\n" +
            "USSR (July 1922):\n" +
            "• Union of Soviet Socialist Republics formed\n" +
            "• Secret police: CHEKA",
          bodyAm:
            "ቦልሼቪክ = ሥልጣን።\n" +
            "የመሬት ውርስ፣ ሰላም፣ ዳቦ።\n" +
            "USSR = 1922።",
        },
        {
          id: "n2-4",
          title: "👤 Stalin's Rule (1924+)",
          titleAm: "👤 የስታሊን አገዛዝ",
          body:
            "LENIN DIED (1924) → JOSEPH STALIN succeeded\n\n" +
            "STALIN'S POLICIES:\n" +
            "• 1928–38 — PURGES within Communist Party\n" +
            "• Eliminated opposition\n" +
            "• Strengthened totalitarian rule\n\n" +
            "FIVE-YEAR PLANS:\n" +
            "• First: 1928–1932\n" +
            "• Abolished foreign influence in Russian industry\n" +
            "• Rapid industrialization\n" +
            "• Forceful COLLECTIVIZATION of farms\n" +
            "• Rich farmers (KULAKS) opposed → severe food shortage (1934)\n\n" +
            "Second Five-Year Plan — improved situation\n" +
            "Third Five-Year Plan — interrupted by Nazi invasion (1941)\n\n" +
            "RESULT:\n" +
            "• Stalin transformed Russia from backward agricultural to modern industrial state\n" +
            "• This economic strength helped Russia defeat Nazi Germany in WWII",
          bodyAm:
            "ስታሊን = ጠንካራ ኢንዱስትሪ።\n" +
            "5-ዓመት ዕቅዶች።\n" +
            "ኩላኮች ተቃወሙ።",
        },
        {
          id: "n2-5",
          title: "🌍 Global Impact of the Russian Revolution",
          titleAm: "🌍 ዓለም አቀፍ ተጽዕኖ",
          body:
            "GLOBAL IMPACT:\n" +
            "• INSPIRATION for colonized peoples of Africa and Asia\n" +
            "• USSR became strong supporter of national liberation struggles\n" +
            "• Strengthening of USSR after WWII changed international balance of power\n" +
            "• First communist state in the world\n" +
            "• Inspired communist movements worldwide",
          bodyAm:
            "የቅኝ ግዛት ሕዝቦችን አነሳሳ።",
        },
        {
          id: "n2-6",
          title: "⚠ EXAM TRAP — Russian Revolution",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• FEBRUARY Revolution = SPONTANEOUS; OCTOBER = BOLSHEVIK-LED\n" +
            "• Tsar Nicholas II deposed in FEBRUARY\n" +
            "• Provisional Government = Lvov → Kerensky\n" +
            "• OCTOBER = Bolsheviks under LENIN\n" +
            "• Slogans: 'All Power to Soviets!' + 'Peace, Land, Bread!'\n" +
            "• Treaty of Brest-Litovsk (1918) — Russia left WWI\n" +
            "• USSR formed = July 1922\n" +
            "• NEP = 1921\n" +
            "• Stalin = 1924+\n" +
            "• Five-Year Plans = 1928+\n" +
            "• CHEKA = secret police\n" +
            "• Bloody Sunday = 1905 (not 1917)\n\n" +
            "⚠ MCQ TRAP: 'The February Revolution was led by Lenin' → FALSE (spontaneous).\n" +
            "⚠ MCQ TRAP: 'Kornilov succeeded' → FALSE; his takeover attempt FAILED.",
          bodyAm:
            "የካቲት = ስፖንታኒያ።\n" +
            "ጥቅምት = ቦልሼቪክ።\n" +
            "ሌኒን = ጥቅምት።",
        },
      ],
    },

    // ============================================================
    // 4.3 LEAGUE OF NATIONS
    // ============================================================
    {
      id: "n3",
      title: "4.3 The League of Nations",
      titleAm: "4.3 የመንግሥታት ማህበር",
      body:
        "Abatu, the League of Nations (1920–1946) was the first international organization whose principal mission was to maintain world peace. It FAILED to prevent WWII.",
      bodyAm:
        "የመጀመሪያው ዓለም አቀፍ ድርጅት።\n" +
        "ወደ WWII መምጣትን አላቆመም።",
      children: [
        {
          id: "n3-1",
          title: "📌 KEY TERM — League of Nations",
          titleAm: "📌 ቁልፍ ቃል",
          body:
            "LEAGUE OF NATIONS:\n" +
            "• Founded January 10, 1920\n" +
            "• Result of Paris Peace Conference\n" +
            "• Headquartered in GENEVA, Switzerland\n" +
            "• FIRST international organization for world peace\n" +
            "• Proposed by President WOODROW WILSON (USA)\n\n" +
            "PRIMARY GOALS:\n" +
            "• Prevent wars through COLLECTIVE SECURITY\n" +
            "• DISARMAMENT\n" +
            "• Settle disputes through NEGOTIATION and ARBITRATION\n\n" +
            "STRUCTURE:\n" +
            "• General Assembly (all members)\n" +
            "• Permanent Secretariat\n" +
            "• Executive Council — 4 permanent members (Britain, France, Japan, Italy) + 4 non-permanent",
          bodyAm:
            "1920 ተመሠረተ።\n" +
            "ዠኔቫ።\n" +
            "Wilson ሐሳብ።",
        },
        {
          id: "n3-2",
          title: "✅ Successes of the League",
          titleAm: "✅ ስኬቶች",
          body:
            "SUCCESSES:\n" +
            "1) 1926 — Negotiated peaceful outcome between Iraq and Turkey over province of MOSUL\n" +
            "2) Early 1930s — Successfully mediated border dispute between COLOMBIA and PERU\n\n" +
            "LIMITED SUCCESSES — mostly in minor disputes.",
          bodyAm:
            "Mosul (1926) + Colombia-Peru።",
        },
        {
          id: "n3-3",
          title: "❌ Why the League FAILED",
          titleAm: "❌ ለምን አልተሳካም",
          body:
            "WHY THE LEAGUE FAILED:\n\n" +
            "1) USA DID NOT JOIN\n" +
            "• US Congress resistant\n" +
            "• Joining would legally bind USA to intervene in European conflicts\n\n" +
            "2) NO MILITARY FORCE\n" +
            "• League had no army to enforce decisions\n\n" +
            "3) MEMBERS HESITANT to condemn aggression in 1930s\n\n" +
            "4) FAILED TO INTERVENE in:\n" +
            "• Italian invasion of Ethiopia (1935)\n" +
            "• Spanish Civil War (1936–39)\n" +
            "• Second Sino-Japanese War (1937+)\n\n" +
            "5) FAILED TO PREVENT WWII\n\n" +
            "CONTINUED TO OPERATE UNTIL 1946",
          bodyAm:
            "USA አልተቀላቀለችም።\n" +
            "ወታደራዊ ኃይል አልነበረውም።\n" +
            "ጣሊያን ኢትዮጵያን ወረረች።",
        },
        {
          id: "n3-4",
          title: "⚠ EXAM TRAP — League of Nations",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• Founded = January 10, 1920\n" +
            "• Headquarters = GENEVA\n" +
            "• Proposed by = WOODROW WILSON\n" +
            "• USA = DID NOT JOIN\n" +
            "• Successes = Mosul (Iraq-Turkey) + Colombia-Peru\n" +
            "• Failed = Italian invasion of Ethiopia, Spanish Civil War, WWII\n" +
            "• Dissolved = 1946 (replaced by UN)\n" +
            "• FOUR permanent Council members = Britain, France, Japan, Italy\n\n" +
            "⚠ MCQ TRAP: 'USA joined the League of Nations' → FALSE.\n" +
            "⚠ MCQ TRAP: 'The League prevented WWII' → FALSE; it FAILED.",
          bodyAm:
            "USA አልተቀላቀለችም።\n" +
            "ዠኔቫ።\n" +
            "1946 ተፈረሰ።",
        },
      ],
    },

    // ============================================================
    // 4.4 GREAT DEPRESSION
    // ============================================================
    {
      id: "n4",
      title: "4.4 The Worldwide Economic Crisis (Great Depression)",
      titleAm: "4.4 ታላቁ የኢኮኖሚ ቀውስ",
      body:
        "Abatu, the Great Depression (1929+) was the WORST economic downturn in the history of the industrialized world.",
      bodyAm:
        "ታላቁ ቀውስ (1929+)።",
      children: [
        {
          id: "n4-1",
          title: "📌 KEY TERM — Great Depression",
          titleAm: "📌 ቁልፍ ቃል",
          body:
            "GREAT DEPRESSION:\n" +
            "• Began in USA with NEW YORK WALL STREET STOCK MARKET CRASH (October 1929)\n" +
            "• Worst economic downturn in history of industrialized world\n" +
            "• Had DEVASTATING effects on rich and poor countries\n\n" +
            "IMPACTS:\n" +
            "• Personal income, tax revenue, profits, prices DROPPED\n" +
            "• International trade plunged by MORE THAN 50%\n" +
            "• USA unemployment rose to 25%\n" +
            "• In some countries, unemployment up to 33%\n" +
            "• Construction virtually halted\n" +
            "• Crop prices fell by about 60%\n" +
            "• By 1933 (lowest point): 15 million Americans unemployed\n" +
            "• Nearly half of US banks failed",
          bodyAm:
            "1929 ጥቅምት — Wall Street crash።\n" +
            "25% ስራ አጦች (USA)።\n" +
            "50% የንግድ ውድቀት።",
        },
        {
          id: "n4-2",
          title: "⚠ EXAM TRAP — Great Depression",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• Began = October 1929 (Wall Street crash)\n" +
            "• Worst point = 1933\n" +
            "• International trade fell 50%+\n" +
            "• USA unemployment = 25%\n" +
            "• 15 million Americans unemployed by 1933\n" +
            "• Half of US banks failed\n\n" +
            "⚠ Depression CONTRIBUTED to rise of Fascism/Nazism (economic desperation → extremist leaders).",
          bodyAm:
            "1929 ተጀመረ።\n" +
            "ከፋሺዝም/ናዚዝም መነሳት ጋር ተያይዞ።",
        },
      ],
    },

    // ============================================================
    // 4.5 RISE OF FASCISM, NAZISM, MILITARISM
    // ============================================================
    {
      id: "n5",
      title: "4.5 The Rise of Fascism in Italy, Nazism in Germany, Militarism in Japan",
      titleAm: "4.5 ፋሺዝም፣ ናዚዝም፣ ሚሊታሪዝም መነሳት",
      body:
        "Abatu, Fascism (Italy, 1922), Nazism (Germany, 1933), and Militarism (Japan) were the main causes of WWII.",
      bodyAm:
        "ሦስቱ የWWII ዋና ምክንያቶች።",
      children: [
        {
          id: "n5-1",
          title: "📌 KEY TERM — Fascism",
          titleAm: "📌 ቁልፍ ቃል — ፋሺዝም",
          body:
            "FASCISM:\n" +
            "• Far-right AUTHORITARIAN political ideology (early 20th century)\n" +
            "• Fascists believe liberal democracy is OBSOLETE\n" +
            "• Complete mobilization of society under TOTALITARIAN ONE-PARTY STATE\n" +
            "• Led by a DICTATOR\n" +
            "• Aim: prepare nation for armed conflict and respond to economic difficulties\n" +
            "• Often preoccupied with RACIST ideologies\n\n" +
            "ORIGIN OF NAME:\n" +
            "• Italian word 'FASCIO' = bundle of rods\n" +
            "• Symbolizes STRENGTH THROUGH UNITY\n" +
            "• Single rod easily broken; bundle difficult to break",
          bodyAm:
            "ፋሺዝም = የአንድ ፓርቲ አምባገነናዊ አገዛዝ።\n" +
            "Fascio = የዱላዎች ስብስብ።",
        },
        {
          id: "n5-2",
          title: "🇮🇹 Causes for Rise of Fascism in Italy",
          titleAm: "🇮🇹 ፋሺዝም በጣሊያን",
          body:
            "CAUSES:\n\n" +
            "1) TREATY OF VERSAILLES:\n" +
            "• Italy disappointed — did NOT get share in German overseas territories\n" +
            "• Joined Allies after secret Treaty of London (1915)\n" +
            "• Allies promised Eritrea + Trieste, then backed out\n\n" +
            "2) SOCIO-ECONOMIC CONDITIONS:\n" +
            "• Terrible confusion in political, social, economic life (1919)\n" +
            "• Economic structure collapsed due to war\n" +
            "• Natural resources scarce\n" +
            "• Mussolini claimed post-war unrest was leading to communism\n\n" +
            "3) FALSE ASPIRATIONS:\n" +
            "• Feelings of disappointment exploited by Mussolini\n" +
            "• People felt high ambitions could be realized under Fascism\n\n" +
            "MUSSOLINI'S RISE:\n" +
            "• Founded Fascist Party in 1919\n" +
            "• Established Fascist State in 1922\n" +
            "• Known as 'DUCE' (leader)",
          bodyAm:
            "ቨርሳይ ቅር አሰኘች።\n" +
            "ኢኮኖሚ ፈረሰ።\n" +
            "ሙሶሊኒ = Duce።",
        },
        {
          id: "n5-3",
          title: "🇩🇪 Causes of the Rise of Nazism",
          titleAm: "🇩🇪 ናዚዝም በጀርመን",
          body:
            "NAZISM = National Socialist German Workers' Party (NSDAP)\n" +
            "Leader: ADOLF HITLER\n\n" +
            "CAUSES:\n\n" +
            "1) WAR & PEACE SETTLEMENT:\n" +
            "• Left Germany disillusioned and crushed spiritually and materially\n\n" +
            "2) FRANCE'S HOSTILE ATTITUDE:\n" +
            "• Quarrels over Ruhr, Rhineland occupation, Saar, reparations\n\n" +
            "3) DEBATE ON SECURITY AND DISARMAMENT — angered Germans\n\n" +
            "4) WEIMAR REPUBLIC's WEAKNESS:\n" +
            "• Accepted unfair treaties\n" +
            "• Unable to assert itself in international affairs\n\n" +
            "HITLER'S RISE:\n" +
            "• Tried coup d'état in 1923 — FAILED\n" +
            "• Arrested and jailed\n" +
            "• Wrote MEIN KAMPF in prison (published 1926)\n" +
            "• Became Chancellor in 1933",
          bodyAm:
            "ቨርሳይ + ዌይማር ድክመት።\n" +
            "ሂትለር = Mein Kampf።",
        },
        {
          id: "n5-4",
          title: "🇯🇵 Militarism in Japan",
          titleAm: "🇯🇵 ሚሊታሪዝም በጃፓን",
          body:
            "MILITARISM IN JAPAN:\n" +
            "• Started during LATE MEIJI dynasty\n" +
            "• Continued until 1945\n" +
            "• PEAK PERIOD: 1931–1945\n\n" +
            "BELIEF:\n" +
            "• The MILITARY should dominate political and social life of Japanese society",
          bodyAm:
            "ጃፓን = ሚሊታሪዝም።\n" +
            "1931–1945 ጫፍ።",
        },
        {
          id: "n5-5",
          title: "⚠ EXAM TRAP — Fascism/Nazism/Militarism",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• FASCISM = Italy; MUSSOLINI; 1922\n" +
            "• NAZISM = Germany; HITLER; 1933\n" +
            "• MILITARISM = Japan; 1931–1945 peak\n" +
            "• Mussolini = 'Duce'\n" +
            "• Hitler wrote 'Mein Kampf' in prison\n" +
            "• Fascism from 'fascio' = bundle of rods\n" +
            "• ALL were TOTALITARIAN\n" +
            "• ALL caused WWII\n\n" +
            "⚠ MCQ TRAP: 'Fascism was initially formed in Germany' → FALSE; it was ITALY.\n" +
            "⚠ MCQ TRAP: 'The architect of containment was ___' → George Kennan (not a fascist leader).",
          bodyAm:
            "ፋሺዝም = ጣሊያን።\n" +
            "ናዚዝም = ጀርመን።",
        },
      ],
    },

    // ============================================================
    // 4.6 WWII (1939–1945)
    // ============================================================
    {
      id: "n6",
      title: "4.6 The Second World War (1939–1945)",
      titleAm: "4.6 ሁለተኛው የዓለም ጦርነት",
      body:
        "Abatu, WWII (1939–1945) was fought between the ALLIED POWERS and the AXIS POWERS. It was the deadliest war in history.",
      bodyAm:
        "በጣም አጥፊ ጦርነት።",
      children: [
        {
          id: "n6-1",
          title: "📌 KEY TERM — The Two Blocs",
          titleAm: "📌 ሁለቱ ግንባሮች",
          body:
            "AXIS POWERS:\n" +
            "• GERMANY\n" +
            "• ITALY (after June 1940)\n" +
            "• JAPAN\n\n" +
            "ALLIED POWERS:\n" +
            "• FRANCE\n" +
            "• BRITAIN\n" +
            "• USA (from December 1941)\n" +
            "• USSR",
          bodyAm:
            "Axis = Germany, Italy, Japan።\n" +
            "Allies = France, Britain, USA, USSR።",
        },
        {
          id: "n6-2",
          title: "🔍 Causes of WWII",
          titleAm: "🔍 የጦርነቱ ምክንያቶች",
          body:
            "CAUSES:\n\n" +
            "1) RISE OF FASCISM/NAZISM:\n" +
            "• German Nazis complained Versailles Treaty was DICTATED peace\n" +
            "• Desire to restore Germany's old position → revenge + aggression\n" +
            "• Italy: national chauvinism; wanted empire in Africa\n" +
            "• Japan: planned to expand empire through conquest\n\n" +
            "2) GREAT DEPRESSION:\n" +
            "• Economic troubles + political instability\n" +
            "• Leaders like Hitler, Mussolini promised better future\n" +
            "• Embarked on policy of aggression\n\n" +
            "3) FAILURE OF WESTERN POWERS:\n" +
            "• Britain + France followed APPEASEMENT policy\n" +
            "• Allowed territorial seizures to avoid another war\n" +
            "• USA followed ISOLATION policy\n" +
            "• This ENCOURAGED Fascist states\n\n" +
            "4) JAPANESE AGGRESSION:\n" +
            "• 1931 — Japan invaded Manchuria (northern China)\n" +
            "• League of Nations condemned → Japan withdrew from League (May 1933)\n" +
            "• 1937 — Japan started Sino-Japanese War\n\n" +
            "5) GERMAN AGGRESSION:\n" +
            "• Germany withdrew from League (Oct 1933)\n" +
            "• Reoccupied Rhineland (March 1936)\n" +
            "• 1938 — Annexed Austria (Anschluss)\n" +
            "• 1939 — Annexed parts of Czechoslovakia\n" +
            "• Sept 1938 — MUNICH AGREEMENT (Britain, France, Germany) — allowed Germany to occupy Sudetenland\n\n" +
            "6) IMMEDIATE CAUSE:\n" +
            "• September 1, 1939 — GERMANY INVADED POLAND\n" +
            "• Sept 3, 1939 — Britain and France declared war on Germany",
          bodyAm:
            "ፋሺዝም + ዲፕሬሽን + appeasement + ጃፓን + ጀርመን።\n" +
            "ፖላንድ ወረራ = ቀጥታ ምክንያት።",
        },
        {
          id: "n6-3",
          title: "📅 Course of WWII",
          titleAm: "📅 የጦርነቱ ሂደት",
          body:
            "1939:\n" +
            "• August — Nazi-Soviet Non-Aggression Pact\n" +
            "• Sept 1 — Germany invaded Poland\n" +
            "• Sept 3 — Britain + France declared war\n" +
            "• BLITZKRIEG (lightning war) — Poland overrun in 3 weeks\n" +
            "• USSR invaded eastern Poland\n\n" +
            "1940:\n" +
            "• May — Germany invaded France through Holland + Belgium\n" +
            "• Bypassed Maginot Line\n" +
            "• British retreated to Dunkirk\n" +
            "• Germans occupied over half of France\n" +
            "• Vichy France — puppet government headed by Marshal Petain\n" +
            "• General Charles de Gaulle — Free French in England\n" +
            "• Hitler launched air attacks on Britain (Battle of Britain)\n" +
            "• British resistance repulsed Nazi invasion\n\n" +
            "1941:\n" +
            "• June — Nazis invaded Russia (despite Non-Aggression Pact)\n" +
            "• Russia proved to be strong enemy\n" +
            "• December — Japan attacked PEARL HARBOR (Hawaii)\n" +
            "• USA declared war on Japan\n" +
            "• Germany and Italy declared war on USA\n" +
            "• USA joined WWII\n\n" +
            "1942–43:\n" +
            "• Height of Axis success\n" +
            "• BATTLE OF STALINGRAD (1942/3) — decisive Soviet victory\n" +
            "• BATTLE OF KURSK (1943) — decisive Soviet victory\n" +
            "• May 1943 — Allies drove Germans/Italians out of North Africa\n" +
            "• 1943 — Allied invasion of Italy → Mussolini overthrown\n\n" +
            "1944:\n" +
            "• Second Front opened in Europe\n" +
            "• France liberated\n" +
            "• Russia advanced toward Germany\n\n" +
            "1945:\n" +
            "• April 30 — Hitler committed suicide\n" +
            "• Mussolini murdered by Italian communists\n" +
            "• Germany unconditionally surrendered\n" +
            "• Aug 6 — USA dropped atomic bomb on HIROSHIMA\n" +
            "• Aug 9 — USA dropped atomic bomb on NAGASAKI\n" +
            "• Sept 2 — Japan unconditionally surrendered",
          bodyAm:
            "ፖላንድ ወረራ = መጀመሪያ።\n" +
            "ስታሊንግራድ + ኩርስክ = የለውጥ ነጥቦች።\n" +
            "ሂሮሺማ + ናጋሳኪ።",
        },
        {
          id: "n6-4",
          title: "🏆 Why the AXIS Powers were defeated",
          titleAm: "🏆 የአክሲስ ሽንፈት ምክንያቶች",
          body:
            "REASONS FOR AXIS DEFEAT:\n\n" +
            "1) STRETCHED FORCES:\n" +
            "• Axis forces stretched over vast territories\n" +
            "• Could not protect what they controlled\n\n" +
            "2) USA + USSR ENTERED:\n" +
            "• Military balance shifted to Allies\n" +
            "• Nazi Germany and Japan made mistake of provoking these powers\n\n" +
            "3) ALLIED COORDINATION:\n" +
            "• Coordinated military operations\n" +
            "• Mighty economic resources\n" +
            "• Enormous manpower",
          bodyAm:
            "የተዘረጋ ኃይል + USA/USSR ገቡ።",
        },
        {
          id: "n6-5",
          title: "📋 Effects of WWII",
          titleAm: "📋 ውጤቶች",
          body:
            "EFFECTS OF WWII:\n\n" +
            "1) HUMAN LOSS:\n" +
            "• About 50 MILLION people killed (fighters + civilians)\n" +
            "• Millions of families broken\n" +
            "• Children orphaned\n" +
            "• Many handicapped\n\n" +
            "2) MATERIAL LOSS:\n" +
            "• Infrastructure, factories, roads, buildings destroyed\n" +
            "• Destruction EXCEEDED WWI\n\n" +
            "3) DECOLONIZATION:\n" +
            "• War hastened decolonization in Asia and Africa\n\n" +
            "4) SUPERPOWERS:\n" +
            "• USA and USSR became SUPERPOWERS\n\n" +
            "5) COLD WAR:\n" +
            "• Bloodless diplomatic/political competition between USA and USSR\n" +
            "• Another outcome of WWII\n\n" +
            "6) UNITED NATIONS:\n" +
            "• UNO formed to maintain world peace and order\n" +
            "• Replaced League of Nations",
          bodyAm:
            "50 ሚሊዮን ሰዎች ሞቱ።\n" +
            "USA + USSR = ልዕለ ኃያላን።\n" +
            "UNO ተፈጠረ።",
        },
        {
          id: "n6-6",
          title: "⚠ EXAM TRAP — WWII",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• WWII = 1939–1945\n" +
            "• Began = September 1, 1939 (Germany invaded Poland)\n" +
            "• Axis = Germany, Italy, Japan\n" +
            "• Allies = Britain, France, USSR, USA\n" +
            "• USA entered = December 1941 (Pearl Harbor)\n" +
            "• Stalingrad + Kursk = turning points\n" +
            "• D-Day = June 6, 1944\n" +
            "• Hitler suicide = April 30, 1945\n" +
            "• Atomic bombs = Aug 6 + Aug 9, 1945\n" +
            "• Japan surrendered = Sept 2, 1945\n" +
            "• ~50 million died\n" +
            "• USA + USSR became superpowers\n" +
            "• Cold War followed\n\n" +
            "⚠ MCQ TRAP: 'USA entered WWII in 1939' → FALSE; Dec 1941.\n" +
            "⚠ MCQ TRAP: 'WWII ended with Germany's surrender' → partially true; JAPAN surrendered Sept 1945.",
          bodyAm:
            "1939 = መጀመሪያ።\n" +
            "1941 = USA ገባች።\n" +
            "1945 = መጨረሻ።",
        },
      ],
    },

    // ============================================================
    // UNIT SUMMARY + EXAM TRAPS
    // ============================================================
    {
      id: "nSummary",
      title: "Unit Summary — The Big Picture",
      titleAm: "የክፍሉ ማጠቃለያ",
      body:
        "1. WWI (1914–1918) = MANIA causes; Central Powers vs Allies; ~21.5 million dead; 4 empires collapsed; Treaty of Versailles (1919).\n\n" +
        "2. RUSSIAN REVOLUTION (1917) = Feb (spontaneous, Tsar deposed) + Oct (Bolsheviks under Lenin); USSR 1922; NEP 1921; Stalin 1924+.\n\n" +
        "3. LEAGUE OF NATIONS (1920–1946) = first international peace organization; USA did NOT join; failed to prevent WWII.\n\n" +
        "4. GREAT DEPRESSION (1929+) = Wall Street crash; 25% US unemployment; contributed to rise of extremism.\n\n" +
        "5. FASCISM (Italy, Mussolini, 1922) + NAZISM (Germany, Hitler, 1933) + MILITARISM (Japan) = causes of WWII.\n\n" +
        "6. WWII (1939–1945) = deadliest war; ~50 million dead; Stalingrad + Kursk = turning points; atomic bombs; USA + USSR became superpowers; UNO formed; Cold War began.",
      bodyAm:
        "ስድስት ቁልፍ ነጥቦች።",
    },
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 4",
      titleAm: "የተለምዱ የፈተና ወጥመዶች",
      body:
        "1) WWI = 1914–1918; WWII = 1939–1945.\n" +
        "2) WWI immediate cause = assassination of Franz Ferdinand (June 28, 1914).\n" +
        "3) MANIA = 5 long-term causes.\n" +
        "4) Triple Alliance = Germany, Austria-Hungary, Italy.\n" +
        "5) Triple Entente = Britain, France, Russia.\n" +
        "6) USA entered WWI = April 6, 1917.\n" +
        "7) Russian Revolution: Feb = spontaneous; Oct = Bolshevik.\n" +
        "8) Lenin led Bolsheviks; Trotsky = War Minister.\n" +
        "9) USSR formed = July 1922.\n" +
        "10) League of Nations = 1920; USA did NOT join.\n" +
        "11) Great Depression = Oct 1929.\n" +
        "12) Fascism = Italy, Mussolini, 1922.\n" +
        "13) Nazism = Germany, Hitler, 1933.\n" +
        "14) Militarism = Japan, peak 1931–1945.\n" +
        "15) Hitler wrote 'Mein Kampf' in prison.\n" +
        "16) WWII began = Sept 1, 1939 (Poland invaded).\n" +
        "17) USA entered WWII = Dec 1941 (Pearl Harbor).\n" +
        "18) Stalingrad + Kursk = turning points.\n" +
        "19) Atomic bombs = Aug 6 + Aug 9, 1945.\n" +
        "20) ~50 million died in WWII.\n" +
        "21) USA + USSR = superpowers.\n" +
        "22) Cold War followed WWII.",
      bodyAm:
        "22 ወጥመዶች።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "The First World War was fought from:", options: ["1912–1916", "1914–1918", "1916–1920", "1918–1922"], answer: "1", explanation: "WWI was fought from 1914 to 1918." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "The immediate cause of WWI was:", options: ["The sinking of the Lusitania", "The assassination of Archduke Franz Ferdinand", "The invasion of Poland", "The Zimmermann Telegram"], answer: "1", explanation: "The immediate cause was the assassination of Archduke Franz Ferdinand on June 28, 1914." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Archduke Franz Ferdinand was assassinated at:", options: ["Vienna", "Sarajevo", "Berlin", "Belgrade"], answer: "1", explanation: "He was assassinated at Sarajevo, capital of Bosnia (then part of Austria-Hungary)." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Who assassinated Archduke Franz Ferdinand?", options: ["Adolf Hitler", "Gavrilo Princip", "Benito Mussolini", "Joseph Stalin"], answer: "1", explanation: "Gavrilo Princip, a Serbian nationalist, assassinated him." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "The Triple Alliance (Central Powers) in WWI included:", options: ["Britain, France, Russia", "Germany, Austria-Hungary, Italy", "Germany, Russia, Italy", "USA, Britain, France"], answer: "1", explanation: "The Triple Alliance = Germany, Austria-Hungary, Italy." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "The Triple Entente (Allied Powers) in WWI included:", options: ["Germany, Austria, Italy", "Britain, France, Russia", "Germany, USA, Japan", "Italy, Spain, Portugal"], answer: "1", explanation: "The Triple Entente = Britain, France, Russia." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Which country left the Triple Alliance in 1915?", options: ["Germany", "Austria-Hungary", "Italy", "Russia"], answer: "2", explanation: "Italy left the Triple Alliance in 1915 and joined the Triple Entente." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The USA entered WWI on:", options: ["April 6, 1917", "December 7, 1941", "November 11, 1918", "October 24, 1929"], answer: "0", explanation: "The USA declared war on Germany on April 6, 1917." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "The Battle of the Marne (1914) was significant because it:", options: ["Ended the war", "Halted the German advance and created a stalemate", "Made Germany win", "Was a US victory"], answer: "1", explanation: "The Battle of the Marne halted the German advance and created a deadly stalemate on the Western Front." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "The Schlieffen Plan proposed that Germany would:", options: ["Attack Russia first", "Attack France through Belgium then turn on Russia", "Ally with Russia", "Attack Britain first"], answer: "1", explanation: "The Schlieffen Plan = attack France through Belgium, occupy Paris within six weeks, then turn on Russia." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The Treaty of Versailles was signed in:", options: ["1914", "1918", "1919", "1920"], answer: "2", explanation: "The Treaty of Versailles was signed on June 28, 1919." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "The Treaty of Versailles punished which country?", options: ["France", "Britain", "Germany", "Russia"], answer: "2", explanation: "The Treaty placed sole responsibility for the war on Germany and imposed severe penalties." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "How many imperial dynasties collapsed after WWI?", options: ["1", "2", "3", "4"], answer: "3", explanation: "FOUR dynasties collapsed: Habsburgs, Hohenzollerns, Ottoman sultanate, Romanovs." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "The Russian Revolution of 1917 had:", options: ["One revolution", "Two revolutions (February and October)", "Three revolutions", "No revolutions"], answer: "1", explanation: "There were TWO revolutions: February (spontaneous) and October (Bolshevik-led)." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "The leader of the Bolsheviks was:", options: ["Stalin", "Trotsky", "Lenin", "Kerensky"], answer: "2", explanation: "Lenin (real name Vladimir Ilich Ulyanov) led the Bolsheviks." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "The February Revolution resulted in:", options: ["Bolshevik takeover", "Tsar Nicholas II deposed", "Stalin becoming leader", "USSR formation"], answer: "1", explanation: "The February Revolution resulted in Tsar Nicholas II being deposed — ending the Romanov Dynasty." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "The October Revolution was led by:", options: ["Mensheviks", "Bolsheviks", "Tsarists", "Provisional Government"], answer: "1", explanation: "The October Revolution was led by the BOLSHEVIKS under Lenin." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "Bolshevik slogans included:", options: ["Liberty, Equality, Fraternity", "All Power to the Soviets! and Peace, Land and Bread!", "Blood and Iron", "Divide and Rule"], answer: "1", explanation: "Bolshevik slogans: 'All Power to the Soviets!' and 'Peace, Land and Bread!'" },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "The USSR was formed in:", options: ["1917", "1921", "1922", "1924"], answer: "2", explanation: "The Union of Soviet Socialist Republics (USSR) was formed in July 1922." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "Lenin died in:", options: ["1922", "1923", "1924", "1925"], answer: "2", explanation: "Lenin died in 1924 and was succeeded by Joseph Stalin." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "The League of Nations was founded in:", options: ["1918", "1920", "1922", "1929"], answer: "1", explanation: "The League of Nations was founded on January 10, 1920." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "The League of Nations was headquartered in:", options: ["Paris", "Geneva", "London", "New York"], answer: "1", explanation: "The League of Nations was headquartered in GENEVA, Switzerland." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "Which major power did NOT join the League of Nations?", options: ["Britain", "France", "USA", "Italy"], answer: "2", explanation: "The USA did NOT join the League of Nations." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "The League of Nations was proposed by:", options: ["Woodrow Wilson", "Winston Churchill", "David Lloyd George", "Georges Clemenceau"], answer: "0", explanation: "President Woodrow Wilson of the USA proposed the League of Nations." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "The Great Depression began with:", options: ["The start of WWI", "The Wall Street stock market crash of October 1929", "The end of WWII", "The Russian Revolution"], answer: "1", explanation: "The Great Depression began with the New York Wall Street stock market crash of October 1929." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "By 1933, US unemployment reached:", options: ["10%", "15%", "25%", "50%"], answer: "2", explanation: "Unemployment in the US rose to 25%, with 15 million Americans unemployed by 1933." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "Fascism was initially formed in:", options: ["Germany", "Italy", "Japan", "Spain"], answer: "1", explanation: "Fascism was initially formed in ITALY. Benito Mussolini established a Fascist state in 1922." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Fascism's leader in Italy was:", options: ["Hitler", "Mussolini", "Stalin", "Franco"], answer: "1", explanation: "Benito Mussolini was the leader of Italian Fascism." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Nazism was the ideology of:", options: ["Italy", "Germany", "Japan", "Spain"], answer: "1", explanation: "Nazism = National Socialist German Workers' Party, led by Adolf Hitler in Germany." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "Hitler came to power in:", options: ["1922", "1929", "1933", "1939"], answer: "2", explanation: "Hitler and the Nazis came to power in Germany in 1933." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "The term 'Fascism' is derived from:", options: ["'Fascio' (bundle of rods)", "'Fascist' (a type of sword)", "'Facile' (easy)", "'Face' (front)"], answer: "0", explanation: "The term comes from the Italian 'fascio' (bundle of rods) — symbolizing strength through unity." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "WWII was fought from:", options: ["1936–1941", "1939–1945", "1940–1944", "1941–1945"], answer: "1", explanation: "WWII was fought from 1939 to 1945." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "WWII began with Germany's invasion of:", options: ["France", "Poland", "Russia", "Britain"], answer: "1", explanation: "WWII began on September 1, 1939, when Germany invaded Poland." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "The Axis Powers in WWII included:", options: ["Britain, France, USA", "Germany, Italy, Japan", "Germany, USSR, Japan", "Italy, France, Japan"], answer: "1", explanation: "The Axis Powers = Germany, Italy, and Japan." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "The USA entered WWII after:", options: ["Germany invaded Poland", "Japan attacked Pearl Harbor", "Italy invaded Ethiopia", "The League of Nations collapsed"], answer: "1", explanation: "The USA entered WWII after Japan attacked Pearl Harbor in December 1941." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "The turning point battles on the Eastern Front were:", options: ["Marne and Somme", "Stalingrad and Kursk", "El Alamein and Tobruk", "Pearl Harbor and Midway"], answer: "1", explanation: "Stalingrad (1942/3) and Kursk (1943) were decisive Soviet victories and turning points." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "Atomic bombs were dropped on which Japanese cities?", options: ["Tokyo and Osaka", "Hiroshima and Nagasaki", "Kyoto and Nara", "Nagoya and Yokohama"], answer: "1", explanation: "The USA dropped atomic bombs on HIROSHIMA (Aug 6, 1945) and NAGASAKI (Aug 9, 1945)." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "Japan surrendered in:", options: ["May 1945", "August 1945", "September 1945", "December 1945"], answer: "2", explanation: "Japan unconditionally surrendered on September 2, 1945." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "Hitler committed suicide in:", options: ["1944", "1945", "1946", "1943"], answer: "1", explanation: "Hitler committed suicide on April 30, 1945." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "Approximately how many people died in WWII?", options: ["10 million", "20 million", "50 million", "100 million"], answer: "2", explanation: "About 50 million people (fighters and civilians) lost their lives in WWII." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Which region was called the 'powder keg' of Europe?", options: ["Iberian Peninsula", "Alsace-Lorraine", "Austria-Hungary", "The Balkan Peninsula"], answer: "3", explanation: "The Balkan Peninsula was called the 'powder keg' of Europe due to nationalist tensions." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "Why did France and Germany have tension before WWI?", options: ["France wanted to regain Alsace and Lorraine", "Germany wanted to ally with France", "France had surpassed Germany in industry", "Germany controlled French access to the North Sea"], answer: "0", explanation: "France wanted to avenge its defeat in the Franco-Prussian War (1870–71) and regain Alsace and Lorraine." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "The Zimmermann Telegram was significant because it:", options: ["Ended WWI", "Promised Mexico US territory in return for attacking USA", "Created the League of Nations", "Formed the Triple Alliance"], answer: "1", explanation: "Germany's foreign minister promised Mexico US territory in return for Mexican support against the USA." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "The Fourteen Points were proposed by:", options: ["Woodrow Wilson", "David Lloyd George", "Georges Clemenceau", "Vittorio Orlando"], answer: "0", explanation: "Woodrow Wilson's Fourteen Points were adopted into the Treaty of Versailles." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "The 'Big Four' at the Paris Peace Conference were:", options: ["Wilson (USA), Clemenceau (France), Lloyd George (Britain), Orlando (Italy)", "Stalin, Churchill, Roosevelt, Truman", "Hitler, Mussolini, Hirohito, Franco", "Lenin, Trotsky, Stalin, Kerensky"], answer: "0", explanation: "The Big Four: Woodrow Wilson, Georges Clemenceau, David Lloyd George, Vittorio Orlando." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "Which countries were NOT represented at the Versailles Conference?", options: ["Britain and France", "USA and Italy", "Russia and Germany", "Japan and Belgium"], answer: "2", explanation: "Russia (in civil war) and Germany (defeated) were NOT represented." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "The Russian Social Democratic Labour Party (RSDLP) was formed in:", options: ["1883", "1898", "1905", "1917"], answer: "1", explanation: "The RSDLP was formed in 1898. It later split into Bolsheviks and Mensheviks." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "The Bloody Sunday massacre marked the beginning of the violent phase of:", options: ["The 1905 Russian Revolution", "The 1917 February Revolution", "The 1917 October Revolution", "WWI"], answer: "0", explanation: "Bloody Sunday (1905) marked the beginning of the violent phase of the Russian Revolution of 1905." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "The October Manifesto (1905) turned Russia into:", options: ["A communist state", "A constitutional monarchy", "A republic", "A fascist state"], answer: "1", explanation: "Nicholas II issued the October Manifesto, turning Russia from absolute to constitutional monarchy." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "The Provisional Government after February 1917 was led first by:", options: ["Lenin", "George Lvov", "Alexander Kerensky", "Trotsky"], answer: "1", explanation: "The Provisional Government was led by George Lvov, then succeeded by Alexander Kerensky." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "The failure of the Provisional Government was due to:", options: ["It couldn't stop the war or fix food shortages", "It was too powerful", "It had no leaders", "It allied with Germany"], answer: "0", explanation: "It failed to meet people's demands — couldn't mitigate food shortage or end the war — losing public support." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "The Treaty of Brest-Litovsk (1918) resulted in:", options: ["Russia joining WWI", "Russia withdrawing from WWI", "Germany's defeat", "The formation of the USSR"], answer: "1", explanation: "Russia formally withdrew from WWI after signing the Treaty of Brest-Litovsk with Germany in 1918." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "The Cheka was:", options: ["A military alliance", "The secret police in Soviet Russia", "A political party", "A farming collective"], answer: "1", explanation: "The CHEKA was the secret police organized to suppress counter-revolutionaries." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "The New Economic Policy (NEP, 1921) allowed:", options: ["Private ownership of small businesses", "Complete state control", "No private ownership", "Only farming"], answer: "0", explanation: "NEP restored smaller enterprises to their owners, allowed peasants to sell grain for profit, and revived commerce." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "Stalin's Five-Year Plans aimed to:", options: ["Destroy industry", "Transform Russia into a modern industrial state", "Expand agriculture only", "Build more churches"], answer: "1", explanation: "The Five-Year Plans transformed Russia from a backward agricultural nation into a modern industrial state." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "Kulaks were:", options: ["Poor farmers", "Rich farmers who opposed collectivization", "Factory workers", "Soldiers"], answer: "1", explanation: "Kulaks were rich farmers who opposed forceful collectivization of farms." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "The League of Nations' primary goal was to:", options: ["Promote colonialism", "Maintain world peace", "Spread communism", "Promote capitalism"], answer: "1", explanation: "The League's primary goal was to maintain world peace through collective security and disarmament." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "The League of Nations' Executive Council had how many permanent members?", options: ["2", "4", "5", "10"], answer: "1", explanation: "The Executive Council had FOUR permanent members: Great Britain, France, Japan, and Italy." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "The League of Nations failed to prevent:", options: ["The Great Depression", "The Italian invasion of Ethiopia", "The Russian Revolution", "The American Civil War"], answer: "1", explanation: "The League failed to prevent the Italian invasion of Ethiopia (1935), among other conflicts." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "The Great Depression's impact on international trade was:", options: ["Trade increased", "Trade plunged by more than 50%", "Trade remained the same", "Trade ended completely"], answer: "1", explanation: "International trade plunged by more than 50% during the Great Depression." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "By 1933, approximately how many Americans were unemployed?", options: ["5 million", "10 million", "15 million", "25 million"], answer: "2", explanation: "By 1933, some 15 million Americans were unemployed." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Which TWO countries competed for power in Europe after WWI?", options: ["France and Germany", "USA and USSR", "Britain and Italy", "Japan and China"], answer: "1", explanation: "The USA and the USSR became the two superpowers after WWII. After WWI, France and Germany continued their rivalry." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "Mussolini came to power in Italy in:", options: ["1919", "1922", "1929", "1933"], answer: "1", explanation: "Mussolini established the Fascist State in Italy in 1922." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "The Weimar Republic was:", options: ["The German government established after WWI", "A Russian government", "An Italian government", "A Japanese government"], answer: "0", explanation: "The Weimar Republic was the government established in Germany after WWI." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Hitler wrote 'Mein Kampf' during:", options: ["WWI", "His imprisonment after the failed 1923 coup", "After becoming Chancellor", "During WWII"], answer: "1", explanation: "Hitler wrote Mein Kampf during his imprisonment after the failed 1923 coup attempt." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "The Munich Agreement (1938) allowed Germany to occupy:", options: ["Austria", "Sudetenland in Czechoslovakia", "Poland", "France"], answer: "1", explanation: "The Munich Agreement allowed Germany to occupy part of Czechoslovakia inhabited by German-speaking Sudeten." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "The Nazi-Soviet Non-Aggression Pact was signed in:", options: ["August 1939", "September 1939", "June 1941", "December 1941"], answer: "0", explanation: "Germany and the USSR signed the Nazi-Soviet Non-Aggression Pact in August 1939." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "The Battle of Britain resulted in:", options: ["German victory", "British resistance repulsing Nazi invasion", "US involvement", "Soviet victory"], answer: "1", explanation: "The effective British resistance repulsed the Nazi invasion during the Battle of Britain." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "Operation Barbarossa was the code name for:", options: ["German invasion of the USSR", "Allied invasion of France", "Japanese attack on Pearl Harbor", "Italian invasion of Ethiopia"], answer: "0", explanation: "Germany invaded the USSR in June 1941 — Operation Barbarossa." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "D-Day refers to:", options: ["The Allied invasion of Normandy (June 6, 1944)", "The bombing of Hiroshima", "The attack on Pearl Harbor", "Germany's surrender"], answer: "0", explanation: "D-Day = June 6, 1944, when Allied forces landed in Normandy, France." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "The Yalta Conference was held in:", options: ["February 1945", "May 1945", "August 1945", "December 1945"], answer: "0", explanation: "The Yalta Conference was held in February 1945 with Roosevelt, Churchill, and Stalin." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "The United Nations was formed in:", options: ["1942", "1943", "1945", "1946"], answer: "2", explanation: "The United Nations was established in 1945." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "The Cold War was between:", options: ["USA and USSR", "Britain and France", "Germany and Russia", "Japan and China"], answer: "0", explanation: "The Cold War was between the USA and the USSR (and their allies) after WWII." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "NATO was formed in:", options: ["1945", "1947", "1949", "1955"], answer: "2", explanation: "NATO (North Atlantic Treaty Organization) was formed in April 1949." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "The Warsaw Pact was formed in:", options: ["1949", "1950", "1955", "1960"], answer: "2", explanation: "The Warsaw Pact was formed in May 1955 by the Soviet Union and Eastern European communist states." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "The Marshall Plan aimed to:", options: ["Stop the spread of communism and help Europe recover", "Build nuclear weapons", "Expand the Soviet Union", "End the Cold War"], answer: "0", explanation: "The Marshall Plan provided economic and technical assistance to help Europe recover and stop the spread of communism." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "The Truman Doctrine (March 1947) aimed to:", options: ["Spread communism", "Stop communism's spread", "Unite Germany", "Rebuild the USSR"], answer: "1", explanation: "The Truman Doctrine was resolved to STOP COMMUNISM'S SPREAD." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "The Berlin Blockade (1948–49) was:", options: ["An economic treaty", "Soviet blockade of West Berlin", "A US military operation", "A trade agreement"], answer: "1", explanation: "Stalin imposed the Berlin Blockade (June 1948 – May 1949), prohibiting supplies from reaching West Berlin." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "The Berlin Airlift was a response to:", options: ["The Soviet blockade of West Berlin", "The formation of NATO", "The Korean War", "The Cuban Missile Crisis"], answer: "0", explanation: "The Berlin Airlift supplied West Berlin with food and supplies during the Soviet blockade." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "Two German states formed in 1949 were:", options: ["East Germany and West Germany", "North Germany and South Germany", "Prussia and Bavaria", "Austria and Germany"], answer: "0", explanation: "The German Federal Republic (West Germany) and German Democratic Republic (East Germany) were formed in 1949." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "All of the following were leaders of totalitarian governments in the 1930s and 1940s EXCEPT:", options: ["Joseph Stalin", "Francisco Franco", "Benito Mussolini", "Neville Chamberlin"], answer: "3", explanation: "Neville Chamberlain was a British Prime Minister (democratic), not a totalitarian leader." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "The United States entered WWII as a direct result of:", options: ["The attack on Pearl Harbor", "The invasion and division of France", "The invasion and division of Poland", "Attacks on US ships in the Atlantic"], answer: "0", explanation: "The USA entered WWII after Japan attacked Pearl Harbor in December 1941." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Which statement BEST explains why the League of Nations failed?", options: ["It had too much military power", "The USA never joined, and it had no enforcement power", "It was headquartered in Geneva", "It had too many members"], answer: "1", explanation: "The League failed because the USA never joined and it had no military force to enforce its decisions." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "Which country had the greatest impact on the war effort among non-European countries?", options: ["Japan", "USA", "India", "Brazil"], answer: "1", explanation: "The USA (non-European) had the greatest impact on the war effort, especially after 1917 (WWI) and 1941 (WWII)." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "Why did the February Revolution succeed quickly?", options: ["Military losses, food shortages, and soldiers joining protesters", "Bolshevik leadership", "Foreign intervention", "Tsar's abdication was voluntary"], answer: "0", explanation: "Military losses, food shortages, inflation, and soldiers joining protesters caused the quick success of the February Revolution." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "Which was NOT a cause of the rise of Fascism in Italy?", options: ["Treaty of Versailles disappointment", "Socio-economic crisis", "False aspirations", "Italy's victory in WWI"], answer: "3", explanation: "Italy was on the WINNING side in WWI, but it was disappointed with the peace settlement. Its victory was not a cause of Fascism's rise." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "The Great Depression contributed to WWII because:", options: ["It created economic and political instability that helped extremists rise", "It caused the Russian Revolution", "It ended the League of Nations", "It prevented the rise of Hitler"], answer: "0", explanation: "Economic troubles and political instability helped leaders like Hitler and Mussolini gain power and pursue aggression." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "Which event marked the beginning of WWII?", options: ["Germany's invasion of Poland (Sept 1, 1939)", "The Munich Agreement", "The Battle of Stalingrad", "Pearl Harbor attack"], answer: "0", explanation: "Germany invaded Poland on September 1, 1939, marking the beginning of WWII." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "The Battle of Stalingrad was significant because:", options: ["It was the last battle of WWI", "It marked the turning point on the Eastern Front", "It ended WWII", "It brought the USA into WWII"], answer: "1", explanation: "Stalingrad (1942/3) was a decisive Soviet victory — the turning point of the Eastern Front." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "The defeat of the Axis Powers was due to all of the following EXCEPT:", options: ["Axis forces were stretched over vast territories", "USA and USSR entered the war", "Allied coordination and resources", "Germany had superior atomic weapons"], answer: "3", explanation: "Germany did NOT have atomic weapons — the USA did. That is NOT a reason for Axis defeat." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "Which statement about WWII's effects is TRUE?", options: ["WWII prevented decolonization", "WWII hastened decolonization in Asia and Africa", "WWII had no effect on Europe", "WWII prevented the Cold War"], answer: "1", explanation: "WWII hastened decolonization in Asia and Africa. It also led to the USA-USSR rivalry (Cold War)." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "The 'Iron Curtain' referred to:", options: ["A physical barrier", "The political division of Europe between East and West", "A type of weapon", "A UN policy"], answer: "1", explanation: "The 'Iron Curtain' was the political, military, and ideological barrier dividing Europe into East and West during the Cold War." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "The architect of the containment policy was:", options: ["George Marshall", "George Kennan", "Harry Truman", "Winston Churchill"], answer: "1", explanation: "GEORGE KENNAN was the architect of the Containment Doctrine." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "The first country to benefit from the Truman Doctrine was:", options: ["Greece", "Vietnam", "Germany", "Syria"], answer: "0", explanation: "Greece was the first country to benefit — the Greek government suppressed the communist movement with American aid in 1949." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "The main goal of the Soviet Union during the Cold War was:", options: ["To unite Germany", "To spread communism", "To militarize Asian nations", "To expand capitalism"], answer: "1", explanation: "The main goal of the USSR was to SPREAD COMMUNISM." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "The Soviet satellite states were:", options: ["Western European countries aligned with the USA", "Eastern European countries aligned with the USSR", "Colonies of the USA", "Asian countries aligned with China"], answer: "1", explanation: "Soviet satellite states = Eastern European countries under heavy political, economic, and military influence of the Soviet Union." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "The Marshall Plan was rejected by the USSR and its satellites because:", options: ["They didn't need aid", "The USSR called it 'Dollar Imperialism' and banned participation", "They had better economies", "They were at war"], answer: "1", explanation: "Stalin denounced the Marshall Plan as 'Dollar Imperialism' and banned Soviet satellites from joining." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "The Molotov Plan was the Soviet response to:", options: ["NATO", "The Marshall Plan", "The Truman Doctrine", "The Korean War"], answer: "1", explanation: "The Molotov Plan was the Soviet response to the Marshall Plan — providing aid to Eastern European countries aligned with the USSR." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "The first artificial satellite in history was:", options: ["Apollo", "Explorer", "Sputnik", "Vostok"], answer: "2", explanation: "The Soviets launched Sputnik, the first artificial satellite, on October 4, 1957." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "Which was NOT a feature of the Cold War?", options: ["Espionage", "Foreign Aid", "Space Race", "Nuclear War"], answer: "3", explanation: "There was NO direct nuclear war between the USA and USSR — that's why it was called 'COLD' War." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "easy", stem: "List the main causes of WWI using the MANIA framework.", answer: "MANIA = causes of WWI:\n\nM — MILITARISM: European arms race; Germany had ~100 warships + 2 million soldiers by 1914.\n\nA — ALLIANCES: Triple Alliance (Germany, Austria-Hungary, Italy) and Triple Entente (Britain, France, Russia).\n\nN — NATIONALISM: France wanted revenge vs Germany (Alsace-Lorraine); Balkan nationalism vs Ottoman Turks.\n\nI — IMPERIALISM: Competition for colonies in Africa and Asia.\n\nA — ASSASSINATION: Archduke Franz Ferdinand assassinated by Gavrilo Princip at Sarajevo (June 28, 1914) — the IMMEDIATE cause.", explanation: "MANIA = 5 causes; assassination = immediate." },
    { id: "q102", type: "short", difficulty: "easy", stem: "Name the two military blocs in WWI and their members.", answer: "TRIPLE ALLIANCE (CENTRAL POWERS):\n• Germany\n• Austria-Hungary\n• Italy (left in 1915, joined Allies)\n\nTRIPLE ENTENTE (ALLIED POWERS):\n• Britain\n• France\n• Russia\n• More than 20 countries joined (USA, Japan, South Africa, Portugal, Rumania)", explanation: "Central Powers vs Allied Powers." },
    { id: "q103", type: "short", difficulty: "easy", stem: "Describe the consequences of WWI.", answer: "CONSEQUENCES OF WWI:\n\nHUMAN LOSS:\n• 8.5 million soldiers killed\n• 13 million civilians killed\n\nNEW TECHNOLOGIES:\n• Machine guns, airplanes, poison gas, U-Boats\n\nCOLLAPSE OF FOUR EMPIRES:\n1) Habsburgs (Austria-Hungary)\n2) Hohenzollerns (Germany)\n3) Ottoman Sultanate\n4) Romanovs (Russia)\n\nNEW STATES:\n• Estonia, Finland, Latvia, Lithuania\n\nSPANISH FLU (1918–19):\n• Deadly influenza pandemic\n\nSOCIAL CHANGES:\n• Women entered workforce\n• 19th Amendment (US women's vote, 1920)\n\nRUSSIAN REVOLUTION (1917):\n• Discontent with WWI helped bring about it\n\nTREATY OF VERSAILLES (1919):\n• Punished Germany\n• Created League of Nations", explanation: "Mass casualties, empire collapses, new states, flu pandemic, Versailles." },
    { id: "q104", type: "short", difficulty: "easy", stem: "Explain the main features of the Treaty of Versailles (1919).", answer: "TREATY OF VERSAILLES (June 28, 1919):\n\n1) Between Germany and Allied powers\n\n2) Adopted Wilson's Fourteen Points\n\n3) Created LEAGUE OF NATIONS\n\n4) PUNISHED GERMANY:\n• Placed sole responsibility for war on Germany\n• Required Germany to pay REPARATIONS\n• Severe military restrictions\n• Lost territories (Africa + Pacific became mandates)\n\n5) Big Four = Wilson (USA), Clemenceau (France), Lloyd George (Britain), Orlando (Italy)\n\n6) Russia NOT represented (civil war)\n\n7) Germany NOT represented\n\nSIGNIFICANCE: Created lasting German resentment that contributed to WWII.", explanation: "Punished Germany; created League; German resentment." },
    { id: "q105", type: "short", difficulty: "medium", stem: "Compare the February and October Revolutions of 1917.", answer: "FEBRUARY REVOLUTION:\n• SPONTANEOUS protest movement\n• Huge masses of people\n• Massive strikes + demonstrations\n• Soldiers joined people\n• Result: Tsar Nicholas II deposed; Romanov Dynasty ended\n• Provisional Government formed (Lvov, Kerensky)\n\nOCTOBER REVOLUTION:\n• BOLSHEVIK-LED popular insurrection (Oct 25, 1917)\n• Led by Lenin\n• Slogans: 'All Power to the Soviets!' and 'Peace, Land and Bread!'\n• Provisional Government ended\n• Bolsheviks seized power\n• Lenin = Premier; Trotsky = War Minister\n\nKEY DIFFERENCE:\n• February = spontaneous (against Tsar)\n• October = organized (against Provisional Government)", explanation: "Feb = spontaneous; Oct = Bolshevik-led." },
    { id: "q106", type: "short", difficulty: "medium", stem: "Describe the main measures taken by the Bolsheviks after October 1917.", answer: "BOLSHEVIK MEASURES AFTER OCTOBER 1917:\n\n1) INDUSTRY:\n• Workers organized to take over factories\n• Industry nationalized\n• 8-hour working day introduced by law\n\n2) LAND:\n• Peasants directed to seize nobles' estates (Oct 1917 decree)\n• Land confiscated from landlords → given to peasants\n• Solved the age-old agrarian problem\n\n3) PEACE:\n• Decree on Peace (Oct 1917)\n• Russia withdrew from WWI\n• Signed Treaty of Brest-Litovsk with Germany (1918)\n\n4) NEW ECONOMIC POLICY (NEP, 1921):\n• Restored smaller enterprises to owners\n• Allowed peasants to sell grain for profit\n• Revived commerce\n\n5) NEW STATE:\n• USSR formed (July 1922)\n• Secret police (CHEKA) organized", explanation: "Factories, land, peace; NEP; USSR." },
    { id: "q107", type: "short", difficulty: "medium", stem: "Why did the League of Nations fail?", answer: "WHY THE LEAGUE OF NATIONS FAILED:\n\n1) USA DID NOT JOIN:\n• US Congress refused to be legally bound to intervene in European conflicts\n• The most powerful nation was absent\n\n2) NO MILITARY FORCE:\n• League had no army to enforce decisions\n\n3) MEMBERS HESITANT:\n• In the 1930s, League members were hesitant to strongly condemn Japanese, Italian, and German aggression\n\n4) FAILED TO INTERVENE:\n• Italian invasion of Ethiopia (1935)\n• Spanish Civil War (1936–39)\n• Second Sino-Japanese War (1937+)\n\n5) FAILED TO PREVENT WWII\n\n6) CONTINUED TO OPERATE UNTIL 1946 (but ineffective)\n\nCONCLUSION: The League was viewed as weak, ineffective, and essentially powerless.", explanation: "USA didn't join; no military force; failed to stop aggression." },
    { id: "q108", type: "short", difficulty: "medium", stem: "Describe the causes and impacts of the Great Depression.", answer: "CAUSES:\n\n1) NEW YORK WALL STREET STOCK MARKET CRASH (October 1929)\n\n2) Overproduction and underconsumption\n\n3) Bank failures\n\n4) Weak economic policies\n\nIMPACTS:\n\n1) PERSONAL INCOME, TAX REVENUE, PROFITS, PRICES DROPPED\n\n2) INTERNATIONAL TRADE plunged by more than 50%\n\n3) UNEMPLOYMENT:\n• USA = 25%\n• Some countries = up to 33%\n\n4) CONSTRUCTION virtually halted\n\n5) CROP PRICES fell by about 60%\n\n6) By 1933:\n• 15 million Americans unemployed\n• Nearly half of US banks failed\n\n7) CONTRIBUTED TO RISE OF FASCISM/NAZISM:\n• Economic desperation → extremist leaders\n• Hitler and Mussolini gained power\n\nCONCLUSION: The Great Depression was the worst economic downturn in the history of the industrialized world.", explanation: "1929 crash; massive unemployment; contributed to extremism." },
    { id: "q109", type: "short", difficulty: "medium", stem: "Compare Fascism and Nazism.", answer: "SIMILARITIES:\n• Both FAR-RIGHT AUTHORITARIAN ideologies\n• Both emerged in early 20th century\n• Both TOTALITARIAN ONE-PARTY STATES\n• Both led by DICTATORS\n• Both emphasized MOBILIZATION of society for armed conflict\n• Both PREOCCUPIED with racist ideologies\n• Both CAUSED WWII\n\nDIFFERENCES:\n• FASCISM = Italy; leader BENITO MUSSOLINI; came to power 1922\n• NAZISM = Germany; leader ADOLF HITLER; came to power 1933\n\n• Fascism term = from 'fascio' (bundle of rods) = strength through unity\n• Nazism = National Socialist German Workers' Party (NSDAP) = included anti-Semitic ideology\n\n• Italy = Fascism emerged from post-WWI disappointment\n• Germany = Nazism emerged from Versailles grievance + Weimar weakness\n\nCONCLUSION: Both were totalitarian and caused WWII; differences are mostly national in origin.", explanation: "Both totalitarian; Italy vs Germany; Mussolini vs Hitler." },
    { id: "q110", type: "short", difficulty: "medium", stem: "What were the causes of the rise of Fascism in Italy?", answer: "CAUSES OF FASCISM IN ITALY:\n\n1) TREATY OF VERSAILLES DISAPPOINTMENT:\n• Italy did NOT get share in German overseas territories\n• Allies promised Eritrea + Trieste, then backed out\n• Grievance against Allies\n\n2) SOCIO-ECONOMIC CONDITIONS:\n• Terrible confusion (1919)\n• Economic structure collapsed due to war\n• Natural resources scarce\n• Mussolini claimed to save Italy from communism\n\n3) FALSE ASPIRATIONS:\n• Disappointment after Peace Settlement\n• Mussolini exploited this to unite people\n• People felt high ambitions could be realized under Fascism\n\n4) MUSSOLINI'S LEADERSHIP:\n• Founded Fascist Party (1919)\n• Established Fascist State (1922)\n• Known as 'Duce' (leader)\n\nIMPACT:\n• Totalitarianism\n• Territorial expansion\n• Aggressive foreign policy\n• Led to WWII", explanation: "Versailles disappointment + socio-economic crisis + Mussolini's exploitation." },
    { id: "q111", type: "short", difficulty: "medium", stem: "What were the causes of the rise of Nazism in Germany?", answer: "CAUSES OF NAZISM IN GERMANY:\n\n1) WAR AND PEACE SETTLEMENT:\n• Versailles Treaty = 'dictated peace' against Germany\n• Germany left disillusioned and crushed spiritually and materially\n\n2) FRANCE'S HOSTILE ATTITUDE:\n• Quarrels over Ruhr, Rhineland occupation, Saar\n• Reparations burden\n\n3) SECURITY AND DISARMAMENT DEBATE angered Germans\n\n4) WEIMAR REPUBLIC'S WEAKNESS:\n• Accepted unfair treaties\n• Unable to assert itself in international affairs\n\n5) ECONOMIC CRISIS:\n• Great Depression (1929+)\n• Millions of middle-class Germans dissatisfied\n\n6) HITLER'S LEADERSHIP:\n• Tried 1923 coup — FAILED\n• Wrote 'Mein Kampf' in prison (published 1926)\n• Became Chancellor 1933\n• Nazi Party backed by landed aristocracy\n\n7) ANTI-SEMITIC PROPAGANDA:\n• Blamed Jews for Germany's problems\n• Effective for middle-class Germans", explanation: "Versailles + Weimar weakness + Depression + Hitler's leadership." },
    { id: "q112", type: "short", difficulty: "medium", stem: "Describe the causes and course of WWII.", answer: "CAUSES OF WWII:\n\n1) RISE OF FASCISM/NAZISM/MILITARISM:\n• German resentment of Versailles\n• Italian ambitions for empire\n• Japanese expansionism\n\n2) GREAT DEPRESSION:\n• Economic troubles + political instability\n\n3) FAILURE OF WESTERN POWERS:\n• British/French APPEASEMENT\n• US ISOLATION\n• Encouraged Fascist aggression\n\n4) JAPANESE AGGRESSION:\n• 1931 — invaded Manchuria\n• 1937 — Sino-Japanese War\n\n5) GERMAN AGGRESSION:\n• 1933 — withdrew from League\n• 1936 — reoccupied Rhineland\n• 1938 — annexed Austria (Anschluss)\n• 1939 — annexed Czechoslovakia\n\n6) IMMEDIATE CAUSE:\n• Sept 1, 1939 — Germany invaded Poland\n• Sept 3, 1939 — Britain and France declared war\n\nCOURSE:\n• 1939–40: Blitzkrieg; France fell\n• 1941: Germany invaded USSR; Japan attacked Pearl Harbor\n• 1942–43: Stalingrad + Kursk turning points\n• 1944: D-Day (June 6); France liberated\n• 1945: Hitler suicide (April 30); Germany surrendered; atomic bombs; Japan surrendered (Sept 2)", explanation: "Fascism + Depression + appeasement; Poland invasion; turning points." },
    { id: "q113", type: "short", difficulty: "medium", stem: "Why were the Axis Powers defeated in WWII?", answer: "REASONS FOR AXIS DEFEAT:\n\n1) STRETCHED FORCES:\n• Axis powers had forces spread over VAST TERRITORIES\n• Could not protect what they controlled\n\n2) USA + USSR ENTERED:\n• Military balance shifted to Allies\n• Nazi Germany and Japan made the MISTAKE of provoking these powers\n\n3) ALLIED COORDINATION:\n• Coordinated military operations\n• Mighty economic resources\n• Enormous manpower\n\n4) SOVIET RESISTANCE:\n• Implacable resistance\n• Victories at Stalingrad (1942/3) and Kursk (1943)\n\n5) BRITISH RESISTANCE:\n• Repulsed Nazi invasion in Battle of Britain\n\n6) ITALY'S WEAKNESS:\n• Mussolini overthrown (1943)\n\n7) HITLER'S MISTAKES:\n• Invaded Russia (1941) before defeating Britain\n• Declared war on USA (Dec 1941)\n\nCONCLUSION: Axis defeat was due to stretched resources, the entry of USA/USSR, and superior Allied coordination.", explanation: "Stretched forces + USA/USSR entry + Allied coordination." },
    { id: "q114", type: "short", difficulty: "hard", stem: "Compare the causes and consequences of WWI and WWII.", answer: "WWI (1914–1918) vs WWII (1939–1945):\n\nCAUSES:\n• WWI: MANIA (Militarism, Alliances, Nationalism, Imperialism, Assassination)\n• WWII: Rise of Fascism/Nazism, Great Depression, appeasement, aggression of Axis powers\n\nSIMILAR CAUSES:\n• Nationalism\n• Imperialism\n• Militarism\n• Alliance systems\n\nDIFFERENT CAUSES:\n• WWI: Assassination of Franz Ferdinand (immediate)\n• WWII: German invasion of Poland (immediate)\n\nCONSEQUENCES:\n\nWWI:\n• 21.5 million dead (8.5 military + 13 civilian)\n• 4 empires collapsed\n• Treaty of Versailles\n• League of Nations formed (but failed)\n• Russian Revolution\n• New states in Eastern Europe\n\nWWII:\n• ~50 million dead\n• Massive material destruction\n• USA and USSR became superpowers\n• Cold War began\n• United Nations formed\n• Decolonization accelerated\n• Atomic age began\n\nCOMMON CONSEQUENCES:\n• Mass casualties\n• Destruction\n• New international organizations\n• Territorial changes\n\nCONCLUSION: WWII was deadlier and more consequential, but both wars reshaped the world.", explanation: "Similar causes; WWII deadlier; UN vs League." },
    { id: "q115", type: "short", difficulty: "hard", stem: "How did the League of Nations' failure lead to WWII?", answer: "LEAGUE'S FAILURE → WWII CONNECTION:\n\n1) NO ENFORCEMENT POWER:\n• League had no military force\n• Aggressors were not stopped\n\n2) USA ABSENT:\n• Most powerful nation did not join\n• Weakened League's authority\n\n3) APPEASEMENT:\n• Britain and France hesitant to condemn aggression\n• Encouraged Hitler and Mussolini\n\n4) FAILED IN KEY TESTS:\n• 1931 — Japan invaded Manchuria; League condemned but Japan withdrew and kept Manchuria\n• 1935 — Italy invaded Ethiopia; League did not stop it\n• 1936 — Spanish Civil War; League did not intervene\n• 1937 — Japan invaded China; League did not act\n\n5) MESSAGE TO AGGRESSORS:\n• League = weak, ineffective\n• Hitler, Mussolini, Japanese militarists felt free to expand\n\n6) MUNICH AGREEMENT (1938):\n• Britain/France appeased Hitler\n• Allowed annexation of Sudetenland\n• Hitler saw weakness → invaded Poland (1939)\n\nCONCLUSION: The League's failure to stop aggression directly encouraged the Axis powers and contributed to WWII. This is why the UN (1945) was given stronger enforcement powers.", explanation: "League weak → aggression unchecked → WWII." },
    { id: "q116", type: "short", difficulty: "hard", stem: "Analyze the impact of the Russian Revolution on world history.", answer: "IMPACT OF RUSSIAN REVOLUTION:\n\n1) FIRST COMMUNIST STATE:\n• USSR was the world's first communist state\n• Inspired communist movements worldwide\n\n2) INSPIRATION FOR COLONIZED PEOPLES:\n• Inspired anti-colonial movements in Africa and Asia\n• Showed that a powerful empire could be overthrown\n\n3) SUPPORT FOR NATIONAL LIBERATION:\n• USSR became strong supporter of national liberation struggles in Africa, Asia, Latin America\n\n4) CHANGED GLOBAL BALANCE OF POWER:\n• Strengthened USSR after WWII\n• Became one of two superpowers\n\n5) COLD WAR:\n• USSR's communist ideology vs USA's capitalism\n• Cold War shaped international relations for decades\n\n6) WWII:\n• USSR's industrialization (Stalin's Five-Year Plans) helped defeat Nazi Germany\n\n7) IDEOLOGICAL DIVISION:\n• Divided the world into capitalist vs communist camps\n\n8) DECOLONIZATION:\n• USSR supported anti-colonial movements\n• Contributed to the end of European empires\n\n9) TERROR AND DICTATORSHIP:\n• Cheka (secret police)\n• Stalin's purges\n• Showed the dark side of communist regimes\n\nCONCLUSION: The Russian Revolution was one of the most consequential events of the 20th century, shaping the Cold War and decolonization.", explanation: "First communist state; inspired decolonization; shaped Cold War." },
    { id: "q117", type: "short", difficulty: "hard", stem: "Compare the League of Nations and the United Nations.", answer: "LEAGUE OF NATIONS (1920–1946) vs UNITED NATIONS (1945+):\n\nLEAGUE OF NATIONS:\n• Founded: January 10, 1920\n• Headquartered: Geneva, Switzerland\n• Proposed by: Woodrow Wilson\n• USA: DID NOT JOIN\n• Military force: NONE\n• Successes: Mosul (1926), Colombia-Peru\n• Failures: Italian invasion of Ethiopia, Spanish Civil War, WWII\n• Replaced by: UN (1946)\n• Members: ~60 at peak\n\nUNITED NATIONS:\n• Founded: 1945\n• Headquartered: New York (main), Geneva, Vienna, Nairobi\n• Proposed by: Allied powers\n• USA: JOINED (founding member)\n• Military force: Peacekeeping operations\n• Successes: many peace missions, humanitarian aid\n• Failures: some conflicts (Rwanda, Syria)\n• Members: 193 (current)\n• Six official languages: Arabic, Chinese, English, French, Russian, Spanish\n\nKEY DIFFERENCES:\n• USA joined UN (not League)\n• UN has stronger enforcement mechanisms\n• UN has peacekeeping forces\n• UN has more members\n\nSIMILARITIES:\n• Both aimed to maintain peace\n• Both had General Assembly + Security Council\n• Both faced limitations\n\nCONCLUSION: The UN learned from the League's mistakes — especially USA membership and enforcement power.", explanation: "USA joined UN; stronger enforcement; 193 members." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Which event in this unit was most significant, and why?", answer: "Answers may vary, but the strongest answers identify TWO OR THREE key events:\n\n1) WWI (1914–1918):\n• Massive casualties (21.5 million)\n• Four empires collapsed\n• Treaty of Versailles shaped the 20th century\n• Led to WWII\n\n2) RUSSIAN REVOLUTION (1917):\n• First communist state\n• Inspired global movements\n• Shaped Cold War\n\n3) WWII (1939–1945):\n• Deadliest war (~50 million)\n• USA and USSR became superpowers\n• UN formed\n• Cold War began\n• Atomic age\n\n4) RISE OF FASCISM/NAZISM:\n• Caused WWII\n• Holocaust\n• Redefined evil in modern history\n\n5) LEAGUE OF NATIONS' FAILURE:\n• Directly led to WWII\n• Lesson learned → UN\n\nSTRONGEST ARGUMENT:\n\nWWII was the most significant because:\n• It was the DEADLIEST war in history\n• It created the MODERN WORLD ORDER (USA + USSR superpowers)\n• It led to the UNITED NATIONS\n• It began the COLD WAR\n• It ended the European colonial empires\n• It introduced the ATOMIC AGE\n\nAlternatively, WWI was most significant because it CAUSED WWII and set the stage for everything else.", explanation: "WWII = most significant due to scale and consequences." },
    { id: "q119", type: "short", difficulty: "hard", stem: "Why did the USA become a superpower after WWII?", answer: "WHY THE USA BECAME A SUPERPOWER AFTER WWII:\n\n1) ECONOMIC STRENGTH:\n• American economy strong and healthy\n• Not damaged by war (unlike Europe, USSR)\n• Industrial capacity intact\n\n2) MILITARY POWER:\n• Sole possessor of atomic weapons at first\n• Strong navy, air force, army\n\n3) GLOBAL INFLUENCE:\n• Strengthened military and political influence in Europe and Asia-Pacific\n\n4) BRETTON WOODS SYSTEM:\n• Dollar became global reserve currency\n• IMF and World Bank headquartered in Washington\n\n5) MARSHALL PLAN:\n• Provided aid to rebuild Europe\n• Expanded American influence\n\n6) NATO LEADERSHIP:\n• Led Western military alliance\n\n7) IDEOLOGICAL LEADERSHIP:\n• Champion of capitalism and democracy vs Soviet communism\n\n8) SCIENTIFIC/TECHNOLOGICAL LEADERSHIP:\n• Manhattan Project (atomic bomb)\n• Space program\n\n9) IMMIGRATION OF SCIENTISTS:\n• European scientists fled to USA (Einstein, etc.)\n\n10) DECOLONIZATION:\n• USA positioned as anti-colonial power\n• Built relationships with newly independent states\n\nCONCLUSION: The USA emerged from WWII as the world's leading economic, military, and political power — a status it largely still holds.", explanation: "Economic strength + atomic monopoly + Marshall Plan + NATO." },
    { id: "q120", type: "short", difficulty: "hard", stem: "What lessons can be learned from the World Wars?", answer: "LESSONS FROM THE WORLD WARS:\n\n1) NATIONALISM CAN BE DESTRUCTIVE:\n• Extreme nationalism led to war\n• Need for balanced patriotism\n\n2) ALLIANCES CAN ESCALATE CONFLICTS:\n• Alliance systems dragged nations into war\n• Need for diplomacy\n\n3) APPEASEMENT DOES NOT WORK:\n• Britain/France appeased Hitler\n• Led to WWII\n• Aggressors must be stopped early\n\n4) INTERNATIONAL COOPERATION IS ESSENTIAL:\n• League of Nations failed\n• UN created to learn from mistakes\n\n5) ECONOMIC INSTABILITY BREEDS EXTREMISM:\n• Great Depression → Fascism/Nazism\n• Need for economic stability\n\n6) TOTALITARIANISM IS DANGEROUS:\n• Hitler, Mussolini, Stalin\n• Need for democratic institutions\n\n7) HUMAN RIGHTS MUST BE PROTECTED:\n• Holocaust — 6 million Jews killed\n• Universal Declaration of Human Rights (1948)\n\n8) NUCLEAR WEAPONS ARE CATASTROPHIC:\n• Hiroshima + Nagasaki\n• Need for arms control\n\n9) DECOLONIZATION IS INEVITABLE:\n• Empires collapsed after WWII\n• Self-determination is a basic right\n\n10) HISTORY MUST BE REMEMBERED:\n• 'Never again' — Holocaust remembrance\n• Education about past atrocities\n\nCONCLUSION: The world wars taught humanity painful but essential lessons — lessons that shaped the UN, human rights, and the post-war international order.", explanation: "Nationalism, appeasement, cooperation, human rights, nuclear danger." },
  ],
};