import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

export const Hero = () => {
  const { lang } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden section-padding">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-coral/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-coral/3 blur-[80px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full pt-28 pb-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/50 border border-border/50 text-coral text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 rounded-full bg-coral animate-pulse" />
          {t.hero.greeting[lang]}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-bold leading-[0.85] tracking-tighter mb-8 max-w-5xl"
        >
          Emilia
          <br />
          <span className="text-gradient">Giso</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-muted-foreground text-lg md:text-2xl max-w-2xl leading-relaxed mb-12 font-light"
        >
          {t.hero.desc[lang]}
          <br /><br />
          <span className="text-foreground font-medium">{t.hero.descBold[lang]}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap gap-5"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-coral text-primary-foreground px-8 py-4 rounded-xl font-display font-semibold text-sm uppercase tracking-wider hover:bg-coral/90 transition-all duration-300 hover:shadow-[0_0_30px_-5px_hsl(var(--coral))] active:scale-[0.98]"
          >
            {t.hero.cta1[lang]}
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-secondary/80 text-foreground px-8 py-4 rounded-xl font-display font-semibold text-sm uppercase tracking-wider hover:bg-secondary transition-all duration-300 hover:shadow-lg active:scale-[0.98]"
          >
            {t.hero.cta2[lang]}
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1.5"
        >
          <div className="w-1 h-2 bg-coral rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
