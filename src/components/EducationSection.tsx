import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Calendar, MapPin, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech — Computer Science Engineering",
    specialization: "Data Science",
    institution: "GIET University, Gunupur",
    period: "2023 – 2027",
    status: "Pursuing",
    cgpa: "CGPA: 7.23",
    icon: "🎓",
    gradient: "from-primary/20 to-secondary/10",
    accentColor: "primary",
    coursework: ["Data Structures & Algorithms", "Machine Learning", "Database Systems", "Computer Vision", "Web Development"],
  },
  {
    degree: "Higher Secondary (12th)",
    specialization: "Science",
    institution: "AIMS Higher Secondary School",
    board: "CHSE, Odisha",
    period: "2021 – 2023",
    percentage: "74%",
    icon: "📘",
    gradient: "from-secondary/20 to-accent/10",
    accentColor: "secondary",
  },
  {
    degree: "Secondary (10th)",
    specialization: "",
    institution: "A.A. High School",
    board: "BSE, Odisha",
    period: "2020 – 2021",
    percentage: "82%",
    icon: "📗",
    gradient: "from-accent/20 to-primary/10",
    accentColor: "accent",
  },
];

const EducationSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="education" className="py-32 relative">
      <div className="section-divider mb-32" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center">Education</span>
          <h2 className="section-heading">
            Academic <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-4xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/40 via-secondary/30 to-accent/20" />

          {education.map((edu, i) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, y: 40, rotateX: 5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.2 }}
              className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary/60 z-10 mt-8">
                <div className="absolute inset-0.5 rounded-full bg-primary/40 animate-pulse" />
              </div>

              {/* Spacer for mobile */}
              <div className="w-12 shrink-0 md:hidden" />

              {/* Card */}
              <div className={`flex-1 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                <div className="glass-card-hover p-6 md:p-8 relative overflow-hidden group">
                  {/* Background gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${edu.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative">
                    <div className={`flex items-start gap-4 mb-4 ${i % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <span className="text-3xl shrink-0">{edu.icon}</span>
                      <div className={`flex-1 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                        <h3 className="font-display font-bold text-lg group-hover:text-primary transition-colors">
                          {edu.degree}
                        </h3>
                        {edu.specialization && (
                          <p className="text-primary/80 text-sm font-medium">{edu.specialization}</p>
                        )}
                      </div>
                    </div>

                    <div className={`flex flex-wrap gap-3 text-xs text-muted-foreground mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                      <span className="flex items-center gap-1.5">
                        <MapPin size={12} /> {edu.institution}
                      </span>
                      <span className="flex items-center gap-1.5 font-mono">
                        <Calendar size={12} /> {edu.period}
                      </span>
                    </div>

                    {edu.board && (
                      <div className={`flex items-center gap-2 text-sm text-muted-foreground mb-3 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        <Award size={12} className="text-primary/60" />
                        <span className="font-mono text-xs">{edu.board}</span>
                      </div>
                    )}

                    {edu.percentage && (
                      <div className={`flex items-center gap-2 mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className={`tech-badge text-${edu.accentColor} border-${edu.accentColor}/20 bg-${edu.accentColor}/10 font-semibold`}>
                          {edu.percentage}
                        </span>
                      </div>
                    )}

                    {"status" in edu && edu.status && (
                      <div className={`flex items-center gap-2 mb-4 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-mono">
                          <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                          {edu.status}
                        </span>
                      </div>
                    )}

                    {"coursework" in edu && edu.coursework && (
                      <div className={`flex flex-wrap gap-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                        {edu.coursework.map((c) => (
                          <span key={c} className="tech-badge">{c}</span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Empty side for desktop layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
