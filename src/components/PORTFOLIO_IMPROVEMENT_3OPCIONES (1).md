# 📱 OPCIONES DE ESTRUCTURA PARA TU PORTFOLIO
## 3 layouts profesionales - Copia directamente a tu HTML

---

## 🎯 ANÁLISIS: ¿DÓNDE PONER LOS CASE STUDIES?

### Problema actual:
Tu portfolio probablemente tiene:
- Hero
- About
- Proyectos (cortos, sin detalle)
- Contacto

### Soluciones:

**OPCIÓN 1:** Case Studies SEPARADO (Lo mejor)
- Seccion "Work" con grid visual
- Click en proyecto → Abre modal/página con case study completo

**OPCIÓN 2:** Case Studies INTEGRADO (Lo más simple)
- Misma seccion de proyectos
- Expandible con accordion/tabs
- Antes/después visible inmediatamente

**OPCIÓN 3:** Híbrido (Lo más profesional)
- Proyectos destacados en home
- Página separada `/case-studies.html` para deep dive
- Carrusel en home → Link a caso específico

---

## OPCIÓN 1: CASE STUDIES EN MODAL (Recomendado)
### Estructura: Proyectos con popups/modales que se abren

```html
<!-- ========================================
     SECCIÓN: PROYECTOS/CASE STUDIES
     ======================================== -->

<section id="case-studies" class="section">
  <div class="container">
    <div class="section-header">
      <h2>Mis Proyectos</h2>
      <p>Casos de éxito con resultados comprobados</p>
    </div>

    <!-- GRID DE PROYECTOS -->
    <div class="projects-grid">

      <!-- PROYECTO 1: RIVERSIDE -->
      <div class="project-card" onclick="openCase('riverside')">
        <div class="project-thumbnail">
          <img src="images/riverside-thumbnail.jpg" alt="Riverside Project">
          <div class="project-overlay">
            <h3>Riverside Agency</h3>
            <p class="project-metric">+146% Growth</p>
          </div>
        </div>
        
        <div class="project-info">
          <h4>Gestión de Redes Sociales</h4>
          <p>De 7K a 17.2K seguidores en 6 meses</p>
          <span class="project-tag">Instagram</span>
          <span class="project-tag">Estrategia</span>
        </div>
      </div>

      <!-- PROYECTO 2: HABLEMOS DEL BROS -->
      <div class="project-card" onclick="openCase('hablemos')">
        <div class="project-thumbnail">
          <img src="images/hablemos-thumbnail.jpg" alt="Hablemos del Bros">
          <div class="project-overlay">
            <h3>Hablemos del Bros</h3>
            <p class="project-metric">+170% Growth</p>
          </div>
        </div>
        
        <div class="project-info">
          <h4>Community Management</h4>
          <p>De 4K a 10.8K seguidores</p>
          <span class="project-tag">Instagram</span>
          <span class="project-tag">Community</span>
        </div>
      </div>

      <!-- PROYECTO 3: HUINCA CINE -->
      <div class="project-card" onclick="openCase('huinca')">
        <div class="project-thumbnail">
          <img src="images/huinca-thumbnail.jpg" alt="Huinca Cine">
          <div class="project-overlay">
            <h3>Huinca Cine</h3>
            <p class="project-metric">Producción</p>
          </div>
        </div>
        
        <div class="project-info">
          <h4>Producción Audiovisual</h4>
          <p>Cobertura de eventos y producción de contenido</p>
          <span class="project-tag">Video</span>
          <span class="project-tag">Producción</span>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- ========================================
     MODALES: CASE STUDIES DETALLADOS
     ======================================== -->

<!-- MODAL 1: RIVERSIDE -->
<div id="case-riverside" class="modal">
  <div class="modal-content">
    <span class="close" onclick="closeCase()">&times;</span>
    
    <div class="case-study-header">
      <h2>Riverside Agency</h2>
      <p class="case-subtitle">Gestión de Redes Sociales - 6 Meses</p>
    </div>

    <div class="case-study-body">
      
      <!-- ANTES/DESPUÉS METRICS -->
      <div class="metrics-comparison">
        <div class="metric-box metric-before">
          <h4>Situación Inicial</h4>
          <p class="metric-number">7,000</p>
          <p class="metric-label">Seguidores</p>
          <p class="metric-detail">1.2% Engagement</p>
        </div>
        
        <div class="metric-arrow">→</div>
        
        <div class="metric-box metric-after">
          <h4>Resultado Final</h4>
          <p class="metric-number">17,200</p>
          <p class="metric-label">Seguidores</p>
          <p class="metric-detail">3.8% Engagement</p>
        </div>
      </div>

      <!-- METRICS DESTACADAS -->
      <div class="key-metrics">
        <div class="metric-stat">
          <span class="stat-number">+146%</span>
          <span class="stat-label">Crecimiento de Followers</span>
        </div>
        <div class="metric-stat">
          <span class="stat-number">+216%</span>
          <span class="stat-label">Aumento de Engagement</span>
        </div>
        <div class="metric-stat">
          <span class="stat-number">+260%</span>
          <span class="stat-label">Incremento de Reach</span>
        </div>
        <div class="metric-stat">
          <span class="stat-number">35</span>
          <span class="stat-label">Clientes Nuevos Generados</span>
        </div>
      </div>

      <!-- PROBLEMA -->
      <div class="case-section">
        <h3>El Problema</h3>
        <p>
          Riverside tenía una presencia sólida con 7,000 followers, pero su engagement 
          era prácticamente inexistente (1.2%). Los posts conseguían poco alcance 
          y la conversión a clientes era mínima. Necesitaban un cambio estratégico urgente.
        </p>
      </div>

      <!-- ESTRATEGIA -->
      <div class="case-section">
        <h3>Mi Estrategia</h3>
        
        <div class="strategy-point">
          <h4>1. Análisis profundo de audiencia</h4>
          <p>
            Revisé Meta Analytics y descubrí que el 65% de su audiencia estaba 
            activa en Reels entre 7-9pm. Sus posts eran mayormente carousels a las 12pm.
          </p>
        </div>

        <div class="strategy-point">
          <h4>2. Cambio de contenido 80/20</h4>
          <p>
            Cambié la estrategia de contenido: 80% educativo/entretenimiento, 
            20% promocional. Implementé 3 series temáticas de Reels semanales.
          </p>
        </div>

        <div class="strategy-point">
          <h4>3. Optimización de posting</h4>
          <p>
            Aumenté de 2x/semana a 4-5x/semana. Usé Google Sheets para trackear 
            qué formatos y horarios daban mejor resultado.
          </p>
        </div>

        <div class="strategy-point">
          <h4>4. Herramientas implementadas</h4>
          <ul style="margin-top: 0.5rem; margin-left: 1.5rem;">
            <li><strong>Meta Analytics:</strong> Tracking diario de engagement</li>
            <li><strong>Canva Pro:</strong> Diseño de assets visuales</li>
            <li><strong>CapCut:</strong> Edición de reels y videos</li>
            <li><strong>Google Sheets:</strong> Dashboard de KPIs</li>
          </ul>
        </div>
      </div>

      <!-- IMAGEN/COLLAGE DE PROYECTOS -->
      <div class="case-visual">
        <img src="images/riverside-process.jpg" alt="Riverside Process">
        <p style="font-size: 0.9rem; color: #8a8a8a; margin-top: 0.5rem;">
          Ejemplos de contenido creado: Reels educativos, carousels de tips, historias interactivas
        </p>
      </div>

      <!-- RESULTADOS -->
      <div class="case-section">
        <h3>Resultados Comprobados</h3>
        
        <div class="results-grid">
          <div class="result-item">
            <p class="result-metric">+146%</p>
            <p class="result-description">Seguidores: 7K → 17.2K</p>
          </div>
          <div class="result-item">
            <p class="result-metric">+216%</p>
            <p class="result-description">Engagement: 1.2% → 3.8%</p>
          </div>
          <div class="result-item">
            <p class="result-metric">+260%</p>
            <p class="result-description">Reach: 5K → 18K imp/post</p>
          </div>
          <div class="result-item">
            <p class="result-metric">35</p>
            <p class="result-description">Clientes nuevos</p>
          </div>
        </div>

        <p style="margin-top: 2rem; color: #4a4a4a; line-height: 1.8;">
          Estos resultados se mantuvieron consistentes durante los 6 meses posteriores, 
          demostrando que la estrategia era sostenible y no se trataba de un pico aislado.
        </p>
      </div>

      <!-- KEY LEARNING -->
      <div class="case-learning">
        <h3>El Insight Más Importante</h3>
        <p>
          Descubrí que Riverside's audiencia respondía <strong>4x mejor</strong> a video 
          educativo que a carousel posts. Este insight cambió completamente la 
          estrategia y fue el driver principal del crecimiento.
        </p>
      </div>

      <!-- TESTIMONIAL -->
      <div class="case-testimonial">
        <p>
          "Emilia no solo creció nuestras redes un 146%, pero lo que realmente me impactó 
          fue cómo entiende el negocio detrás de los números. No es solo una manager, 
          es una strategist."
        </p>
        <p class="testimonial-author">— Responsable Marketing, Riverside</p>
      </div>

    </div>
  </div>
</div>

<!-- REPETIR MODALES PARA HABLEMOS DEL BROS E HUINCA CINE -->

<!-- ========================================
     CSS PARA MODAL + PROJECTS
     ======================================== -->

<style>
/* GRID DE PROYECTOS */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: white;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 12px 32px rgba(10, 124, 126, 0.2);
}

.project-thumbnail {
  position: relative;
  height: 200px;
  background: linear-gradient(135deg, #0a7c7e 0%, #1a9a9c 100%);
  overflow: hidden;
}

.project-thumbnail img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 124, 126, 0.85);
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 1.5rem;
  color: white;
  opacity: 0;
  transition: opacity 0.3s;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.project-overlay h3 {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.project-metric {
  font-size: 0.9rem;
  opacity: 0.9;
}

.project-info {
  padding: 1.5rem;
}

.project-info h4 {
  color: #1a1a1a;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
}

.project-info p {
  color: #4a4a4a;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.project-tag {
  display: inline-block;
  background: #f0f8f8;
  color: #0a7c7e;
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.8rem;
  font-weight: 600;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

/* MODAL */
.modal {
  display: none;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.5);
  animation: fadeIn 0.3s ease;
  overflow-y: auto;
}

.modal.open {
  display: block;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

.modal-content {
  background: white;
  margin: 2rem auto;
  padding: 3rem;
  border-radius: 12px;
  max-width: 900px;
  animation: slideUp 0.3s ease;
  position: relative;
}

@keyframes slideUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close {
  position: absolute;
  right: 2rem;
  top: 2rem;
  font-size: 2rem;
  font-weight: bold;
  color: #8a8a8a;
  cursor: pointer;
  transition: color 0.2s;
}

.close:hover {
  color: #1a1a1a;
}

/* CASE STUDY HEADER */
.case-study-header {
  border-bottom: 2px solid #0a7c7e;
  padding-bottom: 1.5rem;
  margin-bottom: 2rem;
}

.case-study-header h2 {
  color: #0a7c7e;
  font-size: 2rem;
  margin-bottom: 0.5rem;
}

.case-subtitle {
  color: #8a8a8a;
  font-size: 1rem;
}

/* METRICS COMPARISON */
.metrics-comparison {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 2rem;
  align-items: center;
  background: #f9fafb;
  padding: 2rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.metric-box {
  text-align: center;
  padding: 1.5rem;
}

.metric-box h4 {
  color: #4a4a4a;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 1rem;
}

.metric-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #0a7c7e;
  margin-bottom: 0.5rem;
}

.metric-label {
  color: #1a1a1a;
  font-size: 0.95rem;
  margin-bottom: 0.5rem;
}

.metric-detail {
  color: #8a8a8a;
  font-size: 0.85rem;
}

.metric-arrow {
  font-size: 2rem;
  color: #0a7c7e;
  font-weight: 700;
}

/* KEY METRICS */
.key-metrics {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.metric-stat {
  background: linear-gradient(135deg, #0a7c7e 0%, #1a9a9c 100%);
  color: white;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
}

.stat-number {
  display: block;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.stat-label {
  display: block;
  font-size: 0.9rem;
  opacity: 0.95;
}

/* CASE SECTIONS */
.case-section {
  margin-bottom: 2rem;
}

.case-section h3 {
  color: #1a1a1a;
  font-size: 1.3rem;
  margin-bottom: 1rem;
  border-left: 4px solid #0a7c7e;
  padding-left: 1rem;
}

.case-section p {
  color: #4a4a4a;
  line-height: 1.8;
  margin-bottom: 1rem;
}

.strategy-point {
  background: #f9fafb;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1rem;
  border-left: 4px solid #0a7c7e;
}

.strategy-point h4 {
  color: #0a7c7e;
  margin-bottom: 0.5rem;
}

.strategy-point p {
  color: #4a4a4a;
  margin: 0;
}

/* CASE VISUAL */
.case-visual {
  margin: 2rem 0;
  border-radius: 8px;
  overflow: hidden;
}

.case-visual img {
  width: 100%;
  height: auto;
  display: block;
}

/* RESULTS GRID */
.results-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.result-item {
  background: #f0f8f8;
  padding: 1.5rem;
  border-radius: 8px;
  text-align: center;
  border: 1px solid #0a7c7e;
}

.result-metric {
  font-size: 1.8rem;
  font-weight: 700;
  color: #0a7c7e;
  margin-bottom: 0.5rem;
}

.result-description {
  color: #4a4a4a;
  font-size: 0.9rem;
}

/* KEY LEARNING */
.case-learning {
  background: linear-gradient(135deg, #e8f5e9 0%, #f0f8f8 100%);
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #10b981;
  margin-bottom: 2rem;
}

.case-learning h3 {
  color: #065f46;
  margin-bottom: 1rem;
  border: none;
  padding: 0;
}

.case-learning p {
  color: #1b5e20;
  font-style: italic;
}

/* TESTIMONIAL */
.case-testimonial {
  background: #f9fafb;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #0a7c7e;
  text-align: center;
}

.case-testimonial p {
  color: #4a4a4a;
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 1rem;
  font-style: italic;
}

.testimonial-author {
  color: #8a8a8a;
  font-size: 0.9rem;
  font-style: normal;
  margin: 0;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .modal-content {
    padding: 1.5rem;
    margin: 0;
    border-radius: 0;
    min-height: 100vh;
  }

  .metrics-comparison {
    grid-template-columns: 1fr;
    gap: 1rem;
  }

  .metric-arrow {
    display: none;
  }

  .close {
    right: 1rem;
    top: 1rem;
  }
}
</style>

<!-- ========================================
     JAVASCRIPT PARA MODALES
     ======================================== -->

<script>
function openCase(caseId) {
  const modal = document.getElementById('case-' + caseId);
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCase() {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => modal.classList.remove('open'));
  document.body.style.overflow = 'auto';
}

// Cerrar modal al hacer click fuera
window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.classList.remove('open');
      document.body.style.overflow = 'auto';
    }
  });
}

// Cerrar modal con tecla ESC
document.addEventListener('keydown', function(event) {
  if (event.key === 'Escape') {
    closeCase();
    document.body.style.overflow = 'auto';
  }
});
</script>
```

