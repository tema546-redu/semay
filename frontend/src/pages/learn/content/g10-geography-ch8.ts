import type { Chapter } from "../learnData";

// ============================================================
// GRADE 10 GEOGRAPHY — UNIT 8
// GEOSPATIAL INFORMATION AND DATA PROCESSING
// Source: Grade 10 Geography Student Textbook (pp. 175–205)
// For: Abenezer (Abatu) — Grade 10
// Note style: mastery-lab (clean sections, definition boxes,
// worked examples, exam traps, exam strategy)
// ============================================================

export const g10GeographyCh8: Chapter = {
  id: "ch8",
  number: 8,
  title: "Geospatial Information and Data Processing",
  titleAm: "ጂኦስፓሻል መረጃና ዳታ ማቀነባበር",

  notes: [
    // ============================================================
    // 0. HOW TO MASTER THIS CHAPTER
    // ============================================================
    {
      id: "n0",
      title: "0. How to Master This Chapter (Your Route to 92–100%)",
      titleAm: "0. ይህን ክፍል እንዴት በደንብ መቆጣጠር እንደሚቻል",
      body:
        "Abatu, this chapter is about GEOSPATIAL DATA — how geographic data is gathered, processed, represented, and analyzed.\n\n" +
        "It has FIVE parts:\n" +
        "1) Basic concepts of geospatial information (data vs information).\n" +
        "2) Sources and tools of geographic data (GPS, digitizers).\n" +
        "3) Geographic data representations (vector, raster, image).\n" +
        "4) GIS and mapmaking.\n" +
        "5) Making and interpreting graphs, charts, diagrams.\n\n" +
        "The WHOLE chapter reduces to FIVE key ideas:\n" +
        "• DATA = raw facts; INFORMATION = processed data.\n" +
        "• GEOSPATIAL DATA = location + attribute + temporal information.\n" +
        "• Sources: directly collected vs remotely sensed; GPS + digitizers are key tools.\n" +
        "• Two data models: VECTOR (points/lines/polygons) + RASTER (grid cells).\n" +
        "• GIS = computer-based system to store, visualize, analyze, interpret geographic data.\n\n" +
        "Master those and the exam is simple.",
      bodyAm:
        "አባቱ፣ አምስቱ ዋና ሐሳቦች፡\n" +
        "1) DATA vs INFORMATION።\n" +
        "2) GEOSPATIAL DATA = ቦታ + attribute + time።\n" +
        "3) GPS + digitizer።\n" +
        "4) Vector vs Raster።\n" +
        "5) GIS።",
      children: [
        {
          id: "n0-1",
          title: "Pass 1 · Understand data vs information",
          titleAm: "ደረጃ 1 · Data vs Information",
          body:
            "DATA:\n" +
            "• Raw observations (numbers, characters, images, facts, symbols).\n" +
            "• INPUT to computer system.\n" +
            "• Unprocessed facts/figures.\n\n" +
            "INFORMATION:\n" +
            "• Result of processing, manipulating, organizing data.\n" +
            "• OUTPUT of computer system.\n" +
            "• Adds to knowledge of receiver.\n\n" +
            "DATA LIFECYCLE:\n" +
            "1) Collection.\n" +
            "2) Processing (QA/QC).\n" +
            "3) Analysis.\n" +
            "4) Dissemination.",
          bodyAm:
            "Data = ጥሬ።\n" +
            "Information = የተቀነባበረ።\n" +
            "Lifecycle: collect → process → analyze → share።",
        },
        {
          id: "n0-2",
          title: "Pass 2 · Master the three components of geospatial data",
          titleAm: "ደረጃ 2 · ሦስቱ አካላት",
          body:
            "GEOSPATIAL DATA = \n" +
            "1) LOCATION information (coordinates on Earth).\n" +
            "2) ATTRIBUTE information (characteristics).\n" +
            "3) TEMPORAL information (time).\n\n" +
            "PLACE = essential; without it, data is aspatial.\n" +
            "TIME = optional (some processes too slow).\n" +
            "ATTRIBUTES = physical, environmental, social, economic.",
          bodyAm:
            "ቦታ + ባህሪ + ጊዜ።\n" +
            "ያለ ቦታ ዋጋ የለውም።",
        },
        {
          id: "n0-3",
          title: "Pass 3 · Master the two data models",
          titleAm: "ደረጃ 3 · ሁለቱ ሞዴሎች",
          body:
            "VECTOR:\n" +
            "• Uses directional lines (vectors).\n" +
            "• Sequential points/vertices define a line segment.\n" +
            "• Each vertex = X + Y coordinates.\n" +
            "• POINT = 1 coordinate pair.\n" +
            "• LINE = string of vertices between nodes.\n" +
            "• POLYGON = closed string of coordinates.\n\n" +
            "RASTER:\n" +
            "• Uses GRID-CELL data structure.\n" +
            "• Cells identified by row + column.\n" +
            "• Cell size determined by accuracy + resolution.\n" +
            "• Points = single cell; lines = sequences of cells; areas = contiguous cells.\n\n" +
            "IMAGE = pictures/photographs.",
          bodyAm:
            "Vector = ነጥብ/መስመር/ፖሊጎን።\n" +
            "Raster = ሴሎች።\n" +
            "Image = ፎቶ።",
        },
        {
          id: "n0-4",
          title: "Pass 4 · Two-minute self-check",
          titleAm: "ደረጃ 4 · የ2 ደቂቃ ቼክ",
          body:
            "1) Do you know DATA is input; INFORMATION is output?\n" +
            "2) Do you know GPS needs 4+ satellites?\n" +
            "3) Do you know GIS = 5 components (hardware, software, data, people, methods)?\n" +
            "4) Do you know 3 map features: point, line, polygon?\n" +
            "5) Do you know a node starts/ends an arc?",
          bodyAm:
            "1) Data input, info output?\n" +
            "2) 4+ ሳተላይቶች?\n" +
            "3) 5 አካላት?\n" +
            "4) Point/Line/Polygon?",
        },
        {
          id: "n0-5",
          title: "⚠ Exam standard",
          titleAm: "⚠ የፈተና መስፋርት",
          body:
            "• DATA ≠ INFORMATION.\n" +
            "• Geospatial data = location + attribute + temporal.\n" +
            "• Without location → ASPATIAL (no value).\n" +
            "• GPS needs 4+ satellites.\n" +
            "• Digitizer = converts analogue → digital.\n" +
            "• VECTOR = points/lines/polygons.\n" +
            "• RASTER = grid cells.\n" +
            "• POLYGON = closed string of coordinates.\n" +
            "• NODE = vertex that starts/ends an arc.\n" +
            "• GIS = store, visualize, analyze, interpret geographic data.\n" +
            "• GIS components: Hardware, Software, Data, People, Methods.\n" +
            "• Digital > Analogue (better storage, copying, processing).",
          bodyAm:
            "• Data ≠ Info።\n" +
            "• GPS = 4+ ሳተላይቶች።\n" +
            "• Vector/Raster።\n" +
            "• GIS = 5 አካላት።",
        },
      ],
    },

    // ============================================================
    // 8.1 BASIC CONCEPTS
    // ============================================================
    {
      id: "n1",
      title: "8.1 Basic Concepts of Geospatial Information",
      titleAm: "8.1 የጂኦስፓሻል መረጃ መሠረታዊ ጽንሰ-ሐሳቦች",
      body:
        "Abatu, DATA = raw observations; INFORMATION = processed data. GEOSPATIAL DATA combines location + attribute + temporal information.",
      bodyAm:
        "አባቱ፣ Data = ጥሬ፤ Information = የተቀነባበረ።\n" +
        "Geospatial = ቦታ + ባህሪ + ጊዜ።",
      children: [
        {
          id: "n1-1",
          title: "Data definition and lifecycle",
          titleAm: "Data — ትርጉምና lifecycle",
          body:
            "DATA: observations collected + stored as numbers, characters, images, facts, symbols.\n\n" +
            "Represents qualitative OR quantitative variables.\n\n" +
            "DATA LIFECYCLE:\n" +
            "1) COLLECTION: primary data (new) or secondary (from offices like CSA).\n" +
            "2) PROCESSING: QA/QC, merging duplicates, appending.\n" +
            "3) ANALYSIS: statistical analyses → tables, charts, graphs.\n" +
            "4) DISSEMINATION: conferences, workshops, publications, archiving.",
          bodyAm:
            "ስብስብ → ማቀነባበር → ትንተና → ስርጭት።",
        },
        {
          id: "n1-2",
          title: "Data vs information",
          titleAm: "Data vs Information",
          body:
            "DATA:\n" +
            "• INPUT for computer system.\n" +
            "• Unprocessed facts/figures.\n" +
            "• Does NOT depend on information.\n\n" +
            "INFORMATION:\n" +
            "• OUTPUT of data.\n" +
            "• Processed data.\n" +
            "• DEPENDS on data.\n" +
            "• Adds to knowledge of receiver.",
          bodyAm:
            "Data = input።\n" +
            "Information = output።",
        },
        {
          id: "n1-3",
          title: "Geospatial data — three components",
          titleAm: "የጂኦስፓሻል ሦስቱ አካላት",
          body:
            "GEOSPATIAL DATA = location + attribute + temporal information.\n\n" +
            "1) PLACE (location):\n" +
            "• Essential.\n" +
            "• Coordinates on Earth.\n" +
            "• Allows linking information, measuring distances + areas.\n" +
            "• Without location → ASPATIAL (non-spatial).\n\n" +
            "2) TIME (temporal):\n" +
            "• Optional.\n" +
            "• Some processes too slow (elevation changes over 1000s of years).\n" +
            "• Some changes are rapid (temperature daily).\n\n" +
            "3) ATTRIBUTES:\n" +
            "• Descriptive info about objects.\n" +
            "• Physical/environmental (temperature, elevation).\n" +
            "• Social/economic (population, income).",
          bodyAm:
            "ቦታ = አስፈላጊ።\n" +
            "ጊዜ = አማራጭ።\n" +
            "ባህሪ = መግለጫ።",
        },
        {
          id: "n1-4",
          title: "Discrete vs continuous data",
          titleAm: "Discrete vs Continuous",
          body:
            "DISCRETE OBJECTS:\n" +
            "• Objects with well-defined boundaries.\n" +
            "• Easy to define where object begins/ends.\n" +
            "• Example: lake (within surrounding landscape).\n\n" +
            "CONTINUOUS DATA:\n" +
            "• Areas/phenomena that progressively vary across surface.\n" +
            "• Values vary from point to point.\n" +
            "• Also called FIELD, non-discrete, or surface data.\n" +
            "• Example: elevation (starts at sea level, varies across surface).",
          bodyAm:
            "Discrete = ግልጽ ወሰን (ሐይቅ)።\n" +
            "Continuous = ቀስ በቀስ የሚለዋወጥ (ከፍታ)።",
        },
        {
          id: "n1-5",
          title: "⚠ Remember trap — Basic concepts",
          titleAm: "⚠ አትርሳ — መሠረታዊ ጽንሰ-ሐሳቦች",
          body:
            "• DATA = input; INFORMATION = output.\n" +
            "• Data lifecycle: collection → processing → analysis → dissemination.\n" +
            "• Geospatial = location + attribute + temporal.\n" +
            "• Without location = ASPATIAL (no value).\n" +
            "• DISCRETE = well-defined boundaries (lake).\n" +
            "• CONTINUOUS = varies across surface (elevation).\n" +
            "• Time is OPTIONAL; place is ESSENTIAL.",
          bodyAm:
            "• Data input, info output።\n" +
            "• Location = አስፈላጊ።\n" +
            "• Discrete vs Continuous።",
        },
      ],
    },

    // ============================================================
    // 8.2 SOURCES AND TOOLS
    // ============================================================
    {
      id: "n2",
      title: "8.2 Sources and Tools of Geographic Data",
      titleAm: "8.2 የጂኦግራፊ ዳታ ምንጮችና መሣሪያዎች",
      body:
        "Abatu, geographic data comes from DIRECT (measured) and REMOTE (satellite) sources. Key tools: GPS and DIGITIZERS.",
      bodyAm:
        "አባቱ፣ ቀጥታ + ርቀት።\n" +
        "GPS + Digitizer።",
      children: [
        {
          id: "n2-1",
          title: "Direct vs remote sources",
          titleAm: "ቀጥታ vs ርቀት",
          body:
            "DIRECTLY COLLECTED:\n" +
            "• Generated at source.\n" +
            "• Temperature at weather stations.\n" +
            "• Elevations via field visits.\n" +
            "• Surveys (census, sample surveys).\n" +
            "• Observation (count trees in farmland).\n\n" +
            "REMOTELY SENSED:\n" +
            "• Measured from remote distances.\n" +
            "• No direct contact.\n" +
            "• Satellite images.\n\n" +
            "MOST COMMON SOURCES:\n" +
            "• Hard copy (analogue) maps.\n" +
            "• Aerial photographs.\n" +
            "• Remotely-sensed imagery.\n" +
            "• Point data samples from surveys.\n" +
            "• Existing digital data files.",
          bodyAm:
            "Direct = በቦታው ላይ።\n" +
            "Remote = ከርቀት።\n" +
            "Hard maps, aerial photos, satellite imagery።",
        },
        {
          id: "n2-2",
          title: "Primary vs secondary sources",
          titleAm: "Primary vs Secondary",
          body:
            "PRIMARY SOURCES:\n" +
            "• Data received for direct use in making maps.\n" +
            "• Spatial + location data.\n\n" +
            "SECONDARY SOURCES:\n" +
            "• Data of general interest gathered for other reasons.\n" +
            "• Can be used by end users.\n" +
            "• Hard copy maps used as secondary source.\n\n" +
            "WARNING: Always check secondary data accuracy + up-to-dateness — otherwise results will be wrong/outdated.",
          bodyAm:
            "Primary = ቀጥታ አገልግሎት።\n" +
            "Secondary = ለሌላ ዓላማ የተሰበሰበ።\n" +
            "ትክክለኛነት አረጋግጥ!",
        },
        {
          id: "n2-3",
          title: "GPS — Global Positioning System",
          titleAm: "GPS",
          body:
            "GPS:\n" +
            "• Satellite network.\n" +
            "• Determines EXACT location of a place.\n" +
            "• Communicates with GPS receivers.\n" +
            "• Receiver needs 4+ satellites to calculate location (within a few meters).\n\n" +
            "PROVIDES:\n" +
            "• Latitudinal + longitudinal coordinates.\n" +
            "• Elevation value.\n\n" +
            "USES: cars, smartphones for directions.",
          bodyAm:
            "4+ ሳተላይቶች።\n" +
            "Latitude + Longitude + Elevation።",
        },
        {
          id: "n2-4",
          title: "Digitizers",
          titleAm: "Digitizer",
          body:
            "DIGITIZER:\n" +
            "• Converts images from analogue/paper → digital (computer-readable).\n" +
            "• Instruments: table digitizer, scanner, smartphones.\n" +
            "• Table digitizer = georeferenced.\n" +
            "• Scanners + smartphones = need GEO-REFERENCING.\n\n" +
            "GEOREFERENCING:\n" +
            "• Internal coordinate system of map/photo related to geographic coordinate system of area being scanned.",
          bodyAm:
            "Analogue → digital።\n" +
            "Table digitizer = georeferenced።\n" +
            "Scanner + phone = need georeferencing።",
        },
        {
          id: "n2-5",
          title: "⚠ Remember trap — Sources & tools",
          titleAm: "⚠ አትርሳ — ምንጮችና መሣሪያዎች",
          body:
            "• DIRECT = at source (weather station, field survey).\n" +
            "• REMOTE = satellite imagery, aerial photos.\n" +
            "• PRIMARY = direct use in mapping.\n" +
            "• SECONDARY = gathered for other reasons.\n" +
            "• Always CHECK secondary data accuracy.\n" +
            "• GPS needs 4+ satellites.\n" +
            "• GPS gives lat/long + elevation.\n" +
            "• DIGITIZER = analogue → digital.\n" +
            "• Table digitizer = georeferenced (scanner/phone = need georeferencing).",
          bodyAm:
            "4+ ሳተላይቶች።\n" +
            "Digitizer = analogue → digital።\n" +
            "Table digitizer = georeferenced።",
        },
      ],
    },

    // ============================================================
    // 8.3 DATA REPRESENTATIONS
    // ============================================================
    {
      id: "n3",
      title: "8.3 Geographic Data Representations",
      titleAm: "8.3 የዳታ ውክልና",
      body:
        "Abatu, geographic features can be represented as POINT, LINE, or AREA (polygon). In digital form: VECTOR, RASTER, or IMAGE.",
      bodyAm:
        "አባቱ፣ ነጥብ፣ መስመር፣ ፖሊጎን።\n" +
        "Vector, Raster, Image።",
      children: [
        {
          id: "n3-1",
          title: "Analogue vs digital formats",
          titleAm: "Analogue vs Digital",
          body:
            "ANALOGUE (hardcopy):\n" +
            "• Paper maps.\n\n" +
            "DIGITAL:\n" +
            "• Increasingly important.\n" +
            "• Stored on PCs, internet, mass storage.\n" +
            "• Easy to copy + transmit at high speeds.\n" +
            "• High-density storage in small spaces.\n" +
            "• Less subject to physical deterioration.\n" +
            "• Easy to transform, process, analyze.",
          bodyAm:
            "Digital = ሊባዛ፣ ሊተላለፍ፣ ሊተነተን ይችላል።",
        },
        {
          id: "n3-2",
          title: "Three basic features",
          titleAm: "ሦስቱ መሠረታዊ ቅርጾች",
          body:
            "1) POINT:\n" +
            "• Single location in space.\n" +
            "• Examples: telephone tower, water well, weather station.\n\n" +
            "2) LINE:\n" +
            "• String of spatial coordinates.\n" +
            "• Examples: rivers, roads, pipelines.\n\n" +
            "3) AREA (POLYGON):\n" +
            "• Closed string of spatial coordinates.\n" +
            "• Examples: forest stands, soil areas, administrative boundaries, climate zones.\n" +
            "• Usually HOMOGENEOUS + consistent.",
          bodyAm:
            "Point: ነጥብ።\n" +
            "Line: መስመር።\n" +
            "Polygon: የተዘጋ ቦታ።",
        },
        {
          id: "n3-3",
          title: "Vector data model",
          titleAm: "Vector",
          body:
            "VECTOR:\n" +
            "• Uses directional lines (vectors).\n" +
            "• Sequential points/vertices define line segment.\n" +
            "• Each vertex = X + Y coordinates.\n\n" +
            "POINTS:\n" +
            "• 1 coordinate pair (X, Y).\n\n" +
            "LINES (arcs):\n" +
            "• String of vertices between nodes.\n" +
            "• NODE = vertex that STARTS or ENDS an arc.\n\n" +
            "POLYGONS:\n" +
            "• Closed string of coordinate pairs.\n" +
            "• Multiparts supported.",
          bodyAm:
            "Point = 1 (X,Y)።\n" +
            "Line = vertices + nodes።\n" +
            "Polygon = closed coordinates።",
        },
        {
          id: "n3-4",
          title: "Raster data model",
          titleAm: "Raster",
          body:
            "RASTER:\n" +
            "• GRID-CELL data structure.\n" +
            "• Area divided into cells (row + column).\n" +
            "• Cell size selected based on ACCURACY + RESOLUTION.\n\n" +
            "REPRESENTATION:\n" +
            "• Points = single cell.\n" +
            "• Lines = sequences of neighboring cells.\n" +
            "• Areas = collections of contiguous cells.\n\n" +
            "TESSELLATED DATA STRUCTURE:\n" +
            "• Repeated shapes fit together without gaps.\n" +
            "• Cells classified by most common attribute.",
          bodyAm:
            "Raster = ሴሎች።\n" +
            "Point = 1 ሴል።\n" +
            "Line = ሴሎች ተከታታይ።\n" +
            "Area = ተጎራባች ሴሎች።",
        },
        {
          id: "n3-5",
          title: "⚠ Remember trap — Representations",
          titleAm: "⚠ አትርሳ — ውክልናዎች",
          body:
            "• Three features: POINT, LINE, POLYGON (AREA).\n" +
            "• DIGITAL advantages: copy, transmit, store, process.\n" +
            "• VECTOR = points + lines + polygons.\n" +
            "• RASTER = grid cells.\n" +
            "• NODE = starts or ends an arc.\n" +
            "• POLYGON = closed string of coordinates.\n" +
            "• RASTER cell size = accuracy + resolution.\n" +
            "• Image = picture/photograph.",
          bodyAm:
            "Point/Line/Polygon።\n" +
            "Vector/Raster።\n" +
            "Node = መጨረሻ።",
        },
      ],
    },

    // ============================================================
    // 8.4 GIS AND MAPMAKING
    // ============================================================
    {
      id: "n4",
      title: "8.4 Advances in Mapmaking and Birth of GIS",
      titleAm: "8.4 የGIS መፈጠር",
      body:
        "Abatu, GIS = computer-based system to STORE, VISUALIZE, ANALYZE, and INTERPRET geographic data. It has FIVE components.",
      bodyAm:
        "አባቱ፣ GIS = ኮምፒውተር ላይ የተመሠረተ ስርዓት።\n" +
        "5 አካላት።",
      children: [
        {
          id: "n4-1",
          title: "History of mapmaking",
          titleAm: "የካርታ ታሪክ",
          body:
            "MAPMAKING HISTORY:\n" +
            "• Thousands of years old.\n" +
            "• Pre-dates written communication.\n" +
            "• From cave paintings → ancient Babylon, Greece, Asia → 21st century.\n" +
            "• Early maps garbled/distorted.\n" +
            "• Maps became larger, detailed, accurate over time.\n\n" +
            "KEY ADVANCES (18th c.+):\n" +
            "• Mathematics + astronomy.\n" +
            "• Lines of longitude + latitude.\n" +
            "• Printing + photography.\n" +
            "• Mass production of maps.\n" +
            "• Airplanes + satellites → photograph large areas.",
          bodyAm:
            "ከዋሻ ሥዕል → ዘመናዊ ካርታ።\n" +
            "Satellites = ትልቅ እድገት።",
        },
        {
          id: "n4-2",
          title: "GIS — definition",
          titleAm: "GIS — ትርጉም",
          body:
            "GIS (Geographic Information System):\n" +
            "• COMPUTER-BASED system.\n" +
            "• STORES, VISUALIZES, ANALYZES, INTERPRETS geographic data.\n\n" +
            "Result: more sophisticated mapping systems.",
          bodyAm:
            "ማከማቸት + ማሳየት + መተንተን + መተርጎም።",
        },
        {
          id: "n4-3",
          title: "Five components of GIS",
          titleAm: "አምስቱ አካላት",
          body:
            "1) HARDWARE:\n" +
            "• Computer + printers, plotters, scanners.\n\n" +
            "2) METHODS:\n" +
            "• Guidelines, specifications, standards, procedures.\n\n" +
            "3) SOFTWARE:\n" +
            "• GIS software.\n" +
            "• Database software.\n" +
            "• OS software.\n" +
            "• Network software.\n\n" +
            "4) PEOPLE:\n" +
            "• Administrators, managers, GIS technicians, application experts, end users, consumers.\n\n" +
            "5) DATA:\n" +
            "• Vector data, raster data, image data, attribute data.\n" +
            "• Must be accurate.\n\n" +
            "MNEMONIC: Hardware, Methods, Software, People, Data.",
          bodyAm:
            "Hardware, Methods, Software, People, Data።\n" +
            "HMSPD።",
        },
        {
          id: "n4-4",
          title: "Creating a map with ArcMap",
          titleAm: "በArcMap ካርታ መሥራት",
          body:
            "STEPS TO CREATE A LOCAL ADMINISTRATIVE MAP:\n" +
            "1) Start ArcMap; add data layers.\n" +
            "2) Connect to folder (Ethio-GIS data).\n" +
            "3) Select shapefiles (e.g., etbound01co, etregio01co).\n" +
            "4) Set symbol to hollow.\n" +
            "5) Select area of interest (e.g., Oromia).\n" +
            "6) Export data → save to folder.\n" +
            "7) Add marginal information:\n" +
            "   • Legend.\n" +
            "   • Scale bar.\n" +
            "   • North arrow.\n" +
            "   • Coordinate information.\n" +
            "   • Gridlines.\n" +
            "   • Date of compilation.",
          bodyAm:
            "Data → Symbol → Export → Margins።\n" +
            "Legend, Scale, North arrow።",
        },
        {
          id: "n4-5",
          title: "⚠ Remember trap — GIS",
          titleAm: "⚠ አትርሳ — GIS",
          body:
            "• GIS = store, visualize, analyze, interpret geographic data.\n" +
            "• 5 components: Hardware, Methods, Software, People, Data.\n" +
            "• HARDWARE = computer + printers/plotters/scanners.\n" +
            "• METHODS = guidelines, specifications, standards, procedures.\n" +
            "• SOFTWARE = GIS + database + OS + network.\n" +
            "• PEOPLE = admins, managers, technicians, end users.\n" +
            "• DATA = vector, raster, image, attribute.\n" +
            "• Satellite = major advance in mapping.",
          bodyAm:
            "HMSPD።\n" +
            "Store, visualize, analyze, interpret።",
        },
      ],
    },

    // ============================================================
    // 8.5 GRAPHS, CHARTS, DIAGRAMS
    // ============================================================
    {
      id: "n5",
      title: "8.5 Making and Interpreting Graphs, Charts and Diagrams",
      titleAm: "8.5 ግራፎች፣ ቻርቶችና ዲያግራሞች",
      body:
        "Abatu, graphs, charts, and diagrams help present data effectively. Bar graph, line graph, pie chart, diagram.",
      bodyAm:
        "አባቱ፣ ባር ግራፍ፣ መስመር ግራፍ፣ pie chart፣ diagram።",
      children: [
        {
          id: "n5-1",
          title: "Purpose of graphs and charts",
          titleAm: "ዓላማ",
          body:
            "PURPOSE:\n" +
            "• Draw + keep attention.\n" +
            "• Evidence-based work.\n" +
            "• Help audience understand + memorize key points.\n" +
            "• Describe trends.\n" +
            "• Make comparisons.\n" +
            "• Show relationships.\n\n" +
            "TOOLS:\n" +
            "• Microsoft Excel.\n" +
            "• Microsoft Word.\n" +
            "• SPSS.",
          bodyAm:
            "ትኩረት መሳብ።\n" +
            "ዝንባሌ ማሳየት።\n" +
            "ንጽጽር ማድረግ።",
        },
        {
          id: "n5-2",
          title: "Bar graph",
          titleAm: "Bar graph",
          body:
            "BAR GRAPH:\n" +
            "• Shows relationships between different data series.\n" +
            "• Data series are INDEPENDENT of each other.\n" +
            "• Height or length of bar = measured value/frequency.\n" +
            "• Example: rainfall data at Gore Town.",
          bodyAm:
            "ባር = ገለልተኛ ዳታ።\n" +
            "ምሳሌ: የጎሬ ዝናብ።",
        },
        {
          id: "n5-3",
          title: "Line graph",
          titleAm: "Line graph",
          body:
            "LINE GRAPH:\n" +
            "• Shows how data has changed over TIME.\n" +
            "• Useful for demonstrating TRENDS.\n" +
            "• Numbers are CONNECTED.\n" +
            "• Example: temperature variation within one year.",
          bodyAm:
            "የጊዜ ለውጥ።\n" +
            "ዝንባሌ።\n" +
            "ምሳሌ: የሙቀት መጠን።",
        },
        {
          id: "n5-4",
          title: "Pie chart",
          titleAm: "Pie chart",
          body:
            "PIE CHART:\n" +
            "• Visualizes how a WHOLE is divided into parts.\n" +
            "• Each segment = category.\n" +
            "• Represents PERCENTAGE distribution.\n" +
            "• Example: sex distribution of students.",
          bodyAm:
            "ሙሉ → ክፍሎች።\n" +
            "በ% ማሳየት።",
        },
        {
          id: "n5-5",
          title: "Diagram",
          titleAm: "Diagram",
          body:
            "DIAGRAM:\n" +
            "• Plan, drawing, or outline.\n" +
            "• Shows how separate parts work + overlap at connecting points.\n" +
            "• Example: components of sustainable development drawn in Microsoft Word.",
          bodyAm:
            "ንድፍ/ሥዕል።\n" +
            "ክፍሎች እንዴት እንደሚገናኙ።",
        },
        {
          id: "n5-6",
          title: "⚠ Remember trap — Graphs",
          titleAm: "⚠ አትርሳ — ግራፎች",
          body:
            "• BAR GRAPH = independent data series.\n" +
            "• LINE GRAPH = change over TIME + trends.\n" +
            "• PIE CHART = whole → parts (%).\n" +
            "• DIAGRAM = shows how parts work/overlap.\n" +
            "• Excel + Word + SPSS = tools.\n" +
            "• Bar: rainfall.\n" +
            "• Line: temperature over time.\n" +
            "• Pie: sex distribution.",
          bodyAm:
            "Bar = ገለልተኛ።\n" +
            "Line = ጊዜ።\n" +
            "Pie = %።\n" +
            "Diagram = ክፍሎች።",
        },
      ],
    },

    // ============================================================
    // KEY DEFINITIONS
    // ============================================================
    {
      id: "nFormula",
      title: "Key Definitions & Relationships — Unit 8",
      titleAm: "ዋና ትርጓሜዎች — ክፍል 8",
      body:
        "| Concept                       | Definition / Key Fact                              |\n" +
        "|-------------------------------|----------------------------------------------------|\n" +
        "| Data                          | Raw observations; input to computer                |\n" +
        "| Information                   | Processed data; output from computer               |\n" +
        "| Geospatial data               | Location + attribute + temporal information        |\n" +
        "| Discrete object               | Well-defined boundaries (lake)                     |\n" +
        "| Continuous data               | Varies across surface (elevation)                  |\n" +
        "| Direct data                   | Measured at source                                 |\n" +
        "| Remote data                   | Measured from distance (satellite)                 |\n" +
        "| GPS                           | 4+ satellites to determine location                |\n" +
        "| Digitizer                     | Converts analogue → digital                        |\n" +
        "| Vector                        | Points + lines + polygons                          |\n" +
        "| Raster                        | Grid cells                                         |\n" +
        "| Node                          | Starts or ends an arc                              |\n" +
        "| Polygon                       | Closed string of coordinates                       |\n" +
        "| GIS                           | Store, visualize, analyze, interpret               |\n" +
        "| GIS components                | Hardware, Methods, Software, People, Data          |\n" +
        "| Bar graph                     | Independent data series                            |\n" +
        "| Line graph                    | Trends over time                                   |\n" +
        "| Pie chart                     | Whole → parts (%)                                  |\n" +
        "| Diagram                       | Shows how parts work/overlap                       |",
      bodyAm:
        "| ጽንሰ-ሐሳብ         | ትርጉም                          |\n" +
        "|------------------|--------------------------------|\n" +
        "| Data             | ጥሬ                            |\n" +
        "| Information      | የተቀነባበረ                      |\n" +
        "| Geospatial       | ቦታ + ባህሪ + ጊዜ                 |\n" +
        "| GPS              | 4+ ሳተላይቶች                    |\n" +
        "| Vector           | Point/Line/Polygon              |\n" +
        "| Raster           | ሴሎች                          |\n" +
        "| GIS              | HMSPD                          |",
    },

    // ============================================================
    // EXAM TRAPS
    // ============================================================
    {
      id: "nTraps",
      title: "Common Exam Traps — Unit 8",
      titleAm: "የተለመዱ የፈተና ወጥመዶች — ክፍል 8",
      body:
        "1) DATA = input; INFORMATION = output.\n" +
        "2) Geospatial data = location + attribute + temporal.\n" +
        "3) Without location → ASPATIAL (no value).\n" +
        "4) DISCRETE = well-defined; CONTINUOUS = varies across surface.\n" +
        "5) GPS needs 4+ satellites.\n" +
        "6) Digitizer = analogue → digital.\n" +
        "7) Table digitizer = georeferenced; scanner/phone = need georeferencing.\n" +
        "8) VECTOR = point/line/polygon.\n" +
        "9) RASTER = grid cells.\n" +
        "10) NODE = starts/ends an arc.\n" +
        "11) GIS components: Hardware, Methods, Software, People, Data.\n" +
        "12) Bar = independent series; Line = trend over time; Pie = parts of whole.",
      bodyAm:
        "1) Data input, info output።\n" +
        "2) 4+ ሳተላይቶች።\n" +
        "3) Vector/Raster።\n" +
        "4) HMSPD።",
    },
  ],

  // ============================================================
  // QUESTIONS — 50
  // ============================================================
  questions: [
    // ==================== EASY MCQ (Q1–Q18) ====================
    { id: "q1", type: "mcq", difficulty: "easy", stem: "Data refers to:", options: ["Processed information", "Raw observations", "Final reports", "Maps only"], answer: "1", explanation: "Data = raw observations." },
    { id: "q2", type: "mcq", difficulty: "easy", stem: "Information is:", options: ["Raw data", "Processed data", "Unprocessed facts", "Input only"], answer: "1", explanation: "Information = processed data." },
    { id: "q3", type: "mcq", difficulty: "easy", stem: "Geospatial data combines:", options: ["Only location", "Location + attribute + temporal", "Only attributes", "Only time"], answer: "1", explanation: "Location + attribute + temporal." },
    { id: "q4", type: "mcq", difficulty: "easy", stem: "Without LOCATION, data is:", options: ["More useful", "Aspatial (no value)", "More accurate", "Always digital"], answer: "1", explanation: "Without location = ASPATIAL." },
    { id: "q5", type: "mcq", difficulty: "easy", stem: "Which is a DISCRETE object?", options: ["Elevation", "Lake", "Temperature", "Rainfall"], answer: "1", explanation: "Lake = discrete object (clear boundaries)." },
    { id: "q6", type: "mcq", difficulty: "easy", stem: "Which is CONTINUOUS data?", options: ["A lake", "A house", "Elevation", "A road intersection"], answer: "2", explanation: "Elevation = continuous." },
    { id: "q7", type: "mcq", difficulty: "easy", stem: "Directly collected data is measured:", options: ["From satellites", "At the source", "From space", "By remote sensing"], answer: "1", explanation: "Direct = at source." },
    { id: "q8", type: "mcq", difficulty: "easy", stem: "Remotely sensed data is measured:", options: ["At the source", "Without direct contact", "On paper only", "By GPS only"], answer: "1", explanation: "Remote = without direct contact." },
    { id: "q9", type: "mcq", difficulty: "easy", stem: "GPS requires at least how many satellites?", options: ["1", "2", "3", "4"], answer: "3", explanation: "4+ satellites." },
    { id: "q10", type: "mcq", difficulty: "easy", stem: "Digitizer converts:", options: ["Digital → analogue", "Analogue → digital", "Audio → video", "Text → image"], answer: "1", explanation: "Digitizer = analogue → digital." },
    { id: "q11", type: "mcq", difficulty: "easy", stem: "Vector data uses:", options: ["Grid cells", "Points + lines + polygons", "Pixels", "Pictures only"], answer: "1", explanation: "Vector = points/lines/polygons." },
    { id: "q12", type: "mcq", difficulty: "easy", stem: "Raster data uses:", options: ["Grid cells", "Points + lines", "Photographs only", "Coordinate strings"], answer: "0", explanation: "Raster = grid cells." },
    { id: "q13", type: "mcq", difficulty: "easy", stem: "A node is:", options: ["A polygon", "A vertex that starts or ends an arc", "A grid cell", "A map label"], answer: "1", explanation: "Node = starts/ends an arc." },
    { id: "q14", type: "mcq", difficulty: "easy", stem: "GIS stands for:", options: ["Global Information System", "Geographic Information System", "General Information Source", "Geospatial Image Structure"], answer: "1", explanation: "Geographic Information System." },
    { id: "q15", type: "mcq", difficulty: "easy", stem: "GIS is a:", options: ["Hardware component only", "Computer-based system", "Paper map", "Digitizer"], answer: "1", explanation: "GIS = computer-based system." },
    { id: "q16", type: "mcq", difficulty: "easy", stem: "A bar graph is used for:", options: ["Trends over time", "Independent data series", "Whole-part relation", "Processes"], answer: "1", explanation: "Bar = independent series." },
    { id: "q17", type: "mcq", difficulty: "easy", stem: "A line graph shows:", options: ["Independent data", "Trends over time", "Whole-part relation", "Pictures"], answer: "1", explanation: "Line = trends over time." },
    { id: "q18", type: "mcq", difficulty: "easy", stem: "A pie chart shows:", options: ["Trends", "Whole → parts", "Processes", "Locations"], answer: "1", explanation: "Pie = whole divided into parts." },

    // ==================== MEDIUM MCQ (Q19–Q35) ====================
    { id: "q19", type: "mcq", difficulty: "medium", stem: "Which is NOT part of the data lifecycle?", options: ["Collection", "Processing", "Destruction", "Dissemination"], answer: "2", explanation: "Lifecycle: collection → processing → analysis → dissemination." },
    { id: "q20", type: "mcq", difficulty: "medium", stem: "Data is used as ___ for a computer system:", options: ["Output", "Input", "Both", "Neither"], answer: "1", explanation: "Data = INPUT." },
    { id: "q21", type: "mcq", difficulty: "medium", stem: "Secondary sources of data refer to:", options: ["Primary field survey data", "Data gathered for other reasons that can be reused", "Only satellite images", "Only GPS data"], answer: "1", explanation: "Secondary = gathered for other reasons." },
    { id: "q22", type: "mcq", difficulty: "medium", stem: "Which is NOT part of the GPS output?", options: ["Latitude", "Longitude", "Elevation", "Population"], answer: "3", explanation: "GPS gives lat/long + elevation, not population." },
    { id: "q23", type: "mcq", difficulty: "medium", stem: "Table digitizer data is:", options: ["Auto georeferenced", "Never georeferenced", "Always raster", "Always image"], answer: "0", explanation: "Table digitizer = georeferenced." },
    { id: "q24", type: "mcq", difficulty: "medium", stem: "Scanner and smartphone images need:", options: ["Digitization only", "Georeferencing", "No processing", "Only printing"], answer: "1", explanation: "Need georeferencing." },
    { id: "q25", type: "mcq", difficulty: "medium", stem: "A POLYGON is:", options: ["A single cell", "A line segment", "A closed string of coordinates", "A photograph"], answer: "2", explanation: "Polygon = closed string of coordinates." },
    { id: "q26", type: "mcq", difficulty: "medium", stem: "Raster cell size is based on:", options: ["Random choice", "Data accuracy + resolution", "Price", "Location only"], answer: "1", explanation: "Based on accuracy + resolution." },
    { id: "q27", type: "mcq", difficulty: "medium", stem: "Which is a raster feature?", options: ["Node", "Vertex", "Grid cell", "Arc"], answer: "2", explanation: "Raster = grid cell." },
    { id: "q28", type: "mcq", difficulty: "medium", stem: "Which is a vector feature?", options: ["Cell", "Grid", "Node", "Pixel"], answer: "2", explanation: "Node = vector feature." },
    { id: "q29", type: "mcq", difficulty: "medium", stem: "How many components of GIS are there?", options: ["3", "4", "5", "6"], answer: "2", explanation: "5 components." },
    { id: "q30", type: "mcq", difficulty: "medium", stem: "Which is NOT a GIS component?", options: ["Hardware", "Software", "People", "Weather"], answer: "3", explanation: "Weather is NOT a GIS component." },
    { id: "q31", type: "mcq", difficulty: "medium", stem: "GIS software functions include:", options: ["Store, analyze, display geographic data", "Build houses", "Manufacture computers", "Grow crops"], answer: "0", explanation: "Store, analyze, display geographic data." },
    { id: "q32", type: "mcq", difficulty: "medium", stem: "Which map feature represents a telephone tower?", options: ["Line", "Polygon", "Point", "Image"], answer: "2", explanation: "Tower = POINT." },
    { id: "q33", type: "mcq", difficulty: "medium", stem: "Which map feature represents a river?", options: ["Point", "Line", "Polygon", "Cell"], answer: "1", explanation: "River = LINE." },
    { id: "q34", type: "mcq", difficulty: "medium", stem: "Which map feature represents an administrative boundary?", options: ["Point", "Line", "Polygon", "Image"], answer: "2", explanation: "Administrative boundary = POLYGON." },
    { id: "q35", type: "mcq", difficulty: "medium", stem: "Which tool has driven the need for putting reality into the computer?", options: ["Paper", "Digital technology", "Printing", "Photocopying"], answer: "1", explanation: "Digital technology." },

    // ==================== HARD MCQ (Q36–Q43) ====================
    { id: "q36", type: "mcq", difficulty: "hard", stem: "Which statement about data vs information is FALSE?", options: ["Data is input", "Information is output", "Information depends on data", "Data depends on information"], answer: "3", explanation: "Data does NOT depend on information." },
    { id: "q37", type: "mcq", difficulty: "hard", stem: "Which is NOT a key component of geospatial data?", options: ["Location", "Attribute", "Temporal", "Paper color"], answer: "3", explanation: "Paper color is irrelevant." },
    { id: "q38", type: "mcq", difficulty: "hard", stem: "Why is location essential in geospatial data?", options: ["It gives an attractive map", "It allows linking information + measuring distances", "It's optional", "It's for decoration"], answer: "1", explanation: "Location allows linking + measuring." },
    { id: "q39", type: "mcq", difficulty: "hard", stem: "Digital data is superior to analogue because:", options: ["More expensive", "Harder to copy", "Easier to copy, process, analyze + store densely", "Only for large maps"], answer: "2", explanation: "Digital = easy to copy, process, analyze, store densely." },
    { id: "q40", type: "mcq", difficulty: "hard", stem: "Which correctly lists GIS methods components?", options: ["Guidelines, specifications, standards, procedures", "Hardware, software, data", "People, GPS, digitizer", "Data, maps, charts"], answer: "0", explanation: "Guidelines, specifications, standards, procedures." },
    { id: "q41", type: "mcq", difficulty: "hard", stem: "Which best describes GIS's difference from simple maps?", options: ["Only bigger", "Computer-based system that stores, visualizes, analyzes, interprets", "Just printed on paper", "Only for navigation"], answer: "1", explanation: "Computer-based + analysis capability." },
    { id: "q42", type: "mcq", difficulty: "hard", stem: "Why should marginal information be included on a final map?", options: ["For decoration", "To provide context + usability (legend, scale, north arrow, etc.)", "Only for beauty", "Never required"], answer: "1", explanation: "Legend, scale, north arrow, gridlines provide context." },
    { id: "q43", type: "mcq", difficulty: "hard", stem: "Which is NOT a benefit of graphs/charts in presentation?", options: ["Draws attention", "Evidence-based work", "Helps memorize", "Replaces all analysis"], answer: "3", explanation: "Graphs do NOT replace analysis — they present it." },

    // ==================== SHORT ANSWER (Q44–Q50) ====================
    { id: "q44", type: "short", difficulty: "easy", stem: "Differentiate data and information.", answer: "DATA:\n• Raw observations collected + stored (numbers, characters, images, facts, symbols).\n• INPUT to computer system.\n• Unprocessed facts/figures.\n• Does NOT depend on information.\n\nINFORMATION:\n• Result of processing, manipulating, organizing data.\n• OUTPUT of data.\n• Processed data.\n• DEPENDS on data.\n• Adds to knowledge of receiver.\n\nEXAMPLE: Raw temperatures = data; a completed climate report = information.", explanation: "Data = raw input; Information = processed output." },
    { id: "q45", type: "short", difficulty: "easy", stem: "Describe geospatial data and its three components.", answer: "GEOSPATIAL DATA: data about objects/events/phenomena that have LOCATION information on the surface of the earth.\n\nTHREE COMPONENTS:\n1) LOCATION (place):\n• Essential — coordinates on Earth.\n• Allows linking information + measuring distances/areas.\n• Without location = ASPATIAL (no value).\n\n2) TEMPORAL (time):\n• Optional.\n• Some processes too slow (elevation over 1000s of years).\n• Some rapid (temperature daily).\n\n3) ATTRIBUTE:\n• Descriptive information.\n• Physical/environmental (temperature, elevation) OR social/economic (population, income).", explanation: "Location + temporal + attribute." },
    { id: "q46", type: "short", difficulty: "medium", stem: "Differentiate vector and raster data models.", answer: "VECTOR:\n• Uses directional lines (vectors).\n• Sequential points/vertices define line segment.\n• Each vertex = X + Y coordinates.\n• POINT = 1 coordinate pair.\n• LINE = string of vertices between nodes.\n• POLYGON = closed string of coordinates.\n• NODE = vertex that starts/ends an arc.\n\nRASTER:\n• Uses GRID-CELL data structure.\n• Cells identified by row + column.\n• Cell size based on accuracy + resolution.\n• Points = single cell.\n• Lines = sequences of cells.\n• Areas = collections of contiguous cells.\n\nKEY: Vector = precise boundaries; Raster = continuous surfaces + imagery.", explanation: "Vector = points/lines/polygons; Raster = grid cells." },
    { id: "q47", type: "short", difficulty: "medium", stem: "Explain the sources and tools of geographic data.", answer: "SOURCES:\n1) DIRECTLY COLLECTED:\n• Measured at source.\n• Temperature at weather stations, elevations via field visits.\n• Surveys (census, sample) + observation.\n\n2) REMOTELY SENSED:\n• Measured from distance; no direct contact.\n• Satellite images.\n\nMOST COMMON SOURCES:\n• Hard copy (analogue) maps.\n• Aerial photographs.\n• Remotely-sensed imagery.\n• Point data samples from surveys.\n• Existing digital data files.\n\nTOOLS:\n1) GPS:\n• Satellite network to determine exact location.\n• 4+ satellites.\n• Provides lat/long + elevation.\n\n2) DIGITIZERS:\n• Convert analogue → digital.\n• Table digitizer, scanner, smartphone.\n• Table digitizer = georeferenced; scanner/phone = need georeferencing.", explanation: "Direct/remote; GPS + digitizers." },
    { id: "q48", type: "short", difficulty: "medium", stem: "Explain GIS and its five components.", answer: "GIS (Geographic Information System): a COMPUTER-BASED system that enables us to STORE, VISUALIZE, ANALYZE, and INTERPRET geographic data.\n\nFIVE COMPONENTS:\n1) HARDWARE:\n• Computer + attached devices (printers, plotters, scanners).\n\n2) METHODS:\n• Well-designed plans, application procedures, rules.\n• Guidelines, specifications, standards, procedures.\n\n3) SOFTWARE:\n• GIS software.\n• Database software.\n• Operating system software.\n• Network software.\n\n4) PEOPLE:\n• Administrators, managers, GIS technicians, application experts, end users, consumers.\n\n5) DATA:\n• Vector, raster, image, attribute data.\n• Must be ACCURATE.", explanation: "Store, visualize, analyze, interpret; 5 components = HMSPD." },
    { id: "q49", type: "short", difficulty: "hard", stem: "Compare bar graph, line graph, pie chart, and diagram.", answer: "BAR GRAPH:\n• Shows relationships between different data series.\n• Data series are INDEPENDENT of each other.\n• Bar height/length = measured value/frequency.\n• Example: rainfall at Gore Town.\n\nLINE GRAPH:\n• Shows how data has changed over TIME.\n• Demonstrates TRENDS.\n• Numbers are CONNECTED.\n• Example: temperature over one year.\n\nPIE CHART:\n• Visualizes how a WHOLE is divided into PARTS.\n• Each segment = category.\n• Represents PERCENTAGE distribution.\n• Example: sex distribution of students.\n\nDIAGRAM:\n• Plan, drawing, or outline.\n• Shows how separate parts work + overlap at connecting points.\n• Example: sustainable development components in Microsoft Word.\n\nCOMMON TOOLS: Excel, Word, SPSS.", explanation: "Bar = independent; Line = time; Pie = %; Diagram = parts/overlap." },
    { id: "q50", type: "short", difficulty: "hard", stem: "Explain the role of digital technology in mapmaking and geographic data representation.", answer: "DIGITAL TECHNOLOGY IMPACT:\n\n1) DRIVEN THE NEED to put reality into the computer.\n\n2) DIGITAL REPRESENTATIONS:\n• Increasingly important.\n• Advantages over paper maps:\n  – Easy to copy + transmit at high speeds.\n  – High-density storage in small spaces.\n  – Less subject to physical deterioration.\n  – Easy to transform, process, analyze.\n\n3) SOPHISTICATED MAPPING SYSTEMS:\n• GIS (Geographic Information System).\n• Computer-based system.\n• Store, visualize, analyze, interpret.\n• Combined with satellites → accurate, up-to-date maps.\n\n4) DATA STRUCTURES:\n• Vector (points/lines/polygons).\n• Raster (grid cells).\n• Image (photographs).\n\n5) PRACTICAL EXAMPLE:\n• ArcMap: connect to folder → add shapefiles → set symbols → select area of interest → export → add marginal info (legend, scale, north arrow, gridlines, date).\n\nKEY: Digital technology revolutionized mapmaking — more accurate, faster, more accessible.", explanation: "Digital → accurate, easy, fast, GIS-based mapmaking." },
  ],
};