import { ScrollReveal } from "./ScrollReveal";
import { Mail, Phone, Linkedin } from "lucide-react";

const contactLinks = [
  { icon: Mail, label: "emigiso@hotmail.com", href: "mailto:emigiso@hotmail.com" },
  { icon: Phone, label: "011 6610-0505", href: "tel:+5401166100505" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/emiliagiso" },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-32 md:py-40 section-padding bg-card/50">
      <div className="max-w-4xl mx-auto text-center">
        <ScrollReveal>
          <p className="text-coral font-body text-sm uppercase tracking-[0.2em] mb-4">Contacto</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            ¿Tenés un proyecto?
            <br />
            <span className="text-gradient">Hablemos.</span>
          </h2>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-12">
            Si necesitás alguien que piense la estrategia y también la ejecute, escribime.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.3}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-3 bg-card border border-border rounded-xl px-6 py-4 hover:border-coral/50 transition-all duration-300 active:scale-[0.97] w-full sm:w-auto"
              >
                <link.icon className="w-5 h-5 text-coral" />
                <span className="text-foreground text-sm font-medium group-hover:text-coral transition-colors">
                  {link.label}
                </span>
              </a>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="font-display text-sm text-muted-foreground">
            © 2026 Emilia Giso
          </p>
          <p className="text-xs text-muted-foreground">
            Buenos Aires, Argentina
          </p>
        </div>
      </div>
    </section>
  );
};
