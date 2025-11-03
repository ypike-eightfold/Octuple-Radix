import React, { useState, forwardRef } from 'react';
import './TextFieldV2.css';

export type TextFieldV2Shape = 'rounded' | 'pill' | 'inline';
export type TextFieldV2Size = 'small' | 'medium' | 'large';
export type TextFieldV2State = 'default' | 'error';

export interface TextFieldV2Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Shape variant */
  shape?: TextFieldV2Shape;
  /** Size variant */
  size?: TextFieldV2Size;
  /** Error state */
  error?: boolean;
  /** Left icon (Material Design Icons name) */
  leftIcon?: string;
  /** Right icon (Material Design Icons name) */
  rightIcon?: string;
  /** Show clear button when filled */
  clearable?: boolean;
  /** Callback when clear button is clicked */
  onClear?: () => void;
  /** Additional CSS classes */
  className?: string;
}

export const TextFieldV2 = forwardRef<HTMLInputElement, TextFieldV2Props>(
  (
    {
      shape = 'rounded',
      size = 'large',
      error = false,
      leftIcon,
      rightIcon,
      clearable = false,
      onClear,
      className = '',
      value,
      onChange,
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(value || '');
    const currentValue = value !== undefined ? value : internalValue;
    const hasValue = currentValue && String(currentValue).length > 0;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (value === undefined) {
        setInternalValue(e.target.value);
      }
      onChange?.(e);
    };

    const handleClear = () => {
      if (value === undefined) {
        setInternalValue('');
      }
      onClear?.();
    };

    return (
      <div
        className={`
          textfield-v2 
          textfield-v2--${shape} 
          textfield-v2--${size}
          ${error ? 'textfield-v2--error' : ''}
          ${props.disabled ? 'textfield-v2--disabled' : ''}
          ${className}
        `}
      >
        {leftIcon && (
          <span className="textfield-v2__icon textfield-v2__icon--left material-symbols-outlined">
            {leftIcon}
          </span>
        )}
        
        <input
          ref={ref}
          className="textfield-v2__input"
          value={currentValue}
          onChange={handleChange}
          {...props}
        />
        
        {clearable && hasValue && !props.disabled && (
          <button
            type="button"
            className="textfield-v2__clear material-symbols-outlined"
            onClick={handleClear}
            tabIndex={-1}
          >
            close
          </button>
        )}
        
        {rightIcon && !clearable && (
          <span className="textfield-v2__icon textfield-v2__icon--right material-symbols-outlined">
            {rightIcon}
          </span>
        )}
      </div>
    );
  }
);

TextFieldV2.displayName = 'TextFieldV2';

