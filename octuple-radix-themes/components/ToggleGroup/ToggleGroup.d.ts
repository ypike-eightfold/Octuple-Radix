import { default as React } from '../../../node_modules/react';
export interface ToggleGroupProps {
    /**
     * Type of toggle group
     * @default 'single'
     */
    type?: 'single' | 'multiple';
    /**
     * The controlled value(s)
     */
    value?: string | string[];
    /**
     * Default value(s) for uncontrolled
     */
    defaultValue?: string | string[];
    /**
     * Callback when value changes
     */
    onValueChange?: (value: string | string[]) => void;
    /**
     * Whether the group is disabled
     */
    disabled?: boolean;
    /**
     * Size of toggles
     * @default '2'
     */
    size?: '1' | '2' | '3';
    /**
     * Children (ToggleGroupItem components)
     */
    children: React.ReactNode;
}
export interface ToggleGroupItemProps {
    /**
     * Value for this toggle
     */
    value: string;
    /**
     * Whether disabled
     */
    disabled?: boolean;
    /**
     * Aria label
     */
    'aria-label'?: string;
    /**
     * Children content
     */
    children: React.ReactNode;
}
export declare const ToggleGroupItem: React.ForwardRefExoticComponent<ToggleGroupItemProps & React.RefAttributes<HTMLButtonElement>>;
export declare const ToggleGroup: React.ForwardRefExoticComponent<ToggleGroupProps & React.RefAttributes<HTMLDivElement>>;
