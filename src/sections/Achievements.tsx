import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { portfolioData } from '../data/portfolioData';
import { Trophy, Star, Medal, Target } from 'lucide-react';

const icons = [
  Target,
  Star,
  Medal,
  Trophy
];

export function Achievements() {
  const container: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const item: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <Section id="achievements" title="Achievements" className="bg-muted/30">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {portfolioData.achievements.map((achievement, idx) => {
          const Icon = icons[idx % icons.length];
          return (
            <motion.div
              key={idx}
              variants={item}
              whileHover={{ y: -4, scale: 1.01 }}
              className="group flex items-start gap-4 p-6 bg-card border border-border/60 rounded-2xl shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300"
            >
              <div className="p-3 bg-primary/10 rounded-xl shrink-0 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                <Icon className="w-6 h-6" />
              </div>
              <p className="text-foreground font-medium pt-1 leading-relaxed">
                {achievement}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </Section>
  );
}
