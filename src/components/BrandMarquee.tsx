import { useLanguage } from "@/i18n/LanguageContext";

const brandsRow1 = ["WeloJets", "Edhasa Argentina", "Riverside Agency", "Huinca Cine", "Festival Wateke", "Neterwalk", "Grupo Octubre", "Página 12", "Min. de Turismo CABA"];
const brandsRow2 = ["Avon", "Ron Don Q", "Just", "JJ.OO. Buenos Aires 2018", "Yamaneat", "UC3M Madrid"];

export const BrandMarquee = () => {
  const { lang } = useLanguage();
  
  return (
    <section className="py-12 md:py-16 overflow-hidden border-y border-border/50">
      <p className="text-center text-xs uppercase tracking-[0.3em] text-muted-foreground mb-8 section-padding">
        {lang === "es" ? "Marcas con las que trabajé" : "Brands I've worked with"}
      </p>
      
      {/* Row 1 — scrolls left */}
      <div className="relative mb-4">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...brandsRow1, ...brandsRow1].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="mx-6 md:mx-10 text-lg md:text-2xl font-display font-bold text-foreground/20 hover:text-coral/60 transition-colors duration-500 cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="relative">
        <div className="flex whitespace-nowrap" style={{ animation: "marquee 40s linear infinite reverse" }}>
          {[...brandsRow2, ...brandsRow2, ...brandsRow2].map((brand, i) => (
            <span
              key={`${brand}-${i}`}
              className="mx-6 md:mx-10 text-lg md:text-2xl font-display font-bold text-foreground/20 hover:text-coral/60 transition-colors duration-500 cursor-default select-none"
            >
              {brand}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
