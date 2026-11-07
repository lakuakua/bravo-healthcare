import { z } from "zod";

/** Shared by the client forms and the API route handlers. */

export const contactSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name.").max(120),
  phone: z.string().trim().min(7, "Please enter a phone number.").max(32),
  email: z.string().trim().email("Please enter a valid email address.").max(254),
  interest: z.string().trim().min(1, "Please select a service interest.").max(120),
  message: z.string().trim().min(8, "Please share a short message.").max(4000),
});

export type ContactValues = z.infer<typeof contactSchema>;

export const referralSchema = z.object({
  sourceName: z.string().trim().min(2, "Please enter your name.").max(120),
  organization: z.string().trim().min(2, "Please enter your organization.").max(160),
  sourcePhone: z.string().trim().min(7, "Please enter a phone number.").max(32),
  sourceEmail: z.string().trim().email("Please enter a valid email address.").max(254),
  clientName: z.string().trim().min(2, "Please enter the client name.").max(120),
  clientPhone: z.string().trim().min(7, "Please enter a preferred phone number.").max(32),
  county: z.string().trim().min(2, "Please enter the county.").max(80),
  service: z.string().trim().min(1, "Please select a requested service.").max(120),
  notes: z.string().trim().max(4000).optional(),
  consent: z.boolean().refine((value) => value, "Please confirm before submitting."),
});

export type ReferralValues = z.infer<typeof referralSchema>;

/**
 * Bots fill hidden fields that humans never see. Submissions carrying a value
 * here are accepted by the API and discarded without sending mail.
 */
export const HONEYPOT_FIELD = "website";
