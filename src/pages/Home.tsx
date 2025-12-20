import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QuickStats from "@/components/QuickStats";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import BackToTop from "@/components/BackToTop";
import ParticlesBackground from "@/components/Background/Particles";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{`${siteConfig.name} - ${siteConfig.title}`}</title>
        <meta name="description" content={siteConfig.description} />
        <meta
          property="og:title"
          content={`${siteConfig.name} - ${siteConfig.title}`}
        />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content={`${siteConfig.name} - ${siteConfig.title}`}
        />
        <meta name="twitter:description" content={siteConfig.description} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Person",
            name: siteConfig.name,
            jobTitle: siteConfig.title,
            email: siteConfig.email,
            url: window.location.origin,
            sameAs: [
              siteConfig.socials.github,
              siteConfig.socials.linkedin,
              siteConfig.socials.twitter,
            ],
          })}
        </script>
      </Helmet>

      {/* Global Particles Background */}
      <div className="fixed inset-0 -z-10">
        <ParticlesBackground />
      </div>

      <Navbar />
      <main>
        <Hero />
        <QuickStats />
        <FeaturedProjects />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <BackToTop />
    </>
  );
};

export default Home;
