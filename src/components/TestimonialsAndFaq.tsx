import React, { useState } from 'react';
import { TESTIMONIALS, FAQS } from '../data/content';
import { Star, ChevronDown, CheckCircle2 } from 'lucide-react';

export const TestimonialsAndFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section id="reviews" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            Real British Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight text-balance">
            Trusted by UK Homeowners, Landlords & Estates
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Read authentic experiences from residential property owners, letting agencies, and facility managers who rely on MaintenanceUK.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl border border-slate-200 shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* 5-star rating */}
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-500" />
                  ))}
                  <span className="text-xs font-mono font-bold text-slate-800 ml-1.5">5.0</span>
                </div>

                <p className="text-slate-700 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="font-bold text-slate-950 text-sm font-display">
                  {t.author}
                </div>
                <div className="text-xs text-slate-500">
                  {t.role} · <span className="font-medium text-slate-700">{t.location}</span>
                </div>
                <div className="mt-2 text-[11px] font-semibold text-emerald-700 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Verified Service: {t.verifiedService}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
              Common Questions
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display">
              Frequently Asked Questions
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Clear answers on rates, guarantees, emergency dispatch, and tenant coordination.
            </p>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, index) => {
              const isOpen = openFaqIndex === index;
              return (
                <div
                  key={index}
                  className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full py-4 px-6 text-left flex items-center justify-between gap-4 font-semibold text-slate-900 hover:text-amber-700 text-sm sm:text-base cursor-pointer"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-amber-600' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-5 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-8 text-center text-xs text-slate-500">
            Have a question not listed here? Speak with our team 24/7 on{' '}
            <a href="tel:08001234567" className="text-amber-700 font-bold underline">
              0800 123 4567
            </a>{' '}
            or email{' '}
            <a href="mailto:enquiries@maintenanceuk.com" className="text-amber-700 font-bold underline">
              enquiries@maintenanceuk.com
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
