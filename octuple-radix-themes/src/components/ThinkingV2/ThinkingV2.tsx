import React from 'react';
import './ThinkingV2.css';

export interface ThinkingV2Props {
  /**
   * Color of the dots
   * @default '#69717F'
   */
  color?: string;
  /**
   * Size of the component
   * @default 'medium'
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Custom size for the dots (overrides size prop)
   */
  dotSize?: number;
  /**
   * Custom spacing between dots
   */
  spacing?: number;
  /**
   * Accessible label for screen readers
   */
  ariaLabel?: string;
  /**
   * Additional CSS class
   */
  className?: string;
}

const SIZE_MAP = {
  small: { dotSize: 4, spacing: 4 },
  medium: { dotSize: 6, spacing: 6 },
  large: { dotSize: 8, spacing: 8 },
};

export const ThinkingV2: React.FC<ThinkingV2Props> = ({
  color = '#69717F',
  size = 'medium',
  dotSize: customDotSize,
  spacing: customSpacing,
  ariaLabel = 'Loading',
  className = '',
}) => {
  const sizeConfig = SIZE_MAP[size];
  const dotSize = customDotSize ?? sizeConfig.dotSize;
  const spacing = customSpacing ?? sizeConfig.spacing;

  // Calculate total width: 3 dots + 2 gaps
  const width = dotSize * 3 + spacing * 2;
  const height = dotSize;

  return (
    <div
      className={`thinkingv2 ${className}`}
      style={{
        width: `${width}px`,
        height: `${height}px`,
      }}
      role="status"
      aria-label={ariaLabel}
    >
      <div
        className="thinkingv2__dot thinkingv2__dot--1"
        style={{
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          backgroundColor: color,
        }}
      />
      <div
        className="thinkingv2__dot thinkingv2__dot--2"
        style={{
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          backgroundColor: color,
          marginLeft: `${spacing}px`,
        }}
      />
      <div
        className="thinkingv2__dot thinkingv2__dot--3"
        style={{
          width: `${dotSize}px`,
          height: `${dotSize}px`,
          backgroundColor: color,
          marginLeft: `${spacing}px`,
        }}
      />
      <span className="thinkingv2__sr-only">{ariaLabel}</span>
    </div>
  );
};

export default ThinkingV2;

