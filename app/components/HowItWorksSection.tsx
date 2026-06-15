"use client";

import { motion } from 'framer-motion';

const steps = [
  {
    number: '01',
    title: 'Book Your Free Trial',
    text: 'Tell us your goals. Try a class. Zero pressure.',
  },
  {
    number: '02',
    title: 'Find Your Program',
    text: 'We match you to the right training plan and coach.',
  },
  {
    number: '03',
    title: 'Join the Community',
    text: 'Show up, stay consistent, transform your life.',
  },
];

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -30 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

export default function HowItWorksSection() {
  return (
    <section id="process" className="border-t border-neon-blue/20 bg-[#0D0D14] px-6 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-sm uppercase tracking-[0.32em] text-neon-blue"
        >
          The Process
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 text-5xl font-display uppercase leading-tight text-white md:text-6xl"
        >
          Getting Started Is Simple
        </motion.h2>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
          className="mt-16 flex flex-col gap-10 md:flex-row md:items-center md:justify-between"
        >
          {steps.map((step, index) => (
            <motion.div key={step.number} variants={item} className="flex-1">
              <div className="flex items-end gap-6">
                <span className="text-8xl font-display uppercase tracking-[0.18em] text-white/20">
                  {step.number}
                </span>
                <div>
                  <h3 className="text-2xl font-display uppercase tracking-[0.24em] text-white">{step.title}</h3>
                  <p className="mt-3 max-w-md text-base leading-8 text-muted">{step.text}</p>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="mt-8 hidden items-center justify-center md:flex">
                  <span className="text-2xl font-display uppercase tracking-[0.3em] text-neon-blue">→</span>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
