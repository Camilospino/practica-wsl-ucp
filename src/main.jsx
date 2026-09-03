import React, { useState } from 'react'
import { createRoot } from 'react-dom/client'
import { ArrowRight, BookOpen, BriefcaseBusiness, Code2, Menu, X } from 'lucide-react'
import './styles.css'

const facts = [
  ['Título', 'Tecnólogo en Desarrollo de Software'],
  ['Duración', '6 semestres'],
  ['Modalidad', 'Presencial'],
  ['Lugar', 'Pereira, Risaralda'],
]

const semesters = [
  { name: 'Primer semestre', courses: ['Matemáticas', 'Desarrollo de software I', 'Introducción a la tecnología', 'Desarrollo humano'] },
  { name: 'Segundo semestre', courses: ['Matemáticas II', 'Expresión oral y escrita', 'Desarrollo de software II', 'Electiva I'] },
  { name: 'Tercer semestre', courses: ['Álgebra lineal', 'Física', 'Desarrollo de software III', 'Bases de datos I'] },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSemester, setActiveSemester] = useState(0)

  const closeMenu = () => setMenuOpen(false)

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span className="brand-mark">U</span>
          <span><strong>Universidad</strong><small>Proyecto académico</small></span>
        </a>

        <button className="menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menú" aria-expanded={menuOpen}>
          {menuOpen ? <X /> : <Menu />}
        </button>

        <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Navegación principal">
          <a href="#programa" onClick={closeMenu}>El programa</a>
          <a href="#perfiles" onClick={closeMenu}>Perfiles</a>
          <a href="#plan" onClick={closeMenu}>Plan de estudio</a>
          <a className="nav-cta" href="#contacto" onClick={closeMenu}>Contáctanos</a>
        </nav>
      </header>

      <main id="inicio">
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow">Facultad de Ciencias Básicas e Ingeniería</p>
            <h1>Tecnología en<br /><span>Desarrollo de Software</span></h1>
            <p className="hero-text">Convierte ideas en soluciones digitales y prepárate para crear tecnología con propósito.</p>
            <div className="hero-actions">
              <a className="button primary" href="#contacto">Quiero más información <ArrowRight size={18} /></a>
              <a className="button secondary" href="#plan">Ver plan de estudio</a>
            </div>
          </div>
          <div className="code-card" aria-label="Ejemplo decorativo de código">
            <div className="code-dots"><i></i><i></i><i></i></div>
            <pre><span>const</span> futuro = {'{'}{`\n`}  talento: <em>'tuyo'</em>,{`\n`}  herramientas: <em>'tecnología'</em>,{`\n`}  impacto: <em>'real'</em>{`\n`}{'}'};{`\n\n`}<b>crear</b>(futuro);</pre>
          </div>
        </section>

        <section className="facts" aria-label="Información del programa">
          {facts.map(([label, value]) => <div key={label}><small>{label}</small><strong>{value}</strong></div>)}
        </section>

        <section className="section intro" id="programa">
          <div>
            <p className="eyebrow">Presentación</p>
            <h2>Aprende a construir las soluciones que el mundo necesita</h2>
          </div>
          <p>El programa forma personas creativas e innovadoras capaces de analizar necesidades, diseñar sistemas de información y desarrollar proyectos tecnológicos para organizaciones y comunidades.</p>
        </section>

        <section className="section profile-section" id="perfiles">
          <div className="section-heading">
            <p className="eyebrow light">Tu futuro profesional</p>
            <h2>Un perfil preparado para crear y liderar</h2>
          </div>
          <div className="cards">
            <article><Code2 /><h3>Desarrollo</h3><p>Construye aplicaciones web, móviles y soluciones empresariales.</p></article>
            <article><BookOpen /><h3>Información</h3><p>Administra bases de datos y sistemas de información.</p></article>
            <article><BriefcaseBusiness /><h3>Consultoría</h3><p>Acompaña procesos de implementación y transformación digital.</p></article>
          </div>
        </section>

        <section className="section study" id="plan">
          <div className="section-heading dark">
            <p className="eyebrow">Plan de estudio</p>
            <h2>Construye tus conocimientos paso a paso</h2>
          </div>
          <div className="semester-layout">
            <div className="semester-tabs" role="tablist">
              {semesters.map((semester, index) => (
                <button key={semester.name} className={activeSemester === index ? 'active' : ''} onClick={() => setActiveSemester(index)} role="tab" aria-selected={activeSemester === index}>
                  <span>0{index + 1}</span>{semester.name}
                </button>
              ))}
            </div>
            <div className="course-list" role="tabpanel">
              <h3>{semesters[activeSemester].name}</h3>
              <ul>{semesters[activeSemester].courses.map(course => <li key={course}>{course}</li>)}</ul>
            </div>
          </div>
        </section>

        <section className="contact" id="contacto">
          <div><p className="eyebrow light">Da el siguiente paso</p><h2>Empieza a construir tu futuro</h2></div>
          <a className="button white" href="mailto:admisiones@universidad.edu.co">Solicitar información <ArrowRight size={18} /></a>
        </section>
      </main>

      <footer><span>Proyecto académico para práctica con React y WSL</span><span>2026</span></footer>
    </>
  )
}

createRoot(document.getElementById('root')).render(<App />)
