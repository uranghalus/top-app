import * as React from 'react';

import { cn } from '@/lib/utils';
import { IconType } from 'react-icons';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icons?: IconType;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icons: Icon, ...props }, ref) => {
    return (
      <div className="relative">
        <input
          type={type}
          className={cn(
            'peer py-3 px-4 ps-11 block w-full bg-gray-100 border-transparent rounded-lg text-sm focus:border-primary-500 focus:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-700 dark:border-transparent dark:text-neutral-400 dark:placeholder-neutral-500 dark:focus:ring-neutral-600',
            className
          )}
          ref={ref}
          {...props}
        />
        {Icon && (
          <div className="absolute inset-y-0 start-0 flex items-center pointer-events-none ps-4 peer-disabled:opacity-50 peer-disabled:pointer-events-none">
            <Icon className="shrink-0 size-4 text-gray-500 dark:text-neutral-500" />
          </div>
        )}
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
