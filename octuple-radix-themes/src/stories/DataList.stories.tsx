import type { Meta, StoryObj } from '@storybook/react';
import { DataList, Card, Flex, Badge, Link } from '@radix-ui/themes';

const meta = {
  title: 'Components/Data List',
  component: DataList.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataList.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <DataList.Root>
      <DataList.Item>
        <DataList.Label>Name</DataList.Label>
        <DataList.Value>John Doe</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label>Email</DataList.Label>
        <DataList.Value>john.doe@example.com</DataList.Value>
      </DataList.Item>
      <DataList.Item>
        <DataList.Label>Role</DataList.Label>
        <DataList.Value>Developer</DataList.Value>
      </DataList.Item>
    </DataList.Root>
  ),
};

export const UserProfile: Story = {
  render: () => (
    <Card>
      <DataList.Root>
        <DataList.Item>
          <DataList.Label minWidth="120px">Full Name</DataList.Label>
          <DataList.Value>Sarah Johnson</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Email</DataList.Label>
          <DataList.Value>
            <Link href="mailto:sarah.j@example.com">sarah.j@example.com</Link>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Department</DataList.Label>
          <DataList.Value>
            <Badge color="indigo">Engineering</Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Role</DataList.Label>
          <DataList.Value>Senior Frontend Developer</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Status</DataList.Label>
          <DataList.Value>
            <Badge color="green">Active</Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Joined</DataList.Label>
          <DataList.Value>January 15, 2023</DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Card>
  ),
};

export const ProjectDetails: Story = {
  render: () => (
    <Card>
      <DataList.Root>
        <DataList.Item align="start">
          <DataList.Label minWidth="120px">Project Name</DataList.Label>
          <DataList.Value>Octuple Radix Design System</DataList.Value>
        </DataList.Item>
        <DataList.Item align="start">
          <DataList.Label minWidth="120px">Description</DataList.Label>
          <DataList.Value>
            A modern design system built on Radix Themes with indigo accent, 
            Poppins font, and Material Symbols icons.
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Status</DataList.Label>
          <DataList.Value>
            <Badge color="blue">In Progress</Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Priority</DataList.Label>
          <DataList.Value>
            <Badge color="orange">High</Badge>
          </DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="120px">Due Date</DataList.Label>
          <DataList.Value>December 31, 2025</DataList.Value>
        </DataList.Item>
        <DataList.Item align="start">
          <DataList.Label minWidth="120px">Team</DataList.Label>
          <DataList.Value>
            <Flex gap="1" wrap="wrap">
              <Badge>Design</Badge>
              <Badge>Engineering</Badge>
              <Badge>Product</Badge>
            </Flex>
          </DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Card>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Card>
        <DataList.Root size="1">
          <DataList.Item>
            <DataList.Label>Size 1</DataList.Label>
            <DataList.Value>Small</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Label</DataList.Label>
            <DataList.Value>Value</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Card>

      <Card>
        <DataList.Root size="2">
          <DataList.Item>
            <DataList.Label>Size 2</DataList.Label>
            <DataList.Value>Default</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Label</DataList.Label>
            <DataList.Value>Value</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Card>

      <Card>
        <DataList.Root size="3">
          <DataList.Item>
            <DataList.Label>Size 3</DataList.Label>
            <DataList.Value>Large</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Label</DataList.Label>
            <DataList.Value>Value</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Card>
    </Flex>
  ),
};

export const Orientation: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Card>
        <DataList.Root orientation="vertical">
          <DataList.Item>
            <DataList.Label>Vertical Orientation</DataList.Label>
            <DataList.Value>Labels on top, values below</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label>Item 2</DataList.Label>
            <DataList.Value>Second item</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Card>

      <Card>
        <DataList.Root orientation="horizontal">
          <DataList.Item>
            <DataList.Label minWidth="140px">Horizontal</DataList.Label>
            <DataList.Value>Side by side (default)</DataList.Value>
          </DataList.Item>
          <DataList.Item>
            <DataList.Label minWidth="140px">Item 2</DataList.Label>
            <DataList.Value>Second item</DataList.Value>
          </DataList.Item>
        </DataList.Root>
      </Card>
    </Flex>
  ),
};

export const SystemInfo: Story = {
  render: () => (
    <Card style={{ maxWidth: 500 }}>
      <DataList.Root>
        <DataList.Item>
          <DataList.Label minWidth="140px">Operating System</DataList.Label>
          <DataList.Value>macOS Sonoma 14.6</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="140px">Processor</DataList.Label>
          <DataList.Value>Apple M2 Pro</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="140px">Memory</DataList.Label>
          <DataList.Value>32 GB</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="140px">Storage</DataList.Label>
          <DataList.Value>1 TB SSD</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="140px">Graphics</DataList.Label>
          <DataList.Value>Apple M2 Pro 19-core GPU</DataList.Value>
        </DataList.Item>
        <DataList.Item>
          <DataList.Label minWidth="140px">Display</DataList.Label>
          <DataList.Value>14-inch Liquid Retina XDR</DataList.Value>
        </DataList.Item>
      </DataList.Root>
    </Card>
  ),
};

