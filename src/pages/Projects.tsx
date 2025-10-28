import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ProjectCard from "@/components/ProjectCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Projects = () => {
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"recent" | "title">("recent");

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []);

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(search.toLowerCase()) ||
        project.stack.some((tech) =>
          tech.toLowerCase().includes(search.toLowerCase())
        );

      const matchesTag =
        selectedTag === "all" || project.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });

    if (sortBy === "recent") {
      filtered.sort((a, b) => b.year - a.year);
    } else {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [search, selectedTag, sortBy]);

  return (
    <>
      <Helmet>
        <title>{`Projetos - ${siteConfig.name}`}</title>
        <meta
          name="description"
          content="Explore meus projetos e trabalhos desenvolvidos com as mais modernas tecnologias."
        />
        <meta property="og:title" content={`Projetos - ${siteConfig.name}`} />
        <meta
          property="og:description"
          content="Explore meus projetos e trabalhos desenvolvidos com as mais modernas tecnologias."
        />
      </Helmet>

      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Todos os Projetos
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Uma coleção dos meus trabalhos e experimentos
              </p>
            </motion.div>

            {/* Filters */}
            <motion.div
              variants={fadeInUp}
              className="mb-12 bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 rounded-2xl p-6"
            >
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Buscar projetos..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10"
                  />
                </div>

                <Select value={selectedTag} onValueChange={setSelectedTag}>
                  <SelectTrigger>
                    <SelectValue placeholder="Filtrar por tag" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Todas as Tags</SelectItem>
                    {allTags.map((tag) => (
                      <SelectItem key={tag} value={tag}>
                        {tag}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={(v) => setSortBy(v as "recent" | "title")}>
                  <SelectTrigger>
                    <SelectValue placeholder="Ordenar por" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">Mais Recentes</SelectItem>
                    <SelectItem value="title">Título A-Z</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {(search || selectedTag !== "all") && (
                <div className="mt-4 flex items-center gap-2">
                  <p className="text-sm text-muted-foreground">
                    {filteredProjects.length} projeto(s) encontrado(s)
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSearch("");
                      setSelectedTag("all");
                    }}
                  >
                    Limpar filtros
                  </Button>
                </div>
              )}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              variants={staggerContainer}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} />
              ))}
            </motion.div>

            {filteredProjects.length === 0 && (
              <motion.div
                variants={fadeInUp}
                className="text-center py-12 text-muted-foreground"
              >
                <p className="text-lg">Nenhum projeto encontrado.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearch("");
                    setSelectedTag("all");
                  }}
                >
                  Limpar filtros
                </Button>
              </motion.div>
            )}
          </motion.div>
        </div>
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Projects;
