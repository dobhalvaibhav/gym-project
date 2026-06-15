"use client";

import { useEffect, useState, type MouseEvent } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { scrollToSection } from '../lib/scrollToSection';
import Button from './ui/Button';

const navItems = [
  { label: 'Programs', href: '/#programs' },
  { label: 'Process', href: '/#process' },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'FAQ', href: '/#faq' },
  {
    label: 'Contact',
    href: 'https://wa.me/917302519340?text=Hi%20Aether%20Fitness!%20I%20have%20a%20question%20and%20would%20love%20to%20get%20in%20touch.',
  },
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
    const targetId = href.replace('/#', '').replace('#', '');
    if (href.startsWith('/#')) {
      if (pathname === '/') {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      } else {
        window.location.href = href;
      }
      return;
    }

    if (href.startsWith('#')) {
      if (pathname === '/') {
        scrollToSection(targetId);
      } else {
        window.location.href = `/${href}`;
      }
      return;
    }

    if (href.startsWith('http')) {
      return;
    }

    window.location.href = href;
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.75, ease: 'easeOut' }}
        className={`fixed inset-x-0 top-0 h-[60px] z-[100] border-b transition-all duration-300 ${
          scrolled
            ? 'bg-[rgba(5,5,8,0.9)] border-neon-blue/20 backdrop-blur-md'
            : 'bg-transparent border-transparent'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-8">
          <Link
            href="/"
            style={{ textDecoration: 'none' }}
            className="font-bebas text-2xl tracking-widest text-[#00C2FF] hover:opacity-80 transition-opacity duration-300 cursor-pointer"
          >
            AETHER
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  if (item.href.startsWith('/#') || item.href.startsWith('#')) {
                    handleNavClick(e, item.href);
                  }
                }}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
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
              <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="20" height="2" rx="1" fill="currentColor" />
                <rect y="7" width="20" height="2" rx="1" fill="currentColor" />
                <rect y="14" width="20" height="2" rx="1" fill="currentColor" />
              </svg>
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="fixed inset-0 z-[99] bg-[#050508]"
          >
            <div className="flex h-full flex-col px-6 py-6 text-white">
              <div className="flex items-center justify-between">
                <Link
                  href="/"
                  style={{ textDecoration: 'none' }}
                  className="text-neon-blue text-2xl tracking-[0.32em] font-display uppercase"
                >
                  AETHER
                </Link>
                <button
                  type="button"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-none border border-white/20"
                  aria-label="Close menu"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 6L18 18M6 18L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>

                  <div className="mt-16 flex flex-1 flex-col items-center justify-center gap-8 text-center text-3xl font-display uppercase tracking-[0.32em]">
                {navItems.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={(e) => {
                      setMenuOpen(false);
                      if (item.href.startsWith('http')) {
                        return;
                      }

                      if (item.href.startsWith('/#') || item.href.startsWith('#')) {
                        handleNavClick(e, item.href);
                      }
                    }}
                    target={item.href.startsWith('http') ? '_blank' : undefined}
                    rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="text-white hover:text-neon-blue transition-all duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>

                      <div className="mt-auto border-t border-white/10 pt-6">
                <Button href="/#pricing" variant="ghost">
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
