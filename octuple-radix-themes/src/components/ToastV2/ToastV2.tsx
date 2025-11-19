import React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { Icon } from '../Icon';
import './ToastV2.css';

export interface ToastV2Action {
  label: string;
  onClick: () => void;
}

export type ToastV2Variant = 'neutral' | 'success' | 'error' | 'warning' | 'info';

export interface ToastV2Props {
  /** Toast message/description */
  message: string;
  /** Toast variant type */
  variant?: ToastV2Variant;
  /** Icon name (Material Design Icons) */
  icon?: string;
  /** Action button configuration */
  action?: ToastV2Action;
  /** Whether to show close button */
  showClose?: boolean;
  /** Duration before auto-dismiss (ms) */
  duration?: number;
  /** Open state (controlled mode) */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Callback when toast is closed */
  onClose?: () => void;
  /** Additional CSS class */
  className?: string;
}

const variantIcons: Record<ToastV2Variant, string> = {
  neutral: 'info',
  success: 'check_circle',
  error: 'error',
  warning: 'warning',
  info: 'info',
};

const variantColors: Record<ToastV2Variant, string> = {
  neutral: '#4f5666',  // Secondary grey
  success: '#2b715f',  // Secondary green
  error: '#a63232',    // Secondary red
  warning: '#a66f32',  // Secondary orange
  info: '#146da6',     // Secondary blue
};

export const ToastV2 = React.forwardRef<HTMLLIElement, ToastV2Props>(
  (
    {
      message,
      variant = 'neutral',
      icon,
      action,
      showClose = true,
      duration = 5000,
      open: controlledOpen,
      onOpenChange,
      onClose,
      className = '',
      ...props
    },
    ref
  ) => {
    const [internalOpen, setInternalOpen] = React.useState(true);
    
    // Use controlled or uncontrolled mode
    const open = controlledOpen !== undefined ? controlledOpen : internalOpen;
    const setOpen = onOpenChange || setInternalOpen;

    const handleOpenChange = (openState: boolean) => {
      setOpen(openState);
      if (!openState && onClose) {
        onClose();
      }
    };

    const displayIcon = icon || variantIcons[variant];
    const iconColor = variantColors[variant];

    return (
      <ToastPrimitive.Root
        ref={ref}
        className={`toastv2-root toastv2-root--${variant} ${className}`}
        open={open}
        onOpenChange={handleOpenChange}
        duration={duration}
        {...props}
      >
        <div className="toastv2-content">
          {/* Icon and text section */}
          <div className="toastv2-main">
            {displayIcon && (
              <div className="toastv2-icon" aria-hidden="true">
                <Icon name={displayIcon} size={20} color={iconColor} />
              </div>
            )}
            <ToastPrimitive.Description className="toastv2-message">
              {message}
            </ToastPrimitive.Description>
          </div>

          {/* Action button */}
          {action && (
            <ToastPrimitive.Action
              className="toastv2-action"
              altText={action.label}
              onClick={(e) => {
                e.preventDefault();
                action.onClick();
              }}
            >
              <button className="toastv2-button toastv2-button--action">
                <span className="toastv2-button__label">{action.label}</span>
              </button>
            </ToastPrimitive.Action>
          )}
        </div>

        {/* Close button */}
        {showClose && (
          <ToastPrimitive.Close className="toastv2-close">
            <button className="toastv2-button toastv2-button--close" aria-label="Close">
              <Icon name="close" size={16} color="#343c4c" />
            </button>
          </ToastPrimitive.Close>
        )}
      </ToastPrimitive.Root>
    );
  }
);

ToastV2.displayName = 'ToastV2';

// Export Radix primitives for provider and viewport
export const ToastV2Provider = ToastPrimitive.Provider;
export const ToastV2Viewport = ToastPrimitive.Viewport;

