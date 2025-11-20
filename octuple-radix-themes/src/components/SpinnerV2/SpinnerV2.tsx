import React from 'react';
import './SpinnerV2.css';

export type SpinnerV2Size = 'small' | 'medium' | 'large';

export interface SpinnerV2Props {
  /** Size of the spinner */
  size?: SpinnerV2Size;
  /** Custom size in pixels (overrides size prop) */
  customSize?: number;
  /** Color of the spinner */
  color?: string;
  /** Additional CSS class */
  className?: string;
  /** Aria label for accessibility */
  ariaLabel?: string;
}

const SIZE_MAP: Record<SpinnerV2Size, number> = {
  small: 16,
  medium: 24,
  large: 32,
};

/**
 * SpinnerV2 Component
 * 
 * A circular loading spinner with rotation animation.
 * Based on Figma design specifications.
 * 
 * @example
 * ```tsx
 * <SpinnerV2 size="medium" />
 * <SpinnerV2 customSize={40} color="#2C8CC9" />
 * ```
 */
export const SpinnerV2: React.FC<SpinnerV2Props> = ({
  size = 'medium',
  customSize,
  color = '#2C8CC9',
  className = '',
  ariaLabel = 'Loading',
}) => {
  const spinnerSize = customSize || SIZE_MAP[size];

  return (
    <div
      className={`spinnerv2 ${className}`}
      role="status"
      aria-label={ariaLabel}
      style={{
        width: spinnerSize,
        height: spinnerSize,
      }}
    >
      <svg
        className="spinnerv2__svg"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: spinnerSize, height: spinnerSize }}
      >
        <circle
          className="spinnerv2__circle"
          cx="12"
          cy="12"
          r="10"
          fill="none"
          stroke={color}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="50 150"
        />
      </svg>
      <span className="spinnerv2__sr-only">{ariaLabel}</span>
    </div>
  );
};

SpinnerV2.displayName = 'SpinnerV2';

