import React, { useRef } from 'react';
import {
  LinkButtonV2Props,
  LinkButtonIconAlign,
  LinkButtonShape,
  LinkButtonSize,
  LinkButtonTextAlign,
  LinkButtonVariant,
  LinkButtonWidth,
} from './LinkButtonV2.types';
import { IconV2 } from '../IconV2';
import { SpinnerV2 } from '../SpinnerV2';
import { PillV2 } from '../PillV2';
import './LinkButtonV2.css';

export const LinkButtonV2 = React.forwardRef<HTMLAnchorElement, LinkButtonV2Props>(
  (
    {
      alignIcon = LinkButtonIconAlign.Left,
      alignText = LinkButtonTextAlign.Center,
      allowDisabledFocus = false,
      ariaLabel,
      classNames,
      counter,
      disabled = false,
      disruptive = false,
      dropShadow = false,
      floatingLinkButtonProps,
      gradient = false,
      iconProps,
      linkButtonWidth = LinkButtonWidth.fitContent,
      loading = false,
      prefixIconProps,
      id,
      onClick,
      role = 'link',
      shape = LinkButtonShape.Pill,
      size = LinkButtonSize.Medium,
      style,
      target = '_self',
      text,
      transparent = false,
      variant = LinkButtonVariant.Default,
      ...rest
    },
    ref
  ) => {
    const internalRef = useRef<HTMLAnchorElement>(null);
    const mergedRef = (ref as any) || internalRef;

    const counterExists = !!counter;
    const iconExists = !!iconProps;
    const prefixIconExists = !!prefixIconProps;
    const textExists = !!text;

    const linkButtonClassNames: string[] = ['link-button-v2'];

    // Variant classes
    if (disruptive && variant === LinkButtonVariant.Default) {
      linkButtonClassNames.push('link-button-v2-disruptive');
    } else if (disruptive && variant === LinkButtonVariant.Primary) {
      linkButtonClassNames.push('link-button-v2-primary-disruptive');
    } else if (disruptive && variant === LinkButtonVariant.Secondary) {
      linkButtonClassNames.push('link-button-v2-secondary-disruptive');
    } else {
      linkButtonClassNames.push(`link-button-v2-${variant}`);
    }

    // Size classes
    linkButtonClassNames.push(`link-button-v2-${size}`);

    // Shape classes
    if (shape === LinkButtonShape.Pill) {
      linkButtonClassNames.push('link-button-v2-pill');
    } else if (shape === LinkButtonShape.Round && !textExists) {
      linkButtonClassNames.push('link-button-v2-round');
    } else if (shape === LinkButtonShape.Rectangle) {
      linkButtonClassNames.push('link-button-v2-rectangle');
    }

    // State classes
    if (gradient) linkButtonClassNames.push('link-button-v2-gradient');
    if (dropShadow) linkButtonClassNames.push('link-button-v2-drop-shadow');
    if (floatingLinkButtonProps?.enabled) linkButtonClassNames.push('link-button-v2-floating');
    if (transparent && variant === LinkButtonVariant.SystemUI) {
      linkButtonClassNames.push('link-button-v2-transparent');
    }
    if (linkButtonWidth === LinkButtonWidth.fill) {
      linkButtonClassNames.push('link-button-v2-stretch');
    }
    if (alignText === LinkButtonTextAlign.Left) linkButtonClassNames.push('link-button-v2-align-left');
    if (alignText === LinkButtonTextAlign.Right) linkButtonClassNames.push('link-button-v2-align-right');
    if (iconExists && alignIcon === LinkButtonIconAlign.Left) {
      linkButtonClassNames.push('link-button-v2-icon-left');
    }
    if (iconExists && alignIcon === LinkButtonIconAlign.Right) {
      linkButtonClassNames.push('link-button-v2-icon-right');
    }
    if (allowDisabledFocus || disabled) linkButtonClassNames.push('link-button-v2-disabled');
    if (loading) linkButtonClassNames.push('link-button-v2-loading');
    if (classNames) linkButtonClassNames.push(classNames);

    const linkButtonTextClassNames: string[] = ['link-button-v2-text'];
    linkButtonTextClassNames.push(`link-button-v2-text-${size}`);

    const badgeClassNames: string[] = ['link-button-v2-counter'];
    badgeClassNames.push(...linkButtonTextClassNames);

    const handleOnClick = (event: React.MouseEvent<HTMLAnchorElement>): void => {
      if (disabled) {
        event.preventDefault();
        return;
      }
      onClick?.(event);
    };

    const getIconSize = (): number => {
      if (size === LinkButtonSize.Large) return 24;
      if (size === LinkButtonSize.Medium) return 20;
      if (size === LinkButtonSize.Small) return 16;
      return 20;
    };

    const getLinkButtonIcon = (): JSX.Element | null => {
      if (!iconProps || !iconProps.name) return null;
      return (
        <IconV2
          {...iconProps}
          name={iconProps.name}
          className={`link-button-v2-icon ${iconProps.className || ''}`}
          size={getIconSize()}
        />
      );
    };

    const getPrefixIcon = (): JSX.Element | null => {
      if (!prefixIconProps || !prefixIconProps.name) return null;
      return (
        <IconV2
          {...prefixIconProps}
          name={prefixIconProps.name}
          className={`link-button-v2-icon link-button-v2-prefix-icon ${prefixIconProps.className || ''}`}
          size={getIconSize()}
        />
      );
    };

    const getLinkButtonContent = (buttonTextClassNames: string[], text?: string): JSX.Element => (
      <span className={buttonTextClassNames.join(' ')}>
        {text || 'Link button'}
        {counterExists && (
          <PillV2 size="small" color="blue" className={badgeClassNames.join(' ')}>
            {counter}
          </PillV2>
        )}
      </span>
    );

    const getLinkButtonLoader = (): JSX.Element | null => {
      if (!loading) return null;
      const spinnerSize = size === LinkButtonSize.Large ? 'large' : size === LinkButtonSize.Small ? 'small' : 'medium';
      return <SpinnerV2 size={spinnerSize} className="link-button-v2-loader" />;
    };

    return (
      <a
        {...rest}
        ref={mergedRef}
        aria-label={ariaLabel}
        aria-disabled={(!allowDisabledFocus && disabled) || loading}
        className={linkButtonClassNames.join(' ')}
        id={id}
        onClick={!allowDisabledFocus ? handleOnClick : undefined}
        role={role}
        style={style}
        target={target}
        tabIndex={disabled && !allowDisabledFocus ? -1 : undefined}
      >
        {/* Icon only (no text) */}
        {iconExists && prefixIconExists && !textExists && (
          <span className="link-button-v2-content">
            {getLinkButtonIcon()}
            {getPrefixIcon()}
          </span>
        )}
        
        {/* Single icon only */}
        {iconExists && !textExists && !prefixIconExists && !counterExists && (
          <span className="link-button-v2-content">{getLinkButtonIcon()}</span>
        )}
        
        {/* Counter only (no text, no icon) */}
        {counterExists && !textExists && !loading && !iconExists && (
          <PillV2 size="small" color="blue" className={badgeClassNames.join(' ')}>
            {counter}
          </PillV2>
        )}
        
        {/* Icon + Counter (no text) */}
        {iconExists && counterExists && !textExists && !loading && (
          <span className="link-button-v2-content">
            {getLinkButtonIcon()}
            <PillV2 size="small" color="blue" className={badgeClassNames.join(' ')}>
              {counter}
            </PillV2>
            {prefixIconExists && getPrefixIcon()}
          </span>
        )}
        
        {/* Icon + Text */}
        {iconExists && textExists && (
          <span className="link-button-v2-content">
            {getLinkButtonIcon()}
            {getLinkButtonContent(linkButtonTextClassNames, text)}
            {prefixIconExists && getPrefixIcon()}
          </span>
        )}
        
        {/* Text only (no icon) */}
        {!iconExists && getLinkButtonContent(linkButtonTextClassNames, text)}
        
        {/* Loader */}
        {getLinkButtonLoader()}
      </a>
    );
  }
);

LinkButtonV2.displayName = 'LinkButtonV2';

