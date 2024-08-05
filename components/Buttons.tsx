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
  const baseClass = 'btn btn-block btn-md rounded-xl';
  let variantClasses = '';

  switch (variant) {
    case 'primary':
      variantClasses = 'btn-primary';
      break;
    case 'secondary':
      variantClasses = 'btn-secondary';
      break;
    case 'tertiary':
      variantClasses = 'btn-outline btn-primary';
      break;
    default:
      variantClasses = 'btn-ghost';
  }

  const classes = cn(baseClass, variantClasses, className);

  return (
    <button className={classes} type={type} {...props} disabled={disabled}>
      {disabled && <span className="loading loading-spinner"></span>}
      {children}
    </button>
  );
};

export default Buttons;
