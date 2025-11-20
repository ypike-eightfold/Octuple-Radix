import type { Meta, StoryObj } from '@storybook/react';
import { PillV2 } from '../components/PillV2';
import React from 'react';

const meta = {
  title: 'Octuple V2.5/Pill',
  component: PillV2,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A pill/tag component for labeling and categorization. Built on Radix Themes Badge with custom Octuple V2.5 styling.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['small', 'medium', 'large'],
      description: 'Size of the pill',
    },
    color: {
      control: 'select',
      options: ['red', 'orange', 'yellow', 'green', 'blue', 'violet', 'gray', 'yellowGreen', 'blueGreen', 'blueViolet', 'redOrange', 'violetRed'],
      description: 'Color variant',
    },
    icon: {
      control: 'text',
      description: 'Material Design Icon name',
    },
    disabled: {
      control: 'boolean',
      description: 'Disabled state',
    },
  },
} satisfies Meta<typeof PillV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Small: Story = {
  args: {
    children: 'Text',
    size: 'small',
    color: 'yellowGreen',
    icon: 'calendar_today',
  },
};

export const Medium: Story = {
  args: {
    children: 'Text',
    size: 'medium',
    color: 'blue',
    icon: 'star',
  },
};

export const Large: Story = {
  args: {
    children: 'Text',
    size: 'large',
    color: 'green',
    icon: 'check_circle',
  },
};

export const WithoutIcon: Story = {
  args: {
    children: 'Simple Tag',
    size: 'small',
    color: 'gray',
  },
};

export const Disabled: Story = {
  args: {
    children: 'Disabled',
    size: 'small',
    color: 'blue',
    icon: 'info',
    disabled: true,
  },
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
      <PillV2 size="small" color="yellowGreen" icon="calendar_today">
        Small
      </PillV2>
      <PillV2 size="medium" color="blue" icon="star">
        Medium
      </PillV2>
      <PillV2 size="large" color="green" icon="check_circle">
        Large
      </PillV2>
    </div>
  ),
};

export const AllColors: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <PillV2 color="red">Red</PillV2>
      <PillV2 color="orange">Orange</PillV2>
      <PillV2 color="yellow">Yellow</PillV2>
      <PillV2 color="green">Green</PillV2>
      <PillV2 color="blue">Blue</PillV2>
      <PillV2 color="violet">Violet</PillV2>
      <PillV2 color="gray">Gray</PillV2>
      <PillV2 color="yellowGreen">Yellow-Green</PillV2>
      <PillV2 color="blueGreen">Blue-Green</PillV2>
      <PillV2 color="blueViolet">Blue-Violet</PillV2>
      <PillV2 color="redOrange">Red-Orange</PillV2>
      <PillV2 color="violetRed">Violet-Red</PillV2>
    </div>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <PillV2 color="yellowGreen" icon="calendar_today">
        Calendar
      </PillV2>
      <PillV2 color="blue" icon="star">
        Starred
      </PillV2>
      <PillV2 color="green" icon="check_circle">
        Completed
      </PillV2>
      <PillV2 color="orange" icon="warning">
        Warning
      </PillV2>
      <PillV2 color="red" icon="error">
        Error
      </PillV2>
      <PillV2 color="violet" icon="favorite">
        Favorite
      </PillV2>
    </div>
  ),
};

export const StatusIndicators: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
      <PillV2 color="green" icon="check_circle">
        Active
      </PillV2>
      <PillV2 color="yellow" icon="schedule">
        Pending
      </PillV2>
      <PillV2 color="red" icon="cancel">
        Inactive
      </PillV2>
      <PillV2 color="blue" icon="info">
        Draft
      </PillV2>
      <PillV2 color="violet" icon="visibility">
        Published
      </PillV2>
    </div>
  ),
};

export const Categories: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
      <PillV2 size="small" color="blue">Technology</PillV2>
      <PillV2 size="small" color="green">Design</PillV2>
      <PillV2 size="small" color="violet">Business</PillV2>
      <PillV2 size="small" color="orange">Marketing</PillV2>
      <PillV2 size="small" color="red">Sales</PillV2>
      <PillV2 size="small" color="yellowGreen">Product</PillV2>
    </div>
  ),
};

export const InCard: Story = {
  render: () => (
    <div style={{
      maxWidth: '400px',
      padding: '24px',
      border: '1px solid #e0e0e0',
      borderRadius: '12px',
      backgroundColor: '#ffffff',
    }}>
      <h3 style={{ marginTop: 0, marginBottom: '12px', fontSize: '20px' }}>
        Project Title
      </h3>
      <p style={{ marginBottom: '16px', color: '#666', lineHeight: '1.6' }}>
        This is a sample project description that shows how pills can be used to display tags and categories.
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
        <PillV2 size="small" color="blue" icon="code">
          React
        </PillV2>
        <PillV2 size="small" color="green" icon="palette">
          UI/UX
        </PillV2>
        <PillV2 size="small" color="violet" icon="devices">
          Responsive
        </PillV2>
      </div>
    </div>
  ),
};

