import { MessageSquare, Laptop, ShieldCheck } from 'lucide-react';
import './Workflow.css';

const Workflow = () => {
  const steps = [
    {
      step: 'Paso 01',
      icon: <MessageSquare size={20} />,
      title: 'Cotización en el Día',
      description: 'Hablamos por WhatsApp y definimos tu presupuesto fijo.'
    },
    {
      step: 'Paso 02',
      icon: <Laptop size={20} />,
      title: 'Avances en tu Celular',
      description: 'Revisa el progreso en vivo antes de la entrega final.'
    },
    {
      step: 'Paso 03',
      icon: <ShieldCheck size={20} />,
      title: 'Entrega y Garantía',
      description: 'Publicamos tu proyecto con capacitación y soporte directo.'
    }
  ];

  return (
    <section id="workflow" className="section section-alt workflow-section">
      <div className="container">
        <h2 className="section-title">
          <span>Proceso</span>
          ¿Cómo trabajamos?
        </h2>

        <div className="workflow-steps-grid">
          {steps.map((item) => (
            <div key={item.step} className="glass-panel workflow-step-card">
              <div className="step-top">
                <span className="step-badge">{item.step}</span>
                <div className="step-icon-box">{item.icon}</div>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Workflow;
