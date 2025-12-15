import { useEffect } from 'react';
import { X, Calendar, Tag, Github, ArrowUpRight, Terminal, Layers } from 'lucide-react';
import type { Project } from '../../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export const ProjectModal = ({ project, onClose }: ProjectModalProps) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8">
      <div className="absolute inset-0 bg-zinc-950/80 backdrop-blur-sm" onClick={onClose} />
      
      <div className="relative w-full max-w-5xl h-full md:h-[90vh] bg-zinc-50 dark:bg-zinc-900 rounded-lg shadow-2xl overflow-y-auto flex flex-col transition-colors duration-500">
        
        {/* Modal Header Image */}
        <div className={`w-full h-64 md:h-96 shrink-0 bg-gradient-to-br ${project.image} relative`}>
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
          >
            <X size={24} />
          </button>
          
          <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
            <h2 className="text-4xl md:text-6xl font-serif text-white mb-2">{project.title}</h2>
            <div className="flex gap-4 text-white/80 font-mono text-sm">
              <span className="flex items-center gap-2"><Calendar size={14}/> {project.year}</span>
              <span className="flex items-center gap-2"><Tag size={14}/> {project.category}</span>
            </div>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Sidebar Info */}
          <div className="lg:col-span-4 space-y-8">
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-3">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-zinc-200 dark:bg-white/5 text-zinc-800 dark:text-zinc-300 text-xs font-mono rounded-full border border-zinc-300 dark:border-white/10">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-3">Links</h3>
              <div className="flex flex-col gap-2">
                <a href="#" className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline">
                  <Github size={16} /> View Source Code
                </a>
                <a href="#" className="flex items-center gap-2 text-purple-600 dark:text-purple-400 hover:underline">
                  <ArrowUpRight size={16} /> Live Demo
                </a>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-8 space-y-10 text-zinc-800 dark:text-zinc-300">
            <div className="space-y-8">
              <p className="text-xl md:text-2xl leading-relaxed font-light border-l-2 border-purple-500 pl-6">
                {project.fullDescription}
              </p>

              {project.process && (
                <div className="space-y-4">
                  <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500 mb-4">The Process</h3>
                  {project.process.map((paragraph, idx) => (
                    <p key={idx} className="text-lg leading-relaxed text-zinc-700 dark:text-zinc-300">
                      {paragraph}
                    </p>
                  ))}
                </div>
              )}
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-zinc-100 dark:bg-black/20 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white flex items-center gap-2">
                  <Terminal size={18} className="text-purple-500"/> The Challenge
                </h3>
                <p className="text-sm leading-relaxed opacity-80">{project.challenge}</p>
              </div>
              <div className="bg-zinc-100 dark:bg-black/20 p-6 rounded-lg">
                <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white flex items-center gap-2">
                  <Layers size={18} className="text-blue-500"/> The Solution
                </h3>
                <p className="text-sm leading-relaxed opacity-80">{project.solution}</p>
              </div>
            </div>

            {/* Gallery Placeholders */}
            <div className="space-y-4">
               <h3 className="font-mono text-xs uppercase tracking-widest text-zinc-500">Project Gallery</h3>
               <div className="grid grid-cols-2 gap-4">
                  <div className="aspect-video bg-zinc-200 dark:bg-white/5 rounded-lg flex items-center justify-center text-zinc-400 text-xs">Image 01</div>
                  <div className="aspect-video bg-zinc-200 dark:bg-white/5 rounded-lg flex items-center justify-center text-zinc-400 text-xs">Image 02</div>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};