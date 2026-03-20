import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

interface Project {
  number: string;
  category: string;
  title: string;
  role: string;
  description: string;
  tasks: string[];
  challenge: string;
  lesson: string;
  quote: string;
  links?: { label: string; url: string }[];
}

const projects: Project[] = [
  {
    number: "01",
    category: "Aviación privada · Social Media",
    title: "WeloJets",
    role: "Social Media Content Specialist",
    description: "WeloJets necesitaba una presencia digital que transmitiera exclusividad sin ser fría y confianza sin ser aburrida.",
    tasks: [
      "Estrategia multicanal: Instagram, LinkedIn, Facebook y Blog",
      "Creación de contenido gráfico y video desde cero",
      "Redacción de copies, artículos y reportes de métricas",
      "Gestión completa de pauta publicitaria (Meta Ads)",
      "Mantenimiento y actualizaciones de la web",
    ],
    challenge: "Vender un servicio de lujo por redes requiere un tono muy específico: aspiracional pero cercano, premium pero no inalcanzable.",
    lesson: "Que el contenido de lujo funciona cuando deja de intentar parecer lujoso. Los mejores resultados vinieron de mostrar la experiencia real, no la fantasía.",
    quote: "El contenido premium no se trata de filtros dorados — se trata de contar una historia que haga sentir algo.",
    links: [{ label: "@welojets", url: "https://www.instagram.com/welojets" }],
  },
  {
    number: "02",
    category: "Editorial · Community Management",
    title: "Edhasa Argentina",
    role: "Community Manager",
    description: "Una editorial con un catálogo enorme y un público lector que vive en redes. El desafío: hacer que los libros hablen por sí mismos.",
    tasks: [
      "Planificación y ejecución de contenido para redes sociales",
      "Creación de piezas gráficas adaptadas al universo editorial",
      "Estrategia de engagement con comunidad lectora",
      "Coordinación con el equipo editorial para lanzamientos",
    ],
    challenge: "El mundo editorial tiene un público apasionado pero exigente. No alcanza con subir la tapa del libro — hay que generar conversación, anticipación, comunidad.",
    lesson: "Que las comunidades nicho son las más valiosas. Un comentario genuino de un lector tiene más impacto que mil likes genéricos.",
    quote: "En el mundo editorial, el contenido no compite por atención — compite por relevancia.",
    links: [{ label: "@edhasaargentina", url: "https://www.instagram.com/edhasaargentina" }],
  },
  {
    number: "03",
    category: "Agencia creativa · Comunicación integral",
    title: "Riverside Agency",
    role: "Comunicación y Prensa",
    description: "Riverside necesitaba alguien que pudiera manejar todo: redes, web, prensa, pauta publicitaria, comunicación interna y externa.",
    tasks: [
      "Gestión de redes sociales (IG, Twitter, Web)",
      "Contenido gráfico y multimedial",
      "Supervisión y creación de pauta publicitaria",
      "Análisis de métricas y reportes",
      "Comunicación y promoción interna y externa",
    ],
    challenge: "Comunicar para una agencia creativa es meta: estás vendiendo comunicación con comunicación. El estándar es altísimo.",
    lesson: "Unificar la voz de marca entre canales internos y externos. No puede sonar distinto en un newsletter que en un reel.",
    quote: "Cuando tu cliente es una agencia creativa, no podés ser buena — tenés que ser impecable.",
    links: [{ label: "@riversideagency", url: "https://www.instagram.com/riversideagency" }],
  },
  {
    number: "04",
    category: "Producción cultural · Audiovisual",
    title: "Huinca Cine + Festival Wateke",
    role: "Producción y Comunicación",
    description: "Huinca es una productora que vive entre festivales, documentales y proyectos independientes. Cada uno con su identidad, su público, su urgencia.",
    tasks: [
      "Comunicación interna y externa integral",
      "Coberturas en vivo de eventos y festivales",
      "Creación de reels, posteos y piezas para cada proyecto",
      "Contacto y gestión con medios y directores",
      "Traducciones profesionales inglés-español",
    ],
    challenge: "El cine independiente no tiene presupuesto de marketing de Netflix. Cada peso en comunicación tiene que multiplicarse.",
    lesson: "A adaptar la voz a cada proyecto sin perder la identidad de la productora.",
    quote: "El cine independiente te enseña a hacer mucho con poco — y eso es comunicación pura.",
    links: [
      { label: "@huincacine", url: "https://www.instagram.com/huincacine" },
      { label: "@festivalwateke", url: "https://www.instagram.com/festivalwateke" },
    ],
  },
  {
    number: "05",
    category: "Medios · Institucional · Prensa",
    title: "Octubre · Página 12 · Min. de Turismo",
    role: "Comunicación y Contenido",
    description: "Colaboraciones con medios y organismos que tienen algo en común: audiencias masivas, poco margen de error, y necesidad de credibilidad.",
    tasks: [
      "Planificación y ejecución de contenido institucional",
      "Comunicación adaptada a diferentes públicos y canales",
      "Coordinación con equipos editoriales y de prensa",
      "Mantenimiento de presencia digital coherente",
    ],
    challenge: "Comunicar para instituciones y medios grandes implica navegar burocracia, cadenas de aprobación y mucha responsabilidad.",
    lesson: "Encontrar el equilibrio entre el tono institucional que se requiere y la frescura que necesitan las redes para funcionar.",
    quote: "La comunicación institucional te da una disciplina que después aplicás a todo lo demás.",
    links: [{ label: "@neterwalk", url: "https://www.instagram.com/neterwalk" }],
  },
  {
    number: "06",
    category: "Producción audiovisual · Sets",
    title: "Avon · Ron Don Q · Just",
    role: "Asistente de Producción Freelance",
    description: "El set de filmación. Producciones publicitarias para marcas globales donde todo se decide en el momento.",
    tasks: [
      "Asistencia integral en set de producción",
      "Coordinación logística con equipo técnico y creativo",
      "Soporte al equipo de dirección",
      "Resolución de imprevistos en tiempo real",
    ],
    challenge: "En un set, no hay 'después lo arreglo'. Cada minuto cuenta, cada error cuesta plata, y tu trabajo es que nada falle.",
    lesson: "Que la producción es comunicación en su forma más cruda: coordinás personas, tiempos, recursos y expectativas.",
    quote: "El set te enseña algo que ningún libro te da: a resolver bajo presión, en silencio, y bien.",
  },
  {
    number: "07",
    category: "Evento internacional · Press Operations",
    title: "JJ.OO. de la Juventud 2018",
    role: "Press Operations Office · Buenos Aires",
    description: "Un evento olímpico. Periodistas de todo el mundo. Cobertura en tiempo real. Protocolos internacionales.",
    tasks: [
      "Operaciones de prensa del Comité Organizador",
      "Coordinación con medios internacionales",
      "Logística de acreditaciones y soporte a periodistas",
      "Trabajo en entorno multicultural y de alta presión",
    ],
    challenge: "Todo pasa en vivo, todo es urgente, todo es global. Operás con estándares olímpicos literalmente.",
    lesson: "La certeza de que puedo funcionar en entornos internacionales, con equipos que no hablan tu idioma, bajo presión, y disfrutarlo.",
    quote: "Los Juegos Olímpicos no te enseñan comunicación — te enseñan qué tipo de comunicadora querés ser.",
  },
];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <ScrollReveal delay={index * 0.08} className="group">
      <div
        className="bg-card border border-border rounded-2xl overflow-hidden hover-lift cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
        {/* Header */}
        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <span className="text-coral font-display text-5xl md:text-6xl font-bold opacity-20 leading-none">
              {project.number}
            </span>
            <span className="text-xs text-muted-foreground uppercase tracking-widest bg-secondary px-3 py-1 rounded-full">
              {project.category}
            </span>
          </div>

          <h3 className="font-display text-2xl md:text-3xl font-bold mb-2">{project.title}</h3>
          <p className="text-coral text-sm font-medium mb-4">{project.role}</p>
          <p className="text-muted-foreground leading-relaxed">{project.description}</p>

          <button
            className="mt-4 text-coral text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            {expanded ? "Cerrar" : "Ver más"}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
              ↓
            </motion.span>
          </button>
        </div>

        {/* Expanded content */}
        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden"
            >
              <div className="px-6 md:px-8 pb-8 border-t border-border pt-6 space-y-6">
                <div>
                  <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground mb-3">
                    Lo que hice
                  </h4>
                  <ul className="space-y-2">
                    {project.tasks.map((task, i) => (
                      <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                        <span className="w-1 h-1 bg-coral rounded-full mt-2 shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground mb-2">
                    El desafío
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
                </div>

                <div>
                  <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground mb-2">
                    Lo que aprendí
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.lesson}</p>
                </div>

                <blockquote className="border-l-2 border-coral pl-4 py-1">
                  <p className="text-foreground italic text-sm">"{project.quote}"</p>
                </blockquote>

                {project.links && (
                  <div className="flex flex-wrap gap-3">
                    {project.links.map((link) => (
                      <a
                        key={link.url}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-coral text-sm hover:underline underline-offset-4"
                      >
                        📸 {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ScrollReveal>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-32 md:py-40 section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-coral font-body text-sm uppercase tracking-[0.2em] mb-4">Proyectos</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl mb-16">
            Cada marca es un mundo. Así los abordé.
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.number} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};
