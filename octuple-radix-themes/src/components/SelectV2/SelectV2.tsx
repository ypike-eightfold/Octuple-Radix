import React, { useState, useMemo } from 'react';
import * as Select from '@radix-ui/react-select';
import { Icon } from '../Icon';
import './SelectV2.css';

export interface SelectOption {
  label: string;
  value: string | number;
  disabled?: boolean;
}

export interface SelectOptGroup {
  label: string;
  options: SelectOption[];
}

export type SelectSize = 'small' | 'medium' | 'large';
export type SelectMode = 'single' | 'multiple' | 'tags';

export interface SelectV2Props {
  /** Current value (string/number for single, array for multiple) */
  value?: string | number | (string | number)[];
  /** Default value */
  defaultValue?: string | number | (string | number)[];
  /** Change handler */
  onChange?: (value: string | number | (string | number)[], option?: SelectOption | SelectOption[]) => void;
  /** Options array */
  options?: SelectOption[];
  /** Grouped options */
  optGroups?: SelectOptGroup[];
  /** Placeholder text */
  placeholder?: string;
  /** Selection mode */
  mode?: SelectMode;
  /** Allow clearing selection */
  allowClear?: boolean;
  /** Enable search/filter */
  showSearch?: boolean;
  /** Custom filter function */
  filterOption?: boolean | ((inputValue: string, option: SelectOption) => boolean);
  /** Disabled state */
  disabled?: boolean;
  /** Size variant */
  size?: SelectSize;
  /** Loading state */
  loading?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Width of select */
  width?: number | string;
}

export const SelectV2: React.FC<SelectV2Props> = ({
  value,
  defaultValue,
  onChange,
  options = [],
  optGroups,
  placeholder = 'Select...',
  mode = 'single',
  allowClear = true,
  showSearch = false,
  filterOption = true,
  disabled = false,
  size = 'medium',
  loading = false,
  className = '',
  width,
}) => {
  const [searchValue, setSearchValue] = useState('');
  const [selectedValues, setSelectedValues] = useState<(string | number)[]>(
    mode !== 'single' 
      ? Array.isArray(value) ? value : (value ? [value] : [])
      : []
  );

  const allOptions = useMemo(() => {
    if (optGroups) {
      return optGroups.flatMap(group => group.options);
    }
    return options;
  }, [options, optGroups]);

  const filteredOptions = useMemo(() => {
    if (!showSearch || !searchValue) return allOptions;
    
    if (typeof filterOption === 'function') {
      return allOptions.filter(opt => filterOption(searchValue, opt));
    }
    
    if (filterOption === true) {
      return allOptions.filter(opt => 
        opt.label.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
    
    return allOptions;
  }, [allOptions, searchValue, showSearch, filterOption]);

  const handleValueChange = (newValue: string) => {
    if (mode === 'single') {
      const option = allOptions.find(opt => String(opt.value) === newValue);
      onChange?.(newValue, option);
    }
  };

  // Multi-select handler (to be implemented when multi-select UI is added)
  // const handleMultipleSelect = (optionValue: string | number) => {
  //   const newValues = selectedValues.includes(optionValue)
  //     ? selectedValues.filter(v => v !== optionValue)
  //     : [...selectedValues, optionValue];
  //   
  //   setSelectedValues(newValues);
  //   const selectedOptions = allOptions.filter(opt => newValues.includes(opt.value));
  //   onChange?.(newValues, selectedOptions);
  // };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (mode === 'single') {
      onChange?.('', undefined);
    } else {
      setSelectedValues([]);
      onChange?.([], []);
    }
  };

  const renderValue = () => {
    if (mode === 'single') {
      const selected = allOptions.find(opt => String(opt.value) === String(value));
      return selected?.label || placeholder;
    } else {
      if (selectedValues.length === 0) return placeholder;
      return `${selectedValues.length} selected`;
    }
  };

  if (mode !== 'single') {
    // Custom multi-select implementation
    return (
      <div 
        className={`select-v2-multi select-v2-${size} ${disabled ? 'disabled' : ''} ${className}`}
        style={{ width }}
      >
        <div className="select-trigger-multi">
          <span className="select-value">{renderValue()}</span>
          <div className="select-icons">
            {allowClear && selectedValues.length > 0 && !disabled && (
              <button
                className="select-clear-button"
                onClick={handleClear}
                type="button"
                aria-label="Clear selection"
              >
                <Icon name="close" size={16} />
              </button>
            )}
            <Icon name="expand_more" size={20} />
          </div>
        </div>
        {/* Multi-select dropdown would go here - simplified for now */}
      </div>
    );
  }

  // Single select using Radix
  return (
    <Select.Root
      value={String(value || '')}
      onValueChange={handleValueChange}
      defaultValue={String(defaultValue || '')}
      disabled={disabled}
    >
      <Select.Trigger
        className={`select-v2 select-v2-${size} ${className}`}
        style={{ width }}
        aria-label={placeholder}
      >
        <Select.Value placeholder={placeholder} />
        <Select.Icon className="select-icon">
          {loading ? (
            <Icon name="sync" size={20} className="select-loading-icon" />
          ) : (
            <Icon name="expand_more" size={20} />
          )}
        </Select.Icon>
        {allowClear && value && !disabled && (
          <button
            className="select-clear-button"
            onClick={handleClear}
            type="button"
            aria-label="Clear selection"
          >
            <Icon name="close" size={16} />
          </button>
        )}
      </Select.Trigger>

      <Select.Portal>
        <Select.Content
          className="select-content"
          position="popper"
          sideOffset={4}
        >
          {showSearch && (
            <div className="select-search">
              <input
                type="text"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                className="select-search-input"
              />
            </div>
          )}
          
          <Select.Viewport className="select-viewport">
            {optGroups ? (
              optGroups.map((group) => (
                <Select.Group key={group.label}>
                  <Select.Label className="select-group-label">
                    {group.label}
                  </Select.Label>
                  {group.options
                    .filter(opt => 
                      !showSearch || 
                      !searchValue || 
                      opt.label.toLowerCase().includes(searchValue.toLowerCase())
                    )
                    .map((option) => (
                      <SelectItem
                        key={option.value}
                        value={String(option.value)}
                        disabled={option.disabled}
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                </Select.Group>
              ))
            ) : (
              filteredOptions.map((option) => (
                <SelectItem
                  key={option.value}
                  value={String(option.value)}
                  disabled={option.disabled}
                >
                  {option.label}
                </SelectItem>
              ))
            )}
            
            {filteredOptions.length === 0 && (
              <div className="select-empty">No options found</div>
            )}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  );
};

// SelectItem sub-component
const SelectItem = React.forwardRef<
  HTMLDivElement,
  { value: string; disabled?: boolean; children: React.ReactNode }
>(({ children, value, disabled, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className="select-item"
      value={value}
      disabled={disabled}
      ref={forwardedRef}
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="select-item-indicator">
        <Icon name="check" size={18} />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

SelectItem.displayName = 'SelectItem';
