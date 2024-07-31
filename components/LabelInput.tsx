import Link, { LinkProps } from 'next/link';
import React from 'react';
interface LabelProps {
  label: string;
  altText: string;
  isShown?: boolean;
  error?: string;
  href?: any;
}

const LabelInput: React.FC<LabelProps> = ({
  altText,
  label,
  error,
  isShown = false,
  href,
}) => {
  return (
    <div className="label">
      <span className={`label-text ${error ? 'text-error' : ''}`}>
        {error || label}
      </span>
      {isShown && (
        <Link href={href} className="label-text-alt link link-primary">
          {altText}
        </Link>
      )}
    </div>
  );
};

export default LabelInput;
