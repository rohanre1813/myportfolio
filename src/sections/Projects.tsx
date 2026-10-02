import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react'; import { GithubIcon as Github } from '../components/Icons';

export function Projects() {
  const container: import("framer-motion").Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item: import("framer-motion").Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <Section id="projects" title="Featured Projects">
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-12"
      >
        {portfolioData.projects.map((project) => (
          <motion.div
            key={project.name}
            variants={item}
            className="group relative flex flex-col lg:flex-row gap-8 bg-card border border-border/60 p-6 md:p-8 rounded-3xl shadow-sm hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/[0.03] to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            
            <div className="flex-1 flex flex-col justify-between relative z-10">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{project.name}</h3>
                  <span className="text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full whitespace-nowrap hidden sm:inline-block border border-border/50">
                    {project.period}
                  </span>
                </div>
                
                <p className="text-lg text-foreground mb-6 font-medium">
                  {project.description}
                </p>
                
                <ul className="space-y-3 mb-8">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex gap-3 text-muted-foreground">
                      <span className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-primary/70 group-hover:bg-primary transition-colors" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-muted text-muted-foreground group-hover:bg-primary/10 group-hover:text-primary transition-colors duration-300 text-xs font-semibold rounded-md border border-border/50 group-hover:border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group/link"
                    >
                      <Github className="w-5 h-5 group-hover/link:-translate-y-0.5 transition-transform" /> Code
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors group/link"
                    >
                      <ExternalLink className="w-5 h-5 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 transition-transform" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
