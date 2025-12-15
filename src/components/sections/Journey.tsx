import { GraduationCap } from 'lucide-react';
import { SectionHeader } from '../ui/SectionHeader';
import { timeline } from '../../data/content';

export const Journey = () => {
  return (
    <section id="journey" className="py-32 px-6 bg-zinc-100 dark:bg-zinc-900/30 transition-colors duration-500">
      <div className="max-w-5xl mx-auto">
        <SectionHeader number="02" title="The Journey" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div className="space-y-6">
            <h3 className="font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest text-sm mb-8 transition-colors duration-500">[ Education & Skills ]</h3>
            
            <div className="bg-white dark:bg-zinc-900/50 p-8 border border-zinc-200 dark:border-white/5 hover:border-purple-500/30 transition-colors shadow-sm dark:shadow-none">
              <GraduationCap className="text-zinc-900 dark:text-white mb-4" size={32} />
              <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-2">University of Technology</h4>
              <p className="text-zinc-500 dark:text-zinc-400 mb-6 font-serif italic">B.S. Comp Sci + B.A. Studio Art</p>
              
              <div className="space-y-4">
                <div>
                  <span className="text-xs font-mono text-zinc-400 block mb-2">LANGUAGES</span>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">Python, Java, TypeScript, C++, GLSL, SQL</p>
                </div>
                <div>
                  <span className="text-xs font-mono text-zinc-400 block mb-2">CREATIVE</span>
                  <p className="text-sm text-zinc-600 dark:text-zinc-300">Figma, Adobe Suite, Blender, TouchDesigner</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="font-mono text-purple-600 dark:text-purple-400 uppercase tracking-widest text-sm mb-8 transition-colors duration-500">[ Experience ]</h3>
            
            {timeline.filter(t => t.type === 'extracurricular').map((item) => (
              <div key={item.id} className="border-l border-zinc-300 dark:border-white/10 pl-6 pb-8 last:pb-0 relative">
                <div className="absolute -left-[5px] top-0 w-2.5 h-2.5 bg-zinc-400 dark:bg-zinc-800 rounded-full border border-zinc-200 dark:border-zinc-600"></div>
                <div className="flex justify-between items-baseline mb-2">
                  <h4 className="text-lg font-bold text-zinc-900 dark:text-white">{item.role}</h4>
                  <span className="font-mono text-xs text-zinc-500">{item.year}</span>
                </div>
                <p className="text-purple-600 dark:text-purple-300 text-sm mb-2">{item.organization}</p>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};