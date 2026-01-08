import type { Project, TimelineItem } from '../types';

export const projects: Project[] = [
  // ==================== DATA PROJECTS ====================
  {
  id: 1,
  title: "Alachua County Crime & Real Estate Analytics Platform",
  category: "Data",
  tags: ["Python", "Pandas", "GeoPandas", "Leaflet.js", "Data Visualization", "Geospatial Analysis", "Census API", "Statistical Analysis"],
  year: "2024",
  shortDescription: "Comprehensive geospatial analytics platform analyzing 50,000+ crime incidents and 150,000+ property records to identify socioeconomic correlations and spatial patterns.",
  
  fullDescription: "Developed as Research Intern at Loss Prevention Research Council, this platform integrates crime data, real estate transactions, and US Census demographics to explore relationships between socioeconomic factors, points of interest proximity, and crime patterns across Alachua County. Features interactive 2D/3D visualizations, statistical correlation analysis, and advanced geospatial processing.",
  
  process: [
    {
      text: "Data Sourcing & Cleaning: Extracted 150,000+ property records from Alachua County Records (80 years of data) and 50,000+ crime incidents from public database. Converted raw .txt files to structured dataframes using Python/Pandas by cleaning whitespace, adding delimiters, and merging sales/ownership data on parcel IDs. Filtered to 5-year window (2020-2025) for temporal alignment with crime data.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/data_process.png?raw=true"
      ]
    },
    {
      text: "Geospatial Processing & Mapping: Implemented GeoPandas to process parcel geometries and coordinate transformations. Created GeoJSON files merging crime locations with property boundaries for spatial analysis. Built interactive Leaflet.js map with marker clustering to visualize 50,000+ incidents, enabling zoom-based exploration of crime patterns across neighborhoods.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/3d%20visualization.png?raw=true"
      ]
    },
    {
      text: "Demographic Integration: Leveraged US Census Bureau API to extract ZIP code-level demographic and socioeconomic indicators including median household income, poverty rates, education levels, gender distribution, commute times, and internet access. Merged census data with real estate transactions and crime records to enable multi-dimensional correlation analysis of 12+ variables.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/demographics%20vs%20crime.png?raw=true"
      ]
    },
    {
      text: "Statistical Correlation Analysis: Conducted comprehensive correlation analysis examining relationships between crime rates, real estate values, and socioeconomic factors. Normalized all variables for fair comparison and generated correlation matrices revealing significant patterns: income/poverty strongly negatively correlated with crime (-0.95 for poverty), male population positively correlated with crime incidents, and longer commute times associated with lower crime rates.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/correlation_matrix_normalized.png?raw=true", // Your first correlation heatmap
        "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/correlation_demographic_matrix.png?raw=true"  // Your second simplified matrix
      ]
    },
    {
      text: "Points of Interest (POI) Analysis: Integrated OpenStreetMap data to calculate distances between properties and 20+ POI categories (universities, police stations, restaurants, banks, community centers, etc.). Analyzed spatial relationships revealing exponential decay patterns—crime incidents increase significantly near universities and outdoor seating areas, with counterintuitive finding that police station proximity correlates with higher reported crime.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/places%20vs%20crime.png?raw=true" // Your 9-panel distance vs crimes visualization
      ]
    },
    {
      text: "Real Estate Pattern Analysis: Examined relationships between property values and demographic factors (income, population, education, internet access). Created scatter plot matrices revealing weak correlations between traditional economic indicators and property values, suggesting complex market dynamics influenced by investment trends, federal interest rates, and market sentiment rather than direct socioeconomic factors.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/real_estate_plot.png?raw=true" // Your 9-panel real estate analysis
      ]
    },
    {
      text: "Interactive Visualization & Deployment: Developed public-facing website with embedded Leaflet.js map, 3D Kepler.gl crime density visualization (height and color representing incident concentration), and statistical dashboards. Optimized performance for 200K+ data points through clustering algorithms and lazy loading. Deployed on GitHub Pages and Google Sites for community accessibility.",
      images: []
    }
  ],
  
  challenge: "Processing and integrating three disparate data sources (crime records, property transactions, census demographics) with inconsistent formats, missing values, and temporal misalignment. Standard approaches couldn't handle the scale (200K+ combined records) while maintaining performance for interactive visualization. Additionally, establishing meaningful correlations required sophisticated spatial joins and statistical analysis across multiple dimensions.",
  
  solution: "Engineered a multi-stage data pipeline: (1) Python/Pandas for data cleaning and transformation, (2) GeoPandas for spatial processing and coordinate normalization, (3) Census API integration for demographic enrichment, (4) Statistical correlation analysis across normalized variables, (5) Leaflet.js + Kepler.gl for interactive web visualization. Achieved 30% reduction in analysis time through optimized spatial joins and revealed significant socioeconomic patterns including strong poverty-crime correlation (-0.95) and unexpected POI proximity effects.",
  
  image: "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/project_card.png?raw=true",
  size: 'medium',
  
  demoUrl: "https://sites.google.com/view/alachuacountycrimeproject/crime-map",
  leafletMapUrl: "https://jameswilcox-git.github.io/mapData/crime_map.html",
  
  gallery: [
    "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/data_process.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/3d%20visualization.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/correlation_matrix_normalized.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/correlation_demographic_matrix.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/places%20vs%20crime.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/real_estate_plot.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/real_estate_plot.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/data_crime_project/correlation_demographic_matrix.png?raw=true"
  ],
  },

  // ==================== ENGINEERING PROJECTS ====================
  // {
  //   id: 2,
  //   title: "Bloomberg Data Discovery Search",
  //   category: "Data",
  //   tags: ["NLP", "Python", "ETL", "Database Optimization", "Fuzzy Search"],
  //   year: "2025",
  //   shortDescription: "Advanced fuzzy search solution reducing data discovery time by 78%.",
  //   fullDescription: "During my internship at Bloomberg in Princeton, NJ, I engineered an advanced fuzzy search solution leveraging NLP techniques to streamline data discovery processes for the knowledge graph platform.",
  //   process: [
  //     "Problem Analysis: Identified bottlenecks in the manual data discovery process that was slowing down team onboarding to Bloomberg's knowledge graph platform.",
  //     "NLP Implementation: Engineered fuzzy search solution using NLP techniques and proprietary database queries to intelligently match search queries with relevant datasets.",
  //     "ETL Pipeline Design: Designed and implemented scalable ETL pipelines to onboard and validate 500+ complex financial datasets into Bloomberg's semantic database, ensuring seamless integration."
  //   ],
  //   challenge: "Manual data discovery was extremely time-consuming, hindering team productivity and slowing down onboarding to Bloomberg's knowledge graph platform. The system needed to handle complex financial datasets while maintaining accuracy.",
  //   solution: "Deployed an advanced fuzzy search solution leveraging NLP techniques that reduced manual discovery time by 78%, while implementing scalable ETL pipelines that processed 500+ complex financial datasets with seamless integration.",
  //   image: "from-blue-800 to-indigo-950",
  //   size: 'medium'
  // },

  {
  id: 3,
  title: "Automated Document Generation System",
  category: "Data",
  tags: ["Google Apps Script", "JavaScript", "Document Automation", "Google Docs API", "Data Processing"],
  year: "2024",
  shortDescription: "Automated compliance document generator reducing manual work by 83% and processing 1,000+ records.",
  fullDescription: "Built an intelligent document automation system that transforms spreadsheet data into professionally formatted compliance documents across multiple languages. The system handles dynamic user inputs, complex data transformations, and publication-ready formatting through Google Apps Script and Docs API integration.",
  
  process: [
    {
      text: "Problem Analysis & Workflow Mapping: Identified 12-hour weekly bottleneck in manual document creation for literacy compliance reporting. Mapped existing workflow to understand data sources (Google Sheets with 1,000+ records across 5 years), required document formats (4 language variants with specific styling), and pain points (repetitive formatting, manual cross-referencing, high error potential).",
      images: [] 
    },
    {
      text: "System Architecture Design: Designed data pipeline connecting Google Sheets input to formatted document output. Architecture includes user input module for dynamic parameters, data extraction and transformation layer, document generation engine with conditional formatting logic, and Google Docs API integration for advanced styling. System processes multiple language variants in parallel with category-specific formatting rules.",
      images: [
        "https://raw.githubusercontent.com/myanramsey/my-portfolio/dc397606d98666f700edc42a9e8095102601f640/public/google_script_project/systems_diagram.png" 
      ]
    },
    {
      text: "Data Processing Pipeline: Implemented extraction system to pull records from Google Sheets with user-defined parameters. Built filtering logic to process boolean flags, reorganize columns by priority, and categorize 1,000+ records by language (English, Spanish, Braille, Haitian Creole). Created transformation functions to standardize grade codes, handle missing values, and prepare data for document insertion.",
      images: ["https://github.com/myanramsey/my-portfolio/blob/main/public/google_script_project/Sample_table.png?raw=true"]
    },
    {
      text: "Document Generation & Formatting: Developed programmatic document creator with custom page dimensions (11\"×8.5\" landscape), precise margin control, dynamic headers/footers, and conditional footnotes per language variant. Converted data arrays into styled tables with automatic formatting. Integrated Google Docs API for pixel-perfect border control and advanced table styling unavailable in standard DocumentApp.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/google_script_project/Braille%20Titles%20Final.png?raw=true"
      ]
    },
    {
      text: "Multi-Document Output & Validation: Implemented automated generation of 4 separate documents per run (one per language category), each with category-specific formatting rules and footnotes. Added data validation to filter empty rows, ensured consistent font styling (Calibri), and maintained alignment standards across all outputs. System generates document URLs for tracking and reduced workflow time from 12 hours to 2 hours weekly (83% reduction).",
      images: []
    }
  ],
  
  challenge: "Manual compliance document creation consumed 12+ hours weekly, requiring repetitive formatting across 4 language variants with specific styling requirements. Standard Google Apps Script DocumentApp lacked precise table border control, and processing 1,000+ records with multiple data sources created high risk of formatting inconsistencies and human error.",
  
  solution: "Engineered end-to-end automation pipeline using Google Apps Script and Docs API that processes spreadsheet data, applies complex transformations, and generates publication-ready documents with pixel-perfect formatting. Reduced workflow time from 12 hours to 2 hours weekly (83% reduction) while ensuring consistency across all language variants and eliminating manual formatting errors.",
  
  image: "https://raw.githubusercontent.com/myanramsey/my-portfolio/4889651e6ce765ddba00c7f77449d30ccdbd7765/public/google_script_project/front_card.png",
  size: 'medium',
  
  gallery: [
    "https://raw.githubusercontent.com/myanramsey/my-portfolio/dc397606d98666f700edc42a9e8095102601f640/public/google_script_project/systems_diagram.png", // Primary visual
    "https://github.com/myanramsey/my-portfolio/blob/main/public/google_script_project/Braille%20Titles%20Final.png?raw=true", // Shows final formatting
    "https://github.com/myanramsey/my-portfolio/blob/main/public/google_script_project/Sample_table.png?raw=true" // Shows table details
  ]
  },


  // ==================== DESIGN PROJECTS ====================
  {
  id: 4,
  title: "SRTD File Organizer",
  category: "Engineering",
  tags: ["Python", "PySide6", "OpenAI API", "Weaviate", "RapidFuzz", "AI/ML", "Vector Database"],
  githubUrl: "https://github.com/CakeCrusher/srtd",
  demoUrl: "https://youtu.be/YQqr9JB9vEw", 
  year: "2024",
  shortDescription: "AI-powered file organization system helping students manage academic materials with intelligent contextual understanding and semantic search.",
  
  fullDescription: "Built to solve the problem that 50% of students lack a unified system to manage academic materials. SRTD leverages AI to intelligently organize and locate relevant files through contextual understanding, fuzzy matching, and automatic summarization—empowering students to focus on learning rather than file management.",

  challenge: "Students face overwhelming amounts of educational content spread across devices, with 87% believing better organization would improve their grades. The challenge was building an AI system that could understand file context, handle bulk processing, and present organization suggestions transparently without feeling like a 'black box.'",

  solution: "Engineered a cross-platform desktop application using PySide6 that combines OpenAI's API for semantic analysis, Weaviate vector database for efficient embedding storage, and RapidFuzz for fuzzy string matching. The system analyzes file content, generates intelligent organization suggestions with confidence scores, and requires user confirmation before moving files—keeping humans in the loop.",

  process: [
    {
      text: "Problem Research & Scope Definition: Identified that 50% of students lack unified file management systems and 87% believe better organization would improve grades. Defined core features: AI-driven contextual understanding, pattern matching, efficient summarization, and bulk processing.",
      images: []
    },
    
    {
      text: "Tech Stack Selection: Chose PySide6 for cross-platform GUI, OpenAI API for semantic analysis and embeddings, Weaviate vector database for scalable similarity search, RapidFuzz for fast fuzzy matching, and PyPDF2 for PDF text extraction. Each tool selected for specific strengths in the AI-powered workflow.",
      images: [
        "https://github.com/user-attachments/assets/c038cadf-81a1-4ecf-b45b-7ad69fe4eff4" // UML diagram
      ]
    },
    
    {
      text: "File Analysis Pipeline: Built system to access file system, process files into structured objects, and analyze using OpenAI API to generate summaries, extract key information, and create embeddings. Implemented fuzzy matching to identify filename similarities and AI embeddings to group files by content context.",
      images: []
    },
    
    {
      text: "GUI Development with PySide6: Designed and implemented cross-platform interface displaying original file locations, AI-suggested destinations, confidence scores for each decision, and file summaries. Overcame team's limited GUI experience to deliver fully functional interface with user confirmation workflow.",
      images: [
        "https://github.com/user-attachments/assets/08c86c60-8b7e-405b-8aba-7fee6e1f2665", // Selecting files
        "https://github.com/user-attachments/assets/4ce981a9-c70b-44f9-96a1-e7d38515ecce"  // Transferring files
      ]
    },
    
    {
      text: "Vector Database Integration: Implemented Weaviate to efficiently store embeddings generated by OpenAI API and enable semantic similarity matching. This allowed SRTD to cluster files based on contextual relationships at scale with fast retrieval performance.",
      images: []
    },
    
    {
      text: "Team Collaboration & Debugging: Navigated merge conflicts, coordinated contributions across team members with different expertise areas, and debugged Python runtime errors caused by lack of static typing. Successfully integrated multiple technologies (AI, fuzzy matching, PDF processing, vector database) into cohesive system.",
      images: [
        "https://github.com/user-attachments/assets/74792827-e9ce-454d-b933-dcb51db4924d", // UI design process
        "https://github.com/user-attachments/assets/60a1acb3-1cec-4158-a05c-cbcb417cd42b"  // Design slides
      ]
    },
    
    "Key Lessons Learned: Breaking down features into manageable components is critical for AI projects. GUI development requires more time than expected—plan accordingly. Python's simplicity can mask debugging challenges when runtime errors emerge. Keeping users in the loop (confirmation workflow) builds trust in AI systems."
  ],

  image: "https://github.com/user-attachments/assets/d88dc431-03a0-4a1f-b10e-7b7953f7e08f",
  size: 'medium',
  
  gallery: [
    "https://github.com/user-attachments/assets/d88dc431-03a0-4a1f-b10e-7b7953f7e08f", // Hero image
    "https://github.com/user-attachments/assets/08c86c60-8b7e-405b-8aba-7fee6e1f2665", // Selecting files
    "https://github.com/user-attachments/assets/4ce981a9-c70b-44f9-96a1-e7d38515ecce", // Transferring files
    "https://github.com/user-attachments/assets/c038cadf-81a1-4ecf-b45b-7ad69fe4eff4", // UML diagram
    "https://github.com/user-attachments/assets/74792827-e9ce-454d-b933-dcb51db4924d", // UI design
    "https://github.com/user-attachments/assets/60a1acb3-1cec-4158-a05c-cbcb417cd42b"  // Design process
  ]
 },

  // ==================== INNOVATION PROJECTS (COMBINED) ====================
  {
  id: 5,
  title: "Innovation Academy Journey",
  category: "Design",
  tags: [
    "Design Thinking",
    "Fusion 360",
    "Prototyping",
    "User Research",
    "Figma",
    "Ireland",
    "UF Innovation Academy"
  ],
  year: "2022–2025",
  
  
  shortDescription:
    "How studying design thinking in Ireland before any CS coursework taught me to solve problems through empathy, prototyping, and iteration—skills that now shape every technical project I build.",
  
  fullDescription:
    "I started UF's Innovation Academy uncertain about the non-traditional path, but studying abroad in Ireland for my first semester taught me the design thinking process—empathize, define, ideate, prototype, test—before I wrote a single line of code. Through hands-on projects tackling real travel, accessibility, and sustainability challenges, I learned to build solutions that put users first.",

  challenge:
    "Starting in an innovation-focused program with an unconventional schedule, abroad, before any CS coursework made it unclear how this path would support a technical career. Could design thinking skills translate to computer science and data engineering work?",

  solution:
    "Treating Innovation Academy as a laboratory for human-centered problem-solving. By applying the design thinking framework across multiple real-world projects—from smart luggage to accessibility solutions—I built a foundation in empathy, prototyping, and iteration that now guides how I approach every CS and data project, from code architecture to interface design.",

  process: [
    {
      text: "Took a chance on Ireland: Committed to studying abroad for my first Innovation Academy semester before any formal CS classes, approaching it as an experiment in learning how innovators think and solve problems.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/maynooth_campus.jpeg?raw=true",
        "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/ireland_castle.jpeg?raw=true"
      ]
    },
    
    {
      text: "PAAMS - Smart Luggage Solution: Led the design process as Chief Design Officer for a smart suitcase with integrated sensors that scan contents for prohibited items before travelers reach airport security. Ran rapid 'Crazy Eights' ideation sessions with my team, built physical prototypes, and managed the lifecycle from hardware constraints to digital UX. Learned end-to-end product design, 3D CAD (Fusion 360), hybrid hardware/software UX, and design leadership.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/paams_project.jpg?raw=true",
      ]
    },
    
    {
      text: "TravHelp - Anxiety-Free Travel App: Created a mobile app that consolidates tickets, weather, navigation, and mental health check-ins into one interface for the 25% of travelers who experience anxiety. Designed features like 'Nearest Restroom' locator and 'Calm Zone' finder to de-escalate high-stress moments. Developed skills in information architecture, user-centric design, and low-to-high fidelity prototyping.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/TravHelper.jpg?raw=true",
      ]
    },
    
    {
      text: "KOSS Pro Modification - Acoustic Shield Design: Developed a custom detachable acoustic shield to eliminate sound leakage from Koss Porta Pro headphones. Started with hand-drawn orthographic sketches, modeled in Fusion 360, and created technical engineering drawings with precise measurements. Learned 3D modeling, technical drafting, CAD engineering, and design for manufacturing.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/Koss%20Pro%20Modifcation%20.jpg?raw=true",
      ]
    },
    
    {
      text: "URE-KA - Nutrient Recovery System: Applied design thinking to system-scale sustainability challenges, requiring stakeholder analysis, systems mapping, and impact-focused communication beyond single-product solutions. Learned to think about complex environmental problems holistically.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/ureka_project.jpg?raw=true",
        "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/ureka_project.png?raw=true"
      ]
    },
    
    {
      text: "Explored Ireland beyond projects: Discovered through traveling to the Cliffs of Moher, Dublin streets, and Galway Bay that life doesn't follow a set timeline. Connected with inspiring mentors like Sierra Calhoun-Pollard, Ph.D., whose cross-disciplinary approach to innovation continues to shape how I work. My study abroad classmates became my rock throughout UF—proving that the best part of innovation is the community you build.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/nature_ireland.jpeg?raw=true",
        "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/group_ireland_picture.jpg?raw=true",
        "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/ireland_landscape.jpg?raw=true",
      ]
    },
    
    "Carried the foundation into CS work: Now approach code, data pipelines, and interfaces with the same empathy-first mindset. Always ask 'Who am I building for?' and 'Why does it matter?' before diving into technical implementation. Design thinking transformed from an uncertain experiment into the core of how I solve problems."
  ],

  image: "https://github.com/myanramsey/my-portfolio/blob/a7747a7edbfabd695bb6af4ea524c44b8297dde2/public/innovation_projects/Innovation%20Projects.png?raw=true",
  size: "medium",

  gallery: [
    "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/Koss%20Pro%20Modifcation%20.jpg?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/TravHelper.jpg?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/paams_project.jpg?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/ureka_project.jpg?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/innovation_projects/ureka_project.png?raw=true"
  ]
  },

  // ==================== ART PROJECTS ====================
  {
  id: 6,
  title: "3D Modeling & Animation Works",
  category: "Art",
  tags: ["Blender", "3D Modeling", "Animation", "Lighting Design", "Procedural Textures", "Environment Art", "Motion Graphics"],
  year: "2025",
  shortDescription: "Collection of 3D modeling and animation projects showcasing environment design, organic modeling, motion design, and technical execution in Blender.",
  fullDescription: "Created as coursework and personal projects, this collection demonstrates my range in 3D work—from cozy interior environments with intricate lighting setups to organic modeling of plants and DNA structures, plus character animation and motion graphics. Each piece explores different aspects of 3D artistry: clean topology, realistic materials, procedural textures, keyframe animation, and compelling composition.",
  challenge: "Balancing artistic vision with technical execution across multiple project types—creating cohesive environments requires mastering modeling, texturing, lighting, and composition simultaneously, while animation demands understanding of timing, weight, and storytelling through motion. Organic forms like plants require procedural techniques and natural growth patterns.",
  solution: "Developed a systematic workflow starting with reference gathering and composition planning, then moved to iterative modeling with attention to topology and form. Applied PBR materials and procedural textures for realism, used three-point lighting for depth, implemented keyframe animation with proper easing curves, and refined through multiple render passes to achieve polished results.",
  process: [
    {
      text: "Wireframe & Topology: Built clean edge flow for all models—room furniture using box modeling with subdivision surfaces, plants using particle systems and modifiers. Maintained quad topology for proper subdivision and animation-ready meshes with deformation in mind.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/art/room_wireframe.png?raw=true",
        "https://github.com/myanramsey/my-portfolio/blob/main/public/art/plant_wireframe.png?raw=true",
        "https://github.com/myanramsey/my-portfolio/blob/main/public/art/face_wireframe.png?raw=true"

      ]
    },
    {
      text: "Solid Modeling & Form: Blocked out major shapes and proportions in solid view to establish composition. Focused on readable silhouettes and balanced visual weight across all elements before adding detail. Created animation-ready rigs for character work.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/art/room_solid.png?raw=true",
        "https://github.com/myanramsey/my-portfolio/blob/main/public/art/face_solid.png?raw=true",
        "https://github.com/myanramsey/my-portfolio/blob/main/public/art/double_helix%20.png?raw=true",
        "https://github.com/myanramsey/my-portfolio/blob/main/public/art/animation_2_solid.png?raw=true"
      ]
    },
    {
      text: "Texturing & Materials: Applied PBR materials with procedural nodes—wood grain for furniture using wave textures and color ramps, fabric using noise modifiers for subtle variation, plants with translucency for realistic leaves. Adjusted roughness and specular values for material differentiation and proper light interaction.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/art/room_texture.png?raw=true",
        "https://github.com/myanramsey/my-portfolio/blob/main/public/art/face_texture.png?raw=true",
        "https://github.com/myanramsey/my-portfolio/blob/main/public/art/animation_room_texture.png?raw=true"
      ]
    },
    {
      text: "Animation & Motion Design: Implemented keyframe animation with proper timing and easing curves for character movement and camera paths. Used graph editor to refine motion arcs and add secondary animation. Applied principles of squash and stretch, anticipation, and follow-through for believable motion.",
      images: []
    },
    {
      text: "Lighting & Rendering: Implemented three-point lighting with warm area lights as key, cool fill lights for balance, and rim lights for separation. Added ambient occlusion in compositing for contact shadows. Rendered with Cycles at high samples (512+) for noise-free results. Adjusted lighting per frame for animated sequences.",
      images: [
        "https://github.com/myanramsey/my-portfolio/blob/main/public/art/room_render.png?raw=true",
        "https://github.com/myanramsey/my-portfolio/blob/main/public/art/planr_render.png?raw=true", 
      ]
    },
    "Post-Processing & Compositing: Color graded in Blender's compositor—adjusted curves for mood, added subtle bloom on lights, increased saturation on accent colors (plants, blue rug). Applied vignetting and sharpening for final polish. For animations, rendered out image sequences and compiled in video editor with sound design."
  ],
  image: "https://github.com/myanramsey/my-portfolio/blob/main/public/art/3d_modeling_card.png?raw=true",
  size: "medium",
  sketchfabId: "36d638fca1874c5eb6bab03f81a0036d",
  youtubeVideos: [ 
    {
      id: "GPsMEmTOAmU",
      title: "Group Final Animation Project"
    },
    {
      id: "L_lkIK9BNjA",
      title: "3D Walking Demo"
    },
    {
      id: "y317PKpCn_I",
      title: "3D Animation Demo"
    },
  ],
  gallery: [
    "https://github.com/myanramsey/my-portfolio/blob/main/public/art/room_wireframe.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/art/plant_wireframe.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/art/face_wireframe.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/art/room_solid.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/art/face_solid.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/art/double_helix%20.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/art/animation_2_solid.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/art/room_texture.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/art/face_texture.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/art/animation_room_texture.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/art/room_render.png?raw=true",
    "https://github.com/myanramsey/my-portfolio/blob/main/public/art/planr_render.png?raw=true"
    ]
  }
]



