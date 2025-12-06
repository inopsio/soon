"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is Inopsio?",
    answer:
      "Inopsio is a unified cybersecurity platform that brings together IT security, OT/ICS protection, and compliance management into a single, AI-powered solution. We're built for enterprises and MSSPs who need comprehensive visibility and control.",
  },
  {
    question: "When will Inopsio launch?",
    answer:
      "We're targeting Q1 2025 for our official launch. Sign up for our newsletter to be notified the moment we go live and get early access to the platform.",
  },
  {
    question: "What makes Inopsio different?",
    answer:
      "Unlike fragmented point solutions, Inopsio offers true unification: single-pane visibility across IT and OT, secure multi-tenant architecture for MSSPs, passive-first OT scanning that won't crash your PLCs, and cell architecture for true data residency compliance.",
  },
  {
    question: "Is Inopsio suitable for my industry?",
    answer:
      "Inopsio is designed for critical infrastructure, manufacturing, energy, healthcare, finance, and any organization that needs both IT and OT security. Our platform is GDPR, NIS2, SOC2, and ISO 27001 ready from day one.",
  },
  {
    question: "Can I request a demo before launch?",
    answer:
      "Absolutely! We're offering exclusive early access demos to select organizations. Sign up with your email, and our team will reach out to schedule a personalized walkthrough.",
  },
  {
    question: "What is multi-tenant capability?",
    answer:
      "Inopsio features a secure multi-tenant architecture designed for MSSPs and enterprises. Each tenant operates in complete isolation with dedicated resources, custom branding, and independent data storage, while sharing the same robust infrastructure. You provide the service, we provide the technology.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-gray-400">
            Got questions? We've got answers.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-morphism rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="font-semibold text-white pr-8">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-4 text-gray-400 leading-relaxed border-t border-gray-700/50 pt-4">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
