import Contact from "@/components/Contact";
import type { Metadata } from "next";
import { siteConfig } from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.name} for frontend lead, full-stack, mobile engineering, and relocation-ready opportunities.`,
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return <Contact />;
}
