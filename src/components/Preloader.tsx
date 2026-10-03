import React, { useEffect, useState } from 'react';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const [phase, setPhase] = useState<number>(0);
  const [counter, setCounter] = useState<number>(1);
  const [isExiting, setIsExiting] = useState<boolean>(false);

  useEffect(() => {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      onComplete();
      return;
    }

    // Step 1: Initial coordinates (0ms -> 300ms)
    const t1 = setTimeout(() => setPhase(1), 300);

    // Step 2: Cross lines appear (300ms -> 800ms)
    const t2 = setTimeout(() => setPhase(2), 800);

    // Step 3: Counter ticks 01 -> 05 with 60ms intervals (800ms -> 1200ms)
    const t3 = setTimeout(() => {
      setPhase(3);
      let count = 1;
      const interval = setInterval(() => {
        count += 1;
        setCounter(count);
        if (count >= 5) {
          clearInterval(interval);
        }
      }, 70);
    }, 900);

    // Step 4: Wordmark & South Florida label lock (1300ms)
    const t4 = setTimeout(() => setPhase(4), 1400);

    // Step 5: Exit transition shifts into hero grid (2000ms -> 2700ms)
    const t5 = setTimeout(() => setIsExiting(true), 2100);
    const t6 = setTimeout(() => onComplete(), 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
      clearTimeout(t6);
    };
  }, [onComplete]);

  return (
    <div
      role="status"
      aria-label="Loading architectural dossier"
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#F8F7F2] text-[#111512] transition-all duration-700 pointer-events-auto ${
        isExiting ? 'opacity-0 scale-[1.01] pointer-events-none' : 'opacity-100'
      }`}
      style={{
        transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-architectural-grid opacity-60" />

      {/* Outer dossier coordinates */}
      <div className="absolute top-8 left-8 sm:top-12 sm:left-12 font-mono-data text-xs tracking-wider text-[#68716B] flex flex-col gap-1">
        <span>PROJECT / 001</span>
        <span>X 000</span>
        <span>Y 000</span>
      </div>

      <div className="absolute top-8 right-8 sm:top-12 sm:right-12 font-mono-data text-xs tracking-widest text-[#68716B]">
        <span>HIALEAH · FL</span>
      </div>

      {/* Crossing Lines */}
      <div
        className={`absolute left-0 right-0 h-[1px] bg-[#C9CDC8] transition-transform duration-500 ease-out ${
          phase >= 2 ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
        }`}
        style={{ top: '50%' }}
      />
      <div
        className={`absolute top-0 bottom-0 w-[1px] bg-[#C9CDC8] transition-transform duration-500 ease-out ${
          phase >= 2 ? 'scale-y-100 opacity-100' : 'scale-y-0 opacity-0'
        }`}
        style={{ left: '50%' }}
      />

      {/* Intersection Node & Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 max-w-lg">
        {/* Intersection Number */}
        <div
          className={`font-mono-data text-xs font-semibold tracking-widest text-[#C98A3D] mb-4 transition-all duration-300 ${
            phase >= 3 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          <span>COORDINATE / 0{counter}</span>
        </div>

        {/* Wordmark */}
        <div
          className={`transition-all duration-700 ${
            phase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-3'
          }`}
          style={{ transitionTimingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)' }}
        >
          <h1 className="text-3xl sm:text-5xl font-bold tracking-[-0.04em] uppercase text-[#111512] leading-none mb-1">
            Palmetto
          </h1>
          <p className="text-sm sm:text-base font-mono-data uppercase tracking-[0.35em] text-[#68716B]">
            Plumbing Co.
          </p>
        </div>

        {/* Small label */}
        <div
          className={`mt-8 pt-4 border-t border-[#C9CDC8] font-mono-data text-[11px] tracking-[0.25em] text-[#68716B] uppercase transition-all duration-500 ${
            phase >= 4 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
          }`}
        >
          South Florida / Plumbing
        </div>
      </div>

      {/* Manual Skip button for instant access */}
      <button
        onClick={onComplete}
        className="absolute bottom-8 right-8 font-mono-data text-[11px] uppercase tracking-widest text-[#68716B] hover:text-[#111512] transition-colors py-2 px-3 focus-visible:outline-2 focus-visible:outline-[#C98A3D]"
      >
        Skip [ESC]
      </button>
    </div>
  );
};
