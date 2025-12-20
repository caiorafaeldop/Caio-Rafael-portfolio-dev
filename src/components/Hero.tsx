import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail, GraduationCap, Code, Briefcase, Sparkles, Download } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/data/site";
import { Button } from "./ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden" id="home">
      {/* Gradient background sutil */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)"
        }}
      />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground mb-4 text-sm font-medium tracking-wide"
          >
            {siteConfig.hero.greeting}
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-6xl font-extrabold mb-4 tracking-tight pb-2 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-bold text-foreground mb-6"
          >
            {siteConfig.title}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Transformando ideias em soluções digitais elegantes com foco em React, Node.js, TypeScript e PostgreSQL.
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-10"
          >
            <Button asChild size="lg" className="bg-purple-600 hover:bg-primary shadow-lg shadow-primary/20 transition-all hover:-translate-y-1">
              <a href="#projetos" className="flex items-center gap-2">
                Ver Projetos
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-purple-500/50 dark:border-purple-400/50 text-foreground hover:bg-purple-500/10 dark:hover:bg-purple-400/10 hover:border-purple-500 dark:hover:border-purple-400">
              <a href="#contato">
                Entre em Contato
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-purple-500/50 dark:border-purple-400/50 text-foreground hover:bg-purple-500/10 dark:hover:bg-purple-400/10 hover:border-purple-500 dark:hover:border-purple-400">
              <a href="/cv.pdf" download className="flex items-center gap-2">
                <Download className="h-4 w-4" />
                Download CV
              </a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex justify-center gap-4 mb-12"
          >
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background dark:bg-zinc-900 border-2 border-border dark:border-zinc-700 text-foreground hover:text-purple-500 hover:border-purple-500 dark:hover:border-purple-400 transition-all"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-background dark:bg-zinc-900 border-2 border-border dark:border-zinc-700 text-foreground hover:text-purple-500 hover:border-purple-500 dark:hover:border-purple-400 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-3 rounded-full bg-background dark:bg-zinc-900 border-2 border-border dark:border-zinc-700 text-foreground hover:text-purple-500 hover:border-purple-500 dark:hover:border-purple-400 transition-all"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>

          {/* Profile Cards */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {/* Card 1: Full-Stack Engineer */}
            <motion.div
              variants={fadeInUp}
              className="group relative bg-background dark:bg-zinc-900 border-2 border-purple-500/30 dark:border-purple-400/30 rounded-2xl p-5 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <Code className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <p className="text-xl md:text-2xl font-black bg-gradient-to-r from-purple-500 to-primary bg-clip-text text-transparent">
                  Full-Stack Engineer
                </p>
              </div>
            </motion.div>

            {/* Card 2: UFPB */}
            <motion.div
              variants={fadeInUp}
              className="group relative bg-background dark:bg-zinc-900 border-2 border-purple-500/30 dark:border-purple-400/30 rounded-2xl p-5 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <GraduationCap className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <p className="text-base font-semibold text-foreground leading-tight">
                  Graduado em Ciência da Computação
                </p>
                <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-purple-500 to-primary bg-clip-text text-transparent mt-1">
                  UFPB
                </p>
              </div>
            </motion.div>

            {/* Card 3: +3 anos */}
            <motion.div
              variants={fadeInUp}
              className="group relative bg-background dark:bg-zinc-900 border-2 border-purple-500/30 dark:border-purple-400/30 rounded-2xl p-5 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <Briefcase className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <p className="text-2xl md:text-3xl font-black bg-gradient-to-r from-purple-500 to-primary bg-clip-text text-transparent">
                  +3 anos
                </p>
                <p className="text-base font-semibold text-foreground leading-tight mt-1">
                  em Desenvolvimento Web
                </p>
              </div>
            </motion.div>

            {/* Card 4: React + Node.js */}
            <motion.div
              variants={fadeInUp}
              className="group relative bg-background dark:bg-zinc-900 border-2 border-purple-500/30 dark:border-purple-400/30 rounded-2xl p-5 hover:border-purple-500 dark:hover:border-purple-400 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative z-10">
                <Sparkles className="h-8 w-8 text-purple-500 mx-auto mb-3" />
                <p className="text-base font-semibold text-foreground leading-tight">
                  Especialista
                </p>
                <p className="text-xl md:text-2xl font-black bg-gradient-to-r from-purple-500 to-primary bg-clip-text text-transparent mt-1">
                  React + Node.js
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
