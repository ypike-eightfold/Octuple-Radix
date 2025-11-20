import React from 'react';
import { Icon } from '../Icon';
import { ButtonV2 } from '../ButtonV2';
import './StepperV2.css';

export type StepperV2Style =
  | 'full-horizontal'
  | 'mini-horizontal'
  | 'vertical'
  | 'mobile';

export type StepStatus = 'remaining' | 'current' | 'finished';

export interface StepItem {
  id: string;
  label: string;
  description?: string;
  optional?: boolean;
}

export interface StepperV2Props {
  style: StepperV2Style;
  steps: StepItem[];
  currentStep: number;
  onStepClick?: (stepIndex: number) => void;
  showPaginationControls?: boolean;
  onBack?: () => void;
  onNext?: () => void;
  onFinish?: () => void;
  allowClickableSteps?: boolean;
  className?: string;
}

const getStepStatus = (stepIndex: number, currentStep: number): StepStatus => {
  if (stepIndex < currentStep) return 'finished';
  if (stepIndex === currentStep) return 'current';
  return 'remaining';
};

const StepCircle: React.FC<{
  status: StepStatus;
  stepNumber: number;
  onClick?: () => void;
  clickable?: boolean;
}> = ({ status, stepNumber, onClick, clickable }) => {
  const handleClick = () => {
    if (clickable && onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`stepperv2__circle stepperv2__circle--${status}`}
      onClick={handleClick}
      disabled={!clickable}
      type="button"
      aria-label={`Step ${stepNumber}`}
    >
      {status === 'finished' ? (
        <Icon name="check" size={24} color="#054d7b" />
      ) : (
        <span className="stepperv2__number">{stepNumber}</span>
      )}
    </button>
  );
};

const StepConnector: React.FC<{ status: StepStatus; orientation: 'horizontal' | 'vertical' }> = ({
  status,
  orientation,
}) => {
  return (
    <div
      className={`stepperv2__connector stepperv2__connector--${orientation} stepperv2__connector--${status}`}
    />
  );
};

