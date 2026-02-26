import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code2, Brain, ArrowUpRight } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "B.Tech CSE", sub: "2023–2027", gradient: "from-primary/20 to-primary/5" },
  { icon: Briefcase, label: "2 Internships", sub: "Infosys · IOCL", gradient: "from-secondary/20 to-secondary/5" },
  { icon: Code2, label: "Full-Stack", sub: "Python · React · Django", gradient: "from-primary/20 to-secondary/5" },
  { icon: Brain, label: "AI & Analytics", sub: "ML · Data · Security", gradient: "from-accent/20 to-accent/5" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative">
      <div className="section-divider mb-32" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <div className="grid lg:grid-cols-12 gap-16">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-4"
          >
            <span className="section-label">About Me</span>
            <h2 className="section-heading mt-2">
              Crafting <span className="gradient-text">Intelligent</span> Solutions
            </h2>

            {/* Stat cards */}
            <div className="grid grid-cols-2 gap-3 mt-10">
              {highlights.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.4 + i * 0.1 }}
                  className="glass-card-hover p-4 flex flex-col items-center text-center gap-2"
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center`}>
                    <item.icon className="text-primary" size={18} />
                  </div>
                  <span className="font-display font-semibold text-xs">{item.label}</span>
                  <span className="text-[10px] text-muted-foreground leading-tight">{item.sub}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-8 space-y-6"
          >
            <div className="glass-card p-8 md:p-10 space-y-6">
              <p className="text-muted-foreground leading-relaxed text-lg">
                I'm <span className="text-foreground font-semibold">Manasa Barik</span>, a B.Tech Computer Science
                student (2023–2027) from Bhadrak, Odisha. I build robust, scalable systems
                that bridge web development with data intelligence.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Through internships at <span className="text-primary font-medium">Infosys Springboard</span> and{" "}
                <span className="text-primary font-medium">Indian Oil Corporation</span>, I've shipped
                real-time cyber threat dashboards, industrial safety automation, and RESTful APIs
                powering production systems.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                My stack spans Python, Django, Flask, React, MySQL, and OpenCV — with deep
                interest in AI, analytics, automation, and security.
              </p>
              <div className="pt-2 flex gap-6">
                <a href="#experience" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-300">
                  View Experience <ArrowUpRight size={16} />
                </a>
                <a href="#projects" className="inline-flex items-center gap-2 text-secondary font-medium text-sm hover:gap-3 transition-all duration-300">
                  See Projects <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
