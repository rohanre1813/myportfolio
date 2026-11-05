import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { portfolioData } from '../data/portfolioData';
import { Mail, ArrowRight, Copy, CheckCircle2 } from 'lucide-react'; import { GithubIcon as Github, LinkedinIcon as Linkedin, LeetCodeIcon, CodeforcesIcon, GeeksForGeeksIcon, CodolioIcon } from '../components/Icons';
import { useState } from 'react';

export function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(portfolioData.personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <Section 
      id="contact" 
      title="Get In Touch"
      index="// 05. CONTACT"
      subtitle="Open for software engineering roles, technical collaboration, and distributed systems discussions."
    >
      <div className="max-w-4xl mx-auto">
        <motion.div 
          className="p-8 sm:p-12 rounded-2xl bg-card border border-border shadow-xs text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            DIRECT CONTACT
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-foreground tracking-tight mb-4">
            Let's build something exceptional together.
          </h3>

          <p className="text-base sm:text-lg text-muted-foreground mb-8 max-w-xl mx-auto leading-relaxed">
            I am currently open to full-time software engineering roles and internships. If you have an opportunity or want to talk tech, feel free to reach out.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a 
              href={portfolioData.links.email}
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-sm hover:bg-primary/90 transition-all duration-200 hover:-translate-y-0.5 active:scale-95 shadow-xs w-full sm:w-auto justify-center"
            >
              <Mail className="w-4 h-4" />
              <span>Send Email</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            
            <button 
              onClick={copyEmail}
              className="flex items-center gap-2 bg-muted/50 text-foreground border border-border px-6 py-3 rounded-lg font-mono text-xs font-medium hover:bg-muted transition-all duration-200 hover:-translate-y-0.5 active:scale-95 w-full sm:w-auto justify-center"
            >
              {copied ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4 text-muted-foreground" />}
              <span>{copied ? 'Copied to Clipboard!' : portfolioData.personal.email}</span>
            </button>
          </div>

          <div className="pt-8 border-t border-border/50">
            <span className="font-mono text-xs uppercase text-muted-foreground tracking-wider font-semibold block mb-6">
              Verified Profiles & Networks
            </span>

            <div className="flex flex-wrap justify-center gap-3">
              <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-muted/40 hover:bg-muted border border-border/60 hover:border-primary/40 text-muted-foreground hover:text-foreground font-mono text-xs transition-all active:scale-95">
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-muted/40 hover:bg-muted border border-border/60 hover:border-primary/40 text-muted-foreground hover:text-foreground font-mono text-xs transition-all active:scale-95">
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
              <a href={portfolioData.links.leetcode} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-muted/40 hover:bg-muted border border-border/60 hover:border-primary/40 text-muted-foreground hover:text-foreground font-mono text-xs transition-all active:scale-95">
                <LeetCodeIcon className="w-4 h-4" />
                <span>LeetCode</span>
              </a>
              <a href={portfolioData.links.codeforces} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-muted/40 hover:bg-muted border border-border/60 hover:border-primary/40 text-muted-foreground hover:text-foreground font-mono text-xs transition-all active:scale-95">
                <CodeforcesIcon className="w-4 h-4" />
                <span>Codeforces</span>
              </a>
              <a href={portfolioData.links.geeksforgeeks} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-muted/40 hover:bg-muted border border-border/60 hover:border-primary/40 text-muted-foreground hover:text-foreground font-mono text-xs transition-all active:scale-95">
                <GeeksForGeeksIcon className="w-4 h-4" />
                <span>GeeksforGeeks</span>
              </a>
              <a href={portfolioData.links.codolio} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3.5 py-2 rounded-lg bg-muted/40 hover:bg-muted border border-border/60 hover:border-primary/40 text-muted-foreground hover:text-foreground font-mono text-xs transition-all active:scale-95">
                <CodolioIcon className="w-4 h-4" />
                <span>Codolio</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
