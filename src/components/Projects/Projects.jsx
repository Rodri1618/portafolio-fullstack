import { ExternalLink } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const projects = [
    {
      id: 5,
      tag: 'Bot WhatsApp IA',
      title: 'Mini Asistente Virtual',
      description: 'Responde stock y precios por WhatsApp conectado a la base de datos.',
      image: '/mini-chatbot.webp',
      imageClass: 'project-image-bot',
      tech: 'WhatsApp Bot · Node.js · DB Segura',
      live: 'https://wa.me/51944228935?text=Hola%20Mini,%20quiero%20consultar%20sobre%20sus%20perfumes%20y%20decants.',
      ctaLabel: 'Hablar con Mini',
      isWhatsapp: true
    },
    {
      id: 4,
      tag: 'E-Commerce',
      title: 'Mini Fragancias',
      description: 'Catálogo online con pedidos por WhatsApp y panel de productos.',
      image: 'https://images.unsplash.com/photo-1594035910387-fea47794261f?w=600&h=400&fit=crop',
      tech: 'React · Supabase · Tailwind',
      live: 'https://www.minifragancia.com/',
      ctaLabel: 'Ver en vivo'
    },
    {
      id: 2,
      tag: 'App Eventos QR',
      title: 'Vibe Pass',
      description: 'Entradas digitales y validación QR en tiempo real desde celular.',
      image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=400&fit=crop',
      tech: 'React · Node.js · Supabase',
      live: 'https://vibepass-one.vercel.app/',
      ctaLabel: 'Ver en vivo'
    },
    {
      id: 3,
      tag: 'Sistema Gestión',
      title: 'Control y Reportes HSE',
      description: 'Automatización de tareas, inspecciones y reportes empresariales.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop',
      tech: 'React · Node.js · PostgreSQL',
      live: 'https://app.riskpreventionperu.com/login',
      ctaLabel: 'Ver en vivo'
    },
    {
      id: 1,
      tag: 'Software SaaS',
      title: 'RPP Bowtie SaaS',
      description: 'Plataforma corporativa multi-empresa con control de accesos.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
      tech: 'React · TypeScript · PostgreSQL',
      live: 'https://bowtie.riskpreventionperu.com/login',
      ctaLabel: 'Ver en vivo'
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title">
          <span>Portafolio</span>
          Trabajos Realizados
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <article key={project.id} className="glass-panel project-card">
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className={`project-image ${project.imageClass || ''}`}
                  loading="lazy"
                />
              </div>

              <div className="project-info">
                <span className="project-category-pill">{project.tag}</span>
                <h3>{project.title}</h3>
                <p className="project-desc">{project.description}</p>

                <div className="project-footer">
                  <span className="project-tech-inline">{project.tech}</span>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`project-live-link ${project.isWhatsapp ? 'project-wa-link' : ''}`}
                  >
                    {project.isWhatsapp ? <FaWhatsapp size={16} /> : null}
                    {project.ctaLabel || 'Ver en vivo'}
                    {!project.isWhatsapp ? <ExternalLink size={15} /> : null}
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
        <p className="mobile-swipe-hint">Desliza para ver más →</p>
      </div>
    </section>
  );
};

export default Projects;
