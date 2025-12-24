import type { Project, TimelineItem } from '../types';

export const projects: Project[] = [
  // ==================== DATA PROJECTS ====================
  {
    id: 1,
    title: "Crime Analytics Platform",
    category: "Data",
    tags: ["Python", "Pandas", "GeoPandas", "Data Visualization", "Real-time Analytics"],
    year: "2024",
    shortDescription: "Real-time crime and property data visualization platform analyzing 100,000+ data points.",
    fullDescription: "Developed as a Research Intern at Loss Prevention Research Council, this platform provides real-time visualization and analysis of crime patterns and real estate data to support loss prevention strategies.",
    process: [
      "Data Collection & Processing: Processed 150K+ property records and 50K crime incidents using Pandas and GeoPandas, cleaning and normalizing data from multiple sources including police reports and real estate databases.",
      "Geospatial Analysis: Implemented GeoPandas for spatial analysis to identify crime hotspots and correlate them with property characteristics, enabling location-based risk assessment.",
      "Real-time Visualization: Built interactive dashboards for real-time data visualization, reducing analysis time by 30% and enabling faster decision-making for loss prevention strategies."
    ],
    challenge: "Handling 100,000+ real-time data points from disparate sources while maintaining performance and providing actionable insights for crime prevention and real estate analysis.",
    solution: "Engineered an efficient data pipeline using Python, Pandas, and GeoPandas to process and visualize crime and property data in real-time, reducing analysis time by 30% and enabling data-driven loss prevention strategies.",
    image: "from-red-700 to-orange-900", 
    size: 'large'
  },

  // ==================== ENGINEERING PROJECTS ====================
  {
    id: 2,
    title: "Bloomberg Data Discovery Search",
    category: "Engineering",
    tags: ["NLP", "Python", "ETL", "Database Optimization", "Fuzzy Search"],
    year: "2025",
    shortDescription: "Advanced fuzzy search solution reducing data discovery time by 78%.",
    fullDescription: "During my internship at Bloomberg in Princeton, NJ, I engineered an advanced fuzzy search solution leveraging NLP techniques to streamline data discovery processes for the knowledge graph platform.",
    process: [
      "Problem Analysis: Identified bottlenecks in the manual data discovery process that was slowing down team onboarding to Bloomberg's knowledge graph platform.",
      "NLP Implementation: Engineered fuzzy search solution using NLP techniques and proprietary database queries to intelligently match search queries with relevant datasets.",
      "ETL Pipeline Design: Designed and implemented scalable ETL pipelines to onboard and validate 500+ complex financial datasets into Bloomberg's semantic database, ensuring seamless integration."
    ],
    challenge: "Manual data discovery was extremely time-consuming, hindering team productivity and slowing down onboarding to Bloomberg's knowledge graph platform. The system needed to handle complex financial datasets while maintaining accuracy.",
    solution: "Deployed an advanced fuzzy search solution leveraging NLP techniques that reduced manual discovery time by 78%, while implementing scalable ETL pipelines that processed 500+ complex financial datasets with seamless integration.",
    image: "from-blue-800 to-indigo-950",
    size: 'large'
  },

  {
    id: 3,
    title: "Automated Literacy Compliance System",
    category: "Engineering",
    tags: ["Python", "Google Apps Script", "JavaScript", "Automation", "Data Processing"],
    year: "2024",
    shortDescription: "Automated 80% of FDOE compliance reporting, processing 1,000+ literacy records.",
    fullDescription: "Built as Student Office Assistant at Lastinger Learning Center, this automation system revolutionized compliance reporting and data entry processes.",
    process: [
      "Process Analysis: Analyzed existing manual workflows for FDOE/Scholastic compliance reporting and identified repetitive tasks consuming 12+ hours per week.",
      "Python Automation: Developed Python scripts using Pandas to automate compliance reporting across 5 years of literacy data, processing 1,000+ records efficiently.",
      "JavaScript Integration: Created JavaScript automation for Scholastic title cross-referencing, reducing manual data entry time from 12 hours to 2 hours per week (83% reduction)."
    ],
    challenge: "Manual compliance reporting and data entry consumed 12+ hours weekly, creating bottlenecks in processing literacy records and Scholastic title cross-referencing for 1,000+ records across 5 years.",
    solution: "Automated 80% of FDOE/Scholastic compliance reporting using Python (Pandas) and Google Apps Script, reducing manual data entry time by 83% while ensuring accuracy across 1,000+ literacy records.",
    image: "from-emerald-700 to-teal-900",
    size: 'medium'
  },

  // ==================== DESIGN PROJECTS ====================
  {
    id: 4,
    title: "SRTD File Organizer",
    category: "Design",
    tags: ["Figma", "UI/UX", "AI Integration", "Retro Design", "Accessibility"],
    year: "2024",
    shortDescription: "AI-driven file sorting tool with retro-style accessible interface.",
    fullDescription: "A creative exploration combining nostalgic retro aesthetics with modern AI-powered file organization, designed in Figma with a focus on accessibility and user experience.",
    process: [
      "Design Research: Explored retro computing aesthetics from the 1980s-90s while researching modern accessibility standards to create a bridge between nostalgia and usability.",
      "Figma Prototyping: Created comprehensive Figma prototypes with interactive flows, ensuring the retro aesthetic didn't compromise on accessibility features like screen reader compatibility and color contrast.",
      "AI Integration Planning: Designed user flows for AI-driven file sorting that feel intuitive and transparent, avoiding the 'black box' problem common in AI interfaces."
    ],
    challenge: "Creating a retro-style interface that feels nostalgic while maintaining modern accessibility standards and seamlessly integrating AI-driven functionality without overwhelming users.",
    solution: "Designed comprehensive Figma prototypes balancing retro aesthetics with WCAG accessibility compliance, creating an experience that's both visually engaging and functionally inclusive for AI-powered file organization.",
    image: "from-purple-700 to-pink-900",
    size: 'medium'
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
        "/projects/innovation-journey/ireland-arrival.jpg",
        "/projects/innovation-journey/maynooth-campus.jpg"
      ]
    },
    
    {
      text: "PAAMS - Smart Luggage Solution: Led the design process as Chief Design Officer for a smart suitcase with integrated sensors that scan contents for prohibited items before travelers reach airport security. Ran rapid 'Crazy Eights' ideation sessions with my team, built physical prototypes, and managed the lifecycle from hardware constraints to digital UX. Learned end-to-end product design, 3D CAD (Fusion 360), hybrid hardware/software UX, and design leadership.",
      images: [
        "/projects/innovation-journey/paams-prototype.jpg",
        "/projects/innovation-journey/paams-crazy-eights.jpg",
        "/projects/innovation-journey/paams-team-work.jpg"
      ]
    },
    
    {
      text: "TravHelp - Anxiety-Free Travel App: Created a mobile app that consolidates tickets, weather, navigation, and mental health check-ins into one interface for the 25% of travelers who experience anxiety. Designed features like 'Nearest Restroom' locator and 'Calm Zone' finder to de-escalate high-stress moments. Developed skills in information architecture, user-centric design, and low-to-high fidelity prototyping.",
      images: [
        "/projects/innovation-journey/travhelp-screens.jpg",
        "/projects/innovation-journey/travhelp-wireframes.jpg"
      ]
    },
    
    {
      text: "KOSS Pro Modification - Acoustic Shield Design: Developed a custom detachable acoustic shield to eliminate sound leakage from Koss Porta Pro headphones. Started with hand-drawn orthographic sketches, modeled in Fusion 360, and created technical engineering drawings with precise measurements. Learned 3D modeling, technical drafting, CAD engineering, and design for manufacturing.",
      images: [
        "/projects/innovation-journey/koss-technical-drawing.jpg",
        "/projects/innovation-journey/koss-prototype.jpg",
        "/projects/innovation-journey/koss-sketches.jpg"
      ]
    },
    
    {
      text: "URE-KA - Nutrient Recovery System: Applied design thinking to system-scale sustainability challenges, requiring stakeholder analysis, systems mapping, and impact-focused communication beyond single-product solutions. Learned to think about complex environmental problems holistically.",
      images: [
        "/projects/innovation-journey/ure-ka-poster.jpg",
        "/projects/innovation-journey/ure-ka-presentation.jpg"
      ]
    },
    
    {
      text: "Explored Ireland beyond projects: Discovered through traveling to the Cliffs of Moher, Dublin streets, and Galway Bay that life doesn't follow a set timeline. Connected with inspiring mentors like Sierra Calhoun-Pollard, Ph.D., whose cross-disciplinary approach to innovation continues to shape how I work. My study abroad classmates became my rock throughout UF—proving that the best part of innovation is the community you build.",
      images: [
        "/projects/innovation-journey/ireland-cliffs-moher.jpg",
        "/projects/innovation-journey/dublin-exploration.jpg",
        "/projects/innovation-journey/classmates-group.jpg",
        "/projects/innovation-journey/galway-sunset.jpg"
      ]
    },
    
    "Carried the foundation into CS work: Now approach code, data pipelines, and interfaces with the same empathy-first mindset. Always ask 'Who am I building for?' and 'Why does it matter?' before diving into technical implementation. Design thinking transformed from an uncertain experiment into the core of how I solve problems."
  ],

  image: "from-violet-700 to-purple-900",
  size: "large",

  gallery: [
    "/projects/innovation-journey/hero-ireland-collage.jpg",
    "/projects/innovation-journey/workshop-prototyping.jpg",
    "/projects/innovation-journey/team-collaboration.jpg",
    "/projects/innovation-journey/final-presentations.jpg"
  ]
}

];

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