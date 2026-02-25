import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, X } from "lucide-react";

const projects = [
  {
    title: "Cyber Threat Visualization Dashboard",
    tech: ["Python", "Flask", "JavaScript", "Chart.js"],
    description:
      "Web-based dashboard to analyze and monitor simulated security incidents with dynamic visualizations, real-time threat feeds, and interactive analytics.",
    github: "https://github.com/ManasaBarik",
  },
  {
    title: "SPARK – Smart Permit & Risk Knowledge",
    tech: ["Django", "Python", "OpenCV", "SQLite"],
    description:
      "Industrial safety management system with face recognition, automated permit validation, PPE verification, and centralized audit logging.",
    github: "https://github.com/ManasaBarik",
  },
  {
    title: "KhetiBandhu",
    tech: ["Full-Stack", "Web Application"],
    description:
      "Smart farming assistant providing crop predictions, weather updates, and task guidance in regional language for agricultural communities.",
    github: "https://github.com/ManasaBarik",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
            Projects
          </p>
          <h2 className="section-heading">
            Things I've <span className="gradient-text">Built</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              onClick={() => setSelected(i)}
              className="glass-card-hover p-6 cursor-pointer group flex flex-col"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-mono font-bold text-sm">
                    0{i + 1}
                  </span>
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    <Github size={18} />
                  </a>
                  <button className="text-muted-foreground hover:text-primary transition-colors">
                    <ExternalLink size={18} />
                  </button>
                </div>
              </div>

              <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed mb-5 flex-grow line-clamp-3">
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
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="glass-card p-8 max-w-lg w-full relative"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-muted-foreground hover:text-foreground"
              >
                <X size={20} />
              </button>

              <span className="text-primary font-mono text-sm">
                Project 0{selected + 1}
              </span>
              <h3 className="text-2xl font-bold mt-2 mb-4">
                {projects[selected].title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {projects[selected].description}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
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
                  <Github size={16} /> View Code
                </a>
                <button className="glow-button inline-flex items-center gap-2 text-sm">
                  <ExternalLink size={16} /> Live Demo
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
