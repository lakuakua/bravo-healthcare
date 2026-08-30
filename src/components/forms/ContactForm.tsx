"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { inquiryInterests } from "@/data/navigation";
import { cn } from "@/lib/cn";

const schema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(7, "Please enter a phone number."),
  email: z.string().email("Please enter a valid email address."),
  interest: z.string().min(1, "Please select a service interest."),
  message: z.string().min(8, "Please share a short message."),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm({
  heading = "How Can We Help?",
  compact = false,
  idPrefix = "",
  submitLabel = "Request a Call",
}: {
  heading?: string;
  compact?: boolean;
  idPrefix?: string;
  submitLabel?: string;
}) {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", phone: "", email: "", interest: "", message: "" },
  });

  async function onSubmit() {
    try {
      await new Promise((resolve) => setTimeout(resolve, 600));
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  }

  const field = "w-full rounded-xl border border-light-gray bg-white px-4 py-3 text-base text-text-dark";
  const label = cn("mb-1.5 block text-sm font-semibold", compact ? "text-white" : "text-bravo-navy");

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn("space-y-3", !compact && "space-y-4")} noValidate>
      {heading ? (
        <h2 className={cn(compact ? "text-xl text-white sm:text-2xl" : "text-2xl sm:text-3xl")}>{heading}</h2>
      ) : null}
      <div>
        <label htmlFor={`${idPrefix}name`} className={label}>
          Full Name
        </label>
        <input id={`${idPrefix}name`} autoComplete="name" className={field} {...register("name")} />
        {errors.name ? <p className="mt-1 text-sm text-bravo-red">{errors.name.message}</p> : null}
      </div>
      <div className={cn("grid gap-3", !compact && "gap-4 sm:grid-cols-2")}>
        <div>
          <label htmlFor={`${idPrefix}phone`} className={label}>
            Phone Number
          </label>
          <input id={`${idPrefix}phone`} type="tel" autoComplete="tel" className={field} {...register("phone")} />
          {errors.phone ? <p className="mt-1 text-sm text-bravo-red">{errors.phone.message}</p> : null}
        </div>
        <div>
          <label htmlFor={`${idPrefix}email`} className={label}>
            Email Address
          </label>
          <input id={`${idPrefix}email`} type="email" autoComplete="email" className={field} {...register("email")} />
          {errors.email ? <p className="mt-1 text-sm text-bravo-red">{errors.email.message}</p> : null}
        </div>
      </div>
      <div>
        <label htmlFor={`${idPrefix}interest`} className={label}>
          Service Interest
        </label>
        <select id={`${idPrefix}interest`} className={field} {...register("interest")}>
          <option value="">Select a service</option>
          {inquiryInterests.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.interest ? <p className="mt-1 text-sm text-bravo-red">{errors.interest.message}</p> : null}
      </div>
      <div>
        <label htmlFor={`${idPrefix}message`} className={label}>
          Message
        </label>
        <textarea id={`${idPrefix}message`} rows={compact ? 3 : 4} className={field} {...register("message")} />
        {errors.message ? <p className="mt-1 text-sm text-bravo-red">{errors.message.message}</p> : null}
      </div>
      <Button type="submit" disabled={isSubmitting} variant="secondary" className="w-full sm:w-auto">
        {isSubmitting ? "Sending…" : submitLabel}
      </Button>
      {status === "success" ? (
        <p className="text-sm font-medium text-bravo-teal" role="status">
          Thank you. Your request was received. Our team will follow up by email.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-bravo-red" role="alert">
          Something went wrong while sending your request. Please try again or contact our office by email.
        </p>
      ) : null}
    </form>
  );
}
