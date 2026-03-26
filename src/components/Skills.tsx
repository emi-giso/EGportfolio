import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

export const Skills = () => {
  const { lang } = useLanguage();
  const categories = t.skills.categories[lang];

  return (
    <section id="skills" className="py-32 md:py-40 section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4">{t.skills.label[lang]}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl mb-16">
            {t.skills.heading[lang]}
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-8">
          {categories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full hover-lift">
                <h3 className="font-display text-xl font-bold mb-6 text-primary">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-1.5 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
