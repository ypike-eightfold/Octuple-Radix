import React from 'react';
import * as CollapsiblePrimitive from '@radix-ui/react-collapsible';
import './Collapsible.css';

export interface CollapsibleProps {
  children: React.ReactNode;
  /**
   * Default open state (uncontrolled)
   */
  defaultOpen?: boolean;
  /**
   * Controlled open state
   */
  open?: boolean;
  /**
   * Callback when open state changes
   */
  onOpenChange?: (open: boolean) => void;
  /**
   * Whether the collapsible is disabled
   */
  disabled?: boolean;
}

export const Collapsible = React.forwardRef<HTMLDivElement, CollapsibleProps>(
  ({ children, ...props }, ref) => {
    return (
      <CollapsiblePrimitive.Root ref={ref} className="collapsible-root" {...props}>
        {children}
      </CollapsiblePrimitive.Root>
    );
  }
);

Collapsible.displayName = 'Collapsible';

export const CollapsibleTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>((props, ref) => (
  <CollapsiblePrimitive.Trigger ref={ref} className="collapsible-trigger" {...props} />
));

CollapsibleTrigger.displayName = 'CollapsibleTrigger';

export const CollapsibleContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>((props, ref) => (
  <CollapsiblePrimitive.Content ref={ref} className="collapsible-content" {...props} />
));

CollapsibleContent.displayName = 'CollapsibleContent';

