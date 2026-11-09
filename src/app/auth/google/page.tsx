"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { CheckCircle, AlertCircle } from "lucide-react";

type Status = "loading" | "created" | "signed-in" | "error" | "idle";

const ERROR_COPY: Record<string, string> = {
  no_code: "Google did not return a sign-in code. Start again from the desktop app.",
  no_email: "Google did not share an email address, so the account could not be created.",
  auth_failed: "Sign-in did not finish. Try again from the desktop app.",
};

export default function GoogleAuthPage() {
  const [status, setStatus] = useState<Status>("loading");
  const [deepLink, setDeepLink] = useState("");
  const [errorCopy, setErrorCopy] = useState(ERROR_COPY.auth_failed);

  useEffect(() => {
    const raw = window.location.hash.startsWith("#")
      ? window.location.hash.slice(1)
      : "";
    const params = new URLSearchParams(raw);
    window.history.replaceState(null, "", "/auth/google");

    const token = params.get("token");
    const error = params.get("error");

    if (token) {
      const link = `dbpulse://auth?token=${encodeURIComponent(token)}`;
      setDeepLink(link);
      setStatus(params.get("created") === "1" ? "created" : "signed-in");
      const timer = window.setTimeout(() => {
        window.location.href = link;
      }, 500);
      return () => window.clearTimeout(timer);
    }

    if (error) {
      setErrorCopy(ERROR_COPY[error] || ERROR_COPY.auth_failed);
      setStatus("error");
      return;
    }

    setStatus("idle");
  }, []);

  const success = status === "created" || status === "signed-in";
  const title =
    status === "created"
      ? "Account created"
      : status === "signed-in"
        ? "You're signed in"
        : status === "error"
          ? "Sign-in didn't finish"
          : status === "idle"
            ? "Sign in from the app"
            : "Finishing sign-in";

  const body =
    status === "created"
      ? "Your DBPulse account is ready. The desktop app should open with you signed in."
      : status === "signed-in"
        ? "Welcome back. The desktop app should open with your session."
        : status === "error"
          ? errorCopy
          : status === "idle"
            ? "Google sign-in starts from the DBPulse desktop app. Open it and choose Continue with Google."
            : "Checking your Google sign-in.";

  return (
    <main className="relative min-h-[70vh] overflow-hidden px-4 py-20">
      <div className="pointer-events-none absolute -left-24 top-10 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
      <div className="relative mx-auto max-w-lg rounded-2xl border border-white/10 bg-card px-8 py-12 text-center">
        <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/15 text-primary">
          {status === "error" || status === "idle" ? (
            <AlertCircle className="h-7 w-7" />
          ) : (
            <CheckCircle className="h-7 w-7" />
          )}
        </div>
        <h1 className="font-display text-3xl tracking-tight text-dark sm:text-4xl">{title}</h1>
        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">{body}</p>

        {success && deepLink && (
          <a
            href={deepLink}
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary px-7 py-3.5 text-sm font-semibold text-[#1a0d07] transition hover:brightness-110"
          >
            Open DBPulse
          </a>
        )}

        <div className="mt-6">
          <Link href="/" className="text-sm text-muted transition hover:text-dark">
            Back to the site
          </Link>
        </div>
      </div>
    </main>
  );
}
