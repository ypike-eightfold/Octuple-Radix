import type { Meta, StoryObj } from '@storybook/react';
import { TextArea, Flex, Text } from '@radix-ui/themes';

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['soft', 'surface'],
      description: 'TextArea variant (classic is hidden)',
    },
    size: {
      control: 'select',
      options: ['1', '2', '3'],
      description: 'TextArea size',
    },
  },
} satisfies Meta<typeof TextArea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Basic: Story = {
  render: () => (
    <TextArea placeholder="Write your message here..." style={{ width: 400 }} />
  ),
};

export const WithLabel: Story = {
  render: () => (
    <Flex direction="column" gap="2" style={{ width: 400 }}>
      <Text size="2" weight="medium">
        Description
      </Text>
      <TextArea placeholder="Enter a description..." />
    </Flex>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Flex direction="column" gap="3" style={{ width: 400 }}>
      <TextArea size="1" placeholder="Size 1 - Small" />
      <TextArea size="2" placeholder="Size 2 - Medium (default)" />
      <TextArea size="3" placeholder="Size 3 - Large" />
    </Flex>
  ),
};

export const AllVariants: Story = {
  render: () => (
    <Flex direction="column" gap="3" style={{ width: 400 }}>
      <TextArea variant="soft" placeholder="Soft variant" />
      <TextArea variant="surface" placeholder="Surface variant" />
    </Flex>
  ),
};

export const WithDefaultValue: Story = {
  render: () => (
    <TextArea
      defaultValue="This is some default text that can be edited."
      style={{ width: 400 }}
    />
  ),
};

export const Disabled: Story = {
  render: () => (
    <TextArea
      placeholder="This text area is disabled"
      disabled
      style={{ width: 400 }}
    />
  ),
};

export const WithRows: Story = {
  render: () => (
    <Flex direction="column" gap="3" style={{ width: 400 }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">
          Small (3 rows)
        </Text>
        <TextArea placeholder="3 rows..." rows={3} />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">
          Large (8 rows)
        </Text>
        <TextArea placeholder="8 rows..." rows={8} />
      </Flex>
    </Flex>
  ),
};

export const Resize: Story = {
  render: () => (
    <Flex direction="column" gap="3" style={{ width: 400 }}>
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">
          Vertical Resize (default)
        </Text>
        <TextArea placeholder="Can be resized vertically..." />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">
          No Resize
        </Text>
        <TextArea
          placeholder="Cannot be resized..."
          style={{ resize: 'none' }}
        />
      </Flex>
      
      <Flex direction="column" gap="2">
        <Text size="2" weight="medium">
          Both Directions
        </Text>
        <TextArea
          placeholder="Can be resized in both directions..."
          style={{ resize: 'both' }}
        />
      </Flex>
    </Flex>
  ),
};

