import React from 'react';
import { Table, IconButton } from '@radix-ui/themes';
import { Icon } from '../Icon';

export interface ExpandableRowProps<T = any> {
  record: T;
  expanded: boolean;
  onExpand: (expanded: boolean, record: T) => void;
  expandable?: boolean;
}

/**
 * Expandable Row Component
 * 
 * Renders the expand/collapse button for expandable table rows.
 * Handles the expand state and provides visual feedback.
 */
export function ExpandableRow<T = any>({
  record,
  expanded,
  onExpand,
  expandable = true,
}: ExpandableRowProps<T>) {
  const handleToggle = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent row click if attached
    onExpand(!expanded, record);
  };
  
  return (
    <Table.Cell style={{ width: '48px', textAlign: 'center' }}>
      {expandable ? (
        <IconButton
          variant="ghost"
          size="1"
          onClick={handleToggle}
          aria-label={expanded ? 'Collapse row' : 'Expand row'}
          className={`expandable-row-button ${expanded ? 'expandable-row-button-expanded' : ''}`}
        >
          <Icon 
            name={expanded ? 'keyboard_arrow_up' : 'keyboard_arrow_down'} 
            size={16}
            style={{
              transition: 'transform 0.2s ease',
              transform: expanded ? 'rotate(0deg)' : 'rotate(0deg)',
            }}
          />
        </IconButton>
      ) : (
        // Non-expandable row: empty cell
        <div style={{ width: '24px', height: '24px' }} />
      )}
    </Table.Cell>
  );
}
