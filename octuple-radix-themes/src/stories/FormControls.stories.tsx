import type { Meta, StoryObj } from '@storybook/react';
import { Flex, Text, Checkbox, RadioGroup, Switch, Slider } from '@radix-ui/themes';

const meta = {
  title: 'Components/Form Controls',
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Checkboxes: Story = {
  render: () => (
    <Flex direction="column" gap="3">
      <Text as="label" size="2">
        <Flex gap="2">
          <Checkbox defaultChecked /> Agree to Terms and Conditions
        </Flex>
      </Text>
      <Text as="label" size="2">
        <Flex gap="2">
          <Checkbox /> Subscribe to newsletter
        </Flex>
      </Text>
      <Text as="label" size="2" color="gray">
        <Flex gap="2">
          <Checkbox disabled /> Disabled option
        </Flex>
      </Text>
    </Flex>
  ),
};

export const CheckboxSizes: Story = {
  render: () => (
    <Flex gap="4">
      <Flex gap="2" align="center">
        <Checkbox size="1" defaultChecked />
        <Text size="1">Size 1</Text>
      </Flex>
      <Flex gap="2" align="center">
        <Checkbox size="2" defaultChecked />
        <Text size="2">Size 2</Text>
      </Flex>
      <Flex gap="2" align="center">
        <Checkbox size="3" defaultChecked />
        <Text size="3">Size 3</Text>
      </Flex>
    </Flex>
  ),
};

export const RadioButtons: Story = {
  render: () => (
    <RadioGroup.Root defaultValue="1">
      <Flex direction="column" gap="2">
        <Text as="label" size="2">
          <Flex gap="2">
            <RadioGroup.Item value="1" /> Default
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <RadioGroup.Item value="2" /> Comfortable
          </Flex>
        </Text>
        <Text as="label" size="2">
          <Flex gap="2">
            <RadioGroup.Item value="3" /> Compact
          </Flex>
        </Text>
      </Flex>
    </RadioGroup.Root>
  ),
};

export const Switches: Story = {
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
      <Text as="label" size="2" color="gray">
        <Flex gap="2" align="center">
          <Switch disabled /> Disabled
        </Flex>
      </Text>
    </Flex>
  ),
};

export const Sliders: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: 300 }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">
          Volume
        </Text>
        <Slider defaultValue={[50]} />
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">
          Range
        </Text>
        <Slider defaultValue={[25, 75]} />
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold" color="gray">
          Disabled
        </Text>
        <Slider defaultValue={[60]} disabled />
      </Flex>
    </Flex>
  ),
};

