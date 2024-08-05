import { RegisterForm } from '@/types/FormProps';
import { z, ZodType } from 'zod';
<<<<<<< HEAD
export const RegisterSchema = z.object({
  name: z.string().min(1, {
    message: 'Nama Tidak Boleh 1 karakter.',
=======

export const RegisterSchema: ZodType<RegisterForm> = z.object({
  name: z.string().min(1, { message: 'Name cannot empty' }),
  password: z.string().min(6).max(100, {
    message: 'Password must be between 6 and 100 characters',
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
  }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
<<<<<<< HEAD
  password: z.string().min(8, {
    message: 'Password minimal 8 karakter.',
  }),
});
=======
  // confirm_password: z.string().min(6).max(100, {
  //   message: 'Confirm password must be between 6 and 100 characters',
  // }),
});
//   .superRefine(({ confirm_password, password }, ctx) => {
//     if (confirm_password !== password) {
//       ctx.addIssue({
//         code: 'custom',
//         message: 'Passwords do not match',
//         path: ['confirm_password'],
//       });
//     }
//   });
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
export const LoginSchema = z.object({
  password: z
    .string()
    .min(6, {
      message: 'Password must have at least 6 or more characters',
    })
    .max(100, {
      message: 'Password must be between 6 and 100 characters',
    }),
  email: z.string().email({
    message: 'Please enter a valid email address',
  }),
});
