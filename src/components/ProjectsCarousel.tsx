import { Card } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { projects } from "@/data/projects";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const ProjectsCarousel = () => {
  const { t } = useTranslation();

  // Coleta todas as imagens dos projetos (cover + gallery)
  const projectImages = projects
    .filter((project) => project.featured)
    .flatMap((project) => {
      const images = [];
      if (project.cover) {
        images.push({
          src: project.cover,
          title: project.title,
          slug: project.slug,
          description: project.shortDescription,
          tags: project.tags,
        });
      }
      if (project.gallery && project.gallery.length > 0) {
        images.push(
          ...project.gallery.slice(0, 2).map((img) => ({
            src: img,
            title: project.title,
            slug: project.slug,
            description: project.shortDescription,
            tags: project.tags,
          }))
        );
      }
      return images;
    });

  return (
    <section className="py-20 px-4 bg-background/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t('projects.gallery', 'Galeria de Projetos')}
          </h2>
        </div>

        <Carousel
          className="w-full max-w-5xl mx-auto"
          plugins={[
            Autoplay({
              delay: 4000,
              stopOnInteraction: true,
            }),
          ]}
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent>
            {projectImages.map((image, index) => (
              <CarouselItem
                key={`${image.slug}-${index}`}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <Link to={`/projects/${image.slug}`}>
                  <Card className="overflow-hidden group cursor-pointer border-2 transition-all duration-300 hover:border-primary hover:shadow-lg">
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={image.src}
                        alt={t(`projects.${image.slug}.title`)}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <h3 className="text-white font-bold text-lg mb-1">
                          {t(`projects.${image.slug}.title`)}
                        </h3>
                        <p className="text-white/90 text-sm line-clamp-2">
                          {t(`projects.${image.slug}.shortDescription`)}
                        </p>
                      </div>
                    </div>
                    <div className="p-4">
                      <div className="flex flex-wrap gap-2">
                        {image.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
