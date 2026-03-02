import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Code, Globe, Database, Cpu, ChevronRight } from "lucide-react";

const skillCategories = [
  {
    title: "Languages",
    icon: Code,
    color: "primary",
    skills: [
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "C", icon: "⚙️" },
      { name: "JavaScript", icon: "🟨" },
    ],
  },
  {
    title: "Web & Frameworks",
    icon: Globe,
    color: "secondary",
    skills: [
      { name: "HTML/CSS", icon: "🎨" },
      { name: "React JS", icon: "⚛️" },
      { name: "Django", icon: "🎯" },
    ],
  },
  {
    title: "Database",
    icon: Database,
    color: "accent",
    skills: [
      { name: "MySQL", icon: "🗄️" },
    ],
  },
  {
    title: "Core Areas",
    icon: Cpu,
    color: "primary",
    skills: [
      { name: "Data Analysis", icon: "📊" },
      { name: "Face Recognition", icon: "👁️" },
      { name: "Workflow Automation", icon: "🤖" },
      { name: "RESTful APIs", icon: "🔗" },
    ],
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState(0);

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

        <div className="grid lg:grid-cols-12 gap-8 max-w-5xl mx-auto">
          {/* Category tabs - left side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex lg:flex-col gap-3"
          >
            {skillCategories.map((cat, i) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(i)}
                className={`group flex items-center gap-3 p-4 rounded-2xl text-left transition-all duration-400 w-full ${
                  activeCategory === i
                    ? "glass-card border-primary/30 shadow-[0_0_24px_hsl(var(--cyber-blue)/0.1)]"
                    : "hover:bg-muted/30"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                    activeCategory === i
                      ? `bg-${cat.color}/20`
                      : "bg-muted/40"
                  }`}
                >
                  <cat.icon
                    size={18}
                    className={`transition-colors duration-300 ${
                      activeCategory === i ? `text-${cat.color}` : "text-muted-foreground"
                    }`}
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <span
                    className={`font-display font-semibold text-sm block transition-colors duration-300 ${
                      activeCategory === i ? "text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    {cat.title}
                  </span>
                  <span className="text-[10px] text-muted-foreground/60 font-mono">
                    {cat.skills.length} skills
                  </span>
                </div>
                <ChevronRight
                  size={14}
                  className={`shrink-0 transition-all duration-300 ${
                    activeCategory === i
                      ? "text-primary opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-2"
                  }`}
                />
              </button>
            ))}
          </motion.div>

          {/* Skills grid - right side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <div className="glass-card p-6 md:p-8 min-h-[280px]">
              <div className="flex items-center gap-3 mb-8">
                <div className={`w-2 h-2 rounded-full bg-${skillCategories[activeCategory].color} animate-pulse`} />
                <h3 className="font-display font-semibold text-foreground">
                  {skillCategories[activeCategory].title}
                </h3>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {skillCategories[activeCategory].skills.map((skill, j) => (
                  <motion.div
                    key={`${activeCategory}-${skill.name}`}
                    initial={{ opacity: 0, scale: 0.8, y: 15 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      duration: 0.4,
                      delay: j * 0.08,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="group glass-card-hover p-5 flex flex-col items-center text-center gap-3 cursor-default"
                  >
                    <span className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {skill.icon}
                    </span>
                    <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
