import React from 'react';
import { Avatar } from '@radix-ui/themes';
import './AvatarV2.css';

export type AvatarV2Size = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl';
export type AvatarV2StatusColor = 'green' | 'yellow' | 'red' | 'gray' | 'blue';
export type AvatarV2Variant = 'photo' | 'count';

export interface AvatarV2Props {
  /** Image source URL */
  src?: string;
  /** Alt text for the image */
  alt?: string;
  /** Fallback text (initials) when image is not available */
  fallback?: string;
  /** Size of the avatar */
  size?: AvatarV2Size;
  /** Status indicator color */
  statusColor?: AvatarV2StatusColor;
  /** Variant type - 'photo' for images/initials, 'count' for numeric indicators */
  variant?: AvatarV2Variant;
  /** Custom class name */
  className?: string;
}

const SIZE_MAP: Record<AvatarV2Size, string> = {
  xs: '24px',
  s: '40px',
  m: '64px',
  l: '80px',
  xl: '100px',
  xxl: '120px',
  xxxl: '200px',
};

/**
 * AvatarV2 - A circular avatar component for user profile images
 * 
 * Built on Radix Themes Avatar with custom Octuple V2.5 styling.
 * Supports multiple sizes, automatic fallback to initials, and optional status indicators.
 * 
 * @example
 * ```tsx
 * <AvatarV2 
 *   src="/path/to/image.jpg" 
 *   alt="User Name"
 *   fallback="UN"
 *   size="m"
 *   statusColor="green"
 * />
 * ```
 */
export const AvatarV2: React.FC<AvatarV2Props> = ({
  src,
  alt,
  fallback,
  size = 'm',
  statusColor,
  variant = 'photo',
  className = '',
}) => {
  const sizeClass = `avatarv2--${size}`;
  const variantClass = `avatarv2--${variant}`;
  const statusClass = statusColor ? `avatarv2--status-${statusColor}` : '';
  const combinedClassName = `avatarv2 ${sizeClass} ${variantClass} ${statusClass} ${className}`.trim();

  const avatarSize = SIZE_MAP[size];

  return (
    <div 
      className={combinedClassName}
      style={{ 
        width: avatarSize, 
        height: avatarSize,
        position: 'relative',
      }}
    >
      <Avatar
        src={src}
        alt={alt}
        fallback={fallback || '?'}
        radius="full"
        style={{
          width: '100%',
          height: '100%',
        }}
      />
      {statusColor && (
        <span 
          className={`avatarv2__status avatarv2__status--${statusColor}`}
          aria-label={`Status: ${statusColor}`}
        />
      )}
    </div>
  );
};

