"use client";

import { useEffect, useState } from "react";
import { getGitHubProfile, type GitHubProfile } from "@/lib/github";

export default function GitHubStats() {
  const [data, setData] = useState<GitHubProfile | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getGitHubProfile()
      .then(setData)
      .catch(() => {
        setError("Unable to load GitHub activity right now.");
      });
  }, []);

  if (error) {
    return <p className="text-sm text-amber-200">{error}</p>;
  }

  if (!data) {
    return <p className="text-sm text-zinc-400">Loading stats...</p>;
  }

  return (
    <section className="px-6 py-24 text-center sm:px-8 lg:px-12">
      <h2 className="text-3xl font-semibold text-white">GitHub Activity</h2>

      <div className="mx-auto mt-6 grid max-w-4xl gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
          <p className="text-3xl font-semibold text-cyan-200">
            {data.public_repos}
          </p>
          <p className="mt-2 text-sm text-zinc-400">Repositories</p>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
          <p className="text-3xl font-semibold text-cyan-200">
            {data.followers}
          </p>
          <p className="mt-2 text-sm text-zinc-400">Followers</p>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
          <p className="text-3xl font-semibold text-cyan-200">
            {data.following}
          </p>
          <p className="mt-2 text-sm text-zinc-400">Following</p>
        </div>
      </div>
    </section>
  );
}
