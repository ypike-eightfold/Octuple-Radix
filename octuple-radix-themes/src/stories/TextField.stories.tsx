import type { Meta, StoryObj } from '@storybook/react';
import { TextField, Flex } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/TextField',
  component: TextField.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['soft', 'surface'],
      description: 'TextField variant (classic is hidden)',
    },
  },
} satisfies Meta<typeof TextField.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => <TextField.Root placeholder="Search..." />,
};

export const WithIcon: Story = {
  render: () => (
    <Flex direction="column" gap="3" style={{ width: 300 }}>
      <TextField.Root placeholder="Search...">
        <TextField.Slot>
          <Icon name="search" size={16} />
        </TextField.Slot>
      </TextField.Root>

      <TextField.Root placeholder="Enter email...">
        <TextField.Slot>
          <Icon name="mail" size={16} />
        </TextField.Slot>
        <TextField.Slot>
          <Icon name="info" size={16} color="var(--gray-9)" />
        </TextField.Slot>
      </TextField.Root>
    </Flex>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Flex direction="column" gap="3" style={{ width: 300 }}>
      <TextField.Root variant="soft" placeholder="Soft variant" />
      <TextField.Root variant="surface" placeholder="Surface variant" />
    </Flex>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Flex direction="column" gap="3" align="start">
      <TextField.Root size="1" placeholder="Size 1" style={{ width: 200 }} />
      <TextField.Root size="2" placeholder="Size 2" style={{ width: 250 }} />
      <TextField.Root size="3" placeholder="Size 3" style={{ width: 300 }} />
    </Flex>
  ),
};

export const Disabled: Story = {
  render: () => (
    <TextField.Root
      defaultValue="Disabled input"
      disabled
      style={{ width: 300 }}
    />
  ),
};

