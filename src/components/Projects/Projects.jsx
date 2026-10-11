import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layers, ChevronLeft, ChevronRight } from 'lucide-react';
import './Projects.css';

const ProjectCard = ({ project, index }) => {
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

  return (
    <motion.div 
      className="glass-panel project-card"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="project-image-wrapper">
        <AnimatePresence mode="wait">
          <motion.img 
            key={currentImg}
            src={project.images[currentImg]} 
            alt={`${project.title} - ${currentImg + 1}`} 
            className="project-image" 
            loading="lazy" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />
        </AnimatePresence>
        
        {project.images.length > 1 && (
          <div className="carousel-controls">
            <button className="carousel-btn" onClick={prevImg}>
              <ChevronLeft size={20} />
            </button>
            <button className="carousel-btn" onClick={nextImg}>
              <ChevronRight size={20} />
            </button>
          </div>
        )}

        <div className="project-overlay">
          <a href={project.links.live} className="btn-icon" title="Ver Proyecto">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
      
      <div className="project-info">
        <h3>{project.title}</h3>
        <p className="project-desc">{project.description}</p>
        
        <div className="project-architecture">
          <Layers size={16} className="text-gradient" />
          <span><strong>Arquitectura:</strong> {project.architecture}</span>
        </div>

        <div className="project-tech">
          {project.tech.map(tech => (
            <span key={tech} className="tech-badge">{tech}</span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "RPP Bowtie SaaS",
      description: "Plataforma SaaS Multi-tenant para gestión de riesgos (ISO 27001/9001). Diseño enterprise con roles RBAC y lógica delegada a base de datos.",
      images: ["/bowtie-1.webp"],
      tech: ["React", "Node.js", "PostgreSQL", "TypeScript"],
      architecture: "Monorepo Modular, Stored Procedures",
      links: {
        live: "https://bowtie.riskpreventionperu.com/login"
      }
    },
    {
      id: 2,
      title: "Vibe Pass (APP-QR)",
      description: "Sistema integral PWA para gestión de eventos. Motor de emisión de entradas digitales y escaneo QR de alta velocidad en tiempo real.",
      images: ["/image-vibepass-1.webp", "/image-vibepass-2.webp"],
      tech: ["React", "Node.js", "Supabase", "Tailwind CSS"],
      architecture: "Monorepo, PWA Frontend, API REST",
      links: {
        live: "https://vibepass-one.vercel.app/"
      }
    },
    {
      id: 3,
      title: "Risk Prevention System (HSE)",
      description: "Plataforma SaaS Multi-tenant B2B para gestión de Seguridad y Salud en el Trabajo. Incluye analítica de macro-datos, automatización de tareas y reportes.",
      images: ["/hse-1.webp", "/hse-2.webp"],
      tech: ["React", "Node.js", "PostgreSQL", "Recharts"],
      architecture: "SPA, REST API, Cron Jobs",
      links: {
        live: "https://app.riskpreventionperu.com/login"
      }
    },
    {
      id: 4,
      title: "Mini Fragancias (E-Commerce)",
      description: "Mini e-commerce para venta de fragancias nicho. Incluye panel CMS protegido con autenticación de Supabase para la gestión del catálogo de productos y flujo de compras por WhatsApp.",
      images: ["/minifragancia-principal.webp", "/minifragancia-1.webp"],
      tech: ["React", "Supabase", "Tailwind CSS"],
      architecture: "SPA, Serverless BaaS",
      links: {
        live: "https://www.minifragancia.com/"
      }
    }
  ];

  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <h2 className="section-title"><span>Portafolio</span>Mis Proyectos</h2>
        
        <div className="grid-cards">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
