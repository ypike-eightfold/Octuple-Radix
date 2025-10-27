import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Switch, Flex, Text } from '@radix-ui/themes';

const meta = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['1', '2', '3'],
      description: 'Switch size',
    },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => <Switch defaultChecked />,
};

export const AllSizes: Story = {
  render: () => (
    <Flex gap="4" align="center">
      <Flex gap="2" align="center">
        <Switch size="1" defaultChecked />
        <Text size="1">Size 1</Text>
      </Flex>
      <Flex gap="2" align="center">
        <Switch size="2" defaultChecked />
        <Text size="2">Size 2</Text>
      </Flex>
      <Flex gap="2" align="center">
        <Switch size="3" defaultChecked />
        <Text size="3">Size 3</Text>
      </Flex>
    </Flex>
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Switch defaultChecked /> Enable notifications
        </Flex>
      </Text>
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Switch /> Dark mode
        </Flex>
      </Text>
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Switch /> Auto-save
        </Flex>
      </Text>
    </Flex>
  ),
};

export const States: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Switch /> Off (unchecked)
        </Flex>
      </Text>
      <Text as="label" size="2">
        <Flex gap="2" align="center">
          <Switch defaultChecked /> On (checked)
        </Flex>
      </Text>
      <Text as="label" size="2" color="gray">
        <Flex gap="2" align="center">
          <Switch disabled /> Disabled (off)
        </Flex>
      </Text>
      <Text as="label" size="2" color="gray">
        <Flex gap="2" align="center">
          <Switch defaultChecked disabled /> Disabled (on)
        </Flex>
      </Text>
    </Flex>
  ),
};

export const Controlled: Story = {
  render: () => {
    const [checked, setChecked] = (React as any).useState(false);
    return (
      <Flex direction="column" gap="3">
        <Text as="label" size="2">
          <Flex gap="2" align="center">
            <Switch checked={checked} onCheckedChange={setChecked} />
            Toggle feature: {checked ? 'ON' : 'OFF'}
          </Flex>
        </Text>
        <Text size="1" color="gray">
          Current state: {checked ? 'Enabled' : 'Disabled'}
        </Text>
      </Flex>
    );
  },
};

