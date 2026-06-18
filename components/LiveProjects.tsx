"use client";

import { useEffect, useState } from "react";
import { getGitHubRepos, type GitHubRepo } from "@/lib/github";

export default function LiveProjects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getGitHubRepos()
      .then(setRepos)
      .catch(() => {
        setError("Unable to load live GitHub projects right now.");
      });
  }, []);

  return (
    <section className="px-6 py-24 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-3xl font-semibold text-white">Live Projects</h2>
        {error ? <p className="mt-4 text-sm text-amber-200">{error}</p> : null}

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {repos.slice(0, 6).map((repo) => (
            <a
              key={repo.id}
              href={repo.html_url}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-white/10 bg-white/[0.04] p-5 transition hover:-translate-y-1 hover:border-cyan-300"
            >
              <h3 className="text-xl font-semibold text-white">{repo.name}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-zinc-400">
                {repo.description ?? "Repository details available on GitHub."}
              </p>

              <div className="mt-4 flex gap-3 text-sm text-cyan-100">
                <span>{repo.stargazers_count} stars</span>
                <span>{repo.forks_count} forks</span>
                {repo.language ? <span>{repo.language}</span> : null}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
