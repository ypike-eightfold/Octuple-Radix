import React from 'react';
import { AvatarV2, AvatarV2Props } from '../AvatarV2/AvatarV2';
import { CheckboxV2 } from '../CheckboxV2/CheckboxV2';
import { Icon } from '../Icon/Icon';
import './ChipV2.css';

export type ChipV2Size = 'small' | 'medium' | 'large';

export interface ChipV2Props {
  /**
   * Primary text label
   */
  label: string;
  
  /**
   * Secondary text (subtitle) - only shown for medium and large sizes
   */
  subtitle?: string;
  
  /**
   * Size variant
   */
  size?: ChipV2Size;
  
  /**
   * Avatar configuration (photo or icon)
   */
  avatar?: AvatarV2Props & {
    /**
     * Icon name (if using icon avatar instead of photo)
     */
    iconName?: string;
    /**
     * Background color for icon avatar
     */
    iconBgColor?: string;
  };
  
  /**
   * Whether the chip is selectable (shows checkbox)
   */
  selectable?: boolean;
  
  /**
   * Whether the chip is selected (controlled)
   */
  selected?: boolean;
  
  /**
   * Whether the chip is removable (shows close button)
   */
  removable?: boolean;
  
  /**
   * Callback when checkbox state changes
   */
  onSelectedChange?: (selected: boolean) => void;
  
  /**
   * Callback when close button is clicked
   */
  onRemove?: () => void;
  
  /**
   * Additional CSS class
   */
  className?: string;
}

export const ChipV2: React.FC<ChipV2Props> = ({
  label,
  subtitle,
  size = 'medium',
  avatar,
  selectable = false,
  selected = false,
  removable = true,
  onSelectedChange,
  onRemove,
  className = '',
}) => {
  const sizeClass = `chipv2--${size}`;
  
  // Map chip size to avatar size
  const avatarSizeMap: Record<ChipV2Size, AvatarV2Props['size']> = {
    small: 'XS',
    medium: 'S',
    large: 'M',
  };
  
  // Map chip size to checkbox size
  const checkboxSizeMap: Record<ChipV2Size, 'small' | 'medium' | 'large'> = {
    small: 'medium',
    medium: 'medium',
    large: 'medium',
  };
  
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onSelectedChange) {
      onSelectedChange(event.target.checked);
    }
  };
  
  const handleRemoveClick = (event: React.MouseEvent) => {
    event.stopPropagation();
    if (onRemove) {
      onRemove();
    }
  };
  
  return (
    <div className={`chipv2 ${sizeClass} ${className}`}>
      {/* Checkbox (if selectable) */}
      {selectable && (
        <div className="chipv2__checkbox">
          <CheckboxV2
            checked={selected}
            onChange={handleCheckboxChange}
            size={checkboxSizeMap[size]}
          />
        </div>
      )}
      
      {/* Avatar */}
      {avatar && (
        <div className="chipv2__avatar">
          {avatar.iconName ? (
            <div
              className="chipv2__icon-avatar"
              style={{ backgroundColor: avatar.iconBgColor || '#1999ac' }}
            >
              <Icon name={avatar.iconName} size={size === 'small' ? 14 : size === 'medium' ? 16 : 20} />
            </div>
          ) : (
            <AvatarV2
              {...avatar}
              size={avatarSizeMap[size]}
            />
          )}
        </div>
      )}
      
      {/* Text */}
      <div className="chipv2__text">
        <p className="chipv2__label">{label}</p>
        {subtitle && size !== 'small' && (
          <p className="chipv2__subtitle">{subtitle}</p>
        )}
      </div>
      
      {/* Close button (if removable) */}
      {removable && (
        <button
          className="chipv2__close-button"
          onClick={handleRemoveClick}
          aria-label="Remove"
          type="button"
        >
          <Icon name="close" size={size === 'small' ? 16 : 20} />
        </button>
      )}
    </div>
  );
};

