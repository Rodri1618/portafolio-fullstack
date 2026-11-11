import { MapPin, CheckCircle2 } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section section-alt contact-section">
      <div className="container">
        <div className="glass-panel contact-single-card">
          <span className="contact-eyebrow">Contacto Directo</span>
          <h2>¿Hablamos de tu proyecto?</h2>
          <p className="contact-sub">
            Cotiza tu web o sistema hoy mismo sin compromiso.
          </p>

          <a
            href="https://wa.me/51984207998?text=Hola%20Rodrigo,%20vengo%20de%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20solicitar%20una%20cotizaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-btn"
          >
            <FaWhatsapp size={20} />
            <span>Hablar por WhatsApp</span>
          </a>

          <div className="contact-guarantees">
            <span><CheckCircle2 size={14} className="contact-check" /> Respuesta en el día</span>
            <span><CheckCircle2 size={14} className="contact-check" /> Asesoría gratuita</span>
          </div>

          <div className="contact-meta-footer">
            <span>+51 984 207 998</span>
            <span className="meta-dot">•</span>
            <span><MapPin size={14} /> Lima, Perú</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
