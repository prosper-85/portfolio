import { CheckCircle2 } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import MotionSection from "@/components/MotionSection";
import { siteConfig } from "@/lib/portfolio";

const contactNotes = [
  "Frontend lead and full-stack roles",
  "React, Next.js, React Native, and Node.js product work",
  "Available for relocation for the right opportunity",
];

export default function Contact() {
  return (
    <MotionSection className="px-6 py-24 sm:px-8 lg:px-12" id="contact">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-lg border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.08),rgba(255,255,255,0.03))] p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.24em] text-amber-300">
                Contact
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-normal text-white sm:text-5xl">
                Let&apos;s build a product people can trust.
              </h2>
              <p className="mt-5 text-base leading-8 text-zinc-300 sm:text-lg">
                Open to frontend lead, full-stack, mobile engineering, and
                product UI roles where quality, ownership, and production
                reliability matter.
              </p>

              <div className="mt-8 grid gap-3">
                {contactNotes.map((note) => (
                  <div
                    key={note}
                    className="flex items-center gap-3 rounded-lg border border-white/10 bg-zinc-950/45 p-4 text-sm text-zinc-300"
                  >
                    <CheckCircle2
                      size={18}
                      aria-hidden="true"
                      className="shrink-0 text-emerald-300"
                    />
                    {note}
                  </div>
                ))}
              </div>

              <p className="mt-6 text-sm leading-6 text-zinc-500">
                Prefer a direct email? The form sends to {siteConfig.email} via
                a prefilled email draft after validation.
              </p>
            </div>

            <ContactForm />
          </div>
        </div>
      </div>
    </MotionSection>
  );
}
