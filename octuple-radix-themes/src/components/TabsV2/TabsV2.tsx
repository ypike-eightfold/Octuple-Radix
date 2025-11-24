import React, { useState, Children, isValidElement } from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import {
  TabsV2Props,
  TabV2Props,
  TabIconAlign,
  TabSize,
  TabVariant,
  TabValue,
} from './TabsV2.types';
import { IconV2 } from '../IconV2';
import { PillV2 } from '../PillV2';
import { SpinnerV2 } from '../SpinnerV2';
import './TabsV2.css';

export const TabV2: React.FC<TabV2Props> = () => {
  // This is a dummy component - actual rendering happens in TabsV2
  return null;
};

export const TabsV2: React.FC<TabsV2Props> = ({
  alignIcon = TabIconAlign.Start,
  children,
  colorInvert = false,
  onChange,
  scrollable = false,
  size = TabSize.Medium,
  underlined = false,
  value: controlledValue,
  variant = TabVariant.default,
  classNames,
  style,
  enableArrowNav = true,
}) => {
  const [uncontrolledValue, setUncontrolledValue] = useState<TabValue>(
    () => {
      const firstTab = Children.toArray(children)[0];
      if (isValidElement<TabV2Props>(firstTab)) {
        return firstTab.props.value;
      }
      return '';
    }
  );

  const isControlled = controlledValue !== undefined;
  const activeValue = isControlled ? controlledValue : uncontrolledValue;

  const handleValueChange = (value: TabValue) => {
    if (!isControlled) {
      setUncontrolledValue(value);
    }
    if (onChange) {
      // Create a synthetic event for the onChange handler
      const event = new MouseEvent('click') as any;
      onChange(value, event);
    }
  };

  const tabsRootClassNames: string[] = ['tabs-v2-root'];
  if (classNames) tabsRootClassNames.push(classNames);

  const tabsListClassNames: string[] = ['tabs-v2-list'];
  tabsListClassNames.push(`tabs-v2-list-${variant}`);
  tabsListClassNames.push(`tabs-v2-list-${size}`);
  if (scrollable) tabsListClassNames.push('tabs-v2-list-scrollable');
  if (underlined && variant !== TabVariant.pill) {
    tabsListClassNames.push('tabs-v2-list-underlined');
  }
  if (colorInvert && variant === TabVariant.pill) {
    tabsListClassNames.push('tabs-v2-list-inverted');
  }

  const getIconSize = (): number => {
    switch (size) {
      case TabSize.Large:
        return 24;
      case TabSize.Medium:
        return 20;
      case TabSize.Small:
        return 18;
      case TabSize.XSmall:
        return 16;
      default:
        return 20;
    }
  };

  const renderTabContent = (tab: TabV2Props) => {
    const {
      iconProps,
      label,
      badgeContent,
      loading,
      alignIcon: tabAlignIcon,
    } = tab;
    
    const effectiveAlignIcon = tabAlignIcon !== undefined ? tabAlignIcon : alignIcon;
    const iconSize = getIconSize();
    const hasIcon = iconProps && iconProps.name;
    const hasLabel = !!label;
    const hasBadge = badgeContent !== undefined && badgeContent !== null;

    const contentClassNames: string[] = ['tabs-v2-trigger-content'];
    if (hasIcon && effectiveAlignIcon === TabIconAlign.End) {
      contentClassNames.push('tabs-v2-trigger-content-icon-end');
    }

    return (
      <span className={contentClassNames.join(' ')}>
        {loading && (
          <SpinnerV2 
            size={size === TabSize.Large ? 'large' : size === TabSize.Small || size === TabSize.XSmall ? 'small' : 'medium'}
            className="tabs-v2-trigger-loader"
          />
        )}
        {!loading && hasIcon && (
          <IconV2
            {...iconProps}
            name={iconProps!.name!}
            size={iconSize}
            className={`tabs-v2-trigger-icon ${iconProps?.className || ''}`}
          />
        )}
        {hasLabel && <span className="tabs-v2-trigger-label">{label}</span>}
        {hasBadge && (
          <PillV2
            size="small"
            color="blue"
            className="tabs-v2-trigger-badge"
          >
            {badgeContent}
          </PillV2>
        )}
      </span>
    );
  };

  return (
    <RadixTabs.Root
      value={activeValue}
      onValueChange={handleValueChange}
      className={tabsRootClassNames.join(' ')}
      style={style}
      orientation="horizontal"
    >
      <RadixTabs.List
        className={tabsListClassNames.join(' ')}
        loop={enableArrowNav}
      >
        {Children.map(children, (child) => {
          if (!isValidElement<TabV2Props>(child)) return null;

          const {
            value,
            disabled,
            ariaLabel,
            ariaControls,
            classNames: tabClassNames,
            style: tabStyle,
            size: tabSize,
            colorInvert: tabColorInvert,
          } = child.props;

          const effectiveSize = tabSize || size;
          const effectiveColorInvert = tabColorInvert !== undefined ? tabColorInvert : colorInvert;

          const triggerClassNames: string[] = ['tabs-v2-trigger'];
          triggerClassNames.push(`tabs-v2-trigger-${variant}`);
          triggerClassNames.push(`tabs-v2-trigger-${effectiveSize}`);
          if (disabled) triggerClassNames.push('tabs-v2-trigger-disabled');
          if (effectiveColorInvert && variant === TabVariant.pill) {
            triggerClassNames.push('tabs-v2-trigger-inverted');
          }
          if (tabClassNames) triggerClassNames.push(tabClassNames);

          return (
            <RadixTabs.Trigger
              key={value}
              value={value}
              disabled={disabled}
              className={triggerClassNames.join(' ')}
              aria-label={ariaLabel}
              aria-controls={ariaControls}
              style={tabStyle}
            >
              {renderTabContent(child.props)}
            </RadixTabs.Trigger>
          );
        })}
      </RadixTabs.List>
    </RadixTabs.Root>
  );
};

TabsV2.displayName = 'TabsV2';
TabV2.displayName = 'TabV2';

