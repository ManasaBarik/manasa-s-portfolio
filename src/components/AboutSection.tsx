import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Briefcase, Code2, Brain } from "lucide-react";

const highlights = [
  { icon: GraduationCap, label: "B.Tech CSE", sub: "2023–2027" },
  { icon: Briefcase, label: "2 Internships", sub: "Infosys & IOCL" },
  { icon: Code2, label: "Full-Stack", sub: "Python · React · Django" },
  { icon: Brain, label: "AI & Analytics", sub: "ML · Data · Security" },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-mono text-primary mb-2 tracking-widest uppercase">
            About Me
          </p>
          <h2 className="section-heading">
            Crafting <span className="gradient-text">Intelligent Solutions</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mt-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-5"
          >
            <p className="text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground font-semibold">Manasa Barik</span>, a B.Tech Computer Science
              student (2023–2027) from Bhadrak, Odisha, with a deep passion for building robust,
              scalable systems that merge web development with data intelligence.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Through internships at <span className="text-primary">Infosys Springboard</span> and{" "}
              <span className="text-primary">Indian Oil Corporation Limited</span>, I've designed
              real-time cyber threat dashboards, industrial safety automation systems, and RESTful
              APIs that drive production-ready solutions.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              My tech stack spans Python, Django, Flask, React, MySQL, and OpenCV — with a strong
              foundation in AI, analytics, automation, and security systems. I thrive at the
              intersection of software engineering and intelligent systems.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {highlights.map((item, i) => (
              <div
                key={item.label}
                className="glass-card-hover p-5 flex flex-col items-center text-center gap-3"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon className="text-primary" size={24} />
                </div>
                <span className="font-semibold text-sm">{item.label}</span>
                <span className="text-xs text-muted-foreground">{item.sub}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
