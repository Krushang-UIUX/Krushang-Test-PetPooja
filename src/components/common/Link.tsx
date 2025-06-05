import React from 'react';
import type { IconType } from 'react-icons';

interface LinkProps {
  href: string;
  icon: IconType;
  label?: string;           
  className?: string;
  'aria-label'?: string;
}

const Link: React.FC<LinkProps> = ({ href, icon: Icon, label, className = '', 'aria-label': ariaLabel }) => {

  const iconClassName = label ? '' : 'icon-32';

  return (
    <a
      href={href}
      className={`text__link d-flex gap-1 align-items-center ${className}`}
      aria-label={ariaLabel || label}
    >
      {Icon({ 'aria-hidden': true, className: iconClassName })}
      {label && <span>{label}</span>}
    </a>
  );
};

export default Link;
