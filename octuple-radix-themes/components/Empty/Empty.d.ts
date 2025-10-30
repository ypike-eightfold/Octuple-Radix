import { default as React } from '../../../node_modules/react';
export interface EmptyProps {
    /**
     * Icon to display
     * @default 'inbox'
     */
    icon?: string;
    /**
     * Title text
     */
    title: string;
    /**
     * Description text
     */
    description?: string;
    /**
     * Action button label
     */
    actionLabel?: string;
    /**
     * Action button callback
     */
    onAction?: () => void;
    /**
     * Size variant
     * @default 'medium'
     */
    size?: 'small' | 'medium' | 'large';
}
export declare const Empty: React.FC<EmptyProps>;
