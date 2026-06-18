import { getGitHubProfile, getGitHubRepos } from "./github";

export async function generateAIBio() {
  const profile = await getGitHubProfile();
  const repos = await getGitHubRepos();

  const languages = repos
    .map((repo) => repo.language)
    .filter((language): language is string => Boolean(language));

  const topLang =
    languages.reduce<string | undefined>((currentTop, language, _, all) => {
      if (!currentTop) {
        return language;
      }

      const currentCount = all.filter((value) => value === currentTop).length;
      const nextCount = all.filter((value) => value === language).length;

      return currentCount >= nextCount ? currentTop : language;
    }, languages[0]) ?? "TypeScript";

  return `
Software Engineer with strong focus on ${topLang}-driven development.
Built ${profile.public_repos} public projects with emphasis on scalability, performance, and mobile engineering.
Currently evolving into advanced Mobile Engineering and system design.
  `;
}
