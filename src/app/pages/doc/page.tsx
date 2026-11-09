'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

const navItems = [
  { id: 'overview', label: 'Overview' },
  { id: 'mongodb', label: 'MongoDB' },
  { id: 'postgresql', label: 'PostgreSQL' },
  { id: 'postgresql-nodejs', label: '→ Node.js' },
  { id: 'postgresql-python', label: '→ Python' },
  { id: 'mysql', label: 'MySQL' },
]

export default function DocsPage() {
  const [activeId, setActiveId] = useState('overview')
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { rootMargin: '-20% 0px -60% 0px' }
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSidebarOpen(false)
    }
    document.addEventListener('keydown', handleEscape)
    return () => document.removeEventListener('keydown', handleEscape)
  }, [])

  return (
    <div className="min-h-screen bg-canvas text-dark">

      <div className="flex max-w-7xl mx-auto pt-6 px-4 md:px-6 lg:px-8">
        {/* Backdrop */}
        {sidebarOpen && (
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={() => setSidebarOpen(false)}
            aria-hidden="true"
          />
        )}

        <aside
          className={`
            fixed inset-y-0 left-0 z-50 w-72 bg-card p-6 overflow-y-auto
            transform transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            md:translate-x-0 md:relative md:z-auto md:w-64 md:bg-transparent
            lg:w-72 md:sticky md:top-22 md:h-fit md:self-start md:overflow-y-visible
          `}
        >
          <div className="flex items-center justify-between mb-8 md:mb-10">
            <div className="flex items-center gap-2.5">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
              </span>
              <span className="font-display text-2xl tracking-tight text-dark">DBPulse</span>
            </div>
            <button
              onClick={() => setSidebarOpen(false)}
              className="md:hidden p-2 rounded-lg hover:bg-white/5 text-[#a7aca6]"
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
                  ${item.id.startsWith('postgresql-') ? 'pl-8 text-[13px]' : ''}
                  ${activeId === item.id
                    ? 'bg-primary/10 text-primary border-l-2 border-primary'
                    : 'text-[#a7aca6] hover:text-[#f4f1ea] hover:bg-white/5'
                  }
                `}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="mt-12 pt-6 border-t border-white/10 text-xs text-muted">
            <p>v2.0.0 · Open source</p>
            <div className="mt-2 flex gap-4">
              <a href="#" className="hover:text-primary transition">GitHub</a>
              <a href="#" className="hover:text-primary transition">Download</a>
            </div>
          </div>
        </aside>

        {/* ─── MAIN CONTENT ───
          FIX 4: Added `min-w-0` — critical for flex children. Without it, a flex child's
                  min-width defaults to `auto` (its content's intrinsic width), which lets
                  wide <pre>/<code> blocks push the element beyond the flex container's bounds.
                  `min-w-0` overrides this to allow the child to shrink below its content size,
                  letting overflow-x-auto on inner elements do its job.
        */}
        <main className="flex-1 min-w-0 px-0 py-10 md:py-12 md:px-8 lg:px-12">
          <div className="max-w-none">

            {/* Overview */}
            <section id="overview" className="scroll-mt-20">
              <h1 className="font-display text-3xl md:text-4xl tracking-tight text-dark">Documentation</h1>
              <p className="text-base md:text-lg text-[#a7aca6] mt-2">
                DbPulse gives you real-time visibility into every database query hitting your APIs.
                Track performance, identify bottlenecks, and monitor your databases effortlessly.
              </p>
              <div className="mt-6 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-1.5 bg-primary/15 text-primary px-3 py-1 rounded-full font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> MongoDB active
                </span>
                <span className="inline-flex items-center gap-1.5 bg-primary/15 text-primary px-3 py-1 rounded-full font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary"></span> PostgreSQL active
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/5 text-muted px-3 py-1 rounded-full font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-muted"></span> MySQL coming soon
                </span>
              </div>
            </section>

            {/* MongoDB */}
            <section id="mongodb" className="scroll-mt-20 mt-16">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-dark">
                <span>🍃</span> MongoDB <span className="text-sm font-normal text-primary">● Active</span>
              </h2>

              <h3 className="text-xl md:text-2xl font-bold mt-6 text-dark">Setup</h3>
              <p className="text-[#a7aca6]">
                Follow these steps to start tracking MongoDB queries in your Node.js application.
              </p>
              <ol className="list-decimal list-inside space-y-4 mt-4 text-[#c9c4bb]">
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
                  <strong>Sign up</strong> and add your MongoDB connection string. You'll receive an{' '}
                  <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">apiKey</code> and{' '}
                  <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">connectionId</code>.
                </li>
                <li>
                  <strong>Install the agent</strong> in your project:
                  {/* FIX 5: Added overflow-x-auto to all code blocks so they scroll
                      horizontally on narrow screens instead of pushing the layout. */}
                  <div className="bg-canvas text-[#e7e2d8] border border-white/10 rounded-lg p-3 mt-2 overflow-x-auto">
                    <code className="text-sm font-mono text-[#ffb089] whitespace-nowrap">npm install dbpulse-agent</code>
                  </div>
                </li>
                <li><strong>Initialize</strong> the agent with your credentials (see the full example below).</li>
                <li><strong>Add middleware</strong> to your Express app (see the full example below).</li>
              </ol>
              <p className="mt-4 text-[#a7aca6]">
                That's it — DbPulse will now capture every MongoDB query with API context and execution time.
                Logs are retained for <strong className="text-dark">7 days</strong>.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-8 text-dark">Full Implementation</h3>
              <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg mb-4">
                <p className="text-sm text-[#c9c4bb]">
                  <span className="font-semibold">Current support:</span> The agent is available for{' '}
                  <strong>Node.js</strong> applications using <strong>MongoDB</strong>.
                </p>
              </div>
              <p className="text-[#a7aca6]">
                Add the following code to your main server file (e.g.,{' '}
                <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">app.js</code> or{' '}
                <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">index.ts</code>):
              </p>
              <div className="mt-4 bg-canvas text-[#e7e2d8] border border-white/10 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-[#d7d2c8] whitespace-pre">
                  {`import { DBPulseAgent } from "dbpulse-agent";

DBPulseAgent.init({
  apiKey: "your-api-key",
  connectionId: "your-connection-id",
  debug: false,
});

import express from "express";
const app = express();
app.use(DBPulseAgent.trackRequests());`}
                </pre>
              </div>

              <p className="mt-4 text-sm text-muted">
                <strong>Note:</strong> The agent automatically detects your MongoDB driver and only tracks queries when a connection is active.
              </p>

              <h4 className="text-base md:text-lg font-semibold mt-8 text-dark">Tracking features</h4>
              <ul className="list-disc list-inside space-y-1 text-[#c9c4bb]">
                <li>Every <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">find</code>, <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">insert</code>, <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">update</code>, <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">delete</code> and aggregation</li>
                <li>Execution time (ms) per query</li>
                <li>Correlated with the API endpoint that triggered it</li>
                <li>Filterable logs by database, collection, and time range</li>
              </ul>

              <h4 className="text-base md:text-lg font-semibold mt-8 text-dark">Example log entry</h4>
              <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                <p className="text-sm text-[#a7aca6]">As displayed in the desktop app:</p>
                {/* FIX 6: The log entry mock uses overflow-x-auto on the outer wrapper
                    and `min-w-max` on the inner row so it scrolls as a unit on mobile
                    instead of wrapping awkwardly or overflowing. */}
                <div className="mt-3 overflow-x-auto rounded-2xl border border-line bg-card font-mono text-xs text-soft">
                  <div className="flex min-w-max items-center gap-3 border-b border-line px-4 py-3 text-xs">
                    <span className="w-44 shrink-0 text-muted">14:23:45</span>
                    <span className="rounded border border-primary/30 bg-primary/15 px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-accent-soft">MDB</span>
                    <span className="rounded border border-line bg-chip px-1.5 py-0.5 text-[10px] uppercase tracking-wider text-soft">PROD</span>
                    <span className="w-24 shrink-0 font-bold text-primary">GET</span>
                    <span className="w-32 shrink-0 truncate text-soft">users</span>
                    <span className="w-16 shrink-0 text-right font-bold text-accent-soft">12ms</span>
                    <span className="w-28 shrink-0 truncate text-right text-muted">192.168.1.1</span>
                  </div>
                  <div className="space-y-1 px-4 py-3">
                    <div className="text-xs text-soft">
                      Method: <span className="font-mono text-primary">GET</span>
                    </div>
                    <div className="text-[11px] text-soft">Collection: <span className="font-mono text-accent-soft">users</span></div>
                    <div className="text-[11px] text-soft">Route: <span className="font-mono text-primary">/api/users</span></div>
                    <pre className="overflow-x-auto whitespace-pre-wrap break-all rounded-xl border border-line bg-field p-3 text-[11px] text-soft">
                      {`{
  "filter": { "status": "active" },
  "projection": { "name": 1, "email": 1 }
}`}
                    </pre>
                  </div>
                </div>
                <p className="text-xs text-muted mt-2">
                  Each log row shows timestamp, database type, environment, HTTP method, collection/table, query preview, duration, and client IP.
                  Click to expand for full query details.
                </p>
              </div>
            </section>

            {/* PostgreSQL */}
            <section id="postgresql" className="scroll-mt-20 mt-16">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-dark">
                <span>🐘</span> PostgreSQL <span className="text-sm font-normal text-primary">● Active</span>
              </h2>
              <p className="text-[#a7aca6] mt-2">
                DbPulse captures PostgreSQL queries at the <strong className="text-dark">application layer</strong>.
                Install the agent in your app, initialize it with your API credentials, and every SQL query
                is timed, correlated with the HTTP route that triggered it, and streamed to the desktop app.
              </p>
              <div className="mt-4 p-4 bg-primary/10 border border-primary/30 rounded-lg space-y-2">
                <p className="text-sm text-[#c9c4bb] flex items-center gap-2">
                  <span>✓</span> No <code className="bg-white/10 px-1 rounded text-xs">pg_monitor</code> role, superuser access, or DB config changes required.
                </p>
                <p className="text-sm text-[#c9c4bb] flex items-center gap-2">
                  <span>✓</span> Works on managed Postgres (RDS, Neon, Supabase, Railway, etc.).
                </p>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mt-8 text-dark">Shared setup</h3>
              <ol className="list-decimal list-inside space-y-3 mt-4 text-[#c9c4bb]">
                <li>
                  Download the <a href="/#download" className="text-primary hover:underline">DbPulse desktop app</a>, sign up, and create a{' '}
                  <strong>PostgreSQL</strong> connection.
                </li>
                <li>
                  Copy your <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">apiKey</code> and{' '}
                  <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">connectionId</code> from the dashboard.
                </li>
                <li>Install the agent for your language (Node.js or Python below).</li>
                <li>
                  Call <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">init()</code>{' '}
                  <strong>before</strong> creating any database clients, pools, or ORM connections.
                </li>
                <li>Add the request middleware so each query is linked to the API route that ran it.</li>
              </ol>

              <h4 className="text-base md:text-lg font-semibold mt-8 text-dark">What gets captured</h4>
              <ul className="list-disc list-inside space-y-1 text-[#c9c4bb]">
                <li>SQL operation — <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">SELECT</code>, <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">INSERT</code>, <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">UPDATE</code>, <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">DELETE</code>, DDL, and more</li>
                <li>Table name extracted from the query</li>
                <li>Full SQL text (or Prisma operation args)</li>
                <li>Execution time in milliseconds</li>
                <li>HTTP route, method, and request ID (when middleware is enabled)</li>
              </ul>
            </section>

            {/* PostgreSQL — Node.js */}
            <section id="postgresql-nodejs" className="scroll-mt-20 mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-dark">
                PostgreSQL · Node.js
              </h2>
              <p className="text-[#a7aca6] mt-2">
                Use the npm package <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">dbpulse-agent</code>{' '}
                (v1.1.0+). Supported stacks:
              </p>
              <ul className="mt-3 list-disc list-inside text-[#c9c4bb] space-y-1">
                <li><strong>pg</strong> (node-postgres) — Client and Pool, promise and callback style</li>
                <li><strong>Prisma</strong> — via <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">instrumentPrisma()</code></li>
                <li><strong>Sequelize / Knex / TypeORM</strong> — captured automatically when they use <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">pg</code> underneath</li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold mt-8 text-dark">1. Install</h3>
              <div className="bg-canvas text-[#e7e2d8] border border-white/10 rounded-lg p-3 mt-2 overflow-x-auto">
                <code className="text-sm font-mono text-[#ffb089] whitespace-nowrap">npm install dbpulse-agent</code>
              </div>
              <p className="mt-2 text-sm text-muted">
                For raw <code className="bg-white/10 px-1 rounded text-xs">pg</code> apps, also have{' '}
                <code className="bg-white/10 px-1 rounded text-xs">pg</code> installed. Prisma users do not need{' '}
                <code className="bg-white/10 px-1 rounded text-xs">pg</code>.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-8 text-dark">2. With <code className="text-lg">pg</code> (Client / Pool)</h3>
              <p className="text-[#a7aca6]">
                Initialize DbPulse <strong>before</strong> importing or creating any{' '}
                <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">pg</code> Client or Pool:
              </p>
              <div className="mt-4 bg-canvas text-[#e7e2d8] border border-white/10 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-[#d7d2c8] whitespace-pre">{`import { DBPulseAgent } from "dbpulse-agent";

DBPulseAgent.init({
  apiKey: process.env.DBPULSE_API_KEY,
  connectionId: process.env.DBPULSE_CONNECTION_ID,
  dbType: "postgresql",
  debug: false,
});

import express from "express";
import { Pool } from "pg";

const app = express();
app.use(DBPulseAgent.trackRequests());

const pool = new Pool({ connectionString: process.env.DATABASE_URL });

app.get("/api/users", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM users");
  res.json(rows);
});

