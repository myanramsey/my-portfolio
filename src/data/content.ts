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
    title: "Design Thinking & Innovation Portfolio",
    category: "Design",
    tags: ["Design Thinking", "Arduino", "3D Modeling", "IoT", "Sustainability", "Product Design", "Team Collaboration"],
    year: "2022-2025",
    shortDescription: "A collection of 5 innovation projects demonstrating complete design thinking process from problem discovery through prototyping.",
    fullDescription: "This portfolio showcases comprehensive design thinking and innovation skills developed through coursework and team projects. Each project follows the complete innovation lifecycle: problem discovery, user research, ideation, prototyping, and impact analysis. Projects span sustainable systems design, IoT hardware, 3D modeling, and accessibility solutions.",
    process: [
      "Problem Discovery & Research: Conducted stakeholder interviews, literature reviews, and field observations to identify real-world challenges across sustainability, travel, accessibility, and everyday convenience domains.",
      "Design Thinking Application: Applied 'How Might We' statements, value proposition frameworks, and user-centered design principles to transform problems into actionable innovation opportunities.",
      "Technical Prototyping: Built functional prototypes using diverse technologies including Arduino microcontrollers, Fusion 360 CAD software, sustainable materials, and multi-floor system designs.",
      "Impact Validation: Measured outcomes including 80% nutrient recovery rates, 30% crop yield increases, and enhanced accessibility for 500+ building occupants across various projects."
    ],
    challenge: "Developing solutions that balance technical feasibility, user needs, sustainability, and real-world constraints while working both independently and in multidisciplinary teams across diverse problem domains.",
    solution: "Created 5 distinct innovations: URE-KA (circular economy wastewater system), PAAMS (airport security scanner), Mya.Larm (Arduino door alert), KOSS Isolation Module (3D-printed headphone accessory), and Maynooth Bridge (accessibility redesign). Each demonstrates end-to-end problem-solving from research through working prototypes.",
    image: "from-violet-700 to-purple-900",
    size: 'large',
    gallery: [
      "/projects/ure-ka-poster.jpg",
      "/projects/paams-prototype.jpg",
      "/projects/myalarm-prototype.jpg",
      "/projects/koss-technical-drawing.jpg",
      "/projects/maynooth-plan.jpg"
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