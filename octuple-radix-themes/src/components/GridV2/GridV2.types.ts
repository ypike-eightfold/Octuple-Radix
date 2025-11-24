import React from 'react';

export type Breakpoint = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type Gutter = number | undefined | Partial<Record<Breakpoint, number>>;

export type RowAlign = 'top' | 'middle' | 'bottom' | 'stretch';
export type RowJustify = 'start' | 'end' | 'center' | 'space-around' | 'space-between' | 'space-evenly';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The row align attributes.
   */
  align?: RowAlign;
  /**
   * Custom class names
   */
  classNames?: string;
  /**
   * The gutter.
   * @default 0
   */
  gutter?: Gutter | [Gutter, Gutter];
  /**
   * The row justify attributes.
   */
  justify?: RowJustify;
  /**
   * The row wraps.
   */
  wrap?: boolean;
}

export type ColSpanType = number | string;
export type FlexType = number | 'none' | 'auto' | string;

export interface ColSize {
  flex?: FlexType;
  span?: ColSpanType;
  order?: ColSpanType;
  offset?: ColSpanType;
  push?: ColSpanType;
  pull?: ColSpanType;
}

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Custom class names
   */
  classNames?: string;
  /**
   * The col flex type.
   */
  flex?: FlexType;
  /**
   * The col span (1-12).
   */
  span?: ColSpanType;
  /**
   * The col order.
   */
  order?: ColSpanType;
  /**
   * The col offset.
   */
  offset?: ColSpanType;
  /**
   * The col push.
   */
  push?: ColSpanType;
  /**
   * The col pull.
   */
  pull?: ColSpanType;
  /**
   * The col size is extra-small.
   */
  xs?: ColSpanType | ColSize;
  /**
   * The col size is small.
   */
  sm?: ColSpanType | ColSize;
  /**
   * The col size is medium.
   */
  md?: ColSpanType | ColSize;
  /**
   * The col size is large.
   */
  lg?: ColSpanType | ColSize;
  /**
   * The col size is extra-large.
   */
  xl?: ColSpanType | ColSize;
  /**
   * The col size is extra-extra-large.
   */
  xxl?: ColSpanType | ColSize;
}

