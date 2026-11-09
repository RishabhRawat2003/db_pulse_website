"use client";

import { Database, Zap, Lock, BarChart3, Code2, Clock } from "lucide-react";

function FeaturesGrid() {
  return (
    <section id="features" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl text-dark mb-3">
            Designed for engineering teams
          </h2>
          <p className="text-muted text-sm sm:text-base max-w-2xl mx-auto">
            Pinpoint slow queries, tie them to the route that ran them, and keep the log next to the request.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: <Database className="w-5 h-5" />, title: "Multi-database support", desc: "MongoDB and PostgreSQL in one dashboard. MySQL is on the way." },
            { icon: <Zap className="w-5 h-5" />, title: "Query execution time", desc: "Duration on every query, so slow calls stand out immediately." },
            { icon: <Code2 className="w-5 h-5" />, title: "API to query mapping", desc: "Each query keeps the route, method, and request that triggered it." },
            { icon: <Clock className="w-5 h-5" />, title: "Log retention", desc: "Search recent logs in the desktop app. Free plans keep 7 days." },
            { icon: <Lock className="w-5 h-5" />, title: "Secure by design", desc: "API keys and a connection ID. The agent runs inside your app." },
            { icon: <BarChart3 className="w-5 h-5" />, title: "Readable SQL", desc: "Queries are formatted so ORM output is easier to scan." },
          ].map((feat) => (
            <div
              key={feat.title}
              className="rounded-2xl border border-line bg-card p-6 transition hover:border-primary/40"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-chip text-primary">
                {feat.icon}
              </div>
              <h3 className="text-lg font-semibold mb-1.5 text-dark">{feat.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesGrid;
