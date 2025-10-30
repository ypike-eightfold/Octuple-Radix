import React from 'react';
import { Table, Flex } from '@radix-ui/themes';
import { Icon } from '../Icon';
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
export function SortableHeader<T = any>({
  column,
  sortConfig,
  onSort,
}: SortableHeaderProps<T>) {
  const isSortable = column.sortable || Boolean(column.sorter);
  const isActive = sortConfig?.key === column.key;
  const sortDirection = isActive ? sortConfig.direction : undefined;
  
  const handleSort = () => {
    if (isSortable) {
      onSort(column.key);
    }
  };
  
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (isSortable && (event.key === 'Enter' || event.key === ' ')) {
      event.preventDefault();
      onSort(column.key);
    }
  };
  
  const headerClasses = [
    'sortable-header',
    isSortable && 'sortable-header-clickable',
    isActive && 'sortable-header-active',
    sortDirection && `sortable-header-${sortDirection}`,
  ].filter(Boolean).join(' ');
  
  return (
    <Table.ColumnHeaderCell 
      className={`${headerClasses} ${column.className || ''}`}
      style={{
        textAlign: column.align || 'left',
        width: column.width,
        cursor: isSortable ? 'pointer' : 'default',
        userSelect: 'none',
      }}
      onClick={handleSort}
      onKeyDown={handleKeyDown}
      tabIndex={isSortable ? 0 : undefined}
      role={isSortable ? 'button' : undefined}
      aria-sort={
        isActive 
          ? sortDirection === 'asc' 
            ? 'ascending' 
            : 'descending'
          : isSortable 
            ? 'none' 
            : undefined
      }
      aria-label={
        isSortable 
          ? `Sort by ${column.title}${isActive ? `, currently sorted ${sortDirection}ending` : ''}`
          : undefined
      }
    >
      <Flex align="center" gap="1" justify={column.align === 'center' ? 'center' : column.align === 'right' ? 'end' : 'start'}>
        <span className="sortable-header-title">
          {column.title}
        </span>
        
        {isSortable && (
          <div className="sortable-header-icons">
            {/* Sort Icons */}
            {!isActive && (
              <Icon 
                name="swap_vert" 
                size={14} 
                className="sortable-header-icon-inactive"
              />
            )}
            
            {isActive && sortDirection === 'asc' && (
              <Icon 
                name="keyboard_arrow_up" 
                size={14} 
                className="sortable-header-icon-active"
              />
            )}
            
            {isActive && sortDirection === 'desc' && (
              <Icon 
                name="keyboard_arrow_down" 
                size={14} 
                className="sortable-header-icon-active"
              />
            )}
          </div>
        )}
      </Flex>
    </Table.ColumnHeaderCell>
  );
}
