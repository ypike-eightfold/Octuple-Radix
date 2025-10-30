import { default as React } from '../../../node_modules/react';
export interface TimelineItemData {
    /**
     * Title of the event
     */
    title: string;
    /**
     * Optional description
     */
    description?: string;
    /**
     * Timestamp
     */
    timestamp: string;
    /**
     * Optional icon name
     */
    icon?: string;
    /**
     * Status/color variant
     * @default 'default'
     */
    variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
}
export interface TimelineProps {
    /**
     * Array of timeline items
     */
    items: TimelineItemData[];
    /**
     * Orientation of the timeline
     * @default 'vertical'
     */
    orientation?: 'vertical' | 'horizontal';
}
export declare const Timeline: React.FC<TimelineProps>;
export declare const TimelineItem: React.FC<TimelineItemData>;
