import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

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
      } relative rounded-full px-3 py-1.5 text-lg font-thin text-white outline-sky-400 transition focus-visible:outline-2`}
    >
      {isActive && (
        <motion.span
          layoutId="bubble"
          className="absolute  inset-0 z-10 bg-white text-white mix-blend-difference"
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

  const handleAfterfleaClick = () => {
    setActiveTab("home"); // Set the active tab to "home"
  };

  return (
    <header className="w-full p-4 custom-image">
      <div className="container mx-auto flex justify-between items-center py-4 px-8">
        <div className="z-10">
          <Link href="/" onClick={handleAfterfleaClick}>
            <h3 className="text-white text-lg font-normal hover:text-white/80 z-20 transition">
              Afterflea
            </h3>
          </Link>
        </div>
        <div className="flex z-10 space-x-1">
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
