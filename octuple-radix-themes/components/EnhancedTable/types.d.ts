import { default as React } from '../../../node_modules/react';
/**
 * Filter option for column filtering
 */
export interface FilterOption {
    text: string;
    value: string | number;
}
/**
 * Column definition for enhanced table
 */
export interface ColumnDef<T = any> {
    /** Unique key for the column */
    key: string;
    /** Column header title */
    title: string;
    /** Data field name to extract value from record */
    dataIndex: string;
    /** Column width (number in px or string like '20%') */
    width?: number | string;
    /** Text alignment in column */
    align?: 'left' | 'center' | 'right';
    /** Whether this column is sortable */
    sortable?: boolean;
    /** Sort function or boolean for default sorting */
    sorter?: boolean | ((a: T, b: T) => number);
    /** Custom render function for cell content */
    render?: (value: any, record: T, index: number) => React.ReactNode;
    /** Filter options for this column */
    filters?: FilterOption[];
    /** Whether to show ellipsis for long text */
    ellipsis?: boolean;
    /** Fixed column position */
    fixed?: 'left' | 'right';
    /** Whether column is resizable */
    resizable?: boolean;
    /** CSS class name for the column */
    className?: string;
}
/**
 * Sort configuration
 */
export interface SortConfig {
    key: string;
    direction: 'asc' | 'desc';
}
/**
 * Row selection configuration
 */
export interface RowSelection<T = any> {
    /** Selection type */
    type?: 'checkbox' | 'radio';
    /** Currently selected row keys */
    selectedRowKeys?: string[];
    /** Selection change callback */
    onChange?: (selectedRowKeys: string[], selectedRows: T[]) => void;
    /** Function to get row key from record */
    getCheckboxProps?: (record: T) => {
        disabled?: boolean;
    };
    /** Whether to show select all checkbox in header */
    showSelectAll?: boolean;
}
/**
 * Pagination configuration
 */
export interface PaginationConfig {
    /** Current page number */
    current?: number;
    /** Number of items per page */
    pageSize?: number;
    /** Total number of items */
    total?: number;
    /** Show size changer */
    showSizeChanger?: boolean;
    /** Show quick jumper */
    showQuickJumper?: boolean;
    /** Show total items */
    showTotal?: boolean | ((total: number, range: [number, number]) => React.ReactNode);
    /** Page change callback */
    onChange?: (page: number, pageSize: number) => void;
    /** Page size change callback */
    onShowSizeChange?: (current: number, size: number) => void;
}
/**
 * Expandable row configuration
 */
export interface ExpandableConfig<T = any> {
    /** Function to render expanded content */
    expandedRowRender?: (record: T, index: number) => React.ReactNode;
    /** Function to determine if row is expandable */
    rowExpandable?: (record: T) => boolean;
    /** Currently expanded row keys */
    expandedRowKeys?: string[];
    /** Expand change callback */
    onExpand?: (expanded: boolean, record: T) => void;
    /** Default expanded rows */
    defaultExpandedRowKeys?: string[];
}
/**
 * Enhanced Table Props
 */
export interface EnhancedTableProps<T = any> {
    /** Column definitions */
    columns: ColumnDef<T>[];
    /** Data source array */
    dataSource: T[];
    /** Loading state */
    loading?: boolean;
    /** Row key extractor */
    rowKey?: string | ((record: T) => string);
    /** Row selection configuration */
    rowSelection?: RowSelection<T>;
    /** Default sort configuration */
    defaultSort?: SortConfig;
    /** Sort change callback */
    onSort?: (key: string, direction: 'asc' | 'desc') => void;
    /** Pagination configuration */
    pagination?: boolean | PaginationConfig;
    /** Expandable row configuration */
    expandable?: ExpandableConfig<T>;
    /** Striped row styling */
    striped?: boolean;
    /** Bordered table styling */
    bordered?: boolean;
    /** Hover effects on rows */
    hover?: boolean;
    /** Global search functionality */
    searchable?: boolean;
    /** Search input placeholder */
    searchPlaceholder?: string;
    /** Search value (controlled) */
    searchValue?: string;
    /** Search change callback */
    onSearch?: (value: string) => void;
    /** Custom empty state message */
    emptyMessage?: string | React.ReactNode;
    /** Table change callback (pagination, filters, sorter) */
    onChange?: (pagination: any, filters: any, sorter: any, extra: any) => void;
    /** Row click callback */
    onRow?: (record: T, index: number) => {
        onClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
        onDoubleClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
        onMouseEnter?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
        onMouseLeave?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
    };
    /** Table size variant */
    size?: '1' | '2' | '3';
    /** Table style variant */
    variant?: 'surface' | 'ghost';
    /** Additional CSS class name */
    className?: string;
    /** Inline styles */
    style?: React.CSSProperties;
}
/**
 * Internal table state for managing data, sorting, filtering, etc.
 */
export interface TableState<T = any> {
    data: T[];
    loading: boolean;
    sortConfig?: SortConfig;
    selectedRowKeys: string[];
    expandedRowKeys: string[];
    searchValue: string;
    pagination: {
        current: number;
        pageSize: number;
        total: number;
    };
}
