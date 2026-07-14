"use client";

import { motion } from "framer-motion";

export function ScrollIndicator() {
  return (
    <motion.div
      className="absolute bottom-10 left-1/2 flex -translate-x-1/2 flex-col items-center gap-3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2, duration: 1 }}
      aria-hidden
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-muted">
        Scroll
      </span>
      <motion.div
        className="h-14 w-px bg-gradient-to-b from-accent to-transparent"
        animate={{ scaleY: [0, 1, 0], originY: 0 }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
