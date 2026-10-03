import React, { useState, useEffect, useRef } from 'react';
import { Phone, ArrowUpRight, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    // Check reduced motion
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
      { threshold: 0.15 }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      id="contact"
      ref={footerRef}
      className="relative w-full bg-[#111512] text-[#F8F7F2] pt-16 pb-12 px-6 lg:px-12 border-t border-[#232824] overflow-hidden"
    >
      {/* ONE SIGNAL ACCENT LINE TRAVELS HORIZONTALLY ACROSS THE TOP OF THE FOOTER */}
      <div
        className={`absolute top-0 left-0 h-[2px] bg-[#C98A3D] transition-all duration-[1000ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          inView ? 'w-full' : 'w-0'
        }`}
      />

      {/* Thin Architectural Line-Grid in the Background (Extremely Subtle) */}
      <div className="absolute inset-0 bg-architectural-grid opacity-10 pointer-events-none" />

      {/* 12-Column Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#232824]">
        {/* LEFT 5 COLUMNS: PALMETTO PLUMBING / SOUTH FLORIDA COMMERCIAL PLUMBING */}
        <div
          className={`md:col-span-5 space-y-3 transition-all duration-700 delay-100 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <h3 className="text-3xl sm:text-4xl font-bold uppercase tracking-tight text-white leading-none">
            Palmetto <br />
            Plumbing
          </h3>
          <p className="font-mono-data text-xs tracking-[0.25em] text-[#C98A3D] uppercase pt-2">
            South Florida <br />
            Commercial Plumbing
          </p>
        </div>

        {/* CENTER 3 COLUMNS: CAPABILITIES, PROJECTS, CONTACT */}
        <div
          className={`md:col-span-3 space-y-4 transition-all duration-700 delay-200 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <nav className="flex flex-col gap-3 font-mono-data text-xs tracking-wider text-[#C9CDC8]">
            <a href="#capabilities" className="hover:text-[#C98A3D] transition-colors py-0.5">
              CAPABILITIES
            </a>
            <a href="#projects" className="hover:text-[#C98A3D] transition-colors py-0.5">
              PROJECTS
            </a>
            <a href="#contact" className="hover:text-[#C98A3D] transition-colors py-0.5">
              CONTACT
            </a>
          </nav>
        </div>

        {/* RIGHT 4 COLUMNS: 2655 W 78TH ST / HIALEAH, FL 33016 / (305) 821-3561 / REQUEST A QUOTE */}
        <div
          className={`md:col-span-4 space-y-6 transition-all duration-700 delay-300 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <div className="font-mono-data text-xs space-y-2 text-[#C9CDC8]">
            <div className="text-white font-medium">2655 W 78TH ST</div>
            <div className="text-[#68716B]">HIALEAH, FL 33016</div>

            <div className="pt-2">
              <a
                href="tel:3058213561"
                className="text-white hover:text-[#C98A3D] transition-colors font-semibold"
              >
                (305) 821-3561
              </a>
            </div>
          </div>

          <div>
            <a
              href="#quote-request"
              className="inline-flex items-center gap-2 font-mono-data text-xs tracking-widest uppercase bg-[#232824] hover:bg-[#C98A3D] hover:text-[#111512] hover:border-[#C98A3D] text-white px-5 py-3 border border-[#68716B]/50 transition-all duration-200"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>

      {/* BOTTOM FOOTER BAR */}
      <div
        className={`relative z-10 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono-data text-xs text-[#68716B] transition-all duration-700 delay-500 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}
      >
        <div className="flex flex-wrap items-center gap-4 sm:gap-6">
          <span className="text-white font-medium">HIALEAH / FL</span>
          <span>·</span>
          <span>DADE / BROWARD / PALM BEACH</span>
        </div>

        <div>
          <span>© 2026 PALMETTO PLUMBING. ALL RIGHTS RESERVED.</span>
        </div>
      </div>
    </footer>
  );
};
