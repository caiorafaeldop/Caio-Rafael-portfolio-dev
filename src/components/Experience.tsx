import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { experiences } from "@/data/experience";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const Experience = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 md:py-28" id="experiencia">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary tracking-tight">
              {t('experience.title')}
            </h2>
            <p className="text-muted-foreground text-lg">
              {t('experience.subtitle')}
            </p>
          </motion.div>

          {/* Timeline */}
          <div className="relative space-y-12">
            {/* Timeline line */}
            <div className="absolute left-5 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:-translate-x-px" />

            {experiences.map((exp, index) => {
              const isCurrentJob = exp.period.includes("Presente");
              const isTeacher = exp.role.includes("Professor");
              const Icon = isTeacher ? GraduationCap : Briefcase;
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={exp.id}
                  variants={fadeInUp}
                  className={`relative flex items-center justify-between md:justify-normal ${
                    isEven ? '' : 'md:flex-row-reverse'
                  } group`}
                >
                  {/* Icon */}
                  <div className={`
                    flex items-center justify-center w-10 h-10 rounded-full shrink-0 z-10
                    ${isCurrentJob 
                      ? 'border-2 border-primary bg-primary/20' 
                      : 'border-2 border-primary/30 bg-card'
                    }
                    md:order-1 ${isEven ? 'md:-translate-x-1/2' : 'md:translate-x-1/2'}
                  `}>
                    <Icon className={`h-4 w-4 ${isCurrentJob ? 'text-primary' : 'text-primary/70'}`} />
                  </div>

                  {/* Card */}
                  <div className={`
                    w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] 
                    p-6 rounded-xl border-2 border-primary/20 bg-card
                    shadow-sm hover:shadow-lg hover:border-primary/50 transition-all
                  `}>
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-bold text-foreground text-lg">{t(`experience.${exp.id}.role`)}</h3>
                      {isCurrentJob && (
                        <span className="text-xs font-mono text-primary px-2 py-0.5 rounded bg-primary/10 border border-primary/20">
                          {t('experience.current_badge')}
                        </span>
                      )}
                    </div>
                    <p className="text-primary font-semibold text-sm mb-1">{t(`experience.${exp.id}.company`)}</p>
                    <time className="block mb-4 text-xs font-medium uppercase text-muted-foreground">
                      {t(`experience.${exp.id}.period`)}
                    </time>
                    <ul className="space-y-2 mb-4">
                      {/* @ts-ignore */}
                      {(t(`experience.${exp.id}.description`, { returnObjects: true }) as string[]).map((item, i) => (
                        <li 
                          key={i} 
                          className={`
                            text-sm text-muted-foreground pl-4 relative
                            before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full
                            ${isCurrentJob ? 'before:bg-primary' : 'before:bg-primary/40'}
                          `}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                    {exp.technologies && exp.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-border mt-2">
                        {exp.technologies.map((tech) => (
                          <span key={tech} className="text-xs text-primary font-medium px-2 py-0.5 bg-primary/10 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
