"use client";

import {
    CheckCircle,
    ChevronRight,
    Terminal
} from "lucide-react";
import { useState } from "react";

function AgentIntegration() {
    const [copied, setCopied] = useState(false);

    const codeSnippet = `import { DBPulseAgent } from "dbpulse-agent";
    
    DBPulseAgent.init({
      apiKey: "your-api-key",
      connectionId: "your-connection-id",
      envType: "prod",     // "dev" | "prod" | "staging" | "test" | "local"
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
        <section className="py-16 bg-gray-900 text-white">
            <div className="container-custom">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 bg-primary/20 rounded-full px-3 py-1 text-primary text-sm font-medium mb-5">
                            <Terminal className="w-3 h-3" /> Lightweight agent
                        </div>
                        <h2 className="text-3xl font-bold mb-4">One-line integration</h2>
                        <p className="text-gray-300 text-lg mb-6">
                            Add <code className="bg-gray-800 px-1 py-0.5 rounded text-primary">dbpulse-agent</code> to your Node.js/Express app and start receiving query logs in real time.
                        </p>
                        <ul className="space-y-2 text-gray-300">
                            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0" /> Automatic query interception for Mongoose, MongoDB native, and soon Prisma/Sequelize</li>
                            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0" /> Zero performance overhead in production mode</li>
                            <li className="flex gap-2"><CheckCircle className="w-5 h-5 text-primary shrink-0" /> Supports dev/prod/staging environment tagging</li>
                        </ul>
                        <div className="mt-6 flex gap-4">
                            <button className="bg-white text-dark px-5 py-2 rounded-lg font-medium flex items-center gap-2 hover:bg-gray-100 transition">Documentation <ChevronRight className="w-4 h-4" /></button>
                        </div>
                    </div>
                    <div className="relative">
                        <div className="bg-gray-950 rounded-xl border border-gray-700 p-4 shadow-2xl">
                            <div className="flex items-center gap-2 mb-3">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                <span className="text-gray-400 text-xs ml-2">dbpulse-agent/init.js</span>
                            </div>
                            <pre className="text-sm text-gray-200 overflow-x-auto font-mono p-2"><code>{`import { DBPulseAgent } from "dbpulse-agent";

DBPulseAgent.init({
  apiKey: "•••••••••••••",
  connectionId: "conn_abc123",
  apiUrl: "https://your-dbpulse.com/api",
  envType: "prod",
});

app.use(DBPulseAgent.trackRequests());
// Now every DB query is tracked 🚀`}</code></pre>
                            <button onClick={copyToClipboard} className="absolute top-4 right-4 bg-gray-800 hover:bg-gray-700 text-white text-xs px-3 py-1 rounded-md flex items-center gap-1">
                                {copied ? <CheckCircle className="w-3 h-3" /> : "Copy"}
                                {copied ? "Copied!" : "Copy snippet"}
                            </button>
                        </div>
                        <div className="absolute -bottom-4 -right-4 w-28 h-28 bg-primary/20 blur-3xl rounded-full -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AgentIntegration