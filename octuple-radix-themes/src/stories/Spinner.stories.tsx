import type { Meta, StoryObj } from '@storybook/react';
import { Spinner, Flex, Card, Text, Button } from '@radix-ui/themes';

const meta = {
  title: 'Components/Spinner',
  component: Spinner,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Spinner />,
};

export const Sizes: Story = {
  render: () => (
    <Flex gap="4" align="center">
      <Spinner size="1" />
      <Spinner size="2" />
      <Spinner size="3" />
    </Flex>
  ),
};

export const WithButton: Story = {
  render: () => (
    <Button disabled>
      <Spinner />
      Loading...
    </Button>
  ),
};

export const LoadingCard: Story = {
  render: () => (
    <Card style={{ width: 300, padding: '40px' }}>
      <Flex direction="column" gap="3" align="center" justify="center">
        <Spinner size="3" />
        <Text size="2" color="gray">Loading content...</Text>
      </Flex>
    </Card>
  ),
};

export const InlineWithText: Story = {
  render: () => (
    <Flex gap="2" align="center">
      <Spinner size="1" />
      <Text size="2">Processing your request</Text>
    </Flex>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Flex gap="3" align="center">
        <Spinner size="1" />
        <Text size="1">Size 1 - Small</Text>
      </Flex>
      <Flex gap="3" align="center">
        <Spinner size="2" />
        <Text size="2">Size 2 - Medium (Default)</Text>
      </Flex>
      <Flex gap="3" align="center">
        <Spinner size="3" />
        <Text size="3">Size 3 - Large</Text>
      </Flex>
    </Flex>
  ),
};

export const LoadingStates: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Button disabled>
        <Spinner size="1" />
        Saving...
      </Button>
      <Button disabled variant="soft">
        <Spinner size="1" />
        Uploading...
      </Button>
      <Button disabled variant="outline">
        <Spinner size="1" />
        Processing...
      </Button>
    </Flex>
  ),
};

