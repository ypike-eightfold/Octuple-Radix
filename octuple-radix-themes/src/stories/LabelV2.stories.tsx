import type { Meta, StoryObj } from '@storybook/react';
import { LabelV2 } from '../components/LabelV2';
import React from 'react';

const meta: Meta<typeof LabelV2> = {
  title: 'Octuple V2.5/Label',
  component: LabelV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'Labels give a name or title to a control or group of controls, including text fields, check boxes, combo boxes, radio buttons, and drop-down menus.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large', 'flex'],
    },
    colon: { control: 'boolean' },
    inline: { control: 'boolean' },
    required: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof LabelV2>;

export const Basic: Story = {
  args: {
    text: 'This is a label',
    size: 'medium',
    colon: false,
  },
};

export const Default_Info_Button: Story = {
  args: {
    text: 'This is a label',
    size: 'medium',
    colon: false,
    labelIconButtonProps: {
      icon: 'info',
      ariaLabel: 'More information',
      tooltip: 'A tooltip',
      onClick: () => alert('Clicked'),
    },
  },
};

export const Custom_Button: Story = {
  render: () => {
    return (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <LabelV2 
          text="This is a label" 
          size="medium"
        />
        <button
          onClick={() => alert('Clicked')}
          style={{
            padding: '4px 12px',
            borderRadius: '16px',
            border: '1px solid #d9dce1',
            background: '#ffffff',
            cursor: 'pointer',
            fontSize: '12px',
            fontFamily: 'Gilroy, Poppins, sans-serif',
          }}
        >
          Learn more
        </button>
      </div>
    );
  },
};
