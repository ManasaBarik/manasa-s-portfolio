import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { title: "Python for Data Science", issuer: "NPTEL", icon: "🐍", gradient: "from-primary/15 to-primary/5" },
  { title: "Data Science", issuer: "Infosys Springboard", icon: "📊", gradient: "from-secondary/15 to-secondary/5" },
  { title: "Power BI Foundation", issuer: "Infosys Springboard", icon: "📈", gradient: "from-accent/15 to-accent/5" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-32 relative">
      <div className="section-divider mb-32" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center">Certifications</span>
          <h2 className="section-heading">
            Continuous <span className="gradient-text">Learning</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 30, rotateX: 5 }}
              animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="glass-card-hover p-6 group relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-5">
                  <span className="text-4xl">{cert.icon}</span>
                  <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <h3 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <div className="flex items-center gap-2">
                  <Award size={12} className="text-muted-foreground" />
                  <p className="text-sm text-muted-foreground font-mono">{cert.issuer}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
