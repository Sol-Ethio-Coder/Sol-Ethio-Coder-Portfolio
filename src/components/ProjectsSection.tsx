import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sparkles, ExternalLink, Eye, Layers, Code, Award, Calendar } from "lucide-react";
import { PROJECTS, Project } from "../data/portfolioData";
import ProjectModal from "./ProjectModal";

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "fullstack" | "frontend" | "featured">("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      let matchesFilter = true;
      if (filter === "fullstack") matchesFilter = project.category === "fullstack";
      if (filter === "frontend") matchesFilter = project.category === "frontend";
      if (filter === "featured") matchesFilter = project.featured;

      const matchesSearch = `${project.title} ${project.subtitle} ${project.description} ${project.technologies.join(" ")}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  const categories = [
    { id: "all", label: "All Projects", count: PROJECTS.length, icon: Layers },
    { id: "featured", label: "⭐ Top Featured", count: PROJECTS.filter((p) => p.featured).length, icon: Award },
    { id: "fullstack", label: "Full Stack Apps", count: PROJECTS.filter((p) => p.category === "fullstack").length, icon: Code },
    { id: "frontend", label: "Frontend UI", count: PROJECTS.filter((p) => p.category === "frontend").length, icon: Sparkles },
  ] as const;

  return (
    <section id="projects" className="relative min-h-screen bg-[#070913] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28 print:hidden">
      {/* Background glowing ambient elements */}
      <div className="absolute top-1/3 right-0 h-[600px] w-[600px] rounded-full bg-indigo-900/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 h-[500px] w-[500px] rounded-full bg-cyan-900/10 blur-[150px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10">
        
        {/* Superior Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Exemplary Deliverables</span>
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Selected <span className="bg-gradient-to-r from-cyan-400 to-indigo-400 bg-clip-text text-transparent">Masterpieces</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 font-light">
            Explore premium software architecture, high-velocity educational web apps, full-stack client managers, and visually immersive CSS/React experiments.
          </p>
        </motion.div>

        {/* Powerful Interactive Filtering & Search Suite */}
        <div className="mb-10 mt-10 grid gap-4 rounded-3xl border border-white/10 bg-[#0f142d]/80 p-4 shadow-2xl backdrop-blur-xl sm:mb-12 sm:mt-16 sm:p-6 lg:grid-cols-[1fr_auto]">
          
          {/* Realtime Search Bar */}
          <div className="relative flex items-center">
            <Search className="absolute left-5 h-5 w-5 text-cyan-400" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Fuzzy search by title, stack (e.g. Stripe, React), or feature..."
              className="w-full rounded-2xl border border-white/10 bg-black/40 py-4 pl-12 pr-16 text-sm text-white placeholder-slate-400 outline-none ring-cyan-400 transition focus:border-cyan-400 focus:ring-2 sm:pl-14 sm:pr-6"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-5 text-xs font-bold text-slate-400 hover:text-white uppercase tracking-wider bg-white/10 px-2.5 py-1 rounded-lg"
              >
                Clear
              </button>
            )}
          </div>

          {/* Superior Filter Pills */}
          <div className="-mx-1 flex snap-x items-center gap-2 overflow-x-auto px-1 pb-2 lg:flex-wrap lg:pb-0">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = filter === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setFilter(cat.id)}
                  className={`group relative flex snap-start items-center gap-2 rounded-2xl px-4 py-3 text-xs font-semibold transition-all duration-300 whitespace-nowrap sm:gap-2.5 sm:px-5 sm:py-4 sm:text-sm ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25 scale-105"
                      : "border border-white/5 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${isActive ? "text-white animate-spin" : "text-cyan-400 group-hover:scale-110"} transition-transform`} />
                  <span>{cat.label}</span>
                  <span className={`rounded-full px-2 py-0.5 text-xs font-bold ${isActive ? "bg-black/30 text-white" : "bg-white/10 text-slate-400"}`}>
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Empty State / Not found handler */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="rounded-3xl border border-white/10 bg-[#0f142d]/50 p-16 text-center space-y-4 max-w-lg mx-auto"
          >
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="text-2xl font-bold text-white">No exact matching projects</h3>
            <p className="text-sm text-slate-400">
              Could not find any deliverable matching "<span className="text-cyan-300">{searchQuery}</span>" in this filter category. Try clearing your parameters.
            </p>
            <button
              onClick={() => {
                setFilter("all");
                setSearchQuery("");
              }}
              className="rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-3 text-sm font-bold text-white transition hover:scale-105"
            >
              Reset Search Parameters
            </button>
          </motion.div>
        )}

        {/* Animated Project Cards Grid */}
        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.article
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                whileHover={{ y: -10 }}
                key={project.id}
                className="group relative flex flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-b from-[#111630]/90 to-[#0b0e20]/90 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/50 hover:shadow-[0_20px_60px_rgba(34,211,238,0.2)] sm:rounded-[2.5rem]"
              >
                {/* Visual Image container with transformations */}
                <div className="relative overflow-hidden aspect-[16/10] bg-slate-950">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Premium overlay gradients */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0b0e20] via-transparent to-transparent opacity-80" />
                  
                  {/* Hover interactive trigger overlay */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-100 backdrop-blur-sm transition-all duration-300 sm:opacity-0 sm:group-hover:opacity-100 sm:gap-4">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="flex items-center gap-2 rounded-full bg-cyan-500 px-4 py-2.5 text-sm font-bold text-black shadow-xl transition-transform hover:scale-105 sm:px-6 sm:py-3 sm:text-base"
                    >
                      <Eye className="h-4 w-4" />
                      <span>Deep Dive</span>
                    </button>
                    
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 border border-white/40 text-white backdrop-blur-md transition-transform hover:scale-105"
                      aria-label="Open Live Application"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>

                  {/* Corner Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
                    <span className={`rounded-full px-3 py-1 text-[11px] font-black tracking-wider text-white uppercase bg-gradient-to-r ${project.color} shadow-lg`}>
                      {project.category === "fullstack" ? "Full Stack" : "Frontend"}
                    </span>
                    {project.featured && (
                      <span className="rounded-full bg-amber-500/90 px-3 py-1 text-[11px] font-black tracking-wider text-black uppercase shadow-lg">
                        Featured
                      </span>
                    )}
                  </div>
                </div>

                {/* Bottom interactive card storytelling */}
                <div className="flex flex-1 flex-col justify-between space-y-5 p-5 sm:space-y-6 sm:p-8">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-xs text-cyan-400 font-medium">
                      <Calendar className="h-3.5 w-3.5" />
                      <span>{project.year}</span>
                    </div>

                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="cursor-pointer text-xl font-black tracking-tight text-white transition-colors group-hover:text-cyan-300 sm:text-2xl"
                    >
                      {project.title}
                    </h3>

                    <p className="text-sm leading-6 text-slate-300 font-light line-clamp-3">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech stack tags */}
                  <div className="space-y-4 pt-4 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
                        <span key={tech} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 transition-colors group-hover:border-cyan-500/30">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="rounded-full bg-cyan-500/10 px-2.5 py-1 text-xs font-bold text-cyan-300">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>

                    {/* Footer direct action links */}
                    <div className="flex flex-col gap-3 pt-2 min-[420px]:flex-row min-[420px]:items-center min-[420px]:justify-between">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <span>Project Specifications</span>
                        <motion.span animate={{ x: [0, 4, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                          →
                        </motion.span>
                      </button>

                      <a
                        href={project.live}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-slate-300 hover:text-white transition-colors"
                      >
                        <span>Demo</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Accent top glow light */}
                <div className={`absolute top-0 inset-x-0 h-1 bg-gradient-to-r ${project.color} opacity-40 group-hover:opacity-100 transition-opacity`} />
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Invoked Popup Detail Window */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
