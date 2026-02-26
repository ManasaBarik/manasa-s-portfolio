import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, MapPin, ArrowUpRight } from "lucide-react";

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
    color: "primary",
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
    color: "secondary",
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-32 relative">
      <div className="section-divider mb-32" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center">Experience</span>
          <h2 className="section-heading">
            Where I've <span className="gradient-text">Made Impact</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40, rotateX: 5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + i * 0.2 }}
              className="group"
            >
              <div className="glass-card-hover p-8 h-full relative overflow-hidden">
                {/* Top accent */}
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-${exp.color} via-${exp.color}/50 to-transparent`} />
                
                {/* Company number */}
                <span className="absolute top-6 right-6 text-6xl font-display font-bold text-muted/30 select-none">
                  0{i + 1}
                </span>

                <div className="relative">
                  <div className="mb-6">
                    <h3 className="text-xl font-display font-bold mb-1 group-hover:text-primary transition-colors">
                      {exp.company}
                    </h3>
                    <p className={`text-${exp.color} font-medium text-sm`}>{exp.role}</p>
                  </div>

                  <div className="flex flex-wrap gap-3 text-xs text-muted-foreground mb-6">
                    <span className="flex items-center gap-1.5 font-mono">
                      <Calendar size={12} /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin size={12} /> {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-3 mb-6">
                    {exp.description.map((item) => (
                      <li key={item} className="text-muted-foreground text-sm flex gap-3">
                        <span className="text-primary mt-1 shrink-0">
                          <ArrowUpRight size={12} />
                        </span>
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
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
