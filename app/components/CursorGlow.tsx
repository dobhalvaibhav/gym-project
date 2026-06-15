'use client';

import { useEffect, useState } from 'react';

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMove = (event: MouseEvent) => {
      setPosition({ x: event.clientX, y: event.clientY });
    };

    const mediaQuery = window.matchMedia('(min-width: 768px)');
    if (mediaQuery.matches) {
      window.addEventListener('mousemove', handleMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none hidden md:block"
      style={{
        position: 'fixed',
        left: position.x,
        top: position.y,
        width: '16px',
        height: '16px',
        borderRadius: '9999px',
        background: 'rgba(0, 194, 255, 0.3)',
        filter: 'blur(12px)',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    />
  );
}
