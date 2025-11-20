import React from 'react';
import { Icon } from '../Icon';
import './NavigationMenuV2.css';

export interface NavigationMenuV2Item {
  /** Icon name from Material Design Icons */
  icon?: string;
  /** Menu item label */
  label: string;
  /** Optional description/support text */
  description?: string;
  /** Click handler */
  onClick?: () => void;
  /** Link href */
  href?: string;
}

export interface NavigationMenuV2Props {
  /** Menu items */
  items: NavigationMenuV2Item[];
  /** Whether to show the arrow pointer */
  showArrow?: boolean;
  /** Position of the arrow (left offset in pixels) */
  arrowPosition?: number;
  /** Additional CSS classes */
  className?: string;
}

export const NavigationMenuV2 = React.forwardRef<HTMLDivElement, NavigationMenuV2Props>(
  (
    {
      items = [],
      showArrow = true,
      arrowPosition = 24,
      className = '',
    },
    ref
  ) => {
    return (
      <div ref={ref} className={`nav-menu-v2 ${className}`}>
        {/* Arrow Pointer */}
        {showArrow && (
          <div className="nav-menu-v2__arrow-container" style={{ paddingLeft: `${arrowPosition}px` }}>
            <div className="nav-menu-v2__arrow" />
          </div>
        )}

        {/* Menu Content */}
        <div className="nav-menu-v2__content">
          {items.map((item, index) => (
            <a
              key={index}
              href={item.href || '#'}
              className="nav-menu-v2__item"
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                }
              }}
            >
              {/* Icon */}
              {item.icon && (
                <div className="nav-menu-v2__icon">
                  <Icon name={item.icon} size={20} />
                </div>
              )}

              {/* Label and Description */}
              <div className="nav-menu-v2__text">
                <div className="nav-menu-v2__label">{item.label}</div>
                {item.description && (
                  <div className="nav-menu-v2__description">{item.description}</div>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    );
  }
);

NavigationMenuV2.displayName = 'NavigationMenuV2';


