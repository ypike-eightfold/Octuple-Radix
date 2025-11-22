import React from 'react';
import * as RadixTabs from '@radix-ui/react-tabs';
import { StatV2Props, StatTabSize } from './StatTabsV2.types';
import { IconV2 } from '../IconV2';
import { ButtonV2 } from '../ButtonV2';
import { SpinnerV2 } from '../SpinnerV2';
import './StatTabsV2.css';

const MEDIUM_ICON_SIZE = 40;
const SMALL_ICON_SIZE = 32;
const XSMALL_ICON_SIZE = 24;

export const StatV2: React.FC<StatV2Props> = ({
  value,
  ariaLabel,
  icon,
  label,
  ratioA,
  ratioB,
  status,
  theme,
  disabled = false,
  loading = false,
  buttonProps,
  size = StatTabSize.Medium,
  direction = 'horizontal',
  fullWidth = false,
  lineClamp,
  maxWidth,
  statgrouptheme,
  readOnly = false,
  gradient = false,
  classNames = '',
  style,
  ...rest
}) => {
  const mergedTheme = theme ?? statgrouptheme;

  const iconSize =
    size === StatTabSize.Medium
      ? MEDIUM_ICON_SIZE
      : size === StatTabSize.Small
      ? SMALL_ICON_SIZE
      : XSMALL_ICON_SIZE;

  const buttonSize: 'large' | 'medium' | 'small' =
    size === StatTabSize.Medium
      ? 'large'
      : size === StatTabSize.Small
      ? 'medium'
      : 'small';

  const statClassNames = [
    'stat-v2',
    `stat-v2-${size}`,
    mergedTheme && `stat-v2-theme-${mergedTheme}`,
    status && `stat-v2-status-${status}`,
    direction === 'vertical' && 'stat-v2-vertical',
    fullWidth && direction === 'vertical' && 'stat-v2-full-width',
    gradient && 'stat-v2-gradient',
    readOnly && 'stat-v2-readonly',
    classNames,
  ]
    .filter(Boolean)
    .join(' ');

  const labelStyle = lineClamp
    ? {
        display: '-webkit-box',
        WebkitLineClamp: lineClamp,
        WebkitBoxOrient: 'vertical' as const,
        overflow: 'hidden',
      }
    : {};

  return (
    <RadixTabs.Trigger
      value={value}
      disabled={disabled || readOnly}
      className={statClassNames}
      aria-label={ariaLabel}
      style={{ ...style, maxWidth }}
      {...rest}
    >
      <div className="stat-v2-content">
        {/* Icon */}
        {icon && (
          <div className="stat-v2-icon-wrapper">
            <IconV2 name={icon} type="material" size={iconSize} />
          </div>
        )}

        {/* Label + Ratios */}
        <div className="stat-v2-text-wrapper">
          {label && (
            <span className="stat-v2-label" style={labelStyle}>
              {label}
            </span>
          )}
          <div className="stat-v2-ratios">
            {ratioA !== undefined && <span className="stat-v2-ratio-a">{ratioA}</span>}
            {ratioB !== undefined && <span className="stat-v2-ratio-b"> {ratioB}</span>}
          </div>
          {loading && (
            <div className="stat-v2-loader">
              <SpinnerV2 size="small" />
            </div>
          )}
        </div>

        {/* Button */}
        {buttonProps && (
          <div className="stat-v2-button-wrapper">
            <ButtonV2
              size={buttonSize}
              variant="neutral"
              shape="round"
              aria-label={buttonProps.ariaLabel}
              onClick={(e) => {
                e.stopPropagation();
                buttonProps.onClick?.(e);
              }}
            >
              {buttonProps.icon && <IconV2 name={buttonProps.icon} type="material" size={20} />}
            </ButtonV2>
          </div>
        )}
      </div>
    </RadixTabs.Trigger>
  );
};

