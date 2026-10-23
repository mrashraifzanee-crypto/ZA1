import React, { useState } from 'react';
import { SERVICES, ServiceItem } from '../data/content';
import { Check, ArrowRight, ShieldCheck, Clock, X } from 'lucide-react';

interface ServicesGridProps {
  onSelectServiceForQuote: (serviceTitle: string) => void;
}

export const ServicesGrid: React.FC<ServicesGridProps> = ({ onSelectServiceForQuote }) => {
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  return (
    <section id="services" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
              Our Trade Capabilities
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight text-balance">
              Professional All-in-One Services Across the UK
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Every job is carried out by vetted, certified UK specialists. Transparent hourly rates or fixed quotations provided before work commences.
            </p>
          </div>
          
          <div className="text-sm font-medium text-slate-600">
            <span>Need an urgent repair today? </span>
            <a href="tel:08001234567" className="font-bold text-amber-600 hover:text-amber-500 underline whitespace-nowrap">
              Call 0800 123 4567
            </a>
          </div>
        </div>

        {/* 4 Core Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-xl border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden flex flex-col group"
            >
              {/* Card Image Header */}
              <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-slate-900">
                <img
                  src={service.image}
                  alt={`${service.title} in the UK`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  onError={(e) => {
                    e.currentTarget.src = `/images/${service.id}.jpg`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent pointer-events-none" />

                {/* Service Number & Accreditation overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-xs text-white">
                  <span className="font-mono font-bold px-2.5 py-1 bg-slate-900/90 rounded text-amber-400">
                    {service.number}
                  </span>
                  <span className="font-medium bg-slate-900/80 px-2.5 py-1 rounded backdrop-blur-xs text-slate-200 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-amber-400" />
                    <span>{service.accreditation.split('&')[0]}</span>
                  </span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="text-xl sm:text-2xl font-bold font-display text-white mb-1">
                    {service.number}. {service.title}
                  </h3>
                  <div className="text-xs text-amber-300 font-medium">
                    {service.pricingGuide}
                  </div>
                </div>
              </div>

              {/* Card Content Body */}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {service.shortDesc}
                  </p>

                  <div className="space-y-2.5 mb-8">
                    <div className="text-xs font-semibold text-slate-900 uppercase tracking-wider mb-2">
                      Key Capabilities Included:
                    </div>
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="pt-6 border-t border-slate-100 flex items-center justify-between gap-4">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors underline cursor-pointer"
                  >
                    View Scope & Rates
                  </button>

                  <button
                    onClick={() => onSelectServiceForQuote(service.title)}
                    className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
                  >
                    <span>Book {service.title.split('&')[0]}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Scope & Rates Details */}
        {activeModalService && (
          <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
              <button
                onClick={() => setActiveModalService(null)}
                className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-md"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="text-xs font-mono font-bold text-amber-700 uppercase mb-1">
                Service Breakdown · {activeModalService.number}
              </div>
              <h3 className="text-2xl font-bold text-slate-950 font-display mb-2">
                {activeModalService.title}
              </h3>
              <div className="text-sm font-semibold text-amber-600 mb-4">
                {activeModalService.pricingGuide}
              </div>

              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                {activeModalService.shortDesc}
              </p>

              <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 mb-6 space-y-2">
                <div className="text-xs font-bold text-slate-900 uppercase">
                  Service Standards & Inclusions:
                </div>
                <div className="text-xs text-slate-600 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{activeModalService.accreditation}</span>
                </div>
                <div className="text-xs text-slate-600 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-amber-600" />
                  <span>{activeModalService.coverage}</span>
                </div>
              </div>

              <div className="space-y-2 mb-8">
                <div className="text-xs font-bold text-slate-900 uppercase">Full Scope of Works:</div>
                {activeModalService.features.map((f, i) => (
                  <div key={i} className="text-sm text-slate-700 flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
                <button
                  onClick={() => setActiveModalService(null)}
                  className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900"
                >
                  Close
                </button>
                <button
                  onClick={() => {
                    const title = activeModalService.title;
                    setActiveModalService(null);
                    onSelectServiceForQuote(title);
                  }}
                  className="px-5 py-2 text-xs font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg shadow-sm"
                >
                  Request Quote for this Service
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
