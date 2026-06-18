import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Atom, Code2, FileCode, Palette, Layout, Server, Cpu, Network, Terminal, Database, Table, Flame, GitBranch, Zap, Cloud, Wrench, Bot, PanelsTopLeft, GraduationCap, Search, CheckCircle2 } from "lucide-react";
import { SKILLS } from "../data/portfolioData";

function FigmaCustomIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5A3.5 3.5 0 1 1 12 9h-3.5V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  );
}

// Icon lookup dictionary for strict visual excellence
const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Atom,
  Code2,
  FileCode,
  Palette,
  Layout,
  Sparkles,
  Server,
  Cpu,
  Network,
  Terminal,
  Database,
  Table,
  Flame,
  GitBranch,
  Zap,
  Cloud,
  Wrench,
  Figma: FigmaCustomIcon,
  Bot,
  PanelsTopLeft,
  GraduationCap,
};

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All Capabilities");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categories = ["All Capabilities", "Frontend", "Backend", "Database", "Tools & Cloud", "AI & Others"] as const;

  const filteredSkills = useMemo(() => {
    return SKILLS.filter((skill) => {
      const categoryMatch = activeCategory === "All Capabilities" || skill.category === activeCategory;
      const searchMatch = `${skill.name} ${skill.description} ${skill.mastery}`
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      return categoryMatch && searchMatch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="relative min-h-screen bg-[#070913] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28 print:hidden">
      {/* Immersive background glowing elements */}
      <div className="absolute top-1/2 left-0 h-[500px] w-[500px] rounded-full bg-cyan-900/10 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 h-[450px] w-[450px] rounded-full bg-fuchsia-900/10 blur-[160px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-10 sm:space-y-16">
        
        {/* Superior Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-indigo-300">
            <Cpu className="h-3.5 w-3.5" />
            <span>Technical Foundations</span>
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            The Premium <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 bg-clip-text text-transparent">Tech Stack</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 font-light">
            A meticulously curated toolkit honed through enterprise software internships, computing science instruction, and production-grade client web products.
          </p>
        </motion.div>

        {/* Interactive Filtering Suite & Search */}
        <div className="grid items-center gap-4 rounded-3xl border border-white/10 bg-[#0f142d]/80 p-4 shadow-2xl backdrop-blur-xl sm:p-6 lg:grid-cols-[1fr_auto]">
          
          {/* Skill realtime search */}
          <div className="relative flex items-center">
            <Search className="absolute left-5 h-5 w-5 text-cyan-400" />
            <input
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies, concepts (e.g. Hooks, REST, Aggregation)..."
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

          {/* Superior Interactive Tab Bar */}
          <div className="-mx-1 flex snap-x items-center gap-2 overflow-x-auto px-1 pb-2 lg:flex-wrap lg:pb-0">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative snap-start whitespace-nowrap rounded-2xl px-4 py-3 text-xs font-semibold transition-all duration-300 sm:px-5 sm:py-3.5 sm:text-sm ${
                    isActive
                      ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/30 scale-105"
                      : "border border-white/5 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>

        </div>

        {/* Not Found empty condition */}
        {filteredSkills.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mx-auto max-w-lg space-y-4 rounded-3xl border border-white/10 bg-[#0f142d]/40 p-8 text-center sm:p-16">
            <Cpu className="mx-auto h-12 w-12 text-slate-500 animate-bounce" />
            <h3 className="text-xl font-bold text-white">No capabilities found</h3>
            <p className="text-sm text-slate-400">
              No matching tech skills found for your query in this category. Try resetting your filter.
            </p>
          </motion.div>
        )}

        {/* High Definition Interactive Skills Cards Grid */}
        <motion.div layout className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <AnimatePresence>
            {filteredSkills.map((skill, index) => {
              const DynamicIcon = iconMap[skill.iconName] || Code2;
              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.03 }}
                  whileHover={{ y: -6, scale: 1.02 }}
                  key={skill.name}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#11172f]/90 to-[#0a0d1e]/90 p-5 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)] sm:p-7"
                >
                  {/* Glowing background corner accent */}
                  <div className="absolute -right-10 -top-10 h-28 w-28 rounded-full bg-cyan-500 opacity-10 blur-xl group-hover:opacity-30 group-hover:bg-indigo-500 transition-all" />

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 to-indigo-500/20 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors shadow-lg">
                        <DynamicIcon className="h-7 w-7 transition-transform group-hover:scale-110" />
                      </div>
                      
                      <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-[11px] font-bold text-emerald-300 uppercase tracking-wider">
                        <CheckCircle2 className="h-3 w-3" />
                        <span>{skill.mastery}</span>
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-black tracking-tight text-white sm:text-2xl">{skill.name}</h3>
                      <p className="mt-2 text-xs font-medium uppercase tracking-wider text-indigo-300">{skill.category}</p>
                      <p className="mt-3 text-sm leading-6 text-slate-300 font-light">{skill.description}</p>
                    </div>
                  </div>

                  {/* Interactive Mastery Indicator Bar */}
                  <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <span className="text-slate-400 uppercase tracking-wider">Mastery Benchmark</span>
                      <span className="text-cyan-400 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full overflow-hidden rounded-full bg-white/5 border border-white/10 p-0.5">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: "easeOut", delay: index * 0.05 }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-500 shadow-[0_0_12px_#22d3ee]"
                      />
                    </div>
                  </div>

                  {/* Top line accent border */}
                  <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-cyan-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
