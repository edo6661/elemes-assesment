import { cn } from '@/src/utils/cn';
import React from 'react';

const Button = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <button
      className={cn('default-button', className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;