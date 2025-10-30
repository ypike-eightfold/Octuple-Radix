import { default as React } from '../../../node_modules/react';
import * as NavigationMenuPrimitive from '@radix-ui/react-navigation-menu';
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
export declare const NavigationMenu: React.ForwardRefExoticComponent<NavigationMenuProps & React.RefAttributes<HTMLElement>>;
export declare const NavigationMenuItem: React.ForwardRefExoticComponent<NavigationMenuPrimitive.NavigationMenuItemProps & React.RefAttributes<HTMLLIElement>>;
export declare const NavigationMenuTrigger: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuTriggerProps & React.RefAttributes<HTMLButtonElement>, "ref"> & React.RefAttributes<HTMLButtonElement>>;
export declare const NavigationMenuContent: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuContentProps & React.RefAttributes<HTMLDivElement>, "ref"> & React.RefAttributes<HTMLDivElement>>;
export declare const NavigationMenuLink: React.ForwardRefExoticComponent<Omit<NavigationMenuPrimitive.NavigationMenuLinkProps & React.RefAttributes<HTMLAnchorElement>, "ref"> & React.RefAttributes<HTMLAnchorElement>>;
