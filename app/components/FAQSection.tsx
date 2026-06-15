'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

const faqItems = [
  {
    question: 'Do I need experience to join?',
    answer:
      'None at all. Every program is designed to scale to your current fitness level. Our coaches will guide you from day one.',
  },
  {
    question: 'How many times a week should I train?',
    answer:
      'Beginners should start with 3 sessions per week, building up to 5 as your body adapts. Rest and recovery are part of the plan.',
  },
  {
    question: 'Can I try before committing?',
    answer:
      'Yes. We offer a completely free 2-class trial so you can experience the coaching and community before joining.',
  },
  {
    question: 'What makes Aether different from a regular gym?',
    answer:
      'We combine expert programming, community accountability, and intelligent coaching — not just access to equipment.',
  },
  {
    question: 'Are there contracts?',
    answer:
      'No lock-in contracts. Cancel or pause anytime with 30 days notice.',
  },
  {
    question: 'What should I bring to my first session?',
    answer:
      'Just yourself, clean training shoes, and a water bottle. We provide everything else.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-[#0D0D14] px-6 py-24 md:px-8 overflow-x-hidden">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-sm uppercase tracking-[0.32em] text-neon-blue"
        >
          FAQ
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 text-4xl font-display uppercase leading-tight text-white md:text-6xl"
        >
          Questions? We Have Answers.
        </motion.h2>

        <div className="mt-12 divide-y divide-white/10 border-t border-white/10">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div key={item.question} className="py-5">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 text-left text-base font-medium leading-tight text-white"
                >
                  <span>{item.question}</span>
                  <span className="text-3xl text-neon-blue">{isOpen ? '−' : '+'}</span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      className="overflow-hidden"
                    >
                      <div className="pt-5 text-base leading-8 text-muted">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
