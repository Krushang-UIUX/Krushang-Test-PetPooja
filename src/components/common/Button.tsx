import React from 'react';
import type { IconType } from 'react-icons';

interface ButtonProps {
  icon: IconType;
  label?: string;           
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ icon: Icon, label, className = ''}) => {

  const iconClassName = label ? '' : 'icon-32';

  return (
    <button
      className={`btn btn-main d-flex gap-1 justify-content-center align-items-center ${className}`}
    >
      {Icon({ className: iconClassName })}
      {label && <span>{label}</span>}
    </button>
  );
};

export default Button;
