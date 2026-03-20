import { ScrollReveal } from "./ScrollReveal";

const timeline = [
  { year: "2024 – Presente", title: "Comunicadora Integral", org: "Riverside Agency · Edhasa Argentina" },
  { year: "2023 – 2024", title: "Especialista en Contenido", org: "WeloJets" },
  { year: "2023 – Presente", title: "Community Manager Freelance", org: "Neterwalk · Yamaneat · Grupo Octubre · Festival Wateke" },
  { year: "2022", title: "Producción y Comunicación", org: "Huinca Cine" },
  { year: "2021", title: "Intercambio · Comunicación Audiovisual", org: "Universidad Carlos III de Madrid" },
  { year: "2018 – 2021", title: "Lic. en Cs. de la Comunicación", org: "UADE · Buenos Aires" },
  { year: "2021", title: "Cambridge Proficiency (C2)", org: "CEFR" },
  { year: "2018", title: "JJ.OO. de la Juventud — Press Operations", org: "Buenos Aires 2018" },
];

const volunteer = [
  { title: "Festival Solidario", desc: "Organización y difusión de eventos solidarios — comunicación aplicada a causas reales." },
  { title: "Conduciendo a Conciencia", desc: "2014 – Presente · +12 años de concientización vial. No es un voluntariado — es un compromiso." },
];

export const Education = () => {
  return (
    <section id="education" className="py-32 md:py-40 section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-coral font-body text-sm uppercase tracking-[0.2em] mb-4">Formación</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl mb-16">
            De dónde vengo
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />
            <div className="space-y-8">
              {timeline.map((item, i) => (
                <ScrollReveal key={i} delay={i * 0.06}>
                  <div className="flex gap-6 items-start">
                    <div className="w-4 h-4 rounded-full bg-coral/20 border-2 border-coral shrink-0 mt-1 relative z-10" />
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

          {/* Volunteer */}
          <div>
            <ScrollReveal>
              <h3 className="font-display text-xl font-bold mb-8 text-foreground">
                Fuera de lo profesional
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
