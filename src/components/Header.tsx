import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone, ArrowRight } from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isDrawerOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isDrawerOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isDrawerOpen) {
        setIsDrawerOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isDrawerOpen]);

  const closeDrawer = () => setIsDrawerOpen(false);

  const navLinks = [
    { label: 'CAPABILITIES', href: '#capabilities', number: '01' },
    { label: 'PROJECTS', href: '#projects', number: '02' },
    { label: 'SECTORS', href: '#sectors', number: '03' },
    { label: 'CONTACT', href: '#contact', number: '04' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-colors duration-300 ${
          isScrolled
            ? 'bg-[#F8F7F2] border-b border-[#C9CDC8] shadow-[0_1px_4px_rgba(0,0,0,0.03)]'
            : 'bg-transparent border-b border-[#C9CDC8]/50'
        }`}
      >
        <div className="w-full px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
          {/* LEFT: PALMETTO PLUMBING (Single element wordmark with color hover) */}
          <div className="flex items-center">
            <a
              href="#"
              className="text-base sm:text-lg font-bold tracking-tight text-[#111512] hover:text-[#C98A3D] uppercase transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#C98A3D]"
            >
              Palmetto Plumbing
            </a>
          </div>

          {/* CENTER: DESKTOP ONLY (> 1024px) */}
          <nav
            aria-label="Main Navigation"
            className="hidden lg:flex items-center gap-10 font-mono-data text-xs tracking-[0.2em] text-[#232824]"
          >
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#C98A3D] transition-colors duration-200 py-1 focus-visible:outline-2 focus-visible:outline-[#C98A3D]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* RIGHT: DESKTOP CTA (> 1024px) */}
          <div className="hidden lg:flex items-center gap-6">
            <a
              href="tel:3058213561"
              className="font-mono-data text-xs tracking-wider text-[#68716B] hover:text-[#C98A3D] transition-colors duration-200 flex items-center gap-1.5 focus-visible:outline-2 focus-visible:outline-[#C98A3D]"
            >
              <Phone className="w-3.5 h-3.5 text-[#C98A3D]" />
              <span>(305) 821-3561</span>
            </a>
            <a
              href="#quote-request"
              className="bg-[#111512] text-[#F8F7F2] hover:bg-[#C98A3D] hover:text-[#111512] hover:border-[#C98A3D] active:bg-[#b07833] transition-all duration-200 font-mono-data text-xs tracking-widest uppercase px-5 py-2.5 flex items-center gap-2 border border-[#111512] shadow-xs focus-visible:outline-2 focus-visible:outline-[#C98A3D]"
            >
              <span>REQUEST A QUOTE</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* HAMBURGER TRIGGER FOR TABLET + MOBILE (<= 1024px) */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <a
              href="tel:3058213561"
              className="p-2 text-[#111512] hover:text-[#C98A3D] hover:bg-[#F0EFE9] transition-colors rounded-xs"
              aria-label="Call Palmetto Plumbing at (305) 821-3561"
            >
              <Phone className="w-5 h-5 text-[#C98A3D]" />
            </a>
            <button
              type="button"
              onClick={() => setIsDrawerOpen(true)}
              className="p-2 text-[#111512] hover:text-[#C98A3D] hover:bg-[#F0EFE9] transition-colors rounded-xs focus-visible:outline-2 focus-visible:outline-[#C98A3D]"
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-drawer"
              aria-label="Open navigation drawer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE SLIDE-IN DRAWER BACKDROP */}
      <div
        className={`fixed inset-0 z-50 bg-[#111512]/60 backdrop-blur-xs transition-opacity duration-300 lg:hidden ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={closeDrawer}
        aria-hidden="true"
      />

      {/* MOBILE SLIDE-IN DRAWER PANEL */}
      <aside
        id="mobile-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile Navigation Drawer"
        className={`fixed top-0 right-0 bottom-0 z-50 w-[85%] max-w-sm sm:max-w-md bg-[#F8F7F2] border-l border-[#C9CDC8] shadow-2xl flex flex-col justify-between transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden dossier-texture ${
          isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* DRAWER TOP BAR */}
        <div className="p-6 border-b border-[#C9CDC8] flex items-center justify-between">
          <div className="font-mono-data text-xs font-semibold tracking-widest text-[#68716B] uppercase">
            NAVIGATION / DOSSIER
          </div>
          <button
            type="button"
            onClick={closeDrawer}
            className="p-2 text-[#111512] hover:text-[#C98A3D] hover:bg-[#F0EFE9] transition-colors rounded-xs focus-visible:outline-2 focus-visible:outline-[#C98A3D]"
            aria-label="Close navigation drawer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* DRAWER NAVIGATION LINKS */}
        <div className="p-6 sm:p-8 flex-1 overflow-y-auto">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeDrawer}
                className="group flex items-center justify-between p-3.5 border-b border-[#C9CDC8]/50 hover:bg-[#F0EFE9] hover:border-[#C98A3D] transition-all duration-200"
              >
                <div className="flex items-center gap-3">
                  <span className="font-mono-data text-xs text-[#68716B] group-hover:text-[#C98A3D] transition-colors">
                    {link.number}
                  </span>
                  <span className="font-mono-data text-base font-bold tracking-wider text-[#111512] group-hover:text-[#C98A3D] transition-colors">
                    {link.label}
                  </span>
                </div>
                <ArrowRight className="w-4 h-4 text-[#C9CDC8] group-hover:text-[#C98A3D] group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </nav>
        </div>

        {/* DRAWER BOTTOM CONTACT & CTAS */}
        <div className="p-6 sm:p-8 border-t border-[#C9CDC8] bg-[#F0EFE9] space-y-4">
          <div className="font-mono-data text-[11px] text-[#68716B] uppercase tracking-wider">
            SOUTH FLORIDA COMMERCIAL ESTIMATION
          </div>

          <a
            href="tel:3058213561"
            className="w-full py-3 px-4 bg-white border border-[#C9CDC8] text-[#111512] hover:border-[#C98A3D] hover:text-[#C98A3D] transition-colors flex items-center justify-center gap-2 font-mono-data text-xs font-semibold tracking-wider"
          >
            <Phone className="w-4 h-4 text-[#C98A3D]" />
            <span>(305) 821-3561</span>
          </a>

          <a
            href="#quote-request"
            onClick={closeDrawer}
            className="w-full py-3.5 px-4 bg-[#111512] text-[#F8F7F2] hover:bg-[#C98A3D] hover:text-[#111512] transition-colors flex items-center justify-center gap-2 font-mono-data text-xs font-bold uppercase tracking-widest border border-[#111512] hover:border-[#C98A3D]"
          >
            <span>REQUEST A QUOTE</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>

          <div className="pt-2 text-center font-mono-data text-[10px] text-[#68716B]">
            2655 W 78TH ST · HIALEAH, FL 33016
          </div>
        </div>
      </aside>
    </>
  );
};
