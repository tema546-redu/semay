import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 HISTORY — UNIT 5
// GLOBAL AND REGIONAL DEVELOPMENTS SINCE 1945
// Source: Grade 10 History Student Textbook (pp. 112–143)
// For: Abenezer (Abatu) — Grade 10
// Style: mastery-lab (Date Ladder, Name→Role, Acronym Decoder,
// Treaty tables, Cause→Event→Result, exam traps, model short answers)
// ============================================================

export const g10HistoryCh5: Chapter = {
  id: "ch5",
  number: 5,
  title: "Global and Regional Developments Since 1945",
  titleAm: "ከ1945 ጀምሮ ዓለም አቀፍና ክልላዊ እድገቶች",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS UNIT
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Unit (Your Route to 100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this unit is DATE-HEAVY and NAME-HEAVY. Exams love chronology traps and mixing up people/acronyms.\n\n" +
        "SIX big parts:\n" +
        "1) United Nations (formation, organs, principles)\n" +
        "2) Superpowers & Cold War (Truman Doctrine, Marshall Plan, Iron Curtain, NATO/Warsaw, Arms Race)\n" +
        "3) Asia (Japan recovery, China 1949, Korea 1950–53, Vietnam 1st & 2nd Indochina Wars)\n" +
        "4) Non-Aligned Movement (NAM)\n" +
        "5) Arab–Israeli conflict (1948, 1956, 1967, 1973)\n" +
        "6) Collapse of the USSR (Gorbachev, 1989–1991)\n\n" +
        "Master these FIVE must-know items:\n" +
        "• UN founded 1945; 5 permanent Security Council members have VETO\n" +
        "• Cold War = USA (capitalism) vs USSR (communism) — never direct hot war\n" +
        "• Containment = stop communism (Truman Doctrine + Marshall Plan)\n" +
        "• Korea divided at 38th parallel; Vietnam at 17th parallel\n" +
        "• Gorbachev’s glasnost + perestroika → collapse of Eastern Bloc & USSR",
      bodyAm:
        "አባቱ፣ ይህ ክፍል ቀንና ስም የበዛ ነው።\n" +
        "ስድስት ትላልቅ ክፍሎች፦ UNO፣ ቀዝቃዛ ጦርነት፣ እስያ፣ NAM፣ አረብ-እስራኤል፣ የዩኤስኤስአር ውድቀት።",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Date Ladder (memorise this = half the exam)",
          titleAm: "ደረጃ 1 · የቀን መሰላል",
          body:
            "1941 – Atlantic Charter (Roosevelt + Churchill)\n" +
            "1942 – Declaration by United Nations (26 countries)\n" +
            "1945 – UN Charter signed San Francisco (26 June); 51 original members\n" +
            "1946 – Churchill ‘Iron Curtain’ speech (Fulton)\n" +
            "1947 – Truman Doctrine (March); Marshall Plan announced\n" +
            "1948 – Berlin Blockade begins (June); Israel declared (14 May)\n" +
            "1949 – NATO founded (April); FRG (West Germany) + GDR (East Germany); USSR atomic bomb; PRC founded (Oct)\n" +
            "1950 – Korean War begins (June); Sino-Soviet Treaty\n" +
            "1953 – Korean War ends (Panmunjom); Stalin dies\n" +
            "1954 – Geneva Accords (Vietnam divided at 17th parallel); SEATO formed; Dien Bien Phu\n" +
            "1955 – Warsaw Pact; Bandung Conference (NAM roots)\n" +
            "1956 – Suez Crisis / 2nd Arab–Israeli War\n" +
            "1957 – Sputnik launched (USSR)\n" +
            "1961 – First NAM Conference (Belgrade)\n" +
            "1967 – Six-Day War\n" +
            "1971 – PRC admitted to UN (Nationalists expelled)\n" +
            "1973 – Yom Kippur War; Paris Peace Accords (Vietnam)\n" +
            "1975 – North Vietnam unifies country; Saigon → Ho Chi Minh City\n" +
            "1976 – Socialist Republic of Vietnam proclaimed\n" +
            "1985 – Gorbachev becomes leader\n" +
            "1989 – Eastern European revolutions (Berlin Wall falls Dec)\n" +
            "1991 – USSR collapses; 15 independent states",
          bodyAm:
            "1945 = UNO። 1947 = Truman + Marshall። 1949 = NATO + PRC። 1950–53 = ኮሪያ። 1954 = ጄኔቫ (ቬትናም)። 1967 = ስድስት ቀን። 1991 = ዩኤስኤስአር ፈረሰ።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Name → Role table (never mix these up)",
          titleAm: "ደረጃ 2 · ስም → ሚና",
          body:
            "• Franklin D. Roosevelt – coined ‘United Nations’; Atlantic Charter\n" +
            "• Winston Churchill – Iron Curtain speech 1946\n" +
            "• Harry Truman – Truman Doctrine 1947\n" +
            "• George Marshall – Marshall Plan (European Recovery Program)\n" +
            "• George Kennan – architect of Containment\n" +
            "• Joseph Stalin – satellite states; Berlin Blockade; rejected Marshall Plan as ‘Dollar Imperialism’\n" +
            "• Konrad Adenauer – first Chancellor of West Germany (FRG)\n" +
            "• Mao Zedong (Mao Tse Tung) – founded PRC Oct 1949\n" +
            "• Chiang Kai-shek – Nationalist (KMT) leader; fled to Taiwan\n" +
            "• Kim Il Sung – founder/president of North Korea\n" +
            "• Syngman Rhee – first president of South Korea\n" +
            "• Ho Chi Minh – leader of Viet Minh; founder of North Vietnam\n" +
            "• Gamal Abdel Nasser – nationalised Suez Canal 1956; NAM founder\n" +
            "• Yasser Arafat – Chairman of PLO 1969–2004\n" +
            "• Mikhail Gorbachev – glasnost + perestroika; last Soviet leader\n" +
            "• Joseph Broz Tito, Jawaharlal Nehru, Sukarno, Kwame Nkrumah – NAM founders",
          bodyAm:
            "Truman = Doctrine። Marshall = Plan። Kennan = Containment። Mao = PRC። Ho Chi Minh = ቬትናም። Gorbachev = glasnost + perestroika።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Acronym Decoder",
          titleAm: "ደረጃ 3 · አክሮኒም",
          body:
            "UNO / UN = United Nations Organization\n" +
            "NATO = North Atlantic Treaty Organization (1949)\n" +
            "Warsaw Pact = Soviet military bloc (1955)\n" +
            "SEATO = Southeast Asia Treaty Organization (1954)\n" +
            "NAM = Non-Aligned Movement\n" +
            "PRC = People’s Republic of China\n" +
            "FRG = Federal Republic of Germany (West)\n" +
            "GDR = German Democratic Republic (East)\n" +
            "ICBM = Intercontinental Ballistic Missile\n" +
            "PLO = Palestine Liberation Organization\n" +
            "Viet Minh = Vietnamese Independence League (Ho Chi Minh)\n" +
            "Viet Cong / NLF = National Liberation Front (South Vietnam)\n" +
            "CCP = Chinese Communist Party\n" +
            "KMT = Kuomintang (Nationalists)",
          bodyAm:
            "NATO = ምዕራብ። Warsaw = ምስራቅ። NAM = ገለልተኛ። PRC = ኮሚኒስት ቻይና።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Cause → Event → Result chains",
          titleAm: "ደረጃ 4 · ምክንያት → ክስተት → ውጤት",
          body:
            "1. Fear of Soviet expansion in Greece/Turkey → Truman Doctrine 1947 → Containment policy + $400 m aid\n" +
            "2. War-torn Europe + fear of communism → Marshall Plan ($17 bn) → economic recovery of 16 countries; Stalin rejects as ‘Dollar Imperialism’ → Molotov Plan\n" +
            "3. Currency reform in West Berlin → Berlin Blockade 1948–49 → Berlin Airlift → two German states (FRG + GDR) + NATO + Warsaw Pact\n" +
            "4. Japanese defeat + 38th parallel division → North invades South June 1950 → Korean War → armistice 1953; Korea still divided; SEATO formed\n" +
            "5. French colonial rule + Japanese occupation → First Indochina War 1946–54 → Dien Bien Phu → Geneva Accords → Vietnam divided at 17th parallel\n" +
            "6. Domino Theory + fear of communism → US involvement in Vietnam → Second Indochina War → 1975 communist victory; unified Socialist Republic of Vietnam\n" +
            "7. Holocaust + Zionism + Balfour Declaration → UN Partition 1947 → Israel declared 14 May 1948 → First Arab–Israeli War (Nakba)\n" +
            "8. Gorbachev glasnost + perestroika + economic failure → 1989 Eastern European revolutions → 1991 USSR collapses into 15 states",
          bodyAm:
            "Truman Doctrine → Containment። Marshall → ምዕራብ አውሮፓ። Berlin Blockade → ሁለት ጀርመን። ኮሪያ → 38ኛ። ቬትናም → 17ኛ። 1991 = ዩኤስኤስአር ፈረሰ።",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard — before you submit",
          titleAm: "⚠ የፈተና መስፈርት",
          body:
            "• UN founded 1945 (Charter 26 June San Francisco); original 51 members\n" +
            "• 5 permanent Security Council members = USA, Britain, France, Russia (USSR), China — each has VETO\n" +
            "• USA did NOT join League of Nations, but DID join UN\n" +
            "• Cold War = political/military tension WITHOUT direct large-scale war between USA & USSR\n" +
            "• Iron Curtain = Churchill 1946\n" +
            "• Containment architect = George Kennan (not Marshall)\n" +
            "• Korea = 38th parallel; Vietnam = 17th parallel\n" +
            "• PRC admitted to UN in 1971 (not 1949)\n" +
            "• NAM first conference = Belgrade 1961 (Bandung 1955 was the root)\n" +
            "• Israel declared 14 May 1948; first war 15 May 1948\n" +
            "• USSR collapsed 1991 (not 1989 — 1989 was Eastern Europe)",
          bodyAm:
            "Veto = 5 ቋሚ አባላት። Containment = Kennan። 38ኛ = ኮሪያ። 17ኛ = ቬትናም። 1991 = ዩኤስኤስአር።",
        },
      ],
    },

    // ============================================================
    // 5.1 THE UNITED NATIONS
    // ============================================================
    {
      id: "n1",
      title: "5.1 The United Nations Organization: Formation, Mission, Principles and Achievements",
      titleAm: "5.1 የተባበሩት መንግሥታት ድርጅት",
      body:
        "The United Nations was established in 1945 to replace the failed League of Nations. It currently has 193 member states. Its mission is driven by the goals and ideals in its Charter.",
      bodyAm:
        "UNO በ1945 ተመሠረተ። አሁን 193 አባላት አሉት።",
      children: [
        {
          id: "n1-1",
          title: "📅 Timeline of UN Formation",
          titleAm: "📅 የUNO አመሰራረት",
          body:
            "• August 1941 – Atlantic Charter (Roosevelt + Churchill)\n" +
            "• 1 January 1942 – Declaration by United Nations (26 countries) — name ‘United Nations’ first used\n" +
            "• Oct/Dec 1943 – Moscow and Tehran conferences\n" +
            "• Aug–Oct 1944 – Dumbarton Oaks (Big Four draft the Charter)\n" +
            "• 26 June 1945 – 50 nations sign Charter in San Francisco; Poland signs later → 51 original members\n" +
            "• Official languages: Arabic, Chinese, English, French, Russian, Spanish (Arabic added 1973)\n" +
            "• Working languages of Secretariat: English + French",
          bodyAm:
            "1941 Atlantic Charter። 1942 Declaration። 1945 San Francisco Charter። 51 መጀመሪያ አባላት።",
        },
        {
          id: "n1-2",
          title: "📌 Four Main Goals of the UN",
          titleAm: "📌 አራት ዋና ግቦች",
          body:
            "1. Maintain international peace and security\n" +
            "2. Foster friendly relations among nations\n" +
            "3. Cooperate in solving international economic, social, cultural and humanitarian problems; promote human rights and fundamental freedoms\n" +
            "4. Protect the Earth and its environment",
          bodyAm:
            "ሰላም፣ ጓደኝነት፣ ትብብር፣ ሰብአዊ መብት፣ አካባቢ።",
        },
        {
          id: "n1-3",
          title: "📌 Essential Principles",
          titleAm: "📌 መሰረታዊ መርሆዎች",
          body:
            "• Sovereign equality of all members\n" +
            "• Disputes settled by peaceful means\n" +
            "• Members refrain from threat or use of force\n" +
            "• Members assist the UN in enforcement actions\n" +
            "• Non-intervention in matters within domestic jurisdiction of any state",
          bodyAm:
            "እኩል ሉዓላዊነት፣ ሰላማዊ መፍትሄ፣ ኃይል አለመጠቀም፣ ትብብር፣ ውስጣዊ ጉዳይ አለመግባት።",
        },
        {
          id: "n1-4",
          title: "🏛 Six Main Organs of the UN",
          titleAm: "🏛 ስድስት ዋና አካላት",
          body:
            "1. GENERAL ASSEMBLY – all members; one vote each; meets yearly; discusses problems, budget, elects non-permanent Security Council members\n" +
            "2. SECURITY COUNCIL – most powerful organ; maintains peace & security; 5 permanent members (USA, Britain, France, Russia, China) with VETO power + 10 non-permanent elected for 2 years\n" +
            "3. SECRETARIAT – headed by Secretary-General; administers peacekeeping, conferences, information\n" +
            "4. TRUSTEESHIP COUNCIL – helped territories under foreign rule gain independence; last territory (Palau) independent 1994 → now inactive\n" +
            "5. INTERNATIONAL COURT OF JUSTICE – principal judicial organ; seat in The Hague, Netherlands; 15 judges\n" +
            "6. ECONOMIC AND SOCIAL COUNCIL (ECOSOC) – promotes economic and social cooperation and development",
          bodyAm:
            "1. ጠቅላላ ጉባኤ\n2. የደህንነት ምክር ቤት (Veto)\n3. ፀሐፊነት\n4. ትረስቲሺፕ\n5. ዓለም አቀፍ ፍርድ ቤት (ሄግ)\n6. ECOSOC",
        },
        {
          id: "n1-5",
          title: "👤 Secretaries-General (know the African ones for exams)",
          titleAm: "👤 ዋና ፀሐፊዎች",
          body:
            "Trygve Lie (Norway) 1946–52\n" +
            "Dag Hammarskjöld (Sweden) 1952–61\n" +
            "U Thant (Myanmar) 1961–71\n" +
            "Kurt Waldheim (Austria) 1971–81\n" +
            "Javier Pérez de Cuéllar (Peru) 1981–91\n" +
            "Boutros Boutros-Ghali (Egypt) 1991–96\n" +
            "Kofi Annan (Ghana) 1997–2006\n" +
            "Ban Ki-moon (South Korea) 2007–2016\n" +
            "António Guterres (Portugal) since 2017\n\n" +
            "⚠ Two from Africa: Boutros-Ghali (Egypt) and Kofi Annan (Ghana).",
          bodyAm:
            "ከአፍሪካ፡ Boutros-Ghali (ግብጽ) እና Kofi Annan (ጋና)።",
        },
        {
          id: "n1-6",
          title: "⚠ EXAM TRAP — United Nations",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• League of Nations FAILED; UN succeeded it in 1945\n" +
            "• USA did NOT join League, but DID join UN\n" +
            "• Original members = 51 (not 50 or 193)\n" +
            "• Veto power = only the 5 permanent members\n" +
            "• Germany is NOT a permanent member (no veto)\n" +
            "• Finnish is NOT an official language\n" +
            "• Name ‘United Nations’ coined by Roosevelt (not Churchill)\n" +
            "• Most powerful organ = Security Council (not General Assembly)\n" +
            "• ICJ seat = The Hague (not New York or Geneva)",
          bodyAm:
            "Veto = 5 ብቻ። 51 መጀመሪያ። Roosevelt ስም ሰጠ።",
        },
      ],
    },

    // ============================================================
    // 5.2 SUPERPOWERS AND COLD WAR
    // ============================================================
    {
      id: "n2",
      title: "5.2 The Rise of the Superpowers and the Beginning of the Cold War",
      titleAm: "5.2 ልዕለ ኃያላን እና የቀዝቃዛ ጦርነት መጀመር",
      body:
        "After WWII two superpowers emerged: USA and USSR. Their rivalry became the Cold War — political, military and ideological tension without direct large-scale war between them.",
      bodyAm:
        "USA እና USSR = ሁለት ልዕለ ኃያላን። ቀዝቃዛ ጦርነት = ያለ ቀጥተኛ ትልቅ ጦርነት ውጥረት።",
      children: [
        {
          id: "n2-1",
          title: "📌 Why USA and USSR became Superpowers",
          titleAm: "📌 ለምን ልዕለ ኃያላን ሆኑ",
          body:
            "USA:\n" +
            "• Sole atomic power in 1945 (Hiroshima + Nagasaki)\n" +
            "• Economy strong and healthy\n" +
            "• Military and political influence in Europe and Asia-Pacific\n\n" +
            "USSR:\n" +
            "• Suffered 20 million deaths + heavy damage\n" +
            "• Stalin wanted buffer ‘satellite nations’ in Eastern Europe\n" +
            "• Red Army occupied Poland, Romania, Bulgaria, Hungary → communist regimes by ~1948\n" +
            "• These became ‘European People’s Democracies’ / Soviet satellite states",
          bodyAm:
            "USA = አቶሚክ + ኢኮኖሚ። USSR = 20 ሚሊዮን ሞት + ሳተላይት ግዛቶች።",
        },
        {
          id: "n2-2",
          title: "📌 Iron Curtain",
          titleAm: "📌 የብረት መጋረጃ",
          body:
            "• Term coined by Winston Churchill in 1946 speech at Fulton, Missouri\n" +
            "• Imaginary political boundary dividing Europe into communist East and non-communist West from 1945 until 1991\n" +
            "• Sealed off Soviet Union and its satellites from open contact with the West",
          bodyAm:
            "Churchill 1946። ምስራቅ vs ምዕራብ አውሮፓ።",
        },
        {
          id: "n2-3",
          title: "📊 Fundamental Differences: USA vs USSR",
          titleAm: "📊 መሰረታዊ ልዩነቶች",
          body:
            "| Point              | USA                          | USSR                          |\n" +
            "|--------------------|------------------------------|-------------------------------|\n" +
            "| Ideology           | Capitalism, Western democracy| Communism, Marxism-Leninism   |\n" +
            "| Governance         | Multi-party system           | One-party (mono-party) rule   |\n" +
            "| Property           | Private ownership            | Public (state) ownership      |\n" +
            "| Economic system    | Free-market economy          | Command (planned) economy     |",
          bodyAm:
            "USA = ካፒታሊዝም + ብዙ ፓርቲ። USSR = ኮሚኒዝም + አንድ ፓርቲ።",
        },
        {
          id: "n2-4",
          title: "📌 Strategies of the Cold War",
          titleAm: "📌 የቀዝቃዛ ጦርነት ስልቶች",
          body:
            "A. Arms Race – continuous nuclear and conventional competition\n" +
            "B. Espionage – spies and secret agents\n" +
            "C. Propaganda – ideas/rumours to influence opinion\n" +
            "D. Military Alliances – NATO (West) vs Warsaw Pact (East)\n" +
            "E. Aid programmes – help underdeveloped nations to gain influence\n" +
            "F. Proxy wars – conflicts where each side backed opposing groups",
          bodyAm:
            "ጦር መሣሪያ ውድድር፣ ሰላይ፣ ፕሮፓጋንዳ፣ ወታደራዊ ጥምረት፣ እርዳታ፣ ተወካይ ጦርነቶች።",
        },
        {
          id: "n2-5",
          title: "📌 Truman Doctrine (March 1947)",
          titleAm: "📌 የትሩማን ዶክትሪን",
          body:
            "• Britain could no longer protect Greece and Turkey\n" +
            "• Fear that Greece, Turkey and Middle East oil would fall to communism\n" +
            "• Truman asked Congress for $400 million aid\n" +
            "• Goal: stop the spread of communism\n" +
            "• Greece suppressed communist movement with US help (1949)\n" +
            "• Led to the policy of CONTAINMENT\n" +
            "• Architect of Containment = George Kennan",
          bodyAm:
            "1947። $400 ሚሊዮን ለግሪክና ቱርክ። Containment = Kennan።",
        },
        {
          id: "n2-6",
          title: "📌 Marshall Plan (European Recovery Program)",
          titleAm: "📌 የማርሻል ዕቅድ",
          body:
            "• Announced 1947 by US Secretary of State George Marshall\n" +
            "• $17 billion in economic and technical aid to 16 European countries\n" +
            "• Aims:\n" +
            "  1. Stop spread of communism (main political motive)\n" +
            "  2. Help European economies recover\n" +
            "  3. Provide market for American goods\n" +
            "• Stalin rejected it as ‘Dollar Imperialism’ and banned satellites from joining\n" +
            "• Soviet response = Molotov Plan (aid to Eastern Europe)",
          bodyAm:
            "$17 ቢሊዮን። ኮሚኒዝም ማቆም + ኢኮኖሚ ማገገም። Stalin = Dollar Imperialism። Molotov Plan = ምላሽ።",
        },
        {
          id: "n2-7",
          title: "📌 Division of Germany & Berlin Blockade",
          titleAm: "📌 የጀርመን ክፍፍል እና የበርሊን እገዳ",
          body:
            "• Germany divided into 4 zones (Britain, France, USA, USSR); Berlin also divided although inside Soviet zone\n" +
            "• Jan 1948 – UK + USA zones = Bizonia; April 1949 + France = Trizonia\n" +
            "• 24 June 1948 – 12 May 1949: Berlin Blockade (Stalin cut all land access to West Berlin)\n" +
            "• Response: Berlin Airlift (USA and allies supplied West Berlin by air)\n" +
            "• Consequences:\n" +
            "  – Cold War worsened\n" +
            "  – Two German states created: FRG (West, Aug 1949, Chancellor Konrad Adenauer) and GDR (East, 7 Oct 1949)\n" +
            "  – Led to NATO (1949) and Warsaw Pact (1955)\n" +
            "  – Arms race intensified\n" +
            "• Germany remained divided until Dec 1989",
          bodyAm:
            "4 ዞን። Berlin Blockade 1948–49። Airlift። FRG + GDR 1949።",
        },
        {
          id: "n2-8",
          title: "📌 Military Blocs",
          titleAm: "📌 ወታደራዊ ጥምረቶች",
          body:
            "NATO (April 1949):\n" +
            "• 12 original members: USA, Britain, France, Italy, Portugal, Norway, Denmark, Iceland, Canada, Belgium, Netherlands, Luxembourg\n" +
            "• Greece + Turkey 1952; West Germany 1955\n\n" +
            "Warsaw Pact (May 1955):\n" +
            "• Soviet Union + Poland, East Germany, Czechoslovakia, Hungary, Romania, Bulgaria, Albania",
          bodyAm:
            "NATO = 1949 ምዕራብ። Warsaw = 1955 ምስራቅ።",
        },
        {
          id: "n2-9",
          title: "📌 Arms Race & Space Race highlights",
          titleAm: "📌 የጦር መሣሪያና የጠፈር ውድድር",
          body:
            "• 1945 – USA atomic bombs\n" +
            "• 1949 – USSR atomic bomb → nuclear arms race begins\n" +
            "• 1952 – USA Hydrogen bomb (2500× more powerful)\n" +
            "• 1953 – USSR Hydrogen bomb\n" +
            "• 1953–55 – temporary ‘Thaw’ (Stalin dies; Khrushchev destalinisation + peaceful coexistence)\n" +
            "• 21 Aug 1957 – USSR first ICBM\n" +
            "• 4 Oct 1957 – Sputnik (first artificial Earth satellite) → space race; temporary Soviet lead\n" +
            "• USA responds with Atlas missile",
          bodyAm:
            "1949 USSR አቶም። 1957 Sputnik + ICBM።",
        },
        {
          id: "n2-10",
          title: "⚠ EXAM TRAP — Cold War",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• Cold War = NO direct large-scale war between USA and USSR\n" +
            "• Iron Curtain speech = Churchill 1946 (not Truman)\n" +
            "• Containment architect = George Kennan (not Marshall or Truman)\n" +
            "• First country helped by Truman Doctrine = Greece\n" +
            "• Marshall Plan rejected by Stalin as ‘Dollar Imperialism’\n" +
            "• Berlin Blockade ended 12 May 1949\n" +
            "• FRG = West; GDR = East\n" +
            "• NATO 1949; Warsaw Pact 1955\n" +
            "• Sputnik = 4 Oct 1957 (marks start of space race in many exam questions)\n" +
            "• Nuclear war did NOT happen — that is why it is ‘Cold’",
          bodyAm:
            "ቀዝቃዛ = ያለ ቀጥተኛ ጦርነት። Kennan = Containment። Greece = የመጀመሪያ ተጠቃሚ።",
        },
      ],
    },

    // ============================================================
    // 5.3 ASIA DURING THE COLD WAR
    // ============================================================
    {
      id: "n3",
      title: "5.3 Situations in Asia During the Cold War: Japan, Korea, China, Vietnam",
      titleAm: "5.3 በቀዝቃዛ ጦርነት ጊዜ በእስያ የነበሩ ሁኔታዎች",
      body:
        "The Cold War turned hot in Asia through civil wars and proxy wars in China, Korea and Vietnam. Japan became a key US ally and economic miracle.",
      bodyAm:
        "እስያ ውስጥ ቀዝቃዛ ጦርነት ሞቅ ያለ ሆነ። ጃፓን = የUSA አጋር + ኢኮኖሚያዊ ተአምር።",
      children: [
        {
          id: "n3-1",
          title: "🇯🇵 Japan – Post-war Recovery",
          titleAm: "🇯🇵 ጃፓን",
          body:
            "• Before WWII most industrialised Asian nation\n" +
            "• Post-war: rapid recovery with US economic assistance\n" +
            "• Became close US ally against Soviet expansion and Chinese communism\n" +
            "• By 1985 = world’s second-largest industrial power\n" +
            "• Massive trade surplus with USA and Europe by mid-1980s\n" +
            "• Called an ‘economic miracle’",
          bodyAm:
            "የኢኮኖሚ ተአምር። 1985 = ሁለተኛ ኢንዱስትሪያል ኃይል።",
        },
        {
          id: "n3-2",
          title: "🇨🇳 China – Communist Victory 1949",
          titleAm: "🇨🇳 ቻይና",
          body:
            "• During WWII: CCP (Mao Zedong) and KMT (Chiang Kai-shek) temporarily united against Japan\n" +
            "• Civil war 1946–49 → CCP victory\n" +
            "• 1 October 1949 – People’s Republic of China (PRC) proclaimed\n" +
            "• KMT fled to Taiwan (Formosa)\n" +
            "• USA continued to support Nationalist China (Taiwan) and blocked PRC from UN until 1971\n" +
            "• 14 February 1950 – Sino-Soviet Treaty of Friendship, Alliance and Mutual Assistance\n" +
            "• 1971 – PRC admitted to UN; Nationalists expelled",
          bodyAm:
            "1949 PRC። Chiang → ታይዋን። 1971 PRC ወደ UNO ገባ።",
        },
        {
          id: "n3-3",
          title: "🇰🇷 Korean War 1950–1953",
          titleAm: "🇰🇷 የኮሪያ ጦርነት",
          body:
            "• 1910–1945 Korea = Japanese colony\n" +
            "• Post-WWII: USSR occupies North, USA occupies South; divided at 38th parallel\n" +
            "• 1948: Republic of Korea (South, Syngman Rhee, capital Seoul) + Democratic People’s Republic (North, Kim Il Sung)\n" +
            "• June 1950 – North invades South\n" +
            "• UN (led by USA) intervenes; China sends ‘Volunteers’ when UN approaches Chinese border\n" +
            "• 1953 – armistice at Panmunjom; Korea remains divided\n\n" +
            "Results:\n" +
            "• Massive death and destruction; millions of refugees\n" +
            "• South Korea saved from communism\n" +
            "• China emerges as major Asian power\n" +
            "• Increased US protection for Taiwan\n" +
            "• SEATO formed 1954 (Australia, France, NZ, Pakistan, Philippines, Thailand, UK, USA)",
          bodyAm:
            "38ኛ ትይዩ። 1950–53። Panmunjom። አሁንም ተከፍሏል። SEATO 1954።",
        },
        {
          id: "n3-4",
          title: "🇻🇳 First Indochina War 1946–1954",
          titleAm: "🇻🇳 የመጀመሪያው የኢንዶቻይና ጦርነት",
          body:
            "• Indochina = Vietnam, Laos, Cambodia (French colonies)\n" +
            "• WWII: Japanese occupation → independence movements\n" +
            "• Viet Minh (founded 1941 by Ho Chi Minh) fights France\n" +
            "• Supported by China and USSR; USA supports France (Domino Theory)\n" +
            "• Called ‘Dirty War’ in France\n" +
            "• 7 May 1954 – French defeated at Dien Bien Phu\n" +
            "• Geneva Accords (1954): Vietnam divided at 17th parallel; Laos & Cambodia independent\n" +
            "• North = Democratic Republic of Vietnam (Ho Chi Minh, Hanoi)\n" +
            "• South = non-communist (Saigon)",
          bodyAm:
            "Viet Minh = Ho Chi Minh። Dien Bien Phu 1954። 17ኛ ትይዩ።",
        },
        {
          id: "n3-5",
          title: "🇻🇳 Second Indochina War (Vietnam War) 1957–1975",
          titleAm: "🇻🇳 ሁለተኛው የኢንዶቻይና ጦርነት",
          body:
            "• 1960 – National Liberation Front (Viet Cong) challenges South Vietnamese government\n" +
            "• USA increases advisers (Kennedy); ‘Strategic Hamlet’ / Safe Village policy\n" +
            "• 1965 – President Johnson starts Operation Rolling Thunder (sustained bombing of North)\n" +
            "• Nixon introduces Vietnamization (transfer responsibility to South Vietnam)\n" +
            "• 27 January 1973 – Paris Peace Accords\n" +
            "• 1975 – North conquers South; country unified\n" +
            "• 2 July 1976 – Socialist Republic of Vietnam; Saigon renamed Ho Chi Minh City\n\n" +
            "Why North/Viet Cong won:\n" +
            "• Widespread popular support\n" +
            "• Expert guerrilla warfare\n" +
            "• Support from North Vietnam, China, USSR\n" +
            "• Dedication to unification",
          bodyAm:
            "Viet Cong። Rolling Thunder። Vietnamization። 1975 አንድነት። Ho Chi Minh City።",
        },
        {
          id: "n3-6",
          title: "⚠ EXAM TRAP — Asia",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• Chiang Kai-shek was NOT the founder of the CCP (Mao was)\n" +
            "• Korea before WWII = Japanese colony (not Chinese)\n" +
            "• ‘Dirty War’ = First Indochina War (French vs Viet Minh)\n" +
            "• 38th parallel = Korea; 17th parallel = Vietnam\n" +
            "• PRC entered UN in 1971 (not 1949)\n" +
            "• Domino Theory = US justification for Vietnam involvement\n" +
            "• SEATO = 1954 response to communist strength in Asia",
          bodyAm:
            "38ኛ = ኮሪያ። 17ኛ = ቬትናም። Mao = CCP። 1971 = PRC ወደ UN።",
        },
      ],
    },

    // ============================================================
    // 5.4 NON-ALIGNED MOVEMENT
    // ============================================================
    {
      id: "n4",
      title: "5.4 Non-Aligned Movement (NAM)",
      titleAm: "5.4 የገለልተኛነት ንቅናቄ",
      body:
        "NAM was formed by states that did not want to align formally with either the USA or the USSR. It played a key role in decolonisation.",
      bodyAm:
        "NAM = ከUSA ወይም USSR ጋር ያልተባበሩ ሀገራት።",
      children: [
        {
          id: "n4-1",
          title: "📌 Origin and Founding",
          titleAm: "📌 አመሰራረት",
          body:
            "• Root: Bandung Conference (Asia-Africa), Indonesia, 18–24 April 1955 — 29 heads of state\n" +
            "• Condemned apartheid, racial discrimination and colonialism; called for UN economic development fund\n" +
            "• First NAM Conference: Belgrade, Yugoslavia, September 1961\n" +
            "• Founding leaders: Josip Broz Tito (Yugoslavia), Gamal Abdel Nasser (Egypt), Jawaharlal Nehru (India), Kwame Nkrumah (Ghana), Sukarno (Indonesia)",
          bodyAm:
            "Bandung 1955። Belgrade 1961። Tito, Nasser, Nehru, Nkrumah, Sukarno።",
        },
        {
          id: "n4-2",
          title: "📌 Purpose (Havana Declaration 1979)",
          titleAm: "📌 ዓላማ",
          body:
            "To ensure the national independence, sovereignty, territorial integrity and security of non-aligned countries in their struggle against imperialism, colonialism, neo-colonialism, racism and all forms of foreign subjugation.\n\n" +
            "NAM does NOT mean neutrality on every issue — it means independent peaceful intervention in world politics.",
          bodyAm:
            "ነጻነት፣ ሉዓላዊነት፣ ግዛታዊ አንድነት መጠበቅ።",
        },
        {
          id: "n4-3",
          title: "⚠ EXAM TRAP — NAM",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• Bandung 1955 = root / precursor\n" +
            "• First official NAM conference = Belgrade 1961\n" +
            "• Not ‘neutral’ in the sense of never taking positions — independent from the two blocs",
          bodyAm:
            "Bandung = ሥር። Belgrade = የመጀመሪያ ኮንፈረንስ።",
        },
      ],
    },

    // ============================================================
    // 5.5 ARAB–ISRAELI CONFLICT
    // ============================================================
    {
      id: "n5",
      title: "5.5 The Arab–Israeli Conflict",
      titleAm: "5.5 የአረብ-እስራኤል ግጭት",
      body:
        "The conflict has deep roots in competing national claims to Palestine, British wartime promises, Zionism, and the Holocaust.",
      bodyAm:
        "የፍልስጤም ጉዳይ። Zionism + Holocaust + የብሪታንያ ቃል ኪዳኖች።",
      children: [
        {
          id: "n5-1",
          title: "📌 Background",
          titleAm: "📌 ዳራ",
          body:
            "• Pre-WWI: Palestine under Ottoman rule\n" +
            "• 1915 – Britain promises Palestine to Arabs (against Ottomans)\n" +
            "• 1917 – Balfour Declaration supports Jewish national home in Palestine\n" +
            "• Post-WWI: British Mandate; growing Jewish immigration; rise of Zionism (Theodor Herzl)\n" +
            "• After Holocaust, demand for Jewish state intensifies\n" +
            "• 1947 – Britain hands problem to UN; UN Partition Plan (Jewish state + Arab state; Jerusalem internationalised)\n" +
            "• Arabs reject; Jews accept partially\n" +
            "• 14 May 1948 – State of Israel proclaimed",
          bodyAm:
            "Balfour 1917። UN Partition 1947። እስራኤል 14 ሜይ 1948።",
        },
        {
          id: "n5-2",
          title: "📌 Four Major Wars",
          titleAm: "📌 አራት ትላልቅ ጦርነቶች",
          body:
            "1. First Arab–Israeli War / War of Independence / Nakba (1948–49)\n" +
            "   – Egypt, Syria, Iraq, Transjordan attack 15 May 1948\n" +
            "   – Israel holds and expands territory; large number of Palestinian refugees (Nakba = Catastrophe)\n\n" +
            "2. Suez War / Second Arab–Israeli War (1956)\n" +
            "   – 26 July 1956 Nasser nationalises Suez Canal\n" +
            "   – 29 Oct Israel attacks; Britain & France support\n" +
            "   – USA, USSR and UN force withdrawal → Egypt saved from total defeat\n\n" +
            "3. Six-Day War (June 1967)\n" +
            "   – Israel destroys Egyptian air force on ground; captures Golan Heights, East Jerusalem, West Bank, Gaza, Sinai\n\n" +
            "4. Yom Kippur War (October 1973)\n" +
            "   – Egypt + Syria attack on Jewish holy day\n" +
            "   – Oil embargo on Western supporters of Israel\n" +
            "   – USA backs Israel; USSR backs Egypt\n" +
            "   – Israel retains/gains territory; PLO continues struggle under Yasser Arafat",
          bodyAm:
            "1948 Nakba። 1956 Suez። 1967 ስድስት ቀን። 1973 Yom Kippur።",
        },
        {
          id: "n5-3",
          title: "⚠ EXAM TRAP — Arab–Israeli",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• Israel declared 14 May 1948; war starts 15 May\n" +
            "• Nakba = Arab name for 1948 (Catastrophe)\n" +
            "• Nasser nationalised Suez Canal 1956\n" +
            "• Six-Day War = 1967 (not 1973)\n" +
            "• Yasser Arafat = PLO Chairman 1969–2004",
          bodyAm:
            "1948 = Nakba። 1967 = ስድስት ቀን። Arafat = PLO።",
        },
      ],
    },

    // ============================================================
    // 5.6 COLLAPSE OF THE SOVIET UNION
    // ============================================================
    {
      id: "n6",
      title: "5.6 The Collapse of the Soviet Union",
      titleAm: "5.6 የሶቪየት ኅብረት ውድቀት",
      body:
        "Mikhail Gorbachev’s reforms of the mid-1980s opened the door to the collapse of communist regimes in Eastern Europe (1989) and the USSR itself (1991).",
      bodyAm:
        "Gorbachev → 1989 ምስራቅ አውሮፓ → 1991 ዩኤስኤስአር ፈረሰ።",
      children: [
        {
          id: "n6-1",
          title: "📌 Gorbachev’s Reforms",
          titleAm: "📌 የጎርባቾቭ ማሻሻያዎች",
          body:
            "• Became leader of Soviet Communist Party 1985\n" +
            "• GLASNOST = openness / transparency — more freedom of speech and press\n" +
            "• PERESTROIKA = restructuring — allowed limited private ownership; hybrid communist-capitalist economy\n" +
            "• Encouraged people to demand more rights → protests against communist governments",
          bodyAm:
            "Glasnost = ክፍትነት። Perestroika = መዋቅር ለውጥ።",
        },
        {
          id: "n6-2",
          title: "📌 1989 Revolutions in Eastern Europe",
          titleAm: "📌 1989 አብዮቶች",
          body:
            "• Started in Poland, spread to Hungary, Czechoslovakia, East Germany, Romania, etc.\n" +
            "• Mostly peaceful (except Romania — violent)\n" +
            "• Communist regimes overthrown one after another\n" +
            "• Berlin Wall falls December 1989",
          bodyAm:
            "ፖላንድ ጀምሮ። በረጋ መንገድ (ሮማኒያ ሞቅ ያለ)።",
        },
        {
          id: "n6-3",
          title: "📌 1991 – End of the USSR",
          titleAm: "📌 1991 — መጨረሻ",
          body:
            "Fifteen independent states emerged:\n" +
            "Russia, Ukraine, Georgia, Belarus, Uzbekistan, Armenia, Azerbaijan, Kazakhstan, Kyrgyzstan, Moldova, Turkmenistan, Tajikistan, Latvia, Lithuania, Estonia.\n\n" +
            "Cold War ends.",
          bodyAm:
            "15 ነጻ ሀገራት። ቀዝቃዛ ጦርነት አበቃ።",
        },
        {
          id: "n6-4",
          title: "⚠ EXAM TRAP — Collapse",
          titleAm: "⚠ የፈተና ወጥመድ",
          body:
            "• 1989 = Eastern European revolutions / fall of Berlin Wall\n" +
            "• 1991 = actual collapse of the USSR\n" +
            "• Glasnost ≠ Perestroika (openness vs economic restructuring)\n" +
            "• Most revolutions peaceful; Romania was the violent exception",
          bodyAm:
            "1989 = ምስራቅ አውሮፓ። 1991 = ዩኤስኤስአር።",
        },
      ],
    },

    // ============================================================
    // UNIT SUMMARY + COMMON EXAM TRAPS
    // ============================================================
    {
      id: "nSummary",
      title: "Unit Summary — The Big Picture",
      titleAm: "የክፍሉ ማጠቃለያ",
      body:
        "1. UN founded 1945 to replace failed League; Security Council (5 veto powers) is most powerful organ.\n" +
        "2. Cold War = USA (capitalism, multi-party, free market) vs USSR (communism, one-party, command economy). Strategies: arms race, espionage, propaganda, alliances, aid, proxy wars.\n" +
        "3. Containment (Kennan) via Truman Doctrine + Marshall Plan. Berlin Blockade → two Germanys + NATO + Warsaw Pact.\n" +
        "4. Asia: Japan economic miracle; China PRC 1949; Korea 1950–53 (38th parallel); Vietnam 1946–75 (17th parallel, Ho Chi Minh).\n" +
        "5. NAM: Bandung 1955 → Belgrade 1961 (Tito, Nasser, Nehru, Nkrumah, Sukarno).\n" +
        "6. Arab–Israeli: 1948, 1956, 1967, 1973; PLO under Arafat.\n" +
        "7. Gorbachev glasnost + perestroika → 1989 Eastern Europe → 1991 USSR collapses into 15 states. Cold War ends.",
      bodyAm:
        "UNO 1945። ቀዝቃዛ ጦርነት። Containment። እስያ። NAM። አረብ-እስራኤል። 1991 ዩኤስኤስአር።",
    },
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 5",
      titleAm: "የተለመዱ የፈተና ወጥመዶች",
      body:
        "1. UN original members = 51 (not 50 or 193).\n" +
        "2. Veto = only 5 permanent members (Germany has none).\n" +
        "3. Name ‘UN’ coined by Roosevelt.\n" +
        "4. Iron Curtain speech = Churchill 1946.\n" +
        "5. Containment architect = George Kennan.\n" +
        "6. First Truman Doctrine beneficiary = Greece.\n" +
        "7. Marshall Plan = $17 bn; Stalin called it Dollar Imperialism.\n" +
        "8. Berlin Blockade 1948–49 → FRG + GDR 1949.\n" +
        "9. NATO 1949; Warsaw Pact 1955.\n" +
        "10. Sputnik 4 Oct 1957.\n" +
        "11. 38th parallel = Korea; 17th = Vietnam.\n" +
        "12. PRC enters UN 1971 (not 1949).\n" +
        "13. Dirty War = First Indochina War.\n" +
        "14. Bandung 1955; first NAM conference Belgrade 1961.\n" +
        "15. Israel declared 14 May 1948.\n" +
        "16. Six-Day War 1967; Yom Kippur 1973.\n" +
        "17. 1989 = Eastern Europe; 1991 = USSR collapses.\n" +
        "18. Two African UN Secretaries-General: Boutros-Ghali & Kofi Annan.",
      bodyAm:
        "18 ወጥመዶች። ቀኖችንና ስሞችን በጥንቃቄ።",
    },
  ],

  // ============================================================
  // QUESTIONS — 120
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q40) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "The United Nations was founded in:", options: ["1919", "1945", "1949", "1955"], answer: "1", explanation: "The UN Charter was signed on 26 June 1945 in San Francisco." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "The predecessor of the United Nations was the:", options: ["NATO", "League of Nations", "Warsaw Pact", "SEATO"], answer: "1", explanation: "The League of Nations (1920–1946) failed to prevent WWII and was replaced by the UN." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "How many original signatories did the UN Charter have?", options: ["50", "51", "193", "26"], answer: "1", explanation: "50 nations signed in San Francisco; Poland signed later, making 51 original members." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Which organ of the UN has the power to maintain peace and security and includes five permanent members with veto?", options: ["General Assembly", "Security Council", "Secretariat", "ECOSOC"], answer: "1", explanation: "The Security Council is the most powerful organ; its five permanent members have veto power." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Which of the following is NOT a permanent member of the UN Security Council?", options: ["USA", "Russia", "Germany", "China"], answer: "2", explanation: "The five permanent members are USA, Britain, France, Russia and China. Germany does not have a permanent seat or veto." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "The name ‘United Nations’ was first used in:", options: ["The Atlantic Charter 1941", "The Declaration by United Nations 1 January 1942", "The San Francisco Conference 1945", "The Dumbarton Oaks Conference"], answer: "1", explanation: "The name was first used in the Declaration by United Nations signed by 26 countries on 1 January 1942." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Who coined the term ‘United Nations’?", options: ["Winston Churchill", "Franklin D. Roosevelt", "Harry Truman", "Joseph Stalin"], answer: "1", explanation: "Franklin D. Roosevelt coined the name United Nations." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "The International Court of Justice is located in:", options: ["New York", "Geneva", "The Hague", "Paris"], answer: "2", explanation: "The ICJ, the principal judicial organ of the UN, sits in The Hague, Netherlands." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "The term ‘Iron Curtain’ was coined by:", options: ["Harry Truman", "Winston Churchill", "George Marshall", "Joseph Stalin"], answer: "1", explanation: "Winston Churchill used the phrase in his 1946 speech in Fulton, Missouri." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "The two superpowers after WWII were:", options: ["USA and Britain", "USA and USSR", "USSR and China", "USA and France"], answer: "1", explanation: "The USA and the USSR emerged as the two superpowers." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "The Truman Doctrine was announced in:", options: ["1945", "1947", "1949", "1950"], answer: "1", explanation: "The Truman Doctrine was issued in March 1947." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "The main goal of the Truman Doctrine was to:", options: ["Help Japan recover", "Stop the spread of communism", "Create the UN", "Divide Germany"], answer: "1", explanation: "The USA resolved to stop the spread of communism." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "The architect of the US policy of Containment was:", options: ["George Marshall", "George Kennan", "Harry Truman", "Dwight Eisenhower"], answer: "1", explanation: "George Kennan was the architect of the Containment Doctrine." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "The Marshall Plan provided approximately how much aid?", options: ["$400 million", "$17 billion", "$50 billion", "$1 billion"], answer: "1", explanation: "The USA raised about $17 billion for 16 European countries." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "Stalin denounced the Marshall Plan as:", options: ["Peaceful coexistence", "Dollar Imperialism", "Containment", "Glasnost"], answer: "1", explanation: "Stalin called it ‘Dollar Imperialism’ and banned satellites from joining." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "NATO was founded in:", options: ["1947", "1949", "1955", "1961"], answer: "1", explanation: "The North Atlantic Treaty Organization was founded in April 1949." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "The Warsaw Pact was formed in:", options: ["1949", "1955", "1961", "1945"], answer: "1", explanation: "The Warsaw Pact was formed in May 1955." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "The Berlin Blockade lasted from:", options: ["1945–1946", "1948–1949", "1950–1953", "1961–1962"], answer: "1", explanation: "The Berlin Blockade ran from 24 June 1948 to 12 May 1949." },
    { id: "q19", type: "mcq", difficulty: "easy", stem: "The first artificial Earth satellite, Sputnik, was launched by the USSR in:", options: ["1949", "1953", "1957", "1961"], answer: "2", explanation: "Sputnik was launched on 4 October 1957." },
    { id: "q20", type: "mcq", difficulty: "easy", stem: "The People’s Republic of China was proclaimed in:", options: ["1945", "1949", "1950", "1971"], answer: "1", explanation: "Mao Zedong proclaimed the PRC on 1 October 1949." },
    { id: "q21", type: "mcq", difficulty: "easy", stem: "Korea was divided after WWII at the:", options: ["17th parallel", "38th parallel", "49th parallel", "Equator"], answer: "1", explanation: "The dividing line was the 38th parallel of latitude." },
    { id: "q22", type: "mcq", difficulty: "easy", stem: "The Korean War lasted from:", options: ["1945–1948", "1950–1953", "1954–1957", "1960–1963"], answer: "1", explanation: "The Korean War began in June 1950 and ended with the 1953 armistice." },
    { id: "q23", type: "mcq", difficulty: "easy", stem: "Vietnam was divided after the Geneva Accords at the:", options: ["38th parallel", "17th parallel", "20th parallel", "DMZ only"], answer: "1", explanation: "The Geneva Accords of 1954 divided Vietnam at the 17th parallel." },
    { id: "q24", type: "mcq", difficulty: "easy", stem: "The leader of the Viet Minh and later North Vietnam was:", options: ["Chiang Kai-shek", "Ho Chi Minh", "Kim Il Sung", "Syngman Rhee"], answer: "1", explanation: "Ho Chi Minh led the Viet Minh and founded the Democratic Republic of Vietnam." },
    { id: "q25", type: "mcq", difficulty: "easy", stem: "The first NAM Conference was held in:", options: ["Bandung 1955", "Belgrade 1961", "Cairo 1964", "Havana 1979"], answer: "1", explanation: "The first official NAM Conference took place in Belgrade in September 1961." },
    { id: "q26", type: "mcq", difficulty: "easy", stem: "The State of Israel was proclaimed on:", options: ["14 May 1947", "14 May 1948", "15 May 1948", "5 June 1967"], answer: "1", explanation: "Israel was proclaimed on 14 May 1948." },
    { id: "q27", type: "mcq", difficulty: "easy", stem: "The Six-Day War took place in:", options: ["1948", "1956", "1967", "1973"], answer: "2", explanation: "The Six-Day War was fought in June 1967." },
    { id: "q28", type: "mcq", difficulty: "easy", stem: "Mikhail Gorbachev became leader of the Soviet Communist Party in:", options: ["1979", "1985", "1989", "1991"], answer: "1", explanation: "Gorbachev became leader in 1985." },
    { id: "q29", type: "mcq", difficulty: "easy", stem: "Glasnost means:", options: ["Restructuring", "Openness / transparency", "Containment", "Collectivisation"], answer: "1", explanation: "Glasnost is the Russian word for openness or publicity." },
    { id: "q30", type: "mcq", difficulty: "easy", stem: "The USSR formally collapsed in:", options: ["1985", "1989", "1991", "1993"], answer: "2", explanation: "The Soviet Union collapsed in 1991, producing 15 independent states." },
    { id: "q31", type: "mcq", difficulty: "easy", stem: "Which two UN Secretaries-General came from Africa?", options: ["Trygve Lie and Dag Hammarskjöld", "Boutros Boutros-Ghali and Kofi Annan", "U Thant and Kurt Waldheim", "Ban Ki-moon and António Guterres"], answer: "1", explanation: "Boutros-Ghali (Egypt) and Kofi Annan (Ghana) are the two African Secretaries-General." },
    { id: "q32", type: "mcq", difficulty: "easy", stem: "The last Trust Territory to gain independence was:", options: ["Namibia", "Palau", "East Timor", "Eritrea"], answer: "1", explanation: "Palau was the last Trust Territory to become independent (1994)." },
    { id: "q33", type: "mcq", difficulty: "easy", stem: "SEATO was formed in:", options: ["1949", "1954", "1955", "1961"], answer: "1", explanation: "SEATO (Southeast Asia Treaty Organization) was formed in 1954." },
    { id: "q34", type: "mcq", difficulty: "easy", stem: "The Chinese Nationalist leader who fled to Taiwan was:", options: ["Mao Zedong", "Chiang Kai-shek", "Ho Chi Minh", "Kim Il Sung"], answer: "1", explanation: "Chiang Kai-shek and the KMT fled to Taiwan after the communist victory." },
    { id: "q35", type: "mcq", difficulty: "easy", stem: "The first president of South Korea was:", options: ["Kim Il Sung", "Syngman Rhee", "Ho Chi Minh", "Ngo Dinh Diem"], answer: "1", explanation: "Syngman Rhee was the first president of the Republic of Korea." },
    { id: "q36", type: "mcq", difficulty: "easy", stem: "The Balfour Declaration (1917) supported:", options: ["An Arab state in Palestine", "A Jewish national home in Palestine", "International control of Jerusalem only", "British permanent rule"], answer: "1", explanation: "The Balfour Declaration supported the establishment of a Jewish national home in Palestine." },
    { id: "q37", type: "mcq", difficulty: "easy", stem: "Nasser nationalised the Suez Canal in:", options: ["1948", "1956", "1967", "1973"], answer: "1", explanation: "Gamal Abdel Nasser announced the nationalisation on 26 July 1956." },
    { id: "q38", type: "mcq", difficulty: "easy", stem: "The Yom Kippur War occurred in:", options: ["1967", "1973", "1956", "1948"], answer: "1", explanation: "The Yom Kippur War began on 6 October 1973." },
    { id: "q39", type: "mcq", difficulty: "easy", stem: "Perestroika refers to:", options: ["Political openness", "Economic restructuring", "Military alliance", "Nuclear disarmament"], answer: "1", explanation: "Perestroika means restructuring or reorganising the economy." },
    { id: "q40", type: "mcq", difficulty: "easy", stem: "How many independent states emerged from the collapse of the USSR?", options: ["12", "15", "18", "20"], answer: "1", explanation: "Fifteen sovereign states emerged in 1991." },

    // ==================== MEDIUM MCQ (Q41–Q80) ====================
    { id: "q41", type: "mcq", difficulty: "medium", stem: "Which of the following was NOT one of the four main goals of the United Nations?", options: ["Maintain international peace and security", "Foster friendly relations among nations", "Promote respect for human rights", "Protect and promote capitalism"], answer: "3", explanation: "Protecting capitalism was never a UN goal; the UN is ideologically neutral in that sense." },
    { id: "q42", type: "mcq", difficulty: "medium", stem: "The Security Council has how many non-permanent members elected for two-year terms?", options: ["5", "10", "15", "193"], answer: "1", explanation: "Ten non-permanent members are elected by the General Assembly for two-year terms." },
    { id: "q43", type: "mcq", difficulty: "medium", stem: "Which statement about the League of Nations is correct?", options: ["The USA was a founding member", "It successfully prevented WWII", "It failed partly because the USA did not join", "It was headquartered in New York"], answer: "2", explanation: "A major weakness was that the world’s most powerful nation, the USA, never joined." },
    { id: "q44", type: "mcq", difficulty: "medium", stem: "The Atlantic Charter was signed by:", options: ["Roosevelt and Stalin", "Roosevelt and Churchill", "Truman and Churchill", "Churchill and de Gaulle"], answer: "1", explanation: "US President Franklin D. Roosevelt and British Prime Minister Winston Churchill signed it in August 1941." },
    { id: "q45", type: "mcq", difficulty: "medium", stem: "Why did the Western Allies become alarmed about Soviet behaviour after 1945?", options: ["The USSR refused to join the UN", "Stalin established communist regimes in Eastern Europe", "The USSR gave atomic secrets to China", "The USSR invaded Japan"], answer: "1", explanation: "Stalin’s consolidation of control over Central and Eastern Europe and the creation of satellite states alarmed the West." },
    { id: "q46", type: "mcq", difficulty: "medium", stem: "The first country to benefit from the Truman Doctrine was:", options: ["Vietnam", "Greece", "Germany", "Korea"], answer: "1", explanation: "Greece (and Turkey) received the first aid under the Truman Doctrine; Greece suppressed its communist movement by 1949." },
    { id: "q47", type: "mcq", difficulty: "medium", stem: "Which of the following was a main aim of the Marshall Plan?", options: ["To rebuild the Soviet economy", "To stop the spread of communism and help European recovery", "To create NATO", "To partition Germany"], answer: "1", explanation: "The political motive was to stop communism; the economic motives were recovery and markets for US goods." },
    { id: "q48", type: "mcq", difficulty: "medium", stem: "The Soviet response to the Marshall Plan was known as the:", options: ["Truman Doctrine", "Molotov Plan", "Warsaw Pact", "Comecon only"], answer: "1", explanation: "The Molotov Plan provided aid to Eastern European countries aligned with the USSR." },
    { id: "q49", type: "mcq", difficulty: "medium", stem: "One direct consequence of the Berlin Blockade was:", options: ["The immediate reunification of Germany", "The creation of two separate German states", "The end of the Cold War", "The formation of the UN"], answer: "1", explanation: "In 1949 the FRG (West) and GDR (East) were established." },
    { id: "q50", type: "mcq", difficulty: "medium", stem: "Konrad Adenauer was the first Chancellor of:", options: ["East Germany", "West Germany (FRG)", "Austria", "The USSR"], answer: "1", explanation: "Adenauer became the first Chancellor of the Federal Republic of Germany." },
    { id: "q51", type: "mcq", difficulty: "medium", stem: "Which military alliance was formed first?", options: ["Warsaw Pact", "NATO", "SEATO", "CENTO"], answer: "1", explanation: "NATO was founded in 1949; the Warsaw Pact followed in 1955." },
    { id: "q52", type: "mcq", difficulty: "medium", stem: "The temporary improvement in US–Soviet relations after Stalin’s death is often called the:", options: ["Iron Curtain", "Thaw", "Détente of the 1970s only", "Glasnost"], answer: "1", explanation: "The period 1953–55 is described as a ‘Thaw’ under Khrushchev’s destalinisation and peaceful coexistence." },
    { id: "q53", type: "mcq", difficulty: "medium", stem: "Why did the USA reverse its earlier policy and begin large-scale aid to Japan?", options: ["Japan had nuclear weapons", "Communist victories in China and Korea made Japan a needed ally", "Japan joined NATO", "The USSR occupied Japan"], answer: "1", explanation: "The success of communism in China and the Korean War shifted American strategy; Japan became a key ally." },
    { id: "q54", type: "mcq", difficulty: "medium", stem: "The Sino-Soviet Treaty of Friendship was signed in:", options: ["1949", "1950", "1954", "1971"], answer: "1", explanation: "It was signed on 14 February 1950." },
    { id: "q55", type: "mcq", difficulty: "medium", stem: "When was the People’s Republic of China admitted to the United Nations?", options: ["1949", "1950", "1971", "1979"], answer: "2", explanation: "The PRC was admitted in 1971 and the Nationalists were expelled." },
    { id: "q56", type: "mcq", difficulty: "medium", stem: "The Korean War armistice was signed at:", options: ["Geneva", "Panmunjom", "Potsdam", "Yalta"], answer: "1", explanation: "The 1953 armistice was signed at Panmunjom." },
    { id: "q57", type: "mcq", difficulty: "medium", stem: "The term ‘Dirty War’ refers to:", options: ["The Korean War", "The First Indochina War (French vs Viet Minh)", "The Yom Kippur War", "The Berlin Blockade"], answer: "1", explanation: "In France the war against the Viet Minh was unpopular and called the ‘Dirty War’." },
    { id: "q58", type: "mcq", difficulty: "medium", stem: "The Domino Theory was used by the USA to justify involvement in:", options: ["Korea only", "Vietnam / Indochina", "The Marshall Plan", "The formation of NATO"], answer: "1", explanation: "The Domino Theory held that if one country fell to communism its neighbours would follow; it was applied especially to Indochina." },
    { id: "q59", type: "mcq", difficulty: "medium", stem: "Vietnamization was a policy associated with which US president?", options: ["Kennedy", "Johnson", "Nixon", "Truman"], answer: "2", explanation: "Nixon’s Vietnamization aimed to transfer military responsibility to South Vietnam." },
    { id: "q60", type: "mcq", difficulty: "medium", stem: "Saigon was renamed Ho Chi Minh City in:", options: ["1973", "1975", "1976", "1979"], answer: "2", explanation: "After unification the Socialist Republic of Vietnam was proclaimed on 2 July 1976 and Saigon was renamed." },
    { id: "q61", type: "mcq", difficulty: "medium", stem: "The Bandung Conference of 1955 is important because it:", options: ["Created NATO", "Laid the foundation for the Non-Aligned Movement", "Ended the Korean War", "Divided Germany"], answer: "1", explanation: "The Asia-Africa Bandung Conference is regarded as the root of the NAM." },
    { id: "q62", type: "mcq", difficulty: "medium", stem: "Which of the following was NOT a founding leader of the NAM?", options: ["Josip Broz Tito", "Gamal Abdel Nasser", "Jawaharlal Nehru", "Joseph Stalin"], answer: "3", explanation: "Stalin was the Soviet leader; the NAM founders were Tito, Nasser, Nehru, Nkrumah and Sukarno." },
    { id: "q63", type: "mcq", difficulty: "medium", stem: "The 1947 UN Partition Plan for Palestine proposed:", options: ["A single Arab state", "A single Jewish state", "Separate Jewish and Arab states with Jerusalem internationalised", "Continued British Mandate forever"], answer: "2", explanation: "The plan called for partition into Jewish and Arab states with Jerusalem under international control." },
    { id: "q64", type: "mcq", difficulty: "medium", stem: "In the Arab world the 1948 war is known as the:", options: ["War of Independence", "Nakba (Catastrophe)", "Six-Day War", "Suez Crisis"], answer: "1", explanation: "Nakba means Catastrophe and refers to the refugee crisis and defeat of 1948." },
    { id: "q65", type: "mcq", difficulty: "medium", stem: "Which countries attacked Israel on 15 May 1948?", options: ["Only Egypt", "Egypt, Syria, Iraq and Transjordan", "Only Syria and Jordan", "Saudi Arabia and Lebanon only"], answer: "1", explanation: "Egypt, Syria, Iraq and Transjordan (Jordan) declared war the day after Israel’s independence." },
    { id: "q66", type: "mcq", difficulty: "medium", stem: "The immediate cause of the 1956 Suez War was:", options: ["The Six-Day War", "Nasser’s nationalisation of the Suez Canal", "The Yom Kippur attack", "The Balfour Declaration"], answer: "1", explanation: "Nasser nationalised the Canal on 26 July 1956; Israel, Britain and France responded militarily." },
    { id: "q67", type: "mcq", difficulty: "medium", stem: "As a result of the Six-Day War Israel captured all of the following EXCEPT:", options: ["Golan Heights", "West Bank and East Jerusalem", "Gaza Strip and Sinai", "The entire Arabian Peninsula"], answer: "3", explanation: "Israel took the Golan, West Bank, East Jerusalem, Gaza and Sinai — not the Arabian Peninsula." },
    { id: "q68", type: "mcq", difficulty: "medium", stem: "Yasser Arafat is best known as:", options: ["President of Egypt", "Chairman of the PLO", "Prime Minister of Israel", "Secretary-General of the UN"], answer: "1", explanation: "Arafat was Chairman of the Palestine Liberation Organization from 1969 to 2004." },
    { id: "q69", type: "mcq", difficulty: "medium", stem: "Which reform is correctly matched?", options: ["Glasnost = economic restructuring", "Perestroika = openness and freedom of speech", "Glasnost = openness; Perestroika = economic restructuring", "Both mean the same thing"], answer: "2", explanation: "Glasnost = openness/transparency; Perestroika = restructuring of the economy." },
    { id: "q70", type: "mcq", difficulty: "medium", stem: "The 1989 revolutions in Eastern Europe were mostly:", options: ["Violent everywhere", "Peaceful except in Romania", "Organised by NATO", "Supported by Stalin"], answer: "1", explanation: "Most were peaceful; Romania was the notable violent exception." },
    { id: "q71", type: "mcq", difficulty: "medium", stem: "Which of the following best describes the Cold War?", options: ["Direct large-scale military conflict between USA and USSR", "Political, military and ideological tension without direct hot war between the superpowers", "A war fought only in Europe", "An economic agreement between East and West"], answer: "1", explanation: "It was ‘cold’ precisely because the two superpowers never fought each other directly on a large scale." },
    { id: "q72", type: "mcq", difficulty: "medium", stem: "The official languages of the UN include all EXCEPT:", options: ["Arabic", "Chinese", "Finnish", "Spanish"], answer: "2", explanation: "Finnish is not an official UN language." },
    { id: "q73", type: "mcq", difficulty: "medium", stem: "Bizonia and later Trizonia refer to:", options: ["Soviet zones in Asia", "The merging of Western occupation zones in Germany", "UN trust territories", "NAM member states"], answer: "1", explanation: "The British and American zones formed Bizonia; the French zone later joined to form Trizonia." },
    { id: "q74", type: "mcq", difficulty: "medium", stem: "Which factor most directly contributed to the formation of SEATO in 1954?", options: ["The success of the Marshall Plan", "Communist strength in Asia after the Chinese Revolution and Korean War", "The collapse of the USSR", "The Suez Crisis"], answer: "1", explanation: "Western powers created SEATO as a response to the perceived communist threat in Southeast Asia." },
    { id: "q75", type: "mcq", difficulty: "medium", stem: "The Strategic Hamlet programme was intended to:", options: ["Bomb North Vietnam", "Separate South Vietnamese villagers from Viet Cong influence", "Train Japanese forces", "Create the Marshall Plan"], answer: "1", explanation: "It aimed to deny the Viet Cong supplies and recruits by relocating peasants into protected villages." },
    { id: "q76", type: "mcq", difficulty: "medium", stem: "Which statement about the First Indochina War is correct?", options: ["It ended with French victory", "It ended with the French defeat at Dien Bien Phu and the Geneva Accords", "It was fought mainly in Korea", "The USA fought as the main combatant from the start"], answer: "1", explanation: "The French were defeated at Dien Bien Phu in May 1954; the Geneva Accords followed." },
    { id: "q77", type: "mcq", difficulty: "medium", stem: "The main reason the USA supported the French in the First Indochina War was:", options: ["Historical alliance only", "Fear of the spread of communism (Domino Theory)", "Desire for rubber plantations", "UN mandate"], answer: "1", explanation: "Containment and the Domino Theory drove American support for France." },
    { id: "q78", type: "mcq", difficulty: "medium", stem: "Which of the following correctly sequences the Arab–Israeli wars?", options: ["1967 → 1948 → 1956 → 1973", "1948 → 1956 → 1967 → 1973", "1956 → 1948 → 1973 → 1967", "1973 → 1967 → 1956 → 1948"], answer: "1", explanation: "1948 (Independence/Nakba), 1956 (Suez), 1967 (Six-Day), 1973 (Yom Kippur)." },
    { id: "q79", type: "mcq", difficulty: "medium", stem: "One major result of the Yom Kippur War was:", options: ["Israel lost the Golan Heights permanently", "An oil embargo against Western nations that supported Israel", "Immediate creation of a Palestinian state", "The end of the Cold War"], answer: "1", explanation: "Arab oil producers imposed an embargo on Western supporters of Israel, causing a sharp rise in oil prices." },
    { id: "q80", type: "mcq", difficulty: "medium", stem: "Gorbachev’s reforms ultimately:", options: ["Strengthened the Communist Party permanently", "Encouraged demands for more rights and contributed to the collapse of communist regimes", "Created a new Soviet empire in Africa", "Ended all nuclear weapons"], answer: "1", explanation: "Glasnost and perestroika opened space for protest; the Eastern European regimes and then the USSR itself collapsed." },

    // ==================== HARD MCQ (Q81–Q100) ====================
    { id: "q81", type: "mcq", difficulty: "hard", stem: "Which of the following best explains why the USA did not suffer the same economic devastation as the USSR after WWII?", options: ["The USA had no atomic weapons", "The USA homeland was not a major battlefield and its economy was strengthened by wartime production", "The USA received Marshall Plan aid", "The USA had fewer soldiers"], answer: "1", explanation: "The continental USA was not invaded or bombed on a large scale; wartime production actually boosted its economy, while the USSR suffered 20 million deaths and massive destruction." },
    { id: "q82", type: "mcq", difficulty: "hard", stem: "All of the following were strategies of the Cold War EXCEPT:", options: ["Arms race", "Espionage", "Direct large-scale conventional war between USA and USSR", "Proxy wars"], answer: "2", explanation: "A defining feature of the Cold War was the absence of direct large-scale war between the two superpowers." },
    { id: "q83", type: "mcq", difficulty: "hard", stem: "Which sequence is chronologically correct?", options: ["NATO → Berlin Blockade → Marshall Plan → Truman Doctrine", "Truman Doctrine → Marshall Plan → Berlin Blockade → NATO", "Warsaw Pact → NATO → Truman Doctrine → Sputnik", "Sputnik → Truman Doctrine → NATO → Marshall Plan"], answer: "1", explanation: "Truman Doctrine (March 1947) → Marshall Plan (1947) → Berlin Blockade (1948–49) → NATO (April 1949)." },
    { id: "q84", type: "mcq", difficulty: "hard", stem: "The creation of the FRG and GDR in 1949 was most directly a consequence of:", options: ["The Korean War", "The Berlin Blockade and the failure of four-power cooperation", "The formation of the NAM", "Gorbachev’s reforms"], answer: "1", explanation: "The blockade and the deepening East–West split led the Western powers to form the FRG and the Soviets to form the GDR." },
    { id: "q85", type: "mcq", difficulty: "hard", stem: "Why did the USA use its influence to keep the PRC out of the UN until 1971?", options: ["The PRC had no interest in joining", "The USA recognised only the Nationalist government on Taiwan as the legitimate government of China", "The USSR vetoed PRC membership every year", "The UN Charter forbade communist states"], answer: "1", explanation: "The USA continued to recognise Chiang Kai-shek’s Republic of China (Taiwan) and blocked the PRC’s admission until 1971." },
    { id: "q86", type: "mcq", difficulty: "hard", stem: "Which of the following statements about the Korean War is accurate?", options: ["It ended with the unification of Korea under Kim Il Sung", "It ended with an armistice; the border remained near the 38th parallel and Korea stayed divided", "It was fought only between North and South Korea with no foreign involvement", "It began with a South Korean invasion of the North"], answer: "1", explanation: "The 1953 Panmunjom armistice left Korea divided roughly along the original 38th parallel." },
    { id: "q87", type: "mcq", difficulty: "hard", stem: "The Geneva Accords of 1954 did all of the following EXCEPT:", options: ["Divide Vietnam at the 17th parallel", "Grant independence to Laos and Cambodia", "Create a permanent unified communist Vietnam immediately", "End the First Indochina War"], answer: "2", explanation: "Vietnam was temporarily divided; unification under communism came only in 1975–76." },
    { id: "q88", type: "mcq", difficulty: "hard", stem: "Which factor was LEAST important in the eventual victory of North Vietnam / Viet Cong?", options: ["Widespread popular support and guerrilla expertise", "Military and material support from China and the USSR", "The dedication of the North to unification", "Superior conventional air power equal to that of the United States"], answer: "3", explanation: "The North and Viet Cong never matched US air power; they won through popular support, guerrilla tactics, external aid and persistence." },
    { id: "q89", type: "mcq", difficulty: "hard", stem: "The Non-Aligned Movement’s stance is best described as:", options: ["Complete isolation from all world affairs", "Formal military alliance with the USSR", "Refusal to join either Cold War bloc while still taking independent positions on international issues", "Support for colonialism"], answer: "2", explanation: "NAM members rejected formal alignment with either superpower but actively participated in world politics on their own terms." },
    { id: "q90", type: "mcq", difficulty: "hard", stem: "Which of the following correctly matches a war with its common Arab or Israeli name?", options: ["1948 – Six-Day War", "1948 – Nakba / War of Independence", "1967 – Yom Kippur War", "1973 – Suez Crisis"], answer: "1", explanation: "1948 is remembered in Israel as the War of Independence and in the Arab world as the Nakba." },
    { id: "q91", type: "mcq", difficulty: "hard", stem: "All of the following were results of the Six-Day War EXCEPT:", options: ["Israeli control of the Golan Heights", "Israeli control of East Jerusalem and the West Bank", "Israeli control of Sinai and Gaza", "Immediate creation of an independent Palestinian state"], answer: "3", explanation: "No Palestinian state was created; the territories remained under Israeli occupation." },
    { id: "q92", type: "mcq", difficulty: "hard", stem: "Which statement best captures the relationship between glasnost and the 1989 revolutions?", options: ["Glasnost had no effect outside the USSR", "By allowing greater openness, glasnost encouraged Eastern Europeans to demand similar freedoms and challenge their own regimes", "Glasnost was a military doctrine", "Glasnost restored Stalinist controls"], answer: "1", explanation: "Greater freedom of speech and information in the USSR emboldened opposition movements across the Eastern Bloc." },
    { id: "q93", type: "mcq", difficulty: "hard", stem: "Which of the following is an accurate Cause → Event → Result chain?", options: ["Marshall Plan → Stalin accepts aid → Soviet economy recovers fully", "Fear of communism in Greece/Turkey → Truman Doctrine → policy of Containment", "Sputnik → immediate end of the arms race → nuclear disarmament", "Bandung Conference → immediate collapse of the USSR"], answer: "1", explanation: "The Greek/Turkish crisis led to the Truman Doctrine, which institutionalised Containment." },
    { id: "q94", type: "mcq", difficulty: "hard", stem: "Why was the Berlin Airlift a significant early Cold War crisis?", options: ["It was the first use of nuclear weapons in Europe", "It demonstrated Western resolve to defend West Berlin without direct military confrontation with Soviet forces", "It led to the immediate reunification of Germany", "It caused the USA to leave NATO"], answer: "1", explanation: "The airlift supplied West Berlin for almost a year, showing that the West would not abandon the city while avoiding direct combat with the Red Army." },
    { id: "q95", type: "mcq", difficulty: "hard", stem: "Which of the following pairs is correctly matched?", options: ["38th parallel – Vietnam; 17th parallel – Korea", "38th parallel – Korea; 17th parallel – Vietnam", "Both parallels refer to Germany", "Both parallels refer to the division of China"], answer: "1", explanation: "Korea was divided at the 38th parallel; Vietnam at the 17th parallel." },
    { id: "q96", type: "mcq", difficulty: "hard", stem: "The phrase ‘Dollar Imperialism’ was used by:", options: ["Truman to describe Soviet aid", "Stalin to denounce the Marshall Plan", "Nasser to describe the Suez Canal Company", "Gorbachev to describe perestroika"], answer: "1", explanation: "Stalin rejected the Marshall Plan as a form of American economic imperialism." },
    { id: "q97", type: "mcq", difficulty: "hard", stem: "Which of the following best explains the timing of Japan’s post-war economic miracle?", options: ["It occurred despite complete US hostility", "US strategic need for a strong anti-communist ally in Asia after 1949–50 led to large-scale assistance and a favourable international environment", "Japan received no foreign help", "It was solely the result of the Korean War boom with no US policy involvement"], answer: "1", explanation: "The communist victory in China and the Korean War made a prosperous, allied Japan a strategic priority for the United States." },
    { id: "q98", type: "mcq", difficulty: "hard", stem: "All of the following contributed to the collapse of the USSR EXCEPT:", options: ["Gorbachev’s reforms of glasnost and perestroika", "Economic problems and the burden of the arms race", "Nationalist and anti-communist movements in Eastern Europe and the Soviet republics", "A successful Soviet invasion of Western Europe in 1989"], answer: "3", explanation: "There was no Soviet invasion of Western Europe in 1989; the opposite occurred — the Eastern Bloc disintegrated." },
    { id: "q99", type: "mcq", difficulty: "hard", stem: "Which UN organ is correctly matched with its function?", options: ["General Assembly – exclusive power to authorise military force", "Security Council – primary responsibility for peace and security, including binding resolutions and veto", "Trusteeship Council – still actively managing dozens of territories today", "ICJ – located in New York and composed of all member states"], answer: "1", explanation: "The Security Council has primary responsibility for peace and security; its resolutions can be binding and the permanent members hold veto power." },
    { id: "q100", type: "mcq", difficulty: "hard", stem: "The most accurate description of the relationship between the Cold War and the Arab–Israeli conflict is:", options: ["The conflict was completely unrelated to the Cold War", "The superpowers treated the conflict as a proxy arena, with the USA generally supporting Israel and the USSR generally supporting Arab states", "The USSR was the main military supporter of Israel", "The USA always supported the Arab states against Israel"], answer: "1", explanation: "Both superpowers poured arms and diplomatic support into the region, turning the Arab–Israeli conflict into one of the Cold War’s proxy battlegrounds." },

    // ==================== SHORT ANSWER (Q101–Q120) ====================
    { id: "q101", type: "short", difficulty: "hard", stem: "Explain why the League of Nations failed and how the United Nations tried to avoid the same weaknesses.", answer: "The League failed mainly because the USA never joined, it had no military force of its own, and members were unwilling to confront aggression in the 1930s (Manchuria, Ethiopia, etc.). The UN tried to correct these weaknesses by including all the major powers (including the USA) from the start, giving the Security Council (with the five permanent members) real enforcement powers, and creating a more robust institutional structure.", explanation: "Model answer structure: definition of failure → 2–3 concrete weaknesses → how UN design addressed them." },
    { id: "q102", type: "short", difficulty: "hard", stem: "What were the main differences between the USA and the USSR that underpinned the Cold War?", answer: "The USA stood for capitalism, multi-party democracy, private ownership and a free-market economy. The USSR stood for communism (Marxism-Leninism), one-party rule, state ownership of property and a command economy. These opposing ideologies, systems of government and economic models made cooperation after 1945 extremely difficult and produced the global rivalry known as the Cold War.", explanation: "Use the four-point table: ideology, governance, property, economy." },
    { id: "q103", type: "short", difficulty: "hard", stem: "Describe the Truman Doctrine and the Marshall Plan and explain how they were linked to the policy of Containment.", answer: "The Truman Doctrine (March 1947) declared that the USA would support free peoples resisting armed minorities or outside pressure; it began with $400 million for Greece and Turkey. The Marshall Plan (1947) provided about $17 billion to rebuild Western European economies. Both were instruments of Containment — the strategy, articulated by George Kennan, of preventing the further spread of communism rather than trying to roll it back where it already existed.", explanation: "Definition → concrete measures → link to Kennan/Containment." },
    { id: "q104", type: "short", difficulty: "hard", stem: "Explain the causes and consequences of the Berlin Blockade (1948–49).", answer: "Causes: growing East–West tension, Western currency reform in their zones, and Stalin’s desire to force the Western powers out of Berlin. Consequences: the Berlin Airlift demonstrated Western resolve; the blockade was lifted in May 1949; two separate German states (FRG and GDR) were created; NATO and later the Warsaw Pact were formed; the Cold War intensified.", explanation: "Cause → event → at least three clear results." },
    { id: "q105", type: "short", difficulty: "hard", stem: "Why was the Korean War an important turning point in the Cold War?", answer: "It was the first major ‘hot’ war of the Cold War era. It internationalised the conflict beyond Europe, brought China in as a major military actor, led to the rearmament of the USA and the creation of SEATO, confirmed the division of Korea, and showed that the UN could be used (under US leadership) as an instrument of collective security against communist expansion.", explanation: "Globalisation of Cold War + institutional results + lasting division." },
    { id: "q106", type: "short", difficulty: "hard", stem: "Compare the First and Second Indochina Wars.", answer: "The First (1946–54) was primarily an anti-colonial war of the Viet Minh under Ho Chi Minh against French rule; it ended with the French defeat at Dien Bien Phu and the Geneva Accords that temporarily divided Vietnam. The Second (roughly 1957–75) was a Cold War proxy war in which the USA directly supported South Vietnam against the communist North and the Viet Cong; it ended with communist victory and the unification of Vietnam in 1975–76.", explanation: "Colonial vs Cold War character; outcomes." },
    { id: "q107", type: "short", difficulty: "hard", stem: "What was the Non-Aligned Movement and why was it significant?", answer: "NAM was an organisation of states that refused to join either the Western or the Soviet bloc during the Cold War. Its roots lay in the 1955 Bandung Conference; the first summit was in Belgrade in 1961 under leaders such as Tito, Nasser, Nehru, Nkrumah and Sukarno. It was significant because it gave newly independent Asian and African countries a collective voice, supported decolonisation, and offered a third way between the two superpowers.", explanation: "Definition → origin → founding leaders → significance." },
    { id: "q108", type: "short", difficulty: "hard", stem: "Outline the main stages of the Arab–Israeli conflict from 1948 to 1973.", answer: "1948–49: Israel’s War of Independence / Arab Nakba after the UN partition plan and the declaration of the State of Israel. 1956: Suez Crisis after Nasser nationalised the Canal. 1967: Six-Day War in which Israel captured the Golan Heights, West Bank, East Jerusalem, Gaza and Sinai. 1973: Yom Kippur War launched by Egypt and Syria; followed by an oil embargo. Throughout, the PLO under Yasser Arafat continued the Palestinian national struggle.", explanation: "Four wars with one-line characterisation each." },
    { id: "q109", type: "short", difficulty: "hard", stem: "Explain the meaning and impact of glasnost and perestroika.", answer: "Glasnost (openness) allowed greater freedom of speech, press and criticism of the government. Perestroika (restructuring) attempted to reform the Soviet economy by introducing limited market mechanisms and private ownership. Together they weakened the Communist Party’s monopoly, encouraged nationalist and democratic movements inside the USSR and Eastern Europe, and contributed directly to the revolutions of 1989 and the collapse of the Soviet Union in 1991.", explanation: "Definitions + political consequences." },
    { id: "q110", type: "short", difficulty: "hard", stem: "Why did the Soviet Union collapse in 1991?", answer: "Long-term economic stagnation and the burden of the arms race; the failure of the command economy to deliver consumer goods; Gorbachev’s reforms of glasnost and perestroika which released forces he could not control; the 1989 revolutions that ended communist rule in Eastern Europe; and rising nationalism in the Soviet republics themselves. In December 1991 the USSR was formally dissolved into 15 independent states.", explanation: "Economic + reform + external + nationalist factors." },
    { id: "q111", type: "short", difficulty: "hard", stem: "What was the significance of the 38th and 17th parallels?", answer: "The 38th parallel became the dividing line between Soviet-occupied North Korea and US-occupied South Korea after 1945 and remained the approximate border after the Korean War. The 17th parallel was the temporary dividing line between North and South Vietnam established by the 1954 Geneva Accords. Both lines symbolised the global division of the Cold War in Asia.", explanation: "Korea vs Vietnam; temporary vs lasting." },
    { id: "q112", type: "short", difficulty: "hard", stem: "Describe the role of the Security Council and the meaning of the veto.", answer: "The Security Council is the UN organ with primary responsibility for the maintenance of international peace and security. It has five permanent members (USA, Britain, France, Russia, China) and ten non-permanent members. Any of the five permanent members can block a substantive resolution by casting a negative vote — the veto. This gives the great powers a privileged position but has also sometimes paralysed the Council.", explanation: "Composition + function + veto definition." },
    { id: "q113", type: "short", difficulty: "hard", stem: "How did the Cold War affect Germany between 1945 and 1949?", answer: "Germany was divided into four occupation zones. Growing tension led the Western powers to merge their zones (Bizonia then Trizonia) and introduce a new currency. Stalin responded with the Berlin Blockade (1948–49). The Western airlift kept West Berlin supplied. The crisis resulted in the formal creation of two German states in 1949 — the FRG in the West and the GDR in the East — and accelerated the formation of NATO.", explanation: "Zones → blockade → two states → alliances." },
    { id: "q114", type: "short", difficulty: "hard", stem: "What was the Domino Theory and how did it influence US policy in Asia?", answer: "The Domino Theory held that if one country in a region fell to communism, neighbouring countries would also fall, like a row of dominoes. It was used to justify American support for the French in Indochina and later the massive US military commitment in Vietnam, because policymakers feared that a communist Vietnam would lead to communist takeovers across Southeast Asia.", explanation: "Definition + application to Vietnam." },
    { id: "q115", type: "short", difficulty: "hard", stem: "Explain the importance of the Bandung Conference (1955).", answer: "The Bandung Conference brought together 29 newly independent or emerging Asian and African states. It condemned colonialism, racial discrimination and apartheid, called for economic cooperation, and expressed the desire of these countries to remain independent of both Cold War blocs. It is widely regarded as the intellectual and political origin of the Non-Aligned Movement.", explanation: "Participants + resolutions + link to NAM." },
    { id: "q116", type: "short", difficulty: "hard", stem: "What were the main results of the Six-Day War for Israel and the Palestinians?", answer: "Israel achieved a rapid military victory and occupied the Golan Heights, East Jerusalem, the West Bank, the Gaza Strip and the Sinai Peninsula. This greatly expanded the territory under Israeli control but also brought a large Palestinian population under occupation, intensifying the Palestinian national struggle and creating the territorial issues that remain at the heart of the conflict.", explanation: "Territorial gains + demographic/political consequences." },
    { id: "q117", type: "short", difficulty: "hard", stem: "How did the arms race affect the Soviet Union?", answer: "The continuous competition to match or exceed American nuclear and conventional forces consumed a very high proportion of Soviet GDP. This diverted resources from consumer goods and productive investment, aggravated existing economic problems, and contributed to the long-term stagnation that made Gorbachev’s reforms necessary and ultimately helped bring about the system’s collapse.", explanation: "Resource diversion → economic weakness → link to collapse." },
    { id: "q118", type: "short", difficulty: "hard", stem: "Why did Japan become an economic ‘miracle’ after 1945?", answer: "Although Japan had been devastated by the war, the USA decided that a strong, democratic and capitalist Japan was essential as a bulwark against communism in Asia (especially after 1949–50). Large-scale American assistance, access to markets, domestic reforms, and high savings and investment rates produced rapid industrial growth. By the mid-1980s Japan was the world’s second-largest industrial economy.", explanation: "US strategic decision + domestic factors." },
    { id: "q119", type: "short", difficulty: "hard", stem: "What role did proxy wars play in the Cold War?", answer: "Because the two superpowers never fought each other directly, they competed by supporting opposing sides in regional conflicts. Korea, Vietnam, and various conflicts in the Middle East, Africa and Latin America became proxy wars. These wars allowed each side to test weapons, gain influence and weaken the other without risking nuclear confrontation.", explanation: "Definition + examples + strategic logic." },
    { id: "q120", type: "short", difficulty: "hard", stem: "Summarise the main stages in the end of the Cold War.", answer: "Gorbachev’s accession in 1985 and the introduction of glasnost and perestroika; the 1989 revolutions that toppled communist regimes across Eastern Europe (including the fall of the Berlin Wall); the failure of the hard-line coup in Moscow in 1991; and the formal dissolution of the USSR into 15 independent states in December 1991. With the disappearance of one of the two superpowers, the Cold War came to an end.", explanation: "1985 → 1989 → 1991 sequence." },
  ],
};