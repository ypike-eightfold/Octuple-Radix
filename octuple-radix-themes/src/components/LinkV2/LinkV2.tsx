import React from 'react';
import { Link as RadixLink } from '@radix-ui/themes';
import './LinkV2.css';

export type LinkV2Size = 'small' | 'medium' | 'large';

export interface LinkV2Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Size of the link */
  size?: LinkV2Size;
  /** Link href */
  href: string;
  /** Link children */
  children: React.ReactNode;
  /** Whether the link is disabled */
  disabled?: boolean;
  /** Additional CSS class */
  className?: string;
  /** Target for the link */
  target?: '_self' | '_blank' | '_parent' | '_top';
  /** Rel attribute */
  rel?: string;
}

export const LinkV2 = React.forwardRef<HTMLAnchorElement, LinkV2Props>(
  (
    {
      size = 'large',
      href,
      children,
      disabled = false,
      className = '',
      target,
      rel,
      ...rest
    },
    ref
  ) => {
    const sizeClass = `linkv2--${size}`;
    const disabledClass = disabled ? 'linkv2--disabled' : '';
    const classes = `linkv2 ${sizeClass} ${disabledClass} ${className}`.trim();

    // Add rel="noopener noreferrer" for external links
    const finalRel = target === '_blank' ? rel || 'noopener noreferrer' : rel;

    return (
      <RadixLink
        ref={ref}
        href={disabled ? undefined : href}
        target={target}
        rel={finalRel}
        className={classes}
        data-disabled={disabled}
        onClick={disabled ? (e) => e.preventDefault() : rest.onClick}
        {...rest}
      >
        {children}
      </RadixLink>
    );
  }
);

LinkV2.displayName = 'LinkV2';

export default LinkV2;

