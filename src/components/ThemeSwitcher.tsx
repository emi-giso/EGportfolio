import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, Check, X } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

const themes = [
  {
    id: "primary",
    name: "Coral",
    primary: "20 85% 55%",
    bg: "220 20% 6%",
    fg: "20 10% 98%",
    card: "220 15% 9%",
    border: "220 10% 20%"
  },
  {
    id: "emerald",
    name: "Esmeralda",
    primary: "142 70% 55%",
    bg: "220 20% 6%",
    fg: "142 10% 98%",
    card: "220 15% 9%",
    border: "220 10% 20%"
  },
  {
    id: "royal",
    name: "Royal",
    primary: "217 90% 65%",
    bg: "220 20% 6%",
    fg: "217 10% 98%",
    card: "220 15% 9%",
    border: "220 10% 20%"
  },
  {
    id: "amethyst",
    name: "Amatista",
    primary: "270 70% 65%",
    bg: "220 20% 6%",
    fg: "270 10% 98%",
    card: "220 15% 9%",
    border: "220 10% 20%"
  },
];

export const ThemeSwitcher = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState(themes[0]);
  const { lang } = useLanguage();

  const setTheme = (theme: typeof themes[0]) => {
    const root = document.documentElement;

    // Set CSS variables for the new theme
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--background", theme.bg);
    root.style.setProperty("--foreground", theme.fg);
    root.style.setProperty("--card", theme.card);
    root.style.setProperty("--border", theme.border);

    // Update global CSS variables for translucent effects
    const [h, s, l] = theme.primary.split(" ");
    root.style.setProperty("--accent-muted", `${h} ${s} ${l}`);
    
    localStorage.setItem("portfolio-theme", theme.id);
    setActiveTheme(theme);
    setIsOpen(false);
  };

  useEffect(() => {
    const saved = localStorage.getItem("portfolio-theme");
    if (saved) {
      const theme = themes.find(t => t.id === saved) || themes[0];
      setTheme(theme);
    } else {
      setTheme(themes[0]);
    }
  }, []);

  return (
    <div className="fixed bottom-12 right-6 z-[100] flex flex-col items-end gap-4 print:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-card/95 backdrop-blur-xl border border-border p-4 rounded-[2rem] shadow-2xl w-56 overflow-hidden"
          >
            <div className="flex items-center justify-between mb-4 px-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                {lang === "es" ? "Temas" : "Themes"}
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-foreground p-1 transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
            
            <div className="space-y-2">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => setTheme(theme)}
                  className={`w-full flex items-center justify-between p-3 rounded-2xl transition-all group ${
                    activeTheme.id === theme.id 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20" 
                    : "hover:bg-secondary/50 text-foreground"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div 
                      className="w-4 h-4 rounded-full border border-white/20"
                      style={{ backgroundColor: `hsl(${theme.primary})` }}
                    />
                    <span className="text-sm font-medium">{theme.name}</span>
                  </div>
                  {activeTheme.id === theme.id && <Check className="w-4 h-4" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-primary text-primary-foreground shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-300 group ring-4 ring-primary/20"
        title={lang === "es" ? "Personalizar tema" : "Customize theme"}
      >
        <Palette className={`w-7 h-7 transition-transform duration-500 ${isOpen ? "rotate-90" : ""}`} />
      </button>
    </div>
  );
};
