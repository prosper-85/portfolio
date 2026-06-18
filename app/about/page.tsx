import About from "@/components/About";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name}, a frontend lead and full-stack engineer focused on React, Next.js, React Native, and Node.js systems.`,
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return <About />;
}
