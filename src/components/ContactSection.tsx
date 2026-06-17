import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { Mail, MapPin, Send, MessageSquare, CheckCircle2, Sparkles, ArrowUpRight, Loader2 } from "lucide-react";
import { PROFILE } from "../data/portfolioData";
import { GOOGLE_SHEETS_WEB_APP_URL, ProjectLeadSubmission, submitLeadToGoogleSheets } from "../utils/googleSheets";

export default function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [selectedBudget, setSelectedBudget] = useState("$1,000 - $3,000");
  const [selectedProjectType, setSelectedProjectType] = useState("Full Stack Web App");
  const [selectedTimeline, setSelectedTimeline] = useState("2 - 4 weeks");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");

  const budgetOptions = ["< $1,000", "$1,000 - $3,000", "$3,000 - $10,000", "$10,000+"];
  const projectTypes = ["Full Stack Web App", "Portfolio / Business Site", "EdTech Platform", "Technical Consulting"];
  const timelineOptions = ["1 - 2 weeks", "2 - 4 weeks", "1 - 3 months", "Flexible"];

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    const formData = new FormData(e.currentTarget);
    const submission: ProjectLeadSubmission = {
      name: String(formData.get("name") || "Valued Partner"),
      email: String(formData.get("email") || ""),
      subject: String(formData.get("subject") || "New Development Project"),
      budget: selectedBudget,
      projectType: selectedProjectType,
      timeline: selectedTimeline,
      message: String(formData.get("message") || ""),
      source: "Sol Ethio Coder Portfolio",
      submittedAt: new Date().toISOString(),
    };

    const result = await submitLeadToGoogleSheets(submission);

    // Trigger phenomenal confetti celebration
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.6 },
      colors: ["#22d3ee", "#6366f1", "#10b981", "#f59e0b", "#ec4899"],
    });

    setSubmitStatus(result.message);
    setFormSubmitted(true);
    setIsSubmitting(false);

    // Format professional Mailto fallback/dispatch for true real delivery
    const formattedBody = `Hello Solomon,\n\n${submission.message}\n\nProject Type: ${selectedProjectType}\nProject Estimated Budget: ${selectedBudget}\nTimeline: ${selectedTimeline}\n\nBest regards,\n${submission.name}\nContact Email: ${submission.email}`;
    const mailtoUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(submission.subject)}&body=${encodeURIComponent(formattedBody)}`;

    if (!GOOGLE_SHEETS_WEB_APP_URL) {
      // When no sheet URL is configured, still give Solomon a reliable email fallback.
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 1200);
    }
  };

  return (
    <section id="contact" className="relative min-h-screen bg-[#070913] py-28 text-white px-6 md:px-8 print:hidden">
      {/* Immersive ambient glowing elements */}
      <div className="absolute top-1/4 left-0 h-[600px] w-[600px] rounded-full bg-cyan-900/10 blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-0 h-[600px] w-[600px] rounded-full bg-indigo-900/10 blur-[160px] pointer-events-none" />

      <div className="mx-auto max-w-7xl relative z-10 space-y-16">
        
        {/* Superior Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center space-y-4"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-300">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>Initiate a Partnership</span>
          </div>

          <h2 className="text-4xl font-black tracking-tight sm:text-6xl bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
            Let's Bring Your <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">Ideas to Life</span>
          </h2>

          <p className="text-lg leading-8 text-slate-400 font-light max-w-2xl mx-auto">
            Whether you require a high-velocity full stack application, custom online STEM academy platform, or private technical consulting, reach out directly below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          
          {/* Left Direct Contact Quick Pills */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col justify-between rounded-3xl border border-white/10 bg-gradient-to-b from-[#111630]/90 to-[#0b0e22]/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl space-y-8"
          >
            <div className="space-y-8">
              <div className="space-y-3">
                <h3 className="text-3xl font-black tracking-tight text-white">Direct Channels</h3>
                <p className="text-slate-300 font-light text-base leading-7">
                  I am highly active across these professional networks and typically respond within 2 hours.
                </p>
              </div>

              {/* Direct clickable contact cards */}
              <div className="space-y-4">
                
                {/* Email Channel */}
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-cyan-400 hover:bg-white/10"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 group-hover:bg-cyan-500 group-hover:text-black transition-colors">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Electronic Mail</p>
                      <p className="break-all text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 transition-colors">{PROFILE.email}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-cyan-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Telegram Channel */}
                <a
                  href={PROFILE.socials.telegram}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-indigo-400 hover:bg-white/10"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                      <TelegramIcon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Instant Telegram Chat</p>
                      <p className="text-sm sm:text-base font-bold text-white group-hover:text-indigo-300 transition-colors">@Sol_Ethio_Coder</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-indigo-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* WhatsApp Channel */}
                <a
                  href={PROFILE.socials.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 p-4 transition-all duration-300 hover:border-emerald-400 hover:bg-white/10"
                >
                  <div className="flex min-w-0 items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 group-hover:bg-emerald-500 group-hover:text-black transition-colors">
                      <WhatsAppIcon className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-bold uppercase tracking-wider text-slate-400">WhatsApp / Phone</p>
                      <p className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 transition-colors">{PROFILE.phone}</p>
                    </div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-slate-400 group-hover:text-emerald-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>

                {/* Location Box */}
                <div className="flex items-center gap-4 rounded-2xl border border-white/5 bg-black/40 p-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-400 shrink-0">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-slate-400">Operating Headquarters</p>
                    <p className="text-sm sm:text-base font-bold text-white">{PROFILE.location}</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Satisfaction guarantee notice */}
            <div className="rounded-2xl bg-gradient-to-r from-cyan-500/10 to-indigo-500/10 border border-cyan-500/20 p-5 flex items-center gap-3">
              <Sparkles className="h-6 w-6 text-cyan-400 shrink-0" />
              <p className="text-xs leading-5 text-slate-300">
                Guaranteed high-fidelity developer handoffs, uncompromised web performance, and pristine code maintainability.
              </p>
            </div>
          </motion.div>

          {/* Right Fully Interactive Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c1025]/90 p-4 shadow-2xl backdrop-blur-xl sm:p-8 lg:p-12">
              
              {/* Form title */}
              <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="space-y-2">
                  <h3 className="text-2xl font-black tracking-tight text-white sm:text-3xl">Project Specifications Form</h3>
                  <p className="max-w-xl text-sm leading-6 text-slate-400">Fill in your requirements. The form is mobile-first and Google Sheets ready for automatic lead tracking.</p>
                </div>
                <div className={`inline-flex w-fit items-center gap-2 rounded-full border px-3 py-1.5 text-[11px] font-black uppercase tracking-wider ${GOOGLE_SHEETS_WEB_APP_URL ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-300" : "border-amber-500/30 bg-amber-500/10 text-amber-300"}`}>
                  <SheetsIcon className="h-4 w-4" />
                  <span>{GOOGLE_SHEETS_WEB_APP_URL ? "Google Sheets Connected" : "Sheets URL Needed"}</span>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {formSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center py-16 text-center space-y-6"
                  >
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 shadow-[0_0_30px_rgba(16,185,129,0.3)] animate-bounce">
                      <CheckCircle2 className="h-14 w-14" />
                    </div>
                    <div className="space-y-2">
                      <h4 className="text-3xl font-black text-white tracking-tight">Message Dispatched Flawlessly!</h4>
                      <p className="text-slate-300 max-w-md mx-auto">
                        {submitStatus || "Thank you for reaching out. Your project specifications were received successfully."}
                      </p>
                    </div>

                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setSubmitStatus("");
                      }}
                      className="rounded-full border border-white/20 bg-white/5 px-8 py-3.5 text-sm font-bold text-white hover:bg-white/10 transition-colors"
                    >
                      Send Another Transmission
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleFormSubmit} className="space-y-6">
                    
                    {/* Grid Inputs */}
                    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                      
                      {/* Name input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Your Name *</label>
                        <input
                          name="name"
                          required
                          placeholder="e.g. John Doe"
                          className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-base text-white placeholder-slate-500 outline-none ring-cyan-400 transition focus:border-cyan-400 focus:ring-2"
                        />
                      </div>

                      {/* Email input */}
                      <div className="space-y-2">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Contact Email *</label>
                        <input
                          type="email"
                          name="email"
                          required
                          placeholder="e.g. name@company.com"
                          className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-base text-white placeholder-slate-500 outline-none ring-cyan-400 transition focus:border-cyan-400 focus:ring-2"
                        />
                      </div>

                    </div>

                    {/* Subject input */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Project Inquiry Subject *</label>
                      <input
                        name="subject"
                        required
                        placeholder="e.g. Custom React EdTech Application Build"
                        className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-base text-white placeholder-slate-500 outline-none ring-cyan-400 transition focus:border-cyan-400 focus:ring-2"
                      />
                    </div>

                    {/* Project type and timeline selectors */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                      <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Project Type</label>
                        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
                          {projectTypes.map((type) => (
                            <button
                              type="button"
                              key={type}
                              onClick={() => setSelectedProjectType(type)}
                              className={`rounded-2xl border px-3 py-3 text-left text-xs font-bold transition-all ${
                                selectedProjectType === type
                                  ? "border-transparent bg-gradient-to-r from-cyan-500 to-indigo-600 text-white shadow-lg shadow-cyan-500/25"
                                  : "border-white/10 bg-black/40 text-slate-400 hover:border-white/30 hover:text-white"
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Preferred Timeline</label>
                        <div className="grid grid-cols-2 gap-2">
                          {timelineOptions.map((timeline) => (
                            <button
                              type="button"
                              key={timeline}
                              onClick={() => setSelectedTimeline(timeline)}
                              className={`rounded-2xl border px-3 py-3 text-xs font-bold transition-all ${
                                selectedTimeline === timeline
                                  ? "border-transparent bg-gradient-to-r from-teal-400 to-cyan-500 text-black shadow-lg shadow-cyan-500/25"
                                  : "border-white/10 bg-black/40 text-slate-400 hover:border-white/30 hover:text-white"
                              }`}
                            >
                              {timeline}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Immersive Budget Selector Suite */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Estimated Project Budget Block</label>
                      <div className="grid grid-cols-2 gap-3 xl:grid-cols-4">
                        {budgetOptions.map((budget) => (
                          <button
                            type="button"
                            key={budget}
                            onClick={() => setSelectedBudget(budget)}
                            className={`rounded-2xl border px-2 py-3 text-xs font-bold transition-all ${
                              selectedBudget === budget
                                ? "bg-gradient-to-r from-cyan-500 to-indigo-600 text-white border-transparent shadow-lg shadow-cyan-500/25 scale-105"
                                : "border-white/10 bg-black/40 text-slate-400 hover:border-white/30 hover:text-white"
                            }`}
                          >
                            {budget}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Rich Message textarea */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-wider text-slate-300">Project Details & Architecture Vision *</label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        placeholder="Please describe your key objectives, required tech stack (e.g. MERN, Stripe), timeline, or target audience..."
                        className="min-h-40 w-full resize-y rounded-2xl border border-white/10 bg-black/50 p-5 text-base text-white placeholder-slate-500 outline-none ring-cyan-400 transition focus:border-cyan-400 focus:ring-2"
                      />
                    </div>

                    {/* Transmission CTA */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="group flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-cyan-500 via-teal-400 to-indigo-600 px-5 py-5 text-center text-sm font-black text-black shadow-xl shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-98 disabled:cursor-not-allowed disabled:opacity-70 sm:text-base"
                    >
                      {isSubmitting ? <Loader2 className="h-5 w-5 animate-spin" /> : <Send className="h-5 w-5 transition-transform group-hover:translate-x-1" />}
                      <span>{isSubmitting ? "Saving to Google Sheets..." : "Transmit Project Transmission"}</span>
                    </button>

                    <p className="text-center text-[11px] leading-5 text-slate-500">
                      {GOOGLE_SHEETS_WEB_APP_URL
                        ? "Submission saves to Google Sheets with a local browser backup."
                        : "Until your Google Apps Script URL is added, submissions are locally backed up and opened in email."}
                    </p>

                  </form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function SheetsIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <path d="M14 2v6h6" />
      <path d="M8 13h8" />
      <path d="M8 17h8" />
      <path d="M8 9h2" />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.211-1.446 1.394c-.14.14-.26.26-.535.26l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.762 1.032z" />
    </svg>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.579-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}
