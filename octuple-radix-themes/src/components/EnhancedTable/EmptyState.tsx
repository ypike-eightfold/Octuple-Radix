import React from 'react';
import { Flex, Text } from '@radix-ui/themes';
import { Icon } from '../Icon';

export interface EmptyStateProps {
  message?: string | React.ReactNode;
  icon?: string;
  description?: string;
}

/**
 * Empty State Component
 * 
 * Displays a message when the table has no data to show.
 * Includes optional icon and description for better UX.
 */
export function EmptyState({ 
  message = 'No data available',
  icon = 'inbox',
  description
}: EmptyStateProps) {
  return (
    <div className="empty-state">
      <Flex direction="column" align="center" justify="center" gap="3" py="8">
        <Icon 
          name={icon} 
          size={48} 
          className="empty-state-icon"
          style={{ color: 'var(--gray-8)' }}
        />
        
        <div className="empty-state-content">
          {typeof message === 'string' ? (
            <Text size="3" weight="medium" align="center" color="gray">
              {message}
            </Text>
          ) : (
            message
          )}
          
          {description && (
            <Text size="2" align="center" color="gray" mt="1">
              {description}
            </Text>
          )}
        </div>
      </Flex>
    </div>
  );
}
