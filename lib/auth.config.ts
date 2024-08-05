<<<<<<< HEAD
import { NextAuthConfig } from 'next-auth';

export const authconfig = {
=======
import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
  pages: {
    error: '/signin',
    signIn: '/signin',
    newUser: '/signup',
  },
<<<<<<< HEAD
  secret: process.env.AUTH_SECRET!,
=======
  callbacks: {
    authorized({ request, auth }: any) {
      const protectedPaths = [
        // /\/shipping/,
        // /\/payment/,
        // /\/place-order/,
        /\/profile/,
        // /\/order\/(.*)/,
        /\/admin/,
      ];
      const { pathname } = request.nextUrl;
      if (protectedPaths.some((p) => p.test(pathname))) return !!auth;
      return true;
    },
  },
  secret: process.env.AUTH_SECRET,
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
  providers: [],
} satisfies NextAuthConfig;
