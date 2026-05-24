import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/data/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation, Trans } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();
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
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary tracking-tight">
              {t('contact.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('contact.description')}
            </p>
          </motion.div>

          {/* Contact Card */}
          <motion.div
            variants={fadeInUp}
            className="bg-card p-8 md:p-10 rounded-2xl border-2 border-primary/20 shadow-lg hover:border-primary/50 transition-all mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Contact Info */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-1">
                      {t('contact.email')}
                    </h4>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-1">
                      {t('contact.location')}
                    </h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      <Trans i18nKey="contact.location_value" />
                    </p>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="space-y-4">
                <h4 className="text-sm font-bold text-foreground uppercase tracking-wide mb-2">
                  {t('contact.socials')}
                </h4>
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border-2 border-primary/20 bg-background hover:bg-primary/5 hover:border-primary/50 transition-all group"
                >
                  <Github className="h-5 w-5 text-foreground group-hover:text-primary" />
                  <span className="text-sm font-medium text-foreground">GitHub</span>
                  <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary" />
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border-2 border-primary/20 bg-background hover:bg-primary/5 hover:border-primary/50 transition-all group"
                >
                  <Linkedin className="h-5 w-5 text-foreground group-hover:text-primary" />
                  <span className="text-sm font-medium text-foreground">LinkedIn</span>
                  <ArrowRight className="h-4 w-4 ml-auto text-muted-foreground group-hover:text-primary" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Footer */}
          <motion.div
            variants={fadeInUp}
            className="pt-8 border-t border-primary/20 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm"
          >
            <div>
              <h3 className="text-primary font-bold text-lg mb-2">{siteConfig.name}</h3>
              <p className="text-muted-foreground">{t('footer.tagline')}</p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-3">{t('contact.quick_links')}</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><Link to="/" className="hover:text-primary transition-colors">{t('navbar.home')}</Link></li>
                <li><Link to="/projects" className="hover:text-primary transition-colors">{t('navbar.projects')}</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">{t('navbar.about')}</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-muted-foreground mt-8 md:mt-0 text-right md:text-left">
                © 2025 {siteConfig.name}. {t('contact.rights')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
