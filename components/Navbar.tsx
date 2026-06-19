"use client";

import { FolderGit2, Home, Layers, Mail, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { navItems } from "@/lib/portfolio";

const navIcons: Record<string, ReactNode> = {
  "/": <Home size={18} aria-hidden="true" />,
  "/about": <User size={18} aria-hidden="true" />,
  "/#projects": <FolderGit2 size={18} aria-hidden="true" />,
  "/tech": <Layers size={18} aria-hidden="true" />,
  "/contact": <Mail size={18} aria-hidden="true" />,
};

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      aria-label="Primary navigation"
      className="fixed inset-x-0 bottom-4 z-50 flex justify-center px-4 sm:bottom-6"
    >
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-zinc-950/80 p-1.5 shadow-2xl shadow-black/30 backdrop-blur-xl">
        {navItems.map((item) => (
          <NavIcon
            key={item.href}
            href={item.href}
            icon={navIcons[item.href]}
            label={item.label}
            isActive={
              item.href === "/"
                ? pathname === "/"
                : item.href.includes("#")
                  ? false
                  : pathname.startsWith(item.href)
            }
          />
        ))}
      </div>
    </nav>
  );
}

type NavIconProps = {
  href: string;
  icon: ReactNode;
  label: string;
  isActive: boolean;
};

function NavIcon({ href, icon, label, isActive }: NavIconProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      aria-current={isActive ? "page" : undefined}
      className={`inline-flex size-10 items-center justify-center rounded-full transition focus:outline-none focus:ring-2 focus:ring-amber-300 ${
        isActive
          ? "bg-white text-zinc-950 shadow-lg shadow-cyan-500/20"
          : "text-zinc-300 hover:bg-white/10 hover:text-white"
      }`}
    >
      {icon}
    </Link>
  );
}
