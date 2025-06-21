"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [menuOpen]);

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
    <>
      <nav className="fixed top-0 left-0 right-0 flex items-center justify-between p-4 md:py-3 md:px-6 lg:py-4 lg:px-8 w-full bg-black/80 backdrop-blur-sm border-b border-gray-800/50 z-50">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="EAK Logo"
            width={60}
            height={60}
            className="object-contain md:w-[60px] md:h-[60px]"
            priority
          />
        </Link>
        <div className="flex-1" />

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-24 pr-4 lg:pr-8">
          <a
            href="#about"
            onClick={(e) => handleLinkClick(e, "about")}
            className="text-gray-400 hover:text-white transition-colors text-base lg:text-lg font-normal"
          >
            About
          </a>
          <a
            href="#agenda"
            onClick={(e) => handleLinkClick(e, "agenda")}
            className="text-gray-400 hover:text-white transition-colors text-base lg:text-lg font-normal"
          >
            Agenda
          </a>
          <a
            href="#mentors"
            onClick={(e) => handleLinkClick(e, "mentors")}
            className="text-gray-400 hover:text-white transition-colors text-base lg:text-lg font-normal"
          >
            Mentors
          </a>
          <a
            href="#testimonials"
            onClick={(e) => handleLinkClick(e, "testimonials")}
            className="text-gray-400 hover:text-white transition-colors text-base lg:text-lg font-normal"
          >
            Testimonials
          </a>
        </div>

        {/* Mobile Menu Toggle Button */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 focus:outline-none relative z-[60] touch-manipulation"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <div className="relative w-6 h-6 flex items-center justify-center">
              <span className="absolute block w-6 h-0.5 bg-white transform rotate-45 transition-all duration-300"></span>
              <span className="absolute block w-6 h-0.5 bg-white transform -rotate-45 transition-all duration-300"></span>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-1.5">
              <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
              <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
              <span className="block w-6 h-0.5 bg-white transition-all duration-300"></span>
            </div>
          )}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/95 backdrop-blur-sm flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden z-[55] touch-manipulation"
          onClick={(e) => {
            // Close menu when clicking on the overlay background
            if (e.target === e.currentTarget) {
              setMenuOpen(false);
            }
          }}
        >
          <div className="flex flex-col items-center space-y-8 w-full px-8">
            <a
              href="#about"
              onClick={(e) => handleLinkClick(e, "about")}
              className="text-gray-200 hover:text-white text-3xl font-semibold transition-colors text-center w-full py-4 border-b border-gray-700/50 hover:border-gray-500/50"
            >
              About
            </a>
            <a
              href="#agenda"
              onClick={(e) => handleLinkClick(e, "agenda")}
              className="text-gray-200 hover:text-white text-3xl font-semibold transition-colors text-center w-full py-4 border-b border-gray-700/50 hover:border-gray-500/50"
            >
              Agenda
            </a>
            <a
              href="#mentors"
              onClick={(e) => handleLinkClick(e, "mentors")}
              className="text-gray-200 hover:text-white text-3xl font-semibold transition-colors text-center w-full py-4 border-b border-gray-700/50 hover:border-gray-500/50"
            >
              Mentors
            </a>
            <a
              href="#testimonials"
              onClick={(e) => handleLinkClick(e, "testimonials")}
              className="text-gray-200 hover:text-white text-3xl font-semibold transition-colors text-center w-full py-4 border-b border-gray-700/50 hover:border-gray-500/50"
            >
              Testimonials
            </a>
          </div>
        </div>
      )}
    </>
  );
}
