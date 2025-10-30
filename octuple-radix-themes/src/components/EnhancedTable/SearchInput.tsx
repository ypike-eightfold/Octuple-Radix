import React from 'react';
import { TextField, Flex } from '@radix-ui/themes';
import { Icon } from '../Icon';

export interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
}

/**
 * Search Input Component
 * 
 * Provides a search input field for filtering table data.
 * Uses Radix TextField with search icon for consistent styling.
 */
export function SearchInput({
  value,
  onChange,
  placeholder = 'Search...',
  disabled = false,
}: SearchInputProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  
  const handleClear = () => {
    onChange('');
  };
  
  return (
    <div className="search-input">
      <Flex align="center" gap="2" style={{ position: 'relative', maxWidth: '320px' }}>
        <div style={{ position: 'relative', flex: 1 }}>
          <TextField.Root
            value={value}
            onChange={handleChange}
            placeholder={placeholder}
            disabled={disabled}
            size="2"
            style={{ paddingLeft: '32px', paddingRight: value ? '32px' : '12px' }}
          />
          
          {/* Search Icon */}
          <Icon 
            name="search"
            size={16}
            style={{
              position: 'absolute',
              left: '8px',
              top: '50%',
              transform: 'translateY(-50%)',
              color: 'var(--gray-9)',
              pointerEvents: 'none',
            }}
          />
          
          {/* Clear Button */}
          {value && (
            <button
              type="button"
              onClick={handleClear}
              disabled={disabled}
              className="search-input-clear"
              style={{
                position: 'absolute',
                right: '6px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '2px',
                borderRadius: '2px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--gray-9)',
              }}
              aria-label="Clear search"
            >
              <Icon name="close" size={14} />
            </button>
          )}
        </div>
      </Flex>
    </div>
  );
}
