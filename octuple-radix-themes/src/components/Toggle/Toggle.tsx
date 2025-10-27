import React from 'react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import './Toggle.css';

export interface ToggleProps {
  /**
   * The controlled pressed state of the toggle
   */
  pressed?: boolean;
  /**
   * Default pressed state (uncontrolled)
   */
  defaultPressed?: boolean;
  /**
   * Callback when pressed state changes
   */
  onPressedChange?: (pressed: boolean) => void;
  /**
   * Whether the toggle is disabled
   */
  disabled?: boolean;
  /**
   * Size of the toggle
   * @default '2'
   */
  size?: '1' | '2' | '3';
  /**
   * Children content
   */
  children: React.ReactNode;
}

export const Toggle = React.forwardRef<HTMLButtonElement, ToggleProps>(
  ({ size = '2', children, ...props }, ref) => {
    return (
      <TogglePrimitive.Root
        ref={ref}
        className={`toggle-root toggle-size-${size}`}
        {...props}
      >
        {children}
      </TogglePrimitive.Root>
    );
  }
);

Toggle.displayName = 'Toggle';

