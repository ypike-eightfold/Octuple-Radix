import React from 'react';

export type DropdownPlacement =
  | 'top'
  | 'right'
  | 'bottom'
  | 'left'
  | 'top-start'
  | 'top-end'
  | 'right-start'
  | 'right-end'
  | 'bottom-start'
  | 'bottom-end'
  | 'left-start'
  | 'left-end';

export type DropdownTrigger = 'click' | 'hover';

export interface DropdownV2Props {
  /**
   * The trigger element (button, link, etc.)
   */
  children: React.ReactElement;
  /**
   * The dropdown overlay content
   */
  overlay: React.ReactNode;
  /**
   * The trigger mode that opens the dropdown
   * @default 'click'
   */
  trigger?: DropdownTrigger;
  /**
   * Placement of the dropdown
   * @default 'bottom-start'
   */
  placement?: DropdownPlacement;
  /**
   * Should close dropdown on overlay click
   * @default true
   */
  closeOnDropdownClick?: boolean;
  /**
   * Should close dropdown on trigger click when open
   * @default true
   */
  closeOnReferenceClick?: boolean;
  /**
   * Should close dropdown on click outside
   * @default true
   */
  closeOnOutsideClick?: boolean;
  /**
   * If the dropdown is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Manually control visibility of the dropdown
   */
  open?: boolean;
  /**
   * Callback called when the visibility changes
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * The offset from the trigger element in pixels
   * @default 4
   */
  offset?: number;
  /**
   * Manually control the width of the dropdown
   */
  width?: number | string;
  /**
   * Manually control the height of the dropdown
   */
  height?: number | string;
  /**
   * Custom dropdown class names
   */
  dropdownClassNames?: string;
  /**
   * Dropdown custom style
   */
  dropdownStyle?: React.CSSProperties;
  /**
   * Class names of the main wrapper
   */
  classNames?: string;
  /**
   * Style of the main wrapper
   */
  style?: React.CSSProperties;
  /**
   * If the dropdown should be rendered in a portal
   * @default true
   */
  portal?: boolean;
  /**
   * The dropdown aria role.
   * @default 'menu'
   */
  role?: string;
  /**
   * Callback executed on trigger element click
   */
  onTriggerClick?: (event: React.MouseEvent) => void;
  /**
   * Callback executed on trigger element keydown
   */
  onTriggerKeyDown?: (event: React.KeyboardEvent) => void;
  /**
   * Callback method fired on outside click on dropdown
   */
  onClickOutside?: (event: Event) => void;
}

export type DropdownV2Ref = {
  /**
   * Helper method to manually update the position of the dropdown
   */
  update?: () => void;
};

