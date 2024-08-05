'use client';
import routes from '@/routes/sidebar';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiAppsFill, RiCloseFill } from 'react-icons/ri';

const Sidebar = () => {
  const close = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const sidebarDrawer = document.getElementById('left-sidebar-drawer');
    if (sidebarDrawer) {
      (sidebarDrawer as HTMLElement).click();
    }
  };

  return (
    <div className="drawer-side z-30">
      <label htmlFor="left-sidebar-drawer" className="drawer-overlay"></label>
      <ul className="menu pt-2 w-80 bg-base-100 min-h-full text-base-content">
        <button
          className="btn btn-ghost bg-base-300  btn-circle z-50 top-0 right-0 mt-4 mr-2 absolute lg:hidden"
          onClick={close}
        >
          <RiCloseFill className="h-5 inline-block w-5" />
        </button>
        <li className="mb-2 font-semibold text-xl">
          <Link href={'/admin'}>
            <Image
              src={'/images/apps-fill-yy.png'}
              alt="logo"
              className="mask mask-squircle w-10"
              width={25}
              height={25}
            />
            {/* <RiAppsFill className="w-5" /> */}
            Dash Wind
          </Link>
        </li>
        {routes.map((route, k) => {
          return (
            <li className="" key={k}>
              <Link href={route.path}>{route.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
