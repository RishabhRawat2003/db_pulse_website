"use client";

import { useEffect, useState } from "react";
import { Download, Terminal } from "lucide-react";
import Link from "next/link";

const TRACES = [
  {
    route: "GET /api/users",
    ms: "12ms",
    sql: "SELECT id, name, email\nFROM users\nORDER BY created_at DESC",
  },
  {
    route: "POST /api/users",
    ms: "8ms",
    sql: "INSERT INTO users (name, email)\nVALUES ($1, $2)",
  },
  {
    route: "GET /api/users/42",
    ms: "4ms",
    sql: "SELECT id, email\nFROM users\nWHERE id = $1",
  },
];

const SQL_WORD = /\b(SELECT|INSERT INTO|FROM|WHERE|ORDER BY|VALUES|DESC|ASC)\b/g;

function paintSql(sql: string) {
  const parts: Array<string | { word: string; key: number }> = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(SQL_WORD);
  while ((match = re.exec(sql))) {
    if (match.index > last) parts.push(sql.slice(last, match.index));
    parts.push({ word: match[0], key: match.index });
    last = match.index + match[0].length;
  }
  if (last < sql.length) parts.push(sql.slice(last));
  return parts;
}

function useQueryTrace() {
  const [index, setIndex] = useState(0);
  const [count, setCount] = useState(0);
  const [phase, setPhase] = useState<"type" | "hold">("type");
  const trace = TRACES[index];
  const done = count >= trace.sql.length;

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setCount(trace.sql.length);
      return;
    }

    if (!done) {
      const timer = window.setTimeout(() => setCount((value) => value + 1), 22);
      return () => window.clearTimeout(timer);
    }

    if (phase === "type") {
      const timer = window.setTimeout(() => setPhase("hold"), 1600);
      return () => window.clearTimeout(timer);
    }

    const timer = window.setTimeout(() => {
      setCount(0);
      setPhase("type");
      setIndex((value) => (value + 1) % TRACES.length);
    }, 700);
    return () => window.clearTimeout(timer);
  }, [count, done, phase, trace.sql.length]);

  return {
    route: trace.route,
    ms: done ? trace.ms : "",
    sql: trace.sql.slice(0, count),
    typing: !done,
  };
}

function HeroSection() {
  const trace = useQueryTrace();

  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-16 lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-24">
        <div className="max-w-lg">
          <p className="dbpulse-rise mb-4 text-xs font-semibold uppercase tracking-[0.22em] text-primary">
            DBPulse
          </p>
          <h1 className="dbpulse-rise font-display text-4xl leading-[1.05] text-dark sm:text-5xl">
            See every query your app actually runs.
          </h1>
          <p className="dbpulse-rise mt-5 max-w-md text-base leading-relaxed text-muted">
            Route, duration, and SQL from inside your service. Mongo, Postgres, and the drivers your stack already uses.
          </p>
          <div className="dbpulse-rise mt-10 overflow-hidden rounded-2xl border border-line bg-card">
            <div className="flex items-center justify-between border-b border-line px-4 py-3 text-xs text-muted">
              <span>{trace.route}</span>
              <span className="font-mono text-accent-soft">{trace.ms}</span>
            </div>
            <pre className="min-h-[7.5rem] whitespace-pre-wrap px-4 py-4 font-mono text-[13px] leading-6 text-soft">
              {paintSql(trace.sql).map((part) =>
                typeof part === "string" ? (
                  part
                ) : (
                  <span key={part.key} className="text-primary">
                    {part.word}
                  </span>
                )
              )}
              <span className="dbpulse-caret ml-0.5 inline-block h-[0.9em] w-[7px] translate-y-[2px] bg-primary" />
            </pre>
          </div>
          <p className="mt-8 text-sm text-muted">Node · Python · Java agents</p>
        </div>

        <div className="w-full max-w-[420px] justify-self-start lg:justify-self-end">
          <div className="mb-8 flex items-center gap-3">
            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary" />
            </span>
            <span className="text-sm text-soft">Live query monitor</span>
          </div>
          <h2 className="font-display text-2xl font-semibold tracking-tight text-dark">
            Get the desktop app
          </h2>
          <p className="mt-1 text-sm text-muted">Sign in, add a connection, and watch the queries land.</p>
          <div className="mt-8 space-y-3">
            <a
              href="#download"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary py-3.5 text-sm font-semibold text-on-accent transition hover:brightness-110"
            >
              <Download className="h-4 w-4" /> Download for desktop
            </a>
            <div className="flex items-center gap-3 py-1 text-xs text-muted">
              <span className="h-px flex-1 bg-line" />
              or
              <span className="h-px flex-1 bg-line" />
            </div>
            <Link
              href="/pages/doc"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-card py-3.5 text-sm font-medium text-dark transition hover:brightness-110"
            >
              <Terminal className="h-4 w-4" /> Read the docs
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
