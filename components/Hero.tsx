"use client";

import { ArrowRight, FolderGit2, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { metrics, siteConfig } from "@/lib/portfolio";

export default function HeroCinematic() {
  return (
    <section className="relative isolate min-h-[88svh] overflow-hidden px-6 pb-24 pt-20 text-white sm:px-8 sm:pt-24 lg:px-12">
      <Image
        src="/portfolio-hero.png"
        alt="Cinematic desk setup with mobile engineering devices"
        fill
        priority
        sizes="100vw"
        className="absolute inset-0 -z-20 object-cover object-center opacity-70"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(9,9,11,0.96)_0%,rgba(9,9,11,0.8)_42%,rgba(9,9,11,0.34)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-36 bg-gradient-to-t from-zinc-950 to-transparent" />

      <div className="mx-auto flex min-h-[calc(88svh-7rem)] w-full max-w-6xl items-center">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-cyan-100 backdrop-blur"
          >
            <span className="size-2 rounded-full bg-emerald-300" />
            {siteConfig.location} - {siteConfig.availability}
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-balance text-5xl font-semibold leading-[0.95] tracking-normal text-white sm:text-6xl lg:text-7xl"
          >
            {siteConfig.shortName}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-zinc-200 sm:text-xl"
          >
            {siteConfig.headline} I turn product ideas into production-ready
            React, Next.js, React Native, and Node.js systems with the
            communication habits needed to lead across product and backend
            teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-950 shadow-xl shadow-cyan-950/30 transition hover:-translate-y-0.5 hover:bg-cyan-100 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <Mail size={18} aria-hidden="true" />
              Start a conversation
              <ArrowRight size={18} aria-hidden="true" />
            </Link>

            <a
              href={siteConfig.github.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/15 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <FolderGit2 size={18} aria-hidden="true" />
              View GitHub
            </a>
          </motion.div>

          <motion.dl
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
            className="mt-12 grid max-w-2xl grid-cols-1 gap-3 sm:grid-cols-3"
          >
            {metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-lg border border-white/10 bg-zinc-950/45 p-4 backdrop-blur"
              >
                <dt className="text-sm text-zinc-400">{metric.label}</dt>
                <dd className="mt-2 text-2xl font-semibold text-white">
                  {metric.value}
                </dd>
              </div>
            ))}
          </motion.dl>
        </div>
      </div>
    </section>
  );
}
