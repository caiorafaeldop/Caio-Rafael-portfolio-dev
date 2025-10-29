import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const About = () => {
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

      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Sobre Mim</h1>
              <p className="text-muted-foreground text-lg">
                Desenvolvedor apaixonado por criar soluções inovadoras
              </p>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 rounded-2xl p-8 mb-8"
            >
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-bold mb-4">Sobre Mim</h2>
                <p className="text-muted-foreground mb-4">
                  Sou um desenvolvedor Full Stack com sólida experiência em
                  React, Node.js e práticas modernas de desenvolvimento.
                  Graduado em Ciência da Computação pela UFPB, tenho paixão por
                  ensinar tecnologia, com histórico comprovado como educador e
                  mentor em projetos sociais e acadêmicos.
                </p>
                <p className="text-muted-foreground mb-4">
                  Atualmente trabalho como Desenvolvedor Full Stack na LAKS,
                  onde desenvolvo soluções com React, TypeScript, Node, Prisma e
                  PostgreSQL, aplicando metodologias ágeis e boas práticas de
                  UX/UI em projetos voltados para gestão de Franquias.
                </p>
                <p className="text-muted-foreground">
                  Além do desenvolvimento, dedico-me ao ensino de programação,
                  compartilhando conhecimento e inspirando novos talentos na
                  área de tecnologia.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Formação Acadêmica</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-1 text-primary">
                    Universidade Federal da Paraíba, João Pessoa
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Bacharelado em Ciência da Computação (2021 - 2025)
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-primary">
                    Século Colégio e Curso, João Pessoa
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Ensino Médio (2017 - 2019)
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Feitos Acadêmicos</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-muted-foreground text-sm">
                    Monitoria Acadêmica em Estrutura de Dados (UFPB, 2023-2024)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-muted-foreground text-sm">
                    Ensino de Análise de Dados como Atividade Extensionista
                    (UFPB, 2024)
                  </p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-muted-foreground text-sm">
                    Membro do PET-Computação (UFPB, 2023-2025): grupo acadêmico
                    restrito a alunos de desempenho acadêmico elevado
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Projetos Voluntários</h2>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <p className="text-muted-foreground text-sm">
                    Projeto Full Stack voluntário para a Rede Feminina de
                    Combate ao Câncer, responsável por aumentar a arrecadação e
                    melhorar a gestão de doações através de uma plataforma
                    digital integrada.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Idiomas</h2>
              <div className="flex items-start gap-2">
                <span className="text-primary mt-1">•</span>
                <p className="text-muted-foreground text-sm">
                  Inglês Avançado - Wizard (2023-2025)
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Button asChild size="lg">
                <a href={`mailto:${siteConfig.email}`}>
                  <Mail className="mr-2 h-4 w-4" />
                  Entre em Contato
                </a>
              </Button>
              <Button asChild size="lg" variant="outline">
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
