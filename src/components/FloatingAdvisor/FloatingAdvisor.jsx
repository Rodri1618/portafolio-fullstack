import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronRight, ShieldCheck } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import './FloatingAdvisor.css';

const FloatingAdvisor = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [activeTipIndex, setActiveTipIndex] = useState(0);
  const [selectedId, setSelectedId] = useState('whatsapp');

  const quickTips = [
    '¿Sabías que el 78% de clientes compra al primer negocio que le responde en minutos?',
    '¿Sabías que usar Excel te hace perder hasta 15 horas por semana en tareas manuales?',
    '¿Sabías que un sistema con IA puede vender y actualizar tu stock 24/7 mientras duermes?'
  ];

  const mypeSuggestions = [
    {
      id: 'whatsapp',
      question: '¿Sabías que el 78% de ventas en WhatsApp se pierden por demorar en responder?',
      solution: 'Catálogo Web + Asistente IA 24/7',
      benefit: 'Responde precios al instante, muestra stock en tiempo real y recibe pedidos listos sin estar pegado al celular.',
      waText: 'Hola Rodrigo, vi tu guía para MYPEs y me interesa implementar un Catálogo Web con Asistente IA 24/7.'
    },
    {
      id: 'sistema',
      question: '¿Sabías que llevar cuentas en Excel genera pérdidas hormiga y frena tu crecimiento?',
      solution: 'Sistema Web a Medida en la Nube',
      benefit: 'Automatiza caja, inventario, reportes y accesos por trabajador para controlar tu negocio desde cualquier lugar.',
      waText: 'Hola Rodrigo, vi tu guía para MYPEs y me interesa un Sistema Web a Medida para automatizar mi negocio.'
    },
    {
      id: 'confianza',
      question: '¿Sabías que 8 de cada 10 clientes te buscan en Google antes de decidir comprarte?',
      solution: 'Web Corporativa de Alta Conversión',
      benefit: 'Proyecta solidez empresarial frente a tu competencia, genera confianza inmediata y capta clientes más grandes.',
      waText: 'Hola Rodrigo, vi tu guía para MYPEs y quiero una Web Corporativa moderna para captar más clientes.'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreview(true);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isOpen) return;
    const interval = setInterval(() => {
      setActiveTipIndex((prev) => (prev + 1) % quickTips.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isOpen, quickTips.length]);

  const activeSuggestion = mypeSuggestions.find((item) => item.id === selectedId) || mypeSuggestions[0];

  return (
    <div className="floating-advisor-wrapper">
      <AnimatePresence mode="wait">
        {isOpen ? (
          <motion.div
            key="advisor-panel"
            className="glass-panel advisor-modal"
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 14, scale: 0.95 }}
            transition={{ duration: 0.22 }}
          >
            <div className="advisor-header">
              <div className="advisor-author">
                <img src="/profile.jpg" alt="Rodrigo Dulanto" className="advisor-avatar" />
                <div>
                  <span className="advisor-badge">Impulso Digital 2026</span>
                  <h4>Datos clave para tu MYPE</h4>
                </div>
              </div>
              <button
                type="button"
                className="advisor-close-btn"
                onClick={() => {
                  setIsOpen(false);
                  setShowPreview(false);
                }}
                aria-label="Cerrar ventana de sugerencias"
              >
                <X size={16} />
              </button>
            </div>

            <div className="advisor-options">
              {mypeSuggestions.map((item) => {
                const isSelected = item.id === selectedId;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setSelectedId(item.id)}
                    className={`advisor-option-btn ${isSelected ? 'advisor-option-active' : ''}`}
                  >
                    <span className="option-question">{item.question}</span>
                    <ChevronRight size={14} className="option-arrow" />
                  </button>
                );
              })}
            </div>

            <div className="advisor-recommendation">
              <div className="rec-label">
                <Sparkles size={13} />
                <span>Solución: <strong>{activeSuggestion.solution}</strong></span>
              </div>
              <p>{activeSuggestion.benefit}</p>
            </div>

            <a
              href={`https://wa.me/51984207998?text=${encodeURIComponent(activeSuggestion.waText)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="advisor-wa-cta"
            >
              <FaWhatsapp size={17} />
              <span>Solicitar Diagnóstico Gratis</span>
            </a>

            <div className="advisor-trust-footer">
              <ShieldCheck size={12} />
              <span>Asesoría directa y sin compromiso</span>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="advisor-trigger"
            className="advisor-dock"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {showPreview && (
              <div className="glass-panel advisor-preview-bubble">
                <button
                  type="button"
                  className="preview-dismiss"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowPreview(false);
                  }}
                  aria-label="Ocultar aviso"
                >
                  <X size={12} />
                </button>
                <div
                  className="preview-content"
                  onClick={() => setIsOpen(true)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && setIsOpen(true)}
                >
                  <span className="preview-tag">💡 Dato MYPE</span>
                  <p className="preview-text">{quickTips[activeTipIndex]}</p>
                  <span className="preview-action">
                    Descubrir cómo solucionarlo <ChevronRight size={12} />
                  </span>
                </div>
              </div>
            )}

            <button
              type="button"
              className="advisor-launcher-btn"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir sugerencias para MYPEs"
            >
              <span className="launcher-pulse" />
              <Sparkles size={16} className="launcher-icon" />
              <span className="launcher-label">¿Sabías que...?</span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FloatingAdvisor;