process.on("SIGTERM", async () => {
  await DBPulseAgent.shutdown();
  process.exit(0);
});`}</pre>
              </div>
              <p className="mt-3 text-sm text-muted">
                The agent patches <code className="bg-white/10 px-1 rounded text-xs">Client.prototype.query</code>,
                so both <code className="bg-white/10 px-1 rounded text-xs">client.query()</code> and{' '}
                <code className="bg-white/10 px-1 rounded text-xs">pool.query()</code> are captured.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-8 text-dark">3. With Prisma</h3>
              <p className="text-[#a7aca6]">
                Prisma uses its own query engine (not <code className="bg-white/10 px-1 rounded text-xs">pg</code>),
                so wrap the client with <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">instrumentPrisma()</code>{' '}
                and <strong>always use the returned instance</strong>:
              </p>
              <div className="mt-4 bg-canvas text-[#e7e2d8] border border-white/10 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-[#d7d2c8] whitespace-pre">{`import { DBPulseAgent } from "dbpulse-agent";
import { PrismaClient } from "@prisma/client";
import express from "express";

DBPulseAgent.init({
  apiKey: process.env.DBPULSE_API_KEY,
  connectionId: process.env.DBPULSE_CONNECTION_ID,
  dbType: "postgresql",
});

// IMPORTANT: use the returned client
export const prisma = DBPulseAgent.instrumentPrisma(new PrismaClient());

