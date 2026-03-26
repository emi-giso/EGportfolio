import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "@/i18n/LanguageContext";

interface Metric {
  value: number;
  suffix: string;
  label: { es: string; en: string };
  prefix?: string;
}

const metrics: Metric[] = [
  { value: 8, suffix: "+", label: { es: "Marcas gestionadas", en: "Brands managed" } },
  { value: 500, suffix: "+", label: { es: "Piezas de contenido creadas", en: "Content pieces created" } },
  { value: 146, suffix: "%", label: { es: "Crecimiento promedio en engagement", en: "Avg. engagement growth" }, prefix: "+" },
  { value: 4, suffix: "+", label: { es: "Años de experiencia", en: "Years of experience" } },
  { value: 3, suffix: "M+", label: { es: "Impresiones generadas", en: "Impressions generated" } },
  { value: 2, suffix: "", label: { es: "Idiomas (EN/ES · C2)", en: "Languages (EN/ES · C2)" } },
];

const CountUp = ({ target, prefix = "", suffix, duration = 2 }: { target: number; prefix?: string; suffix: string; duration?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const end = target;
    const stepTime = Math.max(duration * 1000 / end, 16);
    const increment = Math.ceil(end / (duration * 1000 / 16));

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, stepTime);

    return () => clearInterval(timer);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

export const Metrics = () => {
  const { lang } = useLanguage();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-6">
          {metrics.map((metric, i) => (
            <motion.div
              key={metric.label.es}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-center group"
            >
              <p className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-3 tabular-nums tracking-tight">
                <CountUp target={metric.value} prefix={metric.prefix} suffix={metric.suffix} />
              </p>
              <p className="text-muted-foreground text-xs md:text-sm uppercase tracking-widest leading-snug">
                {metric.label[lang]}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
