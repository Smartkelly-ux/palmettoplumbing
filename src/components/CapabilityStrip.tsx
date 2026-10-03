import React, { useEffect, useRef, useState } from 'react';

export const CapabilityStrip: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [scrollOffset, setScrollOffset] = useState<number>(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
        // Horizontal scroll-scrub shift (15-20% of width)
        setScrollOffset((progress - 0.5) * 320);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const capabilities = [
    'COMMERCIAL',
    'NEW CONSTRUCTION',
    'REMODELING',
    'TENANT IMPROVEMENT',
    'GAS PIPING',
    'GREASE TRAPS',
  ];

  return (
    <section
      id="capabilities"
      ref={containerRef}
      className="relative w-full bg-[#111512] text-[#F8F7F2] py-8 sm:py-12 lg:py-16 border-y border-[#232824] overflow-hidden"
    >
      {/* Seamless Continuous Architectural Horizontal Strip */}
      <div className="w-full overflow-hidden">
        <div
          className="flex items-center gap-6 sm:gap-12 lg:gap-20 whitespace-nowrap will-change-transform transition-transform duration-75 ease-out select-none"
          style={{
            transform: `translateX(${-scrollOffset}px)`,
          }}
        >
          {/* Repeated items for seamless continuous ribbon */}
          {[...capabilities, ...capabilities, ...capabilities].map((item, index) => (
            <div key={index} className="flex items-center gap-6 sm:gap-12 lg:gap-20 shrink-0">
              <a
                href="#quote-request"
                className="text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold uppercase tracking-[-0.03em] text-[#F8F7F2] hover:text-[#C98A3D] transition-colors duration-200"
              >
                {item}
              </a>
              <span className="font-mono-data text-lg sm:text-3xl lg:text-5xl text-[#C98A3D] select-none opacity-80">
                /
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

