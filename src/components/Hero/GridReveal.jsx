import { useEffect, useState } from 'react';
import './GridReveal.css';

const GridReveal = () => {
  const [cells, setCells] = useState({ cols: 0, rows: 0, total: 0 });

  useEffect(() => {
    let timeoutId;
    const updateGrid = () => {
      // Debounce resize para mayor rendimiento
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        // Aumentar el tamaño de las celdas reduce drásticamente el número de nodos DOM
        const size = 90;
        const cols = Math.ceil(width / size);
        const rows = Math.ceil(height / size);

        setCells({ cols, rows, total: cols * rows });

        document.documentElement.style.setProperty('--grid-cols', cols);
        document.documentElement.style.setProperty('--grid-rows', rows);
      }, 100);
    };

    updateGrid();
    window.addEventListener('resize', updateGrid);
    return () => {
      window.removeEventListener('resize', updateGrid);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="grid-reveal-container">
      <div className="hidden-bg-image"></div>
      <div className="grid-overlay">
        {Array.from({ length: cells.total }).map((_, i) => (
          <div key={i} className="grid-cell" />
        ))}
      </div>
    </div>
  );
};

export default GridReveal;
