"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { Menu } from "lucide-react";
const tabs = [
  { id: "home", label: "home", href: "/" },
  { id: "about", label: "about", href: "about" },
  { id: "contact", label: "contact", href: "contact" },
  { id: "sectors", label: "sectors", href: "sectors" },
];

const TabLink = ({ tab, isActive, onClick }) => {
  return (
    <Link
      href={`/${tab.href}`}
      onClick={() => onClick(tab.id)}
      className={`${
        isActive ? "" : "hover:text-white/60"
      } relative  my-8  text-xl md:mt-0 rounded-full px-3 py-1.5 md:flex  sm:text-lg  font-thin text-white outline-sky-400 transition  focus-visible:outline-2`}
    >
      {isActive && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-white text-white mix-blend-difference"
          style={{ borderRadius: 9999 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {tab.label}
    </Link>
  );
};

const Header = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [activeTab, setActiveTab]);

  const handleAfterfleaClick = () => {
    setActiveTab("home");
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="w-full p-4 custom-image relative">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="z-10">
          <Link href="/" onClick={handleAfterfleaClick}>
            <h3 className="text-white text-lg font-normal hover:text-white/80 z-20 transition">
              Afterflea
            </h3>
          </Link>
        </div>
        <div className="md:hidden z-50">
          <button
            className="text-white p-2"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <Menu size={28} />
          </button>
        </div>
        <div
          className={`menu flex z-50 space-x-1 md:flex ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          {tabs.map((tab) => (
            <TabLink
              key={tab.id}
              tab={tab}
              isActive={activeTab === tab.id}
              onClick={setActiveTab}
            />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
