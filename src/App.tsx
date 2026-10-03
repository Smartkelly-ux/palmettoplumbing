import React, { useState } from 'react';
import { Preloader } from './components/Preloader';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { CapabilityStrip } from './components/CapabilityStrip';
import { BuiltForJobSection } from './components/BuiltForJobSection';
import { ProjectTypesSection } from './components/ProjectTypesSection';
import { SiteFloorSystemSection } from './components/SiteFloorSystemSection';
import { TenantImprovementSection } from './components/TenantImprovementSection';
import { GasAndGreaseSection } from './components/GasAndGreaseSection';
import { ProjectFlowSection } from './components/ProjectFlowSection';
import { SouthFloridaSection } from './components/SouthFloridaSection';
import { WhyPalmettoSection } from './components/WhyPalmettoSection';
import { QuoteRequestSection } from './components/QuoteRequestSection';
import { FinalStatementSection } from './components/FinalStatementSection';
import { Footer } from './components/Footer';

export default function App() {
  const [preloaderComplete, setPreloaderComplete] = useState<boolean>(false);

  return (
    <div className="min-h-screen bg-[#F0EFE9] text-[#111512] font-sans-ui selection:bg-[#C98A3D] selection:text-white">
      {/* Coordinate Preloader (PROJECT / 001) */}
      {!preloaderComplete && (
        <Preloader onComplete={() => setPreloaderComplete(true)} />
      )}

      {/* Main Architectural Dossier Website */}
      <div
        className={`transition-opacity duration-700 ease-out ${
          preloaderComplete ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <Header />

        <main id="main-content">
          {/* Hero Section: Project Cover Composition */}
          <HeroSection />

          {/* Section 01: Full-width Capability Strip */}
          <CapabilityStrip />

          {/* Section 02: Built for the Job (3-Column Layout with Vertical Window Reveal) */}
          <BuiltForJobSection />

          {/* Section 03: Project Types (Horizontal Index with Desktop Hover Thumbnails) */}
          <ProjectTypesSection />

          {/* Section 04: Site / Floor / System (Signature 3-Layer Spatial Depth Section) */}
          <SiteFloorSystemSection />

          {/* Section 05: Tenant Improvement (Split Layout with Crop Position Transition) */}
          <TenantImprovementSection />

          {/* Section 06: Gas + Grease (Dark Charcoal Dual-Zone Section) */}
          <GasAndGreaseSection />

          {/* Section 07: Project Flow (Horizontal Construction Sequence) */}
          <ProjectFlowSection />

          {/* Section 08: South Florida (Full-Screen Photographic Band) */}
          <SouthFloridaSection />

          {/* Section 09: Why Palmetto (4-Column Factual Positioning Strip) */}
          <WhyPalmettoSection />

          {/* Section 10: Inline Project / Quote Request Form */}
          <QuoteRequestSection />

          {/* Section 11: Final Project Statement (Put the Plumbing in the Plan) */}
          <FinalStatementSection />
        </main>

        {/* Architectural 12-Column Footer */}
        <Footer />
      </div>
    </div>
  );
}
