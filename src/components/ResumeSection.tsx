import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, GraduationCap, Award, Printer, Calendar, MapPin, Sparkles, CheckCircle2 } from "lucide-react";
import { EXPERIENCE_TIMELINE, EDUCATION_TIMELINE, CERTIFICATIONS_LIST } from "../data/portfolioData";

export default function ResumeSection() {
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  const printResume = () => {
    window.print();
  };

  return (
    <section id="resume" className="relative min-h-screen bg-[#070913] py-28 text-white px-6 md:px-8 print:hidden">
      {/* Immersive Background Glow Orbs */}
      <div className="absolute top-1/4 right-10 h-[500px] w-[500px] rounded-full bg-indigo-900/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-10 h-[450px] w-[450px] rounded-full bg-cyan-900/10 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10 space-y-16">
        
        {/* Superior Section Header & Print Trigger */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-teal-500/30 bg-teal-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-teal-300">
              <Award className="h-3.5 w-3.5" />
              <span>Professional Biography</span>
            </div>

            <h2 className="text-4xl font-black tracking-tight sm:text-6xl bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
              Career <span className="bg-gradient-to-r from-teal-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent">Timeline</span>
            </h2>

            <p className="text-lg leading-8 text-slate-400 font-light">
              An engineering background bridging full-stack MERN orchestration, computing science pedagogy at Trillium, and EdTech product leadership.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="shrink-0">
            <button
              onClick={printResume}
              className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-indigo-600 px-8 py-4 font-bold text-white shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <Printer className="h-5 w-5 transition-transform group-hover:rotate-12" />
              <span>Export Immersive PDF CV</span>
            </button>
          </motion.div>
        </div>

        {/* Career interactive timeline toggles */}
        <div className="flex items-center justify-center sm:justify-start gap-4 border-b border-white/10 pb-4">
          <button
            onClick={() => setActiveTab("experience")}
            className={`flex items-center gap-3 rounded-2xl px-6 py-4 text-base font-bold transition-all ${
              activeTab === "experience"
                ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            <Briefcase className="h-5 w-5" />
            <span>Work Experience ({EXPERIENCE_TIMELINE.length})</span>
          </button>

          <button
            onClick={() => setActiveTab("education")}
            className={`flex items-center gap-3 rounded-2xl px-6 py-4 text-base font-bold transition-all ${
              activeTab === "education"
                ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                : "bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white"
            }`}
          >
            <GraduationCap className="h-5 w-5" />
            <span>Academic Qualifications ({EDUCATION_TIMELINE.length})</span>
          </button>
        </div>

        {/* Animated Timeline Cards Suite */}
        <motion.div layout className="relative pl-6 sm:pl-10 border-l-2 border-cyan-500/30 space-y-12">
          <AnimatePresence mode="wait">
            {activeTab === "experience" && (
              <motion.div
                key="exp"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                {EXPERIENCE_TIMELINE.map((item, index) => (
                  <motion.div
                    key={item.title + item.company}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    {/* Glowing dot on the vertical line */}
                    <div className="absolute -left-[33px] sm:-left-[49px] top-4 h-5 w-5 rounded-full bg-cyan-400 border-4 border-[#070913] group-hover:scale-125 group-hover:bg-indigo-400 transition-all shadow-[0_0_10px_#22d3ee]" />

                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111630]/80 to-[#0c0f24]/80 p-8 shadow-2xl backdrop-blur-xl group-hover:border-cyan-500/40 transition-all space-y-6">
                      
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 px-3 py-1 text-xs font-bold text-cyan-300 uppercase tracking-wider mb-2">
                            {item.type}
                          </span>
                          <h3 className="text-3xl font-black text-white tracking-tight">{item.title}</h3>
                          <p className="text-xl font-bold text-indigo-300 mt-1">{item.company}</p>
                        </div>

                        <div className="flex flex-col items-start sm:items-end text-xs font-medium text-slate-400 gap-1.5">
                          <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                            <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <MapPin className="h-3.5 w-3.5 text-rose-400" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-base sm:text-lg leading-8 text-slate-300 font-light">
                        {item.description}
                      </p>

                      {/* Accomplishments bullets */}
                      <div className="space-y-3 rounded-2xl bg-black/40 p-6 border border-white/5">
                        <h4 className="text-sm font-bold uppercase tracking-wider text-cyan-400 flex items-center gap-2">
                          <Sparkles className="h-4 w-4" />
                          <span>Key Execution Milestones</span>
                        </h4>
                        <div className="space-y-2 pt-1">
                          {item.achievements.map((ach) => (
                            <div key={ach} className="flex items-start gap-3">
                              <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-1" />
                              <span className="text-sm text-slate-200 leading-6">{ach}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Stack Tags */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {item.techStack.map((tech) => (
                          <span key={tech} className="rounded-full bg-white/5 border border-white/10 px-3.5 py-1.5 text-xs font-semibold text-cyan-300">
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === "education" && (
              <motion.div
                key="edu"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-12"
              >
                {EDUCATION_TIMELINE.map((item, index) => (
                  <motion.div
                    key={item.degree}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative group"
                  >
                    <div className="absolute -left-[33px] sm:-left-[49px] top-4 h-5 w-5 rounded-full bg-indigo-400 border-4 border-[#070913] group-hover:scale-125 group-hover:bg-cyan-400 transition-all shadow-[0_0_10px_#818cf8]" />

                    <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#111630]/80 to-[#0c0f24]/80 p-8 shadow-2xl backdrop-blur-xl group-hover:border-indigo-500/40 transition-all space-y-6">
                      <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 px-3 py-1 text-xs font-bold text-indigo-300 uppercase tracking-wider mb-2">
                            Academic Journey
                          </span>
                          <h3 className="text-3xl font-black text-white tracking-tight">{item.degree}</h3>
                          <p className="text-xl font-bold text-cyan-300 mt-1">{item.school}</p>
                        </div>

                        <div className="flex flex-col items-start sm:items-end text-xs font-medium text-slate-400 gap-1.5">
                          <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
                            <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                            <span>{item.period}</span>
                          </div>
                          <div className="flex items-center gap-1.5 text-slate-400">
                            <MapPin className="h-3.5 w-3.5 text-rose-400" />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-2xl bg-indigo-950/40 border border-indigo-500/20 p-5 text-indigo-200 font-medium text-sm">
                        ⭐ {item.highlight}
                      </div>

                      <p className="text-base sm:text-lg leading-8 text-slate-300 font-light">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Breathtaking Accreditations Showcase Grid */}
        <div className="pt-16 border-t border-white/10 space-y-10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-3xl font-black tracking-tight text-white flex items-center gap-3">
                <Award className="h-8 w-8 text-amber-400" />
                <span>Certifications & Industry Badges</span>
              </h3>
              <p className="text-slate-400 text-sm mt-1">Verified achievements and specialized technology training programs</p>
            </div>
            <span className="rounded-full bg-white/5 border border-white/10 px-4 py-2 font-mono text-xs text-amber-400">
              {CERTIFICATIONS_LIST.length} Credentials
            </span>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CERTIFICATIONS_LIST.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, scale: 1.02 }}
                className="group relative flex items-center justify-between gap-4 rounded-2xl border border-white/10 bg-[#0f142d]/60 p-5 backdrop-blur-md transition-all hover:border-amber-500/40 hover:bg-[#0f142d]"
              >
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-black transition-colors">
                    <Award className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm group-hover:text-amber-300 transition-colors">{cert.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{cert.issuer} • {cert.year}</p>
                  </div>
                </div>

                <span className="rounded-full bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 text-[10px] font-black uppercase text-amber-400 whitespace-nowrap">
                  {cert.badge}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
