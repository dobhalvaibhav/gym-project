import CTABanner from './components/CTABanner';
import CursorGlow from './components/CursorGlow';
import FAQSection from './components/FAQSection';
import Footer from './components/Footer';
import HeroSection from './components/HeroSection';
import HowItWorksSection from './components/HowItWorksSection';
import Navbar from './components/Navbar';
import PricingSection from './components/PricingSection';
import ProgramsSection from './components/ProgramsSection';
import TestimonialsSection from './components/TestimonialsSection';

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-black text-white">
      <CursorGlow />
      <Navbar />
      <HeroSection />
      <ProgramsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <PricingSection />
      <FAQSection />
      <CTABanner />
      <Footer />
    </main>
  );
}
