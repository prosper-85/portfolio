import MotionSection from "@/components/MotionSection";
import { techGroups } from "@/lib/portfolio";

export default function TechStack() {
  return (
    <MotionSection className="px-6 py-24 sm:px-8 lg:px-12" id="stack">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-emerald-300">
            Stack
          </p>
          <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
            Tools chosen for stable product delivery.
          </h2>
          <p className="mt-5 text-base leading-8 text-zinc-400 sm:text-lg">
            The focus is not on collecting frameworks. It is on using a compact
            stack well enough to ship reliable mobile and web products.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {techGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article
                key={group.title}
                className="rounded-lg border border-white/10 bg-zinc-900/60 p-6"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex size-10 items-center justify-center rounded-lg bg-white text-zinc-950">
                    <Icon size={19} aria-hidden="true" />
                  </span>
                  <h3 className="text-lg font-semibold text-white">
                    {group.title}
                  </h3>
                </div>

                <div className="mt-5 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-zinc-300"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
