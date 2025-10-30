import { default as React } from '../../../node_modules/react';
export interface BreadcrumbItem {
    /**
     * Label for the breadcrumb item
     */
    label: string;
    /**
     * URL for the breadcrumb item
     */
    href?: string;
    /**
     * Click handler
     */
    onClick?: () => void;
}
export interface BreadcrumbProps {
    /**
     * Array of breadcrumb items
     */
    items: BreadcrumbItem[];
    /**
     * Separator icon name
     * @default 'chevron_right'
     */
    separator?: string;
    /**
     * Size of text and icons
     * @default '2'
     */
    size?: '1' | '2' | '3';
}
export declare const Breadcrumb: React.ForwardRefExoticComponent<BreadcrumbProps & React.RefAttributes<HTMLDivElement>>;
