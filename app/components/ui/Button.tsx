"use client";

import { motion } from 'framer-motion';
import React, { MouseEvent, useState } from 'react';
import styles from './button.module.css';

type Props = {
  variant?: 'primary' | 'ghost';
  onClick?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void;
  children: React.ReactNode;
  href?: string;
};

export default function Button({ variant = 'primary', onClick, children, href }: Props) {
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleClick = (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
    const target = e.currentTarget as HTMLElement;
    const rect = target.getBoundingClientRect();
    const x = (e as MouseEvent).clientX - rect.left;
    const y = (e as MouseEvent).clientY - rect.top;
    const id = Date.now();
    setRipples((list) => [...list, { id, x, y }]);

    setTimeout(() => setRipples((list) => list.filter((r) => r.id !== id)), 700);

    if (href && href.startsWith('#')) {
      e.preventDefault();
      const idTarget = href.replace('#', '');
      const el = document.getElementById(idTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.href = `/${href}`;
      }
      onClick?.(e);
      return;
    }

    onClick?.(e);
  };

  const common = {
    whileHover: { scale: 1.03 },
    whileTap: { scale: 0.96 },
    transition: { type: 'spring', stiffness: 400, damping: 28 },
  } as const;

  const baseClass =
    'relative overflow-hidden inline-flex items-center justify-center rounded-none px-6 py-3 text-sm uppercase tracking-[0.24em] transition-all duration-300';

  const primaryClass =
    baseClass +
    ' bg-neon-blue text-black border border-transparent hover:bg-[#33d8ff] focus:outline-none focus:ring-2 focus:ring-neon-blue/40';
  const ghostClass =
    baseClass +
    ' bg-transparent text-white border border-white/20 hover:bg-white/5 hover:text-neon-blue hover:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/30';

  const content = (
    <span className={`flex items-center gap-3 ${variant === 'ghost' ? 'btn-arrow' : ''}`}>
      {children}
      {variant === 'ghost' ? (
        <motion.span className="arrow text-xl" whileHover={{ x: 4 }} transition={{ duration: 0.18 }}>
          →
        </motion.span>
      ) : null}
    </span>
  );

  if (href) {
    return (
      <motion.a href={href} onClick={handleClick} {...common} className={variant === 'primary' ? primaryClass : ghostClass}>
        {content}
        {ripples.map((r) => (
          <span key={r.id} className={styles.ripple} style={{ left: r.x, top: r.y }} />
        ))}
      </motion.a>
    );
  }

  return (
    <motion.button onClick={handleClick} {...common} className={variant === 'primary' ? primaryClass : ghostClass}>
      {content}
      {ripples.map((r) => (
        <span key={r.id} className={styles.ripple} style={{ left: r.x, top: r.y }} />
      ))}
    </motion.button>
  );
}
