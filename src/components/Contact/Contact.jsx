import { motion } from 'framer-motion';
import { Download, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './Contact.css';

const Contact = () => {
  return (
    <section id="contact" className="section contact-section">
      <div className="container">
        <h2 className="section-title"><span>Hablemos</span>Contáctame</h2>
        
        <div className="contact-grid">
          {/* Contact Info */}
          <motion.div 
            className="contact-info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3>¿Tienes un proyecto en mente?</h3>
            <p className="contact-desc">
              Estoy abierto a discutir nuevos proyectos, ideas creativas o 
              oportunidades para ser parte de tus visiones. Puedes encontrarme en Lima o a un mensaje de distancia.
            </p>
            
            <div className="contact-details">
              <div className="contact-item">
                <div className="icon-box">
                  <FaWhatsapp size={24} />
                </div>
                <div>
                  <h4>WhatsApp</h4>
                  <p>+51 984 207 998</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="icon-box">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4>Ubicación</h4>
                  <p>Lima, Perú</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* WhatsApp Direct Action */}
          <motion.div 
            className="glass-panel whatsapp-container"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="whatsapp-card-content">
              <div className="whatsapp-icon-large">
                <FaWhatsapp size={60} color="#25D366" />
              </div>
              <h3>Hablemos por WhatsApp</h3>
              <p>
                Si buscas una respuesta rápida y directa, escríbeme a mi WhatsApp personal.
              </p>
              <a 
                href="https://wa.me/51984207998?text=Hola%20Rodrigo,%20vengo%20de%20tu%20portafolio%20y%20me%20gustar%C3%ADa%20hablar%20contigo." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary whatsapp-btn"
                style={{ backgroundColor: '#25D366', color: '#FFF', border: 'none' }}
              >
                <FaWhatsapp size={20} /> Enviar Mensaje
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