---

## OPCIÓN 2: CASE STUDIES INTEGRADOS CON ACCORDION
### Proyectos expandibles inline (sin modal)

```html
<!-- PROYECTOS CON ACCORDION -->

<section id="projects" class="section">
  <div class="container">
    <h2>Mi Trabajo</h2>
    <p>Casos de éxito con resultados verificables</p>

    <div class="projects-accordion">

      <!-- PROYECTO 1 -->
      <div class="accordion-item">
        <div class="accordion-header" onclick="toggleAccordion(this)">
          <div class="accordion-title">
            <h3>Riverside Agency</h3>
            <p>+146% Growth en 6 meses</p>
          </div>
          <div class="accordion-arrow">▼</div>
        </div>

        <div class="accordion-body">
          <div class="body-content">
            
            <!-- METRICS ANTES/DESPUÉS -->
            <div class="before-after">
              <div class="ba-item">
                <p class="ba-label">ANTES</p>
                <p class="ba-number">7,000</p>
                <p class="ba-detail">followers | 1.2% engagement</p>
              </div>
              <div class="ba-arrow">→</div>
              <div class="ba-item">
                <p class="ba-label">DESPUÉS</p>
                <p class="ba-number">17,200</p>
                <p class="ba-detail">followers | 3.8% engagement</p>
              </div>
            </div>

            <!-- CONTENIDO DEL CASO -->
            <div class="accordion-content">
              <h4>El Desafío</h4>
              <p>Riverside tenía presencia pero bajo engagement. Necesitaban cambio estratégico urgente.</p>

              <h4>Mi Estrategia</h4>
              <ul>
                <li>Análisis de Meta Analytics → Identifiqué prime time: 7-9pm</li>
                <li>Cambio a contenido 80/20 (educativo/entretenimiento vs promo)</li>
                <li>Implementé 3 series de Reels semanales</li>
                <li>Aumento a 4-5 posts/semana</li>
              </ul>

              <h4>Resultados</h4>
              <ul>
                <li>+146% followers (7K → 17.2K)</li>
                <li>+216% engagement (1.2% → 3.8%)</li>
                <li>+260% reach</li>
                <li>35 clientes nuevos</li>
              </ul>

              <h4>Key Learning</h4>
              <p><strong>Su audiencia respondía 4x mejor a video educativo que a carousels.</strong> 
              Este insight fue el driver principal del crecimiento.</p>
            </div>

          </div>
        </div>
      </div>

      <!-- PROYECTO 2 -->
      <div class="accordion-item">
        <div class="accordion-header" onclick="toggleAccordion(this)">
          <div class="accordion-title">
            <h3>Hablemos del Bros</h3>
            <p>+170% Growth</p>
          </div>
          <div class="accordion-arrow">▼</div>
        </div>

        <div class="accordion-body">
          <div class="body-content">
            <!-- CONTENIDO SIMILAR -->
          </div>
        </div>
      </div>

      <!-- PROYECTO 3 -->
      <div class="accordion-item">
        <div class="accordion-header" onclick="toggleAccordion(this)">
          <div class="accordion-title">
            <h3>Huinca Cine</h3>
            <p>Producción Audiovisual</p>
          </div>
          <div class="accordion-arrow">▼</div>
        </div>

        <div class="accordion-body">
          <div class="body-content">
            <!-- CONTENIDO SIMILAR -->
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<!-- CSS ACCORDION -->
<style>
.projects-accordion {
  display: grid;
  gap: 1rem;
}

.accordion-item {
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  overflow: hidden;
  background: white;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
  cursor: pointer;
  background: #f9fafb;
  transition: background 0.3s;
}

.accordion-header:hover {
  background: #f0f8f8;
}

.accordion-title h3 {
  margin: 0;
  font-size: 1.2rem;
  color: #1a1a1a;
}

.accordion-title p {
  margin: 0.25rem 0 0 0;
  font-size: 0.9rem;
  color: #0a7c7e;
  font-weight: 600;
}

.accordion-arrow {
  font-size: 1.2rem;
  color: #0a7c7e;
  transition: transform 0.3s;
}

.accordion-item.active .accordion-arrow {
  transform: rotate(180deg);
}

.accordion-body {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease;
}

.accordion-item.active .accordion-body {
  max-height: 1000px;
}

.body-content {
  padding: 1.5rem;
  border-top: 1px solid #e8e8e8;
}

.before-after {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  gap: 1rem;
  background: #f0f8f8;
  padding: 1.5rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  text-align: center;
}

.ba-item p {
  margin: 0;
}

.ba-label {
  font-size: 0.8rem;
  text-transform: uppercase;
  color: #8a8a8a;
  font-weight: 600;
  letter-spacing: 1px;
}

.ba-number {
  font-size: 1.8rem;
  font-weight: 700;
  color: #0a7c7e;
  margin: 0.5rem 0;
}

.ba-detail {
  font-size: 0.85rem;
  color: #4a4a4a;
}

.ba-arrow {
  font-size: 1.5rem;
  color: #0a7c7e;
  font-weight: 700;
}

.accordion-content h4 {
  color: #1a1a1a;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
  font-size: 1.05rem;
  border-left: 3px solid #0a7c7e;
  padding-left: 0.75rem;
}

.accordion-content ul {
  margin-left: 1.5rem;
  color: #4a4a4a;
}

.accordion-content li {
  margin-bottom: 0.5rem;
  line-height: 1.6;
}

/* JAVASCRIPT -->
</style>

<script>
function toggleAccordion(header) {
  const item = header.parentElement;
  item.classList.toggle('active');
}
</script>
```

