import React, { useState } from 'react';
import { Phone, Shield, Clock, Menu, X, FileCode2 } from 'lucide-react';

interface HeaderProps {
  onOpenQuote: () => void;
  onOpenHtmlModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenQuote, onOpenHtmlModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200">
      {/* Top 24/7 Emergency Line Announcement Bar */}
      <div className="bg-slate-900 text-slate-100 text-xs py-2 px-4 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 font-medium text-amber-400">
              <Phone className="w-3.5 h-3.5" />
              <span>24/7 UK Emergency Hotline:</span>
              <a href="tel:08001234567" className="underline font-bold text-white hover:text-amber-400 transition-colors">
                0800 123 4567
              </a>
            </span>
            <span className="hidden md:inline text-slate-400">·</span>
            <span className="hidden md:flex items-center gap-1 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              <span>Average dispatch under 60 minutes</span>
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-300">
            <span className="flex items-center gap-1">
              <Shield className="w-3.5 h-3.5 text-amber-400" />
              <span>Gas Safe & NICEIC Accredited</span>
            </span>
            <span className="text-slate-400">·</span>
            <button
              onClick={onOpenHtmlModal}
              className="inline-flex items-center gap-1 text-amber-300 hover:text-white transition-colors cursor-pointer font-medium"
              title="View standalone HTML & CSS single-file layout"
            >
              <FileCode2 className="w-3.5 h-3.5" />
              <span>View Standalone HTML Code</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Top Bar following Top Bar Contract */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-18">
          {/* Zone 1: Single text element wordmark */}
          <a href="#" className="flex items-center gap-2 group whitespace-nowrap shrink-0">
            <div className="w-8 h-8 rounded bg-slate-900 text-amber-400 flex items-center justify-center font-bold text-lg font-display shadow-sm">
              M
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-950 font-display">
              Maintenance<span className="text-amber-600">UK</span>
              <span className="text-xs text-slate-400 font-normal ml-0.5">.com</span>
            </span>
          </a>

          {/* Zone 2: 4–5 clean single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-slate-700">
            <a href="#services" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Services
            </a>
            <a href="#about" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              About Us
            </a>
            <a href="#why-choose-us" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Why Choose Us
            </a>
            <a href="#coverage" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              UK Coverage
            </a>
            <a href="#reviews" className="hover:text-slate-950 transition-colors whitespace-nowrap shrink-0">
              Reviews & FAQs
            </a>
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuote}
              className="px-5 py-2.5 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 active:bg-amber-700 rounded-lg shadow-sm transition-all duration-150 whitespace-nowrap shrink-0 cursor-pointer"
            >
              Get a Free Quote
            </button>

            {/* Mobile Hamburger toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md focus:outline-none"
              aria-label="Toggle navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3">
          <nav className="flex flex-col space-y-2.5 text-sm font-medium text-slate-700">
            <a
              href="#services"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-slate-50 rounded"
            >
              Services
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-slate-50 rounded"
            >
              About Us
            </a>
            <a
              href="#why-choose-us"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-slate-50 rounded"
            >
              Why Choose Us
            </a>
            <a
              href="#coverage"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-slate-50 rounded"
            >
              UK Coverage
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1.5 px-2 hover:bg-slate-50 rounded"
            >
              Reviews & FAQs
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHtmlModal();
              }}
              className="text-left py-1.5 px-2 text-amber-700 font-semibold flex items-center gap-1.5"
            >
              <FileCode2 className="w-4 h-4" />
              <span>View Standalone HTML Code</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};
