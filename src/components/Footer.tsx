import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-card relative z-10">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center md:text-left">
          <p className="text-foreground font-semibold text-lg">{portfolioData.personal.name}</p>
          <p className="text-muted-foreground text-sm mt-1">{portfolioData.personal.role}</p>
        </div>
        
        <div className="text-sm text-muted-foreground font-medium">
          &copy; {currentYear} Built by {portfolioData.personal.name}.
        </div>
        
        <button 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="group text-sm font-semibold text-muted-foreground hover:text-primary transition-all duration-300 flex items-center gap-2"
        >
          Back to Top <span className="group-hover:-translate-y-1 transition-transform duration-300">&uarr;</span>
        </button>
      </motion.div>
    </footer>
  );
}
