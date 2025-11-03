import React from 'react';
import './SwitchV2.css';

export type SwitchV2Size = 'small' | 'medium' | 'large';

export interface SwitchV2Props extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Switch size */
  size?: SwitchV2Size;
  /** Label text */
  label?: string;
  /** Additional CSS classes */
  className?: string;
  /** Checked state (controlled) */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Change handler */
  onCheckedChange?: (checked: boolean) => void;
}

export const SwitchV2 = React.forwardRef<HTMLInputElement, SwitchV2Props>(
  (
    {
      size = 'large',
      label,
      className = '',
      disabled = false,
      checked,
      defaultChecked,
      onCheckedChange,
      onChange,
      ...props
    },
    ref
  ) => {
    const switchId = props.id || `switch-${Math.random().toString(36).substr(2, 9)}`;

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      onChange?.(e);
      onCheckedChange?.(e.target.checked);
    };

    return (
      <label className={`switch-v2 switch-v2--${size} ${className}`}>
        <input
          ref={ref}
          type="checkbox"
          role="switch"
          className="switch-v2__input"
          disabled={disabled}
          id={switchId}
          checked={checked}
          defaultChecked={defaultChecked}
          onChange={handleChange}
          {...props}
        />
        <span className="switch-v2__track">
          <span className="switch-v2__thumb"></span>
        </span>
        {label && <span className="switch-v2__label">{label}</span>}
      </label>
    );
  }
);

SwitchV2.displayName = 'SwitchV2';

