import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/data/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const Contact = () => {
  return (
    <section className="pt-20 pb-10" id="contato">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 tracking-tight">
              Vamos Trabalhar Juntos
            </h2>
            <p className="text-muted-foreground text-lg">
              Estou aberto a novos projetos e oportunidades. Entre em contato!
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-background dark:bg-zinc-900 p-8 md:p-10 rounded-2xl border-2 border-purple-500/20 dark:border-purple-400/20 shadow-lg hover:border-purple-500/50 dark:hover:border-purple-400/50 transition-all mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-1">
                      Email
                    </h4>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-muted-foreground hover:text-purple-500 transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-purple-500" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-1">
                      Localização
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      João Pessoa, Paraíba<br />Brasil
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                  Redes Sociais
                </h4>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border-2 border-purple-500/20 dark:border-purple-400/20 bg-background dark:bg-zinc-800 hover:bg-purple-500/5 hover:border-purple-500/50 dark:hover:border-purple-400/50 transition-all group"
                >
                  <Github className="h-5 w-5 text-foreground group-hover:text-purple-500" />
                  <span className="text-sm font-medium text-foreground">GitHub</span>
                  <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-purple-500" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border-2 border-purple-500/20 dark:border-purple-400/20 bg-background dark:bg-zinc-800 hover:bg-purple-500/5 hover:border-purple-500/50 dark:hover:border-purple-400/50 transition-all group"
                >
                  <Linkedin className="h-5 w-5 text-foreground group-hover:text-purple-500" />
                  <span className="text-sm font-medium text-foreground">LinkedIn</span>
                  <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-purple-500" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={fadeInUp}
            className="pt-8 border-t border-purple-500/20 dark:border-purple-400/20 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm"
          >
            <div>
              <h3 className="text-purple-500 font-bold text-lg mb-2">{siteConfig.name}</h3>
              <p className="text-muted-foreground">{siteConfig.tagline}</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">Links Rápidos</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-purple-500 transition-colors">Home</Link></li>
                <li><Link to="/projects" className="hover:text-purple-500 transition-colors">Projetos</Link></li>
                <li><Link to="/about" className="hover:text-purple-500 transition-colors">Sobre</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-muted-foreground mt-8 md:mt-0 text-right md:text-left">
                © 2025 {siteConfig.name}. Todos os direitos reservados.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
