import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { ButtonV2 } from '../ButtonV2';
import { Icon } from '../Icon';
import './PanelFloatV2.css';

export type PanelFloatV2Size = 'small' | 'medium' | 'large';

export interface PanelFloatV2Props {
  /** Size of the panel */
  size?: PanelFloatV2Size;
  /** Whether the panel is open */
  open?: boolean;
  /** Callback when open state changes */
  onOpenChange?: (open: boolean) => void;
  /** Header title */
  title?: string;
  /** Header support text */
  supportText?: string;
  /** Whether to show icon in header */
  showIcon?: boolean;
  /** Custom icon name (Material Design icon) */
  iconName?: string;
  /** Whether to show number badge */
  showNumberBadge?: boolean;
  /** Number to display in badge */
  badgeNumber?: number;
  /** Whether to show extra header buttons */
  showExtraButtons?: boolean;
  /** Whether to show line divider in header */
  showHeaderDivider?: boolean;
  /** Whether to show line divider in footer */
  showFooterDivider?: boolean;
  /** Content to render in body */
  children?: React.ReactNode;
  /** Cancel button label */
  cancelLabel?: string;
  /** Done button label */
  doneLabel?: string;
  /** Callback when cancel is clicked */
  onCancel?: () => void;
  /** Callback when done is clicked */
  onDone?: () => void;
  /** Additional class name */
  className?: string;
}

export const PanelFloatV2: React.FC<PanelFloatV2Props> = ({
  size = 'medium',
  open,
  onOpenChange,
  title = 'Header text',
  supportText,
  showIcon = false,
  iconName = 'description',
  showNumberBadge = false,
  badgeNumber = 8,
  showExtraButtons = false,
  showHeaderDivider = false,
  showFooterDivider = false,
  children,
  cancelLabel = 'Cancel',
  doneLabel = 'Done',
  onCancel,
  onDone,
  className = '',
}) => {
  const handleCancel = () => {
    onCancel?.();
    onOpenChange?.(false);
  };

  const handleDone = () => {
    onDone?.();
    onOpenChange?.(false);
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="panelfloatv2-overlay" />
        <Dialog.Content
          className={`panelfloatv2-content panelfloatv2-content--${size} ${className}`}
        >
          {/* Header */}
          <div className="panelfloatv2-header">
            <div className="panelfloatv2-header-content">
              <div className="panelfloatv2-header-left">
                {showIcon && (
                  <Icon name={iconName} className="panelfloatv2-header-icon" />
                )}
                <div className="panelfloatv2-header-text">
                  <div className="panelfloatv2-header-title-row">
                    <Dialog.Title className="panelfloatv2-title">
                      {title}
                    </Dialog.Title>
                    {showNumberBadge && (
                      <div className="panelfloatv2-number-badge">
                        {badgeNumber}
                      </div>
                    )}
                  </div>
                  {supportText && (
                    <Dialog.Description className="panelfloatv2-support-text">
                      {supportText}
                    </Dialog.Description>
                  )}
                </div>
              </div>
              <div className="panelfloatv2-header-buttons">
                {showExtraButtons && (
                  <>
                    <ButtonV2 variant="neutral" size="medium">
                      <Icon name="add" />
                    </ButtonV2>
                    <ButtonV2 variant="neutral" size="medium">
                      <Icon name="add" />
                    </ButtonV2>
                  </>
                )}
                <Dialog.Close asChild>
                  <ButtonV2 variant="neutral" size="medium">
                    <Icon name="close" />
                  </ButtonV2>
                </Dialog.Close>
              </div>
            </div>
            {showHeaderDivider && <div className="panelfloatv2-divider" />}
          </div>

          {/* Body */}
          <div className="panelfloatv2-body">
            {children || (
              <div className="panelfloatv2-placeholder">
                Replace this with your own page level component or DS component
              </div>
            )}
          </div>

          {/* Footer */}
          <div className="panelfloatv2-footer">
            {showFooterDivider && <div className="panelfloatv2-divider" />}
            <div className="panelfloatv2-footer-content">
              <div className="panelfloatv2-button-bar">
                <ButtonV2 variant="neutral" size="medium" onClick={handleCancel}>
                  {cancelLabel}
                </ButtonV2>
                <ButtonV2 variant="primary" size="medium" onClick={handleDone}>
                  {doneLabel}
                </ButtonV2>
              </div>
            </div>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

