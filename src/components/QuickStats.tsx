import { motion } from "framer-motion";
import { Briefcase, Code2, Rocket, Building2, Download } from "lucide-react";
import { projects } from "@/data/projects";
import { experiences } from "@/data/experience";
import { Button } from "./ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const QuickStats = () => {
  // Calcular métricas dinamicamente
  const totalProjects = projects.length;
  const totalCompanies = new Set(experiences.map((e) => e.company)).size;
  
  // Extrair todas as tecnologias únicas dos projetos
  const allTechnologies = new Set(
    projects.flatMap((p) => p.stack)
  );
  const totalTech = allTechnologies.size;

  const stats = [
    {
      icon: Rocket,
      number: totalProjects.toString(),
      label: "Projetos Entregues",
      color: "from-primary to-purple-600",
    },
    {
      icon: Code2,
      number: `${totalTech}+`,
      label: "Tecnologias",
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: Building2,
      number: totalCompanies.toString(),
      label: "Empresas",
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Briefcase,
      number: "+1",
      label: "Ano em Produção",
      color: "from-orange-500 to-red-600",
    },
  ];

  // Top skills extraídas dos projetos
  const topSkills = [
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "MongoDB",
    "AWS",
  ];

  return (
    <section className="py-16 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                custom={index}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br opacity-10 rounded-2xl blur-xl group-hover:opacity-20 transition-opacity" />
                <div className="relative bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 rounded-2xl p-6 text-center hover:border-primary/30 transition-colors">
                  <stat.icon className={`h-8 w-8 mx-auto mb-3 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`} 
                    style={{ 
                      stroke: "url(#gradient)", 
                      strokeWidth: 2 
                    }} 
                  />
                  <div className={`text-3xl md:text-4xl font-bold mb-1 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent`}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Quick Skills */}
          <motion.div variants={fadeInUp} className="text-center mb-8">
            <div className="flex flex-wrap justify-center gap-2">
              {topSkills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary hover:bg-primary/20 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>

          {/* CV Download */}
          <motion.div variants={fadeInUp} className="text-center">
            <Button asChild size="lg" variant="outline" className="group">
              <a href="/cv.pdf" download>
                <Download className="mr-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                Baixar Currículo (PDF)
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickStats;
