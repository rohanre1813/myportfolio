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
    <Section 
      id="projects" 
      title="Featured Engineering Projects" 
      index="// 03. PROJECTS"
      subtitle="Selected full-stack and distributed systems built with scalable architecture, caching, and AI integrations."
    >
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="space-y-8"
      >
        {portfolioData.projects.map((project, index) => (
          <motion.div
            key={project.name}
            variants={item}
            className="group relative bg-card border border-border/80 p-6 sm:p-8 md:p-10 rounded-2xl shadow-xs hover:border-primary/50 hover:shadow-lg transition-all duration-300"
          >
            <div className="flex flex-col gap-6">
              {/* Header row: Index, title, period */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 border-b border-border/50 pb-5">
                <div>
                  <div className="font-mono text-xs text-primary font-semibold tracking-wider mb-1">
                    PROJECT // 0{index + 1}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {project.name.split('–')[0].trim()}
                    {project.name.includes('–') && (
                      <span className="font-normal text-muted-foreground text-lg sm:text-xl block sm:inline sm:ml-2">
                        — {project.name.split('–')[1].trim()}
                      </span>
                    )}
                  </h3>
                </div>
                <span className="font-mono text-xs font-medium text-muted-foreground bg-muted/60 px-3 py-1.5 rounded-md border border-border/60 self-start sm:self-auto shrink-0">
                  {project.period}
                </span>
              </div>
              
              {/* Description */}
              <p className="text-base sm:text-lg text-foreground/90 font-normal leading-relaxed">
                {project.description}
              </p>
              
              {/* Engineering highlights */}
              <div className="space-y-2.5">
                <span className="font-mono text-xs uppercase text-muted-foreground tracking-wider font-semibold block">
                  Key Implementations:
                </span>
                <ul className="space-y-2 text-sm sm:text-base text-muted-foreground">
                  {project.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <span className="font-mono text-primary text-sm font-semibold select-none mt-0.5">›</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies and links */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-4 border-t border-border/40">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map(tech => (
                    <span 
                      key={tech} 
                      className="font-mono text-xs px-2.5 py-1 bg-muted/60 text-foreground/80 font-medium rounded-md border border-border/60 group-hover:border-primary/30 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  {project.githubUrl && project.githubUrl !== '#' && (
                    <a 
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium text-foreground bg-muted/50 hover:bg-muted border border-border hover:border-primary/40 transition-all active:scale-95"
                    >
                      <Github className="w-4 h-4" />
                      <span>View Source</span>
                    </a>
                  )}
                  {project.liveUrl && project.liveUrl !== '#' && (
                    <a 
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-mono font-medium text-primary-foreground bg-primary hover:bg-primary/90 transition-all active:scale-95 shadow-xs"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Deployment</span>
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
