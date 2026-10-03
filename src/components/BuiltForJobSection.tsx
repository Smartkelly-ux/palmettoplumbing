import React, { useEffect, useRef, useState } from 'react';
import groundUpImage from '../assets/images/ground_up_color_1791020738703.jpg';
import { EditorialImage } from './EditorialImage';

export const BuiltForJobSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsRevealed(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsRevealed(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full bg-[#F0EFE9] border-b border-[#C9CDC8] py-14 sm:py-20 lg:py-28 px-6 lg:px-12 dossier-texture"
    >
      {/* 3-Column Desktop Composition */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* COLUMN 1: LEFT (01 / BUILD) */}
        <div className="lg:col-span-3 flex flex-row lg:flex-col items-baseline lg:items-start gap-4 lg:gap-0 justify-start">
          <div className="font-mono-data text-5xl sm:text-7xl lg:text-9xl font-bold text-[#111512] tracking-tighter leading-none mb-1 sm:mb-2">
            01
          </div>
          <div className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-[0.2em] uppercase text-[#232824]">
            BUILD
          </div>
        </div>

        {/* COLUMN 2: CENTER (Large Construction Photograph with Vertical Window Reveal) */}
        <div className="lg:col-span-5 flex justify-center">
          <div className="relative w-full max-w-lg border border-[#111512] bg-[#232824] shadow-[4px_4px_0px_#C9CDC8] sm:shadow-[6px_6px_0px_#C9CDC8] overflow-hidden">
            <div
              className="w-full overflow-hidden transition-all duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                clipPath: isRevealed
                  ? 'inset(0% 0% 0% 0%)'
                  : 'inset(18% 0% 18% 0%)',
              }}
            >
              <EditorialImage
                src={groundUpImage}
                alt="Underground commercial plumbing utility trench"
                aspectRatio="aspect-[4/3]"
              />
            </div>
          </div>
        </div>

        {/* COLUMN 3: RIGHT (Headline & Supporting) */}
        <div className="lg:col-span-4 flex flex-col justify-center space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-[-0.03em] text-[#111512] leading-tight sm:leading-[0.98] break-words">
            Plumbing <br />
            From the <br />
            Ground Up.
          </h2>

          <p className="text-sm sm:text-base lg:text-lg text-[#232824] leading-relaxed font-normal">
            New-construction plumbing from water supply and drainage systems to fixture installation and gas piping.
          </p>
        </div>
      </div>
    </section>
  );
};

