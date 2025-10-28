import { Helmet } from "react-helmet-async";
import { siteConfig } from "@/data/site";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import FeaturedProjects from "@/components/FeaturedProjects";
import Experience from "@/components/Experience";
import TechStack from "@/components/TechStack";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>{`${siteConfig.name} - ${siteConfig.title}`}</title>
        <meta name="description" content={siteConfig.description} />
        <meta property="og:title" content={`${siteConfig.name} - ${siteConfig.title}`} />
        <meta property="og:description" content={siteConfig.description} />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${siteConfig.name} - ${siteConfig.title}`} />
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

      <Navbar />
      <main>
        <Hero />
        <FeaturedProjects />
        <Experience />
        <TechStack />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
};

export default Home;
