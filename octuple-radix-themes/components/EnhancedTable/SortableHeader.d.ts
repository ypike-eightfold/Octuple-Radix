import { ColumnDef, SortConfig } from './types';
export interface SortableHeaderProps<T = any> {
    column: ColumnDef<T>;
    sortConfig?: SortConfig;
    onSort: (columnKey: string) => void;
}
/**
 * Sortable Header Component
 *
 * Renders a table column header with optional sorting functionality.
 * Includes visual indicators for sort direction and interactive hover states.
 */
export declare function SortableHeader<T = any>({ column, sortConfig, onSort, }: SortableHeaderProps<T>): import("react/jsx-runtime").JSX.Element;
