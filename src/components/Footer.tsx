import { Github, Linkedin, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-12 border-t border-border/30">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <span className="text-lg font-display font-bold gradient-text">MB</span>
          <span className="text-xs text-muted-foreground">© 2025 Manasa Barik</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="https://github.com/ManasaBarik" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Github size={18} />
          </a>
          <a href="https://www.linkedin.com/in/manasa-barik" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Linkedin size={18} />
          </a>
          <a href="mailto:manasabarik8658@gmail.com" className="text-muted-foreground hover:text-primary transition-colors p-2">
            <Mail size={18} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
