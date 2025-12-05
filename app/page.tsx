import AnimatedBackground from "@/components/AnimatedBackground";
import Logo from "@/components/Logo";
import CountdownTimer from "@/components/CountdownTimer";
import EmailSignup from "@/components/EmailSignup";
import FeaturePreview from "@/components/FeaturePreview";
import SocialLinks from "@/components/SocialLinks";
import AnimatedStatus from "@/components/AnimatedStatus";
import LaunchProgress from "@/components/LaunchProgress";
import FAQ from "@/components/FAQ";
import KonamiCode from "@/components/KonamiCode";
import { Terminal } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-primary-dark text-white overflow-hidden">
      <AnimatedBackground />
      <KonamiCode />

      {/* Subtle background glow effects */}
      <div className="fixed inset-0 pointer-events-none" style={{ zIndex: 1 }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyber-purple/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <Logo />

          <div className="text-center max-w-4xl mx-auto space-y-6">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
              The Future of{" "}
              <span className="gradient-text">Unified Cybersecurity</span>
            </h2>

            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              Inopsio brings IT security, OT protection, and compliance management
              into a single, AI-powered platform. Built for enterprises and MSSPs
              who demand visibility, control, and trust.
            </p>

            <div className="inline-flex items-center gap-2 px-4 py-2 glass-morphism rounded-full text-sm text-cyber-cyan">
              <Terminal className="w-4 h-4" />
              <span className="font-mono">Coming Q1 2025</span>
            </div>
          </div>

          <CountdownTimer targetDate="2025-03-01T00:00:00" />

          <LaunchProgress targetDate="2025-03-01T00:00:00" />

          <div className="mt-12">
            <EmailSignup />
          </div>

          <div className="mt-12">
            <SocialLinks />
          </div>
        </section>

        {/* Feature Preview Section */}
        <FeaturePreview />

        {/* Animated Status Section */}
        <AnimatedStatus />

        {/* FAQ Section */}
        <FAQ />

        {/* Footer */}
        <footer className="py-12 px-4 border-t border-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4 text-sm text-gray-400">
                <span>&copy; 2025 Inopsio. All rights reserved.</span>
                <span className="inline-flex items-center gap-2 px-3 py-1 glass-morphism rounded-full text-xs">
                  <div className="w-1.5 h-1.5 bg-cyber-green rounded-full animate-pulse"></div>
                  Under Construction
                </span>
              </div>
              <div className="flex items-center gap-6 text-sm">
                <a
                  href="#"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-accent transition-colors"
                >
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
