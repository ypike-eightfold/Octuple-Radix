import React, { forwardRef } from 'react';
import './CheckboxV2.css';

export type CheckboxV2Size = 'small' | 'medium' | 'large';

export interface CheckboxV2Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Size variant */
  size?: CheckboxV2Size;
  /** Indeterminate state (partially checked) */
  indeterminate?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const CheckboxV2 = forwardRef<HTMLInputElement, CheckboxV2Props>(
  (
    {
      size = 'large',
      indeterminate = false,
      className = '',
      disabled = false,
      ...props
    },
    ref
  ) => {
    const checkboxRef = React.useRef<HTMLInputElement>(null);
    
    React.useImperativeHandle(ref, () => checkboxRef.current!);

    React.useEffect(() => {
      if (checkboxRef.current) {
        checkboxRef.current.indeterminate = indeterminate;
      }
    }, [indeterminate]);

    return (
      <label
        className={`
          checkbox-v2 
          checkbox-v2--${size}
          ${disabled ? 'checkbox-v2--disabled' : ''}
          ${className}
        `}
      >
        <input
          ref={checkboxRef}
          type="checkbox"
          className="checkbox-v2__input"
          disabled={disabled}
          {...props}
        />
        <span className="checkbox-v2__box">
          <span className="checkbox-v2__checkmark material-symbols-outlined">
            check
          </span>
          <span className="checkbox-v2__indeterminate material-symbols-outlined">
            remove
          </span>
        </span>
      </label>
    );
  }
);

CheckboxV2.displayName = 'CheckboxV2';

