import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, ChevronLeft, ChevronRight, Lock, RefreshCw, UploadCloud, Shield, Database } from 'lucide-react';

interface ProjectMockupProps {
  project: {
    id: string;
    name: string;
    shortTitle: string;
    tagline: string;
    period: string;
    technologies: string[];
    liveUrl: string;
    githubUrl: string;
    image: string;
    gallery: string[];
    stats: { label: string; value: string }[];
  };
}

export function ProjectDeviceMockup({ project }: ProjectMockupProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const slideTitles = [
    'Overview & Dashboard',
    'Core Feature Flow',
    'Architecture & Analytics'
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? 2 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === 2 ? 0 : prev + 1));
  };

  const currentImagePath = project.gallery[activeSlide] || project.image;
  const isFailed = imageError[currentImagePath];

  return (
    <div className="w-full flex flex-col rounded-2xl border border-border bg-card shadow-2xl overflow-hidden">
      {/* Device Browser Header Bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-muted/60 border-b border-border/80 select-none">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-rose-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
        </div>

        {/* Address bar */}
        <div className="flex-1 max-w-md mx-3 px-3 py-1 rounded-md bg-background/80 border border-border/60 text-xs font-mono flex items-center justify-between text-muted-foreground truncate">
          <div className="flex items-center gap-1.5 truncate">
            <Lock className="w-3 h-3 text-emerald-500 shrink-0" />
            <span className="text-foreground/90 truncate">{project.liveUrl.replace('https://', '')}</span>
          </div>
          <RefreshCw className="w-3 h-3 text-muted-foreground/60 shrink-0 ml-2" />
        </div>

        {/* Slide Counter & Controls */}
        <div className="flex items-center gap-1">
          <button 
            onClick={handlePrev}
            className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            title="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-[11px] text-muted-foreground px-1 font-medium">
            0{activeSlide + 1} / 03
          </span>
          <button 
            onClick={handleNext}
            className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
            title="Next Slide"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Main Slideshow Stage */}
      <div className="relative aspect-[16/10] w-full bg-zinc-950 overflow-hidden flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={`${project.id}-${activeSlide}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.02 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0 w-full h-full flex items-center justify-center"
          >
            {/* If actual image exists, show it */}
            {!isFailed ? (
              <img
                src={currentImagePath}
                alt={`${project.name} slide ${activeSlide + 1}`}
                onError={() => setImageError((prev) => ({ ...prev, [currentImagePath]: true }))}
                className="w-full h-full object-cover"
              />
            ) : (
              /* Simulated High-Fidelity UI Interface Preview */
              <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between text-white bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900">
                {/* Top UI Bar */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-mono text-xs text-zinc-300 font-medium">
                      {project.shortTitle} • {slideTitles[activeSlide]}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {project.technologies[0]} + {project.technologies[1]}
                  </span>
                </div>

                {/* Project Specific Interactive Visualization */}
                {project.id === 'jusbill' && (
                  <div className="grid grid-cols-12 gap-3 my-auto">
                    <div className="col-span-8 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-zinc-400 font-mono">INVOICE #JB-2026-04</span>
                        <span className="font-mono text-emerald-400 font-semibold">PAID · ₹48,250</span>
                      </div>
                      <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                        <div className="h-full bg-primary w-[78%]" />
                      </div>
                      <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] font-mono border-t border-zinc-800/80">
                        <div>
                          <span className="text-zinc-500 block">REDIS CACHE</span>
                          <span className="text-emerald-400 font-bold">HIT (~80% faster)</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">SYNC</span>
                          <span className="text-zinc-300 font-medium">REALTIME</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block">BACKUP</span>
                          <span className="text-zinc-300 font-medium">AWS S3 CRON</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-4 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between">
                      <div className="font-mono text-[10px] text-zinc-400 uppercase">Stock Health</div>
                      <div className="font-mono text-2xl font-bold text-white">99.4%</div>
                      <span className="text-[10px] text-emerald-400 font-mono">Automated DB Sync</span>
                    </div>
                  </div>
                )}

                {project.id === 'worksphere' && (
                  <div className="grid grid-cols-12 gap-3 my-auto">
                    <div className="col-span-7 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-400">EDGE AI FACIAL SCAN</span>
                        <span className="text-emerald-400">VERIFIED</span>
                      </div>
                      <div className="p-3 rounded-lg bg-zinc-950 border border-dashed border-zinc-700 flex items-center justify-center gap-3">
                        <Shield className="w-8 h-8 text-primary animate-pulse" />
                        <div className="text-left font-mono text-[11px]">
                          <div className="text-zinc-200 font-semibold">Client-Side TF.js</div>
                          <div className="text-zinc-500">0 server GPU cost</div>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-5 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between text-left font-mono">
                      <div className="text-[10px] text-zinc-400 uppercase">Active Office Zones</div>
                      <div className="space-y-1 text-xs">
                        <div className="text-emerald-400">● Zone A: 42 present</div>
                        <div className="text-amber-400">● Zone B: 18 present</div>
                        <div className="text-zinc-400">● Socket.IO: Connected</div>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'docuai' && (
                  <div className="grid grid-cols-12 gap-3 my-auto">
                    <div className="col-span-8 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-400">RAG SEMANTIC VECTOR RETRIEVAL</span>
                        <span className="text-primary font-semibold">PINECONE INDEX</span>
                      </div>
                      <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-[11px] font-mono text-zinc-300">
                        <span className="text-primary font-bold">query: </span>
                        <span>"Summarize Q3 financial liabilities from uploaded PDF..."</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] font-mono text-emerald-400">
                        <Database className="w-3.5 h-3.5" />
                        <span>Cosine Similarity: 0.94 • Gemini Embeddings</span>
                      </div>
                    </div>

                    <div className="col-span-4 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between text-left font-mono">
                      <div className="text-[10px] text-zinc-400 uppercase">Vector Storage</div>
                      <div className="text-xl font-bold text-white">1536-dim</div>
                      <span className="text-[10px] text-zinc-400">LangChain Pipeline</span>
                    </div>
                  </div>
                )}

                {/* Upload Guide Footer Notice */}
                <div className="flex items-center justify-between text-[11px] font-mono bg-zinc-900/80 px-3 py-1.5 rounded-lg border border-zinc-800 text-zinc-400">
                  <div className="flex items-center gap-2">
                    <UploadCloud className="w-3.5 h-3.5 text-primary" />
                    <span>Upload your screenshot to: <code className="text-zinc-200">{currentImagePath}</code></span>
                  </div>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <span>Inspect Live</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Navigation Thumbnails */}
      <div className="p-3 bg-card border-t border-border flex items-center justify-between gap-2 overflow-x-auto">
        <div className="flex items-center gap-2">
          {slideTitles.map((title, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all flex items-center gap-1.5 ${
                activeSlide === idx
                  ? 'bg-primary text-primary-foreground font-semibold shadow-xs'
                  : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <span>0{idx + 1}</span>
              <span className="hidden sm:inline">· {title}</span>
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-mono text-xs bg-muted hover:bg-muted/80 text-foreground transition-colors"
          >
            <span>Live App</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
