import React, { useState, useEffect, useRef } from 'react';

export const ProjectFlowSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const steps = [
    {
      primary: 'PLAN',
      secondary: 'DRAWINGS',
      number: '01',
      summary: 'Plan review & MEP takeoffs',
      fullText:
        'Comprehensive architectural plan review, clash detection analysis, MEP drawings takeoff, and South Florida municipal code compliance verification before construction commences.',
      deliverable: 'Clash-free mechanical drawings & verified plan takeoff',
    },
    {
      primary: 'BUILD',
      secondary: 'ROUGH-IN',
      number: '02',
      summary: 'Slab penetrations & vertical risers',
      fullText:
        'Heavy-duty slab penetrations, underground sanitary mains, horizontal overhead pipe racks, and multi-story copper and cast-iron distribution riser installations.',
      deliverable: 'Pressure-tested DWV stacks & supply distribution mains',
    },
    {
      primary: 'COORDINATE',
      secondary: 'INSTALL',
      number: '03',
      summary: 'Multi-trade job site synchronization',
      fullText:
        'Active on-site synchronization with general contractors, structural framing, electrical trades, and HVAC systems for seamless fixture rough-ins and wall tie-ins.',
      deliverable: 'Field-verified MEP coordination & multi-trade sign-off',
    },
    {
      primary: 'COMPLETE',
      secondary: 'FINAL',
      number: '04',
      summary: 'Inspection passing & system turnover',
      fullText:
        'Commercial fixture trim, commercial grease interceptor tie-in, backflow prevention certification, gas decay testing, and official municipal final inspection sign-off.',
      deliverable: 'Passed final inspection & commercial closeout turnover',
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = Math.max(
          0,
          Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height))
        );
        const index = Math.min(3, Math.floor(progress * 4));
        setActiveStep(index);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full bg-[#F0EFE9] border-b border-[#C9CDC8] py-14 sm:py-20 lg:py-28 px-6 lg:px-12 dossier-texture overflow-hidden"
    >
      {/* 
        Single container div with 4 child divs matching the Focus Mode CSS selectors:
        section:nth-of-type(8) > div:nth-of-type(1) > div:nth-of-type(1..4)
      */}
      <div className="w-full flex flex-col lg:flex-row border-t border-l border-[#C9CDC8] overflow-hidden bg-[#F0EFE9]">
        {steps.map((step, idx) => {
          const isHovered = hoveredIdx === idx;
          const isActive = hoveredIdx === null ? activeStep === idx : isHovered;

          // Compute dynamic flex styling for desktop expansion:
          // When hovered, the hovered card expands to flex-[2.5], pushing leftward.
          // Sibling cards contract to flex-[0.7].
          // When no card is hovered, all cards remain equal flex-1.
          let flexClass = 'lg:flex-1';
          if (hoveredIdx !== null) {
            flexClass = isHovered ? 'lg:flex-[2.5]' : 'lg:flex-[0.7]';
          }

          return (
            <div
              key={idx}
              onMouseEnter={() => {
                setHoveredIdx(idx);
                setActiveStep(idx);
              }}
              onMouseLeave={() => setHoveredIdx(null)}
              className={`relative p-5 sm:p-7 lg:p-10 border-r border-b border-[#C9CDC8] flex flex-col justify-between min-h-[260px] sm:min-h-[320px] lg:min-h-[460px] cursor-pointer transition-all duration-300 ease-out overflow-hidden break-words ${flexClass} ${
                isActive ? 'bg-[#F8F7F2]' : 'bg-transparent'
              } ${isHovered ? 'z-10 shadow-[0_0_24px_rgba(0,0,0,0.06)]' : 'z-0'}`}
            >
              {/* Top: Phase Number & Title Headers */}
              <div className="w-full overflow-hidden">
                <div className="flex items-center justify-between font-mono-data text-[11px] sm:text-xs mb-4 sm:mb-6">
                  <span
                    className={`font-bold transition-colors ${
                      isActive ? 'text-[#C98A3D]' : 'text-[#68716B]'
                    }`}
                  >
                    PHASE {step.number}
                  </span>
                  <span
                    className={`text-[9px] sm:text-[10px] tracking-widest uppercase font-mono-data ${
                      isActive ? 'text-[#111512] font-semibold' : 'text-[#68716B]'
                    }`}
                  >
                    {isActive ? 'ACTIVE' : 'READY'}
                  </span>
                </div>

                {/* Primary Word */}
                <h3
                  className={`text-2xl sm:text-3xl lg:text-5xl font-bold uppercase tracking-tight transition-colors duration-200 leading-none mb-2 sm:mb-3 break-words ${
                    isActive ? 'text-[#111512]' : 'text-[#68716B]'
                  }`}
                >
                  {step.primary}
                </h3>

                {/* Secondary Subtitle Below */}
                <div
                  className={`font-mono-data text-xs sm:text-sm tracking-[0.2em] sm:tracking-[0.25em] uppercase font-semibold transition-colors duration-200 mb-4 sm:mb-6 ${
                    isActive ? 'text-[#C98A3D]' : 'text-[#68716B]'
                  }`}
                >
                  {step.secondary}
                </div>

                {/* Full Text Content - Fully accommodates the text with zero overflow */}
                <div className="w-full pt-1">
                  <p
                    className={`text-xs sm:text-sm lg:text-base leading-relaxed text-[#232824] break-words transition-all duration-300 font-normal ${
                      isHovered ? 'opacity-100' : 'opacity-90 lg:opacity-75'
                    }`}
                  >
                    {isHovered ? step.fullText : step.summary}
                  </p>
                </div>
              </div>

              {/* Bottom: Key Deliverable (Visible when expanded) & Signal Line */}
              <div className="mt-6 sm:mt-8 pt-3 sm:pt-4 border-t border-[#C9CDC8]/60 w-full overflow-hidden">
                <div
                  className={`font-mono-data text-[11px] sm:text-xs text-[#68716B] mb-2 sm:mb-3 transition-all duration-300 ${
                    isHovered
                      ? 'opacity-100 max-h-24'
                      : 'opacity-0 max-h-0 lg:max-h-0 overflow-hidden'
                  }`}
                >
                  <span className="text-[#111512] font-semibold block uppercase tracking-wider text-[10px] sm:text-[11px] mb-0.5 sm:mb-1">
                    KEY DELIVERABLE:
                  </span>
                  <span className="text-[#232824] leading-normal block break-words">
                    {step.deliverable}
                  </span>
                </div>

                {/* Tiny SIGNAL Line Beneath Active Column */}
                <div
                  className={`h-1 w-full transition-all duration-300 ${
                    isActive ? 'bg-[#C98A3D]' : 'bg-transparent'
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
