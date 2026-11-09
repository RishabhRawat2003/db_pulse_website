"use client";

import { CheckCircle, ChevronRight, Terminal } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

function AgentIntegration() {
  const [copied, setCopied] = useState(false);

  const codeSnippet = `import { DBPulseAgent } from "dbpulse-agent";
    
DBPulseAgent.init({
  apiKey: "your-api-key",
  connectionId: "your-connection-id",
  debug: false,
});
    
import express from "express";
const app = express();
app.use(DBPulseAgent.trackRequests());`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="border-y border-line bg-field py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side – text content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/15 rounded-full px-3 py-1 text-primary text-sm font-medium mb-4 md:mb-5">
              <Terminal className="w-3 h-3" /> Node agent
            </div>
            <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mb-3 md:mb-4 text-dark">
              Drop the agent into your app
            </h2>
            <p className="text-muted text-base md:text-lg mb-4 md:mb-6">
              Add <code className="bg-canvas px-1 py-0.5 rounded text-primary">dbpulse-agent</code> before your database client and the desktop app starts receiving queries.
            </p>
            <ul className="space-y-2 text-[#c9c4bb] text-sm md:text-base">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                MongoDB via Mongoose, PostgreSQL via pg and Prisma
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                Python and Java agents use the same API key
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                Route and request ID stay attached to each query
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/pages/doc"
                className="bg-primary text-[#1a0d07] px-5 py-2.5 rounded-xl font-medium flex items-center gap-2 hover:brightness-110 transition"
              >
                Documentation <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right side – code block */}
          <div className="relative">
            <div className="relative rounded-2xl border border-line bg-card p-4">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2.5 h-2.5 rounded-full bg-primary/80"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-primary/40"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-white/15"></div>
                <span className="text-muted text-xs ml-2">app.ts</span>
              </div>
              <pre className="text-xs sm:text-sm text-[#d7d2c8] overflow-x-auto font-mono p-2 whitespace-pre-wrap break-all">
                <code>{`import { DBPulseAgent } from "dbpulse-agent";

DBPulseAgent.init({
  apiKey: "•••••••••••••",
  connectionId: "conn_abc123",
  debug: false,  true | false
});

app.use(DBPulseAgent.trackRequests());
// Queries from this process show up in DBPulse`}</code>
              </pre>
              <button
                onClick={copyToClipboard}
                className="absolute top-4 right-4 bg-card hover:bg-white/10 text-dark text-xs px-3 py-1 rounded-md flex items-center gap-1 transition border border-white/10"
              >
                {copied ? <CheckCircle className="w-3 h-3" /> : "Copy"}
                {copied ? "Copied!" : "Copy snippet"}
              </button>
            </div>
            {/* Decorative blur */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-primary/25 blur-3xl rounded-full -z-10 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgentIntegration;