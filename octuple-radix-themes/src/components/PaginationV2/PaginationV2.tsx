import React, { useMemo } from 'react';
import { IconV2 } from '../IconV2';
import './PaginationV2.css';

export type PaginationV2Style = 'full' | 'carousel' | 'micro';
export type PaginationV2Size = 'large' | 'medium' | 'small';

export interface PaginationV2Props {
  /** Current active page (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Callback when page changes */
  onPageChange: (page: number) => void;
  /** Style variant */
  style?: PaginationV2Style;
  /** Size variant */
  size?: PaginationV2Size;
  /** Maximum number of page buttons to show before truncating (full style only) */
  maxPages?: number;
  /** Additional CSS class */
  className?: string;
}

export const PaginationV2: React.FC<PaginationV2Props> = ({
  currentPage,
  totalPages,
  onPageChange,
  style = 'full',
  size = 'large',
  maxPages = 7,
  className = '',
}) => {
  // Calculate which pages to show for Full Pagination
  const pageNumbers = useMemo(() => {
    if (style !== 'full') return [];

    if (totalPages <= maxPages) {
      // Show all pages if total is less than max
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const pages: (number | 'jumper')[] = [];
    const halfMax = Math.floor(maxPages / 2);

    // Always show first page
    pages.push(1);

    // Determine range around current page
    let startPage = Math.max(2, currentPage - halfMax + 1);
    let endPage = Math.min(totalPages - 1, currentPage + halfMax - 1);

    // Adjust if we're near the beginning
    if (currentPage <= halfMax + 1) {
      endPage = Math.min(totalPages - 1, maxPages - 1);
    }

    // Adjust if we're near the end
    if (currentPage >= totalPages - halfMax) {
      startPage = Math.max(2, totalPages - maxPages + 2);
    }

    // Add left jumper if needed
    if (startPage > 2) {
      pages.push('jumper');
    }

    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Add right jumper if needed
    if (endPage < totalPages - 1) {
      pages.push('jumper');
    }

    // Always show last page if more than 1 page
    if (totalPages > 1) {
      pages.push(totalPages);
    }

    return pages;
  }, [currentPage, totalPages, maxPages, style]);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handlePageClick = (page: number) => {
    onPageChange(page);
  };

  const rootClass = `paginationv2-root paginationv2-root--${style} paginationv2-root--${size} ${className}`.trim();

  // Micro Pagination: "1 of 15" style
  if (style === 'micro') {
    return (
      <nav className={rootClass} aria-label="Pagination">
        <button
          className={`paginationv2-button paginationv2-button--control paginationv2-button--${size}`}
          onClick={handlePrevious}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <IconV2 type="material" name="chevron_left" />
        </button>
        <div className="paginationv2-micro-text">
          {currentPage} of {totalPages}
        </div>
        <button
          className={`paginationv2-button paginationv2-button--control paginationv2-button--${size}`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <IconV2 type="material" name="chevron_right" />
        </button>
      </nav>
    );
  }

  // Carousel Dots: Circular numbered buttons
  if (style === 'carousel') {
    // Show a sliding window of pages (similar to full but simpler)
    const visiblePages = Math.min(4, totalPages);
    let startPage = Math.max(1, currentPage - Math.floor(visiblePages / 2));
    const endPage = Math.min(totalPages, startPage + visiblePages - 1);
    
    if (endPage - startPage + 1 < visiblePages) {
      startPage = Math.max(1, endPage - visiblePages + 1);
    }

    const carouselPages = Array.from(
      { length: endPage - startPage + 1 },
      (_, i) => startPage + i
    );

    return (
      <nav className={rootClass} aria-label="Pagination">
        <button
          className={`paginationv2-button paginationv2-button--control paginationv2-button--carousel paginationv2-button--${size}`}
          onClick={handlePrevious}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <IconV2 type="material" name="chevron_left" />
        </button>
        {carouselPages.map((page) => (
          <button
            key={page}
            className={`paginationv2-button paginationv2-button--page paginationv2-button--carousel paginationv2-button--${size} ${
              page === currentPage ? 'paginationv2-button--active' : ''
            }`}
            onClick={() => handlePageClick(page)}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ))}
        <button
          className={`paginationv2-button paginationv2-button--control paginationv2-button--carousel paginationv2-button--${size}`}
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <IconV2 type="material" name="chevron_right" />
        </button>
      </nav>
    );
  }

  // Full Pagination: Standard pagination with page numbers
  return (
    <nav className={rootClass} aria-label="Pagination">
      <button
        className={`paginationv2-button paginationv2-button--control paginationv2-button--${size}`}
        onClick={handlePrevious}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <IconV2 type="material" name="chevron_left" />
      </button>
      {pageNumbers.map((page, index) => {
        if (page === 'jumper') {
          return (
            <button
              key={`jumper-${index}`}
              className={`paginationv2-button paginationv2-button--jumper paginationv2-button--${size}`}
              aria-label="More pages"
              disabled
            >
              <IconV2 type="material" name="more_horiz" />
            </button>
          );
        }

        return (
          <button
            key={page}
            className={`paginationv2-button paginationv2-button--page paginationv2-button--${size} ${
              page === currentPage ? 'paginationv2-button--active' : ''
            }`}
            onClick={() => handlePageClick(page as number)}
            aria-label={`Page ${page}`}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        );
      })}
      <button
        className={`paginationv2-button paginationv2-button--control paginationv2-button--${size}`}
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <IconV2 type="material" name="chevron_right" />
      </button>
    </nav>
  );
};

