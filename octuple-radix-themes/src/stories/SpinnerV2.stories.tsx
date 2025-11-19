import type { Meta, StoryObj } from '@storybook/react';
import { SpinnerV2 } from '../components/SpinnerV2';
import React from 'react';

const meta: Meta<typeof SpinnerV2> = {
  title: 'Octuple V2.5/Spinner',
  component: SpinnerV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A circular loading spinner with smooth rotation animation. Respects user preferences for reduced motion.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Predefined size of the spinner',
    },
    customSize: {
      control: { type: 'number', min: 8, max: 128 },
      description: 'Custom size in pixels (overrides size prop)',
    },
    color: {
      control: 'color',
      description: 'Color of the spinner',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessibility label for screen readers',
    },
  },
};

export default meta;
type Story = StoryObj<typeof SpinnerV2>;

export const Small: Story = {
  args: {
    size: 'small',
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
  },
};

export const CustomSize: Story = {
  args: {
    customSize: 48,
  },
};

export const CustomColor: Story = {
  args: {
    size: 'large',
    color: '#10b981',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
      <div style={{ textAlign: 'center' }}>
        <SpinnerV2 size="small" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#69717f' }}>Small (16px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SpinnerV2 size="medium" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#69717f' }}>Medium (24px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SpinnerV2 size="large" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#69717f' }}>Large (32px)</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SpinnerV2 customSize={48} />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#69717f' }}>Custom (48px)</div>
      </div>
    </div>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
      <div style={{ textAlign: 'center' }}>
        <SpinnerV2 size="large" color="#2C8CC9" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#69717f' }}>Blue</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SpinnerV2 size="large" color="#10b981" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#69717f' }}>Green</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SpinnerV2 size="large" color="#f59e0b" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#69717f' }}>Orange</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SpinnerV2 size="large" color="#ef4444" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#69717f' }}>Red</div>
      </div>
      <div style={{ textAlign: 'center' }}>
        <SpinnerV2 size="large" color="#8b5cf6" />
        <div style={{ marginTop: '8px', fontSize: '12px', color: '#69717f' }}>Purple</div>
      </div>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <button
      style={{
        backgroundColor: '#b0f3fe',
        border: 'none',
        borderRadius: '24px',
        padding: '12px 24px',
        fontSize: '16px',
        fontWeight: 600,
        color: '#054d7b',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
        cursor: 'not-allowed',
        opacity: 0.7,
      }}
      disabled
    >
      <SpinnerV2 size="small" color="#054d7b" />
      <span>Loading...</span>
    </button>
  ),
};

export const InCard: Story = {
  render: () => (
    <div
      style={{
        width: '300px',
        padding: '48px 24px',
        backgroundColor: 'white',
        border: '1px solid #e5e7eb',
        borderRadius: '12px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
      }}
    >
      <SpinnerV2 size="large" />
      <div style={{ fontSize: '16px', fontWeight: 600, color: '#1a212e' }}>Loading content</div>
      <div style={{ fontSize: '14px', color: '#69717f', textAlign: 'center' }}>
        Please wait while we fetch your data...
      </div>
    </div>
  ),
};

export const FullPageLoader: Story = {
  render: () => (
    <div
      style={{
        width: '400px',
        height: '300px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#f9fafb',
        gap: '16px',
      }}
    >
      <SpinnerV2 customSize={48} />
      <div style={{ fontSize: '16px', fontWeight: 600, color: '#1a212e' }}>Loading...</div>
    </div>
  ),
};

export const Inline: Story = {
  render: () => (
    <div style={{ fontSize: '16px', color: '#1a212e', display: 'flex', alignItems: 'center', gap: '8px' }}>
      Processing your request
      <SpinnerV2 size="small" />
    </div>
  ),
};

