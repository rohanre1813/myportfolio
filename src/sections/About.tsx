import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { portfolioData } from '../data/portfolioData';
import { GraduationCap, Code2 } from 'lucide-react';

export function About() {
  return (
    <Section id="about" title="About Me">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div 
          className="space-y-6 text-muted-foreground text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <p>
            I am a software developer with a strong foundation in computer applications and modern web technologies. My focus is on building scalable, full-stack systems that solve real-world problems.
          </p>
          <p>
            Currently pursuing my Master of Computer Applications (MCA) at NIT Jamshedpur, I have developed expertise in the MERN stack, real-time architectures, and integrating AI and LLMs into practical applications.
          </p>
          <p>
            I enjoy tackling algorithmic challenges and optimizing backend performance. Whether it's reducing API response times with Redis caching or implementing RAG-powered semantic search, I aim to create efficient and impactful software.
          </p>
        </motion.div>

        <div className="space-y-6">
          <motion.div 
            className="group p-6 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
          >
            <div className="p-3 bg-primary/10 rounded-xl h-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-xl mb-3">Education</h3>
              <ul className="space-y-5">
                {portfolioData.education.map((edu, idx) => (
                  <li key={idx} className="relative">
                    <p className="font-semibold text-foreground">{edu.degree}</p>
                    <p className="text-muted-foreground text-sm mt-0.5">{edu.institution}, {edu.location}</p>
                    <p className="text-primary text-sm font-medium mt-1">{edu.period} • {edu.score}</p>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div 
            className="group p-6 rounded-2xl bg-card border border-border/60 shadow-sm hover:shadow-md hover:border-primary/40 transition-all duration-300 flex gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <div className="p-3 bg-primary/10 rounded-xl h-fit text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
              <Code2 className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-foreground text-xl mb-1">Problem Solving</h3>
              <p className="text-muted-foreground leading-relaxed">Solved 800+ DSA and competitive programming problems across multiple platforms.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
