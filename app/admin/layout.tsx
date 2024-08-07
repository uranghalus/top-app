import BreadCrumb from '@/components/BreadCrumb';
import Navbar from '@/components/Navbar';
import Sidebar from '@/components/Sidebar';
import { ChildrenProps } from '@/types/ChildrenProps';
import React from 'react';

const AdminLayout: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <div className="bg-gray-50 dark:bg-neutral-900">
      <Navbar />
      <BreadCrumb />
      <Sidebar />

      <div className="w-full lg:ps-64">
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-6">{children}</div>
      </div>
    </div>
  );
};

export default AdminLayout;
