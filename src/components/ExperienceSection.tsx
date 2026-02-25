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
      "Built a Cyber Threat Visualization Dashboard for real-time threat monitoring and analytics",
      "Designed RESTful APIs using Flask with secure endpoint architecture",
      "Implemented interactive charts using Chart.js for data-driven security insights",
      "Focused on real-time threat detection, pattern analysis, and incident visualization",
    ],
    tech: ["Python", "Flask", "JavaScript", "Chart.js", "REST APIs", "Security Analytics"],
  },
  {
    company: "Indian Oil Corporation Limited",
    role: "Winter Intern",
    period: "Dec 2025 – Jan 2026",
    location: "Bhadrak, Odisha",
    description: [
      "Developed SPARK — Smart Permit & Risk Knowledge System for industrial safety management",
      "Built a digital permit workflow system using Django with role-based access control",
      "Integrated Face Recognition using OpenCV for secure gate validation",
      "Implemented PPE verification, audit logs, and centralized logging system",
    ],
    tech: ["Django", "Python", "OpenCV", "SQLite", "Face Recognition", "Workflow Automation"],
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
            Experience
          </p>
          <h2 className="section-heading">
            Where I've <span className="gradient-text">Made Impact</span>
          </h2>
        </motion.div>

        <div className="mt-12 space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
              className="glass-card-hover p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold">{exp.company}</h3>
                  <p className="text-primary font-medium">{exp.role}</p>
                </div>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground md:text-right">
                  <span className="flex items-center gap-1.5 md:justify-end">
                    <Calendar size={14} /> {exp.period}
                  </span>
                  <span className="flex items-center gap-1.5 md:justify-end">
                    <MapPin size={14} /> {exp.location}
                  </span>
                </div>
              </div>

              <ul className="space-y-2 mb-6">
                {exp.description.map((item) => (
                  <li key={item} className="text-muted-foreground text-sm flex gap-2">
                    <span className="text-primary mt-1.5 flex-shrink-0">▹</span>
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <span key={t} className="tech-badge">{t}</span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
