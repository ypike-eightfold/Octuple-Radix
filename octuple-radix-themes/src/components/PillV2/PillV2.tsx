import React from 'react';
import { Badge } from '@radix-ui/themes';
import { Icon } from '../Icon';
import './PillV2.css';

export type PillV2Size = 'small' | 'medium' | 'large';
export type PillV2Color = 
  | 'red' 
  | 'orange' 
  | 'yellow' 
  | 'green' 
  | 'blue' 
  | 'violet' 
  | 'gray'
  | 'yellowGreen'
  | 'blueGreen'
  | 'blueViolet'
  | 'redOrange'
  | 'violetRed';

export interface PillV2Props {
  /** Text content of the pill */
  children: React.ReactNode;
  /** Size of the pill */
  size?: PillV2Size;
  /** Color variant */
  color?: PillV2Color;
  /** Optional icon name (Material Design Icons) */
  icon?: string;
  /** Custom class name */
  className?: string;
  /** Disabled state */
  disabled?: boolean;
}

/**
 * PillV2 - A tag/pill component for labeling and categorization
 * 
 * Built on Radix Themes Badge with custom Octuple V2.5 styling.
 * For interactive tags with close buttons, use ChipV2 instead.
 */
export const PillV2: React.FC<PillV2Props> = ({
  children,
  size = 'small',
  color = 'gray',
  icon,
  className = '',
  disabled = false,
}) => {
  const sizeClass = `pillv2--${size}`;
  const colorClass = `pillv2--${color}`;
  const disabledClass = disabled ? 'pillv2--disabled' : '';
  const iconClass = icon ? 'pillv2--with-icon' : '';

  return (
    <Badge
      className={`pillv2 ${sizeClass} ${colorClass} ${disabledClass} ${iconClass} ${className}`}
      variant="soft"
    >
      {icon && (
        <Icon 
          name={icon} 
          className="pillv2__icon"
        />
      )}
      <span className="pillv2__text">{children}</span>
    </Badge>
  );
};

export default PillV2;

