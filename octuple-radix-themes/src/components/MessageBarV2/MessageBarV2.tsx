import React from 'react';
import { Icon } from '../Icon';
import { LinkV2 } from '../LinkV2';
import './MessageBarV2.css';

export type MessageBarV2Variant = 'neutral' | 'success' | 'warning' | 'error';

export interface MessageBarV2Props {
  /**
   * Visual variant of the message bar
   * @default 'neutral'
   */
  variant?: MessageBarV2Variant;
  /**
   * Header text (Gilroy SemiBold, 20px)
   */
  header: string;
  /**
   * Body message text (Gilroy Medium, 18px)
   */
  message: string | React.ReactNode;
  /**
   * Optional link text
   */
  linkText?: string;
  /**
   * Optional link URL (for external links)
   */
  linkHref?: string;
  /**
   * Optional link click handler
   */
  onLinkClick?: () => void;
  /**
   * Close button handler
   */
  onClose?: () => void;
  /**
   * Show/hide close button
   * @default true
   */
  showCloseButton?: boolean;
  /**
   * Additional CSS class name
   */
  className?: string;
}

const VARIANT_CONFIG: Record<
  MessageBarV2Variant,
  { icon: string; backgroundColor: string; borderColor: string; iconColor: string }
> = {
  neutral: {
    icon: 'info',
    backgroundColor: '#d9dce1',
    borderColor: '#343c4c',
    iconColor: '#343c4c',
  },
  success: {
    icon: 'check_circle',
    backgroundColor: '#e3f5db',
    borderColor: '#205000',
    iconColor: '#205000',
  },
  warning: {
    icon: 'warning',
    backgroundColor: '#ffe3b0',
    borderColor: '#6c4500',
    iconColor: '#6c4500',
  },
  error: {
    icon: 'error',
    backgroundColor: '#ffe3e3',
    borderColor: '#8a0000',
    iconColor: '#8a0000',
  },
};

export const MessageBarV2: React.FC<MessageBarV2Props> = ({
  variant = 'neutral',
  header,
  message,
  linkText,
  linkHref,
  onLinkClick,
  onClose,
  showCloseButton = true,
  className = '',
}) => {
  const config = VARIANT_CONFIG[variant];

  return (
    <div
      className={`messagebarv2 messagebarv2--${variant} ${className}`}
      style={{ backgroundColor: config.backgroundColor }}
    >
      <div
        className="messagebarv2__border"
        style={{ backgroundColor: config.borderColor }}
      />
      <div className="messagebarv2__content">
        <div className="messagebarv2__layout">
          <div className="messagebarv2__icon-wrapper">
            <Icon
              name={config.icon}
              size={24}
              color={config.iconColor}
              className="messagebarv2__icon"
            />
          </div>
          <div className="messagebarv2__main">
            <div className="messagebarv2__header-row">
              <h4 className="messagebarv2__header">{header}</h4>
              {showCloseButton && onClose && (
                <button
                  className="messagebarv2__close-button"
                  onClick={onClose}
                  aria-label="Close message"
                  type="button"
                >
                  <Icon name="close" size={16} color="#343c4c" />
                </button>
              )}
            </div>
            <div className="messagebarv2__message">{message}</div>
            {linkText && (
              <div className="messagebarv2__link-wrapper">
                {linkHref ? (
                  <LinkV2 href={linkHref} size="large" className="messagebarv2__link">
                    {linkText}
                    <Icon name="chevron_right" size={24} color="#1a212e" />
                  </LinkV2>
                ) : (
                  <button
                    className="messagebarv2__link-button"
                    onClick={onLinkClick}
                    type="button"
                  >
                    <span className="messagebarv2__link-text">{linkText}</span>
                    <Icon name="chevron_right" size={24} color="#1a212e" />
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

MessageBarV2.displayName = 'MessageBarV2';

