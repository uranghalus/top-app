import React, { InputHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icons?: IconType;
  error: any;
}
const InputComps: React.FC<InputProps> = ({
  icons: Icon,
  placeholder,
  type,
  className,
  name,
  ...props
}) => {
  return (
    <label className="input input-bordered flex items-center gap-2 rounded-xl">
      {Icon && <Icon className="h-5 w-auto opacity-70 fill-current" />}
      <input
        type={type}
        name={name}
        className={`grow ${className}`}
        placeholder={placeholder}
        {...props}
      />
    </label>
  );
};

export default InputComps;
