import { z } from 'zod';

const OrganizationValidationSchema = z.object({
 name: z.string().min(1).max(255),
 location: z.string().min(1).max(255),
 employeeNumbers: z.number(),
});

export const TourValidationSchema = z.object({
 body: z.object({
  organization: OrganizationValidationSchema,
  tourPlace: z.string().min(1).max(255),
  totallMembers: z.number().min(1),
  activity: z.array(z.string()).min(1),
  tourType: z.enum(['entertainment', 'education', 'adventure']),
  tourFee: z.number().min(0),
  currency: z.string().default('usd'),
  startDate: z.string().min(1),
  startLocation: z.string().min(1),
  startTime: z.string().min(1),
  alcoholFree: z.boolean().default(true),
  contact: z.string().min(1),
  isDeleted: z.boolean().default(false),
 }),
});
