import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      role: 'HRD' | 'SPV' | 'USER';
    } & DefaultSession['user'];
  }
}