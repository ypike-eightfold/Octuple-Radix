import React from 'react';
import './RadioV2.css';

export type RadioV2Size = 'small' | 'medium' | 'large';

export interface RadioV2Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Radio button size */
  size?: RadioV2Size;
  /** Label text */
  label?: string;
  /** Additional CSS classes */
  className?: string;
}

export const RadioV2 = React.forwardRef<HTMLInputElement, RadioV2Props>(
  (
    {
      size = 'large',
      label,
      className = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const radioId = props.id || `radio-${Math.random().toString(36).substr(2, 9)}`;

    return (
      <label className={`radio-v2 radio-v2--${size} ${className}`}>
        <input
          ref={ref}
          type="radio"
          className="radio-v2__input"
          disabled={disabled}
          id={radioId}
          {...props}
        />
        <span className="radio-v2__circle">
          <span className="radio-v2__dot"></span>
        </span>
        {label && <span className="radio-v2__label">{label}</span>}
      </label>
    );
  }
);

RadioV2.displayName = 'RadioV2';

