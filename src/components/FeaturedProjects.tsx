import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { projects } from "@/data/projects";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";
import { fadeInUp, staggerContainer } from "@/lib/animations";

// Componente de Carousel automático
const ImageCarousel = ({ images, alt }: { images: string[]; alt: string }) => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000); // Troca a cada 3 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrev = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  if (images.length === 0) return null;

  return (
    <div className="relative group overflow-hidden rounded-xl">
      <div className="relative aspect-video">
        {images.map((image, index) => (
          <img
            key={image}
            src={image}
            alt={`${alt} - ${t('aria.project_image', { number: index + 1 })}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>
      
      {/* Navigation arrows */}
      {images.length > 1 && (
        <>
          <button
            onClick={goToPrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            aria-label={t('aria.prev_image')}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/70"
            aria-label={t('aria.next_image')}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </>
      )}

      {/* Dots indicator */}
      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentIndex
                  ? "bg-white w-4"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              aria-label={t('aria.go_to_image', { number: index + 1 })}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const FeaturedProjects = () => {
  const { t } = useTranslation();
  const featuredProjects = projects.filter((p) => p.featured);

  return (
    <section className="py-16 md:py-24" id="projetos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary tracking-tight">
              {t('projects.featured.title')}
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              {t('projects.featured.subtitle')}
            </p>
          </motion.div>

          {/* Project Cards - Alternating Layout */}
          <div className="space-y-12 md:space-y-16">
            {featuredProjects.map((project, index) => {
              const allImages = [
                project.cover,
                ...(project.gallery || [])
              ].filter(Boolean) as string[];

              return (
                <motion.article
                  key={project.slug}
                  variants={fadeInUp}
                  className="relative flex flex-col justify-center rounded-3xl overflow-hidden border border-primary/15 shadow-xl shadow-primary/5 hover:shadow-primary/10 hover:border-primary/30 transition-all duration-500 group"
                >
                  {/* Background gradient */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/8 via-transparent to-secondary/8" />

                  <div className={`relative z-10 grid grid-cols-1 md:grid-cols-2 gap-0 items-stretch ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : ''
                  }`}>
                    {/* Image Carousel */}
                    <div className={`relative overflow-hidden bg-muted/30 min-h-[280px] md:min-h-[400px] ${index % 2 === 1 ? 'md:order-2' : 'md:order-1'}`}>
                      {allImages.length > 0
                        ? <ImageCarousel images={allImages} alt={project.title} />
                        : <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                            <span className="text-6xl font-black text-primary/20">{project.title[0]}</span>
                          </div>
                      }
                    </div>

                    {/* Content */}
                    <div className={`p-8 md:p-10 flex flex-col justify-center text-center md:text-left ${index % 2 === 1 ? 'md:order-1' : 'md:order-2'}`}>
                      <h3 
                        className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-primary"
                      >
                        {t(`projects.${project.slug}.title`)}
                      </h3>
                      <span className="text-lg font-mono text-muted-foreground mb-6 block">
                        {project.year.replace('Presente', t('common.present'))}
                      </span>
                      <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-6 max-w-prose md:mx-0 mx-auto">
                        {t(`projects.${project.slug}.shortDescription`)}
                      </p>

                      {/* Stack - DESTAQUE PRINCIPAL */}
                      <div className="mb-6">
                        <h4 className="text-base font-bold text-foreground mb-3">
                          {t('projects.stack_label')}
                        </h4>
                        <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                          {project.stack.map((tech) => (
                            <span
                              key={tech}
                              className="px-4 py-2 bg-primary/10 text-sm font-semibold text-primary rounded-lg border border-primary/20"
                            >
                              {t(`stack.${tech}`, tech)}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Tags - menores e mais sutis */}
                      <div className="flex flex-wrap gap-2 justify-center md:justify-start mb-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[10px] uppercase font-medium tracking-wider px-2 py-0.5 text-muted-foreground bg-muted/50 rounded"
                          >
                            {t(`tags.${tag}`, tag)}
                          </span>
                        ))}
                      </div>

                      {/* Actions */}
                      <div className="pt-5 border-t border-primary/15 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3">
                        {project.links?.live && (
                          <Button asChild>
                            <a
                              href={project.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2"
                            >
                              {t('projects.actions.view_site')}
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        {project.links?.github && (
                          <Button asChild variant="outline" size="icon">
                            <a
                              href={project.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={t('aria.view_code_github')}
                            >
                              <Github className="h-4 w-4" />
                            </a>
                          </Button>
                        )}
                        <Button asChild variant="ghost">
                          <Link to={`/projects/${project.slug}`} className="flex items-center gap-2">
                            {t('projects.actions.details')}
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Ver Todos */}
          <motion.div variants={fadeInUp} className="mt-16 flex justify-center">
            <Button asChild variant="outline" size="lg" className="rounded-full group">
              <Link to="/projects" className="flex items-center gap-2">
                {t('projects.actions.view_all')}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
