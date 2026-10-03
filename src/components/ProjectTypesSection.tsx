import React, { useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';
import { EditorialImage } from './EditorialImage';
import imgGroundUp from '../assets/images/ground_up_color_1791020738703.jpg';
import imgMechanical from '../assets/images/mechanical_color_1791020750811.jpg';
import imgTI from '../assets/images/tenant_color_1791020762712.jpg';
import imgHero from '../assets/images/hero_color_roughin_1791020724784.jpg';
import imgFlorida from '../assets/images/florida_color_1791020774113.jpg';

export const ProjectTypesSection: React.FC = () => {
  const [activeId, setActiveId] = useState<string>('01');
  const [openMobile, setOpenMobile] = useState<string | null>('01');

  const items = [
    {
      id: '01',
      number: '01',
      title: 'NEW CONSTRUCTION',
      tag: 'Core & Shell / Risers / Slab',
      image: imgGroundUp,
    },
    {
      id: '02',
      number: '02',
      title: 'REMODELING',
      tag: 'Commercial Retrofit & Modernization',
      image: imgMechanical,
    },
    {
      id: '03',
      number: '03',
      title: 'TENANT IMPROVEMENT',
      tag: 'Retail / Restaurant / Office Fit-Out',
      image: imgTI,
    },
    {
      id: '04',
      number: '04',
      title: 'COMMERCIAL PLUMBING',
      tag: 'Mains / Backflow / Fixtures',
      image: imgHero,
    },
    {
      id: '05',
      number: '05',
      title: 'GAS PIPING',
      tag: 'Code-Compliant Fuel Systems',
      image: imgFlorida,
    },
    {
      id: '06',
      number: '06',
      title: 'GREASE TRAP SERVICES',
      tag: 'Commercial Kitchen Interceptors',
      image: imgTI,
    },
  ];

  const current = items.find((i) => i.id === activeId) || items[0];

  return (
    <section id="projects" className="relative w-full bg-[#F8F7F2] border-b border-[#C9CDC8] py-20 sm:py-28 px-6 lg:px-12 dossier-texture">
      {/* 12-Column Layout on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start">
        {/* Left Column: The Horizontal Project Index (8 cols) */}
        <div className="lg:col-span-8">
          <div className="border-t border-[#C9CDC8]">
            {items.map((item) => {
              const isSelected = activeId === item.id;
              return (
                <div
                  key={item.id}
                  onMouseEnter={() => setActiveId(item.id)}
                  onClick={() => setActiveId(item.id)}
                  className={`group border-b border-[#C9CDC8] transition-all duration-200 cursor-pointer ${
                    isSelected ? 'bg-[#F0EFE9]' : 'hover:bg-[#F0EFE9]/40'
                  }`}
                >
                  <div
                    className={`py-6 sm:py-7 flex items-center justify-between transition-all duration-200 ${
                      isSelected ? 'lg:pl-8' : 'lg:pl-2'
                    }`}
                  >
                    <div className="flex items-center gap-6 sm:gap-10">
                      <span
                        className={`font-mono-data text-base sm:text-lg font-bold transition-colors ${
                          isSelected ? 'text-[#C98A3D]' : 'text-[#68716B] group-hover:text-[#C98A3D]'
                        }`}
                      >
                        {item.number}
                      </span>
                      <h3
                        className={`text-2xl sm:text-3xl lg:text-4xl font-bold uppercase tracking-tight transition-colors ${
                          isSelected ? 'text-[#111512]' : 'text-[#232824] group-hover:text-[#C98A3D]'
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 pr-2">
                      <span className="hidden sm:inline font-mono-data text-xs text-[#68716B] group-hover:text-[#111512] transition-colors">
                        {item.tag}
                      </span>
                      <ArrowUpRight
                        className={`w-5 h-5 transition-transform ${
                          isSelected
                            ? 'text-[#C98A3D] translate-x-1 -translate-y-1'
                            : 'text-[#C9CDC8] group-hover:text-[#C98A3D] group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
                        }`}
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Adjacent Thumbnail in Adjacent Grid Zone (4 cols) */}
        <div className="hidden lg:block lg:col-span-4 sticky top-28">
          <div className="border border-[#111512] bg-[#F8F7F2] p-4 shadow-[4px_4px_0px_#C9CDC8]">
            <div className="relative aspect-[4/3] w-full overflow-hidden border border-[#C9CDC8] bg-[#232824]">
              <EditorialImage
                src={current.image}
                alt={current.title}
                aspectRatio="aspect-[4/3]"
              />
            </div>
            <div className="pt-3 flex items-center justify-between font-mono-data text-xs">
              <span className="font-bold text-[#111512]">{current.title}</span>
              <span className="text-[#C98A3D]">REF {current.number}</span>
            </div>
          </div>
        </div>
      </div>

      {/* MOBILE ACCORDION (<= 1024px) */}
      <div className="lg:hidden mt-8 border-t border-[#C9CDC8]">
        {items.map((item) => {
          const isOpen = openMobile === item.id;
          return (
            <div key={item.id} className="border-b border-[#C9CDC8]">
              <button
                type="button"
                onClick={() => setOpenMobile(isOpen ? null : item.id)}
                className="w-full py-5 flex items-center justify-between text-left group hover:text-[#C98A3D] transition-colors focus-visible:outline-2 focus-visible:outline-[#C98A3D]"
                aria-expanded={isOpen}
              >
                <div className="flex items-center gap-4">
                  <span className="font-mono-data text-sm font-bold text-[#C98A3D]">
                    {item.number}
                  </span>
                  <span className="text-lg font-bold uppercase text-[#111512] group-hover:text-[#C98A3D] transition-colors">
                    {item.title}
                  </span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 text-[#68716B] group-hover:text-[#C98A3D] transition-transform ${
                    isOpen ? 'rotate-180 text-[#C98A3D]' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="pb-6">
                  <div className="aspect-[16/9] w-full overflow-hidden border border-[#C9CDC8] mb-3">
                    <EditorialImage
                      src={item.image}
                      alt={item.title}
                      aspectRatio="aspect-[16/9]"
                    />
                  </div>
                  <div className="font-mono-data text-xs text-[#68716B]">
                    {item.tag}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

