import { FileText, ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    <section className="min-h-[85vh] flex flex-col justify-center px-4 sm:px-6 relative pt-32 sm:pt-40 pb-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="font-mono text-xs md:text-sm text-purple-600 dark:text-purple-300 mb-6 sm:mb-8 tracking-widest uppercase transition-colors duration-500">
          /// Portfolio 2024-2025
        </div>
        
        {/* Main Hero Content*/}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-8 sm:mb-12">
            <div className="lg:col-span-7 space-y-6">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-serif leading-[0.9] text-zinc-900 dark:text-white mix-blend-exclusion transition-colors duration-500">
                Data <span className="italic text-zinc-400/50">&</span> <br/>
                <span className="ml-8 sm:ml-12 md:ml-24 italic text-purple-600 dark:text-purple-400 transition-colors duration-500">Artistry</span>
                </h1>
                
                {/* CTA Buttons - Bigger & Right Aligned */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:justify-center">
                  <a
                    href="https://drive.google.com/file/d/1DAzl4uGZuslIiIJsDNc1PICT1UAX-fYj/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white font-semibold rounded-lg transition-all hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg"
                  >
                    <FileText size={20} />
                    View Resume
                  </a>
                  <a
                    href="#work"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white dark:bg-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-700 text-zinc-900 dark:text-white font-semibold rounded-lg border-2 border-zinc-200 dark:border-zinc-700 transition-all hover:scale-105 shadow-lg hover:shadow-xl text-base sm:text-lg"
                  >
                    <ArrowRight size={20} />
                    View Work
                  </a>
                </div>
            </div>
            
            {/* Hero Image */}
            <div className="lg:col-span-5 flex justify-center lg:block">
                 <div className="aspect-[3/4] w-full max-w-[280px] sm:max-w-sm lg:mr-auto bg-zinc-200 dark:bg-zinc-800 rounded-lg overflow-hidden relative rotate-3 hover:rotate-0 transition-all duration-500 shadow-xl">
                    <img 
                        src="https://github.com/myanramsey/my-portfolio/blob/main/public/headshot.jpg?raw=true" 
                        alt="Portrait" 
                        className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
                    />
                 </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 border-t border-zinc-300 dark:border-white/20 pt-6 sm:pt-8 transition-colors duration-500">
          <div className="md:col-span-4">
             <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-light leading-relaxed transition-colors duration-500">
               I am a creative technologist bridging the gap between <strong className="text-zinc-900 dark:text-white font-normal">hard engineering</strong> and <strong className="text-zinc-900 dark:text-white font-normal">visual storytelling</strong> while striving to make the world a better place.
             </p>
          </div>
          
          <div className="md:col-span-4 md:col-start-9 flex flex-col justify-between h-full gap-6 sm:gap-8">
             <div className="flex gap-2">
                <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse mt-2 flex-shrink-0"></span>
                <span className="font-mono text-xs sm:text-sm text-zinc-500">Incoming Data Management Professional @ Bloomberg <br/>Full-time 2025</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
