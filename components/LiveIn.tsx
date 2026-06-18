"use client";

import { useEffect, useState } from "react";
import { getGitHubRepos, type GitHubRepo } from "@/lib/github";

export default function LiveIntelligence() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);

  useEffect(() => {
    getGitHubRepos()
      .then(setRepos)
      .catch(() => {
        setRepos([]);
      });
  }, []);

  const topRepo = [...repos].sort(
    (a, b) => b.stargazers_count - a.stargazers_count,
  )[0];

  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white">
          Developer Intelligence
        </h2>

        {topRepo ? (
          <a
            href={topRepo.html_url}
            target="_blank"
            rel="noreferrer"
            className="mt-6 block rounded-lg border border-white/10 bg-white/[0.04] p-6 transition hover:border-cyan-300"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-amber-300">
              Top Project
            </p>
            <h3 className="mt-3 text-xl font-semibold text-white">
              {topRepo.name}
            </h3>
            <p className="mt-2 text-sm leading-6 text-zinc-400">
              {topRepo.description ?? "Repository details available on GitHub."}
            </p>
          </a>
        ) : null}
      </div>
    </section>
  );
}
