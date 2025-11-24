import { default as React } from '../../../node_modules/react';
export interface ToggleProps {
    /**
     * The controlled pressed state of the toggle
     */
    pressed?: boolean;
    /**
     * Default pressed state (uncontrolled)
     */
    defaultPressed?: boolean;
    /**
     * Callback when pressed state changes
     */
    onPressedChange?: (pressed: boolean) => void;
    /**
     * Whether the toggle is disabled
     */
    disabled?: boolean;
    /**
     * Size of the toggle
     * @default '2'
     */
    size?: '1' | '2' | '3';
    /**
     * Children content
     */
    children: React.ReactNode;
}
export declare const Toggle: React.ForwardRefExoticComponent<ToggleProps & React.RefAttributes<HTMLButtonElement>>;
