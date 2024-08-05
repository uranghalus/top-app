import { ChildrenProps } from '@/types/ChildrenProps';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
import { auth } from '@/lib/auth';
const AuthProvider: React.FC<ChildrenProps> = async ({ children }) => {
  const session = await auth();
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
