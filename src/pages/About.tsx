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
                <h2 className="text-2xl font-bold mb-4">Minha História</h2>
                <p className="text-muted-foreground mb-4">
                  Sou um desenvolvedor Full-Stack com mais de 4 anos de experiência
                  criando aplicações web modernas e escaláveis. Minha jornada começou
                  com curiosidade sobre como os sites funcionavam, e rapidamente se
                  transformou em uma paixão por construir experiências digitais que
                  fazem a diferença.
                </p>
                <p className="text-muted-foreground mb-4">
                  Ao longo da minha carreira, tive a oportunidade de trabalhar com
                  startups inovadoras e empresas estabelecidas, sempre focado em
                  entregar soluções de alta qualidade que atendem às necessidades
                  reais dos usuários.
                </p>
                <p className="text-muted-foreground">
                  Sou especializado em React, Node.js e arquiteturas de
                  microserviços, mas sempre estou aprendendo novas tecnologias e
                  melhores práticas. Acredito em código limpo, testes automatizados e
                  na importância de uma boa documentação.
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={fadeInUp}
              className="bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 rounded-2xl p-8 mb-8"
            >
              <h2 className="text-2xl font-bold mb-6">Valores & Princípios</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2 text-primary">
                    Qualidade sobre Quantidade
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Prefiro entregar menos funcionalidades com excelência do que
                    muitas com qualidade comprometida.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">
                    Aprendizado Contínuo
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    A tecnologia evolui rapidamente, e eu me comprometo a estar
                    sempre atualizado com as melhores práticas.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">
                    Colaboração
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Acredito que os melhores resultados vêm do trabalho em equipe e
                    da troca de ideias.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2 text-primary">
                    Impacto Real
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    Busco projetos que fazem diferença na vida das pessoas e
                    resolvem problemas reais.
                  </p>
                </div>
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
