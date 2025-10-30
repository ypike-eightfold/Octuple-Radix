import type { Meta, StoryObj } from '@storybook/react';
import { SegmentedControl, Flex, Text } from '@radix-ui/themes';

const meta = {
  title: 'Components/Segmented Control',
  component: SegmentedControl.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SegmentedControl.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <SegmentedControl.Root defaultValue="inbox">
      <SegmentedControl.Item value="inbox">Inbox</SegmentedControl.Item>
      <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
      <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
    </SegmentedControl.Root>
  ),
};

export const ViewMode: Story = {
  render: () => (
    <SegmentedControl.Root defaultValue="grid">
      <SegmentedControl.Item value="list">List</SegmentedControl.Item>
      <SegmentedControl.Item value="grid">Grid</SegmentedControl.Item>
      <SegmentedControl.Item value="compact">Compact</SegmentedControl.Item>
    </SegmentedControl.Root>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <SegmentedControl.Root defaultValue="1" size="1">
        <SegmentedControl.Item value="1">Small 1</SegmentedControl.Item>
        <SegmentedControl.Item value="2">Small 2</SegmentedControl.Item>
        <SegmentedControl.Item value="3">Small 3</SegmentedControl.Item>
      </SegmentedControl.Root>

      <SegmentedControl.Root defaultValue="1" size="2">
        <SegmentedControl.Item value="1">Medium 1</SegmentedControl.Item>
        <SegmentedControl.Item value="2">Medium 2</SegmentedControl.Item>
        <SegmentedControl.Item value="3">Medium 3</SegmentedControl.Item>
      </SegmentedControl.Root>

      <SegmentedControl.Root defaultValue="1" size="3">
        <SegmentedControl.Item value="1">Large 1</SegmentedControl.Item>
        <SegmentedControl.Item value="2">Large 2</SegmentedControl.Item>
        <SegmentedControl.Item value="3">Large 3</SegmentedControl.Item>
      </SegmentedControl.Root>
    </Flex>
  ),
};

export const TwoOptions: Story = {
  render: () => (
    <SegmentedControl.Root defaultValue="monthly">
      <SegmentedControl.Item value="monthly">Monthly</SegmentedControl.Item>
      <SegmentedControl.Item value="yearly">Yearly</SegmentedControl.Item>
    </SegmentedControl.Root>
  ),
};

export const FourOptions: Story = {
  render: () => (
    <SegmentedControl.Root defaultValue="all">
      <SegmentedControl.Item value="all">All</SegmentedControl.Item>
      <SegmentedControl.Item value="active">Active</SegmentedControl.Item>
      <SegmentedControl.Item value="inactive">Inactive</SegmentedControl.Item>
      <SegmentedControl.Item value="archived">Archived</SegmentedControl.Item>
    </SegmentedControl.Root>
  ),
};

export const TimePeriod: Story = {
  render: () => (
    <SegmentedControl.Root defaultValue="7d">
      <SegmentedControl.Item value="24h">24h</SegmentedControl.Item>
      <SegmentedControl.Item value="7d">7d</SegmentedControl.Item>
      <SegmentedControl.Item value="30d">30d</SegmentedControl.Item>
      <SegmentedControl.Item value="90d">90d</SegmentedControl.Item>
      <SegmentedControl.Item value="1y">1y</SegmentedControl.Item>
    </SegmentedControl.Root>
  ),
};

export const Alignment: Story = {
  render: () => (
    <SegmentedControl.Root defaultValue="left">
      <SegmentedControl.Item value="left">Left</SegmentedControl.Item>
      <SegmentedControl.Item value="center">Center</SegmentedControl.Item>
      <SegmentedControl.Item value="right">Right</SegmentedControl.Item>
      <SegmentedControl.Item value="justify">Justify</SegmentedControl.Item>
    </SegmentedControl.Root>
  ),
};

export const Priority: Story = {
  render: () => (
    <SegmentedControl.Root defaultValue="medium">
      <SegmentedControl.Item value="low">Low</SegmentedControl.Item>
      <SegmentedControl.Item value="medium">Medium</SegmentedControl.Item>
      <SegmentedControl.Item value="high">High</SegmentedControl.Item>
      <SegmentedControl.Item value="urgent">Urgent</SegmentedControl.Item>
    </SegmentedControl.Root>
  ),
};

// Test the reverse color accessibility implementation
export const AccessibilityDemo: Story = {
  render: () => (
    <Flex direction="column" gap="6" style={{ padding: '20px' }}>
      <div>
        <Text size="3" weight="bold" style={{ marginBottom: '8px', display: 'block' }}>
          Accessibility Test - Reverse Color Implementation
        </Text>
        <Text size="2" color="gray" style={{ marginBottom: '16px', display: 'block' }}>
          Active state should have dark background with light text for WCAG 2.2 AA compliance
        </Text>
        <SegmentedControl.Root defaultValue="inbox">
          <SegmentedControl.Item value="inbox">Inbox (Active)</SegmentedControl.Item>
          <SegmentedControl.Item value="drafts">Drafts</SegmentedControl.Item>
          <SegmentedControl.Item value="sent">Sent</SegmentedControl.Item>
        </SegmentedControl.Root>
      </div>

      <div>
        <Text size="3" weight="bold" style={{ marginBottom: '8px', display: 'block' }}>
          Multiple Sizes Test
        </Text>
        <Flex direction="column" gap="3">
          <SegmentedControl.Root defaultValue="1" size="1">
            <SegmentedControl.Item value="1">Small Active</SegmentedControl.Item>
            <SegmentedControl.Item value="2">Small 2</SegmentedControl.Item>
          </SegmentedControl.Root>
          
          <SegmentedControl.Root defaultValue="1" size="2">
            <SegmentedControl.Item value="1">Medium Active</SegmentedControl.Item>
            <SegmentedControl.Item value="2">Medium 2</SegmentedControl.Item>
          </SegmentedControl.Root>
          
          <SegmentedControl.Root defaultValue="1" size="3">
            <SegmentedControl.Item value="1">Large Active</SegmentedControl.Item>
            <SegmentedControl.Item value="2">Large 2</SegmentedControl.Item>
          </SegmentedControl.Root>
        </Flex>
      </div>
    </Flex>
  ),
};


