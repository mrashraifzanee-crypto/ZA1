export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  shortDesc: string;
  image: string;
  pricingGuide: string;
  features: string[];
  accreditation: string;
  coverage: string;
}

export const SERVICES: ServiceItem[] = [
  {
    id: 'plumbing',
    number: '01',
    title: 'Plumbing & Gas Heating',
    shortDesc: 'Rapid leak tracing, combi boiler repairs, central heating balancing, and landlord Gas Safety Certificates (CP12).',
    image: '/src/assets/images/service_plumbing_uk_1792756894187.jpg',
    pricingGuide: 'From £85/hr or fixed quote',
    features: [
      'Emergency burst pipe repairs & leak detection',
      'Boiler installation, servicing & fault diagnosis',
      'Landlord Gas Safety Inspection & CP12 Certs',
      'Unvented hot water cylinders & pump replacements',
      'Radiator power flushing & thermostatic valves'
    ],
    accreditation: 'Gas Safe Registered Engineers (ID Checked)',
    coverage: 'Available 24/7 across all UK coverage zones'
  },
  {
    id: 'electrical',
    number: '02',
    title: 'Electrical & NICEIC Compliance',
    shortDesc: 'Certified domestic and commercial electrical installations, rewiring, consumer unit upgrades, and full EICR safety testing.',
    image: '/src/assets/images/service_electrical_uk_1792756894447.jpg',
    pricingGuide: 'From £90/hr · EICR from £145',
    features: [
      'Full Electrical Installation Condition Reports (EICR)',
      '18th Edition consumer unit / fuse board replacements',
      'Emergency tripping diagnostics & socket rewiring',
      'LED lighting conversions & emergency illumination',
      'Smart home thermostats & OZEV EV charger installs'
    ],
    accreditation: 'NICEIC Approved Contractor & Part P Certified',
    coverage: 'Standard dispatch within 90 minutes'
  },
  {
    id: 'handyman',
    number: '03',
    title: 'General Handyman & Property Care',
    shortDesc: 'Multi-skilled carpenters and maintenance specialists for repairs, lock replacements, silicone sealing, and landlord turnarounds.',
    image: '/src/assets/images/service_handyman_uk_1792758884735.jpg',
    pricingGuide: 'From £65/hr · Half & full day rates',
    features: [
      'British Standard lock replacements & security hardware',
      'Drywall patching, plaster skim repairs & touch-up painting',
      'Bathroom sanitary silicone resealing & tile regrouting',
      'Internal door hanging, draught-proofing & floor trimming',
      'Furniture assembly, TV wall mounting & heavy fixture rigging'
    ],
    accreditation: 'City & Guilds Qualified & DBS Checked',
    coverage: 'Flexible scheduling with evening slots'
  },
  {
    id: 'commercial',
    number: '04',
    title: 'Commercial Facilities Management',
    shortDesc: 'Planned Preventative Maintenance (PPM), reactive repairs, compliance logbooks, and multi-site support for UK businesses.',
    image: '/src/assets/images/service_commercial_uk_1792756894521.jpg',
    pricingGuide: 'Bespoke SLA or contract retainer',
    features: [
      'Planned preventative maintenance schedules (PPM)',
      'Statutory compliance (Fire door inspections, water hygiene)',
      'Commercial HVAC & air conditioning servicing',
      'Emergency out-of-hours building board-up & glass replacement',
      'Dedicated SLA with 2-hour emergency site arrival guarantee'
    ],
    accreditation: 'SafeContractor & ISO 9001 Aligned',
    coverage: 'Dedicated UK National Account Manager'
  }
];

export const TRUST_MARKERS = [
  {
    number: '01',
    title: 'Transparent, Upfront Pricing',
    description: 'No hidden call-out fees, no travel or parking surcharges added unexpectedly. You approve a clear, fixed or capped hourly estimate before any work begins on your property.'
  },
  {
    number: '02',
    title: 'Certified Local UK Experts',
    description: 'All gas work is conducted by Gas Safe registered engineers; all electrical work is signed off by NICEIC contractors. Every operative carries DBS clearance and photo identification.'
  },
  {
    number: '03',
    title: '100% Workmanship Guarantee',
    description: 'We stand behind every repair. All labour and parts supplied by MaintenanceUK are backed by our 12-month written warranty for complete peace of mind.'
  },
  {
    number: '04',
    title: 'Fast Emergency Response',
    description: 'Operating round-the-clock across major UK regions with an average rapid dispatch time of under 60 minutes for urgent leaks, heating failures, and electrical hazards.'
  }
];

