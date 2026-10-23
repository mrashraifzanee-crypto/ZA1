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

        {/* Highlighted Visual & 3 Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Spotlight Photo Card */}
          <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 shadow-sm bg-slate-900 flex flex-col relative group">
            <div className="relative h-72 sm:h-80 w-full overflow-hidden">
              <img
                src="/src/assets/images/hero_property_maintenance_1792756893561.jpg"
                alt="MaintenanceUK qualified engineer attending property"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute top-4 left-4 bg-slate-900/90 text-amber-400 font-mono text-xs font-bold px-3 py-1 rounded backdrop-blur-xs">
                Vetted UK Trades
              </div>
            </div>

            <div className="p-6 bg-slate-900 text-white flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold font-display text-white mb-2">
                  Directly Employed & DBS-Vetted Operatives
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Every operative arrives in branded company attire, with digital photo identification and fully calibrated diagnostic tools. We never subcontract to unverified third parties.
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400">
                <span>£5M Public Liability</span>
                <span className="text-amber-400 font-semibold">12-Month Guarantee</span>
              </div>
            </div>
          </div>

          {/* 3 Pillars Grid */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-5">
            
            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950 mb-1 font-display">
                  Fast Response Across the UK
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                  With engineers based across Greater London, the Midlands, the North West, Yorkshire, and Scotland’s Central Belt, our average emergency dispatch time is under 60 minutes.
                </p>
                <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" />
                  <span>Strategic regional hubs near major motorways</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950 mb-1 font-display">
                  Fully Insured & Certified Experts
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                  Every heating engineer is Gas Safe registered; all electricians are NICEIC certified. We carry £5,000,000 public and employer liability insurance to protect your property asset.
                </p>
                <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Gas Safe & NICEIC independently validated</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/80 hover:border-slate-300 transition-all flex items-start gap-4">
              <div className="w-11 h-11 rounded-lg bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                <FileCheck2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950 mb-1 font-display">
                  Digital Clarity & Workmanship Guarantee
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-2">
                  No guesswork or surprise bills. Every job includes time-stamped photographic before/after documentation, digital compliance certificates, and our 12-month workmanship warranty.
                </p>
                <div className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                  <FileCheck2 className="w-3.5 h-3.5 text-amber-600" />
                  <span>Direct landlord portal & itemised invoicing</span>
                </div>
              </div>
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
