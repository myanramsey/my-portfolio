import { Linkedin, Github, FileText } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';

export const Contact = () => {
  return (
    <section id="contact" className="py-32 px-6 min-h-[70vh] flex flex-col justify-between">
      <div className="max-w-7xl mx-auto w-full">
        <SectionHeader number="03" title="Get in Touch" />
        
        {/* Adjusted grid gap and alignment */}
        <div className="grid md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7">
            <p className="text-2xl md:text-4xl text-zinc-600 dark:text-zinc-300 font-light leading-snug mb-12 transition-colors duration-500">
              Looking for a <span className="text-zinc-900 dark:text-white font-serif italic">hybrid engineer</span> who speaks both data and design?
            </p>

            <a href="mailto:myaramsey04@gmail.com" className="inline-block text-5xl md:text-7xl font-serif italic text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors border-b border-zinc-300 dark:border-white/20 pb-4 mb-12">
              Let's Talk.
            </a>

            <div className="flex gap-6">
              <a href="https://www.linkedin.com/in/mya-ramsey-uf" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Linkedin size={20} /> <span className="font-mono text-sm uppercase">LinkedIn</span>
              </a>
              <a href="https://github.com/myanramsey" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Github size={20} /> <span className="font-mono text-sm uppercase">Github</span>
              </a>
            </div>
          </div>
          
          {/* Resume Button Container */}
          <div className="hidden md:flex md:col-span-5 justify-end items-center">
             <a 
               href="https://drive.google.com/file/d/1DAzl4uGZuslIiIJsDNc1PICT1UAX-fYj/view?usp=sharing" 
               target="_blank" 
               rel="noopener noreferrer"
               className="group relative inline-flex items-center justify-center px-8 py-6 text-lg font-mono tracking-widest uppercase border border-zinc-900 dark:border-white text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-white dark:hover:text-zinc-900 transition-all duration-300"
             >
               <span className="flex items-center gap-4">
                 <FileText size={24} className="group-hover:scale-110 transition-transform" />
                 Download Resume
               </span>
               <span className="absolute -bottom-2 -right-2 w-full h-full border border-zinc-900 dark:border-white opacity-30 -z-10 group-hover:translate-x-1 group-hover:translate-y-1 transition-transform"></span>
             </a>
          </div>
        </div>
      </div>

      <footer className="w-full border-t border-zinc-300 dark:border-white/10 pt-8 mt-20 flex justify-between items-end font-mono text-xs text-zinc-500 dark:text-zinc-600 uppercase tracking-widest transition-colors duration-500">
        <div>
          <p>Based in Florida </p>
          <p>Local Time: {new Date().toLocaleTimeString('en-US', {hour: '2-digit', minute:'2-digit'})}</p>
        </div>
        <div className="text-right">
          <p>&copy; 2025 Mya's Portfolio</p>
          <p>Designed in Code</p>
        </div>
      </footer>
    </section>
  );
};