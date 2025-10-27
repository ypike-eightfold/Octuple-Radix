import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from '../components/Timeline';
import { Box, Card } from '@radix-ui/themes';

const meta = {
  title: 'Components/Timeline',
  component: Timeline,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Timeline>;

export default meta;
type Story = StoryObj<typeof meta>;

const defaultItems = [
  {
    title: 'Project Created',
    description: 'New project "Website Redesign" was created',
    timestamp: '2 hours ago',
    variant: 'success' as const,
  },
  {
    title: 'Design Review',
    description: 'Design mockups reviewed by the team',
    timestamp: '4 hours ago',
    variant: 'info' as const,
  },
  {
    title: 'Initial Meeting',
    description: 'Kickoff meeting with stakeholders',
    timestamp: '1 day ago',
    variant: 'default' as const,
  },
];

export const Default = {
  render: () => (
    <Box style={{ width: '500px' }}>
      <Timeline items={defaultItems} />
    </Box>
  ),
};

export const WithVariants = {
  render: () => {
    const items = [
      {
        title: 'Build Successful',
        description: 'All tests passed, deployment ready',
        timestamp: 'Just now',
        variant: 'success' as const,
      },
      {
        title: 'Warning Detected',
        description: 'Package version mismatch detected',
        timestamp: '5 minutes ago',
        variant: 'warning' as const,
      },
      {
        title: 'Build Failed',
        description: 'Compilation error in main.ts',
        timestamp: '10 minutes ago',
        variant: 'error' as const,
      },
      {
        title: 'Build Started',
        description: 'Starting build process...',
        timestamp: '15 minutes ago',
        variant: 'info' as const,
      },
    ];

    return (
      <Box style={{ width: '500px' }}>
        <Timeline items={items} />
      </Box>
    );
  },
};

export const WithCustomIcons = {
  render: () => {
    const items = [
      {
        title: 'Deployment Complete',
        description: 'Version 2.1.0 deployed to production',
        timestamp: '10:30 AM',
        icon: 'rocket_launch',
        variant: 'success' as const,
      },
      {
        title: 'Code Review',
        description: 'Pull request #234 approved',
        timestamp: '9:15 AM',
        icon: 'code',
        variant: 'info' as const,
      },
      {
        title: 'Commit Pushed',
        description: 'feat: Add new dashboard component',
        timestamp: '8:45 AM',
        icon: 'commit',
        variant: 'default' as const,
      },
    ];

    return (
      <Box style={{ width: '500px' }}>
        <Timeline items={items} />
      </Box>
    );
  },
};

export const InCard = {
  render: () => {
    const items = [
      {
        title: 'Order Shipped',
        description: 'Your order has been shipped via FedEx',
        timestamp: 'Today, 2:30 PM',
        variant: 'success' as const,
      },
      {
        title: 'Order Processing',
        description: 'Your order is being prepared',
        timestamp: 'Today, 10:00 AM',
        variant: 'info' as const,
      },
      {
        title: 'Payment Confirmed',
        description: 'Payment received successfully',
        timestamp: 'Today, 9:45 AM',
        variant: 'success' as const,
      },
      {
        title: 'Order Placed',
        description: 'Order #12345 has been placed',
        timestamp: 'Today, 9:30 AM',
        variant: 'default' as const,
      },
    ];

    return (
      <Card style={{ width: '600px', padding: '24px' }}>
        <Timeline items={items} />
      </Card>
    );
  },
};

export const SimpleTimeline = {
  render: () => {
    const items = [
      {
        title: 'Meeting scheduled',
        timestamp: '3:00 PM',
      },
      {
        title: 'Email sent',
        timestamp: '2:15 PM',
      },
      {
        title: 'Task completed',
        timestamp: '1:30 PM',
      },
      {
        title: 'Project started',
        timestamp: '9:00 AM',
      },
    ];

    return (
      <Box style={{ width: '400px' }}>
        <Timeline items={items} />
      </Box>
    );
  },
};