export const StepperV2: React.FC<StepperV2Props> = ({
  style,
  steps,
  currentStep,
  onStepClick,
  showPaginationControls = false,
  onBack,
  onNext,
  onFinish,
  allowClickableSteps = false,
  className = '',
}) => {
  const isLastStep = currentStep === steps.length - 1;

  const handleStepClick = (index: number) => {
    if (allowClickableSteps && onStepClick) {
      onStepClick(index);
    }
  };

  const renderFullHorizontal = () => (
    <div className={`stepperv2 stepperv2--full-horizontal ${className}`}>
      <div className="stepperv2__steps">
        {steps.map((step, index) => {
          const status = getStepStatus(index, currentStep);
          return (
            <div key={step.id} className="stepperv2__step">
              <div className="stepperv2__step-header">
                <StepCircle
                  status={status}
                  stepNumber={index + 1}
                  onClick={() => handleStepClick(index)}
                  clickable={allowClickableSteps}
                />
                {index < steps.length - 1 && (
                  <StepConnector status={status} orientation="horizontal" />
                )}
              </div>
              <p className="stepperv2__label">{step.label}</p>
            </div>
          );
        })}
      </div>
      {showPaginationControls && (
        <div className="stepperv2__controls">
          <ButtonV2
            variant="neutral"
            onClick={onBack}
            disabled={currentStep === 0}
          >
            Back
          </ButtonV2>
          {isLastStep ? (
            <ButtonV2 variant="primary" onClick={onFinish}>
              Finish
            </ButtonV2>
          ) : (
            <ButtonV2 variant="primary" onClick={onNext}>
              Next
            </ButtonV2>
          )}
        </div>
      )}
    </div>
  );

  const renderMiniHorizontal = () => (
    <div className={`stepperv2 stepperv2--mini-horizontal ${className}`}>
      <div className="stepperv2__steps">
        {steps.map((step, index) => {
          const status = getStepStatus(index, currentStep);
          const isCurrent = index === currentStep;
          return (
            <React.Fragment key={step.id}>
              <div className={`stepperv2__step ${isCurrent ? 'stepperv2__step--with-label' : ''}`}>
                <StepCircle
                  status={status}
                  stepNumber={index + 1}
                  onClick={() => handleStepClick(index)}
                  clickable={allowClickableSteps}
                />
                {isCurrent && <p className="stepperv2__label">{step.label}</p>}
              </div>
              {index < steps.length - 1 && (
                <StepConnector status={status} orientation="horizontal" />
              )}
            </React.Fragment>
          );
        })}
      </div>
      {showPaginationControls && (
        <div className="stepperv2__controls">
          <ButtonV2
            variant="neutral"
            onClick={onBack}
            disabled={currentStep === 0}
          >
            Back
          </ButtonV2>
          {isLastStep ? (
            <ButtonV2 variant="primary" onClick={onFinish}>
              Finish
            </ButtonV2>
          ) : (
            <ButtonV2 variant="primary" onClick={onNext}>
              Next
            </ButtonV2>
          )}
        </div>
      )}
    </div>
  );

  const renderVertical = () => (
    <div className={`stepperv2 stepperv2--vertical ${className}`}>
      <div className="stepperv2__steps">
        {steps.map((step, index) => {
          const status = getStepStatus(index, currentStep);
          return (
            <React.Fragment key={step.id}>
              <div className="stepperv2__step">
                <StepCircle
                  status={status}
                  stepNumber={index + 1}
                  onClick={() => handleStepClick(index)}
                  clickable={allowClickableSteps}
                />
                <p className="stepperv2__label">{step.label}</p>
              </div>
              {index < steps.length - 1 && (
                <StepConnector status={status} orientation="vertical" />
              )}
            </React.Fragment>
          );
        })}
      </div>
      {showPaginationControls && (
        <div className="stepperv2__controls">
          <ButtonV2
            variant="neutral"
            onClick={onBack}
            disabled={currentStep === 0}
          >
            Back
          </ButtonV2>
          {isLastStep ? (
            <ButtonV2 variant="primary" onClick={onFinish}>
              Finish
            </ButtonV2>
          ) : (
            <ButtonV2 variant="primary" onClick={onNext}>
              Next
            </ButtonV2>
          )}
        </div>
      )}
    </div>
  );

  const renderMobile = () => {
    const currentStepData = steps[currentStep];
    const nextStepData = currentStep < steps.length - 1 ? steps[currentStep + 1] : null;
    const status = getStepStatus(currentStep, currentStep);

    return (
      <div className={`stepperv2 stepperv2--mobile ${className}`}>
        <div className="stepperv2__mobile-content">
          <StepCircle
            status={status}
            stepNumber={currentStep + 1}
            onClick={() => handleStepClick(currentStep)}
            clickable={false}
          />
          <div className="stepperv2__mobile-text">
            <p className="stepperv2__mobile-title">{currentStepData.label}</p>
            {nextStepData && (
              <p className="stepperv2__mobile-subtitle">Next: {nextStepData.label}</p>
            )}
          </div>
        </div>
        {showPaginationControls && (
          <div className="stepperv2__controls">
            <ButtonV2
              variant="neutral"
              onClick={onBack}
              disabled={currentStep === 0}
            >
              Back
            </ButtonV2>
            {isLastStep ? (
              <ButtonV2 variant="primary" onClick={onFinish}>
                Finish
              </ButtonV2>
            ) : (
              <ButtonV2 variant="primary" onClick={onNext}>
                Next
              </ButtonV2>
            )}
          </div>
        )}
      </div>
    );
  };

  switch (style) {
    case 'full-horizontal':
      return renderFullHorizontal();
    case 'mini-horizontal':
      return renderMiniHorizontal();
    case 'vertical':
      return renderVertical();
    case 'mobile':
      return renderMobile();
    default:
      return null;
  }
};

StepperV2.displayName = 'StepperV2';

