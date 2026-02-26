import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Database, Cpu } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "Java", level: 70 },
      { name: "C", level: 65 },
      { name: "JavaScript", level: 80 },
    ],
  },
  {
    title: "Web & Frameworks",
    icon: Globe,
    skills: [
      { name: "React", level: 80 },
      { name: "Django", level: 85 },
      { name: "Flask", level: 85 },
      { name: "HTML/CSS", level: 90 },
    ],
  },
  {
    title: "Database",
    icon: Database,
    skills: [
      { name: "MySQL", level: 80 },
      { name: "SQLite", level: 75 },
    ],
  },
  {
    title: "Core Areas",
    icon: Cpu,
    skills: [
      { name: "Data Analysis", level: 80 },
      { name: "RESTful APIs", level: 90 },
      { name: "Face Recognition", level: 70 },
      { name: "Automation", level: 75 },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-32 relative">
      <div className="section-divider mb-32" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center">Skills</span>
          <h2 className="section-heading">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30, rotateX: 4 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.2 + i * 0.1 }}
              className="glass-card-hover p-6 md:p-8"
            >
              <h3 className="font-display font-semibold text-base mb-6 text-foreground flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center">
                  <cat.icon className="text-primary" size={16} />
                </div>
                {cat.title}
              </h3>
              <div className="space-y-5">
                {cat.skills.map((skill, j) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="font-mono text-muted-foreground text-xs">{skill.name}</span>
                      <span className="text-xs text-muted-foreground/60 font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 rounded-full bg-muted overflow-hidden relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: 0.5 + j * 0.1, ease: [0.16, 1, 0.3, 1] }}
                        className="h-full rounded-full relative overflow-hidden"
                        style={{
                          background: `linear-gradient(90deg, hsl(var(--cyber-blue)), hsl(var(--cyber-purple)))`,
                        }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-[shimmer_2s_infinite]" 
                          style={{ animationDelay: `${j * 0.2}s` }}
                        />
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
