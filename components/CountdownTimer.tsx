"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { calculateTimeRemaining, formatTimeUnit } from "@/lib/utils";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeUnit {
  value: number;
  label: string;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });

  useEffect(() => {
    const updateCountdown = () => {
      setTimeRemaining(calculateTimeRemaining(targetDate));
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits: TimeUnit[] = [
    { value: timeRemaining.days, label: "Days" },
    { value: timeRemaining.hours, label: "Hours" },
    { value: timeRemaining.minutes, label: "Minutes" },
    { value: timeRemaining.seconds, label: "Seconds" },
  ];

  if (timeRemaining.isExpired) {
    return (
      <div className="text-center">
        <p className="text-2xl font-semibold text-cyber-green">We&apos;re Live!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 my-12">
      {timeUnits.map((unit, index) => (
        <motion.div
          key={unit.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex flex-col items-center"
        >
          <div className="glass-morphism rounded-lg p-4 md:p-6 w-full min-w-[80px] md:min-w-[120px] glow-accent">
            <AnimatePresence mode="wait">
              <motion.div
                key={unit.value}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 20, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white font-mono"
              >
                {formatTimeUnit(unit.value)}
              </motion.div>
            </AnimatePresence>
          </div>
          <p className="text-sm md:text-base text-gray-400 mt-3 uppercase tracking-wider font-medium">
            {unit.label}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
