import React from 'react';

export enum BadgeSize {
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export interface BadgeV2Props extends Omit<React.HTMLAttributes<HTMLSpanElement>, 'children'> {
  /**
   * Badge content (usually a number)
   */
  children: React.ReactNode;
  /**
   * Badge is in an active state or not.
   * @default false
   */
  active?: boolean;
  /**
   * If Badge is disruptive or not.
   * @default false
   */
  disruptive?: boolean;
  /**
   * The Badge size.
   * @default BadgeSize.Medium
   */
  size?: BadgeSize;
  /**
   * Custom class names
   */
  classNames?: string;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
}

