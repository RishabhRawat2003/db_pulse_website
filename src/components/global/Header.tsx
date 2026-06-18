"use client";

import { useState } from "react";
import { Activity, Menu, X } from "lucide-react";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between flex-wrap gap-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
              <Activity className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-2xl tracking-tight text-dark">DbPulse</span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            <a href="/#download" className="text-gray-600 hover:text-primary transition">
              Download
            </a>
            <a href="/#features" className="text-gray-600 hover:text-primary transition">
              Features
            </a>
            <a href="/#how-it-works" className="text-gray-600 hover:text-primary transition">
              How it works
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile dropdown menu */}
        {menuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 shadow-lg">
            <div className="flex flex-col space-y-3">
              <a
                href="/#download"
                onClick={closeMenu}
                className="text-gray-600 hover:text-primary transition py-2 px-3 rounded-lg hover:bg-gray-50"
              >
                Download
              </a>
              <a
                href="/#features"
                onClick={closeMenu}
                className="text-gray-600 hover:text-primary transition py-2 px-3 rounded-lg hover:bg-gray-50"
              >
                Features
              </a>
              <a
                href="/#how-it-works"
                onClick={closeMenu}
                className="text-gray-600 hover:text-primary transition py-2 px-3 rounded-lg hover:bg-gray-50"
              >
                How it works
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}

export default Header;