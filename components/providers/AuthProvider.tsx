<<<<<<< HEAD
import { auth } from '@/lib/auth';
import { ChildrenProps } from '@/types/ChildrenProps';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
=======
import { ChildrenProps } from '@/types/ChildrenProps';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/lib/auth';
>>>>>>> 0bba8710e09936911f13a1c48766f6d693abb852
const AuthProvider: React.FC<ChildrenProps> = async ({ children }) => {
  const session = await auth();
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
