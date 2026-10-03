import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certs = [
    {
      id: "bachiller",
      title: "Bachiller en Desarrollo de Software",
      issuer: "Grado Académico",
      date: "Título Oficial",
      icon: <GraduationCap className="cert-icon" />,
      image: "/titulobachiller.webp"
    },
    {
      id: 1,
      title: "Certificación Udemy",
      issuer: "Udemy",
      date: "Reciente",
      icon: <Award className="cert-icon" />,
      image: "/UC-1fa52804-b92b-4b41-a2bc-f5c9501c12be.webp"
    },
    {
      id: 2,
      title: "Certificación Udemy",
      issuer: "Udemy",
      date: "Reciente",
      icon: <Award className="cert-icon" />,
      image: "/UC-211072b8-9973-4d30-bde0-c16e4ddfe290.webp"
    },
    {
      id: 3,
      title: "Certificación Udemy",
      issuer: "Udemy",
      date: "Reciente",
      icon: <Award className="cert-icon" />,
      image: "/UC-6e468abe-c4ae-4325-ace2-bf5b402b4dd3.webp"
    }
  ];

  return (
    <section id="certifications" className="section cert-section">
      <div className="container">
        <h2 className="section-title"><span>Trayectoria</span>Formación y Certificaciones</h2>

        <div className="cert-grid">
          {/* Certifications List */}
          <div className="cert-list">
            {certs.map((cert, index) => (
              <motion.div
                key={cert.id}
                className="glass-panel cert-card"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="cert-icon-wrapper">
                  {cert.icon}
                </div>
                <div className="cert-info">
                  <h3>{cert.title}</h3>
                  <p>{cert.issuer} • {cert.date}</p>
                  {cert.image && (
                    <a href={cert.image} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-primary)', fontSize: '0.85rem', textDecoration: 'underline', marginTop: '0.5rem', display: 'inline-block' }}>
                      Ver Credencial
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* LinkedIn Profile Promo */}
          <motion.div
            className="glass-panel linkedin-promo"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="linkedin-bg"></div>
            <div className="linkedin-content">
              <div className="linkedin-icon-wrapper">
                <FaLinkedin size={40} color="#0077b5" />
              </div>
              <h3>Conectemos en LinkedIn</h3>
              <p>
                Mantente al día con mis últimos proyectos, publicaciones sobre
                arquitectura de software y reflexiones sobre el mundo del desarrollo web.
              </p>
              <a href="https://www.linkedin.com/in/rodrigo-arturo-dulanto-tejeda-1a99a5318/" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
                Ver Perfil de LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
