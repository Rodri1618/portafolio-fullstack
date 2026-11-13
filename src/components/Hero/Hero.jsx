import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero-section">
      <div className="ambient-glow" aria-hidden="true"></div>

      <div className="container hero-container">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="hero-avatar-wrapper">
            <img
              src="/profile.jpg"
              alt="Rodrigo Dulanto"
              className="hero-avatar"
              fetchPriority="high"
            />
          </div>

          <h1 className="hero-title">
            Digitaliza y Multiplica{' '}
            <span className="text-gradient">Tus Ventas</span>
          </h1>

          <p className="hero-description">
            Webs corporativas, catálogos con IA en WhatsApp y sistemas a medida para tu empresa.
          </p>

          <div className="hero-actions">
            <a href="#contact" className="btn btn-primary">
              Cotizar Ahora <ArrowRight size={17} />
            </a>
            <a href="#solutions" className="btn btn-secondary">
              Servicios
            </a>
          </div>

          <div className="hero-guarantees">
            <span><CheckCircle2 size={15} className="guarantee-icon" /> 100% Móvil</span>
            <span><CheckCircle2 size={15} className="guarantee-icon" /> Soporte Directo</span>
            <span><CheckCircle2 size={15} className="guarantee-icon" /> Entrega Segura</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
