import { siteConfig } from "./portfolio";

export type GitHubProfile = {
  public_repos: number;
  followers: number;
  following: number;
};

export type GitHubRepo = {
  id: number;
  name: string;
  description: string | null;
  forks_count: number;
  html_url: string;
  language: string | null;
  stargazers_count: number;
};

const GITHUB_USERNAME = siteConfig.github.username;

export async function getGitHubProfile() {
  const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);

  if (!res.ok) {
    throw new Error("Unable to load GitHub profile");
  }

  return (await res.json()) as GitHubProfile;
}

export async function getGitHubRepos() {
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=12`,
  );

  if (!res.ok) {
    throw new Error("Unable to load GitHub repositories");
  }

  return (await res.json()) as GitHubRepo[];
}
