import { ScrollReveal } from "./ScrollReveal";

const skillCategories = [
  {
    title: "Estrategia Digital",
    items: [
      "Social media management (IG, LinkedIn, Facebook, Twitter, Blog)",
      "Content strategy & calendar planning",
      "Meta Ads — pauta publicitaria",
      "Analytics & reportes de métricas",
      "Mantenimiento web (WordPress, Wix)",
    ],
  },
  {
    title: "Producción & Contenido",
    items: [
      "Cobertura de eventos en vivo",
      "Edición de video y reels",
      "Diseño gráfico (Adobe Suite)",
      "Producción en set — asistencia integral",
      "Fotografía y contenido multimedial",
    ],
  },
  {
    title: "Comunicación",
    items: [
      "Comunicación institucional (interna/externa)",
      "Gestión de prensa y medios",
      "Copywriting y redacción",
      "Traducción profesional EN ↔ ES (C2)",
      "Contacto con directores y stakeholders",
    ],
  },
  {
    title: "Herramientas",
    items: [
      "Adobe Suite",
      "Canva Pro & CapCut",
      "Microsoft Office & Notion",
      "Meta Ads Manager & Business Suite",
      "WordPress & Wix",
      "Brevo Email Marketing",
    ],
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-32 md:py-40 section-padding bg-card/50">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-coral font-body text-sm uppercase tracking-[0.2em] mb-4">Skills</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl mb-16">
            Con qué trabajo
          </h2>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((cat, i) => (
            <ScrollReveal key={cat.title} delay={i * 0.1} direction={i % 2 === 0 ? "left" : "right"}>
              <div className="bg-card border border-border rounded-2xl p-6 md:p-8 h-full hover-lift">
                <h3 className="font-display text-xl font-bold mb-6 text-coral">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-muted-foreground text-sm flex items-start gap-3">
                      <span className="w-1.5 h-1.5 bg-coral/60 rounded-full mt-1.5 shrink-0" />
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
