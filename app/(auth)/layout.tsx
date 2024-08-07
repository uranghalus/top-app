import BreadCrumb from '@/components/BreadCrumb';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ChildrenProps } from '@/types/ChildrenProps';
import React from 'react';

const AuthLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-gray-100 flex justify-center items-center">
      {children}
    </div>
  );
};

export default AuthLayout;
