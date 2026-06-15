"use client";

import { motion } from 'framer-motion';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const coaches = [
  {
    initials: 'JR',
    name: 'JAMES RILEY',
    specialty: 'Strength & Olympic Lifting',
    cert: 'CSCS | 8 Years Experience',
    bio: 'Former national-level powerlifter. James specialises in building raw strength through intelligent programming and technical precision.',
  },
  {
    initials: 'SK',
    name: 'SARA KHAN',
    specialty: 'HIIT & Conditioning',
    cert: 'NASM-CPT | 6 Years Experience',
    bio: "Ex-competitive sprinter. Sara's sessions are intense, efficient, and always purposeful. She'll push you further than you think possible.",
  },
  {
    initials: 'MC',
    name: 'MIKE CHEN',
    specialty: 'Recovery & Mobility',
    cert: 'FMS | 5 Years Experience',
    bio: 'Certified movement specialist. Mike helps athletes recover smarter, move better, and stay injury-free through targeted mobility work.',
  },
  {
    initials: 'AL',
    name: 'AMY LAWSON',
    specialty: 'Nutrition & Wellness',
    cert: 'PN Level 2 | 7 Years Experience',
    bio: 'Amy bridges the gap between training and lifestyle, helping members build sustainable nutrition habits that support their performance goals.',
  },
  {
    initials: 'DT',
    name: 'DAN TORRES',
    specialty: 'CrossFit & Functional Fitness',
    cert: 'CF-L2 | 9 Years Experience',
    bio: "CrossFit veteran and functional fitness advocate. Dan's classes are community-driven, technique-focused, and always delivered with energy.",
  },
  {
    initials: 'RB',
    name: 'RACHEL BURNS',
    specialty: 'Yoga & Mindfulness',
    cert: 'RYT-500 | 10 Years Experience',
    bio: 'Rachel brings balance to the Aether ecosystem. Her yoga and mindfulness sessions are the perfect complement to high-intensity training.',
  },
];

export default function CoachesPage() {
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
            'radial-gradient(circle at 78% 12%, rgba(0, 194, 255, 0.12), transparent 28%)',
        }}
      >
        <div className="mx-auto max-w-7xl pt-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-sm uppercase tracking-[0.32em] text-neon-blue"
          >
            THE TEAM
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-5xl font-display uppercase leading-tight text-white md:text-6xl"
          >
            MEET YOUR COACHES
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-8 max-w-2xl text-lg leading-9 text-muted"
          >
            Every Aether coach is certified, experienced, and genuinely invested in your progress.
          </motion.p>
        </div>
      </motion.section>

      {/* Coaches Grid */}
      <section className="px-6 py-24 md:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {coaches.map((coach, index) => (
              <motion.article
                key={coach.name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: index * 0.08 }}
                className="rounded-none border border-[#1E1E2A] bg-[#111118] overflow-hidden transition-all duration-300 hover:border-neon-blue"
              >
                {/* Initials Box */}
                <div className="h-48 w-full flex items-center justify-center bg-[#0D0D14] border-b border-[#1E1E2A]">
                  <div className="text-5xl font-display text-neon-blue">{coach.initials}</div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-display uppercase text-white">{coach.name}</h3>
                  <p className="mt-2 text-sm uppercase tracking-[0.24em] text-neon-blue">{coach.specialty}</p>
                  <p className="mt-1 text-xs text-muted">{coach.cert}</p>
                  <p className="mt-4 text-sm leading-6 text-muted">{coach.bio}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
