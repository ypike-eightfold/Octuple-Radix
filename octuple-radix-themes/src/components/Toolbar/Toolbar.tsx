import React from 'react';
import * as ToolbarPrimitive from '@radix-ui/react-toolbar';
import './Toolbar.css';

export interface ToolbarProps {
  children: React.ReactNode;
  /**
   * Orientation of the toolbar
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Whether to loop keyboard navigation
   * @default true
   */
  loop?: boolean;
}

export const Toolbar = React.forwardRef<HTMLDivElement, ToolbarProps>(
  ({ children, orientation = 'horizontal', loop = true, ...props }, ref) => {
    return (
      <ToolbarPrimitive.Root
        ref={ref}
        className={`toolbar-root toolbar-${orientation}`}
        orientation={orientation}
        loop={loop}
        {...props}
      >
        {children}
      </ToolbarPrimitive.Root>
    );
  }
);

Toolbar.displayName = 'Toolbar';

export const ToolbarButton = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Button>
>((props, ref) => (
  <ToolbarPrimitive.Button ref={ref} className="toolbar-button" {...props} />
));

ToolbarButton.displayName = 'ToolbarButton';

export const ToolbarSeparator = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Separator>
>((props, ref) => (
  <ToolbarPrimitive.Separator ref={ref} className="toolbar-separator" {...props} />
));

ToolbarSeparator.displayName = 'ToolbarSeparator';

export const ToolbarLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.Link>
>((props, ref) => (
  <ToolbarPrimitive.Link ref={ref} className="toolbar-link" {...props} />
));

ToolbarLink.displayName = 'ToolbarLink';

export const ToolbarToggleGroup = ToolbarPrimitive.ToggleGroup;
export const ToolbarToggleItem = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof ToolbarPrimitive.ToggleItem>
>((props, ref) => (
  <ToolbarPrimitive.ToggleItem ref={ref} className="toolbar-toggle-item" {...props} />
));

ToolbarToggleItem.displayName = 'ToolbarToggleItem';

