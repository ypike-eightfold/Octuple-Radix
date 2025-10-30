import React from 'react';
import { Flex, Box, Text } from '@radix-ui/themes';
import { Icon } from '../Icon';
import './Timeline.css';

export interface TimelineItemData {
  /**
   * Title of the event
   */
  title: string;
  /**
   * Optional description
   */
  description?: string;
  /**
   * Timestamp
   */
  timestamp: string;
  /**
   * Optional icon name
   */
  icon?: string;
  /**
   * Status/color variant
   * @default 'default'
   */
  variant?: 'default' | 'success' | 'error' | 'warning' | 'info';
}

export interface TimelineProps {
  /**
   * Array of timeline items
   */
  items: TimelineItemData[];
  /**
   * Orientation of the timeline
   * @default 'vertical'
   */
  orientation?: 'vertical' | 'horizontal';
}

export const Timeline: React.FC<TimelineProps> = ({ items, orientation = 'vertical' }) => {
  const getVariantColor = (variant?: string) => {
    switch (variant) {
      case 'success': return 'var(--green-9)';
      case 'error': return 'var(--red-9)';
      case 'warning': return 'var(--orange-9)';
      case 'info': return 'var(--blue-9)';
      default: return 'var(--indigo-9)';
    }
  };

  const getDefaultIcon = (variant?: string) => {
    switch (variant) {
      case 'success': return 'check_circle';
      case 'error': return 'error';
      case 'warning': return 'warning';
      case 'info': return 'info';
      default: return 'circle';
    }
  };

  return (
    <Flex 
      direction={orientation === 'horizontal' ? 'row' : 'column'} 
      className={`timeline-root timeline-${orientation}`}
    >
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        const color = getVariantColor(item.variant);
        const iconName = item.icon || getDefaultIcon(item.variant);

        return (
          <React.Fragment key={index}>
            <Flex 
              gap="3" 
              className={`timeline-item timeline-item-${orientation}`}
              direction={orientation === 'horizontal' ? 'column' : 'row'}
            >
              {/* Indicator wrapper - different structure for horizontal vs vertical */}
              {orientation === 'horizontal' ? (
                // Horizontal: Simple indicator without connector
                <Box
                  className="timeline-indicator"
                  style={{ backgroundColor: color }}
                >
                  <Icon name={iconName} size={16} style={{ color: 'white' }} />
                </Box>
              ) : (
                // Vertical: Indicator wrapper with connector inside
                <Flex direction="column" align="center" className="timeline-indicator-wrapper">
                  <Box
                    className="timeline-indicator"
                    style={{ backgroundColor: color }}
                  >
                    <Icon name={iconName} size={16} style={{ color: 'white' }} />
                  </Box>
                  {!isLast && (
                    <Box
                      className="timeline-connector"
                      style={{ backgroundColor: 'var(--gray-6)' }}
                    />
                  )}
                </Flex>
              )}

              <Flex direction="column" gap="1" className="timeline-content">
                {orientation === 'horizontal' ? (
                  // Horizontal: No timestamps, simpler layout
                  <>
                    <Text size="3" weight="medium">
                      {item.title}
                    </Text>
                    {item.description && (
                      <Text size="2" color="gray">
                        {item.description}
                      </Text>
                    )}
                  </>
                ) : (
                  // Vertical: Full layout with timestamps
                  <>
                    <Flex justify="between" align="start" gap="3">
                      <Text size="3" weight="medium">
                        {item.title}
                      </Text>
                      <Text size="1" color="gray" className="timeline-timestamp">
                        {item.timestamp}
                      </Text>
                    </Flex>
                    {item.description && (
                      <Text size="2" color="gray">
                        {item.description}
                      </Text>
                    )}
                  </>
                )}
              </Flex>
            </Flex>

            {/* Horizontal connector - positioned between items */}
            {orientation === 'horizontal' && !isLast && (
              <Box 
                className="timeline-connector timeline-connector-horizontal"
                style={{ backgroundColor: 'var(--gray-6)' }}
              />
            )}
          </React.Fragment>
        );
      })}
    </Flex>
  );
};

export const TimelineItem: React.FC<TimelineItemData> = () => null;

