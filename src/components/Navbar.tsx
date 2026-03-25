import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { lang, toggle } = useLanguage();

  const navItems = [
    { label: t.nav.projects[lang], href: "#projects" },
    { label: t.nav.about[lang], href: "#about" },
    { label: t.nav.skills[lang], href: "#skills" },
    { label: t.nav.education[lang], href: "#education" },
    { label: t.nav.contact[lang], href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12 h-16 md:h-20">
          <a href="#" className="font-display text-lg md:text-xl font-bold tracking-tight text-foreground">
            Emilia <span className="text-coral italic">Giso</span>
          </a>

          {/* Desktop */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 uppercase tracking-widest"
              >
                {item.label}
              </a>
            ))}
            <button
              onClick={toggle}
              className="ml-2 px-3 py-1.5 text-xs font-bold uppercase tracking-widest border border-border rounded-full text-muted-foreground hover:text-coral hover:border-coral/50 transition-all duration-300 active:scale-[0.95]"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
          </div>

          {/* Mobile toggle */}
          <div className="md:hidden flex items-center gap-3">
            <button
              onClick={toggle}
              className="px-2.5 py-1 text-xs font-bold uppercase tracking-widest border border-border rounded-full text-muted-foreground hover:text-coral transition-colors active:scale-[0.95]"
            >
              {lang === "es" ? "EN" : "ES"}
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="flex flex-col gap-1.5 p-2"
              aria-label="Toggle menu"
            >
              <span className={`w-6 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`w-6 h-0.5 bg-foreground transition-opacity duration-300 ${mobileOpen ? "opacity-0" : ""}`} />
              <span className={`w-6 h-0.5 bg-foreground transition-transform duration-300 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background/98 backdrop-blur-lg flex flex-col items-center justify-center gap-8 pt-20"
          >
            {navItems.map((item, i) => (
              <motion.a
                key={item.href}
                href={item.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                onClick={() => setMobileOpen(false)}
                className="text-2xl font-display font-semibold text-foreground hover:text-coral transition-colors uppercase tracking-widest"
              >
                {item.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
