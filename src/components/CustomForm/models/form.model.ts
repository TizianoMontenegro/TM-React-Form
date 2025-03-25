import { z } from "zod";

export const schema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Email is invalid').min(1, 'Email is required'),
  password: z.string().min(6, 'Password has to have 6 character at least'),
  confirmPassword: z.string().min(6, 'Confirm password has to have 6 character at least')
}).refine(data => data.confirmPassword === data.password, {
  message: 'Confirm password is not equals to password',
  path: ['confirmPassword']
});

export type FormValues = z.infer<typeof schema>;