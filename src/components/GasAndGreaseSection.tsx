import React from 'react';

export const GasAndGreaseSection: React.FC = () => {
  return (
    <section className="relative w-full bg-[#232824] text-[#F8F7F2] border-b border-[#111512] py-14 sm:py-20 lg:py-28 px-6 lg:px-12 overflow-hidden">
      {/* Background Subtle Architectural Blueprint Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-15 pointer-events-none" />

      {/* Two Large Horizontal Zones */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
        {/* ZONE 1: GAS PIPING */}
        <div className="border border-[#68716B]/50 bg-[#111512]/70 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div className="space-y-3 sm:space-y-4">
            <div className="font-mono-data text-xs text-[#C98A3D] tracking-widest uppercase">
              MECHANICAL FUEL
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
              Gas Piping
            </h3>

            <p className="text-sm sm:text-base lg:text-lg text-[#C9CDC8] leading-relaxed font-normal pt-1 sm:pt-2">
              Safe, code-compliant natural gas and LP propane pipe installations for commercial facilities, kitchens and heating systems.
            </p>
          </div>
        </div>

        {/* ZONE 2: GREASE TRAPS */}
        <div className="border border-[#68716B]/50 bg-[#111512]/70 p-6 sm:p-10 lg:p-12 flex flex-col justify-between">
          <div className="space-y-3 sm:space-y-4">
            <div className="font-mono-data text-xs text-[#C98A3D] tracking-widest uppercase">
              SANITARY SEPARATION
            </div>

            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-bold uppercase tracking-tight text-white leading-tight">
              Grease Traps
            </h3>

            <p className="text-sm sm:text-base lg:text-lg text-[#C9CDC8] leading-relaxed font-normal pt-1 sm:pt-2">
              Commercial food-service interceptors, sanitary grease waste piping and drainage systems for restaurants and retail kitchens.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

