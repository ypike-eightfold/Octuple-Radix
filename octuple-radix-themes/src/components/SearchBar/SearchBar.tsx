import React from 'react';
import { TextField } from '@radix-ui/themes';
import { Icon } from '../Icon';

export interface SearchBarProps {
  /**
   * Placeholder text
   * @default 'Search...'
   */
  placeholder?: string;
  /**
   * Value of the search input
   */
  value?: string;
  /**
   * Callback when value changes
   */
  onChange?: (value: string) => void;
  /**
   * Callback when search is submitted
   */
  onSearch?: (value: string) => void;
  /**
   * Size of the search bar
   * @default '2'
   */
  size?: '1' | '2' | '3';
  /**
   * Whether the input is disabled
   */
  disabled?: boolean;
  /**
   * Show clear button when there's text
   * @default true
   */
  showClear?: boolean;
  /**
   * Custom styles for the TextField
   */
  style?: React.CSSProperties;
  /**
   * Auto-focus the input when mounted
   */
  autoFocus?: boolean;
}

export const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  (
    {
      placeholder = 'Search...',
      value,
      onChange,
      onSearch,
      size = '2',
      disabled,
      showClear = true,
      style,
      autoFocus,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = React.useState('');
    const displayValue = value !== undefined ? value : internalValue;
    const iconSize = size === '1' ? 14 : size === '2' ? 16 : 18;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
    };

    const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && onSearch) {
        onSearch(displayValue);
      }
    };

    const handleClear = () => {
      const newValue = '';
      if (value === undefined) {
        setInternalValue(newValue);
      }
      onChange?.(newValue);
      onSearch?.(newValue);
    };

    return (
      <TextField.Root
        size={size}
        placeholder={placeholder}
        value={displayValue}
        onChange={handleChange}
        onKeyPress={handleKeyPress}
        disabled={disabled}
        ref={ref}
        style={style}
        autoFocus={autoFocus}
      >
        <TextField.Slot>
          <Icon name="search" size={iconSize} />
        </TextField.Slot>
        {showClear && displayValue && (
          <TextField.Slot>
            <button
              onClick={handleClear}
              style={{
                all: 'unset',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--gray-9)',
                transition: 'color 0.15s ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gray-12)')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--gray-9)')}
            >
              <Icon name="close" size={iconSize} />
            </button>
          </TextField.Slot>
        )}
      </TextField.Root>
    );
  }
);

SearchBar.displayName = 'SearchBar';

