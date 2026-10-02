import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import GridReveal from './GridReveal';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <GridReveal />
      {/* Background decorations */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>

      <div className="container hero-container">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-avatar-wrapper">
            <img 
              src="/profile.jpg" 
              alt="Rodrigo Dulanto" 
              className="hero-avatar"
            />
          </div>
          <h2 className="hero-greeting">Hola, soy <span className="text-gradient">Rodrigo Dulanto</span></h2>
          <h1 className="hero-title">
            Desarrollador Web <br />
            <span className="text-gradient">Full Stack</span>
          </h1>
          <p className="hero-description">
            Especializado en construir experiencias digitales excepcionales, 
            robustas y escalables. Transformo ideas complejas en soluciones 
            elegantes y modernas usando las últimas tecnologías del mercado.
          </p>
          
          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              Ver Proyectos <ArrowRight size={20} />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contáctame
            </a>
          </div>
        </motion.div>
      </div>

      <a href="#projects" className="scroll-indicator">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <ChevronDown size={32} color="var(--text-secondary)" />
        </motion.div>
      </a>
    </section>
  );
};

export default Hero;
