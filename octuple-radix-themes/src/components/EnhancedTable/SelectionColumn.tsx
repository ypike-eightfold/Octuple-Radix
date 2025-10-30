import { Table, Checkbox } from '@radix-ui/themes';

export interface SelectionColumnProps<T = any> {
  type: 'checkbox' | 'radio';
  selectedRowKeys: string[];
  dataSource: T[];
  getRowKey: (record: T, index: number) => string;
  onChange: (selectedKeys: string[], selectedRows: T[]) => void;
  
  // Header-specific props
  isHeader?: boolean;
  showSelectAll?: boolean;
  
  // Row-specific props
  record?: T;
  index?: number;
  checkboxProps?: { disabled?: boolean };
}

/**
 * Selection Column Component
 * 
 * Renders checkbox or radio selection controls for table rows.
 * Handles both header (select all) and individual row selection.
 */
export function SelectionColumn<T = any>({
  type,
  selectedRowKeys,
  dataSource,
  getRowKey,
  onChange,
  isHeader = false,
  showSelectAll = true,
  record,
  index,
  checkboxProps,
}: SelectionColumnProps<T>) {
  
  if (isHeader) {
    // Header: Select All Checkbox (only for checkbox type)
    if (type === 'checkbox' && showSelectAll) {
      const allRowKeys = dataSource.map((item, idx) => getRowKey(item, idx));
      const isAllSelected = allRowKeys.length > 0 && allRowKeys.every(key => selectedRowKeys.includes(key));
      const isIndeterminate = selectedRowKeys.length > 0 && selectedRowKeys.length < allRowKeys.length;
      
      const handleSelectAll = (checked: boolean | 'indeterminate') => {
        const isChecked = checked === true;
        if (isChecked) {
          // Select all rows
          onChange(allRowKeys, dataSource);
        } else {
          // Deselect all rows
          onChange([], []);
        }
      };
      
      return (
        <Table.ColumnHeaderCell style={{ width: '48px', textAlign: 'center' }}>
          <Checkbox
            checked={isAllSelected}
            // Note: Radix Checkbox doesn't support indeterminate directly
            // You might need to use a custom implementation or CSS for indeterminate state
            onCheckedChange={handleSelectAll}
            aria-label="Select all rows"
            className={isIndeterminate ? 'checkbox-indeterminate' : ''}
          />
        </Table.ColumnHeaderCell>
      );
    }
    
    // Header for radio type or when select all is disabled
    return (
      <Table.ColumnHeaderCell style={{ width: '48px' }}>
        {/* Empty header cell */}
      </Table.ColumnHeaderCell>
    );
  }
  
  // Row: Individual Selection Control
  if (!record || index === undefined) {
    return null;
  }
  
  const rowKey = getRowKey(record, index);
  const isSelected = selectedRowKeys.includes(rowKey);
  const isDisabled = checkboxProps?.disabled || false;
  
  const handleSelectionChange = (checked: boolean | 'indeterminate') => {
    if (isDisabled) return;
    
    const isChecked = checked === true;
    let newSelectedKeys: string[];
    let newSelectedRows: T[];
    
    if (type === 'checkbox') {
      // Checkbox: Toggle selection
      if (isChecked) {
        newSelectedKeys = [...selectedRowKeys, rowKey];
      } else {
        newSelectedKeys = selectedRowKeys.filter(key => key !== rowKey);
      }
    } else {
      // Radio: Single selection
      newSelectedKeys = isChecked ? [rowKey] : [];
    }
    
    // Get corresponding rows
    newSelectedRows = dataSource.filter((item, idx) => 
      newSelectedKeys.includes(getRowKey(item, idx))
    );
    
    onChange(newSelectedKeys, newSelectedRows);
  };
  
  return (
    <Table.Cell style={{ width: '48px', textAlign: 'center' }}>
      <Checkbox
        checked={isSelected}
        onCheckedChange={handleSelectionChange}
        disabled={isDisabled}
        aria-label={`Select row ${index + 1}`}
      />
      {/* Note: For radio type, you might want to use a different component */}
      {/* Radix doesn't have a Radio component in Table context, using Checkbox for now */}
    </Table.Cell>
  );
}
