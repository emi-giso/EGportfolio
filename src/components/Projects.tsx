import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ScrollReveal } from "./ScrollReveal";
import { useLanguage } from "@/i18n/LanguageContext";
import { t } from "@/i18n/translations";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription, DialogClose } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ProjectCard = ({ project, index, onOpen, onClose }: { project: typeof t.projects.items.es[number] & { links?: readonly { readonly label: string; readonly url: string }[], images?: readonly string[], reels?: readonly string[] }; index: number; onOpen: () => void; onClose: () => void }) => {
  const { lang } = useLanguage();
  
  const [innerEmblaRef, innerEmblaApi] = useEmblaCarousel({ loop: true, align: "center", dragFree: true });

  const scrollPrev = useCallback(() => {
    if (innerEmblaApi) innerEmblaApi.scrollPrev();
  }, [innerEmblaApi]);

  const scrollNext = useCallback(() => {
    if (innerEmblaApi) innerEmblaApi.scrollNext();
  }, [innerEmblaApi]);

  return (
    <Dialog onOpenChange={(open) => {
      if (open) onOpen();
      else onClose();
    }}>
      <DialogTrigger asChild>
        <div className="bg-card border border-border/50 rounded-2xl overflow-hidden cursor-pointer h-full flex flex-col group text-left transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(0,0,0,0.15)] hover:border-coral/30">
          <div className="p-6 md:p-10 flex flex-col h-full bg-gradient-to-br from-background to-card group-hover:from-background group-hover:to-coral/5 transition-colors duration-500 relative">
            <div className="flex items-start justify-between mb-6 relative z-10">
              <span className="text-coral font-display text-5xl md:text-7xl font-black opacity-10 leading-none group-hover:opacity-30 group-hover:scale-110 transform origin-left transition-all duration-500">
                {project.number}
              </span>
              <span className="text-xs text-foreground uppercase tracking-widest font-bold bg-secondary/80 group-hover:bg-coral group-hover:text-white px-4 py-2 rounded-full transition-all duration-300 shadow-sm">
                {project.category}
              </span>
            </div>

            <h3 className="font-display text-3xl md:text-4xl font-bold mb-3 group-hover:text-coral transition-colors duration-300 relative z-10 leading-tight">
              {project.title}
            </h3>
            <p className="text-coral text-sm md:text-base font-bold uppercase tracking-wide mb-6 relative z-10">
              {project.role}
            </p>
            <p className="text-muted-foreground leading-relaxed flex-grow text-lg relative z-10">
              {project.description}
            </p>

            <button className="mt-8 text-foreground text-sm font-bold flex items-center justify-between group-hover:text-white transition-all duration-300 w-full bg-secondary group-hover:bg-coral px-6 py-4 rounded-xl shadow-sm group-hover:shadow-lg relative z-10 overflow-hidden">
              <span className="relative z-10">{lang === "es" ? "Más detalles" : "More details"}</span>
              <span className="relative z-10 transition-transform duration-300 group-hover:translate-x-2">→</span>
            </button>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="w-[100vw] h-[100dvh] max-w-none m-0 p-0 rounded-none border-none bg-background overflow-y-auto block z-[100]">
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        <DialogDescription className="sr-only">{project.description}</DialogDescription>

        <DialogClose className="fixed right-4 top-4 md:right-8 md:top-8 bg-black/10 hover:bg-coral text-foreground hover:text-white p-3 md:p-4 rounded-full transition-all z-[110] shadow-sm backdrop-blur">
          <X className="w-6 h-6 md:w-8 md:h-8" />
        </DialogClose>

        <div className="max-w-[1400px] mx-auto px-6 py-20 md:px-16 md:py-32 space-y-16 md:space-y-24">
          
          {/* Cabecera del Proyecto */}
          <div className="max-w-5xl animate-fade-up">
            <span className="inline-block text-coral font-body text-xs md:text-sm font-bold uppercase tracking-[0.2em] mb-6 bg-coral/10 px-4 py-2 rounded-full">
              {project.category}
            </span>
            <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-black mb-8 tracking-tight leading-[1.1]">
              {project.title}
            </h2>
            <p className="text-coral font-bold tracking-widest uppercase text-sm md:text-base mb-10 pl-1 border-l-4 border-coral">
              {project.role}
            </p>
            <p className="text-muted-foreground leading-relaxed text-xl md:text-3xl font-medium max-w-4xl">
              {project.description}
            </p>
          </div>

          {/* Dos Columnas: Tareas vs Reto/Aprendizaje */}
          <div className="grid lg:grid-cols-12 gap-12 md:gap-24 pt-12 border-t border-border/50 animate-fade-up" style={{ animationDelay: "100ms" }}>
            <div className="lg:col-span-7">
              <h4 className="font-display text-sm md:text-base font-bold uppercase tracking-[0.2em] text-foreground mb-8 opacity-60">
                {t.projects.whatIDid[lang]}
              </h4>
              <ul className="space-y-6">
                {project.tasks.map((task, i) => (
                  <li key={i} className="text-muted-foreground text-lg md:text-xl flex items-start gap-5 leading-relaxed bg-secondary/20 p-6 rounded-2xl border border-transparent hover:border-border transition-colors">
                    <span className="w-2.5 h-2.5 bg-coral rounded-full mt-2.5 shrink-0 shadow-[0_0_12px_rgba(255,107,107,0.6)]" />
                    {task}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-5 space-y-12">
              <div className="bg-charcoal p-8 md:p-10 rounded-3xl border border-border shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-coral/10 rounded-bl-full -mr-16 -mt-16" />
                <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-coral mb-6 relative z-10">
                  {t.projects.challenge[lang]}
                </h4>
                <p className="text-foreground text-lg md:text-xl font-medium leading-relaxed relative z-10">
                  {project.challenge}
                </p>
              </div>

              <div className="p-8 md:p-10 rounded-3xl bg-secondary/30 border border-border relative">
                <h4 className="font-display text-sm font-bold uppercase tracking-[0.2em] text-foreground mb-6 opacity-60">
                  {t.projects.lesson[lang]}
                </h4>
                <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                  {project.lesson}
                </p>
              </div>
            </div>
          </div>

          {/* Quote Destacada */}
          <blockquote className="my-16 max-w-4xl mx-auto bg-gradient-to-br from-coral to-[#ff8f8f] text-white p-8 md:p-10 rounded-3xl shadow-[0_20px_50px_rgba(255,107,107,0.3)] transform hover:scale-[1.02] transition-transform duration-500 animate-fade-up text-center" style={{ animationDelay: "200ms" }}>
            <p className="font-display text-xl md:text-3xl font-bold leading-tight md:leading-[1.3]">
              "{project.quote}"
            </p>
          </blockquote>

          {/* Enlaces Orgánicos */}
          {project.links && (
            <div className="flex flex-wrap gap-4 pt-4 animate-fade-up" style={{ animationDelay: "250ms" }}>
              {project.links.map((link) => (
                <a
                  key={link.url}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground text-sm font-bold bg-secondary hover:bg-coral hover:text-white px-8 py-4 rounded-full inline-flex items-center gap-3 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-border/50 hover:border-coral"
                >
                  <span className="text-xl leading-none font-light">↗</span> {link.label}
                </a>
              ))}
            </div>
          )}

          {/* Galería Multimedia con Controles */}
          {((project.images && project.images.length > 0) || (project.reels && project.reels.length > 0)) && (
            <div className="mt-24 pt-16 border-t border-border/50 animate-fade-up" style={{ animationDelay: "300ms" }}>
              
              <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
                <div>
                  <h4 className="font-display text-xl md:text-2xl font-bold uppercase tracking-widest text-foreground">
                    {lang === "es" ? "Galería Multimedia" : "Media Gallery"}
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
                    
                    {project.reels?.map((reel, idx) => (
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

                    {project.images?.map((img, idx) => (
                      <div className="flex-none h-full relative pl-6 md:pl-12 group mix-blend-normal" key={`img-${idx}`}>
                        <div className="h-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-white/10 flex items-center justify-center transform transition-transform duration-700 group-hover:scale-[1.02] bg-charcoal/50">
                          {img.endsWith('.mp4') ? (
                            <video src={img} className="h-full w-auto max-w-none object-contain rounded-2xl pointer-events-none" autoPlay muted loop playsInline />
                          ) : (
                            <img 
                              src={img} 
                              alt={`${project.title} media ${idx + 1}`} 
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
          )}

        </div>
      </DialogContent>
    </Dialog>
  );
};

export const Projects = () => {
  const { lang } = useLanguage();
  const projects = t.projects.items[lang];
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { align: "start", dragFree: true, loop: true },
    [AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 0.8 })]
  );

  const handleOpen = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (autoScroll) autoScroll.stop();
  }, [emblaApi]);

  const handleClose = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (autoScroll) autoScroll.play();
  }, [emblaApi]);

  return (
    <section id="projects" className="py-32 md:py-48 section-padding overflow-hidden">
      <div className="max-w-[1400px] mx-auto">
        <ScrollReveal>
          <div className="flex flex-col items-center text-center mb-16 md:mb-24">
            <span className="text-coral font-body text-sm font-bold uppercase tracking-[0.2em] mb-4 bg-coral/10 px-4 py-2 rounded-full inline-block">
              {t.projects.label[lang]}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-black leading-tight max-w-4xl tracking-tight">
              {t.projects.heading[lang]}
            </h2>
          </div>
        </ScrollReveal>

        <div className="-mx-4 px-4 md:-mx-8 md:px-8 cursor-grab active:cursor-grabbing pb-16 overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6 md:-ml-8 items-stretch">
            {projects.map((project, i) => (
              <div className="flex-[0_0_90%] md:flex-[0_0_65%] lg:flex-[0_0_46%] min-w-0 pl-6 md:pl-8 py-6" key={project.number}>
                <ProjectCard 
                  project={project} 
                  index={i} 
                  onOpen={handleOpen}
                  onClose={handleClose}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
