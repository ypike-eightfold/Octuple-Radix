import type { Meta, StoryObj } from '@storybook/react';
import { ThinkingV2 } from '../components/ThinkingV2';
import React from 'react';

const meta = {
  title: 'Octuple V2.5/Thinking',
  component: ThinkingV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A "thinking" or "loading" indicator with three animated dots that bounce in sequence.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: 'color',
      description: 'Color of the dots',
    },
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Predefined size',
    },
    dotSize: {
      control: 'number',
      description: 'Custom dot size in pixels',
    },
    spacing: {
      control: 'number',
      description: 'Custom spacing between dots in pixels',
    },
    ariaLabel: {
      control: 'text',
      description: 'Accessible label for screen readers',
    },
  },
} satisfies Meta<typeof ThinkingV2>;

export default meta;
type Story = StoryObj<typeof meta>;

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

export const CustomColor: Story = {
  args: {
    size: 'medium',
    color: '#1890ff',
  },
};

export const CustomSize: Story = {
  args: {
    dotSize: 10,
    spacing: 8,
    color: '#52c41a',
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <ThinkingV2 size="small" />
        <span style={{ fontSize: '12px', color: '#666' }}>Small</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <ThinkingV2 size="medium" />
        <span style={{ fontSize: '12px', color: '#666' }}>Medium</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <ThinkingV2 size="large" />
        <span style={{ fontSize: '12px', color: '#666' }}>Large</span>
      </div>
    </div>
  ),
};

export const DifferentColors: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <ThinkingV2 size="medium" color="#69717F" />
        <span style={{ fontSize: '12px', color: '#666' }}>Default Grey</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <ThinkingV2 size="medium" color="#1890ff" />
        <span style={{ fontSize: '12px', color: '#666' }}>Blue</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <ThinkingV2 size="medium" color="#52c41a" />
        <span style={{ fontSize: '12px', color: '#666' }}>Green</span>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
        <ThinkingV2 size="medium" color="#f5222d" />
        <span style={{ fontSize: '12px', color: '#666' }}>Red</span>
      </div>
    </div>
  ),
};

export const InButton: Story = {
  render: () => (
    <button
      style={{
        padding: '8px 16px',
        border: '1px solid #d9d9d9',
        borderRadius: '4px',
        background: '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
      }}
    >
      <ThinkingV2 size="small" />
      <span>Processing...</span>
    </button>
  ),
};

export const InCard: Story = {
  render: () => (
    <div
      style={{
        padding: '24px',
        border: '1px solid #d9d9d9',
        borderRadius: '8px',
        background: '#fff',
        minWidth: '300px',
      }}
    >
      <h3 style={{ margin: '0 0 16px 0', fontSize: '16px', fontWeight: 500 }}>Loading content</h3>
      <div style={{ display: 'flex', justifyContent: 'center', padding: '32px 0' }}>
        <ThinkingV2 size="large" />
      </div>
      <p style={{ margin: '16px 0 0 0', fontSize: '14px', color: '#666', textAlign: 'center' }}>
        Please wait while we fetch your data...
      </p>
    </div>
  ),
};

export const ChatMessage: Story = {
  render: () => (
    <div
      style={{
        display: 'flex',
        gap: '12px',
        padding: '16px',
        border: '1px solid #d9d9d9',
        borderRadius: '8px',
        background: '#fafafa',
        maxWidth: '400px',
      }}
    >
      <div
        style={{
          width: '32px',
          height: '32px',
          borderRadius: '50%',
          background: '#1890ff',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '14px',
          fontWeight: 500,
          flexShrink: 0,
        }}
      >
        AI
      </div>
      <div style={{ flex: 1, paddingTop: '6px' }}>
        <ThinkingV2 size="small" color="#1890ff" />
      </div>
    </div>
  ),
};

export const Inline: Story = {
  render: () => (
    <div style={{ fontSize: '14px', color: '#262626' }}>
      <p style={{ margin: 0 }}>
        AI is thinking
        <span style={{ display: 'inline-flex', margin: '0 4px', verticalAlign: 'middle' }}>
          <ThinkingV2 size="small" />
        </span>
        about your request
      </p>
    </div>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <ThinkingV2 size="small" />
        <span style={{ fontSize: '14px' }}>Loading...</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <ThinkingV2 size="small" />
        <span style={{ fontSize: '14px' }}>Connecting to server...</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <ThinkingV2 size="small" />
        <span style={{ fontSize: '14px' }}>Processing your request...</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <ThinkingV2 size="small" />
        <span style={{ fontSize: '14px' }}>Analyzing data...</span>
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
        gap: '16px',
        background: '#fafafa',
        borderRadius: '8px',
      }}
    >
      <ThinkingV2 size="large" />
      <p style={{ margin: 0, fontSize: '16px', color: '#262626' }}>Loading application...</p>
    </div>
  ),
};

