import { motion } from "framer-motion";
import { Sparkles, Layers, GraduationCap, Globe, Cpu, CheckCircle2, ArrowRight } from "lucide-react";
import { SERVICES_LIST, Service } from "../data/portfolioData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Layers,
  GraduationCap,
  Globe,
  Cpu,
};

export default function ServicesSection() {
  const handleServiceSelect = (serviceTitle: string) => {
    const subjectInput = document.querySelector<HTMLInputElement>('input[name="subject"]');
    if (subjectInput) {
      subjectInput.value = `Inquiry: ${serviceTitle}`;
    }
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="services" className="relative min-h-screen bg-[#070913] px-4 py-20 text-white sm:px-6 md:px-8 md:py-28 print:hidden">
      {/* Dynamic ambient glowing background elements */}
      <div className="absolute top-1/3 left-10 h-[550px] w-[550px] rounded-full bg-fuchsia-900/10 blur-[160px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 h-[500px] w-[500px] rounded-full bg-cyan-900/10 blur-[150px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl space-y-10 sm:space-y-16">
        
        {/* Superior Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-rose-500/30 bg-rose-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-rose-300">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Professional Offerings</span>
          </div>

          <h2 className="text-3xl font-black tracking-tight sm:text-5xl lg:text-6xl bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Solutions Tailored for <span className="bg-gradient-to-r from-rose-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">Your Success</span>
          </h2>

          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-400 sm:text-lg sm:leading-8 font-light">
            Combining production-tested React frontend aesthetics, scalable MERN backends, and expert educational coaching to bring your most ambitious concepts to life.
          </p>
        </motion.div>

        {/* Immersive Services Cards Suite */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {SERVICES_LIST.map((srv: Service, index) => {
            const IconComponent = iconMap[srv.iconName] || Layers;
            return (
              <motion.div
                key={srv.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group relative flex flex-col justify-between rounded-[2.5rem] border ${
                  srv.popular
                    ? "border-cyan-500/50 bg-gradient-to-b from-[#12193b] to-[#0a0f26] shadow-[0_20px_60px_rgba(34,211,238,0.2)]"
                    : "border-white/10 bg-gradient-to-b from-[#111630]/80 to-[#0b0e22]/80 shadow-2xl"
                } p-5 sm:p-8 lg:p-12 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400`}
              >
                {/* Popular Accent Glow Banner */}
                {srv.popular && (
                  <div className="absolute -top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-indigo-500 px-3 py-1.5 text-[10px] font-black uppercase tracking-wider text-black shadow-lg sm:right-8 sm:px-4 sm:text-xs">
                    <Sparkles className="h-3.5 w-3.5 fill-black" />
                    <span>Most Requested Solution</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Top visual header */}
                  <div className="flex items-center justify-between">
                    <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                      srv.popular
                        ? "bg-gradient-to-br from-cyan-400 to-indigo-600 text-black shadow-lg shadow-cyan-400/30"
                        : "bg-white/5 border border-white/10 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black"
                    } transition-all duration-300`}>
                      <IconComponent className="h-8 w-8" />
                    </div>

                    <span className="font-mono text-2xl font-black text-white/20 group-hover:text-cyan-400/40 transition-colors">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Narrative copy */}
                  <div className="space-y-3">
                    <h3 className="text-2xl font-black tracking-tight text-white transition-colors group-hover:text-cyan-300 sm:text-3xl">
                      {srv.title}
                    </h3>
                    <p className="text-sm leading-7 text-slate-300 sm:text-base lg:text-lg lg:leading-8 font-light">
                      {srv.description}
                    </p>
                  </div>

                  {/* Custom Deliverables Checklist */}
                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-cyan-400">Key Execution Deliverables</h4>
                    <div className="grid grid-cols-1 gap-2.5 pt-1">
                      {srv.deliverables.map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                          <span className="text-sm text-slate-200 font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Direct action button */}
                <div className="pt-8 mt-8 border-t border-white/10">
                  <button
                    onClick={() => handleServiceSelect(srv.title)}
                    className={`group/btn flex w-full items-center justify-center gap-3 rounded-full px-4 py-4 text-sm font-bold transition-all sm:text-base ${
                      srv.popular
                        ? "bg-gradient-to-r from-cyan-400 to-indigo-600 text-white shadow-xl shadow-cyan-500/25 hover:scale-105 active:scale-95"
                        : "bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-300"
                    }`}
                  >
                    <span>Request this Deliverable</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>

                {/* Top glow accent strip */}
                <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-t-full" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
