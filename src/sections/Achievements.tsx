import { motion } from 'framer-motion';
import { Section } from '../components/Section';

const achievementStats = [
  {
    metric: "800+",
    label: "Problems Solved",
    tag: "DSA & CP",
    description: "Solved across LeetCode, Codeforces, and GeeksforGeeks, with expertise in dynamic programming, trees, and graph algorithms."
  },
  {
    metric: "1142",
    label: "Peak Rating",
    tag: "Codeforces",
    description: "Active competitive programming profile demonstrating rapid problem-solving, speed, and algorithmic correctness."
  },
  {
    metric: "AIR 549",
    label: "All India Rank",
    tag: "NIMCET 2024",
    description: "Secured top national rank among 25,000+ candidates to earn admission into NIT Jamshedpur's MCA programme."
  },
  {
    metric: "Rank 29",
    label: "State Rank",
    tag: "Karnataka PGCET MCA",
    description: "Achieved top 30 rank among 13,000+ candidates in Karnataka state-level post-graduate engineering entrance exam."
  }
];

export function Achievements() {
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
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <Section 
      id="achievements" 
      title="Recognitions & Milestones" 
      index="// 04. ACHIEVEMENTS"
      subtitle="Competitive programming rankings and national-level engineering exam milestones."
    >
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {achievementStats.map((stat, idx) => (
          <motion.div
            key={idx}
            variants={item}
            className="group relative p-6 bg-card border border-border/80 rounded-2xl shadow-xs hover:border-primary/50 hover:shadow-md transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="font-mono text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-semibold">
                  {stat.tag}
                </span>
                <span className="font-mono text-xs text-muted-foreground/60">
                  0{idx + 1}
                </span>
              </div>
              <div className="font-extrabold text-3xl sm:text-4xl text-foreground tracking-tight mb-1 group-hover:text-primary transition-colors">
                {stat.metric}
              </div>
              <div className="font-medium text-sm text-foreground/80 mb-3">
                {stat.label}
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {stat.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
