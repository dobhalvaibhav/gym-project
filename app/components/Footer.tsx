"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const footerLinks = [
  {
    heading: 'Programs',
    items: [
      { label: 'Strength Training', href: '#programs' },
      { label: 'HIIT & Conditioning', href: '#programs' },
      { label: 'Recovery & Mobility', href: '#programs' },
    ],
  },
  {
    heading: 'Company',
    items: [
      { label: 'About Us', href: '/about' },
      { label: 'Our Coaches', href: '/coaches' },
      {
        label: 'Schedule',
        href: 'https://wa.me/917302519340?text=Hi%20Aether%20Fitness!%20I%27d%20like%20to%20schedule%20a%20session.%20Could%20you%20please%20share%20available%20slots%3F',
      },
      {
        label: 'Contact',
        href: 'https://wa.me/917302519340?text=Hi%20Aether%20Fitness!%20I%20have%20a%20question%20and%20would%20love%20to%20get%20in%20touch.',
      },
    ],
  },
];

const socials = [
  { name: 'Instagram', href: '#', icon: 'M16 4.5h32a11 11 0 0 1 11 11v32a11 11 0 0 1-11 11H16a11 11 0 0 1-11-11V15.5a11 11 0 0 1 11-11Z M32 22a10 10 0 1 0 0 20 10 10 0 0 0 0-20Z M46 20a2 2 0 1 1 0 4 2 2 0 0 1 0-4Z' },
  { name: 'Twitter', href: '#', icon: 'M10 24.5c5-2.5 10-5 17.5-5-1.5 6.5-6.5 11-12 13.5-7.5 3.5-14.5 1-18-5.5 2 0 4 0 6-1.5-6-1-10-5.5-10-10.5 1.5 1 3.5 1.5 5.5 2-6-1-10-5.5-10-10.5 0-1.5 0-3 0-4.5 5 3.5 11.5 5.5 18 5.5-1-4-4-7-8-8.5 0 0 0 0 0 0 4-2 8.5-2 12.5 0 4 2.5 6.5 6.5 7 11.5 4.5-1 8-3 10.5-6.5-1.5 1.5-3.5 2.5-5.5 3 2-1.5 4-3.5 5-6-2 1-4.5 1.5-7 1.5 2-1.5 3.5-3.5 4.5-6.5-2 1.5-4.5 2.5-7 2.5-4.5 0-8.5-3.5-8.5-8.5 0-1 0-2 0-3 0-1.5.5-3 1.5-4.5 6 7.5 15 12.5 24.5 13-0.5-1-1-2.5-1-3.5 0-4 3.5-7.5 7.5-7.5 2 0 3.5 1 4.5 2.5 1.5-0.5 3-1.5 4-2.5-0.5 1.5-1.5 3-2.5 4.5 1 0 2-.5 3-1-1.5 0-3-1-4-1 1.5 1 3 1.5 4.5 2Z' },
  { name: 'YouTube', href: '#', icon: 'M10 18.5c0-4.5 3.5-8 8-8h28c4.5 0 8 3.5 8 8v11c0 4.5-3.5 8-8 8H18c-4.5 0-8-3.5-8-8z M46 24l-14 9v-18l14 9z' },
  { name: 'TikTok', href: '#', icon: 'M40 12a14 14 0 0 1-14-14H20v36a12 12 0 1 1-12 12h5a7 7 0 1 0 7-7V8h9a14 14 0 0 0 14 14h2V12Z' },
];

export default function Footer() {
  const pathname = usePathname();

  return (
    <footer id="contact" className="bg-black border-t border-[#1E1E2A] px-6 pb-10 pt-16 text-white md:px-8">
      <div className="mx-auto grid max-w-7xl gap-12 grid-cols-1 sm:grid-cols-2 md:grid-cols-4">
        <div className="space-y-6">
          <div className="text-3xl font-display uppercase tracking-[0.32em] text-neon-blue">AETHER</div>
          <p className="text-sm leading-7 text-muted">Where discipline is built.</p>
          <div className="flex items-center gap-4">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="text-muted transition-all duration-300 hover:text-neon-blue"
                aria-label={social.name}
              >
                <svg viewBox="0 0 64 64" className="h-6 w-6 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d={social.icon} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {footerLinks.map((column) => (
          <div key={column.heading}>
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">{column.heading}</p>
            <ul className="mt-6 space-y-4 text-sm text-muted">
              {column.items.map((item) => {
                const isExternal = item.href.startsWith('http');
                return (
                  <li key={item.label}>
                    {item.href.startsWith('/') ? (
                      item.href === pathname ? (
                        <span className="cursor-default text-white/50">{item.label}</span>
                      ) : (
                        <Link href={item.href} className="transition-all duration-300 hover:text-white">
                          {item.label}
                        </Link>
                      )
                    ) : (
                      <a
                        href={item.href}
                        target={isExternal ? '_blank' : undefined}
                        rel={isExternal ? 'noopener noreferrer' : undefined}
                        className="transition-all duration-300 hover:text-white"
                      >
                        {item.label}
                      </a>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}

        <div>
          <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">Location</p>
          <div className="mt-6 space-y-4 text-sm text-muted">
            <p>sector-12 noida, Uttar Pradesh</p>
            <p>+91 73025 19 340</p>
            <p>zerohisoka0@gmail.com</p>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t border-white/10 pt-6 text-sm text-muted md:flex md:items-center md:justify-between">
        <p>© 2026 AETHER FITNESS. All rights reserved.</p>
        <div className="mt-4 flex flex-wrap gap-4 md:mt-0">
          <Link href="/privacy-policy" className="transition-all duration-300 hover:text-white">
            Privacy Policy
          </Link>
          <span className="text-white/20">|</span>
          <Link href="/terms-of-use" className="transition-all duration-300 hover:text-white">
            Terms of Use
          </Link>
        </div>
      </div>
    </footer>
  );
}
