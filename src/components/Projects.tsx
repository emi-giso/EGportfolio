import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
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
            className="bg-secondary hover:bg-coral text-foreground hover:text-white p-4 rounded-full transition-all shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-coral/50"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={scrollNext} 
            className="bg-secondary hover:bg-coral text-foreground hover:text-white p-4 rounded-full transition-all shadow-sm hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-coral/50"
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
                  {img.endsWith('.mp4') ? (
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

const ProjectCard = ({ project }: { project: any }) => {
  const { lang } = useLanguage();

  // Determine icon based on category/title
  const getIcon = () => {
    const title = project.title.toLowerCase();
    const cat = project.category.toLowerCase();
    if (title.includes('agency') || title.includes('gestión')) return <BarChart3 className="w-16 h-16 text-coral" />;
    if (title.includes('community') || cat.includes('social')) return <Users className="w-16 h-16 text-coral" />;
    if (cat.includes('audiovisual') || title.includes('cine')) return <Video className="w-16 h-16 text-coral" />;
    if (title.includes('presentations')) return <Presentation className="w-16 h-16 text-coral" />;
    if (cat.includes('web')) return <Globe className="w-16 h-16 text-coral" />;
    return <Layout className="w-16 h-16 text-coral" />;
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <div className="bg-card border border-border/50 rounded-3xl overflow-hidden cursor-pointer flex flex-col group text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_40px_80px_rgba(0,0,0,0.2)] hover:border-coral/40 max-w-4xl mx-auto w-full mb-12 animate-fade-up">
          {/* Header Image/Icon Area */}
          <div className="h-64 md:h-80 bg-secondary/30 relative flex items-center justify-center overflow-hidden group-hover:opacity-90 transition-opacity">
            {project.images && project.images.length > 0 ? (
              <div className="absolute inset-0 w-full h-full">
                {project.images[0].endsWith('.mp4') || project.images[0].endsWith('.mov') || project.images[0].endsWith('.MOV') ? (
                  <video 
                    src={project.images[0]} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                    autoPlay muted loop playsInline 
                  />
                ) : (
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500" />
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-gradient-to-br from-coral/5 to-transparent opacity-50" />
                <div className="relative z-10 transform group-hover:scale-110 transition-transform duration-700">
                  {getIcon()}
                </div>
              </>
            )}
            
            {/* Visual background elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-coral/5 rounded-full blur-3xl group-hover:bg-coral/20 transition-colors duration-700" />
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-coral/5 rounded-full blur-3xl group-hover:bg-coral/10 transition-colors duration-700" />
          </div>

          <div className="p-8 md:p-12 flex flex-col bg-gradient-to-br from-card to-background relative overflow-hidden">
            <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
              <div className="flex items-center gap-4">
                <span className="text-coral font-display text-4xl md:text-5xl font-black opacity-20 group-hover:opacity-40 transition-opacity">
                  {project.number}
                </span>
                <span className="text-[10px] md:text-xs text-foreground uppercase tracking-widest font-bold bg-secondary px-4 py-2 rounded-full group-hover:bg-coral group-hover:text-white transition-all duration-300">
                  {project.category}
                </span>
              </div>
              {project.heroMetric && (
                <span className="text-[10px] md:text-xs text-coral font-bold uppercase tracking-widest bg-coral/10 px-4 py-2 rounded-full border border-coral/20 transform group-hover:scale-105 transition-transform">
                  {project.heroMetric}
                </span>
              )}
            </div>

            <h3 className="font-display text-4xl md:text-5xl font-bold mb-4 group-hover:text-coral transition-colors duration-300 leading-tight">
              {project.title}
            </h3>
            <p className="text-coral text-sm md:text-base font-bold uppercase tracking-widest mb-6 opacity-80">
              {project.role}
            </p>
            <p className="text-muted-foreground leading-relaxed text-lg md:text-xl max-w-3xl">
              {project.description}
            </p>

            <div className="mt-10 flex items-center justify-between items-end">
              <div className="flex gap-2 flex-wrap">
                {project.tags?.map((tag: string, i: number) => (
                  <span key={i} className="text-[10px] uppercase font-bold tracking-widest text-muted-foreground border border-border px-3 py-1.5 rounded-lg">
                    {tag}
                  </span>
                ))}
              </div>
              <button className="text-foreground text-sm font-bold flex items-center gap-4 group-hover:text-white transition-all duration-300 bg-secondary group-hover:bg-coral px-8 py-4 rounded-2xl shadow-sm hover:shadow-xl">
                <span>{lang === "es" ? "Ver Case Study" : "View Case Study"}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-2">→</span>
              </button>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="w-[100vw] h-[100dvh] max-w-none m-0 p-0 rounded-none border-none bg-background overflow-y-auto block z-[100]">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        <DialogDescription className="sr-only">{project.description}</DialogDescription>

        <DialogClose className="fixed right-4 top-4 md:right-8 md:top-8 bg-black/10 hover:bg-coral text-foreground hover:text-white p-3 md:p-4 rounded-full transition-all z-[110] shadow-sm backdrop-blur">
          <X className="w-6 h-6 md:w-8 md:h-8" />
        </DialogClose>

        <div className="max-w-[1400px] mx-auto px-6 py-20 md:px-16 md:py-32 space-y-16 md:space-y-32">
          
          {/* Cabecera del Proyecto */}
          <div className="max-w-5xl animate-fade-up">
            <span className="inline-block text-coral font-body text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-6 bg-coral/10 px-4 py-2 rounded-full">
              {project.category}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tight leading-[1.1]">
              {project.title}
            </h2>
            <div className="flex flex-wrap items-center gap-6 mb-10">
              <p className="text-coral font-bold tracking-widest uppercase text-sm md:text-base pl-1 border-l-4 border-coral">
                {project.role}
              </p>
              {project.heroMetric && (
                <span className="bg-coral text-white text-xs font-bold uppercase tracking-[0.2em] px-4 py-2 rounded-full shadow-lg shadow-coral/20">
                  {project.heroMetric}
                </span>
              )}
            </div>
            <p className="text-muted-foreground leading-relaxed text-xl md:text-3xl font-medium max-w-4xl">
              {project.description}
            </p>
          </div>

          {/* Comparación de Métricas (Before/After) */}
          {project.metricsComparison && (
            <div className="grid md:grid-cols-[1fr_auto_1fr] items-center gap-8 md:gap-12 bg-secondary/20 p-8 md:p-16 rounded-[2rem] border border-border/50 animate-fade-up" style={{ animationDelay: "100ms" }}>
              <div className="text-center space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">{lang === "es" ? "Antes" : "Before"}</span>
                <div className="text-4xl md:text-6xl font-display font-black text-muted-foreground/30">{project.metricsComparison.before.value}</div>
                <div className="text-lg font-bold text-foreground">{project.metricsComparison.before.label}</div>
                <div className="text-sm text-muted-foreground">{project.metricsComparison.before.detail}</div>
              </div>
              
              <div className="flex justify-center rotate-90 md:rotate-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-coral flex items-center justify-center text-white shadow-xl shadow-coral/30">
                  <ChevronRight className="w-6 h-6 md:w-8 md:h-8" />
                </div>
              </div>

              <div className="text-center space-y-4">
                <span className="text-xs font-bold uppercase tracking-widest text-coral">{lang === "es" ? "Después" : "After"}</span>
                <div className="text-4xl md:text-6xl font-display font-black text-coral">{project.metricsComparison.after.value}</div>
                <div className="text-lg font-bold text-foreground">{project.metricsComparison.after.label}</div>
                <div className="text-sm text-muted-foreground">{project.metricsComparison.after.detail}</div>
              </div>
            </div>
          )}

          {/* Key Metrics Grid */}
          {project.keyMetrics && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 animate-fade-up" style={{ animationDelay: "150ms" }}>
              {project.keyMetrics.map((stat: any, i: number) => (
                <div key={i} className="bg-charcoal p-8 md:p-10 rounded-[2rem] border border-border shadow-2xl relative overflow-hidden group hover:border-coral/50 transition-colors">
                  <div className="absolute top-0 right-0 w-24 h-24 bg-coral/5 rounded-bl-full -mr-12 -mt-12 group-hover:bg-coral/10 transition-colors" />
                  <div className="text-3xl md:text-5xl font-display font-black text-coral mb-2">{stat.value}</div>
                  <div className="text-xs md:text-sm font-bold uppercase tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">{stat.label}</div>
                </div>
              ))}
            </div>
          )}

          {/* Dos Columnas: Problema y Tareas */}
          <div className="grid lg:grid-cols-12 gap-12 md:gap-24 animate-fade-up" style={{ animationDelay: "200ms" }}>
            <div className="lg:col-span-7 space-y-12">
              <div className="space-y-8">
                <h4 className="font-display text-sm md:text-base font-bold uppercase tracking-[0.2em] text-foreground opacity-60 flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-coral" />
                  {lang === "es" ? "El Problema" : "The Problem"}
                </h4>
                <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed font-medium">
                  {project.problem || project.challenge}
                </p>
              </div>

              <div className="space-y-8">
                <h4 className="font-display text-sm md:text-base font-bold uppercase tracking-[0.2em] text-foreground opacity-60 flex items-center gap-4">
                  <span className="w-8 h-[2px] bg-coral" />
                  {t.projects.whatIDid[lang]}
                </h4>
                <ul className="grid sm:grid-cols-1 gap-4">
                  {project.tasks.map((task: string, i: number) => (
                    <li key={i} className="text-muted-foreground text-lg flex items-start gap-4 p-5 rounded-2xl bg-secondary/10 border border-transparent hover:border-border transition-colors">
                      <span className="w-2 h-2 bg-coral rounded-full mt-2.5 shrink-0" />
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="lg:col-span-5 space-y-12">
              {/* Mi Estrategia */}
              {project.strategy && (
                <div className="space-y-8">
                  <h4 className="font-display text-sm md:text-base font-bold uppercase tracking-[0.2em] text-foreground opacity-60">
                    {lang === "es" ? "Mi Estrategia" : "My Strategy"}
                  </h4>
                  <div className="space-y-6">
                    {project.strategy.map((item: any, i: number) => (
                      <div key={i} className="bg-charcoal border border-border p-8 rounded-2xl space-y-3">
                        <div className="text-coral font-bold text-xs uppercase tracking-widest">0{i + 1}. {item.title}</div>
                        <p className="text-foreground/80 text-base leading-relaxed">{item.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Aprendizaje */}
              <div className="p-8 md:p-10 rounded-3xl bg-secondary/30 border border-border relative group overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-coral/5 rounded-bl-full -mr-16 -mt-16 group-hover:bg-coral/10 transition-colors" />
                <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground mb-6 opacity-60">
                  {t.projects.lesson[lang]}
                </h4>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium italic relative z-10">
                  "{project.insight || project.lesson}"
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial o Quote Impactante */}
          {project.testimonial ? (
            <div className="max-w-4xl mx-auto text-center space-y-10 animate-fade-up" style={{ animationDelay: "250ms" }}>
              <div className="inline-block p-4 rounded-full bg-coral/10 text-coral">
                <svg width="40" height="40" viewBox="0 0 40 40" fill="currentColor">
                  <path d="M10 25h5l3-8h-6l2-8h-7l-2 8v8h5zm15 0h5l3-8h-6l2-8h-7l-2 8v8h5z" />
                </svg>
              </div>
              <blockquote className="font-display text-2xl md:text-5xl font-bold leading-tight md:leading-[1.2] text-foreground">
                "{project.testimonial.quote}"
              </blockquote>
              <div className="space-y-2">
                <div className="h-1 w-20 bg-coral mx-auto" />
                <p className="text-coral font-bold uppercase tracking-widest text-sm">{project.testimonial.author}</p>
              </div>
            </div>
          ) : (
            <blockquote className="my-16 max-w-4xl mx-auto bg-gradient-to-br from-coral to-[#ff8f8f] text-white p-8 md:p-12 rounded-[3rem] shadow-[0_30px_60px_rgba(255,107,107,0.3)] transform hover:scale-[1.01] transition-transform duration-500 animate-fade-up text-center" style={{ animationDelay: "250ms" }}>
              <p className="font-display text-2xl md:text-4xl font-bold leading-tight md:leading-[1.3]">
                "{project.quote}"
              </p>
            </blockquote>
          )}

          {/* Enlaces Orgánicos */}
          {project.links && (
            <div className="flex flex-wrap justify-center gap-4 pt-4 animate-fade-up" style={{ animationDelay: "300ms" }}>
              {project.links.map((link: any) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground text-sm font-bold bg-secondary hover:bg-coral hover:text-white px-10 py-5 rounded-full inline-flex items-center gap-3 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-border/50 hover:border-coral"
                >
                  <span className="text-xl leading-none font-light italic">Visit Project</span> {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Galerías Multimedia */}
          {project.galleries ? (
            <div className="space-y-32">
              {project.galleries.map((gallery: any, idx: number) => (
                <ProjectGallery key={idx} title={gallery.title} images={gallery.images} reels={gallery.reels} lang={lang} />
              ))}
            </div>
          ) : (
            <ProjectGallery images={project.images} reels={project.reels} lang={lang} />
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
};

export const Projects = () => {
  const { lang } = useLanguage();
  const projects = t.projects.items[lang];

  return (
    <section id="projects" className="py-32 md:py-48 section-padding overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16 md:mb-32">
            <span className="text-coral font-body text-sm font-bold uppercase tracking-[0.2em] mb-4 bg-coral/10 px-4 py-2 rounded-full inline-block">
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
            />
          ))}
        </div>
      </div>
    </section>
  );
};
