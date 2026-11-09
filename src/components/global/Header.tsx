"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  const linkClass = "text-muted hover:text-dark transition";

  return (
    <nav className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between flex-wrap gap-3">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
          </span>
          <span className="font-display text-2xl tracking-tight text-dark">DBPulse</span>
        </Link>

        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="/#download" className={linkClass}>Download</a>
          <a href="/#features" className={linkClass}>Features</a>
          <a href="/#how-it-works" className={linkClass}>How it works</a>
          <Link href="/pages/doc" className={linkClass}>Documentation</Link>
        </div>

        <button
          className="md:hidden p-2 rounded-lg text-muted hover:bg-white/5 hover:text-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-white/10 bg-card py-4 px-4">
          <div className="flex flex-col space-y-1 text-sm">
            <a href="/#download" onClick={closeMenu} className="text-muted hover:text-dark py-2 px-3 rounded-lg hover:bg-white/5">Download</a>
            <a href="/#features" onClick={closeMenu} className="text-muted hover:text-dark py-2 px-3 rounded-lg hover:bg-white/5">Features</a>
            <a href="/#how-it-works" onClick={closeMenu} className="text-muted hover:text-dark py-2 px-3 rounded-lg hover:bg-white/5">How it works</a>
            <Link href="/pages/doc" onClick={closeMenu} className="text-muted hover:text-dark py-2 px-3 rounded-lg hover:bg-white/5">Documentation</Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Header;
