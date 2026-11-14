import { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react'; 
import { GithubIcon as Github, LinkedinIcon as Linkedin, LeetCodeIcon, CodeforcesIcon, GeeksForGeeksIcon, CodolioIcon } from '../components/Icons';
import { portfolioData } from '../data/portfolioData';

export function Hero() {
  const [isPhotoExpanded, setIsPhotoExpanded] = useState(false);

  return (
    <section id="home" className="relative min-h-[85vh] flex items-center pt-24 pb-16 overflow-hidden">
      {/* 3D Diagonal Luminous Silk Ribbon Stage */}
      <div className="silk-stage">
        <div className="silk-band-primary" />
        <div className="silk-band-secondary" />
        <div className="silk-crease" />
        <div 
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.02]"
          style={{
            backgroundImage: 'linear-gradient(to right, rgba(120, 120, 140, 0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(120, 120, 140, 0.4) 1px, transparent 1px)',
            backgroundSize: '80px 80px'
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          <div className="flex-1 text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-card/80 backdrop-blur-md border border-border font-mono text-xs text-foreground mb-6 shadow-xs"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
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
              <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl leading-[1.02] tracking-[-0.02em] text-foreground mb-4">
                Rohan Shetty.<br />
                <span className="font-sans italic font-normal text-muted-foreground text-3xl sm:text-5xl lg:text-6xl block mt-2">
                  Software Engineering & System Architecture.
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-base sm:text-lg text-muted-foreground mb-8 max-w-2xl leading-relaxed font-normal"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
            >
              MCA student at <strong className="text-foreground font-semibold">NIT Jamshedpur</strong>. 
              Engineering production full-stack platforms, real-time distributed tracking, and RAG document analytics engines — backed by <strong className="text-foreground font-semibold">800+ solved algorithmic problems</strong> across LeetCode & Codeforces.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 items-center mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
            >
              <a 
                href="#projects" 
                className="group relative inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-xl font-mono text-xs font-medium hover:bg-foreground/90 transition-all duration-200 hover:-translate-y-0.5 shadow-sm active:scale-95"
              >
                <span>[ Explore Projects (03) ]</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href={portfolioData.personal.resumeUrl} 
                download
                className="group inline-flex items-center gap-2 bg-card/80 backdrop-blur-md text-foreground px-6 py-3 rounded-xl font-mono text-xs font-medium transition-all duration-200 hover:-translate-y-0.5 hover:bg-muted active:scale-95 border border-border shadow-xs"
              >
                <Download className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
                <span>Download Resume (PDF)</span>
              </a>
            </motion.div>

            <motion.div 
              className="flex items-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.45 }}
            >
              <div className="flex flex-wrap items-center gap-2 p-1.5 bg-card/80 backdrop-blur-md border border-border rounded-xl shadow-xs">
                <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all active:scale-95" title="GitHub" aria-label="GitHub">
                  <Github className="w-4 h-4" />
                </a>
                <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all active:scale-95" title="LinkedIn" aria-label="LinkedIn">
                  <Linkedin className="w-4 h-4" />
                </a>
                <a href={portfolioData.links.leetcode} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all active:scale-95" title="LeetCode" aria-label="LeetCode">
                  <LeetCodeIcon className="w-4 h-4" />
                </a>
                <a href={portfolioData.links.codeforces} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all active:scale-95" title="Codeforces" aria-label="Codeforces">
                  <CodeforcesIcon className="w-4 h-4" />
                </a>
                <a href={portfolioData.links.geeksforgeeks} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all active:scale-95" title="GeeksforGeeks" aria-label="GeeksForGeeks">
                  <GeeksForGeeksIcon className="w-4 h-4" />
                </a>
                <a href={portfolioData.links.codolio} target="_blank" rel="noopener noreferrer" className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all active:scale-95" title="Codolio" aria-label="Codolio">
                  <CodolioIcon className="w-4 h-4" />
                </a>
                <div className="w-[1px] h-4 bg-border mx-1" />
                <a href={portfolioData.links.email} className="p-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-all active:scale-95" title="Email" aria-label="Email">
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>

          {/* Interactive Circle-to-Square Profile Morph */}
          <motion.div 
            className="flex-shrink-0 flex flex-col items-center justify-center mt-6 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <div 
              className={`profile-square-stage ${isPhotoExpanded ? 'expanded' : ''}`}
              onClick={() => setIsPhotoExpanded(!isPhotoExpanded)}
              title="Tap or hover to expand portrait"
            >
              <div className="profile-ring-guide" />
              <div className="profile-clip-box flex items-center justify-center overflow-hidden p-2">
                <img 
                  src={portfolioData.personal.profileImage} 
                  alt={portfolioData.personal.name} 
                  className="profile-square-img"
                  draggable={false}
                />
                <div className="profile-hi-badge">
                  <div className="font-serif text-xl sm:text-2xl leading-none">👋 Hi, I'm Rohan!</div>
                  <div className="font-mono text-[10px] text-zinc-300 mt-1 uppercase tracking-wider">
                    MCA '27 @ NIT Jamshedpur
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-3 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-card/80 border border-border text-muted-foreground font-mono text-[10px] uppercase tracking-wider shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span>Hover / Tap to Morph ↗</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
