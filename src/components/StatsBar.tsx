import React from 'react';
import { Clock, Shield, Award, Users } from 'lucide-react';

export const StatsBar: React.FC = () => {
  return (
    <div className="bg-slate-900 text-white py-10 border-y border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 divide-y md:divide-y-0 md:divide-x divide-slate-800">
          
          <div className="flex items-center gap-4 pt-4 md:pt-0">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums tracking-tight">
                60 Mins
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">
                Target emergency dispatch in major UK areas
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums tracking-tight">
                £5M
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">
                Public & employers' liability cover
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums tracking-tight">
                100%
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">
                Gas Safe & NICEIC certified tradespeople
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4 pt-4 md:pt-0 md:pl-6">
            <div className="w-12 h-12 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
              <Users className="w-6 h-6" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-display tabular-nums tracking-tight">
                14,850+
              </div>
              <div className="text-xs text-slate-400 font-medium mt-0.5">
                UK properties serviced with 4.9★ rating
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
