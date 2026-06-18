"use client";

import * as Sentry from "@sentry/nextjs";
import { RotateCcw } from "lucide-react";
import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-950 text-white">
        <main className="flex min-h-screen items-center justify-center px-6 py-16">
          <section className="max-w-xl rounded-lg border border-white/10 bg-white/[0.04] p-8 text-center shadow-2xl shadow-black/20">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
              Error
            </p>
            <h1 className="mt-4 text-3xl font-semibold">
              Something interrupted the portfolio.
            </h1>
            <p className="mt-4 text-sm leading-7 text-zinc-400">
              The issue has been captured for review. You can retry the current
              view or use the navigation after the page reloads.
            </p>
            <button
              type="button"
              onClick={reset}
              className="mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <RotateCcw size={17} aria-hidden="true" />
              Try again
            </button>
          </section>
        </main>
      </body>
    </html>
  );
}
