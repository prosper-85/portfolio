import type { MetadataRoute } from "next";
import { navItems, siteConfig } from "@/lib/portfolio";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return navItems.map((item) => ({
    url: new URL(item.href, siteConfig.siteUrl).toString(),
    lastModified,
    changeFrequency: "monthly",
    priority: item.href === "/" ? 1 : 0.8,
  }));
}
