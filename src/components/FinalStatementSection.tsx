import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const FinalStatementSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#F8F7F2] border-b border-[#C9CDC8] py-16 sm:py-24 lg:py-36 px-6 lg:px-12 dossier-texture overflow-hidden">
      {/* Main 12-Column Grid: Spanning multiple columns, NOT centered */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
        {/* Left 8-9 columns: Giant Typography Across Screen */}
        <div className="lg:col-span-8 xl:col-span-9">
          <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[clamp(60px,7.5vw,115px)] font-bold uppercase tracking-[-0.04em] text-[#111512] leading-[0.98] sm:leading-[0.92] break-words">
            Put the <br />
            Plumbing <br />
            <span className="font-display italic font-normal tracking-tight lowercase text-[#232824]">
              in the
            </span> Plan.
          </h2>
        </div>

        {/* Far Right 3-4 columns: Side-Mounted Request a Quote Action */}
        <div className="lg:col-span-4 xl:col-span-3 flex justify-start lg:justify-end pb-2 sm:pb-4">
          <a
            href="#quote-request"
            className="inline-flex items-center justify-between gap-6 bg-[#111512] text-[#F8F7F2] hover:bg-[#C98A3D] hover:text-[#111512] hover:border-[#C98A3D] px-6 py-4 sm:px-8 sm:py-5 font-mono-data text-xs font-bold uppercase tracking-widest transition-all duration-200 border border-[#111512] shadow-xs w-full sm:w-auto"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

