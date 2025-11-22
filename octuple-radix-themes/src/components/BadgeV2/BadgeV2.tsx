import React from 'react';
import { BadgeV2Props, BadgeSize } from './BadgeV2.types';
import './BadgeV2.css';

export const BadgeV2 = React.forwardRef<HTMLSpanElement, BadgeV2Props>(
  (
    {
      active = false,
      classNames,
      size = BadgeSize.Medium,
      style,
      children,
      disruptive = false,
      ...rest
    },
    ref
  ) => {
    const badgeClassNames: string[] = ['badge-v2'];
    
    badgeClassNames.push(`badge-v2-${size}`);
    
    if (active) badgeClassNames.push('badge-v2-active');
    if (disruptive) badgeClassNames.push('badge-v2-disruptive');
    if (classNames) badgeClassNames.push(classNames);

    return (
      <span
        ref={ref}
        className={badgeClassNames.join(' ')}
        style={style}
        {...rest}
      >
        {children}
      </span>
    );
  }
);

BadgeV2.displayName = 'BadgeV2';

