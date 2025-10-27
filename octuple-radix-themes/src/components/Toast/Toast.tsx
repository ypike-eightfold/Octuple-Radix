import React from 'react';
import * as ToastPrimitive from '@radix-ui/react-toast';
import { Icon } from '../Icon';
import './Toast.css';

export interface ToastProps {
  /**
   * Toast title
   */
  title?: string;
  /**
   * Toast description/message
   */
  description: string;
  /**
   * Toast variant
   */
  variant?: 'success' | 'error' | 'warning' | 'info' | 'default';
  /**
   * Duration before auto-dismiss (ms)
   * @default 5000
   */
  duration?: number;
  /**
   * Action button text
   */
  action?: {
    label: string;
    onClick: () => void;
  };
  /**
   * Callback when toast is closed
   */
  onClose?: () => void;
}

const variantIcons = {
  success: 'check_circle',
  error: 'error',
  warning: 'warning',
  info: 'info',
  default: 'notifications',
};

const variantColors = {
  success: 'var(--green-9)',
  error: 'var(--red-9)',
  warning: 'var(--orange-9)',
  info: 'var(--blue-9)',
  default: 'var(--gray-11)',
};

export const Toast = React.forwardRef<
  HTMLLIElement,
  ToastProps & { open: boolean; onOpenChange: (open: boolean) => void }
>(({ title, description, variant = 'default', duration = 5000, action, onClose, open, onOpenChange }, ref) => {
  const iconName = variantIcons[variant];
  const iconColor = variantColors[variant];

  return (
    <ToastPrimitive.Root
      ref={ref}
      className={`toast-root toast-${variant}`}
      open={open}
      onOpenChange={(openState) => {
        onOpenChange(openState);
        if (!openState && onClose) {
          onClose();
        }
      }}
      duration={duration}
    >
      <div className="toast-content">
        <div className="toast-icon">
          <Icon name={iconName} size={20} color={iconColor} />
        </div>
        <div className="toast-text">
          {title && <ToastPrimitive.Title className="toast-title">{title}</ToastPrimitive.Title>}
          <ToastPrimitive.Description className="toast-description">
            {description}
          </ToastPrimitive.Description>
        </div>
        {action && (
          <ToastPrimitive.Action
            className="toast-action"
            altText={action.label}
            onClick={action.onClick}
          >
            {action.label}
          </ToastPrimitive.Action>
        )}
        <ToastPrimitive.Close className="toast-close">
          <Icon name="close" size={16} />
        </ToastPrimitive.Close>
      </div>
    </ToastPrimitive.Root>
  );
});

Toast.displayName = 'Toast';

export const ToastViewport = ToastPrimitive.Viewport;
export const ToastProvider = ToastPrimitive.Provider;

