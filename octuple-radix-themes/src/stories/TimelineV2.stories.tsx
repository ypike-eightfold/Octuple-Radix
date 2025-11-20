import type { Meta, StoryObj } from '@storybook/react';
import { TimelineV2 } from '../components/TimelineV2';
import '../components/TimelineV2/TimelineV2.css';

const meta = {
  title: 'Octuple V2.5/Timeline',
  component: TimelineV2,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Timeline component built to Figma design specifications. Displays a sequence of steps with visual indicators for status.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
      description: 'Orientation of the timeline',
    },
    size: {
      control: { type: 'select' },
      options: ['large', 'medium', 'small'],
      description: 'Size variant',
    },
    current: {
      control: { type: 'number', min: 0, max: 10 },
      description: 'Current active step (0-indexed)',
    },
  },
} satisfies Meta<typeof TimelineV2>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    label: 'Order Placed',
    description: 'Your order has been received',
  },
  {
    label: 'Processing',
    description: 'We are preparing your items',
  },
  {
    label: 'Shipped',
    description: 'Your order is on the way',
  },
  {
    label: 'Out for Delivery',
    description: 'Driver is delivering your package',
  },
  {
    label: 'Delivered',
    description: 'Package has been delivered',
  },
];

export const Default: Story = {
  args: {
    items: defaultItems,
    current: 2,
    orientation: 'vertical',
    size: 'medium',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Vertical: Story = {
  args: {
    items: defaultItems,
    current: 2,
    orientation: 'vertical',
    size: 'medium',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Horizontal: Story = {
  args: {
    items: defaultItems,
    current: 2,
    orientation: 'horizontal',
    size: 'medium',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllCompleted: Story = {
  args: {
    items: defaultItems,
    current: 5,
    orientation: 'vertical',
    size: 'medium',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const FirstStep: Story = {
  args: {
    items: defaultItems,
    current: 0,
    orientation: 'vertical',
    size: 'medium',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const WithoutDescriptions: Story = {
  args: {
    items: [
      { label: 'Step 1' },
      { label: 'Step 2' },
      { label: 'Step 3' },
      { label: 'Step 4' },
    ],
    current: 1,
    orientation: 'vertical',
    size: 'medium',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const ExplicitStatuses: Story = {
  args: {
    items: [
      { label: 'Completed Step', description: 'This step is done', status: 'completed' },
      { label: 'Active Step', description: 'Currently working on this', status: 'active' },
      { label: 'Pending Step', description: 'Not started yet', status: 'pending' },
      { label: 'Another Pending', description: 'Future step', status: 'pending' },
    ],
    orientation: 'vertical',
    size: 'medium',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Large: Story = {
  args: {
    items: defaultItems,
    current: 2,
    orientation: 'vertical',
    size: 'large',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Medium: Story = {
  args: {
    items: defaultItems,
    current: 2,
    orientation: 'vertical',
    size: 'medium',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const Small: Story = {
  args: {
    items: defaultItems,
    current: 2,
    orientation: 'vertical',
    size: 'small',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
      <div style={{ maxWidth: '600px' }}>
        <h3 style={{ marginBottom: '16px', fontWeight: 600 }}>Large</h3>
        <TimelineV2
          items={[
            { label: 'Step 1', description: 'First step' },
            { label: 'Step 2', description: 'Second step' },
            { label: 'Step 3', description: 'Third step' },
          ]}
          current={1}
          size="large"
        />
      </div>
      <div style={{ maxWidth: '600px' }}>
        <h3 style={{ marginBottom: '16px', fontWeight: 600 }}>Medium</h3>
        <TimelineV2
          items={[
            { label: 'Step 1', description: 'First step' },
            { label: 'Step 2', description: 'Second step' },
            { label: 'Step 3', description: 'Third step' },
          ]}
          current={1}
          size="medium"
        />
      </div>
      <div style={{ maxWidth: '600px' }}>
        <h3 style={{ marginBottom: '16px', fontWeight: 600 }}>Small</h3>
        <TimelineV2
          items={[
            { label: 'Step 1', description: 'First step' },
            { label: 'Step 2', description: 'Second step' },
            { label: 'Step 3', description: 'Third step' },
          ]}
          current={1}
          size="small"
        />
      </div>
    </div>
  ),
};

export const ProjectTimeline: Story = {
  args: {
    items: [
      {
        label: 'Project Kickoff',
        description: 'Initial meeting and requirements gathering',
      },
      {
        label: 'Design Phase',
        description: 'UI/UX design and prototyping',
      },
      {
        label: 'Development',
        description: 'Building core features and functionality',
      },
      {
        label: 'Testing & QA',
        description: 'Quality assurance and bug fixes',
      },
      {
        label: 'Deployment',
        description: 'Production release and monitoring',
      },
    ],
    current: 2,
    orientation: 'vertical',
    size: 'medium',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const OrderTracking: Story = {
  args: {
    items: [
      {
        label: 'Order Confirmed',
        description: 'Order #12345 - June 1, 2024 at 10:30 AM',
      },
      {
        label: 'Payment Processed',
        description: 'Payment received via Credit Card',
      },
      {
        label: 'In Transit',
        description: 'Package left warehouse - Expected delivery: June 5',
      },
      {
        label: 'Out for Delivery',
        description: 'Your package is out for delivery today',
      },
      {
        label: 'Delivered',
        description: 'Successfully delivered',
      },
    ],
    current: 2,
    orientation: 'vertical',
    size: 'medium',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '600px' }}>
        <Story />
      </div>
    ),
  ],
};

export const HorizontalShortSteps: Story = {
  args: {
    items: [
      { label: 'Cart' },
      { label: 'Shipping' },
      { label: 'Payment' },
      { label: 'Review' },
      { label: 'Complete' },
    ],
    current: 2,
    orientation: 'horizontal',
    size: 'medium',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <Story />
      </div>
    ),
  ],
};

