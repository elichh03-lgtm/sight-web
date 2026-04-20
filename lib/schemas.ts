import { z } from "zod";

export const LeadSchema = z.object({
  name: z.string().trim().min(1, "Your name is required").max(120),
  business: z.string().trim().min(1, "Business name is required").max(160),
  website: z
    .string()
    .trim()
    .min(1, "Website is required")
    .max(300)
    .transform((v) => (/^https?:\/\//i.test(v) ? v : `https://${v}`))
    .pipe(z.string().url("Enter a valid website URL")),
  email: z.string().trim().toLowerCase().email("Enter a valid email").max(200),
  notes: z.string().trim().max(2000).optional().or(z.literal("")),
  hp: z.string().max(0).optional(), // honeypot — must be empty
});

export const ContactSchema = z.object({
  name: z.string().trim().min(1, "Your name is required").max(120),
  email: z.string().trim().toLowerCase().email("Enter a valid email").max(200),
  message: z.string().trim().min(5, "Add a short message").max(4000),
  hp: z.string().max(0).optional(),
});

export type LeadInput = z.infer<typeof LeadSchema>;
export type ContactInput = z.infer<typeof ContactSchema>;
