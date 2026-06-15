import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy - AETHER FITNESS',
};

export default function PrivacyPolicy() {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-24 md:px-8">
        <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">LEGAL</p>
        <h1 className="mt-4 text-5xl font-display uppercase leading-tight text-white md:text-6xl">
          PRIVACY POLICY
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: June 2026</p>

        <div className="mt-10 space-y-8">
          <section className="border-t border-white/10 pt-6">
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">INFORMATION WE COLLECT</p>
            <h2 className="mt-2 text-xl text-white">Information We Collect</h2>
            <p className="mt-2 text-muted">
              We collect information you provide directly to us when you register for a membership, schedule a class, or
              contact us. This includes your name, email address, phone number, and payment information.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">HOW WE USE YOUR INFORMATION</p>
            <h2 className="mt-2 text-xl text-white">How We Use Your Information</h2>
            <p className="mt-2 text-muted">
              We use the information we collect to provide and improve our services, process transactions, send you updates
              about your membership, and communicate with you about classes, schedules, and promotions.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">INFORMATION SHARING</p>
            <h2 className="mt-2 text-xl text-white">Information Sharing</h2>
            <p className="mt-2 text-muted">
              We do not sell, trade, or rent your personal information to third parties. We may share your information with
              trusted service providers who assist us in operating our website and conducting our business.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">DATA SECURITY</p>
            <h2 className="mt-2 text-xl text-white">Data Security</h2>
            <p className="mt-2 text-muted">
              We implement appropriate security measures to protect your personal information. However, no method of
              transmission over the internet is 100% secure.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">COOKIES</p>
            <h2 className="mt-2 text-xl text-white">Cookies</h2>
            <p className="mt-2 text-muted">
              We use cookies to enhance your experience on our website. You can choose to disable cookies through your
              browser settings, though this may affect certain features.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">CONTACT US</p>
            <h2 className="mt-2 text-xl text-white">Contact Us</h2>
            <p className="mt-2 text-muted">
              If you have questions about this Privacy Policy, contact us at zerohisoka0@gmail.com or via WhatsApp at +91
              73025 19340.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
