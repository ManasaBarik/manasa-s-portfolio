import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skillCategories = [
  {
    title: "Programming",
    skills: ["Python", "Java", "C"],
  },
  {
    title: "Web Technologies",
    skills: ["HTML", "CSS", "React", "Django", "Flask"],
  },
  {
    title: "Database",
    skills: ["MySQL", "SQLite"],
  },
  {
    title: "Core Areas",
    skills: ["Data Analysis", "RESTful APIs", "Face Recognition", "Workflow Automation"],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
            Skills
          </p>
          <h2 className="section-heading">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
              className="glass-card-hover p-6"
            >
              <h3 className="font-semibold text-lg mb-4 text-primary">{cat.title}</h3>
              <div className="flex flex-wrap gap-3">
                {cat.skills.map((skill, j) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + j * 0.05 }}
                    className="tech-badge text-sm"
                  >
                    {skill}
                  </motion.span>
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
