import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code2, Brain, ArrowUpRight } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "B.Tech CSE", sub: "2023–2027", color: "primary" },
  { icon: Briefcase, label: "2 Internships", sub: "Infosys · IOCL", color: "secondary" },
  { icon: Code2, label: "Full-Stack", sub: "Python · React · Django", color: "primary" },
  { icon: Brain, label: "AI & Analytics", sub: "ML · Data · Security", color: "accent" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-28 relative">
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">About Me</span>
          <h2 className="section-heading">
            Crafting <span className="gradient-text">Intelligent</span> Solutions
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 mt-14">
          {/* Text - takes 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 space-y-6"
          >
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
            <div className="pt-2">
              <a href="#experience" className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all duration-300">
                View my experience <ArrowUpRight size={16} />
              </a>
            </div>
          </motion.div>

          {/* Cards - takes 2 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-2 grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="glass-card-hover p-5 flex flex-col items-center text-center gap-3"
              >
                <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary" size={22} />
                </div>
                <span className="font-display font-semibold text-sm">{item.label}</span>
                <span className="text-xs text-muted-foreground leading-tight">{item.sub}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
