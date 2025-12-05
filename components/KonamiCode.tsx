"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, X } from "lucide-react";

const KONAMI_CODE = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];

export default function KonamiCode() {
  const [keys, setKeys] = useState<string[]>([]);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      setKeys((prevKeys) => {
        const newKeys = [...prevKeys, e.key].slice(-KONAMI_CODE.length);

        if (JSON.stringify(newKeys) === JSON.stringify(KONAMI_CODE)) {
          setShowEasterEgg(true);
          return [];
        }

        return newKeys;
      });
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <AnimatePresence>
      {showEasterEgg && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setShowEasterEgg(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5 }}
            onClick={(e) => e.stopPropagation()}
            className="glass-morphism rounded-lg p-8 max-w-2xl w-full relative"
          >
            <button
              onClick={() => setShowEasterEgg(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="flex items-center gap-3 mb-6">
              <Terminal className="w-8 h-8 text-cyber-cyan" />
              <h2 className="text-2xl font-bold gradient-text">Access Granted</h2>
            </div>

            <div className="font-mono text-sm space-y-3 text-gray-300">
              <p className="text-cyber-green">
                &gt; KONAMI_CODE_DETECTED: TRUE
              </p>
              <p className="text-cyber-cyan">
                &gt; CLEARANCE_LEVEL: DEVELOPER
              </p>
              <p className="text-accent">
                &gt; LOADING_SECRET_MESSAGE...
              </p>

              <div className="border-l-2 border-accent pl-4 py-4 my-4 bg-primary-light/30 rounded-r">
                <p className="text-white mb-3 font-semibold">
                  Welcome, Elite User! 🎮
                </p>
                <p className="text-gray-400 leading-relaxed">
                  You've discovered the secret developer access. The Inopsio platform
                  is being built by a team of cybersecurity experts, engineers, and
                  innovators who believe in the power of unified security.
                </p>
                <p className="text-gray-400 mt-3 leading-relaxed">
                  <span className="text-cyber-purple font-semibold">Fun fact:</span>{" "}
                  This entire coming soon page was crafted with the same attention to
                  detail and security-first mindset that powers our main platform.
                </p>
              </div>

              <p className="text-cyber-green">
                &gt; STAY_CURIOUS=TRUE
              </p>
              <p className="text-gray-500 text-xs mt-4">
                Press ESC or click outside to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
