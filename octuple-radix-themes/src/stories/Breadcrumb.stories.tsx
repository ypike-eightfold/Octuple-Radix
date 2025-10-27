import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '../components/Breadcrumb';
import { Flex, Card } from '@radix-ui/themes';

const meta = {
  title: 'Components/Breadcrumb',
  component: Breadcrumb,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumb>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Electronics', href: '#' },
      { label: 'Laptops' },
    ],
  },
};

export const TwoLevels: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'About' },
    ],
  },
};

export const DeepNesting: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Dashboard', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Project Alpha', href: '#' },
      { label: 'Tasks', href: '#' },
      { label: 'Task Details' },
    ],
  },
};

export const Sizes: Story = {
  render: () => (
    <Flex direction="column" gap="4">
      <Card>
        <Breadcrumb
          size="1"
          items={[
            { label: 'Home', href: '#' },
            { label: 'Products', href: '#' },
            { label: 'Details' },
          ]}
        />
      </Card>
      
      <Card>
        <Breadcrumb
          size="2"
          items={[
            { label: 'Home', href: '#' },
            { label: 'Products', href: '#' },
            { label: 'Details' },
          ]}
        />
      </Card>
      
      <Card>
        <Breadcrumb
          size="3"
          items={[
            { label: 'Home', href: '#' },
            { label: 'Products', href: '#' },
            { label: 'Details' },
          ]}
        />
      </Card>
    </Flex>
  ),
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Documents', href: '#' },
      { label: 'Reports', href: '#' },
      { label: 'Annual Report 2024' },
    ],
    separator: 'arrow_forward_ios',
  },
};

export const WithOnClick: Story = {
  args: {
    items: [
      { label: 'Dashboard', onClick: () => alert('Dashboard clicked') },
      { label: 'Settings', onClick: () => alert('Settings clicked') },
      { label: 'Profile', onClick: () => alert('Profile clicked') },
      { label: 'Edit Profile' },
    ],
  },
};

export const FileSystemPath: Story = {
  args: {
    items: [
      { label: 'Documents', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'octuple-radix', href: '#' },
      { label: 'src', href: '#' },
      { label: 'components' },
    ],
  },
};

