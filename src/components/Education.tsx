import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

export const Education = () => {
  const { lang } = useLanguage();
  const timeline = t.education.timeline[lang];
  const volunteer = t.education.volunteer[lang];

  return (
    <section id="education" className="py-32 md:py-40 section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4">{t.education.label[lang]}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl mb-16">
            {t.education.heading[lang]}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16">
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="flex gap-6 items-start">
                    <div className="w-4 h-4 rounded-full bg-primary/20 border-2 border-primary shrink-0 mt-1 relative z-10" />
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-widest mb-1">{item.year}</p>
                      <h4 className="font-display font-semibold text-foreground">{item.title}</h4>
                      <p className="text-sm text-muted-foreground">{item.org}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <div>
            <ScrollReveal>
              <h3 className="font-display text-xl font-bold mb-8 text-foreground">
                {t.education.volunteerTitle[lang]}
              </h3>
            </ScrollReveal>
            <div className="space-y-6">
              {volunteer.map((item, i) => (
                <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                  <div className="bg-card border border-border rounded-xl p-6 hover-lift">
                    <h4 className="font-display font-semibold text-foreground mb-2">{item.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
