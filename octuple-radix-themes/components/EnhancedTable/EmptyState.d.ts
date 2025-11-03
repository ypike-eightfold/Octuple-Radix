import { default as React } from '../../../node_modules/react';
export interface EmptyStateProps {
    message?: string | React.ReactNode;
    icon?: string;
    description?: string;
}
/**
 * Empty State Component
 *
 * Displays a message when the table has no data to show.
 * Includes optional icon and description for better UX.
 */
export declare function EmptyState({ message, icon, description }: EmptyStateProps): import("react/jsx-runtime").JSX.Element;
