import { motion } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

export const Hero = () => {
  const { lang } = useLanguage();

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden section-padding">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] rounded-full bg-coral/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-coral/3 blur-[80px] pointer-events-none" />

      <div className="max-w-6xl mx-auto w-full pt-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-coral font-body text-base md:text-lg mb-6 tracking-wide"
        >
          {t.hero.greeting[lang]}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-bold leading-[0.9] tracking-tight mb-8"
        >
          Emilia
          <br />
          <span className="text-gradient">Giso</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="text-muted-foreground text-lg md:text-xl max-w-xl leading-relaxed mb-12"
        >
          {t.hero.desc[lang]}{" "}
          <span className="text-foreground font-medium">{t.hero.descBold[lang]}</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex flex-wrap gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 bg-coral text-primary-foreground px-8 py-4 rounded-lg font-display font-semibold text-sm uppercase tracking-wider hover:bg-coral/90 transition-all duration-300 active:scale-[0.97]"
          >
            {t.hero.cta1[lang]}
            <span className="group-hover:translate-y-1 transition-transform duration-300">↓</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-lg font-display font-semibold text-sm uppercase tracking-wider hover:border-coral/50 hover:text-coral transition-all duration-300 active:scale-[0.97]"
          >
            {t.hero.cta2[lang]}
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
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
