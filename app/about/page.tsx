"use client";

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const values = [
  {
    title: 'PRECISION',
    description: 'Every program is built on data, not guesswork.',
  },
  {
    title: 'COMMUNITY',
    description: 'We win together. Your success is our success.',
  },
  {
    title: 'LONGEVITY',
    description: 'We train for the next 40 years, not just next month.',
  },
];

const stats = [
  { year: '2019', label: 'Founded' },
  { year: '500+', label: 'Members' },
  { year: '10+', label: 'Coaches' },
  { year: '3', label: 'Locations' },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden bg-black px-6 py-28 md:py-40 md:px-8"
        style={{
          backgroundImage:
            'radial-gradient(circle at 18% 18%, rgba(0, 194, 255, 0.12), transparent 28%)',
        }}
      >
        <div className="mx-auto max-w-7xl pt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm uppercase tracking-[0.32em] text-neon-blue"
          >
            OUR STORY
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-5xl font-display uppercase leading-tight text-white md:text-6xl"
          >
            BUILT BY ATHLETES.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg leading-9 text-muted"
          >
            Aether was founded in 2019 by two competitive athletes who were tired of gyms that prioritised profit over performance. We built what we wished existed.
          </motion.p>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="bg-black px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl grid gap-12 md:grid-cols-2 md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-4xl font-display uppercase leading-tight text-white">
              <span className="text-neon-blue">"</span>We exist to build stronger humans. Not just physically — but mentally, habitually, and fundamentally.<span className="text-neon-blue">"</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="text-lg leading-8 text-muted"
          >
            <p>
              Every program, every coach, every decision at Aether is made with one question: does this make our members better? We don't do trends. We do timeless, evidence-based training with a community that holds you accountable.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-[#0D0D14] px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-sm uppercase tracking-[0.32em] text-neon-blue"
          >
            OUR VALUES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="mt-4 text-5xl font-display uppercase leading-tight text-white md:text-6xl"
          >
            What We Believe
          </motion.h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {values.map((value, index) => (
              <motion.article
                key={value.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.12 }}
                className="rounded-none border border-[#1E1E2A] bg-[#111118] p-8 transition-all duration-300 hover:border-neon-blue"
              >
                <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">{value.title}</p>
                <p className="mt-6 text-base leading-7 text-muted">{value.description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-black px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-4 text-center md:text-left">
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-5xl font-display uppercase tracking-[0.24em] text-neon-blue">
                  {stat.year}
                </p>
                <p className="mt-3 text-sm uppercase tracking-[0.28em] text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
