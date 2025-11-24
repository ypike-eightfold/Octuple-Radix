import type * as React from 'react';

// ===== TABLE SIZE =====
export enum TableSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

// ===== COLUMN TYPES =====
export type Key = React.Key;

export type SortOrder = 'ascend' | 'descend' | null;

export type CompareFn<T = any> = (a: T, b: T, sortOrder?: SortOrder) => number;

export type AlignType = 'left' | 'center' | 'right';

export type FixedType = 'left' | 'right' | boolean;

export interface ColumnType<RecordType = any> {
  /**
   * Unique key of this column (required)
   */
  key: Key;
  /**
   * Column title
   */
  title?: React.ReactNode;
  /**
   * Field name (for accessing record data)
   */
  dataIndex?: string | string[];
  /**
   * Column width
   */
  width?: number | string;
  /**
   * Column alignment
   * @default 'left'
   */
  align?: AlignType;
  /**
   * Fixed column (left or right)
   */
  fixed?: FixedType;
  /**
   * Enable sorting for this column
   */
  sorter?: boolean | CompareFn<RecordType>;
  /**
   * Current sort order (controlled)
   */
  sortOrder?: SortOrder;
  /**
   * Default sort order
   */
  defaultSortOrder?: SortOrder;
  /**
   * Custom cell rendering
   */
  render?: (value: any, record: RecordType, index: number) => React.ReactNode;
  /**
   * Custom cell props
   */
  onCell?: (record: RecordType, index: number) => React.TdHTMLAttributes<HTMLTableCellElement>;
  /**
   * Custom header cell props
   */
  onHeaderCell?: (column: ColumnType<RecordType>) => React.ThHTMLAttributes<HTMLTableCellElement>;
  /**
   * Ellipsis text overflow
   */
  ellipsis?: boolean;
  /**
   * Class name for column cells
   */
  className?: string;
}

export type ColumnsType<RecordType = any> = ColumnType<RecordType>[];

// ===== PAGINATION =====
export interface TablePaginationConfig {
  /**
   * Current page number
   * @default 1
   */
  current?: number;
  /**
   * Number of items per page
   * @default 10
   */
  pageSize?: number;
  /**
   * Total number of items
   */
  total?: number;
  /**
   * Show quick jumper
   * @default false
   */
  showQuickJumper?: boolean;
  /**
   * Show total count
   * @default false
   */
  showTotal?: boolean;
  /**
   * Page size options
   * @default [10, 20, 50, 100]
   */
  pageSizeOptions?: number[];
  /**
   * Pagination position
   * @default ['bottomRight']
   */
  position?: Array<'topLeft' | 'topCenter' | 'topRight' | 'bottomLeft' | 'bottomCenter' | 'bottomRight' | 'none'>;
  /**
   * Change handler
   */
  onChange?: (page: number, pageSize: number) => void;
}

// ===== ROW SELECTION =====
export type RowSelectionType = 'checkbox' | 'radio';

export type SelectionItemSelectFn = (currentRowKeys: Key[]) => void;

export interface TableRowSelection<RecordType = any> {
  /**
   * Selection type
   * @default 'checkbox'
   */
  type?: RowSelectionType;
  /**
   * Selected row keys (controlled)
   */
  selectedRowKeys?: Key[];
  /**
   * Default selected row keys
   */
  defaultSelectedRowKeys?: Key[];
  /**
   * Selection change callback
   */
  onChange?: (selectedRowKeys: Key[], selectedRows: RecordType[]) => void;
  /**
   * Custom selection column width
   */
  columnWidth?: string | number;
  /**
   * Fixed selection column
   */
  fixed?: FixedType;
  /**
   * Get checkbox props for each row
   */
  getCheckboxProps?: (record: RecordType) => Record<string, unknown>;
  /**
   * Hide select all checkbox
   * @default false
   */
  hideSelectAll?: boolean;
  /**
   * Preserve selected keys when data source changes
   * @default true
   */
  preserveSelectedRowKeys?: boolean;
}

