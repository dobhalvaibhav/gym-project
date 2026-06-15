"use client";

import { useEffect, useState, type MouseEvent } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { scrollToSection } from '../lib/scrollToSection';
import Button from './ui/Button';

const navItems = [
  { label: 'Programs', href: '#programs' },
  { label: 'Process', href: '#process' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    if (pathname === '/') {
      scrollToSection(targetId);
    } else {
      window.location.href = `/${href}`;
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 z-40 border-b transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(5,5,8,0.9)] border-neon-blue/20 backdrop-blur-md'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <div className="text-neon-blue text-2xl tracking-[0.32em] font-display uppercase">
            AETHER
          </div>

          <nav className="hidden items-center gap-10 md:flex">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm uppercase tracking-[0.25em] text-white/70 transition-all duration-300 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <Button
              variant="ghost"
              onClick={() => scrollToSection('pricing')}
            >
              <span className="hidden md:inline">FREE TRIAL</span>
            </Button>

            <button
              type="button"
              onClick={() => setMenuOpen((current) => !current)}
              className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-white/20 text-white md:hidden"
              aria-label="Open menu"
            >
              <span className="flex h-5 w-5 flex-col justify-between">
                <span className="block h-[2px] w-full bg-white" />
                <span className="block h-[2px] w-full bg-white" />
                <span className="block h-[2px] w-full bg-white" />
              </span>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeOut' }}
            className="fixed inset-0 z-50 bg-[#050508]/98"
          >
            <div className="flex h-full flex-col px-8 py-8 text-white">
              <div className="flex items-center justify-between">
                <div className="text-neon-blue text-2xl tracking-[0.32em] font-display uppercase">
                  AETHER
                </div>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-white/20"
                  aria-label="Close menu"
                >
                  ×
                </button>
              </div>

                <div className="mt-16 flex flex-1 flex-col items-center justify-center gap-10 text-center text-5xl uppercase tracking-[0.32em]">
                  {navItems.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        setMenuOpen(false);
                        const id = item.href.replace('#', '');
                        scrollToSection(id);
                      }}
                      className="text-white transition-all duration-300 hover:text-neon-blue"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

              <div className="mt-auto border-t border-white/10 pt-8">
                <Button onClick={() => { setMenuOpen(false); scrollToSection('pricing'); }} variant="ghost">
                  FREE TRIAL
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
