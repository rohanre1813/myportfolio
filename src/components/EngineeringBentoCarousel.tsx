import { Database, Cpu, Zap, Activity, Terminal, Shield, Layers, Award } from 'lucide-react';

export function EngineeringBentoCarousel() {
  const topCards = [
    {
      tag: "01 / ARCHITECTURE",
      title: "Redis Sub-10ms Caching",
      caption: "Redis Cache Engine",
      metric: "~80% Latency Drop",
      desc: "5-minute TTL caching layer on high-traffic Node.js endpoints, eliminating redundant MongoDB queries and accelerating throughput.",
      icon: Zap,
      gradient: "from-blue-600/30 to-indigo-900/40",
      width: "w-rect"
    },
    {
      tag: "02 / REALTIME",
      title: "WorkSphere Zone Sockets",
      caption: "Socket.IO Tracking",
      metric: "Live Office Presence",
      desc: "Event-driven WebSocket synchronization tracking employee presence across office sectors in real-time.",
      icon: Activity,
      gradient: "from-cyan-600/30 to-blue-900/40",
      width: "w-square"
    },
    {
      tag: "03 / EMBEDDINGS",
      title: "Pinecone Vector RAG",
      caption: "Gemini Vector Search",
      metric: "1536-dim Cosine Index",
      desc: "LangChain orchestration embedding PDF chunks via Gemini API, stored and indexed in Pinecone for semantic question answering.",
      icon: Database,
      gradient: "from-emerald-600/30 to-teal-900/40",
      width: "w-rect"
    },
    {
      tag: "04 / ALGORITHMS",
      title: "800+ Algorithmic Solves",
      caption: "Competitive Programming",
      metric: "Codeforces Max: 1142",
      desc: "Extensive problem-solving track record across LeetCode, Codeforces, and GeeksforGeeks in graphs, DP, and trees.",
      icon: Award,
      gradient: "from-amber-600/30 to-rose-900/40",
      width: "w-rect"
    }
  ];

  const bottomCards = [
    {
      tag: "05 / COMPUTER VISION",
      title: "Client-Side Face API",
      caption: "Edge AI Verification",
      metric: "0 GPU Server Cost",
      desc: "TensorFlow.js edge inference executing directly in the client browser, securing attendance without expensive cloud GPUs.",
      icon: Shield,
      gradient: "from-purple-600/30 to-indigo-900/40",
      width: "w-rect"
    },
    {
      tag: "06 / INVOICING",
      title: "JusBill Billing Core",
      caption: "Tax Automation",
      metric: "Automated GST & Ledger",
      desc: "Automated CGST/SGST splits, PDF invoice generation, and inventory synchronization with MongoDB transactions.",
      icon: Layers,
      gradient: "from-sky-600/30 to-blue-900/40",
      width: "w-square"
    },
    {
      tag: "07 / DEVOPS",
      title: "Dockerized AWS Infra",
      caption: "EC2 + Nginx Proxy",
      metric: "Weekly Disaster Recovery",
      desc: "Containerized deployment orchestrated with GitHub Actions CI/CD pipelines and automated MongoDB backups.",
      icon: Cpu,
      gradient: "from-teal-600/30 to-slate-900/40",
      width: "w-rect"
    },
    {
      tag: "08 / CONCURRENCY",
      title: "Distributed Event Queue",
      caption: "Event Pipelines",
      metric: "Scalable REST APIs",
      desc: "Architected modular Express.js controllers with JWT authentication, role-based authorization, and code obfuscation.",
      icon: Terminal,
      gradient: "from-rose-600/30 to-purple-900/40",
      width: "w-rect"
    }
  ];

  return (
    <div className="mt-20">
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-border/50 mb-8">
        <div>
          <span className="font-mono text-xs uppercase text-primary font-semibold tracking-wider block mb-1">
            CONTINUOUS BENTO GALLERY · HOVER TO INSPECT & PAUSE
          </span>
          <h3 className="font-serif text-3xl sm:text-4xl text-foreground tracking-tight">
            System Highlights & Engineering Milestones
          </h3>
          <p className="mt-1 text-sm text-muted-foreground max-w-xl">
            Dual-track continuous diagonal visual showcase highlighting distributed systems, vector search pipelines, and edge-AI implementations.
          </p>
        </div>
        <span className="font-mono text-[11px] uppercase tracking-wider text-cyan-900 dark:text-cyan-200 bg-cyan-500/10 border border-cyan-500/30 px-3 py-1.5 rounded-full shrink-0 shadow-xs">
          ↘ Dual-Track Diagonal Loop
        </span>
      </div>

      {/* The Diagonal Continuous Viewport */}
      <div className="ryla-diagonal-viewport">
        <div className="ryla-diagonal-plane">
          
          {/* Top Track (Slides Left) */}
          <div className="ryla-track-left">
            {/* Set A */}
            {topCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <article key={`top-a-${idx}`} className="ryla-loop-item">
                  <div className="cyan-glow-caption">
                    <span className="cyan-glow-dot" />
                    <span>{card.caption}</span>
                  </div>
                  <div className={`ryla-bento-frame ${card.width} p-4 flex flex-col justify-between text-white bg-gradient-to-br ${card.gradient}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-cyan-300 font-medium">{card.tag}</span>
                      <Icon className="w-4 h-4 text-cyan-300" />
                    </div>
                    <div>
                      <div className="font-bold text-base tracking-tight leading-snug">{card.title}</div>
                      <div className="font-mono text-xs text-cyan-200 font-semibold mt-0.5">{card.metric}</div>
                    </div>
                    <p className="text-[11px] text-zinc-300 line-clamp-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </article>
              );
            })}

            {/* Set B (Duplicate for seamless loop) */}
            {topCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <article key={`top-b-${idx}`} className="ryla-loop-item" aria-hidden="true">
                  <div className="cyan-glow-caption">
                    <span className="cyan-glow-dot" />
                    <span>{card.caption}</span>
                  </div>
                  <div className={`ryla-bento-frame ${card.width} p-4 flex flex-col justify-between text-white bg-gradient-to-br ${card.gradient}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-cyan-300 font-medium">{card.tag}</span>
                      <Icon className="w-4 h-4 text-cyan-300" />
                    </div>
                    <div>
                      <div className="font-bold text-base tracking-tight leading-snug">{card.title}</div>
                      <div className="font-mono text-xs text-cyan-200 font-semibold mt-0.5">{card.metric}</div>
                    </div>
                    <p className="text-[11px] text-zinc-300 line-clamp-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

          {/* Bottom Track (Slides Right) */}
          <div className="ryla-track-right">
            {/* Set A */}
            {bottomCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <article key={`bot-a-${idx}`} className="ryla-loop-item">
                  <div className="cyan-glow-caption">
                    <span className="cyan-glow-dot" />
                    <span>{card.caption}</span>
                  </div>
                  <div className={`ryla-bento-frame ${card.width} p-4 flex flex-col justify-between text-white bg-gradient-to-br ${card.gradient}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-cyan-300 font-medium">{card.tag}</span>
                      <Icon className="w-4 h-4 text-cyan-300" />
                    </div>
                    <div>
                      <div className="font-bold text-base tracking-tight leading-snug">{card.title}</div>
                      <div className="font-mono text-xs text-cyan-200 font-semibold mt-0.5">{card.metric}</div>
                    </div>
                    <p className="text-[11px] text-zinc-300 line-clamp-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </article>
              );
            })}

            {/* Set B (Duplicate for seamless loop) */}
            {bottomCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <article key={`bot-b-${idx}`} className="ryla-loop-item" aria-hidden="true">
                  <div className="cyan-glow-caption">
                    <span className="cyan-glow-dot" />
                    <span>{card.caption}</span>
                  </div>
                  <div className={`ryla-bento-frame ${card.width} p-4 flex flex-col justify-between text-white bg-gradient-to-br ${card.gradient}`}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-cyan-300 font-medium">{card.tag}</span>
                      <Icon className="w-4 h-4 text-cyan-300" />
                    </div>
                    <div>
                      <div className="font-bold text-base tracking-tight leading-snug">{card.title}</div>
                      <div className="font-mono text-xs text-cyan-200 font-semibold mt-0.5">{card.metric}</div>
                    </div>
                    <p className="text-[11px] text-zinc-300 line-clamp-2 leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
}
