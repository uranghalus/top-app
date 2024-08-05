import { NextAuthConfig } from 'next-auth';

export const authconfig = {
  pages: {
    error: '/signin',
    signIn: '/signin',
    newUser: '/signup',
  },
  secret: process.env.AUTH_SECRET!,
  providers: [],
} satisfies NextAuthConfig;
