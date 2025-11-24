import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { StepperV2, StepperV2Props } from '../components/StepperV2';

const meta: Meta<typeof StepperV2> = {
  title: 'Octuple V2.5/Stepper',
  component: StepperV2,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A custom stepper component for displaying multi-step processes with various layout styles.',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof StepperV2>;

const sampleSteps = [
  { id: '1', label: 'Step Label' },
  { id: '2', label: 'Step Label' },
  { id: '3', label: 'Step Label' },
  { id: '4', label: 'Step Label' },
  { id: '5', label: 'Step Label' },
];

const workflowSteps = [
  { id: '1', label: 'Personal Info' },
  { id: '2', label: 'Work Experience' },
  { id: '3', label: 'Education' },
  { id: '4', label: 'Skills' },
  { id: '5', label: 'Review' },
];

const mobileSteps = [
  { id: '1', label: 'Military Services' },
  { id: '2', label: 'Other Experiences' },
  { id: '3', label: 'Education' },
  { id: '4', label: 'Certifications' },
];

/**
 * Full Horizontal Stepper - Default style with labels below circles
 */
export const FullHorizontal: Story = {
  args: {
    style: 'full-horizontal',
    steps: sampleSteps,
    currentStep: 2,
    allowClickableSteps: false,
  },
};

/**
 * Full Horizontal Stepper with Pagination Controls
 */
export const FullHorizontalWithControls: Story = {
  args: {
    style: 'full-horizontal',
    steps: sampleSteps,
    currentStep: 2,
    showPaginationControls: true,
    onBack: () => console.log('Back clicked'),
    onNext: () => console.log('Next clicked'),
    onFinish: () => console.log('Finish clicked'),
  },
};

/**
 * Mini Horizontal Stepper - Compact style with current step label only
 */
export const MiniHorizontal: Story = {
  args: {
    style: 'mini-horizontal',
    steps: sampleSteps,
    currentStep: 2,
  },
};

/**
 * Mini Horizontal Stepper with Pagination Controls
 */
export const MiniHorizontalWithControls: Story = {
  args: {
    style: 'mini-horizontal',
    steps: sampleSteps,
    currentStep: 2,
    showPaginationControls: true,
    onBack: () => console.log('Back clicked'),
    onNext: () => console.log('Next clicked'),
    onFinish: () => console.log('Finish clicked'),
  },
};

/**
 * Vertical Stepper - For sidebar layouts
 */
export const Vertical: Story = {
  args: {
    style: 'vertical',
    steps: sampleSteps,
    currentStep: 2,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Vertical Stepper with Pagination Controls
 */
export const VerticalWithControls: Story = {
  args: {
    style: 'vertical',
    steps: sampleSteps,
    currentStep: 2,
    showPaginationControls: true,
    onBack: () => console.log('Back clicked'),
    onNext: () => console.log('Next clicked'),
    onFinish: () => console.log('Finish clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '300px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Mobile Stepper - Optimized for mobile screens
 */
export const Mobile: Story = {
  args: {
    style: 'mobile',
    steps: mobileSteps,
    currentStep: 0,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '420px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Mobile Stepper with Pagination Controls
 */
export const MobileWithControls: Story = {
  args: {
    style: 'mobile',
    steps: mobileSteps,
    currentStep: 0,
    showPaginationControls: true,
    onBack: () => console.log('Back clicked'),
    onNext: () => console.log('Next clicked'),
    onFinish: () => console.log('Finish clicked'),
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '420px' }}>
        <Story />
      </div>
    ),
  ],
};

/**
 * Interactive Stepper - Full Horizontal with navigation
 */
export const InteractiveFullHorizontal: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleBack = () => {
      setCurrentStep((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
      setCurrentStep((prev) => Math.min(workflowSteps.length - 1, prev + 1));
    };

    const handleFinish = () => {
      alert('Workflow completed!');
      setCurrentStep(0);
    };

    return (
      <div>
        <h3>Resume Builder Workflow</h3>
        <StepperV2
          style="full-horizontal"
          steps={workflowSteps}
          currentStep={currentStep}
          showPaginationControls
          onBack={handleBack}
          onNext={handleNext}
          onFinish={handleFinish}
        />
      </div>
    );
  },
};

/**
 * Interactive Stepper - Mini Horizontal with navigation
 */
export const InteractiveMiniHorizontal: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleBack = () => {
      setCurrentStep((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
      setCurrentStep((prev) => Math.min(workflowSteps.length - 1, prev + 1));
    };

    const handleFinish = () => {
      alert('Workflow completed!');
      setCurrentStep(0);
    };

    return (
      <div>
        <h3>Compact Resume Builder</h3>
        <StepperV2
          style="mini-horizontal"
          steps={workflowSteps}
          currentStep={currentStep}
          showPaginationControls
          onBack={handleBack}
          onNext={handleNext}
          onFinish={handleFinish}
        />
      </div>
    );
  },
};

/**
 * Interactive Stepper - Vertical with navigation
 */
export const InteractiveVertical: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleBack = () => {
      setCurrentStep((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
      setCurrentStep((prev) => Math.min(workflowSteps.length - 1, prev + 1));
    };

    const handleFinish = () => {
      alert('Workflow completed!');
      setCurrentStep(0);
    };

    return (
      <div style={{ maxWidth: '300px' }}>
        <h3>Sidebar Navigation</h3>
        <StepperV2
          style="vertical"
          steps={workflowSteps}
          currentStep={currentStep}
          showPaginationControls
          onBack={handleBack}
          onNext={handleNext}
          onFinish={handleFinish}
        />
      </div>
    );
  },
};

/**
 * Interactive Stepper - Mobile with navigation
 */
export const InteractiveMobile: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(0);

    const handleBack = () => {
      setCurrentStep((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
      setCurrentStep((prev) => Math.min(mobileSteps.length - 1, prev + 1));
    };

    const handleFinish = () => {
      alert('All steps completed!');
      setCurrentStep(0);
    };

    return (
      <div style={{ maxWidth: '420px' }}>
        <h3>Mobile Experience</h3>
        <StepperV2
          style="mobile"
          steps={mobileSteps}
          currentStep={currentStep}
          showPaginationControls
          onBack={handleBack}
          onNext={handleNext}
          onFinish={handleFinish}
        />
      </div>
    );
  },
};

/**
 * Clickable Steps - Steps can be clicked to navigate
 */
export const ClickableSteps: Story = {
  render: () => {
    const [currentStep, setCurrentStep] = useState(2);

    const handleStepClick = (index: number) => {
      setCurrentStep(index);
    };

    return (
      <div>
        <h3>Clickable Steps (click any step to navigate)</h3>
        <StepperV2
          style="full-horizontal"
          steps={workflowSteps}
          currentStep={currentStep}
          allowClickableSteps
          onStepClick={handleStepClick}
        />
        <p style={{ marginTop: '20px', color: '#4f5666' }}>
          Current step: {currentStep + 1} - {workflowSteps[currentStep].label}
        </p>
      </div>
    );
  },
};

/**
 * All Variants Comparison
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div>
        <h3>Full Horizontal</h3>
        <StepperV2
          style="full-horizontal"
          steps={sampleSteps}
          currentStep={2}
        />
      </div>
      
      <div>
        <h3>Mini Horizontal</h3>
        <StepperV2
          style="mini-horizontal"
          steps={sampleSteps}
          currentStep={2}
        />
      </div>
      
      <div>
        <h3>Vertical</h3>
        <div style={{ maxWidth: '300px' }}>
          <StepperV2
            style="vertical"
            steps={sampleSteps}
            currentStep={2}
          />
        </div>
      </div>
      
      <div>
        <h3>Mobile</h3>
        <div style={{ maxWidth: '420px' }}>
          <StepperV2
            style="mobile"
            steps={mobileSteps}
            currentStep={0}
          />
        </div>
      </div>
    </div>
  ),
};

/**
 * Different Progress States
 */
export const ProgressStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div>
        <h4>Beginning (Step 1 of 5)</h4>
        <StepperV2
          style="full-horizontal"
          steps={workflowSteps}
          currentStep={0}
        />
      </div>
      
      <div>
        <h4>Middle (Step 3 of 5)</h4>
        <StepperV2
          style="full-horizontal"
          steps={workflowSteps}
          currentStep={2}
        />
      </div>
      
      <div>
        <h4>End (Step 5 of 5)</h4>
        <StepperV2
          style="full-horizontal"
          steps={workflowSteps}
          currentStep={4}
        />
      </div>
    </div>
  ),
};

