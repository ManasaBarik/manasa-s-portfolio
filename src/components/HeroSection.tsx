import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import profilePhoto from "@/assets/profile-photo.jpeg";

const roles = [
  "Full-Stack Developer",
  "Data Analytics Enthusiast",
  "AI Systems Builder",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-primary/10 blur-[120px] animate-morph" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-secondary/10 blur-[100px] animate-morph" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-accent/5 blur-[80px] animate-pulse-glow" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-30" />

      {/* Radial fade */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background))_80%)]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 py-32 md:py-0">
        <div className="flex flex-col items-center text-center">
          {/* Profile avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="mb-10"
          >
            <div className="relative">
              <div className="w-28 h-28 md:w-36 md:h-36 rounded-full gradient-border bg-muted flex items-center justify-center animate-float overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/10 flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-display font-bold gradient-text">MB</span>
                </div>
              </div>
              {/* Status indicator */}
              <div className="absolute -bottom-1 -right-1 w-8 h-8 rounded-full bg-background border-2 border-border flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              </div>
            </div>
          </motion.div>

          {/* Rotating role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mb-6"
          >
            <span className="section-label">
              <Sparkles size={12} />
              <span key={roleIndex} className="inline-block">
                {roles[roleIndex]}
              </span>
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.1] mb-8 text-balance max-w-4xl"
          >
            Building Intelligent Systems with{" "}
            <span className="gradient-text">Data-Driven</span>{" "}
            <span className="gradient-text-alt">Insights</span>
          </motion.h1>

          {/* Sub text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-muted-foreground text-base md:text-lg mb-12 leading-relaxed max-w-2xl"
          >
            Crafting production-ready web systems, RESTful APIs, and AI-powered 
            applications — from cyber threat dashboards to industrial automation.
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <a href="#projects" className="glow-button inline-flex items-center gap-2 text-sm">
              <ArrowDown size={16} /> View Projects
            </a>
            <a href="#" className="glow-button-outline inline-flex items-center gap-2 text-sm">
              <FileText size={16} /> Resume
            </a>
            <a href="#contact" className="glow-button-outline inline-flex items-center gap-2 text-sm">
              <Mail size={16} /> Contact
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
              className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-2"
            >
              <div className="w-1 h-2 rounded-full bg-primary/60" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
