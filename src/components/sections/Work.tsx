import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { projects } from '../../data/content';
import type { Project, Category } from '../../types';

interface WorkProps {
  onSelectProject: (p: Project) => void;
}

export const Work = ({ onSelectProject }: WorkProps) => {
  const [filter, setFilter] = useState<Category>('All');
  
  const filteredProjects = projects.filter(p => 
    filter === 'All' ? true : p.category === filter
  );

  return (
    <section id="work" className="pt-12 pb-32 px-6">
      <div className="max-w-7xl mx-auto">
        <SectionHeader number="01" title="Selected Works" />
        
        <div className="flex flex-wrap gap-4 mb-16">
          {['All', 'Data', 'Engineering', 'Art', 'Design'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as Category)}
              className={`text-sm font-mono uppercase tracking-wider px-4 py-2 rounded-full border transition-all ${
                filter === cat 
                  ? 'bg-zinc-900 dark:bg-white text-white dark:text-black border-zinc-900 dark:border-white' 
                  : 'text-zinc-500 border-zinc-300 dark:border-zinc-800 hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-300'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {filteredProjects.map((project) => (
            <div 
              key={project.id} 
              onClick={() => onSelectProject(project)}
              className={`group relative flex flex-col gap-4 cursor-pointer ${
                project.size === 'large' ? 'lg:col-span-8' : 
                project.size === 'medium' ? 'lg:col-span-6' : 
                'lg:col-span-4'
              }`}
            >
              <div className={`w-full overflow-hidden rounded-sm relative aspect-[4/3] ${project.size === 'large' ? 'lg:aspect-[16/9]' : ''}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${project.image} transition-transform duration-700 group-hover:scale-105`}></div>
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors"></div>
                
                {/* Overlay details */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black shadow-lg">
                    <ArrowUpRight size={20} />
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-start border-t border-zinc-300 dark:border-white/10 pt-4 transition-colors duration-500">
                <div>
                  <h3 className="text-2xl font-serif text-zinc-900 dark:text-white group-hover:italic transition-all">{project.title}</h3>
                  <div className="flex gap-2 mt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-mono text-zinc-500 border border-zinc-300 dark:border-zinc-800 px-2 py-0.5 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
                <span className="font-mono text-zinc-500 text-xs">{project.year}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};