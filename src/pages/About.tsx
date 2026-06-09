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
import { useTranslation, Trans } from "react-i18next";

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
              className="text-4xl md:text-6xl font-extrabold text-center mb-16 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary tracking-tight"
            >
              {t('about.title')}
            </motion.h1>

            {/* Hero Section - Photo + Bio */}
            <motion.section variants={fadeInUp} className="mb-16">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
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
                    <p>
                      <Trans i18nKey="about.bio.p2">
                        Sou <strong className="text-foreground">Caio Rafael de Oliveira</strong>, desenvolvedor Full Stack movido por curiosidade, aprendizado contínuo e pela vontade genuína de criar coisas que façam sentido para as pessoas. Acredito que tecnologia é, antes de tudo, uma ferramenta para <span className="text-primary font-medium">resolver problemas reais</span>, conectar pessoas e abrir caminhos.
                      </Trans>
                    </p>
                    <p>
                       <Trans i18nKey="about.bio.p3">
                        Tenho uma forte paixão por <strong className="text-foreground">empreendedorismo</strong>, por tirar ideias do papel e transformá-las em produtos e soluções com propósito. Gosto de pensar além do código: entender contextos, necessidades e impactos. É isso que torna um projeto vivo e relevante.
                      </Trans>
                    </p>
                    <p>
                       <Trans i18nKey="about.bio.p4">
                        Ao longo do caminho, participei ativamente de projetos acadêmicos e institucionais que me ensinaram sobre <span className="text-primary font-medium">liderança, colaboração e responsabilidade</span>, sempre buscando crescer e ajudar outros a crescerem comigo.
                      </Trans>
                    </p>
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
                    className="bg-card p-6 rounded-xl shadow-sm border border-border flex flex-col items-start text-left hover:border-primary/50 transition-colors"
                  >
                    <achievement.icon className="h-12 w-12 text-primary mb-4" />
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
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16 mb-20"
            >
              <Button asChild size="lg" variant="outline" className="border-2 border-primary/50 text-foreground shadow-lg shadow-primary/10 transition-all hover:-translate-y-1 hover:border-primary">
                <a href="/Caio Rafael de Oliveira - Resume.pdf" download="Caio Rafael de Oliveira - Resume.pdf" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  {t('hero.downloadCv')}
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
