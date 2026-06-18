import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6 py-24 text-center">
      <div className="max-w-xl">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
          404
        </p>
        <h1 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">
          This page is not part of the portfolio.
        </h1>
        <p className="mt-5 text-base leading-8 text-zinc-400">
          The route may have moved, or the link may be outdated. Head back home
          to continue exploring the work.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-amber-300"
        >
          <ArrowLeft size={18} aria-hidden="true" />
          Back home
        </Link>
      </div>
    </section>
  );
}
