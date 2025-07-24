import React from 'react';
import { cn } from '@/lib/utils';

interface GlassProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'card' | 'button' | 'primary' | 'input' | 'sidebar' | 'table' | 'dropdown';
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: 'low' | 'medium' | 'high';
  children: React.ReactNode;
}

const glassVariants = {
  card: 'glass-card',
  button: 'glass-button',
  primary: 'glass-primary',
  input: 'glass-input',
  sidebar: 'glass-sidebar',
  table: 'glass-table',
  dropdown: 'glass-dropdown',
};

const blurVariants = {
  sm: 'backdrop-blur-sm',
  md: 'backdrop-blur-md',
  lg: 'backdrop-blur-lg',
  xl: 'backdrop-blur-xl',
};

const opacityVariants = {
  low: 'bg-white/30',
  medium: 'bg-white/50',
  high: 'bg-white/70',
};

export function Glass({
  variant = 'card',
  blur = 'md',
  opacity = 'medium',
  className,
  children,
  ...props
}: GlassProps) {
  return (
    <div
      className={cn(
        'glass',
        glassVariants[variant],
        blurVariants[blur],
        opacityVariants[opacity],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

// Specialized Glass Components
export function GlassCard({ className, children, ...props }: Omit<GlassProps, 'variant'>) {
  return (
    <Glass variant="card" className={cn('p-6', className)} {...props}>
      {children}
    </Glass>
  );
}

export function GlassButton({ className, children, ...props }: Omit<GlassProps, 'variant'>) {
  return (
    <Glass variant="button" className={cn('px-4 py-2 font-medium', className)} {...props}>
      {children}
    </Glass>
  );
}

export function GlassPrimaryButton({ className, children, ...props }: Omit<GlassProps, 'variant'>) {
  return (
    <Glass
      variant="primary"
      className={cn('px-6 py-3 font-semibold text-white', className)}
      {...props}
    >
      {children}
    </Glass>
  );
}

export function GlassInput({ className, ...props }: Omit<GlassProps, 'variant' | 'children'>) {
  return (
    <input
      className={cn('glass-input h-12 px-4 w-full border-0 focus:outline-none', className)}
      {...props}
    />
  );
}
