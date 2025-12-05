"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function Logo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center mb-8"
    >
      <motion.div
        animate={{
          boxShadow: [
            "0 0 20px rgba(59, 130, 246, 0.3)",
            "0 0 40px rgba(59, 130, 246, 0.6)",
            "0 0 20px rgba(59, 130, 246, 0.3)",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="p-6 rounded-lg bg-gradient-to-br from-accent/20 to-cyber-purple/20 backdrop-blur-sm border border-accent/30 mb-6"
      >
        <Shield className="w-16 h-16 md:w-20 md:h-20 text-accent" strokeWidth={1.5} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-center"
      >
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2">
          <span className="gradient-text">INOPSIO</span>
        </h1>
        <div className="flex items-center justify-center gap-2 text-accent/60 text-sm md:text-base">
          <div className="h-px w-12 bg-accent/30"></div>
          <span className="font-mono uppercase tracking-widest">Platform Suite</span>
          <div className="h-px w-12 bg-accent/30"></div>
        </div>
      </motion.div>
    </motion.div>
  );
}
