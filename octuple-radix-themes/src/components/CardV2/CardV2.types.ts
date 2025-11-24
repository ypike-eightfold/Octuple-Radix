import React from 'react';
import { IconV2Props } from '../IconV2';
import { ButtonV2Props } from '../ButtonV2';
import { PillV2Props } from '../PillV2';
import { AvatarV2Props } from '../AvatarV2';

export enum CardSize {
  Flex = 'flex',
  Large = 'large',
  Medium = 'medium',
  Small = 'small',
}

export enum CardType {
  list = 'list',
  carousel = 'carousel',
}

export interface BodyListProps {
  showIcon?: boolean;
  label?: string;
}

export interface BodyProps {
  contents?: BodyListProps[];
  type?: string;
  iconProps?: Partial<IconV2Props>;
}

export type FooterItems = [iconProps?: Partial<IconV2Props>, text?: string];

export interface CardV2Props extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'> {
  /**
   * Allows focus on the checkbox when it's disabled.
   */
  allowDisabledFocus?: boolean;
  /**
   * Avatar of the card.
   */
  avatar?: AvatarV2Props;
  /**
   * The Body of the card.
   */
  body?: React.ReactNode;
  /**
   * Custom classes for the Body.
   */
  bodyClassNames?: string;
  /**
   * Pill props for the first body list.
   */
  bodyListOnePillProps?: PillV2Props;
  /**
   * Pill props for the second body list.
   */
  bodyListTwoPillProps?: PillV2Props;
  /**
   * List of items for body.
   */
  bodyListOneProps?: BodyProps;
  /**
   * List of items for body.
   */
  bodyListTwoProps?: BodyProps;
  /**
   * If the card is bordered or not.
   * @default false
   */
  bordered?: boolean;
  /**
   * Custom children content
   */
  children?: React.ReactNode;
  /**
   * Custom classnames of the component.
   */
  classNames?: string;
  /**
   * The card is in a disabled state.
   * @default false
   */
  disabled?: boolean;
  /**
   * The card has a drop shadow.
   * @default false
   */
  dropShadow?: boolean;
  /**
   * The Footer of the card.
   */
  footer?: React.ReactNode;
  /**
   * Props for the Footer button.
   */
  footerButtonProps?: ButtonV2Props;
  /**
   * Custom classes for the Footer.
   */
  footerClassNames?: string;
  /**
   * Footer icon name.
   */
  footerIcon?: string;
  /**
   * The props for the footer.
   */
  footerProps?: FooterItems;
  /**
   * The Header of the card.
   */
  header?: React.ReactNode;
  /**
   * Props for the header button.
   */
  headerButtonProps?: ButtonV2Props;
  /**
   * Custom classes for the header.
   */
  headerClassNames?: string;
  /**
   * Header icon name.
   */
  headerIcon?: string;
  /**
   * Header title name.
   */
  headerTitle?: string;
  /**
   * Custom height of the card.
   */
  height?: number | string;
  /**
   * Custom icon for the card.
   */
  icon?: string;
  /**
   * Option to inset the :focus-visible CSS box-shadow.
   * Use this if the :focus-visible CSS box-shadow is being clipped.
   */
  insetFocusVisible?: boolean;
  /**
   * The boolean value if a list card is selected.
   */
  isSelected?: boolean;
  /**
   * Name of the employee card.
   */
  name?: string;
  /**
   * The card size.
   * @default CardSize.Medium
   */
  size?: CardSize;
  /**
   * The card style.
   */
  style?: React.CSSProperties;
  /**
   * The props for the subheaders.
   */
  subHeaderProps?: Array<string>;
  /**
   * Custom icon subheader separator.
   */
  subHeaderSeparatorIcon?: string;
  /**
   * Tags for the card.
   */
  tag?: PillV2Props;
  /**
   * Type of the card.
   * @default CardType.list
   */
  type?: CardType;
  /**
   * Custom width of the card.
   */
  width?: number | string;
}

