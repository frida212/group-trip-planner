import { z } from 'zod';

// User Schemas
export const registerSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  name: z.string().min(1, 'Name is required'),
});

export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(1, 'Password is required'),
});

// Trip Schemas
export const createTripSchema = z.object({
  title: z.string().min(1, 'Trip title is required'),
  description: z.string().optional(),
  destination: z.string().min(1, 'Destination is required'),
  startDate: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid start date'),
  endDate: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid end date'),
  budget: z.number().positive('Budget must be positive').optional(),
});

export const updateTripSchema = createTripSchema.partial();

// Itinerary Schemas
export const createItinerarySchema = z.object({
  tripId: z.string().uuid('Invalid trip ID'),
  day: z.number().positive('Day must be positive'),
  title: z.string().min(1, 'Activity title is required'),
  description: z.string().optional(),
  location: z.string().optional(),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  estimatedCost: z.number().nonnegative().optional(),
});

// Expense Schemas
export const createExpenseSchema = z.object({
  tripId: z.string().uuid('Invalid trip ID'),
  description: z.string().min(1, 'Expense description is required'),
  amount: z.number().positive('Amount must be positive'),
  category: z.enum(['accommodation', 'food', 'transport', 'activities', 'other']),
  paidBy: z.string().uuid('Invalid payer ID'),
  splitAmong: z.array(z.string().uuid('Invalid user ID')).min(1, 'At least one person must be included'),
  date: z.string().refine((date) => !isNaN(Date.parse(date)), 'Invalid date'),
});

// Member Schemas
export const addMemberSchema = z.object({
  tripId: z.string().uuid('Invalid trip ID'),
  email: z.string().email('Invalid email address'),
});

// Type exports
export type RegisterInput = z.infer<typeof registerSchema>;
export type LoginInput = z.infer<typeof loginSchema>;
export type CreateTripInput = z.infer<typeof createTripSchema>;
export type UpdateTripInput = z.infer<typeof updateTripSchema>;
export type CreateItineraryInput = z.infer<typeof createItinerarySchema>;
export type CreateExpenseInput = z.infer<typeof createExpenseSchema>;
export type AddMemberInput = z.infer<typeof addMemberSchema>;
