"use client";

import { Download, CheckCircle, Sparkles, Terminal } from "lucide-react";
import Link from "next/link";

function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16 pb-20 md:pb-28">
      {/* Background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/5 via-transparent to-white/40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-6 border border-primary/20">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-primary">Real-time query observability</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-dark mb-6 leading-[1.1]">
            See every database query,<br />
            <span className="text-primary">tracked per API call</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 px-2">
            DbPulse gives you full visibility: which API triggered which query, execution time, full query logs — for MongoDB, PostgreSQL and MySQL. Desktop + agent architecture.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#download"
              className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2 hover:bg-primary-dark"
            >
              <Download className="w-5 h-5" /> Download for Desktop
            </a>
            <Link
              href="/pages/doc"
              className="border border-gray-300 bg-white text-dark px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition shadow-sm inline-flex items-center justify-center gap-2"
            >
              <Terminal className="w-5 h-5" /> View Documentation
            </Link>
          </div>

          {/* Feature badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-primary" /> MongoDB ✓
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-gray-300" /> PostgreSQL (soon)
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-gray-300" /> MySQL (soon)
            </div>
            <div className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4 text-primary" /> 7-day log retention
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;