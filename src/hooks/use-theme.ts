import { useState, useEffect } from "react";

export const useTheme = () => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const root = window.document.documentElement;
    
    // Observer para detectar mudanças na classe
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          const isDark = root.classList.contains("dark");
          setTheme(isDark ? "dark" : "light");
        }
      });
    });

    // Estado inicial
    const initialTheme = root.classList.contains("dark") ? "dark" : "light";
    setTheme(initialTheme);

    // Observar mudanças
    observer.observe(root, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return { theme };
};
