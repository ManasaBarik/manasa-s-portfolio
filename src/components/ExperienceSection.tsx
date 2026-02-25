import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "Infosys Springboard",
    role: "Software Development Intern",
    period: "Feb 2025 – Present",
    location: "Remote",
    description: [
      "Built a Cyber Threat Visualization Dashboard for real-time threat monitoring",
      "Designed RESTful APIs using Flask with secure endpoint architecture",
      "Implemented interactive charts using Chart.js for security insights",
      "Focused on real-time threat detection, pattern analysis, and visualization",
    ],
    tech: ["Python", "Flask", "JavaScript", "Chart.js", "REST APIs"],
  },
  {
    company: "Indian Oil Corporation Limited",
    role: "Winter Intern",
    period: "Dec 2025 – Jan 2026",
    location: "Bhadrak, Odisha",
    description: [
      "Developed SPARK — Smart Permit & Risk Knowledge System",
      "Built digital permit workflow system using Django with RBAC",
      "Integrated Face Recognition using OpenCV for gate validation",
      "Implemented PPE verification, audit logs, and centralized logging",
    ],
    tech: ["Django", "Python", "OpenCV", "SQLite", "Face Recognition"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-28 relative">
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Experience</span>
          <h2 className="section-heading">
            Where I've <span className="gradient-text">Made Impact</span>
          </h2>
        </motion.div>

        {/* Timeline layout */}
        <div className="mt-14 relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/30 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
                className="relative md:pl-20"
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-6 top-8 w-4 h-4 rounded-full border-2 border-primary bg-background z-10 hidden md:block">
                  <div className="absolute inset-1 rounded-full bg-primary animate-pulse-glow" />
                </div>

                <div className="glass-card-hover p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                    <div>
                      <h3 className="text-xl font-display font-bold">{exp.company}</h3>
                      <p className="text-primary font-medium text-sm mt-1">{exp.role}</p>
                    </div>
                    <div className="flex flex-col gap-1.5 text-xs text-muted-foreground md:text-right shrink-0">
                      <span className="flex items-center gap-1.5 md:justify-end font-mono">
                        <Calendar size={12} /> {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 md:justify-end">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 mb-6">
                    {exp.description.map((item) => (
                      <li key={item} className="text-muted-foreground text-sm flex gap-3">
                        <span className="text-primary mt-0.5 shrink-0 text-xs">●</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span key={t} className="tech-badge">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
