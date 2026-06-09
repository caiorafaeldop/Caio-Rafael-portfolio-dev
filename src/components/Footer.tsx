import { Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/data/site";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-primary/15 bg-card/60 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4 bg-gradient-accent bg-clip-text text-transparent">
              {siteConfig.name}
            </h3>
            <p className="text-muted-foreground mb-4">{t('footer.tagline')}</p>
            <div className="flex items-center gap-3">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-primary/20 hover:border-primary/60 hover:text-primary transition-colors cursor-pointer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg border border-primary/20 hover:border-primary/60 hover:text-primary transition-colors cursor-pointer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="p-2 rounded-lg border border-primary/20 hover:border-primary/60 hover:text-primary transition-colors cursor-pointer"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('contact.quick_links')}</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('navbar.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('navbar.projects')}
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('navbar.about')}
                </Link>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {t('navbar.contact')}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">{t('navbar.contact')}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li>{t('footer.location')}</li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {siteConfig.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-primary/10 text-center text-muted-foreground text-sm">
          <p>
            © {currentYear} {siteConfig.name}. {t('contact.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
