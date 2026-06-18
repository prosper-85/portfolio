import TechStack from "@/components/TechStack";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Tech Stack",
  description: `${siteConfig.name}'s mobile, frontend, backend, and delivery toolset for production product engineering.`,
  alternates: {
    canonical: "/tech",
  },
};

export default function TechPage() {
  return <TechStack />;
}
