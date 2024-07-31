import { ChildrenProps } from '@/types/ChildrenProps';
import React from 'react';

const AuthLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-gray-100">
      {children}
    </div>
  );
};

export default AuthLayout;
