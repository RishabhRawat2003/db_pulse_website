'use client'

import { useState, useEffect } from 'react'
import { Activity, X } from 'lucide-react'   // make sure lucide-react is installed

// ─── Sidebar navigation items ───
const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'mongodb', label: 'MongoDB' },
  { id: 'postgresql', label: 'PostgreSQL' },
  { id: 'mysql', label: 'MySQL' },
]

export default function DocsPage() {
  const [activeId, setActiveId] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  // Intersection Observer to highlight active section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  // Close sidebar on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Mobile header – visible only on small screens */}
      <header className="sticky top-0 z-40 bg-white border-b border-gray-200 px-4 py-3 md:hidden flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="font-bold text-2xl tracking-tight text-dark">DbPulse</span>
        </div>
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-600"
          aria-label="Toggle navigation"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </header>

      <div className="flex max-w-7xl mx-auto pt-6 px-4 md:px-6 lg:px-8">
        {/* ─── BACKDROP ─── */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* ─── SIDEBAR ─── */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-50 w-72  p-6 overflow-y-auto
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0 md:relative md:z-auto md:w-64 md:min-h-screen 
            lg:w-72 md:sticky md:top-22 md:self-start
          `}
          style={{ minHeight: '100vh' }}
        >
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                <Activity className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-2xl tracking-tight text-dark">DbPulse</span>
            </div>
            {/* Close button inside sidebar (mobile) */}
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 text-gray-600"
              aria-label="Close sidebar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <nav className="space-y-1">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setSidebarOpen(false)}
                className={`
                  block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors
                  ${activeId === item.id
                    ? 'bg-primary/10 text-primary border-l-2 border-primary'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-12 pt-6 border-t border-gray-200 text-xs text-gray-500">
            <p>v2.0.0 · Open source</p>
            <div className="mt-2 flex gap-4">
              <a href="#" className="hover:text-primary transition">GitHub</a>
              <a href="#" className="hover:text-primary transition">Download</a>
            </div>
          </div>
        </aside>

        {/* ─── MAIN CONTENT ─── */}
        <main className="flex-1 px-0 py-10 md:py-12 md:px-8 lg:px-12 max-w-4xl">
          <div className="prose prose-gray max-w-none">
            {/* Overview */}
            <section id="overview" className="scroll-mt-20">
              <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900">Documentation</h1>
              <p className="text-base md:text-lg text-gray-600 mt-2">
                DbPulse gives you real-time visibility into every database query hitting your APIs.
                Track performance, identify bottlenecks, and monitor your databases effortlessly.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-1.5 bg-green-100 text-green-800 px-3 py-1 rounded-full font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-600"></span> MongoDB active
                </span>
                <span className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> PostgreSQL coming soon
                </span>
                <span className="inline-flex items-center gap-1.5 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-yellow-500"></span> MySQL coming soon
                </span>
              </div>
            </section>

            {/* MongoDB */}
            <section id="mongodb" className="scroll-mt-20 mt-16">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-gray-900">
                <span>🍃</span> MongoDB <span className="text-sm font-normal text-green-600">● Active</span>
              </h2>

              {/* Setup */}
              <h3 className="text-xl md:text-2xl font-bold mt-6 text-gray-900">Setup</h3>
              <p className="text-gray-600">
                Follow these steps to start tracking MongoDB queries in your Node.js application.
              </p>
              <ol className="list-decimal list-inside space-y-4 mt-4 text-gray-700">
                <li>
                  <strong>Download the DbPulse desktop app</strong> for your platform.
                  <a href="/#download" className="text-primary hover:underline ml-2 inline-flex items-center gap-1">
                    <span>Get it here</span>
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </a>
                </li>
                <li>
                  <strong>Sign up</strong> and add your MongoDB connection string. You’ll receive an <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">apiKey</code> and <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">connectionId</code>.
                </li>
                <li>
                  <strong>Install the agent</strong> in your project:
                  <div className="bg-gray-900 text-gray-200 border border-gray-700 rounded-lg p-3 mt-2 overflow-x-auto">
                    <code className="text-sm font-mono text-green-400 whitespace-nowrap">npm install dbpulse-agent</code>
                  </div>
                </li>
                <li>
                  <strong>Initialize</strong> the agent with your credentials (see the full example below).
                </li>
                <li>
                  <strong>Add middleware</strong> to your Express app (see the full example below).
                </li>
              </ol>
              <p className="mt-4 text-gray-600">
                That’s it — DbPulse will now capture every MongoDB query with API context and execution time.
                Logs are retained for <strong className="text-gray-900">7 days</strong>.
              </p>

              {/* Full Implementation Example */}
              <h3 className="text-xl md:text-2xl font-bold mt-8 text-gray-900">Full Implementation</h3>
              <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg mb-4">
                <p className="text-sm text-gray-700">
                  <span className="font-semibold">Current support:</span> The agent is available for <strong>Node.js</strong> applications using <strong>MongoDB</strong>.
                </p>
              </div>
              <p className="text-gray-600">
                Add the following code to your main server file (e.g., <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">app.js</code> or <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">index.ts</code>):
              </p>
              <div className="mt-4 bg-gray-900 text-gray-200 border border-gray-700 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-gray-300 whitespace-pre-wrap">
                  {`import { DBPulseAgent } from "dbpulse-agent";

DBPulseAgent.init({
  apiKey: "your-api-key",
  connectionId: "your-connection-id",
  envType: "prod",     // "dev" | "prod" | "staging" | "test" | "local"
  debug: false,
});

import express from "express";
const app = express();
app.use(DBPulseAgent.trackRequests());`}
                </pre>
              </div>

              <h4 className="text-base md:text-lg font-semibold mt-6 text-gray-800">Environment types</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li><code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">dev</code> – development, logs are verbose</li>
                <li><code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">prod</code> – production, minimal overhead</li>
                <li><code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">staging</code> – staging environment</li>
                <li><code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">test</code> – test suite</li>
                <li><code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">local</code> – local development with extended debug</li>
              </ul>
              <p className="mt-4 text-sm text-gray-500">
                <strong>Note:</strong> The agent automatically detects your MongoDB driver and only tracks queries when a connection is active.
              </p>

              {/* Tracking features */}
              <h4 className="text-base md:text-lg font-semibold mt-8 text-gray-800">Tracking features</h4>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Every <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">find</code>, <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">insert</code>, <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">update</code>, <code className="bg-gray-200 px-1.5 py-0.5 rounded text-xs">delete</code> and aggregation</li>
                <li>Execution time (ms) per query</li>
                <li>Correlated with the API endpoint that triggered it</li>
                <li>Filterable logs by database, collection, and time range</li>
              </ul>

              {/* Updated Example Log Entry – matches the actual log display */}
              <h4 className="text-base md:text-lg font-semibold mt-8 text-gray-800">Example log entry</h4>
              <div className="bg-gray-100 border border-gray-200 rounded-lg p-4">
                <p className="text-sm text-gray-600">As displayed in the desktop app:</p>
                <div className="mt-3 bg-[#1a1f24] rounded-lg p-3 font-mono text-xs text-gray-300 overflow-x-auto border border-gray-700">
                  <div className="flex items-center gap-3 text-xs min-w-max">
                    <span className="text-zinc-600 w-44 shrink-0">14:23:45</span>
                    <span className="border border-emerald-600/50 rounded px-1.5 py-0.5 text-[10px] tracking-wider uppercase text-emerald-400 bg-emerald-500/10">MDB</span>
                    <span className="border border-green-500/20 rounded px-1.5 py-0.5 text-[10px] tracking-wider uppercase text-green-400 bg-green-500/15">PROD</span>
                    <span className="w-24 shrink-0 font-bold text-blue-400">GET</span>
                    <span className="text-zinc-300 w-32 shrink-0 truncate">users</span>
                    <span className="w-16 text-right shrink-0 font-bold text-emerald-400">12ms</span>
                    <span className="text-zinc-600 w-28 text-right shrink-0 truncate">192.168.1.1</span>
                  </div>
                  <div className="mt-3 border-t border-zinc-700/50 pt-3 space-y-1">
                    <div className="text-emerald-400 text-[11px]">📁 Collection: <span className="font-mono">users</span></div>
                    <div className="text-blue-400 text-[11px]">📍 Route: <span className="font-mono">/api/users</span></div>
                    <pre className="bg-zinc-900 border border-zinc-700 rounded p-2 text-[11px] text-zinc-300 overflow-x-auto whitespace-pre-wrap break-all">
                      {`{
  "filter": { "status": "active" },
  "projection": { "name": 1, "email": 1 }
}`}
                    </pre>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  Each log row shows timestamp, database type, environment, HTTP method, collection/table, query preview, duration, and client IP.
                  Click to expand for full query details.
                </p>
              </div>
            </section>

            {/* PostgreSQL */}
            <section id="postgresql" className="scroll-mt-20 mt-16 opacity-70">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-gray-900">
                <span>🐘</span> PostgreSQL <span className="text-sm font-normal text-yellow-600">● Coming soon</span>
              </h2>
              <p className="text-gray-600">
                PostgreSQL support is in active development. Expected release: <strong className="text-gray-900">Q2 2026</strong>.
              </p>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800 flex items-center gap-2">
                  <span>🚧</span> We’re working on full integration with pg driver and connection pooling.
                </p>
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-500">
                <li>Planned: query parsing, parameterized queries, and execution plans</li>
                <li>Will support all major PostgreSQL versions (12+)</li>
              </ul>
            </section>

            {/* MySQL */}
            <section id="mysql" className="scroll-mt-20 mt-16 opacity-70">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-gray-900">
                <span>🐬</span> MySQL <span className="text-sm font-normal text-yellow-600">● Coming soon</span>
              </h2>
              <p className="text-gray-600">
                MySQL support is planned after PostgreSQL. Expected release: <strong className="text-gray-900">Q3 2026</strong>.
              </p>
              <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <p className="text-sm text-yellow-800 flex items-center gap-2">
                  <span>📋</span> We’ll support both mysql2 and native mysql packages.
                </p>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  )
}