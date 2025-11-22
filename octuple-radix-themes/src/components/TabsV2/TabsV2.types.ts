import React from 'react';
import { IconV2Props } from '../IconV2';

export type TabValue = string;

export enum TabIconAlign {
  Start = 'start',
  End = 'end',
}

export enum TabSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
  XSmall = 'xsmall',
}

export enum TabVariant {
  default = 'default',
  pill = 'pill',
}

export type SelectTabEvent<E = HTMLElement> =
  | React.MouseEvent<E>
  | React.KeyboardEvent<E>;

export type OnChangeHandler = (value: TabValue, event: SelectTabEvent) => void;

export interface TabV2Props {
  /**
   * The tab icon alignment.
   * @default TabIconAlign.Start
   */
  alignIcon?: TabIconAlign;
  /**
   * The aria-label of the tab.
   */
  ariaLabel?: string;
  /**
   * The aria-controls of tabs
   */
  ariaControls?: string;
  /**
   * Content of the badge.
   */
  badgeContent?: React.ReactNode;
  /**
   * The tabs inverted color scheme.
   * Use when variant is `pill`.
   * @default false
   */
  colorInvert?: boolean;
  /**
   * The tab is disabled.
   */
  disabled?: boolean;
  /**
   * The icon props to display.
   */
  iconProps?: Partial<IconV2Props>;
  /**
   * The tab label.
   */
  label?: string;
  /**
   * If the tab is in loading state.
   */
  loading?: boolean;
  /**
   * The tab size.
   * @default TabSize.Medium
   */
  size?: TabSize;
  /**
   * Active value of the tab.
   */
  value: TabValue;
  /**
   * Custom classNames
   */
  classNames?: string;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
}

export interface TabsV2Props {
  /**
   * The tabs icon alignment.
   * Use when variant is `default` or `pill`.
   * @default TabIconAlign.Start
   */
  alignIcon?: TabIconAlign;
  /**
   * List of TabV2 elements.
   */
  children: React.ReactElement<TabV2Props> | React.ReactElement<TabV2Props>[];
  /**
   * The tabs inverted color scheme.
   * Use when variant is `pill`.
   * @default false
   */
  colorInvert?: boolean;
  /**
   * Callback called on click of a tab.
   * @param value {TabValue}
   * @param event {SelectTabEvent}
   */
  onChange?: OnChangeHandler;
  /**
   * If the tabs are scrollable or not.
   * @default false
   */
  scrollable?: boolean;
  /**
   * The tab size.
   * @default TabSize.Medium
   */
  size?: TabSize;
  /**
   * If the tabs should have an underline beneath them.
   * NOTE: won't be applied if pill variant is used.
   * @default false
   */
  underlined?: boolean;
  /**
   * The default tab to select.
   */
  value?: TabValue;
  /**
   * Variant of the tab.
   * @default default
   */
  variant?: TabVariant;
  /**
   * Custom classNames
   */
  classNames?: string;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
  /**
   * Whether to enable arrow key navigation between tabs
   * @default true (provided by Radix)
   */
  enableArrowNav?: boolean;
}

