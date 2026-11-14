import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/Section';
import { portfolioData } from '../data/portfolioData';
import { ExternalLink } from 'lucide-react'; 
import { GithubIcon as Github } from '../components/Icons';
import { ProjectDeviceMockup } from '../components/ProjectDeviceMockup';
import { EngineeringBentoCarousel } from '../components/EngineeringBentoCarousel';

export function Projects() {
  const [activeProjectIdx, setActiveProjectIdx] = useState(0);
  const activeProject = portfolioData.projects[activeProjectIdx];

  return (
    <Section 
      id="projects" 
      title="Featured Projects & Systems" 
      index="// 03. PROJECTS"
      subtitle="Interactive product inspection, live slide walkthroughs, and distributed architecture benchmarks."
    >
      {/* Top Project Selector Tabs */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div className="flex flex-wrap gap-2">
          {portfolioData.projects.map((proj, idx) => (
            <button
              key={proj.id}
              onClick={() => setActiveProjectIdx(idx)}
              className={`px-4 py-2 rounded-full font-mono text-xs transition-all flex items-center gap-2 ${
                activeProjectIdx === idx
                  ? 'bg-foreground text-background font-semibold shadow-sm'
                  : 'bg-muted/70 text-muted-foreground hover:text-foreground hover:bg-muted border border-border/60'
              }`}
            >
              <span>0{idx + 1}</span>
              <span>· {proj.shortTitle}</span>
            </button>
          ))}
        </div>

        <div className="font-mono text-xs text-muted-foreground hidden lg:block">
          PROJECT 0{activeProjectIdx + 1} OF 0{portfolioData.projects.length}
        </div>
      </div>

      {/* Main Interactive Showcase Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center bg-card/60 backdrop-blur-xs border border-border/80 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-sm">
        {/* Left Column: Technical Narrative & Implementation Breakdown */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="space-y-6"
            >
              <div>
                <div className="flex items-center gap-2 mb-2 font-mono text-xs text-primary font-semibold uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  <span>PROJECT 0{activeProjectIdx + 1} / 03</span>
                  <span className="text-border">•</span>
                  <span className="text-muted-foreground font-normal">{activeProject.period}</span>
                </div>

                <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-foreground leading-[1.08]">
                  {activeProject.name.split('–')[0].trim()}
                </h3>

                <p className="font-sans text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
                  {activeProject.tagline}
                </p>
              </div>

              {/* Metrics Pill Grid */}
              <div className="grid grid-cols-3 gap-2 pt-2 border-t border-border/50">
                {activeProject.stats.map((st, i) => (
                  <div key={i} className="p-2.5 rounded-xl bg-muted/40 border border-border/60 font-mono text-left">
                    <span className="text-[10px] text-muted-foreground block truncate">{st.label}</span>
                    <span className="text-xs sm:text-sm font-bold text-foreground block truncate mt-0.5">{st.value}</span>
                  </div>
                ))}
              </div>

              {/* Engineering Highlights */}
              <div className="space-y-2">
                <span className="font-mono text-xs uppercase text-muted-foreground tracking-wider font-semibold block">
                  Core Implementation Details:
                </span>
                <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                  {activeProject.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="font-mono text-primary font-bold select-none mt-0.5">›</span>
                      <span className="leading-relaxed">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-border/50">
                {activeProject.technologies.map((t) => (
                  <span 
                    key={t}
                    className="font-mono text-[11px] px-2.5 py-1 rounded-md bg-muted/60 text-foreground/80 border border-border/60"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-3 pt-3">
                {activeProject.liveUrl && activeProject.liveUrl !== '#' && (
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-primary-foreground font-mono text-xs font-medium hover:bg-primary/90 transition-all active:scale-95 shadow-xs"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Deployment</span>
                  </a>
                )}
                {activeProject.githubUrl && activeProject.githubUrl !== '#' && (
                  <a
                    href={activeProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-card border border-border hover:bg-muted text-foreground font-mono text-xs font-medium transition-all active:scale-95"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>View Repository</span>
                  </a>
                )}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Right Column: High-Fidelity Device Mockup & Slide Showcase */}
        <div className="lg:col-span-7">
          <ProjectDeviceMockup project={activeProject} />
        </div>
      </div>

      {/* Section 04 Reference: Continuous Diagonal Looping Bento Showcase */}
      <EngineeringBentoCarousel />
    </Section>
  );
}
