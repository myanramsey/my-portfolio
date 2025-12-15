import type { Project, TimelineItem } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Predictive Housing Model",
    category: "Data",
    tags: ["Python", "Scikit-Learn", "Pandas"],
    year: "2024",
    shortDescription: "Machine learning model predicting urban housing prices with 92% accuracy.",
    fullDescription: "A comprehensive data science project analyzing 10 years of urban housing data to identify pricing trends and forecast future market shifts.",
    process: [
      "The initial phase involved scraping data from multiple real estate APIs to build a robust dataset of over 50,000 listings. I had to normalize inconsistent fields, particularly regarding zoning laws which varied by district.",
      "After cleaning the data, I conducted an Exploratory Data Analysis (EDA) to visualize correlations. Surprisingly, proximity to public transit had a higher correlation with price than square footage in certain dense urban areas.",
      "Finally, I tested three different models: Linear Regression, Decision Trees, and Random Forest. The Random Forest model proved most effective, handling the non-linear relationships between neighborhood desirability and price with the highest accuracy."
    ],
    challenge: "Cleaning inconsistent dataset entries across 50+ variables and handling missing geolocation data without skewing the results.",
    solution: "Implemented a Random Forest Regressor and developed a custom imputation strategy for missing geodata, resulting in a 15% improvement in prediction accuracy over baseline models.",
    image: "from-stone-700 to-stone-900", 
    size: 'medium'
  },
  {
    id: 2,
    title: "Abstract Geometrica",
    category: "Art",
    tags: ["Digital", "Procreate", "Vector"],
    year: "2023",
    shortDescription: "Non-Euclidean geometry exploration.",
    fullDescription: "A digital art series exploring the intersection of mathematical perfection and human imperfection through non-Euclidean shapes.",
    process: [
      "I started by sketching basic geometric forms on paper, looking for ways to break standard perspective rules.",
      "Moving to digital, I used vector tools to create rigid shapes, then overlaid organic textures to soften them, representing the chaos within order."
    ],
    challenge: "Visualizing theoretical mathematical concepts in a way that feels organic and emotionally resonant rather than purely clinical.",
    solution: "Used algorithmic generation for base shapes but applied hand-painted textures and lighting in Procreate to soften the rigidity.",
    image: "from-purple-800 to-fuchsia-900",
    size: 'large'
  },
  {
    id: 3,
    title: "ETL Dashboard",
    category: "Engineering",
    tags: ["AWS", "SQL", "Airflow"],
    year: "2023",
    shortDescription: "Automated data ingestion pipeline processing 1TB+ daily.",
    fullDescription: "An enterprise-grade dashboard for monitoring real-time data ingestion health across distributed systems.",
    challenge: "The legacy system suffered from 2-hour latency, making real-time decision making impossible for stakeholders.",
    solution: "Re-architected the pipeline using Apache Airflow and AWS Lambda, reducing latency to <5 minutes and implementing automated failure alerts.",
    image: "from-emerald-800 to-teal-950",
    size: 'small'
  },
  {
    id: 4,
    title: "University Art Zine",
    category: "Design",
    tags: ["InDesign", "Print", "Typography"],
    year: "2022",
    shortDescription: "Lead layout designer for 40+ page student publication.",
    fullDescription: "The Fall 2022 issue of the campus art collective magazine, featuring work from over 30 student artists.",
    challenge: "Creating a cohesive visual identity that could accommodate vastly different art styles, from photography to charcoal sketches.",
    solution: "Designed a flexible grid system and a neutral minimalist typography hierarchy that allowed the individual artworks to take center stage.",
    image: "from-orange-800 to-red-900",
    size: 'medium'
  },
  {
    id: 5,
    title: "Neural Style Transfer",
    category: "Data",
    tags: ["TensorFlow", "Deep Learning"],
    year: "2024",
    shortDescription: "Implementation of style transfer to re-imagine campus photography.",
    fullDescription: "An experimental project merging computer vision with impressionist painting techniques.",
    challenge: "Optimizing the style transfer algorithm to run efficiently on consumer hardware without losing high-frequency texture details.",
    solution: "Utilized a lightweight VGG-19 network architecture and implemented mixed-precision training to speed up rendering by 40%.",
    image: "from-indigo-800 to-blue-950",
    size: 'medium'
  },
  {
    id: 6,
    title: "Portfolio v1",
    category: "Engineering",
    tags: ["React", "Three.js"],
    year: "2021",
    shortDescription: "First interactive web portfolio with WebGL.",
    fullDescription: "My first foray into 3D web development, creating an immersive portfolio experience.",
    challenge: "Learning the Three.js library from scratch while maintaining performance on mobile devices.",
    solution: "Implemented aggressive asset optimization and fallback low-poly models for mobile users.",
    image: "from-gray-700 to-black",
    size: 'small'
  }
];

export const timeline: TimelineItem[] = [
  {
    id: 1,
    year: "2024 - Present",
    role: "President",
    organization: "Computer Science Society",
    description: "Leading a team of 10 officers to organize hackathons and tech talks for 200+ members.",
    type: 'extracurricular'
  },
  {
    id: 2,
    year: "2025 (Expected)",
    role: "B.S. Comp Sci + B.A. Art",
    organization: "University of Technology",
    description: "Dual degree focus on AI & Digital Media. GPA: 3.8",
    type: 'education'
  },
  {
    id: 3,
    year: "2023",
    role: "Data Engineering Intern",
    organization: "Tech Corp Inc.",
    description: "Optimized database queries reducing report generation time by 40%.",
    type: 'extracurricular'
  },
  {
    id: 4,
    year: "2022 - 2023",
    role: "Visual Designer",
    organization: "Campus Newspaper",
    description: "Created weekly illustrations and infographics for the science section.",
    type: 'extracurricular'
  }
];