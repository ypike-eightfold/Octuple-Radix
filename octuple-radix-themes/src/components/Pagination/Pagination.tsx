import React, { useState } from 'react';
import { Flex, Button, Text, IconButton, TextField } from '@radix-ui/themes';
import { Icon } from '../Icon';

export interface PaginationProps {
  /**
   * Current page (1-indexed)
   */
  currentPage: number;
  /**
   * Total number of pages
   */
  totalPages: number;
  /**
   * Callback when page changes
   */
  onPageChange: (page: number) => void;
  /**
   * Number of page buttons to show
   * @default 7
   */
  siblingCount?: number;
  /**
   * Size of buttons
   * @default '2'
   */
  size?: '1' | '2' | '3';
  /**
   * Show first/last buttons
   * @default true
   */
  showFirstLast?: boolean;
  /**
   * Show quick jumper input to navigate to specific page
   * @default false
   */
  showQuickJumper?: boolean;
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  ({
    currentPage,
    totalPages,
    onPageChange,
    siblingCount = 1,
    size = '2',
    showFirstLast = true,
    showQuickJumper = false,
  }, ref) => {
    const iconSize = size === '1' ? 14 : size === '2' ? 16 : 18;

    // Page jumper state
    const [jumperValue, setJumperValue] = useState('');

    // Jumper validation and navigation
    const handleJumperSubmit = () => {
      const pageNumber = parseInt(jumperValue, 10);
      if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
        onPageChange(pageNumber);
        setJumperValue('');
      } else {
        setJumperValue(''); // Clear invalid input
      }
    };

    const handleJumperKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleJumperSubmit();
      }
    };

    const handleJumperChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      // Only allow numbers
      if (value === '' || /^\d+$/.test(value)) {
        setJumperValue(value);
      }
    };

    const getPageNumbers = () => {
      const pages: (number | string)[] = [];
      
      if (totalPages <= 7) {
        // Show all pages if total is 7 or less
        for (let i = 1; i <= totalPages; i++) {
          pages.push(i);
        }
      } else {
        // Always show first page
        pages.push(1);

        // Calculate start and end of visible pages
        const leftSiblingIndex = Math.max(currentPage - siblingCount, 2);
        const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages - 1);

        const showLeftDots = leftSiblingIndex > 2;
        const showRightDots = rightSiblingIndex < totalPages - 1;

        if (showLeftDots) {
          pages.push('...');
        }

        for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
          pages.push(i);
        }

        if (showRightDots) {
          pages.push('...');
        }

        // Always show last page
        pages.push(totalPages);
      }

      return pages;
    };

    const pages = getPageNumbers();
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === totalPages;

    return (
      <Flex ref={ref} gap="1" align="center">
        {showFirstLast && (
          <IconButton
            variant="soft"
            size={size}
            disabled={isFirstPage}
            onClick={() => onPageChange(1)}
          >
            <Icon name="skip_previous" size={iconSize} />
          </IconButton>
        )}

        <IconButton
          variant="soft"
          size={size}
          disabled={isFirstPage}
          onClick={() => onPageChange(currentPage - 1)}
        >
          <Icon name="keyboard_arrow_left" size={iconSize} />
        </IconButton>

        {pages.map((page, index) => {
          if (page === '...') {
            return (
              <Text key={`dots-${index}`} size={size} color="gray" style={{ padding: '0 8px' }}>
                ...
              </Text>
            );
          }

          const pageNumber = page as number;
          const isCurrent = pageNumber === currentPage;

          return (
            <Button
              key={pageNumber}
              variant={isCurrent ? 'solid' : 'soft'}
              size={size}
              onClick={() => onPageChange(pageNumber)}
              style={{ minWidth: size === '1' ? '28px' : size === '2' ? '32px' : '40px' }}
            >
              {pageNumber}
            </Button>
          );
        })}

        <IconButton
          variant="soft"
          size={size}
          disabled={isLastPage}
          onClick={() => onPageChange(currentPage + 1)}
        >
          <Icon name="keyboard_arrow_right" size={iconSize} />
        </IconButton>

        {showFirstLast && (
          <IconButton
            variant="soft"
            size={size}
            disabled={isLastPage}
            onClick={() => onPageChange(totalPages)}
          >
            <Icon name="skip_next" size={iconSize} />
          </IconButton>
        )}

        {showQuickJumper && (
          <Flex align="center" gap="2" ml="3">
            <Text size={size} color="gray">Go to</Text>
            <TextField.Root
              size={size}
              style={{ width: size === '1' ? '50px' : size === '2' ? '60px' : '70px' }}
              value={jumperValue}
              onChange={handleJumperChange}
              onKeyDown={handleJumperKeyDown}
              onBlur={handleJumperSubmit}
              placeholder="1"
              aria-label={`Go to page (1-${totalPages})`}
            />
          </Flex>
        )}
      </Flex>
    );
  }
);

Pagination.displayName = 'Pagination';

