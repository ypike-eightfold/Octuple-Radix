import type { Meta, StoryObj } from '@storybook/react';
import { Callout, Flex } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Callout',
  component: Callout.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Callout.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Callout.Root>
      <Callout.Icon>
        <Icon name="info" size={20} />
      </Callout.Icon>
      <Callout.Text>
        You will need admin privileges to install and access this application.
      </Callout.Text>
    </Callout.Root>
  ),
};

export const Info: Story = {
  render: () => (
    <Callout.Root color="blue">
      <Callout.Icon>
        <Icon name="info" size={20} />
      </Callout.Icon>
      <Callout.Text>
        This feature is in beta. We're actively collecting feedback to improve it.
      </Callout.Text>
    </Callout.Root>
  ),
};

export const Success: Story = {
  render: () => (
    <Callout.Root color="green">
      <Callout.Icon>
        <Icon name="check_circle" size={20} />
      </Callout.Icon>
      <Callout.Text>
        Your changes have been saved successfully.
      </Callout.Text>
    </Callout.Root>
  ),
};

export const Warning: Story = {
  render: () => (
    <Callout.Root color="orange">
      <Callout.Icon>
        <Icon name="warning" size={20} />
      </Callout.Icon>
      <Callout.Text>
        Your subscription will expire in 3 days. Please renew to continue using premium features.
      </Callout.Text>
    </Callout.Root>
  ),
};

export const Error: Story = {
  render: () => (
    <Callout.Root color="red">
      <Callout.Icon>
        <Icon name="error" size={20} />
      </Callout.Icon>
      <Callout.Text>
        Access denied. You do not have permission to perform this action.
      </Callout.Text>
    </Callout.Root>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Callout.Root>
        <Callout.Icon>
          <Icon name="info" size={20} />
        </Callout.Icon>
        <Callout.Text>
          Default callout with informational message.
        </Callout.Text>
      </Callout.Root>

      <Callout.Root color="blue">
        <Callout.Icon>
          <Icon name="info" size={20} />
        </Callout.Icon>
        <Callout.Text>
          Blue callout for general information.
        </Callout.Text>
      </Callout.Root>

      <Callout.Root color="green">
        <Callout.Icon>
          <Icon name="check_circle" size={20} />
        </Callout.Icon>
        <Callout.Text>
          Green callout for success messages.
        </Callout.Text>
      </Callout.Root>

      <Callout.Root color="orange">
        <Callout.Icon>
          <Icon name="warning" size={20} />
        </Callout.Icon>
        <Callout.Text>
          Orange callout for warnings.
        </Callout.Text>
      </Callout.Root>

      <Callout.Root color="red">
        <Callout.Icon>
          <Icon name="error" size={20} />
        </Callout.Icon>
        <Callout.Text>
          Red callout for errors.
        </Callout.Text>
      </Callout.Root>
    </Flex>
  ),
};

export const WithoutIcon: Story = {
  render: () => (
    <Callout.Root>
      <Callout.Text>
        This is a callout without an icon. It still draws attention to important information.
      </Callout.Text>
    </Callout.Root>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Callout.Root size="1">
        <Callout.Icon>
          <Icon name="info" size={16} />
        </Callout.Icon>
        <Callout.Text>
          Small callout - Size 1
        </Callout.Text>
      </Callout.Root>

      <Callout.Root size="2">
        <Callout.Icon>
          <Icon name="info" size={18} />
        </Callout.Icon>
        <Callout.Text>
          Medium callout - Size 2 (Default)
        </Callout.Text>
      </Callout.Root>

      <Callout.Root size="3">
        <Callout.Icon>
          <Icon name="info" size={20} />
        </Callout.Icon>
        <Callout.Text>
          Large callout - Size 3
        </Callout.Text>
      </Callout.Root>
    </Flex>
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Callout.Root variant="soft" color="indigo">
        <Callout.Icon>
          <Icon name="info" size={20} />
        </Callout.Icon>
        <Callout.Text>
          Soft variant - Subtle background
        </Callout.Text>
      </Callout.Root>

      <Callout.Root variant="outline" color="indigo">
        <Callout.Icon>
          <Icon name="info" size={20} />
        </Callout.Icon>
        <Callout.Text>
          Outline variant - Border only
        </Callout.Text>
      </Callout.Root>
    </Flex>
  ),
};

