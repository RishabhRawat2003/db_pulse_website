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
    <section className="py-12 md:py-16 lg:py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left side – text content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-3 py-1 text-primary text-sm font-medium mb-4 md:mb-5">
              <Terminal className="w-3 h-3" /> MongoDB Agent
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 md:mb-4">
              MongoDB + Node.js integration
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-4 md:mb-6">
              Add <code className="bg-gray-800 px-1 py-0.5 rounded text-primary">dbpulse-agent</code> to your Node.js/Express app and start receiving MongoDB query logs in real time.
            </p>
            <ul className="space-y-2 text-gray-300 text-sm md:text-base">
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                Currently supports <strong>Mongoose</strong> and the <strong>MongoDB native driver</strong>
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                Zero performance overhead in production mode
              </li>
              <li className="flex gap-2">
                <CheckCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                Simple setup with minimal configuration
              </li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/pages/doc"
                className="bg-white text-dark px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition"
              >
                Documentation <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Right side – code block */}
          <div className="relative">
            <div className="bg-gray-950 rounded-xl border border-gray-700 p-4 shadow-2xl relative">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-gray-400 text-xs ml-2">dbpulse-agent/init.js</span>
              </div>
              <pre className="text-xs sm:text-sm text-gray-200 overflow-x-auto font-mono p-2 whitespace-pre-wrap break-all">
                <code>{`import { DBPulseAgent } from "dbpulse-agent";

DBPulseAgent.init({
  apiKey: "•••••••••••••",
  connectionId: "conn_abc123",
  debug: false,  true | false
});

app.use(DBPulseAgent.trackRequests());
// Now every MongoDB query is tracked 🚀`}</code>
              </pre>
              <button
                onClick={copyToClipboard}
                className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white text-xs px-3 py-1 rounded-md flex items-center gap-1 transition"
              >
                {copied ? <CheckCircle className="w-3 h-3" /> : "Copy"}
                {copied ? "Copied!" : "Copy snippet"}
              </button>
            </div>
            {/* Decorative blur */}
            <div className="absolute -bottom-6 -right-6 w-28 h-28 bg-primary/20 blur-3xl rounded-full -z-10 hidden sm:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AgentIntegration;