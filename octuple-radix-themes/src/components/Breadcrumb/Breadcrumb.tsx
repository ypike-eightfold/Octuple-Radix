import React from 'react';
import { Flex, Link, Text } from '@radix-ui/themes';
import { Icon } from '../Icon';

export interface BreadcrumbItem {
  /**
   * Label for the breadcrumb item
   */
  label: string;
  /**
   * URL for the breadcrumb item
   */
  href?: string;
  /**
   * Click handler
   */
  onClick?: () => void;
}

export interface BreadcrumbProps {
  /**
   * Array of breadcrumb items
   */
  items: BreadcrumbItem[];
  /**
   * Separator icon name
   * @default 'chevron_right'
   */
  separator?: string;
  /**
   * Size of text and icons
   * @default '2'
   */
  size?: '1' | '2' | '3';
}

export const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(
  ({ items, separator = 'chevron_right', size = '2' }, ref) => {
    const iconSize = size === '1' ? 14 : size === '2' ? 16 : 18;

    return (
      <Flex ref={ref} gap="2" align="center" wrap="wrap">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <React.Fragment key={index}>
              {item.href || item.onClick ? (
                <Link
                  href={item.href}
                  onClick={item.onClick}
                  size={size}
                  style={{ cursor: 'pointer' }}
                >
                  {item.label}
                </Link>
              ) : (
                <Text
                  size={size}
                  color={isLast ? 'gray' : undefined}
                  weight={isLast ? 'medium' : 'regular'}
                >
                  {item.label}
                </Text>
              )}
              
              {!isLast && (
                <Icon
                  name={separator}
                  size={iconSize}
                  color="var(--gray-9)"
                />
              )}
            </React.Fragment>
          );
        })}
      </Flex>
    );
  }
);

Breadcrumb.displayName = 'Breadcrumb';

