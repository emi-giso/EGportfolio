import { ScrollReveal } from "./ScrollReveal";

const stats = [
  { value: "8+", label: "Marcas gestionadas" },
  { value: "C2", label: "Cambridge Proficiency" },
  { value: "360°", label: "Estrategia → Ejecución" },
  { value: "+4", label: "Años de experiencia" },
];

const skills = [
  "Estrategia digital", "Social media", "Producción audiovisual", "Prensa",
  "Copywriting", "Meta Ads", "Bilingüe EN/ES",
];

export const About = () => {
  return (
    <section id="about" className="py-32 md:py-40 section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-coral font-body text-sm uppercase tracking-[0.2em] mb-4">Sobre mí</p>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl mb-8">
            Comunicadora que piensa en estrategia, pero se arremanga para ejecutar
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-16 mt-12">
          <div className="space-y-6">
            <ScrollReveal delay={0.2}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Manejo las redes de WeloJets, Edhasa Argentina, Riverside Agency, Huinca Cine,
                Neterwalk y Festival Wateke. También trabajé en comunicación para Octubre,
                Página 12 y el Ministerio de Turismo de la Ciudad de Buenos Aires.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-muted-foreground text-lg leading-relaxed">
                No soy la que te dice "hay que hacer reels" — soy la que entiende por qué,
                arma la estrategia, escribe el copy, graba, edita, publica, mide,
                y ajusta para el mes siguiente. End to end.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <blockquote className="border-l-2 border-coral pl-6 py-2">
                <p className="text-foreground italic text-lg">
                  "Me interesa la comunicación que resuelve problemas reales,
                  no la que llena grillas por llenar."
                </p>
              </blockquote>
            </ScrollReveal>

            <ScrollReveal delay={0.5}>
              <p className="text-muted-foreground leading-relaxed">
                Lic. en Cs. de la Comunicación (UADE), inglés C2 (Cambridge Proficiency),
                intercambio en Madrid (UC3M), y parte del equipo de prensa en los
                Juegos Olímpicos de la Juventud Buenos Aires 2018.
              </p>
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
                  <p className="font-display text-3xl md:text-4xl font-bold text-coral mb-2">{stat.value}</p>
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
