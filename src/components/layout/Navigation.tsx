import { useState, useEffect } from 'react';
import { Moon, Sun, Menu, X, FileText } from 'lucide-react'; 

export const Navigation = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const dark = document.documentElement.classList.contains('dark');
    setIsDark(dark);
    
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    document.documentElement.classList.toggle('dark');
    setIsDark(!isDark);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo/Name */}
          <a href="#" className="text-xl font-serif font-bold text-zinc-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
            Mya Ramsey
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <a href="#work" className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Work
            </a>
            <a href="#journey" className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Journey
            </a>
            <a href="#contact" className="text-sm hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
              Contact
            </a>
            
            {/* Resume Button */}
            <a 
              href="/resume.pdf" // Update with your actual resume path
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 dark:bg-purple-500 dark:hover:bg-purple-600 text-white text-sm font-medium rounded-lg transition-all hover:scale-105 shadow-md hover:shadow-lg"
            >
              <FileText size={16} />
              Resume
            </a>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 pt-2 border-t border-zinc-200 dark:border-zinc-800 mt-2">
            <div className="flex flex-col gap-3">
              <a 
                href="#work" 
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              >
                Work
              </a>
              <a 
                href="#journey"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              >
                Journey
              </a>
              <a 
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              >
                Contact
              </a>
              
              {/* Mobile Resume Button */}
              <a 
                href="/resume.pdf" // Update with your actual resume path
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 mx-4 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white text-sm font-medium rounded-lg transition-colors"
              >
                <FileText size={16} />
                View Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
