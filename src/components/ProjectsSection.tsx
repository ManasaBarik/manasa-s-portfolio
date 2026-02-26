import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X, ArrowUpRight, Layers, Shield, Leaf } from "lucide-react";

const projects = [
  {
    title: "Cyber Threat Dashboard",
    tech: ["Python", "Flask", "JavaScript", "Chart.js"],
    description:
      "Web-based dashboard to analyze and monitor simulated security incidents with dynamic visualizations, real-time threat feeds, and interactive analytics.",
    github: "https://github.com/ManasaBarik",
    icon: Shield,
    gradient: "from-primary to-primary/50",
  },
  {
    title: "SPARK – Permit & Risk System",
    tech: ["Django", "Python", "OpenCV", "SQLite"],
    description:
      "Industrial safety management system with face recognition, automated permit validation, PPE verification, and centralized audit logging.",
    github: "https://github.com/ManasaBarik",
    icon: Layers,
    gradient: "from-secondary to-secondary/50",
  },
  {
    title: "KhetiBandhu",
    tech: ["Full-Stack", "Web Application"],
    description:
      "Smart farming assistant providing crop predictions, weather updates, and task guidance in regional language for agricultural communities.",
    github: "https://github.com/ManasaBarik",
    icon: Leaf,
    gradient: "from-accent to-accent/50",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="py-32 relative">
      <div className="section-divider mb-32" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center">Projects</span>
          <h2 className="section-heading">
            Selected <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 40, rotateY: -5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateY: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.15 }}
              onClick={() => setSelected(i)}
              className="glass-card-hover p-6 cursor-pointer group flex flex-col relative overflow-hidden"
              style={{ perspective: "1000px" }}
            >
              {/* Top gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${project.gradient} opacity-50 group-hover:opacity-100 transition-opacity`} />

              {/* Icon */}
              <div className="flex items-center justify-between mb-6">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${project.gradient} flex items-center justify-center opacity-80`}>
                  <project.icon size={20} className="text-foreground" />
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={16} />
                  </a>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <ArrowUpRight size={16} />
                  </button>
                </div>
              </div>

              <h3 className="font-display font-bold text-lg mb-3 group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-10 max-w-lg w-full relative border-primary/20"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors p-1"
              >
                <X size={18} />
              </button>

              <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${projects[selected].gradient} flex items-center justify-center mb-6 opacity-80`}>
                {(() => {
                  const Icon = projects[selected].icon;
                  return <Icon size={24} className="text-foreground" />;
                })()}
              </div>
              <h3 className="text-2xl font-display font-bold mb-4">
                {projects[selected].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {projects[selected].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {projects[selected].tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={projects[selected].github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button-outline inline-flex items-center gap-2 text-sm"
                >
                  <Github size={15} /> View Code
                </a>
                <button className="glow-button inline-flex items-center gap-2 text-sm">
                  <ExternalLink size={15} /> Live Demo
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ProjectsSection;
