import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Code2, Menu, X, Sparkles, User, Briefcase, FileText, Cpu, Wrench, Mail } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

type NavLink = {
  name: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
};

const NAV_LINKS: NavLink[] = [
  { name: "Home", href: "#home", icon: User },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Cpu },
  { name: "Services", href: "#services", icon: Wrench },
  { name: "Resume", href: "#resume", icon: FileText },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      // Determine active section
      const sections = NAV_LINKS.map((link) => link.href.slice(1));
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections.reverse()) {
        const element = document.getElementById(sectionId);
        if (element && element.offsetTop <= scrollPos) {
          setActiveSection(sectionId);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleHireMeClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.2 },
      colors: ["#22d3ee", "#6366f1", "#a855f7", "#ec4899"],
    });

    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 print:hidden">
      {/* Top Ambient Glow Bar */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-fuchsia-500" />

      <nav
        className={`transition-all duration-500 ${
          scrolled
            ? "mx-2 mt-2 max-w-7xl rounded-full border border-white/10 bg-[#070913]/85 px-3 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-md sm:mx-auto sm:px-6 md:px-8"
            : "mx-auto flex max-w-7xl items-center justify-between px-4 py-5 sm:px-6 md:px-8"
        }`}
      >
        <div className="flex items-center justify-between w-full">
          {/* Brand Logo */}
          <a
            href="#home"
            className="group flex min-w-0 items-center gap-2 text-lg font-bold tracking-tight text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 sm:gap-3 sm:text-xl"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-0.5 shadow-lg shadow-cyan-500/20 transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
              <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#070913]">
                <Code2 className="h-5 w-5 text-cyan-400 transition-colors group-hover:text-cyan-300" />
              </div>
            </div>
            <div className="flex min-w-0 flex-col">
              <span className="bg-gradient-to-r from-white via-slate-200 to-cyan-300 bg-clip-text text-transparent transition-all group-hover:from-cyan-300 group-hover:to-indigo-300">
                {PROFILE.name.split(" ")[0]}
                <span className="text-cyan-400">.</span>
                <span className="hidden text-sm font-medium text-slate-400 min-[380px]:inline">Ashagre</span>
              </span>
              <span className="max-w-32 truncate text-[9px] uppercase tracking-widest text-cyan-400/80 sm:max-w-none sm:text-[10px]">
                Sol Ethio Coder
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden items-center gap-1 bg-white/5 px-4 py-1.5 rounded-full border border-white/10 lg:flex">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.slice(1);
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-cyan-400" : "text-slate-300 hover:text-white"
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 border border-cyan-500/40"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Action Button */}
          <div className="hidden items-center gap-4 sm:flex">
            <a
              href="#contact"
              onClick={handleHireMeClick}
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 to-indigo-600 p-[1px] font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-105 active:scale-95"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-[#070913] px-5 py-2.5 text-sm transition-colors group-hover:bg-transparent">
                <Sparkles className="h-4 w-4 text-cyan-400 animate-pulse group-hover:text-white" />
                <span>Hire Solomon</span>
              </span>
            </a>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            aria-label="Toggle Navigation Menu"
            className="rounded-xl border border-white/10 bg-white/5 p-2.5 text-slate-300 backdrop-blur-md transition-colors hover:bg-white/10 hover:text-white lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Navigation Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm lg:hidden"
            />

            {/* Slide-out Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-[101] flex w-[88%] max-w-sm flex-col justify-between overflow-y-auto border-l border-white/10 bg-[#0c0f1d] p-5 shadow-2xl sm:p-6 lg:hidden"
            >
              <div>
                {/* Header inside mobile menu */}
                <div className="flex items-center justify-between border-b border-white/10 pb-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-0.5">
                      <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#070913]">
                        <Code2 className="h-5 w-5 text-cyan-400" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-white">Solomon Ashagre</h3>
                      <p className="text-xs text-cyan-400">Full Stack Expert</p>
                    </div>
                  </div>

                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    aria-label="Close menu"
                    className="rounded-xl bg-white/5 p-2 text-slate-400 transition hover:bg-white/10 hover:text-white"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Navigation Links list */}
                <div className="mt-8 flex flex-col gap-2">
                  {NAV_LINKS.map((link) => {
                    const Icon = link.icon;
                    const isActive = activeSection === link.href.slice(1);
                    return (
                      <a
                        key={link.name}
                        href={link.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-4 rounded-2xl px-5 py-4 font-medium transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-cyan-500/20 to-indigo-500/20 text-cyan-300 border border-cyan-500/30 font-semibold"
                            : "text-slate-300 hover:bg-white/5 hover:text-white"
                        }`}
                      >
                        <Icon className={`h-5 w-5 ${isActive ? "text-cyan-400" : "text-slate-400"}`} />
                        <span className="text-base">{link.name}</span>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Mobile CTA footer */}
              <div className="border-t border-white/10 pt-6">
                <a
                  href="#contact"
                  onClick={handleHireMeClick}
                  className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-cyan-500 to-indigo-600 py-4 font-semibold text-white shadow-lg shadow-cyan-500/30 transition active:scale-95"
                >
                  <Sparkles className="h-5 w-5 text-cyan-300" />
                  <span>Hire Solomon for your Project</span>
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
