import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  Code2,
  Database,
  Download,
  Github,
  GitBranch,
  Linkedin,
  Mail,
  Server,
  ShieldCheck,
  Terminal,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "./ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { useTranslation } from "react-i18next";
import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "@/hooks/use-theme";

const stackItems = ["Java", "Angular", "React", "Node.js"];

const calendarTheme = {
  dark: ["#0d242c", "#0e5d6d", "#008b9b", "#00b8cc", "#00f0ff"],
  light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]
};

const selectLastTenMonths = (data: any[]) => {
  const tenMonthsAgo = new Date();
  tenMonthsAgo.setMonth(tenMonthsAgo.getMonth() - 10);
  return data.filter((day) => {
    const date = new Date(day.date);
    return date >= tenMonthsAgo;
  });
};

const Hero = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  const [githubData, setGithubData] = useState({
    commits: "2.5k+",
    repos: "40+",
    contributions: "B.Sc. @ UFPB"
  });

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const userRes = await fetch("https://api.github.com/users/caiorafaeldop");
        if (userRes.ok) {
          const userData = await userRes.json();
          setGithubData(prev => ({
            ...prev,
            repos: String(userData.public_repos)
          }));
        }

        const commitsRes = await fetch("https://api.github.com/search/commits?q=author:caiorafaeldop", {
          headers: {
            Accept: "application/vnd.github.cloak-preview+json"
          }
        });
        if (commitsRes.ok) {
          const commitsData = await commitsRes.json();
          setGithubData(prev => ({
            ...prev,
            commits: String(commitsData.total_count)
          }));
        }
      } catch (error) {
        console.error("Erro ao buscar dados do GitHub:", error);
      }
    };

    fetchGithubData();
  }, []);

  const proofItems = [
    { icon: Server, label: t("hero.proof.current.label"), value: t("hero.proof.current.value") },
    { icon: Database, label: t("hero.proof.systems.label"), value: t("hero.proof.systems.value") },
    { icon: GitBranch, label: t("hero.proof.workflow.label"), value: t("hero.proof.workflow.value") },
  ];

  const terminalStats = [
    { label: t("hero.terminal.commits"), value: githubData.commits },
    { label: t("hero.terminal.repos"), value: githubData.repos },
    { label: t("hero.terminal.contributions"), value: githubData.contributions },
  ];

  return (
    <section className="relative overflow-hidden pt-20 pb-12 md:pt-24 md:pb-20" id="home">
      <div
        className="absolute inset-0 pointer-events-none opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border) / 0.28) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border) / 0.28) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
          maskImage: "linear-gradient(to bottom, black 0%, black 58%, transparent 100%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid min-h-0 md:min-h-[calc(100vh-7rem)] grid-cols-1 items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:pt-8 lg:gap-12"
        >
          <motion.div variants={fadeInUp} className="max-w-3xl min-w-0">
            <h1 className="max-w-4xl text-4xl font-black leading-[1.04] text-foreground sm:text-5xl lg:text-6xl">
              {t("hero.headline")}
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              {t("hero.description")}
            </p>

            <div className="mt-7 flex flex-wrap gap-2">
              {stackItems.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-primary/20 bg-primary/10 px-3 py-1.5 text-sm font-bold text-primary"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                <a href="#projetos" className="flex items-center gap-2">
                  {t("hero.viewProjects")}
                  <ArrowDown className="h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" className="shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                <a href="/Caio Rafael de Oliveira - Resume.pdf" download="Caio Rafael de Oliveira - Resume.pdf" className="flex items-center gap-2">
                  <Download className="h-4 w-4" />
                  {t("hero.downloadCv")}
                </a>
              </Button>
              <Button asChild size="lg" className="shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
                <a href="/about" className="flex items-center gap-2">
                  {t("hero.aboutMe")}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div variants={fadeInUp} className="lg:pl-2 min-w-0">
            <div className="overflow-hidden rounded-lg border border-primary/25 bg-card shadow-2xl shadow-primary/10">
              {/* Terminal Header */}
              <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-destructive" />
                  <span className="h-3 w-3 rounded-full bg-secondary" />
                  <span className="h-3 w-3 rounded-full bg-primary" />
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-muted-foreground">
                  <Github className="h-4 w-4 text-primary" />
                  {t("hero.terminal.file")}
                </div>
              </div>

              {/* Terminal Body */}
              <div className="space-y-6 p-5">
                {/* GitHub User Header */}
                <div className="flex items-center gap-4 border-b border-border/50 pb-5">
                  <img
                    src="https://github.com/caiorafaeldop.png"
                    alt="Caio Rafael"
                    className="h-14 w-14 rounded-full border-2 border-primary/40 object-cover"
                    onError={(e) => {
                      e.currentTarget.src = "/CAIO/5.jpg";
                    }}
                  />
                  <div>
                    <h3 className="text-lg font-bold text-foreground leading-snug">Caio Rafael de Oliveira</h3>
                    <a
                      href={siteConfig.socials.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-primary hover:underline flex items-center gap-1 mt-0.5"
                    >
                      @caiorafaeldop
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>

                {/* GitHub Calendar Container */}
                <div className="overflow-hidden rounded-md bg-background/50 p-4 border border-border/30">
                  <style>{`
                    .no-scrollbar::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  <div 
                    className="overflow-x-auto pb-2 no-scrollbar flex justify-start lg:justify-center" 
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                  >
                    <div className="min-w-[440px] shrink-0">
                      <GitHubCalendar
                        username="caiorafaeldop"
                        colorScheme={theme}
                        theme={calendarTheme}
                        blockSize={8}
                        blockMargin={2}
                        transformData={selectLastTenMonths}
                      />
                    </div>
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-3">
                  {terminalStats.map((item) => (
                    <div key={item.label} className="rounded-md border border-primary/15 bg-primary/5 p-3 text-center">
                      <p className="text-[11px] uppercase text-muted-foreground font-semibold">{item.label}</p>
                      <p className="mt-1 text-base font-black text-primary">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Infos Adicionais */}
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {proofItems.map((item) => (
                <div key={item.label} className="rounded-lg border border-border bg-card/80 p-3 flex items-center gap-3">
                  <div className="rounded-md bg-primary/10 p-1.5 shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] font-bold uppercase text-muted-foreground leading-none">{item.label}</p>
                    <p className="mt-1 text-xs font-extrabold text-foreground truncate leading-tight">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          variants={fadeInUp}
          className="mt-10 border-y border-primary/15 py-6"
        >
          <div className="grid items-center gap-5 md:grid-cols-[auto_1fr_auto]">
            <img
              src="/CAIO/5.jpg"
              alt="Caio Rafael de Oliveira"
              className="h-20 w-20 rounded-lg object-cover shadow-lg"
            />
            <div>
              <p className="text-sm font-bold uppercase text-primary">{t("hero.profileStrip.kicker")}</p>
              <p className="mt-1 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {t("hero.profileStrip.description")}
              </p>
            </div>
            <div className="flex gap-2">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border bg-card p-3 text-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-border bg-card p-3 text-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href={`mailto:${siteConfig.email}`}
                className="rounded-md border border-border bg-card p-3 text-foreground transition-colors hover:border-primary hover:text-primary"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
