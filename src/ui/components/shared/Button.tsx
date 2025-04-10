import { cn } from '@/src/utils/cn';
import React from 'react';

const Button = ({
  children,
  className,
  color = 'default',
  onClick,
  disabled,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  color?: 'default' | 'light-gray';
  onClick?: () => void;
  disabled?: boolean;
}) => {
  const colorClasses = {
    'default': 'default-button-avocado',
    'light-gray': 'default-button-light-gray',
  };

  return (
    <button
      className={cn(colorClasses[color], className)}
      {...props}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;