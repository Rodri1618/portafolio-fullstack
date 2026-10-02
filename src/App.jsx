import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects/Projects';
import Workflow from './components/Workflow/Workflow';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Workflow />
        <Certifications />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '3rem 2rem', borderTop: '1px solid var(--border-glass)', color: 'var(--text-secondary)' }}>
        <p>Diseñado y desarrollado por <strong>Rodrigo Dulanto</strong> © {new Date().getFullYear()}</p>
        <p style={{ fontSize: '0.9rem', marginTop: '0.5rem', opacity: 0.7 }}>Ingeniería de Software · Arquitectura SaaS · Soluciones Escalables</p>
      </footer>
    </>
  );
}

export default App;
