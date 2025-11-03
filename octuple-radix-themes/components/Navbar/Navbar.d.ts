import { default as React } from '../../../node_modules/react';
export interface NavbarLink {
    /**
     * Link label
     */
    label: string;
    /**
     * Link href
     */
    href: string;
    /**
     * Optional icon
     */
    icon?: string;
}
export interface NavbarProps {
    /**
     * Logo/brand element
     */
    logo?: React.ReactNode;
    /**
     * Navigation links
     */
    links?: NavbarLink[];
    /**
     * User info (shows avatar if provided)
     */
    user?: {
        name: string;
        email?: string;
        avatar?: string;
    };
    /**
     * Callback when logout is clicked
     */
    onLogout?: () => void;
    /**
     * Additional action buttons
     */
    actions?: React.ReactNode;
}
export declare const Navbar: React.FC<NavbarProps>;
