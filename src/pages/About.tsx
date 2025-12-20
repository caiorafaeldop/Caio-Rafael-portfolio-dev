import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Download, Mail, Code, GraduationCap, Monitor, Users } from "lucide-react";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import ParticlesBackground from "@/components/Background/Particles";

const About = () => {
  const achievements = [
    {
      icon: Code,
      title: "Desenvolvedor Full Stack",
      description: "Desenvolvimento de soluções robustas com React, TypeScript, Node, Prisma e PostgreSQL, focado em APIs REST e UX/UI na LAKS."
    },
    {
      icon: GraduationCap,
      title: "Professor de Programação",
      description: "Planejamento e aplicação de aulas de programação para mais de 50 alunos, focando no ensino de tecnologia para crianças e adultos."
    },
    {
      icon: Monitor,
      title: "Líder de Projetos de TI",
      description: "Liderança do desenvolvimento do site institucional do Núcleo Colab UFPB, coordenando equipe e entregas com metodologias ágeis."
    },
    {
      icon: Users,
      title: "Mentor de Jovens Desenvolvedores",
      description: "Orientação e mentoria de novos talentos na área de desenvolvimento no Projeto CODE (FUNETEC), promovendo crescimento profissional."
    }
  ];

  // Fotos extras para mostrar hobbies/personalidade
  const extraPhotos = [
    { src: "/CAIO/3.jpg", alt: "Foto 1" },
    { src: "/CAIO/4.jpg", alt: "Foto 2" },
    { src: "/CAIO/6.jpg", alt: "Foto 3" },
  ];

  return (
    <>
      <Helmet>
        <title>{`Sobre - ${siteConfig.name}`}</title>
        <meta
          name="description"
          content="Conheça mais sobre minha trajetória, experiências e paixão por desenvolvimento."
        />
        <meta property="og:title" content={`Sobre - ${siteConfig.name}`} />
        <meta
          property="og:description"
          content="Conheça mais sobre minha trajetória, experiências e paixão por desenvolvimento."
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
              className="text-4xl font-extrabold text-center mb-16 text-foreground"
            >
              Conheça o Desenvolvedor
            </motion.h1>

            {/* Hero Section - Photo + Bio */}
            <motion.section variants={fadeInUp} className="mb-16">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mb-12">
                {/* Main Photo */}
                <div className="flex-shrink-0 w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden shadow-lg border-4 border-border dark:border-zinc-700">
                  <img
                    src="/CAIO/5.jpg"
                    alt="Caio Rafael de Oliveira - Professional Photo"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Bio */}
                <div className="flex-grow text-center md:text-left">
                  <p className="text-lg leading-relaxed text-muted-foreground mb-6 max-w-md md:max-w-none mx-auto">
                    Olá! Sou <strong className="text-foreground">Caio Rafael de Oliveira</strong>, um desenvolvedor Full Stack apaixonado por criar soluções digitais. 
                    Fora do código, adoro explorar novos lugares, passar tempo com amigos e família, e sempre busco aprender algo novo.
                    Minha jornada é movida por aprendizado contínuo e pela vontade de impactar o mundo através da tecnologia.
                  </p>

                  {/* Extra Photos */}
                  <div className="flex justify-center md:justify-start gap-4 flex-wrap">
                    {extraPhotos.map((photo, index) => (
                      <div
                        key={index}
                        className="w-20 h-20 rounded-full overflow-hidden shadow-md border-2 border-border dark:border-zinc-700"
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.section>

            {/* Achievements Section */}
            <motion.section variants={fadeInUp}>
              <h2 className="text-3xl font-extrabold text-center mb-10 text-foreground">
                Principais Conquistas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    custom={index}
                    className="bg-background dark:bg-zinc-900 p-6 rounded-xl shadow-sm border border-border dark:border-zinc-800 flex flex-col items-start text-left hover:border-primary/50 dark:hover:border-purple-500/50 transition-colors"
                  >
                    <achievement.icon className="h-12 w-12 text-purple-500 mb-4" />
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
              className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-16"
            >
              <Button asChild size="lg" className="bg-purple-600 hover:bg-primary">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Entre em Contato
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-border dark:border-zinc-700 hover:bg-muted dark:hover:bg-zinc-800">
                <a href="/cv.pdf" download>
                  <Download className="mr-2 h-4 w-4" />
                  Download CV
                </a>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default About;
