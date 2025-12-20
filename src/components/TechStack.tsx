import { motion } from "framer-motion";
import { techStack } from "@/data/tech";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const TechStack = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Tech Stack
            </h2>
            <p className="text-muted-foreground">
              Tecnologias e ferramentas que domino
            </p>
          </motion.div>

          {/* Grid 3 columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {techStack.map((category, index) => (
              <motion.div
                key={category.category}
                variants={fadeInUp}
                custom={index}
                className="bg-card p-8 rounded-2xl border border-border hover:border-primary/30 transition-all"
              >
                <h3 className="text-lg font-bold text-purple-500 mb-6 pb-2 border-b border-border">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {category.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-md text-sm bg-muted text-foreground border border-border"
                    >
                      {item}
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
