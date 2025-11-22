import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ButtonV2 } from '../ButtonV2/ButtonV2';
import { CheckboxV2 } from '../CheckboxV2/CheckboxV2';
import { Icon } from '../Icon/Icon';
import './DialogV2.css';

export type DialogV2Size = 'small' | 'medium';
export type DialogV2Usage = 'default' | 'disruptive';

export interface DialogV2Props {
  /** Whether the dialog is open */
  open: boolean;
  /** Callback when open state changes */
  onOpenChange: (open: boolean) => void;
  /** Size of the dialog */
  size?: DialogV2Size;
  /** Usage type - determines button color */
  usage?: DialogV2Usage;
  /** Dialog title */
  title: string;
  /** Dialog body content */
  description: string | React.ReactNode;
  /** Label for confirmation checkbox (if provided, checkbox will be shown) */
  confirmationLabel?: string;
  /** Whether confirmation checkbox is checked */
  confirmationChecked?: boolean;
  /** Callback when confirmation checkbox changes */
  onConfirmationChange?: (checked: boolean) => void;
  /** Label for cancel button */
  cancelLabel?: string;
  /** Label for confirm button */
  confirmLabel?: string;
  /** Callback when cancel button is clicked */
  onCancel?: () => void;
  /** Callback when confirm button is clicked */
  onConfirm?: () => void;
  /** Custom class name */
  className?: string;
}

export const DialogV2: React.FC<DialogV2Props> = ({
  open,
  onOpenChange,
  size = 'small',
  usage = 'default',
  title,
  description,
  confirmationLabel,
  confirmationChecked = false,
  onConfirmationChange,
  cancelLabel = 'Label',
  confirmLabel = 'Label',
  onCancel,
  onConfirm,
  className = '',
}) => {
  const sizeClass = `dialogv2-content--${size}`;
  const confirmButtonVariant = usage === 'disruptive' ? 'disruptive-primary' : 'primary';

  const handleCancel = () => {
    onCancel?.();
    onOpenChange(false);
  };

  const handleConfirm = () => {
    onConfirm?.();
    onOpenChange(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="dialogv2-overlay" />
        <Dialog.Content className={`dialogv2-content ${sizeClass} ${className}`}>
          <div className="dialogv2-inner">
            {/* Header */}
            <div className="dialogv2-header">
              <Dialog.Title className="dialogv2-title">
                {title}
              </Dialog.Title>
              <Dialog.Close asChild>
                <button
                  className="dialogv2-close-button"
                  aria-label="Close dialog"
                >
                  <Icon name="close" size={20} />
                </button>
              </Dialog.Close>
            </div>

            {/* Description */}
            <Dialog.Description className="dialogv2-description">
              {description}
            </Dialog.Description>

            {/* Optional Confirmation Checkbox */}
            {confirmationLabel && (
              <div className="dialogv2-confirmation">
                <CheckboxV2
                  size="medium"
                  checked={confirmationChecked}
                  onChange={(e) => onConfirmationChange?.(e.target.checked)}
                />
                <span className="dialogv2-confirmation-label">
                  {confirmationLabel}
                </span>
              </div>
            )}

            {/* Buttons */}
            <div className="dialogv2-buttons">
              <ButtonV2
                variant="neutral"
                size="medium"
                onClick={handleCancel}
              >
                {cancelLabel}
              </ButtonV2>
              <ButtonV2
                variant={confirmButtonVariant}
                size="medium"
                onClick={handleConfirm}
              >
                {confirmLabel}
              </ButtonV2>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

