import React from 'react';
import { Flex, Text, Button } from '@radix-ui/themes';
import { Icon } from '../Icon';
import './Empty.css';

export interface EmptyProps {
  /**
   * Icon to display
   * @default 'inbox'
   */
  icon?: string;
  /**
   * Title text
   */
  title: string;
  /**
   * Description text
   */
  description?: string;
  /**
   * Action button label
   */
  actionLabel?: string;
  /**
   * Action button callback
   */
  onAction?: () => void;
  /**
   * Size variant
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
}

export const Empty: React.FC<EmptyProps> = ({
  icon = 'inbox',
  title,
  description,
  actionLabel,
  onAction,
  size = 'medium',
}) => {
  const iconSizes = {
    small: 48,
    medium: 64,
    large: 80,
  };

  const titleSizes = {
    small: '3' as const,
    medium: '5' as const,
    large: '6' as const,
  };

  const descSizes = {
    small: '1' as const,
    medium: '2' as const,
    large: '3' as const,
  };

  const gaps = {
    small: '2' as const,
    medium: '3' as const,
    large: '4' as const,
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap={gaps[size]}
      className={`empty-root empty-${size}`}
    >
      <Icon
        name={icon}
        size={iconSizes[size]}
        style={{ color: 'var(--gray-9)', opacity: 0.5 }}
      />
      
      <Flex direction="column" align="center" gap="1">
        <Text size={titleSizes[size]} weight="medium" align="center">
          {title}
        </Text>
        {description && (
          <Text size={descSizes[size]} color="gray" align="center">
            {description}
          </Text>
        )}
      </Flex>

      {actionLabel && onAction && (
        <Button onClick={onAction} size={size === 'small' ? '2' : '3'}>
          {actionLabel}
        </Button>
      )}
    </Flex>
  );
};

