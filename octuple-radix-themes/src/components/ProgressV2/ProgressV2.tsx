import React from 'react';
import * as ProgressPrimitive from '@radix-ui/react-progress';
import './ProgressV2.css';

export type ProgressV2Style = 'segmented' | 'smooth';
export type ProgressV2Size = 'large' | 'medium' | 'small';

export interface ProgressV2Props {
  /** Current progress value (0-100) */
  value?: number;
  /** Maximum value */
  max?: number;
  /** Progress style */
  style?: ProgressV2Style;
  /** Size variant */
  size?: ProgressV2Size;
  /** Show label with percentage */
  showLabel?: boolean;
  /** Custom label text (overrides default percentage) */
  label?: string;
  /** Number of segments for segmented style */
  segments?: number;
  /** Additional CSS class */
  className?: string;
}

export const ProgressV2 = React.forwardRef<HTMLDivElement, ProgressV2Props>(
  (
    {
      value = 0,
      max = 100,
      style = 'segmented',
      size = 'medium',
      showLabel = true,
      label,
      segments = 5,
      className = '',
      ...props
    },
    ref
  ) => {
    // Normalize value to 0-100 range
    const percentage = Math.min(Math.max((value / max) * 100, 0), 100);
    
    // Calculate filled segments for segmented style
    const filledSegments = Math.floor((percentage / 100) * segments);
    const partialSegment = ((percentage / 100) * segments) % 1;

    const displayLabel = label || `${Math.round(percentage)}% complete`;

    return (
      <div
        ref={ref}
        className={`progressv2-container progressv2-container--${size} ${className}`}
        {...props}
      >
        <ProgressPrimitive.Root
          className={`progressv2-root progressv2-root--${style} progressv2-root--${size}`}
          value={value}
          max={max}
        >
          {style === 'segmented' ? (
            <div className="progressv2-segments">
              {Array.from({ length: segments }).map((_, index) => {
                const isFilled = index < filledSegments;
                const isPartial = index === filledSegments && partialSegment > 0;
                const fillPercentage = isPartial ? partialSegment * 100 : 0;

                return (
                  <div
                    key={index}
                    className={`progressv2-segment ${
                      isFilled ? 'progressv2-segment--filled' : ''
                    } ${isPartial ? 'progressv2-segment--partial' : ''}`}
                    style={
                      isPartial
                        ? { '--fill-percentage': `${fillPercentage}%` } as React.CSSProperties
                        : undefined
                    }
                  >
                    <div className="progressv2-segment__fill" />
                  </div>
                );
              })}
            </div>
          ) : (
            <ProgressPrimitive.Indicator
              className="progressv2-indicator"
              style={{ transform: `translateX(-${100 - percentage}%)` }}
            />
          )}
        </ProgressPrimitive.Root>

        {showLabel && (
          <div className="progressv2-label">
            <span className="progressv2-label__text">{displayLabel}</span>
          </div>
        )}
      </div>
    );
  }
);

ProgressV2.displayName = 'ProgressV2';

