import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import './NavTabV2.css';

export interface NavTabV2Item {
  /** Unique identifier for the tab */
  id: string;
  /** Label text to display */
  label: string;
  /** Optional content to render when tab is active */
  content?: React.ReactNode;
  /** Whether the tab is disabled */
  disabled?: boolean;
}

export type NavTabV2Size = 'large' | 'medium' | 'small';

export interface NavTabV2Props {
  /** Array of tab items */
  tabs: NavTabV2Item[];
  /** Currently active tab ID (controlled mode) */
  value?: string;
  /** Default active tab ID (uncontrolled mode) */
  defaultValue?: string;
  /** Callback when tab changes */
  onValueChange?: (value: string) => void;
  /** Size variant */
  size?: NavTabV2Size;
  /** Additional CSS classes */
  className?: string;
  /** Whether to render tab content */
  renderContent?: boolean;
}

export const NavTabV2 = React.forwardRef<HTMLDivElement, NavTabV2Props>(
  (
    { 
      tabs,
      value,
      defaultValue,
      onValueChange,
      size = 'large',
      className = '',
      renderContent = true,
      ...props
    },
    ref
  ) => {
    return (
      <Tabs.Root
        ref={ref}
        className={`navtab-root ${className}`}
        value={value}
        defaultValue={defaultValue || tabs[0]?.id}
        onValueChange={onValueChange}
        {...props}
      >
        <Tabs.List className={`navtab-list navtab-list--${size}`} aria-label="Navigation tabs">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.id}
              value={tab.id}
              disabled={tab.disabled}
              className="navtab-trigger"
            >
              <span className="navtab-trigger__label">{tab.label}</span>
              <div className="navtab-trigger__indicator" aria-hidden="true" />
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        
        {renderContent && tabs.map((tab) => (
          tab.content && (
            <Tabs.Content
              key={tab.id}
              value={tab.id}
              className="navtab-content"
            >
              {tab.content}
            </Tabs.Content>
          )
        ))}
      </Tabs.Root>
    );
  }
);

NavTabV2.displayName = 'NavTabV2';