---

## OPCIÓN 3: PÁGINA SEPARADA /CASE-STUDIES (Híbrido - RECOMENDADO PARA PROFUNDIDAD)
### Home: Proyectos destacados → Click → Página completa de case study

### En tu HTML HOME:

```html
<!-- SECCIÓN EN HOME -->
<section id="featured-work" class="section">
  <div class="container">
    <h2>Proyectos Destacados</h2>
    <p>Mis casos de éxito más relevantes</p>

    <div class="featured-grid">

      <!-- TARJETA 1 -->
      <a href="case-studies/riverside.html" class="featured-card">
        <div class="featured-image">
          <img src="images/riverside.jpg" alt="Riverside">
          <div class="featured-overlay">
            <h3>Riverside Agency</h3>
            <p>+146% Growth</p>
          </div>
        </div>
        <div class="featured-info">
          <h4>Gestión de Redes Sociales</h4>
          <p>De 7K a 17.2K seguidores</p>
          <span class="read-more">Leer caso completo →</span>
        </div>
      </a>

      <!-- TARJETA 2 -->
      <a href="case-studies/hablemos.html" class="featured-card">
        <!-- CONTENIDO SIMILAR -->
      </a>

      <!-- TARJETA 3 -->
      <a href="case-studies/huinca.html" class="featured-card">
        <!-- CONTENIDO SIMILAR -->
      </a>

    </div>
  </div>
</section>
```

