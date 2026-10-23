import React from 'react';
import { TRUST_MARKERS } from '../data/content';
import { PoundSterling, Award, ShieldCheck, Zap, CheckCircle2 } from 'lucide-react';

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <PoundSterling className="w-6 h-6 text-amber-500" />;
      case 1:
        return <Award className="w-6 h-6 text-amber-500" />;
      case 2:
        return <ShieldCheck className="w-6 h-6 text-amber-500" />;
      default:
        return <Zap className="w-6 h-6 text-amber-500" />;
    }
  };

  return (
    <section id="why-choose-us" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            The MaintenanceUK Standard
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight text-balance">
            Why Property Owners Across Britain Rely on MaintenanceUK
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Finding dependable, trustworthy trade contractors in the UK shouldn’t feel like a gamble. We replace uncertainty with guaranteed standards, vetted trades, and transparent contracts.
          </p>
        </div>

        {/* 4 Core Trust Markers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {TRUST_MARKERS.map((marker, idx) => (
            <div
              key={idx}
              className="p-8 rounded-xl bg-slate-50 border border-slate-200 hover:border-slate-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center">
                    {getIcon(idx)}
                  </div>
                  <span className="font-mono text-xs font-bold text-slate-400">
                    {marker.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-950 font-display mb-3">
                  {marker.number}. {marker.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                  {marker.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/70 text-xs text-slate-500 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Verified in our Service Level Agreement</span>
              </div>
            </div>
          ))}
        </div>

        {/* UK Accreditation & Regulatory Strip */}
        <div className="p-8 rounded-xl bg-slate-900 text-slate-200 border border-slate-800">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-1">
                National Compliance Credentials
              </div>
              <h4 className="text-lg font-bold text-white font-display">
                Registered with the UK's Leading Regulatory Bodies
              </h4>
              <p className="text-xs text-slate-400 mt-1 max-w-xl">
                We independently verify registration numbers for every Gas Safe and NICEIC contractor on our roster.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-xs text-slate-300">
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/80 rounded border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-white">Gas Safe Register</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/80 rounded border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-white">NICEIC Approved Contractor</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/80 rounded border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-white">SafeContractor Certified</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 bg-slate-800/80 rounded border border-slate-700">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-white">TrustMark Endorsed</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
