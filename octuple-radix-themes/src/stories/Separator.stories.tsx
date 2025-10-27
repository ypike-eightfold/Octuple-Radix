import type { Meta, StoryObj } from '@storybook/react';
import { Separator, Flex, Text, Box } from '@radix-ui/themes';

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: () => (
    <Flex direction="column" gap="3" style={{ width: 300 }}>
      <Text>Above separator</Text>
      <Separator size="4" />
      <Text>Below separator</Text>
    </Flex>
  ),
};

export const Vertical: Story = {
  render: () => (
    <Flex align="center" gap="3" style={{ height: 80 }}>
      <Text>Left</Text>
      <Separator orientation="vertical" />
      <Text>Center</Text>
      <Separator orientation="vertical" />
      <Text>Right</Text>
    </Flex>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <Flex direction="column" gap="5" style={{ width: 300 }}>
      <Box>
        <Text size="2" weight="bold" mb="2">Size 1</Text>
        <Separator size="1" />
      </Box>

      <Box>
        <Text size="2" weight="bold" mb="2">Size 2</Text>
        <Separator size="2" />
      </Box>

      <Box>
        <Text size="2" weight="bold" mb="2">Size 3</Text>
        <Separator size="3" />
      </Box>

      <Box>
        <Text size="2" weight="bold" mb="2">Size 4</Text>
        <Separator size="4" />
      </Box>
    </Flex>
  ),
};

export const InCard: Story = {
  render: () => (
    <Box style={{ maxWidth: 400 }}>
      <Flex direction="column" gap="3">
        <Text size="4" weight="bold">Settings</Text>
        <Separator size="4" />
        <Flex direction="column" gap="2">
          <Text size="2" weight="medium">Profile</Text>
          <Text size="2" color="gray">Manage your profile information</Text>
        </Flex>
        <Separator size="4" />
        <Flex direction="column" gap="2">
          <Text size="2" weight="medium">Security</Text>
          <Text size="2" color="gray">Update your password and security settings</Text>
        </Flex>
        <Separator size="4" />
        <Flex direction="column" gap="2">
          <Text size="2" weight="medium">Notifications</Text>
          <Text size="2" color="gray">Configure notification preferences</Text>
        </Flex>
      </Flex>
    </Box>
  ),
};

