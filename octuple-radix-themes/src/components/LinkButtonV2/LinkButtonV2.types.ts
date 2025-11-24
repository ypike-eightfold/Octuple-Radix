import React, { AnchorHTMLAttributes } from 'react';
import { IconV2Props } from '../IconV2';

export enum LinkButtonShape {
  Rectangle = 'rectangle',
  Pill = 'pill',
  Round = 'round',
}

export enum LinkButtonSize {
  Flex = 'flex',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export enum LinkButtonTextAlign {
  Center = 'center',
  Left = 'left',
  Right = 'right',
}

export enum LinkButtonIconAlign {
  Left = 'left',
  Right = 'right',
}

export enum LinkButtonWidth {
  fitContent = 'fitContent',
  fill = 'fill',
}

export enum LinkButtonVariant {
  Default = 'default',
  Neutral = 'neutral',
  Primary = 'primary',
  Secondary = 'secondary',
  SystemUI = 'systemui',
}

export interface FloatingLinkButtonProps {
  /**
   * Determines if the link button is floating.
   * @default false
   */
  enabled?: boolean;
}

export interface LinkButtonV2Props extends Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'> {
  /**
   * Allows focus on the link button when it's disabled.
   */
  allowDisabledFocus?: boolean;
  /**
   * The link button icon alignment.
   * @default LinkButtonIconAlign.Left
   */
  alignIcon?: LinkButtonIconAlign;
  /**
   * The link button text alignment.
   * @default LinkButtonTextAlign.Center
   */
  alignText?: LinkButtonTextAlign;
  /**
   * The link button aria-label text.
   */
  ariaLabel?: string;
  /**
   * The link button class names.
   */
  classNames?: string;
  /**
   * The link button counter string.
   */
  counter?: string;
  /**
   * The link button disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The link button disruptive state.
   * @default false
   */
  disruptive?: boolean;
  /**
   * The link button drop shadow state.
   * @default false
   */
  dropShadow?: boolean;
  /**
   * The link button is always floating on bottom right corner.
   */
  floatingLinkButtonProps?: FloatingLinkButtonProps;
  /**
   * The link button gradient state.
   * @default false
   */
  gradient?: boolean;
  /**
   * The link button icon props.
   */
  iconProps?: Partial<IconV2Props>;
  /**
   * The link button width type
   * @default fitContent
   */
  linkButtonWidth?: LinkButtonWidth;
  /**
   * The link button prefix icon props.
   */
  prefixIconProps?: Partial<IconV2Props>;
  /**
   * The link button id.
   */
  id?: string;
  /**
   * The link button onClick event handler.
   */
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
  /**
   * The link button role.
   * @default 'link'
   */
  role?: string;
  /**
   * Shape of the link button.
   * @default LinkButtonShape.Pill
   */
  shape?: LinkButtonShape;
  /**
   * The link button size.
   * @default LinkButtonSize.Medium
   */
  size?: LinkButtonSize;
  /**
   * The link button style.
   */
  style?: React.CSSProperties;
  /**
   * The link button target
   * @default '_self'
   */
  target?: string;
  /**
   * The link button text.
   */
  text?: string;
  /**
   * The link button will remain transparent
   * @default false
   */
  transparent?: boolean;
  /**
   * The link button variant.
   * variant: `Default`, `Neutral`, `Primary`, `Secondary`, `SystemUI`
   * @default LinkButtonVariant.Default
   */
  variant?: LinkButtonVariant;
  /**
   * If the link button is in loading state
   */
  loading?: boolean;
}

