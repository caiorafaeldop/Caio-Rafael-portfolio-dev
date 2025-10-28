import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <div className="flex min-h-screen items-center justify-center px-4 pt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="mb-4 text-9xl font-bold bg-gradient-accent bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="mb-4 text-3xl font-bold">Página Não Encontrada</h2>
          <p className="mb-8 text-muted-foreground text-lg max-w-md mx-auto">
            Desculpe, a página que você está procurando não existe ou foi movida.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link to="/">
                <Home className="mr-2 h-4 w-4" />
                Voltar para Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Ver Projetos
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
      <Footer />
    </>
  );
};

export default NotFound;
