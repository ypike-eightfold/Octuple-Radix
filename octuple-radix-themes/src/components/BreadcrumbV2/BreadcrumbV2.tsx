import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { LinkV2 } from '../LinkV2/LinkV2';
import { Icon } from '../Icon/Icon';
import './BreadcrumbV2.css';

export interface BreadcrumbItem {
  label: string;
  href: string;
}

export interface BreadcrumbV2Props {
  /** Array of breadcrumb items */
  items: BreadcrumbItem[];
  /** Maximum number of items to show before truncating (default: 4) */
  maxItems?: number;
  /** Custom class name */
  className?: string;
  /** Aria label for accessibility */
  ariaLabel?: string;
}

export const BreadcrumbV2: React.FC<BreadcrumbV2Props> = ({
  items,
  maxItems = 4,
  className = '',
  ariaLabel = 'Breadcrumb navigation',
}) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  // Determine if we need to truncate
  const shouldTruncate = items.length > maxItems;

  // If truncating, show: first item, ..., last 2 items
  // Middle items go in the dropdown
  const visibleItems: (BreadcrumbItem | 'menu')[] = shouldTruncate
    ? [items[0], 'menu', ...items.slice(-2)]
    : items;

  const truncatedItems = shouldTruncate ? items.slice(1, -2) : [];

  return (
    <nav
      className={`breadcrumbv2 ${className}`}
      aria-label={ariaLabel}
    >
      <ol className="breadcrumbv2__list">
        {visibleItems.map((item, index) => {
          const isLast = index === visibleItems.length - 1;

          if (item === 'menu') {
            return (
              <React.Fragment key="menu">
                <li className="breadcrumbv2__item">
                  <DropdownMenu.Root open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                    <DropdownMenu.Trigger asChild>
                      <button
                        className="breadcrumbv2__menu-trigger"
                        aria-label="Show more breadcrumb items"
                      >
                        ...
                      </button>
                    </DropdownMenu.Trigger>

                    <DropdownMenu.Portal>
                      <DropdownMenu.Content
                        className="breadcrumbv2__menu-content"
                        align="start"
                        sideOffset={4}
                      >
                        {truncatedItems.map((truncatedItem) => (
                          <DropdownMenu.Item
                            key={truncatedItem.href}
                            className="breadcrumbv2__menu-item"
                            asChild
                          >
                            <a href={truncatedItem.href}>{truncatedItem.label}</a>
                          </DropdownMenu.Item>
                        ))}
                      </DropdownMenu.Content>
                    </DropdownMenu.Portal>
                  </DropdownMenu.Root>
                </li>
                {!isLast && (
                  <li className="breadcrumbv2__separator" aria-hidden="true">
                    <Icon name="chevron_right" size={20} color="#69717f" />
                  </li>
                )}
              </React.Fragment>
            );
          }

          return (
            <React.Fragment key={item.href}>
              <li className="breadcrumbv2__item">
                <LinkV2 href={item.href} size="small" className="breadcrumbv2__link">
                  {item.label}
                </LinkV2>
              </li>
              {!isLast && (
                <li className="breadcrumbv2__separator" aria-hidden="true">
                  <Icon name="chevron_right" size={20} color="#69717f" />
                </li>
              )}
            </React.Fragment>
          );
        })}
      </ol>
    </nav>
  );
};

