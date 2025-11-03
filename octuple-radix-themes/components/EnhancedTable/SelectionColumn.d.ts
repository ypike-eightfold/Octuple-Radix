export interface SelectionColumnProps<T = any> {
    type: 'checkbox' | 'radio';
    selectedRowKeys: string[];
    dataSource: T[];
    getRowKey: (record: T, index: number) => string;
    onChange: (selectedKeys: string[], selectedRows: T[]) => void;
    isHeader?: boolean;
    showSelectAll?: boolean;
    record?: T;
    index?: number;
    checkboxProps?: {
        disabled?: boolean;
    };
}
/**
 * Selection Column Component
 *
 * Renders checkbox or radio selection controls for table rows.
 * Handles both header (select all) and individual row selection.
 */
export declare function SelectionColumn<T = any>({ type, selectedRowKeys, dataSource, getRowKey, onChange, isHeader, showSelectAll, record, index, checkboxProps, }: SelectionColumnProps<T>): import("react/jsx-runtime").JSX.Element | null;
