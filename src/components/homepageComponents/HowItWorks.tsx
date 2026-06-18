"use client";

import { Code2, Download, Key } from "lucide-react";

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-dark">
            Get started in minutes
          </h2>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Simple three-step flow from desktop app to production agent.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              step: "1",
              title: "Install Desktop App",
              icon: <Download className="w-5 h-5 sm:w-6 sm:h-6" />,
              desc: "Download DbPulse for Windows or Mac, sign up, and add your database connection string (MongoDB ready)."
            },
            {
              step: "2",
              title: "Get API Key & Connection ID",
              icon: <Key className="w-5 h-5 sm:w-6 sm:h-6" />,
              desc: "After adding connection, you'll receive unique credentials to authenticate the agent."
            },
            {
              step: "3",
              title: "Integrate Agent in Backend",
              icon: <Code2 className="w-5 h-5 sm:w-6 sm:h-6" />,
              desc: "Install dbpulse-agent, initialize with API key, and add middleware — queries are tracked instantly."
            },
          ].map((item) => (
            <div
              key={item.step}
              className="relative p-5 sm:p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition"
            >
              <div className="absolute -top-4 left-6 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">
                {item.step}
              </div>
              <div className="mt-4 mb-3 text-primary">{item.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 text-dark">
                {item.title}
              </h3>
              <p className="text-gray-500 text-sm sm:text-base">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;