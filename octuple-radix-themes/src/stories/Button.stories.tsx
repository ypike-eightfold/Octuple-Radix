import type { Meta, StoryObj } from '@storybook/react';
import { Button, Flex } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Button',
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const AllVariants: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Flex gap="3">
        <Button variant="solid">Solid</Button>
        <Button variant="soft">Soft</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="surface">Surface</Button>
      </Flex>
    </Flex>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Flex direction="column" gap="3" align="start">
      <Button size="1">Size 1</Button>
      <Button size="2">Size 2</Button>
      <Button size="3">Size 3</Button>
      <Button size="4">Size 4</Button>
    </Flex>
  ),
};

export const WithIcons: Story = {
  render: () => (
    <Flex gap="3">
      <Button>
        <Icon name="add" size={18} />
        Create New
      </Button>
      <Button variant="soft">
        Save
        <Icon name="check" size={18} />
      </Button>
      <Button variant="outline">
        <Icon name="download" size={18} />
      </Button>
    </Flex>
  ),
};

export const Loading: Story = {
  render: () => (
    <Flex gap="3">
      <Button loading>Processing</Button>
      <Button variant="soft" loading>Loading</Button>
      <Button variant="outline" loading>Please wait</Button>
    </Flex>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Flex gap="3">
      <Button disabled>Disabled</Button>
      <Button variant="soft" disabled>Disabled</Button>
      <Button variant="outline" disabled>Disabled</Button>
    </Flex>
  ),
};

export const HighContrast: Story = {
  render: () => (
    <Flex gap="3">
      <Button highContrast>High Contrast</Button>
      <Button variant="soft" highContrast>High Contrast</Button>
      <Button variant="outline" highContrast>High Contrast</Button>
    </Flex>
  ),
};

export const EightfoldGradient: Story = {
  render: () => (
    <Flex gap="3" direction="column" align="start">
      <Button className="button-eightfold" size="2">
        Eightfold Gradient
      </Button>
      <Button className="button-eightfold" size="3">
        <Icon name="star" size={20} />
        Featured Action
      </Button>
    </Flex>
  ),
};

