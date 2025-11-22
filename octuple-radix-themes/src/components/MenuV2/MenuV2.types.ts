import React from 'react';
import { ButtonV2Props } from '../ButtonV2';

export enum MenuVariant {
  disruptive = 'disruptive',
  primary = 'primary',
  neutral = 'neutral',
}

export enum MenuSize {
  large = 'large',
  medium = 'medium',
  small = 'small',
}

export enum MenuItemType {
  button = 'button',
  link = 'link',
  subHeader = 'subHeader',
  custom = 'custom',
  separator = 'separator',
}

export enum MenuItemIconAlign {
  Left = 'left',
  Right = 'right',
}

export interface MenuIconProps {
  name: string;
  type?: 'material' | 'brand';
  size?: number;
  color?: string;
}

// Base menu item props
export interface BaseMenuItemProps {
  /**
   * Display label of the menu item
   */
  text?: string;
  /**
   * Value of the menu item
   */
  value?: any;
  /**
   * Type of the menu item
   * @default MenuItemType.button
   */
  type?: MenuItemType;
  /**
   * The Menu item icon alignment.
   * @default MenuItemIconAlign.Left
   */
  alignIcon?: MenuItemIconAlign;
  /**
   * Menu item icon props
   */
  iconProps?: MenuIconProps;
  /**
   * Size of the menu item
   * @default MenuSize.medium
   */
  size?: MenuSize;
  /**
   * Variant of the menu item
   * @default MenuVariant.neutral
   */
  variant?: MenuVariant;
  /**
   * The text should wrap
   * @default false
   */
  wrap?: boolean;
  /**
   * Custom class names
   */
  classNames?: string;
}

// Button-type menu item
export interface MenuItemButtonProps extends BaseMenuItemProps {
  type?: MenuItemType.button;
  /**
   * If the menu item is active or not
   * @default false
   */
  active?: boolean;
  /**
   * The counter string (e.g., notification count)
   */
  counter?: string;
  /**
   * If menu item is disabled or not
   */
  disabled?: boolean;
  /**
   * Display sub text of the menu item
   */
  subText?: string;
  /**
   * On Click handler of the menu item
   */
  onClick?: (value: any, event?: React.MouseEvent<any>) => void;
  /**
   * Secondary action button for the menu item
   */
  secondaryButtonProps?: Partial<ButtonV2Props>;
  /**
   * Nested submenu items
   */
  dropdownMenuItems?: MenuItemTypes[];
}

// Link-type menu item
export interface MenuItemLinkProps extends BaseMenuItemProps {
  type: MenuItemType.link;
  /**
   * If the menu item is active or not
   * @default false
   */
  active?: boolean;
  /**
   * The counter string
   */
  counter?: string;
  /**
   * If menu item is disabled or not
   */
  disabled?: boolean;
  /**
   * Display sub text of the menu item
   */
  subText?: string;
  /**
   * Link href
   */
  href?: string;
  /**
   * Link target
   */
  target?: string;
}

// SubHeader-type menu item
export interface MenuItemSubHeaderProps extends BaseMenuItemProps {
  type: MenuItemType.subHeader;
  /**
   * Text of the sub header
   */
  text: string;
}

// Separator-type menu item
export interface MenuItemSeparatorProps {
  type: MenuItemType.separator;
}

// Custom-type menu item
export interface MenuItemCustomProps extends BaseMenuItemProps {
  type: MenuItemType.custom;
  /**
   * Method to render custom menu item
   */
  render?: () => React.ReactNode;
}

export type MenuItemTypes =
  | MenuItemButtonProps
  | MenuItemLinkProps
  | MenuItemSubHeaderProps
  | MenuItemSeparatorProps
  | MenuItemCustomProps;

export interface MenuV2Props {
  /**
   * Array of menu items
   */
  items: MenuItemTypes[];
  /**
   * Size of the menu
   * @default MenuSize.medium
   */
  size?: MenuSize;
  /**
   * Variant of the menu items
   * @default MenuVariant.neutral
   */
  variant?: MenuVariant;
  /**
   * On change callback when menu item is clicked
   */
  onChange?: (value: any, event?: React.MouseEvent) => void;
  /**
   * Custom header component
   */
  header?: React.ReactNode;
  /**
   * Props for the cancel button (footer)
   */
  cancelButtonProps?: Partial<ButtonV2Props>;
  /**
   * Props for the ok button (footer)
   */
  okButtonProps?: Partial<ButtonV2Props>;
  /**
   * Callback when cancel button is clicked
   */
  onCancel?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Callback when ok button is clicked
   */
  onOk?: React.MouseEventHandler<HTMLButtonElement>;
  /**
   * Custom class names
   */
  classNames?: string;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
  /**
   * Custom class names for items
   */
  itemClassNames?: string;
  /**
   * Custom styles for items
   */
  itemStyle?: React.CSSProperties;
  /**
   * The menu aria role.
   * @default 'menu'
   */
  role?: string;
}

