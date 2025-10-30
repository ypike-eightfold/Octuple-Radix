import React from 'react';
import { Flex, Box, Text } from '@radix-ui/themes';
import { Icon } from '../Icon';
import './Stepper.css';

export interface StepItem {
  /**
   * Label for the step
   */
  label: string;
  /**
   * Optional description
   */
  description?: string;
  /**
   * Optional icon name
   */
  icon?: string;
}

export interface StepperProps {
  /**
   * Array of steps
   */
  steps: StepItem[];
  /**
   * Current active step (0-indexed)
   */
  currentStep: number;
  /**
   * Orientation
   * @default 'horizontal'
   */
  orientation?: 'horizontal' | 'vertical';
  /**
   * Whether steps are clickable
   * @default false
   */
  clickable?: boolean;
  /**
   * Callback when step is clicked (if clickable)
   */
  onStepClick?: (stepIndex: number) => void;
}

export const Stepper: React.FC<StepperProps> = ({
  steps,
  currentStep,
  orientation = 'horizontal',
  clickable = false,
  onStepClick,
}) => {
  const getStepStatus = (index: number): 'completed' | 'current' | 'upcoming' => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'current';
    return 'upcoming';
  };

  const handleStepClick = (index: number) => {
    if (clickable && onStepClick) {
      onStepClick(index);
    }
  };

  return (
    <Flex
      direction={orientation === 'horizontal' ? 'row' : 'column'}
      className={`stepper-root stepper-${orientation}`}
    >
      {steps.map((step, index) => {
        const status = getStepStatus(index);
        const isLast = index === steps.length - 1;

        return (
          <React.Fragment key={index}>
            <Flex
              className={`stepper-step stepper-step-${status} ${clickable ? 'stepper-step-clickable' : ''}`}
              onClick={() => handleStepClick(index)}
            >
              {/* Indicator wrapper - different structure for horizontal vs vertical */}
              {orientation === 'horizontal' ? (
                // Horizontal: Simple indicator without connector
                <Box className={`stepper-indicator stepper-indicator-${status}`}>
                  {status === 'completed' ? (
                    <Icon name="check" size={16} />
                  ) : step.icon ? (
                    <Icon name={step.icon} size={16} />
                  ) : (
                    <Text size="2" weight="bold">{index + 1}</Text>
                  )}
                </Box>
              ) : (
                // Vertical: Indicator wrapper with connector inside
                <Flex direction="column" align="center" className="stepper-indicator-wrapper">
                  <Box className={`stepper-indicator stepper-indicator-${status}`}>
                    {status === 'completed' ? (
                      <Icon name="check" size={16} />
                    ) : step.icon ? (
                      <Icon name={step.icon} size={16} />
                    ) : (
                      <Text size="2" weight="bold">{index + 1}</Text>
                    )}
                  </Box>
                  
                  {/* Vertical connector as sibling inside wrapper */}
                  {!isLast && (
                    <Box className={`stepper-connector stepper-connector-${
                      index < currentStep ? 'completed' : 'upcoming'
                    }`} />
                  )}
                </Flex>
              )}

              {/* Content separate from indicator */}
              <Flex direction="column" gap="1" className="stepper-content">
                <Text size="2" weight="medium" className={`stepper-label-${status}`}>
                  {step.label}
                </Text>
                {step.description && (
                  <Text size="1" color="gray">
                    {step.description}
                  </Text>
                )}
              </Flex>
            </Flex>

            {/* Horizontal connector - positioned between steps */}
            {orientation === 'horizontal' && !isLast && (
              <Box className={`stepper-connector stepper-connector-horizontal stepper-connector-${
                index < currentStep ? 'completed' : 'upcoming'
              }`} />
            )}
          </React.Fragment>
        );
      })}
    </Flex>
  );
};