const app = express();
app.use(DBPulseAgent.trackRequests());

app.get("/api/users", async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});`}</pre>
              </div>
              <div className="mt-4 p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                <p className="text-sm text-[#c9c4bb]">
                  <strong>Tip:</strong> Put init + <code className="bg-white/10 px-1 rounded text-xs">instrumentPrisma()</code>{' '}
                  in a shared module (e.g. <code className="bg-white/10 px-1 rounded text-xs">utils/prisma.ts</code>) and
                  import that client everywhere.
                </p>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mt-8 text-dark">4. Sequelize, Knex, TypeORM</h3>
              <p className="text-[#a7aca6]">
                These ORMs typically talk to Postgres through <code className="bg-white/10 px-1 rounded text-xs">pg</code>.
                Initialize the agent first with <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">dbType: &quot;postgresql&quot;</code>,
                then create your ORM connection as usual — no extra wrappers needed.
              </p>
              <div className="mt-4 bg-canvas text-[#e7e2d8] border border-white/10 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-[#d7d2c8] whitespace-pre">{`import { DBPulseAgent } from "dbpulse-agent";

DBPulseAgent.init({
  apiKey: process.env.DBPULSE_API_KEY,
  connectionId: process.env.DBPULSE_CONNECTION_ID,
  dbType: "postgresql",
});

