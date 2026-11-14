import { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Download } from 'lucide-react'; import { motion } from 'framer-motion';
import { useTheme } from './ThemeProvider';
import { portfolioData } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      
      // Update active section
      const sections = navItems.map(item => item.href.substring(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 200;
        }
        return false;
      });
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent ${isScrolled ? 'bg-background/80 backdrop-blur-md border-border shadow-sm' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-2 group">
              <span className="font-mono font-bold text-xs bg-foreground text-background px-2 py-1 rounded-md tracking-tight group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                RS
              </span>
              <span className="font-semibold text-sm tracking-tight text-foreground hidden sm:inline">
                rohanshetty<span className="text-primary">.dev</span>
              </span>
            </a>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6 items-center">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`bracket-link text-xs font-mono uppercase tracking-wider transition-colors ${activeSection === item.href.substring(1) ? 'text-primary font-bold' : ''}`}
                >
                  <span className="b-char b-left">[</span>
                  <span>{item.name}</span>
                  <span className="b-char b-right">]</span>
                </a>
              ))}
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg hover:bg-muted border border-transparent hover:border-border transition-colors text-foreground"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
              
              <a
                href={portfolioData.personal.resumeUrl}
                download
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-3.5 py-1.5 rounded-lg font-mono text-xs font-medium hover:bg-primary/90 transition-all active:scale-95 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Resume.pdf</span>
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-muted transition-colors text-foreground active:scale-95"
              aria-label="Toggle Theme"
            >
              <motion.div
                initial={false}
                animate={{ rotate: theme === 'dark' ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </motion.div>
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-foreground hover:bg-muted transition-colors active:scale-95"
              aria-expanded={isOpen}
            >
              <motion.div
                initial={false}
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </motion.div>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          className="md:hidden bg-background border-b border-border shadow-lg absolute w-full origin-top"
          initial={{ opacity: 0, scaleY: 0.95 }}
          animate={{ opacity: 1, scaleY: 1 }}
          exit={{ opacity: 0, scaleY: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <div className="px-4 pt-3 pb-5 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-lg text-xs font-mono uppercase tracking-wider transition-all ${activeSection === item.href.substring(1) ? 'text-primary bg-muted font-semibold' : 'text-foreground/80 hover:text-primary hover:bg-muted/50'}`}
              >
                <span>{item.name}</span>
                <span className="text-muted-foreground/40 text-[10px]">→</span>
              </a>
            ))}
            <div className="pt-3 mt-2 border-t border-border/50">
              <a
                href={portfolioData.personal.resumeUrl}
                download
                className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-2.5 rounded-lg font-mono text-xs font-medium hover:bg-primary/90 transition-all active:scale-95 w-full shadow-xs"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume (PDF)</span>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}
