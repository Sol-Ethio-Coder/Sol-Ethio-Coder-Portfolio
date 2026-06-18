import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ArrowRight, Sparkles, Rocket, Award, ShieldCheck } from "lucide-react";
import { PROFILE, ROLES_TICKER } from "../data/portfolioData";

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedRole, setDisplayedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Sophisticated typewriter animation for roles
  useEffect(() => {
    const currentFullRole = ROLES_TICKER[roleIndex];
    let typingSpeed = isDeleting ? 40 : 80;

    if (!isDeleting && displayedRole === currentFullRole) {
      typingSpeed = 2500; // Pause at full word
      const timeout = setTimeout(() => setIsDeleting(true), typingSpeed);
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayedRole === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % ROLES_TICKER.length);
      typingSpeed = 500;
    } else {
      const nextStr = isDeleting
        ? currentFullRole.substring(0, displayedRole.length - 1)
        : currentFullRole.substring(0, displayedRole.length + 1);

      const timeout = setTimeout(() => setDisplayedRole(nextStr), typingSpeed);
      return () => clearTimeout(timeout);
    }
  }, [displayedRole, isDeleting, roleIndex]);

  const handleDownloadResume = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    document.getElementById("resume")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden bg-[#070913] px-4 pb-16 pt-24 text-white sm:px-6 md:px-8 md:pb-20 md:pt-28">
      {/* Background ambient glowing mesh and animated orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-10 h-96 w-96 rounded-full bg-cyan-600/15 blur-[120px] animate-pulse" />
        <div className="absolute bottom-10 right-10 h-[450px] w-[450px] rounded-full bg-indigo-600/15 blur-[140px] animate-pulse" />
        <div className="absolute top-1/2 left-1/3 h-80 w-80 rounded-full bg-fuchsia-600/10 blur-[130px]" />
        
        {/* Subtle developer grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b12_1px,transparent_1px),linear-gradient(to_bottom,#1e293b12_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
          
          {/* Left Text content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-7 lg:col-span-7 lg:space-y-8"
          >
            {/* Status Live Tag */}
            <div className="inline-flex max-w-full items-center gap-3 rounded-full border border-cyan-500/25 bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 px-3 py-2 shadow-inner backdrop-blur-md sm:px-4">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wide text-cyan-300 sm:text-xs">
                Addis Ababa, Ethiopia | Available for Global Projects
              </span>
            </div>

            {/* Main Greeting & Ticker */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-xl font-medium text-slate-300 sm:text-2xl md:text-3xl">
                <span>Hello, I'm</span>
                <motion.span
                  animate={{ rotate: [0, 20, -10, 20, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
                  className="inline-block origin-bottom-right"
                >
                  👋
                </motion.span>
              </div>

              <h1 className="max-w-full text-5xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent min-[380px]:text-6xl sm:text-7xl xl:text-8xl">
                Solomon <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Ashagre</span>
              </h1>

              {/* Typewriter Banner */}
              <div className="flex min-h-[72px] flex-wrap items-center gap-x-2 gap-y-1 text-lg font-bold tracking-tight text-slate-300 sm:min-h-[44px] sm:text-3xl">
                <span className="text-slate-500 font-light">I am a</span>
                <span className="text-cyan-300 border-b-2 border-cyan-400/40 pb-0.5">{displayedRole}</span>
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  className="w-1 h-7 bg-cyan-400 inline-block ml-0.5"
                />
              </div>
            </div>

            {/* Immersive Bio excerpt */}
            <p className="max-w-2xl text-base leading-7 text-slate-300 sm:text-lg sm:leading-8 font-light">
              Full Stack Web Architect & founder of <span className="text-white font-semibold underline decoration-cyan-400 decoration-2">STCA</span>. I build exceptionally sleek, scalable digital experiences using modern tools like React 19, Node.js, MongoDB, and Tailwind CSS.
            </p>

            {/* Quick High-Impact Metrics */}
            <div className="grid max-w-xl grid-cols-3 gap-3 border-t border-white/10 pt-2 sm:gap-4">
              <div className="space-y-1">
                <p className="text-2xl font-black tracking-tight text-cyan-400 sm:text-3xl md:text-4xl">{PROFILE.yearsOfExperience}</p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-xs">Years Experience</p>
              </div>
              <div className="space-y-1 border-l border-white/10 pl-4">
                <p className="text-2xl font-black tracking-tight text-indigo-400 sm:text-3xl md:text-4xl">{PROFILE.totalProjects}</p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-xs">Premium Projects</p>
              </div>
              <div className="space-y-1 border-l border-white/10 pl-4">
                <p className="text-2xl font-black tracking-tight text-teal-400 sm:text-3xl md:text-4xl">{PROFILE.satisfiedClients}</p>
                <p className="text-[10px] font-medium uppercase tracking-wider text-slate-400 sm:text-xs">Client Success</p>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:flex-wrap sm:gap-4">
              <a
                href="#projects"
                className="group relative inline-flex w-full items-center justify-center gap-3 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 px-6 py-4 font-bold text-white shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95 sm:w-auto sm:px-8"
              >
                <span>Explore Premium Work</span>
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1.5" />
              </a>

              <a
                href="#resume"
                onClick={handleDownloadResume}
                className="group inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-6 py-4 font-bold text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10 hover:text-cyan-300 active:scale-95 sm:w-auto sm:px-8"
              >
                <Download className="h-5 w-5 text-cyan-400 transition-transform group-hover:-translate-y-0.5" />
                <span>View Full CV / Resume</span>
              </a>
            </div>

            {/* Quick Guarantees pills */}
            <div className="flex flex-wrap items-center gap-6 pt-2 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>High-Performance Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-cyan-400" />
                <span>Modern React & Vite Practices</span>
              </div>
            </div>
          </motion.div>

          {/* Right Floating 3D Showcase Artwork */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative flex items-center justify-center lg:col-span-5"
          >
            {/* Outer Decorative Animated Rings */}
            <div className="pointer-events-none absolute hidden h-[420px] w-[420px] rounded-full border border-cyan-500/20 bg-gradient-to-tr from-cyan-500/10 to-transparent animate-[spin_20s_linear_infinite] sm:block xl:h-[500px] xl:w-[500px]" />
            <div className="pointer-events-none absolute hidden h-[460px] w-[460px] rounded-full border border-indigo-500/20 bg-gradient-to-bl from-indigo-500/10 to-transparent animate-[spin_30s_linear_infinite_reverse] sm:block xl:h-[550px] xl:w-[550px]" />

            {/* Solomon's Premium Portrait Container */}
            <motion.div
              whileHover={{ rotateY: 10, rotateX: -10, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative group [perspective:1000px] z-10"
            >
              <div className="relative h-72 w-72 overflow-hidden rounded-[2rem] bg-gradient-to-br from-cyan-500 via-indigo-600 to-fuchsia-500 p-2 shadow-[0_20px_60px_rgba(34,211,238,0.3)] transition-all duration-500 group-hover:shadow-[0_30px_80px_rgba(99,102,241,0.5)] min-[380px]:h-80 min-[380px]:w-80 sm:h-96 sm:w-96 sm:rounded-[3rem]">
                <div className="h-full w-full rounded-[2.8rem] overflow-hidden bg-[#070913] relative">
                  <img
                    src={PROFILE.avatar}
                    alt={PROFILE.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  />
                  
                  {/* Premium gradient bottom overlay for seamless blend */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#070913] via-transparent to-transparent opacity-60" />
                </div>
              </div>

              {/* Floating Widget 1: Available For Work Badge */}
              <motion.div
                animate={{ y: [-8, 8, -8] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 left-1/2 z-20 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full border border-white/20 bg-gradient-to-r from-teal-500 to-emerald-600 px-4 py-2 text-xs font-bold text-white shadow-2xl backdrop-blur-md sm:-bottom-6 sm:gap-3 sm:px-6 sm:py-3 sm:text-sm"
              >
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-white" />
                </span>
                <span className="tracking-wide">Available for Full-time / Consults</span>
              </motion.div>

              {/* Floating Widget 2: Projects Counter card */}
              <motion.div
                animate={{ y: [6, -6, 6] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -left-2 -top-4 z-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#0f142b]/90 p-3 text-white shadow-2xl backdrop-blur-xl min-[380px]:flex sm:-left-10 sm:p-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white shadow-md">
                  <Rocket className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-xl font-black text-white">{PROFILE.totalProjects}</p>
                  <p className="text-xs text-indigo-300 font-medium">Enterprise Apps</p>
                </div>
              </motion.div>

              {/* Floating Widget 3: Educator Badge */}
              <motion.div
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                className="absolute top-2/3 -right-2 z-20 hidden items-center gap-3 rounded-2xl border border-white/10 bg-[#0f142b]/90 p-3 text-white shadow-2xl backdrop-blur-xl min-[430px]:flex sm:-right-10 sm:p-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 text-white shadow-md">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-lg font-bold text-white">STCA Founder</p>
                  <p className="text-xs text-cyan-300 font-medium">Top STEM Tutor</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
