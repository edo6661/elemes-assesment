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
      className={cn('bg-avocado-500 text-white transition-colors hover:bg-avocado-500/80', className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;