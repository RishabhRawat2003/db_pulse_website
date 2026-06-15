"use client";

import {
  Download,
  CheckCircle,
  Sparkles,
  Terminal
} from "lucide-react";

function HeroSection() {
  return (
  <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28">
          <div className="absolute inset-0 -z-10 bg-linear-to-br from-primary/5 via-transparent to-white/40" />
          <div className="container-custom">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-1.5 mb-6 border border-primary/20">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-primary">Real-time query observability</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-dark mb-6 leading-tight">
                See every database query,<br />
                <span className="text-primary">tracked per API call</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8">
                DbPulse gives you full visibility: which API triggered which query, execution time, full query logs — for MongoDB, PostgreSQL and MySQL. Desktop + agent architecture.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#download" className="bg-primary text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all inline-flex items-center justify-center gap-2">
                  <Download className="w-5 h-5" /> Download for Desktop
                </a>
                <button className="border border-gray-300 bg-white text-dark px-8 py-3 rounded-full font-semibold hover:bg-gray-50 transition shadow-sm inline-flex items-center justify-center gap-2">
                  <Terminal className="w-5 h-5" /> View Agent Docs
                </button>
              </div>
              <div className="mt-10 flex flex-wrap justify-center gap-6 text-sm text-gray-500">
                <div className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> MongoDB ✓</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-gray-300" /> PostgreSQL (soon)</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-gray-300" /> MySQL (soon)</div>
                <div className="flex items-center gap-1"><CheckCircle className="w-4 h-4 text-primary" /> 7-day log retention</div>
              </div>
            </div>
          </div>
        </section>
  )
}

export default HeroSection