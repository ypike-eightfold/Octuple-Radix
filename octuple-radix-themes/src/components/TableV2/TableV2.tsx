import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { Table } from '@radix-ui/themes';
import {
  TableV2Props,
  SortOrder,
  Key,
  SorterResult,
  TableSize,
  ColumnType,
  CompareFn,
} from './TableV2.types';
import { PaginationV2 } from '../PaginationV2';
import { SpinnerV2 } from '../SpinnerV2';
import { IconV2 } from '../IconV2';
import './TableV2.css';

/**
 * Get value from record using dataIndex
 */
function getValueByPath(record: any, path: string | string[]): any {
  if (typeof path === 'string') {
    return record[path];
  }
  return path.reduce((obj, key) => obj?.[key], record);
}

/**
 * Get row key from record
 */
function getRowKey<T>(record: T, rowKey: string | ((record: T) => Key), index: number): Key {
  if (typeof rowKey === 'function') {
    return rowKey(record);
  }
  return (record as any)[rowKey] ?? index;
}

/**
 * Sort data
 */
function sortData<T>(
  data: T[],
  column: ColumnType<T> | undefined,
  sortOrder: SortOrder
): T[] {
  if (!column || !sortOrder || !column.sorter) {
    return data;
  }

  const sorted = [...data];
  
  if (typeof column.sorter === 'function') {
    sorted.sort((a, b) => {
      const result = (column.sorter as CompareFn<T>)(a, b, sortOrder);
      return sortOrder === 'ascend' ? result : -result;
    });
  } else if (column.dataIndex) {
    // Default string/number sort
    sorted.sort((a, b) => {
      const aValue = getValueByPath(a, column.dataIndex!);
      const bValue = getValueByPath(b, column.dataIndex!);
      
      if (aValue === bValue) return 0;
      if (aValue == null) return 1;
      if (bValue == null) return -1;
      
      const comparison = aValue > bValue ? 1 : -1;
      return sortOrder === 'ascend' ? comparison : -comparison;
    });
  }
  
  return sorted;
}

