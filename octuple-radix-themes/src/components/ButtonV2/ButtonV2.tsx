import React from 'react';
import './ButtonV2.css';

export type ButtonV2Variant = 
  | 'primary'
  | 'secondary'
  | 'default'
  | 'neutral'
  | 'system-ui'
  | 'disruptive-primary'
  | 'disruptive-secondary'
  | 'disruptive-default'
  | 'ghost';

export type ButtonV2Size = 'small' | 'medium' | 'large';

export interface ButtonV2Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** The visual style variant */
  variant?: ButtonV2Variant;
  /** Button size */
  size?: ButtonV2Size;
  /** Button content */
  children: React.ReactNode;
  /** Additional CSS classes */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

export const ButtonV2 = React.forwardRef<HTMLButtonElement, ButtonV2Props>(
  (
    { 
      variant = 'primary',
      size = 'large',
      children, 
      className = '', 
      disabled = false,
      type = 'button',
      ...props 
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={`btn-v2 btn-v2--${variant} btn-v2--${size} ${className}`}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    );
  }
);

ButtonV2.displayName = 'ButtonV2';

