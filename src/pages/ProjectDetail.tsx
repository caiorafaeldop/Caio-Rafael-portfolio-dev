import { useParams, Link, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { useState, useCallback } from "react";
import {
  ArrowLeft,
  Github,
  ExternalLink,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import ReactMarkdown from "react-markdown";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSlideChange = useCallback((api: CarouselApi) => {
    if (!api) return;
    setActiveIndex(api.selectedScrollSnap());
  }, []);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="min-h-screen pt-32 pb-24">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl font-bold mb-4">Projeto não encontrado</h1>
            <Button asChild>
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar para Projetos
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <Helmet>
        <title>{`${project.title} - ${siteConfig.name}`}</title>
        <meta name="description" content={project.shortDescription} />
        <meta
          property="og:title"
          content={`${project.title} - ${siteConfig.name}`}
        />
        <meta property="og:description" content={project.shortDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CreativeWork",
            name: project.title,
            description: project.shortDescription,
            datePublished: `${project.year}-01-01`,
            author: {
              "@type": "Person",
              name: siteConfig.name,
            },
          })}
        </script>
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
            <motion.div variants={fadeInUp} className="mb-8">
              <Button
                variant="ghost"
                onClick={() => navigate(-1)}
                className="mb-4"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Voltar
              </Button>
            </motion.div>

            <motion.article
              variants={fadeInUp}
              className="bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 rounded-2xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex-1">
                    <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
                    <div className="flex items-center gap-2 text-muted-foreground mb-4">
                      <Calendar className="h-4 w-4" />
                      <span>{project.year}</span>
                    </div>
                    <p className="text-lg text-muted-foreground mb-6">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {project.gallery && project.gallery.length > 0 && (
                  <div className="mb-8">
                    <h2 className="text-xl font-bold mb-4">
                      Galeria do Projeto
                    </h2>
                    <Carousel
                      className="w-full"
                      opts={{
                        loop: true,
                        align: "center",
                      }}
                      setApi={(api) => {
                        api?.on("select", () => handleSlideChange(api));
                      }}
                    >
                      <CarouselContent>
                        {project.gallery.map((image, index) => (
                          <CarouselItem key={index}>
                            <div className="p-1">
                              <div className="overflow-hidden rounded-xl border border-glass-border/20 shadow-lg">
                                <img
                                  src={image}
                                  alt={`${project.title} - Imagem ${index + 1}`}
                                  className="w-full h-auto object-cover aspect-video hover:scale-105 transition-transform duration-300"
                                />
                              </div>
                            </div>
                          </CarouselItem>
                        ))}
                      </CarouselContent>
                      <div className="flex flex-col items-center gap-2 mt-4">
                        <div className="flex justify-center gap-2">
                          <CarouselPrevious className="relative static left-0 translate-y-0 mr-2" />
                          <CarouselNext className="relative static right-0 translate-y-0" />
                        </div>
                        <div className="flex gap-1 mt-2">
                          {project.gallery.map((_, index) => (
                            <div
                              key={index}
                              className={`w-2 h-2 rounded-full mx-0.5 transition-colors duration-300 ${index === activeIndex ? "bg-primary" : "bg-muted-foreground/30"}`}
                            />
                          ))}
                        </div>
                      </div>
                    </Carousel>
                  </div>
                )}

                {project.cover && !project.gallery && (
                  <div className="mb-8">
                    <div className="overflow-hidden rounded-xl border border-glass-border/20">
                      <img
                        src={project.cover}
                        alt={project.title}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>
                )}

                {project.longDescription && (
                  <div className="prose prose-invert max-w-none mb-8">
                    <ReactMarkdown>{project.longDescription}</ReactMarkdown>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  {project.responsibilities && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">
                        Responsabilidades
                      </h2>
                      <ul className="space-y-2">
                        {project.responsibilities.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span className="text-muted-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {project.results && (
                    <div>
                      <h2 className="text-xl font-bold mb-4">Resultados</h2>
                      <ul className="space-y-2">
                        {project.results.map((item, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-primary mt-1.5">•</span>
                            <span className="text-muted-foreground">
                              {item}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                <div className="mb-8">
                  <h2 className="text-xl font-bold mb-4">Stack Tecnológico</h2>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-muted/50 text-muted-foreground rounded-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {project.links && (
                  <div className="flex gap-4">
                    {project.links.github && (
                      <Button asChild>
                        <a
                          href={project.links.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="mr-2 h-4 w-4" />
                          Ver Código
                        </a>
                      </Button>
                    )}
                    {project.links.live && (
                      <Button asChild variant="outline">
                        <a
                          href={project.links.live}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Ver Demo
                        </a>
                      </Button>
                    )}
                  </div>
                )}
              </div>
            </motion.article>

            {/* Navigation */}
            <motion.div
              variants={fadeInUp}
              className="mt-12 grid md:grid-cols-2 gap-4"
            >
              {prevProject ? (
                <Link
                  to={`/projects/${prevProject.slug}`}
                  className="group bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 rounded-2xl p-6 hover:border-primary/30 transition-all"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                    <span className="text-sm text-muted-foreground">
                      Projeto Anterior
                    </span>
                  </div>
                  <h3 className="font-semibold">{prevProject.title}</h3>
                </Link>
              ) : (
                <div />
              )}

              {nextProject && (
                <Link
                  to={`/projects/${nextProject.slug}`}
                  className="group bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 rounded-2xl p-6 hover:border-primary/30 transition-all text-right"
                >
                  <div className="flex items-center justify-end gap-3 mb-2">
                    <span className="text-sm text-muted-foreground">
                      Próximo Projeto
                    </span>
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                  <h3 className="font-semibold">{nextProject.title}</h3>
                </Link>
              )}
            </motion.div>
          </motion.div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default ProjectDetail;
