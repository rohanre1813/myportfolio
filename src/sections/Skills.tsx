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
    <Section id="skills" title="Technical Skills" className="bg-muted/30">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group relative p-6 rounded-2xl bg-card border border-border shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <h3 className="font-semibold text-lg text-foreground mb-5 relative z-10">{category}</h3>
            <motion.ul 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-2.5 relative z-10"
            >
              {portfolioData.skills[category].map((skill) => (
                <motion.li
                  key={skill}
                  variants={item}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-3 py-1.5 bg-muted/50 text-foreground rounded-lg text-sm font-medium border border-border/50 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-colors cursor-default"
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
