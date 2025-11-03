import React, { forwardRef } from 'react';
import './TextAreaV2.css';

export type TextAreaV2Shape = 'rounded' | 'pill' | 'inline';
export type TextAreaV2Size = 'small' | 'medium' | 'large';

export interface TextAreaV2Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Shape variant */
  shape?: TextAreaV2Shape;
  /** Size variant */
  size?: TextAreaV2Size;
  /** Error state */
  error?: boolean;
  /** Additional CSS classes */
  className?: string;
  /** Number of visible text rows */
  rows?: number;
  /** Resize behavior */
  resize?: 'none' | 'vertical' | 'horizontal' | 'both';
}

export const TextAreaV2 = forwardRef<HTMLTextAreaElement, TextAreaV2Props>(
  (
    {
      shape = 'rounded',
      size = 'large',
      error = false,
      className = '',
      rows = 4,
      resize = 'vertical',
      ...props
    },
    ref
  ) => {
    return (
      <textarea
        ref={ref}
        rows={rows}
        className={`
          textarea-v2 
          textarea-v2--${shape} 
          textarea-v2--${size}
          textarea-v2--resize-${resize}
          ${error ? 'textarea-v2--error' : ''}
          ${props.disabled ? 'textarea-v2--disabled' : ''}
          ${className}
        `}
        {...props}
      />
    );
  }
);

TextAreaV2.displayName = 'TextAreaV2';

