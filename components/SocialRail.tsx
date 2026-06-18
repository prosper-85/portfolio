import { socialLinks } from "@/lib/portfolio";

export default function SocialRail() {
  return (
    <aside
      aria-label="Social links"
      className="fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <div className="flex flex-col items-center gap-2 rounded-full border border-white/10 bg-zinc-950/75 p-1.5 shadow-2xl shadow-black/30 backdrop-blur-xl">
        {socialLinks.map((link) => {
          const Icon = link.icon;

          return (
            <a
              key={link.href}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel={link.href.startsWith("http") ? "noreferrer" : undefined}
              aria-label={link.label}
              title={link.label}
              className="group inline-flex size-10 items-center justify-center rounded-full text-zinc-300 transition hover:bg-white hover:text-zinc-950 focus:outline-none focus:ring-2 focus:ring-amber-300"
            >
              <Icon
                size={18}
                aria-hidden="true"
                className="transition group-hover:scale-105"
              />
            </a>
          );
        })}
      </div>
    </aside>
  );
}
