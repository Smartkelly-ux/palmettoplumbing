import React, { useEffect, useRef, useState } from 'react';
import risersImage from '../assets/images/mechanical_color_1791020750811.jpg';
import { EditorialImage } from './EditorialImage';

export const SiteFloorSystemSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return;
    }

    const handleScroll = () => {
      // Only apply parallax vertical shifts on desktop viewports to avoid overlapping on mobile/tablet
      if (!sectionRef.current || window.innerWidth < 1024) {
        setOffset(0);
        return;
      }
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top <= windowHeight && rect.bottom >= 0) {
        const centerOffset = (rect.top + rect.height / 2 - windowHeight / 2) / (windowHeight / 2);
        setOffset(Math.max(-20, Math.min(20, centerOffset * 15)));
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-[75vh] lg:min-h-[90vh] bg-[#F0EFE9] border-b border-[#C9CDC8] py-14 sm:py-20 lg:py-28 px-6 lg:px-12 flex flex-col justify-center overflow-hidden"
    >
      {/* LAYER 01: Faint Architectural Grid (Slowest) */}
      <div
        className="absolute inset-0 bg-architectural-grid opacity-75 pointer-events-none transition-transform duration-200 ease-out"
        style={{
          transform: `translateY(${offset * 0.3}px)`,
        }}
      />

      {/* Center 3-Layer Spatial Composition */}
      <div className="relative z-10 my-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Side: LAYER 03 Large Project Number 02 & Text (Fastest Layer) */}
        <div
          className="lg:col-span-6 z-20 transition-transform duration-200 ease-out"
          style={{
            transform: `translateY(${-offset * 0.8}px)`,
          }}
        >
          {/* Large project number: 02 */}
          <div className="font-mono-data text-6xl sm:text-8xl lg:text-[150px] font-bold text-[#111512] tracking-tighter leading-none select-none mb-1 sm:mb-2 opacity-90">
            02
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-[-0.03em] text-[#111512] leading-tight sm:leading-[0.95] mb-4 sm:mb-6 break-words">
            Plumbing <br />
            Before <br />
            The Walls <br />
            <span className="font-display italic font-normal tracking-tight lowercase text-[#232824]">
              close.
            </span>
          </h2>

          <p className="max-w-md text-sm sm:text-base lg:text-lg text-[#232824] leading-relaxed font-normal">
            Coordinate plumbing with the building, the project schedule and the work of other trades.
          </p>
        </div>

        {/* Right Side: LAYER 02 Large Commercial Plumbing Photograph (Middle Layer) */}
        <div
          className="lg:col-span-6 z-10 transition-transform duration-200 ease-out"
          style={{
            transform: `translateY(${offset * 0.5}px)`,
          }}
        >
          <div className="relative border border-[#111512] bg-[#232824] shadow-[4px_4px_0px_#C9CDC8] sm:shadow-[8px_8px_0px_#C9CDC8] overflow-hidden">
            <EditorialImage
              src={risersImage}
              alt="Commercial plumbing riser shaft"
              aspectRatio="aspect-[16/10] sm:aspect-[16/9]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

