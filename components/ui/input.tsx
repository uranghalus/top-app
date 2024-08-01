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
      <div className="input input-bordered flex items-center gap-2 rounded-xl">
        {Icon && <Icon className="h-5 w-auto opacity-70 fill-current" />}
        <input
          type={type}
          className={cn('grow', className)}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
