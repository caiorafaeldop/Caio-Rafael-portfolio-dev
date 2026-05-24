import { motion } from "framer-motion";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Link } from "react-router-dom";
import { Project, Learning } from "@/data/projects";
import { Button } from "./ui/button";
import { fadeInUp } from "@/lib/animations";
import { useTranslation } from "react-i18next";

interface ProjectCardProps {
  project: Project;
}

const getLearningColor = (category: Learning["category"]) => {
  switch (category) {
    case "hard":
      return "bg-primary/10 text-primary border-primary/20";
    case "methodology":
      return "bg-primary/15 text-primary border-primary/25";
    case "soft":
      return "bg-muted text-foreground border-primary/15";
    default:
      return "bg-muted/50 text-muted-foreground";
  }
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  const { t } = useTranslation();
  
  // Pegar apenas os 5 primeiros learnings para não poluir
  const displayLearnings = project.learnings?.slice(0, 5) || [];
  const hasMoreLearnings = (project.learnings?.length || 0) > 5;

  return (
    <motion.article
      variants={fadeInUp}
      className="group relative bg-card backdrop-blur-xl border-2 border-primary/20 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300"
    >
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-primary font-bold">
                {t(`projects.${project.slug}.title`)}
              </h3>
              <span className="text-sm text-muted-foreground">{project.year.replace('Presente', t('common.present'))}</span>
            </div>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 text-[10px] uppercase font-medium text-muted-foreground bg-muted/50 rounded"
                >
                  {t(`tags.${tag}`, tag)}
                </span>
              ))}
            </div>
          </div>
        </div>

        <p className="text-muted-foreground mb-4">{t(`projects.${project.slug}.shortDescription`)}</p>

        {/* Competências desenvolvidas */}
        {displayLearnings.length > 0 && (
          <div className="mb-4">
            <p className="text-xs text-muted-foreground mb-2 font-medium uppercase tracking-wider">
              {t('projectCard.learnings')}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {displayLearnings.map((learning) => (
                <span
                  key={learning.skill}
                  className={`px-2 py-0.5 text-xs font-medium rounded-md border ${getLearningColor(learning.category)}`}
                >
                  {t(`stack.${learning.skill}`, learning.skill)}
                </span>
              ))}
              {hasMoreLearnings && (
                <span className="px-2 py-0.5 text-xs text-muted-foreground">
                  +{(project.learnings?.length || 0) - 5} {t('projectCard.more')}
                </span>
              )}
            </div>
          </div>
        )}

        {/* Tech Stack - DESTAQUE */}
        <div className="mb-6">
          <p className="text-xs text-foreground mb-2 font-bold uppercase tracking-wider">
            {t('projectCard.technologies')}
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 5).map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-semibold bg-primary/10 text-primary rounded-lg border border-primary/20"
              >
                {t(`stack.${tech}`, tech)}
              </span>
            ))}
            {project.stack.length > 5 && (
              <span className="px-3 py-1.5 text-xs bg-muted/50 text-muted-foreground rounded-lg">
                +{project.stack.length - 5} {t('projectCard.more')}
              </span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-3 pt-4 border-t border-primary/20">
          <Button asChild className="shadow-lg shadow-primary/20">
            <Link to={`/projects/${project.slug}`}>
              {t('projectCard.viewDetails')}
              <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </Button>
          {project.links?.github && (
            <Button asChild variant="outline" size="icon" className="border-primary/30 hover:bg-primary/10">
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
            <Button asChild variant="outline" size="icon" className="border-primary/30 hover:bg-primary/10">
              <a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t('projects.actions.view_site')}
              >
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Hover effect overlay */}
      <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
    </motion.article>
  );
};

export default ProjectCard;
