import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { AboutSection } from "./components/AboutSection";
import { NewsSection } from "./components/NewsSection";
import { ContactSection } from "./components/ContactSection";
import { VirtualGallery, EcosystemHub, CreatorStudio, SecurityAudit } from "./components/PagesSections";
import { JoinModal, BuyTokenModal, OpenAppModal } from "./components/InteractiveModals";
import { SubpageBackgroundVideo } from "./components/SubpageBackgroundVideo";
import { CyberToast } from "./components/CyberToast";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("Home");
  const [isJoinOpen, setIsJoinOpen] = useState(false);
  const [isBuyOpen, setIsBuyOpen] = useState(false);
  const [isOpenAppOpen, setIsOpenAppOpen] = useState(false);

  // High Fidelity Router Layer returning modular components with custom enter/exit animations
  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return (
          <motion.div
            key="home-view"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <HeroSection 
              onOpenAppClick={() => setIsOpenAppOpen(true)}
              onBuyTokenClick={() => setIsBuyOpen(true)}
            />
            <FeaturesSection />
            <HowItWorksSection />
          </motion.div>
        );
      case "About":
        return (
          <motion.div
            key="about-view"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <AboutSection />
          </motion.div>
        );
      case "News":
        return (
          <motion.div
            key="news-view"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <NewsSection />
          </motion.div>
        );
      case "Contact Us":
        return (
          <motion.div
            key="contact-view"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ContactSection />
          </motion.div>
        );

      // Sub-pages defined inside the "Pages" Dropdown
      case "Virtual Gallery":
        return (
          <motion.div
            key="gallery-view"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative min-h-screen bg-black pt-36 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden"
          >
            <SubpageBackgroundVideo />
            <div className="max-w-7xl mx-auto relative z-10">
              <VirtualGallery />
            </div>
          </motion.div>
        );
      case "Ecosystem Hub":
        return (
          <motion.div
            key="hub-view"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative min-h-screen bg-black pt-36 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden"
          >
            <SubpageBackgroundVideo />
            <div className="max-w-7xl mx-auto relative z-10">
              <EcosystemHub />
            </div>
          </motion.div>
        );
      case "Creator Studio":
        return (
          <motion.div
            key="studio-view"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative min-h-screen bg-black pt-36 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden"
          >
            <SubpageBackgroundVideo />
            <div className="max-w-7xl mx-auto relative z-10">
              <CreatorStudio />
            </div>
          </motion.div>
        );
      case "Security Audit":
        return (
          <motion.div
            key="audit-view"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative min-h-screen bg-black pt-36 pb-24 px-6 md:px-12 lg:px-24 overflow-hidden"
          >
            <SubpageBackgroundVideo />
            <div className="max-w-7xl mx-auto relative z-10">
              <SecurityAudit />
            </div>
          </motion.div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-black min-h-screen text-white relative font-sans flex flex-col justify-between selection:bg-[#B369FE]/30 selection:text-white">
      {/* Dynamic Header */}
      <Navbar 
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onJoinClick={() => setIsJoinOpen(true)}
        onOpenAppClick={() => setIsOpenAppOpen(true)}
        onBuyTokenClick={() => setIsBuyOpen(true)}
      />

      {/* Main Content Layout with AnimatePresence Page Transitions */}
      <main className="flex-grow">
        <AnimatePresence mode="wait">
          {renderContent()}
        </AnimatePresence>
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
      
      <CyberToast />
    </div>
  );
}
