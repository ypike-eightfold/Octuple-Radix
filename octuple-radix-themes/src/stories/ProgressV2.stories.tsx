import type { Meta, StoryObj } from '@storybook/react';
import { useState, useEffect } from 'react';
import { ProgressV2 } from '../components/ProgressV2';
import '../components/ProgressV2/ProgressV2.css';

const meta = {
  title: 'Octuple V2.5/Progress',
  component: ProgressV2,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Progress indicator component built on Radix UI Progress Primitive with Figma design specifications. Supports both segmented and smooth styles.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Current progress value (0-100)',
    },
    style: {
      control: { type: 'select' },
      options: ['segmented', 'smooth'],
      description: 'Progress style',
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small'],
      description: 'Size variant',
    },
    segments: {
      control: { type: 'range', min: 2, max: 10, step: 1 },
      description: 'Number of segments (segmented style only)',
    },
    showLabel: {
      control: { type: 'boolean' },
      description: 'Show percentage label',
    },
  },
} satisfies Meta<typeof ProgressV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Segmented: Story = {
  args: {
    value: 0,
    style: 'segmented',
    size: 'medium',
    segments: 5,
    showLabel: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SegmentedHalfway: Story = {
  args: {
    value: 50,
    style: 'segmented',
    size: 'medium',
    segments: 5,
    showLabel: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SegmentedComplete: Story = {
  args: {
    value: 100,
    style: 'segmented',
    size: 'medium',
    segments: 5,
    showLabel: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Smooth: Story = {
  args: {
    value: 50,
    style: 'smooth',
    size: 'medium',
    showLabel: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const LargeSegmented: Story = {
  args: {
    value: 60,
    style: 'segmented',
    size: 'large',
    segments: 5,
    showLabel: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const SmallSegmented: Story = {
  args: {
    value: 40,
    style: 'segmented',
    size: 'small',
    segments: 5,
    showLabel: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutLabel: Story = {
  args: {
    value: 75,
    style: 'segmented',
    size: 'medium',
    segments: 5,
    showLabel: false,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const CustomLabel: Story = {
  args: {
    value: 30,
    style: 'segmented',
    size: 'medium',
    segments: 5,
    showLabel: true,
    label: '3 of 10 tasks completed',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const TenSegments: Story = {
  args: {
    value: 70,
    style: 'segmented',
    size: 'medium',
    segments: 10,
    showLabel: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ThreeSegments: Story = {
  args: {
    value: 33,
    style: 'segmented',
    size: 'medium',
    segments: 3,
    showLabel: true,
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AnimatedProgress: Story = {
  render: () => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            return 0;
          }
          return prev + 1;
        });
      }, 100);

      return () => clearInterval(timer);
    }, []);

    return (
      <div style={{ maxWidth: '600px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <ProgressV2 value={progress} style="segmented" size="medium" segments={5} showLabel />
          <ProgressV2 value={progress} style="smooth" size="medium" showLabel />
        </div>
      </div>
    );
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Large</h3>
          <ProgressV2 value={60} style="segmented" size="large" segments={5} showLabel />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Medium</h3>
          <ProgressV2 value={60} style="segmented" size="medium" segments={5} showLabel />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Small</h3>
          <ProgressV2 value={60} style="segmented" size="small" segments={5} showLabel />
        </div>
      </div>
    </div>
  ),
};

export const AllStyles: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Segmented (5 segments)</h3>
          <ProgressV2 value={70} style="segmented" size="medium" segments={5} showLabel />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Smooth</h3>
          <ProgressV2 value={70} style="smooth" size="medium" showLabel />
        </div>
      </div>
    </div>
  ),
};

export const SmoothSizes: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <div>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Large Smooth</h3>
          <ProgressV2 value={60} style="smooth" size="large" showLabel />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Medium Smooth</h3>
          <ProgressV2 value={60} style="smooth" size="medium" showLabel />
        </div>
        <div>
          <h3 style={{ marginBottom: '8px', fontWeight: 600 }}>Small Smooth</h3>
          <ProgressV2 value={60} style="smooth" size="small" showLabel />
        </div>
      </div>
    </div>
  ),
};

export const ProgressStates: Story = {
  render: () => (
    <div style={{ maxWidth: '600px' }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>0% - Not Started</h4>
          <ProgressV2 value={0} style="segmented" size="medium" segments={5} showLabel />
        </div>
        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>25% - Started</h4>
          <ProgressV2 value={25} style="segmented" size="medium" segments={5} showLabel />
        </div>
        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>50% - Halfway</h4>
          <ProgressV2 value={50} style="segmented" size="medium" segments={5} showLabel />
        </div>
        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>75% - Almost Done</h4>
          <ProgressV2 value={75} style="segmented" size="medium" segments={5} showLabel />
        </div>
        <div>
          <h4 style={{ marginBottom: '8px', fontSize: '14px', fontWeight: 600 }}>100% - Complete</h4>
          <ProgressV2 value={100} style="segmented" size="medium" segments={5} showLabel />
        </div>
      </div>
    </div>
  ),
};