export const TESTIMONIALS = [
  {
    quote: 'Woke up to water pouring through the ceiling from our en-suite at 6:30 AM on a Sunday. MaintenanceUK had a Gas Safe plumber at our home in Fulham in under 40 minutes. Leak isolated and ceiling saved.',
    author: 'Eleanor Vance',
    role: 'Homeowner',
    location: 'Fulham, London SW6',
    verifiedService: 'Emergency Plumbing & Pipe Repair'
  },
  {
    quote: 'As a letting agency managing 85 properties across Manchester, finding dependable trades used to be a headache. MaintenanceUK handles all our CP12s, EICRs, and tenant call-outs with clear photo reports.',
    author: 'Marcus Thorne',
    role: 'Senior Property Manager',
    location: 'Salford Quays, Manchester M50',
    verifiedService: 'Landlord Compliance & PPM'
  },
  {
    quote: 'We operate three retail stores in Birmingham city centre. Their commercial facilities team keeps our HVAC running and handles reactive maintenance within our tight trading windows with zero disruption.',
    author: 'Sandeep Patel',
    role: 'Operations Director',
    location: 'Colmore Row, Birmingham B3',
    verifiedService: 'Commercial Facilities Management'
  }
];

export const FAQS = [
  {
    question: 'Do you charge a call-out fee?',
    answer: 'During standard business hours (08:00–18:00, Monday to Friday), we operate on transparent hourly rates or fixed quotations with no hidden call-out fees. For out-of-hours emergencies (nights, weekends, bank holidays), an emergency arrival rate applies, which is always confirmed with you before our engineer is dispatched.'
  },
  {
    question: 'Are your engineers fully insured and certified?',
    answer: 'Yes. We hold £5,000,000 in Public & Employers\' Liability Insurance. All heating engineers are registered on the Gas Safe Register, all electrical technicians are NICEIC or NAPIT approved, and all staff carry DBS checks and formal identification badges.'
  },
  {
    question: 'Can you liaise directly with tenants or collect keys from letting agents?',
    answer: 'Yes, this is standard procedure for our landlord and property management clients. You can provide your tenant’s contact number or letting agent address; we coordinate arrival windows, collect keys securely, and send you digital photographic proof before and after completion.'
  },
  {
    question: 'How quickly can an engineer arrive in an emergency?',
    answer: 'In major metropolitan areas (Greater London, Manchester, Birmingham, Leeds, Bristol, Edinburgh, and Glasgow), our average emergency dispatch time is between 45 and 60 minutes for critical issues like burst pipes, gas smell investigations, or dangerous electrical faults.'
  },
  {
    question: 'What is included in your 100% Satisfaction Guarantee?',
    answer: 'If any repair carried out by our team develops a fault within 12 months due to workmanship or supplied parts, we return and rectify it free of charge. No debates, no administrative delays.'
  }
];

export const UK_REGIONS = [
  {
    region: 'Greater London & Home Counties',
    postcodes: ['EC', 'WC', 'SW', 'SE', 'NW', 'N', 'E', 'W', 'BR', 'CR', 'DA', 'EN', 'HA', 'IG', 'KT', 'RM', 'SM', 'TW', 'UB', 'WD'],
    depot: 'City of London & Heathrow Hubs',
    avgResponse: '45 mins'
  },
  {
    region: 'West Midlands & Birmingham',
    postcodes: ['B', 'CV', 'DY', 'WS', 'WV'],
    depot: 'Birmingham Central Depot',
    avgResponse: '50 mins'
  },
  {
    region: 'Greater Manchester & North West',
    postcodes: ['M', 'SK', 'WA', 'WN', 'BL', 'OL', 'L', 'PR'],
    depot: 'Manchester & Liverpool Hub',
    avgResponse: '50 mins'
  },
  {
    region: 'West Yorkshire & Leeds',
    postcodes: ['LS', 'BD', 'WF', 'HD', 'HX', 'S'],
    depot: 'Leeds Commercial Centre',
    avgResponse: '55 mins'
  },
  {
    region: 'South West & Bristol',
    postcodes: ['BS', 'BA', 'GL', 'SN'],
    depot: 'Bristol Avon Hub',
    avgResponse: '60 mins'
  },
  {
    region: 'Scotland Central Belt',
    postcodes: ['EH', 'G', 'FK', 'KY', 'PA'],
    depot: 'Edinburgh & Glasgow Rapid Teams',
    avgResponse: '55 mins'
  }
];
