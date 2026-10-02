import { motion } from 'framer-motion';
import { Database, ShieldCheck, Zap, LayoutTemplate, LineChart, Search } from 'lucide-react';
import './Workflow.css';

const Workflow = () => {
  const practices = [
    {
      id: 1,
      icon: <Database size={32} />,
      title: "Performance de Base de Datos",
      description: "Delego la lógica transaccional pesada directamente a PostgreSQL mediante Stored Procedures y optimización con Índices. Evito ORMs cuando causan cuellos de botella para lograr latencias de milisegundos."
    },
    {
      id: 2,
      icon: <ShieldCheck size={32} />,
      title: "Arquitectura Multi-Tenant (SaaS)",
      description: "Construyo plataformas B2B con aislamiento total de datos por inquilino. Implemento RBAC estricto, mitigación OWASP y diseño orientado al cumplimiento de normativas (como ISO 27001)."
    },
    {
      id: 3,
      icon: <LayoutTemplate size={32} />,
      title: "Desarrollo Modular y Escalable",
      description: "Organizo mis Monorepos (Frontend y Backend) agrupando el código por Feature/Dominio. Esto garantiza arquitecturas mantenibles que no se degradan con el tiempo a medida que la app crece."
    },
    {
      id: 4,
      icon: <Zap size={32} />,
      title: "Experiencia de Usuario (UX/UI)",
      description: "Implemento PWAs robustas con persistencia de estado (Zustand), UI optimista (React Query) y transiciones fluidas. Priorizo interfaces 'Seamless' sin bloqueos y de grado Enterprise."
    },
    {
      id: 5,
      icon: <Search size={32} />,
      title: "SEO Técnico y Accesibilidad",
      description: "Optimización profunda para indexación (Google). Implemento etiquetado Open Graph, semántica HTML estricta y auditorías Lighthouse para asegurar un performance de 100/100."
    },
    {
      id: 6,
      icon: <LineChart size={32} />,
      title: "Analítica y Toma de Decisiones",
      description: "Tomo decisiones de negocio basadas en datos. Integro herramientas de telemetría (Google Analytics, Sentry) para analizar la retención y mapear el flujo crítico del usuario."
    }
  ];

  return (
    <section id="workflow" className="section workflow-section">
      <div className="container">
        <h2 className="section-title"><span>Mi ADN Técnico</span>Metodología y Buenas Prácticas</h2>
        <div className="workflow-subtitle">
          <p>No solo escribo código; diseño arquitecturas robustas pensando en el negocio, la seguridad y el usuario final.</p>
        </div>

        <div className="workflow-grid">
          {practices.map((item, index) => (
            <motion.div 
              key={item.id}
              className="glass-panel workflow-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="workflow-icon-wrapper">
                {item.icon}
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
