"use client";

import { Code2, Download, Key } from "lucide-react";

function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl text-dark mb-3">Get started in minutes</h2>
          <p className="text-muted text-sm sm:text-base max-w-xl mx-auto">
            Desktop app, a connection, then the agent inside your service.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            {
              step: "1",
              title: "Install the desktop app",
              icon: <Download className="w-5 h-5" />,
              desc: "Download DBPulse, sign in, and add the database you want to watch.",
            },
            {
              step: "2",
              title: "Copy the API key",
              icon: <Key className="w-5 h-5" />,
              desc: "Each connection has an API key and a connection ID for the agent.",
            },
            {
              step: "3",
              title: "Add the agent",
              icon: <Code2 className="w-5 h-5" />,
              desc: "Initialize dbpulse-agent before the database client. Queries show up in the app.",
            },
          ].map((item) => (
            <div key={item.step} className="rounded-2xl border border-line bg-card p-6">
              <div className="mb-4 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-semibold text-on-accent">
                {item.step}
              </div>
              <div className="mb-3 text-primary">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-dark">{item.title}</h3>
              <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
