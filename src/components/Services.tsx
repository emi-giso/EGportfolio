import { useLanguage } from "@/i18n/LanguageContext";
import { ScrollReveal } from "./ScrollReveal";

const services = {
  es: [
    { title: "Estrategia Digital", desc: "Planificación, calendario, análisis y optimización. Cada acción tiene un porqué.", icon: "◎" },
    { title: "Social Media", desc: "Gestión integral de redes: contenido, comunidad, pauta y métricas.", icon: "◉" },
    { title: "Producción Audiovisual", desc: "Reels, coberturas en vivo, edición de video, fotografía y contenido multimedial.", icon: "▣" },
    { title: "Comunicación & Prensa", desc: "Comunicación institucional, gestión de medios, prensa y relaciones públicas.", icon: "◈" },
  ],
  en: [
    { title: "Digital Strategy", desc: "Planning, calendars, analysis and optimization. Every action has a reason.", icon: "◎" },
    { title: "Social Media", desc: "Full social media management: content, community, ads and metrics.", icon: "◉" },
    { title: "Audiovisual Production", desc: "Reels, live coverage, video editing, photography and multimedia content.", icon: "▣" },
    { title: "Communication & Press", desc: "Institutional comms, media management, press and public relations.", icon: "◈" },
  ],
};

export const Services = () => {
  const { lang } = useLanguage();

  return (
    <section className="py-24 md:py-32 section-padding border-b border-border/50">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <p className="text-coral font-body text-sm uppercase tracking-[0.2em] mb-4">
            {lang === "es" ? "Servicios" : "Services"}
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold leading-[1.05] max-w-4xl mb-16">
            {lang === "es"
              ? "No hago posteos. Construyo sistemas de comunicación."
              : "I don't make posts. I build communication systems."}
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services[lang].map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08} direction={i < 2 ? "left" : "right"}>
              <div className="group bg-card border border-border rounded-2xl p-6 md:p-8 h-full hover-lift relative overflow-hidden">
                {/* Decorative corner accent */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-coral/5 rounded-bl-[2rem] group-hover:bg-coral/10 transition-colors duration-500" />
                
                <span className="text-coral text-3xl mb-4 block">{service.icon}</span>
                <h3 className="font-display text-lg font-bold mb-3 text-foreground group-hover:text-coral transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
