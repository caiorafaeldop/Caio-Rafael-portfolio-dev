import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, ArrowRight, Send, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { siteConfig } from "@/data/site";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation, Trans } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Contact = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio — ${form.name}`);
    const body = encodeURIComponent(`Nome: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => { setForm({ name: "", email: "", message: "" }); setSent(false); }, 4000);
  };

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
            className="bg-card rounded-2xl border border-primary/20 shadow-xl shadow-primary/5 overflow-hidden mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Info column */}
              <div className="p-8 md:p-10 space-y-6 border-b md:border-b-0 md:border-r border-primary/10 bg-primary/3">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{t('contact.email')}</h3>
                  <a href={`mailto:${siteConfig.email}`} className="text-primary hover:underline text-sm font-medium">
                    {siteConfig.email}
                  </a>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{t('contact.location')}</h3>
                  <p className="text-muted-foreground text-sm"><Trans i18nKey="contact.location_value" /></p>
                </div>

                <div className="pt-2">
                  <h3 className="text-sm font-bold text-foreground uppercase tracking-wide mb-3">{t('contact.socials')}</h3>
                  <div className="space-y-2">
                    <a href={siteConfig.socials.github} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-primary/15 bg-background/60 hover:bg-primary/5 hover:border-primary/40 transition-all group cursor-pointer">
                      <Github className="h-4 w-4 text-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium text-foreground">GitHub</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </a>
                    <a href={siteConfig.socials.linkedin} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-3 p-3 rounded-lg border border-primary/15 bg-background/60 hover:bg-primary/5 hover:border-primary/40 transition-all group cursor-pointer">
                      <Linkedin className="h-4 w-4 text-foreground group-hover:text-primary transition-colors" />
                      <span className="text-sm font-medium text-foreground">LinkedIn</span>
                      <ArrowRight className="h-3.5 w-3.5 ml-auto text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Form column */}
              <div className="p-8 md:p-10">
                {sent ? (
                  <div className="h-full flex flex-col items-center justify-center gap-4 text-center py-8">
                    <CheckCircle className="h-12 w-12 text-primary" />
                    <p className="text-lg font-bold text-foreground">Message sent!</p>
                    <p className="text-muted-foreground text-sm">Your email client should have opened. Talk soon!</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="contact-name" className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5 block">
                        Name
                      </label>
                      <Input
                        id="contact-name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5 block">
                        Email
                      </label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                        required
                        className="border-primary/20 focus:border-primary"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-message" className="text-xs font-bold uppercase tracking-wide text-muted-foreground mb-1.5 block">
                        Message
                      </label>
                      <textarea
                        id="contact-message"
                        placeholder="Tell me about your project..."
                        value={form.message}
                        onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                        required
                        rows={4}
                        className="w-full rounded-md border border-primary/20 bg-background px-3 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none transition-colors"
                      />
                    </div>
                    <Button type="submit" className="w-full shadow-lg shadow-primary/20 font-bold">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                )}
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
