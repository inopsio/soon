"use client";

import { motion } from "framer-motion";
import { Eye, Brain, Paintbrush, ShieldCheck } from "lucide-react";
import { ReactNode } from "react";

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
  color: string;
}

const features: Feature[] = [
  {
    icon: <Eye className="w-8 h-8" />,
    title: "Unified Visibility",
    description: "One platform for IT, OT, and Compliance. Complete visibility across your entire security landscape.",
    color: "from-accent to-accent-light",
  },
  {
    icon: <Brain className="w-8 h-8" />,
    title: "AI-Powered Detection",
    description: "Intelligent threat detection with explainability. Know not just what, but why.",
    color: "from-cyber-purple to-cyber-cyan",
  },
  {
    icon: <Paintbrush className="w-8 h-8" />,
    title: "Multi-Tenant Ready",
    description: "Secure multi-tenant architecture for MSSPs and enterprises. Complete isolation with shared infrastructure.",
    color: "from-cyber-cyan to-cyber-green",
  },
  {
    icon: <ShieldCheck className="w-8 h-8" />,
    title: "Global Compliance",
    description: "GDPR, NIS2, SOC2, ISO 27001 ready. Built for enterprise-grade compliance from day one.",
    color: "from-cyber-green to-accent",
  },
];

export default function FeaturePreview() {
  return (
    <section className="py-20 px-4" id="features">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Built for the Future of{" "}
            <span className="gradient-text">Cybersecurity</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Unifying IT security, OT protection, and compliance management into a single, powerful platform.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
              className="glass-morphism rounded-lg p-6 md:p-8 group cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`p-3 rounded-lg bg-gradient-to-br ${feature.color} bg-opacity-10 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="text-white">{feature.icon}</div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-3 text-white">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
