"use client";

import {
  Database,
  Zap,
  Lock,
  BarChart3,
  Code2,
  Clock
} from "lucide-react";

function FeaturesGrid() {
  return (
    <section id="features" className="py-12 sm:py-16 md:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-14">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-dark mb-3 sm:mb-4">
            Designed for engineering teams
          </h2>
          <p className="text-gray-600 text-sm sm:text-base max-w-2xl mx-auto px-2">
            Pinpoint slow queries, correlate with API endpoints, and optimize database performance.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {[
            { icon: <Database className="w-6 h-6 sm:w-7 sm:h-7" />, title: "Multi-database support", desc: "MongoDB (fully working), PostgreSQL & MySQL (coming). One unified dashboard." },
            { icon: <Zap className="w-6 h-6 sm:w-7 sm:h-7" />, title: "Query Execution Time", desc: "Real-time duration, average, p95 — spot bottlenecks instantly." },
            { icon: <Code2 className="w-6 h-6 sm:w-7 sm:h-7" />, title: "API ↔ Query Mapping", desc: "Every query is tied to the exact API route / controller that triggered it." },
            { icon: <Clock className="w-6 h-6 sm:w-7 sm:h-7" />, title: "7-day Log Retention", desc: "Historical log explorer with filters, search, and export." },
            { icon: <Lock className="w-6 h-6 sm:w-7 sm:h-7" />, title: "Secure by design", desc: "API keys, connection ID, local-first desktop app — your data stays safe." },
            { icon: <BarChart3 className="w-6 h-6 sm:w-7 sm:h-7" />, title: "Performance Metrics", desc: "Query frequency, slow log insights, and visual dashboards." },
          ].map((feat, idx) => (
            <div
              key={idx}
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition duration-300 group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4 sm:mb-5 group-hover:scale-105 transition">
                {feat.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-1.5 text-dark">{feat.title}</h3>
              <p className="text-gray-500 text-sm sm:text-base leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesGrid;