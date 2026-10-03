import React, { useEffect, useRef, useState } from 'react';
import tiImage from '../assets/images/tenant_color_1791020762712.jpg';
import { EditorialImage } from './EditorialImage';

export const TenantImprovementSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sectors = ['OFFICE', 'RETAIL', 'RESTAURANT', 'COMMERCIAL SPACE'];

  return (
    <section
      id="sectors"
      ref={sectionRef}
      className="relative w-full bg-[#F8F7F2] border-b border-[#C9CDC8] py-14 sm:py-20 lg:py-28 px-6 lg:px-12 dossier-texture"
    >
      {/* Split Horizontal Layout: LEFT Typography / RIGHT Image */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
        {/* LEFT: TENANT IMPROVEMENT */}
        <div className="lg:col-span-5">
          <h2 className="text-3xl sm:text-5xl lg:text-7xl font-bold uppercase tracking-[-0.03em] text-[#111512] leading-tight sm:leading-[0.94] break-words">
            Tenant <br />
            Improvement
          </h2>
        </div>

        {/* RIGHT: Large Image Showing Commercial Plumbing Installation */}
        <div className="lg:col-span-7 space-y-4 sm:space-y-6">
          <div className="relative border border-[#111512] bg-[#232824] shadow-[4px_4px_0px_#C9CDC8] sm:shadow-[6px_6px_0px_#C9CDC8] overflow-hidden">
            <EditorialImage
              src={tiImage}
              alt="Commercial tenant improvement plumbing installation"
              aspectRatio="aspect-[16/10] sm:aspect-[16/9]"
              objectPosition={inView ? 'center 50%' : 'center 35%'}
            />
          </div>

          {/* Below Image: OFFICE · RETAIL · RESTAURANT · COMMERCIAL SPACE */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="py-2.5 px-2 bg-[#F0EFE9] border border-[#C9CDC8] text-center font-mono-data text-[10px] sm:text-xs font-bold text-[#111512] tracking-wider uppercase truncate"
              >
                {sector}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

