import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Rocket, 
  Sparkles, 
  Compass, 
  ShieldCheck, 
  Home, 
  Info, 
  Layers, 
  Newspaper, 
  MessageSquare 
} from "lucide-react";
import { NirixLogo } from "./NirixLogo";

interface NavbarProps {
  onJoinClick: () => void;
  onOpenAppClick: () => void;
  onBuyTokenClick: () => void;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export function Navbar({ onJoinClick, onOpenAppClick, onBuyTokenClick, activeTab, setActiveTab }: NavbarProps) {
  const [isPagesDropdownOpen, setIsPagesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", type: "link", icon: Home },
    { name: "About", type: "link", icon: Info },
    { name: "Pages", type: "dropdown", icon: Layers },
    { name: "News", type: "link", icon: Newspaper },
    { name: "Contact Us", type: "link", icon: MessageSquare },
  ];

  const pagesItems = [
    { name: "Virtual Gallery", desc: "Showcase in 3D canvas spaces", icon: Compass },
    { name: "Ecosystem Hub", desc: "Interact with Nirix dApps", icon: Rocket },
    { name: "Creator Studio", desc: "Design custom metaverse items", icon: Sparkles },
    { name: "Security Audit", desc: "Verified smart contract audits", icon: ShieldCheck },
  ];

  const handleNavItemClick = (itemName: string) => {
    if (itemName === "Pages") {
      setIsPagesDropdownOpen(!isPagesDropdownOpen);
    } else {
      setActiveTab(itemName);
      setIsPagesDropdownOpen(false);
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/40 backdrop-blur-md border-b border-zinc-900/45 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Brand Logo & Name */}
        <div 
          onClick={() => handleNavItemClick("Home")}
          className="flex items-center cursor-pointer group"
        >
          <motion.div
            whileHover={{ rotate: 15, scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <NirixLogo />
          </motion.div>
          <span className="text-white text-2xl font-semibold font-display tracking-tight transition-colors duration-200 group-hover:text-zinc-200">
            Nirix
          </span>
        </div>

        {/* Navigation - Centered Menu items */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = activeTab === item.name;
            const Icon = item.icon;

            if (item.type === "dropdown") {
              return (
                <div 
                  key={item.name} 
                  className="relative py-2"
                  onMouseEnter={() => setIsPagesDropdownOpen(true)}
                  onMouseLeave={() => setIsPagesDropdownOpen(false)}
                >
                  <button
                    onClick={() => setIsPagesDropdownOpen(!isPagesDropdownOpen)}
                    className={`flex items-center gap-1.5 text-[15px] font-medium tracking-wide transition-colors cursor-pointer ${
                      isPagesDropdownOpen ? "text-[#B369FE]" : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Icon className="w-4 h-4 text-zinc-500" />
                    <span>{item.name}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isPagesDropdownOpen ? "rotate-180 text-[#B369FE]" : "text-zinc-500"
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {isPagesDropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 15 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-1/2 -translate-x-1/2 mt-3 w-80 bg-[#07070a] border border-zinc-800/80 rounded-xl p-3 shadow-2xl z-45"
                      >
                        <div className="grid gap-1">
                          {pagesItems.map((pi) => {
                            const PiIcon = pi.icon;
                            return (
                              <button
                                key={pi.name}
                                onClick={() => {
                                  setIsPagesDropdownOpen(false);
                                  setActiveTab(pi.name);
                                }}
                                className="flex items-start gap-3 p-3 rounded-lg text-left hover:bg-zinc-900/60 transition group cursor-pointer"
                              >
                                <div className="p-2 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-400 group-hover:text-[#B369FE] group-hover:border-[#B369FE]/30 transition">
                                  <PiIcon className="w-4 h-4" />
                                </div>
                                <div>
                                  <h4 className="text-sm font-medium text-white group-hover:text-[#B369FE] transition">
                                    {pi.name}
                                  </h4>
                                  <p className="text-xs text-zinc-500 mt-0.5">
                                    {pi.desc}
                                  </p>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            }

            return (
              <button
                key={item.name}
                onClick={() => handleNavItemClick(item.name)}
                className={`relative text-[15px] font-medium tracking-wide transition-all py-2 cursor-pointer flex items-center gap-1.5 ${
                  isActive ? "text-white" : "text-zinc-400 hover:text-white"
                }`}
              >
                <Icon className={`w-4 h-4 transition-colors ${isActive ? "text-[#B369FE]" : "text-zinc-500 group-hover:text-white"}`} />
                <span>{item.name}</span>
                {isActive && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#513FF5] to-[#B369FE] rounded-full"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Right side - gradient Button */}
        <div className="hidden md:block">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            onClick={onJoinClick}
            className="px-6 py-2.5 bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white hover:opacity-95 font-medium text-sm rounded-lg transition-all shadow-[0_4px_20px_rgba(81,63,245,0.25)] hover:shadow-[0_4px_25px_rgba(179,105,254,0.4)] cursor-pointer tracking-wider font-sans"
          >
            Join Now
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-zinc-400 hover:text-white p-2"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#07070a] border-b border-zinc-900/90 text-white overflow-hidden"
          >
            <div className="px-6 py-6 flex flex-col gap-5">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.name} className="flex flex-col">
                    <button
                      onClick={() => {
                        if (item.name === "Pages") {
                          setIsPagesDropdownOpen(!isPagesDropdownOpen);
                        } else {
                          handleNavItemClick(item.name);
                        }
                      }}
                      className={`text-left text-lg font-medium py-1.5 flex items-center gap-2.5 ${
                        activeTab === item.name ? "text-[#B369FE]" : "text-zinc-400"
                      }`}
                    >
                      <Icon className="w-5 h-5 opacity-70" />
                      <span>{item.name} {item.name === "Pages" && "▼"}</span>
                    </button>

                    {item.name === "Pages" && isPagesDropdownOpen && (
                      <div className="pl-5 mt-2 mb-1 flex flex-col gap-3 border-l border-zinc-850">
                        {pagesItems.map((pi) => {
                          const PiIcon = pi.icon;
                          return (
                            <button
                              key={pi.name}
                              onClick={() => {
                                setIsMobileMenuOpen(false);
                                setActiveTab(pi.name);
                              }}
                              className="text-left text-sm text-zinc-500 hover:text-white transition flex items-center gap-2"
                            >
                              <PiIcon className="w-4 h-4 text-zinc-600" />
                              <span>{pi.name}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}

              <div className="h-px bg-zinc-950 my-2" />

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onJoinClick();
                }}
                className="w-full py-3 rounded-lg text-center font-medium bg-gradient-to-r from-[#513FF5] to-[#B369FE] text-white hover:opacity-90 shadow-[0_4px_15px_rgba(81,63,245,0.2)]"
              >
                Join Now
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
