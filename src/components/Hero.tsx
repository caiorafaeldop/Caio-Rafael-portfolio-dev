import { motion } from "framer-motion";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { siteConfig } from "@/data/site";
import { Button } from "./ui/button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import ParticlesBackground from "./Background/Particles";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-dark -z-20" />
      
      {/* Particles */}
      <ParticlesBackground />

      <div className="container mx-auto px-4">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground mb-4 text-lg"
          >
            {siteConfig.hero.greeting}
          </motion.p>

          <motion.h1
            variants={fadeInUp}
            className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-accent bg-clip-text text-transparent"
          >
            {siteConfig.name}
          </motion.h1>

          <motion.h2
            variants={fadeInUp}
            className="text-2xl md:text-3xl font-semibold text-foreground mb-6"
          >
            {siteConfig.title}
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-muted-foreground text-lg md:text-xl mb-12 max-w-2xl mx-auto"
          >
            {siteConfig.hero.description}
          </motion.p>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <Button asChild size="lg" className="group">
              <Link to="/projects">
                {siteConfig.hero.cta.primary}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href="#contact">{siteConfig.hero.cta.secondary}</a>
            </Button>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex items-center justify-center gap-4"
          >
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 hover:border-primary/50 transition-colors"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 hover:border-primary/50 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href={`mailto:${siteConfig.email}`}
              className="p-3 rounded-full bg-glass-bg/5 backdrop-blur-xl border border-glass-border/10 hover:border-primary/50 transition-colors"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
