import { cn } from '@/src/utils/cn';
import React from 'react';

const Button = ({
  children,
  className,
  color = 'default',
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  color?: 'default' | 'light-gray';
}) => {
  const colorClasses = {
    'default': 'default-button-avocado',
    'light-gray': 'default-button-light-gray',
  };

  return (
    <button
      className={cn(colorClasses[color], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;