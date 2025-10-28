import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Project } from "@/data/projects";
import { Button } from "./ui/button";
import { fadeInUp } from "@/lib/animations";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <motion.article
      variants={fadeInUp}
      className="group relative bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <span className="text-sm text-muted-foreground">{project.year}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-6">{project.shortDescription}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md"
            >
              {tech}
            </span>
          ))}
          {project.stack.length > 4 && (
            <span className="px-2 py-1 text-xs bg-muted/50 text-muted-foreground rounded-md">
              +{project.stack.length - 4} mais
            </span>
          )}
        </div>

        <div className="flex items-center gap-3">
          <Button asChild variant="default" className="group/btn">
            <Link to={`/projects/${project.slug}`}>
              Ver Detalhes
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
          {project.links?.github && (
            <Button asChild variant="ghost" size="icon">
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
          )}
          {project.links?.live && (
            <Button asChild variant="ghost" size="icon">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Live Demo"
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-gradient-accent opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none" />
    </motion.article>
  );
};

export default ProjectCard;
