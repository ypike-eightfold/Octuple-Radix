import React from 'react';
import { AvatarV2, AvatarV2Size } from '../AvatarV2';
import './AvatarGroupV2.css';

export interface AvatarGroupV2Item {
  /** Image source URL */
  src?: string;
  /** Alt text */
  alt?: string;
  /** Fallback text (initials) */
  fallback?: string;
  /** Variant type - 'photo' or 'count' */
  variant?: 'photo' | 'count';
}

export interface AvatarGroupV2Props {
  /** Array of avatar items */
  items: AvatarGroupV2Item[];
  /** Size of all avatars in the group */
  size?: AvatarV2Size;
  /** Maximum number of avatars to show before displaying count */
  max?: number;
  /** Custom class name */
  className?: string;
}

/**
 * AvatarGroupV2 - A group of overlapping avatars
 * 
 * Displays multiple avatars in an overlapping horizontal layout.
 * Automatically shows a count indicator if items exceed the max prop.
 * 
 * @example
 * ```tsx
 * <AvatarGroupV2 
 *   items={[
 *     { src: '/user1.jpg', alt: 'User 1' },
 *     { src: '/user2.jpg', alt: 'User 2' },
 *     { fallback: 'AB', alt: 'User 3' }
 *   ]}
 *   size="m"
 *   max={5}
 * />
 * ```
 */
export const AvatarGroupV2: React.FC<AvatarGroupV2Props> = ({
  items,
  size = 'm',
  max,
  className = '',
}) => {
  const groupClass = `avatar-groupv2 avatar-groupv2--${size} ${className}`.trim();

  // Calculate visible items and remaining count
  let visibleItems = items;
  let remainingCount = 0;

  if (max && items.length > max) {
    visibleItems = items.slice(0, max);
    remainingCount = items.length - max;
  }

  return (
    <div className={groupClass}>
      {visibleItems.map((item, index) => (
        <div key={index} className="avatar-groupv2__item">
          <AvatarV2
            src={item.src}
            alt={item.alt}
            fallback={item.fallback}
            size={size}
            variant={item.variant}
          />
        </div>
      ))}
      {remainingCount > 0 && (
        <div className="avatar-groupv2__item">
          <AvatarV2
            fallback={`+${remainingCount}`}
            size={size}
            variant="count"
            alt={`${remainingCount} more`}
          />
        </div>
      )}
    </div>
  );
};

