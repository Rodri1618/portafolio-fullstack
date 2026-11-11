import { useEffect, useState } from 'react';
import './GridReveal.css';

const GridReveal = () => {
  const [cells, setCells] = useState({ cols: 0, rows: 0, total: 0 });
  const [isDesktopInteractive, setIsDesktopInteractive] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    setIsDesktopInteractive(mediaQuery.matches);

    let timeoutId;
    const updateGrid = () => {
      if (!mediaQuery.matches) {
        setCells({ cols: 0, rows: 0, total: 0 });
        return;
      }
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        const width = window.innerWidth;
        const height = window.innerHeight;
        const size = 100;
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

  if (!isDesktopInteractive) {
    return <div className="ambient-mesh-bg" aria-hidden="true" />;
  }

  return (
    <div className="grid-reveal-container" aria-hidden="true">
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
