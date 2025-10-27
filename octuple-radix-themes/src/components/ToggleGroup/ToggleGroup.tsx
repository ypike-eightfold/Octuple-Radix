import React from 'react';
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group';
import './ToggleGroup.css';

export interface ToggleGroupProps {
  /**
   * Type of toggle group
   * @default 'single'
   */
  type?: 'single' | 'multiple';
  /**
   * The controlled value(s)
   */
  value?: string | string[];
  /**
   * Default value(s) for uncontrolled
   */
  defaultValue?: string | string[];
  /**
   * Callback when value changes
   */
  onValueChange?: (value: string | string[]) => void;
  /**
   * Whether the group is disabled
   */
  disabled?: boolean;
  /**
   * Size of toggles
   * @default '2'
   */
  size?: '1' | '2' | '3';
  /**
   * Children (ToggleGroupItem components)
   */
  children: React.ReactNode;
}

export interface ToggleGroupItemProps {
  /**
   * Value for this toggle
   */
  value: string;
  /**
   * Whether disabled
   */
  disabled?: boolean;
  /**
   * Aria label
   */
  'aria-label'?: string;
  /**
   * Children content
   */
  children: React.ReactNode;
}

export const ToggleGroupItem = React.forwardRef<HTMLButtonElement, ToggleGroupItemProps>(
  ({ children, ...props }, ref) => {
    return (
      <ToggleGroupPrimitive.Item ref={ref} className="toggle-group-item" {...props}>
        {children}
      </ToggleGroupPrimitive.Item>
    );
  }
);

ToggleGroupItem.displayName = 'ToggleGroupItem';

export const ToggleGroup = React.forwardRef<HTMLDivElement, ToggleGroupProps>(
  ({ type = 'single', size = '2', children, ...props }, ref) => {
    return (
      <ToggleGroupPrimitive.Root
        ref={ref as any}
        type={type as any}
        className={`toggle-group-root toggle-group-size-${size}`}
        {...(props as any)}
      >
        {children}
      </ToggleGroupPrimitive.Root>
    );
  }
);

ToggleGroup.displayName = 'ToggleGroup';

