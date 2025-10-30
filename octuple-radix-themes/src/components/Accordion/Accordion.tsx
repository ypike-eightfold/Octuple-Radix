import React from 'react';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Badge } from '@radix-ui/themes';
import { Icon } from '../Icon';
import './Accordion.css';

export interface AccordionItemProps {
  /**
   * Unique value for the accordion item
   */
  value: string;
  /**
   * Header/trigger content
   */
  title: string;
  /**
   * Optional description text shown below the title
   */
  description?: string;
  /**
   * Optional badge/count to display (number or string)
   */
  badge?: string | number;
  /**
   * Optional action buttons (settings, delete, etc.)
   */
  actions?: React.ReactNode;
  /**
   * Body content
   */
  children: React.ReactNode;
  /**
   * Whether the item is disabled
   */
  disabled?: boolean;
}

export interface AccordionProps {
  /**
   * Accordion items
   */
  items?: AccordionItemProps[];
  /**
   * Type of accordion
   * @default 'single'
   */
  type?: 'single' | 'multiple';
  /**
   * Default open value(s)
   */
  defaultValue?: string | string[];
  /**
   * Whether the accordion is collapsible (for single type)
   * @default false
   */
  collapsible?: boolean;
  /**
   * Children (for manual item composition)
   */
  children?: React.ReactNode;
}

export const AccordionItem = React.forwardRef<
  HTMLDivElement,
  AccordionItemProps
>(({ value, title, description, badge, actions, children, disabled }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className="accordion-item"
    value={value}
    disabled={disabled}
  >
    <AccordionPrimitive.Header className="accordion-header">
      <AccordionPrimitive.Trigger className="accordion-trigger">
        <div className="accordion-trigger-content">
          <div className="accordion-title-section">
            <div className="accordion-title-row">
              <span className="accordion-title">{title}</span>
              {badge && (
                <Badge 
                  variant="soft" 
                  color="indigo"
                  aria-label={typeof badge === 'number' ? `Count: ${badge}` : `Status: ${badge}`}
                >
                  {badge}
                </Badge>
              )}
            </div>
            {description && (
              <span className="accordion-description">{description}</span>
            )}
          </div>
          <div className="accordion-controls">
            {actions && (
              <div className="accordion-actions" onClick={(e) => e.stopPropagation()}>
                {actions}
              </div>
            )}
            <Icon name="expand_more" size={20} className="accordion-chevron" />
          </div>
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
    <AccordionPrimitive.Content className="accordion-content">
      <div className="accordion-content-inner">{children}</div>
    </AccordionPrimitive.Content>
  </AccordionPrimitive.Item>
));

AccordionItem.displayName = 'AccordionItem';

export const Accordion = React.forwardRef<HTMLDivElement, AccordionProps>(
  ({ items, type = 'single', defaultValue, collapsible = false, children }, ref) => {
    const AccordionRoot = type === 'single'
      ? AccordionPrimitive.Root
      : AccordionPrimitive.Root;

    const rootProps = type === 'single'
      ? { type: 'single' as const, collapsible, defaultValue: defaultValue as string }
      : { type: 'multiple' as const, defaultValue: defaultValue as string[] };

    return (
      <AccordionRoot
        ref={ref}
        className="accordion-root"
        {...rootProps}
      >
        {items
          ? items.map((item) => (
              <AccordionItem key={item.value} {...item} />
            ))
          : children}
      </AccordionRoot>
    );
  }
);

Accordion.displayName = 'Accordion';

