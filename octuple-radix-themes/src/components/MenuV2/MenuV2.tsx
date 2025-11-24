import React from 'react';
import { MenuV2Props, MenuSize, MenuVariant } from './MenuV2.types';
import { MenuItemV2 } from './MenuItemV2';
import { ButtonV2 } from '../ButtonV2';
import { StackV2 } from '../StackV2';
import './MenuV2.css';

/**
 * MenuV2 - A menu component for displaying lists of actions
 * 
 * Can be used standalone or as content for Dropdown/Popover components.
 * Built with Radix UI Primitives for accessibility and keyboard navigation.
 */
export const MenuV2 = React.forwardRef<HTMLDivElement, MenuV2Props>(
  (
    {
      items,
      size = MenuSize.medium,
      variant = MenuVariant.neutral,
      onChange,
      header,
      cancelButtonProps,
      okButtonProps,
      onCancel,
      onOk,
      classNames,
      style,
      itemClassNames,
      itemStyle,
      role = 'menu',
    },
    ref
  ) => {
    const menuClasses = [
      'menu-v2-container',
      `menu-v2-${size}`,
      classNames,
    ]
      .filter(Boolean)
      .join(' ');

    const headerClasses = [
      'menu-v2-header-container',
      `menu-v2-${size}`,
    ].join(' ');

    const footerClasses = [
      'menu-v2-footer-container',
      `menu-v2-${size}`,
    ].join(' ');

    return (
      <div ref={ref} className={menuClasses} style={style} role={role}>
        {/* Header */}
        {header && (
          <div className={headerClasses}>
            <div className="menu-v2-heading">{header}</div>
          </div>
        )}

        {/* Menu Items */}
        <div className="menu-v2-items">
          {items.map((item, index) => (
            <MenuItemV2
              key={`menu-item-${index}`}
              item={item}
              size={size}
              variant={variant}
              onChange={onChange}
              classNames={itemClassNames}
              style={itemStyle}
            />
          ))}
        </div>

        {/* Footer with Cancel/OK buttons */}
        {(cancelButtonProps || okButtonProps) && (
          <StackV2
            direction="horizontal"
            flexGap="s"
            justify="flex-end"
            fullWidth
            className={footerClasses}
          >
            {cancelButtonProps && (
              <ButtonV2
                variant="neutral"
                {...cancelButtonProps}
                onClick={(e) => {
                  onCancel?.(e);
                  cancelButtonProps.onClick?.(e);
                }}
              >
                {cancelButtonProps.children || 'Cancel'}
              </ButtonV2>
            )}
            {okButtonProps && (
              <ButtonV2
                variant="primary"
                {...okButtonProps}
                onClick={(e) => {
                  onOk?.(e);
                  okButtonProps.onClick?.(e);
                }}
              >
                {okButtonProps.children || 'OK'}
              </ButtonV2>
            )}
          </StackV2>
        )}
      </div>
    );
  }
);

MenuV2.displayName = 'MenuV2';

