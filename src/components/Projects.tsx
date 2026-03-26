import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import { ChevronLeft, ChevronRight, X, Layout, Users, Video, BarChart3, Presentation, Globe } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

const ProjectGallery = ({ title, images, reels, lang }: { title?: string, images?: readonly string[], reels?: readonly string[], lang: string }) => {
  const [innerEmblaRef, innerEmblaApi] = useEmblaCarousel({ loop: true, align: "center", dragFree: true });

  const scrollPrev = useCallback(() => {
    if (innerEmblaApi) innerEmblaApi.scrollPrev();
  }, [innerEmblaApi]);

  const scrollNext = useCallback(() => {
    if (innerEmblaApi) innerEmblaApi.scrollNext();
  }, [innerEmblaApi]);

  if ((!images || images.length === 0) && (!reels || reels.length === 0)) return null;

  return (
    <div className="mt-24 pt-16 border-t border-border/50 animate-fade-up" style={{ animationDelay: "300ms" }}>
      <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
        <div>
          <h4 className="font-display text-xl md:text-2xl font-bold uppercase tracking-widest text-foreground">
            {title || (lang === "es" ? "Galería Multimedia" : "Media Gallery")}
          </h4>
          <p className="text-muted-foreground text-sm mt-2">
            {lang === "es" ? "Desliza o usa las flechas para explorar" : "Swipe or use arrows to explore"}
          </p>
        </div>
        
        <div className="flex gap-4">
          <button 
            onClick={scrollPrev} 
            className="bg-secondary hover:bg-primary text-foreground hover:text-white p-4 rounded-full transition-all shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollNext} 
            className="bg-secondary hover:bg-primary text-foreground hover:text-white p-4 rounded-full transition-all shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <div className="relative rounded-3xl overflow-hidden bg-transparent select-none mt-2">
        <div className="overflow-hidden cursor-grab active:cursor-grabbing py-8 md:py-12" ref={innerEmblaRef}>
          <div className="flex -ml-6 md:-ml-12 items-center h-[55vh] md:h-[70vh]">
            
            {reels?.map((reel, idx) => (
              <div className="flex-none h-full aspect-[9/16] relative pl-6 md:pl-12 group mix-blend-normal" key={`reel-${idx}`}>
                <div className="w-full h-full rounded-2xl overflow-hidden shadow-2xl bg-black/5 ring-1 ring-white/10 transform transition-transform duration-700 group-hover:scale-[1.02]">
                  <iframe 
                    src={`${reel.replace(/\/?$/, '')}/embed`} 
                    className="w-full h-full border-0 absolute inset-0 pointer-events-auto" 
                    scrolling="no" 
                    allowTransparency={true} 
                    allowFullScreen={true}
                    title={`Instagram Reel ${idx + 1}`}
                  />
                </div>
              </div>
            ))}

            {images?.map((img, idx) => (
              <div className="flex-none h-full relative pl-6 md:pl-12 group mix-blend-normal" key={`img-${idx}`}>
                <div className="h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-[1.02] bg-charcoal/50">
                  {img.endsWith('.mp4') || img.endsWith('.mov') || img.endsWith('.MOV') ? (
                    <video src={img} className="h-full w-auto max-w-none object-contain rounded-2xl pointer-events-none" autoPlay muted loop playsInline />
                  ) : (
                    <img 
                      src={img} 
                      alt={`Gallery media ${idx + 1}`} 
                      className="h-full w-auto max-w-none object-contain rounded-2xl pointer-events-none"
                    />
                  )}
                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, onClick }: { project: any, onClick: () => void }) => {
  const { lang } = useLanguage();

  const getIcon = () => {
    const title = project.title.toLowerCase();
    const cat = project.category.toLowerCase();
    if (title.includes('agency') || title.includes('gestión')) return <BarChart3 className="w-16 h-16 text-primary" />;
    if (title.includes('community') || cat.includes('social')) return <Users className="w-16 h-16 text-primary" />;
    if (cat.includes('audiovisual') || title.includes('cine')) return <Video className="w-16 h-16 text-primary" />;
    if (title.includes('presentations')) return <Presentation className="w-16 h-16 text-primary" />;
    if (cat.includes('web')) return <Globe className="w-16 h-16 text-primary" />;
    return <Layout className="w-16 h-16 text-primary" />;
  };

  return (
    <motion.div 
      layoutId={`project-container-${project.number}`}
      onClick={onClick}
      className="relative min-h-[600px] md:min-h-[700px] rounded-[2.5rem] overflow-hidden cursor-pointer group flex flex-col justify-end transition-all duration-700 hover:-translate-y-2 hover:shadow-[0_40px_100px_rgba(0,0,0,0.4)] border border-white/5 max-w-5xl mx-auto w-full mb-16"
    >
      {/* Full-Card Background Media */}
      <motion.div 
        layoutId={`project-bg-${project.number}`}
        className="absolute inset-0 z-0 overflow-hidden"
      >
        {project.images && project.images.length > 0 ? (
          <>
            {project.images[0].endsWith('.mp4') || project.images[0].endsWith('.mov') || project.images[0].endsWith('.MOV') ? (
              <video 
                src={project.images[0]} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                autoPlay muted loop playsInline 
              />
            ) : (
              <img 
                src={project.images[0]} 
                alt={project.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
            )}
          </>
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-charcoal to-background flex items-center justify-center">
            <div className="opacity-20 transform group-hover:scale-110 transition-transform duration-1000">
              {getIcon()}
            </div>
          </div>
        )}
        
        {/* Visual Overlays for Vibe and Readability (Lowered opacity to 10-15%) */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-primary/5 z-15" />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 p-8 md:p-14 mt-auto w-full backdrop-blur-[2px] bg-black/10 border-t border-white/5 group-hover:bg-black/30 transition-all duration-500">
        <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
          <div className="flex items-center gap-5">
            <motion.span 
              layoutId={`project-number-${project.number}`}
              className="text-white font-display text-4xl md:text-5xl font-black opacity-30 group-hover:opacity-60 transition-opacity"
            >
              {project.number}
            </motion.span>
            <motion.span 
              layoutId={`project-category-${project.number}`}
              className="text-[10px] md:text-xs text-white uppercase tracking-widest font-bold bg-white/10 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/10 group-hover:bg-primary group-hover:text-white transition-all duration-300"
            >
              {project.category}
            </motion.span>
          </div>
        </div>

        <motion.h3 
          layoutId={`project-title-${project.number}`}
          className="font-display text-4xl md:text-6xl font-bold mb-4 text-white group-hover:text-primary transition-colors duration-300 leading-tight tracking-tight"
        >
          {project.title}
        </motion.h3>
        
        <motion.p 
          layoutId={`project-role-${project.number}`}
          className="text-primary/90 text-sm md:text-base font-bold uppercase tracking-[0.2em] mb-8"
        >
          {project.role}
        </motion.p>
        
        <p className="text-white/80 leading-relaxed text-lg md:text-xl max-w-4xl font-medium mb-10 group-hover:text-white transition-colors">
          {project.description}
        </p>

        <div className="flex flex-wrap items-center justify-between gap-8 mt-4">
          <div className="flex gap-3 flex-wrap">
            {project.tags?.map((tag: string, i: number) => (
              <span key={i} className="text-[10px] uppercase font-bold tracking-widest text-white/40 border border-white/10 px-4 py-2 rounded-xl backdrop-blur-sm">
                {tag}
              </span>
            ))}
          </div>
          <div className="text-white text-sm font-bold flex items-center gap-5 transition-all duration-300 bg-white/10 backdrop-blur-xl border border-white/20 hover:border-primary group-hover:bg-primary px-10 py-5 rounded-[1.5rem] shadow-2xl">
            <span>{lang === "es" ? "Ver Case Study" : "View Case Study"}</span>
            <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center transition-transform duration-300 group-hover:translate-x-2 group-hover:bg-white/20">
              <ChevronRight className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const FullProjectView = ({ project, onClose }: { project: any, onClose: () => void }) => {
  const { lang } = useLanguage();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = "auto"; };
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      className="fixed inset-0 z-[200] bg-background/90 backdrop-blur-sm overflow-y-auto"
    >
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98, transition: { duration: 0.2 } }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="relative w-full min-h-screen bg-background"
      >
        <button 
          onClick={onClose}
          className="fixed right-4 top-4 md:right-8 md:top-8 bg-black/10 hover:bg-primary text-foreground hover:text-white p-3 md:p-4 rounded-full transition-all z-[210] shadow-sm backdrop-blur"
        >
          <X className="w-6 h-6 md:w-8 md:h-8" />
        </button>

        <div className="max-w-[1400px] mx-auto px-6 py-20 md:px-16 md:py-32 space-y-16 md:space-y-32">
          
          <div className="max-w-5xl">
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="inline-block text-primary font-body text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-6 bg-primary/10 px-4 py-2 rounded-full"
            >
              {project.category}
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="font-display text-4xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tight leading-[1.1]"
            >
              {project.title}
            </motion.h2>
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-primary font-bold tracking-widest uppercase text-sm md:text-base pl-1 border-l-4 border-primary uppercase"
              >
                {project.role}
              </motion.p>
              {project.heroMetric && (
                <span className="bg-primary text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg shadow-primary/20">
                  {project.heroMetric}
                </span>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed text-xl md:text-3xl font-medium max-w-4xl">
              {project.description}
            </p>
          </div>

          {/* Metrics, Challenge, Strategy, etc. */}
          {project.metricsComparison && (
            <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-12 bg-secondary/20 p-8 md:p-16 rounded-[2rem] border border-border/50">
              <div className="text-center space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{lang === "es" ? "Antes" : "Before"}</span>
                <div className="text-4xl md:text-6xl font-display font-black text-muted-foreground/30">{project.metricsComparison.before.value}</div>
                <div className="text-lg font-bold text-foreground">{project.metricsComparison.before.label}</div>
                <div className="text-sm text-muted-foreground">{project.metricsComparison.before.detail}</div>
              </div>
              
              <div className="flex justify-center rotate-90 md:rotate-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary flex items-center justify-center text-white shadow-xl shadow-primary/30">
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </div>

              <div className="text-center space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">{lang === "es" ? "Después" : "After"}</span>
                <div className="text-4xl md:text-6xl font-display font-black text-primary">{project.metricsComparison.after.value}</div>
                <div className="text-lg font-bold text-foreground">{project.metricsComparison.after.label}</div>
                <div className="text-sm text-muted-foreground">{project.metricsComparison.after.detail}</div>
              </div>
            </div>
          )}

          {project.keyMetrics && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {project.keyMetrics.map((stat: any, i: number) => (
                <div key={i} className="bg-charcoal p-8 md:p-10 rounded-[2rem] border border-border shadow-2xl relative overflow-hidden group hover:border-primary/50 transition-colors">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-primary/10 transition-colors" />
                  <div className="text-3xl md:text-5xl font-display font-black text-primary mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          <div className="grid lg:grid-cols-12 gap-12 md:gap-24">
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <h4 className="font-display text-sm md:text-base font-bold uppercase tracking-[0.2em] text-foreground opacity-60 flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-primary" />
                  {lang === "es" ? "El Problema" : "The Problem"}
                </h4>
                <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed font-medium">
                  {project.problem || project.challenge}
                </p>
              </div>

              <div className="space-y-8">
                <h4 className="font-display text-sm md:text-base font-bold uppercase tracking-[0.2em] text-foreground opacity-60 flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-primary" />
                  {t.projects.whatIDid[lang]}
                </h4>
                <ul className="grid sm:grid-cols-1 gap-4">
                  {project.tasks.map((task: string, i: number) => (
                    <li key={i} className="text-muted-foreground text-lg flex items-start gap-4 p-5 rounded-2xl bg-secondary/10 border border-transparent hover:border-border transition-colors">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2.5 shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-5 space-y-12">
              {project.strategy && (
                <div className="space-y-8">
                  <h4 className="font-display text-sm md:text-base font-bold uppercase tracking-[0.2em] text-foreground opacity-60">
                    {lang === "es" ? "Mi Estrategia" : "My Strategy"}
                  </h4>
                  <div className="space-y-6">
                    {project.strategy.map((item: any, i: number) => (
                      <div key={i} className="bg-charcoal border border-border p-8 rounded-2xl space-y-3">
                        <div className="text-primary font-bold text-xs uppercase tracking-widest">0{i + 1}. {item.title}</div>
                        <p className="text-foreground/80 text-base leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="p-8 md:p-10 rounded-3xl bg-secondary/30 border border-border relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
                <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground mb-6 opacity-60">
                  {t.projects.lesson[lang]}
                </h4>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium italic relative z-10">
                  "{project.insight || project.lesson}"
                </p>
              </div>
            </div>
          </div>

          {(project.testimonial || project.quote) && (
            project.testimonial ? (
              <div className="max-w-4xl mx-auto text-center space-y-10">
                <div className="inline-block p-4 rounded-full bg-primary/10 text-primary">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                    <path d="M10 25h5l3-8h-6l2-8h-7l-2 8v8h5zm15 0h5l3-8h-6l2-8h-7l-2 8v8h5z" />
                  </svg>
                </div>
                <blockquote className="font-display text-2xl md:text-5xl font-bold leading-tight md:leading-[1.2] text-foreground">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="space-y-2">
                  <div className="h-1 w-20 bg-primary mx-auto" />
                  <p className="text-primary font-bold uppercase tracking-widest text-sm">{project.testimonial.author}</p>
                </div>
              </div>
            ) : (
              <blockquote className="my-16 max-w-4xl mx-auto bg-gradient-to-br from-primary to-[#ff8f8f] text-white p-8 md:p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(255,107,107,0.3)] transform hover:scale-[1.01] transition-transform duration-500 text-center">
                <p className="font-display text-2xl md:text-4xl font-bold leading-tight md:leading-[1.3]">
                  "{project.quote}"
                </p>
              </blockquote>
            )
          )}

          {project.links && (
            <div className="flex flex-wrap justify-center gap-4 pt-4">
              {project.links.map((link: any) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground text-sm font-bold bg-secondary hover:bg-primary hover:text-white px-10 py-5 rounded-full inline-flex items-center gap-3 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-border/50 hover:border-primary"
                >
                  <span className="text-xl leading-none font-light italic">Visit Project</span> {link.label}
                </a>
              ))}
            </div>
          )}

          {project.galleries ? (
            <div className="space-y-32">
              {project.galleries.map((gallery: any, idx: number) => (
                <ProjectGallery key={idx} title={gallery.title} images={gallery.images} reels={gallery.reels} lang={lang} />
              ))}
            </div>
          ) : !project.hideGallery && (
            <ProjectGallery images={project.images} reels={project.reels} lang={lang} />
          )}

        </div>
      </motion.div>
    </motion.div>
  );
};

export const Projects = () => {
  const { lang } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const projects = t.projects.items[lang];

  return (
    <section id="projects" className="py-32 md:py-48 section-padding overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16 md:mb-32">
            <span className="text-primary font-body text-sm font-bold uppercase tracking-[0.2em] mb-4 bg-primary/10 px-4 py-2 rounded-full inline-block">
              {t.projects.label[lang]}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-7xl font-black leading-tight max-w-4xl tracking-tight">
              {t.projects.heading[lang]}
            </h2>
          </div>
        </ScrollReveal>

        <div className="flex flex-col gap-16 md:gap-24">
          {projects.map((project: any) => (
            <ProjectCard 
              key={project.number}
              project={project} 
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <FullProjectView 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};
