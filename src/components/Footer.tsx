import { Code2, Heart } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#04060d] py-16 text-slate-400 px-6 md:px-8 print:hidden">
      <div className="mx-auto max-w-7xl flex flex-col items-center justify-between gap-8 md:flex-row">
        
        {/* Left Branding */}
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-0.5 text-white">
            <div className="flex h-full w-full items-center justify-center rounded-[10px] bg-[#070913]">
              <Code2 className="h-5 w-5 text-cyan-400" />
            </div>
          </div>
          <div>
            <p className="font-bold text-white tracking-tight">Solomon Ashagre</p>
            <p className="text-xs text-cyan-400 font-mono">Full Stack Engineer • STCA Founder</p>
          </div>
        </div>

        {/* Center message */}
        <div className="flex items-center gap-2 text-sm">
          <span>Engineered with professional precision &</span>
          <Heart className="h-4 w-4 text-rose-500 fill-rose-500 animate-pulse" />
          <span>in Addis Ababa</span>
        </div>

        {/* Right copyright & Quick links */}
        <div className="flex flex-wrap items-center gap-6 text-xs font-medium text-slate-500">
          <a href={PROFILE.socials.github} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
          <a href={PROFILE.socials.linkedin} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
          <a href={PROFILE.socials.telegram} target="_blank" rel="noreferrer" className="hover:text-cyan-400 transition-colors">Telegram</a>
          <span>© {new Date().getFullYear()} Sol Ethio Coder. All rights reserved.</span>
        </div>

      </div>
    </footer>
  );
}
