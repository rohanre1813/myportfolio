import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Code2 } from 'lucide-react';

export function About() {
  return (
    <Section 
      id="about" 
      title="About & Background"
      index="// 01. ABOUT"
      subtitle="Engineering mindset, academic background, and core focus areas."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        <motion.div 
          className="lg:col-span-7 space-y-6 text-foreground/90 text-base sm:text-lg leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="text-xl sm:text-2xl font-bold tracking-tight text-foreground leading-snug">
            Building reliable full-stack systems with strong algorithmic foundations.
          </p>
          <p className="text-muted-foreground">
            I am currently pursuing my Master of Computer Applications (MCA) at <strong className="text-foreground font-semibold">National Institute of Technology (NIT) Jamshedpur</strong>. My engineering focus is on architecting responsive web applications, low-latency API architectures with Redis caching, and real-time distributed tracking.
          </p>
          <p className="text-muted-foreground">
            Competitive programming and algorithmic problem solving are core to how I write code. Having solved <strong className="text-foreground font-semibold">800+ algorithmic challenges</strong> across LeetCode, Codeforces, and GeeksforGeeks, I consistently prioritize data structure efficiency, asymptotic optimization, and clean system design.
          </p>
          <p className="text-muted-foreground">
            Lately, I've been integrating LLMs and RAG document analytics pipelines using LangChain, vector embeddings, and Node.js microservices into production workflows.
          </p>
        </motion.div>

        <div className="lg:col-span-5 space-y-6">
          <motion.div 
            className="p-6 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/40 transition-all duration-300"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-5 border-b border-border/50 pb-3">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase text-primary font-semibold block">Academic Track</span>
                <h3 className="font-bold text-foreground text-lg">Formal Education</h3>
              </div>
            </div>
            
            <ul className="space-y-5">
              {portfolioData.education.map((edu, idx) => (
                <li key={idx} className="relative pl-4 border-l-2 border-border/80">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                    <p className="font-semibold text-foreground text-sm sm:text-base">{edu.degree}</p>
                    <span className="font-mono text-xs text-primary font-medium">{edu.score}</span>
                  </div>
                  <p className="text-muted-foreground text-xs sm:text-sm">{edu.institution}, {edu.location}</p>
                  <p className="font-mono text-xs text-muted-foreground/80 mt-1">{edu.period}</p>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div 
            className="p-6 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/40 transition-all duration-300"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-primary/10 rounded-lg text-primary">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <span className="font-mono text-xs uppercase text-primary font-semibold block">Practice & Metrics</span>
                <h3 className="font-bold text-foreground text-lg">Algorithmic Problem Solving</h3>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Consistently practicing data structures & algorithms with deep knowledge of trees, dynamic programming, graphs, and system concurrency.
            </p>
            <div className="grid grid-cols-2 gap-3 pt-2 border-t border-border/40 font-mono text-xs">
              <div className="p-2.5 rounded-lg bg-muted/50 border border-border/60">
                <span className="text-muted-foreground block text-[11px]">Total Solved</span>
                <span className="text-foreground font-bold text-base">800+ Problems</span>
              </div>
              <div className="p-2.5 rounded-lg bg-muted/50 border border-border/60">
                <span className="text-muted-foreground block text-[11px]">Codeforces Max</span>
                <span className="text-foreground font-bold text-base">Rating: 1142</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
