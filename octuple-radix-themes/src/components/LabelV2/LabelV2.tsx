import React from 'react';
import * as Label from '@radix-ui/react-label';
import { Icon } from '../Icon';
import './LabelV2.css';

export type LabelSize = 'small' | 'medium' | 'large' | 'flex';

export interface LabelIconButtonProps {
  /** Icon name */
  icon?: string;
  /** Click handler */
  onClick?: (e: React.MouseEvent) => void;
  /** Aria label */
  ariaLabel?: string;
  /** Tooltip content (optional - can be handled externally) */
  tooltip?: string;
}

export interface LabelV2Props {
  /** The text content of the label */
  text: string;
  /** The id of the element the label is associated with */
  htmlFor?: string;
  /** Size variant */
  size?: LabelSize;
  /** Display a colon after the label text */
  colon?: boolean;
  /** Display as inline element */
  inline?: boolean;
  /** Required indicator */
  required?: boolean;
  /** Icon button props for help/info tooltip */
  labelIconButtonProps?: LabelIconButtonProps;
  /** Additional CSS class */
  className?: string;
  /** Children (alternative to text) */
  children?: React.ReactNode;
}

export const LabelV2: React.FC<LabelV2Props> = ({
  text,
  htmlFor,
  size = 'medium',
  colon = false,
  inline = false,
  required = false,
  labelIconButtonProps,
  className = '',
  children,
}) => {
  const labelContent = children || text;

  return (
    <div 
      className={`label-v2-wrapper ${inline ? 'inline' : ''} ${className}`}
    >
      <Label.Root
        htmlFor={htmlFor}
        className={`label-v2 label-v2-${size}`}
      >
        {labelContent}
        {colon && <span className="label-colon">:</span>}
        {required && <span className="label-required" aria-label="required">*</span>}
      </Label.Root>
      
      {labelIconButtonProps && (
        <button
          type="button"
          className="label-icon-button"
          onClick={labelIconButtonProps.onClick}
          aria-label={labelIconButtonProps.ariaLabel || 'More information'}
          title={labelIconButtonProps.tooltip}
        >
          <Icon 
            name={labelIconButtonProps.icon || 'info'} 
            size={size === 'small' ? 16 : size === 'large' ? 20 : 18} 
          />
        </button>
      )}
    </div>
  );
};

