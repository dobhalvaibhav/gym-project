"use client";

import { motion } from 'framer-motion';
import Button from './ui/Button';
import { scrollToSection } from '../lib/scrollToSection';

const stats = [
  { value: '500+', label: 'Members' },
  { value: '10+', label: 'Expert Coaches' },
  { value: '24/7', label: 'Access' },
];

const reveal = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
      delay,
    },
  }),
};

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-black py-28 md:py-32"
      style={{
        backgroundImage:
          'radial-gradient(circle at 18% 18%, rgba(0, 194, 255, 0.18), transparent 28%), radial-gradient(circle at 78% 12%, rgba(255, 255, 255, 0.08), transparent 18%), radial-gradient(circle at 60% 86%, rgba(0, 255, 136, 0.08), transparent 18%)',
      }}
    >
      <div className="absolute inset-0 opacity-5">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <span className="select-none whitespace-nowrap text-[6rem] font-display uppercase tracking-[0.35em] text-white opacity-5 md:text-[11rem]">
            AETHER
          </span>
        </div>
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center px-6 text-center md:items-start md:text-left md:px-8">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          custom={0.05}
          variants={reveal}
          className="text-7xl font-display uppercase leading-[0.95] tracking-[0.28em] text-white md:text-9xl"
        >
          FORGE YOUR
        </motion.h1>

        <motion.h2
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          custom={0.2}
          variants={reveal}
          className="mt-4 text-7xl font-display uppercase leading-[0.95] tracking-[0.28em] text-neon-blue md:text-9xl"
        >
          EDGE.
        </motion.h2>

        <motion.p
          initial="hidden"
          animate="visible"
          custom={0.35}
          variants={reveal}
          className="mt-6 max-w-3xl text-lg leading-9 text-muted"
        >
          Where discipline meets obsidian precision.
        </motion.p>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.5}
          variants={reveal}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button variant="primary" onClick={() => scrollToSection('pricing')}>
            START FREE TRIAL
          </Button>
          <Button variant="ghost" href="#programs">
            VIEW PROGRAMS
          </Button>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          custom={0.65}
          variants={reveal}
          className="mt-12 flex flex-col items-center justify-center gap-4 text-center text-sm text-muted sm:flex-row"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`flex flex-col items-center justify-center ${
                index > 0 ? 'sm:border-l sm:border-neon-blue/20 sm:pl-6' : ''
              }`}
            >
              <span className="text-3xl font-display uppercase tracking-[0.25em] text-neon-blue">
                {stat.value}
              </span>
              <span className="mt-2 text-sm text-muted">{stat.label}</span>
            </div>
          ))}
        </motion.div>

        <div className="mt-16 h-px w-full bg-neon-blue/20" />
      </div>
    </section>
  );
}
