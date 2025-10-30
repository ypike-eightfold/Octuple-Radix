import { EnhancedTableProps, ColumnDef } from './types';
/**
 * Enhanced Table Component
 *
 * A powerful table component that wraps Radix UI Table with additional features:
 * - Column-based configuration
 * - Sorting with visual indicators
 * - Row selection (checkbox/radio)
 * - Pagination integration
 * - Search and filtering
 * - Loading and empty states
 * - Expandable rows
 * - Visual enhancements (striped, hover, bordered)
 *
 * Maintains full backward compatibility with existing Radix Table usage.
 */
export declare function EnhancedTable<T = any>({ columns, dataSource, loading, rowKey, rowSelection, defaultSort, onSort, pagination, expandable, striped, bordered, hover, searchable, searchPlaceholder, searchValue, onSearch, emptyMessage, onChange, onRow, size, variant, className, style, }: EnhancedTableProps<T>): import("react/jsx-runtime").JSX.Element;
export type { EnhancedTableProps, ColumnDef };
