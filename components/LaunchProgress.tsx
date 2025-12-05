"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LaunchProgressProps {
  targetDate: string;
}

export default function LaunchProgress({ targetDate }: LaunchProgressProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const calculateProgress = () => {
      const now = new Date().getTime();
      const launch = new Date(targetDate).getTime();

      // Assuming project started 6 months before launch (adjust as needed)
      const projectStart = launch - (180 * 24 * 60 * 60 * 1000); // 180 days

      const totalDuration = launch - projectStart;
      const elapsed = now - projectStart;

      const percentage = Math.min(Math.max((elapsed / totalDuration) * 100, 0), 99);
      setProgress(percentage);
    };

    calculateProgress();
    const interval = setInterval(calculateProgress, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="w-full max-w-2xl mx-auto mt-8">
      <div className="glass-morphism rounded-lg p-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-sm font-semibold text-gray-300">Launch Progress</h3>
          <span className="text-sm font-mono font-bold text-cyber-cyan">
            {progress.toFixed(1)}%
          </span>
        </div>

        <div className="relative w-full h-3 bg-gray-800 rounded-full overflow-hidden">
          <motion.div
            className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyber-green via-cyber-cyan to-accent rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse" />
          </motion.div>

          {/* Animated shimmer effect */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "50%" }}
          />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-4 text-xs">
          <div className="text-center">
            <div className="w-2 h-2 bg-cyber-green rounded-full mx-auto mb-1"></div>
            <p className="text-gray-500">Platform Core</p>
            <p className="text-white font-semibold">Complete</p>
          </div>
          <div className="text-center">
            <div className="w-2 h-2 bg-cyber-cyan rounded-full mx-auto mb-1 animate-pulse"></div>
            <p className="text-gray-500">Testing</p>
            <p className="text-white font-semibold">In Progress</p>
          </div>
          <div className="text-center">
            <div className="w-2 h-2 bg-gray-600 rounded-full mx-auto mb-1"></div>
            <p className="text-gray-500">Launch</p>
            <p className="text-white font-semibold">Q1 2025</p>
          </div>
        </div>
      </div>
    </div>
  );
}
