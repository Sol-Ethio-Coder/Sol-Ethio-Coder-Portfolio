import { motion } from "framer-motion";
import { Rocket, Users, Award, Zap, CheckCircle2 } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function StatsBanner() {
  const stats = [
    {
      icon: Rocket,
      value: PROFILE.totalProjects,
      label: "Delivered Web Projects",
      subtext: "100% production ready & optimized",
      gradient: "from-cyan-500 to-blue-600",
    },
    {
      icon: Award,
      value: PROFILE.yearsOfExperience,
      label: "Years of Expert Experience",
      subtext: "Continuous professional learning",
      gradient: "from-indigo-500 to-purple-600",
    },
    {
      icon: Users,
      value: PROFILE.satisfiedClients,
      label: "Client Satisfaction",
      subtext: "Proven freelance success",
      gradient: "from-teal-500 to-emerald-600",
    },
    {
      icon: Zap,
      value: PROFILE.certificationsCount,
      label: "Technical Accreditations",
      subtext: "Verified industry credentials",
      gradient: "from-fuchsia-500 to-pink-600",
    },
  ];

  return (
    <section className="relative z-20 -mt-10 px-6 md:px-8 print:hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-[#11172f]/90 to-[#090d1f]/90 p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)]"
              >
                {/* Corner background ambient glow */}
                <div className={`absolute -right-12 -top-12 h-32 w-32 rounded-full bg-gradient-to-br ${stat.gradient} opacity-20 blur-2xl group-hover:opacity-40 transition-opacity`} />

                <div className="flex items-center justify-between">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${stat.gradient} text-white shadow-lg`}>
                    <Icon className="h-8 w-8 transition-transform group-hover:scale-110" />
                  </div>
                  <div className="flex items-center gap-1 text-emerald-400">
                    <CheckCircle2 className="h-4 w-4" />
                    <span className="text-xs font-bold uppercase tracking-wider">Verified</span>
                  </div>
                </div>

                <div className="mt-6 space-y-1">
                  <h3 className="text-4xl sm:text-5xl font-black tracking-tight text-white">{stat.value}</h3>
                  <p className="text-lg font-bold text-slate-200">{stat.label}</p>
                  <p className="text-xs text-slate-400 font-medium">{stat.subtext}</p>
                </div>

                {/* Bottom interactive gradient bar */}
                <div className={`absolute bottom-0 inset-x-0 h-1 bg-gradient-to-r ${stat.gradient} opacity-0 group-hover:opacity-100 transition-opacity`} />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
