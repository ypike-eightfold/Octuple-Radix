import { default as React } from '../../../node_modules/react';
export interface PaginationProps {
    /**
     * Current page (1-indexed)
     */
    currentPage: number;
    /**
     * Total number of pages
     */
    totalPages: number;
    /**
     * Callback when page changes
     */
    onPageChange: (page: number) => void;
    /**
     * Number of page buttons to show
     * @default 7
     */
    siblingCount?: number;
    /**
     * Size of buttons
     * @default '2'
     */
    size?: '1' | '2' | '3';
    /**
     * Show first/last buttons
     * @default true
     */
    showFirstLast?: boolean;
    /**
     * Show quick jumper input to navigate to specific page
     * @default false
     */
    showQuickJumper?: boolean;
}
export declare const Pagination: React.ForwardRefExoticComponent<PaginationProps & React.RefAttributes<HTMLDivElement>>;
