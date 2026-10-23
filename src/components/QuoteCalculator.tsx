import React, { useState } from 'react';
import { Send, CheckCircle2, ShieldCheck, Phone, Mail, Clock, AlertCircle } from 'lucide-react';

interface QuoteCalculatorProps {
  initialService?: string;
}

export const QuoteCalculator: React.FC<QuoteCalculatorProps> = ({ initialService }) => {
  const [clientType, setClientType] = useState<'homeowner' | 'landlord' | 'commercial'>('homeowner');
  const [selectedService, setSelectedService] = useState<string>(initialService || 'Plumbing & Gas Heating');
  const [urgency, setUrgency] = useState<'emergency' | 'next_day' | 'flexible'>('next_day');
  const [postcode, setPostcode] = useState('');
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [referenceCode, setReferenceCode] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Sync if initialService changes from outside
  React.useEffect(() => {
    if (initialService) {
      setSelectedService(initialService);
    }
  }, [initialService]);

  const validate = () => {
    const errs: { [key: string]: string } = {};
    if (!fullName.trim()) errs.fullName = 'Please enter your full name.';
    if (!phone.trim() || phone.trim().length < 10) errs.phone = 'Please provide a valid UK telephone number.';
    if (!email.trim() || !email.includes('@')) errs.email = 'Please provide a valid email address.';
    if (!postcode.trim() || postcode.trim().length < 2) errs.postcode = 'Please enter a valid UK postcode (e.g. SW1, M1, B1).';
    if (!jobDescription.trim()) errs.jobDescription = 'Please briefly describe the maintenance issue.';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const randomRef = 'MUK-' + Math.floor(100000 + Math.random() * 900000);
    setReferenceCode(randomRef);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setPhone('');
    setEmail('');
    setJobDescription('');
    setPostcode('');
    setErrors({});
  };

  const getEstimatedRate = () => {
    if (selectedService.includes('Plumbing')) return '£85/hr or fixed quote';
    if (selectedService.includes('Electrical')) return '£90/hr · EICR from £145';
    if (selectedService.includes('Handyman')) return '£65/hr · Day rate available';
    return 'Bespoke corporate SLA quote';
  };

  return (
    <section id="quote" className="py-20 lg:py-28 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Context & Direct Contact Details */}
          <div className="lg:col-span-5">
            <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
              Free Instant Assessment
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-display tracking-tight text-white mb-6 text-balance">
              Get Your Free, No-Obligation Maintenance Quote
            </h2>
            <p className="text-slate-300 text-base leading-relaxed mb-8">
              Tell us what needs repairing or maintaining. Our UK dispatch coordinators evaluate your request, confirm tradesperson availability, and provide upfront pricing before dispatch.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 mb-8">
              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Freephone 24/7 Hotline</div>
                  <a href="tel:08001234567" className="text-lg font-bold text-white hover:text-amber-400 transition-colors">
                    0800 123 4567
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">Free from UK landlines and mobiles</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Enquiries & Tenders</div>
                  <a href="mailto:enquiries@maintenanceuk.com" className="text-base font-bold text-white hover:text-amber-400 transition-colors">
                    enquiries@maintenanceuk.com
                  </a>
                  <div className="text-xs text-slate-400 mt-0.5">Average reply time under 15 minutes</div>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 flex items-start gap-3.5">
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Operating Hours</div>
                  <div className="text-sm font-bold text-white">24 Hours / 7 Days a Week / 365 Days</div>
                  <div className="text-xs text-slate-400 mt-0.5">Standard rates 08:00–18:00 · 24/7 Emergency cover</div>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>We never share your contact details. Fully GDPR compliant.</span>
            </div>
          </div>

          {/* Right Column: Interactive Quote Form / Success State */}
          <div className="lg:col-span-7">
            <div className="bg-white text-slate-900 rounded-2xl p-6 sm:p-10 shadow-2xl border border-slate-200">
              
              {submitted ? (
                <div className="text-center py-8">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <div className="text-xs font-mono font-bold text-amber-700 uppercase tracking-widest mb-1">
                    Quote Request Received
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-950 font-display mb-3">
                    Thank You, {fullName}!
                  </h3>
                  <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                    Your request has been logged in our dispatch centre. A senior trade coordinator is reviewing your job specifics now.
                  </p>

                  <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 max-w-md mx-auto text-left mb-8 space-y-2 text-xs">
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Job Reference:</span>
                      <span className="font-mono font-bold text-slate-900">{referenceCode}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Requested Trade:</span>
                      <span className="font-medium text-slate-900">{selectedService}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Property Postcode:</span>
                      <span className="font-mono font-bold text-slate-900">{postcode.toUpperCase()}</span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-slate-200">
                      <span className="text-slate-500">Priority Level:</span>
                      <span className="font-medium capitalize text-amber-700">{urgency.replace('_', ' ')}</span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="text-slate-500">Guide Rate:</span>
                      <span className="font-bold text-emerald-700">{getEstimatedRate()}</span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                    <a
                      href="tel:08001234567"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors"
                    >
                      <Phone className="w-4 h-4 text-amber-400" />
                      <span>Speak with Dispatcher Now</span>
                    </a>
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3 text-xs font-semibold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
                    >
                      Submit Another Request
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-6">
                    <h3 className="text-xl sm:text-2xl font-bold font-display text-slate-950 mb-1">
                      Request Your Quotation
                    </h3>
                    <p className="text-xs text-slate-500">
                      Fill out the form below for an immediate callback and price estimate.
                    </p>
                  </div>

                  {/* Step 1: Client Type Filter tabs */}
                  <div className="mb-6">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Property Owner Type
                    </label>
                    <div className="grid grid-cols-3 gap-2 p-1 bg-slate-100 rounded-lg">
                      <button
                        type="button"
                        onClick={() => setClientType('homeowner')}
                        className={`py-2 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                          clientType === 'homeowner'
                            ? 'bg-white text-slate-900 shadow-sm font-semibold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Homeowner
                      </button>
                      <button
                        type="button"
                        onClick={() => setClientType('landlord')}
                        className={`py-2 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                          clientType === 'landlord'
                            ? 'bg-white text-slate-900 shadow-sm font-semibold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Landlord / Agent
                      </button>
                      <button
                        type="button"
                        onClick={() => setClientType('commercial')}
                        className={`py-2 text-xs font-medium rounded-md transition-colors cursor-pointer whitespace-nowrap ${
                          clientType === 'commercial'
                            ? 'bg-white text-slate-900 shadow-sm font-semibold'
                            : 'text-slate-600 hover:text-slate-900'
                        }`}
                      >
                        Commercial FM
                      </button>
                    </div>
                  </div>

                  {/* Step 2: Service & Urgency Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Required Service
                      </label>
                      <select
                        value={selectedService}
                        onChange={(e) => setSelectedService(e.target.value)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      >
                        <option value="Plumbing & Gas Heating">Plumbing & Gas Heating</option>
                        <option value="Electrical & NICEIC Compliance">Electrical & NICEIC Compliance</option>
                        <option value="General Handyman & Property Care">General Handyman Services</option>
                        <option value="Commercial Facilities Management">Commercial Facilities</option>
                        <option value="Landlord CP12 & EICR Certificates">Landlord Safety Certificates</option>
                        <option value="Carpentry, Locks & Security">Locks, Doors & Carpentry</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Required Timing
                      </label>
                      <select
                        value={urgency}
                        onChange={(e) => setUrgency(e.target.value as any)}
                        className="w-full px-3.5 py-2.5 text-sm bg-white border border-slate-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-amber-500 outline-none transition-all"
                      >
                        <option value="emergency">Emergency (Within 2 Hours)</option>
                        <option value="next_day">Next Day / Within 24-48 Hours</option>
                        <option value="flexible">Planned / Flexible Date</option>
                      </select>
                    </div>
                  </div>

                  {/* Step 3: Postcode & Issue description */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                    <div className="sm:col-span-1">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        UK Postcode
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. SW1A 1AA"
                        value={postcode}
                        onChange={(e) => setPostcode(e.target.value)}
                        className={`w-full px-3.5 py-2.5 text-sm uppercase font-mono bg-white border ${
                          errors.postcode ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } rounded-lg focus:ring-2 focus:ring-amber-500 outline-none`}
                      />
                      {errors.postcode && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.postcode}</span>
                        </p>
                      )}
                    </div>

                    <div className="sm:col-span-2">
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Brief Issue Description
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Leaking shower valve, faulty fuse board, office lock repair"
                        value={jobDescription}
                        onChange={(e) => setJobDescription(e.target.value)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                          errors.jobDescription ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } rounded-lg focus:ring-2 focus:ring-amber-500 outline-none`}
                      />
                      {errors.jobDescription && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.jobDescription}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Step 4: Contact Information */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Sarah Jenkins"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                          errors.fullName ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } rounded-lg focus:ring-2 focus:ring-amber-500 outline-none`}
                      />
                      {errors.fullName && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.fullName}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        UK Contact Telephone
                      </label>
                      <input
                        type="tel"
                        placeholder="e.g. 07700 900123"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                          errors.phone ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } rounded-lg focus:ring-2 focus:ring-amber-500 outline-none`}
                      />
                      {errors.phone && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.phone}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. sarah@example.co.uk"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className={`w-full px-3.5 py-2.5 text-sm bg-white border ${
                          errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300'
                        } rounded-lg focus:ring-2 focus:ring-amber-500 outline-none`}
                      />
                      {errors.email && (
                        <p className="text-xs text-red-600 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Pricing Guidance Hint */}
                  <div className="bg-slate-50 p-3.5 rounded-lg border border-slate-200 mb-6 flex items-center justify-between text-xs">
                    <span className="text-slate-600">
                      Standard trade rate for {selectedService.split('&')[0]}:
                    </span>
                    <span className="font-bold text-slate-900 font-mono">
                      {getEstimatedRate()}
                    </span>
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 text-sm font-semibold text-white bg-amber-600 hover:bg-amber-500 active:bg-amber-700 rounded-lg shadow-md transition-all duration-150 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit & Get Instant Free Quote</span>
                  </button>

                  <div className="mt-3 text-center text-xs text-slate-500">
                    No credit card required. No upfront obligation. Written confirmation sent via email.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
