import React from 'react';
import { Phone, Mail, MapPin, Shield, FileCode2 } from 'lucide-react';

interface FooterProps {
  onOpenQuote: () => void;
  onOpenHtmlModal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote, onOpenHtmlModal }) => {
  return (
    <footer className="bg-slate-950 text-slate-400 text-sm border-t border-slate-800">
      {/* Upper Pre-Footer Call to Action */}
      <div className="border-b border-slate-800 py-12 bg-slate-900/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-bold text-white font-display">
                Ready for reliable, fully insured property maintenance?
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Get an instant estimate or book a vetted engineer for your UK property in minutes.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenQuote}
                className="px-6 py-3 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 rounded-lg shadow-sm transition-colors cursor-pointer"
              >
                Get a Free Quote
              </button>
              <a
                href="tel:08001234567"
                className="px-6 py-3 text-sm font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700 flex items-center gap-2"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>0800 123 4567</span>
              </a>
              <button
                onClick={onOpenHtmlModal}
                className="px-4 py-3 text-xs font-semibold text-amber-300 hover:text-white bg-slate-800/80 hover:bg-slate-700 rounded-lg transition-colors border border-amber-500/30 flex items-center gap-1.5 cursor-pointer"
              >
                <FileCode2 className="w-4 h-4" />
                <span>Export Standalone HTML</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand & Summary */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded bg-amber-600 text-white flex items-center justify-center font-bold text-lg font-display">
                M
              </div>
              <span className="text-xl font-bold tracking-tight text-white font-display">
                Maintenance<span className="text-amber-500">UK</span>
                <span className="text-xs text-slate-500 font-normal ml-0.5">.com</span>
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              The United Kingdom's premier property maintenance network for residential homeowners, buy-to-let landlords, and commercial facilities managers. 100% Gas Safe & NICEIC certified.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Head Office: 30 St Mary Axe, City of London, EC3A 8EP</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Emergency: 0800 123 4567 · Office: 020 7946 0991</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                <span>enquiries@maintenanceuk.com</span>
              </div>
            </div>
          </div>

          {/* Trade Services */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Trade Services
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#services" className="hover:text-white transition-colors">Plumbing & Boilers</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Gas Safety CP12</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Electrical & EICR</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">General Handyman</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Carpentry & Locks</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial PPM</a></li>
            </ul>
          </div>

          {/* Sectors Served */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Sectors
            </div>
            <ul className="space-y-2 text-xs">
              <li><a href="#about" className="hover:text-white transition-colors">Private Homeowners</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Landlords & Letting Agents</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">HMO Property Managers</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Retail & Office Commercial</a></li>
              <li><a href="#coverage" className="hover:text-white transition-colors">UK Coverage Hubs</a></li>
              <li><a href="#quote" className="hover:text-white transition-colors">Free Instant Quote</a></li>
            </ul>
          </div>

          {/* Accreditations & Standards */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Standards & Trust
            </div>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-center gap-1.5 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>Gas Safe Registered</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>NICEIC Approved</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>SafeContractor Member</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>£5M Liability Cover</span>
              </div>
              <div className="flex items-center gap-1.5 text-slate-300">
                <Shield className="w-3.5 h-3.5 text-amber-400" />
                <span>12-Month Guarantee</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal & Regulatory Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-900 text-xs text-slate-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            © {new Date().getFullYear()} MaintenanceUK Operations Ltd. All rights reserved. MaintenanceUk.com is a trading style of MaintenanceUK Operations Ltd. Registered in England & Wales No. 09842102. VAT No. GB 245 8891 04.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-slate-400">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400">Terms of Service</a>
            <a href="#" className="hover:text-slate-400">Cookie Settings</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
