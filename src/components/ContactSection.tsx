import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Github, Linkedin, Mail, Send, ArrowUpRight, MapPin } from "lucide-react";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "manasabarik8658@gmail.com",
    href: "mailto:manasabarik8658@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "manasa-barik",
    href: "https://www.linkedin.com/in/manasa-barik",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "ManasaBarik",
    href: "https://github.com/ManasaBarik",
  },
];

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks for reaching out! I'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  const inputClass =
    "w-full px-5 py-4 bg-muted/20 border border-border/40 rounded-2xl text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-primary/40 focus:ring-2 focus:ring-primary/10 transition-all duration-300 text-sm backdrop-blur-sm";

  return (
    <section id="contact" className="py-32 relative">
      <div className="section-divider mb-32" />
      <div className="max-w-6xl mx-auto px-6" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="section-label justify-center">Contact</span>
          <h2 className="section-heading">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto mt-4">
            Have a project in mind or want to collaborate? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Form - 3 cols */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="lg:col-span-3 glass-card p-8 space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Name"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className={inputClass}
              />
              <input
                type="email"
                placeholder="Email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className={inputClass}
              />
            </div>
            <textarea
              placeholder="Your message..."
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
            />
            <button type="submit" className="glow-button inline-flex items-center gap-2 text-sm w-full sm:w-auto justify-center">
              <Send size={16} /> Send Message
            </button>
          </motion.form>

          {/* Social cards - 2 cols */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2 flex flex-col gap-4"
          >
            {/* Location card */}
            <div className="glass-card p-5 flex items-center gap-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
                <MapPin className="text-accent" size={18} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-0.5">Location</p>
                <p className="font-medium text-sm">Bhadrak, Odisha, India</p>
              </div>
            </div>

            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                className="glass-card-hover p-5 flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <s.icon className="text-primary" size={18} />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs text-muted-foreground mb-0.5">{s.label}</p>
                  <p className="font-medium text-sm truncate">{s.value}</p>
                </div>
                <ArrowUpRight size={14} className="text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
