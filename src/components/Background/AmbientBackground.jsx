import { useEffect, useRef } from 'react';
import './AmbientBackground.css';

const AmbientBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize, { passive: true });

    const palette = [
      '96, 165, 250',  // Royal Blue
      '168, 85, 247',  // Electric Violet
      '251, 191, 36',  // Warm Amber Gold (3rd color)
    ];

    const count = width < 768 ? 24 : 48;
    const particles = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.6 + 0.6,
      vx: (Math.random() - 0.5) * 0.2,
      vy: -Math.random() * 0.24 - 0.06,
      alpha: Math.random() * 0.4 + 0.14,
      rgb: palette[i % palette.length],
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);
      const isLight = document.documentElement.getAttribute('data-theme') === 'light';

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;

        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.rgb}, ${isLight ? p.alpha * 0.55 : p.alpha})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="ambient-bg-root" aria-hidden="true">
      <div className="ambient-silk-glow glow-top-left" />
      <div className="ambient-silk-glow glow-center-warm" />
      <div className="ambient-silk-glow glow-bottom-right" />
      <canvas ref={canvasRef} className="ambient-particles-canvas" />
    </div>
  );
};

export default AmbientBackground;
