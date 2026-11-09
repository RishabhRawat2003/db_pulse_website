"use client";

import { Database, Server } from "lucide-react";

function SupportedDB() {
  return (
    <section className="border-y border-line bg-field py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-3xl text-dark mb-2">Works with your stack</h2>
        <p className="text-muted text-sm sm:text-base mb-10">
          Agents for Node.js, Python, and Java.
        </p>
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15">
              <Database className="h-7 w-7 text-primary" />
            </div>
            <span className="font-medium">MongoDB</span>
            <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">Active</span>
          </div>
          <div className="flex flex-col items-center gap-2">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/15">
              <Server className="h-7 w-7 text-primary" />
            </div>
            <span className="font-medium">PostgreSQL</span>
            <span className="rounded-full bg-primary/15 px-2 py-0.5 text-xs text-primary">Active</span>
          </div>
          <div className="flex flex-col items-center gap-2 opacity-50">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/5">
              <Database className="h-7 w-7 text-muted" />
            </div>
            <span className="font-medium">MySQL</span>
            <span className="rounded-full bg-white/5 px-2 py-0.5 text-xs text-muted">Coming soon</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportedDB;
