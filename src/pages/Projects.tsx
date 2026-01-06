import { useState, useMemo } from "react";
import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { projects } from "@/data/projects";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import ProjectCard from "@/components/ProjectCard";
import ParticlesBackground from "@/components/Background/Particles";
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
import { useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();
  const [search, setSearch] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("all");
  const [sortBy, setSortBy] = useState<"recent" | "title">("recent");

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((p) => p.tags.forEach((tag) => tags.add(tag)));
    return Array.from(tags).sort();
  }, []); // We keep the raw tags for logic but will display them translated

  // Filter and sort projects
  const filteredProjects = useMemo(() => {
    let filtered = projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(search.toLowerCase()) ||
        t(`projects.${project.slug}.shortDescription`).toLowerCase().includes(search.toLowerCase()) ||
        project.stack.some((tech) =>
          tech.toLowerCase().includes(search.toLowerCase())
        );

      const matchesTag =
        selectedTag === "all" || project.tags.includes(selectedTag);

      return matchesSearch && matchesTag;
    });

    if (sortBy === "recent") {
      filtered.sort((a, b) => b.year.localeCompare(a.year));
    } else {
      filtered.sort((a, b) => a.title.localeCompare(b.title));
    }

    return filtered;
  }, [search, selectedTag, sortBy]);

  return (
    <>
      <Helmet>
        <title>{t('seo.projects.title')}</title>
        <meta
          name="description"
          content={t('seo.projects.description')}
        />
        <meta property="og:title" content={t('seo.projects.title')} />
        <meta
          property="og:description"
          content={t('seo.projects.description')}
        />
      </Helmet>

      {/* Global Particles Background */}
      <div className="fixed inset-0 -z-10">
        <ParticlesBackground />
      </div>

      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-extrabold mb-6 pb-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-violet-500 to-indigo-600 tracking-tight">
                {t('projects.page.title')}
              </h1>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                {t('projects.page.subtitle')}
              </p>
            </motion.div>

            {/* Filters */}
            <motion.div
              variants={fadeInUp}
              className="mb-12 bg-background dark:bg-zinc-900 backdrop-blur-xl border-2 border-purple-500/20 dark:border-purple-400/20 rounded-2xl p-6"
            >
              <div className="grid md:grid-cols-3 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-purple-500" />
                  <Input
                    placeholder={t('projects.page.filters.search_placeholder')}
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="pl-10 border-purple-500/20 dark:border-purple-400/20 focus:border-purple-500"
                  />
                </div>

                <Select value={selectedTag} onValueChange={setSelectedTag}>
                  <SelectTrigger className="border-purple-500/20 dark:border-purple-400/20">
                    <SelectValue placeholder={t('projects.page.filters.tag_placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">{t('projects.page.filters.all_tags')}</SelectItem>
                    {allTags.map((tag) => (
                      <SelectItem key={tag} value={tag}>
                        {t(`tags.${tag}`, tag)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                <Select value={sortBy} onValueChange={(v) => setSortBy(v as "recent" | "title")}>
                  <SelectTrigger className="border-purple-500/20 dark:border-purple-400/20">
                    <SelectValue placeholder={t('projects.page.filters.sort_placeholder')} />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="recent">{t('projects.page.filters.sort_recent')}</SelectItem>
                    <SelectItem value="title">{t('projects.page.filters.sort_title')}</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {(search || selectedTag !== "all") && (
                <div className="mt-4 flex items-center gap-2">
                  <p className="text-sm text-muted-foreground">
                    {t('projects.page.filters.found', { count: filteredProjects.length })}
                  </p>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-purple-500 hover:text-purple-600"
                    onClick={() => {
                      setSearch("");
                      setSelectedTag("all");
                    }}
                  >
                    {t('projects.page.filters.clear')}
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
                <p className="text-lg">{t('projects.page.filters.empty')}</p>
                <Button
                  variant="outline"
                  className="mt-4 border-2 border-purple-500/50 text-foreground hover:bg-purple-500/10"
                  onClick={() => {
                    setSearch("");
                    setSelectedTag("all");
                  }}
                >
                  {t('projects.page.filters.clear')}
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
