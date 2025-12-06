import * as z from "zod";

export const contact_schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone number is required"),
  subject: z.string().min(2, "Subject name is required"),
  orderid: z.string().min(2, "Order ID is required"),
  msg: z.string().min(5, "Message is required"),
});

export type ContactFormType = z.infer<typeof contact_schema>;
