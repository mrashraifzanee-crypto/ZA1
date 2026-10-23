import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { ServicesGrid } from './components/ServicesGrid';
import { WhyChooseUs } from './components/WhyChooseUs';
import { QuoteCalculator } from './components/QuoteCalculator';
import { CoverageChecker } from './components/CoverageChecker';
import { TestimonialsAndFaq } from './components/TestimonialsAndFaq';
import { Footer } from './components/Footer';
import { HtmlExportModal } from './components/HtmlExportModal';

export default function App() {
  const [htmlModalOpen, setHtmlModalOpen] = useState(false);
  const [selectedServiceForQuote, setSelectedServiceForQuote] = useState('Plumbing & Gas Heating');

  const scrollToQuote = () => {
    const el = document.getElementById('quote');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedServiceForQuote(serviceTitle);
    scrollToQuote();
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col text-slate-800 antialiased">
      {/* Navigation Header */}
      <Header
        onOpenQuote={scrollToQuote}
        onOpenHtmlModal={() => setHtmlModalOpen(true)}
      />

      {/* Main Page Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero onOpenQuote={scrollToQuote} />

        {/* 2. Full-Width Key Metrics Strip */}
        <StatsBar />

        {/* 3. About Us Section */}
        <AboutSection onOpenQuote={scrollToQuote} />

        {/* 4. Core Trade Services Grid */}
        <ServicesGrid onSelectServiceForQuote={handleSelectService} />

        {/* 5. Why Choose Us (Trust Markers) */}
        <WhyChooseUs onOpenQuote={scrollToQuote} />

        {/* 6. Interactive Free Quote Calculator & Lead Capture */}
        <QuoteCalculator initialService={selectedServiceForQuote} />

        {/* 7. UK Regional Coverage Checker */}
        <CoverageChecker />

        {/* 8. Testimonials & Frequently Asked Questions */}
        <TestimonialsAndFaq />
      </main>

      {/* 9. Professional UK Footer */}
      <Footer
        onOpenQuote={scrollToQuote}
        onOpenHtmlModal={() => setHtmlModalOpen(true)}
      />

      {/* Standalone HTML & Embedded CSS Export Modal */}
      <HtmlExportModal
        isOpen={htmlModalOpen}
        onClose={() => setHtmlModalOpen(false)}
      />
    </div>
  );
}
