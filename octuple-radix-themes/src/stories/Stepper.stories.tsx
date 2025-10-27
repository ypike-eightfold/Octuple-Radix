import type { Meta, StoryObj } from '@storybook/react';
import { Stepper } from '../components/Stepper';
import { Box, Button, Flex } from '@radix-ui/themes';
import { useState } from 'react';

const meta = {
  title: 'Components/Stepper',
  component: Stepper,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Stepper>;

export default meta;
type Story = StoryObj<typeof meta>;

const steps = [
  { label: 'Account Details', description: 'Enter your information' },
  { label: 'Verification', description: 'Verify your email' },
  { label: 'Preferences', description: 'Set your preferences' },
  { label: 'Complete', description: 'Review and finish' },
];

export const Default = {
  render: () => (
    <Box style={{ width: '800px' }}>
      <Stepper steps={steps} currentStep={1} />
    </Box>
  ),
};

export const Interactive = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);

    return (
      <Flex direction="column" gap="5" style={{ width: '800px' }}>
        <Stepper steps={steps} currentStep={currentStep} />
        
        <Flex gap="3" justify="center">
          <Button
            variant="soft"
            onClick={() => setCurrentStep(Math.max(0, currentStep - 1))}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          <Button
            onClick={() => setCurrentStep(Math.min(steps.length - 1, currentStep + 1))}
            disabled={currentStep === steps.length - 1}
          >
            Next
          </Button>
        </Flex>
      </Flex>
    );
  },
};

export const Clickable = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);

    return (
      <Box style={{ width: '800px' }}>
        <Stepper
          steps={steps}
          currentStep={currentStep}
          clickable
          onStepClick={setCurrentStep}
        />
      </Box>
    );
  },
};

export const Vertical = {
  render: () => (
    <Box style={{ width: '400px' }}>
      <Stepper steps={steps} currentStep={2} orientation="vertical" />
    </Box>
  ),
};

export const WithIcons = {
  render: () => {
    const stepsWithIcons = [
      { label: 'Profile', description: 'Personal information', icon: 'person' },
      { label: 'Security', description: 'Password and 2FA', icon: 'lock' },
      { label: 'Billing', description: 'Payment method', icon: 'credit_card' },
      { label: 'Done', description: 'All set!', icon: 'check_circle' },
    ];

    return (
      <Box style={{ width: '800px' }}>
        <Stepper steps={stepsWithIcons} currentStep={1} />
      </Box>
    );
  },
};

export const VerticalClickable = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(1);

    return (
      <Box style={{ width: '400px' }}>
        <Stepper
          steps={steps}
          currentStep={currentStep}
          orientation="vertical"
          clickable
          onStepClick={setCurrentStep}
        />
      </Box>
    );
  },
};

