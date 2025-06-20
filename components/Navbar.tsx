"use client";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-6 md:p-8 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800/50 z-50">
      <div className="flex items-center">
        <Image
          src="/logo.png"
          alt="EAK Logo"
          width={80}
          height={80}
          className="object-contain"
          priority
        />
      </div>
      <div className="flex-1" />
      {/* Desktop Nav */}
      <div className="hidden md:flex items-center space-x-24 pr-8">
        <a
          href="#about"
          onClick={(e) => handleLinkClick(e, "about")}
          className="text-gray-400 hover:text-white transition-colors text-lg font-normal"
        >
          About
        </a>
        <a
          href="#agenda"
          onClick={(e) => handleLinkClick(e, "agenda")}
          className="text-gray-400 hover:text-white transition-colors text-lg font-normal"
        >
          Agenda
        </a>
        <a
          href="#mentors"
          onClick={(e) => handleLinkClick(e, "mentors")}
          className="text-gray-400 hover:text-white transition-colors text-lg font-normal"
        >
          Mentors
        </a>
        <a
          href="#testimonials"
          onClick={(e) => handleLinkClick(e, "testimonials")}
          className="text-gray-400 hover:text-white transition-colors text-lg font-normal"
        >
          Testimonials
        </a>
      </div>
      {/* Menu Toggle Button */}
      <button
        className="md:hidden flex items-center justify-center w-10 h-10 focus:outline-none z-50"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="transition-all duration-300"
          >
            <line
              x1="18"
              y1="6"
              x2="6"
              y2="18"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="6"
              y1="6"
              x2="18"
              y2="18"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          <div className="flex flex-col justify-center items-center gap-1.5">
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
            <span className="block w-8 h-0.5 bg-white"></span>
          </div>
        )}
      </button>
      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black/90 flex flex-col items-center justify-center space-y-10 transition-all duration-300 md:hidden z-40">
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, "about")}
            className="text-gray-200 hover:text-white text-2xl font-semibold transition-colors"
          >
            About
          </a>
          <a
            href="#agenda"
            onClick={(e) => handleLinkClick(e, "agenda")}
            className="text-gray-200 hover:text-white text-2xl font-semibold transition-colors"
          >
            Agenda
          </a>
          <a
            href="#mentors"
            onClick={(e) => handleLinkClick(e, "mentors")}
            className="text-gray-200 hover:text-white text-2xl font-semibold transition-colors"
          >
            Mentors
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleLinkClick(e, "testimonials")}
            className="text-gray-200 hover:text-white text-2xl font-semibold transition-colors"
          >
            Testimonials
          </a>
        </div>
      )}
    </nav>
  );
}