export const TableV2 = <RecordType extends object = any>({
  columns = [],
  dataSource = [],
  rowKey = 'key',
  loading = false,
  size = TableSize.Medium,
  pagination = false,
  rowSelection,
  expandableConfig,
  bordered = false,
  outerBordered = false,
  innerBordered = false,
  headerBordered = false,
  headerBottomBordered = false,
  rowBordered = false,
  columnBordered = false,
  cellBordered = false,
  alternateRowColor = true,
  rowHoverBackgroundEnabled = true,
  rowClassName,
  onChange,
  onRow,
  onRowHoverEnter,
  onRowHoverLeave,
  emptyText = 'No Data',
  emptyTextDetails,
  classNames = '',
  style,
}: TableV2Props<RecordType>) => {
  // ===== STATE =====
  const [sortConfig, setSortConfig] = useState<{ column?: ColumnType<RecordType>; order?: SortOrder }>({});
  const [selectedRowKeys, setSelectedRowKeys] = useState<Key[]>(
    rowSelection?.selectedRowKeys || rowSelection?.defaultSelectedRowKeys || []
  );
  const [expandedRowKeys, setExpandedRowKeys] = useState<Key[]>(
    expandableConfig?.expandedRowKeys || expandableConfig?.defaultExpandedRowKeys || []
  );
  const [currentPage, setCurrentPage] = useState(
    typeof pagination === 'object' ? pagination.current || 1 : 1
  );
  const [pageSize, setPageSize] = useState(
    typeof pagination === 'object' ? pagination.pageSize || 10 : 10
  );

  // Sync controlled props
  useEffect(() => {
    if (rowSelection?.selectedRowKeys !== undefined) {
      setSelectedRowKeys(rowSelection.selectedRowKeys);
    }
  }, [rowSelection?.selectedRowKeys]);

  useEffect(() => {
    if (expandableConfig?.expandedRowKeys !== undefined) {
      setExpandedRowKeys(expandableConfig.expandedRowKeys);
    }
  }, [expandableConfig?.expandedRowKeys]);

  // ===== COMPUTED VALUES =====
  const hasSelection = !!rowSelection;
  const hasExpandable = !!expandableConfig;
  const selectionType = rowSelection?.type || 'checkbox';

  // Apply sorting
  const sortedData = useMemo(() => {
    return sortData(dataSource, sortConfig.column, sortConfig.order || null);
  }, [dataSource, sortConfig]);

  // Apply pagination
  const paginatedData = useMemo(() => {
    if (!pagination) return sortedData;
    const start = (currentPage - 1) * pageSize;
    const end = start + pageSize;
    return sortedData.slice(start, end);
  }, [sortedData, pagination, currentPage, pageSize]);

  const totalRecords = dataSource.length;

  // ===== HANDLERS =====
  const handleSort = useCallback(
    (column: ColumnType<RecordType>) => {
      if (!column.sorter) return;

      let newOrder: SortOrder = 'ascend';
      if (sortConfig.column?.key === column.key) {
        if (sortConfig.order === 'ascend') {
          newOrder = 'descend';
        } else if (sortConfig.order === 'descend') {
          newOrder = null;
        }
      }

      const newSortConfig = {
        column: newOrder ? column : undefined,
        order: newOrder,
      };

      setSortConfig(newSortConfig);

      const sorterResult: SorterResult<RecordType> = {
        column: newOrder ? column : undefined,
        order: newOrder,
        field: column.dataIndex as string,
        columnKey: column.key,
      };

      onChange?.(
        { current: currentPage, pageSize, total: totalRecords },
        sorterResult,
        { action: 'sort' }
      );
    },
    [sortConfig, onChange, currentPage, pageSize, totalRecords]
  );

  const handleSelectAll = useCallback(
    (checked: boolean) => {
      const newKeys = checked
        ? paginatedData.map((record, index) => getRowKey(record, rowKey, index))
        : [];
      setSelectedRowKeys(newKeys);
      rowSelection?.onChange?.(newKeys, checked ? paginatedData : []);
    },
    [paginatedData, rowKey, rowSelection]
  );

  const handleSelectRow = useCallback(
    (record: RecordType, index: number, checked: boolean) => {
      const key = getRowKey(record, rowKey, index);
      let newKeys: Key[];

      if (selectionType === 'radio') {
        newKeys = [key];
      } else {
        newKeys = checked
          ? [...selectedRowKeys, key]
          : selectedRowKeys.filter((k) => k !== key);
      }

      setSelectedRowKeys(newKeys);
      const selectedRecords = paginatedData.filter((r, i) =>
        newKeys.includes(getRowKey(r, rowKey, i))
      );
      rowSelection?.onChange?.(newKeys, selectedRecords);
    },
    [selectedRowKeys, paginatedData, rowKey, selectionType, rowSelection]
  );

  const handleExpandRow = useCallback(
    (record: RecordType, index: number) => {
      const key = getRowKey(record, rowKey, index);
      const isExpanded = expandedRowKeys.includes(key);
      const newKeys = isExpanded
        ? expandedRowKeys.filter((k) => k !== key)
        : [...expandedRowKeys, key];

      setExpandedRowKeys(newKeys);
      expandableConfig?.onExpand?.(!isExpanded, record);
      expandableConfig?.onExpandedRowsChange?.(newKeys);
    },
    [expandedRowKeys, rowKey, expandableConfig]
  );

  const handlePaginationChange = useCallback(
    (page: number, newPageSize?: number) => {
      const finalPageSize = newPageSize || pageSize;
      setCurrentPage(page);
      if (newPageSize !== undefined) {
        setPageSize(newPageSize);
      }

      if (typeof pagination === 'object' && pagination.onChange) {
        pagination.onChange(page, finalPageSize);
      }

      onChange?.(
        { current: page, pageSize: finalPageSize, total: totalRecords },
        sortConfig as SorterResult<RecordType>,
        { action: 'paginate' }
      );
    },
    [pageSize, pagination, onChange, sortConfig, totalRecords]
  );

  // ===== CLASS NAMES =====
  const tableClassNames = [
    'table-v2',
    `table-v2-${size}`,
    alternateRowColor && 'table-v2-striped',
    rowHoverBackgroundEnabled && 'table-v2-hover',
    bordered && 'table-v2-bordered',
    outerBordered && 'table-v2-outer-bordered',
    innerBordered && 'table-v2-inner-bordered',
    headerBordered && 'table-v2-header-bordered',
    headerBottomBordered && 'table-v2-header-bottom-bordered',
    rowBordered && 'table-v2-row-bordered',
    columnBordered && 'table-v2-column-bordered',
    cellBordered && 'table-v2-cell-bordered',
    classNames,
  ]
    .filter(Boolean)
    .join(' ');

  // ===== RADIX TABLE SIZE MAPPING =====
  const radixSize = size === TableSize.Small ? '1' : size === TableSize.Large ? '3' : '2';

  // ===== RENDER =====
  return (
    <div className="table-v2-wrapper" style={style}>
      {/* Loading Overlay */}
      {loading && (
        <div className="table-v2-loading-overlay">
          <SpinnerV2 size="large" />
        </div>
      )}

      {/* Table */}
      <Table.Root size={radixSize} variant="surface" className={tableClassNames}>
        {/* Header */}
        <Table.Header>
          <Table.Row>
            {/* Selection Column */}
            {hasSelection && (
              <Table.ColumnHeaderCell style={{ width: typeof rowSelection?.columnWidth === 'number' ? `${rowSelection.columnWidth}px` : rowSelection?.columnWidth || '48px' }}>
                {selectionType === 'checkbox' && !rowSelection?.hideSelectAll && (
                  <input
                    type="checkbox"
                    checked={
                      paginatedData.length > 0 &&
                      paginatedData.every((r, i) =>
                        selectedRowKeys.includes(getRowKey(r, rowKey, i))
                      )
                    }
                    onChange={(e) => handleSelectAll(e.target.checked)}
                  />
                )}
              </Table.ColumnHeaderCell>
            )}

            {/* Expandable Column */}
            {hasExpandable && (
                      <Table.ColumnHeaderCell style={{ width: typeof expandableConfig?.columnWidth === 'number' ? `${expandableConfig.columnWidth}px` : expandableConfig?.columnWidth || '48px' }} />
            )}

            {/* Data Columns */}
            {columns.map((column) => {
              const isSortable = !!column.sorter;
              const isSorted = sortConfig.column?.key === column.key;
              const sortOrder = isSorted ? sortConfig.order : null;

              const headerCellProps = column.onHeaderCell?.(column) || {};
              const colWidth = typeof column.width === 'number' ? `${column.width}px` : column.width;

              return (
                <Table.ColumnHeaderCell
                  key={column.key}
                  style={{ width: colWidth, textAlign: column.align }}
                  className={column.className}
                  {...headerCellProps}
                >
                  <div
                    className={`table-v2-header-cell ${isSortable ? 'table-v2-sortable' : ''}`}
                    onClick={() => isSortable && handleSort(column)}
                  >
                    <span>{column.title}</span>
                    {isSortable && (
                      <span className="table-v2-sort-icons">
                        <IconV2
                          name="arrow_upward"
                          type="material"
                          size={16}
                          className={`table-v2-sort-icon ${
                            sortOrder === 'ascend' ? 'table-v2-sort-active' : ''
                          }`}
                        />
                        <IconV2
                          name="arrow_downward"
                          type="material"
                          size={16}
                          className={`table-v2-sort-icon ${
                            sortOrder === 'descend' ? 'table-v2-sort-active' : ''
                          }`}
                        />
                      </span>
                    )}
                  </div>
                </Table.ColumnHeaderCell>
              );
            })}
          </Table.Row>
        </Table.Header>

        {/* Body */}
        <Table.Body>
          {paginatedData.length === 0 ? (
            // Empty State
            <Table.Row>
              <Table.Cell
                colSpan={
                  columns.length + (hasSelection ? 1 : 0) + (hasExpandable ? 1 : 0)
                }
                style={{ textAlign: 'center', padding: '32px' }}
              >
                <div className="table-v2-empty">
                  <div className="table-v2-empty-text">{emptyText}</div>
                  {emptyTextDetails && (
                    <div className="table-v2-empty-details">{emptyTextDetails}</div>
                  )}
                </div>
              </Table.Cell>
            </Table.Row>
          ) : (
            paginatedData.map((record, index) => {
              const key = getRowKey(record, rowKey, index);
              const isSelected = selectedRowKeys.includes(key);
              const isExpanded = expandedRowKeys.includes(key);
              const rowEvents = onRow?.(record, index) || {};
              const rowClass =
                typeof rowClassName === 'function'
                  ? rowClassName(record, index)
                  : rowClassName;

              return (
                <React.Fragment key={key}>
                  {/* Main Row */}
                  <Table.Row
                    className={`${rowClass || ''} ${isSelected ? 'table-v2-row-selected' : ''}`}
                    onClick={rowEvents.onClick}
                    onDoubleClick={rowEvents.onDoubleClick}
                    onMouseEnter={(e) => {
                      rowEvents.onMouseEnter?.(e);
                      onRowHoverEnter?.(record, index);
                    }}
                    onMouseLeave={(e) => {
                      rowEvents.onMouseLeave?.(e);
                      onRowHoverLeave?.(record, index);
                    }}
                  >
                    {/* Selection Cell */}
                    {hasSelection && (
                      <Table.Cell>
                        {selectionType === 'checkbox' ? (
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={(e) => handleSelectRow(record, index, e.target.checked)}
                          />
                        ) : (
                          <input
                            type="radio"
                            checked={isSelected}
                            onChange={(e) => handleSelectRow(record, index, e.target.checked)}
                          />
                        )}
                      </Table.Cell>
                    )}

                    {/* Expandable Cell */}
                    {hasExpandable && (
                      <Table.Cell>
                        {(!expandableConfig?.rowExpandable ||
                          expandableConfig.rowExpandable(record)) && (
                          <button
                            className="table-v2-expand-icon"
                            onClick={() => handleExpandRow(record, index)}
                          >
                            <IconV2
                              name={isExpanded ? 'expand_more' : 'chevron_right'}
                              type="material"
                              size={20}
                            />
                          </button>
                        )}
                      </Table.Cell>
                    )}

                    {/* Data Cells */}
                    {columns.map((column) => {
                      const value = column.dataIndex
                        ? getValueByPath(record, column.dataIndex)
                        : undefined;
                      const cellContent = column.render
                        ? column.render(value, record, index)
                        : value;
                      const cellProps = column.onCell?.(record, index) || {};
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
                      const { width: _width, ...cellPropsWithoutWidth } = cellProps as any;

                      return (
                        <Table.Cell
                          key={column.key}
                          style={{ textAlign: column.align }}
                          className={`${column.className || ''} ${
                            column.ellipsis ? 'table-v2-cell-ellipsis' : ''
                          }`}
                          {...cellPropsWithoutWidth}
                        >
                          {cellContent}
                        </Table.Cell>
                      );
                    })}
                  </Table.Row>

                  {/* Expanded Row */}
                  {hasExpandable && isExpanded && expandableConfig?.expandedRowRender && (
                    <Table.Row
                      className={`table-v2-expanded-row ${
                        expandableConfig?.expandedRowClassName?.(record, index, 0) || ''
                      }`}
                    >
                      <Table.Cell
                        colSpan={
                          columns.length + (hasSelection ? 1 : 0) + (hasExpandable ? 1 : 0)
                        }
                      >
                        <div className="table-v2-expanded-content">
                          {expandableConfig.expandedRowRender(record, index, 0, isExpanded)}
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  )}
                </React.Fragment>
              );
            })
          )}
        </Table.Body>
      </Table.Root>

      {/* Pagination */}
      {pagination && typeof pagination === 'object' && totalRecords > 0 && (
        <div className="table-v2-pagination">
          <PaginationV2
            currentPage={currentPage}
            totalPages={Math.ceil((pagination.total || totalRecords) / pageSize)}
            onPageChange={(page: number) => handlePaginationChange(page, pageSize)}
          />
        </div>
      )}
    </div>
  );
};

