import Navbar from './components/Navbar/Navbar';
import AmbientBackground from './components/Background/AmbientBackground';
import Hero from './components/Hero/Hero';
import Solutions from './components/Solutions/Solutions';
import Projects from './components/Projects/Projects';
import Workflow from './components/Workflow/Workflow';
import Certifications from './components/Certifications/Certifications';
import Contact from './components/Contact/Contact';
import FloatingAdvisor from './components/FloatingAdvisor/FloatingAdvisor';
import './App.css';

const CURRENT_YEAR = new Date().getFullYear();

function App() {
  return (
    <div className="app-root">
      <AmbientBackground />
      <Navbar />
      <main style={{ position: 'relative', zIndex: 1 }}>
        <Hero />
        <Solutions />
        <Projects />
        <Workflow />
        <Certifications />
        <Contact />
      </main>
      <footer style={{ textAlign: 'center', padding: '2.5rem 1.25rem', borderTop: '1px solid var(--border-glass)', color: 'var(--text-secondary)', fontSize: '0.86rem' }}>
        <p>© {CURRENT_YEAR} <strong>Rodrigo Dulanto</strong> · Ingeniería de Software & Soluciones para Empresas</p>
      </footer>
      <FloatingAdvisor />
    </div>
  );
}

export default App;
