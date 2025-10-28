import { motion } from "framer-motion";
import { techStack } from "@/data/tech";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const TechStack = () => {
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
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Tech Stack</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tecnologias e ferramentas que domino
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
            {techStack.map((category) => (
              <motion.div
                key={category.category}
                variants={fadeInUp}
                className="bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 rounded-2xl p-6"
              >
                <h3 className="text-xl font-bold mb-6 text-primary">
                  {category.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="group relative px-3 py-2 bg-muted/50 hover:bg-primary/10 rounded-lg transition-colors cursor-default"
                    >
                      <span className="text-sm font-medium">{item.name}</span>
                      {item.level && (
                        <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                          <div className="bg-popover text-popover-foreground px-2 py-1 rounded text-xs whitespace-nowrap">
                            {item.level}
                          </div>
                        </div>
                      )}
                    </div>
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
