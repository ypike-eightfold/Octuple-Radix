import React, { useState, forwardRef } from 'react';
import { TextField } from '@radix-ui/themes';
import { Icon } from '../Icon/Icon';
import './InputV2.css';

export type InputV2Size = 'small' | 'medium' | 'large';
export type InputV2Variant = 'default' | 'success' | 'warning' | 'error';

export interface InputV2Props {
  /** Size of the input field */
  size?: InputV2Size;
  /** Variant for highlight states */
  variant?: InputV2Variant;
  /** Value of the input */
  value?: string;
  /** Default value (uncontrolled) */
  defaultValue?: string;
  /** Placeholder text */
  placeholder?: string;
  /** Left icon name */
  leftIcon?: string;
  /** Whether to show clear button when filled */
  showClearButton?: boolean;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Whether the input is read-only */
  readOnly?: boolean;
  /** Change handler */
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  /** Focus handler */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Blur handler */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;
  /** Clear handler */
  onClear?: () => void;
  /** Additional CSS class */
  className?: string;
  /** Additional props to pass to the input element */
  [key: string]: any;
}

export const InputV2 = forwardRef<HTMLInputElement, InputV2Props>(
  (
    {
      size = 'large',
      variant = 'default',
      value,
      defaultValue,
      placeholder = 'Type to search',
      leftIcon = 'search',
      showClearButton = true,
      disabled = false,
      readOnly = false,
      onChange,
      onFocus,
      onBlur,
      onClear,
      className = '',
      ...props
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue || '');
    const [isFocused, setIsFocused] = useState(false);
    
    const isControlled = value !== undefined;
    const currentValue = isControlled ? value : internalValue;
    const isFilled = currentValue && currentValue.length > 0;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (!isControlled) {
        setInternalValue(event.target.value);
      }
      onChange?.(event);
    };

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(event);
    };

    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(event);
    };

    const handleClear = () => {
      if (!isControlled) {
        setInternalValue('');
      }
      onClear?.();
    };

    const sizeClass = `inputv2--${size}`;
    const variantClass = variant !== 'default' ? `inputv2--${variant}` : '';
    const stateClass = isFocused && variant === 'default' ? 'inputv2--focused' : '';
    const readOnlyClass = readOnly ? 'inputv2--readonly' : '';
    const disabledClass = disabled ? 'inputv2--disabled' : '';

    const containerClasses = [
      'inputv2-container',
      sizeClass,
      variantClass,
      stateClass,
      readOnlyClass,
      disabledClass,
      className,
    ]
      .filter(Boolean)
      .join(' ');

    // Icon sizes based on size prop
    const iconSize = size === 'large' ? 24 : size === 'medium' ? 20 : 16;

    return (
      <div className={containerClasses}>
        <div className="inputv2-wrapper">
          {/* Left Icon */}
          <div className="inputv2-icon inputv2-icon--left">
            <Icon name={leftIcon} size={iconSize} />
          </div>

          {/* Input Field */}
          <TextField.Root
            ref={ref}
            size="3"
            value={currentValue}
            defaultValue={!isControlled ? defaultValue : undefined}
            placeholder={placeholder}
            disabled={disabled}
            readOnly={readOnly}
            onChange={handleChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            className="inputv2-input"
            {...props}
          />

          {/* Right Icons (Clear or Lock) */}
          {readOnly && (
            <div className="inputv2-icon inputv2-icon--right">
              <Icon name="lock" size={iconSize} />
            </div>
          )}
          
          {!readOnly && !disabled && showClearButton && isFilled && (
            <button
              type="button"
              className="inputv2-clear-button"
              onClick={handleClear}
              aria-label="Clear input"
            >
              <Icon name="close" size={iconSize} />
            </button>
          )}
        </div>
      </div>
    );
  }
);

InputV2.displayName = 'InputV2';

