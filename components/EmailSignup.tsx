"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Check, AlertCircle } from "lucide-react";
import { validateEmail } from "@/lib/utils";
import SuccessModal from "./SuccessModal";

export default function EmailSignup() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    // Check if already subscribed (localStorage)
    const subscribers = JSON.parse(localStorage.getItem("inopsio_subscribers") || "[]");
    if (subscribers.includes(email)) {
      setStatus("error");
      setErrorMessage("You're already on the list!");
      return;
    }

    setStatus("loading");

    // Simulate API call
    setTimeout(() => {
      console.log("Email submitted:", email);

      // Store in localStorage
      subscribers.push(email);
      localStorage.setItem("inopsio_subscribers", JSON.stringify(subscribers));

      setStatus("success");
      setSubmittedEmail(email);
      setEmail("");
      setShowModal(true);

      // Reset after modal closes
      setTimeout(() => setStatus("idle"), 1000);
    }, 1500);
  };

  return (
    <>
      <SuccessModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        email={submittedEmail}
      />
      <div className="w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus("idle");
              setErrorMessage("");
            }}
            placeholder="Enter your email address"
            disabled={status === "loading" || status === "success"}
            className="w-full pl-12 pr-4 py-4 bg-primary-light/50 border border-accent/30 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Email address"
          />
        </div>

        <motion.button
          type="submit"
          disabled={status === "loading" || status === "success"}
          whileHover={{ scale: status === "idle" || status === "error" ? 1.02 : 1 }}
          whileTap={{ scale: status === "idle" || status === "error" ? 0.98 : 1 }}
          className="w-full py-4 px-6 bg-gradient-to-r from-accent to-cyber-purple text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-accent/50 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {status === "loading" && (
            <>
              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              <span>Subscribing...</span>
            </>
          )}
          {status === "success" && (
            <>
              <Check className="w-5 h-5" />
              <span>You&apos;re on the list!</span>
            </>
          )}
          {(status === "idle" || status === "error") && (
            <span>Notify Me at Launch</span>
          )}
        </motion.button>
      </form>

      {status === "error" && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-red-400 text-sm mt-3"
        >
          <AlertCircle className="w-4 h-4" />
          <span>{errorMessage}</span>
        </motion.div>
      )}

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-cyber-green text-sm text-center mt-3"
        >
          We&apos;ll notify you when we launch!
        </motion.p>
      )}

      <p className="text-gray-400 text-xs text-center mt-4">
        We respect your privacy. Unsubscribe at any time.
      </p>
      </div>
    </>
  );
}