// ==================== TIMELINE ====================
export const timeline: TimelineItem[] = [
  {
    id: 1,
    year: "Expected May 2026",
    role: "B.S. in Digital Arts and Sciences",
    organization: "University of Florida",
    description: "GPA: 3.51/4.0 • GDC ColorStack Scholarship Recipient (2025) • Coursework: Data Structures & Algorithms, AI Fundamentals, Software Engineering, Computational Linear Algebra",
    type: 'education'
  },
  {
    id: 2,
    year: "June 2025 - Aug 2025",
    role: "Data Management Intern",
    organization: "Bloomberg (Princeton, NJ)",
    description: "Engineered fuzzy search solution reducing data discovery time by 78%. Implemented scalable ETL pipelines processing 500+ complex financial datasets into Bloomberg's semantic database.",
    type: 'extracurricular'
  },
  {
    id: 3,
    year: "Jan 2024 - Present",
    role: "President",
    organization: "UF ColorStack",
    description: "Led 300+ member organization, increasing women representation to 22%. Negotiated $5,200 in sponsorships from NVIDIA, Bloomberg, and Capital One, facilitating 8+ workshops and 10+ networking events.",
    type: 'extracurricular'
  },
  {
    id: 4,
    year: "Aug 2024 - May 2025",
    role: "Research Intern",
    organization: "Loss Prevention Research Council",
    description: "Developed Crime Analytics Platform using Python for real-time visualization of 100,000+ data points, reducing analysis time by 30% for crime and real estate data.",
    type: 'extracurricular'
  },
  {
    id: 5,
    year: "May 2024 - Present",
    role: "Student Office Assistant",
    organization: "Lastinger Learning Center (UF)",
    description: "Automated 80% of FDOE/Scholastic compliance reporting using Python and Google Apps Script. Reduced manual data entry time by 83% through JavaScript automation.",
    type: 'extracurricular'
  },
  {
    id: 6,
    year: "March 2025",
    role: "Tech Coordinator",
    organization: "WiNG Hacks",
    description: "Managed infrastructure for 200+ participant hackathon while coordinating 25 mentors across 4 time zones. Featured in The Alligator.",
    type: 'extracurricular'
  }
];