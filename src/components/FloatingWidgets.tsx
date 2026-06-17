import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";
import { PROFILE } from "../data/portfolioData";

export default function FloatingWidgets() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 z-[90] flex flex-col items-center gap-3 print:hidden">
      
      {/* Immersive Telegram Quick Floating Pill */}
      <motion.a
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1, rotate: -6 }}
        whileTap={{ scale: 0.95 }}
        href={PROFILE.socials.telegram}
        target="_blank"
        rel="noreferrer"
        className="group flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-gradient-to-tr from-cyan-500 to-indigo-600 text-white shadow-[0_10px_30px_rgba(34,211,238,0.4)] transition-all"
        aria-label="Direct Telegram Chat"
      >
        <MessageCircle className="h-6 w-6 fill-white text-cyan-500" />
      </motion.a>

      {/* Back to Top Trigger */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 20 }}
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToTop}
            className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full border border-white/20 bg-[#0f142d]/90 text-white backdrop-blur-md shadow-2xl transition-colors hover:border-cyan-400 hover:text-cyan-300"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
      
    </div>
  );
}
