import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail, Sparkles, ChevronDown } from "lucide-react";
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
      {/* Ambient gradient layers */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-primary/8 blur-[150px] animate-morph" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-secondary/8 blur-[130px] animate-morph" style={{ animationDelay: "-4s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-accent/5 blur-[100px] animate-pulse-glow" />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 bg-grid opacity-20" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background))_75%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-0">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20">
          {/* Left: Text */}
          <div className="flex-1 text-center lg:text-left">
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

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold leading-[1.05] mb-8 text-balance"
            >
              Building{" "}
              <span className="gradient-text">Intelligent</span>{" "}
              Systems with{" "}
              <span className="gradient-text-alt">Data-Driven</span>{" "}
              Insights
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-muted-foreground text-base md:text-lg mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Crafting production-ready web systems, RESTful APIs, and AI-powered
              applications — from cyber threat dashboards to industrial automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start"
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
          </div>

          {/* Right: Profile with 3D-style frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-shrink-0"
          >
            {/* Outer glow ring */}
            <div className="absolute -inset-4 rounded-full bg-gradient-to-br from-primary/20 via-secondary/10 to-accent/5 blur-2xl animate-pulse-glow" />
            
            {/* Orbiting ring */}
            <div className="absolute -inset-6 rounded-full border border-primary/10 animate-spin-slow" />
            <div className="absolute -inset-10 rounded-full border border-secondary/5 animate-spin-slow" style={{ animationDirection: "reverse", animationDuration: "30s" }} />

            {/* Photo container */}
            <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
              <div className="absolute inset-0 rounded-full gradient-border" />
              <div className="w-full h-full rounded-full overflow-hidden animate-float p-[3px]">
                <img
                  src={profilePhoto}
                  alt="Manasa Barik – Full-Stack Developer"
                  className="w-full h-full rounded-full object-cover object-top"
                />
              </div>
              {/* Status badge */}
              <div className="absolute -bottom-1 -right-1 w-10 h-10 rounded-full bg-background border-2 border-border flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
              </div>
              {/* Floating tech icons */}
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -left-4 top-1/4 glass-card p-2 rounded-lg text-xs font-mono text-primary"
              >
                {"</>"}
              </motion.div>
              <motion.div
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute -right-6 top-1/3 glass-card p-2 rounded-lg text-xs font-mono text-secondary"
              >
                AI
              </motion.div>
            </div>
          </motion.div>
        </div>

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
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[10px] font-mono text-muted-foreground/50 uppercase tracking-widest">Scroll</span>
            <ChevronDown size={16} className="text-primary/40" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
