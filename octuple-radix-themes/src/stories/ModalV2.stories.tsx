import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { ModalV2 } from '../components/ModalV2';
import { ButtonV2 } from '../components/ButtonV2';

const meta: Meta<typeof ModalV2> = {
  title: 'Octuple V2.5/Modal',
  component: ModalV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Modal component - A floating modal dialog built with Radix Dialog primitive. Available in three sizes (Small, Medium, Large).',
      },
    },
  },
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof ModalV2>;

// Wrapper component to handle open state
const ModalWrapper = (args: any) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <ButtonV2 variant="primary" onClick={() => setOpen(true)}>
        Open Modal
      </ButtonV2>
      <ModalV2 {...args} open={open} onOpenChange={setOpen} />
    </>
  );
};

export const Small: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    size: 'small',
    title: 'Header text',
  },
};

export const Medium: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    size: 'medium',
    title: 'Header text',
  },
};

export const Large: Story = {
  render: (args) => <ModalWrapper {...args} />,
  args: {
    size: 'large',
    title: 'Header text',
  },
};

