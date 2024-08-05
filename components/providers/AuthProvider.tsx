import { auth } from '@/lib/auth';
import { ChildrenProps } from '@/types/ChildrenProps';
import React from 'react';
import { SessionProvider } from 'next-auth/react';
const AuthProvider: React.FC<ChildrenProps> = async ({ children }) => {
  const session = await auth();
  return <SessionProvider session={session}>{children}</SessionProvider>;
};

export default AuthProvider;
