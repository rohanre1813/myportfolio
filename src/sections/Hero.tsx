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
            >
              <span className="inline-block py-1.5 px-4 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20 shadow-sm backdrop-blur-sm">
                {portfolioData.personal.role}
              </span>
            </motion.div>
            
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.1 }}
            >
              <motion.span 
                className="block overflow-hidden"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              >
                Hi, I'm <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-500">{portfolioData.personal.name}</span>
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
            >
              I build scalable full-stack applications and intelligent systems. 
              Currently pursuing MCA at NIT Jamshedpur, focusing on modern web technologies and AI integrations.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-5 items-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.45 }}
            >
              <a 
                href="#projects" 
                className="group relative flex items-center gap-2 bg-foreground text-background px-7 py-3.5 rounded-lg font-medium hover:bg-foreground/90 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-2">
                  View My Projects
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </a>
              <a 
                href={portfolioData.personal.resumeUrl} 
                download
                className="group flex items-center gap-2 bg-card text-foreground px-7 py-3.5 rounded-lg font-medium transition-all duration-300 hover:-translate-y-1 hover:shadow-lg active:scale-95 border border-border"
              >
                <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                Download Resume
              </a>
            </motion.div>

            <motion.div 
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-md active:scale-95 bg-muted rounded-full" aria-label="GitHub">
                <Github className="w-5 h-5" />
              </a>
              <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-md active:scale-95 bg-muted rounded-full" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href={portfolioData.links.leetcode} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-md active:scale-95 bg-muted rounded-full" aria-label="LeetCode">
                <LeetCodeIcon className="w-5 h-5" />
              </a>
              <a href={portfolioData.links.codeforces} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-md active:scale-95 bg-muted rounded-full" aria-label="Codeforces">
                <CodeforcesIcon className="w-5 h-5" />
              </a>
              <a href={portfolioData.links.geeksforgeeks} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-md active:scale-95 bg-muted rounded-full" aria-label="GeeksForGeeks">
                <GeeksForGeeksIcon className="w-5 h-5" />
              </a>
              <a href={portfolioData.links.codolio} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-md active:scale-95 bg-muted rounded-full" aria-label="Codolio">
                <CodolioIcon className="w-5 h-5" />
              </a>

              <a href={portfolioData.links.email} className="p-2 text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 hover:shadow-md active:scale-95 bg-muted rounded-full" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </motion.div>
          </div>

          <motion.div 
            className="flex-shrink-0 relative mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -5, scale: 1.02 }}
          >
            <div className="relative w-[120px] h-[120px] md:w-[160px] md:h-[160px] rounded-full overflow-hidden border-2 border-border/50 shadow-xl shadow-primary/5 bg-muted/30 flex items-center justify-center group">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              <img 
                src={portfolioData.personal.profileImage} 
                alt={portfolioData.personal.name} 
                className="w-[90%] h-[90%] block relative z-0 rounded-full"
                style={{ objectFit: 'contain' }}
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
