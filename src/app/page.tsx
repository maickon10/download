import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import WhatWeDoSection from '@/components/sections/what-we-do-section';
import WhoItsForSection from '@/components/sections/who-its-for-section';
import WhyUsSection from '@/components/sections/why-us-section';
import HowItWorksSection from '@/components/sections/how-it-works-section';
import TestimonialsSection from '@/components/sections/testimonials-section';
import CtaSection from '@/components/sections/cta-section';

export default function HomePage() {
  return (
    <div className="text-slate-100">
      {/* Background Orbs estilo Framer */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-40 -left-32 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="absolute top-40 -right-20 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 h-72 w-72 rounded-full bg-violet-500/25 blur-3xl" />
      </div>

      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 lg:px-0 lg:pt-16">
        <HeroSection />
        <AboutSection />
        <WhatWeDoSection />
        <WhoItsForSection />
        <WhyUsSection />
        <HowItWorksSection />
        <TestimonialsSection />
        <CtaSection />
      </main>

      <Footer />
    </div>
  );
}
