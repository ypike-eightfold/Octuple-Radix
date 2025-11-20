import React from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import './PageTabV2.css';

export interface PageTabV2Item {
  /** Unique identifier for the tab */
  id: string;
  /** Label text to display */
  label: string;
  /** Optional content to render when tab is active */
  content?: React.ReactNode;
  /** Whether the tab is disabled */
  disabled?: boolean;
}

export type PageTabV2Size = 'large' | 'medium' | 'small';

export interface PageTabV2Props {
  /** Array of tab items */
  tabs: PageTabV2Item[];
  /** Currently active tab ID (controlled mode) */
  value?: string;
  /** Default active tab ID (uncontrolled mode) */
  defaultValue?: string;
  /** Callback when tab changes */
  onValueChange?: (value: string) => void;
  /** Size variant */
  size?: PageTabV2Size;
  /** Additional CSS classes */
  className?: string;
  /** Whether to render tab content */
  renderContent?: boolean;
}

export const PageTabV2 = React.forwardRef<HTMLDivElement, PageTabV2Props>(
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
        className={`pagetab-root ${className}`}
        value={value}
        defaultValue={defaultValue || tabs[0]?.id}
        onValueChange={onValueChange}
        {...props}
      >
        <Tabs.List className={`pagetab-list pagetab-list--${size}`} aria-label="Page tabs">
          {tabs.map((tab) => (
            <Tabs.Trigger
              key={tab.id}
              value={tab.id}
              disabled={tab.disabled}
              className="pagetab-trigger"
            >
              <span className="pagetab-trigger__label">{tab.label}</span>
              <div className="pagetab-trigger__indicator" aria-hidden="true" />
            </Tabs.Trigger>
          ))}
        </Tabs.List>
        
        {renderContent && tabs.map((tab) => (
          tab.content && (
            <Tabs.Content
              key={tab.id}
              value={tab.id}
              className="pagetab-content"
            >
              {tab.content}
            </Tabs.Content>
          )
        ))}
      </Tabs.Root>
    );
  }
);

PageTabV2.displayName = 'PageTabV2';