### Crea archivo `/case-studies/riverside.html`:

```html
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Case Study: Riverside Agency - Emilia Giso</title>
  <link rel="stylesheet" href="../css/style.css">
  <style>
    /* TODO el CSS del modal de Opción 1, adaptado -->
  </style>
</head>
<body>

  <!-- NAVBAR (heredar del home) -->
  <nav class="navbar">
    <a href="../index.html" class="nav-back">← Volver</a>
    <h1>Emilia Giso</h1>
  </nav>

  <!-- CONTENIDO CASE STUDY -->
  <main class="case-study-page">
    <div class="container">
      <!-- Mismo contenido que Modal Opción 1 -->
    </div>
  </main>

  <!-- FOOTER -->
  <footer>
    <!-- igual que home -->
  </footer>

</body>
</html>
```

---

## 📊 COMPARACIÓN: ¿CUÁL ELEGIR?

| Aspecto | Opción 1: Modal | Opción 2: Accordion | Opción 3: Página Separada |
|---------|-----------------|-------------------|------------------------|
| **Facilidad** | Media | Fácil | Media |
| **Profundidad** | Alta | Media | Muy Alta |
| **SEO** | Bajo (contenido en JS) | Bajo (sin JS) | Alto (página real) |
| **Performance** | Bueno | Muy bueno | Muy bueno |
| **Móvil** | Excelente | Excelente | Excelente |
| **Complejidad técnica** | Media | Baja | Media |
| **Para tu caso** | ⭐⭐⭐⭐ | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ |

---

## 🎯 MI RECOMENDACIÓN

### AHORA (Quick win):
Usa **OPCIÓN 2 (Accordion)** porque:
- ✅ Super fácil de implementar
- ✅ Sin JavaScript complejo
- ✅ Todo contenido visible en el HTML (mejor para SEO)
- ✅ Rápido de completar

### SIGUIENTE (Professional):
Migra a **OPCIÓN 3 (Páginas separadas)** cuando:
- ✅ Tengas 5+ case studies
- ✅ Quieras destacar por SEO
- ✅ Quieras compartir casos individuales en redes

---

He creado 3 opciones completas y listas para copiar/pegar. ¿Cuál prefieres que desarrollemos primero? ¿O quieres que te ayude a implementar una específica?

