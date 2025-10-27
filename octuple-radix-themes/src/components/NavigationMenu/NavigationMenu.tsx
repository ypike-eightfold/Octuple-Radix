import React from 'react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
import './NavigationMenu.css';

export interface NavigationMenuProps {
  children: React.ReactNode;
  /**
   * Default value (uncontrolled)
   */
  defaultValue?: string;
  /**
   * Controlled value
   */
  value?: string;
  /**
   * Callback when value changes
   */
  onValueChange?: (value: string) => void;
}

export const NavigationMenu = React.forwardRef<HTMLElement, NavigationMenuProps>(
  ({ children, ...props }, ref) => {
    return (
      <NavigationMenuPrimitive.Root ref={ref} className="navigation-menu-root" {...props}>
        <NavigationMenuPrimitive.List className="navigation-menu-list">
          {children}
        </NavigationMenuPrimitive.List>
        <NavigationMenuPrimitive.Viewport className="navigation-menu-viewport" />
      </NavigationMenuPrimitive.Root>
    );
  }
);

NavigationMenu.displayName = 'NavigationMenu';

export const NavigationMenuItem = NavigationMenuPrimitive.Item;

export const NavigationMenuTrigger = React.forwardRef<
  HTMLButtonElement,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Trigger>
>((props, ref) => (
  <NavigationMenuPrimitive.Trigger ref={ref} className="navigation-menu-trigger" {...props} />
));

NavigationMenuTrigger.displayName = 'NavigationMenuTrigger';

export const NavigationMenuContent = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Content>
>((props, ref) => (
  <NavigationMenuPrimitive.Content ref={ref} className="navigation-menu-content" {...props} />
));

NavigationMenuContent.displayName = 'NavigationMenuContent';

export const NavigationMenuLink = React.forwardRef<
  HTMLAnchorElement,
  React.ComponentPropsWithoutRef<typeof NavigationMenuPrimitive.Link>
>((props, ref) => (
  <NavigationMenuPrimitive.Link ref={ref} className="navigation-menu-link" {...props} />
));

NavigationMenuLink.displayName = 'NavigationMenuLink';

