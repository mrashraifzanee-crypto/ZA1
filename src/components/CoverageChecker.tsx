import React, { useState } from 'react';
import { UK_REGIONS } from '../data/content';
import { Search, MapPin, CheckCircle2, Clock } from 'lucide-react';

export const CoverageChecker: React.FC = () => {
  const [searchPostcode, setSearchPostcode] = useState('');
  const [matchedRegion, setMatchedRegion] = useState<typeof UK_REGIONS[0] | null>(null);
  const [searched, setSearched] = useState(false);

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchPostcode.trim()) return;

    // Extract leading letters (outward area code)
    const cleaned = searchPostcode.trim().toUpperCase().replace(/[^A-Z]/g, '');
    const prefix = cleaned.slice(0, 2);
    const singlePrefix = cleaned.slice(0, 1);

    const found = UK_REGIONS.find((r) =>
      r.postcodes.includes(prefix) || r.postcodes.includes(singlePrefix)
    );

    setMatchedRegion(found || null);
    setSearched(true);
  };

  return (
    <section id="coverage" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-700 mb-2">
            Nationwide Reach
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-950 font-display tracking-tight text-balance">
            UK Regional Depots & Rapid Response Coverage
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Our teams are stationed regionally so you never wait for cross-country travel. Check if your postcode is covered by our rapid-response fleet.
          </p>
        </div>

        {/* Interactive Postcode Search Bar */}
        <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 max-w-2xl mb-12">
          <form onSubmit={handleCheck} className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <MapPin className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Enter UK postcode (e.g. SW1, M4, B1, EH1)..."
                value={searchPostcode}
                onChange={(e) => {
                  setSearchPostcode(e.target.value);
                  setSearched(false);
                }}
                className="w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-lg text-sm uppercase font-mono tracking-wider focus:ring-2 focus:ring-amber-500 outline-none"
              />
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer shrink-0"
            >
              <Search className="w-4 h-4" />
              <span>Check Postcode</span>
            </button>
          </form>

          {/* Search Result */}
          {searched && (
            <div className="mt-4 pt-4 border-t border-slate-200">
              {matchedRegion ? (
                <div className="flex items-start gap-3 text-sm text-slate-800 bg-emerald-50 border border-emerald-200/80 p-4 rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-bold text-emerald-950">
                      Full Coverage Confirmed in {matchedRegion.region}
                    </div>
                    <div className="text-xs text-emerald-800 mt-1">
                      Serviced by <strong>{matchedRegion.depot}</strong> · Average emergency response time: <strong>{matchedRegion.avgResponse}</strong>.
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-sm text-slate-700 bg-slate-100 p-4 rounded-xl border border-slate-200">
                  <span className="font-bold">Postcode covered via national overflow team.</span>
                  <div className="text-xs text-slate-500 mt-1">
                    We cover standard property maintenance throughout the UK mainland. For rural or specialized locations, contact our dispatch desk at <a href="tel:08001234567" className="underline font-bold text-slate-900">0800 123 4567</a>.
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Regional Hubs Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {UK_REGIONS.map((region, i) => (
            <div
              key={i}
              className="p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all shadow-xs"
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-amber-700 uppercase tracking-wide">
                  Hub {i + 1}
                </span>
                <span className="text-xs font-mono font-bold text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-amber-500" />
                  <span>{region.avgResponse}</span>
                </span>
              </div>

              <h3 className="text-base font-bold text-slate-950 mb-1">
                {region.region}
              </h3>

              <div className="text-xs text-slate-500 mb-4">
                Depot: {region.depot}
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs text-slate-400">
                Key Postcodes: {region.postcodes.slice(0, 8).join(', ')}...
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
