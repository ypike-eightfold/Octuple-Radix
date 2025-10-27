import type { Meta, StoryObj } from '@storybook/react';
import { IconButton, Flex, Tooltip } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Icon Button',
  component: IconButton,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'soft', 'outline', 'ghost', 'surface'],
      description: 'Button variant (classic is hidden)',
    },
  },
} satisfies Meta<typeof IconButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <IconButton>
      <Icon name="settings" size={18} />
    </IconButton>
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex gap="3" align="center">
      <IconButton variant="solid">
        <Icon name="bookmark" size={18} />
      </IconButton>
      <IconButton variant="soft">
        <Icon name="bookmark" size={18} />
      </IconButton>
      <IconButton variant="outline">
        <Icon name="bookmark" size={18} />
      </IconButton>
      <IconButton variant="ghost">
        <Icon name="bookmark" size={18} />
      </IconButton>
      <IconButton variant="surface">
        <Icon name="bookmark" size={18} />
      </IconButton>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex gap="3" align="center">
      <IconButton size="1">
        <Icon name="star" size={14} />
      </IconButton>
      <IconButton size="2">
        <Icon name="star" size={16} />
      </IconButton>
      <IconButton size="3">
        <Icon name="star" size={18} />
      </IconButton>
      <IconButton size="4">
        <Icon name="star" size={20} />
      </IconButton>
    </Flex>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex gap="3" align="center">
      <IconButton color="indigo">
        <Icon name="favorite" size={18} />
      </IconButton>
      <IconButton color="blue">
        <Icon name="info" size={18} />
      </IconButton>
      <IconButton color="green">
        <Icon name="check_circle" size={18} />
      </IconButton>
      <IconButton color="orange">
        <Icon name="warning" size={18} />
      </IconButton>
      <IconButton color="red">
        <Icon name="error" size={18} />
      </IconButton>
    </Flex>
  ),
};

export const WithTooltip: Story = {
  render: () => (
    <Flex gap="3" align="center">
      <Tooltip content="Edit">
        <IconButton variant="soft">
          <Icon name="edit" size={18} />
        </IconButton>
      </Tooltip>
      
      <Tooltip content="Delete">
        <IconButton color="red" variant="soft">
          <Icon name="delete" size={18} />
        </IconButton>
      </Tooltip>
      
      <Tooltip content="Share">
        <IconButton variant="soft">
          <Icon name="share" size={18} />
        </IconButton>
      </Tooltip>
      
      <Tooltip content="Download">
        <IconButton variant="soft">
          <Icon name="download" size={18} />
        </IconButton>
      </Tooltip>
    </Flex>
  ),
};

export const ActionButtons: Story = {
  render: () => (
    <Flex gap="2" align="center">
      <IconButton variant="ghost" size="2">
        <Icon name="close" size={16} />
      </IconButton>
      <IconButton variant="ghost" size="2">
        <Icon name="minimize" size={16} />
      </IconButton>
      <IconButton variant="ghost" size="2">
        <Icon name="fullscreen" size={16} />
      </IconButton>
    </Flex>
  ),
};

export const SocialMedia: Story = {
  render: () => (
    <Flex gap="3" align="center">
      <IconButton variant="soft" radius="full">
        <Icon name="thumb_up" size={18} />
      </IconButton>
      <IconButton variant="soft" radius="full">
        <Icon name="favorite" size={18} />
      </IconButton>
      <IconButton variant="soft" radius="full">
        <Icon name="share" size={18} />
      </IconButton>
      <IconButton variant="soft" radius="full">
        <Icon name="bookmark" size={18} />
      </IconButton>
    </Flex>
  ),
};

export const Loading: Story = {
  render: () => (
    <Flex gap="3" align="center">
      <IconButton loading>
        <Icon name="send" size={18} />
      </IconButton>
      <IconButton loading variant="soft">
        <Icon name="upload" size={18} />
      </IconButton>
      <IconButton loading variant="outline">
        <Icon name="download" size={18} />
      </IconButton>
    </Flex>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Flex gap="3" align="center">
      <IconButton disabled>
        <Icon name="add" size={18} />
      </IconButton>
      <IconButton disabled variant="soft">
        <Icon name="edit" size={18} />
      </IconButton>
      <IconButton disabled variant="outline">
        <Icon name="delete" size={18} />
      </IconButton>
    </Flex>
  ),
};

export const TableActions: Story = {
  render: () => (
    <Flex gap="1" align="center">
      <Tooltip content="View">
        <IconButton variant="ghost" size="1">
          <Icon name="visibility" size={16} />
        </IconButton>
      </Tooltip>
      <Tooltip content="Edit">
        <IconButton variant="ghost" size="1">
          <Icon name="edit" size={16} />
        </IconButton>
      </Tooltip>
      <Tooltip content="Copy">
        <IconButton variant="ghost" size="1">
          <Icon name="content_copy" size={16} />
        </IconButton>
      </Tooltip>
      <Tooltip content="Delete">
        <IconButton variant="ghost" size="1" color="red">
          <Icon name="delete" size={16} />
        </IconButton>
      </Tooltip>
    </Flex>
  ),
};

