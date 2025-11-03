import React, { useState, useRef, useCallback } from 'react';
import './SliderV2.css';

export interface SliderV2Props {
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Current value (single slider) */
  value?: number;
  /** Default value (single slider, uncontrolled) */
  defaultValue?: number;
  /** Range values [min, max] (range slider) */
  rangeValue?: [number, number];
  /** Default range values (range slider, uncontrolled) */
  defaultRangeValue?: [number, number];
  /** Step increment */
  step?: number;
  /** Show min/max labels */
  showLabels?: boolean;
  /** Show current value */
  showValue?: boolean;
  /** Disabled state */
  disabled?: boolean;
  /** Change handler for single slider */
  onChange?: (value: number) => void;
  /** Change handler for range slider */
  onRangeChange?: (value: [number, number]) => void;
  /** Additional CSS classes */
  className?: string;
}

export const SliderV2 = React.forwardRef<HTMLDivElement, SliderV2Props>(
  (
    {
      min = 0,
      max = 100,
      value: controlledValue,
      defaultValue = 0,
      rangeValue: controlledRangeValue,
      defaultRangeValue,
      step = 1,
      showLabels = true,
      showValue = true,
      disabled = false,
      onChange,
      onRangeChange,
      className = '',
    },
    ref
  ) => {
    const isRange = controlledRangeValue !== undefined || defaultRangeValue !== undefined;
    
    // Single slider state
    const [internalValue, setInternalValue] = useState(defaultValue);
    const currentValue = controlledValue !== undefined ? controlledValue : internalValue;

    // Range slider state
    const [internalRangeValue, setInternalRangeValue] = useState<[number, number]>(
      defaultRangeValue || [min, max * 0.36]
    );
    const currentRangeValue = controlledRangeValue !== undefined ? controlledRangeValue : internalRangeValue;

    const trackRef = useRef<HTMLDivElement>(null);
    const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);

    const getValueFromPosition = useCallback(
      (clientX: number) => {
        if (!trackRef.current) return min;
        
        const rect = trackRef.current.getBoundingClientRect();
        const percentage = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
        const rawValue = min + percentage * (max - min);
        const steppedValue = Math.round(rawValue / step) * step;
        return Math.max(min, Math.min(max, steppedValue));
      },
      [min, max, step]
    );

    const handleMouseDown = (handle: 'min' | 'max') => (e: React.MouseEvent) => {
      if (disabled) return;
      e.preventDefault();
      setIsDragging(handle);
    };

    const handleMouseMove = useCallback(
      (e: MouseEvent) => {
        if (!isDragging || disabled) return;

        const newValue = getValueFromPosition(e.clientX);

        if (isRange) {
          let newRange: [number, number] = [...currentRangeValue];
          
          if (isDragging === 'min') {
            newRange[0] = Math.min(newValue, currentRangeValue[1]);
          } else {
            newRange[1] = Math.max(newValue, currentRangeValue[0]);
          }

          if (controlledRangeValue === undefined) {
            setInternalRangeValue(newRange);
          }
          onRangeChange?.(newRange);
        } else {
          if (controlledValue === undefined) {
            setInternalValue(newValue);
          }
          onChange?.(newValue);
        }
      },
      [isDragging, disabled, isRange, currentValue, currentRangeValue, getValueFromPosition, onChange, onRangeChange, controlledValue, controlledRangeValue]
    );

    const handleMouseUp = useCallback(() => {
      setIsDragging(null);
    }, []);

    React.useEffect(() => {
      if (isDragging) {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        };
      }
    }, [isDragging, handleMouseMove, handleMouseUp]);

    const getPercentage = (value: number) => ((value - min) / (max - min)) * 100;

    return (
      <div ref={ref} className={`slider-v2 ${disabled ? 'slider-v2--disabled' : ''} ${className}`} style={{ position: 'relative' }}>
        <div className="slider-v2__track-container" ref={trackRef}>
          <div className="slider-v2__track-bg" />
          
          {isRange ? (
            <>
              <div
                className="slider-v2__track-fill"
                style={{
                  left: `${getPercentage(currentRangeValue[0])}%`,
                  width: `${getPercentage(currentRangeValue[1]) - getPercentage(currentRangeValue[0])}%`,
                }}
              />
              <button
                className="slider-v2__thumb"
                style={{ left: `${getPercentage(currentRangeValue[0])}%` }}
                onMouseDown={handleMouseDown('min')}
                disabled={disabled}
                type="button"
                aria-label={`Minimum value: ${currentRangeValue[0]}`}
              >
                <span className="slider-v2__thumb-icon"></span>
              </button>
              <button
                className="slider-v2__thumb"
                style={{ left: `${getPercentage(currentRangeValue[1])}%` }}
                onMouseDown={handleMouseDown('max')}
                disabled={disabled}
                type="button"
                aria-label={`Maximum value: ${currentRangeValue[1]}`}
              >
                <span className="slider-v2__thumb-icon"></span>
              </button>
            </>
          ) : (
            <>
              <div
                className="slider-v2__track-fill"
                style={{ width: `${getPercentage(currentValue)}%` }}
              />
              <button
                className="slider-v2__thumb"
                style={{ left: `${getPercentage(currentValue)}%` }}
                onMouseDown={handleMouseDown('max')}
                disabled={disabled}
                type="button"
                aria-label={`Value: ${currentValue}`}
              >
                <span className="slider-v2__thumb-icon"></span>
              </button>
            </>
          )}
        </div>

        {(showLabels || showValue) && (
          <div className="slider-v2__labels">
            {showLabels && <span className="slider-v2__label-min">{min}</span>}
            {showLabels && <span className="slider-v2__label-max">{max}</span>}
          </div>
        )}
        
        {showValue && !isRange && (
          <div 
            className="slider-v2__label-value" 
            style={{ 
              position: 'absolute',
              top: '32px',
              left: `${getPercentage(currentValue)}%`,
              transform: 'translateX(-50%)'
            }}
          >
            {currentValue}
          </div>
        )}
        
        {showValue && isRange && (
          <div 
            className="slider-v2__label-value" 
            style={{ 
              position: 'absolute',
              top: '32px',
              left: '50%',
              transform: 'translateX(-50%)'
            }}
          >
            {currentRangeValue[0]} - {currentRangeValue[1]}
          </div>
        )}
      </div>
    );
  }
);

SliderV2.displayName = 'SliderV2';

