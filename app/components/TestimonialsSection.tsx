"use client";

import { motion } from 'framer-motion';

const testimonials = [
  {
    quote:
      "I've tried every gym in the city. Aether is different. The coaching is elite, the community keeps you accountable.",
    name: 'Marcus T.',
    role: 'Member since 2023',
  },
  {
    quote:
      "Lost 18kg in 6 months. The programming is intelligent, not just hard. I actually understand why I'm doing each lift.",
    name: 'Priya S.',
    role: 'Strength Program',
  },
  {
    quote:
      "As a complete beginner I was terrified. The coaches made me feel welcome on day one. Best decision I ever made.",
    name: 'James O.',
    role: 'HIIT Program',
  },
];

const starCount = Array.from({ length: 5 }, (_, index) => index + 1);

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="mx-auto max-w-7xl px-6 py-24 md:px-8">
      <div className="max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-sm uppercase tracking-[0.32em] text-neon-blue"
        >
          Community
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 text-5xl font-display uppercase leading-tight text-white md:text-6xl"
        >
          Trusted by Hundreds
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 max-w-2xl text-lg leading-8 text-muted"
        >
          Real people. Real results. Real community.
        </motion.p>
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <motion.article
            key={testimonial.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            className="rounded-none border border-[#1E1E2A] bg-[#111118] p-8"
          >
            <p className="text-base italic leading-8 text-white">“{testimonial.quote}”</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="space-x-1 text-[0.65rem] uppercase tracking-[0.35em] text-[#FFD700]">
                {starCount.map((star) => (
                  <span key={star}>★</span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-xl font-display uppercase tracking-[0.3em] text-neon-blue">{testimonial.name}</p>
              <p className="mt-2 text-sm uppercase tracking-[0.28em] text-muted">{testimonial.role}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
