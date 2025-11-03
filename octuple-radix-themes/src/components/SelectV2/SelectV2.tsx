import React, { useState, useRef, useEffect, forwardRef } from 'react';
import './SelectV2.css';

export type SelectV2Shape = 'rounded' | 'pill' | 'inline';
export type SelectV2Size = 'small' | 'medium' | 'large';

export interface SelectV2Option {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectV2Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Shape variant */
  shape?: SelectV2Shape;
  /** Size variant */
  size?: SelectV2Size;
  /** Error state */
  error?: boolean;
  /** Options to display */
  options: SelectV2Option[];
  /** Selected value(s) */
  value?: string | string[];
  /** Placeholder text */
  placeholder?: string;
  /** Multi-select mode */
  multiple?: boolean;
  /** Callback when selection changes */
  onChange?: (value: string | string[]) => void;
  /** Disabled state */
  disabled?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export const SelectV2 = forwardRef<HTMLDivElement, SelectV2Props>(
  (
    {
      shape = 'rounded',
      size = 'large',
      error = false,
      options = [],
      value,
      placeholder = 'Select',
      multiple = false,
      onChange,
      disabled = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedValue, setSelectedValue] = useState<string | string[]>(value || (multiple ? [] : ''));
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value);
      }
    }, [value]);

    useEffect(() => {
      const handleClickOutside = (event: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
          setIsOpen(false);
        }
      };

      if (isOpen) {
        document.addEventListener('mousedown', handleClickOutside);
      }

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [isOpen]);

    const handleToggle = () => {
      if (!disabled) {
        setIsOpen(!isOpen);
      }
    };

    const handleOptionClick = (optionValue: string) => {
      if (disabled) return;

      let newValue: string | string[];

      if (multiple) {
        const currentArray = Array.isArray(selectedValue) ? selectedValue : [];
        if (currentArray.includes(optionValue)) {
          newValue = currentArray.filter(v => v !== optionValue);
        } else {
          newValue = [...currentArray, optionValue];
        }
      } else {
        newValue = optionValue;
        setIsOpen(false);
      }

      setSelectedValue(newValue);
      onChange?.(newValue);
    };

    const getDisplayText = () => {
      if (multiple && Array.isArray(selectedValue)) {
        if (selectedValue.length === 0) return placeholder;
        const selectedOptions = options.filter(opt => selectedValue.includes(opt.value));
        return selectedOptions.map(opt => opt.label).join(', ');
      } else {
        const selected = options.find(opt => opt.value === selectedValue);
        return selected ? selected.label : placeholder;
      }
    };

    const isSelected = (optionValue: string) => {
      if (multiple && Array.isArray(selectedValue)) {
        return selectedValue.includes(optionValue);
      }
      return selectedValue === optionValue;
    };

    return (
      <div
        ref={dropdownRef}
        className={`select-v2-wrapper ${className}`}
        {...props}
      >
        <div
          ref={ref}
          className={`
            select-v2 
            select-v2--${shape} 
            select-v2--${size}
            ${error ? 'select-v2--error' : ''}
            ${disabled ? 'select-v2--disabled' : ''}
            ${isOpen ? 'select-v2--open' : ''}
          `}
          onClick={handleToggle}
          role="button"
          tabIndex={disabled ? -1 : 0}
          aria-expanded={isOpen}
          aria-haspopup="listbox"
        >
          <span className="select-v2__text">
            {getDisplayText()}
          </span>
          <span className={`select-v2__chevron material-symbols-outlined ${isOpen ? 'select-v2__chevron--open' : ''}`}>
            expand_more
          </span>
        </div>

        {isOpen && !disabled && (
          <div className={`select-v2__menu select-v2__menu--${shape} select-v2__menu--${size}`}>
            {options.map((option) => (
              <div
                key={option.value}
                className={`
                  select-v2__option 
                  ${isSelected(option.value) ? 'select-v2__option--selected' : ''}
                  ${option.disabled ? 'select-v2__option--disabled' : ''}
                `}
                onClick={() => !option.disabled && handleOptionClick(option.value)}
                role="option"
                aria-selected={isSelected(option.value)}
              >
                {option.label}
                {isSelected(option.value) && (
                  <span className="select-v2__check material-symbols-outlined">
                    check
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }
);

SelectV2.displayName = 'SelectV2';

