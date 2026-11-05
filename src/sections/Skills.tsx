import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { portfolioData } from '../data/portfolioData';

export function Skills() {
  const categories = Object.keys(portfolioData.skills) as (keyof typeof portfolioData.skills)[];

  const container: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Section 
      id="skills" 
      title="Technical Stack & Expertise" 
      index="// 02. SKILLS"
      subtitle="Languages, architectures, distributed tools, and libraries I use to build scalable software."
      className="bg-muted/20"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-6 rounded-2xl bg-card border border-border shadow-xs hover:border-primary/40 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-center justify-between mb-4 border-b border-border/40 pb-3">
              <h3 className="font-bold text-base sm:text-lg text-foreground tracking-tight">{category}</h3>
              <span className="font-mono text-[11px] text-primary/80 font-semibold">
                0{idx + 1}
              </span>
            </div>

            <motion.ul 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2"
            >
              {portfolioData.skills[category].map((skill) => (
                <motion.li
                  key={skill}
                  variants={item}
                  className="font-mono text-xs px-2.5 py-1.5 bg-muted/60 text-foreground/90 rounded-md border border-border/70 hover:border-primary/40 hover:bg-muted transition-colors cursor-default select-none font-medium"
                >
                  {skill}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
