"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/Button";
import { referralServices } from "@/data/navigation";

const schema = z.object({
  sourceName: z.string().min(2, "Please enter your name."),
  organization: z.string().min(2, "Please enter your organization."),
  sourcePhone: z.string().min(7, "Please enter a phone number."),
  sourceEmail: z.string().email("Please enter a valid email address."),
  clientName: z.string().min(2, "Please enter the client name."),
  clientPhone: z.string().min(7, "Please enter a preferred phone number."),
  county: z.string().min(2, "Please enter the county."),
  service: z.string().min(1, "Please select a requested service."),
  notes: z.string().optional(),
  consent: z.boolean().refine((value) => value, "Please confirm before submitting."),
});

type FormValues = z.infer<typeof schema>;

export function ReferralForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      sourceName: "",
      organization: "",
      sourcePhone: "",
      sourceEmail: "",
      clientName: "",
      clientPhone: "",
      county: "",
      service: "",
      notes: "",
      consent: false,
    },
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

  const fieldClass = "w-full rounded-2xl border border-light-gray bg-white px-4 py-3 text-base";
  const labelClass = "mb-1.5 block text-sm font-semibold text-bravo-navy";

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      <fieldset>
        <legend className="mb-3 text-lg font-semibold text-bravo-navy">Referral Source</legend>
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="sourceName" className={labelClass}>
              Full Name
            </label>
            <input id="sourceName" className={fieldClass} {...register("sourceName")} />
            {errors.sourceName ? <p className="mt-1 text-sm text-bravo-red">{errors.sourceName.message}</p> : null}
          </div>
          <div>
            <label htmlFor="organization" className={labelClass}>
              Organization
            </label>
            <input id="organization" className={fieldClass} {...register("organization")} />
            {errors.organization ? <p className="mt-1 text-sm text-bravo-red">{errors.organization.message}</p> : null}
          </div>
          <div>
            <label htmlFor="sourcePhone" className={labelClass}>
              Phone
            </label>
            <input id="sourcePhone" type="tel" className={fieldClass} {...register("sourcePhone")} />
            {errors.sourcePhone ? <p className="mt-1 text-sm text-bravo-red">{errors.sourcePhone.message}</p> : null}
          </div>
          <div>
            <label htmlFor="sourceEmail" className={labelClass}>
              Email
            </label>
            <input id="sourceEmail" type="email" className={fieldClass} {...register("sourceEmail")} />
            {errors.sourceEmail ? <p className="mt-1 text-sm text-bravo-red">{errors.sourceEmail.message}</p> : null}
          </div>
        </div>
      </fieldset>
      <fieldset>
        <legend className="mb-3 text-lg font-semibold text-bravo-navy">Client</legend>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label htmlFor="clientName" className={labelClass}>
              Client Name
            </label>
            <input id="clientName" className={fieldClass} {...register("clientName")} />
            {errors.clientName ? <p className="mt-1 text-sm text-bravo-red">{errors.clientName.message}</p> : null}
          </div>
          <div>
            <label htmlFor="clientPhone" className={labelClass}>
              Preferred Phone
            </label>
            <input id="clientPhone" type="tel" className={fieldClass} {...register("clientPhone")} />
            {errors.clientPhone ? <p className="mt-1 text-sm text-bravo-red">{errors.clientPhone.message}</p> : null}
          </div>
          <div>
            <label htmlFor="county" className={labelClass}>
              County
            </label>
            <input id="county" className={fieldClass} {...register("county")} />
            {errors.county ? <p className="mt-1 text-sm text-bravo-red">{errors.county.message}</p> : null}
          </div>
        </div>
      </fieldset>
      <div>
        <label htmlFor="service" className={labelClass}>
          Requested Service
        </label>
        <select id="service" className={fieldClass} {...register("service")}>
          <option value="">Select a service</option>
          {referralServices.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </select>
        {errors.service ? <p className="mt-1 text-sm text-bravo-red">{errors.service.message}</p> : null}
      </div>
      <div>
        <label htmlFor="notes" className={labelClass}>
          Additional Notes
        </label>
        <textarea id="notes" rows={4} className={fieldClass} {...register("notes")} />
      </div>
      <label className="flex items-start gap-3 text-sm text-text-gray">
        <input type="checkbox" className="mt-1 h-4 w-4" {...register("consent")} />
        I confirm this referral is being submitted by a healthcare professional or authorized representative and does
        not include unnecessary medical details.
      </label>
      {errors.consent ? <p className="text-sm text-bravo-red">{errors.consent.message}</p> : null}
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting…" : "Submit"}
      </Button>
      {status === "success" ? (
        <p className="text-sm font-medium text-bravo-teal" role="status">
          Thank you. Your referral request was received. Our team will follow up by email.
        </p>
      ) : null}
      {status === "error" ? (
        <p className="text-sm text-bravo-red" role="alert">
          We couldn&apos;t submit your request. Please try again.
        </p>
      ) : null}
    </form>
  );
}
