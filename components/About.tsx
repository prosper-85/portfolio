import MotionSection from "@/components/MotionSection";
import { strengths } from "@/lib/portfolio";

export default function About() {
  return (
    <MotionSection className="px-6 py-24 sm:px-8 lg:px-12" id="about">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
              About
            </p>
            <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
              I lead frontend delivery across scalable web, mobile, and fintech
              platforms.
            </h2>
          </div>

          <div className="space-y-6 text-base leading-8 text-zinc-300 sm:text-lg">
            <p>
              I am a Frontend Lead and Full-Stack Engineer focused on scalable
              fintech, mobility, and enterprise applications. My work sits
              closest to the product layer: reliable interfaces, reusable UI
              systems, API integration, and performance work that holds up
              after launch.
            </p>
            <p>
              My current focus is React, Next.js, React Native, and backend
              collaboration with Node.js. I am also available for relocation for
              the right frontend, full-stack, or mobile engineering role.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {strengths.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="rounded-lg border border-white/10 bg-white/[0.04] p-6 shadow-xl shadow-black/10"
              >
                <div className="mb-5 inline-flex size-11 items-center justify-center rounded-lg bg-cyan-300 text-zinc-950">
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </MotionSection>
  );
}
