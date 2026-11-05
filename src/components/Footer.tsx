import { portfolioData } from '../data/portfolioData';
import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-border bg-card/60 backdrop-blur-xs relative z-10 py-12">
      <motion.div 
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6"
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="text-center md:text-left space-y-1">
          <p className="text-foreground font-bold text-base tracking-tight">
            {portfolioData.personal.name}
            <span className="font-mono text-xs text-primary font-normal ml-2">// MCA '27 @ NIT Jamshedpur</span>
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            Engineered with React, TypeScript & Tailwind CSS • Handcrafted, not templated.
          </p>
        </div>
        
        <div className="flex items-center gap-6">
          <div className="font-mono text-xs text-muted-foreground/70">
            &copy; {currentYear} Rohan Shetty
          </div>
          
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group font-mono text-xs font-medium text-muted-foreground hover:text-foreground border border-border/80 hover:border-primary/50 px-3 py-1.5 rounded-md transition-all active:scale-95 flex items-center gap-1.5 bg-muted/30"
          >
            <span>Back to top</span>
            <span className="group-hover:-translate-y-0.5 transition-transform">↑</span>
          </button>
        </div>
      </motion.div>
    </footer>
  );
}
