import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import { Button } from "./ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const FeaturedProjects = () => {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
        >
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Projetos em Destaque
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Uma seleção dos meus trabalhos mais recentes e impactantes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>

          <motion.div variants={fadeInUp} className="text-center">
            <Button asChild size="lg" variant="outline" className="group">
              <Link to="/projects">
                Ver Todos os Projetos
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
