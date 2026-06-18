"use client";

import { Database, Server } from "lucide-react";

function SupportedDB() {
  return (
    <section className="py-12 sm:py-16 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2 sm:mb-3 text-dark">
          Works with your stack
        </h2>
        <p className="text-gray-500 text-sm sm:text-base mb-8 sm:mb-10">
          Monitor databases from your Node.js backend — easy integration.
        </p>
        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 md:gap-12 items-center">
          {/* MongoDB – Active */}
          <div className="flex flex-col items-center gap-2 min-w-25">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-50 rounded-2xl flex items-center justify-center">
              <Database className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <span className="font-medium text-sm sm:text-base">MongoDB</span>
            <span className="text-xs bg-green-100 text-primary px-2 py-0.5 rounded-full">
              Active
            </span>
          </div>

          {/* PostgreSQL – Coming soon */}
          <div className="flex flex-col items-center gap-2 opacity-50 min-w-25">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
              <Server className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400" />
            </div>
            <span className="font-medium text-sm sm:text-base">PostgreSQL</span>
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
              Coming soon
            </span>
          </div>

          {/* MySQL – Coming soon */}
          <div className="flex flex-col items-center gap-2 opacity-50 min-w-25">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gray-100 rounded-2xl flex items-center justify-center">
              <Database className="w-7 h-7 sm:w-8 sm:h-8 text-gray-400" />
            </div>
            <span className="font-medium text-sm sm:text-base">MySQL</span>
            <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">
              Coming soon
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SupportedDB;