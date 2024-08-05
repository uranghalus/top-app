import { cn } from '@/lib/utils';
import React, { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  className?: string;
}

const Buttons: React.FC<ButtonProps> = ({
  type = 'button',
  children,
  variant = 'primary',
  className = '',
  disabled,
  ...props
}) => {
  const baseClass =
    'w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg';
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses =
        'border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none';
      break;
    case 'secondary':
      variantClasses =
        'border border-gray-200 text-gray-500 hover:border-blue-600 hover:text-blue-600 focus:outline-none focus:border-blue-600 focus:text-blue-600 disabled:opacity-50 disabled:pointer-events-none dark:border-neutral-700 dark:text-neutral-400 dark:hover:text-blue-500 dark:hover:border-blue-600 dark:focus:text-blue-500 dark:focus:border-blue-600';
      break;
    case 'tertiary':
      variantClasses =
        'border border-transparent bg-gray-500 text-white hover:bg-gray-600 focus:outline-none focus:bg-gray-600 disabled:opacity-50 disabled:pointer-events-none';
      break;
    default:
      variantClasses =
        'border border-transparent text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700 dark:focus:bg-neutral-700';
  }

  const classes = cn(baseClass, variantClasses, className);

  return (
    <button className={classes} type={type} {...props} disabled={disabled}>
      {disabled && (
        <span
          className="animate-spin inline-block size-4 border-[3px] border-current border-t-transparent text-white rounded-full"
          role="status"
          aria-label="loading"
        />
      )}
      {children}
    </button>
  );
};

export default Buttons;
