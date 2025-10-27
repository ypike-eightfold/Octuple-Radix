import type { Meta, StoryObj } from '@storybook/react';
import { Slider, Flex, Text, Box } from '@radix-ui/themes';

const meta = {
  title: 'Components/Slider',
  component: Slider,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Slider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Box style={{ width: 300 }}>
      <Slider defaultValue={[50]} />
    </Box>
  ),
};

export const Range: Story = {
  render: () => (
    <Box style={{ width: 300 }}>
      <Slider defaultValue={[25, 75]} />
    </Box>
  ),
};

export const WithLabels: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: 400 }}>
      <Flex direction="column" gap="2">
        <Flex justify="between">
          <Text size="2" weight="bold">Volume</Text>
          <Text size="2" color="gray">50%</Text>
        </Flex>
        <Slider defaultValue={[50]} />
      </Flex>

      <Flex direction="column" gap="2">
        <Flex justify="between">
          <Text size="2" weight="bold">Brightness</Text>
          <Text size="2" color="gray">75%</Text>
        </Flex>
        <Slider defaultValue={[75]} />
      </Flex>

      <Flex direction="column" gap="2">
        <Flex justify="between">
          <Text size="2" weight="bold">Contrast</Text>
          <Text size="2" color="gray">30%</Text>
        </Flex>
        <Slider defaultValue={[30]} />
      </Flex>
    </Flex>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Flex direction="column" gap="5" style={{ width: 300 }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 1</Text>
        <Slider defaultValue={[50]} size="1" />
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 2 (Default)</Text>
        <Slider defaultValue={[50]} size="2" />
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Size 3</Text>
        <Slider defaultValue={[50]} size="3" />
      </Flex>
    </Flex>
  ),
};

export const AllColors: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: 300 }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Indigo (Default)</Text>
        <Slider defaultValue={[60]} color="indigo" />
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Blue</Text>
        <Slider defaultValue={[60]} color="blue" />
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Green</Text>
        <Slider defaultValue={[60]} color="green" />
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Red</Text>
        <Slider defaultValue={[60]} color="red" />
      </Flex>
    </Flex>
  ),
};

export const Disabled: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: 300 }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold" color="gray">Disabled Slider</Text>
        <Slider defaultValue={[60]} disabled />
      </Flex>
    </Flex>
  ),
};

export const HighContrast: Story = {
  render: () => (
    <Flex direction="column" gap="4" style={{ width: 300 }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">High Contrast</Text>
        <Slider defaultValue={[60]} highContrast />
      </Flex>

      <Flex direction="column" gap="2">
        <Text size="2" weight="bold">Normal Contrast</Text>
        <Slider defaultValue={[60]} />
      </Flex>
    </Flex>
  ),
};

