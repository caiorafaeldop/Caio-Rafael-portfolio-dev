import { motion } from "framer-motion";

const QuickStats = () => {
  // Lista completa de tecnologias
  const technologies = [
    "React", "Next.js", "TypeScript", "JavaScript", "TailwindCSS", "Vue.js", "Angular",
    "Node.js", "Express", "NestJS", "Prisma", "REST APIs",
    "PostgreSQL", "MongoDB", "MySQL", "Supabase",
    "Docker", "Git", "GitHub", "Render",
    "Scrum", "Kanban", "Clean Architecture"
  ];

  return (
    <section className="py-8 bg-primary text-primary-foreground overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-primary to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-primary to-transparent z-10" />
        
        {/* Scrolling content */}
        <div className="flex animate-marquee whitespace-nowrap">
          {[...technologies, ...technologies].map((tech, index) => (
            <span
              key={`${tech}-${index}`}
              className="mx-4 md:mx-6 text-lg md:text-2xl font-bold text-primary-foreground/90 hover:text-primary-foreground transition-colors cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default QuickStats;
