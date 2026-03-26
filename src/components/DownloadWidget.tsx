import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, FileText, Layout, X, ChevronRight } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

export const DownloadWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { lang } = useLanguage();

  return (
    <div className="fixed bottom-32 right-6 z-[101] flex flex-col items-end gap-4 print:hidden">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.9, x: 20 }}
            className="bg-secondary/95 backdrop-blur-2xl border border-white/10 p-5 rounded-[2.5rem] shadow-[0_40px_80px_rgba(0,0,0,0.5)] flex flex-col gap-4 min-w-[260px]"
          >
            <div className="flex items-center justify-between px-3 mb-1">
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-primary">
                {lang === "es" ? "Descargas" : "Downloads"}
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-muted-foreground hover:text-white transition-colors p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              {/* Option 1: Professional CV (ES) */}
              <button
                onClick={() => window.open("/EGportfolio/cv/Emilia%20Giso%20CV%202026.pdf", "_blank")}
                className="group flex items-center gap-4 w-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 p-4 rounded-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-foreground">
                    {lang === "es" ? "CV Profesional (ES)" : "Professional CV (ES)"}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">
                    {lang === "es" ? "Versión en español (PDF)" : "Spanish version (PDF)"}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-foreground transition-colors" />
              </button>

              {/* Option 2: Professional CV (EN) */}
              <button
                onClick={() => window.open("/EGportfolio/cv/Emilia%20Giso%20CV%202026%20(EN)%20.pdf", "_blank")}
                className="group flex items-center gap-4 w-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 p-4 rounded-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <FileText className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-foreground">
                    {lang === "es" ? "CV Profesional (EN)" : "Professional CV (EN)"}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">
                    {lang === "es" ? "Versión en inglés (PDF)" : "English version (PDF)"}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-foreground transition-colors" />
              </button>

              {/* Option 3: Full Portfolio Capture */}
              <button
                onClick={() => window.print()}
                className="group flex items-center gap-4 w-full bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 p-4 rounded-2xl transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Layout className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-foreground">
                    {lang === "es" ? "Portfolio Completo" : "Full Portfolio"}
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-0.5">
                    {lang === "es" ? "Captura del sitio (PDF)" : "Site capture (PDF)"}
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 ml-auto text-muted-foreground group-hover:text-foreground transition-colors" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 rounded-full bg-secondary/80 backdrop-blur-md text-foreground flex items-center justify-center shadow-2xl border border-white/10 relative group overflow-hidden transition-all duration-500 hover:border-primary/50"
      >
        <div className="absolute inset-x-0 bottom-0 h-0 bg-primary group-hover:h-full transition-all duration-500 opacity-20" />
        <Download className="w-7 h-7 relative z-10 group-hover:text-primary transition-colors" />
      </motion.button>
    </div>
  );
};
