import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react'; import { GithubIcon as Github, LinkedinIcon as Linkedin, LeetCodeIcon, CodeforcesIcon, GeeksForGeeksIcon, CodolioIcon } from '../components/Icons';
import { portfolioData } from '../data/portfolioData';

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-muted/80 border border-border font-mono text-xs text-foreground mb-6 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-muted-foreground">Available for SDE Roles</span>
              <span className="text-border">•</span>
              <span className="font-semibold text-foreground">NIT Jamshedpur '27</span>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            >
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6 leading-[1.08]">
                Hi, I'm <span className="text-primary">{portfolioData.personal.name}</span>.
                <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-muted-foreground mt-2 tracking-normal">
                  Full-Stack Developer & Systems Thinker
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-base sm:text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            >
              Currently pursuing MCA at <span className="text-foreground font-medium">NIT Jamshedpur</span>. 
              I design and engineer production web platforms, real-time distributed tracking, and RAG document systems — with a foundation of <span className="text-foreground font-medium">800+ solved algorithmic problems</span>.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              <a 
                href="#projects" 
                className="group relative flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-lg font-medium text-sm hover:bg-foreground/90 transition-all duration-200 hover:-translate-y-0.5 shadow-sm active:scale-95"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={portfolioData.personal.resumeUrl} 
                download
                className="group flex items-center gap-2 bg-card text-foreground px-6 py-3 rounded-lg font-medium text-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted/60 active:scale-95 border border-border shadow-xs"
              >
                <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span>Download CV</span>
              </a>
            </motion.div>

            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-wrap items-center gap-2 p-1.5 bg-muted/40 border border-border/80 rounded-xl">
                <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-background/80 rounded-lg transition-all active:scale-95" title="GitHub" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-background/80 rounded-lg transition-all active:scale-95" title="LinkedIn" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={portfolioData.links.leetcode} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-background/80 rounded-lg transition-all active:scale-95" title="LeetCode" aria-label="LeetCode">
                  <LeetCodeIcon className="w-4 h-4" />
                </a>
                <a href={portfolioData.links.codeforces} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-background/80 rounded-lg transition-all active:scale-95" title="Codeforces" aria-label="Codeforces">
                  <CodeforcesIcon className="w-4 h-4" />
                </a>
                <a href={portfolioData.links.geeksforgeeks} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-background/80 rounded-lg transition-all active:scale-95" title="GeeksforGeeks" aria-label="GeeksForGeeks">
                  <GeeksForGeeksIcon className="w-4 h-4" />
                </a>
                <a href={portfolioData.links.codolio} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-background/80 rounded-lg transition-all active:scale-95" title="Codolio" aria-label="Codolio">
                  <CodolioIcon className="w-4 h-4" />
                </a>
                <div className="w-[1px] h-4 bg-border mx-1" />
                <a href={portfolioData.links.email} className="p-2 text-muted-foreground hover:text-foreground hover:bg-background/80 rounded-lg transition-all active:scale-95" title="Email" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="flex-shrink-0 relative mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -3 }}
          >
            <div className="relative p-1 rounded-full border border-border bg-card shadow-sm">
              <div className="relative w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden bg-muted/40 flex items-center justify-center">
                <img 
                  src={portfolioData.personal.profileImage} 
                  alt={portfolioData.personal.name} 
                  className="w-[90%] h-[90%] block relative z-0 rounded-full"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
