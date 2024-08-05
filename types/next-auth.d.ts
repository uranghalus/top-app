import { DefaultSession } from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
<<<<<<< HEAD
      role: 'HRD' | 'SPV' | 'USER';
=======
      role: 'SPV' | 'HRD' | 'USER';
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
    } & DefaultSession['user'];
  }
}
