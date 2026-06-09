import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Download, Mail, Code, GraduationCap, Monitor, Users } from "lucide-react";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import ParticlesBackground from "@/components/Background/Particles";
import Contact from "@/components/Contact";
import { useTranslation } from "react-i18next";

const About = () => {
  const { t } = useTranslation();
  const achievements = [
    {
      icon: Code,
      title: t('about.achievements.fullstack.title'),
      description: t('about.achievements.fullstack.description')
    },
    {
      icon: GraduationCap,
      title: t('about.achievements.teacher.title'),
      description: t('about.achievements.teacher.description')
    },
    {
      icon: Monitor,
      title: t('about.achievements.leader.title'),
      description: t('about.achievements.leader.description')
    },
    {
      icon: Users,
      title: t('about.achievements.mentor.title'),
      description: t('about.achievements.mentor.description')
    }
  ];

  // Fotos extras para mostrar hobbies/personalidade
  const extraPhotos = [
    { src: "/CAIO/3.jpg", alt: "1" },
    { src: "/CAIO/4.jpg", alt: "2" },
    { src: "/CAIO/6.jpg", alt: "3" },
  ];

  return (
    <>
      <Helmet>
        <title>{t('seo.about.title')}</title>
        <meta
          name="description"
          content={t('seo.about.description')}
        />
        <meta property="og:title" content={t('seo.about.title')} />
        <meta
          property="og:description"
          content={t('about.bio.p2')}
        />
      </Helmet>

      {/* Global Particles Background */}
      <div className="fixed inset-0 -z-10">
        <ParticlesBackground />
      </div>

      <Navbar />
      <main className="min-h-screen pt-24 pb-24">
        <div className="container mx-auto px-4 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            {/* Header */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl font-extrabold text-center mb-8 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary tracking-tight"
            >
              {t('about.title')}
            </motion.h1>

            {/* Hero Section - Photo + Bio */}
            <motion.section variants={fadeInUp} className="mb-10">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
                {/* Main Photo */}
                <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg border-4 border-border">
                  <img
                    src="/CAIO/5.jpg"
                    alt="Caio Rafael de Oliveira - Professional Photo"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bio */}
                <div className="flex-grow text-center md:text-left space-y-6">
                  <div className="text-lg leading-relaxed text-muted-foreground max-w-md md:max-w-none mx-auto space-y-4">
                    <p>
                      {t('about.bio.p1')}
                    </p>
                    <p>{t('about.bio.p2')}</p>
                    <p>{t('about.bio.p3')}</p>
                    <p>{t('about.bio.p4')}</p>
                  </div>

                  {/* Extra Photos */}
                  <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                    {extraPhotos.map((photo, index) => (
                      <div
                        key={index}
                        className="w-20 h-20 rounded-full overflow-hidden shadow-md border-2 border-border"
                      >
                        <img
                          src={photo.src}
                          alt={t('aria.photo', { number: photo.alt })}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            <motion.section variants={fadeInUp}>
              <h2 className="text-3xl font-extrabold text-center mb-10 text-foreground">
                {t('about.achievements.title')}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    custom={index}
                    className="group bg-card p-6 rounded-xl shadow-md border border-border border-l-4 border-l-primary/30 flex flex-col items-start text-left hover:border-primary/60 hover:border-l-primary hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-default"
                  >
                    <achievement.icon className="h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {achievement.title}
                    </h3>
                    <p className="text-muted-foreground text-base">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* CTA */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10 mb-16"
            >
              <Button asChild size="lg" className="shadow-xl shadow-primary/25 transition-all hover:-translate-y-1 hover:shadow-primary/40 px-8 text-base font-bold">
                <a href="/Caio Rafael de Oliveira - Resume.pdf" download="Caio Rafael de Oliveira - Resume.pdf" className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  {t('hero.downloadCv')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-2 border-primary/40 hover:border-primary transition-all hover:-translate-y-1 px-8 text-base">
                <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Get in Touch
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>

      <div className="border-t border-primary/10">
        <Contact />
      </div>
      
      <BackToTop />
    </>
  );
};

export default About;
