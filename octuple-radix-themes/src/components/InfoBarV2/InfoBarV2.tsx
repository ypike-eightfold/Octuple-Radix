import React from 'react';
import { Icon } from '../Icon';
import './InfoBarV2.css';

export type InfoBarV2Size = 'large' | 'medium' | 'mobile';
export type InfoBarV2Variant = 'neutral' | 'success' | 'warning' | 'error' | 'copilot' | 'ai-agent';

export interface InfoBarV2Props {
  /** Size of the info bar */
  size?: InfoBarV2Size;
  /** Visual variant - determines colors and icon */
  variant?: InfoBarV2Variant;
  /** Message text to display */
  message: string;
  /** Optional action button label */
  actionLabel?: string;
  /** Callback when action button is clicked */
  onAction?: () => void;
  /** Callback when close button is clicked */
  onClose?: () => void;
  /** Whether to show close button */
  showClose?: boolean;
  /** Additional CSS class */
  className?: string;
}

const VARIANT_ICONS: Record<Exclude<InfoBarV2Variant, 'copilot' | 'ai-agent'>, string> = {
  neutral: 'info',
  success: 'check_circle',
  warning: 'warning',
  error: 'error',
};

export const InfoBarV2: React.FC<InfoBarV2Props> = ({
  size = 'large',
  variant = 'neutral',
  message,
  actionLabel,
  onAction,
  onClose,
  showClose = true,
  className = '',
}) => {
  const sizeClass = `infobarv2--${size}`;
  const variantClass = `infobarv2--${variant}`;
  
  const iconName = VARIANT_ICONS[variant as Exclude<InfoBarV2Variant, 'copilot' | 'ai-agent'>];
  const iconSize = size === 'large' ? 24 : 20;

  return (
    <div className={`infobarv2 ${sizeClass} ${variantClass} ${className}`}>
      <div className="infobarv2__content">
        <div className="infobarv2__icon-and-text">
          {(variant === 'copilot' || variant === 'ai-agent') ? (
            <div className="infobarv2__icon infobarv2__icon--custom">
              {variant === 'copilot' ? (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 0L12.5 7.5L20 10L12.5 12.5L10 20L7.5 12.5L0 10L7.5 7.5L10 0Z" fill="url(#copilot-gradient)"/>
                  <defs>
                    <linearGradient id="copilot-gradient" x1="0" y1="0" x2="20" y2="20">
                      <stop offset="0%" stopColor="#5B8DEF"/>
                      <stop offset="50%" stopColor="#7B61FF"/>
                      <stop offset="100%" stopColor="#C961EE"/>
                    </linearGradient>
                  </defs>
                </svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="10" cy="10" r="8" fill="url(#ai-gradient)"/>
                  <defs>
                    <linearGradient id="ai-gradient" x1="0" y1="0" x2="20" y2="20">
                      <stop offset="0%" stopColor="#5B8DEF"/>
                      <stop offset="50%" stopColor="#7B61FF"/>
                      <stop offset="100%" stopColor="#C961EE"/>
                    </linearGradient>
                  </defs>
                </svg>
              )}
            </div>
          ) : (
            <Icon name={iconName} size={iconSize} className="infobarv2__icon" />
          )}
          <p className="infobarv2__message">{message}</p>
        </div>
        {actionLabel && (
          <div className="infobarv2__action">
            <button
              className={`infobarv2__button infobarv2__button--${size}`}
              onClick={onAction}
            >
              {actionLabel}
            </button>
          </div>
        )}
      </div>
      {showClose && (
        <div className="infobarv2__close">
          <button
            className={`infobarv2__button infobarv2__button--icon infobarv2__button--${size}`}
            onClick={onClose}
          >
            <Icon name="close" size={size === 'large' ? 24 : 20} />
          </button>
        </div>
      )}
    </div>
  );
};

