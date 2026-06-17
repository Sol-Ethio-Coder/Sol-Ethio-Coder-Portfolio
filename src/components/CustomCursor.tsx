import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop devices where pointer is fine
    if (window.matchMedia("(pointer: coarse)").matches) {
      return;
    }
    setIsVisible(true);

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.closest("button") ||
        target.closest("a") ||
        target.dataset.cursor === "hover"
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Tiny sharp center dot */}
      <motion.div
        className="pointer-events-none fixed z-[9999] h-2.5 w-2.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]"
        animate={{
          x: mousePosition.x - 5,
          y: mousePosition.y - 5,
          scale: isHovered ? 0.4 : 1,
        }}
        transition={{ type: "spring", stiffness: 1200, damping: 50 }}
      />

      {/* Soft animated ambient follower ring */}
      <motion.div
        className="pointer-events-none fixed z-[9998] rounded-full border border-cyan-400/30 bg-cyan-500/10 backdrop-blur-[1px]"
        animate={{
          x: mousePosition.x - (isHovered ? 36 : 20),
          y: mousePosition.y - (isHovered ? 36 : 20),
          width: isHovered ? 72 : 40,
          height: isHovered ? 72 : 40,
          borderColor: isHovered ? "rgba(99, 102, 241, 0.6)" : "rgba(34, 211, 238, 0.3)",
          backgroundColor: isHovered ? "rgba(99, 102, 241, 0.15)" : "rgba(34, 211, 238, 0.1)",
        }}
        transition={{ type: "spring", stiffness: 450, damping: 28 }}
      />
    </>
  );
}
