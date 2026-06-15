import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export const metadata = {
  title: 'Terms of Use - AETHER FITNESS',
};

export default function TermsOfUse() {
  return (
    <main className="min-h-screen bg-[#050508] text-white">
      <Navbar />

      <section className="mx-auto max-w-5xl px-6 py-24 md:px-8">
        <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">LEGAL</p>
        <h1 className="mt-4 text-5xl font-display uppercase leading-tight text-white md:text-6xl">
          TERMS OF USE
        </h1>
        <p className="mt-2 text-sm text-muted">Last updated: June 2026</p>

        <div className="mt-10 space-y-8">
          <section className="border-t border-white/10 pt-6">
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">ACCEPTANCE OF TERMS</p>
            <h2 className="mt-2 text-xl text-white">Acceptance of Terms</h2>
            <p className="mt-2 text-muted">
              By accessing and using Aether Fitness services, you accept and agree to be bound by these Terms of Use. If you
              do not agree, please do not use our services.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">MEMBERSHIP & PAYMENTS</p>
            <h2 className="mt-2 text-xl text-white">Membership & Payments</h2>
            <p className="mt-2 text-muted">
              Membership fees are billed monthly. Cancellations require 30 days written notice. No refunds are issued for
              partial months. We reserve the right to modify pricing with 30 days notice.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">CODE OF CONDUCT</p>
            <h2 className="mt-2 text-xl text-white">Code of Conduct</h2>
            <p className="mt-2 text-muted">
              Members are expected to treat all staff and fellow members with respect. Aggressive, threatening, or
              disruptive behaviour will result in immediate membership termination without refund.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">LIABILITY WAIVER</p>
            <h2 className="mt-2 text-xl text-white">Liability Waiver</h2>
            <p className="mt-2 text-muted">
              Aether Fitness is not liable for any injuries sustained during training. Members participate at their own risk
              and are encouraged to consult a physician before beginning any exercise programme.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">FACILITY RULES</p>
            <h2 className="mt-2 text-xl text-white">Facility Rules</h2>
            <p className="mt-2 text-muted">
              Members must sign in before each session, wear appropriate training attire, re-rack all weights after use,
              and follow all instructions from coaching staff.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">CHANGES TO TERMS</p>
            <h2 className="mt-2 text-xl text-white">Changes to Terms</h2>
            <p className="mt-2 text-muted">
              We reserve the right to modify these terms at any time. Continued use of our services constitutes
              acceptance of updated terms.
            </p>
          </section>

          <section className="border-t border-white/10 pt-6">
            <p className="text-sm uppercase tracking-[0.32em] text-neon-blue">CONTACT</p>
            <h2 className="mt-2 text-xl text-white">Contact</h2>
            <p className="mt-2 text-muted">
              For questions about these terms, contact us at zerohisoka0@gmail.com or WhatsApp +91 73025 19340.
            </p>
          </section>
        </div>
      </section>

      <Footer />
    </main>
  );
}
