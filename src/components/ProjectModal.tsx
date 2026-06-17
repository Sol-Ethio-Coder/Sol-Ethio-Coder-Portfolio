import { useEffect } from "react";
import { motion } from "framer-motion";
import { X, ExternalLink, Sparkles, CheckCircle2, Calendar, Tag } from "lucide-react";
import { Project } from "../data/portfolioData";

type ProjectModalProps = {
  project: Project;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 print:hidden">
      {/* Immersive Dark Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="absolute inset-0 bg-black/85 backdrop-blur-xl"
      />

      {/* Floating Modal Content Box */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 350 }}
        className="relative flex flex-col max-h-[90vh] w-full max-w-4xl overflow-hidden rounded-[2.5rem] border border-white/20 bg-[#0c1024] shadow-[0_20px_80px_rgba(0,0,0,0.9)] text-white"
      >
        {/* Top Sticky Close Button & Accent Bar */}
        <div className={`h-2 w-full bg-gradient-to-r ${project.color}`} />
        
        <button
          onClick={onClose}
          aria-label="Close Project Modal"
          className="absolute top-6 right-6 z-30 flex h-11 w-11 items-center justify-center rounded-full bg-black/50 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white transition-all duration-300 hover:rotate-90"
        >
          <X className="h-6 w-6" />
        </button>

        <div className="overflow-y-auto p-6 sm:p-10 space-y-8">
          
          {/* Header section inside modal */}
          <div className="space-y-4 max-w-2xl pr-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className={`inline-flex items-center gap-1.5 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${project.color} shadow-lg`}>
                <Sparkles className="h-3.5 w-3.5" />
                <span>{project.category === "fullstack" ? "Full Stack Solution" : "Frontend Experience"}</span>
              </span>
              
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 text-xs font-medium text-slate-300">
                <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                <span>{project.year}</span>
              </span>

              {project.featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 px-3 py-1 text-xs font-bold text-amber-400 uppercase tracking-wide">
                  ⭐ Starred Showcase
                </span>
              )}
            </div>

            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-white">{project.title}</h2>
            <p className="text-lg sm:text-xl font-medium text-cyan-300">{project.subtitle}</p>
          </div>

          {/* Screenshot Presentation Window */}
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-slate-950 group shadow-2xl">
            <div className="absolute top-0 inset-x-0 h-8 bg-slate-900/80 border-b border-white/10 flex items-center px-4 gap-2 z-10 backdrop-blur-md">
              <div className="h-3 w-3 rounded-full bg-rose-500/80" />
              <div className="h-3 w-3 rounded-full bg-amber-500/80" />
              <div className="h-3 w-3 rounded-full bg-emerald-500/80" />
              <span className="text-[10px] font-mono text-slate-400 ml-2">{project.live.replace("https://", "")}</span>
            </div>
            
            <img
              src={project.image}
              alt={project.title}
              className="mt-8 w-full object-cover max-h-[450px] transition-transform duration-700 group-hover:scale-[1.02]"
            />
          </div>

          {/* Long detailed story */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white flex items-center gap-2">
              <FileTextIcon className="h-6 w-6 text-cyan-400" />
              <span>Project Overview & Architecture</span>
            </h3>
            <p className="text-base sm:text-lg leading-8 text-slate-300 font-light">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Core Features Showcase */}
          {project.features && project.features.length > 0 && (
            <div className="space-y-4 rounded-3xl border border-white/10 bg-white/5 p-6 sm:p-8 backdrop-blur-md">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-indigo-400" />
                <span>Key Technical Capabilities Developed</span>
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {project.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-400 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-slate-200 leading-6">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tech Stack Breakdown */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <Tag className="h-5 w-5 text-teal-400" />
              <span>Technologies & Tools Employed</span>
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-300 shadow-md transition-all hover:bg-cyan-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-6 border-t border-white/10">
            <div className="flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-center gap-3 rounded-full bg-gradient-to-r ${project.color} px-8 py-4 text-base font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 w-full sm:w-auto`}
              >
                <span>Launch Live Application</span>
                <ExternalLink className="h-5 w-5" />
              </a>

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-8 py-4 text-base font-bold text-white transition-all duration-300 hover:bg-white/10 hover:border-white w-full sm:w-auto"
              >
                <GithubIcon className="h-5 w-5" />
                <span>Source Code</span>
              </a>
            </div>

            <button
              onClick={onClose}
              className="hidden sm:block text-sm font-medium text-slate-400 hover:text-white transition-colors"
            >
              Press ESC or click outside to dismiss
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
}

function FileTextIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  );
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12Z" />
    </svg>
  );
}
