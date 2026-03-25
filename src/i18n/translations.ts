export type Lang = "es" | "en";

export const t = {
  nav: {
    about: { es: "Sobre mí", en: "About" },
    projects: { es: "Showcase", en: "Showcase" },
    skills: { es: "Skills", en: "Skills" },
    education: { es: "Formación", en: "Background" },
    contact: { es: "Contacto", en: "Contact" },
  },
  hero: {
    greeting: { es: "Hola, soy", en: "Hi, I'm" },
    desc: {
      es: "Comunicadora integral con más de 4 años de experiencia en estrategia de contenido, redes sociales, prensa y producción digital.",
      en: "Integrated communications professional with 4+ years of experience in content strategy, social media management, press and digital production.",
    },
    descBold: {
      es: "Estrategia, ejecución y resultados medibles.",
      en: "Strategy, execution and measurable results.",
    },
    cta1: { es: "Ver showcase", en: "Explore showcase" },
    cta2: { es: "Contacto", en: "Get in touch" },
  },
  about: {
    label: { es: "Sobre mí", en: "About me" },
    heading: {
      es: "Comunicación integral: de la estrategia a la ejecución",
      en: "Integrated communications: from strategy to execution",
    },
    p1: {
      es: "Gestiono la comunicación y redes sociales de marcas como Riverside Agency, Edhasa Argentina, WeloJets, Huinca Cine, Neterwalk y Festival Wateke. También colaboré con Grupo Octubre, Página 12 y el Ministerio de Turismo de la Ciudad de Buenos Aires.",
      en: "I manage communications and social media for brands such as Riverside Agency, Edhasa Argentina, WeloJets, Huinca Cine, Neterwalk and Festival Wateke. I have also collaborated with Grupo Octubre, Página 12 and the Buenos Aires City Tourism Ministry.",
    },
    p2: {
      es: "Mi perfil abarca el ciclo completo: planificación estratégica, producción de contenido, gestión de pauta, cobertura en vivo, análisis de métricas y optimización continua. End to end.",
      en: "My profile spans the full cycle: strategic planning, content production, ad management, live coverage, metrics analysis and continuous optimization. End to end.",
    },
    quote: {
      es: "Me interesa la comunicación que resuelve problemas reales, no la que llena grillas por cumplir.",
      en: "I value communication that solves real problems — not the kind that fills content calendars for the sake of it.",
    },
    p3: {
      es: "Licenciada en Ciencias de la Comunicación (UADE), inglés C2 (Cambridge Proficiency) e intercambio académico en Madrid (UC3M).",
      en: "Bachelor's degree in Communication Sciences (UADE), C2 English (Cambridge Proficiency), and academic exchange in Madrid (UC3M).",
    },
    skills: {
      es: ["Estrategia digital", "Social media", "Producción audiovisual", "Prensa y RRPP", "Copywriting", "Meta Ads", "Bilingüe EN/ES (C2)"],
      en: ["Digital strategy", "Social media", "Audiovisual production", "Press & PR", "Copywriting", "Meta Ads", "Bilingual EN/ES (C2)"],
    },
    stats: {
      es: [
        { value: "8+", label: "Marcas gestionadas" },
        { value: "C2", label: "Cambridge Proficiency" },
        { value: "360°", label: "Estrategia → Ejecución" },
        { value: "+4", label: "Años de experiencia" },
      ],
      en: [
        { value: "8+", label: "Brands managed" },
        { value: "C2", label: "Cambridge Proficiency" },
        { value: "360°", label: "Strategy → Execution" },
        { value: "+4", label: "Years of experience" },
      ],
    },
  },
  projects: {
    label: { es: "Showcase", en: "Showcase" },
    heading: {
      es: "Cada marca, un enfoque distinto. Así los abordé.",
      en: "Every brand requires a different approach. Here's how I tackled them.",
    },
    expand: { es: "Ver detalle", en: "View details" },
    collapse: { es: "Cerrar", en: "Close" },
    whatIDid: { es: "Responsabilidades", en: "Responsibilities" },
    challenge: { es: "Desafío principal", en: "Key challenge" },
    lesson: { es: "Aprendizaje", en: "Key takeaway" },
    items: {
      es: [
        {
          number: "01", category: "Distribuidora de libros · Comunicación integral", title: "Riverside Agency · Edhasa Argentina", role: "Comunicadora Integral / Prensa y Redes Sociales · Abril 2024 – Presente",
          description: "Gestión integral de comunicación para una distribuidora de libros y sus sellos editoriales: redes sociales, prensa, pauta publicitaria, email marketing y cobertura de eventos.",
          tasks: [
            "Crecimiento orgánico: +146% @riverside (7K→17.2K), +170% @hablemosdelbros (4K→10.8K), +167% @edhasa (3K→8K)",
            "Coordinación de 2 campañas nacionales 'Suelta de Libros' con 50+ librerías, influencers y medios",
            "Agente principal de comunicación en la Feria Internacional del Libro de Buenos Aires",
            "Campañas Día del Niño y Semana Negra: activaciones presenciales + digital + email marketing + influencers",
            "Producción de 10+ presentaciones de libros; nexo entre 25+ editoriales, área comercial y editorial",
          ],
          challenge: "Lograr unir el sistema visual y de contenido de editoriales tan distintas bajo un mismo sentido armónico y profesional.",
          lesson: "La importancia de unificar la voz de marca entre canales internos y externos. La coherencia es lo que construye confianza.",
          quote: "El verdadero desafío no es unificar un mensaje institucional, sino dominar el arte de hablar veinte idiomas literarios distintos al mismo tiempo.",
          heroMetric: "+146% Growth",
          metricsComparison: {
            before: { value: "7,000", label: "Seguidores", detail: "1.2% Engagement" },
            after: { value: "17,200", label: "Seguidores", detail: "3.8% Engagement" }
          },
          keyMetrics: [
            { value: "+146%", label: "Crecimiento Followers" },
            { value: "+216%", label: "Aumento Engagement" },
            { value: "+260%", label: "Incremento Reach" },
            { value: "35", label: "Clientes Nuevos" }
          ],
          problem: "Riverside tenía una presencia sólida con 7,000 followers, pero su engagement era prácticamente inexistente (1.2%). Los posts conseguían poco alcance y la conversión a clientes era mínima. Necesitaban un cambio estratégico urgente.",
          strategy: [
            { title: "Análisis de audiencia", description: "Revisé Meta Analytics y descubrí que el 65% de su audiencia estaba activa en Reels entre 7-9pm. Sus posts eran mayormente carousels a las 12pm." },
            { title: "Contenido 80/20", description: "Cambié la estrategia: 80% educativo/entretenimiento, 20% promocional. Implementé 3 series temáticas de Reels semanales." },
            { title: "Optimización de posting", description: "Aumenté de 2x/semana a 4-5x/semana. Usé Google Sheets para trackear qué formatos y horarios daban mejor resultado." }
          ],
          insight: "Descubrí que la audiencia de Riverside respondía 4x mejor a video educativo que a carousel posts. Este insight cambió completamente la estrategia y fue el driver principal del crecimiento.",
          links: [
            { label: "@riversideagency", url: "https://www.instagram.com/riversideagency" },
            { label: "@edhasaargentina", url: "https://www.instagram.com/edhasaargentina" },
            { label: "@hablemosdelbros", url: "https://www.instagram.com/hablemosdelbros" }
          ],
          images: [],
          reels: [
            "https://www.instagram.com/p/DVwas5jkc0I/",
            "https://www.instagram.com/p/DVGjFaJkTHz/",
            "https://www.instagram.com/p/DOy7ROBCTBH/",
            "https://www.instagram.com/p/DPJgXTqD8NU/",
            "https://www.instagram.com/p/DNyLA2W3oqr/",
            "https://www.instagram.com/reel/DPEg-OzjWTB",
            "https://www.instagram.com/reel/DHUAFtgRUv1",
            "https://www.instagram.com/reel/DFqAWtwRd_X",
            "https://www.instagram.com/reel/C8P46VZv71b"
          ],
        },
        {
          number: "02", category: "Aviación privada · Social Media", title: "WeloJets", role: "Social Media Content Specialist · Enero 2023 – Abril 2024",
          description: "Estrategia de contenido end-to-end para una empresa de aviación privada: Instagram, LinkedIn, Facebook, blog corporativo, pauta publicitaria y reportes de métricas.",
          tasks: [
            "Instagram: +15% seguidores (7.8K→9K), engagement rate 2.9%, 596 likes/mes promedio, 221K+ impresiones",
            "LinkedIn: +21% seguidores (3K→3.7K), engagement rate prom. 5.9%, pico 7.38%, 1.300+ reacciones, 47K+ impresiones",
            "Estrategia multicanal: Instagram, LinkedIn, Facebook y blog corporativo",
            "Gestión completa de pauta publicitaria (Meta Ads) y copywriting orientado a conversión",
            "Reportes mensuales de KPIs y optimización continua",
          ],
          challenge: "Comunicar un servicio de lujo en redes sociales requiere un tono aspiracional pero accesible, premium pero no distante.",
          lesson: "El contenido premium funciona cuando deja de intentar parecer lujoso. Los mejores resultados surgen de mostrar la experiencia real.",
          heroMetric: "+21% Growth",
          metricsComparison: {
            before: { value: "7,800", label: "Followers IG", detail: "Bajo alcance" },
            after: { value: "9,000", label: "Followers IG", detail: "2.9% Engagement" }
          },
          keyMetrics: [
            { value: "+15%", label: "Crecimiento IG" },
            { value: "+21%", label: "Crecimiento LinkedIn" },
            { value: "221K+", label: "Impresiones" },
            { value: "5.9%", label: "Engagement Prom." }
          ],
          problem: "WeloJets necesitaba profesionalizar su presencia digital para atraer a un público de alto nivel adquisitivo. La comunicación era esporádica y no reflejaba la exclusividad del servicio de aviación privada.",
          strategy: [
            { title: "Tono aspiracional", description: "Desarrollé una línea editorial que combina la exclusividad del servicio con contenidos educativos sobre destinos y curiosidades de la aviación." },
            { title: "LinkedIn Outreach", description: "Potencié la presencia en LinkedIn con contenido B2B estratégico, logrando picos de engagement del 7.38%." },
            { title: "Meta Ads", description: "Gestioné campañas de pauta orientadas a conversión, segmentando específicamente a usuarios interesados en viajes de lujo y negocios." }
          ],
          insight: "El contenido premium funciona cuando deja de intentar 'parecer' lujoso y empieza a mostrar el valor real de la experiencia y el ahorro de tiempo.",
          links: [{ label: "@welojets", url: "https://www.instagram.com/welojets" }],
          images: ["/EGportfolio/projects/WELO/averiguar avion.jpg", "/EGportfolio/projects/WELO/1 (1).jpg", "/EGportfolio/projects/WELO/EMPTY LEGS.mp4"],
          reels: [
            "https://www.instagram.com/reel/C3QhQMbO4Br",
            "https://www.instagram.com/reel/C1Pd2RJukmD",
            "https://www.instagram.com/reel/C04XUxmOEiP",
            "https://www.instagram.com/reel/Cz_infQhFJF",
            "https://www.instagram.com/reel/Cvz9EgKPZXk",
            "https://www.instagram.com/reel/C4qVffDsnts"
          ],
        },
        {
          number: "03", category: "Producción publicitaria · Audiovisual", title: "Huinca Cine", role: "Producción y Comunicación · Enero – Diciembre 2022",
          description: "Comunicación y producción digital para una destacada productora de publicidad. Cobertura en rodajes, gestión de prensa y contenido para múltiples campañas comerciales simultáneas.",
          tasks: [
            "Enlace con periodistas, directores y medios publicitarios",
            "Cobertura en rodajes y comerciales con representación institucional de la productora",
            "Producción autónoma de contenido digital por proyecto (reels, posteos, gráficas)",
            "Cobertura en sets y pitches para Dove, Unilever y Sedal",
            "Traducciones profesionales inglés-español para materiales de difusión",
          ],
          challenge: "En la publicidad el ritmo es vertiginoso y la estética lo es todo. El reto es generar contenido que refleje la excelencia técnica de un set en tiempo real.",
          lesson: "Adaptar la voz a cada proyecto sin perder la identidad de la productora. La versatilidad es clave.",
          links: [{ label: "@huincacine", url: "https://www.instagram.com/huincacine" }],
          images: ["/EGportfolio/projects/HUINCA/20220201_143755.jpg", "/EGportfolio/projects/HUINCA/20220309_174358.jpg", "/EGportfolio/projects/HUINCA/HUINCA CINE 2022.jpg", "/EGportfolio/projects/HUINCA/20220201_153216.mp4"]
        },
        {
          number: "04", category: "Community Management · Freelance", title: "Neterwalk · Yamaneat · Grupo Octubre · Festival Wateke", role: "Community Manager Freelance · Marzo 2023 – Presente",
          description: "Gestión simultánea de cuatro cuentas con identidades de marca distintas: calendarios editoriales, coberturas en vivo y piezas visuales a medida.",
          tasks: [
            "Gestión simultánea de 4 cuentas con identidades de marca diferenciadas",
            "Planificación de calendarios editoriales mensuales",
            "Cobertura en vivo de eventos y generación de contenido en tiempo real",
            "Diseño de piezas visuales adaptadas a cada marca",
            "Crecimientos del 20–40% en seguidores en cuentas activas",
          ],
          challenge: "Mantener la coherencia de cuatro voces de marca distintas sin perder autenticidad ni eficiencia operativa.",
          lesson: "La organización y los sistemas de trabajo son tan importantes como la creatividad para escalar la gestión de múltiples cuentas.",
          images: ["/EGportfolio/projects/HUINCA/SHOOTING_HISTORIAS EXPRESS-03.jpg"],
          galleries: [
            {
              title: "Yamaneat",
              images: [],
              reels: []
            },
            {
              title: "Neterwalk",
              images: [],
              reels: []
            }
          ]
        },
        {
          number: "05", category: "Producción publicitaria · Sets", title: "Avon · Ron Don Q · Just", role: "Asistente de Producción Freelance · Diciembre 2021 – Presente",
          description: "Coordinación logística en sets de producción publicitaria para marcas internacionales: soporte a dirección y articulación entre áreas técnicas.",
          tasks: [
            "Asistencia integral en sets de producción publicitaria",
            "Coordinación logística con equipos técnicos y creativos",
            "Soporte directo al equipo de dirección",
            "Resolución de imprevistos en tiempo real",
          ],
          challenge: "En un set de filmación no existe el 'después lo arreglo'. Cada minuto cuenta y cada error tiene un costo directo.",
          lesson: "La producción es comunicación en su forma más directa: se coordinan personas, tiempos, recursos y expectativas.",
          images: ["/EGportfolio/projects/HUINCA/20220201_144049.jpg"],
        },
      ],
      en: [
        {
          number: "01", category: "Book distributor · Integrated comms", title: "Riverside Agency · Edhasa Argentina", role: "PR, Content & Social Media Manager · April 2024 – Present",
          description: "Full-scope communications management for a leading book distributor and its publishing imprints: social media, press, advertising, email marketing and event coverage.",
          tasks: [
            "Organic growth: +146% @riverside (7K→17.2K), +170% @hablemosdelbros (4K→10.8K), +167% @edhasa (3K→8K)",
            "Coordinated 2 national 'Suelta de Libros' campaigns with 50+ bookstores, influencers and media outlets",
            "Lead communications agent at the Buenos Aires International Book Fair",
            "Children's Day and Semana Negra campaigns: in-person activations + digital + email marketing + influencer outreach",
            "Produced 10+ book launch events; liaison across 25+ publishers, commercial and editorial teams",
          ],
          challenge: "Uniting the visual and content systems of very different publishing houses under a single, harmonious brand sense.",
          lesson: "The importance of unifying brand voice across internal and external channels. Consistency is what builds trust.",
          quote: "The true challenge isn't unifying a corporate message, but mastering the art of speaking twenty different literary languages at the same time.",
          heroMetric: "+146% Growth",
          metricsComparison: {
            before: { value: "7,000", label: "Followers", detail: "1.2% Engagement" },
            after: { value: "17,200", label: "Followers", detail: "3.8% Engagement" }
          },
          keyMetrics: [
            { value: "+146%", label: "Follower Growth" },
            { value: "+216%", label: "Engagement Increase" },
            { value: "+260%", label: "Reach Increase" },
            { value: "35", label: "New Clients" }
          ],
          problem: "Riverside had a solid presence with 7,000 followers, but their engagement was practically non-existent (1.2%). Posts got little reach and conversion to clients was minimal. They needed an urgent strategic shift.",
          strategy: [
            { title: "Audience Analysis", description: "I reviewed Meta Analytics and discovered that 65% of their audience was active on Reels between 7-9pm. Their posts were mostly carousels at 12pm." },
            { title: "80/20 Content", description: "Shifted the strategy: 80% educational/entertainment, 20% promotional. Implemented 3 weekly thematic Reel series." },
            { title: "Posting Optimization", description: "Increased from 2x/week to 4-5x/week. Used Google Sheets to track which formats and times yielded better results." }
          ],
          insight: "I discovered that Riverside's audience responded 4x better to educational video than carousel posts. This insight completely changed the strategy and was the main driver of growth.",
          links: [
            { label: "@riversideagency", url: "https://www.instagram.com/riversideagency" },
            { label: "@edhasaargentina", url: "https://www.instagram.com/edhasaargentina" },
            { label: "@hablemosdelbros", url: "https://www.instagram.com/hablemosdelbros" }
          ],
          images: [],
          reels: [
            "https://www.instagram.com/p/DVwas5jkc0I/",
            "https://www.instagram.com/p/DVGjFaJkTHz/",
            "https://www.instagram.com/p/DOy7ROBCTBH/",
            "https://www.instagram.com/p/DPJgXTqD8NU/",
            "https://www.instagram.com/p/DNyLA2W3oqr/",
            "https://www.instagram.com/reel/DPEg-OzjWTB",
            "https://www.instagram.com/reel/DHUAFtgRUv1",
            "https://www.instagram.com/reel/DFqAWtwRd_X",
            "https://www.instagram.com/reel/C8P46VZv71b"
          ],
        },
        {
          number: "02", category: "Private aviation · Social Media", title: "WeloJets", role: "Social Media Content Specialist · January 2023 – April 2024",
          description: "End-to-end content strategy for a private aviation company: Instagram, LinkedIn, Facebook, corporate blog, paid advertising and metrics reporting.",
          tasks: [
            "Instagram: +15% followers (7.8K→9K), engagement rate 2.9%, 596 avg. likes/month, 221K+ impressions",
            "LinkedIn: +21% followers (3K→3.7K), avg. engagement rate 5.9%, peak 7.38%, 1,300+ reactions, 47K+ impressions",
            "Multichannel strategy: Instagram, LinkedIn, Facebook and corporate blog",
            "Full ad campaign management (Meta Ads) and conversion-focused copywriting",
            "Monthly KPI reporting and continuous optimization",
          ],
          challenge: "Communicating a luxury service on social media requires a tone that is aspirational yet approachable, premium but not distant.",
          lesson: "Premium content works when it stops trying to appear luxurious. The strongest results come from showcasing the real experience.",
          heroMetric: "+21% Growth",
          metricsComparison: {
            before: { value: "7,800", label: "IG Followers", detail: "Low reach" },
            after: { value: "9,000", label: "IG Followers", detail: "2.9% Engagement" }
          },
          keyMetrics: [
            { value: "+15%", label: "IG Growth" },
            { value: "+21%", label: "LinkedIn Growth" },
            { value: "221K+", label: "Impressions" },
            { value: "5.9%", label: "Avg. Engagement" }
          ],
          problem: "WeloJets needed to professionalize its digital presence to attract a high-net-worth audience. Communication was sporadic and didn't reflect the exclusivity of the private aviation service.",
          strategy: [
            { title: "Aspirational Tone", description: "Developed an editorial line that combines service exclusivity with educational content about destinations and aviation curiosities." },
            { title: "LinkedIn Outreach", description: "Enhanced LinkedIn presence with strategic B2B content, achieving engagement peaks of 7.38%." },
            { title: "Meta Ads", description: "Managed conversion-oriented ad campaigns, specifically targeting users interested in luxury travel and business." }
          ],
          insight: "Premium content works when it stops trying to 'look' luxurious and starts showing the real value of the experience and time savings.",
          links: [{ label: "@welojets", url: "https://www.instagram.com/welojets" }],
          images: ["/EGportfolio/projects/WELO/averiguar avion.jpg", "/EGportfolio/projects/WELO/1 (1).jpg", "/EGportfolio/projects/WELO/EMPTY LEGS.mp4"],
          reels: [
            "https://www.instagram.com/reel/C3QhQMbO4Br",
            "https://www.instagram.com/reel/C1Pd2RJukmD",
            "https://www.instagram.com/reel/C04XUxmOEiP",
            "https://www.instagram.com/reel/Cz_infQhFJF",
            "https://www.instagram.com/reel/Cvz9EgKPZXk",
            "https://www.instagram.com/reel/C4qVffDsnts"
          ],
        },
        {
          number: "03", category: "Advertising production · Audiovisual", title: "Huinca Cine", role: "Production & Communications · January – December 2022",
          description: "Communications and digital production for a leading advertising production company. On-set coverage, press relations and content across multiple simultaneous commercial campaigns.",
          tasks: [
            "Communications liaison with journalists, directors and advertising media",
            "On-set commercial coverage representing the production company",
            "Autonomous production of all digital content per project (reels, posts, graphics)",
            "On-set coverage and pitch support for Dove, Unilever and Sedal",
            "Professional English-Spanish translations for press materials",
          ],
          challenge: "In advertising, the pace is relentless and aesthetics are everything. The challenge is generating content that reflects technical on-set excellence in real time.",
          lesson: "Adapting voice to each project without losing the production company's identity. Versatility is essential.",
          links: [{ label: "@huincacine", url: "https://www.instagram.com/huincacine" }],
          images: ["/EGportfolio/projects/HUINCA/20220201_143755.jpg", "/EGportfolio/projects/HUINCA/20220309_174358.jpg", "/EGportfolio/projects/HUINCA/HUINCA CINE 2022.jpg", "/EGportfolio/projects/HUINCA/20220201_153216.mp4"]
        },
        {
          number: "04", category: "Community Management · Freelance", title: "Neterwalk · Yamaneat · Grupo Octubre · Festival Wateke", role: "Freelance Community Manager · March 2023 – Present",
          description: "Simultaneous management of four accounts with distinct brand identities: editorial calendars, live coverage and custom visual assets.",
          tasks: [
            "Simultaneous management of 4 accounts with differentiated brand identities",
            "Monthly editorial calendar planning",
            "Live event coverage and real-time content creation",
            "Custom visual assets tailored to each brand",
            "20–40% follower growth across active accounts",
          ],
          challenge: "Maintaining the coherence of four distinct brand voices without sacrificing authenticity or operational efficiency.",
          lesson: "Organization and workflow systems are as important as creativity when scaling multi-account management.",
          images: ["/EGportfolio/projects/HUINCA/SHOOTING_HISTORIAS EXPRESS-03.jpg"],
          links: [
            { label: "@neterwalk", url: "https://www.instagram.com/neterwalk" },
            { label: "@yamaneat", url: "https://www.instagram.com/yamaneat" }
          ],
          galleries: [
            {
              title: "Yamaneat",
              images: [],
              reels: []
            },
            {
              title: "Neterwalk",
              images: [],
              reels: []
            }
          ]
        },
        {
          number: "05", category: "Advertising production · Sets", title: "Avon · Ron Don Q · Just", role: "Freelance Production Assistant · December 2021 – Present",
          description: "On-set logistics coordination for international brand advertising productions: directorial support and cross-department articulation.",
          tasks: [
            "Full production set assistance for advertising shoots",
            "Logistics coordination with technical and creative teams",
            "Direct support for the directing team",
            "Real-time problem solving on set",
          ],
          challenge: "On a film set, there is no 'I'll fix it later.' Every minute counts, and every mistake has a direct cost.",
          lesson: "Production is communication in its most direct form: coordinating people, timelines, resources and expectations.",
          images: ["/EGportfolio/projects/HUINCA/20220201_144049.jpg"],
        },
      ],
    },
  },
  services: {
    label: { es: "Servicios", en: "Services" },
    heading: {
      es: "No hago posteos.\nConstruyo sistemas de comunicación.",
      en: "I don't make posts.\nI build communication systems.",
    },
    items: {
      es: [
        { title: "Estrategia de contenido", desc: "Planificación integral de calendarios editoriales, líneas de contenido y estrategia de marca adaptada a cada plataforma." },
        { title: "Social media management", desc: "Gestión completa de redes: publicación, community management, coberturas en vivo y reportes de métricas." },
        { title: "Producción audiovisual", desc: "Creación de contenido visual y audiovisual: reels, gráficas, fotografía, edición y cobertura de eventos." },
        { title: "Prensa y comunicación", desc: "Gestión de prensa, relación con medios, comunicación institucional y articulación con stakeholders." },
      ],
      en: [
        { title: "Content strategy", desc: "Comprehensive editorial calendar planning, content pillars and brand strategy tailored to each platform." },
        { title: "Social media management", desc: "Full social media management: publishing, community management, live coverage and metrics reporting." },
        { title: "Audiovisual production", desc: "Visual and audiovisual content creation: reels, graphics, photography, editing and event coverage." },
        { title: "Press & communications", desc: "Press management, media relations, institutional communications and stakeholder coordination." },
      ],
    },
  },
  metrics: {
    label: { es: "Resultados", en: "Results" },
    heading: {
      es: "Resultados que hablan por sí solos",
      en: "Results that speak for themselves",
    },
    items: {
      es: [
        { value: "+146%", label: "Crecimiento @riverside" },
        { value: "221K+", label: "Impresiones en Instagram" },
        { value: "7.38%", label: "Pico de engagement en LinkedIn" },
        { value: "500+", label: "Piezas de contenido producidas" },
        { value: "50+", label: "Librerías en campañas nacionales" },
        { value: "10+", label: "Presentaciones de libros producidas" },
      ],
      en: [
        { value: "+146%", label: "@riverside growth" },
        { value: "221K+", label: "Instagram impressions" },
        { value: "7.38%", label: "Peak LinkedIn engagement rate" },
        { value: "500+", label: "Content pieces produced" },
        { value: "50+", label: "Bookstores in national campaigns" },
        { value: "10+", label: "Book launches produced" },
      ],
    },
  },
  skills: {
    label: { es: "Skills", en: "Skills" },
    heading: { es: "Herramientas y competencias", en: "Tools & competencies" },
    categories: {
      es: [
        { title: "Estrategia Digital", items: ["Social media management (IG, LinkedIn, Facebook, Twitter, Blog)", "Estrategia de contenido y planificación editorial", "Meta Ads — pauta publicitaria", "Analytics y reportes de métricas", "Mantenimiento web (WordPress, Wix)"] },
        { title: "Producción & Contenido", items: ["Cobertura de eventos en vivo", "Edición de video y reels (CapCut, Adobe Suite)", "Diseño gráfico (Canva Pro, Adobe Suite)", "Producción en set — asistencia integral", "Fotografía y contenido multimedial"] },
        { title: "Comunicación & Prensa", items: ["Comunicación institucional (interna/externa)", "Gestión de prensa y relación con medios", "Copywriting y redacción publicitaria", "Traducción profesional EN ↔ ES (C2)", "Coordinación con directores y stakeholders"] },
        { title: "Herramientas", items: ["Adobe Suite · Canva Pro · CapCut", "Meta Ads Manager · Meta Business Suite", "WordPress · Wix", "Brevo Email Marketing", "Microsoft Office · Notion · Google Workspace"] },
      ],
      en: [
        { title: "Digital Strategy", items: ["Social media management (IG, LinkedIn, Facebook, Twitter, Blog)", "Content strategy & editorial planning", "Meta Ads — paid advertising", "Analytics & metrics reporting", "Website maintenance (WordPress, Wix)"] },
        { title: "Production & Content", items: ["Live event coverage", "Video & reels editing (CapCut, Adobe Suite)", "Graphic design (Canva Pro, Adobe Suite)", "On-set production assistance", "Photography & multimedia content"] },
        { title: "Communication & Press", items: ["Institutional communications (internal/external)", "Press management & media relations", "Copywriting & advertising copy", "Professional translation EN ↔ ES (C2)", "Director & stakeholder coordination"] },
        { title: "Tools", items: ["Adobe Suite · Canva Pro · CapCut", "Meta Ads Manager · Meta Business Suite", "WordPress · Wix", "Brevo Email Marketing", "Microsoft Office · Notion · Google Workspace"] },
      ],
    },
  },
  education: {
    label: { es: "Formación", en: "Background" },
    heading: { es: "Formación académica y trayectoria", en: "Academic background & career path" },
    volunteerTitle: { es: "Más allá de lo profesional", en: "Beyond the professional" },
    timeline: {
      es: [
        { year: "2024 – Presente", title: "Comunicadora Integral / Prensa y Redes Sociales", org: "Riverside Agency · Edhasa Argentina" },
        { year: "2023 – 2024", title: "Especialista en Contenido para Redes Sociales", org: "WeloJets" },
        { year: "2023 – Presente", title: "Community Manager Freelance", org: "Neterwalk · Yamaneat · Grupo Octubre · Festival Wateke" },
        { year: "2022", title: "Producción y Comunicación", org: "Huinca Cine" },
        { year: "2021 – Presente", title: "Asistente de Producción Freelance", org: "Producciones Publicitarias — Avon, Ron Don Q, Just" },
        { year: "2021", title: "Intercambio · Grado en Comunicación Audiovisual", org: "Universidad Carlos III de Madrid (UC3M)" },
        { year: "2018 – 2021", title: "Lic. en Ciencias de la Comunicación", org: "Universidad Argentina de la Empresa (UADE)" },
        { year: "2021", title: "Cambridge Certificate of Proficiency (C2)", org: "CEFR" },
        { year: "2018", title: "Cambridge Certificate in Advanced English (C1)", org: "CEFR" }
      ],
      en: [
        { year: "2024 – Present", title: "PR, Content & Social Media Manager", org: "Riverside Agency · Edhasa Argentina" },
        { year: "2023 – 2024", title: "Social Media Content Specialist", org: "WeloJets" },
        { year: "2023 – Present", title: "Freelance Community Manager", org: "Neterwalk · Yamaneat · Grupo Octubre · Festival Wateke" },
        { year: "2022", title: "Production & Communications", org: "Huinca Cine" },
        { year: "2021 – Present", title: "Freelance Production Assistant", org: "Advertising Productions — Avon, Ron Don Q, Just" },
        { year: "2021", title: "Exchange · Degree in Audiovisual Communication", org: "Universidad Carlos III de Madrid (UC3M)" },
        { year: "2018 – 2021", title: "Bachelor's in Communication Sciences", org: "Universidad Argentina de la Empresa (UADE)" },
        { year: "2021", title: "Cambridge Certificate of Proficiency (C2)", org: "CEFR" },
        { year: "2018", title: "Cambridge Certificate in Advanced English (C1)", org: "CEFR" }
      ],
    },
    volunteer: {
      es: [
        { title: "Festival Solidario", desc: "Organización y difusión de eventos solidarios — comunicación aplicada a causas sociales." },
        { title: "Conduciendo a Conciencia", desc: "2014 – Presente · Más de 12 años de concientización vial. Un compromiso sostenido con impacto real." },
      ],
      en: [
        { title: "Solidarity Festival", desc: "Organizing and promoting charity events — communication applied to social causes." },
        { title: "Driving with Awareness", desc: "2014 – Present · Over 12 years of road safety awareness. A sustained commitment with real impact." },
      ],
    },
  },
  contact: {
    label: { es: "Contacto", en: "Contact" },
    heading1: { es: "¡Gracias!", en: "Thank you!" },
    heading2: { es: "", en: "" },
    desc: {
      es: "",
      en: "",
    },
  },
} as const;
