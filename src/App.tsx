import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { JoinModal, BuyTokenModal, OpenAppModal } from "./components/InteractiveModals";

export default function App() {
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isOpenAppOpen, setIsOpenAppOpen] = useState(false);

  return (
    <div className="bg-black min-h-screen text-white relative font-sans flex flex-col justify-between selection:bg-[#B369FE]/30 selection:text-white">
      {/* Dynamic Header */}
      <Navbar 
        onJoinClick={() => setIsJoinOpen(true)}
        onOpenAppClick={() => setIsOpenAppOpen(true)}
        onBuyTokenClick={() => setIsBuyOpen(true)}
      />

      {/* Main Content Layout */}
      <main className="flex-grow">
        <HeroSection 
          onOpenAppClick={() => setIsOpenAppOpen(true)}
          onBuyTokenClick={() => setIsBuyOpen(true)}
        />
        
        {/* Utilize The Functionality Features Grid */}
        <FeaturesSection />

        {/* The Intersection Of Real And Metaverse Worlds */}
        <HowItWorksSection />
      </main>

      {/* High Fidelity Footer mimicking standard sub-level information in a premium landing ecosystem */}
      <footer className="w-full border-t border-zinc-900/50 py-8 bg-black/60 backdrop-blur-sm z-10 text-center text-xs text-zinc-600 font-mono tracking-wider">
        <p className="hover:text-zinc-500 transition duration-300">
          NIRIX SYSTEM LABS © {new Date().getFullYear()} • ALL REQUISITE GATEWAYS ACTIVE
        </p>
      </footer>

      {/* Interactive State Modal Layers */}
      <JoinModal 
        isOpen={isJoinOpen} 
        onClose={() => setIsJoinOpen(false)} 
      />
      
      <BuyTokenModal 
        isOpen={isBuyOpen} 
        onClose={() => setIsBuyOpen(false)} 
      />
      
      <OpenAppModal 
        isOpen={isOpenAppOpen} 
        onClose={() => setIsOpenAppOpen(false)} 
      />
    </div>
  );
}

