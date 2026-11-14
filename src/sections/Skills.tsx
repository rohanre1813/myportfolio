import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { portfolioData } from '../data/portfolioData';

export function Skills() {
  const categories = Object.keys(portfolioData.skills) as (keyof typeof portfolioData.skills)[];

  const marqueeTools = [
    { name: "C++", tag: "DSA & CP", symbol: "cpp" },
    { name: "Python", tag: "AI & RAG", symbol: "py" },
    { name: "JavaScript", tag: "ES6+", symbol: "js" },
    { name: "React", tag: "UI & State", symbol: "⚛" },
    { name: "Node.js", tag: "Async Core", symbol: "node" },
    { name: "Express.js", tag: "REST API", symbol: "ex" },
    { name: "Socket.IO", tag: "Real-time", symbol: "⚡" },
    { name: "Redis", tag: "Cache Layer", symbol: "redis" },
    { name: "MongoDB", tag: "NoSQL DB", symbol: "mongo" },
    { name: "Pinecone", tag: "Vector Index", symbol: "vec" },
    { name: "Gemini API", tag: "LLM Embeddings", symbol: "ai" },
    { name: "LangChain", tag: "RAG Pipeline", symbol: "chain" },
    { name: "Docker", tag: "Containers", symbol: "dock" },
    { name: "Nginx", tag: "Reverse Proxy", symbol: "ngx" },
    { name: "AWS EC2", tag: "Cloud VM", symbol: "aws" },
    { name: "Git & GitHub", tag: "CI/CD Actions", symbol: "git" }
  ];

  return (
    <Section 
      id="skills" 
      title="Technical Stack & Expertise" 
      index="// 02. SKILLS"
      subtitle="Languages, distributed caching tools, vector databases, and container platforms I engineer with."
    >
      {/* Infinite Looping Marquee Ticker (sameermg-portfolio reference) */}
      <div className="mb-14 rounded-2xl border border-border bg-card overflow-hidden shadow-xs">
        <div className="px-6 py-3 border-b border-border/60 flex items-center justify-between bg-muted/40 font-mono text-[11px]">
          <span className="text-muted-foreground uppercase tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            TOOLS & STACK I USE · CONTINUOUS LIVE MARQUEE
          </span>
          <span className="text-primary font-medium">HOVER TO PAUSE</span>
        </div>

        <div className="relative overflow-hidden py-5 bg-card">
          <div className="marquee-track flex items-center">
            {/* Loop track A */}
            <div className="flex items-center gap-10 px-6">
              {marqueeTools.map((tool, i) => (
                <div key={`m-a-${i}`} className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/80 text-foreground font-mono text-xs font-semibold hover:border-primary/50 transition-colors">
                    <span className="text-[10px] text-primary font-bold uppercase">{tool.symbol}</span>
                    <span>{tool.name}</span>
                    <span className="text-[10px] text-muted-foreground font-normal">({tool.tag})</span>
                  </div>
                  <span className="text-muted-foreground/30 font-mono select-none">•</span>
                </div>
              ))}
            </div>

            {/* Loop track B (duplicate for seamless infinite loop) */}
            <div className="flex items-center gap-10 px-6" aria-hidden="true">
              {marqueeTools.map((tool, i) => (
                <div key={`m-b-${i}`} className="flex items-center gap-3 shrink-0">
                  <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-muted/50 border border-border/80 text-foreground font-mono text-xs font-semibold hover:border-primary/50 transition-colors">
                    <span className="text-[10px] text-primary font-bold uppercase">{tool.symbol}</span>
                    <span>{tool.name}</span>
                    <span className="text-[10px] text-muted-foreground font-normal">({tool.tag})</span>
                  </div>
                  <span className="text-muted-foreground/30 font-mono select-none">•</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-6 rounded-2xl bg-card border border-border/80 shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-4 border-b border-border/50 pb-3">
              <h3 className="font-serif text-xl sm:text-2xl text-foreground tracking-tight">{category}</h3>
              <span className="font-mono text-xs text-primary font-semibold">
                0{idx + 1}
              </span>
            </div>

            <ul className="flex flex-wrap gap-2">
              {portfolioData.skills[category].map((skill) => (
                <li
                  key={skill}
                  className="font-mono text-xs px-2.5 py-1 bg-muted/60 text-foreground rounded-md border border-border hover:border-primary/40 hover:bg-muted transition-colors cursor-default select-none font-medium"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
