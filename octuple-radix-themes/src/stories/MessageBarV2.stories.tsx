import type { Meta, StoryObj } from '@storybook/react';
import { MessageBarV2 } from '../components/MessageBarV2';

const meta = {
  title: 'Octuple V2.5/Message Bar',
  component: MessageBarV2,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof MessageBarV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    variant: 'neutral',
    header: 'Header for message bar',
    message:
      'The body text can wrap to multiple lines and the buttons will be vertically centered. The body text can wrap to multiple lines and the buttons will be vertically centered.',
    linkText: 'Text link',
    onClose: () => console.log('Close clicked'),
  },
};

export const Success: Story = {
  args: {
    variant: 'success',
    header: 'Header for message bar',
    message:
      'The body text can wrap to multiple lines and the buttons will be vertically centered. The body text can wrap to multiple lines and the buttons will be vertically centered.',
    linkText: 'Text link',
    onClose: () => console.log('Close clicked'),
  },
};

export const Warning: Story = {
  args: {
    variant: 'warning',
    header: 'Header for message bar',
    message:
      'The body text can wrap to multiple lines and the buttons will be vertically centered.',
    linkText: 'Text link',
    onClose: () => console.log('Close clicked'),
  },
};

export const Error: Story = {
  args: {
    variant: 'error',
    header: 'Header for message bar',
    message:
      'The body text can wrap to multiple lines and the buttons will be vertically centered. The body text can wrap to multiple lines and the buttons will be vertically centered.',
    linkText: 'Text link',
    onClose: () => console.log('Close clicked'),
  },
};

