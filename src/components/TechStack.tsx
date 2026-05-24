import { motion } from "framer-motion";
import { techStack } from "@/data/tech";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";

const TechStack = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-4xl md:text-6xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-primary tracking-tight">
              {t('techStack.title')}
            </h2>
            
          </motion.div>

          {/* Grid 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((category, index) => (
              <motion.div
                key={category.category}
                variants={fadeInUp}
                custom={index}
                className="bg-card p-8 rounded-2xl border-2 border-primary/20 hover:border-primary/50 transition-all"
              >
                <h3 className="text-xl font-bold text-primary mb-6 pb-2 border-b border-primary/20">
                  {t(`techStack.categories.${category.category}`)}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-4 py-2 rounded-lg text-sm font-medium bg-primary/10 text-foreground border border-primary/20"
                    >
                      {t(`techStack.items.${item}`, item)}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechStack;
