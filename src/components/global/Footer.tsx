"use client";

import { Activity } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-center items-center gap-6">
          {/* Left side: Logo + copyright */}
          <div className="flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            <span className="font-bold text-dark text-lg">DbPulse</span>
            <span className="text-gray-400 text-sm ml-2">© 2026</span>
          </div>
        </div>

        {/* Bottom tagline */}
        <div className="text-center text-xs text-gray-400 mt-8 max-w-2xl mx-auto">
          Track queries from MongoDB, PostgreSQL, MySQL — Desktop application + agent.
          <span className="block sm:inline"> Currently MongoDB fully implemented.</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;