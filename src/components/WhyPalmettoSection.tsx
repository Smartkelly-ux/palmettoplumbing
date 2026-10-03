import React, { useState, useEffect, useRef } from 'react';

export const WhyPalmettoSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const pillars = [
    {
      title: 'LICENSED & EXPERIENCED',
      number: '01',
      directionStyle: revealed
        ? 'translate-x-0 opacity-100'
        : '-translate-x-3 opacity-0', // col 1: left
    },
    {
      title: 'PROMPT & RELIABLE',
      number: '02',
      directionStyle: revealed
        ? 'translate-y-0 opacity-100'
        : 'translate-y-3 opacity-0', // col 2: bottom
    },
    {
      title: 'UPFRONT PRICING',
      number: '03',
      directionStyle: revealed
        ? 'translate-x-0 opacity-100'
        : 'translate-x-3 opacity-0', // col 3: right
    },
    {
      title: 'MINIMAL OUTSOURCING',
      number: '04',
      directionStyle: revealed
        ? 'translate-y-0 opacity-100'
        : '-translate-y-3 opacity-0', // col 4: top
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F8F7F2] border-b border-[#C9CDC8] py-14 sm:py-20 lg:py-28 px-6 lg:px-12 dossier-texture"
    >
      {/* 4-Column Factual Positioning Strip - 2 cols on mobile, 4 on desktop */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-12">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className={`border-t-2 border-[#111512] pt-4 sm:pt-6 flex flex-col justify-between transition-all duration-700 ease-out min-h-[120px] sm:min-h-[160px] ${pillar.directionStyle}`}
          >
            <div className="font-mono-data text-xs text-[#C98A3D] font-bold">
              {pillar.number}
            </div>

            <h3 className="text-sm sm:text-xl lg:text-2xl font-bold uppercase tracking-tight text-[#111512] leading-tight my-auto break-words">
              {pillar.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};

