import NextAuth, { User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from './prisma';
import { comparePassword } from './utils/password-utils';
<<<<<<< HEAD
import { authconfig } from './auth.config';

interface ExtendedUser extends User {
  isAdmin: boolean;
}
export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authconfig,
=======
import { authConfig } from './auth.config';
interface ExtendedUser extends User {
  role: 'HRD' | 'SPV' | 'USER';
}
export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
  providers: [
    Credentials({
      name: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      authorize: async (credentials) => {
        if (!credentials?.email || !credentials?.password) {
          throw new Error('Missing Credentials');
        }
        const user = await prisma.user.findUnique({
<<<<<<< HEAD
          where: {
            email: credentials.email as string,
          },
=======
          where: { email: credentials.email as string },
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
        });
        if (!user) {
          throw new Error('Pengguna Tidak Ditemukan!');
        }
<<<<<<< HEAD
        const PassswordCorrect = await comparePassword(
          credentials.password as string,
          user.salt as string,
          user.hash as string
        );
        if (!PassswordCorrect) {
          throw new Error('Password yang anda masukkan salah!');
=======
        const isValidPassword = await comparePassword(
          credentials.password as string,
          user.salt,
          user.hash
        );
        if (!isValidPassword) {
          throw new Error('Password Yang Anda Masukkan Salah!');
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
        }
        return user ?? null;
      },
    }),
  ],
  callbacks: {
    async jwt({ user, trigger, session, token }: any) {
      const Extuser: ExtendedUser = user;
      if (Extuser) {
        token.user = {
          _id: user._id,
          email: user.email,
          name: user.name,
          role: user.role,
        };
      }
      if (trigger === 'update' && session) {
        token.user = {
          ...token.user,
          email: session.user.email,
          name: session.user.name,
        };
      }
      return token;
    },
    session: async ({ session, token }: any) => {
      if (token) {
        session.user = token.user;
      }
      return session;
    },
  },
});
