import { default as React } from '../../../node_modules/react';
import * as ToastPrimitive from '@radix-ui/react-toast';
export interface ToastProps {
    /**
     * Toast title
     */
    title?: string;
    /**
     * Toast description/message
     */
    description: string;
    /**
     * Toast variant
     */
    variant?: 'success' | 'error' | 'warning' | 'info' | 'default';
    /**
     * Duration before auto-dismiss (ms)
     * @default 5000
     */
    duration?: number;
    /**
     * Action button text
     */
    action?: {
        label: string;
        onClick: () => void;
    };
    /**
     * Callback when toast is closed
     */
    onClose?: () => void;
}
export declare const Toast: React.ForwardRefExoticComponent<ToastProps & {
    open: boolean;
    onOpenChange: (open: boolean) => void;
} & React.RefAttributes<HTMLLIElement>>;
export declare const ToastViewport: React.ForwardRefExoticComponent<ToastPrimitive.ToastViewportProps & React.RefAttributes<HTMLOListElement>>;
export declare const ToastProvider: React.FC<ToastPrimitive.ToastProviderProps>;
