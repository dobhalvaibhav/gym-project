"use client";

import { motion } from 'framer-motion';
import Button from './ui/Button';

export default function CTABanner() {
  return (
    <section className="bg-neon-blue px-6 py-20 text-black md:px-8 overflow-x-hidden">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 text-center md:flex-row md:text-left">
        <div className="max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-4xl font-display uppercase leading-tight md:text-6xl"
          >
            Ready to Forge Your Edge?
          </motion.h2>
          <p className="mt-5 text-lg leading-8 text-black/75">
            Your first 2 classes are completely free. No excuses.
          </p>
        </div>

        <Button variant="primary" href="#pricing">
          Claim Free Trial
        </Button>
      </div>
    </section>
  );
}
