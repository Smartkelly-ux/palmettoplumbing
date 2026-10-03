import React, { useState } from 'react';
import { MapPin, Navigation, Compass } from 'lucide-react';
import floridaImage from '../assets/images/florida_color_1791020774113.jpg';
import { EditorialImage } from './EditorialImage';

interface CountyData {
  id: string;
  name: string;
  code: string;
  hq?: boolean;
  cities: string[];
  latLong: string;
  corridors: string;
  description: string;
}

export const SouthFloridaSection: React.FC = () => {
  const [activeCounty, setActiveCounty] = useState<string>('dade');

  const counties: CountyData[] = [
    {
      id: 'dade',
      name: 'Miami-Dade',
      code: 'ZONE 01',
      hq: true,
      cities: ['Hialeah (HQ)', 'Miami', 'Doral', 'Coral Gables', 'Wynwood', 'Miami Beach'],
      latLong: '25.8601° N, 80.3064° W',
      corridors: 'Palmetto Expy (SR 826) · I-95 · Dolphin Expy (SR 836)',
      description: 'Primary fabrication, dispatch facility & main commercial operations.',
    },
    {
      id: 'broward',
      name: 'Broward',
      code: 'ZONE 02',
      cities: ['Fort Lauderdale', 'Hollywood', 'Pompano Beach', 'Pembroke Pines', 'Miramar'],
      latLong: '26.1224° N, 80.1373° W',
      corridors: 'I-95 · Florida Turnpike · I-595 · Sawgrass Expy',
      description: 'Commercial construction rough-ins, tenant fit-outs & gas distribution.',
    },
    {
      id: 'palm-beach',
      name: 'Palm Beach',
      code: 'ZONE 03',
      cities: ['Boca Raton', 'Delray Beach', 'West Palm Beach', 'Boynton Beach', 'Jupiter'],
      latLong: '26.7153° N, 80.0534° W',
      corridors: 'I-95 · Florida Turnpike · Southern Blvd (SR 80)',
      description: 'Regional multi-story plumbing systems & retail mechanical buildouts.',
    },
  ];

  const current = counties.find((c) => c.id === activeCounty) || counties[0];

  return (
    <section className="relative w-full min-h-[85vh] lg:min-h-[92vh] flex flex-col justify-between border-b border-[#111512] overflow-hidden bg-[#111512] text-[#F8F7F2]">
      {/* Background Full-Screen Photographic Band in Full Natural Color */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <EditorialImage
          src={floridaImage}
          alt="South Florida commercial architecture"
          containerClassName="w-full h-full"
          className="opacity-35"
        />
        {/* Architectural Blueprint Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-architectural-grid opacity-20 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#111512]/90 via-[#111512]/75 to-[#111512]/95" />
      </div>

      {/* Top Dossier Coordinates Bar */}
      <div className="relative z-10 w-full px-6 lg:px-12 pt-6 sm:pt-8 pb-3 sm:pb-4 flex flex-wrap items-center justify-between gap-3 font-mono-data text-[10px] sm:text-xs tracking-wider text-[#C9CDC8] border-b border-white/15">
        <div className="flex items-center gap-2 sm:gap-3">
          <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#C98A3D]" />
          <span className="text-white font-semibold">SOUTH FLORIDA SERVICE CORRIDOR</span>
          <span className="hidden sm:inline text-white/30">|</span>
          <span className="hidden sm:inline">DADE · BROWARD · PALM BEACH</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[#C98A3D]">BASE: HIALEAH HQ</span>
          <span>·</span>
          <span>DISPATCH: 75 MILES</span>
        </div>
      </div>

      {/* Center Service Area & Stylized Map Section */}
      <div className="relative z-10 my-auto px-6 lg:px-12 py-8 sm:py-10 lg:py-14 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* LEFT 6 COLUMNS: Interactive County Cards & Specifications */}
          <div className="lg:col-span-6 space-y-4">
            <div className="space-y-1">
              <div className="font-mono-data text-xs text-[#C98A3D] tracking-widest uppercase">
                COVERAGE DOMAIN
              </div>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
                Tri-County <br />
                Plumbing Matrix
              </h2>
            </div>

            {/* County Selector Tabs */}
            <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-2">
              {counties.map((county) => {
                const isSelected = activeCounty === county.id;
                return (
                  <button
                    key={county.id}
                    type="button"
                    onClick={() => setActiveCounty(county.id)}
                    className={`p-2.5 sm:p-4 border text-left transition-all duration-200 cursor-pointer ${
                      isSelected
                        ? 'bg-[#232824] border-[#C98A3D] text-white shadow-lg'
                        : 'bg-[#111512]/80 border-white/20 text-[#C9CDC8] hover:border-white/50 hover:text-white'
                    }`}
                  >
                    <div className="flex items-center justify-between font-mono-data text-[9px] sm:text-[10px] mb-1">
                      <span className={isSelected ? 'text-[#C98A3D] font-bold' : 'text-[#68716B]'}>
                        {county.code}
                      </span>
                      {county.hq && (
                        <span className="bg-[#C98A3D] text-[#111512] px-1 py-0.2 font-bold tracking-tighter text-[8px] sm:text-[9px]">
                          HQ
                        </span>
                      )}
                    </div>
                    <div className="text-xs sm:text-base lg:text-xl font-bold uppercase tracking-tight truncate">
                      {county.name}
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected County Specifications Card */}
            <div className="p-4 sm:p-6 bg-[#232824]/90 border border-white/20 backdrop-blur-xs space-y-3 sm:space-y-4 shadow-xl">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 sm:pb-3 border-b border-white/10 font-mono-data text-[11px] sm:text-xs">
                <span className="text-white font-bold uppercase tracking-wider">
                  {current.name} COUNTY OPERATIONS
                </span>
                <span className="text-[#C98A3D] font-mono-data">
                  {current.latLong}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#C9CDC8] leading-relaxed">
                {current.description}
              </p>

              {/* Major Hub Cities Tag Cloud */}
              <div>
                <div className="font-mono-data text-[10px] sm:text-[11px] text-[#68716B] uppercase mb-1.5 sm:mb-2">
                  KEY COMMERCIAL HUBS:
                </div>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {current.cities.map((city, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 sm:px-2.5 sm:py-1 bg-[#111512] border border-white/15 text-[11px] sm:text-xs font-mono-data text-white"
                    >
                      {city}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highway Corridors */}
              <div className="pt-2 border-t border-white/10 font-mono-data text-[10px] sm:text-[11px] text-[#68716B] flex items-center gap-2 flex-wrap">
                <Navigation className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#C98A3D] shrink-0" />
                <span className="break-words">ARTERIES: {current.corridors}</span>
              </div>
            </div>
          </div>

          {/* RIGHT 6 COLUMNS: Stylized Architectural Vector Map with CSS Grid Overlays */}
          <div className="lg:col-span-6">
            <div className="relative border border-white/20 bg-[#111512]/90 shadow-2xl p-4 sm:p-6 overflow-hidden">
              
              {/* Technical Drawing Header */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10 font-mono-data text-[10px] text-[#68716B]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C98A3D] animate-ping" />
                  <span className="text-white font-bold">REGIONAL CARTOGRAPHY · SE FLORIDA</span>
                </div>
                <div>SCALE 1:250,000</div>
              </div>

              {/* Map Canvas with SVG Cartography and CSS Coordinate Overlays */}
              <div className="relative aspect-[4/3] w-full bg-[#181D19] border border-white/15 overflow-hidden">
                
                {/* CSS Coordinate Grid Lines */}
                <div className="absolute inset-0 bg-architectural-grid opacity-30 pointer-events-none" />

                {/* Technical Axis Lines */}
                <div className="absolute top-0 bottom-0 left-1/3 border-l border-white/10 border-dashed pointer-events-none" />
                <div className="absolute top-0 bottom-0 left-2/3 border-l border-white/10 border-dashed pointer-events-none" />
                <div className="absolute left-0 right-0 top-1/3 border-t border-white/10 border-dashed pointer-events-none" />
                <div className="absolute left-0 right-0 top-2/3 border-t border-white/10 border-dashed pointer-events-none" />

                {/* SVG Vector Map of South Florida Coastline, Highway Corridors & Counties */}
                <svg
                  viewBox="0 0 400 300"
                  className="w-full h-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    {/* Gradient for Atlantic Ocean */}
                    <linearGradient id="oceanGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#111512" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="#1F2922" stopOpacity="0.8" />
                    </linearGradient>
                    <radialGradient id="hqPulse" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#C98A3D" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#C98A3D" stopOpacity="0" />
                    </radialGradient>
                  </defs>

                  {/* Ocean Coastline on the Right (Atlantic) */}
                  <path
                    d="M 280,0 L 400,0 L 400,300 L 220,300 C 235,270 245,230 250,190 C 255,150 265,100 270,60 Z"
                    fill="url(#oceanGrad)"
                  />
                  <text x="315" y="150" fill="#68716B" fontSize="9" fontFamily="monospace" letterSpacing="3">
                    ATLANTIC
                  </text>

                  {/* PALM BEACH COUNTY ZONE (Top third) */}
                  <g
                    onClick={() => setActiveCounty('palm-beach')}
                    className="cursor-pointer transition-all duration-300"
                  >
                    <polygon
                      points="120,10 275,10 262,95 120,95"
                      fill={activeCounty === 'palm-beach' ? '#C98A3D' : '#232824'}
                      fillOpacity={activeCounty === 'palm-beach' ? '0.28' : '0.1'}
                      stroke={activeCounty === 'palm-beach' ? '#C98A3D' : '#68716B'}
                      strokeWidth={activeCounty === 'palm-beach' ? '2' : '1'}
                      strokeDasharray={activeCounty === 'palm-beach' ? 'none' : '4,3'}
                    />
                    <text
                      x="135"
                      y="45"
                      fill={activeCounty === 'palm-beach' ? '#FFFFFF' : '#94A399'}
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      PALM BEACH
                    </text>
                    {/* West Palm Beach node */}
                    <circle cx="260" cy="45" r="3.5" fill={activeCounty === 'palm-beach' ? '#C98A3D' : '#FFFFFF'} />
                    <text x="210" y="40" fill="#C9CDC8" fontSize="8" fontFamily="monospace">W. Palm</text>
                    {/* Boca Raton node */}
                    <circle cx="254" cy="85" r="3" fill="#FFFFFF" />
                    <text x="205" y="85" fill="#C9CDC8" fontSize="8" fontFamily="monospace">Boca</text>
                  </g>

                  {/* BROWARD COUNTY ZONE (Middle third) */}
                  <g
                    onClick={() => setActiveCounty('broward')}
                    className="cursor-pointer transition-all duration-300"
                  >
                    <polygon
                      points="120,97 262,97 250,185 120,185"
                      fill={activeCounty === 'broward' ? '#C98A3D' : '#232824'}
                      fillOpacity={activeCounty === 'broward' ? '0.28' : '0.1'}
                      stroke={activeCounty === 'broward' ? '#C98A3D' : '#68716B'}
                      strokeWidth={activeCounty === 'broward' ? '2' : '1'}
                      strokeDasharray={activeCounty === 'broward' ? 'none' : '4,3'}
                    />
                    <text
                      x="135"
                      y="135"
                      fill={activeCounty === 'broward' ? '#FFFFFF' : '#94A399'}
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      BROWARD
                    </text>
                    {/* Fort Lauderdale node */}
                    <circle cx="248" cy="140" r="3.5" fill={activeCounty === 'broward' ? '#C98A3D' : '#FFFFFF'} />
                    <text x="175" y="142" fill="#C9CDC8" fontSize="8" fontFamily="monospace">Ft. Lauderdale</text>
                    {/* Hollywood node */}
                    <circle cx="244" cy="170" r="3" fill="#FFFFFF" />
                    <text x="195" y="172" fill="#C9CDC8" fontSize="8" fontFamily="monospace">Hollywood</text>
                  </g>

                  {/* MIAMI-DADE COUNTY ZONE (Bottom third) */}
                  <g
                    onClick={() => setActiveCounty('dade')}
                    className="cursor-pointer transition-all duration-300"
                  >
                    <polygon
                      points="120,187 250,187 220,290 120,290"
                      fill={activeCounty === 'dade' ? '#C98A3D' : '#232824'}
                      fillOpacity={activeCounty === 'dade' ? '0.28' : '0.1'}
                      stroke={activeCounty === 'dade' ? '#C98A3D' : '#68716B'}
                      strokeWidth={activeCounty === 'dade' ? '2' : '1'}
                      strokeDasharray={activeCounty === 'dade' ? 'none' : '4,3'}
                    />
                    <text
                      x="135"
                      y="235"
                      fill={activeCounty === 'dade' ? '#FFFFFF' : '#94A399'}
                      fontSize="10"
                      fontFamily="monospace"
                      fontWeight="bold"
                    >
                      MIAMI-DADE
                    </text>
                    {/* Miami node */}
                    <circle cx="236" cy="245" r="3.5" fill="#FFFFFF" />
                    <text x="245" y="248" fill="#C9CDC8" fontSize="8" fontFamily="monospace">Miami</text>
                  </g>

                  {/* I-95 Corridor Highway (North-South orange/amber artery) */}
                  <path
                    d="M 262,0 L 260,45 L 254,85 L 248,140 L 244,170 L 236,215 L 234,250 L 225,300"
                    fill="none"
                    stroke="#C98A3D"
                    strokeWidth="1.8"
                    strokeOpacity="0.85"
                  />
                  <text x="268" y="20" fill="#C98A3D" fontSize="7" fontFamily="monospace">I-95</text>

                  {/* Florida Turnpike Highway (Inland secondary artery) */}
                  <path
                    d="M 230,0 L 228,60 L 220,120 L 210,180 L 205,230 L 195,300"
                    fill="none"
                    stroke="#68716B"
                    strokeWidth="1.2"
                    strokeDasharray="3,2"
                  />
                  <text x="200" y="25" fill="#68716B" fontSize="7" fontFamily="monospace">TPKE</text>

                  {/* Palmetto Expressway SR 826 Artery loop */}
                  <path
                    d="M 225,185 C 200,200 190,210 205,235 C 220,250 236,245 236,245"
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="1.4"
                  />
                  <text x="160" y="210" fill="#FFFFFF" fontSize="7" fontFamily="monospace">SR 826</text>

                  {/* HIALEAH HQ RADAR PULSE & PINPOINT */}
                  <circle cx="218" cy="218" r="18" fill="url(#hqPulse)" />
                  <circle cx="218" cy="218" r="8" fill="none" stroke="#C98A3D" strokeWidth="1" strokeDasharray="2,2" />
                  <circle cx="218" cy="218" r="4" fill="#C98A3D" />
                  <circle cx="218" cy="218" r="1.5" fill="#111512" />

                  {/* Hialeah Flag Callout */}
                  <line x1="218" y1="218" x2="160" y2="195" stroke="#C98A3D" strokeWidth="1" />
                  <rect x="95" y="184" width="65" height="15" fill="#111512" stroke="#C98A3D" strokeWidth="1" />
                  <text x="100" y="194" fill="#C98A3D" fontSize="8" fontFamily="monospace" fontWeight="bold">
                    ★ HIALEAH HQ
                  </text>
                </svg>

                {/* Bottom Left Map Coordinates Overlay */}
                <div className="absolute bottom-2 left-2 z-10 bg-[#111512]/90 border border-white/20 px-2 py-1 font-mono-data text-[9px] text-[#C9CDC8]">
                  <span>LAT 25.8601° N</span> · <span>LON 80.3064° W</span>
                </div>

                {/* Bottom Right Map Legend */}
                <div className="absolute bottom-2 right-2 z-10 bg-[#111512]/90 border border-white/20 px-2.5 py-1 font-mono-data text-[9px] text-[#C9CDC8] flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C98A3D]" />
                  <span>HEADQUARTERS</span>
                </div>
              </div>

              {/* Bottom Instructions / Caption */}
              <div className="mt-3 flex items-center justify-between font-mono-data text-[10px] text-[#68716B]">
                <span>SELECT REGION FOR SPECIFICATIONS</span>
                <span className="text-[#C98A3D]">MIAMI-DADE · BROWARD · PALM BEACH</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Mandatory Text Band: South Florida plumbing support for commercial and construction projects. */}
      <div className="relative z-10 w-full px-6 lg:px-12 py-5 border-t border-white/20 bg-[#111512]/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4 font-mono-data text-xs text-[#C9CDC8]">
        <div className="text-sm sm:text-base text-white font-normal flex items-center gap-3">
          <MapPin className="w-4 h-4 text-[#C98A3D] shrink-0" />
          <span>South Florida plumbing support for commercial and construction projects.</span>
        </div>
        <div>
          <a
            href="#quote-request"
            className="inline-flex items-center gap-2 bg-[#232824] hover:bg-[#C98A3D] hover:text-[#111512] text-white px-4 py-2 border border-white/20 hover:border-[#C98A3D] transition-all duration-200 text-xs uppercase tracking-wider"
          >
            <span>REQUEST LOCAL ESTIMATE</span>
            <span>→</span>
          </a>
        </div>
      </div>
    </section>
  );
};
