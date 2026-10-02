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
    <Section id="contact" title="Get In Touch">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p 
          className="text-lg md:text-xl text-muted-foreground mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          I'm currently looking for new opportunities. Whether you have a question or just want to say hi, 
          I'll try my best to get back to you!
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <a 
            href={portfolioData.links.email}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-medium hover:bg-primary/90 transition-all duration-200 hover:-translate-y-1 active:scale-95 shadow-lg hover:shadow-primary/20 text-lg w-full sm:w-auto justify-center"
          >
            <Mail className="w-5 h-5" />
            Say Hello
            <ArrowRight className="w-4 h-4 ml-1" />
          </a>
          
          <button 
            onClick={copyEmail}
            className="flex items-center gap-2 bg-card text-foreground border border-border px-8 py-4 rounded-xl font-medium hover:bg-muted transition-all duration-200 hover:-translate-y-1 active:scale-95 text-lg w-full sm:w-auto justify-center"
          >
            {copied ? <CheckCircle2 className="w-5 h-5 text-green-500" /> : <Copy className="w-5 h-5 text-muted-foreground" />}
            {copied ? 'Copied!' : 'Copy Email'}
          </button>
        </motion.div>
        
        <motion.div 
          className="mt-16 flex flex-wrap justify-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <a href={portfolioData.links.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 flex flex-col items-center gap-2">
            <div className="p-3 bg-muted rounded-full">
              <Github className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">GitHub</span>
          </a>
          <a href={portfolioData.links.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 flex flex-col items-center gap-2">
            <div className="p-3 bg-muted rounded-full">
              <Linkedin className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">LinkedIn</span>
          </a>
          <a href={portfolioData.links.leetcode} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 flex flex-col items-center gap-2">
            <div className="p-3 bg-muted rounded-full">
              <LeetCodeIcon className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">LeetCode</span>
          </a>
          <a href={portfolioData.links.codeforces} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 flex flex-col items-center gap-2">
            <div className="p-3 bg-muted rounded-full">
              <CodeforcesIcon className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Codeforces</span>
          </a>
          <a href={portfolioData.links.geeksforgeeks} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 flex flex-col items-center gap-2">
            <div className="p-3 bg-muted rounded-full">
              <GeeksForGeeksIcon className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">GeeksforGeeks</span>
          </a>
          <a href={portfolioData.links.codolio} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all duration-200 hover:-translate-y-1 flex flex-col items-center gap-2">
            <div className="p-3 bg-muted rounded-full">
              <CodolioIcon className="w-5 h-5" />
            </div>
            <span className="text-xs font-medium">Codolio</span>
          </a>
        </motion.div>
      </div>
    </Section>
  );
}
