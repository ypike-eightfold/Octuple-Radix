import React from 'react';
import { Icon } from '../Icon';
import './TimelineV2.css';

export type TimelineV2Status = 'completed' | 'active' | 'pending';
export type TimelineV2Orientation = 'vertical' | 'horizontal';
export type TimelineV2Size = 'large' | 'medium' | 'small';

export interface TimelineV2Item {
  /** Label for the step */
  label: string;
  /** Optional description */
  description?: string;
  /** Status of the step */
  status?: TimelineV2Status;
  /** Custom icon name (defaults based on status) */
  icon?: string;
}

export interface TimelineV2Props {
  /** Array of timeline items */
  items: TimelineV2Item[];
  /** Orientation of the timeline */
  orientation?: TimelineV2Orientation;
  /** Size variant */
  size?: TimelineV2Size;
  /** Current active step (0-indexed) */
  current?: number;
  /** Additional CSS class */
  className?: string;
}

const DashedConnector: React.FC<{ isLast?: boolean; orientation?: TimelineV2Orientation }> = ({ isLast, orientation = 'vertical' }) => {
  if (isLast) return null;
  
  if (orientation === 'horizontal') {
    return (
      <div className="timelinev2-connector timelinev2-connector--horizontal">
        <svg
          width="100%"
          height="2"
          viewBox="0 0 100 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <line
            x1="0"
            y1="1"
            x2="100"
            y2="1"
            stroke="#2C8CC9"
            strokeWidth="2"
            strokeDasharray="4 4"
          />
        </svg>
      </div>
    );
  }
  
  return (
    <div className="timelinev2-connector">
      <svg
        width="2"
        height="100%"
        viewBox="0 0 2 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <line
          x1="1"
          y1="0"
          x2="1"
          y2="60"
          stroke="#2C8CC9"
          strokeWidth="2"
          strokeDasharray="4 4"
        />
      </svg>
    </div>
  );
};

export const TimelineV2 = React.forwardRef<HTMLDivElement, TimelineV2Props>(
  (
    {
      items,
      orientation = 'vertical',
      size = 'medium',
      current,
      className = '',
      ...props
    },
    ref
  ) => {
    const getItemStatus = (index: number, item: TimelineV2Item): TimelineV2Status => {
      // If status is explicitly set, use it
      if (item.status) return item.status;
      
      // Otherwise, derive from current prop
      if (current !== undefined) {
        if (index < current) return 'completed';
        if (index === current) return 'active';
        return 'pending';
      }
      
      // Default to pending
      return 'pending';
    };

    const getIconName = (status: TimelineV2Status, customIcon?: string): string => {
      if (customIcon) return customIcon;
      
      switch (status) {
        case 'completed':
          return 'check_circle';
        case 'active':
          return 'check_circle';
        case 'pending':
          return 'radio_button_unchecked';
        default:
          return 'radio_button_unchecked';
      }
    };

    return (
      <div
        ref={ref}
        className={`timelinev2-root timelinev2-root--${orientation} timelinev2-root--${size} ${className}`}
        role="list"
        aria-label="Timeline"
        {...props}
      >
        {items.map((item, index) => {
          const status = getItemStatus(index, item);
          const iconName = getIconName(status, item.icon);
          const isLast = index === items.length - 1;

          return (
            <div
              key={index}
              className="timelinev2-item"
              role="listitem"
              aria-current={status === 'active' ? 'step' : undefined}
            >
              <div className="timelinev2-marker">
                <div
                  className={`timelinev2-icon timelinev2-icon--${status}`}
                  aria-hidden="true"
                >
                  <Icon name={iconName} size={16} />
                </div>
                <DashedConnector isLast={isLast} orientation={orientation} />
              </div>

              <div className="timelinev2-content">
                <div className="timelinev2-label">{item.label}</div>
                {item.description && (
                  <div className="timelinev2-description">{item.description}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

TimelineV2.displayName = 'TimelineV2';

