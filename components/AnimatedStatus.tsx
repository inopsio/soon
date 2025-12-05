"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const statusMessages = [
  "Initializing security modules...",
  "Configuring multi-tenant architecture...",
  "Loading threat intelligence feeds...",
  "Preparing AI models...",
  "Establishing secure connections...",
  "Validating compliance frameworks...",
  "Optimizing detection algorithms...",
  "Calibrating threat sensors...",
  "Building defense matrices...",
  "Almost ready for launch...",
];

export default function AnimatedStatus() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % statusMessages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto glass-morphism rounded-lg p-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
          <h3 className="text-xl font-semibold">Build Status</h3>
          <div className="ml-auto">
            <div className="flex gap-1">
              <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse delay-100"></div>
              <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse delay-200"></div>
            </div>
          </div>
        </div>

        <div className="font-mono text-sm space-y-2 text-gray-400 min-h-[120px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.5 }}
              className="space-y-2"
            >
              {statusMessages.slice(0, currentIndex + 1).slice(-5).map((message, idx) => (
                <motion.p
                  key={`${currentIndex}-${idx}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: idx === 4 ? 1 : 0.4 }}
                  className="flex items-center gap-2"
                >
                  <span className={idx === 4 ? "text-cyber-cyan" : "text-cyber-green"}>
                    &gt;
                  </span>{" "}
                  {message}
                </motion.p>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="pt-4 border-t border-gray-700/50 mt-4">
            <div className="flex items-center justify-between text-xs">
              <span className="text-gray-500">Progress</span>
              <span className="text-cyber-cyan font-semibold">
                {Math.min(95, Math.floor((currentIndex / statusMessages.length) * 100))}%
              </span>
            </div>
            <div className="w-full h-1 bg-gray-800 rounded-full mt-2 overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-cyber-green via-cyber-cyan to-accent rounded-full"
                initial={{ width: "0%" }}
                animate={{
                  width: `${Math.min(95, (currentIndex / statusMessages.length) * 100)}%`
                }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
