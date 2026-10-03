import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import heroImage from '../assets/images/hero_color_roughin_1791020724784.jpg';
import { EditorialImage } from './EditorialImage';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-24 sm:pt-28 pb-10 px-6 lg:px-12 flex flex-col justify-between border-b border-[#C9CDC8] bg-[#F8F7F2] dossier-texture overflow-hidden">
      {/* Top Dossier Coordinates */}
      <div className="w-full flex flex-wrap items-center justify-between gap-2 pb-5 border-b border-[#C9CDC8]/60 font-mono-data text-[11px] sm:text-xs tracking-wider text-[#68716B]">
        <div className="text-[#111512] font-semibold">PALMETTO PLUMBING CO.</div>
        <div>COMMERCIAL PLUMBING PARTNER</div>
      </div>

      {/* Main Split Layout: Left 62%, Right 38% */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 my-auto py-8 sm:py-12 lg:py-16 items-center">
        {/* Left 62% */}
        <div className="lg:col-span-7 xl:col-span-8 flex flex-col justify-center space-y-4 sm:space-y-6">
          <h1 className="font-bold uppercase tracking-[-0.04em] text-[#111512] leading-[0.98] sm:leading-[0.94] text-4xl sm:text-6xl md:text-7xl lg:text-[clamp(60px,7.5vw,120px)] break-words">
            Plumbing <br />
            That Belongs <br />
            <span className="font-display italic font-normal tracking-tight lowercase text-[#232824]">in the</span> Plan.
          </h1>

          <p className="max-w-xl text-base sm:text-lg lg:text-xl text-[#232824] leading-relaxed font-normal pt-1 sm:pt-2">
            Commercial plumbing for construction, renovation and tenant improvement across South Florida.
          </p>
        </div>

        {/* Right 38% — Vertical Commercial Rough-in Photo */}
        <div className="lg:col-span-5 xl:col-span-4 flex justify-start lg:justify-end">
          <div className="relative border border-[#111512] bg-[#232824] w-full max-w-sm sm:max-w-md overflow-hidden shadow-[4px_4px_0px_#C9CDC8] sm:shadow-[6px_6px_0px_#C9CDC8]">
            <EditorialImage
              src={heroImage}
              alt="Commercial construction plumbing rough-in"
              priority={true}
              aspectRatio="aspect-[4/3] sm:aspect-[3/4]"
            />
            <div className="px-3.5 py-2 sm:px-4 sm:py-2.5 bg-[#111512] text-[#F8F7F2] font-mono-data text-[10px] sm:text-[11px] flex justify-between items-center tracking-wider">
              <span className="text-[#C9CDC8]">FIG 01 / ROUGH-IN</span>
              <span className="text-[#C98A3D]">FIELD DOCUMENT</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Dossier Bar: Bottom-left HIALEAH / FL, Bottom-right REQUEST A QUOTE */}
      <div className="w-full pt-5 sm:pt-6 border-t border-[#C9CDC8] flex flex-wrap items-center justify-between gap-4 font-mono-data text-xs tracking-wider">
        <div className="font-bold text-[#111512] uppercase tracking-[0.2em] text-[11px] sm:text-xs">
          HIALEAH / FL
        </div>

        <a
          href="#quote-request"
          className="inline-flex items-center gap-2.5 font-bold font-mono-data text-[11px] sm:text-xs uppercase tracking-[0.2em] bg-[#111512] text-[#F8F7F2] hover:bg-[#C98A3D] hover:text-[#111512] hover:border-[#C98A3D] px-4 py-2 sm:px-5 sm:py-2.5 border border-[#111512] transition-all duration-200 shadow-xs focus-visible:outline-2 focus-visible:outline-[#C98A3D]"
        >
          <span>REQUEST A QUOTE</span>
          <ArrowUpRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  );
};

