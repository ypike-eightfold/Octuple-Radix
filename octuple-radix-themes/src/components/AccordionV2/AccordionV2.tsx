import React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { Icon } from '../Icon';
import './AccordionV2.css';

export interface AccordionV2Item {
  /** Unique value for the accordion item */
  value: string;
  /** Header text */
  header: string;
  /** Content to display when expanded */
  content: React.ReactNode;
}

export interface AccordionV2Props {
  /** Array of accordion items */
  items: AccordionV2Item[];
  /** Type of accordion - single allows one item open at a time, multiple allows multiple */
  type?: 'single' | 'multiple';
  /** Default value(s) for controlled component */
  defaultValue?: string | string[];
  /** Controlled value */
  value?: string | string[];
  /** Callback when value changes */
  onValueChange?: (value: string | string[]) => void;
  /** Additional CSS class */
  className?: string;
  /** Whether items can be collapsed (only for type="single") */
  collapsible?: boolean;
}

/**
 * AccordionV2 Component
 * 
 * An accordion component with collapse/expand functionality.
 * Built with Radix UI Accordion primitive.
 * 
 * @example
 * ```tsx
 * <AccordionV2 
 *   items={[
 *     { value: '1', header: 'Accordion header', content: 'Content here' }
 *   ]} 
 * />
 * ```
 */
export const AccordionV2: React.FC<AccordionV2Props> = ({
  items,
  type = 'single',
  defaultValue,
  value,
  onValueChange,
  className = '',
  collapsible = true,
}) => {
  const rootProps = type === 'single' 
    ? {
        type: 'single' as const,
        collapsible,
        defaultValue: defaultValue as string | undefined,
        value: value as string | undefined,
        onValueChange: onValueChange as ((value: string) => void) | undefined,
      }
    : {
        type: 'multiple' as const,
        defaultValue: defaultValue as string[] | undefined,
        value: value as string[] | undefined,
        onValueChange: onValueChange as ((value: string[]) => void) | undefined,
      };

  return (
    <Accordion.Root
      className={`accordionv2-root ${className}`}
      {...rootProps}
    >
      {items.map((item) => (
        <Accordion.Item
          key={item.value}
          value={item.value}
          className="accordionv2-item"
        >
          <Accordion.Header className="accordionv2-header">
            <Accordion.Trigger className="accordionv2-trigger">
              <span className="accordionv2-header-text">{item.header}</span>
              <Icon name="expand_more" className="accordionv2-chevron" />
            </Accordion.Trigger>
          </Accordion.Header>
          <Accordion.Content className="accordionv2-content">
            <div className="accordionv2-content-inner">
              {item.content}
            </div>
          </Accordion.Content>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

AccordionV2.displayName = 'AccordionV2';

export default AccordionV2;