// ===== EXPANDABLE =====
export interface ExpandableConfig<RecordType = any> {
  /**
   * Render expanded row content
   */
  expandedRowRender?: (record: RecordType, index: number, indent: number, expanded: boolean) => React.ReactNode;
  /**
   * Expanded row keys (controlled)
   */
  expandedRowKeys?: Key[];
  /**
   * Default expanded row keys
   */
  defaultExpandedRowKeys?: Key[];
  /**
   * Default expand all rows
   * @default false
   */
  defaultExpandAllRows?: boolean;
  /**
   * Expand change callback
   */
  onExpand?: (expanded: boolean, record: RecordType) => void;
  /**
   * Expanded row keys change callback
   */
  onExpandedRowsChange?: (expandedKeys: Key[]) => void;
  /**
   * Expandable row class name
   */
  expandedRowClassName?: (record: RecordType, index: number, indent: number) => string;
  /**
   * Custom expand icon
   */
  expandIcon?: (props: {
    expanded: boolean;
    onExpand: (record: RecordType, e: React.MouseEvent<HTMLElement>) => void;
    record: RecordType;
  }) => React.ReactNode;
  /**
   * Expandable column width
   */
  columnWidth?: number | string;
  /**
   * Fixed expandable column
   */
  fixed?: FixedType;
  /**
   * Indent size per level
   * @default 15
   */
  indentSize?: number;
  /**
   * Check if row is expandable
   */
  rowExpandable?: (record: RecordType) => boolean;
}

// ===== TABLE CHANGE INFO =====
export interface SorterResult<RecordType = any> {
  column?: ColumnType<RecordType>;
  order?: SortOrder;
  field?: string;
  columnKey?: Key;
}

export type TableAction = 'paginate' | 'sort';

export interface ChangeEventInfo<_RecordType = any> {
  action: TableAction;
}

// ===== MAIN TABLE PROPS =====
export interface TableV2Props<RecordType = any> {
  /**
   * Column definitions
   */
  columns?: ColumnsType<RecordType>;
  /**
   * Data source array
   */
  dataSource?: RecordType[];
  /**
   * Row key extractor
   * @default 'key'
   */
  rowKey?: string | ((record: RecordType) => Key);
  /**
   * Loading state
   * @default false
   */
  loading?: boolean;
  /**
   * Table size
   * @default TableSize.Medium
   */
  size?: TableSize;
  /**
   * Pagination configuration
   * Set to false to disable
   */
  pagination?: false | TablePaginationConfig;
  /**
   * Row selection configuration
   */
  rowSelection?: TableRowSelection<RecordType>;
  /**
   * Expandable row configuration
   */
  expandableConfig?: ExpandableConfig<RecordType>;
  /**
   * Table bordered (outer border)
   * @default false
   */
  bordered?: boolean;
  /**
   * Outer border
   * @default false
   */
  outerBordered?: boolean;
  /**
   * Inner border (between cells)
   * @default false
   */
  innerBordered?: boolean;
  /**
   * Header border
   * @default false
   */
  headerBordered?: boolean;
  /**
   * Header bottom border
   * @default false
   */
  headerBottomBordered?: boolean;
  /**
   * Row border
   * @default false
   */
  rowBordered?: boolean;
  /**
   * Column border
   * @default false
   */
  columnBordered?: boolean;
  /**
   * Cell border (all cells)
   * @default false
   */
  cellBordered?: boolean;
  /**
   * Alternate row colors (striped)
   * @default true
   */
  alternateRowColor?: boolean;
  /**
   * Enable row hover background
   * @default true
   */
  rowHoverBackgroundEnabled?: boolean;
  /**
   * Row class name
   */
  rowClassName?: string | ((record: RecordType, index: number) => string);
  /**
   * Table change callback (pagination, sorter)
   */
  onChange?: (
    pagination: TablePaginationConfig,
    sorter: SorterResult<RecordType> | SorterResult<RecordType>[],
    extra: ChangeEventInfo<RecordType>
  ) => void;
  /**
   * Row event handlers
   */
  onRow?: (record: RecordType, index: number) => {
    onClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
    onDoubleClick?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
    onMouseEnter?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
    onMouseLeave?: (event: React.MouseEvent<HTMLTableRowElement>) => void;
  };
  /**
   * Row hover enter callback
   */
  onRowHoverEnter?: (record: RecordType, index: number) => void;
  /**
   * Row hover leave callback
   */
  onRowHoverLeave?: (record: RecordType, index: number) => void;
  /**
   * Empty text (when no data)
   * @default 'No Data'
   */
  emptyText?: React.ReactNode;
  /**
   * Empty text details
   */
  emptyTextDetails?: React.ReactNode;
  /**
   * Custom class names
   */
  classNames?: string;
  /**
   * Custom styles
   */
  style?: React.CSSProperties;
  /**
   * Show sorter tooltip
   * @default true
   */
  showSorterTooltip?: boolean;
  /**
   * Show sorter default icon
   * @default true
   */
  showSorterDefaultIcon?: boolean;
  /**
   * Sort directions
   * @default ['ascend', 'descend']
   */
  sortDirections?: SortOrder[];
}

