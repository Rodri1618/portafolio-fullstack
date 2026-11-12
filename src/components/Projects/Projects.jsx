import { useState } from 'react';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './Projects.css';

const ProjectCard = ({ project }) => {
  const [currentImg, setCurrentImg] = useState(0);

  const nextImg = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % project.images.length);
  };

  const prevImg = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const currentImageSrc = project.images[currentImg];
  const isLogoImage = currentImageSrc === '/image-minifragancia.webp';

  return (
    <article className="glass-panel project-card">
      <div className="project-image-wrapper">
        <img
          src={currentImageSrc}
          alt={`${project.title} - ${currentImg + 1}`}
          className={`project-image ${project.imageClass || ''} ${isLogoImage ? 'project-image-logo' : ''}`}
          loading="lazy"
        />

        {project.images.length > 1 && (
          <div className="carousel-controls">
            <button type="button" className="carousel-btn" onClick={prevImg} aria-label="Imagen anterior">
              <ChevronLeft size={18} />
            </button>
            <button type="button" className="carousel-btn" onClick={nextImg} aria-label="Siguiente imagen">
              <ChevronRight size={18} />
            </button>
          </div>
        )}
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
  );
};

const Projects = () => {
  const projects = [
    {
      id: 5,
      tag: 'Bot WhatsApp IA',
      title: 'Mini Asistente Virtual',
      description: 'Responde stock y precios por WhatsApp conectado a la base de datos.',
      images: ['/mini-chatbot.webp'],
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
      images: ['/image-minifragancia.webp'],
      tech: 'React · Supabase · Tailwind',
      live: 'https://www.minifragancia.com/',
      ctaLabel: 'Ver en vivo'
    },
    {
      id: 2,
      tag: 'App Eventos QR',
      title: 'Vibe Pass',
      description: 'Entradas digitales y validación QR en tiempo real desde celular.',
      images: ['/image-vibepass.webp'],
      imageClass: 'project-image-vibepass',
      tech: 'React · Node.js · Supabase',
      live: 'https://vibepass-one.vercel.app/',
      ctaLabel: 'Ver en vivo'
    },
    {
      id: 3,
      tag: 'Sistema Gestión',
      title: 'Control y Reportes HSE',
      description: 'Automatización de tareas, inspecciones y reportes empresariales.',
      images: ['/image-hse.webp'],
      imageClass: 'project-image-hse',
      tech: 'React · Node.js · PostgreSQL',
      live: 'https://app.riskpreventionperu.com/login',
      ctaLabel: 'Ver en vivo'
    },
    {
      id: 1,
      tag: 'Software SaaS',
      title: 'RPP Bowtie SaaS',
      description: 'Plataforma corporativa multi-empresa con control de accesos.',
      images: ['/image-bowtie.webp'],
      imageClass: 'project-image-hse',
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
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <p className="mobile-swipe-hint">Desliza para ver más →</p>
      </div>
    </section>
  );
};

export default Projects;
