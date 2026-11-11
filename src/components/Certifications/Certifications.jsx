import { Award, GraduationCap, ExternalLink } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';
import './Certifications.css';

const Certifications = () => {
  const certs = [
    {
      id: 'bachiller',
      title: 'Bachiller en Desarrollo de Software',
      issuer: 'Grado Académico',
      featured: true,
      icon: <GraduationCap className="cert-icon" />,
      image: '/titulobachiller.webp'
    },
    {
      id: 1,
      title: 'Desarrollo Web Full Stack',
      issuer: 'Udemy',
      icon: <Award className="cert-icon" />,
      image: '/UC-1fa52804-b92b-4b41-a2bc-f5c9501c12be.webp'
    },
    {
      id: 2,
      title: 'Arquitectura y Bases de Datos',
      issuer: 'Udemy',
      icon: <Award className="cert-icon" />,
      image: '/UC-211072b8-9973-4d30-bde0-c16e4ddfe290.webp'
    },
    {
      id: 3,
      title: 'Interfaces Modernas & React',
      issuer: 'Udemy',
      icon: <Award className="cert-icon" />,
      image: '/UC-6e468abe-c4ae-4325-ace2-bf5b402b4dd3.webp'
    }
  ];

  return (
    <section id="certifications" className="section cert-section">
      <div className="container">
        <h2 className="section-title">
          <span>Trayectoria</span>
          Respaldo Profesional
        </h2>

        <div className="cert-grid-compact">
          {certs.map((cert) => (
            <div
              key={cert.id}
              className={`glass-panel cert-card ${cert.featured ? 'cert-card-featured' : ''}`}
            >
              <div className="cert-icon-wrapper">{cert.icon}</div>
              <div className="cert-info">
                <h3>{cert.title}</h3>
                <p>{cert.issuer}</p>
              </div>
              {cert.image && (
                <a
                  href={cert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cert-link-btn"
                  title="Ver credencial"
                >
                  <span>Ver</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          ))}
        </div>

        <div className="cert-linkedin-bar">
          <a
            href="https://www.linkedin.com/in/rodrigo-arturo-dulanto-tejeda-1a99a5318/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary linkedin-inline-btn"
          >
            <FaLinkedin size={18} color="#0077b5" />
            Conectar en LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
