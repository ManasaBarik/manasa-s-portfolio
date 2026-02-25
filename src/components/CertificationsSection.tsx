import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink } from "lucide-react";

const certifications = [
  { title: "Python for Data Science", issuer: "NPTEL", icon: "🐍" },
  { title: "Data Science", issuer: "Infosys Springboard", icon: "📊" },
  { title: "Power BI Foundation", issuer: "Infosys Springboard", icon: "📈" },
];

const CertificationsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-28 relative">
      <div className="section-divider mb-28" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="section-label">Certifications</span>
          <h2 className="section-heading">
            Continuous <span className="gradient-text">Learning</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.15 }}
              className="glass-card-hover p-6 group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-3xl">{cert.icon}</span>
                <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="font-display font-semibold mb-2 group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground font-mono">{cert.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
