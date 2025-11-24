import React, { useState, useEffect } from 'react';
import * as Popover from '@radix-ui/react-popover';
import { DropdownV2Props, DropdownV2Ref } from './DropdownV2.types';
import './DropdownV2.css';

// Map Octuple placement to Radix side + align
const mapPlacementToRadix = (placement: string) => {
  const map: Record<string, { side: 'top' | 'right' | 'bottom' | 'left'; align?: 'start' | 'center' | 'end' }> = {
    'top': { side: 'top', align: 'center' },
    'top-start': { side: 'top', align: 'start' },
    'top-end': { side: 'top', align: 'end' },
    'right': { side: 'right', align: 'center' },
    'right-start': { side: 'right', align: 'start' },
    'right-end': { side: 'right', align: 'end' },
    'bottom': { side: 'bottom', align: 'center' },
    'bottom-start': { side: 'bottom', align: 'start' },
    'bottom-end': { side: 'bottom', align: 'end' },
    'left': { side: 'left', align: 'center' },
    'left-start': { side: 'left', align: 'start' },
    'left-end': { side: 'left', align: 'end' },
  };
  return map[placement] || { side: 'bottom', align: 'start' };
};

/**
 * DropdownV2 - A generic dropdown component for floating overlays
 * 
 * Built with Radix UI Popover for accessibility and positioning.
 * Can contain any content (menus, forms, custom components).
 */
export const DropdownV2 = React.forwardRef<DropdownV2Ref, DropdownV2Props>(
  (
    {
      children,
      overlay,
      trigger = 'click',
      placement = 'bottom-start',
      closeOnDropdownClick = true,
      closeOnReferenceClick = true,
      closeOnOutsideClick = true,
      disabled = false,
      open: controlledOpen,
      onOpenChange,
      offset = 4,
      width,
      height,
      dropdownClassNames,
      dropdownStyle,
      classNames,
      style,
      portal = true,
      role = 'menu',
      onTriggerClick,
      onTriggerKeyDown,
      onClickOutside,
    },
    _ref
  ) => {
    const [internalOpen, setInternalOpen] = useState(false);
    const isControlled = controlledOpen !== undefined;
    const open = isControlled ? controlledOpen : internalOpen;

    const setOpen = (newOpen: boolean) => {
      if (!isControlled) {
        setInternalOpen(newOpen);
      }
      onOpenChange?.(newOpen);
    };

    // Handle hover trigger
    const [hoverTimeout, setHoverTimeout] = useState<ReturnType<typeof setTimeout> | null>(null);

    const handleTriggerMouseEnter = () => {
      if (trigger === 'hover' && !disabled) {
        const timeout = setTimeout(() => setOpen(true), 100);
        setHoverTimeout(timeout);
      }
    };

    const handleTriggerMouseLeave = () => {
      if (trigger === 'hover' && !disabled) {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }
        const timeout = setTimeout(() => setOpen(false), 200);
        setHoverTimeout(timeout);
      }
    };

    const handleContentMouseEnter = () => {
      if (trigger === 'hover' && hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
      }
    };

    const handleContentMouseLeave = () => {
      if (trigger === 'hover') {
        const timeout = setTimeout(() => setOpen(false), 200);
        setHoverTimeout(timeout);
      }
    };

    // Clean up timeout on unmount
    useEffect(() => {
      return () => {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }
      };
    }, [hoverTimeout]);

    // Handle trigger click
    const handleTriggerClick = (e: React.MouseEvent) => {
      if (disabled) return;
      
      onTriggerClick?.(e);
      
      if (trigger === 'click') {
        if (open && closeOnReferenceClick) {
          setOpen(false);
        } else if (!open) {
          setOpen(true);
        }
      }
    };

    // Handle trigger keydown
    const handleTriggerKeyDown = (e: React.KeyboardEvent) => {
      if (disabled) return;
      
      onTriggerKeyDown?.(e);
      
      if (trigger === 'click') {
        if ((e.key === 'Enter' || e.key === ' ') && !open) {
          e.preventDefault();
          setOpen(true);
        } else if (e.key === 'Escape' && open) {
          setOpen(false);
        }
      }
    };

    // Handle content click
    const handleContentClick = () => {
      if (closeOnDropdownClick) {
        setOpen(false);
      }
    };

    // Map placement to Radix props
    const { side, align } = mapPlacementToRadix(placement);

    // Build dropdown styles
    const contentStyles: React.CSSProperties = {
      ...dropdownStyle,
      ...(width && { width: typeof width === 'number' ? `${width}px` : width }),
      ...(height && { height: typeof height === 'number' ? `${height}px` : height }),
    };

    const contentClasses = [
      'dropdown-v2-content',
      dropdownClassNames,
    ]
      .filter(Boolean)
      .join(' ');

    const triggerElement = React.cloneElement(children, {
      onClick: (e: React.MouseEvent) => {
        children.props.onClick?.(e);
        handleTriggerClick(e);
      },
      onKeyDown: (e: React.KeyboardEvent) => {
        children.props.onKeyDown?.(e);
        handleTriggerKeyDown(e);
      },
      ...(trigger === 'hover' && {
        onMouseEnter: () => {
          children.props.onMouseEnter?.();
          handleTriggerMouseEnter();
        },
        onMouseLeave: () => {
          children.props.onMouseLeave?.();
          handleTriggerMouseLeave();
        },
      }),
      'aria-haspopup': true,
      'aria-expanded': open,
      disabled,
    });

    const ContentWrapper = portal ? Popover.Portal : React.Fragment;

    return (
      <div className={classNames} style={style}>
        <Popover.Root open={open} onOpenChange={setOpen}>
          <Popover.Trigger asChild>
            {triggerElement}
          </Popover.Trigger>

          <ContentWrapper>
            <Popover.Content
              side={side}
              align={align}
              sideOffset={offset}
              className={contentClasses}
              style={contentStyles}
              role={role}
              onClick={handleContentClick}
              onEscapeKeyDown={() => setOpen(false)}
              onInteractOutside={(e) => {
                if (closeOnOutsideClick) {
                  onClickOutside?.(e as any);
                }
              }}
              {...(trigger === 'hover' && {
                onMouseEnter: handleContentMouseEnter,
                onMouseLeave: handleContentMouseLeave,
              })}
            >
              {overlay}
            </Popover.Content>
          </ContentWrapper>
        </Popover.Root>
      </div>
    );
  }
);

DropdownV2.displayName = 'DropdownV2';

