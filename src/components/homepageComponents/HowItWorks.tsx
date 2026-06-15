"use client";

import {
  Code2,
  Download
} from "lucide-react";

function Key(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 18v3c0 .6.4 1 1 1h4v-3h3v-3h2l1.4-1.4a6.5 6.5 0 1 0-4-4Z" /><circle cx="16.5" cy="9.5" r="2.5" /></svg>
  );
}

function HowItWorks() {
  return (
      <section id="how-it-works" className="py-20 bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-3">Get started in minutes</h2>
              <p className="text-gray-500 max-w-xl mx-auto">Simple three-step flow from desktop app to production agent.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Install Desktop App", icon: <Download className="w-6 h-6" />, desc: "Download DbPulse for Windows or Mac, sign up, and add your database connection string (MongoDB ready)." },
                { step: "2", title: "Get API Key & Connection ID", icon: <Key className="w-6 h-6" />, desc: "After adding connection, you'll receive unique credentials to authenticate the agent." },
                { step: "3", title: "Integrate Agent in Backend", icon: <Code2 className="w-6 h-6" />, desc: "Install dbpulse-agent, initialize with API key, and add middleware — queries are tracked instantly." },
              ].map((item) => (
                <div key={item.step} className="relative p-6 rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition">
                  <div className="absolute -top-4 left-6 bg-primary text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">{item.step}</div>
                  <div className="mt-4 mb-3 text-primary">{item.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
  )
}

export default HowItWorks