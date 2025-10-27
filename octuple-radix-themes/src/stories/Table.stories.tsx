import type { Meta, StoryObj } from '@storybook/react';
import { Table, Badge, IconButton, Tooltip, Flex } from '@radix-ui/themes';
import { Icon } from '../components/Icon';

const meta = {
  title: 'Components/Table',
  component: Table.Root,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Table.Root>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John Doe</Table.Cell>
          <Table.Cell>john@example.com</Table.Cell>
          <Table.Cell>Developer</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jane Smith</Table.Cell>
          <Table.Cell>jane@example.com</Table.Cell>
          <Table.Cell>Designer</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bob Johnson</Table.Cell>
          <Table.Cell>bob@example.com</Table.Cell>
          <Table.Cell>Manager</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};

export const WithBadges: Story = {
  render: () => (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Project</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Priority</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Website Redesign</Table.Cell>
          <Table.Cell>
            <Badge color="blue">In Progress</Badge>
          </Table.Cell>
          <Table.Cell>
            <Badge color="red">High</Badge>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Mobile App</Table.Cell>
          <Table.Cell>
            <Badge color="green">Completed</Badge>
          </Table.Cell>
          <Table.Cell>
            <Badge color="orange">Medium</Badge>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>API Integration</Table.Cell>
          <Table.Cell>
            <Badge color="gray">Planned</Badge>
          </Table.Cell>
          <Table.Cell>
            <Badge color="gray">Low</Badge>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};

export const WithActions: Story = {
  render: () => (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>Name</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Email</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Role</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Actions</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Sarah Johnson</Table.Cell>
          <Table.Cell>sarah@example.com</Table.Cell>
          <Table.Cell>
            <Badge color="indigo">Admin</Badge>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="1">
              <Tooltip content="Edit">
                <IconButton variant="ghost" size="1">
                  <Icon name="edit" size={16} />
                </IconButton>
              </Tooltip>
              <Tooltip content="Delete">
                <IconButton variant="ghost" size="1" color="red">
                  <Icon name="delete" size={16} />
                </IconButton>
              </Tooltip>
            </Flex>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Mike Chen</Table.Cell>
          <Table.Cell>mike@example.com</Table.Cell>
          <Table.Cell>
            <Badge color="blue">Member</Badge>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="1">
              <Tooltip content="Edit">
                <IconButton variant="ghost" size="1">
                  <Icon name="edit" size={16} />
                </IconButton>
              </Tooltip>
              <Tooltip content="Delete">
                <IconButton variant="ghost" size="1" color="red">
                  <Icon name="delete" size={16} />
                </IconButton>
              </Tooltip>
            </Flex>
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Lisa Wong</Table.Cell>
          <Table.Cell>lisa@example.com</Table.Cell>
          <Table.Cell>
            <Badge color="green">Viewer</Badge>
          </Table.Cell>
          <Table.Cell>
            <Flex gap="1">
              <Tooltip content="Edit">
                <IconButton variant="ghost" size="1">
                  <Icon name="edit" size={16} />
                </IconButton>
              </Tooltip>
              <Tooltip content="Delete">
                <IconButton variant="ghost" size="1" color="red">
                  <Icon name="delete" size={16} />
                </IconButton>
              </Tooltip>
            </Flex>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Table.Root size="1">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Size 1</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Compact</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Small</Table.Cell>
            <Table.Cell>Data</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>

      <Table.Root size="2">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Size 2</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Default</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Medium</Table.Cell>
            <Table.Cell>Data</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>

      <Table.Root size="3">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Size 3</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Large</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Large</Table.Cell>
            <Table.Cell>Data</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Flex>
  ),
};

export const Variants: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Table.Root variant="ghost">
        <Table.Header>
          <Table.Row>
            <Table.ColumnHeaderCell>Ghost Variant</Table.ColumnHeaderCell>
            <Table.ColumnHeaderCell>Minimal</Table.ColumnHeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          <Table.Row>
            <Table.Cell>Row 1</Table.Cell>
            <Table.Cell>Data</Table.Cell>
          </Table.Row>
          <Table.Row>
            <Table.Cell>Row 2</Table.Cell>
            <Table.Cell>Data</Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table.Root>
    </Flex>
  ),
};

export const ComplexData: Story = {
  render: () => (
    <Table.Root>
      <Table.Header>
        <Table.Row>
          <Table.ColumnHeaderCell>ID</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Product</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Status</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Price</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Quantity</Table.ColumnHeaderCell>
          <Table.ColumnHeaderCell>Total</Table.ColumnHeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>#001</Table.Cell>
          <Table.Cell>Wireless Headphones</Table.Cell>
          <Table.Cell>
            <Badge color="green">In Stock</Badge>
          </Table.Cell>
          <Table.Cell>$99.99</Table.Cell>
          <Table.Cell>45</Table.Cell>
          <Table.Cell>$4,499.55</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>#002</Table.Cell>
          <Table.Cell>Laptop Stand</Table.Cell>
          <Table.Cell>
            <Badge color="orange">Low Stock</Badge>
          </Table.Cell>
          <Table.Cell>$49.99</Table.Cell>
          <Table.Cell>8</Table.Cell>
          <Table.Cell>$399.92</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>#003</Table.Cell>
          <Table.Cell>USB-C Cable</Table.Cell>
          <Table.Cell>
            <Badge color="red">Out of Stock</Badge>
          </Table.Cell>
          <Table.Cell>$19.99</Table.Cell>
          <Table.Cell>0</Table.Cell>
          <Table.Cell>$0.00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>#004</Table.Cell>
          <Table.Cell>Mechanical Keyboard</Table.Cell>
          <Table.Cell>
            <Badge color="green">In Stock</Badge>
          </Table.Cell>
          <Table.Cell>$149.99</Table.Cell>
          <Table.Cell>23</Table.Cell>
          <Table.Cell>$3,449.77</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table.Root>
  ),
};

