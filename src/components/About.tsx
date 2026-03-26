import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

export const About = () => {
  const { lang } = useLanguage();
  const stats = t.about.stats[lang];
  const skills = t.about.skills[lang];

  return (
    <section id="about" className="py-32 md:py-40 section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4">{t.about.label[lang]}</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl mb-8">
            {t.about.heading[lang]}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          <div className="space-y-6">
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed">{t.about.p1[lang]}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-muted-foreground text-lg leading-relaxed">{t.about.p2[lang]}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <blockquote className="border-l-2 border-primary pl-6 py-2">
                <p className="text-foreground italic text-lg">"{t.about.quote[lang]}"</p>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <p className="text-muted-foreground leading-relaxed">{t.about.p3[lang]}</p>
            </ScrollReveal>

            <ScrollReveal delay={0.6}>
              <div className="flex flex-wrap gap-2 mt-4">
                {skills.map((skill) => (
                  <span key={skill} className="px-4 py-1.5 text-sm font-medium bg-secondary text-foreground rounded-full border border-border">
                    {skill}
                  </span>
                ))}
              </div>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, i) => (
              <ScrollReveal key={stat.label} delay={0.2 + i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
                <div className="bg-card border border-border rounded-xl p-6 hover-lift">
                  <p className="font-display text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
