"use client";

import { motion } from 'framer-motion';
import Button from './ui/Button';

const pricingPlans = [
  {
    title: 'Starter',
    price: '₹999',
    frequency: '/mo',
    features: ['gym access', 'App access', 'Community access'],
    featured: false,
    buttonFilled: false,
  },
  {
    title: 'Elite',
    price: '₹1999',
    frequency: '/mo',
    features: [
      'Unlimited access of full gym',
      'Personal program',
      'Nutrition guide',
      'Priority clieng',
      'Coach personalised tips',
    ],
    featured: true,
    buttonFilled: true,
  },
  {
    title: 'Forge',
    price: '₹2999',
    frequency: '/mo',
    features: [
      'Everything in Elite',
      '1:1 coaching sessions per month',
      'Body composition tracking',
      'VIP lounge access',
    ],
    featured: false,
    buttonFilled: false,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="bg-black px-6 py-24 md:px-8">
      <div className="mx-auto max-w-7xl">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="text-sm uppercase tracking-[0.32em] text-neon-blue"
        >
          Investment
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          className="mt-4 text-5xl font-display uppercase leading-tight text-white md:text-6xl"
        >
          Choose Your Path
        </motion.h2>
      </div>

      <div className="relative mt-12">
        {/* floating bubbles behind cards */}
        <div aria-hidden className="pointer-events-none absolute inset-x-0 -top-20 -z-10 flex items-center justify-center">
          <div className="relative w-full max-w-7xl">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, i % 2 === 0 ? -18 : 18, 0] }}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 6 + i * 1.6 }}
                className="absolute rounded-full bg-[rgba(0,194,255,0.04)] blur-[40px]"
                style={{
                  width: 80 + i * 20,
                  height: 80 + i * 20,
                  left: `${10 + i * 14}%`,
                  top: `${10 + (i % 3) * 18}%`,
                }}
              />
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
        {pricingPlans.map((plan, index) => (
          <motion.article
            key={plan.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: index * 0.12 }}
            className={`rounded-none border p-8 ${
              plan.featured
                ? 'border-neon-blue bg-[#111118]'
                : 'border-[#1E1E2A] bg-[#111118]'
            } relative overflow-hidden`}
          >
            {plan.featured && (
              <div className="mb-6 inline-flex border border-neon-blue px-3 py-1 text-xs uppercase tracking-[0.3em] text-neon-blue">
                MOST POPULAR
              </div>
            )}
            <p className="text-sm uppercase tracking-[0.32em] text-muted">{plan.title}</p>
            <div className="mt-6 flex items-end gap-2">
              <motion.span whileHover={{ color: '#00C2FF' }} className="text-6xl font-display uppercase tracking-[0.24em] text-white">
                {plan.price}
              </motion.span>
              <span className="pb-3 text-sm text-muted">{plan.frequency}</span>
            </div>
            <ul className="mt-8 space-y-4 text-sm text-muted">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <span className="mt-1 text-neon-green">✓</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <div className="mt-10">
              <Button
                variant={plan.buttonFilled ? 'primary' : 'ghost'}
                href="#contact"
              >
                GET STARTED
              </Button>
            </div>
          </motion.article>
        ))}
        </div>
      </div>
    </section>
  );
}
