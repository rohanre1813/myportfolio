import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, 
  ChevronLeft, 
  ChevronRight, 
  Lock, 
  RefreshCw, 
  Shield, 
  Database, 
  Zap, 
  Cpu, 
  Activity, 
  Layers 
} from 'lucide-react';

import { ProjectSlide } from '../data/portfolioData';

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
    slides?: ProjectSlide[];
    stats: { label: string; value: string }[];
  };
}

export function ProjectDeviceMockup({ project }: ProjectMockupProps) {
  const [activeSlide, setActiveSlide] = useState(0);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  const slides: ProjectSlide[] = project.slides && project.slides.length > 0
    ? project.slides
    : [
        {
          title: 'Overview & Dashboard',
          caption: '01 · Overview',
          image: project.gallery[0] || project.image,
          type: 'image'
        },
        {
          title: 'Core Feature Flow',
          caption: '02 · Core Flow',
          image: project.gallery[1] || project.image,
          type: 'image'
        },
        {
          title: 'Architecture & Analytics',
          caption: '03 · Architecture',
          image: project.gallery[2],
          type: 'architecture'
        }
      ];

  const totalSlides = slides.length;

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === totalSlides - 1 ? 0 : prev + 1));
  };

  const currentSlide = slides[activeSlide] || slides[0];
  const isImageSlide = currentSlide.type === 'image' && currentSlide.image;
  const isImageFailed = currentSlide.image ? imageError[currentSlide.image] : false;

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
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-foreground/90 truncate hover:text-primary transition-colors"
              title="Open Live Application"
            >
              {project.liveUrl.replace('https://', '')}
            </a>
          </div>
          <RefreshCw className="w-3 h-3 text-muted-foreground/60 shrink-0 ml-2" />
        </div>

        {/* Slide Counter & Controls */}
        <div className="flex items-center gap-1">
          <button 
            onClick={handlePrev}
            className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            title="Previous Slide"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <span className="font-mono text-[11px] text-muted-foreground px-1 font-medium select-none">
            0{activeSlide + 1} / 0{totalSlides}
          </span>
          <button 
            onClick={handleNext}
            className="p-1 rounded hover:bg-muted text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
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
            {/* If image slide and file loads successfully */}
            {isImageSlide && !isImageFailed ? (
              <div className="relative w-full h-full flex items-center justify-center bg-zinc-950 select-none overflow-hidden group">
                {/* Subtle blurred ambient backdrop matching screenshot colors */}
                <div 
                  className="absolute inset-0 bg-cover bg-center filter blur-3xl opacity-25 scale-125 pointer-events-none transition-opacity duration-500"
                  style={{ backgroundImage: `url(${currentSlide.image})` }}
                />

                {/* Main Screenshot Container */}
                <div className="relative z-10 w-full h-full p-2 sm:p-4 flex items-center justify-center">
                  <img
                    src={currentSlide.image}
                    alt={`${project.name} - ${currentSlide.title}`}
                    onError={() => {
                      if (currentSlide.image) {
                        setImageError((prev) => ({ ...prev, [currentSlide.image!]: true }));
                      }
                    }}
                    className="max-h-full max-w-full object-contain rounded-lg shadow-2xl border border-white/10 transition-transform duration-300 group-hover:scale-[1.015]"
                  />
                </div>

                {/* Floating pill badge: Slide Title */}
                <div className="absolute top-3 left-4 z-20 pointer-events-none flex items-center gap-2">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-zinc-950/85 backdrop-blur-md text-emerald-400 border border-emerald-500/30 flex items-center gap-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{currentSlide.title}</span>
                  </span>
                </div>

                {/* Floating pill badge: Live capture confirmation */}
                <div className="absolute top-3 right-4 z-20 pointer-events-none hidden sm:flex items-center">
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-950/70 backdrop-blur-md text-zinc-400 border border-zinc-800">
                    Live Capture
                  </span>
                </div>
              </div>
            ) : (
              /* High-Fidelity Interactive Telemetry & Architecture Showcase */
              <div className="w-full h-full p-4 sm:p-6 flex flex-col justify-between text-white bg-gradient-to-br from-zinc-900 via-zinc-950 to-zinc-900">
                {/* Top UI Bar */}
                <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="font-mono text-xs text-zinc-300 font-medium">
                      {project.shortTitle} • {currentSlide.title}
                    </span>
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                    {project.technologies[0]} + {project.technologies[1]}
                  </span>
                </div>

                {/* Project Specific Architecture Breakdown */}
                {project.id === 'jusbill' && (
                  <div className="grid grid-cols-12 gap-3 my-auto">
                    {/* Redis Engine Box */}
                    <div className="col-span-12 sm:col-span-7 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2.5">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-zinc-400 font-mono flex items-center gap-1.5">
                          <Zap className="w-3.5 h-3.5 text-amber-400" />
                          Redis In-Memory Key Cache
                        </span>
                        <span className="font-mono text-emerald-400 font-semibold">94.2% Hit Rate</span>
                      </div>
                      
                      <div className="h-2 rounded-full bg-zinc-800 overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-emerald-500 to-cyan-500 w-[94%]" />
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-2 text-[11px] font-mono border-t border-zinc-800/80">
                        <div>
                          <span className="text-zinc-500 block text-[10px]">PEAK LATENCY</span>
                          <span className="text-emerald-400 font-bold">sub-10ms</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">TTL WINDOW</span>
                          <span className="text-zinc-300 font-medium">300s Sliding</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">ENDPOINT SPEED</span>
                          <span className="text-cyan-400 font-medium">850ms → 110ms</span>
                        </div>
                      </div>
                    </div>

                    {/* AWS Cloud Box */}
                    <div className="col-span-12 sm:col-span-5 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Cpu className="w-3.5 h-3.5 text-primary" />
                          AWS EC2 + Nginx Proxy
                        </div>
                        <div className="font-mono text-xl sm:text-2xl font-bold text-white mt-1">99.4% Uptime</div>
                      </div>
                      <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-zinc-800/80 space-y-1">
                        <div className="text-emerald-400 flex items-center gap-1">
                          <span>✓</span>
                          <span>Weekly GitHub Actions Backup</span>
                        </div>
                        <div className="text-zinc-400">AWS S3 Encrypted Dump</div>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'worksphere' && activeSlide === 1 && (
                  <div className="grid grid-cols-12 gap-3 my-auto">
                    <div className="col-span-12 sm:col-span-7 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-400 flex items-center gap-1.5">
                          <Layers className="w-3.5 h-3.5 text-cyan-400" />
                          Office Floor Live Heatmap
                        </span>
                        <span className="text-emerald-400">67 Employees Active</span>
                      </div>

                      <div className="space-y-2 font-mono text-xs">
                        <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-emerald-400" />
                            <span>Zone A · Engineering & DevOps</span>
                          </div>
                          <span className="text-emerald-400 font-bold">42 Present</span>
                        </div>
                        <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-amber-400" />
                            <span>Zone B · Product & Design Studio</span>
                          </div>
                          <span className="text-amber-400 font-bold">18 Present</span>
                        </div>
                        <div className="p-2 rounded-lg bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-cyan-400" />
                            <span>Meeting Room C · Strategy Hub</span>
                          </div>
                          <span className="text-cyan-400 font-bold">7 Present</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12 sm:col-span-5 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between">
                      <div>
                        <div className="font-mono text-[10px] text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Activity className="w-3.5 h-3.5 text-cyan-400" />
                          WebSocket Telemetry
                        </div>
                        <div className="font-mono text-xl sm:text-2xl font-bold text-white mt-1">12ms Ping</div>
                      </div>
                      <div className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-zinc-800/80 space-y-1">
                        <div className="text-cyan-400">● Bi-Directional Event Stream</div>
                        <div className="text-zinc-400">Dynamic QR Entry / Exit Scan</div>
                        <div className="text-emerald-400">Zero Polling Overhead</div>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'worksphere' && activeSlide !== 1 && (
                  <div className="grid grid-cols-12 gap-3 my-auto">
                    <div className="col-span-12 sm:col-span-7 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2.5">
                      <div className="font-mono text-xs text-zinc-400 flex items-center gap-1.5">
                        <Cpu className="w-3.5 h-3.5 text-primary" />
                        Client-Side TensorFlow.js Inference
                      </div>
                      <p className="text-xs text-zinc-300 leading-relaxed font-sans">
                        Facial landmarks and embeddings computed completely within employee browser canvas using face-api.js. Server only validates signed vector tokens.
                      </p>
                      <div className="grid grid-cols-2 gap-2 pt-2 border-t border-zinc-800/80 font-mono text-[11px]">
                        <div>
                          <span className="text-zinc-500 block text-[10px]">INFERENCE ENGINE</span>
                          <span className="text-zinc-200 font-semibold">SSD MobileNet v1</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">SERVER OVERHEAD</span>
                          <span className="text-emerald-400 font-semibold">0% GPU Load</span>
                        </div>
                      </div>
                    </div>

                    <div className="col-span-12 sm:col-span-5 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between font-mono">
                      <div>
                        <div className="text-[10px] text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Shield className="w-3.5 h-3.5 text-primary" />
                          Access Control
                        </div>
                        <div className="text-lg font-bold text-white mt-1">RBAC + JWT</div>
                      </div>
                      <div className="text-[11px] text-zinc-400 pt-2 border-t border-zinc-800/80 space-y-1">
                        <div className="text-emerald-400">✓ Role-Based Route Guards</div>
                        <div className="text-zinc-300">✓ Production Code Obfuscation</div>
                        <div className="text-zinc-400">✓ Anti-Tamper Token Vault</div>
                      </div>
                    </div>
                  </div>
                )}

                {project.id === 'docuai' && (
                  <div className="grid grid-cols-12 gap-3 my-auto">
                    {/* Live Query Box */}
                    <div className="col-span-12 sm:col-span-7 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 space-y-2.5">
                      <div className="flex items-center justify-between text-xs font-mono">
                        <span className="text-zinc-400">RAG SEMANTIC VECTOR RETRIEVAL</span>
                        <span className="text-emerald-400 font-semibold">Cosine: 0.94</span>
                      </div>
                      
                      <div className="p-2.5 rounded-lg bg-zinc-950 border border-zinc-800 text-xs font-mono text-zinc-300">
                        <span className="text-primary font-bold">query: </span>
                        <span>"Extract executive compensation and Q3 liability projections..."</span>
                      </div>

                      <div className="grid grid-cols-3 gap-2 pt-1 font-mono text-[11px] border-t border-zinc-800/80">
                        <div>
                          <span className="text-zinc-500 block text-[10px]">CHUNK SIZE</span>
                          <span className="text-zinc-200 font-semibold">512 Tokens</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">OVERLAP</span>
                          <span className="text-zinc-200 font-semibold">64 Tokens</span>
                        </div>
                        <div>
                          <span className="text-zinc-500 block text-[10px]">DIMENSIONS</span>
                          <span className="text-cyan-400 font-semibold">1536-dim</span>
                        </div>
                      </div>
                    </div>

                    {/* Vector Index Info */}
                    <div className="col-span-12 sm:col-span-5 p-3.5 rounded-xl bg-zinc-900/90 border border-zinc-800 flex flex-col justify-between font-mono">
                      <div>
                        <div className="text-[10px] text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                          <Database className="w-3.5 h-3.5 text-emerald-400" />
                          Pinecone Index
                        </div>
                        <div className="text-lg font-bold text-white mt-1">Cosine Metric</div>
                      </div>
                      <div className="text-[11px] text-zinc-400 pt-2 border-t border-zinc-800/80 space-y-1">
                        <div className="text-emerald-400">✓ Gemini text-embedding-004</div>
                        <div className="text-zinc-300">✓ LangChain Context Injector</div>
                        <div className="text-zinc-400">✓ Real-Time Citations</div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Telemetry Footer Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono bg-zinc-900/90 px-3 py-2 rounded-lg border border-zinc-800 text-zinc-300">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-zinc-300 font-medium">Architecture Benchmark & Pipeline Flow</span>
                    <span className="text-zinc-600 hidden sm:inline">•</span>
                    <span className="text-zinc-400 hidden sm:inline">Live Production Telemetry</span>
                  </div>
                  <a 
                    href={project.liveUrl} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:text-primary/80 font-medium hover:underline flex items-center gap-1 transition-colors"
                  >
                    <span>Launch Live System</span>
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
          {slides.map((s, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all flex items-center gap-1.5 cursor-pointer ${
                activeSlide === idx
                  ? 'bg-primary text-primary-foreground font-semibold shadow-xs'
                  : 'bg-muted/60 text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <span>0{idx + 1}</span>
              <span className="hidden sm:inline">· {s.title}</span>
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
