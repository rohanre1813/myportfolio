import { useState } from 'react';
import { Section } from '../components/Section';
import { ExternalLink, RotateCw, CheckCircle2, Trophy, Award, Target, Zap } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface CertCardData {
  certNo: string;
  tag: string;
  frontTitle: string;
  frontMetric: string;
  frontSubtitle: string;
  backCategory: string;
  issuer: string;
  dateOrRank: string;
  credDetails: string;
  skills: string;
  verifyUrl: string;
  verifyLabel: string;
  icon: typeof Trophy;
}

export function Achievements() {
  const [flippedCards, setFlippedCards] = useState<{ [key: number]: boolean }>({});
  const [allFlipped, setAllFlipped] = useState(false);

  const cards: CertCardData[] = [
    {
      certNo: "01 / 04",
      tag: "DSA & CP MASTERY",
      frontTitle: "Competitive Programming",
      frontMetric: "800+",
      frontSubtitle: "Problems Solved on LeetCode & Codeforces",
      backCategory: "ALGORITHMIC PRACTICE",
      issuer: "LeetCode & Codeforces & GFG",
      dateOrRank: "Continuous / Active",
      credDetails: "Graphs, Dynamic Programming, Trees",
      skills: "Asymptotic Analysis, Concurrency, Greedy",
      verifyUrl: portfolioData.links.codolio,
      verifyLabel: "Codolio Profile",
      icon: Target
    },
    {
      certNo: "02 / 04",
      tag: "GLOBAL CONTEST RATING",
      frontTitle: "Codeforces",
      frontMetric: "1142",
      frontSubtitle: "Peak Rating · Division 2 / 3 Contests",
      backCategory: "CONTEST RANKING",
      issuer: "Codeforces",
      dateOrRank: "Max Rating: 1142",
      credDetails: "Handle: Rohanre1813",
      skills: "Speed Solving, Math, Logic Verification",
      verifyUrl: portfolioData.links.codeforces,
      verifyLabel: "Codeforces Profile",
      icon: Zap
    },
    {
      certNo: "03 / 04",
      tag: "NATIONAL ENTRANCE",
      frontTitle: "NIMCET 2024",
      frontMetric: "AIR 549",
      frontSubtitle: "All India Rank among 25,000+ candidates",
      backCategory: "NATIONAL ADMISSION",
      issuer: "NIT Jamshedpur (Admitted)",
      dateOrRank: "Rank 549 (Top 2%)",
      credDetails: "National NIT MCA Entrance Exam",
      skills: "Higher Math, Analytical Reasoning, CS",
      verifyUrl: portfolioData.links.nimcetRankCard,
      verifyLabel: "NIMCET Scorecard",
      icon: Trophy
    },
    {
      certNo: "04 / 04",
      tag: "STATE EXAMINATION",
      frontTitle: "Karnataka PGCET MCA",
      frontMetric: "Rank 29",
      frontSubtitle: "State Rank among 13,000+ candidates",
      backCategory: "STATE TOP RANK",
      issuer: "Karnataka Examination Authority",
      dateOrRank: "State Rank 29",
      credDetails: "Post Graduate Common Entrance Test",
      skills: "General CS, Quantitative Aptitude, Logic",
      verifyUrl: portfolioData.links.pgcetRankPost,
      verifyLabel: "PGCET Rank Post",
      icon: Award
    }
  ];

  const handleCardClick = (idx: number) => {
    setFlippedCards((prev) => ({
      ...prev,
      [idx]: !prev[idx]
    }));
  };

  const handleFlipAll = () => {
    const nextState = !allFlipped;
    setAllFlipped(nextState);
    const updated: { [key: number]: boolean } = {};
    cards.forEach((_, idx) => {
      updated[idx] = nextState;
    });
    setFlippedCards(updated);
  };

  return (
    <Section 
      id="achievements" 
      title="Recognitions & Credentials" 
      index="// 04. CREDENTIALS"
      subtitle="Interactive 3D credentials showcasing national entrance rankings and competitive programming ratings."
    >
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 pb-6 border-b border-border/50 mb-8">
        <div>
          <span className="font-mono text-xs uppercase text-primary font-semibold tracking-wider block mb-1">
            LUSION-STYLE 3D FLIP CARDS · HOVER OR TAP TO REVEAL DETAILS
          </span>
          <p className="text-sm text-muted-foreground">
            Tap any card to flip between front milestone metrics and deep verified credential details.
          </p>
        </div>

        <button
          onClick={handleFlipAll}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground text-background font-mono text-xs font-semibold hover:bg-foreground/90 transition-all active:scale-95 shadow-xs shrink-0 self-start sm:self-auto"
        >
          <RotateCw className="w-3.5 h-3.5" />
          <span>{allFlipped ? 'Reset Cards ↺' : 'Flip All Cards ↻'}</span>
        </button>
      </div>

      {/* 3D Flipping Cards Grid */}
      <div className="lusion-cert-grid">
        {cards.map((card, idx) => {
          const isFlipped = flippedCards[idx] || false;
          const Icon = card.icon;

          return (
            <div 
              key={idx}
              onClick={() => handleCardClick(idx)}
              className={`lusion-card-wrap ${isFlipped ? 'flipped' : ''}`}
              title="Click or hover to flip 3D card"
            >
              <div className="lusion-card-inner">
                {/* FRONT FACE */}
                <div className="lusion-face lusion-face-front bg-card border border-border flex flex-col justify-between p-6">
                  <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground">
                    <span>{card.certNo}</span>
                    <span className="px-2 py-0.5 rounded bg-primary/10 text-primary font-medium">
                      TAP TO FLIP ↻
                    </span>
                  </div>

                  <div className="my-auto py-4 text-center">
                    <div className="w-12 h-12 mx-auto rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="font-mono text-xs text-primary font-semibold tracking-wider uppercase mb-1">
                      {card.tag}
                    </div>
                    <div className="font-serif text-4xl sm:text-5xl font-normal text-foreground tracking-tight mb-2">
                      {card.frontMetric}
                    </div>
                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed max-w-[220px] mx-auto">
                      {card.frontSubtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-border/60 pt-3">
                    <span className="font-serif text-lg text-foreground">{card.frontTitle}</span>
                    <a
                      href={card.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="font-mono text-[10px] text-emerald-500 hover:text-emerald-400 font-semibold flex items-center gap-1 hover:underline cursor-pointer"
                      title={`Open ${card.verifyLabel}`}
                    >
                      <CheckCircle2 className="w-3 h-3" /> VERIFIED ↗
                    </a>
                  </div>
                </div>

                {/* BACK FACE */}
                <div className="lusion-face lusion-face-back bg-card border border-primary/50 flex flex-col justify-between p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="font-mono text-[10px] text-primary uppercase font-bold tracking-wider block">
                        {card.backCategory}
                      </span>
                      <span className="font-serif text-xl font-normal text-foreground">
                        {card.frontTitle}
                      </span>
                    </div>
                    <span className="w-7 h-7 rounded-lg bg-foreground text-background font-mono text-xs font-bold flex items-center justify-center">
                      0{idx + 1}
                    </span>
                  </div>

                  <ul className="my-auto space-y-2 text-xs text-muted-foreground border-y border-border/50 py-3 font-mono">
                    <li className="flex justify-between">
                      <span className="text-muted-foreground/70">Issuer</span>
                      <strong className="text-foreground">{card.issuer}</strong>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground/70">Score / Rank</span>
                      <span className="text-primary font-bold">{card.dateOrRank}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground/70">Exam Scope</span>
                      <span className="text-foreground/90 truncate max-w-[140px] text-right">{card.credDetails}</span>
                    </li>
                    <li className="flex justify-between">
                      <span className="text-muted-foreground/70">Core Skills</span>
                      <span className="text-foreground/90 truncate max-w-[140px] text-right">{card.skills}</span>
                    </li>
                  </ul>

                  <div className="flex items-center justify-between pt-2">
                    <a
                      href={card.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground text-background font-mono text-[11px] font-medium hover:bg-foreground/90 transition-all active:scale-95 shadow-xs"
                    >
                      <span>{card.verifyLabel}</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                    <span className="font-mono text-[10px] tracking-wider uppercase text-muted-foreground/40 select-none">
                      VERIFIED
                    </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
