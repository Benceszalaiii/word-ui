"use client"
import { useIsMobile } from "../../hooks/use-mobile";
import { useMousePosition } from "../../hooks/use-mouseposition";
import { motion } from "framer-motion";

export default function CursorGlow() {
  const mousePos = useMousePosition();
  const isMobile = useIsMobile();
  return (
    <div
      className={`fixed left-0 top-0 -z-10 h-screen w-screen overflow-hidden`}
    >
      <motion.div
        hidden={isMobile || (mousePos.x === 0 && mousePos.y === 0)}
        className={`bg-cursor fixed h-28 w-28 rounded-xl opacity-55 blur-2xl transition-colors duration-700`}
        animate={{ x: mousePos.x, y: mousePos.y }}
        transition={{ duration: 0.2, ease: "easeOut", stiffness: 100 }}
      />
    </div>
  );
}