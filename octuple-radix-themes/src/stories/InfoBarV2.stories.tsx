import type { Meta, StoryObj } from '@storybook/react';
import { InfoBarV2 } from '../components/InfoBarV2';
import React from 'react';

const meta: Meta<typeof InfoBarV2> = {
  title: 'Octuple V2.5/InfoBar',
  component: InfoBarV2,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: { type: 'radio' },
      options: ['large', 'medium', 'mobile'],
    },
    variant: {
      control: { type: 'select' },
      options: ['neutral', 'success', 'warning', 'error', 'copilot', 'ai-agent'],
    },
    message: { control: 'text' },
    actionLabel: { control: 'text' },
    showClose: { control: 'boolean' },
    onAction: { action: 'action clicked' },
    onClose: { action: 'close clicked' },
  },
};

export default meta;
type Story = StoryObj<typeof InfoBarV2>;

export const NeutralLarge: Story = {
  args: {
    size: 'large',
    variant: 'neutral',
    message: 'Body1 is used inside large component',
    actionLabel: 'Button',
    showClose: true,
  },
};

export const NeutralMedium: Story = {
  args: {
    size: 'medium',
    variant: 'neutral',
    message: 'Body2 is used inside medium component and it can wrap to two lines',
    actionLabel: 'Button',
    showClose: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '490px' }}>
        <Story />
      </div>
    ),
  ],
};

export const NeutralMobile: Story = {
  args: {
    size: 'mobile',
    variant: 'neutral',
    message: 'Body2 is used inside medium component and it can wrap to two lines',
    actionLabel: 'Button',
    showClose: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '287px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SuccessMedium: Story = {
  args: {
    size: 'medium',
    variant: 'success',
    message: 'Body2 is used inside medium component and it can wrap to two lines',
    actionLabel: 'Button',
    showClose: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '490px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SuccessMobile: Story = {
  args: {
    size: 'mobile',
    variant: 'success',
    message: 'Body2 is used inside medium component and it can wrap to two lines',
    actionLabel: 'Button',
    showClose: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '287px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WarningMedium: Story = {
  args: {
    size: 'medium',
    variant: 'warning',
    message: 'Body2 is used inside medium component and it can wrap to two lines',
    actionLabel: 'Button',
    showClose: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '490px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WarningMobile: Story = {
  args: {
    size: 'mobile',
    variant: 'warning',
    message: 'Body2 is used inside medium component and it can wrap to two lines',
    actionLabel: 'Button',
    showClose: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '287px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ErrorMedium: Story = {
  args: {
    size: 'medium',
    variant: 'error',
    message: 'Body2 is used inside medium component and it can wrap to two lines',
    actionLabel: 'Button',
    showClose: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '490px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ErrorMobile: Story = {
  args: {
    size: 'mobile',
    variant: 'error',
    message: 'Body2 is used inside medium component and it can wrap to two lines',
    actionLabel: 'Button',
    showClose: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '287px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CopilotMedium: Story = {
  args: {
    size: 'medium',
    variant: 'copilot',
    message: 'Body2 is used inside medium component and it can wrap to two lines',
    actionLabel: 'Button',
    showClose: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '490px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CopilotMobile: Story = {
  args: {
    size: 'mobile',
    variant: 'copilot',
    message: 'Body2 is used inside medium component and it can wrap to two lines',
    actionLabel: 'Button',
    showClose: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '287px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AIAgentMedium: Story = {
  args: {
    size: 'medium',
    variant: 'ai-agent',
    message: 'Body2 is used inside medium component and it can wrap to two lines',
    actionLabel: 'Button',
    showClose: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '490px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AIAgentMobile: Story = {
  args: {
    size: 'mobile',
    variant: 'ai-agent',
    message: 'Body2 is used inside medium component and it can wrap to two lines',
    actionLabel: 'Button',
    showClose: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '287px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutAction: Story = {
  args: {
    size: 'medium',
    variant: 'neutral',
    message: 'This info bar has no action button, only a close button',
    showClose: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '490px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutClose: Story = {
  args: {
    size: 'medium',
    variant: 'warning',
    message: 'This info bar cannot be closed - important information',
    actionLabel: 'Learn More',
    showClose: false,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '490px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '640px' }}>
      <InfoBarV2
        variant="neutral"
        size="large"
        message="Neutral: General information for users to be aware of"
        actionLabel="View Details"
      />
      <InfoBarV2
        variant="success"
        size="medium"
        message="Success: Your changes have been saved successfully"
        actionLabel="Confirm"
      />
      <InfoBarV2
        variant="warning"
        size="medium"
        message="Warning: Please review your settings before proceeding"
        actionLabel="Review"
      />
      <InfoBarV2
        variant="error"
        size="medium"
        message="Error: Unable to complete the operation. Please try again"
        actionLabel="Retry"
      />
      <InfoBarV2
        variant="copilot"
        size="medium"
        message="Copilot: AI-powered suggestions are available for this section"
        actionLabel="Try Copilot"
      />
      <InfoBarV2
        variant="ai-agent"
        size="medium"
        message="AI Agent: Automated analysis completed with recommendations"
        actionLabel="View Results"
      />
    </div>
  ),
};

