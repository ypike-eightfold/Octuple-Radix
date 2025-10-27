import type { Meta, StoryObj } from '@storybook/react';
import { Select, Flex } from '@radix-ui/themes';

const meta = {
  title: 'Components/Select',
  component: Select.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['soft', 'ghost', 'surface'],
      description: 'Select variant (classic is hidden)',
    },
  },
} satisfies Meta<typeof Select.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <Select.Root defaultValue="apple">
      <Select.Trigger style={{ width: 200 }} />
      <Select.Content>
        <Select.Group>
          <Select.Label>Fruits</Select.Label>
          <Select.Item value="orange">Orange</Select.Item>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="grape">Grape</Select.Item>
        </Select.Group>
        <Select.Separator />
        <Select.Group>
          <Select.Label>Vegetables</Select.Label>
          <Select.Item value="carrot">Carrot</Select.Item>
          <Select.Item value="potato">Potato</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Select.Root defaultValue="apple">
        <Select.Trigger variant="soft" style={{ width: 200 }} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger variant="ghost" style={{ width: 200 }} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger variant="surface" style={{ width: 200 }} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </Flex>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Flex direction="column" gap="3" align="start">
      <Select.Root defaultValue="apple">
        <Select.Trigger size="1" style={{ width: 150 }} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger size="2" style={{ width: 200 }} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>

      <Select.Root defaultValue="apple">
        <Select.Trigger size="3" style={{ width: 250 }} />
        <Select.Content>
          <Select.Item value="apple">Apple</Select.Item>
          <Select.Item value="orange">Orange</Select.Item>
        </Select.Content>
      </Select.Root>
    </Flex>
  ),
};

