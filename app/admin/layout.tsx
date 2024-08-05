import Sidebar from '@/components/Sidebar';
import React from 'react';

const AdminLayout = () => {
  return (
    <>
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <Sidebar />
      </div>
    </>
  );
};

export default AdminLayout;
