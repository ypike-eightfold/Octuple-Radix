import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Text, CheckboxGroup } from '@radix-ui/themes';

const meta = {
  title: 'Components/Checkbox Group',
  component: CheckboxGroup.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof CheckboxGroup.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <CheckboxGroup.Root defaultValue={['1']}>
      <CheckboxGroup.Item value="1">Option 1</CheckboxGroup.Item>
      <CheckboxGroup.Item value="2">Option 2</CheckboxGroup.Item>
      <CheckboxGroup.Item value="3">Option 3</CheckboxGroup.Item>
    </CheckboxGroup.Root>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Text size="2" weight="bold">Select your interests</Text>
      <CheckboxGroup.Root defaultValue={['design']}>
        <CheckboxGroup.Item value="design">Design</CheckboxGroup.Item>
        <CheckboxGroup.Item value="development">Development</CheckboxGroup.Item>
        <CheckboxGroup.Item value="marketing">Marketing</CheckboxGroup.Item>
        <CheckboxGroup.Item value="sales">Sales</CheckboxGroup.Item>
      </CheckboxGroup.Root>
    </Flex>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <Text size="1" weight="bold">Size 1 (Small)</Text>
        <CheckboxGroup.Root defaultValue={['1']} size="1">
          <CheckboxGroup.Item value="1">Small option 1</CheckboxGroup.Item>
          <CheckboxGroup.Item value="2">Small option 2</CheckboxGroup.Item>
        </CheckboxGroup.Root>
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 2 (Default)</Text>
        <CheckboxGroup.Root defaultValue={['1']} size="2">
          <CheckboxGroup.Item value="1">Default option 1</CheckboxGroup.Item>
          <CheckboxGroup.Item value="2">Default option 2</CheckboxGroup.Item>
        </CheckboxGroup.Root>
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="3" weight="bold">Size 3 (Large)</Text>
        <CheckboxGroup.Root defaultValue={['1']} size="3">
          <CheckboxGroup.Item value="1">Large option 1</CheckboxGroup.Item>
          <CheckboxGroup.Item value="2">Large option 2</CheckboxGroup.Item>
        </CheckboxGroup.Root>
      </Flex>
    </Flex>
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Soft</Text>
        <CheckboxGroup.Root defaultValue={['1']} variant="soft">
          <CheckboxGroup.Item value="1">Option 1</CheckboxGroup.Item>
          <CheckboxGroup.Item value="2">Option 2</CheckboxGroup.Item>
        </CheckboxGroup.Root>
      </Flex>
    </Flex>
  ),
};

export const Disabled: Story = {
  render: () => (
    <CheckboxGroup.Root defaultValue={['1']} disabled>
      <CheckboxGroup.Item value="1">Option 1 (Disabled)</CheckboxGroup.Item>
      <CheckboxGroup.Item value="2">Option 2 (Disabled)</CheckboxGroup.Item>
      <CheckboxGroup.Item value="3">Option 3 (Disabled)</CheckboxGroup.Item>
    </CheckboxGroup.Root>
  ),
};

export const Colors: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <CheckboxGroup.Root defaultValue={['1']} color="indigo">
        <CheckboxGroup.Item value="1">Indigo</CheckboxGroup.Item>
        <CheckboxGroup.Item value="2">Indigo option</CheckboxGroup.Item>
      </CheckboxGroup.Root>

      <CheckboxGroup.Root defaultValue={['1']} color="blue">
        <CheckboxGroup.Item value="1">Blue</CheckboxGroup.Item>
        <CheckboxGroup.Item value="2">Blue option</CheckboxGroup.Item>
      </CheckboxGroup.Root>

      <CheckboxGroup.Root defaultValue={['1']} color="green">
        <CheckboxGroup.Item value="1">Green</CheckboxGroup.Item>
        <CheckboxGroup.Item value="2">Green option</CheckboxGroup.Item>
      </CheckboxGroup.Root>
    </Flex>
  ),
};

