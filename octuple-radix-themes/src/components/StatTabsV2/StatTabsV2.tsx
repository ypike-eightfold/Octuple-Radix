import React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import { StatTabsV2Props, StatTabSize, StatTabsDirection } from './StatTabsV2.types';
import './StatTabsV2.css';

export const StatTabsV2: React.FC<StatTabsV2Props> = ({
  value,
  defaultValue,
  onChange,
  children,
  size = StatTabSize.Medium,
  direction = StatTabsDirection.Horizontal,
  fullWidth = false,
  bordered = true,
  divider = true,
  statgrouptheme,
  readOnly = false,
  lineClamp,
  maxWidth,
  classNames = '',
  style,
}) => {
  const containerClassNames = [
    'stat-tabs-v2',
    `stat-tabs-v2-${size}`,
    `stat-tabs-v2-${direction}`,
    bordered && 'stat-tabs-v2-bordered',
    divider && 'stat-tabs-v2-divider',
    fullWidth && direction === 'vertical' && 'stat-tabs-v2-full-width',
    classNames,
  ]
    .filter(Boolean)
    .join(' ');

  // Clone children and inject context props
  const enhancedChildren = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, {
        size,
        direction,
        fullWidth,
        lineClamp,
        maxWidth,
        statgrouptheme,
        readOnly,
      });
    }
    return child;
  });

  return (
    <RadixTabs.Root
      value={value}
      defaultValue={defaultValue}
      onValueChange={onChange}
      className={containerClassNames}
      style={style}
    >
      <RadixTabs.List className="stat-tabs-v2-list">{enhancedChildren}</RadixTabs.List>
    </RadixTabs.Root>
  );
};

