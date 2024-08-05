import NextAuth, { User } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import { prisma } from './prisma';
import { comparePassword } from './utils/password-utils';
import { authconfig } from './auth.config';

interface ExtendedUser extends User {
  isAdmin: boolean;
}
export const { auth, handlers, signIn, signOut } = NextAuth({
  ...authconfig,
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
          where: {
            email: credentials.email as string,
          },
        });
        if (!user) {
          throw new Error('Pengguna Tidak Ditemukan!');
        }
        const PassswordCorrect = await comparePassword(
          credentials.password as string,
          user.salt as string,
          user.hash as string
        );
        if (!PassswordCorrect) {
          throw new Error('Password yang anda masukkan salah!');
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
