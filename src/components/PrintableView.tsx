import { PROFILE, EXPERIENCE_TIMELINE, EDUCATION_TIMELINE, SKILLS, CERTIFICATIONS_LIST } from "../data/portfolioData";

export default function PrintableView() {
  return (
    <div className="hidden print:block bg-white text-black p-10 max-w-4xl mx-auto font-sans leading-relaxed">
      
      {/* Header Block */}
      <div className="border-b-2 border-slate-900 pb-6 mb-8 flex justify-between items-start">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-950">{PROFILE.name}</h1>
          <p className="text-xl font-bold text-cyan-700 mt-1">{PROFILE.role}</p>
          <p className="text-sm text-slate-600 mt-2 max-w-xl">{PROFILE.tagline}</p>
        </div>
        <div className="text-right text-xs font-medium space-y-1 text-slate-700">
          <p><strong>Email:</strong> {PROFILE.email}</p>
          <p><strong>Phone:</strong> {PROFILE.phone}</p>
          <p><strong>Location:</strong> {PROFILE.location}</p>
          <p><strong>GitHub:</strong> {PROFILE.socials.github}</p>
        </div>
      </div>

      {/* Summary */}
      <div className="mb-8">
        <h2 className="text-lg font-black tracking-wider uppercase text-cyan-800 border-b border-slate-300 pb-1 mb-3">
          Professional Profile
        </h2>
        <p className="text-sm text-slate-800 leading-6">{PROFILE.bio}</p>
      </div>

      {/* Work Experience */}
      <div className="mb-8">
        <h2 className="text-lg font-black tracking-wider uppercase text-cyan-800 border-b border-slate-300 pb-1 mb-4">
          Professional Experience
        </h2>
        <div className="space-y-6">
          {EXPERIENCE_TIMELINE.map((exp) => (
            <div key={exp.title + exp.company}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-base font-bold text-slate-950">{exp.title}</h3>
                <span className="text-xs font-semibold text-slate-600">{exp.period} | {exp.location}</span>
              </div>
              <p className="text-sm font-semibold text-cyan-800 mb-2">{exp.company}</p>
              <p className="text-xs text-slate-700 mb-2">{exp.description}</p>
              <ul className="list-disc list-inside text-xs text-slate-800 space-y-1 pl-1">
                {exp.achievements.map((ach) => (
                  <li key={ach}>{ach}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="mb-8">
        <h2 className="text-lg font-black tracking-wider uppercase text-cyan-800 border-b border-slate-300 pb-1 mb-4">
          Education
        </h2>
        <div className="space-y-4">
          {EDUCATION_TIMELINE.map((edu) => (
            <div key={edu.degree}>
              <div className="flex justify-between items-baseline mb-1">
                <h3 className="text-base font-bold text-slate-950">{edu.degree}</h3>
                <span className="text-xs font-semibold text-slate-600">{edu.period} | {edu.location}</span>
              </div>
              <p className="text-xs font-semibold text-cyan-800">{edu.school}</p>
              <p className="text-xs text-slate-700 mt-1">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Skills Grouping */}
      <div className="mb-8">
        <h2 className="text-lg font-black tracking-wider uppercase text-cyan-800 border-b border-slate-300 pb-1 mb-4">
          Technical Skills
        </h2>
        <div className="grid grid-cols-2 gap-4 text-xs">
          <div>
            <p className="font-bold text-slate-950 mb-1">Frontend Development:</p>
            <p className="text-slate-700">
              {SKILLS.filter((s) => s.category === "Frontend").map((s) => s.name).join(", ")}
            </p>
          </div>
          <div>
            <p className="font-bold text-slate-950 mb-1">Backend & Databases:</p>
            <p className="text-slate-700">
              {SKILLS.filter((s) => s.category === "Backend" || s.category === "Database").map((s) => s.name).join(", ")}
            </p>
          </div>
          <div>
            <p className="font-bold text-slate-950 mb-1">Tools & Deployment:</p>
            <p className="text-slate-700">
              {SKILLS.filter((s) => s.category === "Tools & Cloud").map((s) => s.name).join(", ")}
            </p>
          </div>
          <div>
            <p className="font-bold text-slate-950 mb-1">Consulting & CMS:</p>
            <p className="text-slate-700">
              {SKILLS.filter((s) => s.category === "AI & Others").map((s) => s.name).join(", ")}
            </p>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div>
        <h2 className="text-lg font-black tracking-wider uppercase text-cyan-800 border-b border-slate-300 pb-1 mb-3">
          Certifications & Accreditations
        </h2>
        <div className="grid grid-cols-2 gap-2 text-xs text-slate-800">
          {CERTIFICATIONS_LIST.map((c) => (
            <div key={c.title}>• {c.title} ({c.issuer}, {c.year})</div>
          ))}
        </div>
      </div>

      <div className="mt-12 pt-4 border-t border-slate-300 text-center text-[10px] text-slate-500">
        References, GitHub code repositories, and complete interactive web deliverables available at https://solomon-ashagre-portfolio.netlify.app/
      </div>

    </div>
  );
}
