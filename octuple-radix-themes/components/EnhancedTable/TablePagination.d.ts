import { PaginationConfig } from './types';
export interface TablePaginationProps {
    current: number;
    pageSize: number;
    total: number;
    onChange: (page: number, pageSize: number) => void;
    config?: PaginationConfig;
}
/**
 * Table Pagination Component
 *
 * Wraps our existing Pagination component for use within Enhanced Table.
 * Handles page changes and integrates with table data management.
 */
export declare function TablePagination({ current, pageSize, total, onChange, config, }: TablePaginationProps): import("react/jsx-runtime").JSX.Element;
