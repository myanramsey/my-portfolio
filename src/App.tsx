import { useState } from 'react';
import { Navigation } from './components/layout/Navigation';
import { Hero } from './components/sections/Hero';
import { Work } from './components/sections/Work';
import { Journey } from './components/sections/Journey';
import { Contact } from './components/sections/Contact';
import { ProjectModal } from './components/ui/ProjectModal';
import { NoiseOverlay } from './components/ui/NoiseOverlay';
import type { Project } from './types';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}>
      <div className="bg-[#FDFCF8] dark:bg-zinc-950 min-h-screen text-zinc-900 dark:text-zinc-100 selection:bg-purple-500/30 dark:selection:bg-purple-500/90 selection:text-purple-900 dark:selection:text-white transition-colors duration-500">
        <NoiseOverlay />
        <Navigation darkMode={darkMode} toggleTheme={toggleTheme} />
        
        <main className="relative z-10">
          <Hero />
          <Work onSelectProject={setSelectedProject} />
          <Journey />
        </main>
        
        <Contact />

        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </div>
    </div>
  );
};

export default App;