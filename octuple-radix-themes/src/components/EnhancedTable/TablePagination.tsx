import { Pagination } from '../Pagination';
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
export function TablePagination({
  current,
  pageSize,
  total,
  onChange,
  config,
}: TablePaginationProps) {
  const handlePageChange = (page: number) => {
    onChange(page, pageSize);
  };
  
  // Calculate total pages
  const totalPages = Math.ceil(total / pageSize);
  
  // Show total items if configured
  const showTotal = config?.showTotal !== false;
  const totalElement = typeof config?.showTotal === 'function' 
    ? config.showTotal(total, [(current - 1) * pageSize + 1, Math.min(current * pageSize, total)])
    : showTotal 
      ? `${total} items`
      : undefined;
  
  return (
    <div className="table-pagination">
      <Pagination
        currentPage={current}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        size="2"
        showFirstLast={totalPages > 7}
        showQuickJumper={config?.showQuickJumper}
      />
      
      {/* TODO: Add page size selector when needed */}
      {/* {config?.showSizeChanger && (
        <div className="table-pagination-size-changer">
          <Select.Root value={pageSize.toString()} onValueChange={(value) => onChange(1, parseInt(value))}>
            <Select.Trigger>
              <Select.Value />
            </Select.Trigger>
            <Select.Content>
              <Select.Item value="10">10 / page</Select.Item>
              <Select.Item value="20">20 / page</Select.Item>
              <Select.Item value="50">50 / page</Select.Item>
              <Select.Item value="100">100 / page</Select.Item>
            </Select.Content>
          </Select.Root>
        </div>
      )} */}
      
      {/* Total Items Display */}
      {totalElement && (
        <div className="table-pagination-total">
          {totalElement}
        </div>
      )}
    </div>
  );
}
