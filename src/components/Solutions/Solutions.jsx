import { ShoppingBag, Layers, QrCode, Check, ArrowRight } from 'lucide-react';
import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      id: 'ecommerce',
      featured: true,
      tag: 'Popular',
      icon: <ShoppingBag size={22} />,
      title: 'Tiendas y Catálogos',
      points: [
        'Pedidos directo a WhatsApp',
        'Asistente virtual 24/7',
        'Panel autoadministrable'
      ],
      whatsappText: 'Hola Rodrigo, me interesa cotizar una Tienda / Catálogo Web.'
    },
    {
      id: 'sistemas',
      featured: false,
      tag: 'Empresas',
      icon: <Layers size={22} />,
      title: 'Sistemas a Medida',
      points: [
        'Control de ventas y stock',
        'Accesos por rol de usuario',
        'Reportes en tiempo real'
      ],
      whatsappText: 'Hola Rodrigo, me interesa cotizar un Sistema Web a Medida.'
    },
    {
      id: 'corporativo',
      featured: false,
      tag: 'Negocios',
      icon: <QrCode size={22} />,
      title: 'Webs y Apps QR',
      points: [
        'Optimizado para Google',
        'Diseño corporativo moderno',
        'Escaneo de entradas QR'
      ],
      whatsappText: 'Hola Rodrigo, me interesa cotizar una Página Web o Sistema QR.'
    }
  ];

  return (
    <section id="solutions" className="section section-alt solutions-section">
      <div className="container">
        <h2 className="section-title">
          <span>Servicios</span>
          Soluciones para tu Negocio
        </h2>

        <div className="solutions-bento-grid">
          {solutions.map((item) => (
            <div
              key={item.id}
              className={`glass-panel solution-card ${item.featured ? 'solution-card-featured' : ''}`}
            >
              <div>
                <div className="solution-top-row">
                  <div className="solution-icon-box">{item.icon}</div>
                  <span className="solution-tag">{item.tag}</span>
                </div>

                <h3 className="solution-title">{item.title}</h3>

                <ul className="solution-points">
                  {item.points.map((pt, i) => (
                    <li key={i}>
                      <Check size={15} className="point-check" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href={`https://wa.me/51984207998?text=${encodeURIComponent(item.whatsappText)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn ${item.featured ? 'btn-primary' : 'btn-secondary'} solution-cta-btn`}
              >
                <span>Cotizar</span>
                <ArrowRight size={15} />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
