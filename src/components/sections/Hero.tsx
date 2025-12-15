import { ArrowUpRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-6 relative pt-40 pb-12">
      <div className="max-w-7xl mx-auto w-full">
        <div className="font-mono text-xs md:text-sm text-purple-600 dark:text-purple-300 mb-8 tracking-widest uppercase transition-colors duration-500">
          /// Portfolio 2024-2025
        </div>
        
        {/* Main Hero Content*/}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
            <div className="lg:col-span-7">
                <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] text-zinc-900 dark:text-white mix-blend-exclusion transition-colors duration-500">
                Data <span className="italic text-zinc-400/50">&</span> <br/>
                <span className="ml-12 md:ml-24 italic text-purple-600 dark:text-purple-400 transition-colors duration-500">Artistry</span>
                </h1>
            </div>
            
            {/* Hero Image */}
            <div className="lg:col-span-5 hidden lg:block">
                 <div className="aspect-[3/4] w-full max-w-sm mr-auto bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden relative rotate-3 hover:rotate-0 transition-all duration-500">
                    <img 
                        src="https://github.com/myanramsey/my-portfolio/blob/main/public/headshot.jpg?raw=true" 
                        alt="Portrait" 
                        className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 border-t border-zinc-300 dark:border-white/20 pt-8 transition-colors duration-500">
          <div className="md:col-span-4">
             <p className="text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed transition-colors duration-500">
               I am a creative technologist bridging the gap between <strong className="text-zinc-900 dark:text-white font-normal">hard engineering</strong> and <strong className="text-zinc-900 dark:text-white font-normal">visual storytelling</strong> while striving to make the world a better place.
             </p>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-between h-full gap-8">
             <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse mt-2"></span>
                <span className="font-mono text-sm text-zinc-500">Incoming Data Managament Professional @ Bloomberg <br/>Full-time 2025</span>
             </div>
             <a href="#work" className="group flex items-center gap-4 text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-300 transition-colors">
               <div className="w-12 h-12 rounded-full border border-zinc-300 dark:border-white/20 flex items-center justify-center group-hover:bg-zinc-200 dark:group-hover:bg-white/10 transition-colors">
                 <ArrowUpRight size={20} />
               </div>
               <span className="font-mono text-sm uppercase tracking-wider">Explore Selected Work</span>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};