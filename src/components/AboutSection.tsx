import React from 'react';
import { ShieldCheck, Zap, FileCheck2, MapPin, Building2, Home } from 'lucide-react';

interface AboutSectionProps {
  onOpenQuote: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenQuote }) => {
  return (
    <section id="about" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            About MaintenanceUK
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight text-balance">
            The Trusted Property Maintenance Standard for Homes, Landlords & Estates
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            MaintenanceUk.com was founded with a single mission: to eliminate the unreliability, vague estimates, and safety concerns often found in the UK trade industry. We operate a vetted, national network of fully insured trade professionals who deliver exceptional craftsmanship with absolute accountability.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          <div className="p-8 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all">
            <div className="w-12 h-12 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center mb-6">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 mb-3 font-display">
              Fast Response Across the UK
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              With engineers based across Greater London, the Midlands, the North West, Yorkshire, and Scotland’s Central Belt, our average emergency dispatch time is under 60 minutes.
            </p>
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-slate-400" />
              <span>Dedicated regional dispatch hubs</span>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all">
            <div className="w-12 h-12 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center mb-6">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 mb-3 font-display">
              Fully Insured & Vetted Experts
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Every engineer undergoes DBS checks, carries official photo ID, and is vetted against official trade registries (Gas Safe, NICEIC). We carry £5,000,000 public and employer liability insurance.
            </p>
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Full compliance & identity verification</span>
            </div>
          </div>

          <div className="p-8 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all">
            <div className="w-12 h-12 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center mb-6">
              <FileCheck2 className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-950 mb-3 font-display">
              Digital Clarity & Guarantee
            </h3>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              No guesswork or surprise bills. Every job includes time-stamped photographic before/after documentation, digital compliance certificates, and our 12-month workmanship guarantee.
            </p>
            <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
              <FileCheck2 className="w-4 h-4 text-amber-600" />
              <span>Direct landlord portal & itemised receipts</span>
            </div>
          </div>

        </div>

        {/* Audience Specific Callout Strip */}
        <div className="p-8 sm:p-10 rounded-2xl bg-slate-900 text-white border border-slate-800">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
                Tailored Service For Every UK Property Owner
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-display text-balance mb-4">
                Whether you own one flat or manage a 500-unit commercial portfolio
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm text-slate-300">
                <div className="flex items-start gap-2.5">
                  <Home className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Homeowners:</strong> Stress-free emergency repairs and planned upgrades.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Building2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Landlords & HMOs:</strong> Tenant coordination, CP12 & EICR certification.</span>
                </div>
                <div className="flex items-start gap-2.5">
                  <Building2 className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <span><strong>Commercial FM:</strong> Scheduled PPM, retail reactive maintenance & SLA contracts.</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={onOpenQuote}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg shadow-sm transition-colors text-center whitespace-nowrap cursor-pointer"
              >
                Request Property Review
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
