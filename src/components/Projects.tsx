import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";

const ProjectCard = ({ project, index }: { project: typeof t.projects.items.es[number]; index: number }) => {
  const [expanded, setExpanded] = useState(false);
  const { lang } = useLanguage();

  return (
    <ScrollReveal delay={index * 0.08} className="group">
      <div
        className="bg-card border border-border rounded-2xl overflow-hidden hover-lift cursor-pointer"
        onClick={() => setExpanded(!expanded)}
      >
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

          <button className="mt-4 text-coral text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all duration-300">
            {expanded ? t.projects.collapse[lang] : t.projects.expand[lang]}
            <motion.span animate={{ rotate: expanded ? 180 : 0 }} transition={{ duration: 0.3 }}>↓</motion.span>
          </button>
        </div>

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
                    {t.projects.whatIDid[lang]}
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
                    {t.projects.challenge[lang]}
                  </h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{project.challenge}</p>
                </div>

                <div>
                  <h4 className="font-display text-sm font-semibold uppercase tracking-widest text-foreground mb-2">
                    {t.projects.lesson[lang]}
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
  const { lang } = useLanguage();
  const projects = t.projects.items[lang];

  return (
    <section id="projects" className="py-32 md:py-40 section-padding">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <p className="text-coral font-body text-sm uppercase tracking-[0.2em] mb-4">{t.projects.label[lang]}</p>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-tight max-w-3xl mb-16">
            {t.projects.heading[lang]}
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
