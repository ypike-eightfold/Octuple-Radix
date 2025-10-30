import { default as React } from '../../../node_modules/react';
export interface StepItem {
    /**
     * Label for the step
     */
    label: string;
    /**
     * Optional description
     */
    description?: string;
    /**
     * Optional icon name
     */
    icon?: string;
}
export interface StepperProps {
    /**
     * Array of steps
     */
    steps: StepItem[];
    /**
     * Current active step (0-indexed)
     */
    currentStep: number;
    /**
     * Orientation
     * @default 'horizontal'
     */
    orientation?: 'horizontal' | 'vertical';
    /**
     * Whether steps are clickable
     * @default false
     */
    clickable?: boolean;
    /**
     * Callback when step is clicked (if clickable)
     */
    onStepClick?: (stepIndex: number) => void;
}
export declare const Stepper: React.FC<StepperProps>;
