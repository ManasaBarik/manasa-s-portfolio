import { motion } from "framer-motion";
import { ArrowDown, FileText, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 md:py-0">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Profile placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div className="w-40 h-40 md:w-52 md:h-52 rounded-full gradient-border bg-muted flex items-center justify-center animate-float overflow-hidden">
              <div className="w-full h-full rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-5xl md:text-6xl font-bold gradient-text">MB</span>
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="text-center md:text-left max-w-2xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-sm font-mono text-primary mb-4 tracking-widest uppercase"
            >
              Full-Stack Developer · Data Analytics · AI Systems
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              Building Intelligent Web Systems with{" "}
              <span className="gradient-text">Data-Driven Insights</span> &{" "}
              <span className="gradient-text-alt">Secure Automation.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-muted-foreground text-base md:text-lg mb-8 leading-relaxed"
            >
              Passionate about full-stack development, RESTful APIs, cyber dashboards,
              face recognition systems, and industrial automation — transforming ideas
              into production-ready solutions.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-wrap gap-4 justify-center md:justify-start"
            >
              <a href="#projects" className="glow-button inline-flex items-center gap-2">
                <ArrowDown size={18} /> View Projects
              </a>
              <a href="#" className="glow-button-outline inline-flex items-center gap-2">
                <FileText size={18} /> Download Resume
              </a>
              <a href="#contact" className="glow-button-outline inline-flex items-center gap-2">
                <Mail size={18} /> Contact Me
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
