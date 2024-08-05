'use client';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { IStaticMethods } from 'preline/preline';
declare global {
  interface Window {
    HSStaticMethods: IStaticMethods;
  }
}
const PrelineScript = () => {
  const path = usePathname();

  useEffect(() => {
    const loadPreline = async () => {
      await import('preline/preline');

      window.HSStaticMethods.autoInit();
    };

    loadPreline();
  }, [path]);

  return null;
};

export default PrelineScript;
