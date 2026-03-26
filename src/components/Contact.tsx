import { ScrollReveal } from "./ScrollReveal";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const contactLinks = [
  { icon: Mail, label: "emigiso@hotmail.com", href: "mailto:emigiso@hotmail.com" },
  { icon: Phone, label: "011 6610-0505", href: "tel:+5401166100505" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/emilia-giso-6690371b8/" },
];

export const Contact = () => {
  const { lang } = useLanguage();

  return (
    <section id="contact" className="pt-4 pb-24 md:pt-8 md:pb-32 section-padding relative border-t border-border/10">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <div className="inline-flex items-center gap-3 mb-20 md:mb-24 pointer-events-none bg-secondary/30 px-5 py-2.5 rounded-full border border-border/30 backdrop-blur-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse shadow-[0_0_10px_rgba(255,107,107,0.5)]" />
            <span className="text-primary font-body text-xs md:text-sm uppercase tracking-[0.2em] font-bold">
              {t.contact.label[lang] || "Contacto"}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-5xl sm:text-6xl md:text-8xl font-black leading-tight mb-24 md:mb-32 text-primary">
            {t.contact.heading1[lang]}
            <span>{t.contact.heading2[lang]}</span>
          </h2>
        </ScrollReveal>

        {t.contact.desc[lang] && (
          <ScrollReveal delay={0.2}>
            <p className="text-muted-foreground text-sm md:text-lg max-w-xl mx-auto mb-20 leading-relaxed">
              {t.contact.desc[lang]}
            </p>
          </ScrollReveal>
        )}

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-8">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex flex-1 sm:flex-none items-center justify-center gap-4 bg-card/60 border border-border/80 rounded-2xl px-6 py-4 hover:bg-secondary hover:border-primary/50 transition-all duration-300 active:scale-[0.98] w-full sm:w-auto shadow-sm backdrop-blur-md"
              >
                <div className="bg-secondary/80 p-3 rounded-full group-hover:bg-primary group-hover:text-white transition-all text-muted-foreground shadow-inner">
                  <link.icon className="w-5 h-5" />
                </div>
                <span className="text-foreground text-base md:text-lg font-bold tracking-wide group-hover:text-primary transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <div className="max-w-6xl mx-auto mt-40 pt-10 border-t border-border/50 relative z-10 px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="font-display text-sm text-muted-foreground font-bold tracking-widest uppercase">
            © 2026 Emilia Giso
          </p>
          <div className="flex items-center gap-4 opacity-70">
            <span className="w-1.5 h-1.5 rounded-full bg-primary" />
            <p className="text-sm text-foreground font-medium uppercase tracking-widest">Buenos Aires, Argentina</p>
          </div>
        </div>
      </div>
    </section>
  );
};
