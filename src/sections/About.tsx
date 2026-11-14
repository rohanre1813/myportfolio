import { useState } from 'react';
import { motion } from 'framer-motion';
import { Section } from '../components/Section';
import { Sparkles, Terminal } from 'lucide-react';

export function About() {
  const [activeEdu, setActiveEdu] = useState(0);

  const timelineMilestones = [
    {
      period: "2024 — 2027",
      status: "CURRENT TRACK",
      degree: "Master of Computer Applications (MCA)",
      institution: "National Institute of Technology (NIT) Jamshedpur",
      location: "Jamshedpur, Jharkhand",
      score: "CGPA : 7.96",
      details: "Advanced curriculum covering Distributed Computing, System Design, Operating Systems, Computer Networks, and Cloud Infrastructure. Active contributor to algorithmic coding societies and competitive programming tracks."
    },
    {
      period: "2020 — 2023",
      status: "BACHELOR'S DEGREE",
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "IBMR School of Business",
      location: "Hubli, Karnataka",
      score: "CGPA : 7.67",
      details: "Graduated with strong distinction. Core coursework in C++, Python, MySQL database management, Data Structures, and Modern Web Architectures. Led technical seminar presentations on software design patterns."
    },
    {
      period: "2023 — Present",
      status: "COMPETITIVE MILESTONE",
      degree: "Competitive Programming & Problem Solving",
      institution: "LeetCode · Codeforces · GeeksforGeeks",
      location: "Global Profiles",
      score: "800+ Solved",
      details: "Achieved max rating of 1142 on Codeforces. Ranked AIR 549 in NIMCET 2024 (out of 25,000+ candidates) and Rank 29 in Karnataka PGCET MCA (out of 13,000+ candidates)."
    }
  ];

  return (
    <Section 
      id="about" 
      title="Profile & Academic Trajectory"
      index="// 01. PROFILE"
      subtitle="Engineering philosophy, formal computer science education, and algorithmic problem solving."
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Column: Story & Philosophy */}
        <motion.div 
          className="lg:col-span-6 space-y-6 text-foreground/90 leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="inline-flex items-center gap-2 font-mono text-xs px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>BACKGROUND & PERSPECTIVE</span>
          </div>

          <h3 className="font-serif text-3xl sm:text-4xl text-foreground leading-tight">
            Bridging robust backend engineering with intuitive, responsive interfaces.
          </h3>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            I'm a graduate student in Computer Applications at <strong className="text-foreground font-semibold">NIT Jamshedpur</strong>. My engineering work is grounded in designing reliable, scalable web architectures — from low-latency Redis cache layers reducing API response times by ~80% to edge-computed facial verification systems eliminating backend GPU overhead.
          </p>

          <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
            Writing efficient software begins with algorithmic discipline. Having solved <strong className="text-foreground font-semibold">800+ data structure and algorithm challenges</strong> across LeetCode, Codeforces, and GeeksforGeeks, I bring rigorous asymptotic thinking, memory awareness, and concurrency safety into every microservice and system I build.
          </p>

          <div className="p-4 rounded-2xl bg-card border border-border flex items-center gap-4 text-xs font-mono">
            <div className="p-2.5 rounded-xl bg-primary/10 text-primary shrink-0">
              <Terminal className="w-5 h-5" />
            </div>
            <div>
              <span className="text-foreground font-bold block text-sm">Tech Philosophy</span>
              <span className="text-muted-foreground">Clean abstractions, measurable latency reductions, and resilient disaster recovery pipelines.</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Magnifying Interactive Stacked Cards */}
        <div className="lg:col-span-6">
          <div className="flex items-center justify-between mb-3 px-1">
            <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
              INTERACTIVE TIMELINE · HOVER OR TAP TO MAGNIFY
            </span>
            <span className="font-mono text-[11px] text-primary font-semibold">
              3 MILESTONES
            </span>
          </div>

          <div className="edu-stack-list">
            {timelineMilestones.map((item, idx) => (
              <div 
                key={idx}
                onMouseEnter={() => setActiveEdu(idx)}
                onClick={() => setActiveEdu(idx)}
                className={`edu-mag-card ${activeEdu === idx ? 'active-edu' : ''}`}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${activeEdu === idx ? 'bg-emerald-500 animate-pulse' : 'bg-primary'}`} />
                    <span className="font-mono text-xs text-muted-foreground font-semibold">
                      {item.period}
                    </span>
                  </div>
                  <span className="font-mono text-xs text-primary font-bold">
                    {item.score}
                  </span>
                </div>

                <div className="font-serif text-2xl text-foreground mt-1">
                  {item.degree}
                </div>

                <div className="text-xs sm:text-sm text-muted-foreground mt-0.5">
                  {item.institution} · {item.location}
                </div>

                {/* Magnifying Extra Drawer */}
                <div className="edu-extra-drawer border-t border-border/60 pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-muted-foreground leading-relaxed">
                  <span>{item.details}</span>
                  <span className="font-mono text-[10px] px-2.5 py-0.5 rounded-full bg-foreground text-background shrink-0 self-start sm:self-auto font-medium">
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
