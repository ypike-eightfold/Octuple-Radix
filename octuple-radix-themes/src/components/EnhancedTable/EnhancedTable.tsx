import React, { useState, useMemo, useCallback } from 'react';
import { Table, Text } from '@radix-ui/themes';
import { SortableHeader } from './SortableHeader';
import { SelectionColumn } from './SelectionColumn';
import { LoadingOverlay } from './LoadingOverlay';
import { EmptyState } from './EmptyState';
import { SearchInput } from './SearchInput';
import { TablePagination } from './TablePagination';
import { ExpandableRow } from './ExpandableRow';
import { EnhancedTableProps, TableState, ColumnDef } from './types';
import './EnhancedTable.css';

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
export function EnhancedTable<T = any>({
  // Data Management
  columns,
  dataSource = [],
  loading = false,
  rowKey = 'id',
  
  // Selection
  rowSelection,
  
  // Sorting
  defaultSort,
  onSort,
  
  // Pagination
  pagination = false,
  
  // Expandable
  expandable,
  
  // Visual enhancements 
  striped = false,
  bordered = false,
  hover = false,
  
  // Search & Filtering
  searchable = false,
  searchPlaceholder = 'Search...',
  searchValue,
  onSearch,
  
  // Empty State
  emptyMessage = 'No data available',
  
  // Callbacks
  onChange,
  onRow,
  
  // Radix props passthrough
  size = '2',
  variant = 'surface',
  
  // Styling
  className = '',
  style,
}: EnhancedTableProps<T>) {
  
  // ===== STATE MANAGEMENT =====
  const [tableState, setTableState] = useState<TableState<T>>({
    data: dataSource,
    loading,
    sortConfig: defaultSort,
    selectedRowKeys: rowSelection?.selectedRowKeys || [],
    expandedRowKeys: expandable?.defaultExpandedRowKeys || [],
    searchValue: searchValue || '',
    pagination: {
      current: 1,
      pageSize: typeof pagination === 'object' ? pagination.pageSize || 10 : 10,
      total: dataSource.length,
    },
  });

  // ===== COMPUTED VALUES =====
  
  /**
   * Get row key from record
   */
  const getRowKey = useCallback((record: T, index: number): string => {
    if (typeof rowKey === 'function') {
      return rowKey(record);
    }
    return record[rowKey as keyof T] as string || index.toString();
  }, [rowKey]);
  
  /**
   * Filter data based on search
   */
  const searchedData = useMemo(() => {
    if (!searchable || !tableState.searchValue) {
      return dataSource;
    }
    
    const searchTerm = tableState.searchValue.toLowerCase();
    return dataSource.filter((record) => {
      return columns.some((column) => {
        const value = record[column.dataIndex as keyof T];
        return String(value).toLowerCase().includes(searchTerm);
      });
    });
  }, [dataSource, tableState.searchValue, searchable, columns]);
  
  /**
   * Sort data based on current sort config
   */
  const sortedData = useMemo(() => {
    if (!tableState.sortConfig) {
      return searchedData;
    }
    
    const { key, direction } = tableState.sortConfig;
    const column = columns.find(col => col.key === key);
    
    if (!column) return searchedData;
    
    return [...searchedData].sort((a, b) => {
      const aValue = a[column.dataIndex as keyof T];
      const bValue = b[column.dataIndex as keyof T];
      
      // Use custom sorter if provided
      if (typeof column.sorter === 'function') {
        const result = column.sorter(a, b);
        return direction === 'desc' ? -result : result;
      }
      
      // Default sorting
      if (aValue < bValue) return direction === 'asc' ? -1 : 1;
      if (aValue > bValue) return direction === 'asc' ? 1 : -1;
      return 0;
    });
  }, [searchedData, tableState.sortConfig, columns]);
  
  /**
   * Paginate data based on current page settings
   */
  const paginatedData = useMemo(() => {
    if (!pagination) {
      return sortedData;
    }
    
    const { current, pageSize } = tableState.pagination;
    const startIndex = (current - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    
    return sortedData.slice(startIndex, endIndex);
  }, [sortedData, tableState.pagination, pagination]);
  
  /**
   * Check if we need to show selection column
   */
  const hasSelection = rowSelection?.type && (rowSelection.type === 'checkbox' || rowSelection.type === 'radio');
  
  /**
   * Check if we need to show expandable column
   */
  const hasExpandable = Boolean(expandable?.expandedRowRender);
  
  // ===== EVENT HANDLERS =====
  
  /**
   * Handle column sort
   */
  const handleSort = useCallback((columnKey: string) => {
    const currentSort = tableState.sortConfig;
    let newDirection: 'asc' | 'desc' = 'asc';
    
    if (currentSort?.key === columnKey) {
      newDirection = currentSort.direction === 'asc' ? 'desc' : 'asc';
    }
    
    const newSortConfig = { key: columnKey, direction: newDirection };
    
    setTableState(prev => ({
      ...prev,
      sortConfig: newSortConfig,
    }));
    
    // Call external sort handler
    if (onSort) {
      onSort(columnKey, newDirection);
    }
    
    // Call general onChange handler
    if (onChange) {
      onChange(tableState.pagination, {}, newSortConfig, { action: 'sort' });
    }
  }, [tableState.sortConfig, tableState.pagination, onSort, onChange]);
  
  /**
   * Handle row selection change
   */
  const handleSelectionChange = useCallback((selectedKeys: string[], selectedRows: T[]) => {
    setTableState(prev => ({
      ...prev,
      selectedRowKeys: selectedKeys,
    }));
    
    if (rowSelection?.onChange) {
      rowSelection.onChange(selectedKeys, selectedRows);
    }
  }, [rowSelection]);
  
  /**
   * Handle search change
   */
  const handleSearchChange = useCallback((value: string) => {
    setTableState(prev => ({
      ...prev,
      searchValue: value,
      pagination: { ...prev.pagination, current: 1 }, // Reset to first page
    }));
    
    if (onSearch) {
      onSearch(value);
    }
  }, [onSearch]);
  
  /**
   * Handle pagination change
   */
  const handlePaginationChange = useCallback((page: number, pageSize: number) => {
    const newPagination = {
      ...tableState.pagination,
      current: page,
      pageSize,
    };
    
    setTableState(prev => ({
      ...prev,
      pagination: newPagination,
    }));
    
    if (typeof pagination === 'object' && pagination.onChange) {
      pagination.onChange(page, pageSize);
    }
    
    if (onChange) {
      onChange(newPagination, {}, tableState.sortConfig, { action: 'paginate' });
    }
  }, [tableState.pagination, tableState.sortConfig, pagination, onChange]);
  
  /**
   * Handle row expand
   */
  const handleRowExpand = useCallback((expanded: boolean, record: T) => {
    const recordKey = getRowKey(record, 0);
    
    setTableState(prev => {
      const newExpandedKeys = expanded
        ? [...prev.expandedRowKeys, recordKey]
        : prev.expandedRowKeys.filter(key => key !== recordKey);
      
      return {
        ...prev,
        expandedRowKeys: newExpandedKeys,
      };
    });
    
    if (expandable?.onExpand) {
      expandable.onExpand(expanded, record);
    }
  }, [getRowKey, expandable]);
  
  // ===== COMPUTED CSS CLASSES =====
  const tableClasses = [
    'enhanced-table',
    striped && 'enhanced-table-striped',
    bordered && 'enhanced-table-bordered', 
    hover && 'enhanced-table-hover',
    loading && 'enhanced-table-loading',
    className,
  ].filter(Boolean).join(' ');
  
  // ===== RENDER =====
  
  // Show empty state if no data
  if (!loading && paginatedData.length === 0) {
    return (
      <div className={tableClasses} style={style}>
        {searchable && (
          <div className="enhanced-table-search">
            <SearchInput
              value={tableState.searchValue}
              onChange={handleSearchChange}
              placeholder={searchPlaceholder}
            />
          </div>
        )}
        <EmptyState message={emptyMessage} />
      </div>
    );
  }
  
  return (
    <div className={tableClasses} style={style}>
      {/* Search Input */}
      {searchable && (
        <div className="enhanced-table-search">
          <SearchInput
            value={tableState.searchValue}
            onChange={handleSearchChange}
            placeholder={searchPlaceholder}
          />
        </div>
      )}
      
      {/* Table Container with Loading Overlay */}
      <div className="enhanced-table-container">
        <Table.Root size={size} variant={variant}>
          {/* Table Header */}
          <Table.Header>
            <Table.Row>
              {/* Selection Column Header */}
              {hasSelection && (
                <SelectionColumn
                  type={rowSelection!.type!}
                  selectedRowKeys={tableState.selectedRowKeys}
                  dataSource={paginatedData}
                  getRowKey={getRowKey}
                  onChange={handleSelectionChange}
                  showSelectAll={rowSelection?.showSelectAll}
                  isHeader
                />
              )}
              
              {/* Expandable Column Header */}
              {hasExpandable && (
                <Table.ColumnHeaderCell style={{ width: '48px' }}>
                  {/* Empty header for expand column */}
                </Table.ColumnHeaderCell>
              )}
              
              {/* Data Columns */}
              {columns.map((column) => (
                <SortableHeader
                  key={column.key}
                  column={column}
                  sortConfig={tableState.sortConfig}
                  onSort={handleSort}
                />
              ))}
            </Table.Row>
          </Table.Header>
          
          {/* Table Body */}
          <Table.Body>
            {paginatedData.map((record, index) => {
              const recordKey = getRowKey(record, index);
              const isSelected = tableState.selectedRowKeys.includes(recordKey);
              const isExpanded = tableState.expandedRowKeys.includes(recordKey);
              const rowProps = onRow ? onRow(record, index) : {};
              
              return (
                <React.Fragment key={recordKey}>
                  <Table.Row
                    className={`enhanced-table-row ${isSelected ? 'enhanced-table-row-selected' : ''}`}
                    {...rowProps}
                  >
                    {/* Selection Column Cell */}
                    {hasSelection && (
                      <SelectionColumn
                        type={rowSelection!.type!}
                        selectedRowKeys={tableState.selectedRowKeys}
                        dataSource={paginatedData}
                        getRowKey={getRowKey}
                        onChange={handleSelectionChange}
                        record={record}
                        index={index}
                        checkboxProps={rowSelection?.getCheckboxProps?.(record)}
                      />
                    )}
                    
                    {/* Expandable Column Cell */}
                    {hasExpandable && (
                      <ExpandableRow
                        record={record}
                        expanded={isExpanded}
                        onExpand={handleRowExpand}
                        expandable={expandable!.rowExpandable?.(record) ?? true}
                      />
                    )}
                    
                    {/* Data Columns */}
                    {columns.map((column) => {
                      const value = record[column.dataIndex as keyof T];
                      const cellContent = column.render 
                        ? column.render(value, record, index)
                        : String(value || '');
                      
                      return (
                        <Table.Cell
                          key={column.key}
                          style={{
                            textAlign: column.align || 'left',
                            width: column.width,
                          }}
                          className={column.className}
                        >
                          {column.ellipsis ? (
                            <Text truncate>{cellContent}</Text>
                          ) : (
                            cellContent
                          )}
                        </Table.Cell>
                      );
                    })}
                  </Table.Row>
                  
                  {/* Expanded Row Content */}
                  {hasExpandable && isExpanded && expandable?.expandedRowRender && (
                    <Table.Row className="enhanced-table-expanded-row">
                      <Table.Cell colSpan={
                        columns.length + 
                        (hasSelection ? 1 : 0) + 
                        (hasExpandable ? 1 : 0)
                      }>
                        <div className="enhanced-table-expanded-content">
                          {expandable.expandedRowRender(record, index)}
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  )}
                </React.Fragment>
              );
            })}
          </Table.Body>
        </Table.Root>
        
        {/* Loading Overlay */}
        {loading && <LoadingOverlay />}
      </div>
      
      {/* Pagination */}
      {pagination && (
        <div className="enhanced-table-pagination">
          <TablePagination
            current={tableState.pagination.current}
            pageSize={tableState.pagination.pageSize}
            total={sortedData.length}
            onChange={handlePaginationChange}
            config={typeof pagination === 'object' ? pagination : undefined}
          />
        </div>
      )}
    </div>
  );
}

export type { EnhancedTableProps, ColumnDef };
