import type { Meta, StoryObj } from '@storybook/react';
import { Badge, Flex } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'outline', 'surface'],
      description: 'Badge variant (classic is hidden)',
    },
  },
} satisfies Meta<typeof Badge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => <Badge>New</Badge>,
};

export const AllVariants: Story = {
  render: () => (
    <Flex direction="column" gap="3" align="start">
      <Badge variant="solid">Solid</Badge>
      <Badge variant="soft">Soft</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="surface">Surface</Badge>
    </Flex>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Flex gap="2" wrap="wrap">
      <Badge color="indigo">Indigo</Badge>
      <Badge color="blue">Blue</Badge>
      <Badge color="green">Green</Badge>
      <Badge color="red">Red</Badge>
      <Badge color="orange">Orange</Badge>
      <Badge color="amber">Amber</Badge>
      <Badge color="gray">Gray</Badge>
    </Flex>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Flex gap="3" wrap="wrap">
      <Badge>
        <Icon name="check_circle" size={14} />
        Verified
      </Badge>
      <Badge color="green">
        <Icon name="new_releases" size={14} />
        New
      </Badge>
      <Badge color="blue">
        <Icon name="star" size={14} />
        Featured
      </Badge>
      <Badge color="red">
        <Icon name="local_fire_department" size={14} />
        Hot
      </Badge>
      <Badge color="amber">
        <Icon name="schedule" size={14} />
        Pending
      </Badge>
    </Flex>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Flex gap="3" align="center">
      <Badge size="1">Size 1</Badge>
      <Badge size="2">Size 2</Badge>
      <Badge size="3">Size 3</Badge>
    </Flex>
  ),
};

export const HighContrast: Story = {
  render: () => (
    <Flex gap="2" wrap="wrap">
      <Badge highContrast>Indigo</Badge>
      <Badge color="blue" highContrast>Blue</Badge>
      <Badge color="green" highContrast>Green</Badge>
      <Badge color="red" highContrast>Red</Badge>
    </Flex>
  ),
};

export const StatusBadges: Story = {
  render: () => (
    <Flex direction="column" gap="2">
      <Flex gap="2" align="center">
        <Badge color="green" variant="soft">
          <Icon name="check_circle" size={14} />
          Active
        </Badge>
        <span>User account is active</span>
      </Flex>
      <Flex gap="2" align="center">
        <Badge color="amber" variant="soft">
          <Icon name="schedule" size={14} />
          Pending
        </Badge>
        <span>Awaiting approval</span>
      </Flex>
      <Flex gap="2" align="center">
        <Badge color="red" variant="soft">
          <Icon name="cancel" size={14} />
          Inactive
        </Badge>
        <span>Account suspended</span>
      </Flex>
      <Flex gap="2" align="center">
        <Badge color="gray" variant="soft">
          <Icon name="draft" size={14} />
          Draft
        </Badge>
        <span>Document in progress</span>
      </Flex>
    </Flex>
  ),
};

