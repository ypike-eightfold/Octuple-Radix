import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { IconV2 } from '../IconV2';
import { ButtonV2 } from '../ButtonV2';
import {
  MenuItemTypes,
  MenuItemType,
  MenuItemIconAlign,
  MenuSize,
  MenuVariant,
  MenuItemButtonProps,
} from './MenuV2.types';
import './MenuV2.css';

interface MenuItemV2Props {
  item: MenuItemTypes;
  size?: MenuSize;
  variant?: MenuVariant;
  onChange?: (value: any, event?: React.MouseEvent) => void;
  classNames?: string;
  style?: React.CSSProperties;
}

export const MenuItemV2: React.FC<MenuItemV2Props> = ({
  item,
  size = MenuSize.medium,
  variant = MenuVariant.neutral,
  onChange,
  classNames,
  style,
}) => {
  // Separator
  if (item.type === MenuItemType.separator) {
    return <DropdownMenu.Separator className="menu-v2-separator" />;
  }

  // SubHeader
  if (item.type === MenuItemType.subHeader) {
    return (
      <DropdownMenu.Label className={`menu-v2-subheader menu-v2-${size}`}>
        {item.text}
      </DropdownMenu.Label>
    );
  }

  // Custom
  if (item.type === MenuItemType.custom && item.render) {
    return <div className="menu-v2-custom">{item.render()}</div>;
  }

  // Link
  if (item.type === MenuItemType.link) {
    const itemClasses = [
      'menu-v2-item',
      `menu-v2-item-${size}`,
      `menu-v2-item-${variant}`,
      item.active && 'menu-v2-item-active',
      item.disabled && 'menu-v2-item-disabled',
      classNames,
      item.classNames,
    ]
      .filter(Boolean)
      .join(' ');

    return (
      <DropdownMenu.Item
        className={itemClasses}
        disabled={item.disabled}
        asChild
        onSelect={(e) => {
          if (onChange && !item.disabled) {
            onChange(item.value, e as any);
          }
        }}
      >
        <a
          href={item.href}
          target={item.target}
          className="menu-v2-item-content"
          style={style}
        >
          {item.iconProps && item.alignIcon !== MenuItemIconAlign.Right && (
            <IconV2
              {...item.iconProps}
              className="menu-v2-item-icon menu-v2-item-icon-left"
            />
          )}
          <div className="menu-v2-item-text-wrapper">
            <span className="menu-v2-item-text">{item.text}</span>
            {item.subText && (
              <span className="menu-v2-item-subtext">{item.subText}</span>
            )}
          </div>
          {item.counter && (
            <span className="menu-v2-item-counter">{item.counter}</span>
          )}
          {item.iconProps && item.alignIcon === MenuItemIconAlign.Right && (
            <IconV2
              {...item.iconProps}
              className="menu-v2-item-icon menu-v2-item-icon-right"
            />
          )}
        </a>
      </DropdownMenu.Item>
    );
  }

  // Button (default) - with submenu support
  // Type guard to check if item is MenuItemButtonProps
  const isButtonItem = (item: any): item is MenuItemButtonProps => {
    return item.type !== MenuItemType.custom;
  };

  if (!isButtonItem(item)) {
    return null;
  }

  const hasSubmenu = item.dropdownMenuItems && item.dropdownMenuItems.length > 0;

  const itemClasses = [
    'menu-v2-item',
    `menu-v2-item-${size}`,
    `menu-v2-item-${variant}`,
    item.active && 'menu-v2-item-active',
    item.disabled && 'menu-v2-item-disabled',
    classNames,
    item.classNames,
  ]
    .filter(Boolean)
    .join(' ');

  const renderItemContent = () => (
    <>
      {item.iconProps && item.alignIcon !== MenuItemIconAlign.Right && (
        <IconV2
          {...item.iconProps}
          className="menu-v2-item-icon menu-v2-item-icon-left"
        />
      )}
      <div className="menu-v2-item-text-wrapper">
        <span className="menu-v2-item-text">{item.text}</span>
        {item.subText && (
          <span className="menu-v2-item-subtext">{item.subText}</span>
        )}
      </div>
      {item.counter && (
        <span className="menu-v2-item-counter">{item.counter}</span>
      )}
      {item.secondaryButtonProps && (
        <ButtonV2
          size="small"
          variant="ghost"
          {...item.secondaryButtonProps}
          className="menu-v2-item-secondary-button"
          onClick={(e) => {
            e.stopPropagation();
            item.secondaryButtonProps?.onClick?.(e);
          }}
        >
          {item.secondaryButtonProps.children}
        </ButtonV2>
      )}
      {item.iconProps && item.alignIcon === MenuItemIconAlign.Right && (
        <IconV2
          {...item.iconProps}
          className="menu-v2-item-icon menu-v2-item-icon-right"
        />
      )}
      {hasSubmenu && (
        <IconV2
          name="chevron_right"
          type="material"
          size={20}
          className="menu-v2-item-submenu-icon"
        />
      )}
    </>
  );

  // Submenu
  if (hasSubmenu) {
    return (
      <DropdownMenu.Sub>
        <DropdownMenu.SubTrigger className={itemClasses} disabled={item.disabled}>
          {renderItemContent()}
        </DropdownMenu.SubTrigger>
        <DropdownMenu.Portal>
          <DropdownMenu.SubContent className="menu-v2-container" sideOffset={4}>
            {item.dropdownMenuItems!.map((subItem, index) => (
              <MenuItemV2
                key={`submenu-item-${index}`}
                item={subItem}
                size={size}
                variant={variant}
                onChange={onChange}
              />
            ))}
          </DropdownMenu.SubContent>
        </DropdownMenu.Portal>
      </DropdownMenu.Sub>
    );
  }

  // Regular button item
  return (
    <DropdownMenu.Item
      className={itemClasses}
      disabled={item.disabled}
      onSelect={(e) => {
        if (onChange && !item.disabled) {
          onChange(item.value, e as any);
        }
        if (item.onClick && !item.disabled) {
          item.onClick(item.value, e as any);
        }
      }}
    >
      {renderItemContent()}
    </DropdownMenu.Item>
  );
};

