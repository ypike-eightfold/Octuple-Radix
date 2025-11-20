import React from 'react';
import * as Tooltip from '@radix-ui/react-tooltip';
import './TooltipV2.css';

export type TooltipV2Variant = 'dark' | 'light';

export interface TooltipV2Props {
  /** The content to display in the tooltip */
  content: React.ReactNode;
  
  /** The trigger element */
  children: React.ReactNode;
  
  /** Visual variant of the tooltip */
  variant?: TooltipV2Variant;
  
  /** The preferred side of the trigger to render against */
  side?: 'top' | 'right' | 'bottom' | 'left';
  
  /** The preferred alignment against the trigger */
  align?: 'start' | 'center' | 'end';
  
  /** The distance in pixels from the trigger */
  sideOffset?: number;
  
  /** The duration from when the pointer enters the trigger until the tooltip opens */
  delayDuration?: number;
  
  /** How long the user has to enter the content before the tooltip closes */
  skipDelayDuration?: number;
  
  /** Whether the tooltip is open by default (uncontrolled) */
  defaultOpen?: boolean;
  
  /** Whether the tooltip is open (controlled) */
  open?: boolean;
  
  /** Callback when the open state changes (controlled) */
  onOpenChange?: (open: boolean) => void;
  
  /** Additional CSS class for the content */
  className?: string;
  
  /** Whether to disable the hover card for this tooltip */
  disableHoverableContent?: boolean;
}

export const TooltipV2: React.FC<TooltipV2Props> = ({
  content,
  children,
  variant = 'dark',
  side = 'top',
  align = 'center',
  sideOffset = 4,
  delayDuration = 200,
  skipDelayDuration = 300,
  defaultOpen,
  open,
  onOpenChange,
  className = '',
  disableHoverableContent = false,
}) => {
  const contentVariantClass = `tooltipv2-content--${variant}`;
  const arrowVariantClass = `tooltipv2-arrow--${variant}`;
  
  return (
    <Tooltip.Provider skipDelayDuration={skipDelayDuration}>
      <Tooltip.Root
        delayDuration={delayDuration}
        defaultOpen={defaultOpen}
        open={open}
        onOpenChange={onOpenChange}
      >
        <Tooltip.Trigger asChild>
          {children}
        </Tooltip.Trigger>
        
        <Tooltip.Portal>
          <Tooltip.Content
            className={`tooltipv2-content ${contentVariantClass} ${className}`}
            side={side}
            align={align}
            sideOffset={sideOffset}
            disableHoverableContent={disableHoverableContent}
          >
            {content}
            <Tooltip.Arrow className={`tooltipv2-arrow ${arrowVariantClass}`} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};

TooltipV2.displayName = 'TooltipV2';

