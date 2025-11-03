import { default as React } from '../../../node_modules/react';
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
export declare const AccordionItem: React.ForwardRefExoticComponent<AccordionItemProps & React.RefAttributes<HTMLDivElement>>;
export declare const Accordion: React.ForwardRefExoticComponent<AccordionProps & React.RefAttributes<HTMLDivElement>>;
