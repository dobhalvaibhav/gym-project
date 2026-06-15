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
    buttonHref:
      'https://wa.me/917302519340?text=Hi%20Aether%20Fitness!%20%F0%9F%92%AA%0A%0AI%27m%20interested%20in%20the%20*STARTER%20PLAN%20%E2%80%94%20%E2%82%B9999%2Fmo*.%0A%0APlan%20includes%3A%0A%E2%9C%85%20Gym%20access%20(excluding%20Cardio)%0A%E2%9C%85%203%20classes%20per%20week%0A%E2%9C%85%20App%20access%0A%E2%9C%85%20Community%20access%0A%0ACould%20you%20please%20help%20me%20get%20started%20and%20let%20me%20know%20the%20next%20available%20slot%3F%20Looking%20forward%20to%20joining%20Aether!',
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
    buttonHref:
      'https://wa.me/917302519340?text=Hi%20Aether%20Fitness!%20%F0%9F%94%A5%0A%0AI%27m%20interested%20in%20the%20*ELITE%20PLAN%20%E2%80%94%20%E2%82%B91999%2Fmo*.%0A%0APlan%20includes%3A%0A%E2%9C%85%20Unlimited%20access%20of%20full%20gym%0A%E2%9C%85%20Personal%20program%0A%E2%9C%85%20Nutrition%20guide%0A%E2%9C%85%20Priority%20booking%0A%E2%9C%85%20Coach%20personalised%20tips%0A%0AThis%20looks%20perfect%20for%20me.%20Could%20you%20confirm%20availability%20and%20help%20me%20sign%20up%3F%20Can%27t%20wait%20to%20get%20started!',
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
    buttonHref:
      'https://wa.me/917302519340?text=Hi%20Aether%20Fitness!%20%F0%9F%8F%86%0A%0AI%27m%20interested%20in%20the%20*FORGE%20PLAN%20%E2%80%94%20%E2%82%B92999%2Fmo*.%0A%0APlan%20includes%3A%0A%E2%9C%85%20Everything%20in%20Elite%0A%E2%9C%85%201%3A1%20coaching%20sessions%20per%20month%0A%E2%9C%85%20Body%20composition%20tracking%0A%E2%9C%85%20VIP%20lounge%20access%0A%0AI%27m%20ready%20to%20commit%20to%20the%20best.%20Please%20arrange%20my%20onboarding%20session!',
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
                href={plan.buttonHref}
                target="_blank"
                rel="noopener noreferrer"
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
