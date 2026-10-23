import React from 'react';
import { HERO_IMAGE } from '../data/base64Images';
import { ShieldCheck, PhoneCall, ArrowRight, CheckCircle2 } from 'lucide-react';

interface HeroProps {
  onOpenQuote: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  return (
    <section className="relative bg-gradient-to-b from-slate-100/80 to-white pt-8 pb-16 lg:pt-14 lg:pb-24 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* Left Column: Headline & Value Proposition */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Trust Kicker: clean unboxed text with typographic separator (No pill badges) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-700 mb-4">
              <span>British Standard Accredited</span>
              <span aria-hidden="true">·</span>
              <span className="text-amber-700 font-bold">24/7 UK Nationwide Coverage</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950 font-display leading-[1.15] text-balance mb-6">
              Complete, Trusted Property Maintenance for UK Homes & Businesses
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl mb-8">
              All-in-one property care delivered by fully insured, vetted British tradespeople. From 60-minute emergency leak and electrical response to scheduled commercial facilities management across England, Scotland, and Wales.
            </p>

            {/* Dual CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-base font-semibold text-white bg-amber-600 hover:bg-amber-500 active:bg-amber-700 rounded-lg shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer whitespace-nowrap"
              >
                <span>Get a Free Quote</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:08001234567"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-slate-900 bg-white hover:bg-slate-50 active:bg-slate-100 border border-slate-300 rounded-lg shadow-sm transition-all duration-150 whitespace-nowrap"
              >
                <PhoneCall className="w-4 h-4 text-amber-600" />
                <span>0800 123 4567</span>
              </a>
            </div>

            {/* Trust bullet markers */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-200 text-sm text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Transparent fixed & capped pricing</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>£5,000,000 public liability cover</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Gas Safe & NICEIC certified trades</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>12-month workmanship guarantee</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Asset */}
          <div className="lg:col-span-5 relative flex items-center">
            <div className="w-full h-full min-h-[380px] sm:min-h-[460px] rounded-xl overflow-hidden border border-slate-200/80 shadow-xl bg-slate-900 relative group">
              <img
                src={HERO_IMAGE}
                alt="Professional British maintenance engineer attending residential property"
                className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Verified Badge Card */}
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-lg border border-slate-200/80 shadow-md">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded bg-slate-900 text-amber-400 flex items-center justify-center shrink-0">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Official UK Standards</div>
                      <div className="text-sm font-bold text-slate-900">Vetted & Insured Engineers</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-slate-500">Avg. Arrival</div>
                    <div className="text-sm font-bold text-amber-600 tabular-nums">48 Mins</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