// Then create Sequelize / Knex / TypeORM as you normally would
// (dialect: "postgres" / client: "pg" / type: "postgres")`}</pre>
              </div>

              <h4 className="text-base md:text-lg font-semibold mt-8 text-dark">Node.js checklist</h4>
              <ul className="list-disc list-inside space-y-1 text-[#c9c4bb]">
                <li><code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">dbType: &quot;postgresql&quot;</code> must be set</li>
                <li><code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">init()</code> runs before any DB client creation</li>
                <li><code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">app.use(DBPulseAgent.trackRequests())</code> for route correlation</li>
                <li>Prisma: use the client returned by <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">instrumentPrisma()</code></li>
                <li>Call <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">DBPulseAgent.shutdown()</code> on process exit</li>
              </ul>
            </section>

            {/* PostgreSQL — Python */}
            <section id="postgresql-python" className="scroll-mt-20 mt-16">
              <h2 className="text-2xl md:text-3xl font-bold text-dark">
                PostgreSQL · Python
              </h2>
              <p className="text-[#a7aca6] mt-2">
                Use the PyPI package <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">dbpulse-agent</code>{' '}
                (v1.1.0+). Supported drivers and frameworks:
              </p>
              <ul className="mt-3 list-disc list-inside text-[#c9c4bb] space-y-1">
                <li><strong>psycopg2</strong> — Flask, Django, SQLAlchemy (sync)</li>
                <li><strong>psycopg</strong> (v3) — sync and async</li>
                <li><strong>asyncpg</strong> — FastAPI, SQLAlchemy async (<code className="bg-white/10 px-1 rounded text-xs">postgresql+asyncpg://</code>)</li>
                <li>Framework middleware for <strong>Flask</strong>, <strong>Django</strong>, and <strong>FastAPI</strong></li>
              </ul>

              <h3 className="text-xl md:text-2xl font-bold mt-8 text-dark">1. Install</h3>
              <p className="text-[#a7aca6]">Install the agent plus the driver your app uses:</p>
              <div className="bg-canvas text-[#e7e2d8] border border-white/10 rounded-lg p-3 mt-2 overflow-x-auto space-y-2">
                <div><code className="text-sm font-mono text-[#ffb089] whitespace-nowrap">pip install &quot;dbpulse-agent[postgresql]&quot;</code> <span className="text-muted text-xs"># psycopg2</span></div>
                <div><code className="text-sm font-mono text-[#ffb089] whitespace-nowrap">pip install &quot;dbpulse-agent[psycopg3]&quot;</code> <span className="text-muted text-xs"># psycopg v3</span></div>
                <div><code className="text-sm font-mono text-[#ffb089] whitespace-nowrap">pip install &quot;dbpulse-agent[asyncpg]&quot;</code> <span className="text-muted text-xs"># FastAPI / async</span></div>
              </div>
              <p className="mt-2 text-sm text-muted">
                On init, the agent registers hooks for every installed Postgres driver automatically.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-8 text-dark">2. Flask + SQLAlchemy / psycopg2</h3>
              <p className="text-[#a7aca6]">
                Call <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">init()</code> before Flask-SQLAlchemy
                creates connections, then register the Flask middleware:
              </p>
              <div className="mt-4 bg-canvas text-[#e7e2d8] border border-white/10 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-[#d7d2c8] whitespace-pre">{`import os
from dotenv import load_dotenv
from dbpulse_agent import DBPulseAgent

load_dotenv()

DBPulseAgent.init(
    api_key=os.environ["DBPULSE_API_KEY"],
    connection_id=os.environ["DBPULSE_CONNECTION_ID"],
    db_type="postgresql",
)

from flask import Flask
from extensions import db  # Flask-SQLAlchemy

def create_app():
    app = Flask(__name__)
    DBPulseAgent.flask_middleware()(app)
    app.config.from_object("config.Config")
    db.init_app(app)
    # register blueprints...
    return app

app = create_app()`}</pre>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mt-8 text-dark">3. Django + psycopg2 / psycopg3</h3>
              <p className="text-[#a7aca6]">
                Initialize near the top of <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">settings.py</code>{' '}
                (before database connections), and add the middleware:
              </p>
              <div className="mt-4 bg-canvas text-[#e7e2d8] border border-white/10 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-[#d7d2c8] whitespace-pre">{`# settings.py
import os
from dotenv import load_dotenv
from dbpulse_agent import DBPulseAgent

load_dotenv()

DBPulseAgent.init(
    api_key=os.environ["DBPULSE_API_KEY"],
    connection_id=os.environ["DBPULSE_CONNECTION_ID"],
    db_type="postgresql",
)

MIDDLEWARE = [
    "dbpulse_agent.middleware.django_mw.DBPulseDjangoMiddleware",
    "django.middleware.security.SecurityMiddleware",
    # ... your other middleware
]

DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.postgresql",
        "NAME": "...",
        # or use dj-database-url with DATABASE_URL
    }
}`}</pre>
              </div>
              <p className="mt-3 text-sm text-muted">
                Works with <code className="bg-white/10 px-1 rounded text-xs">psycopg2-binary</code> and{' '}
                <code className="bg-white/10 px-1 rounded text-xs">psycopg</code> (v3). Install the matching extra.
              </p>

              <h3 className="text-xl md:text-2xl font-bold mt-8 text-dark">4. FastAPI + asyncpg / SQLAlchemy async</h3>
              <p className="text-[#a7aca6]">
                Init before creating the async engine. Register the FastAPI middleware for route correlation:
              </p>
              <div className="mt-4 bg-canvas text-[#e7e2d8] border border-white/10 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-[#d7d2c8] whitespace-pre">{`import os
from contextlib import asynccontextmanager
from dotenv import load_dotenv
from fastapi import FastAPI
from dbpulse_agent import DBPulseAgent

load_dotenv()

DBPulseAgent.init(
    api_key=os.environ["DBPULSE_API_KEY"],
    connection_id=os.environ["DBPULSE_CONNECTION_ID"],
    db_type="postgresql",
)

# Import engine / routers AFTER init
from app.database import engine, Base
from app.routers.users import router as users_router

@asynccontextmanager
async def lifespan(app: FastAPI):
    async with engine.begin() as conn:
        await conn.run_sync(Base.metadata.create_all)
    yield
    DBPulseAgent.shutdown()

app = FastAPI(lifespan=lifespan)
app.middleware("http")(DBPulseAgent.fastapi_middleware())
app.include_router(users_router)`}</pre>
              </div>
              <div className="mt-4 p-4 bg-primary/10 border-l-4 border-primary rounded-r-lg">
                <p className="text-sm text-[#c9c4bb]">
                  Use a connection URL like{' '}
                  <code className="bg-white/10 px-1 rounded text-xs">postgresql+asyncpg://user:pass@host/db</code>.
                  Install with <code className="bg-white/10 px-1 rounded text-xs">pip install &quot;dbpulse-agent[asyncpg]&quot;</code>.
                </p>
              </div>

              <h3 className="text-xl md:text-2xl font-bold mt-8 text-dark">5. Raw psycopg2 / psycopg / asyncpg</h3>
              <p className="text-[#a7aca6]">
                No framework? Init first, then connect as usual — every{' '}
                <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">execute</code> /{' '}
                <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">fetch</code> is still captured
                (without route metadata unless you set context yourself).
              </p>
              <div className="mt-4 bg-canvas text-[#e7e2d8] border border-white/10 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-[#d7d2c8] whitespace-pre">{`from dbpulse_agent import DBPulseAgent
import psycopg2

DBPulseAgent.init(
    api_key="your-api-key",
    connection_id="your-connection-id",
    db_type="postgresql",
)

conn = psycopg2.connect(os.environ["DATABASE_URL"])
cur = conn.cursor()
cur.execute("SELECT * FROM users")  # captured automatically`}</pre>
              </div>

              <h4 className="text-base md:text-lg font-semibold mt-8 text-dark">Python checklist</h4>
              <ul className="list-disc list-inside space-y-1 text-[#c9c4bb]">
                <li><code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">db_type=&quot;postgresql&quot;</code></li>
                <li><code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">init()</code> before any DB imports/connections</li>
                <li>Flask: <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">DBPulseAgent.flask_middleware()(app)</code></li>
                <li>Django: add <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">DBPulseDjangoMiddleware</code> to <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">MIDDLEWARE</code></li>
                <li>FastAPI: <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">app.middleware(&quot;http&quot;)(DBPulseAgent.fastapi_middleware())</code></li>
                <li>Call <code className="bg-white/10 px-1.5 py-0.5 rounded text-xs">DBPulseAgent.shutdown()</code> on app shutdown</li>
              </ul>

              <h4 className="text-base md:text-lg font-semibold mt-8 text-dark">Environment variables</h4>
              <div className="mt-2 bg-canvas text-[#e7e2d8] border border-white/10 rounded-lg p-4 overflow-x-auto">
                <pre className="text-sm font-mono text-[#d7d2c8] whitespace-pre">{`DBPULSE_API_KEY=your-api-key
DBPULSE_CONNECTION_ID=your-connection-id
DBPULSE_DEBUG=false
DATABASE_URL=postgresql://user:pass@localhost:5432/mydb`}</pre>
              </div>
            </section>

            {/* MySQL */}
            <section id="mysql" className="scroll-mt-20 mt-16 opacity-70">
              <h2 className="text-2xl md:text-3xl font-bold flex items-center gap-3 text-dark">
                <span>🐬</span> MySQL <span className="text-sm font-normal text-muted">● Coming soon</span>
              </h2>
              <p className="text-[#a7aca6]">
                MySQL support is planned after PostgreSQL. Expected release: <strong className="text-dark">Q3 2026</strong>.
              </p>
              <div className="mt-4 p-4 bg-white/5 border border-white/10 rounded-lg">
                <p className="text-sm text-muted flex items-center gap-2">
                  <span>📋</span> We'll support both mysql2 and native mysql packages.
                </p>
              </div>
            </section>

          </div>
        </main>
      </div>
    </div>
  )
}