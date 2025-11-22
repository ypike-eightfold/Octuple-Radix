import React from 'react';
import './SkeletonV2.css';

export enum SkeletonVariant {
  Circular = 'circular',
  Rounded = 'rounded',
  Pill = 'pill',
  Rectangular = 'rectangular',
  ButtonSmall = 'button-small',
  ButtonMedium = 'button-medium',
  ButtonLarge = 'button-large',
}

export enum SkeletonAnimation {
  Pulse = 'pulse',
  Wave = 'wave',
}

export interface SkeletonV2Props {
  /** Width of the skeleton */
  width?: number | string;
  /** Height of the skeleton */
  height?: number | string;
  /** Full width skeleton */
  fullWidth?: boolean;
  /** Skeleton variant/shape */
  variant?: SkeletonVariant;
  /** Animation type */
  animation?: SkeletonAnimation;
  /** Whether animation is active */
  animating?: boolean;
  /** Children to wrap (skeleton overlays when animating) */
  children?: React.ReactNode;
  /** Additional CSS class */
  className?: string;
  /** Style */
  style?: React.CSSProperties;
  /** Test ID */
  'data-test-id'?: string;
}

const IGNORE_CUSTOM_HEIGHT_VARIANTS = [
  SkeletonVariant.ButtonSmall,
  SkeletonVariant.ButtonMedium,
  SkeletonVariant.ButtonLarge,
];

export const SkeletonV2 = React.forwardRef<HTMLDivElement, SkeletonV2Props>(
  (
    {
      className = '',
      style,
      width,
      height,
      fullWidth = false,
      variant = SkeletonVariant.Rectangular,
      animation = SkeletonAnimation.Wave,
      animating = true,
      children,
      'data-test-id': dataTestId,
    },
    ref
  ) => {
    const skeletonClasses = [
      'skeleton-v2',
      animation === SkeletonAnimation.Pulse && animating ? 'skeleton-v2-pulse' : '',
      animation === SkeletonAnimation.Wave && animating ? 'skeleton-v2-wave' : '',
      variant === SkeletonVariant.Circular ? 'skeleton-v2-circular' : '',
      variant === SkeletonVariant.Pill ? 'skeleton-v2-pill' : '',
      variant === SkeletonVariant.Rounded ? 'skeleton-v2-rounded' : '',
      variant === SkeletonVariant.ButtonSmall ? 'skeleton-v2-button-small' : '',
      variant === SkeletonVariant.ButtonMedium ? 'skeleton-v2-button-medium' : '',
      variant === SkeletonVariant.ButtonLarge ? 'skeleton-v2-button-large' : '',
      fullWidth ? 'skeleton-v2-full-width' : '',
      children ? 'skeleton-v2-children' : '',
      className,
    ]
      .filter(Boolean)
      .join(' ');

    const customStyle: React.CSSProperties = {
      ...style,
      ...(!fullWidth && width ? { width } : {}),
      ...(!IGNORE_CUSTOM_HEIGHT_VARIANTS.includes(variant) && height ? { height } : {}),
    };

    const skeleton = (
      <div
        ref={ref}
        className={skeletonClasses}
        tabIndex={-1}
        data-test-id={dataTestId}
        style={customStyle}
      />
    );

    if (children) {
      return (
        <div className="skeleton-v2-container">
          {children}
          {animating && skeleton}
        </div>
      );
    }

    return skeleton;
  }
);

SkeletonV2.displayName = 'SkeletonV2';

