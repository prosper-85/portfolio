"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Send } from "lucide-react";
import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { z } from "zod";
import { siteConfig } from "@/lib/portfolio";

const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name should be at least 2 characters.")
    .max(80, "Name should be under 80 characters."),
  email: z
    .string()
    .trim()
    .email("Enter a valid email address.")
    .max(120, "Email should be under 120 characters."),
  projectType: z.enum(["frontend", "fullstack", "mobile", "product", "other"]),
  timeline: z
    .string()
    .trim()
    .min(2, "Share a rough timeline.")
    .max(80, "Timeline should be under 80 characters."),
  budget: z
    .string()
    .trim()
    .max(80, "Budget should be under 80 characters.")
    .optional(),
  message: z
    .string()
    .trim()
    .min(30, "Tell me a little more about the work.")
    .max(1000, "Message should stay under 1000 characters."),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const projectTypes = [
  { value: "frontend", label: "Frontend build" },
  { value: "fullstack", label: "Full-stack build" },
  { value: "mobile", label: "Mobile app" },
  { value: "product", label: "Product UI" },
  { value: "other", label: "Other" },
] satisfies Array<{ value: ContactFormValues["projectType"]; label: string }>;

const defaultValues: ContactFormValues = {
  name: "",
  email: "",
  projectType: "frontend",
  timeline: "",
  budget: "",
  message: "",
};

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    formState: { errors, isSubmitting },
    handleSubmit,
    register,
    reset,
    control,
  } = useForm<ContactFormValues>({
    defaultValues,
    mode: "onBlur",
    resolver: zodResolver(contactFormSchema),
  });
  const messageValue = useWatch({ control, name: "message" });

  async function onSubmit(values: ContactFormValues) {
    const subject = encodeURIComponent(
      `Portfolio inquiry: ${projectTypes.find((type) => type.value === values.projectType)?.label}`,
    );
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Email: ${values.email}`,
        `Project type: ${values.projectType}`,
        `Timeline: ${values.timeline}`,
        `Budget: ${values.budget || "Not specified"}`,
        "",
        values.message,
      ].join("\n"),
    );

    setSubmitted(true);
    window.location.assign(
      `mailto:${siteConfig.email}?subject=${subject}&body=${body}`,
    );
    reset(defaultValues);
  }

  return (
    <form
      noValidate
      onSubmit={handleSubmit(onSubmit)}
      className="rounded-lg border border-white/10 bg-zinc-950/70 p-5 shadow-2xl shadow-black/20 backdrop-blur sm:p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label
            htmlFor="name"
            className="text-sm font-medium text-zinc-200"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            autoComplete="name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            {...register("name")}
            className="mt-2 min-h-12 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
            placeholder="Your name"
          />
          {errors.name ? (
            <p id="name-error" className="mt-2 text-sm text-amber-200">
              {errors.name.message}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="email"
            className="text-sm font-medium text-zinc-200"
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            {...register("email")}
            className="mt-2 min-h-12 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
            placeholder="you@company.com"
          />
          {errors.email ? (
            <p id="email-error" className="mt-2 text-sm text-amber-200">
              {errors.email.message}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="projectType"
            className="text-sm font-medium text-zinc-200"
          >
            Project type
          </label>
          <select
            id="projectType"
            aria-invalid={Boolean(errors.projectType)}
            aria-describedby={
              errors.projectType ? "project-type-error" : undefined
            }
            {...register("projectType")}
            className="mt-2 min-h-12 w-full rounded-lg border border-white/10 bg-zinc-950 px-4 text-sm text-white outline-none transition focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
          >
            {projectTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>
          {errors.projectType ? (
            <p id="project-type-error" className="mt-2 text-sm text-amber-200">
              {errors.projectType.message}
            </p>
          ) : null}
        </div>

        <div>
          <label
            htmlFor="timeline"
            className="text-sm font-medium text-zinc-200"
          >
            Timeline
          </label>
          <input
            id="timeline"
            type="text"
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={errors.timeline ? "timeline-error" : undefined}
            {...register("timeline")}
            className="mt-2 min-h-12 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
            placeholder="Now, 2 weeks, Q3..."
          />
          {errors.timeline ? (
            <p id="timeline-error" className="mt-2 text-sm text-amber-200">
              {errors.timeline.message}
            </p>
          ) : null}
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="budget" className="text-sm font-medium text-zinc-200">
          Budget
        </label>
        <input
          id="budget"
          type="text"
          aria-invalid={Boolean(errors.budget)}
          aria-describedby={errors.budget ? "budget-error" : undefined}
          {...register("budget")}
          className="mt-2 min-h-12 w-full rounded-lg border border-white/10 bg-white/[0.04] px-4 text-sm text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
          placeholder="Optional"
        />
        {errors.budget ? (
          <p id="budget-error" className="mt-2 text-sm text-amber-200">
            {errors.budget.message}
          </p>
        ) : null}
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between gap-3">
          <label
            htmlFor="message"
            className="text-sm font-medium text-zinc-200"
          >
            Message
          </label>
          <span className="text-xs text-zinc-500">
            {messageValue.length}/1000
          </span>
        </div>
        <textarea
          id="message"
          rows={6}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          {...register("message")}
          className="mt-2 w-full resize-y rounded-lg border border-white/10 bg-white/[0.04] px-4 py-3 text-sm leading-6 text-white outline-none transition placeholder:text-zinc-600 focus:border-cyan-300 focus:ring-2 focus:ring-cyan-300/20"
          placeholder="What are you building, what do you need, and what would make this successful?"
        />
        {errors.message ? (
          <p id="message-error" className="mt-2 text-sm text-amber-200">
            {errors.message.message}
          </p>
        ) : null}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        {submitted ? (
          <p className="inline-flex items-center gap-2 text-sm text-emerald-200">
            <CheckCircle2 size={17} aria-hidden="true" />
            Validated. Your email draft is opening.
          </p>
        ) : (
          <p className="text-sm text-zinc-500">
            Validation runs before the email draft opens.
          </p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-cyan-200 px-6 py-3 text-sm font-semibold text-zinc-950 transition hover:-translate-y-0.5 hover:bg-white focus:outline-none focus:ring-2 focus:ring-amber-300 disabled:cursor-not-allowed disabled:opacity-60"
        >
          <Send size={17} aria-hidden="true" />
          {isSubmitting ? "Preparing..." : "Send message"}
        </button>
      </div>
    </form>
  );
}
