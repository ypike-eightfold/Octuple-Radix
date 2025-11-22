import React from 'react';

// ===== ENUMS =====
export enum StatTabSize {
  Medium = 'medium',
  Small = 'small',
  XSmall = 'xsmall',
}

export enum StatTabsDirection {
  Horizontal = 'horizontal',
  Vertical = 'vertical',
}

export type StatValidationStatus = 'success' | 'warning' | 'error' | '';

export type StatThemeName =
  | 'red'
  | 'redOrange'
  | 'orange'
  | 'yellow'
  | 'yellowGreen'
  | 'green'
  | 'blueGreen'
  | 'blue'
  | 'blueViolet'
  | 'violet'
  | 'violetRed'
  | 'grey';

// ===== STAT TAB ITEM =====
export interface StatV2Props {
  /**
   * Unique value identifier for the tab
   */
  value: string;
  /**
   * Aria label for accessibility
   */
  ariaLabel?: string;
  /**
   * Icon name (Material Design)
   */
  icon?: string;
  /**
   * Tab label text
   */
  label?: string;
  /**
   * First ratio value (e.g., numerator)
   */
  ratioA?: string | number;
  /**
   * Second ratio value (e.g., denominator or percentage)
   */
  ratioB?: string | number;
  /**
   * Validation status indicator
   */
  status?: StatValidationStatus;
  /**
   * Individual tab theme (overrides group theme)
   */
  theme?: StatThemeName;
  /**
   * Whether tab is disabled
   * @default false
   */
  disabled?: boolean;
  /**
   * Whether tab is in loading state
   * @default false
   */
  loading?: boolean;
  /**
   * Optional button props
   */
  buttonProps?: {
    ariaLabel?: string;
    icon?: string;
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  };
  /**
   * Tab size (inherited from parent)
   * @internal
   */
  size?: StatTabSize;
  /**
   * Direction (inherited from parent)
   * @internal
   */
  direction?: StatTabsDirection;
  /**
   * Full width (inherited from parent)
   * @internal
   */
  fullWidth?: boolean;
  /**
   * Line clamp (inherited from parent)
   * @internal
   */
  lineClamp?: number;
  /**
   * Max width (inherited from parent)
   * @internal
   */
  maxWidth?: number;
  /**
   * Group theme (inherited from parent)
   * @internal
   */
  statgrouptheme?: StatThemeName;
  /**
   * Read-only mode (inherited from parent)
   * @internal
   */
  readOnly?: boolean;
  /**
   * Gradient effect
   * @default false
   */
  gradient?: boolean;
  /**
   * Custom class names
   */
  classNames?: string;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
}

// ===== STAT TABS CONTAINER =====
export interface StatTabsV2Props {
  /**
   * Currently active tab value (controlled)
   */
  value?: string;
  /**
   * Default active tab value (uncontrolled)
   */
  defaultValue?: string;
  /**
   * Change handler
   */
  onChange?: (value: string) => void;
  /**
   * Stat tab children
   */
  children: React.ReactNode;
  /**
   * Tab size
   * @default StatTabSize.Medium
   */
  size?: StatTabSize;
  /**
   * Direction (horizontal or vertical)
   * @default StatTabsDirection.Horizontal
   */
  direction?: StatTabsDirection;
  /**
   * Full width (for vertical direction)
   * @default false
   */
  fullWidth?: boolean;
  /**
   * Border around tabs
   * @default true
   */
  bordered?: boolean;
  /**
   * Divider between tabs
   * @default true
   */
  divider?: boolean;
  /**
   * Group theme for all tabs (can be overridden per tab)
   */
  statgrouptheme?: StatThemeName;
  /**
   * Read-only mode (non-interactive)
   * @default false
   */
  readOnly?: boolean;
  /**
   * Maximum number of lines for tab labels
   */
  lineClamp?: number;
  /**
   * Maximum width for tabs
   */
  maxWidth?: number;
  /**
   * Custom class names
   */
  classNames?: string;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
}

