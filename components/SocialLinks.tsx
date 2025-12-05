"use client";

import { motion } from "framer-motion";
import { Linkedin, Twitter, Github, Mail } from "lucide-react";

interface SocialLink {
  name: string;
  icon: React.ReactNode;
  href: string;
  ariaLabel: string;
}

const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com/company/inopsio",
    ariaLabel: "Follow us on LinkedIn",
  },
  {
    name: "Twitter",
    icon: <Twitter className="w-5 h-5" />,
    href: "https://x.com/InopsioCompany",
    ariaLabel: "Follow us on Twitter",
  },
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com/inopsio",
    ariaLabel: "Check our GitHub",
  },
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:hello@inopsio.com",
    ariaLabel: "Send us an email",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex flex-col items-center gap-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4"
      >
        {socialLinks.map((link, index) => (
          <motion.a
            key={link.name}
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={link.ariaLabel}
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-3 glass-morphism rounded-lg text-gray-400 hover:text-accent hover:border-accent/50 transition-all duration-300"
          >
            {link.icon}
          </motion.a>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="text-gray-400 text-sm"
      >
        Questions? Reach us at{" "}
        <a
          href="mailto:hello@inopsio.com"
          className="text-accent hover:text-accent-light transition-colors"
        >
          hello@inopsio.com
        </a>
      </motion.p>
    </div>
  );
}
